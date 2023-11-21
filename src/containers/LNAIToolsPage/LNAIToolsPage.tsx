import { useSearchParams } from "react-router-dom";
import { LNAIFooter, LNAINameGenerator, LNAINavBar } from "../../components";
import { Box } from "@mui/material";
import "./LNAIToolsPage.css";
import { IncomeTaxCalculator } from "./IncomeTaxCalculator/IncomeTaxCalculator";
import BussinessSetup from "./BussinessSetup/BussinessSetup";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import TdsCalculator from "./TdsCalculator/TdsCalculator";
import GratuityCalculator from "./GratuitCalculator/GratuityCalculator";
import { RetirementPlanning } from "./RetirementPlanning/RetirementPlanning";

import NpsCalculator from "./NpsCalculator/NpsCalculator";
import HRAcalculator from "./HRAcalculator/HRAcalculator";
import RDcalculator from "./RDcalculator/RDcalculator";
import PPFcalculator from "./PPFcalculator/PPFcalculator";
import EpfCalculator from "./EpfCalculator/EpfCalculator";
import SIPcalculator from "./SIPcalculator/SIPcalculator";
import GSTcalculator from "./GSTcalculator/GSTcalculator";

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
