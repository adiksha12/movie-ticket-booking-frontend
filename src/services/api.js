import axios from "axios";

const API = axios.create({
  baseURL: "https://movie-ticket-booking-backend-ex9s.onrender.com/api"
});

export default API;