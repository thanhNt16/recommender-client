import * as ScenarioService from "../../services/scenarioService";
import { message } from "antd";
import {SET_SCENARIO } from "../../constants/ActionTypes"

export function createScenario(data) {
    return async (dispatch) => {
      try {
        await ScenarioService.createScenario(data, {});
        message.success("Create Scenario success");
        // onSuccess("Upload success");
        // dispatch(nextStep())
      } catch (error) {
        message.error("Create Scenario failed", error);
        // onError(error.message);
      }
    };
  }

  export function getScenario(data) {
    return async (dispatch) => {
      try {
        const scenarios = await ScenarioService.getScenario();
        message.success("Get Scenario success");
        // onSuccess("Upload success");
        dispatch({
            type: SET_SCENARIO,
            payload: scenarios.data
        })
      } catch (error) {
        message.error("Get Scenario failed");
        onError(error.message);
      }
    };
  }