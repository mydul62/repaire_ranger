import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { BsPen } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";

const ManageService = () => {
  const [cartInfo, setCardInfo] = useState([]);
  const { user } = useAuth();

  const email = user.email;

  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(
        `https://server-omega-dusky.vercel.app/services/service/${email}`
      );

      setCardInfo(data);
    };
    getDataById();
  }, [email]);
  console.log(cartInfo);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://server-omega-dusky.vercel.app/services/service/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const updatedData = cartInfo.filter((item) => item._id !== id);
            setCardInfo(updatedData);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };



  if (!cartInfo.length > 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <DynamicTitle title={"Manages-services"}></DynamicTitle>

        <div className=" space-y-4  text-center">
          <h3 className=" text-3xl ">You Do Not Added Service</h3>
          <div>
            <Link to={"/addservice"}>
              <button className=" btn text-xl font-Roboto bg-green-400">
                Add Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" max-w-7xl w-[95%] mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Title</th>
              <th>Service Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartInfo &&
              cartInfo.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-md w-16 h-16 md:w-20 md:h-20">
                          <img
                            src={data.imgURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.serviceName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className=" w-[100%] md:w-[50%]">
                      {data?.description.slice(0, 50)}
                    </h3>
                  </td>
                  <td>
                    <Link to={`/updatedservicedata/${data._id}`}>
                      <button className="btn btn-circle text-green-500">
                        <BsPen size={20} />
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-circle text-red-700 "
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

export default ManageService;
