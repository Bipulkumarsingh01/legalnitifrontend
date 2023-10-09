import { combineReducers } from "redux";

import { saveAndRemoveUserDetails } from "./userLoginCredAndDetailsReducer";
import { userTokenManegement } from "./userTokenManagement";
import { clientFormManagementReducer } from "./clientFormManagementReducer";

const allReducers = combineReducers({
  userDetails: saveAndRemoveUserDetails,
  userToken: userTokenManegement,
  formData: clientFormManagementReducer,
});

export default allReducers;
