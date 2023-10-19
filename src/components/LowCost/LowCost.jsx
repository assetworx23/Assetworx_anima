/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LowCost = ({ className, layer = "https://c.animaapp.com/zywr4ljJ/img/layer-2-1@2x.png" }) => {
  return (
    <div className={`low-cost ${className}`}>
      <div className="overlap-group-2">
        <div className="text-wrapper-8">Low-Cost Subscription</div>
        <img className="layer" alt="Layer" src={layer} />
      </div>
      <p className="p">
        Forget paying individually. A monthly subscription to Assetworx gives you access to a vast array of assets
        without breaking the bank.
      </p>
    </div>
  );
};

LowCost.propTypes = {
  layer: PropTypes.string,
};
