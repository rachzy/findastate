import React from "react";
import "./OptionsForm.css";

import OptionsBox from "../OptionsBox/OptionsBox";
import Title from "../Title/Title";
import Button from "../Button/Button";

export interface IOption {
  title: string;
  icon: string;
  value: string;
}

interface IProps {
  children: string;
  options: IOption[];
  buttonLabel: string;
  onClick: () => void;
}

const OptionsForm: React.FC<IProps> = ({
  children,
  options,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="options-form-container">
      <Title>{children}</Title>
      <OptionsBox options={options} />
      <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
  );
};

export default OptionsForm;
