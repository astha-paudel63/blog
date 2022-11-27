import React, { useEffect } from "react";
import { Form, Input,Button,Upload} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import RecentlyAdded from "./RecentlyAdded";
// import { render } from "@testing-library/react";

const { TextArea } = Input;

//getting the value from local storage
const getDataFromLS=()=>{
  const data = localStorage.getItem('BlogList');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
function Create() {
//array of object
  const[storage,setStorage] = React.useState(getDataFromLS());
  
  
  //getting the value from inputfield
  const [title, setTitle] = React.useState('')
  const [blog, setBlog] = React.useState('')
  // const [key, setKey] = React.useState('')


  //form submit 
  const handleAddBlogSubmit =(e)=>{
    e.preventDefault();
    let num = storage.length+1;
    let blogs = { id: num, title: title, blog: blog}
    setStorage([...storage,blogs]);
    // setKey('');
    setTitle('');
    setBlog('');
    <RecentlyAdded/>
  }

  //pic handle
  // const handlePic = (e) =>{
  //   document.querySelector("#imageFile").addEventListener("change",function()
  //   {
  //     const render = new FileReader()
  //     render.addEventListener("load",()=>
  //     {
  //       localStorage.setItem("recent-image",render.result);
  //     })
  //     render.readAsDataURL(this.files[0])
  //   })
   
  // }

  //saving in localStorage
  useEffect(()=>{
    localStorage.setItem('BlogList',JSON.stringify(storage));
  },[storage])
  

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
       
      >
        <Form.Item label="Title">
          <Input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item label="blog here">
          <TextArea rows={6} value={blog} onChange={(e)=>setBlog(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload 
          listType="picture"
          accept=".png,.jpg"
          id="imageFile"
          name="imageFile"
          type="file" 
          // onChange={handlePic}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item >
          <Button type="primary"  onClick={handleAddBlogSubmit}>Submit</Button>
          
        </Form.Item>
      </Form>
    </div>
  );
}

export default Create;
