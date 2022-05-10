import React from "react";
import "../styles/Services.css";

export default function Services() {
  return (
    <>
      <section id="services-section" className="grid-services">
        <div>
          <img
            id="coffee-mug"
            src="./images/services/coffee-mug.png"
            alt="Coffee Mug"
          />
          <h2>Best Coffee</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            doloremque!
          </p>
        </div>
        <div>
          <img
            id="coffee-cup"
            src="./images/services/coffee-cup.png"
            alt="Coffee Cup"
          />
          <h2>Ready for you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            iste!
          </p>
        </div>
        <div>
          <img
            id="coffee-bag"
            src="./images/services/coffee-bag.png"
            alt="Coffee Bag"
          />
          <h2>House Specialties</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            eos.
          </p>
        </div>
        <div>
          <img id="wifi" src="./images/services/wifi.png" alt="Wifi" />
          <h2>Free Wifi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            fugiat.
          </p>
        </div>
      </section>
    </>
  );
}
