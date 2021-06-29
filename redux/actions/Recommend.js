import * as RecommendationService from '../../services/recommendationService';
import * as ContentService from '../../services/contentService';
import * as CollaborativeService from '../../services/collaborativeService';
import * as SequenceService from '../../services/sequenceService';

import { message } from 'antd';
import { SET_DEMO_DATA, SET_ITEMS } from '../../constants/ActionTypes';

export function getPopularRecommendation(data) {
 return async (dispatch) => {
  try {
   const items = await RecommendationService.popularRecommendation(data);
   // message.success("Get recommendation success");
   dispatch({
    type: SET_ITEMS,
    payload: items.data.popular_items,
   });
   // onSuccess("Upload success");
  } catch (error) {
   message.error('Get recommendation failed');
  }
 };
}
export function getContentRecommendation(data) {
 return async (dispatch) => {
  try {
   const items = await RecommendationService.contentRecommendation(data);
   // message.success("Get recommendation success");
   dispatch({
    type: SET_ITEMS,
    payload: items.data,
   });
   // onSuccess("Upload success");
  } catch (error) {
   message.error('Get recommendation failed');
  }
 };
}
export function getCollaborativeRecommendation(data) {
 return async (dispatch) => {
  try {
   const items = await RecommendationService.collaborativeRecommendation(data);

   // message.success("Get recommendation success");
   dispatch({
    type: SET_ITEMS,
    payload: items.data,
   });
   // onSuccess("Upload success");
  } catch (error) {
   message.error('Get recommendation failed');
  }
 };
}

export function getSequenceRecommendation(data) {
 return async (dispatch) => {
  try {
   const items = await RecommendationService.sequenceRecommendation(data);
   // message.success("Get recommendation success");

   dispatch({
    type: SET_ITEMS,
    payload: items.data,
   });
   // onSuccess("Upload success");
  } catch (error) {
   message.error('Get recommendation failed');
  }
 };
}
export function getDataByType(type, { skip, limit }) {
 return async (dispatch) => {
  try {
   let data = [];

   switch (type) {
    case 'content':
     data = await ContentService.getContents({ skip, limit });
     dispatch({
      type: SET_DEMO_DATA,
      payload: data.data.data,
     });
     break;
    case 'collaborative':
     data = await CollaborativeService.getCollaborative({ skip, limit });
     dispatch({
      type: SET_DEMO_DATA,
      payload: data.data.data,
     });
     break;
    case 'sequence':
     data = await SequenceService.getSequence({ skip, limit });
     dispatch({
      type: SET_DEMO_DATA,
      payload: data.data.data,
     });
     break;
    case 'popular':
     data = await SequenceService.getSequence({ skip, limit });
     console.log('data', data.data.data);
     dispatch({
      type: SET_DEMO_DATA,
      payload: data.data.data,
     });

    default:
     return;
   }
   // message.success("Get Data success");

   // onSuccess("Upload success");
  } catch (error) {
   message.error('Get Data failed');
  }
 };
}
