import React, { Component } from "react";

import SectionHeader from "../Utils/SectionHeader";
import CareerList from "../Components/CareerList";

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
      <div className={className}>
        <SectionHeader id="career-header" Title={title} Tagline={tagline} AnimType="None" />
        {isRecruiting ? (
          <div className="pb3">
            <CareerList />
          </div>
        ) : (
          <div className="tc">
            <i class="white far fa-envelope f1"></i>
            <p className="col-gray pt3 f3">
              <strong className="col-teal f3">Mail Us At</strong> :
              recruitment@jpwilliamson.org
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Career;
