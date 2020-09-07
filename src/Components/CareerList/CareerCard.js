import React, { Component } from 'react'
import { Col, Collapse } from 'antd'

import './styles.css'

const { Panel } = Collapse;

export class CareerCard extends Component {
  render() {
    return (
      <div className="tc">
        <Col className="pb3" xl={12} lg={12} md={12} sm={24} xs={24}>
          <div>
            <img className="career-image h5 w5 br4 shadow-2 grow" src={this.props.Image}></img>
            <p className="col-gray pt1 f3 fw3"><span className="col-teal fw5">Role : </span>{this.props.Role}</p>
            <Collapse ghost>
              <Panel showArrow={false} header={<span className="col-teal f4 fw3 ba pa2 pt1 pb1 br3">Know More</span>} key="1">
                <div className="mt3">
                {
                  this.props.Skills === ""
                  ?<div></div>
                  :<p className="">Skills : <span>{this.props.Skills}</span></p>
                }
                {
                  this.props.Experience === ""
                  ?<div></div>
                  :<p className="">Preffered Experience : <span>{this.props.Experience}</span></p>
                }
                {
                  this.props.Location === ""
                  ?<div></div>
                  :<p className="">Location : <span>{this.props.Location}</span></p>
                }
                {
                  this.props.Stipend === ""
                  ?<div></div>
                  :<p className="">Stipend : <span>{this.props.Stipend}</span></p>
                }
                {
                  this.props.Qualifications === ""
                  ?<div></div>
                  :<p className="">Minimum Qualification : <div>{this.props.Qualifications}</div></p>
                }
                {
                  this.props.Description === ""
                  ?<div></div>
                  :<p>{this.props.Description}</p>
                }
                </div>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </div>
    )
  }
}

export default CareerCard
