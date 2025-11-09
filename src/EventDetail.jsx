// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./EventDetail.css";

// const EventDetail = ({ event, onClose }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [booked, setBooked] = useState(false);

//   const totalPrice = quantity * parseFloat(event.price.replace("$", ""));

//   const handleBook = () => {
//     setBooked(true);
//     setTimeout(() => {
//       onClose(); // Close after animation
//     }, 2000);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="event-detail-overlay"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <motion.div
//           className="event-detail-card"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//         >
//           {/* Close Button */}
//           <button className="close-btn" onClick={onClose}>
//             ✕
//           </button>

//           {/* Event Image */}
//           <div className="event-image">
//             <img src={event.img} alt={event.title} />
//           </div>

//           {/* Event Info */}
//           <div className="event-info">
//             <h2>{event.title}</h2>
//             <p className="r1">{event.location}</p>
//             <p className="r1">{new Date(event.date).toLocaleString()}</p>
//             <p>{event.description}</p>

//             {/* Ticket Booking */}
//             <div className="booking-section">
//               <label>Tickets:</label>
//               <input
//                 type="number"
//                 min="1"
//                 max={event.available_seats}
//                 value={quantity}
//                 onChange={(e) => setQuantity(Math.min(event.available_seats, Math.max(1, e.target.value)))}
//               />
//               <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
//               <button className="buy-btn" onClick={handleBook} disabled={booked}>
//                 {booked ? "Booked ✅" : "Confirm Booking"}
//               </button>
//             </div>
//           </div>

//           {/* Booking Animation */}
//           {booked && (
//             <motion.div
//               className="booking-animation"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0, opacity: 0 }}
//             >
//               <h3>🎉 Booking Confirmed!</h3>
//               <p>You have booked {quantity} ticket(s) for {event.title}</p>
//             </motion.div>
//           )}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default EventDetail;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EventDetail.css";

const EventDetail = ({ event, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [booked, setBooked] = useState(false);

  const totalPrice = quantity * parseFloat(event.price.replace("$", ""));

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => {
      onClose(); // Close after animation
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="event-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="event-detail-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Close Button */}
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>

          {/* Event Image */}
          <div className="event-image">
            <img src={event.img} alt={event.title} />
          </div>

          {/* Event Info */}
          <div className="event-info">
            <h2>{event.title}</h2>
            <p className="r1">{event.location}</p>
            <p className="r1">{new Date(event.date).toLocaleString()}</p>
            <p>{event.description}</p>

            {/* Ticket Booking */}
            <div className="booking-section">
              <label>Tickets:</label>
              <input
                type="number"
                min="1"
                max={event.available_seats}
                value={quantity}
                onChange={(e) => setQuantity(Math.min(event.available_seats, Math.max(1, e.target.value)))}
              />
              <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
              <button className="buy-btn" onClick={handleBook} disabled={booked}>
                {booked ? "Booked ✅" : "Confirm Booking"}
              </button>
            </div>
          </div>

          {/* Booking Animation */}
          {booked && (
            <motion.div
              className="booking-animation"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <h3>🎉 Booking Confirmed!</h3>
              <p>You have booked {quantity} ticket(s) for {event.title}</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventDetail;
