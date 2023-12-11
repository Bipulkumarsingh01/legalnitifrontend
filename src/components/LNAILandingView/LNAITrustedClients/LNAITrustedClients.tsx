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
      <h1 className="lnai-landing-view-trusted-clients-heading-highlight">
        Trusted Clients
      </h1>
      <div className="lnai-landing-view-trusted-clients-details-container">
        <img
          src={TrustedClients}
          alt="TrustedClients"
          height={300}
          width={375}
        />
        <p>
          We leverage the power of digital to simplify the things and not make
          them complex for you. Our clear, concise and transparent process gives
          you the complete control of actions taken for you. Working smartly we
          execute the operations in a flawless manner.
        </p>
      </div>
      <div className="lnai-landing-view-trusted-clients-logo-container">
        <div className="lnai-landing-view-trusted-clients-logo-item">
          <img
            src={TrustedClients1}
            alt="TrustedClients1"
            height={45}
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
    </div>
  );
};

export default LNAITrustedClients;
