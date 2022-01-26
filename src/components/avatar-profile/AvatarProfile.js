import './AvatarProfile.css'
import AvatarName from '../avatar-names/Name'
import Avatar from '../../it-chapter-two-4883x3848-clown-pennywise-2019-4k-18540.JPG'

export default function AvatarProfile({ size = 'lg', src = Avatar , name }) {

    return (

        <li className={`profile ${size}`}>
            <img className={`avatar ${size}`} src={src} alt='Profile Avatar' />
            <AvatarName>
                {name}
            </AvatarName>
        </li>

    )
}