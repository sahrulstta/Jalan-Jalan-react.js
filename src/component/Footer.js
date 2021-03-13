import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
 import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Hidup Walau Tak Berguna
                </p>
                <p className="footer-subscription-text">
                    Pasukan Tak berguna
                </p>
                <div>
                    <form>
                        <input type="Email" name="Email" placeholder="Your Build" className="footer-input"/>
                        <Button buttonStyle="btn--outline"> subscription</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>About Us</h2>
                        <Link to="sign-up" >How it wrok</Link>
                        <Link to="/">Testymoni</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Trems of Servec</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Contac Us</h2>
                        <Link to="sign-up" >How it wrok</Link>
                        <Link to="/">Testymoni</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Trems of Servec</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>Videos</h2>
                        <Link to="sign-up" >How it wrok</Link>
                        <Link to="/">Testymoni</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Trems of Servec</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Sosial Media</h2>
                        <Link to="sign-up" >How it wrok</Link>
                        <Link to="/">Testymoni</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Trems of Servec</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL<i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL 2020</small>
                        <div className="social-icon">
                            <Link className="social-icon-link facebook" t='/' target="_blank" aria-label="Facebook" >
                                <i className='/' className="fab fa-facebook-f" />
                            </Link>
                            <Link className="social-icon-link instagram" t='/' target="_blank" aria-label="Instagram" >
                                <i className='/' className="fab fa-instagram" />
                            </Link>
                            <Link className="social-icon-link twitter" t='/' target="_blank" aria-label="Twitter" >
                                <i className='/' className="fab fa-twitter" />
                            </Link>
                            <Link className="social-icon-link youtube" t='/' target="_blank" aria-label="Youtube" >
                                <i className='/' className="fab fa-youtube" />
                            </Link>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Footer
