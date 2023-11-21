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

  return (
    <>
      <LNAINavBar />
      <Box className="lnai-toolsPage-mainBox">
        {/* <div>Selected Service: {searchParams.get("service")}</div>
      LNAIToolsPage
      <br />
    <LNAINameGenerator />  */}
        {searchParams.get("service") === "incometaxcalculator" && (
          <IncomeTaxCalculator />
        )}
        {searchParams.get("service") === "businesssetupcalculator" && (
          <BussinessSetup />
        )}
        {searchParams.get("service") === "salarycalculator" && (
          <SalaryCalculator />
        )}
        {searchParams.get("service") === "tdscalculator" && <TdsCalculator />}
        {searchParams.get("service") === "gratuitycalculator" && (
          <GratuityCalculator />
        )}
        {searchParams.get("service") === "retirementplanning" && (
          <RetirementPlanning />
        )}
        {searchParams.get("service") === "epfcalculator" && <EpfCalculator />}
        {searchParams.get("service") === "npscalculator" && <NpsCalculator />}
        {searchParams.get("service") === "hracalculator" && <HRAcalculator />}
        {searchParams.get("service") === "rdcalculator" && <RDcalculator />}
        {searchParams.get("service") === "ppfcalculator" && <PPFcalculator />}
        {searchParams.get("service") === "sipcalculator" && <SIPcalculator />}
        {searchParams.get("service") === "gstcalculator" && <GSTcalculator />}
      </Box>
      <LNAIFooter getStarted={false} />
    </>
  );
};
export default LNAIToolsPage;
