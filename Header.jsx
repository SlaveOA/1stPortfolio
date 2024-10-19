
const Header = () => {
  return (
    <header>
      <div className="nav-container">
      <div className="logo"> </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Avatar_coffee.png" alt="Profile" />   
      <h1>Hello, I am Abdullah!</h1>
      <h2>A frontend developer specialised in React</h2>
      <nav>
          {/* Internal Links */}
          <ul className="internal-links">
            <li><a href="https://github.com/SlaveOA/SimplestCalculator">Projects</a></li>
            <li><a href="https://github.com/SlaveOA">About</a></li>
            <li><a href="https://github.com/SlaveOA">Contact</a></li>
          </ul>
          
          {/* External Links */}
          <ul className="external-links">
            <li><a href="https://github.com/SlaveOA" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/abdullah-ahmed-32923b254/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;