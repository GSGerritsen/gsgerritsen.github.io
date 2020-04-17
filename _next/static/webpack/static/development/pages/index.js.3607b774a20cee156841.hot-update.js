webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-layout-components */ "./node_modules/react-layout-components/lib/index.js");
/* harmony import */ var react_layout_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_layout_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/gerritgerritsen/Documents/projects/personal_site/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  var _this = this;

  var css = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light'),
      theme = _useState[0],
      setTheme = _useState[1];

  var springProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    width: '100vw',
    from: {
      width: '0vw'
    }
  });
  var languages = ['Rust', 'TypeScript', 'Go', 'Haskell'];
  var frameworks = ['React', 'NextJS', 'Actix', 'GraphQL'];
  var tools = ['AWS', 'Figma', 'VS Code'];
  var other = ['PostgreSQL', 'Docker', 'Node', 'Compilers', 'Distributed Systems', 'ML'];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: css.top,
    style: springProps,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    className: css.outer + ' ' + (theme === 'dark' ? css.darkContainer : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    justifyContent: "center",
    column: true,
    className: css.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.lightSwitch + ' ' + (theme === 'light' ? css.lightText : css.darkText) + ' ' + (theme === 'light' ? css.lightSwitchActive : ''),
    onClick: function onClick() {
      return setTheme('light');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "light"), __jsx("div", {
    className: css.lightSwitch + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "/"), __jsx("div", {
    className: css.lightSwitch + ' ' + (theme === 'dark' ? css.darkText : css.lightText) + ' ' + (theme === 'dark' ? css.lightSwitchActive : ''),
    onClick: function onClick() {
      return setTheme('dark');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "dark")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.headerContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.name + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "GERRIT S", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 119
    }
  }, "."), " GERRITSEN"), __jsx("div", {
    className: css.description + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "Full", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 121
    }
  }, "-"), "stack ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 169
    }
  }, " ", __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 176
    }
  }, "software developer")), " ", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 244
    }
  }, "&"), " self-taught ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 299
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 305
    }
  }, "designer"))), __jsx("div", {
    className: css.description + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "based in ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 126
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 132
    }
  }, "Seattle")))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionContainer + ' ' + css.toColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.sectionTitle + ' ' + (theme === 'light' ? '' : css.sectionTitleDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "ABOUT ME"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: {
      fontWeight: 900
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 125
    }
  }, "I"), " grew up in Massachusetts and Northern California. After graduating high school I spent a year in Beijing learning Mandarin. While I started off as an Asian studies / philosophy double-major in university, I ended up dropping the former for computer science after an introductory CS course sparked a newfound pursuit."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, "My philosophy studies emphasized 19th century German writers, and my upper-level CS courses focused on AI, compilers, and distributed systems. I enjoy building and working on interesting, challenging systems with other people. If I get the chance to work on one from the ground-up that's even better."))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionContainer + ' ' + css.toColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.sectionTitle + ' ' + (theme === 'light' ? '' : css.sectionTitleDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "SKILLS"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Languages ", __jsx("span", {
    style: {
      fontWeight: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 141
    }
  }, "(roughly ordered by proficiency)")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    wrap: true,
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, languages.map(function (s) {
    return __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      alignItems: "center",
      justifyContent: "center",
      className: css.skill,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 48
      }
    }, s);
  }))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Frameworks"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    wrap: true,
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, frameworks.map(function (s) {
    return __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      alignItems: "center",
      justifyContent: "center",
      className: css.skill,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 48
      }
    }, s);
  }))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, "Tools"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    wrap: true,
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, tools.map(function (s) {
    return __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      alignItems: "center",
      justifyContent: "center",
      className: css.skill,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 48
      }
    }, s);
  }))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, "Other"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    wrap: true,
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, other.map(function (s) {
    return __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      alignItems: "center",
      justifyContent: "center",
      className: css.skill,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 48
      }
    }, s);
  }))))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionContainer + ' ' + css.toColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.sectionTitle + ' ' + (theme === 'light' ? '' : css.sectionTitleDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "HIGHLIGHTS"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, "Beagle"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "A RUST GRAPHQL IMPLEMENTATION & SQL TRANSLATION ENGINE"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, "At my current job, we ended up running into a situation where our REST endpoints were becoming brittle and changes to the frontend or backend led to a cascade of changes in either direction. This led to GraphQL, and while there exists a framework in Rust (called Juniper) to work with GraphQL, I wanted something that was more like Hasura."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "But Hasura is written in Haskell. So for fun I decide to implement most of the GraphQL spec from scratch in Rust with very few dependencies. On top of this I wrote a library to translate arbitrarily complex GraphQL queries into single, efficient SQL strings to be sent to Postgres. I decided to call this project Beagle, because I couldn't find a cool word that was distantly related to Juniper."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "These libraries are used in production by Rust servers that run on Actix. The benefits so far have been great, from simplified API iteration to effortlessly speedy complex queries due to the combination of no longer having the N+1 selects problem and Rust's ever-improving async ecosystem. Beagle is still a work-in-progress.")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Deep Gossip"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "A PEER-TO-PEER DEEP LEARNING SYSTEM IN AN ADVERSARIAL CONTEXT"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "By far the hardest computer science course at UBC for me was CPSC 416 - a distributed systems class I took in my final year. For the capstone project, I led a team of 3 others to build a system we called Deep Gossip, which was a peer-to-peer deep learning system built to defend against malicious nodes trying to subvert the learning process."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, "I wanted to see if we could build a peer-to-peer system where a global model is learned and attains comparable accuracy to more standard, centralized systems. The nodes would work on some subset of available training data and submit updates to known peers. These updates reached the entire network via a gossip protocol (SWIM)."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "That's already an interesting system. But what if some of the nodes could try to propagate subtly incorrect updates? We decided to allow some of the nodes to be malicious - i.e. they would attempt to poison the model being learned by the overall network."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "The system was built in Go, and ended up being an amazing experience. We simulated attacks on the network using Azure, and showed that for the simple datasets we used, the network was resistant to poisoning attempts. The space of distributed, cooperative systems with the possibility of adversarial actors is still one I'd like to explore."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "The proposal for the system that was built can be read ", __jsx("a", {
    style: {
      color: 'inherit',
      fontSize: 'inherit',
      textDecoration: 'none',
      fontWeight: 400,
      borderBottom: '1px solid black'
    },
    target: "_blank",
    href: '/deepgossip.pdf',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 212
    }
  }, "here"))))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionContainer + ' ' + css.toColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.sectionTitle + ' ' + (theme === 'light' ? '' : css.sectionTitleDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "EDUCATION"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "University of British Columbia"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "2013 - 2018"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "BA - Combined Major in Philosophy and Computer Science")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "Tsinghua University"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "2012 - 2013"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "Chinese language program")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "Palo Alto High School"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, "2008 - 2012")))), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionContainer + ' ' + css.toColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: css.sectionTitle + ' ' + (theme === 'light' ? '' : css.sectionTitleDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, "WORK"), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "Full-stack Engineer ", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 151
    }
  }, "@"), " Imperial Yellow Ventures"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, "2018 - present"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, "IYV is an investment company focusing on the health and wellness space. In this role, I execute on nearly everything from the top to the bottom of the stack. I do site design for new products, translate those designs into React + TypeScript frontends, and build out backends (primarily using Rust and PostgreSQL) to suit the needs of the product. I've learned about and implemented a variety of infrastructure patterns, from containerized microservices running on AWS Fargate to completely serverless products running on Lambda. In the process I've learned quite a bit about the trade-offs between these various approaches."), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, "Beyond the software development, I've been heavily involved in product strategy / iteration and design. I\u2019ve become better at seeing the full landscape from a core value proposition to the software that brings it to life - and all the decisions that need to be made in between.")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, "QA Automation Engineer ", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 154
    }
  }, "@"), " Agreement Express"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, "2017 - 2018"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, "Agreement Express is a digital document processing company. As a QA Automation engineer, my responsibilities included writing comprehensive test suites for various workflows and then automating the execution of those tests in the browser using selenium.")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }, "Junior Developer ", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 148
    }
  }, "@"), " Agreement Express"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, "2016 - 2017"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, "As a junior developer at Agreement Express, I gained the valuable experience of familiarizing myself with a massive existing polyglot codebase. A lasting lesson I was taught at this job was to look for opportunities to automate and improve existing systems. At the time, much of the company's QA work involved manually stepping through parts of the platform, which was time-consuming and error-prone. I took the initiative to automate these sequences, which led to the position above.")), __jsx(react_layout_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: css.sectionItemContainer,
    column: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: css.sectionItemHeader + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, "Digital Ad Strategist ", __jsx("span", {
    className: css.punctuation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 153
    }
  }, "@"), " Health Match BC"), __jsx("div", {
    className: css.sectionItemDates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "2015 - 2016"), __jsx("div", {
    className: css.sectionItemBody + ' ' + (theme === 'light' ? css.lightText : css.darkText),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, "Health Match BC is a healthcare recruitment agency for the province of British Columbia. At this position, I was responsible for growing the agency\u2019s digital ad campaigns. This involved copy-writing, product introspection, and target audience research to produce high-performing ad strategies across a number of mediums.")))))));
}

var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])({
  top: {
    height: '3px',
    width: '100vw',
    backgroundColor: '#FF5E5E',
    // borderTop: '3px solid #FF5E5E',
    boxShadow: '0px 8px 18px rgba(255, 91, 91, 0.2)'
  },
  outer: {
    transitionProperty: 'background-color',
    transition: '120ms'
  },
  lightSwitch: {
    fontFamily: 'Noto Sans JP',
    // color: '#3D3939',
    fontWeight: 300,
    fontSize: '16px',
    marginRight: '5px',
    cursor: 'pointer',
    // transition: '280ms',
    paddingBottom: '5px',
    paddingLeft: '3px',
    paddingRight: '3px'
  },
  lightText: {
    color: '#3D3939'
  },
  darkText: {
    color: 'white'
  },
  lightSwitchActive: {
    fontWeight: 900
  },
  container: {
    padding: '60px 0px',
    width: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media(max-width: 1050px)': {
      width: '500px'
    },
    '@media(max-width: 600px)': {
      paddingLeft: '40px',
      paddingRight: '40px',
      width: 'calc(100% - 80px)'
    }
  },
  darkContainer: {
    backgroundColor: '#1E252B'
  },
  headerContainer: {
    paddingBottom: '60px',
    borderBottom: '1px solid #DDDDDD'
  },
  name: {
    fontFamily: 'IBM Plex Serif',
    fontWeight: 700,
    // color: '#3D3939',
    fontSize: '46px',
    lineHeight: '45px',
    transition: '420ms',
    marginBottom: '10px',
    '@media(max-width: 400px)': {
      fontSize: '36px',
      lineHeight: '38px'
    }
  },
  description: {
    fontFamily: 'Fira Code',
    fontWeight: 300,
    // color: '#3D3939',
    fontSize: '15px',
    transition: '420ms',
    '@media(max-width: 400px)': {
      fontSize: '13px'
    }
  },
  punctuation: {
    color: '#FF5E5E',
    fontWeight: 'bold'
  },
  sectionContainer: {
    marginTop: '30px',
    marginBottom: '80px',
    position: 'relative',
    transition: '420ms',
    '@media(max-width: 400px)': {
      marginBottom: '40px'
    }
  },
  sectionTitle: {
    fontFamily: 'Fira Code',
    fontWeight: 'bold',
    color: '#999999',
    fontSize: '13px',
    paddingBottom: '10px',
    borderBottom: '1px solid #3D3939',
    marginRight: '80px',
    height: '20px',
    minWidth: '75px',
    maxWidth: '75px',
    paddingTop: '6px',
    transition: '120ms',
    position: 'sticky',
    top: '20px',
    '@media(max-width: 650px)': {
      marginRight: '40px'
    },
    '@media(max-width: 500px)': {
      position: 'relative !important',
      top: '0px',
      marginBottom: '20px'
    }
  },
  sectionTitleDark: {
    color: '#ADADAD !important',
    borderBottom: '1px solid white !important'
  },
  sectionItemContainer: {
    marginBottom: '40px'
  },
  sectionItemHeader: {
    fontFamily: 'Noto Sans JP',
    // color: '#3D3939',
    fontWeight: 900,
    fontSize: '16px',
    marginBottom: '5px',
    transition: '120ms'
  },
  sectionItemDates: {
    fontFamily: 'Fira Code',
    color: '#999999',
    fontWeight: 900,
    fontSize: '13px',
    marginBottom: '5px'
  },
  sectionItemBody: {
    fontFamily: 'Noto Sans JP',
    // color: '#3D3939',
    fontWeight: 300,
    fontSize: '16px',
    marginBottom: '5px',
    transition: '420ms',
    '@media(max-width: 500px)': {
      fontSize: '14px'
    }
  },
  skill: {
    border: '1px solid #FF5E5E',
    backgroundColor: '#FF5E5E',
    borderRadius: '2px',
    padding: '2px 10px',
    fontFamily: 'Noto Sans JP',
    color: 'white',
    fontWeight: 400,
    fontSize: '14px',
    marginRight: '8px',
    marginBottom: '8px',
    boxShadow: '0px 8px 18px rgba(255, 91, 91, 0.2)'
  },
  toColumn: {
    '@media(max-width: 500px)': {
      flexDirection: 'column !important'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3607b774a20cee156841.hot-update.js.map