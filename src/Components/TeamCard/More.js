import React, { Component } from 'react'
import { Collapse, Col } from 'antd';

const { Panel } = Collapse;

export class More extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isCollapsed: true,
    }
  }
  
  render() {
    return (
      <div>
        <Collapse defaultActiveKey={['0']} ghost>
          <Panel className="tc" showArrow={false} header={<span>Know More <i class="fas fa-chevron-down"></i></span>} key="1">
            <p className="tc pr1 pl1">{this.props.Desc}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
} 

export default More
