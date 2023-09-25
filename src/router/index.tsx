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
]);

export default router;

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ATMS_LandingPage />,
//   },

//   {
//     path: '/',
//     element: <ATMS_HomePage />,
//     children: [
//       {
//         path: 'dashboard',
//         element: <ATMS_MainDashboard />,
//       },
//       {
//         path: 'tickets',
//         element: <ATMS_TicketsPage />,
//       },
//       {
//         path: 'ticket/:ticketId',
//         element: <ATMS_TicketDetailPage />,
//       },
//       {
//         path: 'settings',
//         element: <ATMS_SettingsPage />,
//       },
//     ],
//   },

//   {
//     path: '/ticket-details',
//     element: <ATMS_TicketDetailsEmbed />,
//   },

//   {
//     path: '/widgets',
//     element: <ATMS_WidgetsPage />,
//   },

//   {
//     path: '/add-ticket',
//     element: <ATMS_AddTicketEmbed />,
//   },
// ])
