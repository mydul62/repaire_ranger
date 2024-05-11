import { Link } from "react-router-dom";
import userImg from "/userImg.png";
import { useEffect, useState } from "react";
import axios from 'axios';

const AllServices = () => {
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
console.log(datas);
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="w-[50%] mx-auto">
        <h1 className="text-center text-2xl md:text-4xl text-[#1D3A59] font-semibold font-Rancho">
          Our All Services
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 my-16">
        {datas.map((data, i) => (
          <div key={i} className=" w-[70%] mx-auto">
            <div className="flex justify-center gap-4 shadow-xl bg-[#eaeaeae3] p-3 rounded-md">
              <div className="w-[45%]">
                <img src={data?.imgURL} className="rounded-md max-h-[250px] w-full" alt="Movie" />
              </div>{" "}
              <div className="w-[55%] space-y-4 bg-base-100 p-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-[[#1D3A59] font-medium text-2xl">{data?.serviceName}</h2>
                  <h2>$434</h2>
                </div>
                <p className="text-[#535d67]">{data?.description.slice(0,100)}</p>
                <div className="flex items-center justify-between border-t-2 border-dashed pt-4">
                  <div className="h-9 w-9">
                    <img src={userImg} alt="" />
                  </div>
                  <h2>Md mydul islam</h2>
                  <div className="card-actions justify-end">
                  <Link to={`/singleservicedetails/${data?._id}`}><button className="btn btn-primary btn-sm">ViewDetail</button></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default AllServices;
