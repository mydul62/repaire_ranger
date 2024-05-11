import { Link } from "react-router-dom";
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
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="w-[50%] mx-auto flex justify-center">
        <h1 className="text-center text-2xl md:text-4xl border-b-4 pb-3 border-green-100 inline-block f  font-semibold font-Rancho">
          Our All Services
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 my-16">
        {datas.map((data, i) => (
          <div key={i} className=" w-[70%] mx-auto">
         <div className="flex flex-col  mx-auto rounded-lg shadow-md overflow-hidden">
  <img src={data?.imgURL} className="object-cover w-full h-64" alt="Movie" />
  <div className=" p-6">
    <div className="flex items-center">
      <img src={data?.providerImage} className="w-10 h-10 rounded-full mr-4" alt="User" />
      <div>
        <h2 className="text-lg font-semibold">{data?.serviceName}</h2>
        <p className="text-sm text-gray-600">{data?.providerName}</p>
      </div>
    </div>
    <p className="mt-4 mb-3 ">{data?.description.slice(0, 100)}</p>
    <hr />
    <div className="flex justify-between items-center mt-3">
<Link to={`/singleservicedetails/${data?._id}`}> <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button></Link>
      <span className=""><span className=" font-semibold">Badget</span> : ${data?.price}</span>
      <span className=""><span className=" font-semibold">Location</span> :{data?.serviceArea}</span>
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
