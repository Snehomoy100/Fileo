import { combineReducers } from "redux";
import currentFolderReducer from "./currentFolderReducer";
import fileFolderReducer from "./fileFolderReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  fileFolder: fileFolderReducer,
  currentFolder: currentFolderReducer,
  search: searchReducer,
});

export default rootReducer;
