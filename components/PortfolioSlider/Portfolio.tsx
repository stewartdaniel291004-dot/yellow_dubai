"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./Portfolio.css";
import { motion } from "framer-motion";
import portfolioOne from "../../public/portfolio/p-1.jpg";
import portfolioTwo from "../../public/portfolio/p-2.jpg";
import portfolioThree from "../../public/portfolio/p-3.jpg";
import portfolioFour from "../../public/portfolio/p-4.jpg";

const portfolioData = [
  { id: 1, image: portfolioOne, title: "Project One" },
  { id: 2, image: portfolioTwo, title: "Project Two" },
  { id: 3, image: portfolioThree, title: "Project Three" },
  { id: 4, image: portfolioFour, title: "Project Four" },
];

const Portfolio = () => {


  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <div className="header-portfolio-box">
          <div className="header-portfolio-left">
            <motion.h3 className="buttonpro" initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0}}>
              <span>Portfolio</span>
            </motion.h3>
            <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.2}}>
              <span>Our Clients Are</span>
              <br />
              Inspiring Their Businesses
            </motion.h2>
          </div>
          <div className="header-portfolio-right">
      
          </div>
          <motion.p className="home-services-bg-text" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.4,delay:0.2}}>OURWORKS</motion.p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="portfolio-slider"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id} className="portfolio-slide">
              <div className="portfolio-box">
                <div className="portfolio-image-box">
                  <Image src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-text-box">
                  <h3>{item.title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
