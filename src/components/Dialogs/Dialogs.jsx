import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messageData.map(m => <Messages message={m.message}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                              value={props.dialogsPage.newMessageText}/>
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