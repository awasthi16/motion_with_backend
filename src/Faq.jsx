// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "What is Summitra?",
//     answer: "Summitra is a platform where you can book tickets for events and conferences."
//   },
//   {
//     question: "How can I buy a ticket?",
//     answer: "You can click the 'Buy Ticket' button on the event page and follow the checkout process."
//   },
//   {
//     question: "Can I cancel my ticket?",
//     answer: "Yes, you can cancel your ticket up to 24 hours before the event starts."
//   },
//   {
//     question: "Do you offer group discounts?",
//     answer: "Yes, for group bookings of 5 or more people, we provide special discounts."
//   },
//   {
//     question: "Is my payment secure?",
//     answer: "Absolutely! All payments are processed securely with encryption."
//   },
//   {
//     question: "How can I contact support?",
//     answer: "You can contact our support team at info@example.com or call (888) 123 4567."
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div style={{ backgroundColor: "#f3f4f6", padding: "4rem 2rem" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
//         Frequently Asked Questions
//       </h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             style={{
//               flex: "0 0 calc(50% - 1.5rem)", // 2 per row
//               backgroundColor: "white",
//               borderRadius: "12px",
//               padding: "1.5rem",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//             onClick={() => toggleFAQ(index)}
//           >
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "600", color: "#333" }}>
//                 {faq.question}
//               </h3>
//               <span style={{ fontSize: "1.5rem", color: "#7e22ce" }}>
//                 {activeIndex === index ? "-" : "+"}
//               </span>
//             </div>

//             <AnimatePresence>
//               {activeIndex === index && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   style={{ marginTop: "1rem", color: "#555", lineHeight: "1.6", overflow: "hidden" }}
//                 >
//                   {faq.answer}
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Summitra?",
    answer: "Summitra is a platform where you can book tickets for events and conferences."
  },
  {
    question: "How can I buy a ticket?",
    answer: "You can click the 'Buy Ticket' button on the event page and follow the checkout process."
  },
  {
    question: "Can I cancel my ticket?",
    answer: "Yes, you can cancel your ticket up to 24 hours before the event starts."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes, for group bookings of 5 or more people, we provide special discounts."
  },
  {
    question: "Is my payment secure?",
    answer: "Absolutely! All payments are processed securely with encryption."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact our support team at info@example.com or call (888) 123 4567."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#000000ff", padding: "4rem 2rem", color: "#fff" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ffffffff", // Yellow heading for contrast
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            style={{
              flex: "0 0 calc(50% - 1.5rem)", // 2 per row
              backgroundColor: "#1e1e1e", // Darker card
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>
                {faq.question}
              </h3>
              <span style={{ fontSize: "1.5rem", color: "#ffffffff" }}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ marginTop: "1rem", color: "#ccc", lineHeight: "1.6", overflow: "hidden" }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
