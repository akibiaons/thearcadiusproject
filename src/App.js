// Router?
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global components imported below
import Navbar from "./components/globalComponents/Navbar";
// import Footer from "./components/globalComponents/Footer";

// Page imports below
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
