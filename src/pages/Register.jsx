import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const registerUser = async () => {

  // 🔴 ADD IT HERE
  if (!name || !email || !password) {
    alert("All fields required");
    return;
  }

  try {
    await API.post("/users/register", {
      name,
      email,
      password,
      role: "USER"
    });

    alert("Registered successfully ✅");
    navigate("/");
  } catch (err) {
    console.error(err);
    alert(err.response?.data || "Registration failed ❌");
  }
};

  return (  
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <input placeholder="Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}

export default Register;