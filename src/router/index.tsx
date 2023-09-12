import { createBrowserRouter } from "react-router-dom";

import {
  LNAIAboutPage,
  LNAIContactPage,
  LNAILandingPage,
  LNAILoginPage,
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
  {
    path: "login",
    element: <LNAILoginPage />,
  },
]);

export default router;
