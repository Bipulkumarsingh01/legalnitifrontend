import { useState } from "react";
import { LNAINavBar } from "../../components";

const LNAILandingPage = () => {
  const [scrolled, setScrolled] = useState("rgba(0,0,0,0.4)");
  return (
    <div>
      <LNAINavBar color={scrolled} />
      LNAILandingPage
    </div>
  );
};

export default LNAILandingPage;
