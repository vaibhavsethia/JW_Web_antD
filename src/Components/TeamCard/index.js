import React, { Component } from 'react'
import { Divider, Col } from 'antd'

import { More } from './More';

import './styles.css'

export class TeamCard extends Component {
  render() {
    return (
      <Col className="tc" xl={6} lg={8} md={12} sm={12} xs={24}>
        <div className="pt3 pl3 pr3 tc">
          <img alt="profile" className="dimension br3 shadow-2 grow" src={this.props.Image}></img>
          <div className="pa2 content br3">
            <span className="tl col-gray">{this.props.Name}</span><Divider type="vertical"/><span className="tr col-teal">{this.props.Role}</span>
            <div className="tc col-gray f4 mt1">
              {
                this.props.Github === ""
                ?<div></div>
                :<a href={this.props.Github}><i className="grow link-hover fab fa-github mr2"></i></a>
              }
              {
                this.props.LinkedIn === ""
                ?<div></div>
                :<a href={this.props.LinkedIn}><i className="ml2 grow link-hover fab fa-linkedin"></i></a>
              }
            </div>
            <div>
              <More 
                Desc = {this.props.Desc}
              />
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default TeamCard
