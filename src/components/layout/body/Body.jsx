import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

import("./Body.css")
  .then()
  .catch(err => console.log(err));

export default class Body extends Component {
  render() {
    return (
      
        <Switch>
          {/*<Route exact path="/" component={LifeCycleReactComponent} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/jquery" render={() => <div>jquery</div>} />
          <Route exact path="/android" render={() => <div>android</div>} />
          <Route render={() => <div>404 Page Not Found</div>} />
        </Switch>
    );
  }
}
