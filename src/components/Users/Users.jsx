import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/Image/pngegg.png'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [ ];

    for (let i=1;  i<=pagesCount; i++){
    pages.push(i);
    }
        return <div>
            <div className={style.selectedPageNumber}>
                { pages.map( p=>{
                    return <span className={props.currentPage === p && style.selectedPage}
                    onClick={(e) => {props.onPageChanged(p); }}>{p}</span>
                } )}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photoUrl} alt={'no img'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
                </div>)
            }
        </div>
}
export default Users