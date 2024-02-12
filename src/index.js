import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import "./assets/styles/style.css";
import Shop from "./pages/Shop.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product" element={<SingleProduct/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
