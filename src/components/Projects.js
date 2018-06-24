import React, { Component } from 'react'
import '../styles/projects.css';
import Intarcio from "./Intarcio";
import Thisisfine from "./Thisisfine";
import Agents from "./Agents";
import Hotels from "./Hotels";


class Projects extends Component {

    render() {
        return (
            <div className="sites" id="projects">
                <div className="leftSites">
                    <Intarcio/>
                    <Agents/>
                </div>
                <div className="rightSites">
                    <Thisisfine/>
                    <Hotels/>
                </div>
            </div>

        )}
}

export default Projects
