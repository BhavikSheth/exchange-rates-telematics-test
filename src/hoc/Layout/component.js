import React from "react";

import Toolbar from "../../components/Navigation/Toolbar";
import styles from "./styles.module.scss";

const Layout = props => {
  return (
    <div>
      <Toolbar />
      <main className={styles.main}>
        <div className={styles.container}>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
