// import Player from "../Player/Player";
import DateTime from "../DateTime/DateTime";
import "./MediaInfoPlayer.scss";
import { useTitleStore } from "../../store/useTitleStore";
import { useLocation } from "react-router-dom";

export const MediaInfoPlayer = () => {
  const { activeTitle } = useTitleStore();
  const location = useLocation();
  
  // Список маршрутов, где activeTitle должен отображаться
  const routesWithTitle = ["/about", "/portfolio", "/clients"]; // Пример маршрутов

  // Проверяем, если текущий маршрут должен показывать заголовок
  const showTitle = routesWithTitle.includes(location.pathname);
  const mainComponent = ['/'].includes(location.pathname);

  return (
    <div className="media-info-player" style={{justifyContent: mainComponent ? "flex-end" : "space-between"}}>
      {showTitle && (
        <h1 className="media-info-player__title">
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


