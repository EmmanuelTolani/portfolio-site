(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        hyper: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/hyper/index.js", "vendors~hyper" ]);
    return checkDeferredModules();
})({
    "./assets/js/hyper/actions/actions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return actions; });\nconst actions = {\n  up,\n  intro,\n  showMenu\n};\n\nfunction up(state, actions) {\n  return {\n    count: state.count + 1\n  };\n}\n\nfunction showMenu() {}\n\nfunction intro(state, actions) {\n  console.log('Just ran my first action');\n  return {\n    count: state.count + 1\n  };\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/actions/actions.js?");
    },
    "./assets/js/hyper/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./assets/js/hyper/components/Header.js");\n/* harmony import */ var _Top_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Top.js */ "./assets/js/hyper/components/Top.js");\n/* harmony import */ var _PortfolioSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PortfolioSection.js */ "./assets/js/hyper/components/PortfolioSection.js");\n/* harmony import */ var _Skills_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skills.js */ "./assets/js/hyper/components/Skills.js");\n/* harmony import */ var _Blog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blog.js */ "./assets/js/hyper/components/Blog.js");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.js */ "./assets/js/hyper/components/Footer.js");\n/* harmony import */ var _Copyright_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Copyright.js */ "./assets/js/hyper/components/Copyright.js");\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": \'app\'\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Header_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Top_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_PortfolioSection_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Skills_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Blog_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Footer_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Copyright_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/App.js?');
    },
    "./assets/js/hyper/components/Blog.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Blog(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "blog-section"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "Blog")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "main-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "blog-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "blog 1"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "img"\n  })), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "details"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html",\n    "class": "header"\n  }, "5 Best Practices from Deep Work by Cal Newport"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "subheading"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    "class": "category",\n    href: "https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html"\n  }, "Self development"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, "\\xA0/ 25th January, 2021")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Cal Newport might change your life."))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "blog 2"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "img-2"\n  })), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "details"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html",\n    "class": "header"\n  }, "3 Lessons From ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("em", null, "Discipline Means Freedom")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "subheading"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    "class": "category",\n    href: "https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html"\n  }, "Self development"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, "\\xA0/ 2nd Feburary, 2021 ")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Smarter Stronger Faster. Learn why discipline means freedom!")))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "button"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://etolani.blogspot.com"\n  }, "View more Posts")))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Blog.js?');
    },
    "./assets/js/hyper/components/Copyright.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Copyright; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Copyright(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "copyright-section"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "copyright"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", null, "\\xA9 2021 Emmanuel Tolani. All rights reserved.")));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Copyright.js?');
    },
    "./assets/js/hyper/components/Footer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Footer(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "footer"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "footer-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "info"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "Let\'s Work Together"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Have a project you\'d like to discuss?")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "button"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "mailto: %65%6D%6D%61%6E%75%65%6C%74%6F%6C%61%6E%69%31%37%40%67%6D%61%69%6C%2E%63%6F%6D"\n  }, "Contact me"))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "social-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.linkedin.com/in/emmanuel-tolani-0b5a9b188/"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-linkedin"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, " on linkedin")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://dribbble.com/tolanie"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-dribbble"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, " on dribbble")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://github.com/EmmanuelTolani"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-github"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, " on github")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.instagram.com/etolanii/"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-instagram"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", null, " on instagram"))))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Footer.js?');
    },
    "./assets/js/hyper/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Header(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("header", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "logo"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "name"\n  }, "Tolani")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "header-menu"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "index.html#portfolio-section"\n  }, "Projects"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "index.html#skills"\n  }, "Skills"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "index.html#blog-section"\n  }, "Blog"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "index.html#skills"\n  }, "Contact")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "menu-btn"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fas fa-bars"\n  })));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Header.js?');
    },
    "./assets/js/hyper/components/PortfolioSection.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioSection; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction PortfolioSection(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "portfolio-section"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "header-title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "My Projects")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "portfolio-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "box image1"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "image"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "hover-bg"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "text"\n  }, "Ecommerce"))))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "box image2"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "image"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "hover-bg"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "text"\n  }, "Ecommerce"))))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "box image3"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "image"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "hover-bg"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "text"\n  }, "Ecommerce"))))))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/PortfolioSection.js?');
    },
    "./assets/js/hyper/components/Skill-page.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App1; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./assets/js/hyper/components/Header.js");\n/* harmony import */ var _Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skills.js */ "./assets/js/hyper/components/Skills.js");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.js */ "./assets/js/hyper/components/Footer.js");\n/* harmony import */ var _Copyright_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Copyright.js */ "./assets/js/hyper/components/Copyright.js");\n\n\n\n\n\nfunction App1(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": \'app1\'\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Header_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Skills_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Footer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Copyright_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Skill-page.js?');
    },
    "./assets/js/hyper/components/Skills.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skills; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Skills(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "skills"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "My Skills")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "main-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "skillset-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "skill 1"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fas fa-pen-fancy"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h4", null, "Web Design"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "secondary-header"\n  }, "Html,Css and Javascript"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, \' \', "A website should be designed for the people who will use it, so that\'s exactly what I do. User focused design should be the primary goal of any website.")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "skill 2"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fas fa-desktop"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h4", null, "Web Development"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "secondary-header"\n  }, "Responsive"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, \' \', "A website should be designed for the people who will use it, so that\'s exactly what I do. User focused design should be the primary goal of any website."))))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Skills.js?');
    },
    "./assets/js/hyper/components/Top.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Top; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Top(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "top"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "top-container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "info"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "Hey, I\'m Manuel."), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "A web designer and developer from Edmonton, Alberta Canada. I am passionate about development."), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "button"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#portfolio-section"\n  }, "Latest Works"))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "img"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "background-img"\n  })))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Top.js?');
    },
    "./assets/js/hyper/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/actions.js */ "./assets/js/hyper/actions/actions.js");\n/* harmony import */ var _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/globalState.js */ "./assets/js/hyper/state/globalState.js");\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.js */ "./assets/js/hyper/components/App.js");\n/* harmony import */ var _components_Skill_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Skill-page.js */ "./assets/js/hyper/components/Skill-page.js");\n\n\n\n\n\nObject(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"])({\n  state: {\n    globalState: _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__[/* globalState */ "a"]\n  },\n  view: (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_components_App_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }),\n  root: document.getElementById(\'app\'),\n  actions: _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"],\n  events: {\n    action(state, actions, _ref) {\n      let {\n        name,\n        data\n      } = _ref;\n      console.group(\'Action Info\');\n      console.log(\'Name:\', name);\n      console.log(\'Data:\', data);\n      console.groupEnd();\n    },\n\n    load(state, actions) {}\n\n  }\n});\napp1({\n  state: {\n    globalState: _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__[/* globalState */ "a"]\n  },\n  view: (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_components_Skill_page_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }),\n  root: document.getElementById(\'app1\'),\n  actions: _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"],\n  events: {\n    action(state, actions, _ref2) {\n      let {\n        name,\n        data\n      } = _ref2;\n      console.group(\'Action Info\');\n      console.log(\'Name:\', name);\n      console.log(\'Data:\', data);\n      console.groupEnd();\n    },\n\n    load(state, actions) {}\n\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/hyper/index.js?');
    },
    "./assets/js/hyper/state/globalState.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalState; });\nconst globalState = {\n  count: 0\n};\n\n//# sourceURL=webpack:///./assets/js/hyper/state/globalState.js?');
    }
});