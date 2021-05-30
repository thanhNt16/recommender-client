import {SET_DATA, SET_TYPE } from "../../constants/ActionTypes"

const INIT_STATE = {
  type: 'content',
  data: []
};

const dataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {...state, data: action.payload};
    }
    case SET_TYPE: {
        return {...state, type: action.payload};
    }
    default:
      return state;
  }
};
export default dataReducer;
