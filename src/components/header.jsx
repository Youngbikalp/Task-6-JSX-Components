import React from "react";
import Navigation from "./Navigation";
import Logo from "./logo"; // Import your Logo component
import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo /> {/* Add the logo component */}
      <Navigation />
    </header>
  );
}

export default Header;
