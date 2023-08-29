import { NavLink } from "react-router-dom";

import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MdMenu, MdOutlineKeyboardArrowRight } from "react-icons/md";

import { CascadedMenuSmallPropType } from "..";

const CascadedMenuSmall = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  navbarRouteMenuState,
  navbarRoutes,
  navbarChildRoutesSmallMenuOpenHandler,
  navbarChildRoutesSmallMenuCloseHandler,
  childRoutesSmallMenuState,
  openChildRouteSmall,
}: CascadedMenuSmallPropType) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MdMenu />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={navbarRouteMenuState}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(navbarRouteMenuState)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
        className="lnai-navbar-routes-children-menu-parent-container"
      >
        {navbarRoutes.map((pageItem) => (
          <MenuItem key={pageItem.key} onClick={handleCloseNavMenu}>
            {!pageItem.hasChildren ? (
              <NavLink
                to={pageItem.to}
                className={(isActive) =>
                  isActive
                    ? "lnai-navbar-active-route lnai-navbar-child-route-menu-large"
                    : "lnai-navbar-non-active-route lnai-navbar-child-route-menu-large"
                }
              >
                {pageItem.label}
              </NavLink>
            ) : (
              <>
                <p
                  onClick={navbarChildRoutesSmallMenuOpenHandler}
                  className="lnai-navbar-non-active-route lnai-navbar-non-active-route lnai-navbar-child-route-menu-large"
                >
                  {pageItem.label}
                  <MdOutlineKeyboardArrowRight className="lnai-navbar-right-arrow-icon" />
                </p>

                <Menu
                  id="basic-menu"
                  anchorEl={childRoutesSmallMenuState}
                  open={openChildRouteSmall}
                  onClose={navbarChildRoutesSmallMenuCloseHandler}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className="lnai-navbar-routes-children-menu-parent-container"
                >
                  {pageItem?.children &&
                    pageItem?.children.map((childItem, index) => (
                      <MenuItem
                        key={index}
                        onClick={navbarChildRoutesSmallMenuCloseHandler}
                      >
                        <NavLink
                          to={childItem.to}
                          className={(isActive) =>
                            isActive
                              ? "lnai-navbar-active-route lnai-navbar-child-route-menu-small"
                              : "lnai-navbar-non-active-route lnai-navbar-child-route-menu-small"
                          }
                        >
                          {childItem.label}
                        </NavLink>
                      </MenuItem>
                    ))}
                </Menu>
              </>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CascadedMenuSmall;
