import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Yellow Dubai helped my tech startup gain the spotlight it deserved. Their expertise opened doors I couldn't on my own!",
    author: "Mohammed Habes",
    position: "CTO",
    quoteMark: "66",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 20l-3-3H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2l-3 3z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Reviews</span>
        </div>
        <h2 className="text-4xl font-bold">What They're Saying?</h2>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="relative"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex items-center gap-8">
              <div className="relative flex-shrink-0 w-64 h-64">
                <div className="absolute inset-0 rounded-full border-2 border-gray-100">
                  <div className="absolute -top-4 -left-4 text-6xl font-serif text-gray-900">
                    {testimonial.quoteMark}
                  </div>
                </div>
                <img
                  src="/api/placeholder/256/256"
                  alt="testimonial"
                  className="rounded-full"
                />
              </div>

              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-800 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/api/placeholder/32/32"
                    alt={testimonial.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="swiper-button-prev absolute left-0 top-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
