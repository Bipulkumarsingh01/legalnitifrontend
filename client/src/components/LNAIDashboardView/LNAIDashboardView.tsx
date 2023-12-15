import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getFormData, getSubscribedServices } from "../../axiosActions";
import "./LNAIDashboardView.css";
import { LNAISideBar } from "..";
import { LNAIDashboardMenu } from "./LNAIDashboardMenu/LNAIDashboardMenu";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LNAIDashboardView = ({ decodedToken }: any) => {
  // const navigate = useNavigate();
  const [fillipData, setFillipData] = useState<any>();
  const [servicesSubscribed, setServicesSubscribed] = useState<any>({});
  const [dashboardMenuValue, setDashboardMenuValue] = useState(2);

  const dashboardMenuChangeHandler = (
    // event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDashboardMenuValue(newValue);
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

  return (
    <div className="lnai-dashboard-view-main-container">
      <LNAISideBar
        value={dashboardMenuValue}
        dashboardMenuChangeHandler={dashboardMenuChangeHandler}
      >
        <div>
          <TabPanel value={dashboardMenuValue} index={0}>
            Home Menu
          </TabPanel>

          <TabPanel value={dashboardMenuValue} index={1}>
            Profile Menu
          </TabPanel>

          <TabPanel value={dashboardMenuValue} index={2}>
            <LNAIDashboardMenu servicesSubscribed={servicesSubscribed} />
          </TabPanel>

          <TabPanel value={dashboardMenuValue} index={3}>
            Service Menu
          </TabPanel>
        </div>
      </LNAISideBar>
    </div>
  );
};

export default LNAIDashboardView;

// const fillipFormOpenHandler = () => {
//   navigate(`form/fillip`);
// };
// const formOpenHandler = (indService: string) => {
//   navigate(`form/${indService}`);
// };

// const runScriptHandler = async () => {
//   const scriptResponse: any = await getRunScript();
//   console.log(scriptResponse.data);
// };

// const CallBack = (childData: any) => {
//   return <p>{childData}</p>;
// };
