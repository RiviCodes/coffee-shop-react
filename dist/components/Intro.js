"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Intro.css");
function Intro() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("section", Object.assign({ id: "intro-section" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "intro-span" }, { children: "Welcome to" })), (0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "intro-h1" }, { children: "The Coffee Shop" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "intro-p" }, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })), (0, jsx_runtime_1.jsx)("button", Object.assign({ id: "explore-button" }, { children: "EXPLORE PRODUCTS" }))] })) }));
}
exports.default = Intro;
