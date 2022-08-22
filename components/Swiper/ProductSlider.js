import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductSlider(props) {
  const Price = props.price;
  return (
    <div className="max-w-screen-xl mx-auto my-10 ">
      <h2 className=" mx-2 md:mx-10 text-3xl font-semibold mb-10 mt-10">{props.title}</h2>
      <p className="sliderHeading capitalize">
        {props.tag}
      </p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        navigation={true}
        
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween:5,
          },
          1200: {
            width: 1200,
            slidesPerView:3,
            spaceBetween:10,
          },
        }}   

        className="mx-auto"    
      >
        {Price.map((item) => (
          <SwiperSlide className="">
            <div className="Pricingcard">
              <div className="cardTitle">
                <h1>{item.Package}</h1>
              </div>
              <div className="infoContainer">
                <p>
                  R{item.Cost}
                  <span>/mon</span>
                </p>
                <ul className="PriceOptions">
                  {item.Deals.map((deal) => (
                    <li>{deal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
