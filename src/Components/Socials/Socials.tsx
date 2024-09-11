import { Link } from "react-router-dom";
import { SocialsData } from "../../utils/SocialsData";
import "./Socials.scss";

export const Socials = () => {
    return (
        <div className="socials">
            {SocialsData.map((item, index) => (
                <Link key={index} className="socials__link" to={item.link}>
                    <button className="socials__item" key={index}>
                        <img className="socials__img" src={item.img} alt={item.title} />
                    </button>
                </Link>
            ))}
        </div>
    );
};
