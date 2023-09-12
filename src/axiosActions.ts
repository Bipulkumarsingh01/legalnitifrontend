import { baseUrlApi, googleUserInfoApi } from "./axios";

export const getGoogleUserInfo = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  };

  return googleUserInfoApi.get(`access_token=${accessToken}`, config);
};

export const postUserSignup = (userSignupPayload: any) => {
  return baseUrlApi.post("signup", JSON.stringify(userSignupPayload));
};

export const postUserLogin = (userLoginPayload: any) => {
  return baseUrlApi.post("login", JSON.stringify(userLoginPayload));
};
