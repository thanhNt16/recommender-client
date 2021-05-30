import * as CollaborativeService from "../../services/collaborativeService";
import * as ContentService from "../../services/contentService";
import * as SequenceService from "../../services/sequenceService";

import { message } from "antd";
import { SET_DATA } from "../../constants/ActionTypes";

export function deleteDataRecord({ id, type, skip, limit }) {
    return async (dispatch) => {
        try {
            type === 'content' && await ContentService.deleteContent({ id })
            type === 'collaborative' && await CollaborativeService.deleteCollaborative({ id })
            type === 'sequence' && await SequenceService.deleteSequence({ id })
            message.success("Delete success");
            dispatch(getDataByType(type, { skip, limit }))
        } catch (error) {
            message.error("Delete error", error.message);
            
        }
    }
}

export function updateDataRecord(type, data, skip, limit) {
    return async (dispatch) => {
        try {
            type === 'content' && await ContentService.updateContent(data)
            type === 'collaborative' && await CollaborativeService.updateCollaborative(data)
            type === 'sequence' && await SequenceService.updateSequence(data)
            message.success("Update success");
            dispatch(getDataByType(type, { skip, limit }))
        } catch (error) {
            message.error("Update error", error.message);
            
        }
    }
}

export function getDataByType(type, { skip, limit }) {
  return async (dispatch) => {
    try {
      let data = []
      
      switch (type) {
          case 'content':
                data = await ContentService.getContents({ skip, limit }) 
                break;
          case 'collaborative':
                data = await CollaborativeService.getCollaborative({ skip, limit })
                break;
          case 'sequence':
                data = await SequenceService.getSequence({ skip, limit })
              break;
          default:
              return;
      }
    
      message.success("Get Data success");
      dispatch({
        type: SET_DATA,
        payload: data.data,
      });
      // onSuccess("Upload success");
    } catch (error) {
      message.error("Get Data failed");
    }
  };
}