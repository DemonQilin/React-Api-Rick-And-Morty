import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-redes-container">
                <div className="line"></div>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://www.linkedin.com/in/juanes-velez/" target="_blank" rel="noopener noreferrer" className="footer-link" title="Visitar"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="https://github.com/DemonQilin" target="_blank" rel="noopener noreferrer" className="footer-link" title="Visitar"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="https://codepen.io/demonqilin" target="_blank" rel="noopener noreferrer" className="footer-link" title="Visitar"><i className="fa-brands fa-codepen"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="https://twitter.com/JuanesVlez1" target="_blank" rel="noopener noreferrer" className="footer-link" title="Visitar"><i className="fa-brands fa-twitter"></i></a>
                    </li>
                </ul>
                <div className="line"></div>
            </div>
            <p className="footer-copy">Juanes Velez in 2022 &copy;</p>
        </footer>
    )
}

export default Footer