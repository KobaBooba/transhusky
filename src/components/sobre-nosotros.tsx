'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const navigation = [
  { 
      img: "https://sharex.host/3si6DBpATh.png?key=rupwRZNh0WyVep"
  },
  { 
      img: "https://sharex.host/VtnAnGhX1y.png?key=ardoFhOJlIKI23"
  },
  { 
      img: "https://sharex.host/tA2CrAr7Xw.png?key=vYYdnW3zr45zmo"
  },
];



const Sobre = () => {
  return (
    <div>
      <div className="flex justify-center py-8 px-4 md:px-0">
        <div className="text-black p-6 rounded-lg shadow-lg max-w-4xl w-full border-emerald-50">
          <div className="flex flex-col md:flex-row items-start text-left">
            <div className="md:w-1/2 p-4">
              <h1 className="text-5xl font-bold mb-4 font-custom text-negro">QUIENES SOMOS</h1>
              <p className="text-black">
                Somos una empresa de servicios especial de transporte de personal y de turismo que ofrece a sus clientes una
                experiencia única de seguridad y confiabilidad a través de su trabajo ofreciendo una amplia y variada gama
                de oportunidades con vehículos propios y conductores altamente calificados, contribuyendo con el medio
                ambiente utilizando vehículos con tecnología de punta en normas ambientales y de emisión de gases.
              </p>
            </div>
            <div className="md:w-1/2 p-4 flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full max-w-3xl bg-transparent"
              >
                <CarouselContent className="flex space-x-4 bg-transparent">
                  {navigation.map((item, index) => (
                    <CarouselItem key={index} className="flex-shrink-0 w-full md:w-60 bg-transparent">
                      <Card className="bg-transparent">
                        <CardContent className="flex flex-col items-center justify-center p-4 bg-transparent">
                          <img
                            src={item.img}
                            alt={`Imagen ${index}`}
                            className="w-full h-auto object-cover md:w-[500px] md:h-40"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
