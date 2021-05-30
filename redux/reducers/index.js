import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import Upload from "./Upload";
import Scenario from "./Scenario";
import Visualization from "./Visualization";
import DemoPage from "./DemoPage";
import DataPage from "./DataPage";


const reducers = combineReducers({
  settings: Settings,
  common: Common,
  upload: Upload,
  scenario: Scenario,
  visualization: Visualization,
  demoPage: DemoPage,
  dataPage: DataPage
});

export default reducers;
