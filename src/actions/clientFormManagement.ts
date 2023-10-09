import { ADD_FORM_OBJECT, UPDATE_FORM_OBJECT } from "../actionTypes";

const addFormObjectStoreHandler = (
  formObjectName: string,
  formObjectData: any
) => {
  return {
    type: ADD_FORM_OBJECT,
    formObjectName: formObjectName,
    formObjectData: formObjectData,
  };
};

const updateFormObjectStoreHandler = (
  formObjectName: string,
  formObjectDataItemName: any,
  formObjectDataItemValue: any
) => {
  return {
    type: UPDATE_FORM_OBJECT,
    formObjectName: formObjectName,
    formObjectDataItemName: formObjectDataItemName,
    formObjectDataItemValue: formObjectDataItemValue,
  };
};

export { addFormObjectStoreHandler, updateFormObjectStoreHandler };
