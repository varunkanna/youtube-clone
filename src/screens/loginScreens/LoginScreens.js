import React from "react";
import "./LoginScreens.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginFun } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const LoginScreens = () => {
  const userData = useSelector((state) => state.auth);
  console.log( "from redux", userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(loginFun(user));
        if(user){
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("sign up error -->", errorMessage)
      });
  };

  return (
    <div className="app__login">
      <div className="login_container">
        <h3>YouTube Clone</h3>
        <img
          src={"/images/YouTubeIcon.png"}
          className="login_img"
          alt="yt-img"
        />
        <button className="login_btn" onClick={handleLogin}>Login with Google</button>
        <p>The Project is using by YouTube DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreens;
