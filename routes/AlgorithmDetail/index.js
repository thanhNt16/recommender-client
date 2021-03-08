import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Steps, Divider, Typography, Button, Table } from "antd";
import { useRouter } from "next/router";
import { Stomp } from "@stomp/stompjs";
import CardBox from "../../app/components/CardBox";
import Widget from "../../app/components/Widget";
import Upload from "./components/upload";
import { algorithims } from "./config";
import { nextStep, previousStep } from "../../redux/actions/Upload";
import { useRabbit } from '../../hooks'

const { Step } = Steps;
const { Paragraph } = Typography;

export default function AlgorithmDetail() {
  const router = useRouter();
  const client = useRabbit()
  const dispatch = useDispatch();
  const [algo, setAlgo] = useState(null);
  const current = useSelector(({ upload }) => upload.currentStep);
  useEffect(() => {
    setAlgo(algorithims.filter((item) => item.id === router.query.id)[0]);
  }, [router.query]);
  useEffect(() => {
    if (client) {
      client.debug = null
      const subscription = client.subscribe('/queue/test', (message) => {
        console.log("msg", message.body)
        message.ack()
      })
    }
    
  }, [client]);

  function renderDataPreparation(content) {
    return (
      <Widget styleName="gx-card-profile">
        <div className="ant-card-head">
          <span className="ant-card-head-title gx-mb-2">Data Preparation</span>
          <p className="gx-text-grey gx-fs-sm gx-mb-0">
            Prepare your data in our format requirement
          </p>
        </div>
        <Paragraph>{content.intro}</Paragraph>
        <Paragraph>
          {content.instruction.parent}
          <br />
          <ul>
            {content.instruction.children.map((child) => (
              <li key={child}>{child}</li>
            ))}
          </ul>
        </Paragraph>
        <Table
          className="gx-table-responsive"
          columns={content.dataColumns}
          dataSource={content.data}
        />

        <Button onClick={() => dispatch(nextStep())} type="primary">
          Next Step
        </Button>
      </Widget>
    );
  }

  return (
    <React.Fragment>
      <Steps current={current}>
        <Step
          title="Data Preparation"
          description="Provide data for the algorithm"
        />
        <Step title="Upload Data" description="Upload your data as file" />
        <Step
          icon={current === 2 ? <LoadingOutlined /> : null}
          title="Training Model"
          description="Please stand by. We are training the model..."
        />
        <Step title="Done" description="your ready API here" />
      </Steps>
      <Divider />
      {current === 0 && algo && renderDataPreparation(algo)}
      {current === 1 && (
        <Widget styleName="gx-card">
          <Upload />
          <Divider />
          <Button onClick={() => dispatch(previousStep())} type="primary">
            Previous Step
          </Button>
          <Button onClick={() => dispatch(nextStep())} type="primary">
            Next Step
          </Button>
        </Widget>
      )}
    </React.Fragment>
  );
}
