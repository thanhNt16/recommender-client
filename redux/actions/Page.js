import * as PageService from "../../services/pageService";
import { message } from "antd";
import { SET_PAGE, SET_PAGE_DATA } from "../../constants/ActionTypes";

export function getPageById(data) {
  return async (dispatch) => {
    try {
      const page = await PageService.getPageById(data, {});
      message.success("Get page success");
      dispatch({
        type: SET_PAGE_DATA,
        payload: page.data,
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get page failed");
    }
  };
}

export function createPage(data) {
  return async (dispatch) => {
    try {
      await PageService.createPage(data, {});
      message.success("Create page success");
      // onSuccess("Upload success");
      dispatch(getPage());
    } catch (error) {
      message.error("Create page failed");
      onError(error.message);
    }
  };
}
export function getPage(data) {
  return async (dispatch) => {
    try {
      const pages = await PageService.getPage(data, {});
      console.log(pages);
      message.success("Get page success");
      // onSuccess("Upload success");
      dispatch({
        type: SET_PAGE,
        payload: pages.data,
      });
    } catch (error) {
      message.error("Get page failed");
      onError(error.message);
    }
  };
}
