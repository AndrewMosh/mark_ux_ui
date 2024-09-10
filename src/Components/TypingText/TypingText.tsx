import React, { useState, useEffect } from "react";
import "./TypingText.scss"; // Подключаем SCSS

const initialText = "UX/UI Дизайнер";
const randomTexts = ["Рад Вас видеть 👋", "Как настроение?", "Хорошего дня!"];

export const TypingText: React.FC = () => {
    const [text, setText] = useState(initialText);
    const [showTyping, setShowTyping] = useState(false);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const initialTimeout = setTimeout(() => {
            setShowText(false);
            setShowTyping(true);

            const typingTimeout = setTimeout(() => {
                setShowTyping(false);
                const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
                setText(randomText);
                setShowText(true);

                const randomTextTimeout = setTimeout(() => {
                    setShowText(false);
                    setShowTyping(true);

                    const resetTextTimeout = setTimeout(() => {
                        setShowTyping(false);
                        setText(initialText);
                        setShowText(true);
                    }, 5000);

                    return () => clearTimeout(resetTextTimeout);
                }, 5000);

                return () => clearTimeout(randomTextTimeout);
            }, 2300);

            return () => clearTimeout(typingTimeout);
        }, 20000);

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
                <p className="text">{text}</p>
            )}
        </div>
    );
};
