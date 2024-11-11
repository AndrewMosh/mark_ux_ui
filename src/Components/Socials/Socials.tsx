import { SocialsData } from "../../utils/SocialsData";
import "./Socials.scss";

export const Socials = () => {
    return (
        <div className="socials">
            {SocialsData.map((item, index) => (
                <a
                    key={item.title}
                    className="socials__link"
                    href={item.link}
                    target={item.title !== "email" ? "_blank" : "_self"}
                    download={item.download}
                >
                    <button className="socials__item" key={index}>
                        <img className="socials__img" src={item.img} alt={item.title} />
                    </button>
                </a>
            ))}
        </div>
    );
};
