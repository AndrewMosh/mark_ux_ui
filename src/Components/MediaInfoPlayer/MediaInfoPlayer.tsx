// import Player from "../Player/Player";
import DateTime from "../DateTime/DateTime";
import "./MediaInfoPlayer.scss";
import { useTitleStore } from "../../store/useTitleStore";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const MediaInfoPlayer = () => {
  const { activeTitle, isScrolled, setIsScrolled, isBlurring } = useTitleStore();
  const location = useLocation();
  
  // Список маршрутов, где activeTitle должен отображаться
  const routesWithTitle = ["/about", "/portfolio", "/clients"]; // Пример маршрутов

  // Проверяем, если текущий маршрут должен показывать заголовок
  const showTitle = routesWithTitle.includes(location.pathname);
  const mainComponent = ['/'].includes(location.pathname);

  const handleMainComponent =()=> {
	if (mainComponent) {
		setIsScrolled(false);
	}
  } 

  useEffect(() => {
	handleMainComponent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={`media-info-player ${isScrolled ? "media-info-player__scrolled" : ""}`} style={{justifyContent: mainComponent ? "flex-end" : "space-between"}}>
      {showTitle && (
        <h1 className={`media-info-player__title ${isBlurring ? "media-info-player__blur" : ""}`} style={{fontSize:isScrolled ? "28px" : "38px"}}>
          {activeTitle}
        </h1>
      )}
      <div className="media-info-player__wrapper">
        {/* <Player /> */}
        <DateTime />
      </div>
    </div>
  );
}


