(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [110],
  {
    5172: function (t, e, n) {
      "use strict";
      var r = n(4836);
      e.Z = void 0;
      var o = r(n(5649)),
        i = n(184),
        a = (0, o.default)(
          (0, i.jsx)("path", {
            d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
          }),
          "KeyboardArrowDown"
        );
      e.Z = a;
    },
    4075: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function o(t, e) {
        var n = e.distance,
          r = e.left,
          o = e.right,
          i = e.up,
          a = e.down,
          u = e.top,
          c = e.bottom,
          p = e.big,
          f = e.mirror,
          d = e.opposite,
          v =
            (n ? n.toString() : 0) +
            ((r ? 1 : 0) |
              (o ? 2 : 0) |
              (u || a ? 4 : 0) |
              (c || i ? 8 : 0) |
              (f ? 16 : 0) |
              (d ? 32 : 0) |
              (t ? 64 : 0) |
              (p ? 128 : 0));
        if (l.hasOwnProperty(v)) return l[v];
        var h = r || o || i || a || u || c,
          y = void 0,
          b = void 0;
        if (h) {
          if (!f != !(t && d)) {
            var m = [o, r, c, u, a, i];
            (r = m[0]),
              (o = m[1]),
              (u = m[2]),
              (c = m[3]),
              (i = m[4]),
              (a = m[5]);
          }
          var _ = n || (p ? "2000px" : "100%");
          (y = r ? "-" + _ : o ? _ : "0"),
            (b = a || u ? "-" + _ : i || c ? _ : "0");
        }
        return (
          (l[v] = (0, s.animation)(
            (t ? "to" : "from") +
              " {opacity: 0;" +
              (h ? " transform: translate3d(" + y + ", " + b + ", 0);" : "") +
              "}\n     " +
              (t ? "from" : "to") +
              " {opacity: 1;transform: none;} "
          )),
          l[v]
        );
      }
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : s.defaults,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.children,
          i = (t.out, t.forever),
          a = t.timeout,
          u = t.duration,
          c = void 0 === u ? s.defaults.duration : u,
          f = t.delay,
          l = void 0 === f ? s.defaults.delay : f,
          d = t.count,
          v = void 0 === d ? s.defaults.count : d,
          h = r(t, [
            "children",
            "out",
            "forever",
            "timeout",
            "duration",
            "delay",
            "count",
          ]),
          y = {
            make: o,
            duration: void 0 === a ? c : a,
            delay: l,
            forever: i,
            count: v,
            style: { animationFillMode: "both" },
            reverse: h.left,
          };
        return e ? (0, p.default)(h, y, y, n) : y;
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a,
        u = n(2007),
        s = n(4006),
        c = n(6208),
        p = (a = c) && a.__esModule ? a : { default: a },
        f = {
          out: u.bool,
          left: u.bool,
          right: u.bool,
          top: u.bool,
          bottom: u.bool,
          big: u.bool,
          mirror: u.bool,
          opposite: u.bool,
          duration: u.number,
          timeout: u.number,
          distance: u.string,
          delay: u.number,
          count: u.number,
          forever: u.bool,
        },
        l = {};
      (i.propTypes = f), (e.default = i), (t.exports = e.default);
    },
    7686: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function o(t, e) {
        var n = e.left,
          r = e.right,
          o = e.up,
          i = e.down,
          a = e.top,
          u = e.bottom,
          s = e.mirror,
          c = e.opposite,
          f =
            (n ? 1 : 0) |
            (r ? 2 : 0) |
            (a || i ? 4 : 0) |
            (u || o ? 8 : 0) |
            (s ? 16 : 0) |
            (c ? 32 : 0) |
            (t ? 64 : 0);
        if (l.hasOwnProperty(f)) return l[f];
        if (!s != !(t && c)) {
          var d = [r, n, u, a, i, o];
          (n = d[0]),
            (r = d[1]),
            (a = d[2]),
            (u = d[3]),
            (o = d[4]),
            (i = d[5]);
        }
        var v = n || r,
          h = a || u || o || i,
          y = void 0;
        return (
          v || h
            ? t
              ? (y =
                  "40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (v ? (n ? "" : "-") + "42px" : "0") +
                  ", " +
                  (h ? (i || a ? "-" : "") + "60px" : "0") +
                  ", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d(" +
                  (v ? (r ? "" : "-") + "2000px" : "0") +
                  ", " +
                  (h ? (o || u ? "" : "-") + "2000px" : "0") +
                  ", 0);\n          transform-origin: " +
                  (h ? "center bottom" : (n ? "left" : "right") + " center") +
                  ";\n        }")
              : (y =
                  "from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d(" +
                  (v ? (n ? "-" : "") + "1000px" : "0") +
                  ", " +
                  (h ? (i || a ? "-" : "") + "1000px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (v ? (r ? "-" : "") + "10px" : "0") +
                  ", " +
                  (h ? (o || u ? "-" : "") + "60px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }")
            : (y =
                (t ? "to" : "from") +
                " {opacity: 0; transform: scale3d(.1, .1, .1);} " +
                (t ? "from" : "to") +
                " { opacity: 1; transform: none;}"),
          (l[f] = (0, p.animation)(y)),
          l[f]
        );
      }
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : p.defaults,
          e = t.children,
          n = (t.out, t.forever),
          i = t.timeout,
          a = t.duration,
          u = void 0 === a ? p.defaults.duration : a,
          s = t.delay,
          f = void 0 === s ? p.defaults.delay : s,
          l = t.count,
          d = void 0 === l ? p.defaults.count : l,
          v = r(t, [
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
            duration: void 0 === i ? u : i,
            delay: f,
            forever: n,
            count: d,
            style: { animationFillMode: "both" },
            reverse: v.left,
          };
        return (0, c.default)(v, h, h, e);
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a,
        u = n(2007),
        s = n(6208),
        c = (a = s) && a.__esModule ? a : { default: a },
        p = n(4006),
        f = {
          out: u.bool,
          left: u.bool,
          right: u.bool,
          top: u.bool,
          bottom: u.bool,
          mirror: u.bool,
          opposite: u.bool,
          duration: u.number,
          timeout: u.number,
          delay: u.number,
          count: u.number,
          forever: u.bool,
        },
        l = {};
      (i.propTypes = f), (e.default = i), (t.exports = e.default);
    },
    6165: function (t, e, n) {
      var r;
      "undefined" != typeof self && self,
        (t.exports =
          ((r = n(2791)),
          (function () {
            var t = {
                7403: function (t, e, n) {
                  "use strict";
                  n.d(e, {
                    default: function () {
                      return T;
                    },
                  });
                  var r = n(4087),
                    o = n.n(r),
                    i = function (t) {
                      return new RegExp(/<[a-z][\s\S]*>/i).test(t);
                    },
                    a = function (t) {
                      var e = document.createElement("div");
                      return (e.innerHTML = t), e.childNodes;
                    },
                    u = function (t, e) {
                      return Math.floor(Math.random() * (e - t + 1)) + t;
                    },
                    s = "TYPE_CHARACTER",
                    c = "REMOVE_CHARACTER",
                    p = "REMOVE_ALL",
                    f = "REMOVE_LAST_VISIBLE_NODE",
                    l = "PAUSE_FOR",
                    d = "CALL_FUNCTION",
                    v = "ADD_HTML_TAG_ELEMENT",
                    h = "CHANGE_DELETE_SPEED",
                    y = "CHANGE_DELAY",
                    b = "CHANGE_CURSOR",
                    m = "PASTE_STRING",
                    _ = "HTML_TAG";
                  function g(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      e &&
                        (r = r.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            t,
                            e
                          ).enumerable;
                        })),
                        n.push.apply(n, r);
                    }
                    return n;
                  }
                  function w(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? g(Object(n), !0).forEach(function (e) {
                            E(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : g(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  }
                  function x(t) {
                    return (
                      (function (t) {
                        if (Array.isArray(t)) return j(t);
                      })(t) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(t) ||
                      (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return j(t, e);
                          var n = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              t.constructor &&
                              (n = t.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(t)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? j(t, e)
                              : void 0
                          );
                        }
                      })(t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  }
                  function j(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r;
                  }
                  function O(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r);
                    }
                  }
                  function E(t, e, n) {
                    return (
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = n),
                      t
                    );
                  }
                  var T = (function () {
                    function t(e, n) {
                      var g = this;
                      if (
                        ((function (t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, t),
                        E(this, "state", {
                          cursorAnimation: null,
                          lastFrameTime: null,
                          pauseUntil: null,
                          eventQueue: [],
                          eventLoop: null,
                          eventLoopPaused: !1,
                          reverseCalledEvents: [],
                          calledEvents: [],
                          visibleNodes: [],
                          initialOptions: null,
                          elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span"),
                          },
                        }),
                        E(this, "options", {
                          strings: null,
                          cursor: "|",
                          delay: "natural",
                          pauseFor: 1500,
                          deleteSpeed: "natural",
                          loop: !1,
                          autoStart: !1,
                          devMode: !1,
                          skipAddStyles: !1,
                          wrapperClassName: "Typewriter__wrapper",
                          cursorClassName: "Typewriter__cursor",
                          stringSplitter: null,
                          onCreateTextNode: null,
                          onRemoveNode: null,
                        }),
                        E(this, "setupWrapperElement", function () {
                          g.state.elements.container &&
                            ((g.state.elements.wrapper.className =
                              g.options.wrapperClassName),
                            (g.state.elements.cursor.className =
                              g.options.cursorClassName),
                            (g.state.elements.cursor.innerHTML =
                              g.options.cursor),
                            (g.state.elements.container.innerHTML = ""),
                            g.state.elements.container.appendChild(
                              g.state.elements.wrapper
                            ),
                            g.state.elements.container.appendChild(
                              g.state.elements.cursor
                            ));
                        }),
                        E(this, "start", function () {
                          return (
                            (g.state.eventLoopPaused = !1), g.runEventLoop(), g
                          );
                        }),
                        E(this, "pause", function () {
                          return (g.state.eventLoopPaused = !0), g;
                        }),
                        E(this, "stop", function () {
                          return (
                            g.state.eventLoop &&
                              ((0, r.cancel)(g.state.eventLoop),
                              (g.state.eventLoop = null)),
                            g
                          );
                        }),
                        E(this, "pauseFor", function (t) {
                          return g.addEventToQueue(l, { ms: t }), g;
                        }),
                        E(this, "typeOutAllStrings", function () {
                          return "string" == typeof g.options.strings
                            ? (g
                                .typeString(g.options.strings)
                                .pauseFor(g.options.pauseFor),
                              g)
                            : (g.options.strings.forEach(function (t) {
                                g.typeString(t)
                                  .pauseFor(g.options.pauseFor)
                                  .deleteAll(g.options.deleteSpeed);
                              }),
                              g);
                        }),
                        E(this, "typeString", function (t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if (i(t)) return g.typeOutHTMLString(t, e);
                          if (t) {
                            var n = (g.options || {}).stringSplitter,
                              r = "function" == typeof n ? n(t) : t.split("");
                            g.typeCharacters(r, e);
                          }
                          return g;
                        }),
                        E(this, "pasteString", function (t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          return i(t)
                            ? g.typeOutHTMLString(t, e, !0)
                            : (t &&
                                g.addEventToQueue(m, { character: t, node: e }),
                              g);
                        }),
                        E(this, "typeOutHTMLString", function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = a(t);
                          if (r.length > 0)
                            for (var o = 0; o < r.length; o++) {
                              var i = r[o],
                                u = i.innerHTML;
                              i && 3 !== i.nodeType
                                ? ((i.innerHTML = ""),
                                  g.addEventToQueue(v, {
                                    node: i,
                                    parentNode: e,
                                  }),
                                  n ? g.pasteString(u, i) : g.typeString(u, i))
                                : i.textContent &&
                                  (n
                                    ? g.pasteString(i.textContent, e)
                                    : g.typeString(i.textContent, e));
                            }
                          return g;
                        }),
                        E(this, "deleteAll", function () {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "natural";
                          return g.addEventToQueue(p, { speed: t }), g;
                        }),
                        E(this, "changeDeleteSpeed", function (t) {
                          if (!t)
                            throw new Error("Must provide new delete speed");
                          return g.addEventToQueue(h, { speed: t }), g;
                        }),
                        E(this, "changeDelay", function (t) {
                          if (!t) throw new Error("Must provide new delay");
                          return g.addEventToQueue(y, { delay: t }), g;
                        }),
                        E(this, "changeCursor", function (t) {
                          if (!t) throw new Error("Must provide new cursor");
                          return g.addEventToQueue(b, { cursor: t }), g;
                        }),
                        E(this, "deleteChars", function (t) {
                          if (!t)
                            throw new Error(
                              "Must provide amount of characters to delete"
                            );
                          for (var e = 0; e < t; e++) g.addEventToQueue(c);
                          return g;
                        }),
                        E(this, "callFunction", function (t, e) {
                          if (!t || "function" != typeof t)
                            throw new Error("Callbak must be a function");
                          return g.addEventToQueue(d, { cb: t, thisArg: e }), g;
                        }),
                        E(this, "typeCharacters", function (t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if (!t || !Array.isArray(t))
                            throw new Error("Characters must be an array");
                          return (
                            t.forEach(function (t) {
                              g.addEventToQueue(s, { character: t, node: e });
                            }),
                            g
                          );
                        }),
                        E(this, "removeCharacters", function (t) {
                          if (!t || !Array.isArray(t))
                            throw new Error("Characters must be an array");
                          return (
                            t.forEach(function () {
                              g.addEventToQueue(c);
                            }),
                            g
                          );
                        }),
                        E(this, "addEventToQueue", function (t, e) {
                          var n =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                          return g.addEventToStateProperty(
                            t,
                            e,
                            n,
                            "eventQueue"
                          );
                        }),
                        E(this, "addReverseCalledEvent", function (t, e) {
                          var n =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                          return g.options.loop
                            ? g.addEventToStateProperty(
                                t,
                                e,
                                n,
                                "reverseCalledEvents"
                              )
                            : g;
                        }),
                        E(this, "addEventToStateProperty", function (t, e) {
                          var n =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2],
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = { eventName: t, eventArgs: e || {} };
                          return (
                            (g.state[r] = n
                              ? [o].concat(x(g.state[r]))
                              : [].concat(x(g.state[r]), [o])),
                            g
                          );
                        }),
                        E(this, "runEventLoop", function () {
                          g.state.lastFrameTime ||
                            (g.state.lastFrameTime = Date.now());
                          var t = Date.now(),
                            e = t - g.state.lastFrameTime;
                          if (!g.state.eventQueue.length) {
                            if (!g.options.loop) return;
                            (g.state.eventQueue = x(g.state.calledEvents)),
                              (g.state.calledEvents = []),
                              (g.options = w({}, g.state.initialOptions));
                          }
                          if (
                            ((g.state.eventLoop = o()(g.runEventLoop)),
                            !g.state.eventLoopPaused)
                          ) {
                            if (g.state.pauseUntil) {
                              if (t < g.state.pauseUntil) return;
                              g.state.pauseUntil = null;
                            }
                            var n,
                              r = x(g.state.eventQueue),
                              i = r.shift();
                            if (
                              !(
                                e <=
                                (n =
                                  i.eventName === f || i.eventName === c
                                    ? "natural" === g.options.deleteSpeed
                                      ? u(40, 80)
                                      : g.options.deleteSpeed
                                    : "natural" === g.options.delay
                                    ? u(120, 160)
                                    : g.options.delay)
                              )
                            ) {
                              var a = i.eventName,
                                j = i.eventArgs;
                              switch (
                                (g.logInDevMode({
                                  currentEvent: i,
                                  state: g.state,
                                  delay: n,
                                }),
                                a)
                              ) {
                                case m:
                                case s:
                                  var O = j.character,
                                    E = j.node,
                                    T = document.createTextNode(O),
                                    A = T;
                                  g.options.onCreateTextNode &&
                                    "function" ==
                                      typeof g.options.onCreateTextNode &&
                                    (A = g.options.onCreateTextNode(O, T)),
                                    A &&
                                      (E
                                        ? E.appendChild(A)
                                        : g.state.elements.wrapper.appendChild(
                                            A
                                          )),
                                    (g.state.visibleNodes = [].concat(
                                      x(g.state.visibleNodes),
                                      [
                                        {
                                          type: "TEXT_NODE",
                                          character: O,
                                          node: A,
                                        },
                                      ]
                                    ));
                                  break;
                                case c:
                                  r.unshift({
                                    eventName: f,
                                    eventArgs: { removingCharacterNode: !0 },
                                  });
                                  break;
                                case l:
                                  var S = i.eventArgs.ms;
                                  g.state.pauseUntil = Date.now() + parseInt(S);
                                  break;
                                case d:
                                  var P = i.eventArgs,
                                    C = P.cb,
                                    N = P.thisArg;
                                  C.call(N, { elements: g.state.elements });
                                  break;
                                case v:
                                  var k = i.eventArgs,
                                    M = k.node,
                                    L = k.parentNode;
                                  L
                                    ? L.appendChild(M)
                                    : g.state.elements.wrapper.appendChild(M),
                                    (g.state.visibleNodes = [].concat(
                                      x(g.state.visibleNodes),
                                      [
                                        {
                                          type: _,
                                          node: M,
                                          parentNode:
                                            L || g.state.elements.wrapper,
                                        },
                                      ]
                                    ));
                                  break;
                                case p:
                                  var D = g.state.visibleNodes,
                                    R = j.speed,
                                    z = [];
                                  R &&
                                    z.push({
                                      eventName: h,
                                      eventArgs: { speed: R, temp: !0 },
                                    });
                                  for (var F = 0, Q = D.length; F < Q; F++)
                                    z.push({
                                      eventName: f,
                                      eventArgs: { removingCharacterNode: !1 },
                                    });
                                  R &&
                                    z.push({
                                      eventName: h,
                                      eventArgs: {
                                        speed: g.options.deleteSpeed,
                                        temp: !0,
                                      },
                                    }),
                                    r.unshift.apply(r, z);
                                  break;
                                case f:
                                  var I = i.eventArgs.removingCharacterNode;
                                  if (g.state.visibleNodes.length) {
                                    var H = g.state.visibleNodes.pop(),
                                      U = H.type,
                                      B = H.node,
                                      G = H.character;
                                    g.options.onRemoveNode &&
                                      "function" ==
                                        typeof g.options.onRemoveNode &&
                                      g.options.onRemoveNode({
                                        node: B,
                                        character: G,
                                      }),
                                      B && B.parentNode.removeChild(B),
                                      U === _ &&
                                        I &&
                                        r.unshift({
                                          eventName: f,
                                          eventArgs: {},
                                        });
                                  }
                                  break;
                                case h:
                                  g.options.deleteSpeed = i.eventArgs.speed;
                                  break;
                                case y:
                                  g.options.delay = i.eventArgs.delay;
                                  break;
                                case b:
                                  (g.options.cursor = i.eventArgs.cursor),
                                    (g.state.elements.cursor.innerHTML =
                                      i.eventArgs.cursor);
                              }
                              g.options.loop &&
                                (i.eventName === f ||
                                  (i.eventArgs && i.eventArgs.temp) ||
                                  (g.state.calledEvents = [].concat(
                                    x(g.state.calledEvents),
                                    [i]
                                  ))),
                                (g.state.eventQueue = r),
                                (g.state.lastFrameTime = t);
                            }
                          }
                        }),
                        e)
                      )
                        if ("string" == typeof e) {
                          var j = document.querySelector(e);
                          if (!j)
                            throw new Error("Could not find container element");
                          this.state.elements.container = j;
                        } else this.state.elements.container = e;
                      n && (this.options = w(w({}, this.options), n)),
                        (this.state.initialOptions = w({}, this.options)),
                        this.init();
                    }
                    var e, n;
                    return (
                      (e = t),
                      (n = [
                        {
                          key: "init",
                          value: function () {
                            var t, e;
                            this.setupWrapperElement(),
                              this.addEventToQueue(
                                b,
                                { cursor: this.options.cursor },
                                !0
                              ),
                              this.addEventToQueue(p, null, !0),
                              !window ||
                                window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                                this.options.skipAddStyles ||
                                ((t =
                                  ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                                (e =
                                  document.createElement("style")).appendChild(
                                  document.createTextNode(t)
                                ),
                                document.head.appendChild(e),
                                (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                              !0 === this.options.autoStart &&
                                this.options.strings &&
                                this.typeOutAllStrings().start();
                          },
                        },
                        {
                          key: "logInDevMode",
                          value: function (t) {
                            this.options.devMode && console.log(t);
                          },
                        },
                      ]) && O(e.prototype, n),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t
                    );
                  })();
                },
                8552: function (t, e, n) {
                  var r = n(852)(n(5639), "DataView");
                  t.exports = r;
                },
                1989: function (t, e, n) {
                  var r = n(1789),
                    o = n(401),
                    i = n(7667),
                    a = n(1327),
                    u = n(1866);
                  function s(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  (s.prototype.clear = r),
                    (s.prototype.delete = o),
                    (s.prototype.get = i),
                    (s.prototype.has = a),
                    (s.prototype.set = u),
                    (t.exports = s);
                },
                8407: function (t, e, n) {
                  var r = n(7040),
                    o = n(4125),
                    i = n(2117),
                    a = n(7518),
                    u = n(4705);
                  function s(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  (s.prototype.clear = r),
                    (s.prototype.delete = o),
                    (s.prototype.get = i),
                    (s.prototype.has = a),
                    (s.prototype.set = u),
                    (t.exports = s);
                },
                7071: function (t, e, n) {
                  var r = n(852)(n(5639), "Map");
                  t.exports = r;
                },
                3369: function (t, e, n) {
                  var r = n(4785),
                    o = n(1285),
                    i = n(6e3),
                    a = n(9916),
                    u = n(5265);
                  function s(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  (s.prototype.clear = r),
                    (s.prototype.delete = o),
                    (s.prototype.get = i),
                    (s.prototype.has = a),
                    (s.prototype.set = u),
                    (t.exports = s);
                },
                3818: function (t, e, n) {
                  var r = n(852)(n(5639), "Promise");
                  t.exports = r;
                },
                8525: function (t, e, n) {
                  var r = n(852)(n(5639), "Set");
                  t.exports = r;
                },
                8668: function (t, e, n) {
                  var r = n(3369),
                    o = n(619),
                    i = n(2385);
                  function a(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
                  }
                  (a.prototype.add = a.prototype.push = o),
                    (a.prototype.has = i),
                    (t.exports = a);
                },
                6384: function (t, e, n) {
                  var r = n(8407),
                    o = n(7465),
                    i = n(3779),
                    a = n(7599),
                    u = n(4758),
                    s = n(4309);
                  function c(t) {
                    var e = (this.__data__ = new r(t));
                    this.size = e.size;
                  }
                  (c.prototype.clear = o),
                    (c.prototype.delete = i),
                    (c.prototype.get = a),
                    (c.prototype.has = u),
                    (c.prototype.set = s),
                    (t.exports = c);
                },
                2705: function (t, e, n) {
                  var r = n(5639).Symbol;
                  t.exports = r;
                },
                1149: function (t, e, n) {
                  var r = n(5639).Uint8Array;
                  t.exports = r;
                },
                577: function (t, e, n) {
                  var r = n(852)(n(5639), "WeakMap");
                  t.exports = r;
                },
                4963: function (t) {
                  t.exports = function (t, e) {
                    for (
                      var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
                      ++n < r;

                    ) {
                      var a = t[n];
                      e(a, n, t) && (i[o++] = a);
                    }
                    return i;
                  };
                },
                4636: function (t, e, n) {
                  var r = n(2545),
                    o = n(5694),
                    i = n(1469),
                    a = n(4144),
                    u = n(5776),
                    s = n(6719),
                    c = Object.prototype.hasOwnProperty;
                  t.exports = function (t, e) {
                    var n = i(t),
                      p = !n && o(t),
                      f = !n && !p && a(t),
                      l = !n && !p && !f && s(t),
                      d = n || p || f || l,
                      v = d ? r(t.length, String) : [],
                      h = v.length;
                    for (var y in t)
                      (!e && !c.call(t, y)) ||
                        (d &&
                          ("length" == y ||
                            (f && ("offset" == y || "parent" == y)) ||
                            (l &&
                              ("buffer" == y ||
                                "byteLength" == y ||
                                "byteOffset" == y)) ||
                            u(y, h))) ||
                        v.push(y);
                    return v;
                  };
                },
                2488: function (t) {
                  t.exports = function (t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r; )
                      t[o + n] = e[n];
                    return t;
                  };
                },
                2908: function (t) {
                  t.exports = function (t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                      if (e(t[n], n, t)) return !0;
                    return !1;
                  };
                },
                8470: function (t, e, n) {
                  var r = n(7813);
                  t.exports = function (t, e) {
                    for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
                    return -1;
                  };
                },
                8866: function (t, e, n) {
                  var r = n(2488),
                    o = n(1469);
                  t.exports = function (t, e, n) {
                    var i = e(t);
                    return o(t) ? i : r(i, n(t));
                  };
                },
                4239: function (t, e, n) {
                  var r = n(2705),
                    o = n(9607),
                    i = n(2333),
                    a = r ? r.toStringTag : void 0;
                  t.exports = function (t) {
                    return null == t
                      ? void 0 === t
                        ? "[object Undefined]"
                        : "[object Null]"
                      : a && a in Object(t)
                      ? o(t)
                      : i(t);
                  };
                },
                9454: function (t, e, n) {
                  var r = n(4239),
                    o = n(7005);
                  t.exports = function (t) {
                    return o(t) && "[object Arguments]" == r(t);
                  };
                },
                939: function (t, e, n) {
                  var r = n(2492),
                    o = n(7005);
                  t.exports = function t(e, n, i, a, u) {
                    return (
                      e === n ||
                      (null == e || null == n || (!o(e) && !o(n))
                        ? e != e && n != n
                        : r(e, n, i, a, t, u))
                    );
                  };
                },
                2492: function (t, e, n) {
                  var r = n(6384),
                    o = n(7114),
                    i = n(8351),
                    a = n(6096),
                    u = n(4160),
                    s = n(1469),
                    c = n(4144),
                    p = n(6719),
                    f = "[object Arguments]",
                    l = "[object Array]",
                    d = "[object Object]",
                    v = Object.prototype.hasOwnProperty;
                  t.exports = function (t, e, n, h, y, b) {
                    var m = s(t),
                      _ = s(e),
                      g = m ? l : u(t),
                      w = _ ? l : u(e),
                      x = (g = g == f ? d : g) == d,
                      j = (w = w == f ? d : w) == d,
                      O = g == w;
                    if (O && c(t)) {
                      if (!c(e)) return !1;
                      (m = !0), (x = !1);
                    }
                    if (O && !x)
                      return (
                        b || (b = new r()),
                        m || p(t) ? o(t, e, n, h, y, b) : i(t, e, g, n, h, y, b)
                      );
                    if (!(1 & n)) {
                      var E = x && v.call(t, "__wrapped__"),
                        T = j && v.call(e, "__wrapped__");
                      if (E || T) {
                        var A = E ? t.value() : t,
                          S = T ? e.value() : e;
                        return b || (b = new r()), y(A, S, n, h, b);
                      }
                    }
                    return !!O && (b || (b = new r()), a(t, e, n, h, y, b));
                  };
                },
                8458: function (t, e, n) {
                  var r = n(3560),
                    o = n(5346),
                    i = n(3218),
                    a = n(346),
                    u = /^\[object .+?Constructor\]$/,
                    s = Function.prototype,
                    c = Object.prototype,
                    p = s.toString,
                    f = c.hasOwnProperty,
                    l = RegExp(
                      "^" +
                        p
                          .call(f)
                          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                          .replace(
                            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                            "$1.*?"
                          ) +
                        "$"
                    );
                  t.exports = function (t) {
                    return !(!i(t) || o(t)) && (r(t) ? l : u).test(a(t));
                  };
                },
                8749: function (t, e, n) {
                  var r = n(4239),
                    o = n(1780),
                    i = n(7005),
                    a = {};
                  (a["[object Float32Array]"] =
                    a["[object Float64Array]"] =
                    a["[object Int8Array]"] =
                    a["[object Int16Array]"] =
                    a["[object Int32Array]"] =
                    a["[object Uint8Array]"] =
                    a["[object Uint8ClampedArray]"] =
                    a["[object Uint16Array]"] =
                    a["[object Uint32Array]"] =
                      !0),
                    (a["[object Arguments]"] =
                      a["[object Array]"] =
                      a["[object ArrayBuffer]"] =
                      a["[object Boolean]"] =
                      a["[object DataView]"] =
                      a["[object Date]"] =
                      a["[object Error]"] =
                      a["[object Function]"] =
                      a["[object Map]"] =
                      a["[object Number]"] =
                      a["[object Object]"] =
                      a["[object RegExp]"] =
                      a["[object Set]"] =
                      a["[object String]"] =
                      a["[object WeakMap]"] =
                        !1),
                    (t.exports = function (t) {
                      return i(t) && o(t.length) && !!a[r(t)];
                    });
                },
                280: function (t, e, n) {
                  var r = n(5726),
                    o = n(6916),
                    i = Object.prototype.hasOwnProperty;
                  t.exports = function (t) {
                    if (!r(t)) return o(t);
                    var e = [];
                    for (var n in Object(t))
                      i.call(t, n) && "constructor" != n && e.push(n);
                    return e;
                  };
                },
                2545: function (t) {
                  t.exports = function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                    return r;
                  };
                },
                1717: function (t) {
                  t.exports = function (t) {
                    return function (e) {
                      return t(e);
                    };
                  };
                },
                4757: function (t) {
                  t.exports = function (t, e) {
                    return t.has(e);
                  };
                },
                4429: function (t, e, n) {
                  var r = n(5639)["__core-js_shared__"];
                  t.exports = r;
                },
                7114: function (t, e, n) {
                  var r = n(8668),
                    o = n(2908),
                    i = n(4757);
                  t.exports = function (t, e, n, a, u, s) {
                    var c = 1 & n,
                      p = t.length,
                      f = e.length;
                    if (p != f && !(c && f > p)) return !1;
                    var l = s.get(t),
                      d = s.get(e);
                    if (l && d) return l == e && d == t;
                    var v = -1,
                      h = !0,
                      y = 2 & n ? new r() : void 0;
                    for (s.set(t, e), s.set(e, t); ++v < p; ) {
                      var b = t[v],
                        m = e[v];
                      if (a)
                        var _ = c ? a(m, b, v, e, t, s) : a(b, m, v, t, e, s);
                      if (void 0 !== _) {
                        if (_) continue;
                        h = !1;
                        break;
                      }
                      if (y) {
                        if (
                          !o(e, function (t, e) {
                            if (!i(y, e) && (b === t || u(b, t, n, a, s)))
                              return y.push(e);
                          })
                        ) {
                          h = !1;
                          break;
                        }
                      } else if (b !== m && !u(b, m, n, a, s)) {
                        h = !1;
                        break;
                      }
                    }
                    return s.delete(t), s.delete(e), h;
                  };
                },
                8351: function (t, e, n) {
                  var r = n(2705),
                    o = n(1149),
                    i = n(7813),
                    a = n(7114),
                    u = n(8776),
                    s = n(1814),
                    c = r ? r.prototype : void 0,
                    p = c ? c.valueOf : void 0;
                  t.exports = function (t, e, n, r, c, f, l) {
                    switch (n) {
                      case "[object DataView]":
                        if (
                          t.byteLength != e.byteLength ||
                          t.byteOffset != e.byteOffset
                        )
                          return !1;
                        (t = t.buffer), (e = e.buffer);
                      case "[object ArrayBuffer]":
                        return !(
                          t.byteLength != e.byteLength || !f(new o(t), new o(e))
                        );
                      case "[object Boolean]":
                      case "[object Date]":
                      case "[object Number]":
                        return i(+t, +e);
                      case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                      case "[object RegExp]":
                      case "[object String]":
                        return t == e + "";
                      case "[object Map]":
                        var d = u;
                      case "[object Set]":
                        var v = 1 & r;
                        if ((d || (d = s), t.size != e.size && !v)) return !1;
                        var h = l.get(t);
                        if (h) return h == e;
                        (r |= 2), l.set(t, e);
                        var y = a(d(t), d(e), r, c, f, l);
                        return l.delete(t), y;
                      case "[object Symbol]":
                        if (p) return p.call(t) == p.call(e);
                    }
                    return !1;
                  };
                },
                6096: function (t, e, n) {
                  var r = n(8234),
                    o = Object.prototype.hasOwnProperty;
                  t.exports = function (t, e, n, i, a, u) {
                    var s = 1 & n,
                      c = r(t),
                      p = c.length;
                    if (p != r(e).length && !s) return !1;
                    for (var f = p; f--; ) {
                      var l = c[f];
                      if (!(s ? l in e : o.call(e, l))) return !1;
                    }
                    var d = u.get(t),
                      v = u.get(e);
                    if (d && v) return d == e && v == t;
                    var h = !0;
                    u.set(t, e), u.set(e, t);
                    for (var y = s; ++f < p; ) {
                      var b = t[(l = c[f])],
                        m = e[l];
                      if (i)
                        var _ = s ? i(m, b, l, e, t, u) : i(b, m, l, t, e, u);
                      if (!(void 0 === _ ? b === m || a(b, m, n, i, u) : _)) {
                        h = !1;
                        break;
                      }
                      y || (y = "constructor" == l);
                    }
                    if (h && !y) {
                      var g = t.constructor,
                        w = e.constructor;
                      g == w ||
                        !("constructor" in t) ||
                        !("constructor" in e) ||
                        ("function" == typeof g &&
                          g instanceof g &&
                          "function" == typeof w &&
                          w instanceof w) ||
                        (h = !1);
                    }
                    return u.delete(t), u.delete(e), h;
                  };
                },
                1957: function (t, e, n) {
                  var r =
                    "object" == typeof n.g &&
                    n.g &&
                    n.g.Object === Object &&
                    n.g;
                  t.exports = r;
                },
                8234: function (t, e, n) {
                  var r = n(8866),
                    o = n(9551),
                    i = n(3674);
                  t.exports = function (t) {
                    return r(t, i, o);
                  };
                },
                5050: function (t, e, n) {
                  var r = n(7019);
                  t.exports = function (t, e) {
                    var n = t.__data__;
                    return r(e)
                      ? n["string" == typeof e ? "string" : "hash"]
                      : n.map;
                  };
                },
                852: function (t, e, n) {
                  var r = n(8458),
                    o = n(7801);
                  t.exports = function (t, e) {
                    var n = o(t, e);
                    return r(n) ? n : void 0;
                  };
                },
                9607: function (t, e, n) {
                  var r = n(2705),
                    o = Object.prototype,
                    i = o.hasOwnProperty,
                    a = o.toString,
                    u = r ? r.toStringTag : void 0;
                  t.exports = function (t) {
                    var e = i.call(t, u),
                      n = t[u];
                    try {
                      t[u] = void 0;
                      var r = !0;
                    } catch (t) {}
                    var o = a.call(t);
                    return r && (e ? (t[u] = n) : delete t[u]), o;
                  };
                },
                9551: function (t, e, n) {
                  var r = n(4963),
                    o = n(479),
                    i = Object.prototype.propertyIsEnumerable,
                    a = Object.getOwnPropertySymbols,
                    u = a
                      ? function (t) {
                          return null == t
                            ? []
                            : ((t = Object(t)),
                              r(a(t), function (e) {
                                return i.call(t, e);
                              }));
                        }
                      : o;
                  t.exports = u;
                },
                4160: function (t, e, n) {
                  var r = n(8552),
                    o = n(7071),
                    i = n(3818),
                    a = n(8525),
                    u = n(577),
                    s = n(4239),
                    c = n(346),
                    p = "[object Map]",
                    f = "[object Promise]",
                    l = "[object Set]",
                    d = "[object WeakMap]",
                    v = "[object DataView]",
                    h = c(r),
                    y = c(o),
                    b = c(i),
                    m = c(a),
                    _ = c(u),
                    g = s;
                  ((r && g(new r(new ArrayBuffer(1))) != v) ||
                    (o && g(new o()) != p) ||
                    (i && g(i.resolve()) != f) ||
                    (a && g(new a()) != l) ||
                    (u && g(new u()) != d)) &&
                    (g = function (t) {
                      var e = s(t),
                        n = "[object Object]" == e ? t.constructor : void 0,
                        r = n ? c(n) : "";
                      if (r)
                        switch (r) {
                          case h:
                            return v;
                          case y:
                            return p;
                          case b:
                            return f;
                          case m:
                            return l;
                          case _:
                            return d;
                        }
                      return e;
                    }),
                    (t.exports = g);
                },
                7801: function (t) {
                  t.exports = function (t, e) {
                    return null == t ? void 0 : t[e];
                  };
                },
                1789: function (t, e, n) {
                  var r = n(4536);
                  t.exports = function () {
                    (this.__data__ = r ? r(null) : {}), (this.size = 0);
                  };
                },
                401: function (t) {
                  t.exports = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return (this.size -= e ? 1 : 0), e;
                  };
                },
                7667: function (t, e, n) {
                  var r = n(4536),
                    o = Object.prototype.hasOwnProperty;
                  t.exports = function (t) {
                    var e = this.__data__;
                    if (r) {
                      var n = e[t];
                      return "__lodash_hash_undefined__" === n ? void 0 : n;
                    }
                    return o.call(e, t) ? e[t] : void 0;
                  };
                },
                1327: function (t, e, n) {
                  var r = n(4536),
                    o = Object.prototype.hasOwnProperty;
                  t.exports = function (t) {
                    var e = this.__data__;
                    return r ? void 0 !== e[t] : o.call(e, t);
                  };
                },
                1866: function (t, e, n) {
                  var r = n(4536);
                  t.exports = function (t, e) {
                    var n = this.__data__;
                    return (
                      (this.size += this.has(t) ? 0 : 1),
                      (n[t] =
                        r && void 0 === e ? "__lodash_hash_undefined__" : e),
                      this
                    );
                  };
                },
                5776: function (t) {
                  var e = /^(?:0|[1-9]\d*)$/;
                  t.exports = function (t, n) {
                    var r = typeof t;
                    return (
                      !!(n = null == n ? 9007199254740991 : n) &&
                      ("number" == r || ("symbol" != r && e.test(t))) &&
                      t > -1 &&
                      t % 1 == 0 &&
                      t < n
                    );
                  };
                },
                7019: function (t) {
                  t.exports = function (t) {
                    var e = typeof t;
                    return "string" == e ||
                      "number" == e ||
                      "symbol" == e ||
                      "boolean" == e
                      ? "__proto__" !== t
                      : null === t;
                  };
                },
                5346: function (t, e, n) {
                  var r,
                    o = n(4429),
                    i = (r = /[^.]+$/.exec(
                      (o && o.keys && o.keys.IE_PROTO) || ""
                    ))
                      ? "Symbol(src)_1." + r
                      : "";
                  t.exports = function (t) {
                    return !!i && i in t;
                  };
                },
                5726: function (t) {
                  var e = Object.prototype;
                  t.exports = function (t) {
                    var n = t && t.constructor;
                    return t === (("function" == typeof n && n.prototype) || e);
                  };
                },
                7040: function (t) {
                  t.exports = function () {
                    (this.__data__ = []), (this.size = 0);
                  };
                },
                4125: function (t, e, n) {
                  var r = n(8470),
                    o = Array.prototype.splice;
                  t.exports = function (t) {
                    var e = this.__data__,
                      n = r(e, t);
                    return !(
                      n < 0 ||
                      (n == e.length - 1 ? e.pop() : o.call(e, n, 1),
                      --this.size,
                      0)
                    );
                  };
                },
                2117: function (t, e, n) {
                  var r = n(8470);
                  t.exports = function (t) {
                    var e = this.__data__,
                      n = r(e, t);
                    return n < 0 ? void 0 : e[n][1];
                  };
                },
                7518: function (t, e, n) {
                  var r = n(8470);
                  t.exports = function (t) {
                    return r(this.__data__, t) > -1;
                  };
                },
                4705: function (t, e, n) {
                  var r = n(8470);
                  t.exports = function (t, e) {
                    var n = this.__data__,
                      o = r(n, t);
                    return (
                      o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e),
                      this
                    );
                  };
                },
                4785: function (t, e, n) {
                  var r = n(1989),
                    o = n(8407),
                    i = n(7071);
                  t.exports = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new r(),
                        map: new (i || o)(),
                        string: new r(),
                      });
                  };
                },
                1285: function (t, e, n) {
                  var r = n(5050);
                  t.exports = function (t) {
                    var e = r(this, t).delete(t);
                    return (this.size -= e ? 1 : 0), e;
                  };
                },
                6e3: function (t, e, n) {
                  var r = n(5050);
                  t.exports = function (t) {
                    return r(this, t).get(t);
                  };
                },
                9916: function (t, e, n) {
                  var r = n(5050);
                  t.exports = function (t) {
                    return r(this, t).has(t);
                  };
                },
                5265: function (t, e, n) {
                  var r = n(5050);
                  t.exports = function (t, e) {
                    var n = r(this, t),
                      o = n.size;
                    return (
                      n.set(t, e), (this.size += n.size == o ? 0 : 1), this
                    );
                  };
                },
                8776: function (t) {
                  t.exports = function (t) {
                    var e = -1,
                      n = Array(t.size);
                    return (
                      t.forEach(function (t, r) {
                        n[++e] = [r, t];
                      }),
                      n
                    );
                  };
                },
                4536: function (t, e, n) {
                  var r = n(852)(Object, "create");
                  t.exports = r;
                },
                6916: function (t, e, n) {
                  var r = n(5569)(Object.keys, Object);
                  t.exports = r;
                },
                1167: function (t, e, n) {
                  t = n.nmd(t);
                  var r = n(1957),
                    o = e && !e.nodeType && e,
                    i = o && t && !t.nodeType && t,
                    a = i && i.exports === o && r.process,
                    u = (function () {
                      try {
                        return (
                          (i && i.require && i.require("util").types) ||
                          (a && a.binding && a.binding("util"))
                        );
                      } catch (t) {}
                    })();
                  t.exports = u;
                },
                2333: function (t) {
                  var e = Object.prototype.toString;
                  t.exports = function (t) {
                    return e.call(t);
                  };
                },
                5569: function (t) {
                  t.exports = function (t, e) {
                    return function (n) {
                      return t(e(n));
                    };
                  };
                },
                5639: function (t, e, n) {
                  var r = n(1957),
                    o =
                      "object" == typeof self &&
                      self &&
                      self.Object === Object &&
                      self,
                    i = r || o || Function("return this")();
                  t.exports = i;
                },
                619: function (t) {
                  t.exports = function (t) {
                    return (
                      this.__data__.set(t, "__lodash_hash_undefined__"), this
                    );
                  };
                },
                2385: function (t) {
                  t.exports = function (t) {
                    return this.__data__.has(t);
                  };
                },
                1814: function (t) {
                  t.exports = function (t) {
                    var e = -1,
                      n = Array(t.size);
                    return (
                      t.forEach(function (t) {
                        n[++e] = t;
                      }),
                      n
                    );
                  };
                },
                7465: function (t, e, n) {
                  var r = n(8407);
                  t.exports = function () {
                    (this.__data__ = new r()), (this.size = 0);
                  };
                },
                3779: function (t) {
                  t.exports = function (t) {
                    var e = this.__data__,
                      n = e.delete(t);
                    return (this.size = e.size), n;
                  };
                },
                7599: function (t) {
                  t.exports = function (t) {
                    return this.__data__.get(t);
                  };
                },
                4758: function (t) {
                  t.exports = function (t) {
                    return this.__data__.has(t);
                  };
                },
                4309: function (t, e, n) {
                  var r = n(8407),
                    o = n(7071),
                    i = n(3369);
                  t.exports = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof r) {
                      var a = n.__data__;
                      if (!o || a.length < 199)
                        return a.push([t, e]), (this.size = ++n.size), this;
                      n = this.__data__ = new i(a);
                    }
                    return n.set(t, e), (this.size = n.size), this;
                  };
                },
                346: function (t) {
                  var e = Function.prototype.toString;
                  t.exports = function (t) {
                    if (null != t) {
                      try {
                        return e.call(t);
                      } catch (t) {}
                      try {
                        return t + "";
                      } catch (t) {}
                    }
                    return "";
                  };
                },
                7813: function (t) {
                  t.exports = function (t, e) {
                    return t === e || (t != t && e != e);
                  };
                },
                5694: function (t, e, n) {
                  var r = n(9454),
                    o = n(7005),
                    i = Object.prototype,
                    a = i.hasOwnProperty,
                    u = i.propertyIsEnumerable,
                    s = r(
                      (function () {
                        return arguments;
                      })()
                    )
                      ? r
                      : function (t) {
                          return (
                            o(t) && a.call(t, "callee") && !u.call(t, "callee")
                          );
                        };
                  t.exports = s;
                },
                1469: function (t) {
                  var e = Array.isArray;
                  t.exports = e;
                },
                8612: function (t, e, n) {
                  var r = n(3560),
                    o = n(1780);
                  t.exports = function (t) {
                    return null != t && o(t.length) && !r(t);
                  };
                },
                4144: function (t, e, n) {
                  t = n.nmd(t);
                  var r = n(5639),
                    o = n(5062),
                    i = e && !e.nodeType && e,
                    a = i && t && !t.nodeType && t,
                    u = a && a.exports === i ? r.Buffer : void 0,
                    s = (u ? u.isBuffer : void 0) || o;
                  t.exports = s;
                },
                8446: function (t, e, n) {
                  var r = n(939);
                  t.exports = function (t, e) {
                    return r(t, e);
                  };
                },
                3560: function (t, e, n) {
                  var r = n(4239),
                    o = n(3218);
                  t.exports = function (t) {
                    if (!o(t)) return !1;
                    var e = r(t);
                    return (
                      "[object Function]" == e ||
                      "[object GeneratorFunction]" == e ||
                      "[object AsyncFunction]" == e ||
                      "[object Proxy]" == e
                    );
                  };
                },
                1780: function (t) {
                  t.exports = function (t) {
                    return (
                      "number" == typeof t &&
                      t > -1 &&
                      t % 1 == 0 &&
                      t <= 9007199254740991
                    );
                  };
                },
                3218: function (t) {
                  t.exports = function (t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e);
                  };
                },
                7005: function (t) {
                  t.exports = function (t) {
                    return null != t && "object" == typeof t;
                  };
                },
                6719: function (t, e, n) {
                  var r = n(8749),
                    o = n(1717),
                    i = n(1167),
                    a = i && i.isTypedArray,
                    u = a ? o(a) : r;
                  t.exports = u;
                },
                3674: function (t, e, n) {
                  var r = n(4636),
                    o = n(280),
                    i = n(8612);
                  t.exports = function (t) {
                    return i(t) ? r(t) : o(t);
                  };
                },
                479: function (t) {
                  t.exports = function () {
                    return [];
                  };
                },
                5062: function (t) {
                  t.exports = function () {
                    return !1;
                  };
                },
                75: function (t) {
                  (function () {
                    var e, n, r, o, i, a;
                    "undefined" != typeof performance &&
                    null !== performance &&
                    performance.now
                      ? (t.exports = function () {
                          return performance.now();
                        })
                      : "undefined" != typeof process &&
                        null !== process &&
                        process.hrtime
                      ? ((t.exports = function () {
                          return (e() - i) / 1e6;
                        }),
                        (n = process.hrtime),
                        (o = (e = function () {
                          var t;
                          return 1e9 * (t = n())[0] + t[1];
                        })()),
                        (a = 1e9 * process.uptime()),
                        (i = o - a))
                      : Date.now
                      ? ((t.exports = function () {
                          return Date.now() - r;
                        }),
                        (r = Date.now()))
                      : ((t.exports = function () {
                          return new Date().getTime() - r;
                        }),
                        (r = new Date().getTime()));
                  }.call(this));
                },
                4087: function (t, e, n) {
                  for (
                    var r = n(75),
                      o = "undefined" == typeof window ? n.g : window,
                      i = ["moz", "webkit"],
                      a = "AnimationFrame",
                      u = o["request" + a],
                      s = o["cancel" + a] || o["cancelRequest" + a],
                      c = 0;
                    !u && c < i.length;
                    c++
                  )
                    (u = o[i[c] + "Request" + a]),
                      (s =
                        o[i[c] + "Cancel" + a] ||
                        o[i[c] + "CancelRequest" + a]);
                  if (!u || !s) {
                    var p = 0,
                      f = 0,
                      l = [];
                    (u = function (t) {
                      if (0 === l.length) {
                        var e = r(),
                          n = Math.max(0, 16.666666666666668 - (e - p));
                        (p = n + e),
                          setTimeout(function () {
                            var t = l.slice(0);
                            l.length = 0;
                            for (var e = 0; e < t.length; e++)
                              if (!t[e].cancelled)
                                try {
                                  t[e].callback(p);
                                } catch (t) {
                                  setTimeout(function () {
                                    throw t;
                                  }, 0);
                                }
                          }, Math.round(n));
                      }
                      return (
                        l.push({ handle: ++f, callback: t, cancelled: !1 }), f
                      );
                    }),
                      (s = function (t) {
                        for (var e = 0; e < l.length; e++)
                          l[e].handle === t && (l[e].cancelled = !0);
                      });
                  }
                  (t.exports = function (t) {
                    return u.call(o, t);
                  }),
                    (t.exports.cancel = function () {
                      s.apply(o, arguments);
                    }),
                    (t.exports.polyfill = function (t) {
                      t || (t = o),
                        (t.requestAnimationFrame = u),
                        (t.cancelAnimationFrame = s);
                    });
                },
                8156: function (t) {
                  "use strict";
                  t.exports = r;
                },
              },
              e = {};
            function n(r) {
              var o = e[r];
              if (void 0 !== o) return o.exports;
              var i = (e[r] = { id: r, loaded: !1, exports: {} });
              return (
                t[r].call(i.exports, i, i.exports, n),
                (i.loaded = !0),
                i.exports
              );
            }
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, { a: e }), e;
            }),
              (n.d = function (t, e) {
                for (var r in e)
                  n.o(e, r) &&
                    !n.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
              }),
              (n.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                  return this || new Function("return this")();
                } catch (r) {
                  if ("object" == typeof window) return window;
                }
              })()),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.nmd = function (t) {
                return (t.paths = []), t.children || (t.children = []), t;
              });
            var o = {};
            return (
              (function () {
                "use strict";
                n.d(o, {
                  default: function () {
                    return y;
                  },
                });
                var t = n(8156),
                  e = n.n(t),
                  r = n(7403),
                  i = n(8446),
                  a = n.n(i);
                function u(t) {
                  return (
                    (u =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t;
                          }
                        : function (t) {
                            return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                          }),
                    u(t)
                  );
                }
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                function p(t, e) {
                  return (
                    (p = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    p(t, e)
                  );
                }
                function f(t, e) {
                  if (e && ("object" === u(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return l(t);
                }
                function l(t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                }
                function d(t) {
                  return (
                    (d = Object.setPrototypeOf
                      ? Object.getPrototypeOf.bind()
                      : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                        }),
                    d(t)
                  );
                }
                function v(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var h = (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      e && p(t, e);
                  })(y, t);
                  var n,
                    o,
                    i,
                    u,
                    h =
                      ((i = y),
                      (u = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })()),
                      function () {
                        var t,
                          e = d(i);
                        if (u) {
                          var n = d(this).constructor;
                          t = Reflect.construct(e, arguments, n);
                        } else t = e.apply(this, arguments);
                        return f(this, t);
                      });
                  function y() {
                    var t;
                    s(this, y);
                    for (
                      var e = arguments.length, n = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r];
                    return (
                      v(l((t = h.call.apply(h, [this].concat(n)))), "state", {
                        instance: null,
                      }),
                      t
                    );
                  }
                  return (
                    (n = y),
                    (o = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = this,
                            e = new r.default(
                              this.typewriter,
                              this.props.options
                            );
                          this.setState({ instance: e }, function () {
                            var n = t.props.onInit;
                            n && n(e);
                          });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (t) {
                          a()(this.props.options, t.options) ||
                            this.setState({
                              instance: new r.default(
                                this.typewriter,
                                this.props.options
                              ),
                            });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.state.instance && this.state.instance.stop();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            n = this.props.component;
                          return e().createElement(n, {
                            ref: function (e) {
                              return (t.typewriter = e);
                            },
                            className: "Typewriter",
                            "data-testid": "typewriter-wrapper",
                          });
                        },
                      },
                    ]) && c(n.prototype, o),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    y
                  );
                })(t.Component);
                h.defaultProps = { component: "div" };
                var y = h;
              })(),
              o.default
            );
          })()));
    },
  },
]);
//# sourceMappingURL=110.f2846b35.chunk.js.map
