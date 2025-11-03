import React from 'react';

function Footer() {
  return (
    <footer className="mt-2" style={{ backgroundColor: '#03A9F4', color: 'white', padding: '20px 0' }}>
      <div className="container text-center">
        <h5>MapMate</h5>
        <p>&copy; {new Date().getFullYear()} MapMate. All rights reserved.</p>
        <ul className="list-unstyled">
          <li>
            <a href="/about" className="text-white">About Us</a>
          </li>
          <li>
            <a href="/contact" className="text-white">Contact</a>
          </li>
          <li>
            <a href="/privacy" className="text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms" className="text-white">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
