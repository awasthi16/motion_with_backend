// import React, { useState, useEffect } from "react";

// const AdminDashboard = () => {
//   const token = localStorage.getItem("token");
//   const [events, setEvents] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     location: "",
//     event_date: "",
//     total_seats: "",
//     price: "",
//   });
//   const [image, setImage] = useState(null);
//   const [editingId, setEditingId] = useState(null);

//   const API_BASE = "http://localhost:5000/api";

//   const fetchEvents = async () => {
//     const res = await fetch(`${API_BASE}/events`);
//     const data = await res.json();
//     setEvents(data);
//   };

//   const fetchBookings = async () => {
//     const res = await fetch(`${API_BASE}/bookings`);
//     const data = await res.json();
//     setBookings(data);
//   };

//   useEffect(() => {
//     fetchEvents();
//     fetchBookings();
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(form).forEach(([key, val]) => formData.append(key, val));
//     if (image) formData.append("image", image);

//     const url = editingId ? `${API_BASE}/events/${editingId}` : `${API_BASE}/events`;
//     const method = editingId ? "PUT" : "POST";
//     alert(`id: ${editingId}`)

//     await fetch(url, {
//       method, headers: {
//         Authorization: `Bearer ${token}`, // 🔑 must include Bearer prefix
//       }, body: formData
//     });
//     setForm({
//       title: "",
//       description: "",
//       location: "",
//       event_date: "",
//       total_seats: "",
//       price: "",
//     });
//     setImage(null);
//     setEditingId(null);
//     fetchEvents();
//   };

//   const handleDelete = async (id) => {

//     alert(id)
//     await fetch(`${API_BASE}/events/${id}`, {
//       method: "DELETE", headers: {
//         Authorization: `Bearer ${token}`, // 🔑 must include Bearer prefix
//       },
//     });
//     fetchEvents();
//   };

//   const handleEdit = (ev) => {
//     setForm({
//       title: ev.title,
//       description: ev.description,
//       location: ev.location,
//       event_date: ev.event_date?.slice(0, 16),
//       total_seats: ev.total_seats,
//       price: ev.price,
//     });
//     setEditingId(ev._id);
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>🎟️ Admin Dashboard</h1>

//       {/* Event Form */}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.sectionTitle}>
//           {editingId ? "✏️ Edit Event" : "➕ Add New Event"}
//         </h2>
//         <input name="title" value={form.title} onChange={handleChange} placeholder="Title" style={styles.input} required />
//         <textarea
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           placeholder="Description"
//           style={styles.textarea}
//         />
//         <input name="location" value={form.location} onChange={handleChange} placeholder="Location" style={styles.input} />
//         <input type="datetime-local" name="event_date" value={form.event_date} onChange={handleChange} style={styles.input} />
//         <input name="total_seats" value={form.total_seats} onChange={handleChange} placeholder="Total Seats" style={styles.input} />
//         <input name="price" value={form.price} onChange={handleChange} placeholder="Price" style={styles.input} />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} style={styles.fileInput} />

//         <button type="submit" style={styles.button}>
//           {editingId ? "Update Event" : "Add Event"}
//         </button>
//       </form>

//       {/* Events */}
//       <h2 style={styles.sectionTitle}>📅 Events</h2>
//       <div style={styles.eventGrid}>
//         {events.map((ev) => (
//           <div key={ev._id} style={styles.eventCard}>
//             <img
//               src={`http://localhost:5000/uploads/${ev.image}`}
//               alt={ev.title}
//               style={styles.image}
//             />
//             <h3 style={styles.eventTitle}>{ev.title}</h3>
//             <p style={styles.text}>{ev.location}</p>
//             <p style={styles.text}>
//               💺 {ev.available_seats} / {ev.total_seats} available
//             </p>
//             <p style={styles.price}>₹ {ev.price}</p>
//             <div style={styles.btnGroup}>
//               <button style={styles.editBtn} onClick={() => handleEdit(ev)}>Edit</button>
//               <button style={styles.deleteBtn} onClick={() => { handleDelete(ev.id) }}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bookings */}
//       <h2 style={styles.sectionTitle}>🧾 Bookings</h2>
//       <div style={styles.bookingList}>
//         {bookings.length === 0 && <p>No bookings yet.</p>}
//         {bookings.map((b) => (
//           <div key={b._id} style={styles.bookingCard}>
//             <strong>{b.name}</strong> ({b.email}) booked {b.quantity} seat(s)
//             <br />
//             <small>
//               Event ID: {b.event_id} | Status:{" "}
//               <span style={{ color: b.status === "cancelled" ? "#d32f2f" : "#4caf50" }}>
//                 {b.status}
//               </span>
//             </small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// // 🎨 Styling
// const styles = {
//   container: {
//     padding: "2rem",
//     fontFamily: "'Poppins', sans-serif",
//     background: "#f5f3ff",
//     minHeight: "100vh",
//   },
//   title: {
//     textAlign: "center",
//     color: "#5e35b1",
//     marginBottom: "2rem",
//     fontSize: "2.2rem",
//   },
//   sectionTitle: {
//     color: "#6a1b9a",
//     marginTop: "1rem",
//   },
//   form: {
//     background: "#ede7f6",
//     borderRadius: "15px",
//     padding: "1.5rem",
//     boxShadow: "0 2px 10px rgba(106, 27, 154, 0.2)",
//     maxWidth: "400px",
//     marginBottom: "2rem",
//   },
//   input: {
//     padding: "0.6rem",
//     marginBottom: "0.8rem",
//     border: "1px solid #b39ddb",
//     borderRadius: "8px",
//     outline: "none",
//     width: "100%",
//   },
//   textarea: {
//     padding: "0.6rem",
//     marginBottom: "0.8rem",
//     border: "1px solid #b39ddb",
//     borderRadius: "8px",
//     width: "100%",
//     resize: "none",
//   },
//   fileInput: {
//     marginBottom: "0.8rem",
//   },
//   button: {
//     background: "#7e57c2",
//     color: "#fff",
//     padding: "0.7rem",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
//   eventGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "1rem",
//   },
//   eventCard: {
//     background: "#fff",
//     borderRadius: "15px",
//     boxShadow: "0 2px 10px rgba(106, 27, 154, 0.15)",
//     padding: "1rem",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     height: "150px",
//     borderRadius: "10px",
//     objectFit: "cover",
//   },
//   eventTitle: {
//     color: "#5e35b1",
//     margin: "0.5rem 0",
//   },
//   text: {
//     color: "#6a1b9a",
//     fontSize: "0.9rem",
//   },
//   price: {
//     color: "#4527a0",
//     fontWeight: "bold",
//     fontSize: "1rem",
//   },
//   btnGroup: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "0.5rem",
//     marginTop: "0.5rem",
//   },
//   editBtn: {
//     background: "#9575cd",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     padding: "0.4rem 0.7rem",
//     cursor: "pointer",
//   },
//   deleteBtn: {
//     background: "#d32f2f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     padding: "0.4rem 0.7rem",
//     cursor: "pointer",
//   },
//   bookingList: {
//     marginTop: "1rem",
//     background: "#ede7f6",
//     borderRadius: "10px",
//     padding: "1rem",
//   },
//   bookingCard: {
//     borderBottom: "1px solid #d1c4e9",
//     padding: "0.5rem 0",
//   },
// };





// ----------------------------------------


import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const token = localStorage.getItem("token");
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    event_date: "",
    total_seats: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const API_BASE = "http://localhost:5000/api";

  // ✅ Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE}/events`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // ✅ Fetch all bookings
  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_BASE}/bookings`);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  // ✅ Check token & fetch data
  useEffect(() => {
    if (!token) {
      alert("Please sign in as admin first!");
      window.location.href = "/auth";
      return;
    }
    fetchEvents();
    fetchBookings();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Create or Update Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));
    if (image) formData.append("image", image);

    const url = editingId
      ? `${API_BASE}/events/${editingId}`
      : `${API_BASE}/events`;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        alert(editingId ? "✅ Event updated!" : "🎉 Event created!");
        setForm({
          title: "",
          description: "",
          location: "",
          event_date: "",
          total_seats: "",
          price: "",
        });
        setImage(null);
        setEditingId(null);
        fetchEvents();
      } else {
        alert("❌ Failed to save event.");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  // ✅ Delete Event
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`${API_BASE}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("🗑️ Event deleted successfully!");
        fetchEvents();
      } else {
        alert("❌ Failed to delete event.");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  // ✅ Edit Event
  const handleEdit = (ev) => {
    setForm({
      title: ev.title,
      description: ev.description,
      location: ev.location,
      event_date: ev.event_date?.slice(0, 16),
      total_seats: ev.total_seats,
      price: ev.price,
    });
    setEditingId(ev.id);
  };

  // ✅ Logout Admin
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🎟️ Admin Dashboard</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Event Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.sectionTitle}>
          {editingId ? "✏️ Edit Event" : "➕ Add New Event"}
        </h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          style={styles.input}
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          style={styles.textarea}
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          style={styles.input}
        />
        <input
          type="datetime-local"
          name="event_date"
          value={form.event_date}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="total_seats"
          value={form.total_seats}
          onChange={handleChange}
          placeholder="Total Seats"
          style={styles.input}
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          style={styles.input}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.fileInput}
        />

        <button type="submit" style={styles.button}>
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* Events Section */}
      <h2 style={styles.sectionTitle}>📅 Events</h2>
      {events.length === 0 ? (
        <p style={{ textAlign: "center" }}>No events yet.</p>
      ) : (
        <div style={styles.eventGrid}>
          {events.map((ev) => (
            <div key={ev.id} style={styles.eventCard}>
              {ev.image && (
                <img
                  src={`http://localhost:5000/uploads/${ev.image}`}
                  alt={ev.title}
                  style={styles.image}
                />
              )}
              <h3 style={styles.eventTitle}>{ev.title}</h3>
              <p style={styles.text}>{ev.location}</p>
              <p style={styles.text}>
                📅 {new Date(ev.event_date).toLocaleString()}
              </p>
              <p style={styles.text}>
                💺 {ev.available_seats} / {ev.total_seats} available
              </p>
              <p style={styles.price}>₹ {ev.price}</p>
              <div style={styles.btnGroup}>
                <button style={styles.editBtn} onClick={() => handleEdit(ev)}>
                  Edit
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(ev.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bookings Section */}
      <h2 style={styles.sectionTitle}>🧾 Bookings</h2>
      <div style={styles.bookingList}>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          bookings.map((b) => (
            <div key={b._id} style={styles.bookingCard}>
              <strong>{b.name}</strong> ({b.email}) booked {b.quantity} seat(s)
              <br />
              <small>
                Event ID: {b.event_id} | Status:{" "}
                <span
                  style={{
                    color: b.status === "cancelled" ? "#d32f2f" : "#4caf50",
                  }}
                >
                  {b.status}
                </span>
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

// 🎨 Styling
const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Poppins', sans-serif",
    background: "#f5f3ff",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutBtn: {
    background: "#ab47bc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.6rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    
  },
  title: {
    color: "#5e35b1",
    marginBottom: "1rem",
    fontSize: "2.2rem",
  },
  sectionTitle: {
    color: "#6a1b9a",
    marginTop: "1.5rem",
  },
  form: {
    background: "#ede7f6",
    borderRadius: "15px",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(106, 27, 154, 0.2)",
    maxWidth: "400px",
    marginBottom: "2rem",
  },
  input: {
    padding: "0.6rem",
    marginBottom: "0.8rem",
    border: "1px solid #b39ddb",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
  },
  textarea: {
    padding: "0.6rem",
    marginBottom: "0.8rem",
    border: "1px solid #b39ddb",
    borderRadius: "8px",
    width: "100%",
    resize: "none",
  },
  fileInput: {
    marginBottom: "0.8rem",
  },
  button: {
    background: "#7e57c2",
    color: "#fff",
    padding: "0.7rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
  eventGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
  },
  eventCard: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(106, 27, 154, 0.15)",
    padding: "1rem",
    textAlign: "center",
   
  },
  image: {
    width: "100%",
    height: "150px",
    borderRadius: "10px",
    objectFit: "cover",
  
  },
  eventTitle: {
    color: "#5e35b1",
    margin: "0.5rem 0",
  },
  text: {
    color: "#6a1b9a",
    fontSize: "0.9rem",
  },
  price: {
    color: "#4527a0",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  editBtn: {
    background: "#9575cd",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.4rem 0.7rem",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.4rem 0.7rem",
    cursor: "pointer",
  },
  bookingList: {
    marginTop: "1rem",
    background: "#ede7f6",
    borderRadius: "10px",
    padding: "1rem",
  },
  bookingCard: {
    borderBottom: "1px solid #d1c4e9",
    padding: "0.5rem 0",
  },
};
