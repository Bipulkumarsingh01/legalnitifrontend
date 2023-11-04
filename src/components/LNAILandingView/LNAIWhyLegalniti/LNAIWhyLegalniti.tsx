import {
  AiAnimation,
  ChatSupport,
  DedicatedLawyers,
  FastTeamSupport,
  ReliableSystem,
  RoundClockSupport,
  SafeAndSecure,
  TrustedAdvisors,
  YearsOfExperience,
} from "../../../assets";
import "./LNAIWhyLegalniti.css";

const LNAIWhyLegalniti = () => {
  return (
    <div className="lnai-landing-view-why-legalniti-container">
      {/* <img
        src={AiAnimation}
        alt="AiAnimation"
        height={300}
        width={300}
        className="lnai-landing-view-why-legalniti-ai-animation-gif"
      /> */}
      <iframe
        frameBorder="0"
        className="lnai-landing-view-why-legalniti-ai-animation-gif"
        height={300}
        width={300}
        src="https://lottie.host/?file=463cc4e0-8f39-4b51-9743-13a654c02430/MxmUD7365K.json"
      ></iframe>
      <h1 className="lnai-landing-view-why-legalniti-heading">
        Why{" "}
        <span className="lnai-landing-view-why-legalniti-heading-highlight">
          Legalniti ?
        </span>
      </h1>
      <div className="lnai-landing-view-why-legalniti-grid-container">
        <div className="lnai-landing-view-why-legalniti-grid-item trusted-advisors">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={TrustedAdvisors}
              alt="TrustedAdvisors"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Trusted <br />
            Advisors
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item fast-team">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={FastTeamSupport}
              alt="FastTeamSupport"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Fast Team <br />
            Support
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item years-experience">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={YearsOfExperience}
              alt="YearsOfExperience"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            5+ years of <br /> experience
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item round-clock">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={RoundClockSupport}
              alt="RoundClockSupport"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Round Clock <br /> Support
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item dedicated-lawyers">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={DedicatedLawyers}
              alt="DedicatedLawyers"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Dedicated <br /> Lawyers
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item chat-support">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img src={ChatSupport} alt="ChatSupport" height={60} width={60} />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Chat <br /> Support
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item safe-secure">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={SafeAndSecure}
              alt="SafeAndSecure"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Safe & <br /> Secure
          </h2>
        </div>
        <div className="lnai-landing-view-why-legalniti-grid-item reliable-system">
          <div className="lnai-landing-view-why-legalniti-image-item">
            <img
              src={ReliableSystem}
              alt="ReliableSystem"
              height={60}
              width={60}
            />
          </div>
          <h2 className="lnai-landing-view-why-legalniti-grid-item-text">
            Quick & Reliable <br /> System
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LNAIWhyLegalniti;
