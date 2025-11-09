


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Link, Navigate, useNavigate} from "react-router-dom"

const Nav = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);

  const Navigate = useNavigate()
  const auth=localStorage.getItem("token")

  function logout(){
    localStorage.clear();
    Navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      // Update accumulated scroll
      let newAccum = accumulatedScroll + diff;

      // Scroll down more than 200px → hide navbar
      if (newAccum > 200) {
        setShowHeader(false);
        newAccum = 0; // reset accumulator
      }

      // Scroll up more than 200px → show navbar
      else if (newAccum < -200) {
        setShowHeader(true);
        newAccum = 0; // reset accumulator
      }

      setAccumulatedScroll(newAccum);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, accumulatedScroll]);

  return (
    <motion.header
      animate={{
        y: showHeader ? 0 : -150,
        opacity: showHeader ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "linear-gradient(to right, rgba(168, 85, 247, 0.6), rgba(126, 34, 206, 0.6), rgba(147, 51, 234, 0.6))",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Summitra</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <p style={{ fontWeight: 600 }}><Link to="/auth/event">Event</Link></p>
                    {auth?<>              <p style={{ fontWeight: 600 }}><Link to="/auth/dashboard">dashboard</Link></p>
                     <p style={{ fontWeight: 600 }} onClick={logout}>Logout</p>
                    </>:<><p style={{ fontWeight: 600 }}><Link to="/auth/signup">signup</Link></p>
            <p style={{ fontWeight: 600 }}><Link to="/auth/login">login</Link></p>
</>}
          
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: 600 }}>(888) 123 4567</p>
            <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>info@example.com</p>
          </div>
          <button
            style={{
              background: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: "9999px",
              padding: "0.75rem 1.5rem",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
         <Link to="/ticket">Buy Ticket ➜</Link>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
