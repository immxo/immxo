import React, { Component } from 'react'
import '../styles/nav.css';
import Main from "../containers/Main";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Nav extends Component {

    state = {
        projectsBg: '#000',
        toggleMenu: false,
        rotate: 'rotate(0deg)'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if(window.pageYOffset > 0){
            let rotateStr = 'rotate('+window.pageYOffset/10+'deg)';
            this.setState({rotate: rotateStr});
        }
    }

    toggleMenu(){
        this.setState({toggleMenu: !this.state.toggleMenu })
    }

    onHoverChangeBg(color){
        this.setState({projectsBg: color});
    }


    render() {
        return (
            <Router>
                <div>
                    <div>
                        <span className="menu__text" onClick={this.toggleMenu.bind(this)}>меню</span>
                        <div className={this.state.toggleMenu ? 'skullOpen' : 'skull'} onClick={this.toggleMenu.bind(this)}
                             style={{transform: this.state.rotate}}></div>
                        <nav className={this.state.toggleMenu ? 'nav navOpen' : 'nav'}>
                            <div className='projects' style={{backgroundColor: this.state.projectsBg, transition: 'background-color 0.4s'}}>
                                <div className="projects__container">
                                    <div className="projects__line"></div>
                                    <h1 className="projects__title">Проекты</h1>
                                </div>
                               <div className="projects__menu">
                                    <a href="http://intarcio.ru/" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#639fa9')}
                                        onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>Intarcio</a>
                                    <a href="http://fine.immxo.com/" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#ff9600')}
                                       onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>This is fine</a>
                                    <a href="http://immxo.com/agents" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#f2464f')}
                                       onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>Agents</a>
                                    <a href="http://immxo.com/hotels" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#0085c5')}
                                       onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>Hotels</a>
                               </div>
                            </div>
                            <div className='me'>
                                <NavLink to="/#projects" className="me__link" onClick={this.toggleMenu.bind(this)}>Мои работы</NavLink>
                                <Link to="/about" className="me__link" onClick={this.toggleMenu.bind(this)}>Обо мне</Link>
                                <NavLink to="/#contacts" className="me__link" onClick={this.toggleMenu.bind(this)}>Связь со мной</NavLink>
                            </div>
                        </nav>
                    </div>

                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )}
}

export default Nav
