import { useSearchParams } from "react-router-dom";
import { LNAIFooter, LNAINameGenerator, LNAINavBar } from "../../components";
import { Box } from "@mui/material";
import "./LNAIToolsPage.css";
import {
  BussinessSetup,
  EpfCalculator,
  GratuityCalculator,
  GSTcalculator,
  HRAcalculator,
  IncomeTaxCalculator,
  NpsCalculator,
  PPFcalculator,
  RDcalculator,
  RetirementPlanning,
  SalaryCalculator,
  SIPcalculator,
  TdsCalculator,
} from "./index.ts";

const LNAIToolsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const service = searchParams.get("service");
  const renderCalculator = () => {
    switch (service) {
      case "incometaxcalculator":
        return <IncomeTaxCalculator />;
      case "businesssetupcalculator":
        return <BussinessSetup />;
      case "salarycalculator":
        return <SalaryCalculator />;
      case "tdscalculator":
        return <TdsCalculator />;
      case "gratuitycalculator":
        return <GratuityCalculator />;
      case "retirementplanning":
        return <RetirementPlanning />;
      case "epfcalculator":
        return <EpfCalculator />;
      case "npscalculator":
        return <NpsCalculator />;
      case "hracalculator":
        return <HRAcalculator />;
      case "rdcalculator":
        return <RDcalculator />;
      case "ppfcalculator":
        return <PPFcalculator />;
      case "sipcalculator":
        return <SIPcalculator />;
      case "gstcalculator":
        return <GSTcalculator />;
      default:
        return "";
    }
  };

  return (
    <>
      <LNAINavBar />
      {/* <div>Selected Service: {searchParams.get("service")}</div> */}

      <Box className="lnai-toolsPage-mainBox">{renderCalculator()}</Box>
      <LNAIFooter getStarted={false} />
    </>
  );
};
export default LNAIToolsPage;
