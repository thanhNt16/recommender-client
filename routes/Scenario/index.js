import React, { useState } from "react";
import { Card, Radio, Tabs, Form, Input, Button, Select } from "antd";
import Tab1 from './components/tab1'
import Tab2 from './components/tab2'
import Tab3 from './components/tab3'

import "./style.css";

const { Option } = Select;


const Slide = () => {
  const TabPane = Tabs.TabPane;
  
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

export default Slide;
