import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-redes-container">
                <div class="line"></div>
                <ul class="footer-list">
                    <li class="footer-item">
                        <a href="https://www.linkedin.com/in/juanes-velez/" target="_blank" rel="noopener noreferrer" class="footer-link" title="Visitar"><i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li class="footer-item">
                        <a href="https://github.com/DemonQilin" target="_blank" rel="noopener noreferrer" class="footer-link" title="Visitar"><i class="fa-brands fa-github"></i></a>
                    </li>
                    <li class="footer-item">
                        <a href="https://codepen.io/demonqilin" target="_blank" rel="noopener noreferrer" class="footer-link" title="Visitar"><i class="fa-brands fa-codepen"></i></a>
                    </li>
                    <li class="footer-item">
                        <a href="https://twitter.com/JuanesVlez1" target="_blank" rel="noopener noreferrer" class="footer-link" title="Visitar"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                </ul>
                <div class="line"></div>
            </div>
            <p class="footer-copy">Juanes Velez in 2022 &copy;</p>
        </footer>
    )
}

export default Footer