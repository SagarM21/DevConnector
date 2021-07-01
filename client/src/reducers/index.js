import { combineReducers } from "redux"; //rootReducer
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({ alert, auth, profile });
