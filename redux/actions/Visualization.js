import * as SequenceService from "../../services/sequenceService";
import { message } from "antd";
import { SET_SEQUENCES } from "../../constants/ActionTypes";
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
      onError(error.message);
    }
  };
}
