import React, { Component } from "react";
import { Row, Col, Divider, Alert } from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Collapse } from 'reactstrap';

import "./styles.css";

import Map from "../../Images/Maps.png";

export class Maps extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Copied : true,
    }
  }

  Toast = () => { 
    this.setState({
      Copied: true,
    })
    setTimeout(()=>{
      this.setState({
        Copied: false,
      })
    }, 2000)
  }
  
  render() {
    return (
      <div>
        <Row className="tc mt3">
          <Col xl={3} lg={3} md={3} sm={0} sm={0}></Col>
          <Col xl={6} lg={6} md={6} sm={24} sm={24} className="tc color">
            <p className="tc f3 lh-copy mb4">
              <Divider><i className="white f2 fab fa-google"></i></Divider>
              {"Jonathon@jpwilliamson.org"}
            </p>
            <Divider>
              <i className="white f2 far fa-address-card"></i>
            </Divider>
            <p className="f3">
              JPWilliamson INC
              <br /> 
              24A Trolley Square #1346,
              <br />
              Wilmington DE 19806-3334
              <br />
              USA
            </p>
            <a className="mr4 mt2" src="https://www.google.com/maps/place/24a+Trolley+Square+%231346,+Wilmington,+DE+19806,+USA/@39.7579316,-75.5635113,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6fd100d7f0e53:0xbb7686ec9af9bc6d!8m2!3d39.7579316!4d-75.5613226"><i class="white f3 fas fa-directions"></i></a>
            <CopyToClipboard text="
              JPWilliamson INC
              24A Trolley Square #1346
              Wilmington DE 19806-3334"
            >
              <a className="ml4 mt2" onClick={this.Toast}><i class="white f3 far fa-clipboard"></i></a>
            </CopyToClipboard>
            {/* <Collapse isOpen={this.state.Copied} className="ma3 tc w4 position">
              <Alert className="w4 tc" message="Copied to clipboard" type="success" showIcon />
            </Collapse> */}
          </Col>
          <Col xl={3} lg={3} md={3} sm={0} sm={0}></Col>
          <Col xl={12} lg={12} md={12} sm={24} sm={24}>
            <div className="tc ma3">
              <button
                className="clear"
                onClick=" window.open('http://google.com','_blank')"
              >
                <img className="map-image shadow-2" src={Map}></img>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Maps;
