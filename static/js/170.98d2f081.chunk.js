"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [170],
  {
    6170: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return q;
          },
        });
      var a,
        e,
        o,
        r,
        s = i(168),
        c = i(2791),
        d = i(8789),
        l = i(6002),
        h = i(4281),
        p = i(3518),
        x = i(1087),
        m = i(184);
      function u(n) {
        var t = n.showMenu,
          i = (n.setMenu, n.isDark),
          a = n.setDark;
        return (0, m.jsx)(z, {
          show: t,
          children: (0, m.jsxs)(M, {
            children: [
              (0, m.jsx)(C, {
                onClick: function () {
                  return a(!i);
                },
                isDark: i,
                children: i
                  ? (0, m.jsx)("svg", {
                      width: "32",
                      height: "32",
                      fill: "currentColor",
                      viewBox: "0 0 16 16",
                      className: "bi bi-brightness-high-fill active",
                      children: (0, m.jsx)("path", {
                        d: "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
                      }),
                    })
                  : (0, m.jsx)("svg", {
                      width: "32",
                      height: "32",
                      fill: "currentColor",
                      viewBox: "0 0 16 16",
                      className: "bi bi-moon-fill active",
                      children: (0, m.jsx)("path", {
                        d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z",
                      }),
                    }),
              }),
              t &&
                [
                  { id: "home", title: "home" },
                  { id: "about", title: "about me" },
                  { id: "portfolio", title: "portfolio" },
                  { id: "projects", title: "projects" },
                  { id: "contact", title: "contact" },
                ].map(function (n) {
                  return (0,
                  m.jsx)(D, { children: (0, m.jsx)(x.rU, { className: "link", to: n.id, children: n.title }) });
                }),
            ],
          }),
        });
      }
      var f,
        g,
        w,
        v,
        b,
        k,
        j,
        Z,
        z = d.ZP.div(
          a ||
            (a = (0, s.Z)([
              "\n    width: 204px;\n    height: calc(100vh - 70px);\n    top: 70px;\n    position: fixed;\n    /* opacity: ",
              "; */\n    transform: ",
              ";\n    transition: all 1024ms ease;\n    @media (max-width: 540px) {\n\t\tmax-height: calc(100vh - 56px);\n        height: max-content;\n        top: 56px;\n        width: 100vw;\n        transform: ",
              ';\n    }\n    background: url("https://user-images.githubusercontent.com/85221003/190644474-da925862-c4fe-4dc8-96dc-e2df2c7ced9a.jpg");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    right: 0;\n    color: #fff;\n    align-items: center;\n    justify-content: space-around;\n',
            ])),
          function (n) {
            return n.show ? "1" : "0.69";
          },
          function (n) {
            return n.show ? "translateX(0%)" : "translateX(100%)";
          },
          function (n) {
            return n.show ? "translateX(0%)" : "translateY(-100vh)";
          }
        ),
        M = d.ZP.ul(
          e ||
            (e = (0, s.Z)([
              "\n    width: 100%;\n    grid-gap: 4vh;\n    margin-bottom: 2vh;\n    padding: 1rem;\n    grid-template-columns: auto;\n    position: relative;\n",
            ]))
        ),
        C = d.ZP.div(
          o ||
            (o = (0, s.Z)([
              "\n    margin: 0 auto;\n    color: ",
              ";\n    transition: all 125ms ease-in-out;\n    overflow: visible;\n    cursor: pointer;\n    svg {\n        transform: scale(0.75);\n        &:hover {\n            filter: drop-shadow(3px 4px 7px #00c4cc);\n            transform: scale(1);\n        }\n    }\n",
            ])),
          function (n) {
            return n.isDark ? "#15023a" : "#fff";
          }
        ),
        D = d.ZP.li(
          r ||
            (r = (0, s.Z)([
              "\n    width: max-content;\n    margin: 0 auto;\n    .link {\n        margin: 0 auto;\n    width: max-content;\n    text-decoration: none;\n    font-family: \"Zen Kaku Gothic Antique\";\n    font-size: 30px;\n    text-align: center;\n    font-weight: 400;\n    display: inline-block;\n    position: relative;\n    transition-delay: 250ms;\n    text-transform: capitalize;\n    }\n    &::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        transform: scaleX(0);\n        height: 4px;\n        bottom: 0px;\n        left: 0;\n        background-color: transparent;\n        transform-origin: bottom right;\n        transition: transform 512ms ease-out;\n        border-radius: 32px;\n        background: linear-gradient(#185a9d, #15023a);\n    }\n    &:hover {\n        color: #185a9d;\n        font-weight: Black;\n        opacity: 0.75;\n        transition-delay: 0s !important;\n        transition-duration: 0s !important;\n    }\n    &:hover::after {\n        transform: scaleX(1);\n        transform-origin: bottom  left;\n    }\n",
            ]))
        ),
        P = (0, c.memo)(u),
        y = i(485),
        N = "HarshRajGupta@hotmail.com",
        H = "+917607642202",
        A = "https://drive.google.com/file/d/1g0lGlqeTgYr0o5zz8gMmHQZ7w8mkkwMa";
      function G(n) {
        var t = n.menuOpen,
          i = n.setMenuOpen,
          a = n.isDark,
          e = n.setDark,
          o = (0, y.VY)().show;
        return (0, m.jsxs)(Y, {
          className: !t && "active",
          isDark: a,
          children: [
            (0, m.jsx)(P, { showMenu: t, setMenu: i, isDark: a, setDark: e }),
            (0, m.jsxs)(T, {
              children: [
                (0, m.jsxs)(X, {
                  children: [
                    (0, m.jsx)(R, { isDark: a, children: "harsh." }),
                    (0, m.jsxs)(V, {
                      children: [
                        (0, m.jsx)(l.Z, {
                          className: "icon",
                          onClick: function () {
                            navigator.clipboard.writeText(H),
                              o(
                                "Mobile Number has been copied on the clipboard"
                              );
                          },
                        }),
                        (0, m.jsx)(B, {
                          onClick: function () {
                            navigator.clipboard.writeText(H),
                              o(
                                "Mobile Number has been copied on the clipboard"
                              );
                          },
                          children: H,
                        }),
                      ],
                    }),
                    (0, m.jsxs)(V, {
                      children: [
                        (0, m.jsx)(h.Z, {
                          className: "icon",
                          onClick: function () {
                            navigator.clipboard.writeText(N),
                              o("Email id has been copied on the clipboard");
                          },
                        }),
                        (0, m.jsx)(B, {
                          onClick: function () {
                            navigator.clipboard.writeText(N),
                              o("Email id has been copied on the clipboard");
                          },
                          children: N,
                        }),
                      ],
                    }),
                    (0, m.jsxs)(V, {
                      children: [
                        (0, m.jsx)(p.Z, {
                          className: "icon",
                          onClick: function () {
                            return window.open(A);
                          },
                        }),
                        (0, m.jsx)(B, {
                          onClick: function () {
                            return window.open(A);
                          },
                          children: "Resume",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, m.jsx)(E, {
                  children: (0, m.jsxs)(L, {
                    onClick: function () {
                      return i(!t);
                    },
                    className: t && "active",
                    children: [
                      (0, m.jsx)("span", {}),
                      (0, m.jsx)("span", {}),
                      (0, m.jsx)("span", {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var T = d.ZP.div(
          f ||
            (f = (0, s.Z)([
              "\n    width: 100%;\n    padding: 10px 30px;\n    align-items: center;\n    justify-content: space-between;\n    grid-template-columns: auto auto;\n",
            ]))
        ),
        X = d.ZP.div(
          g ||
            (g = (0, s.Z)([
              "\n    grid-template-columns: auto auto auto auto;\n    align-items: center;\n    grid-gap: 70px;\n    @media (max-width: 1280px) {\n        grid-gap: 16px;\n    }\n\twidth: max-content;\n",
            ]))
        ),
        R = d.ZP.h1(
          w ||
            (w = (0, s.Z)([
              "\n    font-size: 42px;\n    font-weight: 600;\n    text-decoration: none;\n    font-family: Poppins;\n    @media (max-width: 540px) {\n        font-size: 24px;\n    }\n\t@media (max-width: 414px) {\n        font-size: 21px;\n    }\n    @media (max-width: 300px) {\n        font-size: 18px;\n    }\n\tcolor: ",
              ";\n",
            ])),
          function (n) {
            return n.isDark ? "#00c4cc" : "rgba(2, 12, 23, 0.9)";
          }
        ),
        V = d.ZP.div(
          v ||
            (v = (0, s.Z)([
              "\n    grid-template-columns: auto auto;\n    grid-gap: 4px;\n    align-items: center;\n    cursor: default;\n\t.icon {\n\t\twidth: 24px;\n\t\t@media (max-width: 414px) {\n        \twidth: 20px;\n    \t}\n    \t@media (max-width: 300px) {\n        \twidth: 16px;\n    \t}\n\t}\n",
            ]))
        ),
        B = d.ZP.div(
          b ||
            (b = (0, s.Z)([
              "\n    font-family: Poppins;\n    font-size: 14px;\n\t@media (max-width: 414px) {\n        font-size: 12px;\n    }\n    @media (max-width: 300px) {\n        font-size: 10px;\n    }\n    font-weight: 600;\n\tcursor: pointer;\n\t@media (max-width: 1280px) {\n        display: none;\n    }\n",
            ]))
        ),
        E = d.ZP.div(k || (k = (0, s.Z)([""]))),
        L = d.ZP.div(
          j ||
            (j = (0, s.Z)([
              "\n    width: 24px;\n\t@media (max-width: 414px) {\n\t\twidth: 20px;\n\t}\n    grid-gap: 1.4px;\n    height: 18px;\n\t@media (max-width: 414px) {\n\t\theight: 16px;\n\t}\n    cursor: pointer;\n    overflow: hidden;\n    align-items: center;\n    span {\n        width: 100%;\n        height: 2.5px;\n\t\t@media (max-width: 414px) {\n\t\t\theight: 2px;\n\t\t}\n        /* background-color: #15023a; */\n\t\tbackground-color: #00c4cc;\n        transform-origin: right;\n        transition: all 1.5s ease;\n        border-radius: 256px;\n    }\n    &.active {\n        height: 32px; \n        grid-gap: 1px; \n        span { \n            &:first-child { \n                /* background-color: #fff;  */\n                transform: rotate(-45deg);\n            } \n            &:nth-child(2) {\n                display: none;\n            } \n            &:last-child {\n                /* background-color: #fff;  */\n                transform: rotate(45deg);\n            }\n        }\n    }\n",
            ]))
        ),
        Y = d.ZP.div(
          Z ||
            (Z = (0, s.Z)([
              "\n    width: 100vw;\n    height: 70px;\n    position: fixed; \n    top: 0;\n    z-index: 2;\n    transform: width 0s, height 0s;\n    transition: all 0.25s ease-in-out;\n\tbackground: ",
              ";\n\tcolor: ",
              ";\n    @media (max-width: 540px) {\n        height: 56px;\n    }\n",
            ])),
          function (n) {
            return n.isDark
              ? "rgba(2, 12, 23,0.5)"
              : "rgba(255, 255, 255, 0.1)";
          },
          function (n) {
            return n.isDark ? "#5cb6f9" : "#15023a";
          }
        ),
        q = (0, c.memo)(G);
    },
    6002: function (n, t, i) {
      var a = i(4836);
      t.Z = void 0;
      var e = a(i(5649)),
        o = i(184),
        r = (0, e.default)(
          (0, o.jsx)("path", {
            d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
          }),
          "Call"
        );
      t.Z = r;
    },
    3518: function (n, t, i) {
      var a = i(4836);
      t.Z = void 0;
      var e = a(i(5649)),
        o = i(184),
        r = (0, e.default)(
          (0, o.jsx)("path", {
            d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z",
          }),
          "Download"
        );
      t.Z = r;
    },
    4281: function (n, t, i) {
      var a = i(4836);
      t.Z = void 0;
      var e = a(i(5649)),
        o = i(184),
        r = (0, e.default)(
          (0, o.jsx)("path", {
            d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
          }),
          "Email"
        );
      t.Z = r;
    },
  },
]);
//# sourceMappingURL=170.98d2f081.chunk.js.map
