'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    image: '/assets/hero1.jpg',
    title: 'FUSION',
    date: 'Feb 21 | 22 | 23',
    status: 'Event Ended',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    link: '/Events/fusion',
    buttonText: 'Know More',
  },
  {
    image: '/assets/hero2.jpg',
    title: 'INNOVATE',
    date: 'Mar 10 | 11',
    status: 'Coming Soon',
    description: 'Join us for tech talks, design sprints and startup ideation sessions with mentors from industry.',
    link: '/Events/innovate',
    buttonText: 'Discover',
  },
];

const Hero = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Slider */}
      <Slider {...settings} className="h-screen">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-screen w-full">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-100"
              priority={i === 0}
            />

            {/* Overlay content with animation */}
            <motion.div
              className="absolute top-[60%] left-8 md:top-[65%] md:left-20 z-10 max-w-4xl flex flex-col font-geist"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">{slide.title}</h1>

              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="bg-white/20 px-3 py-1 rounded">{slide.date}</span>
                <span className="bg-white/10 px-3 py-1 rounded text-red-400">{slide.status}</span>
              </div>

              <p className="text-lg text-gray-200 mb-6 max-w-xl">{slide.description}</p>

              <Link href={slide.link}>
                <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </Link>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Dots navigation above the orange polygon */}
      <div className="absolute top-[calc(100vh-220px)] w-full flex justify-center z-20">
        <div className="slick-dots">
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 right-0 z-20 w-full max-w-[850px]">
        <div
          className="bg-[#d2461c] text-white flex text-center font-poppins shadow-xl h-[180px]"
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
            padding: '2rem 2.5rem',
          }}
        >
          <div className="flex-1 border-r border-white/30 flex flex-col justify-center">
            <div className="text-[45px] font-bold leading-tight">9</div>
            <div className="text-[25px] tracking-wide">Societies</div>
          </div>
          <div className="flex-1 border-r border-white/30 flex flex-col justify-center">
            <div className="text-[45px] font-bold leading-tight">100+</div>
            <div className="text-[25px] tracking-wide">Volunteers</div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-[45px] font-bold leading-tight">300+</div>
            <div className="text-[25px] tracking-wide">Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
