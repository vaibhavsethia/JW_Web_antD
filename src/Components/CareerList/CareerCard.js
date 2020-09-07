import React, { Component } from 'react'
import { Col, Collapse, Button } from 'antd'

import './styles.css'
import ApplyButton from './ApplyButton';

const { Panel } = Collapse;

export class CareerCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isCollapsed : true,
    }
  }
  
  Toggle = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    })
  }

  render() {
    var ButtonContent;
    if(this.state.isCollapsed){
      ButtonContent = <span className="pl1">More Info <i className = "fas fa-chevron-down pl1 pr1"></i></span>
    } else{
      ButtonContent = <span className="pl1">Less Info <i className = "fas fa-chevron-up pl1 pr1"></i></span>
    }

    return (
      <div className="tc">
        <Col className="pb3" xl={12} lg={12} md={12} sm={24} xs={24}>
          <div>
            <img className="career-image h5 w5 br4 shadow-2 grow" src={this.props.Image}></img>
            <p className="col-gray pt1 f3 fw3"><span className="col-teal fw5">Role : </span>{this.props.Role}</p>
            <Collapse ghost>
              <Panel showArrow={false} header={<span className="col-teal f4 fw3 ba pa2 pt1 pb1 br3" onClick={this.Toggle}>{ButtonContent}</span>} key="1">
                <div className="mt3 f4 fw5 col-teal">
                {
                  this.props.Skills === ""
                  ?<div></div>
                  :<p className="">Skills : <span className="fw3 col-gray">{this.props.Skills}</span></p>
                }{
                  this.props.Experience === ""
                  ?<div></div>
                  :<p className="">Preffered Experience : <span className="fw3 col-gray">{this.props.Experience}</span></p>
                }{
                  this.props.Location === ""
                  ?<div></div>
                  :<p className="">Location : <span className="fw3 col-gray">{this.props.Location}</span></p>
                }{
                  this.props.Stipend === ""
                  ?<div></div>
                  :<p className="">Stipend : <span className="fw3 col-gray">{this.props.Stipend}</span></p>
                }{
                  this.props.Description === ""
                  ?<div></div>
                  : <p>{this.props.Description}</p>
                }
                <ApplyButton 
                  IsOpen = {this.props.IsOpen}
                  Link = {this.props.Link}
                />
                </div>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </div>
    )
  }
}

export default CareerCard
