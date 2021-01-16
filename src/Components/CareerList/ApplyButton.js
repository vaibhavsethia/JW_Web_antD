import React, { Component } from 'react'
import { Button, Tooltip } from 'antd';

import './styles.css'

export class ApplyButton extends Component {
  render() {
    return (
      <div>
        {
          this.props.IsOpen
          ?<div>
          <Button target="_blank" ghost href={`mailto:contact@jpwilliamson.org?subject=${this.props.Subject}`}>
            Apply
          </Button>
          <div className="pt3 col-gray">
            Or Mail us at : contact@jpwilliamson.org
          </div>
        </div>
          :<Tooltip placement="bottom" title={<span className="col-gray">Applications have closed</span>}>
            <Button target="_blank" className="disabled-btn" ghost href={this.props.Link} disabled>
              Apply
            </Button>
          </Tooltip>
          
        }
      </div>
    )
  }
}

export default ApplyButton
