import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const loginUser = async () => {
  try {
    const res = await API.post("/users/login", { email, password });

    localStorage.setItem("user", JSON.stringify(res.data));

    navigate("/movies");
  } catch (err) {
    console.error(err);

    alert(err.response?.data?.message || "Invalid Login ❌");
  }
};
  return (
    <div className="container">
      <h1>🎬 Movie Booking</h1>
      <div className="card">
        <h2>Login</h2>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={loginUser}>Login</button>
        <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
          Create Account
        </p>
      </div>
    </div>
  );
}

export default Login;