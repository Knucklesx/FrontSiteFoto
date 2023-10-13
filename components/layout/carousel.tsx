'use client'

import { useState } from 'react';

export default function CarrouselPhotos() {
  const images = [
    'https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-35.jpg',
    'https://www.dailypaws.com/thmb/zAFc37YApCY0dbhcqi2gHlILxf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cardigan-welsh-corgi-in-park-1149127540-2000-6d031cf416db4e3292c9cd8800d719bc.jpg',
    'https://i.pinimg.com/originals/05/ca/d7/05cad708c6fbfdeec648bf21b9d1bc27.jpg',
    'https://wallpapers.com/images/hd/cute-corgi-pictures-klvh4ulq6nwlnc6c.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (event: any) => {
    const clickX = event.nativeEvent.offsetX;
    const imageWidth = event.target.clientWidth;
    if (clickX < imageWidth / 2) {
      handlePrevImage();
    } else {
      handleNextImage();
    }
  };

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover cursor-pointer"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        onClick={handleImageClick}
      />
    </div>
  );
}
