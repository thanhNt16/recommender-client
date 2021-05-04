import * as RecommendationService from "../../services/recommendationService";
import { message } from "antd";
import { SET_ITEMS } from "../../constants/ActionTypes";

export function getPopularRecommendation(data) {
  return async (dispatch) => {
    try {
      const items = await RecommendationService.popularRecommendation(data);
      message.success("Get recommendation success");
      dispatch({
        type: SET_ITEMS,
        payload: items.data.popular_items,
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get recommendation failed");
    }
  };
}
export function getContentRecommendation(data) {
  return async (dispatch) => {
    try {
      const items = await RecommendationService.contentRecommendation(data);
      message.success("Get recommendation success");
      dispatch({
        type: SET_ITEMS,
        payload: items.data,
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get recommendation failed");
    }
  };
}
export function getCollaborativeRecommendation(data) {
  return async (dispatch) => {
    try {
      const items = await RecommendationService.collaborativeRecommendation(data);

      message.success("Get recommendation success");
      dispatch({
        type: SET_ITEMS,
        payload: items.data.suggestion.map(item => item.item_id),
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get recommendation failed");
    }
  };
}

export function getSequenceRecommendation(data) {
  return async (dispatch) => {
    try {
      const items = await RecommendationService.sequenceRecommendation(data);
      message.success("Get recommendation success");
      console.log('d',items.data)

      dispatch({
        type: SET_ITEMS,
        payload: items.data.suggestion.map(item => item.id),
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get recommendation failed");
    }
  };
}