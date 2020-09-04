import React, { Component } from 'react'
import SectionHeader from '../../Utils/SectionHeader'
import MethodCard from './MethodCard'

import Method1 from '../../Images/Method_1.jpg'
import Method2 from '../../Images/Method_2.png'

export class Methodology extends Component {
  render() {
    return (
      <div>
        <SectionHeader
          Title = {<span>Our Methodology : Agile</span>}
          Tagline = {<span>Learn from yesterday, live for today, hope for tomorrow.<br />The important thing is not to stop questioning.</span>}
        />
        <MethodCard 
          Title = {<span>Continous Learning</span>}
          Tag = {<span>Where teams design together</span>}
          Desc = {<span> Our team members actively learn powerful, cutting-edge technologies and put them into practice. The company continually fosters an ever growing archieve of collective knowledge, which rapid accelerates skill development.</span>}
          Image = {Method2}
        />
        <MethodCard 
          Title = {<span>Rapid Development</span>}
          Tag = {<span>Pioneering through Innovation</span>}
          Desc = {<span> Using the Agile development methodology our team efficiently produces solutions that are innovative yet robust. In every project we design our solutions to utilize the best technologies avalable such as GraphQL, Kubernets, cloud computing, and machine learning.</span>}
          Image = {Method1}
        />
      </div>
    )
  }
}

export default Methodology
