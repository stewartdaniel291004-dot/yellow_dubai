"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";
import { Swiper as SwiperType } from "swiper";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TrendingUp, Target, Clock } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./globals.css";
import Typewriter from "typewriter-effect";
import Marquee from "../../components/marquee";

export default function Home() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("Dubai");

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
  };

  const countries = [
    "United Kingdom",
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "Saudi Arabia",
    "Kuwait",
    "The United Arab Emirates",
    "Qatar",
    "Bahrain",
    "Oman",
    "Canada",
    "New York",
    "Columbus",
    "Dallas",
    "Chicago",
    "San Antonio",
    "San Diego",
    "Los Angeles",
    "Austin",
    "Houston",
  ];
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavHidden(true);
      } else {
        // Scrolling up
        setIsNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  useEffect(() => {
    AOS.init({});
  }, []);
  // Define the state for the selected date
  const [date, setDate] = useState<Date | [Date, Date] | null>(null); // Use Date | [Date, Date] | null directly

  // Update the handler to match the expected types
  const handleChange = (
    value: Date | [Date, Date] | null,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // If value is not null, update the state
    setDate(value); // `value` is already of type `Date | [Date, Date] | null`
  };
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Allow `null` or `number` for state

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What industries do you specialize in for Digital PR?",
      answer:
        "We work with diverse industries, including technology, hospitality, retail, healthcare, and more, tailoring strategies to each sector's needs.",
    },
    {
      question: "How long does it take to see results with personal branding?",
      answer:
        "The timeline varies depending on your goals and strategies, but typically results can be observed within 3-6 months.",
    },
    {
      question: `How can podcast production services help my brand in ${selectedCountry}?`,
      answer:
        " Podcast production services amplify your voice, build authority, and connect with niche audiences. By sharing your in-depth expertise through high-quality podcasts, you can create meaningful engagement and expand your reach in Dubai's competitive market. ",
    },
    {
      question: "What kind of software solutions do you specialize in? ",
      answer:
        " We specialize in CRM integration, custom software development, productivity tools, e-commerce platforms, and ERP solutions—offering tailored, scalable solutions to streamline workflows and empower businesses in Dubai.",
    },
    {
      question: "What sets Yellow Dubai apart from other agencies?",
      answer:
        "Our commitment to tailored strategies, innovative approaches, and measurable results make us stand out.",
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: `Yellow Dubai’s Digital PR 
expertise gave my tech 
startup the visibility it 
deserved. Their strategies 
opened doors for growth and 
recognition I couldn’t achieve 
on my own!`,
      author: "Mohammed Habes",
      image: "/testimonial/mohamad.png",
      position: "",
      quoteMark: "66",
    },
    {
      id: 1,
      rating: 5,
      text: `With Yellow Dubai’s Personal 
Branding services, my 
identity now reflects the 
designer I’ve always aspired 
to be. They truly elevated my 
presence with precision and 
creativity! `,
      image: "/testimonial/paula.png",

      author: "Nouha Sultan",
      position: "",
      quoteMark: "66",
    },
    {
      id: 1,
      rating: 5,
      text: `Yellow Dubai’s CRM software 
solution transformed my 
sales team's efficiency. Their 
tailored approach streamlined 
workflows, improved lead 
tracking, and enhanced client 
communication.`,
      image: "/testimonial/nouaha.png",

      author: "Paula",
      position: "",
      quoteMark: "66",
    },

    // Add more testimonials as needed
  ];
  const comparisons = [
    { yellow: "Tailored and client-focused", typical: "Limited and generic" },
    {
      yellow: "Customized for individual growth",
      typical: "One-size-fits-all approach",
    },
    {
      yellow: "AI-Powered Software Solutions",
      typical: " Outdated or Non-Adaptive Technology",
    },
    { yellow: "Access to top-tier outlets", typical: "Weak media connections" },
    { yellow: "Preventive and reactive plans", typical: "Reactive only" },
    {
      yellow: "Data-driven and innovative",
      typical: "Outdated or minimal efforts",
    },
    {
      yellow: "Industry-specific and impactful",
      typical: "Generic or template-based",
    },
    {
      yellow: "Well-established partnerships",
      typical: "Disconnected and limited",
    },
    {
      yellow: "Actionable insights provided",
      typical: "Minimal or unclear reporting",
    },
    {
      yellow: "In-depth local knowledge",
      typical: "Generalized, non-specific",
    },
  ];
  return (
    <div className={`text-[#262626] font-sans `}>
      <head>
        <title>Yellow Dubai</title>
        <meta
          name="google-site-verification"
          content="-7DGom7gVVyPJjbcIPiyrWxX7HJSE4CM93zI7GeIVCs"
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5B6PRKP9');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B6PRKP9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <header>
          <div
            data-aos="fade-down"
            className=" fixed md:top-0  top-4 w-full flex px-4 md:mt-4 md:px-10 justify-between items-center z-50"
          >
            <nav
              className={`text-white rounded-full transition-opacity duration-2000 ${
                isNavHidden ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="containers">
                <div className="sphere flex justify-center items-center">
                  <div className="progress-container">
                    <div className="fixed-outline"></div>
                    <div className="progress-line"></div>
                    <div className="progress-dot"></div>
                  </div>
                  <div className="logo flex justify-center items-center bg-[#393939] rounded-full">
                    <Image
                      src="/logo.png"
                      alt="Company Logo"
                      width="180"
                      height="180"
                      className="w-16  md:w-[160px]"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <div
              className={`flex text-xs md:text-sm items-center gap-4 transition-opacity duration-2000 ${
                isNavHidden ? "opacity-0" : "opacity-100"
              }`}
            >
              <button className="md:px-4 px-2 py-2 md:py-2  bg-[#393939] text-[#EEEEEE] rounded-[12px]">
                Get Started
              </button>

              <button className="md:px-4 px-2 py-2 md:py-2  border-[#393939] border text-[#393939] rounded-[12px]">
                Log In
              </button>
            </div>
          </div>
          <div className="bg-[url(/hero.png)] bg-cover bg-center h-[600px] md:h-[800px] pt-10 flex flex-col items-center justify-center">
            <div className="flex  font-medium bg-[#FFECB8] justify-center items-center text-xs md:text-sm  gap-2.5 border border-[#663300] p-3 rounded-full text-[#393939]">
              <Image src="/globes.svg" width={30} height={30} alt="flash" />

              <p> Partner With Us</p>
            </div>
            <Image
              src="/title.svg"
              alt="Company logo"
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mt-10 w-[360px] md:w-[700px]"
              width={700}
              height={700}
            />
            <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mt-3">
              <li
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:list-disc list text-[#656177]"
              >
                Digital PR
              </li>
              <li
                data-aos="fade-down"
                data-aos-duration="1000"
                className="md:list-disc list text-[#656177]"
              >
                Podcast & Personal Branding
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration="1000"
                className="md:list-disc list text-[#656177]"
              >
                Software Solutions
              </li>
            </ul>
            <button className="px-4 mt-10  py-2 bg-[#262626]  md:mt-10 text-[#EEEEEE] rounded-[12px]">
              Book a Demo
            </button>
          </div>
        </header>

        <section className="flex items-center justify-center">
          <div className="overflow-hidden md:w-[1297px] container mt-4 md:mt-10">
            <div className="flex gap-4 md:gap-[40px] animate-scroll horizontal-scrolling-items hover:animate-none mx-auto ">
              <Image
                src="/logo/1.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px] "
                width={150}
                height={150}
              />
              <Image
                src="/logo/2.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/3.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/4.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/5.webp"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/6.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px] bg-gray-300"
                width={150}
                height={150}
              />
              <Image
                src="/logo/7.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/8.svg"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/9.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/10.jpg"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/11.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/12.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/1.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/2.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/3.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/4.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/5.webp"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/6.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px] bg-gray-300"
                width={150}
                height={150}
              />
              <Image
                src="/logo/7.png"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/8.svg"
                alt="Company logo"
                className=" object-contain w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-[160px] px-4 ">
          <div className="flex lg:flex-row flex-col justify-center items-center px-4">
            <div className=" lg:w-[1297px]">
              <div className="flex w-[195px]  items-center text-sm  gap-2.5 border border-[#F7DC39] p-3 rounded-full text-[#393939]">
                <Image src="/flash.svg" width={30} height={30} alt="flash" />
                <p> We’re Yellow Dubai </p>
              </div>
              <h1 className="text-[32px] md:text-[56px]  font-semibold mt-4 text-[#262626] md:leading-[70px]">
                Connect Your Brand <br /> Emotionally with Your Audience
              </h1>
              <p className="text-[18px] text-[#262626] mt-4">
                Global Brand Reach • High Domain Authority • Effective Software
                Solutions • Deep Audience Connections
              </p>
            </div>
            <div className="spin-animations w-[250px] h-[250px]">
              <Image
                src="/spin.png"
                width={250}
                height={250}
                alt="Company logo"
              />
            </div>
          </div>
          <div className="md:flex flex-wrap md:mt-[145px] hidden  justify-center items-center gap-4  px-4">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="md:rounded-3xl w-full md:w-[320px] lg:w-[354px] h-auto md:h-[360px] md:bg-gradient-to-tr from-[#784326]/5 to-[#784326] p-[1px]"
            >
              <div className="p-6 flex justify-center relative md:items-center flex-col max-w-sm mx-auto rounded-3xl shadow-md bg-gradient-to-bl from-[#FFF2CD] via-white to-white h-[360px]">
                <div className="">
                  <div className=" flex items-center justify-center rounded-full">
                    <Image
                      src="/digi.svg" // Replace with your actual icon path
                      width={24}
                      height={24}
                      alt="Digital PR Icon"
                      className="md:w-[72px]"
                    />
                  </div>
                </div>

                <h2 className="text-[24px] md:text-[32px] font-bold text-start w-full text-[#262626] mt-4">
                  Digital PR
                </h2>

                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  SEO-Driven PR Content, Media Relations & Outreach,
                  Authoritative Backlinks, Proactive Crisis Communication
                  Strategies, etc.
                </p>
                <Image
                  src="/gstars.svg"
                  width={104}
                  height={104}
                  className="absolute top-3 right-2"
                  alt="Digital PR Icon"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="md:rounded-3xl  md:-mt-[104px] w-full md:w-[320px] lg:w-[354px] h-auto md:h-[360px] md:bg-gradient-to-tr from-[#784326]/5 to-[#784326] p-[1px]"
            >
              <div className="p-6 flex justify-center relative md:items-center flex-col max-w-sm mx-auto rounded-3xl shadow-md bg-gradient-to-bl from-[#FFF2CD] via-white to-white h-[360px]">
                <div className="">
                  <div className="flex items-center justify-center rounded-full">
                    <Image
                      src="/personal.svg" // Replace with your actual icon path
                      width={24}
                      height={24}
                      alt="Digital PR Icon"
                      className="md:w-[54px]"
                    />
                  </div>
                </div>

                <h2 className="text-[24px] md:text-[32px] font-bold text-start w-full text-[#262626] mt-4">
                  Podcast & Personal Branding
                </h2>

                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  Storytelling Content Strategy, Guest Management, Media
                  Amplification, Distribution and Analytics, etc.
                </p>
                <Image
                  src="/gstars.svg"
                  width={104}
                  height={104}
                  className="absolute top-3 right-2"
                  alt="Digital PR Icon"
                />
              </div>
            </div>{" "}
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="md:rounded-3xl w-full md:w-[320px] lg:w-[354px] h-auto md:h-[360px] md:bg-gradient-to-tr from-[#784326]/5 to-[#784326] p-[1px]"
            >
              <div className="p-6 flex justify-center relative md:items-center flex-col max-w-sm mx-auto rounded-3xl shadow-md bg-gradient-to-bl from-[#FFF2CD] via-white to-white h-[360px]">
                <div className="">
                  <div className="flex items-center justify-center rounded-full">
                    <Image
                      src="/award.svg" // Replace with your actual icon path
                      width={24}
                      height={24}
                      alt="Digital PR Icon"
                      className="md:w-[48px]"
                    />
                  </div>
                </div>

                <h2 className="text-[24px] md:text-[32px] leading-10 font-bold text-start w-full text-[#262626] mt-4">
                  Software Solutions
                </h2>

                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  Intelligent Custom Software Development, CRM Integration &
                  Management, Productivity Tools & Applications, etc.
                </p>
                <Image
                  src="/gstars.svg"
                  width={104}
                  height={104}
                  className="absolute top-3 right-2"
                  alt="Digital PR Icon"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="accordion md:hidden w-full h-auto p-[1px] relative bg-gradient-to-tr from-[#784326]/5 to-[#784326] rounded-3xl mb-4"
          >
            <div className="content p-6 bg-gradient-to-bl from-[#FFF2CD] via-white to-white rounded-3xl shadow-md">
              <div className="icon w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                <Image src="/digi.svg" width={24} height={24} alt="ss" />
              </div>
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#262626] mt-4">
                Digital PR
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                SEO-Driven PR Content, Media Relations & Outreach, Authoritative
                Backlinks, Proactive Crisis Communication Strategies, etc.
              </p>
              <Image
                src="/gstars.svg"
                width={104}
                height={104}
                className="absolute top-0 right-2"
                alt="Stars Icon"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="accordion md:hidden w-full h-auto p-[1px] relative -mt-10 bg-gradient-to-tr from-[#784326]/5 to-[#784326] rounded-3xl mb-4"
          >
            <div className="content p-6 bg-gradient-to-bl from-[#FFF2CD] via-white to-white rounded-3xl shadow-md">
              <div className="icon w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                <Image src="/personal.svg" width={24} height={24} alt="ss" />
              </div>
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#262626] mt-4">
                Podcast & Personal
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Storytelling Content Strategy, Guest Management, Media
                Amplification, Distribution and
              </p>
              <Image
                src="/gstars.svg"
                width={104}
                height={104}
                className="absolute top-0 right-2"
                alt="Stars Icon"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="accordion md:hidden w-full h-auto p-[1px] relative  -mt-10 bg-gradient-to-tr from-[#784326]/5 to-[#784326] rounded-3xl mb-4"
          >
            <div className="content p-6 bg-gradient-to-bl from-[#FFF2CD] via-white to-white rounded-3xl shadow-md">
              <div className="icon w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                <Image src="/award.svg" width={24} height={24} alt="ss" />
              </div>
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#262626] mt-4">
                Software Solutions
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Intelligent Custom Software Development, CRM Integration &
                Management, Productivity Tools & Applications, etc.
              </p>
              <Image
                src="/gstars.svg"
                width={104}
                height={104}
                className="absolute top-0 right-2"
                alt="Stars Icon"
              />
            </div>
          </div>
        </section>
        <section className="mt-10 px-4 md:px-0 md:mt-[160px] w-full   ">
          <div className="w-full flex md:justify-center md:items-center flex-col">
            <div className="flex max-w-[350px] font-medium justify-center items-center text-sm  gap-2.5 border border-[#29253B] p-3 rounded-full text-[#393939]">
              <Image src="/globes.svg" width={30} height={30} alt="flash" />
              <p> Get Featured In Top Publications in {selectedCountry} </p>
            </div>
            <h1
              data-aos="fade-up"
              className="text-[32px] md:text-[56px] md:leading-[90px] lg:leading-[70px] md:text-center max-w-[1100px] font-semibold mt-4 text-[#262626]"
            >
              Yellow Dubai Teams Up with People's Favorite & Trusted Media
              Outlets
            </h1>
            <div className="storybook-fix relative flex w-full max-w-[1100px] gap-4 md:gap-10 mt-20 items-center justify-center overflow-hidden rounded-md  bg-background flex-col">
              <Marquee>
                <Image
                  src="/logo/7.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/8.svg"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/6.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px] bg-gray-300"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/9.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/5.webp"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/6.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px] bg-gray-300"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/7.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/8.svg"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
              </Marquee>
              <Marquee reverse>
                <Image
                  src="/logo/1.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px] "
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/2.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/3.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/4.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/5.webp"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/6.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px] bg-gray-300"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/7.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/8.svg"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/9.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/10.jpg"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/11.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
                <Image
                  src="/logo/12.png"
                  alt="Company logo"
                  className=" object-contain w-[100px] md:w-[150px]"
                  width={150}
                  height={150}
                />
              </Marquee>
            </div>
          </div>
        </section>
        <section className="mt-10 md:mt-[160px] relative w-full px-4 md:px-0 overflow-hidden  md:overflow-visible  pb-6 md:pb-20  bg-[#FFEDDB]  ">
          <div className="w-full   flex md:justify-center pt-10 md:pt-[120px] md:items-center flex-col">
            <div className="flex max-w-[340px] items-center font-medium md:justify-center md:items-center text-sm  gap-2.5 border border-[#29253B] p-3 rounded-full text-[#393939]">
              <Image src="/globes.svg" width={30} height={30} alt="flash" />
              <p> Our Strategies Simply Deliver </p>
            </div>
            <h1
              data-aos="fade-up"
              className="text-[36px] md:text-[56px] leading-16 md:leading-[66px]  md:text-center w-full font-semibold mt-4 text-[#262626]"
            >
              From Concept to Execution,
              <br />
              We Achieve Results That Matter
            </h1>
            <div className="relative flex justify-center overflow-hidden items-center md:mt-20 h-[300px] md:h-[600px] w-full text-[#262626]">
              <Image
                src="/track.svg"
                width={600}
                height={600}
                className="z-10 md:w-[500px] lg:w-[600px] w-[250px]"
                alt="track"
              />
              <Image
                src="/vector.svg"
                data-aos="zoom-in"
                data-aos-duration="1000"
                width={240}
                height={120}
                className="absolute z-20 w-[100px] md:w-[240px]"
                alt="vector"
              />
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="absolute z-30 xl:left-[300px] 2xl:left-[450px] md:left-[60px] left-1 top-[60px] lg:top-[40px] flex flex-col items-center justify-center gap-4"
              >
                <div className="relative  lg:w-[363px] ">
                  <div className="absolute inset-0  border border-[#A8A8A8] lg:h-[100px] rounded-2xl translate-x-2 translate-y-2 md:h-[90px]  "></div>

                  <div className="relative rounded-[12px] md:mt-6  lg:-ml-10 bg-white p-1 md:p-4 shadow-lg">
                    <h1 className="text-sm md:text-2xl font-medium md:font-semibold">
                      3x Growth
                    </h1>
                    <p className="mt-1 hidden lg:block md:mt-4 text-xs md:text-base text-gray-600">
                      In Online Visibility for Clients within 6 Months
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="absolute z-30 md:right-[110px] xl:right-[200px]  2xl:right-[430px] right-0 top-16 md:top-[40px] lg:top-[20px] flex flex-col items-center justify-center gap-4"
              >
                <div className="relative lg:w-[363px] ">
                  <div className="absolute inset-0  border border-[#A8A8A8]  lg:h-[100px] rounded-2xl translate-x-2 translate-y-2"></div>

                  <div className="relative rounded-[12px] md:mt-6  lg:-ml-10 bg-white p-1 md:p-4 shadow-lg">
                    <h1 className="text-xs md:text-2xl font-medium md:font-semibold">
                      98% Client Satisfaction Rate
                    </h1>
                    <p className="mt-4 hidden lg:block text-base text-gray-600">
                      for Event Experiences
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="absolute z-30 lg:left-[120px] xl:left-[200px] md:left-[20px] 2xl:left-[440px] bottom-20 left-0 md:bottom-[90px] flex flex-col items-center justify-center md:gap-4"
              >
                <div className="relative md:w-[293px] ">
                  <div className="absolute inset-0  border border-[#A8A8A8] lg:h-[100px] rounded-2xl translate-x-2 translate-y-2 lg:-translate-x-2 lg:translate-y-9"></div>

                  <div className="relative rounded-[12px] md:mt-6  bg-white p-1 md:p-4 shadow-lg">
                    <h1 className="text-xs md:text-2xl font-medium md:font-semibold">
                      50+ Personal Brands
                    </h1>
                    <p className="mt-4 hidden lg:block text-base text-gray-600">
                      Elevated Across {selectedCountry}
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                className="absolute z-30 md:left-[350px]  lg:left-[500px] xl:left-[600px] 2xl:left-[890px] 2xl:bottom-4 bottom-10 md:bottom-14  lg:bottom-4 flex flex-col items-center justify-center gap-4"
              >
                <div className="relative ">
                  <div className="absolute inset-0   border border-[#A8A8A8] lg:h-[100px] rounded-2xl translate-x-3 translate-y-2 lg:translate-x-3 lg:translate-y-10"></div>

                  <div className="relative rounded-[12px] md:mt-6  bg-white p-1 md:p-4 shadow-lg">
                    <h1 className="md:text-2xl text-xs font-medium md:font-semibold">
                      30+ Software Solutions
                    </h1>
                    <p className="mt-4 hidden lg:block text-base text-gray-600">
                      Scaling the {selectedCountry} Businesses
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="absolute z-30 right-0 md:right-10 lg:right-10 xl:right-[120px] 2xl:right-[360px] bottom-[85px] md:bottom-[180px] lg:bottom-[140px] flex flex-col items-center justify-center gap-4"
              >
                <div className="relative  ">
                  <div className="absolute inset-0  border border-[#A8A8A8] lg:h-[100px] rounded-2xl translate-x-2 translate-y-2"></div>

                  <div className="relative rounded-[12px] md:mt-6   bg-white p-1 md:p-4 shadow-lg">
                    <h1 className="text-xs md:text-2xl font-medium md:font-semibold">
                      2500+ Media Outlets
                    </h1>
                    <p className="mt-4 hidden lg:block text-base text-gray-600">
                      Collaborated Globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-40 left-0">
              <Image src="/blocks.svg" width={200} height={200} alt="globe" />
            </div>
          </div>
        </section>
        <section className="mt-10 md:mt-[160px] px-4 md:px-10 lg:px-0 w-full  flex flex-col items-center justify-center gap-[64px]">
          <div className="flex  flex-col justify-center items-center ">
            <div className="flex w-[243px] font-be items-center text-sm  gap-2.5 border border-[#f7dc39] p-3 rounded-full text-[#393939]">
              <Image src="/award1.svg" width={30} height={30} alt="flash" />
              <p> Part of a Trusted Legacy</p>
            </div>
            <h1
              data-aos="fade-up"
              className="text-[36px] md:text-[56px] text-center md:leading-[70px] text-[#262626] font-semibold mt-4"
            >
              Your Success Starts with a <br />
              <span className="text-[#f7dc39]">
                <Typewriter
                  options={{
                    strings: ["Branding", "Podcast", "Innovation", "Strategy"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <div
              data-aos="fade-down"
              className="text-sm md:text-lg md:w-[461px] mt-4 md:mt-6 "
            >
              <p className="text-center text-[#262626]">
                Modern Studios and a Helpful Team Awaits You! Become an Industry
                Thought Leader
              </p>
            </div>
            <button className="md:px-6 px-4 text-sm md:text-lg py-1.5 md:py-3 bg-[#f7dc39] text-[#262626] rounded-2xl hover:bg-yellow-dubai hover:text-white transition mt-2 md:mt-10">
              Talk to Our Experts Today
            </button>
          </div>

          <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-center gap-4">
            <div className="lg:w-[472px]  flex flex-col ">
              <h1 className="text-[24px] md:text-[40px] font-semibold  mt-4 text-[#262626]">
                Top Rated, Certified Experts in {selectedCountry}
              </h1>
              <Image
                src="/outline-stars.svg"
                width={200}
                height={200}
                className="md:mt-4 mt-2 w-[170px] md:w-[200px]"
                alt="stars"
              />
            </div>
            <div className="flex w-[360px] overflow-hidden md:w-[700px] lg:w-[400px] xl:w-[610px] items-center gap-4">
              <Swiper
                spaceBetween={20}
                slidesPerView={2.5}
                loop={true}
                autoplay={{
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="/awards/1.png"
                    width={190}
                    height={190}
                    alt="stars"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/awards/2.png"
                    width={190}
                    height={190}
                    alt="stars"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/awards/3.webp"
                    width={190}
                    height={190}
                    className="mt-10"
                    alt="stars"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/awards/4.png"
                    width={190}
                    height={190}
                    alt="stars"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/awards/5.jpg"
                    width={190}
                    height={190}
                    alt="stars"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/awards/6.png"
                    width={190}
                    height={190}
                    alt="stars"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="mt-10 md:mt-[160px] px-4 md:px-0">
          <div className="w-full flex md:justify-center md:items-center flex-col">
            <div className="flex w-[163px] font-be items-center text-sm  gap-2.5 border-2 border-[#f7dc39] p-3 rounded-full text-[#393939]">
              <Image src="/globe1.svg" width={30} height={30} alt="flash" />
              <p> Comparison</p>
            </div>
            <h1 className="text-[36px] md:text-[56px] md:text-center max-w-[900px] md:leading-[70px]  text-[#262626] font-semibold mt-4">
              Why Settle for Typical When You Can Go Yellow?
            </h1>
          </div>
          <div className="max-w-[1000px] mx-auto md:p-16 mt-4">
            <div className="border-4 border-gray-100 rounded-xl shadow-2xl">
              <div className="border border-gray-200 rounded-xl drop-shadow-md">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className=" flex items-center justify-center text-white">
                        <Image
                          src="/tree.svg"
                          width={20}
                          height={20}
                          alt="flash"
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        Yellow Dubai
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="font-medium text-gray-900">
                      Typical PR Firm
                    </span>
                  </div>
                </div>

                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="p-2 md:p-4 border-r border-gray-200 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#16A34A] hidden md:flex items-center justify-center">
                        <svg
                          className="w-3 h-3 rounded-full text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm md:text-base">
                        {item.yellow}
                      </span>
                    </div>
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full hidden md:flex  bg-[#E34040]  items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm md:text-base">
                        {item.typical}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFF3CE] mt-10 md:mt-[160px] w-full pb-8 px-4 md:px-0 md:pb-[120px]  ">
          <div className="w-full   flex md:justify-center pt-10 md:pt-[120px] md:items-center flex-col">
            <div className="flex md:w-[188px] w-[178px] font-medium justify-center items-center text-sm  gap-2.5 border border-[#29253B] p-3 rounded-full text-[#393939]">
              <Image src="/globes.svg" width={30} height={30} alt="flash" />
              <p> Case studies </p>
            </div>
            <h1 className="text-[32px] md:text-[56px] md:leading-[70px] md:text-center w-full font-semibold mt-4 text-[#262626]">
              See How We’ve Made It Happen
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-20 items-center ">
            <div className="relative ">
              <div className="absolute inset-0 z-10 w-[300px]  md:w-[320px] xl:w-[360px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>
              <div className="max-w-[390px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl   font-bold text-[#262626]">
                      #Corporate Training Institute
                    </h2>
                    <p className="text-gray-500">(Luxury Goods)</p>
                  </div>

                  <p className="text-gray-600">
                    Produced a bespoke podcast series highlighting industry
                    expertise and transformative programs.
                  </p>

                  <div className="space-y-3 relative xl:pt-5 2xl:pt-11  ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+38% </span>
                        <span className="text-gray-600">
                          {" "}
                          Increase in Audience Engagement{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+50% </span>
                        <span className="text-gray-600">
                          Growth in Social Shares{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:{" "}
                        </span>
                        <span className="text-gray-600">12 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative ">
              <div className="absolute inset-0 z-10 w-[300px]  md:w-[320px] xl:w-[350px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>

              <div className="max-w-[380px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-[#262626]">
                      #Technology
                    </h2>
                    <p className="text-gray-500">(SaaS platform)</p>
                  </div>

                  <p className="text-gray-600">
                    Enhanced brand authority for an HR automation SaaS platform
                    through thought leadership and PR campaigns.
                  </p>

                  <div className="space-y-3 relative pt-5 ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+40% </span>
                        <span className="text-gray-600">
                          {" "}
                          More Online Engagement{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+35%</span>
                        <span className="text-gray-600">
                          {" "}
                          More Lead Conversion{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:{" "}
                        </span>
                        <span className="text-gray-600">9 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative ">
              <div className="absolute inset-0 z-10 w-[300px]  md:w-[320px] xl:w-[350px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>

              <div className="max-w-[380px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-[#262626]">
                      #Hospitality
                    </h2>
                    <p className="text-gray-500">(Boutique Hotels)</p>
                  </div>

                  <p className="text-gray-600">
                    Developed a podcast series to promote experiential travel
                    and position the brand as a luxury leader.
                  </p>

                  <div className="space-y-3 relative xl:pt-5 2xl:pt-10 ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">500+</span>
                        <span className="text-gray-600">
                          {" "}
                          Podcast Listeners
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+30% </span>
                        <span className="text-gray-600">more bookings</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:{" "}
                        </span>
                        <span className="text-gray-600">12 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative md:mt-10">
              <div className="absolute inset-0 z-10 w-[300px]   md:w-[320px] xl:w-[350px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>

              <div className="max-w-[380px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative ">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-[#262626]">
                      #Healthcare
                    </h2>
                    <p className="text-gray-500">(Wellness clinics)</p>
                  </div>

                  <p className="text-gray-600">
                    Executed a Digital PR campaign to enhance the clinic’s
                    reputation and promote wellness programs.
                  </p>

                  <div className="space-y-3 relative xl:pt-6 2xl:pt-10 ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+40% </span>
                        <span className="text-gray-600">
                          Website Traffic Increase{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+30% </span>
                        <span className="text-gray-600">Patient Inquiries</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:{" "}
                        </span>
                        <span className="text-gray-600">6 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative  md:mt-10 ">
              <div className="absolute inset-0 z-10 w-[300px]  md:w-[320px] xl:w-[350px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>

              <div className="max-w-[380px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-[#262626]">
                      #Retail
                    </h2>
                    <p className="text-gray-500">(Fashion and Apparel)</p>
                  </div>

                  <p className="text-gray-600">
                    Streamlined inventory and sales tracking through a tailored
                    software solution for a sustainable fashion brand.
                  </p>
                  <div className="space-y-3 relative pt-5 ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+40% </span>
                        <span className="text-gray-600">
                          Inventory Accuracy
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">+30% </span>
                        <span className="text-gray-600">
                          Staff Productivity
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:{" "}
                        </span>
                        <span className="text-gray-600">8 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative   md:mt-10">
              <div className="absolute inset-0 z-10 w-[300px]  md:w-[320px] xl:w-[350px] 2xl:w-[450px] 2xl:-translate-y-4 2xl:translate-x-10 border border-[#A8A8A8] rounded-2xl translate-x-10 -translate-y-4"></div>

              <div className="max-w-[380px] 2xl:max-w-[500px] 2xl:h-[520px] xl:h-[500px] xl:p-4 2xl:p-9  rounded-3xl bg-white p-6 z-10  md:p-9 relative shadow-lg">
                <div className="space-y-4 relative">
                  <div>
                    <h2 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-[#262626]">
                      #Attraction Council{" "}
                    </h2>
                    <p className="text-gray-500">(Digital PR)</p>
                  </div>

                  <p className="text-gray-600">
                    Implemented a strategic Digital PR campaign to foster
                    community engagement and elevate industry presence.
                  </p>

                  <div className="space-y-3 relative pt-5 ">
                    <div className=" border-t border-dashed border-black w-full"></div>
                    <div className="flex items-center gap-3 pt-5">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900"> +45% </span>
                        <span className="text-gray-600">
                          Event Participation
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900"> +60% </span>
                        <span className="text-gray-600">Website Traffic</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-dashed border-gray-200 pt-3">
                      <div className="bg-[#f7dc39] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">
                          Contract Period:
                        </span>
                        <span className="text-gray-600">18 Months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
        <section className="flex flex-col px-4 md:px-0 justify-center items-center mt-10 md:mt-[160px] ">
          <div className="md:w-full   flex justify-center items-center flex-col">
            <div className="flex   md:w-auto  font-medium justify-center items-center text-sm md:text-base  gap-2.5 border border-[#29253B] p-3 rounded-full text-[#393939]">
              <Image src="/review.svg" width={30} height={30} alt="flash" />
              <p> Reviews</p>
            </div>
            <h1 className="text-[36px] md:text-[56px] text-center w-full font-semibold mt-6 md:mt-4 text-[#262626]">
              What They’re Saying?
            </h1>
          </div>
          <div className="max-w-[1000px] mx-auto px-4 py-4 md:py-16 mt-5 md:mt-0">
            <div>
              <Swiper
                modules={[Navigation, Autoplay]} // Add Autoplay here
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                spaceBetween={30}
                slidesPerView={1}
                className="relative w-[300px] md:w-[600px] xl:w-[1200px] mx-auto"
                onInit={(swiper) => {
                  swiperRef.current = swiper; // Set the swiper reference once initialized
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="flex flex-col xl:flex-row  md:items-center md:gap-8">
                      <div className="relative flex-shrink-0 w-64 md:w-[300px]">
                        <img
                          src={testimonial.image}
                          alt="testimonial"
                          className="rounded-full  mb-8 md:mb-0 "
                        />
                      </div>

                      <div className="flex-1 ">
                        <div className="flex gap-1  mb-2 md:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className=" w-6 md:w-10 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm md:text-2xl text-justify md:leading-10 text-[#262626] mb-2 max-w-[660px] md:mb-4">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center mt-8 gap-2">
                            <div className="font-semibold text-[#262626]">
                              {testimonial.author}
                            </div>
                            <div className="text-[#262626]">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="flex items-start justify-center md:items-end w-full md:justify-end  gap-4 px-4 mt-6 md:-mt-8 md:-ml-48">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()} // Call slidePrev method on swiper instance
                    className=" w-10 h-10 flex justify-center items-center border border-[#525252] bg-white rounded-full z-10"
                  >
                    <Image src="/left.svg" width={20} height={20} alt="flash" />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()} // Call slideNext method on swiper instance
                    className=" w-10 h-10 bg-white  flex justify-center items-center border border-[#525252] rounded-full z-10"
                  >
                    <Image
                      src="/right.svg"
                      width={20}
                      height={20}
                      alt="flash"
                    />
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="px-4 mt-20 md:px-0">
          <h1 className="text-[36px] md:text-[56px] text-center w-full font-semibold mt-4 text-[#262626]">
            Get Started Now
          </h1>
          <div className="flex flex-col xl:flex-row justify-center items-center mt-6 md:mt-20 gap-4 md:gap-10 xl:gap-20">
            <div>
              <div className="flex items-center gap-2 md:gap-4">
                <Image src="/test.png" width={40} height={40} alt="user" />
                <p className="text-lg md:text-[24px] text-[#262626]">
                  John Abraham
                </p>
              </div>
              <h1 className="font-medium text-[#262626]  text-[24px] md:text-[56px] mt-2 md:mt-6">
                Yellow Dubai: Intro call
              </h1>
              <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-6">
                <Image src="/clock.svg" width={20} height={20} alt="clock" />
                <p className="text-sm xl:text-2xl text-[#6F6F6F]">15 min</p>
              </div>
              <div className="flex items-center  gap-2 md:gap-4 mt-2 md:mt-6">
                <Image src="/video.svg" width={20} height={20} alt="video" />
                <p className="text-sm xl:text-2xl text-[#6F6F6F]">
                  Web conferencing details provided upon confirmation
                </p>
              </div>
              <button className="md:px-6 md:py-3 flex items-center xl:text-2xl gap-2 md:gap-3 text-[#8D8D8D] mt-2 md:mt-6">
                Time zone: India Standard Time (2:18pm){" "}
                <Image
                  src="/arrow-down.svg"
                  width={20}
                  height={20}
                  alt="dropdown"
                />
              </button>
            </div>

            <a
              href="https://calendly.com/yellowdubai360/30min"
              target="_blank"
              className=""
            >
              <Calendar
                onChange={(value) =>
                  setDate(value as Date | [Date, Date] | null)
                }
                value={date as Date | [Date, Date] | null}
                className="shadow-md rounded-xl custom-calendar"
              />
            </a>
          </div>
        </section>
        <section className="mt-10 md:mt-[160px] flex flex-col xl:flex-row justify-center items-center pb-10">
          <div className="bg-white flex flex-col xl:flex-row justify-center items-center gap-10  md:py-10 px-4 md:px-20">
            <div className="max-w-[660px] ">
              <div className="flex w-[140px] md:w-[150px] font-medium justify-center items-center text-sm  gap-2.5  border border-[#29253B] p-3 rounded-full text-[#393939]">
                <Image src="/review.svg" width={20} height={20} alt="flash" />
                <p> Questions</p>
              </div>
              <h1 className="text-3xl md:text-7xl leading-10 md:leading-[90px] mt-4 md:mt-6 font-bold mb-5 text-[#262626]">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-600 mb-6 md:mb-10 md:text-lg text-justify">
                We work with diverse industries, including technology,
                hospitality, retail, healthcare, and more, tailoring strategies
                to each sector's needs.
              </p>
              <button className="bg-[#f7dc39] text-[#262626] font-semibold px-6 py-2 rounded-md hover:text-white mb-6 md:mb-10">
                Book a Demo
              </button>
            </div>
            <div className="md:w-[580px] mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-4 transition-colors md:mb-4 duration-300 ${
                    openQuestion === index
                      ? "bg-white border border-black rounded-2xl p-4"
                      : "bg-[#F5F5F5] rounded-2xl border mt-2 p-4 drop-shadow-lg"
                  }`}
                >
                  <div
                    className="flex justify-between mt-2 items-center cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h2 className="md:text-[20px] text-sm font-medium leading-8 text-[#262626]">
                      {faq.question}
                    </h2>
                    <span className="text-[#525252] rounded border border-[#525252] text-center flex items-center justify-center text-xs md:text-base w-4 h-4">
                      {openQuestion === index ? "-" : "+"}
                    </span>
                  </div>
                  {openQuestion === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="bg-[#29253B] text-white py-4 md:py-10 bg-[url('/footer-bg.png')] bg-contain bg-center">
          <div className="max-w-6xl mx-auto px-4 md:px-5">
            <div className="md:text-center mb-10">
              <div className="flex md:items-center justify-between gap-4">
                <Image
                  src="/logo.png"
                  className="w-[100px] md:w-[200px] -ml-5 md:-ml-10"
                  width={200}
                  height={200}
                  alt="logo"
                />

                <div className="flex items-center gap-2 md:gap-10">
                  <Image
                    src="/fb.svg"
                    className="md:w-[40px]"
                    width={30}
                    height={30}
                    alt="Facebook"
                  />
                  <Image
                    src="/insta.svg"
                    className="md:w-[36px]"
                    width={26}
                    height={26}
                    alt="Instagram"
                  />
                  <Image
                    src="/link.svg"
                    className="md:w-[36px]"
                    width={26}
                    height={26}
                    alt="LinkedIn"
                  />
                </div>
              </div>
              <p className="text-sm md:text-[20px] md:leading-10 mt-9">
                Yellow Dubai is a premier agency specializing in Digital PR,
                Personal Branding, Podcast Production, and Software Solutions in
                <span></span> {selectedCountry}
              </p>
            </div>

            {/* Country List */}
            <div className="grid grid-cols-3 md:grid-cols-4 md:ml-20 gap-5 text-[#BBBBBB] justify-center items-center text-sm md:text-base mt-5">
              {countries.map((country, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:text-white"
                  onClick={() => handleCountryClick(country)}
                >
                  {country}
                </p>
              ))}
            </div>

            <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-5">
              <p>
                © 2025 Yellow Dubai. All Rights Reserved. | Crafted with Passion
                in Dubai |{" "}
                <a
                  href="/privacy-policy"
                  className="hover:underline hover:text-yellow-400"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="/terms-of-service"
                  className="hover:underline hover:text-yellow-400"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </footer>
        <style jsx>{`
          @keyframes infiniteScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .container {
            overflow-x: hidden;
          }
          .horizontal-scrolling-items {
            display: flex;
            font-size: 40px;
            animation-name: infiniteScroll;
            animation-duration: 10s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          .horizontal-scrolling-items__item {
            white-space: nowrap;
          }
          /* styles/globals.css */
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .spin-animations {
            animation: spin 10s linear infinite;
          }
          .custom-calendar .react-calendar__tile--now {
            width: 100% !important;
            background: #fff !important;
            color: #262626; /* Optional: Update text color if needed */
            border: 1px solid #e0e0e0; /* Optional: Add a border for better visibility */
          }

          .react-calendar__tile--active {
            background: #fae7dd !important;
            color: #fff;
          }

          .circle,
          .circle::before {
            content: " ";
            margin: 15px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: all 0.3s;
          }

          .circle::before {
            animation: mymove 2s infinite;
            position: absolute;

            background-color: #f7dc39;
          }

          @-webkit-keyframes mymove {
            50% {
              transform: scale(2);
              opacity: 0;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          .containers {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .sphere {
            width: 170px;
            height: 170px;
            border-radius: 50%;
            position: relative;
            background: white;
            animation: glow 3s ease-in-out infinite;
          }

          @media (max-width: 768px) {
            .sphere {
              width: 70px;
              height: 70px;
            }
          }

          .sphere::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .progress-container {
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50%;
          }

          .progress-line {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 5px solid transparent;
            transform-origin: center;
            animation: progress 3s linear infinite;
          }

          @keyframes progress {
            0% {
              stroke-dasharray: 0 1000;
              transform: rotate(-90deg);
              border-top: 4px solid #f7dc39; /* Outline color #f7dc39 */
            }
            25% {
              border-top: 4px solid #f7dc39;
              border-right: 4px solid #f7dc39;
            }
            50% {
              border-top: 4px solid #f7dc39;
              border-right: 4px solid #f7dc39;
              border-bottom: 4px solid #f7dc39;
            }
            75% {
              border-top: 4px solid #f7dc39;
              border-right: 4px solid #f7dc39;
              border-bottom: 4px solid #f7dc39;
              border-left: 4px solid #f7dc39;
            }
            100% {
              transform: rotate(270deg);
              border: 4px solid transparent;
            }
          }
        `}</style>
      </body>
    </div>
  );
}
