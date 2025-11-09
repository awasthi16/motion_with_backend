import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => navigate(`/cart/${product.id}`)}>Buy</button>
    </motion.div>
  );
};

export default ProductCard;
