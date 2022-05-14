import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about-section" className="grid-about">
      <div className="about-left_side">
        <h3 className="about-h3">
          About our <span>Coffee</span>
        </h3>
        <p className="about-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          dolor voluptatem nobis, illum dignissimos possimus error porro culpa
          aperiam iste quis atque libero ipsum enim sequi optio beatae delectus
          nesciunt.
        </p>
        <div className="about-card">
          <img
            src="images/about-our-coffee/coffee-cup.png"
            alt="100% Natural Coffee"
            className="about-icon"
          />
          <h3 className="about--card_header">
            100% Natural
            <br />
            Coffee
          </h3>
          <p className="about--card_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus?
          </p>
        </div>
        <div className="about-card">
          <img
            src="images/about-our-coffee/heart.png"
            alt="Quality product"
            className="about-icon"
          />

          <h3 className="about--card_header">
            Quality
            <br />
            product
          </h3>
          <p className="about--card_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus?
          </p>
        </div>
        <div className="about-card">
          <img
            src="images/about-our-coffee/shopping-cart.png"
            alt="Free delivery"
            className="about-icon"
          />
          <h3 className="about--card_header">
            Free
            <br />
            delivery
          </h3>
          <p className="about--card_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus?
          </p>
        </div>
      </div>
      <div className="about-right_side">
        <img
          src="images/about-our-coffee/our-coffee-1.jpg"
          alt="Our Coffee"
          className="about-picture"
        />
        <img
          src="images/about-our-coffee/our-coffee-2.jpg"
          alt="Our Coffee"
          className="about-picture"
        />
      </div>
    </section>
  );
}
