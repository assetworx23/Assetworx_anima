/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const EverythingInOne = ({ className, layer = "https://c.animaapp.com/zywr4ljJ/img/layer-3-1@2x.png" }) => {
  return (
    <div className={`everything-in-one ${className}`}>
      <div className="overlap-group-3">
        <div className="text-wrapper-9">Everything, In One Place</div>
        <img className="layer-2" alt="Layer" src={layer} />
      </div>
      <p className="text-wrapper-10">Store all your favourite assets in the cloud to be used whenever/wherever</p>
    </div>
  );
};

EverythingInOne.propTypes = {
  layer: PropTypes.string,
};
