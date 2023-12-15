import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";

import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { removeUserDetails, removeUserToken } from "../../actions";
import {
  LNAILogoTp,
  MaleUser,
  SideBarMenuDashboard,
  SideBarMenuHome,
  SideBarMenuLogout,
  SideBarMenuProfile,
  SideBarMenuServices,
} from "../../assets";

import "./LNAISideBar.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function LNAISideBar({
  children,
  dashboardMenuChangeHandler,
  value,
}: any) {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const store: any = useSelector((state) => state);
  const [decodedToken, setDecodedToken] = useState<any>({});

  const userToken = store["userToken"] ? store["userToken"] : {};

  const accessToken = userToken?.["access_token"];

  const logoutUserHandler = () => {
    localStorage.clear();
    dispatch(removeUserToken());
    dispatch(removeUserDetails());
    googleLogout();
  };

  useEffect(() => {
    if (accessToken) {
      const base64Url = accessToken.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      setDecodedToken(JSON.parse(jsonPayload));
    }
  }, [accessToken]);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="lnai-side-bar-main-container"
      >
        <div className="lnai-side-bar-header-main-container">
          <img
            src={LNAILogoTp}
            alt="LNAILOGO"
            width={60}
            height={35}
            className="lnai-side-bar-lnai-logo"
          />
          <img
            src={MaleUser}
            alt="MaleUser"
            width={100}
            height={100}
            className="lnai-side-bar-avatar-logo"
          />
          <h3 className="lnai-side-bar-user-name">
            {decodedToken?.["first_name"]}{" "}
            <span>{decodedToken?.["last_name"]}</span>
          </h3>
        </div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={dashboardMenuChangeHandler}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            height: "100%",
          }}
          TabIndicatorProps={{
            style: {
              background: "none",
            },
          }}
        >
          <Tab
            disableRipple
            label={
              <div className="lnai-side-bar-menu-item">
                <div className="lnai-side-bar-menu-item-logo-container">
                  <img
                    src={SideBarMenuHome}
                    alt="Home"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="lnai-side-bar-menu-item-label-container">
                  <h5>Home</h5>
                </div>
              </div>
            }
            {...a11yProps(3)}
            style={{ color: "white" }}
            className="lnai-side-bar-menu-item-main-container"
          />

          <Tab
            disableRipple
            label={
              <div className="lnai-side-bar-menu-item">
                <div className="lnai-side-bar-menu-item-logo-container">
                  <img
                    src={SideBarMenuProfile}
                    alt="SideBarMenuProfile"
                    height={35}
                    width={35}
                  />
                </div>
                <div className="lnai-side-bar-menu-item-label-container">
                  <h5>My Profile</h5>
                </div>
              </div>
            }
            {...a11yProps(4)}
            style={{ color: "white" }}
            className="lnai-side-bar-menu-item-main-container"
          />

          <Tab
            disableRipple
            label={
              <div className="lnai-side-bar-menu-item">
                <div className="lnai-side-bar-menu-item-logo-container">
                  <img
                    src={SideBarMenuDashboard}
                    alt="SideBarMenuDashboard"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="lnai-side-bar-menu-item-label-container">
                  <h5>Dashboard</h5>
                </div>
              </div>
            }
            {...a11yProps(5)}
            style={{ color: "white" }}
            className="lnai-side-bar-menu-item-main-container"
          />

          <Tab
            disableRipple
            label={
              <div className="lnai-side-bar-menu-item">
                <div className="lnai-side-bar-menu-item-logo-container">
                  <img
                    src={SideBarMenuServices}
                    alt="SideBarMenuServices"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="lnai-side-bar-menu-item-label-container">
                  <h5>Services</h5>
                </div>
              </div>
            }
            {...a11yProps(6)}
            style={{ color: "white" }}
            className="lnai-side-bar-menu-item-main-container"
          />

          <Tab
            disableRipple
            label={
              <div className="lnai-side-bar-menu-item">
                <div className="lnai-side-bar-menu-item-logo-container">
                  <img
                    src={SideBarMenuLogout}
                    alt="SideBarMenuLogout"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="lnai-side-bar-menu-item-label-container">
                  <h5>Logout</h5>
                </div>
              </div>
            }
            {...a11yProps(6)}
            style={{}}
            onClick={logoutUserHandler}
            className="lnai-side-bar-menu-item-logout-main-container"
          />
        </Tabs>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
}
