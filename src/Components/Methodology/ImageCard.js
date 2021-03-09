import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Col } from "antd";

export class ImageCard extends Component {
  render() {
    return (
      <div>
        <Fade right>
          <Col className="tc" xl={12} lg={12} md={12} sm={24} xs={24}>
            <img
              className="br4 image"
              alt="MethodCard"
              src={this.props.Image}
            ></img>
          </Col>
        </Fade>
      </div>
    );
  }
}

export default ImageCard;
