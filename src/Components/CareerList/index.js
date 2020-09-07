import React, { Component } from 'react'
import CareerCard from './CareerCard'
import { Row } from 'antd'
import Fade from 'react-reveal/Fade';


import UI from '../../Images/Careers/UI_UX.jpg'
import Dev from '../../Images/Careers/Dev.jpg'

export class CareerList extends Component {
  render() {
    return (
      <div>
        <Row id="career-cards">
        <Fade left>
          <CareerCard 
            Image = {UI}
            Role = {<span>UI / UX Developer Intern</span>}
            Skills = {<span>React Web Development, UI and UX designing, AWS</span>}
            Experience = "1 - 2 Yrs"
            Location = "Remote"
            Stipend = "Unpaid"
            Desc = ""
            IsOpen = {true}
            Link = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhdWTcntCvBdhfqwFrDqQTdFPCznVShZJGdmDZhhMvXRXVtDDkGLcPBbpZcXNpnLPhFst"
          />
        </Fade>
        <Fade right>
          <CareerCard 
            Image = {Dev}
            Role = {<span>Java Developer</span>}
            Skills = {<span>Java Programming, AWS, GraphQL</span>}
            Experience = "1 - 2 Yrs"
            Location = "Remote"
            Stipend = "Unpaid"
            Desc = ""
            IsOpen = {false}
          />
        </Fade>
        </Row>
      </div>
    )
  }
}

export default CareerList
