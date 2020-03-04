import React, { Component } from "react";
import Input from '../UI/Input/Input';
//import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './LoginPage.css';
import is from 'is_js';
import { OnSecondPageButton } from './onLoginPage';

class LoginPage extends React.Component {
    
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                } 
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                } 
            }
        }
    }

    loginHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    };

    validateControl(value, validation) {
        if(!validation) {
            return true;
        }

        let isValid = true;

        if(validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    if(validation.email) {
        isValid = is.email(value) && isValid;
    }

    if(validation.minLength) {
        isValid = value.length >=  validation.minLength && isValid;
    }

        

        return isValid;
    }

onChangeHandler = (event, controlName) => {
    console.log(`${controlName}:`, event.target.value)
    
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] }

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    });

    this.setState({
        formControls,
        isFormValid
    })
}

    renderInputs() {
        return Object.keys(this.state.formControls)
        .map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                key={controlName + index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event, controlName)}
                />
            );
        });
    }

    render() {
        return (
            <div className="LoginPage">
                <h1>Авторизоваться</h1>

                <form method="POST" onClick={this.submitHandler} className="LoginForm">
                    
                        {this.renderInputs()}

                    <button 
                    type="success"
                     onClick={this.loginHandler}
                     disabled={!this.state.isFormValid}
                     >
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

export default connect()(LoginPage);