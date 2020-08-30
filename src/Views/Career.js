import React, { Component } from 'react'
import SectionHeader from '../Utils/SectionHeader'

const isRecruiting = true;
export class Career extends Component {
  render() {
    var title, tagline;
    if(isRecruiting){
      title = <span>We are recruiting</span>
      tagline = <span><p>Our team wants you</p><p>Our team wants you, We are recruiting for the below positions.<br /> Feel free to mail us your resume at the below link, We will get back to you asap.</p></span>
    } else {
      title = <span>No vacant positions</span>
      tagline = <span><p> Oops!! </p><p>Sorry but we are not recruiting now.<br/> Feel free to mail us your resume at the below link,<br/> We will surely let you know when we would need you.</p></span>
    }
    
    return (
      <div className="section">
        <SectionHeader 
          Title = {title}
          Tagline = {tagline}
          AnimType = "None"
        />
      </div>
    )
  }
}

export default Career
