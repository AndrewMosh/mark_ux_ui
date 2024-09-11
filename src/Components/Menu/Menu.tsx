import { Link } from "react-router-dom";
import "./Menu.scss";
import { MenuData } from "../../utils/MenuData";
import { useState } from "react";

export const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="menu">
      {MenuData.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className='menu__item'
          onClick={() => setActiveIndex(index)}
        >
          <button   className={`menu__button ${activeIndex === index ? "menu__button--active" : ""}`}>
            <img className="menu__img" src={item.img} alt={item.title} />
            <p className="menu__title">{item.title}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};
