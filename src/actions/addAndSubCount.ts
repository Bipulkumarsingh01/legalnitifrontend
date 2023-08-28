import { ADD_COUNT, SUB_COUNT } from "../actionTypes";

const incrementCount = () => {
  return {
    type: ADD_COUNT,
  };
};

const decrementCount = () => {
  return {
    type: SUB_COUNT,
  };
};

export { incrementCount, decrementCount };
