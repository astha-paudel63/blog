import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {  Avatar, List, Space } from "antd";
// import { Route , Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import {Detail} from './Detail'

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("BlogList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
function BlogsList() {
  const [storage, setStorage] = React.useState(getDataFromLocalStorage);
  // const [id,setId] = React.useState();
  // const [title, setTitle] = React.useState();
  // const [blog,setBlog] = React.useState();

  React.useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('BlogList'));
    if (storage) {
      setStorage(storage);
    }
  }, []);

  const editItem =(id) =>{
    let getData = storage.find((elem) =>{
      return elem.id === id
    });
    // console.log(getData)
  }

 
  return (
    <div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 8,
              }}
              dataSource={storage}
          
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                   <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={
                      // <Link to="detail" onClick={()=>editItem(item.id)}
                      // state ={storage}
                      // >
                      //   {item.title}
                      // </Link> 
                      <Link to={
                        `/detail/${item.id}`
                      }
                      onClick={()=>editItem(item.id)}>
                         {item.title}
                         </Link>
                  }
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
                
              )}
            />
            {/* <Detail 
            id={storage.id}/> */}
    </div>
  );
}
export default BlogsList;
