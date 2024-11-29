import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <div>
          <div className=" flex justify-center items-center">
            <img  className="w-[20rem]"  src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
          </div>
          <div className="text-white flex flex-col justify-center w-full gap-1 items-center">
            <div>
            <h1>Missing Cart items?</h1>
            </div>
            <div>
              <h1>Login to see the items you added previously</h1>
            </div>
            <div className="bg-[#fb641b] px-[4rem] w-[7%] flex justify-center items-center h-[8vh]">
              <Link to="/login" className=""> LoginFirst</Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default NotFound;
