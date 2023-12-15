import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";

import { LNAIThemeConfig } from "../../ThemeConfig";

import "./LNAIAccountSignIn.css";

const LNAIAccountSignIn = ({
  userLoginHandler,
  loginFormValues,
  loginInputFieldHandler,
}: any) => {
  return (
    <ThemeProvider theme={LNAIThemeConfig}>
      <div className="lnai-account-signin-main-form-container">
        <form onSubmit={userLoginHandler}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            spacing={2}
          >
            <Grid item>
              <TextField
                variant="outlined"
                color="primary"
                id="email-input"
                name="email"
                placeholder="Email"
                type="text"
                value={loginFormValues.email}
                className="lnai-contact-form-component-email-input-field lnai-primary-input-field"
                onChange={loginInputFieldHandler}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      className="lnai-contact-form-component-email-input-logo"
                      position="start"
                    >
                      <MdOutlineEmail />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                color="primary"
                id="phone_number-input"
                name="phone_number"
                placeholder="Phone number"
                type="number"
                value={
                  loginFormValues.phone_number !== -1
                    ? loginFormValues.phone_number
                    : ""
                }
                onChange={loginInputFieldHandler}
                className="lnai-contact-form-component-phone-number-input-field lnai-primary-input-field"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      className="lnai-contact-form-component-phone-number-input-logo"
                      position="start"
                    >
                      <MdPhoneAndroid />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="LNAIPrimaryButton" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default LNAIAccountSignIn;
