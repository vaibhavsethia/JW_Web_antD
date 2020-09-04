import React, { Component } from "react";
import Rotate from "react-reveal/Rotate";
import { Col } from "antd";

export class ImageCard extends Component {
  render() {
    return (
      <div>
        <Rotate bottom right>
          <Col className="tc" xl={12} lg={12} md={12} sm={24} xs={24}>
            <img
              className="br4 image"
              alt="MethodCard"
              src={this.props.Image}
            ></img>
          </Col>
        </Rotate>
      </div>
    );
  }
}

export default ImageCard;
