import { createStore } from "redux";
import nameReducer from "./names";
const store = createStore(nameReducer);
export default store;
