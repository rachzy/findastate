import React from "react";
import "./Button.css";

interface IProps {
  id?: string;
  onClick: () => void;
  children: string;
}

const Button: React.FC<IProps> = ({ id, onClick, children }) => {
  return (
    <button className="default-btn" id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
