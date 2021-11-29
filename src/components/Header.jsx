import logo from "../logoDJKILL.png";
import s from "./Header.module.css"


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt='no img'/>
        </header>);
}

export default Header