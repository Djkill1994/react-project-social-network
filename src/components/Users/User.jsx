import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/Image/pngegg.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.photoUrl}
                             alt={'no img'}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }
                            }>UnFollow</button>

                            : <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }
                            }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
    </div>)
}
export default User