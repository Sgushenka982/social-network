import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from '../../../Redux/auth-reducer'
import {createField, Input} from "../../Common/FormControls/FormControl";
import {required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styles from './../../Common/FormControls/formControl.module.css'


const LoginForm = (props) => {
    //Создание окна регистрации с помощью универсальных функций
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('email', 'email', [required], Input)}
            {createField('password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: "checkbox"}, 'Remember me')}
            <div>
                <button>
                    login
                </button>
            </div>
            {props.error &&
            <div className={styles.errorForm}>
                {props.error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        //console.log(formData)
        let {email, password, rememberMe} = formData
        props.loginUser(email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {loginUser})(Login);