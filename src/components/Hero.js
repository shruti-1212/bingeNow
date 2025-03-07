import React, { useState, useEffect } from "react";
import banner2 from "../banner/banner2.jpg";
import banner3 from "../banner/banner3.jpg";
import banner4 from "../banner/banner4.jpg";
import banner5 from "../banner/banner5.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner2, banner3, banner4, banner5];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden",height:"40vh" }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 30,
            width: "95%",
            height: "100%",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;