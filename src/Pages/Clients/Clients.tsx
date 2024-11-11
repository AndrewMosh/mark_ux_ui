import { useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useTitleStore } from "../../store/useTitleStore";
import "./Clients.scss";
import { ClientsData } from "../../utils/ClientsData";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../hooks/useFadeIn";

export const Clients = () => {
    const { setActiveTitle, setIsScrolled, setIsBlurring,activeTitle } = useTitleStore();
	const fadeInStyle = useFadeIn(100, 800); // 100 ms задержка, 800 ms длительность

	const handleScroll = () => {
		const position = window.pageYOffset;
		setIsScrolled(position > 100);
	  };

	  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsScrolled]);

    const services = ClientsData[0];
    const principles = ClientsData[1];
    const process = ClientsData[2];
    const clients = ClientsData[3];
    const letstart = ClientsData[4];

    // Используйте хук для отслеживания видимости элементов
    const entries = useIntersectionObserver({
        root: null,
        rootMargin: "-30px",
        threshold: 1.0, // Настройте порог видимости по вашему усмотрению
    });

    useEffect(() => {
        // Определяем первый видимый заголовок и обновляем состояние
        const visibleTitles = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.getAttribute("data-id") || "");

        // Находим заголовок по id
        const activeTitle = ClientsData.find((block) => block.id === visibleTitles[0])?.title || "Клиентам";

        if (activeTitle) {
            setActiveTitle(activeTitle);
        }
    }, [entries, setActiveTitle]);

	useEffect(() => {
		setIsBlurring(true);
		setTimeout(() => {
			setIsBlurring(false);
		}, 1000);
	}, [activeTitle, setIsBlurring]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    return (
        <div className="clients">
            <div className="clients__container" style={fadeInStyle}>
                <h2 className="clients__title">{services.subtitle}</h2>
                <div className="clients__services">
                    {services?.services?.map((service, index) => (
                        <div className="clients__service" key={index} id={services.id}>
                            <h3 className="clients__subtitle" style={{ padding: "0" }}>
                                {service.title}
                            </h3>
                            {/* <img src={service.img} alt='' /> */}
                            <div className="end" data-id={services.id} />
                        </div>
                    ))}
                </div>
                <h2 className="clients__title">{principles.title}</h2>
                <div className="clients__principles-container">
                    {principles?.content?.map((el, index) => (
                        <div key={index} id={principles.id}>
                            {typeof el === "string" ? (
                                <p>{el}</p>
                            ) : (
                                <div className="clients__principles">
                                    <h3 className="clients__subtitle">{el.title}</h3>
                                    <p className="clients__text">{el.text}</p>
                                </div>
                            )}
                            <div className="end" data-id={principles.id} />
                        </div>
                    ))}
                </div>
                <h2 className="clients__title">{process.title}</h2>
                <div className="clients__process-container">
                    {process?.content?.map((el, index) => (
                        <div key={index} id={process.id}>
                            {typeof el === "string" ? (
                                <p>{el}</p>
                            ) : (
                                <div className="clients__process">
                                    <h3 className="clients__subtitle">{el.title}</h3>
                                    <p className="clients__text">{el.text}</p>
                                </div>
                            )}
                            <div className="end" data-id={process.id} />
                        </div>
                    ))}
                </div>
                <h2 className="clients__title">{clients.title}</h2>
                <div className="clients__clients-container">
                    {clients?.content?.map((el, index) => (
                        <div className="clients__clients" key={index} id={clients.id}>
                            {typeof el === "string" && (
                                <div className="clients__img">
                                    <img src={el} alt="client" />
                                </div>
                            )}

                            <div className="end" data-id={clients.id} />
                        </div>
                    ))}
                </div>
                <h2 className="clients__title">{letstart.title}</h2>
                <div className="clients__letstart-container">
                    {letstart?.content?.map((el, index) => (
						<>
                        <div key={index} id={letstart.id} className={`clients__letstart clients__card${index+1}`} >
                            {typeof el === "string" ? (
                                <p>{el}</p>
                            ) : (
                                <>
								<div> 
                                    <h3 className="clients__subtitle">{el.title}</h3>
									<div className="clients__size">{el.size}</div>
									</div>
                                    <Link className={index===2?' clients__link clients__link--down':'clients__link'} to={el.link ?? ""} download={el.title}>
                                        <img src={el.img} alt="" />
                                    </Link>
                                </>
                            )}
                            
                        </div>
						<div className="end" data-id={letstart.id} />
						</>
                    ))}
                </div>
            </div>
        </div>
    );
};
