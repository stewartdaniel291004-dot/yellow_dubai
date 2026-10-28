import React from 'react';
import Image from 'next/image';
import './Banner.css';
import logoyellow from '../../public/yellow-dubai.png';
import GetButton from '../Header/GetStarted';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
    <div className="banner-section">
    <div className="banner-container">
      <div className="banner-left-box">
        <motion.h3 className="buttonpro" initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0}}><span>Partner With Us</span></motion.h3>
       <motion.div className='logo-b-box' initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0}}><Image src={logoyellow} alt="Yellow Dubai Logo" /></motion.div> 
        <motion.h4 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.1}}>WE MAKE IT EASY <br/> TO BUILD TRUST.</motion.h4>
        <GetButton title="Book a Demo" />
      </div>
      <div className="banner-right-box">
        <motion.div className="image-box-tree" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.3,delay:0}}>
        <Image src="/banner-right.svg" alt="Dubai Banner" width={720} height={405} />
        </motion.div>
        <motion.div className="brand-info digital-pr" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.3,delay:0.6}}><div
    role="alert"
    className="custom-alert" 
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="custom-pt">
      Digital PR
    </p>
      </div>
      </motion.div>
        <motion.div className="brand-info pod-personal" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.3,delay:0.2}}><div
    role="alert"
    className="custom-alert"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="custom-pt">
    Podcast & Personal Branding
    </p>
      </div>
      </motion.div>
        <motion.div className="brand-info software-solu" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.3,delay:0.4}}><div
    role="alert"
    className="custom-alert"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="custom-pt">
    Software Solutions
    </p>
      </div>
      </motion.div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Banner;
