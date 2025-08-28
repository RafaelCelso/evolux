import React from 'react';

interface ClientsSliderProps {
  className?: string;
}

const ClientsSlider: React.FC<ClientsSliderProps> = ({ className = '' }) => {

  const clients = [
    { name: '123 Util', image: '/images/123_util.webp' },
    { name: 'Cromus', image: '/images/cromus.webp' },
    { name: 'Etilux', image: '/images/etilux.webp' },
    { name: 'Fullfit', image: '/images/fullfit.webp' },
    { name: 'Hauskraft', image: '/images/hauskraft.webp' },
    { name: 'Lyor', image: '/images/lyor.webp' },
    { name: 'Mabruk', image: '/images/mabruk.webp' },
    { name: 'Wellmix', image: '/images/wellmix.webp' },
    { name: 'Wolff', image: '/images/wolff.webp' },
  ];

  // Duplicar os clientes para criar o efeito infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={`py-12 bg-gray-50 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div 
            className="flex space-x-10 slider-animation"
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-36 h-22 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .slider-animation {
            animation: scroll 20s linear infinite;
          }
          
          @media (max-width: 768px) {
            .slider-animation {
              animation: scroll 12s linear infinite;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ClientsSlider;