import { navbarRoutesObjType } from "../../utils";

const navbarRoutes: Array<navbarRoutesObjType> = [
  { key: 1, to: "/home", label: "Home", hasChildren: false },
  { key: 2, to: "/about", label: "About", hasChildren: false },
  { key: 3, to: "/service", label: "Service", hasChildren: false },
  { key: 4, to: "/team", label: "Team", hasChildren: false },
  {
    key: 5,
    to: "/tools",
    label: "Tools",
    hasChildren: true,
    children: [
      {
        key: 51,
        to: "/tools?service=gstcalculator",
        label: "GST Calculator",
      },
      {
        key: 52,
        to: "/tools?service=sipcalculator",
        label: "SIP Calculator",
      },
      {
        key: 53,
        to: "/tools?service=businesssetupcalculator",
        label: "Business Setup Calculator",
      },
      {
        key: 54,
        to: "/tools?service=salarycalculator",
        label: "Salary Calculator",
      },
      {
        key: 55,
        to: "/tools?service=tdscalculator",
        label: "TDS Calculator",
      },
      {
        key: 56,
        to: "/tools?service=npscalculator",
        label: "NPS Calculator",
      },
      {
        key: 57,
        to: "/tools?service=retirementplanning",
        label: "Retirement Planning",
      },
      {
        key: 58,
        to: "/tools?service=ppfcalculator",
        label: "PPF Calculator",
      },
      {
        key: 59,
        to: "/tools?service=hracalculator",
        label: "HRA Calculator",
      },
      {
        key: 60,
        to: "/tools?service=epfcalculator",
        label: "EPF Calculator",
      },
      {
        key: 61,
        to: "/tools?service=incometaxcalculator",
        label: "Income Tax Calculator",
      },
      {
        key: 62,
        to: "/tools?service=rdcalculator",
        label: "RD Calculator",
      },
      {
        key: 63,
        to: "/tools?service=gratuitycalculator",
        label: "Gratuity Calculator",
      },
    ],
  },
  { key: 6, to: "/contact", label: "Contact", hasChildren: false },
];

export default navbarRoutes;
