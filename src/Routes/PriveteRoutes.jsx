import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PriveteRoutes = ({children}) => {
const {user,loading}=useAuth();
const location = useLocation();
if(loading){
return <p className=" text-center font-bold text-3xl">Loading.....</p>
}
if(user){
return children
}else{
  return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
}
};

export default PriveteRoutes;