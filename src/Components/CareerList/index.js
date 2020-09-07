import React, { Component } from 'react'
import CareerCard from './CareerCard'
import { Row } from 'antd'

import UI from '../../Images/Careers/UI_UX.jpg'
import Dev from '../../Images/Careers/Dev.jpg'

export class CareerList extends Component {
  render() {
    return (
      <div>
        <Row id="career-cards">
        <CareerCard 
          Image = {UI}
          Role = {<span>UI / UX Developer Intern</span>}
          Skills = {<span>React Web Development, UI and UX designing</span>}
          Experience = "1 - 2 Yrs"
          Location = "Remote"
          Stipend = "Unpaid"
          Qualifications = {<ul>
            <li>jhjhghjg</li>
          </ul>}
        />
        <CareerCard 
          Image = {Dev}
          Role = {<span>Java Developer</span>}
        />
        </Row>
      </div>
    )
  }
}

export default CareerList
