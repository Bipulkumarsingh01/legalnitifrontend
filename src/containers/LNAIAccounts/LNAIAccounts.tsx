import jwt from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  removeUserDetails,
  removeUserLoginCred,
  saveUserDetails,
  saveUserToken,
} from "../../actions";
import { postUserLogin } from "../../axiosActions";

import "./LNAIAccounts.css";
import { LNAIAccountSignIn, LNAIAccountSignUp } from "../../components";
import { Button, IconButton, ThemeProvider } from "@mui/material";
import {
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  LoginOverlayLogo,
  SignupOverlayLogo,
} from "../../assets";
import { LNAIThemeConfig } from "../../ThemeConfig";

const initialLoginFormValues = {
  email: "",
  phone_number: -1,
};

const LNAIAccounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCredState: any = useSelector((state) => state);
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [accountAuthType, setAccountAuthType] = useState("");
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get("source");
    if (source === "signup" || source === "signin") setAccountAuthType(source);
    else {
      setAccountAuthType("signin");
      setSearchParams({ source: "signin" });
    }
  }, []);

  // const checkRequiredFields = () => {
  //   if (
  //     loginFormValues.phone_number !== null &&
  //     loginFormValues.email.length > 0
  //   ) {
  //     return false;
  //   }
  //   return true;
  // };

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
    <div className="lnai-accounts-main-container">
      <div
        className={`lnai-accounts-overlay-main-container ${accountAuthType}`}
      >
        <div className="lnai-accounts-overlay-main-sign-up-container">
          <img
            src={LoginOverlayLogo}
            alt="LoginOverlayLogo"
            height={250}
            width={300}
          />
          <h1 className="lnai-accounts-overlay-signup-heading">New Here ?</h1>
          <p className="lnai-accounts-overlay-signup-description">
            Sign up and discover great range of services at LegalNiti
          </p>
          <ThemeProvider theme={LNAIThemeConfig}>
            <div className="lnai-accounts-overlay-signup-button">
              <Button
                variant="LNAIBasicLight"
                onClick={() => {
                  setAccountAuthType("signup");
                  setSearchParams({ source: "signup" });
                }}
              >
                Create Account
              </Button>
            </div>
          </ThemeProvider>
        </div>

        <div className="sign-in">
          <img
            src={SignupOverlayLogo}
            alt="SignupOverlayLogo"
            height={300}
            width={325}
            className="lnai-accounts-overlay-signin-logo"
          />
          <div className="lnai-accounts-overlay-signin-container">
            <h1 className="lnai-accounts-overlay-signin-heading">Welcome !</h1>
            <p className="lnai-accounts-overlay-signin-description">
              Sign up and discover great range of services at LegalNiti
            </p>
            <ThemeProvider theme={LNAIThemeConfig}>
              <div className="lnai-accounts-overlay-signin-button">
                <Button
                  variant="LNAIBasicLight"
                  className="button sub"
                  onClick={() => {
                    setAccountAuthType("signin");
                    setSearchParams({ source: "signin" });
                  }}
                >
                  Sign In
                </Button>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>

      <div className={`login ${accountAuthType}`}>
        <div className="lnai-accounts-login-container">
          <h1 className="lnai-accounts-signin-heading">
            Sign in to <span className="lnai-primary-heading">LegalNiti</span>
          </h1>
          <p className="lnai-accounts-signin-description">
            Login using social networks
          </p>
          <div className="lnai-accounts-other-login-container">
            <IconButton>
              <img
                src={FacebookLogo}
                alt="FacebookLogo"
                height={30}
                width={30}
              />
            </IconButton>
            <IconButton>
              <img src={GoogleLogo} alt="GoogleLogo" height={30} width={30} />
            </IconButton>
            <IconButton>
              <img
                src={LinkedinLogo}
                alt="LinkedinLogo"
                height={30}
                width={30}
              />
            </IconButton>
          </div>
          <p className="lnai-accounts-or-text">
            <span>OR</span>
          </p>

          <LNAIAccountSignIn
            userLoginHandler={userLoginHandler}
            loginFormValues={loginFormValues}
            loginInputFieldHandler={loginInputFieldHandler}
          />
        </div>
      </div>

      <div className={`register ${accountAuthType}`}>
        <LNAIAccountSignUp />
      </div>
    </div>
  );
};

export default LNAIAccounts;
