import React from "react";
import styles from "./styles.module.scss";

import NavigationItems from "../NavigationItems";

const Toolbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
