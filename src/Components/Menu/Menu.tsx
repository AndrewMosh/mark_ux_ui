import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";
import { MenuData } from "../../utils/MenuData";
import { useState, useEffect } from "react";

export const Menu = () => {
  const location = useLocation(); // Получаем текущий роут
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // При изменении роута обновляем активный элемент
    const currentIndex = MenuData.findIndex(item => item.link === location.pathname);
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
          className='menu__item'
          onClick={() => setActiveIndex(index)}
        >
          <button
            className={`menu__button ${activeIndex === index ? "menu__button--active" : ""}`}
          >
            <img className="menu__img" src={item.img} alt={item.title} />
            <p className="menu__title">{item.title}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};

