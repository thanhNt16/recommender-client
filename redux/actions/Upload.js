import * as UploadService from "../../services/uploadService";
import { message } from "antd";
import { NEXT_STEP, PREVIOUS_STEP} from "../../constants/ActionTypes";

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
export function uploadContent(options) {
  return async (dispatch) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        // const percent = Math.floor((event.loaded / event.total) * 100);
        // setProgress(percent);
        // if (percent === 100) {
        //   setTimeout(() => setProgress(0), 1000);
        // }
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
      message.error("Upload success");
      onError(error.message);
    }
  };
}
