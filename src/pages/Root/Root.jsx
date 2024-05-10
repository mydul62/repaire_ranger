import { Outlet } from "react-router-dom";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";


const Root = () => {
  return (
    <div>
    <div>
    <Navbar></Navbar>
    </div>
      <div className=" min-h-[calc(100vh-268px-68px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;