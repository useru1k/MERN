import { Link } from "react-router-dom";


function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-2xl font-bold">Yuvan Krishna</div>
        <ul className="flex gap-6">
        <li>
            <Link to="/Home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutPage" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="" className="hover:underline">
              Skill
            </Link>
          </li>
          <li>
            <Link to="/ContactPage" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  