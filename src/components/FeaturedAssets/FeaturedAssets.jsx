/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeaturedAssets = ({
  className,
  group = "https://c.animaapp.com/zywr4ljJ/img/group-17-1@2x.png",
  copenhagen = "https://c.animaapp.com/zywr4ljJ/img/copenhagen-1@2x.png",
  vegetation = "https://c.animaapp.com/zywr4ljJ/img/vegetation-1@2x.png",
  lightBlue = "https://c.animaapp.com/zywr4ljJ/img/light-blue-1@2x.png",
}) => {
  return (
    <div className={`featured-assets ${className}`}>
      <div className="featured-blocks">
        <img className="img" alt="Group" src="https://c.animaapp.com/zywr4ljJ/img/group-45-1@2x.png" />
        <div className="overlap">
          <img className="group-2" alt="Group" src={group} />
          <img className="copenhagen" alt="Copenhagen" src={copenhagen} />
        </div>
        <div className="group-3">
          <div className="door-wrapper">
            <img className="door" alt="Door" src="https://c.animaapp.com/zywr4ljJ/img/door-1-1@2x.png" />
          </div>
          <div className="text-wrapper-4">Doors</div>
        </div>
        <img className="vegetation" alt="Vegetation" src={vegetation} />
        <img className="light-blue" alt="Light blue" src={lightBlue} />
        <img className="group-4" alt="Group" src="https://c.animaapp.com/zywr4ljJ/img/group-44-1@2x.png" />
        <div className="group-5">
          <div className="text-wrapper-5">Windows</div>
          <div className="window-wrapper">
            <img className="window" alt="Window" src="https://c.animaapp.com/zywr4ljJ/img/window-1-1@2x.png" />
          </div>
        </div>
      </div>
      <div className="text-wrapper-6">Featured Assets</div>
      <div className="text-wrapper-7">Explore more</div>
    </div>
  );
};

FeaturedAssets.propTypes = {
  group: PropTypes.string,
  copenhagen: PropTypes.string,
  vegetation: PropTypes.string,
  lightBlue: PropTypes.string,
};
