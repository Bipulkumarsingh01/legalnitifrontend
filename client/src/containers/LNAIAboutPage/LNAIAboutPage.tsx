import { BipulKumar, Collage, KashviJain, Koushik } from "../../assets";
import { LNAIFooter, LNAINavBar } from "../../components";
import LNAIAiSolutions from "../../components/LNAILandingView/LNAIAiSolutions/LNAIAiSolutions";
import "./LNAIAboutPage.css";

const LNAIAboutPage = () => {
  return (
    <div>
      <LNAINavBar />
      <div>
        <h1 className="lnai-about-us-primary-heading">About Us</h1>
        <div style={{ textAlign: "center" }}>
          <img src={Collage} alt="collage" height={"750px"} width={"95%"} />
        </div>
        <div>
          <LNAIAiSolutions />
        </div>
        <div>
          <h1 className="lnai-about-us-primary-heading">Our Team</h1>
        </div>
        <div className="lnai-about-team-member-parent-container">
          <div className="lnai-about-team-member-card">
            <img src={BipulKumar} alt="Bipul Kumar" height={325} width={325} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Bipul Kumar Singh
            </h2>
            <h3>CEO</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={KashviJain} alt="Kashvi Jain" height={325} width={325} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Kashvi Jain
            </h2>
            <h3>COO</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={Koushik} alt="Koushik H R" height={325} width={325} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Koushik H R
            </h2>
            <h3>Full Stack Developer</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={BipulKumar} alt="Bipul Kumar" height={325} width={325} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Bipul Kumar Singh
            </h2>
            <h3>CEO</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={BipulKumar} alt="Bipul Kumar" height={325} width={325} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Bipul Kumar Singh
            </h2>
            <h3>CEO</h3>
          </div>
        </div>
      </div>
      <LNAIFooter getStarted={true} />
    </div>
  );
};

export default LNAIAboutPage;
