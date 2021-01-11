import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as axios from 'axios';
import theme from './theme.module.css';
import { connect } from 'react-redux'

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            suggestions: [],
            q: { query: '', limit: 10 }
        };
    }


    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = (value) => {
        // const inputValue = value.trim().toLowerCase();
        // const inputLength = inputValue.length;
        const object = this.props.suggestObject;

        if (object != null) {
            return object;
        } else {
            return []
        }
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    getSuggestionValue = suggestion => {
        this.props.test(this.props.func(suggestion))
        return (suggestion.name + ' ' + suggestion.type)
    };

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    )

    getObject = (parentObjectId, newValue, typeCode) => {
        const instance = axios.create({
            baseURL: 'http://192.168.108.102:8084/'
        });
        let query = encodeURI(newValue.trim().charAt(0).toUpperCase() + newValue.trim().slice(1) + '%');
        return instance.get(`fias?query=${query}&contentType=${this.props.contentType}&limit=${this.state.q.limit}&parentObjectId=${parentObjectId}&typeCode=${typeCode !== undefined ? typeCode : ''}`)
            .then(response => {
                this.props.setObject(response.data.result, this.props.contentType==='city'?this.props.name:this.props.contentType);
                this.onSuggestionsFetchRequested({ value: this.state.value })
            })
    }

    onChange = (event, { newValue }) => {
        this.props.test2( this.props.setValue(newValue, this.props.contentType==='city'?this.props.name:this.props.contentType))
        switch (this.props.contentType) {
            case 'region':
                this.getObject(0, newValue)
                return null
            case 'district':
                this.getObject(this.props.adress.region.object.id, newValue)
                return null
            case 'city':
                switch (this.props.name) {
                    case 'city':
                        if (this.props.adress.district.object !== '') {
                            this.getObject(this.props.adress.district.object.id, newValue, 1)
                        } else {
                            this.getObject(this.props.adress.region.object.id, newValue, 1)
                        }
                        return null
                    case 'settlement':
                        if (this.props.adress.city.object !== '') {
                            this.getObject(this.props.adress.city.object.id, newValue, 6)
                        } else {
                            this.getObject(this.props.adress.district.object.id, newValue, 6)
                        }
                        return null
                    case 'village':
                        if (this.props.adress.settlement.object !== '') {
                            this.getObject(this.props.adress.settlement.object.id, newValue, 4)
                        } else {
                            this.getObject(this.props.adress.city.object.id, newValue, 4)
                        }
                        return null
                    default:
                        return null
                }
            case 'street':
                if (this.props.adress.village.object !== '') {
                    this.getObject(this.props.adress.village.object.id, newValue)
                }else if(this.props.adress.settlement.object !== ''){
                    this.getObject(this.props.adress.settlement.object.id, newValue)
                }else if(this.props.adress.city.object !== ''){
                    this.getObject(this.props.adress.city.object.id, newValue)
                }
                return null
            case 'building':
                this.getObject(this.props.adress.street.object.id, newValue)
                return null
            case 'apartment':
                this.getObject(this.props.adress.building.object.id, newValue)
                return null
            default:
                return null
        }
    };


    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        console.log('AUTOCOMPLETE WAS RENDERED')
        let value = this.props.value
        const suggestions  = this.state.suggestions;
        // Autosuggest will pass through all these props to the input.    
        const inputProps = {
            value,
            onChange: this.onChange,
            id: this.props.contentType === 'city' ? this.props.name : this.props.contentType,
            readOnly: this.props.readonly

        };
        return (
            <Autosuggest
                theme={theme}
                suggestions={suggestions}
                renderSuggestion={this.renderSuggestion}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                inputProps={inputProps}
            />
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        test: (param) => dispatch(param),
        test2:(param)=>dispatch(param)
    }
}

export default connect(null, mapDispatchToProps)(Autocomplete)
