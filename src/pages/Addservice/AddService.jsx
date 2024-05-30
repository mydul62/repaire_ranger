import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import Swal from 'sweetalert2'
import DynamicTitle from "../DynamicTitle";
import { setLogLevel } from "firebase/app";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
// import { imageUpload } from "../../Utils";
import { TbFidgetSpinner } from "react-icons/tb";

const AddService = () => {
 const  {user}=useAuth()
 const axiosCommon = useAxiosCommon()
 const  [imgURL,setImgURL]=useState('')
 
const {mutateAsync,isPending}=useMutation({
mutationKey:'postservices',
mutationFn:async (serviceInfo)=>{
  const {data} = await axiosCommon.post('/services',serviceInfo)
  if(data.acknowledged){
    Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your service has been saved",
  showConfirmButton: false,
  timer: 1500
});
    
  }
}
})

 
 
 
 
 const handleProductSubmit = async(e)=>{
   e.preventDefault()
   const form = e.target;
   
   const image = form.image.files[0]
   const serviceName = form.serviceName.value;
   const price = form.price.value;
   const serviceArea = form.serviceArea.value;
   const description = form.description.value;
   const providerEmail =user?.email ;
   const providerName = user?.displayName;
   const providerImage = user?.photoURL;
   
  
    
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_iMGBB_API_KEY}`,
      formData
    )
    console.log(data.data.display_url);  
    
  
    const serviceInfo = {
    imgURL:data.data.display_url,
    serviceName,
    price,
    serviceArea,
    description,
    providerEmail,
    providerImage,
    providerName
    
   }
  await mutateAsync(serviceInfo)
 }
  return (
    <div className="flex flex-col min-h-screen mt-16 ">
   <form onSubmit={handleProductSubmit} className=" w-full md:w-[80%] bg-[#eaeaea] mx-auto  shadow-inner border rounded-lg">
      <DynamicTitle title={'Add Service'} />
      <div className="p-8  space-y-6">
        <h2 className="text-4xl font-semibold uppercase text-gray-700">Add Service Here</h2>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Service Name" 
            name="serviceName" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
         
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Price" 
            name="price" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
          <input 
            type="text" 
            placeholder="Service Area" 
            name="serviceArea" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            readOnly 
            defaultValue={user?.email ? user.email : 'No user Available'} 
            placeholder="Provider Email" 
            name="providerEmail" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
          <input 
            type="text" 
            readOnly 
            defaultValue={user?.displayName ? user.displayName : 'No user Available'} 
            placeholder="Provider Name" 
            name="providerName" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
        </div>
        
        <div className="space-y-4">
          <input 
            type="text" 
            readOnly 
            defaultValue={user?.photoURL ? user.photoURL : 'No user Available'} 
            name="providerImage" 
            className="input bg-white w-full py-3 px-4 rounded-md"
          />
          <textarea 
            placeholder="Description" 
            name="description" 
            className="input bg-white w-full py-3 px-4 rounded-md h-32"
          ></textarea>
           <input 
            type="file" 
            required
            placeholder="image" 
            name="image" 
            id="image"
            accept="image/*"
            className="input bg-white py-3 px-4 rounded-md"
          />
        </div>
        <button  className="  flex justify-center items-center py-4 mt-6 px-4 text-white uppercase text-xl bg-green-500 rounded-md hover:bg-green-600 text-center transition duration-300" >{isPending?<TbFidgetSpinner className="animate-spin" /> 
:'Add Now'}</button>
       
      </div>
    </form>
    </div>
  );
};

export default AddService;