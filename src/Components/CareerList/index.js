import React, { Component } from 'react'
import CareerCard from './CareerCard'
import { Row } from 'antd'
import Fade from 'react-reveal/Fade';


import Modeller from '../../Images/Careers/Modeller.jpg'
import Dev from '../../Images/Careers/Dev.jpg'

export class CareerList extends Component {
  render() {
    return (
      <div>
        <Row id="career-cards">
        <Fade left>
          <CareerCard 
            Image = {Modeller}
            Role = {<span>Modeller</span>}
            Skills = {<span>Blockbench, Intermediate Java, Creaive Thinking</span>}
            Experience = "0 - 2 Yrs"
            Location = "Remote"
            Stipend = "Unpaid"
            Description = "As a 3D modeler you will be responsible for creating virtual worlds and characters. You will be breathing life into sketches and concept art. You will be working in a team with lots of other talented artists, engineers and programmers and will learn about different related technologies. You must be well versed with industry standard 3D modeling programs and tools. Good spatial skills and a well honed sense of color and design will help you succeed in this job."
            IsOpen = {true}
            Subject = "Modeller Internship"
          />
        </Fade>
        <Fade right>
          <CareerCard 
            Image = {Dev}
            Role = {<span>Java Developer</span>}
            Skills = {<span>Java Development, Maven, </span>}
            Experience = "0 - 2 Yrs"
            Location = "Remote"
            Stipend = "Unpaid"
            Description = "We are looking for a Java Developer for building high-performing, scalable, enterprise-grade applications.You will be part of a talented software team that works on mission-critical applications. Java developer roles and responsibilities include managing Maven builds while providing expertise in the full software development lifecycle, from concept and design to testing."
            IsOpen = {true}
            Subject = "Java Developer Internship"
          />
        </Fade>
        </Row>
      </div>
    )
  }
}

export default CareerList
