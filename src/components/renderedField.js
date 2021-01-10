import React from "react";

export const renderedField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      <div className="invalid-feedback">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);