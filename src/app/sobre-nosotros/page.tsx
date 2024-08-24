import React from 'react';
import Image from "next/image"
 import fondo from "../../../public/fondo.png"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Header from '@/components/header';
interface SobreProps {
  id?: string; // Propiedad opcional para el id
}

const Sobre: React.FC<SobreProps> = ({ id }) => {
  return (
    <div className="relative h-screen ">
    <Image fill={true} src={fondo} alt="Image" className="absolute inset-0 w-full h-full object-cover z-" />
    <Header/>

  </div>
  );
};

export default Sobre;
