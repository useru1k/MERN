import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Projectss from "./components/Projectss";
import Projects from "./components/Projects";
import ProjectsPage from "./pages/ProjectsPage";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import

function App() {
  return (
    <>
      {/* Uncomment the components if needed */}
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* <About /> */}
      {/* <ContactSection /> */}

      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
