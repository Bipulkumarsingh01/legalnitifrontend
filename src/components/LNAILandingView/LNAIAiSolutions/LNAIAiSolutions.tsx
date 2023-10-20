import { Button } from "@mui/material";
import { AiSolution } from "../../../assets";
import "./LNAIAiSolutions.css";

const LNAIAiSolutions = () => {
  return (
    <div className="lnai-landing-page-ai-solutions-container">
      <h1>
        <p className="lnai-landing-page-ai-solutions-heading-span">
          Al-Powered Solutions For Effortless
        </p>
        <p className="lnai-landing-page-ai-solutions-heading-span">
          Incorporation and GST Compliance
        </p>
      </h1>
      <div className="lnai-landing-page-ai-solutions-details-container">
        <img src={AiSolution} alt="ai-solution" height={300} width={300} />
        <div className="lnai-landing-page-ai-solutions-details-text-container">
          <h2 className="lnai-landing-page-ai-solutions-details-heading">
            Since 2023
          </h2>
          <br />
          <p className="lnai-landing-page-ai-solutions-details-text">
            Legalniti plays a major role in targeting audience such as Visionary
            entrepreneurs ready to bring their ideas to life.Growth-oriented
            startups seeking scalable solutions.Busy professionals in need of a
            hassle-free compliance platform. Resourceful small business owners
            maximizing their resources.Join us today and simplify incorporation
            and GST compliance with our innovative platform.
          </p>
          <div className="lnai-landing-page-ai-solutions-details-know-more-button">
            <Button variant="LNAIPurpleGradientLight">Know More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LNAIAiSolutions;
