import { ADD_COUNT, SUB_COUNT } from "../actionTypes";

const initialState = {
  count: 0,
};

const addAndSubCountReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case SUB_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default addAndSubCountReducer;
