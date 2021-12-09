import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    let Friends = props.Friends.map(f => <div className={s.friend}>{f.avatar} {f.name}</div>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                Friends
                <div className={s.friendsItem}>
                    {Friends}
                </div>
            </div>
        </nav>
    );
}

export default Navbar