import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
   };

   return (
      <div>
         <Slider {...settings}>
            <div>
               <div className="Image h-[550px] w-full bg-orange-200">
                  <img
                     src="/assets/banner1.webp"
                     className="w-full h-full object-cover"
                  ></img>
               </div>
            </div>
            <div>
               <div className="Image h-[550px] w-full bg-orange-200">
                  <img
                     src="/assets/banner3.webp"
                     className="w-full h-full object-cover"
                  ></img>
               </div>
            </div>
            <div>
               <div className="Image h-[550px] w-full bg-orange-200">
                  <img
                     src="/assets/banner2.webp"
                     className="w-full h-full object-cover"
                  ></img>
               </div>
            </div>
         </Slider>
      </div>
   );
};

export default SlickCarousel;
