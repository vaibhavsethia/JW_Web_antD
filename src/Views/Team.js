import React, { Component } from 'react'
import { Row, Tabs } from 'antd';

import SectionHeader from '../Utils/SectionHeader'
import TeamCard from '../Components/TeamCard';
import Jon from '../Images/Profile/Jon.png'
import Prashant from '../Images/Profile/Prashant.png'
import Sid from '../Images/Profile/Sid.png'
import Vaibhav from '../Images/Profile/Vaibhav.png'
import Vivek from '../Images/Profile/Vivek.png'
import Kishan from '../Images/Profile/Kishan.png'
import Mridul from '../Images/Profile/Mridul.jpg'

const { TabPane } = Tabs;

export class Team extends Component {
  render() {
    return (
      <div className="section pb4">
        <SectionHeader 
          Title = {<span>Our Team</span>}
          Tagline = {<span>None of us ever do great things. But we can all do small things,<br/> with great love, and together we can do something wonderful.</span>}
          AnimType="None"
        />

        <TeamCard 
          Image = {Jon}
          Name = {<span>Jonathon Williamson</span>}
          Role = {<span>CFO</span>}
          LinkedIn = "https://www.linkedin.com/in/jonathan-p-williamson/"
          Github = ""
          Desc = {<span>A Passionate inventor and clever problem solver who doesn’t shy from ‘doing hard things.’ Eager learner and entrepreneurial, “edge” thinker who approach initiatives with a gritty work ethic and an intrepid spirit of curiosity.</span>}
        />
        <TeamCard 
          Image = {Sid}
          Name = {<span>Sidharth Sachdeva</span>}
          Role = {<span>CFO</span>}
          LinkedIn = "https://www.linkedin.com/in/siddharth-sachdeva-01/"
          Github = ""
          Desc = {<span>An Agile Professional and Scrum Master who is passionate about Entrepreneurship as well as having a holistic approach towards Software Development and Engineering.</span>}
        />
        <TeamCard 
          Image = {Vaibhav}
          Name = {<span>Vaibhav Sethia</span>}
          Role = {<span>Full Stack Developer</span>}
          LinkedIn = "https://www.linkedin.com/in/vaibhav-sethia-4711b8145/"
          Github = "https://github.com/vaibhavsethia"
          Desc = {<span>Some people work to live but he lives to work. A night owl, gamer and sports lover. A coder who loves to play in new technologies, best for small talks and caffeine shots! He is always up for discussions around science fiction and some useless fact.</span>}
        />
        <TeamCard 
          Image = {Vivek}
          Name = {<span>Vivek Sharma</span>}
          Role = {<span>Dev Ops</span>}
          LinkedIn = "https://www.linkedin.com/in/vivek-sharma-33592a98/"
          Github = "https://github.com/Baazigar007"
          Desc = {<span>A Dr. Strange fan, you don't go to him for a second opinion, you go to him for a better opinion. A street smart guy good at bargaining (Trust me, I've seen him bargain with Dormammu). Focussed and values time, as the protector of time stone. His sacred relic? Laptop. His preferred dimension? Dark Dimension.</span>}
        />
        <TeamCard 
          Image = {Prashant}
          Name = {<span>Prashant Gaurav</span>}
          Role = {<span>Full Stack Developer</span>}
          LinkedIn = "https://www.linkedin.com/in/prashant-gaurav-01/"
          Github = "https://github.com/pg711700"
          Desc = {<span>His day starts with a big dreams to develop and ends with debugging. The the things that attract him towards developing stuff is how cool IDE’ s are these days, just type an @ and the code writes itself.He is a passionate coder, traveller, reader. He makes weird faces in front of camera and can’ t sing or dance.For him the biggest question is that# isP = NP ? </span>}
        />
        <TeamCard 
          Image = {Kishan}
          Name = {<span>Kishan</span>}
          Role = {<span>Lead Modeller</span>}
          LinkedIn = ""
          Github = ""
          Desc = {<span>An enthusiastic manga reader and anime watcher. Throughout the day you'll find him either playing games or supporting fc barcelona(#Força Barça) or hanging out with his friends on discord.Hopes to to becomes 1500 rated on chess.com.Loves everything 3d and animation.</span>}
        />
        <TeamCard 
          Image = {Mridul}
          Name = {<span>Mridul Gupta</span>}
          Role = {<span>Lead Java Developer</span>}
          LinkedIn = "https://www.linkedin.com/in/mridulcse27"
          Github = "https://github.com/Mrd278"
          Desc = {<span>A cricket lover, loves to play and code the games. Passionate about the work. wants to enhance the experience of gaming with advanced technologies. Wants the best out of the rest.</span>}
        />
      </div>
    )
  }
}

export default Team
