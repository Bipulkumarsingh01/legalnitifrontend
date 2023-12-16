import {
  BipulKumar,
  Collage,
  KashviJain,
  Koushik,
  VinitaLohani,
} from "../../assets";
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
          <img src={Collage} alt="collage" height={"500px"} width={"80%"} />
        </div>
        <div>
          <LNAIAiSolutions />
        </div>
        <div>
          <h1 className="lnai-about-us-primary-heading">Our Team</h1>
        </div>
        <div className="lnai-about-team-member-parent-container">
          <div className="lnai-about-team-member-card">
            <img src={BipulKumar} alt="Bipul Kumar" height={250} width={250} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Bipul Kumar Singh
            </h2>
            <h3>CEO & Co-founder</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={KashviJain} alt="Kashvi Jain" height={250} width={250} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Kashvi Jain
            </h2>
            <h3>COO & Co-founder</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={Koushik} alt="Koushik H R" height={250} width={250} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              Koushik H R
            </h2>
            <h3>Tech Lead</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img
              src={VinitaLohani}
              alt="Vinita Lohani"
              height={250}
              width={250}
            />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              CS. Vinita Lohani
            </h2>
            <h3>Legal Head</h3>
          </div>
          <div className="lnai-about-team-member-card">
            <img src={BipulKumar} alt="Bipul Kumar" height={250} width={250} />
            <h2 style={{ fontWeight: "700" }} className="lnai-primary-heading">
              CA. Srikanth Reddy
            </h2>
            <h3>Consultant</h3>
          </div>
        </div>
      </div>
      <LNAIFooter getStarted={true} />
    </div>
  );
};

export default LNAIAboutPage;
