import React, { Component } from 'react'

import SectionHeader from '../Utils/SectionHeader'
import FAQTable from '../Components/FAQTable'

export class FAQs extends Component {
  render() {
    return (
      <div className="section">
        <SectionHeader 
          Title = {<span>Frequently Asked Questions</span>}    
          Tagline = {<span>We are happy to help if you have any questions for us,<br /> A wise man once said,<br /> "He Who asks a question remains a fool for 5 minutes,<br/> but the one who doesnt remains a fool forever."</span>} 
          AnimType = "None"   
        />
        <FAQTable />
      </div>
    )
  }
}

export default FAQs
