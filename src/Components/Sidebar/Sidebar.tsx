import "./Sidebar.scss";
import { Profile } from "../Profile/Profile";
import { Menu } from "../Menu/Menu";
import { Button } from "../Button/Button";
import { Socials } from "../Socials/Socials";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__wrapper">
                    <Profile />
                    <Menu />
                    <Button />
                </div>
                <div className="sidebar__wrapper">
                    <Socials />
                    <p className="sidebar__meta">Meta запрещенная в РФ организация</p>

                    <div className="tooltip-container"></div>
                    <Link
                        data-tooltip-id="my-tooltip-styles"
                        data-tooltip-content="Напишите мне, если хотите воспользоваться материалами сайта. Все права защищены."
                        className="sidebar__copyright"
                        to=""
                    >
                        © Copyright 2024
                    </Link>
                    <Tooltip id="my-tooltip-styles" className="example" place="top-start" offset={-10} delayShow={200} />
                </div>
            </div>
        </div>
    );
};
