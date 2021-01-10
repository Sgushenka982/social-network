import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    let onSendMessageClick = () => {    
          
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        props.onNewMessageChange(e);
       
    }
    let newMessageBody = props.state.newMessageBody;
    let activeDialogElement = props.state.messeges1.map(m => <p key={m.id} id={m.id}>{m.message}</p>)
    let dialogsElement = props.state.dialogs.map(d =>
        <div key={d.id} className={s.dialogs} id={d.id}>
            <img className={s.profileImg} src="http://demo.holathemes.com/simplest-html/assets/images/avatars/avatar-5.jpg" alt='img' />
            <p className={s.name}>{d.name}</p>
            <div className={s.lastmessage}>{d.lastmessage}</div>
        </div>
    );

    return (
        <div className={s.content}>
            {dialogsElement}
            <div>
                <div>
                    <input
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        type='text'
                        placeholder='enter your message' />
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
            {activeDialogElement}
        </div>
    )
}
export default Messages;