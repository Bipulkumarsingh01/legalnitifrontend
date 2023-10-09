import { useEffect, useState } from "react";
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
import { LNAINavBar } from "../../components";
import { useNavigate } from "react-router-dom";

const initialLoginFormValues = {
  email: "",
  phone_number: -1,
};

const LNAILoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCredState: any = useSelector((state) => state);
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );

  const checkRequiredFields = () => {
    if (
      loginFormValues.phone_number !== null &&
      loginFormValues.email.length > 0
    ) {
      return false;
    }
    return true;
  };

  const loginInputFieldHandler = (e: any) => {
    const { name, value } = e.target;
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  const userLoginHandler = async (event: any) => {
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
      navigate("/");
    }
  };

  const userToken = userCredState["userToken"]
    ? userCredState["userToken"]
    : {};

  useEffect(() => {
    if (userToken?.access_token) navigate("/");
  }, []);

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
    <>
      <LNAINavBar />
      <form onSubmit={userLoginHandler}>
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
              onChange={loginInputFieldHandler}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="phone_number-input"
              name="phone_number"
              label="Phone Number"
              type="number"
              value={
                loginFormValues.phone_number !== -1
                  ? loginFormValues.phone_number
                  : ""
              }
              onChange={loginInputFieldHandler}
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
    </>
  );
};

export default LNAILoginPage;
