import {
  REMOVE_USER_TOKEN,
  SAVE_USER_TOKEN,
  UPDATE_USER_TOKEN,
} from "../actionTypes";

const token: any = localStorage.getItem("x-users-tokens")
  ? localStorage.getItem("x-users-tokens")
  : localStorage.getItem("g-users-tokens");

const initialUserLoginCred: any = token ? JSON.parse(token) : {};

const userTokenManegement: any = (
  state = initialUserLoginCred,
  action: any
) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return action.userLoginCredData;

    case UPDATE_USER_TOKEN:
      const updatedUserCreds = { ...state, [action.attribute]: [action.value] };
      return updatedUserCreds;

    case REMOVE_USER_TOKEN:
      return {};

    default:
      return state;
  }
};

export { userTokenManegement };
