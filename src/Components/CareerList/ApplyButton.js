import React, { Component } from 'react'
import { Button, Tooltip } from 'antd';

import './styles.css'

export class ApplyButton extends Component {
  render() {
    return (
      <div>
        {
          this.props.IsOpen
          ?<Button ghost href={this.props.Link}>
            Apply
          </Button>
          :<Tooltip placement="right" title={<span className="col-gray">Applications have closed</span>}>
            <Button className="disabled-btn" ghost href={this.props.Link} disabled>
              Apply
            </Button>
          </Tooltip>
          
        }
      </div>
    )
  }
}

export default ApplyButton
