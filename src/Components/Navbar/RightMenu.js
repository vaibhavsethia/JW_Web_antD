import React, { Component } from "react";
import { Menu } from "antd";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item className="pl2" key="home">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="team">
          <a href="">Team</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="contact">
          <a href="">Contact</a>
        </Menu.Item>
        <Menu.Item className="pl2" key="careers">
          <a href="">Careers</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
