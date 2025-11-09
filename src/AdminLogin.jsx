import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "http://localhost:5000/api";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      navigate("/auth/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔑 Admin Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
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
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p>
          Don’t have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f3e5f5, #ede7f6)",
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
