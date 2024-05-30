import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <div className="  bg-no-repeat bg-cover pb-24 pt-16 md:pt-0">
        <div className="max-w-6xl w-[90%] mx-auto ">
          <div className=" pb-12">
            <h2 className=" text-3xl font-bold font-Rancho ">Testi<span className=" text-green-400">monials</span></h2>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl  font-medium">Sadia Rahman</h2>
                <p className="font-Rancho">
                  I'm delighted that repaire-ranger has repaired my laptop
                  quickly and skillfully. They were very efficient and
                  well-organized. Thank you!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Rahim Islam</h2>
                <p className="font-Rancho">
                  I'm so pleased with repaire-ranger for fixing my laptop
                  without any hassle. Their team's management was excellent, and
                  the expertise was top-notch. Thank you, no waiting!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Nadia Chowdhury</h2>
                <p className="font-Rancho">
                  I'm extremely satisfied with the service provided by [Your
                  Company Name]. They fixed my laptop promptly and
                  professionally. Their team was courteous and knowledgeable.
                  Highly recommended!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Aminul Haque</h2>
                <p className="font-Rancho">
                  Kudos to repaire-ranger for their exceptional laptop
                  repair service. They exceeded my expectations with their
                  efficiency and expertise. I'll definitely be a returning
                  customer.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Tasnim Ahmed</h2>
                <p className="font-Rancho">
                  I'm grateful to repaire-ranger for fixing my laptop
                  quickly and effectively. Their team was friendly and
                  professional throughout the process. Highly recommended!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Farhana Akter</h2>
                <p className="font-Rancho">
                  I had a wonderful experience with repaire-ranger. They
                  repaired my laptop with precision and care. Their customer
                  service was excellent. Thank you!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="space-y-3">
                <h2 className="font-Roboto text-xl font-medium">Shahid Hasan</h2>
                <p className="font-Rancho">
                  Highly impressed with the professionalism and efficiency of
                  [Your Company Name]. They fixed my laptop in no time and at a
                  reasonable cost. Will definitely recommend!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
