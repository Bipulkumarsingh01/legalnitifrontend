import { navbarRoutesObjType } from "../../utils";

const navbarRoutes: Array<navbarRoutesObjType> = [
  { key: 1, to: "/about", label: "About", hasChildren: false },
  { key: 2, to: "/service", label: "Service", hasChildren: false },
  { key: 3, to: "/team", label: "Team", hasChildren: false },
  {
    key: 4,
    to: "/tools",
    label: "Tools",
    hasChildren: true,
    children: [
      {
        key: 41,
        to: "/tools?service=gstcalculator",
        label: "GST Calculator",
      },
      {
        key: 42,
        to: "/tools?service=sipcalculator",
        label: "SIP Calculator",
      },
      {
        key: 43,
        to: "/tools?service=businesssetupcalculator",
        label: "Business Setup Calculator",
      },
      {
        key: 44,
        to: "/tools?service=salarycalculator",
        label: "Salary Calculator",
      },
      {
        key: 45,
        to: "/tools?service=tdscalculator",
        label: "TDS Calculator",
      },
      {
        key: 46,
        to: "/tools?service=npscalculator",
        label: "NPS Calculator",
      },
      {
        key: 47,
        to: "/tools?service=retirementplanning",
        label: "Retirement Planning",
      },
      {
        key: 48,
        to: "/tools?service=ppfcalculator",
        label: "PPF Calculator",
      },
      {
        key: 49,
        to: "/tools?service=hracalculator",
        label: "HRA Calculator",
      },
      {
        key: 50,
        to: "/tools?service=epfcalculator",
        label: "EPF Calculator",
      },
      {
        key: 51,
        to: "/tools?service=incometaxcalculator",
        label: "Income Tax Calculator",
      },
      {
        key: 52,
        to: "/tools?service=rdcalculator",
        label: "RD Calculator",
      },
      {
        key: 53,
        to: "/tools?service=gratuitycalculator",
        label: "Gratuity Calculator",
      },
    ],
  },
  { key: 5, to: "/contact", label: "Contact", hasChildren: false },
];

export default navbarRoutes;
