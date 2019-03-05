import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Rates from "./containers/Rates";
import About from "./containers/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={Rates} />
              <Route exact path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
