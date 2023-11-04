import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";

import {
  LNAIDashboardView,
  LNAILandingView,
  LNAINavBar,
} from "../../components";

const LNAILandingPage = () => {
  const store: any = useSelector((state) => state);
  const [scrolled, setScrolled] = useState("rgba(0,0,0,0.4)");
  const [decodedToken, setDecodedToken] = useState({});

  const userToken = store["userToken"] ? store["userToken"] : {};

  const accessToken = userToken?.["access_token"];
  const refreshToken = userToken?.["refresh_token"];

  // Decode the token using your secret key
  useEffect(() => {
    if (accessToken) {
      const base64Url = accessToken.split(".")[1]; // Extract the base64 part of the token
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Fix base64 URL format
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2); // Decode base64 and convert to JSON
          })
          .join("")
      );

      // const decodedToken = JSON.parse(jsonPayload);
      setDecodedToken(JSON.parse(jsonPayload)); // Parse the JSON data

      // console.log(
      //   decodedToken["email"],
      //   decodedToken["phone_number"],
      //   decodedToken["role"]
      // );
    }
  }, [accessToken]);

  return (
    <div>
      <LNAINavBar />
      {accessToken ? (
        <LNAIDashboardView decodedToken={decodedToken} />
      ) : (
        <LNAILandingView />
      )}
    </div>
  );
};

export default LNAILandingPage;
