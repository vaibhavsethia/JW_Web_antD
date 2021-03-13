import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Card, Row, Col } from 'antd';

// import TechCard from './Card'
import SectionHeader from '../../Utils/SectionHeader';

import './styles.css'

const { Meta } = Card;

export class Tech extends Component {
  render() {
    return (
      <div>
        <SectionHeader 
          Title = {<span>Technologies We use</span>}
          Tagline = {<span>It is a necessity of the fields in which we work to always be open <br />to new things to learn. Here are few of those acquired skills</span>}
        />
        <Row type="flex" align="middle" justify="center">
          <Col xl={2} lg={2} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade left>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-microchip white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>A</span>mazon Web Services</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">Aws provides on demand backend and cloud computing services for our team. Some of the services that we use or intend to use are Kinesis , Appsync, Codecommit, Amplify, DynamoD, S3, EC2 and Route53  .</div>
                    } />
                </Card>
              </div>
            </Fade>
          </Col>
          <Col xl={0} lg={0} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade top>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-laptop white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>R</span>eact</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">One of the main technologies we use for our frontend is React alongwith UIs. Some of our projects that use this are JP Chit-Chat and JP Translator</div>
                    } />
                </Card>
              </div>
            </Fade>  
          </Col>
          <Col xl={0} lg={0} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade right>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-code white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>P</span>ython</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">What makes our platform standout other similar platforms and companies is the strong Machine Learning architecture a large chunk of which will be coded in Python.</div>
                    } />
                </Card>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row type="flex" align="middle" justify="center">
          <Col xl={2} lg={2} m={0} sm={0} xs={0}></Col>
          <Col xl={0} lg={0} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade left>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-code white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>J</span>ava</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">Coding creative pluggins for Minecraft Java Edition is obviously done in Java. Minecraft being one of those games with loads of oppurtunities provides our creative team with loads of ideas too.</div>
                    } />
                </Card>
              </div>
            </Fade>
          </Col>
          <Col xl={0} lg={0} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade bottom>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-database white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>G</span>raphQl</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">GraphQL alongwith AWS Appsync helps simplifying and building a large part of our backend. It is one of the main Component in the JP Chit-Chat.</div>
                    } />
                </Card>
              </div>
            </Fade>
          </Col>
          <Col xl={0} lg={0} m={0} sm={0} xs={4}></Col>
          <Col xl={7} lg={7} m={8} sm={12} xs={20}>
            <Fade right>
              <div className="tc">
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<div><i className="tc card-icon fa fa-server white"></i></div>}
                  className="card"
                >
                  <Meta 
                    title={
                      <div className="tech-name">
                        <span><span style={{'fontSize':'40px', 'color': '#1FC0BB'}}>A</span>pollo</span>
                      </div>
                    } 
                    description={
                      <div className="tech-desc">The Connection between our frontend and backend is done by Apollo. Simplifying our developers work is all it does. Its implementation can be found in most of our projects.</div>
                    } />
                </Card>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tech
