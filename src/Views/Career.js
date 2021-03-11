import React, { Component } from "react";

import SectionHeader from "../Utils/SectionHeader";
import CareerList from "../Components/CareerList";
import { Button } from "antd";

const isRecruiting = true;

export class Career extends Component {
  render() {
    var title, tagline, className;
    if (isRecruiting) {
      className = "section";
      title = <span>We are recruiting</span>;
      tagline = (
        <span>
          <p>
            Our team wants you, We are recruiting for the below positions.
            <br /> Feel free to mail us your resume at the below link, We will
            get back to you asap.
          </p>
        </span>
      );
    } else {
      className = "section empty";
      title = <span>No vacant positions</span>;
      tagline = (
        <span>
          <p> Oops!! </p>
          <p>
            Sorry but we are not recruiting now.
            <br /> Feel free to mail us your resume at the below mail,
          </p>
        </span>
      );
    }

    return (
      <div style={{height: '64vh'}} className={className}>
        <SectionHeader id="career-header" Title={title} Tagline={<span>Interested In Joining our Team ?</span>} AnimType="None" />
        {isRecruiting ? (
          <div className="pb3 tc">
            <Button target="_blank" href="https://forms.gle/zjTrEWT6zFzgFxwr6" className="apply-button">Apply Here</Button>
            {/* <CareerList /> */}
          </div>
        ) : (
          <div className="tc">
            <i class="white far fa-envelope f1"></i>
            <p className="col-gray pt3 f3">
              <strong className="col-teal f3">Mail Us At</strong> :
              contact@jpwilliamson.org
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Career;
