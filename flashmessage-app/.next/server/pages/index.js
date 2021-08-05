(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/c/Users/DanteBenicio/Documents/flash-message/flashmessage-app/pages/index.jsx";


const index = () => {
  const form = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
    initialValues: {
      message: '',
      expiresIn: 10
    },
    onSubmit: async values => {
      await fetch('/api/send-message', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Flash Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: form.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        onChange: form.handleChange,
        name: "message",
        cols: "30",
        rows: "10",
        placeholder: "Type your private message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), "Expires in:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        onChange: form.handleChange,
        name: "expiresIn",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "30",
          children: "30 seconds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "60",
          children: "1 minute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "120",
          children: "2 minutes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "300",
          children: "5 minutes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "600",
          children: "10 minutes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Send Flash Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: JSON.stringify(form.values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFzaG1lc3NhZ2UtYXBwLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2ZsYXNobWVzc2FnZS1hcHAvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9mbGFzaG1lc3NhZ2UtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJmb3JtIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm1lc3NhZ2UiLCJleHBpcmVzSW4iLCJvblN1Ym1pdCIsInZhbHVlcyIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUVsQixRQUFNQyxJQUFJLEdBQUdDLGlEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLEVBREk7QUFFYkMsZUFBUyxFQUFFO0FBRkUsS0FETTtBQUtyQkMsWUFBUSxFQUFFLE1BQU9DLE1BQVAsSUFBa0I7QUFDMUIsWUFBTUMsS0FBSyxDQUFDLG1CQUFELEVBQXNCO0FBQy9CQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLENBRHlCO0FBRS9CSyxlQUFPLEVBQUU7QUFDUCwwQkFBZ0I7QUFEVCxTQUZzQjtBQUsvQkMsY0FBTSxFQUFFO0FBTHVCLE9BQXRCLENBQVg7QUFPRDtBQWJvQixHQUFELENBQXRCO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGNBQVEsRUFBRVosSUFBSSxDQUFDYSxZQUFyQjtBQUFBLDhCQUNFO0FBQVUsZ0JBQVEsRUFBRWIsSUFBSSxDQUFDYyxZQUF6QjtBQUF1QyxZQUFJLEVBQUMsU0FBNUM7QUFBc0QsWUFBSSxFQUFDLElBQTNEO0FBQWdFLFlBQUksRUFBQyxJQUFyRTtBQUEwRSxtQkFBVyxFQUFDO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsOEJBR0U7QUFBUSxnQkFBUSxFQUFFZCxJQUFJLENBQUNjLFlBQXZCO0FBQXFDLFlBQUksRUFBQyxXQUExQztBQUFBLGdDQUNFO0FBQVEsZUFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFRLGVBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBUSxlQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQVEsZUFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFRLGVBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQVdFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBZUU7QUFBQSxnQkFBTUwsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQUksQ0FBQ00sTUFBcEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUEsa0JBREY7QUFtQkQsQ0FyQ0Q7O0FBdUNBLCtEQUFlUCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDekNBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrUHJvdmlkZXIsIHVzZUZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBmb3JtID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIGV4cGlyZXNJbjogMTAsXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvc2VuZC1tZXNzYWdlJywge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5GbGFzaCBNZXNzYWdlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSBuYW1lPSdtZXNzYWdlJyBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwcml2YXRlIG1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIEV4cGlyZXMgaW46XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17Zm9ybS5oYW5kbGVDaGFuZ2V9IG5hbWU9J2V4cGlyZXNJbic+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMCBzZWNvbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjBcIj4xIG1pbnV0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyMFwiPjIgbWludXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwMFwiPjUgbWludXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYwMFwiPjEwIG1pbnV0ZXM8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBGbGFzaCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZm9ybS52YWx1ZXMpfTwvcHJlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==