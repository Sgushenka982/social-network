import Messages from './Messages';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

const mapStateToProps=(state)=>{
    return{
        state:state.messagesPage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSendMessageClick:()=>{
            dispatch(sendMessageCreator())
        },
        onNewMessageChange:(e)=>{
            let body = e.target.value
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
    )(Messages);