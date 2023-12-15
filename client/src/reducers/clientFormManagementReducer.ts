import { ADD_FORM_OBJECT, UPDATE_FORM_OBJECT } from "../actionTypes";

const clientFormManagementReducer: any = (state: any = {}, action: any) => {
  switch (action.type) {
    case ADD_FORM_OBJECT:
      const formData = { ...state };
      formData[action.formObjectName] = action.formObjectData;
      return formData;

    case UPDATE_FORM_OBJECT:
      const formObject = state[action.formObjectName];
      formObject[action.formObjectDataItemName] =
        action.formObjectDataItemValue;

      state[action.formObjectName] = {
        ...state[action.formObjectName],
        formObject,
      };
      return state;

    default:
      return state;
  }
};

export { clientFormManagementReducer };
