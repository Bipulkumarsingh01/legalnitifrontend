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
  return baseUrlApi.post("auth/signup", JSON.stringify(userSignupPayload));
};

export const postUserLogin = (userLoginPayload: any) => {
  return baseUrlApi.post("auth/login", JSON.stringify(userLoginPayload));
};

export const postGenerateNames = (companyType: any, companyDesc: any) => {
  const nameGenPayload = {
    company_type: companyType,
    desc: companyDesc,
  };

  return baseUrlApi.post(
    "namegen/namegenerator",
    JSON.stringify(nameGenPayload)
  );
};

export const getPincodeDetails = (pincode: any) => {
  return baseUrlApi.get(`documentation/pincode/${pincode}`);
};
