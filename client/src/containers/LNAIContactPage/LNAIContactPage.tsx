import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
// import { LNAIThemeConfig } from "../../ThemeConfig.tsx";

import {
  LNAIFooter,
  // LNAIGoogleContactForm,
  // LNAIMainForm,
  LNAINavBar,
  // LNAIThankYou,
} from "../../components";
import { removeUserDetails, removeUserToken } from "../../actions";
import { IoIosSend } from "react-icons/io";
import "./LNAIContactPage.css";
import {
  Box,
  Stack,
  // ThemeProvider,
  Typography,
  TextField,
  Button,
} from "@mui/material";
//working on this
import { Isolation_Mode } from "../../assets";

const LNAIContactPage = () => {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const userToken = store["userToken"] ? store["userToken"] : {};

  if (userToken?.access_token) {
    let decoded: any = jwt(userToken?.access_token);
    console.log(userToken);

    console.log(decoded.exp * 1000 - 1000 < Date.now());
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.clear();
      dispatch(removeUserDetails());
      dispatch(removeUserToken());
      decoded = {};
    }
  }

  return (
    <>
      <LNAINavBar />
      <Box className="lnai-contactPage-mainBox">
        <Box className="lnai-contactPage-innerBox1">
          <Stack className="customStackClass">
            <Typography component={"h1"}>
              Contact
              <span>Us</span>
            </Typography>
            <Typography component={"h1"}>How can we help you ?</Typography>
            <img
              src={Isolation_Mode} // Replace with the actual path to your image
              alt="Image of Contact us page"
            />
          </Stack>
        </Box>

        <Box className="lnai-contactPage-innerBox2 ">
          <Stack>
            <Typography component={"h4"} variant="h4">
              Send us a Message
            </Typography>
          </Stack>
          <form className="contactus-page-form">
            <Stack className="customStackClass2">
              <Stack className="customStackClass3">
                <TextField
                  size="medium"
                  fullWidth
                  placeholder="Full Name"
                  type="text"
                  className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
                />
                <TextField
                  size="medium"
                  fullWidth
                  placeholder="Last Name"
                  type="text"
                  className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
                />
              </Stack>
              <Stack className="customStackClass3">
                <TextField
                  size="medium"
                  fullWidth
                  placeholder="Email"
                  type="email"
                  className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
                />
                <TextField
                  size="medium"
                  fullWidth
                  placeholder="Phone Number"
                  type="number"
                  className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
                />
              </Stack>
              <Box>
                <TextField
                  size="medium"
                  className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
                  fullWidth
                  multiline
                  rows={9}
                  placeholder="Write Your Message"
                  type="text"
                />
              </Box>
            </Stack>
            <Stack className="customStackClass4">
              <Button
                variant="LNAIPrimaryButton"
                type="submit"
                endIcon={<IoIosSend className="larger-icon" />}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
      <LNAIFooter getStarted={false} />
    </>
  );
};

export default LNAIContactPage;
