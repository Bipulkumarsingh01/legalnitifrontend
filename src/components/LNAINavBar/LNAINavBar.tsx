import { useState } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { RxAvatar } from "react-icons/rx";

import navbarRoutes from "./navbarRoutes";
import { LNAILogoTp } from "../../assets";
import { CascadedMenuLarge, CascadedMenuSmall } from "../../utils";

import "./LNAINavBar.css";

const settings = ["Login", "Sign In"];

const LNAINavBar = () => {
  const [navbarRouteMenuState, setNavbarRouteMenuState] =
    useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [childRoutesSmallMenuState, setChildRoutesSmallMenuState] =
    useState<null | HTMLElement>(null);
  const [childRoutesLargeMenuState, setChildRoutesLargeMenuState] =
    useState<null | HTMLElement>(null);

  const openChildRouteSmall = Boolean(childRoutesSmallMenuState);
  const openChildRouteLarge = Boolean(childRoutesLargeMenuState);

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
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setChildRoutesLargeMenuState(event.currentTarget);
  };
  const navbarChildRoutesLargeMenuCloseHandler = () => {
    setChildRoutesLargeMenuState(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" className="lnai-navbar-parent-container">
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
          />

          <Box sx={{ flexGrow: 0 }}>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default LNAINavBar;
