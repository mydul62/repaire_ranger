import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/banner.jpg";
import img2 from "/image1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import '../Testimonial/testimonial.css'
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay:5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-h-[90vh]"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/1M5tMqD/pexels-prateekkatyal-2740956.jpg"
              alt=""
              className=" h-[700px] w-full "
            />
            <div className="  left-0 top-0 bottom-0  right-0 absolute inset-1 bg-[#040108b8] flex  items-center text-white">
              <div className=" max-w-7xl w-[95%] mx-auto">
                <div className=" md:w-[60%] space-y-6">
                  <h2 className=" text-3xl md:text-4xl  font-Rancho">
                    WE ALWAYS ENSURE THE BEST SERVICE
                  </h2>
                  <p className=" ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, voluptates ut. Quas pariatur vitae praesentium,
                    deserunt
                  </p>
                  <div>
                    <Link to={"/allservices"}>
                      {" "}
                      <button className=" btn">Take Our Services</button>
                    </Link>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/xDnHwQ1/senior-man-with-equipment-soldering-working-home.jpg"
              alt=""
              className=" h-[700px] w-full "
            />
            <div className="  left-0 top-0 bottom-0  right-0 absolute inset-1 bg-[#040108b8] flex  items-center text-white">
              <div className=" max-w-7xl mx-auto">
                <div className=" md:w-[60%] text-center mx-auto space-y-6">
                  <h2 className=" text-3xl font-Rancho">
                    WE ALWAYS ENSURE THE BEST SERVICE
                  </h2>
                  <p className=" ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, voluptates ut. Quas pariatur vitae praesentium,
                    deserunt 
                  </p>
                  <div>
                    <Link to={"/allservices"}>
                      {" "}
                      <button className=" btn">Take Our Services</button>
                    </Link>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/0Jfq4cD/close-up-hands-working-with-tools.jpg"
              alt=""
              className=" h-[700px] w-full "
            />
            <div className=" left-0 top-0 bottom-0  right-0 absolute inset-1 bg-[#040108b8] flex  items-center text-white">
              <div className=" flex justify-end max-w-7xl mx-auto">
                <div className=" float-right text-right   space-y-6">
                  <h2 className=" text-3xl font-Rancho">
                    WE ALWAYS ENSURE THE BEST SERVICE
                  </h2>
                  <p className="  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, voluptates ut. Quas pariatur vitae praesentium,
                    deserunt 
                  </p>
                  <div>
                    <Link to={"/allservices"}>
                      {" "}
                      <button className=" btn">Take Our Services</button>
                    </Link>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
