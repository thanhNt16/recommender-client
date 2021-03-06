import React from "react";
import { Col, Row } from "antd";
import AlgorithmsCard from "./components/AlgorithmsCard";
import Building from "./components/Building";
import { algorithms } from "./configuration";

const SamplePage = () => {
  return (
    <div>
      <Row>
        {algorithms.map((algo) => {
          return (
            <Col id={algo.id} xs={24} md={8}>
              <AlgorithmsCard
                id={algo.id}
                title={algo.title}
                description={algo.description}
                image={algo.image}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SamplePage;
