/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IpadBottomBar = ({
  className,
  twitter = "https://c.animaapp.com/zywr4ljJ/img/twitter-1.svg",
  email = "https://c.animaapp.com/zywr4ljJ/img/email-1.svg",
}) => {
  return (
    <div className={`ipad-bottom-bar ${className}`}>
      <div className="group-6">
        <div className="text-wrapper-14">Contact us</div>
        <div className="text-wrapper-15">Careers</div>
      </div>
      <div className="group-7">
        <div className="text-wrapper-16">About</div>
        <div className="text-wrapper-17">Cancel Subscriptions</div>
        <div className="text-wrapper-18">Terms</div>
        <div className="text-wrapper-19">Privacy Policy</div>
      </div>
      <img className="logo" alt="Logo" src="https://c.animaapp.com/zywr4ljJ/img/logo-3@2x.png" />
      <div className="group-8">
        <div className="text-wrapper-20">assetworx</div>
        <img className="facebook" alt="Facebook" src="https://c.animaapp.com/zywr4ljJ/img/facebook-1.svg" />
        <div className="group-9">
          <div className="text-wrapper-21">@asset.worx</div>
          <img className="twitter" alt="Twitter" src={twitter} />
        </div>
        <div className="group-10">
          <div className="text-wrapper-21">@asset.worx</div>
          <img className="instagram" alt="Instagram" src="https://c.animaapp.com/zywr4ljJ/img/instagram-1.svg" />
        </div>
        <div className="group-wrapper">
          <div className="group-11">
            <div className="text-wrapper-22">@assetworx23@gmail.com</div>
            <img className="email" alt="Email" src={email} />
          </div>
        </div>
      </div>
    </div>
  );
};

IpadBottomBar.propTypes = {
  twitter: PropTypes.string,
  email: PropTypes.string,
};
