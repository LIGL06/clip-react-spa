// Deps
import React from 'react';

const Error = ({ message }) => (
  <div className="row">
    {
      message ? (
        <div className="col-md-3 mb-2 offset-md-4">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      ) : null
    }
  </div>
);

export default Error;