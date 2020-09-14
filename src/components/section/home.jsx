import React from "react";
import styles from "./section.module.css";
import ListCards from "./elements/list";

export default function Home() {
  return (
    <div className={styles.section}>
      <div>
        <div className="col container" style={{ width: "50%" }}>
          <h1 className={styles.Title}> Primera generación </h1>
          <ListCards offset={0} />
        </div>
      </div>
    </div>
  );
}
