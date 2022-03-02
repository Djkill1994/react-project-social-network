import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
  id: number | null
  name: string | null
}

const DialogItem: React.FC<PropsType> = (props) =>{
    let pach = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={pach} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem
