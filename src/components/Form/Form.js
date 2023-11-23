import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <h3>Share your information for a call back</h3>
        <input type="text"  placeholder="Enter your name" />
        <input type="text"  placeholder="Enter mobile no." />
        <button>Send OTP</button>
        <select>
            <option>Select your target</option>
            <option>1</option>
            <option>2</option>
        </select>
        {/* <br/> */}
        <input type="text"  placeholder="Enter your pincode" />
        <select>
            <option>Select your city</option>
            <option>1</option>
            <option>2</option>
        </select>
        <input type="submit" id="submit" value="Get a Call back" />
      </form>
    </div>
  );
};

export default Form;
