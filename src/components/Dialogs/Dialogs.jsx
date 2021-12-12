import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messageData.map(m => <Messages message={m.message}/> );
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text)
        newMessageElement.current.value = '';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputMessage}>
                    <textarea ref={newMessageElement} />
                    <button onClick={addMessage}>
                        Add Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs