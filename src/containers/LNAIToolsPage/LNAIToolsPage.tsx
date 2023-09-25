import { useSearchParams } from "react-router-dom";
import { LNAINameGenerator, LNAINavBar } from "../../components";
import "./LNAIToolsPage.css";

const LNAIToolsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <LNAINavBar />
      LNAIToolsPage
      <br />
      <div>Selected Service: {searchParams.get("service")}</div>
      <LNAINameGenerator />
    </div>
  );
};

export default LNAIToolsPage;
