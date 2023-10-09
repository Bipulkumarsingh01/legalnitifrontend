import { Button } from "@mui/material";
import "./LNAIDashboardView.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFormData, getRunScript } from "../../axiosActions";

const LNAIDashboardView = ({ decodedToken }: any) => {
  const navigate = useNavigate();
  const [fillipData, setFillipData] = useState<any>();
  const fillipFormOpenHandler = () => {
    navigate("fillipform");
  };

  useEffect(() => {
    const getFormDataLocal = async () => {
      const fillipDataResponse: any = await getFormData("fillip");
      if (fillipDataResponse.status === 200) {
        setFillipData(fillipDataResponse.data);
      }
    };
    getFormDataLocal();
  }, [decodedToken]);

  const runScriptHandler = async () => {
    const scriptResponse = await getRunScript();
    console.log(scriptResponse.data);
  };

  return (
    <div>
      {decodedToken?.["role"] === "Client" ? (
        <Button onClick={fillipFormOpenHandler} variant="contained">
          Fill Fillip Form
        </Button>
      ) : (
        <>
          <code>{JSON.stringify(fillipData?.["Data"])}</code>
          <Button variant="contained" onClick={runScriptHandler}>
            Run Script
          </Button>
        </>
      )}
    </div>
  );
};

export default LNAIDashboardView;
