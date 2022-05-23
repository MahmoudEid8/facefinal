import React from "react";

const Input = ({ type, required, placeholder }) => {
  return <input type={type} required={required} placeholder={placeholder} />;
};

export default Input;
