import React from "react"

import NavigationItem from "./components/NavigationItem"

const NavigationItems = props => {
  return (
    <ul>
      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/about" exact>About</NavigationItem>
      <NavigationItem link="/exchange-rates" exact>Exchange Rates</NavigationItem>
    </ul>
  )
}

export default NavigationItems