import React from "react";

const RatesItem = props => (
  <li>{`${props.currency}: ${props.rate}`}</li>
);

export default RatesItem;
