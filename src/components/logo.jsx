// Logo.js
import React from "react";
import styles from "../styles/navigation.module.css";
function Logo() {
  return (
    <img
      src="https://cdn.logo.com/hotlink-ok/logo-social.png"
      alt="Logo"
      className={styles.logo}
    />
  );
}

export default Logo;
