"use strict";

console.log('app is running...');

// JSX - JavaScript XML
var app = {
  title: 'This is JSX from App.js!',
  subtitle: 'some text',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
  console.log('Form submitted!');
};
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};
var root = ReactDOM.createRoot(document.getElementById("app"));
var numbers = [55, 101, 1000];
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'here are your options' : 'No options'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), numbers.map(function (number) {
    return /*#__PURE__*/React.createElement("p", {
      key: number
    }, "Number: ", number);
  }), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  root.render(template);
};
render();
