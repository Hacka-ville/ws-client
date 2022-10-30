import React from "react";
import "./SocialButtons.css";

export const SocialButtons = () => {
  const handleMouseOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundColor = "white";
    e.target.children[0].style.filter =
      "invert(0%) sepia(0%) saturate(9%) hue-rotate(239deg) brightness(104%) contrast(100%)";
    e.target.children[1].style.color = "black";
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundColor = "";
    e.target.children[0].style.filter =
      "invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)";
    e.target.children[1].style.color = "white";
  };

  return (
    <React.Fragment>
      <div className="socialButtonsDiv">
        <div
          className="socialButton"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="../../../img/GoogleIcon.svg" alt="Google Icon" />
          <span>Google</span>
        </div>
        <div
          className="socialButton"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="../../../img/FacebookIcon.svg" alt="Facebook Icon" />
          <span>Facebook</span>
        </div>
        <div
          className="socialButton"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="../../../img/InstagramIcon.svg" alt="Instagram Icon" />
          <span>Instagram</span>
        </div>
        <div
          className="socialButton"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="../../../img/YoutubeIcon.svg" alt="Google Icon" />
          <span>Youtube</span>
        </div>
        <div
          className="socialButton"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="../../../img/TikTokIcon.svg" alt="TikTok Icon" />
          <span>TikTok</span>
        </div>
      </div>
    </React.Fragment>
  );
};
