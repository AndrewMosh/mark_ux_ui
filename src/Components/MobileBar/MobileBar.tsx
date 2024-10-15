import { useShowSchedule } from "../../store/useShowSchedule";
import { useToggleMenuStore } from "../../store/useToggleMenuStore";
import DateTime from "../DateTime/DateTime";
import { Menu } from "../Menu/Menu";
import { Profile } from "../Profile/Profile";
import "./MobileBar.scss";

export const MobileBar = () => {
    const { menuOpen } = useToggleMenuStore();
	const {showSchedule}=useShowSchedule();

    return (
        <div className="mobile-bar">
            <div className="mobile-bar__container">
				<div className="mobile-bar__wrapper">
                <Profile />
				</div>
                {menuOpen && (
					<>
					<div className="mobile-bar__wrapper" style={{alignSelf:!showSchedule?'flex-start':''}}>
						<DateTime/>
					</div>
                    <div className="mobile-bar__wrapper">	
                        <Menu />
                    </div>
					</>
                )}
            </div>
        </div>
    );
};
