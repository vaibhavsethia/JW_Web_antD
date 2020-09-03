import React, { Component } from 'react'
import SectionHeader from '../../Utils/SectionHeader'

export class Methodology extends Component {
  render() {
    return (
      <div>
        <SectionHeader
          Title = {<span>Our Methodology : Agile</span>}
          Tagline = {<span>Learn from yesterday, live for today, hope for tomorrow.<br />The important thing is not to stop questioning.</span>}
        />
      </div>
    )
  }
}

export default Methodology
