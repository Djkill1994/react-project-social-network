import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}
                                                                            avatar={d.avatar}/>);
    let messagesElements = state.messageData.map(m => <Messages message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputMessage}>
                    <div>
                    <textarea ref={newMessageElement}
                              onChange={onMessageChange}
                              value={newMessageBody}
                              placeholder={'Enter Your Text  Post'}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs