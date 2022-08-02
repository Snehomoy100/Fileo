import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let persistedState;
if (localStorage.getItem("reduxState")) {
  const tempState: any = localStorage.getItem("reduxState");
  persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(tempState)
    : {};
}
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
