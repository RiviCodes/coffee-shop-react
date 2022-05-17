"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Navbar.css");
function Navbar() {
    return ((0, jsx_runtime_1.jsxs)("section", Object.assign({ id: "navbar-section" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "navbar--left_side" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "./images/header/coffee-beans.png", alt: "Beans Logo", className: "navbar--beans_logo" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ id: "navbar-logo" }, { children: "COFFEE SHOP" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "navbar--right_side" }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ id: "navbar-list" }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "navbar--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "navbar-anchor", href: "test" }, { children: "LINK ONE" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "navbar--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "navbar-anchor", href: "test" }, { children: "LINK TWO" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "navbar--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "navbar-anchor", href: "test" }, { children: "ABOUT US" })) }))] })) }))] })));
}
exports.default = Navbar;
