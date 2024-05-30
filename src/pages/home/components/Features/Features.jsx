import { Link } from "react-router-dom";
import "./features.css";
import "aos/dist/aos.css";
const Features = () => {
  return (
    <div className=" max-w-7xl mx-auto w-[95%] mt-16 md:my-24">
      <div className=" flex justify-center items-center pb-16">
        <h2 className="text-3xl pb-2 uppercase border-b-4  border-[#3c1d42] inline-block font-Roboto font-semibold text-center">
          Features
        </h2>
      </div>

      <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* div star */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="relative  main-div h-[350px] rounded-lg"
        >
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/wQVdwnf/stock-photo-wrenches-pliers-screwdriver-laptop-service-support.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4  rounded-lg flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">Leptop Repaire</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Reignite productivity with reliable computer repairs. From hardware fixes to software solutions, Repaireranger restores your digital workspace to optimal perf
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
        {/* div star */}
        <div  data-aos="fade-up"
          data-aos-duration="700" className="relative  main-div h-[350px] rounded-lg">
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/V9JhCHP/printers-344016-1280.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4  rounded-lg flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">Printer Repaire</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Restore efficiency with trusted printer repairs. From hardware adjustments to software optimizations, Repaireranger ensures your printing environment operates at peak performance.
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
        {/* div star */}
        <div  data-aos="fade-up"
          data-aos-duration="700" className="relative  main-div h-[350px] rounded-lg">
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/cJT5sC4/pc-5737958-1280.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4  rounded-lg flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">Pc Repaire</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Reignite productivity with reliable computer repairs. From hardware fixes to software solutions, Repaireranger restores your digital workspace to optimal performance.
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
        {/* div star */}
        <div  data-aos="fade-up"
          data-aos-duration="700" className="relative  main-div h-[350px] rounded-lg">
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/4FMvDfy/man-8308722-1280.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4 rounded-lg  flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">
              SmartPhones Repaire
            </h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Restore connectivity and functionality to your mobile devices. Expert repairs ensure seamless communication and uninterrupted access to your digital world.
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
        {/* div star */}
        <div  data-aos="fade-up"
          data-aos-duration="700" className="relative  main-div h-[350px] rounded-lg">
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/SPdc2jW/man-5866475-1280.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4 rounded-lg  flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">Windows setup</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Revive your portable powerhouse. Repairerangers expert technicians specialize in tablet repairs, ensuring you stay connected and productive on the go..
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
        {/* div star */}
        <div  data-aos="fade-up"
          data-aos-duration="700" className="relative  main-div h-[350px] rounded-lg">
          <img
            className=" w-full h-[350px] rounded-lg"
            src="https://i.ibb.co/Fm2R0P8/man-8312827-1280.jpg"
            alt=""
          />
          <div className=" sort-div  text-white p-4 rounded-lg  flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#46a739a2]">
            <h2 className="text-xl font-Rancho font-bold  ">Leptop Repaire</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
              Revive your portable powerhouse. Repairerangers expert technicians specialize in tablet repairs, ensuring you stay connected and productive on the go..
              </p>
              <Link to={"/allservices"}>
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        {/* div end */}
      </div>
    </div>
  );
};

export default Features;
