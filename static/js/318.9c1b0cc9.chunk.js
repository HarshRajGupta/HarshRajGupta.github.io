/*! For license information please see 318.9c1b0cc9.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [318],
  {
    6300: function (t) {
      t.exports = function t(e, i) {
        if (e === i) return !0;
        if (e && i && "object" == typeof e && "object" == typeof i) {
          if (e.constructor !== i.constructor) return !1;
          var n, r, o;
          if (Array.isArray(e)) {
            if ((n = e.length) != i.length) return !1;
            for (r = n; 0 !== r--; ) if (!t(e[r], i[r])) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString();
          if ((n = (o = Object.keys(e)).length) !== Object.keys(i).length)
            return !1;
          for (r = n; 0 !== r--; )
            if (!Object.prototype.hasOwnProperty.call(i, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            var a = o[r];
            if (("_owner" !== a || !e.$$typeof) && !t(e[a], i[a])) return !1;
          }
          return !0;
        }
        return e !== e && i !== i;
      };
    },
    7693: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return g;
        },
      });
      var n = i(4165),
        r = i(5861),
        o = i(5671),
        a = i(3144),
        s = i(1752),
        u = i(1120),
        c = i(136),
        l = i(9388),
        h = i(2791),
        d = i(1346),
        v = i(6300),
        p = i.n(v),
        f = "tsparticles",
        y = (function (t) {
          (0, c.Z)(i, t);
          var e = (0, l.Z)(i);
          function i(t) {
            var n;
            return (
              (0, o.Z)(this, i),
              ((n = e.call(this, t)).state = { init: !1, library: void 0 }),
              n
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "destroy",
                value: function () {
                  this.state.library &&
                    (this.state.library.destroy(),
                    this.setState({ library: void 0 }));
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (t) {
                  return !p()(t, this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.refresh();
                },
              },
              {
                key: "forceUpdate",
                value: function () {
                  var t = this;
                  this.refresh().then(function () {
                    (0, s.Z)((0, u.Z)(i.prototype), "forceUpdate", t).call(t);
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var t = this;
                  (0, r.Z)(
                    (0, n.Z)().mark(function e() {
                      return (0, n.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.props.init) {
                                e.next = 3;
                                break;
                              }
                              return (e.next = 3), t.props.init(d.S6);
                            case 3:
                              t.setState(
                                { init: !0 },
                                (0, r.Z)(
                                  (0, n.Z)().mark(function e() {
                                    return (0, n.Z)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), t.loadParticles()
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.destroy();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.width,
                    i = t.height,
                    n = t.className,
                    r = t.canvasClassName,
                    o = t.id;
                  return h.createElement(
                    "div",
                    { className: n, id: o },
                    h.createElement("canvas", {
                      className: r,
                      style: Object.assign(
                        Object.assign({}, this.props.style),
                        { width: e, height: i }
                      ),
                    })
                  );
                },
              },
              {
                key: "refresh",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.destroy(),
                                  (t.next = 3),
                                  this.loadParticles()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadParticles",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      var e,
                        o,
                        a,
                        s,
                        u,
                        c,
                        l = this;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.state.init) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                if (
                                  ((s = (function () {
                                    var t = (0, r.Z)(
                                      (0, n.Z)().mark(function t(e) {
                                        return (0, n.Z)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (
                                                  (l.props.container &&
                                                    (l.props.container.current =
                                                      e),
                                                  l.setState({ library: e }),
                                                  !l.props.loaded)
                                                ) {
                                                  t.next = 5;
                                                  break;
                                                }
                                                return (
                                                  (t.next = 5),
                                                  l.props.loaded(e)
                                                );
                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  })()),
                                  (u =
                                    null !==
                                      (o =
                                        null !== (e = this.props.id) &&
                                        void 0 !== e
                                          ? e
                                          : i.defaultProps.id) && void 0 !== o
                                      ? o
                                      : f),
                                  !this.props.url)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  (t.next = 7), d.S6.loadJSON(u, this.props.url)
                                );
                              case 7:
                                (t.t0 = t.sent), (t.next = 13);
                                break;
                              case 10:
                                return (
                                  (t.next = 12),
                                  d.S6.load(
                                    u,
                                    null !== (a = this.props.params) &&
                                      void 0 !== a
                                      ? a
                                      : this.props.options
                                  )
                                );
                              case 12:
                                t.t0 = t.sent;
                              case 13:
                                return (c = t.t0), (t.next = 16), s(c);
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            i
          );
        })(h.Component);
      y.defaultProps = {
        width: "100%",
        height: "100%",
        options: {},
        style: {},
        url: void 0,
        id: f,
      };
      var g = y;
    },
    1346: function (t, e, i) {
      i.d(e, {
        RC: function () {
          return ie;
        },
        Cd: function () {
          return Ie;
        },
        L8: function () {
          return ni;
        },
        Oz: function () {
          return Tt;
        },
        $S: function () {
          return ri;
        },
        Ae: function () {
          return He;
        },
        SW: function () {
          return oe;
        },
        OW: function () {
          return v;
        },
        dU: function () {
          return H;
        },
        cj: function () {
          return C;
        },
        p: function () {
          return G;
        },
        Gz: function () {
          return O;
        },
        M_: function () {
          return N;
        },
        kR: function () {
          return Q;
        },
        gy: function () {
          return W;
        },
        uZ: function () {
          return y;
        },
        oc: function () {
          return ft;
        },
        ZB: function () {
          return j;
        },
        iC: function () {
          return q;
        },
        XD: function () {
          return F;
        },
        pS: function () {
          return St;
        },
        Wd: function () {
          return _t;
        },
        KH: function () {
          return X;
        },
        Sp: function () {
          return P;
        },
        oW: function () {
          return x;
        },
        bS: function () {
          return mt;
        },
        BE: function () {
          return yt;
        },
        Dt: function () {
          return gt;
        },
        sZ: function () {
          return f;
        },
        KI: function () {
          return S;
        },
        Uv: function () {
          return b;
        },
        Gu: function () {
          return m;
        },
        vz: function () {
          return pt;
        },
        iz: function () {
          return vt;
        },
        NA: function () {
          return k;
        },
        wm: function () {
          return U;
        },
        dB: function () {
          return M;
        },
        Ac: function () {
          return B;
        },
        Kr: function () {
          return T;
        },
        c8: function () {
          return D;
        },
        wA: function () {
          return Y;
        },
        mx: function () {
          return L;
        },
        hT: function () {
          return Ve;
        },
        aM: function () {
          return Ct;
        },
        Wt: function () {
          return Zt;
        },
        vd: function () {
          return w;
        },
        lN: function () {
          return st;
        },
        tX: function () {
          return ot;
        },
        dp: function () {
          return K;
        },
        lC: function () {
          return ut;
        },
        Cs: function () {
          return _;
        },
        gE: function () {
          return ct;
        },
        S6: function () {
          return si;
        },
      });
      var n = i(7762),
        r = i(4165),
        o = i(5861),
        a = i(5671),
        s = i(3144),
        u = (function () {
          function t() {
            (0, a.Z)(this, t), (this._listeners = new Map());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "addEventListener",
                value: function (t, e) {
                  var i;
                  this.removeEventListener(t, e),
                    this._listeners.get(t) || this._listeners.set(t, []),
                    null === (i = this._listeners.get(t)) ||
                      void 0 === i ||
                      i.push(e);
                },
              },
              {
                key: "dispatchEvent",
                value: function (t, e) {
                  var i;
                  null === (i = this._listeners.get(t)) ||
                    void 0 === i ||
                    i.forEach(function (t) {
                      return t(e);
                    });
                },
              },
              {
                key: "hasEventListener",
                value: function (t) {
                  return !!this._listeners.get(t);
                },
              },
              {
                key: "removeAllEventListeners",
                value: function (t) {
                  t ? this._listeners.delete(t) : (this._listeners = new Map());
                },
              },
              {
                key: "removeEventListener",
                value: function (t, e) {
                  var i = this._listeners.get(t);
                  if (i) {
                    var n = i.length,
                      r = i.indexOf(e);
                    r < 0 ||
                      (1 === n ? this._listeners.delete(t) : i.splice(r, 1));
                  }
                },
              },
            ]),
            t
          );
        })(),
        c = i(885),
        l = i(136),
        h = i(9388),
        d = (function () {
          function t(e, i, n) {
            if (((0, a.Z)(this, t), "number" !== typeof e && e)) {
              (this.x = e.x), (this.y = e.y);
              var r = e;
              this.z = r.z ? r.z : 0;
            } else {
              if (void 0 === e || void 0 === i)
                throw new Error(
                  "tsParticles - Vector3d not initialized correctly"
                );
              (this.x = e),
                (this.y = i),
                (this.z = null !== n && void 0 !== n ? n : 0);
            }
          }
          return (
            (0, s.Z)(
              t,
              [
                {
                  key: "angle",
                  get: function () {
                    return Math.atan2(this.y, this.x);
                  },
                  set: function (t) {
                    this.updateFromAngle(t, this.length);
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return Math.sqrt(this.getLengthSq());
                  },
                  set: function (t) {
                    this.updateFromAngle(this.angle, t);
                  },
                },
                {
                  key: "add",
                  value: function (e) {
                    return t.create(this.x + e.x, this.y + e.y, this.z + e.z);
                  },
                },
                {
                  key: "addTo",
                  value: function (t) {
                    (this.x += t.x), (this.y += t.y), (this.z += t.z);
                  },
                },
                {
                  key: "copy",
                  value: function () {
                    return t.clone(this);
                  },
                },
                {
                  key: "distanceTo",
                  value: function (t) {
                    return this.sub(t).length;
                  },
                },
                {
                  key: "distanceToSq",
                  value: function (t) {
                    return this.sub(t).getLengthSq();
                  },
                },
                {
                  key: "div",
                  value: function (e) {
                    return t.create(this.x / e, this.y / e, this.z / e);
                  },
                },
                {
                  key: "divTo",
                  value: function (t) {
                    (this.x /= t), (this.y /= t), (this.z /= t);
                  },
                },
                {
                  key: "getLengthSq",
                  value: function () {
                    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
                  },
                },
                {
                  key: "mult",
                  value: function (e) {
                    return t.create(this.x * e, this.y * e, this.z * e);
                  },
                },
                {
                  key: "multTo",
                  value: function (t) {
                    (this.x *= t), (this.y *= t), (this.z *= t);
                  },
                },
                {
                  key: "rotate",
                  value: function (e) {
                    return t.create(
                      this.x * Math.cos(e) - this.y * Math.sin(e),
                      this.x * Math.sin(e) + this.y * Math.cos(e),
                      0
                    );
                  },
                },
                {
                  key: "setTo",
                  value: function (t) {
                    (this.x = t.x), (this.y = t.y);
                    var e = t;
                    this.z = e.z ? e.z : 0;
                  },
                },
                {
                  key: "sub",
                  value: function (e) {
                    return t.create(this.x - e.x, this.y - e.y, this.z - e.z);
                  },
                },
                {
                  key: "subFrom",
                  value: function (t) {
                    (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
                  },
                },
                {
                  key: "updateFromAngle",
                  value: function (t, e) {
                    (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
                  },
                },
              ],
              [
                {
                  key: "origin",
                  get: function () {
                    return t.create(0, 0, 0);
                  },
                },
                {
                  key: "clone",
                  value: function (e) {
                    return t.create(e.x, e.y, e.z);
                  },
                },
                {
                  key: "create",
                  value: function (e, i, n) {
                    return new t(e, i, n);
                  },
                },
              ]
            ),
            t
          );
        })(),
        v = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t, n) {
            return (0, a.Z)(this, i), e.call(this, t, n, 0);
          }
          return (
            (0, s.Z)(i, null, [
              {
                key: "origin",
                get: function () {
                  return i.create(0, 0);
                },
              },
              {
                key: "clone",
                value: function (t) {
                  return i.create(t.x, t.y);
                },
              },
              {
                key: "create",
                value: function (t, e) {
                  return new i(t, e);
                },
              },
            ]),
            i
          );
        })(d),
        p = Math.random;
      function f() {
        return y(p(), 0, 1 - 1e-16);
      }
      function y(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      function g(t, e, i, n) {
        return Math.floor((t * i + e * n) / (i + n));
      }
      function w(t) {
        var e = S(t),
          i = b(t);
        return e === i && (i = 0), f() * (e - i) + i;
      }
      function m(t) {
        return "number" === typeof t ? t : w(t);
      }
      function b(t) {
        return "number" === typeof t ? t : t.min;
      }
      function S(t) {
        return "number" === typeof t ? t : t.max;
      }
      function _(t, e) {
        if (t === e || (void 0 === e && "number" === typeof t)) return t;
        var i = b(t),
          n = S(t);
        return void 0 !== e
          ? { min: Math.min(i, e), max: Math.max(n, e) }
          : _(i, n);
      }
      function k(t) {
        var e = t.random,
          i = "boolean" === typeof e ? { enable: e, minimumValue: 0 } : e,
          n = i.enable,
          r = i.minimumValue;
        return m(n ? _(t.value, r) : t.value);
      }
      function x(t, e) {
        var i = t.x - e.x,
          n = t.y - e.y;
        return { dx: i, dy: n, distance: Math.sqrt(i * i + n * n) };
      }
      function P(t, e) {
        return x(t, e).distance;
      }
      function Z(t, e, i, n) {
        return v.create(
          (t.x * (i - n)) / (i + n) + (2 * e.x * n) / (i + n),
          t.y
        );
      }
      function C(t, e) {
        switch (e) {
          case "ease-in-quad":
            return Math.pow(t, 2);
          case "ease-out-quad":
            return 1 - Math.pow(1 - t, 2);
          case "ease-in-out-quad":
            return t < 0.5
              ? 2 * Math.pow(t, 2)
              : 1 - Math.pow(-2 * t + 2, 2) / 2;
          case "ease-in-cubic":
            return Math.pow(t, 3);
          case "ease-out-cubic":
            return 1 - Math.pow(1 - t, 3);
          case "ease-in-out-cubic":
            return t < 0.5
              ? 4 * Math.pow(t, 3)
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          case "ease-in-quart":
            return Math.pow(t, 4);
          case "ease-out-quart":
            return 1 - Math.pow(1 - t, 4);
          case "ease-in-out-quart":
            return t < 0.5
              ? 8 * Math.pow(t, 4)
              : 1 - Math.pow(-2 * t + 2, 4) / 2;
          case "ease-in-quint":
            return Math.pow(t, 5);
          case "ease-out-quint":
            return 1 - Math.pow(1 - t, 5);
          case "ease-in-out-quint":
            return t < 0.5
              ? 16 * Math.pow(t, 5)
              : 1 - Math.pow(-2 * t + 2, 5) / 2;
          case "ease-in-expo":
            return t ? Math.pow(2, 10 * t - 10) : 0;
          case "ease-out-expo":
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          case "ease-in-out-expo":
            return t
              ? 1 === t
                ? 1
                : t < 0.5
                ? Math.pow(2, 20 * t - 10) / 2
                : (2 - Math.pow(2, -20 * t + 10)) / 2
              : 0;
          case "ease-in-sine":
            return 1 - Math.cos((t * Math.PI) / 2);
          case "ease-out-sine":
            return Math.sin((t * Math.PI) / 2);
          case "ease-in-out-sine":
            return -(Math.cos(Math.PI * t) - 1) / 2;
          case "ease-in-back":
            var i = 1.70158;
            return 2.70158 * Math.pow(t, 3) - i * Math.pow(t, 2);
          case "ease-out-back":
            var n = 1.70158;
            return 1 + 2.70158 * Math.pow(t - 1, 3) + n * Math.pow(t - 1, 2);
          case "ease-in-out-back":
            var r = 2.5949095;
            return t < 0.5
              ? (Math.pow(2 * t, 2) * (7.189819 * t - r)) / 2
              : (Math.pow(2 * t - 2, 2) * ((r + 1) * (2 * t - 2) + r) + 2) / 2;
          case "ease-in-circ":
            return 1 - Math.sqrt(1 - Math.pow(t, 2));
          case "ease-out-circ":
            return Math.sqrt(1 - Math.pow(t - 1, 2));
          case "ease-in-out-circ":
            return t < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
          default:
            return t;
        }
      }
      function A(t) {
        var e, i;
        return void 0 !==
          (null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
          void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y)
          ? {
              x: (t.position.x * t.size.width) / 100,
              y: (t.position.y * t.size.height) / 100,
            }
          : void 0;
      }
      function G(t) {
        var e, i, n, r;
        return {
          x:
            ((null !==
              (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : 100 * f()) *
              t.size.width) /
            100,
          y:
            ((null !==
              (r = null === (n = t.position) || void 0 === n ? void 0 : n.y) &&
            void 0 !== r
              ? r
              : 100 * f()) *
              t.size.height) /
            100,
        };
      }
      function O(t) {
        var e,
          i,
          n = {
            x:
              void 0 !==
              (null === (e = t.position) || void 0 === e ? void 0 : e.x)
                ? m(t.position.x)
                : void 0,
            y:
              void 0 !==
              (null === (i = t.position) || void 0 === i ? void 0 : i.y)
                ? m(t.position.y)
                : void 0,
          };
        return G({ size: t.size, position: n });
      }
      function V(t) {
        var e, i, n, r;
        return {
          x:
            null !==
              (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : f() * t.size.width,
          y:
            null !==
              (r = null === (n = t.position) || void 0 === n ? void 0 : n.y) &&
            void 0 !== r
              ? r
              : f() * t.size.height,
        };
      }
      function E(t) {
        return t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t);
      }
      function z(t, e, i, n, r, o) {
        var a = { bounced: !1 };
        return (
          e.min < n.min ||
            e.min > n.max ||
            e.max < n.min ||
            e.max > n.max ||
            (((t.max >= i.min && t.max <= (i.max + i.min) / 2 && r > 0) ||
              (t.min <= i.max && t.min > (i.max + i.min) / 2 && r < 0)) &&
              ((a.velocity = r * -o), (a.bounced = !0))),
          a
        );
      }
      function T() {
        return (
          "undefined" === typeof window ||
          !window ||
          "undefined" === typeof window.document ||
          !window.document
        );
      }
      function R(t) {
        if (!T() && "undefined" !== typeof matchMedia) return matchMedia(t);
      }
      function M(t, e) {
        return t === e || (e instanceof Array && e.indexOf(t) > -1);
      }
      function L(t, e) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = (0, o.Z)(
          (0, r.Z)().mark(function t(e, i) {
            return (0, r.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        document.fonts.load(
                          ""
                            .concat(
                              null !== i && void 0 !== i ? i : "400",
                              " 36px '"
                            )
                            .concat(
                              null !== e && void 0 !== e ? e : "Verdana",
                              "'"
                            )
                        )
                      );
                    case 3:
                      t.next = 7;
                      break;
                    case 5:
                      (t.prev = 5), (t.t0 = t.catch(0));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        )).apply(this, arguments);
      }
      function H(t) {
        return Math.floor(f() * t.length);
      }
      function D(t, e) {
        var i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return t[void 0 !== e && i ? e % t.length : H(t)];
      }
      function B(t, e, i, n, r) {
        return (function (t, e, i, n) {
          var r = !0;
          (n && "bottom" !== n) || (r = t.top < e.height + i.x);
          !r || (n && "left" !== n) || (r = t.right > i.x);
          !r || (n && "right" !== n) || (r = t.left < e.width + i.y);
          !r || (n && "top" !== n) || (r = t.bottom > i.y);
          return r;
        })(N(t, null !== n && void 0 !== n ? n : 0), e, i, r);
      }
      function N(t, e) {
        return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
      }
      function j(t) {
        for (
          var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        for (var r = 0, o = i; r < o.length; r++) {
          var a = o[r];
          if (void 0 !== a && null !== a)
            if ("object" === typeof a) {
              var s = Array.isArray(a);
              !s || ("object" === typeof t && t && Array.isArray(t))
                ? s ||
                  ("object" === typeof t && t && !Array.isArray(t)) ||
                  (t = {})
                : (t = []);
              var u = function (e) {
                if ("__proto__" === e) return "continue";
                var i = a[e],
                  n = "object" === typeof i,
                  r = t;
                r[e] =
                  n && Array.isArray(i)
                    ? i.map(function (t) {
                        return j(r[e], t);
                      })
                    : j(r[e], i);
              };
              for (var c in a) u(c);
            } else t = a;
        }
        return t;
      }
      function U(t, e) {
        return !!J(e, function (e) {
          return e.enable && M(t, e.mode);
        });
      }
      function F(t, e, i) {
        X(e, function (e) {
          var n = e.mode;
          e.enable &&
            M(t, n) &&
            (function (t, e) {
              X(t.selectors, function (i) {
                e(i, t);
              });
            })(e, i);
        });
      }
      function q(t, e) {
        if (e && t)
          return J(t, function (t) {
            return (function (t, e) {
              var i = X(e, function (e) {
                return t.matches(e);
              });
              return i instanceof Array
                ? i.some(function (t) {
                    return t;
                  })
                : i;
            })(e, t.selectors);
          });
      }
      function W(t) {
        return {
          position: t.getPosition(),
          radius: t.getRadius(),
          mass: t.getMass(),
          velocity: t.velocity,
          factor: v.create(
            k(t.options.bounce.horizontal),
            k(t.options.bounce.vertical)
          ),
        };
      }
      function Q(t, e) {
        var i = t.velocity.sub(e.velocity),
          n = i.x,
          r = i.y,
          o = [t.position, e.position],
          a = x(o[1], o[0]),
          s = a.dx,
          u = a.dy;
        if (!(n * s + r * u < 0)) {
          var c = -Math.atan2(u, s),
            l = t.mass,
            h = e.mass,
            d = t.velocity.rotate(c),
            v = e.velocity.rotate(c),
            p = Z(d, v, l, h),
            f = Z(v, d, l, h),
            y = p.rotate(-c),
            g = f.rotate(-c);
          (t.velocity.x = y.x * t.factor.x),
            (t.velocity.y = y.y * t.factor.y),
            (e.velocity.x = g.x * e.factor.x),
            (e.velocity.y = g.y * e.factor.y);
        }
      }
      function K(t, e) {
        var i = N(t.getPosition(), t.getRadius()),
          n = z(
            { min: i.left, max: i.right },
            { min: i.top, max: i.bottom },
            { min: e.left, max: e.right },
            { min: e.top, max: e.bottom },
            t.velocity.x,
            k(t.options.bounce.horizontal)
          );
        n.bounced &&
          (void 0 !== n.velocity && (t.velocity.x = n.velocity),
          void 0 !== n.position && (t.position.x = n.position));
        var r = z(
          { min: i.top, max: i.bottom },
          { min: i.left, max: i.right },
          { min: e.top, max: e.bottom },
          { min: e.left, max: e.right },
          t.velocity.y,
          k(t.options.bounce.vertical)
        );
        r.bounced &&
          (void 0 !== r.velocity && (t.velocity.y = r.velocity),
          void 0 !== r.position && (t.position.y = r.position));
      }
      function X(t, e) {
        return t instanceof Array
          ? t.map(function (t) {
              return e(t);
            })
          : e(t);
      }
      function Y(t, e, i) {
        return t instanceof Array ? D(t, e, i) : t;
      }
      function J(t, e) {
        return t instanceof Array
          ? t.find(function (t) {
              return e(t);
            })
          : e(t)
          ? t
          : void 0;
      }
      var $ = "random",
        tt = "mid",
        et = new Map();
      function it(t) {
        et.set(t.key, t);
      }
      function nt(t, e, i) {
        return (
          i < 0 && (i += 1),
          i > 1 && (i -= 1),
          i < 1 / 6
            ? t + 6 * (e - t) * i
            : i < 0.5
            ? e
            : i < 2 / 3
            ? t + (e - t) * (2 / 3 - i) * 6
            : t
        );
      }
      function rt(t) {
        var e,
          i = (0, n.Z)(et);
        try {
          for (i.s(); !(e = i.n()).done; ) {
            var r = (0, c.Z)(e.value, 2)[1];
            if (t.startsWith(r.stringPrefix)) return r.parseString(t);
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
        var o = t.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            function (t, e, i, n, r) {
              return e + e + i + i + n + n + (void 0 !== r ? r + r : "");
            }
          ),
          a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(o);
        return a
          ? {
              a: void 0 !== a[4] ? parseInt(a[4], 16) / 255 : 1,
              b: parseInt(a[3], 16),
              g: parseInt(a[2], 16),
              r: parseInt(a[1], 16),
            }
          : void 0;
      }
      function ot(t, e) {
        var i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (t) {
          var r = "string" === typeof t ? { value: t } : t;
          if ("string" === typeof r.value) return at(r.value, e, i);
          if (r.value instanceof Array) return ot({ value: D(r.value, e, i) });
          var o,
            a = (0, n.Z)(et);
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var s = (0, c.Z)(o.value, 2),
                u = s[1],
                l = u.handleRangeColor(r);
              if (l) return l;
            }
          } catch (h) {
            a.e(h);
          } finally {
            a.f();
          }
        }
      }
      function at(t, e) {
        var i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (t) {
          var r = "string" === typeof t ? { value: t } : t;
          if ("string" === typeof r.value)
            return r.value === $ ? dt() : lt(r.value);
          if (r.value instanceof Array) return at({ value: D(r.value, e, i) });
          var o,
            a = (0, n.Z)(et);
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var s = (0, c.Z)(o.value, 2),
                u = s[1],
                l = u.handleColor(r);
              if (l) return l;
            }
          } catch (h) {
            a.e(h);
          } finally {
            a.f();
          }
        }
      }
      function st(t, e) {
        var i =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          n = ot(t, e, i);
        return n ? ut(n) : void 0;
      }
      function ut(t) {
        var e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          r = Math.max(e, i, n),
          o = Math.min(e, i, n),
          a = { h: 0, l: (r + o) / 2, s: 0 };
        return (
          r !== o &&
            ((a.s = a.l < 0.5 ? (r - o) / (r + o) : (r - o) / (2 - r - o)),
            (a.h =
              e === r
                ? (i - n) / (r - o)
                : (a.h =
                    i === r ? 2 + (n - e) / (r - o) : 4 + (e - i) / (r - o)))),
          (a.l *= 100),
          (a.s *= 100),
          (a.h *= 60),
          a.h < 0 && (a.h += 360),
          a.h >= 360 && (a.h -= 360),
          a
        );
      }
      function ct(t) {
        var e;
        return null === (e = rt(t)) || void 0 === e ? void 0 : e.a;
      }
      function lt(t) {
        return rt(t);
      }
      function ht(t) {
        var e = { b: 0, g: 0, r: 0 },
          i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
        if (i.s) {
          var n = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
            r = 2 * i.l - n;
          (e.r = nt(r, n, i.h + 1 / 3)),
            (e.g = nt(r, n, i.h)),
            (e.b = nt(r, n, i.h - 1 / 3));
        } else (e.b = i.l), (e.g = i.l), (e.r = i.l);
        return (
          (e.r = Math.floor(255 * e.r)),
          (e.g = Math.floor(255 * e.g)),
          (e.b = Math.floor(255 * e.b)),
          e
        );
      }
      function dt(t) {
        var e = null !== t && void 0 !== t ? t : 0;
        return {
          b: Math.floor(w(_(e, 256))),
          g: Math.floor(w(_(e, 256))),
          r: Math.floor(w(_(e, 256))),
        };
      }
      function vt(t, e) {
        return "rgba("
          .concat(t.r, ", ")
          .concat(t.g, ", ")
          .concat(t.b, ", ")
          .concat(null !== e && void 0 !== e ? e : 1, ")");
      }
      function pt(t, e) {
        return "hsla("
          .concat(t.h, ", ")
          .concat(t.s, "%, ")
          .concat(t.l, "%, ")
          .concat(null !== e && void 0 !== e ? e : 1, ")");
      }
      function ft(t, e, i, n) {
        var r = t,
          o = e;
        return (
          void 0 === r.r && (r = ht(t)),
          void 0 === o.r && (o = ht(e)),
          { b: g(r.b, o.b, i, n), g: g(r.g, o.g, i, n), r: g(r.r, o.r, i, n) }
        );
      }
      function yt(t, e, i) {
        var n, r;
        if (i === $) return dt();
        if (i !== tt) return i;
        var o =
            null !== (n = t.getFillColor()) && void 0 !== n
              ? n
              : t.getStrokeColor(),
          a =
            null !==
              (r = null === e || void 0 === e ? void 0 : e.getFillColor()) &&
            void 0 !== r
              ? r
              : null === e || void 0 === e
              ? void 0
              : e.getStrokeColor();
        if (o && a && e) return ft(o, a, t.getRadius(), e.getRadius());
        var s = null !== o && void 0 !== o ? o : a;
        return s ? ht(s) : void 0;
      }
      function gt(t, e, i) {
        var n = "string" === typeof t ? t : t.value;
        return n === $
          ? i
            ? ot({ value: n })
            : e
            ? $
            : tt
          : n === tt
          ? tt
          : ot({ value: n });
      }
      function wt(t) {
        return void 0 !== t
          ? { h: t.h.value, s: t.s.value, l: t.l.value }
          : void 0;
      }
      function mt(t, e, i) {
        var n = {
          h: { enable: !1, value: t.h },
          s: { enable: !1, value: t.s },
          l: { enable: !1, value: t.l },
        };
        return e && (bt(n.h, e.h, i), bt(n.s, e.s, i), bt(n.l, e.l, i)), n;
      }
      function bt(t, e, i) {
        (t.enable = e.enable),
          t.enable
            ? ((t.velocity = (m(e.speed) / 100) * i),
              (t.decay = 1 - m(e.decay)),
              (t.status = 0),
              e.sync || ((t.velocity *= f()), (t.value *= f())))
            : (t.velocity = 0);
      }
      function St(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
      }
      function _t(t, e, i, n) {
        t.beginPath(),
          t.moveTo(e.x, e.y),
          t.lineTo(i.x, i.y),
          t.lineTo(n.x, n.y),
          t.closePath();
      }
      function kt(t, e) {
        t.clearRect(0, 0, e.width, e.height);
      }
      var xt = "generated",
        Pt = "touchend",
        Zt = "pointermove",
        Ct = "pointerleave";
      function At(t, e, i) {
        var n,
          r = e[i];
        void 0 !== r &&
          (t[i] = (null !== (n = t[i]) && void 0 !== n ? n : 1) * r);
      }
      var Gt = (function () {
        function t(e) {
          (0, a.Z)(this, t),
            (this.container = e),
            (this.size = { height: 0, width: 0 }),
            (this._context = null),
            (this._generatedCanvas = !1),
            (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        return (
          (0, s.Z)(t, [
            {
              key: "clear",
              value: function () {
                var t = this,
                  e = this.container.actualOptions,
                  i = e.particles.move.trail;
                e.backgroundMask.enable
                  ? this.paint()
                  : i.enable && i.length > 0 && this._trailFillColor
                  ? this._paintBase(vt(this._trailFillColor, 1 / i.length))
                  : this.draw(function (e) {
                      kt(e, t.size);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                var t,
                  e = this;
                this._generatedCanvas
                  ? null === (t = this.element) || void 0 === t || t.remove()
                  : this._resetOriginalStyle(),
                  this.draw(function (t) {
                    kt(t, e.size);
                  }),
                  (this._preDrawUpdaters = []),
                  (this._postDrawUpdaters = []),
                  (this._resizePlugins = []),
                  (this._colorPlugins = []);
              },
            },
            {
              key: "draw",
              value: function (t) {
                if (this._context) return t(this._context);
              },
            },
            {
              key: "drawParticle",
              value: function (t, e) {
                var i,
                  n = this;
                if (!t.spawning && !t.destroyed) {
                  var r = t.getRadius();
                  if (!(r <= 0)) {
                    var o = t.getFillColor(),
                      a =
                        null !== (i = t.getStrokeColor()) && void 0 !== i
                          ? i
                          : o,
                      s = this._getPluginParticleColors(t),
                      u = (0, c.Z)(s, 2),
                      l = u[0],
                      h = u[1];
                    l || (l = o),
                      h || (h = a),
                      (l || h) &&
                        this.draw(function (i) {
                          var o,
                            a,
                            s,
                            u,
                            c,
                            d = n.container.actualOptions,
                            v = t.options.zIndex,
                            p = Math.pow(1 - t.zIndexFactor, v.opacityRate),
                            f =
                              null !==
                                (s =
                                  null !== (o = t.bubble.opacity) &&
                                  void 0 !== o
                                    ? o
                                    : null === (a = t.opacity) || void 0 === a
                                    ? void 0
                                    : a.value) && void 0 !== s
                                ? s
                                : 1,
                            y = f * p,
                            g =
                              (null !==
                                (c =
                                  null === (u = t.stroke) || void 0 === u
                                    ? void 0
                                    : u.opacity) && void 0 !== c
                                ? c
                                : f) * p,
                            w = {},
                            m = { fill: l ? pt(l, y) : void 0 };
                          (m.stroke = h ? pt(h, g) : m.fill),
                            n._applyPreDrawUpdaters(i, t, r, y, m, w),
                            (function (t) {
                              var e,
                                i,
                                n,
                                r,
                                o,
                                a,
                                s,
                                u,
                                c,
                                l,
                                h = t.container,
                                d = t.context,
                                v = t.particle,
                                p = t.delta,
                                f = t.colorStyles,
                                y = t.backgroundMask,
                                g = t.composite,
                                w = t.radius,
                                m = t.opacity,
                                b = t.shadow,
                                S = t.transform,
                                _ = v.getPosition();
                              d.save(),
                                void 0 !== S.a ||
                                void 0 !== S.b ||
                                void 0 !== S.c ||
                                void 0 !== S.d
                                  ? d.setTransform(
                                      null !== (e = S.a) && void 0 !== e
                                        ? e
                                        : 1,
                                      null !== (i = S.b) && void 0 !== i
                                        ? i
                                        : 0,
                                      null !== (n = S.c) && void 0 !== n
                                        ? n
                                        : 0,
                                      null !== (r = S.d) && void 0 !== r
                                        ? r
                                        : 1,
                                      _.x,
                                      _.y
                                    )
                                  : d.translate(_.x, _.y),
                                d.beginPath();
                              var k =
                                v.rotation +
                                (v.pathRotation ? v.velocity.angle : 0);
                              0 !== k && d.rotate(k),
                                y && (d.globalCompositeOperation = g);
                              var x = v.shadowColor;
                              b.enable &&
                                x &&
                                ((d.shadowBlur = b.blur),
                                (d.shadowColor = vt(x)),
                                (d.shadowOffsetX = b.offset.x),
                                (d.shadowOffsetY = b.offset.y)),
                                f.fill && (d.fillStyle = f.fill);
                              var P = v.stroke;
                              (d.lineWidth =
                                null !== (o = v.strokeWidth) && void 0 !== o
                                  ? o
                                  : 0),
                                f.stroke && (d.strokeStyle = f.stroke),
                                (function (t, e, i, n, r, o) {
                                  if (i.shape) {
                                    var a = t.drawers.get(i.shape);
                                    a &&
                                      a.draw(
                                        e,
                                        i,
                                        n,
                                        r,
                                        o,
                                        t.retina.pixelRatio
                                      );
                                  }
                                })(h, d, v, w, m, p),
                                (null !==
                                  (a =
                                    null === P || void 0 === P
                                      ? void 0
                                      : P.width) && void 0 !== a
                                  ? a
                                  : 0) > 0 && d.stroke(),
                                v.close && d.closePath(),
                                v.fill && d.fill(),
                                d.restore(),
                                d.save(),
                                void 0 !== S.a ||
                                void 0 !== S.b ||
                                void 0 !== S.c ||
                                void 0 !== S.d
                                  ? d.setTransform(
                                      null !== (s = S.a) && void 0 !== s
                                        ? s
                                        : 1,
                                      null !== (u = S.b) && void 0 !== u
                                        ? u
                                        : 0,
                                      null !== (c = S.c) && void 0 !== c
                                        ? c
                                        : 0,
                                      null !== (l = S.d) && void 0 !== l
                                        ? l
                                        : 1,
                                      _.x,
                                      _.y
                                    )
                                  : d.translate(_.x, _.y),
                                v.rotation && d.rotate(v.rotation),
                                y && (d.globalCompositeOperation = g),
                                (function (t, e, i, n, r, o) {
                                  if (i.shape) {
                                    var a = t.drawers.get(i.shape);
                                    (null === a || void 0 === a
                                      ? void 0
                                      : a.afterEffect) &&
                                      a.afterEffect(
                                        e,
                                        i,
                                        n,
                                        r,
                                        o,
                                        t.retina.pixelRatio
                                      );
                                  }
                                })(h, d, v, w, m, p),
                                d.restore();
                            })({
                              container: n.container,
                              context: i,
                              particle: t,
                              delta: e,
                              colorStyles: m,
                              backgroundMask: d.backgroundMask.enable,
                              composite: d.backgroundMask.composite,
                              radius:
                                r * Math.pow(1 - t.zIndexFactor, v.sizeRate),
                              opacity: y,
                              shadow: t.options.shadow,
                              transform: w,
                            }),
                            n._applyPostDrawUpdaters(t);
                        });
                  }
                }
              },
            },
            {
              key: "drawParticlePlugin",
              value: function (t, e, i) {
                this.draw(function (n) {
                  !(function (t, e, i, n) {
                    e.drawParticle &&
                      (t.save(), e.drawParticle(t, i, n), t.restore());
                  })(n, t, e, i);
                });
              },
            },
            {
              key: "drawPlugin",
              value: function (t, e) {
                this.draw(function (i) {
                  !(function (t, e, i) {
                    e.draw && (t.save(), e.draw(t, i), t.restore());
                  })(i, t, e);
                });
              },
            },
            {
              key: "init",
              value: function () {
                this.resize(),
                  this._initStyle(),
                  this._initCover(),
                  this._initTrail(),
                  this.initBackground(),
                  this.initUpdaters(),
                  this.initPlugins(),
                  this.paint();
              },
            },
            {
              key: "initBackground",
              value: function () {
                var t = this.container.actualOptions.background,
                  e = this.element,
                  i = null === e || void 0 === e ? void 0 : e.style;
                if (i) {
                  if (t.color) {
                    var n = ot(t.color);
                    i.backgroundColor = n ? vt(n, t.opacity) : "";
                  } else i.backgroundColor = "";
                  (i.backgroundImage = t.image || ""),
                    (i.backgroundPosition = t.position || ""),
                    (i.backgroundRepeat = t.repeat || ""),
                    (i.backgroundSize = t.size || "");
                }
              },
            },
            {
              key: "initPlugins",
              value: function () {
                this._resizePlugins = [];
                var t,
                  e = (0, n.Z)(this.container.plugins);
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var i = (0, c.Z)(t.value, 2)[1];
                    i.resize && this._resizePlugins.push(i),
                      (i.particleFillColor || i.particleStrokeColor) &&
                        this._colorPlugins.push(i);
                  }
                } catch (r) {
                  e.e(r);
                } finally {
                  e.f();
                }
              },
            },
            {
              key: "initUpdaters",
              value: function () {
                (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
                var t,
                  e = (0, n.Z)(this.container.particles.updaters);
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var i = t.value;
                    i.afterDraw && this._postDrawUpdaters.push(i),
                      (i.getColorStyles ||
                        i.getTransformValues ||
                        i.beforeDraw) &&
                        this._preDrawUpdaters.push(i);
                  }
                } catch (r) {
                  e.e(r);
                } finally {
                  e.f();
                }
              },
            },
            {
              key: "loadCanvas",
              value: function (t) {
                var e;
                this._generatedCanvas &&
                  (null === (e = this.element) || void 0 === e || e.remove()),
                  (this._generatedCanvas =
                    t.dataset && xt in t.dataset
                      ? "true" === t.dataset.generated
                      : this._generatedCanvas),
                  (this.element = t),
                  (this._originalStyle = j({}, this.element.style)),
                  (this.size.height = t.offsetHeight),
                  (this.size.width = t.offsetWidth),
                  (this._context = this.element.getContext("2d")),
                  this.container.retina.init(),
                  this.initBackground();
              },
            },
            {
              key: "paint",
              value: function () {
                var t = this,
                  e = this.container.actualOptions;
                this.draw(function (i) {
                  e.backgroundMask.enable && e.backgroundMask.cover
                    ? (kt(i, t.size), t._paintBase(t._coverColorStyle))
                    : t._paintBase();
                });
              },
            },
            {
              key: "resize",
              value: function () {
                if (this.element) {
                  var t = this.container,
                    e = t.retina.pixelRatio,
                    i = t.canvas.size,
                    n = this.element.offsetWidth * e,
                    r = this.element.offsetHeight * e;
                  if (
                    r !== i.height ||
                    n !== i.width ||
                    r !== this.element.height ||
                    n !== this.element.width
                  ) {
                    var o = Object.assign({}, i);
                    (this.element.width = i.width =
                      this.element.offsetWidth * e),
                      (this.element.height = i.height =
                        this.element.offsetHeight * e),
                      this.container.started &&
                        (this.resizeFactor = {
                          width: i.width / o.width,
                          height: i.height / o.height,
                        });
                  }
                }
              },
            },
            {
              key: "windowResize",
              value: (function () {
                var t = (0, o.Z)(
                  (0, r.Z)().mark(function t() {
                    var e, i;
                    return (0, r.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.element) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              if (
                                (this.resize(),
                                (e = this.container),
                                (i = e.updateActualOptions()),
                                e.particles.setDensity(),
                                this._applyResizePlugins(),
                                !i)
                              ) {
                                t.next = 9;
                                break;
                              }
                              return (t.next = 9), e.refresh();
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_applyPostDrawUpdaters",
              value: function (t) {
                var e,
                  i,
                  r = (0, n.Z)(this._postDrawUpdaters);
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var o = i.value;
                    null === (e = o.afterDraw) || void 0 === e || e.call(o, t);
                  }
                } catch (a) {
                  r.e(a);
                } finally {
                  r.f();
                }
              },
            },
            {
              key: "_applyPreDrawUpdaters",
              value: function (t, e, i, r, o, a) {
                var s,
                  u,
                  c = (0, n.Z)(this._preDrawUpdaters);
                try {
                  for (c.s(); !(u = c.n()).done; ) {
                    var l = u.value;
                    if (l.getColorStyles) {
                      var h = l.getColorStyles(e, t, i, r),
                        d = h.fill,
                        v = h.stroke;
                      d && (o.fill = d), v && (o.stroke = v);
                    }
                    if (l.getTransformValues) {
                      var p = l.getTransformValues(e);
                      for (var f in p) At(a, p, f);
                    }
                    null === (s = l.beforeDraw) || void 0 === s || s.call(l, e);
                  }
                } catch (y) {
                  c.e(y);
                } finally {
                  c.f();
                }
              },
            },
            {
              key: "_applyResizePlugins",
              value: function () {
                var t,
                  e,
                  i = (0, n.Z)(this._resizePlugins);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var r = e.value;
                    null === (t = r.resize) || void 0 === t || t.call(r);
                  }
                } catch (o) {
                  i.e(o);
                } finally {
                  i.f();
                }
              },
            },
            {
              key: "_getPluginParticleColors",
              value: function (t) {
                var e,
                  i,
                  r,
                  o = (0, n.Z)(this._colorPlugins);
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var a = r.value;
                    if (
                      (!e &&
                        a.particleFillColor &&
                        (e = st(a.particleFillColor(t))),
                      !i &&
                        a.particleStrokeColor &&
                        (i = st(a.particleStrokeColor(t))),
                      e && i)
                    )
                      break;
                  }
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
                return [e, i];
              },
            },
            {
              key: "_initCover",
              value: function () {
                var t = this.container.actualOptions.backgroundMask.cover,
                  e = ot(t.color);
                if (e) {
                  var i = { r: e.r, g: e.g, b: e.b, a: t.opacity };
                  this._coverColorStyle = vt(i, i.a);
                }
              },
            },
            {
              key: "_initStyle",
              value: function () {
                var t = this.element,
                  e = this.container.actualOptions;
                if (t)
                  for (var i in (e.fullScreen.enable
                    ? ((this._originalStyle = j({}, t.style)),
                      t.style.setProperty("position", "fixed", "important"),
                      t.style.setProperty(
                        "z-index",
                        e.fullScreen.zIndex.toString(10),
                        "important"
                      ),
                      t.style.setProperty("top", "0", "important"),
                      t.style.setProperty("left", "0", "important"),
                      t.style.setProperty("width", "100%", "important"),
                      t.style.setProperty("height", "100%", "important"))
                    : this._resetOriginalStyle(),
                  e.style))
                    if (i && e.style) {
                      var n = e.style[i];
                      n && t.style.setProperty(i, n, "important");
                    }
              },
            },
            {
              key: "_initTrail",
              value: function () {
                var t = this.container.actualOptions,
                  e = ot(t.particles.move.trail.fillColor);
                if (e) {
                  var i = t.particles.move.trail;
                  this._trailFillColor = {
                    r: e.r,
                    g: e.g,
                    b: e.b,
                    a: 1 / i.length,
                  };
                }
              },
            },
            {
              key: "_paintBase",
              value: function (t) {
                var e = this;
                this.draw(function (i) {
                  !(function (t, e, i) {
                    t.save(),
                      (t.fillStyle =
                        null !== i && void 0 !== i ? i : "rgba(0,0,0,0)"),
                      t.fillRect(0, 0, e.width, e.height),
                      t.restore();
                  })(i, e.size, t);
                });
              },
            },
            {
              key: "_resetOriginalStyle",
              value: function () {
                var t = this.element,
                  e = this._originalStyle;
                t &&
                  e &&
                  ((t.style.position = e.position),
                  (t.style.zIndex = e.zIndex),
                  (t.style.top = e.top),
                  (t.style.left = e.left),
                  (t.style.width = e.width),
                  (t.style.height = e.height));
              },
            },
          ]),
          t
        );
      })();
      function Ot(t, e, i, n, r) {
        if (n) {
          var o = { passive: !0 };
          "boolean" === typeof r ? (o.capture = r) : void 0 !== r && (o = r),
            t.addEventListener(e, i, o);
        } else {
          var a = r;
          t.removeEventListener(e, i, a);
        }
      }
      var Vt = (function () {
        function t(e) {
          var i = this;
          (0, a.Z)(this, t),
            (this.container = e),
            (this.canPush = !0),
            (this.mouseMoveHandler = function (t) {
              return i.mouseTouchMove(t);
            }),
            (this.touchStartHandler = function (t) {
              return i.mouseTouchMove(t);
            }),
            (this.touchMoveHandler = function (t) {
              return i.mouseTouchMove(t);
            }),
            (this.touchEndHandler = function () {
              return i.mouseTouchFinish();
            }),
            (this.mouseLeaveHandler = function () {
              return i.mouseTouchFinish();
            }),
            (this.touchCancelHandler = function () {
              return i.mouseTouchFinish();
            }),
            (this.touchEndClickHandler = function (t) {
              return i.mouseTouchClick(t);
            }),
            (this.mouseUpHandler = function (t) {
              return i.mouseTouchClick(t);
            }),
            (this.mouseDownHandler = function () {
              return i.mouseDown();
            }),
            (this.visibilityChangeHandler = function () {
              return i.handleVisibilityChange();
            }),
            (this.themeChangeHandler = function (t) {
              return i.handleThemeChange(t);
            }),
            (this.oldThemeChangeHandler = function (t) {
              return i.handleThemeChange(t);
            }),
            (this.resizeHandler = function () {
              return i.handleWindowResize();
            });
        }
        return (
          (0, s.Z)(t, [
            {
              key: "addListeners",
              value: function () {
                this.manageListeners(!0);
              },
            },
            {
              key: "removeListeners",
              value: function () {
                this.manageListeners(!1);
              },
            },
            {
              key: "doMouseTouchClick",
              value: function (t) {
                var e = this,
                  i = this.container,
                  n = i.actualOptions;
                if (this.canPush) {
                  var r = i.interactivity.mouse.position;
                  if (!r) return;
                  (i.interactivity.mouse.clickPosition = Object.assign({}, r)),
                    (i.interactivity.mouse.clickTime = new Date().getTime()),
                    X(n.interactivity.events.onClick.mode, function (t) {
                      return e.handleClickMode(t);
                    });
                }
                "touchend" === t.type &&
                  setTimeout(function () {
                    return e.mouseTouchFinish();
                  }, 500);
              },
            },
            {
              key: "handleClickMode",
              value: function (t) {
                this.container.handleClickMode(t);
              },
            },
            {
              key: "handleThemeChange",
              value: function (t) {
                var e = t.matches
                    ? this.container.options.defaultDarkTheme
                    : this.container.options.defaultLightTheme,
                  i = this.container.options.themes.find(function (t) {
                    return t.name === e;
                  });
                i && i.default.auto && this.container.loadTheme(e);
              },
            },
            {
              key: "handleVisibilityChange",
              value: function () {
                var t = this.container,
                  e = t.actualOptions;
                this.mouseTouchFinish(),
                  e.pauseOnBlur &&
                    ((
                      null === document || void 0 === document
                        ? void 0
                        : document.hidden
                    )
                      ? ((t.pageHidden = !0), t.pause())
                      : ((t.pageHidden = !1),
                        t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
              },
            },
            {
              key: "handleWindowResize",
              value: function () {
                var t = this;
                this.resizeTimeout &&
                  (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
                  (this.resizeTimeout = setTimeout(
                    (0, o.Z)(
                      (0, r.Z)().mark(function e() {
                        var i;
                        return (0, r.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  null === (i = t.container.canvas) ||
                                    void 0 === i
                                    ? void 0
                                    : i.windowResize()
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    500
                  ));
              },
            },
            {
              key: "manageListeners",
              value: function (t) {
                var e,
                  i = this,
                  n = this.container,
                  r = n.actualOptions,
                  o = r.interactivity.detectsOn,
                  a = Ct;
                if ("window" === o)
                  (n.interactivity.element = window), (a = "pointerout");
                else if ("parent" === o && n.canvas.element) {
                  var s = n.canvas.element;
                  n.interactivity.element =
                    null !== (e = s.parentElement) && void 0 !== e
                      ? e
                      : s.parentNode;
                } else n.interactivity.element = n.canvas.element;
                var u = R("(prefers-color-scheme: dark)");
                u &&
                  (void 0 !== u.addEventListener
                    ? Ot(u, "change", this.themeChangeHandler, t)
                    : void 0 !== u.addListener &&
                      (t
                        ? u.addListener(this.oldThemeChangeHandler)
                        : u.removeListener(this.oldThemeChangeHandler)));
                var c = n.interactivity.element;
                if (c) {
                  var l = c;
                  (r.interactivity.events.onHover.enable ||
                    r.interactivity.events.onClick.enable) &&
                    (Ot(c, Zt, this.mouseMoveHandler, t),
                    Ot(c, "touchstart", this.touchStartHandler, t),
                    Ot(c, "touchmove", this.touchMoveHandler, t),
                    r.interactivity.events.onClick.enable
                      ? (Ot(c, Pt, this.touchEndClickHandler, t),
                        Ot(c, "pointerup", this.mouseUpHandler, t),
                        Ot(c, "pointerdown", this.mouseDownHandler, t))
                      : Ot(c, Pt, this.touchEndHandler, t),
                    Ot(c, a, this.mouseLeaveHandler, t),
                    Ot(c, "touchcancel", this.touchCancelHandler, t)),
                    n.canvas.element &&
                      (n.canvas.element.style.pointerEvents =
                        l === n.canvas.element ? "initial" : "none"),
                    r.interactivity.events.resize &&
                      ("undefined" !== typeof ResizeObserver
                        ? this.resizeObserver && !t
                          ? (n.canvas.element &&
                              this.resizeObserver.unobserve(n.canvas.element),
                            this.resizeObserver.disconnect(),
                            delete this.resizeObserver)
                          : !this.resizeObserver &&
                            t &&
                            n.canvas.element &&
                            ((this.resizeObserver = new ResizeObserver(
                              function (t) {
                                t.find(function (t) {
                                  return t.target === n.canvas.element;
                                }) && i.handleWindowResize();
                              }
                            )),
                            this.resizeObserver.observe(n.canvas.element))
                        : Ot(window, "resize", this.resizeHandler, t)),
                    document &&
                      Ot(
                        document,
                        "visibilitychange",
                        this.visibilityChangeHandler,
                        t,
                        !1
                      );
                }
              },
            },
            {
              key: "mouseDown",
              value: function () {
                var t = this.container.interactivity;
                if (t) {
                  var e = t.mouse;
                  (e.clicking = !0), (e.downPosition = e.position);
                }
              },
            },
            {
              key: "mouseTouchClick",
              value: function (t) {
                var e = this.container,
                  i = e.actualOptions,
                  r = e.interactivity.mouse;
                r.inside = !0;
                var o = !1,
                  a = r.position;
                if (a && i.interactivity.events.onClick.enable) {
                  var s,
                    u = (0, n.Z)(e.plugins);
                  try {
                    for (u.s(); !(s = u.n()).done; ) {
                      var l = (0, c.Z)(s.value, 2)[1];
                      if (l.clickPositionValid && (o = l.clickPositionValid(a)))
                        break;
                    }
                  } catch (h) {
                    u.e(h);
                  } finally {
                    u.f();
                  }
                  o || this.doMouseTouchClick(t), (r.clicking = !1);
                }
              },
            },
            {
              key: "mouseTouchFinish",
              value: function () {
                var t = this.container.interactivity;
                if (t) {
                  var e = t.mouse;
                  delete e.position,
                    delete e.clickPosition,
                    delete e.downPosition,
                    (t.status = Ct),
                    (e.inside = !1),
                    (e.clicking = !1);
                }
              },
            },
            {
              key: "mouseTouchMove",
              value: function (t) {
                var e,
                  i,
                  n,
                  r,
                  o,
                  a,
                  s,
                  u = this.container,
                  c = u.actualOptions;
                if (
                  null === (e = u.interactivity) || void 0 === e
                    ? void 0
                    : e.element
                ) {
                  var l;
                  u.interactivity.mouse.inside = !0;
                  var h = u.canvas.element;
                  if (t.type.startsWith("pointer")) {
                    this.canPush = !0;
                    var d = t;
                    if (u.interactivity.element === window) {
                      if (h) {
                        var v = h.getBoundingClientRect();
                        l = { x: d.clientX - v.left, y: d.clientY - v.top };
                      }
                    } else if ("parent" === c.interactivity.detectsOn) {
                      var p = d.target,
                        f = d.currentTarget,
                        y = u.canvas.element;
                      if (p && f && y) {
                        var g = p.getBoundingClientRect(),
                          w = f.getBoundingClientRect(),
                          m = y.getBoundingClientRect();
                        l = {
                          x: d.offsetX + 2 * g.left - (w.left + m.left),
                          y: d.offsetY + 2 * g.top - (w.top + m.top),
                        };
                      } else
                        l = {
                          x:
                            null !== (i = d.offsetX) && void 0 !== i
                              ? i
                              : d.clientX,
                          y:
                            null !== (n = d.offsetY) && void 0 !== n
                              ? n
                              : d.clientY,
                        };
                    } else
                      d.target === u.canvas.element &&
                        (l = {
                          x:
                            null !== (r = d.offsetX) && void 0 !== r
                              ? r
                              : d.clientX,
                          y:
                            null !== (o = d.offsetY) && void 0 !== o
                              ? o
                              : d.clientY,
                        });
                  } else {
                    this.canPush = "touchmove" !== t.type;
                    var b = t,
                      S = b.touches[b.touches.length - 1],
                      _ =
                        null === h || void 0 === h
                          ? void 0
                          : h.getBoundingClientRect();
                    l = {
                      x:
                        S.clientX -
                        (null !==
                          (a = null === _ || void 0 === _ ? void 0 : _.left) &&
                        void 0 !== a
                          ? a
                          : 0),
                      y:
                        S.clientY -
                        (null !==
                          (s = null === _ || void 0 === _ ? void 0 : _.top) &&
                        void 0 !== s
                          ? s
                          : 0),
                    };
                  }
                  var k = u.retina.pixelRatio;
                  l && ((l.x *= k), (l.y *= k)),
                    (u.interactivity.mouse.position = l),
                    (u.interactivity.status = Zt);
                }
              },
            },
          ]),
          t
        );
      })();
      function Et(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return { value: t, factor: i ? 60 / e : (60 * t) / 1e3 };
      }
      var zt = (function () {
          function t(e) {
            (0, a.Z)(this, t), (this.container = e);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "nextFrame",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i, n, o;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((t.prev = 0),
                                  (n = this.container).smooth ||
                                    void 0 === n.lastFrameTime ||
                                    !(e < n.lastFrameTime + 1e3 / n.fpsLimit))
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return n.draw(!1), t.abrupt("return");
                              case 5:
                                if (
                                  ((null !== (i = n.lastFrameTime) &&
                                    void 0 !== i) ||
                                    (n.lastFrameTime = e),
                                  (o = Et(
                                    e - n.lastFrameTime,
                                    n.fpsLimit,
                                    n.smooth
                                  )),
                                  (n.lifeTime += o.value),
                                  (n.lastFrameTime = e),
                                  !(o.value > 1e3))
                                ) {
                                  t.next = 12;
                                  break;
                                }
                                return n.draw(!1), t.abrupt("return");
                              case 12:
                                return (t.next = 14), n.particles.draw(o);
                              case 14:
                                if (
                                  !(n.duration > 0 && n.lifeTime > n.duration)
                                ) {
                                  t.next = 17;
                                  break;
                                }
                                return n.destroy(), t.abrupt("return");
                              case 17:
                                n.getAnimationStatus() && n.draw(!1),
                                  (t.next = 23);
                                break;
                              case 20:
                                (t.prev = 20),
                                  (t.t0 = t.catch(0)),
                                  console.error(
                                    "tsParticles error in animation loop",
                                    t.t0
                                  );
                              case 23:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 20]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })(),
        Tt = (function () {
          function t() {
            (0, a.Z)(this, t), (this.value = "");
          }
          return (
            (0, s.Z)(
              t,
              [
                {
                  key: "load",
                  value: function (t) {
                    void 0 !==
                      (null === t || void 0 === t ? void 0 : t.value) &&
                      (this.value = t.value);
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (e, i) {
                    var n = new t();
                    return (
                      n.load(e),
                      void 0 !== i &&
                        ("string" === typeof i || i instanceof Array
                          ? n.load({ value: i })
                          : n.load(i)),
                      n
                    );
                  },
                },
              ]
            ),
            t
          );
        })(),
        Rt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.color = new Tt()),
              (this.color.value = ""),
              (this.image = ""),
              (this.position = ""),
              (this.repeat = ""),
              (this.size = ""),
              (this.opacity = 1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.color &&
                      (this.color = Tt.create(this.color, t.color)),
                    void 0 !== t.image && (this.image = t.image),
                    void 0 !== t.position && (this.position = t.position),
                    void 0 !== t.repeat && (this.repeat = t.repeat),
                    void 0 !== t.size && (this.size = t.size),
                    void 0 !== t.opacity && (this.opacity = t.opacity));
                },
              },
            ]),
            t
          );
        })(),
        Mt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.color = new Tt()),
              (this.color.value = "#fff"),
              (this.opacity = 1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.color &&
                      (this.color = Tt.create(this.color, t.color)),
                    void 0 !== t.opacity && (this.opacity = t.opacity));
                },
              },
            ]),
            t
          );
        })(),
        Lt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.composite = "destination-out"),
              (this.cover = new Mt()),
              (this.enable = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  if (t) {
                    if (
                      (void 0 !== t.composite && (this.composite = t.composite),
                      void 0 !== t.cover)
                    ) {
                      var e = t.cover,
                        i =
                          "string" === typeof t.cover
                            ? { color: t.cover }
                            : t.cover;
                      this.cover.load(void 0 !== e.color ? e : { color: i });
                    }
                    void 0 !== t.enable && (this.enable = t.enable);
                  }
                },
              },
            ]),
            t
          );
        })(),
        It = (function () {
          function t() {
            (0, a.Z)(this, t), (this.enable = !0), (this.zIndex = 0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.zIndex && (this.zIndex = t.zIndex));
                },
              },
            ]),
            t
          );
        })(),
        Ht = (function () {
          function t() {
            (0, a.Z)(this, t), (this.enable = !1), (this.mode = []);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.mode && (this.mode = t.mode));
                },
              },
            ]),
            t
          );
        })(),
        Dt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.selectors = []),
              (this.enable = !1),
              (this.mode = []),
              (this.type = "circle");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "el",
                get: function () {
                  return this.elementId;
                },
                set: function (t) {
                  this.elementId = t;
                },
              },
              {
                key: "elementId",
                get: function () {
                  return this.ids;
                },
                set: function (t) {
                  this.ids = t;
                },
              },
              {
                key: "ids",
                get: function () {
                  return X(this.selectors, function (t) {
                    return t.replace("#", "");
                  });
                },
                set: function (t) {
                  this.selectors = X(t, function (t) {
                    return "#".concat(t);
                  });
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i;
                  if (t) {
                    var n =
                      null !==
                        (i =
                          null !== (e = t.ids) && void 0 !== e
                            ? e
                            : t.elementId) && void 0 !== i
                        ? i
                        : t.el;
                    void 0 !== n && (this.ids = n),
                      void 0 !== t.selectors && (this.selectors = t.selectors),
                      void 0 !== t.enable && (this.enable = t.enable),
                      void 0 !== t.mode && (this.mode = t.mode),
                      void 0 !== t.type && (this.type = t.type);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Bt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.enable = !1),
              (this.force = 2),
              (this.smooth = 10);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.force && (this.force = t.force),
                    void 0 !== t.smooth && (this.smooth = t.smooth));
                },
              },
            ]),
            t
          );
        })(),
        Nt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.enable = !1),
              (this.mode = []),
              (this.parallax = new Bt());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.mode && (this.mode = t.mode),
                    this.parallax.load(t.parallax));
                },
              },
            ]),
            t
          );
        })(),
        jt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.onClick = new Ht()),
              (this.onDiv = new Dt()),
              (this.onHover = new Nt()),
              (this.resize = !0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "onclick",
                get: function () {
                  return this.onClick;
                },
                set: function (t) {
                  this.onClick = t;
                },
              },
              {
                key: "ondiv",
                get: function () {
                  return this.onDiv;
                },
                set: function (t) {
                  this.onDiv = t;
                },
              },
              {
                key: "onhover",
                get: function () {
                  return this.onHover;
                },
                set: function (t) {
                  this.onHover = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i, n;
                  if (t) {
                    this.onClick.load(
                      null !== (e = t.onClick) && void 0 !== e ? e : t.onclick
                    );
                    var r =
                      null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
                    void 0 !== r &&
                      (this.onDiv = X(r, function (t) {
                        var e = new Dt();
                        return e.load(t), e;
                      })),
                      this.onHover.load(
                        null !== (n = t.onHover) && void 0 !== n ? n : t.onhover
                      ),
                      void 0 !== t.resize && (this.resize = t.resize);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ut = (function () {
          function t(e, i) {
            (0, a.Z)(this, t), (this._engine = e), (this._container = i);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  if (t && this._container) {
                    var e = this._engine.plugins.interactors.get(
                      this._container
                    );
                    if (e) {
                      var i,
                        r = (0, n.Z)(e);
                      try {
                        for (r.s(); !(i = r.n()).done; ) {
                          var o = i.value;
                          o.loadModeOptions && o.loadModeOptions(this, t);
                        }
                      } catch (a) {
                        r.e(a);
                      } finally {
                        r.f();
                      }
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ft = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this.detectsOn = "window"),
              (this.events = new jt()),
              (this.modes = new Ut(e, i));
          }
          return (
            (0, s.Z)(t, [
              {
                key: "detect_on",
                get: function () {
                  return this.detectsOn;
                },
                set: function (t) {
                  this.detectsOn = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    var i =
                      null !== (e = t.detectsOn) && void 0 !== e
                        ? e
                        : t.detect_on;
                    void 0 !== i && (this.detectsOn = i),
                      this.events.load(t.events),
                      this.modes.load(t.modes);
                  }
                },
              },
            ]),
            t
          );
        })(),
        qt = (function () {
          function t() {
            (0, a.Z)(this, t);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  var e, i;
                  t &&
                    (void 0 !== t.position &&
                      (this.position = {
                        x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                        y: null !== (i = t.position.y) && void 0 !== i ? i : 50,
                      }),
                    void 0 !== t.options && (this.options = j({}, t.options)));
                },
              },
            ]),
            t
          );
        })(),
        Wt = (function () {
          function t() {
            (0, a.Z)(this, t), (this.factor = 4), (this.value = !0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.factor && (this.factor = t.factor),
                    void 0 !== t.value && (this.value = t.value));
                },
              },
            ]),
            t
          );
        })(),
        Qt = (function () {
          function t() {
            (0, a.Z)(this, t), (this.disable = !1), (this.reduce = new Wt());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.disable && (this.disable = t.disable),
                    this.reduce.load(t.reduce));
                },
              },
            ]),
            t
          );
        })(),
        Kt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.maxWidth = 1 / 0),
              (this.options = {}),
              (this.mode = "canvas");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
                    void 0 !== t.mode &&
                      ("screen" === t.mode
                        ? (this.mode = "screen")
                        : (this.mode = "canvas")),
                    void 0 !== t.options && (this.options = j({}, t.options)));
                },
              },
            ]),
            t
          );
        })(),
        Xt = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.auto = !1),
              (this.mode = "any"),
              (this.value = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.auto && (this.auto = t.auto),
                    void 0 !== t.mode && (this.mode = t.mode),
                    void 0 !== t.value && (this.value = t.value));
                },
              },
            ]),
            t
          );
        })(),
        Yt = (function () {
          function t() {
            (0, a.Z)(this, t), (this.name = ""), (this.default = new Xt());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.name && (this.name = t.name),
                    this.default.load(t.default),
                    void 0 !== t.options && (this.options = j({}, t.options)));
                },
              },
            ]),
            t
          );
        })(),
        Jt = i(1752),
        $t = i(1120),
        te = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.count = 0),
              (this.enable = !1),
              (this.offset = 0),
              (this.speed = 1),
              (this.decay = 0),
              (this.sync = !0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.count && (this.count = _(t.count)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.offset && (this.offset = _(t.offset)),
                    void 0 !== t.speed && (this.speed = _(t.speed)),
                    void 0 !== t.decay && (this.decay = _(t.decay)),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            t
          );
        })(),
        ee = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.h = new te()),
              (this.s = new te()),
              (this.l = new te());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
                },
              },
            ]),
            t
          );
        })(),
        ie = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i), ((t = e.call(this)).animation = new ee()), t
            );
          }
          return (
            (0, s.Z)(
              i,
              [
                {
                  key: "load",
                  value: function (t) {
                    if (
                      ((0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(
                        this,
                        t
                      ),
                      t)
                    ) {
                      var e = t.animation;
                      void 0 !== e &&
                        (void 0 !== e.enable
                          ? this.animation.h.load(e)
                          : this.animation.load(t.animation));
                    }
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t, e) {
                    var n = new i();
                    return (
                      n.load(t),
                      void 0 !== e &&
                        ("string" === typeof e || e instanceof Array
                          ? n.load({ value: e })
                          : n.load(e)),
                      n
                    );
                  },
                },
              ]
            ),
            i
          );
        })(Tt),
        ne = (function () {
          function t() {
            (0, a.Z)(this, t), (this.enable = !0), (this.retries = 0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.retries && (this.retries = t.retries));
                },
              },
            ]),
            t
          );
        })(),
        re = (function () {
          function t() {
            (0, a.Z)(this, t), (this.enable = !1), (this.minimumValue = 0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.minimumValue &&
                      (this.minimumValue = t.minimumValue));
                },
              },
            ]),
            t
          );
        })(),
        oe = (function () {
          function t() {
            (0, a.Z)(this, t), (this.random = new re()), (this.value = 0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    ("boolean" === typeof t.random
                      ? (this.random.enable = t.random)
                      : this.random.load(t.random),
                    void 0 !== t.value &&
                      (this.value = _(
                        t.value,
                        this.random.enable ? this.random.minimumValue : void 0
                      )));
                },
              },
            ]),
            t
          );
        })(),
        ae = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).random.minimumValue = 0.1),
              (t.value = 1),
              t
            );
          }
          return (0, s.Z)(i);
        })(oe),
        se = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.horizontal = new ae()),
              (this.vertical = new ae());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (this.horizontal.load(t.horizontal),
                    this.vertical.load(t.vertical));
                },
              },
            ]),
            t
          );
        })(),
        ue = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.bounce = new se()),
              (this.enable = !1),
              (this.mode = "bounce"),
              (this.overlap = new ne());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (this.bounce.load(t.bounce),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.mode && (this.mode = t.mode),
                    this.overlap.load(t.overlap));
                },
              },
            ]),
            t
          );
        })(),
        ce = (function () {
          function t() {
            (0, a.Z)(this, t), (this.offset = 0), (this.value = 90);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.offset && (this.offset = _(t.offset)),
                    void 0 !== t.value && (this.value = _(t.value)));
                },
              },
            ]),
            t
          );
        })(),
        le = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.distance = 200),
              (this.enable = !1),
              (this.rotate = { x: 3e3, y: 3e3 });
          }
          return (
            (0, s.Z)(t, [
              {
                key: "rotateX",
                get: function () {
                  return this.rotate.x;
                },
                set: function (t) {
                  this.rotate.x = t;
                },
              },
              {
                key: "rotateY",
                get: function () {
                  return this.rotate.y;
                },
                set: function (t) {
                  this.rotate.y = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i, n, r;
                  if (t) {
                    void 0 !== t.distance && (this.distance = _(t.distance)),
                      void 0 !== t.enable && (this.enable = t.enable);
                    var o =
                      null !==
                        (i =
                          null === (e = t.rotate) || void 0 === e
                            ? void 0
                            : e.x) && void 0 !== i
                        ? i
                        : t.rotateX;
                    void 0 !== o && (this.rotate.x = o);
                    var a =
                      null !==
                        (r =
                          null === (n = t.rotate) || void 0 === n
                            ? void 0
                            : n.y) && void 0 !== r
                        ? r
                        : t.rotateY;
                    void 0 !== a && (this.rotate.y = a);
                  }
                },
              },
            ]),
            t
          );
        })(),
        he = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.acceleration = 9.81),
              (this.enable = !1),
              (this.inverse = !1),
              (this.maxSpeed = 50);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.acceleration &&
                      (this.acceleration = _(t.acceleration)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.inverse && (this.inverse = t.inverse),
                    void 0 !== t.maxSpeed && (this.maxSpeed = _(t.maxSpeed)));
                },
              },
            ]),
            t
          );
        })(),
        de = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            return (0, a.Z)(this, i), e.call(this);
          }
          return (0, s.Z)(i);
        })(oe),
        ve = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.clamp = !0),
              (this.delay = new de()),
              (this.enable = !1),
              (this.options = {});
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.clamp && (this.clamp = t.clamp),
                    this.delay.load(t.delay),
                    void 0 !== t.enable && (this.enable = t.enable),
                    (this.generator = t.generator),
                    t.options && (this.options = j(this.options, t.options)));
                },
              },
            ]),
            t
          );
        })(),
        pe = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.enable = !1),
              (this.length = 10),
              (this.fillColor = new Tt()),
              (this.fillColor.value = "#000000");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    (this.fillColor = Tt.create(this.fillColor, t.fillColor)),
                    void 0 !== t.length && (this.length = t.length));
                },
              },
            ]),
            t
          );
        })(),
        fe = (function () {
          function t() {
            (0, a.Z)(this, t), (this.default = "out");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  var e, i, n, r;
                  t &&
                    (void 0 !== t.default && (this.default = t.default),
                    (this.bottom =
                      null !== (e = t.bottom) && void 0 !== e ? e : t.default),
                    (this.left =
                      null !== (i = t.left) && void 0 !== i ? i : t.default),
                    (this.right =
                      null !== (n = t.right) && void 0 !== n ? n : t.default),
                    (this.top =
                      null !== (r = t.top) && void 0 !== r ? r : t.default));
                },
              },
            ]),
            t
          );
        })(),
        ye = (function () {
          function t() {
            (0, a.Z)(this, t), (this.acceleration = 0), (this.enable = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.acceleration &&
                      (this.acceleration = _(t.acceleration)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    (this.position = t.position ? j({}, t.position) : void 0));
                },
              },
            ]),
            t
          );
        })(),
        ge = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.angle = new ce()),
              (this.attract = new le()),
              (this.center = { x: 50, y: 50, mode: "percent", radius: 0 }),
              (this.decay = 0),
              (this.distance = {}),
              (this.direction = "none"),
              (this.drift = 0),
              (this.enable = !1),
              (this.gravity = new he()),
              (this.path = new ve()),
              (this.outModes = new fe()),
              (this.random = !1),
              (this.size = !1),
              (this.speed = 2),
              (this.spin = new ye()),
              (this.straight = !1),
              (this.trail = new pe()),
              (this.vibrate = !1),
              (this.warp = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "bounce",
                get: function () {
                  return this.collisions;
                },
                set: function (t) {
                  this.collisions = t;
                },
              },
              {
                key: "collisions",
                get: function () {
                  return !1;
                },
                set: function (t) {},
              },
              {
                key: "noise",
                get: function () {
                  return this.path;
                },
                set: function (t) {
                  this.path = t;
                },
              },
              {
                key: "outMode",
                get: function () {
                  return this.outModes.default;
                },
                set: function (t) {
                  this.outModes.default = t;
                },
              },
              {
                key: "out_mode",
                get: function () {
                  return this.outMode;
                },
                set: function (t) {
                  this.outMode = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i, n, r;
                  if (t) {
                    this.angle.load(
                      "number" === typeof t.angle ? { value: t.angle } : t.angle
                    ),
                      this.attract.load(t.attract),
                      (this.center = j(
                        null !== (e = this.center) && void 0 !== e ? e : {},
                        t.center
                      )),
                      void 0 !== t.decay && (this.decay = t.decay),
                      void 0 !== t.direction && (this.direction = t.direction),
                      void 0 !== t.distance &&
                        (this.distance =
                          "number" === typeof t.distance
                            ? { horizontal: t.distance, vertical: t.distance }
                            : Object.assign({}, t.distance)),
                      void 0 !== t.drift && (this.drift = _(t.drift)),
                      void 0 !== t.enable && (this.enable = t.enable),
                      this.gravity.load(t.gravity);
                    var o =
                      null !==
                        (n =
                          null !== (i = t.outModes) && void 0 !== i
                            ? i
                            : t.outMode) && void 0 !== n
                        ? n
                        : t.out_mode;
                    void 0 !== o &&
                      ("object" === typeof o
                        ? this.outModes.load(o)
                        : this.outModes.load({ default: o })),
                      this.path.load(
                        null !== (r = t.path) && void 0 !== r ? r : t.noise
                      ),
                      void 0 !== t.random && (this.random = t.random),
                      void 0 !== t.size && (this.size = t.size),
                      void 0 !== t.speed && (this.speed = _(t.speed)),
                      this.spin.load(t.spin),
                      void 0 !== t.straight && (this.straight = t.straight),
                      this.trail.load(t.trail),
                      void 0 !== t.vibrate && (this.vibrate = t.vibrate),
                      void 0 !== t.warp && (this.warp = t.warp);
                  }
                },
              },
            ]),
            t
          );
        })(),
        we = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.count = 0),
              (this.enable = !1),
              (this.speed = 1),
              (this.decay = 0),
              (this.sync = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.count && (this.count = _(t.count)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.speed && (this.speed = _(t.speed)),
                    void 0 !== t.decay && (this.decay = _(t.decay)),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            t
          );
        })(),
        me = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).destroy = "none"),
              (t.enable = !1),
              (t.speed = 2),
              (t.startValue = "random"),
              (t.sync = !1),
              t
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "opacity_min",
                get: function () {
                  return this.minimumValue;
                },
                set: function (t) {
                  this.minimumValue = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  t &&
                    ((0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    void 0 !== t.destroy && (this.destroy = t.destroy),
                    void 0 !== t.enable && (this.enable = t.enable),
                    (this.minimumValue =
                      null !== (e = t.minimumValue) && void 0 !== e
                        ? e
                        : t.opacity_min),
                    void 0 !== t.speed && (this.speed = t.speed),
                    void 0 !== t.startValue && (this.startValue = t.startValue),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            i
          );
        })(we),
        be = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).animation = new me()),
              (t.random.minimumValue = 0.1),
              (t.value = 1),
              t
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "anim",
                get: function () {
                  return this.animation;
                },
                set: function (t) {
                  this.animation = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    (0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    );
                    var n =
                      null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== n &&
                      (this.animation.load(n),
                      (this.value = _(
                        this.value,
                        this.animation.enable
                          ? this.animation.minimumValue
                          : void 0
                      )));
                  }
                },
              },
            ]),
            i
          );
        })(oe),
        Se = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.enable = !1),
              (this.area = 800),
              (this.factor = 1e3);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "value_area",
                get: function () {
                  return this.area;
                },
                set: function (t) {
                  this.area = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    void 0 !== t.enable && (this.enable = t.enable);
                    var i =
                      null !== (e = t.area) && void 0 !== e ? e : t.value_area;
                    void 0 !== i && (this.area = i),
                      void 0 !== t.factor && (this.factor = t.factor);
                  }
                },
              },
            ]),
            t
          );
        })(),
        _e = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.density = new Se()),
              (this.limit = 0),
              (this.value = 100);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "max",
                get: function () {
                  return this.limit;
                },
                set: function (t) {
                  this.limit = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    this.density.load(t.density);
                    var i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
                    void 0 !== i && (this.limit = i),
                      void 0 !== t.value && (this.value = t.value);
                  }
                },
              },
            ]),
            t
          );
        })(),
        ke = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this.blur = 0),
              (this.color = new Tt()),
              (this.enable = !1),
              (this.offset = { x: 0, y: 0 }),
              (this.color.value = "#000");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.blur && (this.blur = t.blur),
                    (this.color = Tt.create(this.color, t.color)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.offset &&
                      (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
                      void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
                },
              },
            ]),
            t
          );
        })(),
        xe = (function () {
          function t() {
            (0, a.Z)(this, t), (this.options = {}), (this.type = "circle");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "character",
                get: function () {
                  var t;
                  return null !== (t = this.options.character) && void 0 !== t
                    ? t
                    : this.options.char;
                },
                set: function (t) {
                  (this.options.character = t), (this.options.char = t);
                },
              },
              {
                key: "custom",
                get: function () {
                  return this.options;
                },
                set: function (t) {
                  this.options = t;
                },
              },
              {
                key: "image",
                get: function () {
                  var t;
                  return null !== (t = this.options.image) && void 0 !== t
                    ? t
                    : this.options.images;
                },
                set: function (t) {
                  (this.options.image = t), (this.options.images = t);
                },
              },
              {
                key: "images",
                get: function () {
                  return this.image;
                },
                set: function (t) {
                  this.image = t;
                },
              },
              {
                key: "polygon",
                get: function () {
                  var t;
                  return null !== (t = this.options.polygon) && void 0 !== t
                    ? t
                    : this.options.star;
                },
                set: function (t) {
                  (this.options.polygon = t), (this.options.star = t);
                },
              },
              {
                key: "stroke",
                get: function () {
                  return [];
                },
                set: function (t) {},
              },
              {
                key: "load",
                value: function (t) {
                  var e, i, n;
                  if (t) {
                    var r =
                      null !== (e = t.options) && void 0 !== e ? e : t.custom;
                    if (void 0 !== r)
                      for (var o in r) {
                        var a = r[o];
                        a &&
                          (this.options[o] = j(
                            null !== (i = this.options[o]) && void 0 !== i
                              ? i
                              : {},
                            a
                          ));
                      }
                    this.loadShape(t.character, "character", "char", !0),
                      this.loadShape(t.polygon, "polygon", "star", !1),
                      this.loadShape(
                        null !== (n = t.image) && void 0 !== n ? n : t.images,
                        "image",
                        "images",
                        !0
                      ),
                      void 0 !== t.type && (this.type = t.type);
                  }
                },
              },
              {
                key: "loadShape",
                value: function (t, e, i, n) {
                  var r, o;
                  if (t) {
                    var a = t instanceof Array,
                      s = a ? [] : {},
                      u = a !== this.options[e] instanceof Array,
                      c = a !== this.options[i] instanceof Array;
                    u && (this.options[e] = s),
                      c && n && (this.options[i] = s),
                      (this.options[e] = j(
                        null !== (r = this.options[e]) && void 0 !== r ? r : s,
                        t
                      )),
                      (this.options[i] && !n) ||
                        (this.options[i] = j(
                          null !== (o = this.options[i]) && void 0 !== o
                            ? o
                            : s,
                          t
                        ));
                  }
                },
              },
            ]),
            t
          );
        })(),
        Pe = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).destroy = "none"),
              (t.enable = !1),
              (t.speed = 5),
              (t.startValue = "random"),
              (t.sync = !1),
              t
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "size_min",
                get: function () {
                  return this.minimumValue;
                },
                set: function (t) {
                  this.minimumValue = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  (0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (void 0 !== t.destroy && (this.destroy = t.destroy),
                      void 0 !== t.enable && (this.enable = t.enable),
                      (this.minimumValue =
                        null !== (e = t.minimumValue) && void 0 !== e
                          ? e
                          : t.size_min),
                      void 0 !== t.speed && (this.speed = t.speed),
                      void 0 !== t.startValue &&
                        (this.startValue = t.startValue),
                      void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            i
          );
        })(we),
        Ze = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).animation = new Pe()),
              (t.random.minimumValue = 1),
              (t.value = 3),
              t
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "anim",
                get: function () {
                  return this.animation;
                },
                set: function (t) {
                  this.animation = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (
                    ((0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    t)
                  ) {
                    var n =
                      null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== n &&
                      (this.animation.load(n),
                      (this.value = _(
                        this.value,
                        this.animation.enable
                          ? this.animation.minimumValue
                          : void 0
                      )));
                  }
                },
              },
            ]),
            i
          );
        })(oe),
        Ce = (function () {
          function t() {
            (0, a.Z)(this, t), (this.width = 0);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.color &&
                      (this.color = ie.create(this.color, t.color)),
                    void 0 !== t.width && (this.width = t.width),
                    void 0 !== t.opacity && (this.opacity = t.opacity));
                },
              },
            ]),
            t
          );
        })(),
        Ae = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = e.call(this)).opacityRate = 1),
              (t.sizeRate = 1),
              (t.velocityRate = 1),
              t
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  (0, Jt.Z)((0, $t.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (void 0 !== t.opacityRate &&
                        (this.opacityRate = t.opacityRate),
                      void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
                      void 0 !== t.velocityRate &&
                        (this.velocityRate = t.velocityRate));
                },
              },
            ]),
            i
          );
        })(oe),
        Ge = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this._engine = e),
              (this._container = i),
              (this.bounce = new se()),
              (this.collisions = new ue()),
              (this.color = new ie()),
              (this.color.value = "#fff"),
              (this.groups = {}),
              (this.move = new ge()),
              (this.number = new _e()),
              (this.opacity = new be()),
              (this.reduceDuplicates = !1),
              (this.shadow = new ke()),
              (this.shape = new xe()),
              (this.size = new Ze()),
              (this.stroke = new Ce()),
              (this.zIndex = new Ae());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  var e, i, r, o, a, s;
                  if (t) {
                    if (
                      (this.bounce.load(t.bounce),
                      this.color.load(ie.create(this.color, t.color)),
                      void 0 !== t.groups)
                    )
                      for (var u in t.groups) {
                        var c = t.groups[u];
                        void 0 !== c &&
                          (this.groups[u] = j(
                            null !== (e = this.groups[u]) && void 0 !== e
                              ? e
                              : {},
                            c
                          ));
                      }
                    this.move.load(t.move),
                      this.number.load(t.number),
                      this.opacity.load(t.opacity),
                      void 0 !== t.reduceDuplicates &&
                        (this.reduceDuplicates = t.reduceDuplicates),
                      this.shape.load(t.shape),
                      this.size.load(t.size),
                      this.shadow.load(t.shadow),
                      this.zIndex.load(t.zIndex);
                    var l =
                      null !==
                        (r =
                          null === (i = t.move) || void 0 === i
                            ? void 0
                            : i.collisions) && void 0 !== r
                        ? r
                        : null === (o = t.move) || void 0 === o
                        ? void 0
                        : o.bounce;
                    void 0 !== l && (this.collisions.enable = l),
                      this.collisions.load(t.collisions),
                      void 0 !== t.interactivity &&
                        (this.interactivity = j({}, t.interactivity));
                    var h =
                      null !== (a = t.stroke) && void 0 !== a
                        ? a
                        : null === (s = t.shape) || void 0 === s
                        ? void 0
                        : s.stroke;
                    if (
                      (h &&
                        (this.stroke = X(h, function (t) {
                          var e = new Ce();
                          return e.load(t), e;
                        })),
                      this._container)
                    ) {
                      var d = this._engine.plugins.updaters.get(
                        this._container
                      );
                      if (d) {
                        var v,
                          p = (0, n.Z)(d);
                        try {
                          for (p.s(); !(v = p.n()).done; ) {
                            var f = v.value;
                            f.loadOptions && f.loadOptions(this, t);
                          }
                        } catch (b) {
                          p.e(b);
                        } finally {
                          p.f();
                        }
                      }
                      var y = this._engine.plugins.interactors.get(
                        this._container
                      );
                      if (y) {
                        var g,
                          w = (0, n.Z)(y);
                        try {
                          for (w.s(); !(g = w.n()).done; ) {
                            var m = g.value;
                            m.loadParticlesOptions &&
                              m.loadParticlesOptions(this, t);
                          }
                        } catch (b) {
                          w.e(b);
                        } finally {
                          w.f();
                        }
                      }
                    }
                  }
                },
              },
            ]),
            t
          );
        })();
      function Oe(t) {
        for (
          var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        for (var r = 0, o = i; r < o.length; r++) {
          var a = o[r];
          t.load(a);
        }
      }
      function Ve(t, e) {
        for (
          var i = new Ge(t, e),
            n = arguments.length,
            r = new Array(n > 2 ? n - 2 : 0),
            o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        return Oe.apply(void 0, [i].concat(r)), i;
      }
      var Ee = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this._engine = e),
              (this._container = i),
              (this.autoPlay = !0),
              (this.background = new Rt()),
              (this.backgroundMask = new Lt()),
              (this.fullScreen = new It()),
              (this.detectRetina = !0),
              (this.duration = 0),
              (this.fpsLimit = 120),
              (this.interactivity = new Ft(e, i)),
              (this.manualParticles = []),
              (this.motion = new Qt()),
              (this.particles = Ve(this._engine, this._container)),
              (this.pauseOnBlur = !0),
              (this.pauseOnOutsideViewport = !0),
              (this.responsive = []),
              (this.smooth = !1),
              (this.style = {}),
              (this.themes = []),
              (this.zLayers = 100);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "backgroundMode",
                get: function () {
                  return this.fullScreen;
                },
                set: function (t) {
                  this.fullScreen.load(t);
                },
              },
              {
                key: "fps_limit",
                get: function () {
                  return this.fpsLimit;
                },
                set: function (t) {
                  this.fpsLimit = t;
                },
              },
              {
                key: "retina_detect",
                get: function () {
                  return this.detectRetina;
                },
                set: function (t) {
                  this.detectRetina = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e,
                    i,
                    r,
                    o,
                    a,
                    s = this;
                  if (t) {
                    void 0 !== t.preset &&
                      X(t.preset, function (t) {
                        return s._importPreset(t);
                      }),
                      void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
                    var u =
                      null !== (e = t.detectRetina) && void 0 !== e
                        ? e
                        : t.retina_detect;
                    void 0 !== u && (this.detectRetina = u),
                      void 0 !== t.duration && (this.duration = t.duration);
                    var c =
                      null !== (i = t.fpsLimit) && void 0 !== i
                        ? i
                        : t.fps_limit;
                    void 0 !== c && (this.fpsLimit = c),
                      void 0 !== t.pauseOnBlur &&
                        (this.pauseOnBlur = t.pauseOnBlur),
                      void 0 !== t.pauseOnOutsideViewport &&
                        (this.pauseOnOutsideViewport =
                          t.pauseOnOutsideViewport),
                      void 0 !== t.zLayers && (this.zLayers = t.zLayers),
                      this.background.load(t.background);
                    var l =
                      null !== (r = t.fullScreen) && void 0 !== r
                        ? r
                        : t.backgroundMode;
                    "boolean" === typeof l
                      ? (this.fullScreen.enable = l)
                      : this.fullScreen.load(l),
                      this.backgroundMask.load(t.backgroundMask),
                      this.interactivity.load(t.interactivity),
                      void 0 !== t.manualParticles &&
                        (this.manualParticles = t.manualParticles.map(function (
                          t
                        ) {
                          var e = new qt();
                          return e.load(t), e;
                        })),
                      this.motion.load(t.motion),
                      this.particles.load(t.particles),
                      (this.style = j(this.style, t.style)),
                      this._engine.plugins.loadOptions(this, t),
                      void 0 !== t.smooth && (this.smooth = t.smooth);
                    var h = this._engine.plugins.interactors.get(
                      this._container
                    );
                    if (h) {
                      var d,
                        v = (0, n.Z)(h);
                      try {
                        for (v.s(); !(d = v.n()).done; ) {
                          var p = d.value;
                          p.loadOptions && p.loadOptions(this, t);
                        }
                      } catch (k) {
                        v.e(k);
                      } finally {
                        v.f();
                      }
                    }
                    if (void 0 !== t.responsive) {
                      var f,
                        y = (0, n.Z)(t.responsive);
                      try {
                        for (y.s(); !(f = y.n()).done; ) {
                          var g = f.value,
                            w = new Kt();
                          w.load(g), this.responsive.push(w);
                        }
                      } catch (k) {
                        y.e(k);
                      } finally {
                        y.f();
                      }
                    }
                    if (
                      (this.responsive.sort(function (t, e) {
                        return t.maxWidth - e.maxWidth;
                      }),
                      void 0 !== t.themes)
                    ) {
                      var m,
                        b = (0, n.Z)(t.themes);
                      try {
                        for (b.s(); !(m = b.n()).done; ) {
                          var S = m.value,
                            _ = new Yt();
                          _.load(S), this.themes.push(_);
                        }
                      } catch (k) {
                        b.e(k);
                      } finally {
                        b.f();
                      }
                    }
                    (this.defaultDarkTheme =
                      null === (o = this._findDefaultTheme("dark")) ||
                      void 0 === o
                        ? void 0
                        : o.name),
                      (this.defaultLightTheme =
                        null === (a = this._findDefaultTheme("light")) ||
                        void 0 === a
                          ? void 0
                          : a.name);
                  }
                },
              },
              {
                key: "setResponsive",
                value: function (t, e, i) {
                  this.load(i);
                  var n = this.responsive.find(function (i) {
                    return "screen" === i.mode && screen
                      ? i.maxWidth > screen.availWidth
                      : i.maxWidth * e > t;
                  });
                  return (
                    this.load(null === n || void 0 === n ? void 0 : n.options),
                    null === n || void 0 === n ? void 0 : n.maxWidth
                  );
                },
              },
              {
                key: "setTheme",
                value: function (t) {
                  if (t) {
                    var e = this.themes.find(function (e) {
                      return e.name === t;
                    });
                    e && this.load(e.options);
                  } else {
                    var i = R("(prefers-color-scheme: dark)"),
                      n = i && i.matches,
                      r = this._findDefaultTheme(n ? "dark" : "light");
                    r && this.load(r.options);
                  }
                },
              },
              {
                key: "_findDefaultTheme",
                value: function (t) {
                  var e;
                  return null !==
                    (e = this.themes.find(function (e) {
                      return e.default.value && e.default.mode === t;
                    })) && void 0 !== e
                    ? e
                    : this.themes.find(function (t) {
                        return t.default.value && "any" === t.default.mode;
                      });
                },
              },
              {
                key: "_importPreset",
                value: function (t) {
                  this.load(this._engine.plugins.getPreset(t));
                },
              },
            ]),
            t
          );
        })(),
        ze = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this.container = i),
              (this._engine = e),
              (this._interactors = this._engine.plugins.getInteractors(
                this.container,
                !0
              )),
              (this._externalInteractors = []),
              (this._particleInteractors = []);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "externalInteract",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i, o, a;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (i = (0, n.Z)(this._externalInteractors)),
                                  (t.prev = 1),
                                  i.s();
                              case 3:
                                if ((o = i.n()).done) {
                                  t.next = 10;
                                  break;
                                }
                                if (!(a = o.value).isEnabled()) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 8), a.interact(e);
                              case 8:
                                t.next = 3;
                                break;
                              case 10:
                                t.next = 15;
                                break;
                              case 12:
                                (t.prev = 12), (t.t0 = t.catch(1)), i.e(t.t0);
                              case 15:
                                return (t.prev = 15), i.f(), t.finish(15);
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 12, 15, 18]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handleClickMode",
                value: function (t) {
                  var e,
                    i = (0, n.Z)(this._externalInteractors);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var r = e.value;
                      r.handleClickMode && r.handleClickMode(t);
                    }
                  } catch (o) {
                    i.e(o);
                  } finally {
                    i.f();
                  }
                },
              },
              {
                key: "init",
                value: function () {
                  (this._externalInteractors = []),
                    (this._particleInteractors = []);
                  var t,
                    e = (0, n.Z)(this._interactors);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      var i = t.value;
                      switch (i.type) {
                        case 0:
                          this._externalInteractors.push(i);
                          break;
                        case 1:
                          this._particleInteractors.push(i);
                      }
                      i.init();
                    }
                  } catch (r) {
                    e.e(r);
                  } finally {
                    e.f();
                  }
                },
              },
              {
                key: "particlesInteract",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      var o, a, s, u, c;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                o = (0, n.Z)(this._externalInteractors);
                                try {
                                  for (o.s(); !(a = o.n()).done; )
                                    a.value.clear(e, i);
                                } catch (r) {
                                  o.e(r);
                                } finally {
                                  o.f();
                                }
                                (s = (0, n.Z)(this._particleInteractors)),
                                  (t.prev = 3),
                                  s.s();
                              case 5:
                                if ((u = s.n()).done) {
                                  t.next = 12;
                                  break;
                                }
                                if (!(c = u.value).isEnabled(e)) {
                                  t.next = 10;
                                  break;
                                }
                                return (t.next = 10), c.interact(e, i);
                              case 10:
                                t.next = 5;
                                break;
                              case 12:
                                t.next = 17;
                                break;
                              case 14:
                                (t.prev = 14), (t.t0 = t.catch(3)), s.e(t.t0);
                              case 17:
                                return (t.prev = 17), s.f(), t.finish(17);
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 14, 17, 20]]
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "reset",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i, o, a, s, u, c;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (i = (0, n.Z)(this._externalInteractors)),
                                  (t.prev = 1),
                                  i.s();
                              case 3:
                                if ((o = i.n()).done) {
                                  t.next = 10;
                                  break;
                                }
                                if (!(a = o.value).isEnabled()) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 8), a.reset(e);
                              case 8:
                                t.next = 3;
                                break;
                              case 10:
                                t.next = 15;
                                break;
                              case 12:
                                (t.prev = 12), (t.t0 = t.catch(1)), i.e(t.t0);
                              case 15:
                                return (t.prev = 15), i.f(), t.finish(15);
                              case 18:
                                (s = (0, n.Z)(this._particleInteractors)),
                                  (t.prev = 19),
                                  s.s();
                              case 21:
                                if ((u = s.n()).done) {
                                  t.next = 28;
                                  break;
                                }
                                if (!(c = u.value).isEnabled(e)) {
                                  t.next = 26;
                                  break;
                                }
                                return (t.next = 26), c.reset(e);
                              case 26:
                                t.next = 21;
                                break;
                              case 28:
                                t.next = 33;
                                break;
                              case 30:
                                (t.prev = 30), (t.t1 = t.catch(19)), s.e(t.t1);
                              case 33:
                                return (t.prev = 33), s.f(), t.finish(33);
                              case 36:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [
                          [1, 12, 15, 18],
                          [19, 30, 33, 36],
                        ]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })(),
        Te = function (t) {
          (M(t.outMode, t.checkModes) || M(t.outMode, t.checkModes)) &&
            (t.coord > t.maxCoord - 2 * t.radius
              ? t.setCb(-t.radius)
              : t.coord < 2 * t.radius && t.setCb(t.radius));
        },
        Re = (function () {
          function t(e, i, r, o, s, u) {
            var l, h, d, p, g, _, x, P, Z, C, A, G, O;
            (0, a.Z)(this, t),
              (this.id = i),
              (this.container = r),
              (this.group = u),
              (this._engine = e),
              (this.fill = !0),
              (this.pathRotation = !1),
              (this.close = !0),
              (this.lastPathTime = 0),
              (this.destroyed = !1),
              (this.unbreakable = !1),
              (this.rotation = 0),
              (this.misplaced = !1),
              (this.retina = { maxDistance: {} }),
              (this.outType = "normal"),
              (this.ignoresResizeRatio = !0);
            var V = r.retina.pixelRatio,
              E = r.actualOptions,
              z = Ve(this._engine, r, E.particles),
              T = z.shape.type,
              R = z.reduceDuplicates;
            if (
              ((this.shape = Y(T, this.id, R)),
              null === s || void 0 === s ? void 0 : s.shape)
            ) {
              if (s.shape.type) {
                var M = s.shape.type;
                this.shape = Y(M, this.id, R);
              }
              var L = new xe();
              L.load(s.shape),
                this.shape && (this.shapeData = this._loadShapeData(L, R));
            } else this.shapeData = this._loadShapeData(z.shape, R);
            z.load(s),
              z.load(
                null === (l = this.shapeData) || void 0 === l
                  ? void 0
                  : l.particles
              ),
              (this.interactivity = new Ft(e, r)),
              this.interactivity.load(r.actualOptions.interactivity),
              this.interactivity.load(z.interactivity),
              (this.fill =
                null !==
                  (d =
                    null === (h = this.shapeData) || void 0 === h
                      ? void 0
                      : h.fill) && void 0 !== d
                  ? d
                  : this.fill),
              (this.close =
                null !==
                  (g =
                    null === (p = this.shapeData) || void 0 === p
                      ? void 0
                      : p.close) && void 0 !== g
                  ? g
                  : this.close),
              (this.options = z);
            var I = this.options.move.path;
            (this.pathDelay = 1e3 * k(I.delay)),
              I.generator &&
                ((this.pathGenerator = this._engine.plugins.getPathGenerator(
                  I.generator
                )),
                this.pathGenerator &&
                  r.addPath(I.generator, this.pathGenerator) &&
                  this.pathGenerator.init(r));
            var H = m(this.options.zIndex.value);
            r.retina.initParticle(this);
            var D = this.options.size,
              B = D.value,
              N = D.animation;
            if (
              ((this.size = {
                enable: D.animation.enable,
                value: m(D.value) * r.retina.pixelRatio,
                max: S(B) * V,
                min: b(B) * V,
                loops: 0,
                maxLoops: m(D.animation.count),
              }),
              N.enable)
            ) {
              switch (
                ((this.size.status = 0),
                (this.size.decay = 1 - m(N.decay)),
                N.startValue)
              ) {
                case "min":
                  (this.size.value = this.size.min), (this.size.status = 0);
                  break;
                case "random":
                  (this.size.value = w(this.size) * V),
                    (this.size.status = f() >= 0.5 ? 0 : 1);
                  break;
                default:
                  (this.size.value = this.size.max), (this.size.status = 1);
              }
              (this.size.velocity =
                ((null !== (_ = this.retina.sizeAnimationSpeed) && void 0 !== _
                  ? _
                  : r.retina.sizeAnimationSpeed) /
                  100) *
                r.retina.reduceFactor),
                N.sync || (this.size.velocity *= f());
            }
            (this.bubble = { inRange: !1 }),
              (this.slow = { inRange: !1, factor: 1 }),
              (this.position = this._calcPosition(r, o, y(H, 0, r.zLayers))),
              (this.initialPosition = this.position.copy());
            var j = r.canvas.size,
              U = this.options.move.center,
              F = "percent" === U.mode;
            switch (
              ((this.moveCenter = {
                x:
                  (null !== (x = U.x) && void 0 !== x ? x : 50) *
                  (F ? j.width / 100 : 1),
                y:
                  (null !== (P = U.y) && void 0 !== P ? P : 50) *
                  (F ? j.height / 100 : 1),
                radius:
                  null !== (Z = this.options.move.center.radius) && void 0 !== Z
                    ? Z
                    : 0,
                mode:
                  null !== (C = this.options.move.center.mode) && void 0 !== C
                    ? C
                    : "percent",
              }),
              (this.direction = (function (t, e, i) {
                if ("number" === typeof t) return (t * Math.PI) / 180;
                switch (t) {
                  case "top":
                    return -Math.PI / 2;
                  case "top-right":
                    return -Math.PI / 4;
                  case "right":
                    return 0;
                  case "bottom-right":
                    return Math.PI / 4;
                  case "bottom":
                    return Math.PI / 2;
                  case "bottom-left":
                    return (3 * Math.PI) / 4;
                  case "left":
                    return Math.PI;
                  case "top-left":
                    return (-3 * Math.PI) / 4;
                  case "inside":
                    return Math.atan2(i.y - e.y, i.x - e.x);
                  case "outside":
                    return Math.atan2(e.y - i.y, e.x - i.x);
                  default:
                    return f() * Math.PI * 2;
                }
              })(this.options.move.direction, this.position, this.moveCenter)),
              this.options.move.direction)
            ) {
              case "inside":
                this.outType = "inside";
                break;
              case "outside":
                this.outType = "outside";
            }
            (this.initialVelocity = this._calculateVelocity()),
              (this.velocity = this.initialVelocity.copy()),
              (this.moveDecay = 1 - m(this.options.move.decay)),
              (this.offset = v.origin);
            var q = r.particles;
            (q.needsSort = q.needsSort || q.lastZIndex < this.position.z),
              (q.lastZIndex = this.position.z),
              (this.zIndexFactor = this.position.z / r.zLayers),
              (this.sides = 24);
            var W = r.drawers.get(this.shape);
            W ||
              ((W = this._engine.plugins.getShapeDrawer(this.shape)) &&
                r.drawers.set(this.shape, W)),
              (null === W || void 0 === W ? void 0 : W.loadShape) &&
                (null === W || void 0 === W || W.loadShape(this));
            var Q = null === W || void 0 === W ? void 0 : W.getSidesCount;
            Q && (this.sides = Q(this)),
              (this.spawning = !1),
              (this.shadowColor = ot(this.options.shadow.color));
            var K,
              X = (0, n.Z)(r.particles.updaters);
            try {
              for (X.s(); !(K = X.n()).done; ) {
                var J = K.value;
                null === (A = J.init) || void 0 === A || A.call(J, this);
              }
            } catch (at) {
              X.e(at);
            } finally {
              X.f();
            }
            var $,
              tt = (0, n.Z)(r.particles.movers);
            try {
              for (tt.s(); !($ = tt.n()).done; ) {
                var et = $.value;
                null === (G = et.init) || void 0 === G || G.call(et, this);
              }
            } catch (at) {
              tt.e(at);
            } finally {
              tt.f();
            }
            (null === W || void 0 === W ? void 0 : W.particleInit) &&
              W.particleInit(r, this);
            var it,
              nt = (0, n.Z)(r.plugins);
            try {
              for (nt.s(); !(it = nt.n()).done; ) {
                var rt = (0, c.Z)(it.value, 2)[1];
                null === (O = rt.particleCreated) ||
                  void 0 === O ||
                  O.call(rt, this);
              }
            } catch (at) {
              nt.e(at);
            } finally {
              nt.f();
            }
          }
          return (
            (0, s.Z)(t, [
              {
                key: "destroy",
                value: function (t) {
                  if (!this.unbreakable && !this.destroyed) {
                    (this.destroyed = !0),
                      (this.bubble.inRange = !1),
                      (this.slow.inRange = !1);
                    var e,
                      i = (0, n.Z)(this.container.plugins);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var r = (0, c.Z)(e.value, 2)[1];
                        r.particleDestroyed && r.particleDestroyed(this, t);
                      }
                    } catch (u) {
                      i.e(u);
                    } finally {
                      i.f();
                    }
                    var o,
                      a = (0, n.Z)(this.container.particles.updaters);
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        s.particleDestroyed && s.particleDestroyed(this, t);
                      }
                    } catch (u) {
                      a.e(u);
                    } finally {
                      a.f();
                    }
                  }
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e,
                    i = this.container,
                    r = (0, n.Z)(i.plugins);
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var o = (0, c.Z)(e.value, 2)[1];
                      i.canvas.drawParticlePlugin(o, this, t);
                    }
                  } catch (a) {
                    r.e(a);
                  } finally {
                    r.f();
                  }
                  i.canvas.drawParticle(this, t);
                },
              },
              {
                key: "getFillColor",
                value: function () {
                  var t,
                    e,
                    i =
                      null !== (t = this.bubble.color) && void 0 !== t
                        ? t
                        : wt(this.color);
                  if (i && this.roll && (this.backColor || this.roll.alter)) {
                    var n = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                      r = this.roll.horizontal ? Math.PI / 2 : 0;
                    if (
                      Math.floor(
                        ((null !== (e = this.roll.angle) && void 0 !== e
                          ? e
                          : 0) +
                          r) /
                          (Math.PI / n)
                      ) % 2
                    ) {
                      if (this.backColor) return this.backColor;
                      if (this.roll.alter)
                        return (function (t, e, i) {
                          return {
                            h: t.h,
                            s: t.s,
                            l: t.l + ("darken" === e ? -1 : 1) * i,
                          };
                        })(i, this.roll.alter.type, this.roll.alter.value);
                    }
                  }
                  return i;
                },
              },
              {
                key: "getMass",
                value: function () {
                  return (Math.pow(this.getRadius(), 2) * Math.PI) / 2;
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z,
                  };
                },
              },
              {
                key: "getRadius",
                value: function () {
                  var t;
                  return null !== (t = this.bubble.radius) && void 0 !== t
                    ? t
                    : this.size.value;
                },
              },
              {
                key: "getStrokeColor",
                value: function () {
                  var t, e;
                  return null !==
                    (e =
                      null !== (t = this.bubble.color) && void 0 !== t
                        ? t
                        : wt(this.strokeColor)) && void 0 !== e
                    ? e
                    : this.getFillColor();
                },
              },
              {
                key: "isInsideCanvas",
                value: function () {
                  var t = this.getRadius(),
                    e = this.container.canvas.size;
                  return (
                    this.position.x >= -t &&
                    this.position.y >= -t &&
                    this.position.y <= e.height + t &&
                    this.position.x <= e.width + t
                  );
                },
              },
              {
                key: "isVisible",
                value: function () {
                  return (
                    !this.destroyed && !this.spawning && this.isInsideCanvas()
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.opacity && (this.opacity.loops = 0),
                    (this.size.loops = 0);
                },
              },
              {
                key: "_calcPosition",
                value: function (t, e, i) {
                  var r,
                    o,
                    a,
                    s,
                    u,
                    l =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    h = (0, n.Z)(t.plugins);
                  try {
                    for (h.s(); !(u = h.n()).done; ) {
                      var v = (0, c.Z)(u.value, 2),
                        p = v[1],
                        f =
                          void 0 !== p.particlePosition
                            ? p.particlePosition(e, this)
                            : void 0;
                      if (void 0 !== f) return d.create(f.x, f.y, i);
                    }
                  } catch (k) {
                    h.e(k);
                  } finally {
                    h.f();
                  }
                  var y = t.canvas.size,
                    g = V({ size: y, position: e }),
                    w = d.create(g.x, g.y, i),
                    m = this.getRadius(),
                    b = this.options.move.outModes,
                    S = function (e) {
                      Te({
                        outMode: e,
                        checkModes: ["bounce", "bounce-horizontal"],
                        coord: w.x,
                        maxCoord: t.canvas.size.width,
                        setCb: function (t) {
                          return (w.x += t);
                        },
                        radius: m,
                      });
                    },
                    _ = function (e) {
                      Te({
                        outMode: e,
                        checkModes: ["bounce", "bounce-vertical"],
                        coord: w.y,
                        maxCoord: t.canvas.size.height,
                        setCb: function (t) {
                          return (w.y += t);
                        },
                        radius: m,
                      });
                    };
                  return (
                    S(null !== (r = b.left) && void 0 !== r ? r : b.default),
                    S(null !== (o = b.right) && void 0 !== o ? o : b.default),
                    _(null !== (a = b.top) && void 0 !== a ? a : b.default),
                    _(null !== (s = b.bottom) && void 0 !== s ? s : b.default),
                    this._checkOverlap(w, l)
                      ? this._calcPosition(t, void 0, i, l + 1)
                      : w
                  );
                },
              },
              {
                key: "_calculateVelocity",
                value: function () {
                  var t = (function (t) {
                      var e = v.origin;
                      return (e.length = 1), (e.angle = t), e;
                    })(this.direction).copy(),
                    e = this.options.move;
                  if ("inside" === e.direction || "outside" === e.direction)
                    return t;
                  var i = (Math.PI / 180) * m(e.angle.value),
                    n = (Math.PI / 180) * m(e.angle.offset),
                    r = { left: n - i / 2, right: n + i / 2 };
                  return (
                    e.straight || (t.angle += w(_(r.left, r.right))),
                    e.random &&
                      "number" === typeof e.speed &&
                      (t.length *= f()),
                    t
                  );
                },
              },
              {
                key: "_checkOverlap",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    i = this.options.collisions,
                    r = this.getRadius();
                  if (!i.enable) return !1;
                  var o = i.overlap;
                  if (o.enable) return !1;
                  var a = o.retries;
                  if (a >= 0 && e > a)
                    throw new Error(
                      "Particle is overlapping and can't be placed"
                    );
                  var s,
                    u = !1,
                    c = (0, n.Z)(this.container.particles.array);
                  try {
                    for (c.s(); !(s = c.n()).done; ) {
                      var l = s.value;
                      if (P(t, l.position) < r + l.getRadius()) {
                        u = !0;
                        break;
                      }
                    }
                  } catch (h) {
                    c.e(h);
                  } finally {
                    c.f();
                  }
                  return u;
                },
              },
              {
                key: "_loadShapeData",
                value: function (t, e) {
                  var i = t.options[this.shape];
                  if (i) return j({}, Y(i, this.id, e));
                },
              },
            ]),
            t
          );
        })(),
        Me = (0, s.Z)(function t(e, i) {
          (0, a.Z)(this, t), (this.position = e), (this.particle = i);
        }),
        Le = (0, s.Z)(function t(e, i) {
          (0, a.Z)(this, t), (this.position = { x: e, y: i });
        }),
        Ie = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t, n, r) {
            var o;
            return (0, a.Z)(this, i), ((o = e.call(this, t, n)).radius = r), o;
          }
          return (
            (0, s.Z)(i, [
              {
                key: "contains",
                value: function (t) {
                  return P(t, this.position) <= this.radius;
                },
              },
              {
                key: "intersects",
                value: function (t) {
                  var e = t,
                    i = t,
                    n = this.position,
                    r = t.position,
                    o = { x: Math.abs(r.x - n.x), y: Math.abs(r.y - n.y) },
                    a = this.radius;
                  if (void 0 !== i.radius)
                    return (
                      a + i.radius >
                      Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2))
                    );
                  if (void 0 !== e.size) {
                    var s = e.size.width,
                      u = e.size.height;
                    return (
                      Math.pow(o.x - s, 2) + Math.pow(o.y - u, 2) <=
                        Math.pow(a, 2) ||
                      (o.x <= a + s && o.y <= a + u) ||
                      o.x <= s ||
                      o.y <= u
                    );
                  }
                  return !1;
                },
              },
            ]),
            i
          );
        })(Le),
        He = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t, n, r, o) {
            var s;
            return (
              (0, a.Z)(this, i),
              ((s = e.call(this, t, n)).size = { height: o, width: r }),
              s
            );
          }
          return (
            (0, s.Z)(i, [
              {
                key: "contains",
                value: function (t) {
                  var e = this.size.width,
                    i = this.size.height,
                    n = this.position;
                  return (
                    t.x >= n.x && t.x <= n.x + e && t.y >= n.y && t.y <= n.y + i
                  );
                },
              },
              {
                key: "intersects",
                value: function (t) {
                  t instanceof Ie && t.intersects(this);
                  var e = this.size.width,
                    n = this.size.height,
                    r = this.position,
                    o = t.position,
                    a = t instanceof i ? t.size : { width: 0, height: 0 },
                    s = a.width,
                    u = a.height;
                  return (
                    o.x < r.x + e &&
                    o.x + s > r.x &&
                    o.y < r.y + n &&
                    o.y + u > r.y
                  );
                },
              },
            ]),
            i
          );
        })(Le),
        De = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this.rectangle = e),
              (this.capacity = i),
              (this.points = []),
              (this.divided = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "insert",
                value: function (t) {
                  var e, i, n, r, o;
                  return (
                    !!this.rectangle.contains(t.position) &&
                    (this.points.length < this.capacity
                      ? (this.points.push(t), !0)
                      : (this.divided || this.subdivide(),
                        null !==
                          (o =
                            (null === (e = this.northEast) || void 0 === e
                              ? void 0
                              : e.insert(t)) ||
                            (null === (i = this.northWest) || void 0 === i
                              ? void 0
                              : i.insert(t)) ||
                            (null === (n = this.southEast) || void 0 === n
                              ? void 0
                              : n.insert(t)) ||
                            (null === (r = this.southWest) || void 0 === r
                              ? void 0
                              : r.insert(t))) &&
                          void 0 !== o &&
                          o))
                  );
                },
              },
              {
                key: "query",
                value: function (t, e, i) {
                  var r,
                    o,
                    a,
                    s,
                    u = null !== i && void 0 !== i ? i : [];
                  if (!t.intersects(this.rectangle)) return [];
                  var c,
                    l = (0, n.Z)(this.points);
                  try {
                    for (l.s(); !(c = l.n()).done; ) {
                      var h = c.value;
                      (!t.contains(h.position) &&
                        P(t.position, h.position) > h.particle.getRadius() &&
                        (!e || e(h.particle))) ||
                        u.push(h.particle);
                    }
                  } catch (d) {
                    l.e(d);
                  } finally {
                    l.f();
                  }
                  return (
                    this.divided &&
                      (null === (r = this.northEast) ||
                        void 0 === r ||
                        r.query(t, e, u),
                      null === (o = this.northWest) ||
                        void 0 === o ||
                        o.query(t, e, u),
                      null === (a = this.southEast) ||
                        void 0 === a ||
                        a.query(t, e, u),
                      null === (s = this.southWest) ||
                        void 0 === s ||
                        s.query(t, e, u)),
                    u
                  );
                },
              },
              {
                key: "queryCircle",
                value: function (t, e, i) {
                  return this.query(new Ie(t.x, t.y, e), i);
                },
              },
              {
                key: "queryRectangle",
                value: function (t, e, i) {
                  return this.query(new He(t.x, t.y, e.width, e.height), i);
                },
              },
              {
                key: "subdivide",
                value: function () {
                  var e = this.rectangle.position.x,
                    i = this.rectangle.position.y,
                    n = this.rectangle.size.width,
                    r = this.rectangle.size.height,
                    o = this.capacity;
                  (this.northEast = new t(new He(e, i, n / 2, r / 2), o)),
                    (this.northWest = new t(
                      new He(e + n / 2, i, n / 2, r / 2),
                      o
                    )),
                    (this.southEast = new t(
                      new He(e, i + r / 2, n / 2, r / 2),
                      o
                    )),
                    (this.southWest = new t(
                      new He(e + n / 2, i + r / 2, n / 2, r / 2),
                      o
                    )),
                    (this.divided = !0);
                },
              },
            ]),
            t
          );
        })(),
        Be = (function () {
          function t(e, i) {
            (0, a.Z)(this, t),
              (this.container = i),
              (this._engine = e),
              (this.nextId = 0),
              (this.array = []),
              (this.zArray = []),
              (this.limit = 0),
              (this.needsSort = !1),
              (this.lastZIndex = 0),
              (this.interactionManager = new ze(this._engine, i));
            var n = this.container.canvas.size;
            (this.quadTree = new De(
              new He(
                -n.width / 4,
                -n.height / 4,
                (3 * n.width) / 2,
                (3 * n.height) / 2
              ),
              4
            )),
              (this.movers = this._engine.plugins.getMovers(i, !0)),
              (this.updaters = this._engine.plugins.getUpdaters(i, !0));
          }
          return (
            (0, s.Z)(t, [
              {
                key: "count",
                get: function () {
                  return this.array.length;
                },
              },
              {
                key: "addManualParticles",
                value: function () {
                  var t,
                    e = this.container,
                    i = e.actualOptions,
                    r = (0, n.Z)(i.manualParticles);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var o = t.value;
                      this.addParticle(
                        A({ size: e.canvas.size, position: o.position }),
                        o.options
                      );
                    }
                  } catch (a) {
                    r.e(a);
                  } finally {
                    r.f();
                  }
                },
              },
              {
                key: "addParticle",
                value: function (t, e, i, n) {
                  var r = this.container.actualOptions.particles.number.limit;
                  if (r > 0) {
                    var o = this.count + 1 - r;
                    o > 0 && this.removeQuantity(o);
                  }
                  return this._pushParticle(t, e, i, n);
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.array = []), (this.zArray = []);
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.array = []),
                    (this.zArray = []),
                    (this.movers = []),
                    (this.updaters = []);
                },
              },
              {
                key: "draw",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i, o, a, s, u, l, h, d;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (i = this.container),
                                  (o = this.container.canvas.size),
                                  (this.quadTree = new De(
                                    new He(
                                      -o.width / 4,
                                      -o.height / 4,
                                      (3 * o.width) / 2,
                                      (3 * o.height) / 2
                                    ),
                                    4
                                  )),
                                  i.canvas.clear(),
                                  (t.next = 5),
                                  this.update(e)
                                );
                              case 5:
                                this.needsSort &&
                                  (this.zArray.sort(function (t, e) {
                                    return (
                                      e.position.z - t.position.z || t.id - e.id
                                    );
                                  }),
                                  (this.lastZIndex =
                                    this.zArray[
                                      this.zArray.length - 1
                                    ].position.z),
                                  (this.needsSort = !1)),
                                  (a = (0, n.Z)(i.plugins));
                                try {
                                  for (a.s(); !(s = a.n()).done; )
                                    (u = (0, c.Z)(s.value, 2)),
                                      (l = u[1]),
                                      i.canvas.drawPlugin(l, e);
                                } catch (r) {
                                  a.e(r);
                                } finally {
                                  a.f();
                                }
                                h = (0, n.Z)(this.zArray);
                                try {
                                  for (h.s(); !(d = h.n()).done; )
                                    d.value.draw(e);
                                } catch (r) {
                                  h.e(r);
                                } finally {
                                  h.f();
                                }
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handleClickMode",
                value: function (t) {
                  this.interactionManager.handleClickMode(t);
                },
              },
              {
                key: "init",
                value: function () {
                  var t,
                    e = this.container,
                    i = e.actualOptions;
                  (this.lastZIndex = 0), (this.needsSort = !1);
                  var r = !1;
                  (this.updaters = this._engine.plugins.getUpdaters(e, !0)),
                    this.interactionManager.init();
                  var o,
                    a = (0, n.Z)(e.plugins);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var s = (0, c.Z)(o.value, 2)[1];
                      if (
                        (void 0 !== s.particlesInitialization &&
                          (r = s.particlesInitialization()),
                        r)
                      )
                        break;
                    }
                  } catch (y) {
                    a.e(y);
                  } finally {
                    a.f();
                  }
                  this.interactionManager.init();
                  var u,
                    l = (0, n.Z)(e.pathGenerators);
                  try {
                    for (l.s(); !(u = l.n()).done; ) {
                      (0, c.Z)(u.value, 2)[1].init(e);
                    }
                  } catch (y) {
                    l.e(y);
                  } finally {
                    l.f();
                  }
                  if ((this.addManualParticles(), !r)) {
                    for (var h in i.particles.groups)
                      for (
                        var d = i.particles.groups[h], v = this.count, p = 0;
                        p <
                          (null === (t = d.number) || void 0 === t
                            ? void 0
                            : t.value) && v < i.particles.number.value;
                        v++, p++
                      )
                        this.addParticle(void 0, d, h);
                    for (var f = this.count; f < i.particles.number.value; f++)
                      this.addParticle();
                  }
                },
              },
              {
                key: "push",
                value: function (t, e, i, n) {
                  this.pushing = !0;
                  for (var r = 0; r < t; r++)
                    this.addParticle(
                      null === e || void 0 === e ? void 0 : e.position,
                      i,
                      n
                    );
                  this.pushing = !1;
                },
              },
              {
                key: "redraw",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.clear(),
                                  this.init(),
                                  (t.next = 4),
                                  this.draw({ value: 0, factor: 0 })
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "remove",
                value: function (t, e, i) {
                  this.removeAt(this.array.indexOf(t), void 0, e, i);
                },
              },
              {
                key: "removeAt",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1,
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0;
                  if (!(t < 0 || t > this.count))
                    for (var r = 0, o = t; r < e && o < this.count; o++) {
                      var a = this.array[o];
                      if (a && a.group === i) {
                        a.destroy(n), this.array.splice(o--, 1);
                        var s = this.zArray.indexOf(a);
                        this.zArray.splice(s, 1),
                          r++,
                          this._engine.dispatchEvent("particleRemoved", {
                            container: this.container,
                            data: { particle: a },
                          });
                      }
                    }
                },
              },
              {
                key: "removeQuantity",
                value: function (t, e) {
                  this.removeAt(0, t, e);
                },
              },
              {
                key: "setDensity",
                value: function () {
                  var t = this.container.actualOptions;
                  for (var e in t.particles.groups)
                    this._applyDensity(t.particles.groups[e], 0, e);
                  this._applyDensity(t.particles, t.manualParticles.length);
                },
              },
              {
                key: "update",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        h,
                        d,
                        v,
                        p,
                        f,
                        y,
                        g,
                        w,
                        m,
                        b,
                        S,
                        _,
                        k,
                        x,
                        P,
                        Z,
                        C,
                        A,
                        G,
                        O,
                        V,
                        E,
                        z,
                        T;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (a = this.container),
                                  (s = []),
                                  (u = (0, n.Z)(a.pathGenerators));
                                try {
                                  for (u.s(); !(l = u.n()).done; )
                                    (h = (0, c.Z)(l.value, 2)), h[1].update();
                                } catch (r) {
                                  u.e(r);
                                } finally {
                                  u.f();
                                }
                                d = (0, n.Z)(a.plugins);
                                try {
                                  for (d.s(); !(v = d.n()).done; )
                                    (p = (0, c.Z)(v.value, 2)),
                                      (f = p[1]),
                                      null === (i = f.update) ||
                                        void 0 === i ||
                                        i.call(f, e);
                                } catch (r) {
                                  d.e(r);
                                } finally {
                                  d.f();
                                }
                                (y = (0, n.Z)(this.array)), (t.prev = 6), y.s();
                              case 8:
                                if ((g = y.n()).done) {
                                  t.next = 41;
                                  break;
                                }
                                return (
                                  (w = g.value),
                                  (m = a.canvas.resizeFactor) &&
                                    !w.ignoresResizeRatio &&
                                    ((w.position.x *= m.width),
                                    (w.position.y *= m.height)),
                                  (w.ignoresResizeRatio = !1),
                                  (t.next = 15),
                                  this.interactionManager.reset(w)
                                );
                              case 15:
                                (b = (0, n.Z)(this.container.plugins)),
                                  (t.prev = 16),
                                  b.s();
                              case 18:
                                if ((S = b.n()).done) {
                                  t.next = 25;
                                  break;
                                }
                                if (
                                  ((_ = (0, c.Z)(S.value, 2)),
                                  (k = _[1]),
                                  !w.destroyed)
                                ) {
                                  t.next = 22;
                                  break;
                                }
                                return t.abrupt("break", 25);
                              case 22:
                                null === (o = k.particleUpdate) ||
                                  void 0 === o ||
                                  o.call(k, w, e);
                              case 23:
                                t.next = 18;
                                break;
                              case 25:
                                t.next = 30;
                                break;
                              case 27:
                                (t.prev = 27), (t.t0 = t.catch(16)), b.e(t.t0);
                              case 30:
                                return (t.prev = 30), b.f(), t.finish(30);
                              case 33:
                                x = (0, n.Z)(this.movers);
                                try {
                                  for (x.s(); !(P = x.n()).done; )
                                    (Z = P.value).isEnabled(w) && Z.move(w, e);
                                } catch (r) {
                                  x.e(r);
                                } finally {
                                  x.f();
                                }
                                if (!w.destroyed) {
                                  t.next = 38;
                                  break;
                                }
                                return s.push(w), t.abrupt("continue", 39);
                              case 38:
                                this.quadTree.insert(
                                  new Me(w.getPosition(), w)
                                );
                              case 39:
                                t.next = 8;
                                break;
                              case 41:
                                t.next = 46;
                                break;
                              case 43:
                                (t.prev = 43), (t.t1 = t.catch(6)), y.e(t.t1);
                              case 46:
                                return (t.prev = 46), y.f(), t.finish(46);
                              case 49:
                                for (C = 0, A = s; C < A.length; C++)
                                  (G = A[C]), this.remove(G);
                                return (
                                  (t.next = 52),
                                  this.interactionManager.externalInteract(e)
                                );
                              case 52:
                                (O = (0, n.Z)(a.particles.array)),
                                  (t.prev = 53),
                                  O.s();
                              case 55:
                                if ((V = O.n()).done) {
                                  t.next = 64;
                                  break;
                                }
                                (E = V.value), (z = (0, n.Z)(this.updaters));
                                try {
                                  for (z.s(); !(T = z.n()).done; )
                                    T.value.update(E, e);
                                } catch (r) {
                                  z.e(r);
                                } finally {
                                  z.f();
                                }
                                if (E.destroyed || E.spawning) {
                                  t.next = 62;
                                  break;
                                }
                                return (
                                  (t.next = 62),
                                  this.interactionManager.particlesInteract(
                                    E,
                                    e
                                  )
                                );
                              case 62:
                                t.next = 55;
                                break;
                              case 64:
                                t.next = 69;
                                break;
                              case 66:
                                (t.prev = 66), (t.t2 = t.catch(53)), O.e(t.t2);
                              case 69:
                                return (t.prev = 69), O.f(), t.finish(69);
                              case 72:
                                delete a.canvas.resizeFactor;
                              case 73:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [
                          [6, 43, 46, 49],
                          [16, 27, 30, 33],
                          [53, 66, 69, 72],
                        ]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_applyDensity",
                value: function (t, e, i) {
                  var n;
                  if (
                    null === (n = t.number.density) || void 0 === n
                      ? void 0
                      : n.enable
                  ) {
                    var r = t.number,
                      o = this._initDensityFactor(r.density),
                      a = r.value,
                      s = r.limit > 0 ? r.limit : a,
                      u = Math.min(a, s) * o + e,
                      c = Math.min(
                        this.count,
                        this.array.filter(function (t) {
                          return t.group === i;
                        }).length
                      );
                    (this.limit = r.limit * o),
                      c < u
                        ? this.push(Math.abs(u - c), void 0, t, i)
                        : c > u && this.removeQuantity(c - u, i);
                  }
                },
              },
              {
                key: "_initDensityFactor",
                value: function (t) {
                  var e = this.container;
                  if (!e.canvas.element || !t.enable) return 1;
                  var i = e.canvas.element,
                    n = e.retina.pixelRatio;
                  return (
                    (i.width * i.height) / (t.factor * Math.pow(n, 2) * t.area)
                  );
                },
              },
              {
                key: "_pushParticle",
                value: function (t, e, i, n) {
                  try {
                    var r = new Re(
                        this._engine,
                        this.nextId,
                        this.container,
                        t,
                        e,
                        i
                      ),
                      o = !0;
                    if ((n && (o = n(r)), !o)) return;
                    return (
                      this.array.push(r),
                      this.zArray.push(r),
                      this.nextId++,
                      this._engine.dispatchEvent("particleAdded", {
                        container: this.container,
                        data: { particle: r },
                      }),
                      r
                    );
                  } catch (a) {
                    return void console.warn(
                      "error adding particle: ".concat(a)
                    );
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ne = (function () {
          function t(e) {
            (0, a.Z)(this, t), (this.container = e);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "init",
                value: function () {
                  var t = this,
                    e = this.container,
                    i = e.actualOptions;
                  this.pixelRatio =
                    !i.detectRetina || T() ? 1 : window.devicePixelRatio;
                  var n = this.container.actualOptions.motion;
                  if (n && (n.disable || n.reduce.value)) {
                    var r = R("(prefers-reduced-motion: reduce)");
                    if (r) {
                      this._handleMotionChange(r);
                      var o = function () {
                        t._handleMotionChange(r),
                          e.refresh().catch(function () {});
                      };
                      void 0 !== r.addEventListener
                        ? r.addEventListener("change", o)
                        : void 0 !== r.addListener && r.addListener(o);
                    } else this.reduceFactor = 1;
                  } else this.reduceFactor = 1;
                  var a = this.pixelRatio;
                  if (e.canvas.element) {
                    var s = e.canvas.element;
                    (e.canvas.size.width = s.offsetWidth * a),
                      (e.canvas.size.height = s.offsetHeight * a);
                  }
                  var u = i.particles;
                  (this.attractDistance = m(u.move.attract.distance) * a),
                    (this.sizeAnimationSpeed = m(u.size.animation.speed) * a),
                    (this.maxSpeed = m(u.move.gravity.maxSpeed) * a);
                },
              },
              {
                key: "initParticle",
                value: function (t) {
                  var e = t.options,
                    i = this.pixelRatio,
                    n = e.move.distance,
                    r = t.retina;
                  (r.attractDistance = m(e.move.attract.distance) * i),
                    (r.moveDrift = m(e.move.drift) * i),
                    (r.moveSpeed = m(e.move.speed) * i),
                    (r.sizeAnimationSpeed = m(e.size.animation.speed) * i);
                  var o = r.maxDistance;
                  (o.horizontal =
                    void 0 !== n.horizontal ? n.horizontal * i : void 0),
                    (o.vertical =
                      void 0 !== n.vertical ? n.vertical * i : void 0),
                    (r.maxSpeed = m(e.move.gravity.maxSpeed) * i);
                },
              },
              {
                key: "_handleMotionChange",
                value: function (t) {
                  var e = this.container.actualOptions;
                  if (t.matches) {
                    var i = e.motion;
                    this.reduceFactor = i.disable
                      ? 0
                      : i.reduce.value
                      ? 1 / i.reduce.factor
                      : 1;
                  } else this.reduceFactor = 1;
                },
              },
            ]),
            t
          );
        })();
      function je(t) {
        return t && !t.destroyed;
      }
      function Ue(t, e) {
        for (
          var i = new Ee(t, e),
            n = arguments.length,
            r = new Array(n > 2 ? n - 2 : 0),
            o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        return Oe.apply(void 0, [i].concat(r)), i;
      }
      var Fe = {
          generate: function (t) {
            var e = t.velocity.copy();
            return (e.angle += (e.length * Math.PI) / 180), e;
          },
          init: function () {},
          update: function () {},
        },
        qe = (function () {
          function t(e, i, n) {
            var r = this;
            (0, a.Z)(this, t),
              (this.id = i),
              (this._engine = e),
              (this.fpsLimit = 120),
              (this.smooth = !1),
              (this.duration = 0),
              (this.lifeTime = 0),
              (this._firstStart = !0),
              (this.started = !1),
              (this.destroyed = !1),
              (this._paused = !0),
              (this.lastFrameTime = 0),
              (this.zLayers = 100),
              (this.pageHidden = !1),
              (this._sourceOptions = n),
              (this._initialSourceOptions = n),
              (this.retina = new Ne(this)),
              (this.canvas = new Gt(this)),
              (this.particles = new Be(this._engine, this)),
              (this.frameManager = new zt(this)),
              (this.pathGenerators = new Map()),
              (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
              (this.plugins = new Map()),
              (this.drawers = new Map()),
              (this._options = Ue(this._engine, this)),
              (this.actualOptions = Ue(this._engine, this)),
              (this._eventListeners = new Vt(this)),
              "undefined" !== typeof IntersectionObserver &&
                IntersectionObserver &&
                (this._intersectionObserver = new IntersectionObserver(
                  function (t) {
                    return r._intersectionManager(t);
                  }
                )),
              this._engine.dispatchEvent("containerBuilt", { container: this });
          }
          return (
            (0, s.Z)(t, [
              {
                key: "options",
                get: function () {
                  return this._options;
                },
              },
              {
                key: "sourceOptions",
                get: function () {
                  return this._sourceOptions;
                },
              },
              {
                key: "addClickHandler",
                value: function (t) {
                  var e = this;
                  if (je(this)) {
                    var i = this.interactivity.element;
                    if (i) {
                      var n = function (i, n, r) {
                          if (je(e)) {
                            var o = e.retina.pixelRatio,
                              a = { x: n.x * o, y: n.y * o },
                              s = e.particles.quadTree.queryCircle(a, r * o);
                            t(i, s);
                          }
                        },
                        r = !1,
                        o = !1;
                      i.addEventListener("click", function (t) {
                        if (je(e)) {
                          var i = t,
                            r = {
                              x: i.offsetX || i.clientX,
                              y: i.offsetY || i.clientY,
                            };
                          n(t, r, 1);
                        }
                      }),
                        i.addEventListener("touchstart", function () {
                          je(e) && ((r = !0), (o = !1));
                        }),
                        i.addEventListener("touchmove", function () {
                          je(e) && (o = !0);
                        }),
                        i.addEventListener("touchend", function (t) {
                          var i, a, s;
                          if (je(e)) {
                            if (r && !o) {
                              var u = t,
                                c = u.touches[u.touches.length - 1];
                              if (
                                !c &&
                                !(c =
                                  u.changedTouches[u.changedTouches.length - 1])
                              )
                                return;
                              var l =
                                  null === (i = e.canvas.element) ||
                                  void 0 === i
                                    ? void 0
                                    : i.getBoundingClientRect(),
                                h = {
                                  x:
                                    c.clientX -
                                    (null !==
                                      (a =
                                        null === l || void 0 === l
                                          ? void 0
                                          : l.left) && void 0 !== a
                                      ? a
                                      : 0),
                                  y:
                                    c.clientY -
                                    (null !==
                                      (s =
                                        null === l || void 0 === l
                                          ? void 0
                                          : l.top) && void 0 !== s
                                      ? s
                                      : 0),
                                };
                              n(t, h, Math.max(c.radiusX, c.radiusY));
                            }
                            (r = !1), (o = !1);
                          }
                        }),
                        i.addEventListener("touchcancel", function () {
                          je(e) && ((r = !1), (o = !1));
                        });
                    }
                  }
                },
              },
              {
                key: "addPath",
                value: function (t, e) {
                  var i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  return (
                    !(!je(this) || (!i && this.pathGenerators.has(t))) &&
                    (this.pathGenerators.set(
                      t,
                      null !== e && void 0 !== e ? e : Fe
                    ),
                    !0)
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = this;
                  if (je(this)) {
                    this.stop(),
                      this.particles.destroy(),
                      this.canvas.destroy();
                    var e,
                      i = (0, n.Z)(this.drawers);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var r = (0, c.Z)(e.value, 2)[1];
                        r.destroy && r.destroy(this);
                      }
                    } catch (h) {
                      i.e(h);
                    } finally {
                      i.f();
                    }
                    var o,
                      a = (0, n.Z)(this.drawers.keys());
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        this.drawers.delete(s);
                      }
                    } catch (h) {
                      a.e(h);
                    } finally {
                      a.f();
                    }
                    this._engine.plugins.destroy(this), (this.destroyed = !0);
                    var u = this._engine.dom(),
                      l = u.findIndex(function (e) {
                        return e === t;
                      });
                    l >= 0 && u.splice(l, 1),
                      this._engine.dispatchEvent("containerDestroyed", {
                        container: this,
                      });
                  }
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e = this;
                  if (je(this)) {
                    var i = t;
                    this._drawAnimationFrame = (
                      T()
                        ? function (t) {
                            return setTimeout(t);
                          }
                        : function (t) {
                            return (requestAnimationFrame || setTimeout)(t);
                          }
                    )(
                      (function () {
                        var t = (0, o.Z)(
                          (0, r.Z)().mark(function t(n) {
                            return (0, r.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      i &&
                                        ((e.lastFrameTime = void 0), (i = !1)),
                                      (t.next = 3),
                                      e.frameManager.nextFrame(n)
                                    );
                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  }
                },
              },
              {
                key: "exportConfiguration",
                value: function () {
                  return JSON.stringify(
                    this.actualOptions,
                    function (t, e) {
                      if ("_engine" !== t && "_container" !== t) return e;
                    },
                    2
                  );
                },
              },
              {
                key: "exportImage",
                value: function (t, e, i) {
                  var n;
                  return null === (n = this.canvas.element) || void 0 === n
                    ? void 0
                    : n.toBlob(
                        t,
                        null !== e && void 0 !== e ? e : "image/png",
                        i
                      );
                },
              },
              {
                key: "exportImg",
                value: function (t) {
                  this.exportImage(t);
                },
              },
              {
                key: "getAnimationStatus",
                value: function () {
                  return !this._paused && !this.pageHidden && je(this);
                },
              },
              {
                key: "handleClickMode",
                value: function (t) {
                  if (je(this)) {
                    this.particles.handleClickMode(t);
                    var e,
                      i = (0, n.Z)(this.plugins);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var r = (0, c.Z)(e.value, 2)[1];
                        r.handleClickMode && r.handleClickMode(t);
                      }
                    } catch (o) {
                      i.e(o);
                    } finally {
                      i.f();
                    }
                  }
                },
              },
              {
                key: "init",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      var e,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        h,
                        d,
                        v,
                        p,
                        f,
                        y,
                        g,
                        w,
                        b,
                        S,
                        _,
                        k,
                        x,
                        P,
                        Z,
                        C;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (je(this)) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                (e = this._engine.plugins.getSupportedShapes()),
                                  (i = (0, n.Z)(e));
                                try {
                                  for (i.s(); !(o = i.n()).done; )
                                    (a = o.value),
                                      (s =
                                        this._engine.plugins.getShapeDrawer(
                                          a
                                        )) && this.drawers.set(a, s);
                                } catch (r) {
                                  i.e(r);
                                } finally {
                                  i.f();
                                }
                                (this._options = Ue(
                                  this._engine,
                                  this,
                                  this._initialSourceOptions,
                                  this.sourceOptions
                                )),
                                  (this.actualOptions = Ue(
                                    this._engine,
                                    this,
                                    this._options
                                  )),
                                  this.retina.init(),
                                  this.canvas.init(),
                                  this.updateActualOptions(),
                                  this.canvas.initBackground(),
                                  this.canvas.resize(),
                                  (this.zLayers = this.actualOptions.zLayers),
                                  (this.duration =
                                    1e3 * m(this.actualOptions.duration)),
                                  (this.lifeTime = 0),
                                  (this.fpsLimit =
                                    this.actualOptions.fpsLimit > 0
                                      ? this.actualOptions.fpsLimit
                                      : 120),
                                  (this.smooth = this.actualOptions.smooth),
                                  (u =
                                    this._engine.plugins.getAvailablePlugins(
                                      this
                                    )),
                                  (l = (0, n.Z)(u));
                                try {
                                  for (l.s(); !(h = l.n()).done; )
                                    (d = (0, c.Z)(h.value, 2)),
                                      (v = d[0]),
                                      (p = d[1]),
                                      this.plugins.set(v, p);
                                } catch (r) {
                                  l.e(r);
                                } finally {
                                  l.f();
                                }
                                (f = (0, n.Z)(this.drawers)),
                                  (t.prev = 21),
                                  f.s();
                              case 23:
                                if ((y = f.n()).done) {
                                  t.next = 30;
                                  break;
                                }
                                if (
                                  ((g = (0, c.Z)(y.value, 2)), !(w = g[1]).init)
                                ) {
                                  t.next = 28;
                                  break;
                                }
                                return (t.next = 28), w.init(this);
                              case 28:
                                t.next = 23;
                                break;
                              case 30:
                                t.next = 35;
                                break;
                              case 32:
                                (t.prev = 32), (t.t0 = t.catch(21)), f.e(t.t0);
                              case 35:
                                return (t.prev = 35), f.f(), t.finish(35);
                              case 38:
                                (b = (0, n.Z)(this.plugins)),
                                  (t.prev = 39),
                                  b.s();
                              case 41:
                                if ((S = b.n()).done) {
                                  t.next = 52;
                                  break;
                                }
                                if (
                                  ((_ = (0, c.Z)(S.value, 2)), !(k = _[1]).init)
                                ) {
                                  t.next = 47;
                                  break;
                                }
                                k.init(this.actualOptions), (t.next = 50);
                                break;
                              case 47:
                                if (void 0 === k.initAsync) {
                                  t.next = 50;
                                  break;
                                }
                                return (
                                  (t.next = 50), k.initAsync(this.actualOptions)
                                );
                              case 50:
                                t.next = 41;
                                break;
                              case 52:
                                t.next = 57;
                                break;
                              case 54:
                                (t.prev = 54), (t.t1 = t.catch(39)), b.e(t.t1);
                              case 57:
                                return (t.prev = 57), b.f(), t.finish(57);
                              case 60:
                                this._engine.dispatchEvent("containerInit", {
                                  container: this,
                                }),
                                  this.particles.init(),
                                  this.particles.setDensity(),
                                  (x = (0, n.Z)(this.plugins));
                                try {
                                  for (x.s(); !(P = x.n()).done; )
                                    (Z = (0, c.Z)(P.value, 2)),
                                      void 0 !== (C = Z[1]).particlesSetup &&
                                        C.particlesSetup();
                                } catch (r) {
                                  x.e(r);
                                } finally {
                                  x.f();
                                }
                                this._engine.dispatchEvent("particlesSetup", {
                                  container: this,
                                });
                              case 66:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [
                          [21, 32, 35, 38],
                          [39, 54, 57, 60],
                        ]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadTheme",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (je(this)) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                return (
                                  (this._currentTheme = e),
                                  (t.next = 5),
                                  this.refresh()
                                );
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "pause",
                value: function () {
                  if (
                    je(this) &&
                    (void 0 !== this._drawAnimationFrame &&
                      ((T()
                        ? function (t) {
                            return clearTimeout(t);
                          }
                        : function (t) {
                            return (cancelAnimationFrame || clearTimeout)(t);
                          })(this._drawAnimationFrame),
                      delete this._drawAnimationFrame),
                    !this._paused)
                  ) {
                    var t,
                      e = (0, n.Z)(this.plugins);
                    try {
                      for (e.s(); !(t = e.n()).done; ) {
                        var i = (0, c.Z)(t.value, 2)[1];
                        i.pause && i.pause();
                      }
                    } catch (r) {
                      e.e(r);
                    } finally {
                      e.f();
                    }
                    this.pageHidden || (this._paused = !0),
                      this._engine.dispatchEvent("containerPaused", {
                        container: this,
                      });
                  }
                },
              },
              {
                key: "play",
                value: function (t) {
                  if (je(this)) {
                    var e = this._paused || t;
                    if (!this._firstStart || this.actualOptions.autoPlay) {
                      if ((this._paused && (this._paused = !1), e)) {
                        var i,
                          r = (0, n.Z)(this.plugins);
                        try {
                          for (r.s(); !(i = r.n()).done; ) {
                            var o = (0, c.Z)(i.value, 2)[1];
                            o.play && o.play();
                          }
                        } catch (a) {
                          r.e(a);
                        } finally {
                          r.f();
                        }
                      }
                      this._engine.dispatchEvent("containerPlay", {
                        container: this,
                      }),
                        this.draw(e || !1);
                    } else this._firstStart = !1;
                  }
                },
              },
              {
                key: "refresh",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (je(this)) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                return (
                                  this.stop(), t.abrupt("return", this.start())
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "reset",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (je(this)) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                return (
                                  (this._options = Ue(this._engine, this)),
                                  t.abrupt("return", this.refresh())
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setNoise",
                value: function (t, e, i) {
                  je(this) && this.setPath(t, e, i);
                },
              },
              {
                key: "setPath",
                value: function (t, e, i) {
                  if (t && je(this)) {
                    var n = Object.assign({}, Fe);
                    if ("function" === typeof t)
                      (n.generate = t), e && (n.init = e), i && (n.update = i);
                    else {
                      var r = n;
                      (n.generate = t.generate || r.generate),
                        (n.init = t.init || r.init),
                        (n.update = t.update || r.update);
                    }
                    this.addPath("default", n, !0);
                  }
                },
              },
              {
                key: "start",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      var e, i, o, a;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (je(this) && !this.started) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                return (t.next = 4), this.init();
                              case 4:
                                (this.started = !0),
                                  this._eventListeners.addListeners(),
                                  this.interactivity.element instanceof
                                    HTMLElement &&
                                    this._intersectionObserver &&
                                    this._intersectionObserver.observe(
                                      this.interactivity.element
                                    ),
                                  (e = (0, n.Z)(this.plugins)),
                                  (t.prev = 8),
                                  e.s();
                              case 10:
                                if ((i = e.n()).done) {
                                  t.next = 20;
                                  break;
                                }
                                if (
                                  ((o = (0, c.Z)(i.value, 2)),
                                  void 0 === (a = o[1]).startAsync)
                                ) {
                                  t.next = 17;
                                  break;
                                }
                                return (t.next = 15), a.startAsync();
                              case 15:
                                t.next = 18;
                                break;
                              case 17:
                                void 0 !== a.start && a.start();
                              case 18:
                                t.next = 10;
                                break;
                              case 20:
                                t.next = 25;
                                break;
                              case 22:
                                (t.prev = 22), (t.t0 = t.catch(8)), e.e(t.t0);
                              case 25:
                                return (t.prev = 25), e.f(), t.finish(25);
                              case 28:
                                this._engine.dispatchEvent("containerStarted", {
                                  container: this,
                                }),
                                  this.play();
                              case 30:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[8, 22, 25, 28]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "stop",
                value: function () {
                  var t;
                  if (je(this) && this.started) {
                    (this._firstStart = !0),
                      (this.started = !1),
                      this._eventListeners.removeListeners(),
                      this.pause(),
                      this.particles.clear(),
                      this.canvas.clear(),
                      this.interactivity.element instanceof HTMLElement &&
                        this._intersectionObserver &&
                        this._intersectionObserver.unobserve(
                          this.interactivity.element
                        );
                    var e,
                      i = (0, n.Z)(this.plugins);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var r = (0, c.Z)(e.value, 2)[1];
                        null === (t = r.stop) || void 0 === t || t.call(r);
                      }
                    } catch (u) {
                      i.e(u);
                    } finally {
                      i.f();
                    }
                    var o,
                      a = (0, n.Z)(this.plugins.keys());
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        this.plugins.delete(s);
                      }
                    } catch (u) {
                      a.e(u);
                    } finally {
                      a.f();
                    }
                    (this._sourceOptions = this._options),
                      this._engine.dispatchEvent("containerStopped", {
                        container: this,
                      });
                  }
                },
              },
              {
                key: "updateActualOptions",
                value: function () {
                  this.actualOptions.responsive = [];
                  var t = this.actualOptions.setResponsive(
                    this.canvas.size.width,
                    this.retina.pixelRatio,
                    this._options
                  );
                  return (
                    this.actualOptions.setTheme(this._currentTheme),
                    this.responsiveMaxWidth !== t &&
                      ((this.responsiveMaxWidth = t), !0)
                  );
                },
              },
              {
                key: "_intersectionManager",
                value: function (t) {
                  if (je(this) && this.actualOptions.pauseOnOutsideViewport) {
                    var e,
                      i = (0, n.Z)(t);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var r = e.value;
                        r.target === this.interactivity.element &&
                          (r.isIntersecting ? this.play : this.pause)();
                      }
                    } catch (o) {
                      i.e(o);
                    } finally {
                      i.f();
                    }
                  }
                },
              },
            ]),
            t
          );
        })();
      function We(t) {
        console.error(
          "tsParticles - Error ".concat(t, " while retrieving config file")
        );
      }
      function Qe(t, e) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = (0, o.Z)(
          (0, r.Z)().mark(function t(e, i) {
            var n, o;
            return (0, r.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((n = Y(e, i))) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return (t.next = 5), fetch(n);
                  case 5:
                    if (!(o = t.sent).ok) {
                      t.next = 8;
                      break;
                    }
                    return t.abrupt("return", o.json());
                  case 8:
                    We(o.status);
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Xe = (function () {
          function t(e) {
            (0, a.Z)(this, t), (this._engine = e);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "load",
                value: function (t, e, i) {
                  var n = { index: i, remote: !1 };
                  return (
                    "string" === typeof t ? (n.tagId = t) : (n.options = t),
                    "number" === typeof e
                      ? (n.index = e)
                      : (n.options =
                          null !== e && void 0 !== e ? e : n.options),
                    this.loadOptions(n)
                  );
                },
              },
              {
                key: "loadJSON",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n) {
                      var o, a;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  "number" === typeof i || void 0 === i
                                    ? (o = e)
                                    : ((a = e), (o = i)),
                                  t.abrupt(
                                    "return",
                                    this.loadRemoteOptions({
                                      tagId: a,
                                      url: o,
                                      index: n,
                                      remote: !0,
                                    })
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadOptions",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      var i, n, o, a, s, u, c, l, h, d, v, p, y, g, w;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((a =
                                    null !== (i = e.tagId) && void 0 !== i
                                      ? i
                                      : "tsparticles".concat(
                                          Math.floor(1e4 * f())
                                        )),
                                  (s = e.index),
                                  (u = e.url),
                                  !e.remote)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (t.next = 7), Qe(u, s);
                              case 7:
                                (t.t0 = t.sent), (t.next = 11);
                                break;
                              case 10:
                                t.t0 = e.options;
                              case 11:
                                return (
                                  (c = t.t0),
                                  (l =
                                    null !== (n = e.element) && void 0 !== n
                                      ? n
                                      : document.getElementById(a)) ||
                                    (((l = document.createElement("div")).id =
                                      a),
                                    null ===
                                      (o = document.querySelector("body")) ||
                                      void 0 === o ||
                                      o.append(l)),
                                  (h = Y(c, s)),
                                  (d = this._engine.dom()),
                                  (v = d.findIndex(function (t) {
                                    return t.id === a;
                                  })) >= 0 &&
                                    (p = this._engine.domItem(v)) &&
                                    !p.destroyed &&
                                    (p.destroy(), d.splice(v, 1)),
                                  "canvas" === l.tagName.toLowerCase()
                                    ? ((y = l).dataset.generated = "false")
                                    : (g = l.getElementsByTagName("canvas"))
                                        .length
                                    ? ((y = g[0]).dataset.generated = "false")
                                    : (((y =
                                        document.createElement(
                                          "canvas"
                                        )).dataset.generated = "true"),
                                      l.appendChild(y)),
                                  y.style.width || (y.style.width = "100%"),
                                  y.style.height || (y.style.height = "100%"),
                                  (w = new qe(this._engine, a, h)),
                                  v >= 0 ? d.splice(v, 0, w) : d.push(w),
                                  w.canvas.loadCanvas(y),
                                  (t.next = 24),
                                  w.start()
                                );
                              case 24:
                                return t.abrupt("return", w);
                              case 25:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadRemoteOptions",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt("return", this.loadOptions(e));
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "set",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n, o) {
                      var a;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (a = { index: o, remote: !1 }),
                                  "string" === typeof e
                                    ? (a.tagId = e)
                                    : (a.element = e),
                                  i instanceof HTMLElement
                                    ? (a.element = i)
                                    : (a.options = i),
                                  "number" === typeof n
                                    ? (a.index = n)
                                    : (a.options =
                                        null !== n && void 0 !== n
                                          ? n
                                          : a.options),
                                  t.abrupt("return", this.loadOptions(a))
                                );
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setJSON",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n, o) {
                      var a, s, u, c;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  e instanceof HTMLElement
                                    ? ((c = e), (a = i), (u = n))
                                    : ((s = e), (c = i), (a = n), (u = o)),
                                  t.abrupt(
                                    "return",
                                    this.loadRemoteOptions({
                                      tagId: s,
                                      url: a,
                                      index: u,
                                      element: c,
                                      remote: !0,
                                    })
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })(),
        Ye = i(2982);
      function Je(t, e, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = e.get(t);
        return (
          (r && !n) ||
            ((r = (0, Ye.Z)(i.values()).map(function (e) {
              return e(t);
            })),
            e.set(t, r)),
          r
        );
      }
      var $e = (function () {
          function t(e) {
            (0, a.Z)(this, t),
              (this._engine = e),
              (this.plugins = []),
              (this.interactorsInitializers = new Map()),
              (this.moversInitializers = new Map()),
              (this.updatersInitializers = new Map()),
              (this.interactors = new Map()),
              (this.movers = new Map()),
              (this.updaters = new Map()),
              (this.presets = new Map()),
              (this.drawers = new Map()),
              (this.pathGenerators = new Map());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "addInteractor",
                value: function (t, e) {
                  this.interactorsInitializers.set(t, e);
                },
              },
              {
                key: "addParticleMover",
                value: function (t, e) {
                  this.moversInitializers.set(t, e);
                },
              },
              {
                key: "addParticleUpdater",
                value: function (t, e) {
                  this.updatersInitializers.set(t, e);
                },
              },
              {
                key: "addPathGenerator",
                value: function (t, e) {
                  this.getPathGenerator(t) || this.pathGenerators.set(t, e);
                },
              },
              {
                key: "addPlugin",
                value: function (t) {
                  this.getPlugin(t.id) || this.plugins.push(t);
                },
              },
              {
                key: "addPreset",
                value: function (t, e) {
                  var i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  (!i && this.getPreset(t)) || this.presets.set(t, e);
                },
              },
              {
                key: "addShapeDrawer",
                value: function (t, e) {
                  this.getShapeDrawer(t) || this.drawers.set(t, e);
                },
              },
              {
                key: "destroy",
                value: function (t) {
                  this.updaters.delete(t),
                    this.movers.delete(t),
                    this.interactors.delete(t);
                },
              },
              {
                key: "getAvailablePlugins",
                value: function (t) {
                  var e,
                    i = new Map(),
                    r = (0, n.Z)(this.plugins);
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var o = e.value;
                      o.needsPlugin(t.actualOptions) &&
                        i.set(o.id, o.getPlugin(t));
                    }
                  } catch (a) {
                    r.e(a);
                  } finally {
                    r.f();
                  }
                  return i;
                },
              },
              {
                key: "getInteractors",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return Je(
                    t,
                    this.interactors,
                    this.interactorsInitializers,
                    e
                  );
                },
              },
              {
                key: "getMovers",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return Je(t, this.movers, this.moversInitializers, e);
                },
              },
              {
                key: "getPathGenerator",
                value: function (t) {
                  return this.pathGenerators.get(t);
                },
              },
              {
                key: "getPlugin",
                value: function (t) {
                  return this.plugins.find(function (e) {
                    return e.id === t;
                  });
                },
              },
              {
                key: "getPreset",
                value: function (t) {
                  return this.presets.get(t);
                },
              },
              {
                key: "getShapeDrawer",
                value: function (t) {
                  return this.drawers.get(t);
                },
              },
              {
                key: "getSupportedShapes",
                value: function () {
                  return this.drawers.keys();
                },
              },
              {
                key: "getUpdaters",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return Je(t, this.updaters, this.updatersInitializers, e);
                },
              },
              {
                key: "loadOptions",
                value: function (t, e) {
                  var i,
                    r = (0, n.Z)(this.plugins);
                  try {
                    for (r.s(); !(i = r.n()).done; ) {
                      i.value.loadOptions(t, e);
                    }
                  } catch (o) {
                    r.e(o);
                  } finally {
                    r.f();
                  }
                },
              },
              {
                key: "loadParticlesOptions",
                value: function (t, e) {
                  var i = this.updaters.get(t);
                  if (i) {
                    for (
                      var r = arguments.length,
                        o = new Array(r > 2 ? r - 2 : 0),
                        a = 2;
                      a < r;
                      a++
                    )
                      o[a - 2] = arguments[a];
                    var s,
                      u = (0, n.Z)(i);
                    try {
                      for (u.s(); !(s = u.n()).done; ) {
                        var c = s.value;
                        c.loadOptions && c.loadOptions.apply(c, [e].concat(o));
                      }
                    } catch (l) {
                      u.e(l);
                    } finally {
                      u.f();
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        ti = (function () {
          function t() {
            (0, a.Z)(this, t),
              (this._domArray = []),
              (this._eventDispatcher = new u()),
              (this._initialized = !1),
              (this._loader = new Xe(this)),
              (this.plugins = new $e(this));
          }
          return (
            (0, s.Z)(t, [
              {
                key: "addEventListener",
                value: function (t, e) {
                  this._eventDispatcher.addEventListener(t, e);
                },
              },
              {
                key: "addInteractor",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.plugins.addInteractor(e, i),
                                  (t.next = 3),
                                  this.refresh()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addMover",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.plugins.addParticleMover(e, i),
                                  (t.next = 3),
                                  this.refresh()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addParticleUpdater",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.plugins.addParticleUpdater(e, i),
                                  (t.next = 3),
                                  this.refresh()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addPathGenerator",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.plugins.addPathGenerator(e, i),
                                  (t.next = 3),
                                  this.refresh()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addPlugin",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.plugins.addPlugin(e),
                                  (t.next = 3),
                                  this.refresh()
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addPreset",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      var n,
                        o = arguments;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = o.length > 2 && void 0 !== o[2] && o[2]),
                                  this.plugins.addPreset(e, i, n),
                                  (t.next = 4),
                                  this.refresh()
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addShape",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n, o, a) {
                      var s;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (s =
                                    "function" === typeof i
                                      ? {
                                          afterEffect: o,
                                          destroy: a,
                                          draw: i,
                                          init: n,
                                        }
                                      : i),
                                  this.plugins.addShapeDrawer(e, s),
                                  (t.next = 4),
                                  this.refresh()
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n, r, o) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "dispatchEvent",
                value: function (t, e) {
                  this._eventDispatcher.dispatchEvent(t, e);
                },
              },
              {
                key: "dom",
                value: function () {
                  return this._domArray;
                },
              },
              {
                key: "domItem",
                value: function (t) {
                  var e = this.dom(),
                    i = e[t];
                  if (i && !i.destroyed) return i;
                  e.splice(t, 1);
                },
              },
              {
                key: "init",
                value: function () {
                  this._initialized || (this._initialized = !0);
                },
              },
              {
                key: "load",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this._loader.load(e, i)
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadFromArray",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this._loader.load(e, i, n)
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadJSON",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this._loader.loadJSON(e, i, n)
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "refresh",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t() {
                      var e, i, o;
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e = (0, n.Z)(this.dom())), (t.prev = 1), e.s();
                              case 3:
                                if ((i = e.n()).done) {
                                  t.next = 9;
                                  break;
                                }
                                return (o = i.value), (t.next = 7), o.refresh();
                              case 7:
                                t.next = 3;
                                break;
                              case 9:
                                t.next = 14;
                                break;
                              case 11:
                                (t.prev = 11), (t.t0 = t.catch(1)), e.e(t.t0);
                              case 14:
                                return (t.prev = 14), e.f(), t.finish(14);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 11, 14, 17]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "removeEventListener",
                value: function (t, e) {
                  this._eventDispatcher.removeEventListener(t, e);
                },
              },
              {
                key: "set",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this._loader.set(e, i, n)
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setJSON",
                value: (function () {
                  var t = (0, o.Z)(
                    (0, r.Z)().mark(function t(e, i, n, o) {
                      return (0, r.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this._loader.setJSON(e, i, n, o)
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setOnClickHandler",
                value: function (t) {
                  var e = this.dom();
                  if (!e.length)
                    throw new Error(
                      "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
                    );
                  var i,
                    r = (0, n.Z)(e);
                  try {
                    for (r.s(); !(i = r.n()).done; ) {
                      i.value.addClickHandler(t);
                    }
                  } catch (o) {
                    r.e(o);
                  } finally {
                    r.f();
                  }
                },
              },
            ]),
            t
          );
        })(),
        ei = (function () {
          function t() {
            (0, a.Z)(this, t), (this.key = "hsl"), (this.stringPrefix = "hsl");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "handleColor",
                value: function (t) {
                  var e,
                    i =
                      null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                  if (void 0 !== i.h && void 0 !== i.l) return ht(i);
                },
              },
              {
                key: "handleRangeColor",
                value: function (t) {
                  var e,
                    i =
                      null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                  if (void 0 !== i.h && void 0 !== i.l)
                    return ht({ h: m(i.h), l: m(i.l), s: m(i.s) });
                },
              },
              {
                key: "parseString",
                value: function (t) {
                  if (t.startsWith("hsl")) {
                    var e =
                      /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
                        t
                      );
                    return e
                      ? (function (t) {
                          var e = ht(t);
                          return { a: t.a, b: e.b, g: e.g, r: e.r };
                        })({
                          a: e.length > 4 ? E(e[5]) : 1,
                          h: parseInt(e[1], 10),
                          l: parseInt(e[3], 10),
                          s: parseInt(e[2], 10),
                        })
                      : void 0;
                  }
                },
              },
            ]),
            t
          );
        })(),
        ii = (function () {
          function t() {
            (0, a.Z)(this, t), (this.key = "rgb"), (this.stringPrefix = "rgb");
          }
          return (
            (0, s.Z)(t, [
              {
                key: "handleColor",
                value: function (t) {
                  var e,
                    i =
                      null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                  if (void 0 !== i.r) return i;
                },
              },
              {
                key: "handleRangeColor",
                value: function (t) {
                  var e,
                    i =
                      null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                  if (void 0 !== i.r)
                    return { r: m(i.r), g: m(i.g), b: m(i.b) };
                },
              },
              {
                key: "parseString",
                value: function (t) {
                  if (t.startsWith(this.stringPrefix)) {
                    var e =
                      /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
                        t
                      );
                    return e
                      ? {
                          a: e.length > 4 ? E(e[5]) : 1,
                          b: parseInt(e[3], 10),
                          g: parseInt(e[2], 10),
                          r: parseInt(e[1], 10),
                        }
                      : void 0;
                  }
                },
              },
            ]),
            t
          );
        })(),
        ni = (0, s.Z)(function t(e) {
          (0, a.Z)(this, t), (this.container = e), (this.type = 0);
        }),
        ri = (0, s.Z)(function t(e) {
          (0, a.Z)(this, t), (this.container = e), (this.type = 1);
        }),
        oi = new ii(),
        ai = new ei();
      it(oi), it(ai);
      var si = new ti();
      si.init();
    },
    2937: function () {
      !(function () {
        try {
          if ("undefined" === typeof window) return;
          "SVGPathSeg" in window ||
            ((window.SVGPathSeg = function (t, e, i) {
              (this.pathSegType = t),
                (this.pathSegTypeAsLetter = e),
                (this._owningPathSegList = i);
            }),
            (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
            (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
            (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
            (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
            (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
            (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
            (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
            (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
            (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
            (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
            (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
            (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
            (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
            (window.SVGPathSeg.prototype._segmentChanged = function () {
              this._owningPathSegList &&
                this._owningPathSegList.segmentChanged(this);
            }),
            (window.SVGPathSegClosePath = function (t) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CLOSEPATH,
                "z",
                t
              );
            }),
            (window.SVGPathSegClosePath.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegClosePath.prototype.toString = function () {
              return "[object SVGPathSegClosePath]";
            }),
            (window.SVGPathSegClosePath.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter;
            }),
            (window.SVGPathSegClosePath.prototype.clone = function () {
              return new window.SVGPathSegClosePath(void 0);
            }),
            (window.SVGPathSegMovetoAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_MOVETO_ABS,
                "M",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegMovetoAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegMovetoAbs.prototype.toString = function () {
              return "[object SVGPathSegMovetoAbs]";
            }),
            (window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            }),
            (window.SVGPathSegMovetoAbs.prototype.clone = function () {
              return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
            }),
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            (window.SVGPathSegMovetoRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_MOVETO_REL,
                "m",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegMovetoRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegMovetoRel.prototype.toString = function () {
              return "[object SVGPathSegMovetoRel]";
            }),
            (window.SVGPathSegMovetoRel.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            }),
            (window.SVGPathSegMovetoRel.prototype.clone = function () {
              return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
            }),
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            (window.SVGPathSegLinetoAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_ABS,
                "L",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegLinetoAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoAbs.prototype.toString = function () {
              return "[object SVGPathSegLinetoAbs]";
            }),
            (window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            }),
            (window.SVGPathSegLinetoAbs.prototype.clone = function () {
              return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
            }),
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            (window.SVGPathSegLinetoRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_REL,
                "l",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegLinetoRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoRel.prototype.toString = function () {
              return "[object SVGPathSegLinetoRel]";
            }),
            (window.SVGPathSegLinetoRel.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            }),
            (window.SVGPathSegLinetoRel.prototype.clone = function () {
              return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
            }),
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            (window.SVGPathSegCurvetoCubicAbs = function (t, e, i, n, r, o, a) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
                "C",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = n),
                (this._y1 = r),
                (this._x2 = o),
                (this._y2 = a);
            }),
            (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
              return "[object SVGPathSegCurvetoCubicAbs]";
            }),
            (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x1 +
                  " " +
                  this._y1 +
                  " " +
                  this._x2 +
                  " " +
                  this._y2 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
              return new window.SVGPathSegCurvetoCubicAbs(
                void 0,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
              );
            }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "x1",
              {
                get: function () {
                  return this._x1;
                },
                set: function (t) {
                  (this._x1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "y1",
              {
                get: function () {
                  return this._y1;
                },
                set: function (t) {
                  (this._y1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "x2",
              {
                get: function () {
                  return this._x2;
                },
                set: function (t) {
                  (this._x2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              "y2",
              {
                get: function () {
                  return this._y2;
                },
                set: function (t) {
                  (this._y2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicRel = function (t, e, i, n, r, o, a) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
                "c",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = n),
                (this._y1 = r),
                (this._x2 = o),
                (this._y2 = a);
            }),
            (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
              return "[object SVGPathSegCurvetoCubicRel]";
            }),
            (window.SVGPathSegCurvetoCubicRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x1 +
                  " " +
                  this._y1 +
                  " " +
                  this._x2 +
                  " " +
                  this._y2 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
              return new window.SVGPathSegCurvetoCubicRel(
                void 0,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
              );
            }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "x1",
              {
                get: function () {
                  return this._x1;
                },
                set: function (t) {
                  (this._x1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "y1",
              {
                get: function () {
                  return this._y1;
                },
                set: function (t) {
                  (this._y1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "x2",
              {
                get: function () {
                  return this._x2;
                },
                set: function (t) {
                  (this._x2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              "y2",
              {
                get: function () {
                  return this._y2;
                },
                set: function (t) {
                  (this._y2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticAbs = function (t, e, i, n, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
                "Q",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = n),
                (this._y1 = r);
            }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoQuadraticAbs]";
              }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x1 +
                  " " +
                  this._y1 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              "x1",
              {
                get: function () {
                  return this._x1;
                },
                set: function (t) {
                  (this._x1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              "y1",
              {
                get: function () {
                  return this._y1;
                },
                set: function (t) {
                  (this._y1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticRel = function (t, e, i, n, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
                "q",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = n),
                (this._y1 = r);
            }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoQuadraticRel.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoQuadraticRel]";
              }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x1 +
                  " " +
                  this._y1 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticRel(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              "x1",
              {
                get: function () {
                  return this._x1;
                },
                set: function (t) {
                  (this._x1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              "y1",
              {
                get: function () {
                  return this._y1;
                },
                set: function (t) {
                  (this._y1 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegArcAbs = function (t, e, i, n, r, o, a, s) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_ARC_ABS,
                "A",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._r1 = n),
                (this._r2 = r),
                (this._angle = o),
                (this._largeArcFlag = a),
                (this._sweepFlag = s);
            }),
            (window.SVGPathSegArcAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegArcAbs.prototype.toString = function () {
              return "[object SVGPathSegArcAbs]";
            }),
            (window.SVGPathSegArcAbs.prototype._asPathString = function () {
              return (
                this.pathSegTypeAsLetter +
                " " +
                this._r1 +
                " " +
                this._r2 +
                " " +
                this._angle +
                " " +
                (this._largeArcFlag ? "1" : "0") +
                " " +
                (this._sweepFlag ? "1" : "0") +
                " " +
                this._x +
                " " +
                this._y
              );
            }),
            (window.SVGPathSegArcAbs.prototype.clone = function () {
              return new window.SVGPathSegArcAbs(
                void 0,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
              );
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
              get: function () {
                return this._r1;
              },
              set: function (t) {
                (this._r1 = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
              get: function () {
                return this._r2;
              },
              set: function (t) {
                (this._r2 = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
              get: function () {
                return this._angle;
              },
              set: function (t) {
                (this._angle = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(
              window.SVGPathSegArcAbs.prototype,
              "largeArcFlag",
              {
                get: function () {
                  return this._largeArcFlag;
                },
                set: function (t) {
                  (this._largeArcFlag = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegArcAbs.prototype,
              "sweepFlag",
              {
                get: function () {
                  return this._sweepFlag;
                },
                set: function (t) {
                  (this._sweepFlag = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegArcRel = function (t, e, i, n, r, o, a, s) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_ARC_REL,
                "a",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._r1 = n),
                (this._r2 = r),
                (this._angle = o),
                (this._largeArcFlag = a),
                (this._sweepFlag = s);
            }),
            (window.SVGPathSegArcRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegArcRel.prototype.toString = function () {
              return "[object SVGPathSegArcRel]";
            }),
            (window.SVGPathSegArcRel.prototype._asPathString = function () {
              return (
                this.pathSegTypeAsLetter +
                " " +
                this._r1 +
                " " +
                this._r2 +
                " " +
                this._angle +
                " " +
                (this._largeArcFlag ? "1" : "0") +
                " " +
                (this._sweepFlag ? "1" : "0") +
                " " +
                this._x +
                " " +
                this._y
              );
            }),
            (window.SVGPathSegArcRel.prototype.clone = function () {
              return new window.SVGPathSegArcRel(
                void 0,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
              );
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                (this._x = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                (this._y = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
              get: function () {
                return this._r1;
              },
              set: function (t) {
                (this._r1 = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
              get: function () {
                return this._r2;
              },
              set: function (t) {
                (this._r2 = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
              get: function () {
                return this._angle;
              },
              set: function (t) {
                (this._angle = t), this._segmentChanged();
              },
              enumerable: !0,
            }),
            Object.defineProperty(
              window.SVGPathSegArcRel.prototype,
              "largeArcFlag",
              {
                get: function () {
                  return this._largeArcFlag;
                },
                set: function (t) {
                  (this._largeArcFlag = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegArcRel.prototype,
              "sweepFlag",
              {
                get: function () {
                  return this._sweepFlag;
                },
                set: function (t) {
                  (this._sweepFlag = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
                "H",
                t
              ),
                (this._x = e);
            }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoHorizontalAbs.prototype.toString =
              function () {
                return "[object SVGPathSegLinetoHorizontalAbs]";
              }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._x;
              }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype.clone =
              function () {
                return new window.SVGPathSegLinetoHorizontalAbs(
                  void 0,
                  this._x
                );
              }),
            Object.defineProperty(
              window.SVGPathSegLinetoHorizontalAbs.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
                "h",
                t
              ),
                (this._x = e);
            }),
            (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoHorizontalRel.prototype.toString =
              function () {
                return "[object SVGPathSegLinetoHorizontalRel]";
              }),
            (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._x;
              }),
            (window.SVGPathSegLinetoHorizontalRel.prototype.clone =
              function () {
                return new window.SVGPathSegLinetoHorizontalRel(
                  void 0,
                  this._x
                );
              }),
            Object.defineProperty(
              window.SVGPathSegLinetoHorizontalRel.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
                "V",
                t
              ),
                (this._y = e);
            }),
            (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoVerticalAbs.prototype.toString =
              function () {
                return "[object SVGPathSegLinetoVerticalAbs]";
              }),
            (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._y;
              }),
            (window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
              return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
            }),
            Object.defineProperty(
              window.SVGPathSegLinetoVerticalAbs.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoVerticalRel = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
                "v",
                t
              ),
                (this._y = e);
            }),
            (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoVerticalRel.prototype.toString =
              function () {
                return "[object SVGPathSegLinetoVerticalRel]";
              }),
            (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._y;
              }),
            (window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
              return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
            }),
            Object.defineProperty(
              window.SVGPathSegLinetoVerticalRel.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
                "S",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x2 = n),
                (this._y2 = r);
            }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoCubicSmoothAbs]";
              }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x2 +
                  " " +
                  this._y2 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._x2,
                  this._y2
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              "x2",
              {
                get: function () {
                  return this._x2;
                },
                set: function (t) {
                  (this._x2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              "y2",
              {
                get: function () {
                  return this._y2;
                },
                set: function (t) {
                  (this._y2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
                "s",
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x2 = n),
                (this._y2 = r);
            }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoCubicSmoothRel]";
              }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._x2 +
                  " " +
                  this._y2 +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoCubicSmoothRel(
                  void 0,
                  this._x,
                  this._y,
                  this._x2,
                  this._y2
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              "x2",
              {
                get: function () {
                  return this._x2;
                },
                set: function (t) {
                  (this._x2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              "y2",
              {
                get: function () {
                  return this._y2;
                },
                set: function (t) {
                  (this._y2 = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
                "T",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype =
              Object.create(window.SVGPathSeg.prototype)),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                  void 0,
                  this._x,
                  this._y
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
                "t",
                t
              ),
                (this._x = e),
                (this._y = i);
            }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype =
              Object.create(window.SVGPathSeg.prototype)),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
              function () {
                return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                  void 0,
                  this._x,
                  this._y
                );
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
              "x",
              {
                get: function () {
                  return this._x;
                },
                set: function (t) {
                  (this._x = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
              "y",
              {
                get: function () {
                  return this._y;
                },
                set: function (t) {
                  (this._y = t), this._segmentChanged();
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathElement.prototype.createSVGPathSegClosePath =
              function () {
                return new window.SVGPathSegClosePath(void 0);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs =
              function (t, e) {
                return new window.SVGPathSegMovetoAbs(void 0, t, e);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegMovetoRel =
              function (t, e) {
                return new window.SVGPathSegMovetoRel(void 0, t, e);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs =
              function (t, e) {
                return new window.SVGPathSegLinetoAbs(void 0, t, e);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoRel =
              function (t, e) {
                return new window.SVGPathSegLinetoRel(void 0, t, e);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
              function (t, e, i, n, r, o) {
                return new window.SVGPathSegCurvetoCubicAbs(
                  void 0,
                  t,
                  e,
                  i,
                  n,
                  r,
                  o
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
              function (t, e, i, n, r, o) {
                return new window.SVGPathSegCurvetoCubicRel(
                  void 0,
                  t,
                  e,
                  i,
                  n,
                  r,
                  o
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
              function (t, e, i, n) {
                return new window.SVGPathSegCurvetoQuadraticAbs(
                  void 0,
                  t,
                  e,
                  i,
                  n
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
              function (t, e, i, n) {
                return new window.SVGPathSegCurvetoQuadraticRel(
                  void 0,
                  t,
                  e,
                  i,
                  n
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (
              t,
              e,
              i,
              n,
              r,
              o,
              a
            ) {
              return new window.SVGPathSegArcAbs(void 0, t, e, i, n, r, o, a);
            }),
            (window.SVGPathElement.prototype.createSVGPathSegArcRel = function (
              t,
              e,
              i,
              n,
              r,
              o,
              a
            ) {
              return new window.SVGPathSegArcRel(void 0, t, e, i, n, r, o, a);
            }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
              function (t) {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
              function (t) {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
              function (t) {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
              function (t) {
                return new window.SVGPathSegLinetoVerticalRel(void 0, t);
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
              function (t, e, i, n) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(
                  void 0,
                  t,
                  e,
                  i,
                  n
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
              function (t, e, i, n) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(
                  void 0,
                  t,
                  e,
                  i,
                  n
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
              function (t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                  void 0,
                  t,
                  e
                );
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
              function (t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                  void 0,
                  t,
                  e
                );
              }),
            "getPathSegAtLength" in window.SVGPathElement.prototype ||
              (window.SVGPathElement.prototype.getPathSegAtLength = function (
                t
              ) {
                if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
                var e = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                e.setAttribute("d", this.getAttribute("d"));
                var i = e.pathSegList.numberOfItems - 1;
                if (i <= 0) return 0;
                do {
                  if ((e.pathSegList.removeItem(i), t > e.getTotalLength()))
                    break;
                  i--;
                } while (i > 0);
                return i;
              })),
            ("SVGPathSegList" in window &&
              "appendItem" in window.SVGPathSegList.prototype) ||
              ((window.SVGPathSegList = function (t) {
                (this._pathElement = t),
                  (this._list = this._parsePath(
                    this._pathElement.getAttribute("d")
                  )),
                  (this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: ["d"],
                  }),
                  (this._pathElementMutationObserver = new MutationObserver(
                    this._updateListFromPathMutations.bind(this)
                  )),
                  this._pathElementMutationObserver.observe(
                    this._pathElement,
                    this._mutationObserverConfig
                  );
              }),
              (window.SVGPathSegList.prototype.classname = "SVGPathSegList"),
              Object.defineProperty(
                window.SVGPathSegList.prototype,
                "numberOfItems",
                {
                  get: function () {
                    return (
                      this._checkPathSynchronizedToList(), this._list.length
                    );
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(window.SVGPathSegList.prototype, "length", {
                get: function () {
                  return this._checkPathSynchronizedToList(), this._list.length;
                },
                enumerable: !0,
              }),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                "pathSegList",
                {
                  get: function () {
                    return (
                      this._pathSegList ||
                        (this._pathSegList = new window.SVGPathSegList(this)),
                      this._pathSegList
                    );
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                "normalizedPathSegList",
                {
                  get: function () {
                    return this.pathSegList;
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                "animatedPathSegList",
                {
                  get: function () {
                    return this.pathSegList;
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                "animatedNormalizedPathSegList",
                {
                  get: function () {
                    return this.pathSegList;
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
                function () {
                  this._updateListFromPathMutations(
                    this._pathElementMutationObserver.takeRecords()
                  );
                }),
              (window.SVGPathSegList.prototype._updateListFromPathMutations =
                function (t) {
                  if (this._pathElement) {
                    var e = !1;
                    t.forEach(function (t) {
                      "d" == t.attributeName && (e = !0);
                    }),
                      e &&
                        (this._list = this._parsePath(
                          this._pathElement.getAttribute("d")
                        ));
                  }
                }),
              (window.SVGPathSegList.prototype._writeListToPath = function () {
                this._pathElementMutationObserver.disconnect(),
                  this._pathElement.setAttribute(
                    "d",
                    window.SVGPathSegList._pathSegArrayAsString(this._list)
                  ),
                  this._pathElementMutationObserver.observe(
                    this._pathElement,
                    this._mutationObserverConfig
                  );
              }),
              (window.SVGPathSegList.prototype.segmentChanged = function (t) {
                this._writeListToPath();
              }),
              (window.SVGPathSegList.prototype.clear = function () {
                this._checkPathSynchronizedToList(),
                  this._list.forEach(function (t) {
                    t._owningPathSegList = null;
                  }),
                  (this._list = []),
                  this._writeListToPath();
              }),
              (window.SVGPathSegList.prototype.initialize = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  (this._list = [t]),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                );
              }),
              (window.SVGPathSegList.prototype._checkValidIndex = function (t) {
                if (isNaN(t) || t < 0 || t >= this.numberOfItems)
                  throw "INDEX_SIZE_ERR";
              }),
              (window.SVGPathSegList.prototype.getItem = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  this._checkValidIndex(t),
                  this._list[t]
                );
              }),
              (window.SVGPathSegList.prototype.insertItemBefore = function (
                t,
                e
              ) {
                return (
                  this._checkPathSynchronizedToList(),
                  e > this.numberOfItems && (e = this.numberOfItems),
                  t._owningPathSegList && (t = t.clone()),
                  this._list.splice(e, 0, t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                );
              }),
              (window.SVGPathSegList.prototype.replaceItem = function (t, e) {
                return (
                  this._checkPathSynchronizedToList(),
                  t._owningPathSegList && (t = t.clone()),
                  this._checkValidIndex(e),
                  (this._list[e] = t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                );
              }),
              (window.SVGPathSegList.prototype.removeItem = function (t) {
                this._checkPathSynchronizedToList(), this._checkValidIndex(t);
                var e = this._list[t];
                return this._list.splice(t, 1), this._writeListToPath(), e;
              }),
              (window.SVGPathSegList.prototype.appendItem = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  t._owningPathSegList && (t = t.clone()),
                  this._list.push(t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                );
              }),
              (window.SVGPathSegList._pathSegArrayAsString = function (t) {
                var e = "",
                  i = !0;
                return (
                  t.forEach(function (t) {
                    i
                      ? ((i = !1), (e += t._asPathString()))
                      : (e += " " + t._asPathString());
                  }),
                  e
                );
              }),
              (window.SVGPathSegList.prototype._parsePath = function (t) {
                if (!t || 0 == t.length) return [];
                var e = this,
                  i = function () {
                    this.pathSegList = [];
                  };
                i.prototype.appendSegment = function (t) {
                  this.pathSegList.push(t);
                };
                var n = function (t) {
                  (this._string = t),
                    (this._currentIndex = 0),
                    (this._endIndex = this._string.length),
                    (this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN),
                    this._skipOptionalSpaces();
                };
                (n.prototype._isCurrentSpace = function () {
                  var t = this._string[this._currentIndex];
                  return (
                    t <= " " &&
                    (" " == t ||
                      "\n" == t ||
                      "\t" == t ||
                      "\r" == t ||
                      "\f" == t)
                  );
                }),
                  (n.prototype._skipOptionalSpaces = function () {
                    for (
                      ;
                      this._currentIndex < this._endIndex &&
                      this._isCurrentSpace();

                    )
                      this._currentIndex++;
                    return this._currentIndex < this._endIndex;
                  }),
                  (n.prototype._skipOptionalSpacesOrDelimiter = function () {
                    return (
                      !(
                        this._currentIndex < this._endIndex &&
                        !this._isCurrentSpace() &&
                        "," != this._string.charAt(this._currentIndex)
                      ) &&
                      (this._skipOptionalSpaces() &&
                        this._currentIndex < this._endIndex &&
                        "," == this._string.charAt(this._currentIndex) &&
                        (this._currentIndex++, this._skipOptionalSpaces()),
                      this._currentIndex < this._endIndex)
                    );
                  }),
                  (n.prototype.hasMoreData = function () {
                    return this._currentIndex < this._endIndex;
                  }),
                  (n.prototype.peekSegmentType = function () {
                    var t = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(t);
                  }),
                  (n.prototype._pathSegTypeFromChar = function (t) {
                    switch (t) {
                      case "Z":
                      case "z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                      case "M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                      case "m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                      case "L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                      case "l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                      case "C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                      case "c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                      case "Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                      case "q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                      case "A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                      case "a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                      case "H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                      case "h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                      case "V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                      case "v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                      case "S":
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                      case "s":
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                      case "T":
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                      case "t":
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                      default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN;
                    }
                  }),
                  (n.prototype._nextCommandHelper = function (t, e) {
                    return ("+" == t ||
                      "-" == t ||
                      "." == t ||
                      (t >= "0" && t <= "9")) &&
                      e != window.SVGPathSeg.PATHSEG_CLOSEPATH
                      ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                        ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                        : e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                        ? window.SVGPathSeg.PATHSEG_LINETO_REL
                        : e
                      : window.SVGPathSeg.PATHSEG_UNKNOWN;
                  }),
                  (n.prototype.initialCommandIsMoveTo = function () {
                    if (!this.hasMoreData()) return !0;
                    var t = this.peekSegmentType();
                    return (
                      t == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
                      t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                    );
                  }),
                  (n.prototype._parseNumber = function () {
                    var t = 0,
                      e = 0,
                      i = 1,
                      n = 0,
                      r = 1,
                      o = 1,
                      a = this._currentIndex;
                    if (
                      (this._skipOptionalSpaces(),
                      this._currentIndex < this._endIndex &&
                      "+" == this._string.charAt(this._currentIndex)
                        ? this._currentIndex++
                        : this._currentIndex < this._endIndex &&
                          "-" == this._string.charAt(this._currentIndex) &&
                          (this._currentIndex++, (r = -1)),
                      !(
                        this._currentIndex == this._endIndex ||
                        ((this._string.charAt(this._currentIndex) < "0" ||
                          this._string.charAt(this._currentIndex) > "9") &&
                          "." != this._string.charAt(this._currentIndex))
                      ))
                    ) {
                      for (
                        var s = this._currentIndex;
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) >= "0" &&
                        this._string.charAt(this._currentIndex) <= "9";

                      )
                        this._currentIndex++;
                      if (this._currentIndex != s)
                        for (var u = this._currentIndex - 1, c = 1; u >= s; )
                          (e += c * (this._string.charAt(u--) - "0")),
                            (c *= 10);
                      if (
                        this._currentIndex < this._endIndex &&
                        "." == this._string.charAt(this._currentIndex)
                      ) {
                        if (
                          (this._currentIndex++,
                          this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9")
                        )
                          return;
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._string.charAt(this._currentIndex) >= "0" &&
                          this._string.charAt(this._currentIndex) <= "9";

                        )
                          (i *= 10),
                            (n +=
                              (this._string.charAt(this._currentIndex) - "0") /
                              i),
                            (this._currentIndex += 1);
                      }
                      if (
                        this._currentIndex != a &&
                        this._currentIndex + 1 < this._endIndex &&
                        ("e" == this._string.charAt(this._currentIndex) ||
                          "E" == this._string.charAt(this._currentIndex)) &&
                        "x" != this._string.charAt(this._currentIndex + 1) &&
                        "m" != this._string.charAt(this._currentIndex + 1)
                      ) {
                        if (
                          (this._currentIndex++,
                          "+" == this._string.charAt(this._currentIndex)
                            ? this._currentIndex++
                            : "-" == this._string.charAt(this._currentIndex) &&
                              (this._currentIndex++, (o = -1)),
                          this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9")
                        )
                          return;
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._string.charAt(this._currentIndex) >= "0" &&
                          this._string.charAt(this._currentIndex) <= "9";

                        )
                          (t *= 10),
                            (t +=
                              this._string.charAt(this._currentIndex) - "0"),
                            this._currentIndex++;
                      }
                      var l = e + n;
                      if (
                        ((l *= r),
                        t && (l *= Math.pow(10, o * t)),
                        a != this._currentIndex)
                      )
                        return this._skipOptionalSpacesOrDelimiter(), l;
                    }
                  }),
                  (n.prototype._parseArcFlag = function () {
                    if (!(this._currentIndex >= this._endIndex)) {
                      var t = !1,
                        e = this._string.charAt(this._currentIndex++);
                      if ("0" == e) t = !1;
                      else {
                        if ("1" != e) return;
                        t = !0;
                      }
                      return this._skipOptionalSpacesOrDelimiter(), t;
                    }
                  }),
                  (n.prototype.parseSegment = function () {
                    var t,
                      i = this._string[this._currentIndex],
                      n = this._pathSegTypeFromChar(i);
                    if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                      if (
                        this._previousCommand ==
                        window.SVGPathSeg.PATHSEG_UNKNOWN
                      )
                        return null;
                      if (
                        (n = this._nextCommandHelper(
                          i,
                          this._previousCommand
                        )) == window.SVGPathSeg.PATHSEG_UNKNOWN
                      )
                        return null;
                    } else this._currentIndex++;
                    switch (((this._previousCommand = n), n)) {
                      case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(
                          e,
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(
                          e,
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(
                          e,
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(
                          e,
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return (
                          this._skipOptionalSpaces(),
                          new window.SVGPathSegClosePath(e)
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicRel(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1,
                            t.x2,
                            t.y2
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicAbs(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1,
                            t.x2,
                            t.y2
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return (
                          (t = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicSmoothRel(
                            e,
                            t.x,
                            t.y,
                            t.x2,
                            t.y2
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return (
                          (t = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicSmoothAbs(
                            e,
                            t.x,
                            t.y,
                            t.x2,
                            t.y2
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoQuadraticRel(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoQuadraticAbs(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1
                          )
                        );
                      case window.SVGPathSeg
                        .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg
                        .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        );
                      case window.SVGPathSeg.PATHSEG_ARC_REL:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegArcRel(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1,
                            t.arcAngle,
                            t.arcLarge,
                            t.arcSweep
                          )
                        );
                      case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        return (
                          (t = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegArcAbs(
                            e,
                            t.x,
                            t.y,
                            t.x1,
                            t.y1,
                            t.arcAngle,
                            t.arcLarge,
                            t.arcSweep
                          )
                        );
                      default:
                        throw "Unknown path seg type.";
                    }
                  });
                var r = new i(),
                  o = new n(t);
                if (!o.initialCommandIsMoveTo()) return [];
                for (; o.hasMoreData(); ) {
                  var a = o.parseSegment();
                  if (!a) return [];
                  r.appendSegment(a);
                }
                return r.pathSegList;
              }));
        } catch (t) {
          console.warn(
            "An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles",
            t
          );
        }
      })();
    },
    4e3: function (t, e, i) {
      i.d(e, {
        R: function () {
          return fn;
        },
      });
      var n = i(4165),
        r = i(5861),
        o = i(5671),
        a = i(3144),
        s = i(1346),
        u = i(1752),
        c = i(1120),
        l = i(136),
        h = i(9388),
        d = (function () {
          function t() {
            (0, o.Z)(this, t), (this.radius = 0), (this.mass = 0);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.mass && (this.mass = t.mass),
                    void 0 !== t.radius && (this.radius = t.radius));
                },
              },
            ]),
            t
          );
        })(),
        v = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, o.Z)(this, i),
              ((t = e.call(this)).density = 5),
              (t.value = 50),
              (t.limit = new d()),
              t
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    ((0, u.Z)((0, c.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    void 0 !== t.density && (this.density = t.density),
                    "number" === typeof t.limit
                      ? (this.limit.radius = t.limit)
                      : this.limit.load(t.limit));
                },
              },
            ]),
            i
          );
        })(s.SW),
        p = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.color = new s.Oz()),
              (this.color.value = "#000000"),
              (this.draggable = !1),
              (this.opacity = 1),
              (this.destroy = !0),
              (this.orbits = !1),
              (this.size = new v());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  void 0 !== t &&
                    (void 0 !== t.color &&
                      (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.draggable && (this.draggable = t.draggable),
                    (this.name = t.name),
                    void 0 !== t.opacity && (this.opacity = t.opacity),
                    void 0 !== t.position &&
                      ((this.position = {}),
                      void 0 !== t.position.x &&
                        (this.position.x = (0, s.Cs)(t.position.x)),
                      void 0 !== t.position.y &&
                        (this.position.y = (0, s.Cs)(t.position.y))),
                    void 0 !== t.size && this.size.load(t.size),
                    void 0 !== t.destroy && (this.destroy = t.destroy),
                    void 0 !== t.orbits && (this.orbits = t.orbits));
                },
              },
            ]),
            t
          );
        })(),
        f = i(7762),
        y = (function () {
          function t(e, i, n, r) {
            var a, u, c;
            (0, o.Z)(this, t),
              (this.absorbers = e),
              (this.container = i),
              (this.initialPosition = r ? s.OW.create(r.x, r.y) : void 0),
              n instanceof p
                ? (this.options = n)
                : ((this.options = new p()), this.options.load(n)),
              (this.dragging = !1),
              (this.name = this.options.name),
              (this.opacity = this.options.opacity),
              (this.size =
                (0, s.Gu)(this.options.size.value) * i.retina.pixelRatio),
              (this.mass =
                this.size * this.options.size.density * i.retina.reduceFactor);
            var l = this.options.size.limit;
            (this.limit = {
              radius: l.radius * i.retina.pixelRatio * i.retina.reduceFactor,
              mass: l.mass,
            }),
              (this.color =
                null !== (a = (0, s.tX)(this.options.color)) && void 0 !== a
                  ? a
                  : { b: 0, g: 0, r: 0 }),
              (this.position =
                null !==
                  (c =
                    null === (u = this.initialPosition) || void 0 === u
                      ? void 0
                      : u.copy()) && void 0 !== c
                  ? c
                  : this.calcPosition());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "attract",
                value: function (t) {
                  var e = this.container,
                    i = this.options;
                  if (i.draggable) {
                    var n = e.interactivity.mouse;
                    if (n.clicking && n.downPosition)
                      (0, s.Sp)(this.position, n.downPosition) <= this.size &&
                        (this.dragging = !0);
                    else this.dragging = !1;
                    this.dragging &&
                      n.position &&
                      ((this.position.x = n.position.x),
                      (this.position.y = n.position.y));
                  }
                  var r = t.getPosition(),
                    o = (0, s.oW)(this.position, r),
                    a = o.dx,
                    u = o.dy,
                    c = o.distance,
                    l = s.OW.create(a, u);
                  if (
                    ((l.length =
                      (this.mass / Math.pow(c, 2)) * e.retina.reduceFactor),
                    c < this.size + t.getRadius())
                  ) {
                    var h = 0.033 * t.getRadius() * e.retina.pixelRatio;
                    (this.size > t.getRadius() &&
                      c < this.size - t.getRadius()) ||
                    (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
                      ? i.destroy
                        ? t.destroy()
                        : ((t.needsNewPosition = !0),
                          this.updateParticlePosition(t, l))
                      : (i.destroy && (t.size.value -= h),
                        this.updateParticlePosition(t, l)),
                      (this.limit.radius <= 0 ||
                        this.size < this.limit.radius) &&
                        (this.size += h),
                      (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
                        (this.mass +=
                          h *
                          this.options.size.density *
                          e.retina.reduceFactor);
                  } else this.updateParticlePosition(t, l);
                },
              },
              {
                key: "draw",
                value: function (t) {
                  t.translate(this.position.x, this.position.y),
                    t.beginPath(),
                    t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
                    t.closePath(),
                    (t.fillStyle = (0, s.iz)(this.color, this.opacity)),
                    t.fill();
                },
              },
              {
                key: "resize",
                value: function () {
                  var t = this.initialPosition;
                  this.position =
                    t && (0, s.Ac)(t, this.container.canvas.size, s.OW.origin)
                      ? t
                      : this.calcPosition();
                },
              },
              {
                key: "calcPosition",
                value: function () {
                  var t = (0, s.Gz)({
                    size: this.container.canvas.size,
                    position: this.options.position,
                  });
                  return s.OW.create(t.x, t.y);
                },
              },
              {
                key: "updateParticlePosition",
                value: function (t, e) {
                  var i;
                  if (!t.destroyed) {
                    var n = this.container,
                      r = n.canvas.size;
                    if (t.needsNewPosition) {
                      var o = (0, s.p)({ size: r });
                      t.position.setTo(o),
                        t.velocity.setTo(t.initialVelocity),
                        (t.absorberOrbit = void 0),
                        (t.needsNewPosition = !1);
                    }
                    if (this.options.orbits) {
                      if (
                        (void 0 === t.absorberOrbit &&
                          ((t.absorberOrbit = s.OW.create(0, 0)),
                          (t.absorberOrbit.length = (0, s.Sp)(
                            t.getPosition(),
                            this.position
                          )),
                          (t.absorberOrbit.angle = (0, s.sZ)() * Math.PI * 2)),
                        t.absorberOrbit.length <= this.size &&
                          !this.options.destroy)
                      ) {
                        var a = Math.min(r.width, r.height);
                        t.absorberOrbit.length =
                          a * (0.2 * (0, s.sZ)() - 0.1 + 1);
                      }
                      void 0 === t.absorberOrbitDirection &&
                        (t.absorberOrbitDirection =
                          t.velocity.x >= 0
                            ? "clockwise"
                            : "counter-clockwise");
                      var u = t.absorberOrbit.length,
                        c = t.absorberOrbit.angle,
                        l = t.absorberOrbitDirection;
                      t.velocity.setTo(s.OW.origin);
                      var h = {
                        x: "clockwise" === l ? Math.cos : Math.sin,
                        y: "clockwise" === l ? Math.sin : Math.cos,
                      };
                      (t.position.x = this.position.x + u * h.x(c)),
                        (t.position.y = this.position.y + u * h.y(c)),
                        (t.absorberOrbit.length -= e.length),
                        (t.absorberOrbit.angle +=
                          (((null !== (i = t.retina.moveSpeed) && void 0 !== i
                            ? i
                            : 0) *
                            n.retina.pixelRatio) /
                            100) *
                          n.retina.reduceFactor);
                    } else {
                      var d = s.OW.origin;
                      (d.length = e.length),
                        (d.angle = e.angle),
                        t.velocity.addTo(d);
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        g = (function () {
          function t(e) {
            var i = this;
            (0, o.Z)(this, t),
              (this.container = e),
              (this.array = []),
              (this.absorbers = []),
              (this.interactivityAbsorbers = []),
              (e.getAbsorber = function (t) {
                return void 0 === t || "number" === typeof t
                  ? i.array[t || 0]
                  : i.array.find(function (e) {
                      return e.name === t;
                    });
              }),
              (e.addAbsorber = function (t, e) {
                return i.addAbsorber(t, e);
              });
          }
          return (
            (0, a.Z)(t, [
              {
                key: "addAbsorber",
                value: function (t, e) {
                  var i = new y(this, this.container, t, e);
                  return this.array.push(i), i;
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e,
                    i = (0, f.Z)(this.array);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var n = e.value;
                      t.save(), n.draw(t), t.restore();
                    }
                  } catch (r) {
                    i.e(r);
                  } finally {
                    i.f();
                  }
                },
              },
              {
                key: "handleClickMode",
                value: function (t) {
                  var e = this.absorbers,
                    i = this.interactivityAbsorbers;
                  if ("absorber" === t) {
                    var n = (0, s.wA)(i),
                      r = null !== n && void 0 !== n ? n : (0, s.wA)(e),
                      o = this.container.interactivity.mouse.clickPosition;
                    this.addAbsorber(r, o);
                  }
                },
              },
              {
                key: "init",
                value: function (t) {
                  var e,
                    i,
                    n = this;
                  t &&
                    ((this.absorbers = (0, s.KH)(t.absorbers, function (t) {
                      var e = new p();
                      return e.load(t), e;
                    })),
                    (this.interactivityAbsorbers = (0, s.KH)(
                      null ===
                        (i =
                          null === (e = t.interactivity) || void 0 === e
                            ? void 0
                            : e.modes) || void 0 === i
                        ? void 0
                        : i.absorbers,
                      function (t) {
                        var e = new p();
                        return e.load(t), e;
                      }
                    )),
                    (0, s.KH)(this.absorbers, function (t) {
                      n.addAbsorber(t);
                    }));
                },
              },
              {
                key: "particleUpdate",
                value: function (t) {
                  var e,
                    i = (0, f.Z)(this.array);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      if ((e.value.attract(t), t.destroyed)) break;
                    }
                  } catch (n) {
                    i.e(n);
                  } finally {
                    i.f();
                  }
                },
              },
              {
                key: "removeAbsorber",
                value: function (t) {
                  var e = this.array.indexOf(t);
                  e >= 0 && this.array.splice(e, 1);
                },
              },
              {
                key: "resize",
                value: function () {
                  var t,
                    e = (0, f.Z)(this.array);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      t.value.resize();
                    }
                  } catch (i) {
                    e.e(i);
                  } finally {
                    e.f();
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  this.array = [];
                },
              },
            ]),
            t
          );
        })(),
        w = (function () {
          function t() {
            (0, o.Z)(this, t), (this.id = "absorbers");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "getPlugin",
                value: function (t) {
                  return new g(t);
                },
              },
              {
                key: "loadOptions",
                value: function (t, e) {
                  var i, n;
                  if (this.needsPlugin(t) || this.needsPlugin(e)) {
                    var r = t;
                    (null === e || void 0 === e ? void 0 : e.absorbers) &&
                      (r.absorbers = (0, s.KH)(e.absorbers, function (t) {
                        var e = new p();
                        return e.load(t), e;
                      })),
                      (r.interactivity.modes.absorbers = (0, s.KH)(
                        null ===
                          (n =
                            null ===
                              (i =
                                null === e || void 0 === e
                                  ? void 0
                                  : e.interactivity) || void 0 === i
                              ? void 0
                              : i.modes) || void 0 === n
                          ? void 0
                          : n.absorbers,
                        function (t) {
                          var e = new p();
                          return e.load(t), e;
                        }
                      ));
                  }
                },
              },
              {
                key: "needsPlugin",
                value: function (t) {
                  var e, i, n;
                  if (!t) return !1;
                  var r = t.absorbers;
                  return r instanceof Array
                    ? !!r.length
                    : !!r ||
                        !(
                          !(null ===
                            (n =
                              null ===
                                (i =
                                  null === (e = t.interactivity) || void 0 === e
                                    ? void 0
                                    : e.events) || void 0 === i
                                ? void 0
                                : i.onClick) || void 0 === n
                            ? void 0
                            : n.mode) ||
                          !(0, s.dB)(
                            "absorber",
                            t.interactivity.events.onClick.mode
                          )
                        );
                },
              },
            ]),
            t
          );
        })();
      function m(t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (i = new w()), (t.next = 3), e.addPlugin(i);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var S = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.bottom && (this.bottom = (0, s.Cs)(t.bottom)),
                    void 0 !== t.left && (this.left = (0, s.Cs)(t.left)),
                    void 0 !== t.right && (this.right = (0, s.Cs)(t.right)),
                    void 0 !== t.top && (this.top = (0, s.Cs)(t.top)));
                },
              },
            ]),
            t
          );
        })(),
        _ = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (0, o.Z)(this, i), ((t = e.call(this)).value = 3), t;
          }
          return (0, a.Z)(i);
        })(s.SW),
        k = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, o.Z)(this, i),
              ((t = e.call(this)).value = { min: 4, max: 9 }),
              t
            );
          }
          return (0, a.Z)(i);
        })(s.SW),
        x = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.count = 1),
              (this.factor = new _()),
              (this.rate = new k()),
              (this.sizeOffset = !0);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.count && (this.count = t.count),
                    this.factor.load(t.factor),
                    this.rate.load(t.rate),
                    (this.particles = (0, s.KH)(t.particles, function (t) {
                      return (0, s.ZB)({}, t);
                    })),
                    void 0 !== t.sizeOffset &&
                      (this.sizeOffset = t.sizeOffset));
                },
              },
            ]),
            t
          );
        })(),
        P = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.bounds = new S()),
              (this.mode = "none"),
              (this.split = new x());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (t.mode && (this.mode = t.mode),
                    t.bounds && this.bounds.load(t.bounds),
                    this.split.load(t.split));
                },
              },
            ]),
            t
          );
        })(),
        Z = (function () {
          function t(e, i) {
            (0, o.Z)(this, t), (this.engine = e), (this.container = i);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "init",
                value: function (t) {
                  var e = this.container,
                    i = t.options.destroy;
                  if (i) {
                    t.splitCount = 0;
                    var n = i.bounds;
                    t.destroyBounds || (t.destroyBounds = {}),
                      n.bottom &&
                        (t.destroyBounds.bottom =
                          ((0, s.Gu)(n.bottom) * e.canvas.size.height) / 100),
                      n.left &&
                        (t.destroyBounds.left =
                          ((0, s.Gu)(n.left) * e.canvas.size.width) / 100),
                      n.right &&
                        (t.destroyBounds.right =
                          ((0, s.Gu)(n.right) * e.canvas.size.width) / 100),
                      n.top &&
                        (t.destroyBounds.top =
                          ((0, s.Gu)(n.top) * e.canvas.size.height) / 100);
                  }
                },
              },
              {
                key: "isEnabled",
                value: function (t) {
                  return !t.destroyed;
                },
              },
              {
                key: "loadOptions",
                value: function (t) {
                  t.destroy || (t.destroy = new P());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.destroy.load(
                      null === a || void 0 === a ? void 0 : a.destroy
                    );
                  }
                },
              },
              {
                key: "particleDestroyed",
                value: function (t, e) {
                  if (!e) {
                    var i = t.options.destroy;
                    i && "split" === i.mode && this.split(t);
                  }
                },
              },
              {
                key: "update",
                value: function (t) {
                  if (this.isEnabled(t)) {
                    var e = t.getPosition(),
                      i = t.destroyBounds;
                    i &&
                      ((void 0 !== i.bottom && e.y >= i.bottom) ||
                        (void 0 !== i.left && e.x <= i.left) ||
                        (void 0 !== i.right && e.x >= i.right) ||
                        (void 0 !== i.top && e.y <= i.top)) &&
                      t.destroy();
                  }
                },
              },
              {
                key: "addSplitParticle",
                value: function (t, e) {
                  var i = t.options.destroy;
                  if (i) {
                    var n = i.split,
                      r = (0, s.hT)(this.engine, this.container, t.options),
                      o = (0, s.NA)(n.factor);
                    r.color.load({ value: { hsl: t.getFillColor() } }),
                      r.move.load({
                        center: {
                          x: t.position.x,
                          y: t.position.y,
                          mode: "precise",
                        },
                      }),
                      "number" === typeof r.size.value
                        ? (r.size.value /= o)
                        : ((r.size.value.min /= o), (r.size.value.max /= o)),
                      r.load(e);
                    var a = n.sizeOffset
                        ? (0, s.Cs)(-t.size.value, t.size.value)
                        : 0,
                      u = {
                        x: t.position.x + (0, s.vd)(a),
                        y: t.position.y + (0, s.vd)(a),
                      };
                    return this.container.particles.addParticle(
                      u,
                      r,
                      t.group,
                      function (e) {
                        var i;
                        return (
                          !(e.size.value < 0.5) &&
                          ((e.velocity.length = (0, s.vd)(
                            (0, s.Cs)(t.velocity.length, e.velocity.length)
                          )),
                          (e.splitCount =
                            (null !== (i = t.splitCount) && void 0 !== i
                              ? i
                              : 0) + 1),
                          (e.unbreakable = !0),
                          setTimeout(function () {
                            e.unbreakable = !1;
                          }, 500),
                          !0)
                        );
                      }
                    );
                  }
                },
              },
              {
                key: "split",
                value: function (t) {
                  var e = t.options.destroy;
                  if (e) {
                    var i = e.split;
                    if (
                      !(
                        i.count >= 0 &&
                        (void 0 === t.splitCount || t.splitCount++ > i.count)
                      )
                    )
                      for (
                        var n = (0, s.NA)(i.rate),
                          r = (0, s.wA)(i.particles),
                          o = 0;
                        o < n;
                        o++
                      )
                        this.addSplitParticle(t, r);
                  }
                },
              },
            ]),
            t
          );
        })();
      function C(t) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("destroy", function (t) {
                        return new Z(e, t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var G = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "randomPosition",
                value: function (t, e, i) {
                  var n,
                    r,
                    o,
                    a = e.width / 2,
                    u = e.height / 2,
                    c = (function (t, e) {
                      var i = (0, s.sZ)() / 4,
                        n = Math.atan((e / t) * Math.tan(2 * Math.PI * i)),
                        r = (0, s.sZ)();
                      return r < 0.25
                        ? n
                        : r < 0.5
                        ? Math.PI - n
                        : r < 0.75
                        ? Math.PI + n
                        : -n;
                    })(a, u),
                    l =
                      ((o = c),
                      ((n = a) * (r = u)) /
                        Math.sqrt(
                          Math.pow(r * Math.cos(o), 2) +
                            Math.pow(n * Math.sin(o), 2)
                        )),
                    h = i ? l * Math.sqrt((0, s.sZ)()) : l;
                  return { x: t.x + h * Math.cos(c), y: t.y + h * Math.sin(c) };
                },
              },
            ]),
            t
          );
        })(),
        O = (function () {
          function t() {
            (0, o.Z)(this, t), (this.wait = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  void 0 !== t &&
                    (void 0 !== t.count && (this.count = t.count),
                    void 0 !== t.delay && (this.delay = t.delay),
                    void 0 !== t.duration && (this.duration = t.duration),
                    void 0 !== t.wait && (this.wait = t.wait));
                },
              },
            ]),
            t
          );
        })(),
        V = (function () {
          function t() {
            (0, o.Z)(this, t), (this.quantity = 1), (this.delay = 0.1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  void 0 !== t &&
                    (void 0 !== t.quantity &&
                      (this.quantity = (0, s.Cs)(t.quantity)),
                    void 0 !== t.delay && (this.delay = (0, s.Cs)(t.delay)));
                },
              },
            ]),
            t
          );
        })(),
        E = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.mode = "percent"),
              (this.height = 0),
              (this.width = 0);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  void 0 !== t &&
                    (void 0 !== t.mode && (this.mode = t.mode),
                    void 0 !== t.height && (this.height = t.height),
                    void 0 !== t.width && (this.width = t.width));
                },
              },
            ]),
            t
          );
        })(),
        z = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.autoPlay = !0),
              (this.fill = !0),
              (this.life = new O()),
              (this.rate = new V()),
              (this.shape = "square"),
              (this.startCount = 0);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  void 0 !== t &&
                    (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
                    void 0 !== t.size &&
                      (void 0 === this.size && (this.size = new E()),
                      this.size.load(t.size)),
                    void 0 !== t.direction && (this.direction = t.direction),
                    (this.domId = t.domId),
                    void 0 !== t.fill && (this.fill = t.fill),
                    this.life.load(t.life),
                    (this.name = t.name),
                    (this.particles = (0, s.KH)(t.particles, function (t) {
                      return (0, s.ZB)({}, t);
                    })),
                    this.rate.load(t.rate),
                    void 0 !== t.shape && (this.shape = t.shape),
                    void 0 !== t.position &&
                      ((this.position = {}),
                      void 0 !== t.position.x &&
                        (this.position.x = (0, s.Cs)(t.position.x)),
                      void 0 !== t.position.y &&
                        (this.position.y = (0, s.Cs)(t.position.y))),
                    void 0 !== t.spawnColor &&
                      (void 0 === this.spawnColor &&
                        (this.spawnColor = new s.RC()),
                      this.spawnColor.load(t.spawnColor)),
                    void 0 !== t.startCount &&
                      (this.startCount = t.startCount));
                },
              },
            ]),
            t
          );
        })(),
        T = (function () {
          function t(e, i, n, r, a) {
            var u, c, l, h, d, v, p, f;
            (0, o.Z)(this, t),
              (this.emitters = i),
              (this.container = n),
              (this._engine = e),
              (this._currentDuration = 0),
              (this._currentEmitDelay = 0),
              (this._currentSpawnDelay = 0),
              (this._initialPosition = a),
              r instanceof z
                ? (this.options = r)
                : ((this.options = new z()), this.options.load(r)),
              (this._spawnDelay =
                (1e3 *
                  (null !== (u = this.options.life.delay) && void 0 !== u
                    ? u
                    : 0)) /
                this.container.retina.reduceFactor),
              (this.position =
                null !== (c = this._initialPosition) && void 0 !== c
                  ? c
                  : this.calcPosition()),
              (this.name = this.options.name),
              (this._shape =
                null === (l = this._engine.emitterShapeManager) || void 0 === l
                  ? void 0
                  : l.getShape(this.options.shape)),
              (this.fill = this.options.fill),
              (this._firstSpawn = !this.options.life.wait),
              (this._startParticlesAdded = !1);
            var y = (0, s.ZB)({}, this.options.particles);
            (null !== y && void 0 !== y) || (y = {}),
              (null !== (h = y.move) && void 0 !== h) || (y.move = {}),
              (null !== (d = (f = y.move).direction) && void 0 !== d) ||
                (f.direction = this.options.direction),
              this.options.spawnColor &&
                (this.spawnColor = (0, s.lN)(this.options.spawnColor)),
              (this._paused = !this.options.autoPlay),
              (this._particlesOptions = y),
              (this.size =
                null !== (v = this.options.size) && void 0 !== v
                  ? v
                  : (function () {
                      var t = new E();
                      return (
                        t.load({ height: 0, mode: "percent", width: 0 }), t
                      );
                    })()),
              (this._lifeCount =
                null !== (p = this.options.life.count) && void 0 !== p
                  ? p
                  : -1),
              (this._immortal = this._lifeCount <= 0),
              this._engine.dispatchEvent("emitterCreated", {
                container: n,
                data: { emitter: this },
              }),
              this.play();
          }
          return (
            (0, a.Z)(t, [
              {
                key: "externalPause",
                value: function () {
                  (this._paused = !0), this.pause();
                },
              },
              {
                key: "externalPlay",
                value: function () {
                  (this._paused = !1), this.play();
                },
              },
              {
                key: "getPosition",
                value: function () {
                  if (this.options.domId) {
                    var t = this.container,
                      e = document.getElementById(this.options.domId);
                    if (e) {
                      var i = e.getBoundingClientRect();
                      return {
                        x: (i.x + i.width / 2) * t.retina.pixelRatio,
                        y: (i.y + i.height / 2) * t.retina.pixelRatio,
                      };
                    }
                  }
                  return this.position;
                },
              },
              {
                key: "getSize",
                value: function () {
                  var t = this.container;
                  if (this.options.domId) {
                    var e = document.getElementById(this.options.domId);
                    if (e) {
                      var i = e.getBoundingClientRect();
                      return {
                        width: i.width * t.retina.pixelRatio,
                        height: i.height * t.retina.pixelRatio,
                      };
                    }
                  }
                  return {
                    width:
                      "percent" === this.size.mode
                        ? (t.canvas.size.width * this.size.width) / 100
                        : this.size.width,
                    height:
                      "percent" === this.size.mode
                        ? (t.canvas.size.height * this.size.height) / 100
                        : this.size.height,
                  };
                },
              },
              {
                key: "pause",
                value: function () {
                  this._paused || delete this._emitDelay;
                },
              },
              {
                key: "play",
                value: function () {
                  var t;
                  if (
                    !this._paused &&
                    this.container.retina.reduceFactor &&
                    (this._lifeCount > 0 ||
                      this._immortal ||
                      !this.options.life.count) &&
                    (this._firstSpawn ||
                      this._currentSpawnDelay >=
                        (null !== (t = this._spawnDelay) && void 0 !== t
                          ? t
                          : 0))
                  ) {
                    if (void 0 === this._emitDelay) {
                      var e = (0, s.Gu)(this.options.rate.delay);
                      this._emitDelay =
                        (1e3 * e) / this.container.retina.reduceFactor;
                    }
                    (this._lifeCount > 0 || this._immortal) &&
                      this.prepareToDie();
                  }
                },
              },
              {
                key: "resize",
                value: function () {
                  var t = this._initialPosition;
                  this.position =
                    t && (0, s.Ac)(t, this.container.canvas.size, s.OW.origin)
                      ? t
                      : this.calcPosition();
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e, i, n;
                  this._paused ||
                    (this._firstSpawn &&
                      ((this._firstSpawn = !1),
                      (this._currentSpawnDelay =
                        null !== (e = this._spawnDelay) && void 0 !== e
                          ? e
                          : 0),
                      (this._currentEmitDelay =
                        null !== (i = this._emitDelay) && void 0 !== i
                          ? i
                          : 0)),
                    this._startParticlesAdded ||
                      ((this._startParticlesAdded = !0),
                      this.emitParticles(this.options.startCount)),
                    void 0 !== this._duration &&
                      ((this._currentDuration += t.value),
                      this._currentDuration >= this._duration &&
                        (this.pause(),
                        void 0 !== this._spawnDelay && delete this._spawnDelay,
                        this._immortal || this._lifeCount--,
                        this._lifeCount > 0 || this._immortal
                          ? ((this.position = this.calcPosition()),
                            (this._spawnDelay =
                              (1e3 *
                                (null !== (n = this.options.life.delay) &&
                                void 0 !== n
                                  ? n
                                  : 0)) /
                              this.container.retina.reduceFactor))
                          : this.destroy(),
                        (this._currentDuration -= this._duration),
                        delete this._duration)),
                    void 0 !== this._spawnDelay &&
                      ((this._currentSpawnDelay += t.value),
                      this._currentSpawnDelay >= this._spawnDelay &&
                        (this._engine.dispatchEvent("emitterPlay", {
                          container: this.container,
                        }),
                        this.play(),
                        (this._currentSpawnDelay -= this._currentSpawnDelay),
                        delete this._spawnDelay)),
                    void 0 !== this._emitDelay &&
                      ((this._currentEmitDelay += t.value),
                      this._currentEmitDelay >= this._emitDelay &&
                        (this.emit(),
                        (this._currentEmitDelay -= this._emitDelay))));
                },
              },
              {
                key: "calcPosition",
                value: function () {
                  return (0, s.Gz)({
                    size: this.container.canvas.size,
                    position: this.options.position,
                  });
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.emitters.removeEmitter(this),
                    this._engine.dispatchEvent("emitterDestroyed", {
                      container: this.container,
                      data: { emitter: this },
                    });
                },
              },
              {
                key: "emit",
                value: function () {
                  if (!this._paused) {
                    var t = (0, s.Gu)(this.options.rate.quantity);
                    this.emitParticles(t);
                  }
                },
              },
              {
                key: "emitParticles",
                value: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      r = this.getPosition(),
                      o = this.getSize(),
                      a = (0, s.wA)(this._particlesOptions),
                      u = 0;
                    u < t;
                    u++
                  ) {
                    var c = (0, s.ZB)({}, a);
                    if (this.spawnColor) {
                      var l =
                        null === (e = this.options.spawnColor) || void 0 === e
                          ? void 0
                          : e.animation;
                      l &&
                        ((this.spawnColor.h = this.setColorAnimation(
                          l.h,
                          this.spawnColor.h,
                          360
                        )),
                        (this.spawnColor.s = this.setColorAnimation(
                          l.s,
                          this.spawnColor.s,
                          100
                        )),
                        (this.spawnColor.l = this.setColorAnimation(
                          l.l,
                          this.spawnColor.l,
                          100
                        ))),
                        c.color
                          ? (c.color.value = this.spawnColor)
                          : (c.color = { value: this.spawnColor });
                    }
                    if (!r) return;
                    var h =
                      null !==
                        (n =
                          null === (i = this._shape) || void 0 === i
                            ? void 0
                            : i.randomPosition(r, o, this.fill)) && void 0 !== n
                        ? n
                        : r;
                    this.container.particles.addParticle(h, c);
                  }
                },
              },
              {
                key: "prepareToDie",
                value: function () {
                  var t;
                  if (!this._paused) {
                    var e =
                      null === (t = this.options.life) || void 0 === t
                        ? void 0
                        : t.duration;
                    this.container.retina.reduceFactor &&
                      (this._lifeCount > 0 || this._immortal) &&
                      void 0 !== e &&
                      e > 0 &&
                      (this._duration = 1e3 * e);
                  }
                },
              },
              {
                key: "setColorAnimation",
                value: function (t, e, i) {
                  var n,
                    r = this.container;
                  if (!t.enable) return e;
                  var o = (0, s.vd)(t.offset),
                    a =
                      (1e3 * (0, s.Gu)(this.options.rate.delay)) /
                      r.retina.reduceFactor;
                  return (
                    (e +
                      ((0, s.Gu)(
                        null !== (n = t.speed) && void 0 !== n ? n : 0
                      ) *
                        r.fpsLimit) /
                        a +
                      3.6 * o) %
                    i
                  );
                },
              },
            ]),
            t
          );
        })(),
        R = (function () {
          function t(e, i) {
            var n = this;
            (0, o.Z)(this, t),
              (this.container = i),
              (this._engine = e),
              (this.array = []),
              (this.emitters = []),
              (this.interactivityEmitters = {
                random: { count: 1, enable: !1 },
                value: [],
              }),
              (i.getEmitter = function (t) {
                return void 0 === t || "number" === typeof t
                  ? n.array[t || 0]
                  : n.array.find(function (e) {
                      return e.name === t;
                    });
              }),
              (i.addEmitter = function (t, e) {
                return n.addEmitter(t, e);
              }),
              (i.removeEmitter = function (t) {
                var e = i.getEmitter(t);
                e && n.removeEmitter(e);
              }),
              (i.playEmitter = function (t) {
                var e = i.getEmitter(t);
                e && e.externalPlay();
              }),
              (i.pauseEmitter = function (t) {
                var e = i.getEmitter(t);
                e && e.externalPause();
              });
          }
          return (
            (0, a.Z)(t, [
              {
                key: "addEmitter",
                value: function (t, e) {
                  var i = new z();
                  i.load(t);
                  var n = new T(this._engine, this, this.container, i, e);
                  return this.array.push(n), n;
                },
              },
              {
                key: "handleClickMode",
                value: function (t) {
                  var e = this,
                    i = this.emitters,
                    n = this.interactivityEmitters;
                  if ("emitter" === t) {
                    var r;
                    if (n && n.value instanceof Array)
                      if (n.value.length > 0 && n.random.enable) {
                        r = [];
                        for (var o = [], a = 0; a < n.random.count; a++) {
                          var u = (0, s.dU)(n.value);
                          o.includes(u) && o.length < n.value.length
                            ? a--
                            : (o.push(u), r.push((0, s.c8)(n.value, u)));
                        }
                      } else r = n.value;
                    else r = null === n || void 0 === n ? void 0 : n.value;
                    var c = null !== r && void 0 !== r ? r : i,
                      l = this.container.interactivity.mouse.clickPosition;
                    (0, s.KH)(c, function (t) {
                      e.addEmitter(t, l);
                    });
                  }
                },
              },
              {
                key: "init",
                value: function (t) {
                  var e, i, n, r, o, a, u, c;
                  if (t) {
                    this.emitters = (0, s.KH)(t.emitters, function (t) {
                      var e = new z();
                      return e.load(t), e;
                    });
                    var l =
                      null ===
                        (i =
                          null === (e = t.interactivity) || void 0 === e
                            ? void 0
                            : e.modes) || void 0 === i
                        ? void 0
                        : i.emitters;
                    if (l)
                      if (l instanceof Array)
                        this.interactivityEmitters = {
                          random: { count: 1, enable: !0 },
                          value: l.map(function (t) {
                            var e = new z();
                            return e.load(t), e;
                          }),
                        };
                      else {
                        var h = l;
                        if (void 0 !== h.value)
                          if (h.value instanceof Array)
                            this.interactivityEmitters = {
                              random: {
                                count:
                                  null !==
                                    (n =
                                      this.interactivityEmitters.random
                                        .count) && void 0 !== n
                                    ? n
                                    : 1,
                                enable:
                                  null !==
                                    (r =
                                      this.interactivityEmitters.random
                                        .enable) &&
                                  void 0 !== r &&
                                  r,
                              },
                              value: h.value.map(function (t) {
                                var e = new z();
                                return e.load(t), e;
                              }),
                            };
                          else {
                            var d = new z();
                            d.load(h.value),
                              (this.interactivityEmitters = {
                                random: {
                                  count:
                                    null !==
                                      (o =
                                        this.interactivityEmitters.random
                                          .count) && void 0 !== o
                                      ? o
                                      : 1,
                                  enable:
                                    null !==
                                      (a =
                                        this.interactivityEmitters.random
                                          .enable) &&
                                    void 0 !== a &&
                                    a,
                                },
                                value: d,
                              });
                          }
                        else {
                          var v = new z();
                          v.load(l),
                            (this.interactivityEmitters = {
                              random: {
                                count:
                                  null !==
                                    (u =
                                      this.interactivityEmitters.random
                                        .count) && void 0 !== u
                                    ? u
                                    : 1,
                                enable:
                                  null !==
                                    (c =
                                      this.interactivityEmitters.random
                                        .enable) &&
                                  void 0 !== c &&
                                  c,
                              },
                              value: v,
                            });
                        }
                      }
                    if (this.emitters instanceof Array) {
                      var p,
                        y = (0, f.Z)(this.emitters);
                      try {
                        for (y.s(); !(p = y.n()).done; ) {
                          var g = p.value;
                          this.addEmitter(g);
                        }
                      } catch (w) {
                        y.e(w);
                      } finally {
                        y.f();
                      }
                    } else this.addEmitter(this.emitters);
                  }
                },
              },
              {
                key: "pause",
                value: function () {
                  var t,
                    e = (0, f.Z)(this.array);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      t.value.pause();
                    }
                  } catch (i) {
                    e.e(i);
                  } finally {
                    e.f();
                  }
                },
              },
              {
                key: "play",
                value: function () {
                  var t,
                    e = (0, f.Z)(this.array);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      t.value.play();
                    }
                  } catch (i) {
                    e.e(i);
                  } finally {
                    e.f();
                  }
                },
              },
              {
                key: "removeEmitter",
                value: function (t) {
                  var e = this.array.indexOf(t);
                  e >= 0 && this.array.splice(e, 1);
                },
              },
              {
                key: "resize",
                value: function () {
                  var t,
                    e = (0, f.Z)(this.array);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      t.value.resize();
                    }
                  } catch (i) {
                    e.e(i);
                  } finally {
                    e.f();
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  this.array = [];
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e,
                    i = (0, f.Z)(this.array);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      e.value.update(t);
                    }
                  } catch (n) {
                    i.e(n);
                  } finally {
                    i.f();
                  }
                },
              },
            ]),
            t
          );
        })(),
        M = new Map(),
        L = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this._engine = e);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "addShape",
                value: function (t, e) {
                  this.getShape(t) || M.set(t, e);
                },
              },
              {
                key: "getShape",
                value: function (t) {
                  return M.get(t);
                },
              },
              {
                key: "getSupportedShapes",
                value: function () {
                  return M.keys();
                },
              },
            ]),
            t
          );
        })();
      function I(t, e) {
        return t + e * ((0, s.sZ)() - 0.5);
      }
      var H = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "randomPosition",
                value: function (t, e, i) {
                  if (i) return { x: I(t.x, e.width), y: I(t.y, e.height) };
                  var n = e.width / 2,
                    r = e.height / 2,
                    o = Math.floor(4 * (0, s.sZ)()),
                    a = 2 * ((0, s.sZ)() - 0.5);
                  switch (o) {
                    case 0:
                      return { x: t.x + a * n, y: t.y - r };
                    case 1:
                      return { x: t.x - n, y: t.y + a * r };
                    case 2:
                      return { x: t.x + a * n, y: t.y + r };
                    default:
                      return { x: t.x + n, y: t.y + a * r };
                  }
                },
              },
            ]),
            t
          );
        })(),
        D = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this._engine = e), (this.id = "emitters");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "getPlugin",
                value: function (t) {
                  return new R(this._engine, t);
                },
              },
              {
                key: "loadOptions",
                value: function (t, e) {
                  var i, n, r, o, a, u;
                  if (this.needsPlugin(t) || this.needsPlugin(e)) {
                    var c = t;
                    (null === e || void 0 === e ? void 0 : e.emitters) &&
                      (c.emitters = (0, s.KH)(e.emitters, function (t) {
                        var e = new z();
                        return e.load(t), e;
                      }));
                    var l =
                      null ===
                        (n =
                          null ===
                            (i =
                              null === e || void 0 === e
                                ? void 0
                                : e.interactivity) || void 0 === i
                            ? void 0
                            : i.modes) || void 0 === n
                        ? void 0
                        : n.emitters;
                    if (l)
                      if (l instanceof Array)
                        c.interactivity.modes.emitters = {
                          random: { count: 1, enable: !0 },
                          value: l.map(function (t) {
                            var e = new z();
                            return e.load(t), e;
                          }),
                        };
                      else {
                        var h = l;
                        if (void 0 !== h.value)
                          if (h.value instanceof Array)
                            c.interactivity.modes.emitters = {
                              random: {
                                count:
                                  null !== (r = h.random.count) && void 0 !== r
                                    ? r
                                    : 1,
                                enable:
                                  null !== (o = h.random.enable) &&
                                  void 0 !== o &&
                                  o,
                              },
                              value: h.value.map(function (t) {
                                var e = new z();
                                return e.load(t), e;
                              }),
                            };
                          else {
                            var d = new z();
                            d.load(h.value),
                              (c.interactivity.modes.emitters = {
                                random: {
                                  count:
                                    null !== (a = h.random.count) &&
                                    void 0 !== a
                                      ? a
                                      : 1,
                                  enable:
                                    null !== (u = h.random.enable) &&
                                    void 0 !== u &&
                                    u,
                                },
                                value: d,
                              });
                          }
                        else
                          (c.interactivity.modes.emitters = {
                            random: { count: 1, enable: !1 },
                            value: new z(),
                          }).value.load(l);
                      }
                  }
                },
              },
              {
                key: "needsPlugin",
                value: function (t) {
                  var e, i, n;
                  if (!t) return !1;
                  var r = t.emitters;
                  return (
                    (r instanceof Array && !!r.length) ||
                    void 0 !== r ||
                    (!!(null ===
                      (n =
                        null ===
                          (i =
                            null === (e = t.interactivity) || void 0 === e
                              ? void 0
                              : e.events) || void 0 === i
                          ? void 0
                          : i.onClick) || void 0 === n
                      ? void 0
                      : n.mode) &&
                      (0, s.dB)("emitter", t.interactivity.events.onClick.mode))
                  );
                },
              },
            ]),
            t
          );
        })();
      function B(t) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.emitterShapeManager ||
                        (e.emitterShapeManager = new L(e)),
                      e.addEmitterShape ||
                        (e.addEmitterShape = function (t, i) {
                          var n;
                          null === (n = e.emitterShapeManager) ||
                            void 0 === n ||
                            n.addShape(t, i);
                        }),
                      (i = new D(e)),
                      (t.next = 5),
                      e.addPlugin(i)
                    );
                  case 5:
                    e.addEmitterShape("circle", new G()),
                      e.addEmitterShape("square", new H());
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var j = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.delay = 1),
              (this.pauseOnStop = !1),
              (this.quantity = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.delay && (this.delay = t.delay),
                    void 0 !== t.quantity && (this.quantity = t.quantity),
                    void 0 !== t.particles &&
                      (this.particles = (0, s.ZB)({}, t.particles)),
                    void 0 !== t.pauseOnStop &&
                      (this.pauseOnStop = t.pauseOnStop));
                },
              },
            ]),
            t
          );
        })(),
        U = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            var n;
            return (0, o.Z)(this, i), ((n = e.call(this, t))._delay = 0), n;
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              { key: "init", value: function () {} },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t(e) {
                      var i, r, o, a, s, u, c, l, h;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.container.retina.reduceFactor) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                if (
                                  ((s = this.container),
                                  (u = s.actualOptions),
                                  (c = u.interactivity.modes.trail))
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return");
                              case 5:
                                if (
                                  ((l =
                                    (1e3 * c.delay) /
                                    this.container.retina.reduceFactor),
                                  this._delay < l && (this._delay += e.value),
                                  !(this._delay < l))
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return");
                              case 9:
                                (h = !0),
                                  c.pauseOnStop &&
                                    (s.interactivity.mouse.position ===
                                      this._lastPosition ||
                                      ((null ===
                                        (i = s.interactivity.mouse.position) ||
                                      void 0 === i
                                        ? void 0
                                        : i.x) ===
                                        (null === (r = this._lastPosition) ||
                                        void 0 === r
                                          ? void 0
                                          : r.x) &&
                                        (null ===
                                          (o =
                                            s.interactivity.mouse.position) ||
                                        void 0 === o
                                          ? void 0
                                          : o.y) ===
                                          (null === (a = this._lastPosition) ||
                                          void 0 === a
                                            ? void 0
                                            : a.y))) &&
                                    (h = !1),
                                  s.interactivity.mouse.position
                                    ? (this._lastPosition = {
                                        x: s.interactivity.mouse.position.x,
                                        y: s.interactivity.mouse.position.y,
                                      })
                                    : delete this._lastPosition,
                                  h &&
                                    s.particles.push(
                                      c.quantity,
                                      s.interactivity.mouse,
                                      c.particles
                                    ),
                                  (this._delay -= l);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function (t) {
                  var e,
                    i = this.container,
                    n = i.actualOptions,
                    r = i.interactivity.mouse,
                    o = (
                      null !==
                        (e =
                          null === t || void 0 === t
                            ? void 0
                            : t.interactivity) && void 0 !== e
                        ? e
                        : n.interactivity
                    ).events;
                  return (
                    (r.clicking &&
                      r.inside &&
                      !!r.position &&
                      (0, s.dB)("trail", o.onClick.mode)) ||
                    (r.inside &&
                      !!r.position &&
                      (0, s.dB)("trail", o.onHover.mode))
                  );
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.trail || (t.trail = new j());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.trail.load(null === a || void 0 === a ? void 0 : a.trail);
                  }
                },
              },
              { key: "reset", value: function () {} },
            ]),
            i
          );
        })(s.L8);
      function F(t) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalTrail", function (t) {
                        return new U(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      i(2937);
      var W = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.color = new s.Oz()),
              (this.width = 0.5),
              (this.opacity = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  var e;
                  t &&
                    ((this.color = s.Oz.create(this.color, t.color)),
                    "string" === typeof this.color.value &&
                      (this.opacity =
                        null !== (e = (0, s.gE)(this.color.value)) &&
                        void 0 !== e
                          ? e
                          : this.opacity),
                    void 0 !== t.opacity && (this.opacity = t.opacity),
                    void 0 !== t.width && (this.width = t.width));
                },
              },
            ]),
            t
          );
        })(),
        Q = (function () {
          function t() {
            (0, o.Z)(this, t), (this.enable = !1), (this.stroke = new W());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "lineColor",
                get: function () {
                  return this.stroke.color;
                },
                set: function (t) {
                  this.stroke.color = s.Oz.create(this.stroke.color, t);
                },
              },
              {
                key: "lineWidth",
                get: function () {
                  return this.stroke.width;
                },
                set: function (t) {
                  this.stroke.width = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    void 0 !== t.enable && (this.enable = t.enable);
                    var i =
                      null !== (e = t.stroke) && void 0 !== e
                        ? e
                        : { color: t.lineColor, width: t.lineWidth };
                    this.stroke.load(i);
                  }
                },
              },
            ]),
            t
          );
        })(),
        K = (function () {
          function t() {
            (0, o.Z)(this, t), (this.arrangement = "one-per-point");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    void 0 !== t.arrangement &&
                    (this.arrangement = t.arrangement);
                },
              },
            ]),
            t
          );
        })(),
        X = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.path = []),
              (this.size = { height: 0, width: 0 });
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.path && (this.path = t.path),
                    void 0 !== t.size &&
                      (void 0 !== t.size.width &&
                        (this.size.width = t.size.width),
                      void 0 !== t.size.height &&
                        (this.size.height = t.size.height)));
                },
              },
            ]),
            t
          );
        })(),
        Y = (function () {
          function t() {
            (0, o.Z)(this, t), (this.radius = 10), (this.type = "path");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.radius && (this.radius = t.radius),
                    void 0 !== t.type && (this.type = t.type));
                },
              },
            ]),
            t
          );
        })(),
        J = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.draw = new Q()),
              (this.enable = !1),
              (this.inline = new K()),
              (this.move = new Y()),
              (this.scale = 1),
              (this.type = "none");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "inlineArrangement",
                get: function () {
                  return this.inline.arrangement;
                },
                set: function (t) {
                  this.inline.arrangement = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  t &&
                    (this.draw.load(t.draw),
                    this.inline.load(t.inline),
                    this.move.load(t.move),
                    void 0 !== t.scale && (this.scale = t.scale),
                    void 0 !== t.type && (this.type = t.type),
                    void 0 !== t.enable
                      ? (this.enable = t.enable)
                      : (this.enable = "none" !== this.type),
                    void 0 !== t.url && (this.url = t.url),
                    void 0 !== t.data &&
                      ("string" === typeof t.data
                        ? (this.data = t.data)
                        : ((this.data = new X()), this.data.load(t.data))),
                    void 0 !== t.position &&
                      (this.position = (0, s.ZB)({}, t.position)));
                },
              },
            ]),
            t
          );
        })();
      function $(t, e, i) {
        var n = (0, s.tX)(i.color);
        if (n) {
          t.beginPath(), t.moveTo(e[0].x, e[0].y);
          var r,
            o = (0, f.Z)(e);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var a = r.value;
              t.lineTo(a.x, a.y);
            }
          } catch (u) {
            o.e(u);
          } finally {
            o.f();
          }
          t.closePath(),
            (t.strokeStyle = (0, s.iz)(n)),
            (t.lineWidth = i.width),
            t.stroke();
        }
      }
      function tt(t, e, i, n) {
        t.translate(n.x, n.y);
        var r = (0, s.tX)(i.color);
        r &&
          ((t.strokeStyle = (0, s.iz)(r, i.opacity)),
          (t.lineWidth = i.width),
          t.stroke(e));
      }
      function et(t, e, i) {
        var n = (0, s.oW)(i, t),
          r = n.dx,
          o = n.dy,
          a = (0, s.oW)(e, t),
          u = a.dx,
          c = a.dy,
          l = (r * u + o * c) / (Math.pow(u, 2) + Math.pow(c, 2)),
          h = { x: t.x + u * l, y: t.x + c * l, isOnSegment: l >= 0 && l <= 1 };
        return (
          l < 0
            ? ((h.x = t.x), (h.y = t.y))
            : l > 1 && ((h.x = e.x), (h.y = e.y)),
          h
        );
      }
      function it(t, e, i) {
        var n = (0, s.oW)(t, e),
          r = n.dx,
          o = n.dy,
          a = Math.atan2(o, r),
          u = s.OW.create(Math.sin(a), -Math.cos(a)),
          c = 2 * (i.x * u.x + i.y * u.y);
        u.multTo(c), i.subFrom(u);
      }
      var nt = "No polygon data loaded.",
        rt = (function () {
          function t(e, i) {
            (0, o.Z)(this, t),
              (this._container = e),
              (this._engine = i),
              (this.dimension = { height: 0, width: 0 }),
              (this.path2DSupported = !!window.Path2D),
              (this.options = new J()),
              (this._polygonMaskMoveRadius =
                this.options.move.radius * e.retina.pixelRatio);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "clickPositionValid",
                value: function (t) {
                  var e = this.options;
                  return (
                    e.enable &&
                    "none" !== e.type &&
                    "inline" !== e.type &&
                    this.checkInsidePolygon(t)
                  );
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e;
                  if (
                    null === (e = this.paths) || void 0 === e
                      ? void 0
                      : e.length
                  ) {
                    var i = this.options,
                      n = i.draw;
                    if (i.enable && n.enable) {
                      var r,
                        o = this.raw,
                        a = (0, f.Z)(this.paths);
                      try {
                        for (a.s(); !(r = a.n()).done; ) {
                          var s = r.value.path2d,
                            u = this.path2DSupported;
                          t &&
                            (u && s && this.offset
                              ? tt(t, s, n.stroke, this.offset)
                              : o && $(t, o, n.stroke));
                        }
                      } catch (c) {
                        a.e(c);
                      } finally {
                        a.f();
                      }
                    }
                  }
                },
              },
              {
                key: "initAsync",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t(e) {
                      var i;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (this.options.load(
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.polygon
                                  ),
                                  (i = this.options),
                                  (this._polygonMaskMoveRadius =
                                    i.move.radius *
                                    this._container.retina.pixelRatio),
                                  !i.enable)
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return (t.next = 6), this.initRawData();
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "particleBounce",
                value: function (t, e, i) {
                  return this.polygonBounce(t, e, i);
                },
              },
              {
                key: "particlePosition",
                value: function (t) {
                  var e, i;
                  if (
                    this.options.enable &&
                    (null !==
                      (i =
                        null === (e = this.raw) || void 0 === e
                          ? void 0
                          : e.length) && void 0 !== i
                      ? i
                      : 0) > 0
                  )
                    return (0, s.ZB)({}, t || this.randomPoint());
                },
              },
              {
                key: "particlesInitialization",
                value: function () {
                  var t = this.options;
                  return (
                    !(
                      !t.enable ||
                      "inline" !== t.type ||
                      ("one-per-point" !== t.inline.arrangement &&
                        "per-point" !== t.inline.arrangement)
                    ) && (this.drawPoints(), !0)
                  );
                },
              },
              {
                key: "resize",
                value: function () {
                  var t = this,
                    e = this._container,
                    i = this.options;
                  i.enable &&
                    "none" !== i.type &&
                    (this.redrawTimeout && clearTimeout(this.redrawTimeout),
                    (this.redrawTimeout = window.setTimeout(
                      (0, r.Z)(
                        (0, n.Z)().mark(function i() {
                          return (0, n.Z)().wrap(function (i) {
                            for (;;)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  return (i.next = 2), t.initRawData(!0);
                                case 2:
                                  return (i.next = 4), e.particles.redraw();
                                case 4:
                                case "end":
                                  return i.stop();
                              }
                          }, i);
                        })
                      ),
                      250
                    )));
                },
              },
              {
                key: "stop",
                value: function () {
                  delete this.raw, delete this.paths;
                },
              },
              {
                key: "checkInsidePolygon",
                value: function (t) {
                  var e,
                    i,
                    n = this._container,
                    r = this.options;
                  if (!r.enable || "none" === r.type || "inline" === r.type)
                    return !0;
                  if (!this.raw)
                    throw new Error(
                      "No polygon found, you need to specify SVG url in config."
                    );
                  for (
                    var o = n.canvas.size,
                      a =
                        null !==
                          (e = null === t || void 0 === t ? void 0 : t.x) &&
                        void 0 !== e
                          ? e
                          : (0, s.sZ)() * o.width,
                      u =
                        null !==
                          (i = null === t || void 0 === t ? void 0 : t.y) &&
                        void 0 !== i
                          ? i
                          : (0, s.sZ)() * o.height,
                      c = !1,
                      l = 0,
                      h = this.raw.length - 1;
                    l < this.raw.length;
                    h = l++
                  ) {
                    var d = this.raw[l],
                      v = this.raw[h];
                    d.y > u !== v.y > u &&
                      a < ((v.x - d.x) * (u - d.y)) / (v.y - d.y) + d.x &&
                      (c = !c);
                  }
                  return "inside" === r.type ? c : "outside" === r.type && !c;
                },
              },
              {
                key: "createPath2D",
                value: function () {
                  var t,
                    e,
                    i = this,
                    n = this.options;
                  if (
                    this.path2DSupported &&
                    (null === (t = this.paths) || void 0 === t
                      ? void 0
                      : t.length)
                  ) {
                    var r,
                      o = (0, f.Z)(this.paths);
                    try {
                      var a = function () {
                        var t = r.value,
                          o =
                            null === (e = t.element) || void 0 === e
                              ? void 0
                              : e.getAttribute("d");
                        if (o) {
                          var a = new Path2D(o),
                            s = document
                              .createElementNS(
                                "http://www.w3.org/2000/svg",
                                "svg"
                              )
                              .createSVGMatrix(),
                            u = new Path2D(),
                            c = s.scale(n.scale);
                          u.addPath
                            ? (u.addPath(a, c), (t.path2d = u))
                            : delete t.path2d;
                        } else delete t.path2d;
                        if (t.path2d || !i.raw) return "continue";
                        (t.path2d = new Path2D()),
                          t.path2d.moveTo(i.raw[0].x, i.raw[0].y),
                          i.raw.forEach(function (e, i) {
                            var n;
                            i > 0 &&
                              (null === (n = t.path2d) ||
                                void 0 === n ||
                                n.lineTo(e.x, e.y));
                          }),
                          t.path2d.closePath();
                      };
                      for (o.s(); !(r = o.n()).done; ) a();
                    } catch (s) {
                      o.e(s);
                    } finally {
                      o.f();
                    }
                  }
                },
              },
              {
                key: "downloadSvgPath",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t(e, i) {
                      var r, o, a, s;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((r = this.options),
                                  (o = e || r.url),
                                  (a = null !== i && void 0 !== i && i),
                                  o && (void 0 === this.paths || a))
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return", this.raw);
                              case 3:
                                return (t.next = 5), fetch(o);
                              case 5:
                                if ((s = t.sent).ok) {
                                  t.next = 8;
                                  break;
                                }
                                throw new Error(
                                  "tsParticles Error - Error occurred during polygon mask download"
                                );
                              case 8:
                                return (t.t0 = this), (t.next = 11), s.text();
                              case 11:
                                return (
                                  (t.t1 = t.sent),
                                  (t.t2 = i),
                                  t.abrupt(
                                    "return",
                                    t.t0.parseSvgPath.call(t.t0, t.t1, t.t2)
                                  )
                                );
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "drawPoints",
                value: function () {
                  if (this.raw) {
                    var t,
                      e = (0, f.Z)(this.raw);
                    try {
                      for (e.s(); !(t = e.n()).done; ) {
                        var i = t.value;
                        this._container.particles.addParticle({
                          x: i.x,
                          y: i.y,
                        });
                      }
                    } catch (n) {
                      e.e(n);
                    } finally {
                      e.f();
                    }
                  }
                },
              },
              {
                key: "getEquidistantPointByIndex",
                value: function (t) {
                  var e,
                    i,
                    n,
                    r,
                    o,
                    a,
                    s,
                    u = this._container.actualOptions,
                    c = this.options;
                  if (
                    !this.raw ||
                    !this.raw.length ||
                    !(null === (e = this.paths) || void 0 === e
                      ? void 0
                      : e.length)
                  )
                    throw new Error(nt);
                  var l,
                    h,
                    d = 0,
                    v = this.paths.reduce(function (t, e) {
                      return t + e.length;
                    }, 0),
                    p = v / u.particles.number.value,
                    y = (0, f.Z)(this.paths);
                  try {
                    for (y.s(); !(h = y.n()).done; ) {
                      var g = h.value,
                        w = p * t - d;
                      if (w <= g.length) {
                        l = g.element.getPointAtLength(w);
                        break;
                      }
                      d += g.length;
                    }
                  } catch (m) {
                    y.e(m);
                  } finally {
                    y.f();
                  }
                  return {
                    x:
                      (null !==
                        (i = null === l || void 0 === l ? void 0 : l.x) &&
                      void 0 !== i
                        ? i
                        : 0) *
                        c.scale +
                      (null !==
                        (r =
                          null === (n = this.offset) || void 0 === n
                            ? void 0
                            : n.x) && void 0 !== r
                        ? r
                        : 0),
                    y:
                      (null !==
                        (o = null === l || void 0 === l ? void 0 : l.y) &&
                      void 0 !== o
                        ? o
                        : 0) *
                        c.scale +
                      (null !==
                        (s =
                          null === (a = this.offset) || void 0 === a
                            ? void 0
                            : a.y) && void 0 !== s
                        ? s
                        : 0),
                  };
                },
              },
              {
                key: "getPointByIndex",
                value: function (t) {
                  if (!this.raw || !this.raw.length) throw new Error(nt);
                  var e = this.raw[t % this.raw.length];
                  return { x: e.x, y: e.y };
                },
              },
              {
                key: "getRandomPoint",
                value: function () {
                  if (!this.raw || !this.raw.length) throw new Error(nt);
                  var t = (0, s.c8)(this.raw);
                  return { x: t.x, y: t.y };
                },
              },
              {
                key: "getRandomPointByLength",
                value: function () {
                  var t,
                    e,
                    i,
                    n = this.options;
                  if (
                    !this.raw ||
                    !this.raw.length ||
                    !(null === (t = this.paths) || void 0 === t
                      ? void 0
                      : t.length)
                  )
                    throw new Error(nt);
                  var r = (0, s.c8)(this.paths),
                    o = Math.floor((0, s.sZ)() * r.length) + 1,
                    a = r.element.getPointAtLength(o);
                  return {
                    x:
                      a.x * n.scale +
                      ((null === (e = this.offset) || void 0 === e
                        ? void 0
                        : e.x) || 0),
                    y:
                      a.y * n.scale +
                      ((null === (i = this.offset) || void 0 === i
                        ? void 0
                        : i.y) || 0),
                  };
                },
              },
              {
                key: "initRawData",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t(e) {
                      var i, r, o, a;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!(i = this.options).url) {
                                  t.next = 7;
                                  break;
                                }
                                return (
                                  (t.next = 4), this.downloadSvgPath(i.url, e)
                                );
                              case 4:
                                (this.raw = t.sent), (t.next = 8);
                                break;
                              case 7:
                                i.data &&
                                  ("string" !== typeof (r = i.data)
                                    ? ((a =
                                        r.path instanceof Array
                                          ? r.path
                                              .map(function (t) {
                                                return '<path d="'.concat(
                                                  t,
                                                  '" />'
                                                );
                                              })
                                              .join("")
                                          : '<path d="'.concat(r.path, '" />')),
                                      'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"',
                                      (o = "<svg "
                                        .concat(
                                          'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"',
                                          ' width="'
                                        )
                                        .concat(r.size.width, '" height="')
                                        .concat(r.size.height, '">')
                                        .concat(a, "</svg>")))
                                    : (o = r),
                                  (this.raw = this.parseSvgPath(o, e)));
                              case 8:
                                this.createPath2D(),
                                  this._engine.dispatchEvent(
                                    "polygonMaskLoaded",
                                    { container: this._container }
                                  );
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "parseSvgPath",
                value: function (t, e) {
                  var i,
                    n,
                    r,
                    o = null !== e && void 0 !== e && e;
                  if (void 0 !== this.paths && !o) return this.raw;
                  var a = this._container,
                    s = this.options,
                    u = new DOMParser().parseFromString(t, "image/svg+xml"),
                    c = u.getElementsByTagName("svg")[0],
                    l = c.getElementsByTagName("path");
                  l.length || (l = u.getElementsByTagName("path")),
                    (this.paths = []);
                  for (var h = 0; h < l.length; h++) {
                    var d = l.item(h);
                    d &&
                      this.paths.push({
                        element: d,
                        length: d.getTotalLength(),
                      });
                  }
                  var v = a.retina.pixelRatio,
                    p = s.scale / v;
                  (this.dimension.width =
                    parseFloat(
                      null !== (i = c.getAttribute("width")) && void 0 !== i
                        ? i
                        : "0"
                    ) * p),
                    (this.dimension.height =
                      parseFloat(
                        null !== (n = c.getAttribute("height")) && void 0 !== n
                          ? n
                          : "0"
                      ) * p);
                  var y =
                    null !== (r = s.position) && void 0 !== r
                      ? r
                      : { x: 50, y: 50 };
                  return (
                    (this.offset = {
                      x:
                        (a.canvas.size.width * y.x) / (100 * v) -
                        this.dimension.width / 2,
                      y:
                        (a.canvas.size.height * y.y) / (100 * v) -
                        this.dimension.height / 2,
                    }),
                    (function (t, e, i) {
                      var n,
                        r,
                        o = [],
                        a = (0, f.Z)(t);
                      try {
                        for (a.s(); !(r = a.n()).done; )
                          for (
                            var s = r.value.element.pathSegList,
                              u =
                                null !==
                                  (n =
                                    null === s || void 0 === s
                                      ? void 0
                                      : s.numberOfItems) && void 0 !== n
                                  ? n
                                  : 0,
                              c = { x: 0, y: 0 },
                              l = 0;
                            l < u;
                            l++
                          ) {
                            var h =
                                null === s || void 0 === s
                                  ? void 0
                                  : s.getItem(l),
                              d = window.SVGPathSeg;
                            switch (
                              null === h || void 0 === h
                                ? void 0
                                : h.pathSegType
                            ) {
                              case d.PATHSEG_MOVETO_ABS:
                              case d.PATHSEG_LINETO_ABS:
                              case d.PATHSEG_CURVETO_CUBIC_ABS:
                              case d.PATHSEG_CURVETO_QUADRATIC_ABS:
                              case d.PATHSEG_ARC_ABS:
                              case d.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                              case d.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                var v = h;
                                (c.x = v.x), (c.y = v.y);
                                break;
                              case d.PATHSEG_LINETO_HORIZONTAL_ABS:
                                c.x = h.x;
                                break;
                              case d.PATHSEG_LINETO_VERTICAL_ABS:
                                c.y = h.y;
                                break;
                              case d.PATHSEG_LINETO_REL:
                              case d.PATHSEG_MOVETO_REL:
                              case d.PATHSEG_CURVETO_CUBIC_REL:
                              case d.PATHSEG_CURVETO_QUADRATIC_REL:
                              case d.PATHSEG_ARC_REL:
                              case d.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                              case d.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                var p = h;
                                (c.x += p.x), (c.y += p.y);
                                break;
                              case d.PATHSEG_LINETO_HORIZONTAL_REL:
                                c.x += h.x;
                                break;
                              case d.PATHSEG_LINETO_VERTICAL_REL:
                                c.y += h.y;
                                break;
                              case d.PATHSEG_UNKNOWN:
                              case d.PATHSEG_CLOSEPATH:
                                continue;
                            }
                            o.push({ x: c.x * e + i.x, y: c.y * e + i.y });
                          }
                      } catch (y) {
                        a.e(y);
                      } finally {
                        a.f();
                      }
                      return o;
                    })(this.paths, p, this.offset)
                  );
                },
              },
              {
                key: "polygonBounce",
                value: function (t, e, i) {
                  var n = this.options;
                  if (!this.raw || !n.enable || "top" !== i) return !1;
                  if ("inside" === n.type || "outside" === n.type) {
                    for (
                      var r,
                        o,
                        a,
                        u = t.getPosition(),
                        c = t.getRadius(),
                        l = 0,
                        h = this.raw.length - 1;
                      l < this.raw.length;
                      h = l++
                    ) {
                      var d = this.raw[l],
                        v = this.raw[h];
                      r = et(d, v, u);
                      var p = (0, s.oW)(u, r),
                        f = [p.dx, p.dy];
                      if (((o = f[0]), (a = f[1]), p.distance < c))
                        return it(d, v, t.velocity), !0;
                    }
                    if (
                      r &&
                      void 0 !== o &&
                      void 0 !== a &&
                      !this.checkInsidePolygon(u)
                    ) {
                      var y = { x: 1, y: 1 };
                      return (
                        t.position.x >= r.x && (y.x = -1),
                        t.position.y >= r.y && (y.y = -1),
                        (t.position.x = r.x + 2 * c * y.x),
                        (t.position.y = r.y + 2 * c * y.y),
                        t.velocity.mult(-1),
                        !0
                      );
                    }
                  } else if ("inline" === n.type && t.initialPosition) {
                    if (
                      (0, s.Sp)(t.initialPosition, t.getPosition()) >
                      this._polygonMaskMoveRadius
                    )
                      return (
                        (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                        (t.velocity.y = t.velocity.x / 2 - t.velocity.y),
                        !0
                      );
                  }
                  return !1;
                },
              },
              {
                key: "randomPoint",
                value: function () {
                  var t,
                    e = this._container,
                    i = this.options;
                  if ("inline" === i.type)
                    switch (i.inline.arrangement) {
                      case "random-point":
                        t = this.getRandomPoint();
                        break;
                      case "random-length":
                        t = this.getRandomPointByLength();
                        break;
                      case "equidistant":
                        t = this.getEquidistantPointByIndex(e.particles.count);
                        break;
                      default:
                        t = this.getPointByIndex(e.particles.count);
                    }
                  else
                    t = {
                      x: (0, s.sZ)() * e.canvas.size.width,
                      y: (0, s.sZ)() * e.canvas.size.height,
                    };
                  return this.checkInsidePolygon(t) ? t : this.randomPoint();
                },
              },
            ]),
            t
          );
        })(),
        ot = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this.id = "polygonMask"), (this._engine = e);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "getPlugin",
                value: function (t) {
                  return new rt(t, this._engine);
                },
              },
              {
                key: "loadOptions",
                value: function (t, e) {
                  if (this.needsPlugin(e)) {
                    var i = t,
                      n = i.polygon;
                    void 0 === (null === n || void 0 === n ? void 0 : n.load) &&
                      (i.polygon = n = new J()),
                      n.load(null === e || void 0 === e ? void 0 : e.polygon);
                  }
                },
              },
              {
                key: "needsPlugin",
                value: function (t) {
                  var e, i, n;
                  return null !==
                    (i =
                      null ===
                        (e = null === t || void 0 === t ? void 0 : t.polygon) ||
                      void 0 === e
                        ? void 0
                        : e.enable) && void 0 !== i
                    ? i
                    : void 0 !==
                        (null ===
                          (n =
                            null === t || void 0 === t ? void 0 : t.polygon) ||
                        void 0 === n
                          ? void 0
                          : n.type) && "none" !== t.polygon.type;
                },
              },
            ]),
            t
          );
        })();
      function at(t) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (i = new ot(e)), (t.next = 3), e.addPlugin(i);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ut = (function () {
          function t() {
            (0, o.Z)(this, t), (this.enable = !1), (this.value = 0);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.value && (this.value = (0, s.Cs)(t.value)));
                },
              },
            ]),
            t
          );
        })(),
        ct = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.darken = new ut()),
              (this.enable = !1),
              (this.enlighten = new ut()),
              (this.mode = "vertical"),
              (this.speed = 25);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.backColor &&
                      (this.backColor = s.Oz.create(
                        this.backColor,
                        t.backColor
                      )),
                    this.darken.load(t.darken),
                    void 0 !== t.enable && (this.enable = t.enable),
                    this.enlighten.load(t.enlighten),
                    void 0 !== t.mode && (this.mode = t.mode),
                    void 0 !== t.speed && (this.speed = (0, s.Cs)(t.speed)));
                },
              },
            ]),
            t
          );
        })();
      var lt = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "getTransformValues",
              value: function (t) {
                var e,
                  i =
                    (null === (e = t.roll) || void 0 === e
                      ? void 0
                      : e.enable) && t.roll,
                  n = i && i.horizontal,
                  r = i && i.vertical;
                return {
                  a: n ? Math.cos(i.angle) : void 0,
                  d: r ? Math.sin(i.angle) : void 0,
                };
              },
            },
            {
              key: "init",
              value: function (t) {
                var e = t.options.roll;
                if (null === e || void 0 === e ? void 0 : e.enable)
                  if (
                    ((t.roll = {
                      enable: e.enable,
                      horizontal: "horizontal" === e.mode || "both" === e.mode,
                      vertical: "vertical" === e.mode || "both" === e.mode,
                      angle: (0, s.sZ)() * Math.PI * 2,
                      speed: (0, s.Gu)(e.speed) / 360,
                    }),
                    e.backColor)
                  )
                    t.backColor = (0, s.lN)(e.backColor);
                  else if (e.darken.enable && e.enlighten.enable) {
                    var i = (0, s.sZ)() >= 0.5 ? "darken" : "enlighten";
                    t.roll.alter = {
                      type: i,
                      value: (0, s.Gu)(
                        "darken" === i ? e.darken.value : e.enlighten.value
                      ),
                    };
                  } else
                    e.darken.enable
                      ? (t.roll.alter = {
                          type: "darken",
                          value: (0, s.Gu)(e.darken.value),
                        })
                      : e.enlighten.enable &&
                        (t.roll.alter = {
                          type: "enlighten",
                          value: (0, s.Gu)(e.enlighten.value),
                        });
                else
                  t.roll = {
                    enable: !1,
                    horizontal: !1,
                    vertical: !1,
                    angle: 0,
                    speed: 0,
                  };
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e = t.options.roll;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  !!(null === e || void 0 === e ? void 0 : e.enable)
                );
              },
            },
            {
              key: "loadOptions",
              value: function (t) {
                t.roll || (t.roll = new ct());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.roll.load(null === a || void 0 === a ? void 0 : a.roll);
                }
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i = t.options.roll;
                    if (
                      t.roll &&
                      (null === i || void 0 === i ? void 0 : i.enable)
                    ) {
                      var n = t.roll.speed * e.factor,
                        r = 2 * Math.PI;
                      (t.roll.angle += n),
                        t.roll.angle > r && (t.roll.angle -= r);
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function ht(t) {
        return dt.apply(this, arguments);
      }
      function dt() {
        return (dt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("roll", function () {
                        return new lt();
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var vt = function (t) {
          var e = function (e, i) {
            return t.load(e, i);
          };
          return (
            (e.load = function (e, i, n) {
              t.loadJSON(e, i)
                .then(function (t) {
                  t && n(t);
                })
                .catch(function () {
                  n(void 0);
                });
            }),
            (e.setOnClickHandler = function (e) {
              t.setOnClickHandler(e);
            }),
            { particlesJS: e, pJSDom: t.dom() }
          );
        },
        pt = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.sync = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.speed && (this.speed = (0, s.Cs)(t.speed)),
                    void 0 !== t.decay && (this.decay = (0, s.Cs)(t.decay)),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            t
          );
        })(),
        ft = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, o.Z)(this, i),
              ((t = e.call(this)).animation = new pt()),
              (t.direction = "clockwise"),
              (t.path = !1),
              (t.value = 0),
              t
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    ((0, u.Z)((0, c.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    void 0 !== t.direction && (this.direction = t.direction),
                    this.animation.load(t.animation),
                    void 0 !== t.path && (this.path = t.path));
                },
              },
            ]),
            i
          );
        })(s.SW);
      var yt = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e = t.options.rotate;
                if (e) {
                  (t.rotate = {
                    enable: e.animation.enable,
                    value: ((0, s.Gu)(e.value) * Math.PI) / 180,
                  }),
                    (t.pathRotation = e.path);
                  var i = e.direction;
                  if ("random" === i)
                    i =
                      Math.floor(2 * (0, s.sZ)()) > 0
                        ? "counter-clockwise"
                        : "clockwise";
                  switch (i) {
                    case "counter-clockwise":
                    case "counterClockwise":
                      t.rotate.status = 1;
                      break;
                    case "clockwise":
                      t.rotate.status = 0;
                  }
                  var n = e.animation;
                  n.enable &&
                    ((t.rotate.decay = 1 - (0, s.Gu)(n.decay)),
                    (t.rotate.velocity =
                      ((0, s.Gu)(n.speed) / 360) *
                      this.container.retina.reduceFactor),
                    n.sync || (t.rotate.velocity *= (0, s.sZ)())),
                    (t.rotation = t.rotate.value);
                }
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e = t.options.rotate;
                return (
                  !!e &&
                  !t.destroyed &&
                  !t.spawning &&
                  e.animation.enable &&
                  !e.path
                );
              },
            },
            {
              key: "loadOptions",
              value: function (t) {
                t.rotate || (t.rotate = new ft());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.rotate.load(null === a || void 0 === a ? void 0 : a.rotate);
                }
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var i, n;
                this.isEnabled(t) &&
                  (!(function (t, e) {
                    var i,
                      n,
                      r = t.rotate,
                      o = t.options.rotate;
                    if (r && o) {
                      var a = o.animation,
                        s =
                          (null !== (i = r.velocity) && void 0 !== i ? i : 0) *
                          e.factor,
                        u = 2 * Math.PI,
                        c = null !== (n = r.decay) && void 0 !== n ? n : 1;
                      a.enable &&
                        (0 === r.status
                          ? ((r.value += s), r.value > u && (r.value -= u))
                          : ((r.value -= s), r.value < 0 && (r.value += u)),
                        r.velocity && 1 !== c && (r.velocity *= c));
                    }
                  })(t, e),
                  (t.rotation =
                    null !==
                      (n =
                        null === (i = t.rotate) || void 0 === i
                          ? void 0
                          : i.value) && void 0 !== n
                      ? n
                      : 0));
              },
            },
          ]),
          t
        );
      })();
      function gt(t) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("rotate", function (t) {
                        return new yt(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var mt = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e,
                  i = t.container,
                  n = t.options,
                  r = n.move.gravity,
                  o = n.move.spin;
                if (
                  ((t.gravity = {
                    enable: r.enable,
                    acceleration: (0, s.Gu)(r.acceleration),
                    inverse: r.inverse,
                  }),
                  o.enable)
                ) {
                  var a =
                      null !== (e = o.position) && void 0 !== e
                        ? e
                        : { x: 50, y: 50 },
                    u = {
                      x: (a.x / 100) * i.canvas.size.width,
                      y: (a.y / 100) * i.canvas.size.height,
                    },
                    c = t.getPosition(),
                    l = (0, s.Sp)(c, u),
                    h = (0, s.Gu)(o.acceleration);
                  (t.retina.spinAcceleration = h * i.retina.pixelRatio),
                    (t.spin = {
                      center: u,
                      direction:
                        t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                      angle: t.velocity.angle,
                      radius: l,
                      acceleration: t.retina.spinAcceleration,
                    });
                }
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                return !t.destroyed && t.options.move.enable;
              },
            },
            {
              key: "move",
              value: function (t, e) {
                var i,
                  n,
                  r,
                  o,
                  a,
                  u = t.options,
                  c = u.move;
                if (c.enable) {
                  var l = t.container,
                    h = (function (t) {
                      return t.slow.inRange ? t.slow.factor : 1;
                    })(t),
                    d =
                      (null !== (i = (o = t.retina).moveSpeed) && void 0 !== i
                        ? i
                        : (o.moveSpeed =
                            (0, s.Gu)(c.speed) * l.retina.pixelRatio)) *
                      l.retina.reduceFactor,
                    v =
                      null !== (n = (a = t.retina).moveDrift) && void 0 !== n
                        ? n
                        : (a.moveDrift =
                            (0, s.Gu)(t.options.move.drift) *
                            l.retina.pixelRatio),
                    p = (0, s.KI)(u.size.value) * l.retina.pixelRatio,
                    f =
                      (d *
                        ((c.size ? t.getRadius() / p : 1) *
                          h *
                          (e.factor || 1))) /
                      2;
                  if (c.spin.enable)
                    !(function (t, e) {
                      var i = t.container;
                      if (t.spin) {
                        var n = {
                          x:
                            "clockwise" === t.spin.direction
                              ? Math.cos
                              : Math.sin,
                          y:
                            "clockwise" === t.spin.direction
                              ? Math.sin
                              : Math.cos,
                        };
                        (t.position.x =
                          t.spin.center.x + t.spin.radius * n.x(t.spin.angle)),
                          (t.position.y =
                            t.spin.center.y +
                            t.spin.radius * n.y(t.spin.angle)),
                          (t.spin.radius += t.spin.acceleration);
                        var r = Math.max(
                          i.canvas.size.width,
                          i.canvas.size.height
                        );
                        t.spin.radius > r / 2
                          ? ((t.spin.radius = r / 2),
                            (t.spin.acceleration *= -1))
                          : t.spin.radius < 0 &&
                            ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
                          (t.spin.angle += (e / 100) * (1 - t.spin.radius / r));
                      }
                    })(t, f);
                  else {
                    !(function (t, e) {
                      var i,
                        n = t.options.move.path;
                      if (n.enable)
                        if (t.lastPathTime <= t.pathDelay)
                          t.lastPathTime += e.value;
                        else {
                          var r =
                            null === (i = t.pathGenerator) || void 0 === i
                              ? void 0
                              : i.generate(t);
                          r && t.velocity.addTo(r),
                            n.clamp &&
                              ((t.velocity.x = (0, s.uZ)(t.velocity.x, -1, 1)),
                              (t.velocity.y = (0, s.uZ)(t.velocity.y, -1, 1))),
                            (t.lastPathTime -= t.pathDelay);
                        }
                    })(t, e);
                    var y = t.gravity,
                      g =
                        (null === y || void 0 === y ? void 0 : y.enable) &&
                        y.inverse
                          ? -1
                          : 1;
                    (null === y || void 0 === y ? void 0 : y.enable) &&
                      f &&
                      (t.velocity.y +=
                        (g * (y.acceleration * e.factor)) / (60 * f)),
                      v && f && (t.velocity.x += (v * e.factor) / (60 * f));
                    var w = t.moveDecay;
                    1 != w && t.velocity.multTo(w);
                    var m = t.velocity.mult(f),
                      b =
                        null !== (r = t.retina.maxSpeed) && void 0 !== r
                          ? r
                          : l.retina.maxSpeed;
                    (null === y || void 0 === y ? void 0 : y.enable) &&
                      b > 0 &&
                      ((!y.inverse && m.y >= 0 && m.y >= b) ||
                        (y.inverse && m.y <= 0 && m.y <= -b)) &&
                      ((m.y = g * b), f && (t.velocity.y = m.y / f));
                    var S = t.options.zIndex,
                      _ = Math.pow(1 - t.zIndexFactor, S.velocityRate);
                    1 != _ && m.multTo(_),
                      t.position.addTo(m),
                      c.vibrate &&
                        ((t.position.x += Math.sin(
                          t.position.x * Math.cos(t.position.y)
                        )),
                        (t.position.y += Math.cos(
                          t.position.y * Math.sin(t.position.x)
                        )));
                  }
                  !(function (t) {
                    var e = t.initialPosition,
                      i = (0, s.oW)(e, t.position),
                      n = i.dx,
                      r = i.dy,
                      o = Math.abs(n),
                      a = Math.abs(r),
                      u = t.retina.maxDistance.horizontal,
                      c = t.retina.maxDistance.vertical;
                    if (u || c)
                      if (((u && o >= u) || (c && a >= c)) && !t.misplaced)
                        (t.misplaced = (!!u && o > u) || (!!c && a > c)),
                          u && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                          c && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                      else if ((!u || o < u) && (!c || a < c) && t.misplaced)
                        t.misplaced = !1;
                      else if (t.misplaced) {
                        var l = t.position,
                          h = t.velocity;
                        u &&
                          ((l.x < e.x && h.x < 0) || (l.x > e.x && h.x > 0)) &&
                          (h.x *= -(0, s.sZ)()),
                          c &&
                            ((l.y < e.y && h.y < 0) ||
                              (l.y > e.y && h.y > 0)) &&
                            (h.y *= -(0, s.sZ)());
                      }
                  })(t);
                }
              },
            },
          ]),
          t
        );
      })();
      function bt(t) {
        return St.apply(this, arguments);
      }
      function St() {
        return (St = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    e.addMover("base", function () {
                      return new mt();
                    });
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var _t = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "draw",
              value: function (t, e, i) {
                t.arc(0, 0, i, 0, 2 * Math.PI, !1);
              },
            },
            {
              key: "getSidesCount",
              value: function () {
                return 12;
              },
            },
          ]),
          t
        );
      })();
      function kt(t) {
        return xt.apply(this, arguments);
      }
      function xt() {
        return (xt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.addShape("circle", new _t());
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Pt(t, e, i, n, r) {
        var o,
          a,
          u = e;
        if (u && i.enable) {
          var c = (0, s.vd)(i.offset),
            l =
              (null !== (o = e.velocity) && void 0 !== o ? o : 0) * t.factor +
              3.6 * c,
            h = null !== (a = e.decay) && void 0 !== a ? a : 1;
          r && 0 !== u.status
            ? ((u.value -= l),
              u.value < 0 && ((u.status = 0), (u.value += u.value)))
            : ((u.value += l),
              r && u.value > n && ((u.status = 1), (u.value -= u.value % n))),
            u.velocity && 1 !== h && (u.velocity *= h),
            u.value > n && (u.value %= n);
        }
      }
      var Zt = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e = (0, s.lN)(
                  t.options.color,
                  t.id,
                  t.options.reduceDuplicates
                );
                e &&
                  (t.color = (0, s.bS)(
                    e,
                    t.options.color.animation,
                    this.container.retina.reduceFactor
                  ));
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i,
                  n,
                  r = t.options.color.animation;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  ((void 0 !==
                    (null === (e = t.color) || void 0 === e
                      ? void 0
                      : e.h.value) &&
                    r.h.enable) ||
                    (void 0 !==
                      (null === (i = t.color) || void 0 === i
                        ? void 0
                        : i.s.value) &&
                      r.s.enable) ||
                    (void 0 !==
                      (null === (n = t.color) || void 0 === n
                        ? void 0
                        : n.l.value) &&
                      r.l.enable))
                );
              },
            },
            {
              key: "update",
              value: function (t, e) {
                !(function (t, e) {
                  var i,
                    n,
                    r,
                    o = t.options.color.animation;
                  void 0 !==
                    (null === (i = t.color) || void 0 === i ? void 0 : i.h) &&
                    Pt(e, t.color.h, o.h, 360, !1),
                    void 0 !==
                      (null === (n = t.color) || void 0 === n ? void 0 : n.s) &&
                      Pt(e, t.color.s, o.s, 100, !0),
                    void 0 !==
                      (null === (r = t.color) || void 0 === r ? void 0 : r.l) &&
                      Pt(e, t.color.l, o.l, 100, !0);
                })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function Ct(t) {
        return At.apply(this, arguments);
      }
      function At() {
        return (At = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("color", function (t) {
                        return new Zt(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Gt = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.distance = 200),
              (this.duration = 0.4),
              (this.easing = "ease-out-quad"),
              (this.factor = 1),
              (this.maxSpeed = 50),
              (this.speed = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.distance && (this.distance = t.distance),
                    void 0 !== t.duration && (this.duration = t.duration),
                    void 0 !== t.easing && (this.easing = t.easing),
                    void 0 !== t.factor && (this.factor = t.factor),
                    void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
                    void 0 !== t.speed && (this.speed = t.speed));
                },
              },
            ]),
            t
          );
        })(),
        Ot = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            var n;
            return (
              (0, o.Z)(this, i),
              (n = e.call(this, t)),
              t.attract || (t.attract = { particles: [] }),
              (n.handleClickMode = function (e) {
                var i = n.container.actualOptions.interactivity.modes.attract;
                if (i && "attract" === e) {
                  t.attract || (t.attract = { particles: [] }),
                    (t.attract.clicking = !0),
                    (t.attract.count = 0);
                  var r,
                    o = (0, f.Z)(t.attract.particles);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var a = r.value;
                      n.isEnabled(a) && a.velocity.setTo(a.initialVelocity);
                    }
                  } catch (s) {
                    o.e(s);
                  } finally {
                    o.f();
                  }
                  (t.attract.particles = []),
                    (t.attract.finish = !1),
                    setTimeout(function () {
                      t.destroyed ||
                        (t.attract || (t.attract = { particles: [] }),
                        (t.attract.clicking = !1));
                    }, 1e3 * i.duration);
                }
              }),
              n
            );
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              {
                key: "init",
                value: function () {
                  var t = this.container,
                    e = t.actualOptions.interactivity.modes.attract;
                  e &&
                    (t.retina.attractModeDistance =
                      e.distance * t.retina.pixelRatio);
                },
              },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      var e, i, r, o, a, u, c, l;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e = this.container),
                                  (i = e.actualOptions),
                                  (r = e.interactivity.status === s.Wt),
                                  (o = i.interactivity.events),
                                  (a = o.onHover.enable),
                                  (u = o.onHover.mode),
                                  (c = o.onClick.enable),
                                  (l = o.onClick.mode),
                                  r && a && (0, s.dB)("attract", u)
                                    ? this.hoverAttract()
                                    : c &&
                                      (0, s.dB)("attract", l) &&
                                      this.clickAttract();
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function (t) {
                  var e,
                    i = this.container,
                    n = i.actualOptions,
                    r = i.interactivity.mouse,
                    o = (
                      null !==
                        (e =
                          null === t || void 0 === t
                            ? void 0
                            : t.interactivity) && void 0 !== e
                        ? e
                        : n.interactivity
                    ).events;
                  if (
                    (!r.position || !o.onHover.enable) &&
                    (!r.clickPosition || !o.onClick.enable)
                  )
                    return !1;
                  var a = o.onHover.mode,
                    u = o.onClick.mode;
                  return (0, s.dB)("attract", a) || (0, s.dB)("attract", u);
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.attract || (t.attract = new Gt());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.attract.load(
                      null === a || void 0 === a ? void 0 : a.attract
                    );
                  }
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "clickAttract",
                value: function () {
                  var t = this.container;
                  if (
                    (t.attract || (t.attract = { particles: [] }),
                    t.attract.finish ||
                      (t.attract.count || (t.attract.count = 0),
                      t.attract.count++,
                      t.attract.count === t.particles.count &&
                        (t.attract.finish = !0)),
                    t.attract.clicking)
                  ) {
                    var e = t.interactivity.mouse.clickPosition,
                      i = t.retina.attractModeDistance;
                    if (!i || i < 0 || !e) return;
                    this.processAttract(e, i, new s.Cd(e.x, e.y, i));
                  } else
                    !1 === t.attract.clicking && (t.attract.particles = []);
                },
              },
              {
                key: "hoverAttract",
                value: function () {
                  var t = this.container,
                    e = t.interactivity.mouse.position,
                    i = t.retina.attractModeDistance;
                  !i ||
                    i < 0 ||
                    !e ||
                    this.processAttract(e, i, new s.Cd(e.x, e.y, i));
                },
              },
              {
                key: "processAttract",
                value: function (t, e, i) {
                  var n = this,
                    r = this.container,
                    o = r.actualOptions.interactivity.modes.attract;
                  if (o) {
                    var a,
                      u = r.particles.quadTree.query(i, function (t) {
                        return n.isEnabled(t);
                      }),
                      c = (0, f.Z)(u);
                    try {
                      for (c.s(); !(a = c.n()).done; ) {
                        var l = a.value,
                          h = (0, s.oW)(l.position, t),
                          d = h.dx,
                          v = h.dy,
                          p = h.distance,
                          y = o.speed * o.factor,
                          g = (0, s.uZ)(
                            (0, s.cj)(1 - p / e, o.easing) * y,
                            0,
                            o.maxSpeed
                          ),
                          w = s.OW.create(
                            0 === p ? y : (d / p) * g,
                            0 === p ? y : (v / p) * g
                          );
                        l.position.subFrom(w);
                      }
                    } catch (m) {
                      c.e(m);
                    } finally {
                      c.f();
                    }
                  }
                },
              },
            ]),
            i
          );
        })(s.L8);
      function Vt(t) {
        return Et.apply(this, arguments);
      }
      function Et() {
        return (Et = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalAttract", function (t) {
                        return new Ot(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var zt = (function () {
          function t() {
            (0, o.Z)(this, t), (this.distance = 200);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t && void 0 !== t.distance && (this.distance = t.distance);
                },
              },
            ]),
            t
          );
        })(),
        Tt = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            return (0, o.Z)(this, i), e.call(this, t);
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              {
                key: "init",
                value: function () {
                  var t = this.container,
                    e = t.actualOptions.interactivity.modes.bounce;
                  e &&
                    (t.retina.bounceModeDistance =
                      e.distance * t.retina.pixelRatio);
                },
              },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      var e,
                        i,
                        r,
                        o,
                        a,
                        u,
                        c,
                        l = this;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e = this.container),
                                  (i = e.actualOptions),
                                  (r = i.interactivity.events),
                                  (o = e.interactivity.status === s.Wt),
                                  (a = r.onHover.enable),
                                  (u = r.onHover.mode),
                                  (c = r.onDiv),
                                  o && a && (0, s.dB)("bounce", u)
                                    ? this.processMouseBounce()
                                    : (0, s.XD)("bounce", c, function (t, e) {
                                        return l.singleSelectorBounce(t, e);
                                      });
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function (t) {
                  var e,
                    i = this.container,
                    n = i.actualOptions,
                    r = i.interactivity.mouse,
                    o = (
                      null !==
                        (e =
                          null === t || void 0 === t
                            ? void 0
                            : t.interactivity) && void 0 !== e
                        ? e
                        : n.interactivity
                    ).events,
                    a = o.onDiv;
                  return (
                    (r.position &&
                      o.onHover.enable &&
                      (0, s.dB)("bounce", o.onHover.mode)) ||
                    (0, s.wm)("bounce", a)
                  );
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.bounce || (t.bounce = new zt());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.bounce.load(
                      null === a || void 0 === a ? void 0 : a.bounce
                    );
                  }
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "processBounce",
                value: function (t, e, i) {
                  var n,
                    r = this,
                    o = this.container.particles.quadTree.query(
                      i,
                      function (t) {
                        return r.isEnabled(t);
                      }
                    ),
                    a = (0, f.Z)(o);
                  try {
                    for (a.s(); !(n = a.n()).done; ) {
                      var u = n.value;
                      i instanceof s.Cd
                        ? (0, s.kR)((0, s.gy)(u), {
                            position: t,
                            radius: e,
                            mass: (Math.pow(e, 2) * Math.PI) / 2,
                            velocity: s.OW.origin,
                            factor: s.OW.origin,
                          })
                        : i instanceof s.Ae && (0, s.dp)(u, (0, s.M_)(t, e));
                    }
                  } catch (c) {
                    a.e(c);
                  } finally {
                    a.f();
                  }
                },
              },
              {
                key: "processMouseBounce",
                value: function () {
                  var t = this.container,
                    e = 10 * t.retina.pixelRatio,
                    i = t.interactivity.mouse.position,
                    n = t.retina.bounceModeDistance;
                  !n ||
                    n < 0 ||
                    !i ||
                    this.processBounce(i, n, new s.Cd(i.x, i.y, n + e));
                },
              },
              {
                key: "singleSelectorBounce",
                value: function (t, e) {
                  var i = this,
                    n = this.container,
                    r = document.querySelectorAll(t);
                  r.length &&
                    r.forEach(function (t) {
                      var r = t,
                        o = n.retina.pixelRatio,
                        a = {
                          x: (r.offsetLeft + r.offsetWidth / 2) * o,
                          y: (r.offsetTop + r.offsetHeight / 2) * o,
                        },
                        u = (r.offsetWidth / 2) * o,
                        c = 10 * o,
                        l =
                          "circle" === e.type
                            ? new s.Cd(a.x, a.y, u + c)
                            : new s.Ae(
                                r.offsetLeft * o - c,
                                r.offsetTop * o - c,
                                r.offsetWidth * o + 2 * c,
                                r.offsetHeight * o + 2 * c
                              );
                      i.processBounce(a, u, l);
                    });
                },
              },
            ]),
            i
          );
        })(s.L8);
      function Rt(t) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalBounce", function (t) {
                        return new Tt(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Lt = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.distance = 200),
              (this.duration = 0.4),
              (this.mix = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  if (t) {
                    if (
                      (void 0 !== t.distance && (this.distance = t.distance),
                      void 0 !== t.duration && (this.duration = t.duration),
                      void 0 !== t.mix && (this.mix = t.mix),
                      void 0 !== t.opacity && (this.opacity = t.opacity),
                      void 0 !== t.color)
                    ) {
                      var e = this.color instanceof Array ? void 0 : this.color;
                      this.color = (0, s.KH)(t.color, function (t) {
                        return s.Oz.create(e, t);
                      });
                    }
                    void 0 !== t.size && (this.size = t.size);
                  }
                },
              },
            ]),
            t
          );
        })(),
        It = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (0, o.Z)(this, i), ((t = e.call(this)).selectors = []), t;
          }
          return (
            (0, a.Z)(i, [
              {
                key: "ids",
                get: function () {
                  return (0, s.KH)(this.selectors, function (t) {
                    return t.replace("#", "");
                  });
                },
                set: function (t) {
                  this.selectors = (0, s.KH)(t, function (t) {
                    return "#".concat(t);
                  });
                },
              },
              {
                key: "load",
                value: function (t) {
                  (0, u.Z)((0, c.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (void 0 !== t.ids && (this.ids = t.ids),
                      void 0 !== t.selectors && (this.selectors = t.selectors));
                },
              },
            ]),
            i
          );
        })(Lt),
        Ht = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            return (0, o.Z)(this, i), e.apply(this, arguments);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  (0, u.Z)((0, c.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (this.divs = (0, s.KH)(t.divs, function (t) {
                        var e = new It();
                        return e.load(t), e;
                      }));
                },
              },
            ]),
            i
          );
        })(Lt);
      function Dt(t, e, i, n) {
        if (e >= i) {
          var r = t + (e - i) * n;
          return (0, s.uZ)(r, t, e);
        }
        if (e < i) {
          var o = t - (i - e) * n;
          return (0, s.uZ)(o, e, t);
        }
      }
      var Bt = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          var n;
          return (
            (0, o.Z)(this, i),
            (n = e.call(this, t)),
            t.bubble || (t.bubble = {}),
            (n.handleClickMode = function (e) {
              "bubble" === e &&
                (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0));
            }),
            n
          );
        }
        return (
          (0, a.Z)(i, [
            {
              key: "clear",
              value: function (t, e, i) {
                (t.bubble.inRange && !i) ||
                  (delete t.bubble.div,
                  delete t.bubble.opacity,
                  delete t.bubble.radius,
                  delete t.bubble.color);
              },
            },
            {
              key: "init",
              value: function () {
                var t = this.container,
                  e = t.actualOptions.interactivity.modes.bubble;
                e &&
                  ((t.retina.bubbleModeDistance =
                    e.distance * t.retina.pixelRatio),
                  void 0 !== e.size &&
                    (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio));
              },
            },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t(e) {
                    var i,
                      r,
                      o,
                      a,
                      u,
                      c,
                      l,
                      h,
                      d,
                      v = this;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (i = this.container.actualOptions),
                                (r = i.interactivity.events),
                                (o = r.onHover),
                                (a = r.onClick),
                                (u = o.enable),
                                (c = o.mode),
                                (l = a.enable),
                                (h = a.mode),
                                (d = r.onDiv),
                                u && (0, s.dB)("bubble", c)
                                  ? this.hoverBubble(e)
                                  : l && (0, s.dB)("bubble", h)
                                  ? this.clickBubble(e)
                                  : (0, s.XD)("bubble", d, function (t, i) {
                                      return v.singleSelectorHover(e, t, i);
                                    });
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i = this.container,
                  n = i.actualOptions,
                  r = i.interactivity.mouse,
                  o = (
                    null !==
                      (e =
                        null === t || void 0 === t
                          ? void 0
                          : t.interactivity) && void 0 !== e
                      ? e
                      : n.interactivity
                  ).events,
                  a = o.onDiv,
                  u = (0, s.wm)("bubble", a);
                if (
                  !(
                    u ||
                    (o.onHover.enable && r.position) ||
                    (o.onClick.enable && r.clickPosition)
                  )
                )
                  return !1;
                var c = o.onHover.mode,
                  l = o.onClick.mode;
                return (0, s.dB)("bubble", c) || (0, s.dB)("bubble", l) || u;
              },
            },
            {
              key: "loadModeOptions",
              value: function (t) {
                t.bubble || (t.bubble = new Ht());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.bubble.load(null === a || void 0 === a ? void 0 : a.bubble);
                }
              },
            },
            {
              key: "reset",
              value: function (t) {
                t.bubble.inRange = !1;
              },
            },
            {
              key: "clickBubble",
              value: function (t) {
                var e,
                  i,
                  n = this,
                  r = this.container,
                  o = r.actualOptions,
                  a = r.interactivity.mouse.clickPosition,
                  u = o.interactivity.modes.bubble;
                if (u && a) {
                  r.bubble || (r.bubble = {});
                  var c = r.retina.bubbleModeDistance;
                  if (c && !(c < 0)) {
                    var l,
                      h = r.particles.quadTree.queryCircle(a, c, function (t) {
                        return n.isEnabled(t);
                      }),
                      d = (0, f.Z)(h);
                    try {
                      for (d.s(); !(l = d.n()).done; ) {
                        var v = l.value;
                        if (r.bubble.clicking) {
                          v.bubble.inRange = !r.bubble.durationEnd;
                          var p = v.getPosition(),
                            y = (0, s.Sp)(p, a),
                            g =
                              (new Date().getTime() -
                                (r.interactivity.mouse.clickTime || 0)) /
                              1e3;
                          g > u.duration && (r.bubble.durationEnd = !0),
                            g > 2 * u.duration &&
                              ((r.bubble.clicking = !1),
                              (r.bubble.durationEnd = !1));
                          var w = {
                            bubbleObj: {
                              optValue: r.retina.bubbleModeSize,
                              value: v.bubble.radius,
                            },
                            particlesObj: {
                              optValue:
                                (0, s.KI)(v.options.size.value) *
                                r.retina.pixelRatio,
                              value: v.size.value,
                            },
                            type: "size",
                          };
                          this.process(v, y, g, w);
                          var m = {
                            bubbleObj: {
                              optValue: u.opacity,
                              value: v.bubble.opacity,
                            },
                            particlesObj: {
                              optValue: (0, s.KI)(v.options.opacity.value),
                              value:
                                null !==
                                  (i =
                                    null === (e = v.opacity) || void 0 === e
                                      ? void 0
                                      : e.value) && void 0 !== i
                                  ? i
                                  : 1,
                            },
                            type: "opacity",
                          };
                          this.process(v, y, g, m),
                            r.bubble.durationEnd
                              ? delete v.bubble.color
                              : y <= c
                              ? this.hoverBubbleColor(v, y)
                              : delete v.bubble.color;
                        }
                      }
                    } catch (b) {
                      d.e(b);
                    } finally {
                      d.f();
                    }
                  }
                }
              },
            },
            {
              key: "hoverBubble",
              value: function (t) {
                var e = this,
                  i = this.container,
                  n = i.interactivity.mouse.position,
                  r = i.retina.bubbleModeDistance;
                if (r && !(r < 0) && void 0 !== n) {
                  var o,
                    a = i.particles.quadTree.queryCircle(n, r, function (t) {
                      return e.isEnabled(t);
                    }),
                    u = (0, f.Z)(a);
                  try {
                    for (u.s(); !(o = u.n()).done; ) {
                      var c = o.value;
                      c.bubble.inRange = !0;
                      var l = c.getPosition(),
                        h = (0, s.Sp)(l, n),
                        d = 1 - h / r;
                      h <= r
                        ? d >= 0 &&
                          i.interactivity.status === s.Wt &&
                          (this.hoverBubbleSize(c, d),
                          this.hoverBubbleOpacity(c, d),
                          this.hoverBubbleColor(c, d))
                        : this.reset(c),
                        i.interactivity.status === s.aM && this.reset(c);
                    }
                  } catch (v) {
                    u.e(v);
                  } finally {
                    u.f();
                  }
                }
              },
            },
            {
              key: "hoverBubbleColor",
              value: function (t, e, i) {
                var n = this.container.actualOptions,
                  r =
                    null !== i && void 0 !== i
                      ? i
                      : n.interactivity.modes.bubble;
                if (r) {
                  if (!t.bubble.finalColor) {
                    var o = r.color;
                    if (!o) return;
                    var a = (0, s.wA)(o);
                    t.bubble.finalColor = (0, s.lN)(a);
                  }
                  if (t.bubble.finalColor)
                    if (r.mix) {
                      t.bubble.color = void 0;
                      var u = t.getFillColor();
                      t.bubble.color = u
                        ? (0, s.lC)((0, s.oc)(u, t.bubble.finalColor, 1 - e, e))
                        : t.bubble.finalColor;
                    } else t.bubble.color = t.bubble.finalColor;
                }
              },
            },
            {
              key: "hoverBubbleOpacity",
              value: function (t, e, i) {
                var n,
                  r,
                  o,
                  a,
                  u = this.container.actualOptions,
                  c =
                    null !==
                      (n = null === i || void 0 === i ? void 0 : i.opacity) &&
                    void 0 !== n
                      ? n
                      : null === (r = u.interactivity.modes.bubble) ||
                        void 0 === r
                      ? void 0
                      : r.opacity;
                if (c) {
                  var l = t.options.opacity.value,
                    h = Dt(
                      null !==
                        (a =
                          null === (o = t.opacity) || void 0 === o
                            ? void 0
                            : o.value) && void 0 !== a
                        ? a
                        : 1,
                      c,
                      (0, s.KI)(l),
                      e
                    );
                  void 0 !== h && (t.bubble.opacity = h);
                }
              },
            },
            {
              key: "hoverBubbleSize",
              value: function (t, e, i) {
                var n = this.container,
                  r = (null === i || void 0 === i ? void 0 : i.size)
                    ? i.size * n.retina.pixelRatio
                    : n.retina.bubbleModeSize;
                if (void 0 !== r) {
                  var o = (0, s.KI)(t.options.size.value) * n.retina.pixelRatio,
                    a = Dt(t.size.value, r, o, e);
                  void 0 !== a && (t.bubble.radius = a);
                }
              },
            },
            {
              key: "process",
              value: function (t, e, i, n) {
                var r = this.container,
                  o = n.bubbleObj.optValue,
                  a = r.actualOptions.interactivity.modes.bubble;
                if (a && void 0 !== o) {
                  var s = a.duration,
                    u = r.retina.bubbleModeDistance,
                    c = n.particlesObj.optValue,
                    l = n.bubbleObj.value,
                    h = n.particlesObj.value || 0,
                    d = n.type;
                  if (u && !(u < 0) && o !== c)
                    if ((r.bubble || (r.bubble = {}), r.bubble.durationEnd))
                      l &&
                        ("size" === d && delete t.bubble.radius,
                        "opacity" === d && delete t.bubble.opacity);
                    else if (e <= u) {
                      if ((null !== l && void 0 !== l ? l : h) !== o) {
                        var v = h - (i * (h - o)) / s;
                        "size" === d && (t.bubble.radius = v),
                          "opacity" === d && (t.bubble.opacity = v);
                      }
                    } else
                      "size" === d && delete t.bubble.radius,
                        "opacity" === d && delete t.bubble.opacity;
                }
              },
            },
            {
              key: "singleSelectorHover",
              value: function (t, e, i) {
                var n = this,
                  r = this.container,
                  o = document.querySelectorAll(e),
                  a = r.actualOptions.interactivity.modes.bubble;
                a &&
                  o.length &&
                  o.forEach(function (e) {
                    var o,
                      u = e,
                      c = r.retina.pixelRatio,
                      l = {
                        x: (u.offsetLeft + u.offsetWidth / 2) * c,
                        y: (u.offsetTop + u.offsetHeight / 2) * c,
                      },
                      h = (u.offsetWidth / 2) * c,
                      d =
                        "circle" === i.type
                          ? new s.Cd(l.x, l.y, h)
                          : new s.Ae(
                              u.offsetLeft * c,
                              u.offsetTop * c,
                              u.offsetWidth * c,
                              u.offsetHeight * c
                            ),
                      v = r.particles.quadTree.query(d, function (t) {
                        return n.isEnabled(t);
                      }),
                      p = (0, f.Z)(v);
                    try {
                      for (p.s(); !(o = p.n()).done; ) {
                        var y = o.value;
                        if (d.contains(y.getPosition())) {
                          y.bubble.inRange = !0;
                          var g = a.divs,
                            w = (0, s.iC)(g, u);
                          (y.bubble.div && y.bubble.div === u) ||
                            (n.clear(y, t, !0), (y.bubble.div = u)),
                            n.hoverBubbleSize(y, 1, w),
                            n.hoverBubbleOpacity(y, 1, w),
                            n.hoverBubbleColor(y, 1, w);
                        }
                      }
                    } catch (m) {
                      p.e(m);
                    } finally {
                      p.f();
                    }
                  });
              },
            },
          ]),
          i
        );
      })(s.L8);
      function Nt(t) {
        return jt.apply(this, arguments);
      }
      function jt() {
        return (jt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalBubble", function (t) {
                        return new Bt(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Ut = (function () {
          function t() {
            (0, o.Z)(this, t), (this.opacity = 0.5);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t && void 0 !== t.opacity && (this.opacity = t.opacity);
                },
              },
            ]),
            t
          );
        })(),
        Ft = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.distance = 80),
              (this.links = new Ut()),
              (this.radius = 60);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "lineLinked",
                get: function () {
                  return this.links;
                },
                set: function (t) {
                  this.links = t;
                },
              },
              {
                key: "line_linked",
                get: function () {
                  return this.links;
                },
                set: function (t) {
                  this.links = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i;
                  t &&
                    (void 0 !== t.distance && (this.distance = t.distance),
                    this.links.load(
                      null !==
                        (i =
                          null !== (e = t.links) && void 0 !== e
                            ? e
                            : t.lineLinked) && void 0 !== i
                        ? i
                        : t.line_linked
                    ),
                    void 0 !== t.radius && (this.radius = t.radius));
                },
              },
            ]),
            t
          );
        })();
      function qt(t, e, i, n) {
        var r = t.actualOptions.interactivity.modes.connect;
        if (r)
          return (function (t, e, i, n) {
            var r = Math.floor(i.getRadius() / e.getRadius()),
              o = e.getFillColor(),
              a = i.getFillColor();
            if (o && a) {
              var u = e.getPosition(),
                c = i.getPosition(),
                l = (0, s.oc)(o, a, e.getRadius(), i.getRadius()),
                h = t.createLinearGradient(u.x, u.y, c.x, c.y);
              return (
                h.addColorStop(0, (0, s.vz)(o, n)),
                h.addColorStop(r > 1 ? 1 : r, (0, s.iz)(l, n)),
                h.addColorStop(1, (0, s.vz)(a, n)),
                h
              );
            }
          })(e, i, n, r.links.opacity);
      }
      function Wt(t, e, i) {
        t.canvas.draw(function (n) {
          var r,
            o = qt(t, n, e, i);
          if (o) {
            var a = e.getPosition(),
              u = i.getPosition();
            !(function (t, e, i, n, r) {
              t.save(),
                (0, s.pS)(t, n, r),
                (t.lineWidth = e),
                (t.strokeStyle = i),
                t.stroke(),
                t.restore();
            })(
              n,
              null !== (r = e.retina.linksWidth) && void 0 !== r ? r : 0,
              o,
              a,
              u
            );
          }
        });
      }
      var Qt = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          return (0, o.Z)(this, i), e.call(this, t);
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            {
              key: "init",
              value: function () {
                var t = this.container,
                  e = t.actualOptions.interactivity.modes.connect;
                e &&
                  ((t.retina.connectModeDistance =
                    e.distance * t.retina.pixelRatio),
                  (t.retina.connectModeRadius =
                    e.radius * t.retina.pixelRatio));
              },
            },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t() {
                    var e,
                      i,
                      r,
                      o,
                      a,
                      s,
                      u,
                      c,
                      l,
                      h,
                      d,
                      v,
                      p,
                      y,
                      g,
                      w,
                      m = this;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((e = this.container),
                                !e.actualOptions.interactivity.events.onHover
                                  .enable ||
                                  "pointermove" !== e.interactivity.status)
                              ) {
                                t.next = 9;
                                break;
                              }
                              if (
                                ((i = e.interactivity.mouse.position),
                                !(
                                  !e.retina.connectModeDistance ||
                                  e.retina.connectModeDistance < 0 ||
                                  !e.retina.connectModeRadius ||
                                  e.retina.connectModeRadius < 0
                                ) && i)
                              ) {
                                t.next = 5;
                                break;
                              }
                              return t.abrupt("return");
                            case 5:
                              (r = Math.abs(e.retina.connectModeRadius)),
                                (o = e.particles.quadTree.queryCircle(
                                  i,
                                  r,
                                  function (t) {
                                    return m.isEnabled(t);
                                  }
                                )),
                                (a = 0),
                                (s = (0, f.Z)(o));
                              try {
                                for (s.s(); !(u = s.n()).done; ) {
                                  (c = u.value),
                                    (l = c.getPosition()),
                                    (h = (0, f.Z)(o.slice(a + 1)));
                                  try {
                                    for (h.s(); !(d = h.n()).done; )
                                      (v = d.value),
                                        (p = v.getPosition()),
                                        (y = Math.abs(
                                          e.retina.connectModeDistance
                                        )),
                                        (g = Math.abs(l.x - p.x)),
                                        (w = Math.abs(l.y - p.y)),
                                        g < y && w < y && Wt(e, c, v);
                                  } catch (n) {
                                    h.e(n);
                                  } finally {
                                    h.f();
                                  }
                                  ++a;
                                }
                              } catch (n) {
                                s.e(n);
                              } finally {
                                s.f();
                              }
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i = this.container,
                  n = i.interactivity.mouse,
                  r = (
                    null !==
                      (e =
                        null === t || void 0 === t
                          ? void 0
                          : t.interactivity) && void 0 !== e
                      ? e
                      : i.actualOptions.interactivity
                  ).events;
                return (
                  !(!r.onHover.enable || !n.position) &&
                  (0, s.dB)("connect", r.onHover.mode)
                );
              },
            },
            {
              key: "loadModeOptions",
              value: function (t) {
                t.connect || (t.connect = new Ft());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.connect.load(
                    null === a || void 0 === a ? void 0 : a.connect
                  );
                }
              },
            },
            { key: "reset", value: function () {} },
          ]),
          i
        );
      })(s.L8);
      function Kt(t) {
        return Xt.apply(this, arguments);
      }
      function Xt() {
        return (Xt = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalConnect", function (t) {
                        return new Qt(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Yt = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.blink = !1),
              (this.consent = !1),
              (this.opacity = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.blink && (this.blink = t.blink),
                    void 0 !== t.color &&
                      (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.consent && (this.consent = t.consent),
                    void 0 !== t.opacity && (this.opacity = t.opacity));
                },
              },
            ]),
            t
          );
        })(),
        Jt = (function () {
          function t() {
            (0, o.Z)(this, t), (this.distance = 100), (this.links = new Yt());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "lineLinked",
                get: function () {
                  return this.links;
                },
                set: function (t) {
                  this.links = t;
                },
              },
              {
                key: "line_linked",
                get: function () {
                  return this.links;
                },
                set: function (t) {
                  this.links = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e, i;
                  t &&
                    (void 0 !== t.distance && (this.distance = t.distance),
                    this.links.load(
                      null !==
                        (i =
                          null !== (e = t.links) && void 0 !== e
                            ? e
                            : t.lineLinked) && void 0 !== i
                        ? i
                        : t.line_linked
                    ));
                },
              },
            ]),
            t
          );
        })();
      function $t(t, e, i, n, r) {
        t.canvas.draw(function (t) {
          var o,
            a = e.getPosition();
          !(function (t, e, i, n, r, o) {
            t.save(),
              (0, s.pS)(t, i, n),
              (t.strokeStyle = (0, s.iz)(r, o)),
              (t.lineWidth = e),
              t.stroke(),
              t.restore();
          })(
            t,
            null !== (o = e.retina.linksWidth) && void 0 !== o ? o : 0,
            a,
            r,
            i,
            n
          );
        });
      }
      var te = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          return (0, o.Z)(this, i), e.call(this, t);
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            {
              key: "init",
              value: function () {
                var t = this.container,
                  e = t.actualOptions.interactivity.modes.grab;
                e &&
                  (t.retina.grabModeDistance =
                    e.distance * t.retina.pixelRatio);
              },
            },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t() {
                    var e,
                      i,
                      r,
                      o,
                      a,
                      u,
                      c,
                      l,
                      h,
                      d,
                      v,
                      p,
                      y,
                      g,
                      w,
                      m,
                      b,
                      S,
                      _,
                      k = this;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((r = this.container),
                                (o = r.actualOptions),
                                (a = o.interactivity).modes.grab &&
                                  a.events.onHover.enable &&
                                  r.interactivity.status === s.Wt)
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              if ((u = r.interactivity.mouse.position)) {
                                t.next = 6;
                                break;
                              }
                              return t.abrupt("return");
                            case 6:
                              if ((c = r.retina.grabModeDistance) && !(c < 0)) {
                                t.next = 9;
                                break;
                              }
                              return t.abrupt("return");
                            case 9:
                              (l = r.particles.quadTree.queryCircle(
                                u,
                                c,
                                function (t) {
                                  return k.isEnabled(t);
                                }
                              )),
                                (h = (0, f.Z)(l)),
                                (t.prev = 11),
                                h.s();
                            case 13:
                              if ((d = h.n()).done) {
                                t.next = 29;
                                break;
                              }
                              if (
                                ((v = d.value),
                                (p = v.getPosition()),
                                !((y = (0, s.Sp)(p, u)) > c))
                              ) {
                                t.next = 18;
                                break;
                              }
                              return t.abrupt("continue", 27);
                            case 18:
                              if (
                                ((g = a.modes.grab.links),
                                (w = g.opacity),
                                !((m = w - (y * w) / c) <= 0))
                              ) {
                                t.next = 21;
                                break;
                              }
                              return t.abrupt("continue", 27);
                            case 21:
                              if (
                                ((b =
                                  null !== (e = g.color) && void 0 !== e
                                    ? e
                                    : null === (i = v.options.links) ||
                                      void 0 === i
                                    ? void 0
                                    : i.color),
                                !r.particles.grabLineColor &&
                                  b &&
                                  ((S = a.modes.grab.links),
                                  (r.particles.grabLineColor = (0, s.Dt)(
                                    b,
                                    S.blink,
                                    S.consent
                                  ))),
                                (_ = (0, s.BE)(
                                  v,
                                  void 0,
                                  r.particles.grabLineColor
                                )))
                              ) {
                                t.next = 26;
                                break;
                              }
                              return t.abrupt("return");
                            case 26:
                              $t(r, v, _, m, u);
                            case 27:
                              t.next = 13;
                              break;
                            case 29:
                              t.next = 34;
                              break;
                            case 31:
                              (t.prev = 31), (t.t0 = t.catch(11)), h.e(t.t0);
                            case 34:
                              return (t.prev = 34), h.f(), t.finish(34);
                            case 37:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[11, 31, 34, 37]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i = this.container,
                  n = i.interactivity.mouse,
                  r = (
                    null !==
                      (e =
                        null === t || void 0 === t
                          ? void 0
                          : t.interactivity) && void 0 !== e
                      ? e
                      : i.actualOptions.interactivity
                  ).events;
                return (
                  r.onHover.enable &&
                  !!n.position &&
                  (0, s.dB)("grab", r.onHover.mode)
                );
              },
            },
            {
              key: "loadModeOptions",
              value: function (t) {
                t.grab || (t.grab = new Jt());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.grab.load(null === a || void 0 === a ? void 0 : a.grab);
                }
              },
            },
            { key: "reset", value: function () {} },
          ]),
          i
        );
      })(s.L8);
      function ee(t) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalGrab", function (t) {
                        return new te(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ne = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          var n;
          return (
            (0, o.Z)(this, i),
            ((n = e.call(this, t)).handleClickMode = function (t) {
              if ("pause" === t) {
                var e = n.container;
                e.getAnimationStatus() ? e.pause() : e.play();
              }
            }),
            n
          );
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            { key: "init", value: function () {} },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t() {
                    return (0, n.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function () {
                return !0;
              },
            },
            { key: "reset", value: function () {} },
          ]),
          i
        );
      })(s.L8);
      function re(t) {
        t.addInteractor("externalPause", function (t) {
          return new ne(t);
        });
      }
      var oe = i(2982),
        ae = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.default = !0),
              (this.groups = []),
              (this.quantity = 4);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "particles_nb",
                get: function () {
                  return this.quantity;
                },
                set: function (t) {
                  this.quantity = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    void 0 !== t.default && (this.default = t.default),
                      void 0 !== t.groups &&
                        (this.groups = t.groups.map(function (t) {
                          return t;
                        })),
                      this.groups.length || (this.default = !0);
                    var i =
                      null !== (e = t.quantity) && void 0 !== e
                        ? e
                        : t.particles_nb;
                    void 0 !== i && (this.quantity = i);
                  }
                },
              },
            ]),
            t
          );
        })(),
        se = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            var n;
            return (
              (0, o.Z)(this, i),
              ((n = e.call(this, t)).handleClickMode = function (t) {
                if ("push" === t) {
                  var e = n.container,
                    i = e.actualOptions.interactivity.modes.push;
                  if (i) {
                    var r = i.quantity;
                    if (!(r <= 0)) {
                      var o = (0, s.c8)([void 0].concat((0, oe.Z)(i.groups))),
                        a =
                          void 0 !== o
                            ? e.actualOptions.particles.groups[o]
                            : void 0;
                      e.particles.push(r, e.interactivity.mouse, a, o);
                    }
                  }
                }
              }),
              n
            );
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              { key: "init", value: function () {} },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      return (0, n.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function () {
                  return !0;
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.push || (t.push = new ae());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.push.load(null === a || void 0 === a ? void 0 : a.push);
                  }
                },
              },
              { key: "reset", value: function () {} },
            ]),
            i
          );
        })(s.L8);
      function ue(t) {
        return ce.apply(this, arguments);
      }
      function ce() {
        return (ce = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalPush", function (t) {
                        return new se(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var le = (function () {
          function t() {
            (0, o.Z)(this, t), (this.quantity = 2);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "particles_nb",
                get: function () {
                  return this.quantity;
                },
                set: function (t) {
                  this.quantity = t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e;
                  if (t) {
                    var i =
                      null !== (e = t.quantity) && void 0 !== e
                        ? e
                        : t.particles_nb;
                    void 0 !== i && (this.quantity = i);
                  }
                },
              },
            ]),
            t
          );
        })(),
        he = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            var n;
            return (
              (0, o.Z)(this, i),
              ((n = e.call(this, t)).handleClickMode = function (t) {
                var e = n.container,
                  i = e.actualOptions;
                if (i.interactivity.modes.remove && "remove" === t) {
                  var r = i.interactivity.modes.remove.quantity;
                  e.particles.removeQuantity(r);
                }
              }),
              n
            );
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              { key: "init", value: function () {} },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      return (0, n.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function () {
                  return !0;
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.remove || (t.remove = new le());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.remove.load(
                      null === a || void 0 === a ? void 0 : a.remove
                    );
                  }
                },
              },
              { key: "reset", value: function () {} },
            ]),
            i
          );
        })(s.L8);
      function de(t) {
        t.addInteractor("externalRemove", function (t) {
          return new he(t);
        });
      }
      var ve = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.distance = 200),
              (this.duration = 0.4),
              (this.factor = 100),
              (this.speed = 1),
              (this.maxSpeed = 50),
              (this.easing = "ease-out-quad");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.distance && (this.distance = t.distance),
                    void 0 !== t.duration && (this.duration = t.duration),
                    void 0 !== t.easing && (this.easing = t.easing),
                    void 0 !== t.factor && (this.factor = t.factor),
                    void 0 !== t.speed && (this.speed = t.speed),
                    void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
                },
              },
            ]),
            t
          );
        })(),
        pe = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (0, o.Z)(this, i), ((t = e.call(this)).selectors = []), t;
          }
          return (
            (0, a.Z)(i, [
              {
                key: "ids",
                get: function () {
                  return (0, s.KH)(this.selectors, function (t) {
                    return t.replace("#", "");
                  });
                },
                set: function (t) {
                  this.selectors = (0, s.KH)(t, function (t) {
                    return "#".concat(t);
                  });
                },
              },
              {
                key: "load",
                value: function (t) {
                  (0, u.Z)((0, c.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (void 0 !== t.ids && (this.ids = t.ids),
                      void 0 !== t.selectors && (this.selectors = t.selectors));
                },
              },
            ]),
            i
          );
        })(ve),
        fe = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            return (0, o.Z)(this, i), e.apply(this, arguments);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  (0, u.Z)((0, c.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (this.divs = (0, s.KH)(t.divs, function (t) {
                        var e = new pe();
                        return e.load(t), e;
                      }));
                },
              },
            ]),
            i
          );
        })(ve),
        ye = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            var n;
            return (
              (0, o.Z)(this, i),
              (n = e.call(this, t)),
              t.repulse || (t.repulse = { particles: [] }),
              (n.handleClickMode = function (e) {
                var i = n.container.actualOptions.interactivity.modes.repulse;
                if (i && "repulse" === e) {
                  t.repulse || (t.repulse = { particles: [] }),
                    (t.repulse.clicking = !0),
                    (t.repulse.count = 0);
                  var r,
                    o = (0, f.Z)(t.repulse.particles);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var a = r.value;
                      n.isEnabled(a) && a.velocity.setTo(a.initialVelocity);
                    }
                  } catch (s) {
                    o.e(s);
                  } finally {
                    o.f();
                  }
                  (t.repulse.particles = []),
                    (t.repulse.finish = !1),
                    setTimeout(function () {
                      t.destroyed ||
                        (t.repulse || (t.repulse = { particles: [] }),
                        (t.repulse.clicking = !1));
                    }, 1e3 * i.duration);
                }
              }),
              n
            );
          }
          return (
            (0, a.Z)(i, [
              { key: "clear", value: function () {} },
              {
                key: "init",
                value: function () {
                  var t = this.container,
                    e = t.actualOptions.interactivity.modes.repulse;
                  e &&
                    (t.retina.repulseModeDistance =
                      e.distance * t.retina.pixelRatio);
                },
              },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      var e,
                        i,
                        r,
                        o,
                        a,
                        u,
                        c,
                        l,
                        h,
                        d = this;
                      return (0, n.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e = this.container),
                                  (i = e.actualOptions),
                                  (r = e.interactivity.status === s.Wt),
                                  (o = i.interactivity.events),
                                  (a = o.onHover.enable),
                                  (u = o.onHover.mode),
                                  (c = o.onClick.enable),
                                  (l = o.onClick.mode),
                                  (h = o.onDiv),
                                  r && a && (0, s.dB)("repulse", u)
                                    ? this.hoverRepulse()
                                    : c && (0, s.dB)("repulse", l)
                                    ? this.clickRepulse()
                                    : (0, s.XD)("repulse", h, function (t, e) {
                                        return d.singleSelectorRepulse(t, e);
                                      });
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function (t) {
                  var e,
                    i = this.container,
                    n = i.actualOptions,
                    r = i.interactivity.mouse,
                    o = (
                      null !==
                        (e =
                          null === t || void 0 === t
                            ? void 0
                            : t.interactivity) && void 0 !== e
                        ? e
                        : n.interactivity
                    ).events,
                    a = o.onDiv,
                    u = (0, s.wm)("repulse", a);
                  if (
                    !(
                      u ||
                      (o.onHover.enable && r.position) ||
                      (o.onClick.enable && r.clickPosition)
                    )
                  )
                    return !1;
                  var c = o.onHover.mode,
                    l = o.onClick.mode;
                  return (
                    (0, s.dB)("repulse", c) || (0, s.dB)("repulse", l) || u
                  );
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.repulse || (t.repulse = new fe());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.repulse.load(
                      null === a || void 0 === a ? void 0 : a.repulse
                    );
                  }
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "clickRepulse",
                value: function () {
                  var t = this,
                    e = this.container,
                    i = e.actualOptions.interactivity.modes.repulse;
                  if (i)
                    if (
                      (e.repulse || (e.repulse = { particles: [] }),
                      e.repulse.finish ||
                        (e.repulse.count || (e.repulse.count = 0),
                        e.repulse.count++,
                        e.repulse.count === e.particles.count &&
                          (e.repulse.finish = !0)),
                      e.repulse.clicking)
                    ) {
                      var n = e.retina.repulseModeDistance;
                      if (!n || n < 0) return;
                      var r = Math.pow(n / 6, 3),
                        o = e.interactivity.mouse.clickPosition;
                      if (void 0 === o) return;
                      var a,
                        u = new s.Cd(o.x, o.y, r),
                        c = e.particles.quadTree.query(u, function (e) {
                          return t.isEnabled(e);
                        }),
                        l = (0, f.Z)(c);
                      try {
                        for (l.s(); !(a = l.n()).done; ) {
                          var h = a.value,
                            d = (0, s.oW)(o, h.position),
                            v = d.dx,
                            p = d.dy,
                            y = d.distance,
                            g = Math.pow(y, 2),
                            w = (-r * i.speed) / g;
                          if (g <= r) {
                            e.repulse.particles.push(h);
                            var m = s.OW.create(v, p);
                            (m.length = w), h.velocity.setTo(m);
                          }
                        }
                      } catch (k) {
                        l.e(k);
                      } finally {
                        l.f();
                      }
                    } else if (!1 === e.repulse.clicking) {
                      var b,
                        S = (0, f.Z)(e.repulse.particles);
                      try {
                        for (S.s(); !(b = S.n()).done; ) {
                          var _ = b.value;
                          _.velocity.setTo(_.initialVelocity);
                        }
                      } catch (k) {
                        S.e(k);
                      } finally {
                        S.f();
                      }
                      e.repulse.particles = [];
                    }
                },
              },
              {
                key: "hoverRepulse",
                value: function () {
                  var t = this.container,
                    e = t.interactivity.mouse.position,
                    i = t.retina.repulseModeDistance;
                  !i ||
                    i < 0 ||
                    !e ||
                    this.processRepulse(e, i, new s.Cd(e.x, e.y, i));
                },
              },
              {
                key: "processRepulse",
                value: function (t, e, i, n) {
                  var r,
                    o = this,
                    a = this.container,
                    u = a.particles.quadTree.query(i, function (t) {
                      return o.isEnabled(t);
                    }),
                    c = a.actualOptions.interactivity.modes.repulse;
                  if (c) {
                    var l,
                      h = (0, f.Z)(u);
                    try {
                      for (h.s(); !(l = h.n()).done; ) {
                        var d = l.value,
                          v = (0, s.oW)(d.position, t),
                          p = v.dx,
                          y = v.dy,
                          g = v.distance,
                          w =
                            (null !==
                              (r =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.speed) && void 0 !== r
                              ? r
                              : c.speed) * c.factor,
                          m = (0, s.uZ)(
                            (0, s.cj)(1 - g / e, c.easing) * w,
                            0,
                            c.maxSpeed
                          ),
                          b = s.OW.create(
                            0 === g ? w : (p / g) * m,
                            0 === g ? w : (y / g) * m
                          );
                        d.position.addTo(b);
                      }
                    } catch (S) {
                      h.e(S);
                    } finally {
                      h.f();
                    }
                  }
                },
              },
              {
                key: "singleSelectorRepulse",
                value: function (t, e) {
                  var i = this,
                    n = this.container,
                    r = n.actualOptions.interactivity.modes.repulse;
                  if (r) {
                    var o = document.querySelectorAll(t);
                    o.length &&
                      o.forEach(function (t) {
                        var o = t,
                          a = n.retina.pixelRatio,
                          u = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * a,
                            y: (o.offsetTop + o.offsetHeight / 2) * a,
                          },
                          c = (o.offsetWidth / 2) * a,
                          l =
                            "circle" === e.type
                              ? new s.Cd(u.x, u.y, c)
                              : new s.Ae(
                                  o.offsetLeft * a,
                                  o.offsetTop * a,
                                  o.offsetWidth * a,
                                  o.offsetHeight * a
                                ),
                          h = r.divs,
                          d = (0, s.iC)(h, o);
                        i.processRepulse(u, c, l, d);
                      });
                  }
                },
              },
            ]),
            i
          );
        })(s.L8);
      function ge(t) {
        return we.apply(this, arguments);
      }
      function we() {
        return (we = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalRepulse", function (t) {
                        return new ye(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var me = (function () {
          function t() {
            (0, o.Z)(this, t), (this.factor = 3), (this.radius = 200);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.factor && (this.factor = t.factor),
                    void 0 !== t.radius && (this.radius = t.radius));
                },
              },
            ]),
            t
          );
        })(),
        be = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t) {
            return (0, o.Z)(this, i), e.call(this, t);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "clear",
                value: function (t, e, i) {
                  (t.slow.inRange && !i) || (t.slow.factor = 1);
                },
              },
              {
                key: "init",
                value: function () {
                  var t = this.container,
                    e = t.actualOptions.interactivity.modes.slow;
                  e &&
                    (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio);
                },
              },
              {
                key: "interact",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t() {
                      return (0, n.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isEnabled",
                value: function (t) {
                  var e,
                    i = this.container,
                    n = i.interactivity.mouse,
                    r = (
                      null !==
                        (e =
                          null === t || void 0 === t
                            ? void 0
                            : t.interactivity) && void 0 !== e
                        ? e
                        : i.actualOptions.interactivity
                    ).events;
                  return (
                    r.onHover.enable &&
                    !!n.position &&
                    (0, s.dB)("slow", r.onHover.mode)
                  );
                },
              },
              {
                key: "loadModeOptions",
                value: function (t) {
                  t.slow || (t.slow = new me());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.slow.load(null === a || void 0 === a ? void 0 : a.slow);
                  }
                },
              },
              {
                key: "reset",
                value: function (t) {
                  t.slow.inRange = !1;
                  var e = this.container,
                    i = e.actualOptions,
                    n = e.interactivity.mouse.position,
                    r = e.retina.slowModeRadius,
                    o = i.interactivity.modes.slow;
                  if (o && r && !(r < 0) && n) {
                    var a = t.getPosition(),
                      u = (0, s.Sp)(n, a),
                      c = u / r,
                      l = o.factor;
                    u <= r && ((t.slow.inRange = !0), (t.slow.factor = c / l));
                  }
                },
              },
            ]),
            i
          );
        })(s.L8);
      function Se(t) {
        return _e.apply(this, arguments);
      }
      function _e() {
        return (_e = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("externalSlow", function (t) {
                        return new be(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ke =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
      function xe(t) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        e.loading = !0;
                        var i = new Image();
                        (e.element = i),
                          i.addEventListener("load", function () {
                            (e.loading = !1), t();
                          }),
                          i.addEventListener("error", function () {
                            (e.element = void 0),
                              (e.error = !0),
                              (e.loading = !1),
                              console.error(
                                "Error tsParticles - loading image: ".concat(
                                  e.source
                                )
                              ),
                              t();
                          }),
                          (i.src = e.source);
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Ze(t) {
        return Ce.apply(this, arguments);
      }
      function Ce() {
        return (Ce = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ("svg" === e.type) {
                      t.next = 4;
                      break;
                    }
                    return (t.next = 3), xe(e);
                  case 3:
                    return t.abrupt("return");
                  case 4:
                    return (e.loading = !0), (t.next = 7), fetch(e.source);
                  case 7:
                    if (
                      ((i = t.sent).ok ||
                        (console.error("Error tsParticles - Image not found"),
                        (e.error = !0)),
                      e.error)
                    ) {
                      t.next = 13;
                      break;
                    }
                    return (t.next = 12), i.text();
                  case 12:
                    e.svgData = t.sent;
                  case 13:
                    e.loading = !1;
                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Ae(t, e, i, o) {
        var a,
          u,
          c,
          l = (function (t, e, i) {
            var n = t.svgData;
            if (!n) return "";
            var r = (0, s.vz)(e, i);
            if (n.includes("fill"))
              return n.replace(ke, function () {
                return r;
              });
            var o = n.indexOf(">");
            return ""
              .concat(n.substring(0, o), ' fill="')
              .concat(r, '"')
              .concat(n.substring(o));
          })(
            t,
            i,
            null !==
              (u =
                null === (a = o.opacity) || void 0 === a ? void 0 : a.value) &&
              void 0 !== u
              ? u
              : 1
          ),
          h = {
            color: i,
            data: Object.assign(Object.assign({}, t), { svgData: l }),
            loaded: !1,
            ratio: e.width / e.height,
            replaceColor:
              null !== (c = e.replaceColor) && void 0 !== c
                ? c
                : e.replace_color,
            source: e.src,
          };
        return new Promise(function (e) {
          var i = new Blob([l], { type: "image/svg+xml" }),
            o = URL || window.URL || window.webkitURL || window,
            a = o.createObjectURL(i),
            s = new Image();
          s.addEventListener("load", function () {
            (h.loaded = !0), (h.element = s), e(h), o.revokeObjectURL(a);
          }),
            s.addEventListener(
              "error",
              (0, r.Z)(
                (0, n.Z)().mark(function i() {
                  var r;
                  return (0, n.Z)().wrap(function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            o.revokeObjectURL(a),
                            (r = Object.assign(Object.assign({}, t), {
                              error: !1,
                              loading: !0,
                            })),
                            (i.next = 4),
                            xe(r)
                          );
                        case 4:
                          (h.loaded = !0), (h.element = r.element), e(h);
                        case 7:
                        case "end":
                          return i.stop();
                      }
                  }, i);
                })
              )
            ),
            (s.src = a);
        });
      }
      var Ge = (function () {
        function t() {
          (0, o.Z)(this, t), (this._images = []);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "addImage",
              value: function (t, e) {
                var i = this.getImages(t);
                null === i || void 0 === i || i.images.push(e);
              },
            },
            {
              key: "destroy",
              value: function () {
                this._images = [];
              },
            },
            {
              key: "draw",
              value: function (t, e, i, n) {
                var r,
                  o = e.image,
                  a = null === o || void 0 === o ? void 0 : o.element;
                if (a) {
                  var s =
                      null !==
                        (r = null === o || void 0 === o ? void 0 : o.ratio) &&
                      void 0 !== r
                        ? r
                        : 1,
                    u = { x: -i, y: -i };
                  (t.globalAlpha = n),
                    t.drawImage(a, u.x, u.y, 2 * i, (2 * i) / s),
                    (t.globalAlpha = 1);
                }
              },
            },
            {
              key: "getImages",
              value: function (t) {
                var e = this._images.find(function (e) {
                  return e.id === t.id;
                });
                return (
                  e ||
                  (this._images.push({ id: t.id, images: [] }),
                  this.getImages(t))
                );
              },
            },
            {
              key: "getSidesCount",
              value: function () {
                return 12;
              },
            },
            {
              key: "loadShape",
              value: function (t) {
                var e = this;
                if ("image" === t.shape || "images" === t.shape) {
                  var i = t.container,
                    n = this.getImages(i).images,
                    r = t.shapeData,
                    o = n.find(function (t) {
                      return t.source === r.src;
                    });
                  o
                    ? o.error
                    : this.loadImageShape(i, r).then(function () {
                        e.loadShape(t);
                      });
                }
              },
            },
            {
              key: "particleInit",
              value: function (t, e) {
                var i,
                  o = this;
                if ("image" === e.shape || "images" === e.shape) {
                  var a = this.getImages(t).images,
                    s = e.shapeData,
                    u = e.getFillColor(),
                    c =
                      null !== (i = s.replaceColor) && void 0 !== i
                        ? i
                        : s.replace_color,
                    l = a.find(function (t) {
                      return t.source === s.src;
                    });
                  l &&
                    (l.loading
                      ? setTimeout(function () {
                          o.particleInit(t, e);
                        })
                      : (0, r.Z)(
                          (0, n.Z)().mark(function t() {
                            var i, r, o, a, h, d;
                            return (0, n.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!(l.svgData && c && u)) {
                                      t.next = 6;
                                      break;
                                    }
                                    return (t.next = 3), Ae(l, s, u, e);
                                  case 3:
                                    (o = t.sent), (t.next = 7);
                                    break;
                                  case 6:
                                    o = {
                                      color: u,
                                      data: l,
                                      element: l.element,
                                      loaded: !0,
                                      ratio: s.width / s.height,
                                      replaceColor: c,
                                      source: s.src,
                                    };
                                  case 7:
                                    o.ratio || (o.ratio = 1),
                                      (a =
                                        null !== (i = s.fill) && void 0 !== i
                                          ? i
                                          : e.fill),
                                      (h =
                                        null !== (r = s.close) && void 0 !== r
                                          ? r
                                          : e.close),
                                      (d = { image: o, fill: a, close: h }),
                                      (e.image = d.image),
                                      (e.fill = d.fill),
                                      (e.close = d.close);
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        )());
                }
              },
            },
            {
              key: "loadImageShape",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t(e, i) {
                    var r, o, a, s;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((o = i.src)) {
                                t.next = 3;
                                break;
                              }
                              throw new Error(
                                "Error tsParticles - No image.src"
                              );
                            case 3:
                              return (
                                (t.prev = 3),
                                (a = {
                                  source: o,
                                  type: o.substring(o.length - 3),
                                  error: !1,
                                  loading: !0,
                                }),
                                this.addImage(e, a),
                                (s = (
                                  null !== (r = i.replaceColor) && void 0 !== r
                                    ? r
                                    : i.replace_color
                                )
                                  ? Ze
                                  : xe),
                                (t.next = 9),
                                s(a)
                              );
                            case 9:
                              t.next = 14;
                              break;
                            case 11:
                              throw (
                                ((t.prev = 11),
                                (t.t0 = t.catch(3)),
                                new Error(
                                  "tsParticles error - ".concat(
                                    i.src,
                                    " not found"
                                  )
                                ))
                              );
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[3, 11]]
                    );
                  })
                );
                return function (e, i) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          t
        );
      })();
      function Oe(t) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (i = new Ge()), (t.next = 3), e.addShape("image", i);
                  case 3:
                    return (t.next = 5), e.addShape("images", i);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Ee = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (0, o.Z)(this, i), ((t = e.call(this)).sync = !1), t;
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    ((0, u.Z)((0, c.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            i
          );
        })(s.SW),
        ze = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, o.Z)(this, i),
              ((t = e.call(this)).random.minimumValue = 1e-4),
              (t.sync = !1),
              t
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    ((0, u.Z)((0, c.Z)(i.prototype), "load", this).call(
                      this,
                      t
                    ),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            i
          );
        })(s.SW),
        Te = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.count = 0),
              (this.delay = new Ee()),
              (this.duration = new ze());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.count && (this.count = t.count),
                    this.delay.load(t.delay),
                    this.duration.load(t.duration));
                },
              },
            ]),
            t
          );
        })(),
        Re = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this.container = e);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "init",
                value: function (t) {
                  var e = this.container,
                    i = t.options.life;
                  i &&
                    ((t.life = {
                      delay: e.retina.reduceFactor
                        ? (((0, s.Gu)(i.delay.value) *
                            (i.delay.sync ? 1 : (0, s.sZ)())) /
                            e.retina.reduceFactor) *
                          1e3
                        : 0,
                      delayTime: 0,
                      duration: e.retina.reduceFactor
                        ? (((0, s.Gu)(i.duration.value) *
                            (i.duration.sync ? 1 : (0, s.sZ)())) /
                            e.retina.reduceFactor) *
                          1e3
                        : 0,
                      time: 0,
                      count: i.count,
                    }),
                    t.life.duration <= 0 && (t.life.duration = -1),
                    t.life.count <= 0 && (t.life.count = -1),
                    t.life && (t.spawning = t.life.delay > 0));
                },
              },
              {
                key: "isEnabled",
                value: function (t) {
                  return !t.destroyed;
                },
              },
              {
                key: "loadOptions",
                value: function (t) {
                  t.life || (t.life = new Te());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.life.load(null === a || void 0 === a ? void 0 : a.life);
                  }
                },
              },
              {
                key: "update",
                value: function (t, e) {
                  if (this.isEnabled(t) && t.life) {
                    var i = t.life,
                      n = !1;
                    if (t.spawning) {
                      if (
                        ((i.delayTime += e.value),
                        !(i.delayTime >= t.life.delay))
                      )
                        return;
                      (n = !0),
                        (t.spawning = !1),
                        (i.delayTime = 0),
                        (i.time = 0);
                    }
                    if (
                      -1 !== i.duration &&
                      !t.spawning &&
                      (n ? (i.time = 0) : (i.time += e.value),
                      !(i.time < i.duration))
                    )
                      if (
                        ((i.time = 0),
                        t.life.count > 0 && t.life.count--,
                        0 !== t.life.count)
                      ) {
                        var r = this.container.canvas.size,
                          o = (0, s.Cs)(0, r.width),
                          a = (0, s.Cs)(0, r.width);
                        (t.position.x = (0, s.vd)(o)),
                          (t.position.y = (0, s.vd)(a)),
                          (t.spawning = !0),
                          (i.delayTime = 0),
                          (i.time = 0),
                          t.reset();
                        var u = t.options.life;
                        u &&
                          ((i.delay = 1e3 * (0, s.Gu)(u.delay.value)),
                          (i.duration = 1e3 * (0, s.Gu)(u.duration.value)));
                      } else t.destroy();
                  }
                },
              },
            ]),
            t
          );
        })();
      function Me(t) {
        return Le.apply(this, arguments);
      }
      function Le() {
        return (Le = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("life", function (t) {
                        return new Re(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Ie = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "draw",
              value: function (t, e, i) {
                t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0);
              },
            },
            {
              key: "getSidesCount",
              value: function () {
                return 1;
              },
            },
          ]),
          t
        );
      })();
      function He(t) {
        return De.apply(this, arguments);
      }
      function De() {
        return (De = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.addShape("line", new Ie());
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Be = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e = t.options.opacity;
                t.opacity = {
                  enable: e.animation.enable,
                  max: (0, s.KI)(e.value),
                  min: (0, s.Uv)(e.value),
                  value: (0, s.Gu)(e.value),
                  loops: 0,
                  maxLoops: (0, s.Gu)(e.animation.count),
                };
                var i = e.animation;
                if (i.enable) {
                  (t.opacity.decay = 1 - (0, s.Gu)(i.decay)),
                    (t.opacity.status = 0);
                  var n = e.value;
                  switch (
                    ((t.opacity.min = (0, s.Uv)(n)),
                    (t.opacity.max = (0, s.KI)(n)),
                    i.startValue)
                  ) {
                    case "min":
                      (t.opacity.value = t.opacity.min), (t.opacity.status = 0);
                      break;
                    case "random":
                      (t.opacity.value = (0, s.vd)(t.opacity)),
                        (t.opacity.status = (0, s.sZ)() >= 0.5 ? 0 : 1);
                      break;
                    default:
                      (t.opacity.value = t.opacity.max), (t.opacity.status = 1);
                  }
                  (t.opacity.velocity =
                    ((0, s.Gu)(i.speed) / 100) *
                    this.container.retina.reduceFactor),
                    i.sync || (t.opacity.velocity *= (0, s.sZ)());
                }
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e, i, n, r;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  !!t.opacity &&
                  t.opacity.enable &&
                  ((null !== (e = t.opacity.maxLoops) && void 0 !== e
                    ? e
                    : 0) <= 0 ||
                    ((null !== (i = t.opacity.maxLoops) && void 0 !== i
                      ? i
                      : 0) > 0 &&
                      (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) <
                        (null !== (r = t.opacity.maxLoops) && void 0 !== r
                          ? r
                          : 0)))
                );
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i, n, r, o, a, u;
                    if (t.opacity) {
                      var c = t.opacity.min,
                        l = t.opacity.max,
                        h =
                          null !== (i = t.opacity.decay) && void 0 !== i
                            ? i
                            : 1;
                      if (
                        !(
                          t.destroyed ||
                          !t.opacity.enable ||
                          ((null !== (n = t.opacity.maxLoops) && void 0 !== n
                            ? n
                            : 0) > 0 &&
                            (null !== (r = t.opacity.loops) && void 0 !== r
                              ? r
                              : 0) >
                              (null !== (o = t.opacity.maxLoops) && void 0 !== o
                                ? o
                                : 0))
                        )
                      ) {
                        switch (t.opacity.status) {
                          case 0:
                            t.opacity.value >= l
                              ? ((t.opacity.status = 1),
                                t.opacity.loops || (t.opacity.loops = 0),
                                t.opacity.loops++)
                              : (t.opacity.value +=
                                  (null !== (a = t.opacity.velocity) &&
                                  void 0 !== a
                                    ? a
                                    : 0) * e.factor);
                            break;
                          case 1:
                            t.opacity.value <= c
                              ? ((t.opacity.status = 0),
                                t.opacity.loops || (t.opacity.loops = 0),
                                t.opacity.loops++)
                              : (t.opacity.value -=
                                  (null !== (u = t.opacity.velocity) &&
                                  void 0 !== u
                                    ? u
                                    : 0) * e.factor);
                        }
                        t.opacity.velocity &&
                          1 !== t.opacity.decay &&
                          (t.opacity.velocity *= h),
                          (function (t, e, i, n) {
                            switch (t.options.opacity.animation.destroy) {
                              case "max":
                                e >= n && t.destroy();
                                break;
                              case "min":
                                e <= i && t.destroy();
                            }
                          })(t, t.opacity.value, c, l),
                          t.destroyed ||
                            (t.opacity.value = (0, s.uZ)(
                              t.opacity.value,
                              c,
                              l
                            ));
                      }
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function Ne(t) {
        return je.apply(this, arguments);
      }
      function je() {
        return (je = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("opacity", function (t) {
                        return new Be(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Ue = i(885);
      var Fe = (function () {
          function t(e) {
            (0, o.Z)(this, t),
              (this.container = e),
              (this.modes = [
                "bounce",
                "bounce-vertical",
                "bounce-horizontal",
                "bounceVertical",
                "bounceHorizontal",
                "split",
              ]);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "update",
                value: function (t, e, i, n) {
                  if (this.modes.includes(n)) {
                    var r,
                      o = this.container,
                      a = !1,
                      u = (0, f.Z)(o.plugins);
                    try {
                      for (u.s(); !(r = u.n()).done; ) {
                        var c = (0, Ue.Z)(r.value, 2)[1];
                        if (
                          (void 0 !== c.particleBounce &&
                            (a = c.particleBounce(t, i, e)),
                          a)
                        )
                          break;
                      }
                    } catch (y) {
                      u.e(y);
                    } finally {
                      u.f();
                    }
                    if (!a) {
                      var l = t.getPosition(),
                        h = t.offset,
                        d = t.getRadius(),
                        v = (0, s.M_)(l, d),
                        p = o.canvas.size;
                      !(function (t) {
                        if (
                          "bounce" === t.outMode ||
                          "bounce-horizontal" === t.outMode ||
                          "bounceHorizontal" === t.outMode ||
                          "split" === t.outMode
                        ) {
                          t.bounds.right < 0
                            ? (t.particle.position.x = t.size + t.offset.x)
                            : t.bounds.left > t.canvasSize.width &&
                              (t.particle.position.x =
                                t.canvasSize.width - t.size - t.offset.x);
                          var e = t.particle.velocity.x,
                            i = !1;
                          if (
                            ("right" === t.direction &&
                              t.bounds.right >= t.canvasSize.width &&
                              e > 0) ||
                            ("left" === t.direction &&
                              t.bounds.left <= 0 &&
                              e < 0)
                          ) {
                            var n = (0, s.NA)(
                              t.particle.options.bounce.horizontal
                            );
                            (t.particle.velocity.x *= -n), (i = !0);
                          }
                          if (i) {
                            var r = t.offset.x + t.size;
                            t.bounds.right >= t.canvasSize.width
                              ? (t.particle.position.x = t.canvasSize.width - r)
                              : t.bounds.left <= 0 &&
                                (t.particle.position.x = r),
                              "split" === t.outMode && t.particle.destroy();
                          }
                        }
                      })({
                        particle: t,
                        outMode: n,
                        direction: e,
                        bounds: v,
                        canvasSize: p,
                        offset: h,
                        size: d,
                      }),
                        (function (t) {
                          if (
                            "bounce" === t.outMode ||
                            "bounce-vertical" === t.outMode ||
                            "bounceVertical" === t.outMode ||
                            "split" === t.outMode
                          ) {
                            t.bounds.bottom < 0
                              ? (t.particle.position.y = t.size + t.offset.y)
                              : t.bounds.top > t.canvasSize.height &&
                                (t.particle.position.y =
                                  t.canvasSize.height - t.size - t.offset.y);
                            var e = t.particle.velocity.y,
                              i = !1;
                            if (
                              ("bottom" === t.direction &&
                                t.bounds.bottom >= t.canvasSize.height &&
                                e > 0) ||
                              ("top" === t.direction &&
                                t.bounds.top <= 0 &&
                                e < 0)
                            ) {
                              var n = (0, s.NA)(
                                t.particle.options.bounce.vertical
                              );
                              (t.particle.velocity.y *= -n), (i = !0);
                            }
                            if (i) {
                              var r = t.offset.y + t.size;
                              t.bounds.bottom >= t.canvasSize.height
                                ? (t.particle.position.y =
                                    t.canvasSize.height - r)
                                : t.bounds.top <= 0 &&
                                  (t.particle.position.y = r),
                                "split" === t.outMode && t.particle.destroy();
                            }
                          }
                        })({
                          particle: t,
                          outMode: n,
                          direction: e,
                          bounds: v,
                          canvasSize: p,
                          offset: h,
                          size: d,
                        });
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        qe = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this.container = e), (this.modes = ["destroy"]);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "update",
                value: function (t, e, i, n) {
                  if (this.modes.includes(n)) {
                    var r = this.container;
                    switch (t.outType) {
                      case "normal":
                      case "outside":
                        if (
                          (0, s.Ac)(
                            t.position,
                            r.canvas.size,
                            s.OW.origin,
                            t.getRadius(),
                            e
                          )
                        )
                          return;
                        break;
                      case "inside":
                        var o = (0, s.oW)(t.position, t.moveCenter),
                          a = o.dx,
                          u = o.dy,
                          c = t.velocity,
                          l = c.x,
                          h = c.y;
                        if (
                          (l < 0 && a > t.moveCenter.radius) ||
                          (h < 0 && u > t.moveCenter.radius) ||
                          (l >= 0 && a < -t.moveCenter.radius) ||
                          (h >= 0 && u < -t.moveCenter.radius)
                        )
                          return;
                    }
                    r.particles.remove(t, void 0, !0);
                  }
                },
              },
            ]),
            t
          );
        })(),
        We = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this.container = e), (this.modes = ["none"]);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "update",
                value: function (t, e, i, n) {
                  if (
                    this.modes.includes(n) &&
                    (!t.options.move.distance.horizontal ||
                      ("left" !== e && "right" !== e)) &&
                    (!t.options.move.distance.vertical ||
                      ("top" !== e && "bottom" !== e))
                  ) {
                    var r = t.options.move.gravity,
                      o = this.container,
                      a = o.canvas.size,
                      u = t.getRadius();
                    if (r.enable) {
                      var c = t.position;
                      ((!r.inverse && c.y > a.height + u && "bottom" === e) ||
                        (r.inverse && c.y < -u && "top" === e)) &&
                        o.particles.remove(t);
                    } else {
                      if (
                        (t.velocity.y > 0 && t.position.y <= a.height + u) ||
                        (t.velocity.y < 0 && t.position.y >= -u) ||
                        (t.velocity.x > 0 && t.position.x <= a.width + u) ||
                        (t.velocity.x < 0 && t.position.x >= -u)
                      )
                        return;
                      (0, s.Ac)(t.position, o.canvas.size, s.OW.origin, u, e) ||
                        o.particles.remove(t);
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        Qe = (function () {
          function t(e) {
            (0, o.Z)(this, t), (this.container = e), (this.modes = ["out"]);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "update",
                value: function (t, e, i, n) {
                  if (this.modes.includes(n)) {
                    var r = this.container;
                    if ("inside" === t.outType) {
                      var o = t.velocity,
                        a = o.x,
                        u = o.y,
                        c = s.OW.origin;
                      (c.length = t.moveCenter.radius),
                        (c.angle = t.velocity.angle + Math.PI),
                        c.addTo(s.OW.create(t.moveCenter));
                      var l = (0, s.oW)(t.position, c),
                        h = l.dx,
                        d = l.dy;
                      if (
                        (a <= 0 && h >= 0) ||
                        (u <= 0 && d >= 0) ||
                        (a >= 0 && h <= 0) ||
                        (u >= 0 && d <= 0)
                      )
                        return;
                      (t.position.x = Math.floor(
                        (0, s.vd)({ min: 0, max: r.canvas.size.width })
                      )),
                        (t.position.y = Math.floor(
                          (0, s.vd)({ min: 0, max: r.canvas.size.height })
                        ));
                      var v = (0, s.oW)(t.position, t.moveCenter),
                        p = v.dx,
                        f = v.dy;
                      (t.direction = Math.atan2(-f, -p)),
                        (t.velocity.angle = t.direction);
                    } else {
                      if (
                        (0, s.Ac)(
                          t.position,
                          r.canvas.size,
                          s.OW.origin,
                          t.getRadius(),
                          e
                        )
                      )
                        return;
                      switch (t.outType) {
                        case "outside":
                          (t.position.x =
                            Math.floor(
                              (0, s.vd)({
                                min: -t.moveCenter.radius,
                                max: t.moveCenter.radius,
                              })
                            ) + t.moveCenter.x),
                            (t.position.y =
                              Math.floor(
                                (0, s.vd)({
                                  min: -t.moveCenter.radius,
                                  max: t.moveCenter.radius,
                                })
                              ) + t.moveCenter.y);
                          var y = (0, s.oW)(t.position, t.moveCenter),
                            g = y.dx,
                            w = y.dy;
                          t.moveCenter.radius &&
                            ((t.direction = Math.atan2(w, g)),
                            (t.velocity.angle = t.direction));
                          break;
                        case "normal":
                          var m = t.options.move.warp,
                            b = r.canvas.size,
                            S = {
                              bottom: b.height + t.getRadius() + t.offset.y,
                              left: -t.getRadius() - t.offset.x,
                              right: b.width + t.getRadius() + t.offset.x,
                              top: -t.getRadius() - t.offset.y,
                            },
                            _ = t.getRadius(),
                            k = (0, s.M_)(t.position, _);
                          "right" === e && k.left > b.width + t.offset.x
                            ? ((t.position.x = S.left),
                              (t.initialPosition.x = t.position.x),
                              m ||
                                ((t.position.y = (0, s.sZ)() * b.height),
                                (t.initialPosition.y = t.position.y)))
                            : "left" === e &&
                              k.right < -t.offset.x &&
                              ((t.position.x = S.right),
                              (t.initialPosition.x = t.position.x),
                              m ||
                                ((t.position.y = (0, s.sZ)() * b.height),
                                (t.initialPosition.y = t.position.y))),
                            "bottom" === e && k.top > b.height + t.offset.y
                              ? (m ||
                                  ((t.position.x = (0, s.sZ)() * b.width),
                                  (t.initialPosition.x = t.position.x)),
                                (t.position.y = S.top),
                                (t.initialPosition.y = t.position.y))
                              : "top" === e &&
                                k.bottom < -t.offset.y &&
                                (m ||
                                  ((t.position.x = (0, s.sZ)() * b.width),
                                  (t.initialPosition.x = t.position.x)),
                                (t.position.y = S.bottom),
                                (t.initialPosition.y = t.position.y));
                      }
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ke = (function () {
          function t(e) {
            (0, o.Z)(this, t),
              (this.container = e),
              (this.updaters = [new Fe(e), new qe(e), new Qe(e), new We(e)]);
          }
          return (
            (0, a.Z)(t, [
              { key: "init", value: function () {} },
              {
                key: "isEnabled",
                value: function (t) {
                  return !t.destroyed && !t.spawning;
                },
              },
              {
                key: "update",
                value: function (t, e) {
                  var i,
                    n,
                    r,
                    o,
                    a = t.options.move.outModes;
                  this.updateOutMode(
                    t,
                    e,
                    null !== (i = a.bottom) && void 0 !== i ? i : a.default,
                    "bottom"
                  ),
                    this.updateOutMode(
                      t,
                      e,
                      null !== (n = a.left) && void 0 !== n ? n : a.default,
                      "left"
                    ),
                    this.updateOutMode(
                      t,
                      e,
                      null !== (r = a.right) && void 0 !== r ? r : a.default,
                      "right"
                    ),
                    this.updateOutMode(
                      t,
                      e,
                      null !== (o = a.top) && void 0 !== o ? o : a.default,
                      "top"
                    );
                },
              },
              {
                key: "updateOutMode",
                value: function (t, e, i, n) {
                  var r,
                    o = (0, f.Z)(this.updaters);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      r.value.update(t, n, e, i);
                    }
                  } catch (a) {
                    o.e(a);
                  } finally {
                    o.f();
                  }
                },
              },
            ]),
            t
          );
        })();
      function Xe(t) {
        return Ye.apply(this, arguments);
      }
      function Ye() {
        return (Ye = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("outModes", function (t) {
                        return new Ke(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Je = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            { key: "init", value: function () {} },
            {
              key: "isEnabled",
              value: function (t) {
                return (
                  !(0, s.Kr)() &&
                  !t.destroyed &&
                  t.container.actualOptions.interactivity.events.onHover
                    .parallax.enable
                );
              },
            },
            {
              key: "move",
              value: function (t) {
                var e = t.container,
                  i = e.actualOptions;
                if (
                  !(0, s.Kr)() &&
                  i.interactivity.events.onHover.parallax.enable
                ) {
                  var n = i.interactivity.events.onHover.parallax.force,
                    r = e.interactivity.mouse.position;
                  if (r) {
                    var o = e.canvas.size.width / 2,
                      a = e.canvas.size.height / 2,
                      u = i.interactivity.events.onHover.parallax.smooth,
                      c = t.getRadius() / n,
                      l = (r.x - o) * c,
                      h = (r.y - a) * c;
                    (t.offset.x += (l - t.offset.x) / u),
                      (t.offset.y += (h - t.offset.y) / u);
                  }
                }
              },
            },
          ]),
          t
        );
      })();
      function $e(t) {
        return ti.apply(this, arguments);
      }
      function ti() {
        return (ti = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    e.addMover("parallax", function () {
                      return new Je();
                    });
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ei = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          return (0, o.Z)(this, i), e.call(this, t);
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            { key: "init", value: function () {} },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t(e) {
                    var i, r, o, a, u, c, l, h, d, v, p, y, g, w, m, b, S;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (r = this.container),
                                (o =
                                  null !== (i = e.retina.attractDistance) &&
                                  void 0 !== i
                                    ? i
                                    : r.retina.attractDistance),
                                (a = e.getPosition()),
                                (u = r.particles.quadTree.queryCircle(a, o)),
                                (c = (0, f.Z)(u)),
                                (t.prev = 2),
                                c.s();
                            case 4:
                              if ((l = c.n()).done) {
                                t.next = 15;
                                break;
                              }
                              if (
                                ((h = l.value),
                                e !== h &&
                                  h.options.move.attract.enable &&
                                  !h.destroyed &&
                                  !h.spawning)
                              ) {
                                t.next = 8;
                                break;
                              }
                              return t.abrupt("continue", 13);
                            case 8:
                              (d = h.getPosition()),
                                (v = (0, s.oW)(a, d)),
                                (p = v.dx),
                                (y = v.dy),
                                (g = e.options.move.attract.rotate),
                                (w = p / (1e3 * g.x)),
                                (m = y / (1e3 * g.y)),
                                (b = h.size.value / e.size.value),
                                (S = 1 / b),
                                (e.velocity.x -= w * b),
                                (e.velocity.y -= m * b),
                                (h.velocity.x += w * S),
                                (h.velocity.y += m * S);
                            case 13:
                              t.next = 4;
                              break;
                            case 15:
                              t.next = 20;
                              break;
                            case 17:
                              (t.prev = 17), (t.t0 = t.catch(2)), c.e(t.t0);
                            case 20:
                              return (t.prev = 20), c.f(), t.finish(20);
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[2, 17, 20, 23]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                return t.options.move.attract.enable;
              },
            },
            { key: "reset", value: function () {} },
          ]),
          i
        );
      })(s.$S);
      function ii(t) {
        return ni.apply(this, arguments);
      }
      function ni() {
        return (ni = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("particlesAttract", function (t) {
                        return new ei(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function ri(t, e) {
        (0, s.kR)((0, s.gy)(t), (0, s.gy)(e));
      }
      function oi(t, e, i, n) {
        switch (t.options.collisions.mode) {
          case "absorb":
            !(function (t, e, i, n) {
              if (void 0 === t.getRadius() && void 0 !== e.getRadius())
                t.destroy();
              else if (void 0 !== t.getRadius() && void 0 === e.getRadius())
                e.destroy();
              else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
                if (t.getRadius() >= e.getRadius()) {
                  var r =
                    (0, s.uZ)(t.getRadius() / e.getRadius(), 0, e.getRadius()) *
                    i;
                  (t.size.value += r),
                    (e.size.value -= r),
                    e.getRadius() <= n && ((e.size.value = 0), e.destroy());
                } else {
                  var o =
                    (0, s.uZ)(e.getRadius() / t.getRadius(), 0, t.getRadius()) *
                    i;
                  (t.size.value -= o),
                    (e.size.value += o),
                    t.getRadius() <= n && ((t.size.value = 0), t.destroy());
                }
            })(t, e, i, n);
            break;
          case "bounce":
            ri(t, e);
            break;
          case "destroy":
            !(function (t, e) {
              t.unbreakable || e.unbreakable || ri(t, e),
                void 0 === t.getRadius() && void 0 !== e.getRadius()
                  ? t.destroy()
                  : void 0 !== t.getRadius() && void 0 === e.getRadius()
                  ? e.destroy()
                  : void 0 !== t.getRadius() &&
                    void 0 !== e.getRadius() &&
                    (t.getRadius() >= e.getRadius()
                      ? e.destroy()
                      : t.destroy());
            })(t, e);
        }
      }
      var ai = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          return (0, o.Z)(this, i), e.call(this, t);
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            { key: "init", value: function () {} },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t(e) {
                    var i, r, o, a, u, c, l, h, d;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (i = this.container),
                                (r = e.getPosition()),
                                (o = e.getRadius()),
                                (a = i.particles.quadTree.queryCircle(
                                  r,
                                  2 * o
                                )),
                                (u = (0, f.Z)(a)),
                                (t.prev = 2),
                                u.s();
                            case 4:
                              if ((c = u.n()).done) {
                                t.next = 19;
                                break;
                              }
                              if (
                                ((l = c.value),
                                e !== l &&
                                  l.options.collisions.enable &&
                                  e.options.collisions.mode ===
                                    l.options.collisions.mode &&
                                  !l.destroyed &&
                                  !l.spawning)
                              ) {
                                t.next = 8;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 8:
                              if (
                                ((h = l.getPosition()),
                                (d = l.getRadius()),
                                !(
                                  Math.abs(Math.round(r.z) - Math.round(h.z)) >
                                  o + d
                                ))
                              ) {
                                t.next = 12;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 12:
                              if (!((0, s.Sp)(r, h) > o + d)) {
                                t.next = 16;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 16:
                              oi(e, l, i.fpsLimit / 1e3, i.retina.pixelRatio);
                            case 17:
                              t.next = 4;
                              break;
                            case 19:
                              t.next = 24;
                              break;
                            case 21:
                              (t.prev = 21), (t.t0 = t.catch(2)), u.e(t.t0);
                            case 24:
                              return (t.prev = 24), u.f(), t.finish(24);
                            case 27:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[2, 21, 24, 27]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                return t.options.collisions.enable;
              },
            },
            { key: "reset", value: function () {} },
          ]),
          i
        );
      })(s.$S);
      function si(t) {
        return ui.apply(this, arguments);
      }
      function ui() {
        return (ui = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("particlesCollisions", function (t) {
                        return new ai(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ci = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i(t, n, r, a) {
            var s;
            return (
              (0, o.Z)(this, i),
              ((s = e.call(this, t, n, r)).canvasSize = a),
              (s.canvasSize = Object.assign({}, a)),
              s
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "contains",
                value: function (t) {
                  if (
                    (0, u.Z)((0, c.Z)(i.prototype), "contains", this).call(
                      this,
                      t
                    )
                  )
                    return !0;
                  var e = { x: t.x - this.canvasSize.width, y: t.y };
                  if (
                    (0, u.Z)((0, c.Z)(i.prototype), "contains", this).call(
                      this,
                      e
                    )
                  )
                    return !0;
                  var n = {
                    x: t.x - this.canvasSize.width,
                    y: t.y - this.canvasSize.height,
                  };
                  if (
                    (0, u.Z)((0, c.Z)(i.prototype), "contains", this).call(
                      this,
                      n
                    )
                  )
                    return !0;
                  var r = { x: t.x, y: t.y - this.canvasSize.height };
                  return (0, u.Z)((0, c.Z)(i.prototype), "contains", this).call(
                    this,
                    r
                  );
                },
              },
              {
                key: "intersects",
                value: function (t) {
                  if (
                    (0, u.Z)((0, c.Z)(i.prototype), "intersects", this).call(
                      this,
                      t
                    )
                  )
                    return !0;
                  var e = t,
                    n = t,
                    r = {
                      x: t.position.x - this.canvasSize.width,
                      y: t.position.y - this.canvasSize.height,
                    };
                  if (void 0 !== n.radius) {
                    var o = new s.Cd(r.x, r.y, 2 * n.radius);
                    return (0, u.Z)(
                      (0, c.Z)(i.prototype),
                      "intersects",
                      this
                    ).call(this, o);
                  }
                  if (void 0 !== e.size) {
                    var a = new s.Ae(
                      r.x,
                      r.y,
                      2 * e.size.width,
                      2 * e.size.height
                    );
                    return (0, u.Z)(
                      (0, c.Z)(i.prototype),
                      "intersects",
                      this
                    ).call(this, a);
                  }
                  return !1;
                },
              },
            ]),
            i
          );
        })(s.Cd),
        li = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.blur = 5),
              (this.color = new s.Oz()),
              (this.color.value = "#000"),
              (this.enable = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.blur && (this.blur = t.blur),
                    (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.enable && (this.enable = t.enable));
                },
              },
            ]),
            t
          );
        })(),
        hi = (function () {
          function t() {
            (0, o.Z)(this, t), (this.enable = !1), (this.frequency = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.color &&
                      (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.frequency && (this.frequency = t.frequency),
                    void 0 !== t.opacity && (this.opacity = t.opacity));
                },
              },
            ]),
            t
          );
        })(),
        di = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.blink = !1),
              (this.color = new s.Oz()),
              (this.color.value = "#fff"),
              (this.consent = !1),
              (this.distance = 100),
              (this.enable = !1),
              (this.frequency = 1),
              (this.opacity = 1),
              (this.shadow = new li()),
              (this.triangles = new hi()),
              (this.width = 1),
              (this.warp = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.id && (this.id = t.id),
                    void 0 !== t.blink && (this.blink = t.blink),
                    (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.consent && (this.consent = t.consent),
                    void 0 !== t.distance && (this.distance = t.distance),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.frequency && (this.frequency = t.frequency),
                    void 0 !== t.opacity && (this.opacity = t.opacity),
                    this.shadow.load(t.shadow),
                    this.triangles.load(t.triangles),
                    void 0 !== t.width && (this.width = t.width),
                    void 0 !== t.warp && (this.warp = t.warp));
                },
              },
            ]),
            t
          );
        })();
      function vi(t, e, i, n, r) {
        var o = (0, s.Sp)(t, e);
        if (!r || o <= i) return o;
        var a = { x: e.x - n.width, y: e.y };
        if ((o = (0, s.Sp)(t, a)) <= i) return o;
        var u = { x: e.x - n.width, y: e.y - n.height };
        if ((o = (0, s.Sp)(t, u)) <= i) return o;
        var c = { x: e.x, y: e.y - n.height };
        return (o = (0, s.Sp)(t, c));
      }
      var pi = (function (t) {
        (0, l.Z)(i, t);
        var e = (0, h.Z)(i);
        function i(t) {
          var n;
          return (
            (0, o.Z)(this, i), ((n = e.call(this, t)).linkContainer = t), n
          );
        }
        return (
          (0, a.Z)(i, [
            { key: "clear", value: function () {} },
            {
              key: "init",
              value: function () {
                this.linkContainer.particles.linksColors = new Map();
              },
            },
            {
              key: "interact",
              value: (function () {
                var t = (0, r.Z)(
                  (0, n.Z)().mark(function t(e) {
                    var i, r, o, a, u, c, l, h, d, v, p, y, g, w, m, b, S;
                    return (0, n.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.options.links) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              if (
                                ((e.links = []),
                                (r = e.getPosition()),
                                (o = this.container),
                                (a = o.canvas.size),
                                !(
                                  r.x < 0 ||
                                  r.y < 0 ||
                                  r.x > a.width ||
                                  r.y > a.height
                                ))
                              ) {
                                t.next = 6;
                                break;
                              }
                              return t.abrupt("return");
                            case 6:
                              (u = e.options.links),
                                (c = u.opacity),
                                (l =
                                  null !== (i = e.retina.linksDistance) &&
                                  void 0 !== i
                                    ? i
                                    : 0),
                                (h = u.warp),
                                (d = h
                                  ? new ci(r.x, r.y, l, a)
                                  : new s.Cd(r.x, r.y, l)),
                                (v = o.particles.quadTree.query(d)),
                                (p = (0, f.Z)(v)),
                                (t.prev = 8),
                                p.s();
                            case 10:
                              if ((y = p.n()).done) {
                                t.next = 26;
                                break;
                              }
                              if (
                                ((g = y.value),
                                (w = g.options.links),
                                e !== g &&
                                  (null === w || void 0 === w
                                    ? void 0
                                    : w.enable) &&
                                  u.id === w.id &&
                                  !g.spawning &&
                                  !g.destroyed &&
                                  g.links &&
                                  -1 ===
                                    e.links
                                      .map(function (t) {
                                        return t.destination;
                                      })
                                      .indexOf(g) &&
                                  -1 ===
                                    g.links
                                      .map(function (t) {
                                        return t.destination;
                                      })
                                      .indexOf(e))
                              ) {
                                t.next = 15;
                                break;
                              }
                              return t.abrupt("continue", 24);
                            case 15:
                              if (
                                !(
                                  (m = g.getPosition()).x < 0 ||
                                  m.y < 0 ||
                                  m.x > a.width ||
                                  m.y > a.height
                                )
                              ) {
                                t.next = 18;
                                break;
                              }
                              return t.abrupt("continue", 24);
                            case 18:
                              if (!((b = vi(r, m, l, a, h && w.warp)) > l)) {
                                t.next = 21;
                                break;
                              }
                              return t.abrupt("return");
                            case 21:
                              (S = (1 - b / l) * c),
                                this.setColor(e),
                                e.links.push({ destination: g, opacity: S });
                            case 24:
                              t.next = 10;
                              break;
                            case 26:
                              t.next = 31;
                              break;
                            case 28:
                              (t.prev = 28), (t.t0 = t.catch(8)), p.e(t.t0);
                            case 31:
                              return (t.prev = 31), p.f(), t.finish(31);
                            case 34:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[8, 28, 31, 34]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e;
                return !!(null === (e = t.options.links) || void 0 === e
                  ? void 0
                  : e.enable);
              },
            },
            {
              key: "loadParticlesOptions",
              value: function (t) {
                var e, i;
                t.links || (t.links = new di());
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                for (var a = 0, s = r; a < s.length; a++) {
                  var u = s[a];
                  t.links.load(
                    null !==
                      (i =
                        null !==
                          (e = null === u || void 0 === u ? void 0 : u.links) &&
                        void 0 !== e
                          ? e
                          : null === u || void 0 === u
                          ? void 0
                          : u.lineLinked) && void 0 !== i
                      ? i
                      : null === u || void 0 === u
                      ? void 0
                      : u.line_linked
                  );
                }
              },
            },
            { key: "reset", value: function () {} },
            {
              key: "setColor",
              value: function (t) {
                if (t.options.links) {
                  var e = this.linkContainer,
                    i = t.options.links,
                    n =
                      void 0 === i.id
                        ? e.particles.linksColor
                        : e.particles.linksColors.get(i.id);
                  if (!n) {
                    var r = i.color;
                    (n = (0, s.Dt)(r, i.blink, i.consent)),
                      void 0 === i.id
                        ? (e.particles.linksColor = n)
                        : e.particles.linksColors.set(i.id, n);
                  }
                }
              },
            },
          ]),
          i
        );
      })(s.$S);
      function fi(t) {
        return yi.apply(this, arguments);
      }
      function yi() {
        return (yi = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addInteractor("particlesLinks", function (t) {
                        return new pi(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function gi(t, e) {
        var i,
          n =
            ((i = t.map(function (t) {
              return t.id;
            })).sort(function (t, e) {
              return t - e;
            }),
            i.join("_")),
          r = e.get(n);
        return void 0 === r && ((r = (0, s.sZ)()), e.set(n, r)), r;
      }
      var wi = (function () {
          function t(e) {
            (0, o.Z)(this, t),
              (this.container = e),
              (this._freqs = { links: new Map(), triangles: new Map() });
          }
          return (
            (0, a.Z)(t, [
              {
                key: "drawParticle",
                value: function (t, e) {
                  var i,
                    n = this,
                    r = this.container,
                    o = e.options;
                  if (e.links && !(e.links.length <= 0)) {
                    t.save();
                    var a,
                      s = e.links.filter(function (t) {
                        return (
                          o.links &&
                          n.getLinkFrequency(e, t.destination) <=
                            o.links.frequency
                        );
                      }),
                      u = (0, f.Z)(s);
                    try {
                      for (u.s(); !(a = u.n()).done; ) {
                        var c = a.value;
                        this.drawTriangles(r, o, e, c, s),
                          c.opacity > 0 &&
                            (null !== (i = e.retina.linksWidth) && void 0 !== i
                              ? i
                              : 0) > 0 &&
                            this.drawLinkLine(e, c);
                      }
                    } catch (l) {
                      u.e(l);
                    } finally {
                      u.f();
                    }
                    t.restore();
                  }
                },
              },
              {
                key: "init",
                value: function () {
                  (this._freqs.links = new Map()),
                    (this._freqs.triangles = new Map());
                },
              },
              {
                key: "particleCreated",
                value: function (t) {
                  if (((t.links = []), t.options.links)) {
                    var e = this.container.retina.pixelRatio;
                    (t.retina.linksDistance = t.options.links.distance * e),
                      (t.retina.linksWidth = t.options.links.width * e);
                  }
                },
              },
              {
                key: "particleDestroyed",
                value: function (t) {
                  t.links = [];
                },
              },
              {
                key: "drawLinkLine",
                value: function (t, e) {
                  var i = this.container,
                    n = i.actualOptions,
                    r = e.destination,
                    o = t.getPosition(),
                    a = r.getPosition(),
                    u = e.opacity;
                  i.canvas.draw(function (e) {
                    var c, l, h;
                    if (t.options.links) {
                      var d,
                        v =
                          null === (c = t.options.twinkle) || void 0 === c
                            ? void 0
                            : c.lines;
                      if (null === v || void 0 === v ? void 0 : v.enable) {
                        var p = v.frequency,
                          f = (0, s.tX)(v.color);
                        (0, s.sZ)() < p &&
                          f &&
                          ((d = f), (u = (0, s.Gu)(v.opacity)));
                      }
                      if (!d) {
                        var y = t.options.links,
                          g =
                            void 0 !==
                            (null === y || void 0 === y ? void 0 : y.id)
                              ? i.particles.linksColors.get(y.id)
                              : i.particles.linksColor;
                        d = (0, s.BE)(t, r, g);
                      }
                      if (d) {
                        var w =
                            null !== (l = t.retina.linksWidth) && void 0 !== l
                              ? l
                              : 0,
                          m =
                            null !== (h = t.retina.linksDistance) &&
                            void 0 !== h
                              ? h
                              : 0;
                        !(function (t, e, i, n, r, o, a, u, c, l, h, d) {
                          var v = !1;
                          if ((0, s.Sp)(i, n) <= r)
                            (0, s.pS)(t, i, n), (v = !0);
                          else if (a) {
                            var p,
                              f,
                              y = { x: n.x - o.width, y: n.y },
                              g = (0, s.oW)(i, y);
                            if (g.distance <= r) {
                              var w = i.y - (g.dy / g.dx) * i.x;
                              (p = { x: 0, y: w }), (f = { x: o.width, y: w });
                            } else {
                              var m = { x: n.x, y: n.y - o.height },
                                b = (0, s.oW)(i, m);
                              if (b.distance <= r) {
                                var S =
                                  -(i.y - (b.dy / b.dx) * i.x) / (b.dy / b.dx);
                                (p = { x: S, y: 0 }),
                                  (f = { x: S, y: o.height });
                              } else {
                                var _ = { x: n.x - o.width, y: n.y - o.height },
                                  k = (0, s.oW)(i, _);
                                if (k.distance <= r) {
                                  var x = i.y - (k.dy / k.dx) * i.x;
                                  f = {
                                    x:
                                      (p = { x: -x / (k.dy / k.dx), y: x }).x +
                                      o.width,
                                    y: p.y + o.height,
                                  };
                                }
                              }
                            }
                            p &&
                              f &&
                              ((0, s.pS)(t, i, p),
                              (0, s.pS)(t, n, f),
                              (v = !0));
                          }
                          if (v) {
                            if (
                              ((t.lineWidth = e),
                              u && (t.globalCompositeOperation = c),
                              (t.strokeStyle = (0, s.iz)(l, h)),
                              d.enable)
                            ) {
                              var P = (0, s.tX)(d.color);
                              P &&
                                ((t.shadowBlur = d.blur),
                                (t.shadowColor = (0, s.iz)(P)));
                            }
                            t.stroke();
                          }
                        })(
                          e,
                          w,
                          o,
                          a,
                          m,
                          i.canvas.size,
                          t.options.links.warp,
                          n.backgroundMask.enable,
                          n.backgroundMask.composite,
                          d,
                          u,
                          t.options.links.shadow
                        );
                      }
                    }
                  });
                },
              },
              {
                key: "drawLinkTriangle",
                value: function (t, e, i) {
                  var n;
                  if (t.options.links) {
                    var r = this.container,
                      o = r.actualOptions,
                      a = e.destination,
                      u = i.destination,
                      c = t.options.links.triangles,
                      l =
                        null !== (n = c.opacity) && void 0 !== n
                          ? n
                          : (e.opacity + i.opacity) / 2;
                    l <= 0 ||
                      r.canvas.draw(function (e) {
                        var i,
                          n = t.getPosition(),
                          h = a.getPosition(),
                          d = u.getPosition(),
                          v =
                            null !== (i = t.retina.linksDistance) &&
                            void 0 !== i
                              ? i
                              : 0;
                        if (
                          !(
                            (0, s.Sp)(n, h) > v ||
                            (0, s.Sp)(d, h) > v ||
                            (0, s.Sp)(d, n) > v
                          )
                        ) {
                          var p = (0, s.tX)(c.color);
                          if (!p) {
                            var f = t.options.links,
                              y =
                                void 0 !==
                                (null === f || void 0 === f ? void 0 : f.id)
                                  ? r.particles.linksColors.get(f.id)
                                  : r.particles.linksColor;
                            p = (0, s.BE)(t, a, y);
                          }
                          p &&
                            (function (t, e, i, n, r, o, a, u) {
                              (0, s.Wd)(t, e, i, n),
                                r && (t.globalCompositeOperation = o),
                                (t.fillStyle = (0, s.iz)(a, u)),
                                t.fill();
                            })(
                              e,
                              n,
                              h,
                              d,
                              o.backgroundMask.enable,
                              o.backgroundMask.composite,
                              p,
                              l
                            );
                        }
                      });
                  }
                },
              },
              {
                key: "drawTriangles",
                value: function (t, e, i, n, r) {
                  var o,
                    a,
                    s,
                    u = this,
                    c = n.destination;
                  if (
                    (null === (o = e.links) || void 0 === o
                      ? void 0
                      : o.triangles.enable) &&
                    (null === (a = c.options.links) || void 0 === a
                      ? void 0
                      : a.triangles.enable)
                  ) {
                    var l =
                      null === (s = c.links) || void 0 === s
                        ? void 0
                        : s.filter(function (t) {
                            var e = u.getLinkFrequency(c, t.destination);
                            return (
                              c.options.links &&
                              e <= c.options.links.frequency &&
                              r.findIndex(function (e) {
                                return e.destination === t.destination;
                              }) >= 0
                            );
                          });
                    if (null === l || void 0 === l ? void 0 : l.length) {
                      var h,
                        d = (0, f.Z)(l);
                      try {
                        for (d.s(); !(h = d.n()).done; ) {
                          var v = h.value,
                            p = v.destination;
                          this.getTriangleFrequency(i, c, p) >
                            e.links.triangles.frequency ||
                            this.drawLinkTriangle(i, n, v);
                        }
                      } catch (y) {
                        d.e(y);
                      } finally {
                        d.f();
                      }
                    }
                  }
                },
              },
              {
                key: "getLinkFrequency",
                value: function (t, e) {
                  return gi([t, e], this._freqs.links);
                },
              },
              {
                key: "getTriangleFrequency",
                value: function (t, e, i) {
                  return gi([t, e, i], this._freqs.triangles);
                },
              },
            ]),
            t
          );
        })(),
        mi = (function () {
          function t() {
            (0, o.Z)(this, t), (this.id = "links");
          }
          return (
            (0, a.Z)(t, [
              {
                key: "getPlugin",
                value: function (t) {
                  return new wi(t);
                },
              },
              { key: "loadOptions", value: function () {} },
              {
                key: "needsPlugin",
                value: function () {
                  return !0;
                },
              },
            ]),
            t
          );
        })();
      function bi(t) {
        return Si.apply(this, arguments);
      }
      function Si() {
        return (Si = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (i = new mi()), (t.next = 3), e.addPlugin(i);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _i(t) {
        return ki.apply(this, arguments);
      }
      function ki() {
        return (ki = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), fi(e);
                  case 2:
                    return (t.next = 4), bi(e);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var xi = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "draw",
                value: function (t, e, i) {
                  var n = this.getCenter(e, i),
                    r = this.getSidesData(e, i),
                    o = r.count.numerator * r.count.denominator,
                    a = r.count.numerator / r.count.denominator,
                    s = (180 * (a - 2)) / a,
                    u = Math.PI - (Math.PI * s) / 180;
                  if (t) {
                    t.beginPath(), t.translate(n.x, n.y), t.moveTo(0, 0);
                    for (var c = 0; c < o; c++)
                      t.lineTo(r.length, 0),
                        t.translate(r.length, 0),
                        t.rotate(u);
                  }
                },
              },
              {
                key: "getSidesCount",
                value: function (t) {
                  var e,
                    i,
                    n = t.shapeData;
                  return null !==
                    (i =
                      null !==
                        (e = null === n || void 0 === n ? void 0 : n.sides) &&
                      void 0 !== e
                        ? e
                        : null === n || void 0 === n
                        ? void 0
                        : n.nb_sides) && void 0 !== i
                    ? i
                    : 5;
                },
              },
            ]),
            t
          );
        })(),
        Pi = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            return (0, o.Z)(this, i), e.apply(this, arguments);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "getCenter",
                value: function (t, e) {
                  return {
                    x: -e / (this.getSidesCount(t) / 3.5),
                    y: -e / 0.76,
                  };
                },
              },
              {
                key: "getSidesData",
                value: function (t, e) {
                  var i,
                    n,
                    r = t.shapeData,
                    o =
                      null !==
                        (n =
                          null !==
                            (i =
                              null === r || void 0 === r ? void 0 : r.sides) &&
                          void 0 !== i
                            ? i
                            : null === r || void 0 === r
                            ? void 0
                            : r.nb_sides) && void 0 !== n
                        ? n
                        : 5;
                  return {
                    count: { denominator: 1, numerator: o },
                    length: (2.66 * e) / (o / 3),
                  };
                },
              },
            ]),
            i
          );
        })(xi),
        Zi = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            return (0, o.Z)(this, i), e.apply(this, arguments);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "getCenter",
                value: function (t, e) {
                  return { x: -e, y: e / 1.66 };
                },
              },
              {
                key: "getSidesCount",
                value: function () {
                  return 3;
                },
              },
              {
                key: "getSidesData",
                value: function (t, e) {
                  return {
                    count: { denominator: 2, numerator: 3 },
                    length: 2 * e,
                  };
                },
              },
            ]),
            i
          );
        })(xi);
      function Ci(t) {
        return Ai.apply(this, arguments);
      }
      function Ai() {
        return (Ai = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.addShape("polygon", new Pi());
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Gi(t) {
        return Oi.apply(this, arguments);
      }
      function Oi() {
        return (Oi = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.addShape("triangle", new Zi());
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Vi(t) {
        return Ei.apply(this, arguments);
      }
      function Ei() {
        return (Ei = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Ci(e);
                  case 2:
                    return (t.next = 4), Gi(e);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var zi = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            { key: "init", value: function () {} },
            {
              key: "isEnabled",
              value: function (t) {
                var e, i, n, r;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  t.size.enable &&
                  ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <=
                    0 ||
                    ((null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) >
                      0 &&
                      (null !== (n = t.size.loops) && void 0 !== n ? n : 0) <
                        (null !== (r = t.size.maxLoops) && void 0 !== r
                          ? r
                          : 0)))
                );
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i,
                      n,
                      r,
                      o,
                      a,
                      u =
                        (null !== (i = t.size.velocity) && void 0 !== i
                          ? i
                          : 0) * e.factor,
                      c = t.size.min,
                      l = t.size.max,
                      h = null !== (n = t.size.decay) && void 0 !== n ? n : 1;
                    if (
                      !(
                        t.destroyed ||
                        !t.size.enable ||
                        ((null !== (r = t.size.maxLoops) && void 0 !== r
                          ? r
                          : 0) > 0 &&
                          (null !== (o = t.size.loops) && void 0 !== o
                            ? o
                            : 0) >
                            (null !== (a = t.size.maxLoops) && void 0 !== a
                              ? a
                              : 0))
                      )
                    ) {
                      switch (t.size.status) {
                        case 0:
                          t.size.value >= l
                            ? ((t.size.status = 1),
                              t.size.loops || (t.size.loops = 0),
                              t.size.loops++)
                            : (t.size.value += u);
                          break;
                        case 1:
                          t.size.value <= c
                            ? ((t.size.status = 0),
                              t.size.loops || (t.size.loops = 0),
                              t.size.loops++)
                            : (t.size.value -= u);
                      }
                      t.size.velocity && 1 !== h && (t.size.velocity *= h),
                        (function (t, e, i, n) {
                          switch (t.options.size.animation.destroy) {
                            case "max":
                              e >= n && t.destroy();
                              break;
                            case "min":
                              e <= i && t.destroy();
                          }
                        })(t, t.size.value, c, l),
                        t.destroyed ||
                          (t.size.value = (0, s.uZ)(t.size.value, c, l));
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function Ti(t) {
        return Ri.apply(this, arguments);
      }
      function Ri() {
        return (Ri = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("size", function () {
                        return new zi();
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Mi = Math.sqrt(2),
        Li = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "draw",
                value: function (t, e, i) {
                  t.rect(-i / Mi, -i / Mi, (2 * i) / Mi, (2 * i) / Mi);
                },
              },
              {
                key: "getSidesCount",
                value: function () {
                  return 4;
                },
              },
            ]),
            t
          );
        })();
      function Ii(t) {
        return Hi.apply(this, arguments);
      }
      function Hi() {
        return (Hi = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i;
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (i = new Li()), (t.next = 3), e.addShape("edge", i);
                  case 3:
                    return (t.next = 5), e.addShape("square", i);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Di = (function () {
        function t() {
          (0, o.Z)(this, t);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "draw",
              value: function (t, e, i) {
                var n,
                  r = e.shapeData,
                  o = this.getSidesCount(e),
                  a =
                    null !==
                      (n = null === r || void 0 === r ? void 0 : r.inset) &&
                    void 0 !== n
                      ? n
                      : 2;
                t.moveTo(0, 0 - i);
                for (var s = 0; s < o; s++)
                  t.rotate(Math.PI / o),
                    t.lineTo(0, 0 - i * a),
                    t.rotate(Math.PI / o),
                    t.lineTo(0, 0 - i);
              },
            },
            {
              key: "getSidesCount",
              value: function (t) {
                var e,
                  i,
                  n = t.shapeData;
                return null !==
                  (i =
                    null !==
                      (e = null === n || void 0 === n ? void 0 : n.sides) &&
                    void 0 !== e
                      ? e
                      : null === n || void 0 === n
                      ? void 0
                      : n.nb_sides) && void 0 !== i
                  ? i
                  : 5;
              },
            },
          ]),
          t
        );
      })();
      function Bi(t) {
        return Ni.apply(this, arguments);
      }
      function Ni() {
        return (Ni = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.addShape("star", new Di());
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function ji(t, e, i, n, r) {
        var o,
          a,
          u = e;
        if (u && u.enable) {
          var c = (0, s.vd)(i.offset),
            l =
              (null !== (o = e.velocity) && void 0 !== o ? o : 0) * t.factor +
              3.6 * c,
            h = null !== (a = e.decay) && void 0 !== a ? a : 1;
          r && 0 !== u.status
            ? ((u.value -= l),
              u.value < 0 && ((u.status = 0), (u.value += u.value)))
            : ((u.value += l),
              r && u.value > n && ((u.status = 1), (u.value -= u.value % n))),
            u.velocity && 1 !== h && (u.velocity *= h),
            u.value > n && (u.value %= n);
        }
      }
      var Ui = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e,
                  i,
                  n = this.container;
                (t.stroke = (0, s.wA)(
                  t.options.stroke,
                  t.id,
                  t.options.reduceDuplicates
                )),
                  (t.strokeWidth = t.stroke.width * n.retina.pixelRatio);
                var r =
                  null !== (e = (0, s.lN)(t.stroke.color)) && void 0 !== e
                    ? e
                    : t.getFillColor();
                r &&
                  (t.strokeColor = (0, s.bS)(
                    r,
                    null === (i = t.stroke.color) || void 0 === i
                      ? void 0
                      : i.animation,
                    n.retina.reduceFactor
                  ));
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i,
                  n,
                  r,
                  o =
                    null === (e = t.stroke) || void 0 === e ? void 0 : e.color;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  !!o &&
                  ((void 0 !==
                    (null === (i = t.strokeColor) || void 0 === i
                      ? void 0
                      : i.h.value) &&
                    o.animation.h.enable) ||
                    (void 0 !==
                      (null === (n = t.strokeColor) || void 0 === n
                        ? void 0
                        : n.s.value) &&
                      o.animation.s.enable) ||
                    (void 0 !==
                      (null === (r = t.strokeColor) || void 0 === r
                        ? void 0
                        : r.l.value) &&
                      o.animation.l.enable))
                );
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i, n, r, o, a, s, u, c, l, h;
                    if (
                      null === (i = t.stroke) || void 0 === i ? void 0 : i.color
                    ) {
                      var d = t.stroke.color.animation,
                        v =
                          null !==
                            (r =
                              null === (n = t.strokeColor) || void 0 === n
                                ? void 0
                                : n.h) && void 0 !== r
                            ? r
                            : null === (o = t.color) || void 0 === o
                            ? void 0
                            : o.h;
                      v && ji(e, v, d.h, 360, !1);
                      var p =
                        null !==
                          (s =
                            null === (a = t.strokeColor) || void 0 === a
                              ? void 0
                              : a.s) && void 0 !== s
                          ? s
                          : null === (u = t.color) || void 0 === u
                          ? void 0
                          : u.s;
                      p && ji(e, p, d.s, 100, !0);
                      var f =
                        null !==
                          (l =
                            null === (c = t.strokeColor) || void 0 === c
                              ? void 0
                              : c.l) && void 0 !== l
                          ? l
                          : null === (h = t.color) || void 0 === h
                          ? void 0
                          : h.l;
                      f && ji(e, f, d.l, 100, !0);
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function Fi(t) {
        return qi.apply(this, arguments);
      }
      function qi() {
        return (qi = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("strokeColor", function (t) {
                        return new Ui(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Wi = ["text", "character", "char"],
        Qi = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "draw",
                value: function (t, e, i, n) {
                  var r,
                    o,
                    a,
                    u = e.shapeData;
                  if (void 0 !== u) {
                    var c = u.value;
                    if (void 0 !== c) {
                      var l = e;
                      void 0 === l.text &&
                        (l.text = (0, s.wA)(c, e.randomIndexData));
                      var h = l.text,
                        d = null !== (r = u.style) && void 0 !== r ? r : "",
                        v = null !== (o = u.weight) && void 0 !== o ? o : "400",
                        p = 2 * Math.round(i),
                        f =
                          null !== (a = u.font) && void 0 !== a ? a : "Verdana",
                        y = e.fill,
                        g = (h.length * i) / 2;
                      t.font = ""
                        .concat(d, " ")
                        .concat(v, " ")
                        .concat(p, 'px "')
                        .concat(f, '"');
                      var w = { x: -g, y: i / 2 };
                      (t.globalAlpha = n),
                        y ? t.fillText(h, w.x, w.y) : t.strokeText(h, w.x, w.y),
                        (t.globalAlpha = 1);
                    }
                  }
                },
              },
              {
                key: "getSidesCount",
                value: function () {
                  return 12;
                },
              },
              {
                key: "init",
                value: (function () {
                  var t = (0, r.Z)(
                    (0, n.Z)().mark(function t(e) {
                      var i, r, o;
                      return (0, n.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((i = e.actualOptions),
                                !Wi.find(function (t) {
                                  return (0, s.dB)(t, i.particles.shape.type);
                                }))
                              ) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (r = Wi.map(function (t) {
                                  return i.particles.shape.options[t];
                                }).find(function (t) {
                                  return !!t;
                                })),
                                (o = []),
                                (0, s.KH)(r, function (t) {
                                  o.push((0, s.mx)(t.font, t.weight));
                                }),
                                (t.next = 6),
                                Promise.all(o)
                              );
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })();
      function Ki(t) {
        return Xi.apply(this, arguments);
      }
      function Xi() {
        return (Xi = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            var i, r, o, a;
            return (0, n.Z)().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (i = new Qi()), (r = (0, f.Z)(Wi)), (t.prev = 2), r.s();
                    case 4:
                      if ((o = r.n()).done) {
                        t.next = 10;
                        break;
                      }
                      return (a = o.value), (t.next = 8), e.addShape(a, i);
                    case 8:
                      t.next = 4;
                      break;
                    case 10:
                      t.next = 15;
                      break;
                    case 12:
                      (t.prev = 12), (t.t0 = t.catch(2)), r.e(t.t0);
                    case 15:
                      return (t.prev = 15), r.f(), t.finish(15);
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[2, 12, 15, 18]]
            );
          })
        )).apply(this, arguments);
      }
      function Yi(t) {
        return Ji.apply(this, arguments);
      }
      function Ji() {
        return (Ji = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), bt(e);
                  case 2:
                    return (t.next = 4), $e(e);
                  case 4:
                    return (t.next = 6), Vt(e);
                  case 6:
                    return (t.next = 8), Rt(e);
                  case 8:
                    return (t.next = 10), Nt(e);
                  case 10:
                    return (t.next = 12), Kt(e);
                  case 12:
                    return (t.next = 14), ee(e);
                  case 14:
                    return (t.next = 16), re(e);
                  case 16:
                    return (t.next = 18), ue(e);
                  case 18:
                    return (t.next = 20), de(e);
                  case 20:
                    return (t.next = 22), ge(e);
                  case 22:
                    return (t.next = 24), Se(e);
                  case 24:
                    return (t.next = 26), ii(e);
                  case 26:
                    return (t.next = 28), si(e);
                  case 28:
                    return (t.next = 30), _i(e);
                  case 30:
                    return (t.next = 32), kt(e);
                  case 32:
                    return (t.next = 34), Oe(e);
                  case 34:
                    return (t.next = 36), He(e);
                  case 36:
                    return (t.next = 38), Vi(e);
                  case 38:
                    return (t.next = 40), Ii(e);
                  case 40:
                    return (t.next = 42), Bi(e);
                  case 42:
                    return (t.next = 44), Ki(e);
                  case 44:
                    return (t.next = 46), Me(e);
                  case 46:
                    return (t.next = 48), Ne(e);
                  case 48:
                    return (t.next = 50), Ti(e);
                  case 50:
                    return (t.next = 52), gt(e);
                  case 52:
                    return (t.next = 54), Ct(e);
                  case 54:
                    return (t.next = 56), Fi(e);
                  case 56:
                    return (t.next = 58), Xe(e);
                  case 58:
                    return (t.next = 60), vt(e);
                  case 60:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var $i = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.sync = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.speed && (this.speed = (0, s.Cs)(t.speed)),
                    void 0 !== t.decay && (this.decay = (0, s.Cs)(t.decay)),
                    void 0 !== t.sync && (this.sync = t.sync));
                },
              },
            ]),
            t
          );
        })(),
        tn = (function (t) {
          (0, l.Z)(i, t);
          var e = (0, h.Z)(i);
          function i() {
            var t;
            return (
              (0, o.Z)(this, i),
              ((t = e.call(this)).animation = new $i()),
              (t.direction = "clockwise"),
              (t.enable = !1),
              (t.value = 0),
              t
            );
          }
          return (
            (0, a.Z)(i, [
              {
                key: "load",
                value: function (t) {
                  (0, u.Z)((0, c.Z)(i.prototype), "load", this).call(this, t),
                    t &&
                      (this.animation.load(t.animation),
                      void 0 !== t.direction && (this.direction = t.direction),
                      void 0 !== t.enable && (this.enable = t.enable));
                },
              },
            ]),
            i
          );
        })(s.SW);
      var en = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "getTransformValues",
              value: function (t) {
                var e,
                  i =
                    (null === (e = t.tilt) || void 0 === e
                      ? void 0
                      : e.enable) && t.tilt;
                return {
                  b: i ? Math.cos(i.value) * i.cosDirection : void 0,
                  c: i ? Math.sin(i.value) * i.sinDirection : void 0,
                };
              },
            },
            {
              key: "init",
              value: function (t) {
                var e,
                  i = t.options.tilt;
                if (i) {
                  t.tilt = {
                    enable: i.enable,
                    value: ((0, s.Gu)(i.value) * Math.PI) / 180,
                    sinDirection: (0, s.sZ)() >= 0.5 ? 1 : -1,
                    cosDirection: (0, s.sZ)() >= 0.5 ? 1 : -1,
                  };
                  var n = i.direction;
                  if ("random" === n)
                    n =
                      Math.floor(2 * (0, s.sZ)()) > 0
                        ? "counter-clockwise"
                        : "clockwise";
                  switch (n) {
                    case "counter-clockwise":
                    case "counterClockwise":
                      t.tilt.status = 1;
                      break;
                    case "clockwise":
                      t.tilt.status = 0;
                  }
                  var r =
                    null === (e = t.options.tilt) || void 0 === e
                      ? void 0
                      : e.animation;
                  (null === r || void 0 === r ? void 0 : r.enable) &&
                    ((t.tilt.decay = 1 - (0, s.Gu)(r.decay)),
                    (t.tilt.velocity =
                      ((0, s.Gu)(r.speed) / 360) *
                      this.container.retina.reduceFactor),
                    r.sync || (t.tilt.velocity *= (0, s.sZ)()));
                }
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e,
                  i =
                    null === (e = t.options.tilt) || void 0 === e
                      ? void 0
                      : e.animation;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  !!(null === i || void 0 === i ? void 0 : i.enable)
                );
              },
            },
            {
              key: "loadOptions",
              value: function (t) {
                t.tilt || (t.tilt = new tn());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.tilt.load(null === a || void 0 === a ? void 0 : a.tilt);
                }
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i, n;
                    if (t.tilt && t.options.tilt) {
                      var r = t.options.tilt.animation,
                        o =
                          (null !== (i = t.tilt.velocity) && void 0 !== i
                            ? i
                            : 0) * e.factor,
                        a = 2 * Math.PI,
                        s = null !== (n = t.tilt.decay) && void 0 !== n ? n : 1;
                      r.enable &&
                        (0 === t.tilt.status
                          ? ((t.tilt.value += o),
                            t.tilt.value > a && (t.tilt.value -= a))
                          : ((t.tilt.value -= o),
                            t.tilt.value < 0 && (t.tilt.value += a)),
                        t.tilt.velocity && 1 !== s && (t.tilt.velocity *= s));
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function nn(t) {
        return rn.apply(this, arguments);
      }
      function rn() {
        return (rn = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("tilt", function (t) {
                        return new en(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var on = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.enable = !1),
              (this.frequency = 0.05),
              (this.opacity = 1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.color &&
                      (this.color = s.Oz.create(this.color, t.color)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.frequency && (this.frequency = t.frequency),
                    void 0 !== t.opacity &&
                      (this.opacity = (0, s.Cs)(t.opacity)));
                },
              },
            ]),
            t
          );
        })(),
        an = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.lines = new on()),
              (this.particles = new on());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (this.lines.load(t.lines),
                    this.particles.load(t.particles));
                },
              },
            ]),
            t
          );
        })(),
        sn = (function () {
          function t() {
            (0, o.Z)(this, t);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "getColorStyles",
                value: function (t, e, i, n) {
                  var r = t.options.twinkle;
                  if (!r) return {};
                  var o = r.particles,
                    a = o.enable && (0, s.sZ)() < o.frequency,
                    u = t.options.zIndex,
                    c = Math.pow(1 - t.zIndexFactor, u.opacityRate),
                    l = a ? (0, s.Gu)(o.opacity) * c : n,
                    h = (0, s.lN)(o.color),
                    d = h ? (0, s.vz)(h, l) : void 0,
                    v = {},
                    p = a && d;
                  return (
                    (v.fill = p ? d : void 0), (v.stroke = p ? d : void 0), v
                  );
                },
              },
              { key: "init", value: function () {} },
              {
                key: "isEnabled",
                value: function (t) {
                  var e = t.options.twinkle;
                  return !!e && e.particles.enable;
                },
              },
              {
                key: "loadOptions",
                value: function (t) {
                  t.twinkle || (t.twinkle = new an());
                  for (
                    var e = arguments.length,
                      i = new Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  for (var r = 0, o = i; r < o.length; r++) {
                    var a = o[r];
                    t.twinkle.load(
                      null === a || void 0 === a ? void 0 : a.twinkle
                    );
                  }
                },
              },
              { key: "update", value: function () {} },
            ]),
            t
          );
        })();
      function un(t) {
        return cn.apply(this, arguments);
      }
      function cn() {
        return (cn = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("twinkle", function () {
                        return new sn();
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ln = (function () {
          function t() {
            (0, o.Z)(this, t), (this.angle = 50), (this.move = 10);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  t &&
                    (void 0 !== t.angle && (this.angle = (0, s.Cs)(t.angle)),
                    void 0 !== t.move && (this.move = (0, s.Cs)(t.move)));
                },
              },
            ]),
            t
          );
        })(),
        hn = (function () {
          function t() {
            (0, o.Z)(this, t),
              (this.distance = 5),
              (this.enable = !1),
              (this.speed = new ln());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "load",
                value: function (t) {
                  if (
                    t &&
                    (void 0 !== t.distance &&
                      (this.distance = (0, s.Cs)(t.distance)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    void 0 !== t.speed)
                  )
                    if ("number" === typeof t.speed)
                      this.speed.load({ angle: t.speed });
                    else {
                      var e = t.speed;
                      void 0 !== e.min
                        ? this.speed.load({ angle: e })
                        : this.speed.load(t.speed);
                    }
                },
              },
            ]),
            t
          );
        })();
      var dn = (function () {
        function t(e) {
          (0, o.Z)(this, t), (this.container = e);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "init",
              value: function (t) {
                var e,
                  i = t.options.wobble;
                (null === i || void 0 === i ? void 0 : i.enable)
                  ? (t.wobble = {
                      angle: (0, s.sZ)() * Math.PI * 2,
                      angleSpeed: (0, s.Gu)(i.speed.angle) / 360,
                      moveSpeed: (0, s.Gu)(i.speed.move) / 10,
                    })
                  : (t.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
                  (t.retina.wobbleDistance =
                    (0, s.Gu)(
                      null !==
                        (e =
                          null === i || void 0 === i ? void 0 : i.distance) &&
                        void 0 !== e
                        ? e
                        : 0
                    ) * this.container.retina.pixelRatio);
              },
            },
            {
              key: "isEnabled",
              value: function (t) {
                var e;
                return (
                  !t.destroyed &&
                  !t.spawning &&
                  !!(null === (e = t.options.wobble) || void 0 === e
                    ? void 0
                    : e.enable)
                );
              },
            },
            {
              key: "loadOptions",
              value: function (t) {
                t.wobble || (t.wobble = new hn());
                for (
                  var e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t.wobble.load(null === a || void 0 === a ? void 0 : a.wobble);
                }
              },
            },
            {
              key: "update",
              value: function (t, e) {
                this.isEnabled(t) &&
                  (function (t, e) {
                    var i,
                      n = t.options.wobble;
                    if (
                      (null === n || void 0 === n ? void 0 : n.enable) &&
                      t.wobble
                    ) {
                      var r = t.wobble.angleSpeed * e.factor,
                        o =
                          (t.wobble.moveSpeed *
                            e.factor *
                            ((null !== (i = t.retina.wobbleDistance) &&
                            void 0 !== i
                              ? i
                              : 0) *
                              e.factor)) /
                          (1e3 / 60),
                        a = 2 * Math.PI;
                      (t.wobble.angle += r),
                        t.wobble.angle > a && (t.wobble.angle -= a),
                        (t.position.x += o * Math.cos(t.wobble.angle)),
                        (t.position.y +=
                          o * Math.abs(Math.sin(t.wobble.angle)));
                    }
                  })(t, e);
              },
            },
          ]),
          t
        );
      })();
      function vn(t) {
        return pn.apply(this, arguments);
      }
      function pn() {
        return (pn = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      e.addParticleUpdater("wobble", function (t) {
                        return new dn(t);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function fn(t) {
        return yn.apply(this, arguments);
      }
      function yn() {
        return (yn = (0, r.Z)(
          (0, n.Z)().mark(function t(e) {
            return (0, n.Z)().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Yi(e);
                  case 2:
                    return (t.next = 4), C(e);
                  case 4:
                    return (t.next = 6), ht(e);
                  case 6:
                    return (t.next = 8), nn(e);
                  case 8:
                    return (t.next = 10), un(e);
                  case 10:
                    return (t.next = 12), vn(e);
                  case 12:
                    return (t.next = 14), F(e);
                  case 14:
                    return (t.next = 16), m(e);
                  case 16:
                    return (t.next = 18), B(e);
                  case 18:
                    return (t.next = 20), at(e);
                  case 20:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    5861: function (t, e, i) {
      function n(t, e, i, n, r, o, a) {
        try {
          var s = t[o](a),
            u = s.value;
        } catch (c) {
          return void i(c);
        }
        s.done ? e(u) : Promise.resolve(u).then(n, r);
      }
      function r(t) {
        return function () {
          var e = this,
            i = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, i);
            function s(t) {
              n(a, r, o, s, u, "next", t);
            }
            function u(t) {
              n(a, r, o, s, u, "throw", t);
            }
            s(void 0);
          });
        };
      }
      i.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    7762: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(181);
      function r(t, e) {
        var i =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!i) {
          if (
            Array.isArray(t) ||
            (i = (0, n.Z)(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            i && (t = i);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          u = !1;
        return {
          s: function () {
            i = i.call(t);
          },
          n: function () {
            var t = i.next();
            return (s = t.done), t;
          },
          e: function (t) {
            (u = !0), (a = t);
          },
          f: function () {
            try {
              s || null == i.return || i.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
    },
    1752: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(1120);
      function r(t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) &&
          null !== (t = (0, n.Z)(t));

        );
        return t;
      }
      function o() {
        return (
          (o =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, i) {
                  var n = r(t, e);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : i)
                      : o.value;
                  }
                }),
          o.apply(this, arguments)
        );
      }
    },
    4165: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1002);
      function r() {
        r = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          i = e.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function c(t, e, i) {
          return (
            Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, i) {
            return (t[e] = i);
          };
        }
        function l(t, e, i, n) {
          var r = e && e.prototype instanceof v ? e : v,
            o = Object.create(r.prototype),
            a = new P(n || []);
          return (
            (o._invoke = (function (t, e, i) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return C();
                }
                for (i.method = r, i.arg = o; ; ) {
                  var a = i.delegate;
                  if (a) {
                    var s = _(a, i);
                    if (s) {
                      if (s === d) continue;
                      return s;
                    }
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;
                  else if ("throw" === i.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), i.arg);
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  n = "executing";
                  var u = h(t, e, i);
                  if ("normal" === u.type) {
                    if (
                      ((n = i.done ? "completed" : "suspendedYield"),
                      u.arg === d)
                    )
                      continue;
                    return { value: u.arg, done: i.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (i.method = "throw"), (i.arg = u.arg));
                }
              };
            })(t, i, a)),
            o
          );
        }
        function h(t, e, i) {
          try {
            return { type: "normal", arg: t.call(e, i) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = l;
        var d = {};
        function v() {}
        function p() {}
        function f() {}
        var y = {};
        c(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          w = g && g(g(Z([])));
        w && w !== e && i.call(w, a) && (y = w);
        var m = (f.prototype = v.prototype = Object.create(y));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function r(o, a, s, u) {
            var c = h(t[o], t, a);
            if ("throw" !== c.type) {
              var l = c.arg,
                d = l.value;
              return d && "object" == (0, n.Z)(d) && i.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      r("next", t, s, u);
                    },
                    function (t) {
                      r("throw", t, s, u);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return r("throw", t, s, u);
                    }
                  );
            }
            u(c.arg);
          }
          var o;
          this._invoke = function (t, i) {
            function n() {
              return new e(function (e, n) {
                r(t, i, e, n);
              });
            }
            return (o = o ? o.then(n, n) : n());
          };
        }
        function _(t, e) {
          var i = t.iterator[e.method];
          if (void 0 === i) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                _(t, e),
                "throw" === e.method)
              )
                return d;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var n = h(i, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), d
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((e[t.resultName] = r.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                d)
              : r
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              d);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function Z(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                r = function e() {
                  for (; ++n < t.length; )
                    if (i.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = f),
          c(m, "constructor", f),
          c(f, "constructor", p),
          (p.displayName = c(f, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(S.prototype),
          c(S.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, i, n, r, o) {
            void 0 === o && (o = Promise);
            var a = new S(l(e, i, n, r), o);
            return t.isGeneratorFunction(i)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(m),
          c(m, u, "Generator"),
          c(m, a, function () {
            return this;
          }),
          c(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var i in t) e.push(i);
            return (
              e.reverse(),
              function i() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (i.value = n), (i.done = !1), i;
                }
                return (i.done = !0), i;
              }
            );
          }),
          (t.values = Z),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(i, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = i),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = i.call(o, "catchLoc"),
                    u = i.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var i = this.tryEntries[e];
                if (i.finallyLoc === t)
                  return this.complete(i.completion, i.afterLoc), x(i), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var i = this.tryEntries[e];
                if (i.tryLoc === t) {
                  var n = i.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    x(i);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, i) {
              return (
                (this.delegate = { iterator: Z(t), resultName: e, nextLoc: i }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=318.9c1b0cc9.chunk.js.map
