import React, { useState, useEffect } from "react";
import "./DateTime.scss";
import { Schedule } from "../../utils/Schedule";

const DateTime: React.FC = () => {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [showSchedule, setShowSchedule] = useState<boolean>(false); // Состояние для управления видимостью расписания
	

    useEffect(() => {
        // Функция для обновления времени и даты
        const updateTimeAndDate = () => {
            const currentDate = new Date();

            // Форматирование времени (HH:mm)
            const formattedTime = currentDate.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
            });

            // Форматирование даты (dd MMMM)
            const formattedDate = currentDate.toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
            });

            setTime(formattedTime);
            setDate(formattedDate);
        };

        // Первоначальная установка времени и даты
        updateTimeAndDate();

        // Обновляем каждую минуту
        const intervalId = setInterval(updateTimeAndDate, 60000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    // Обработчики наведения и убирания курсора
    const handleMouseEnter = () => {
        setShowSchedule(true);
    };

    const handleMouseLeave = () => {
        setShowSchedule(false);
    };

    return (
        <div className="schedule" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="schedule__date-time">
                <p>
                    {time} <span className="schedule__timezone">MSK</span>
                </p>
                <p>{date}</p>
			
            </div>

            {/* Окошко с расписанием */}
			<div className={`${showSchedule ? "schedule--visible" : "schedule--hidden"}`}>
                <ul className="schedule__list">
                    {Schedule.map((item, index) => (
                        <li className="schedule__item" key={index}>
                            <p className="schedule__day">{item.day}</p>
                            <p className="schedule__time">{item.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
          
        </div>
    );
};

export default DateTime;
