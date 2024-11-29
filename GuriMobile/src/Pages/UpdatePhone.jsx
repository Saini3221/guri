import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// import Card from "../components/Card";

function UpdatePhone() {
  const [mobileData, setMobileData] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/mobile/")
      .then((response) => {
        setLoading(false);
        setMobileData(response.data);
        // console.log(setMobileData)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="h-screen flex flex-col justify-between">
      {loding ? (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-between">
          <Navbar />

          <div className="flex flex-col w-[99%]  ">
            {mobileData.map((mobile) => (
              
                <div className=" flex  m-[1%] max-md:flex-col" key={mobile.thumbnail}>
                  <div className="w-[20%]">
                    <img
                      className="w-[65%]"
                      src={mobile.thumbnail}
                      alt="thambnail"
                    />
                  </div>

                  <div className="flex justify-between w-[70%]">
                    <div className="flex flex-col justify-center items-center w-[60%]">
                      <h1>{mobile.phoneName}</h1>
                      <h1>{mobile.brand}</h1>
                      <h1>{"₹" + mobile.price}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-end w-[15%]">
                      <button className="bg-red-500 text-white  rounded-lg  my-[1%] w-fit">Delete</button>
                      <Link to=":id" className=" bg-blue-600 text-white rounded-lg my[1%] w-fit">UpDatePhone</Link>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default UpdatePhone;

// {iphone.map((iphone, index) => (

//   <Link to={'/mobile/'+iphone.id } key={iphone.id} className="flex justify-center m-5 shadow-xl">
//     <div className="flex flex-col items-center justify-center ">
//       <img src={iphone.img} alt="card image" className="w-72" />
//       <p>{iphone.name}</p>
//       <p>{iphone.price}</p>

//     </div>
//   </Link>

// ))}
