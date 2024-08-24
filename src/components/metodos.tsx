import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const navigation = [
  { name: 'Falabella', img: 'https://sharex.host/Vtm8AP4ACd.png?key=hLpwFF4eAkGePA' },
  { name: 'Argos', img: 'https://sharex.host/Md6UZe6Gii.png?key=gkVXcidLSND3p7' },
  { name: 'Teleperformance', img: 'https://sharex.host/EvWXB8ojNf.png?key=oQwfO6W3P2DIB8' },
  { name: 'Terpel', img: 'https://sharex.host/4cH4NYZVum.png?key=tqdAx1xGRdJWY8' },
  { name: 'club', img: 'https://sharex.host/6qRbsZGAqj.png?key=rOmmrHmyxuCFdf' },


];

export default function Metodos() {
  return (
    <div className="flex justify-center w-full px-4">
      {/* Contenedor del carrusel centrado */}
      <div className="w-full max-w-lg mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 7000,
            }),
          ]}
        >
          <CarouselContent>
            {navigation.map((item, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="p-2">
                  <Card>
                    <CardContent className="flex items-center justify-center p-4">
                      <div className="w-full h-32 sm:h-48 lg:h-64 flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-auto h-full max-w-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
