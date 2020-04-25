import React from 'react';
import T from 'prop-types';

const CustomAlert = ({ closeAlert, isAlert, message }) =>
  isAlert && (
    <div className="custom-alert">
      <div className="custom-alert__wrap">
        <span className="custom-alert__message">{message}</span>
        <button className="custom-alert__btn" type="button" onClick={closeAlert}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      </div>
    </div>
  );

CustomAlert.propTypes = {
  closeAlert: T.func.isRequired,
  message: T.string.isRequired,
  isAlert: T.bool.isRequired,
};

export default CustomAlert;
