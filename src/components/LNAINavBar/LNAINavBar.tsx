import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { RxAvatar } from "react-icons/rx";

import navbarRoutes from "./navbarRoutes";
import { CascadedMenuLarge, CascadedMenuSmall } from "../../utils";

import { LNAICart, LNAIFavourates, LNAILogoTp } from "../../assets";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import "./LNAINavBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeUserDetails,
  // removeUserLoginCred,
  removeUserToken,
} from "../../actions";
import { googleLogout } from "@react-oauth/google";

interface navBarComponentPropType {
  color?: string;
}

const LNAINavBar = ({ menuItems }: { menuItems?: string }) => {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const userToken = store["userToken"];
  const accessToken = userToken?.["access_token"];
  // const refreshToken = userToken?.["refresh_token"];

  // const userDetails = store["userDetails"];

  const navigate = useNavigate();
  const [navbarRouteMenuState, setNavbarRouteMenuState] =
    useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [childRoutesSmallMenuState, setChildRoutesSmallMenuState] =
    useState<null | HTMLElement>(null);
  const [childRoutesLargeMenuState, setChildRoutesLargeMenuState] =
    useState<any>(null);

  const openChildRouteSmall = Boolean(childRoutesSmallMenuState);
  const openChildRouteLarge = Boolean(childRoutesLargeMenuState);

  const signUpUserHandler = () => {
    navigate("/accounts?source=signup");
  };
  const loginUserHandler = () => {
    navigate("/accounts?source=signin");
  };

  const logoutUserHandler = () => {
    localStorage.clear();
    dispatch(removeUserToken());
    dispatch(removeUserDetails());
    googleLogout();
  };

  const settings = accessToken
    ? [{ label: "Logout", value: "logout", handler: logoutUserHandler }]
    : [
        { label: "Sign Up", value: "Sign Up", handler: signUpUserHandler },
        { label: "Login", value: "Login", handler: loginUserHandler },
      ];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavbarRouteMenuState(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavbarRouteMenuState(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navbarChildRoutesSmallMenuOpenHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setChildRoutesSmallMenuState(event.currentTarget);
  };
  const navbarChildRoutesSmallMenuCloseHandler = () => {
    setChildRoutesSmallMenuState(null);
  };

  const navbarChildRoutesLargeMenuOpenHandler = (
    // event: React.MouseEvent<HTMLButtonElement>
    event: any
  ) => {
    event.stopPropagation();
    // console.log(event.target.textContent);
    // console.log(event.currentTarget);
    setChildRoutesLargeMenuState(event.currentTarget);
  };
  const navbarChildRoutesLargeMenuCloseHandler = () => {
    setChildRoutesLargeMenuState(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(0,0,0,0.9)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" className="lnai-navbar-accessibility-container">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink to={"/"}>
              <img
                src={LNAILogoTp}
                alt={"Legalniti Logo"}
                className="lnai-navbar-legalniti-logo"
                height={40}
                width={80}
              />
            </NavLink>
          </Typography>
          <CascadedMenuSmall
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            navbarRoutes={navbarRoutes}
            navbarRouteMenuState={navbarRouteMenuState}
            navbarChildRoutesSmallMenuOpenHandler={
              navbarChildRoutesSmallMenuOpenHandler
            }
            navbarChildRoutesSmallMenuCloseHandler={
              navbarChildRoutesSmallMenuCloseHandler
            }
            childRoutesSmallMenuState={childRoutesSmallMenuState}
            openChildRouteSmall={openChildRouteSmall}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink to={"/"}>
              <img
                src={LNAILogoTp}
                alt={"Legalniti Logo"}
                className="lnai-navbar-legalniti-logo"
              />
            </NavLink>
          </Typography>

          <CascadedMenuLarge
            navbarRoutes={navbarRoutes}
            handleCloseNavMenu={handleCloseNavMenu}
            openChildRouteLarge={openChildRouteLarge}
            navbarChildRoutesLargeMenuOpenHandler={
              navbarChildRoutesLargeMenuOpenHandler
            }
            childRoutesLargeMenuState={childRoutesLargeMenuState}
            navbarChildRoutesLargeMenuCloseHandler={
              navbarChildRoutesLargeMenuCloseHandler
            }
            menuItems={menuItems}
          />

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <img
                src={LNAIFavourates}
                alt=""
                width={30}
                height={30}
                style={{ margin: "0.5rem" }}
              />
            </IconButton>
            <IconButton
              sx={{ p: 0 }}
              onClick={() => {
                navigate("/cart");
              }}
            >
              <img
                src={LNAICart}
                alt=""
                width={30}
                height={30}
                style={{ margin: "0.5rem" }}
              />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <RxAvatar className="lnai-navbar-avatar-outlined-icon" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className="lnai-navbar-user-settings-menu-parent-container"
            >
              {settings.map((setting) => (
                <MenuItem key={setting.value} onClick={setting.handler}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default LNAINavBar;
