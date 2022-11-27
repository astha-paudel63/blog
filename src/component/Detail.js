import { Col, Divider, Row } from 'antd';
import React from 'react';
import {useParams} from 'react-router-dom'

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("BlogList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Detail() {
  const [storage, setStorage] = React.useState(getDataFromLocalStorage);
  const [details,setDetails] = React.useState([]);

  React.useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('BlogList'));
    if (storage) {
      setStorage(storage);
    }
  }, []);
const {id}= useParams();

React.useEffect(() => {
  // console.log(storage)
const getDetails = storage.filter((item)=>item.id===parseInt(id)
)
return setDetails(getDetails);
}, [id,storage])

console.log(details);

  return (
    <div id="detail">
      <h1>{id}</h1>
      {
        details.map((item) =>{
          return(
          <div>
            <h1>
            {item.title}
            </h1>
            <h1>
              {item.blog}
            </h1>
            
            </div>
          )
        })
      }
      <h1>{details.id}</h1>
    {/* <Divider orientation="left">{details.title}</Divider>
    <Row>
      <Col flex={3}>{details.blog}</Col>
      <Col flex={4}><img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    </Col>
    </Row> */}

    </div>
  )
}





export default Detail