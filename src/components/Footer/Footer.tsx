import './Footer.css';
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";
import whatsappIcon from "../../assets/whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Home" className="nav-icon" />
       </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="footer-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={youtubeIcon} alt="YouTube" className="footer-icon" />
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" className="footer-icon" />
      </a>
    </footer>
  );
}
