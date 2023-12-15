import {
  REMOVE_USER_LOGIN_CRED,
  SAVE_USER_LOGIN_CRED,
  SAVE_USER_DETAILS,
  REMOVE_USER_DETAILS,
  UPDATE_USER_DETAILS,
  UPDATE_USER_LOGIN_CRED,
  SAVE_USER_TOKEN,
  UPDATE_USER_TOKEN,
  REMOVE_USER_TOKEN,
} from "../actionTypes";

const saveUserLoginCred = (userLoginCredData: any) => {
  return {
    type: SAVE_USER_LOGIN_CRED,
    userLoginCredData: userLoginCredData,
  };
};

const updateUserLoginCred = (attribute: any, value: any) => {
  return {
    type: UPDATE_USER_LOGIN_CRED,
    attribute: attribute,
    value: value,
  };
};

const removeUserLoginCred = () => {
  return {
    type: REMOVE_USER_LOGIN_CRED,
  };
};

const saveUserDetails = (userDetails: any) => {
  return {
    type: SAVE_USER_DETAILS,
    userDetails: userDetails,
  };
};

const removeUserDetails = () => {
  return {
    type: REMOVE_USER_DETAILS,
  };
};

const updateUserDetails = (userDetails: any) => {
  return {
    type: UPDATE_USER_DETAILS,
    userDetails: userDetails,
  };
};

const saveUserToken = (userLoginCredData: any) => {
  return {
    type: SAVE_USER_TOKEN,
    userLoginCredData: userLoginCredData,
  };
};

const updateUserToken = (attribute: any, value: any) => {
  return {
    type: UPDATE_USER_TOKEN,
    attribute: attribute,
    value: value,
  };
};

const removeUserToken = () => {
  return {
    type: REMOVE_USER_TOKEN,
  };
};

export {
  saveUserLoginCred,
  updateUserLoginCred,
  removeUserLoginCred,
  saveUserDetails,
  removeUserDetails,
  updateUserDetails,
  saveUserToken,
  updateUserToken,
  removeUserToken,
};
