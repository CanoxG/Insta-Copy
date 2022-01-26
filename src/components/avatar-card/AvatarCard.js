import './AvatarCard.css';
import Avatar from '../avatar/Avatar';
import AvatarName from '../avatar-names/Name';
import Button from '../buttoms/Buttom'
import AvatarProfile from '../../1550393094_Yen Noir 2 by Bomyman.JPG'


export default function AvatarCard({ size = 'lg', align = 'baseline', position = 'cardText', color = 'blue', src = AvatarProfile }) {

    return (
        <div className='card'>
            <Avatar size={size} src={src} />
            <AvatarName align={align} position={position}>
                <div>cguven</div>
                <div>Can GUVEN</div>
            </AvatarName>
            <Button color={color}>
                Switch
            </Button>
        </div>
    )
}