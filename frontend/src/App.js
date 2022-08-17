// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import YoutubeHomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <img src="https://i.ytimg.com/vi/Fa_rNR__UV0/default.jpg"></img>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <YoutubeHomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search-results" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
