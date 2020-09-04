import React, { Component } from 'react'
import SectionHeader from '../Utils/SectionHeader'
import TeamCard from '../Components/TeamCard';
import { Row, Tabs } from 'antd';

import Arnav from '../Images/Profile/Arnav.jpg'
import Jon from '../Images/Profile/Jon.jpeg'
import Prashant from '../Images/Profile/Prashant.jpg'
import Sid from '../Images/Profile/Sid.jpeg'
import Vaibhav from '../Images/Profile/Vaibhav.jpg'
import Vivek from '../Images/Profile/Vivek.jpg'
import Raghav from '../Images/Profile/Raghav.jpg'
import Kishan from '../Images/Profile/Kishan.jpg'
import Parul from '../Images/Profile/Parul.jpg'
import Kaushal from '../Images/Profile/Kaushal.png'
import Harshit from '../Images/Profile/Harshit.png'
import Anonymous from '../Images/Profile/Anonymous.jpg'

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
        <Row className="tc">
        <Tabs className="tab" defaultActiveKey="1" centered>
          <TabPane tab="Senior Team" key="1">
            <Row className="tc mb2 mt1">
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
                Role = {<span>Web Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/vaibhav-sethia-4711b8145/"
                Github = "https://github.com/vaibhavsethia"
                Desc = {<span>Some people work to live but he lives to work. A night owl, gamer and sports lover. A coder who loves to play in new technologies, best for small talks and caffeine shots! He is always up for discussions around science fiction and some useless fact.</span>}
              />
              <TeamCard 
                Image = {Vivek}
                Name = {<span>Vivek Sharma</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/vivek-sharma-33592a98/"
                Github = "https://github.com/Baazigar007"
                Desc = {<span>A Dr. Strange fan, you don't go to him for a second opinion, you go to him for a better opinion. A street smart guy good at bargaining (Trust me, I've seen him bargain with Dormammu). Focussed and values time, as the protector of time stone. His sacred relic? Laptop. His preferred dimension? Dark Dimension.</span>}
              />
            </Row>
            <TeamCard 
                Image = {Prashant}
                Name = {<span>Prashant Gaurav</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/prashant-gaurav-01/"
                Github = "https://github.com/pg711700"
                Desc = {<span>His day starts with a big dreams to develop and ends with debugging. The the things that attract him towards developing stuff is how cool IDE’ s are these days, just type an @ and the code writes itself.He is a passionate coder, traveller, reader. He makes weird faces in front of camera and can’ t sing or dance.For him the biggest question is that# isP = NP ? </span>}
              />
              <TeamCard 
                Image = {Arnav}
                Name = {<span>Arnav Anand</span>}
                Role = {<span>ML & AI Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/arnav-anand-a6797714b/"
                Github =  "https://github.com/ArgonArnav"
                Desc = {<span>An Ambitious, Adaptive, Aspirant & Agile engineer who enjoys writing code, loves to face challenges and strive to do the best with whatever task or work is presented, in order to get the best results. Zealous learner with a Keep On Improving state of mind. Currently engrossed in the field of AI and planning to build a future around it.</span>}
              />    
          </TabPane>
          <TabPane tab="Junior Team" key="2">
            <Row className="tc mb2 mt1">
              <TeamCard 
                Image = {Kishan}
                Name = {<span>Kishan</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = ""
                Github = ""
                Desc = {<span>An enthusiastic manga reader and anime watcher. Throughout the day you'll find him either playing games or supporting fc barcelona(#Força Barça) or hanging out with his friends on discord.Hopes to to becomes 1500 rated on chess.com.Loves everything 3d and animation.</span>}
              />
              <TeamCard 
                Image = {Raghav}
                Name = {<span>Raghav Rathi</span>}
                Role = {<span>ML & AI Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/raghav-rathi-a78bb0152/"
                Github = "https://github.com/raghav17083"
                Desc = {<span>An Enthusiastic, Imaginative, and Team worker who has had his hands dirty in Java and Python development in the past. Loves to explore new technologies and ideas. His new love is Machine Learning, with AI being the side chick. He also holds some experience working in an Agile environment.</span>}
              />
              <TeamCard 
                Image = {Parul}
                Name = {<span>Parul Lakhotia</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/parul-lakhotia-313384176"
                Github = "https://github.com/parullakhotia"
                Desc = {<span>A creative developer driven by ethics and the unending potential to leverage existing resources that allow topping up the stack with technologies closer to real world imitation in an inclusive manner.</span>}
              />
              <TeamCard 
                Image = {Kaushal}
                Name = {<span>Kaushal Gawri</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = "https://www.linkedin.com/in/kaushal-gawri-596aba159"
                Github = "https://github.com/kaushal-gawri9899"
                Desc = {<span>A passionate programmer with good problem solving and analytical skills. He's an avid learner and is curious about how things are build . He likes to juggle between multiple tasks while keeping his priorities in check. He likes to 'orchestrate his mornings to the time of coffee.</span>}
              />
            </Row>
            <TeamCard 
                Image = {Anonymous}
                Name = {<span>Mridul Gupta</span>}
                Role = {<span>Modeller</span>}
                LinkedIn = ""
                Github = ""
                Desc = {<span>A cricket lover, loves to play and code the games. Passionate about the work. wants to enhance the experience of gaming with advanced technologies. Wants the best out of the rest.</span>}
              />
              <TeamCard 
                Image = {Harshit}
                Name = {<span>Harshit Bargujar</span>}
                Role = {<span>Modeller</span>}
                LinkedIn = "https://www.linkedin.com/in/harshitbargujar/"
                Github = "https://github.com/harshit2608"
                Desc = {<span></span>}
              />
              <TeamCard 
                Image = {Anonymous}
                Name = {<span>Payal Mohanty</span>}
                Role = {<span>Java Developer</span>}
                LinkedIn = ""
                Github = ""
                Desc = {<span></span>}
              />
          </TabPane>
        </Tabs>
        </Row>
      </div>
    )
  }
}

export default Team
