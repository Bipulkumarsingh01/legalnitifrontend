import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";

import { LNAILoginGoole } from "../..";
import { saveUserLoginCred, saveUserToken } from "../../../actions";
import { postUserSignup } from "../../../axiosActions";

import { LNAIThemeConfig } from "../../../ThemeConfig";

import "./LNAIMainForm.css";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";

const initialFormValues = {
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  details: "",
  phone_number: -1,
};

const LNAIMainForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);

  const checkRequiredFields = () => {
    if (
      formValues.phone_number !== -1 &&
      formValues.first_name.length > 0 &&
      formValues.last_name.length > 0 &&
      formValues.email.length > 0
    ) {
      return false;
    }
    return true;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const signupResponse = await postUserSignup(formValues);
    if (signupResponse.status === 201) {
      localStorage.setItem(
        "x-users-tokens",
        JSON.stringify(signupResponse.data["x-users-tokens"])
      );
      dispatch(saveUserToken(signupResponse.data["x-users-tokens"]));
    }
  };

  return (
    <div className="lnai-account-signup-main-form-container">
      <ThemeProvider theme={LNAIThemeConfig}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            spacing={2}
          >
            <Grid item className="lnai-signup-main-form-heading-container">
              <h1>
                Welcome to{" "}
                <span className="lnai-primary-heading">Legalniti</span>
              </h1>
              <p>AI based Simplicity</p>
            </Grid>
            <Grid item className="lnai-account-signup-main-form-name-container">
              <TextField
                id="name-input"
                name="first_name"
                // label="First Name"
                placeholder="First Name"
                type="text"
                value={formValues.first_name}
                onChange={handleInputChange}
                required
                className="lnai-account-signup-main-form-first-name-input lnai-primary-input-field"
              />
              <TextField
                id="name-input"
                name="middle_name"
                placeholder="Middle Name"
                type="text"
                value={formValues.middle_name}
                onChange={handleInputChange}
                className="lnai-account-signup-main-form-middle-name-input lnai-primary-input-field"
              />
              <TextField
                id="name-input"
                name="last_name"
                placeholder="Last Name"
                type="text"
                value={formValues.last_name}
                onChange={handleInputChange}
                required
                className="lnai-account-signup-main-form-last-name-input lnai-primary-input-field"
              />
            </Grid>
            <Grid
              item
              className="lnai-account-signup-main-form-email-phone-container"
            >
              <TextField
                id="email-input"
                name="email"
                placeholder="Email"
                type="text"
                value={formValues.email}
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
                onChange={handleInputChange}
                required
                className="lnai-account-signup-main-form-email-input lnai-primary-input-field"
              />
              <TextField
                id="phone_number-input"
                name="phone_number"
                placeholder="Phone Number"
                type="number"
                value={
                  formValues.phone_number !== -1 ? formValues.phone_number : ""
                }
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
                onChange={handleInputChange}
                className="lnai-account-signup-main-form-phone-number-input-field lnai-primary-input-field"
                required
              />
            </Grid>
            <Grid
              item
              className="lnai-contact-form-component-details-contact-container"
            >
              <TextField
                id="details-textarea"
                // label="Details"
                name="details"
                placeholder="Purpose for contacting ..."
                rows={4}
                value={formValues.details}
                onChange={handleInputChange}
                multiline
                className="lnai-contact-form-component-details-contact-input-field lnai-primary-input-field"
              />
            </Grid>
            <Grid item>
              <Button
                // disabled={checkRequiredFields()}
                variant="LNAIPrimaryButton"
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <p>OR</p>
            </Grid>
            <Grid item>
              <LNAILoginGoole />
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default LNAIMainForm;
