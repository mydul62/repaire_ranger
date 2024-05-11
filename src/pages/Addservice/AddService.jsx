import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import Swal from 'sweetalert2'

const AddService = () => {
 const  {user}=useAuth()
 
 const handleProductSubmit = (e)=>{
   e.preventDefault()
   const form = e.target;
   
   const imgURL = form.imgURL.value;
   const serviceName = form.serviceName.value;
   const price = form.price.value;
   const serviceArea = form.serviceArea.value;
   const description = form.description.value;
   const providerEmail =user?.email ;
   const providerName = user?.displayName;
   const providerImage = user?.photoURL;
   
   const serviceInfo = {
   imgURL,
    serviceName,
    price,
    serviceArea,
    description,
    providerEmail,
    providerImage,
    providerName
    
   }
   axios.post('http://localhost:5000/services', serviceInfo)
  .then(function (response) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your service has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(serviceInfo);
 }
  return (
    <div className="flex flex-col py-16 justify-center items-center bg-[#f0f2f5]">
   <form onSubmit={handleProductSubmit} className=" w-[95%] shadow-lg  md:w-[40%] mx-auto  bg-white  rounded-t-badge ">
  <div className=" space-y-6 p-6">
  <h2 className=" text-3xl py-6 font-semibold font-Rancho text-[#535353] "> Add Service Here</h2>
      <div className=" flex gap-6">
      <input type="text" placeholder="Image URL" name="imgURL" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Name" name="serviceName" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Price" name="price" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Area" name="serviceArea" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" readOnly defaultValue={`${user?.email?user.email:'No user Available'}`} placeholder='Provider Email' name="providerEmail" className="input input-bordered input-md w-full " />
      <input type="text" readOnly name="providerName" defaultValue={`${user?.displayName?user.displayName:'No user Available'}`}  placeholder='Provider Name' className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" name="providerImage" defaultValue={`${user?.photoURL?user.photoURL:'No user Available'}`} readOnly placeholder='' className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Description" name="description" className="input py-10 input-bordered input-md w-full " />
      </div>
  </div>
      <div className=" flex gap-6">
      <input type="submit" value={'Add Now'} className="py-3 rounded-none text-white text-xl  bg-green-500 w-full " />
      </div>
   </form>
    </div>
  );
};

export default AddService;