import "./Sidebar.scss";
import { Profile } from "../Profile/Profile";
import { Menu } from "../Menu/Menu";
import { Button } from "../Button/Button";
import { Socials } from "../Socials/Socials";
import { Link } from "react-router-dom";
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
					<Link className="sidebar__copyright" to=''>© Copyright 2024</Link>
                </div>
            </div>
        </div>
    );
};
