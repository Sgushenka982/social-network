import React from 'react';
import Autocomplete from './Autocomplete';

let InputAutocomplete = (props) => {
    return (
        <div >
            <label htmlFor={props.contentType}>{props.label}</label>
            <Autocomplete {...props} />
        </div>
    )
}

export default InputAutocomplete;