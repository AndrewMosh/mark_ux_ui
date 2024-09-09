import React from "react";
import bg1 from "../assets/background1.svg";
import bg2 from "../assets/background2.svg";
import './EarthMapBackground.css'

const EarthMapBackground: React.FC = () => {
    return (
        <div className="background-container">
            <img className="img1" src={bg1} />
            <img className="img2" src={bg2} />
        </div>
    );
};

export default EarthMapBackground;
