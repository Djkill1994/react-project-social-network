import preloader from '../../../assets/Image/Preloader.svg'
import React from "react";

type PropsType = {

}

let Preloader: React.FC<PropsType> = (props) => {
    return <div style={{background: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader
