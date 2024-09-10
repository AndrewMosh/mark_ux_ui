import { Link } from "react-router-dom"
import "./Menu.scss"
import { MenuData } from "../../utils/MenuData"
export const Menu = () => {
	return (
		<div className="menu">
		{MenuData.map((item, index) => (
			<button className="menu__item" key={index}>
				<Link className="menu__link" to={item.link}>
					<img className="menu__img" src={item.img} alt={item.title} />
					<p className="menu__title">{item.title}</p>
				</Link>
			</button>
		))}
	</div>)
}