import React, { Component } from "react";
import { Col } from "antd";
import Fade from 'react-reveal/Fade';

import "./styles.css";

export class TextCard extends Component {
  render() {
    return (
      <div>
        <Col className="pt5" xl={12} lg={12} md={12} sm={24} xs={24}>
          <Fade left cascade>
            <div className="pl2">
              <div className="method-content f3 mb2">{this.props.Title}</div>
              <div className="method-content f5 col-teal mb3">{this.props.Tag}</div>
              <div className=" f4 pr4 w5">{this.props.Desc}</div>
            </div>
          </Fade>
        </Col>
      </div>
    );
  }
}

export default TextCard;
