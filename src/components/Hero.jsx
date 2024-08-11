import React, { useEffect, useState } from "react";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".object");

    const handleMouseMove = (e) => {
      elements.forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 50;
        const y = (e.clientY * movingValue) / 50;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className=" hero-text">
          <h2 className="">
            B2b Growth <br />
            <span className="hacking "> Hacking</span>
          </h2>
          <p>
            Leverage AI & Marketing Automation to easily find ,<br /> reach and
            close new deals
          </p>
          <button className="cta-button">Get Started Now</button>
          <h4> Free Consultation</h4>
          <h4>Consultation Gratuite</h4>
        </div>

        <img
          className="object hero-one"
          data-value="1"
          src="./assets/images/img-hero-1.jpeg"
          alt=""
        />
        <img
          className="object hero-two"
          data-value="2"
          src="./assets/images/img-hero-2.jpeg"
          alt=""
        />
        <img
          className="object hero-three"
          data-value="3"
          src="./assets/images/img-hero-3.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
