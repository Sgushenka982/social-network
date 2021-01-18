import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormControls/FormControl";

const maxLength10 = maxLengthCreator(10)

const PostsForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name='postText' component={Input} validate={[required,maxLength10]} placeholder='post text' />
            </div>
            <div>
                <button>add Post</button>
            </div>
        </form>
    )
}

const SendPostsForm = reduxForm({form:'Posts'})(PostsForm)

const SendPosts =(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
        props.addPost(formData.postText)
    }
    return(
        <SendPostsForm onSubmit={onSubmit}/>
    )
}

export default SendPosts