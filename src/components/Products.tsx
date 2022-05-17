import React from "react";
import coffeeData from "../coffeeData.js";
import "../styles/Products.css";

export default function Products() {
  /*
  const API_URL = "https://api.sampleapis.com";
  const xhr = new XMLHttpRequest();
  let coffeeData: any[];

  function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
      coffeeData = JSON.parse(this.response);
      console.log(coffeeData);
      return coffeeData;
    }
  }

  xhr.addEventListener("load", onRequestHandler);
  xhr.open("GET", `${API_URL}/coffee/hot`);
  xhr.send();
*/

  const productCards = coffeeData.map((item) => {
    return (
      <div className="product-card">
        <img
          src={`${item.imageUrl}`}
          alt="Light Blend"
          className="product-card_img"
        />
        <h4 className="product-card_h4">{item.title}</h4>
        <p className="product-card_p">{item.description}</p>
        <h5 className="product-card_h5">Flavor / Essence</h5>
        <ul className="product-card_ul">
          {item.flavors.map((flavor: string) => (
            <li>{flavor}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <section id="products">
      <h3 className="products-h3">
        Our <span>Products</span>
      </h3>
      <p className="products-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a
        eius obcaecati maxime laborum at itaque officiis placeat ipsa, ut ea
        corrupti, provident tenetur eos delectus alias reiciendis deserunt sed!
      </p>
      <div className="scroll">
        It is a good platform to learn programming. It is an educational
        website. Prepare for the Recruitment drive of product based companies
        like Microsoft, Amazon, Adobe etc with a free online placement
        preparation course. The course focuses on various MCQ's & Coding
        question likely to be asked in the interviews & make your upcoming
        placement season efficient and successful. Also, any geeks can help
        other geeks by writing articles on the GeeksforGeeks, publishing
        articles follow few steps that are Articles that need little
        modification or improvement from reviewers are published first. To
        quickly get your articles reviewed, please refer existing articles,
        their formatting style, coding style, and try to make you are close to
        them. In case you are a beginner, you may refer Guidelines to write an
        Article
      </div>
      {productCards}
    </section>
  );
}
