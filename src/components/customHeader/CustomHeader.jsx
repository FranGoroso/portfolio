import './customHeader.css';
import { useEffect } from 'react';

function BasicExample() {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo - Oculta el navbar
        navbar.style.top = '-100px';
      } else {
        // Scroll hacia arriba - Muestra el navbar
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Trabajo</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default BasicExample;
