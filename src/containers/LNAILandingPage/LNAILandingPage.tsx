import { useState } from "react";
import { useSelector } from "react-redux";

import {
  LNAIDashboardView,
  LNAILandingView,
  LNAINavBar,
} from "../../components";

const LNAILandingPage = () => {
  const store: any = useSelector((state) => state);
  const [scrolled, setScrolled] = useState("rgba(0,0,0,0.4)");

  const userToken = store["userToken"] ? store["userToken"] : {};

  const accessToken = userToken?.["access_token"];
  const refreshToken = userToken?.["refresh_token"];

  return (
    <div>
      <LNAINavBar color={scrolled} />
      {accessToken ? <LNAIDashboardView /> : <LNAILandingView />}
    </div>
  );
};

export default LNAILandingPage;
