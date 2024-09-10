import React, { useState, useEffect } from "react";
import "./TypingText.scss"; // Подключаем SCSS

const initialText = "UX/UI Дизайнер";
const randomTexts = ["Рад Вас видеть 👋", "Как настроение?", "Хорошего дня!"];

export const TypingText: React.FC = () => {
    const [text, setText] = useState(initialText);
    const [showTyping, setShowTyping] = useState(false);
    const [showText, setShowText] = useState(true);
    const [fade, setFade] = useState(true); // Для управления плавностью

    useEffect(() => {
        const initialTimeout = setTimeout(() => {
            setTimeout(() => {
                setShowText(false);
                setShowTyping(true);

                const typingTimeout = setTimeout(() => {
                    setShowTyping(false);
                    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
                    setText(randomText);
                    setFade(true); // Плавное появление текста
                    setShowText(true);

                    const randomTextTimeout = setTimeout(() => {
                        setFade(false); // Плавное исчезновение рандомного текста
                        setTimeout(() => {
                            setShowText(false);
                            const resetTextTimeout = setTimeout(() => {
                                setFade(true);
                                setText(initialText);
                                setShowText(true);
                            }, 1000);

                            return () => clearTimeout(resetTextTimeout);
                        }, 1000); // Задержка перед исчезновением текста

                        return () => clearTimeout(randomTextTimeout);
                    }, 5000);

                    return () => clearTimeout(typingTimeout);
                }, 2300);
            }, 1000); // Делаем задержку для анимации скрытия текста
        }, 10000);

        return () => clearTimeout(initialTimeout);
    }, [text]);

    return (
        <div className="dot-container">
            {!showText && showTyping ? (
                <>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="text">Печатает</div>
                </>
            ) : (
                <p className={`text ${fade ? "fade-in" : "fade-out"}`}>{text}</p>
            )}
        </div>
    );
};
