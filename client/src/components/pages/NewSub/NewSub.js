import '../NewSub/newSub.css'
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import "bootstrap/dist/css/bootstrap.min.css";

function NewSub() {
    const [value2, onChange2] = useState(new Date());
    const [value, onChange] = useState(new Date());

    return (
        
        <div class="container-fluid">
        <h1 id='newSub'>Add New Subscription</h1>
    <label for="name">Subscription Name: </label>
    <input type="text" id="name" name="name"/>
<br></br><br></br>
        <p>Start Date</p>
        <DatePicker onChange={onChange} value={value} id="datePicker" />

        <p>Due Date</p>

        <DatePicker onChange={onChange2} value={value2} id="datePicker"/><br></br>

        <br></br> <h2>Billing</h2>

        <input type="checkbox" id="monthlyP" name="monthlyP" value="monthlyP"/>
<label for="monthlyP"> Monthly</label><br></br>

<input type="checkbox" id="monthlyP" name="monthlyP" value="monthlyP"/>
<label for="monthlyP"> Annual</label><br></br>

<form method="post" action="#">
    <label for="currency-field">Enter Amount: </label>
    <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$50.00"/>
    </form><br></br>
    
    <input type="text" id="subDesc" name="subDesc" placeholder="Optional Description"/><br></br>
    <br></br>
    <button id='newSubBtn' type="submit">Save</button>
    </div>
    
);
}

export default NewSub;