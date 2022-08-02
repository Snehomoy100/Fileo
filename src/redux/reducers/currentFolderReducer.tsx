import * as types from "../actionTypes/actionTypes";
const initilState = "root";
const currentFolderReducer = (state = initilState, action: any) => {
  switch (action.type) {
    case types.CHANGE_FOLDER:
      // localStorage.setItem("currentFolder", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default currentFolderReducer;
