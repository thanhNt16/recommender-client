import React, { useState } from "react";
import { Card, Radio, Tabs, Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { createPage } from "../../../redux/actions/Page";
import { useAuth } from "../../../util/use-auth";

import "../style.css";

const { Option } = Select;

export default function tab1() {
  const { authUser } = useAuth();

  const dispatch = useDispatch();
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    // console.log(values, authUser);
    dispatch(
      createPage({
        name: values.name,
        algorithm: values.algorithm,
        customerid: authUser._id,
      })
    );
  };
  return (
    <div>
      <div>Step 1: Create page</div>
      <div style={{ marginBottom: 20 }}>
        To create a scenario, you need to create a page first
      </div>
      <Form
        initialValues={{ remember: true }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="gx-signin-form gx-form-row0"
      >
        <div>Name:</div>
        <Form.Item
          rules={[{ required: true, message: "this field is required" }]}
          name="name"
        >
          <Input placeholder="Name" />
        </Form.Item>
        <div>Algorithm:</div>

        <Form.Item
          rules={[{ required: true, message: "this field is required" }]}
          name="algorithm"
        >
          <Select
            //   defaultValue="content"
            style={{ width: "100%" }}
            //   onChange={handleChange}
          >
            <Option value="content">Content-based recommendation</Option>
            <Option value="collaborative">Collaborative recomendation</Option>
            <Option value="sequence">Sequence-aware recommendation</Option>
            <Option value="popular">Populariry recommendation</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="gx-mb-0" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
