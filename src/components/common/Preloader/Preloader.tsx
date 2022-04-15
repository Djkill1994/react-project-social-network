import preloader from '../../../assets/Image/Preloader.svg'
import React from "react";
import s from "./Preloader.module.css"

type PropsType = {}

let Preloader: React.FC<PropsType> = (props) => {
    return <div className={s.preloaderWrapper}>
        <img alt="Preloader" src={preloader} className={s.preloader}/>
    </div>
}

export default Preloader
