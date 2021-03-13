import React, { Component } from "react";
import { Row } from "antd";

import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

import './styles.css'

export class MethodCard extends Component {
  render() {
    return (
      <div>
        <Row justify="center" align="middle" type="flex" className="pa3 pl5 pr5 col-gray">
          <TextCard
            Title = {this.props.Title}
            Tag = {this.props.Tag}
            Desc = {this.props.Desc}
          />
          <ImageCard 
            Image = {this.props.Image}
          />
        </Row>
      </div>
    );
  }
}

export default MethodCard;
