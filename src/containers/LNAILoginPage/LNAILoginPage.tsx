import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import jwt from "jwt-decode";
import { LNAIThemeConfig } from "../../ThemeConfig";

import {
  removeUserDetails,
  removeUserLoginCred,
  saveUserDetails,
  saveUserToken,
} from "../../actions";
import { postUserLogin } from "../../axiosActions";

import { useNavigate } from "react-router-dom";
import {
  LNAICircleScatter,
  LNAILoginPageBg1,
  LNAILoginPageBgBlack,
  LNAILoginPageBgBlack2,
  LNAILogoTp,
} from "../../assets";
import "./LNAILoginPage.css";

import { BsArrowLeftRight } from "react-icons/bs";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";

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

  const getRandomNumber = (min: any, max: any) => {
    return Math.random() * (max - min) + min;
  };
  const circles: any = [];

  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      const size = getRandomNumber(10, 30);
      const x = getRandomNumber(0, 100);
      const y = getRandomNumber(0, 100);

      const circleStyle: any = {
        position: "absolute",
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#242424",
        borderRadius: "50%",
      };

      circles.push(<div key={i} style={circleStyle}></div>);
    }
  }, []);

  console.log(circles);

  return (
    <ThemeProvider theme={LNAIThemeConfig}>
      <div className="lnai-login-page-main-container">
        {/* <LNAINavBar /> */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: -10,
            backgroundColor: "black",
          }}
        >
          {/* {circles} */}
          <img src={LNAICircleScatter} alt="" height={750} />
        </div>

        <div
          style={{
            position: "absolute",
            width: "90%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "1fr",
              gridColumnGap: "0px",
              gridRowGap: "0px",
              boxShadow: "0px -1.3385px 16.062px rgba(61, 5, 94, 0.63)",
              borderRadius: "1.275rem",
              margin: "2.5rem",
              background: "black",
            }}
          >
            <div style={{ position: "relative", textAlign: "center" }}>
              <div>
                <img
                  alt={"login"}
                  src={LNAILoginPageBg1}
                  className="lnai-login-page-background-1"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                }}
              >
                <h2 style={{ color: "white" }}>Don't have an account ?</h2>
                <Button
                  variant="LNAISecondaryButton"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "0 1.275rem 1.275rem 0",
              }}
            >
              <div
                style={{
                  float: "right",
                  width: "5rem",
                  height: "3rem",
                  background:
                    "linear-gradient(90deg, #3d055e 23.07%, #8d04c1 81%)",
                  borderRadius: "0px 1.275rem",
                  textAlign: "center",
                }}
              >
                <img
                  alt="logo"
                  src={LNAILogoTp}
                  className="lnai-login-page-lnai-logo-tp"
                />
              </div>
              <form onSubmit={userLoginHandler}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  spacing={2}
                >
                  <Grid item>
                    <h1>
                      <span className="lnai-primary-heading">Welcome</span> Back
                    </h1>
                  </Grid>

                  <Grid item>
                    <TextField
                      variant="outlined"
                      color="primary"
                      id="email-input"
                      name="email"
                      placeholder="Email"
                      type="text"
                      value={loginFormValues.email}
                      className="lnai-primary-input-field"
                      onChange={loginInputFieldHandler}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
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
                      placeholder="Phone Number"
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
                          <InputAdornment position="start">
                            <MdPhoneAndroid />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <ThemeProvider theme={LNAIThemeConfig}>
                      <Button variant="LNAIPrimaryButton" type="submit">
                        Login
                      </Button>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>

        <div className="lnai-loign-page-direction-arrow-container">
          <BsArrowLeftRight
            style={{ height: "3rem", with: "3rem", fontSize: "1.5rem" }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LNAILoginPage;
