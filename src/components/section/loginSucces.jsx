import React from "react";
import styles from "./section.module.css";

const LoginSucces = props => (
  <div className={styles.section}>
    <div>
      <div className="col container" style={{ width: "50%" }}>
        <h1 className={styles.Title}> Iniciaste sesión correctamente!</h1>
      </div>
    </div>
  </div>
);

export default LoginSucces;
