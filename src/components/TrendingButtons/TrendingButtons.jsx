/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const TrendingButtons = ({
  className,
  groupClassName,
  overlapGroupClassName,
  divClassName,
  groupClassNameOverride,
  overlapClassName,
  divClassNameOverride,
  overlapWrapperClassName,
  overlapClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`trending-buttons ${className}`}>
      <div className={`group ${groupClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className={`text-wrapper ${divClassName}`}>Classy People</div>
        </div>
      </div>
      <div className={`overlap-wrapper ${groupClassNameOverride}`}>
        <div className={`overlap-group ${overlapClassName}`}>
          <div className={`div ${divClassNameOverride}`}>Window Sections</div>
        </div>
      </div>
      <div className={`overlap-group-wrapper ${overlapWrapperClassName}`}>
        <div className={`overlap-group ${overlapClassNameOverride}`}>
          <div className={`text-wrapper-2 ${divClassName1}`}>Copenhagen</div>
        </div>
      </div>
    </div>
  );
};
