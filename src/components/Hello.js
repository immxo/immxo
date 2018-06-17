import React, { Component } from 'react'
import '../styles/hello.css';

class Hello extends Component {

    render() {
        return (
            <div className="hello">
                <h1 className="hello__title">Привет</h1>
                <p className="hello__text">Меня зовут Андрей Иванов. Я frontend разработчик, трускейтер и бруталнатурал.</p>
            </div>
        )}
}

export default Hello
