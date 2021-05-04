import {SET_PAGE_DATA, SET_ITEMS } from "../../constants/ActionTypes"

const INIT_STATE = {
  page: null,
  items: null
};

const demoPageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_DATA: {
      return {...state, page: action.payload};
    }
    case SET_ITEMS: {
      return {...state, items: action.payload};
    }
    default:
      return state;
  }
};
export default demoPageReducer;
