import React from "react";
import styles from "./header.module.css";
import Nav from "./elements/nav/nav";

export default function Header() {
  return (
    <div className={styles.header}>
      <Nav></Nav>
    </div>
  );
}
