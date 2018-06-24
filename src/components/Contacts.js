import React, { Component } from 'react'
import '../styles/contacts.css';

class Contacts extends Component {

    state = {
        opacity: 0,
        opacityInput: 0,
        cursor: 'default',
        cursorInput: 'default',
        name: '',
        message: '',
        email: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll() {
        if(window.pageYOffset > 2300){
            this.setState({opacity: 1, cursor: 'pointer'})
        }
        else {
            this.setState({opacity: 0, cursor: 'default'})
        }
    }

    onChangeName(e){
        let val = e.target.value;
        this.setState({name: val})
    }

    onChangeEmail(e){
        let val = e.target.value;
        this.setState({email: val})
    }

    onChangeMessage(e){
        let val = e.target.value;
        this.setState({message: val, opacityInput: 1, cursorInput: 'pointer'})
    }


    render() {
        return (
            <div className="contacts" id="contacts" style={{opacity: this.state.opacity}}>
                <h1 className="contacts__title">Напиши мне пару строк</h1>
                <form className="contacts__form" action="">
                    <input required className="contacts__input" placeholder="Сюда" type="text"
                           value={this.state.message} onChange={e=>this.onChangeMessage(e)}/>
                    <input required className="contacts__input hiddenInput" placeholder="Имя" type="text"
                           value={this.state.name} onChange={e=>this.onChangeName(e)}
                           style={{opacity: this.state.opacityInput, cursor: this.state.cursorInput}}/>
                    <input required className="contacts__input hiddenInput" placeholder="Email" type="email"
                           value={this.state.email} onChange={e=>this.onChangeEmail(e)}
                           style={{opacity: this.state.opacityInput}}/>
                    <button className="contacts__btn" type="submit" style={{opacity: this.state.opacityInput,
                        cursor: this.state.cursorInput}}>КЛИК</button>
                </form>
            </div>
        )}
}

export default Contacts
