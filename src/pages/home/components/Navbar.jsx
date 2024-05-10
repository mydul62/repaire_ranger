import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";


const Navbar = () => {
const [drop,setDrop]=useState(false);
const {user,logout}=useAuth();
const [show, setShow]=useState(false)

const handleLogOut =()=>{
  logout()
}

const handleDropDrown = ()=>{
  setDrop(!drop)
}
const navlist = <>
  <li><NavLink  >Home</NavLink></li>
      <li><NavLink to={'/allservices'}>Services</NavLink></li>
      <li className="">
          <summary className=" cursor-pointer flex items-center gap-0" onClick={handleDropDrown} >Dashboard<span>{drop?<AiOutlineCaretUp />
:<AiOutlineCaretDown />

}</span> </summary>
          <ul className={`p-2 absolute   ${drop?'block bg-white shadow-md ':'hidden'}  flex flex-col gap-3 bg-slate-100 px-8  rounded-sm *:border-b *:py-3`}>
            <li><NavLink to={'/addservice'}>Add Service</NavLink></li>
            <li><NavLink to={'/manageservice'}>Manage Service</NavLink></li>
            <li><NavLink to={'/bookservice'}>Booked-Services</NavLink></li>
            <li><NavLink to={'/servicetodo'}>Service-To-Do</NavLink></li>
           
          </ul>
      </li>
      
</>

const handleMenuBar = (e) => {
  const isChecked = e.target.checked;
  setShow(isChecked);
}


  return (
  <div className=" fixed w-full ">
    <div className=" bg-transparent border-b border-[#eeeeee68]">
      <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <a className=" text-3xl text-[#535353] font-bold">Repair<span className=" text-green-500">Ranger</span></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" flex justify-center gap-5 uppercase py-2 text-[16px] font-medium text-[#535353]">
    {navlist}
    </ul>
  </div>
  <div className="navbar-end gap-3">
   {
   !user &&  <Link to={'/login'} className="btn">Login</Link> 
   }
   
    {
    user && <>
    <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
      </div>
    </div>
  </div>
  <button className=" btn btn-outline" onClick={handleLogOut}>Logout</button>
    </>
    }
    
    <div>
    <label onChange={handleMenuBar} className="btn btn-circle md:hidden flex swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input   type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
    </div>
  </div>
</div>

<div className=" flex justify-center  shadow-inne">

</div>
    </div>
    <div className= {`absolute top-15 ${show?'right-0 duration-500':'-right-80 duration-500'} z-40 mt-4 md:hidden block `}>
    <ul className=" flex flex-col py-20 text-2xl  border-2 border-green-400 rounded-md p-8 pr-16 gap-8 bg-[#eaeaeae7] ">
    {navlist}
    </ul>
    </div>
    </div>
  );
};

export default Navbar;