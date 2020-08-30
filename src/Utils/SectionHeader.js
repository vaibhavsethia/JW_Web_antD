import React, { Component } from 'react'
import { Parallax } from 'rc-scroll-anim';
import Pulse from 'react-reveal/Pulse';

export class SectionHeader extends Component {
  render() {
    if(this.props.AnimType === 'None'){
      return(
        <div className="tc body pb5 pt5">
            <div className="header">{this.props.Title}</div>
          <Pulse left cascade>
            <div className="pt3"><div className="tagline">{this.props.Tagline}</div></div>
          </Pulse>
            
        </div>
      )
    } else{
      return (
        <div className="tc body pb5 pt5">
          <Parallax
            animation={{ x: 0 }}
            style={{ transform: 'translateX(-300px)', margin: '10px auto' }}
          >
          <span className="header"><strong>{this.props.Title}</strong></span><br/>
          <Pulse>
            <div className="pt3"><span className="tagline">{this.props.Tagline}</span></div>
          </Pulse>
          </Parallax>
        </div>
      )
    }
    
  }
}

export default SectionHeader
