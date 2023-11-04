import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFormData,
  getRunScript,
  getSubscribedServices,
} from "../../axiosActions";
import "./LNAIDashboardView.css";

const LNAIDashboardView = ({ decodedToken }: any) => {
  const navigate = useNavigate();
  const [fillipData, setFillipData] = useState<any>();
  const [servicesSubscribed, setServicesSubscribed] = useState<any>({});

  const fillipFormOpenHandler = () => {
    navigate(`form/fillip`);
  };
  const formOpenHandler = (indService: string) => {
    navigate(`form/${indService}`);
  };

  useEffect(() => {
    const getSubscribedServicesData = async () => {
      const localStorageTokens = localStorage.getItem("x-users-tokens");

      if (localStorageTokens) {
        const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
        const accessToken: string = parsedLocalStorageTokens["access_token"];
        const subscribedServicesData: any = await getSubscribedServices(
          accessToken
        );

        if (subscribedServicesData.status === 200) {
          setServicesSubscribed(subscribedServicesData.data.ServicesSubscribed);
        }
      }
    };

    getSubscribedServicesData();
  }, []);

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
    const scriptResponse: any = await getRunScript();
    console.log(scriptResponse.data);
  };

  return (
    <div>
      {decodedToken?.["role"] === "Client" ? (
        <>
          {Object.keys(servicesSubscribed)?.length > 0 &&
            Object.keys(servicesSubscribed)?.map((key, index) =>
              servicesSubscribed[key].map(
                (indService: any, serviceIndex: any) => (
                  <Button
                    // onClick={fillipFormOpenHandler}
                    onClick={() => formOpenHandler(indService)}
                    variant="contained"
                  >
                    {indService}
                  </Button>
                )
              )
            )}
        </>
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
