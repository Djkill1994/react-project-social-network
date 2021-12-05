import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://st.depositphotos.com/1288156/4466/i/600/depositphotos_44660695-stock-photo-himalaya-mountains-black-and-white.jpg'}
                    alt={'no img'}/>
            </div>
            <div className={s.info}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo