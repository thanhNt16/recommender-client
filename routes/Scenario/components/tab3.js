import React, { useState, useEffect } from "react";
import { Row, Col, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createScenario } from "../../../redux/actions/Scenario";
import { getScenario } from "../../../redux/actions/Scenario";
import PageCard from "./pageCard";
import { useAuth } from "../../../util/use-auth";

import "../style.css";

const { Option } = Select;

export default function tab3() {
  const { authUser } = useAuth();
  const scenarios = useSelector(({ scenario }) => scenario.scenarios);
  // const [pages, setPages] = useState([])
  useEffect(() => {
    dispatch(getScenario());
  }, []);

  const dispatch = useDispatch();
  return (
    <div>
      <div>Step 3: View scenario</div>
      {scenarios.map((item) => {
        return (
          <div>
            <div>Name: {item.name}</div>
            <div>page:</div>
            <Row>
              {item.page.map((p) => {
                return (
                  <Col xs={24} md={6}>
                    <PageCard id={p._id} key={p._id} name={p.name} algorithm={p.algorithm} />
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
}
