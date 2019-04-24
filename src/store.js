import { createStore, compose } from "redux";
import rootReducer from "./reducers/root.reducer";

let devTool = null;

if (process.env.NODE_ENV === "development") {
  devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null;
}
const composeEnhancers = devTool || compose;

export default createStore(rootReducer(), composeEnhancers());
