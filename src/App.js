import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Layout } from "antd";

import AppRoute from "./Utils/AppRoute";
import Navbar from "./Components/Navbar";

import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Career from "./Views/Career";
import Team from "./Views/Team";

import "./App.css";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content>
          <Switch>
            <AppRoute exact path="/careers" component={Career} />
            <AppRoute exact path="/contact" component={Contact} />
            <AppRoute exact path="/" component={Home} />
            <AppRoute exact path="/team" component={Team} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
