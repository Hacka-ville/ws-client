import React from "react";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <SocialButtons />
      <div className="footerGrid">
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
        <div className="footerItem">
          <span>Ipsum</span>
        </div>
      </div>
      <hr className="footerHr" />
      <div className="end">
        <div className="endItem">
          <span>© 2022 WorkSky, Inc.</span>
        </div>
        <div className="endItem">
          <span>Terms & Conditions</span>
        </div>
        <div className="endItem">
          <span>Cookie Consent</span>
        </div>
      </div>
    </div>
  );
};
