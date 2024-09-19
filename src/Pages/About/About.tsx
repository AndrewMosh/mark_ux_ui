import React, { useEffect } from "react";
import { blocks } from "../../utils/AboutBlocks.tsx";
import "./About.scss";
import { useTitleStore } from "../../store/useTitleStore";
import mark1 from "../../assets/mark1.png";
import mark2 from "../../assets/mark2.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.ts";

export const About: React.FC = () => {
    const { setActiveTitle } = useTitleStore();

    // Используйте хук для отслеживания видимости элементов
    const entries = useIntersectionObserver({
        root: null,
        rootMargin: "0px",
        threshold: 1.0, // Настройте порог видимости по вашему усмотрению
    });

    useEffect(() => {
        // Определяем первый видимый заголовок и обновляем состояние
        const visibleTitles = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.getAttribute("data-id") || "");

        // Находим заголовок по id
        const activeTitle = blocks.find((block) => block.id === visibleTitles[0])?.title || "";

        if (activeTitle) {
            setActiveTitle(activeTitle);
        }
    }, [entries, setActiveTitle]);

    return (
        <div className="about">
			<div className="about__images">
                                <img src={mark1} alt="Mark" />
                                <img src={mark2} alt="Mark" />
                            </div>
            <div className="about__container">
                {blocks.map((block) => (
                    <div className="about__block" key={block.id} id={block.id}>
                        {block.id !== "1" && <h2 className="about__title">{block.title}</h2>}
                        <p className="about__text">{block.text}</p>
                        <div className="end" data-id={block.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};
