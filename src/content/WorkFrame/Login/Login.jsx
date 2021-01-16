import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm=(props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'login'} placeholder={'login'} component={'input'}/></div>
            <div><Field name={'password'} component={'input'}  placeholder={'password'}/></div>
            <div>
                <Field name={'rememberMe'} component={'input'} type="checkbox"/>
                <span>Remember me</span>
            </div>
            <div><button>login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;