import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Nav from "./Nav";
import AdminDashboard from "./AdminDashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminSignup from "./AdminSignup";
import Animation from "./Animation";

function App() {
   const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Router>
      <Nav/>
     {/* <Animation/> */}
      <Routes>
        <Route path="/" element={<Animation />} />
         <Route path="/auth/event" element={<ProductsPage />} />
        <Route path="/cart/:id" element={<CartPage />} />
         <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<AdminLogin />} />
        <Route path="/auth/signup" element={<AdminSignup />} />
        <Route
          path="/auth/dashboard"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/auth/login" />}
        />
      </Routes>

      {/* <AdminDashboard/> */}
    </Router>
  );
}

export default App;
