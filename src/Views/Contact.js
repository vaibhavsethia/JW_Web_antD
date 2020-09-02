import React, { Component } from "react";
import SectionHeader from "../Utils/SectionHeader";
import Maps from "../Components/Maps";
import "./styles.css";
import { Row, Col, Divider } from "antd";

export class Contact extends Component {
  render() {
    return (
      <div className="section pb4">
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
        <div>
          <Maps />
        </div>
      </div>
    );
  }
}

export default Contact;
