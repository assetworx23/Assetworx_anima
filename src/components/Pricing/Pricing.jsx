/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FiRrApps2 } from "../../icons/FiRrApps2";
import { FiRrGallery } from "../../icons/FiRrGallery";
import { FiRrGraduationCap } from "../../icons/FiRrGraduationCap";
import { FiRrStar } from "../../icons/FiRrStar";
import "./style.css";

export const Pricing = ({ className }) => {
  return (
    <div className={`pricing ${className}`}>
      <button className="div-wrapper">
        <div className="overlap-group-5">
          <div className="text-wrapper-23">Contact Us</div>
        </div>
      </button>
      <p className="text-wrapper-24">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="text-wrapper-25">Are you an educational institution? Contact us for more information.</p>
      <div className="plans-pricing">Plans &amp; Pricing</div>
      <div className="group-12">
        <div className="free-tier-card">
          <div className="overlap-group-6">
            <div className="text-wrapper-26">Free</div>
            <FiRrApps2 className="fi-rr-apps" />
            <p className="element-month">
              <span className="span">£0/</span>
              <span className="text-wrapper-27">month</span>
            </p>
            <p className="text-wrapper-28">
              Access to a limited selection of dynamic cadblocks and other useful assets
            </p>
          </div>
        </div>
        <div className="basic-tier">
          <div className="overlap-group-6">
            <div className="text-wrapper-29">Basic</div>
            <FiRrGallery className="fi-rr-gallery" />
            <p className="text-wrapper-30">Get access to Assetworx’s range of high quality dynamic cadblocks.</p>
            <p className="element-month">
              <span className="span">£8/</span>
              <span className="text-wrapper-27">month</span>
            </p>
          </div>
        </div>
        <div className="premium-tier">
          <div className="overlap-group-6">
            <div className="text-wrapper-31">Premium</div>
            <p className="element-month-2">
              <span className="text-wrapper-32">£13/</span>
              <span className="text-wrapper-27">month</span>
            </p>
            <p className="text-wrapper-33">
              Get access to everything Assetworx has to offer with Tutorials, Architectural details, Asset creator and
              more.
            </p>
            <FiRrStar className="fi-rr-star" />
          </div>
        </div>
        <div className="student-tier">
          <div className="overlap-2">
            <div className="text-wrapper-34">Student</div>
            <p className="get-access-to-an">
              <span className="text-wrapper-35">Get access to an Assetworx Premium subscription for 50% off with </span>
              <span className="text-wrapper-36">UniDays</span>
              <span className="text-wrapper-35"> or </span>
              <span className="text-wrapper-36">Free</span>
              <span className="text-wrapper-35"> with your educational institution.</span>
            </p>
            <p className="element-month-3">
              <span className="text-wrapper-32">£650/</span>
              <span className="text-wrapper-27">month</span>
            </p>
            <FiRrGraduationCap className="fi-rr-graduation-cap" />
          </div>
        </div>
      </div>
    </div>
  );
};
