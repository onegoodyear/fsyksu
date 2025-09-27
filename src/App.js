import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div
        className="App min-h-screen bg-gray-50"
        dir="rtl"
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
