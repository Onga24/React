import './Header.css';
function Header({name , pic}) {
  return (
   <div className="nav-bar">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo">
           
            <img src={pic} alt="logo" className="logo-image" />
             <span>{name}'s Portfolio</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Header