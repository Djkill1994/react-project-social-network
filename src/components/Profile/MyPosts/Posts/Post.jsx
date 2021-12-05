import s from './Post.module.css'


const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src='https://avatarko.ru/img/kartinka/14/multfilm_Futurama_Bender_13773.jpg'/>
                    {props.message}
                    <div>
                        <span>Like</span> {props.likesCount}
                    </div>
                </div>
    );
}

export default Post