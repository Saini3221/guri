import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext/UserContext";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const navigate = useNavigate();
  // const {setUser} = useContext(UserContext)

  async function submit(e) {
    e.preventDefault();
    setError(""); // Reset error on each attempt

    try {
      axios.post(
        "http://localhost:8000/user/createuser",
        {
          username,
          password,
          email,
        }
      );
      navigate("/login");
      
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again."); // Display error message
    }
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <form
        onSubmit={submit}
        className="flex-grow flex flex-col justify-center items-center space-y-4"
      >
        <div className="flex flex-col w-[30%]">
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Error message */}
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="h-12 mb-4 p-2 border border-gray-300"
            placeholder="Username"
            required
          />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 mb-4 p-2 border border-gray-300"
            placeholder="Email"
            required
          />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 mb-4 p-2 border border-gray-300"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-black px-8 py-2 text-white">
            Register
          </button>
          <Link to="/login" className="bg-black px-8 py-2 text-white">
            Login
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Register;
