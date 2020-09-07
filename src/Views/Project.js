import React, { Component } from 'react'
import SectionHeader from '../Utils/SectionHeader'

export class Project extends Component {
  render() {
    return (
      <div className="section empty">
        <SectionHeader 
          Title = {<span>Projects</span>}
          Tagline = {<span>Perks of having a Creative and Hard-Working team members is directly<br /> reflected in the projects that the team members have worked on.</span>}
          AnimType = "None"
        />
      </div>
    )
  }
}

export default Project
