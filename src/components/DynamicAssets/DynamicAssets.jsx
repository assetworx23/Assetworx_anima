/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DynamicAssets = ({ className, vector = "https://c.animaapp.com/zywr4ljJ/img/vector-3.svg" }) => {
  return (
    <div className={`dynamic-assets ${className}`}>
      <div className="overlap-group-4">
        <div className="text-wrapper-11">Dynamic Assets</div>
        <img className="vector-2" alt="Vector" src={vector} />
      </div>
      <p className="text-wrapper-12">
        Whether it’s 3D, 2D or anything in between. Every asset on Assetworx can be customised to your specification.
      </p>
    </div>
  );
};

DynamicAssets.propTypes = {
  vector: PropTypes.string,
};
