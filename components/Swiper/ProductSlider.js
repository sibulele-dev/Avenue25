import React , { useRef, useState }from 'react';
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

function ProductSlider(props) {

   const Slide = props.price

  return (
    <div className="sliderContainer" >
            
            
        <p className="sliderHeading">
                Pricing options don't include the development fee and that is entirely based on the scope of the project
        </p>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
        >
            {Slide.map((data, i) => {
              <SwiperSlide key={data.id}>
                <div className="Pricingcard">
                      <div className="cardTitle">
                      <h1>{data.Package}</h1>
                      </div>
                      <div className="infoContainer">
                      <p>R{data.Cost}<span>/mon</span></p>
                      <ul className="PriceOptions">
                          {data.Deals.map((deal, index) => {
                            return(
                              <li key={index}>
                                {deal}
                              </li>
                            )
                          })} 
                          <li>Maintena</li>
                          <li>Maintena</li>
                          <li>Maintena</li>
                          <li>Maintena</li>
                          
                      </ul>
                      <a href=""> Choose me</a>
                      </div>
                </div>
              </SwiperSlide>
            })}
        </Swiper>
        
    </div>
  )
}

export default ProductSlider