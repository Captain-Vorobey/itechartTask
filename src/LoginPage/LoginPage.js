import React, { Component } from "react";
import Input from '../UI/Input/Input'
import classes from './LoginPage';

export default class LoginPage extends React.Component {
    
    loginHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className={classes.LoginPage}>
                <h1>Авторизоваться</h1>

                <form submit={this.submitHandler} className={classes.LoginForm}>
                    <Input label="Email"/>

                    <Input label="Password" errorMessage={'error'}/>

                    <button type="success" onClick={this.loginHandler}>
                        Войти
                    </button>

                    <button type="success" onClick={this.registerhandler}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        );
    }
}