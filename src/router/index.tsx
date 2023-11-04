import { createBrowserRouter } from "react-router-dom";

import {
  LNAIAboutPage,
  LNAIContactPage,
  LNAILandingPage,
  LNAILoginPage,
  LNAIServicePage,
  LNAITeamPage,
  LNAIToolsPage,
  LNAIFillipFormPage,
  LNAISignupPage,
  LNAIAccounts,
  LNAICartPage,
  LNAIFormsPage,
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
    path: "team",
    element: <LNAITeamPage />,
  },
  {
    path: "tools",
    element: <LNAIToolsPage />,
  },
  {
    path: "service",
    element: <LNAIServicePage />,
  },
  {
    path: "contact",
    element: <LNAIContactPage />,
  },
  {
    path: "login",
    element: <LNAILoginPage />,
  },
  {
    path: "fillipform",
    element: <LNAIFillipFormPage />,
  },
  {
    path: "signup",
    element: <LNAISignupPage />,
  },
  {
    path: "accounts",
    element: <LNAIAccounts />,
  },
  {
    path: "cart",
    element: <LNAICartPage />,
  },
  {
    path: "form/:formType",
    element: <LNAIFormsPage />,
  },
]);

export default router;
