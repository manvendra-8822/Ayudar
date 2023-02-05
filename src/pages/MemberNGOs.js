import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MemberNGOs.css";

const MemberNGOs = () => {
  const navigate = useNavigate();

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
    <div className="member-ngos1">
      <img
        className="pexels-deva-darshan-1173777-3-icon"
        alt=""
        src="../pexelsdevadarshan1173777-3@2x.png"
      />
      <img className="member-ngos-child" alt="" src="../ellipse-5.svg" />
      <img className="member-ngos-item" alt="" src="../ellipse-5.svg" />
      <img className="member-ngos-inner" alt="" src="../ellipse-5.svg" />
      <textarea
        className="cdfdbgnffnfnfgnnrgnffnfgnfgnfn"
        placeholder={`cdfdbgnffnfnfgnnrgnffnfgnfgnfnffnfnfnn
d



dbndgndnfnfnnrnf`}
      >
        <p className="d">cdfdbgnffnfnfgnnrgnffnfgnfgnfnffnfnfnn</p>
        <p className="d">d</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="dbndgndnfnfnnrnf">dbndgndnfnfnnrnf</p>
      </textarea>
      <i className="cdfdbgnffnfnfgnnrgnffnfgnfgnfn2">
        <p className="d">cdfdbgnffnfnfgnnrgnffnfgnfgnfnffnfnfnn</p>
        <p className="d">d</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="dbndgndnfnfnnrnf">dbndgndnfnfnnrnf</p>
      </i>
      <i className="cdfdbgnffnfnfgnnrgnffnfgnfgnfn4">
        <p className="d">cdfdbgnffnfnfgnnrgnffnfgnfgnfnffnfnfnn</p>
        <p className="d">d</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="d">&nbsp;</p>
        <p className="dbndgndnfnfnnrnf">dbndgndnfnfnnrnf</p>
      </i>
      <div className="nav-bar4">
        <div className="nav-bar-child2" />
        <div className="home5">Home</div>
        <div className="about-us6" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className="ngos4" onClick={onNGOsTextClick}>
          NGOs
        </div>
        <div className="join-us6" onClick={onJoinUsTextClick}>
          Join Us
        </div>
        <div className="donate6" onClick={onDonateTextClick}>
          Donate
        </div>
        <div className="logo5">
          <div className="ayudar5">Ayudar</div>
          <i className="reviving-nature5">Reviving nature</i>
          <img className="logo-child3" alt="" src="../ellipse-11.svg" />
          <img
            className="mask-group-icon10"
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className="mask-group-icon11"
            alt=""
            src="../mask-group4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberNGOs;
