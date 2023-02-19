import React from "react";

const Button = ({ placeholder, type, icon }) => {
  return (
    <button className={`${type}`}>
      {placeholder} {icon}
    </button>
  );
};

export default Button;
