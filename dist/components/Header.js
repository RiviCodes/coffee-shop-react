"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Header.css");
function Header() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("section", Object.assign({ id: "header-section" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ id: "header-logo" }, { children: "HEADER LOGO" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header-links" }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ id: "header-list" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "test" }, { children: "LINK ONE" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "test" }, { children: "LINK TWO" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "test" }, { children: "ABOUT US" })) })] })) }))] })) }));
}
exports.default = Header;
