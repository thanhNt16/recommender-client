import React, { useState, useEffect } from "react";
import { Card, Radio, Tabs, Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { createScenario, updateScenarioById } from "../../../redux/actions/Scenario";
import { getPage } from "../../../redux/actions/Page";

import { useAuth } from "../../../util/use-auth";

import "../style.css";

const { Option } = Select;

export default function tab2() {
  const { authUser } = useAuth();
  const router = useRouter()

  const [form] = Form.useForm();
  const id = router.query.id

  const listPages = useSelector(({ scenario }) => scenario.listPages)
  const [pages, setPages] = useState([])
  useEffect(() => {
    dispatch(getPage())
  }, [])

  const scenario = useSelector(({scenario}) => scenario.scenario)

  useEffect(() => {
    if (scenario) {
      form.setFieldsValue({
        name: scenario.name,
        page: scenario.page
      })
    }
  }, [scenario])

  useEffect(() => {
    if (listPages.length !== 0) {
      setPages(listPages.map(item => {
        return {
          id: item._id,
          label: item.name
        }
      }))
    }
  }, [listPages])

  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    id === 'new' ? dispatch(
      createScenario({
        name: values.name,
        page: values.page.join(','),
        customerid: authUser._id,
      })
    ) : dispatch(
      updateScenarioById({
        id: scenario._id,
        name: values.name,
        page: values.page,
        customerid: authUser._id,
      })
    );
  };
  return (
    <div>
      <div>Step 2: Add page to scenario</div>
      <div style={{ marginBottom: 20 }}>
        You can add your existed page to this scenario
      </div>
      <Form
        form={form}
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
        <div>Pages:</div>

        <Form.Item
          rules={[{ required: true, message: "this field is required" }]}
          name="page"
        >
          <Select
            //   defaultValue="content"
            style={{ width: "100%" }}
            mode="multiple"
            allowClear
            placeholder="Select multiple pages to add here"
            //   onChange={handleChange}
          >
            {pages.map(item => <Option value={item.id}>{item.label}</Option>)}
            {/* <Option value="content">Content-based recommendation</Option>
            <Option value="collaborative">Collaborative recomendation</Option>
            <Option value="sequence">Sequence-aware recommendation</Option>
            <Option value="popular">Populariry recommendation</Option> */}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="gx-mb-0" htmlType="submit">
            {id === 'new' ? 'Add' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
