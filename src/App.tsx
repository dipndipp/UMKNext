import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";
import AiChat from "./pages/AiChat";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="relative font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="chatbot" element={<AiChat />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
