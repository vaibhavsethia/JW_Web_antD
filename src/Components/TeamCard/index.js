import React, { Component } from 'react'
import { Divider, Col, Row } from 'antd'
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

import './styles.css'

export class TeamCard extends Component {
  render() {
    return (
      <Row className="pl5 pr4 mt3 mb3">
        <Col md={4}>
            <img alt="profile" className="dimension br3 shadow-2 grow br-100" src={this.props.Image}></img>
          </Col> 
        <Col md={20} className="mt4">
          <span className="f3 tl col-gray"><Flip right cascade>{this.props.Name}</Flip></span><Divider type="vertical"/><span className="f4 tr col-teal"><Flip left cascade>{this.props.Role}</Flip></span>
          <br />
          {
            this.props.Github === ""
            ?<div></div>
            :<a href={this.props.Github}><i className="f4 grow link-hover fab fa-github mr2 git-link"></i></a>
          }
          <br/>
          <p className=" f5 col-gray mt1 tl pr1 pl1">{this.props.Desc}</p>
        </Col>
      </Row>
    )
  }
}

export default TeamCard