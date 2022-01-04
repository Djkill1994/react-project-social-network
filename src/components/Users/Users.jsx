import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Vlad',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3o8FrMr_MkWHpiLuDOr-13ZhTUAY6ijTz6Nh5dygapOo4ppn1gagOtS690zVlQMcFso&usqp=CAU',
                followed: true,
                status: 'Hello React',
                location: {
                    city: 'Slutsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                fullName: 'Christina',
                photoUrl: 'https://pristor.ru/wp-content/uploads/2018/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D1%80%D0%BE-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD-%D0%B2%D0%BE%D0%B4%D1%83-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-2018-11.jpg',
                followed: false,
                status: "I'm cool",
                location: {
                    city: 'Veseya',
                    country: 'Brazil'
                }
            },
            {
                id: 3,
                fullName: 'Kirill',
                photoUrl: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg',
                followed: true,
                status: 'Hi, i KIRILL',
                location: {
                    city: 'Miami',
                    country: 'USA'
                }
            },
            {
                id: 4,
                fullName: 'Matvei',
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                followed: false,
                status: 'Car mouse, Car mouse',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photoUrl}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users