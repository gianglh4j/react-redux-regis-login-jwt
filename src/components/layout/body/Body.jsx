import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import("./Body.css")
  .then()
  .catch(err => console.log(err));

export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div className="container-fluid">
          <div className="row">
            <Switch>
              {/*<Route exact path="/" component={LifeCycleReactComponent} /> */}

              <Route exact path="/jquery" render={() => <div>jquery</div>} />
              <Route exact path="/android" render={() => <div>android</div>} />
              <Route render={() => <div>404 Page Not Found</div>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
