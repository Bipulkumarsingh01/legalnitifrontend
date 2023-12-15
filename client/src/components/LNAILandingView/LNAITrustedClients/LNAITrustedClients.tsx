import Marquee from "react-fast-marquee";
import {
  TrustedClients,
  TrustedClients1,
  TrustedClients2,
  TrustedClients3,
  TrustedClients4,
  TrustedClients5,
} from "../../../assets";
import "./LNAITrustedClients.css";

const LNAITrustedClients = () => {
  return (
    <div className="lnai-landing-view-trusted-clients-container">
      <h1 className="lnai-landing-view-testimonial-heading-highlight">
        Trusted Clients
      </h1>
      <div className="lnai-landing-view-trusted-clients-details-container">
        <img src={TrustedClients} alt="TrustedClients" />
        <p>
          We leverage the power of digital to simplify the <br /> things and not
          make them complex for you. Our <br /> clear, concise and transparent
          process gives you <br /> the complete control of actions taken for
          you. <br /> Working smartly we execute the operations in a <br />{" "}
          flawless manner.
        </p>
      </div>
      <Marquee speed={50} direction={"left"} pauseOnHover={true} loop={0} gradient={true}>
      <div className="lnai-landing-view-trusted-clients-logo-container">
        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients1}
            alt="TrustedClients1"
            height={75}
            width={75}
          />
        </div>

        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients2}
            alt="TrustedClients2"
            height={50}
            width={50}
          />
        </div>

        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients3}
            alt="TrustedClients3"
            height={50}
            width={50}
          />
        </div>

        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients4}
            alt="TrustedClients4"
            height={50}
            width={50}
          />
        </div>

        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients5}
            alt="TrustedClients5"
            height={50}
            width={50}
          />
        </div>
      </div>
      </Marquee>
    </div>
  );
};

export default LNAITrustedClients;
