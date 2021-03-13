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
import Achieve1 from '../Images/Achieve1.png'
import Achieve2 from '../Images/Achieve2.jpeg'
import Achieve3 from '../Images/Achieve3.png'
import { Row } from 'antd'

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
          Description = "Our modelling team produces creative 3d models that enhances the user gameplay and make minecraft more appealing to the eyes. We have many unique 3d models ranging from cool cosmetic items to astonishing creatures with unique abilities."
          Images = {["https://collectables-db.s3.amazonaws.com/PET/tiger_cub/tigercub.gif", "https://collectables-db.s3.amazonaws.com/PET/bb8/bb8.gif", "https://collectables-db.s3.amazonaws.com/PET/mini_dragon/mini_dragon.gif", "https://collectables-db.s3.amazonaws.com/PET/walle/walle_walk.gif"]}
        />
        <ProjectCard 
          Title = "Interactive Mini Games"
          Description = "Our Minigames team creates a lot of common minigames and a lot unique ones. If you're bored of playing all those common minigames over and over, you are at right place ! If you are a classic person that doesn't want to switch to new minigames, we have got all the classic ones too !"
          Images = {["https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Sumo.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Sky_Wars.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Man_Hunt.png", "https://megaminehostedimages.s3.amazonaws.com/GameMode_Banners/Duels.png"]}
        />
        <ProjectCard 
          Title = "Discord Bots"
          Description = "Our Bots not only detect vulgarity in any message , they have a lot of cool features like throwing in a random minecraft fact every day, you can ask a yes/no question to bot and much more. Our bot helps us keep the chat clean as well as deletes the spam message by itself and punishes the user according to owner."
          Images = {[Discord1, Discord2, Discord3, Discord4]}
        />
        <ProjectCard 
          Title = "Megamine"
          Description = "Megamine is a website where you can create a account , buy and spend mega (a currency in jpwilliamson.org and minecraft). This is a platform where a lot of interesting things ranging from live leaderboards to top live streams occur. You can spend mega on our 3d models, see yourself on live real time leaderboards, be a part of creator program , checkout new gamemodes and many more !"
          Images = {[]}
        />

        <SectionHeader 
          Title = {<span>Future Projects</span>}
          Tagline = {<span>Starting from small projects heading towards building something significant.<br />Here are some ideas we are looking to implement in the future</span>}
          AnimType = "None"
        />

        <Row type="flex" justify="center" className="pl4 pr4">
          <FutureCard 
            left = {true}
            Title = "Auto-translating real time chat app"
            Description = "We envision a world with no more language barriers. An App that would translate from one language to another in real time, which would be AWS backed so there's no scalability issue."
            Image = {Future1}
          />
          <FutureCard 
            left = {true}
            Title = "Music player that merges many platforms"
            Description = "A common ground for a single music player where all these apps - soundcloud, spotify, google play music comes under one unmbrella , are integrated and lets user listen to any song automatically."
            Image = {Future2}
          />
          <FutureCard 
            left = {false}
            Title = "Esports betting and enhanced gameplay"
            Description = " Enhancong the gameplays using some creative, Unique 3d models and allowing users to bet on gameplays in real time is something that would keep users engaged. An app at your service if you want to bet on live action."
            Image = {Future4}
          />
          <FutureCard 
            left = {false}
            Title = "Entertainment platform for content creators"
            Description = "The idea is to embed many social feeds into one page and allow for content creators to have access to many nice software tools in a very cool looking UI. This also includes things like Twitch overlays"
            Image = {Future3}
          />
        </Row>

        <SectionHeader 
          Title = {<span>Achievements</span>}
          Tagline = {<span>Some of our major achievements to support our long list of <br /> future projects we look upto implementing</span>}
          AnimType = "None"
        />

       <Row type="flex" justify="center"  className="pa3 pb4">
        <FutureCard
          left = {false} 
          Title = "Funding & Credits"
          Description = "Our Company is Well-Funded, and backed by AWS with lots of credits that helps us in initial stages of our venture. We are also partnered by OVH Startup Program and have OVH Credits"
          Image = {Achieve1}
        />
        <FutureCard
          left = {true} 
          Title = "A Powerful Multiplexer"
          Description = "We have been able to code a system 'Mutiplexer' that creates and destroys minecraft arenas in no time, thus enhancing user gameplays to another level. Some tests even suggest it being powerful than our current competitions."
          Image = {Achieve2}
        />
        <FutureCard
          left = {false} 
          Title = "Corporate Partnerships"
          Description = "We're partnered up with AWS Activate Startup Program, OVH Startup Program, Stripe Startup Partner, Twitch Streaming Partner, and YouTube partner. More partnerships are on the way."
          Image = {Achieve3}
        />
      </Row>
    </div>
    )
  }
}

export default Project
