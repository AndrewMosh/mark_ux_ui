import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTitleStore } from '../../store/useTitleStore';
import './Clients.scss'


export const Clients = () => {
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
		<div>
			<h1>Clients</h1>
		</div>
	);
}