import {
  REMOVE_USER_DETAILS,
  SAVE_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "../actionTypes";

const token: any = localStorage.getItem("x-users-tokens")
  ? localStorage.getItem("x-users-tokens")
  : localStorage.getItem("g-users-tokens");
const userDetails: any = localStorage.getItem("userDetails");
const parsedUserDetails = JSON.parse(userDetails);

const initialUserDetails: any = parsedUserDetails?.email
  ? parsedUserDetails
  : {};

const saveAndRemoveUserDetails = (state = initialUserDetails, action: any) => {
  switch (action.type) {
    case SAVE_USER_DETAILS:
      return action.userDetails;

    case REMOVE_USER_DETAILS:
      return {};

    case UPDATE_USER_DETAILS:
      const updatedUserDetails = { ...state, ...action.userDetails };
      return updatedUserDetails;

    default:
      return state;
  }
};

export { saveAndRemoveUserDetails };
