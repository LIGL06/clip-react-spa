import React from "react";

export const renderedField = ({ input, label, placeholder, type, defaultValue, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} defaultValue={defaultValue} type={type} className="form-control" />
      {
        touched && (warning || error) ? (
          <div style={{ color: '#721c24' }} className="mt-2">
            {warning || error}
          </div>
        ) : null
      }
    </div>
  </div>
);