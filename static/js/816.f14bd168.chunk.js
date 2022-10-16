"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [816, 359],
  {
    7359: function (t, n, e) {
      e.r(n);
      var i,
        o = e(168),
        a = e(2791),
        r = e(5172),
        l = e(8789),
        s = e(184);
      function c(t) {
        var n = t.link,
          e = t.isDark;
        return (0, s.jsx)(d, {
          href: n,
          isDark: e,
          children: (0, s.jsx)(r.Z, {
            sx: {
              width: 64,
              height: 64,
              animation: "BottomUpDown 1.5s 0s infinite",
            },
          }),
        });
      }
      var d = l.ZP.a(
        i ||
          (i = (0, o.Z)([
            "\n  align-items: center;\n  position: absolute;\n  height: 64px;\n  bottom: 0px;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  @keyframes BottomUpDown {\n    0% {\n      bottom: 0;\n    }\n    50% {\n      bottom: 20px;\n    }\n    100% {\n      bottom: 0;\n    }\n  }\n  margin: 0 calc(50% - 32px);\n  color: ",
            ";\n  z-index: 10;\n",
          ])),
        function (t) {
          return t.isDark ? "#fff" : "#15023a";
        }
      );
      n.default = (0, a.memo)(c);
    },
    2816: function (t, n, e) {
      e.r(n);
      var i,
        o,
        a,
        r,
        l,
        s = e(168),
        c = e(8789),
        d = e(7359),
        p = e(2791),
        u = e(7686),
        f = e.n(u),
        m = e(184),
        h = [
          "Amenable Software Engineer gifted at translating client requirements into technical development plans.",
          "Communicates productively with both technical and non-technical personnel and clients.",
          "A proactive learner dedicated to improving skills through hands-on learning and development work.",
          "Friendly provider of deep programming knowledge and invaluable final products.",
          "Well-organized and collaborative team player with strong communication and analytical abilities.",
          "Proficient in mobile and desktop development environments.",
          "Adept at using ReactJS/Redux, ExpressJs/NodeJs and other programming languages to produce clean code.",
          "Detail-oriented, organized and meticulous leader.",
          "Enthusiastic team player ready to contribute to company success.",
          "Works at fast pace to meet tight deadlines.",
        ];
      function b(t) {
        var n = t.isDark,
          e = t.all;
        return (0, m.jsxs)(x, {
          id: "About-me",
          children: [
            (0, m.jsx)(f(), {
              children: (0, m.jsxs)(v, {
                isDark: n,
                children: [
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)(g, { children: " Me" }),
                      (0, m.jsx)(w, {
                        children: (0, m.jsx)("p", {
                          children: h.map(function (t) {
                            return (0,
                            m.jsxs)(m.Fragment, { children: [t, (0, m.jsx)("br", {})] });
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsx)(k, {
                    isDark: n,
                    href: "#Home",
                    children: "Harsh Raj Gupta",
                  }),
                ],
              }),
            }),
            e && (0, m.jsx)(d.default, { link: "#Portfolio", isDark: n }),
          ],
        });
      }
      var x = c.ZP.div(
          i ||
            (i = (0, s.Z)([
              "\n    width: 100%;\n    height: calc(100vh - 70px);\n\t@media (max-width: 540px) {\n\t\theight: calc(100vh - 56px);\n    }\n\tjustify-content: center;\n\tz-index: 1;\n\tposition: relative;\n",
            ]))
        ),
        g = c.ZP.h1(
          o ||
            (o = (0, s.Z)([
              "\n\tcolor: #00c4cc;\n    font-size: 64px;\n    font-family:  Poppins;\n    margin: 0 auto;\n    margin-bottom: 16px;\n    font-weight: 500;\n    display: block;\n    font-family: 'Pacifico', cursive;\n    &::before {\n\t\tfont-family: Poppins;\n        content: \"About\";\n        font-weight: 600;\n    }\n    @media (max-width: 540px) {\n        font-size: 32px;\n    }\n",
            ]))
        ),
        v = c.ZP.div(
          a ||
            (a = (0, s.Z)([
              "\n\tmin-height: calc(100vh - 70px);\n\t@media (max-width: 540px) {\n\t\tmin-height: calc(100vh - 56px);\n    }\n\twidth: max-content;\n\t/* background: rgba(255, 255, 255, 0.69); */\n\tbackground: ",
              ";\n\talign-items: top;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tpadding-bottom: 5rem;\n\toverflow-y: scroll;\n\t/* justify-content: center; */\n\tposition: relative;\n",
            ])),
          function (t) {
            return t.isDark
              ? "rgba(2, 12, 23,0.5)"
              : "rgba(255, 255, 255, 0.5)";
          }
        ),
        w = c.ZP.div(
          r ||
            (r = (0, s.Z)(
              [
                "\n\tp {\n\t\tdisplay: block;\n\t\twidth: 76vw;\n\t\t@media (max-width: 540px) {\n\t\t\twidth: 80vw;\n    \t}\n\t\tuser-select: none;\n    \t-webkit-user-select: none;\n    \t-khtml-user-select: none;\n    \t-moz-user-select: none;\n    \t-ms-user-select: none;\n\t\t/* height: 60vh; */\n\t\t&::before, &::after {\n\t\t\tcontent: '\"';\n\t\t\tfont-style: none;\n\t\t}\n\t\t/* background: -webkit-linear-gradient(#15023a, #185a9d); */\n\t\t/* background: -webkit-linear-gradient(#4bc0c8, #185a9d); */\n\t\tbackground: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\tfont-family: 'Ubuntu Mono', monospace;\n\t\tfont-size: 20px;\n\t\tline-height: 36px;\n\t\t@media (max-width: 414px) {\n        \tfont-size: 17px;\n\t\t\tline-height: 32px;\n    \t}\n   \t\t@media (max-width: 300px) {\n        \tfont-size: 14px;\n\t\t\tline-height: 28px;\n    \t}\n\t\tfont-weight: 600;\n\t\ttext-align: center;\n\t\tfont-style: italic;\n\t\toverflow-y: visible;\n\t\t/* padding: 32px; */\n\t}\n",
              ],
              [
                "\n\tp {\n\t\tdisplay: block;\n\t\twidth: 76vw;\n\t\t@media (max-width: 540px) {\n\t\t\twidth: 80vw;\n    \t}\n\t\tuser-select: none;\n    \t-webkit-user-select: none;\n    \t-khtml-user-select: none;\n    \t-moz-user-select: none;\n    \t-ms-user-select: none;\n\t\t/* height: 60vh; */\n\t\t&::before, &::after {\n\t\t\tcontent: '\\\"';\n\t\t\tfont-style: none;\n\t\t}\n\t\t/* background: -webkit-linear-gradient(#15023a, #185a9d); */\n\t\t/* background: -webkit-linear-gradient(#4bc0c8, #185a9d); */\n\t\tbackground: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\tfont-family: 'Ubuntu Mono', monospace;\n\t\tfont-size: 20px;\n\t\tline-height: 36px;\n\t\t@media (max-width: 414px) {\n        \tfont-size: 17px;\n\t\t\tline-height: 32px;\n    \t}\n   \t\t@media (max-width: 300px) {\n        \tfont-size: 14px;\n\t\t\tline-height: 28px;\n    \t}\n\t\tfont-weight: 600;\n\t\ttext-align: center;\n\t\tfont-style: italic;\n\t\toverflow-y: visible;\n\t\t/* padding: 32px; */\n\t}\n",
              ]
            ))
        ),
        k = c.ZP.a(
          l ||
            (l = (0, s.Z)([
              "\n\tdisplay: flex;\n\tjustify-content: end;\n\tmargin-top: 1.5rem;\n\twidth: 100%;\n\tfont-family: 'Sign';\n\tfont-size: 48px;\n\t@media (max-width: 540px) {\n\t\tfont-size: 24px;\n    }\n\tcursor: pointer;\n\tfont-weight: bold;\n\tbackground: -webkit-linear-gradient(#185a9d, #15023a);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n\t&::before {\n\t\tcontent: '-'\n\t}\n\ttext-shadow: 3px 4px 7px ",
              ";\n\toverflow: visible;\n",
            ])),
          function (t) {
            return t.isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(81,67,21,0.8)";
          }
        );
      n.default = (0, p.memo)(b);
    },
    5172: function (t, n, e) {
      var i = e(4836);
      n.Z = void 0;
      var o = i(e(5649)),
        a = e(184),
        r = (0, o.default)(
          (0, a.jsx)("path", {
            d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
          }),
          "KeyboardArrowDown"
        );
      n.Z = r;
    },
    7686: function (t, n, e) {
      function i(t, n) {
        var e = {};
        for (var i in t)
          n.indexOf(i) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]));
        return e;
      }
      function o(t, n) {
        var e = n.left,
          i = n.right,
          o = n.up,
          a = n.down,
          r = n.top,
          l = n.bottom,
          s = n.mirror,
          c = n.opposite,
          p =
            (e ? 1 : 0) |
            (i ? 2 : 0) |
            (r || a ? 4 : 0) |
            (l || o ? 8 : 0) |
            (s ? 16 : 0) |
            (c ? 32 : 0) |
            (t ? 64 : 0);
        if (u.hasOwnProperty(p)) return u[p];
        if (!s != !(t && c)) {
          var f = [i, e, l, r, a, o];
          (e = f[0]),
            (i = f[1]),
            (r = f[2]),
            (l = f[3]),
            (o = f[4]),
            (a = f[5]);
        }
        var m = e || i,
          h = r || l || o || a,
          b = void 0;
        return (
          m || h
            ? t
              ? (b =
                  "40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (m ? (e ? "" : "-") + "42px" : "0") +
                  ", " +
                  (h ? (a || r ? "-" : "") + "60px" : "0") +
                  ", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d(" +
                  (m ? (i ? "" : "-") + "2000px" : "0") +
                  ", " +
                  (h ? (o || l ? "" : "-") + "2000px" : "0") +
                  ", 0);\n          transform-origin: " +
                  (h ? "center bottom" : (e ? "left" : "right") + " center") +
                  ";\n        }")
              : (b =
                  "from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d(" +
                  (m ? (e ? "-" : "") + "1000px" : "0") +
                  ", " +
                  (h ? (a || r ? "-" : "") + "1000px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (m ? (i ? "-" : "") + "10px" : "0") +
                  ", " +
                  (h ? (o || l ? "-" : "") + "60px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }")
            : (b =
                (t ? "to" : "from") +
                " {opacity: 0; transform: scale3d(.1, .1, .1);} " +
                (t ? "from" : "to") +
                " { opacity: 1; transform: none;}"),
          (u[p] = (0, d.animation)(b)),
          u[p]
        );
      }
      function a() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : d.defaults,
          n = t.children,
          e = (t.out, t.forever),
          a = t.timeout,
          r = t.duration,
          l = void 0 === r ? d.defaults.duration : r,
          s = t.delay,
          p = void 0 === s ? d.defaults.delay : s,
          u = t.count,
          f = void 0 === u ? d.defaults.count : u,
          m = i(t, [
            "children",
            "out",
            "forever",
            "timeout",
            "duration",
            "delay",
            "count",
          ]),
          h = {
            make: o,
            duration: void 0 === a ? l : a,
            delay: p,
            forever: e,
            count: f,
            style: { animationFillMode: "both" },
            reverse: m.left,
          };
        return (0, c.default)(m, h, h, n);
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r,
        l = e(2007),
        s = e(6208),
        c = (r = s) && r.__esModule ? r : { default: r },
        d = e(4006),
        p = {
          out: l.bool,
          left: l.bool,
          right: l.bool,
          top: l.bool,
          bottom: l.bool,
          mirror: l.bool,
          opposite: l.bool,
          duration: l.number,
          timeout: l.number,
          delay: l.number,
          count: l.number,
          forever: l.bool,
        },
        u = {};
      (a.propTypes = p), (n.default = a), (t.exports = n.default);
    },
  },
]);
//# sourceMappingURL=816.f14bd168.chunk.js.map
