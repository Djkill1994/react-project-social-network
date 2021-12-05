import s from './Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";


const DialogItem = (props) =>{
    let pach = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={pach}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) =>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogData = [
        {id: 1, name:'Vlad'},
        {id: 2, name:'Hristina'},
        {id: 3, name:'Kirill'},
        {id: 4, name:'Matvei'},
    ];

    let messageData = [
        {message: 'Hi'},
        {message: 'Hello World'},
        {message: 'React it`s cool'},
        {message: 'Yo'},
    ];

    let dialogsElements = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messageData.map(m => <Messages message={m.message}/> );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs