import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormControls/FormControl";

const maxLength50 = maxLengthCreator(50)

const MessageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'}
                       placeholder='enter your message'
                       component={Input}
                       validate={[required,maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form:'Message'})(MessageForm)

const SendMessageForm=(props)=>{

    const onSubmit=(formData)=>{
        console.log(formData.message)
        props.onSendMessageClick(formData.message);
    }
    return(
        <MessageReduxForm onSubmit={onSubmit}/>
    )
}

export default SendMessageForm