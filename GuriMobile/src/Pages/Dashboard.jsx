import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col h-[85%] gap-2 w-[100%]">
      <Link to="addphone" className=" bg-blue-950  flex justify-center items-center text-slate-400 hover:text-slate-200 mx-16 p-1 text-[2vh]">Add Your Phone </Link>
      <Link to="updatephone" className=" bg-blue-950  flex justify-center items-center text-slate-400 hover:text-slate-200 mx-16 p-1 text-[2vh]">Update Your Phone </Link>
      <Link to="getalluser" className="  bg-blue-950  flex justify-center items-center text-slate-400 hover:text-slate-200 mx-16 p-1 text-[2vh]">Get All User</Link>

      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
