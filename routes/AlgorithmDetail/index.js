import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import _ from 'lodash'
import { useSelector, useDispatch } from "react-redux";
import { Steps, Divider, Typography, Button, Table, List } from "antd";
import { useRouter } from "next/router";
import { Stomp } from "@stomp/stompjs";
import CardBox from "../../app/components/CardBox";
import Widget from "../../app/components/Widget";
import Upload from "./components/upload";
import { useAuth } from "../../util/use-auth";
import { algorithims } from "./config";
import { nextStep, previousStep, resetStep } from "../../redux/actions/Upload";
import { useRabbit } from "../../hooks";

const { Step } = Steps;
const { Paragraph, Text } = Typography;

export default function AlgorithmDetail() {
  const router = useRouter();
  const client = useRabbit();
  const dispatch = useDispatch();
  const [algo, setAlgo] = useState(null);
  const [isExplicit, setIsExplicit] = useState(false);
  const { authUser } = useAuth();

  const current = useSelector(({ upload }) => upload.currentStep);
  useEffect(() => {
    console.log(algorithims.filter((item) => item.id === router.query.id)[0]);
    setAlgo(algorithims.filter((item) => item.id === router.query.id)[0]);
  }, [router.query]);
  useEffect(() => {
    if ((client && algo && authUser)) {
      client.debug = null;
      const subscription = client.subscribe(
        "/queue/status_queue",
        (message) => {
          const body = message.body.toString()
          console.log("msg" , message.headers, message);
          console.log("body" , body, authUser._id);


          if (body.includes(authUser._id)) {
            dispatch(nextStep())
            const id = _.get(message.headers, 'message-id', undefined)
            client.ack(id, subscription.id )
          } else {
            client.nack(id, subscription.id )
          }
        }
      );
    }
    return () => {
      if (client && window.ws && window.ws.readyState === 1) {
        dispatch(resetStep())
        client.unsubscribe("/queue/status_queue");
        client.disconnect(() => console.log("disconnected"));
      }
    };
  }, [client, algo, authUser]);

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
  function renderUpload(algo) {
    return (
      <Widget styleName="gx-card">
        <Upload isExplicit={isExplicit} setIsExplicit={setIsExplicit} />
        <Divider />
        <Button onClick={() => dispatch(previousStep())} type="primary">
          Previous Step
        </Button>
        <Button onClick={() => dispatch(nextStep())} type="primary">
          Next Step
        </Button>
      </Widget>
    );
  }
  function renderResult(algo) {
    return (
      <Widget styleName="gx-card">
        <List
          header={
            <div>
              <Text>API: </Text>
              <Divider />
              <Text>
                Use this API to get list of recommendation product for your user
              </Text>
              <br />
              <Text>{algo.guide}</Text>
            </div>
          }
          bordered
        >
          <List.Item>
            {algo.id === "content" &&
              `https://app.recengine.games/content?customer_id=${authUser._id}${algo.params}`}
            {algo.id === "collaborative" &&
              `https://app.recengine.games/collaborative_${
                isExplicit ? "explicit" : "implicit"
              }?customer_id=${authUser._id}${algo.params}`}
            {algo.id === "sequence" &&
              `https://app.recengine.games/sequence?customer_id=${authUser._id}${algo.params}`}
          </List.Item>
        </List>
        <Divider />
        <Button onClick={() => dispatch(resetStep())} type="primary">
          Reset Step
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
      {current === 1 && algo && renderUpload(algo)}
      {current === 3 && algo && renderResult(algo)}
    </React.Fragment>
  );
}
