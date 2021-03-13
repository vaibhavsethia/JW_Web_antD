import { Col } from 'antd'
import React, { Component } from 'react'
import './styles.css'
import Fade from 'react-reveal/Fade';

export class FutureCard extends Component {
  render() {
    return (
      <Col className="tc" md={6} sm={11} xs={22}>
        <Fade left={this.props.left} right={!this.props.left}>
          <img className="br-100 h4" src={this.props.Image}></img>
          <div className="pl3 pr3 project-title">{this.props.Title}</div>
          <div className="pl3 pr3 project-desc">{this.props.Description}</div>
        </Fade>
      </Col>
    )
  }
}

export default FutureCard
