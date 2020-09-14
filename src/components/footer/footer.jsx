import React from "react";
import styles from "./footer.module.css";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <IconContext.Provider
          value={{
            size: "2rem",
            className: styles.pointer,
          }}
        >
          <div
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/luciano-damico/";
            }}
          >
            <FaLinkedin />
            <a style={{ color: "white", display: "block", cursor: "pointer" }}>
              My linkedin
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles.content}>
        <IconContext.Provider
          value={{
            color: "white",
            size: "2rem",
          }}
        >
          <div>
            <FaWhatsapp />
            <a style={{ color: "white", display: "block" }}>2216398793</a>
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles.content}>
        <IconContext.Provider
          value={{
            color: "white",
            size: "2rem",
          }}
        >
          <div>
            <FaEnvelope />
            <a style={{ color: "white", display: "block" }}>
              daluciano@hotmail.com
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
