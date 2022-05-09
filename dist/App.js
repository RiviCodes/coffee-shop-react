"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("./components/Header"));
const Intro_1 = __importDefault(require("./components/Intro"));
const Services_1 = __importDefault(require("./components/Services"));
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Intro_1.default, {}), (0, jsx_runtime_1.jsx)(Services_1.default, {})] }));
}
exports.default = App;
