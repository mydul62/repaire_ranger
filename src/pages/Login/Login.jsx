import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaRegEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {
const [show,setShow]=useState(true)
const {SignInWithPassword,googleSignIn}=useAuth()
const navigate = useNavigate();
const location = useLocation();
const pathform = location?.state || "/";
const handleLoginWithPass = (e)=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  SignInWithPassword(email,password)
  .then((result) => {
  
    // Signed up 
   toast.success('Loged-in succsess')
   navigate(pathform);
   console.log(result);
    // ...
  })
  .catch((error) => {
    toast.error(error.message.slice(10));

  });
}

const handleGoogleSignin = () => {
  googleSignIn()
  .then(result=>{
    if (result.user) {
      toast.success("Sign In sucsessfully");
      navigate(pathform);
    }
    })
    .catch((error) => {
      toast.error(error.message.slice(10));
    });
};

const handleToggle = ()=>{
  setShow(!show)
}
  return (
  <div className="my-24">
    <div className=" grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-6  flex-col justify-center items-center  mx-auto">
    
<div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto bg-white p-6 rounded-md shadow-md ">
<form onSubmit={handleLoginWithPass} className="  ">
     <h2 className=" text-3xl text-center my-4 font-bold text-[#535353]">Login Now</h2>
     <div className=" space-y-4 mb-4">
     <input type="email" placeholder="Enter Your Email" required name="email" className="input input-bordered w-full " />
    <div className=" relative">
    <input type={`${show?'password':'text'}`} required placeholder="Password" name="password" className="input input-bordered w-full " />
    <span onClick={handleToggle} className=" absolute top-0 right-4 translate-y-[100%] ">{show? <IoEyeOff />:<FaRegEye />
} </span>
    </div>
     <input type="submit" value={'Login'} placeholder="Type here" className="input text-white btn bg-[#0866ff] input-bordered w-full " /> 
    <div className="">
    <p className=" text-center text-[#0867ffcb] cursor-pointer ">Forgotten password?</p>
    </div>
     </div>
     <hr />
    <div className=" flex justify-center">
    <Link to={'/registration'}> <button className=" btn bg-green-500 my-4 text-white text-xl">Create new account</button></Link>
    </div>
   
     </form>
     <button
              onClick={handleGoogleSignin}
              className="  flex items-center justify-center gap-2 w-full rounded-sm text-white py-1 bg-[#ff6b6b]"
            >
              <FaGoogle size={20} />
              <span>Google</span>
            </button>
     
    </div>
    <div>
    <img className="" src={'https://i.ibb.co/CP5BMtt/undraw-Login-re-4vu2.png'} alt="" />
    </div>
</div>
  </div>
  );
};

export default Login;