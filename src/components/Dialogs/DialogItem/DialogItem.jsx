import s from '../Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";


const DialogItem = (props) =>{
    let pach = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={pach} activeClassName={s.activeLink}>{props.avatar} {props.name}</NavLink>
        </div>
    );
}


export default DialogItem