import {  Layout, Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { FileAddOutlined } from "@ant-design/icons"
import { BoldOutlined } from "@ant-design/icons"
import Create from './Create'
// import UseLocalStorage from './UseLocalStorageState'
import BlogsList from './BlogsList';
import Detail from './Detail';
import RecentlyAdded from './RecentlyAdded';


const { Header} = Layout;
const Navbar = () => {
    const navigate = useNavigate()
    return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        onClick={({key})=>{
            navigate(key)
        }}
        items={[ 
            {label:`Blogs`,
            key:"/",
            icon:<FileAddOutlined />
        },
        {label: `Create Blog`,
        key:"/createblog",
        icon: <BoldOutlined />
        }
        
        ]}
      />
      <Content/>
    </Header>
  </Layout>
    )
    }

function Content(){
    return(
    <div>
        <Routes>
            <Route path="/" element={<div><BlogsList/></div>}></Route>
            <Route path="/createblog" element={<div><Create/></div>}></Route>
            <Route path="/detail/:id" element={<div><Detail/></div>}></Route>
            <Route path="/recentlyadded" element={<div><RecentlyAdded/></div>}></Route>
        </Routes>
    </div>
    )
}

export default Navbar;