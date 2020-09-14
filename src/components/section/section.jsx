import React from "react";
import Page2 from "./page2";
import Home from "./home";
import { Switch, Route } from "react-router-dom";
import LoginSucces from "./loginSucces";

const Section = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Page2" component={Page2} />
      <Route path="/LoginSucces" component={LoginSucces} />
    </Switch>
  </main>
);

export default Section;
