import './assets/css/custom.css';
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from './assets/img/Logo.png'; // Ajusta la ruta según donde tengas tu logo

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="container mx-auto text-center pb-4">
        <img src={logo} alt="Tintart Shop logo" className="w-28 mx-auto mb-4" />

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.tiktok.com/@tintart_shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#779977] hover:text-[#6b8d6b] transition-colors text-2xl"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.facebook.com/tintart_shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#779977] hover:text-[#6b8d6b] transition-colors text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/tintart_shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#779977] hover:text-[#6b8d6b] transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5523115852"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#779977] hover:text-[#6b8d6b] transition-colors text-2xl"
          >
            <FaWhatsapp />
          </a>

        </div>

        <p className="text-xs text-gray-500">&copy; 2025 Tintart Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
