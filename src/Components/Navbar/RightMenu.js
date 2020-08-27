import React, { Component } from "react";
import { Menu } from "antd";

import "./styles.css";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item className="pl2" key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="team">
          <a href="/team">Team</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="contact">
          <a href="contact">Contact</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="careers">
          <a href="/careers">Careers</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
