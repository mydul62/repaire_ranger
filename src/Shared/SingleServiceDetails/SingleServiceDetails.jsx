
import userImg from "/userImg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from "./Comments/Comments";
import BookedData from "./BookedData/BookedData";
import { useParams } from "react-router-dom";
const SingleServiceDetails = () => {
  const [cartInfo, setCartInfo] = useState(null); // Initialized as null
  const commentInfo ={
    id:'01',
    item:[ 
    {
     id:'001',
     name:'hellow',
     item:[
     {
       id:'0001',
       name:'hellow1'
     }
     ]
    },
    {
     id:'002',
     name:'hellow',
     item:[
     {
       id:'0002',
       name:'hellow1'
     }
     ]
    }
    
    ]
    }
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
                <img className="rounded-md max-h-[700px] w-full" src={cartInfo.imgURL} alt="" />
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
                <BookedData cartInfo={cartInfo}></BookedData> 
              </div>
              
              
              {/* comment section  */}
              <div className=" my-4">
                <h2 className=" font-bold font-Roboto text-xl">Share Your Comments</h2>
               <input  className="w-full min-h-16 border-2 border-[#030303]" type="text" />
                </div>
                <div className=" pb-2 border-b-2 mb-2"><h2 className=" font-bold ">Comments(01):</h2></div>
               <Comments commentInfo = {commentInfo}></Comments>
                
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleServiceDetails;
