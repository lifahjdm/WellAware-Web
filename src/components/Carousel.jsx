import React, { useRef } from "react";
import Slider from "react-slick";

function Carousel({ images, style = "h-[30rem]" }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {images?.map((image, index) => (
          <div key={index} className="mx-auto w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`object-cover object-top w-full mx-auto ${style}`}
            />
          </div>
        ))}
      </Slider>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
}

export default Carousel;
