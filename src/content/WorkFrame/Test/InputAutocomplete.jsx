import React from 'react';
import Autocomplete from './Autocomplete';
import {connect} from "react-redux";

let InputAutocomplete = (props) => {
    let reset=()=>{
        props.test3(props.resetFunc())
    }
    return (
        <div >
            <label htmlFor={props.contentType}>{props.label}</label>
            <div className="autocompleteContainer">
                <span className="close" onClick={reset}></span>
                <Autocomplete {...props} />
            </div>
        </div>
    )
}

let mapDispatchToProps=(dispatch)=>{
    return {
        test3:(param) => dispatch(param)
    }
}

export default connect(null,mapDispatchToProps)(InputAutocomplete);