import { SlNotebook } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhyChoice = () => {
  return (
   <div className=" bg-[#eee] py-16 md:py-24">
    <div className=" max-w-7xl w-[95%]  mx-auto ">
      <div className=" mb-12">
      <h2 className=" text-center font-bold font-Roboto text-3xl text-[#010101]">WHY CHOOSE US</h2>
      </div>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      
      {/* card star  */}
      <div data-aos="flip-left" data-aos-duration="2500"  className="   flex justify-start gap-6">
      <img className="h-[295px] w-full" src={'https://i.ibb.co/g3HfWGd/repairman-s-workplace-with-cell-phone-special-tools-desk.jpg'} alt="" />
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex  p-12 justify-start gap-6">
      <div>
      <FaRegUser  size={70} color="gray" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto text-[#020202]">CORPORATE SERVICES
</h2>
      <p className=" w-[90%] md:w-[80%] text-[#535353]">Elevate your business with tailored corporate services. From strategy to technology, we drive growth, efficiency, and innovation for lasting success</p>
      <h2 className=" text-[#010101] hover:text-green-500 font-Roboto font-bold"><Link to={'/allservices'} className=" flex items-center  gap-1">explore<FaArrowRightLong />
</Link></h2>
      </div>
      </div>
       {/* card end  */}
            {/* card star  */}
      <div data-aos="flip-right" data-aos-duration="2500" className="flex md:hidden justify-start gap-6">
      <img className=" h-[295px] w-full" src={'https://i.ibb.co/82ykpbw/collage-customer-experience-concept.jpg'} alt="" />
      </div>
       {/* card end  */}
       
      {/* card star  */}
      <div className=" flex r p-12 justify-start gap-6">
      <div>
      <SlNotebook  size={70} color="gray" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto text-[#020202]">QUALITY GUARANTEE
</h2>
      <p className=" w-[90%] md:w-[80%] text-[#535353]">Assuring excellence in every detail, our quality guarantee ensures satisfaction, reliability, and peace of mind for every product and service we provide.</p>
      <h2 className=" text-[#010101] font-Roboto hover:text-green-500 font-bold"><Link to={'/allservices'} className=" flex items-center  gap-1">explore<FaArrowRightLong />
</Link></h2>
      </div>
      </div>
       {/* card end  */}
        {/* card star  */}
      <div data-aos="flip-right" data-aos-duration="2500" className=" md:flex hidden justify-start gap-6">
      <img className=" h-[295px] w-full" src={'https://i.ibb.co/82ykpbw/collage-customer-experience-concept.jpg'} alt="" />
      </div>
       {/* card end  */}
  
      </div>
      
      <div>
      
      </div>
    </div>
   </div>
  );
};

export default WhyChoice;