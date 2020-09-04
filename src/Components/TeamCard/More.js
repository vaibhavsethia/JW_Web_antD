import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export class More extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isCollapsed: true,
    }
  }

  toggle = () =>{
    this.setState({isCollapsed: !this.state.isCollapsed})
  }
  
  render() {
    var className=""
    
    if(this.state.isCollapsed){
      className = "fas fa-chevron-down"
    } else{
      className = "fas fa-chevron-up"
    }

    return (
      <div onClick={this.toggle}>
        <Collapse defaultActiveKey={['0']} ghost>
          <Panel className="tc" showArrow={false} header={<span>Know More <i className={className}></i></span>} key="1">
            <p className="tc pr1 pl1">{this.props.Desc}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
} 

export default More
