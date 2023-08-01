import React from 'react'
import {Table,Button} from "antd"
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'

export const Users = (props) =>{
  let myStyle ={
    minHeight:"70vh",
    margin:"50px auto"
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Que1',
      dataIndex: 'que1',
      key: 'que1',
    },
    {
      title: 'Que2',
      dataIndex: 'que2',
      key: 'que2',
    },
    {
      title: 'Que3',
      dataIndex: 'que3',
      key: 'que3',
    },
    {
      title: 'Action',
      key: 'key',
      dataIndex: 'key',
      render: (text, record,c) => (
        <>
        <Button onClick={()=>{props.onDelete(record.id)}} type="danger" size="small" >
        <DeleteOutlined  className='text-danger'/>
       </Button>
       <Button onClick={()=> console.log(record)} type="danger" size="small" >
       <EditOutlined className='text-primary' />
       </Button>
        </>
       
      
      ),
    },
  ];
  
  return (
    <div className='container my-5' style={myStyle}>
      <h3 className=' my-3' >User-List</h3>
     { props.surveyRes.length === 0? "No Survey Response to Display":
    <> <Table dataSource={props.surveyRes} columns={columns} /></>
  }
    </div>
  )
}
