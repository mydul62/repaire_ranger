import image1 from "/image1.jpg";
import user from "/user.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PopularServices = () => {

const datas = [1,2,3,4,5,6]

  return (
    <div className=" max-w-7xl mx-auto my-24">
      <div className=" w-60%">
        <h1 className=" text-2xl md:text-4xl text-[#1D3A59] font-semibold font-Rancho">
          Our Popular Services
        </h1>
      </div>
      <div className=" grid  grid-cols-1 gap-8 md:grid-cols-2 my-16 ">
      {
     datas && datas.slice(0,4).map((data,i)=>(
        <div key={i}>
        <div className=" flex md:flex-row flex-col justify-center gap-4 shadow-xl bg-[#eaeaeae3] p-3 rounded-md">
          <div className=" md:w-[45%] ">
            <img src={image1} className="  rounded-md w-full h-full" alt="Movie" />
          </div>{" "}
          <div className=" w-full md:w-[55%] space-y-4 bg-base-100 p-3">
            <div className=" flex justify-between md:gap-4 gap-6 ">
            <div>
            <h2 className="  text-[[#1D3A59] font-medium text-2xl">Mobile dispaly change and fix</h2>
            </div>
            <h2 className=" font-medium mt-2">$434</h2>
            </div>
            <p className=" text-[#535d67]">Embrace change, seize opportunities, and cultivate resilience for a fulfilling journey ahead.</p>
      
            <div className=" flex  items-center justify-between border-t-2 border-dashed pt-4">
            <div className="h-9 w-9 ">
            <img src={user} alt="" />
            </div>
            <h2>Md mydul islam</h2>
            <div className="card-actions justify-end ">
              <button className="btn btn-primary btn-sm">ViewDetail </button>
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
  );
};

export default PopularServices;
