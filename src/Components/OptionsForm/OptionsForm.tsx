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
  options: IOption[];
  buttonLabel: string;
  onClick: () => void;
}

const OptionsForm: React.FC<IProps> = ({
  options,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="options-form-container">
      <OptionsBox options={options} />
    </div>
  );
};

export default OptionsForm;
