import { useEffect, useState } from "react";
import { useSearch } from "../../Hooks/SearchProvider";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import DynamicTitle from "../DynamicTitle";
import { Link } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import useAuth from "../../Hooks/useAuth";

const AllServices = () => {
  const [datas, setDatas] = useState([]);
  const { searchResults } = useSearch();
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const axiosCommon = useAxiosCommon();
const {user}=useAuth()
  const fetchServiceData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosCommon.get(`/all-servicefilter?page=${currentPage}&size=${itemPerPage}`);
      setDatas(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  const fetchServiceCount = async () => {
    try {
      const { data } = await axiosCommon.get('/service/services-count');
      setCount(data.count);
    } catch (error) {
      console.error('Error fetching service count:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const { data } = await axiosCommon.get('/favorites');
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, [currentPage, itemPerPage]);

  useEffect(() => {
    fetchServiceCount();
  }, []);

  useEffect(() => {
    setDatas(searchResults);
  }, [searchResults]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(count / itemPerPage) - 1));
  };

  const isFavorite = (id) => {
    return favorites.some(favorite => favorite._id === id);
  };

  const toggleFavorite = async (service) => {
    try {
      if (isFavorite(service._id)) {
        console.log(service?._id);
        const {data} = await axiosCommon.delete(`/favorite/service/${service?._id}`);
          setFavorites(prev => prev.filter(fav => fav._id !== service._id));
      } else {
      console.log('mahim');
        const {data} = await axiosCommon.post('/favorite', {...service,fav_user:user?.email,service_id:service?._id});
          setFavorites(prev => [...prev, { _id: service._id }]);
        }
        
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9 className="animate-spin text-blue-500 text-6xl" />
      </div>
    );
  }

  const numPages = Math.ceil(count / itemPerPage);
  const pages = Array.from({ length: numPages }, (_, i) => i);

  return (
    <div className="max-w-7xl mx-auto my-16">
      <DynamicTitle title="All-services" />

      <div className="md:w-[50%] mx-auto flex justify-center">
        <h1 className="text-center text-3xl md:text-4xl border-b-4 pb-3 border-green-100 inline-block font-semibold font-Rancho">
          Our All Services
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12">
        {datas.map((data, i) => (
          <div key={i} className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
            <div className="flex flex-col mx-auto rounded-lg shadow-md overflow-hidden">
              <img src={data?.imgURL} className="object-cover w-full h-64" alt="Service" />
              <div className="p-6 bg-[#7b3ff20e]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={data?.providerImage} className="w-10 h-10 rounded-full mr-4" alt="User" />
                    <div>
                      <h2 className="text-lg font-semibold">{data?.serviceName}</h2>
                      <p className="text-sm text-gray-600">{data?.providerName}</p>
                    </div>
                  </div>
                  <button onClick={() => toggleFavorite(data)}>
                    {isFavorite(data._id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </button>
                </div>
                <p className="mt-4 mb-3">{data?.description.slice(0, 100)}</p>
                <hr />
                <div className="flex justify-between items-center mt-3">
                  <Link to={`/singleservicedetails/${data?._id}`}>
                    <button className="bg-blue-500 text-white md:px-4 btn-sm md:btn-lg md:py-2 rounded-lg">
                      View Details
                    </button>
                  </Link>
                  <span><span className="font-semibold">Price</span>: ${data?.price}</span>
                  <span><span className="font-semibold">Location</span>: {data?.serviceArea.slice(0, 9)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination section */}
      <div className="flex justify-center mt-8">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="btn btn-outline btn-circle">
          <GrLinkPrevious size={20} className="inline-block mr-2" />
        </button>
        {pages.map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index)} className={`mx-2 text-2xl ${currentPage === index ? "underline" : ''}`}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === numPages - 1} className="btn btn-outline btn-circle">
          <GrLinkNext size={20} className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AllServices;
