import React from 'react';

interface TourComponentProps {
  image: string;
  title: string;
  description: string;
  details: string;
  onClick: () => void;
}

const TourComponent: React.FC<TourComponentProps> = ({ image, title, description, onClick, details }) => {
  return (
    <div
      className="relative w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white text-lg font-bold truncate">{title}</h3>
        <p className="text-white text-sm mt-2 truncate">{description}</p>
      </div>
    </div>
  );
};

export default TourComponent;
