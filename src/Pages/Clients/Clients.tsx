import { useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useTitleStore } from "../../store/useTitleStore";
import "./Clients.scss";
import { ClientsData } from "../../utils/ClientsData";

export const Clients = () => {
    const { setActiveTitle } = useTitleStore();

	const services=ClientsData[0]
	const principles = ClientsData[1]
	const process = ClientsData[2]

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
        const activeTitle = ClientsData.find((block) => block.id === visibleTitles[0])?.title || "";

        if (activeTitle) {
            setActiveTitle(activeTitle);
        }
    }, [entries, setActiveTitle]);
    return (
        <div className="clients">
            <div className="clients__container">
                <h2>{services.subtitle}</h2>
                {services?.services?.map((service, index) => (
                        <div className="clients__service" key={index} id={services.id}>
                            <h3>{service}</h3>
							<div className="end" data-id={services.id} />
                        </div>
                    ))}
					<h2>{principles.title}</h2>
					{principles?.content?.map((el, index) => (
                    <div className="clients__principles" key={index} id={principles.id}>
                        {typeof el === 'string' ? (
                            <p>{el}</p>
                        ) : (
                            <>
                                <h3>{el.title}</h3>
                                <p>{el.text}</p>
                            </>
                        )}
                        <div className="end" data-id={principles.id} />
                    </div>
                ))}
					<h2>{process.title}</h2>
					{process?.content?.map((el, index) => (
					<div className="clients__process" key={index} id={process.id}>
						{typeof el === 'string' ? (
							<p>{el}</p>	
						) : (
							<>
								<h3>{el.title}</h3>
								<p>{el.text}</p>
							</>	
		
						)}
						<div className="end" data-id={process.id} />
					</div>
					))}
            </div>
        </div>
    );
};
