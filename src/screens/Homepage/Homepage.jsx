import React from "react";
import { DynamicAssets } from "../../components/DynamicAssets";
import { EverythingInOne } from "../../components/EverythingInOne";
import { FeaturedAssets } from "../../components/FeaturedAssets";
import { IpadBottomBar } from "../../components/IpadBottomBar";
import { IpadNavigationBar } from "../../components/IpadNavigationBar";
import { LearnMoreBtn } from "../../components/LearnMoreBtn";
import { LowCost } from "../../components/LowCost";
import { Pricing } from "../../components/Pricing";
import { SearchAssets } from "../../components/SearchAssets";
import { TrendingButtons } from "../../components/TrendingButtons";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div-2">
        <div className="box">
          <div className="group-15">
            <p className="text-wrapper-43">
              From Cadblocks to vectors, we’ve got the assets you need, when you need them.
            </p>
            <p className="text-wrapper-44">The missing piece for your creative needs</p>
          </div>
          <TrendingButtons
            className="trending-buttons-instance"
            divClassName="trending-buttons-3"
            divClassName1="trending-buttons-7"
            divClassNameOverride="trending-buttons-5"
            groupClassName="design-component-instance-node"
            groupClassNameOverride="trending-buttons-4"
            overlapClassName="trending-buttons-2"
            overlapClassNameOverride="trending-buttons-2"
            overlapGroupClassName="trending-buttons-2"
            overlapWrapperClassName="trending-buttons-6"
          />
          <SearchAssets className="search-assets-instance" vector="https://c.animaapp.com/zywr4ljJ/img/vector-1.svg" />
        </div>
        <FeaturedAssets
          className="featured-assets-instance"
          copenhagen="https://c.animaapp.com/zywr4ljJ/img/copenhagen@2x.png"
          group="https://c.animaapp.com/zywr4ljJ/img/group-17@2x.png"
          lightBlue="https://c.animaapp.com/zywr4ljJ/img/light-blue@2x.png"
          vegetation="https://c.animaapp.com/zywr4ljJ/img/vegetation@2x.png"
        />
        <div className="overlap-3">
          <div className="group-16">
            <div className="group-17">
              <p className="text-wrapper-45">The secret we’re willing to share</p>
              <p className="text-wrapper-46">
                Assetworx is your favourite design cheatsheet, providing architecture, engineering and design students
                with a content-rich library of high quality dynamic, creative, and technical assets.
              </p>
            </div>
            <div className="group-18">
              <LowCost className="low-cost-instance" layer="https://c.animaapp.com/zywr4ljJ/img/layer-2@2x.png" />
              <EverythingInOne
                className="everything-in-one-place"
                layer="https://c.animaapp.com/zywr4ljJ/img/layer-3@2x.png"
              />
              <DynamicAssets
                className="dynamic-assets-instance"
                vector="https://c.animaapp.com/zywr4ljJ/img/vector.svg"
              />
              <LearnMoreBtn className="learn-more-btn-instance" />
            </div>
          </div>
          <img
            className="element-no-background"
            alt="Element no background"
            src="https://c.animaapp.com/zywr4ljJ/img/118-no-background-2.png"
          />
          <img className="group-19" alt="Group" src="https://c.animaapp.com/zywr4ljJ/img/group-1@2x.png" />
        </div>
        <IpadBottomBar
          className="ipad-bottom-bar-instance"
          email="https://c.animaapp.com/zywr4ljJ/img/email.svg"
          twitter="https://c.animaapp.com/zywr4ljJ/img/twitter.svg"
        />
        <Pricing className="pricing-instance" />
        <div className="navigation-bar">
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="rectangle-2" />
            <IpadNavigationBar className="ipad-navigation-bar-logged-out-clean" />
          </div>
        </div>
      </div>
    </div>
  );
};
