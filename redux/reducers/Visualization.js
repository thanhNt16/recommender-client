import {SET_SEQUENCES, SET_COLLABORATIVE } from "../../constants/ActionTypes"

const INIT_STATE = {
  sequences: [],
  collaborative: []
};

const visualizationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SEQUENCES: {
      return {...state, sequences: action.payload};
    }
    case SET_COLLABORATIVE: {
        return {...state, collaborative: action.payload};
      }
    default:
      return state;
  }
};
export default visualizationReducer;
