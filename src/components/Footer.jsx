import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newletter to receive our best vaction
                </p>
                <p className="footer-subscription-text">
                    you can unSubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input
                            type="email"
                            placeholder="maild id"
                            name="email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn-primary">Subscribe</Button>
                    </form>
                </div>
            </section>
            <section className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Investor</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
