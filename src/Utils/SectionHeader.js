import React, { Component } from 'react'
import { Parallax } from 'rc-scroll-anim';

export class SectionHeader extends Component {
  render() {
    return (
      <div className="tc pa3 body pb5 mt2">
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-300px)', margin: '10px auto' }}
        >
        <span className="header"><strong>{this.props.Title}</strong></span><br/>
        <div className="pt3"><span className="tagline">{this.props.Tagline}</span></div>
        </Parallax>
      </div>
    )
  }
}

export default SectionHeader
