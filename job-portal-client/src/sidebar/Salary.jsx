import React from 'react'
import InputField from "../components/InputField.jsx";
import Button from "./Button.jsx";

const Salary = ({handleChange, handleClick}) => {

    return (
        <div className="space-y-5">
            <h3 className="text-lg font-medium mb-2">Salary</h3>
            <div className="mb-4">
                <Button onClickHandler={handleClick} value="" title="Hourly" />
                <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
                <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />

            </div>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test2" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>All
                </label>
                <InputField handleChange={handleChange} value={30} title="<30,000" name="test2"/>
                <InputField handleChange={handleChange} value={50} title="<50,000" name="test2"/>
                <InputField handleChange={handleChange} value={80} title="<80,000" name="test2"/>
                <InputField handleChange={handleChange} value={100} title="<100,000" name="test2"/>
            </div>
        </div>
    );
}

export default Salary

