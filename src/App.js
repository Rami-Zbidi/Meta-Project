// app.js
import { Routes, Route } from "react-router-dom";

import Header from "./componants/Header";
import Main from "./componants//Main";
import BookingPage from "./pages/BookingPage";
import Footer from "./componants/Footer";
import ConfirmedBooking from "./componants/confirmedBooking";
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
