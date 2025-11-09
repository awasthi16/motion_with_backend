// import React from "react";
// import "./TicketComponent.css";

// const TicketComponent = ({ ticket }) => {
//   return (
//     <div className="basic">
//       <div className="b1">
//         <button>{ticket.type}</button>
//       </div>

//       <div className="b2">
//         <div className="dollar">
//           <h1>{ticket.price}</h1>
//         </div>
//         <div className="get">Get a seat</div>
//       </div>

//       <div className="brr">
//         <div className="bord"></div>
//       </div>

//       <div className="para">
//         {ticket.description.map((line, idx) => (
//           <p key={idx} className={idx > 0 ? "r1" : ""}>
//             {line}
//           </p>
//         ))}
//       </div>

//       <div className="keyevent">
//         <div className="point">
//           <ul>
//             {ticket.features.map((_, idx) => (
//               <li key={idx}>
//                 <img src={ticket.icon} alt="star" width="26" />
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="point2">
//           <ul>
//             {ticket.features.map((feature, idx) => (
//               <li key={idx}>{feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="buy">
//         <button>Buy Ticket</button>
//       </div>
//     </div>
//   );
// };

// export default TicketComponent;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./TicketComponent.css";


// const TicketComponent = ({ ticket }) => {
//    const navigate = useNavigate();
//   return (
//     <div className="basic">
      
//       {/* Event Image */}
//       <div className="ticket-image">
//         <img src={ticket.img} alt={ticket.title} />
//       </div>

//       {/* Event Title */}
//       <div className="b1">
//         <h2>{ticket.title}</h2>
        
//       </div>

//       {/* Price and Seats */}
//       <div className="b2">
//         <div className="dollar">
//           <h1>{ticket.price}</h1>
//         </div>
//         <div className="get">{ticket.available_seats} / {ticket.total_seats} Seats Left</div>
//       </div>

//       <div className="brr">
//         <div className="bord"></div>
//       </div>

//       {/* Event Details */}
//       <div className="para">
//         <p className="r1">{ticket.location}</p>
//         <p className="r1">{new Date(ticket.date).toLocaleString()}</p>
//         <p>{ticket.description}</p>
//       </div>

//       {/* Buy Button */}
//       <div className="buy">
//         <button  onClick={() => navigate(`/cart/${ticket.id}`)}>Buy Ticket</button>
//       </div>

//     </div>
//   );
// };

// export default TicketComponent;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./TicketComponent.css";

const TicketComponent = ({ ticket }) => {
  const navigate = useNavigate();

  return (

  <div className="ticket-card">
      {/* Event Image */}
      <div className="ticket-card__image-wrapper">
        <img
          src={`http://localhost:5000/uploads/${ticket.image}`}
          alt={`Poster for ${ticket.title}`}
          className="ticket-card__image"
        />
      </div>

      {/* Event Title */}
      <div className="ticket-card__title">
        <h2>{ticket.title}</h2>
      </div>

      {/* Price and Seat Availability */}
      <div className="ticket-card__meta">
        <div className="ticket-card__price">₹{ticket.price}</div>
        <div className="ticket-card__seats">
          {ticket.available_seats} / {ticket.total_seats} Seats Left
        </div>
      </div>

      {/* Divider */}
      <div className="ticket-card__divider" />

      {/* Event Details */}
      <div className="ticket-card__details">
        <p className="ticket-card__detail">
          📍 <span>{ticket.location}</span>
        </p>
        <p className="ticket-card__detail">
          📅 <span>{new Date(ticket.event_date).toLocaleString()}</span>
        </p>
        <p className="ticket-card__description">{ticket.description}</p>
      </div>

      {/* Buy Button */}
      <div className="ticket-card__action">
        <button
          className="ticket-card__button"
          onClick={() => navigate(`/cart/${ticket.id}`)}
        >
          Buy Ticket
        </button>
      </div>
    </div>
  

  );
};

export default TicketComponent;


