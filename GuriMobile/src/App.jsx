import { useContext, useEffect } from "react";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Mobile from "./Pages/Mobile";
import Register from "./Pages/Register";
import Assessories from "./Pages/Assessories";
import SinglePhone from "./Pages/SinglePhone";
import SalePhone from "./Pages/SalePhone";
import NotFound from "./Pages/NotFound";
// import Cart from "./Pages/Cart";
import AddPhone from "./Pages/AddPhone";
import Dashboard from "./Pages/Dashboard";
import GetAllUser from "./Pages/GetAllUser";
import UpdatePhone from "./Pages/UpdatePhone";
// import UpdateSinglePhone from "./Pages/UpdateSinglePhone";
import { UserContext } from "./Context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("usertoken");
    if (token) {
      setUser(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {!user && <Route path="/login" element={<Login />} />}
        {user && <Route path="/login" element={<HomePage/>} />}
        <Route path="/register" element={<Register />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/assessories" element={<Assessories />} />
        <Route path="/sale" element={<SalePhone />} />
        {/* <Route path="/cart" element={user ? <Cart /> : <NotFound />} /> */}
        <Route path="/mobile/:id" element={<SinglePhone />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/addphone" element={<AddPhone />} />
        <Route path="/dashboard/getalluser" element={<GetAllUser />} />
        <Route path="/dashboard/updatephone" element={<UpdatePhone />} />
        {/* <Route
          path="/dashboard/updatephone/:id"
          element={<UpdateSinglePhone />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
