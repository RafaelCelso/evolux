import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  step: string;
  title: string;
  description: string;
  icon?: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
  className?: string;
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ items, className = '' }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));
  const [activeStep, setActiveStep] = useState<number>(-1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Limpar timeout anterior se existir
        if (debounceRef.current) {
          clearTimeout(debounceRef.current);
        }
        
        // Debounce para evitar mudanças rápidas
        debounceRef.current = setTimeout(() => {
          // Encontrar qual item está mais visível no centro da tela
          let mostVisibleIndex = -1;
          let maxVisibility = 0;
          
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            
            // Atualizar visibilidade do item
            if (entry.isIntersecting) {
              setVisibleItems(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
              
              // Verificar se este é o item mais visível
              if (entry.intersectionRatio > maxVisibility) {
                maxVisibility = entry.intersectionRatio;
                mostVisibleIndex = index;
              }
            }
          });
          
          // Definir o activeStep baseado no item mais visível
           if (mostVisibleIndex >= 0 && maxVisibility > 0.5) {
             setActiveStep(mostVisibleIndex);
           }
        }, 100); // Debounce de 100ms
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Limpar timeout se existir
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Linha vertical da timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block">
        {/* Linha de progresso animada */}
        <div 
          className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-1000 ease-out"
          style={{
            height: activeStep >= 0 ? `${((activeStep + 1) / items.length) * 100}%` : '0%'
          }}
        />
      </div>

      {/* Timeline mobile - linha horizontal */}
      <div className="md:hidden relative">
        <div className="absolute top-8 left-0 w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
            style={{
              width: activeStep >= 0 ? `${((activeStep + 1) / items.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      <div className="space-y-12 md:space-y-24">
        {items.map((item, index) => {
          const isVisible = visibleItems[index];
          const isActive = activeStep >= index;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:justify-center`}
            >
              {/* Conteúdo do item */}
              <div
                className={`w-full md:w-5/12 transform transition-all duration-700 delay-${index * 100} ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                } ${
                  isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-gray-700'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Indicador de progresso */}
                  <div className={`mt-4 h-1 bg-gray-200 rounded-full overflow-hidden ${
                    isActive ? 'block' : 'hidden'
                  }`}>
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-full transform origin-left transition-transform duration-1000 ease-out" />
                  </div>
                </div>
              </div>

              {/* Círculo central com número */}
              <div className="relative z-10 flex items-center justify-center mb-4 md:mb-0">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl transition-all duration-500 transform ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-secondary scale-110 shadow-lg'
                      : 'bg-gray-400 scale-100'
                  }`}
                >
                  {item.step}
                </div>
                

              </div>

              {/* Espaçador para desktop */}
              <div className="hidden md:block w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTimeline;