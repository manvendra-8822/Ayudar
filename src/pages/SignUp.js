import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in");
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
    <div className="sign-up2">
      <img
        className="pexels-deva-darshan-1173777-2-icon"
        alt=""
        src="../pexelsdevadarshan1173777-2@2x.png"
      />
      <div className="sign-up-item" />
      <div className="register">REGISTER</div>
      <div className="create-your-new">Create your new account</div>
      <input className="sign-up-inner" type="text" />
      <input className="rectangle-input" type="text" />
      <input className="sign-up-child1" type="text" />
      <div className="sign-up-child2" />
      <div className="name1">Name</div>
      <div className="email">Email</div>
      <div className="password">Password</div>
      <div className="sign-up3">Sign Up</div>
      <div className="or-continue-with-wrapper">
        <div className="or-continue-with">or continue with</div>
      </div>
      <div className="sign-in-parent">
        <div className="sign-in1" onClick={onSignInTextClick}>
          Sign in
        </div>
        <div className="already-have-an">Already have an account ?</div>
      </div>
      <div className="sign-up-child3" />
      <div className="sign-up-child4" />
      <img className="ellipse-icon" alt="" src="../ellipse-12.svg" />
      <img className="sign-up-child5" alt="" src="../ellipse-12.svg" />
      <img className="sign-up-child6" alt="" src="../ellipse-12.svg" />
      <img className="apple-2-icon" alt="" src="../apple-2.svg" />
      <img className="facebook-1-icon" alt="" src="../facebook-1.svg" />
      <img className="google-1-icon" alt="" src="../google-1.svg" />
      <img
        className="envelope-solid-1-icon"
        alt=""
        src="../envelopesolid-1.svg"
      />
      <img className="user-solid-1-icon" alt="" src="../usersolid-1.svg" />
      <img className="vector-icon" alt="" src="../vector.svg" />
      <div className="nav-bar1">
        <div className="nav-bar-item" />
        <div className="home2">Home</div>
        <div className="about-us2" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className="ngos1" onClick={onNGOsTextClick}>
          NGOs
        </div>
        <div className="join-us3" onClick={onJoinUsTextClick}>
          Join Us
        </div>
        <div className="donate3" onClick={onDonateTextClick}>
          Donate
        </div>
        <div className="logo2">
          <div className="ayudar2">Ayudar</div>
          <i className="reviving-nature2">Reviving nature</i>
          <img className="logo-inner" alt="" src="../ellipse-11.svg" />
          <img
            className="mask-group-icon3"
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className="mask-group-icon4"
            alt=""
            src="../mask-group4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
