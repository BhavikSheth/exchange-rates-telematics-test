import React from "react";

import styles from "./styles.module.scss";

const RatesItem = props => (
  <li className={styles.ratesItem}>
    <div className={styles.currency}>
      <span>{props.currency}</span>
    </div>
    <div className={styles.rate}>
      <span>{props.rate}</span>
    </div>
  </li>
);

export default RatesItem;
