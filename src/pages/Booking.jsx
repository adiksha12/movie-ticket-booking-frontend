import { useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ["A", "B", "C"];
  const cols = [1, 2, 3, 4, 5];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const bookTicket = async () => {
    if (selectedSeats.length === 0) {
      alert("Select seats");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    await API.post("/bookings/book", {
      userId: user.id,
      movieId: parseInt(id),
      seatsBooked: selectedSeats.join(","),
      totalPrice: selectedSeats.length * 150
    });

    alert("Booking Confirmed 🎉");
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="card">
          <h2>Select Seats 🎟</h2>

          <div>
            {rows.map(row => (
              <div key={row}>
                {cols.map(col => {
                  const seat = row + col;
                  const selected = selectedSeats.includes(seat);

                  return (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      style={{
                        margin: "5px",
                        background: selected ? "green" : "gray"
                      }}
                    >
                      {seat}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <p>Selected: {selectedSeats.join(", ")}</p>

          <button onClick={bookTicket}>Confirm</button>
        </div>
      </div>
    </>
  );
}

export default Booking;
// import { useState } from "react";
// import API from "../services/api";
// import { useParams } from "react-router-dom";

// function Booking() {
//   const { id } = useParams();
//   const [seats, setSeats] = useState("");
// const user = JSON.parse(localStorage.getItem("user"));

// if (!user) {
//   alert("Please login first");
//   return;
// }
// const bookTicket = async () => {

//   // 🔴 ADD HERE (first line inside function)
//   if (!seats) {
//     alert("Please enter seats");
//     return;
//   }

//   try {
//    await API.post("/bookings/book", {
//   userId: user.id, // ✅ FIXED
//   movieId: parseInt(id),
//   seatsBooked: seats,
//   totalPrice: seats.split(",").length * 150
// });
//     alert("Booking Confirmed 🎉");
//   } catch (err) {
//     console.error(err);
//     alert(err.response?.data || "Booking failed ❌");
//   }
// };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>Select Seats</h2>
//         <input placeholder="A1,A2,A3" onChange={e => setSeats(e.target.value)} />
//         <button onClick={bookTicket}>Confirm</button>
//       </div>
//     </div>
//   );
// }

// export default Booking;