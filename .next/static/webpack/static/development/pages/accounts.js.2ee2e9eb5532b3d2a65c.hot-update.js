webpackHotUpdate("static/development/pages/accounts.js",{

/***/ "./components/Common/Layout/index.tsx":
/*!********************************************!*\
  !*** ./components/Common/Layout/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _LangMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LangMenu */ "./components/Common/Layout/LangMenu.tsx");
/* harmony import */ var _lib_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/router */ "./lib/router.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../server/i18n */ "./server/i18n.ts");





var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;










var styles = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createStyles"])({
    icon: {
      marginRight: theme.spacing(2),
      color: '#fff'
    },
    title: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    },
    loginText: {
      textDecoration: 'none',
      marginLeft: theme.spacing(1)
    }
  });
};

function Copyright() {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright \xA9", __jsx("a", {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Sec Receive"), ' ', new Date().getFullYear(), ".");
}
/*
componentDidMount() {
  const { i18n } = this.props
  i18n.on('languageChanged', () => {
    console.log(33333)
  })
}
*/


var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var i18n = this.props.i18n;
      i18n.on('languageChanged', function () {
        console.log(33333);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          i18n = _this$props.i18n,
          children = _this$props.children;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CssBaseline"], null), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        position: "relative"
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["PhotoCamera"], {
        className: classes.icon
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "h5",
        className: classes.title
      }, t('title')), __jsx(_LangMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        i18n: i18n
      }), __jsx(_lib_router__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "accounts"
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        "aria-label": "account of current user",
        "aria-controls": "menu-appbar",
        "aria-haspopup": "true",
        color: "inherit"
      }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AccountBalance"], null))), __jsx(_lib_router__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "index"
      }, __jsx("a", {
        className: "link ".concat(classes.loginText)
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "h6"
      }, t('login')))))), children, __jsx("footer", {
        className: classes.footer
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "h6",
        align: "center",
        gutterBottom: true
      }, "1 Sec company"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "subtitle1",
        align: "center",
        color: "textSecondary",
        component: "p"
      }, __jsx(Copyright, null))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_server_i18n__WEBPACK_IMPORTED_MODULE_13__["withTranslation"])('common')(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Layout)));

/***/ })

})
//# sourceMappingURL=accounts.js.2ee2e9eb5532b3d2a65c.hot-update.js.map