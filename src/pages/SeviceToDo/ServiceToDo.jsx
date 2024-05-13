import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import  axios  from 'axios';
import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";
// import { Link } from "react-router-dom";
const ServiceToDo = () => {
  const [toDoData,setToDOData]=useState([])
  const {user}=useAuth()
  const email = user.email;
  
  useEffect(() => {
   const getDataById = async()=>{
    const {data} = await axios.get(`https://server-omega-dusky.vercel.app/services/service/booked-service/too-service/${email}`)
    
    setToDOData(data)
   }
   getDataById()
       
  },[email]);

const handleSort =async(id,e)=>{
  const status = (e.target.value);
  console.log(status);
  console.log(id);
  const {data} = await axios.patch(`https://server-omega-dusky.vercel.app/services/service/booked-service/too-service/update/${id}`,{status})
  console.log(data);
}


if (!toDoData.length > 0) {
  return (
    <div className="flex justify-center items-center min-h-screen">
       <DynamicTitle title={'ServiceToDo'}></DynamicTitle>

      <div className=" space-y-4  text-center">
        <h3 className=" text-3xl ">No One Bid Your on Service</h3>
        <div>
        <Link to={'/'}>
          <button className=" btn text-xl font-Roboto bg-green-400">Back To Home</button>
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
        <th>Client Information</th>
        <th>Date And Time</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
      toDoData && toDoData.map((data,i)=>(
        <tr key={data._id}>
        <th>
       <p className=" h-8 w-8 bg-[#4183504b] rounded-full flex justify-center items-center"> {i+1}</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded-md w-16 h-16 md:w-20 md:h-20">
                <img src={data.serviceImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.serviceName}</div>
              <div className="font-bold">Price : ${data.price}</div>
            </div>
          </div>
        </td>
        <td>
         <h2 className=" font-semibold font-Roboto">{data?.userName}</h2>
         <h2 className=" text-[13px] font-Roboto text-[#535353]">{data?.providerEmail}</h2>
         <h2 className="text-[13px] font-Roboto text-[#535353]">{data?.instructions}</h2>
        </td>
        <td >
        Date : {data?.serviceDate}
        </td>
        <th>
        <div className="flex justify-center ">
            <select
              onChange={(e)=>handleSort(data._id,e)}
              className=" py-2 rounded-md px-2 select-info bg-[#687f64] border-none text-white font-bold  w-[150px]"
            >
              <option selected disabled  defaultValue>
                {data?.status}
              </option>
              <option value={'Working'}>Working</option>
              <option value={'Complete'}>Complete</option>
            </select>
          </div>
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

export default ServiceToDo;