import * as types from "../actionTypes/actionTypes";

export const changeFolder = (payload: any) => {
  return {
    type: types.CHANGE_FOLDER,
    payload,
  };
};
