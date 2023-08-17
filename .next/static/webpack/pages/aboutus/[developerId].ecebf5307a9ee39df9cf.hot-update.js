webpackHotUpdate_N_E("pages/aboutus/[developerId]",{

/***/ "./pages/aboutus/[developerId].js":
/*!****************************************!*\
  !*** ./pages/aboutus/[developerId].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\Punam Placement prep\\sharpener assgnment\\Next js project\\01-starting-project\\pages\\aboutus\\[developerId].js",
    _s = $RefreshSig$();

 //our-domain.com/aboutus/developer

var details = [{
  id: 1,
  name: "Yash",
  role: "Senior Developer"
}, {
  id: 2,
  name: "Vaibhav",
  role: "Backend Developer"
}, {
  id: 3,
  name: "Suresh",
  role: "Frontend Developer"
}];

function DeveloperPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var developerId = router.query.developerId;
  var userDetail = details.find(function (detail) {
    return detail.id === Number(developerId);
  });

  if (!userDetail) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "User Details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Name:", userDetail.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Role:", userDetail.role]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, this);
}

_s(DeveloperPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = DeveloperPage;
/* harmony default export */ __webpack_exports__["default"] = (DeveloperPage);

var _c;

$RefreshReg$(_c, "DeveloperPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVySWRdLmpzIl0sIm5hbWVzIjpbImRldGFpbHMiLCJpZCIsIm5hbWUiLCJyb2xlIiwiRGV2ZWxvcGVyUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRldmVsb3BlcklkIiwicXVlcnkiLCJ1c2VyRGV0YWlsIiwiZmluZCIsImRldGFpbCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQyxJQUFNQSxPQUFPLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsTUFBZjtBQUF1QkMsTUFBSSxFQUFFO0FBQTdCLENBRGEsRUFHYjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsU0FBZjtBQUEwQkMsTUFBSSxFQUFFO0FBQWhDLENBSGEsRUFLYjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsUUFBZjtBQUF5QkMsTUFBSSxFQUFFO0FBQS9CLENBTGEsQ0FBaEI7O0FBT0QsU0FBU0MsYUFBVCxHQUF3QjtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsV0FBakM7QUFDQSxNQUFNRSxVQUFVLEdBQUdULE9BQU8sQ0FBQ1UsSUFBUixDQUFhLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNWLEVBQVAsS0FBY1csTUFBTSxDQUFDTCxXQUFELENBQWhDO0FBQUEsR0FBYixDQUFuQjs7QUFFQSxNQUFJLENBQUNFLFVBQUwsRUFBaUI7QUFDYix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0gsc0JBQU87QUFBQSw0QkFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBR0o7QUFBQSwwQkFBU0EsVUFBVSxDQUFDUCxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISSxlQUlKO0FBQUEsMEJBQVNPLFVBQVUsQ0FBQ04sSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FkUUMsYTtVQUNVRSxxRDs7O0tBRFZGLGE7QUFnQk1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3BlcklkXS5lY2ViZjUzMDdhOWVlMzlkZjljZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vb3VyLWRvbWFpbi5jb20vYWJvdXR1cy9kZXZlbG9wZXJcclxuIGNvbnN0IGRldGFpbHMgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIllhc2hcIiwgcm9sZTogXCJTZW5pb3IgRGV2ZWxvcGVyXCIgfSxcclxuICBcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiVmFpYmhhdlwiLCByb2xlOiBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICBcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiU3VyZXNoXCIsIHJvbGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICBdO1xyXG5mdW5jdGlvbiBEZXZlbG9wZXJQYWdlKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRldmVsb3BlcklkID0gcm91dGVyLnF1ZXJ5LmRldmVsb3BlcklkO1xyXG4gICAgY29uc3QgdXNlckRldGFpbCA9IGRldGFpbHMuZmluZCgoZGV0YWlsKSA9PiBkZXRhaWwuaWQgPT09IE51bWJlcihkZXZlbG9wZXJJZCkpO1xyXG5cclxuICAgIGlmICghdXNlckRldGFpbCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkRldmVsb3BlciBkb2Vzbid0IGV4aXN0PC9kaXY+O1xyXG4gICAgICB9XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgIDxoMT5Vc2VyIERldGFpbHM8L2gxPiBcclxuICAgICAgXHJcbiAgICAgICA8cD5OYW1lOnt1c2VyRGV0YWlsLm5hbWV9PC9wPlxyXG4gICAgICAgPHA+Um9sZTp7dXNlckRldGFpbC5yb2xlfTwvcD5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wZXJQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=