import React, { useEffect, useState } from "react";
import { blocks } from "../../utils/AboutBlocks.tsx";
import "./About.scss";
import { useTitleStore } from "../../store/useTitleStore";
import mark1 from "../../assets/images/mark1.png";
import mark2 from "../../assets/images/mark2.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.ts";
import { useFadeIn } from "../../hooks/useFadeIn.tsx";

export const About: React.FC = () => {
    const { setActiveTitle, setIsScrolled } = useTitleStore();
    const route = location.pathname;
    const fadeInStyle = useFadeIn(100, 800); // 100 ms задержка, 800 ms длительность
    const [image1, setImage1] = useState<string | null>(null);
    const [image2, setImage2] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setIsScrolled(position > 100);
    };

	  useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          };
      }, [setIsScrolled]);


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

        if (activeTitle && route === "/about") {
            setActiveTitle(activeTitle);
        } else {
			setActiveTitle("");
		}
    }, [entries, setActiveTitle, route]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Состояние загрузки

    useEffect(() => {
        // Функция для асинхронной загрузки изображения
        const loadImage = (src: string) => {
            return new Promise<string>((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            });
        };

        // Загружаем изображения
        const loadImages = async () => {
            try {
                const img1 = await loadImage(mark1);
                const img2 = await loadImage(mark2);
                setImage1(img1);
                setImage2(img2);
                setLoading(false); // Устанавливаем загрузку в false, когда изображения загружены
            } catch (error) {
                console.error(error);
                setLoading(false); // Устанавливаем загрузку в false даже при ошибке
            }
        };

        loadImages();
    }, []);

    if (loading) {
        return <div className="loading">Загрузка...</div>; // Показать индикатор загрузки
    }


    return (
        <div className="about">
			<div className="about__images" style={fadeInStyle}>
			{image1 && <img src={image1} alt="Mark 1" />}
			{image2 && <img src={image2} alt="Mark 2" />}
								<div className="end" data-id={blocks[0].id} />
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
