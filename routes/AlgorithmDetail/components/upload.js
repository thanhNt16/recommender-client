import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Upload, message, Progress } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { uploadContent } from '../../../redux/actions/Upload'

const { Dragger } = Upload;

export default function DnD() {
  const dispatch = useDispatch()

  const uploadImage = async (options) => {
    dispatch(uploadContent(options))
    
  };

  return (
    <React.Fragment>
      <Dragger
        maxCount={1}
        customRequest={uploadImage}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </React.Fragment>
  );
}
