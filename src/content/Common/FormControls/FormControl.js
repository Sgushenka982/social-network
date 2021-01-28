import React from 'react'
import styles from './formControl.module.css'
import {Field} from "redux-form";

export const Input = ({input,meta,...props})=>{
    let hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl+' '+ (hasError ? styles.error :'')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>'some error'</span>}
        </div>
    )
}


export const createField =(placeholder, name, validate, component, props={},text='' )=>(
    <div>
        <Field name={name}
               placeholder={placeholder}
               component={component}
               validate={validate}
               {...props}
        />{text}
    </div>
)