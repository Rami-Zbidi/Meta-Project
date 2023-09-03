// app.js
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components//Main";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/confirmedBooking";
import Construction from "./pages/Construction";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/reservation"
          element={
            <BookingPage />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/construction" element={<Construction/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
