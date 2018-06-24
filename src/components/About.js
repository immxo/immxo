import React, { Component } from 'react'
import '../styles/about.css';

class About extends Component {

    render() {
        return (
            <div className="about">
                <h1 className="about__title">Привет</h1>
                <p className="about__text">Меня зовут Андрей Иванов. Я frontend разработчик.</p>
                <p className="about__text">Считаю, что frontend разработчик обязан хотя бы немного разбираться в backend разработке. </p>
                <p className="about__text">Люблю ходить на локальные конференции, такие как PiterJS и SPB Frontend</p>
                <a className="about__link" href="https://github.com/immxo" target="_blank">github.com/immxo</a>
            </div>
        )}
}

export default About
