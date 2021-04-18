import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Upload, message, Progress, Checkbox, Tooltip } from "antd";
import { useRouter } from "next/router";
import { InboxOutlined } from "@ant-design/icons";
import {
  uploadContent,
  uploadCollaborative,
  uploadSequence,
} from "../../../redux/actions/Upload";

const { Dragger } = Upload;

export default function DnD({ isExplicit, setIsExplicit }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const algorithmName = router.query.id;

  const uploadImage = async (options) => {
    algorithmName === "content" && dispatch(uploadContent(options));
    algorithmName === "collaborative" &&
      dispatch(uploadCollaborative(options, isExplicit));
    algorithmName === "sequence" && dispatch(uploadSequence(options));
  };

  return (
    <React.Fragment>
      <Dragger maxCount={1} customRequest={uploadImage}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      {algorithmName === "collaborative" && (
        <Tooltip title="Check this if you have rating score">
          <Checkbox onChange={(e) => setIsExplicit(e.target.checked)}>
            Is Explicit
          </Checkbox>
        </Tooltip>
      )}
    </React.Fragment>
  );
}
