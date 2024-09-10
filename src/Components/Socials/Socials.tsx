import { Link } from "react-router-dom"
import { SocialsData } from "../../utils/SocialsData"
import "./Socials.scss"

export const Socials = () => {
	return (
		<div className="socials">
			{SocialsData.map((item, index) => (
				<button className="socials__item" key={index}>
					<Link className="socials__link" to={item.link}>
						<img className="socials__img" src={item.img} alt={item.title} />
					</Link>
				</button>
			))}
		</div>
	)
}