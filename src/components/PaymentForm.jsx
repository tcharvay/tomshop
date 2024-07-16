import React, { useState } from "react";
import "../styles/paymentForm.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    creditCardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  const handleChange = (e) => {
       const { name, value } = e.target;

    if (name === "creditCardNumber" && value.length > 16) {
      return; // Limit input to 16 digits
    }

    if (name === "creditCardNumber" || name === "securityCode") {
      if (!/^\d*$/.test(value)) {
        return; // Only accept digits
      }
    }

 
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="As in credit card"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="div-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="div-form">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="div-form">
        <label htmlFor="creditCardNumber">Credit Card Number:</label>
        <input
          type="number"
          id="creditCardNumber"
          name="creditCardNumber"
          placeholder="0000 0000 0000 0000"
          maxLength="16"
          value={formData.creditCardNumber}
          onChange={handleChange}
        />
      </div>
      <div className="div-form">
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          type="number"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/YY"
          maxLength="4"
          value={formData.expirationDate}
          onChange={handleChange}
        />
      </div>
      <div className="div-form">
        <label htmlFor="securityCode">Security Code:</label>
        <input
          type="tel"
          id="securityCode"
          name="securityCode"
          placeholder="123"
          maxLength="4"
          value={formData.securityCode}
          onChange={handleChange}
        />
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
