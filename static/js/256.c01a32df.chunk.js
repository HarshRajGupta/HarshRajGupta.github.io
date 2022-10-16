"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [256],
  {
    7359: function (n, i, e) {
      e.r(i);
      var t,
        a = e(168),
        r = e(2791),
        o = e(5172),
        s = e(8789),
        d = e(184);
      function m(n) {
        var i = n.link,
          e = n.isDark;
        return (0, d.jsx)(h, {
          href: i,
          isDark: e,
          children: (0, d.jsx)(o.Z, {
            sx: {
              width: 64,
              height: 64,
              animation: "BottomUpDown 1.5s 0s infinite",
            },
          }),
        });
      }
      var h = s.ZP.a(
        t ||
          (t = (0, a.Z)([
            "\n  align-items: center;\n  position: absolute;\n  height: 64px;\n  bottom: 0px;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  @keyframes BottomUpDown {\n    0% {\n      bottom: 0;\n    }\n    50% {\n      bottom: 20px;\n    }\n    100% {\n      bottom: 0;\n    }\n  }\n  margin: 0 calc(50% - 32px);\n  color: ",
            ";\n  z-index: 10;\n",
          ])),
        function (n) {
          return n.isDark ? "#fff" : "#15023a";
        }
      );
      i.default = (0, r.memo)(m);
    },
    1256: function (n, i, e) {
      e.r(i);
      var t,
        a,
        r,
        o,
        s,
        d,
        m,
        h,
        x,
        c = e(168),
        p = e(2791),
        l = e(8789),
        u = e(6165),
        g = e.n(u),
        f = e(7359),
        w = e(7686),
        b = e.n(w),
        k = e(4075),
        v = e.n(k),
        j = e(184);
      function Z(n) {
        var i = n.isDark,
          e = n.all;
        return (0, j.jsxs)(z, {
          id: "Home",
          children: [
            (0, j.jsx)(D, {
              children: (0, j.jsx)(y, {
                children: (0, j.jsx)(b(), {
                  ssrFadeout: !0,
                  children: (0, j.jsx)(P, {
                    src: "https://user-images.githubusercontent.com/85221003/156927272-0c54db85-436c-4e95-b0b9-9959978a1f5d.gif",
                  }),
                }),
              }),
            }),
            (0, j.jsx)(C, {
              children: (0, j.jsx)(v(), {
                right: !0,
                big: !0,
                children: (0, j.jsxs)(H, {
                  isDark: i,
                  children: [
                    (0, j.jsx)(R, { isDark: i, children: "Hi There, I'm" }),
                    (0, j.jsx)(F, { isDark: i, children: "Harsh Raj Gupta" }),
                    (0, j.jsx)(G, {
                      isDark: i,
                      children: (0, j.jsx)("span", {
                        children: (0, j.jsx)(g(), {
                          options: {
                            strings: [
                              "Competitive Programmer",
                              "MERN Stack Developer",
                              "SHI 2022 Finalist",
                              "ICPC 21-22 Regionalist",
                              "Speacialist @CF",
                            ],
                            autoStart: !0,
                            loop: !0,
                            pauseFor: 2e3,
                            cursorClassName: "blinkingCursor",
                          },
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            e && (0, j.jsx)(f.default, { link: "#About-me", isDark: i }),
          ],
        });
      }
      var z = l.ZP.main(
          t ||
            (t = (0, c.Z)([
              "\n    width: 100%;\n    height: calc(100vh - 70px);\n    @media (max-width: 540px) {\n\t\theight: calc(100vh - 56px);\n    }\n    grid-template-columns: auto auto;\n    position: relative;\n    justify-content: center;\n    @media (max-width: 984px) {\n        grid-template-columns: auto\n    }\n    overflow: hidden;\n    /* background: rgba(255, 255, 255, 0.1); */\n    z-index: 1;\n    padding: 0 12px;\n",
            ]))
        ),
        D = l.ZP.div(
          a ||
            (a = (0, c.Z)([
              "\n    display: flex;\n    overflow: hidden;\n    width: 100%;\n    @media (max-width: 1280px) and (min-width: 984px) {\n        align-items: center;\n    }\n",
            ]))
        ),
        y = l.ZP.div(
          r ||
            (r = (0, c.Z)([
              "\n    height: 120vh;\n    background-color: #82c5f8;\n    background-size: contain;\n    border-radius: 50%;\n    align-items: center;\n    @media (max-width: 1720px) {\n        height: 110vh;\n    }\n    @media (max-width: 1396px) {\n        height: 100%;\n    }\n    @media (max-width: 1280px) {\n        height: 96%;\n    }\n    position: relative;\n    align-items: center;\n    overflow: hidden;\n",
            ]))
        ),
        P = l.ZP.img(
          o ||
            (o = (0, c.Z)([
              "\n    /* height: calc(100vh - 70px); */\n    height: auto;\n    width: 100%;\n    object-fit: cover;\n    @media (max-width: 1280px) {\n        width: 100vw;\n    }\n    transform: scaleX(-1);\n    @media (max-width: 1640px) {\n        margin-left: -2%;\n    }\n    @media (max-width: 1600px) {\n        margin-left: -5%;\n    }\n    @media (max-width: 1560px) {\n        margin-left: -10%;\n    }\n    @media (max-width: 984px) {\n        margin-left: 0;\n    }\n",
            ]))
        ),
        C = l.ZP.div(
          s ||
            (s = (0, c.Z)([
              "\n    padding: 50px;\n    * {\n        max-width: 100%;\n    }\n    justify-content: space-around;\n    @media (min-width: 1280px) {\n        align-items: center;\n    }\n    @media (max-width: 1280px) {\n        width: 100%;\n    }\n    align-items: center;\n    overflow: visible;\n",
            ]))
        ),
        H = l.ZP.ul(
          d ||
            (d = (0, c.Z)([
              "\n    height: max-content;\n    color: #00c4cc;\n    color: ",
              ";\n    /* background: rgba(255, 255, 255, 0.5); */\n    /* background: ",
              "; */\n    /* background: rgba(2, 12, 23,0.1); */\n    user-select: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    @media (max-width: 1280px) {\n        padding: 0rem;\n        text-align: center;\n    }\n    cursor: none;\n    * {\n        text-shadow: 3px 4px 7px ",
              ";\n        overflow: visible;\n    }\n",
            ])),
          function (n) {
            return n.isDark ? "#00c4cc" : "rgba(2, 12, 23,0.9)";
          },
          function (n) {
            return n.isDark
              ? "rgba(2, 12, 23,0.1)"
              : "rgba(255, 255, 255, 0.2)";
          },
          function (n) {
            return n.isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(81,67,21,0.8)";
          }
        ),
        R = l.ZP.h1(
          m ||
            (m = (0, c.Z)([
              "\n    font-family: Montserrat;\n    font-size: 24px;\n    @media (max-width: 1280px) {\n        margin: 0 auto;\n    }\n    @media (max-width: 414px) {\n        font-size: 20px\n    }\n    @media (max-width: 300px) {\n        font-size: 16px\n    }\n",
            ]))
        ),
        F = l.ZP.h3(
          h ||
            (h = (0, c.Z)([
              "\n    font-family:  Poppins;\n    font-size: 64px;\n    margin: 10px 0;\n    font-weight: 500;\n    cursor: none;\n    width: 100%;\n    @media (max-width: 541px) {\n        font-size: 56px;\n    }\n    @media (max-width: 415px) {\n        font-size: 42px;\n    }\n    @media (max-width: 300px) {\n        font-size: 32px\n    }\n",
            ]))
        ),
        G = l.ZP.h2(
          x ||
            (x = (0, c.Z)([
              "\n    width: 360px;\n    font-size: 32px;\n    @media (max-width: 1280px) {\n        margin: 0 auto;\n    }\n    @media (max-width: 414px) {\n        font-size: 24px;\n        width: 269px;\n    }\n    @media (max-width: 300px) {\n        font-size: 18px;\n        width: 201px;\n    }\n    * {\n        display: inline;\n    }\n    span {\n        color: ",
              ';\n        &.blinkingCursor {\n            @keyframes typingCursor {\n                0% { opacity: 1 }\n                50% { opacity: 0 }\n                100% { opacity: 1 }\n            }\n            font-family: "Zen Kaku Gothic Antique";\n            font-size: 36px;\n            animation: typingCursor 1s 0ms infinite step-end;\n            color: orange;\n            font-weight: 400;\n        }\n    }\n',
            ])),
          function (n) {
            return n.isDark ? "inherit" : "crimson";
          }
        );
      i.default = (0, p.memo)(Z);
    },
  },
]);
//# sourceMappingURL=256.c01a32df.chunk.js.map
