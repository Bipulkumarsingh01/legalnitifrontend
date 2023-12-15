import { createBrowserRouter } from "react-router-dom";

import {
  LNAIAboutPage,
  LNAIContactPage,
  LNAILandingPage,
  LNAIServicePage,
  LNAITeamPage,
  LNAIToolsPage,
  LNAIFillipFormPage,
  LNAIAccounts,
  LNAICartPage,
  LNAIFormsPage,
  LNAIBlogsPage,
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
    path: "fillipform",
    element: <LNAIFillipFormPage />,
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
  {
    path: "blogs",
    element: <LNAIBlogsPage />,
  },
]);

export default router;
