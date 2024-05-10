import Root from "../pages/Root/Root";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/home/Home";
import AllServices from "../pages/AllServices/AllServices";
import SingleService from "../pages/SingleService/SingleService";
import AddService from "../pages/Addservice/AddService";
import ManageService from "../pages/ManageService/ManageService";
import BookService from "../pages/BookedService/BookService";
import ServiceToDo from "../pages/SeviceToDo/ServiceToDo";
import Login from '../pages/Login/Login'
import Registration from "../pages/Registration/Registration";

export const router =createBrowserRouter([
{
path:'/',
element:<Root></Root>,
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
  path:'/singleservice',
  element:<SingleService></SingleService>
},
{
  path:'/addservice',
  element:<AddService></AddService>
  
},
{
  path:'/manageservice',
  element:<ManageService></ManageService>
},
{
  path:'/bookservice',
  element:<BookService></BookService>
},
{
  path:'servicetodo',
  element:<ServiceToDo></ServiceToDo>
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/registration',
  element:<Registration></Registration>
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