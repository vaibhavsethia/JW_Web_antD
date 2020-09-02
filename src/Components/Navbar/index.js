import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

// import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

import Logo from '../../Images/Logo/Logo_4.png'
import './styles.css'

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar shadow-2">
        	<div className="logo pt2 pb1 pl3 grow">
        		<a href="/"><img alt="Company-Logo" src={Logo}></img></a>
        	</div>
        	<div className="menuCon">
        		{/* <div className="leftMenu">
	        		<LeftMenu />
				    </div> */}
				    <div className="rightMenu pl3 pr3">
	        			<RightMenu />
				    </div>
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
							className="drawer"
		          title="J Williamson"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          {/* <LeftMenu /> */}
		          <RightMenu />
		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
