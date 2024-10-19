 import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav>
      <ul className="social-links">
        {/* External Links with Icons */}
        <li>
          <a href="https://github.com/SlaveOA" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abdullah-ahmed-32923b254/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
