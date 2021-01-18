import React from 'react';
import s from './Messages.module.css';
import SendMessageForm from "./sendMessageForm";

const Messages = (props) => {
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
                <SendMessageForm onSendMessageClick={props.onSendMessageClick} />
            </div>
            {activeDialogElement}
        </div>
    )
}
export default Messages;