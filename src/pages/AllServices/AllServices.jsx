import { useEffect, useState } from "react";
import axios from 'axios';
import { useSearch } from "../../Hooks/SearchProvider";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import DynamicTitle from "../DynamicTitle";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [datas, setDatas] = useState([]);
  const { searchResults } = useSearch();
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  // const [loading,setLoading]=useState(true)
  const numbeOfpages = Math.ceil(count /itemPerPage)
   const pages = [...Array(numbeOfpages).keys()]
  useEffect(() => {
    const getServiceData = async () => {
      const { data } = await axios.get(`https://server-omega-dusky.vercel.app/all-servicefilter?page=${currentPage}&size=${itemPerPage}`);
      setDatas(data);
    }
    getServiceData();
  }, [currentPage, itemPerPage]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get('https://server-omega-dusky.vercel.app/service/services-count');
      setCount(data.count);
    }
    getCount();
  }, []);

  useEffect(() => {
    setDatas(searchResults);
  }, [searchResults]);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="max-w-7xl mx-auto my-16">
       <DynamicTitle title={'All-services'}></DynamicTitle>

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
              <div className=" p-6 bg-[#7b3ff20e]">
                <div className="flex items-center">
                  <img src={data?.providerImage} className="w-10 h-10 rounded-full mr-4" alt="User" />
                  <div>
                    <h2 className="text-lg font-semibold">{data?.serviceName}</h2>
                    <p className="text-sm text-gray-600">{data?.providerName}</p>
                  </div>
                </div>
                <p className="mt-4 mb-3 ">{data?.description.slice(0, 100)}</p>
                <hr />
                <div className="flex justify-between items-center mt-3">
                 <Link to={`/singleservicedetails/${data?._id}`}> <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    View Details
                  </button></Link>
                  <span className=""><span className="font-semibold">Price</span>: ${data?.price}</span>
                  <span className=""><span className="font-semibold">Location</span>: {data?.serviceArea}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination section */}
      <div className="flex justify-center mt-8">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
          <GrLinkPrevious className="inline-block mr-2" />
          Previous
        </button>
       { pages.map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index)} className={`px-4 py-2 rounded-lg mr-4 ${currentPage === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(count / itemPerPage) - 1} className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4" >
          Next
          <GrLinkNext className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AllServices;
