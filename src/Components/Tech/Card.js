import React, { Component } from 'react'
import { Card } from 'antd';

import './styles.css'

const { Meta } = Card;

export class TechCard extends Component {
  render() {
    return (
      <div className="tc">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={<div><i className="tc card-icon fa fa-microchip white"></i></div>}
          className="card"
        >
          <Meta title={<div className="tech-name">{this.props.TechName}</div>} description={<div className="tech-desc">{this.props.Desc}</div>} />
        </Card>
      </div>
    )
  }
}

export default TechCard
