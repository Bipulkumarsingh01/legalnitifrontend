import { Button } from "@mui/material";
import { LNAILandingAboutAI } from "../../../assets";

import "./LNAIAiPowered.css";

export const LNAIAiPowered = () => {
  return (
    <div className="lnai-landing-page-about-ai-container">
      <h1 className="lnai-landing-view-about-ai-heading">
        AI Powered <span style={{ color: "#8804BA" }}>Simplicity.</span>
      </h1>
      <div className="lnai-landing-page-about-ai-details-and-image-container">
        <div className="lnai-landing-view-about-ai-details">
          <p>
            At Legal Niti, we leverage the latest AI technology to simplify the{" "}
            <br />
            process of incorporating your startup and ensuring GST compliance.{" "}
            <br />
            Our user-friendly platform automates company registration, license{" "}
            <br />
            acquisition, GST filing, and compliance management.
          </p>
          <div className="lnai-landing-view-about-ai-buttons-container">
            {/* <Button variant="LNAIPurpleGradientDark">Explore Services</Button> */}
            <Button variant="LNAIPurpleGradientLight">Explore Services</Button>
            <Button variant="LNAIPurpleGradientLight">Get Consultancy</Button>
          </div>
        </div>

        <div className="lnai-landing-view-about-ai-image">
          <img src={LNAILandingAboutAI} alt="ai" />
        </div>
      </div>
    </div>
  );
};
