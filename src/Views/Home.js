import React, { Component } from 'react'

import Tech from "../Components/Tech";
import Hero from "../Components/Hero";
import Methodology from '../Components/Methodology';

import './styles.css'

export class Home extends Component {
  render() {
    return (
      <div className="section">
        <Hero />
        <Tech />
        <Methodology />
      </div>
    )
  }
}

export default Home
