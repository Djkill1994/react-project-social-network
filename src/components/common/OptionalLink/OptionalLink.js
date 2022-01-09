import falseIcon from '../../../assets/Image/iconSocialNetwork/falseIcon.png'

export const OptionalLink = ({link, title}) => {
    return <div>{title}: {link || <img src={falseIcon}/>}</div>
}