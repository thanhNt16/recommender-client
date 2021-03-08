import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import Upload from "./Upload";


const reducers = combineReducers({
  settings: Settings,
  common: Common,
  upload: Upload
});

export default reducers;
