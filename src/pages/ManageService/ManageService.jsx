import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import  axios  from 'axios';
import { BsPen } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageService = () => {
  const [cartInfo,setCardInfo]=useState([])
  const {user}=useAuth()
  
  
  
  
  const email = user.email;
  
  useEffect(() => {
   const getDataById = async()=>{
    const {data} = await axios.get(`http://localhost:5000/services/service/${email}`)
    
    setCardInfo(data)
   }
   getDataById()
       
  },[email]);
  
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/services/service/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const updatedData = cartInfo.filter((item) => item._id !== id);
            setCardInfo(updatedData);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  };
  
  const handleUpdate = (e,id)=>{
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
   axios.put(`http://localhost:5000/services/update/${id}`, updateInfo)
  .then(function (response) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Service Update SuccessFull",
      showConfirmButton: false,
      timer: 1500
    });
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(updateInfo,id);
  }
  
  if (!cartInfo.length > 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className=" space-y-4  text-center">
          <h3 className=" text-3xl ">You Do Not Added Service</h3>
          <div>
          <Link to={'/addservice'}>
            <button className=" btn text-xl font-Roboto bg-green-400">Add Service</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" max-w-7xl w-[95%] mx-auto my-16">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Service Title</th>
        <th>Service Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
      cartInfo && cartInfo.map((data,i)=>(
        <tr key={data._id}>
        <th>
        {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded-md w-16 h-16 md:w-20 md:h-20">
                <img src={data.imgURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          <h3 className=" w-[100%] md:w-[50%]">{data?.description.slice(0,50)}</h3>
        </td>
        <td >
<button className="btn btn-circle text-green-500" onClick={()=>document.getElementById('my_modal_1').showModal()}><BsPen size={20}/></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">


  <form onSubmit={(e)=>handleUpdate(e,data?._id)} className=" w-[95%] shadow-lg   mx-auto  bg-white  rounded-t-badge ">
  <div className=" space-y-6 p-6">
  <h2 className=" text-3xl py-6 font-semibold font-Rancho text-[#535353] "> Update Service Here</h2>
      <div className=" flex gap-6">
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




    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </td>
        <th>
          <button onClick={()=>handleDelete(data._id)} className="btn btn-circle text-red-700 "><AiTwotoneDelete  size={25}/></button>
        </th>
      </tr>
      ))
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManageService;