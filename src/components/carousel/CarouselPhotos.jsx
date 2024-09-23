"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { TitleSection } from '../titleSection/page';

export default function CarouselPhotos() {
  const images = [
    { id: 1, imageSrc: '/images/tattos/1.jpg' },
    { id: 2, imageSrc: '/images/tattos/2.jpg' },
    { id: 3, imageSrc: '/images/tattos/3.jpg' },
    { id: 4, imageSrc: '/images/tattos/4.jpg' },
    { id: 5, imageSrc: '/images/tattos/5.jpg' },
    { id: 6, imageSrc: '/images/tattos/6.jpg' },
    { id: 7, imageSrc: '/images/tattos/7.jpg' },
    { id: 8, imageSrc: '/images/tattos/8.jpg' },
    { id: 9, imageSrc: '/images/tattos/9.jpg' },
    { id: 10, imageSrc: '/images/tattos/10.jpg' },
    { id: 11, imageSrc: '/images/tattos/11.jpg' },
    { id: 12, imageSrc: '/images/tattos/12.jpg' },
    { id: 13, imageSrc: '/images/tattos/13.jpg' },
    { id: 14, imageSrc: '/images/tattos/14.jpg' },
    { id: 15, imageSrc: '/images/tattos/15.jpg' },
    { id: 16, imageSrc: '/images/tattos/16.jpg' },
    { id: 17, imageSrc: '/images/tattos/17.jpg' },
    { id: 18, imageSrc: '/images/tattos/18.jpg' },
    { id: 19, imageSrc: '/images/tattos/19.jpg' },
    { id: 21, imageSrc: '/images/tattos/21.jpg' },
    { id: 22, imageSrc: '/images/tattos/1.jpg' },
    { id: 23, imageSrc: '/images/tattos/2.jpg' },
    { id: 24, imageSrc: '/images/tattos/3.jpg' },
    { id: 25, imageSrc: '/images/tattos/4.jpg' },
    { id: 26, imageSrc: '/images/tattos/5.jpg' },
    { id: 27, imageSrc: '/images/tattos/6.jpg' },
    { id: 28, imageSrc: '/images/tattos/7.jpg' },
    { id: 29, imageSrc: '/images/tattos/8.jpg' },
    { id: 30, imageSrc: '/images/tattos/9.jpg' },
    { id: 31, imageSrc: '/images/tattos/10.jpg' },
    { id: 32, imageSrc: '/images/tattos/11.jpg' },
    { id: 33, imageSrc: '/images/tattos/12.jpg' },
    { id: 34, imageSrc: '/images/tattos/13.jpg' },
    { id: 35, imageSrc: '/images/tattos/14.jpg' },
    { id: 37, imageSrc: '/images/tattos/15.jpg' },
    { id: 38, imageSrc: '/images/tattos/16.jpg' },
    { id: 39, imageSrc: '/images/tattos/17.jpg' },
    { id: 40, imageSrc: '/images/tattos/18.jpg' },
  ];

  const containerRef = useRef(null);

  const handleSwipeClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="" id="gallery">
      <TitleSection
        title="Lara Amada's Signature Tattoos"
        subtitle="Explore a curated gallery showcasing my artistry and attention to detail. Each image captures the essence of my minimalist and delicate tattoo work, reflecting the satisfaction and unique beauty of the women I've had the pleasure to ink."
      />
      <div className="relative mt-12 sm:mt-18 max-w-7xl mx-auto px-4">
        <div className="relative">
          <div
            ref={containerRef}
            className="flex space-x-3 overflow-x-auto scrollbar-custom bg-pink-200"
          >
            {images.map((image) => (
              <div key={image.id} className="min-w-max flex-shrink-0">
                <div className="relative h-[28rem] w-[20rem]">
                  <Image
                    src={image.imageSrc}
                    alt="Tattoo Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:opacity-75"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            onClick={handleSwipeClick}
            className="flex-col-reverse text-gray-100 mt-4 text-right sm:hidden cursor-pointer"
          >
            Swipe
            <span aria-hidden="true"> &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
