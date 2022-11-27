import { Col, Divider, Row } from 'antd';
import React from 'react';


function RecentlyAdded() {
  return (
    <div id="RecentlyAdded">
    <Divider orientation="left">Title</Divider>
    <Row>
      <Col flex={2}>RecentlyAdded</Col>
      <Col flex={3}><img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    </Col>
    </Row>

    </div>
  )
}





export default RecentlyAdded