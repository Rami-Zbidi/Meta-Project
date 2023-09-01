import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Reservation from "./Reservation";
import Footer from "./Footer";

function App() {

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
