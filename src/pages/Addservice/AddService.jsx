import useAuth from "../../Hooks/useAuth";

const AddService = () => {
 const  {user}=useAuth()
  return (
    <div className="flex flex-col py-16 justify-center items-center bg-[#f0f2f5]">
   <div className=" w-[95%] shadow-lg  md:w-[40%] mx-auto  bg-white  rounded-t-badge ">
  <div className=" space-y-6 p-6">
  <h2 className=" text-3xl py-6 font-semibold font-Rancho text-[#535353] "> Add Service Here</h2>
      <div className=" flex gap-6">
      <input type="text" placeholder="Image URL" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Name" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Price" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Area" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" readOnly placeholder={`${user?.email?user.email:'No user Available'}`} className="input input-bordered input-md w-full " />
      <input type="text" readOnly placeholder={`${user?.displayName?user.displayName:'No user Available'}`} className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" readOnly placeholder={`${user?.photoURL?user.photoURL:'No user Available'}`} className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Description" className="input py-10 input-bordered input-md w-full " />
      </div>
  </div>
      <div className=" flex gap-6">
      <input type="submit" value={'Submit'} className="py-3 rounded-none text-white text-xl  bg-green-500 w-full " />
      </div>
   </div>
    </div>
  );
};

export default AddService;