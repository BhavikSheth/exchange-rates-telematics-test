import React from "react";

import RatesItem from "./components/RatesItem";

import styles from "./styles.module.scss";

const Rates = props => (
  <div>
    <ul className={styles.list}>
      {props.data.map(item => (
        <RatesItem key={item[0]} currency={item[0]} rate={item[1]} />
      ))}
    </ul>
  </div>
);

export default Rates;
