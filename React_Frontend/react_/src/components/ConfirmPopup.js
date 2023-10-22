import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

const CustomConfirmAlert = ({ title, message, onConfirm, onCancel }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onCancel();
    }
  };

  confirmAlert({
    customUI: ({ onClose }) => (
      <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="custom-confirm-alert">
          <h1>{title}</h1>
          <p>{message}</p>
          <button className='popup-btn btn-yes' onClick={() => { onConfirm(); onClose(); }}>Yes</button>
          <button className='popup-btn btn-no' onClick={() => { onCancel(); onClose(); }}>No</button>
        </div>
      </div>
    ),
  });
};

export default CustomConfirmAlert;
