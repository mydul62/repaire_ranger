import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";
const BookService = () => {
  const [bookData, setBookData] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  console.log(bookData);
  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(
        `https://server-omega-dusky.vercel.app/services/service/booked-service/${email}`
      );

      setBookData(data);
    };
    getDataById();
  }, [email]);

  if (!bookData.length > 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
         <DynamicTitle title={'Booked-services'}></DynamicTitle>

        <div className=" space-y-4  text-center">
          <h3 className=" text-3xl ">You Do Not Booked Yet</h3>
          <div>
          <Link to={'/allservices'}>
            <button className=" btn text-xl font-Roboto bg-green-400">Book Now</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="relative h-[326px]">
        <img
          className="w-full h-[326px] object-cover"
          src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=1024x1024&w=is&k=20&c=SRQy9lxXhn2mHAthxIRBht3HLCRc6os5lfrOgSj3TuA="
          alt=""
        />
        <div className="left-0 top-0 bottom-0 right-0 absolute inset-1 bg-[#09041780] flex justify-center items-center text-white">
          <h1 className="text-center text-4xl font-Rancho font-semibold">
            Book data {bookData?.length || '0'}
          </h1>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-12 grid-cols-1">
        <div>
          <div className=" gap-8  my-16 space-y-6 ">
            {bookData &&
              bookData.map((data, i) => (
                <div key={i}>
                  <div className=" flex md:flex-row flex-col h-[120px] justify-center shadow-xl bg-[#eaeaeae3]  rounded-md">
                    <div className="  md:w-[45%] ">
                      <img
                        src={data?.serviceImage}
                        className="  rounded-md w-full h-full"
                        alt="Movie"
                      />
                    </div>{" "}
                    <div className=" w-full md:w-[55%] space-y-4 bg-base-100 p-3">
                      <div className=" flex justify-between md:gap-4 gap-6 ">
                        <div>
                          <h2 className="  text-[[#1D3A59] font-medium text-xl">
                            {data?.serviceName}
                          </h2>
                        </div>
                        <h2 className=" font-medium mt-2">${data?.price}</h2>
                      </div>
                      <p className=" text-[#535d67]">{data?.description}</p>

                      <div className=" flex  items-center justify-between border-t-2 border-dashed pt-4">
                        <div className=" flex items-center  rounded-full h-9 w-9 ">
                          <img
                            className=" rounded-full h-9 w-9"
                            src="https://images.pexels.com/photos/4577201/pexels-photo-4577201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                          />
                        </div>
                        <h2>{data?.providerName}</h2>
                        <div className="card-actions justify-end ">
                          <button className=" flex items-center  px-3 text-white bg-green-400 rounded-full">
                            {data?.status}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* card star  */}
          </div>
        </div>
        <div className=" mt-16">hre will be the card data</div>
      </div>
    </div>
  );
};

export default BookService;
