import { ThemeProvider } from "@emotion/react";
import { LNAIThemeConfig } from "../../ThemeConfig";
import { LNAIAiPowered } from "./LNAIAiPowered/LNAIAiPowered";
import LNAIAiSolutions from "./LNAIAiSolutions/LNAIAiSolutions";
import LNAIGetConsultancy from "./LNAIGetConsultancy/LNAIGetConsultancy";
import LNAIInfoGraph from "./LNAIInfoGraph/LNAIInfoGraph";
import LNAIServiceInfo from "./LNAIServiceInfo/LNAIServiceInfo";
import LNAIWhyLegalniti from "./LNAIWhyLegalniti/LNAIWhyLegalniti";
import LNAITestimonials from "./LNAITestimonials/LNAITestimonials";
import LNAITrustedClients from "./LNAITrustedClients/LNAITrustedClients";

import "./LNAILandingView.css";
import { LNAIFooter } from "..";

const LNAILandingView = () => {
  return (
    <ThemeProvider theme={LNAIThemeConfig}>
      <div className="lnai-landing-page-main-container">
        <div className="lnai-landing-page-about-ai-main-container">
          <LNAIAiPowered />
        </div>
        <div className="lnai-landing-page-info-graph-main-container">
          <LNAIInfoGraph />
        </div>
        <div className="lnai-landing-page-service-info-main-container">
          <LNAIServiceInfo />
        </div>
        <div className="lnai-landing-page-ai-solutions-main-container">
          <LNAIAiSolutions />
        </div>
        <div className="lnai-landing-page-why-legalniti-main-container">
          <LNAIWhyLegalniti />
        </div>
        <div className="lnai-landing-page-get-consultancy-main-container">
          <LNAIGetConsultancy />
        </div>
        <div className="lnai-landing-page-testimonials-main-container">
          <LNAITestimonials />
        </div>
        <div className="lnai-landing-page-trusted-clients-main-container">
          <LNAITrustedClients />
        </div>
        <div className="lnai-landing-page-footer-main-container">
          <LNAIFooter />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LNAILandingView;
