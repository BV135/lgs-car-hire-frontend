import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import './App.css'
import BookingForm from "./pages/Reservation/Booking/Booking.jsx";
import LocationForm from "./pages/Reservation/Location/Location.jsx";
import Registration from "./user/Registration.jsx";
import Login from "./user/Login.jsx";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/home" element={<Main/>}/>
              <Route path="/make-booking" element={<BookingForm/>}/>
              <Route path="/create-location" element={<LocationForm/>}/>
              <Route path="/register" element={<Registration/>}/>
              <Route path="/signup" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
  );
}

export default App
