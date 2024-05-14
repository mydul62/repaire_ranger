import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
  return (
    <div className=" bg-[#18324B] py-[108px]">
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
<div className=" text-white space-y-6">
<h2 className=" text-xl font-semibold">Link</h2>
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
 <h2><FaSquareFacebook size={30}/>
</h2>
 <h2><IoLogoLinkedin size={30} />
</h2>
</ul>
</div>

</div>
      </div>
     </div>
    </div>
  );
};

export default Footer;