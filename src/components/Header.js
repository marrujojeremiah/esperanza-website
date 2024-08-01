
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../assets/HeaderHands.png';
import aboutUsImage from '../assets/together.png';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            header.style.opacity = 1 - window.scrollY / 600;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="header-background">
                    <img src={headerImage} alt="Header Background" />
                </div>
                <div className="header-content">
                    <h1>Esperanza's Homes of Hope</h1>
                    <p>Supporting individuals with developmental delays</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link to="/careers">Careers</Link></li>
                    </ul>
                </nav>
            </header>
            <section id="about" className="about-section">
                <div className="about-image">
                    <img src={aboutUsImage} alt="About Us" />
                </div>
                <div className="about-content">
                    <h2>Our Mission</h2>
                    <p>
                        The Mission of Esperanza’s Homes of Hope is to provide supportive and structured living environment for people with developmental disabilities to exercise their right to make choices, grow, and contribute to their community.
                    </p>
                    <a href="#contact" className="cta-button">Plan Your Visit</a>
                </div>
            </section>
            <section id="services" className="services-section">
                <h2>Our Services</h2>
                <p>
                    At Esperanza's Homes of Hope, we offer a variety of services to support individuals with developmental delays, including personalized care plans, daily living assistance, recreational activities, and therapeutic support. Our dedicated staff ensures that each resident receives the highest quality of care in a safe and nurturing environment.
                </p>
            </section>
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    For more information about our services or to schedule a visit, please contact us at:
                </p>
                <p>
                    Sabrina Snyder, Owner<br />
                    Christopher Snyder, House Manager & CFO<br />
                    Phone: 619-471-4180<br />
                    Email: sabrina@ehoharf.com
                </p>
            </section>
        </>
    );
};

export default Header;
