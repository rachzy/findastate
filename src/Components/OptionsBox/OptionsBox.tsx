import React from "react";
import "./OptionsBox.css";

import { IOption } from "../OptionsForm/OptionsForm";

interface IProps {
  options: IOption[];
}

const OptionsBox: React.FC<IProps> = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <div
            onClick={() => {
              const getOptionElement = document.querySelector(
                `#${option.value}`
              ) as HTMLInputElement;
              if (!getOptionElement) return;
              getOptionElement.click();
            }}
            key={option.value}
            className="option"
          >
            <img
              src={require(`../../imgs/${option.icon}`)}
              alt={option.title}
              width={50}
            />
            <label htmlFor={option.title}>{option.title}</label>
            <input
              id={option.value}
              name={option.title}
              type={"checkbox"}
              value={option.value}
            />
          </div>
        );
      })}
    </>
  );
};

export default OptionsBox;
