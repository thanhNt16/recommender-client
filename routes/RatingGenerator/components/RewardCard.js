import React from 'react';
import Widget from '../../../app/components/Widget/index';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const props = {
 name: 'file',
 action: 'https://app.recengine.games/sentiment',
 onChange(info) {
  if (info.file.status !== 'uploading') {
   console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
   console.log(info);
   message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
   message.error(`${info.file.name} file upload failed.`);
  }
 },
};

const RewardCard = () => {
 const [downloadLink, setDownloadLink] = React.useState(null);
 const customRequest = async (option) => {
  const { onSuccess, onError, file, action, onProgress } = option;
  const formData = new FormData();
  formData.append('file', file);
  axios
   .post('https://app.recengine.games/sentiment', formData, {
    onUploadProgress: (e) => {
     onProgress({ percent: (e.loaded / e.total) * 100 });
    },
   })
   .then((respones) => {
    /*......*/
    setDownloadLink(respones.data);
    onSuccess(respones.body);
   })
   .catch((err) => {
    /*......*/
    setDownloadLink(null);
    onError(err);
   });
 };
 return (
  <Widget styleName="gx-bg-dark-primary">
   <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-md-4">
    <i className={`icon icon-refer gx-fs-xlxl gx-text-white`} />
   </div>
   <div className="gx-text-center">
    <h2 className="h3 gx-mb-3 gx-text-white">Rating Generator</h2>
    <p className="gx-text-white gx-mb-3">
     Collaborative Filtering with explicit feedback is one of our main
     algorithms. The data format for the algorithm requires rating as mandatory
     field.
    </p>
    <p className="gx-text-white gx-mb-3">
     In case that you do not have this field in data and you still have some
     feedbacks of your users as plain text, we provide a Rating generator
     service to generate rating based on the review text. You can simply prepare
     a csv file with only 1 column name "reviewText" and upload it to our
     servive and let us do the job for you
    </p>
   </div>

   <div className="gx-text-center">
    <Upload
     {...props}
     method="POST"
     customRequest={customRequest}
     accept=".csv"
     maxCount={1}
    >
     <Button
      size="large"
      className="gx-btn-secondary gx-mt-md-5"
      icon={<UploadOutlined />}
     >
      Click to Upload
     </Button>
    </Upload>
    {downloadLink ? (
     <a href={`https://app.recengine.games/${downloadLink}`}>
      <Button
       onClick={() => message.info('Start downloading')}
       type="submit"
       className="gx-btn-primary gx-mt-md-5 gx-mb-1"
      >
       Download
      </Button>
     </a>
    ) : null}
   </div>
  </Widget>
 );
};

export default RewardCard;
