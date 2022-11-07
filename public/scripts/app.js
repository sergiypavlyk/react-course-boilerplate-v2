"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _IndecisionApp = _interopRequireDefault(require("./components/IndecisionApp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var root = _reactDom["default"].createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/_react["default"].createElement(_IndecisionApp["default"], null));
