import React, { Component } from 'react'
import '../styles/thisisfine.css';
import '../styles/sites.css';

class Thisisfine extends Component {

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
        if(window.pageYOffset > 700){
            this.setState({opacity: 1, cursor: 'pointer'});
        }
        else {
            this.setState({opacity: 0, cursor: 'default'});
        }
    }

    render() {
        return (
            <div className="site-thisisfine" style={{opacity: this.state.opacity, cursor: this.state.cursor}}>
                <div className="overlay overlay-thisisfine">
                    <p className="overlay__profile">Web develop/full stack</p>
                    <p className="overlay__title">This is fine</p>
                    <p className="overlay__stack">Web design, express , nodeJS, mongodb, bootstrap, json web token </p>
                    <a className="overlay__link" href="http://fine.immxo.com/" target="_blank"></a>
                </div>
            </div>
        )}
}

export default Thisisfine
