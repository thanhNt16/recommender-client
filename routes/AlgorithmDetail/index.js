import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Steps, Divider, Typography, Button, Table } from "antd";
import { useRouter } from 'next/router'

import CardBox from "../../app/components/CardBox";
import Widget from "../../app/components/Widget";
import Upload from "./components/upload";
import { algorithims } from './config'

const { Step } = Steps;
const { Paragraph } = Typography;

const columns = [
  {
    title: "itemId",
    dataIndex: "itemId",
    key: "itemId",
    render: (text) => <span className="gx-link">{text}</span>,
  },
  {
    title: "content",
    dataIndex: "content",
    key: "content",
  },
];
const data = [
  {
    key: "1",
    itemId: "1",
    content: "Product 1",
  },
  {
    key: "2",
    itemId: "2",
    content: "Product 2",
  },
];

export default function AlgorithmDetail() {
  const router = useRouter()
const [algo, setAlgo] = useState(null)
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setAlgo(algorithims.filter(item => item.id === router.query.id)[0])
  }, [router.query])

  function renderDataPreparation(content) {
    return (
        <Widget styleName="gx-card-profile">
          <div className="ant-card-head">
            <span className="ant-card-head-title gx-mb-2">
              Data Preparation
            </span>
            <p className="gx-text-grey gx-fs-sm gx-mb-0">
              Prepare your data in our format requirement
            </p>
          </div>
          <Paragraph>
            {content.intro}
          </Paragraph>
          <Paragraph>
            {content.instruction.parent}
            <br />
            <ul>
            {content.instruction.children.map(child => <li>{child}</li>)}
            </ul>
          </Paragraph>
          <Table
            className="gx-table-responsive"
            columns={content.dataColumns}
            dataSource={content.data}
          />

          <Button onClick={() => setCurrent(current + 1)} type="primary">
            Next Step
          </Button>
        </Widget>
    )
  }

  return (
    <React.Fragment>
      <Steps current={current}>
        <Step
          title="Data Preparation"
          description="Provide data for the algorithm"
        />
        <Step title="Upload Data" description="Upload your data as file" />
        <Step icon={current === 2 ? <LoadingOutlined/> : null } title="Training Model" description="Please stand by. We are training the model..." />
        <Step title="Done" description="your ready API here" />
      </Steps>
      <Divider />
      {current === 0 && algo && renderDataPreparation(algo)
      }
      {current === 1 && (
        <Widget styleName="gx-card">
          <Upload />
          <Divider />
          <Button onClick={() => setCurrent(current - 1)} type="primary">
            Previous Step
          </Button>
          <Button onClick={() => setCurrent(current + 1)} type="primary">
            Next Step
          </Button>
        </Widget>
      )}
    </React.Fragment>
  );
}
