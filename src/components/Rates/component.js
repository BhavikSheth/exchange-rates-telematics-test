import React from "react";

import RatesItem from "./components/RatesItem";

const Rates = props => (
  <div ckass="rates">
    <ul>
      {props.data.map(item => (
        <RatesItem key={item[0]} currency={item[0]} rate={item[1]} />
      ))}
    </ul>
  </div>
);

export default Rates;
