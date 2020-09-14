import React from "react";
import styles from "../../section/section.module.css";
import ListCards from "../elements/list";

export default function page2() {
  return (
    <div>
      <div className="col container" style={{ width: "50%" }}>
        <h1 className={styles.Title}> segunda generación </h1>
        <ListCards offset={151} />
      </div>
    </div>
  );
}
