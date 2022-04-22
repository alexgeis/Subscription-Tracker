import "../NewSub/newSub.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "@apollo/client";
import { CREATE_SUBSCRIPTION } from "../../utils/mutations";
import AuthService from "../../utils/auth";

function NewSub() {
  //DUMMY VALUE
  //   const userId = "912398719876123";
  //   const userId = AuthService.getProfile().data._id;

  //state variables
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [subName, setSubName] = useState("");
  const [cost, setCost] = useState("");
  const cost12 = cost * 12;
  const costMonth = cost / 12;
  const [paymentMethod, setPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const [monthlyCost, setMonthlyCost] = useState(true);
  const [annualCost, setAnnualCost] = useState(false);
  const [autoPay, setAutoPay] = useState(false);
  const [autoRenew, setRenew] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [createSubscription, { error }] = useMutation(CREATE_SUBSCRIPTION);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setSubName(inputValue);
    } else if (inputType === "currency-field") {
      setCost(inputValue);
    } else if (inputType === "paymentMethod") {
      setPaymentMethod(inputValue);
    } else {
      setDescription(inputValue);
    }
  };

  const handleCheckboxChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "monthlyP") {
      setMonthlyCost(target.checked);
      setAnnualCost(!annualCost);
    } else if (inputType === "annualP") {
      setAnnualCost(target.checked);
      setMonthlyCost(!monthlyCost);
    } else if (inputType === "autoPay") {
      setAutoPay(target.checked);
    } else {
      setRenew(target.checked);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!subName || !cost) {
      setErrorMessage("New subscription requires name and cost.");
      return;
    }
    try {
      if (monthlyCost === true) {
        const { data } = await createSubscription({
          variables: {
            userId: AuthService.getProfile().data._id,
            subscriptionName: subName,
            monthlyCost: cost,
            annualCost: cost12,
            paymentType: paymentMethod,
            startDate: startDate,
            dueDate: dueDate,
            autoPay: autoPay,
            autoRenew: autoRenew,
          },
        });
      } else if (monthlyCost === false) {
        const { data } = await createSubscription({
          variables: {
            userId: AuthService.getProfile().data._id,
            subscriptionName: subName,
            monthlyCost: costMonth,
            annualCost: cost,
            paymentType: paymentMethod,
            startDate: startDate,
            dueDate: dueDate,
            autoPay: autoPay,
            autoRenew: autoRenew,
          },
        });
      }
      // clear out the input after submit
      console.log("createSubscription method invoked");
      setStartDate(new Date());
      setDueDate(new Date());
      setSubName("");
      setCost("");
      setDescription("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container-fluid">
        <h1 id="newSub">Add New Subscription</h1>
        <label for="name">Subscription Name: </label>
        <input type="text" id="name" name="name" onChange={handleInputChange} />
        <br></br>
        <br></br>
        <p>Start Date</p>
        <DatePicker
          onChange={setStartDate}
          value={startDate}
          id="datePickerStart"
        />
        <p>Due Date</p>
        <DatePicker onChange={setDueDate} value={dueDate} id="datePickerDue" />
        <br></br>
        <br></br> <h2>Billing</h2>
        <input
          type="checkbox"
          id="monthlyP"
          name="monthlyP"
          value="monthlyP"
          checked={monthlyCost}
          data-group="costGroup"
          onChange={handleCheckboxChange}
          //   onChange={(e) => setAnnualCost(!annualCost)}
        />
        <label for="monthlyP"> Monthly</label>
        <br></br>
        <input
          type="checkbox"
          id="annualP"
          name="annualP"
          value="annualP"
          checked={annualCost}
          data-group="costGroup"
          onChange={handleCheckboxChange}
          //   onChange={(e) => setMonthlyCost(!monthlyCost)}
        />
        <label for="annualP"> Annual</label>
        <br></br>
        <input
          type="checkbox"
          id="autoPay"
          name="autoPay"
          value="autoPay"
          checked={autoPay}
          onChange={handleCheckboxChange}
        />
        <label for="autoPay"> Autopay</label>
        <br></br>
        <input
          type="checkbox"
          id="autoRenew"
          name="autoRenew"
          value="autoRenew"
          checked={autoRenew}
          onChange={handleCheckboxChange}
        />
        <label for="autoRenew"> Autorenew</label>
        <br></br>
        <label for="paymentMethod">Payment Method: </label>
        <input
          type="text"
          id="paymentMethod"
          name="paymentMethod"
          onChange={handleInputChange}
        />
        <label for="currency-field">Enter Amount: </label>
        <input
          type="text"
          name="currency-field"
          id="currency-field"
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          //   value=""
          data-type="currency"
          placeholder="$50.00"
          onChange={handleInputChange}
        />
        <br></br>
        <input
          type="text"
          id="subDesc"
          name="subDesc"
          placeholder="Optional Description"
          onChange={handleInputChange}
          value={description}
        />
        <br></br>
        <br></br>
        <button id="newSubBtn" type="submit">
          Save
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default NewSub;
