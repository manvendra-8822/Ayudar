import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onDonateClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSeeAllClick = useCallback(() => {
    navigate("/member-ngos");
  }, [navigate]);

  const onLoGINContainerClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onMdifacebookClick = useCallback(() => {
    window.open("https://www.facebook.com");
  }, []);

  const onMditwitterClick = useCallback(() => {
    window.open("https://www.twitter.com");
  }, []);

  const onMdiinstagramClick = useCallback(() => {
    window.open("https://www.instagram.com");
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onNGOsTextClick = useCallback(() => {
    navigate("/member-ngos");
  }, [navigate]);

  const onJoinUsText1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onDonateTextClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="home-page">
      <img
        className="pexels-deva-darshan-1173777-1-icon"
        alt=""
        src="../pexelsdevadarshan1173777-1@2x.png"
      />
      <div className="home-page-child" />
      <div className="home-page-item" />
      <b className="extend-your-hand-container">
        <p className="extend-your-hand">Extend your hand of help</p>
        <p className="to-mother-earth">to Mother Earth</p>
      </b>
      <button className="donate" onClick={onDonateClick}>
        <button className="donate-child" />
        <i className="donate1">DONATE</i>
      </button>
      <i className="join-us-in-container">
        <p className="extend-your-hand">
          Join us in our journey to save the environment
        </p>
        <p className="to-mother-earth">and restore its habitability.</p>
      </i>
      <img
        className="arrow-right-solid-3-icon"
        alt=""
        src="../arrowrightsolid-3.svg"
      />
      <img
        className="arrow-right-solid-4-icon"
        alt=""
        src="../arrowrightsolid-4.svg"
      />
      <button className="explore" onClick={onExploreClick}>
        <button className="explore-child" />
        <i className="explore1">Explore</i>
        <img
          className="arrow-right-solid-2-icon"
          alt=""
          src="../arrowrightsolid-2.svg"
        />
      </button>
      <div className="about-us">{`About us `}</div>
      <textarea
        className="in-todays-date-container"
        placeholder={`In today’s date, global warming has become a very major global issue. People want to help but they can’t trust NGOs and websites, claiming to be genuine. This is the reason we have made , ARUDAY, a platform where people can come and find trustworthy NGOs and contribute to them to reduce global warming either by donation or by joining in their environmental drives. Here we give tasks to various NGOs and review their work closely. We also rate them based on their performance.
`}
      >
        <p className="extend-your-hand">
          In today’s date, global warming has become a very major global issue.
          People want to help but they can’t trust NGOs and websites, claiming
          to be genuine. This is the reason we have made , ARUDAY, a platform
          where people can come and find trustworthy NGOs and contribute to them
          to reduce global warming either by donation or by joining in their
          environmental drives. Here we give tasks to various NGOs and review
          their work closely. We also rate them based on their performance.
        </p>
      </textarea>
      <img className="home-page-inner" alt="" src="../line-1.svg" />
      <div className="rectangle-div" />
      <div className="home-page-child1" />
      <img className="wild-1-icon" alt="" src="../wild-1@2x.png" />
      <div className="wild-has-put">
        WILD has put respect for nature at the center of the global leadership
        community and simultaneously stewarded coordinated action for the
        protection of Earth’s life-giving biodiversity. We invite you to learn
        more about our origins in the depths of Africa’s oldest protected areas.
      </div>
      <div className="member-ngos">Member NGOs</div>
      <div className="join-us">Join Us</div>
      <img className="line-icon" alt="" src="../line-2.svg" />
      <img className="home-page-child2" alt="" src="../line-3.svg" />
      <button className="see-all" onClick={onSeeAllClick}>
        <button className="donate-child" />
        <i className="see-all1">See All</i>
        <img
          className="arrow-right-solid-2-icon"
          alt=""
          src="../arrowrightsolid-5.svg"
        />
      </button>
      <div className="we-as-individuals-container">
        <p className="extend-your-hand">
          We as individuals can work towards the betterment of our enviornment
          and make it a clenaer and more habitable.Right now, you can help our
          planet stabilize climate change, halt mass extinction, and reduce the
          likelihood of new pandemics. You can protect essential wildlands,
          defend the homes of endangered and threatened species, and empower
          people to live well and live better with the natural world.
        </p>
      </div>
      <div className="login" onClick={onLoGINContainerClick}>
        <div className="login-child" />
        <div className="sign-in">SIGN IN</div>
      </div>
      <button className="sign-up" onClick={onSignUpClick}>
        <button className="sign-up-child" />
        <div className="sign-up1">SIGN UP</div>
      </button>
      <img className="rectangle-icon" alt="" src="../rectangle-12.svg" />
      <div className="logo">
        <div className="ayudar">Ayudar</div>
        <img className="logo-child" alt="" src="../ellipse-1.svg" />
        <i className="reviving-nature">Reviving nature</i>
      </div>
      <img
        className="mdifacebook-icon"
        alt=""
        src="../mdifacebook.svg"
        onClick={onMdifacebookClick}
      />
      <img
        className="mditwitter-icon"
        alt=""
        src="../mditwitter.svg"
        onClick={onMditwitterClick}
      />
      <img
        className="mdiinstagram-icon"
        alt=""
        src="../mdiinstagram.svg"
        onClick={onMdiinstagramClick}
      />
      <b className="quick-links">
        <p className="extend-your-hand">Quick links</p>
      </b>
      <b className="drop-a-message">Drop a message</b>
      <textarea className="text">
        <p className="to-mother-earth">&nbsp;</p>
      </textarea>
      <div className="line-div" />
      <div className="home-page-child3" />
      <div className="home-about-us-container">
        <p className="extend-your-hand">{`Home `}</p>
        <p className="extend-your-hand">About us  NGOs</p>
        <p className="extend-your-hand">Join us</p>
        <p className="extend-your-hand">Contact Us</p>
      </div>
      <img
        className="ant-designcopyright-circle-fi-icon"
        alt=""
        src="../antdesigncopyrightcirclefilled.svg"
      />
      <div className="copyright-reserved-2023">Copyright Reserved 2023</div>
      <img className="mask-group-icon" alt="" src="../mask-group@2x.png" />
      <div className="home-page-child4" />
      <div className="name">Name</div>
      <div className="your-message">Your Message</div>
      <div className="send">Send</div>
      <div className="home-page-child5" />
      <button className="rectangle-button" />
      <div className="the-earth-is-container">
        <p className="extend-your-hand">
          <span className="the-earth-is">{`"The Earth is what we all have in common." `}</span>
        </p>
        <p className="to-mother-earth">
          <span className="wendell-berry1">—Wendell Berry</span>
        </p>
      </div>
      <div className="nav-bar">
        <div className="nav-bar-child" />
        <div className="home1">Home</div>
        <div className="about-us1" onClick={onAboutUsText1Click}>
          About Us
        </div>
        <div className="ngos" onClick={onNGOsTextClick}>
          NGOs
        </div>
        <div className="join-us2" onClick={onJoinUsText1Click}>
          Join Us
        </div>
        <div className="donate2" onClick={onDonateTextClick}>
          Donate
        </div>
        <div className="logo1">
          <div className="ayudar1">Ayudar</div>
          <i className="reviving-nature1">Reviving nature</i>
          <img className="logo-item" alt="" src="../ellipse-11.svg" />
          <img
            className="mask-group-icon1"
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className="mask-group-icon2"
            alt=""
            src="../mask-group2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
