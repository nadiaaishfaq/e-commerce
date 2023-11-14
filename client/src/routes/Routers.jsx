import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home";
import Signup from "../register/Signup";
import Login from "../register/Login";
import About from "../components/About";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

const Routers = () => {
  return (
    <>
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
};
export default Routers;