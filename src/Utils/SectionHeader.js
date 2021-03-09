import React, { Component } from 'react'
import { Parallax } from 'rc-scroll-anim';
import Pulse from 'react-reveal/Pulse';

export class SectionHeader extends Component {
  render() {
    if(this.props.AnimType === 'None'){
      return(
        <div className="tc body pb5 pt4">
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
            animation={[
              { x: 0, opacity: 1, playScale: [0, 0.2] },
              { y: 100, playScale: [0, 0.3] },
              { blur: '10px', playScale: [0, 0.5] },
            ]}
            style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}
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
