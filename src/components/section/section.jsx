import React from "react";
import secondGeneration from "./navigation/secondGeneration";
import firstGeneration from "./navigation/firstGeneration";
import Home from "./navigation/home";
import { Switch, Route } from "react-router-dom";
import LoginSucces from "./navigation/loginSucces";
import styles from "./section.module.css";

const Section = () => (
  <main className={styles.section}>
    <Switch>
      <Route exact path="/Pokedex/" component={Home} />
      <Route path="/Pokedex/First-Generation" component={firstGeneration} />
      <Route path="/Pokedex/Second-Generation" component={secondGeneration} />
      <Route path="/Pokedex/LoginSucces" component={LoginSucces} />
    </Switch>
  </main>
);

export default Section;
