import React , { useRef, useState }from 'react';
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PricingCard from './PricingCard'


import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

function ProductSlider() {

   const [Price, setPrice] = useState([
      {Package: 'Junior Packge', Cost:'350', Deals:['Maintenance', 'SSl Certificate', 'Domain Name', 'Emails']},
   ])

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
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
              <PricingCard Data={Price}/>
            </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default ProductSlider