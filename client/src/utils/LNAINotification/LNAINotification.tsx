import React, { useRef, useState } from "react";

import { Snackbar } from "@mui/base/Snackbar";
import { SnackbarCloseReason } from "@mui/base/useSnackbar";
import { styled } from "@mui/system";
import { FcCheckmark } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { Transition } from "react-transition-group";

const LNAINotification = ({
  notificationState,
  setNotificationState,
  notificationTitle,
  notificationMessage,
  autoHideDuration,
}: any) => {
  const [exited, setExited] = useState(true);
  const nodeRef = useRef(null);

  const handleClose = (_: any) => {
    // if (reason === "clickaway") {
    //   return;
    // }

    setNotificationState(false);
  };

  const handleOnEnter = () => {
    setExited(false);
  };

  const handleOnExited = () => {
    setExited(true);
  };

  return (
    <React.Fragment>
      <StyledSnackbar
        autoHideDuration={autoHideDuration}
        open={notificationState}
        onClose={handleClose}
        exited={exited}
      >
        <Transition
          timeout={{ enter: 400, exit: 400 }}
          in={notificationState}
          appear
          unmountOnExit
          onEnter={handleOnEnter}
          onExited={handleOnExited}
          nodeRef={nodeRef}
        >
          {(status) => (
            <SnackbarContent
              style={{
                transform: positioningStyles[status],
                transition: "transform 300ms ease",
              }}
              ref={nodeRef}
            >
              <FcCheckmark style={{ height: "1.5rem", with: "1.5rem" }} />
              <div className="snackbar-message">
                <p className="snackbar-title">{notificationTitle}</p>
                <p className="snackbar-description">{notificationMessage}</p>
              </div>
              <IoClose
                style={{ height: "1.5rem", with: "1.5rem" }}
                onClick={handleClose}
                // className="snackbar-close-icon"
              />
            </SnackbarContent>
          )}
        </Transition>
      </StyledSnackbar>
    </React.Fragment>
  );
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledSnackbar = styled(Snackbar)`
  position: fixed;
  z-index: 5500;
  display: flex;
  top: 5rem;
  right: 10px;
  max-width: 560px;
  // min-width: 300px;
`;

const SnackbarContent = styled("div")(
  ({ theme }) => `
  display: flex;
  gap: 8px;
  overflow: hidden;
  background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: ${
    theme.palette.mode === "dark"
      ? `0 2px 16px rgba(0,0,0, 0.5)`
      : `0 2px 16px ${grey[200]}`
  };
  padding: 0.75rem;
  color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 500;
  text-align: start;
  position: relative;

  & .snackbar-message {
    flex: 1 1 0%;
    max-width: 100%;
  }

  & .snackbar-title {
    margin: 0;
    line-height: 1.5rem;
    margin-right: 0.5rem;
  }

  & .snackbar-description {
    margin: 0;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
  }

  & .snackbar-close-icon {
    cursor: pointer;
    flex-shrink: 0;
    padding: 2px;
    border-radius: 4px;

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
  }
  `
);

const positioningStyles = {
  entering: "translateX(0)",
  entered: "translateX(0)",
  exiting: "translateX(500px)",
  exited: "translateX(500px)",
  unmounted: "translateX(500px)",
};

export default LNAINotification;
