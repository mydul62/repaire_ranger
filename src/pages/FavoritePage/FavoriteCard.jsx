import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const FavoriteCard = ({ service, removeFromFavorites }) => {
  const axiosCommon = useAxiosCommon();

  return (
    <div className="max-w-full bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-4">
      <div className="grid grid-cols-4 p-6">
        <div className="col-span-1">
          <img src={service?.imgURL} className="w-full h-40 object-cover rounded-lg" alt="Service" />
        </div>
        <div className="col-span-3 flex flex-col justify-between ml-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service?.serviceName}</h2>
            <p className="text-gray-700 mb-2">{service?.description.slice(0, 100)}...</p>
            <div className="flex items-center mb-2">
              <img src={service?.providerImage} className="w-8 h-8 rounded-full mr-2 border-2 border-gray-300" alt="Provider" />
              <p className="text-sm text-gray-500">{service?.providerName}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Price:</span>
            <span>${service?.price}</span>
            <div className="flex">
              <Link to={`/singleservicedetails/${service._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                View Details
              </Link>
              <button 
                onClick={() => removeFromFavorites(service._id)} 
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center"
              >
                <FaTrash className="mr-2" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
