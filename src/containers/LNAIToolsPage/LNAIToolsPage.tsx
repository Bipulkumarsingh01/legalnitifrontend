import { useSearchParams } from "react-router-dom";
import { LNAINavBar } from "../../components";
import "./LNAIToolsPage.css";

const LNAIToolsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <LNAINavBar />
      LNAIToolsPage
      <br />
      <div>Selected Service: {searchParams.get("service")}</div>
    </div>
  );
};

export default LNAIToolsPage;
