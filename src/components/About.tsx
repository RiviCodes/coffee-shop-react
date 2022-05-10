import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <section id="about-our-coffee" className="grid-about">
        <div id="water">
          <h3>
            About our <span>Coffee</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolor voluptatem nobis, illum dignissimos possimus error porro culpa
            aperiam iste quis atque libero ipsum enim sequi optio beatae
            delectus nesciunt.
          </p>

          <div>
            <img
              src="images/about-our-coffee/coffee-cup.png"
              alt="100% Natural Coffee"
            />
            <div>
              <h3>100% Natural Coffee</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, delectus?
              </p>
            </div>
          </div>
          <div>
            <img
              src="images/about-our-coffee/heart.png"
              alt="Quality product"
            />
            <div>
              <h3>Quality product</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, delectus?
              </p>
            </div>
          </div>
          <div>
            <img
              src="images/about-our-coffee/shopping-cart.png"
              alt="Free delivery"
            />
            <div>
              <h3>Free delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, delectus?
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="water2">
        <img src="images/about-our-coffee/our-coffee-1.jpg" alt="Our Coffee" />
        <img src="images/about-our-coffee/our-coffee-2.jpg" alt="Our Coffee" />
      </div>
    </>
  );
}
