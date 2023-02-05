import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
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
    <div className="about-us4">
      <img
        className="pexels-deva-darshan-1173777-4-icon"
        alt=""
        src="../pexelsdevadarshan1173777-4@2x.png"
      />
      <div className="about-us-child" />
      <img className="mask-group-icon7" alt="" src="../mask-group7@2x.png" />
      <div className="in-this-era-container">
        <p className="in-this-era">
          In this era of Global warming and rapid pollution, environment is
          being degraded at a rate higher than anyone ever expected. But even in
          today's world where no one cares about the environment , many
          individuals and NGOs are working for the cause of saving the
          environment. 
        </p>
        <p className="in-this-era">
          Our platform , AYUDAR, acts as an interface between enthusiasts who
          wants to work for better meant of the environment and between the NGO.
          We help the individuals to reach NGO near them and get involved in the
          environmental drives. In addition to this tasks are assigned to NGO’s
          to counter carbon emission. And further points are awarded accordingly
          and according to the points funds are allocated to the NGO’s which
          they utilise in fulfulling their agenda.
        </p>
      </div>
      <div className="nav-bar3">
        <div className="nav-bar-child1" />
        <div className="home4" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="about-us5" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className="ngos3" onClick={onNGOsTextClick}>
          NGOs
        </div>
        <div className="join-us5" onClick={onJoinUsTextClick}>
          Join Us
        </div>
        <div className="donate5" onClick={onDonateTextClick}>
          Donate
        </div>
        <div className="logo4">
          <div className="ayudar4">Ayudar</div>
          <i className="reviving-nature4">Reviving nature</i>
          <img className="logo-child2" alt="" src="../ellipse-11.svg" />
          <img
            className="mask-group-icon8"
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className="mask-group-icon9"
            alt=""
            src="../mask-group4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
