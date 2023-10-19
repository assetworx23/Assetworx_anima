/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FiBrAngleSmallDown2 } from "../../icons/FiBrAngleSmallDown2";
import "./style.css";

export const IpadNavigationBar = ({ className }) => {
  return (
    <div className={`ipad-navigation-bar ${className}`}>
      <img className="logo-2" alt="Logo" src="https://c.animaapp.com/zywr4ljJ/img/logo-1@2x.png" />
      <div className="search-join-us-log">
        <div className="log-in-btn">
          <div className="text-wrapper-37">Log in</div>
        </div>
        <div className="join-us-btn">
          <div className="overlap-group-7">
            <div className="text-wrapper-38">Join us</div>
          </div>
        </div>
        <img className="group-13" alt="Group" src="https://c.animaapp.com/zywr4ljJ/img/group-2@2x.png" />
      </div>
      <div className="navigation-clean">
        <div className="group-14">
          <div className="overlap-group-8">
            <div className="text-wrapper-39">Assets</div>
            <FiBrAngleSmallDown2 className="fi-br-angle-small" color="#3F3F3F" />
          </div>
        </div>
        <div className="text-wrapper-40">Tutorials</div>
        <div className="text-wrapper-41">Pricing</div>
        <div className="text-wrapper-42">Education</div>
      </div>
    </div>
  );
};
