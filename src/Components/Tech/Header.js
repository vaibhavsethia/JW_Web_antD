import React, { Component } from 'react'
import { Parallax } from 'rc-scroll-anim';
import './styles.css'

export class Header extends Component {
  render() {
    return (
      <div className="tc pa3 body" style={{height: '100vh'}}>
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-300px)', margin: '10px auto' }}
        >
        <span className="header"><strong>Technologies We Use</strong></span><br/>
        <div className="pt3"><span className="tagline">It is a necessity of the fields in which we work to always be open <br />to new things to learn. Here are few of those acquired skills</span></div>
        </Parallax>
      </div>
    )
  }
}

export default Header
