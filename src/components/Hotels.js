import React, { Component } from 'react'
import '../styles/hotels.css';
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
        if(window.pageYOffset > 1300){
            this.setState({opacity: 1, cursor: 'pointer'});
        }
        else {
            this.setState({opacity: 0, cursor: 'default'});
        }
    }


    render() {
        return (
            <div className="site-hotels" style={{opacity: this.state.opacity, cursor: this.state.cursor}}>
                <div className="overlay overlay-hotels">
                    <p className="overlay__profile">Web develop/rework</p>
                    <p className="overlay__title">Hotels</p>
                    <p className="overlay__stack">Web design, Jquery, flex-box </p>
                    <a className="overlay__link" href="" target="_blank"></a>
                </div>
            </div>
        )}
}

export default Intarcio