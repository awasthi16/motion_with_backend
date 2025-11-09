import React, { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";
import TicketComponent from "../TicketComponent";
// import { tickets } from "../ticketData";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import "../Sarath.css";
import axios from "axios";

const ProductsPage = () => {



 const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        setTickets(response.data); // assuming API returns array
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);


  const scrollVariants = {
  hiddenUp: { opacity: 0, y: 100 },
  hiddenDown: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
  return (
//     <div className="products-page">
//       <h1>Our Products</h1>
//       <div className="products-grid">
//         {tickets.map((ticket) => (
//           // <ProductCard key={product.id} product={product} />
//          <TicketComponent ticket={ticket} />
//         ))}
//       </div>
//     </div>


// -----------------------------
 <section className="relative min-h-screen px-6 py-20 overflow-hidden rounded-t-2xl bg-gradient-to-r from-purple-500 via-purple-700 to-purple-600 text-white">
      
      {/* 🌟 Floating Light Background */}
      <Parallax strength={200}>
        <motion.div
          className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full"
          animate={{ x: [0, 50, -40, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        />
      </Parallax>

      {/* 📝 Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Pricing For Tickets</h1>
        <p className="mt-4 text-lg text-gray-200">
          Explore our lineup of keynote speakers and industry <span className='Ticketr11'>leaders who</span>
        </p>
        <p className='mt-1 text-lg text-gray-200 Ticketr11'>
          will inspire and enlighten at the conference.
        </p>
      </motion.div>

      {/* 🎟️ Tickets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {tickets.map((ticket, i) => (
          <motion.div
            key={i}
            variants={i % 2 === 0 ? scrollVariants : { ...scrollVariants, hiddenUp: scrollVariants.hiddenDown }}
            initial={i % 2 === 0 ? "hiddenUp" : "hiddenDown"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
          >
            <TicketComponent   key={ticket.id} ticket={ticket} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
