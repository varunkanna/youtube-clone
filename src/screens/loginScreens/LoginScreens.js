import React from "react";
import "./LoginScreens.css";

const LoginScreens = () => {
  return (
    <div className="app__login">
      <div className="login_container">
        <h3>YouTube Clone</h3>
        <img src={"/images/YouTubeIcon.png"} className="login_img" alt="yt-img"/>
        <button className="login_btn">Login with Google</button>
        <p>The Project is using by YouTube DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreens;
