"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Header() {
    return (<>
      <section id="main-header">
        <div id="header-logo">HEADER LOGO</div>
        <div className="header-links">
          <ul id="main-header-list">
            <li>
              <a href="test">LINK ONE</a>
            </li>
            <li>
              <a href="test">LINK TWO</a>
            </li>
            <li>
              <a href="test">ABOUT US</a>
            </li>
          </ul>
        </div>
      </section>
    </>);
}
exports.default = Header;
