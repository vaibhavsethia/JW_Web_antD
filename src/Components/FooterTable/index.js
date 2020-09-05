import React, { Component } from 'react'
import { Collapse } from 'antd';

import './styles.css'

const { Panel } = Collapse;

export class index extends Component {
  render() {
    return (
      <div className="pb5">
         <Collapse accordion>
            <Panel className="pl5 pr5 pt3" showArrow={true} header={<span className="f3 fw3 tc">This is the first question on the FAQ page ?</span>} key="1">
              <p className="pl4 pr5 f4 pt2 fw2">Culpa elit sunt pariatur anim in elit ut voluptate sunt veniam. Quis nulla voluptate est elit. Voluptate ea eu aute fugiat ut anim cupidatat consectetur sit eiusmod. Lorem enim ipsum id ullamco do consectetur consectetur occaecat non cillum est in amet officia. Lorem excepteur veniam cillum laborum tempor. Quis adipisicing ex est incididunt nisi magna enim occaecat.</p>
            </Panel>
            <Panel className="pl5 pr5 pt3" showArrow={true} header={<span className="f3 fw3">This is the second question on the FAQ page ?</span>} key="2">
              <p className="pl4 pr5 f4 pt2 fw2">Eiusmod dolor do proident labore sunt velit velit fugiat labore mollit id adipisicing dolor. Ut dolor dolore velit consequat sunt laborum et reprehenderit. Laborum nisi nostrud sunt ipsum. Reprehenderit proident non nulla cillum qui dolor anim cillum sunt sint eiusmod esse anim eiusmod. Tempor in cupidatat reprehenderit culpa.</p>
            </Panel>
            <Panel className="pl5 pr5 pt3" showArrow={true} header={<span className="f3 fw3 tc">This is the third question on the FAQ page ?</span>} key="3">
              <p className="pl4 pr5 f4 pt2 fw2">Culpa elit sunt pariatur anim in elit ut voluptate sunt veniam. Quis nulla voluptate est elit. Voluptate ea eu aute fugiat ut anim cupidatat consectetur sit eiusmod. Lorem enim ipsum id ullamco do consectetur consectetur occaecat non cillum est in amet officia. Lorem excepteur veniam cillum laborum tempor. Quis adipisicing ex est incididunt nisi magna enim occaecat.</p>
            </Panel>
            <Panel className="pl5 pr5 pt3" showArrow={true} header={<span className="f3 fw3">This is the fourth question on the FAQ page ?</span>} key="4">
              <p className="pl4 pr5 f4 pt2 fw2">Eiusmod dolor do proident labore sunt velit velit fugiat labore mollit id adipisicing dolor. Ut dolor dolore velit consequat sunt laborum et reprehenderit. Laborum nisi nostrud sunt ipsum. Reprehenderit proident non nulla cillum qui dolor anim cillum sunt sint eiusmod esse anim eiusmod. Tempor in cupidatat reprehenderit culpa.</p>
            </Panel>
        </Collapse>
      </div>
    )
  }
}

export default index
