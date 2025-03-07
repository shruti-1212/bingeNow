import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaBlog } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '20%', marginBottom: '10px'}}>
        <h3>Watch</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#">Spotlight</a></li>
          <li><a href="#">Movie Spotlight</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
        </ul>
      </div>
      <div style={{ flexBasis: '20%', marginBottom: '10px' }}>
        <h3>My Account</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#">BingeNow</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Manage Devices</a></li>
        </ul>
      </div>
      <div style={{ flexBasis: '20%', marginBottom: '10px' }}>
        <h3>Features</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#">Lists</a></li>
          <li><a href="#">Family</a></li>
          <li><a href="#">Disc to Digital</a></li>
          <li><a href="#">InstaWatch</a></li>
        </ul>
      </div>
      <div style={{ flexBasis: '20%', marginBottom: '10px' }}>
        <h3>Help</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Forums</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div style={{ flexBasis: '100%', textAlign: 'center', marginTop: '20px' }}>
        <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <a href="https://facebook.com"><FaFacebook size={24} /></a>
          <a href="https://twitter.com"><FaTwitter size={24} /></a>
          <a href="https://instagram.com"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com"><FaLinkedin size={24} /></a>
          <a href="https://youtube.com"><FaYoutube size={24} /></a>
          <a href="https://blog.com"><FaBlog size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
