import useAuth from "../../Hooks/useAuth";
import { BsPen } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ImSpinner9 } from "react-icons/im";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const ManageService = () => {
  const { user } = useAuth();
  const email = user.email;
  const queryClient = useQueryClient();
  const axiosCommon = useAxiosCommon()

  const { data: cartInfo, isLoading } = useQuery({
    queryKey: ['postservice', email],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/services/service/${email}`);
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      await axiosCommon.delete(`/services/service/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('postservice');
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  });

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
        mutation.mutate(id);
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9 className="animate-spin text-blue-500 text-6xl" />
      </div>
    );
  }

  if (!cartInfo.length > 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <DynamicTitle title={"Manage-services"} />
        <div className="space-y-4 text-center">
          <h3 className="text-3xl">You Do Not Added Service</h3>
          <div>
            <Link to={"addservice"}>
              <button className="btn text-xl font-Roboto bg-green-400">
                Add Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-[95%] mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
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
            {cartInfo &&
              cartInfo.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-md w-16 h-16 md:w-20 md:h-20">
                          <img src={data.imgURL} alt="Service" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.serviceName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="w-[100%] md:w-[50%]">
                      {data?.description.slice(0, 50)}
                    </h3>
                  </td>
                  <td>
                    <Link to={`/dashboard/updateservicedata/${data?._id}`}>
                      <button className="btn btn-circle text-green-500">
                        <BsPen size={20} />
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(data._id)}
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

export default ManageService;
