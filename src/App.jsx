
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <>
      <Navbar />

      {/* Här byts sidan ut beroende på adressen */}
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kontakt" element={<Kontak />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;