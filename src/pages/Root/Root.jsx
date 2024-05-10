import { Outlet } from "react-router-dom";
import Navbar from "../home/components/Navbar";


const Root = () => {
  return (
    <div>
    <div>
    <Navbar></Navbar>
    </div>
      <div>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;