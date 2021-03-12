import { Col, Row, Image } from 'antd'
import React, { Component } from 'react'
import './styles.css'

export class FutureCard extends Component {
  render() {
    return (
      <Col className="tc" md={6} sm={11} xs={22}>
        <img className="br-100 h4" src={this.props.Image}></img>
        <div className="pl3 pr3 project-title">{this.props.Title}</div>
        <div className="pl3 pr3 project-desc">{this.props.Description}</div>
      </Col>
      // <Row justify="center" gutter={15} className="pl5 pr5 pt2 pb3">
      //   
      //   {
      //     this.props.Images.map(Image => {
      //       return(
      //         <Col className="mt3 mb3" md={6} sm={12} xs={24}>
      //           <img src={Image}></img>
      //         </Col>
      //       )
      //     })
      //   }
      // </Row>
    )
  }
}

export default FutureCard
