import {SET_PAGE, SET_SCENARIO, SET_SCENARIOS, SET_SAMPLE_SCENARIO } from "../../constants/ActionTypes"

const INIT_STATE = {
  listPages: [],
  scenarios: [],
  scenario: null,
  sample: []
};

const scenarioReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return {...state, listPages: action.payload};
    }
    case SET_SCENARIOS: {
        return {...state, scenarios: action.payload};
      }
    case SET_SCENARIO: {
        return {...state, scenario: action.payload};
      }
    case SET_SAMPLE_SCENARIO: {
        return {...state, sample: action.payload};
      }
    default:
      return state;
  }
};
export default scenarioReducer;
