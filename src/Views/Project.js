import React, { Component } from 'react'
import SectionHeader from '../Utils/SectionHeader'
import ProjectCard from '../Components/ProjectCard'
import FutureCard from '../Components/ProjectCard/FutureCard'
import Future1 from '../Images/Future1.png'
import Future2 from '../Images/Future2.png'
import Future3 from '../Images/Future3.png'
import Future4 from '../Images/Future4.png'
import Discord1 from '../Images/Discord1.png'
import Discord2 from '../Images/Discord2.jpg'
import Discord3 from '../Images/Discord3.png'
import Discord4 from '../Images/Discord4.jpg'
import { Row } from 'antd'
import Fade from 'react-reveal/Fade';

export class Project extends Component {
  render() {
    return (
      <div className="section">
        <SectionHeader 
          Title = {<span>Projects</span>}
          Tagline = {<span>Perks of having a Creative and Hard-Working team members is directly<br /> reflected in the projects that the team members have worked on.</span>}
          AnimType = "None"
        />

        <ProjectCard 
          Title = "Custom 3D Models"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {["https://collectables-db.s3.amazonaws.com/PET/tiger_cub/tigercub.gif", "https://collectables-db.s3.amazonaws.com/PET/bb8/bb8.gif", "https://collectables-db.s3.amazonaws.com/PET/mini_dragon/mini_dragon.gif", "https://collectables-db.s3.amazonaws.com/PET/walle/walle_walk.gif"]}
        />
        <ProjectCard 
          Title = "Interactive Mini Games"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {["https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Sumo.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Sky_Wars.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Man_Hunt.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Duels.png"]}
        />
        <ProjectCard 
          Title = "Discord Bots"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[Discord1, Discord2, Discord3, Discord4]}
        />
        {/* <ProjectCard 
          Title = "Megamine"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[]}
        /> */}

        <SectionHeader 
          Title = {<span>Future Projects</span>}
          Tagline = {<span>Starting from small projects heading towards building something significant.<br />Here are some ideas we are looking to implement in the future</span>}
          AnimType = "None"
        />

        <Row className="pl4 pr4">
          <Fade left>
            <FutureCard 
              Title = "Auto-translating real time chat app"
              Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
              Image = {Future1}
            />
          </Fade>
          <Fade left>
            <FutureCard 
              Title = "Music player that integrates many platforms"
              Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
              Image = {Future2}
            />
          </Fade>
          <Fade right>
            <FutureCard 
              Title = "Esports betting and enhanced gameplay"
              Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
              Image = {Future4}
            />
          </Fade>
          <Fade right>
            <FutureCard 
              Title = "Entertainment platform for content creators"
              Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
              Image = {Future3}
            />
          </Fade>
        </Row>

        <SectionHeader 
          Title = {<span>Achievements</span>}
          Tagline = {<span>Some of our major achievements to support our long list of <br /> future projects we look upto implementing</span>}
          AnimType = "None"
        />

        <ProjectCard 
          Title = "Auto-translating real time chat app"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[]}
        />
        <ProjectCard 
          Title = "Music player that integrates many platforms"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[]}
        />
        <ProjectCard 
          Title = "Entertainment platform for content creators"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[]}
        />
        <ProjectCard 
          Title = "Esports betting and enhanced gameplay"
          Description = "Nulla occaecat in est tempor amet aliquip adipisicing nostrud est nulla ex deserunt. Adipisicing ad officia eu nulla dolore voluptate et irure qui. Incididunt adipisicing duis tempor ullamco irure velit cillum exercitation culpa eu est eu esse. Amet in nulla officia voluptate culpa esse nisi. Minim fugiat consectetur Lorem laboris aliqua mollit elit do consequat sit est cupidatat. Quis reprehenderit mollit eiusmod commodo fugiat duis ad laboris ut nulla eiusmod culpa aliqua magna."
          Images = {[]}
        />

      </div>
    )
  }
}

export default Project
