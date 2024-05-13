import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import FadeLoader from "react-spinners/ClipLoader";


const PriveteRoutes = ({children}) => {
const {user,loading}=useAuth();
const location = useLocation();
if(loading){
return <div className=" flex items-center justify-center ">
<div className=" mt-[100px]">
<FadeLoader size={60} color="#36d7b7" />
</div>
</div>
}
if(user){
return children
}else{
  return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
}
};

export default PriveteRoutes;