import { CiMobile1 } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FiTablet } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SlGameController } from "react-icons/sl";


const WeRepaire = () => {
  return (
    <div className=" max-w-7xl w-[95%] mx-auto">
      <div className=" my-12">
      <h2 className=" text-center font-bold font-Roboto text-3xl">WE REPAIRE</h2>
      </div>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
      
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <CiMobile1 size={60} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">MOBILE PHONES</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <BsCameraReels size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">VIDEO CAMERAS
</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <RiComputerLine size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">COMPUTERS</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <FiTablet size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">TABLETS</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <MdOutlinePhotoCamera size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">PHOTO CAMERAS
</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
      </div>
      </div>
       {/* card end  */}
      {/* card star  */}
      <div className=" flex justify-start gap-6">
      <div>
      <SlGameController size={55} color="red" />
      </div>
      <div className=" space-y-4">
      <h2 className="  font-bold font-Roboto">GAME CONSOLES</h2>
      <p className=" w-[80%]">Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
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