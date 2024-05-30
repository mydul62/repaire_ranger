import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";
import { FaBars} from "react-icons/fa6";
import axios from 'axios'
// import routesData from 'DashBoardData.json';
const DashBoard = () => {
const [sidebar,setSidebar]=useState(true)
 const {user}=useAuth()
 const [routesData,setRoutesData]=useState([])
 const handleSideBar = ()=>{
  setSidebar(!sidebar)
 }
 
 useEffect(()=>{
 const getData =async ()=>{
    const {data}= await axios.get('/DashBoardRoutes.json')
    setRoutesData(data)
 }
 getData()
 },[])
 console.log(routesData);
  return (
 <>
 {/* <div>
 <Navbar></Navbar>
 </div> */}
  <div className="max-w-[1600px] w-full mx-auto flex ">
    {/* <aside classNameName={`flex ${sidebar?'md:w-[20%]':'w-0 -translate-x-96'} md: mt-4 flex-col justify-between  h-screen px-4 py-8 overflow-y-auto  z-50  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}>
   <div>
    <div classNameName="flex flex-col items-center mt-6 -mx-2">
        <img classNameName="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar"/>
        <h4 classNameName="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
        <p classNameName="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
    </div>

  
   </div>
   <div>
  <button onClick={()=>logout()} classNameName=" btn"> Logout</button>
   </div>
</aside> */}
<div  onClick={handleSideBar} className=" lg:hidden fixed right-[10px] top-6 ">
<FaBars ></FaBars>
</div>
<aside className={` z-50 flex flex-col lg:translate-x-0 ${sidebar?'translate-x-[-100%]':'translate-x-0' } duration-500 absolute lg:static w-80 xs:w-[70%] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}>
<div className="  justify-end hidden xs:flex">
<p onClick={()=>setSidebar(true)} className=" text-2xl ">X</p>
</div>

    <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL}  alt="avatar"/>
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
  
        <nav className="">
        <ul className=" flex gap-4 flex-col">
        {
  routesData.map((data, i) => (
    <li onClick={()=>setSidebar(true)} key={i}> 
      <NavLink to={data?.route} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
        {data?.icon && <data.icon size={20} />}
        <span className="mx-4 font-medium">{data?.name}</span>
      </NavLink>
    </li>
  ))
}

        </ul>
        <div className="divider"></div> 
            <NavLink to={'/'} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
               <LuHome size={20}/>
                <span className="mx-4 font-medium">Home</span>
            </NavLink>
        </nav> 
        
    </div>
</aside>


<div  className={` flex-1 h-screen overflow-y-auto`} >
<Outlet></Outlet>
</div>
  </div>
 </>
  );
};

export default DashBoard;