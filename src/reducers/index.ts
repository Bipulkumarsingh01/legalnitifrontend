import { combineReducers } from "redux";

import { saveAndRemoveUserDetails } from "./userLoginCredAndDetailsReducer";
import { userTokenManegement } from "./userTokenManagement";

const allReducers = combineReducers({
  userDetails: saveAndRemoveUserDetails,
  userToken: userTokenManegement,
});
export default allReducers;
