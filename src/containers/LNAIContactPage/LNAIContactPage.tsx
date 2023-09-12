import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import {
  LNAIGoogleContactForm,
  LNAIMainForm,
  LNAINavBar,
  LNAIThankYou,
} from "../../components";

import { Slide, SlideProps } from "@mui/material";
import { removeUserDetails, removeUserToken } from "../../actions";

import "./LNAIContactPage.css";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const LNAIContactPage = () => {
  const userCredState: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const userToken = userCredState["userToken"]
    ? userCredState["userToken"]
    : {};

  if (userToken?.access_token) {
    let decoded: any = jwt(userToken?.access_token);
    console.log(userToken);

    console.log(decoded.exp * 1000 < Date.now());
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

export default LNAIContactPage;
