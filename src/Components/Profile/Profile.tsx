import avatar from '../../assets/images/avatar.png';
import './Profile.scss'
import { TypingText } from '../TypingText/TypingText';
import burger from '../../assets/images/burger.svg';
import close from '../../assets/images/close.svg';
import { useToggleMenuStore } from '../../store/useToggleMenuStore';
export const Profile = () => {
	const {toggleMenu, menuOpen} = useToggleMenuStore();
	return (
		<div className="profile">
			<div className="profile__container">
				<img src={avatar} alt="avatar" />
				<div className='profile__content'>
					<p className='profile__name'>Марк Игнатьев</p>
					<TypingText />
				</div>
			</div>
			<button className="profile__burger" onClick={toggleMenu}><img width={16} height={13} src={menuOpen ? close : burger} alt="menu" /></button>
		</div>
	);
}