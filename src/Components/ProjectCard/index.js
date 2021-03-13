import { Col, Row, Image } from 'antd'
import React, { Component } from 'react'
import './styles.css'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export class index extends Component {
  render() {
    return (
      <Row type="flex" justify="center" gutter={15} className="pl5 pr5 pt2 pb3">
        <Fade left>
          <div className="project-title pb2">{this.props.Title}</div>
        </Fade>
        <Fade right cascade>
          <p className="project-desc pb3">{this.props.Description}</p>
        </Fade>
        {
          this.props.Images.map(Image => {
            return(
              <Col className="mt3 mb3" md={6} sm={12} xs={24}>
                <Slide bottom>
                  <img src={Image}></img>
                </Slide>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

export default index
