import { useEffect, useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import FavoriteCard from "./FavoriteCard";
import { Link } from "react-router-dom";
import { BsPen } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const FavoritePage = () => {
const axiosCommon = useAxiosCommon()
const { user } = useAuth();
const email = user.email;

const { data: favorites, isLoading, error } = useQuery({
  queryKey: ['favoriteservice', email],
  queryFn: async () => {
    const { data } = await axiosCommon.get(`/favorites/favorite/email/${email}`);
    return data;
  },
});
  
if (isLoading) return <LoadingSpinner></LoadingSpinner>
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Service Title</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {favorites &&
              favorites?.map((data) => (
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
                
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritePage;