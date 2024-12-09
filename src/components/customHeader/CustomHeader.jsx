import './customHeader.css';
import { useEffect } from 'react';

function CustomHeader() {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px';
      } else {
        navbar.style.top = '15px';
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
        <ul className="navbar-links">
  <li><a href="#inicio">Inicio</a></li>
  <li><a href="#about-me">About</a></li>
  <li><a href="#trabajo">Trabajo</a></li>
  <li><a href="#contacto">Contacto</a></li>
</ul>

        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
