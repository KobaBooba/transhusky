import { useState } from 'react';

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  details: string;
}

export default function TourCard  ({ image, title, description, onClick }: TourCardProps)  {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
      >
        <h3 className="text-white text-lg font-bold truncate">{title}</h3>
        {isHovered && (
          <div className="mt-2 text-white">
            <p className="text-sm mt-1">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

