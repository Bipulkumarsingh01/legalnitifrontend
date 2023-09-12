import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

import {
  removeUserDetails,
  removeUserLoginCred,
  removeUserToken,
  saveUserDetails,
  saveUserLoginCred,
  saveUserToken,
} from "../../actions";
import { getGoogleUserInfo } from "../../axiosActions";

import "./LNAILoginGoogle.css";

const LNAILoginGoole = () => {
  const userCredState: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      localStorage.setItem(
        "g-users-tokens",
        JSON.stringify({
          access_token: codeResponse.access_token,
          google: true,
        })
      );
      dispatch(
        saveUserToken({
          access_token: codeResponse.access_token,
          google: true,
        })
      );
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const userToken = userCredState["userToken"];
  const userDetails = userCredState["userDetails"];

  // useEffect(() => {
  //   console.log(userToken.access_token);
  //   getGoogleUserInfo(userToken.access_token)
  //     .then((response) => dispatch(saveUserDetails(response.data)))
  //     .catch((error) => error);
  // }, [userToken]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUserToken());
    dispatch(removeUserDetails());
    googleLogout();
  };

  return (
    <div>
      {Object.keys(userDetails).length > 0 ? (
        <div>
          <Button variant="contained" onClick={logOut}>
            Log out
          </Button>
        </div>
      ) : (
        <Button variant="contained" onClick={() => login()}>
          Sign in with Google 🚀
        </Button>
      )}
    </div>
  );
};

export default LNAILoginGoole;
