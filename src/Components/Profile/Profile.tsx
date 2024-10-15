import avatar from '../../assets/images/avatar.png';
import './Profile.scss'
import { TypingText } from '../TypingText/TypingText';
import burger from '../../assets/images/burger.svg';
export const Profile = () => {
	return (
		<div className="profile">
			<div className="profile__container">
				<img src={avatar} alt="avatar" />
				<div className='profile__content'>
					<p className='profile__name'>Марк Игнатьев</p>
					<TypingText />
				</div>
			</div>
			<div className="profile__burger"><img src={burger} alt="menu" /></div>
		</div>
	);
}