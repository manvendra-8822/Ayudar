import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="payment">
      <img
        className="pexels-deva-darshan-1173777-2-icon2"
        alt=""
        src="../pexelsdevadarshan1173777-22@2x.png"
      />
      <div className="payment-child" />
      <img
        className="brandicomastercard-icon"
        alt=""
        src="../brandicomastercard.svg"
      />
      <img className="lacc-visa-icon" alt="" src="../laccvisa.svg" />
      <div className="choose-how-to">Choose how to pay</div>
      <div className="your-payment-is-encrpyted-parent">
        <div className="your-payment-is">Your payment is encrpyted</div>
        <img className="group-child" alt="" src="../group-3.svg" />
      </div>
      <div className="payment-item" />
      <b className="donate-now">DONATE NOW</b>
      <button className="payment-inner" />
      <button className="cancel" onClick={onCancelClick}>
        <button className="cancel-child" />
        <div className="cancel1">Cancel</div>
      </button>
      <div className="creditdebit-card">Credit/Debit Card</div>
      <div className="upiwallet">UPI/Wallet</div>
      <img
        className="arrow-right-solid-3-icon1"
        alt=""
        src="../arrowrightsolid-31.svg"
      />
      <img
        className="arrow-right-solid-4-icon1"
        alt=""
        src="../arrowrightsolid-41.svg"
      />
      <img
        className="simple-iconsphonepe"
        alt=""
        src="../simpleiconsphonepe.svg"
      />
      <img className="vector-icon2" alt="" src="../vector2.svg" />
      <img className="vector-icon3" alt="" src="../vector3.svg" />
      <img className="lock-solid-1-icon" alt="" src="../locksolid-1.svg" />
      <div className="nav-bar5">
        <div className="nav-bar-child3" />
        <div className="logo6">
          <div className="ayudar6">Ayudar</div>
          <i className="reviving-nature6">Reviving nature</i>
          <img className="logo-child4" alt="" src="../ellipse-18.svg" />
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
