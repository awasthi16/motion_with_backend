import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "http://localhost:5000/api";

const AdminSignup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) navigate("/auth/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🪄 Admin Signup</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="role"
            type="text"
            placeholder="role"
            value={form.role}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p>
        Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e8def8, #f3e5f5)",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(106, 27, 154, 0.2)",
    width: "320px",
    textAlign: "center",
  },
  title: {
    color: "#6a1b9a",
    marginBottom: "1rem",
  },
  form: { display: "flex", flexDirection: "column", gap: "0.8rem" },
  input: {
    padding: "0.7rem",
    border: "1px solid #b39ddb",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    background: "#7e57c2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.8rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
