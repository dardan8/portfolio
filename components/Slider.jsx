import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import Image from "next/image";
import { useState } from "react";

import { tech_stack } from "data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  SwiperCore.use([Navigation, Autoplay]);

  const [tooltip, xsetTooltip] = useState(false);
  console.log(tech_stack[0].id);

  return (
    <div className='container_full'>
      <Swiper
        breakpoints={{
          1080: {
            slidesPerView: 6,
          },

          400: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={50}
        autoplay={{
          delay: 3500,
        }}
        className='mySwiper'
      >
        {tech_stack.map((tech, key) => {
          return (
            <>
              <SwiperSlide key={tech.id}>
                <Image
                  src={tech.image_url}
                  alt={tech.alt}
                  width={60}
                  height={60}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
