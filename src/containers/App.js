import React, { Component } from 'react';
import Nav from "../components/Nav";
import Hello from "../components/Hello";
import Projects from "../components/Projects";

class App extends Component {
  render() {
    return (
        <div>
            <Nav/>
            <Hello/>
            <Projects/>
        </div>
    );
  }
}

export default App;
