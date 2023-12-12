import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import { Box, Button, Menu, MenuItem } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { CascadedMenuLargePropType } from "..";

const CascadedMenuLarge = ({
  handleCloseNavMenu,
  navbarRoutes,
  openChildRouteLarge,
  navbarChildRoutesLargeMenuOpenHandler,
  childRoutesLargeMenuState,
  navbarChildRoutesLargeMenuCloseHandler,
  menuItems,
}: CascadedMenuLargePropType) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        opacity: menuItems === "none" ? 0 : 1,
      }}
    >
      {navbarRoutes.map((pageItem, index) => (
        <Fragment key={index}>
          {!pageItem.hasChildren ? (
            <NavLink
              key={index}
              to={pageItem.to}
              className={(isActive) =>
                isActive
                  ? "lnai-navbar-active-route"
                  : "lnai-navbar-non-active-route"
              }
            >
              <Button
                key={pageItem.key}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {pageItem.label}
              </Button>
            </NavLink>
          ) : (
            <>
              <Button
                id="basic-button"
                aria-controls={openChildRouteLarge ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openChildRouteLarge ? "true" : undefined}
                style={{ color: "white" }}
                onClick={navbarChildRoutesLargeMenuOpenHandler}
                className="lnai-navbar-cascaded-route"
                // onMouseOver={navbarChildRoutesLargeMenuOpenHandler}
                // onMouseOut={navbarChildRoutesLargeMenuCloseHandler}
              >
                {pageItem.label}
                <MdOutlineKeyboardArrowDown className="lnai-navbar-down-arrow-icon" />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={childRoutesLargeMenuState}
                open={
                  childRoutesLargeMenuState?.textContent == pageItem.label
                    ? true
                    : false
                }
                onClose={navbarChildRoutesLargeMenuCloseHandler}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="lnai-navbar-routes-children-menu-parent-container"
              >
                {pageItem?.children &&
                  pageItem?.children.map((childItem, index) => (
                    <MenuItem
                      key={index}
                      onClick={navbarChildRoutesLargeMenuCloseHandler}
                    >
                      <NavLink
                        to={childItem.to}
                        className={(isActive) =>
                          isActive
                            ? "lnai-navbar-active-route"
                            : "lnai-navbar-non-active-route"
                        }
                      >
                        {childItem.label}
                      </NavLink>
                    </MenuItem>
                  ))}
              </Menu>
            </>
          )}
        </Fragment>
      ))}
    </Box>
  );
};

export default CascadedMenuLarge;
