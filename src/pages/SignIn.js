import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onNGOsTextClick = useCallback(() => {
    navigate("/member-ngos");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onDonateTextClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="sign-in2">
      <img
        className="pexels-deva-darshan-1173777-2-icon1"
        alt=""
        src="../pexelsdevadarshan1173777-21@2x.png"
      />
      <div className="sign-in-child" />
      <div className="sign-in3">SIGN IN</div>
      <div className="log-in-into">{`Log in into account `}</div>
      <input className="sign-in-item" type="text" />
      <input className="sign-in-inner" type="text" />
      <div className="sign-in-child1" />
      <div className="email1">Email</div>
      <div className="password1">Password</div>
      <div className="sign-in4">Sign in</div>
      <div className="or-continue-with-container">
        <div className="or-continue-with1">or continue with</div>
      </div>
      <div className="sign-up-parent">
        <div className="sign-up4" onClick={onSignUpTextClick}>
          Sign up
        </div>
        <div className="dont-have-an">Don’t have an account ?</div>
      </div>
      <div className="sign-in-child2" />
      <div className="sign-in-child3" />
      <img className="sign-in-child4" alt="" src="../ellipse-12.svg" />
      <img className="sign-in-child5" alt="" src="../ellipse-12.svg" />
      <img className="sign-in-child6" alt="" src="../ellipse-12.svg" />
      <img className="apple-2-icon1" alt="" src="../apple-2.svg" />
      <img className="facebook-1-icon1" alt="" src="../facebook-11.svg" />
      <img className="google-1-icon1" alt="" src="../google-11.svg" />
      <img
        className="envelope-solid-1-icon1"
        alt=""
        src="../envelopesolid-1.svg"
      />
      <img className="vector-icon1" alt="" src="../vector1.svg" />
      <div className="nav-bar2">
        <div className="nav-bar-inner" />
        <div className="home3">Home</div>
        <div className="about-us3" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className="ngos2" onClick={onNGOsTextClick}>
          NGOs
        </div>
        <div className="join-us4" onClick={onJoinUsTextClick}>
          Join Us
        </div>
        <div className="donate4" onClick={onDonateTextClick}>
          Donate
        </div>
        <div className="logo3">
          <div className="ayudar3">Ayudar</div>
          <i className="reviving-nature3">Reviving nature</i>
          <img className="logo-child1" alt="" src="../ellipse-11.svg" />
          <img
            className="mask-group-icon5"
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className="mask-group-icon6"
            alt=""
            src="../mask-group4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
