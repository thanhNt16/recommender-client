import * as ScenarioService from "../../services/scenarioService";
import { message } from "antd";
import {SET_SCENARIO, SET_SCENARIOS, SET_SAMPLE_SCENARIO } from "../../constants/ActionTypes"

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
            type: SET_SCENARIOS,
            payload: scenarios.data
        })
      } catch (error) {
        message.error("Get Scenario failed");
        // onError(error.message);
      }
    };
  }

  export function getSampleScenario(data) {
    return async (dispatch) => {
      try {
        const scenarios = await ScenarioService.getScenarioSample();
        message.success("Get sample Scenario success");
        // onSuccess("Upload success");
        dispatch({
            type: SET_SAMPLE_SCENARIO,
            payload: scenarios.data
        })
      } catch (error) {
        message.error("Get Scenario failed");
        // onError(error.message);
      }
    };
  }

  export function deleteScenario(id) {
    return async (dispatch) => {
      try {
        const scenarios = await ScenarioService.deleteScenario({ id });
        message.success("Delete Scenario success");
        // onSuccess("Upload success");
        dispatch(getScenario())
      } catch (error) {
        message.error("Delete Scenario failed");
        // onError(error.message);
      }
    };
  }
  export function getScenarioById(id) {
    return async (dispatch) => {
      try {
        const scenarios = await ScenarioService.getScenarioById({ id });
        message.success("Get Scenario success");
        // onSuccess("Upload success");
        dispatch({
            type: SET_SCENARIO,
            payload: scenarios.data
        })
      } catch (error) {
        message.error("Get Scenario failed");
        // onError(error.message);
      }
    };
  }
  export function updateScenarioById(data) {
    return async (dispatch) => {
      try {
        const scenarios = await ScenarioService.updateScenario(data);
        message.success("Update Scenario success");
        // onSuccess("Upload success");
        dispatch(getScenario())

      } catch (error) {
        message.error("Update Scenario failed");
        // onError(error.message);
      }
    };
  }