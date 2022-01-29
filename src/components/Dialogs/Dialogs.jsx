import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}
                                                                avatar={d.avatar}/>);
    let messagesElements = state.messageData.map(m => <Messages message={m.message}/>);
    // let newMessageBody = state.newMessageBody;
    // let newMessageElement = React.createRef();

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.inputMessage}>
            <div>
                <Field placeholder={'Enter Your Text'} name={'newMessageBody'}
                       component={TextArea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs