"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [845],
  {
    3845: function (n, t, i) {
      i.r(t);
      var e,
        a,
        r,
        o,
        s = i(168),
        c = i(8789),
        l = i(2791),
        d = i(1087),
        m = i(7689),
        u = i(184),
        p = (0, l.lazy)(function () {
          return Promise.all([i.e(208), i.e(806)]).then(i.bind(i, 1806));
        }),
        f = (0, l.lazy)(function () {
          return Promise.all([i.e(482), i.e(359)]).then(i.bind(i, 7359));
        }),
        h = (0, l.lazy)(function () {
          return Promise.resolve().then(i.bind(i, 3));
        }),
        x = [
          { id: "featured", title: "Featured" },
          { id: "achievements", title: "Achievements" },
          { id: "certifications", title: "Certifications" },
          { id: "skills", title: "Skills" },
          { id: "languages", title: "Languages" },
          { id: "project", title: "Projects" },
        ];
      function g(n) {
        var t = n.isDark,
          i = n.all;
        return (0, u.jsx)(l.Suspense, {
          fallback: (0, u.jsx)(h, { text: "Loading" }),
          children: (0, u.jsxs)(b, {
            id: "Portfolio",
            children: [
              (0, u.jsx)(k, { children: "Portfolio" }),
              (0, u.jsx)(j, {
                isDark: t,
                children: x.map(function (n) {
                  return (0,
                  u.jsx)(d.OL, { to: "".concat(n.id), activeclassname: "active", children: (0, u.jsx)(w, { isDark: t, children: n.title }) }, n.id);
                }),
              }),
              (0, u.jsxs)(m.Z5, {
                children: [
                  x.map(function (n) {
                    return (0,
                    u.jsx)(m.AW, { path: "/".concat(n.id), exact: !0, element: (0, u.jsx)(p, { selector: n.id, isDark: t }) }, n.id);
                  }),
                  (0, u.jsx)(m.AW, {
                    path: "/*",
                    element: (0, u.jsx)(p, { selector: "featured", isDark: t }),
                  }),
                ],
              }),
              i && (0, u.jsx)(f, { link: "#Projects", isDark: t }),
            ],
          }),
        });
      }
      var b = c.ZP.main(
          e ||
            (e = (0, s.Z)([
              "\n    width: 100%;\n    height: calc(100vh - 70px);\n    @media (max-width: 540px) {\n\t\theight: calc(100vh - 56px);\n    }\n    display: block;\n    z-index: 1;\n    * {\n        overflow: hidden !important;\n    }\n",
            ]))
        ),
        k = c.ZP.h1(
          a ||
            (a = (0, s.Z)([
              "\n    font-size: 64px;\n    font-family:  Poppins;\n    margin: 0 auto;\n    margin-bottom: 16px;\n    font-weight: 500;\n    display: block;\n    /* color: crimson; */\n    color: #00c4cc;\n    &::before {\n        content: \"My \";\n        font-family: 'Pacifico', cursive;\n        /* color: #15023a; */\n        color: #5cb6f9;\n        font-weight: 400;\n    }\n    @media (max-width: 540px) {\n        font-size: 32px;\n    }\n",
            ]))
        ),
        j = c.ZP.ul(
          r ||
            (r = (0, s.Z)([
              "\n    grid-template-columns: auto auto auto auto auto auto;\n    margin: 0 auto;\n    margin-bottom: 18px;\n    width: 69vw;\n    justify-content: space-around;\n    align-items: center;\n    @media (max-width: 768px) {\n        width: 85vw;\n    }\n    @media (max-width: 540px) {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    /* background: rgba(255, 255, 255, 0.2); */\n    background: ",
              ";\n    .active li{\n        color: #00c4cc !important;\n\t\ttransform: scale(1) !important;\n        background-color: ",
              ";\n        transition: all 250ms 250ms ease !important;\n        /* transform: scale(1); */\n    }\n",
            ])),
          function (n) {
            return n.isDark
              ? "rgba(2, 12, 23,0.1)"
              : "rgba(255, 255, 255, 0.1)";
          },
          function (n) {
            return n.isDark
              ? "rgba(255, 255, 255, 0.9) !important"
              : "rgba(2, 12, 23, 0.9) !important";
          }
        ),
        w = c.ZP.li(
          o ||
            (o = (0, s.Z)([
              "\n    font-size: 16px;\n    @media (max-width: 540px) {\n        font-size: 14px;\n    }\n    @media (max-width: 300px) {\n        font-size: 12px;\n    }\n    padding: 7px;\n    border-radius: 12px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n    height: max-content;\n    transform: scale(0.9);\n    margin: 0 auto;\n",
            ]))
        );
      t.default = (0, l.memo)(g);
    },
  },
]);
//# sourceMappingURL=845.0bb6704b.chunk.js.map
