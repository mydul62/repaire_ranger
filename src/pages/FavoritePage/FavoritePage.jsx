import { useEffect, useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import FavoriteCard from "./FavoriteCard";
import { Link } from "react-router-dom";
import { BsPen } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const FavoritePage = () => {
const [favorites,setFavorites]=useState([]);
const axiosCommon = useAxiosCommon()
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data } = await axiosCommon.get('/favorites');
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    }
    fetchFavorites();
  }, []);
  
  
console.log(favorites);
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Service Title</th>
              <th>Price</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favorites &&
              favorites.map((data) => (
                <tr key={data._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask roundedr-r-2xl rounded-t-2xl rounded-l-2xl w-16 h-16 md:w-20 md:h-20">
                          <img src={data.imgURL} alt="Service" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.serviceName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ${data?.price}
                  </td>
                  <td>
                  <Link to={`/singleservicedetails/${data?._id}`}>
                  <button className=" btn btn-sm">Details</button>
                  </Link>
                   
                  </td>
                  <th>
                    <button
                    
                      className="btn btn-circle text-red-700"
                    >
                      <AiTwotoneDelete size={25} />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritePage;