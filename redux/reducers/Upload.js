import {NEXT_STEP, PREVIOUS_STEP, RESET_STEP } from "../../constants/ActionTypes"

const INIT_STATE = {
  currentStep: 0
};

const uploadReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case NEXT_STEP: {
      return {...state, currentStep: state.currentStep + 1};
    }
    case PREVIOUS_STEP: {
      return {...state, currentStep: state.currentStep - 1};
    }
    case RESET_STEP: {
      return {...state, currentStep: 0};
    }
    default:
      return state;
  }
};
export default uploadReducer;
