import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import { LNAINavBar } from "../../components";

import { removeUserDetails, removeUserToken } from "../../actions";

import "./LNAIContactPage.css";

const LNAIContactPage = () => {
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
      <LNAINavBar />
      Contact Us Page
    </div>
  );
};

export default LNAIContactPage;
