import {SET_PAGE, SET_SCENARIO } from "../../constants/ActionTypes"

const INIT_STATE = {
  listPages: [],
  scenarios: []
};

const scenarioReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return {...state, listPages: action.payload};
    }
    case SET_SCENARIO: {
        return {...state, scenarios: action.payload};
      }
    default:
      return state;
  }
};
export default scenarioReducer;
