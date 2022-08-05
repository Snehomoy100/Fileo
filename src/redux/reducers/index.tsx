import { combineReducers } from "redux";
import currentFolderReducer from "./currentFolderReducer";
import fileFolderReducer from "./fileFolderReducer";
import searchResultReducer from "./searchResultReducer";

const rootReducer = combineReducers({
  fileFolder: fileFolderReducer,
  currentFolder: currentFolderReducer,
  search: searchResultReducer,
});

export default rootReducer;
