import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
