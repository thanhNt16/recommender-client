import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { PlusCircleOutlined } from '@ant-design/icons'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { Card, Radio, Tabs, List, Row, Col, Button, Select, Typography } from "antd";
import Tab1 from './components/tab1'
import Tab2 from './components/tab2'
import Tab3 from './components/tab3'
import Widget from "../../app/components/Widget";

import { getScenario, deleteScenario, getScenarioById, getSampleScenario } from "../../redux/actions/Scenario";
import { algorithms } from './configuration'

import "./style.css";

const { Option } = Select;
const { Title, Text  } = Typography

function Scenario() {
  const router = useRouter()
  const scenarios = useSelector(({ scenario }) => scenario.scenarios);
  const sample = useSelector(({ scenario }) => scenario.sample);

  useEffect(() => {
    dispatch(getScenario());
    dispatch(getSampleScenario())
  }, []);

  const dispatch = useDispatch();

  function handleDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      dispatch(deleteScenario(id))
      
    })
  }

  return (
    <div>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>List of sample scenarios: </Text>
      <Row>
      {sample.map(item => <Col key={item._id} xs={24} md={8}> 
        <Widget style={{ height: 400 }} styleName="gx-ch-capitalize gx-card-sm-px"  title={"Scenario"}>
          <div className="gx-text-center gx-pt-sm-3">
            {/* <img className="gx-slider-img gx-mb-3" src={image} alt='birds'/> */}

            <h2 className="gx-mb-3 gx-mb-sm-4">{item.name}</h2>
            
          </div>
          <div style={{height: 200}}>
            <ul>
              {item.page.map(page =>
                <li key={page._id}>
                <Text>{`Name: ${page.name}`}</Text> <br />
                <Text>{`Algorithm: ${algorithms.find(algo => algo.id === page.algorithm).title}`}</Text>
                </li>
              )}
            </ul>
            </div>
        </Widget>
      </Col>)}
      </Row>  
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>List of my scenarios: </Text>
      <Row>
      {scenarios.map(item => <Col key={item._id} xs={24} md={8}> 
        <Widget style={{ height: 400 }} styleName="gx-ch-capitalize gx-card-sm-px"  title={"Scenario"}>
          <div className="gx-text-center gx-pt-sm-3">
            {/* <img className="gx-slider-img gx-mb-3" src={image} alt='birds'/> */}

            <h2 className="gx-mb-3 gx-mb-sm-4">{item.name}</h2>
            
          </div>
          <div style={{height: 200}}>
            <ul>
              {item.page.map(page =>
                <li key={page._id}>
                <Text>{`Name: ${page.name}`}</Text> <br />
                <Text>{`Algorithm: ${algorithms.find(algo => algo.id === page.algorithm).title}`}</Text>
                </li>
              )}
            </ul>
            </div>
            <div className="gx-text-center gx-pt-sm-3">
            <button onClick={() => {
              router.push(`/create-scenario?id=${item._id}`)
            }} className="gx-btn gx-btn-primary gx-text-white gx-mb-1">Update Scenario</button>
            <button onClick={() => {
              // console.log("ok")
              handleDelete(item._id)
              // dispatch(deleteScenario(item._id))

            }} className="gx-btn gx-btn-primary gx-text-white gx-mb-1">Delete Scenario</button>
            </div>
        </Widget>
      </Col>)}  
      <Col xs={24} md={8}>
        <Widget style={{ height: 400 }} styleName="gx-ch-capitalize gx-card-sm-px"  title={"Add new Scenario"}>
        <div className="gx-text-center gx-pt-sm-3">
        <PlusCircleOutlined onClick={() => router.push('/create-scenario?id=new')} style={{ fontSize: 100}} />
        </div>
        </Widget>
      </Col>
      </Row>
      
    </div>
  )
}
 
export const CreateScenario = () => {
  const TabPane = Tabs.TabPane;
  const router = useRouter()
  const dispatch = useDispatch()

  const id = router.query.id

  useEffect(() => {
    if (id !== 'new') {
      dispatch(getScenarioById(id))
    }
  }, [id])
  
  return (
    <div
      style={{ height: "auto", borderRadius: "25px", padding: "4px 15px 4px", background: '#fff', padding: '40px 20px' }}
    >
      <div>Create a scenario</div>
      <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: '100%' }}>
        <TabPane tab="Introduction" key="1">
          Scenario helps users define a specific use case for their business
          rule.
          <br />
          Users can define which page to run a specific recommendation service
          <br />
          Let's create your first scenario
          <br />
          <i>Or you can see our existed scenarios heres</i>
        </TabPane>
        <TabPane tab="Create a page" key="2">
          <Tab1 />
        </TabPane>
        <TabPane tab="Add page to scenario" key="3">
          <Tab2 />
        </TabPane>
        <TabPane tab="View your scenario" key="4">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Scenario;
