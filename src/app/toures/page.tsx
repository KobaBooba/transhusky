'use client';
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import fondo2 from '../../../public/fondo.png';
import TourComponent from '@/components/tour';
import Modal from '@/components/modal';

const tours = [
  {
    image: 'https://sharex.host/2eFcMoVutQ.png?key=jKtOtYy9zwKqJH',
    title: 'Jardín Botánico',
    description: 'Un oasis de biodiversidad en medio de la ciudad',
    details: 'Información detallada sobre el Jardín Botánico.',
  },
  {
    image: 'https://sharex.host/y7SUiJRA2u.png?key=UZEBn0wKVxtg1D',
    title: 'Museo del Oro',
    description: 'Explora el museo con la mayor colección de oro prehispánico.',
    details: 'Información detallada sobre el Museo del Oro.',
  },
  {
    image: 'https://sharex.host/RggBZB2Fy7.png?key=OhYszYAFG5Q9M4',
    title: 'Catedral de Sal',
    description: 'Iglesia subterránea en una mina de sal',
    details: 'La Catedral de Sal es un lugar de peregrinación y una maravilla de la ingeniería. Los visitantes pueden explorar sus capillas esculpidas en sal, así como disfrutar de la atmósfera única de este lugar. La catedral también alberga un museo y una serie de esculturas y altares elaborados en sal.',
  },
  {
    image: 'https://sharex.host/9Y4JjD8vxm.png?key=KPS0kP84kdQRh7',
    title: 'Villa de Leyva',
    description: 'Admira la belleza colonial y la arquitectura histórica.',
    details: 'Información detallada sobre Villa de Leyva.',
  },
  {
    image: 'https://sharex.host/ujYm9iJ3Bd.png?key=AZxOrJojTFfOek',
    title: 'La Candelaria',
    description: 'Explora el histórico barrio de Bogotá.',
    details: 'Información detallada sobre La Candelaria.',
  },
  {
    image: 'https://sharex.host/k7rRYNjMhL.jpg?key=EL5W8fqcl83LyN',
    title: 'Monserrate',
    description: 'Explora el histórico barrio de Bogotá.',
    details: 'Información detallada sobre Monserrate.',
  },
];

const Toures: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const handleClick = (details: string) => {
    setSelectedTour(details);
  };

  const handleClose = () => {
    setSelectedTour(null);
  };

  return (
    <div className="relative bg-blanco min-h-screen flex flex-col">
      {/* Imagen de fondo que cubre toda la pantalla */}
      <div className="absolute inset-0 z-0">
        <Image
          src={fondo2}
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Contenedor de contenido */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Contenedor para el fondo superior */}
        <div className="h-[300px] flex flex-col justify-center items-center">
          <Header />
          <h1 className="text-4xl md:text-6xl font-bold text-black font-custom text-center">Tours</h1>
        </div>
        <div className="flex flex-wrap gap-4 p-4 justify-center">
          {tours.map((tour, index) => (
            <TourComponent
              key={index}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              onClick={() => handleClick(tour.details)}
              details={''}
            />
          ))}
          <Modal isOpen={!!selectedTour} onClose={handleClose} details={selectedTour || ''} />
        </div>
        
        <div className="flex-grow"></div>

        <Footer />
      </div>

      <a 
        href="https://wa.me/573213141928?text=%C2%A1Hola!%0A%20%20Gracias%20por%20confiar%20en%20nosotros.%20Para%20darte%20una%20cotizaci%C3%B3n%20precisa%20o%20reservar%20tu%20transporte%20privado,%20por%20favor%20completa%20la%20siguiente%20informaci%C3%B3n:%20%20%20%20%0A%20%20%20Destino:%0A%20%20%20Punto%20de%20Recogida:%0A%20%20%20Fecha%20y%20Hora%20de%20Ida:%0A%20%20%20Fecha%20y%20Hora%20de%20Regreso%20(si%20aplica):%0A%20%20%20N%C3%BAmero%20de%20Pasajeros:%0A%0ATranshusky%20%F0%9F%90%BE" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
    </div>
  );
};

export default Toures;
