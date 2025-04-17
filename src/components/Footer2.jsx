import '../styles/Footer.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaReddit } from "react-icons/fa";
import tedxLogo from '/tedxlogo.png';

const Footer = () => {
  return (
    <footer className="footer container-fluid mt-5">
      <div className="row text-center text-md-start">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="footer-logo">
            <img src={tedxLogo} alt="TEDxAtria IT" className="img-fluid logo" />
          </div>
          <p className="mt-2 fst-italic small">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>

        <div className="col-md-4 mb-4 mb-md-0">
          <h5 className="footer-heading">Contact Us</h5>
          <p>
            Email: <a href="mailto:info@tedxatriait.com" className="text-white">info@tedxatriait.com</a>
          </p>
          <address>
            Tech Innovation Hub, Atria IT Park,<br />
            Sunshine City, ST 12345
          </address>
          <div className="hashtags mt-3">
            <span className="badge">#TEDxAtriaIT</span>
            <span className="badge">#IdeasWorthSpreading</span>
          </div>
        </div>

        <div className="col-md-4 text-md-end mt-3 mt-md-0">
        
          <div className="social-links mt-4">
            <a href="#" className="social-link"><FaInstagram /> Instagram</a>
            <a href="#" className="social-link"><FaTwitter /> Twitter</a>
            <a href="#" className="social-link"><FaYoutube /> YouTube</a>
            <a href="#" className="social-link"><FaReddit /> Reddit</a>
          </div>
        </div>
      </div>

      <div className="copyright mt-5">
        Copyright © 2024 <a href="#">TEDxAtria IT</a> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
