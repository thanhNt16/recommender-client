import * as SequenceService from "../../services/sequenceService";
import * as CollaborativeService from "../../services/collaborativeService";

import { message } from "antd";
import { SET_COLLABORATIVE, SET_SEQUENCES } from "../../constants/ActionTypes";
export function getSequence() {
  return async (dispatch) => {
    try {
      const sequence = await SequenceService.getSequence();
      message.success("Get sequence success");
      // onSuccess("Upload success");
      dispatch({
        type: SET_SEQUENCES,
        payload: sequence.data,
      });
    } catch (error) {
      message.error("Get sequence failed");
    }
  };
}

export function getCollaborative() {
  return async (dispatch) => {
    try {
      const collaborative = await CollaborativeService.getCollaborative();
      message.success("Get collaborative success");
      // onSuccess("Upload success");
      dispatch({
        type: SET_COLLABORATIVE,
        payload: collaborative.data,
      });
    } catch (error) {
      message.error("Get collaborative failed");
    }
  };
}
