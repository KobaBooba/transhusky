'use client'
import React from 'react';
import Sobre from '@/components/sobre-nosotros';
import Servicios from '@/components/servicios';
import Footer from '@/components/footer';
import { Button } from '@headlessui/react';
import Link from 'next/link';
import fondo from '../../public/fondo.jpg';
import Image from 'next/image';
import fondo2 from '../../public/fondo.png';
import Metodos from '@/components/metodos';
import Header from '@/components/header';




const HomePage = () => {
  return (
    <div className="bg-blanco min-h-screen flex flex-col w-full">
      <div className="relative h-[690px]"> 
        <Image 
          src={fondo} 
          alt="Imagen de fondo" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="relative z-10 bg-black bg-opacity-50 h-full flex flex-col">
          <Header />
          <main className="flex flex-col flex-grow justify-center text-left  md:pl-12">
            <section className="w-full max-w-6xl mx-auto">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-custom">Transhusky</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 font-custom1">En medio de la dificultad, encontrarás la oportunidad</p>
              </div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    
              </div>
            </section>
          </main>
        </div>
      </div>
    
      <div className="relative z-0">
        <Image 
          src={fondo2} 
          alt="Imagen de fondo" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="relative z-10 text-center py-6">
          <Button className="text-white bg-slate-500 rounded-md py-3 px-4 w-auto mx-auto">
            <Link href="https://wa.me/573213141928?text=%C2%A1Hola!%0A%20%20Gracias%20por%20confiar%20en%20nosotros.%20Para%20darte%20una%20cotizaci%C3%B3n%20precisa%20o%20reservar%20tu%20transporte%20privado,%20por%20favor%20completa%20la%20siguiente%20informaci%C3%B3n:%20%20%20%20%0A%20%20%20Destino:%0A%20%20%20Punto%20de%20Recogida:%0A%20%20%20Fecha%20y%20Hora%20de%20Ida:%0A%20%20%20Fecha%20y%20Hora%20de%20Regreso%20(si%20aplica):%0A%20%20%20N%C3%BAmero%20de%20Pasajeros:%0A%0ATranshusky%20%F0%9F%90%BE">Reserva ya!</Link>
          </Button>
          <Sobre />
          <hr className="my-8 border-t-2 border-gray-300 opacity-50" />
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-12 text-center text-negro font-custom">Servicios</h1>
          <Servicios />
          <hr className="my-8 border-t-2 border-gray-300 opacity-50" />
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-12 text-center text-negro font-custom">Empresas con las que trabajamos</h1>
          <Metodos />
        </div>
      </div>
      <Footer />
      <Button 
        onClick={() => window.location.href = 'https://wa.me/573213141928?text=%C2%A1Hola!%0A%20%20Gracias%20por%20confiar%20en%20nosotros.%20Para%20darte%20una%20cotizaci%C3%B3n%20precisa%20o%20reservar%20tu%20transporte%20privado,%20por%20favor%20completa%20la%20siguiente%20informaci%C3%B3n:%20%20%20%20%0A%20%20%20Destino:%0A%20%20%20Punto%20de%20Recogida:%0A%20%20%20Fecha%20y%20Hora%20de%20Ida:%0A%20%20%20Fecha%20y%20Hora%20de%20Regreso%20(si%20aplica):%0A%20%20%20N%C3%BAmero%20de%20Pasajeros:%0A%0ATranshusky%20%F0%9F%90%BE'}
        className="text-white bg-slate-500 rounded-md py-3 px-4 w-auto mx-auto">
        Reserva ya!
      </Button>
    </div>
  );
};

export default HomePage;
