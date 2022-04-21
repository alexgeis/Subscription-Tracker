import "../NewSub/newSub.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "@apollo/client";
import { CREATE_SUBSCRIPTION } from "../../utils/mutations";

function NewSub() {
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [subName, setSubName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
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
    }
    // else if (inputType === "subDesc") {
    //   setUserName(inputValue);
    // }
    else {
      setDescription(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!subName || !cost) {
      setErrorMessage("New subscription requires name and cost.");
      return;
    }
    try {
      const { data } = await createSubscription({
        variables: { userId, subscription },
      });

      // clear out the input after submit
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
      <div class="container-fluid">
        <h1 id="newSub">Add New Subscription</h1>
        <label for="name">Subscription Name: </label>
        <input type="text" id="name" name="name" />
        <br></br>
        <br></br>
        <p>Start Date</p>
        <DatePicker onChange={setStartDate} value={startDate} id="datePicker" />
        <p>Due Date</p>
        <DatePicker onChange={setDueDate} value={dueDate} id="datePicker" />
        <br></br>
        <br></br> <h2>Billing</h2>
        <input type="checkbox" id="monthlyP" name="monthlyP" value="monthlyP" />
        <label for="monthlyP"> Monthly</label>
        <br></br>
        <input type="checkbox" id="annualP" name="annualP" value="annualP" />
        <label for="annualP"> Annual</label>
        <br></br>
        <form method="post" action="#">
          <label for="currency-field">Enter Amount: </label>
          <input
            type="text"
            name="currency-field"
            id="currency-field"
            pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
            value=""
            data-type="currency"
            placeholder="$50.00"
            onChange={handleInputChange}
          />
        </form>
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
