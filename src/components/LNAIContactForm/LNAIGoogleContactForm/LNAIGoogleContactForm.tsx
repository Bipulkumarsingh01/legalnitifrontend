import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, TextField } from "@mui/material";

import {
  saveUserDetails,
  saveUserLoginCred,
  saveUserToken,
  updateUserDetails,
  updateUserLoginCred,
} from "../../../actions";
import { getGoogleUserInfo, postUserSignup } from "../../../axiosActions";

const initialFormValues = {
  phone_number: undefined,
  details: "",
  // state: {
  //   key: undefined,
  //   value: "",
  //   label: "",
  // },
  // city: {
  //   key: undefined,
  //   value: "",
  //   label: "",
  // },
};

const LNAIGoogleContactForm = () => {
  const userTokenState: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);
  const usersAccessTokens: any = localStorage.getItem("g-users-tokens");
  const parsedUsersAccessTokens = JSON.parse(usersAccessTokens);

  const userDetails = userTokenState["userDetails"];

  useEffect(() => {
    getGoogleUserInfo(parsedUsersAccessTokens?.access_token)
      .then((response) => dispatch(saveUserDetails(response.data)))
      .catch((error) => error);
  }, [usersAccessTokens]);

  const checkRequiredFields = () => {
    if (formValues.phone_number !== null) {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(updateUserDetails(formValues));
    const userLoginCreds: any = localStorage.getItem("g-users-tokens");
    const parsedUserLoginCreds = JSON.parse(userLoginCreds);
    localStorage.setItem(
      "g-users-tokens",
      JSON.stringify({ ...parsedUserLoginCreds, google: false })
    );
    dispatch(saveUserToken({ ...parsedUserLoginCreds, google: false }));
    postUserSignup(userDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <TextField
            id="phone_number-input"
            name="phone_number"
            label="Phone Number"
            type="number"
            value={formValues.phone_number}
            onChange={handleInputChange}
            className="lnai-contact-form-component-phone-number-input-field"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-textarea"
            label="Details"
            name="details"
            placeholder="Purpose for contacting ..."
            rows={4}
            value={formValues.details}
            onChange={handleInputChange}
            multiline
          />
        </Grid>
        <Grid item>
          <Button
            disabled={checkRequiredFields()}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LNAIGoogleContactForm;
