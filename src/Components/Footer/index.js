import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'

import './styles.css'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row className="mb2">
          <Col xl={6} lg={6} md={12} sm={12} xs={24} className="tc">
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={24}>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={24} className="col-gray tc">
          <Row className="b">Products</Row>
            <Row><a href="/" className="link-hover-footer"><span className="fw2">MegaMine</span></a></Row>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={24} className="col-gray tc">
          <Row className="b">Support</Row>
            <Row><a href="/contact" className="link-hover-footer"><span className="fw2">Contact</span></a></Row>
            <Row><a href="/faq" className="link-hover-footer"><span className="fw2">FAQs</span></a></Row>
            <Row className="b mt3">Social</Row>
            <Row><a href="/" className="link-hover-footer"><span className="fw2">Linkedin</span></a></Row>
            <Row><a target="_blank" href="https://medium.com/me/stories/public" className="link-hover-footer"><span className="fw2">Blog</span></a></Row>
          </Col>
        </Row>
        <Row className="tc">
          <Col>
            <span className="col-gray f5 fw1">J.Williamson <span>©</span> 2020</span>
            <Divider type="vertical"/>
            <span className="col-gray f5 fw1"><a href="/policy" className="link-hover-footer">Privacy Policy</a></span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer
