import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{
      
      background: "#020617",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between", 
      alignItems: "center"

    }}>
      
      {/* 🎬 Logo */}
      <h2
        style={{ cursor: "pointer", color: "#22c55e" }}
        onClick={() => navigate("/")}
      >
        🎬 MovieBooking
      </h2>

      {/* Right side */}
      <div>
        <button onClick={() => navigate("/movies")}>Movies</button>
        <button onClick={() => navigate("/my-bookings")}>My Bookings</button>

        {user && (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;