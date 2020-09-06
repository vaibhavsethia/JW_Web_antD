import React, { Component } from "react";
import { Menu } from "antd";

import "./styles.css";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item className="pl2" key="home">
          <a className="hover-item" href="/"><span className="menu-item link-hover">Home</span></a>
        </Menu.Item>
        <Menu.Item className="pl2" key="team">
          <a className="hover-item" href="/team"><span className="menu-item link-hover">Team</span></a>
        </Menu.Item>
        <Menu.Item className="pl2" key="contact">
          <a className="hover-item" href="/projects"><span className="menu-item link-hover">Projects</span></a>
        </Menu.Item>
        <Menu.Item className="pl2" key="careers">
          <a className="hover-item" href="/careers"><span className="menu-item link-hover">Careers</span></a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
