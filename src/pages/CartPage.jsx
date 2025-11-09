import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import products from "../data/products";
import { tickets} from "../ticketData";
import { motion } from "framer-motion";
import "./CartPage.css";

const CartPage = () => {
  const { id } = useParams();
  const ticket = tickets.find((p) => p.id === parseInt(id));
  const [confirmed, setConfirmed] = useState(false);

  if (!ticket) return <h2>Product not found!</h2>;

  const handleBuy = () => {
    setTimeout(() => {
      setConfirmed(true);
    }, 800);
  };

  return (
    <div className="cart-page">
      {!confirmed ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cart-box"
        >
          <img src={ticket.image} alt={ticket.name} />
          <h2>{ticket.name}</h2>
          <p>{ticket.description}</p>
          <h3>Price: ₹{ticket.price}</h3>
          <button onClick={handleBuy}>Confirm Purchase</button>
        </motion.div>
      ) : (
        <motion.div
          className="success"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          🎉 <h2>Purchase Successful!</h2>
          <p>Your order for <b>{ticket.title}</b> has been confirmed.</p>
        </motion.div>
      )}
    </div>
  );
};

export default CartPage;
