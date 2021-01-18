import Messages from './Messages';
import { sendMessageCreator } from '../../../Redux/messages-reducer';
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
        onSendMessageClick:(newMessage)=>{
            dispatch(sendMessageCreator(newMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
    )(Messages);