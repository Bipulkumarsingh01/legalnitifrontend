import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconButton, Stack } from "@mui/material";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";

import { decrementCount, incrementCount } from "../../actions";
import { getSomeData } from "../../axiosActions";
import { counterStoreObjType } from "../../utils";
import addAndSubCountReducer from "../../reducers/addAndSubCountReducer";

import "./LNAILandingPage.css";

const LNAILandingPage = () => {
  const state = useSelector((state: counterStoreObjType) => state);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  const incrementCountHandler = () => {
    // setCount(count + 1);
    dispatch(incrementCount());
  };
  const decrementCountHandler = () => {
    // setCount(count + 1);
    dispatch(decrementCount());
  };

  // useEffect(() => {
  //   getSomeData();
  // }, []);

  console.log(import.meta.env.VITE_SOME_URL);

  return (
    <div className="lnai-landing-page-parent-container">
      {/* Count: {count} */}
      Count: {state.count}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        className="lnai-landing-page-add-sub-button-parent-container"
      >
        <IconButton
          aria-label="add"
          size="small"
          onClick={incrementCountHandler}
        >
          <RiAddCircleFill />
        </IconButton>
        <IconButton
          aria-label="sub"
          size="small"
          onClick={decrementCountHandler}
        >
          <AiFillMinusCircle />
        </IconButton>
      </Stack>
    </div>
  );
};

export default LNAILandingPage;
