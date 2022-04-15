import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InitialStateType} from "../../redux/dialogs-reducer";

const maxLength50 = maxLengthCreator(50)

const Dialogs: React.FC<OwnProps> = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messageData.map(m => <Messages message={m.message}/>);

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

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

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType,
    PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.inputMessage}>
            <div>
                {createField<NewMessageFormValuesKeysType>('Enter Your Text', 'newMessageBody', [required, maxLength50], TextArea)}
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs

type PropsType = {}
type OwnProps = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
export type NewMessageFormValuesType = {
    newMessageBody: string
}
export type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
