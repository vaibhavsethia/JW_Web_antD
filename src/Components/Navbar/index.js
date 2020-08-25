import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import Logo from '../../Images/Logo/Logo_1.png'
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
        	<div className="logo">
        		<a href=""><img src={Logo}></img></a>
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
		          title="J Williamson"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <LeftMenu />
		          <RightMenu />
		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
