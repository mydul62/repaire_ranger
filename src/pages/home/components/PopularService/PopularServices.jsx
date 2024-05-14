import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';
import { SlGameController } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const PopularServices = () => {
const [datas,setDatas]=useState([])
  useEffect(()=>{
    axios.get('https://server-omega-dusky.vercel.app/services')
  .then(function (response) {
    // handle success
    setDatas(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])
  return (
   <div className="">
    <div className=" max-w-7xl w-[95%] mx-auto py-16 md:py-24 ">
      <div className=" w-60%">
        <h1 className=" text-3xl md:text-4xl  font-semibold font-Rancho">
          Our Popular <span className=" text-green-500">Services</span>
        </h1>
      </div>
      <div className=" grid  grid-cols-1 gap-8 md:grid-cols-2 my-16 ">
      {
     datas && datas.slice(0,4).map((data,i)=>(
        <div key={i}>
        <div data-aos="fade-up"
     data-aos-duration="1000" className=" flex lg:flex-row flex-col p-2 justify-center gap-4 md:gap-0 shadow-xl bg-[#eaeaeab8]  rounded-l-md">
          <div className=" lg:w-[45%]  ">
            <img src={data?.imgURL} className="  rounded-l-md w-full h-[215px]" alt="Movie" />
          </div>{" "}
          <div className=" w-full lg:w-[55%] h-full space-y-4 bg-base-100 rounded-r-md p-3">
            <div className=" flex justify-between md:gap-4 gap-6 ">
            <div>
            <h2 className="  text-[[#1D3A59] font-medium text-2xl">{data?.serviceName.slice(0,18)}..</h2>
            </div>
            <h2 className=" font-medium mt-2">${data?.price}</h2>
            </div>
            <p className=" ">{data?.description.slice(0,100)}...</p>
            
            <div className=" flex  items-center justify-between border-t border-dashed pt-4">
            <div className="h-9 w-9 rounded-full">
            <img className=" rounded-full" src={data?.providerImage} alt="" />
            </div>
            <h2>{data?.providerName}</h2>
            <div className="card-actions justify-end ">
             <Link to={`/singleservicedetails/${data?._id}`}> <button className="btn btn-primary btn-sm">ViewDetail </button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      ))
      }
      {/* card star  */}
       
        {/* card end  */}
      
      </div>
      <div className=" flex justify-center">
      <Link to={'/allservices'}><button  className=" btn btn-primary flex items-center "> Show more<span><FaArrowRight />
</span></button></Link>
      </div>
    </div>
   </div>
  );
};

export default PopularServices;
