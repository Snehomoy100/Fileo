import * as types from "../actionTypes/actionTypes";

export const createAnyItem = (payload: any) => {
  return {
    type: types.CREATE_ITEM,
    payload,
  };
};

export const deleteAnyItem = (payload: any) => {
  return {
    type: types.DELETE_ITEM,
    payload,
  };
};
