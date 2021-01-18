import React from 'react'
import styles from './formControl.module.css'

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