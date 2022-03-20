import React from "react";

const Modal = ({ onClose, currentProject }) => {
  const { name, description, index } = currentProject;

  return (
    <div>
      <div>
        <img
          src={`../../assets/large/${index}.jpg`}
          alt={name}
        />
        <p>{name}</p>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
