import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
const [drop,setDrop]=useState(false);
const {user,logout}=useAuth();
const [show, setShow]=useState(false)
const [search, setSearch]=useState(true)

const handleLogOut =()=>{
  logout()
}

const handleDropDrown = ()=>{
  setDrop(!drop)
}
const handleSearchdrop = ()=>{
setSearch(!search)
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
      <li onClick={handleSearchdrop} className="  md:flex hidden items-center pl-4"><RiSearchLine size={20} /></li>
      
</>

const handleMenuBar = (e) => {
  const isChecked = e.target.checked;
  setShow(isChecked);
}


  return (
  <div className=" py-5  w-full ">
    <div className=" bg-white">
      <div className="navbar max-w-7xl mx-auto ">
<div className="navbar-start ">
<div className=" flex gap-12 items-center">
    <Link to={'/'} className=" text-3xl text-[#535353] font-bold">Repair<span className=" text-green-500">Ranger</span></Link>
 
  <div className="navbar-center hidden lg:flex ">
    <ul className=" flex justify-center gap-5 uppercase py-2 text-[16px] font-medium text-[#535353]">
    {navlist}
    </ul>
  </div>
  </div>

</div>
  <div className="navbar-end gap-3">
  <button onClick={handleSearchdrop} className=" flex md:flex lg:hidden items-center pl-4"><RiSearchLine size={20} /></button>
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
    <label onChange={handleMenuBar} className="btn btn-circle lg:hidden  swap swap-rotate">
  
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
    
    
    
    <div className= {`absolute top-15 ${show?'right-0 flex  duration-500':'-right-80 hidden duration-500'} z-40 mt-4 lg:hidden block `}>
    <ul className=" flex flex-col py-20 text-2xl  border-2 border-green-400 rounded-md p-8 pr-16 gap-8 bg-[#eaeaeae7] ">
    {navlist}
    </ul>
    </div>
    
    
    <div className=  {` w-full absolute ${search?'-top-72 h-0 delay-300 duration-1000':'top-0 h-[300px] duration-300'} min-h-[200px] bg-[#18324B]`}>
    <div onClick={()=>handleSearchdrop(setSearch(false))} className=" flex py-4 justify-between mx-12 my-4">
    <h2> <a className=" text-3xl text-[#535353] font-bold">Repair<span className=" text-green-500">Ranger</span></a></h2>
    <h2 className=" text-white border-2 rounded-full p-1  font-bold"><RxCross1 size={30} />
</h2></div>

<div className="max-w-[60%] mx-auto flex flex-col justify-center items-center mt-12">
<input type="text" placeholder="Type Words" className=" bg-transparent text-white font-bold text-2xl uppercase   outline-none   w-full py-4 " />
<div className={` float-left h-[1px] bg-[#82738e] ${search?'w-0 duration-300':'w-full duration-1000'} `}>

</div>
</div>
    
    </div>
    </div>
  );
};

export default Navbar;