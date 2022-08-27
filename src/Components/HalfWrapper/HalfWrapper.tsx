import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./HalfWrapper.css";

interface IProps {
  children: React.ReactNode;
  currentScreen: number;
  screenNumber: number;
  nextButtonEnabled?: boolean;
  onButtonClick?: () => void;
}

const HalfWrapper: React.FC<IProps> = ({
  children,
  currentScreen,
  screenNumber,
  nextButtonEnabled,
  onButtonClick,
}) => {
  if (currentScreen !== screenNumber)
    return <div className="half-wrapper">{children}</div>;
  const renderNextButtonEnabled = () => {
    if (!nextButtonEnabled) return null;
    return (
      <button className="next-screen-btn" onClick={onButtonClick}>
        NEXT <FaArrowAltCircleRight size={18} style={{ marginLeft: 10 }} />
      </button>
    );
  };
  return (
    <div className="half-wrapper active">
      {children}
      {renderNextButtonEnabled()}
    </div>
  );
};

export default HalfWrapper;
