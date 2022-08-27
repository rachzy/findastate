import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader loader--style5" title="4">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="48px"
        height="60px"
        viewBox="0 0 24 30"
        xmlSpace="preserve"
      >
        <rect x="0" y="0" width="4" height="10" fill="#333">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" y="0" width="4" height="10" fill="#333">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.1"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" y="0" width="4" height="10" fill="#333">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.3s"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loader;
