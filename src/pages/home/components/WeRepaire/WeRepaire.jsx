import { CiMobile1 } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FiTablet } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SlGameController } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";
AOS.init();


const WeRepaire = () => {


console.log();
  return (
    <div className="max-w-7xl w-[95%] mx-auto" >
      <div className=" my-16">
      <h2 className=" text-center font-bold font-Roboto text-3xl">WE REPAIRE</h2>
      </div>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 lg:grid-cols-3">
      
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <CiMobile1 size={60} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">MOBILE PHONES</h2>
      <p className=" w-[95%] md:w-[80%]">Restore connectivity and functionality to your mobile devices. Expert repairs ensure seamless communication and uninterrupted access to your digital world.
</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <BsCameraReels size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">VIDEO CAMERAS
</h2>
      <p className=" w-[95%] md:w-[80%]">Preserve precious moments with precision. Repaireranger offers expert servicing to ensure your video cameras capture every memory flawlessly.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <RiComputerLine size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">COMPUTERS</h2>
      <p className=" w-[95%] md:w-[80%]">Reignite productivity with reliable computer repairs. From hardware fixes to software solutions, Repaireranger restores your digital workspace to optimal performance.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <FiTablet size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">TABLETS</h2>
      <p className=" w-[80%]">Revive your portable powerhouse. Repairerangers expert technicians specialize in tablet repairs, ensuring you stay connected and productive on the go..</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <MdOutlinePhotoCamera size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">PHOTO CAMERAS
</h2>
      <p className="w-[95%] ,md:w-[80%]">Capture life's moments in stunning clarity. Repaireranger's camera repairs restore functionality, so you never miss a shot of your precious memories.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div  data-aos="flip-left" className=" flex justify-start gap-6">
      <div>
      <SlGameController size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">GAME CONSOLES</h2>
      <p className=" w-[80%]">Immerse yourself in gaming excellence. Repaireranger's expert repairs ensure your game consoles deliver unparalleled entertainment for hours of fun.</p>
      </div>
      </div>
       {/* card end  */}
     
      </div>
      
      <div>
      
      </div>
    </div>
  );
};

export default WeRepaire;