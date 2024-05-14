import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
  return (
   <div className=" bg-[#18324B]">
    <div className="  pt-16 md:pt-[108px]">
     <div className="max-w-7xl w-[90%] mx-auto">
     <div className=" flex gap-8 justify-between flex-wrap ">
<div>
<h2> <a className=" text-3xl text-white  font-bold">Repair<span className=" text-green-500">Ranger</span></a></h2>
</div>
<div className=" text-white space-y-6">
<h2 className=" text-xl font-semibold">Office</h2>
<div>
<p className=" font-medium">Germany —
785 15h Street, Office 478
Berlin, De 81566</p>
</div>
<p className=" underline py1">info@gmail.com</p>
<h3>+1 840 841 25 69</h3>

</div>
<div className=" lg:flex-col flex-wrap flex items-center gap-4 text-white lg:space-y-4">
<h2 className="  text-2xl font-semibold">Link</h2>
<div>
 <p><Link to={'/'} className=" font-medium">Home</Link></p>
</div>
<p><Link to={'/allservices'} className="">Services</Link></p>
 <p>Portfullio</p>
 <p>Contact</p>
 <p>About Us</p>
</div>
<div className=" text-white space-y-6">
<h2 className=" text-xl font-semibold">Get In Touch</h2>
<div>
<ul className=" flex gap-4">
 <h2> <a href="https://www.facebook.com/profile.php?id=100021415790435"><FaSquareFacebook size={30}/></a>
</h2>
 <h2> <a href="https://www.linkedin.com/in/mahim62/"><IoLogoLinkedin size={30} /></a>
</h2>
</ul>
</div>

</div>
      </div>
      <div className=" pt-12 pb-4">
   <h2 className=" text-[14px] text-white font-semibold text-center "> All right reserved by @<a className=" underline" href="https://www.linkedin.com/in/mahim62/">Mahim Islam</a>_2024</h2>
    </div>
      
     </div>
     
    </div>

   </div>
  );
};

export default Footer;