import { createBrowserRouter } from "react-router-dom";

import {
  LNAIAboutPage,
  LNAIContactPage,
  LNAIHomePage,
  LNAILandingPage,
  LNAIServicePage,
  LNAITeamPage,
  LNAIToolsPage,
} from "../containers";

const router = createBrowserRouter([
  {
    path: "",
    element: <LNAILandingPage />,
  },
  {
    path: "home",
    element: <LNAIHomePage />,
  },
  {
    path: "about",
    element: <LNAIAboutPage />,
  },
  {
    path: "service",
    element: <LNAIServicePage />,
  },
  {
    path: "team",
    element: <LNAITeamPage />,
  },
  {
    path: "tools",
    element: <LNAIToolsPage />,
  },
  {
    path: "contact",
    element: <LNAIContactPage />,
  },
]);

export default router;
