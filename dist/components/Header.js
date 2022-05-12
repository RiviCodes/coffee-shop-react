"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Navbar.css");
function Navbar() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("section", Object.assign({ id: "header-section" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header--left_side" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "./images/header/coffee-beans.png", alt: "Beans Logo", className: "header--beans_logo" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ id: "header-logo" }, { children: "COFFEE SHOP" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header--right_side" }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ id: "header-list" }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "header--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "header-anchor", href: "test" }, { children: "LINK ONE" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "header--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "header-anchor", href: "test" }, { children: "LINK TWO" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "header--li_item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "header-anchor", href: "test" }, { children: "ABOUT US" })) }))] })) }))] })) }));
}
exports.default = Navbar;
