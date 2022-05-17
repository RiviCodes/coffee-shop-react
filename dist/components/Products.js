"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const coffeeData_js_1 = __importDefault(require("../coffeeData.js"));
require("../styles/Products.css");
function Products() {
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
    const productCards = coffeeData_js_1.default.map((item) => {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "product-card" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: `${item.imageUrl}`, alt: "Light Blend", className: "product-card_img" }), (0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "product-card_h4" }, { children: item.title })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "product-card_p" }, { children: item.description })), (0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "product-card_h5" }, { children: "Flavor / Essence" })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "product-card_ul" }, { children: item.flavors.map((flavor) => ((0, jsx_runtime_1.jsx)("li", { children: flavor }))) }))] })));
    });
    return ((0, jsx_runtime_1.jsxs)("section", Object.assign({ id: "products" }, { children: [(0, jsx_runtime_1.jsxs)("h3", Object.assign({ className: "products-h3" }, { children: ["Our ", (0, jsx_runtime_1.jsx)("span", { children: "Products" })] })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "products-p" }, { children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a eius obcaecati maxime laborum at itaque officiis placeat ipsa, ut ea corrupti, provident tenetur eos delectus alias reiciendis deserunt sed!" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "scroll" }, { children: "It is a good platform to learn programming. It is an educational website. Prepare for the Recruitment drive of product based companies like Microsoft, Amazon, Adobe etc with a free online placement preparation course. The course focuses on various MCQ's & Coding question likely to be asked in the interviews & make your upcoming placement season efficient and successful. Also, any geeks can help other geeks by writing articles on the GeeksforGeeks, publishing articles follow few steps that are Articles that need little modification or improvement from reviewers are published first. To quickly get your articles reviewed, please refer existing articles, their formatting style, coding style, and try to make you are close to them. In case you are a beginner, you may refer Guidelines to write an Article" })), productCards] })));
}
exports.default = Products;
