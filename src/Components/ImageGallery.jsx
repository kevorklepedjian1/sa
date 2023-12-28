import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className="flex space-x-2 self-end justify-end">
      {images.map((src, index) => (
        // Each image in the gallery
        <img key={index} src={src} alt="" className="rounded-lg h-10 w-10" />
      ))}
    </div>
  );
}

export default ImageGallery;
