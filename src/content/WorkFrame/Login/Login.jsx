import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser,unloginUser} from '../../../Redux/auth-reducer'
import {Input} from "../../Common/FormControls/FormControl";
import {required} from "../../../utils/validators/validators";


const LoginForm=(props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'login'} placeholder={'login'} component={Input} validate={[required]}/></div>
            <div><Field name={'password'} component={Input}  placeholder={'password'} validate={[required]}/></div>
            <div>
                <Field name={'rememberMe'} component={Input} type="checkbox"/>
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
        // let {login,password, rememberMe} = formData
        // // console.log({login,password, rememberMe})
        // props.loginUser(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null,{loginUser, unloginUser })(Login);