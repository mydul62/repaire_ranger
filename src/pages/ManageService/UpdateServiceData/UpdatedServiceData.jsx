import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios"
import useAuth from "../../../Hooks/useAuth";
const UpdatedServiceData = () => {
const [data,setData]=useState([])
const {id} = useParams()
const {user}=useAuth()
const navigate = useNavigate()

useEffect(() => {
  const getDataById = async () => {
    try {
      const { data } = await axios.get(
        `https://server-omega-dusky.vercel.app/services/${id}`
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  getDataById();
}, [id]);
  const handleUpdate = (e)=>{
    e.preventDefault()
   const form = e.target;
   
   const imgURL = form.imgURL.value;
   let serviceName = form.serviceName.value;
   const price = form.price.value;
   const serviceArea = form.serviceArea.value;
   const description = form.description.value;
   const providerEmail =user?.email ;
   const providerName = user?.displayName;
   const providerImage = user?.photoURL;
   const updateInfo = {
   imgURL,
    serviceName,
    price,
    serviceArea,
    description,
    providerEmail,
    providerImage,
    providerName
    
   }
   axios.put(`https://server-omega-dusky.vercel.app/services/update/${id}`, updateInfo)
  .then(function (response) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Service Update SuccessFull",
      showConfirmButton: false,
      timer: 1500
    });
    form.reset()
    navigate('/dashboard/manageservice')
  })
  .catch(function (error) {
    console.log(error);
  });
  serviceName=''
  }
  
  return (
    <div className=" max-w-7xl mx-auto my-24 fle justify-center items-center">
    <div className=" w-[90%]mx-auto">
    <form onSubmit={(e)=>handleUpdate(e)} className=" w-[95%] shadow-lg   mx-auto  bg-white  rounded-t-badge ">
  <div className=" space-y-6 p-6">
  <h2 className=" text-3xl py-6 font-semibold font-Rancho text-[#535353] "> Update Service Here</h2>
      <div className="block md:flex gap-6">
      <input type="text" placeholder="Image URL" name="imgURL" defaultValue={data?.imgURL} className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Name" defaultValue={data?.serviceName} name="serviceName" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Price" name="price" defaultValue={data?.price} className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Area" defaultValue={data?.serviceArea} name="serviceArea" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" readOnly value={`${user?.email?user.email:'No user Available'}`} placeholder='Provider Email' name="providerEmail" className="input input-bordered input-md w-full " />
      <input type="text" readOnly name="providerName" value={`${user?.displayName?user.displayName:'No user Available'}`}  placeholder='Provider Name' className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" name="providerImage" value={`${user?.photoURL?user.photoURL:'No user Available'}`} readOnly placeholder='' className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Description" defaultValue={data.description} name="description" className="input h-24 input-bordered input-md w-full " />
      </div>
  </div>
      <div className=" flex gap-6">
      <input type="submit" value={'Update Now'} className="py-3 rounded-none text-white text-xl  bg-green-500 w-full " />
      </div>
   </form>
    </div>
    </div>
  );
};

export default UpdatedServiceData;