/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  btnName,
  classForButton,
  btnType,
  icon,
  bgColor,
  onClick,
  to, 
}) => {

  const ButtonComponent = to ? Link : "button";

  return (
    <ButtonComponent
      to={to} 
      type={btnType ? btnType : "button"}
      className={`flex justify-center items-center gap-2 rounded-full px-3 py-2 lg:px-8 lg:py-3 font-medium ${classForButton} `}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {icon && React.cloneElement(icon, { className: "w-5 h-5 font-medium" })}
      {btnName}
    </ButtonComponent>
  );
};

export default Button;

