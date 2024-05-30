import Root from "../pages/Root/Root";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/home/Home";
import AllServices from "../pages/AllServices/AllServices";
import AddService from "../pages/Addservice/AddService";
import ManageService from "../pages/ManageService/ManageService";
import BookService from "../pages/BookedService/BookService";
import ServiceToDo from "../pages/SeviceToDo/ServiceToDo";
import Login from '../pages/Login/Login'
import Registration from "../pages/Registration/Registration";
import PriveteRoutes from "./PriveteRoutes";
import SingleServiceDetails from "../Shared/SingleServiceDetails/SingleServiceDetails";
import Errorpage from "../pages/Errorpage/Errorpage";
import UpdatedServiceData from "../pages/ManageService/UpdateServiceData/UpdatedServiceData";
import DashBoard from "../pages/Dashboard/DashBoard";
import FavoritePage from "../pages/FavoritePage/FavoritePage";

export const router =createBrowserRouter([
{
path:'/',
element:<Root></Root>,
errorElement:<Errorpage></Errorpage>,
children:[
{
  path:'/',
  element:<Home></Home>
},
{
  path:'/allservices',
  element:<AllServices></AllServices>
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/registration',
  element:<Registration></Registration>
},
{
  path:'/singleservicedetails/:id',
  element:<PriveteRoutes><SingleServiceDetails></SingleServiceDetails></PriveteRoutes>
},
]
},
{
path:'/dashboard',
element:<DashBoard></DashBoard>,
children:[
  {
    path:'',
    element:<PriveteRoutes><AddService></AddService></PriveteRoutes>
    
  },
  {
    path:'manageservice',
    element:<PriveteRoutes><ManageService></ManageService></PriveteRoutes>
  },
  {
    path:'bookservice',
    element:<PriveteRoutes><BookService></BookService></PriveteRoutes>
  },
  {
    path:'servicetodo',
    element:<PriveteRoutes><ServiceToDo></ServiceToDo></PriveteRoutes>
  },
  {
    path:'/dashboard/updateservicedata/:id',
    element:<PriveteRoutes><UpdatedServiceData></UpdatedServiceData></PriveteRoutes>
  },
  {
  path:'/dashboard/favorites',
  element:<FavoritePage></FavoritePage>
  
  }
 
]
}
])
const Routes = () => {
  return (
    <div>
      
    </div>
  );
};

export default Routes;