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

export const postFormData = (formType: string, formData: any) => {
  const localStorageTokens = localStorage.getItem("x-users-tokens");

  if (localStorageTokens) {
    const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
    const accessToken = parsedLocalStorageTokens["access_token"];
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    };
    const payload = {
      form_data: formData,
    };
    return baseUrlApi.post(`forms/${formType}`, payload, config);
  }
};

export const getFormData = (formType: string) => {
  const localStorageTokens = localStorage.getItem("x-users-tokens");

  if (localStorageTokens) {
    const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
    const accessToken = parsedLocalStorageTokens["access_token"];
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    };
    return baseUrlApi.get(`forms/${formType}`, config);
  }
};

export const getRunScript = () => {
  const localStorageTokens = localStorage.getItem("x-users-tokens");

  if (localStorageTokens) {
    const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
    const accessToken = parsedLocalStorageTokens["access_token"];
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    };
    return baseUrlApi.get(`forms/script`, config);
  }
};

export const getSubscribedServices = (usersAccessToken: string) => {
  if (usersAccessToken) {
    const config = {
      headers: {
        Authorization: `Bearer ${usersAccessToken}`,
        Accept: "application/json",
      },
    };
    return baseUrlApi.get("services/subscribed", config);
  }
};
