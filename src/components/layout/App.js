import React, { Component } from "react";
import "./App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store.js";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
        <div className="site-wrap">
      
          <Header />
          <Body />
          <Footer />
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
