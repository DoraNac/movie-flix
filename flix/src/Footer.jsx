import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Netflix Replica. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/help">Help</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
