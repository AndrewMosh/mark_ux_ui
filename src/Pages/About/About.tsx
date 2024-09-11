import React, { useEffect, useState, useRef } from 'react';
import { blocks } from '../../utils/AboutBlocks.tsx';
import './About.scss'


export const About: React.FC = () => {
	const [activeTitle, setActiveTitle] = useState<string | JSX.Element | undefined>(blocks[0].title);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Изменение заголовка при выходе элемента за пределы
          const id = entry.target.getAttribute('data-id');
          const block = blocks.find((block) => block.id === id);
          if (block) {
            setActiveTitle(block.title);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0, // Элемент должен быть полностью видимым
    });

    const endElements = document.querySelectorAll('.end');
    endElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className='about'>
      <div className='about__header'>
        <h2>{activeTitle}</h2>
      </div>

	  <div className='about__images'>
		<img src="/src/assets/mark1.png" alt="Mark" />
		<img src="/src/assets/mark2.png" alt="Mark" />
	  </div>

      <div>
        {blocks.map((block) => (
          <div key={block.id} id={block.id} >
            <h2>{block.id!=='1' && block.title}</h2>
            <p >{block.text}</p>
            <div className='end' data-id={block.id} /> 
          </div>
        ))}
      </div>
    </div>
  );
};
