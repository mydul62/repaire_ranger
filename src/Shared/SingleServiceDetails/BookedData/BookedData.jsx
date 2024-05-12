import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const BookedData = ({cartInfo}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleBookService = (status, e) => {
    e.preventDefault();

    const form = e.target;
    const serviceId = form.serviceId.value|| "";
    const serviceName = cartInfo?.serviceName || "";
    const serviceImage = form.serviceImage.value || "";
    const providerEmail = cartInfo?.providerEmail || "";
    const providerName = cartInfo?.providerName || "";
    const price = cartInfo?.price || "";
    const userEmail = user?.email || "";
    const userName = user?.displayName || "";
    const serviceDate = form.serviceDate.value;
    const instructions = form.instructions.value;

    const updateInfo = {
      serviceId,
      serviceName,
      serviceImage,
      providerEmail,
      providerName,
      price,
      userEmail,
      userName,
      serviceDate,
      instructions,
      status,
    };
    axios.post('http://localhost:5000/services/service/booked-service', updateInfo)
    .then(function (response) {
      Swal.fire({
        position: "top-end",
        icon: "success",                                              
        title: "Your service has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/bookservice');
    })
    .catch(function (error) {
      console.log(error);
    });
      
  };
  
  
  
  return (
    <div>
      <div className="space-y-4">
                  <h2 className="text-[#010101] font-Roboto">
                    <span className="font-medium">Service Price:</span> ${'cartInfo.price'}{" "}
                  </h2>
                  <button
                    className="btn bg-green-500"
                    onClick={() => document.getElementById("my_modal_5").showModal()}
                  >
                    Book Now
                  </button>
                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn bg-green-500">Close</button>
                        </form>
                      </div>
                      <form onSubmit={(e) => handleBookService("pending", e)} className="w-[95%] shadow-lg mx-auto bg-white rounded-t-badge">
                        <div className="space-y-4 p-6">
                          <h2 className="text-3xl py-6 font-semibold font-Rancho text-[#535353]">
                            Add Service Here
                          </h2>
                          <div className="flex gap-6">
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Service_id"
                                name="serviceId"
                                readOnly
                                value={cartInfo?._id}
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Service Name"
                                name="serviceName"
                                defaultValue={cartInfo?.serviceName}
                                readOnly
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Image URL"
                                name="serviceImage"
                                defaultValue={cartInfo?.imgURL}
                                readOnly
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Price"
                                name="price"
                                defaultValue={cartInfo?.price}
                                readOnly
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                readOnly
                                placeholder="Provider_name"
                                defaultValue={cartInfo?.providerName}
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Provider email"
                                readOnly
                                name="providerEmail"
                                defaultValue={cartInfo?.providerEmail}
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                readOnly
                                name="userEmail"
                                value={user?.email || "No user Available"}
                                placeholder="Current user Email"
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                value={user?.displayName || "No user Available"}
                                readOnly
                                placeholder="Current user name"
                                name="userName"
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div>
                              <span className="text-[10px] text-green-500">Editable</span>
                              <input
                                type="date"
                                name="serviceDate"
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-green-500">Editable</span>
                              <input
                                type="text"
                                name="instructions"
                                placeholder="Present Address"
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <input
                            type="submit"
                            value={"Purchase"}
                            className="py-3 rounded-none text-white text-xl bg-green-500 w-full"
                          />
                        </div>
                      </form>
                    </div>
                  </dialog>
                </div>
    </div>
  );
};

export default BookedData;