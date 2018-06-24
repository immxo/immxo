import React, { Component } from 'react'
import '../styles/agents.css';
import '../styles/sites.css';

class Agents extends Component {

    state = {
        opacity: 0,
        cursor: 'default'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if(window.pageYOffset > 1000){
            this.setState({opacity: 1, cursor: 'pointer'});
        }
        else {
            this.setState({opacity: 0, cursor: 'default'});
        }
        if(window.pageYOffset > 2100){
            this.setState({opacity: 0, cursor: 'default'});
        }
    }


    render() {
        return (
            <div className="site-agents" style={{opacity: this.state.opacity, cursor: this.state.cursor}}>
                <div className="overlay overlay-agents">
                    <p className="overlay__profile">Web develop</p>
                    <p className="overlay__title">Agents</p>
                    <p className="overlay__stack">Web design, bootstrap </p>
                    <a className="overlay__link" href="http://immxo.com/agents" target="_blank"></a>
                </div>
            </div>
        )}
}

export default Agents