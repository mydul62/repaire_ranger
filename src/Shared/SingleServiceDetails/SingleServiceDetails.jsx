import userImg from "/userImg.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import Comments from "./Comments/Comments";
import BookedData from "./BookedData/BookedData";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../pages/DynamicTitle";
// import { commentdata } from "../../../public/commentData";
const SingleServiceDetails = () => {
  const { id } = useParams();
  const [cartInfo, setCartInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  
  
  const {data,isLoading,refetch,isError,error}=useQuery({
  queryFn:()=>{},
  queryKey:['']
  })
  
  useEffect(()=>{
    getDataComment()
  },[])

    // Replace id with your query parameter name
    const getDataComment =async()=>{
      try {
        const response = await axios.get(`https://server-omega-dusky.vercel.app/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
    
   
  
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://server-omega-dusky.vercel.app/comments', { text: newComment, commentID : id});
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
    e.target.reset()
    getDataComment()
  };

  const handleSubmitReply = async (commentId, replyText) => {
    try {
      const response = await axios.post(`https://server-omega-dusky.vercel.app/comments/${commentId}/replies`, { text: replyText });
      const updatedComments = comments.map(comment => {
        if (comment._id === commentId) {
          comment.replies.push(response.data);
        }
        return comment;
      });
      setComments(updatedComments);
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
    getDataComment()
  };
 
   useEffect(() => {
    const getDataById = async () => {
      try {
        const { data } = await axios.get(
          `https://server-omega-dusky.vercel.app/services/${id}`
        );
        setCartInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDataById();
  }, [id]);
    
    
    const handleDeleteComment =async(id)=>{


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-omega-dusky.vercel.app/comments/delete/deleteitem/del/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const updatedData = comments.filter((item) => item._id !== id);
              setComments(updatedData);
            })
            .catch((error) => {
              console.error("Error deleting item:", error);
            });
        
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }

  return (
    <div>
       <DynamicTitle title={'Service-details'}></DynamicTitle>

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
                <img
                  className="rounded-md max-h-[700px] w-full"
                  src={cartInfo.imgURL}
                  alt=""
                />
              </div>
              <p className="mt-4 font-Roboto">{cartInfo.description}</p>
            </div>

            <div className="col-span-full md:col-span-1">
              <div className="bg-[#eaeaea] p-8 py-12 space-y-6 rounded-sm">
                <h2 className="text-[#535353] text-2xl font-Roboto font-semibold">
                  {cartInfo.serviceName}
                </h2>
                <h2 className="font-Roboto text-[#010101]">
                  <span className="font-medium text-[#525252]">
                    Sort Description:
                  </span>
                  {cartInfo.description.slice(0, 100)}
                </h2>
                <div>
                  <div className="flex items-center gap-8 border-t pb-3 border-[#bbb] pt-4">
                    <h2 className="text-[#010101] ">
                      <span className="font-medium font-Roboto text-[#010101]">
                        Services Area:{" "}
                      </span>
                      {cartInfo.serviceArea}
                    </h2>
                  </div>
                  <div className="flex items-center gap-8 border-t border-b pb-3 border-[#bbb] pt-4">
                    <div className="h-9 w-9">
                      <img src={userImg} alt="" />
                    </div>
                    <h2 className="text-[#010101]  font-Roboto">
                      {cartInfo.providerName}
                    </h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
                <BookedData cartInfo={cartInfo} ></BookedData>
              </div>

              {/* comment section  */}
              {/* <div className=" my-4">
                <h2 className=" font-bold font-Roboto text-xl">
                  Share Your Comments
                </h2>
                <input
                  className="w-full min-h-16 border-2 border-[#030303]"
                  type="text"
                />
              </div>
              <div className=" pb-2 border-b-2 mb-2">
                <h2 className=" font-bold ">Comments(01):</h2>
              </div>
              <Comments key={commentInfo.id} commentInfo={commentInfo} ></Comments> */}
               <div>
      <h1 className=" text-xl font-medium">Comments</h1>
      <form className=" " onSubmit={handleSubmitComment}>
        <input
          type="text" className=" input-lg border-2 border-[#cb3ff2] rounded-md w-full"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type your comment here"
        />
       {
       newComment &&  <button type="submit "  className={`btn btn-sm mt-2  h-full btn-outline border-[#7C3FF2] border`}>Comment</button>
       
       }
        
      </form>
      <ul className="">
        {comments?.map(comment => (
          <li className=" " key={comment._id}>
            <div className=" mb-3 mt-3 bg-[#eaeaea] pt-3 pb-2  px-2 rounded-md">
            <h2 className=" text-xl capitalize">{comment.text}</h2>
           <div>
           <form  onSubmit={(e) => {
            e.preventDefault();
            const replyText = e.target.elements.replyText.value;
            handleSubmitReply(comment._id, replyText);
            e.target.elements.replyText.value = '';
          }}>
           <div className=" flex  items-center gap-4">
           <input className=" border-2 border-black rounded-xl px-2 py-1" type="text" name="replyText" placeholder="Type your reply here" />
            <button className=" font-bold" type="submit">Reply</button>
            
           </div>
          </form>
          <button onClick={()=>handleDeleteComment(comment._id)} className=" font-bold" type="submit">Delete</button>
           </div>
            </div>
            <ul>
              {comment.replies.map(reply => (
                <div className=" ml-3  bg-[#eaeaea] pt-3 pb-2  px-2 rounded-md mt-3"  key={reply._id}><li className=" text-xl capitalize">{reply.text}</li>
       <form  onSubmit={(e) => {
            e.preventDefault();
            const replyText = e.target.elements.replyText.value;
            handleSubmitReply(comment._id, replyText);
            e.target.elements.replyText.value = '';
          }}>
           <div className=" flex  items-center gap-4">
           <input className=" border-2 border-black rounded-xl px-2 py-1" type="text" name="replyText" placeholder="Type your reply here" />
            <button className=" font-bold" type="submit">Reply</button>
           </div>
          </form>
          
               </div>

              ))}
            </ul>
         
          </li>
        ))}
      </ul>
    </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleServiceDetails;
