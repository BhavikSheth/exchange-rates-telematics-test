import React from "react"

import Toolbar from "../../components/Navigation/Toolbar"

const Layout = props => {
  console.log("LAYOUT")
  return (
    <div>
      <Toolbar />
      <main /*className={classes.Content}*/>{props.children}</main>
    </div>
  )
}

export default Layout
