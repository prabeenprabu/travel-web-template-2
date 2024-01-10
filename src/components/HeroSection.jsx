import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import "../App.css";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>what are you wating for ?</p>
            <div className="hero-btns">
                <Button
                    className="btn"
                    buttonStyle="btn-outline"
                    buttonSize="btn-large">
                    Get Started
                </Button>
                <Button
                    className="btn"
                    buttonStyle="btn-primary"
                    buttonSize="btn-large">
                    Watch Trailer <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    );
}
