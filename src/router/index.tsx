import { createBrowserRouter } from "react-router-dom";

import { LNAILandingPage } from "../containers";

const router = createBrowserRouter([
  {
    path: "",
    element: <LNAILandingPage />,
  },
]);

export default router;
