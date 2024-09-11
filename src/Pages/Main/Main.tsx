import EarthMapBackground from "../../Components/EarthMapBackground/EarthMapBackground";
import { useFadeIn } from "../../hooks/useFadeIn";
import "./Main.scss";

export const Main = () => {
  const fadeInStyle = useFadeIn(100, 800); // 100 ms задержка, 800 ms длительность

  return (
    <div className="main">
      <EarthMapBackground />
      <div className="main__content" style={fadeInStyle}>
        <h1 className="main__title">
          Создаю <span>цифровые продукты</span> по всему миру
        </h1>
        <p className="main__text">
          Я Ваш любимый UX/UI дизайнер с более чем трехлетним опытом работы, развивающий свой собственный продукт для дизайнеров.
          За свою карьеру я работал с различными компаниями и стартапами в Америке и Европе, а так же крупными компаниями в Российской Федерации.
        </p>
      </div>
    </div>
  );
};
