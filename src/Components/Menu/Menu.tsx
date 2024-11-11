import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";
import { MenuData } from "../../utils/MenuData";
import { useState, useEffect } from "react";
import { useToggleMenuStore } from "../../store/useToggleMenuStore";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export const Menu = () => {
    const location = useLocation(); // Получаем текущий роут
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { toggleMenu } = useToggleMenuStore();
    const { readMessage, newMessage } = usePortfolioStore();

    useEffect(() => {
        // При изменении роута обновляем активный элемент
        const currentIndex = MenuData.findIndex((item) => item.link === location.pathname);
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, [location]);

    return (
        <div className="menu">
            {MenuData.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className="menu__item"
                    onClick={() => {
                        setActiveIndex(index);
                        toggleMenu();
                        if (item.title === "Портфолио") readMessage();
                    }}
                >
                    <button className={`menu__button ${activeIndex === index ? "menu__button--active" : ""}`}>
                        <img className="menu__img" src={item.img} alt={item.title} />
                        <p className="menu__title">
                            {item.title}
                            {item.title === "Портфолио" && newMessage === "1" ? <span className="menu__unread">{newMessage}</span> : null}
                        </p>
                    </button>
                </Link>
            ))}
        </div>
    );
};
