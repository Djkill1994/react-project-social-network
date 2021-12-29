const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Vlad',
            avatar: <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3o8FrMr_MkWHpiLuDOr-13ZhTUAY6ijTz6Nh5dygapOo4ppn1gagOtS690zVlQMcFso&usqp=CAU'}/>,
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
            avatar: <img
                src={'https://pristor.ru/wp-content/uploads/2018/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D1%80%D0%BE-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD-%D0%B2%D0%BE%D0%B4%D1%83-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-2018-11.jpg'}/>,
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
            avatar: <img src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>,
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
            avatar: <img src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/>,
            followed: false,
            status: 'Car mouse, Car mouse',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
    ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;

    }


}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});

export default usersReducer