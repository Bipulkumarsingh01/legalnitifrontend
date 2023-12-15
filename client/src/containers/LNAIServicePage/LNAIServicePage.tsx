import { LNAIFooter, LNAINavBar } from "../../components";
import "./LNAIServicePage.css";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  BussinessSetupService,
  TaxandCompilance,
  TrademarkandIp,
  Documentation,
  LawGpt,
  Consultation,
} from "./index.ts";
const LNAIServicePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const service = searchParams.get("service");

  const renderCalculator = () => {
    switch (service) {
      case "bussiness_setup":
        return <BussinessSetupService />;
      case "documentation":
        return <Documentation />;
      case "lawgpt":
        return <LawGpt />;
      case "trademarkandip":
        return <TrademarkandIp />;
      case "taxandcompilance":
        return <TaxandCompilance />;
      case "consultation":
        return <Consultation />;
      default:
        return "";
    }
  };
  return (
    <div>
      <LNAINavBar />
      <Box className="lnai-toolsPage-mainBox">{renderCalculator()}</Box>

      <LNAIFooter getStarted={true} />
    </div>
  );
};

export default LNAIServicePage;

//BussinessSetupService
//TaxandCompilance
//TrademarkandIp
//Documentation
//LawGpt
