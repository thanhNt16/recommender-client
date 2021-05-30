import * as UploadService from "../../services/uploadService";
import { message } from "antd";
import { NEXT_STEP, PREVIOUS_STEP, RESET_STEP } from "../../constants/ActionTypes";

export function nextStep() {
    return {
        type: NEXT_STEP
    }
}

export function previousStep() {
    return {
        type: PREVIOUS_STEP
    }
}

export function resetStep() {
  return {
      type: RESET_STEP
  }
}
export function uploadContent(options) {
  return async (dispatch) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("content", file);
    try {
      await UploadService.uploadContent(fmData, config);
      message.success("Upload success");
      onSuccess("Upload success");
      dispatch(nextStep())
    } catch (error) {
      message.error(error.message);
      onError(error.message);
    }
  };
}

export function uploadCollaborative(options, explicit) {
  return async (dispatch) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("collaborative", file);
    try {
      await UploadService.uploadCollaborative(fmData, explicit ,config);
      message.success("Upload success");
      onSuccess("Upload success");
      dispatch(nextStep())
    } catch (error) {
      message.error(error.message);
      onError(error.message);
    }
  };
}
export function uploadSequence(options) {
  return async (dispatch) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("sequence", file);
    try {
      await UploadService.uploadSequence(fmData ,config);
      message.success("Upload success");
      onSuccess("Upload success");
      dispatch(nextStep())
    } catch (error) {
      message.error(error.message);
      onError(error.message);
    }
  };
}
