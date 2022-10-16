"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [945],
  {
    6945: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return N;
          },
        });
      var o,
        r,
        i,
        a,
        s,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        m = t(168),
        x = t(4942),
        b = t(1413),
        v = t(885),
        w = t(2791),
        j = t(3),
        y = { _origin: "https://api.emailjs.com" },
        Z = function (n, e, t) {
          if (!n)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!e)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!t)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        },
        k = t(3144),
        P = t(5671),
        S = (0, k.Z)(function n(e) {
          (0, P.Z)(this, n),
            (this.status = e.status),
            (this.text = e.responseText);
        }),
        _ = function (n, e) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new Promise(function (o, r) {
            var i = new XMLHttpRequest();
            i.addEventListener("load", function (n) {
              var e = n.target,
                t = new S(e);
              200 === t.status || "OK" === t.text ? o(t) : r(t);
            }),
              i.addEventListener("error", function (n) {
                var e = n.target;
                r(new S(e));
              }),
              i.open("POST", y._origin + n, !0),
              Object.keys(t).forEach(function (n) {
                i.setRequestHeader(n, t[n]);
              }),
              i.send(e);
          });
        },
        z = function (n, e, t, o) {
          var r = o || y._userID,
            i = (function (n) {
              var e;
              if (
                !(e = "string" === typeof n ? document.querySelector(n) : n) ||
                "FORM" !== e.nodeName
              )
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
              return e;
            })(t);
          Z(r, n, e);
          var a = new FormData(i);
          return (
            a.append("lib_version", "3.7.0"),
            a.append("service_id", n),
            a.append("template_id", e),
            a.append("user_id", r),
            _("/api/v1.0/email/send-form", a)
          );
        },
        I = t(8789),
        E = t(485),
        M = t(4075),
        C = t.n(M),
        R = t(184),
        T = (0, w.lazy)(function () {
          return t.e(449).then(t.bind(t, 7318));
        });
      function q(n) {
        var e = n.isDark,
          t = (0, E.VY)().show,
          o = (0, w.useRef)(),
          r = (0, w.useState)(localStorage.getItem("M$Ppl3R#3p&Bz994C93t")),
          i = (0, v.Z)(r, 2),
          a = i[0],
          s = i[1];
        null === a && s("send");
        var l = (0, w.useState)({
            user_email: localStorage.getItem("VoTshS53jhSV22E^SRo@"),
            message: localStorage.getItem("I#S&hsG02P8Q0i^70!9e"),
          }),
          c = (0, v.Z)(l, 2),
          d = c[0],
          u = c[1];
        null === d.user_email && null === d.message
          ? u({ user_email: "", message: "" })
          : null === d.user_email
          ? u((0, b.Z)((0, b.Z)({}, d), {}, { user_email: "" }))
          : null === d.message &&
            u((0, b.Z)((0, b.Z)({}, d), {}, { message: "" }));
        var p = function (n) {
          var e = n.target,
            t = e.name,
            o = e.value;
          u((0, b.Z)((0, b.Z)({}, d), {}, (0, x.Z)({}, t, o))),
            "user_email" === t
              ? localStorage.setItem("VoTshS53jhSV22E^SRo@", o)
              : localStorage.setItem("I#S&hsG02P8Q0i^70!9e", o);
        };
        return (0, R.jsxs)(V, {
          isDark: e,
          id: "Contact-me",
          children: [
            (0, R.jsx)(C(), {
              left: !0,
              big: !0,
              children: (0, R.jsx)(L, { children: (0, R.jsx)(T, {}) }),
            }),
            (0, R.jsx)(C(), {
              right: !0,
              big: !0,
              children: (0, R.jsxs)(O, {
                children: [
                  (0, R.jsx)(F, { children: "Contact" }),
                  (0, R.jsxs)(D, {
                    ref: o,
                    onSubmit: function (n) {
                      n.preventDefault(),
                        "send" === a
                          ? (s("sending"),
                            localStorage.setItem(
                              "M$Ppl3R#3p&Bz994C93t",
                              "sending"
                            ),
                            z(
                              "service_hvc5w18",
                              "template_kl9awzw",
                              o.current,
                              "_s8CAk2YdEw7gn7U3"
                            ).then(
                              function (n) {
                                t("Mail sent successfully!!!"),
                                  s("sent"),
                                  localStorage.setItem(
                                    "M$Ppl3R#3p&Bz994C93t",
                                    "sent"
                                  ),
                                  localStorage.removeItem(
                                    "VoTshS53jhSV22E^SRo@"
                                  ),
                                  localStorage.removeItem(
                                    "I#S&hsG02P8Q0i^70!9e"
                                  ),
                                  console.log(n);
                              },
                              function (n) {
                                null === n.text || "" === n.text
                                  ? t("Failed to send email")
                                  : t(n.text),
                                  s("try again"),
                                  localStorage.removeItem(
                                    "M$Ppl3R#3p&Bz994C93t"
                                  ),
                                  console.log(n.text);
                              }
                            ),
                            z(
                              "service_hvc5w18",
                              "template_fdnv60h",
                              o.current,
                              "_s8CAk2YdEw7gn7U3"
                            ).then(
                              function (n) {
                                console.log(n);
                              },
                              function (n) {
                                console.log(n.text);
                              }
                            ))
                          : "try again" === a && s("send");
                    },
                    children: [
                      ("send" === a &&
                        (0, R.jsxs)(R.Fragment, {
                          children: [
                            (0, R.jsxs)(B, {
                              children: [
                                (0, R.jsx)("span", {}),
                                (0, R.jsx)(G, {
                                  type: "email",
                                  name: "user_email",
                                  value: d.user_email,
                                  onChange: p,
                                  placeholder: "Enter your Email Address",
                                  required: !0,
                                }),
                                (0, R.jsx)("span", {}),
                              ],
                            }),
                            (0, R.jsxs)(A, {
                              children: [
                                (0, R.jsx)("span", {}),
                                (0, R.jsx)(K, {
                                  children: (0, R.jsx)(H, {
                                    name: "message",
                                    required: !0,
                                    value: d.message,
                                    onChange: p,
                                  }),
                                }),
                                (0, R.jsx)("span", {}),
                              ],
                            }),
                          ],
                        })) ||
                        ("sent" === a &&
                          (0, R.jsx)(Y, {
                            src: "https://user-images.githubusercontent.com/85221003/190645104-c36be8f1-3721-4155-897d-2715be9a3972.png",
                          })) ||
                        ("sending" === a &&
                          (0, R.jsx)(j.default, { text: "sending" })) ||
                        ("try again" === a &&
                          (0, R.jsx)(Y, {
                            src: "https://user-images.githubusercontent.com/85221003/190645213-d4c57ad1-c85b-4516-8cac-ea3b6fbb544e.png",
                          })),
                      (0, R.jsx)($, {
                        children: (0, R.jsxs)(Q, {
                          id: "submit",
                          className:
                            "sending" === a
                              ? "clicked"
                              : "try again" === a
                              ? "error"
                              : "sent" === a
                              ? "sent"
                              : "",
                          children: [
                            a,
                            (0, R.jsx)("svg", {
                              version: "1.1",
                              x: "0px",
                              y: "0px",
                              viewBox: "0 0 512 512",
                              enableBackground: "new 0 0 512 512",
                              children: (0, R.jsx)("path", {
                                id: "paper-plane-icon",
                                d: "M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z\nM202.992,332.528v124.517l58.738-67.927L202.992,332.528z",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var V = I.ZP.div(
          o ||
            (o = (0, m.Z)([
              "\n    width: 100%;\n    height: calc(100vh - 70px);\n    @media (max-width: 540px) {\n\t\theight: calc(100vh - 56px);\n    }\n\tjustify-content: space-around;\n\tz-index: 1;\n\tgrid-template-columns: auto auto;\n    @media (max-width: 1023px) {\n        grid-template-columns: 1fr;\n    }\n\tposition: relative;\n    * {\n        overflow: visible;\n    }\n    background: ",
              ";\n    /* background: rgba(2, 12, 23, 0.5); */\n",
            ])),
          function (n) {
            return n.isDark
              ? "rgba(2, 12, 23,0.5)"
              : "rgba(255, 255, 255, 0.5)";
          }
        ),
        L = I.ZP.div(
          r ||
            (r = (0, m.Z)([
              "\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n",
            ]))
        ),
        O = I.ZP.div(
          i ||
            (i = (0, m.Z)([
              "\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n",
            ]))
        ),
        D = I.ZP.form(
          a ||
            (a = (0, m.Z)([
              "\n    width: 100%;\n    height: 75vh;\n    align-items: center;\n",
            ]))
        ),
        F = I.ZP.h1(
          s ||
            (s = (0, m.Z)([
              "\n    font-size: 42px;\n    font-family: 'Pacifico', cursive;\n    font-weight: 500;\n    display: block;\n    color: #00c4cc;\n    &::after {\n\t\tfont-family: Poppins;\n        content: \" Me\";\n        font-weight: 600;\n        color: #5cb6f9\n    }\n    @media (max-width: 540px) {\n        font-size: 32px;\n    }\n    margin: 0 auto;\n",
            ]))
        ),
        B = I.ZP.div(
          l ||
            (l = (0, m.Z)([
              "\n    background: rgba(255, 255, 255, 1);\n    border-radius: 10px;\n    height: max-content;\n    overflow: hidden !important;\n    span {\n        width: 100%;\n        height: 2px;\n        background: linear-gradient(to right, #185a9d, #00c4cc);\n    }\n",
            ]))
        ),
        G = I.ZP.input(
          c ||
            (c = (0, m.Z)([
              '\n    margin: 12px 16px;\n    font-family: "Zen Kaku Gothic Antique";\n    font-size: 16px;\n    font-weight: 600;\n    width: 360px;\n    /* text-transform: lowercase; */\n    @media (max-width: 1023px) {\n        width: 80vw;\n    }\n    background: transparent;\n    outline: none;\n    border: none;\n    color: #15023a;\n    /* color: rgba(2, 12, 23,0.8); */\n    cursor: pointer;\n    height: max-content;\n',
            ]))
        ),
        A = I.ZP.div(
          d ||
            (d = (0, m.Z)([
              "\n    background: rgba(255, 255, 255, 1);\n    border-radius: 6px;\n    height: max-content;\n    overflow: hidden !important;\n    span {\n        width: 100%;\n        height: 2px;\n        background: linear-gradient(to right, #5cb6f9, #00c4cc, #185a9d);\n    }\n",
            ]))
        ),
        H = I.ZP.textarea(
          u ||
            (u = (0, m.Z)([
              '\n    background: rgba(255, 255, 255, 0.75);\n    outline: none;\n    border: none;\n    margin: 12px 16px;\n    color: #15023a;\n    font-family: "Zen Kaku Gothic Antique";\n    font-size: 16px;\n    font-weight: 600;\n    width: 360px;\n    @media (max-width: 1023px) {\n        width: 80vw;\n    }\n    height: 240px;\n    resize: none;\n    overflow: scroll;\n',
            ]))
        ),
        $ = I.ZP.div(p || (p = (0, m.Z)(["\n    margin: 0 auto;\n"]))),
        K = I.ZP.div(
          h ||
            (h = (0, m.Z)([
              "\n    background: url('https://user-images.githubusercontent.com/85221003/190644292-f8584039-a1df-455d-8905-e1c5eb6b04e7.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n",
            ]))
        ),
        Q = I.ZP.button(
          f ||
            (f = (0, m.Z)([
              "\n    font-size: 24px;\n    font-family: 'Pacifico';\n    letter-spacing: 1.2px;\n    text-transform: capitalize;\n    overflow: visible;\n    border-radius: 50px;\n    position: relative;\n    padding-right: 30px;\n    background-color: #ECFBFF;\n    border: 2px solid #A6E0EE;\n    color: #5cb6f9;\n    display: block;\n    margin: auto;\n    height: 54px;\n    min-width: 180px;\n    cursor: pointer;\n    \n    &:hover {\n      background-color: #5cb6f9;\n      color: #fff;\n      \n      svg {\n        transform: rotate(10deg);\n        transition: transform .15s;\n        path {\n            fill: #fff;\n        }\n      }\n    }\n    \n    svg {\n      position: absolute;\n      top: 13px;\n      right: 25px;\n      height: 30px;\n      width: auto;\n      transition: transform .15s;\n      \n      path {\n        fill: #5cb6f9;\n      }\n    }\n    &.sent {\n        background-color: #00b3e7;\n        color: #fff;\n        min-width: 160px;\n        cursor: none;\n        padding-right: 6px;\n        svg {\n            display: none;\n        }\n    }\n    &.error {\n        min-width: 220px;\n        height: 60px;\n        background-color: #e21b1b;\n        color: #fff;\n        svg {\n            path {\n                fill: #fff;\n            }\n        }\n    }\n    &.clicked {\n      background-color: #00c4cc;\n      border: 2px solid #cff5b3;\n      color: #fff;\n      padding-right: 6px;\n      animation: bounce-in .3s;\n      cursor: none;\n      min-width: 220px;\n      height: 60px;\n      &::after {\n        content: '...'\n      }\n  \n      svg {\n        animation: flyaway 1.3s linear;\n        top: -80px;\n        right: -1000px;\n        \n        path {\n          fill: #00c4cc;\n        }\n      }\n    }\n",
            ]))
        ),
        Y = I.ZP.img(g || (g = (0, m.Z)(["\n    width: 320px;\n"]))),
        N = (0, w.memo)(q);
    },
    4075: function (n, e, t) {
      function o(n, e) {
        var t = {};
        for (var o in n)
          e.indexOf(o) >= 0 ||
            (Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]));
        return t;
      }
      function r(n, e) {
        var t = e.distance,
          o = e.left,
          r = e.right,
          i = e.up,
          a = e.down,
          s = e.top,
          c = e.bottom,
          d = e.big,
          u = e.mirror,
          h = e.opposite,
          f =
            (t ? t.toString() : 0) +
            ((o ? 1 : 0) |
              (r ? 2 : 0) |
              (s || a ? 4 : 0) |
              (c || i ? 8 : 0) |
              (u ? 16 : 0) |
              (h ? 32 : 0) |
              (n ? 64 : 0) |
              (d ? 128 : 0));
        if (p.hasOwnProperty(f)) return p[f];
        var g = o || r || i || a || s || c,
          m = void 0,
          x = void 0;
        if (g) {
          if (!u != !(n && h)) {
            var b = [r, o, c, s, a, i];
            (o = b[0]),
              (r = b[1]),
              (s = b[2]),
              (c = b[3]),
              (i = b[4]),
              (a = b[5]);
          }
          var v = t || (d ? "2000px" : "100%");
          (m = o ? "-" + v : r ? v : "0"),
            (x = a || s ? "-" + v : i || c ? v : "0");
        }
        return (
          (p[f] = (0, l.animation)(
            (n ? "to" : "from") +
              " {opacity: 0;" +
              (g ? " transform: translate3d(" + m + ", " + x + ", 0);" : "") +
              "}\n     " +
              (n ? "from" : "to") +
              " {opacity: 1;transform: none;} "
          )),
          p[f]
        );
      }
      function i() {
        var n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l.defaults,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = n.children,
          i = (n.out, n.forever),
          a = n.timeout,
          s = n.duration,
          c = void 0 === s ? l.defaults.duration : s,
          u = n.delay,
          p = void 0 === u ? l.defaults.delay : u,
          h = n.count,
          f = void 0 === h ? l.defaults.count : h,
          g = o(n, [
            "children",
            "out",
            "forever",
            "timeout",
            "duration",
            "delay",
            "count",
          ]),
          m = {
            make: r,
            duration: void 0 === a ? c : a,
            delay: p,
            forever: i,
            count: f,
            style: { animationFillMode: "both" },
            reverse: g.left,
          };
        return e ? (0, d.default)(g, m, m, t) : m;
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a,
        s = t(2007),
        l = t(4006),
        c = t(6208),
        d = (a = c) && a.__esModule ? a : { default: a },
        u = {
          out: s.bool,
          left: s.bool,
          right: s.bool,
          top: s.bool,
          bottom: s.bool,
          big: s.bool,
          mirror: s.bool,
          opposite: s.bool,
          duration: s.number,
          timeout: s.number,
          distance: s.string,
          delay: s.number,
          count: s.number,
          forever: s.bool,
        },
        p = {};
      (i.propTypes = u), (e.default = i), (n.exports = e.default);
    },
  },
]);
//# sourceMappingURL=945.4885b405.chunk.js.map
