import React, { Component } from 'react'
import '../styles/intarcio.css';
import '../styles/sites.css';

class Intarcio extends Component {

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
        if(window.pageYOffset > 400){
            this.setState({opacity: 1, cursor: 'pointer'});
        }
        else {
            this.setState({opacity: 0, cursor: 'default'});
        }
    }


    render() {
        return (
            <div className="site-intarcio" style={{opacity: this.state.opacity, cursor: this.state.cursor}}>
                <div className="overlay overlay-intarcio">
                    <p className="overlay__profile">Web develop/full stack</p>
                    <p className="overlay__title">Intarcio</p>
                    <p className="overlay__stack">Web design, react/redux, nodeJS, express, mongodb, css modules </p>
                    <a className="overlay__link" href="http://intarcio.ru/" target="_blank"></a>
                </div>
            </div>
        )}
}

export default Intarcio
