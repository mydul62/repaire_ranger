import { useState } from "react";

const Comments = ({commentInfo}) => {
  const [showReply,setShowReply]=useState(false)
    
                       console.log(commentInfo);
  return (
    <div className=" flex flex-col gap-4">
    
        <div>
        <div className=" bg-[#eaeaea] pt-3 pb-2  px-2 rounded-md">
        <p className=" pb-2">hellow </p>
        <div>
        <div className=" flex justify-start gap-4">
        <span onClick={()=>setShowReply(true)} className=" cursor-pointer font-bold font-Rancho">Reply</span>
        <span className=" cursor-pointer font-bold font-Rancho">Delete</span>
        </div>
        </div>
        </div>
        {
        showReply && <div className="my-2 flex gap-3 items-center">
        <input type="text" className=" border-2 border-black rounded-xl px-2 py-1" />
        <button  className="cursor-pointer font-bold font-Rancho ml-2 ">Reply</button>
        <span onClick={()=>setShowReply(false)} className=" cursor-pointer font-bold font-Rancho">Cancel</span>
        </div>
        }
        </div>
       <div>
       {/* {
      commentInfo.item.map(ele=>(
        <Comments key={ele.id} commentInfo={ele} ></Comments>
      ))
       } */}
       </div>
    </div>
  );
};

export default Comments;