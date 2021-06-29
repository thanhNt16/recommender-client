import {SET_PAGE_DATA, SET_ITEMS, SET_DEMO_DATA } from "../../constants/ActionTypes"

const INIT_STATE = {
  page: null,
  items: null,
  demoData: []
};

const demoPageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_DATA: {
      return {...state, page: action.payload};
    }
    case SET_ITEMS: {
      return {...state, items: action.payload};
    }
    case SET_DEMO_DATA: {
      return {...state, demoData: action.payload};
    }
    default:
      return state;
  }
};
export default demoPageReducer;
