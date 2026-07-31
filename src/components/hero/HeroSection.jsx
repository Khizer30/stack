import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroPoster from "../../assets/hero.png";
import heroVideo from "../../assets/videos/Technology_innovation_erp_software.mp4";
import GradientText from "../GradientText";
import "./HeroSection.css";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="hero-video">
        <video className="hero-video-el" autoPlay muted loop playsInline preload="auto" poster={heroPoster} onLoadedData={() => setVideoLoaded(true)}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        {!videoLoaded && <div className="hero-video-fallback" />}
      </div>

      {/* Overlay */}
      <div className="hero-gradient-overlay" />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-container">
          {/* Subheading */}
          <span className="hero-subheading">AI • Software • Innovation</span>

          {/* Heading */}
          <h1 className="hero-heading">
            Build the Future with{" "}
            <GradientText className="hero-highlight" showBorder={false} blur={false}>
              AI-Powered
            </GradientText>{" "}
            Solutions
          </h1>

          {/* Paragraph */}
          <p className="hero-description">
            We engineer cutting-edge AI, ERP, web, and mobile solutions that transform businesses into scalable, intelligent digital enterprises.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button type="button" className="hero-btn hero-btn-primary" onClick={() => navigate("/contact")}>
              Get Started
            </button>

            <button type="button" className="hero-btn hero-btn-secondary" onClick={() => navigate("/products")}>
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
