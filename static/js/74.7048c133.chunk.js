"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [74],
  {
    5172: function (e, t, n) {
      var a = n(4836);
      t.Z = void 0;
      var i = a(n(5649)),
        r = n(184),
        s = (0, i.default)(
          (0, r.jsx)("path", {
            d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
          }),
          "KeyboardArrowDown"
        );
      t.Z = s;
    },
    7686: function (e, t, n) {
      function a(e, t) {
        var n = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]));
        return n;
      }
      function i(e, t) {
        var n = t.left,
          a = t.right,
          i = t.up,
          r = t.down,
          s = t.top,
          o = t.bottom,
          l = t.mirror,
          d = t.opposite,
          u =
            (n ? 1 : 0) |
            (a ? 2 : 0) |
            (s || r ? 4 : 0) |
            (o || i ? 8 : 0) |
            (l ? 16 : 0) |
            (d ? 32 : 0) |
            (e ? 64 : 0);
        if (p.hasOwnProperty(u)) return p[u];
        if (!l != !(e && d)) {
          var f = [a, n, o, s, r, i];
          (n = f[0]),
            (a = f[1]),
            (s = f[2]),
            (o = f[3]),
            (i = f[4]),
            (r = f[5]);
        }
        var v = n || a,
          h = s || o || i || r,
          m = void 0;
        return (
          v || h
            ? e
              ? (m =
                  "40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (v ? (n ? "" : "-") + "42px" : "0") +
                  ", " +
                  (h ? (r || s ? "-" : "") + "60px" : "0") +
                  ", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d(" +
                  (v ? (a ? "" : "-") + "2000px" : "0") +
                  ", " +
                  (h ? (i || o ? "" : "-") + "2000px" : "0") +
                  ", 0);\n          transform-origin: " +
                  (h ? "center bottom" : (n ? "left" : "right") + " center") +
                  ";\n        }")
              : (m =
                  "from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d(" +
                  (v ? (n ? "-" : "") + "1000px" : "0") +
                  ", " +
                  (h ? (r || s ? "-" : "") + "1000px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(" +
                  (v ? (a ? "-" : "") + "10px" : "0") +
                  ", " +
                  (h ? (i || o ? "-" : "") + "60px" : "0") +
                  ", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }")
            : (m =
                (e ? "to" : "from") +
                " {opacity: 0; transform: scale3d(.1, .1, .1);} " +
                (e ? "from" : "to") +
                " { opacity: 1; transform: none;}"),
          (p[u] = (0, c.animation)(m)),
          p[u]
        );
      }
      function r() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : c.defaults,
          t = e.children,
          n = (e.out, e.forever),
          r = e.timeout,
          s = e.duration,
          o = void 0 === s ? c.defaults.duration : s,
          l = e.delay,
          u = void 0 === l ? c.defaults.delay : l,
          p = e.count,
          f = void 0 === p ? c.defaults.count : p,
          v = a(e, [
            "children",
            "out",
            "forever",
            "timeout",
            "duration",
            "delay",
            "count",
          ]),
          h = {
            make: i,
            duration: void 0 === r ? o : r,
            delay: u,
            forever: n,
            count: f,
            style: { animationFillMode: "both" },
            reverse: v.left,
          };
        return (0, d.default)(v, h, h, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s,
        o = n(2007),
        l = n(6208),
        d = (s = l) && s.__esModule ? s : { default: s },
        c = n(4006),
        u = {
          out: o.bool,
          left: o.bool,
          right: o.bool,
          top: o.bool,
          bottom: o.bool,
          mirror: o.bool,
          opposite: o.bool,
          duration: o.number,
          timeout: o.number,
          delay: o.number,
          count: o.number,
          forever: o.bool,
        },
        p = {};
      (r.propTypes = u), (t.default = r), (e.exports = t.default);
    },
    4432: function () {},
    5880: function () {},
    4676: function () {},
    1660: function (e, t, n) {
      n.d(t, {
        tq: function () {
          return P;
        },
        o5: function () {
          return L;
        },
      });
      var a = n(885),
        i = n(3366);
      function r(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (0, i.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var s = n(2791),
        o = n(2558);
      function l(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : l(t[n]) && l(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : d(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function c() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          e.navigation &&
          "undefined" === typeof e.navigation.nextEl &&
          "undefined" === typeof e.navigation.prevEl
        );
      }
      function u() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && "undefined" === typeof e.pagination.el;
      }
      function p() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && "undefined" === typeof e.scrollbar.el;
      }
      function f() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var v = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopedSlidesLimit",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      var h = n(2982),
        m = function (e, t) {
          var n = t.slidesPerView;
          if (t.breakpoints) {
            var a = o.ZP.prototype.getBreakpoint(t.breakpoints),
              i = a in t.breakpoints ? t.breakpoints[a] : void 0;
            i && i.slidesPerView && (n = i.slidesPerView);
          }
          var r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return (
            (r += t.loopAdditionalSlides) > e.length &&
              t.loopedSlidesLimit &&
              (r = e.length),
            r
          );
        };
      function g(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function b(e) {
        var t = [];
        return (
          s.Children.toArray(e).forEach(function (e) {
            g(e)
              ? t.push(e)
              : e.props &&
                e.props.children &&
                b(e.props.children).forEach(function (e) {
                  return t.push(e);
                });
          }),
          t
        );
      }
      function w(e) {
        var t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          s.Children.toArray(e).forEach(function (e) {
            if (g(e)) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var a = b(e.props.children);
              a.length > 0
                ? a.forEach(function (e) {
                    return t.push(e);
                  })
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function y(e) {
        var t,
          n,
          a,
          i,
          r,
          s = e.swiper,
          o = e.slides,
          c = e.passedParams,
          u = e.changedParams,
          p = e.nextEl,
          f = e.prevEl,
          v = e.scrollbarEl,
          h = e.paginationEl,
          m = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          g = s.params,
          b = s.pagination,
          w = s.navigation,
          y = s.scrollbar,
          C = s.virtual,
          S = s.thumbs;
        u.includes("thumbs") &&
          c.thumbs &&
          c.thumbs.swiper &&
          g.thumbs &&
          !g.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            c.controller &&
            c.controller.control &&
            g.controller &&
            !g.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            c.pagination &&
            (c.pagination.el || h) &&
            (g.pagination || !1 === g.pagination) &&
            b &&
            !b.el &&
            (a = !0),
          u.includes("scrollbar") &&
            c.scrollbar &&
            (c.scrollbar.el || v) &&
            (g.scrollbar || !1 === g.scrollbar) &&
            y &&
            !y.el &&
            (i = !0),
          u.includes("navigation") &&
            c.navigation &&
            (c.navigation.prevEl || f) &&
            (c.navigation.nextEl || p) &&
            (g.navigation || !1 === g.navigation) &&
            w &&
            !w.prevEl &&
            !w.nextEl &&
            (r = !0);
        (m.forEach(function (e) {
          if (l(g[e]) && l(c[e])) d(g[e], c[e]);
          else {
            var t = c[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (g[e] = c[e])
              : !1 === t &&
                s[(n = e)] &&
                (s[n].destroy(),
                "navigation" === n
                  ? ((g[n].prevEl = void 0),
                    (g[n].nextEl = void 0),
                    (s[n].prevEl = void 0),
                    (s[n].nextEl = void 0))
                  : ((g[n].el = void 0), (s[n].el = void 0)));
          }
          var n;
        }),
        m.includes("controller") &&
          !n &&
          s.controller &&
          s.controller.control &&
          g.controller &&
          g.controller.control &&
          (s.controller.control = g.controller.control),
        u.includes("children") && o && C && g.virtual.enabled
          ? ((C.slides = o), C.update(!0))
          : u.includes("children") &&
            s.lazy &&
            s.params.lazy.enabled &&
            s.lazy.load(),
        t) &&
          S.init() &&
          S.update(!0);
        n && (s.controller.control = g.controller.control),
          a && (h && (g.pagination.el = h), b.init(), b.render(), b.update()),
          i &&
            (v && (g.scrollbar.el = v),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          r &&
            (p && (g.navigation.nextEl = p),
            f && (g.navigation.prevEl = f),
            w.init(),
            w.update()),
          u.includes("allowSlideNext") && (s.allowSlideNext = c.allowSlideNext),
          u.includes("allowSlidePrev") && (s.allowSlidePrev = c.allowSlidePrev),
          u.includes("direction") && s.changeDirection(c.direction, !1),
          s.update();
      }
      var C = n(4942);
      function S(e, t) {
        return "undefined" === typeof window
          ? (0, s.useEffect)(e, t)
          : (0, s.useLayoutEffect)(e, t);
      }
      var E = (0, s.createContext)(null),
        T = (0, s.createContext)(null),
        x = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      var P = (0, s.forwardRef)(function (e, t) {
        var n = void 0 === e ? {} : e,
          i = n.className,
          g = n.tag,
          b = void 0 === g ? "div" : g,
          E = n.wrapperTag,
          P = void 0 === E ? "div" : E,
          M = n.children,
          O = n.onSwiper,
          L = r(n, x),
          _ = !1,
          z = (0, s.useState)("swiper"),
          A = (0, a.Z)(z, 2),
          I = A[0],
          D = A[1],
          N = (0, s.useState)(null),
          G = (0, a.Z)(N, 2),
          B = G[0],
          $ = G[1],
          j = (0, s.useState)(!1),
          H = (0, a.Z)(j, 2),
          F = H[0],
          V = H[1],
          R = (0, s.useRef)(!1),
          W = (0, s.useRef)(null),
          q = (0, s.useRef)(null),
          Z = (0, s.useRef)(null),
          X = (0, s.useRef)(null),
          Y = (0, s.useRef)(null),
          K = (0, s.useRef)(null),
          U = (0, s.useRef)(null),
          J = (0, s.useRef)(null),
          Q = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = { on: {} },
              a = {},
              i = {};
            d(n, o.ZP.defaults),
              d(n, o.ZP.extendedDefaults),
              (n._emitClasses = !0),
              (n.init = !1);
            var r = {},
              s = v.map(function (e) {
                return e.replace(/_/, "");
              }),
              c = Object.assign({}, e);
            return (
              Object.keys(c).forEach(function (o) {
                "undefined" !== typeof e[o] &&
                  (s.indexOf(o) >= 0
                    ? l(e[o])
                      ? ((n[o] = {}), (i[o] = {}), d(n[o], e[o]), d(i[o], e[o]))
                      : ((n[o] = e[o]), (i[o] = e[o]))
                    : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                    ? t
                      ? (a["".concat(o[2].toLowerCase()).concat(o.substr(3))] =
                          e[o])
                      : (n.on[
                          "".concat(o[2].toLowerCase()).concat(o.substr(3))
                        ] = e[o])
                    : (r[o] = e[o]));
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
              }),
              { params: n, passedParams: i, rest: r, events: a }
            );
          })(L),
          ee = Q.params,
          te = Q.passedParams,
          ne = Q.rest,
          ae = Q.events,
          ie = w(M),
          re = ie.slides,
          se = ie.slots,
          oe = function () {
            V(!F);
          };
        Object.assign(ee.on, {
          _containerClasses: function (e, t) {
            D(t);
          },
        });
        var le = function () {
          if (
            (Object.assign(ee.on, ae),
            (_ = !0),
            (q.current = new o.ZP(ee)),
            (q.current.loopCreate = function () {}),
            (q.current.loopDestroy = function () {}),
            ee.loop && (q.current.loopedSlides = m(re, ee)),
            q.current.virtual && q.current.params.virtual.enabled)
          ) {
            q.current.virtual.slides = re;
            var e = {
              cache: !1,
              slides: re,
              renderExternal: $,
              renderExternalUpdate: !1,
            };
            d(q.current.params.virtual, e),
              d(q.current.originalParams.virtual, e);
          }
        };
        W.current || le(), q.current && q.current.on("_beforeBreakpoint", oe);
        return (
          (0, s.useEffect)(function () {
            return function () {
              q.current && q.current.off("_beforeBreakpoint", oe);
            };
          }),
          (0, s.useEffect)(function () {
            !R.current &&
              q.current &&
              (q.current.emitSlidesClasses(), (R.current = !0));
          }),
          S(function () {
            if ((t && (t.current = W.current), W.current))
              return (
                q.current.destroyed && le(),
                (function (e, t) {
                  var n = e.el,
                    a = e.nextEl,
                    i = e.prevEl,
                    r = e.paginationEl,
                    s = e.scrollbarEl,
                    o = e.swiper;
                  c(t) &&
                    a &&
                    i &&
                    ((o.params.navigation.nextEl = a),
                    (o.originalParams.navigation.nextEl = a),
                    (o.params.navigation.prevEl = i),
                    (o.originalParams.navigation.prevEl = i)),
                    u(t) &&
                      r &&
                      ((o.params.pagination.el = r),
                      (o.originalParams.pagination.el = r)),
                    p(t) &&
                      s &&
                      ((o.params.scrollbar.el = s),
                      (o.originalParams.scrollbar.el = s)),
                    o.init(n);
                })(
                  {
                    el: W.current,
                    nextEl: Y.current,
                    prevEl: K.current,
                    paginationEl: U.current,
                    scrollbarEl: J.current,
                    swiper: q.current,
                  },
                  ee
                ),
                O && O(q.current),
                function () {
                  q.current &&
                    !q.current.destroyed &&
                    q.current.destroy(!0, !1);
                }
              );
          }, []),
          S(function () {
            !_ &&
              ae &&
              q.current &&
              Object.keys(ae).forEach(function (e) {
                q.current.on(e, ae[e]);
              });
            var e = (function (e, t, n, a, i) {
              var r = [];
              if (!t) return r;
              var s = function (e) {
                r.indexOf(e) < 0 && r.push(e);
              };
              if (n && a) {
                var o = a.map(i),
                  d = n.map(i);
                o.join("") !== d.join("") && s("children"),
                  a.length !== n.length && s("children");
              }
              return (
                v
                  .filter(function (e) {
                    return "_" === e[0];
                  })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (l(e[n]) && l(t[n])) {
                        var a = Object.keys(e[n]),
                          i = Object.keys(t[n]);
                        a.length !== i.length
                          ? s(n)
                          : (a.forEach(function (a) {
                              e[n][a] !== t[n][a] && s(n);
                            }),
                            i.forEach(function (a) {
                              e[n][a] !== t[n][a] && s(n);
                            }));
                      } else e[n] !== t[n] && s(n);
                  }),
                r
              );
            })(te, Z.current, re, X.current, function (e) {
              return e.key;
            });
            return (
              (Z.current = te),
              (X.current = re),
              e.length &&
                q.current &&
                !q.current.destroyed &&
                y({
                  swiper: q.current,
                  slides: re,
                  passedParams: te,
                  changedParams: e,
                  nextEl: Y.current,
                  prevEl: K.current,
                  scrollbarEl: J.current,
                  paginationEl: U.current,
                }),
              function () {
                ae &&
                  q.current &&
                  Object.keys(ae).forEach(function (e) {
                    q.current.off(e, ae[e]);
                  });
              }
            );
          }),
          S(
            function () {
              var e;
              !(e = q.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [B]
          ),
          s.createElement(
            b,
            k(
              {
                ref: W,
                className: f("".concat(I).concat(i ? " ".concat(i) : "")),
              },
              ne
            ),
            s.createElement(
              T.Provider,
              { value: q.current },
              se["container-start"],
              s.createElement(
                P,
                { className: "swiper-wrapper" },
                se["wrapper-start"],
                ee.virtual
                  ? (function (e, t, n) {
                      if (!n) return null;
                      var a = e.isHorizontal()
                        ? (0, C.Z)(
                            {},
                            e.rtlTranslate ? "right" : "left",
                            "".concat(n.offset, "px")
                          )
                        : { top: "".concat(n.offset, "px") };
                      return t
                        .filter(function (e, t) {
                          return t >= n.from && t <= n.to;
                        })
                        .map(function (t) {
                          return s.cloneElement(t, { swiper: e, style: a });
                        });
                    })(q.current, re, B)
                  : !ee.loop || (q.current && q.current.destroyed)
                  ? re.map(function (e) {
                      return s.cloneElement(e, { swiper: q.current });
                    })
                  : (function (e, t, n) {
                      var a = t.map(function (t, n) {
                        return s.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": n,
                        });
                      });
                      function i(e, t, a) {
                        return s.cloneElement(e, {
                          key: ""
                            .concat(e.key, "-duplicate-")
                            .concat(t, "-")
                            .concat(a),
                          className: ""
                            .concat(e.props.className || "", " ")
                            .concat(n.slideDuplicateClass),
                        });
                      }
                      if (n.loopFillGroupWithBlank) {
                        var r =
                          n.slidesPerGroup - (a.length % n.slidesPerGroup);
                        if (r !== n.slidesPerGroup)
                          for (var o = 0; o < r; o += 1) {
                            var l = s.createElement("div", {
                              className: ""
                                .concat(n.slideClass, " ")
                                .concat(n.slideBlankClass),
                            });
                            a.push(l);
                          }
                      }
                      "auto" !== n.slidesPerView ||
                        n.loopedSlides ||
                        (n.loopedSlides = a.length);
                      for (
                        var d = m(a, n), c = [], u = [], p = 0;
                        p < d;
                        p += 1
                      ) {
                        var f = p - Math.floor(p / a.length) * a.length;
                        u.push(i(a[f], p, "append")),
                          c.unshift(i(a[a.length - f - 1], p, "prepend"));
                      }
                      return (
                        e && (e.loopedSlides = d), [].concat(c, (0, h.Z)(a), u)
                      );
                    })(q.current, re, ee),
                se["wrapper-end"]
              ),
              c(ee) &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("div", {
                    ref: K,
                    className: "swiper-button-prev",
                  }),
                  s.createElement("div", {
                    ref: Y,
                    className: "swiper-button-next",
                  })
                ),
              p(ee) &&
                s.createElement("div", {
                  ref: J,
                  className: "swiper-scrollbar",
                }),
              u(ee) &&
                s.createElement("div", {
                  ref: U,
                  className: "swiper-pagination",
                }),
              se["container-end"]
            )
          )
        );
      });
      P.displayName = "Swiper";
      var M = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          O.apply(this, arguments)
        );
      }
      var L = (0, s.forwardRef)(function (e, t) {
        var n = void 0 === e ? {} : e,
          i = n.tag,
          o = void 0 === i ? "div" : i,
          l = n.children,
          d = n.className,
          c = void 0 === d ? "" : d,
          u = n.swiper,
          p = n.zoom,
          v = n.virtualIndex,
          h = r(n, M),
          m = (0, s.useRef)(null),
          g = (0, s.useState)("swiper-slide"),
          b = (0, a.Z)(g, 2),
          w = b[0],
          y = b[1];
        function C(e, t, n) {
          t === m.current && y(n);
        }
        S(function () {
          if ((t && (t.current = m.current), m.current && u)) {
            if (!u.destroyed)
              return (
                u.on("_slideClass", C),
                function () {
                  u && u.off("_slideClass", C);
                }
              );
            "swiper-slide" !== w && y("swiper-slide");
          }
        }),
          S(
            function () {
              u && m.current && !u.destroyed && y(u.getSlideClasses(m.current));
            },
            [u]
          );
        var T = {
            isActive:
              w.indexOf("swiper-slide-active") >= 0 ||
              w.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: w.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: w.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              w.indexOf("swiper-slide-prev") >= 0 ||
              w.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              w.indexOf("swiper-slide-next") >= 0 ||
              w.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          x = function () {
            return "function" === typeof l ? l(T) : l;
          };
        return s.createElement(
          o,
          O(
            {
              ref: m,
              className: f("".concat(w).concat(c ? " ".concat(c) : "")),
              "data-swiper-slide-index": v,
            },
            h
          ),
          s.createElement(
            E.Provider,
            { value: T },
            p
              ? s.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof p ? p : void 0,
                  },
                  x()
                )
              : x()
          )
        );
      });
      L.displayName = "SwiperSlide";
    },
    2558: function (e, t, n) {
      n.d(t, {
        pt: function () {
          return we;
        },
        N1: function () {
          return ve;
        },
        W_: function () {
          return me;
        },
        tl: function () {
          return be;
        },
        ZP: function () {
          return fe;
        },
      });
      var a = n(2982),
        i = n(5671),
        r = n(3144);
      function s(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function o() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : s(t[n]) &&
              s(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              o(e[n], t[n]);
        });
      }
      var l = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function d() {
        var e = "undefined" !== typeof document ? document : {};
        return o(e, l), e;
      }
      var c = {
        document: l,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function u() {
        var e = "undefined" !== typeof window ? window : {};
        return o(e, c), e;
      }
      var p = n(2963),
        f = n(7326),
        v = n(136),
        h = n(9388);
      var m = (function (e) {
        (0, v.Z)(n, e);
        var t = (0, h.Z)(n);
        function n(e) {
          var r;
          return (
            (0, i.Z)(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : ((r = t.call.apply(t, [this].concat((0, a.Z)(e || [])))),
                (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })((0, f.Z)(r))),
            (0, p.Z)(r)
          );
        }
        return (0, r.Z)(n);
      })((0, n(8737).Z)(Array));
      function g() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, (0, a.Z)(g(e))) : t.push(e);
          }),
          t
        );
      }
      function b(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function w(e, t) {
        var n = u(),
          a = d(),
          i = [];
        if (!t && e instanceof m) return e;
        if (!e) return new m(i);
        if ("string" === typeof e) {
          var r = e.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            var s = "div";
            0 === r.indexOf("<li") && (s = "ul"),
              0 === r.indexOf("<tr") && (s = "tbody"),
              (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (s = "tr"),
              0 === r.indexOf("<tbody") && (s = "table"),
              0 === r.indexOf("<option") && (s = "select");
            var o = a.createElement(s);
            o.innerHTML = r;
            for (var l = 0; l < o.childNodes.length; l += 1)
              i.push(o.childNodes[l]);
          } else
            i = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], a = t.querySelectorAll(e), i = 0;
                i < a.length;
                i += 1
              )
                n.push(a[i]);
              return n;
            })(e.trim(), t || a);
        } else if (e.nodeType || e === n || e === a) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof m) return e;
          i = e;
        }
        return new m(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      w.fn = m.prototype;
      var y = "resize scroll".split(" ");
      function C(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
            n[a] = arguments[a];
          if ("undefined" === typeof n[0]) {
            for (var i = 0; i < this.length; i += 1)
              y.indexOf(e) < 0 &&
                (e in this[i] ? this[i][e]() : w(this[i]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      C("click"),
        C("blur"),
        C("focus"),
        C("focusin"),
        C("focusout"),
        C("keyup"),
        C("keydown"),
        C("keypress"),
        C("submit"),
        C("change"),
        C("mousedown"),
        C("mousemove"),
        C("mouseup"),
        C("mouseenter"),
        C("mouseleave"),
        C("mouseout"),
        C("mouseover"),
        C("touchstart"),
        C("touchend"),
        C("touchmove"),
        C("resize"),
        C("scroll");
      var S = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var i = g(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, (0, a.Z)(i));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var i = g(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, (0, a.Z)(i));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var a = g(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            b(this, function (e) {
              return (
                a.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var a = g(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            a.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var a in e)
                (this[n][a] = e[a]), this[n].setAttribute(a, e[a]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var a = t[0],
            i = t[1],
            r = t[2],
            s = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), w(t).is(i))) r.apply(t, n);
              else
                for (var a = w(t).parents(), s = 0; s < a.length; s += 1)
                  w(a[s]).is(i) && r.apply(a[s], n);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((a = t[0]), (r = t[1]), (s = t[2]), (i = void 0)),
            s || (s = !1);
          for (var d, c = a.split(" "), u = 0; u < this.length; u += 1) {
            var p = this[u];
            if (i)
              for (d = 0; d < c.length; d += 1) {
                var f = c[d];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                  p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                  p.dom7LiveListeners[f].push({
                    listener: r,
                    proxyListener: o,
                  }),
                  p.addEventListener(f, o, s);
              }
            else
              for (d = 0; d < c.length; d += 1) {
                var v = c[d];
                p.dom7Listeners || (p.dom7Listeners = {}),
                  p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                  p.dom7Listeners[v].push({ listener: r, proxyListener: l }),
                  p.addEventListener(v, l, s);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var a = t[0],
            i = t[1],
            r = t[2],
            s = t[3];
          "function" === typeof t[1] &&
            ((a = t[0]), (r = t[1]), (s = t[2]), (i = void 0)),
            s || (s = !1);
          for (var o = a.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], c = 0; c < this.length; c += 1) {
              var u = this[c],
                p = void 0;
              if (
                (!i && u.dom7Listeners
                  ? (p = u.dom7Listeners[d])
                  : i && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
                p && p.length)
              )
                for (var f = p.length - 1; f >= 0; f -= 1) {
                  var v = p[f];
                  (r && v.listener === r) ||
                  (r &&
                    v.listener &&
                    v.listener.dom7proxy &&
                    v.listener.dom7proxy === r)
                    ? (u.removeEventListener(d, v.proxyListener, s),
                      p.splice(f, 1))
                    : r ||
                      (u.removeEventListener(d, v.proxyListener, s),
                      p.splice(f, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = u(), t = arguments.length, n = new Array(t), a = 0;
            a < t;
            a++
          )
            n[a] = arguments[a];
          for (var i = n[0].split(" "), r = n[1], s = 0; s < i.length; s += 1)
            for (var o = i[s], l = 0; l < this.length; l += 1) {
              var d = this[l];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(o, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0,
                });
                (d.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  d.dispatchEvent(c),
                  (d.dom7EventData = []),
                  delete d.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(a) {
                a.target === this &&
                  (e.call(this, a), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = u();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = u(),
              t = d(),
              n = this[0],
              a = n.getBoundingClientRect(),
              i = t.body,
              r = n.clientTop || i.clientTop || 0,
              s = n.clientLeft || i.clientLeft || 0,
              o = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: a.top + o - r, left: a.left + l - s };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            a = u();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var i in e) this[n].style[i] = e[i];
              return this;
            }
            if (this[0])
              return a.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            a = u(),
            i = d(),
            r = this[0];
          if (!r || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (t = w(e), n = 0; n < t.length; n += 1)
              if (t[n] === r) return !0;
            return !1;
          }
          if (e === i) return r === i;
          if (e === a) return r === a;
          if (e.nodeType || e instanceof m) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === r) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return w([]);
          if (e < 0) {
            var n = t + e;
            return w(n < 0 ? [] : [this[n]]);
          }
          return w([this[e]]);
        },
        append: function () {
          for (var e, t = d(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var a = 0; a < this.length; a += 1)
              if ("string" === typeof e) {
                var i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild; )
                  this[a].appendChild(i.firstChild);
              } else if (e instanceof m)
                for (var r = 0; r < e.length; r += 1) this[a].appendChild(e[r]);
              else this[a].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            a = d();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var i = a.createElement("div");
              for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof m)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                w(this[0].nextElementSibling).is(e)
                ? w([this[0].nextElementSibling])
                : w([])
              : this[0].nextElementSibling
              ? w([this[0].nextElementSibling])
              : w([])
            : w([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return w([]);
          for (; n.nextElementSibling; ) {
            var a = n.nextElementSibling;
            e ? w(a).is(e) && t.push(a) : t.push(a), (n = a);
          }
          return w(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && w(t.previousElementSibling).is(e)
                ? w([t.previousElementSibling])
                : w([])
              : t.previousElementSibling
              ? w([t.previousElementSibling])
              : w([]);
          }
          return w([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return w([]);
          for (; n.previousElementSibling; ) {
            var a = n.previousElementSibling;
            e ? w(a).is(e) && t.push(a) : t.push(a), (n = a);
          }
          return w(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? w(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return w(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var a = this[n].parentNode; a; )
              e ? w(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
          return w(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? w([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var a = this[n].querySelectorAll(e), i = 0;
              i < a.length;
              i += 1
            )
              t.push(a[i]);
          return w(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var a = this[n].children, i = 0; i < a.length; i += 1)
              (e && !w(a[i]).is(e)) || t.push(a[i]);
          return w(t);
        },
        filter: function (e) {
          return w(b(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(S).forEach(function (e) {
        Object.defineProperty(w.fn, e, { value: S[e], writable: !0 });
      });
      var E,
        T,
        x,
        k = w,
        P = n(4942);
      function M(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (n) {}
          try {
            delete t[e];
          } catch (n) {}
        });
      }
      function O(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return setTimeout(e, t);
      }
      function L() {
        return Date.now();
      }
      function _(e) {
        var t,
          n = u();
        return (
          n.getComputedStyle && (t = n.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        );
      }
      function z(e) {
        var t,
          n,
          a,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "x",
          r = u(),
          s = _(e);
        return (
          r.WebKitCSSMatrix
            ? ((n = s.transform || s.webkitTransform).split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (a = new r.WebKitCSSMatrix("none" === n ? "" : n)))
            : (t = (a =
                s.MozTransform ||
                s.OTransform ||
                s.MsTransform ||
                s.msTransform ||
                s.transform ||
                s
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === i &&
            (n = r.WebKitCSSMatrix
              ? a.m41
              : 16 === t.length
              ? parseFloat(t[12])
              : parseFloat(t[4])),
          "y" === i &&
            (n = r.WebKitCSSMatrix
              ? a.m42
              : 16 === t.length
              ? parseFloat(t[13])
              : parseFloat(t[5])),
          n || 0
        );
      }
      function A(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function I(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function D() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var a = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== a && null !== a && !I(a))
            for (
              var i = Object.keys(Object(a)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                r = 0,
                s = i.length;
              r < s;
              r += 1
            ) {
              var o = i[r],
                l = Object.getOwnPropertyDescriptor(a, o);
              void 0 !== l &&
                l.enumerable &&
                (A(e[o]) && A(a[o])
                  ? a[o].__swiper__
                    ? (e[o] = a[o])
                    : D(e[o], a[o])
                  : !A(e[o]) && A(a[o])
                  ? ((e[o] = {}),
                    a[o].__swiper__ ? (e[o] = a[o]) : D(e[o], a[o]))
                  : (e[o] = a[o]));
            }
        }
        return e;
      }
      function N(e, t, n) {
        e.style.setProperty(t, n);
      }
      function G(e) {
        var t,
          n = e.swiper,
          a = e.targetPosition,
          i = e.side,
          r = u(),
          s = -n.translate,
          o = null,
          l = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(n.cssModeFrameID);
        var d = a > s ? "next" : "prev",
          c = function (e, t) {
            return ("next" === d && e >= t) || ("prev" === d && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === o && (o = t);
          var d = Math.max(Math.min((t - o) / l, 1), 0),
            u = 0.5 - Math.cos(d * Math.PI) / 2,
            p = s + u * (a - s);
          if (
            (c(p, a) && (p = a),
            n.wrapperEl.scrollTo((0, P.Z)({}, i, p)),
            c(p, a))
          )
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo((0, P.Z)({}, i, p));
              }),
              void r.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = r.requestAnimationFrame(e);
        })();
      }
      function B() {
        return (
          E ||
            (E = (function () {
              var e = u(),
                t = d();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (a) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          E
        );
      }
      function $() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.userAgent,
          n = B(),
          a = u(),
          i = a.navigator.platform,
          r = t || a.navigator.userAgent,
          s = { ios: !1, android: !1 },
          o = a.screen.width,
          l = a.screen.height,
          d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          c = r.match(/(iPad).*OS\s([\d_]+)/),
          p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === i,
          h = "MacIntel" === i,
          m = [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810",
          ];
        return (
          !c &&
            h &&
            n.touch &&
            m.indexOf("".concat(o, "x").concat(l)) >= 0 &&
            ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]),
            (h = !1)),
          d && !v && ((s.os = "android"), (s.android = !0)),
          (c || f || p) && ((s.os = "ios"), (s.ios = !0)),
          s
        );
      }
      function j() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return T || (T = $(e)), T;
      }
      function H() {
        return (
          x ||
            (x = (function () {
              var e = u();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          x
        );
      }
      var F = {
        on: function (e, t, n) {
          var a = this;
          if (!a.eventsListeners || a.destroyed) return a;
          if ("function" !== typeof t) return a;
          var i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t);
            }),
            a
          );
        },
        once: function (e, t, n) {
          var a = this;
          if (!a.eventsListeners || a.destroyed) return a;
          if ("function" !== typeof t) return a;
          function i() {
            a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            t.apply(a, r);
          }
          return (i.__emitterProxy = t), a.on(e, i, n);
        },
        onAny: function (e, t) {
          var n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          var a = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[a](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (a, i) {
                      (a === t ||
                        (a.__emitterProxy && a.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if (!i.eventsListeners) return i;
          for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
            s[o] = arguments[o];
          "string" === typeof s[0] || Array.isArray(s[0])
            ? ((e = s[0]), (t = s.slice(1, s.length)), (n = i))
            : ((e = s[0].events), (t = s[0].data), (n = s[0].context || i)),
            t.unshift(n);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(n, [e].concat((0, a.Z)(t)));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            i
          );
        },
      };
      var V = {
        updateSize: function () {
          var e,
            t,
            n = this,
            a = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : a[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : a[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(a.css("padding-left") || 0, 10) -
                parseInt(a.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(a.css("padding-top") || 0, 10) -
                parseInt(a.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var a = e.params,
            i = e.$wrapperEl,
            r = e.size,
            s = e.rtlTranslate,
            o = e.wrongRTL,
            l = e.virtual && a.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = i.children(".".concat(e.params.slideClass)),
            u = l ? e.virtual.slides.length : c.length,
            p = [],
            f = [],
            v = [],
            h = a.slidesOffsetBefore;
          "function" === typeof h && (h = a.slidesOffsetBefore.call(e));
          var m = a.slidesOffsetAfter;
          "function" === typeof m && (m = a.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = a.spaceBetween,
            y = -h,
            C = 0,
            S = 0;
          if ("undefined" !== typeof r) {
            "string" === typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * r),
              (e.virtualSize = -w),
              s
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              a.centeredSlides &&
                a.cssMode &&
                (N(e.wrapperEl, "--swiper-centered-offset-before", ""),
                N(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var E,
              T = a.grid && a.grid.rows > 1 && e.grid;
            T && e.grid.initSlides(u);
            for (
              var x =
                  "auto" === a.slidesPerView &&
                  a.breakpoints &&
                  Object.keys(a.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof a.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                k = 0;
              k < u;
              k += 1
            ) {
              E = 0;
              var M = c.eq(k);
              if (
                (T && e.grid.updateSlide(k, M, u, t),
                "none" !== M.css("display"))
              ) {
                if ("auto" === a.slidesPerView) {
                  x && (c[k].style[t("width")] = "");
                  var O = getComputedStyle(M[0]),
                    L = M[0].style.transform,
                    _ = M[0].style.webkitTransform;
                  if (
                    (L && (M[0].style.transform = "none"),
                    _ && (M[0].style.webkitTransform = "none"),
                    a.roundLengths)
                  )
                    E = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
                  else {
                    var z = n(O, "width"),
                      A = n(O, "padding-left"),
                      I = n(O, "padding-right"),
                      D = n(O, "margin-left"),
                      G = n(O, "margin-right"),
                      B = O.getPropertyValue("box-sizing");
                    if (B && "border-box" === B) E = z + D + G;
                    else {
                      var $ = M[0],
                        j = $.clientWidth;
                      E = z + A + I + D + G + ($.offsetWidth - j);
                    }
                  }
                  L && (M[0].style.transform = L),
                    _ && (M[0].style.webkitTransform = _),
                    a.roundLengths && (E = Math.floor(E));
                } else
                  (E = (r - (a.slidesPerView - 1) * w) / a.slidesPerView),
                    a.roundLengths && (E = Math.floor(E)),
                    c[k] && (c[k].style[t("width")] = "".concat(E, "px"));
                c[k] && (c[k].swiperSlideSize = E),
                  v.push(E),
                  a.centeredSlides
                    ? ((y = y + E / 2 + C / 2 + w),
                      0 === C && 0 !== k && (y = y - r / 2 - w),
                      0 === k && (y = y - r / 2 - w),
                      Math.abs(y) < 0.001 && (y = 0),
                      a.roundLengths && (y = Math.floor(y)),
                      S % a.slidesPerGroup === 0 && p.push(y),
                      f.push(y))
                    : (a.roundLengths && (y = Math.floor(y)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ===
                        0 && p.push(y),
                      f.push(y),
                      (y = y + E + w)),
                  (e.virtualSize += E + w),
                  (C = E),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + m),
              s &&
                o &&
                ("slide" === a.effect || "coverflow" === a.effect) &&
                i.css({
                  width: "".concat(e.virtualSize + a.spaceBetween, "px"),
                }),
              a.setWrapperSize &&
                i.css(
                  (0, P.Z)(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + a.spaceBetween, "px")
                  )
                ),
              T && e.grid.updateWrapperSize(E, p, t),
              !a.centeredSlides)
            ) {
              for (var H = [], F = 0; F < p.length; F += 1) {
                var V = p[F];
                a.roundLengths && (V = Math.floor(V)),
                  p[F] <= e.virtualSize - r && H.push(V);
              }
              (p = H),
                Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - r);
            }
            if ((0 === p.length && (p = [0]), 0 !== a.spaceBetween)) {
              var R = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !a.cssMode || t !== c.length - 1;
              }).css((0, P.Z)({}, R, "".concat(w, "px")));
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
              var W = 0;
              v.forEach(function (e) {
                W += e + (a.spaceBetween ? a.spaceBetween : 0);
              });
              var q = (W -= a.spaceBetween) - r;
              p = p.map(function (e) {
                return e < 0 ? -h : e > q ? q + m : e;
              });
            }
            if (a.centerInsufficientSlides) {
              var Z = 0;
              if (
                (v.forEach(function (e) {
                  Z += e + (a.spaceBetween ? a.spaceBetween : 0);
                }),
                (Z -= a.spaceBetween) < r)
              ) {
                var X = (r - Z) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - X;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + X;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: v,
              }),
              a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
            ) {
              N(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-p[0], "px")
              ),
                N(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - v[v.length - 1] / 2, "px")
                );
              var Y = -e.snapGrid[0],
                K = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Y;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + K;
                }));
            }
            if (
              (u !== d && e.emit("slidesLengthChange"),
              p.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              f.length !== b && e.emit("slidesGridLengthChange"),
              a.watchSlidesProgress && e.updateSlidesOffset(),
              !l && !a.cssMode && ("slide" === a.effect || "fade" === a.effect))
            ) {
              var U = "".concat(a.containerModifierClass, "backface-hidden"),
                J = e.$el.hasClass(U);
              u <= a.maxBackfaceHiddenSlides
                ? J || e.$el.addClass(U)
                : J && e.$el.removeClass(U);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            a = [],
            i = n.virtual && n.params.virtual.enabled,
            r = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var s = function (e) {
            return i
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              (n.visibleSlides || k([])).each(function (e) {
                a.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var o = n.activeIndex + t;
                if (o > n.slides.length && !i) break;
                a.push(s(o));
              }
          else a.push(s(n.activeIndex));
          for (t = 0; t < a.length; t += 1)
            if ("undefined" !== typeof a[t]) {
              var l = a[t].offsetHeight;
              r = l > r ? l : r;
            }
          (r || 0 === r) && n.$wrapperEl.css("height", "".concat(r, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (this && this.translate) || 0,
            t = this,
            n = t.params,
            a = t.slides,
            i = t.rtlTranslate,
            r = t.snapGrid;
          if (0 !== a.length) {
            "undefined" === typeof a[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var s = -e;
            i && (s = e),
              a.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < a.length; o += 1) {
              var l = a[o],
                d = l.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (d -= a[0].swiperSlideOffset);
              var c =
                  (s + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + n.spaceBetween),
                u =
                  (s - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + n.spaceBetween),
                p = -(s - d),
                f = p + t.slidesSizesGrid[o],
                v =
                  (p >= 0 && p < t.size - 1) ||
                  (f > 1 && f <= t.size) ||
                  (p <= 0 && f >= t.size);
              v &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(o),
                a.eq(o).addClass(n.slideVisibleClass)),
                (l.progress = i ? -c : c),
                (l.originalProgress = i ? -u : u);
            }
            t.visibleSlides = k(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var a = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            s = t.isBeginning,
            o = t.isEnd,
            l = s,
            d = o;
          0 === i
            ? ((r = 0), (s = !0), (o = !0))
            : ((s = (r = (e - t.minTranslate()) / i) <= 0), (o = r >= 1)),
            Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
            (a.watchSlidesProgress || (a.centeredSlides && a.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !l && t.emit("reachBeginning toEdge"),
            o && !d && t.emit("reachEnd toEdge"),
            ((l && !s) || (d && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            a = t.params,
            i = t.$wrapperEl,
            r = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && a.virtual.enabled;
          n.removeClass(
            ""
              .concat(a.slideActiveClass, " ")
              .concat(a.slideNextClass, " ")
              .concat(a.slidePrevClass, " ")
              .concat(a.slideDuplicateActiveClass, " ")
              .concat(a.slideDuplicateNextClass, " ")
              .concat(a.slideDuplicatePrevClass)
          ),
            (e = o
              ? t.$wrapperEl.find(
                  "."
                    .concat(a.slideClass, '[data-swiper-slide-index="')
                    .concat(r, '"]')
                )
              : n.eq(r)).addClass(a.slideActiveClass),
            a.loop &&
              (e.hasClass(a.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(a.slideClass, ":not(.")
                        .concat(
                          a.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(a.slideDuplicateActiveClass)
                : i
                    .children(
                      "."
                        .concat(a.slideClass, ".")
                        .concat(
                          a.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(a.slideDuplicateActiveClass));
          var l = e
            .nextAll(".".concat(a.slideClass))
            .eq(0)
            .addClass(a.slideNextClass);
          a.loop && 0 === l.length && (l = n.eq(0)).addClass(a.slideNextClass);
          var d = e
            .prevAll(".".concat(a.slideClass))
            .eq(0)
            .addClass(a.slidePrevClass);
          a.loop && 0 === d.length && (d = n.eq(-1)).addClass(a.slidePrevClass),
            a.loop &&
              (l.hasClass(a.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(a.slideClass, ":not(.")
                        .concat(
                          a.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(a.slideDuplicateNextClass)
                : i
                    .children(
                      "."
                        .concat(a.slideClass, ".")
                        .concat(
                          a.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(a.slideDuplicateNextClass),
              d.hasClass(a.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(a.slideClass, ":not(.")
                        .concat(
                          a.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(a.slideDuplicatePrevClass)
                : i
                    .children(
                      "."
                        .concat(a.slideClass, ".")
                        .concat(
                          a.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(a.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            a = n.rtlTranslate ? n.translate : -n.translate,
            i = n.slidesGrid,
            r = n.snapGrid,
            s = n.params,
            o = n.activeIndex,
            l = n.realIndex,
            d = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var u = 0; u < i.length; u += 1)
              "undefined" !== typeof i[u + 1]
                ? a >= i[u] && a < i[u + 1] - (i[u + 1] - i[u]) / 2
                  ? (c = u)
                  : a >= i[u] && a < i[u + 1] && (c = u + 1)
                : a >= i[u] && (c = u);
            s.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (r.indexOf(a) >= 0) t = r.indexOf(a);
          else {
            var p = Math.min(s.slidesPerGroupSkip, c);
            t = p + Math.floor((c - p) / s.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), c !== o)) {
            var f = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: f,
              previousIndex: o,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              l !== f && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== d && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            a = n.params,
            i = k(e).closest(".".concat(a.slideClass))[0],
            r = !1;
          if (i)
            for (var s = 0; s < n.slides.length; s += 1)
              if (n.slides[s] === i) {
                (r = !0), (t = s);
                break;
              }
          if (!i || !r)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = i),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  k(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            a.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var R = {
        getTranslate: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.isHorizontal()
                ? "x"
                : "y",
            t = this,
            n = t.params,
            a = t.rtlTranslate,
            i = t.translate,
            r = t.$wrapperEl;
          if (n.virtualTranslate) return a ? -i : i;
          if (n.cssMode) return i;
          var s = z(r[0], e);
          return a && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            a = n.rtlTranslate,
            i = n.params,
            r = n.$wrapperEl,
            s = n.wrapperEl,
            o = n.progress,
            l = 0,
            d = 0;
          n.isHorizontal() ? (l = a ? -e : e) : (d = e),
            i.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
            i.cssMode
              ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -l : -d)
              : i.virtualTranslate ||
                r.transform(
                  "translate3d("
                    .concat(l, "px, ")
                    .concat(d, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : d);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== o &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            i = arguments.length > 4 ? arguments[4] : void 0,
            r = this,
            s = r.params,
            o = r.wrapperEl;
          if (r.animating && s.preventInteractionOnTransition) return !1;
          var l,
            d = r.minTranslate(),
            c = r.maxTranslate();
          if (
            ((l = a && e > d ? d : a && e < c ? c : e),
            r.updateProgress(l),
            s.cssMode)
          ) {
            var u = r.isHorizontal();
            if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
            else {
              var p;
              if (!r.support.smoothScroll)
                return (
                  G({
                    swiper: r,
                    targetPosition: -l,
                    side: u ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo(
                ((p = {}),
                (0, P.Z)(p, u ? "left" : "top", -l),
                (0, P.Z)(p, "behavior", "smooth"),
                p)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(l),
                n &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(l),
                n &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        n && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function W(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          a = e.direction,
          i = e.step,
          r = t.activeIndex,
          s = t.previousIndex,
          o = a;
        if (
          (o || (o = r > s ? "next" : r < s ? "prev" : "reset"),
          t.emit("transition".concat(i)),
          n && r !== s)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(i));
          t.emit("slideChangeTransition".concat(i)),
            "next" === o
              ? t.emit("slideNextTransition".concat(i))
              : t.emit("slidePrevTransition".concat(i));
        }
      }
      var q = {
        setTransition: function (e, t) {
          var n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = this,
            a = n.params;
          a.cssMode ||
            (a.autoHeight && n.updateAutoHeight(),
            W({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = this,
            a = n.params;
          (n.animating = !1),
            a.cssMode ||
              (n.setTransition(0),
              W({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      };
      var Z = {
        slideTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" !== typeof e && "string" !== typeof e)
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var r = parseInt(e, 10),
              s = isFinite(r);
            if (!s)
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = r;
          }
          var o = this,
            l = e;
          l < 0 && (l = 0);
          var d = o.params,
            c = o.snapGrid,
            u = o.slidesGrid,
            p = o.previousIndex,
            f = o.activeIndex,
            v = o.rtlTranslate,
            h = o.wrapperEl,
            m = o.enabled;
          if (
            (o.animating && d.preventInteractionOnTransition) ||
            (!m && !a && !i)
          )
            return !1;
          var g = Math.min(o.params.slidesPerGroupSkip, l),
            b = g + Math.floor((l - g) / o.params.slidesPerGroup);
          b >= c.length && (b = c.length - 1);
          var w,
            y = -c[b];
          if (d.normalizeSlideIndex)
            for (var C = 0; C < u.length; C += 1) {
              var S = -Math.floor(100 * y),
                E = Math.floor(100 * u[C]),
                T = Math.floor(100 * u[C + 1]);
              "undefined" !== typeof u[C + 1]
                ? S >= E && S < T - (T - E) / 2
                  ? (l = C)
                  : S >= E && S < T && (l = C + 1)
                : S >= E && (l = C);
            }
          if (o.initialized && l !== f) {
            if (!o.allowSlideNext && y < o.translate && y < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              y > o.translate &&
              y > o.maxTranslate() &&
              (f || 0) !== l
            )
              return !1;
          }
          if (
            (l !== (p || 0) && n && o.emit("beforeSlideChangeStart"),
            o.updateProgress(y),
            (w = l > f ? "next" : l < f ? "prev" : "reset"),
            (v && -y === o.translate) || (!v && y === o.translate))
          )
            return (
              o.updateActiveIndex(l),
              d.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== d.effect && o.setTranslate(y),
              "reset" !== w && (o.transitionStart(n, w), o.transitionEnd(n, w)),
              !1
            );
          if (d.cssMode) {
            var x = o.isHorizontal(),
              k = v ? y : -y;
            if (0 === t) {
              var M = o.virtual && o.params.virtual.enabled;
              M &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                (h[x ? "scrollLeft" : "scrollTop"] = k),
                M &&
                  requestAnimationFrame(function () {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              var O;
              if (!o.support.smoothScroll)
                return (
                  G({ swiper: o, targetPosition: k, side: x ? "left" : "top" }),
                  !0
                );
              h.scrollTo(
                ((O = {}),
                (0, P.Z)(O, x ? "left" : "top", k),
                (0, P.Z)(O, "behavior", "smooth"),
                O)
              );
            }
            return !0;
          }
          return (
            o.setTransition(t),
            o.setTranslate(y),
            o.updateActiveIndex(l),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, a),
            o.transitionStart(n, w),
            0 === t
              ? o.transitionEnd(n, w)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(n, w));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" === typeof e) {
            var i = parseInt(e, 10),
              r = isFinite(i);
            if (!r)
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var s = this,
            o = e;
          return s.params.loop && (o += s.loopedSlides), s.slideTo(o, t, n, a);
        },
        slideNext: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = this,
            i = a.animating,
            r = a.enabled,
            s = a.params;
          if (!r) return a;
          var o = s.slidesPerGroup;
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            (o = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          var l = a.activeIndex < s.slidesPerGroupSkip ? 1 : o;
          if (s.loop) {
            if (i && s.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return s.rewind && a.isEnd
            ? a.slideTo(0, e, t, n)
            : a.slideTo(a.activeIndex + l, e, t, n);
        },
        slidePrev: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = this,
            i = a.params,
            r = a.animating,
            s = a.snapGrid,
            o = a.slidesGrid,
            l = a.rtlTranslate,
            d = a.enabled;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          var c = l ? a.translate : -a.translate;
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p,
            f = u(c),
            v = s.map(function (e) {
              return u(e);
            }),
            h = s[v.indexOf(f) - 1];
          "undefined" === typeof h &&
            i.cssMode &&
            (s.forEach(function (e, t) {
              f >= e && (p = t);
            }),
            "undefined" !== typeof p && (h = s[p > 0 ? p - 1 : p]));
          var m = 0;
          if (
            ("undefined" !== typeof h &&
              ((m = o.indexOf(h)) < 0 && (m = a.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            i.rewind && a.isBeginning)
          ) {
            var g =
              a.params.virtual && a.params.virtual.enabled && a.virtual
                ? a.virtual.slides.length - 1
                : a.slides.length - 1;
            return a.slideTo(g, e, t, n);
          }
          return a.slideTo(m, e, t, n);
        },
        slideReset: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = this;
          return a.slideTo(a.activeIndex, e, t, n);
        },
        slideToClosest: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            i = this,
            r = i.activeIndex,
            s = Math.min(i.params.slidesPerGroupSkip, r),
            o = s + Math.floor((r - s) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            var d = i.snapGrid[o],
              c = i.snapGrid[o + 1];
            l - d > (c - d) * a && (r += i.params.slidesPerGroup);
          } else {
            var u = i.snapGrid[o - 1],
              p = i.snapGrid[o];
            l - u <= (p - u) * a && (r -= i.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, i.slidesGrid.length - 1)),
            i.slideTo(r, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            a = t.$wrapperEl,
            i =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            r = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              k(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? r < t.loopedSlides - i / 2 ||
                  r > t.slides.length - t.loopedSlides + i / 2
                  ? (t.loopFix(),
                    (r = a
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    O(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - i
                ? (t.loopFix(),
                  (r = a
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  O(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      };
      var X = {
        loopCreate: function () {
          var e = this,
            t = d(),
            n = e.params,
            a = e.$wrapperEl,
            i = a.children().length > 0 ? k(a.children()[0].parentNode) : a;
          i.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var r = i.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var s = n.slidesPerGroup - (r.length % n.slidesPerGroup);
            if (s !== n.slidesPerGroup) {
              for (var o = 0; o < s; o += 1) {
                var l = k(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                i.append(l);
              }
              r = i.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > r.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = r.length);
          var c = [],
            u = [];
          r.each(function (e, t) {
            k(e).attr("data-swiper-slide-index", t);
          });
          for (var p = 0; p < e.loopedSlides; p += 1) {
            var f = p - Math.floor(p / r.length) * r.length;
            u.push(r.eq(f)[0]), c.unshift(r.eq(r.length - f - 1)[0]);
          }
          for (var v = 0; v < u.length; v += 1)
            i.append(k(u[v].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var h = c.length - 1; h >= 0; h -= 1)
            i.prepend(k(c[h].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            a = e.slides,
            i = e.loopedSlides,
            r = e.allowSlidePrev,
            s = e.allowSlideNext,
            o = e.snapGrid,
            l = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -o[n] - e.getTranslate();
          if (n < i)
            (t = a.length - 3 * i + n),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          else if (n >= a.length - i) {
            (t = -a.length + n + i),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            a = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            a.removeAttr("data-swiper-slide-index");
        },
      };
      function Y(e) {
        var t = this,
          n = d(),
          a = u(),
          i = t.touchEventsData,
          r = t.params,
          s = t.touches;
        if (t.enabled && (!t.animating || !r.preventInteractionOnTransition)) {
          !t.animating && r.cssMode && r.loop && t.loopFix();
          var o = e;
          o.originalEvent && (o = o.originalEvent);
          var l = k(o.target);
          if (
            ("wrapper" !== r.touchEventsTarget ||
              l.closest(t.wrapperEl).length) &&
            ((i.isTouchEvent = "touchstart" === o.type),
            (i.isTouchEvent || !("which" in o) || 3 !== o.which) &&
              !(!i.isTouchEvent && "button" in o && o.button > 0) &&
              (!i.isTouched || !i.isMoved))
          ) {
            var c = !!r.noSwipingClass && "" !== r.noSwipingClass,
              p = e.composedPath ? e.composedPath() : e.path;
            c && o.target && o.target.shadowRoot && p && (l = k(p[0]));
            var f = r.noSwipingSelector
                ? r.noSwipingSelector
                : ".".concat(r.noSwipingClass),
              v = !(!o.target || !o.target.shadowRoot);
            if (
              r.noSwiping &&
              (v
                ? (function (e) {
                    function t(n) {
                      if (!n || n === d() || n === u()) return null;
                      n.assignedSlot && (n = n.assignedSlot);
                      var a = n.closest(e);
                      return a || n.getRootNode
                        ? a || t(n.getRootNode().host)
                        : null;
                    }
                    return t(
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this
                    );
                  })(f, l[0])
                : l.closest(f)[0])
            )
              t.allowClick = !0;
            else if (!r.swipeHandler || l.closest(r.swipeHandler)[0]) {
              (s.currentX =
                "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                (s.currentY =
                  "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
              var h = s.currentX,
                m = s.currentY,
                g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
              if (g && (h <= b || h >= a.innerWidth - b)) {
                if ("prevent" !== g) return;
                e.preventDefault();
              }
              if (
                (Object.assign(i, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (s.startX = h),
                (s.startY = m),
                (i.touchStartTime = L()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                r.threshold > 0 && (i.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var w = !0;
                l.is(i.focusableElements) &&
                  ((w = !1), "SELECT" === l[0].nodeName && (i.isTouched = !1)),
                  n.activeElement &&
                    k(n.activeElement).is(i.focusableElements) &&
                    n.activeElement !== l[0] &&
                    n.activeElement.blur();
                var y = w && t.allowTouchMove && r.touchStartPreventDefault;
                (!r.touchStartForcePreventDefault && !y) ||
                  l[0].isContentEditable ||
                  o.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !r.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", o);
            }
          }
        }
      }
      function K(e) {
        var t = d(),
          n = this,
          a = n.touchEventsData,
          i = n.params,
          r = n.touches,
          s = n.rtlTranslate;
        if (n.enabled) {
          var o = e;
          if ((o.originalEvent && (o = o.originalEvent), a.isTouched)) {
            if (!a.isTouchEvent || "touchmove" === o.type) {
              var l =
                  "touchmove" === o.type &&
                  o.targetTouches &&
                  (o.targetTouches[0] || o.changedTouches[0]),
                c = "touchmove" === o.type ? l.pageX : o.pageX,
                u = "touchmove" === o.type ? l.pageY : o.pageY;
              if (o.preventedByNestedSwiper)
                return (r.startX = c), void (r.startY = u);
              if (!n.allowTouchMove)
                return (
                  k(o.target).is(a.focusableElements) || (n.allowClick = !1),
                  void (
                    a.isTouched &&
                    (Object.assign(r, {
                      startX: c,
                      startY: u,
                      currentX: c,
                      currentY: u,
                    }),
                    (a.touchStartTime = L()))
                  )
                );
              if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (n.isVertical()) {
                  if (
                    (u < r.startY && n.translate <= n.maxTranslate()) ||
                    (u > r.startY && n.translate >= n.minTranslate())
                  )
                    return (a.isTouched = !1), void (a.isMoved = !1);
                } else if (
                  (c < r.startX && n.translate <= n.maxTranslate()) ||
                  (c > r.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                a.isTouchEvent &&
                t.activeElement &&
                o.target === t.activeElement &&
                k(o.target).is(a.focusableElements)
              )
                return (a.isMoved = !0), void (n.allowClick = !1);
              if (
                (a.allowTouchCallbacks && n.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1))
              ) {
                (r.currentX = c), (r.currentY = u);
                var p = r.currentX - r.startX,
                  f = r.currentY - r.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var v;
                  if ("undefined" === typeof a.isScrolling)
                    (n.isHorizontal() && r.currentY === r.startY) ||
                    (n.isVertical() && r.currentX === r.startX)
                      ? (a.isScrolling = !1)
                      : p * p + f * f >= 25 &&
                        ((v =
                          (180 * Math.atan2(Math.abs(f), Math.abs(p))) /
                          Math.PI),
                        (a.isScrolling = n.isHorizontal()
                          ? v > i.touchAngle
                          : 90 - v > i.touchAngle));
                  if (
                    (a.isScrolling && n.emit("touchMoveOpposite", o),
                    "undefined" === typeof a.startMoving &&
                      ((r.currentX === r.startX && r.currentY === r.startY) ||
                        (a.startMoving = !0)),
                    a.isScrolling)
                  )
                    a.isTouched = !1;
                  else if (a.startMoving) {
                    (n.allowClick = !1),
                      !i.cssMode && o.cancelable && o.preventDefault(),
                      i.touchMoveStopPropagation &&
                        !i.nested &&
                        o.stopPropagation(),
                      a.isMoved ||
                        (i.loop && !i.cssMode && n.loopFix(),
                        (a.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (a.allowMomentumBounce = !1),
                        !i.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", o)),
                      n.emit("sliderMove", o),
                      (a.isMoved = !0);
                    var h = n.isHorizontal() ? p : f;
                    (r.diff = h),
                      (h *= i.touchRatio),
                      s && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (a.currentTranslate = h + a.startTranslate);
                    var m = !0,
                      g = i.resistanceRatio;
                    if (
                      (i.touchReleaseOnEdges && (g = 0),
                      h > 0 && a.currentTranslate > n.minTranslate()
                        ? ((m = !1),
                          i.resistance &&
                            (a.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + a.startTranslate + h,
                                g
                              )))
                        : h < 0 &&
                          a.currentTranslate < n.maxTranslate() &&
                          ((m = !1),
                          i.resistance &&
                            (a.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - a.startTranslate - h,
                                g
                              ))),
                      m && (o.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        a.currentTranslate < a.startTranslate &&
                        (a.currentTranslate = a.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        a.currentTranslate > a.startTranslate &&
                        (a.currentTranslate = a.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (a.currentTranslate = a.startTranslate),
                      i.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > i.threshold || a.allowThresholdMove))
                        return void (a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove)
                        return (
                          (a.allowThresholdMove = !0),
                          (r.startX = r.currentX),
                          (r.startY = r.currentY),
                          (a.currentTranslate = a.startTranslate),
                          void (r.diff = n.isHorizontal()
                            ? r.currentX - r.startX
                            : r.currentY - r.startY)
                        );
                    }
                    i.followFinger &&
                      !i.cssMode &&
                      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
                        i.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        i.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(a.currentTranslate),
                      n.setTranslate(a.currentTranslate));
                  }
                }
              }
            }
          } else
            a.startMoving && a.isScrolling && n.emit("touchMoveOpposite", o);
        }
      }
      function U(e) {
        var t = this,
          n = t.touchEventsData,
          a = t.params,
          i = t.touches,
          r = t.rtlTranslate,
          s = t.slidesGrid;
        if (t.enabled) {
          var o = e;
          if (
            (o.originalEvent && (o = o.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", o),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && a.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          a.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var l,
            d = L(),
            c = d - n.touchStartTime;
          if (t.allowClick) {
            var u = o.path || (o.composedPath && o.composedPath());
            t.updateClickedSlide((u && u[0]) || o.target),
              t.emit("tap click", o),
              c < 300 &&
                d - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", o);
          }
          if (
            ((n.lastClickTime = L()),
            O(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === i.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (l = a.followFinger
              ? r
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !a.cssMode)
          )
            if (t.params.freeMode && a.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: l });
            else {
              for (
                var p = 0, f = t.slidesSizesGrid[0], v = 0;
                v < s.length;
                v += v < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
              ) {
                var h = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                "undefined" !== typeof s[v + h]
                  ? l >= s[v] &&
                    l < s[v + h] &&
                    ((p = v), (f = s[v + h] - s[v]))
                  : l >= s[v] &&
                    ((p = v), (f = s[s.length - 1] - s[s.length - 2]));
              }
              var m = null,
                g = null;
              a.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (m = 0));
              var b = (l - s[p]) / f,
                w = p < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
              if (c > a.longSwipesMs) {
                if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (b >= a.longSwipesRatio
                    ? t.slideTo(a.rewind && t.isEnd ? m : p + w)
                    : t.slideTo(p)),
                  "prev" === t.swipeDirection &&
                    (b > 1 - a.longSwipesRatio
                      ? t.slideTo(p + w)
                      : null !== g && b < 0 && Math.abs(b) > a.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(p));
              } else {
                if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (o.target === t.navigation.nextEl ||
                  o.target === t.navigation.prevEl)
                  ? o.target === t.navigation.nextEl
                    ? t.slideTo(p + w)
                    : t.slideTo(p)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== m ? m : p + w),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : p));
              }
            }
        }
      }
      function J() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var a = e.allowSlideNext,
            i = e.allowSlidePrev,
            r = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = a),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
      }
      function Q(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ee() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var a = e.maxTranslate() - e.minTranslate();
          (0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var te = !1;
      function ne() {}
      var ae = function (e, t) {
        var n = d(),
          a = e.params,
          i = e.touchEvents,
          r = e.el,
          s = e.wrapperEl,
          o = e.device,
          l = e.support,
          c = !!a.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (l.touch) {
          var f = !(
            "touchstart" !== i.start ||
            !l.passiveListener ||
            !a.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[u](i.start, e.onTouchStart, f),
            r[u](
              i.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[u](i.end, e.onTouchEnd, f),
            i.cancel && r[u](i.cancel, e.onTouchEnd, f);
        } else
          r[u](i.start, e.onTouchStart, !1),
            n[u](i.move, e.onTouchMove, c),
            n[u](i.end, e.onTouchEnd, !1);
        (a.preventClicks || a.preventClicksPropagation) &&
          r[u]("click", e.onClick, !0),
          a.cssMode && s[u]("scroll", e.onScroll),
          a.updateOnWindowResize
            ? e[p](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                J,
                !0
              )
            : e[p]("observerUpdate", J, !0);
      };
      var ie = {
          attachEvents: function () {
            var e = this,
              t = d(),
              n = e.params,
              a = e.support;
            (e.onTouchStart = Y.bind(e)),
              (e.onTouchMove = K.bind(e)),
              (e.onTouchEnd = U.bind(e)),
              n.cssMode && (e.onScroll = ee.bind(e)),
              (e.onClick = Q.bind(e)),
              a.touch &&
                !te &&
                (t.addEventListener("touchstart", ne), (te = !0)),
              ae(e, "on");
          },
          detachEvents: function () {
            ae(this, "off");
          },
        },
        re = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var se = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            a = e.loopedSlides,
            i = void 0 === a ? 0 : a,
            r = e.params,
            s = e.$el,
            o = r.breakpoints;
          if (o && (!o || 0 !== Object.keys(o).length)) {
            var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (l && e.currentBreakpoint !== l) {
              var d = (l in o ? o[l] : void 0) || e.originalParams,
                c = re(e, r),
                u = re(e, d),
                p = r.enabled;
              c && !u
                ? (s.removeClass(
                    ""
                      .concat(r.containerModifierClass, "grid ")
                      .concat(r.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  u &&
                  (s.addClass("".concat(r.containerModifierClass, "grid")),
                  ((d.grid.fill && "column" === d.grid.fill) ||
                    (!d.grid.fill && "column" === r.grid.fill)) &&
                    s.addClass(
                      "".concat(r.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                  var n = r[t] && r[t].enabled,
                    a = d[t] && d[t].enabled;
                  n && !a && e[t].disable(), !n && a && e[t].enable();
                });
              var f = d.direction && d.direction !== r.direction,
                v = r.loop && (d.slidesPerView !== r.slidesPerView || f);
              f && n && e.changeDirection(), D(e.params, d);
              var h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                p && !h ? e.disable() : !p && h && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", d),
                v &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "window",
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (e && ("container" !== t || n)) {
            var a = !1,
              i = u(),
              r = "window" === t ? i.innerHeight : n.clientHeight,
              s = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var o = 0; o < s.length; o += 1) {
              var l = s[o],
                d = l.point,
                c = l.value;
              "window" === t
                ? i.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (a = d)
                : c <= n.clientWidth && (a = d);
            }
            return a || "max";
          }
        },
      };
      var oe = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            i = e.rtl,
            r = e.$el,
            s = e.device,
            o = e.support,
            l = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (a) {
                        e[a] && n.push(t + a);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: i },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, (0, a.Z)(l)),
            r.addClass((0, a.Z)(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var le = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function de(e, t) {
        return function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = Object.keys(n)[0],
            i = n[a];
          "object" === typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
                !0 === e[a] &&
                (e[a] = { auto: !0 }),
              a in e && "enabled" in i
                ? (!0 === e[a] && (e[a] = { enabled: !0 }),
                  "object" !== typeof e[a] ||
                    "enabled" in e[a] ||
                    (e[a].enabled = !0),
                  e[a] || (e[a] = { enabled: !1 }),
                  D(t, n))
                : D(t, n))
            : D(t, n);
        };
      }
      var ce = {
          eventsEmitter: F,
          update: V,
          translate: R,
          transition: q,
          slide: Z,
          loop: X,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: ie,
          breakpoints: se,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                a = n.slidesOffsetBefore;
              if (a) {
                var i = e.slides.length - 1,
                  r = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * a;
                e.isLocked = e.size > r;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: oe,
          images: {
            loadImage: function (e, t, n, a, i, r) {
              var s,
                o = u();
              function l() {
                r && r();
              }
              k(e).parent("picture")[0] || (e.complete && i)
                ? l()
                : t
                ? (((s = new o.Image()).onload = l),
                  (s.onerror = l),
                  a && (s.sizes = a),
                  n && (s.srcset = n),
                  t && (s.src = t))
                : l();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                var a = e.imagesToLoad[n];
                e.loadImage(
                  a,
                  a.currentSrc || a.getAttribute("src"),
                  a.srcset || a.getAttribute("srcset"),
                  a.sizes || a.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        ue = {},
        pe = (function () {
          function e() {
            var t, n;
            (0, i.Z)(this, e);
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
              s[o] = arguments[o];
            if (
              (1 === s.length &&
              s[0].constructor &&
              "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
                ? (n = s[0])
                : ((t = s[0]), (n = s[1])),
              n || (n = {}),
              (n = D({}, n)),
              t && !n.el && (n.el = t),
              n.el && k(n.el).length > 1)
            ) {
              var l = [];
              return (
                k(n.el).each(function (t) {
                  var a = D({}, n, { el: t });
                  l.push(new e(a));
                }),
                l
              );
            }
            var d,
              c = this;
            ((c.__swiper__ = !0),
            (c.support = B()),
            (c.device = j({ userAgent: n.userAgent })),
            (c.browser = H()),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = (0, a.Z)(c.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (d = c.modules).push.apply(d, (0, a.Z)(n.modules));
            var u = {};
            c.modules.forEach(function (e) {
              e({
                swiper: c,
                extendParams: de(n, u),
                on: c.on.bind(c),
                once: c.once.bind(c),
                off: c.off.bind(c),
                emit: c.emit.bind(c),
              });
            });
            var p = D({}, le, u);
            return (
              (c.params = D({}, p, ue, n)),
              (c.originalParams = D({}, c.params)),
              (c.passedParams = D({}, n)),
              c.params &&
                c.params.on &&
                Object.keys(c.params.on).forEach(function (e) {
                  c.on(e, c.params.on[e]);
                }),
              c.params && c.params.onAny && c.onAny(c.params.onAny),
              (c.$ = k),
              Object.assign(c, {
                enabled: c.params.enabled,
                el: t,
                classNames: [],
                slides: k(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === c.params.direction;
                },
                isVertical: function () {
                  return "vertical" === c.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: c.params.allowSlideNext,
                allowSlidePrev: c.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (c.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (c.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    c.support.touch || !c.params.simulateTouch
                      ? c.touchEventsTouch
                      : c.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: c.params.focusableElements,
                  lastClickTime: L(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: c.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              c.emit("_swiper"),
              c.params.init && c.init(),
              c
            );
          }
          return (
            (0, r.Z)(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var a = n.minTranslate(),
                      i = (n.maxTranslate() - a) * e + a;
                    n.translateTo(i, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return t.destroyed
                      ? ""
                      : e.className
                          .split(" ")
                          .filter(function (e) {
                            return (
                              0 === e.indexOf("swiper-slide") ||
                              0 === e.indexOf(t.params.slideClass)
                            );
                          })
                          .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var a = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: a }),
                          e.emit("_slideClass", n, a);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "current",
                      t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = this,
                      a = n.params,
                      i = n.slides,
                      r = n.slidesGrid,
                      s = n.slidesSizesGrid,
                      o = n.size,
                      l = n.activeIndex,
                      d = 1;
                    if (a.centeredSlides) {
                      for (
                        var c, u = i[l].swiperSlideSize, p = l + 1;
                        p < i.length;
                        p += 1
                      )
                        i[p] &&
                          !c &&
                          ((d += 1),
                          (u += i[p].swiperSlideSize) > o && (c = !0));
                      for (var f = l - 1; f >= 0; f -= 1)
                        i[f] &&
                          !c &&
                          ((d += 1),
                          (u += i[f].swiperSlideSize) > o && (c = !0));
                    } else if ("current" === e)
                      for (var v = l + 1; v < i.length; v += 1) {
                        var h = t ? r[v] + s[v] - r[l] < o : r[v] - r[l] < o;
                        h && (d += 1);
                      }
                    else
                      for (var m = l - 1; m >= 0; m -= 1) {
                        var g = r[l] - r[m] < o;
                        g && (d += 1);
                      }
                    return d;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (a(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || a(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function a() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e) {
                    var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n = this,
                      a = n.params.direction;
                    return (
                      e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                      e === a ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(a)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "changeLanguageDirection",
                  value: function (e) {
                    var t = this;
                    (t.rtl && "rtl" === e) ||
                      (!t.rtl && "ltr" === e) ||
                      ((t.rtl = "rtl" === e),
                      (t.rtlTranslate =
                        "horizontal" === t.params.direction && t.rtl),
                      t.rtl
                        ? (t.$el.addClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "rtl"))
                        : (t.$el.removeClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "ltr")),
                      t.update());
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = k(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var a = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      i = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = k(e.shadowRoot.querySelector(a()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children
                          ? n.children(a())
                          : k(n).children(a());
                      })();
                    if (0 === i.length && t.params.createElements) {
                      var r = d().createElement("div");
                      (i = k(r)),
                        (r.className = t.params.wrapperClass),
                        n.append(r),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            i.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n = this,
                      a = n.params,
                      i = n.$el,
                      r = n.$wrapperEl,
                      s = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        a.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          i.removeAttr("style"),
                          r.removeAttr("style"),
                          s &&
                            s.length &&
                            s
                              .removeClass(
                                [
                                  a.slideVisibleClass,
                                  a.slideActiveClass,
                                  a.slideNextClass,
                                  a.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e && ((n.$el[0].swiper = null), M(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    D(ue, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return ue;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return le;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(ce).forEach(function (e) {
        Object.keys(ce[e]).forEach(function (t) {
          pe.prototype[t] = ce[e][t];
        });
      }),
        pe.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              a = e.emit,
              i = u(),
              r = null,
              s = null,
              o = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (a("beforeResize"), a("resize"));
              },
              l = function () {
                t && !t.destroyed && t.initialized && a("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((r = new ResizeObserver(function (e) {
                    s = i.requestAnimationFrame(function () {
                      var n = t.width,
                        a = t.height,
                        i = n,
                        r = a;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          a = e.contentRect,
                          s = e.target;
                        (s && s !== t.el) ||
                          ((i = a ? a.width : (n[0] || n).inlineSize),
                          (r = a ? a.height : (n[0] || n).blockSize));
                      }),
                        (i === n && r === a) || o();
                    });
                  })),
                  r.observe(t.el))
                : (i.addEventListener("resize", o),
                  i.addEventListener("orientationchange", l));
            }),
              n("destroy", function () {
                s && i.cancelAnimationFrame(s),
                  r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                  i.removeEventListener("resize", o),
                  i.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              a = e.on,
              i = e.emit,
              r = [],
              s = u(),
              o = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = s.MutationObserver || s.WebkitMutationObserver,
                  a = new n(function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        i("observerUpdate", e[0]);
                      };
                      s.requestAnimationFrame
                        ? s.requestAnimationFrame(t)
                        : s.setTimeout(t, 0);
                    } else i("observerUpdate", e[0]);
                  });
                a.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  r.push(a);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              a("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      o(e[n]);
                  o(t.$el[0], { childList: t.params.observeSlideChildren }),
                    o(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              a("destroy", function () {
                r.forEach(function (e) {
                  e.disconnect();
                }),
                  r.splice(0, r.length);
              });
          },
        ]);
      var fe = pe;
      function ve(e) {
        var t = e.swiper,
          n = e.extendParams,
          a = e.on,
          i = e.emit,
          r = d(),
          s = u();
        function o(e) {
          if (t.enabled) {
            var n = t.rtlTranslate,
              a = e;
            a.originalEvent && (a = a.originalEvent);
            var o = a.keyCode || a.charCode,
              l = t.params.keyboard.pageUpDown,
              d = l && 33 === o,
              c = l && 34 === o,
              u = 37 === o,
              p = 39 === o,
              f = 38 === o,
              v = 40 === o;
            if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && p) || (t.isVertical() && v) || c)
            )
              return !1;
            if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && u) || (t.isVertical() && f) || d)
            )
              return !1;
            if (
              !(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) &&
              (!r.activeElement ||
                !r.activeElement.nodeName ||
                ("input" !== r.activeElement.nodeName.toLowerCase() &&
                  "textarea" !== r.activeElement.nodeName.toLowerCase()))
            ) {
              if (
                t.params.keyboard.onlyInViewport &&
                (d || c || u || p || f || v)
              ) {
                var h = !1;
                if (
                  t.$el.parents(".".concat(t.params.slideClass)).length > 0 &&
                  0 ===
                    t.$el.parents(".".concat(t.params.slideActiveClass)).length
                )
                  return;
                var m = t.$el,
                  g = m[0].clientWidth,
                  b = m[0].clientHeight,
                  w = s.innerWidth,
                  y = s.innerHeight,
                  C = t.$el.offset();
                n && (C.left -= t.$el[0].scrollLeft);
                for (
                  var S = [
                      [C.left, C.top],
                      [C.left + g, C.top],
                      [C.left, C.top + b],
                      [C.left + g, C.top + b],
                    ],
                    E = 0;
                  E < S.length;
                  E += 1
                ) {
                  var T = S[E];
                  if (T[0] >= 0 && T[0] <= w && T[1] >= 0 && T[1] <= y) {
                    if (0 === T[0] && 0 === T[1]) continue;
                    h = !0;
                  }
                }
                if (!h) return;
              }
              t.isHorizontal()
                ? ((d || c || u || p) &&
                    (a.preventDefault
                      ? a.preventDefault()
                      : (a.returnValue = !1)),
                  (((c || p) && !n) || ((d || u) && n)) && t.slideNext(),
                  (((d || u) && !n) || ((c || p) && n)) && t.slidePrev())
                : ((d || c || f || v) &&
                    (a.preventDefault
                      ? a.preventDefault()
                      : (a.returnValue = !1)),
                  (c || v) && t.slideNext(),
                  (d || f) && t.slidePrev()),
                i("keyPress", o);
            }
          }
        }
        function l() {
          t.keyboard.enabled ||
            (k(r).on("keydown", o), (t.keyboard.enabled = !0));
        }
        function c() {
          t.keyboard.enabled &&
            (k(r).off("keydown", o), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          a("init", function () {
            t.params.keyboard.enabled && l();
          }),
          a("destroy", function () {
            t.keyboard.enabled && c();
          }),
          Object.assign(t.keyboard, { enable: l, disable: c });
      }
      function he(e, t, n, a) {
        var i = d();
        return (
          e.params.createElements &&
            Object.keys(a).forEach(function (r) {
              if (!n[r] && !0 === n.auto) {
                var s = e.$el.children(".".concat(a[r]))[0];
                s ||
                  (((s = i.createElement("div")).className = a[r]),
                  e.$el.append(s)),
                  (n[r] = s),
                  (t[r] = s);
              }
            }),
          n
        );
      }
      function me(e) {
        var t = e.swiper,
          n = e.extendParams,
          a = e.on,
          i = e.emit;
        function r(e) {
          var n;
          return (
            e &&
              ((n = k(e)),
              t.params.uniqueNavElements &&
                "string" === typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function s(e, n) {
          var a = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](a.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
        }
        function o() {
          if (!t.params.loop) {
            var e = t.navigation,
              n = e.$nextEl;
            s(e.$prevEl, t.isBeginning && !t.params.rewind),
              s(n, t.isEnd && !t.params.rewind);
          }
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), i("navigationPrev"));
        }
        function d(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), i("navigationNext"));
        }
        function c() {
          var e = t.params.navigation;
          if (
            ((t.params.navigation = he(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            e.nextEl || e.prevEl)
          ) {
            var n = r(e.nextEl),
              a = r(e.prevEl);
            n && n.length > 0 && n.on("click", d),
              a && a.length > 0 && a.on("click", l),
              Object.assign(t.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: a,
                prevEl: a && a[0],
              }),
              t.enabled ||
                (n && n.addClass(e.lockClass), a && a.addClass(e.lockClass));
          }
        }
        function u() {
          var e = t.navigation,
            n = e.$nextEl,
            a = e.$prevEl;
          n &&
            n.length &&
            (n.off("click", d),
            n.removeClass(t.params.navigation.disabledClass)),
            a &&
              a.length &&
              (a.off("click", l),
              a.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          a("init", function () {
            !1 === t.params.navigation.enabled ? p() : (c(), o());
          }),
          a("toEdge fromEdge lock unlock", function () {
            o();
          }),
          a("destroy", function () {
            u();
          }),
          a("enable disable", function () {
            var e = t.navigation,
              n = e.$nextEl,
              a = e.$prevEl;
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              a &&
                a[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          a("click", function (e, n) {
            var a = t.navigation,
              r = a.$nextEl,
              s = a.$prevEl,
              o = n.target;
            if (t.params.navigation.hideOnClick && !k(o).is(s) && !k(o).is(r)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              var l;
              r
                ? (l = r.hasClass(t.params.navigation.hiddenClass))
                : s && (l = s.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === l ? "navigationShow" : "navigationHide"),
                r && r.toggleClass(t.params.navigation.hiddenClass),
                s && s.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        var p = function () {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
        };
        Object.assign(t.navigation, {
          enable: function () {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              c(),
              o();
          },
          disable: p,
          update: o,
          init: c,
          destroy: u,
        });
      }
      function ge() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ".".concat(
          e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")
        );
      }
      function be(e) {
        var t,
          n = e.swiper,
          a = e.extendParams,
          i = e.on,
          r = e.emit,
          s = "swiper-pagination";
        a({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "".concat(s, "-bullet"),
            bulletActiveClass: "".concat(s, "-bullet-active"),
            modifierClass: "".concat(s, "-"),
            currentClass: "".concat(s, "-current"),
            totalClass: "".concat(s, "-total"),
            hiddenClass: "".concat(s, "-hidden"),
            progressbarFillClass: "".concat(s, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(s, "-progressbar-opposite"),
            clickableClass: "".concat(s, "-clickable"),
            lockClass: "".concat(s, "-lock"),
            horizontalClass: "".concat(s, "-horizontal"),
            verticalClass: "".concat(s, "-vertical"),
            paginationDisabledClass: "".concat(s, "-disabled"),
          },
        }),
          (n.pagination = { el: null, $el: null, bullets: [] });
        var o = 0;
        function l() {
          return (
            !n.params.pagination.el ||
            !n.pagination.el ||
            !n.pagination.$el ||
            0 === n.pagination.$el.length
          );
        }
        function d(e, t) {
          var a = n.params.pagination.bulletActiveClass;
          e[t]()
            .addClass("".concat(a, "-").concat(t))
            [t]()
            .addClass("".concat(a, "-").concat(t, "-").concat(t));
        }
        function c() {
          var e = n.rtl,
            a = n.params.pagination;
          if (!l()) {
            var i,
              s =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              c = n.pagination.$el,
              u = n.params.loop
                ? Math.ceil((s - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
            if (
              (n.params.loop
                ? ((i = Math.ceil(
                    (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup
                  )) >
                    s - 1 - 2 * n.loopedSlides && (i -= s - 2 * n.loopedSlides),
                  i > u - 1 && (i -= u),
                  i < 0 && "bullets" !== n.params.paginationType && (i = u + i))
                : (i =
                    "undefined" !== typeof n.snapIndex
                      ? n.snapIndex
                      : n.activeIndex || 0),
              "bullets" === a.type &&
                n.pagination.bullets &&
                n.pagination.bullets.length > 0)
            ) {
              var p,
                f,
                v,
                h = n.pagination.bullets;
              if (
                (a.dynamicBullets &&
                  ((t = h
                    .eq(0)
                    [n.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  c.css(
                    n.isHorizontal() ? "width" : "height",
                    "".concat(t * (a.dynamicMainBullets + 4), "px")
                  ),
                  a.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((o += i - (n.previousIndex - n.loopedSlides || 0)) >
                    a.dynamicMainBullets - 1
                      ? (o = a.dynamicMainBullets - 1)
                      : o < 0 && (o = 0)),
                  (p = Math.max(i - o, 0)),
                  (v =
                    ((f = p + (Math.min(h.length, a.dynamicMainBullets) - 1)) +
                      p) /
                    2)),
                h.removeClass(
                  ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                    .map(function (e) {
                      return "".concat(a.bulletActiveClass).concat(e);
                    })
                    .join(" ")
                ),
                c.length > 1)
              )
                h.each(function (e) {
                  var t = k(e),
                    n = t.index();
                  n === i && t.addClass(a.bulletActiveClass),
                    a.dynamicBullets &&
                      (n >= p &&
                        n <= f &&
                        t.addClass("".concat(a.bulletActiveClass, "-main")),
                      n === p && d(t, "prev"),
                      n === f && d(t, "next"));
                });
              else {
                var m = h.eq(i),
                  g = m.index();
                if ((m.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                  for (var b = h.eq(p), w = h.eq(f), y = p; y <= f; y += 1)
                    h.eq(y).addClass("".concat(a.bulletActiveClass, "-main"));
                  if (n.params.loop)
                    if (g >= h.length) {
                      for (var C = a.dynamicMainBullets; C >= 0; C -= 1)
                        h.eq(h.length - C).addClass(
                          "".concat(a.bulletActiveClass, "-main")
                        );
                      h.eq(h.length - a.dynamicMainBullets - 1).addClass(
                        "".concat(a.bulletActiveClass, "-prev")
                      );
                    } else d(b, "prev"), d(w, "next");
                  else d(b, "prev"), d(w, "next");
                }
              }
              if (a.dynamicBullets) {
                var S = Math.min(h.length, a.dynamicMainBullets + 4),
                  E = (t * S - t) / 2 - v * t,
                  T = e ? "right" : "left";
                h.css(n.isHorizontal() ? T : "top", "".concat(E, "px"));
              }
            }
            if (
              ("fraction" === a.type &&
                (c
                  .find(ge(a.currentClass))
                  .text(a.formatFractionCurrent(i + 1)),
                c.find(ge(a.totalClass)).text(a.formatFractionTotal(u))),
              "progressbar" === a.type)
            ) {
              var x;
              x = a.progressbarOpposite
                ? n.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : n.isHorizontal()
                ? "horizontal"
                : "vertical";
              var P = (i + 1) / u,
                M = 1,
                O = 1;
              "horizontal" === x ? (M = P) : (O = P),
                c
                  .find(ge(a.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX("
                      .concat(M, ") scaleY(")
                      .concat(O, ")")
                  )
                  .transition(n.params.speed);
            }
            "custom" === a.type && a.renderCustom
              ? (c.html(a.renderCustom(n, i + 1, u)),
                r("paginationRender", c[0]))
              : r("paginationUpdate", c[0]),
              n.params.watchOverflow &&
                n.enabled &&
                c[n.isLocked ? "addClass" : "removeClass"](a.lockClass);
          }
        }
        function u() {
          var e = n.params.pagination;
          if (!l()) {
            var t =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              a = n.pagination.$el,
              i = "";
            if ("bullets" === e.type) {
              var s = n.params.loop
                ? Math.ceil((t - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
              n.params.freeMode &&
                n.params.freeMode.enabled &&
                !n.params.loop &&
                s > t &&
                (s = t);
              for (var o = 0; o < s; o += 1)
                e.renderBullet
                  ? (i += e.renderBullet.call(n, o, e.bulletClass))
                  : (i += "<"
                      .concat(e.bulletElement, ' class="')
                      .concat(e.bulletClass, '"></')
                      .concat(e.bulletElement, ">"));
              a.html(i), (n.pagination.bullets = a.find(ge(e.bulletClass)));
            }
            "fraction" === e.type &&
              ((i = e.renderFraction
                ? e.renderFraction.call(n, e.currentClass, e.totalClass)
                : '<span class="'.concat(e.currentClass, '"></span>') +
                  " / " +
                  '<span class="'.concat(e.totalClass, '"></span>')),
              a.html(i)),
              "progressbar" === e.type &&
                ((i = e.renderProgressbar
                  ? e.renderProgressbar.call(n, e.progressbarFillClass)
                  : '<span class="'.concat(
                      e.progressbarFillClass,
                      '"></span>'
                    )),
                a.html(i)),
              "custom" !== e.type && r("paginationRender", n.pagination.$el[0]);
          }
        }
        function p() {
          n.params.pagination = he(
            n,
            n.originalParams.pagination,
            n.params.pagination,
            { el: "swiper-pagination" }
          );
          var e = n.params.pagination;
          if (e.el) {
            var t = k(e.el);
            0 !== t.length &&
              (n.params.uniqueNavElements &&
                "string" === typeof e.el &&
                t.length > 1 &&
                (t = n.$el.find(e.el)).length > 1 &&
                (t = t.filter(function (e) {
                  return k(e).parents(".swiper")[0] === n.el;
                })),
              "bullets" === e.type &&
                e.clickable &&
                t.addClass(e.clickableClass),
              t.addClass(e.modifierClass + e.type),
              t.addClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              "bullets" === e.type &&
                e.dynamicBullets &&
                (t.addClass(
                  "".concat(e.modifierClass).concat(e.type, "-dynamic")
                ),
                (o = 0),
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              "progressbar" === e.type &&
                e.progressbarOpposite &&
                t.addClass(e.progressbarOppositeClass),
              e.clickable &&
                t.on("click", ge(e.bulletClass), function (e) {
                  e.preventDefault();
                  var t = k(this).index() * n.params.slidesPerGroup;
                  n.params.loop && (t += n.loopedSlides), n.slideTo(t);
                }),
              Object.assign(n.pagination, { $el: t, el: t[0] }),
              n.enabled || t.addClass(e.lockClass));
          }
        }
        function f() {
          var e = n.params.pagination;
          if (!l()) {
            var t = n.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              t.removeClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              n.pagination.bullets &&
                n.pagination.bullets.removeClass &&
                n.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", ge(e.bulletClass));
          }
        }
        i("init", function () {
          !1 === n.params.pagination.enabled ? v() : (p(), u(), c());
        }),
          i("activeIndexChange", function () {
            (n.params.loop || "undefined" === typeof n.snapIndex) && c();
          }),
          i("snapIndexChange", function () {
            n.params.loop || c();
          }),
          i("slidesLengthChange", function () {
            n.params.loop && (u(), c());
          }),
          i("snapGridLengthChange", function () {
            n.params.loop || (u(), c());
          }),
          i("destroy", function () {
            f();
          }),
          i("enable disable", function () {
            var e = n.pagination.$el;
            e &&
              e[n.enabled ? "removeClass" : "addClass"](
                n.params.pagination.lockClass
              );
          }),
          i("lock unlock", function () {
            c();
          }),
          i("click", function (e, t) {
            var a = t.target,
              i = n.pagination.$el;
            if (
              n.params.pagination.el &&
              n.params.pagination.hideOnClick &&
              i &&
              i.length > 0 &&
              !k(a).hasClass(n.params.pagination.bulletClass)
            ) {
              if (
                n.navigation &&
                ((n.navigation.nextEl && a === n.navigation.nextEl) ||
                  (n.navigation.prevEl && a === n.navigation.prevEl))
              )
                return;
              var s = i.hasClass(n.params.pagination.hiddenClass);
              r(!0 === s ? "paginationShow" : "paginationHide"),
                i.toggleClass(n.params.pagination.hiddenClass);
            }
          });
        var v = function () {
          n.$el.addClass(n.params.pagination.paginationDisabledClass),
            n.pagination.$el &&
              n.pagination.$el.addClass(
                n.params.pagination.paginationDisabledClass
              ),
            f();
        };
        Object.assign(n.pagination, {
          enable: function () {
            n.$el.removeClass(n.params.pagination.paginationDisabledClass),
              n.pagination.$el &&
                n.pagination.$el.removeClass(
                  n.params.pagination.paginationDisabledClass
                ),
              p(),
              u(),
              c();
          },
          disable: v,
          render: u,
          update: c,
          init: p,
          destroy: f,
        });
      }
      function we(e) {
        var t,
          n = e.swiper,
          a = e.extendParams,
          i = e.on,
          r = e.emit;
        function s() {
          if (!n.size)
            return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
          var e = n.slides.eq(n.activeIndex),
            a = n.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (a = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
            clearTimeout(t),
            (t = O(function () {
              var e;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (e = n.slidePrev(n.params.speed, !0, !0)),
                    r("autoplay"))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0
                      )),
                      r("autoplay"))
                  : ((e = n.slidePrev(n.params.speed, !0, !0)), r("autoplay"))
                : n.params.loop
                ? (n.loopFix(),
                  (e = n.slideNext(n.params.speed, !0, !0)),
                  r("autoplay"))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(0, n.params.speed, !0, !0)), r("autoplay"))
                : ((e = n.slideNext(n.params.speed, !0, !0)), r("autoplay")),
                ((n.params.cssMode && n.autoplay.running) || !1 === e) && s();
            }, a));
        }
        function o() {
          return (
            "undefined" === typeof t &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), r("autoplayStart"), s(), !0)
          );
        }
        function l() {
          return (
            !!n.autoplay.running &&
            "undefined" !== typeof t &&
            (t && (clearTimeout(t), (t = void 0)),
            (n.autoplay.running = !1),
            r("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          n.autoplay.running &&
            (n.autoplay.paused ||
              (t && clearTimeout(t),
              (n.autoplay.paused = !0),
              0 !== e && n.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach(function (
                    e
                  ) {
                    n.$wrapperEl[0].addEventListener(e, p);
                  })
                : ((n.autoplay.paused = !1), s())));
        }
        function u() {
          var e = d();
          "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState &&
              n.autoplay.paused &&
              (s(), (n.autoplay.paused = !1));
        }
        function p(e) {
          n &&
            !n.destroyed &&
            n.$wrapperEl &&
            e.target === n.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
              n.$wrapperEl[0].removeEventListener(e, p);
            }),
            (n.autoplay.paused = !1),
            n.autoplay.running ? s() : l());
        }
        function f() {
          n.params.autoplay.disableOnInteraction
            ? l()
            : (r("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
              n.$wrapperEl[0].removeEventListener(e, p);
            });
        }
        function v() {
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), r("autoplayResume"), s());
        }
        (n.autoplay = { running: !1, paused: !1 }),
          a({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          i("init", function () {
            n.params.autoplay.enabled &&
              (o(),
              d().addEventListener("visibilitychange", u),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", f), n.$el.on("mouseleave", v)));
          }),
          i("beforeTransitionStart", function (e, t, a) {
            n.autoplay.running &&
              (a || !n.params.autoplay.disableOnInteraction
                ? n.autoplay.pause(t)
                : l());
          }),
          i("sliderFirstMove", function () {
            n.autoplay.running &&
              (n.params.autoplay.disableOnInteraction ? l() : c());
          }),
          i("touchEnd", function () {
            n.params.cssMode &&
              n.autoplay.paused &&
              !n.params.autoplay.disableOnInteraction &&
              s();
          }),
          i("destroy", function () {
            n.$el.off("mouseenter", f),
              n.$el.off("mouseleave", v),
              n.autoplay.running && l(),
              d().removeEventListener("visibilitychange", u);
          }),
          Object.assign(n.autoplay, { pause: c, run: s, start: o, stop: l });
      }
    },
  },
]);
//# sourceMappingURL=74.7048c133.chunk.js.map
