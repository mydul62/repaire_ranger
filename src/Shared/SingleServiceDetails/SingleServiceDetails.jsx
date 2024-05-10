import useAuth from "../../Hooks/useAuth";
import userImg from '/userImg.png'

const SingleServiceDetails = () => {
const {user}=useAuth()
  return (
    <div>
    <div className="relative h-[326px]">
    <img className=" w-full h-[326px] object-cover" src={'https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=1024x1024&w=is&k=20&c=SRQy9lxXhn2mHAthxIRBht3HLCRc6os5lfrOgSj3TuA='} alt="" />
    <div className=" left-0 top-0 bottom-0 right-0 absolute inset-1 bg-[#09041780] flex justify-center items-center text-white">
    <h1 className=" text-center  text-4xl font-Rancho font-semibold">Here will be the Title</h1>
    </div>
    </div>
     <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-[90%] mx-auto my-24">
       <div className=" col-span-full md:col-span-2">
       <div>
       <img className=" w-full" src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=1024x1024&w=is&k=20&c=SRQy9lxXhn2mHAthxIRBht3HLCRc6os5lfrOgSj3TuA=" alt="" />
       </div>
       <p className=' mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem cupiditate error unde debitis quisquam totam. Earum autem officia, ratione praesentium voluptate harum nobis ab voluptatibus voluptates illo vero, quaerat minima nesciunt dolore consectetur laboriosam suscipit inventore nostrum iste eligendi consequuntur ipsa optio non neque. Perspiciatis ipsam quisquam eius corporis aperiam deserunt exercitationem. Ea, eligendi fugit, nobis dolore quibusdam iste cumque totam perspiciatis repudiandae, minus atque. Dolorum neque consectetur libero voluptas, rem nulla nihil autem eos alias repellat officiis at quaerat explicabo quas unde. Illum adipisci, fuga explicabo, veritatis quas fugiat pariatur perferendis maxime alias numquam modi molestiae, in ut sunt.</p>
       </div>
       <div className=" col-span-full md:col-span-1 ">
<div className=' bg-[#eaeaea] p-8 py-12 space-y-6 rounded-sm '>
<h2 className=" text-[#535353] text-2xl font-Roboto font-semibold ">Any Display problem will bw solve in very smartly</h2>
        <h2><span className=" font-medium ">Sort Discription :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum veritatis aperiam cupiditate quaerat nam soluta officia ex! Soluta, nisi? </h2>
        <div className=" ">
        <div className=" flex  items-center gap-8 border-t border-b pb-3 border-[#bbb] pt-4">
            <div className="h-9 w-9 ">
            <img src={userImg} alt="" />
            </div>
            <h2>Md mydul islam</h2>
            <div className="card-actions justify-end ">
            </div>
            </div>
        </div>
        <div className=' space-y-4'>
        <h2><span className=" font-medium ">Service Price:</span> $667 </h2>
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  
  
  
  <div className=" w-[95%] shadow-lg  mx-auto  bg-white  rounded-t-badge ">
  <div className=" space-y-6 p-6">
  <h2 className=" text-3xl py-6 font-semibold font-Rancho text-[#535353] "> Add Service Here</h2>
      <div className=" flex gap-6">
      <input type="text" placeholder="Sevice_id" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Service Name" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Image URL" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Provider email" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Provider_name" className="input input-bordered input-md w-full " />
      <input type="date"  className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" placeholder="Price" className="input input-bordered input-md w-full " />
      <input type="text" placeholder="Present Address" className="input input-bordered input-md w-full " />
      </div>
      <div className=" flex gap-6">
      <input type="text" readOnly defaultValue={`${user?.email?user.email:'No user Available'}`} placeholder='Current user Email' className="input input-bordered input-md w-full " />
      <input type="text" defaultValue={`${user?.displayName?user.displayName:'No user Available'}`} readOnly placeholder='Current user name' className="input input-bordered input-md w-full " />
      </div>
  </div>
  
  
  
      <div className=" flex gap-6">
      <input type="submit" value={'Purchase'} className="py-3 rounded-none text-white text-xl  bg-green-500 w-full " />
      </div>
   </div>
    
  </div>
</dialog>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

</div>
       </div>
       
     </div>
    </div>
  );
};

export default SingleServiceDetails;