import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import {
  LNAIGoogleContactForm,
  LNAIMainForm,
  LNAIThankYou,
} from "../../components";

import { removeUserDetails, removeUserToken } from "../../actions";

const LNAIAccountSignUp = () => {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const userToken = store["userToken"] ? store["userToken"] : {};

  if (userToken?.access_token) {
    let decoded: any = jwt(userToken?.access_token);
    console.log(userToken);

    console.log(decoded.exp * 1000 - 1000 < Date.now());
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.clear();
      dispatch(removeUserDetails());
      dispatch(removeUserToken());
      decoded = {};
    }
  }
  return (
    <div>
      {Object.keys(userToken)?.length <= 0 ? (
        <LNAIMainForm />
      ) : !userToken?.google ? (
        <LNAIThankYou />
      ) : (
        <LNAIGoogleContactForm />
      )}
    </div>
  );
};

export default LNAIAccountSignUp;
