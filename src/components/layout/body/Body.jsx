import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";

import("./Body.css")
  .then()
  .catch(err => console.log(err));

export default class Body extends Component {
  render() {
    return (
      
        <Switch>
          {/*<Route exact path="/" component={LifeCycleReactComponent} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jquery" render={() => <div>jquery</div>} />
          <Route exact path="/android" render={() => <div>android</div>} />
          <Route render={() => <div>404 Page Not Found</div>} />
        </Switch>
    );
  }
}
