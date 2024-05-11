import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userImg from "/userImg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SingleServiceDetails = () => {
  const [cartInfo, setCartInfo] = useState(null); // Initialized as null
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const getDataById = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/services/${id}`);
        setCartInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDataById();
  }, [id]);

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
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   
    console.log(updateInfo);
   
  };

  return (
    <div>
      {cartInfo && (
        <div>
          <div className="relative h-[326px]">
            <img
              className="w-full h-[326px] object-cover"
              src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=1024x1024&w=is&k=20&c=SRQy9lxXhn2mHAthxIRBht3HLCRc6os5lfrOgSj3TuA="
              alt=""
            />
            <div className="left-0 top-0 bottom-0 right-0 absolute inset-1 bg-[#09041780] flex justify-center items-center text-white">
              <h1 className="text-center text-4xl font-Rancho font-semibold">
                {cartInfo.serviceName}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-[90%] mx-auto my-24">
            <div className="col-span-full md:col-span-2">
              <div>
                <img className="rounded-md w-full" src={cartInfo.imgURL} alt="" />
              </div>
              <p className="mt-4 font-Roboto">{cartInfo.description}</p>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="bg-[#eaeaea] p-8 py-12 space-y-6 rounded-sm">
                <h2 className="text-[#535353] text-2xl font-Roboto font-semibold">
                  {cartInfo.serviceName}
                </h2>
                <h2 className="font-Roboto text-[#010101]">
                  <span className="font-medium text-[#525252]">Sort Description:</span>
                  {cartInfo.description.slice(0,100)}
                </h2>
                <div>
                  <div className="flex items-center gap-8 border-t pb-3 border-[#bbb] pt-4">
                    <h2 className="text-[#010101] ">
                      <span className="font-medium font-Roboto text-[#010101]">Services Area: </span>
                      {cartInfo.serviceArea}
                    </h2>
                  </div>
                  <div className="flex items-center gap-8 border-t border-b pb-3 border-[#bbb] pt-4">
                    <div className="h-9 w-9">
                      <img src={userImg} alt="" />
                    </div>
                    <h2 className="text-[#010101]  font-Roboto">{cartInfo.providerName}</h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-[#010101] font-Roboto">
                    <span className="font-medium">Service Price:</span> ${cartInfo.price}{" "}
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
                                value={cartInfo._id}
                                className="input input-bordered input-md w-full"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-red-500">Not Editable</span>
                              <input
                                type="text"
                                placeholder="Service Name"
                                name="serviceName"
                                defaultValue={cartInfo.serviceName}
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
                                defaultValue={cartInfo.imgURL}
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
                                defaultValue={cartInfo.price}
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
                                defaultValue={cartInfo.providerName}
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
                                defaultValue={cartInfo.providerEmail}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleServiceDetails;
