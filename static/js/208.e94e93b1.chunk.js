"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [208],
  {
    3866: function (e, t, i) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var i = [],
                n = !0,
                s = !1,
                o = void 0;
              try {
                for (
                  var r, a = e[Symbol.iterator]();
                  !(n = (r = a.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  n = !0
                );
              } catch (e) {
                (s = !0), (o = e);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        a = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        l = i(2791),
        d = (n = l) && n.__esModule ? n : { default: n },
        h = i(2007),
        u = i(4006),
        p = (0, h.shape)({
          make: h.func,
          duration: h.number.isRequired,
          delay: h.number.isRequired,
          forever: h.bool,
          count: h.number.isRequired,
          style: h.object.isRequired,
          reverse: h.bool,
        }),
        c = {
          collapse: h.bool,
          collapseEl: h.element,
          cascade: h.bool,
          wait: h.number,
          force: h.bool,
          disabled: h.bool,
          appear: h.bool,
          enter: h.bool,
          exit: h.bool,
          fraction: h.number,
          refProp: h.string,
          innerRef: h.func,
          onReveal: h.func,
          unmountOnExit: h.bool,
          mountOnEnter: h.bool,
          inEffect: p.isRequired,
          outEffect: (0, h.oneOfType)([p, (0, h.oneOf)([!1])]).isRequired,
          ssrReveal: h.bool,
          collapseOnly: h.bool,
          ssrFadeout: h.bool,
        },
        f = { transitionGroup: h.object },
        v = (function (e) {
          function t(e, i) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i)
            );
            return (
              (n.isOn = void 0 === e.when || !!e.when),
              (n.state = {
                collapse: e.collapse ? t.getInitialCollapseStyle(e) : void 0,
                style: {
                  opacity:
                    (n.isOn && !e.ssrReveal) || !e.outEffect ? void 0 : 0,
                },
              }),
              (n.savedChild = !1),
              (n.isShown = !1),
              u.observerMode
                ? (n.handleObserve = n.handleObserve.bind(n))
                : ((n.revealHandler = n.makeHandler(n.reveal)),
                  (n.resizeHandler = n.makeHandler(n.resize))),
              (n.saveRef = n.saveRef.bind(n)),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "saveRef",
                  value: function (e) {
                    this.childRef && this.childRef(e),
                      this.props.innerRef && this.props.innerRef(e),
                      this.el !== e &&
                        ((this.el = e && "offsetHeight" in e ? e : void 0),
                        this.observe(this.props, !0));
                  },
                },
                {
                  key: "invisible",
                  value: function () {
                    this &&
                      this.el &&
                      ((this.savedChild = !1),
                      this.isShown ||
                        (this.setState({
                          hasExited: !0,
                          collapse: this.props.collapse
                            ? r({}, this.state.collapse, {
                                visibility: "hidden",
                              })
                            : null,
                          style: { opacity: 0 },
                        }),
                        !u.observerMode &&
                          this.props.collapse &&
                          window.document.dispatchEvent(u.collapseend)));
                  },
                },
                {
                  key: "animationEnd",
                  value: function (e, t, i) {
                    var n = this,
                      s = i.forever,
                      o = i.count,
                      r = i.delay,
                      a = i.duration;
                    if (!s) {
                      this.animationEndTimeout = window.setTimeout(function () {
                        n &&
                          n.el &&
                          ((n.animationEndTimeout = void 0), e.call(n));
                      }, r + (a + (t ? a : 0) * o));
                    }
                  },
                },
                {
                  key: "getDimensionValue",
                  value: function () {
                    return (
                      this.el.offsetHeight +
                      parseInt(
                        window
                          .getComputedStyle(this.el, null)
                          .getPropertyValue("margin-top"),
                        10
                      ) +
                      parseInt(
                        window
                          .getComputedStyle(this.el, null)
                          .getPropertyValue("margin-bottom"),
                        10
                      )
                    );
                  },
                },
                {
                  key: "collapse",
                  value: function (e, t, i) {
                    var n = i.duration + (t.cascade ? i.duration : 0),
                      s = this.isOn ? this.getDimensionValue() : 0,
                      o = void 0,
                      r = void 0;
                    if (t.collapseOnly) (o = i.duration / 3), (r = i.delay);
                    else {
                      var a = n >> 2,
                        l = a >> 1;
                      (o = a),
                        (r = i.delay + (this.isOn ? 0 : n - a - l)),
                        (e.style.animationDuration =
                          n - a + (this.isOn ? l : -l) + "ms"),
                        (e.style.animationDelay =
                          i.delay + (this.isOn ? a - l : 0) + "ms");
                    }
                    return (
                      (e.collapse = {
                        height: s,
                        transition: "height " + o + "ms ease " + r + "ms",
                        overflow: t.collapseOnly ? "hidden" : void 0,
                      }),
                      e
                    );
                  },
                },
                {
                  key: "animate",
                  value: function (e) {
                    if (
                      this &&
                      this.el &&
                      (this.unlisten(), this.isShown !== this.isOn)
                    ) {
                      this.isShown = this.isOn;
                      var t = !this.isOn && e.outEffect,
                        i = e[t ? "outEffect" : "inEffect"],
                        n = ("style" in i && i.style.animationName) || void 0,
                        s = void 0;
                      e.collapseOnly
                        ? (s = {
                            hasAppeared: !0,
                            hasExited: !1,
                            style: { opacity: 1 },
                          })
                        : ((e.outEffect || this.isOn) && i.make && (n = i.make),
                          (s = {
                            hasAppeared: !0,
                            hasExited: !1,
                            collapse: void 0,
                            style: r({}, i.style, {
                              animationDuration: i.duration + "ms",
                              animationDelay: i.delay + "ms",
                              animationIterationCount: i.forever
                                ? "infinite"
                                : i.count,
                              opacity: 1,
                              animationName: n,
                            }),
                            className: i.className,
                          })),
                        this.setState(e.collapse ? this.collapse(s, e, i) : s),
                        t
                          ? ((this.savedChild = d.default.cloneElement(
                              this.getChild()
                            )),
                            this.animationEnd(this.invisible, e.cascade, i))
                          : (this.savedChild = !1),
                        this.onReveal(e);
                    }
                  },
                },
                {
                  key: "onReveal",
                  value: function (e) {
                    e.onReveal &&
                      this.isOn &&
                      (this.onRevealTimeout &&
                        (this.onRevealTimeout = window.clearTimeout(
                          this.onRevealTimeout
                        )),
                      e.wait
                        ? (this.onRevealTimeout = window.setTimeout(
                            e.onReveal,
                            e.wait
                          ))
                        : e.onReveal());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.unlisten(), u.ssr && (0, u.disableSsr)();
                  },
                },
                {
                  key: "handleObserve",
                  value: function (e, t) {
                    o(e, 1)[0].intersectionRatio > 0 &&
                      (t.disconnect(),
                      (this.observer = null),
                      this.reveal(this.props, !0));
                  },
                },
                {
                  key: "observe",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (this.el && u.observerMode) {
                      if (this.observer) {
                        if (!t) return;
                        this.observer.disconnect();
                      } else if (t) return;
                      (this.observer = new IntersectionObserver(
                        this.handleObserve,
                        { threshold: e.fraction }
                      )),
                        this.observer.observe(this.el);
                    }
                  },
                },
                {
                  key: "reveal",
                  value: function (e) {
                    var t = this,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    u.globalHide || (0, u.hideAll)(),
                      this &&
                        this.el &&
                        (e || (e = this.props),
                        u.ssr && (0, u.disableSsr)(),
                        this.isOn && this.isShown && void 0 !== e.spy
                          ? ((this.isShown = !1),
                            this.setState({ style: {} }),
                            window.setTimeout(function () {
                              return t.reveal(e);
                            }, 200))
                          : i || this.inViewport(e) || e.force
                          ? this.animate(e)
                          : u.observerMode
                          ? this.observe(e)
                          : this.listen());
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    if (this.el && !this.props.disabled) {
                      this.props.collapseOnly ||
                        ("make" in this.props.inEffect &&
                          this.props.inEffect.make(!1, this.props),
                        void 0 !== this.props.when &&
                          this.props.outEffect &&
                          "make" in this.props.outEffect &&
                          this.props.outEffect.make(!0, this.props));
                      var i = this.context.transitionGroup,
                        n =
                          i && !i.isMounting
                            ? !(
                                "enter" in this.props && !1 === this.props.enter
                              )
                            : this.props.appear;
                      return this.isOn &&
                        (((void 0 !== this.props.when ||
                          void 0 !== this.props.spy) &&
                          !n) ||
                          (u.ssr &&
                            !u.fadeOutEnabled &&
                            !this.props.ssrFadeout &&
                            this.props.outEffect &&
                            !this.props.ssrReveal &&
                            t.getTop(this.el) <
                              window.pageYOffset + window.innerHeight))
                        ? ((this.isShown = !0),
                          this.setState({
                            hasAppeared: !0,
                            collapse: this.props.collapse
                              ? { height: this.getDimensionValue() }
                              : this.state.collapse,
                            style: { opacity: 1 },
                          }),
                          void this.onReveal(this.props))
                        : u.ssr &&
                          (u.fadeOutEnabled || this.props.ssrFadeout) &&
                          this.props.outEffect &&
                          t.getTop(this.el) <
                            window.pageYOffset + window.innerHeight
                        ? (this.setState({
                            style: {
                              opacity: 0,
                              transition: "opacity 1000ms 1000ms",
                            },
                          }),
                          void window.setTimeout(function () {
                            return e.reveal(e.props, !0);
                          }, 2e3))
                        : void (
                            this.isOn &&
                            (this.props.force
                              ? this.animate(this.props)
                              : this.reveal(this.props))
                          );
                    }
                  },
                },
                {
                  key: "cascade",
                  value: function (e) {
                    var t = this,
                      i = void 0;
                    i =
                      "string" == typeof e
                        ? e.split("").map(function (e, t) {
                            return d.default.createElement(
                              "span",
                              {
                                key: t,
                                style: {
                                  display: "inline-block",
                                  whiteSpace: "pre",
                                },
                              },
                              e
                            );
                          })
                        : d.default.Children.toArray(e);
                    var n =
                        this.props[
                          this.isOn || !this.props.outEffect
                            ? "inEffect"
                            : "outEffect"
                        ],
                      o = n.duration,
                      a = n.reverse,
                      l = i.length,
                      h = 2 * o;
                    this.props.collapse &&
                      ((h = parseInt(this.state.style.animationDuration, 10)),
                      (o = h / 2));
                    var p = a ? l : 0;
                    return i.map(function (e) {
                      return "object" === (void 0 === e ? "undefined" : s(e)) &&
                        e
                        ? d.default.cloneElement(e, {
                            style: r({}, e.props.style, t.state.style, {
                              animationDuration:
                                Math.round(
                                  (0, u.cascade)(a ? p-- : p++, 0, l, o, h)
                                ) + "ms",
                            }),
                          })
                        : e;
                    });
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    void 0 !== e.when && (this.isOn = !!e.when),
                      e.fraction !== this.props.fraction && this.observe(e, !0),
                      !this.isOn && e.onExited && "exit" in e && !1 === e.exit
                        ? e.onExited()
                        : e.disabled ||
                          (e.collapse &&
                            !this.props.collapse &&
                            (this.setState({
                              style: {},
                              collapse: t.getInitialCollapseStyle(e),
                            }),
                            (this.isShown = !1)),
                          (e.when === this.props.when &&
                            e.spy === this.props.spy) ||
                            this.reveal(e),
                          this.onRevealTimeout &&
                            !this.isOn &&
                            (this.onRevealTimeout = window.clearTimeout(
                              this.onRevealTimeout
                            )));
                  },
                },
                {
                  key: "getChild",
                  value: function () {
                    if (this.savedChild && !this.props.disabled)
                      return this.savedChild;
                    if ("object" === s(this.props.children)) {
                      var e = d.default.Children.only(this.props.children);
                      return ("type" in e && "string" == typeof e.type) ||
                        "ref" !== this.props.refProp
                        ? e
                        : d.default.createElement("div", null, e);
                    }
                    return d.default.createElement(
                      "div",
                      null,
                      this.props.children
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e;
                    e = this.state.hasAppeared
                      ? !this.props.unmountOnExit ||
                        !this.state.hasExited ||
                        this.isOn
                      : !this.props.mountOnEnter || this.isOn;
                    var t = this.getChild();
                    "function" == typeof t.ref && (this.childRef = t.ref);
                    var i = !1,
                      n = t.props,
                      s = n.style,
                      o = n.className,
                      a = n.children,
                      l = this.props.disabled
                        ? o
                        : (this.props.outEffect ? u.namespace : "") +
                            (this.state.className
                              ? " " + this.state.className
                              : "") +
                            (o ? " " + o : "") || void 0,
                      h = void 0;
                    "function" == typeof this.state.style.animationName &&
                      (this.state.style.animationName =
                        this.state.style.animationName(!this.isOn, this.props)),
                      this.props.cascade &&
                      !this.props.disabled &&
                      a &&
                      this.state.style.animationName
                        ? ((i = this.cascade(a)),
                          (h = r({}, s, { opacity: 1 })))
                        : (h = this.props.disabled
                            ? s
                            : r({}, s, this.state.style));
                    var p = r(
                        {},
                        this.props.props,
                        (function (e, t, i) {
                          return (
                            t in e
                              ? Object.defineProperty(e, t, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (e[t] = i),
                            e
                          );
                        })(
                          { className: l, style: h },
                          this.props.refProp,
                          this.saveRef
                        )
                      ),
                      c = d.default.cloneElement(t, p, e ? i || a : void 0);
                    return void 0 !== this.props.collapse
                      ? this.props.collapseEl
                        ? d.default.cloneElement(this.props.collapseEl, {
                            style: r(
                              {},
                              this.props.collapseEl.style,
                              this.props.disabled ? void 0 : this.state.collapse
                            ),
                            children: c,
                          })
                        : d.default.createElement("div", {
                            style: this.props.disabled
                              ? void 0
                              : this.state.collapse,
                            children: c,
                          })
                      : c;
                  },
                },
                {
                  key: "makeHandler",
                  value: function (e) {
                    var t = this,
                      i = function () {
                        e.call(t, t.props), (t.ticking = !1);
                      };
                    return function () {
                      t.ticking || ((0, u.raf)(i), (t.ticking = !0));
                    };
                  },
                },
                {
                  key: "inViewport",
                  value: function (e) {
                    if (!this.el || window.document.hidden) return !1;
                    var i = this.el.offsetHeight,
                      n = window.pageYOffset - t.getTop(this.el),
                      s =
                        Math.min(i, window.innerHeight) *
                        (u.globalHide ? e.fraction : 0);
                    return n > s - window.innerHeight && n < i - s;
                  },
                },
                {
                  key: "resize",
                  value: function (e) {
                    this &&
                      this.el &&
                      this.isOn &&
                      this.inViewport(e) &&
                      (this.unlisten(),
                      (this.isShown = this.isOn),
                      this.setState({
                        hasExited: !this.isOn,
                        hasAppeared: !0,
                        collapse: void 0,
                        style: { opacity: this.isOn || !e.outEffect ? 1 : 0 },
                      }),
                      this.onReveal(e));
                  },
                },
                {
                  key: "listen",
                  value: function () {
                    u.observerMode ||
                      this.isListener ||
                      ((this.isListener = !0),
                      window.addEventListener("scroll", this.revealHandler, {
                        passive: !0,
                      }),
                      window.addEventListener(
                        "orientationchange",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.document.addEventListener(
                        "visibilitychange",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.document.addEventListener(
                        "collapseend",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.addEventListener("resize", this.resizeHandler, {
                        passive: !0,
                      }));
                  },
                },
                {
                  key: "unlisten",
                  value: function () {
                    !u.observerMode &&
                      this.isListener &&
                      (window.removeEventListener(
                        "scroll",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.removeEventListener(
                        "orientationchange",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.document.removeEventListener(
                        "visibilitychange",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.document.removeEventListener(
                        "collapseend",
                        this.revealHandler,
                        { passive: !0 }
                      ),
                      window.removeEventListener("resize", this.resizeHandler, {
                        passive: !0,
                      }),
                      (this.isListener = !1)),
                      this.onRevealTimeout &&
                        (this.onRevealTimeout = window.clearTimeout(
                          this.onRevealTimeout
                        )),
                      this.animationEndTimeout &&
                        (this.animationEndTimeout = window.clearTimeout(
                          this.animationEndTimeout
                        ));
                  },
                },
              ],
              [
                {
                  key: "getInitialCollapseStyle",
                  value: function (e) {
                    return {
                      height: 0,
                      visibility: e.when ? void 0 : "hidden",
                    };
                  },
                },
                {
                  key: "getTop",
                  value: function (e) {
                    for (; void 0 === e.offsetTop; ) e = e.parentNode;
                    for (var t = e.offsetTop; e.offsetParent; t += e.offsetTop)
                      e = e.offsetParent;
                    return t;
                  },
                },
              ]
            ),
            t
          );
        })(d.default.Component);
      (v.propTypes = c),
        (v.defaultProps = { fraction: 0.2, refProp: "ref" }),
        (v.contextTypes = f),
        (v.displayName = "RevealBase"),
        (t.default = v),
        (e.exports = t.default);
    },
    4006: function (e, t) {
      function i(e) {
        try {
          return c.insertRule(e, c.cssRules.length);
        } catch (e) {
          console.warn("react-reveal - animation failed");
        }
      }
      function n() {
        d ||
          ((t.globalHide = d = !0),
          window.removeEventListener("scroll", n, !0),
          i("." + s + " { opacity: 0; }"),
          window.removeEventListener("orientationchange", n, !0),
          window.document.removeEventListener("visibilitychange", n));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.insertRule = i),
        (t.cascade = function (e, t, i, n, s) {
          var o = Math.log(n),
            r = (Math.log(s) - o) / (i - t);
          return Math.exp(o + r * (e - t));
        }),
        (t.animation = function (e) {
          if (!c) return "";
          var t = "@keyframes " + (f + u) + "{" + e + "}",
            i = p[e];
          return i
            ? "" + f + i
            : (c.insertRule(t, c.cssRules.length), (p[e] = u), "" + f + u++);
        }),
        (t.hideAll = n),
        (t.default = function (e) {
          var i = e.ssrFadeout;
          t.fadeOutEnabled = i;
        });
      var s = (t.namespace = "react-reveal"),
        o =
          ((t.defaults = { duration: 1e3, delay: 0, count: 1 }), (t.ssr = !0)),
        r = (t.observerMode = !1),
        a = (t.raf = function (e) {
          return window.setTimeout(e, 66);
        }),
        l = (t.disableSsr = function () {
          return (t.ssr = o = !1);
        }),
        d =
          ((t.fadeOutEnabled = !1),
          (t.ssrFadeout = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (t.fadeOutEnabled = e);
          }),
          (t.globalHide = !1)),
        h = ((t.ie10 = !1), (t.collapseend = void 0)),
        u = 1,
        p = {},
        c = !1,
        f = s + "-" + Math.floor(1e15 * Math.random()) + "-";
      if (
        "undefined" != typeof window &&
        "nodejs" !== window.name &&
        window.document &&
        "undefined" != typeof navigator
      ) {
        (t.observerMode = r =
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
          /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver)),
          (t.raf = a =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            a),
          (t.ssr = o =
            window.document.querySelectorAll("div[data-reactroot]").length > 0),
          -1 !== navigator.appVersion.indexOf("MSIE 10") && (t.ie10 = !0),
          o &&
            "performance" in window &&
            "timing" in window.performance &&
            "domContentLoadedEventEnd" in window.performance.timing &&
            window.performance.timing.domLoading &&
            Date.now() - window.performance.timing.domLoading < 300 &&
            (t.ssr = o = !1),
          o && window.setTimeout(l, 1500),
          r ||
            ((t.collapseend = h = document.createEvent("Event")),
            h.initEvent("collapseend", !0, !0));
        var v = document.createElement("style");
        document.head.appendChild(v),
          v.sheet &&
            v.sheet.cssRules &&
            v.sheet.insertRule &&
            ((c = v.sheet),
            window.addEventListener("scroll", n, !0),
            window.addEventListener("orientationchange", n, !0),
            window.document.addEventListener("visibilitychange", n));
      }
    },
    6208: function (e, t, i) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        };
      t.default = function (e, t, i, n) {
        return (
          "in" in e && (e.when = e.in),
          o.default.Children.count(n) < 2
            ? o.default.createElement(
                r.default,
                s({}, e, { inEffect: t, outEffect: i, children: n })
              )
            : ((n = o.default.Children.map(n, function (n) {
                return o.default.createElement(
                  r.default,
                  s({}, e, { inEffect: t, outEffect: i, children: n })
                );
              })),
              "Fragment" in o.default
                ? o.default.createElement(o.default.Fragment, null, n)
                : o.default.createElement("span", null, n))
        );
      };
      var o = n(i(2791)),
        r = n(i(3866));
      e.exports = t.default;
    },
  },
]);
//# sourceMappingURL=208.e94e93b1.chunk.js.map
