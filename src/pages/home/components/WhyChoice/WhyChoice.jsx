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
      <div className=" flex justify-start gap-6">
      <img className=" h-[295px] w-full" src={'https://i.ibb.co/g3HfWGd/repairman-s-workplace-with-cell-phone-special-tools-desk.jpg'} alt="" />
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
      <p className=" w-[90%] md:w-[80%] text-[#535353]">Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed pulvinar lectus vitae sem consequat, lobortis sodales neque tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a ullamcorper.</p>
      <h2 className=" text-[#010101] font-Roboto font-bold"><Link className=" flex items-center  gap-1">explore<FaArrowRightLong />
</Link></h2>
      </div>
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
      <p className=" w-[90%] md:w-[80%] text-[#535353]">Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed pulvinar lectus vitae sem consequat, lobortis sodales neque tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a ullamcorper.</p>
      <h2 className=" text-[#010101] font-Roboto font-bold"><Link className=" flex items-center  gap-1">explore<FaArrowRightLong />
</Link></h2>
      </div>
      </div>
       {/* card end  */}
        {/* card star  */}
      <div className=" flex justify-start gap-6">
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