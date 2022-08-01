import React, { Component } from "react";
import Header from "./Component/Header.js";
import Main from "./Component/Main.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
