import React, { Component } from "react";
import { Row } from "antd";

import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

import './styles.css'

export class MethodCard extends Component {
  render() {
    return (
      <div>
        <Row className="pa3 pr5 pl5 col-gray">
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
