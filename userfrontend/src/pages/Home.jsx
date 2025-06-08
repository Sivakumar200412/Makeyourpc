import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const WEBSITE_YEARS = 7; // Example: 7 years in the industry

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="summary-section">
        <h1>Welcome to MakeYourPC.com</h1>
        <p>
          MakeYourPC.com is your one-stop destination for building custom PCs tailored to your needs. With over <strong>{WEBSITE_YEARS} years</strong> of experience in the industry, we help enthusiasts and professionals design, customize, and purchase their dream computers with ease.
        </p>
        <ul className="features-list">
          <li>🛠️ Easy-to-use PC Builder with real-time price calculation</li>
          <li>💡 Wide selection of the latest processors, GPUs, RAM, and more</li>
          <li>🛒 Secure cart and checkout system</li>
          <li>📦 Genuine components from trusted brands</li>
          <li>📞 Expert assistance and customer support</li>
        </ul>
        <button
          className="start-building-btn"
          onClick={() => navigate("/build")}
        >
          Start Building
        </button>
      </section>
    </div>
  );
}

export default Home;
