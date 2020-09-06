import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Layout, Affix } from "antd";

import AppRoute from "./Utils/AppRoute";
import Navbar from "./Components/Navbar";

import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Career from "./Views/Career";
import Team from "./Views/Team";
import FAQs from "./Views/FAQs";
import Policy from "./Views/Policy";
import Project from "./Views/Project";

import "./App.css";
import Footer from "./Components/Footer";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Affix>
        <Navbar />
        </Affix>
        <Content>
          <Switch>
            <AppRoute exact path="/careers" component={Career} />
            <AppRoute exact path="/contact" component={Contact} />
            <AppRoute exact path="/" component={Home} />
            <AppRoute exact path="/team" component={Team} />
            <AppRoute exact path="/faq" component={FAQs} />
            <AppRoute exact path="/policy" component={Policy} />
            <AppRoute exact path="/projects" component={Project} />
          </Switch>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
