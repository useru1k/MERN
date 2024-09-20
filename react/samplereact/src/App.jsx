import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter ,Routes, Route} from "react-router-dom";

function App(){
  return (
  <>  
    {/* <Navbar /> */}
    {/* <Profile /> */}
    {/* <About /> */}
    {/* <ContactSection /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ContactPage" element={<ContactPage />}></Route>
        <Route path="/AboutPage" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;