import { useEffect, useState } from "react";
import userImg from "/userImg.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';

const PopularServices = () => {
const [datas,setDatas]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/services')
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
    <div className=" max-w-7xl mx-auto py-24 ">
      <div className=" w-60%">
        <h1 className=" text-2xl md:text-4xl  font-semibold font-Rancho">
          Our Popular <span className=" text-green-500">Services</span>
        </h1>
      </div>
      <div className=" grid  grid-cols-1 gap-8 md:grid-cols-2 my-16 ">
      {
     datas && datas.slice(0,4).map((data,i)=>(
        <div key={i}>
        <div className=" flex md:flex-row flex-col justify-center gap-4 shadow-xl bg-[#eaeaeab8] p-3 rounded-md">
          <div className=" md:w-[45%] ">
            <img src={data?.imgURL} className="  rounded-md w-full h-[250px]" alt="Movie" />
          </div>{" "}
          <div className=" w-full md:w-[55%] space-y-4 bg-base-100 rounded-r-md p-3">
            <div className=" flex justify-between md:gap-4 gap-6 ">
            <div>
            <h2 className="  text-[[#1D3A59] font-medium text-2xl">{data?.serviceName}</h2>
            </div>
            <h2 className=" font-medium mt-2">${data?.price}</h2>
            </div>
            <p className=" ">{data?.description.slice(0,100)}</p>
            
            <div className=" flex  items-center justify-between border-t-2 border-dashed pt-4">
            <div className="h-9 w-9 ">
            <img src={data?.providerImage} alt="" />
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
