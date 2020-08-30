import React, { Component } from 'react'
import SectionHeader from '../Utils/SectionHeader'

export class Team extends Component {
  render() {
    return (
      <div className="section">
        <SectionHeader 
          Title = {<span>Our Team</span>}
          Tagline = {<span>None of us ever do great things. But we can all do small things,<br/> with great love, and together we can do something wonderful.</span>}
          AnimType="None"
        />
      </div>
    )
  }
}

export default Team
