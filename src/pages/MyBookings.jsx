import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    API.get(`/bookings/user/${user.id}`)
      .then(res => setBookings(res.data));
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <h1>🎟 My Bookings</h1>

        {bookings.map(b => (
          <div className="card" key={b.id}>
            <h3>🎬 {b.movieName}</h3>
            <p>Seats: {b.seatsBooked}</p>
            <p>₹{b.totalPrice}</p>
            <p>{b.bookingTime}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyBookings;

// export default MyBookings;