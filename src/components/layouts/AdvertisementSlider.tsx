"use client";

import React, { useState, useEffect } from "react";
import "./AdvertisementSlider.css";

const images = ["/Bus.jpg", "/Abuja.jpg", "/Benin.jpg", "/Lagos.jpg"]; // You can later load this dynamically from API or props

export default function AdvertisementSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-1">
      <div className="slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-text-container">
        <p className="text-1">Book Your Next Trip</p>
        <p className="text-2">
          Seamlessly find and book bus tickets across Nigeria
        </p>
      </div>
    </section>
  );
}
