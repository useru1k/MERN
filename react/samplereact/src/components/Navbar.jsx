function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-2xl font-bold">Yuvan Krishna</div>
        <ul className="flex gap-6">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="hover:underline">
              Skill
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  