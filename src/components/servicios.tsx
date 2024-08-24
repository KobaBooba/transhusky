import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const navigation = [
  {
    name: 'Empresarial',
    content: 'Proporcionamos transporte cómodo y seguro para ti y tus empleados, asegurando puntualidad y seguridad en cada viaje.',
    img: "https://sharex.host/s96jyFv5cW.png?key=g16LO0KCHig6Zd"
  },
  {
    name: 'Personalizado',
    content: 'Descubre la comodidad y flexibilidad de nuestro servicio de transporte personalizado. Nos adaptamos a tus necesidades',
    img: "https://sharex.host/JLJjsR3Vns.png?key=FrdBXVHkq3UcFz"
  },
  {
    name: 'Compras/Mercancia',
    content: 'Te ayudamos durante tus compras y entregamos tus paquetes y documentos de manera rápida y segura.',
    img: "https://sharex.host/4RTbnjiFDM.png?key=n9INfnxl6AhKmX"
  },
  {
    name: 'Mascotas',
    content: 'Te ayudamos durante tus compras y entregamos tus paquetes y documentos de manera rápida y segura.',
    img: "https://sharex.host/iFzdwjWh9g.png?key=acwAobPvywt6ni"
  },
];

export default function CarouselSize() {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-3xl bg-transparent"
      >
        <CarouselContent className="flex space-x-4">
          {navigation.map((item, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-64">
              <Card className="bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto max-w-[200px] object-cover mb-4" // Tamaño de imagen más pequeño
                  />
                  <div className="w-full border-t-2 border-black mb-2"></div>
                  <span className="text-xl font-semibold">{item.name}</span>
                  <p className="text-center">{item.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
