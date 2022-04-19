import '../NewSub/newSub.css'
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


function NewSub() {

    const [value, onChange] = useState(new Date());

    return (
        <div>
        <div id='card'> 
        <h1>Add New Subscription</h1>
    <label for="name">Subscription Name: </label>
    <input type="text" id="name" name="name"/><br></br>
        <p>Start Date</p>
        <DatePicker onChange={onChange} value={value} />
        <p>Due Date</p>
        <DatePicker onChange={onChange} value={value} /><br></br>
        <h2>Billing</h2>
        <input type="checkbox" id="monthlyP" name="monthlyP" value="monthlyP"/>
<label for="monthlyP"> Monthly</label><br></br>
<input type="checkbox" id="monthlyP" name="monthlyP" value="monthlyP"/>
<label for="monthlyP"> Annual</label><br></br>
<form method="post" action="#"><br></br>
    <label for="currency-field">Enter Amount: </label>
    <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$50.00"/>
    </form><br></br>
    <input type="text" id="subDesc" name="subDesc" placeholder="Optional Description"/><br></br>
    <br></br>
    <button type="submit">Save</button>
    </div>
    </div>
);
}

export default NewSub;