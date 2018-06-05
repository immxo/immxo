import React, { Component } from 'react'
import '../styles/nav.css';

class Nav extends Component {

    state = {
        projectsBg: '#000',
        toggleMenu: false
    }

    toggleMenu(){
        this.setState({toggleMenu: !this.state.toggleMenu })
    }

    onHoverChangeBg(color){
        this.setState({projectsBg: color});
    }

    render() {
        return (
            <div>
                <div className={this.state.toggleMenu ? 'skullOpen' : 'skull'} onClick={this.toggleMenu.bind(this)}></div>
                <nav className={this.state.toggleMenu ? 'nav navOpen' : 'nav'}>
                    <div className='projects' style={{backgroundColor: this.state.projectsBg, transition: 'background-color 0.4s'}}>
                        <div className="projects__container">
                            <div className="projects__line"></div>
                            <h1 className="projects__title">Проекты</h1>
                        </div>
                       <div className="projects__menu">
                            <a href="" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#FFFA6A')}
                                onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>Intarcio</a>
                            <a href="" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#ff9600')}
                               onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>This is fine</a>
                            <a href="" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#0085c5')}
                               onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>Hotels</a>
                            <a href="" className="projects__link" onMouseOver={this.onHoverChangeBg.bind(this,'#009d81')}
                               onMouseOut={this.onHoverChangeBg.bind(this, '#000')}>UpTraider</a>
                       </div>
                    </div>
                    <div className='me'>
                        <a href="" className="me__link">Мои работы</a>
                        <a href="" className="me__link">Обо мне</a>
                        <a href="" className="me__link">Связь со мной</a>
                    </div>
                </nav>

            </div>
        )}
}

export default Nav
