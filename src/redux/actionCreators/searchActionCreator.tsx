import { useSelector } from "react-redux";
import * as types from "../actionTypes/actionTypes";

export const setQuery = (payload: any) => {
  return {
    type: types.SET_QUERY,
    payload
  };
};
