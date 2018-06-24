import React, { Component } from 'react';
import Nav from "../components/Nav"
import Hello from "../components/Hello";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";


class Main extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
