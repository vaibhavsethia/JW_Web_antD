import React, { Component } from "react";
import SectionHeader from "../Utils/SectionHeader";
import Maps from "../Components/Maps";
import "./styles.css";
import { Row, Col, Divider } from "antd";

export class Contact extends Component {
  render() {
    return (
      <div className="section single">
        <SectionHeader
          Title={<span>Contact Us</span>}
          Tagline={
            <span>
              We are always open to suggestions, questions and concerns.
              <br></br>Feel free to ping us at any of the following platform
            </span>
          }
          AnimType="None"
        />
        {/* <Row>
          <Col xl={3} lg={3} md={3} sm={0} sm={0}>
          </Col>
          <Col xl={6} lg={6} md={6} sm={24} sm={24}>
            <p className="tc f3 lh-copy white">
            <Divider><i className=" white f2 fab fa-google"></i></Divider>
              {"Jonathon@jpwilliamson.org"}
            </p>
          </Col>
        </Row> */}
        <div>
          <Maps />
        </div>
      </div>
    );
  }
}

export default Contact;
