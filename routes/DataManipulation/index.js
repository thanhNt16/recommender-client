import React from 'react';
import { Table, Typography , Select, Button, Pagination, Modal, Form, Input } from 'antd'
import { useSelector ,useDispatch } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'

import * as Actions from '../../redux/actions/DataManipulation'
import moment from 'moment';
const { Option } = Select

const { Text } = Typography

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export default function DataManipulation() {
    const dispatch = useDispatch()
    const data = useSelector(({ dataPage }) => dataPage.data)
    const [dataSource, setDataSource] = React.useState([])
    const [columns, setColumns] = React.useState(columnsContent)
    const [pageSize, setPageSize] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(1)

    const [type, setType] = React.useState('content')
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [dataModal, setDataModal] = React.useState(null);

    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setDataModal(null)
      };


    React.useEffect(() => {
        dispatch(Actions.getDataByType(type, { skip: 0, limit: pageSize }))
        type === 'content' && setColumns(columnsContent)
        type === 'collaborative' && setColumns(columnsCollaborative)
        type === 'sequence' && setColumns(columnsSequence)

    }, [type])

    React.useEffect(() => {
        if (data && data.data)
        setDataSource(data.data)
    }, [data])

    React.useEffect(() => {
      form.setFieldsValue(dataModal)
    }, [dataModal])

    const columnsCollaborative = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: 'id',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'Item ID',
          dataIndex: 'itemId',
          key: 'itemId',
        },
        {
          title: 'User ID',
          dataIndex: 'userId',
          key: 'userId',
        },
        {
          title: 'Feedback',
          key: 'feedBack',
          dataIndex: 'feedBack',
        },
        {
          title: 'Created At',
          key: 'createdAt',
          dataIndex: 'createdAt',
          render: date => moment(date).format('DD-MM-YYYY')
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (item) => {
                return (
                    <React.Fragment>
                        <Button onClick={() =>  {
                            setIsModalVisible(true)
                            setDataModal(item)
                        }} type="primary" size="middle" icon={<EditOutlined />}> Edit </Button>
                        <Button  onClick={() => handleDelete(item._id)} danger size="middle" icon={<DeleteOutlined />}> Delete </Button>
                    </React.Fragment>
                )
            }
        },
    ];
    
    const columnsSequence = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: 'id',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'Item ID',
          dataIndex: 'itemId',
          key: 'itemId',
        },
        {
          title: 'User ID',
          dataIndex: 'userId',
          key: 'userId',
        },
        {
          title: 'Feedback',
          key: 'feedBack',
          dataIndex: 'feedBack',
        },
        {
          title: 'Created At',
          key: 'createdAt',
          dataIndex: 'createdAt',
          render: date => moment(date).format('DD-MM-YYYY')
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (item) => {
                return (
                    <React.Fragment>
                        <Button onClick={() =>  {
                            setIsModalVisible(true)
                            setDataModal(item)
                        }} type="primary" size="middle" icon={<EditOutlined />}> Edit </Button>
                        <Button  onClick={() => handleDelete(item._id)} danger size="middle" icon={<DeleteOutlined />}> Delete </Button>
                    </React.Fragment>
                )
            }
        },
    ];
    
    const columnsContent = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: 'id',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'Item ID',
          dataIndex: 'itemId',
          key: 'itemId',
        },
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
          render: (text) => <p>{text}</p>
        },
        {
          title: 'Created At',
          key: 'createdAt',
          dataIndex: 'createdAt',
          render: date => moment(date).format('DD-MM-YYYY')
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (item) => {
                return (
                    <React.Fragment>
                        <Button onClick={() =>  {
                            setIsModalVisible(true)
                            setDataModal(item)
                        }} type="primary" size="middle" icon={<EditOutlined />}> Edit </Button>
                        <Button  onClick={() => handleDelete(item._id)} danger size="middle" icon={<DeleteOutlined />}> Delete </Button>
                    </React.Fragment>
                )
            }
        },
    ];
  const handleChange = (value) => {
    setType(value)
  }

  const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        dispatch(Actions.deleteDataRecord({ id, type, skip: currentPage * pageSize, limit: pageSize }))
      })
  }

  const onFinish = (_data) => {
      dispatch(Actions.updateDataRecord(type, _data, currentPage * pageSize, pageSize ))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <React.Fragment>
        <Modal title="Edit record" visible={isModalVisible} onCancel={handleCancel} onOk={() => {
            form.validateFields()
            .then(values => onFinish(values))
            .then(() => handleCancel())
        }}>
            <Form
            {...layout}
            form={form}
            name="basic"
            initialValues={{ ...dataModal }}
            onFinishFailed={onFinishFailed}
            >
                {dataModal && Object.keys(dataModal).map(item => {
                    return (
                        <Form.Item
                            label={item}
                            name={item}
                            rules={[{ required: true, message: `Please input your ${item}!` }]}
                        >
                            <Input disabled={['_id', 'createdAt', 'updatedAt', 'customer', '__v'].includes(item)} />
                        </Form.Item>
                    )
                })}
            </Form>
        </Modal>
        <div style={{ marginBottom: 20 }}>
            <Text><b>Type:</b> </Text>
            <Select defaultValue="content" style={{ width: 240 }} onChange={handleChange}>
            {['content', 'collaborative', 'sequence'].map(item => <Option key={item} value={item}>{item}</Option>)}
        </Select>
        </div>
       
        <Table columns={columns} dataSource={dataSource} pagination={false} on />
        <Pagination total={data ? data.total : 0} defaultCurrent={currentPage} 
        onChange={(page, pageSize) => {
            setCurrentPage(page)
            dispatch(Actions.getDataByType(type, { skip: page * pageSize, limit: pageSize }))
        }}
        showSizeChanger
        onShowSizeChange={(current, size) => {
            setPageSize(size)
            dispatch(Actions.getDataByType(type, { skip: currentPage * pageSize, limit: pageSize }))
        }}
        />
    </React.Fragment>
  );
}
