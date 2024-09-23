import React, { useEffect } from 'react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { PortfolioData } from '../../utils/PortfolioData';
import { useTitleStore } from '../../store/useTitleStore';
import './Portfolio.scss';
import { useFadeIn } from '../../hooks/useFadeIn';
import useAnimation from '../../hooks/useAnimation';


export const Portfolio: React.FC = () => {
  const { filteredPortfolio, setFilterType, filterPortfolio, filterType } = usePortfolioStore();
  const { setActiveTitle } = useTitleStore();
  const fadeInStyle = useFadeIn(100, 800); // 100 ms задержка, 800 ms длительность
  const [isAnimating, startAnimation] = useAnimation();

   // Используйте хук для отслеживания видимости элементов
   const entries = useIntersectionObserver({
	root: null,
	rootMargin: "0px",
	threshold: 1.0, // Настройте порог видимости по вашему усмотрению
});

useEffect(() => {
	const visibleTitles = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.getAttribute("data-id") || "");

	const activeTitle = PortfolioData.list.find((block) => block.id === visibleTitles[0])?.title || "Портфолио";

	if (activeTitle) {
		setActiveTitle(activeTitle);
	}
}, [entries, setActiveTitle]);

  const handleFilterChange = (type: string) => {
	startAnimation();
    setFilterType(type);
    filterPortfolio();
	
  };

  useEffect(() => {
    filterPortfolio(); // запуск фильтрации при первом рендере
	window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='portfolio'>
      <div className='portfolio__filter'> 
        <button className={filterType === 'all' ? 'portfolio__button portfolio__button--active' : 'portfolio__button'} onClick={() => handleFilterChange('all')}>Все</button>
        <button className={filterType === 'web' ? 'portfolio__button portfolio__button--active' : 'portfolio__button'}  onClick={() => handleFilterChange('web')}>Web</button>
        <button className={filterType === 'mobile' ? 'portfolio__button portfolio__button--active' : 'portfolio__button'}  onClick={() => handleFilterChange('mobile')}>Mobile</button>
      </div>

      <div className={`portfolio__list ${isAnimating ? "portfolio__fade" : ""}`}>
        {filteredPortfolio.map((item) => (
          <div className='portfolio__item' key={item.id} id={item.id} style={fadeInStyle}  >
            <img className='portfolio__img' src={item.img} alt={item.name} />
			<p className='portfolio__date'>{item.date}</p>
            <p className='portfolio__name'>{item.name}</p>
			<div className="end" data-id={item.id} />		
          </div>
        ))}
      </div>
    </div>
  );
};

