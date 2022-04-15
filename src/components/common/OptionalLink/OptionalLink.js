import falseIcon from '../../../assets/Image/iconSocialNetwork/falseIcon.png'

export const OptionalLink = ({link, title, s}) => {
    return <div className={s}>{title}: {link || <img alt="False" src={falseIcon}/>} </div>
}