/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchAssets = ({ className, vector = "https://c.animaapp.com/zywr4ljJ/img/vector-2.svg" }) => {
  return (
    <div className={`search-assets ${className}`}>
      <div className="text-wrapper-3">Search Assets</div>
      <img className="vector" alt="Vector" src={vector} />
    </div>
  );
};

SearchAssets.propTypes = {
  vector: PropTypes.string,
};
