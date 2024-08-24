'use client';
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import fondo2 from '../../../public/fondo.png';
import TourCard from '@/components/tour';
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
    description: ' Iglesia subterránea en una mina de sal',
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
    title: 'Monseratte',
    description: 'Explora el histórico barrio de Bogotá.',
    details: 'Información detallada sobre La Candelaria.',
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export function Toures() {
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
            <TourCard
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

      {/* Botón para volver arriba */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-slate-500 p-3 rounded-full shadow-lg text-white hover:bg-slate-600 transition">
        ↑
      </button>
    </div>
  );
}

export default Toures;
