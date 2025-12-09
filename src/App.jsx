import "./App.css";
import "./assets/styles/mockup.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Challenges } from "./components/pages/Challenges";
import { Profile } from "./components/pages/Profile";
import { Articles } from "./components/pages/Articles";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { useState } from "react";
import { ScrollToTop } from "./components/globals/ScrollToTop";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <section className="app">
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </section>
  );
}

export default App;
