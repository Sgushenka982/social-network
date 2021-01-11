import { connect } from 'react-redux';
import { setObject, resetValue,setIndexValue } from '../../../Redux/testFias-reducer'
import InputAutocomplete from './InputAutocomplete';
import React from 'react';

class TestContainer extends React.Component {
    setIndexValue =(event)=>{
        this.props.setIndexValue(event.target.value)
    }
    render() {
        let sorted = Object.entries(this.props.adress)
            .map(entry => ({ [entry[0]]: entry[1] }))
            .map(el =>
                <InputAutocomplete
                    {...el[Object.keys(el)]}
                    setObject={this.props.setObject}
                    adress={this.props.adress}
                />
            )

        return (
            <div className='testContainer'>
                {sorted}
                <div className='wrapperPostIndex'>
                    <label htmlFor='postIndex' className='labelPostIndex'>Индекс</label>
                    <input type='text' id='postIndex' value={this.props.index} onChange={this.setIndexValue}/>
                </div>
                <button type='button' className='btn-reset' onClick={this.props.resetValue}>Очистить форму</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        adress: state.testPage.adress,
        index: state.testPage.post_Index
    }
}

export default connect(mapStateToProps, { setObject, resetValue,setIndexValue })(TestContainer);
