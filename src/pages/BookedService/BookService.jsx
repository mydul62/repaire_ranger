import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";

const BookService = () => {
  const [bookData, setBookData] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(
        `https://server-omega-dusky.vercel.app/services/service/booked-service/${email}`
      );

      setBookData(data);
    };
    getDataById();
  }, [email]);

  if (!bookData.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <DynamicTitle title={'Booked-services'} />
        <div className="space-y-4 text-center">
          <h3 className="text-3xl">You haven't booked anything yet.</h3>
          <div>
            <Link to="/allservices">
              <button className="btn text-xl font-Roboto bg-green-400">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-[90%] mx-auto my-16">
    <div>
    <h2 className=" text-3xl text-center my-12">All Booked Data({bookData?.length})</h2>
    </div>
      <DynamicTitle title={'Booked-services'} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        {bookData.map((data, i) => (
          <div key={i} className="rounded-lg shadow-md bg-white">
           <div className=" relative">
           <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={data.serviceImage}
              alt={data.serviceName}
            />
            <div className=" top-2 right-2 absolute">
          <h2 className=" text-xl text-white capitalize btn-sm rounded-full bg-green-400 inline-block">{data?.status}</h2>
            </div>
           </div>
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2 text-black">{data.serviceName}</h2>
              <p className="text-gray-700">{data.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://images.pexels.com/photos/4577201/pexels-photo-4577201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt={data.providerName}
                  />
                  <p className="text-gray-900">{data.providerName}</p>
                </div>
                <p className="text-green-500 font-semibold">${data.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookService;
