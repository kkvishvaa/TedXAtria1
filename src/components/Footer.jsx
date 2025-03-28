import '../styles/Footer.css';
import { Link } from "react-router-dom";
import tedxLogo from '/tedxlogo.png'; 

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="row text-center text-md-start">
        
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="footer-logo">
            <img src={tedxLogo} alt="TEDxAtria IT" className="img-fluid" />
          </div>
        </div>

      
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <Link className="about-box"  to="/about" onClick={() => window.scrollTo(0, 0)}>About Us!</Link>  
          <div className="social-links mt-2">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
            <a href="#">Reddit</a>
          </div>
        </div>
      </div>

     
      <div className="copyright">
        Copyright © 2024 <a href="#">TEDxAtria IT</a> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;