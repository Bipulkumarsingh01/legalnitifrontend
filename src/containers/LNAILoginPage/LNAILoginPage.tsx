import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import jwt from "jwt-decode";
import { Button, Grid, TextField } from "@mui/material";

import {
  removeUserDetails,
  removeUserLoginCred,
  saveUserDetails,
  saveUserLoginCred,
  saveUserToken,
} from "../../actions";
import { postUserLogin } from "../../axiosActions";

import "./LNAILoginPage.css";

const initialLoginFormValues = {
  email: "",
  phNum: undefined,
};

const LNAILoginPage = () => {
  const dispatch = useDispatch();
  const userCredState: any = useSelector((state) => state);
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );

  const checkRequiredFields = () => {
    if (loginFormValues.phNum !== null && loginFormValues.email.length > 0) {
      return false;
    }
    return true;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const userLoginResponse = await postUserLogin(loginFormValues);
    console.log(userLoginResponse.data);
    if (userLoginResponse.status === 200) {
      localStorage.setItem(
        "x-users-tokens",
        JSON.stringify(userLoginResponse.data["x-users-tokens"])
      );
      dispatch(saveUserToken(userLoginResponse.data["x-users-tokens"]));
      dispatch(saveUserDetails(loginFormValues));
    }
  };

  const userToken = userCredState["userToken"]
    ? userCredState["userLoginCred"]
    : {};
  if (userToken?.access_token) {
    const decoded: any = jwt(userToken?.access_token);
    console.log(decoded.exp * 1000);
    console.log(Date.now());
    console.log(decoded.exp * 1000 < Date.now());
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.clear();
      dispatch(removeUserDetails());
      dispatch(removeUserLoginCred());
    }
  }

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
          <h1>Login</h1>
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={loginFormValues.email}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="phNum-input"
            name="phNum"
            label="Phone Number"
            type="number"
            value={loginFormValues.phNum}
            onChange={handleInputChange}
            className="lnai-contact-form-component-phone-number-input-field"
            required
          />
        </Grid>
        <Grid item>
          <Button
            disabled={checkRequiredFields()}
            variant="contained"
            color="primary"
            type="submit"
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LNAILoginPage;
