import React from "react";
import Page2 from "./navigation/page2";
import Home from "./navigation/home";
import { Switch, Route } from "react-router-dom";
import LoginSucces from "./navigation/loginSucces";
import styles from "./section.module.css";

const Section = () => (
  <main className={styles.section}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Page2" component={Page2} />
      <Route path="/LoginSucces" component={LoginSucces} />
    </Switch>
  </main>
);

export default Section;
