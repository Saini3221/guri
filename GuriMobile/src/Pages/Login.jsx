import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/login", { username, password })
      .then((Response) => {       
        localStorage.setItem("usertoken",Response.data.token)
        // localStorage.setItem("username",Response.data.username)
        setUser(true);
        navigate("/"); // Redirect after successful login
      })
      .catch((error) => {
        setError(error.response?.data?.error || "Something went wrong"); // Improved error handling
        console.log(error);
      });
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <form onSubmit={submit}>
        <div className="flex h-full flex-col justify-center items-center">
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="w-[30%] h-12 m-2"
            placeholder="Username"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[30%] h-12 m-2"
            placeholder="Password"
          />
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Error message */}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            type="submit"
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Login
          </button>
          <Link
            to="/register"
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Register
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
