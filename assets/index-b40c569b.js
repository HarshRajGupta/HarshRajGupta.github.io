function rv(t, e) {
  for (var n = 0; n < e.length; n++) {
    const i = e[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s &&
            Object.defineProperty(
              t,
              r,
              s.get ? s : { enumerable: !0, get: () => i[r] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var Io =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function _s(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function sv(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function i() {
      if (this instanceof i) {
        var r = [null];
        r.push.apply(r, arguments);
        var s = Function.bind.apply(e, r);
        return new s();
      }
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (i) {
      var r = Object.getOwnPropertyDescriptor(t, i);
      Object.defineProperty(
        n,
        i,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            },
      );
    }),
    n
  );
}
var Ih = { exports: {} },
  ga = {},
  Rh = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cs = Symbol.for("react.element"),
  ov = Symbol.for("react.portal"),
  av = Symbol.for("react.fragment"),
  lv = Symbol.for("react.strict_mode"),
  uv = Symbol.for("react.profiler"),
  cv = Symbol.for("react.provider"),
  dv = Symbol.for("react.context"),
  fv = Symbol.for("react.forward_ref"),
  pv = Symbol.for("react.suspense"),
  hv = Symbol.for("react.memo"),
  mv = Symbol.for("react.lazy"),
  nf = Symbol.iterator;
function gv(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (nf && t[nf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Lh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Dh = Object.assign,
  $h = {};
function yr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = $h),
    (this.updater = n || Lh);
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
yr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function jh() {}
jh.prototype = yr.prototype;
function vc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = $h),
    (this.updater = n || Lh);
}
var wc = (vc.prototype = new jh());
wc.constructor = vc;
Dh(wc, yr.prototype);
wc.isPureReactComponent = !0;
var rf = Array.isArray,
  Fh = Object.prototype.hasOwnProperty,
  bc = { current: null },
  Nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bh(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Fh.call(e, i) && !Nh.hasOwnProperty(i) && (r[i] = e[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  if (t && t.defaultProps)
    for (i in ((a = t.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return {
    $$typeof: Cs,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: bc.current,
  };
}
function yv(t, e) {
  return {
    $$typeof: Cs,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function xc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Cs;
}
function vv(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var sf = /\/+/g;
function nl(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? vv("" + t.key)
    : e.toString(36);
}
function uo(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Cs:
          case ov:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + nl(o, 0) : i),
      rf(r)
        ? ((n = ""),
          t != null && (n = t.replace(sf, "$&/") + "/"),
          uo(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (xc(r) &&
            (r = yv(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(sf, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), rf(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = i + nl(s, a);
      o += uo(s, e, n, l, r);
    }
  else if (((l = gv(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = i + nl(s, a++)), (o += uo(s, e, n, l, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Ns(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    uo(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function wv(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var rt = { current: null },
  co = { transition: null },
  bv = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: co,
    ReactCurrentOwner: bc,
  };
ee.Children = {
  map: Ns,
  forEach: function (t, e, n) {
    Ns(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Ns(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ns(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!xc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
ee.Component = yr;
ee.Fragment = av;
ee.Profiler = uv;
ee.PureComponent = vc;
ee.StrictMode = lv;
ee.Suspense = pv;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv;
ee.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = Dh({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = bc.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Fh.call(e, l) &&
        !Nh.hasOwnProperty(l) &&
        (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  return { $$typeof: Cs, type: t.type, key: r, ref: s, props: i, _owner: o };
};
ee.createContext = function (t) {
  return (
    (t = {
      $$typeof: dv,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: cv, _context: t }),
    (t.Consumer = t)
  );
};
ee.createElement = Bh;
ee.createFactory = function (t) {
  var e = Bh.bind(null, t);
  return (e.type = t), e;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (t) {
  return { $$typeof: fv, render: t };
};
ee.isValidElement = xc;
ee.lazy = function (t) {
  return { $$typeof: mv, _payload: { _status: -1, _result: t }, _init: wv };
};
ee.memo = function (t, e) {
  return { $$typeof: hv, type: t, compare: e === void 0 ? null : e };
};
ee.startTransition = function (t) {
  var e = co.transition;
  co.transition = {};
  try {
    t();
  } finally {
    co.transition = e;
  }
};
ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function (t, e) {
  return rt.current.useCallback(t, e);
};
ee.useContext = function (t) {
  return rt.current.useContext(t);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (t) {
  return rt.current.useDeferredValue(t);
};
ee.useEffect = function (t, e) {
  return rt.current.useEffect(t, e);
};
ee.useId = function () {
  return rt.current.useId();
};
ee.useImperativeHandle = function (t, e, n) {
  return rt.current.useImperativeHandle(t, e, n);
};
ee.useInsertionEffect = function (t, e) {
  return rt.current.useInsertionEffect(t, e);
};
ee.useLayoutEffect = function (t, e) {
  return rt.current.useLayoutEffect(t, e);
};
ee.useMemo = function (t, e) {
  return rt.current.useMemo(t, e);
};
ee.useReducer = function (t, e, n) {
  return rt.current.useReducer(t, e, n);
};
ee.useRef = function (t) {
  return rt.current.useRef(t);
};
ee.useState = function (t) {
  return rt.current.useState(t);
};
ee.useSyncExternalStore = function (t, e, n) {
  return rt.current.useSyncExternalStore(t, e, n);
};
ee.useTransition = function () {
  return rt.current.useTransition();
};
ee.version = "18.2.0";
Rh.exports = ee;
var j = Rh.exports;
const de = _s(j),
  ou = rv({ __proto__: null, default: de }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xv = j,
  Sv = Symbol.for("react.element"),
  kv = Symbol.for("react.fragment"),
  _v = Object.prototype.hasOwnProperty,
  Cv = xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ev = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hh(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (i in e) _v.call(e, i) && !Ev.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps)
    for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return {
    $$typeof: Sv,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: Cv.current,
  };
}
ga.Fragment = kv;
ga.jsx = Hh;
ga.jsxs = Hh;
Ih.exports = ga;
var T = Ih.exports,
  au = {},
  Wh = { exports: {} },
  _t = {},
  Vh = { exports: {} },
  qh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(L, M) {
    var O = L.length;
    L.push(M);
    e: for (; 0 < O; ) {
      var B = (O - 1) >>> 1,
        H = L[B];
      if (0 < r(H, M)) (L[B] = M), (L[O] = H), (O = B);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function i(L) {
    if (L.length === 0) return null;
    var M = L[0],
      O = L.pop();
    if (O !== M) {
      L[0] = O;
      e: for (var B = 0, H = L.length, ie = H >>> 1; B < ie; ) {
        var z = 2 * (B + 1) - 1,
          Ce = L[z],
          $ = z + 1,
          G = L[$];
        if (0 > r(Ce, O))
          $ < H && 0 > r(G, Ce)
            ? ((L[B] = G), (L[$] = O), (B = $))
            : ((L[B] = Ce), (L[z] = O), (B = z));
        else if ($ < H && 0 > r(G, O)) (L[B] = G), (L[$] = O), (B = $);
        else break e;
      }
    }
    return M;
  }
  function r(L, M) {
    var O = L.sortIndex - M.sortIndex;
    return O !== 0 ? O : L.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    g = !1,
    m = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) i(u);
      else if (M.startTime <= L)
        i(u), (M.sortIndex = M.expirationTime), e(l, M);
      else break;
      M = n(u);
    }
  }
  function w(L) {
    if (((m = !1), v(L), !g))
      if (n(l) !== null) (g = !0), V(x);
      else {
        var M = n(u);
        M !== null && q(w, M.startTime - L);
      }
  }
  function x(L, M) {
    (g = !1), m && ((m = !1), y(P), (P = -1)), (p = !0);
    var O = f;
    try {
      for (
        v(M), d = n(l);
        d !== null && (!(d.expirationTime > M) || (L && !_()));

      ) {
        var B = d.callback;
        if (typeof B == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var H = B(d.expirationTime <= M);
          (M = t.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === n(l) && i(l),
            v(M);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var ie = !0;
      else {
        var z = n(u);
        z !== null && q(w, z.startTime - M), (ie = !1);
      }
      return ie;
    } finally {
      (d = null), (f = O), (p = !1);
    }
  }
  var k = !1,
    S = null,
    P = -1,
    E = 5,
    A = -1;
  function _() {
    return !(t.unstable_now() - A < E);
  }
  function C() {
    if (S !== null) {
      var L = t.unstable_now();
      A = L;
      var M = !0;
      try {
        M = S(!0, L);
      } finally {
        M ? I() : ((k = !1), (S = null));
      }
    } else k = !1;
  }
  var I;
  if (typeof h == "function")
    I = function () {
      h(C);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      F = R.port2;
    (R.port1.onmessage = C),
      (I = function () {
        F.postMessage(null);
      });
  } else
    I = function () {
      b(C, 0);
    };
  function V(L) {
    (S = L), k || ((k = !0), I());
  }
  function q(L, M) {
    P = b(function () {
      L(t.unstable_now());
    }, M);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      g || p || ((g = !0), V(x));
    }),
    (t.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (E = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = f;
      }
      var O = f;
      f = M;
      try {
        return L();
      } finally {
        f = O;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (L, M) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var O = f;
      f = L;
      try {
        return M();
      } finally {
        f = O;
      }
    }),
    (t.unstable_scheduleCallback = function (L, M, O) {
      var B = t.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? B + O : B))
          : (O = B),
        L)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = O + H),
        (L = {
          id: c++,
          callback: M,
          priorityLevel: L,
          startTime: O,
          expirationTime: H,
          sortIndex: -1,
        }),
        O > B
          ? ((L.sortIndex = O),
            e(u, L),
            n(l) === null &&
              L === n(u) &&
              (m ? (y(P), (P = -1)) : (m = !0), q(w, O - B)))
          : ((L.sortIndex = H), e(l, L), g || p || ((g = !0), V(x))),
        L
      );
    }),
    (t.unstable_shouldYield = _),
    (t.unstable_wrapCallback = function (L) {
      var M = f;
      return function () {
        var O = f;
        f = M;
        try {
          return L.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(qh);
Vh.exports = qh;
var Pv = Vh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh = j,
  kt = Pv;
function D(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xh = new Set(),
  es = {};
function vi(t, e) {
  Qi(t, e), Qi(t + "Capture", e);
}
function Qi(t, e) {
  for (es[t] = e, t = 0; t < e.length; t++) Xh.add(e[t]);
}
var vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  lu = Object.prototype.hasOwnProperty,
  Tv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  of = {},
  af = {};
function zv(t) {
  return lu.call(af, t)
    ? !0
    : lu.call(of, t)
    ? !1
    : Tv.test(t)
    ? (af[t] = !0)
    : ((of[t] = !0), !1);
}
function Av(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Mv(t, e, n, i) {
  if (e === null || typeof e > "u" || Av(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function st(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Xe[t] = new st(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Xe[e] = new st(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Xe[t] = new st(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Xe[t] = new st(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Xe[t] = new st(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Xe[t] = new st(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Xe[t] = new st(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Xe[t] = new st(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Xe[t] = new st(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Sc = /[\-:]([a-z])/g;
function kc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Sc, kc);
    Xe[e] = new st(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Sc, kc);
    Xe[e] = new st(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Sc, kc);
  Xe[e] = new st(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Xe[t] = new st(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new st(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Xe[t] = new st(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function _c(t, e, n, i) {
  var r = Xe.hasOwnProperty(e) ? Xe[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Mv(e, n, r, i) && (n = null),
    i || r === null
      ? zv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
      ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((e = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var _n = Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bs = Symbol.for("react.element"),
  zi = Symbol.for("react.portal"),
  Ai = Symbol.for("react.fragment"),
  Cc = Symbol.for("react.strict_mode"),
  uu = Symbol.for("react.profiler"),
  Gh = Symbol.for("react.provider"),
  Kh = Symbol.for("react.context"),
  Ec = Symbol.for("react.forward_ref"),
  cu = Symbol.for("react.suspense"),
  du = Symbol.for("react.suspense_list"),
  Pc = Symbol.for("react.memo"),
  zn = Symbol.for("react.lazy"),
  Yh = Symbol.for("react.offscreen"),
  lf = Symbol.iterator;
function Sr(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (lf && t[lf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var _e = Object.assign,
  il;
function Rr(t) {
  if (il === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      il = (e && e[1]) || "";
    }
  return (
    `
` +
    il +
    t
  );
}
var rl = !1;
function sl(t, e) {
  if (!t || rl) return "";
  rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          i = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && r[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (r[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || r[o] !== s[a])) {
                var l =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (rl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Rr(t) : "";
}
function Ov(t) {
  switch (t.tag) {
    case 5:
      return Rr(t.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = sl(t.type, !1)), t;
    case 11:
      return (t = sl(t.type.render, !1)), t;
    case 1:
      return (t = sl(t.type, !0)), t;
    default:
      return "";
  }
}
function fu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Ai:
      return "Fragment";
    case zi:
      return "Portal";
    case uu:
      return "Profiler";
    case Cc:
      return "StrictMode";
    case cu:
      return "Suspense";
    case du:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Kh:
        return (t.displayName || "Context") + ".Consumer";
      case Gh:
        return (t._context.displayName || "Context") + ".Provider";
      case Ec:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Pc:
        return (
          (e = t.displayName || null), e !== null ? e : fu(t.type) || "Memo"
        );
      case zn:
        (e = t._payload), (t = t._init);
        try {
          return fu(t(e));
        } catch {}
    }
  return null;
}
function Iv(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fu(e);
    case 8:
      return e === Cc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Xn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Qh(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Rv(t) {
  var e = Qh(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Hs(t) {
  t._valueTracker || (t._valueTracker = Rv(t));
}
function Zh(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = Qh(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Ro(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function pu(t, e) {
  var n = e.checked;
  return _e({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function uf(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = Xn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Jh(t, e) {
  (e = e.checked), e != null && _c(t, "checked", e, !1);
}
function hu(t, e) {
  Jh(t, e);
  var n = Xn(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? mu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && mu(t, e.type, Xn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function cf(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function mu(t, e, n) {
  (e !== "number" || Ro(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Lr = Array.isArray;
function Hi(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Xn(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function gu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(D(91));
  return _e({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function df(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(D(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Xn(n) };
}
function em(t, e) {
  var n = Xn(e.value),
    i = Xn(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function ff(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function tm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yu(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? tm(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Ws,
  nm = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Ws = Ws || document.createElement("div"),
          Ws.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ws.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function ts(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function (t) {
  Lv.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Fr[e] = Fr[t]);
  });
});
function im(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Fr.hasOwnProperty(t) && Fr[t])
    ? ("" + e).trim()
    : e + "px";
}
function rm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = im(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var Dv = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vu(t, e) {
  if (e) {
    if (Dv[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(D(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(D(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(D(62));
  }
}
function wu(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bu = null;
function Tc(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var xu = null,
  Wi = null,
  Vi = null;
function pf(t) {
  if ((t = Ts(t))) {
    if (typeof xu != "function") throw Error(D(280));
    var e = t.stateNode;
    e && ((e = xa(e)), xu(t.stateNode, t.type, e));
  }
}
function sm(t) {
  Wi ? (Vi ? Vi.push(t) : (Vi = [t])) : (Wi = t);
}
function om() {
  if (Wi) {
    var t = Wi,
      e = Vi;
    if (((Vi = Wi = null), pf(t), e)) for (t = 0; t < e.length; t++) pf(e[t]);
  }
}
function am(t, e) {
  return t(e);
}
function lm() {}
var ol = !1;
function um(t, e, n) {
  if (ol) return t(e, n);
  ol = !0;
  try {
    return am(t, e, n);
  } finally {
    (ol = !1), (Wi !== null || Vi !== null) && (lm(), om());
  }
}
function ns(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = xa(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(D(231, e, typeof n));
  return n;
}
var Su = !1;
if (vn)
  try {
    var kr = {};
    Object.defineProperty(kr, "passive", {
      get: function () {
        Su = !0;
      },
    }),
      window.addEventListener("test", kr, kr),
      window.removeEventListener("test", kr, kr);
  } catch {
    Su = !1;
  }
function $v(t, e, n, i, r, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Nr = !1,
  Lo = null,
  Do = !1,
  ku = null,
  jv = {
    onError: function (t) {
      (Nr = !0), (Lo = t);
    },
  };
function Fv(t, e, n, i, r, s, o, a, l) {
  (Nr = !1), (Lo = null), $v.apply(jv, arguments);
}
function Nv(t, e, n, i, r, s, o, a, l) {
  if ((Fv.apply(this, arguments), Nr)) {
    if (Nr) {
      var u = Lo;
      (Nr = !1), (Lo = null);
    } else throw Error(D(198));
    Do || ((Do = !0), (ku = u));
  }
}
function wi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function cm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function hf(t) {
  if (wi(t) !== t) throw Error(D(188));
}
function Bv(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = wi(t)), e === null)) throw Error(D(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return hf(r), t;
        if (s === i) return hf(r), e;
        s = s.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, a = r.child; a; ) {
        if (a === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (a === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (a === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(D(189));
      }
    }
    if (n.alternate !== i) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? t : e;
}
function dm(t) {
  return (t = Bv(t)), t !== null ? fm(t) : null;
}
function fm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = fm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var pm = kt.unstable_scheduleCallback,
  mf = kt.unstable_cancelCallback,
  Hv = kt.unstable_shouldYield,
  Wv = kt.unstable_requestPaint,
  Me = kt.unstable_now,
  Vv = kt.unstable_getCurrentPriorityLevel,
  zc = kt.unstable_ImmediatePriority,
  hm = kt.unstable_UserBlockingPriority,
  $o = kt.unstable_NormalPriority,
  qv = kt.unstable_LowPriority,
  mm = kt.unstable_IdlePriority,
  ya = null,
  nn = null;
function Uv(t) {
  if (nn && typeof nn.onCommitFiberRoot == "function")
    try {
      nn.onCommitFiberRoot(ya, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Bt = Math.clz32 ? Math.clz32 : Kv,
  Xv = Math.log,
  Gv = Math.LN2;
function Kv(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Xv(t) / Gv) | 0)) | 0;
}
var Vs = 64,
  qs = 4194304;
function Dr(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function jo(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? (i = Dr(a)) : ((s &= o), s !== 0 && (i = Dr(s)));
  } else (o = n & ~r), o !== 0 ? (i = Dr(o)) : s !== 0 && (i = Dr(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - Bt(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function Yv(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qv(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Bt(s),
      a = 1 << o,
      l = r[o];
    l === -1
      ? (!(a & n) || a & i) && (r[o] = Yv(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function _u(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function gm() {
  var t = Vs;
  return (Vs <<= 1), !(Vs & 4194240) && (Vs = 64), t;
}
function al(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Es(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Bt(e)),
    (t[e] = n);
}
function Zv(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - Bt(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Ac(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - Bt(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var ce = 0;
function ym(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var vm,
  Mc,
  wm,
  bm,
  xm,
  Cu = !1,
  Us = [],
  Fn = null,
  Nn = null,
  Bn = null,
  is = new Map(),
  rs = new Map(),
  Mn = [],
  Jv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function gf(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Fn = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      is.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rs.delete(e.pointerId);
  }
}
function _r(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = Ts(e)), e !== null && Mc(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function e1(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (Fn = _r(Fn, t, e, n, i, r)), !0;
    case "dragenter":
      return (Nn = _r(Nn, t, e, n, i, r)), !0;
    case "mouseover":
      return (Bn = _r(Bn, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return is.set(s, _r(is.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), rs.set(s, _r(rs.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function Sm(t) {
  var e = ni(t.target);
  if (e !== null) {
    var n = wi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = cm(n)), e !== null)) {
          (t.blockedOn = e),
            xm(t.priority, function () {
              wm(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function fo(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Eu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (bu = i), n.target.dispatchEvent(i), (bu = null);
    } else return (e = Ts(n)), e !== null && Mc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function yf(t, e, n) {
  fo(t) && n.delete(e);
}
function t1() {
  (Cu = !1),
    Fn !== null && fo(Fn) && (Fn = null),
    Nn !== null && fo(Nn) && (Nn = null),
    Bn !== null && fo(Bn) && (Bn = null),
    is.forEach(yf),
    rs.forEach(yf);
}
function Cr(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Cu ||
      ((Cu = !0),
      kt.unstable_scheduleCallback(kt.unstable_NormalPriority, t1)));
}
function ss(t) {
  function e(r) {
    return Cr(r, t);
  }
  if (0 < Us.length) {
    Cr(Us[0], t);
    for (var n = 1; n < Us.length; n++) {
      var i = Us[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    Fn !== null && Cr(Fn, t),
      Nn !== null && Cr(Nn, t),
      Bn !== null && Cr(Bn, t),
      is.forEach(e),
      rs.forEach(e),
      n = 0;
    n < Mn.length;
    n++
  )
    (i = Mn[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
    Sm(n), n.blockedOn === null && Mn.shift();
}
var qi = _n.ReactCurrentBatchConfig,
  Fo = !0;
function n1(t, e, n, i) {
  var r = ce,
    s = qi.transition;
  qi.transition = null;
  try {
    (ce = 1), Oc(t, e, n, i);
  } finally {
    (ce = r), (qi.transition = s);
  }
}
function i1(t, e, n, i) {
  var r = ce,
    s = qi.transition;
  qi.transition = null;
  try {
    (ce = 4), Oc(t, e, n, i);
  } finally {
    (ce = r), (qi.transition = s);
  }
}
function Oc(t, e, n, i) {
  if (Fo) {
    var r = Eu(t, e, n, i);
    if (r === null) yl(t, e, i, No, n), gf(t, i);
    else if (e1(r, t, e, n, i)) i.stopPropagation();
    else if ((gf(t, i), e & 4 && -1 < Jv.indexOf(t))) {
      for (; r !== null; ) {
        var s = Ts(r);
        if (
          (s !== null && vm(s),
          (s = Eu(t, e, n, i)),
          s === null && yl(t, e, i, No, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else yl(t, e, i, null, n);
  }
}
var No = null;
function Eu(t, e, n, i) {
  if (((No = null), (t = Tc(i)), (t = ni(t)), t !== null))
    if (((e = wi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = cm(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (No = t), null;
}
function km(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vv()) {
        case zc:
          return 1;
        case hm:
          return 4;
        case $o:
        case qv:
          return 16;
        case mm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null,
  Ic = null,
  po = null;
function _m() {
  if (po) return po;
  var t,
    e = Ic,
    n = e.length,
    i,
    r = "value" in Rn ? Rn.value : Rn.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (po = r.slice(t, 1 < i ? 1 - i : void 0));
}
function ho(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Xs() {
  return !0;
}
function vf() {
  return !1;
}
function Ct(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Xs
        : vf),
      (this.isPropagationStopped = vf),
      this
    );
  }
  return (
    _e(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xs));
      },
      persist: function () {},
      isPersistent: Xs,
    }),
    e
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rc = Ct(vr),
  Ps = _e({}, vr, { view: 0, detail: 0 }),
  r1 = Ct(Ps),
  ll,
  ul,
  Er,
  va = _e({}, Ps, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Er &&
            (Er && t.type === "mousemove"
              ? ((ll = t.screenX - Er.screenX), (ul = t.screenY - Er.screenY))
              : (ul = ll = 0),
            (Er = t)),
          ll);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : ul;
    },
  }),
  wf = Ct(va),
  s1 = _e({}, va, { dataTransfer: 0 }),
  o1 = Ct(s1),
  a1 = _e({}, Ps, { relatedTarget: 0 }),
  cl = Ct(a1),
  l1 = _e({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  u1 = Ct(l1),
  c1 = _e({}, vr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  d1 = Ct(c1),
  f1 = _e({}, vr, { data: 0 }),
  bf = Ct(f1),
  p1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  h1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  m1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function g1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = m1[t]) ? !!e[t] : !1;
}
function Lc() {
  return g1;
}
var y1 = _e({}, Ps, {
    key: function (t) {
      if (t.key) {
        var e = p1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ho(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? h1[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lc,
    charCode: function (t) {
      return t.type === "keypress" ? ho(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ho(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  v1 = Ct(y1),
  w1 = _e({}, va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xf = Ct(w1),
  b1 = _e({}, Ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lc,
  }),
  x1 = Ct(b1),
  S1 = _e({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k1 = Ct(S1),
  _1 = _e({}, va, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  C1 = Ct(_1),
  E1 = [9, 13, 27, 32],
  Dc = vn && "CompositionEvent" in window,
  Br = null;
vn && "documentMode" in document && (Br = document.documentMode);
var P1 = vn && "TextEvent" in window && !Br,
  Cm = vn && (!Dc || (Br && 8 < Br && 11 >= Br)),
  Sf = String.fromCharCode(32),
  kf = !1;
function Em(t, e) {
  switch (t) {
    case "keyup":
      return E1.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Pm(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Mi = !1;
function T1(t, e) {
  switch (t) {
    case "compositionend":
      return Pm(e);
    case "keypress":
      return e.which !== 32 ? null : ((kf = !0), Sf);
    case "textInput":
      return (t = e.data), t === Sf && kf ? null : t;
    default:
      return null;
  }
}
function z1(t, e) {
  if (Mi)
    return t === "compositionend" || (!Dc && Em(t, e))
      ? ((t = _m()), (po = Ic = Rn = null), (Mi = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Cm && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var A1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _f(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!A1[t.type] : e === "textarea";
}
function Tm(t, e, n, i) {
  sm(i),
    (e = Bo(e, "onChange")),
    0 < e.length &&
      ((n = new Rc("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var Hr = null,
  os = null;
function M1(t) {
  Fm(t, 0);
}
function wa(t) {
  var e = Ri(t);
  if (Zh(e)) return t;
}
function O1(t, e) {
  if (t === "change") return e;
}
var zm = !1;
if (vn) {
  var dl;
  if (vn) {
    var fl = "oninput" in document;
    if (!fl) {
      var Cf = document.createElement("div");
      Cf.setAttribute("oninput", "return;"),
        (fl = typeof Cf.oninput == "function");
    }
    dl = fl;
  } else dl = !1;
  zm = dl && (!document.documentMode || 9 < document.documentMode);
}
function Ef() {
  Hr && (Hr.detachEvent("onpropertychange", Am), (os = Hr = null));
}
function Am(t) {
  if (t.propertyName === "value" && wa(os)) {
    var e = [];
    Tm(e, os, t, Tc(t)), um(M1, e);
  }
}
function I1(t, e, n) {
  t === "focusin"
    ? (Ef(), (Hr = e), (os = n), Hr.attachEvent("onpropertychange", Am))
    : t === "focusout" && Ef();
}
function R1(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return wa(os);
}
function L1(t, e) {
  if (t === "click") return wa(e);
}
function D1(t, e) {
  if (t === "input" || t === "change") return wa(e);
}
function $1(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Vt = typeof Object.is == "function" ? Object.is : $1;
function as(t, e) {
  if (Vt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!lu.call(e, r) || !Vt(t[r], e[r])) return !1;
  }
  return !0;
}
function Pf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Tf(t, e) {
  var n = Pf(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pf(n);
  }
}
function Mm(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Mm(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Om() {
  for (var t = window, e = Ro(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Ro(t.document);
  }
  return e;
}
function $c(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function j1(t) {
  var e = Om(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Mm(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && $c(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Tf(n, s));
        var o = Tf(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var F1 = vn && "documentMode" in document && 11 >= document.documentMode,
  Oi = null,
  Pu = null,
  Wr = null,
  Tu = !1;
function zf(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Tu ||
    Oi == null ||
    Oi !== Ro(i) ||
    ((i = Oi),
    "selectionStart" in i && $c(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Wr && as(Wr, i)) ||
      ((Wr = i),
      (i = Bo(Pu, "onSelect")),
      0 < i.length &&
        ((e = new Rc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = Oi))));
}
function Gs(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Ii = {
    animationend: Gs("Animation", "AnimationEnd"),
    animationiteration: Gs("Animation", "AnimationIteration"),
    animationstart: Gs("Animation", "AnimationStart"),
    transitionend: Gs("Transition", "TransitionEnd"),
  },
  pl = {},
  Im = {};
vn &&
  ((Im = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ii.animationend.animation,
    delete Ii.animationiteration.animation,
    delete Ii.animationstart.animation),
  "TransitionEvent" in window || delete Ii.transitionend.transition);
function ba(t) {
  if (pl[t]) return pl[t];
  if (!Ii[t]) return t;
  var e = Ii[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Im) return (pl[t] = e[n]);
  return t;
}
var Rm = ba("animationend"),
  Lm = ba("animationiteration"),
  Dm = ba("animationstart"),
  $m = ba("transitionend"),
  jm = new Map(),
  Af =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Qn(t, e) {
  jm.set(t, e), vi(e, [t]);
}
for (var hl = 0; hl < Af.length; hl++) {
  var ml = Af[hl],
    N1 = ml.toLowerCase(),
    B1 = ml[0].toUpperCase() + ml.slice(1);
  Qn(N1, "on" + B1);
}
Qn(Rm, "onAnimationEnd");
Qn(Lm, "onAnimationIteration");
Qn(Dm, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn($m, "onTransitionEnd");
Qi("onMouseEnter", ["mouseout", "mouseover"]);
Qi("onMouseLeave", ["mouseout", "mouseover"]);
Qi("onPointerEnter", ["pointerout", "pointerover"]);
Qi("onPointerLeave", ["pointerout", "pointerover"]);
vi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
vi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
vi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
vi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
vi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var $r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  H1 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Mf(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), Nv(i, e, void 0, t), (t.currentTarget = null);
}
function Fm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var a = i[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && r.isPropagationStopped())) break e;
          Mf(r, a, u), (s = l);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((a = i[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && r.isPropagationStopped())
          )
            break e;
          Mf(r, a, u), (s = l);
        }
    }
  }
  if (Do) throw ((t = ku), (Do = !1), (ku = null), t);
}
function he(t, e) {
  var n = e[Iu];
  n === void 0 && (n = e[Iu] = new Set());
  var i = t + "__bubble";
  n.has(i) || (Nm(e, t, 2, !1), n.add(i));
}
function gl(t, e, n) {
  var i = 0;
  e && (i |= 4), Nm(n, t, i, e);
}
var Ks = "_reactListening" + Math.random().toString(36).slice(2);
function ls(t) {
  if (!t[Ks]) {
    (t[Ks] = !0),
      Xh.forEach(function (n) {
        n !== "selectionchange" && (H1.has(n) || gl(n, !1, t), gl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ks] || ((e[Ks] = !0), gl("selectionchange", !1, e));
  }
}
function Nm(t, e, n, i) {
  switch (km(e)) {
    case 1:
      var r = n1;
      break;
    case 4:
      r = i1;
      break;
    default:
      r = Oc;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !Su ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
      ? t.addEventListener(e, n, { passive: r })
      : t.addEventListener(e, n, !1);
}
function yl(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var a = i.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ni(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  um(function () {
    var u = s,
      c = Tc(n),
      d = [];
    e: {
      var f = jm.get(t);
      if (f !== void 0) {
        var p = Rc,
          g = t;
        switch (t) {
          case "keypress":
            if (ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = v1;
            break;
          case "focusin":
            (g = "focus"), (p = cl);
            break;
          case "focusout":
            (g = "blur"), (p = cl);
            break;
          case "beforeblur":
          case "afterblur":
            p = cl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = o1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = x1;
            break;
          case Rm:
          case Lm:
          case Dm:
            p = u1;
            break;
          case $m:
            p = k1;
            break;
          case "scroll":
            p = r1;
            break;
          case "wheel":
            p = C1;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = d1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = xf;
        }
        var m = (e & 4) !== 0,
          b = !m && t === "scroll",
          y = m ? (f !== null ? f + "Capture" : null) : f;
        m = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              y !== null && ((w = ns(h, y)), w != null && m.push(us(h, w, v)))),
            b)
          )
            break;
          h = h.return;
        }
        0 < m.length &&
          ((f = new p(f, g, null, n, c)), d.push({ event: f, listeners: m }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          f &&
            n !== bu &&
            (g = n.relatedTarget || n.fromElement) &&
            (ni(g) || g[wn]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? ni(g) : null),
              g !== null &&
                ((b = wi(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((m = wf),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((m = xf),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (b = p == null ? f : Ri(p)),
            (v = g == null ? f : Ri(g)),
            (f = new m(w, h + "leave", p, n, c)),
            (f.target = b),
            (f.relatedTarget = v),
            (w = null),
            ni(c) === u &&
              ((m = new m(y, h + "enter", g, n, c)),
              (m.target = v),
              (m.relatedTarget = b),
              (w = m)),
            (b = w),
            p && g)
          )
            t: {
              for (m = p, y = g, h = 0, v = m; v; v = bi(v)) h++;
              for (v = 0, w = y; w; w = bi(w)) v++;
              for (; 0 < h - v; ) (m = bi(m)), h--;
              for (; 0 < v - h; ) (y = bi(y)), v--;
              for (; h--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                (m = bi(m)), (y = bi(y));
              }
              m = null;
            }
          else m = null;
          p !== null && Of(d, f, p, m, !1),
            g !== null && b !== null && Of(d, b, g, m, !0);
        }
      }
      e: {
        if (
          ((f = u ? Ri(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var x = O1;
        else if (_f(f))
          if (zm) x = D1;
          else {
            x = R1;
            var k = I1;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (x = L1);
        if (x && (x = x(t, u))) {
          Tm(d, x, n, c);
          break e;
        }
        k && k(t, f, u),
          t === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            mu(f, "number", f.value);
      }
      switch (((k = u ? Ri(u) : window), t)) {
        case "focusin":
          (_f(k) || k.contentEditable === "true") &&
            ((Oi = k), (Pu = u), (Wr = null));
          break;
        case "focusout":
          Wr = Pu = Oi = null;
          break;
        case "mousedown":
          Tu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Tu = !1), zf(d, n, c);
          break;
        case "selectionchange":
          if (F1) break;
        case "keydown":
        case "keyup":
          zf(d, n, c);
      }
      var S;
      if (Dc)
        e: {
          switch (t) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mi
          ? Em(t, n) && (P = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Cm &&
          n.locale !== "ko" &&
          (Mi || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mi && (S = _m())
            : ((Rn = c),
              (Ic = "value" in Rn ? Rn.value : Rn.textContent),
              (Mi = !0))),
        (k = Bo(u, P)),
        0 < k.length &&
          ((P = new bf(P, t, null, n, c)),
          d.push({ event: P, listeners: k }),
          S ? (P.data = S) : ((S = Pm(n)), S !== null && (P.data = S)))),
        (S = P1 ? T1(t, n) : z1(t, n)) &&
          ((u = Bo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new bf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    Fm(d, e);
  });
}
function us(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Bo(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = ns(t, n)),
      s != null && i.unshift(us(t, s, r)),
      (s = ns(t, e)),
      s != null && i.push(us(t, s, r))),
      (t = t.return);
  }
  return i;
}
function bi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Of(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = ns(n, s)), l != null && o.unshift(us(n, l, a)))
        : r || ((l = ns(n, s)), l != null && o.push(us(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var W1 = /\r\n?/g,
  V1 = /\u0000|\uFFFD/g;
function If(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      W1,
      `
`,
    )
    .replace(V1, "");
}
function Ys(t, e, n) {
  if (((e = If(e)), If(t) !== e && n)) throw Error(D(425));
}
function Ho() {}
var zu = null,
  Au = null;
function Mu(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
  q1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Rf = typeof Promise == "function" ? Promise : void 0,
  U1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Rf < "u"
      ? function (t) {
          return Rf.resolve(null).then(t).catch(X1);
        }
      : Ou;
function X1(t) {
  setTimeout(function () {
    throw t;
  });
}
function vl(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), ss(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  ss(e);
}
function Hn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Lf(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var wr = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + wr,
  cs = "__reactProps$" + wr,
  wn = "__reactContainer$" + wr,
  Iu = "__reactEvents$" + wr,
  G1 = "__reactListeners$" + wr,
  K1 = "__reactHandles$" + wr;
function ni(t) {
  var e = t[Jt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[wn] || n[Jt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Lf(t); t !== null; ) {
          if ((n = t[Jt])) return n;
          t = Lf(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ts(t) {
  return (
    (t = t[Jt] || t[wn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Ri(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(D(33));
}
function xa(t) {
  return t[cs] || null;
}
var Ru = [],
  Li = -1;
function Zn(t) {
  return { current: t };
}
function ge(t) {
  0 > Li || ((t.current = Ru[Li]), (Ru[Li] = null), Li--);
}
function pe(t, e) {
  Li++, (Ru[Li] = t.current), (t.current = e);
}
var Gn = {},
  et = Zn(Gn),
  ct = Zn(!1),
  di = Gn;
function Zi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Gn;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function dt(t) {
  return (t = t.childContextTypes), t != null;
}
function Wo() {
  ge(ct), ge(et);
}
function Df(t, e, n) {
  if (et.current !== Gn) throw Error(D(168));
  pe(et, e), pe(ct, n);
}
function Bm(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(D(108, Iv(t) || "Unknown", r));
  return _e({}, n, i);
}
function Vo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Gn),
    (di = et.current),
    pe(et, t),
    pe(ct, ct.current),
    !0
  );
}
function $f(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(D(169));
  n
    ? ((t = Bm(t, e, di)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      ge(ct),
      ge(et),
      pe(et, t))
    : ge(ct),
    pe(ct, n);
}
var pn = null,
  Sa = !1,
  wl = !1;
function Hm(t) {
  pn === null ? (pn = [t]) : pn.push(t);
}
function Y1(t) {
  (Sa = !0), Hm(t);
}
function Jn() {
  if (!wl && pn !== null) {
    wl = !0;
    var t = 0,
      e = ce;
    try {
      var n = pn;
      for (ce = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (pn = null), (Sa = !1);
    } catch (r) {
      throw (pn !== null && (pn = pn.slice(t + 1)), pm(zc, Jn), r);
    } finally {
      (ce = e), (wl = !1);
    }
  }
  return null;
}
var Di = [],
  $i = 0,
  qo = null,
  Uo = 0,
  Tt = [],
  zt = 0,
  fi = null,
  hn = 1,
  mn = "";
function ei(t, e) {
  (Di[$i++] = Uo), (Di[$i++] = qo), (qo = t), (Uo = e);
}
function Wm(t, e, n) {
  (Tt[zt++] = hn), (Tt[zt++] = mn), (Tt[zt++] = fi), (fi = t);
  var i = hn;
  t = mn;
  var r = 32 - Bt(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - Bt(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (hn = (1 << (32 - Bt(e) + r)) | (n << r) | i),
      (mn = s + t);
  } else (hn = (1 << s) | (n << r) | i), (mn = t);
}
function jc(t) {
  t.return !== null && (ei(t, 1), Wm(t, 1, 0));
}
function Fc(t) {
  for (; t === qo; )
    (qo = Di[--$i]), (Di[$i] = null), (Uo = Di[--$i]), (Di[$i] = null);
  for (; t === fi; )
    (fi = Tt[--zt]),
      (Tt[zt] = null),
      (mn = Tt[--zt]),
      (Tt[zt] = null),
      (hn = Tt[--zt]),
      (Tt[zt] = null);
}
var bt = null,
  wt = null,
  be = !1,
  Nt = null;
function Vm(t, e) {
  var n = At(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function jf(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (bt = t), (wt = Hn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (bt = t), (wt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = fi !== null ? { id: hn, overflow: mn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = At(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (bt = t),
            (wt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Du(t) {
  if (be) {
    var e = wt;
    if (e) {
      var n = e;
      if (!jf(t, e)) {
        if (Lu(t)) throw Error(D(418));
        e = Hn(n.nextSibling);
        var i = bt;
        e && jf(t, e)
          ? Vm(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (be = !1), (bt = t));
      }
    } else {
      if (Lu(t)) throw Error(D(418));
      (t.flags = (t.flags & -4097) | 2), (be = !1), (bt = t);
    }
  }
}
function Ff(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  bt = t;
}
function Qs(t) {
  if (t !== bt) return !1;
  if (!be) return Ff(t), (be = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Mu(t.type, t.memoizedProps))),
    e && (e = wt))
  ) {
    if (Lu(t)) throw (qm(), Error(D(418)));
    for (; e; ) Vm(t, e), (e = Hn(e.nextSibling));
  }
  if ((Ff(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(D(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              wt = Hn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      wt = null;
    }
  } else wt = bt ? Hn(t.stateNode.nextSibling) : null;
  return !0;
}
function qm() {
  for (var t = wt; t; ) t = Hn(t.nextSibling);
}
function Ji() {
  (wt = bt = null), (be = !1);
}
function Nc(t) {
  Nt === null ? (Nt = [t]) : Nt.push(t);
}
var Q1 = _n.ReactCurrentBatchConfig;
function jt(t, e) {
  if (t && t.defaultProps) {
    (e = _e({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Xo = Zn(null),
  Go = null,
  ji = null,
  Bc = null;
function Hc() {
  Bc = ji = Go = null;
}
function Wc(t) {
  var e = Xo.current;
  ge(Xo), (t._currentValue = e);
}
function $u(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Ui(t, e) {
  (Go = t),
    (Bc = ji = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (lt = !0), (t.firstContext = null));
}
function It(t) {
  var e = t._currentValue;
  if (Bc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), ji === null)) {
      if (Go === null) throw Error(D(308));
      (ji = t), (Go.dependencies = { lanes: 0, firstContext: t });
    } else ji = ji.next = t;
  return e;
}
var ii = null;
function Vc(t) {
  ii === null ? (ii = [t]) : ii.push(t);
}
function Um(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), Vc(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    bn(t, i)
  );
}
function bn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var An = !1;
function qc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xm(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function gn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), re & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      bn(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), Vc(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    bn(t, n)
  );
}
function mo(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Ac(t, n);
  }
}
function Nf(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Ko(t, e, n, i) {
  var r = t.updateQueue;
  An = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = r.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((i & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = t,
            m = a;
          switch (((f = e), (p = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == "function")) {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (f = typeof g == "function" ? g.call(p, d, f) : g),
                f == null)
              )
                break e;
              d = _e({}, d, f);
              break e;
            case 2:
              An = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (f = r.effects),
          f === null ? (r.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (r.lastBaseUpdate = f),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (hi |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function Bf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(D(191, r));
        r.call(i);
      }
    }
}
var Gm = new Uh.Component().refs;
function ju(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : _e({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ka = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? wi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = nt(),
      r = qn(t),
      s = gn(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Wn(t, s, r)),
      e !== null && (Ht(e, t, r, i), mo(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = nt(),
      r = qn(t),
      s = gn(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Wn(t, s, r)),
      e !== null && (Ht(e, t, r, i), mo(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = nt(),
      i = qn(t),
      r = gn(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = Wn(t, r, i)),
      e !== null && (Ht(e, t, i, n), mo(e, t, i));
  },
};
function Hf(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !as(n, i) || !as(r, s)
      : !0
  );
}
function Km(t, e, n) {
  var i = !1,
    r = Gn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = It(s))
      : ((r = dt(e) ? di : et.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? Zi(t, r) : Gn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ka),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Wf(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && ka.enqueueReplaceState(e, e.state, null);
}
function Fu(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = Gm), qc(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = It(s))
    : ((s = dt(e) ? di : et.current), (r.context = Zi(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (ju(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && ka.enqueueReplaceState(r, r.state, null),
      Ko(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function Pr(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(D(147, t));
      var r = i,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = r.refs;
            a === Gm && (a = r.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, t));
  }
  return t;
}
function Zs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      D(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function Vf(t) {
  var e = t._init;
  return e(t._payload);
}
function Ym(t) {
  function e(y, h) {
    if (t) {
      var v = y.deletions;
      v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
    }
  }
  function n(y, h) {
    if (!t) return null;
    for (; h !== null; ) e(y, h), (h = h.sibling);
    return null;
  }
  function i(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function r(y, h) {
    return (y = Un(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, h, v) {
    return (
      (y.index = v),
      t
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((y.flags |= 2), h) : v)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function o(y) {
    return t && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, h, v, w) {
    return h === null || h.tag !== 6
      ? ((h = El(v, y.mode, w)), (h.return = y), h)
      : ((h = r(h, v)), (h.return = y), h);
  }
  function l(y, h, v, w) {
    var x = v.type;
    return x === Ai
      ? c(y, h, v.props.children, w, v.key)
      : h !== null &&
        (h.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === zn &&
            Vf(x) === h.type))
      ? ((w = r(h, v.props)), (w.ref = Pr(y, h, v)), (w.return = y), w)
      : ((w = xo(v.type, v.key, v.props, null, y.mode, w)),
        (w.ref = Pr(y, h, v)),
        (w.return = y),
        w);
  }
  function u(y, h, v, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Pl(v, y.mode, w)), (h.return = y), h)
      : ((h = r(h, v.children || [])), (h.return = y), h);
  }
  function c(y, h, v, w, x) {
    return h === null || h.tag !== 7
      ? ((h = ai(v, y.mode, w, x)), (h.return = y), h)
      : ((h = r(h, v)), (h.return = y), h);
  }
  function d(y, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = El("" + h, y.mode, v)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Bs:
          return (
            (v = xo(h.type, h.key, h.props, null, y.mode, v)),
            (v.ref = Pr(y, null, h)),
            (v.return = y),
            v
          );
        case zi:
          return (h = Pl(h, y.mode, v)), (h.return = y), h;
        case zn:
          var w = h._init;
          return d(y, w(h._payload), v);
      }
      if (Lr(h) || Sr(h))
        return (h = ai(h, y.mode, v, null)), (h.return = y), h;
      Zs(y, h);
    }
    return null;
  }
  function f(y, h, v, w) {
    var x = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return x !== null ? null : a(y, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bs:
          return v.key === x ? l(y, h, v, w) : null;
        case zi:
          return v.key === x ? u(y, h, v, w) : null;
        case zn:
          return (x = v._init), f(y, h, x(v._payload), w);
      }
      if (Lr(v) || Sr(v)) return x !== null ? null : c(y, h, v, w, null);
      Zs(y, v);
    }
    return null;
  }
  function p(y, h, v, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (y = y.get(v) || null), a(h, y, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Bs:
          return (y = y.get(w.key === null ? v : w.key) || null), l(h, y, w, x);
        case zi:
          return (y = y.get(w.key === null ? v : w.key) || null), u(h, y, w, x);
        case zn:
          var k = w._init;
          return p(y, h, v, k(w._payload), x);
      }
      if (Lr(w) || Sr(w)) return (y = y.get(v) || null), c(h, y, w, x, null);
      Zs(h, w);
    }
    return null;
  }
  function g(y, h, v, w) {
    for (
      var x = null, k = null, S = h, P = (h = 0), E = null;
      S !== null && P < v.length;
      P++
    ) {
      S.index > P ? ((E = S), (S = null)) : (E = S.sibling);
      var A = f(y, S, v[P], w);
      if (A === null) {
        S === null && (S = E);
        break;
      }
      t && S && A.alternate === null && e(y, S),
        (h = s(A, h, P)),
        k === null ? (x = A) : (k.sibling = A),
        (k = A),
        (S = E);
    }
    if (P === v.length) return n(y, S), be && ei(y, P), x;
    if (S === null) {
      for (; P < v.length; P++)
        (S = d(y, v[P], w)),
          S !== null &&
            ((h = s(S, h, P)), k === null ? (x = S) : (k.sibling = S), (k = S));
      return be && ei(y, P), x;
    }
    for (S = i(y, S); P < v.length; P++)
      (E = p(S, y, P, v[P], w)),
        E !== null &&
          (t && E.alternate !== null && S.delete(E.key === null ? P : E.key),
          (h = s(E, h, P)),
          k === null ? (x = E) : (k.sibling = E),
          (k = E));
    return (
      t &&
        S.forEach(function (_) {
          return e(y, _);
        }),
      be && ei(y, P),
      x
    );
  }
  function m(y, h, v, w) {
    var x = Sr(v);
    if (typeof x != "function") throw Error(D(150));
    if (((v = x.call(v)), v == null)) throw Error(D(151));
    for (
      var k = (x = null), S = h, P = (h = 0), E = null, A = v.next();
      S !== null && !A.done;
      P++, A = v.next()
    ) {
      S.index > P ? ((E = S), (S = null)) : (E = S.sibling);
      var _ = f(y, S, A.value, w);
      if (_ === null) {
        S === null && (S = E);
        break;
      }
      t && S && _.alternate === null && e(y, S),
        (h = s(_, h, P)),
        k === null ? (x = _) : (k.sibling = _),
        (k = _),
        (S = E);
    }
    if (A.done) return n(y, S), be && ei(y, P), x;
    if (S === null) {
      for (; !A.done; P++, A = v.next())
        (A = d(y, A.value, w)),
          A !== null &&
            ((h = s(A, h, P)), k === null ? (x = A) : (k.sibling = A), (k = A));
      return be && ei(y, P), x;
    }
    for (S = i(y, S); !A.done; P++, A = v.next())
      (A = p(S, y, P, A.value, w)),
        A !== null &&
          (t && A.alternate !== null && S.delete(A.key === null ? P : A.key),
          (h = s(A, h, P)),
          k === null ? (x = A) : (k.sibling = A),
          (k = A));
    return (
      t &&
        S.forEach(function (C) {
          return e(y, C);
        }),
      be && ei(y, P),
      x
    );
  }
  function b(y, h, v, w) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Ai &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Bs:
          e: {
            for (var x = v.key, k = h; k !== null; ) {
              if (k.key === x) {
                if (((x = v.type), x === Ai)) {
                  if (k.tag === 7) {
                    n(y, k.sibling),
                      (h = r(k, v.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  k.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === zn &&
                    Vf(x) === k.type)
                ) {
                  n(y, k.sibling),
                    (h = r(k, v.props)),
                    (h.ref = Pr(y, k, v)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, k);
                break;
              } else e(y, k);
              k = k.sibling;
            }
            v.type === Ai
              ? ((h = ai(v.props.children, y.mode, w, v.key)),
                (h.return = y),
                (y = h))
              : ((w = xo(v.type, v.key, v.props, null, y.mode, w)),
                (w.ref = Pr(y, h, v)),
                (w.return = y),
                (y = w));
          }
          return o(y);
        case zi:
          e: {
            for (k = v.key; h !== null; ) {
              if (h.key === k)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(y, h.sibling),
                    (h = r(h, v.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else e(y, h);
              h = h.sibling;
            }
            (h = Pl(v, y.mode, w)), (h.return = y), (y = h);
          }
          return o(y);
        case zn:
          return (k = v._init), b(y, h, k(v._payload), w);
      }
      if (Lr(v)) return g(y, h, v, w);
      if (Sr(v)) return m(y, h, v, w);
      Zs(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = r(h, v)), (h.return = y), (y = h))
          : (n(y, h), (h = El(v, y.mode, w)), (h.return = y), (y = h)),
        o(y))
      : n(y, h);
  }
  return b;
}
var er = Ym(!0),
  Qm = Ym(!1),
  zs = {},
  rn = Zn(zs),
  ds = Zn(zs),
  fs = Zn(zs);
function ri(t) {
  if (t === zs) throw Error(D(174));
  return t;
}
function Uc(t, e) {
  switch ((pe(fs, e), pe(ds, t), pe(rn, zs), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : yu(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = yu(e, t));
  }
  ge(rn), pe(rn, e);
}
function tr() {
  ge(rn), ge(ds), ge(fs);
}
function Zm(t) {
  ri(fs.current);
  var e = ri(rn.current),
    n = yu(e, t.type);
  e !== n && (pe(ds, t), pe(rn, n));
}
function Xc(t) {
  ds.current === t && (ge(rn), ge(ds));
}
var Se = Zn(0);
function Yo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var bl = [];
function Gc() {
  for (var t = 0; t < bl.length; t++)
    bl[t]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var go = _n.ReactCurrentDispatcher,
  xl = _n.ReactCurrentBatchConfig,
  pi = 0,
  ke = null,
  De = null,
  Fe = null,
  Qo = !1,
  Vr = !1,
  ps = 0,
  Z1 = 0;
function Ke() {
  throw Error(D(321));
}
function Kc(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Vt(t[n], e[n])) return !1;
  return !0;
}
function Yc(t, e, n, i, r, s) {
  if (
    ((pi = s),
    (ke = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (go.current = t === null || t.memoizedState === null ? nw : iw),
    (t = n(i, r)),
    Vr)
  ) {
    s = 0;
    do {
      if (((Vr = !1), (ps = 0), 25 <= s)) throw Error(D(301));
      (s += 1),
        (Fe = De = null),
        (e.updateQueue = null),
        (go.current = rw),
        (t = n(i, r));
    } while (Vr);
  }
  if (
    ((go.current = Zo),
    (e = De !== null && De.next !== null),
    (pi = 0),
    (Fe = De = ke = null),
    (Qo = !1),
    e)
  )
    throw Error(D(300));
  return t;
}
function Qc() {
  var t = ps !== 0;
  return (ps = 0), t;
}
function Kt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (ke.memoizedState = Fe = t) : (Fe = Fe.next = t), Fe;
}
function Rt() {
  if (De === null) {
    var t = ke.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = De.next;
  var e = Fe === null ? ke.memoizedState : Fe.next;
  if (e !== null) (Fe = e), (De = t);
  else {
    if (t === null) throw Error(D(310));
    (De = t),
      (t = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Fe === null ? (ke.memoizedState = Fe = t) : (Fe = Fe.next = t);
  }
  return Fe;
}
function hs(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Sl(t) {
  var e = Rt(),
    n = e.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = t;
  var i = De,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((pi & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : t(i, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = i)) : (l = l.next = d),
          (ke.lanes |= c),
          (hi |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = i) : (l.next = a),
      Vt(i, e.memoizedState) || (lt = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (ke.lanes |= s), (hi |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function kl(t) {
  var e = Rt(),
    n = e.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    Vt(s, e.memoizedState) || (lt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function Jm() {}
function e0(t, e) {
  var n = ke,
    i = Rt(),
    r = e(),
    s = !Vt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (lt = !0)),
    (i = i.queue),
    Zc(i0.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ms(9, n0.bind(null, n, i, r, e), void 0, null),
      He === null)
    )
      throw Error(D(349));
    pi & 30 || t0(n, e, r);
  }
  return r;
}
function t0(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function n0(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), r0(e) && s0(t);
}
function i0(t, e, n) {
  return n(function () {
    r0(e) && s0(t);
  });
}
function r0(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Vt(t, n);
  } catch {
    return !0;
  }
}
function s0(t) {
  var e = bn(t, 1);
  e !== null && Ht(e, t, 1, -1);
}
function qf(t) {
  var e = Kt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hs,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = tw.bind(null, ke, t)),
    [e.memoizedState, t]
  );
}
function ms(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function o0() {
  return Rt().memoizedState;
}
function yo(t, e, n, i) {
  var r = Kt();
  (ke.flags |= t),
    (r.memoizedState = ms(1 | e, n, void 0, i === void 0 ? null : i));
}
function _a(t, e, n, i) {
  var r = Rt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (((s = o.destroy), i !== null && Kc(i, o.deps))) {
      r.memoizedState = ms(e, n, s, i);
      return;
    }
  }
  (ke.flags |= t), (r.memoizedState = ms(1 | e, n, s, i));
}
function Uf(t, e) {
  return yo(8390656, 8, t, e);
}
function Zc(t, e) {
  return _a(2048, 8, t, e);
}
function a0(t, e) {
  return _a(4, 2, t, e);
}
function l0(t, e) {
  return _a(4, 4, t, e);
}
function u0(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function c0(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), _a(4, 4, u0.bind(null, e, t), n)
  );
}
function Jc() {}
function d0(t, e) {
  var n = Rt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Kc(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function f0(t, e) {
  var n = Rt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Kc(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function p0(t, e, n) {
  return pi & 21
    ? (Vt(n, e) || ((n = gm()), (ke.lanes |= n), (hi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (lt = !0)), (t.memoizedState = n));
}
function J1(t, e) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = xl.transition;
  xl.transition = {};
  try {
    t(!1), e();
  } finally {
    (ce = n), (xl.transition = i);
  }
}
function h0() {
  return Rt().memoizedState;
}
function ew(t, e, n) {
  var i = qn(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    m0(t))
  )
    g0(e, n);
  else if (((n = Um(t, e, n, i)), n !== null)) {
    var r = nt();
    Ht(n, t, i, r), y0(n, e, i);
  }
}
function tw(t, e, n) {
  var i = qn(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (m0(t)) g0(e, r);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = a), Vt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((r.next = r), Vc(e))
            : ((r.next = l.next), (l.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Um(t, e, r, i)),
      n !== null && ((r = nt()), Ht(n, t, i, r), y0(n, e, i));
  }
}
function m0(t) {
  var e = t.alternate;
  return t === ke || (e !== null && e === ke);
}
function g0(t, e) {
  Vr = Qo = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function y0(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Ac(t, n);
  }
}
var Zo = {
    readContext: It,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  nw = {
    readContext: It,
    useCallback: function (t, e) {
      return (Kt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: It,
    useEffect: Uf,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        yo(4194308, 4, u0.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return yo(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return yo(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Kt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = Kt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = ew.bind(null, ke, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Kt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: qf,
    useDebugValue: Jc,
    useDeferredValue: function (t) {
      return (Kt().memoizedState = t);
    },
    useTransition: function () {
      var t = qf(!1),
        e = t[0];
      return (t = J1.bind(null, t[1])), (Kt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = ke,
        r = Kt();
      if (be) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = e()), He === null)) throw Error(D(349));
        pi & 30 || t0(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        Uf(i0.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        ms(9, n0.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Kt(),
        e = He.identifierPrefix;
      if (be) {
        var n = mn,
          i = hn;
        (n = (i & ~(1 << (32 - Bt(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = ps++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Z1++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  iw = {
    readContext: It,
    useCallback: d0,
    useContext: It,
    useEffect: Zc,
    useImperativeHandle: c0,
    useInsertionEffect: a0,
    useLayoutEffect: l0,
    useMemo: f0,
    useReducer: Sl,
    useRef: o0,
    useState: function () {
      return Sl(hs);
    },
    useDebugValue: Jc,
    useDeferredValue: function (t) {
      var e = Rt();
      return p0(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = Sl(hs)[0],
        e = Rt().memoizedState;
      return [t, e];
    },
    useMutableSource: Jm,
    useSyncExternalStore: e0,
    useId: h0,
    unstable_isNewReconciler: !1,
  },
  rw = {
    readContext: It,
    useCallback: d0,
    useContext: It,
    useEffect: Zc,
    useImperativeHandle: c0,
    useInsertionEffect: a0,
    useLayoutEffect: l0,
    useMemo: f0,
    useReducer: kl,
    useRef: o0,
    useState: function () {
      return kl(hs);
    },
    useDebugValue: Jc,
    useDeferredValue: function (t) {
      var e = Rt();
      return De === null ? (e.memoizedState = t) : p0(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = kl(hs)[0],
        e = Rt().memoizedState;
      return [t, e];
    },
    useMutableSource: Jm,
    useSyncExternalStore: e0,
    useId: h0,
    unstable_isNewReconciler: !1,
  };
function nr(t, e) {
  try {
    var n = "",
      i = e;
    do (n += Ov(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function _l(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Nu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sw = typeof WeakMap == "function" ? WeakMap : Map;
function v0(t, e, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      ea || ((ea = !0), (Yu = i)), Nu(t, e);
    }),
    n
  );
}
function w0(t, e, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Nu(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Nu(t, e),
          typeof i != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Xf(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new sw();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = ww.bind(null, t, e, n)), e.then(t, t));
}
function Gf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Kf(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = gn(-1, 1)), (e.tag = 2), Wn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var ow = _n.ReactCurrentOwner,
  lt = !1;
function tt(t, e, n, i) {
  e.child = t === null ? Qm(e, null, n, i) : er(e, t.child, n, i);
}
function Yf(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    Ui(e, r),
    (i = Yc(t, e, n, i, s, r)),
    (n = Qc()),
    t !== null && !lt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        xn(t, e, r))
      : (be && n && jc(e), (e.flags |= 1), tt(t, e, i, r), e.child)
  );
}
function Qf(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ad(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), b0(t, e, s, i, r))
      : ((t = xo(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : as), n(o, i) && t.ref === e.ref)
    )
      return xn(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = Un(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function b0(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (as(s, i) && t.ref === e.ref)
      if (((lt = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (lt = !0);
      else return (e.lanes = t.lanes), xn(t, e, r);
  }
  return Bu(t, e, n, i, r);
}
function x0(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(Ni, gt),
        (gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          pe(Ni, gt),
          (gt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        pe(Ni, gt),
        (gt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      pe(Ni, gt),
      (gt |= i);
  return tt(t, e, r, n), e.child;
}
function S0(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Bu(t, e, n, i, r) {
  var s = dt(n) ? di : et.current;
  return (
    (s = Zi(e, s)),
    Ui(e, r),
    (n = Yc(t, e, n, i, s, r)),
    (i = Qc()),
    t !== null && !lt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        xn(t, e, r))
      : (be && i && jc(e), (e.flags |= 1), tt(t, e, n, r), e.child)
  );
}
function Zf(t, e, n, i, r) {
  if (dt(n)) {
    var s = !0;
    Vo(e);
  } else s = !1;
  if ((Ui(e, r), e.stateNode === null))
    vo(t, e), Km(e, n, i), Fu(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = It(u))
      : ((u = dt(n) ? di : et.current), (u = Zi(e, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== u) && Wf(e, o, i, u)),
      (An = !1);
    var f = e.memoizedState;
    (o.state = f),
      Ko(e, i, o, r),
      (l = e.memoizedState),
      a !== i || f !== l || ct.current || An
        ? (typeof c == "function" && (ju(e, n, c, i), (l = e.memoizedState)),
          (a = An || Hf(e, n, a, i, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = l)),
          (o.props = i),
          (o.state = l),
          (o.context = u),
          (i = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      Xm(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : jt(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = It(l))
        : ((l = dt(n) ? di : et.current), (l = Zi(e, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Wf(e, o, i, l)),
      (An = !1),
      (f = e.memoizedState),
      (o.state = f),
      Ko(e, i, o, r);
    var g = e.memoizedState;
    a !== d || f !== g || ct.current || An
      ? (typeof p == "function" && (ju(e, n, p, i), (g = e.memoizedState)),
        (u = An || Hf(e, n, u, i, f, g, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, g, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, g, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = g)),
        (o.props = i),
        (o.state = g),
        (o.context = l),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return Hu(t, e, n, i, s, r);
}
function Hu(t, e, n, i, r, s) {
  S0(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && $f(e, n, !1), xn(t, e, s);
  (i = e.stateNode), (ow.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = er(e, t.child, null, s)), (e.child = er(e, null, a, s)))
      : tt(t, e, a, s),
    (e.memoizedState = i.state),
    r && $f(e, n, !0),
    e.child
  );
}
function k0(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Df(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Df(t, e.context, !1),
    Uc(t, e.containerInfo);
}
function Jf(t, e, n, i, r) {
  return Ji(), Nc(r), (e.flags |= 256), tt(t, e, n, i), e.child;
}
var Wu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vu(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function _0(t, e, n) {
  var i = e.pendingProps,
    r = Se.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    pe(Se, r & 1),
    t === null)
  )
    return (
      Du(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Pa(o, i, 0, null)),
              (t = ai(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Vu(n)),
              (e.memoizedState = Wu),
              t)
            : ed(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return aw(t, e, o, i, a, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (e.deletions = null))
        : ((i = Un(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (s = Un(a, s)) : ((s = ai(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Vu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Wu),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = Un(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function ed(t, e) {
  return (
    (e = Pa({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Js(t, e, n, i) {
  return (
    i !== null && Nc(i),
    er(e, t.child, null, n),
    (t = ed(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function aw(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = _l(Error(D(422)))), Js(t, e, o, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = i.fallback),
        (r = e.mode),
        (i = Pa({ mode: "visible", children: i.children }, r, 0, null)),
        (s = ai(s, r, o, null)),
        (s.flags |= 2),
        (i.return = e),
        (s.return = e),
        (i.sibling = s),
        (e.child = i),
        e.mode & 1 && er(e, t.child, null, o),
        (e.child.memoizedState = Vu(o)),
        (e.memoizedState = Wu),
        s);
  if (!(e.mode & 1)) return Js(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (s = Error(D(419))), (i = _l(s, i, void 0)), Js(t, e, o, i);
  }
  if (((a = (o & t.childLanes) !== 0), lt || a)) {
    if (((i = He), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), bn(t, r), Ht(i, t, r, -1));
    }
    return od(), (i = _l(Error(D(421)))), Js(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = bw.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (wt = Hn(r.nextSibling)),
      (bt = e),
      (be = !0),
      (Nt = null),
      t !== null &&
        ((Tt[zt++] = hn),
        (Tt[zt++] = mn),
        (Tt[zt++] = fi),
        (hn = t.id),
        (mn = t.overflow),
        (fi = e)),
      (e = ed(e, i.children)),
      (e.flags |= 4096),
      e);
}
function ep(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), $u(t.return, e, n);
}
function Cl(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function C0(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((tt(t, e, i.children, n), (i = Se.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ep(t, n, e);
        else if (t.tag === 19) ep(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((pe(Se, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && Yo(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Cl(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Yo(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Cl(e, !0, n, null, s);
        break;
      case "together":
        Cl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function vo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function xn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (hi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(D(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Un(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Un(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function lw(t, e, n) {
  switch (e.tag) {
    case 3:
      k0(e), Ji();
      break;
    case 5:
      Zm(e);
      break;
    case 1:
      dt(e.type) && Vo(e);
      break;
    case 4:
      Uc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      pe(Xo, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (pe(Se, Se.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? _0(t, e, n)
          : (pe(Se, Se.current & 1),
            (t = xn(t, e, n)),
            t !== null ? t.sibling : null);
      pe(Se, Se.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return C0(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        pe(Se, Se.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), x0(t, e, n);
  }
  return xn(t, e, n);
}
var E0, qu, P0, T0;
E0 = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qu = function () {};
P0 = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), ri(rn.current);
    var s = null;
    switch (n) {
      case "input":
        (r = pu(t, r)), (i = pu(t, i)), (s = []);
        break;
      case "select":
        (r = _e({}, r, { value: void 0 })),
          (i = _e({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = gu(t, r)), (i = gu(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = Ho);
    }
    vu(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var a = r[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (es.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var l = i[u];
      if (
        ((a = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (es.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && he("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
T0 = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function Tr(t, e) {
  if (!be)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function Ye(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function uw(t, e, n) {
  var i = e.pendingProps;
  switch ((Fc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ye(e), null;
    case 1:
      return dt(e.type) && Wo(), Ye(e), null;
    case 3:
      return (
        (i = e.stateNode),
        tr(),
        ge(ct),
        ge(et),
        Gc(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (Qs(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Nt !== null && (Ju(Nt), (Nt = null)))),
        qu(t, e),
        Ye(e),
        null
      );
    case 5:
      Xc(e);
      var r = ri(fs.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        P0(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(D(166));
          return Ye(e), null;
        }
        if (((t = ri(rn.current)), Qs(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[Jt] = e), (i[cs] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", i), he("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < $r.length; r++) he($r[r], i);
              break;
            case "source":
              he("error", i);
              break;
            case "img":
            case "image":
            case "link":
              he("error", i), he("load", i);
              break;
            case "details":
              he("toggle", i);
              break;
            case "input":
              uf(i, s), he("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                he("invalid", i);
              break;
            case "textarea":
              df(i, s), he("invalid", i);
          }
          vu(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ys(i.textContent, a, t),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ys(i.textContent, a, t),
                    (r = ["children", "" + a]))
                : es.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  he("scroll", i);
            }
          switch (n) {
            case "input":
              Hs(i), cf(i, s, !0);
              break;
            case "textarea":
              Hs(i), ff(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Ho);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = tm(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                ? (t = o.createElement(n, { is: i.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    i.multiple
                      ? (o.multiple = !0)
                      : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[Jt] = e),
            (t[cs] = i),
            E0(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = wu(n, i)), n)) {
              case "dialog":
                he("cancel", t), he("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < $r.length; r++) he($r[r], t);
                r = i;
                break;
              case "source":
                he("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                he("error", t), he("load", t), (r = i);
                break;
              case "details":
                he("toggle", t), (r = i);
                break;
              case "input":
                uf(t, i), (r = pu(t, i)), he("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = _e({}, i, { value: void 0 })),
                  he("invalid", t);
                break;
              case "textarea":
                df(t, i), (r = gu(t, i)), he("invalid", t);
                break;
              default:
                r = i;
            }
            vu(n, r), (a = r);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? rm(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && nm(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ts(t, l)
                    : typeof l == "number" && ts(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (es.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && he("scroll", t)
                      : l != null && _c(t, s, l, o));
              }
            switch (n) {
              case "input":
                Hs(t), cf(t, i, !1);
                break;
              case "textarea":
                Hs(t), ff(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + Xn(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Hi(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Hi(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = Ho);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ye(e), null;
    case 6:
      if (t && e.stateNode != null) T0(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(D(166));
        if (((n = ri(fs.current)), ri(rn.current), Qs(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[Jt] = e),
            (s = i.nodeValue !== n) && ((t = bt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ys(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ys(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[Jt] = e),
            (e.stateNode = i);
      }
      return Ye(e), null;
    case 13:
      if (
        (ge(Se),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (be && wt !== null && e.mode & 1 && !(e.flags & 128))
          qm(), Ji(), (e.flags |= 98560), (s = !1);
        else if (((s = Qs(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(D(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(D(317));
            s[Jt] = e;
          } else
            Ji(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ye(e), (s = !1);
        } else Nt !== null && (Ju(Nt), (Nt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Se.current & 1 ? $e === 0 && ($e = 3) : od())),
          e.updateQueue !== null && (e.flags |= 4),
          Ye(e),
          null);
    case 4:
      return (
        tr(), qu(t, e), t === null && ls(e.stateNode.containerInfo), Ye(e), null
      );
    case 10:
      return Wc(e.type._context), Ye(e), null;
    case 17:
      return dt(e.type) && Wo(), Ye(e), null;
    case 19:
      if ((ge(Se), (s = e.memoizedState), s === null)) return Ye(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) Tr(s, !1);
        else {
          if ($e !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Yo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Tr(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return pe(Se, (Se.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Me() > ir &&
            ((e.flags |= 128), (i = !0), Tr(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = Yo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Tr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !be)
            )
              return Ye(e), null;
          } else
            2 * Me() - s.renderingStartTime > ir &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), Tr(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Me()),
          (e.sibling = null),
          (n = Se.current),
          pe(Se, i ? (n & 1) | 2 : n & 1),
          e)
        : (Ye(e), null);
    case 22:
    case 23:
      return (
        sd(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? gt & 1073741824 && (Ye(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ye(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, e.tag));
}
function cw(t, e) {
  switch ((Fc(e), e.tag)) {
    case 1:
      return (
        dt(e.type) && Wo(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        tr(),
        ge(ct),
        ge(et),
        Gc(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Xc(e), null;
    case 13:
      if (
        (ge(Se), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(D(340));
        Ji();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ge(Se), null;
    case 4:
      return tr(), null;
    case 10:
      return Wc(e.type._context), null;
    case 22:
    case 23:
      return sd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var eo = !1,
  Ze = !1,
  dw = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Fi(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        Te(t, e, i);
      }
    else n.current = null;
}
function Uu(t, e, n) {
  try {
    n();
  } catch (i) {
    Te(t, e, i);
  }
}
var tp = !1;
function fw(t, e) {
  if (((zu = Fo), (t = Om()), $c(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = t,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d !== s || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === t) break t;
              if (
                (f === n && ++u === r && (a = o),
                f === s && ++c === i && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Au = { focusedElem: t, selectionRange: n }, Fo = !1, W = e; W !== null; )
    if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (W = t);
    else
      for (; W !== null; ) {
        e = W;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    b = g.memoizedState,
                    y = e.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : jt(e.type, m),
                      b,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (w) {
          Te(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (W = t);
          break;
        }
        W = e.return;
      }
  return (g = tp), (tp = !1), g;
}
function qr(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Uu(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Ca(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Xu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function z0(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), z0(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Jt], delete e[cs], delete e[Iu], delete e[G1], delete e[K1])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function A0(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function np(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || A0(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Gu(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Ho));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Gu(t, e, n), t = t.sibling; t !== null; ) Gu(t, e, n), (t = t.sibling);
}
function Ku(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Ku(t, e, n), t = t.sibling; t !== null; ) Ku(t, e, n), (t = t.sibling);
}
var Ve = null,
  Ft = !1;
function En(t, e, n) {
  for (n = n.child; n !== null; ) M0(t, e, n), (n = n.sibling);
}
function M0(t, e, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function")
    try {
      nn.onCommitFiberUnmount(ya, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || Fi(n, e);
    case 6:
      var i = Ve,
        r = Ft;
      (Ve = null),
        En(t, e, n),
        (Ve = i),
        (Ft = r),
        Ve !== null &&
          (Ft
            ? ((t = Ve),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Ft
          ? ((t = Ve),
            (n = n.stateNode),
            t.nodeType === 8
              ? vl(t.parentNode, n)
              : t.nodeType === 1 && vl(t, n),
            ss(t))
          : vl(Ve, n.stateNode));
      break;
    case 4:
      (i = Ve),
        (r = Ft),
        (Ve = n.stateNode.containerInfo),
        (Ft = !0),
        En(t, e, n),
        (Ve = i),
        (Ft = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Uu(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      En(t, e, n);
      break;
    case 1:
      if (
        !Ze &&
        (Fi(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          Te(n, e, a);
        }
      En(t, e, n);
      break;
    case 21:
      En(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (i = Ze) || n.memoizedState !== null), En(t, e, n), (Ze = i))
        : En(t, e, n);
      break;
    default:
      En(t, e, n);
  }
}
function ip(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new dw()),
      e.forEach(function (i) {
        var r = xw.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function $t(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ve = a.stateNode), (Ft = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(D(160));
        M0(s, o, r), (Ve = null), (Ft = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (u) {
        Te(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) O0(e, t), (e = e.sibling);
}
function O0(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($t(e, t), Gt(t), i & 4)) {
        try {
          qr(3, t, t.return), Ca(3, t);
        } catch (m) {
          Te(t, t.return, m);
        }
        try {
          qr(5, t, t.return);
        } catch (m) {
          Te(t, t.return, m);
        }
      }
      break;
    case 1:
      $t(e, t), Gt(t), i & 512 && n !== null && Fi(n, n.return);
      break;
    case 5:
      if (
        ($t(e, t),
        Gt(t),
        i & 512 && n !== null && Fi(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          ts(r, "");
        } catch (m) {
          Te(t, t.return, m);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Jh(r, s),
              wu(a, o);
            var u = wu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? rm(r, d)
                : c === "dangerouslySetInnerHTML"
                ? nm(r, d)
                : c === "children"
                ? ts(r, d)
                : _c(r, c, d, u);
            }
            switch (a) {
              case "input":
                hu(r, s);
                break;
              case "textarea":
                em(r, s);
                break;
              case "select":
                var f = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? Hi(r, !!s.multiple, p, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Hi(r, !!s.multiple, s.defaultValue, !0)
                      : Hi(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[cs] = s;
          } catch (m) {
            Te(t, t.return, m);
          }
      }
      break;
    case 6:
      if (($t(e, t), Gt(t), i & 4)) {
        if (t.stateNode === null) throw Error(D(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (m) {
          Te(t, t.return, m);
        }
      }
      break;
    case 3:
      if (
        ($t(e, t), Gt(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ss(e.containerInfo);
        } catch (m) {
          Te(t, t.return, m);
        }
      break;
    case 4:
      $t(e, t), Gt(t);
      break;
    case 13:
      $t(e, t),
        Gt(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (id = Me())),
        i & 4 && ip(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Ze = (u = Ze) || c), $t(e, t), (Ze = u)) : $t(e, t),
        Gt(t),
        i & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (W = t, c = t.child; c !== null; ) {
            for (d = W = c; W !== null; ) {
              switch (((f = W), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, f, f.return);
                  break;
                case 1:
                  Fi(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (i = f), (n = f.return);
                    try {
                      (e = i),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      Te(i, n, m);
                    }
                  }
                  break;
                case 5:
                  Fi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sp(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (W = p)) : sp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = t; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (r = d.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = im("display", o)));
              } catch (m) {
                Te(t, t.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                Te(t, t.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      $t(e, t), Gt(t), i & 4 && ip(t);
      break;
    case 21:
      break;
    default:
      $t(e, t), Gt(t);
  }
}
function Gt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (A0(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (ts(r, ""), (i.flags &= -33));
          var s = np(t);
          Ku(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = np(t);
          Gu(t, a, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      Te(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function pw(t, e, n) {
  (W = t), I0(t);
}
function I0(t, e, n) {
  for (var i = (t.mode & 1) !== 0; W !== null; ) {
    var r = W,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || eo;
      if (!o) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || Ze;
        a = eo;
        var u = Ze;
        if (((eo = o), (Ze = l) && !u))
          for (W = r; W !== null; )
            (o = W),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? op(r)
                : l !== null
                ? ((l.return = o), (W = l))
                : op(r);
        for (; s !== null; ) (W = s), I0(s), (s = s.sibling);
        (W = r), (eo = a), (Ze = u);
      }
      rp(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (W = s)) : rp(t);
  }
}
function rp(t) {
  for (; W !== null; ) {
    var e = W;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Ca(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Ze)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : jt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && Bf(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Bf(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ss(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Ze || (e.flags & 512 && Xu(e));
      } catch (f) {
        Te(e, e.return, f);
      }
    }
    if (e === t) {
      W = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (W = n);
      break;
    }
    W = e.return;
  }
}
function sp(t) {
  for (; W !== null; ) {
    var e = W;
    if (e === t) {
      W = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (W = n);
      break;
    }
    W = e.return;
  }
}
function op(t) {
  for (; W !== null; ) {
    var e = W;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Ca(4, e);
          } catch (l) {
            Te(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              Te(e, r, l);
            }
          }
          var s = e.return;
          try {
            Xu(e);
          } catch (l) {
            Te(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Xu(e);
          } catch (l) {
            Te(e, o, l);
          }
      }
    } catch (l) {
      Te(e, e.return, l);
    }
    if (e === t) {
      W = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (W = a);
      break;
    }
    W = e.return;
  }
}
var hw = Math.ceil,
  Jo = _n.ReactCurrentDispatcher,
  td = _n.ReactCurrentOwner,
  Mt = _n.ReactCurrentBatchConfig,
  re = 0,
  He = null,
  Le = null,
  Ue = 0,
  gt = 0,
  Ni = Zn(0),
  $e = 0,
  gs = null,
  hi = 0,
  Ea = 0,
  nd = 0,
  Ur = null,
  at = null,
  id = 0,
  ir = 1 / 0,
  dn = null,
  ea = !1,
  Yu = null,
  Vn = null,
  to = !1,
  Ln = null,
  ta = 0,
  Xr = 0,
  Qu = null,
  wo = -1,
  bo = 0;
function nt() {
  return re & 6 ? Me() : wo !== -1 ? wo : (wo = Me());
}
function qn(t) {
  return t.mode & 1
    ? re & 2 && Ue !== 0
      ? Ue & -Ue
      : Q1.transition !== null
      ? (bo === 0 && (bo = gm()), bo)
      : ((t = ce),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : km(t.type))),
        t)
    : 1;
}
function Ht(t, e, n, i) {
  if (50 < Xr) throw ((Xr = 0), (Qu = null), Error(D(185)));
  Es(t, n, i),
    (!(re & 2) || t !== He) &&
      (t === He && (!(re & 2) && (Ea |= n), $e === 4 && On(t, Ue)),
      ft(t, i),
      n === 1 && re === 0 && !(e.mode & 1) && ((ir = Me() + 500), Sa && Jn()));
}
function ft(t, e) {
  var n = t.callbackNode;
  Qv(t, e);
  var i = jo(t, t === He ? Ue : 0);
  if (i === 0)
    n !== null && mf(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && mf(n), e === 1))
      t.tag === 0 ? Y1(ap.bind(null, t)) : Hm(ap.bind(null, t)),
        U1(function () {
          !(re & 6) && Jn();
        }),
        (n = null);
    else {
      switch (ym(i)) {
        case 1:
          n = zc;
          break;
        case 4:
          n = hm;
          break;
        case 16:
          n = $o;
          break;
        case 536870912:
          n = mm;
          break;
        default:
          n = $o;
      }
      n = B0(n, R0.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function R0(t, e) {
  if (((wo = -1), (bo = 0), re & 6)) throw Error(D(327));
  var n = t.callbackNode;
  if (Xi() && t.callbackNode !== n) return null;
  var i = jo(t, t === He ? Ue : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = na(t, i);
  else {
    e = i;
    var r = re;
    re |= 2;
    var s = D0();
    (He !== t || Ue !== e) && ((dn = null), (ir = Me() + 500), oi(t, e));
    do
      try {
        yw();
        break;
      } catch (a) {
        L0(t, a);
      }
    while (1);
    Hc(),
      (Jo.current = s),
      (re = r),
      Le !== null ? (e = 0) : ((He = null), (Ue = 0), (e = $e));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = _u(t)), r !== 0 && ((i = r), (e = Zu(t, r)))), e === 1)
    )
      throw ((n = gs), oi(t, 0), On(t, i), ft(t, Me()), n);
    if (e === 6) On(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !mw(r) &&
          ((e = na(t, i)),
          e === 2 && ((s = _u(t)), s !== 0 && ((i = s), (e = Zu(t, s)))),
          e === 1))
      )
        throw ((n = gs), oi(t, 0), On(t, i), ft(t, Me()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          ti(t, at, dn);
          break;
        case 3:
          if (
            (On(t, i), (i & 130023424) === i && ((e = id + 500 - Me()), 10 < e))
          ) {
            if (jo(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              nt(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = Ou(ti.bind(null, t, at, dn), e);
            break;
          }
          ti(t, at, dn);
          break;
        case 4:
          if ((On(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - Bt(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = Me() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * hw(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = Ou(ti.bind(null, t, at, dn), i);
            break;
          }
          ti(t, at, dn);
          break;
        case 5:
          ti(t, at, dn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return ft(t, Me()), t.callbackNode === n ? R0.bind(null, t) : null;
}
function Zu(t, e) {
  var n = Ur;
  return (
    t.current.memoizedState.isDehydrated && (oi(t, e).flags |= 256),
    (t = na(t, e)),
    t !== 2 && ((e = at), (at = n), e !== null && Ju(e)),
    t
  );
}
function Ju(t) {
  at === null ? (at = t) : at.push.apply(at, t);
}
function mw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Vt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function On(t, e) {
  for (
    e &= ~nd,
      e &= ~Ea,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Bt(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function ap(t) {
  if (re & 6) throw Error(D(327));
  Xi();
  var e = jo(t, 0);
  if (!(e & 1)) return ft(t, Me()), null;
  var n = na(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = _u(t);
    i !== 0 && ((e = i), (n = Zu(t, i)));
  }
  if (n === 1) throw ((n = gs), oi(t, 0), On(t, e), ft(t, Me()), n);
  if (n === 6) throw Error(D(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    ti(t, at, dn),
    ft(t, Me()),
    null
  );
}
function rd(t, e) {
  var n = re;
  re |= 1;
  try {
    return t(e);
  } finally {
    (re = n), re === 0 && ((ir = Me() + 500), Sa && Jn());
  }
}
function mi(t) {
  Ln !== null && Ln.tag === 0 && !(re & 6) && Xi();
  var e = re;
  re |= 1;
  var n = Mt.transition,
    i = ce;
  try {
    if (((Mt.transition = null), (ce = 1), t)) return t();
  } finally {
    (ce = i), (Mt.transition = n), (re = e), !(re & 6) && Jn();
  }
}
function sd() {
  (gt = Ni.current), ge(Ni);
}
function oi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), q1(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var i = n;
      switch ((Fc(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Wo();
          break;
        case 3:
          tr(), ge(ct), ge(et), Gc();
          break;
        case 5:
          Xc(i);
          break;
        case 4:
          tr();
          break;
        case 13:
          ge(Se);
          break;
        case 19:
          ge(Se);
          break;
        case 10:
          Wc(i.type._context);
          break;
        case 22:
        case 23:
          sd();
      }
      n = n.return;
    }
  if (
    ((He = t),
    (Le = t = Un(t.current, null)),
    (Ue = gt = e),
    ($e = 0),
    (gs = null),
    (nd = Ea = hi = 0),
    (at = Ur = null),
    ii !== null)
  ) {
    for (e = 0; e < ii.length; e++)
      if (((n = ii[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    ii = null;
  }
  return t;
}
function L0(t, e) {
  do {
    var n = Le;
    try {
      if ((Hc(), (go.current = Zo), Qo)) {
        for (var i = ke.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Qo = !1;
      }
      if (
        ((pi = 0),
        (Fe = De = ke = null),
        (Vr = !1),
        (ps = 0),
        (td.current = null),
        n === null || n.return === null)
      ) {
        ($e = 1), (gs = e), (Le = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = Ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Gf(o);
          if (p !== null) {
            (p.flags &= -257),
              Kf(p, o, a, s, e),
              p.mode & 1 && Xf(s, u, e),
              (e = p),
              (l = u);
            var g = e.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(l), (e.updateQueue = m);
            } else g.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Xf(s, u, e), od();
              break e;
            }
            l = Error(D(426));
          }
        } else if (be && a.mode & 1) {
          var b = Gf(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Kf(b, o, a, s, e),
              Nc(nr(l, a));
            break e;
          }
        }
        (s = l = nr(l, a)),
          $e !== 4 && ($e = 2),
          Ur === null ? (Ur = [s]) : Ur.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var y = v0(s, l, e);
              Nf(s, y);
              break e;
            case 1:
              a = l;
              var h = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Vn === null || !Vn.has(v))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var w = w0(s, a, e);
                Nf(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      j0(n);
    } catch (x) {
      (e = x), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function D0() {
  var t = Jo.current;
  return (Jo.current = Zo), t === null ? Zo : t;
}
function od() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    He === null || (!(hi & 268435455) && !(Ea & 268435455)) || On(He, Ue);
}
function na(t, e) {
  var n = re;
  re |= 2;
  var i = D0();
  (He !== t || Ue !== e) && ((dn = null), oi(t, e));
  do
    try {
      gw();
      break;
    } catch (r) {
      L0(t, r);
    }
  while (1);
  if ((Hc(), (re = n), (Jo.current = i), Le !== null)) throw Error(D(261));
  return (He = null), (Ue = 0), $e;
}
function gw() {
  for (; Le !== null; ) $0(Le);
}
function yw() {
  for (; Le !== null && !Hv(); ) $0(Le);
}
function $0(t) {
  var e = N0(t.alternate, t, gt);
  (t.memoizedProps = t.pendingProps),
    e === null ? j0(t) : (Le = e),
    (td.current = null);
}
function j0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = cw(n, e)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        ($e = 6), (Le = null);
        return;
      }
    } else if (((n = uw(n, e, gt)), n !== null)) {
      Le = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Le = e;
      return;
    }
    Le = e = t;
  } while (e !== null);
  $e === 0 && ($e = 5);
}
function ti(t, e, n) {
  var i = ce,
    r = Mt.transition;
  try {
    (Mt.transition = null), (ce = 1), vw(t, e, n, i);
  } finally {
    (Mt.transition = r), (ce = i);
  }
  return null;
}
function vw(t, e, n, i) {
  do Xi();
  while (Ln !== null);
  if (re & 6) throw Error(D(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(D(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Zv(t, s),
    t === He && ((Le = He = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      to ||
      ((to = !0),
      B0($o, function () {
        return Xi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Mt.transition), (Mt.transition = null);
    var o = ce;
    ce = 1;
    var a = re;
    (re |= 4),
      (td.current = null),
      fw(t, n),
      O0(n, t),
      j1(Au),
      (Fo = !!zu),
      (Au = zu = null),
      (t.current = n),
      pw(n),
      Wv(),
      (re = a),
      (ce = o),
      (Mt.transition = s);
  } else t.current = n;
  if (
    (to && ((to = !1), (Ln = t), (ta = r)),
    (s = t.pendingLanes),
    s === 0 && (Vn = null),
    Uv(n.stateNode),
    ft(t, Me()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (ea) throw ((ea = !1), (t = Yu), (Yu = null), t);
  return (
    ta & 1 && t.tag !== 0 && Xi(),
    (s = t.pendingLanes),
    s & 1 ? (t === Qu ? Xr++ : ((Xr = 0), (Qu = t))) : (Xr = 0),
    Jn(),
    null
  );
}
function Xi() {
  if (Ln !== null) {
    var t = ym(ta),
      e = Mt.transition,
      n = ce;
    try {
      if (((Mt.transition = null), (ce = 16 > t ? 16 : t), Ln === null))
        var i = !1;
      else {
        if (((t = Ln), (Ln = null), (ta = 0), re & 6)) throw Error(D(331));
        var r = re;
        for (re |= 4, W = t.current; W !== null; ) {
          var s = W,
            o = s.child;
          if (W.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (W = u; W !== null; ) {
                  var c = W;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (W = d);
                  else
                    for (; W !== null; ) {
                      c = W;
                      var f = c.sibling,
                        p = c.return;
                      if ((z0(c), c === u)) {
                        W = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (W = f);
                        break;
                      }
                      W = p;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var b = m.sibling;
                    (m.sibling = null), (m = b);
                  } while (m !== null);
                }
              }
              W = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (W = o);
          else
            e: for (; W !== null; ) {
              if (((s = W), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (W = y);
                break e;
              }
              W = s.return;
            }
        }
        var h = t.current;
        for (W = h; W !== null; ) {
          o = W;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (W = v);
          else
            e: for (o = h; W !== null; ) {
              if (((a = W), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ca(9, a);
                  }
                } catch (x) {
                  Te(a, a.return, x);
                }
              if (a === o) {
                W = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (W = w);
                break e;
              }
              W = a.return;
            }
        }
        if (
          ((re = r), Jn(), nn && typeof nn.onPostCommitFiberRoot == "function")
        )
          try {
            nn.onPostCommitFiberRoot(ya, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (ce = n), (Mt.transition = e);
    }
  }
  return !1;
}
function lp(t, e, n) {
  (e = nr(n, e)),
    (e = v0(t, e, 1)),
    (t = Wn(t, e, 1)),
    (e = nt()),
    t !== null && (Es(t, 1, e), ft(t, e));
}
function Te(t, e, n) {
  if (t.tag === 3) lp(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        lp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Vn === null || !Vn.has(i)))
        ) {
          (t = nr(n, t)),
            (t = w0(e, t, 1)),
            (e = Wn(e, t, 1)),
            (t = nt()),
            e !== null && (Es(e, 1, t), ft(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function ww(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = nt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    He === t &&
      (Ue & n) === n &&
      ($e === 4 || ($e === 3 && (Ue & 130023424) === Ue && 500 > Me() - id)
        ? oi(t, 0)
        : (nd |= n)),
    ft(t, e);
}
function F0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = qs), (qs <<= 1), !(qs & 130023424) && (qs = 4194304))
      : (e = 1));
  var n = nt();
  (t = bn(t, e)), t !== null && (Es(t, e, n), ft(t, n));
}
function bw(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), F0(t, n);
}
function xw(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  i !== null && i.delete(e), F0(t, n);
}
var N0;
N0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ct.current) lt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (lt = !1), lw(t, e, n);
      lt = !!(t.flags & 131072);
    }
  else (lt = !1), be && e.flags & 1048576 && Wm(e, Uo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      vo(t, e), (t = e.pendingProps);
      var r = Zi(e, et.current);
      Ui(e, n), (r = Yc(null, e, i, t, r, n));
      var s = Qc();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            dt(i) ? ((s = !0), Vo(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            qc(e),
            (r.updater = ka),
            (e.stateNode = r),
            (r._reactInternals = e),
            Fu(e, i, t, n),
            (e = Hu(null, e, i, !0, s, n)))
          : ((e.tag = 0), be && s && jc(e), tt(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (vo(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = kw(i)),
          (t = jt(i, t)),
          r)
        ) {
          case 0:
            e = Bu(null, e, i, t, n);
            break e;
          case 1:
            e = Zf(null, e, i, t, n);
            break e;
          case 11:
            e = Yf(null, e, i, t, n);
            break e;
          case 14:
            e = Qf(null, e, i, jt(i.type, t), n);
            break e;
        }
        throw Error(D(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : jt(i, r)),
        Bu(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : jt(i, r)),
        Zf(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((k0(e), t === null)) throw Error(D(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          Xm(t, e),
          Ko(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = nr(Error(D(423)), e)), (e = Jf(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = nr(Error(D(424)), e)), (e = Jf(t, e, i, n, r));
            break e;
          } else
            for (
              wt = Hn(e.stateNode.containerInfo.firstChild),
                bt = e,
                be = !0,
                Nt = null,
                n = Qm(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ji(), i === r)) {
            e = xn(t, e, n);
            break e;
          }
          tt(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Zm(e),
        t === null && Du(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        Mu(i, r) ? (o = null) : s !== null && Mu(i, s) && (e.flags |= 32),
        S0(t, e),
        tt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Du(e), null;
    case 13:
      return _0(t, e, n);
    case 4:
      return (
        Uc(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = er(e, null, i, n)) : tt(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : jt(i, r)),
        Yf(t, e, i, r, n)
      );
    case 7:
      return tt(t, e, e.pendingProps, n), e.child;
    case 8:
      return tt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return tt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          pe(Xo, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (Vt(s.value, o)) {
            if (s.children === r.children && !ct.current) {
              e = xn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (s.tag === 1) {
                      (l = gn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      $u(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(D(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  $u(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        tt(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        Ui(e, n),
        (r = It(r)),
        (i = i(r)),
        (e.flags |= 1),
        tt(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = jt(i, e.pendingProps)),
        (r = jt(i.type, r)),
        Qf(t, e, i, r, n)
      );
    case 15:
      return b0(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : jt(i, r)),
        vo(t, e),
        (e.tag = 1),
        dt(i) ? ((t = !0), Vo(e)) : (t = !1),
        Ui(e, n),
        Km(e, i, r),
        Fu(e, i, r, n),
        Hu(null, e, i, !0, t, n)
      );
    case 19:
      return C0(t, e, n);
    case 22:
      return x0(t, e, n);
  }
  throw Error(D(156, e.tag));
};
function B0(t, e) {
  return pm(t, e);
}
function Sw(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function At(t, e, n, i) {
  return new Sw(t, e, n, i);
}
function ad(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function kw(t) {
  if (typeof t == "function") return ad(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Ec)) return 11;
    if (t === Pc) return 14;
  }
  return 2;
}
function Un(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = At(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function xo(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) ad(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Ai:
        return ai(n.children, r, s, e);
      case Cc:
        (o = 8), (r |= 8);
        break;
      case uu:
        return (
          (t = At(12, n, e, r | 2)), (t.elementType = uu), (t.lanes = s), t
        );
      case cu:
        return (t = At(13, n, e, r)), (t.elementType = cu), (t.lanes = s), t;
      case du:
        return (t = At(19, n, e, r)), (t.elementType = du), (t.lanes = s), t;
      case Yh:
        return Pa(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Gh:
              o = 10;
              break e;
            case Kh:
              o = 9;
              break e;
            case Ec:
              o = 11;
              break e;
            case Pc:
              o = 14;
              break e;
            case zn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(D(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = At(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function ai(t, e, n, i) {
  return (t = At(7, t, i, e)), (t.lanes = n), t;
}
function Pa(t, e, n, i) {
  return (
    (t = At(22, t, i, e)),
    (t.elementType = Yh),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function El(t, e, n) {
  return (t = At(6, t, null, e)), (t.lanes = n), t;
}
function Pl(t, e, n) {
  return (
    (e = At(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function _w(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = al(0)),
    (this.expirationTimes = al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = al(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function ld(t, e, n, i, r, s, o, a, l) {
  return (
    (t = new _w(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = At(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qc(s),
    t
  );
}
function Cw(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zi,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function H0(t) {
  if (!t) return Gn;
  t = t._reactInternals;
  e: {
    if (wi(t) !== t || t.tag !== 1) throw Error(D(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (dt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(D(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (dt(n)) return Bm(t, n, e);
  }
  return e;
}
function W0(t, e, n, i, r, s, o, a, l) {
  return (
    (t = ld(n, i, !0, t, r, s, o, a, l)),
    (t.context = H0(null)),
    (n = t.current),
    (i = nt()),
    (r = qn(n)),
    (s = gn(i, r)),
    (s.callback = e ?? null),
    Wn(n, s, r),
    (t.current.lanes = r),
    Es(t, r, i),
    ft(t, i),
    t
  );
}
function Ta(t, e, n, i) {
  var r = e.current,
    s = nt(),
    o = qn(r);
  return (
    (n = H0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = gn(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = Wn(r, e, o)),
    t !== null && (Ht(t, r, o, s), mo(t, r, o)),
    o
  );
}
function ia(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function up(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function ud(t, e) {
  up(t, e), (t = t.alternate) && up(t, e);
}
function Ew() {
  return null;
}
var V0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function cd(t) {
  this._internalRoot = t;
}
za.prototype.render = cd.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(D(409));
  Ta(t, e, null, null);
};
za.prototype.unmount = cd.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    mi(function () {
      Ta(null, t, null, null);
    }),
      (e[wn] = null);
  }
};
function za(t) {
  this._internalRoot = t;
}
za.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = bm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Mn.length && e !== 0 && e < Mn[n].priority; n++);
    Mn.splice(n, 0, t), n === 0 && Sm(t);
  }
};
function dd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Aa(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function cp() {}
function Pw(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ia(o);
        s.call(u);
      };
    }
    var o = W0(e, i, t, 0, null, !1, !1, "", cp);
    return (
      (t._reactRootContainer = o),
      (t[wn] = o.current),
      ls(t.nodeType === 8 ? t.parentNode : t),
      mi(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var u = ia(l);
      a.call(u);
    };
  }
  var l = ld(t, 0, !1, null, null, !1, !1, "", cp);
  return (
    (t._reactRootContainer = l),
    (t[wn] = l.current),
    ls(t.nodeType === 8 ? t.parentNode : t),
    mi(function () {
      Ta(e, l, n, i);
    }),
    l
  );
}
function Ma(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = ia(o);
        a.call(l);
      };
    }
    Ta(e, o, t, r);
  } else o = Pw(n, e, t, r, i);
  return ia(o);
}
vm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Dr(e.pendingLanes);
        n !== 0 &&
          (Ac(e, n | 1), ft(e, Me()), !(re & 6) && ((ir = Me() + 500), Jn()));
      }
      break;
    case 13:
      mi(function () {
        var i = bn(t, 1);
        if (i !== null) {
          var r = nt();
          Ht(i, t, 1, r);
        }
      }),
        ud(t, 1);
  }
};
Mc = function (t) {
  if (t.tag === 13) {
    var e = bn(t, 134217728);
    if (e !== null) {
      var n = nt();
      Ht(e, t, 134217728, n);
    }
    ud(t, 134217728);
  }
};
wm = function (t) {
  if (t.tag === 13) {
    var e = qn(t),
      n = bn(t, e);
    if (n !== null) {
      var i = nt();
      Ht(n, t, e, i);
    }
    ud(t, e);
  }
};
bm = function () {
  return ce;
};
xm = function (t, e) {
  var n = ce;
  try {
    return (ce = t), e();
  } finally {
    ce = n;
  }
};
xu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((hu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = xa(i);
            if (!r) throw Error(D(90));
            Zh(i), hu(i, r);
          }
        }
      }
      break;
    case "textarea":
      em(t, n);
      break;
    case "select":
      (e = n.value), e != null && Hi(t, !!n.multiple, e, !1);
  }
};
am = rd;
lm = mi;
var Tw = { usingClientEntryPoint: !1, Events: [Ts, Ri, xa, sm, om, rd] },
  zr = {
    findFiberByHostInstance: ni,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zw = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = dm(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Ew,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var no = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!no.isDisabled && no.supportsFiber)
    try {
      (ya = no.inject(zw)), (nn = no);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
_t.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(e)) throw Error(D(200));
  return Cw(t, e, null, n);
};
_t.createRoot = function (t, e) {
  if (!dd(t)) throw Error(D(299));
  var n = !1,
    i = "",
    r = V0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = ld(t, 1, !1, null, null, n, !1, i, r)),
    (t[wn] = e.current),
    ls(t.nodeType === 8 ? t.parentNode : t),
    new cd(e)
  );
};
_t.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(D(188))
      : ((t = Object.keys(t).join(",")), Error(D(268, t)));
  return (t = dm(e)), (t = t === null ? null : t.stateNode), t;
};
_t.flushSync = function (t) {
  return mi(t);
};
_t.hydrate = function (t, e, n) {
  if (!Aa(e)) throw Error(D(200));
  return Ma(null, t, e, !0, n);
};
_t.hydrateRoot = function (t, e, n) {
  if (!dd(t)) throw Error(D(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = V0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = W0(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[wn] = e.current),
    ls(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new za(e);
};
_t.render = function (t, e, n) {
  if (!Aa(e)) throw Error(D(200));
  return Ma(null, t, e, !1, n);
};
_t.unmountComponentAtNode = function (t) {
  if (!Aa(t)) throw Error(D(40));
  return t._reactRootContainer
    ? (mi(function () {
        Ma(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[wn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = rd;
_t.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Aa(n)) throw Error(D(200));
  if (t == null || t._reactInternals === void 0) throw Error(D(38));
  return Ma(t, e, n, !1, i);
};
_t.version = "18.2.0-next-9e3b772b8-20220608";
function q0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0);
    } catch (t) {
      console.error(t);
    }
}
q0(), (Wh.exports = _t);
var Aw = Wh.exports,
  dp = Aw;
(au.createRoot = dp.createRoot), (au.hydrateRoot = dp.hydrateRoot);
var ut = function () {
  return (
    (ut =
      Object.assign ||
      function (e) {
        for (var n, i = 1, r = arguments.length; i < r; i++) {
          n = arguments[i];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
        }
        return e;
      }),
    ut.apply(this, arguments)
  );
};
function ra(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]));
  return t.concat(s || Array.prototype.slice.call(e));
}
function U0(t) {
  var e = Object.create(null);
  return function (n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var Mw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ow = U0(function (t) {
    return (
      Mw.test(t) ||
      (t.charCodeAt(0) === 111 &&
        t.charCodeAt(1) === 110 &&
        t.charCodeAt(2) < 91)
    );
  }),
  me = "-ms-",
  Gr = "-moz-",
  ae = "-webkit-",
  X0 = "comm",
  Oa = "rule",
  fd = "decl",
  Iw = "@import",
  G0 = "@keyframes",
  Rw = "@layer",
  Lw = Math.abs,
  pd = String.fromCharCode,
  ec = Object.assign;
function Dw(t, e) {
  return Ne(t, 0) ^ 45
    ? (((((((e << 2) ^ Ne(t, 0)) << 2) ^ Ne(t, 1)) << 2) ^ Ne(t, 2)) << 2) ^
        Ne(t, 3)
    : 0;
}
function K0(t) {
  return t.trim();
}
function fn(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function Z(t, e, n) {
  return t.replace(e, n);
}
function So(t, e) {
  return t.indexOf(e);
}
function Ne(t, e) {
  return t.charCodeAt(e) | 0;
}
function rr(t, e, n) {
  return t.slice(e, n);
}
function Yt(t) {
  return t.length;
}
function Y0(t) {
  return t.length;
}
function jr(t, e) {
  return e.push(t), t;
}
function $w(t, e) {
  return t.map(e).join("");
}
function fp(t, e) {
  return t.filter(function (n) {
    return !fn(n, e);
  });
}
var Ia = 1,
  sr = 1,
  Q0 = 0,
  Lt = 0,
  Ie = 0,
  br = "";
function Ra(t, e, n, i, r, s, o, a) {
  return {
    value: t,
    root: e,
    parent: n,
    type: i,
    props: r,
    children: s,
    line: Ia,
    column: sr,
    length: o,
    return: "",
    siblings: a,
  };
}
function Tn(t, e) {
  return ec(
    Ra("", null, null, "", null, null, 0, t.siblings),
    t,
    { length: -t.length },
    e,
  );
}
function xi(t) {
  for (; t.root; ) t = Tn(t.root, { children: [t] });
  jr(t, t.siblings);
}
function jw() {
  return Ie;
}
function Fw() {
  return (
    (Ie = Lt > 0 ? Ne(br, --Lt) : 0), sr--, Ie === 10 && ((sr = 1), Ia--), Ie
  );
}
function Wt() {
  return (
    (Ie = Lt < Q0 ? Ne(br, Lt++) : 0), sr++, Ie === 10 && ((sr = 1), Ia++), Ie
  );
}
function li() {
  return Ne(br, Lt);
}
function ko() {
  return Lt;
}
function La(t, e) {
  return rr(br, t, e);
}
function tc(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nw(t) {
  return (Ia = sr = 1), (Q0 = Yt((br = t))), (Lt = 0), [];
}
function Bw(t) {
  return (br = ""), t;
}
function Tl(t) {
  return K0(La(Lt - 1, nc(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Hw(t) {
  for (; (Ie = li()) && Ie < 33; ) Wt();
  return tc(t) > 2 || tc(Ie) > 3 ? "" : " ";
}
function Ww(t, e) {
  for (
    ;
    --e &&
    Wt() &&
    !(Ie < 48 || Ie > 102 || (Ie > 57 && Ie < 65) || (Ie > 70 && Ie < 97));

  );
  return La(t, ko() + (e < 6 && li() == 32 && Wt() == 32));
}
function nc(t) {
  for (; Wt(); )
    switch (Ie) {
      case t:
        return Lt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && nc(Ie);
        break;
      case 40:
        t === 41 && nc(t);
        break;
      case 92:
        Wt();
        break;
    }
  return Lt;
}
function Vw(t, e) {
  for (; Wt() && t + Ie !== 47 + 10; )
    if (t + Ie === 42 + 42 && li() === 47) break;
  return "/*" + La(e, Lt - 1) + "*" + pd(t === 47 ? t : Wt());
}
function qw(t) {
  for (; !tc(li()); ) Wt();
  return La(t, Lt);
}
function Uw(t) {
  return Bw(_o("", null, null, null, [""], (t = Nw(t)), 0, [0], t));
}
function _o(t, e, n, i, r, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      d = o,
      f = 0,
      p = 0,
      g = 0,
      m = 1,
      b = 1,
      y = 1,
      h = 0,
      v = "",
      w = r,
      x = s,
      k = i,
      S = v;
    b;

  )
    switch (((g = h), (h = Wt()))) {
      case 40:
        if (g != 108 && Ne(S, d - 1) == 58) {
          So((S += Z(Tl(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Tl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Hw(g);
        break;
      case 92:
        S += Ww(ko() - 1, 7);
        continue;
      case 47:
        switch (li()) {
          case 42:
          case 47:
            jr(Xw(Vw(Wt(), ko()), e, n, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        a[u++] = Yt(S) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            y == -1 && (S = Z(S, /\f/g, "")),
              p > 0 &&
                Yt(S) - d &&
                jr(
                  p > 32
                    ? hp(S + ";", i, n, d - 1, l)
                    : hp(Z(S, " ", "") + ";", i, n, d - 2, l),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (jr(
                (k = pp(S, e, n, u, c, r, a, v, (w = []), (x = []), d, s)),
                s,
              ),
              h === 123)
            )
              if (c === 0) _o(S, e, k, k, w, s, d, a, x);
              else
                switch (f === 99 && Ne(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(
                      t,
                      k,
                      k,
                      i && jr(pp(t, k, k, 0, 0, r, a, v, r, (w = []), d, x), x),
                      r,
                      x,
                      d,
                      a,
                      i ? w : x,
                    );
                    break;
                  default:
                    _o(S, k, k, k, [""], x, 0, a, x);
                }
        }
        (u = c = p = 0), (m = y = 1), (v = S = ""), (d = o);
        break;
      case 58:
        (d = 1 + Yt(S)), (p = g);
      default:
        if (m < 1) {
          if (h == 123) --m;
          else if (h == 125 && m++ == 0 && Fw() == 125) continue;
        }
        switch (((S += pd(h)), h * m)) {
          case 38:
            y = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Yt(S) - 1) * y), (y = 1);
            break;
          case 64:
            li() === 45 && (S += Tl(Wt())),
              (f = li()),
              (c = d = Yt((v = S += qw(ko())))),
              h++;
            break;
          case 45:
            g === 45 && Yt(S) == 2 && (m = 0);
        }
    }
  return s;
}
function pp(t, e, n, i, r, s, o, a, l, u, c, d) {
  for (
    var f = r - 1, p = r === 0 ? s : [""], g = Y0(p), m = 0, b = 0, y = 0;
    m < i;
    ++m
  )
    for (var h = 0, v = rr(t, f + 1, (f = Lw((b = o[m])))), w = t; h < g; ++h)
      (w = K0(b > 0 ? p[h] + " " + v : Z(v, /&\f/g, p[h]))) && (l[y++] = w);
  return Ra(t, e, n, r === 0 ? Oa : a, l, u, c, d);
}
function Xw(t, e, n, i) {
  return Ra(t, e, n, X0, pd(jw()), rr(t, 2, -2), 0, i);
}
function hp(t, e, n, i, r) {
  return Ra(t, e, n, fd, rr(t, 0, i), rr(t, i + 1, -1), i, r);
}
function Z0(t, e, n) {
  switch (Dw(t, e)) {
    case 5103:
      return ae + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + t + t;
    case 4789:
      return Gr + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + t + Gr + t + me + t + t;
    case 5936:
      switch (Ne(t, e + 11)) {
        case 114:
          return ae + t + me + Z(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return ae + t + me + Z(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return ae + t + me + Z(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + t + me + t + t;
    case 6165:
      return ae + t + me + "flex-" + t + t;
    case 5187:
      return (
        ae + t + Z(t, /(\w+).+(:[^]+)/, ae + "box-$1$2" + me + "flex-$1$2") + t
      );
    case 5443:
      return (
        ae +
        t +
        me +
        "flex-item-" +
        Z(t, /flex-|-self/g, "") +
        (fn(t, /flex-|baseline/)
          ? ""
          : me + "grid-row-" + Z(t, /flex-|-self/g, "")) +
        t
      );
    case 4675:
      return (
        ae +
        t +
        me +
        "flex-line-pack" +
        Z(t, /align-content|flex-|-self/g, "") +
        t
      );
    case 5548:
      return ae + t + me + Z(t, "shrink", "negative") + t;
    case 5292:
      return ae + t + me + Z(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        ae +
        "box-" +
        Z(t, "-grow", "") +
        ae +
        t +
        me +
        Z(t, "grow", "positive") +
        t
      );
    case 4554:
      return ae + Z(t, /([^-])(transform)/g, "$1" + ae + "$2") + t;
    case 6187:
      return (
        Z(Z(Z(t, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), t, "") +
        t
      );
    case 5495:
    case 3959:
      return Z(t, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(t, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ae +
        t +
        t
      );
    case 4200:
      if (!fn(t, /flex-|baseline/))
        return me + "grid-column-align" + rr(t, e) + t;
      break;
    case 2592:
    case 3360:
      return me + Z(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n &&
        n.some(function (i, r) {
          return (e = r), fn(i.props, /grid-\w+-end/);
        })
        ? ~So(t + (n = n[e].value), "span")
          ? t
          : me +
            Z(t, "-start", "") +
            t +
            me +
            "grid-row-span:" +
            (~So(n, "span") ? fn(n, /\d+/) : +fn(n, /\d+/) - +fn(t, /\d+/)) +
            ";"
        : me + Z(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n &&
        n.some(function (i) {
          return fn(i.props, /grid-\w+-start/);
        })
        ? t
        : me + Z(Z(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(t, /(.+)-inline(.+)/, ae + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Yt(t) - 1 - e > 6)
        switch (Ne(t, e + 1)) {
          case 109:
            if (Ne(t, e + 4) !== 45) break;
          case 102:
            return (
              Z(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ae +
                  "$2-$3$1" +
                  Gr +
                  (Ne(t, e + 3) == 108 ? "$3" : "$2-$3"),
              ) + t
            );
          case 115:
            return ~So(t, "stretch")
              ? Z0(Z(t, "stretch", "fill-available"), e, n) + t
              : t;
        }
      break;
    case 5152:
    case 5920:
      return Z(
        t,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (i, r, s, o, a, l, u) {
          return (
            me +
            r +
            ":" +
            s +
            u +
            (o ? me + r + "-span:" + (a ? l : +l - +s) + u : "") +
            t
          );
        },
      );
    case 4949:
      if (Ne(t, e + 6) === 121) return Z(t, ":", ":" + ae) + t;
      break;
    case 6444:
      switch (Ne(t, Ne(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Z(
              t,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ae +
                (Ne(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ae +
                "$2$3$1" +
                me +
                "$2box$3",
            ) + t
          );
        case 100:
          return Z(t, ":", ":" + me) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Z(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function sa(t, e) {
  for (var n = "", i = 0; i < t.length; i++) n += e(t[i], i, t, e) || "";
  return n;
}
function Gw(t, e, n, i) {
  switch (t.type) {
    case Rw:
      if (t.children.length) break;
    case Iw:
    case fd:
      return (t.return = t.return || t.value);
    case X0:
      return "";
    case G0:
      return (t.return = t.value + "{" + sa(t.children, i) + "}");
    case Oa:
      if (!Yt((t.value = t.props.join(",")))) return "";
  }
  return Yt((n = sa(t.children, i)))
    ? (t.return = t.value + "{" + n + "}")
    : "";
}
function Kw(t) {
  var e = Y0(t);
  return function (n, i, r, s) {
    for (var o = "", a = 0; a < e; a++) o += t[a](n, i, r, s) || "";
    return o;
  };
}
function Yw(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
function Qw(t, e, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fd:
        t.return = Z0(t.value, t.length, n);
        return;
      case G0:
        return sa([Tn(t, { value: Z(t.value, "@", "@" + ae) })], i);
      case Oa:
        if (t.length)
          return $w((n = t.props), function (r) {
            switch (fn(r, (i = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                xi(Tn(t, { props: [Z(r, /:(read-\w+)/, ":" + Gr + "$1")] })),
                  xi(Tn(t, { props: [r] })),
                  ec(t, { props: fp(n, i) });
                break;
              case "::placeholder":
                xi(
                  Tn(t, { props: [Z(r, /:(plac\w+)/, ":" + ae + "input-$1")] }),
                ),
                  xi(Tn(t, { props: [Z(r, /:(plac\w+)/, ":" + Gr + "$1")] })),
                  xi(Tn(t, { props: [Z(r, /:(plac\w+)/, me + "input-$1")] })),
                  xi(Tn(t, { props: [r] })),
                  ec(t, { props: fp(n, i) });
                break;
            }
            return "";
          });
    }
}
var J0 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  or =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  hd = typeof window < "u" && "HTMLElement" in window,
  Zw = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Da = Object.freeze([]),
  ar = Object.freeze({});
function Jw(t, e, n) {
  return (
    n === void 0 && (n = ar), (t.theme !== n.theme && t.theme) || e || n.theme
  );
}
var eg = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  eb = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  tb = /(^-|-$)/g;
function mp(t) {
  return t.replace(eb, "-").replace(tb, "");
}
var nb = /(a)(d)/gi,
  gp = function (t) {
    return String.fromCharCode(t + (t > 25 ? 39 : 97));
  };
function ic(t) {
  var e,
    n = "";
  for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = gp(e % 52) + n;
  return (gp(e % 52) + n).replace(nb, "$1-$2");
}
var zl,
  Bi = function (t, e) {
    for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
    return t;
  },
  tg = function (t) {
    return Bi(5381, t);
  };
function ib(t) {
  return ic(tg(t) >>> 0);
}
function rb(t) {
  return t.displayName || t.name || "Component";
}
function Al(t) {
  return typeof t == "string" && !0;
}
var ng = typeof Symbol == "function" && Symbol.for,
  ig = ng ? Symbol.for("react.memo") : 60115,
  sb = ng ? Symbol.for("react.forward_ref") : 60112,
  ob = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ab = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  rg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  lb =
    (((zl = {})[sb] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (zl[ig] = rg),
    zl);
function yp(t) {
  return ("type" in (e = t) && e.type.$$typeof) === ig
    ? rg
    : "$$typeof" in t
    ? lb[t.$$typeof]
    : ob;
  var e;
}
var ub = Object.defineProperty,
  cb = Object.getOwnPropertyNames,
  vp = Object.getOwnPropertySymbols,
  db = Object.getOwnPropertyDescriptor,
  fb = Object.getPrototypeOf,
  wp = Object.prototype;
function sg(t, e, n) {
  if (typeof e != "string") {
    if (wp) {
      var i = fb(e);
      i && i !== wp && sg(t, i, n);
    }
    var r = cb(e);
    vp && (r = r.concat(vp(e)));
    for (var s = yp(t), o = yp(e), a = 0; a < r.length; ++a) {
      var l = r[a];
      if (!(l in ab || (n && n[l]) || (o && l in o) || (s && l in s))) {
        var u = db(e, l);
        try {
          ub(t, l, u);
        } catch {}
      }
    }
  }
  return t;
}
function lr(t) {
  return typeof t == "function";
}
function md(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function si(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function bp(t, e) {
  if (t.length === 0) return "";
  for (var n = t[0], i = 1; i < t.length; i++) n += e ? e + t[i] : t[i];
  return n;
}
function ys(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    t.constructor.name === Object.name &&
    !("props" in t && t.$$typeof)
  );
}
function rc(t, e, n) {
  if ((n === void 0 && (n = !1), !n && !ys(t) && !Array.isArray(t))) return e;
  if (Array.isArray(e))
    for (var i = 0; i < e.length; i++) t[i] = rc(t[i], e[i]);
  else if (ys(e)) for (var i in e) t[i] = rc(t[i], e[i]);
  return t;
}
function gd(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
function As(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(t, " for more information.")
      .concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""),
  );
}
var pb = (function () {
    function t(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    return (
      (t.prototype.indexOfGroup = function (e) {
        for (var n = 0, i = 0; i < e; i++) n += this.groupSizes[i];
        return n;
      }),
      (t.prototype.insertRules = function (e, n) {
        if (e >= this.groupSizes.length) {
          for (var i = this.groupSizes, r = i.length, s = r; e >= s; )
            if ((s <<= 1) < 0) throw As(16, "".concat(e));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(i),
            (this.length = s);
          for (var o = r; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var a = this.indexOfGroup(e + 1), l = ((o = 0), n.length);
          o < l;
          o++
        )
          this.tag.insertRule(a, n[o]) && (this.groupSizes[e]++, a++);
      }),
      (t.prototype.clearGroup = function (e) {
        if (e < this.length) {
          var n = this.groupSizes[e],
            i = this.indexOfGroup(e),
            r = i + n;
          this.groupSizes[e] = 0;
          for (var s = i; s < r; s++) this.tag.deleteRule(i);
        }
      }),
      (t.prototype.getGroup = function (e) {
        var n = "";
        if (e >= this.length || this.groupSizes[e] === 0) return n;
        for (
          var i = this.groupSizes[e],
            r = this.indexOfGroup(e),
            s = r + i,
            o = r;
          o < s;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);
        return n;
      }),
      t
    );
  })(),
  Co = new Map(),
  oa = new Map(),
  Ml = 1,
  io = function (t) {
    if (Co.has(t)) return Co.get(t);
    for (; oa.has(Ml); ) Ml++;
    var e = Ml++;
    return Co.set(t, e), oa.set(e, t), e;
  },
  hb = function (t, e) {
    Co.set(t, e), oa.set(e, t);
  },
  mb = "style["
    .concat(or, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.2", '"]'),
  gb = new RegExp(
    "^".concat(or, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  yb = function (t, e, n) {
    for (var i, r = n.split(","), s = 0, o = r.length; s < o; s++)
      (i = r[s]) && t.registerName(e, i);
  },
  vb = function (t, e) {
    for (
      var n,
        i = ((n = e.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        r = [],
        s = 0,
        o = i.length;
      s < o;
      s++
    ) {
      var a = i[s].trim();
      if (a) {
        var l = a.match(gb);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (hb(c, u), yb(t, c, l[3]), t.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  };
function wb() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var og = function (t) {
    var e = document.head,
      n = t || e,
      i = document.createElement("style"),
      r = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(or, "]")));
        return l[l.length - 1];
      })(n),
      s = r !== void 0 ? r.nextSibling : null;
    i.setAttribute(or, "active"),
      i.setAttribute("data-styled-version", "6.0.2");
    var o = wb();
    return o && i.setAttribute("nonce", o), n.insertBefore(i, s), i;
  },
  bb = (function () {
    function t(e) {
      (this.element = og(e)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var i = document.styleSheets, r = 0, s = i.length; r < s; r++) {
            var o = i[r];
            if (o.ownerNode === n) return o;
          }
          throw As(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (e, n) {
        try {
          return this.sheet.insertRule(n, e), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.prototype.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }),
      (t.prototype.getRule = function (e) {
        var n = this.sheet.cssRules[e];
        return n && n.cssText ? n.cssText : "";
      }),
      t
    );
  })(),
  xb = (function () {
    function t(e) {
      (this.element = og(e)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (e, n) {
        if (e <= this.length && e >= 0) {
          var i = document.createTextNode(n);
          return (
            this.element.insertBefore(i, this.nodes[e] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (t.prototype.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }),
      (t.prototype.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : "";
      }),
      t
    );
  })(),
  Sb = (function () {
    function t(e) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (e, n) {
        return (
          e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0)
        );
      }),
      (t.prototype.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }),
      (t.prototype.getRule = function (e) {
        return e < this.length ? this.rules[e] : "";
      }),
      t
    );
  })(),
  xp = hd,
  kb = { isServer: !hd, useCSSOMInjection: !Zw },
  ag = (function () {
    function t(e, n, i) {
      e === void 0 && (e = ar), n === void 0 && (n = {});
      var r = this;
      (this.options = ut(ut({}, kb), e)),
        (this.gs = n),
        (this.names = new Map(i)),
        (this.server = !!e.isServer),
        !this.server &&
          hd &&
          xp &&
          ((xp = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(mb), a = 0, l = o.length;
              a < l;
              a++
            ) {
              var u = o[a];
              u &&
                u.getAttribute(or) !== "active" &&
                (vb(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        gd(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                l = "",
                u = function (d) {
                  var f = (function (y) {
                    return oa.get(y);
                  })(d);
                  if (f === void 0) return "continue";
                  var p = s.names.get(f),
                    g = o.getGroup(d);
                  if (p === void 0 || g.length === 0) return "continue";
                  var m = ""
                      .concat(or, ".g")
                      .concat(d, '[id="')
                      .concat(f, '"]'),
                    b = "";
                  p !== void 0 &&
                    p.forEach(function (y) {
                      y.length > 0 && (b += "".concat(y, ","));
                    }),
                    (l += "".concat(g).concat(m, '{content:"').concat(b, '"}')
                      .concat(`/*!sc*/
`));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(r);
        });
    }
    return (
      (t.registerId = function (e) {
        return io(e);
      }),
      (t.prototype.reconstructWithOptions = function (e, n) {
        return (
          n === void 0 && (n = !0),
          new t(
            ut(ut({}, this.options), e),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (t.prototype.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (t.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((e = (function (n) {
              var i = n.useCSSOMInjection,
                r = n.target;
              return n.isServer ? new Sb(r) : i ? new bb(r) : new xb(r);
            })(this.options)),
            new pb(e)))
        );
        var e;
      }),
      (t.prototype.hasNameForId = function (e, n) {
        return this.names.has(e) && this.names.get(e).has(n);
      }),
      (t.prototype.registerName = function (e, n) {
        if ((io(e), this.names.has(e))) this.names.get(e).add(n);
        else {
          var i = new Set();
          i.add(n), this.names.set(e, i);
        }
      }),
      (t.prototype.insertRules = function (e, n, i) {
        this.registerName(e, n), this.getTag().insertRules(io(e), i);
      }),
      (t.prototype.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.prototype.clearRules = function (e) {
        this.getTag().clearGroup(io(e)), this.clearNames(e);
      }),
      (t.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      t
    );
  })(),
  _b = /&/g,
  Cb = /^\s*\/\/.*$/gm;
function lg(t, e) {
  return t.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(e, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(e, " "))),
        (n.props = n.props.map(function (i) {
          return "".concat(e, " ").concat(i);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = lg(n.children, e)),
      n
    );
  });
}
function Eb(t) {
  var e,
    n,
    i,
    r = t === void 0 ? ar : t,
    s = r.options,
    o = s === void 0 ? ar : s,
    a = r.plugins,
    l = a === void 0 ? Da : a,
    u = function (f, p, g) {
      return g === n ||
        (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
        ? ".".concat(e)
        : f;
    },
    c = l.slice();
  c.push(function (f) {
    f.type === Oa &&
      f.value.includes("&") &&
      (f.props[0] = f.props[0].replace(_b, n).replace(i, u));
  }),
    o.prefix && c.push(Qw),
    c.push(Gw);
  var d = function (f, p, g, m) {
    p === void 0 && (p = ""),
      g === void 0 && (g = ""),
      m === void 0 && (m = "&"),
      (e = m),
      (n = p),
      (i = new RegExp("\\".concat(n, "\\b"), "g"));
    var b = f.replace(Cb, ""),
      y = Uw(g || p ? "".concat(g, " ").concat(p, " { ").concat(b, " }") : b);
    o.namespace && (y = lg(y, o.namespace));
    var h = [];
    return (
      sa(
        y,
        Kw(
          c.concat(
            Yw(function (v) {
              return h.push(v);
            }),
          ),
        ),
      ),
      h
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (f, p) {
            return p.name || As(15), Bi(f, p.name);
          }, 5381)
          .toString()
      : ""),
    d
  );
}
var Pb = new ag(),
  sc = Eb(),
  ug = de.createContext({
    shouldForwardProp: void 0,
    styleSheet: Pb,
    stylis: sc,
  });
ug.Consumer;
de.createContext(void 0);
function Sp() {
  return j.useContext(ug);
}
var Tb = (function () {
    function t(e, n) {
      var i = this;
      (this.inject = function (r, s) {
        s === void 0 && (s = sc);
        var o = i.name + s.hash;
        r.hasNameForId(i.id, o) ||
          r.insertRules(i.id, o, s(i.rules, o, "@keyframes"));
      }),
        (this.name = e),
        (this.id = "sc-keyframes-".concat(e)),
        (this.rules = n),
        gd(this, function () {
          throw As(12, String(i.name));
        });
    }
    return (
      (t.prototype.getName = function (e) {
        return e === void 0 && (e = sc), this.name + e.hash;
      }),
      t
    );
  })(),
  zb = function (t) {
    return t >= "A" && t <= "Z";
  };
function kp(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var i = t[n];
    if (n === 1 && i === "-" && t[0] === "-") return t;
    zb(i) ? (e += "-" + i.toLowerCase()) : (e += i);
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var cg = function (t) {
    return t == null || t === !1 || t === "";
  },
  dg = function (t) {
    var e,
      n,
      i = [];
    for (var r in t) {
      var s = t[r];
      t.hasOwnProperty(r) &&
        !cg(s) &&
        ((Array.isArray(s) && s.isCss) || lr(s)
          ? i.push("".concat(kp(r), ":"), s, ";")
          : ys(s)
          ? i.push.apply(i, ra(ra(["".concat(r, " {")], dg(s), !1), ["}"], !1))
          : i.push(
              ""
                .concat(kp(r), ": ")
                .concat(
                  ((e = r),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      e in J0 ||
                      e.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";",
                ),
            ));
    }
    return i;
  };
function ui(t, e, n, i) {
  if (cg(t)) return [];
  if (md(t)) return [".".concat(t.styledComponentId)];
  if (lr(t)) {
    if (!lr((s = t)) || (s.prototype && s.prototype.isReactComponent) || !e)
      return [t];
    var r = t(e);
    return ui(r, e, n, i);
  }
  var s;
  return t instanceof Tb
    ? n
      ? (t.inject(n, i), [t.getName(i)])
      : [t]
    : ys(t)
    ? dg(t)
    : Array.isArray(t)
    ? Array.prototype.concat.apply(
        Da,
        t.map(function (o) {
          return ui(o, e, n, i);
        }),
      )
    : [t.toString()];
}
function Ab(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (lr(n) && !md(n)) return !1;
  }
  return !0;
}
var Mb = tg("6.0.2"),
  Ob = (function () {
    function t(e, n, i) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic = (i === void 0 || i.isStatic) && Ab(e)),
        (this.componentId = n),
        (this.baseHash = Bi(Mb, n)),
        (this.baseStyle = i),
        ag.registerId(n);
    }
    return (
      (t.prototype.generateAndInjectStyles = function (e, n, i) {
        var r = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(e, n, i)
          : "";
        if (this.isStatic && !i.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            r = si(r, this.staticRulesId);
          else {
            var s = bp(ui(this.rules, e, n, i)),
              o = ic(Bi(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = i(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (r = si(r, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var l = Bi(this.baseHash, i.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") u += d;
            else if (d) {
              var f = bp(ui(d, e, n, i));
              (l = Bi(l, f)), (u += f);
            }
          }
          if (u) {
            var p = ic(l >>> 0);
            n.hasNameForId(this.componentId, p) ||
              n.insertRules(
                this.componentId,
                p,
                i(u, ".".concat(p), void 0, this.componentId),
              ),
              (r = si(r, p));
          }
        }
        return r;
      }),
      t
    );
  })(),
  fg = de.createContext(void 0);
fg.Consumer;
var Ol = {};
function Ib(t, e, n) {
  var i = md(t),
    r = t,
    s = !Al(t),
    o = e.attrs,
    a = o === void 0 ? Da : o,
    l = e.componentId,
    u =
      l === void 0
        ? (function (v, w) {
            var x = typeof v != "string" ? "sc" : mp(v);
            Ol[x] = (Ol[x] || 0) + 1;
            var k = "".concat(x, "-").concat(ib("6.0.2" + x + Ol[x]));
            return w ? "".concat(w, "-").concat(k) : k;
          })(e.displayName, e.parentComponentId)
        : l,
    c = e.displayName;
  c === void 0 &&
    (function (v) {
      return Al(v) ? "styled.".concat(v) : "Styled(".concat(rb(v), ")");
    })(t);
  var d =
      e.displayName && e.componentId
        ? "".concat(mp(e.displayName), "-").concat(e.componentId)
        : e.componentId || u,
    f = i && r.attrs ? r.attrs.concat(a).filter(Boolean) : a,
    p = e.shouldForwardProp;
  if (i && r.shouldForwardProp) {
    var g = r.shouldForwardProp;
    if (e.shouldForwardProp) {
      var m = e.shouldForwardProp;
      p = function (v, w) {
        return g(v, w) && m(v, w);
      };
    } else p = g;
  }
  var b = new Ob(n, d, i ? r.componentStyle : void 0);
  function y(v, w) {
    return (function (x, k, S) {
      var P = x.attrs,
        E = x.componentStyle,
        A = x.defaultProps,
        _ = x.foldedComponentIds,
        C = x.styledComponentId,
        I = x.target,
        R = de.useContext(fg),
        F = Sp(),
        V = x.shouldForwardProp || F.shouldForwardProp,
        q = (function (ie, z, Ce) {
          for (
            var $, G = ut(ut({}, z), { className: void 0, theme: Ce }), Q = 0;
            Q < ie.length;
            Q += 1
          ) {
            var te = lr(($ = ie[Q])) ? $(G) : $;
            for (var Y in te)
              G[Y] =
                Y === "className"
                  ? si(G[Y], te[Y])
                  : Y === "style"
                  ? ut(ut({}, G[Y]), te[Y])
                  : te[Y];
          }
          return z.className && (G.className = si(G.className, z.className)), G;
        })(P, k, Jw(k, R, A) || ar),
        L = q.as || I,
        M = {};
      for (var O in q)
        q[O] === void 0 ||
          O[0] === "$" ||
          O === "as" ||
          O === "theme" ||
          (O === "forwardedAs"
            ? (M.as = q.forwardedAs)
            : (V && !V(O, L)) || (M[O] = q[O]));
      var B = (function (ie, z) {
          var Ce = Sp(),
            $ = ie.generateAndInjectStyles(z, Ce.styleSheet, Ce.stylis);
          return $;
        })(E, q),
        H = si(_, C);
      return (
        B && (H += " " + B),
        q.className && (H += " " + q.className),
        (M[Al(L) && !eg.has(L) ? "class" : "className"] = H),
        (M.ref = S),
        j.createElement(L, M)
      );
    })(h, v, w);
  }
  var h = de.forwardRef(y);
  return (
    (h.attrs = f),
    (h.componentStyle = b),
    (h.shouldForwardProp = p),
    (h.foldedComponentIds = i
      ? si(r.foldedComponentIds, r.styledComponentId)
      : ""),
    (h.styledComponentId = d),
    (h.target = i ? r.target : t),
    Object.defineProperty(h, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = i
          ? (function (w) {
              for (var x = [], k = 1; k < arguments.length; k++)
                x[k - 1] = arguments[k];
              for (var S = 0, P = x; S < P.length; S++) rc(w, P[S], !0);
              return w;
            })({}, r.defaultProps, v)
          : v;
      },
    }),
    gd(h, function () {
      return ".".concat(h.styledComponentId);
    }),
    s &&
      sg(h, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    h
  );
}
function _p(t, e) {
  for (var n = [t[0]], i = 0, r = e.length; i < r; i += 1)
    n.push(e[i], t[i + 1]);
  return n;
}
var Cp = function (t) {
  return Object.assign(t, { isCss: !0 });
};
function Rb(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (lr(t) || ys(t)) {
    var i = t;
    return Cp(ui(_p(Da, ra([i], e, !0))));
  }
  var r = t;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? ui(r)
    : Cp(ui(_p(r, e)));
}
function oc(t, e, n) {
  if ((n === void 0 && (n = ar), !e)) throw As(1, e);
  var i = function (r) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return t(e, n, Rb.apply(void 0, ra([r], s, !1)));
  };
  return (
    (i.attrs = function (r) {
      return oc(
        t,
        e,
        ut(ut({}, n), {
          attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
        }),
      );
    }),
    (i.withConfig = function (r) {
      return oc(t, e, ut(ut({}, n), r));
    }),
    i
  );
}
var pg = function (t) {
    return oc(Ib, t);
  },
  U = pg;
eg.forEach(function (t) {
  U[t] = pg(t);
});
var hg = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i();
  })(Io, function () {
    return (function (n) {
      function i(s) {
        if (r[s]) return r[s].exports;
        var o = (r[s] = { exports: {}, id: s, loaded: !1 });
        return (
          n[s].call(o.exports, o, o.exports, i), (o.loaded = !0), o.exports
        );
      }
      var r = {};
      return (i.m = n), (i.c = r), (i.p = "dist/"), i(0);
    })([
      function (n, i, r) {
        function s(R) {
          return R && R.__esModule ? R : { default: R };
        }
        var o =
            Object.assign ||
            function (R) {
              for (var F = 1; F < arguments.length; F++) {
                var V = arguments[F];
                for (var q in V)
                  Object.prototype.hasOwnProperty.call(V, q) && (R[q] = V[q]);
              }
              return R;
            },
          a = r(1),
          l = (s(a), r(6)),
          u = s(l),
          c = r(7),
          d = s(c),
          f = r(8),
          p = s(f),
          g = r(9),
          m = s(g),
          b = r(10),
          y = s(b),
          h = r(11),
          v = s(h),
          w = r(14),
          x = s(w),
          k = [],
          S = !1,
          P = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          E = function () {
            var R =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((R && (S = !0), S))
              return (k = (0, v.default)(k, P)), (0, y.default)(k, P.once), k;
          },
          A = function () {
            (k = (0, x.default)()), E();
          },
          _ = function () {
            k.forEach(function (R, F) {
              R.node.removeAttribute("data-aos"),
                R.node.removeAttribute("data-aos-easing"),
                R.node.removeAttribute("data-aos-duration"),
                R.node.removeAttribute("data-aos-delay");
            });
          },
          C = function (R) {
            return (
              R === !0 ||
              (R === "mobile" && m.default.mobile()) ||
              (R === "phone" && m.default.phone()) ||
              (R === "tablet" && m.default.tablet()) ||
              (typeof R == "function" && R() === !0)
            );
          },
          I = function (R) {
            (P = o(P, R)), (k = (0, x.default)());
            var F = document.all && !window.atob;
            return C(P.disable) || F
              ? _()
              : (P.disableMutationObserver ||
                  p.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (P.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", P.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", P.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", P.delay),
                P.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? E(!0)
                  : P.startEvent === "load"
                  ? window.addEventListener(P.startEvent, function () {
                      E(!0);
                    })
                  : document.addEventListener(P.startEvent, function () {
                      E(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, d.default)(E, P.debounceDelay, !0),
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, d.default)(E, P.debounceDelay, !0),
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, y.default)(k, P.once);
                  }, P.throttleDelay),
                ),
                P.disableMutationObserver || p.default.ready("[data-aos]", A),
                k);
          };
        n.exports = { init: I, refresh: E, refreshHard: A };
      },
      function (n, i) {},
      ,
      ,
      ,
      ,
      function (n, i) {
        (function (r) {
          function s(C, I, R) {
            function F(ne) {
              var We = z,
                ot = Ce;
              return (z = Ce = void 0), (Y = ne), (G = C.apply(ot, We));
            }
            function V(ne) {
              return (Y = ne), (Q = setTimeout(M, I)), Ae ? F(ne) : G;
            }
            function q(ne) {
              var We = ne - te,
                ot = ne - Y,
                $s = I - We;
              return Ge ? A($s, $ - ot) : $s;
            }
            function L(ne) {
              var We = ne - te,
                ot = ne - Y;
              return te === void 0 || We >= I || We < 0 || (Ge && ot >= $);
            }
            function M() {
              var ne = _();
              return L(ne) ? O(ne) : void (Q = setTimeout(M, q(ne)));
            }
            function O(ne) {
              return (Q = void 0), ue && z ? F(ne) : ((z = Ce = void 0), G);
            }
            function B() {
              Q !== void 0 && clearTimeout(Q),
                (Y = 0),
                (z = te = Ce = Q = void 0);
            }
            function H() {
              return Q === void 0 ? G : O(_());
            }
            function ie() {
              var ne = _(),
                We = L(ne);
              if (((z = arguments), (Ce = this), (te = ne), We)) {
                if (Q === void 0) return V(te);
                if (Ge) return (Q = setTimeout(M, I)), F(te);
              }
              return Q === void 0 && (Q = setTimeout(M, I)), G;
            }
            var z,
              Ce,
              $,
              G,
              Q,
              te,
              Y = 0,
              Ae = !1,
              Ge = !1,
              ue = !0;
            if (typeof C != "function") throw new TypeError(f);
            return (
              (I = c(I) || 0),
              a(R) &&
                ((Ae = !!R.leading),
                (Ge = "maxWait" in R),
                ($ = Ge ? E(c(R.maxWait) || 0, I) : $),
                (ue = "trailing" in R ? !!R.trailing : ue)),
              (ie.cancel = B),
              (ie.flush = H),
              ie
            );
          }
          function o(C, I, R) {
            var F = !0,
              V = !0;
            if (typeof C != "function") throw new TypeError(f);
            return (
              a(R) &&
                ((F = "leading" in R ? !!R.leading : F),
                (V = "trailing" in R ? !!R.trailing : V)),
              s(C, I, { leading: F, maxWait: I, trailing: V })
            );
          }
          function a(C) {
            var I = typeof C > "u" ? "undefined" : d(C);
            return !!C && (I == "object" || I == "function");
          }
          function l(C) {
            return !!C && (typeof C > "u" ? "undefined" : d(C)) == "object";
          }
          function u(C) {
            return (
              (typeof C > "u" ? "undefined" : d(C)) == "symbol" ||
              (l(C) && P.call(C) == g)
            );
          }
          function c(C) {
            if (typeof C == "number") return C;
            if (u(C)) return p;
            if (a(C)) {
              var I = typeof C.valueOf == "function" ? C.valueOf() : C;
              C = a(I) ? I + "" : I;
            }
            if (typeof C != "string") return C === 0 ? C : +C;
            C = C.replace(m, "");
            var R = y.test(C);
            return R || h.test(C)
              ? v(C.slice(2), R ? 2 : 8)
              : b.test(C)
              ? p
              : +C;
          }
          var d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (C) {
                    return typeof C;
                  }
                : function (C) {
                    return C &&
                      typeof Symbol == "function" &&
                      C.constructor === Symbol &&
                      C !== Symbol.prototype
                      ? "symbol"
                      : typeof C;
                  },
            f = "Expected a function",
            p = NaN,
            g = "[object Symbol]",
            m = /^\s+|\s+$/g,
            b = /^[-+]0x[0-9a-f]+$/i,
            y = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            v = parseInt,
            w =
              (typeof r > "u" ? "undefined" : d(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            x =
              (typeof self > "u" ? "undefined" : d(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            k = w || x || Function("return this")(),
            S = Object.prototype,
            P = S.toString,
            E = Math.max,
            A = Math.min,
            _ = function () {
              return k.Date.now();
            };
          n.exports = o;
        }).call(
          i,
          (function () {
            return this;
          })(),
        );
      },
      function (n, i) {
        (function (r) {
          function s(_, C, I) {
            function R(ue) {
              var ne = ie,
                We = z;
              return (ie = z = void 0), (te = ue), ($ = _.apply(We, ne));
            }
            function F(ue) {
              return (te = ue), (G = setTimeout(L, C)), Y ? R(ue) : $;
            }
            function V(ue) {
              var ne = ue - Q,
                We = ue - te,
                ot = C - ne;
              return Ae ? E(ot, Ce - We) : ot;
            }
            function q(ue) {
              var ne = ue - Q,
                We = ue - te;
              return Q === void 0 || ne >= C || ne < 0 || (Ae && We >= Ce);
            }
            function L() {
              var ue = A();
              return q(ue) ? M(ue) : void (G = setTimeout(L, V(ue)));
            }
            function M(ue) {
              return (G = void 0), Ge && ie ? R(ue) : ((ie = z = void 0), $);
            }
            function O() {
              G !== void 0 && clearTimeout(G),
                (te = 0),
                (ie = Q = z = G = void 0);
            }
            function B() {
              return G === void 0 ? $ : M(A());
            }
            function H() {
              var ue = A(),
                ne = q(ue);
              if (((ie = arguments), (z = this), (Q = ue), ne)) {
                if (G === void 0) return F(Q);
                if (Ae) return (G = setTimeout(L, C)), R(Q);
              }
              return G === void 0 && (G = setTimeout(L, C)), $;
            }
            var ie,
              z,
              Ce,
              $,
              G,
              Q,
              te = 0,
              Y = !1,
              Ae = !1,
              Ge = !0;
            if (typeof _ != "function") throw new TypeError(d);
            return (
              (C = u(C) || 0),
              o(I) &&
                ((Y = !!I.leading),
                (Ae = "maxWait" in I),
                (Ce = Ae ? P(u(I.maxWait) || 0, C) : Ce),
                (Ge = "trailing" in I ? !!I.trailing : Ge)),
              (H.cancel = O),
              (H.flush = B),
              H
            );
          }
          function o(_) {
            var C = typeof _ > "u" ? "undefined" : c(_);
            return !!_ && (C == "object" || C == "function");
          }
          function a(_) {
            return !!_ && (typeof _ > "u" ? "undefined" : c(_)) == "object";
          }
          function l(_) {
            return (
              (typeof _ > "u" ? "undefined" : c(_)) == "symbol" ||
              (a(_) && S.call(_) == p)
            );
          }
          function u(_) {
            if (typeof _ == "number") return _;
            if (l(_)) return f;
            if (o(_)) {
              var C = typeof _.valueOf == "function" ? _.valueOf() : _;
              _ = o(C) ? C + "" : C;
            }
            if (typeof _ != "string") return _ === 0 ? _ : +_;
            _ = _.replace(g, "");
            var I = b.test(_);
            return I || y.test(_)
              ? h(_.slice(2), I ? 2 : 8)
              : m.test(_)
              ? f
              : +_;
          }
          var c =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  },
            d = "Expected a function",
            f = NaN,
            p = "[object Symbol]",
            g = /^\s+|\s+$/g,
            m = /^[-+]0x[0-9a-f]+$/i,
            b = /^0b[01]+$/i,
            y = /^0o[0-7]+$/i,
            h = parseInt,
            v =
              (typeof r > "u" ? "undefined" : c(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            w =
              (typeof self > "u" ? "undefined" : c(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            x = v || w || Function("return this")(),
            k = Object.prototype,
            S = k.toString,
            P = Math.max,
            E = Math.min,
            A = function () {
              return x.Date.now();
            };
          n.exports = s;
        }).call(
          i,
          (function () {
            return this;
          })(),
        );
      },
      function (n, i) {
        function r(c) {
          var d = void 0,
            f = void 0;
          for (d = 0; d < c.length; d += 1)
            if (
              ((f = c[d]),
              (f.dataset && f.dataset.aos) || (f.children && r(f.children)))
            )
              return !0;
          return !1;
        }
        function s() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function o() {
          return !!s();
        }
        function a(c, d) {
          var f = window.document,
            p = s(),
            g = new p(l);
          (u = d),
            g.observe(f.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function l(c) {
          c &&
            c.forEach(function (d) {
              var f = Array.prototype.slice.call(d.addedNodes),
                p = Array.prototype.slice.call(d.removedNodes),
                g = f.concat(p);
              if (r(g)) return u();
            });
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var u = function () {};
        i.default = { isSupported: o, ready: a };
      },
      function (n, i) {
        function r(f, p) {
          if (!(f instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        function s() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var o = (function () {
            function f(p, g) {
              for (var m = 0; m < g.length; m++) {
                var b = g[m];
                (b.enumerable = b.enumerable || !1),
                  (b.configurable = !0),
                  "value" in b && (b.writable = !0),
                  Object.defineProperty(p, b.key, b);
              }
            }
            return function (p, g, m) {
              return g && f(p.prototype, g), m && f(p, m), p;
            };
          })(),
          a =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          l =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          u =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          c =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          d = (function () {
            function f() {
              r(this, f);
            }
            return (
              o(f, [
                {
                  key: "phone",
                  value: function () {
                    var p = s();
                    return !(!a.test(p) && !l.test(p.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var p = s();
                    return !(!u.test(p) && !c.test(p.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              f
            );
          })();
        i.default = new d();
      },
      function (n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function (o, a, l) {
            var u = o.node.getAttribute("data-aos-once");
            a > o.position
              ? o.node.classList.add("aos-animate")
              : typeof u < "u" &&
                (u === "false" || (!l && u !== "true")) &&
                o.node.classList.remove("aos-animate");
          },
          s = function (o, a) {
            var l = window.pageYOffset,
              u = window.innerHeight;
            o.forEach(function (c, d) {
              r(c, u + l, a);
            });
          };
        i.default = s;
      },
      function (n, i, r) {
        function s(u) {
          return u && u.__esModule ? u : { default: u };
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var o = r(12),
          a = s(o),
          l = function (u, c) {
            return (
              u.forEach(function (d, f) {
                d.node.classList.add("aos-init"),
                  (d.position = (0, a.default)(d.node, c.offset));
              }),
              u
            );
          };
        i.default = l;
      },
      function (n, i, r) {
        function s(u) {
          return u && u.__esModule ? u : { default: u };
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var o = r(13),
          a = s(o),
          l = function (u, c) {
            var d = 0,
              f = 0,
              p = window.innerHeight,
              g = {
                offset: u.getAttribute("data-aos-offset"),
                anchor: u.getAttribute("data-aos-anchor"),
                anchorPlacement: u.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (g.offset && !isNaN(g.offset) && (f = parseInt(g.offset)),
              g.anchor &&
                document.querySelectorAll(g.anchor) &&
                (u = document.querySelectorAll(g.anchor)[0]),
              (d = (0, a.default)(u).top),
              g.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                d += u.offsetHeight / 2;
                break;
              case "bottom-bottom":
                d += u.offsetHeight;
                break;
              case "top-center":
                d += p / 2;
                break;
              case "bottom-center":
                d += p / 2 + u.offsetHeight;
                break;
              case "center-center":
                d += p / 2 + u.offsetHeight / 2;
                break;
              case "top-top":
                d += p;
                break;
              case "bottom-top":
                d += u.offsetHeight + p;
                break;
              case "center-top":
                d += u.offsetHeight / 2 + p;
            }
            return g.anchorPlacement || g.offset || isNaN(c) || (f = c), d + f;
          };
        i.default = l;
      },
      function (n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function (s) {
          for (
            var o = 0, a = 0;
            s && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop);

          )
            (o += s.offsetLeft - (s.tagName != "BODY" ? s.scrollLeft : 0)),
              (a += s.offsetTop - (s.tagName != "BODY" ? s.scrollTop : 0)),
              (s = s.offsetParent);
          return { top: a, left: o };
        };
        i.default = r;
      },
      function (n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function (s) {
          return (
            (s = s || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(s, function (o) {
              return { node: o };
            })
          );
        };
        i.default = r;
      },
    ]);
  });
})(hg);
var Lb = hg.exports;
const Kr = _s(Lb);
var yd = {},
  mg = { exports: {} };
(function (t) {
  function e(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
})(mg);
var $a = mg.exports,
  Il = {};
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    J.apply(this, arguments)
  );
}
function Ti(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function gg(t) {
  if (!Ti(t)) return t;
  const e = {};
  return (
    Object.keys(t).forEach((n) => {
      e[n] = gg(t[n]);
    }),
    e
  );
}
function yn(t, e, n = { clone: !0 }) {
  const i = n.clone ? J({}, t) : t;
  return (
    Ti(t) &&
      Ti(e) &&
      Object.keys(e).forEach((r) => {
        r !== "__proto__" &&
          (Ti(e[r]) && r in t && Ti(t[r])
            ? (i[r] = yn(t[r], e[r], n))
            : n.clone
            ? (i[r] = Ti(e[r]) ? gg(e[r]) : e[r])
            : (i[r] = e[r]));
      }),
    i
  );
}
var yg = { exports: {} },
  Db = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  $b = Db,
  jb = $b;
function vg() {}
function wg() {}
wg.resetWarningCache = vg;
var Fb = function () {
  function t(i, r, s, o, a, l) {
    if (l !== jb) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: wg,
    resetWarningCache: vg,
  };
  return (n.PropTypes = n), n;
};
yg.exports = Fb();
var Nb = yg.exports;
const je = _s(Nb);
function ur(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let n = 1; n < arguments.length; n += 1)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
function sn(t) {
  if (typeof t != "string") throw new Error(ur(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Bb(...t) {
  return t.reduce(
    (e, n) =>
      n == null
        ? e
        : function (...r) {
            e.apply(this, r), n.apply(this, r);
          },
    () => {},
  );
}
function Hb(t, e = 166) {
  let n;
  function i(...r) {
    const s = () => {
      t.apply(this, r);
    };
    clearTimeout(n), (n = setTimeout(s, e));
  }
  return (
    (i.clear = () => {
      clearTimeout(n);
    }),
    i
  );
}
function Wb(t, e) {
  return () => null;
}
function Vb(t, e) {
  return j.isValidElement(t) && e.indexOf(t.type.muiName) !== -1;
}
function bg(t) {
  return (t && t.ownerDocument) || document;
}
function qb(t) {
  return bg(t).defaultView || window;
}
function Ub(t, e) {
  return () => null;
}
function xg(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
const Xb = typeof window < "u" ? j.useLayoutEffect : j.useEffect,
  Sg = Xb;
let Ep = 0;
function Gb(t) {
  const [e, n] = j.useState(t),
    i = t || e;
  return (
    j.useEffect(() => {
      e == null && ((Ep += 1), n(`mui-${Ep}`));
    }, [e]),
    i
  );
}
const Pp = ou["useId".toString()];
function Kb(t) {
  if (Pp !== void 0) {
    const e = Pp();
    return t ?? e;
  }
  return Gb(t);
}
function Yb(t, e, n, i, r) {
  return null;
}
function Qb({ controlled: t, default: e, name: n, state: i = "value" }) {
  const { current: r } = j.useRef(t !== void 0),
    [s, o] = j.useState(e),
    a = r ? t : s,
    l = j.useCallback((u) => {
      r || o(u);
    }, []);
  return [a, l];
}
function Zb(t) {
  const e = j.useRef(t);
  return (
    Sg(() => {
      e.current = t;
    }),
    j.useCallback((...n) => (0, e.current)(...n), [])
  );
}
function Jb(...t) {
  return j.useMemo(
    () =>
      t.every((e) => e == null)
        ? null
        : (e) => {
            t.forEach((n) => {
              xg(n, e);
            });
          },
    t,
  );
}
let ja = !0,
  ac = !1,
  Tp;
const ex = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function tx(t) {
  const { type: e, tagName: n } = t;
  return !!(
    (n === "INPUT" && ex[e] && !t.readOnly) ||
    (n === "TEXTAREA" && !t.readOnly) ||
    t.isContentEditable
  );
}
function nx(t) {
  t.metaKey || t.altKey || t.ctrlKey || (ja = !0);
}
function Rl() {
  ja = !1;
}
function ix() {
  this.visibilityState === "hidden" && ac && (ja = !0);
}
function rx(t) {
  t.addEventListener("keydown", nx, !0),
    t.addEventListener("mousedown", Rl, !0),
    t.addEventListener("pointerdown", Rl, !0),
    t.addEventListener("touchstart", Rl, !0),
    t.addEventListener("visibilitychange", ix, !0);
}
function sx(t) {
  const { target: e } = t;
  try {
    return e.matches(":focus-visible");
  } catch {}
  return ja || tx(e);
}
function ox() {
  const t = j.useCallback((r) => {
      r != null && rx(r.ownerDocument);
    }, []),
    e = j.useRef(!1);
  function n() {
    return e.current
      ? ((ac = !0),
        window.clearTimeout(Tp),
        (Tp = window.setTimeout(() => {
          ac = !1;
        }, 100)),
        (e.current = !1),
        !0)
      : !1;
  }
  function i(r) {
    return sx(r) ? ((e.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: e, onFocus: i, onBlur: n, ref: t };
}
function kg(t, e) {
  const n = J({}, e);
  return (
    Object.keys(t).forEach((i) => {
      if (i.toString().match(/^(components|slots)$/)) n[i] = J({}, t[i], n[i]);
      else if (i.toString().match(/^(componentsProps|slotProps)$/)) {
        const r = t[i] || {},
          s = e[i];
        (n[i] = {}),
          !s || !Object.keys(s)
            ? (n[i] = r)
            : !r || !Object.keys(r)
            ? (n[i] = s)
            : ((n[i] = J({}, s)),
              Object.keys(r).forEach((o) => {
                n[i][o] = kg(r[o], s[o]);
              }));
      } else n[i] === void 0 && (n[i] = t[i]);
    }),
    n
  );
}
function ax(t, e, n = void 0) {
  const i = {};
  return (
    Object.keys(t).forEach((r) => {
      i[r] = t[r]
        .reduce((s, o) => {
          if (o) {
            const a = e(o);
            a !== "" && s.push(a), n && n[o] && s.push(n[o]);
          }
          return s;
        }, [])
        .join(" ");
    }),
    i
  );
}
const zp = (t) => t,
  lx = () => {
    let t = zp;
    return {
      configure(e) {
        t = e;
      },
      generate(e) {
        return t(e);
      },
      reset() {
        t = zp;
      },
    };
  },
  ux = lx(),
  _g = ux,
  cx = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function Cg(t, e, n = "Mui") {
  const i = cx[e];
  return i ? `${n}-${i}` : `${_g.generate(t)}-${e}`;
}
function dx(t, e, n = "Mui") {
  const i = {};
  return (
    e.forEach((r) => {
      i[r] = Cg(t, r, n);
    }),
    i
  );
}
function Cn(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function Eg(t) {
  var e,
    n,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Eg(t[e])) && (i && (i += " "), (i += n));
    else for (e in t) t[e] && (i && (i += " "), (i += e));
  return i;
}
function fx() {
  for (var t, e, n = 0, i = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Eg(t)) && (i && (i += " "), (i += e));
  return i;
}
function px(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
}
function hx(t) {
  var e = document.createElement("style");
  return (
    e.setAttribute("data-emotion", t.key),
    t.nonce !== void 0 && e.setAttribute("nonce", t.nonce),
    e.appendChild(document.createTextNode("")),
    e.setAttribute("data-s", ""),
    e
  );
}
var mx = (function () {
    function t(n) {
      var i = this;
      (this._insertTag = function (r) {
        var s;
        i.tags.length === 0
          ? i.insertionPoint
            ? (s = i.insertionPoint.nextSibling)
            : i.prepend
            ? (s = i.container.firstChild)
            : (s = i.before)
          : (s = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(r, s),
          i.tags.push(r);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var e = t.prototype;
    return (
      (e.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (e.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(hx(this));
        var r = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var s = px(r);
          try {
            s.insertRule(i, s.cssRules.length);
          } catch {}
        } else r.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (e.flush = function () {
        this.tags.forEach(function (i) {
          return i.parentNode && i.parentNode.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      t
    );
  })(),
  Qe = "-ms-",
  aa = "-moz-",
  se = "-webkit-",
  Pg = "comm",
  vd = "rule",
  wd = "decl",
  gx = "@import",
  Tg = "@keyframes",
  yx = "@layer",
  vx = Math.abs,
  Fa = String.fromCharCode,
  wx = Object.assign;
function bx(t, e) {
  return qe(t, 0) ^ 45
    ? (((((((e << 2) ^ qe(t, 0)) << 2) ^ qe(t, 1)) << 2) ^ qe(t, 2)) << 2) ^
        qe(t, 3)
    : 0;
}
function zg(t) {
  return t.trim();
}
function xx(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function oe(t, e, n) {
  return t.replace(e, n);
}
function lc(t, e) {
  return t.indexOf(e);
}
function qe(t, e) {
  return t.charCodeAt(e) | 0;
}
function vs(t, e, n) {
  return t.slice(e, n);
}
function Qt(t) {
  return t.length;
}
function bd(t) {
  return t.length;
}
function ro(t, e) {
  return e.push(t), t;
}
function Sx(t, e) {
  return t.map(e).join("");
}
var Na = 1,
  cr = 1,
  Ag = 0,
  ht = 0,
  Re = 0,
  xr = "";
function Ba(t, e, n, i, r, s, o) {
  return {
    value: t,
    root: e,
    parent: n,
    type: i,
    props: r,
    children: s,
    line: Na,
    column: cr,
    length: o,
    return: "",
  };
}
function Ar(t, e) {
  return wx(Ba("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function kx() {
  return Re;
}
function _x() {
  return (
    (Re = ht > 0 ? qe(xr, --ht) : 0), cr--, Re === 10 && ((cr = 1), Na--), Re
  );
}
function xt() {
  return (
    (Re = ht < Ag ? qe(xr, ht++) : 0), cr++, Re === 10 && ((cr = 1), Na++), Re
  );
}
function on() {
  return qe(xr, ht);
}
function Eo() {
  return ht;
}
function Ms(t, e) {
  return vs(xr, t, e);
}
function ws(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mg(t) {
  return (Na = cr = 1), (Ag = Qt((xr = t))), (ht = 0), [];
}
function Og(t) {
  return (xr = ""), t;
}
function Po(t) {
  return zg(Ms(ht - 1, uc(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Cx(t) {
  for (; (Re = on()) && Re < 33; ) xt();
  return ws(t) > 2 || ws(Re) > 3 ? "" : " ";
}
function Ex(t, e) {
  for (
    ;
    --e &&
    xt() &&
    !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97));

  );
  return Ms(t, Eo() + (e < 6 && on() == 32 && xt() == 32));
}
function uc(t) {
  for (; xt(); )
    switch (Re) {
      case t:
        return ht;
      case 34:
      case 39:
        t !== 34 && t !== 39 && uc(Re);
        break;
      case 40:
        t === 41 && uc(t);
        break;
      case 92:
        xt();
        break;
    }
  return ht;
}
function Px(t, e) {
  for (; xt() && t + Re !== 47 + 10; )
    if (t + Re === 42 + 42 && on() === 47) break;
  return "/*" + Ms(e, ht - 1) + "*" + Fa(t === 47 ? t : xt());
}
function Tx(t) {
  for (; !ws(on()); ) xt();
  return Ms(t, ht);
}
function zx(t) {
  return Og(To("", null, null, null, [""], (t = Mg(t)), 0, [0], t));
}
function To(t, e, n, i, r, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      d = o,
      f = 0,
      p = 0,
      g = 0,
      m = 1,
      b = 1,
      y = 1,
      h = 0,
      v = "",
      w = r,
      x = s,
      k = i,
      S = v;
    b;

  )
    switch (((g = h), (h = xt()))) {
      case 40:
        if (g != 108 && qe(S, d - 1) == 58) {
          lc((S += oe(Po(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Po(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Cx(g);
        break;
      case 92:
        S += Ex(Eo() - 1, 7);
        continue;
      case 47:
        switch (on()) {
          case 42:
          case 47:
            ro(Ax(Px(xt(), Eo()), e, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        a[u++] = Qt(S) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            y == -1 && (S = oe(S, /\f/g, "")),
              p > 0 &&
                Qt(S) - d &&
                ro(
                  p > 32
                    ? Mp(S + ";", i, n, d - 1)
                    : Mp(oe(S, " ", "") + ";", i, n, d - 2),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (ro((k = Ap(S, e, n, u, c, r, a, v, (w = []), (x = []), d)), s),
              h === 123)
            )
              if (c === 0) To(S, e, k, k, w, s, d, a, x);
              else
                switch (f === 99 && qe(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    To(
                      t,
                      k,
                      k,
                      i && ro(Ap(t, k, k, 0, 0, r, a, v, r, (w = []), d), x),
                      r,
                      x,
                      d,
                      a,
                      i ? w : x,
                    );
                    break;
                  default:
                    To(S, k, k, k, [""], x, 0, a, x);
                }
        }
        (u = c = p = 0), (m = y = 1), (v = S = ""), (d = o);
        break;
      case 58:
        (d = 1 + Qt(S)), (p = g);
      default:
        if (m < 1) {
          if (h == 123) --m;
          else if (h == 125 && m++ == 0 && _x() == 125) continue;
        }
        switch (((S += Fa(h)), h * m)) {
          case 38:
            y = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Qt(S) - 1) * y), (y = 1);
            break;
          case 64:
            on() === 45 && (S += Po(xt())),
              (f = on()),
              (c = d = Qt((v = S += Tx(Eo())))),
              h++;
            break;
          case 45:
            g === 45 && Qt(S) == 2 && (m = 0);
        }
    }
  return s;
}
function Ap(t, e, n, i, r, s, o, a, l, u, c) {
  for (
    var d = r - 1, f = r === 0 ? s : [""], p = bd(f), g = 0, m = 0, b = 0;
    g < i;
    ++g
  )
    for (var y = 0, h = vs(t, d + 1, (d = vx((m = o[g])))), v = t; y < p; ++y)
      (v = zg(m > 0 ? f[y] + " " + h : oe(h, /&\f/g, f[y]))) && (l[b++] = v);
  return Ba(t, e, n, r === 0 ? vd : a, l, u, c);
}
function Ax(t, e, n) {
  return Ba(t, e, n, Pg, Fa(kx()), vs(t, 2, -2), 0);
}
function Mp(t, e, n, i) {
  return Ba(t, e, n, wd, vs(t, 0, i), vs(t, i + 1, -1), i);
}
function Gi(t, e) {
  for (var n = "", i = bd(t), r = 0; r < i; r++) n += e(t[r], r, t, e) || "";
  return n;
}
function Mx(t, e, n, i) {
  switch (t.type) {
    case yx:
      if (t.children.length) break;
    case gx:
    case wd:
      return (t.return = t.return || t.value);
    case Pg:
      return "";
    case Tg:
      return (t.return = t.value + "{" + Gi(t.children, i) + "}");
    case vd:
      t.value = t.props.join(",");
  }
  return Qt((n = Gi(t.children, i)))
    ? (t.return = t.value + "{" + n + "}")
    : "";
}
function Ox(t) {
  var e = bd(t);
  return function (n, i, r, s) {
    for (var o = "", a = 0; a < e; a++) o += t[a](n, i, r, s) || "";
    return o;
  };
}
function Ix(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
var Rx = function (e, n, i) {
    for (
      var r = 0, s = 0;
      (r = s), (s = on()), r === 38 && s === 12 && (n[i] = 1), !ws(s);

    )
      xt();
    return Ms(e, ht);
  },
  Lx = function (e, n) {
    var i = -1,
      r = 44;
    do
      switch (ws(r)) {
        case 0:
          r === 38 && on() === 12 && (n[i] = 1), (e[i] += Rx(ht - 1, n, i));
          break;
        case 2:
          e[i] += Po(r);
          break;
        case 4:
          if (r === 44) {
            (e[++i] = on() === 58 ? "&\f" : ""), (n[i] = e[i].length);
            break;
          }
        default:
          e[i] += Fa(r);
      }
    while ((r = xt()));
    return e;
  },
  Dx = function (e, n) {
    return Og(Lx(Mg(e), n));
  },
  Op = new WeakMap(),
  $x = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var n = e.value,
          i = e.parent,
          r = e.column === i.column && e.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(e.props.length === 1 && n.charCodeAt(0) !== 58 && !Op.get(i)) &&
        !r
      ) {
        Op.set(e, !0);
        for (
          var s = [], o = Dx(n, s), a = i.props, l = 0, u = 0;
          l < o.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            e.props[u] = s[l] ? o[l].replace(/&\f/g, a[c]) : a[c] + " " + o[l];
      }
    }
  },
  jx = function (e) {
    if (e.type === "decl") {
      var n = e.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  };
function Ig(t, e) {
  switch (bx(t, e)) {
    case 5103:
      return se + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + t + aa + t + Qe + t + t;
    case 6828:
    case 4268:
      return se + t + Qe + t + t;
    case 6165:
      return se + t + Qe + "flex-" + t + t;
    case 5187:
      return (
        se + t + oe(t, /(\w+).+(:[^]+)/, se + "box-$1$2" + Qe + "flex-$1$2") + t
      );
    case 5443:
      return se + t + Qe + "flex-item-" + oe(t, /flex-|-self/, "") + t;
    case 4675:
      return (
        se +
        t +
        Qe +
        "flex-line-pack" +
        oe(t, /align-content|flex-|-self/, "") +
        t
      );
    case 5548:
      return se + t + Qe + oe(t, "shrink", "negative") + t;
    case 5292:
      return se + t + Qe + oe(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        se +
        "box-" +
        oe(t, "-grow", "") +
        se +
        t +
        Qe +
        oe(t, "grow", "positive") +
        t
      );
    case 4554:
      return se + oe(t, /([^-])(transform)/g, "$1" + se + "$2") + t;
    case 6187:
      return (
        oe(
          oe(oe(t, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"),
          t,
          "",
        ) + t
      );
    case 5495:
    case 3959:
      return oe(t, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return (
        oe(
          oe(t, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Qe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        se +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(t, /(.+)-inline(.+)/, se + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qt(t) - 1 - e > 6)
        switch (qe(t, e + 1)) {
          case 109:
            if (qe(t, e + 4) !== 45) break;
          case 102:
            return (
              oe(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  se +
                  "$2-$3$1" +
                  aa +
                  (qe(t, e + 3) == 108 ? "$3" : "$2-$3"),
              ) + t
            );
          case 115:
            return ~lc(t, "stretch")
              ? Ig(oe(t, "stretch", "fill-available"), e) + t
              : t;
        }
      break;
    case 4949:
      if (qe(t, e + 1) !== 115) break;
    case 6444:
      switch (qe(t, Qt(t) - 3 - (~lc(t, "!important") && 10))) {
        case 107:
          return oe(t, ":", ":" + se) + t;
        case 101:
          return (
            oe(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                se +
                (qe(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                se +
                "$2$3$1" +
                Qe +
                "$2box$3",
            ) + t
          );
      }
      break;
    case 5936:
      switch (qe(t, e + 11)) {
        case 114:
          return se + t + Qe + oe(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return se + t + Qe + oe(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return se + t + Qe + oe(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return se + t + Qe + t + t;
  }
  return t;
}
var Fx = function (e, n, i, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case wd:
          e.return = Ig(e.value, e.length);
          break;
        case Tg:
          return Gi([Ar(e, { value: oe(e.value, "@", "@" + se) })], r);
        case vd:
          if (e.length)
            return Sx(e.props, function (s) {
              switch (xx(s, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Gi(
                    [Ar(e, { props: [oe(s, /:(read-\w+)/, ":" + aa + "$1")] })],
                    r,
                  );
                case "::placeholder":
                  return Gi(
                    [
                      Ar(e, {
                        props: [oe(s, /:(plac\w+)/, ":" + se + "input-$1")],
                      }),
                      Ar(e, { props: [oe(s, /:(plac\w+)/, ":" + aa + "$1")] }),
                      Ar(e, { props: [oe(s, /:(plac\w+)/, Qe + "input-$1")] }),
                    ],
                    r,
                  );
              }
              return "";
            });
      }
  },
  Nx = [Fx],
  Bx = function (e) {
    var n = e.key;
    if (n === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (m) {
        var b = m.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var r = e.stylisPlugins || Nx,
      s = {},
      o,
      a = [];
    (o = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var b = m.getAttribute("data-emotion").split(" "), y = 1;
            y < b.length;
            y++
          )
            s[b[y]] = !0;
          a.push(m);
        },
      );
    var l,
      u = [$x, jx];
    {
      var c,
        d = [
          Mx,
          Ix(function (m) {
            c.insert(m);
          }),
        ],
        f = Ox(u.concat(r, d)),
        p = function (b) {
          return Gi(zx(b), f);
        };
      l = function (b, y, h, v) {
        (c = h),
          p(b ? b + "{" + y.styles + "}" : y.styles),
          v && (g.inserted[y.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new mx({
        key: n,
        container: o,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: s,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(a), g;
  },
  Hx = !0;
function Wx(t, e, n) {
  var i = "";
  return (
    n.split(" ").forEach(function (r) {
      t[r] !== void 0 ? e.push(t[r] + ";") : (i += r + " ");
    }),
    i
  );
}
var Rg = function (e, n, i) {
    var r = e.key + "-" + n.name;
    (i === !1 || Hx === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = n.styles);
  },
  Vx = function (e, n, i) {
    Rg(e, n, i);
    var r = e.key + "-" + n.name;
    if (e.inserted[n.name] === void 0) {
      var s = n;
      do e.insert(n === s ? "." + r : "", s, e.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
function qx(t) {
  for (var e = 0, n, i = 0, r = t.length; r >= 4; ++i, r -= 4)
    (n =
      (t.charCodeAt(i) & 255) |
      ((t.charCodeAt(++i) & 255) << 8) |
      ((t.charCodeAt(++i) & 255) << 16) |
      ((t.charCodeAt(++i) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (e =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (e ^= t.charCodeAt(i) & 255),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var Ux = /[A-Z]|^ms/g,
  Xx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Lg = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Ip = function (e) {
    return e != null && typeof e != "boolean";
  },
  Ll = U0(function (t) {
    return Lg(t) ? t : t.replace(Ux, "-$&").toLowerCase();
  }),
  Rp = function (e, n) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Xx, function (i, r, s) {
            return (Zt = { name: r, styles: s, next: Zt }), r;
          });
    }
    return J0[e] !== 1 && !Lg(e) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function bs(t, e, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Zt = { name: n.name, styles: n.styles, next: Zt }), n.name;
      if (n.styles !== void 0) {
        var i = n.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (Zt = { name: i.name, styles: i.styles, next: Zt }), (i = i.next);
        var r = n.styles + ";";
        return r;
      }
      return Gx(t, e, n);
    }
    case "function": {
      if (t !== void 0) {
        var s = Zt,
          o = n(t);
        return (Zt = s), bs(t, e, o);
      }
      break;
    }
  }
  if (e == null) return n;
  var a = e[n];
  return a !== void 0 ? a : n;
}
function Gx(t, e, n) {
  var i = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++) i += bs(t, e, n[r]) + ";";
  else
    for (var s in n) {
      var o = n[s];
      if (typeof o != "object")
        e != null && e[o] !== void 0
          ? (i += s + "{" + e[o] + "}")
          : Ip(o) && (i += Ll(s) + ":" + Rp(s, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (e == null || e[o[0]] === void 0)
      )
        for (var a = 0; a < o.length; a++)
          Ip(o[a]) && (i += Ll(s) + ":" + Rp(s, o[a]) + ";");
      else {
        var l = bs(t, e, o);
        switch (s) {
          case "animation":
          case "animationName": {
            i += Ll(s) + ":" + l + ";";
            break;
          }
          default:
            i += s + "{" + l + "}";
        }
      }
    }
  return i;
}
var Lp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Zt,
  Kx = function (e, n, i) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      s = "";
    Zt = void 0;
    var o = e[0];
    o == null || o.raw === void 0
      ? ((r = !1), (s += bs(i, n, o)))
      : (s += o[0]);
    for (var a = 1; a < e.length; a++) (s += bs(i, n, e[a])), r && (s += o[a]);
    Lp.lastIndex = 0;
    for (var l = "", u; (u = Lp.exec(s)) !== null; ) l += "-" + u[1];
    var c = qx(s) + l;
    return { name: c, styles: s, next: Zt };
  },
  Yx = function (e) {
    return e();
  },
  Qx = ou["useInsertionEffect"] ? ou["useInsertionEffect"] : !1,
  Zx = Qx || Yx,
  Dg = j.createContext(typeof HTMLElement < "u" ? Bx({ key: "css" }) : null);
Dg.Provider;
var Jx = function (e) {
    return j.forwardRef(function (n, i) {
      var r = j.useContext(Dg);
      return e(n, r, i);
    });
  },
  $g = j.createContext({}),
  e2 = Ow,
  t2 = function (e) {
    return e !== "theme";
  },
  Dp = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? e2 : t2;
  },
  $p = function (e, n, i) {
    var r;
    if (n) {
      var s = n.shouldForwardProp;
      r =
        e.__emotion_forwardProp && s
          ? function (o) {
              return e.__emotion_forwardProp(o) && s(o);
            }
          : s;
    }
    return typeof r != "function" && i && (r = e.__emotion_forwardProp), r;
  },
  n2 = function (e) {
    var n = e.cache,
      i = e.serialized,
      r = e.isStringTag;
    return (
      Rg(n, i, r),
      Zx(function () {
        return Vx(n, i, r);
      }),
      null
    );
  },
  i2 = function t(e, n) {
    var i = e.__emotion_real === e,
      r = (i && e.__emotion_base) || e,
      s,
      o;
    n !== void 0 && ((s = n.label), (o = n.target));
    var a = $p(e, n, i),
      l = a || Dp(r),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          i && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (
        (s !== void 0 && d.push("label:" + s + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var g = Jx(function (m, b, y) {
        var h = (u && m.as) || r,
          v = "",
          w = [],
          x = m;
        if (m.theme == null) {
          x = {};
          for (var k in m) x[k] = m[k];
          x.theme = j.useContext($g);
        }
        typeof m.className == "string"
          ? (v = Wx(b.registered, w, m.className))
          : m.className != null && (v = m.className + " ");
        var S = Kx(d.concat(w), b.registered, x);
        (v += b.key + "-" + S.name), o !== void 0 && (v += " " + o);
        var P = u && a === void 0 ? Dp(h) : l,
          E = {};
        for (var A in m) (u && A === "as") || (P(A) && (E[A] = m[A]));
        return (
          (E.className = v),
          (E.ref = y),
          j.createElement(
            j.Fragment,
            null,
            j.createElement(n2, {
              cache: b,
              serialized: S,
              isStringTag: typeof h == "string",
            }),
            j.createElement(h, E),
          )
        );
      });
      return (
        (g.displayName =
          s !== void 0
            ? s
            : "Styled(" +
              (typeof r == "string"
                ? r
                : r.displayName || r.name || "Component") +
              ")"),
        (g.defaultProps = e.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = r),
        (g.__emotion_styles = d),
        (g.__emotion_forwardProp = a),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (g.withComponent = function (m, b) {
          return t(m, J({}, n, b, { shouldForwardProp: $p(g, b, !0) })).apply(
            void 0,
            d,
          );
        }),
        g
      );
    };
  },
  r2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  cc = i2.bind();
r2.forEach(function (t) {
  cc[t] = cc(t);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function s2(t, e) {
  return cc(t, e);
}
const o2 = (t, e) => {
    Array.isArray(t.__emotion_styles) &&
      (t.__emotion_styles = e(t.__emotion_styles));
  },
  a2 = ["values", "unit", "step"],
  l2 = (t) => {
    const e = Object.keys(t).map((n) => ({ key: n, val: t[n] })) || [];
    return (
      e.sort((n, i) => n.val - i.val),
      e.reduce((n, i) => J({}, n, { [i.key]: i.val }), {})
    );
  };
function u2(t) {
  const {
      values: e = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: i = 5,
    } = t,
    r = Cn(t, a2),
    s = l2(e),
    o = Object.keys(s);
  function a(f) {
    return `@media (min-width:${typeof e[f] == "number" ? e[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof e[f] == "number" ? e[f] : f) - i / 100
    }${n})`;
  }
  function u(f, p) {
    const g = o.indexOf(p);
    return `@media (min-width:${
      typeof e[f] == "number" ? e[f] : f
    }${n}) and (max-width:${
      (g !== -1 && typeof e[o[g]] == "number" ? e[o[g]] : p) - i / 100
    }${n})`;
  }
  function c(f) {
    return o.indexOf(f) + 1 < o.length ? u(f, o[o.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const p = o.indexOf(f);
    return p === 0
      ? a(o[1])
      : p === o.length - 1
      ? l(o[p])
      : u(f, o[o.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return J(
    {
      keys: o,
      values: s,
      up: a,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    r,
  );
}
const c2 = { borderRadius: 4 },
  d2 = c2;
function Yr(t, e) {
  return e ? yn(t, e, { clone: !1 }) : t;
}
const xd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  jp = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (t) => `@media (min-width:${xd[t]}px)`,
  };
function Sn(t, e, n) {
  const i = t.theme || {};
  if (Array.isArray(e)) {
    const s = i.breakpoints || jp;
    return e.reduce((o, a, l) => ((o[s.up(s.keys[l])] = n(e[l])), o), {});
  }
  if (typeof e == "object") {
    const s = i.breakpoints || jp;
    return Object.keys(e).reduce((o, a) => {
      if (Object.keys(s.values || xd).indexOf(a) !== -1) {
        const l = s.up(a);
        o[l] = n(e[a], a);
      } else {
        const l = a;
        o[l] = e[l];
      }
      return o;
    }, {});
  }
  return n(e);
}
function f2(t = {}) {
  var e;
  return (
    ((e = t.keys) == null
      ? void 0
      : e.reduce((i, r) => {
          const s = t.up(r);
          return (i[s] = {}), i;
        }, {})) || {}
  );
}
function p2(t, e) {
  return t.reduce((n, i) => {
    const r = n[i];
    return (!r || Object.keys(r).length === 0) && delete n[i], n;
  }, e);
}
function Ha(t, e, n = !0) {
  if (!e || typeof e != "string") return null;
  if (t && t.vars && n) {
    const i = `vars.${e}`
      .split(".")
      .reduce((r, s) => (r && r[s] ? r[s] : null), t);
    if (i != null) return i;
  }
  return e.split(".").reduce((i, r) => (i && i[r] != null ? i[r] : null), t);
}
function la(t, e, n, i = n) {
  let r;
  return (
    typeof t == "function"
      ? (r = t(n))
      : Array.isArray(t)
      ? (r = t[n] || i)
      : (r = Ha(t, n) || i),
    e && (r = e(r, i, t)),
    r
  );
}
function le(t) {
  const { prop: e, cssProperty: n = t.prop, themeKey: i, transform: r } = t,
    s = (o) => {
      if (o[e] == null) return null;
      const a = o[e],
        l = o.theme,
        u = Ha(l, i) || {};
      return Sn(o, a, (d) => {
        let f = la(u, r, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = la(u, r, `${e}${d === "default" ? "" : sn(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (s.propTypes = {}), (s.filterProps = [e]), s;
}
function h2(t) {
  const e = {};
  return (n) => (e[n] === void 0 && (e[n] = t(n)), e[n]);
}
const m2 = { m: "margin", p: "padding" },
  g2 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Fp = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  y2 = h2((t) => {
    if (t.length > 2)
      if (Fp[t]) t = Fp[t];
      else return [t];
    const [e, n] = t.split(""),
      i = m2[e],
      r = g2[n] || "";
    return Array.isArray(r) ? r.map((s) => i + s) : [i + r];
  }),
  Sd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  kd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Sd, ...kd];
function Os(t, e, n, i) {
  var r;
  const s = (r = Ha(t, e, !1)) != null ? r : n;
  return typeof s == "number"
    ? (o) => (typeof o == "string" ? o : s * o)
    : Array.isArray(s)
    ? (o) => (typeof o == "string" ? o : s[o])
    : typeof s == "function"
    ? s
    : () => {};
}
function jg(t) {
  return Os(t, "spacing", 8);
}
function Is(t, e) {
  if (typeof e == "string" || e == null) return e;
  const n = Math.abs(e),
    i = t(n);
  return e >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function v2(t, e) {
  return (n) => t.reduce((i, r) => ((i[r] = Is(e, n)), i), {});
}
function w2(t, e, n, i) {
  if (e.indexOf(n) === -1) return null;
  const r = y2(n),
    s = v2(r, i),
    o = t[n];
  return Sn(t, o, s);
}
function Fg(t, e) {
  const n = jg(t.theme);
  return Object.keys(t)
    .map((i) => w2(t, e, i, n))
    .reduce(Yr, {});
}
function Ee(t) {
  return Fg(t, Sd);
}
Ee.propTypes = {};
Ee.filterProps = Sd;
function Pe(t) {
  return Fg(t, kd);
}
Pe.propTypes = {};
Pe.filterProps = kd;
function b2(t = 8) {
  if (t.mui) return t;
  const e = jg({ spacing: t }),
    n = (...i) =>
      (i.length === 0 ? [1] : i)
        .map((s) => {
          const o = e(s);
          return typeof o == "number" ? `${o}px` : o;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Wa(...t) {
  const e = t.reduce(
      (i, r) => (
        r.filterProps.forEach((s) => {
          i[s] = r;
        }),
        i
      ),
      {},
    ),
    n = (i) => Object.keys(i).reduce((r, s) => (e[s] ? Yr(r, e[s](i)) : r), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = t.reduce((i, r) => i.concat(r.filterProps), [])),
    n
  );
}
function en(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
const x2 = le({ prop: "border", themeKey: "borders", transform: en }),
  S2 = le({ prop: "borderTop", themeKey: "borders", transform: en }),
  k2 = le({ prop: "borderRight", themeKey: "borders", transform: en }),
  _2 = le({ prop: "borderBottom", themeKey: "borders", transform: en }),
  C2 = le({ prop: "borderLeft", themeKey: "borders", transform: en }),
  E2 = le({ prop: "borderColor", themeKey: "palette" }),
  P2 = le({ prop: "borderTopColor", themeKey: "palette" }),
  T2 = le({ prop: "borderRightColor", themeKey: "palette" }),
  z2 = le({ prop: "borderBottomColor", themeKey: "palette" }),
  A2 = le({ prop: "borderLeftColor", themeKey: "palette" }),
  Va = (t) => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const e = Os(t.theme, "shape.borderRadius", 4),
        n = (i) => ({ borderRadius: Is(e, i) });
      return Sn(t, t.borderRadius, n);
    }
    return null;
  };
Va.propTypes = {};
Va.filterProps = ["borderRadius"];
Wa(x2, S2, k2, _2, C2, E2, P2, T2, z2, A2, Va);
const qa = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = Os(t.theme, "spacing", 8),
      n = (i) => ({ gap: Is(e, i) });
    return Sn(t, t.gap, n);
  }
  return null;
};
qa.propTypes = {};
qa.filterProps = ["gap"];
const Ua = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = Os(t.theme, "spacing", 8),
      n = (i) => ({ columnGap: Is(e, i) });
    return Sn(t, t.columnGap, n);
  }
  return null;
};
Ua.propTypes = {};
Ua.filterProps = ["columnGap"];
const Xa = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = Os(t.theme, "spacing", 8),
      n = (i) => ({ rowGap: Is(e, i) });
    return Sn(t, t.rowGap, n);
  }
  return null;
};
Xa.propTypes = {};
Xa.filterProps = ["rowGap"];
const M2 = le({ prop: "gridColumn" }),
  O2 = le({ prop: "gridRow" }),
  I2 = le({ prop: "gridAutoFlow" }),
  R2 = le({ prop: "gridAutoColumns" }),
  L2 = le({ prop: "gridAutoRows" }),
  D2 = le({ prop: "gridTemplateColumns" }),
  $2 = le({ prop: "gridTemplateRows" }),
  j2 = le({ prop: "gridTemplateAreas" }),
  F2 = le({ prop: "gridArea" });
Wa(qa, Ua, Xa, M2, O2, I2, R2, L2, D2, $2, j2, F2);
function Ki(t, e) {
  return e === "grey" ? e : t;
}
const N2 = le({ prop: "color", themeKey: "palette", transform: Ki }),
  B2 = le({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Ki,
  }),
  H2 = le({ prop: "backgroundColor", themeKey: "palette", transform: Ki });
Wa(N2, B2, H2);
function vt(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const W2 = le({ prop: "width", transform: vt }),
  _d = (t) => {
    if (t.maxWidth !== void 0 && t.maxWidth !== null) {
      const e = (n) => {
        var i, r, s;
        return {
          maxWidth:
            ((i = t.theme) == null ||
            (r = i.breakpoints) == null ||
            (s = r.values) == null
              ? void 0
              : s[n]) ||
            xd[n] ||
            vt(n),
        };
      };
      return Sn(t, t.maxWidth, e);
    }
    return null;
  };
_d.filterProps = ["maxWidth"];
const V2 = le({ prop: "minWidth", transform: vt }),
  q2 = le({ prop: "height", transform: vt }),
  U2 = le({ prop: "maxHeight", transform: vt }),
  X2 = le({ prop: "minHeight", transform: vt });
le({ prop: "size", cssProperty: "width", transform: vt });
le({ prop: "size", cssProperty: "height", transform: vt });
const G2 = le({ prop: "boxSizing" });
Wa(W2, _d, V2, q2, U2, X2, G2);
const K2 = {
    border: { themeKey: "borders", transform: en },
    borderTop: { themeKey: "borders", transform: en },
    borderRight: { themeKey: "borders", transform: en },
    borderBottom: { themeKey: "borders", transform: en },
    borderLeft: { themeKey: "borders", transform: en },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Va },
    color: { themeKey: "palette", transform: Ki },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Ki,
    },
    backgroundColor: { themeKey: "palette", transform: Ki },
    p: { style: Pe },
    pt: { style: Pe },
    pr: { style: Pe },
    pb: { style: Pe },
    pl: { style: Pe },
    px: { style: Pe },
    py: { style: Pe },
    padding: { style: Pe },
    paddingTop: { style: Pe },
    paddingRight: { style: Pe },
    paddingBottom: { style: Pe },
    paddingLeft: { style: Pe },
    paddingX: { style: Pe },
    paddingY: { style: Pe },
    paddingInline: { style: Pe },
    paddingInlineStart: { style: Pe },
    paddingInlineEnd: { style: Pe },
    paddingBlock: { style: Pe },
    paddingBlockStart: { style: Pe },
    paddingBlockEnd: { style: Pe },
    m: { style: Ee },
    mt: { style: Ee },
    mr: { style: Ee },
    mb: { style: Ee },
    ml: { style: Ee },
    mx: { style: Ee },
    my: { style: Ee },
    margin: { style: Ee },
    marginTop: { style: Ee },
    marginRight: { style: Ee },
    marginBottom: { style: Ee },
    marginLeft: { style: Ee },
    marginX: { style: Ee },
    marginY: { style: Ee },
    marginInline: { style: Ee },
    marginInlineStart: { style: Ee },
    marginInlineEnd: { style: Ee },
    marginBlock: { style: Ee },
    marginBlockStart: { style: Ee },
    marginBlockEnd: { style: Ee },
    displayPrint: {
      cssProperty: !1,
      transform: (t) => ({ "@media print": { display: t } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: qa },
    rowGap: { style: Xa },
    columnGap: { style: Ua },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: vt },
    maxWidth: { style: _d },
    minWidth: { transform: vt },
    height: { transform: vt },
    maxHeight: { transform: vt },
    minHeight: { transform: vt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Cd = K2;
function Y2(...t) {
  const e = t.reduce((i, r) => i.concat(Object.keys(r)), []),
    n = new Set(e);
  return t.every((i) => n.size === Object.keys(i).length);
}
function Q2(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Z2() {
  function t(n, i, r, s) {
    const o = { [n]: i, theme: r },
      a = s[n];
    if (!a) return { [n]: i };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (i == null) return null;
    if (u === "typography" && i === "inherit") return { [n]: i };
    const f = Ha(r, u) || {};
    return d
      ? d(o)
      : Sn(o, i, (g) => {
          let m = la(f, c, g);
          return (
            g === m &&
              typeof g == "string" &&
              (m = la(f, c, `${n}${g === "default" ? "" : sn(g)}`, g)),
            l === !1 ? m : { [l]: m }
          );
        });
  }
  function e(n) {
    var i;
    const { sx: r, theme: s = {} } = n || {};
    if (!r) return null;
    const o = (i = s.unstable_sxConfig) != null ? i : Cd;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(s);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = f2(s.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((p) => {
          const g = Q2(u[p], s);
          if (g != null)
            if (typeof g == "object")
              if (o[p]) f = Yr(f, t(p, g, s, o));
              else {
                const m = Sn({ theme: s }, g, (b) => ({ [p]: b }));
                Y2(m, g) ? (f[p] = e({ sx: g, theme: s })) : (f = Yr(f, m));
              }
            else f = Yr(f, t(p, g, s, o));
        }),
        p2(d, f)
      );
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return e;
}
const Ng = Z2();
Ng.filterProps = ["sx"];
const Ed = Ng,
  J2 = ["breakpoints", "palette", "spacing", "shape"];
function Pd(t = {}, ...e) {
  const { breakpoints: n = {}, palette: i = {}, spacing: r, shape: s = {} } = t,
    o = Cn(t, J2),
    a = u2(n),
    l = b2(r);
  let u = yn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: J({ mode: "light" }, i),
      spacing: l,
      shape: J({}, d2, s),
    },
    o,
  );
  return (
    (u = e.reduce((c, d) => yn(c, d), u)),
    (u.unstable_sxConfig = J({}, Cd, o == null ? void 0 : o.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ed({ sx: d, theme: this });
    }),
    u
  );
}
function eS(t) {
  return Object.keys(t).length === 0;
}
function tS(t = null) {
  const e = j.useContext($g);
  return !e || eS(e) ? t : e;
}
const nS = Pd();
function iS(t = nS) {
  return tS(t);
}
const rS = ["variant"];
function Np(t) {
  return t.length === 0;
}
function Bg(t) {
  const { variant: e } = t,
    n = Cn(t, rS);
  let i = e || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((r) => {
        r === "color"
          ? (i += Np(i) ? t[r] : sn(t[r]))
          : (i += `${Np(i) ? r : sn(r)}${sn(t[r].toString())}`);
      }),
    i
  );
}
const sS = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function oS(t) {
  return Object.keys(t).length === 0;
}
function aS(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96;
}
const lS = (t, e) =>
    e.components && e.components[t] && e.components[t].styleOverrides
      ? e.components[t].styleOverrides
      : null,
  uS = (t, e) => {
    let n = [];
    e &&
      e.components &&
      e.components[t] &&
      e.components[t].variants &&
      (n = e.components[t].variants);
    const i = {};
    return (
      n.forEach((r) => {
        const s = Bg(r.props);
        i[s] = r.style;
      }),
      i
    );
  },
  cS = (t, e, n, i) => {
    var r, s;
    const { ownerState: o = {} } = t,
      a = [],
      l =
        n == null || (r = n.components) == null || (s = r[i]) == null
          ? void 0
          : s.variants;
    return (
      l &&
        l.forEach((u) => {
          let c = !0;
          Object.keys(u.props).forEach((d) => {
            o[d] !== u.props[d] && t[d] !== u.props[d] && (c = !1);
          }),
            c && a.push(e[Bg(u.props)]);
        }),
      a
    );
  };
function zo(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const dS = Pd();
function Mr({ defaultTheme: t, theme: e, themeId: n }) {
  return oS(e) ? t : e[n] || e;
}
function fS(t = {}) {
  const {
      themeId: e,
      defaultTheme: n = dS,
      rootShouldForwardProp: i = zo,
      slotShouldForwardProp: r = zo,
    } = t,
    s = (o) =>
      Ed(J({}, o, { theme: Mr(J({}, o, { defaultTheme: n, themeId: e })) }));
  return (
    (s.__mui_systemSx = !0),
    (o, a = {}) => {
      o2(o, (w) => w.filter((x) => !(x != null && x.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f,
        } = a,
        p = Cn(a, sS),
        g = c !== void 0 ? c : (u && u !== "Root") || !1,
        m = d || !1;
      let b,
        y = zo;
      u === "Root" ? (y = i) : u ? (y = r) : aS(o) && (y = void 0);
      const h = s2(o, J({ shouldForwardProp: y, label: b }, p)),
        v = (w, ...x) => {
          const k = x
            ? x.map((A) =>
                typeof A == "function" && A.__emotion_real !== A
                  ? (_) =>
                      A(
                        J({}, _, {
                          theme: Mr(J({}, _, { defaultTheme: n, themeId: e })),
                        }),
                      )
                  : A,
              )
            : [];
          let S = w;
          l &&
            f &&
            k.push((A) => {
              const _ = Mr(J({}, A, { defaultTheme: n, themeId: e })),
                C = lS(l, _);
              if (C) {
                const I = {};
                return (
                  Object.entries(C).forEach(([R, F]) => {
                    I[R] =
                      typeof F == "function" ? F(J({}, A, { theme: _ })) : F;
                  }),
                  f(A, I)
                );
              }
              return null;
            }),
            l &&
              !g &&
              k.push((A) => {
                const _ = Mr(J({}, A, { defaultTheme: n, themeId: e }));
                return cS(A, uS(l, _), _, l);
              }),
            m || k.push(s);
          const P = k.length - x.length;
          if (Array.isArray(w) && P > 0) {
            const A = new Array(P).fill("");
            (S = [...w, ...A]), (S.raw = [...w.raw, ...A]);
          } else
            typeof w == "function" &&
              w.__emotion_real !== w &&
              (S = (A) =>
                w(
                  J({}, A, {
                    theme: Mr(J({}, A, { defaultTheme: n, themeId: e })),
                  }),
                ));
          const E = h(S, ...k);
          return o.muiName && (E.muiName = o.muiName), E;
        };
      return h.withConfig && (v.withConfig = h.withConfig), v;
    }
  );
}
function pS(t) {
  const { theme: e, name: n, props: i } = t;
  return !e ||
    !e.components ||
    !e.components[n] ||
    !e.components[n].defaultProps
    ? i
    : kg(e.components[n].defaultProps, i);
}
function hS({ props: t, name: e, defaultTheme: n, themeId: i }) {
  let r = iS(n);
  return i && (r = r[i] || r), pS({ theme: r, name: e, props: t });
}
function Hg(t, e = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function mS(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let n = t.match(e);
  return (
    n && n[0].length === 1 && (n = n.map((i) => i + i)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((i, r) =>
            r < 3
              ? parseInt(i, 16)
              : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3,
          )
          .join(", ")})`
      : ""
  );
}
function dr(t) {
  if (t.type) return t;
  if (t.charAt(0) === "#") return dr(mS(t));
  const e = t.indexOf("("),
    n = t.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(ur(9, t));
  let i = t.substring(e + 1, t.length - 1),
    r;
  if (n === "color") {
    if (
      ((i = i.split(" ")),
      (r = i.shift()),
      i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        r,
      ) === -1)
    )
      throw new Error(ur(10, r));
  } else i = i.split(",");
  return (
    (i = i.map((s) => parseFloat(s))), { type: n, values: i, colorSpace: r }
  );
}
function Td(t) {
  const { type: e, colorSpace: n } = t;
  let { values: i } = t;
  return (
    e.indexOf("rgb") !== -1
      ? (i = i.map((r, s) => (s < 3 ? parseInt(r, 10) : r)))
      : e.indexOf("hsl") !== -1 && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    e.indexOf("color") !== -1
      ? (i = `${n} ${i.join(" ")}`)
      : (i = `${i.join(", ")}`),
    `${e}(${i})`
  );
}
function gS(t) {
  t = dr(t);
  const { values: e } = t,
    n = e[0],
    i = e[1] / 100,
    r = e[2] / 100,
    s = i * Math.min(r, 1 - r),
    o = (u, c = (u + n / 30) % 12) =>
      r - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(o(0) * 255),
    Math.round(o(8) * 255),
    Math.round(o(4) * 255),
  ];
  return (
    t.type === "hsla" && ((a += "a"), l.push(e[3])), Td({ type: a, values: l })
  );
}
function Bp(t) {
  t = dr(t);
  let e = t.type === "hsl" || t.type === "hsla" ? dr(gS(t)).values : t.values;
  return (
    (e = e.map(
      (n) => (
        t.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3))
  );
}
function yS(t, e) {
  const n = Bp(t),
    i = Bp(e);
  return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05);
}
function vS(t, e) {
  if (((t = dr(t)), (e = Hg(e)), t.type.indexOf("hsl") !== -1))
    t.values[2] *= 1 - e;
  else if (t.type.indexOf("rgb") !== -1 || t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] *= 1 - e;
  return Td(t);
}
function wS(t, e) {
  if (((t = dr(t)), (e = Hg(e)), t.type.indexOf("hsl") !== -1))
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] += (255 - t.values[n]) * e;
  else if (t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] += (1 - t.values[n]) * e;
  return Td(t);
}
function bS(t, e) {
  return J(
    {
      toolbar: {
        minHeight: 56,
        [t.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [t.up("sm")]: { minHeight: 64 },
      },
    },
    e,
  );
}
const xS = { black: "#000", white: "#fff" },
  xs = xS,
  SS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  kS = SS,
  _S = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Si = _S,
  CS = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  ki = CS,
  ES = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Or = ES,
  PS = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  _i = PS,
  TS = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Ci = TS,
  zS = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Ei = zS,
  AS = ["mode", "contrastThreshold", "tonalOffset"],
  Hp = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: xs.white, default: xs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Dl = {
    text: {
      primary: xs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: xs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Wp(t, e, n, i) {
  const r = i.light || i,
    s = i.dark || i * 1.5;
  t[e] ||
    (t.hasOwnProperty(n)
      ? (t[e] = t[n])
      : e === "light"
      ? (t.light = wS(t.main, r))
      : e === "dark" && (t.dark = vS(t.main, s)));
}
function MS(t = "light") {
  return t === "dark"
    ? { main: _i[200], light: _i[50], dark: _i[400] }
    : { main: _i[700], light: _i[400], dark: _i[800] };
}
function OS(t = "light") {
  return t === "dark"
    ? { main: Si[200], light: Si[50], dark: Si[400] }
    : { main: Si[500], light: Si[300], dark: Si[700] };
}
function IS(t = "light") {
  return t === "dark"
    ? { main: ki[500], light: ki[300], dark: ki[700] }
    : { main: ki[700], light: ki[400], dark: ki[800] };
}
function RS(t = "light") {
  return t === "dark"
    ? { main: Ci[400], light: Ci[300], dark: Ci[700] }
    : { main: Ci[700], light: Ci[500], dark: Ci[900] };
}
function LS(t = "light") {
  return t === "dark"
    ? { main: Ei[400], light: Ei[300], dark: Ei[700] }
    : { main: Ei[800], light: Ei[500], dark: Ei[900] };
}
function DS(t = "light") {
  return t === "dark"
    ? { main: Or[400], light: Or[300], dark: Or[700] }
    : { main: "#ed6c02", light: Or[500], dark: Or[900] };
}
function $S(t) {
  const {
      mode: e = "light",
      contrastThreshold: n = 3,
      tonalOffset: i = 0.2,
    } = t,
    r = Cn(t, AS),
    s = t.primary || MS(e),
    o = t.secondary || OS(e),
    a = t.error || IS(e),
    l = t.info || RS(e),
    u = t.success || LS(e),
    c = t.warning || DS(e);
  function d(m) {
    return yS(m, Dl.text.primary) >= n ? Dl.text.primary : Hp.text.primary;
  }
  const f = ({
      color: m,
      name: b,
      mainShade: y = 500,
      lightShade: h = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((m = J({}, m)),
        !m.main && m[y] && (m.main = m[y]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(ur(11, b ? ` (${b})` : "", y));
      if (typeof m.main != "string")
        throw new Error(ur(12, b ? ` (${b})` : "", JSON.stringify(m.main)));
      return (
        Wp(m, "light", h, i),
        Wp(m, "dark", v, i),
        m.contrastText || (m.contrastText = d(m.main)),
        m
      );
    },
    p = { dark: Dl, light: Hp };
  return yn(
    J(
      {
        common: J({}, xs),
        mode: e,
        primary: f({ color: s, name: "primary" }),
        secondary: f({
          color: o,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: kS,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: i,
      },
      p[e],
    ),
    r,
  );
}
const jS = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function FS(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Vp = { textTransform: "uppercase" },
  qp = '"Roboto", "Helvetica", "Arial", sans-serif';
function NS(t, e) {
  const n = typeof e == "function" ? e(t) : e,
    {
      fontFamily: i = qp,
      fontSize: r = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = Cn(n, jS),
    p = r / 14,
    g = d || ((y) => `${(y / u) * p}rem`),
    m = (y, h, v, w, x) =>
      J(
        { fontFamily: i, fontWeight: y, fontSize: g(h), lineHeight: v },
        i === qp ? { letterSpacing: `${FS(w / h)}em` } : {},
        x,
        c,
      ),
    b = {
      h1: m(s, 96, 1.167, -1.5),
      h2: m(s, 60, 1.2, -0.5),
      h3: m(o, 48, 1.167, 0),
      h4: m(o, 34, 1.235, 0.25),
      h5: m(o, 24, 1.334, 0),
      h6: m(a, 20, 1.6, 0.15),
      subtitle1: m(o, 16, 1.75, 0.15),
      subtitle2: m(a, 14, 1.57, 0.1),
      body1: m(o, 16, 1.5, 0.15),
      body2: m(o, 14, 1.43, 0.15),
      button: m(a, 14, 1.75, 0.4, Vp),
      caption: m(o, 12, 1.66, 0.4),
      overline: m(o, 12, 2.66, 1, Vp),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return yn(
    J(
      {
        htmlFontSize: u,
        pxToRem: g,
        fontFamily: i,
        fontSize: r,
        fontWeightLight: s,
        fontWeightRegular: o,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      b,
    ),
    f,
    { clone: !1 },
  );
}
const BS = 0.2,
  HS = 0.14,
  WS = 0.12;
function we(...t) {
  return [
    `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${BS})`,
    `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${HS})`,
    `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${WS})`,
  ].join(",");
}
const VS = [
    "none",
    we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  qS = VS,
  US = ["duration", "easing", "delay"],
  XS = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  GS = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Up(t) {
  return `${Math.round(t)}ms`;
}
function KS(t) {
  if (!t) return 0;
  const e = t / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function YS(t) {
  const e = J({}, XS, t.easing),
    n = J({}, GS, t.duration);
  return J(
    {
      getAutoHeightDuration: KS,
      create: (r = ["all"], s = {}) => {
        const {
          duration: o = n.standard,
          easing: a = e.easeInOut,
          delay: l = 0,
        } = s;
        return (
          Cn(s, US),
          (Array.isArray(r) ? r : [r])
            .map(
              (u) =>
                `${u} ${typeof o == "string" ? o : Up(o)} ${a} ${
                  typeof l == "string" ? l : Up(l)
                }`,
            )
            .join(",")
        );
      },
    },
    t,
    { easing: e, duration: n },
  );
}
const QS = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  ZS = QS,
  JS = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function e5(t = {}, ...e) {
  const {
      mixins: n = {},
      palette: i = {},
      transitions: r = {},
      typography: s = {},
    } = t,
    o = Cn(t, JS);
  if (t.vars) throw new Error(ur(18));
  const a = $S(i),
    l = Pd(t);
  let u = yn(l, {
    mixins: bS(l.breakpoints, n),
    palette: a,
    shadows: qS.slice(),
    typography: NS(a, s),
    transitions: YS(r),
    zIndex: J({}, ZS),
  });
  return (
    (u = yn(u, o)),
    (u = e.reduce((c, d) => yn(c, d), u)),
    (u.unstable_sxConfig = J({}, Cd, o == null ? void 0 : o.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ed({ sx: d, theme: this });
    }),
    u
  );
}
const t5 = e5(),
  Wg = t5,
  Vg = "$$material";
function n5({ props: t, name: e }) {
  return hS({ props: t, name: e, defaultTheme: Wg, themeId: Vg });
}
const i5 = (t) => zo(t) && t !== "classes",
  r5 = fS({ themeId: Vg, defaultTheme: Wg, rootShouldForwardProp: i5 }),
  s5 = r5;
function o5(t) {
  return Cg("MuiSvgIcon", t);
}
dx("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const a5 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  l5 = (t) => {
    const { color: e, fontSize: n, classes: i } = t,
      r = {
        root: ["root", e !== "inherit" && `color${sn(e)}`, `fontSize${sn(n)}`],
      };
    return ax(r, o5, i);
  },
  u5 = s5("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        n.color !== "inherit" && e[`color${sn(n.color)}`],
        e[`fontSize${sn(n.fontSize)}`],
      ];
    },
  })(({ theme: t, ownerState: e }) => {
    var n, i, r, s, o, a, l, u, c, d, f, p, g, m, b, y, h;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: e.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = t.transitions) == null || (i = n.create) == null
          ? void 0
          : i.call(n, "fill", {
              duration:
                (r = t.transitions) == null || (s = r.duration) == null
                  ? void 0
                  : s.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((o = t.typography) == null || (a = o.pxToRem) == null
            ? void 0
            : a.call(o, 20)) || "1.25rem",
        medium:
          ((l = t.typography) == null || (u = l.pxToRem) == null
            ? void 0
            : u.call(l, 24)) || "1.5rem",
        large:
          ((c = t.typography) == null || (d = c.pxToRem) == null
            ? void 0
            : d.call(c, 35)) || "2.1875rem",
      }[e.fontSize],
      color:
        (f =
          (p = (t.vars || t).palette) == null || (g = p[e.color]) == null
            ? void 0
            : g.main) != null
          ? f
          : {
              action:
                (m = (t.vars || t).palette) == null || (b = m.action) == null
                  ? void 0
                  : b.active,
              disabled:
                (y = (t.vars || t).palette) == null || (h = y.action) == null
                  ? void 0
                  : h.disabled,
              inherit: void 0,
            }[e.color],
    };
  }),
  qg = j.forwardRef(function (e, n) {
    const i = n5({ props: e, name: "MuiSvgIcon" }),
      {
        children: r,
        className: s,
        color: o = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = i,
      p = Cn(i, a5),
      g = j.isValidElement(r) && r.type === "svg",
      m = J({}, i, {
        color: o,
        component: a,
        fontSize: l,
        instanceFontSize: e.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: g,
      }),
      b = {};
    c || (b.viewBox = f);
    const y = l5(m);
    return T.jsxs(
      u5,
      J(
        {
          as: a,
          className: fx(y.root, s),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        b,
        p,
        g && r.props,
        {
          ownerState: m,
          children: [
            g ? r.props.children : r,
            d ? T.jsx("title", { children: d }) : null,
          ],
        },
      ),
    );
  });
qg.muiName = "SvgIcon";
const Xp = qg;
function c5(t, e) {
  function n(i, r) {
    return T.jsx(
      Xp,
      J({ "data-testid": `${e}Icon`, ref: r }, i, { children: t }),
    );
  }
  return (n.muiName = Xp.muiName), j.memo(j.forwardRef(n));
}
const d5 = {
    configure: (t) => {
      _g.configure(t);
    },
  },
  f5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: sn,
        createChainedFunction: Bb,
        createSvgIcon: c5,
        debounce: Hb,
        deprecatedPropType: Wb,
        isMuiElement: Vb,
        ownerDocument: bg,
        ownerWindow: qb,
        requirePropFactory: Ub,
        setRef: xg,
        unstable_ClassNameGenerator: d5,
        unstable_useEnhancedEffect: Sg,
        unstable_useId: Kb,
        unsupportedProp: Yb,
        useControlled: Qb,
        useEventCallback: Zb,
        useForkRef: Jb,
        useIsFocusVisible: ox,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  p5 = sv(f5);
var Gp;
function Ga() {
  return (
    Gp ||
      ((Gp = 1),
      (function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return e.createSvgIcon;
            },
          });
        var e = p5;
      })(Il)),
    Il
  );
}
var h5 = $a;
Object.defineProperty(yd, "__esModule", { value: !0 });
var Ug = (yd.default = void 0),
  m5 = h5(Ga()),
  g5 = T,
  y5 = (0, m5.default)(
    (0, g5.jsx)("path", {
      d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    }),
    "KeyboardArrowDown",
  );
Ug = yd.default = y5;
const zd = ({ link: t, isdark: e }) =>
  T.jsx(v5, {
    href: t,
    isdark: e,
    children: T.jsx(Ug, {
      sx: { width: 64, height: 64, animation: "BottomUpDown 1.5s 0s infinite" },
    }),
  });
zd.defaultProps = { link: "#", isdark: !0 };
zd.propTypes = { link: je.string, isdark: je.bool };
const v5 = U.a`
	display: flex;
	align-items: center;
	position: absolute;
	height: fit-content;
	width: fit-content;
	cursor: pointer;
	bottom: 0px;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	@keyframes BottomUpDown {
		0% {
			bottom: 0px;
		}
		50% {
			bottom: 20px;
		}
		100% {
			bottom: 0px;
		}
	}
	margin: 0 calc(50% - 32px);
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
	z-index: 10;
`,
  Ka = j.memo(zd),
  Ad = ({ text: t }) =>
    T.jsx("div", {
      className: "spinner-container",
      children: T.jsxs("div", {
        className: "spinner",
        children: [
          t,
          T.jsx("div", { className: "spinner-sector spinner-sector-red" }),
          T.jsx("div", { className: "spinner-sector spinner-sector-blue" }),
          T.jsx("div", { className: "spinner-sector spinner-sector-green" }),
        ],
      }),
    });
Ad.propTypes = { text: je.string };
Ad.defaultProps = { text: "" };
const fr = j.memo(Ad);
function w5() {
  return T.jsx("div", {
    className: "spinner-container",
    children: T.jsxs("div", {
      className: "spinner-s",
      children: [
        T.jsx("div", { className: "spinner-sector spinner-sector-red" }),
        T.jsx("div", { className: "spinner-sector spinner-sector-blue" }),
        T.jsx("div", { className: "spinner-sector spinner-sector-green" }),
      ],
    }),
  });
}
const b5 = j.memo(w5);
function Md({ show: t, isdark: e, setDark: n }) {
  const i = [
    { id: "home", title: "home" },
    { id: "about", title: "about me" },
    { id: "portfolio", title: "portfolio" },
    { id: "projects", title: "projects" },
    { id: "contact", title: "contact" },
  ];
  return T.jsx(x5, {
    show: t,
    isdark: e,
    children: T.jsxs(S5, {
      isdark: e,
      children: [
        T.jsx(Gg, { setDark: n, isdark: e }),
        i.map((r, s) =>
          T.jsx(
            k5,
            {
              children: T.jsx("a", {
                className: "link",
                href: `#${r.id}`,
                children: r.title,
              }),
            },
            s,
          ),
        ),
      ],
    }),
  });
}
Md.propTypes = { show: je.bool, isdark: je.bool, setDark: je.func };
Md.defaultProps = { show: !1, isdark: !1 };
const x5 = U.div`
    display: grid;
    width: 204px;
    height: calc(100vh - 70px);
    top: 70px;
    position: fixed;
    transform: ${(t) => (t.show ? "translateX(0%)" : "translateX(100%)")};
    opacity: ${(t) => (t.show ? "1" : "0.5")};
    transition: all 1024ms ease;
    @media (max-width: 540px) {
		max-height: calc(100vh - 56px);
        height: max-content;
        top: 56px;
        width: 100%;
        transform: ${(t) => (t.show ? "translateX(0%)" : "translateY(-100vh)")};
    }
    background: url("https://user-images.githubusercontent.com/85221003/190644474-da925862-c4fe-4dc8-96dc-e2df2c7ced9a.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    right: 0;
    align-items: center;
    justify-content: space-around;
`,
  S5 = U.ul`
    display: grid;
    width: 100%;
    grid-gap: 4vh;
    margin-bottom: 2vh;
    padding: 1rem;
    grid-template-columns: auto;
    position: relative;
    color: ${({ isdark: t }) => (t ? "#15023a" : "#fff")};
`,
  k5 = U.li`
    /* width: max-content; */
    display: grid;
    margin: 0 auto;
    .link {
        margin: 0 auto;
    width: max-content;
    text-decoration: none;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    display: inline-block;
    position: relative;
    transition-delay: 250ms;
    text-transform: capitalize;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0px;
        left: 0;
        /* background-color: transparent; */
        transform-origin: bottom right;
        transition: transform 512ms ease-out;
        border-radius: 32px;
        /* background: linear-gradient(#5cb6f9, #00c4cc, #5ae2e2); */
    }
    &:hover {
        /* color: #5ae2e2; */
        /* font-weight: 600; */
        opacity: 0.75;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom  left;
    }
`;
function _5() {
  return T.jsxs("div", {
    className: "map-container",
    children: [
      T.jsx(fr, { test: "loading" }),
      T.jsx("iframe", {
        title: "Map",
        id: "map",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968.565426264222!2d85.75219930746348!3d20.294415313716772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1663484238879!5m2!1sen!2sin",
        referrerPolicy: "no-referrer-when-downgrade",
        loading: "lazy",
      }),
    ],
  });
}
const C5 = j.memo(_5);
function Od({ data: t, isdark: e }) {
  return T.jsx(P5, {
    children: T.jsx("div", {
      "data-aos": "zoom-in",
      children:
        t.type === "project"
          ? T.jsxs(T5, {
              isdark: e,
              children: [
                T.jsx(z5, {
                  children: T.jsxs(A5, {
                    children: [
                      T.jsx(M5, {
                        children: T.jsx(O5, { src: t.icon, alt: t.title }),
                      }),
                      T.jsx("h1", { children: t.title }),
                      T.jsx("p", { className: "desc", children: t.desc }),
                      T.jsx("a", {
                        target: "_blank",
                        href: t.link,
                        rel: "noreferrer",
                        children: "Link",
                      }),
                    ],
                  }),
                }),
                T.jsx(I5, {
                  children: T.jsx(R5, {
                    src: t.image,
                    loading: "lazy",
                    alt: t.title,
                  }),
                }),
              ],
            })
          : T.jsx(E5, {
              src: t.image,
              alt: t.title,
              onClick: () => {
                window.open(t.link, "_blank");
              },
              loading: "lazy",
            }),
    }),
  });
}
Od.propTypes = { data: je.object.isRequired, isdark: je.bool };
Od.defaultProps = { isdark: !1 };
const E5 = U.img`
	width: 764px;
	height: auto;
	max-width: 50vw;
	max-height: 75vh;
	object-fit: contain;
	cursor: pointer;
	overflow: hidden;
`,
  P5 = U.div`
	width: max-content;
	max-width: 75vw !important;
	height: 100%;
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: center;
	* {
		overflow: hidden !important;
	}
`,
  T5 = U.div`
	width: 764px;
	height: 400px;
	background-color: ${({ isdark: t }) =>
    t ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)"};
	color: ${({ isdark: t }) => (t ? "#000" : "#fff")};
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 75vw;
	max-height: 50vh;
	@media (max-width: 540px) {
		max-height: 40vh;
	}
	@media (max-width: 380px) {
		max-height: 33vh;
	}
`,
  z5 = U.div`
	flex: 4;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
`,
  A5 = U.div`
	width: 90%;
	height: max-content;
	max-height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h1 {
		font-size: 23px;
		font-weight: 600;
		@media (max-width: 540px) {
			font-size: 16px;
		}
		@media (max-width: 380px) {
			font-size: 12px;
		}
	}
	p {
		margin: 8px 0;
		max-width: 100%;
		max-height: 144px;
		/* font-style: italic; */
		font-family: 'Comic Sans MS', cursive, monospace;
		font-weight: 300;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.6px;
		@media (max-width: 540px) {
			font-size: 11px;
			line-height: 16px;
		}
		@media (max-width: 380px) {
			font-size: 8px;
			line-height: 14px;
		}
	}
	a {
		font-size: 16px;
		@media (max-width: 540px) {
			font-size: 12px;
		}
		@media (max-width: 380px) {
			font-size: 10px;
		}
		font-weight: 600;
		text-decoration: underline;
		cursor: pointer;
		color: rgb(0, 196, 204);
	}
`,
  M5 = U.div`
	width: 40px;
	height: 40px;
	@media (max-width: 540px) {
		width: 30px;
		height: 30px;
	}
	@media (max-width: 380px) {
		width: 20px;
		height: 20px;
	}
	border-radius: 50%;
	background-color: rgb(0, 196, 204);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
`,
  O5 = U.img`
	width: 25px;
	@media (max-width: 540px) {
		width: 20px;
	}
	@media (max-width: 380px) {
		width: 15px;
	}
`,
  I5 = U.div`
	flex: 8;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`,
  R5 = U.img`
	width: 480px;
	max-width: 30vw;
	transform: rotate(-10deg);
`,
  Kp = [
    {
      id: 1,
      title: "SIH",
      image:
        "https://user-images.githubusercontent.com/85221003/190645643-00c8a76b-2029-4761-bf99-b00fab2e8e63.png",
      link: "https://drive.google.com/file/d/1R9RqFUAuQWpAuvbs71dDrEpK5SCn1JK5/view?usp=sharing",
    },
    {
      id: 2,
      title: "ICPC",
      image:
        "https://user-images.githubusercontent.com/85221003/190646074-6f2334d5-9a09-450b-a9fa-d7df7420562c.png",
      link: "https://drive.google.com/file/d/1d4P6RoOAOihgkG-W-187fgQ3NlCwjYIk/view?usp=sharing",
    },
    {
      id: 3,
      title: "GeeksFiesta",
      image:
        "https://user-images.githubusercontent.com/85221003/190646226-65d7cfd3-6cf3-413b-a112-5945d355c5d7.png",
      link: "https://drive.google.com/file/d/1GdkrSHH32-dpBqvRd-AWc2esLDZ8Swlh/view?usp=drive_link",
    },
    {
      id: 4,
      title: "LeetCode",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251411209-20d21460-4d81-4e84-b36b-fb5c0e313176.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T094114Z&X-Amz-Expires=300&X-Amz-Signature=536f5a9b66cf44d4403825da42fe3eba560db116e914685f8c3cd7f5d5278303&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://leetcode.com/HarshRajGupta/",
    },
    {
      id: 5,
      title: "CodeChef",
      image:
        "https://user-images.githubusercontent.com/85221003/190646494-3553d4ac-a243-4c7e-9ae9-56aa7c0111fd.png",
      link: "https://www.codechef.com/users/HarshRajGupta",
    },
    {
      id: 6,
      title: "CodeForces",
      image:
        "https://user-images.githubusercontent.com/85221003/190646468-bcc72b58-bc09-4523-8a1a-1747d8477167.png",
      link: "https://codeforces.com/profile/Harsh_Raj_Gupta",
    },
    {
      id: 7,
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251392263-3151bfa7-081a-4820-9e7c-9b14fdcbe4c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083018Z&X-Amz-Expires=300&X-Amz-Signature=0daf76d7edcdbefa77b7e130b70ce226f227216de7962b17c9608ebeec04f8b8&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
    },
    {
      id: 8,
      title: "HTML mod",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251400257-a16e70eb-6a0e-4760-aaea-2c08e9cbabef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T085954Z&X-Amz-Expires=300&X-Amz-Signature=c8125c59391554ae48ea26442b36599606c1d6f99c60bafeacf3109850400610&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: 9,
      title: "KickStart",
      image:
        "https://user-images.githubusercontent.com/85221003/190646530-e3a7ece7-8871-4a43-a673-01733173ee40.png",
      link: "https://drive.google.com/file/d/1CTWHlRpquxT3k4dnNksvr-x03u6k-Mrh/view?usp=drive_link",
    },
  ],
  L5 = [
    {
      id: 1,
      title: "SIH",
      image:
        "https://user-images.githubusercontent.com/85221003/190645643-00c8a76b-2029-4761-bf99-b00fab2e8e63.png",
      link: "https://drive.google.com/file/d/1R9RqFUAuQWpAuvbs71dDrEpK5SCn1JK5/view?usp=sharing",
    },
    {
      id: 2,
      title: "ICPC",
      image:
        "https://user-images.githubusercontent.com/85221003/190646074-6f2334d5-9a09-450b-a9fa-d7df7420562c.png",
      link: "https://drive.google.com/file/d/1d4P6RoOAOihgkG-W-187fgQ3NlCwjYIk/view?usp=sharing",
    },
    {
      id: 3,
      title: "GeeksFiesta",
      image:
        "https://user-images.githubusercontent.com/85221003/190646226-65d7cfd3-6cf3-413b-a112-5945d355c5d7.png",
      link: "https://drive.google.com/file/d/1GdkrSHH32-dpBqvRd-AWc2esLDZ8Swlh/view?usp=drive_link",
    },
    {
      id: 4,
      title: "30 Day of Cloud",
      image:
        "https://user-images.githubusercontent.com/85221003/190647051-a2e9b289-6e67-4f60-b11b-9e514a4aea19.png",
      link: "https://drive.google.com/file/d/1hwDeG7MfGQIZputiH4zlUX0TM4va0tRb/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Hack A Web",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251412598-f3f4b723-3e12-4a12-a3c1-0cd5cc1820ff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T094628Z&X-Amz-Expires=300&X-Amz-Signature=777fe2c6a5ad827e69d6ef978956534883c9265907be783d3a1ff233ddf58755&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://drive.google.com/file/d/1MGMu50F6_dZHfw_pbfBZCVHBAdS8rdH4/view?usp=drive_link",
    },
    {
      id: 6,
      title: "TCS CodeVita",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251412930-6d778472-c9f8-4734-a49a-69d120be4899.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T094735Z&X-Amz-Expires=300&X-Amz-Signature=6254b51fbb2eda3ea13b06401e48a317f1a63a2fc76f155d4624a70b06667de2&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://drive.google.com/file/d/1BG1MLd0J6fX258IK67OljCxRRQ-4_11d/view?usp=drive_link",
    },
    {
      id: 7,
      title: "NIPAM",
      image:
        "https://user-images.githubusercontent.com/85221003/190647099-964d16fa-cdf2-450d-ad72-231725c83cbf.png",
      link: "https://drive.google.com/file/d/1IZYsujMiGGMTbLIRkgKB_3TLSZa2TqkF/view?usp=drive_link",
    },
    {
      id: 8,
      title: "KickStart",
      image:
        "https://user-images.githubusercontent.com/85221003/190646530-e3a7ece7-8871-4a43-a673-01733173ee40.png",
      link: "https://drive.google.com/file/d/1CTWHlRpquxT3k4dnNksvr-x03u6k-Mrh/view?usp=drive_link",
    },
    {
      id: 9,
      title: "Test The Waters",
      image:
        "https://user-images.githubusercontent.com/85221003/190647342-2799a943-1f09-4fe6-9e09-ebe36d0f05ae.png",
      link: "https://drive.google.com/file/d/1WUEDw9wCrHA1nGLwDCFfDtGC-9QlYi7y/view?usp=drive_link",
    },
  ],
  D5 = [
    {
      id: 1,
      title: "Data Analytics on AWS",
      image:
        "https://user-images.githubusercontent.com/85221003/190647418-0350910d-4fad-4312-b454-c8de9035c5f1.png",
      link: "https://drive.google.com/file/d/1PvWCg8u2KuQRioyvnK-MGEtnHbmB4IDR/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Algorithmic Toolbox",
      image:
        "https://user-images.githubusercontent.com/85221003/190647668-cca88d55-d522-4450-8459-81dbe2b809fe.png",
      link: "https://drive.google.com/file/d/1Pmp87h6P5P7ZCt4R3PSc9on2YaBj9O-x/view?usp=drive_link",
    },
    {
      id: 3,
      title: "C++",
      image:
        "https://user-images.githubusercontent.com/85221003/190647710-cfee30d7-dd25-4d23-b67f-171afc26e718.png",
      link: "https://drive.google.com/file/d/1sZfXflsFgxdvkFWeT9Yu_nj_ffDN9mYS/view?usp=drive_link",
    },
    {
      id: 4,
      title: "JavaScript",
      image:
        "https://user-images.githubusercontent.com/85221003/190647884-33678cd3-cbfa-4f13-b2dd-a0665a9e7a68.png",
      link: "https://drive.google.com/file/d/1eAC5zKo76yQsEyBPZ09R7XiuqWMDOlwX/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Git/GitHub",
      image:
        "https://user-images.githubusercontent.com/85221003/190648025-a0251b05-29d8-46fb-aa87-7d2d2e717ea5.png",
      link: "https://drive.google.com/file/d/1H39PeDr1vxiaXNSOoDKuwulpSBRZnv8P/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Deep Web",
      image:
        "https://user-images.githubusercontent.com/85221003/190647950-250d20d5-1f52-4dfd-93b5-39342b601792.png",
      link: "https://drive.google.com/file/d/1ceZCgNmVHizxKRspoA6cxTqrNQO-PdPJ/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Web Design",
      image:
        "https://user-images.githubusercontent.com/85221003/190647908-98a03c6b-6bf9-42d9-9019-143f673fa6fc.png",
      link: "https://drive.google.com/file/d/1idnDc4G3Y02APVVtfMT9dEJ7Okl1yEAT/view?usp=drive_link",
    },
  ],
  $5 = [
    {
      id: 1,
      title: "NodeJS",
      image:
        "https://user-images.githubusercontent.com/85221003/190648369-e4b55508-5069-45af-bacb-71bff4d06043.png",
      link: "https://nodejs.org/en",
    },
    {
      id: 2,
      title: "ReactJS",
      image:
        "https://user-images.githubusercontent.com/85221003/190648408-fcf44580-d56a-4e5c-b2b5-72835021c294.png",
      link: "https://react.dev/",
    },
    {
      id: 3,
      title: "MongoDB",
      image:
        "https://user-images.githubusercontent.com/85221003/190648461-ffba68c5-dbf4-4457-a2c4-a00806e052b6.svg",
      link: "https://www.mongodb.com/",
    },
    {
      id: 4,
      title: "AWS",
      image:
        "https://user-images.githubusercontent.com/85221003/190648547-f52108cb-9e00-4e84-a204-5a89e598ede5.png",
      link: "https://aws.amazon.com/",
    },
    {
      id: 5,
      title: "GCloud",
      image:
        "https://user-images.githubusercontent.com/85221003/190648508-50e6bd49-d42a-487c-af29-51de71631e04.png",
      link: "https://cloud.google.com/",
    },
    {
      id: 6,
      title: "Git/GitHub",
      image:
        "https://user-images.githubusercontent.com/85221003/190648997-420e3a2f-b954-4943-9e53-3b3090459ef9.png",
      link: "https://github.com/",
    },
    {
      id: 7,
      title: "Flutter",
      image:
        "https://user-images.githubusercontent.com/85221003/190648493-7398c892-0cb0-407f-849e-94c258281ffe.png",
      link: "https://flutter.dev/",
    },
  ],
  j5 = [
    {
      id: 1,
      title: "JavaScript",
      image:
        "https://user-images.githubusercontent.com/85221003/190649134-dadd7f8b-59c4-4f25-b50f-0c2628ba1f1c.gif",
      link: "https://www.w3schools.com/js/",
    },
    {
      id: 2,
      title: "HTML",
      image:
        "https://user-images.githubusercontent.com/85221003/190649169-d9fba3c4-17ff-497f-a072-fc7340dcede9.png",
      link: "https://www.w3schools.com/html/",
    },
    {
      id: 3,
      title: "CSS",
      image:
        "https://user-images.githubusercontent.com/85221003/190649191-d2597a98-fdf9-45b0-b4fa-8be561932e0f.png",
      link: "https://www.w3schools.com/css/",
    },
    {
      id: 4,
      title: "C++",
      image:
        "https://user-images.githubusercontent.com/85221003/190649217-3e431523-bfe6-4141-b0d3-0ae04cfb3c7e.png",
      link: "https://www.geeksforgeeks.org/c-plus-plus/",
    },
    {
      id: 5,
      title: "Dart",
      image:
        "https://user-images.githubusercontent.com/85221003/190649302-c096b8aa-d919-495f-b2e8-27502de88146.png",
      link: "https://dart.dev/",
    },
    {
      id: 6,
      title: "Python",
      image:
        "https://user-images.githubusercontent.com/85221003/190649368-8b6443be-2f03-4f12-bae7-e076323f8447.gif",
      link: "https://www.geeksforgeeks.org/python-programming-language/",
    },
  ],
  F5 = [
    {
      id: "1",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "A feature rich Text and Code Editor that combines document sharing, editing, and compilation capabilities.",
      img: "https://editor-pro.onrender.com/logo.png",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251392263-3151bfa7-081a-4820-9e7c-9b14fdcbe4c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083018Z&X-Amz-Expires=300&X-Amz-Signature=0daf76d7edcdbefa77b7e130b70ce226f227216de7962b17c9608ebeec04f8b8&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      type: "project",
    },
    {
      id: "2",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor Pro",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/248453998-034cb671-eae8-46fb-966a-a5daf7777bb6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T045406Z&X-Amz-Expires=300&X-Amz-Signature=bcc052a998790828f3408a9e48a6affcd0e0f70963c5b6fe734176779f6305e8&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=652114384",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251392263-3151bfa7-081a-4820-9e7c-9b14fdcbe4c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083018Z&X-Amz-Expires=300&X-Amz-Signature=0daf76d7edcdbefa77b7e130b70ce226f227216de7962b17c9608ebeec04f8b8&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      type: "photo",
    },
    {
      id: "3",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "Real Time Collaboration system allowing 50+ users to edit and share files simultaneously",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251393493-bbb33c15-f89f-42da-a632-c22030f3921a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083440Z&X-Amz-Expires=300&X-Amz-Signature=811ae11db9aec087e439e2ed62a875b17114d6cb7cf546200cbfd70ff0a7e09e&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      type: "project",
    },
    {
      id: "4",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "Support for 40+ programming languages (including Markdown) and Word File. Secure Access management system and updates limited to the original creator.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251393908-1b99345f-cd39-49ba-860b-30a41485dba9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083612Z&X-Amz-Expires=300&X-Amz-Signature=3c76a9a4ab4305aa08dbda707265aff5511b908c4682a3b44fe3d8c0823dd800&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      type: "project",
    },
    {
      id: "5",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "User invitations via email and prompts for real-time updates during collaboration.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251394347-62cea1e0-18bc-4b29-8783-1d5dae23e9a4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083757Z&X-Amz-Expires=300&X-Amz-Signature=0bc5cdeafe5169109fee61fb0e7b39fd11dc2b1fcc18b61a4aefe387edda552b&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      type: "project",
    },
    {
      id: "6",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "A visualizer and extractor for the analysis of html documents.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251372500-21915b4a-7b8f-4462-b4d0-98a1c0c8df65.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T084600Z&X-Amz-Expires=300&X-Amz-Signature=992669cc6bf69350e2f28fa4dcda5a278c751d746fe9d3f3dfb768f3c3d206ee&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "7",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "A visualizer and extractor for the analysis of html documents.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251372500-21915b4a-7b8f-4462-b4d0-98a1c0c8df65.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T084600Z&X-Amz-Expires=300&X-Amz-Signature=992669cc6bf69350e2f28fa4dcda5a278c751d746fe9d3f3dfb768f3c3d206ee&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
      type: "photo",
    },
    {
      id: "8",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "Analyses SEO and offers personalized recommendations for optimizing search engine visibility.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251397981-e07b4451-57b2-44b2-bc52-3a2b439e04ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T085123Z&X-Amz-Expires=300&X-Amz-Signature=36fdcb261436bc09d83798e04b67b05378f926f95b5cb0f38fc1dae1ed4cdc92&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "9",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: " Extracts a diverse range of elements: images, dynamic links, engaging text, and intricate JavaScript.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251400257-a16e70eb-6a0e-4760-aaea-2c08e9cbabef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T085954Z&X-Amz-Expires=300&X-Amz-Signature=c8125c59391554ae48ea26442b36599606c1d6f99c60bafeacf3109850400610&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "10",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "Supports both live URLs and local HTML file uploads, ensuring flexibility and convenience for users.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251396409-98baff58-e743-49ea-83e6-6ecf8bcf0494.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T084547Z&X-Amz-Expires=300&X-Amz-Signature=2620f000b1e9057b2a70e68cfd5d64de1ea7d23ea1ccb3016b927af3f662f476&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
  ],
  N5 = [
    {
      id: "1",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251392263-3151bfa7-081a-4820-9e7c-9b14fdcbe4c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083018Z&X-Amz-Expires=300&X-Amz-Signature=0daf76d7edcdbefa77b7e130b70ce226f227216de7962b17c9608ebeec04f8b8&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
    },
    {
      id: "2",
      link: "https://editorPro.onrender.com/",
      title: "Editor-Pro",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251393493-bbb33c15-f89f-42da-a632-c22030f3921a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083440Z&X-Amz-Expires=300&X-Amz-Signature=811ae11db9aec087e439e2ed62a875b17114d6cb7cf546200cbfd70ff0a7e09e&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
    },
    {
      id: "3",
      title: "Editor-Pro",
      link: "http://github.com/HarshRajGupta/editor-pro",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251393908-1b99345f-cd39-49ba-860b-30a41485dba9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083612Z&X-Amz-Expires=300&X-Amz-Signature=3c76a9a4ab4305aa08dbda707265aff5511b908c4682a3b44fe3d8c0823dd800&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
    },
    {
      id: "4",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251394347-62cea1e0-18bc-4b29-8783-1d5dae23e9a4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T083757Z&X-Amz-Expires=300&X-Amz-Signature=0bc5cdeafe5169109fee61fb0e7b39fd11dc2b1fcc18b61a4aefe387edda552b&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
    },
    {
      id: "5",
      title: "HTML mod",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251372500-21915b4a-7b8f-4462-b4d0-98a1c0c8df65.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T084600Z&X-Amz-Expires=300&X-Amz-Signature=992669cc6bf69350e2f28fa4dcda5a278c751d746fe9d3f3dfb768f3c3d206ee&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "6",
      title: "HTML mod",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251397981-e07b4451-57b2-44b2-bc52-3a2b439e04ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T085123Z&X-Amz-Expires=300&X-Amz-Signature=36fdcb261436bc09d83798e04b67b05378f926f95b5cb0f38fc1dae1ed4cdc92&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "7",
      title: "HTML mod",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251400257-a16e70eb-6a0e-4760-aaea-2c08e9cbabef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T085954Z&X-Amz-Expires=300&X-Amz-Signature=c8125c59391554ae48ea26442b36599606c1d6f99c60bafeacf3109850400610&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "8",
      title: "HTML mod",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/85221003/251396409-98baff58-e743-49ea-83e6-6ecf8bcf0494.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T084547Z&X-Amz-Expires=300&X-Amz-Signature=2620f000b1e9057b2a70e68cfd5d64de1ea7d23ea1ccb3016b927af3f662f476&X-Amz-SignedHeaders=host&actor_id=85221003&key_id=0&repo_id=406198772",
      link: "https://htmlmod.onrender.com",
    },
  ];
function Xg({ selector: t, isdark: e }) {
  const [n, i] = j.useState(Kp);
  return (
    j.useEffect(() => {
      switch (t) {
        case "achievements":
          i(L5);
          break;
        case "certifications":
          i(D5);
          break;
        case "skills":
          i($5);
          break;
        case "languages":
          i(j5);
          break;
        case "project":
          i(N5);
          break;
        default:
          i(Kp);
      }
      return (
        Kr.init({ duration: 750 }),
        () => {
          Kr.refresh();
        }
      );
    }, [t]),
    T.jsx(j.Suspense, {
      fallback: T.jsx(fr, { text: "Loading" }),
      children: T.jsx(B5, {
        isdark: e,
        children: n.map((r, s) =>
          T.jsx(
            j.Suspense,
            {
              fallback: T.jsx(fr, {}),
              children: T.jsx("a", {
                "data-aos":
                  s % 3 === 2
                    ? "zoom-in-left"
                    : s % 3
                    ? "zoom-in-up"
                    : "zoom-in-right",
                target: "_blank",
                href: r.link,
                rel: "noreferrer",
                children: T.jsxs(H5, {
                  bgcolor:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                  children: [
                    t !== "languages" &&
                      t !== "skills" &&
                      T.jsx(V5, { children: T.jsx(b5, {}) }),
                    T.jsx(W5, {
                      src: r.image,
                      alt: r.title,
                      isdark: e,
                      loading: "lazy",
                    }),
                    T.jsx("h1", { children: r.title }),
                  ],
                }),
              }),
            },
            s,
          ),
        ),
      }),
    })
  );
}
Xg.propTypes = { selector: je.string, isdark: je.bool };
const B5 = U.div`
    display: grid;
    height: inherit;
    align-items: center;
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-gap: 16px 128px;
    height: fit-content;
    justify-content: center;
    width: 100%;
    @media (max-width: 1280px) {
        grid-gap: 8px 32px;
        grid-template-columns: auto auto;
    }
    /* background: rgba(255, 255, 255, 0.1); */
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23,0.1)" : "rgba(255, 255, 255, 0.1)"};
    overflow: scroll;
`,
  H5 = U.div`
    display: grid;
    width: 200px;
    height: 120px;
    margin: auto;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    background: ${(t) => t.bgcolor};
	border: 10px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: ${(t) => `linear-gradient(to right, ${t.bgcolor})`};
    h1 {
		display: grid;
        width: 100%;
        font-size: 13px;
        text-align: center;
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        position: absolute;
        opacity: 0;
        height: 100%;
        align-items: center;
		justify-content: center;
        background-color: rgba(21, 2, 58, 0.69);
        color: #fff;
        cursor: pointer;
		z-index:2;
        /* transition: hover 0.1s 0.4s ease-in-out; */
    }
    border-radius: 16px;
    &:hover {
        h1 {
            opacity: 1;
            transition: all 0.4s 0.1s ease-in-out;
            transform: scale(1.5);
        }
    }
    @media (max-width: 1280px) {
        width: 35vw;
        height: 18vw;
    }
    overflow: hidden;
    &:hover {
        transition: all 0.4s 0.1s ease-in-out;
        scale: 1.1;
        img {
            transition: all 0.4s 0.1s ease-in-out;
            scale: 1.2;
        }
    }
`,
  W5 = U.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
    background: ${({ isdark: t }) =>
      t ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
`,
  V5 = U.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
`,
  q5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xg },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U5 = U.div`
    margin: 0 auto;
    color: inherit;
    transition: all 125ms ease-in-out;
    overflow: visible;
    cursor: pointer;
    svg {
        transform: scale(0.75);
        &:hover {
            filter: drop-shadow(3px 4px 7px #00c4cc);
            transform: scale(1);
        }
		width: 1.6rem;
		height: 1.6rem;
		@media (max-width: 768px) {
			width: 1.4rem;
			height: 1.4rem;
		}
    }
`;
function X5({ isdark: t, setDark: e }) {
  return T.jsx(U5, {
    onClick: () => e(!t),
    isdark: t,
    children: t
      ? T.jsx("svg", {
          fill: "currentColor",
          viewBox: "0 0 16 16",
          className: "bi bi-brightness-high-fill active",
          children: T.jsx("path", {
            d: "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
          }),
        })
      : T.jsx("svg", {
          width: "32",
          height: "32",
          fill: "currentColor",
          viewBox: "0 0 16 16",
          className: "bi bi-moon-fill active",
          children: T.jsx("path", {
            d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z",
          }),
        }),
  });
}
const Gg = j.memo(X5);
var Kg = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i(j);
  })(typeof self < "u" ? self : Io, (n) =>
    (() => {
      var i = {
          7403: (a, l, u) => {
            u.d(l, { default: () => L });
            var c = u(4087),
              d = u.n(c);
            const f = function (M) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(M);
              },
              p = function (M, O) {
                return Math.floor(Math.random() * (O - M + 1)) + M;
              };
            var g = "TYPE_CHARACTER",
              m = "REMOVE_CHARACTER",
              b = "REMOVE_ALL",
              y = "REMOVE_LAST_VISIBLE_NODE",
              h = "PAUSE_FOR",
              v = "CALL_FUNCTION",
              w = "ADD_HTML_TAG_ELEMENT",
              x = "CHANGE_DELETE_SPEED",
              k = "CHANGE_DELAY",
              S = "CHANGE_CURSOR",
              P = "PASTE_STRING",
              E = "HTML_TAG";
            function A(M) {
              return (
                (A =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (O) {
                        return typeof O;
                      }
                    : function (O) {
                        return O &&
                          typeof Symbol == "function" &&
                          O.constructor === Symbol &&
                          O !== Symbol.prototype
                          ? "symbol"
                          : typeof O;
                      }),
                A(M)
              );
            }
            function _(M, O) {
              var B = Object.keys(M);
              if (Object.getOwnPropertySymbols) {
                var H = Object.getOwnPropertySymbols(M);
                O &&
                  (H = H.filter(function (ie) {
                    return Object.getOwnPropertyDescriptor(M, ie).enumerable;
                  })),
                  B.push.apply(B, H);
              }
              return B;
            }
            function C(M) {
              for (var O = 1; O < arguments.length; O++) {
                var B = arguments[O] != null ? arguments[O] : {};
                O % 2
                  ? _(Object(B), !0).forEach(function (H) {
                      V(M, H, B[H]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      M,
                      Object.getOwnPropertyDescriptors(B),
                    )
                  : _(Object(B)).forEach(function (H) {
                      Object.defineProperty(
                        M,
                        H,
                        Object.getOwnPropertyDescriptor(B, H),
                      );
                    });
              }
              return M;
            }
            function I(M) {
              return (
                (function (O) {
                  if (Array.isArray(O)) return R(O);
                })(M) ||
                (function (O) {
                  if (
                    (typeof Symbol < "u" && O[Symbol.iterator] != null) ||
                    O["@@iterator"] != null
                  )
                    return Array.from(O);
                })(M) ||
                (function (O, B) {
                  if (O) {
                    if (typeof O == "string") return R(O, B);
                    var H = Object.prototype.toString.call(O).slice(8, -1);
                    return (
                      H === "Object" &&
                        O.constructor &&
                        (H = O.constructor.name),
                      H === "Map" || H === "Set"
                        ? Array.from(O)
                        : H === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)
                        ? R(O, B)
                        : void 0
                    );
                  }
                })(M) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function R(M, O) {
              (O == null || O > M.length) && (O = M.length);
              for (var B = 0, H = new Array(O); B < O; B++) H[B] = M[B];
              return H;
            }
            function F(M, O) {
              for (var B = 0; B < O.length; B++) {
                var H = O[B];
                (H.enumerable = H.enumerable || !1),
                  (H.configurable = !0),
                  "value" in H && (H.writable = !0),
                  Object.defineProperty(M, q(H.key), H);
              }
            }
            function V(M, O, B) {
              return (
                (O = q(O)) in M
                  ? Object.defineProperty(M, O, {
                      value: B,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (M[O] = B),
                M
              );
            }
            function q(M) {
              var O = (function (B, H) {
                if (A(B) !== "object" || B === null) return B;
                var ie = B[Symbol.toPrimitive];
                if (ie !== void 0) {
                  var z = ie.call(B, "string");
                  if (A(z) !== "object") return z;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(B);
              })(M);
              return A(O) === "symbol" ? O : String(O);
            }
            const L = (function () {
              function M(H, ie) {
                var z = this;
                if (
                  ((function ($, G) {
                    if (!($ instanceof G))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, M),
                  V(this, "state", {
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
                  V(this, "options", {
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
                  V(this, "setupWrapperElement", function () {
                    z.state.elements.container &&
                      ((z.state.elements.wrapper.className =
                        z.options.wrapperClassName),
                      (z.state.elements.cursor.className =
                        z.options.cursorClassName),
                      (z.state.elements.cursor.innerHTML = z.options.cursor),
                      (z.state.elements.container.innerHTML = ""),
                      z.state.elements.container.appendChild(
                        z.state.elements.wrapper,
                      ),
                      z.state.elements.container.appendChild(
                        z.state.elements.cursor,
                      ));
                  }),
                  V(this, "start", function () {
                    return (z.state.eventLoopPaused = !1), z.runEventLoop(), z;
                  }),
                  V(this, "pause", function () {
                    return (z.state.eventLoopPaused = !0), z;
                  }),
                  V(this, "stop", function () {
                    return (
                      z.state.eventLoop &&
                        ((0, c.cancel)(z.state.eventLoop),
                        (z.state.eventLoop = null)),
                      z
                    );
                  }),
                  V(this, "pauseFor", function ($) {
                    return z.addEventToQueue(h, { ms: $ }), z;
                  }),
                  V(this, "typeOutAllStrings", function () {
                    return typeof z.options.strings == "string"
                      ? (z
                          .typeString(z.options.strings)
                          .pauseFor(z.options.pauseFor),
                        z)
                      : (z.options.strings.forEach(function ($) {
                          z.typeString($)
                            .pauseFor(z.options.pauseFor)
                            .deleteAll(z.options.deleteSpeed);
                        }),
                        z);
                  }),
                  V(this, "typeString", function ($) {
                    var G =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (f($)) return z.typeOutHTMLString($, G);
                    if ($) {
                      var Q = (z.options || {}).stringSplitter,
                        te = typeof Q == "function" ? Q($) : $.split("");
                      z.typeCharacters(te, G);
                    }
                    return z;
                  }),
                  V(this, "pasteString", function ($) {
                    var G =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return f($)
                      ? z.typeOutHTMLString($, G, !0)
                      : ($ && z.addEventToQueue(P, { character: $, node: G }),
                        z);
                  }),
                  V(this, "typeOutHTMLString", function ($) {
                    var G =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      Q = arguments.length > 2 ? arguments[2] : void 0,
                      te = (function (ue) {
                        var ne = document.createElement("div");
                        return (ne.innerHTML = ue), ne.childNodes;
                      })($);
                    if (te.length > 0)
                      for (var Y = 0; Y < te.length; Y++) {
                        var Ae = te[Y],
                          Ge = Ae.innerHTML;
                        Ae && Ae.nodeType !== 3
                          ? ((Ae.innerHTML = ""),
                            z.addEventToQueue(w, { node: Ae, parentNode: G }),
                            Q ? z.pasteString(Ge, Ae) : z.typeString(Ge, Ae))
                          : Ae.textContent &&
                            (Q
                              ? z.pasteString(Ae.textContent, G)
                              : z.typeString(Ae.textContent, G));
                      }
                    return z;
                  }),
                  V(this, "deleteAll", function () {
                    var $ =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return z.addEventToQueue(b, { speed: $ }), z;
                  }),
                  V(this, "changeDeleteSpeed", function ($) {
                    if (!$) throw new Error("Must provide new delete speed");
                    return z.addEventToQueue(x, { speed: $ }), z;
                  }),
                  V(this, "changeDelay", function ($) {
                    if (!$) throw new Error("Must provide new delay");
                    return z.addEventToQueue(k, { delay: $ }), z;
                  }),
                  V(this, "changeCursor", function ($) {
                    if (!$) throw new Error("Must provide new cursor");
                    return z.addEventToQueue(S, { cursor: $ }), z;
                  }),
                  V(this, "deleteChars", function ($) {
                    if (!$)
                      throw new Error(
                        "Must provide amount of characters to delete",
                      );
                    for (var G = 0; G < $; G++) z.addEventToQueue(m);
                    return z;
                  }),
                  V(this, "callFunction", function ($, G) {
                    if (!$ || typeof $ != "function")
                      throw new Error("Callbak must be a function");
                    return z.addEventToQueue(v, { cb: $, thisArg: G }), z;
                  }),
                  V(this, "typeCharacters", function ($) {
                    var G =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!$ || !Array.isArray($))
                      throw new Error("Characters must be an array");
                    return (
                      $.forEach(function (Q) {
                        z.addEventToQueue(g, { character: Q, node: G });
                      }),
                      z
                    );
                  }),
                  V(this, "removeCharacters", function ($) {
                    if (!$ || !Array.isArray($))
                      throw new Error("Characters must be an array");
                    return (
                      $.forEach(function () {
                        z.addEventToQueue(m);
                      }),
                      z
                    );
                  }),
                  V(this, "addEventToQueue", function ($, G) {
                    var Q =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return z.addEventToStateProperty($, G, Q, "eventQueue");
                  }),
                  V(this, "addReverseCalledEvent", function ($, G) {
                    var Q =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return z.options.loop
                      ? z.addEventToStateProperty(
                          $,
                          G,
                          Q,
                          "reverseCalledEvents",
                        )
                      : z;
                  }),
                  V(this, "addEventToStateProperty", function ($, G) {
                    var Q =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      te = arguments.length > 3 ? arguments[3] : void 0,
                      Y = { eventName: $, eventArgs: G || {} };
                    return (
                      (z.state[te] = Q
                        ? [Y].concat(I(z.state[te]))
                        : [].concat(I(z.state[te]), [Y])),
                      z
                    );
                  }),
                  V(this, "runEventLoop", function () {
                    z.state.lastFrameTime ||
                      (z.state.lastFrameTime = Date.now());
                    var $ = Date.now(),
                      G = $ - z.state.lastFrameTime;
                    if (!z.state.eventQueue.length) {
                      if (!z.options.loop) return;
                      (z.state.eventQueue = I(z.state.calledEvents)),
                        (z.state.calledEvents = []),
                        (z.options = C({}, z.state.initialOptions));
                    }
                    if (
                      ((z.state.eventLoop = d()(z.runEventLoop)),
                      !z.state.eventLoopPaused)
                    ) {
                      if (z.state.pauseUntil) {
                        if ($ < z.state.pauseUntil) return;
                        z.state.pauseUntil = null;
                      }
                      var Q,
                        te = I(z.state.eventQueue),
                        Y = te.shift();
                      if (
                        !(
                          G <=
                          (Q =
                            Y.eventName === y || Y.eventName === m
                              ? z.options.deleteSpeed === "natural"
                                ? p(40, 80)
                                : z.options.deleteSpeed
                              : z.options.delay === "natural"
                              ? p(120, 160)
                              : z.options.delay)
                        )
                      ) {
                        var Ae = Y.eventName,
                          Ge = Y.eventArgs;
                        switch (
                          (z.logInDevMode({
                            currentEvent: Y,
                            state: z.state,
                            delay: Q,
                          }),
                          Ae)
                        ) {
                          case P:
                          case g:
                            var ue = Ge.character,
                              ne = Ge.node,
                              We = document.createTextNode(ue),
                              ot = We;
                            z.options.onCreateTextNode &&
                              typeof z.options.onCreateTextNode == "function" &&
                              (ot = z.options.onCreateTextNode(ue, We)),
                              ot &&
                                (ne
                                  ? ne.appendChild(ot)
                                  : z.state.elements.wrapper.appendChild(ot)),
                              (z.state.visibleNodes = [].concat(
                                I(z.state.visibleNodes),
                                [
                                  {
                                    type: "TEXT_NODE",
                                    character: ue,
                                    node: ot,
                                  },
                                ],
                              ));
                            break;
                          case m:
                            te.unshift({
                              eventName: y,
                              eventArgs: { removingCharacterNode: !0 },
                            });
                            break;
                          case h:
                            var $s = Y.eventArgs.ms;
                            z.state.pauseUntil = Date.now() + parseInt($s);
                            break;
                          case v:
                            var Jd = Y.eventArgs,
                              Qy = Jd.cb,
                              Zy = Jd.thisArg;
                            Qy.call(Zy, { elements: z.state.elements });
                            break;
                          case w:
                            var ef = Y.eventArgs,
                              Za = ef.node,
                              Ja = ef.parentNode;
                            Ja
                              ? Ja.appendChild(Za)
                              : z.state.elements.wrapper.appendChild(Za),
                              (z.state.visibleNodes = [].concat(
                                I(z.state.visibleNodes),
                                [
                                  {
                                    type: E,
                                    node: Za,
                                    parentNode: Ja || z.state.elements.wrapper,
                                  },
                                ],
                              ));
                            break;
                          case b:
                            var Jy = z.state.visibleNodes,
                              el = Ge.speed,
                              js = [];
                            el &&
                              js.push({
                                eventName: x,
                                eventArgs: { speed: el, temp: !0 },
                              });
                            for (var tf = 0, ev = Jy.length; tf < ev; tf++)
                              js.push({
                                eventName: y,
                                eventArgs: { removingCharacterNode: !1 },
                              });
                            el &&
                              js.push({
                                eventName: x,
                                eventArgs: {
                                  speed: z.options.deleteSpeed,
                                  temp: !0,
                                },
                              }),
                              te.unshift.apply(te, js);
                            break;
                          case y:
                            var tv = Y.eventArgs.removingCharacterNode;
                            if (z.state.visibleNodes.length) {
                              var tl = z.state.visibleNodes.pop(),
                                nv = tl.type,
                                Fs = tl.node,
                                iv = tl.character;
                              z.options.onRemoveNode &&
                                typeof z.options.onRemoveNode == "function" &&
                                z.options.onRemoveNode({
                                  node: Fs,
                                  character: iv,
                                }),
                                Fs && Fs.parentNode.removeChild(Fs),
                                nv === E &&
                                  tv &&
                                  te.unshift({ eventName: y, eventArgs: {} });
                            }
                            break;
                          case x:
                            z.options.deleteSpeed = Y.eventArgs.speed;
                            break;
                          case k:
                            z.options.delay = Y.eventArgs.delay;
                            break;
                          case S:
                            (z.options.cursor = Y.eventArgs.cursor),
                              (z.state.elements.cursor.innerHTML =
                                Y.eventArgs.cursor);
                        }
                        z.options.loop &&
                          (Y.eventName === y ||
                            (Y.eventArgs && Y.eventArgs.temp) ||
                            (z.state.calledEvents = [].concat(
                              I(z.state.calledEvents),
                              [Y],
                            ))),
                          (z.state.eventQueue = te),
                          (z.state.lastFrameTime = $);
                      }
                    }
                  }),
                  H)
                )
                  if (typeof H == "string") {
                    var Ce = document.querySelector(H);
                    if (!Ce)
                      throw new Error("Could not find container element");
                    this.state.elements.container = Ce;
                  } else this.state.elements.container = H;
                ie && (this.options = C(C({}, this.options), ie)),
                  (this.state.initialOptions = C({}, this.options)),
                  this.init();
              }
              var O, B;
              return (
                (O = M),
                (B = [
                  {
                    key: "init",
                    value: function () {
                      var H, ie;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          S,
                          { cursor: this.options.cursor },
                          !0,
                        ),
                        this.addEventToQueue(b, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((H =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (ie = document.createElement("style")).appendChild(
                            document.createTextNode(H),
                          ),
                          document.head.appendChild(ie),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (H) {
                      this.options.devMode && console.log(H);
                    },
                  },
                ]) && F(O.prototype, B),
                Object.defineProperty(O, "prototype", { writable: !1 }),
                M
              );
            })();
          },
          8552: (a, l, u) => {
            var c = u(852)(u(5639), "DataView");
            a.exports = c;
          },
          1989: (a, l, u) => {
            var c = u(1789),
              d = u(401),
              f = u(7667),
              p = u(1327),
              g = u(1866);
            function m(b) {
              var y = -1,
                h = b == null ? 0 : b.length;
              for (this.clear(); ++y < h; ) {
                var v = b[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = f),
              (m.prototype.has = p),
              (m.prototype.set = g),
              (a.exports = m);
          },
          8407: (a, l, u) => {
            var c = u(7040),
              d = u(4125),
              f = u(2117),
              p = u(7518),
              g = u(4705);
            function m(b) {
              var y = -1,
                h = b == null ? 0 : b.length;
              for (this.clear(); ++y < h; ) {
                var v = b[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = f),
              (m.prototype.has = p),
              (m.prototype.set = g),
              (a.exports = m);
          },
          7071: (a, l, u) => {
            var c = u(852)(u(5639), "Map");
            a.exports = c;
          },
          3369: (a, l, u) => {
            var c = u(4785),
              d = u(1285),
              f = u(6e3),
              p = u(9916),
              g = u(5265);
            function m(b) {
              var y = -1,
                h = b == null ? 0 : b.length;
              for (this.clear(); ++y < h; ) {
                var v = b[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = f),
              (m.prototype.has = p),
              (m.prototype.set = g),
              (a.exports = m);
          },
          3818: (a, l, u) => {
            var c = u(852)(u(5639), "Promise");
            a.exports = c;
          },
          8525: (a, l, u) => {
            var c = u(852)(u(5639), "Set");
            a.exports = c;
          },
          8668: (a, l, u) => {
            var c = u(3369),
              d = u(619),
              f = u(2385);
            function p(g) {
              var m = -1,
                b = g == null ? 0 : g.length;
              for (this.__data__ = new c(); ++m < b; ) this.add(g[m]);
            }
            (p.prototype.add = p.prototype.push = d),
              (p.prototype.has = f),
              (a.exports = p);
          },
          6384: (a, l, u) => {
            var c = u(8407),
              d = u(7465),
              f = u(3779),
              p = u(7599),
              g = u(4758),
              m = u(4309);
            function b(y) {
              var h = (this.__data__ = new c(y));
              this.size = h.size;
            }
            (b.prototype.clear = d),
              (b.prototype.delete = f),
              (b.prototype.get = p),
              (b.prototype.has = g),
              (b.prototype.set = m),
              (a.exports = b);
          },
          2705: (a, l, u) => {
            var c = u(5639).Symbol;
            a.exports = c;
          },
          1149: (a, l, u) => {
            var c = u(5639).Uint8Array;
            a.exports = c;
          },
          577: (a, l, u) => {
            var c = u(852)(u(5639), "WeakMap");
            a.exports = c;
          },
          4963: (a) => {
            a.exports = function (l, u) {
              for (
                var c = -1, d = l == null ? 0 : l.length, f = 0, p = [];
                ++c < d;

              ) {
                var g = l[c];
                u(g, c, l) && (p[f++] = g);
              }
              return p;
            };
          },
          4636: (a, l, u) => {
            var c = u(2545),
              d = u(5694),
              f = u(1469),
              p = u(4144),
              g = u(5776),
              m = u(6719),
              b = Object.prototype.hasOwnProperty;
            a.exports = function (y, h) {
              var v = f(y),
                w = !v && d(y),
                x = !v && !w && p(y),
                k = !v && !w && !x && m(y),
                S = v || w || x || k,
                P = S ? c(y.length, String) : [],
                E = P.length;
              for (var A in y)
                (!h && !b.call(y, A)) ||
                  (S &&
                    (A == "length" ||
                      (x && (A == "offset" || A == "parent")) ||
                      (k &&
                        (A == "buffer" ||
                          A == "byteLength" ||
                          A == "byteOffset")) ||
                      g(A, E))) ||
                  P.push(A);
              return P;
            };
          },
          2488: (a) => {
            a.exports = function (l, u) {
              for (var c = -1, d = u.length, f = l.length; ++c < d; )
                l[f + c] = u[c];
              return l;
            };
          },
          2908: (a) => {
            a.exports = function (l, u) {
              for (var c = -1, d = l == null ? 0 : l.length; ++c < d; )
                if (u(l[c], c, l)) return !0;
              return !1;
            };
          },
          8470: (a, l, u) => {
            var c = u(7813);
            a.exports = function (d, f) {
              for (var p = d.length; p--; ) if (c(d[p][0], f)) return p;
              return -1;
            };
          },
          8866: (a, l, u) => {
            var c = u(2488),
              d = u(1469);
            a.exports = function (f, p, g) {
              var m = p(f);
              return d(f) ? m : c(m, g(f));
            };
          },
          4239: (a, l, u) => {
            var c = u(2705),
              d = u(9607),
              f = u(2333),
              p = c ? c.toStringTag : void 0;
            a.exports = function (g) {
              return g == null
                ? g === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : p && p in Object(g)
                ? d(g)
                : f(g);
            };
          },
          9454: (a, l, u) => {
            var c = u(4239),
              d = u(7005);
            a.exports = function (f) {
              return d(f) && c(f) == "[object Arguments]";
            };
          },
          939: (a, l, u) => {
            var c = u(2492),
              d = u(7005);
            a.exports = function f(p, g, m, b, y) {
              return (
                p === g ||
                (p == null || g == null || (!d(p) && !d(g))
                  ? p != p && g != g
                  : c(p, g, m, b, f, y))
              );
            };
          },
          2492: (a, l, u) => {
            var c = u(6384),
              d = u(7114),
              f = u(8351),
              p = u(6096),
              g = u(4160),
              m = u(1469),
              b = u(4144),
              y = u(6719),
              h = "[object Arguments]",
              v = "[object Array]",
              w = "[object Object]",
              x = Object.prototype.hasOwnProperty;
            a.exports = function (k, S, P, E, A, _) {
              var C = m(k),
                I = m(S),
                R = C ? v : g(k),
                F = I ? v : g(S),
                V = (R = R == h ? w : R) == w,
                q = (F = F == h ? w : F) == w,
                L = R == F;
              if (L && b(k)) {
                if (!b(S)) return !1;
                (C = !0), (V = !1);
              }
              if (L && !V)
                return (
                  _ || (_ = new c()),
                  C || y(k) ? d(k, S, P, E, A, _) : f(k, S, R, P, E, A, _)
                );
              if (!(1 & P)) {
                var M = V && x.call(k, "__wrapped__"),
                  O = q && x.call(S, "__wrapped__");
                if (M || O) {
                  var B = M ? k.value() : k,
                    H = O ? S.value() : S;
                  return _ || (_ = new c()), A(B, H, P, E, _);
                }
              }
              return !!L && (_ || (_ = new c()), p(k, S, P, E, A, _));
            };
          },
          8458: (a, l, u) => {
            var c = u(3560),
              d = u(5346),
              f = u(3218),
              p = u(346),
              g = /^\[object .+?Constructor\]$/,
              m = Function.prototype,
              b = Object.prototype,
              y = m.toString,
              h = b.hasOwnProperty,
              v = RegExp(
                "^" +
                  y
                    .call(h)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?",
                    ) +
                  "$",
              );
            a.exports = function (w) {
              return !(!f(w) || d(w)) && (c(w) ? v : g).test(p(w));
            };
          },
          8749: (a, l, u) => {
            var c = u(4239),
              d = u(1780),
              f = u(7005),
              p = {};
            (p["[object Float32Array]"] =
              p["[object Float64Array]"] =
              p["[object Int8Array]"] =
              p["[object Int16Array]"] =
              p["[object Int32Array]"] =
              p["[object Uint8Array]"] =
              p["[object Uint8ClampedArray]"] =
              p["[object Uint16Array]"] =
              p["[object Uint32Array]"] =
                !0),
              (p["[object Arguments]"] =
                p["[object Array]"] =
                p["[object ArrayBuffer]"] =
                p["[object Boolean]"] =
                p["[object DataView]"] =
                p["[object Date]"] =
                p["[object Error]"] =
                p["[object Function]"] =
                p["[object Map]"] =
                p["[object Number]"] =
                p["[object Object]"] =
                p["[object RegExp]"] =
                p["[object Set]"] =
                p["[object String]"] =
                p["[object WeakMap]"] =
                  !1),
              (a.exports = function (g) {
                return f(g) && d(g.length) && !!p[c(g)];
              });
          },
          280: (a, l, u) => {
            var c = u(5726),
              d = u(6916),
              f = Object.prototype.hasOwnProperty;
            a.exports = function (p) {
              if (!c(p)) return d(p);
              var g = [];
              for (var m in Object(p))
                f.call(p, m) && m != "constructor" && g.push(m);
              return g;
            };
          },
          2545: (a) => {
            a.exports = function (l, u) {
              for (var c = -1, d = Array(l); ++c < l; ) d[c] = u(c);
              return d;
            };
          },
          1717: (a) => {
            a.exports = function (l) {
              return function (u) {
                return l(u);
              };
            };
          },
          4757: (a) => {
            a.exports = function (l, u) {
              return l.has(u);
            };
          },
          4429: (a, l, u) => {
            var c = u(5639)["__core-js_shared__"];
            a.exports = c;
          },
          7114: (a, l, u) => {
            var c = u(8668),
              d = u(2908),
              f = u(4757);
            a.exports = function (p, g, m, b, y, h) {
              var v = 1 & m,
                w = p.length,
                x = g.length;
              if (w != x && !(v && x > w)) return !1;
              var k = h.get(p),
                S = h.get(g);
              if (k && S) return k == g && S == p;
              var P = -1,
                E = !0,
                A = 2 & m ? new c() : void 0;
              for (h.set(p, g), h.set(g, p); ++P < w; ) {
                var _ = p[P],
                  C = g[P];
                if (b) var I = v ? b(C, _, P, g, p, h) : b(_, C, P, p, g, h);
                if (I !== void 0) {
                  if (I) continue;
                  E = !1;
                  break;
                }
                if (A) {
                  if (
                    !d(g, function (R, F) {
                      if (!f(A, F) && (_ === R || y(_, R, m, b, h)))
                        return A.push(F);
                    })
                  ) {
                    E = !1;
                    break;
                  }
                } else if (_ !== C && !y(_, C, m, b, h)) {
                  E = !1;
                  break;
                }
              }
              return h.delete(p), h.delete(g), E;
            };
          },
          8351: (a, l, u) => {
            var c = u(2705),
              d = u(1149),
              f = u(7813),
              p = u(7114),
              g = u(8776),
              m = u(1814),
              b = c ? c.prototype : void 0,
              y = b ? b.valueOf : void 0;
            a.exports = function (h, v, w, x, k, S, P) {
              switch (w) {
                case "[object DataView]":
                  if (
                    h.byteLength != v.byteLength ||
                    h.byteOffset != v.byteOffset
                  )
                    return !1;
                  (h = h.buffer), (v = v.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    h.byteLength != v.byteLength || !S(new d(h), new d(v))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return f(+h, +v);
                case "[object Error]":
                  return h.name == v.name && h.message == v.message;
                case "[object RegExp]":
                case "[object String]":
                  return h == v + "";
                case "[object Map]":
                  var E = g;
                case "[object Set]":
                  var A = 1 & x;
                  if ((E || (E = m), h.size != v.size && !A)) return !1;
                  var _ = P.get(h);
                  if (_) return _ == v;
                  (x |= 2), P.set(h, v);
                  var C = p(E(h), E(v), x, k, S, P);
                  return P.delete(h), C;
                case "[object Symbol]":
                  if (y) return y.call(h) == y.call(v);
              }
              return !1;
            };
          },
          6096: (a, l, u) => {
            var c = u(8234),
              d = Object.prototype.hasOwnProperty;
            a.exports = function (f, p, g, m, b, y) {
              var h = 1 & g,
                v = c(f),
                w = v.length;
              if (w != c(p).length && !h) return !1;
              for (var x = w; x--; ) {
                var k = v[x];
                if (!(h ? k in p : d.call(p, k))) return !1;
              }
              var S = y.get(f),
                P = y.get(p);
              if (S && P) return S == p && P == f;
              var E = !0;
              y.set(f, p), y.set(p, f);
              for (var A = h; ++x < w; ) {
                var _ = f[(k = v[x])],
                  C = p[k];
                if (m) var I = h ? m(C, _, k, p, f, y) : m(_, C, k, f, p, y);
                if (!(I === void 0 ? _ === C || b(_, C, g, m, y) : I)) {
                  E = !1;
                  break;
                }
                A || (A = k == "constructor");
              }
              if (E && !A) {
                var R = f.constructor,
                  F = p.constructor;
                R == F ||
                  !("constructor" in f) ||
                  !("constructor" in p) ||
                  (typeof R == "function" &&
                    R instanceof R &&
                    typeof F == "function" &&
                    F instanceof F) ||
                  (E = !1);
              }
              return y.delete(f), y.delete(p), E;
            };
          },
          1957: (a, l, u) => {
            var c =
              typeof u.g == "object" && u.g && u.g.Object === Object && u.g;
            a.exports = c;
          },
          8234: (a, l, u) => {
            var c = u(8866),
              d = u(9551),
              f = u(3674);
            a.exports = function (p) {
              return c(p, f, d);
            };
          },
          5050: (a, l, u) => {
            var c = u(7019);
            a.exports = function (d, f) {
              var p = d.__data__;
              return c(f) ? p[typeof f == "string" ? "string" : "hash"] : p.map;
            };
          },
          852: (a, l, u) => {
            var c = u(8458),
              d = u(7801);
            a.exports = function (f, p) {
              var g = d(f, p);
              return c(g) ? g : void 0;
            };
          },
          9607: (a, l, u) => {
            var c = u(2705),
              d = Object.prototype,
              f = d.hasOwnProperty,
              p = d.toString,
              g = c ? c.toStringTag : void 0;
            a.exports = function (m) {
              var b = f.call(m, g),
                y = m[g];
              try {
                m[g] = void 0;
                var h = !0;
              } catch {}
              var v = p.call(m);
              return h && (b ? (m[g] = y) : delete m[g]), v;
            };
          },
          9551: (a, l, u) => {
            var c = u(4963),
              d = u(479),
              f = Object.prototype.propertyIsEnumerable,
              p = Object.getOwnPropertySymbols,
              g = p
                ? function (m) {
                    return m == null
                      ? []
                      : ((m = Object(m)),
                        c(p(m), function (b) {
                          return f.call(m, b);
                        }));
                  }
                : d;
            a.exports = g;
          },
          4160: (a, l, u) => {
            var c = u(8552),
              d = u(7071),
              f = u(3818),
              p = u(8525),
              g = u(577),
              m = u(4239),
              b = u(346),
              y = "[object Map]",
              h = "[object Promise]",
              v = "[object Set]",
              w = "[object WeakMap]",
              x = "[object DataView]",
              k = b(c),
              S = b(d),
              P = b(f),
              E = b(p),
              A = b(g),
              _ = m;
            ((c && _(new c(new ArrayBuffer(1))) != x) ||
              (d && _(new d()) != y) ||
              (f && _(f.resolve()) != h) ||
              (p && _(new p()) != v) ||
              (g && _(new g()) != w)) &&
              (_ = function (C) {
                var I = m(C),
                  R = I == "[object Object]" ? C.constructor : void 0,
                  F = R ? b(R) : "";
                if (F)
                  switch (F) {
                    case k:
                      return x;
                    case S:
                      return y;
                    case P:
                      return h;
                    case E:
                      return v;
                    case A:
                      return w;
                  }
                return I;
              }),
              (a.exports = _);
          },
          7801: (a) => {
            a.exports = function (l, u) {
              return l == null ? void 0 : l[u];
            };
          },
          1789: (a, l, u) => {
            var c = u(4536);
            a.exports = function () {
              (this.__data__ = c ? c(null) : {}), (this.size = 0);
            };
          },
          401: (a) => {
            a.exports = function (l) {
              var u = this.has(l) && delete this.__data__[l];
              return (this.size -= u ? 1 : 0), u;
            };
          },
          7667: (a, l, u) => {
            var c = u(4536),
              d = Object.prototype.hasOwnProperty;
            a.exports = function (f) {
              var p = this.__data__;
              if (c) {
                var g = p[f];
                return g === "__lodash_hash_undefined__" ? void 0 : g;
              }
              return d.call(p, f) ? p[f] : void 0;
            };
          },
          1327: (a, l, u) => {
            var c = u(4536),
              d = Object.prototype.hasOwnProperty;
            a.exports = function (f) {
              var p = this.__data__;
              return c ? p[f] !== void 0 : d.call(p, f);
            };
          },
          1866: (a, l, u) => {
            var c = u(4536);
            a.exports = function (d, f) {
              var p = this.__data__;
              return (
                (this.size += this.has(d) ? 0 : 1),
                (p[d] = c && f === void 0 ? "__lodash_hash_undefined__" : f),
                this
              );
            };
          },
          5776: (a) => {
            var l = /^(?:0|[1-9]\d*)$/;
            a.exports = function (u, c) {
              var d = typeof u;
              return (
                !!(c = c ?? 9007199254740991) &&
                (d == "number" || (d != "symbol" && l.test(u))) &&
                u > -1 &&
                u % 1 == 0 &&
                u < c
              );
            };
          },
          7019: (a) => {
            a.exports = function (l) {
              var u = typeof l;
              return u == "string" ||
                u == "number" ||
                u == "symbol" ||
                u == "boolean"
                ? l !== "__proto__"
                : l === null;
            };
          },
          5346: (a, l, u) => {
            var c,
              d = u(4429),
              f = (c = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + c
                : "";
            a.exports = function (p) {
              return !!f && f in p;
            };
          },
          5726: (a) => {
            var l = Object.prototype;
            a.exports = function (u) {
              var c = u && u.constructor;
              return u === ((typeof c == "function" && c.prototype) || l);
            };
          },
          7040: (a) => {
            a.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (a, l, u) => {
            var c = u(8470),
              d = Array.prototype.splice;
            a.exports = function (f) {
              var p = this.__data__,
                g = c(p, f);
              return !(
                g < 0 ||
                (g == p.length - 1 ? p.pop() : d.call(p, g, 1), --this.size, 0)
              );
            };
          },
          2117: (a, l, u) => {
            var c = u(8470);
            a.exports = function (d) {
              var f = this.__data__,
                p = c(f, d);
              return p < 0 ? void 0 : f[p][1];
            };
          },
          7518: (a, l, u) => {
            var c = u(8470);
            a.exports = function (d) {
              return c(this.__data__, d) > -1;
            };
          },
          4705: (a, l, u) => {
            var c = u(8470);
            a.exports = function (d, f) {
              var p = this.__data__,
                g = c(p, d);
              return (
                g < 0 ? (++this.size, p.push([d, f])) : (p[g][1] = f), this
              );
            };
          },
          4785: (a, l, u) => {
            var c = u(1989),
              d = u(8407),
              f = u(7071);
            a.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new c(),
                  map: new (f || d)(),
                  string: new c(),
                });
            };
          },
          1285: (a, l, u) => {
            var c = u(5050);
            a.exports = function (d) {
              var f = c(this, d).delete(d);
              return (this.size -= f ? 1 : 0), f;
            };
          },
          6e3: (a, l, u) => {
            var c = u(5050);
            a.exports = function (d) {
              return c(this, d).get(d);
            };
          },
          9916: (a, l, u) => {
            var c = u(5050);
            a.exports = function (d) {
              return c(this, d).has(d);
            };
          },
          5265: (a, l, u) => {
            var c = u(5050);
            a.exports = function (d, f) {
              var p = c(this, d),
                g = p.size;
              return p.set(d, f), (this.size += p.size == g ? 0 : 1), this;
            };
          },
          8776: (a) => {
            a.exports = function (l) {
              var u = -1,
                c = Array(l.size);
              return (
                l.forEach(function (d, f) {
                  c[++u] = [f, d];
                }),
                c
              );
            };
          },
          4536: (a, l, u) => {
            var c = u(852)(Object, "create");
            a.exports = c;
          },
          6916: (a, l, u) => {
            var c = u(5569)(Object.keys, Object);
            a.exports = c;
          },
          1167: (a, l, u) => {
            a = u.nmd(a);
            var c = u(1957),
              d = l && !l.nodeType && l,
              f = d && a && !a.nodeType && a,
              p = f && f.exports === d && c.process,
              g = (function () {
                try {
                  return (
                    (f && f.require && f.require("util").types) ||
                    (p && p.binding && p.binding("util"))
                  );
                } catch {}
              })();
            a.exports = g;
          },
          2333: (a) => {
            var l = Object.prototype.toString;
            a.exports = function (u) {
              return l.call(u);
            };
          },
          5569: (a) => {
            a.exports = function (l, u) {
              return function (c) {
                return l(u(c));
              };
            };
          },
          5639: (a, l, u) => {
            var c = u(1957),
              d =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              f = c || d || Function("return this")();
            a.exports = f;
          },
          619: (a) => {
            a.exports = function (l) {
              return this.__data__.set(l, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (a) => {
            a.exports = function (l) {
              return this.__data__.has(l);
            };
          },
          1814: (a) => {
            a.exports = function (l) {
              var u = -1,
                c = Array(l.size);
              return (
                l.forEach(function (d) {
                  c[++u] = d;
                }),
                c
              );
            };
          },
          7465: (a, l, u) => {
            var c = u(8407);
            a.exports = function () {
              (this.__data__ = new c()), (this.size = 0);
            };
          },
          3779: (a) => {
            a.exports = function (l) {
              var u = this.__data__,
                c = u.delete(l);
              return (this.size = u.size), c;
            };
          },
          7599: (a) => {
            a.exports = function (l) {
              return this.__data__.get(l);
            };
          },
          4758: (a) => {
            a.exports = function (l) {
              return this.__data__.has(l);
            };
          },
          4309: (a, l, u) => {
            var c = u(8407),
              d = u(7071),
              f = u(3369);
            a.exports = function (p, g) {
              var m = this.__data__;
              if (m instanceof c) {
                var b = m.__data__;
                if (!d || b.length < 199)
                  return b.push([p, g]), (this.size = ++m.size), this;
                m = this.__data__ = new f(b);
              }
              return m.set(p, g), (this.size = m.size), this;
            };
          },
          346: (a) => {
            var l = Function.prototype.toString;
            a.exports = function (u) {
              if (u != null) {
                try {
                  return l.call(u);
                } catch {}
                try {
                  return u + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (a) => {
            a.exports = function (l, u) {
              return l === u || (l != l && u != u);
            };
          },
          5694: (a, l, u) => {
            var c = u(9454),
              d = u(7005),
              f = Object.prototype,
              p = f.hasOwnProperty,
              g = f.propertyIsEnumerable,
              m = c(
                (function () {
                  return arguments;
                })(),
              )
                ? c
                : function (b) {
                    return d(b) && p.call(b, "callee") && !g.call(b, "callee");
                  };
            a.exports = m;
          },
          1469: (a) => {
            var l = Array.isArray;
            a.exports = l;
          },
          8612: (a, l, u) => {
            var c = u(3560),
              d = u(1780);
            a.exports = function (f) {
              return f != null && d(f.length) && !c(f);
            };
          },
          4144: (a, l, u) => {
            a = u.nmd(a);
            var c = u(5639),
              d = u(5062),
              f = l && !l.nodeType && l,
              p = f && a && !a.nodeType && a,
              g = p && p.exports === f ? c.Buffer : void 0,
              m = (g ? g.isBuffer : void 0) || d;
            a.exports = m;
          },
          8446: (a, l, u) => {
            var c = u(939);
            a.exports = function (d, f) {
              return c(d, f);
            };
          },
          3560: (a, l, u) => {
            var c = u(4239),
              d = u(3218);
            a.exports = function (f) {
              if (!d(f)) return !1;
              var p = c(f);
              return (
                p == "[object Function]" ||
                p == "[object GeneratorFunction]" ||
                p == "[object AsyncFunction]" ||
                p == "[object Proxy]"
              );
            };
          },
          1780: (a) => {
            a.exports = function (l) {
              return (
                typeof l == "number" &&
                l > -1 &&
                l % 1 == 0 &&
                l <= 9007199254740991
              );
            };
          },
          3218: (a) => {
            a.exports = function (l) {
              var u = typeof l;
              return l != null && (u == "object" || u == "function");
            };
          },
          7005: (a) => {
            a.exports = function (l) {
              return l != null && typeof l == "object";
            };
          },
          6719: (a, l, u) => {
            var c = u(8749),
              d = u(1717),
              f = u(1167),
              p = f && f.isTypedArray,
              g = p ? d(p) : c;
            a.exports = g;
          },
          3674: (a, l, u) => {
            var c = u(4636),
              d = u(280),
              f = u(8612);
            a.exports = function (p) {
              return f(p) ? c(p) : d(p);
            };
          },
          479: (a) => {
            a.exports = function () {
              return [];
            };
          },
          5062: (a) => {
            a.exports = function () {
              return !1;
            };
          },
          75: function (a) {
            (function () {
              var l, u, c, d, f, p;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (a.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((a.exports = function () {
                    return (l() - f) / 1e6;
                  }),
                  (u = process.hrtime),
                  (d = (l = function () {
                    var g;
                    return 1e9 * (g = u())[0] + g[1];
                  })()),
                  (p = 1e9 * process.uptime()),
                  (f = d - p))
                : Date.now
                ? ((a.exports = function () {
                    return Date.now() - c;
                  }),
                  (c = Date.now()))
                : ((a.exports = function () {
                    return new Date().getTime() - c;
                  }),
                  (c = new Date().getTime()));
            }).call(this);
          },
          4087: (a, l, u) => {
            for (
              var c = u(75),
                d = typeof window > "u" ? u.g : window,
                f = ["moz", "webkit"],
                p = "AnimationFrame",
                g = d["request" + p],
                m = d["cancel" + p] || d["cancelRequest" + p],
                b = 0;
              !g && b < f.length;
              b++
            )
              (g = d[f[b] + "Request" + p]),
                (m = d[f[b] + "Cancel" + p] || d[f[b] + "CancelRequest" + p]);
            if (!g || !m) {
              var y = 0,
                h = 0,
                v = [];
              (g = function (w) {
                if (v.length === 0) {
                  var x = c(),
                    k = Math.max(0, 16.666666666666668 - (x - y));
                  (y = k + x),
                    setTimeout(function () {
                      var S = v.slice(0);
                      v.length = 0;
                      for (var P = 0; P < S.length; P++)
                        if (!S[P].cancelled)
                          try {
                            S[P].callback(y);
                          } catch (E) {
                            setTimeout(function () {
                              throw E;
                            }, 0);
                          }
                    }, Math.round(k));
                }
                return v.push({ handle: ++h, callback: w, cancelled: !1 }), h;
              }),
                (m = function (w) {
                  for (var x = 0; x < v.length; x++)
                    v[x].handle === w && (v[x].cancelled = !0);
                });
            }
            (a.exports = function (w) {
              return g.call(d, w);
            }),
              (a.exports.cancel = function () {
                m.apply(d, arguments);
              }),
              (a.exports.polyfill = function (w) {
                w || (w = d),
                  (w.requestAnimationFrame = g),
                  (w.cancelAnimationFrame = m);
              });
          },
          8156: (a) => {
            a.exports = n;
          },
        },
        r = {};
      function s(a) {
        var l = r[a];
        if (l !== void 0) return l.exports;
        var u = (r[a] = { id: a, loaded: !1, exports: {} });
        return (
          i[a].call(u.exports, u, u.exports, s), (u.loaded = !0), u.exports
        );
      }
      (s.n = (a) => {
        var l = a && a.__esModule ? () => a.default : () => a;
        return s.d(l, { a: l }), l;
      }),
        (s.d = (a, l) => {
          for (var u in l)
            s.o(l, u) &&
              !s.o(a, u) &&
              Object.defineProperty(a, u, { enumerable: !0, get: l[u] });
        }),
        (s.g = (function () {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (s.o = (a, l) => Object.prototype.hasOwnProperty.call(a, l)),
        (s.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a));
      var o = {};
      return (
        (() => {
          s.d(o, { default: () => v });
          var a = s(8156),
            l = s.n(a),
            u = s(7403),
            c = s(8446),
            d = s.n(c);
          function f(w) {
            return (
              (f =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (x) {
                      return typeof x;
                    }
                  : function (x) {
                      return x &&
                        typeof Symbol == "function" &&
                        x.constructor === Symbol &&
                        x !== Symbol.prototype
                        ? "symbol"
                        : typeof x;
                    }),
              f(w)
            );
          }
          function p(w, x) {
            for (var k = 0; k < x.length; k++) {
              var S = x[k];
              (S.enumerable = S.enumerable || !1),
                (S.configurable = !0),
                "value" in S && (S.writable = !0),
                Object.defineProperty(w, y(S.key), S);
            }
          }
          function g(w, x) {
            return (
              (g = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (k, S) {
                    return (k.__proto__ = S), k;
                  }),
              g(w, x)
            );
          }
          function m(w) {
            if (w === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return w;
          }
          function b(w) {
            return (
              (b = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (x) {
                    return x.__proto__ || Object.getPrototypeOf(x);
                  }),
              b(w)
            );
          }
          function y(w) {
            var x = (function (k, S) {
              if (f(k) !== "object" || k === null) return k;
              var P = k[Symbol.toPrimitive];
              if (P !== void 0) {
                var E = P.call(k, "string");
                if (f(E) !== "object") return E;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(k);
            })(w);
            return f(x) === "symbol" ? x : String(x);
          }
          var h = (function (w) {
            (function (_, C) {
              if (typeof C != "function" && C !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (_.prototype = Object.create(C && C.prototype, {
                constructor: { value: _, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(_, "prototype", { writable: !1 }),
                C && g(_, C);
            })(A, w);
            var x,
              k,
              S,
              P,
              E =
                ((S = A),
                (P = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var _,
                    C = b(S);
                  if (P) {
                    var I = b(this).constructor;
                    _ = Reflect.construct(C, arguments, I);
                  } else _ = C.apply(this, arguments);
                  return (function (R, F) {
                    if (F && (f(F) === "object" || typeof F == "function"))
                      return F;
                    if (F !== void 0)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return m(R);
                  })(this, _);
                });
            function A() {
              var _, C, I, R;
              (function (L, M) {
                if (!(L instanceof M))
                  throw new TypeError("Cannot call a class as a function");
              })(this, A);
              for (
                var F = arguments.length, V = new Array(F), q = 0;
                q < F;
                q++
              )
                V[q] = arguments[q];
              return (
                (C = m((_ = E.call.apply(E, [this].concat(V))))),
                (R = { instance: null }),
                (I = y((I = "state"))) in C
                  ? Object.defineProperty(C, I, {
                      value: R,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[I] = R),
                _
              );
            }
            return (
              (x = A),
              (k = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var _ = this,
                      C = new u.default(this.typewriter, this.props.options);
                    this.setState({ instance: C }, function () {
                      var I = _.props.onInit;
                      I && I(C);
                    });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (_) {
                    d()(this.props.options, _.options) ||
                      this.setState({
                        instance: new u.default(
                          this.typewriter,
                          this.props.options,
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
                    var _ = this,
                      C = this.props.component;
                    return l().createElement(C, {
                      ref: function (I) {
                        return (_.typewriter = I);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && p(x.prototype, k),
              Object.defineProperty(x, "prototype", { writable: !1 }),
              A
            );
          })(a.Component);
          h.defaultProps = { component: "div" };
          const v = h;
        })(),
        o.default
      );
    })(),
  );
})(Kg);
var G5 = Kg.exports;
const K5 = _s(G5);
function Id({ isdark: t }) {
  return T.jsxs(Y5, {
    id: "Home",
    children: [
      T.jsx(Q5, {
        children: T.jsx(Z5, {
          "data-aos": "zoom-in-right",
          children: T.jsx("div", {
            "data-aos": "zoom-in",
            children: T.jsx(J5, {
              src: "https://user-images.githubusercontent.com/85221003/156927272-0c54db85-436c-4e95-b0b9-9959978a1f5d.gif",
            }),
          }),
        }),
      }),
      T.jsx(ek, {
        children: T.jsxs(tk, {
          isdark: t,
          "data-aos": "zoom-in-left",
          children: [
            T.jsx(nk, { isdark: t, children: "Hi There, I'm" }),
            T.jsx(ik, { isdark: t, children: "Harsh Raj Gupta" }),
            T.jsx(rk, {
              isdark: t,
              children: T.jsx("span", {
                children: T.jsx(K5, {
                  options: {
                    strings: [
                      "Competitive Programmer",
                      "MERN Stack Developer",
                      "SIH 2022 Finalist",
                      "ICPC 21-22 Regionalist",
                      "Speacialist @CF",
                      "Codechef 4*",
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
      T.jsx(Ka, { link: "#About-me", isdark: t }),
    ],
  });
}
Id.defaultProps = { isdark: !0 };
Id.propTypes = { isdark: je.bool };
const Y5 = U.main`
    width: 100%;
    height: calc(100vh - 70px);
    display: grid;
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
    grid-template-columns: 3fr 2fr;
    position: relative;
    justify-content: center;
    @media (max-width: 984px) {
        grid-template-columns: 1fr;
    }
    overflow: hidden;
    /* background: rgba(255, 255, 255, 0.1); */
    z-index: 1;
    padding: 0 12px;
`,
  Q5 = U.div`
    display: grid;
    overflow: hidden;
    width: 100%;
    @media (max-width: 1280px) and (min-width: 984px) {
        align-items: center;
    }
`,
  Z5 = U.div`
    display: flex;
    height: 120vh;
    width: 100%;
    background-color: #82c5f8;
    background-size: contain;
    border-radius: 50%;
    align-items: center;
    @media (max-width: 1720px) {
        height: 110vh;
    }
    @media (max-width: 1396px) {
        height: 100%;
    }
    @media (max-width: 1280px) {
        height: 96%;
    }
    position: relative;
    align-items: center;
    overflow: hidden;
`,
  J5 = U.img`
    /* height: calc(100vh - 70px); */
    height: auto;
    width: 100%;
    object-fit: cover;
    @media (max-width: 1280px) {
        width: 100%;
    }
    transform: scaleX(-1);
    @media (max-width: 1640px) {
        margin-left: -2%;
    }
    @media (max-width: 1600px) {
        margin-left: -5%;
    }
    @media (max-width: 1560px) {
        margin-left: -10%;
    }
    @media (max-width: 984px) {
        margin-left: 0;
    }
`,
  ek = U.div`
    display: flex;
    padding: 50px;
    * {
        max-width: 100%;
    }
    justify-content: space-around;
    @media (min-width: 1280px) {
        align-items: center;
    }
    @media (max-width: 1280px) {
        width: 100%;
    }
    align-items: center;
    overflow: visible;
`,
  tk = U.ul`
    height: max-content;
    /* color: ${({ isdark: t }) => (t ? "#00c4cc" : "rgba(2, 12, 23,0.9)")}; */
    color: ${({ isdark: t }) => (t ? "#d1f4f5" : "#15023a")};
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    @media (max-width: 1280px) {
        padding: 0rem;
        text-align: center;
    }
    cursor: none;
    * {
        /* text-shadow: 3px 4px 7px ${({ isdark: t }) =>
          t ? "rgba(255, 255, 255, 0.3)" : "rgba(81,67,21,0.8)"}; */
        /* font-weight: bold; */
        overflow: visible;
    }
`,
  nk = U.h1`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
    @media (max-width: 414px) {
        font-size: 20px
    }
    @media (max-width: 300px) {
        font-size: 16px
    }
`,
  ik = U.h3`
    font-weight: bold;
    font-family:  'sign';
    /* font-family: Poppins; */
    font-size: 64px;
    margin: 10px 0;
    cursor: none;
    background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
    text-shadow: 3px 4px 7px ${({ isdark: t }) =>
      t ? "rgba(255, 255, 255, 0.2)" : "none"};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    width: 100%;
    @media (max-width: 541px) {
        font-size: 56px;
    }
    @media (max-width: 415px) {
        font-size: 42px;
    }
    @media (max-width: 300px) {
        font-size: 32px
    }
`,
  rk = U.h2`
    width: 360px;
    font-size: 30px;
    font-family: "Zen Kaku Gothic Antique";
    font-weight: bold;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
    @media (max-width: 414px) {
        font-size: 24px;
        width: 269px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
        width: 201px;
    }
    * {
        display: inline;
    }
    span {
        /* color: ${({ isdark: t }) => (t ? "inherit" : "crimson")}; */
        &.blinkingCursor {
            @keyframes typingCursor {
                0% { opacity: 1 }
                50% { opacity: 0 }
                100% { opacity: 1 }
            }
            font-family: "Zen Kaku Gothic Antique";
            font-size: 36px;
            animation: typingCursor 1s 0ms infinite step-end;
            color: orange;
            font-weight: 400;
        }
    }
`,
  sk = [
    '"Amenable Software Engineer gifted at translating client requirements into technical development plans.',
    "Communicates productively with both technical and non-technical personnel and clients.",
    "A proactive learner dedicated to improving skills through hands-on learning and development work.",
    "Friendly provider of deep programming knowledge and invaluable final products.",
    "Well-organized and collaborative team player with strong communication and analytical abilities.",
    "Proficient in mobile and desktop development environments.",
    "Adept at using ReactJS/Redux, ExpressJs/NodeJs and other programming languages to produce clean code.",
    "Detail-oriented, organized and meticulous leader.",
    "Enthusiastic team player ready to contribute to company success.",
    'Works at fast pace to meet tight deadlines."',
  ];
function Rd({ isdark: t }) {
  return T.jsxs(ok, {
    id: "About-me",
    children: [
      T.jsxs(lk, {
        isdark: t,
        children: [
          T.jsx(ak, { isdark: t, "data-aos": "fade-right", children: " Me" }),
          T.jsx(uk, {
            isdark: t,
            children: T.jsx("p", {
              children: sk.map((e, n) =>
                T.jsxs(
                  "span",
                  {
                    "data-aos": n & 1 ? "zoom-in-left" : "zoom-in-right",
                    children: [e, T.jsx("br", {})],
                  },
                  n,
                ),
              ),
            }),
          }),
          T.jsx(ck, {
            isdark: t,
            href: "#Home",
            "data-aos": "fade-left",
            children: "Harsh Raj Gupta",
          }),
        ],
      }),
      T.jsx(Ka, { link: "#Portfolio", isdark: t }),
    ],
  });
}
Rd.defaultProps = { isdark: !0 };
Rd.propTypes = { isdark: je.bool };
const ok = U.div`
    width: 100%;
    height: calc(100vh - 70px);
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
	justify-content: center;
	display: flex;
	z-index: 1;
	position: relative;
`,
  ak = U.h1`
	/* color: #00c4cc; */
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
	width: fit-content;
    font-family: 'Pacifico', cursive;
    &::before {
		font-family: Poppins;
        content: "About";
        font-weight: 600;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`,
  lk = U.div`
	display: grid;
	min-height: calc(100vh - 70px);
	max-height: calc(100vh - 70px);
	@media (max-width: 540px) {
		min-height: calc(100vh - 56px);
		max-height: calc(100vh - 56px);
    }
	width: 100%;
	/* background: rgba(255, 255, 255, 0.69); */
	/* background: ${({ isdark: t }) =>
    t ? "rgba(2, 12, 23,0.5)" : "rgba(255, 255, 255, 0.5)"}; */
	align-items: top;
	margin: 0 auto;
	padding-bottom: 5rem;
	overflow: hidden;
	justify-content: center;
	position: relative;
`,
  uk = U.div`
	overflow-y: auto;
	grid-template-columns: 1fr;
	background: ${({ isdark: t }) =>
    t ? "rgba(255, 255, 255, 0.92)" : "rgba(0, 0, 0, 0.8)"};
	border-radius: 2rem;
	padding: 1rem;
	p {
		display: inline-block;
		margin: 0 auto;
		max-width: 76vw;
		width: 100%;
		@media (max-width: 540px) {
			width: 80vw;
		}
		user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		/* height: 60vh; */
		/* &::before, &::after {
			content: '\"';
			font-style: none;
		} */
		/* background: -webkit-linear-gradient(#15023a, #185a9d); */
		/* background: -webkit-linear-gradient(#4bc0c8, #185a9d); */
		/* background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
		color: ${({ isdark: t }) => (t ? "#15023a" : "#fff")};
		text-shadow: 1px 1px 3.5px ${({ isdark: t }) => (t ? "#000" : "#00c4cc")};
		font-family: 'Ubuntu Mono', monospace;
		font-size: 17px;
		line-height: 32px;
		@media (max-width: 414px) {
			font-size: 15px;
			line-height: 32px;
		}
		@media (max-width: 300px) {
			font-size: 12px;
			line-height: 28px;
		}
		font-weight: 400;
		text-align: center;
		font-style: italic;
		overflow-y: visible;
		/* padding: 32px; */
		span {
			width: 100%;
			display: flex;
			/* margin: 0 auto; */
			text-align: center;
			justify-content: center;
		}
	}
`,
  ck = U.a`
	display: inline-block;
	text-align: end;
	margin-top: 1.5rem;
	width: 100%;
	font-family: 'Sign';
	font-size: 48px;
	@media (max-width: 540px) {
		font-size: 24px;
    }
	/* color: ${({ isdark: t }) => (t ? "#d1f4f5" : "#15023a")}; */
	cursor: pointer;
	font-weight: bold;
	/* background: -webkit-linear-gradient(#185a9d, #15023a);
	background: ${({ isdark: t }) =>
    t
      ? "-webkit-linear-gradient(#fff, #d1f4f5)"
      : " -webkit-linear-gradient(#185a9d, #15023a)"};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent; */
	background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
    text-shadow: 3px 4px 7px ${({ isdark: t }) =>
      t ? "rgba(255, 255, 255, 0.2)" : "none"};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	&::before {
		content: '-'
	}
	text-shadow: 3px 4px 7px ${({ isdark: t }) =>
    t ? "rgba(255, 255, 255, 0)" : "rgba(81,67,21,0)"};
	/* overflow: visible; */
`,
  dk = "modulepreload",
  fk = function (t) {
    return "/" + t;
  },
  Yp = {},
  pk = function (e, n, i) {
    if (!n || n.length === 0) return e();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = fk(s)), s in Yp)) return;
        Yp[s] = !0;
        const o = s.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!i)
          for (let c = r.length - 1; c >= 0; c--) {
            const d = r[c];
            if (d.href === s && (!o || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = o ? "stylesheet" : dk),
          o || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = s),
          document.head.appendChild(u),
          o)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${s}`)),
              );
          });
      }),
    ).then(() => e());
  },
  hk = j.lazy(() => pk(() => Promise.resolve().then(() => q5), void 0)),
  Qp = [
    { id: "", title: "Featured" },
    { id: "achievements", title: "Achievements" },
    { id: "certifications", title: "Certifications" },
    { id: "skills", title: "Skills" },
    { id: "languages", title: "Languages" },
    { id: "project", title: "Projects" },
  ];
function Ld({ isdark: t }) {
  const [e, n] = j.useState(0);
  return T.jsx(j.Suspense, {
    fallback: T.jsx(fr, { text: "Loading" }),
    children: T.jsxs(mk, {
      id: "Portfolio",
      children: [
        T.jsx(gk, {
          isdark: t,
          "data-aos": "fade-left",
          children: "Portfolio",
        }),
        T.jsx(yk, {
          isdark: t,
          "data-aos": "fade-right",
          children: Qp.map((i, r) =>
            T.jsx(
              "div",
              {
                className: e === r ? "active" : "",
                onClick: () => {
                  n(r);
                },
                children: T.jsx(vk, { isdark: t, children: i.title }),
              },
              i.id,
            ),
          ),
        }),
        T.jsx(hk, { selector: Qp[e].id, isdark: t }),
        T.jsx(Ka, { link: "#Projects", isdark: t }),
      ],
    }),
  });
}
Ld.propTypes = { isdark: je.bool };
Ld.defaultProps = { isdark: !0 };
const mk = U.main`
    display: grid;
    width: 100%;
    height: calc(100vh - 70px);
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
    display: block;
    z-index: 1;
    * {
        overflow: hidden !important;
    }
`,
  gk = U.h1`
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
    width: fit-content;
    /* color: crimson; */
    color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
    &::before {
        content: "My ";
        font-family: 'Pacifico', cursive;
        /* color: #15023a; */
        font-weight: 400;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`,
  yk = U.ul`
    display: grid;
    grid-template-columns: repeat(6, auto);
    margin: 0 auto;
    margin-bottom: 18px;
    width: 69vw;
    justify-content: space-around;
    align-items: center;
	div {
		width: 100%;
	}
    @media (max-width: 768px) {
        width: 85vw;
    }
    @media (max-width: 540px) {
        grid-template-columns: repeat(3, auto);
    }
    /* background: rgba(255, 255, 255, 0.2); */
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23,0.1)" : "rgba(255, 255, 255, 0.1)"};
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
    .active li{
        color: #00c4cc !important;
		transform: scale(1) !important;
        background-color: ${({ isdark: t }) =>
          t
            ? "rgba(255, 255, 255, 0.9) !important"
            : "rgba(2, 12, 23, 0.9) !important"};
        /* transition: all 250ms 250ms ease !important; */
        /* transform: scale(1); */
    }
`,
  vk = U.li`
    font-family: Poppins;
    font-size: 14px;
	padding: 7px;
	border-radius: 12px;
    @media (max-width: 540px) {
        font-size: 12px;
		padding: 5px;
		border-radius: 8px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
		padding: 3px;
		border-radius: 6px;
    }
    text-transform: capitalize;
    font-weight: 400;
    cursor: pointer;
    height: max-content;
    transform: scale(0.9);
    margin: 0 auto;
`;
function Zp(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function Dd(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] > "u"
        ? (t[n] = e[n])
        : Zp(e[n]) &&
          Zp(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          Dd(t[n], e[n]);
    });
}
const Yg = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
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
function an() {
  const t = typeof document < "u" ? document : {};
  return Dd(t, Yg), t;
}
const wk = {
  document: Yg,
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
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function Et() {
  const t = typeof window < "u" ? window : {};
  return Dd(t, wk), t;
}
function bk(t) {
  const e = t;
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null;
    } catch {}
    try {
      delete e[n];
    } catch {}
  });
}
function dc(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function ua() {
  return Date.now();
}
function xk(t) {
  const e = Et();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function Sk(t, e) {
  e === void 0 && (e = "x");
  const n = Et();
  let i, r, s;
  const o = xk(t);
  return (
    n.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = s.toString().split(","))),
    e === "x" &&
      (n.WebKitCSSMatrix
        ? (r = s.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (n.WebKitCSSMatrix
        ? (r = s.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
function so(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function kk(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function yt() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !kk(i)) {
      const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = r.length; s < o; s += 1) {
        const a = r[s],
          l = Object.getOwnPropertyDescriptor(i, a);
        l !== void 0 &&
          l.enumerable &&
          (so(t[a]) && so(i[a])
            ? i[a].__swiper__
              ? (t[a] = i[a])
              : yt(t[a], i[a])
            : !so(t[a]) && so(i[a])
            ? ((t[a] = {}), i[a].__swiper__ ? (t[a] = i[a]) : yt(t[a], i[a]))
            : (t[a] = i[a]));
      }
    }
  }
  return t;
}
function oo(t, e, n) {
  t.style.setProperty(e, n);
}
function Qg(t) {
  let { swiper: e, targetPosition: n, side: i } = t;
  const r = Et(),
    s = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (f, p) => (u === "next" && f >= p) || (u === "prev" && f <= p),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const f = Math.max(Math.min((a - o) / l, 1), 0),
        p = 0.5 - Math.cos(f * Math.PI) / 2;
      let g = s + p * (n - s);
      if ((c(g, n) && (g = n), e.wrapperEl.scrollTo({ [i]: g }), c(g, n))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: g });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(d);
    };
  d();
}
function tn(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((n) => n.matches(e));
}
function Zg(t, e) {
  e === void 0 && (e = []);
  const n = document.createElement(t);
  return n.classList.add(...(Array.isArray(e) ? e : [e])), n;
}
function _k(t, e) {
  const n = [];
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i);
  }
  return n;
}
function Ck(t, e) {
  const n = [];
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i);
  }
  return n;
}
function Dn(t, e) {
  return Et().getComputedStyle(t, null).getPropertyValue(e);
}
function ca(t) {
  let e = t,
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function Jg(t, e) {
  const n = [];
  let i = t.parentElement;
  for (; i; ) e ? i.matches(e) && n.push(i) : n.push(i), (i = i.parentElement);
  return n;
}
function fc(t, e, n) {
  const i = Et();
  return n
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          i
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          i
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"),
        )
    : t.offsetWidth;
}
let $l;
function Ek() {
  const t = Et(),
    e = an();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function ey() {
  return $l || ($l = Ek()), $l;
}
let jl;
function Pk(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const n = ey(),
    i = Et(),
    r = i.navigator.platform,
    s = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = i.screen.width,
    l = i.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = r === "Win32";
  let g = r === "MacIntel";
  const m = [
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
      g &&
      n.touch &&
      m.indexOf(`${a}x${l}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !p && ((o.os = "android"), (o.android = !0)),
    (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Tk(t) {
  return t === void 0 && (t = {}), jl || (jl = Pk(t)), jl;
}
let Fl;
function zk() {
  const t = Et();
  let e = !1;
  function n() {
    const i = t.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  if (n()) {
    const i = String(t.navigator.userAgent);
    if (i.includes("Version/")) {
      const [r, s] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = r < 16 || (r === 16 && s < 2);
    }
  }
  return {
    isSafari: e || n(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent,
    ),
  };
}
function Ak() {
  return Fl || (Fl = zk()), Fl;
}
function Mk(t) {
  let { swiper: e, on: n, emit: i } = t;
  const r = Et();
  let s = null,
    o = null;
  const a = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver((d) => {
          o = r.requestAnimationFrame(() => {
            const { width: f, height: p } = e;
            let g = f,
              m = p;
            d.forEach((b) => {
              let { contentBoxSize: y, contentRect: h, target: v } = b;
              (v && v !== e.el) ||
                ((g = h ? h.width : (y[0] || y).inlineSize),
                (m = h ? h.height : (y[0] || y).blockSize));
            }),
              (g !== f || m !== p) && a();
          });
        })),
        s.observe(e.el));
    },
    u = () => {
      o && r.cancelAnimationFrame(o),
        s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
    },
    c = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
  n("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      l();
      return;
    }
    r.addEventListener("resize", a), r.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        r.removeEventListener("resize", a),
        r.removeEventListener("orientationchange", c);
    });
}
function Ok(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t;
  const s = [],
    o = Et(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        p = new f((g) => {
          if (e.__preventObserver__) return;
          if (g.length === 1) {
            r("observerUpdate", g[0]);
            return;
          }
          const m = function () {
            r("observerUpdate", g[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(m)
            : o.setTimeout(m, 0);
        });
      p.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(p);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = Jg(e.el);
          for (let d = 0; d < c.length; d += 1) a(c[d]);
        }
        a(e.el, { childList: e.params.observeSlideChildren }),
          a(e.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", l),
    i("destroy", u);
}
var Ik = {
  on(t, e, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = n ? "unshift" : "push";
    return (
      t.split(" ").forEach((s) => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []),
          i.eventsListeners[s][r](e);
      }),
      i
    );
  },
  once(t, e, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r() {
      i.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a];
      e.apply(i, o);
    }
    return (r.__emitterProxy = e), i.on(t, r, n);
  },
  onAny(t, e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const i = e ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t), n;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const n = e.eventsAnyListeners.indexOf(t);
    return n >= 0 && e.eventsAnyListeners.splice(n, 1), e;
  },
  off(t, e) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        t.split(" ").forEach((i) => {
          typeof e > "u"
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((r, s) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  n.eventsListeners[i].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, n, i;
    for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((e = s[0]), (n = s.slice(1, s.length)), (i = t))
        : ((e = s[0].events), (n = s[0].data), (i = s[0].context || t)),
      n.unshift(i),
      (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((u) => {
            u.apply(i, [l, ...n]);
          }),
          t.eventsListeners &&
            t.eventsListeners[l] &&
            t.eventsListeners[l].forEach((u) => {
              u.apply(i, n);
            });
      }),
      t
    );
  },
};
function Rk() {
  const t = this;
  let e, n;
  const i = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = i.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (n = t.params.height)
      : (n = i.clientHeight),
    !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(Dn(i, "padding-left") || 0, 10) -
        parseInt(Dn(i, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Dn(i, "padding-top") || 0, 10) -
        parseInt(Dn(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, {
        width: e,
        height: n,
        size: t.isHorizontal() ? e : n,
      }));
}
function Lk() {
  const t = this;
  function e(_) {
    return t.isHorizontal()
      ? _
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[_];
  }
  function n(_, C) {
    return parseFloat(_.getPropertyValue(e(C)) || 0);
  }
  const i = t.params,
    { wrapperEl: r, slidesEl: s, size: o, rtlTranslate: a, wrongRTL: l } = t,
    u = t.virtual && i.virtual.enabled,
    c = u ? t.virtual.slides.length : t.slides.length,
    d = tn(s, `.${t.params.slideClass}, swiper-slide`),
    f = u ? t.virtual.slides.length : d.length;
  let p = [];
  const g = [],
    m = [];
  let b = i.slidesOffsetBefore;
  typeof b == "function" && (b = i.slidesOffsetBefore.call(t));
  let y = i.slidesOffsetAfter;
  typeof y == "function" && (y = i.slidesOffsetAfter.call(t));
  const h = t.snapGrid.length,
    v = t.slidesGrid.length;
  let w = i.spaceBetween,
    x = -b,
    k = 0,
    S = 0;
  if (typeof o > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * o)
    : typeof w == "string" && (w = parseFloat(w)),
    (t.virtualSize = -w),
    d.forEach((_) => {
      a ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (oo(r, "--swiper-centered-offset-before", ""),
      oo(r, "--swiper-centered-offset-after", ""));
  const P = i.grid && i.grid.rows > 1 && t.grid;
  P && t.grid.initSlides(f);
  let E;
  const A =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (_) => typeof i.breakpoints[_].slidesPerView < "u",
    ).length > 0;
  for (let _ = 0; _ < f; _ += 1) {
    E = 0;
    let C;
    if (
      (d[_] && (C = d[_]),
      P && t.grid.updateSlide(_, C, f, e),
      !(d[_] && Dn(C, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        A && (d[_].style[e("width")] = "");
        const I = getComputedStyle(C),
          R = C.style.transform,
          F = C.style.webkitTransform;
        if (
          (R && (C.style.transform = "none"),
          F && (C.style.webkitTransform = "none"),
          i.roundLengths)
        )
          E = t.isHorizontal() ? fc(C, "width", !0) : fc(C, "height", !0);
        else {
          const V = n(I, "width"),
            q = n(I, "padding-left"),
            L = n(I, "padding-right"),
            M = n(I, "margin-left"),
            O = n(I, "margin-right"),
            B = I.getPropertyValue("box-sizing");
          if (B && B === "border-box") E = V + M + O;
          else {
            const { clientWidth: H, offsetWidth: ie } = C;
            E = V + q + L + M + O + (ie - H);
          }
        }
        R && (C.style.transform = R),
          F && (C.style.webkitTransform = F),
          i.roundLengths && (E = Math.floor(E));
      } else
        (E = (o - (i.slidesPerView - 1) * w) / i.slidesPerView),
          i.roundLengths && (E = Math.floor(E)),
          d[_] && (d[_].style[e("width")] = `${E}px`);
      d[_] && (d[_].swiperSlideSize = E),
        m.push(E),
        i.centeredSlides
          ? ((x = x + E / 2 + k / 2 + w),
            k === 0 && _ !== 0 && (x = x - o / 2 - w),
            _ === 0 && (x = x - o / 2 - w),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            i.roundLengths && (x = Math.floor(x)),
            S % i.slidesPerGroup === 0 && p.push(x),
            g.push(x))
          : (i.roundLengths && (x = Math.floor(x)),
            (S - Math.min(t.params.slidesPerGroupSkip, S)) %
              t.params.slidesPerGroup ===
              0 && p.push(x),
            g.push(x),
            (x = x + E + w)),
        (t.virtualSize += E + w),
        (k = E),
        (S += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, o) + y),
    a &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (r.style.width = `${t.virtualSize + w}px`),
    i.setWrapperSize && (r.style[e("width")] = `${t.virtualSize + w}px`),
    P && t.grid.updateWrapperSize(E, p, e),
    !i.centeredSlides)
  ) {
    const _ = [];
    for (let C = 0; C < p.length; C += 1) {
      let I = p[C];
      i.roundLengths && (I = Math.floor(I)),
        p[C] <= t.virtualSize - o && _.push(I);
    }
    (p = _),
      Math.floor(t.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(t.virtualSize - o);
  }
  if (u && i.loop) {
    const _ = m[0] + w;
    if (i.slidesPerGroup > 1) {
      const C = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup,
        ),
        I = _ * i.slidesPerGroup;
      for (let R = 0; R < C; R += 1) p.push(p[p.length - 1] + I);
    }
    for (let C = 0; C < t.virtual.slidesBefore + t.virtual.slidesAfter; C += 1)
      i.slidesPerGroup === 1 && p.push(p[p.length - 1] + _),
        g.push(g[g.length - 1] + _),
        (t.virtualSize += _);
  }
  if ((p.length === 0 && (p = [0]), w !== 0)) {
    const _ = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
    d.filter((C, I) =>
      !i.cssMode || i.loop ? !0 : I !== d.length - 1,
    ).forEach((C) => {
      C.style[_] = `${w}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let _ = 0;
    m.forEach((I) => {
      _ += I + (w || 0);
    }),
      (_ -= w);
    const C = _ - o;
    p = p.map((I) => (I <= 0 ? -b : I > C ? C + y : I));
  }
  if (i.centerInsufficientSlides) {
    let _ = 0;
    if (
      (m.forEach((C) => {
        _ += C + (w || 0);
      }),
      (_ -= w),
      _ < o)
    ) {
      const C = (o - _) / 2;
      p.forEach((I, R) => {
        p[R] = I - C;
      }),
        g.forEach((I, R) => {
          g[R] = I + C;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: d,
      snapGrid: p,
      slidesGrid: g,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    oo(r, "--swiper-centered-offset-before", `${-p[0]}px`),
      oo(
        r,
        "--swiper-centered-offset-after",
        `${t.size / 2 - m[m.length - 1] / 2}px`,
      );
    const _ = -t.snapGrid[0],
      C = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((I) => I + _)),
      (t.slidesGrid = t.slidesGrid.map((I) => I + C));
  }
  if (
    (f !== c && t.emit("slidesLengthChange"),
    p.length !== h &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    g.length !== v && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const _ = `${i.containerModifierClass}backface-hidden`,
      C = t.el.classList.contains(_);
    f <= i.maxBackfaceHiddenSlides
      ? C || t.el.classList.add(_)
      : C && t.el.classList.remove(_);
  }
}
function Dk(t) {
  const e = this,
    n = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    s;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !i) break;
        n.push(o(a));
      }
  else n.push(o(e.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const a = n[s].offsetHeight;
      r = a > r ? a : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function $k() {
  const t = this,
    e = t.slides,
    n = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
      n -
      t.cssOverflowAdjustment();
}
function jk(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    n = e.params,
    { slides: i, rtlTranslate: r, snapGrid: s } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  r && (o = t),
    i.forEach((l) => {
      l.classList.remove(n.slideVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < i.length; l += 1) {
    const u = i[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f =
        (o - s[0] + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      p = -(o - c),
      g = p + e.slidesSizesGrid[l];
    ((p >= 0 && p < e.size - 1) ||
      (g > 1 && g <= e.size) ||
      (p <= 0 && g >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(l),
      i[l].classList.add(n.slideVisibleClass)),
      (u.progress = r ? -d : d),
      (u.originalProgress = r ? -f : f);
  }
}
function Fk(t) {
  const e = this;
  if (typeof t > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * c) || 0;
  }
  const n = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e;
  const l = s,
    u = o;
  if (i === 0) (r = 0), (s = !0), (o = !0);
  else {
    r = (t - e.minTranslate()) / i;
    const c = Math.abs(t - e.minTranslate()) < 1,
      d = Math.abs(t - e.maxTranslate()) < 1;
    (s = c || r <= 0), (o = d || r >= 1), c && (r = 0), d && (r = 1);
  }
  if (n.loop) {
    const c = e.getSlideIndexByData(0),
      d = e.getSlideIndexByData(e.slides.length - 1),
      f = e.slidesGrid[c],
      p = e.slidesGrid[d],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      m = Math.abs(t);
    m >= f ? (a = (m - f) / g) : (a = (m + g - p) / g), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function Nk() {
  const t = this,
    { slides: e, params: n, slidesEl: i, activeIndex: r } = t,
    s = t.virtual && n.virtual.enabled,
    o = (l) => tn(i, `.${n.slideClass}${l}, swiper-slide${l}`)[0];
  e.forEach((l) => {
    l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a;
  if (s)
    if (n.loop) {
      let l = r - t.virtual.slidesBefore;
      l < 0 && (l = t.virtual.slides.length + l),
        l >= t.virtual.slides.length && (l -= t.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${l}"]`));
    } else a = o(`[data-swiper-slide-index="${r}"]`);
  else a = e[r];
  if (a) {
    a.classList.add(n.slideActiveClass);
    let l = Ck(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !l && (l = e[0]), l && l.classList.add(n.slideNextClass);
    let u = _k(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = e[e.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  t.emitSlidesClasses();
}
const Ao = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const n = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      i = e.closest(n());
    if (i) {
      const r = i.querySelector(`.${t.params.lazyPreloaderClass}`);
      r && r.remove();
    }
  },
  Nl = (t, e) => {
    if (!t.slides[e]) return;
    const n = t.slides[e].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  pc = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const n = t.slides.length;
    if (!n || !e || e < 0) return;
    e = Math.min(e, n);
    const i =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      r = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = r,
        a = [o - e];
      a.push(...Array.from({ length: e }).map((l, u) => o + i + u)),
        t.slides.forEach((l, u) => {
          a.includes(l.column) && Nl(t, u);
        });
      return;
    }
    const s = r + i - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = r - e; o <= s + e; o += 1) {
        const a = ((o % n) + n) % n;
        (a < r || a > s) && Nl(t, a);
      }
    else
      for (let o = Math.max(r - e, 0); o <= Math.min(s + e, n - 1); o += 1)
        o !== r && (o > s || o < r) && Nl(t, o);
  };
function Bk(t) {
  const { slidesGrid: e, params: n } = t,
    i = t.rtlTranslate ? t.translate : -t.translate;
  let r;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u"
      ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
        ? (r = s)
        : i >= e[s] && i < e[s + 1] && (r = s + 1)
      : i >= e[s] && (r = s);
  return n.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Hk(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: s, realIndex: o, snapIndex: a } = e;
  let l = t,
    u;
  const c = (f) => {
    let p = f - e.virtual.slidesBefore;
    return (
      p < 0 && (p = e.virtual.slides.length + p),
      p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
      p
    );
  };
  if ((typeof l > "u" && (l = Bk(e)), i.indexOf(n) >= 0)) u = i.indexOf(n);
  else {
    const f = Math.min(r.slidesPerGroupSkip, l);
    u = f + Math.floor((l - f) / r.slidesPerGroup);
  }
  if ((u >= i.length && (u = i.length - 1), l === s)) {
    u !== a && ((e.snapIndex = u), e.emit("snapIndexChange")),
      e.params.loop &&
        e.virtual &&
        e.params.virtual.enabled &&
        (e.realIndex = c(l));
    return;
  }
  let d;
  e.virtual && r.virtual.enabled && r.loop
    ? (d = c(l))
    : e.slides[l]
    ? (d = parseInt(
        e.slides[l].getAttribute("data-swiper-slide-index") || l,
        10,
      ))
    : (d = l),
    Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: d,
      previousIndex: s,
      activeIndex: l,
    }),
    e.initialized && pc(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    o !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Wk(t) {
  const e = this,
    n = e.params,
    i = t.closest(`.${n.slideClass}, swiper-slide`);
  let r = !1,
    s;
  if (i) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === i) {
        (r = !0), (s = o);
        break;
      }
  }
  if (i && r)
    (e.clickedSlide = i),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (e.clickedIndex = s);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
var Vk = {
  updateSize: Rk,
  updateSlides: Lk,
  updateAutoHeight: Dk,
  updateSlidesOffset: $k,
  updateSlidesProgress: jk,
  updateProgress: Fk,
  updateSlidesClasses: Nk,
  updateActiveIndex: Hk,
  updateClickedSlide: Wk,
};
function qk(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: n, rtlTranslate: i, translate: r, wrapperEl: s } = e;
  if (n.virtualTranslate) return i ? -r : r;
  if (n.cssMode) return r;
  let o = Sk(s, t);
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function Uk(t, e) {
  const n = this,
    { rtlTranslate: i, params: r, wrapperEl: s, progress: o } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = i ? -t : t) : (l = t),
    r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    r.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -l)
      : r.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (t - n.minTranslate()) / d),
    c !== o && n.updateProgress(t),
    n.emit("setTranslate", n.translate, e);
}
function Xk() {
  return -this.snapGrid[0];
}
function Gk() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Kk(t, e, n, i, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0);
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (i && t > l ? (c = l) : i && t < u ? (c = u) : (c = t),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (e === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          Qg({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd,
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var Yk = {
  getTranslate: qk,
  setTranslate: Uk,
  minTranslate: Xk,
  maxTranslate: Gk,
  translateTo: Kk,
};
function Qk(t, e) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${t}ms`),
    n.emit("setTransition", t, e);
}
function ty(t) {
  let { swiper: e, runCallbacks: n, direction: i, step: r } = t;
  const { activeIndex: s, previousIndex: o } = e;
  let a = i;
  if (
    (a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
    e.emit(`transition${r}`),
    n && s !== o)
  ) {
    if (a === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      a === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function Zk(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: i } = n;
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    ty({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function Jk(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: i } = n;
  (n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      ty({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
}
var e_ = { setTransition: Qk, transitionStart: Zk, transitionEnd: Jk };
function t_(t, e, n, i, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const s = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: g,
  } = s;
  if ((s.animating && a.preventInteractionOnTransition) || (!g && !i && !r))
    return !1;
  const m = Math.min(s.params.slidesPerGroupSkip, o);
  let b = m + Math.floor((o - m) / s.params.slidesPerGroup);
  b >= l.length && (b = l.length - 1);
  const y = -l[b];
  if (a.normalizeSlideIndex)
    for (let v = 0; v < u.length; v += 1) {
      const w = -Math.floor(y * 100),
        x = Math.floor(u[v] * 100),
        k = Math.floor(u[v + 1] * 100);
      typeof u[v + 1] < "u"
        ? w >= x && w < k - (k - x) / 2
          ? (o = v)
          : w >= x && w < k && (o = v + 1)
        : w >= x && (o = v);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (f
        ? y > s.translate && y > s.minTranslate()
        : y < s.translate && y < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        y > s.translate &&
        y > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(y);
  let h;
  if (
    (o > d ? (h = "next") : o < d ? (h = "prev") : (h = "reset"),
    (f && -y === s.translate) || (!f && y === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(y),
      h !== "reset" && (s.transitionStart(n, h), s.transitionEnd(n, h)),
      !1
    );
  if (a.cssMode) {
    const v = s.isHorizontal(),
      w = f ? y : -y;
    if (e === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[v ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (p[v ? "scrollLeft" : "scrollTop"] = w),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Qg({ swiper: s, targetPosition: w, side: v ? "left" : "top" }), !0
        );
      p.scrollTo({ [v ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(y),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(n, h),
    e === 0
      ? s.transitionEnd(n, h)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd,
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, h)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function n_(t, e, n, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let s = t;
  return (
    r.params.loop &&
      (r.virtual && r.params.virtual.enabled
        ? (s = s + r.virtual.slidesBefore)
        : (s = r.getSlideIndexByData(s))),
    r.slideTo(s, e, n, i)
  );
}
function i_(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    { enabled: r, params: s, animating: o } = i;
  if (!r) return i;
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    u = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    i.loopFix({ direction: "next" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  return s.rewind && i.isEnd
    ? i.slideTo(0, t, e, n)
    : i.slideTo(i.activeIndex + l, t, e, n);
}
function r_(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    {
      params: r,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: u,
    } = i;
  if (!l) return i;
  const c = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (u && !c && r.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const d = a ? i.translate : -i.translate;
  function f(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const p = f(d),
    g = s.map((y) => f(y));
  let m = s[g.indexOf(p) - 1];
  if (typeof m > "u" && r.cssMode) {
    let y;
    s.forEach((h, v) => {
      p >= h && (y = v);
    }),
      typeof y < "u" && (m = s[y > 0 ? y - 1 : y]);
  }
  let b = 0;
  if (
    (typeof m < "u" &&
      ((b = o.indexOf(m)),
      b < 0 && (b = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((b = b - i.slidesPerViewDynamic("previous", !0) + 1),
        (b = Math.max(b, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const y =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(y, t, e, n);
  }
  return i.slideTo(b, t, e, n);
}
function s_(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this;
  return i.slideTo(i.activeIndex, t, e, n);
}
function o_(t, e, n, i) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    i === void 0 && (i = 0.5);
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[a]) {
    const u = r.snapGrid[a],
      c = r.snapGrid[a + 1];
    l - u > (c - u) * i && (s += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[a - 1],
      c = r.snapGrid[a];
    l - u <= (c - u) * i && (s -= r.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, t, e, n)
  );
}
function a_() {
  const t = this,
    { params: e, slidesEl: n } = t,
    i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let r = t.clickedIndex,
    s;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (s = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < t.loopedSlides - i / 2 ||
          r > t.slides.length - t.loopedSlides + i / 2
          ? (t.loopFix(),
            (r = t.getSlideIndex(
              tn(n, `${o}[data-swiper-slide-index="${s}"]`)[0],
            )),
            dc(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r)
        : r > t.slides.length - i
        ? (t.loopFix(),
          (r = t.getSlideIndex(
            tn(n, `${o}[data-swiper-slide-index="${s}"]`)[0],
          )),
          dc(() => {
            t.slideTo(r);
          }))
        : t.slideTo(r);
  } else t.slideTo(r);
}
var l_ = {
  slideTo: t_,
  slideToLoop: n_,
  slideNext: i_,
  slidePrev: r_,
  slideReset: s_,
  slideToClosest: o_,
  slideToClickedSlide: a_,
};
function u_(t) {
  const e = this,
    { params: n, slidesEl: i } = e;
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
  tn(i, `.${n.slideClass}, swiper-slide`).forEach((s, o) => {
    s.setAttribute("data-swiper-slide-index", o);
  }),
    e.loopFix({
      slideRealIndex: t,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function c_(t) {
  let {
    slideRealIndex: e,
    slideTo: n = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a,
  } = t === void 0 ? {} : t;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: f,
    params: p,
  } = l;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && p.virtual.enabled)
  ) {
    n &&
      (!p.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && l.snapIndex < p.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit("loopFix");
    return;
  }
  const g =
    p.slidesPerView === "auto"
      ? l.slidesPerViewDynamic()
      : Math.ceil(parseFloat(p.slidesPerView, 10));
  let m = p.loopedSlides || g;
  m % p.slidesPerGroup !== 0 &&
    (m += p.slidesPerGroup - (m % p.slidesPerGroup)),
    (l.loopedSlides = m);
  const b = [],
    y = [];
  let h = l.activeIndex;
  typeof s > "u"
    ? (s = l.getSlideIndex(
        l.slides.filter((S) => S.classList.contains(p.slideActiveClass))[0],
      ))
    : (h = s);
  const v = i === "next" || !i,
    w = i === "prev" || !i;
  let x = 0,
    k = 0;
  if (s < m) {
    x = Math.max(m - s, p.slidesPerGroup);
    for (let S = 0; S < m - s; S += 1) {
      const P = S - Math.floor(S / u.length) * u.length;
      b.push(u.length - P - 1);
    }
  } else if (s > l.slides.length - m * 2) {
    k = Math.max(s - (l.slides.length - m * 2), p.slidesPerGroup);
    for (let S = 0; S < k; S += 1) {
      const P = S - Math.floor(S / u.length) * u.length;
      y.push(P);
    }
  }
  if (
    (w &&
      b.forEach((S) => {
        (l.slides[S].swiperLoopMoveDOM = !0),
          f.prepend(l.slides[S]),
          (l.slides[S].swiperLoopMoveDOM = !1);
      }),
    v &&
      y.forEach((S) => {
        (l.slides[S].swiperLoopMoveDOM = !0),
          f.append(l.slides[S]),
          (l.slides[S].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    p.slidesPerView === "auto" && l.updateSlides(),
    p.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (b.length > 0 && w)
      if (typeof e > "u") {
        const S = l.slidesGrid[h],
          E = l.slidesGrid[h + x] - S;
        a
          ? l.setTranslate(l.translate - E)
          : (l.slideTo(h + x, 0, !1, !0),
            r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += E));
      } else r && l.slideToLoop(e, 0, !1, !0);
    else if (y.length > 0 && v)
      if (typeof e > "u") {
        const S = l.slidesGrid[h],
          E = l.slidesGrid[h - k] - S;
        a
          ? l.setTranslate(l.translate - E)
          : (l.slideTo(h - k, 0, !1, !0),
            r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += E));
      } else l.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !o)
  ) {
    const S = {
      slideRealIndex: e,
      slideTo: !1,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((P) => {
          !P.destroyed && P.params.loop && P.loopFix(S);
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix(S);
  }
  l.emit("loopFix");
}
function d_() {
  const t = this,
    { params: e, slidesEl: n } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const i = [];
  t.slides.forEach((r) => {
    const s =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    i[s] = r;
  }),
    t.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((r) => {
      n.append(r);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
var f_ = { loopCreate: u_, loopFix: c_, loopDestroy: d_ };
function p_(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const n = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function h_() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var m_ = { setGrabCursor: p_, unsetGrabCursor: h_ };
function g_(t, e) {
  e === void 0 && (e = this);
  function n(i) {
    if (!i || i === an() || i === Et()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(t);
    return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
  }
  return n(e);
}
function y_(t) {
  const e = this,
    n = an(),
    i = Et(),
    r = e.touchEventsData;
  r.evCache.push(t);
  const { params: s, touches: o, enabled: a } = e;
  if (
    !a ||
    (!s.simulateTouch && t.pointerType === "mouse") ||
    (e.animating && s.preventInteractionOnTransition)
  )
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  let u = l.target;
  if (
    (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(u)) ||
    ("which" in l && l.which === 3) ||
    ("button" in l && l.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    d = t.composedPath ? t.composedPath() : t.path;
  c && l.target && l.target.shadowRoot && d && (u = d[0]);
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (p ? g_(f, u) : u.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
  (o.currentX = l.pageX), (o.currentY = l.pageY);
  const g = o.currentX,
    m = o.currentY,
    b = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (b && (g <= y || g >= i.innerWidth - y))
    if (b === "prevent") t.preventDefault();
    else return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = g),
    (o.startY = m),
    (r.touchStartTime = ua()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1);
  let h = !0;
  u.matches(r.focusableElements) &&
    ((h = !1), u.nodeName === "SELECT" && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const v = h && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || v) &&
    !u.isContentEditable &&
    l.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !s.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", l);
}
function v_(t) {
  const e = an(),
    n = this,
    i = n.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
  if (!a || (!r.simulateTouch && t.pointerType === "mouse")) return;
  let l = t;
  if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const u = i.evCache.findIndex((k) => k.pointerId === l.pointerId);
  u >= 0 && (i.evCache[u] = l);
  const c = i.evCache.length > 1 ? i.evCache[0] : l,
    d = c.pageX,
    f = c.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = d), (s.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, {
          startX: d,
          startY: f,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: f,
        }),
        (i.touchStartTime = ua()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (f < s.startY && n.translate <= n.maxTranslate()) ||
        (f > s.startY && n.translate >= n.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (d < s.startX && n.translate <= n.maxTranslate()) ||
      (d > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    l.target === e.activeElement &&
    l.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (s.currentX = d), (s.currentY = f);
  const p = s.currentX - s.startX,
    g = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let k;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : p * p + g * g >= 25 &&
        ((k = (Math.atan2(Math.abs(g), Math.abs(p)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? k > r.touchAngle
          : 90 - k > r.touchAngle));
  }
  if (
    (i.isScrolling && n.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        i.evCache.length > 1))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (n.allowClick = !1),
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
  let m = n.isHorizontal() ? p : g,
    b = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  r.oneWayMovement &&
    ((m = Math.abs(m) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
    (s.diff = m),
    (m *= r.touchRatio),
    o && ((m = -m), (b = -b));
  const y = n.touchesDirection;
  (n.swipeDirection = m > 0 ? "prev" : "next"),
    (n.touchesDirection = b > 0 ? "prev" : "next");
  const h = n.params.loop && !r.cssMode;
  if (!i.isMoved) {
    if (
      (h && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(k);
    }
    (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l);
  }
  let v;
  i.isMoved &&
    y !== n.touchesDirection &&
    h &&
    Math.abs(m) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (v = !0)),
    n.emit("sliderMove", l),
    (i.isMoved = !0),
    (i.currentTranslate = m + i.startTranslate);
  let w = !0,
    x = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (x = 0),
    m > 0
      ? (h &&
          !v &&
          i.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > n.minTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + m) ** x)))
      : m < 0 &&
        (h &&
          !v &&
          i.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (r.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - m) ** x))),
    w && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
      r.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate));
}
function w_(t) {
  const e = this,
    n = e.touchEventsData,
    i = n.evCache.findIndex((v) => v.pointerId === t.pointerId);
  if (
    (i >= 0 && n.evCache.splice(i, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(t.type) &&
      !(
        t.type === "pointercancel" &&
        (e.browser.isSafari || e.browser.isWebView)
      ))
  )
    return;
  const {
    params: r,
    touches: s,
    rtlTranslate: o,
    slidesGrid: a,
    enabled: l,
  } = e;
  if (!l || (!r.simulateTouch && t.pointerType === "mouse")) return;
  let u = t;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && e.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && e.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const c = ua(),
    d = c - n.touchStartTime;
  if (e.allowClick) {
    const v = u.path || (u.composedPath && u.composedPath());
    e.updateClickedSlide((v && v[0]) || u.target),
      e.emit("tap click", u),
      d < 300 &&
        c - n.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = ua()),
    dc(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !e.swipeDirection ||
      s.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let f;
  if (
    (r.followFinger
      ? (f = o ? e.translate : -e.translate)
      : (f = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (r.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  let p = 0,
    g = e.slidesSizesGrid[0];
  for (
    let v = 0;
    v < a.length;
    v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const w = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof a[v + w] < "u"
      ? f >= a[v] && f < a[v + w] && ((p = v), (g = a[v + w] - a[v]))
      : f >= a[v] && ((p = v), (g = a[a.length - 1] - a[a.length - 2]));
  }
  let m = null,
    b = null;
  r.rewind &&
    (e.isBeginning
      ? (b =
          r.virtual && r.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (m = 0));
  const y = (f - a[p]) / g,
    h = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (d > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (y >= r.longSwipesRatio
        ? e.slideTo(r.rewind && e.isEnd ? m : p + h)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (y > 1 - r.longSwipesRatio
          ? e.slideTo(p + h)
          : b !== null && y < 0 && Math.abs(y) > r.longSwipesRatio
          ? e.slideTo(b)
          : e.slideTo(p));
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl)
      ? u.target === e.navigation.nextEl
        ? e.slideTo(p + h)
        : e.slideTo(p)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : p + h),
        e.swipeDirection === "prev" && e.slideTo(b !== null ? b : p));
  }
}
function Jp() {
  const t = this,
    { params: e, el: n } = t;
  if (n && n.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = t,
    o = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const a = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !a
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = r),
    (t.allowSlideNext = i),
    t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
}
function b_(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function x_() {
  const t = this,
    { wrapperEl: e, rtlTranslate: n, enabled: i } = t;
  if (!i) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let r;
  const s = t.maxTranslate() - t.minTranslate();
  s === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / s),
    r !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
function S_(t) {
  const e = this;
  Ao(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
let eh = !1;
function k_() {}
const ny = (t, e) => {
  const n = an(),
    { params: i, el: r, wrapperEl: s, device: o } = t,
    a = !!i.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  r[l]("pointerdown", t.onTouchStart, { passive: !1 }),
    n[l]("pointermove", t.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointerup", t.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", t.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", t.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", t.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      r[l]("click", t.onClick, !0),
    i.cssMode && s[l]("scroll", t.onScroll),
    i.updateOnWindowResize
      ? t[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Jp,
          !0,
        )
      : t[u]("observerUpdate", Jp, !0),
    r[l]("load", t.onLoad, { capture: !0 });
};
function __() {
  const t = this,
    e = an(),
    { params: n } = t;
  (t.onTouchStart = y_.bind(t)),
    (t.onTouchMove = v_.bind(t)),
    (t.onTouchEnd = w_.bind(t)),
    n.cssMode && (t.onScroll = x_.bind(t)),
    (t.onClick = b_.bind(t)),
    (t.onLoad = S_.bind(t)),
    eh || (e.addEventListener("touchstart", k_), (eh = !0)),
    ny(t, "on");
}
function C_() {
  ny(this, "off");
}
var E_ = { attachEvents: __, detachEvents: C_ };
const th = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function P_() {
  const t = this,
    { realIndex: e, initialized: n, params: i, el: r } = t,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || t.originalParams,
    u = th(t, i),
    c = th(t, l),
    d = i.enabled;
  u && !c
    ? (r.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`,
      ),
      t.emitContainerClasses())
    : !u &&
      c &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && i.grid.fill === "column")) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((m) => {
      if (typeof l[m] > "u") return;
      const b = i[m] && i[m].enabled,
        y = l[m] && l[m].enabled;
      b && !y && t[m].disable(), !b && y && t[m].enable();
    });
  const f = l.direction && l.direction !== i.direction,
    p = i.loop && (l.slidesPerView !== i.slidesPerView || f);
  f && n && t.changeDirection(), yt(t.params, l);
  const g = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    d && !g ? t.disable() : !d && g && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", l),
    p && n && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
    t.emit("breakpoint", l);
}
function T_(t, e, n) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !n))) return;
  let i = !1;
  const r = Et(),
    s = e === "window" ? r.innerHeight : n.clientHeight,
    o = Object.keys(t).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
      : u <= n.clientWidth && (i = l);
  }
  return i || "max";
}
var z_ = { setBreakpoint: P_, getBreakpoint: T_ };
function A_(t, e) {
  const n = [];
  return (
    t.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && n.push(e + r);
          })
        : typeof i == "string" && n.push(e + i);
    }),
    n
  );
}
function M_() {
  const t = this,
    { classNames: e, params: n, rtl: i, el: r, device: s } = t,
    o = A_(
      [
        "initialized",
        n.direction,
        { "free-mode": t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  e.push(...o), r.classList.add(...e), t.emitContainerClasses();
}
function O_() {
  const t = this,
    { el: e, classNames: n } = t;
  e.classList.remove(...n), t.emitContainerClasses();
}
var I_ = { addClasses: M_, removeClasses: O_ };
function R_() {
  const t = this,
    { isLocked: e, params: n } = t,
    { slidesOffsetBefore: i } = n;
  if (i) {
    const r = t.slides.length - 1,
      s = t.slidesGrid[r] + t.slidesSizesGrid[r] + i * 2;
    t.isLocked = t.size > s;
  } else t.isLocked = t.snapGrid.length === 1;
  n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var L_ = { checkOverflow: R_ },
  nh = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
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
    threshold: 5,
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
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
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
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function D_(t, e) {
  return function (i) {
    i === void 0 && (i = {});
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      yt(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        t[r] === !0 &&
        (t[r] = { auto: !0 }),
      !(r in t && "enabled" in s))
    ) {
      yt(e, i);
      return;
    }
    t[r] === !0 && (t[r] = { enabled: !0 }),
      typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      yt(e, i);
  };
}
const Bl = {
    eventsEmitter: Ik,
    update: Vk,
    translate: Yk,
    transition: e_,
    slide: l_,
    loop: f_,
    grabCursor: m_,
    events: E_,
    breakpoints: z_,
    checkOverflow: L_,
    classes: I_,
  },
  Hl = {};
let Ss = class cn {
  constructor() {
    let e, n;
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (n = r[0])
      : ([e, n] = r),
      n || (n = {}),
      (n = yt({}, n)),
      e && !n.el && (n.el = e);
    const o = an();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = yt({}, n, { el: d });
          c.push(new cn(f));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = ey()),
      (a.device = Tk({ userAgent: n.userAgent })),
      (a.browser = Ak()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: D_(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = yt({}, nh, l);
    return (
      (a.params = yt({}, u, Hl, n)),
      (a.originalParams = yt({}, a.params)),
      (a.passedParams = yt({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
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
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getSlideIndex(e) {
    const { slidesEl: n, params: i } = this,
      r = tn(n, `.${i.slideClass}, swiper-slide`),
      s = ca(r[0]);
    return ca(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === e,
      )[0],
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: n, params: i } = e;
    e.slides = tn(n, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, n) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(),
      o = (i.maxTranslate() - r) * e + r;
    i.translateTo(o, typeof n > "u" ? 0 : n),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = e.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0,
      );
    e.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(e) {
    const n = this;
    return n.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = [];
    e.slides.forEach((i) => {
      const r = e.getSlideClasses(i);
      n.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
    }),
      e.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(e, n) {
    e === void 0 && (e = "current"), n === void 0 && (n = !1);
    const i = this,
      {
        params: r,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = i;
    let c = 1;
    if (r.centeredSlides) {
      let d = s[u] ? s[u].swiperSlideSize : 0,
        f;
      for (let p = u + 1; p < s.length; p += 1)
        s[p] &&
          !f &&
          ((d += s[p].swiperSlideSize), (c += 1), d > l && (f = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        s[p] &&
          !f &&
          ((d += s[p].swiperSlideSize), (c += 1), d > l && (f = !0));
    } else if (e === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: n, params: i } = e;
    i.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ao(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      r(), i.autoHeight && e.updateAutoHeight();
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        e.isEnd &&
        !i.centeredSlides
      ) {
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(o.length - 1, 0, !1, !0);
      } else s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || r();
    }
    i.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, n) {
    n === void 0 && (n = !0);
    const i = this,
      r = i.params.direction;
    return (
      e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r ||
        (e !== "horizontal" && e !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.forEach((s) => {
          e === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        i.emit("changeDirection"),
        n && i.update()),
      i
    );
  }
  changeLanguageDirection(e) {
    const n = this;
    (n.rtl && e === "rtl") ||
      (!n.rtl && e === "ltr") ||
      ((n.rtl = e === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(e) {
    const n = this;
    if (n.mounted) return !0;
    let i = e || n.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = n), i.parentNode && i.parentNode.host && (n.isElement = !0);
    const r = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(r())
        : tn(i, r())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = Zg("div", n.params.wrapperClass)),
        i.append(o),
        tn(i, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: o,
        slidesEl: n.isElement ? i.parentNode.host : o,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Dn(i, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || Dn(i, "direction") === "rtl"),
        wrongRTL: Dn(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const n = this;
    return (
      n.initialized ||
        n.mount(e) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
          r.complete
            ? Ao(n, r)
            : r.addEventListener("load", (s) => {
                Ao(n, s.target);
              });
        }),
        pc(n),
        (n.initialized = !0),
        pc(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(e, n) {
    e === void 0 && (e = !0), n === void 0 && (n = !0);
    const i = this,
      { params: r, el: s, wrapperEl: o, slides: a } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          s.removeAttribute("style"),
          o.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                r.slideVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass,
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((l) => {
          i.off(l);
        }),
        e !== !1 && ((i.el.swiper = null), bk(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    yt(Hl, e);
  }
  static get extendedDefaults() {
    return Hl;
  }
  static get defaults() {
    return nh;
  }
  static installModule(e) {
    cn.prototype.__modules__ || (cn.prototype.__modules__ = []);
    const n = cn.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => cn.installModule(n)), cn)
      : (cn.installModule(e), cn);
  }
};
Object.keys(Bl).forEach((t) => {
  Object.keys(Bl[t]).forEach((e) => {
    Ss.prototype[e] = Bl[t][e];
  });
});
Ss.use([Mk, Ok]);
const iy = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
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
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
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
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
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
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function gi(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function $n(t, e) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : gi(e[i]) && gi(t[i]) && Object.keys(e[i]).length > 0
        ? e[i].__swiper__
          ? (t[i] = e[i])
          : $n(t[i], e[i])
        : (t[i] = e[i]);
    });
}
function ry(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function sy(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function oy(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function ay(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    n = [];
  return (
    e.forEach((i) => {
      n.indexOf(i) < 0 && n.push(i);
    }),
    n.join(" ")
  );
}
function $_(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function j_(t) {
  let {
    swiper: e,
    slides: n,
    passedParams: i,
    changedParams: r,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = t;
  const u = r.filter(
      (E) => E !== "children" && E !== "direction" && E !== "wrapperClass",
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: p,
      virtual: g,
      thumbs: m,
    } = e;
  let b, y, h, v, w, x, k, S;
  r.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (b = !0),
    r.includes("controller") &&
      i.controller &&
      i.controller.control &&
      c.controller &&
      !c.controller.control &&
      (y = !0),
    r.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (h = !0),
    r.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      p &&
      !p.el &&
      (v = !0),
    r.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || o) &&
      (i.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (w = !0);
  const P = (E) => {
    e[E] &&
      (e[E].destroy(),
      E === "navigation"
        ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()),
          (c[E].prevEl = void 0),
          (c[E].nextEl = void 0),
          (e[E].prevEl = void 0),
          (e[E].nextEl = void 0))
        : (e.isElement && e[E].el.remove(),
          (c[E].el = void 0),
          (e[E].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (c.loop && !i.loop ? (x = !0) : !c.loop && i.loop ? (k = !0) : (S = !0)),
    u.forEach((E) => {
      if (gi(c[E]) && gi(i[E]))
        $n(c[E], i[E]),
          (E === "navigation" || E === "pagination" || E === "scrollbar") &&
            "enabled" in i[E] &&
            !i[E].enabled &&
            P(E);
      else {
        const A = i[E];
        (A === !0 || A === !1) &&
        (E === "navigation" || E === "pagination" || E === "scrollbar")
          ? A === !1 && P(E)
          : (c[E] = i[E]);
      }
    }),
    u.includes("controller") &&
      !y &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    r.includes("children") &&
      n &&
      g &&
      c.virtual.enabled &&
      ((g.slides = n), g.update(!0)),
    r.includes("children") && n && c.loop && (S = !0),
    b && m.init() && m.update(!0),
    y && (e.controller.control = c.controller.control),
    h &&
      (e.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        e.el.appendChild(l)),
      l && (c.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    v &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        e.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    w &&
      (e.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = e.hostEl.nextButtonSvg),
          e.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (s.innerHTML = e.hostEl.prevButtonSvg),
          e.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      f.init(),
      f.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    r.includes("direction") && e.changeDirection(i.direction, !1),
    (x || S) && e.loopDestroy(),
    (k || S) && e.loopCreate(),
    e.update();
}
function F_(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const n = { on: {} },
    i = {},
    r = {};
  $n(n, Ss.defaults),
    $n(n, Ss.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const s = {},
    o = iy.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, t);
  return (
    Object.keys(a).forEach((l) => {
      typeof t[l] > "u" ||
        (o.indexOf(l) >= 0
          ? gi(t[l])
            ? ((n[l] = {}), (r[l] = {}), $n(n[l], t[l]), $n(r[l], t[l]))
            : ((n[l] = t[l]), (r[l] = t[l]))
          : l.search(/on[A-Z]/) === 0 && typeof t[l] == "function"
          ? e
            ? (i[`${l[2].toLowerCase()}${l.substr(3)}`] = t[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = t[l])
          : (s[l] = t[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: r, rest: s, events: i }
  );
}
function N_(t, e) {
  let {
    el: n,
    nextEl: i,
    prevEl: r,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a,
  } = t;
  ry(e) &&
    i &&
    r &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = r),
    (a.originalParams.navigation.prevEl = r)),
    sy(e) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    oy(e) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function B_(t, e, n, i, r) {
  const s = [];
  if (!e) return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (n && i) {
    const l = i.map(r),
      u = n.map(r);
    l.join("") !== u.join("") && o("children"),
      i.length !== n.length && o("children");
  }
  return (
    iy
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in t && l in e)
          if (gi(t[l]) && gi(e[l])) {
            const u = Object.keys(t[l]),
              c = Object.keys(e[l]);
            u.length !== c.length
              ? o(l)
              : (u.forEach((d) => {
                  t[l][d] !== e[l][d] && o(l);
                }),
                c.forEach((d) => {
                  t[l][d] !== e[l][d] && o(l);
                }));
          } else t[l] !== e[l] && o(l);
      }),
    s
  );
}
const H_ = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    da.apply(this, arguments)
  );
}
function ly(t) {
  return (
    t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
  );
}
function uy(t) {
  const e = [];
  return (
    de.Children.toArray(t).forEach((n) => {
      ly(n)
        ? e.push(n)
        : n.props &&
          n.props.children &&
          uy(n.props.children).forEach((i) => e.push(i));
    }),
    e
  );
}
function W_(t) {
  const e = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    de.Children.toArray(t).forEach((i) => {
      if (ly(i)) e.push(i);
      else if (i.props && i.props.slot && n[i.props.slot])
        n[i.props.slot].push(i);
      else if (i.props && i.props.children) {
        const r = uy(i.props.children);
        r.length > 0 ? r.forEach((s) => e.push(s)) : n["container-end"].push(i);
      } else n["container-end"].push(i);
    }),
    { slides: e, slots: n }
  );
}
function V_(t, e, n) {
  if (!n) return null;
  const i = (c) => {
      let d = c;
      return (
        c < 0 ? (d = e.length + c) : d >= e.length && (d = d - e.length), d
      );
    },
    r = t.isHorizontal()
      ? { [t.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    a = t.params.loop ? -e.length : 0,
    l = t.params.loop ? e.length * 2 : e.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= s && c <= o && u.push(e[i(c)]);
  return u.map((c, d) =>
    de.cloneElement(c, { swiper: t, style: r, key: `slide-${d}` }),
  );
}
function Qr(t, e) {
  return typeof window > "u" ? j.useEffect(t, e) : j.useLayoutEffect(t, e);
}
const ih = j.createContext(null),
  q_ = j.createContext(null),
  cy = j.forwardRef(function (t, e) {
    let {
        className: n,
        tag: i = "div",
        wrapperTag: r = "div",
        children: s,
        onSwiper: o,
        ...a
      } = t === void 0 ? {} : t,
      l = !1;
    const [u, c] = j.useState("swiper"),
      [d, f] = j.useState(null),
      [p, g] = j.useState(!1),
      m = j.useRef(!1),
      b = j.useRef(null),
      y = j.useRef(null),
      h = j.useRef(null),
      v = j.useRef(null),
      w = j.useRef(null),
      x = j.useRef(null),
      k = j.useRef(null),
      S = j.useRef(null),
      { params: P, passedParams: E, rest: A, events: _ } = F_(a),
      { slides: C, slots: I } = W_(s),
      R = () => {
        g(!p);
      };
    Object.assign(P.on, {
      _containerClasses(M, O) {
        c(O);
      },
    });
    const F = () => {
      Object.assign(P.on, _), (l = !0);
      const M = { ...P };
      if (
        (delete M.wrapperClass,
        (y.current = new Ss(M)),
        y.current.virtual && y.current.params.virtual.enabled)
      ) {
        y.current.virtual.slides = C;
        const O = {
          cache: !1,
          slides: C,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        $n(y.current.params.virtual, O),
          $n(y.current.originalParams.virtual, O);
      }
    };
    b.current || F(), y.current && y.current.on("_beforeBreakpoint", R);
    const V = () => {
        l ||
          !_ ||
          !y.current ||
          Object.keys(_).forEach((M) => {
            y.current.on(M, _[M]);
          });
      },
      q = () => {
        !_ ||
          !y.current ||
          Object.keys(_).forEach((M) => {
            y.current.off(M, _[M]);
          });
      };
    j.useEffect(() => () => {
      y.current && y.current.off("_beforeBreakpoint", R);
    }),
      j.useEffect(() => {
        !m.current &&
          y.current &&
          (y.current.emitSlidesClasses(), (m.current = !0));
      }),
      Qr(() => {
        if ((e && (e.current = b.current), !!b.current))
          return (
            y.current.destroyed && F(),
            N_(
              {
                el: b.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: k.current,
                scrollbarEl: S.current,
                swiper: y.current,
              },
              P,
            ),
            o && o(y.current),
            () => {
              y.current && !y.current.destroyed && y.current.destroy(!0, !1);
            }
          );
      }, []),
      Qr(() => {
        V();
        const M = B_(E, h.current, C, v.current, (O) => O.key);
        return (
          (h.current = E),
          (v.current = C),
          M.length &&
            y.current &&
            !y.current.destroyed &&
            j_({
              swiper: y.current,
              slides: C,
              passedParams: E,
              changedParams: M,
              nextEl: w.current,
              prevEl: x.current,
              scrollbarEl: S.current,
              paginationEl: k.current,
            }),
          () => {
            q();
          }
        );
      }),
      Qr(() => {
        H_(y.current);
      }, [d]);
    function L() {
      return P.virtual
        ? V_(y.current, C, d)
        : C.map((M, O) =>
            de.cloneElement(M, { swiper: y.current, swiperSlideIndex: O }),
          );
    }
    return de.createElement(
      i,
      da({ ref: b, className: ay(`${u}${n ? ` ${n}` : ""}`) }, A),
      de.createElement(
        q_.Provider,
        { value: y.current },
        I["container-start"],
        de.createElement(
          r,
          { className: $_(P.wrapperClass) },
          I["wrapper-start"],
          L(),
          I["wrapper-end"],
        ),
        ry(P) &&
          de.createElement(
            de.Fragment,
            null,
            de.createElement("div", {
              ref: x,
              className: "swiper-button-prev",
            }),
            de.createElement("div", {
              ref: w,
              className: "swiper-button-next",
            }),
          ),
        oy(P) &&
          de.createElement("div", { ref: S, className: "swiper-scrollbar" }),
        sy(P) &&
          de.createElement("div", { ref: k, className: "swiper-pagination" }),
        I["container-end"],
      ),
    );
  });
cy.displayName = "Swiper";
const dy = j.forwardRef(function (t, e) {
  let {
    tag: n = "div",
    children: i,
    className: r = "",
    swiper: s,
    zoom: o,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = t === void 0 ? {} : t;
  const d = j.useRef(null),
    [f, p] = j.useState("swiper-slide"),
    [g, m] = j.useState(!1);
  function b(w, x, k) {
    x === d.current && p(k);
  }
  Qr(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      e && (e.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", b),
        () => {
          s && s.off("_slideClass", b);
        }
      );
    }
  }),
    Qr(() => {
      s && d.current && !s.destroyed && p(s.getSlideClasses(d.current));
    }, [s]);
  const y = {
      isActive: f.indexOf("swiper-slide-active") >= 0,
      isVisible: f.indexOf("swiper-slide-visible") >= 0,
      isPrev: f.indexOf("swiper-slide-prev") >= 0,
      isNext: f.indexOf("swiper-slide-next") >= 0,
    },
    h = () => (typeof i == "function" ? i(y) : i),
    v = () => {
      m(!0);
    };
  return de.createElement(
    n,
    da(
      {
        ref: d,
        className: ay(`${f}${r ? ` ${r}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: v,
      },
      c,
    ),
    o &&
      de.createElement(
        ih.Provider,
        { value: y },
        de.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          h(),
          a &&
            !g &&
            de.createElement("div", { className: "swiper-lazy-preloader" }),
        ),
      ),
    !o &&
      de.createElement(
        ih.Provider,
        { value: y },
        h(),
        a &&
          !g &&
          de.createElement("div", { className: "swiper-lazy-preloader" }),
      ),
  );
});
dy.displayName = "SwiperSlide";
function fy(t, e, n, i) {
  return (
    t.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let s = tn(t.el, `.${i[r]}`)[0];
          s || ((s = Zg("div", i[r])), (s.className = i[r]), t.el.append(s)),
            (n[r] = s),
            (e[r] = s);
        }
      }),
    n
  );
}
function U_(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t;
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
    (e.navigation = { nextEl: null, prevEl: null });
  const s = (m) => (Array.isArray(m) || (m = [m].filter((b) => !!b)), m);
  function o(m) {
    let b;
    return m &&
      typeof m == "string" &&
      e.isElement &&
      ((b = e.el.querySelector(m)), b)
      ? b
      : (m &&
          (typeof m == "string" && (b = [...document.querySelectorAll(m)]),
          e.params.uniqueNavElements &&
            typeof m == "string" &&
            b.length > 1 &&
            e.el.querySelectorAll(m).length === 1 &&
            (b = e.el.querySelector(m))),
        m && !b ? m : b);
  }
  function a(m, b) {
    const y = e.params.navigation;
    (m = s(m)),
      m.forEach((h) => {
        h &&
          (h.classList[b ? "add" : "remove"](...y.disabledClass.split(" ")),
          h.tagName === "BUTTON" && (h.disabled = b),
          e.params.watchOverflow &&
            e.enabled &&
            h.classList[e.isLocked ? "add" : "remove"](y.lockClass));
      });
  }
  function l() {
    const { nextEl: m, prevEl: b } = e.navigation;
    if (e.params.loop) {
      a(b, !1), a(m, !1);
      return;
    }
    a(b, e.isBeginning && !e.params.rewind), a(m, e.isEnd && !e.params.rewind);
  }
  function u(m) {
    m.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function c(m) {
    m.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function d() {
    const m = e.params.navigation;
    if (
      ((e.params.navigation = fy(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return;
    let b = o(m.nextEl),
      y = o(m.prevEl);
    Object.assign(e.navigation, { nextEl: b, prevEl: y }),
      (b = s(b)),
      (y = s(y));
    const h = (v, w) => {
      v && v.addEventListener("click", w === "next" ? c : u),
        !e.enabled && v && v.classList.add(...m.lockClass.split(" "));
    };
    b.forEach((v) => h(v, "next")), y.forEach((v) => h(v, "prev"));
  }
  function f() {
    let { nextEl: m, prevEl: b } = e.navigation;
    (m = s(m)), (b = s(b));
    const y = (h, v) => {
      h.removeEventListener("click", v === "next" ? c : u),
        h.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    m.forEach((h) => y(h, "next")), b.forEach((h) => y(h, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? g() : (d(), l());
  }),
    i("toEdge fromEdge lock unlock", () => {
      l();
    }),
    i("destroy", () => {
      f();
    }),
    i("enable disable", () => {
      let { nextEl: m, prevEl: b } = e.navigation;
      (m = s(m)),
        (b = s(b)),
        [...m, ...b]
          .filter((y) => !!y)
          .forEach((y) =>
            y.classList[e.enabled ? "remove" : "add"](
              e.params.navigation.lockClass,
            ),
          );
    }),
    i("click", (m, b) => {
      let { nextEl: y, prevEl: h } = e.navigation;
      (y = s(y)), (h = s(h));
      const v = b.target;
      if (e.params.navigation.hideOnClick && !h.includes(v) && !y.includes(v)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === v || e.pagination.el.contains(v))
        )
          return;
        let w;
        y.length
          ? (w = y[0].classList.contains(e.params.navigation.hiddenClass))
          : h.length &&
            (w = h[0].classList.contains(e.params.navigation.hiddenClass)),
          r(w === !0 ? "navigationShow" : "navigationHide"),
          [...y, ...h]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(e.params.navigation.hiddenClass),
            );
      }
    });
  const p = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        d(),
        l();
    },
    g = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        f();
    };
  Object.assign(e.navigation, {
    enable: p,
    disable: g,
    update: l,
    init: d,
    destroy: f,
  });
}
function Ir(t) {
  return (
    t === void 0 && (t = ""),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function X_(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t;
  const s = "swiper-pagination";
  n({
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
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let o,
    a = 0;
  const l = (h) => (Array.isArray(h) || (h = [h].filter((v) => !!v)), h);
  function u() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function c(h, v) {
    const { bulletActiveClass: w } = e.params.pagination;
    h &&
      ((h = h[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
      h &&
        (h.classList.add(`${w}-${v}`),
        (h = h[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        h && h.classList.add(`${w}-${v}-${v}`)));
  }
  function d(h) {
    const v = h.target.closest(Ir(e.params.pagination.bulletClass));
    if (!v) return;
    h.preventDefault();
    const w = ca(v) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === w) return;
      const x = e.getSlideIndexByData(w),
        k = e.getSlideIndexByData(e.realIndex);
      x > e.slides.length - e.loopedSlides &&
        e.loopFix({
          direction: x > k ? "next" : "prev",
          activeSlideIndex: x,
          slideTo: !1,
        }),
        e.slideToLoop(w);
    } else e.slideTo(w);
  }
  function f() {
    const h = e.rtl,
      v = e.params.pagination;
    if (u()) return;
    let w = e.pagination.el;
    w = l(w);
    let x, k;
    const S =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      P = e.params.loop
        ? Math.ceil(S / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((k = e.previousRealIndex || 0),
          (x =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((x = e.snapIndex), (k = e.previousSnapIndex))
        : ((k = e.previousIndex || 0), (x = e.activeIndex || 0)),
      v.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const E = e.pagination.bullets;
      let A, _, C;
      if (
        (v.dynamicBullets &&
          ((o = fc(E[0], e.isHorizontal() ? "width" : "height", !0)),
          w.forEach((I) => {
            I.style[e.isHorizontal() ? "width" : "height"] = `${
              o * (v.dynamicMainBullets + 4)
            }px`;
          }),
          v.dynamicMainBullets > 1 &&
            k !== void 0 &&
            ((a += x - (k || 0)),
            a > v.dynamicMainBullets - 1
              ? (a = v.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (A = Math.max(x - a, 0)),
          (_ = A + (Math.min(E.length, v.dynamicMainBullets) - 1)),
          (C = (_ + A) / 2)),
        E.forEach((I) => {
          const R = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (F) => `${v.bulletActiveClass}${F}`,
            ),
          ]
            .map((F) =>
              typeof F == "string" && F.includes(" ") ? F.split(" ") : F,
            )
            .flat();
          I.classList.remove(...R);
        }),
        w.length > 1)
      )
        E.forEach((I) => {
          const R = ca(I);
          R === x
            ? I.classList.add(...v.bulletActiveClass.split(" "))
            : e.isElement && I.setAttribute("part", "bullet"),
            v.dynamicBullets &&
              (R >= A &&
                R <= _ &&
                I.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
              R === A && c(I, "prev"),
              R === _ && c(I, "next"));
        });
      else {
        const I = E[x];
        if (
          (I && I.classList.add(...v.bulletActiveClass.split(" ")),
          e.isElement &&
            E.forEach((R, F) => {
              R.setAttribute("part", F === x ? "bullet-active" : "bullet");
            }),
          v.dynamicBullets)
        ) {
          const R = E[A],
            F = E[_];
          for (let V = A; V <= _; V += 1)
            E[V] &&
              E[V].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
          c(R, "prev"), c(F, "next");
        }
      }
      if (v.dynamicBullets) {
        const I = Math.min(E.length, v.dynamicMainBullets + 4),
          R = (o * I - o) / 2 - C * o,
          F = h ? "right" : "left";
        E.forEach((V) => {
          V.style[e.isHorizontal() ? F : "top"] = `${R}px`;
        });
      }
    }
    w.forEach((E, A) => {
      if (
        (v.type === "fraction" &&
          (E.querySelectorAll(Ir(v.currentClass)).forEach((_) => {
            _.textContent = v.formatFractionCurrent(x + 1);
          }),
          E.querySelectorAll(Ir(v.totalClass)).forEach((_) => {
            _.textContent = v.formatFractionTotal(P);
          })),
        v.type === "progressbar")
      ) {
        let _;
        v.progressbarOpposite
          ? (_ = e.isHorizontal() ? "vertical" : "horizontal")
          : (_ = e.isHorizontal() ? "horizontal" : "vertical");
        const C = (x + 1) / P;
        let I = 1,
          R = 1;
        _ === "horizontal" ? (I = C) : (R = C),
          E.querySelectorAll(Ir(v.progressbarFillClass)).forEach((F) => {
            (F.style.transform = `translate3d(0,0,0) scaleX(${I}) scaleY(${R})`),
              (F.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      v.type === "custom" && v.renderCustom
        ? ((E.innerHTML = v.renderCustom(e, x + 1, P)),
          A === 0 && r("paginationRender", E))
        : (A === 0 && r("paginationRender", E), r("paginationUpdate", E)),
        e.params.watchOverflow &&
          e.enabled &&
          E.classList[e.isLocked ? "add" : "remove"](v.lockClass);
    });
  }
  function p() {
    const h = e.params.pagination;
    if (u()) return;
    const v =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.slides.length;
    let w = e.pagination.el;
    w = l(w);
    let x = "";
    if (h.type === "bullets") {
      let k = e.params.loop
        ? Math.ceil(v / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && k > v && (k = v);
      for (let S = 0; S < k; S += 1)
        h.renderBullet
          ? (x += h.renderBullet.call(e, S, h.bulletClass))
          : (x += `<${h.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${h.bulletClass}"></${h.bulletElement}>`);
    }
    h.type === "fraction" &&
      (h.renderFraction
        ? (x = h.renderFraction.call(e, h.currentClass, h.totalClass))
        : (x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
      h.type === "progressbar" &&
        (h.renderProgressbar
          ? (x = h.renderProgressbar.call(e, h.progressbarFillClass))
          : (x = `<span class="${h.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      w.forEach((k) => {
        h.type !== "custom" && (k.innerHTML = x || ""),
          h.type === "bullets" &&
            e.pagination.bullets.push(...k.querySelectorAll(Ir(h.bulletClass)));
      }),
      h.type !== "custom" && r("paginationRender", w[0]);
  }
  function g() {
    e.params.pagination = fy(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" },
    );
    const h = e.params.pagination;
    if (!h.el) return;
    let v;
    typeof h.el == "string" && e.isElement && (v = e.el.querySelector(h.el)),
      !v &&
        typeof h.el == "string" &&
        (v = [...document.querySelectorAll(h.el)]),
      v || (v = h.el),
      !(!v || v.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof h.el == "string" &&
          Array.isArray(v) &&
          v.length > 1 &&
          ((v = [...e.el.querySelectorAll(h.el)]),
          v.length > 1 &&
            (v = v.filter((w) => Jg(w, ".swiper")[0] === e.el)[0])),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(e.pagination, { el: v }),
        (v = l(v)),
        v.forEach((w) => {
          h.type === "bullets" &&
            h.clickable &&
            w.classList.add(h.clickableClass),
            w.classList.add(h.modifierClass + h.type),
            w.classList.add(
              e.isHorizontal() ? h.horizontalClass : h.verticalClass,
            ),
            h.type === "bullets" &&
              h.dynamicBullets &&
              (w.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (a = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" &&
              h.progressbarOpposite &&
              w.classList.add(h.progressbarOppositeClass),
            h.clickable && w.addEventListener("click", d),
            e.enabled || w.classList.add(h.lockClass);
        }));
  }
  function m() {
    const h = e.params.pagination;
    if (u()) return;
    let v = e.pagination.el;
    v &&
      ((v = l(v)),
      v.forEach((w) => {
        w.classList.remove(h.hiddenClass),
          w.classList.remove(h.modifierClass + h.type),
          w.classList.remove(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass,
          ),
          h.clickable && w.removeEventListener("click", d);
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((w) =>
          w.classList.remove(...h.bulletActiveClass.split(" ")),
        );
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const h = e.params.pagination;
    let { el: v } = e.pagination;
    (v = l(v)),
      v.forEach((w) => {
        w.classList.remove(h.horizontalClass, h.verticalClass),
          w.classList.add(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass,
          );
      });
  }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? y() : (g(), p(), f());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && f();
    }),
    i("snapIndexChange", () => {
      f();
    }),
    i("snapGridLengthChange", () => {
      p(), f();
    }),
    i("destroy", () => {
      m();
    }),
    i("enable disable", () => {
      let { el: h } = e.pagination;
      h &&
        ((h = l(h)),
        h.forEach((v) =>
          v.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass,
          ),
        ));
    }),
    i("lock unlock", () => {
      f();
    }),
    i("click", (h, v) => {
      const w = v.target,
        x = l(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !w.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && w === e.navigation.nextEl) ||
            (e.navigation.prevEl && w === e.navigation.prevEl))
        )
          return;
        const k = x[0].classList.contains(e.params.pagination.hiddenClass);
        r(k === !0 ? "paginationShow" : "paginationHide"),
          x.forEach((S) => S.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: h } = e.pagination;
      h &&
        ((h = l(h)),
        h.forEach((v) =>
          v.classList.remove(e.params.pagination.paginationDisabledClass),
        )),
        g(),
        p(),
        f();
    },
    y = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: h } = e.pagination;
      h &&
        ((h = l(h)),
        h.forEach((v) =>
          v.classList.add(e.params.pagination.paginationDisabledClass),
        )),
        m();
    };
  Object.assign(e.pagination, {
    enable: b,
    disable: y,
    render: p,
    update: f,
    init: g,
    destroy: m,
  });
}
function G_(t) {
  let { swiper: e, extendParams: n, on: i, emit: r, params: s } = t;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    c,
    d = new Date().getTime,
    f,
    p,
    g,
    m,
    b,
    y;
  function h(q) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (q.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", h), E()));
  }
  const v = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (f = !0) : f && ((u = c), (f = !1));
      const q = e.autoplay.paused ? c : d + u - new Date().getTime();
      (e.autoplay.timeLeft = q),
        r("autoplayTimeLeft", q, q / l),
        (a = requestAnimationFrame(() => {
          v();
        }));
    },
    w = () => {
      let q;
      return (
        e.virtual && e.params.virtual.enabled
          ? (q = e.slides.filter((M) =>
              M.classList.contains("swiper-slide-active"),
            )[0])
          : (q = e.slides[e.activeIndex]),
        q ? parseInt(q.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    x = (q) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), v();
      let L = typeof q > "u" ? e.params.autoplay.delay : q;
      (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const M = w();
      !Number.isNaN(M) &&
        M > 0 &&
        typeof q > "u" &&
        ((L = M), (l = M), (u = M)),
        (c = L);
      const O = e.params.speed,
        B = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(O, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, O, !0, !0), r("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(O, !0, !0), r("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, O, !0, !0), r("autoplay")),
            e.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        L > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              B();
            }, L)))
          : requestAnimationFrame(() => {
              B();
            }),
        L
      );
    },
    k = () => {
      (e.autoplay.running = !0), x(), r("autoplayStart");
    },
    S = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        r("autoplayStop");
    },
    P = (q, L) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), q || (y = !0);
      const M = () => {
        r("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", h)
            : E();
      };
      if (((e.autoplay.paused = !0), L)) {
        b && (c = e.params.autoplay.delay), (b = !1), M();
        return;
      }
      (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), M());
    },
    E = () => {
      (e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((d = new Date().getTime()),
        y ? ((y = !1), x(c)) : x(),
        (e.autoplay.paused = !1),
        r("autoplayResume"));
    },
    A = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const q = an();
      q.visibilityState === "hidden" && ((y = !0), P(!0)),
        q.visibilityState === "visible" && E();
    },
    _ = (q) => {
      q.pointerType === "mouse" && ((y = !0), P(!0));
    },
    C = (q) => {
      q.pointerType === "mouse" && e.autoplay.paused && E();
    },
    I = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", _),
        e.el.addEventListener("pointerleave", C));
    },
    R = () => {
      e.el.removeEventListener("pointerenter", _),
        e.el.removeEventListener("pointerleave", C);
    },
    F = () => {
      an().addEventListener("visibilitychange", A);
    },
    V = () => {
      an().removeEventListener("visibilitychange", A);
    };
  i("init", () => {
    e.params.autoplay.enabled && (I(), F(), (d = new Date().getTime()), k());
  }),
    i("destroy", () => {
      R(), V(), e.autoplay.running && S();
    }),
    i("beforeTransitionStart", (q, L, M) => {
      e.destroyed ||
        !e.autoplay.running ||
        (M || !e.params.autoplay.disableOnInteraction ? P(!0, !0) : S());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          S();
          return;
        }
        (p = !0),
          (g = !1),
          (y = !1),
          (m = setTimeout(() => {
            (y = !0), (g = !0), P(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !p)) {
        if (
          (clearTimeout(m),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (g = !1), (p = !1);
          return;
        }
        g && e.params.cssMode && E(), (g = !1), (p = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (b = !0);
    }),
    Object.assign(e.autoplay, { start: k, stop: S, pause: P, resume: E });
}
function $d({ isdark: t }) {
  return T.jsxs(K_, {
    id: "Projects",
    isdark: t,
    children: [
      T.jsx(cy, {
        slidesPerView: 1,
        centeredSlides: !0,
        autoplay: { delay: 2500, disableOnInteraction: !0 },
        loop: !0,
        pagination: { clickable: !0 },
        navigation: !0,
        modules: [G_, X_, U_],
        className: "mySwiper",
        children: F5.map((e) =>
          T.jsx(dy, { children: T.jsx(Od, { data: e, isdark: t }) }, e.id),
        ),
      }),
      T.jsx(Ka, { link: "#Contact-me", isdark: t }),
    ],
  });
}
$d.propTypes = { isdark: je.bool };
$d.defaultProps = { isdark: !0 };
const K_ = U.div`
	color: #15023a;
	display: grid;

    * {
        overflow: visible;
        max-width: 80vw;
        max-height: calc(100vh - 70px);
		@media (max-width: 540px) {
		}
    }
	z-index: 1;
	width: 100%;
	height: calc(100vh - 71px);
	background: url('https://user-images.githubusercontent.com/85221003/190643911-5296bdf7-b088-41f7-beff-c3f946a974d4.jpg');
	background-size: contain;
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
		background-size: cover;
		background-repeat: no-repeat;
		* {
			max-width: 100vw;
			max-height: calc(100vh - 56px);
		}
    }
`,
  ks = { _origin: "https://api.emailjs.com" },
  Y_ = (t, e = "https://api.emailjs.com") => {
    (ks._userID = t), (ks._origin = e);
  },
  py = (t, e, n) => {
    if (!t)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!e)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class rh {
  constructor(e) {
    (this.status = e ? e.status : 0),
      (this.text = e ? e.responseText : "Network Error");
  }
}
const hy = (t, e, n = {}) =>
    new Promise((i, r) => {
      const s = new XMLHttpRequest();
      s.addEventListener("load", ({ target: o }) => {
        const a = new rh(o);
        a.status === 200 || a.text === "OK" ? i(a) : r(a);
      }),
        s.addEventListener("error", ({ target: o }) => {
          r(new rh(o));
        }),
        s.open("POST", ks._origin + t, !0),
        Object.keys(n).forEach((o) => {
          s.setRequestHeader(o, n[o]);
        }),
        s.send(e);
    }),
  Q_ = (t, e, n, i) => {
    const r = i || ks._userID;
    return (
      py(r, t, e),
      hy(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: r,
          service_id: t,
          template_id: e,
          template_params: n,
        }),
        { "Content-type": "application/json" },
      )
    );
  },
  Z_ = (t) => {
    let e;
    if (
      (typeof t == "string" ? (e = document.querySelector(t)) : (e = t),
      !e || e.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return e;
  },
  J_ = (t, e, n, i) => {
    const r = i || ks._userID,
      s = Z_(n);
    py(r, t, e);
    const o = new FormData(s);
    return (
      o.append("lib_version", "3.11.0"),
      o.append("service_id", t),
      o.append("template_id", e),
      o.append("user_id", r),
      hy("/api/v1.0/email/send-form", o)
    );
  },
  sh = { init: Y_, send: Q_, sendForm: J_ };
function jd({ isdark: t }) {
  const e = j.useRef(),
    [n, i] = j.useState(localStorage.getItem("M$Ppl3R#3p&Bz994C93t"));
  n === null && i("send");
  const [r, s] = j.useState({
    user_email: localStorage.getItem("VoTshS53jhSV22E^SRo@"),
    message: localStorage.getItem("I#S&hsG02P8Q0i^70!9e"),
  });
  r.user_email === null && r.message === null
    ? s({ user_email: "", message: "" })
    : r.user_email === null
    ? s({ ...r, user_email: "" })
    : r.message === null && s({ ...r, message: "" });
  const o = (l) => {
      const { name: u, value: c } = l.target;
      s({ ...r, [u]: c }),
        u === "user_email"
          ? localStorage.setItem("VoTshS53jhSV22E^SRo@", c)
          : localStorage.setItem("I#S&hsG02P8Q0i^70!9e", c);
    },
    a = (l) => {
      l.preventDefault(),
        n === "send"
          ? (i("sending"),
            localStorage.setItem("M$Ppl3R#3p&Bz994C93t", "sending"),
            sh
              .sendForm(
                "service_hvc5w18",
                "template_kl9awzw",
                e.current,
                "_s8CAk2YdEw7gn7U3",
              )
              .then(
                () => {
                  i("sent"),
                    localStorage.setItem("M$Ppl3R#3p&Bz994C93t", "sent"),
                    localStorage.removeItem("VoTshS53jhSV22E^SRo@"),
                    localStorage.removeItem("I#S&hsG02P8Q0i^70!9e");
                },
                (u) => {
                  u.text === null || u.text,
                    i("try again"),
                    localStorage.removeItem("M$Ppl3R#3p&Bz994C93t"),
                    console.error(u.text);
                },
              ),
            sh
              .sendForm(
                "service_hvc5w18",
                "template_fdnv60h",
                e.current,
                "_s8CAk2YdEw7gn7U3",
              )
              .then(
                () => {},
                (u) => {
                  console.error(u.text);
                },
              ))
          : n === "try again" && i("send");
    };
  return T.jsxs(e3, {
    isdark: t,
    id: "Contact-me",
    children: [
      T.jsx(t3, { "data-aos": "zoom-in-right", children: T.jsx(C5, {}) }),
      T.jsxs(n3, {
        "data-aos": "zoom-in-left",
        children: [
          T.jsx(r3, { "data-aos": "zoom-in-down", children: "Contact" }),
          T.jsxs(i3, {
            ref: e,
            onSubmit: a,
            isdark: t,
            children: [
              (n === "send" &&
                T.jsxs(T.Fragment, {
                  children: [
                    T.jsxs(s3, {
                      "data-aos": "zoom-out",
                      isdark: t,
                      children: [
                        T.jsx("span", {}),
                        T.jsx(o3, {
                          type: "email",
                          name: "user_email",
                          value: r.user_email,
                          onChange: o,
                          placeholder: "Enter your Email Address",
                          required: !0,
                        }),
                        T.jsx("span", {}),
                      ],
                    }),
                    T.jsxs(a3, {
                      "data-aos": "zoom-in",
                      isdark: t,
                      children: [
                        T.jsx("span", {}),
                        T.jsx(c3, {
                          children: T.jsx(l3, {
                            name: "message",
                            required: !0,
                            value: r.message,
                            onChange: o,
                            isdark: t,
                          }),
                        }),
                        T.jsx("span", {}),
                      ],
                    }),
                  ],
                })) ||
                (n === "sent" &&
                  T.jsx(oh, {
                    src: "https://user-images.githubusercontent.com/85221003/190645104-c36be8f1-3721-4155-897d-2715be9a3972.png",
                  })) ||
                (n === "sending" && T.jsx(fr, { text: "sending" })) ||
                (n === "try again" &&
                  T.jsx(oh, {
                    src: "https://user-images.githubusercontent.com/85221003/190645213-d4c57ad1-c85b-4516-8cac-ea3b6fbb544e.png",
                  })),
              T.jsx(u3, {
                children: T.jsxs(d3, {
                  "data-aos": "zoom-out-up",
                  id: "submit",
                  className:
                    n === "sending"
                      ? "clicked"
                      : n === "try again"
                      ? "error"
                      : n === "sent"
                      ? "sent"
                      : "",
                  children: [
                    n,
                    T.jsx("svg", {
                      version: "1.1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      enableBackground: "new 0 0 512 512",
                      children: T.jsx("path", {
                        id: "paper-plane-icon",
                        d: `M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z\r
M202.992,332.528v124.517l58.738-67.927L202.992,332.528z`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
jd.propTypes = { isdark: je.bool };
jd.defaultProps = { isdark: !0 };
const e3 = U.div`
	display: grid;
    width: 100%;
    height: calc(100vh - 70px);
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
	justify-content: space-around;
	z-index: 1;
	grid-template-columns: auto auto;
	align-items: center;
    @media (max-width: 1023px) {
        grid-template-columns: 1fr;
    }
	position: relative;
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23,0.5)" : "rgba(255, 255, 255, 0.69)"};
    /* background: rgba(2, 12, 23, 0.5); */
`,
  t3 = U.div`
	display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
	@media (max-width: 1023px) {
        display: none;
    }
`,
  n3 = U.div`
	display: grid;
    width: 100%;
    height: fit-content;
    align-items: center;
	justify-content: center;
`,
  i3 = U.form`
	display: grid;
	min-height: 66vh;
    width: 100%;
    height: fit-content;
    align-items: center;
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
`,
  r3 = U.h1`
	/* width: 100%; */
	/* text-align: center; */
	display: block;
    font-size: 42px;
    font-family: 'Pacifico', cursive;
    font-weight: 500;
    display: block;
    color: #00c4cc;
    &::after {
		font-family: Poppins;
        content: " Me";
        font-weight: 600;
        color: #5cb6f9
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
    margin: 0 auto;
`,
  s3 = U.div`
	display: grid;
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23, 0.69)" : "rgba(255, 255, 255, 0.69)"};
    border-radius: 10px;
    height: max-content;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: linear-gradient(to right, #185a9d, #00c4cc)
`,
  o3 = U.input`
	display: grid;
    margin: 12px 16px;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 16px;
    font-weight: 500;
    width: 360px;
    /* text-transform: lowercase; */
    @media (max-width: 1023px) {
        width: 80vw;
    }
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    height: max-content;
`,
  a3 = U.div`
	display: grid;
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23, 0.69)" : "rgba(255, 255, 255, 0.69)"};
    height: max-content;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: linear-gradient(to right, #5cb6f9, #00c4cc, #185a9d)
`,
  l3 = U.textarea`
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23, 0.84)" : "rgba(255, 255, 255, 0.69)"};
    outline: none;
	display: grid;
    border: none;
    margin: 12px 16px;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 16px;
    font-weight: 500;
    width: 360px;
    @media (max-width: 1023px) {
        width: 80vw;
    }
    height: 240px;
    resize: none;
    overflow: scroll;
`,
  u3 = U.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	* {
		overflow: visible;
	}
`,
  c3 = U.div`
    background: url('https://user-images.githubusercontent.com/85221003/190644292-f8584039-a1df-455d-8905-e1c5eb6b04e7.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
	display: grid;
`,
  d3 = U.button`
    font-size: 24px;
    font-family: 'Pacifico';
    letter-spacing: 1.2px;
    text-transform: capitalize;
    border-radius: 50px;
    position: relative;
    padding-right: 30px;
    background-color: #ECFBFF;
    border: 2px solid #A6E0EE;
    color: #5cb6f9;
    height: fit-content;
    min-width: 180px;
    cursor: pointer;
    &:hover {
		background-color: #5cb6f9;
		color: #fff;
		svg {
			transform: rotate(10deg);
			transition: transform .15s;
			path {
				fill: #fff;
			}
		}
    }
    
    svg {
		position: absolute;
		top: 6px;
		right: 25px;
		height: 32px;
		width: auto;
		transition: transform .15s;
		path {
			fill: #5cb6f9;
		}
    }
    &.sent {
        background-color: #00b3e7;
        color: #fff;
        min-width: 160px;
        cursor: none;
        padding-right: 6px;
        svg {
            display: none;
        }
    }
    &.error {
        min-width: 220px;
        height: 60px;
        background-color: #e21b1b;
        color: #fff;
        svg {
            path {
                fill: #fff;
            }
        }
    }
    &.clicked {
		background-color: #00c4cc;
		border: 2px solid #cff5b3;
		color: #fff;
		padding-right: 6px;
		animation: bounce-in .3s;
		cursor: none;
		min-width: 220px;
		height: 60px;
		&::after {
			content: '...'
		}
		svg {
			animation: flyaway 1.3s linear;
			top: -80px;
			right: -1000px;
			path {
				fill: #00c4cc;
			}
		}
    }
`,
  oh = U.img`
    width: 320px;
	display: grid;
`;
var Fd = {},
  f3 = $a;
Object.defineProperty(Fd, "__esModule", { value: !0 });
var my = (Fd.default = void 0),
  p3 = f3(Ga()),
  h3 = T,
  m3 = (0, p3.default)(
    (0, h3.jsx)("path", {
      d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
    }),
    "Call",
  );
my = Fd.default = m3;
var Nd = {},
  g3 = $a;
Object.defineProperty(Nd, "__esModule", { value: !0 });
var gy = (Nd.default = void 0),
  y3 = g3(Ga()),
  v3 = T,
  w3 = (0, y3.default)(
    (0, v3.jsx)("path", {
      d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
    }),
    "Email",
  );
gy = Nd.default = w3;
var Bd = {},
  b3 = $a;
Object.defineProperty(Bd, "__esModule", { value: !0 });
var yy = (Bd.default = void 0),
  x3 = b3(Ga()),
  S3 = T,
  k3 = (0, x3.default)(
    (0, S3.jsx)("path", { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }),
    "Download",
  );
yy = Bd.default = k3;
const Pn = {
  email: "HarshR4jGupta@gmail.com",
  number: "+917607642202",
  resume:
    "https://drive.google.com/file/d/1Ajxq0J7MF7ySTEbG03mCYT41fG3_4xap/view?usp=drive_link",
};
function Hd({ menuOpen: t, setMenuOpen: e, isdark: n, setDark: i }) {
  return T.jsxs(z3, {
    className: !t && "active",
    isdark: n,
    children: [
      T.jsx(Md, { show: t, isdark: n, setDark: i }),
      T.jsxs(_3, {
        children: [
          T.jsxs(C3, {
            children: [
              T.jsx(E3, { isdark: n, children: "harsh." }),
              T.jsx(Gg, { setDark: i, isdark: n }),
              T.jsxs(Wl, {
                children: [
                  T.jsx(my, {
                    className: "icon",
                    onClick: () => {
                      navigator.clipboard.writeText(Pn.number),
                        alert("Mobile Number has been copied on the clipboard");
                    },
                  }),
                  T.jsx(Vl, {
                    onClick: () => {
                      navigator.clipboard.writeText(Pn.number),
                        alert("Mobile Number has been copied on the clipboard");
                    },
                    children: Pn.number,
                  }),
                ],
              }),
              T.jsxs(Wl, {
                children: [
                  T.jsx(gy, {
                    className: "icon",
                    onClick: () => {
                      navigator.clipboard.writeText(Pn.email),
                        alert("Email id has been copied on the clipboard");
                    },
                  }),
                  T.jsx(Vl, {
                    onClick: () => {
                      navigator.clipboard.writeText(Pn.email),
                        alert("Email id has been copied on the clipboard");
                    },
                    children: Pn.email,
                  }),
                ],
              }),
              T.jsxs(Wl, {
                children: [
                  T.jsx(yy, {
                    className: "icon",
                    onClick: () => window.open(Pn.resume),
                  }),
                  T.jsx(Vl, {
                    onClick: () => window.open(Pn.resume),
                    children: "Resume",
                  }),
                ],
              }),
            ],
          }),
          T.jsx(P3, {
            children: T.jsxs(T3, {
              onClick: () => e(!t),
              className: t && "active",
              isdark: n,
              children: [
                T.jsx("span", {}),
                T.jsx("span", {}),
                T.jsx("span", {}),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
Hd.propTypes = {
  menuOpen: je.bool,
  setMenuOpen: je.func,
  isdark: je.bool,
  setDark: je.func,
};
Hd.defaultProps = {
  menuOpen: !1,
  setMenuOpen: () => {},
  isdark: !1,
  setDark: () => {},
};
const _3 = U.div`
	display: grid;
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`,
  C3 = U.div`
	display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    grid-gap: 70px;
    @media (max-width: 1280px) {
        grid-gap: 16px;
    }
	width: max-content;
`,
  E3 = U.h1`
    font-size: 42px;
    font-weight: 600;
    text-decoration: none;
	margin: 0 auto;
    font-family: Poppins;
    @media (max-width: 540px) {
        font-size: 24px;
    }
	@media (max-width: 414px) {
        font-size: 21px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
	cursor: pointer;
	/* color: ${({ isdark: t }) => (t ? "#00c4cc" : "rgba(2, 12, 23, 0.9)")}; */
`,
  Wl = U.div`
	display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    align-items: center;
    cursor: default;
	@media (max-width: 1280px) {
        display: none;
    }
	.icon {
		width: 24px;
		@media (max-width: 414px) {
			width: 20px;
		}
		@media (max-width: 300px) {
			width: 16px;
		}
	}
	/* transition: all 250ms ease-in-out !important; */
	&:hover {
		color: #00c4cc;
	}
`,
  Vl = U.div`
    font-family: Poppins;
    font-size: 14px;
	@media (max-width: 414px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
    font-weight: 500;
	cursor: pointer;
	@media (max-width: 1280px) {
        display: none;
    }
`,
  P3 = U.div``,
  T3 = U.div`
	display: grid;
    width: 24px;
	@media (max-width: 414px) {
		width: 20px;
	}
    grid-gap: 1.4px;
    height: 18px;
	@media (max-width: 414px) {
		height: 16px;
	}
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    span {
        width: 100%;
        height: 2.5px;
		@media (max-width: 414px) {
			height: 2px;
		}
        background-color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
		/* background-color: #00c4cc; */
        transform-origin: right;
        transition: transform 1s ease;
        border-radius: 256px;
    }
    &.active {
        height: 32px; 
        grid-gap: 1px; 
        span { 
            &:first-child { 
                /* background-color: #fff;  */
                transform: rotate(-45deg);
            } 
            &:nth-child(2) {
                display: none;
            } 
            &:last-child {
                /* background-color: #fff;  */
                transform: rotate(45deg);
            }
        }
    }
`,
  z3 = U.div`
    width: 100vw;
    height: 70px;
    position: fixed; 
    top: 0;
    z-index: 2;
    transform: width 0s, height 0s;
	background: ${({ isdark: t }) =>
    t ? "rgba(2, 12, 23,0.5)" : "rgba(255, 255, 255, 0.1)"};
	/* color: ${({ isdark: t }) => (t ? "#5cb6f9" : "#15023a")}; */
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
    @media (max-width: 540px) {
        height: 56px;
    }
`;
class A3 {
  constructor() {
    this._listeners = new Map();
  }
  addEventListener(e, n) {
    this.removeEventListener(e, n);
    let i = this._listeners.get(e);
    i || ((i = []), this._listeners.set(e, i)), i.push(n);
  }
  dispatchEvent(e, n) {
    const i = this._listeners.get(e);
    i && i.forEach((r) => r(n));
  }
  hasEventListener(e) {
    return !!this._listeners.get(e);
  }
  removeAllEventListeners(e) {
    e ? this._listeners.delete(e) : (this._listeners = new Map());
  }
  removeEventListener(e, n) {
    const i = this._listeners.get(e);
    if (!i) return;
    const r = i.length,
      s = i.indexOf(n);
    s < 0 || (r === 1 ? this._listeners.delete(e) : i.splice(s, 1));
  }
}
const Zr = "generated",
  M3 = "pointerdown",
  O3 = "pointerup",
  hc = "pointerleave",
  I3 = "pointerout",
  yi = "pointermove",
  R3 = "touchstart",
  ah = "touchend",
  L3 = "touchmove",
  D3 = "touchcancel",
  $3 = "resize",
  j3 = "visibilitychange",
  qt = "tsParticles - Error";
class mt {
  constructor(e, n, i) {
    if (
      ((this._updateFromAngle = (r, s) => {
        (this.x = Math.cos(r) * s), (this.y = Math.sin(r) * s);
      }),
      typeof e != "number" && e)
    ) {
      (this.x = e.x), (this.y = e.y);
      const r = e;
      this.z = r.z ? r.z : 0;
    } else if (e !== void 0 && n !== void 0)
      (this.x = e), (this.y = n), (this.z = i ?? 0);
    else throw new Error(`${qt} Vector3d not initialized correctly`);
  }
  static get origin() {
    return mt.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(e) {
    this._updateFromAngle(e, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(e) {
    this._updateFromAngle(this.angle, e);
  }
  static clone(e) {
    return mt.create(e.x, e.y, e.z);
  }
  static create(e, n, i) {
    return new mt(e, n, i);
  }
  add(e) {
    return mt.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    (this.x += e.x), (this.y += e.y), (this.z += e.z);
  }
  copy() {
    return mt.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return mt.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    (this.x /= e), (this.y /= e), (this.z /= e);
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(e) {
    return mt.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    (this.x *= e), (this.y *= e), (this.z *= e);
  }
  rotate(e) {
    return mt.create(
      this.x * Math.cos(e) - this.y * Math.sin(e),
      this.x * Math.sin(e) + this.y * Math.cos(e),
      0,
    );
  }
  setTo(e) {
    (this.x = e.x), (this.y = e.y);
    const n = e;
    this.z = n.z ? n.z : 0;
  }
  sub(e) {
    return mt.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    (this.x -= e.x), (this.y -= e.y), (this.z -= e.z);
  }
}
class fe extends mt {
  constructor(e, n) {
    super(e, n, 0);
  }
  static get origin() {
    return fe.create(0, 0);
  }
  static clone(e) {
    return fe.create(e.x, e.y);
  }
  static create(e, n) {
    return new fe(e, n);
  }
}
let F3 = Math.random;
const N3 = new Map();
function vy(t) {
  return N3.get(t) || ((e) => e);
}
function K() {
  return Ut(F3(), 0, 1 - 1e-16);
}
function Ut(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function ql(t, e, n, i) {
  return Math.floor((t * n + e * i) / (n + i));
}
function Be(t) {
  const e = jn(t);
  let n = Wd(t);
  return e === n && (n = 0), K() * (e - n) + n;
}
function N(t) {
  return typeof t == "number" ? t : Be(t);
}
function Wd(t) {
  return typeof t == "number" ? t : t.min;
}
function jn(t) {
  return typeof t == "number" ? t : t.max;
}
function X(t, e) {
  if (t === e || (e === void 0 && typeof t == "number")) return t;
  const n = Wd(t),
    i = jn(t);
  return e !== void 0 ? { min: Math.min(n, e), max: Math.max(i, e) } : X(n, i);
}
function kn(t) {
  const e = t.random,
    { enable: n, minimumValue: i } =
      typeof e == "boolean" ? { enable: e, minimumValue: 0 } : e;
  return N(n ? X(t.value, i) : t.value);
}
function Je(t, e) {
  const n = t.x - e.x,
    i = t.y - e.y;
  return { dx: n, dy: i, distance: Math.sqrt(n ** 2 + i ** 2) };
}
function it(t, e) {
  return Je(t, e).distance;
}
function B3(t, e, n) {
  if (typeof t == "number") return (t * Math.PI) / 180;
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
      return Math.atan2(n.y - e.y, n.x - e.x);
    case "outside":
      return Math.atan2(e.y - n.y, e.x - n.x);
    default:
      return K() * Math.PI * 2;
  }
}
function H3(t) {
  const e = fe.origin;
  return (e.length = 1), (e.angle = t), e;
}
function lh(t, e, n, i) {
  return fe.create((t.x * (n - i)) / (n + i) + (e.x * 2 * i) / (n + i), t.y);
}
function W3(t) {
  return t.position && t.position.x !== void 0 && t.position.y !== void 0
    ? {
        x: (t.position.x * t.size.width) / 100,
        y: (t.position.y * t.size.height) / 100,
      }
    : void 0;
}
function wy(t) {
  var e, n;
  return {
    x:
      ((((e = t.position) == null ? void 0 : e.x) ?? K() * 100) *
        t.size.width) /
      100,
    y:
      ((((n = t.position) == null ? void 0 : n.y) ?? K() * 100) *
        t.size.height) /
      100,
  };
}
function by(t) {
  var n, i;
  const e = {
    x:
      ((n = t.position) == null ? void 0 : n.x) !== void 0
        ? N(t.position.x)
        : void 0,
    y:
      ((i = t.position) == null ? void 0 : i.y) !== void 0
        ? N(t.position.y)
        : void 0,
  };
  return wy({ size: t.size, position: e });
}
function V3(t) {
  var e, n;
  return {
    x: ((e = t.position) == null ? void 0 : e.x) ?? K() * t.size.width,
    y: ((n = t.position) == null ? void 0 : n.y) ?? K() * t.size.height,
  };
}
function xy(t) {
  return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
}
function uh(t) {
  const e = { bounced: !1 },
    {
      pSide: n,
      pOtherSide: i,
      rectSide: r,
      rectOtherSide: s,
      velocity: o,
      factor: a,
    } = t;
  return (
    i.min < s.min ||
      i.min > s.max ||
      i.max < s.min ||
      i.max > s.max ||
      (((n.max >= r.min && n.max <= (r.max + r.min) / 2 && o > 0) ||
        (n.min <= r.max && n.min > (r.max + r.min) / 2 && o < 0)) &&
        ((e.velocity = o * -a), (e.bounced = !0))),
    e
  );
}
function q3(t, e) {
  const n = ve(e, (i) => t.matches(i));
  return n instanceof Array ? n.some((i) => i) : n;
}
function Kn() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function U3() {
  return !Kn() && typeof matchMedia < "u";
}
function Sy(t) {
  if (U3()) return matchMedia(t);
}
function X3() {
  return Kn()
    ? (t) => setTimeout(t)
    : (t) => (requestAnimationFrame || setTimeout)(t);
}
function G3() {
  return Kn()
    ? (t) => clearTimeout(t)
    : (t) => (cancelAnimationFrame || clearTimeout)(t);
}
function ye(t, e) {
  return t === e || (e instanceof Array && e.indexOf(t) > -1);
}
async function K3(t, e) {
  try {
    await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
  } catch {}
}
function ky(t) {
  return Math.floor(K() * t.length);
}
function Rs(t, e, n = !0) {
  return t[e !== void 0 && n ? e % t.length : ky(t)];
}
function Ls(t, e, n, i, r) {
  return Y3(Ds(t, i ?? 0), e, n, r);
}
function Y3(t, e, n, i) {
  let r = !0;
  return (
    (!i || i === "bottom") && (r = t.top < e.height + n.x),
    r && (!i || i === "left") && (r = t.right > n.x),
    r && (!i || i === "right") && (r = t.left < e.width + n.y),
    r && (!i || i === "top") && (r = t.bottom > n.y),
    r
  );
}
function Ds(t, e) {
  return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
}
function Oe(t, ...e) {
  for (const n of e) {
    if (n == null) continue;
    if (typeof n != "object") {
      t = n;
      continue;
    }
    const i = Array.isArray(n);
    i && (typeof t != "object" || !t || !Array.isArray(t))
      ? (t = [])
      : !i && (typeof t != "object" || !t || Array.isArray(t)) && (t = {});
    for (const r in n) {
      if (r === "__proto__") continue;
      const s = n,
        o = s[r],
        a = typeof o == "object",
        l = t;
      l[r] = a && Array.isArray(o) ? o.map((u) => Oe(l[r], u)) : Oe(l[r], o);
    }
  }
  return t;
}
function Vd(t, e) {
  return !!Ey(e, (n) => n.enable && ye(t, n.mode));
}
function qd(t, e, n) {
  ve(e, (i) => {
    const r = i.mode;
    i.enable && ye(t, r) && Q3(i, n);
  });
}
function Q3(t, e) {
  const n = t.selectors;
  ve(n, (i) => {
    e(i, t);
  });
}
function _y(t, e) {
  if (!(!e || !t)) return Ey(t, (n) => q3(e, n.selectors));
}
function mc(t) {
  return {
    position: t.getPosition(),
    radius: t.getRadius(),
    mass: t.getMass(),
    velocity: t.velocity,
    factor: fe.create(
      kn(t.options.bounce.horizontal),
      kn(t.options.bounce.vertical),
    ),
  };
}
function Cy(t, e) {
  const { x: n, y: i } = t.velocity.sub(e.velocity),
    [r, s] = [t.position, e.position],
    { dx: o, dy: a } = Je(s, r);
  if (n * o + i * a < 0) return;
  const l = -Math.atan2(a, o),
    u = t.mass,
    c = e.mass,
    d = t.velocity.rotate(l),
    f = e.velocity.rotate(l),
    p = lh(d, f, u, c),
    g = lh(f, d, u, c),
    m = p.rotate(-l),
    b = g.rotate(-l);
  (t.velocity.x = m.x * t.factor.x),
    (t.velocity.y = m.y * t.factor.y),
    (e.velocity.x = b.x * e.factor.x),
    (e.velocity.y = b.y * e.factor.y);
}
function Z3(t, e) {
  const n = t.getPosition(),
    i = t.getRadius(),
    r = Ds(n, i),
    s = uh({
      pSide: { min: r.left, max: r.right },
      pOtherSide: { min: r.top, max: r.bottom },
      rectSide: { min: e.left, max: e.right },
      rectOtherSide: { min: e.top, max: e.bottom },
      velocity: t.velocity.x,
      factor: kn(t.options.bounce.horizontal),
    });
  s.bounced &&
    (s.velocity !== void 0 && (t.velocity.x = s.velocity),
    s.position !== void 0 && (t.position.x = s.position));
  const o = uh({
    pSide: { min: r.top, max: r.bottom },
    pOtherSide: { min: r.left, max: r.right },
    rectSide: { min: e.top, max: e.bottom },
    rectOtherSide: { min: e.left, max: e.right },
    velocity: t.velocity.y,
    factor: kn(t.options.bounce.vertical),
  });
  o.bounced &&
    (o.velocity !== void 0 && (t.velocity.y = o.velocity),
    o.position !== void 0 && (t.position.y = o.position));
}
function ve(t, e) {
  return t instanceof Array ? t.map((n, i) => e(n, i)) : e(t, 0);
}
function St(t, e, n) {
  return t instanceof Array ? Rs(t, e, n) : t;
}
function Ey(t, e) {
  return t instanceof Array ? t.find((n, i) => e(n, i)) : e(t, 0) ? t : void 0;
}
function Py(t, e) {
  const n = t.value,
    i = t.animation,
    r = {
      delayTime: N(i.delay) * 1e3,
      enable: i.enable,
      value: N(t.value) * e,
      max: jn(n) * e,
      min: Wd(n) * e,
      loops: 0,
      maxLoops: N(i.count),
      time: 0,
    };
  if (i.enable) {
    switch (((r.decay = 1 - N(i.decay)), i.mode)) {
      case "increase":
        r.status = "increasing";
        break;
      case "decrease":
        r.status = "decreasing";
        break;
      case "random":
        r.status = K() >= 0.5 ? "increasing" : "decreasing";
        break;
    }
    const s = i.mode === "auto";
    switch (i.startValue) {
      case "min":
        (r.value = r.min), s && (r.status = "increasing");
        break;
      case "max":
        (r.value = r.max), s && (r.status = "decreasing");
        break;
      case "random":
      default:
        (r.value = Be(r)),
          s && (r.status = K() >= 0.5 ? "increasing" : "decreasing");
        break;
    }
  }
  return (r.initialValue = r.value), r;
}
const fa = "random",
  Mo = "mid",
  Ya = new Map();
function Ty(t) {
  Ya.set(t.key, t);
}
function Ul(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  );
}
function J3(t) {
  for (const [, s] of Ya)
    if (t.startsWith(s.stringPrefix)) return s.parseString(t);
  const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    n = t.replace(
      e,
      (s, o, a, l, u) => o + o + a + a + l + l + (u !== void 0 ? u + u : ""),
    ),
    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    r = i.exec(n);
  return r
    ? {
        a: r[4] !== void 0 ? parseInt(r[4], 16) / 255 : 1,
        b: parseInt(r[3], 16),
        g: parseInt(r[2], 16),
        r: parseInt(r[1], 16),
      }
    : void 0;
}
function Ot(t, e, n = !0) {
  if (!t) return;
  const i = typeof t == "string" ? { value: t } : t;
  if (typeof i.value == "string") return zy(i.value, e, n);
  if (i.value instanceof Array) return Ot({ value: Rs(i.value, e, n) });
  for (const [, r] of Ya) {
    const s = r.handleRangeColor(i);
    if (s) return s;
  }
}
function zy(t, e, n = !0) {
  if (!t) return;
  const i = typeof t == "string" ? { value: t } : t;
  if (typeof i.value == "string") return i.value === fa ? My() : e4(i.value);
  if (i.value instanceof Array) return zy({ value: Rs(i.value, e, n) });
  for (const [, r] of Ya) {
    const s = r.handleColor(i);
    if (s) return s;
  }
}
function Yn(t, e, n = !0) {
  const i = Ot(t, e, n);
  return i ? Ay(i) : void 0;
}
function Ay(t) {
  const e = t.r / 255,
    n = t.g / 255,
    i = t.b / 255,
    r = Math.max(e, n, i),
    s = Math.min(e, n, i),
    o = { h: 0, l: (r + s) / 2, s: 0 };
  return (
    r !== s &&
      ((o.s = o.l < 0.5 ? (r - s) / (r + s) : (r - s) / (2 - r - s)),
      (o.h =
        e === r
          ? (n - i) / (r - s)
          : (o.h = n === r ? 2 + (i - e) / (r - s) : 4 + (e - n) / (r - s)))),
    (o.l *= 100),
    (o.s *= 100),
    (o.h *= 60),
    o.h < 0 && (o.h += 360),
    o.h >= 360 && (o.h -= 360),
    o
  );
}
function e4(t) {
  return J3(t);
}
function pr(t) {
  const e = { b: 0, g: 0, r: 0 },
    n = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
  if (!n.s) e.r = e.g = e.b = n.l;
  else {
    const i = n.l < 0.5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
      r = 2 * n.l - i;
    (e.r = Ul(r, i, n.h + 1 / 3)),
      (e.g = Ul(r, i, n.h)),
      (e.b = Ul(r, i, n.h - 1 / 3));
  }
  return (
    (e.r = Math.floor(e.r * 255)),
    (e.g = Math.floor(e.g * 255)),
    (e.b = Math.floor(e.b * 255)),
    e
  );
}
function t4(t) {
  const e = pr(t);
  return { a: t.a, b: e.b, g: e.g, r: e.r };
}
function My(t) {
  const e = t ?? 0;
  return {
    b: Math.floor(Be(X(e, 256))),
    g: Math.floor(Be(X(e, 256))),
    r: Math.floor(Be(X(e, 256))),
  };
}
function ln(t, e) {
  return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
}
function hr(t, e) {
  return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
}
function Ud(t, e, n, i) {
  let r = t,
    s = e;
  return (
    r.r === void 0 && (r = pr(t)),
    s.r === void 0 && (s = pr(e)),
    { b: ql(r.b, s.b, n, i), g: ql(r.g, s.g, n, i), r: ql(r.r, s.r, n, i) }
  );
}
function gc(t, e, n) {
  if (n === fa) return My();
  if (n === Mo) {
    const i = t.getFillColor() ?? t.getStrokeColor(),
      r =
        (e == null ? void 0 : e.getFillColor()) ??
        (e == null ? void 0 : e.getStrokeColor());
    if (i && r && e) return Ud(i, r, t.getRadius(), e.getRadius());
    {
      const s = i ?? r;
      if (s) return pr(s);
    }
  } else return n;
}
function Oy(t, e, n) {
  const i = typeof t == "string" ? t : t.value;
  return i === fa
    ? n
      ? Ot({ value: i })
      : e
      ? fa
      : Mo
    : i === Mo
    ? Mo
    : Ot({ value: i });
}
function ch(t) {
  return t !== void 0 ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
}
function Iy(t, e, n) {
  const i = {
    h: { enable: !1, value: t.h },
    s: { enable: !1, value: t.s },
    l: { enable: !1, value: t.l },
  };
  return e && (Xl(i.h, e.h, n), Xl(i.s, e.s, n), Xl(i.l, e.l, n)), i;
}
function Xl(t, e, n) {
  (t.enable = e.enable),
    t.enable
      ? ((t.velocity = (N(e.speed) / 100) * n),
        (t.decay = 1 - N(e.decay)),
        (t.status = "increasing"),
        (t.loops = 0),
        (t.maxLoops = N(e.count)),
        (t.time = 0),
        (t.delayTime = N(e.delay) * 1e3),
        e.sync || ((t.velocity *= K()), (t.value *= K())),
        (t.initialValue = t.value))
      : (t.velocity = 0);
}
function Jr(t, e, n) {
  t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath();
}
function n4(t, e, n, i) {
  t.beginPath(),
    t.moveTo(e.x, e.y),
    t.lineTo(n.x, n.y),
    t.lineTo(i.x, i.y),
    t.closePath();
}
function i4(t, e, n) {
  (t.fillStyle = n ?? "rgba(0,0,0,0)"), t.fillRect(0, 0, e.width, e.height);
}
function r4(t, e, n, i) {
  n &&
    ((t.globalAlpha = i),
    t.drawImage(n, 0, 0, e.width, e.height),
    (t.globalAlpha = 1));
}
function Gl(t, e) {
  t.clearRect(0, 0, e.width, e.height);
}
function s4(t) {
  const {
      container: e,
      context: n,
      particle: i,
      delta: r,
      colorStyles: s,
      backgroundMask: o,
      composite: a,
      radius: l,
      opacity: u,
      shadow: c,
      transform: d,
    } = t,
    f = i.getPosition(),
    p = i.rotation + (i.pathRotation ? i.velocity.angle : 0),
    g = { sin: Math.sin(p), cos: Math.cos(p) },
    m = {
      a: g.cos * (d.a ?? 1),
      b: g.sin * (d.b ?? 1),
      c: -g.sin * (d.c ?? 1),
      d: g.cos * (d.d ?? 1),
    };
  n.setTransform(m.a, m.b, m.c, m.d, f.x, f.y),
    n.beginPath(),
    o && (n.globalCompositeOperation = a);
  const b = i.shadowColor;
  c.enable &&
    b &&
    ((n.shadowBlur = c.blur),
    (n.shadowColor = ln(b)),
    (n.shadowOffsetX = c.offset.x),
    (n.shadowOffsetY = c.offset.y)),
    s.fill && (n.fillStyle = s.fill);
  const y = i.strokeWidth ?? 0;
  (n.lineWidth = y),
    s.stroke && (n.strokeStyle = s.stroke),
    o4(e, n, i, l, u, r),
    y > 0 && n.stroke(),
    i.close && n.closePath(),
    i.fill && n.fill(),
    a4(e, n, i, l, u, r),
    (n.globalCompositeOperation = "source-over"),
    n.setTransform(1, 0, 0, 1, 0, 0);
}
function o4(t, e, n, i, r, s) {
  if (!n.shape) return;
  const o = t.drawers.get(n.shape);
  o && o.draw(e, n, i, r, s, t.retina.pixelRatio);
}
function a4(t, e, n, i, r, s) {
  if (!n.shape) return;
  const o = t.drawers.get(n.shape);
  !o || !o.afterEffect || o.afterEffect(e, n, i, r, s, t.retina.pixelRatio);
}
function l4(t, e, n) {
  e.draw && e.draw(t, n);
}
function u4(t, e, n, i) {
  e.drawParticle && e.drawParticle(t, n, i);
}
function c4(t, e, n) {
  return { h: t.h, s: t.s, l: t.l + (e === "darken" ? -1 : 1) * n };
}
function d4(t, e, n) {
  const i = e[n];
  i !== void 0 && (t[n] = (t[n] ?? 1) * i);
}
class f4 {
  constructor(e) {
    (this.container = e),
      (this._applyPostDrawUpdaters = (n) => {
        for (const i of this._postDrawUpdaters) i.afterDraw && i.afterDraw(n);
      }),
      (this._applyPreDrawUpdaters = (n, i, r, s, o, a) => {
        for (const l of this._preDrawUpdaters) {
          if (l.getColorStyles) {
            const { fill: u, stroke: c } = l.getColorStyles(i, n, r, s);
            u && (o.fill = u), c && (o.stroke = c);
          }
          if (l.getTransformValues) {
            const u = l.getTransformValues(i);
            for (const c in u) d4(a, u, c);
          }
          l.beforeDraw && l.beforeDraw(i);
        }
      }),
      (this._applyResizePlugins = () => {
        for (const n of this._resizePlugins) n.resize && n.resize();
      }),
      (this._getPluginParticleColors = (n) => {
        let i, r;
        for (const s of this._colorPlugins)
          if (
            (!i && s.particleFillColor && (i = Yn(s.particleFillColor(n))),
            !r && s.particleStrokeColor && (r = Yn(s.particleStrokeColor(n))),
            i && r)
          )
            break;
        return [i, r];
      }),
      (this._initCover = () => {
        const n = this.container.actualOptions,
          i = n.backgroundMask.cover,
          r = i.color,
          s = Ot(r);
        if (s) {
          const o = { ...s, a: i.opacity };
          this._coverColorStyle = ln(o, o.a);
        }
      }),
      (this._initStyle = () => {
        const n = this.element,
          i = this.container.actualOptions;
        if (n) {
          this._fullScreen
            ? ((this._originalStyle = Oe({}, n.style)),
              this._setFullScreenStyle())
            : this._resetOriginalStyle();
          for (const r in i.style) {
            if (!r || !i.style) continue;
            const s = i.style[r];
            s && n.style.setProperty(r, s, "important");
          }
        }
      }),
      (this._initTrail = async () => {
        const n = this.container.actualOptions,
          i = n.particles.move.trail,
          r = i.fill;
        if (i.enable)
          if (r.color) {
            const s = Ot(r.color);
            if (!s) return;
            const o = n.particles.move.trail;
            this._trailFill = { color: { ...s }, opacity: 1 / o.length };
          } else
            await new Promise((s, o) => {
              if (!r.image) return;
              const a = document.createElement("img");
              a.addEventListener("load", () => {
                (this._trailFill = { image: a, opacity: 1 / i.length }), s();
              }),
                a.addEventListener("error", (l) => {
                  o(l.error);
                }),
                (a.src = r.image);
            });
      }),
      (this._paintBase = (n) => {
        this.draw((i) => i4(i, this.size, n));
      }),
      (this._paintImage = (n, i) => {
        this.draw((r) => r4(r, this.size, n, i));
      }),
      (this._repairStyle = () => {
        const n = this.element;
        n &&
          (this._safeMutationObserver((i) => i.disconnect()),
          this._initStyle(),
          this.initBackground(),
          this._safeMutationObserver((i) => i.observe(n, { attributes: !0 })));
      }),
      (this._resetOriginalStyle = () => {
        const n = this.element,
          i = this._originalStyle;
        if (!(n && i)) return;
        const r = n.style;
        (r.position = i.position),
          (r.zIndex = i.zIndex),
          (r.top = i.top),
          (r.left = i.left),
          (r.width = i.width),
          (r.height = i.height);
      }),
      (this._safeMutationObserver = (n) => {
        this._mutationObserver && n(this._mutationObserver);
      }),
      (this._setFullScreenStyle = () => {
        const n = this.element;
        if (!n) return;
        const i = "important",
          r = n.style;
        r.setProperty("position", "fixed", i),
          r.setProperty(
            "z-index",
            this.container.actualOptions.fullScreen.zIndex.toString(10),
            i,
          ),
          r.setProperty("top", "0", i),
          r.setProperty("left", "0", i),
          r.setProperty("width", "100%", i),
          r.setProperty("height", "100%", i);
      }),
      (this.size = { height: 0, width: 0 }),
      (this._context = null),
      (this._generated = !1),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []),
      (this._mutationObserver =
        !Kn() && typeof MutationObserver < "u"
          ? new MutationObserver((n) => {
              for (const i of n)
                i.type === "attributes" &&
                  i.attributeName === "style" &&
                  this._repairStyle();
            })
          : void 0);
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const e = this.container.actualOptions,
      n = e.particles.move.trail,
      i = this._trailFill;
    e.backgroundMask.enable
      ? this.paint()
      : n.enable && n.length > 0 && i
      ? i.color
        ? this._paintBase(ln(i.color, i.opacity))
        : i.image && this._paintImage(i.image, i.opacity)
      : this.draw((r) => {
          Gl(r, this.size);
        });
  }
  destroy() {
    if ((this._safeMutationObserver((e) => e.disconnect()), this._generated)) {
      const e = this.element;
      e && e.remove();
    } else this._resetOriginalStyle();
    this.stop(),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []);
  }
  draw(e) {
    const n = this._context;
    if (n) return e(n);
  }
  drawParticle(e, n) {
    if (e.spawning || e.destroyed) return;
    const i = e.getRadius();
    if (i <= 0) return;
    const r = e.getFillColor(),
      s = e.getStrokeColor() ?? r;
    let [o, a] = this._getPluginParticleColors(e);
    o || (o = r),
      a || (a = s),
      !(!o && !a) &&
        this.draw((l) => {
          var v;
          const u = this.container,
            c = u.actualOptions,
            d = e.options.zIndex,
            f = (1 - e.zIndexFactor) ** d.opacityRate,
            p =
              e.bubble.opacity ??
              ((v = e.opacity) == null ? void 0 : v.value) ??
              1,
            g = e.strokeOpacity ?? p,
            m = p * f,
            b = g * f,
            y = {},
            h = { fill: o ? hr(o, m) : void 0 };
          (h.stroke = a ? hr(a, b) : h.fill),
            this._applyPreDrawUpdaters(l, e, i, m, h, y),
            s4({
              container: u,
              context: l,
              particle: e,
              delta: n,
              colorStyles: h,
              backgroundMask: c.backgroundMask.enable,
              composite: c.backgroundMask.composite,
              radius: i * (1 - e.zIndexFactor) ** d.sizeRate,
              opacity: m,
              shadow: e.options.shadow,
              transform: y,
            }),
            this._applyPostDrawUpdaters(e);
        });
  }
  drawParticlePlugin(e, n, i) {
    this.draw((r) => u4(r, e, n, i));
  }
  drawPlugin(e, n) {
    this.draw((i) => l4(i, e, n));
  }
  async init() {
    this.resize(), this._initStyle(), this._initCover();
    try {
      await this._initTrail();
    } catch (e) {
      console.error(e);
    }
    this.initBackground(),
      this._safeMutationObserver((e) => {
        this.element && e.observe(this.element, { attributes: !0 });
      }),
      this.initUpdaters(),
      this.initPlugins(),
      this.paint();
  }
  initBackground() {
    const e = this.container.actualOptions,
      n = e.background,
      i = this.element;
    if (!i) return;
    const r = i.style;
    if (r) {
      if (n.color) {
        const s = Ot(n.color);
        r.backgroundColor = s ? ln(s, n.opacity) : "";
      } else r.backgroundColor = "";
      (r.backgroundImage = n.image || ""),
        (r.backgroundPosition = n.position || ""),
        (r.backgroundRepeat = n.repeat || ""),
        (r.backgroundSize = n.size || "");
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, e] of this.container.plugins)
      e.resize && this._resizePlugins.push(e),
        (e.particleFillColor || e.particleStrokeColor) &&
          this._colorPlugins.push(e);
  }
  initUpdaters() {
    (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
    for (const e of this.container.particles.updaters)
      e.afterDraw && this._postDrawUpdaters.push(e),
        (e.getColorStyles || e.getTransformValues || e.beforeDraw) &&
          this._preDrawUpdaters.push(e);
  }
  loadCanvas(e) {
    this._generated && this.element && this.element.remove(),
      (this._generated =
        e.dataset && Zr in e.dataset
          ? e.dataset[Zr] === "true"
          : this._generated),
      (this.element = e),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = Oe({}, this.element.style)),
      (this.size.height = e.offsetHeight),
      (this.size.width = e.offsetWidth),
      (this._context = this.element.getContext("2d")),
      this._safeMutationObserver((n) => {
        this.element && n.observe(this.element, { attributes: !0 });
      }),
      this.container.retina.init(),
      this.initBackground();
  }
  paint() {
    const e = this.container.actualOptions;
    this.draw((n) => {
      e.backgroundMask.enable && e.backgroundMask.cover
        ? (Gl(n, this.size), this._paintBase(this._coverColorStyle))
        : this._paintBase();
    });
  }
  resize() {
    if (!this.element) return !1;
    const e = this.container,
      n = e.retina.pixelRatio,
      i = e.canvas.size,
      r = {
        width: this.element.offsetWidth * n,
        height: this.element.offsetHeight * n,
      };
    if (
      r.height === i.height &&
      r.width === i.width &&
      r.height === this.element.height &&
      r.width === this.element.width
    )
      return !1;
    const s = { ...i };
    return (
      (this.element.width = i.width = this.element.offsetWidth * n),
      (this.element.height = i.height = this.element.offsetHeight * n),
      this.container.started &&
        (this.resizeFactor = {
          width: i.width / s.width,
          height: i.height / s.height,
        }),
      !0
    );
  }
  stop() {
    this.draw((e) => Gl(e, this.size));
  }
  async windowResize() {
    if (!this.element || !this.resize()) return;
    const e = this.container,
      n = e.updateActualOptions();
    e.particles.setDensity(),
      this._applyResizePlugins(),
      n && (await e.refresh());
  }
}
function Pt(t, e, n, i, r) {
  if (i) {
    let s = { passive: !0 };
    typeof r == "boolean" ? (s.capture = r) : r !== void 0 && (s = r),
      t.addEventListener(e, n, s);
  } else {
    const s = r;
    t.removeEventListener(e, n, s);
  }
}
class p4 {
  constructor(e) {
    (this.container = e),
      (this._doMouseTouchClick = (n) => {
        const i = this.container,
          r = i.actualOptions;
        if (this._canPush) {
          const s = i.interactivity.mouse,
            o = s.position;
          if (!o) return;
          (s.clickPosition = { ...o }), (s.clickTime = new Date().getTime());
          const a = r.interactivity.events.onClick;
          ve(a.mode, (l) => this.container.handleClickMode(l));
        }
        n.type === "touchend" &&
          setTimeout(() => this._mouseTouchFinish(), 500);
      }),
      (this._handleThemeChange = (n) => {
        const i = n,
          r = this.container,
          s = r.options,
          o = s.defaultThemes,
          a = i.matches ? o.dark : o.light,
          l = s.themes.find((u) => u.name === a);
        l && l.default.auto && r.loadTheme(a);
      }),
      (this._handleVisibilityChange = () => {
        const n = this.container,
          i = n.actualOptions;
        this._mouseTouchFinish(),
          i.pauseOnBlur &&
            (document && document.hidden
              ? ((n.pageHidden = !0), n.pause())
              : ((n.pageHidden = !1),
                n.getAnimationStatus() ? n.play(!0) : n.draw(!0)));
      }),
      (this._handleWindowResize = async () => {
        this._resizeTimeout &&
          (clearTimeout(this._resizeTimeout), delete this._resizeTimeout),
          (this._resizeTimeout = setTimeout(async () => {
            const n = this.container.canvas;
            n && (await n.windowResize());
          }, this.container.actualOptions.interactivity.events.resize.delay * 1e3));
      }),
      (this._manageInteractivityListeners = (n, i) => {
        const r = this._handlers,
          s = this.container,
          o = s.actualOptions,
          a = s.interactivity.element;
        if (!a) return;
        const l = a,
          u = s.canvas.element;
        u && (u.style.pointerEvents = l === u ? "initial" : "none"),
          (o.interactivity.events.onHover.enable ||
            o.interactivity.events.onClick.enable) &&
            (Pt(a, yi, r.mouseMove, i),
            Pt(a, R3, r.touchStart, i),
            Pt(a, L3, r.touchMove, i),
            o.interactivity.events.onClick.enable
              ? (Pt(a, ah, r.touchEndClick, i),
                Pt(a, O3, r.mouseUp, i),
                Pt(a, M3, r.mouseDown, i))
              : Pt(a, ah, r.touchEnd, i),
            Pt(a, n, r.mouseLeave, i),
            Pt(a, D3, r.touchCancel, i));
      }),
      (this._manageListeners = (n) => {
        const i = this._handlers,
          r = this.container,
          s = r.actualOptions,
          o = s.interactivity.detectsOn,
          a = r.canvas.element;
        let l = hc;
        o === "window"
          ? ((r.interactivity.element = window), (l = I3))
          : o === "parent" && a
          ? (r.interactivity.element = a.parentElement ?? a.parentNode)
          : (r.interactivity.element = a),
          this._manageMediaMatch(n),
          this._manageResize(n),
          this._manageInteractivityListeners(l, n),
          document && Pt(document, j3, i.visibilityChange, n, !1);
      }),
      (this._manageMediaMatch = (n) => {
        const i = this._handlers,
          r = Sy("(prefers-color-scheme: dark)");
        if (r) {
          if (r.addEventListener !== void 0) {
            Pt(r, "change", i.themeChange, n);
            return;
          }
          r.addListener !== void 0 &&
            (n
              ? r.addListener(i.oldThemeChange)
              : r.removeListener(i.oldThemeChange));
        }
      }),
      (this._manageResize = (n) => {
        const i = this._handlers,
          r = this.container;
        if (!r.actualOptions.interactivity.events.resize) return;
        if (typeof ResizeObserver > "u") {
          Pt(window, $3, i.resize, n);
          return;
        }
        const o = r.canvas.element;
        this._resizeObserver && !n
          ? (o && this._resizeObserver.unobserve(o),
            this._resizeObserver.disconnect(),
            delete this._resizeObserver)
          : !this._resizeObserver &&
            n &&
            o &&
            ((this._resizeObserver = new ResizeObserver(async (a) => {
              a.find((u) => u.target === o) &&
                (await this._handleWindowResize());
            })),
            this._resizeObserver.observe(o));
      }),
      (this._mouseDown = () => {
        const { interactivity: n } = this.container;
        if (!n) return;
        const { mouse: i } = n;
        (i.clicking = !0), (i.downPosition = i.position);
      }),
      (this._mouseTouchClick = (n) => {
        const i = this.container,
          r = i.actualOptions,
          { mouse: s } = i.interactivity;
        s.inside = !0;
        let o = !1;
        const a = s.position;
        if (!(!a || !r.interactivity.events.onClick.enable)) {
          for (const [, l] of i.plugins)
            if (l.clickPositionValid && ((o = l.clickPositionValid(a)), o))
              break;
          o || this._doMouseTouchClick(n), (s.clicking = !1);
        }
      }),
      (this._mouseTouchFinish = () => {
        const n = this.container.interactivity;
        if (!n) return;
        const i = n.mouse;
        delete i.position,
          delete i.clickPosition,
          delete i.downPosition,
          (n.status = hc),
          (i.inside = !1),
          (i.clicking = !1);
      }),
      (this._mouseTouchMove = (n) => {
        const i = this.container,
          r = i.actualOptions,
          s = i.interactivity,
          o = i.canvas.element;
        if (!s || !s.element) return;
        s.mouse.inside = !0;
        let a;
        if (n.type.startsWith("pointer")) {
          this._canPush = !0;
          const u = n;
          if (s.element === window) {
            if (o) {
              const c = o.getBoundingClientRect();
              a = { x: u.clientX - c.left, y: u.clientY - c.top };
            }
          } else if (r.interactivity.detectsOn === "parent") {
            const c = u.target,
              d = u.currentTarget;
            if (c && d && o) {
              const f = c.getBoundingClientRect(),
                p = d.getBoundingClientRect(),
                g = o.getBoundingClientRect();
              a = {
                x: u.offsetX + 2 * f.left - (p.left + g.left),
                y: u.offsetY + 2 * f.top - (p.top + g.top),
              };
            } else a = { x: u.offsetX ?? u.clientX, y: u.offsetY ?? u.clientY };
          } else
            u.target === o &&
              (a = { x: u.offsetX ?? u.clientX, y: u.offsetY ?? u.clientY });
        } else if (((this._canPush = n.type !== "touchmove"), o)) {
          const u = n,
            c = u.touches[u.touches.length - 1],
            d = o.getBoundingClientRect();
          a = { x: c.clientX - (d.left ?? 0), y: c.clientY - (d.top ?? 0) };
        }
        const l = i.retina.pixelRatio;
        a && ((a.x *= l), (a.y *= l)), (s.mouse.position = a), (s.status = yi);
      }),
      (this._touchEnd = (n) => {
        const i = n,
          r = Array.from(i.changedTouches);
        for (const s of r) this._touches.delete(s.identifier);
        this._mouseTouchFinish();
      }),
      (this._touchEndClick = (n) => {
        const i = n,
          r = Array.from(i.changedTouches);
        for (const s of r) this._touches.delete(s.identifier);
        this._mouseTouchClick(n);
      }),
      (this._touchStart = (n) => {
        const i = n,
          r = Array.from(i.changedTouches);
        for (const s of r) this._touches.set(s.identifier, performance.now());
        this._mouseTouchMove(n);
      }),
      (this._canPush = !0),
      (this._touches = new Map()),
      (this._handlers = {
        mouseDown: () => this._mouseDown(),
        mouseLeave: () => this._mouseTouchFinish(),
        mouseMove: (n) => this._mouseTouchMove(n),
        mouseUp: (n) => this._mouseTouchClick(n),
        touchStart: (n) => this._touchStart(n),
        touchMove: (n) => this._mouseTouchMove(n),
        touchEnd: (n) => this._touchEnd(n),
        touchCancel: (n) => this._touchEnd(n),
        touchEndClick: (n) => this._touchEndClick(n),
        visibilityChange: () => this._handleVisibilityChange(),
        themeChange: (n) => this._handleThemeChange(n),
        oldThemeChange: (n) => this._handleThemeChange(n),
        resize: () => {
          this._handleWindowResize();
        },
      });
  }
  addListeners() {
    this._manageListeners(!0);
  }
  removeListeners() {
    this._manageListeners(!1);
  }
}
function h4(t, e = 60, n = !1) {
  return { value: t, factor: n ? 60 / e : (60 * t) / 1e3 };
}
class m4 {
  constructor(e) {
    this.container = e;
  }
  async nextFrame(e) {
    try {
      const n = this.container;
      if (
        !n.smooth &&
        n.lastFrameTime !== void 0 &&
        e < n.lastFrameTime + 1e3 / n.fpsLimit
      ) {
        n.draw(!1);
        return;
      }
      n.lastFrameTime ?? (n.lastFrameTime = e);
      const i = h4(e - n.lastFrameTime, n.fpsLimit, n.smooth);
      if ((n.addLifeTime(i.value), (n.lastFrameTime = e), i.value > 1e3)) {
        n.draw(!1);
        return;
      }
      if ((await n.particles.draw(i), !n.alive())) {
        n.destroy();
        return;
      }
      n.getAnimationStatus() && n.draw(!1);
    } catch (n) {
      console.error(`${qt} in animation loop`, n);
    }
  }
}
class ze {
  constructor() {
    this.value = "";
  }
  static create(e, n) {
    const i = new ze();
    return (
      i.load(e),
      n !== void 0 &&
        (typeof n == "string" || n instanceof Array
          ? i.load({ value: n })
          : i.load(n)),
      i
    );
  }
  load(e) {
    (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value);
  }
}
let g4 = class {
  constructor() {
    (this.color = new ze()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.position !== void 0 && (this.position = e.position),
      e.repeat !== void 0 && (this.repeat = e.repeat),
      e.size !== void 0 && (this.size = e.size),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
};
class y4 {
  constructor() {
    (this.color = new ze()), (this.color.value = "#fff"), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class v4 {
  constructor() {
    (this.composite = "destination-out"),
      (this.cover = new y4()),
      (this.enable = !1);
  }
  load(e) {
    if (e) {
      if (
        (e.composite !== void 0 && (this.composite = e.composite),
        e.cover !== void 0)
      ) {
        const n = e.cover,
          i = typeof e.cover == "string" ? { color: e.cover } : e.cover;
        this.cover.load(n.color !== void 0 ? n : { color: i });
      }
      e.enable !== void 0 && (this.enable = e.enable);
    }
  }
}
class w4 {
  constructor() {
    (this.enable = !0), (this.zIndex = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
}
class b4 {
  constructor() {
    (this.enable = !1), (this.mode = []);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode));
  }
}
class dh {
  constructor() {
    (this.selectors = []),
      (this.enable = !1),
      (this.mode = []),
      (this.type = "circle");
  }
  get el() {
    return this.elementId;
  }
  set el(e) {
    this.elementId = e;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(e) {
    this.ids = e;
  }
  get ids() {
    return ve(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = ve(e, (n) => `#${n}`);
  }
  load(e) {
    if (!e) return;
    const n = e.ids ?? e.elementId ?? e.el;
    n !== void 0 && (this.ids = n),
      e.selectors !== void 0 && (this.selectors = e.selectors),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      e.type !== void 0 && (this.type = e.type);
  }
}
class x4 {
  constructor() {
    (this.enable = !1), (this.force = 2), (this.smooth = 10);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.force !== void 0 && (this.force = e.force),
      e.smooth !== void 0 && (this.smooth = e.smooth));
  }
}
class S4 {
  constructor() {
    (this.enable = !1), (this.mode = []), (this.parallax = new x4());
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.parallax.load(e.parallax));
  }
}
class k4 {
  constructor() {
    (this.delay = 0.5), (this.enable = !0);
  }
  load(e) {
    e !== void 0 &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class _4 {
  constructor() {
    (this.onClick = new b4()),
      (this.onDiv = new dh()),
      (this.onHover = new S4()),
      (this.resize = new k4());
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(e) {
    this.onClick = e;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(e) {
    this.onDiv = e;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(e) {
    this.onHover = e;
  }
  load(e) {
    if (!e) return;
    this.onClick.load(e.onClick ?? e.onclick);
    const n = e.onDiv ?? e.ondiv;
    n !== void 0 &&
      (this.onDiv = ve(n, (i) => {
        const r = new dh();
        return r.load(i), r;
      })),
      this.onHover.load(e.onHover ?? e.onhover),
      typeof e.resize == "boolean"
        ? (this.resize.enable = e.resize)
        : this.resize.load(e.resize);
  }
}
class C4 {
  constructor(e, n) {
    (this._engine = e), (this._container = n);
  }
  load(e) {
    if (!e || !this._container) return;
    const n = this._engine.plugins.interactors.get(this._container);
    if (n) for (const i of n) i.loadModeOptions && i.loadModeOptions(this, e);
  }
}
class Ry {
  constructor(e, n) {
    (this.detectsOn = "window"),
      (this.events = new _4()),
      (this.modes = new C4(e, n));
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(e) {
    this.detectsOn = e;
  }
  load(e) {
    if (!e) return;
    const n = e.detectsOn ?? e.detect_on;
    n !== void 0 && (this.detectsOn = n),
      this.events.load(e.events),
      this.modes.load(e.modes);
  }
}
class E4 {
  load(e) {
    e &&
      (e.position &&
        (this.position = {
          x: e.position.x ?? 50,
          y: e.position.y ?? 50,
          mode: e.position.mode ?? "percent",
        }),
      e.options && (this.options = Oe({}, e.options)));
  }
}
class P4 {
  constructor() {
    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
  }
  load(e) {
    e &&
      (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
      e.mode !== void 0 &&
        (e.mode === "screen" ? (this.mode = "screen") : (this.mode = "canvas")),
      e.options !== void 0 && (this.options = Oe({}, e.options)));
  }
}
class T4 {
  constructor() {
    (this.auto = !1), (this.mode = "any"), (this.value = !1);
  }
  load(e) {
    e &&
      (e.auto !== void 0 && (this.auto = e.auto),
      e.mode !== void 0 && (this.mode = e.mode),
      e.value !== void 0 && (this.value = e.value));
  }
}
class z4 {
  constructor() {
    (this.name = ""), (this.default = new T4());
  }
  load(e) {
    e &&
      (e.name !== void 0 && (this.name = e.name),
      this.default.load(e.default),
      e.options !== void 0 && (this.options = Oe({}, e.options)));
  }
}
class Kl {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.offset = 0),
      (this.speed = 1),
      (this.delay = 0),
      (this.decay = 0),
      (this.sync = !0);
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = X(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 && (this.offset = X(e.offset)),
      e.speed !== void 0 && (this.speed = X(e.speed)),
      e.decay !== void 0 && (this.decay = X(e.decay)),
      e.delay !== void 0 && (this.delay = X(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class A4 {
  constructor() {
    (this.h = new Kl()), (this.s = new Kl()), (this.l = new Kl());
  }
  load(e) {
    e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
}
class mr extends ze {
  constructor() {
    super(), (this.animation = new A4());
  }
  static create(e, n) {
    const i = new mr();
    return (
      i.load(e),
      n !== void 0 &&
        (typeof n == "string" || n instanceof Array
          ? i.load({ value: n })
          : i.load(n)),
      i
    );
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const n = e.animation;
    n !== void 0 &&
      (n.enable !== void 0
        ? this.animation.h.load(n)
        : this.animation.load(e.animation));
  }
}
class M4 {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    e && e.speed !== void 0 && (this.speed = e.speed);
  }
}
class O4 {
  constructor() {
    (this.enable = !0), (this.retries = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
class I4 {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.speed = 1),
      (this.decay = 0),
      (this.delay = 0),
      (this.sync = !1);
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = X(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = X(e.speed)),
      e.decay !== void 0 && (this.decay = X(e.decay)),
      e.delay !== void 0 && (this.delay = X(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class Ly extends I4 {
  constructor() {
    super(), (this.mode = "auto"), (this.startValue = "random");
  }
  load(e) {
    super.load(e),
      e &&
        (e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue),
        e.mode !== void 0 && (this.mode = e.mode),
        e.startValue !== void 0 && (this.startValue = e.startValue));
  }
}
class R4 {
  constructor() {
    (this.enable = !1), (this.minimumValue = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue));
  }
}
class Dt {
  constructor() {
    (this.random = new R4()), (this.value = 0);
  }
  load(e) {
    e &&
      (typeof e.random == "boolean"
        ? (this.random.enable = e.random)
        : this.random.load(e.random),
      e.value !== void 0 &&
        (this.value = X(
          e.value,
          this.random.enable ? this.random.minimumValue : void 0,
        )));
  }
}
class fh extends Dt {
  constructor() {
    super(), (this.random.minimumValue = 0.1), (this.value = 1);
  }
}
class Dy {
  constructor() {
    (this.horizontal = new fh()), (this.vertical = new fh());
  }
  load(e) {
    e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
}
class L4 {
  constructor() {
    (this.absorb = new M4()),
      (this.bounce = new Dy()),
      (this.enable = !1),
      (this.maxSpeed = 50),
      (this.mode = "bounce"),
      (this.overlap = new O4());
  }
  load(e) {
    e &&
      (this.absorb.load(e.absorb),
      this.bounce.load(e.bounce),
      e.enable !== void 0 && (this.enable = e.enable),
      e.maxSpeed !== void 0 && (this.maxSpeed = X(e.maxSpeed)),
      e.mode !== void 0 && (this.mode = e.mode),
      this.overlap.load(e.overlap));
  }
}
class D4 {
  constructor() {
    (this.offset = 0), (this.value = 90);
  }
  load(e) {
    e &&
      (e.offset !== void 0 && (this.offset = X(e.offset)),
      e.value !== void 0 && (this.value = X(e.value)));
  }
}
class $4 {
  constructor() {
    (this.distance = 200),
      (this.enable = !1),
      (this.rotate = { x: 3e3, y: 3e3 });
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(e) {
    this.rotate.x = e;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(e) {
    this.rotate.y = e;
  }
  load(e) {
    var r, s;
    if (!e) return;
    e.distance !== void 0 && (this.distance = X(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable);
    const n = ((r = e.rotate) == null ? void 0 : r.x) ?? e.rotateX;
    n !== void 0 && (this.rotate.x = n);
    const i = ((s = e.rotate) == null ? void 0 : s.y) ?? e.rotateY;
    i !== void 0 && (this.rotate.y = i);
  }
}
class j4 {
  constructor() {
    (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
  }
  load(e) {
    e &&
      (e.x !== void 0 && (this.x = e.x),
      e.y !== void 0 && (this.y = e.y),
      e.mode !== void 0 && (this.mode = e.mode),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class F4 {
  constructor() {
    (this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50);
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = X(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.inverse !== void 0 && (this.inverse = e.inverse),
      e.maxSpeed !== void 0 && (this.maxSpeed = X(e.maxSpeed)));
  }
}
class N4 {
  constructor() {
    (this.clamp = !0),
      (this.delay = new Dt()),
      (this.enable = !1),
      (this.options = {});
  }
  load(e) {
    e &&
      (e.clamp !== void 0 && (this.clamp = e.clamp),
      this.delay.load(e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.generator = e.generator),
      e.options && (this.options = Oe(this.options, e.options)));
  }
}
class B4 {
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image));
  }
}
class H4 {
  constructor() {
    (this.enable = !1), (this.length = 10), (this.fill = new B4());
  }
  get fillColor() {
    return this.fill.color;
  }
  set fillColor(e) {
    this.fill.load({ color: e });
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      (e.fill !== void 0 || e.fillColor !== void 0) &&
        this.fill.load(e.fill || { color: e.fillColor }),
      e.length !== void 0 && (this.length = e.length));
  }
}
class W4 {
  constructor() {
    this.default = "out";
  }
  load(e) {
    e &&
      (e.default !== void 0 && (this.default = e.default),
      (this.bottom = e.bottom ?? e.default),
      (this.left = e.left ?? e.default),
      (this.right = e.right ?? e.default),
      (this.top = e.top ?? e.default));
  }
}
class V4 {
  constructor() {
    (this.acceleration = 0), (this.enable = !1);
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = X(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.position && (this.position = Oe({}, e.position)));
  }
}
class q4 {
  constructor() {
    (this.angle = new D4()),
      (this.attract = new $4()),
      (this.center = new j4()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = "none"),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new F4()),
      (this.path = new N4()),
      (this.outModes = new W4()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new V4()),
      (this.straight = !1),
      (this.trail = new H4()),
      (this.vibrate = !1),
      (this.warp = !1);
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(e) {
    this.collisions = e;
  }
  get collisions() {
    return !1;
  }
  set collisions(e) {}
  get noise() {
    return this.path;
  }
  set noise(e) {
    this.path = e;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(e) {
    this.outModes.default = e;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(e) {
    this.outMode = e;
  }
  load(e) {
    if (!e) return;
    this.angle.load(typeof e.angle == "number" ? { value: e.angle } : e.angle),
      this.attract.load(e.attract),
      this.center.load(e.center),
      e.decay !== void 0 && (this.decay = X(e.decay)),
      e.direction !== void 0 && (this.direction = e.direction),
      e.distance !== void 0 &&
        (this.distance =
          typeof e.distance == "number"
            ? { horizontal: e.distance, vertical: e.distance }
            : { ...e.distance }),
      e.drift !== void 0 && (this.drift = X(e.drift)),
      e.enable !== void 0 && (this.enable = e.enable),
      this.gravity.load(e.gravity);
    const n = e.outModes ?? e.outMode ?? e.out_mode;
    n !== void 0 &&
      (typeof n == "object"
        ? this.outModes.load(n)
        : this.outModes.load({ default: n })),
      this.path.load(e.path ?? e.noise),
      e.random !== void 0 && (this.random = e.random),
      e.size !== void 0 && (this.size = e.size),
      e.speed !== void 0 && (this.speed = X(e.speed)),
      this.spin.load(e.spin),
      e.straight !== void 0 && (this.straight = e.straight),
      this.trail.load(e.trail),
      e.vibrate !== void 0 && (this.vibrate = e.vibrate),
      e.warp !== void 0 && (this.warp = e.warp);
  }
}
class U4 extends Ly {
  constructor() {
    super(), (this.destroy = "none"), (this.speed = 2);
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    (e == null ? void 0 : e.opacity_min) !== void 0 &&
      e.minimumValue === void 0 &&
      (e.minimumValue = e.opacity_min),
      super.load(e),
      e && e.destroy !== void 0 && (this.destroy = e.destroy);
  }
}
class X4 extends Dt {
  constructor() {
    super(),
      (this.animation = new U4()),
      (this.random.minimumValue = 0.1),
      (this.value = 1);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    if (!e) return;
    super.load(e);
    const n = e.animation ?? e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = X(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0,
      )));
  }
}
class G4 {
  constructor() {
    (this.enable = !1), (this.width = 1920), (this.height = 1080);
  }
  get area() {
    return this.width;
  }
  set area(e) {
    this.width = e;
  }
  get factor() {
    return this.height;
  }
  set factor(e) {
    this.height = e;
  }
  get value_area() {
    return this.area;
  }
  set value_area(e) {
    this.area = e;
  }
  load(e) {
    if (!e) return;
    e.enable !== void 0 && (this.enable = e.enable);
    const n = e.width ?? e.area ?? e.value_area;
    n !== void 0 && (this.width = n);
    const i = e.height ?? e.factor;
    i !== void 0 && (this.height = i);
  }
}
class K4 {
  constructor() {
    (this.density = new G4()), (this.limit = 0), (this.value = 0);
  }
  get max() {
    return this.limit;
  }
  set max(e) {
    this.limit = e;
  }
  load(e) {
    if (!e) return;
    this.density.load(e.density);
    const n = e.limit ?? e.max;
    n !== void 0 && (this.limit = n),
      e.value !== void 0 && (this.value = e.value);
  }
}
class Y4 {
  constructor() {
    (this.blur = 0),
      (this.color = new ze()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000");
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ze.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 &&
        (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
}
const Yl = "character",
  Ql = "char",
  Zl = "image",
  Jl = "images",
  eu = "polygon",
  tu = "star";
class Q4 {
  constructor() {
    (this.loadShape = (e, n, i, r) => {
      if (!e) return;
      const s = e instanceof Array,
        o = s ? [] : {},
        a = s !== this.options[n] instanceof Array,
        l = s !== this.options[i] instanceof Array;
      a && (this.options[n] = o),
        l && r && (this.options[i] = o),
        (this.options[n] = Oe(this.options[n] ?? o, e)),
        (!this.options[i] || r) &&
          (this.options[i] = Oe(this.options[i] ?? o, e));
    }),
      (this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = "circle");
  }
  get character() {
    return this.options[Yl] ?? this.options[Ql];
  }
  set character(e) {
    this.options[Ql] = this.options[Yl] = e;
  }
  get custom() {
    return this.options;
  }
  set custom(e) {
    this.options = e;
  }
  get image() {
    return this.options[Zl] ?? this.options[Jl];
  }
  set image(e) {
    this.options[Jl] = this.options[Zl] = e;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
  get polygon() {
    return this.options[eu] ?? this.options[tu];
  }
  set polygon(e) {
    this.options[tu] = this.options[eu] = e;
  }
  get stroke() {
    return [];
  }
  set stroke(e) {}
  load(e) {
    if (!e) return;
    const n = e.options ?? e.custom;
    if (n !== void 0)
      for (const i in n) {
        const r = n[i];
        r && (this.options[i] = Oe(this.options[i] ?? {}, r));
      }
    this.loadShape(e.character, Yl, Ql, !0),
      this.loadShape(e.polygon, eu, tu, !1),
      this.loadShape(e.image ?? e.images, Zl, Jl, !0),
      e.close !== void 0 && (this.close = e.close),
      e.fill !== void 0 && (this.fill = e.fill),
      e.type !== void 0 && (this.type = e.type);
  }
}
class Z4 extends Ly {
  constructor() {
    super(), (this.destroy = "none"), (this.speed = 5);
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    (e == null ? void 0 : e.size_min) !== void 0 &&
      e.minimumValue === void 0 &&
      (e.minimumValue = e.size_min),
      super.load(e),
      e && e.destroy !== void 0 && (this.destroy = e.destroy);
  }
}
class J4 extends Dt {
  constructor() {
    super(),
      (this.animation = new Z4()),
      (this.random.minimumValue = 1),
      (this.value = 3);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const n = e.animation ?? e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = X(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0,
      )));
  }
}
class ph {
  constructor() {
    this.width = 0;
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = mr.create(this.color, e.color)),
      e.width !== void 0 && (this.width = X(e.width)),
      e.opacity !== void 0 && (this.opacity = X(e.opacity)));
  }
}
class eC extends Dt {
  constructor() {
    super(),
      (this.opacityRate = 1),
      (this.sizeRate = 1),
      (this.velocityRate = 1);
  }
  load(e) {
    super.load(e),
      e &&
        (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
        e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
        e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate));
  }
}
class tC {
  constructor(e, n) {
    (this._engine = e),
      (this._container = n),
      (this.bounce = new Dy()),
      (this.collisions = new L4()),
      (this.color = new mr()),
      (this.color.value = "#fff"),
      (this.groups = {}),
      (this.move = new q4()),
      (this.number = new K4()),
      (this.opacity = new X4()),
      (this.reduceDuplicates = !1),
      (this.shadow = new Y4()),
      (this.shape = new Q4()),
      (this.size = new J4()),
      (this.stroke = new ph()),
      (this.zIndex = new eC());
  }
  load(e) {
    var r, s, o;
    if (!e) return;
    if (
      (this.bounce.load(e.bounce),
      this.color.load(mr.create(this.color, e.color)),
      e.groups !== void 0)
    )
      for (const a in e.groups) {
        const l = e.groups[a];
        l !== void 0 && (this.groups[a] = Oe(this.groups[a] ?? {}, l));
      }
    this.move.load(e.move),
      this.number.load(e.number),
      this.opacity.load(e.opacity),
      e.reduceDuplicates !== void 0 &&
        (this.reduceDuplicates = e.reduceDuplicates),
      this.shape.load(e.shape),
      this.size.load(e.size),
      this.shadow.load(e.shadow),
      this.zIndex.load(e.zIndex);
    const n =
      ((r = e.move) == null ? void 0 : r.collisions) ??
      ((s = e.move) == null ? void 0 : s.bounce);
    n !== void 0 && (this.collisions.enable = n),
      this.collisions.load(e.collisions),
      e.interactivity !== void 0 &&
        (this.interactivity = Oe({}, e.interactivity));
    const i = e.stroke ?? ((o = e.shape) == null ? void 0 : o.stroke);
    if (
      (i &&
        (this.stroke = ve(i, (a) => {
          const l = new ph();
          return l.load(a), l;
        })),
      this._container)
    ) {
      const a = this._engine.plugins.updaters.get(this._container);
      if (a) for (const u of a) u.loadOptions && u.loadOptions(this, e);
      const l = this._engine.plugins.interactors.get(this._container);
      if (l)
        for (const u of l)
          u.loadParticlesOptions && u.loadParticlesOptions(this, e);
    }
  }
}
function $y(t, ...e) {
  for (const n of e) t.load(n);
}
function Xd(t, e, ...n) {
  const i = new tC(t, e);
  return $y(i, ...n), i;
}
class nC {
  constructor(e, n) {
    (this._findDefaultTheme = (i) =>
      this.themes.find((r) => r.default.value && r.default.mode === i) ??
      this.themes.find((r) => r.default.value && r.default.mode === "any")),
      (this._importPreset = (i) => {
        this.load(this._engine.plugins.getPreset(i));
      }),
      (this._engine = e),
      (this._container = n),
      (this.autoPlay = !0),
      (this.background = new g4()),
      (this.backgroundMask = new v4()),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new w4()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new Ry(e, n)),
      (this.manualParticles = []),
      (this.particles = Xd(this._engine, this._container)),
      (this.pauseOnBlur = !0),
      (this.pauseOnOutsideViewport = !0),
      (this.responsive = []),
      (this.smooth = !1),
      (this.style = {}),
      (this.themes = []),
      (this.zLayers = 100);
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(e) {
    this.fullScreen.load(e);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(e) {
    this.fpsLimit = e;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(e) {
    this.detectRetina = e;
  }
  load(e) {
    var o, a;
    if (!e) return;
    e.preset !== void 0 && ve(e.preset, (l) => this._importPreset(l)),
      e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.delay !== void 0 && (this.delay = X(e.delay));
    const n = e.detectRetina ?? e.retina_detect;
    n !== void 0 && (this.detectRetina = n),
      e.duration !== void 0 && (this.duration = X(e.duration));
    const i = e.fpsLimit ?? e.fps_limit;
    i !== void 0 && (this.fpsLimit = i),
      e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
      e.pauseOnOutsideViewport !== void 0 &&
        (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
      e.zLayers !== void 0 && (this.zLayers = e.zLayers),
      this.background.load(e.background);
    const r = e.fullScreen ?? e.backgroundMode;
    typeof r == "boolean"
      ? (this.fullScreen.enable = r)
      : this.fullScreen.load(r),
      this.backgroundMask.load(e.backgroundMask),
      this.interactivity.load(e.interactivity),
      e.manualParticles &&
        (this.manualParticles = e.manualParticles.map((l) => {
          const u = new E4();
          return u.load(l), u;
        })),
      this.particles.load(e.particles),
      (this.style = Oe(this.style, e.style)),
      this._engine.plugins.loadOptions(this, e),
      e.smooth !== void 0 && (this.smooth = e.smooth);
    const s = this._engine.plugins.interactors.get(this._container);
    if (s) for (const l of s) l.loadOptions && l.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const l of e.responsive) {
        const u = new P4();
        u.load(l), this.responsive.push(u);
      }
    if (
      (this.responsive.sort((l, u) => l.maxWidth - u.maxWidth),
      e.themes !== void 0)
    )
      for (const l of e.themes) {
        const u = this.themes.find((c) => c.name === l.name);
        if (u) u.load(l);
        else {
          const c = new z4();
          c.load(l), this.themes.push(c);
        }
      }
    (this.defaultThemes.dark =
      (o = this._findDefaultTheme("dark")) == null ? void 0 : o.name),
      (this.defaultThemes.light =
        (a = this._findDefaultTheme("light")) == null ? void 0 : a.name);
  }
  setResponsive(e, n, i) {
    this.load(i);
    const r = this.responsive.find((s) =>
      s.mode === "screen" && screen
        ? s.maxWidth > screen.availWidth
        : s.maxWidth * n > e,
    );
    return (
      this.load(r == null ? void 0 : r.options), r == null ? void 0 : r.maxWidth
    );
  }
  setTheme(e) {
    if (e) {
      const n = this.themes.find((i) => i.name === e);
      n && this.load(n.options);
    } else {
      const n = Sy("(prefers-color-scheme: dark)"),
        i = n && n.matches,
        r = this._findDefaultTheme(i ? "dark" : "light");
      r && this.load(r.options);
    }
  }
}
class iC {
  constructor(e, n) {
    (this.container = n),
      (this._engine = e),
      (this._interactors = this._engine.plugins.getInteractors(
        this.container,
        !0,
      )),
      (this._externalInteractors = []),
      (this._particleInteractors = []);
  }
  async externalInteract(e) {
    for (const n of this._externalInteractors)
      n.isEnabled() && (await n.interact(e));
  }
  handleClickMode(e) {
    for (const n of this._externalInteractors)
      n.handleClickMode && n.handleClickMode(e);
  }
  init() {
    (this._externalInteractors = []), (this._particleInteractors = []);
    for (const e of this._interactors) {
      switch (e.type) {
        case "external":
          this._externalInteractors.push(e);
          break;
        case "particles":
          this._particleInteractors.push(e);
          break;
      }
      e.init();
    }
  }
  async particlesInteract(e, n) {
    for (const i of this._externalInteractors) i.clear(e, n);
    for (const i of this._particleInteractors)
      i.isEnabled(e) && (await i.interact(e, n));
  }
  async reset(e) {
    for (const n of this._externalInteractors) n.isEnabled() && n.reset(e);
    for (const n of this._particleInteractors) n.isEnabled(e) && n.reset(e);
  }
}
const hh = (t) => {
  if (!ye(t.outMode, t.checkModes)) return;
  const e = t.radius * 2;
  t.coord > t.maxCoord - e
    ? t.setCb(-t.radius)
    : t.coord < e && t.setCb(t.radius);
};
class rC {
  constructor(e, n, i, r, s, o) {
    (this.container = i),
      (this._calcPosition = (a, l, u, c = 0) => {
        for (const [, h] of a.plugins) {
          const v =
            h.particlePosition !== void 0
              ? h.particlePosition(l, this)
              : void 0;
          if (v) return mt.create(v.x, v.y, u);
        }
        const d = a.canvas.size,
          f = V3({ size: d, position: l }),
          p = mt.create(f.x, f.y, u),
          g = this.getRadius(),
          m = this.options.move.outModes,
          b = (h) => {
            hh({
              outMode: h,
              checkModes: ["bounce", "bounce-horizontal"],
              coord: p.x,
              maxCoord: a.canvas.size.width,
              setCb: (v) => (p.x += v),
              radius: g,
            });
          },
          y = (h) => {
            hh({
              outMode: h,
              checkModes: ["bounce", "bounce-vertical"],
              coord: p.y,
              maxCoord: a.canvas.size.height,
              setCb: (v) => (p.y += v),
              radius: g,
            });
          };
        return (
          b(m.left ?? m.default),
          b(m.right ?? m.default),
          y(m.top ?? m.default),
          y(m.bottom ?? m.default),
          this._checkOverlap(p, c) ? this._calcPosition(a, void 0, u, c + 1) : p
        );
      }),
      (this._calculateVelocity = () => {
        const a = H3(this.direction),
          l = a.copy(),
          u = this.options.move;
        if (u.direction === "inside" || u.direction === "outside") return l;
        const c = (Math.PI / 180) * N(u.angle.value),
          d = (Math.PI / 180) * N(u.angle.offset),
          f = { left: d - c / 2, right: d + c / 2 };
        return (
          u.straight || (l.angle += Be(X(f.left, f.right))),
          u.random && typeof u.speed == "number" && (l.length *= K()),
          l
        );
      }),
      (this._checkOverlap = (a, l = 0) => {
        const u = this.options.collisions,
          c = this.getRadius();
        if (!u.enable) return !1;
        const d = u.overlap;
        if (d.enable) return !1;
        const f = d.retries;
        if (f >= 0 && l > f)
          throw new Error(`${qt} particle is overlapping and can't be placed`);
        return !!this.container.particles.find(
          (p) => it(a, p.position) < c + p.getRadius(),
        );
      }),
      (this._getRollColor = (a) => {
        if (!a || !this.roll || (!this.backColor && !this.roll.alter)) return a;
        const l = this.roll.horizontal && this.roll.vertical ? 2 : 1,
          u = this.roll.horizontal ? Math.PI / 2 : 0;
        return Math.floor(((this.roll.angle ?? 0) + u) / (Math.PI / l)) % 2
          ? this.backColor
            ? this.backColor
            : this.roll.alter
            ? c4(a, this.roll.alter.type, this.roll.alter.value)
            : a
          : a;
      }),
      (this._loadShapeData = (a, l) => {
        const u = a.options[this.shape];
        if (u) return Oe({ close: a.close, fill: a.fill }, St(u, this.id, l));
      }),
      (this._engine = e),
      this.init(n, r, s, o);
  }
  destroy(e) {
    if (this.unbreakable || this.destroyed) return;
    (this.destroyed = !0), (this.bubble.inRange = !1), (this.slow.inRange = !1);
    const n = this.container,
      i = this.pathGenerator;
    for (const [, r] of n.plugins)
      r.particleDestroyed && r.particleDestroyed(this, e);
    for (const r of n.particles.updaters)
      r.particleDestroyed && r.particleDestroyed(this, e);
    i && i.reset(this);
  }
  draw(e) {
    const n = this.container;
    for (const [, i] of n.plugins) n.canvas.drawParticlePlugin(i, this, e);
    n.canvas.drawParticle(this, e);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? ch(this.color));
  }
  getMass() {
    return (this.getRadius() ** 2 * Math.PI) / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z,
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? ch(this.strokeColor));
  }
  init(e, n, i, r) {
    const s = this.container,
      o = this._engine;
    (this.id = e),
      (this.group = r),
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
    const a = s.retina.pixelRatio,
      l = s.actualOptions,
      u = Xd(this._engine, s, l.particles),
      c = u.shape.type,
      { reduceDuplicates: d } = u;
    this.shape = St(c, this.id, d);
    const f = u.shape;
    if (i && i.shape && i.shape.type) {
      const S = i.shape.type,
        P = St(S, this.id, d);
      P && ((this.shape = P), f.load(i.shape));
    }
    (this.shapeData = this._loadShapeData(f, d)), u.load(i);
    const p = this.shapeData;
    p && u.load(p.particles);
    const g = new Ry(o, s);
    g.load(s.actualOptions.interactivity),
      g.load(u.interactivity),
      (this.interactivity = g),
      (this.fill = (p == null ? void 0 : p.fill) ?? u.shape.fill),
      (this.close = (p == null ? void 0 : p.close) ?? u.shape.close),
      (this.options = u);
    const m = this.options.move.path;
    (this.pathDelay = kn(m.delay) * 1e3),
      m.generator &&
        ((this.pathGenerator = this._engine.plugins.getPathGenerator(
          m.generator,
        )),
        this.pathGenerator &&
          s.addPath(m.generator, this.pathGenerator) &&
          this.pathGenerator.init(s));
    const b = N(this.options.zIndex.value);
    s.retina.initParticle(this),
      (this.size = Py(this.options.size, a)),
      (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      (this.position = this._calcPosition(s, n, Ut(b, 0, s.zLayers))),
      (this.initialPosition = this.position.copy());
    const y = s.canvas.size,
      h = { ...this.options.move.center },
      v = h.mode === "percent";
    switch (
      ((this.moveCenter = {
        x: h.x * (v ? y.width / 100 : 1),
        y: h.y * (v ? y.height / 100 : 1),
        radius: this.options.move.center.radius ?? 0,
        mode: this.options.move.center.mode ?? "percent",
      }),
      (this.direction = B3(
        this.options.move.direction,
        this.position,
        this.moveCenter,
      )),
      this.options.move.direction)
    ) {
      case "inside":
        this.outType = "inside";
        break;
      case "outside":
        this.outType = "outside";
        break;
    }
    (this.initialVelocity = this._calculateVelocity()),
      (this.velocity = this.initialVelocity.copy()),
      (this.moveDecay = 1 - N(this.options.move.decay)),
      (this.offset = fe.origin);
    const w = s.particles;
    (w.needsSort = w.needsSort || w.lastZIndex < this.position.z),
      (w.lastZIndex = this.position.z),
      (this.zIndexFactor = this.position.z / s.zLayers),
      (this.sides = 24);
    let x = s.drawers.get(this.shape);
    x ||
      ((x = this._engine.plugins.getShapeDrawer(this.shape)),
      x && s.drawers.set(this.shape, x)),
      x && x.loadShape && x.loadShape(this);
    const k = x == null ? void 0 : x.getSidesCount;
    k && (this.sides = k(this)),
      (this.spawning = !1),
      (this.shadowColor = Ot(this.options.shadow.color));
    for (const S of s.particles.updaters) S.init(this);
    for (const S of s.particles.movers) S.init && S.init(this);
    x && x.particleInit && x.particleInit(s, this);
    for (const [, S] of s.plugins) S.particleCreated && S.particleCreated(this);
  }
  isInsideCanvas() {
    const e = this.getRadius(),
      n = this.container.canvas.size,
      i = this.position;
    return i.x >= -e && i.y >= -e && i.y <= n.height + e && i.x <= n.width + e;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    for (const e of this.container.particles.updaters) e.reset && e.reset(this);
  }
}
class sC {
  constructor(e, n) {
    (this.position = e), (this.particle = n);
  }
}
class jy {
  constructor(e, n) {
    this.position = { x: e, y: n };
  }
}
class pt extends jy {
  constructor(e, n, i) {
    super(e, n), (this.radius = i);
  }
  contains(e) {
    return it(e, this.position) <= this.radius;
  }
  intersects(e) {
    const n = e,
      i = e,
      r = this.position,
      s = e.position,
      o = { x: Math.abs(s.x - r.x), y: Math.abs(s.y - r.y) },
      a = this.radius;
    if (i.radius !== void 0) {
      const l = a + i.radius,
        u = Math.sqrt(o.x ** 2 + o.y ** 2);
      return l > u;
    } else if (n.size !== void 0) {
      const l = n.size.width,
        u = n.size.height;
      return (
        Math.pow(o.x - l, 2) + Math.pow(o.y - u, 2) <= a ** 2 ||
        (o.x <= a + l && o.y <= a + u) ||
        o.x <= l ||
        o.y <= u
      );
    }
    return !1;
  }
}
class un extends jy {
  constructor(e, n, i, r) {
    super(e, n), (this.size = { height: r, width: i });
  }
  contains(e) {
    const n = this.size.width,
      i = this.size.height,
      r = this.position;
    return e.x >= r.x && e.x <= r.x + n && e.y >= r.y && e.y <= r.y + i;
  }
  intersects(e) {
    e instanceof pt && e.intersects(this);
    const n = this.size.width,
      i = this.size.height,
      r = this.position,
      s = e.position,
      o = e instanceof un ? e.size : { width: 0, height: 0 },
      a = o.width,
      l = o.height;
    return s.x < r.x + n && s.x + a > r.x && s.y < r.y + i && s.y + l > r.y;
  }
}
class pa {
  constructor(e, n) {
    (this.rectangle = e),
      (this.capacity = n),
      (this._subdivide = () => {
        const { x: i, y: r } = this.rectangle.position,
          { width: s, height: o } = this.rectangle.size,
          { capacity: a } = this;
        for (let l = 0; l < 4; l++)
          this._subs.push(
            new pa(
              new un(
                i + (s / 2) * (l % 2),
                r + (o / 2) * (Math.round(l / 2) - (l % 2)),
                s / 2,
                o / 2,
              ),
              a,
            ),
          );
        this._divided = !0;
      }),
      (this._points = []),
      (this._divided = !1),
      (this._subs = []);
  }
  insert(e) {
    return this.rectangle.contains(e.position)
      ? this._points.length < this.capacity
        ? (this._points.push(e), !0)
        : (this._divided || this._subdivide(),
          this._subs.some((n) => n.insert(e)))
      : !1;
  }
  query(e, n, i) {
    const r = i || [];
    if (!e.intersects(this.rectangle)) return [];
    for (const s of this._points)
      (!e.contains(s.position) &&
        it(e.position, s.position) > s.particle.getRadius() &&
        (!n || n(s.particle))) ||
        r.push(s.particle);
    if (this._divided) for (const s of this._subs) s.query(e, n, r);
    return r;
  }
  queryCircle(e, n, i) {
    return this.query(new pt(e.x, e.y, n), i);
  }
  queryRectangle(e, n, i) {
    return this.query(new un(e.x, e.y, n.width, n.height), i);
  }
}
const mh = 4,
  gh = (t) =>
    new un(-t.width / 4, -t.height / 4, (t.width * 3) / 2, (t.height * 3) / 2);
let oC = class {
  constructor(e, n) {
    (this._applyDensity = (r, s, o) => {
      var p;
      if (!((p = r.number.density) != null && p.enable)) return;
      const a = r.number,
        l = this._initDensityFactor(a.density),
        u = a.value,
        c = a.limit > 0 ? a.limit : u,
        d = Math.min(u, c) * l + s,
        f = Math.min(
          this.count,
          this._array.filter((g) => g.group === o).length,
        );
      (this.limit = a.limit * l),
        f < d
          ? this.push(Math.abs(d - f), void 0, r, o)
          : f > d && this.removeQuantity(f - d, o);
    }),
      (this._initDensityFactor = (r) => {
        const s = this._container;
        if (!s.canvas.element || !r.enable) return 1;
        const o = s.canvas.element,
          a = s.retina.pixelRatio;
        return (o.width * o.height) / (r.factor * a ** 2 * r.area);
      }),
      (this._pushParticle = (r, s, o, a) => {
        try {
          let l = this.pool.pop();
          l
            ? l.init(this._nextId, r, s, o)
            : (l = new rC(
                this._engine,
                this._nextId,
                this._container,
                r,
                s,
                o,
              ));
          let u = !0;
          return (
            a && (u = a(l)),
            u
              ? (this._array.push(l),
                this._zArray.push(l),
                this._nextId++,
                this._engine.dispatchEvent("particleAdded", {
                  container: this._container,
                  data: { particle: l },
                }),
                l)
              : void 0
          );
        } catch (l) {
          console.warn(`${qt} adding particle: ${l}`);
          return;
        }
      }),
      (this._engine = e),
      (this._container = n),
      (this._nextId = 0),
      (this._array = []),
      (this._zArray = []),
      (this.pool = []),
      (this.limit = 0),
      (this.needsSort = !1),
      (this.lastZIndex = 0),
      (this._interactionManager = new iC(this._engine, this._container));
    const i = this._container.canvas.size;
    (this.quadTree = new pa(gh(i), mh)),
      (this.movers = this._engine.plugins.getMovers(this._container, !0)),
      (this.updaters = this._engine.plugins.getUpdaters(this._container, !0));
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const e = this._container,
      n = e.actualOptions;
    for (const i of n.manualParticles)
      this.addParticle(
        i.position
          ? i.position.mode === "precise"
            ? i.position
            : W3({ size: e.canvas.size, position: i.position })
          : void 0,
        i.options,
      );
  }
  addParticle(e, n, i, r) {
    const s = this._container,
      o = s.actualOptions,
      a = o.particles.number.limit;
    if (a > 0) {
      const l = this.count + 1 - a;
      l > 0 && this.removeQuantity(l);
    }
    return this._pushParticle(e, n, i, r);
  }
  clear() {
    (this._array = []), (this._zArray = []);
  }
  destroy() {
    (this._array = []),
      (this._zArray = []),
      (this.movers = []),
      (this.updaters = []);
  }
  async draw(e) {
    const n = this._container,
      i = this._container.canvas.size;
    (this.quadTree = new pa(gh(i), mh)),
      n.canvas.clear(),
      await this.update(e),
      this.needsSort &&
        (this._zArray.sort(
          (r, s) => s.position.z - r.position.z || r.id - s.id,
        ),
        (this.lastZIndex = this._zArray[this._zArray.length - 1].position.z),
        (this.needsSort = !1));
    for (const [, r] of n.plugins) n.canvas.drawPlugin(r, e);
    for (const r of this._zArray) r.draw(e);
  }
  filter(e) {
    return this._array.filter(e);
  }
  find(e) {
    return this._array.find(e);
  }
  handleClickMode(e) {
    this._interactionManager.handleClickMode(e);
  }
  init() {
    var r;
    const e = this._container,
      n = e.actualOptions;
    (this.lastZIndex = 0), (this.needsSort = !1);
    let i = !1;
    (this.updaters = this._engine.plugins.getUpdaters(e, !0)),
      this._interactionManager.init();
    for (const [, s] of e.plugins)
      if (
        (s.particlesInitialization !== void 0 &&
          (i = s.particlesInitialization()),
        i)
      )
        break;
    this._interactionManager.init();
    for (const [, s] of e.pathGenerators) s.init(e);
    if ((this.addManualParticles(), !i)) {
      for (const s in n.particles.groups) {
        const o = n.particles.groups[s];
        for (
          let a = this.count, l = 0;
          l < ((r = o.number) == null ? void 0 : r.value) &&
          a < n.particles.number.value;
          a++, l++
        )
          this.addParticle(void 0, o, s);
      }
      for (let s = this.count; s < n.particles.number.value; s++)
        this.addParticle();
    }
  }
  push(e, n, i, r) {
    this.pushing = !0;
    for (let s = 0; s < e; s++)
      this.addParticle(n == null ? void 0 : n.position, i, r);
    this.pushing = !1;
  }
  async redraw() {
    this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
  }
  remove(e, n, i) {
    this.removeAt(this._array.indexOf(e), void 0, n, i);
  }
  removeAt(e, n = 1, i, r) {
    if (e < 0 || e > this.count) return;
    let s = 0;
    for (let o = e; s < n && o < this.count; o++) {
      const a = this._array[o];
      if (!a || a.group !== i) continue;
      a.destroy(r), this._array.splice(o--, 1);
      const l = this._zArray.indexOf(a);
      this._zArray.splice(l, 1),
        this.pool.push(a),
        s++,
        this._engine.dispatchEvent("particleRemoved", {
          container: this._container,
          data: { particle: a },
        });
    }
  }
  removeQuantity(e, n) {
    this.removeAt(0, e, n);
  }
  setDensity() {
    const e = this._container.actualOptions,
      n = e.particles.groups;
    for (const i in n) this._applyDensity(n[i], 0, i);
    this._applyDensity(e.particles, e.manualParticles.length);
  }
  async update(e) {
    const n = this._container,
      i = new Set();
    for (const [, r] of n.pathGenerators) r.update();
    for (const [, r] of n.plugins) r.update && r.update(e);
    for (const r of this._array) {
      const s = n.canvas.resizeFactor;
      s &&
        !r.ignoresResizeRatio &&
        ((r.position.x *= s.width),
        (r.position.y *= s.height),
        (r.initialPosition.x *= s.width),
        (r.initialPosition.y *= s.height)),
        (r.ignoresResizeRatio = !1),
        await this._interactionManager.reset(r);
      for (const [, o] of this._container.plugins) {
        if (r.destroyed) break;
        o.particleUpdate && o.particleUpdate(r, e);
      }
      for (const o of this.movers) o.isEnabled(r) && o.move(r, e);
      if (r.destroyed) {
        i.add(r);
        continue;
      }
      this.quadTree.insert(new sC(r.getPosition(), r));
    }
    (this._array = this._array.filter((r) => !i.has(r))),
      await this._interactionManager.externalInteract(e);
    for (const r of this._array) {
      for (const s of this.updaters) s.update(r, e);
      !r.destroyed &&
        !r.spawning &&
        (await this._interactionManager.particlesInteract(r, e));
    }
    delete n.canvas.resizeFactor;
  }
};
class aC {
  constructor(e) {
    this.container = e;
  }
  init() {
    const e = this.container,
      n = e.actualOptions;
    (this.pixelRatio = !n.detectRetina || Kn() ? 1 : window.devicePixelRatio),
      (this.reduceFactor = 1);
    const i = this.pixelRatio;
    if (e.canvas.element) {
      const s = e.canvas.element;
      (e.canvas.size.width = s.offsetWidth * i),
        (e.canvas.size.height = s.offsetHeight * i);
    }
    const r = n.particles;
    (this.attractDistance = N(r.move.attract.distance) * i),
      (this.sizeAnimationSpeed = N(r.size.animation.speed) * i),
      (this.maxSpeed = N(r.move.gravity.maxSpeed) * i);
  }
  initParticle(e) {
    const n = e.options,
      i = this.pixelRatio,
      r = n.move.distance,
      s = e.retina;
    (s.attractDistance = N(n.move.attract.distance) * i),
      (s.moveDrift = N(n.move.drift) * i),
      (s.moveSpeed = N(n.move.speed) * i),
      (s.sizeAnimationSpeed = N(n.size.animation.speed) * i);
    const o = s.maxDistance;
    (o.horizontal = r.horizontal !== void 0 ? r.horizontal * i : void 0),
      (o.vertical = r.vertical !== void 0 ? r.vertical * i : void 0),
      (s.maxSpeed = N(n.move.gravity.maxSpeed) * i);
  }
}
function xe(t) {
  return t && !t.destroyed;
}
function Pi(t, e, ...n) {
  const i = new nC(t, e);
  return $y(i, ...n), i;
}
const lC = "default",
  yh = {
    generate: (t) => t.velocity,
    init: () => {},
    update: () => {},
    reset: () => {},
  };
let uC = class {
  constructor(e, n, i) {
    (this.id = n),
      (this._intersectionManager = (r) => {
        if (!(!xe(this) || !this.actualOptions.pauseOnOutsideViewport))
          for (const s of r)
            s.target === this.interactivity.element &&
              (s.isIntersecting ? this.play : this.pause)();
      }),
      (this._engine = e),
      (this.fpsLimit = 120),
      (this.smooth = !1),
      (this._delay = 0),
      (this._duration = 0),
      (this._lifeTime = 0),
      (this._firstStart = !0),
      (this.started = !1),
      (this.destroyed = !1),
      (this._paused = !0),
      (this.lastFrameTime = 0),
      (this.zLayers = 100),
      (this.pageHidden = !1),
      (this._sourceOptions = i),
      (this._initialSourceOptions = i),
      (this.retina = new aC(this)),
      (this.canvas = new f4(this)),
      (this.particles = new oC(this._engine, this)),
      (this.frameManager = new m4(this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.drawers = new Map()),
      (this._options = Pi(this._engine, this)),
      (this.actualOptions = Pi(this._engine, this)),
      (this._eventListeners = new p4(this)),
      typeof IntersectionObserver < "u" &&
        IntersectionObserver &&
        (this._intersectionObserver = new IntersectionObserver((r) =>
          this._intersectionManager(r),
        )),
      this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(e) {
    if (!xe(this)) return;
    const n = this.interactivity.element;
    if (!n) return;
    const i = (d, f, p) => {
        if (!xe(this)) return;
        const g = this.retina.pixelRatio,
          m = { x: f.x * g, y: f.y * g },
          b = this.particles.quadTree.queryCircle(m, p * g);
        e(d, b);
      },
      r = (d) => {
        if (!xe(this)) return;
        const f = d,
          p = { x: f.offsetX || f.clientX, y: f.offsetY || f.clientY };
        i(d, p, 1);
      },
      s = () => {
        xe(this) && ((u = !0), (c = !1));
      },
      o = () => {
        xe(this) && (c = !0);
      },
      a = (d) => {
        if (xe(this)) {
          if (u && !c) {
            const f = d;
            let p = f.touches[f.touches.length - 1];
            if (!p && ((p = f.changedTouches[f.changedTouches.length - 1]), !p))
              return;
            const g = this.canvas.element,
              m = g ? g.getBoundingClientRect() : void 0,
              b = {
                x: p.clientX - (m ? m.left : 0),
                y: p.clientY - (m ? m.top : 0),
              };
            i(d, b, Math.max(p.radiusX, p.radiusY));
          }
          (u = !1), (c = !1);
        }
      },
      l = () => {
        xe(this) && ((u = !1), (c = !1));
      };
    let u = !1,
      c = !1;
    n.addEventListener("click", r),
      n.addEventListener("touchstart", s),
      n.addEventListener("touchmove", o),
      n.addEventListener("touchend", a),
      n.addEventListener("touchcancel", l);
  }
  addLifeTime(e) {
    this._lifeTime += e;
  }
  addPath(e, n, i = !1) {
    return !xe(this) || (!i && this.pathGenerators.has(e))
      ? !1
      : (this.pathGenerators.set(e, n ?? yh), !0);
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  destroy() {
    if (!xe(this)) return;
    this.stop(), this.particles.destroy(), this.canvas.destroy();
    for (const [, i] of this.drawers) i.destroy && i.destroy(this);
    for (const i of this.drawers.keys()) this.drawers.delete(i);
    this._engine.plugins.destroy(this), (this.destroyed = !0);
    const e = this._engine.dom(),
      n = e.findIndex((i) => i === this);
    n >= 0 && e.splice(n, 1),
      this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(e) {
    if (!xe(this)) return;
    let n = e;
    this._drawAnimationFrame = X3()(async (i) => {
      n && ((this.lastFrameTime = void 0), (n = !1)),
        await this.frameManager.nextFrame(i);
    });
  }
  exportConfiguration() {
    return JSON.stringify(
      this.actualOptions,
      (e, n) => {
        if (!e.startsWith("_")) return n;
      },
      2,
    );
  }
  exportImage(e, n, i) {
    const r = this.canvas.element;
    r && r.toBlob(e, n ?? "image/png", i);
  }
  exportImg(e) {
    this.exportImage(e);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && xe(this);
  }
  handleClickMode(e) {
    if (xe(this)) {
      this.particles.handleClickMode(e);
      for (const [, n] of this.plugins)
        n.handleClickMode && n.handleClickMode(e);
    }
  }
  async init() {
    if (!xe(this)) return;
    const e = this._engine.plugins.getSupportedShapes();
    for (const i of e) {
      const r = this._engine.plugins.getShapeDrawer(i);
      r && this.drawers.set(i, r);
    }
    (this._options = Pi(
      this._engine,
      this,
      this._initialSourceOptions,
      this.sourceOptions,
    )),
      (this.actualOptions = Pi(this._engine, this, this._options));
    const n = this._engine.plugins.getAvailablePlugins(this);
    for (const [i, r] of n) this.plugins.set(i, r);
    this.retina.init(),
      await this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize(),
      (this.zLayers = this.actualOptions.zLayers),
      (this._duration = N(this.actualOptions.duration) * 1e3),
      (this._delay = N(this.actualOptions.delay) * 1e3),
      (this._lifeTime = 0),
      (this.fpsLimit =
        this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120),
      (this.smooth = this.actualOptions.smooth);
    for (const [, i] of this.drawers) i.init && (await i.init(this));
    for (const [, i] of this.plugins) i.init && (await i.init());
    this._engine.dispatchEvent("containerInit", { container: this }),
      this.particles.init(),
      this.particles.setDensity();
    for (const [, i] of this.plugins) i.particlesSetup && i.particlesSetup();
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(e) {
    xe(this) && ((this._currentTheme = e), await this.refresh());
  }
  pause() {
    if (
      xe(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (G3()(this._drawAnimationFrame), delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const [, e] of this.plugins) e.pause && e.pause();
      this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
  }
  play(e) {
    if (!xe(this)) return;
    const n = this._paused || e;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = !1;
      return;
    }
    if ((this._paused && (this._paused = !1), n))
      for (const [, i] of this.plugins) i.play && i.play();
    this._engine.dispatchEvent("containerPlay", { container: this }),
      this.draw(n || !1);
  }
  async refresh() {
    if (xe(this)) return this.stop(), this.start();
  }
  async reset() {
    if (xe(this))
      return (
        (this._initialSourceOptions = void 0),
        (this._options = Pi(this._engine, this)),
        (this.actualOptions = Pi(this._engine, this, this._options)),
        this.refresh()
      );
  }
  setNoise(e, n, i) {
    xe(this) && this.setPath(e, n, i);
  }
  setPath(e, n, i) {
    if (!e || !xe(this)) return;
    const r = { ...yh };
    if (typeof e == "function")
      (r.generate = e), n && (r.init = n), i && (r.update = i);
    else {
      const s = r;
      (r.generate = e.generate || s.generate),
        (r.init = e.init || s.init),
        (r.update = e.update || s.update);
    }
    this.addPath(lC, r, !0);
  }
  async start() {
    !xe(this) ||
      this.started ||
      (await this.init(),
      (this.started = !0),
      await new Promise((e) => {
        this._delayTimeout = setTimeout(async () => {
          this._eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.observe(this.interactivity.element);
          for (const [, n] of this.plugins) n.start && (await n.start());
          this._engine.dispatchEvent("containerStarted", { container: this }),
            this.play(),
            e();
        }, this._delay);
      }));
  }
  stop() {
    if (!(!xe(this) || !this.started)) {
      this._delayTimeout &&
        (clearTimeout(this._delayTimeout), delete this._delayTimeout),
        (this._firstStart = !0),
        (this.started = !1),
        this._eventListeners.removeListeners(),
        this.pause(),
        this.particles.clear(),
        this.canvas.stop(),
        this.interactivity.element instanceof HTMLElement &&
          this._intersectionObserver &&
          this._intersectionObserver.unobserve(this.interactivity.element);
      for (const [, e] of this.plugins) e.stop && e.stop();
      for (const e of this.plugins.keys()) this.plugins.delete(e);
      (this._sourceOptions = this._options),
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const e = this.actualOptions.setResponsive(
      this.canvas.size.width,
      this.retina.pixelRatio,
      this._options,
    );
    return (
      this.actualOptions.setTheme(this._currentTheme),
      this.responsiveMaxWidth === e ? !1 : ((this.responsiveMaxWidth = e), !0)
    );
  }
};
async function cC(t, e) {
  const n = St(t, e);
  if (!n) return;
  const i = await fetch(n);
  if (i.ok) return i.json();
  console.error(`${qt} ${i.status} while retrieving config file`);
}
class dC {
  constructor(e) {
    this._engine = e;
  }
  load(e, n, i) {
    const r = { index: i, remote: !1 };
    return (
      typeof e == "string" ? (r.tagId = e) : (r.options = e),
      typeof n == "number" ? (r.index = n) : (r.options = n ?? r.options),
      this.loadOptions(r)
    );
  }
  async loadJSON(e, n, i) {
    let r, s;
    return (
      typeof n == "number" || n === void 0 ? (r = e) : ((s = e), (r = n)),
      this.loadRemoteOptions({ tagId: s, url: r, index: i, remote: !0 })
    );
  }
  async loadOptions(e) {
    const n = e.tagId ?? `tsparticles${Math.floor(K() * 1e4)}`,
      { index: i, url: r, remote: s } = e,
      o = s ? await cC(r, i) : e.options;
    let a = e.element ?? document.getElementById(n);
    a ||
      ((a = document.createElement("div")),
      (a.id = n),
      document.body.append(a));
    const l = St(o, i),
      u = this._engine.dom(),
      c = u.findIndex((p) => p.id === n);
    if (c >= 0) {
      const p = this._engine.domItem(c);
      p && !p.destroyed && (p.destroy(), u.splice(c, 1));
    }
    let d;
    if (a.tagName.toLowerCase() === "canvas")
      (d = a), (d.dataset[Zr] = "false");
    else {
      const p = a.getElementsByTagName("canvas");
      p.length
        ? ((d = p[0]), (d.dataset[Zr] = "false"))
        : ((d = document.createElement("canvas")),
          (d.dataset[Zr] = "true"),
          a.appendChild(d));
    }
    d.style.width || (d.style.width = "100%"),
      d.style.height || (d.style.height = "100%");
    const f = new uC(this._engine, n, l);
    return (
      c >= 0 ? u.splice(c, 0, f) : u.push(f),
      f.canvas.loadCanvas(d),
      await f.start(),
      f
    );
  }
  async loadRemoteOptions(e) {
    return this.loadOptions(e);
  }
  async set(e, n, i, r) {
    const s = { index: r, remote: !1 };
    return (
      typeof e == "string" ? (s.tagId = e) : (s.element = e),
      n instanceof HTMLElement ? (s.element = n) : (s.options = n),
      typeof i == "number" ? (s.index = i) : (s.options = i ?? s.options),
      this.loadOptions(s)
    );
  }
  async setJSON(e, n, i, r) {
    let s, o, a, l;
    return (
      e instanceof HTMLElement
        ? ((l = e), (s = n), (a = i))
        : ((o = e), (l = n), (s = i), (a = r)),
      this.loadRemoteOptions({
        tagId: o,
        url: s,
        index: a,
        element: l,
        remote: !0,
      })
    );
  }
}
function nu(t, e, n, i = !1) {
  let r = e.get(t);
  return (!r || i) && ((r = [...n.values()].map((s) => s(t))), e.set(t, r)), r;
}
class fC {
  constructor(e) {
    (this._engine = e),
      (this.plugins = []),
      (this._initializers = {
        interactors: new Map(),
        movers: new Map(),
        updaters: new Map(),
      }),
      (this.interactors = new Map()),
      (this.movers = new Map()),
      (this.updaters = new Map()),
      (this.presets = new Map()),
      (this.drawers = new Map()),
      (this.pathGenerators = new Map());
  }
  addInteractor(e, n) {
    this._initializers.interactors.set(e, n);
  }
  addParticleMover(e, n) {
    this._initializers.movers.set(e, n);
  }
  addParticleUpdater(e, n) {
    this._initializers.updaters.set(e, n);
  }
  addPathGenerator(e, n) {
    this.getPathGenerator(e) || this.pathGenerators.set(e, n);
  }
  addPlugin(e) {
    this.getPlugin(e.id) || this.plugins.push(e);
  }
  addPreset(e, n, i = !1) {
    (i || !this.getPreset(e)) && this.presets.set(e, n);
  }
  addShapeDrawer(e, n) {
    ve(e, (i) => {
      this.getShapeDrawer(i) || this.drawers.set(i, n);
    });
  }
  destroy(e) {
    this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e);
  }
  getAvailablePlugins(e) {
    const n = new Map();
    for (const i of this.plugins)
      i.needsPlugin(e.actualOptions) && n.set(i.id, i.getPlugin(e));
    return n;
  }
  getInteractors(e, n = !1) {
    return nu(e, this.interactors, this._initializers.interactors, n);
  }
  getMovers(e, n = !1) {
    return nu(e, this.movers, this._initializers.movers, n);
  }
  getPathGenerator(e) {
    return this.pathGenerators.get(e);
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.id === e);
  }
  getPreset(e) {
    return this.presets.get(e);
  }
  getShapeDrawer(e) {
    return this.drawers.get(e);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(e, n = !1) {
    return nu(e, this.updaters, this._initializers.updaters, n);
  }
  loadOptions(e, n) {
    for (const i of this.plugins) i.loadOptions(e, n);
  }
  loadParticlesOptions(e, n, ...i) {
    const r = this.updaters.get(e);
    if (r) for (const s of r) s.loadOptions && s.loadOptions(n, ...i);
  }
}
class pC {
  constructor() {
    (this._configs = new Map()),
      (this._domArray = []),
      (this._eventDispatcher = new A3()),
      (this._initialized = !1),
      (this._loader = new dC(this)),
      (this.plugins = new fC(this));
  }
  get configs() {
    const e = {};
    for (const [n, i] of this._configs) e[n] = i;
    return e;
  }
  get version() {
    return "2.10.1";
  }
  addConfig(e, n) {
    typeof e == "string"
      ? n && ((n.name = e), this._configs.set(e, n))
      : this._configs.set(e.name ?? "default", e);
  }
  addEventListener(e, n) {
    this._eventDispatcher.addEventListener(e, n);
  }
  async addInteractor(e, n) {
    this.plugins.addInteractor(e, n), await this.refresh();
  }
  async addMover(e, n) {
    this.plugins.addParticleMover(e, n), await this.refresh();
  }
  async addParticleUpdater(e, n) {
    this.plugins.addParticleUpdater(e, n), await this.refresh();
  }
  async addPathGenerator(e, n) {
    this.plugins.addPathGenerator(e, n), await this.refresh();
  }
  async addPlugin(e) {
    this.plugins.addPlugin(e), await this.refresh();
  }
  async addPreset(e, n, i = !1) {
    this.plugins.addPreset(e, n, i), await this.refresh();
  }
  async addShape(e, n, i, r, s) {
    let o;
    typeof n == "function"
      ? (o = { afterEffect: r, destroy: s, draw: n, init: i })
      : (o = n),
      this.plugins.addShapeDrawer(e, o),
      await this.refresh();
  }
  dispatchEvent(e, n) {
    this._eventDispatcher.dispatchEvent(e, n);
  }
  dom() {
    return this._domArray;
  }
  domItem(e) {
    const n = this.dom(),
      i = n[e];
    if (!i || i.destroyed) {
      n.splice(e, 1);
      return;
    }
    return i;
  }
  init() {
    this._initialized || (this._initialized = !0);
  }
  async load(e, n) {
    return this._loader.load(e, n);
  }
  async loadFromArray(e, n, i) {
    return this._loader.load(e, n, i);
  }
  async loadJSON(e, n, i) {
    return this._loader.loadJSON(e, n, i);
  }
  async refresh() {
    this.dom().forEach((e) => e.refresh());
  }
  removeEventListener(e, n) {
    this._eventDispatcher.removeEventListener(e, n);
  }
  async set(e, n, i) {
    return this._loader.set(e, n, i);
  }
  async setJSON(e, n, i, r) {
    return this._loader.setJSON(e, n, i, r);
  }
  setOnClickHandler(e) {
    const n = this.dom();
    if (!n.length)
      throw new Error(
        `${qt} can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()`,
      );
    for (const i of n) i.addClickHandler(e);
  }
}
class hC {
  constructor() {
    (this.key = "hsl"), (this.stringPrefix = "hsl");
  }
  handleColor(e) {
    const n = e.value,
      i = n.hsl ?? e.value;
    if (i.h !== void 0 && i.s !== void 0 && i.l !== void 0) return pr(i);
  }
  handleRangeColor(e) {
    const n = e.value,
      i = n.hsl ?? e.value;
    if (i.h !== void 0 && i.l !== void 0)
      return pr({ h: N(i.h), l: N(i.l), s: N(i.s) });
  }
  parseString(e) {
    if (!e.startsWith("hsl")) return;
    const n =
        /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      i = n.exec(e);
    return i
      ? t4({
          a: i.length > 4 ? xy(i[5]) : 1,
          h: parseInt(i[1], 10),
          l: parseInt(i[3], 10),
          s: parseInt(i[2], 10),
        })
      : void 0;
  }
}
class mC {
  constructor() {
    (this.key = "rgb"), (this.stringPrefix = "rgb");
  }
  handleColor(e) {
    const n = e.value,
      i = n.rgb ?? e.value;
    if (i.r !== void 0) return i;
  }
  handleRangeColor(e) {
    const n = e.value,
      i = n.rgb ?? e.value;
    if (i.r !== void 0) return { r: N(i.r), g: N(i.g), b: N(i.b) };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix)) return;
    const n =
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
      i = n.exec(e);
    return i
      ? {
          a: i.length > 4 ? xy(i[5]) : 1,
          b: parseInt(i[3], 10),
          g: parseInt(i[2], 10),
          r: parseInt(i[1], 10),
        }
      : void 0;
  }
}
class Xt {
  constructor(e) {
    (this.container = e), (this.type = "external");
  }
}
class Gd {
  constructor(e) {
    (this.container = e), (this.type = "particles");
  }
}
const gC = new mC(),
  yC = new hC();
Ty(gC);
Ty(yC);
const Yi = new pC();
Yi.init();
Kn() || (window.tsParticles = Yi);
var Kd = { exports: {} },
  Fy = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i();
  })(Io, function () {
    var n = typeof Promise == "function",
      i = typeof self == "object" ? self : Io,
      r = typeof Symbol < "u",
      s = typeof Map < "u",
      o = typeof Set < "u",
      a = typeof WeakMap < "u",
      l = typeof WeakSet < "u",
      u = typeof DataView < "u",
      c = r && typeof Symbol.iterator < "u",
      d = r && typeof Symbol.toStringTag < "u",
      f = o && typeof Set.prototype.entries == "function",
      p = s && typeof Map.prototype.entries == "function",
      g = f && Object.getPrototypeOf(new Set().entries()),
      m = p && Object.getPrototypeOf(new Map().entries()),
      b = c && typeof Array.prototype[Symbol.iterator] == "function",
      y = b && Object.getPrototypeOf([][Symbol.iterator]()),
      h = c && typeof String.prototype[Symbol.iterator] == "function",
      v = h && Object.getPrototypeOf(""[Symbol.iterator]()),
      w = 8,
      x = -1;
    function k(S) {
      var P = typeof S;
      if (P !== "object") return P;
      if (S === null) return "null";
      if (S === i) return "global";
      if (Array.isArray(S) && (d === !1 || !(Symbol.toStringTag in S)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && S === window.location)
          return "Location";
        if (typeof window.document == "object" && S === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (
            typeof window.navigator.mimeTypes == "object" &&
            S === window.navigator.mimeTypes
          )
            return "MimeTypeArray";
          if (
            typeof window.navigator.plugins == "object" &&
            S === window.navigator.plugins
          )
            return "PluginArray";
        }
        if (
          (typeof window.HTMLElement == "function" ||
            typeof window.HTMLElement == "object") &&
          S instanceof window.HTMLElement
        ) {
          if (S.tagName === "BLOCKQUOTE") return "HTMLQuoteElement";
          if (S.tagName === "TD") return "HTMLTableDataCellElement";
          if (S.tagName === "TH") return "HTMLTableHeaderCellElement";
        }
      }
      var E = d && S[Symbol.toStringTag];
      if (typeof E == "string") return E;
      var A = Object.getPrototypeOf(S);
      return A === RegExp.prototype
        ? "RegExp"
        : A === Date.prototype
        ? "Date"
        : n && A === Promise.prototype
        ? "Promise"
        : o && A === Set.prototype
        ? "Set"
        : s && A === Map.prototype
        ? "Map"
        : l && A === WeakSet.prototype
        ? "WeakSet"
        : a && A === WeakMap.prototype
        ? "WeakMap"
        : u && A === DataView.prototype
        ? "DataView"
        : s && A === m
        ? "Map Iterator"
        : o && A === g
        ? "Set Iterator"
        : b && A === y
        ? "Array Iterator"
        : h && A === v
        ? "String Iterator"
        : A === null
        ? "Object"
        : Object.prototype.toString.call(S).slice(w, x);
    }
    return k;
  });
})(Fy);
var vC = Fy.exports;
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */ var vh = vC;
function Ny() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Ny.prototype = {
  get: function (e) {
    return e[this._key];
  },
  set: function (e, n) {
    Object.isExtensible(e) &&
      Object.defineProperty(e, this._key, { value: n, configurable: !0 });
  },
};
var Yd = typeof WeakMap == "function" ? WeakMap : Ny;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
 */ function wh(t, e, n) {
  if (!n || gr(t) || gr(e)) return null;
  var i = n.get(t);
  if (i) {
    var r = i.get(e);
    if (typeof r == "boolean") return r;
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
 */ function ao(t, e, n, i) {
  if (!(!n || gr(t) || gr(e))) {
    var r = n.get(t);
    r ? r.set(e, i) : ((r = new Yd()), r.set(e, i), n.set(t, r));
  }
}
/*!
 * Primary Export
 */ Kd.exports = Qa;
Kd.exports.MemoizeMap = Yd;
function Qa(t, e, n) {
  if (n && n.comparator) return bh(t, e, n);
  var i = By(t, e);
  return i !== null ? i : bh(t, e, n);
}
function By(t, e) {
  return t === e
    ? t !== 0 || 1 / t === 1 / e
    : t !== t && e !== e
    ? !0
    : gr(t) || gr(e)
    ? !1
    : null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/ function bh(t, e, n) {
  (n = n || {}), (n.memoize = n.memoize === !1 ? !1 : n.memoize || new Yd());
  var i = n && n.comparator,
    r = wh(t, e, n.memoize);
  if (r !== null) return r;
  var s = wh(e, t, n.memoize);
  if (s !== null) return s;
  if (i) {
    var o = i(t, e);
    if (o === !1 || o === !0) return ao(t, e, n.memoize, o), o;
    var a = By(t, e);
    if (a !== null) return a;
  }
  var l = vh(t);
  if (l !== vh(e)) return ao(t, e, n.memoize, !1), !1;
  ao(t, e, n.memoize, !0);
  var u = wC(t, e, l, n);
  return ao(t, e, n.memoize, u), u;
}
function wC(t, e, n, i) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return Qa(t.valueOf(), e.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return t === e;
    case "Error":
      return Hy(t, e, ["name", "message", "code"], i);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return ci(t, e, i);
    case "RegExp":
      return bC(t, e);
    case "Generator":
      return xC(t, e, i);
    case "DataView":
      return ci(new Uint8Array(t.buffer), new Uint8Array(e.buffer), i);
    case "ArrayBuffer":
      return ci(new Uint8Array(t), new Uint8Array(e), i);
    case "Set":
      return xh(t, e, i);
    case "Map":
      return xh(t, e, i);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return t.equals(e);
    case "Temporal.Duration":
      return t.total("nanoseconds") === e.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return t.toString() === e.toString();
    default:
      return kC(t, e, i);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */ function bC(t, e) {
  return t.toString() === e.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function xh(t, e, n) {
  if (t.size !== e.size) return !1;
  if (t.size === 0) return !0;
  var i = [],
    r = [];
  return (
    t.forEach(function (o, a) {
      i.push([o, a]);
    }),
    e.forEach(function (o, a) {
      r.push([o, a]);
    }),
    ci(i.sort(), r.sort(), n)
  );
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function ci(t, e, n) {
  var i = t.length;
  if (i !== e.length) return !1;
  if (i === 0) return !0;
  for (var r = -1; ++r < i; ) if (Qa(t[r], e[r], n) === !1) return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function xC(t, e, n) {
  return ci(yc(t), yc(e), n);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */ function SC(t) {
  return (
    typeof Symbol < "u" &&
    typeof t == "object" &&
    typeof Symbol.iterator < "u" &&
    typeof t[Symbol.iterator] == "function"
  );
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */ function Sh(t) {
  if (SC(t))
    try {
      return yc(t[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */ function yc(t) {
  for (var e = t.next(), n = [e.value]; e.done === !1; )
    (e = t.next()), n.push(e.value);
  return n;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */ function kh(t) {
  var e = [];
  for (var n in t) e.push(n);
  return e;
}
function _h(t) {
  for (
    var e = [], n = Object.getOwnPropertySymbols(t), i = 0;
    i < n.length;
    i += 1
  ) {
    var r = n[i];
    Object.getOwnPropertyDescriptor(t, r).enumerable && e.push(r);
  }
  return e;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function Hy(t, e, n, i) {
  var r = n.length;
  if (r === 0) return !0;
  for (var s = 0; s < r; s += 1) if (Qa(t[n[s]], e[n[s]], i) === !1) return !1;
  return !0;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function kC(t, e, n) {
  var i = kh(t),
    r = kh(e),
    s = _h(t),
    o = _h(e);
  if (((i = i.concat(s)), (r = r.concat(o)), i.length && i.length === r.length))
    return ci(Ch(i).sort(), Ch(r).sort()) === !1 ? !1 : Hy(t, e, i, n);
  var a = Sh(t),
    l = Sh(e);
  return a.length && a.length === l.length
    ? (a.sort(), l.sort(), ci(a, l, n))
    : i.length === 0 && a.length === 0 && r.length === 0 && l.length === 0;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */ function gr(t) {
  return t === null || typeof t != "object";
}
function Ch(t) {
  return t.map(function (n) {
    return typeof n == "symbol" ? n.toString() : n;
  });
}
var _C = Kd.exports;
const CC = _s(_C),
  Wy = "tsparticles";
let Qd = class Vy extends j.Component {
  constructor(e) {
    super(e), (this.state = { init: !1, library: void 0 });
  }
  destroy() {
    this.state.library &&
      (this.state.library.destroy(), this.setState({ library: void 0 }));
  }
  shouldComponentUpdate(e) {
    return !CC(e, this.props);
  }
  componentDidUpdate() {
    this.refresh();
  }
  forceUpdate() {
    this.refresh().then(() => {
      super.forceUpdate();
    });
  }
  componentDidMount() {
    (async () => (
      this.props.init && (await this.props.init(Yi)),
      this.setState({ init: !0 }, async () => {
        await this.loadParticles();
      })
    ))();
  }
  componentWillUnmount() {
    this.destroy();
  }
  render() {
    const {
      width: e,
      height: n,
      className: i,
      canvasClassName: r,
      id: s,
    } = this.props;
    return de.createElement(
      "div",
      { className: i, id: s },
      de.createElement("canvas", {
        className: r,
        style: { ...this.props.style, width: e, height: n },
      }),
    );
  }
  async refresh() {
    this.destroy(), await this.loadParticles();
  }
  async loadParticles() {
    if (!this.state.init) return;
    const e = async (r) => {
        this.props.container && (this.props.container.current = r),
          this.setState({ library: r }),
          this.props.loaded && (await this.props.loaded(r));
      },
      n = this.props.id ?? Vy.defaultProps.id ?? Wy,
      i = this.props.url
        ? await Yi.loadJSON(n, this.props.url)
        : await Yi.load(n, this.props.params ?? this.props.options);
    await e(i);
  }
};
Qd.defaultProps = {
  width: "100%",
  height: "100%",
  options: {},
  style: {},
  url: void 0,
  id: Wy,
};
class EC {
  constructor() {
    (this.radius = 0), (this.mass = 0);
  }
  load(e) {
    e &&
      (e.mass !== void 0 && (this.mass = e.mass),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class PC extends Dt {
  constructor() {
    super(), (this.density = 5), (this.value = 50), (this.limit = new EC());
  }
  load(e) {
    e &&
      (super.load(e),
      e.density !== void 0 && (this.density = e.density),
      typeof e.limit == "number"
        ? (this.limit.radius = e.limit)
        : this.limit.load(e.limit));
  }
}
class ha {
  constructor() {
    (this.color = new ze()),
      (this.color.value = "#000000"),
      (this.draggable = !1),
      (this.opacity = 1),
      (this.destroy = !0),
      (this.orbits = !1),
      (this.size = new PC());
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.draggable !== void 0 && (this.draggable = e.draggable),
      (this.name = e.name),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = X(e.position.x)),
        e.position.y !== void 0 && (this.position.y = X(e.position.y))),
      e.size !== void 0 && this.size.load(e.size),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.orbits !== void 0 && (this.orbits = e.orbits));
  }
}
class TC {
  constructor(e, n, i, r) {
    var o;
    (this.absorbers = e),
      (this.container = n),
      (this._calcPosition = () => {
        const a = by({
          size: this.container.canvas.size,
          position: this.options.position,
        });
        return fe.create(a.x, a.y);
      }),
      (this._updateParticlePosition = (a, l) => {
        if (a.destroyed) return;
        const u = this.container,
          c = u.canvas.size;
        if (a.needsNewPosition) {
          const d = wy({ size: c });
          a.position.setTo(d),
            a.velocity.setTo(a.initialVelocity),
            (a.absorberOrbit = void 0),
            (a.needsNewPosition = !1);
        }
        if (this.options.orbits) {
          if (
            (a.absorberOrbit === void 0 &&
              ((a.absorberOrbit = fe.create(0, 0)),
              (a.absorberOrbit.length = it(a.getPosition(), this.position)),
              (a.absorberOrbit.angle = K() * Math.PI * 2)),
            a.absorberOrbit.length <= this.size && !this.options.destroy)
          ) {
            const m = Math.min(c.width, c.height);
            a.absorberOrbit.length = m * (1 + (K() * 0.2 - 0.1));
          }
          a.absorberOrbitDirection === void 0 &&
            (a.absorberOrbitDirection =
              a.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
          const d = a.absorberOrbit.length,
            f = a.absorberOrbit.angle,
            p = a.absorberOrbitDirection;
          a.velocity.setTo(fe.origin);
          const g = {
            x: p === "clockwise" ? Math.cos : Math.sin,
            y: p === "clockwise" ? Math.sin : Math.cos,
          };
          (a.position.x = this.position.x + d * g.x(f)),
            (a.position.y = this.position.y + d * g.y(f)),
            (a.absorberOrbit.length -= l.length),
            (a.absorberOrbit.angle +=
              (((a.retina.moveSpeed ?? 0) * u.retina.pixelRatio) / 100) *
              u.retina.reduceFactor);
        } else {
          const d = fe.origin;
          (d.length = l.length), (d.angle = l.angle), a.velocity.addTo(d);
        }
      }),
      (this.initialPosition = r ? fe.create(r.x, r.y) : void 0),
      i instanceof ha
        ? (this.options = i)
        : ((this.options = new ha()), this.options.load(i)),
      (this.dragging = !1),
      (this.name = this.options.name),
      (this.opacity = this.options.opacity),
      (this.size = N(this.options.size.value) * n.retina.pixelRatio),
      (this.mass =
        this.size * this.options.size.density * n.retina.reduceFactor);
    const s = this.options.size.limit;
    (this.limit = {
      radius: s.radius * n.retina.pixelRatio * n.retina.reduceFactor,
      mass: s.mass,
    }),
      (this.color = Ot(this.options.color) ?? { b: 0, g: 0, r: 0 }),
      (this.position =
        ((o = this.initialPosition) == null ? void 0 : o.copy()) ??
        this._calcPosition());
  }
  attract(e) {
    const n = this.container,
      i = this.options;
    if (i.draggable) {
      const u = n.interactivity.mouse;
      u.clicking && u.downPosition
        ? it(this.position, u.downPosition) <= this.size && (this.dragging = !0)
        : (this.dragging = !1),
        this.dragging &&
          u.position &&
          ((this.position.x = u.position.x), (this.position.y = u.position.y));
    }
    const r = e.getPosition(),
      { dx: s, dy: o, distance: a } = Je(this.position, r),
      l = fe.create(s, o);
    if (
      ((l.length = (this.mass / Math.pow(a, 2)) * n.retina.reduceFactor),
      a < this.size + e.getRadius())
    ) {
      const u = e.getRadius() * 0.033 * n.retina.pixelRatio;
      (this.size > e.getRadius() && a < this.size - e.getRadius()) ||
      (e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0)
        ? i.destroy
          ? e.destroy()
          : ((e.needsNewPosition = !0), this._updateParticlePosition(e, l))
        : (i.destroy && (e.size.value -= u),
          this._updateParticlePosition(e, l)),
        (this.limit.radius <= 0 || this.size < this.limit.radius) &&
          (this.size += u),
        (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
          (this.mass += u * this.options.size.density * n.retina.reduceFactor);
    } else this._updateParticlePosition(e, l);
  }
  draw(e) {
    e.translate(this.position.x, this.position.y),
      e.beginPath(),
      e.arc(0, 0, this.size, 0, Math.PI * 2, !1),
      e.closePath(),
      (e.fillStyle = ln(this.color, this.opacity)),
      e.fill();
  }
  resize() {
    const e = this.initialPosition;
    this.position =
      e && Ls(e, this.container.canvas.size, fe.origin)
        ? e
        : this._calcPosition();
  }
}
class zC {
  constructor(e) {
    (this.container = e),
      (this.array = []),
      (this.absorbers = []),
      (this.interactivityAbsorbers = []),
      (e.getAbsorber = (n) =>
        n === void 0 || typeof n == "number"
          ? this.array[n || 0]
          : this.array.find((i) => i.name === n)),
      (e.addAbsorber = (n, i) => this.addAbsorber(n, i));
  }
  addAbsorber(e, n) {
    const i = new TC(this, this.container, e, n);
    return this.array.push(i), i;
  }
  draw(e) {
    for (const n of this.array) n.draw(e);
  }
  handleClickMode(e) {
    const n = this.absorbers,
      i = this.interactivityAbsorbers;
    if (e === "absorber") {
      const r = St(i),
        s = r ?? St(n),
        o = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(s, o);
    }
  }
  async init() {
    (this.absorbers = this.container.actualOptions.absorbers),
      (this.interactivityAbsorbers =
        this.container.actualOptions.interactivity.modes.absorbers),
      ve(this.absorbers, (e) => {
        this.addAbsorber(e);
      });
  }
  particleUpdate(e) {
    for (const n of this.array) if ((n.attract(e), e.destroyed)) break;
  }
  removeAbsorber(e) {
    const n = this.array.indexOf(e);
    n >= 0 && this.array.splice(n, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
}
class AC {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(e) {
    return new zC(e);
  }
  loadOptions(e, n) {
    var i, r;
    (!this.needsPlugin(e) && !this.needsPlugin(n)) ||
      (n != null &&
        n.absorbers &&
        (e.absorbers = ve(n.absorbers, (s) => {
          const o = new ha();
          return o.load(s), o;
        })),
      (e.interactivity.modes.absorbers = ve(
        (r =
          (i = n == null ? void 0 : n.interactivity) == null
            ? void 0
            : i.modes) == null
          ? void 0
          : r.absorbers,
        (s) => {
          const o = new ha();
          return o.load(s), o;
        },
      )));
  }
  needsPlugin(e) {
    var i, r, s;
    if (!e) return !1;
    const n = e.absorbers;
    return n instanceof Array
      ? !!n.length
      : n
      ? !0
      : !!(
          (s =
            (r = (i = e.interactivity) == null ? void 0 : i.events) == null
              ? void 0
              : r.onClick) != null &&
          s.mode &&
          ye("absorber", e.interactivity.events.onClick.mode)
        );
  }
}
async function MC(t) {
  const e = new AC();
  await t.addPlugin(e);
}
class OC {
  load(e) {
    e &&
      (e.bottom !== void 0 && (this.bottom = X(e.bottom)),
      e.left !== void 0 && (this.left = X(e.left)),
      e.right !== void 0 && (this.right = X(e.right)),
      e.top !== void 0 && (this.top = X(e.top)));
  }
}
class IC extends Dt {
  constructor() {
    super(), (this.value = 3);
  }
}
class RC extends Dt {
  constructor() {
    super(), (this.value = { min: 4, max: 9 });
  }
}
class LC {
  constructor() {
    (this.count = 1),
      (this.factor = new IC()),
      (this.rate = new RC()),
      (this.sizeOffset = !0);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.count !== void 0 && (this.count = e.count),
      this.factor.load(e.factor),
      this.rate.load(e.rate),
      (this.particles = ve(e.particles, (n) => Oe({}, n))),
      e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset),
      e.colorOffset &&
        ((this.colorOffset = this.colorOffset ?? {}),
        e.colorOffset.h !== void 0 && (this.colorOffset.h = e.colorOffset.h),
        e.colorOffset.s !== void 0 && (this.colorOffset.s = e.colorOffset.s),
        e.colorOffset.l !== void 0 && (this.colorOffset.l = e.colorOffset.l)));
  }
}
class DC {
  constructor() {
    (this.bounds = new OC()), (this.mode = "none"), (this.split = new LC());
  }
  load(e) {
    e &&
      (e.mode && (this.mode = e.mode),
      e.bounds && this.bounds.load(e.bounds),
      this.split.load(e.split));
  }
}
function $C(t, e, n, i) {
  const r = n.options.destroy;
  if (!r) return;
  const s = r.split,
    o = Xd(t, e, n.options),
    a = kn(s.factor),
    l = n.getFillColor();
  s.color
    ? o.color.load(s.color)
    : s.colorOffset && l
    ? o.color.load({
        value: {
          hsl: {
            h: l.h + N(s.colorOffset.h ?? 0),
            s: l.s + N(s.colorOffset.s ?? 0),
            l: l.l + N(s.colorOffset.l ?? 0),
          },
        },
      })
    : o.color.load({ value: { hsl: n.getFillColor() } }),
    o.move.load({
      center: { x: n.position.x, y: n.position.y, mode: "precise" },
    }),
    typeof o.size.value == "number"
      ? (o.size.value /= a)
      : ((o.size.value.min /= a), (o.size.value.max /= a)),
    o.load(i);
  const u = s.sizeOffset ? X(-n.size.value, n.size.value) : 0,
    c = { x: n.position.x + Be(u), y: n.position.y + Be(u) };
  return e.particles.addParticle(c, o, n.group, (d) =>
    d.size.value < 0.5
      ? !1
      : ((d.velocity.length = Be(X(n.velocity.length, d.velocity.length))),
        (d.splitCount = (n.splitCount ?? 0) + 1),
        (d.unbreakable = !0),
        setTimeout(() => {
          d.unbreakable = !1;
        }, 500),
        !0),
  );
}
function jC(t, e, n) {
  const i = n.options.destroy;
  if (!i) return;
  const r = i.split;
  if (r.count >= 0 && (n.splitCount === void 0 || n.splitCount++ > r.count))
    return;
  const s = kn(r.rate),
    o = St(r.particles);
  for (let a = 0; a < s; a++) $C(t, e, n, o);
}
class FC {
  constructor(e, n) {
    (this.engine = e), (this.container = n);
  }
  init(e) {
    const n = this.container,
      i = e.options,
      r = i.destroy;
    if (!r) return;
    e.splitCount = 0;
    const s = r.bounds;
    e.destroyBounds || (e.destroyBounds = {});
    const { bottom: o, left: a, right: l, top: u } = s,
      { destroyBounds: c } = e,
      d = n.canvas.size;
    o && (c.bottom = (N(o) * d.height) / 100),
      a && (c.left = (N(a) * d.width) / 100),
      l && (c.right = (N(l) * d.width) / 100),
      u && (c.top = (N(u) * d.height) / 100);
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...n) {
    e.destroy || (e.destroy = new DC());
    for (const i of n) e.destroy.load(i == null ? void 0 : i.destroy);
  }
  particleDestroyed(e, n) {
    if (n) return;
    const i = e.options.destroy;
    i && i.mode === "split" && jC(this.engine, this.container, e);
  }
  update(e) {
    if (!this.isEnabled(e)) return;
    const n = e.getPosition(),
      i = e.destroyBounds;
    i &&
      ((i.bottom !== void 0 && n.y >= i.bottom) ||
        (i.left !== void 0 && n.x <= i.left) ||
        (i.right !== void 0 && n.x >= i.right) ||
        (i.top !== void 0 && n.y <= i.top)) &&
      e.destroy();
  }
}
async function NC(t) {
  await t.addParticleUpdater("destroy", (e) => new FC(t, e));
}
class BC {
  randomPosition(e, n, i) {
    const r = (d, f) => {
        const p = K() / 4,
          g = Math.atan((f / d) * Math.tan(2 * Math.PI * p)),
          m = K();
        return m < 0.25
          ? g
          : m < 0.5
          ? Math.PI - g
          : m < 0.75
          ? Math.PI + g
          : -g;
      },
      s = (d, f, p) =>
        (d * f) / Math.sqrt((f * Math.cos(p)) ** 2 + (d * Math.sin(p)) ** 2),
      [o, a] = [n.width / 2, n.height / 2],
      l = r(o, a),
      u = s(o, a, l),
      c = i ? u * Math.sqrt(K()) : u;
    return { x: e.x + c * Math.cos(l), y: e.y + c * Math.sin(l) };
  }
}
class HC {
  constructor() {
    this.wait = !1;
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = e.count),
      e.delay !== void 0 && (this.delay = e.delay),
      e.duration !== void 0 && (this.duration = e.duration),
      e.wait !== void 0 && (this.wait = e.wait));
  }
}
class WC {
  constructor() {
    (this.quantity = 1), (this.delay = 0.1);
  }
  load(e) {
    e !== void 0 &&
      (e.quantity !== void 0 && (this.quantity = X(e.quantity)),
      e.delay !== void 0 && (this.delay = X(e.delay)));
  }
}
class qy {
  constructor() {
    (this.mode = "percent"), (this.height = 0), (this.width = 0);
  }
  load(e) {
    e !== void 0 &&
      (e.mode !== void 0 && (this.mode = e.mode),
      e.height !== void 0 && (this.height = e.height),
      e.width !== void 0 && (this.width = e.width));
  }
}
class In {
  constructor() {
    (this.autoPlay = !0),
      (this.fill = !0),
      (this.life = new HC()),
      (this.rate = new WC()),
      (this.shape = "square"),
      (this.startCount = 0);
  }
  load(e) {
    e &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.size !== void 0 &&
        (this.size || (this.size = new qy()), this.size.load(e.size)),
      e.direction !== void 0 && (this.direction = e.direction),
      (this.domId = e.domId),
      e.fill !== void 0 && (this.fill = e.fill),
      this.life.load(e.life),
      (this.name = e.name),
      (this.particles = ve(e.particles, (n) => Oe({}, n))),
      this.rate.load(e.rate),
      e.shape !== void 0 && (this.shape = e.shape),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = X(e.position.x)),
        e.position.y !== void 0 && (this.position.y = X(e.position.y))),
      e.spawnColor !== void 0 &&
        (this.spawnColor === void 0 && (this.spawnColor = new mr()),
        this.spawnColor.load(e.spawnColor)),
      e.startCount !== void 0 && (this.startCount = e.startCount));
  }
}
class VC {
  constructor(e, n, i, r, s) {
    var a, l;
    (this.emitters = n),
      (this.container = i),
      (this._calcPosition = () =>
        by({
          size: this.container.canvas.size,
          position: this.options.position,
        })),
      (this._destroy = () => {
        this.emitters.removeEmitter(this),
          this._engine.dispatchEvent("emitterDestroyed", {
            container: this.container,
            data: { emitter: this },
          });
      }),
      (this._emit = () => {
        if (this._paused) return;
        const u = N(this.options.rate.quantity);
        this._emitParticles(u);
      }),
      (this._emitParticles = (u) => {
        var p, g;
        const c = this.getPosition(),
          d = this.getSize(),
          f = St(this._particlesOptions);
        for (let m = 0; m < u; m++) {
          const b = Oe({}, f);
          if (this.spawnColor) {
            const h =
              (p = this.options.spawnColor) == null ? void 0 : p.animation;
            h &&
              ((this.spawnColor.h = this._setColorAnimation(
                h.h,
                this.spawnColor.h,
                360,
              )),
              (this.spawnColor.s = this._setColorAnimation(
                h.s,
                this.spawnColor.s,
                100,
              )),
              (this.spawnColor.l = this._setColorAnimation(
                h.l,
                this.spawnColor.l,
                100,
              ))),
              b.color
                ? (b.color.value = this.spawnColor)
                : (b.color = { value: this.spawnColor });
          }
          if (!c) return;
          const y =
            ((g = this._shape) == null
              ? void 0
              : g.randomPosition(c, d, this.fill)) ?? c;
          this.container.particles.addParticle(y, b);
        }
      }),
      (this._prepareToDie = () => {
        var c;
        if (this._paused) return;
        const u = (c = this.options.life) == null ? void 0 : c.duration;
        this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal) &&
          u !== void 0 &&
          u > 0 &&
          (this._duration = u * 1e3);
      }),
      (this._setColorAnimation = (u, c, d) => {
        const f = this.container;
        if (!u.enable) return c;
        const p = Be(u.offset),
          g = N(this.options.rate.delay),
          m = (1e3 * g) / f.retina.reduceFactor,
          b = N(u.speed ?? 0);
        return (c + (b * f.fpsLimit) / m + p * 3.6) % d;
      }),
      (this._engine = e),
      (this._currentDuration = 0),
      (this._currentEmitDelay = 0),
      (this._currentSpawnDelay = 0),
      (this._initialPosition = s),
      r instanceof In
        ? (this.options = r)
        : ((this.options = new In()), this.options.load(r)),
      (this._spawnDelay =
        ((this.options.life.delay ?? 0) * 1e3) /
        this.container.retina.reduceFactor),
      (this.position = this._initialPosition ?? this._calcPosition()),
      (this.name = this.options.name),
      (this._shape =
        (a = this._engine.emitterShapeManager) == null
          ? void 0
          : a.getShape(this.options.shape)),
      console.log(this.options.shape, this._shape),
      (this.fill = this.options.fill),
      (this._firstSpawn = !this.options.life.wait),
      (this._startParticlesAdded = !1);
    let o = Oe({}, this.options.particles);
    o ?? (o = {}),
      o.move ?? (o.move = {}),
      (l = o.move).direction ?? (l.direction = this.options.direction),
      this.options.spawnColor &&
        (this.spawnColor = Yn(this.options.spawnColor)),
      (this._paused = !this.options.autoPlay),
      (this._particlesOptions = o),
      (this.size =
        this.options.size ??
        (() => {
          const u = new qy();
          return u.load({ height: 0, mode: "percent", width: 0 }), u;
        })()),
      (this._lifeCount = this.options.life.count ?? -1),
      (this._immortal = this._lifeCount <= 0),
      this._engine.dispatchEvent("emitterCreated", {
        container: i,
        data: { emitter: this },
      }),
      this.play();
  }
  externalPause() {
    (this._paused = !0), this.pause();
  }
  externalPlay() {
    (this._paused = !1), this.play();
  }
  getPosition() {
    if (this.options.domId) {
      const e = this.container,
        n = document.getElementById(this.options.domId);
      if (n) {
        const i = n.getBoundingClientRect();
        return {
          x: (i.x + i.width / 2) * e.retina.pixelRatio,
          y: (i.y + i.height / 2) * e.retina.pixelRatio,
        };
      }
    }
    return this.position;
  }
  getSize() {
    const e = this.container;
    if (this.options.domId) {
      const n = document.getElementById(this.options.domId);
      if (n) {
        const i = n.getBoundingClientRect();
        return {
          width: i.width * e.retina.pixelRatio,
          height: i.height * e.retina.pixelRatio,
        };
      }
    }
    return {
      width:
        this.size.mode === "percent"
          ? (e.canvas.size.width * this.size.width) / 100
          : this.size.width,
      height:
        this.size.mode === "percent"
          ? (e.canvas.size.height * this.size.height) / 100
          : this.size.height,
    };
  }
  pause() {
    this._paused || delete this._emitDelay;
  }
  play() {
    if (
      !this._paused &&
      this.container.retina.reduceFactor &&
      (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
      (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0))
    ) {
      if (this._emitDelay === void 0) {
        const e = N(this.options.rate.delay);
        this._emitDelay = (1e3 * e) / this.container.retina.reduceFactor;
      }
      (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
    }
  }
  resize() {
    const e = this._initialPosition;
    this.position =
      e && Ls(e, this.container.canvas.size, fe.origin)
        ? e
        : this._calcPosition();
  }
  update(e) {
    this._paused ||
      (this._firstSpawn &&
        ((this._firstSpawn = !1),
        (this._currentSpawnDelay = this._spawnDelay ?? 0),
        (this._currentEmitDelay = this._emitDelay ?? 0)),
      this._startParticlesAdded ||
        ((this._startParticlesAdded = !0),
        this._emitParticles(this.options.startCount)),
      this._duration !== void 0 &&
        ((this._currentDuration += e.value),
        this._currentDuration >= this._duration &&
          (this.pause(),
          this._spawnDelay !== void 0 && delete this._spawnDelay,
          this._immortal || this._lifeCount--,
          this._lifeCount > 0 || this._immortal
            ? ((this.position = this._calcPosition()),
              (this._spawnDelay =
                ((this.options.life.delay ?? 0) * 1e3) /
                this.container.retina.reduceFactor))
            : this._destroy(),
          (this._currentDuration -= this._duration),
          delete this._duration)),
      this._spawnDelay !== void 0 &&
        ((this._currentSpawnDelay += e.value),
        this._currentSpawnDelay >= this._spawnDelay &&
          (this._engine.dispatchEvent("emitterPlay", {
            container: this.container,
          }),
          this.play(),
          (this._currentSpawnDelay -= this._currentSpawnDelay),
          delete this._spawnDelay)),
      this._emitDelay !== void 0 &&
        ((this._currentEmitDelay += e.value),
        this._currentEmitDelay >= this._emitDelay &&
          (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
  }
}
class qC {
  constructor(e, n) {
    (this.container = n),
      (this._engine = e),
      (this.array = []),
      (this.emitters = []),
      (this.interactivityEmitters = {
        random: { count: 1, enable: !1 },
        value: [],
      }),
      (n.getEmitter = (i) =>
        i === void 0 || typeof i == "number"
          ? this.array[i || 0]
          : this.array.find((r) => r.name === i)),
      (n.addEmitter = (i, r) => this.addEmitter(i, r)),
      (n.removeEmitter = (i) => {
        const r = n.getEmitter(i);
        r && this.removeEmitter(r);
      }),
      (n.playEmitter = (i) => {
        const r = n.getEmitter(i);
        r && r.externalPlay();
      }),
      (n.pauseEmitter = (i) => {
        const r = n.getEmitter(i);
        r && r.externalPause();
      });
  }
  addEmitter(e, n) {
    const i = new In();
    i.load(e);
    const r = new VC(this._engine, this, this.container, i, n);
    return this.array.push(r), r;
  }
  handleClickMode(e) {
    const n = this.emitters,
      i = this.interactivityEmitters;
    if (e !== "emitter") return;
    let r;
    if (i && i.value instanceof Array)
      if (i.value.length > 0 && i.random.enable) {
        r = [];
        const a = [];
        for (let l = 0; l < i.random.count; l++) {
          const u = ky(i.value);
          if (a.includes(u) && a.length < i.value.length) {
            l--;
            continue;
          }
          a.push(u), r.push(Rs(i.value, u));
        }
      } else r = i.value;
    else r = i == null ? void 0 : i.value;
    const s = r ?? n,
      o = this.container.interactivity.mouse.clickPosition;
    ve(s, (a) => {
      this.addEmitter(a, o);
    });
  }
  async init() {
    if (
      ((this.emitters = this.container.actualOptions.emitters),
      (this.interactivityEmitters =
        this.container.actualOptions.interactivity.modes.emitters),
      !!this.emitters)
    )
      if (this.emitters instanceof Array)
        for (const e of this.emitters) this.addEmitter(e);
      else this.addEmitter(this.emitters);
  }
  pause() {
    for (const e of this.array) e.pause();
  }
  play() {
    for (const e of this.array) e.play();
  }
  removeEmitter(e) {
    const n = this.array.indexOf(e);
    n >= 0 && this.array.splice(n, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
  update(e) {
    for (const n of this.array) n.update(e);
  }
}
const iu = new Map();
class UC {
  constructor(e) {
    this._engine = e;
  }
  addShape(e, n) {
    this.getShape(e) || iu.set(e, n);
  }
  getShape(e) {
    return iu.get(e);
  }
  getSupportedShapes() {
    return iu.keys();
  }
}
function Eh(t, e) {
  return t + e * (K() - 0.5);
}
class XC {
  randomPosition(e, n, i) {
    if (i) return { x: Eh(e.x, n.width), y: Eh(e.y, n.height) };
    {
      const r = n.width / 2,
        s = n.height / 2,
        o = Math.floor(K() * 4),
        a = (K() - 0.5) * 2;
      switch (o) {
        case 0:
          return { x: e.x + a * r, y: e.y - s };
        case 1:
          return { x: e.x - r, y: e.y + a * s };
        case 2:
          return { x: e.x + a * r, y: e.y + s };
        case 3:
        default:
          return { x: e.x + r, y: e.y + a * s };
      }
    }
  }
}
class GC {
  constructor(e) {
    (this._engine = e), (this.id = "emitters");
  }
  getPlugin(e) {
    return new qC(this._engine, e);
  }
  loadOptions(e, n) {
    var r, s;
    if (!this.needsPlugin(e) && !this.needsPlugin(n)) return;
    n != null &&
      n.emitters &&
      (e.emitters = ve(n.emitters, (o) => {
        const a = new In();
        return a.load(o), a;
      }));
    const i =
      (s =
        (r = n == null ? void 0 : n.interactivity) == null
          ? void 0
          : r.modes) == null
        ? void 0
        : s.emitters;
    if (i)
      if (i instanceof Array)
        e.interactivity.modes.emitters = {
          random: { count: 1, enable: !0 },
          value: i.map((o) => {
            const a = new In();
            return a.load(o), a;
          }),
        };
      else {
        const o = i;
        if (o.value !== void 0)
          if (o.value instanceof Array)
            e.interactivity.modes.emitters = {
              random: {
                count: o.random.count ?? 1,
                enable: o.random.enable ?? !1,
              },
              value: o.value.map((a) => {
                const l = new In();
                return l.load(a), l;
              }),
            };
          else {
            const a = new In();
            a.load(o.value),
              (e.interactivity.modes.emitters = {
                random: {
                  count: o.random.count ?? 1,
                  enable: o.random.enable ?? !1,
                },
                value: a,
              });
          }
        else
          (e.interactivity.modes.emitters = {
            random: { count: 1, enable: !1 },
            value: new In(),
          }).value.load(i);
      }
  }
  needsPlugin(e) {
    var i, r, s;
    if (!e) return !1;
    const n = e.emitters;
    return (
      (n instanceof Array && !!n.length) ||
      n !== void 0 ||
      (!!(
        (s =
          (r = (i = e.interactivity) == null ? void 0 : i.events) == null
            ? void 0
            : r.onClick) != null && s.mode
      ) &&
        ye("emitter", e.interactivity.events.onClick.mode))
    );
  }
}
async function KC(t) {
  t.emitterShapeManager || (t.emitterShapeManager = new UC(t)),
    t.addEmitterShape ||
      (t.addEmitterShape = (n, i) => {
        var r;
        (r = t.emitterShapeManager) == null || r.addShape(n, i);
      });
  const e = new GC(t);
  await t.addPlugin(e),
    t.addEmitterShape("circle", new BC()),
    t.addEmitterShape("square", new XC());
}
class YC {
  constructor() {
    (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
  }
  load(e) {
    e &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.quantity !== void 0 && (this.quantity = e.quantity),
      e.particles !== void 0 && (this.particles = Oe({}, e.particles)),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop));
  }
}
class QC extends Xt {
  constructor(e) {
    super(e), (this._delay = 0);
  }
  clear() {}
  init() {}
  async interact(e) {
    var u, c, d, f;
    const n = this.container,
      { interactivity: i } = n;
    if (!n.retina.reduceFactor) return;
    const r = n.actualOptions,
      s = r.interactivity.modes.trail;
    if (!s) return;
    const o = (s.delay * 1e3) / this.container.retina.reduceFactor;
    if ((this._delay < o && (this._delay += e.value), this._delay < o)) return;
    const a = !(
        s.pauseOnStop &&
        (i.mouse.position === this._lastPosition ||
          (((u = i.mouse.position) == null ? void 0 : u.x) ===
            ((c = this._lastPosition) == null ? void 0 : c.x) &&
            ((d = i.mouse.position) == null ? void 0 : d.y) ===
              ((f = this._lastPosition) == null ? void 0 : f.y)))
      ),
      l = n.interactivity.mouse.position;
    l ? (this._lastPosition = { ...l }) : delete this._lastPosition,
      a && n.particles.push(s.quantity, n.interactivity.mouse, s.particles),
      (this._delay -= o);
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events;
    return (
      (r.clicking && r.inside && !!r.position && ye("trail", s.onClick.mode)) ||
      (r.inside && !!r.position && ye("trail", s.onHover.mode))
    );
  }
  loadModeOptions(e, ...n) {
    e.trail || (e.trail = new YC());
    for (const i of n) e.trail.load(i == null ? void 0 : i.trail);
  }
  reset() {}
}
async function ZC(t) {
  await t.addInteractor("externalTrail", (e) => new QC(e));
}
function JC(t) {
  const e = t.options.roll;
  if (!(e != null && e.enable)) {
    t.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
    return;
  }
  if (
    ((t.roll = {
      enable: e.enable,
      horizontal: e.mode === "horizontal" || e.mode === "both",
      vertical: e.mode === "vertical" || e.mode === "both",
      angle: K() * Math.PI * 2,
      speed: N(e.speed) / 360,
    }),
    e.backColor)
  )
    t.backColor = Yn(e.backColor);
  else if (e.darken.enable && e.enlighten.enable) {
    const n = K() >= 0.5 ? "darken" : "enlighten";
    t.roll.alter = {
      type: n,
      value: N(n === "darken" ? e.darken.value : e.enlighten.value),
    };
  } else
    e.darken.enable
      ? (t.roll.alter = { type: "darken", value: N(e.darken.value) })
      : e.enlighten.enable &&
        (t.roll.alter = { type: "enlighten", value: N(e.enlighten.value) });
}
function eE(t, e) {
  const n = t.options.roll,
    i = t.roll;
  if (!i || !(n != null && n.enable)) return;
  const r = i.speed * e.factor,
    s = 2 * Math.PI;
  (i.angle += r), i.angle > s && (i.angle -= s);
}
class Ph {
  constructor() {
    (this.enable = !1), (this.value = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.value !== void 0 && (this.value = X(e.value)));
  }
}
class tE {
  constructor() {
    (this.darken = new Ph()),
      (this.enable = !1),
      (this.enlighten = new Ph()),
      (this.mode = "vertical"),
      (this.speed = 25);
  }
  load(e) {
    e &&
      (e.backColor !== void 0 &&
        (this.backColor = ze.create(this.backColor, e.backColor)),
      this.darken.load(e.darken),
      e.enable !== void 0 && (this.enable = e.enable),
      this.enlighten.load(e.enlighten),
      e.mode !== void 0 && (this.mode = e.mode),
      e.speed !== void 0 && (this.speed = X(e.speed)));
  }
}
class nE {
  getTransformValues(e) {
    var s;
    const n = ((s = e.roll) == null ? void 0 : s.enable) && e.roll,
      i = n && n.horizontal,
      r = n && n.vertical;
    return {
      a: i ? Math.cos(n.angle) : void 0,
      d: r ? Math.sin(n.angle) : void 0,
    };
  }
  init(e) {
    JC(e);
  }
  isEnabled(e) {
    const n = e.options.roll;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...n) {
    e.roll || (e.roll = new tE());
    for (const i of n) e.roll.load(i == null ? void 0 : i.roll);
  }
  update(e, n) {
    this.isEnabled(e) && eE(e, n);
  }
}
async function iE(t) {
  await t.addParticleUpdater("roll", () => new nE());
}
class ma {
  static init(e) {
    var s;
    const n = new ma(),
      i = e.selector;
    if (!i) throw new Error("No selector provided");
    const r = document.querySelector(i);
    if (!r) throw new Error("No element found for selector");
    return (
      Yi.set(i.replace(".", "").replace("!", ""), r, {
        fullScreen: { enable: !1 },
        particles: {
          color: { value: e.color ?? "!000000" },
          links: {
            color: "random",
            distance: e.minDistance ?? 120,
            enable: e.connectParticles ?? !1,
          },
          move: { enable: !0, speed: e.speed ?? 0.5 },
          number: { value: e.maxParticles ?? 100 },
          size: { value: { min: 1, max: e.sizeVariations ?? 3 } },
        },
        responsive:
          (s = e.responsive) == null
            ? void 0
            : s.map((o) => {
                var a, l, u, c, d;
                return {
                  maxWidth: o.breakpoint,
                  options: {
                    particles: {
                      color: {
                        value: (a = o.options) == null ? void 0 : a.color,
                      },
                      links: {
                        distance:
                          (l = o.options) == null ? void 0 : l.minDistance,
                        enable:
                          (u = o.options) == null ? void 0 : u.connectParticles,
                      },
                      number: { value: e.maxParticles },
                      move: {
                        enable: !0,
                        speed: (c = o.options) == null ? void 0 : c.speed,
                      },
                      size: {
                        value:
                          (d = o.options) == null ? void 0 : d.sizeVariations,
                      },
                    },
                  },
                };
              }),
      }).then((o) => {
        n._container = o;
      }),
      n
    );
  }
  destroy() {
    const e = this._container;
    e && e.destroy();
  }
  pauseAnimation() {
    const e = this._container;
    e && e.pause();
  }
  resumeAnimation() {
    const e = this._container;
    e && e.play();
  }
}
const rE = (t) => {
    const e = (i, r) => t.load(i, r);
    (e.load = (i, r, s) => {
      t.loadJSON(i, r)
        .then((o) => {
          o && s(o);
        })
        .catch(() => {
          s(void 0);
        });
    }),
      (e.setOnClickHandler = (i) => {
        t.setOnClickHandler(i);
      });
    const n = t.dom();
    return { particlesJS: e, pJSDom: n };
  },
  sE = (t) => {
    const { particlesJS: e, pJSDom: n } = rE(t);
    return (
      (window.particlesJS = e),
      (window.pJSDom = n),
      (window.Particles = ma),
      { particlesJS: e, pJSDom: n, Particles: ma }
    );
  };
function oE(t) {
  const e = t.initialPosition,
    { dx: n, dy: i } = Je(e, t.position),
    r = Math.abs(n),
    s = Math.abs(i),
    { maxDistance: o } = t.retina,
    a = o.horizontal,
    l = o.vertical;
  if (!(!a && !l)) {
    if (((a && r >= a) || (l && s >= l)) && !t.misplaced)
      (t.misplaced = (!!a && r > a) || (!!l && s > l)),
        a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
        l && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
    else if ((!a || r < a) && (!l || s < l) && t.misplaced) t.misplaced = !1;
    else if (t.misplaced) {
      const u = t.position,
        c = t.velocity;
      a && ((u.x < e.x && c.x < 0) || (u.x > e.x && c.x > 0)) && (c.x *= -K()),
        l &&
          ((u.y < e.y && c.y < 0) || (u.y > e.y && c.y > 0)) &&
          (c.y *= -K());
    }
  }
}
function aE(t, e, n, i, r, s) {
  uE(t, s);
  const o = t.gravity,
    a = o != null && o.enable && o.inverse ? -1 : 1;
  r && n && (t.velocity.x += (r * s.factor) / (60 * n)),
    o != null &&
      o.enable &&
      n &&
      (t.velocity.y += (a * (o.acceleration * s.factor)) / (60 * n));
  const l = t.moveDecay;
  t.velocity.multTo(l);
  const u = t.velocity.mult(n);
  o != null &&
    o.enable &&
    i > 0 &&
    ((!o.inverse && u.y >= 0 && u.y >= i) ||
      (o.inverse && u.y <= 0 && u.y <= -i)) &&
    ((u.y = a * i), n && (t.velocity.y = u.y / n));
  const c = t.options.zIndex,
    d = (1 - t.zIndexFactor) ** c.velocityRate;
  u.multTo(d);
  const { position: f } = t;
  f.addTo(u),
    e.vibrate &&
      ((f.x += Math.sin(f.x * Math.cos(f.y))),
      (f.y += Math.cos(f.y * Math.sin(f.x))));
}
function lE(t, e) {
  const n = t.container;
  if (!t.spin) return;
  const i = {
    x: t.spin.direction === "clockwise" ? Math.cos : Math.sin,
    y: t.spin.direction === "clockwise" ? Math.sin : Math.cos,
  };
  (t.position.x = t.spin.center.x + t.spin.radius * i.x(t.spin.angle)),
    (t.position.y = t.spin.center.y + t.spin.radius * i.y(t.spin.angle)),
    (t.spin.radius += t.spin.acceleration);
  const r = Math.max(n.canvas.size.width, n.canvas.size.height);
  t.spin.radius > r / 2
    ? ((t.spin.radius = r / 2), (t.spin.acceleration *= -1))
    : t.spin.radius < 0 && ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
    (t.spin.angle += (e / 100) * (1 - t.spin.radius / r));
}
function uE(t, e) {
  var o;
  const n = t.options,
    i = n.move.path;
  if (!i.enable) return;
  if (t.lastPathTime <= t.pathDelay) {
    t.lastPathTime += e.value;
    return;
  }
  const s = (o = t.pathGenerator) == null ? void 0 : o.generate(t, e);
  s && t.velocity.addTo(s),
    i.clamp &&
      ((t.velocity.x = Ut(t.velocity.x, -1, 1)),
      (t.velocity.y = Ut(t.velocity.y, -1, 1))),
    (t.lastPathTime -= t.pathDelay);
}
function cE(t) {
  return t.slow.inRange ? t.slow.factor : 1;
}
const dE = 2;
class fE {
  constructor() {
    this._initSpin = (e) => {
      const n = e.container,
        i = e.options,
        r = i.move.spin;
      if (!r.enable) return;
      const s = r.position ?? { x: 50, y: 50 },
        o = {
          x: (s.x / 100) * n.canvas.size.width,
          y: (s.y / 100) * n.canvas.size.height,
        },
        a = e.getPosition(),
        l = it(a, o),
        u = N(r.acceleration);
      (e.retina.spinAcceleration = u * n.retina.pixelRatio),
        (e.spin = {
          center: o,
          direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
          angle: e.velocity.angle,
          radius: l,
          acceleration: e.retina.spinAcceleration,
        });
    };
  }
  init(e) {
    const n = e.options,
      i = n.move.gravity;
    (e.gravity = {
      enable: i.enable,
      acceleration: N(i.acceleration),
      inverse: i.inverse,
    }),
      this._initSpin(e);
  }
  isEnabled(e) {
    return !e.destroyed && e.options.move.enable;
  }
  move(e, n) {
    var g, m;
    const i = e.options,
      r = i.move;
    if (!r.enable) return;
    const s = e.container,
      o = s.retina.pixelRatio,
      a = cE(e),
      l =
        ((g = e.retina).moveSpeed ?? (g.moveSpeed = N(r.speed) * o)) *
        s.retina.reduceFactor,
      u =
        (m = e.retina).moveDrift ?? (m.moveDrift = N(e.options.move.drift) * o),
      c = jn(i.size.value) * o,
      d = r.size ? e.getRadius() / c : 1,
      f = (l * d * a * (n.factor || 1)) / dE,
      p = e.retina.maxSpeed ?? s.retina.maxSpeed;
    r.spin.enable ? lE(e, f) : aE(e, r, f, p, u, n), oE(e);
  }
}
async function pE(t) {
  t.addMover("base", () => new fE());
}
class hE {
  draw(e, n, i) {
    n.circleRange || (n.circleRange = { min: 0, max: Math.PI * 2 });
    const r = n.circleRange;
    e.arc(0, 0, i, r.min, r.max, !1);
  }
  getSidesCount() {
    return 12;
  }
  particleInit(e, n) {
    const i = n.shapeData,
      r = (i == null ? void 0 : i.angle) ?? { max: 360, min: 0 };
    n.circleRange =
      typeof r != "object"
        ? { min: 0, max: (r * Math.PI) / 180 }
        : { min: (r.min * Math.PI) / 180, max: (r.max * Math.PI) / 180 };
  }
}
async function mE(t) {
  await t.addShape("circle", new hE());
}
function ru(t, e, n, i, r) {
  if (
    !e ||
    !n.enable ||
    ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) ||
    (e.time || (e.time = 0),
    (e.delayTime ?? 0) > 0 &&
      e.time < (e.delayTime ?? 0) &&
      (e.time += t.value),
    (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
  )
    return;
  const s = Be(n.offset),
    o = (e.velocity ?? 0) * t.factor + s * 3.6,
    a = e.decay ?? 1;
  !r || e.status === "increasing"
    ? ((e.value += o),
      e.value > i &&
        (e.loops || (e.loops = 0),
        e.loops++,
        r && ((e.status = "decreasing"), (e.value -= e.value % i))))
    : ((e.value -= o),
      e.value < 0 &&
        (e.loops || (e.loops = 0),
        e.loops++,
        (e.status = "increasing"),
        (e.value += e.value))),
    e.velocity && a !== 1 && (e.velocity *= a),
    e.value > i && (e.value %= i);
}
function gE(t, e) {
  const { h: n, s: i, l: r } = t.options.color.animation,
    { color: s } = t;
  if (!s) return;
  const { h: o, s: a, l } = s;
  o && ru(e, o, n, 360, !1),
    a && ru(e, a, i, 100, !0),
    l && ru(e, l, r, 100, !0);
}
class yE {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = Yn(e.options.color, e.id, e.options.reduceDuplicates);
    n &&
      (e.color = Iy(
        n,
        e.options.color.animation,
        this.container.retina.reduceFactor,
      ));
  }
  isEnabled(e) {
    const { h: n, s: i, l: r } = e.options.color.animation,
      { color: s } = e;
    return (
      !e.destroyed &&
      !e.spawning &&
      (((s == null ? void 0 : s.h.value) !== void 0 && n.enable) ||
        ((s == null ? void 0 : s.s.value) !== void 0 && i.enable) ||
        ((s == null ? void 0 : s.l.value) !== void 0 && r.enable))
    );
  }
  update(e, n) {
    gE(e, n);
  }
}
async function vE(t) {
  await t.addParticleUpdater("color", (e) => new yE(e));
}
class wE {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.easing = "ease-out-quad"),
      (this.factor = 1),
      (this.maxSpeed = 50),
      (this.speed = 1);
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
      e.speed !== void 0 && (this.speed = e.speed));
  }
}
let bE = class extends Xt {
  constructor(e, n) {
    super(n),
      (this._clickAttract = () => {
        const i = this.container;
        i.attract || (i.attract = { particles: [] });
        const { attract: r } = i;
        if (
          (r.finish ||
            (r.count || (r.count = 0),
            r.count++,
            r.count === i.particles.count && (r.finish = !0)),
          r.clicking)
        ) {
          const s = i.interactivity.mouse.clickPosition,
            o = i.retina.attractModeDistance;
          if (!o || o < 0 || !s) return;
          this._processAttract(s, o, new pt(s.x, s.y, o));
        } else r.clicking === !1 && (r.particles = []);
      }),
      (this._hoverAttract = () => {
        const i = this.container,
          r = i.interactivity.mouse.position,
          s = i.retina.attractModeDistance;
        !s || s < 0 || !r || this._processAttract(r, s, new pt(r.x, r.y, s));
      }),
      (this._processAttract = (i, r, s) => {
        const o = this.container,
          a = o.actualOptions.interactivity.modes.attract;
        if (!a) return;
        const l = o.particles.quadTree.query(s, (u) => this.isEnabled(u));
        for (const u of l) {
          const { dx: c, dy: d, distance: f } = Je(u.position, i),
            p = a.speed * a.factor,
            g = Ut(vy(a.easing)(1 - f / r) * p, 0, a.maxSpeed),
            m = fe.create(f === 0 ? p : (c / f) * g, f === 0 ? p : (d / f) * g);
          u.position.subFrom(m);
        }
      }),
      (this._engine = e),
      n.attract || (n.attract = { particles: [] }),
      (this.handleClickMode = (i) => {
        const r = this.container.actualOptions,
          s = r.interactivity.modes.attract;
        if (!(!s || i !== "attract")) {
          n.attract || (n.attract = { particles: [] }),
            (n.attract.clicking = !0),
            (n.attract.count = 0);
          for (const o of n.attract.particles)
            this.isEnabled(o) && o.velocity.setTo(o.initialVelocity);
          (n.attract.particles = []),
            (n.attract.finish = !1),
            setTimeout(() => {
              n.destroyed ||
                (n.attract || (n.attract = { particles: [] }),
                (n.attract.clicking = !1));
            }, s.duration * 1e3);
        }
      });
  }
  clear() {}
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.attract;
    n && (e.retina.attractModeDistance = n.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      n = e.actualOptions,
      i = e.interactivity.status === yi,
      r = n.interactivity.events,
      s = r.onHover.enable,
      o = r.onHover.mode,
      a = r.onClick.enable,
      l = r.onClick.mode;
    i && s && ye("attract", o)
      ? this._hoverAttract()
      : a && ye("attract", l) && this._clickAttract();
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events;
    if (
      (!r.position || !s.onHover.enable) &&
      (!r.clickPosition || !s.onClick.enable)
    )
      return !1;
    const o = s.onHover.mode,
      a = s.onClick.mode;
    return ye("attract", o) || ye("attract", a);
  }
  loadModeOptions(e, ...n) {
    e.attract || (e.attract = new wE());
    for (const i of n) e.attract.load(i == null ? void 0 : i.attract);
  }
  reset() {}
};
async function xE(t) {
  await t.addInteractor("externalAttract", (e) => new bE(t, e));
}
class SE {
  constructor() {
    this.distance = 200;
  }
  load(e) {
    e && e.distance !== void 0 && (this.distance = e.distance);
  }
}
class kE extends Xt {
  constructor(e) {
    super(e),
      (this._processBounce = (n, i, r) => {
        const s = this.container.particles.quadTree.query(r, (o) =>
          this.isEnabled(o),
        );
        for (const o of s)
          r instanceof pt
            ? Cy(mc(o), {
                position: n,
                radius: i,
                mass: (i ** 2 * Math.PI) / 2,
                velocity: fe.origin,
                factor: fe.origin,
              })
            : r instanceof un && Z3(o, Ds(n, i));
      }),
      (this._processMouseBounce = () => {
        const n = this.container,
          i = n.retina.pixelRatio,
          r = 10 * i,
          s = n.interactivity.mouse.position,
          o = n.retina.bounceModeDistance;
        !o || o < 0 || !s || this._processBounce(s, o, new pt(s.x, s.y, o + r));
      }),
      (this._singleSelectorBounce = (n, i) => {
        const r = this.container,
          s = document.querySelectorAll(n);
        s.length &&
          s.forEach((o) => {
            const a = o,
              l = r.retina.pixelRatio,
              u = {
                x: (a.offsetLeft + a.offsetWidth / 2) * l,
                y: (a.offsetTop + a.offsetHeight / 2) * l,
              },
              c = (a.offsetWidth / 2) * l,
              d = 10 * l,
              f =
                i.type === "circle"
                  ? new pt(u.x, u.y, c + d)
                  : new un(
                      a.offsetLeft * l - d,
                      a.offsetTop * l - d,
                      a.offsetWidth * l + d * 2,
                      a.offsetHeight * l + d * 2,
                    );
            this._processBounce(u, c, f);
          });
      });
  }
  clear() {}
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.bounce;
    n && (e.retina.bounceModeDistance = n.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      n = e.actualOptions,
      i = n.interactivity.events,
      r = e.interactivity.status === yi,
      s = i.onHover.enable,
      o = i.onHover.mode,
      a = i.onDiv;
    r && s && ye("bounce", o)
      ? this._processMouseBounce()
      : qd("bounce", a, (l, u) => this._singleSelectorBounce(l, u));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      o = s.onDiv;
    return (
      (r.position && s.onHover.enable && ye("bounce", s.onHover.mode)) ||
      Vd("bounce", o)
    );
  }
  loadModeOptions(e, ...n) {
    e.bounce || (e.bounce = new SE());
    for (const i of n) e.bounce.load(i == null ? void 0 : i.bounce);
  }
  reset() {}
}
async function _E(t) {
  await t.addInteractor("externalBounce", (e) => new kE(e));
}
class Uy {
  constructor() {
    (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
  }
  load(e) {
    if (e) {
      if (
        (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.mix !== void 0 && (this.mix = e.mix),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.color !== void 0)
      ) {
        const n = this.color instanceof Array ? void 0 : this.color;
        this.color = ve(e.color, (i) => ze.create(n, i));
      }
      e.size !== void 0 && (this.size = e.size);
    }
  }
}
class CE extends Uy {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return ve(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = ve(e, (n) => `#${n}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class EE extends Uy {
  load(e) {
    super.load(e),
      e &&
        (this.divs = ve(e.divs, (n) => {
          const i = new CE();
          return i.load(n), i;
        }));
  }
}
function Th(t, e, n, i) {
  if (e >= n) {
    const r = t + (e - n) * i;
    return Ut(r, t, e);
  } else if (e < n) {
    const r = t - (n - e) * i;
    return Ut(r, e, t);
  }
}
class PE extends Xt {
  constructor(e) {
    super(e),
      (this._clickBubble = () => {
        var u;
        const n = this.container,
          i = n.actualOptions,
          r = n.interactivity.mouse.clickPosition,
          s = i.interactivity.modes.bubble;
        if (!s || !r) return;
        n.bubble || (n.bubble = {});
        const o = n.retina.bubbleModeDistance;
        if (!o || o < 0) return;
        const a = n.particles.quadTree.queryCircle(r, o, (c) =>
            this.isEnabled(c),
          ),
          { bubble: l } = n;
        for (const c of a) {
          if (!l.clicking) continue;
          c.bubble.inRange = !l.durationEnd;
          const d = c.getPosition(),
            f = it(d, r),
            p =
              (new Date().getTime() - (n.interactivity.mouse.clickTime || 0)) /
              1e3;
          p > s.duration && (l.durationEnd = !0),
            p > s.duration * 2 && ((l.clicking = !1), (l.durationEnd = !1));
          const g = {
            bubbleObj: {
              optValue: n.retina.bubbleModeSize,
              value: c.bubble.radius,
            },
            particlesObj: {
              optValue: jn(c.options.size.value) * n.retina.pixelRatio,
              value: c.size.value,
            },
            type: "size",
          };
          this._process(c, f, p, g);
          const m = {
            bubbleObj: { optValue: s.opacity, value: c.bubble.opacity },
            particlesObj: {
              optValue: jn(c.options.opacity.value),
              value: ((u = c.opacity) == null ? void 0 : u.value) ?? 1,
            },
            type: "opacity",
          };
          this._process(c, f, p, m),
            !l.durationEnd && f <= o
              ? this._hoverBubbleColor(c, f)
              : delete c.bubble.color;
        }
      }),
      (this._hoverBubble = () => {
        const n = this.container,
          i = n.interactivity.mouse.position,
          r = n.retina.bubbleModeDistance;
        if (!r || r < 0 || i === void 0) return;
        const s = n.particles.quadTree.queryCircle(i, r, (o) =>
          this.isEnabled(o),
        );
        for (const o of s) {
          o.bubble.inRange = !0;
          const a = o.getPosition(),
            l = it(a, i),
            u = 1 - l / r;
          l <= r
            ? u >= 0 &&
              n.interactivity.status === yi &&
              (this._hoverBubbleSize(o, u),
              this._hoverBubbleOpacity(o, u),
              this._hoverBubbleColor(o, u))
            : this.reset(o),
            n.interactivity.status === hc && this.reset(o);
        }
      }),
      (this._hoverBubbleColor = (n, i, r) => {
        const s = this.container.actualOptions,
          o = r ?? s.interactivity.modes.bubble;
        if (o) {
          if (!n.bubble.finalColor) {
            const a = o.color;
            if (!a) return;
            const l = St(a);
            n.bubble.finalColor = Yn(l);
          }
          if (n.bubble.finalColor)
            if (o.mix) {
              n.bubble.color = void 0;
              const a = n.getFillColor();
              n.bubble.color = a
                ? Ay(Ud(a, n.bubble.finalColor, 1 - i, i))
                : n.bubble.finalColor;
            } else n.bubble.color = n.bubble.finalColor;
        }
      }),
      (this._hoverBubbleOpacity = (n, i, r) => {
        var d, f;
        const s = this.container,
          o = s.actualOptions,
          a =
            (r == null ? void 0 : r.opacity) ??
            ((d = o.interactivity.modes.bubble) == null ? void 0 : d.opacity);
        if (!a) return;
        const l = n.options.opacity.value,
          u = ((f = n.opacity) == null ? void 0 : f.value) ?? 1,
          c = Th(u, a, jn(l), i);
        c !== void 0 && (n.bubble.opacity = c);
      }),
      (this._hoverBubbleSize = (n, i, r) => {
        const s = this.container,
          o =
            r != null && r.size
              ? r.size * s.retina.pixelRatio
              : s.retina.bubbleModeSize;
        if (o === void 0) return;
        const a = jn(n.options.size.value) * s.retina.pixelRatio,
          l = n.size.value,
          u = Th(l, o, a, i);
        u !== void 0 && (n.bubble.radius = u);
      }),
      (this._process = (n, i, r, s) => {
        const o = this.container,
          a = s.bubbleObj.optValue,
          l = o.actualOptions,
          u = l.interactivity.modes.bubble;
        if (!u || a === void 0) return;
        const c = u.duration,
          d = o.retina.bubbleModeDistance,
          f = s.particlesObj.optValue,
          p = s.bubbleObj.value,
          g = s.particlesObj.value || 0,
          m = s.type;
        if (!(!d || d < 0 || a === f))
          if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
            p &&
              (m === "size" && delete n.bubble.radius,
              m === "opacity" && delete n.bubble.opacity);
          else if (i <= d) {
            if ((p ?? g) !== a) {
              const y = g - (r * (g - a)) / c;
              m === "size" && (n.bubble.radius = y),
                m === "opacity" && (n.bubble.opacity = y);
            }
          } else
            m === "size" && delete n.bubble.radius,
              m === "opacity" && delete n.bubble.opacity;
      }),
      (this._singleSelectorHover = (n, i, r) => {
        const s = this.container,
          o = document.querySelectorAll(i),
          a = s.actualOptions.interactivity.modes.bubble;
        !a ||
          !o.length ||
          o.forEach((l) => {
            const u = l,
              c = s.retina.pixelRatio,
              d = {
                x: (u.offsetLeft + u.offsetWidth / 2) * c,
                y: (u.offsetTop + u.offsetHeight / 2) * c,
              },
              f = (u.offsetWidth / 2) * c,
              p =
                r.type === "circle"
                  ? new pt(d.x, d.y, f)
                  : new un(
                      u.offsetLeft * c,
                      u.offsetTop * c,
                      u.offsetWidth * c,
                      u.offsetHeight * c,
                    ),
              g = s.particles.quadTree.query(p, (m) => this.isEnabled(m));
            for (const m of g) {
              if (!p.contains(m.getPosition())) continue;
              m.bubble.inRange = !0;
              const b = a.divs,
                y = _y(b, u);
              (!m.bubble.div || m.bubble.div !== u) &&
                (this.clear(m, n, !0), (m.bubble.div = u)),
                this._hoverBubbleSize(m, 1, y),
                this._hoverBubbleOpacity(m, 1, y),
                this._hoverBubbleColor(m, 1, y);
            }
          });
      }),
      e.bubble || (e.bubble = {}),
      (this.handleClickMode = (n) => {
        n === "bubble" &&
          (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
      });
  }
  clear(e, n, i) {
    (e.bubble.inRange && !i) ||
      (delete e.bubble.div,
      delete e.bubble.opacity,
      delete e.bubble.radius,
      delete e.bubble.color);
  }
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.bubble;
    n &&
      ((e.retina.bubbleModeDistance = n.distance * e.retina.pixelRatio),
      n.size !== void 0 &&
        (e.retina.bubbleModeSize = n.size * e.retina.pixelRatio));
  }
  async interact(e) {
    const n = this.container.actualOptions,
      i = n.interactivity.events,
      r = i.onHover,
      s = i.onClick,
      o = r.enable,
      a = r.mode,
      l = s.enable,
      u = s.mode,
      c = i.onDiv;
    o && ye("bubble", a)
      ? this._hoverBubble()
      : l && ye("bubble", u)
      ? this._clickBubble()
      : qd("bubble", c, (d, f) => this._singleSelectorHover(e, d, f));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      { onClick: o, onDiv: a, onHover: l } = s,
      u = Vd("bubble", a);
    return u || (l.enable && r.position) || (o.enable && r.clickPosition)
      ? ye("bubble", l.mode) || ye("bubble", o.mode) || u
      : !1;
  }
  loadModeOptions(e, ...n) {
    e.bubble || (e.bubble = new EE());
    for (const i of n) e.bubble.load(i == null ? void 0 : i.bubble);
  }
  reset(e) {
    e.bubble.inRange = !1;
  }
}
async function TE(t) {
  await t.addInteractor("externalBubble", (e) => new PE(e));
}
class zE {
  constructor() {
    this.opacity = 0.5;
  }
  load(e) {
    e && e.opacity !== void 0 && (this.opacity = e.opacity);
  }
}
class AE {
  constructor() {
    (this.distance = 80), (this.links = new zE()), (this.radius = 60);
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(e.links ?? e.lineLinked ?? e.line_linked),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
function ME(t, e, n, i) {
  const r = Math.floor(n.getRadius() / e.getRadius()),
    s = e.getFillColor(),
    o = n.getFillColor();
  if (!s || !o) return;
  const a = e.getPosition(),
    l = n.getPosition(),
    u = Ud(s, o, e.getRadius(), n.getRadius()),
    c = t.createLinearGradient(a.x, a.y, l.x, l.y);
  return (
    c.addColorStop(0, hr(s, i)),
    c.addColorStop(r > 1 ? 1 : r, ln(u, i)),
    c.addColorStop(1, hr(o, i)),
    c
  );
}
function OE(t, e, n, i, r) {
  Jr(t, i, r), (t.lineWidth = e), (t.strokeStyle = n), t.stroke();
}
function IE(t, e, n, i) {
  const r = t.actualOptions,
    s = r.interactivity.modes.connect;
  if (s) return ME(e, n, i, s.links.opacity);
}
function RE(t, e, n) {
  t.canvas.draw((i) => {
    const r = IE(t, i, e, n);
    if (!r) return;
    const s = e.getPosition(),
      o = n.getPosition();
    OE(i, e.retina.linksWidth ?? 0, r, s, o);
  });
}
class LE extends Xt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.connect;
    n &&
      ((e.retina.connectModeDistance = n.distance * e.retina.pixelRatio),
      (e.retina.connectModeRadius = n.radius * e.retina.pixelRatio));
  }
  async interact() {
    const e = this.container;
    if (
      e.actualOptions.interactivity.events.onHover.enable &&
      e.interactivity.status === "pointermove"
    ) {
      const i = e.interactivity.mouse.position;
      if (
        !e.retina.connectModeDistance ||
        e.retina.connectModeDistance < 0 ||
        !e.retina.connectModeRadius ||
        e.retina.connectModeRadius < 0 ||
        !i
      )
        return;
      const r = Math.abs(e.retina.connectModeRadius),
        s = e.particles.quadTree.queryCircle(i, r, (a) => this.isEnabled(a));
      let o = 0;
      for (const a of s) {
        const l = a.getPosition();
        for (const u of s.slice(o + 1)) {
          const c = u.getPosition(),
            d = Math.abs(e.retina.connectModeDistance),
            f = Math.abs(l.x - c.x),
            p = Math.abs(l.y - c.y);
          f < d && p < d && RE(e, a, u);
        }
        ++o;
      }
    }
  }
  isEnabled(e) {
    const n = this.container,
      i = n.interactivity.mouse,
      r = (
        (e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity
      ).events;
    return r.onHover.enable && i.position ? ye("connect", r.onHover.mode) : !1;
  }
  loadModeOptions(e, ...n) {
    e.connect || (e.connect = new AE());
    for (const i of n) e.connect.load(i == null ? void 0 : i.connect);
  }
  reset() {}
}
async function DE(t) {
  await t.addInteractor("externalConnect", (e) => new LE(e));
}
class $E {
  constructor() {
    (this.blink = !1), (this.consent = !1), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.blink !== void 0 && (this.blink = e.blink),
      e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class jE {
  constructor() {
    (this.distance = 100), (this.links = new $E());
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(e.links ?? e.lineLinked ?? e.line_linked));
  }
}
function FE(t, e, n, i, r, s) {
  Jr(t, n, i), (t.strokeStyle = ln(r, s)), (t.lineWidth = e), t.stroke();
}
function NE(t, e, n, i, r) {
  t.canvas.draw((s) => {
    const o = e.getPosition();
    FE(s, e.retina.linksWidth ?? 0, o, r, n, i);
  });
}
class BE extends Xt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.grab;
    n && (e.retina.grabModeDistance = n.distance * e.retina.pixelRatio);
  }
  async interact() {
    var a;
    const e = this.container,
      n = e.actualOptions,
      i = n.interactivity;
    if (
      !i.modes.grab ||
      !i.events.onHover.enable ||
      e.interactivity.status !== yi
    )
      return;
    const r = e.interactivity.mouse.position;
    if (!r) return;
    const s = e.retina.grabModeDistance;
    if (!s || s < 0) return;
    const o = e.particles.quadTree.queryCircle(r, s, (l) => this.isEnabled(l));
    for (const l of o) {
      const u = l.getPosition(),
        c = it(u, r);
      if (c > s) continue;
      const d = i.modes.grab.links,
        f = d.opacity,
        p = f - (c * f) / s;
      if (p <= 0) continue;
      const g = d.color ?? ((a = l.options.links) == null ? void 0 : a.color);
      if (!e.particles.grabLineColor && g) {
        const b = i.modes.grab.links;
        e.particles.grabLineColor = Oy(g, b.blink, b.consent);
      }
      const m = gc(l, void 0, e.particles.grabLineColor);
      m && NE(e, l, m, p, r);
    }
  }
  isEnabled(e) {
    const n = this.container,
      i = n.interactivity.mouse,
      r = (
        (e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity
      ).events;
    return r.onHover.enable && !!i.position && ye("grab", r.onHover.mode);
  }
  loadModeOptions(e, ...n) {
    e.grab || (e.grab = new jE());
    for (const i of n) e.grab.load(i == null ? void 0 : i.grab);
  }
  reset() {}
}
async function HE(t) {
  await t.addInteractor("externalGrab", (e) => new BE(e));
}
class WE extends Xt {
  constructor(e) {
    super(e),
      (this.handleClickMode = (n) => {
        if (n !== "pause") return;
        const i = this.container;
        i.getAnimationStatus() ? i.pause() : i.play();
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
async function VE(t) {
  await t.addInteractor("externalPause", (e) => new WE(e));
}
class qE {
  constructor() {
    (this.default = !0), (this.groups = []), (this.quantity = 4);
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = X(e);
  }
  load(e) {
    if (!e) return;
    e.default !== void 0 && (this.default = e.default),
      e.groups !== void 0 && (this.groups = e.groups.map((i) => i)),
      this.groups.length || (this.default = !0);
    const n = e.quantity ?? e.particles_nb;
    n !== void 0 && (this.quantity = X(n));
  }
}
class UE extends Xt {
  constructor(e) {
    super(e),
      (this.handleClickMode = (n) => {
        if (n !== "push") return;
        const i = this.container,
          r = i.actualOptions,
          s = r.interactivity.modes.push;
        if (!s) return;
        const o = N(s.quantity);
        if (o <= 0) return;
        const a = Rs([void 0, ...s.groups]),
          l = a !== void 0 ? i.actualOptions.particles.groups[a] : void 0;
        i.particles.push(o, i.interactivity.mouse, l, a);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...n) {
    e.push || (e.push = new qE());
    for (const i of n) e.push.load(i == null ? void 0 : i.push);
  }
  reset() {}
}
async function XE(t) {
  await t.addInteractor("externalPush", (e) => new UE(e));
}
class GE {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = X(e);
  }
  load(e) {
    if (!e) return;
    const n = e.quantity ?? e.particles_nb;
    n !== void 0 && (this.quantity = X(n));
  }
}
class KE extends Xt {
  constructor(e) {
    super(e),
      (this.handleClickMode = (n) => {
        const i = this.container,
          r = i.actualOptions;
        if (!r.interactivity.modes.remove || n !== "remove") return;
        const s = N(r.interactivity.modes.remove.quantity);
        i.particles.removeQuantity(s);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...n) {
    e.remove || (e.remove = new GE());
    for (const i of n) e.remove.load(i == null ? void 0 : i.remove);
  }
  reset() {}
}
async function YE(t) {
  await t.addInteractor("externalRemove", (e) => new KE(e));
}
class Xy {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.factor = 100),
      (this.speed = 1),
      (this.maxSpeed = 50),
      (this.easing = "ease-out-quad");
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.speed !== void 0 && (this.speed = e.speed),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed));
  }
}
class QE extends Xy {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return ve(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = ve(e, (n) => `#${n}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class ZE extends Xy {
  load(e) {
    super.load(e),
      e &&
        (this.divs = ve(e.divs, (n) => {
          const i = new QE();
          return i.load(n), i;
        }));
  }
}
class JE extends Xt {
  constructor(e, n) {
    super(n),
      (this._clickRepulse = () => {
        const i = this.container,
          r = i.actualOptions.interactivity.modes.repulse;
        if (!r) return;
        const s = i.repulse || { particles: [] };
        if (
          (s.finish ||
            (s.count || (s.count = 0),
            s.count++,
            s.count === i.particles.count && (s.finish = !0)),
          s.clicking)
        ) {
          const o = i.retina.repulseModeDistance;
          if (!o || o < 0) return;
          const a = Math.pow(o / 6, 3),
            l = i.interactivity.mouse.clickPosition;
          if (l === void 0) return;
          const u = new pt(l.x, l.y, a),
            c = i.particles.quadTree.query(u, (d) => this.isEnabled(d));
          for (const d of c) {
            const { dx: f, dy: p, distance: g } = Je(l, d.position),
              m = g ** 2,
              b = r.speed,
              y = (-a * b) / m;
            if (m <= a) {
              s.particles.push(d);
              const h = fe.create(f, p);
              (h.length = y), d.velocity.setTo(h);
            }
          }
        } else if (s.clicking === !1) {
          for (const o of s.particles) o.velocity.setTo(o.initialVelocity);
          s.particles = [];
        }
      }),
      (this._hoverRepulse = () => {
        const i = this.container,
          r = i.interactivity.mouse.position,
          s = i.retina.repulseModeDistance;
        !s || s < 0 || !r || this._processRepulse(r, s, new pt(r.x, r.y, s));
      }),
      (this._processRepulse = (i, r, s, o) => {
        const a = this.container,
          l = a.particles.quadTree.query(s, (c) => this.isEnabled(c)),
          u = a.actualOptions.interactivity.modes.repulse;
        if (u)
          for (const c of l) {
            const { dx: d, dy: f, distance: p } = Je(c.position, i),
              g = ((o == null ? void 0 : o.speed) ?? u.speed) * u.factor,
              m = Ut(vy(u.easing)(1 - p / r) * g, 0, u.maxSpeed),
              b = fe.create(
                p === 0 ? g : (d / p) * m,
                p === 0 ? g : (f / p) * m,
              );
            c.position.addTo(b);
          }
      }),
      (this._singleSelectorRepulse = (i, r) => {
        const s = this.container,
          o = s.actualOptions.interactivity.modes.repulse;
        if (!o) return;
        const a = document.querySelectorAll(i);
        a.length &&
          a.forEach((l) => {
            const u = l,
              c = s.retina.pixelRatio,
              d = {
                x: (u.offsetLeft + u.offsetWidth / 2) * c,
                y: (u.offsetTop + u.offsetHeight / 2) * c,
              },
              f = (u.offsetWidth / 2) * c,
              p =
                r.type === "circle"
                  ? new pt(d.x, d.y, f)
                  : new un(
                      u.offsetLeft * c,
                      u.offsetTop * c,
                      u.offsetWidth * c,
                      u.offsetHeight * c,
                    ),
              g = o.divs,
              m = _y(g, u);
            this._processRepulse(d, f, p, m);
          });
      }),
      (this._engine = e),
      n.repulse || (n.repulse = { particles: [] }),
      (this.handleClickMode = (i) => {
        const r = this.container.actualOptions,
          s = r.interactivity.modes.repulse;
        if (!s || i !== "repulse") return;
        n.repulse || (n.repulse = { particles: [] });
        const o = n.repulse;
        (o.clicking = !0), (o.count = 0);
        for (const a of n.repulse.particles)
          this.isEnabled(a) && a.velocity.setTo(a.initialVelocity);
        (o.particles = []),
          (o.finish = !1),
          setTimeout(() => {
            n.destroyed || (o.clicking = !1);
          }, s.duration * 1e3);
      });
  }
  clear() {}
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.repulse;
    n && (e.retina.repulseModeDistance = n.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      n = e.actualOptions,
      i = e.interactivity.status === yi,
      r = n.interactivity.events,
      s = r.onHover,
      o = s.enable,
      a = s.mode,
      l = r.onClick,
      u = l.enable,
      c = l.mode,
      d = r.onDiv;
    i && o && ye("repulse", a)
      ? this._hoverRepulse()
      : u && ye("repulse", c)
      ? this._clickRepulse()
      : qd("repulse", d, (f, p) => this._singleSelectorRepulse(f, p));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      o = s.onDiv,
      a = s.onHover,
      l = s.onClick,
      u = Vd("repulse", o);
    if (!(u || (a.enable && r.position) || (l.enable && r.clickPosition)))
      return !1;
    const c = a.mode,
      d = l.mode;
    return ye("repulse", c) || ye("repulse", d) || u;
  }
  loadModeOptions(e, ...n) {
    e.repulse || (e.repulse = new ZE());
    for (const i of n) e.repulse.load(i == null ? void 0 : i.repulse);
  }
  reset() {}
}
async function eP(t) {
  await t.addInteractor("externalRepulse", (e) => new JE(t, e));
}
class tP {
  constructor() {
    (this.factor = 3), (this.radius = 200);
  }
  load(e) {
    e &&
      (e.factor !== void 0 && (this.factor = e.factor),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class nP extends Xt {
  constructor(e) {
    super(e);
  }
  clear(e, n, i) {
    (e.slow.inRange && !i) || (e.slow.factor = 1);
  }
  init() {
    const e = this.container,
      n = e.actualOptions.interactivity.modes.slow;
    n && (e.retina.slowModeRadius = n.radius * e.retina.pixelRatio);
  }
  async interact() {}
  isEnabled(e) {
    const n = this.container,
      i = n.interactivity.mouse,
      r = (
        (e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity
      ).events;
    return r.onHover.enable && !!i.position && ye("slow", r.onHover.mode);
  }
  loadModeOptions(e, ...n) {
    e.slow || (e.slow = new tP());
    for (const i of n) e.slow.load(i == null ? void 0 : i.slow);
  }
  reset(e) {
    e.slow.inRange = !1;
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse.position,
      s = n.retina.slowModeRadius,
      o = i.interactivity.modes.slow;
    if (!o || !s || s < 0 || !r) return;
    const a = e.getPosition(),
      l = it(r, a),
      u = l / s,
      c = o.factor,
      { slow: d } = e;
    l > s || ((d.inRange = !0), (d.factor = u / c));
  }
}
async function iP(t) {
  await t.addInteractor("externalSlow", (e) => new nP(e));
}
const rP =
  /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function sP(t, e, n) {
  const { svgData: i } = t;
  if (!i) return "";
  const r = hr(e, n);
  if (i.includes("fill")) return i.replace(rP, () => r);
  const s = i.indexOf(">");
  return `${i.substring(0, s)} fill="${r}"${i.substring(s)}`;
}
async function Zd(t) {
  return new Promise((e) => {
    t.loading = !0;
    const n = new Image();
    (t.element = n),
      n.addEventListener("load", () => {
        (t.loading = !1), e();
      }),
      n.addEventListener("error", () => {
        (t.element = void 0),
          (t.error = !0),
          (t.loading = !1),
          console.error(`${qt} loading image: ${t.source}`),
          e();
      }),
      (n.src = t.source);
  });
}
async function oP(t) {
  if (t.type !== "svg") {
    await Zd(t);
    return;
  }
  t.loading = !0;
  const e = await fetch(t.source);
  e.ok || (console.error(`${qt} Image not found`), (t.error = !0)),
    t.error || (t.svgData = await e.text()),
    (t.loading = !1);
}
function aP(t, e, n, i) {
  var o;
  const r = sP(t, n, ((o = i.opacity) == null ? void 0 : o.value) ?? 1),
    s = {
      color: n,
      data: { ...t, svgData: r },
      loaded: !1,
      ratio: e.width / e.height,
      replaceColor: e.replaceColor ?? e.replace_color,
      source: e.src,
    };
  return new Promise((a) => {
    const l = new Blob([r], { type: "image/svg+xml" }),
      u = URL || window.URL || window.webkitURL || window,
      c = u.createObjectURL(l),
      d = new Image();
    d.addEventListener("load", () => {
      (s.loaded = !0), (s.element = d), a(s), u.revokeObjectURL(c);
    }),
      d.addEventListener("error", async () => {
        u.revokeObjectURL(c);
        const f = { ...t, error: !1, loading: !0 };
        await Zd(f), (s.loaded = !0), (s.element = f.element), a(s);
      }),
      (d.src = c);
  });
}
class lP {
  constructor(e) {
    (this.loadImageShape = async (n) => {
      if (!this._engine.loadImage)
        throw new Error(`${qt} image shape not initialized`);
      await this._engine.loadImage({
        name: n.name,
        replaceColor: n.replaceColor ?? n.replace_color ?? !1,
        src: n.src,
      });
    }),
      (this._engine = e);
  }
  addImage(e) {
    this._engine.images || (this._engine.images = []),
      this._engine.images.push(e);
  }
  draw(e, n, i, r) {
    const s = n.image,
      o = s == null ? void 0 : s.element;
    if (!o) return;
    const a = (s == null ? void 0 : s.ratio) ?? 1,
      l = { x: -i, y: -i };
    (e.globalAlpha = r),
      e.drawImage(o, l.x, l.y, i * 2, (i * 2) / a),
      (e.globalAlpha = 1);
  }
  getSidesCount() {
    return 12;
  }
  async init(e) {
    const n = e.actualOptions;
    if (!(!n.preload || !this._engine.loadImage))
      for (const i of n.preload) this._engine.loadImage(i);
  }
  loadShape(e) {
    if (e.shape !== "image" && e.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const n = e.shapeData;
    this._engine.images.find((r) => r.name === n.name || r.source === n.src) ||
      this.loadImageShape(n).then(() => {
        this.loadShape(e);
      });
  }
  particleInit(e, n) {
    if (n.shape !== "image" && n.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const i = this._engine.images,
      r = n.shapeData,
      s = n.getFillColor(),
      o = i.find((l) => l.name === r.name || l.source === r.src);
    if (!o) return;
    const a = r.replaceColor ?? r.replace_color ?? o.replaceColor;
    if (o.loading) {
      setTimeout(() => {
        this.particleInit(e, n);
      });
      return;
    }
    (async () => {
      let l;
      o.svgData && s
        ? (l = await aP(o, r, s, n))
        : (l = {
            color: s,
            data: o,
            element: o.element,
            loaded: !0,
            ratio: r.width && r.height ? r.width / r.height : o.ratio ?? 1,
            replaceColor: a,
            source: r.src,
          }),
        l.ratio || (l.ratio = 1);
      const u = r.fill ?? n.fill,
        c = r.close ?? n.close,
        d = { image: l, fill: u, close: c };
      (n.image = d.image), (n.fill = d.fill), (n.close = d.close);
    })();
  }
}
class uP {
  constructor() {
    this.src = "";
  }
  load(e) {
    e &&
      (e.height !== void 0 && (this.height = e.height),
      e.name !== void 0 && (this.name = e.name),
      e.replaceColor !== void 0 && (this.replaceColor = e.replaceColor),
      e.src !== void 0 && (this.src = e.src),
      e.width !== void 0 && (this.width = e.width));
  }
}
class cP {
  constructor(e) {
    (this.id = "imagePreloader"), (this._engine = e);
  }
  getPlugin() {
    return {};
  }
  loadOptions(e, n) {
    if (!n || !n.preload) return;
    e.preload || (e.preload = []);
    const i = e.preload;
    for (const r of n.preload) {
      const s = i.find((o) => o.name === r.name || o.src === r.src);
      if (s) s.load(r);
      else {
        const o = new uP();
        o.load(r), i.push(o);
      }
    }
  }
  needsPlugin() {
    return !0;
  }
}
async function dP(t) {
  t.loadImage ||
    (t.loadImage = async (n) => {
      if (!n.name && !n.src) throw new Error(`${qt} no image source provided`);
      if (
        (t.images || (t.images = []),
        !t.images.find((i) => i.name === n.name || i.source === n.src))
      )
        try {
          const i = {
            name: n.name ?? n.src,
            source: n.src,
            type: n.src.substring(n.src.length - 3),
            error: !1,
            loading: !0,
            replaceColor: n.replaceColor,
            ratio: n.width && n.height ? n.width / n.height : void 0,
          };
          t.images.push(i), await (n.replaceColor ? oP : Zd)(i);
        } catch {
          throw new Error(`${qt} ${n.name ?? n.src} not found`);
        }
    });
  const e = new cP(t);
  await t.addPlugin(e), await t.addShape(["image", "images"], new lP(t));
}
class fP extends Dt {
  constructor() {
    super(), (this.sync = !1);
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class pP extends Dt {
  constructor() {
    super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class hP {
  constructor() {
    (this.count = 0), (this.delay = new fP()), (this.duration = new pP());
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = e.count),
      this.delay.load(e.delay),
      this.duration.load(e.duration));
  }
}
class mP {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = this.container,
      i = e.options,
      r = i.life;
    r &&
      ((e.life = {
        delay: n.retina.reduceFactor
          ? ((N(r.delay.value) * (r.delay.sync ? 1 : K())) /
              n.retina.reduceFactor) *
            1e3
          : 0,
        delayTime: 0,
        duration: n.retina.reduceFactor
          ? ((N(r.duration.value) * (r.duration.sync ? 1 : K())) /
              n.retina.reduceFactor) *
            1e3
          : 0,
        time: 0,
        count: r.count,
      }),
      e.life.duration <= 0 && (e.life.duration = -1),
      e.life.count <= 0 && (e.life.count = -1),
      e.life && (e.spawning = e.life.delay > 0));
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...n) {
    e.life || (e.life = new hP());
    for (const i of n) e.life.load(i == null ? void 0 : i.life);
  }
  update(e, n) {
    if (!this.isEnabled(e) || !e.life) return;
    const i = e.life;
    let r = !1;
    if (e.spawning)
      if (((i.delayTime += n.value), i.delayTime >= e.life.delay))
        (r = !0), (e.spawning = !1), (i.delayTime = 0), (i.time = 0);
      else return;
    if (
      i.duration === -1 ||
      e.spawning ||
      (r ? (i.time = 0) : (i.time += n.value), i.time < i.duration)
    )
      return;
    if (
      ((i.time = 0), e.life.count > 0 && e.life.count--, e.life.count === 0)
    ) {
      e.destroy();
      return;
    }
    const s = this.container.canvas.size,
      o = X(0, s.width),
      a = X(0, s.width);
    (e.position.x = Be(o)),
      (e.position.y = Be(a)),
      (e.spawning = !0),
      (i.delayTime = 0),
      (i.time = 0),
      e.reset();
    const l = e.options.life;
    l &&
      ((i.delay = N(l.delay.value) * 1e3),
      (i.duration = N(l.duration.value) * 1e3));
  }
}
async function gP(t) {
  await t.addParticleUpdater("life", (e) => new mP(e));
}
class yP {
  draw(e, n, i) {
    e.moveTo(-i / 2, 0), e.lineTo(i / 2, 0);
  }
  getSidesCount() {
    return 1;
  }
}
async function vP(t) {
  await t.addShape("line", new yP());
}
function wP(t, e, n, i) {
  switch (t.options.opacity.animation.destroy) {
    case "max":
      e >= i && t.destroy();
      break;
    case "min":
      e <= n && t.destroy();
      break;
  }
}
function bP(t, e) {
  const n = t.opacity;
  if (
    t.destroyed ||
    !(n != null && n.enable) ||
    ((n.maxLoops ?? 0) > 0 && (n.loops ?? 0) > (n.maxLoops ?? 0))
  )
    return;
  const i = n.min,
    r = n.max,
    s = n.decay ?? 1;
  if (
    (n.time || (n.time = 0),
    (n.delayTime ?? 0) > 0 &&
      n.time < (n.delayTime ?? 0) &&
      (n.time += e.value),
    !((n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0)))
  ) {
    switch (n.status) {
      case "increasing":
        n.value >= r
          ? ((n.status = "decreasing"), n.loops || (n.loops = 0), n.loops++)
          : (n.value += (n.velocity ?? 0) * e.factor);
        break;
      case "decreasing":
        n.value <= i
          ? ((n.status = "increasing"), n.loops || (n.loops = 0), n.loops++)
          : (n.value -= (n.velocity ?? 0) * e.factor);
        break;
    }
    n.velocity && n.decay !== 1 && (n.velocity *= s),
      wP(t, n.value, i, r),
      t.destroyed || (n.value = Ut(n.value, i, r));
  }
}
class xP {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.opacity;
    e.opacity = Py(n, 1);
    const i = n.animation;
    i.enable &&
      ((e.opacity.velocity =
        (N(i.speed) / 100) * this.container.retina.reduceFactor),
      i.sync || (e.opacity.velocity *= K()));
  }
  isEnabled(e) {
    return (
      !e.destroyed &&
      !e.spawning &&
      !!e.opacity &&
      e.opacity.enable &&
      ((e.opacity.maxLoops ?? 0) <= 0 ||
        ((e.opacity.maxLoops ?? 0) > 0 &&
          (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0)))
    );
  }
  reset(e) {
    e.opacity && ((e.opacity.time = 0), (e.opacity.loops = 0));
  }
  update(e, n) {
    this.isEnabled(e) && bP(e, n);
  }
}
async function SP(t) {
  await t.addParticleUpdater("opacity", (e) => new xP(e));
}
function kP(t) {
  if (
    t.outMode !== "bounce" &&
    t.outMode !== "bounce-horizontal" &&
    t.outMode !== "bounceHorizontal" &&
    t.outMode !== "split"
  )
    return;
  t.bounds.right < 0
    ? (t.particle.position.x = t.size + t.offset.x)
    : t.bounds.left > t.canvasSize.width &&
      (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
  const e = t.particle.velocity.x;
  let n = !1;
  if (
    (t.direction === "right" &&
      t.bounds.right >= t.canvasSize.width &&
      e > 0) ||
    (t.direction === "left" && t.bounds.left <= 0 && e < 0)
  ) {
    const r = kn(t.particle.options.bounce.horizontal);
    (t.particle.velocity.x *= -r), (n = !0);
  }
  if (!n) return;
  const i = t.offset.x + t.size;
  t.bounds.right >= t.canvasSize.width
    ? (t.particle.position.x = t.canvasSize.width - i)
    : t.bounds.left <= 0 && (t.particle.position.x = i),
    t.outMode === "split" && t.particle.destroy();
}
function _P(t) {
  if (
    t.outMode !== "bounce" &&
    t.outMode !== "bounce-vertical" &&
    t.outMode !== "bounceVertical" &&
    t.outMode !== "split"
  )
    return;
  t.bounds.bottom < 0
    ? (t.particle.position.y = t.size + t.offset.y)
    : t.bounds.top > t.canvasSize.height &&
      (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
  const e = t.particle.velocity.y;
  let n = !1;
  if (
    (t.direction === "bottom" &&
      t.bounds.bottom >= t.canvasSize.height &&
      e > 0) ||
    (t.direction === "top" && t.bounds.top <= 0 && e < 0)
  ) {
    const r = kn(t.particle.options.bounce.vertical);
    (t.particle.velocity.y *= -r), (n = !0);
  }
  if (!n) return;
  const i = t.offset.y + t.size;
  t.bounds.bottom >= t.canvasSize.height
    ? (t.particle.position.y = t.canvasSize.height - i)
    : t.bounds.top <= 0 && (t.particle.position.y = i),
    t.outMode === "split" && t.particle.destroy();
}
class CP {
  constructor(e) {
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
  update(e, n, i, r) {
    if (!this.modes.includes(r)) return;
    const s = this.container;
    let o = !1;
    for (const [, f] of s.plugins)
      if ((f.particleBounce !== void 0 && (o = f.particleBounce(e, i, n)), o))
        break;
    if (o) return;
    const a = e.getPosition(),
      l = e.offset,
      u = e.getRadius(),
      c = Ds(a, u),
      d = s.canvas.size;
    kP({
      particle: e,
      outMode: r,
      direction: n,
      bounds: c,
      canvasSize: d,
      offset: l,
      size: u,
    }),
      _P({
        particle: e,
        outMode: r,
        direction: n,
        bounds: c,
        canvasSize: d,
        offset: l,
        size: u,
      });
  }
}
class EP {
  constructor(e) {
    (this.container = e), (this.modes = ["destroy"]);
  }
  update(e, n, i, r) {
    if (!this.modes.includes(r)) return;
    const s = this.container;
    switch (e.outType) {
      case "normal":
      case "outside":
        if (Ls(e.position, s.canvas.size, fe.origin, e.getRadius(), n)) return;
        break;
      case "inside": {
        const { dx: o, dy: a } = Je(e.position, e.moveCenter),
          { x: l, y: u } = e.velocity;
        if (
          (l < 0 && o > e.moveCenter.radius) ||
          (u < 0 && a > e.moveCenter.radius) ||
          (l >= 0 && o < -e.moveCenter.radius) ||
          (u >= 0 && a < -e.moveCenter.radius)
        )
          return;
        break;
      }
    }
    s.particles.remove(e, void 0, !0);
  }
}
class PP {
  constructor(e) {
    (this.container = e), (this.modes = ["none"]);
  }
  update(e, n, i, r) {
    if (
      !this.modes.includes(r) ||
      (e.options.move.distance.horizontal && (n === "left" || n === "right")) ||
      (e.options.move.distance.vertical && (n === "top" || n === "bottom"))
    )
      return;
    const s = e.options.move.gravity,
      o = this.container,
      a = o.canvas.size,
      l = e.getRadius();
    if (s.enable) {
      const u = e.position;
      ((!s.inverse && u.y > a.height + l && n === "bottom") ||
        (s.inverse && u.y < -l && n === "top")) &&
        o.particles.remove(e);
    } else {
      if (
        (e.velocity.y > 0 && e.position.y <= a.height + l) ||
        (e.velocity.y < 0 && e.position.y >= -l) ||
        (e.velocity.x > 0 && e.position.x <= a.width + l) ||
        (e.velocity.x < 0 && e.position.x >= -l)
      )
        return;
      Ls(e.position, o.canvas.size, fe.origin, l, n) || o.particles.remove(e);
    }
  }
}
class TP {
  constructor(e) {
    (this.container = e), (this.modes = ["out"]);
  }
  update(e, n, i, r) {
    if (!this.modes.includes(r)) return;
    const s = this.container;
    switch (e.outType) {
      case "inside": {
        const { x: o, y: a } = e.velocity,
          l = fe.origin;
        (l.length = e.moveCenter.radius),
          (l.angle = e.velocity.angle + Math.PI),
          l.addTo(fe.create(e.moveCenter));
        const { dx: u, dy: c } = Je(e.position, l);
        if (
          (o <= 0 && u >= 0) ||
          (a <= 0 && c >= 0) ||
          (o >= 0 && u <= 0) ||
          (a >= 0 && c <= 0)
        )
          return;
        (e.position.x = Math.floor(Be({ min: 0, max: s.canvas.size.width }))),
          (e.position.y = Math.floor(
            Be({ min: 0, max: s.canvas.size.height }),
          ));
        const { dx: d, dy: f } = Je(e.position, e.moveCenter);
        (e.direction = Math.atan2(-f, -d)), (e.velocity.angle = e.direction);
        break;
      }
      default: {
        if (Ls(e.position, s.canvas.size, fe.origin, e.getRadius(), n)) return;
        switch (e.outType) {
          case "outside": {
            (e.position.x =
              Math.floor(
                Be({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
              ) + e.moveCenter.x),
              (e.position.y =
                Math.floor(
                  Be({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
                ) + e.moveCenter.y);
            const { dx: o, dy: a } = Je(e.position, e.moveCenter);
            e.moveCenter.radius &&
              ((e.direction = Math.atan2(a, o)),
              (e.velocity.angle = e.direction));
            break;
          }
          case "normal": {
            const o = e.options.move.warp,
              a = s.canvas.size,
              l = {
                bottom: a.height + e.getRadius() + e.offset.y,
                left: -e.getRadius() - e.offset.x,
                right: a.width + e.getRadius() + e.offset.x,
                top: -e.getRadius() - e.offset.y,
              },
              u = e.getRadius(),
              c = Ds(e.position, u);
            n === "right" && c.left > a.width + e.offset.x
              ? ((e.position.x = l.left),
                (e.initialPosition.x = e.position.x),
                o ||
                  ((e.position.y = K() * a.height),
                  (e.initialPosition.y = e.position.y)))
              : n === "left" &&
                c.right < -e.offset.x &&
                ((e.position.x = l.right),
                (e.initialPosition.x = e.position.x),
                o ||
                  ((e.position.y = K() * a.height),
                  (e.initialPosition.y = e.position.y))),
              n === "bottom" && c.top > a.height + e.offset.y
                ? (o ||
                    ((e.position.x = K() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.top),
                  (e.initialPosition.y = e.position.y))
                : n === "top" &&
                  c.bottom < -e.offset.y &&
                  (o ||
                    ((e.position.x = K() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.bottom),
                  (e.initialPosition.y = e.position.y));
            break;
          }
        }
        break;
      }
    }
  }
}
class zP {
  constructor(e) {
    (this.container = e),
      (this._updateOutMode = (n, i, r, s) => {
        for (const o of this.updaters) o.update(n, s, i, r);
      }),
      (this.updaters = [new CP(e), new EP(e), new TP(e), new PP(e)]);
  }
  init() {}
  isEnabled(e) {
    return !e.destroyed && !e.spawning;
  }
  update(e, n) {
    const i = e.options.move.outModes;
    this._updateOutMode(e, n, i.bottom ?? i.default, "bottom"),
      this._updateOutMode(e, n, i.left ?? i.default, "left"),
      this._updateOutMode(e, n, i.right ?? i.default, "right"),
      this._updateOutMode(e, n, i.top ?? i.default, "top");
  }
}
async function AP(t) {
  await t.addParticleUpdater("outModes", (e) => new zP(e));
}
class MP {
  init() {}
  isEnabled(e) {
    return (
      !Kn() &&
      !e.destroyed &&
      e.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(e) {
    const n = e.container,
      i = n.actualOptions,
      r = i.interactivity.events.onHover.parallax;
    if (Kn() || !r.enable) return;
    const s = r.force,
      o = n.interactivity.mouse.position;
    if (!o) return;
    const a = n.canvas.size,
      l = { x: a.width / 2, y: a.height / 2 },
      u = r.smooth,
      c = e.getRadius() / s,
      d = { x: (o.x - l.x) * c, y: (o.y - l.y) * c },
      { offset: f } = e;
    (f.x += (d.x - f.x) / u), (f.y += (d.y - f.y) / u);
  }
}
async function OP(t) {
  t.addMover("parallax", () => new MP());
}
class IP extends Gd {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e) {
    const n = this.container,
      i = e.retina.attractDistance ?? n.retina.attractDistance,
      r = e.getPosition(),
      s = n.particles.quadTree.queryCircle(r, i);
    for (const o of s) {
      if (
        e === o ||
        !o.options.move.attract.enable ||
        o.destroyed ||
        o.spawning
      )
        continue;
      const a = o.getPosition(),
        { dx: l, dy: u } = Je(r, a),
        c = e.options.move.attract.rotate,
        d = l / (c.x * 1e3),
        f = u / (c.y * 1e3),
        p = o.size.value / e.size.value,
        g = 1 / p;
      (e.velocity.x -= d * p),
        (e.velocity.y -= f * p),
        (o.velocity.x += d * g),
        (o.velocity.y += f * g);
    }
  }
  isEnabled(e) {
    return e.options.move.attract.enable;
  }
  reset() {}
}
async function RP(t) {
  await t.addInteractor("particlesAttract", (e) => new IP(e));
}
function zh(t, e, n, i, r, s) {
  const o = Ut((t.options.collisions.absorb.speed * r.factor) / 10, 0, i);
  (t.size.value += o / 2),
    (n.size.value -= o),
    i <= s && ((n.size.value = 0), n.destroy());
}
function LP(t, e, n, i) {
  const r = t.getRadius(),
    s = e.getRadius();
  r === void 0 && s !== void 0
    ? t.destroy()
    : r !== void 0 && s === void 0
    ? e.destroy()
    : r !== void 0 &&
      s !== void 0 &&
      (r >= s ? zh(t, r, e, s, n, i) : zh(e, s, t, r, n, i));
}
const Ah = (t) => {
  t.collisionMaxSpeed === void 0 &&
    (t.collisionMaxSpeed = N(t.options.collisions.maxSpeed)),
    t.velocity.length > t.collisionMaxSpeed &&
      (t.velocity.length = t.collisionMaxSpeed);
};
function Gy(t, e) {
  Cy(mc(t), mc(e)), Ah(t), Ah(e);
}
function DP(t, e) {
  !t.unbreakable && !e.unbreakable && Gy(t, e),
    t.getRadius() === void 0 && e.getRadius() !== void 0
      ? t.destroy()
      : t.getRadius() !== void 0 && e.getRadius() === void 0
      ? e.destroy()
      : t.getRadius() !== void 0 &&
        e.getRadius() !== void 0 &&
        (t.getRadius() >= e.getRadius() ? e : t).destroy();
}
function $P(t, e, n, i) {
  switch (t.options.collisions.mode) {
    case "absorb": {
      LP(t, e, n, i);
      break;
    }
    case "bounce": {
      Gy(t, e);
      break;
    }
    case "destroy": {
      DP(t, e);
      break;
    }
  }
}
class jP extends Gd {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e, n) {
    if (e.destroyed || e.spawning) return;
    const i = this.container,
      r = e.getPosition(),
      s = e.getRadius(),
      o = i.particles.quadTree.queryCircle(r, s * 2);
    for (const a of o) {
      if (
        e === a ||
        !a.options.collisions.enable ||
        e.options.collisions.mode !== a.options.collisions.mode ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        u = a.getRadius();
      if (Math.abs(Math.round(r.z) - Math.round(l.z)) > s + u) continue;
      const c = it(r, l),
        d = s + u;
      c > d || $P(e, a, n, i.retina.pixelRatio);
    }
  }
  isEnabled(e) {
    return e.options.collisions.enable;
  }
  reset() {}
}
async function FP(t) {
  await t.addInteractor("particlesCollisions", (e) => new jP(e));
}
class NP extends pt {
  constructor(e, n, i, r) {
    super(e, n, i), (this.canvasSize = r), (this.canvasSize = { ...r });
  }
  contains(e) {
    const { width: n, height: i } = this.canvasSize,
      { x: r, y: s } = e;
    return (
      super.contains(e) ||
      super.contains({ x: r - n, y: s }) ||
      super.contains({ x: r - n, y: s - i }) ||
      super.contains({ x: r, y: s - i })
    );
  }
  intersects(e) {
    if (super.intersects(e)) return !0;
    const n = e,
      i = e,
      r = {
        x: e.position.x - this.canvasSize.width,
        y: e.position.y - this.canvasSize.height,
      };
    if (i.radius !== void 0) {
      const s = new pt(r.x, r.y, i.radius * 2);
      return super.intersects(s);
    } else if (n.size !== void 0) {
      const s = new un(r.x, r.y, n.size.width * 2, n.size.height * 2);
      return super.intersects(s);
    }
    return !1;
  }
}
class BP {
  constructor() {
    (this.blur = 5),
      (this.color = new ze()),
      (this.color.value = "#000"),
      (this.enable = !1);
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ze.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class HP {
  constructor() {
    (this.enable = !1), (this.frequency = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class WP {
  constructor() {
    (this.blink = !1),
      (this.color = new ze()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new BP()),
      (this.triangles = new HP()),
      (this.width = 1),
      (this.warp = !1);
  }
  load(e) {
    e &&
      (e.id !== void 0 && (this.id = e.id),
      e.blink !== void 0 && (this.blink = e.blink),
      (this.color = ze.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.distance !== void 0 && (this.distance = e.distance),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      this.shadow.load(e.shadow),
      this.triangles.load(e.triangles),
      e.width !== void 0 && (this.width = e.width),
      e.warp !== void 0 && (this.warp = e.warp));
  }
}
function VP(t, e, n, i, r) {
  const { dx: s, dy: o, distance: a } = Je(t, e);
  if (!r || a <= n) return a;
  const l = { x: Math.abs(s), y: Math.abs(o) },
    u = { x: Math.min(l.x, i.width - l.x), y: Math.min(l.y, i.height - l.y) };
  return Math.sqrt(u.x ** 2 + u.y ** 2);
}
class qP extends Gd {
  constructor(e) {
    super(e),
      (this._setColor = (n) => {
        if (!n.options.links) return;
        const i = this.linkContainer,
          r = n.options.links;
        let s =
          r.id === void 0
            ? i.particles.linksColor
            : i.particles.linksColors.get(r.id);
        if (s) return;
        const o = r.color;
        (s = Oy(o, r.blink, r.consent)),
          r.id === void 0
            ? (i.particles.linksColor = s)
            : i.particles.linksColors.set(r.id, s);
      }),
      (this.linkContainer = e);
  }
  clear() {}
  init() {
    (this.linkContainer.particles.linksColor = void 0),
      (this.linkContainer.particles.linksColors = new Map());
  }
  async interact(e) {
    if (!e.options.links) return;
    e.links = [];
    const n = e.getPosition(),
      i = this.container,
      r = i.canvas.size;
    if (n.x < 0 || n.y < 0 || n.x > r.width || n.y > r.height) return;
    const s = e.options.links,
      o = s.opacity,
      a = e.retina.linksDistance ?? 0,
      l = s.warp,
      u = l ? new NP(n.x, n.y, a, r) : new pt(n.x, n.y, a),
      c = i.particles.quadTree.query(u);
    for (const d of c) {
      const f = d.options.links;
      if (
        e === d ||
        !(f != null && f.enable) ||
        s.id !== f.id ||
        d.spawning ||
        d.destroyed ||
        !d.links ||
        e.links.some((b) => b.destination === d) ||
        d.links.some((b) => b.destination === e)
      )
        continue;
      const p = d.getPosition();
      if (p.x < 0 || p.y < 0 || p.x > r.width || p.y > r.height) continue;
      const g = VP(n, p, a, r, l && f.warp);
      if (g > a) continue;
      const m = (1 - g / a) * o;
      this._setColor(e), e.links.push({ destination: d, opacity: m });
    }
  }
  isEnabled(e) {
    var n;
    return !!((n = e.options.links) != null && n.enable);
  }
  loadParticlesOptions(e, ...n) {
    e.links || (e.links = new WP());
    for (const i of n)
      e.links.load(
        (i == null ? void 0 : i.links) ??
          (i == null ? void 0 : i.lineLinked) ??
          (i == null ? void 0 : i.line_linked),
      );
  }
  reset() {}
}
async function UP(t) {
  await t.addInteractor("particlesLinks", (e) => new qP(e));
}
function XP(t) {
  let e = !1;
  const {
    begin: n,
    end: i,
    maxDistance: r,
    context: s,
    canvasSize: o,
    width: a,
    backgroundMask: l,
    colorLine: u,
    opacity: c,
    links: d,
  } = t;
  if (it(n, i) <= r) Jr(s, n, i), (e = !0);
  else if (d.warp) {
    let p, g;
    const m = { x: i.x - o.width, y: i.y },
      b = Je(n, m);
    if (b.distance <= r) {
      const y = n.y - (b.dy / b.dx) * n.x;
      (p = { x: 0, y }), (g = { x: o.width, y });
    } else {
      const y = { x: i.x, y: i.y - o.height },
        h = Je(n, y);
      if (h.distance <= r) {
        const w = -(n.y - (h.dy / h.dx) * n.x) / (h.dy / h.dx);
        (p = { x: w, y: 0 }), (g = { x: w, y: o.height });
      } else {
        const v = { x: i.x - o.width, y: i.y - o.height },
          w = Je(n, v);
        if (w.distance <= r) {
          const x = n.y - (w.dy / w.dx) * n.x;
          (p = { x: -x / (w.dy / w.dx), y: x }),
            (g = { x: p.x + o.width, y: p.y + o.height });
        }
      }
    }
    p && g && (Jr(s, n, p), Jr(s, i, g), (e = !0));
  }
  if (!e) return;
  (s.lineWidth = a),
    l.enable && (s.globalCompositeOperation = l.composite),
    (s.strokeStyle = ln(u, c));
  const { shadow: f } = d;
  if (f.enable) {
    const p = Ot(f.color);
    p && ((s.shadowBlur = f.blur), (s.shadowColor = ln(p)));
  }
  s.stroke();
}
function GP(t) {
  const {
    context: e,
    pos1: n,
    pos2: i,
    pos3: r,
    backgroundMask: s,
    colorTriangle: o,
    opacityTriangle: a,
  } = t;
  n4(e, n, i, r),
    s.enable && (e.globalCompositeOperation = s.composite),
    (e.fillStyle = ln(o, a)),
    e.fill();
}
function KP(t) {
  return t.sort((e, n) => e - n), t.join("_");
}
function Mh(t, e) {
  const n = KP(t.map((r) => r.id));
  let i = e.get(n);
  return i === void 0 && ((i = K()), e.set(n, i)), i;
}
class YP {
  constructor(e) {
    (this.container = e),
      (this._drawLinkLine = (n, i) => {
        const r = this.container,
          s = r.actualOptions,
          o = i.destination,
          a = n.getPosition(),
          l = o.getPosition();
        let u = i.opacity;
        r.canvas.draw((c) => {
          var y;
          if (!n.options.links) return;
          let d;
          const f = (y = n.options.twinkle) == null ? void 0 : y.lines;
          if (f != null && f.enable) {
            const h = f.frequency,
              v = Ot(f.color);
            K() < h && v && ((d = v), (u = N(f.opacity)));
          }
          const p = n.options.links;
          if (!d) {
            const h =
              (p == null ? void 0 : p.id) !== void 0
                ? r.particles.linksColors.get(p.id)
                : r.particles.linksColor;
            d = gc(n, o, h);
          }
          if (!d) return;
          const g = n.retina.linksWidth ?? 0,
            m = n.retina.linksDistance ?? 0,
            { backgroundMask: b } = s;
          XP({
            context: c,
            width: g,
            begin: a,
            end: l,
            maxDistance: m,
            canvasSize: r.canvas.size,
            links: p,
            backgroundMask: b,
            colorLine: d,
            opacity: u,
          });
        });
      }),
      (this._drawLinkTriangle = (n, i, r) => {
        if (!n.options.links) return;
        const s = this.container,
          o = s.actualOptions,
          a = i.destination,
          l = r.destination,
          u = n.options.links.triangles,
          c = u.opacity ?? (i.opacity + r.opacity) / 2;
        c <= 0 ||
          s.canvas.draw((d) => {
            const f = n.getPosition(),
              p = a.getPosition(),
              g = l.getPosition(),
              m = n.retina.linksDistance ?? 0;
            if (it(f, p) > m || it(g, p) > m || it(g, f) > m) return;
            let b = Ot(u.color);
            if (!b) {
              const y = n.options.links,
                h =
                  (y == null ? void 0 : y.id) !== void 0
                    ? s.particles.linksColors.get(y.id)
                    : s.particles.linksColor;
              b = gc(n, a, h);
            }
            b &&
              GP({
                context: d,
                pos1: f,
                pos2: p,
                pos3: g,
                backgroundMask: o.backgroundMask,
                colorTriangle: b,
                opacityTriangle: c,
              });
          });
      }),
      (this._drawTriangles = (n, i, r, s) => {
        var l, u, c;
        const o = r.destination;
        if (
          !(
            (l = n.links) != null &&
            l.triangles.enable &&
            (u = o.options.links) != null &&
            u.triangles.enable
          )
        )
          return;
        const a =
          (c = o.links) == null
            ? void 0
            : c.filter((d) => {
                const f = this._getLinkFrequency(o, d.destination);
                return (
                  o.options.links &&
                  f <= o.options.links.frequency &&
                  s.findIndex((p) => p.destination === d.destination) >= 0
                );
              });
        if (a != null && a.length)
          for (const d of a) {
            const f = d.destination;
            this._getTriangleFrequency(i, o, f) > n.links.triangles.frequency ||
              this._drawLinkTriangle(i, r, d);
          }
      }),
      (this._getLinkFrequency = (n, i) => Mh([n, i], this._freqs.links)),
      (this._getTriangleFrequency = (n, i, r) =>
        Mh([n, i, r], this._freqs.triangles)),
      (this._freqs = { links: new Map(), triangles: new Map() });
  }
  drawParticle(e, n) {
    const { links: i, options: r } = n;
    if (!i || i.length <= 0) return;
    const s = i.filter(
      (o) =>
        r.links &&
        this._getLinkFrequency(n, o.destination) <= r.links.frequency,
    );
    for (const o of s)
      this._drawTriangles(r, n, o, s),
        o.opacity > 0 &&
          (n.retina.linksWidth ?? 0) > 0 &&
          this._drawLinkLine(n, o);
  }
  async init() {
    (this._freqs.links = new Map()), (this._freqs.triangles = new Map());
  }
  particleCreated(e) {
    if (((e.links = []), !e.options.links)) return;
    const n = this.container.retina.pixelRatio,
      { retina: i } = e,
      { distance: r, width: s } = e.options.links;
    (i.linksDistance = r * n), (i.linksWidth = s * n);
  }
  particleDestroyed(e) {
    e.links = [];
  }
}
class QP {
  constructor() {
    this.id = "links";
  }
  getPlugin(e) {
    return new YP(e);
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function ZP(t) {
  const e = new QP();
  await t.addPlugin(e);
}
async function JP(t) {
  await UP(t), await ZP(t);
}
class Ky {
  draw(e, n, i) {
    const r = this.getCenter(n, i),
      s = this.getSidesData(n, i),
      o = s.count.numerator * s.count.denominator,
      a = s.count.numerator / s.count.denominator,
      l = (180 * (a - 2)) / a,
      u = Math.PI - (Math.PI * l) / 180;
    if (e) {
      e.beginPath(), e.translate(r.x, r.y), e.moveTo(0, 0);
      for (let c = 0; c < o; c++)
        e.lineTo(s.length, 0), e.translate(s.length, 0), e.rotate(u);
    }
  }
  getSidesCount(e) {
    const n = e.shapeData;
    return Math.round(
      N(
        (n == null ? void 0 : n.sides) ??
          (n == null ? void 0 : n.nb_sides) ??
          5,
      ),
    );
  }
}
class eT extends Ky {
  getCenter(e, n) {
    return { x: -n / (e.sides / 3.5), y: -n / (2.66 / 3.5) };
  }
  getSidesData(e, n) {
    const i = e.sides;
    return {
      count: { denominator: 1, numerator: i },
      length: (n * 2.66) / (i / 3),
    };
  }
}
class tT extends Ky {
  getCenter(e, n) {
    return { x: -n, y: n / 1.66 };
  }
  getSidesCount() {
    return 3;
  }
  getSidesData(e, n) {
    return { count: { denominator: 2, numerator: 3 }, length: n * 2 };
  }
}
async function nT(t) {
  await t.addShape("polygon", new eT());
}
async function iT(t) {
  await t.addShape("triangle", new tT());
}
async function rT(t) {
  await nT(t), await iT(t);
}
class sT {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = X(e.speed)),
      e.decay !== void 0 && (this.decay = X(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class oT extends Dt {
  constructor() {
    super(),
      (this.animation = new sT()),
      (this.direction = "clockwise"),
      (this.path = !1),
      (this.value = 0);
  }
  load(e) {
    e &&
      (super.load(e),
      e.direction !== void 0 && (this.direction = e.direction),
      this.animation.load(e.animation),
      e.path !== void 0 && (this.path = e.path));
  }
}
function aT(t, e) {
  const n = t.rotate,
    i = t.options.rotate;
  if (!n || !i) return;
  const r = i.animation,
    s = (n.velocity ?? 0) * e.factor,
    o = 2 * Math.PI,
    a = n.decay ?? 1;
  if (r.enable) {
    switch (n.status) {
      case "increasing":
        (n.value += s), n.value > o && (n.value -= o);
        break;
      case "decreasing":
      default:
        (n.value -= s), n.value < 0 && (n.value += o);
        break;
    }
    n.velocity && a !== 1 && (n.velocity *= a);
  }
}
class lT {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.rotate;
    if (!n) return;
    (e.rotate = {
      enable: n.animation.enable,
      value: (N(n.value) * Math.PI) / 180,
    }),
      (e.pathRotation = n.path);
    let i = n.direction;
    switch (
      (i === "random" &&
        (i = Math.floor(K() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      i)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.rotate.status = "decreasing";
        break;
      case "clockwise":
        e.rotate.status = "increasing";
        break;
    }
    const r = n.animation;
    r.enable &&
      ((e.rotate.decay = 1 - N(r.decay)),
      (e.rotate.velocity =
        (N(r.speed) / 360) * this.container.retina.reduceFactor),
      r.sync || (e.rotate.velocity *= K())),
      (e.rotation = e.rotate.value);
  }
  isEnabled(e) {
    const n = e.options.rotate;
    return n
      ? !e.destroyed && !e.spawning && n.animation.enable && !n.path
      : !1;
  }
  loadOptions(e, ...n) {
    e.rotate || (e.rotate = new oT());
    for (const i of n) e.rotate.load(i == null ? void 0 : i.rotate);
  }
  update(e, n) {
    var i;
    this.isEnabled(e) &&
      (aT(e, n),
      (e.rotation = ((i = e.rotate) == null ? void 0 : i.value) ?? 0));
  }
}
async function uT(t) {
  await t.addParticleUpdater("rotate", (e) => new lT(e));
}
function cT(t, e, n, i) {
  switch (t.options.size.animation.destroy) {
    case "max":
      e >= i && t.destroy();
      break;
    case "min":
      e <= n && t.destroy();
      break;
  }
}
function dT(t, e) {
  const n = t.size;
  if (
    t.destroyed ||
    !n ||
    !n.enable ||
    ((n.maxLoops ?? 0) > 0 && (n.loops ?? 0) > (n.maxLoops ?? 0))
  )
    return;
  const i = (n.velocity ?? 0) * e.factor,
    r = n.min,
    s = n.max,
    o = n.decay ?? 1;
  if (
    (n.time || (n.time = 0),
    (n.delayTime ?? 0) > 0 &&
      n.time < (n.delayTime ?? 0) &&
      (n.time += e.value),
    !((n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0)))
  ) {
    switch (n.status) {
      case "increasing":
        n.value >= s
          ? ((n.status = "decreasing"), n.loops || (n.loops = 0), n.loops++)
          : (n.value += i);
        break;
      case "decreasing":
        n.value <= r
          ? ((n.status = "increasing"), n.loops || (n.loops = 0), n.loops++)
          : (n.value -= i);
    }
    n.velocity && o !== 1 && (n.velocity *= o),
      cT(t, n.value, r, s),
      t.destroyed || (n.value = Ut(n.value, r, s));
  }
}
class fT {
  init(e) {
    const n = e.container,
      i = e.options.size,
      r = i.animation;
    r.enable &&
      ((e.size.velocity =
        ((e.retina.sizeAnimationSpeed ?? n.retina.sizeAnimationSpeed) / 100) *
        n.retina.reduceFactor),
      r.sync || (e.size.velocity *= K()));
  }
  isEnabled(e) {
    return (
      !e.destroyed &&
      !e.spawning &&
      e.size.enable &&
      ((e.size.maxLoops ?? 0) <= 0 ||
        ((e.size.maxLoops ?? 0) > 0 &&
          (e.size.loops ?? 0) < (e.size.maxLoops ?? 0)))
    );
  }
  reset(e) {
    e.size.loops = 0;
  }
  update(e, n) {
    this.isEnabled(e) && dT(e, n);
  }
}
async function pT(t) {
  await t.addParticleUpdater("size", () => new fT());
}
const lo = Math.sqrt(2);
class hT {
  draw(e, n, i) {
    e.rect(-i / lo, -i / lo, (i * 2) / lo, (i * 2) / lo);
  }
  getSidesCount() {
    return 4;
  }
}
async function mT(t) {
  const e = new hT();
  await t.addShape(["edge", "square"], e);
}
class gT {
  draw(e, n, i) {
    const r = n.sides,
      s = n.starInset ?? 2;
    e.moveTo(0, 0 - i);
    for (let o = 0; o < r; o++)
      e.rotate(Math.PI / r),
        e.lineTo(0, 0 - i * s),
        e.rotate(Math.PI / r),
        e.lineTo(0, 0 - i);
  }
  getSidesCount(e) {
    const n = e.shapeData;
    return Math.round(
      N(
        (n == null ? void 0 : n.sides) ??
          (n == null ? void 0 : n.nb_sides) ??
          5,
      ),
    );
  }
  particleInit(e, n) {
    const i = n.shapeData,
      r = N((i == null ? void 0 : i.inset) ?? 2);
    n.starInset = r;
  }
}
async function yT(t) {
  await t.addShape("star", new gT());
}
function su(t, e, n, i, r) {
  if (
    !e ||
    !n.enable ||
    ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) ||
    (e.time || (e.time = 0),
    (e.delayTime ?? 0) > 0 &&
      e.time < (e.delayTime ?? 0) &&
      (e.time += t.value),
    (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
  )
    return;
  const s = Be(n.offset),
    o = (e.velocity ?? 0) * t.factor + s * 3.6,
    a = e.decay ?? 1;
  !r || e.status === "increasing"
    ? ((e.value += o),
      e.value > i &&
        (e.loops || (e.loops = 0),
        e.loops++,
        r && ((e.status = "decreasing"), (e.value -= e.value % i))))
    : ((e.value -= o),
      e.value < 0 &&
        (e.loops || (e.loops = 0),
        e.loops++,
        (e.status = "increasing"),
        (e.value += e.value))),
    e.velocity && a !== 1 && (e.velocity *= a),
    e.value > i && (e.value %= i);
}
function vT(t, e) {
  if (!t.strokeColor || !t.strokeAnimation) return;
  const { h: n, s: i, l: r } = t.strokeColor,
    { h: s, s: o, l: a } = t.strokeAnimation;
  n && su(e, n, s, 360, !1),
    i && su(e, i, o, 100, !0),
    r && su(e, r, a, 100, !0);
}
class wT {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var o;
    const n = this.container,
      i = e.options,
      r = St(i.stroke, e.id, i.reduceDuplicates);
    (e.strokeWidth = N(r.width) * n.retina.pixelRatio),
      (e.strokeOpacity = N(r.opacity ?? 1)),
      (e.strokeAnimation = (o = r.color) == null ? void 0 : o.animation);
    const s = Yn(r.color) ?? e.getFillColor();
    s && (e.strokeColor = Iy(s, e.strokeAnimation, n.retina.reduceFactor));
  }
  isEnabled(e) {
    const n = e.strokeAnimation,
      { strokeColor: i } = e;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!n &&
      (((i == null ? void 0 : i.h.value) !== void 0 && i.h.enable) ||
        ((i == null ? void 0 : i.s.value) !== void 0 && i.s.enable) ||
        ((i == null ? void 0 : i.l.value) !== void 0 && i.l.enable))
    );
  }
  update(e, n) {
    this.isEnabled(e) && vT(e, n);
  }
}
async function bT(t) {
  await t.addParticleUpdater("strokeColor", (e) => new wT(e));
}
const Oo = ["text", "character", "char"];
class xT {
  draw(e, n, i, r) {
    const s = n.shapeData;
    if (s === void 0) return;
    const o = s.value;
    if (o === void 0) return;
    n.text === void 0 && (n.text = St(o, n.randomIndexData));
    const a = n.text,
      l = s.style ?? "",
      u = s.weight ?? "400",
      c = Math.round(i) * 2,
      d = s.font ?? "Verdana",
      f = n.fill,
      p = (a.length * i) / 2;
    e.font = `${l} ${u} ${c}px "${d}"`;
    const g = { x: -p, y: i / 2 };
    (e.globalAlpha = r),
      f ? e.fillText(a, g.x, g.y) : e.strokeText(a, g.x, g.y),
      (e.globalAlpha = 1);
  }
  getSidesCount() {
    return 12;
  }
  async init(e) {
    const n = e.actualOptions;
    if (Oo.find((i) => ye(i, n.particles.shape.type))) {
      const i = Oo.map((s) => n.particles.shape.options[s]).find((s) => !!s),
        r = [];
      ve(i, (s) => {
        r.push(K3(s.font, s.weight));
      }),
        await Promise.all(r);
    }
  }
  particleInit(e, n) {
    if (!n.shape || !Oo.includes(n.shape)) return;
    const i = n.shapeData;
    if (i === void 0) return;
    const r = i.value;
    r !== void 0 && (n.text = St(r, n.randomIndexData));
  }
}
async function ST(t) {
  await t.addShape(Oo, new xT());
}
async function kT(t) {
  await pE(t),
    await OP(t),
    await xE(t),
    await _E(t),
    await TE(t),
    await DE(t),
    await HE(t),
    await VE(t),
    await XE(t),
    await YE(t),
    await eP(t),
    await iP(t),
    await RP(t),
    await FP(t),
    await JP(t),
    await mE(t),
    await dP(t),
    await vP(t),
    await rT(t),
    await mT(t),
    await yT(t),
    await ST(t),
    await gP(t),
    await SP(t),
    await pT(t),
    await vE(t),
    await AP(t),
    await uT(t),
    await bT(t),
    await sE(t);
}
class _T {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = X(e.speed)),
      e.decay !== void 0 && (this.decay = X(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class CT extends Dt {
  constructor() {
    super(),
      (this.animation = new _T()),
      (this.direction = "clockwise"),
      (this.enable = !1),
      (this.value = 0);
  }
  load(e) {
    super.load(e),
      e &&
        (this.animation.load(e.animation),
        e.direction !== void 0 && (this.direction = e.direction),
        e.enable !== void 0 && (this.enable = e.enable));
  }
}
function ET(t, e) {
  if (!t.tilt || !t.options.tilt) return;
  const n = t.options.tilt,
    i = n.animation,
    r = (t.tilt.velocity ?? 0) * e.factor,
    s = 2 * Math.PI,
    o = t.tilt.decay ?? 1;
  if (i.enable) {
    switch (t.tilt.status) {
      case "increasing":
        (t.tilt.value += r), t.tilt.value > s && (t.tilt.value -= s);
        break;
      case "decreasing":
      default:
        (t.tilt.value -= r), t.tilt.value < 0 && (t.tilt.value += s);
        break;
    }
    t.tilt.velocity && o !== 1 && (t.tilt.velocity *= o);
  }
}
class PT {
  constructor(e) {
    this.container = e;
  }
  getTransformValues(e) {
    var i;
    const n = ((i = e.tilt) == null ? void 0 : i.enable) && e.tilt;
    return {
      b: n ? Math.cos(n.value) * n.cosDirection : void 0,
      c: n ? Math.sin(n.value) * n.sinDirection : void 0,
    };
  }
  init(e) {
    var s;
    const n = e.options.tilt;
    if (!n) return;
    e.tilt = {
      enable: n.enable,
      value: (N(n.value) * Math.PI) / 180,
      sinDirection: K() >= 0.5 ? 1 : -1,
      cosDirection: K() >= 0.5 ? 1 : -1,
    };
    let i = n.direction;
    switch (
      (i === "random" &&
        (i = Math.floor(K() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      i)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.tilt.status = "decreasing";
        break;
      case "clockwise":
        e.tilt.status = "increasing";
        break;
    }
    const r = (s = e.options.tilt) == null ? void 0 : s.animation;
    r != null &&
      r.enable &&
      ((e.tilt.decay = 1 - N(r.decay)),
      (e.tilt.velocity =
        (N(r.speed) / 360) * this.container.retina.reduceFactor),
      r.sync || (e.tilt.velocity *= K()));
  }
  isEnabled(e) {
    var i;
    const n = (i = e.options.tilt) == null ? void 0 : i.animation;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...n) {
    e.tilt || (e.tilt = new CT());
    for (const i of n) e.tilt.load(i == null ? void 0 : i.tilt);
  }
  update(e, n) {
    this.isEnabled(e) && ET(e, n);
  }
}
async function TT(t) {
  await t.addParticleUpdater("tilt", (e) => new PT(e));
}
class Oh {
  constructor() {
    (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = ze.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = X(e.opacity)));
  }
}
class zT {
  constructor() {
    (this.lines = new Oh()), (this.particles = new Oh());
  }
  load(e) {
    e && (this.lines.load(e.lines), this.particles.load(e.particles));
  }
}
class AT {
  getColorStyles(e, n, i, r) {
    const s = e.options,
      o = s.twinkle;
    if (!o) return {};
    const a = o.particles,
      l = a.enable && K() < a.frequency,
      u = e.options.zIndex,
      c = (1 - e.zIndexFactor) ** u.opacityRate,
      d = l ? N(a.opacity) * c : r,
      f = Yn(a.color),
      p = f ? hr(f, d) : void 0,
      g = {},
      m = l && p;
    return (g.fill = m ? p : void 0), (g.stroke = m ? p : void 0), g;
  }
  init() {}
  isEnabled(e) {
    const n = e.options,
      i = n.twinkle;
    return i ? i.particles.enable : !1;
  }
  loadOptions(e, ...n) {
    e.twinkle || (e.twinkle = new zT());
    for (const i of n) e.twinkle.load(i == null ? void 0 : i.twinkle);
  }
  update() {}
}
async function MT(t) {
  await t.addParticleUpdater("twinkle", () => new AT());
}
class OT {
  constructor() {
    (this.angle = 50), (this.move = 10);
  }
  load(e) {
    e &&
      (e.angle !== void 0 && (this.angle = X(e.angle)),
      e.move !== void 0 && (this.move = X(e.move)));
  }
}
class IT {
  constructor() {
    (this.distance = 5), (this.enable = !1), (this.speed = new OT());
  }
  load(e) {
    if (
      e &&
      (e.distance !== void 0 && (this.distance = X(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0)
    )
      if (typeof e.speed == "number") this.speed.load({ angle: e.speed });
      else {
        const n = e.speed;
        n.min !== void 0
          ? this.speed.load({ angle: n })
          : this.speed.load(e.speed);
      }
  }
}
function RT(t, e) {
  const { wobble: n } = t.options,
    { wobble: i } = t;
  if (!(n != null && n.enable) || !i) return;
  const r = i.angleSpeed * e.factor,
    s = i.moveSpeed * e.factor,
    o = (s * ((t.retina.wobbleDistance ?? 0) * e.factor)) / (1e3 / 60),
    a = 2 * Math.PI,
    { position: l } = t;
  (i.angle += r),
    i.angle > a && (i.angle -= a),
    (l.x += o * Math.cos(i.angle)),
    (l.y += o * Math.abs(Math.sin(i.angle)));
}
class LT {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.wobble;
    n != null && n.enable
      ? (e.wobble = {
          angle: K() * Math.PI * 2,
          angleSpeed: N(n.speed.angle) / 360,
          moveSpeed: N(n.speed.move) / 10,
        })
      : (e.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
      (e.retina.wobbleDistance =
        N((n == null ? void 0 : n.distance) ?? 0) *
        this.container.retina.pixelRatio);
  }
  isEnabled(e) {
    var n;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!((n = e.options.wobble) != null && n.enable)
    );
  }
  loadOptions(e, ...n) {
    e.wobble || (e.wobble = new IT());
    for (const i of n) e.wobble.load(i == null ? void 0 : i.wobble);
  }
  update(e, n) {
    this.isEnabled(e) && RT(e, n);
  }
}
async function DT(t) {
  await t.addParticleUpdater("wobble", (e) => new LT(e));
}
async function Yy(t) {
  await kT(t),
    await NC(t),
    await iE(t),
    await TT(t),
    await MT(t),
    await DT(t),
    await ZC(t),
    await MC(t),
    await KC(t);
}
const $T = async (t) => {
    await Yy(t);
  },
  jT = () => {};
function FT() {
  const t =
    (window.innerWidth * window.innerHeight * 216) / 2073600 > 69
      ? 69
      : (window.innerWidth * window.innerHeight * 216) / 2073600 < 10
      ? 10
      : (window.innerWidth * window.innerHeight * 216) / 2073600;
  return T.jsx(Qd, {
    id: "tsparticles",
    init: $T,
    loaded: jT,
    options: {
      autoPlay: !0,
      background: { opacity: 0 },
      backgroundMask: { enable: !1 },
      fullScreen: { enable: !0, zIndex: 0 },
      detectRetina: !0,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: !0, mode: "repulse" },
          onHover: {
            enable: !0,
            mode: ["attract"],
            parallax: { enable: !1, force: 2, smooth: 10 },
          },
          resize: !0,
        },
        modes: {
          attract: {
            pauseOnStop: !0,
            distance: 256,
            duration: 0.1,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 23,
            speed: 1.2,
          },
          bounce: { distance: 200 },
          repulse: {
            distance: 256,
            duration: 0.4,
            factor: 1,
            speed: 1,
            maxSpeed: 69,
            easing: "ease-out-quad",
            divs: {
              distance: 206,
              duration: 0.4,
              factor: 1,
              speed: 1,
              maxSpeed: 69,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
        },
      },
      manualParticles: [],
      motion: { disable: !1, reduce: { factor: 4, value: !0 } },
      particles: {
        bounce: {
          horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
          vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
        },
        collisions: {
          bounce: {
            horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
            vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
          },
          enable: !0,
          mode: "bounce",
          overlap: { enable: !0, retries: 0 },
        },
        color: { value: "#000" },
        destroy: {
          mode: "none",
          split: {
            count: 1,
            factor: { random: { enable: !1, minimumValue: 0 }, value: 3 },
            rate: {
              random: { enable: !1, minimumValue: 0 },
              value: { min: 4, max: 9 },
            },
            sizeOffset: !0,
          },
        },
        gradient: [],
        groups: {},
        life: {
          count: 0,
          delay: {
            random: { enable: !1, minimumValue: 0 },
            value: 0,
            sync: !1,
          },
          duration: {
            random: { enable: !1, minimumValue: 1e-4 },
            value: 0,
            sync: !1,
          },
        },
        links: {
          color: { value: "#000" },
          consent: !1,
          distance: 100,
          enable: !0,
          frequency: 1,
          opacity: 1,
          shadow: { blur: 8, color: { value: "#5ae2f9" }, enable: !0 },
          triangles: { enable: !1, frequency: 1 },
          width: 1,
          warp: !1,
        },
        move: {
          angle: { offset: 0, value: 90 },
          attract: { distance: 200, enable: !1, rotate: { x: 3e3, y: 3e3 } },
          center: { x: 50, y: 50, radius: 0 },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: !0,
          gravity: {
            acceleration: 9.81,
            enable: !1,
            inverse: !1,
            maxSpeed: 50,
          },
          path: {
            clamp: !0,
            delay: { random: { enable: !1, minimumValue: 0 }, value: 0 },
            enable: !1,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: !1,
          size: !1,
          speed: 2,
          spin: { acceleration: 0, enable: !1 },
          straight: !1,
          trail: { enable: !1, length: 10, fillColor: { value: "#000000" } },
          vibrate: !1,
          warp: !1,
        },
        number: { value: t },
        opacity: {
          random: { enable: !0, minimumValue: 0.3 },
          value: { min: 0.3, max: 0.8 },
          animation: {
            count: 0,
            enable: !0,
            speed: 0.5,
            sync: !1,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.3,
          },
        },
        orbit: { enable: !1, width: 1 },
        reduceDuplicates: !1,
        repulse: { enabled: !1 },
        roll: { enable: !1 },
        rotate: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          animation: { enable: !1, speed: 0, sync: !1 },
          direction: "clockwise",
          path: !1,
        },
        shadow: {
          blur: 8,
          color: { value: "#fff" },
          enable: !0,
          offset: { x: 0, y: 0 },
        },
        shape: { options: {}, type: "circle" },
        size: {
          random: { enable: !0, minimumValue: 1 },
          value: { min: 1, max: 3 },
          animation: {
            count: 0,
            enable: !0,
            speed: 3,
            sync: !1,
            destroy: "none",
            startValue: "random",
            minimumValue: 1,
          },
        },
        stroke: { width: 0, color: { value: "#5ae2f9" } },
        tilt: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          animation: { enable: !1, speed: 0, sync: !1 },
          direction: "clockwise",
          enable: !1,
        },
        twinkle: {
          lines: { enable: !1, frequency: 0.05, opacity: 1 },
          particles: { enable: !1, frequency: 0.05, opacity: 1 },
        },
        wobble: { distance: 5, enable: !1, speed: 50 },
        zIndex: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
      },
      pauseOnBlur: !0,
      pauseOnOutsideViewport: !0,
      responsive: [],
      style: {},
      themes: [],
      zLayers: 100,
      emitters: [],
    },
  });
}
const NT = async (t) => {
    await Yy(t);
  },
  BT = () => {};
function HT() {
  const t =
    (window.innerWidth * window.innerHeight * 216) / 2073600 > 69
      ? 69
      : (window.innerWidth * window.innerHeight * 216) / 2073600 < 10
      ? 10
      : (window.innerWidth * window.innerHeight * 216) / 2073600;
  return T.jsx(Qd, {
    id: "tsparticles",
    init: NT,
    loaded: BT,
    options: {
      autoPlay: !0,
      background: { opacity: 0 },
      backgroundMask: { enable: !1 },
      fullScreen: { enable: !0, zIndex: 0 },
      detectRetina: !0,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: !0, mode: "repulse" },
          onHover: {
            enable: !0,
            mode: ["attract"],
            parallax: { enable: !1, force: 2, smooth: 10 },
          },
          resize: !0,
        },
        modes: {
          attract: {
            pauseOnStop: !0,
            distance: 256,
            duration: 0.1,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 23,
            speed: 1.2,
          },
          bounce: { distance: 200 },
          repulse: {
            distance: 256,
            duration: 0.4,
            factor: 1,
            speed: 1,
            maxSpeed: 69,
            easing: "ease-out-quad",
            divs: {
              distance: 206,
              duration: 0.4,
              factor: 1,
              speed: 1,
              maxSpeed: 69,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
        },
      },
      manualParticles: [],
      motion: { disable: !1, reduce: { factor: 4, value: !0 } },
      particles: {
        bounce: {
          horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
          vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
        },
        collisions: {
          bounce: {
            horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
            vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
          },
          enable: !0,
          mode: "bounce",
          overlap: { enable: !0, retries: 0 },
        },
        color: { value: "#fff" },
        destroy: {
          mode: "none",
          split: {
            count: 1,
            factor: { random: { enable: !1, minimumValue: 0 }, value: 3 },
            rate: {
              random: { enable: !1, minimumValue: 0 },
              value: { min: 4, max: 9 },
            },
            sizeOffset: !0,
          },
        },
        gradient: [],
        groups: {},
        life: {
          count: 0,
          delay: {
            random: { enable: !1, minimumValue: 0 },
            value: 0,
            sync: !1,
          },
          duration: {
            random: { enable: !1, minimumValue: 1e-4 },
            value: 0,
            sync: !1,
          },
        },
        links: {
          color: { value: "#fff" },
          consent: !1,
          distance: 100,
          enable: !0,
          frequency: 1,
          opacity: 1,
          shadow: { blur: 8, color: { value: "#5ae2f9" }, enable: !0 },
          triangles: { enable: !1, frequency: 1 },
          width: 1,
          warp: !1,
        },
        move: {
          angle: { offset: 0, value: 90 },
          attract: { distance: 200, enable: !1, rotate: { x: 3e3, y: 3e3 } },
          center: { x: 50, y: 50, radius: 0 },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: !0,
          gravity: {
            acceleration: 9.81,
            enable: !1,
            inverse: !1,
            maxSpeed: 50,
          },
          path: {
            clamp: !0,
            delay: { random: { enable: !1, minimumValue: 0 }, value: 0 },
            enable: !1,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: !1,
          size: !1,
          speed: 2,
          spin: { acceleration: 0, enable: !1 },
          straight: !1,
          trail: { enable: !1, length: 10, fillColor: { value: "#5ae2f9" } },
          vibrate: !1,
          warp: !1,
        },
        number: { value: t },
        opacity: {
          random: { enable: !0, minimumValue: 0.3 },
          value: { min: 0.3, max: 0.8 },
          animation: {
            count: 0,
            enable: !0,
            speed: 0.5,
            sync: !1,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.3,
          },
        },
        orbit: { enable: !1, width: 1 },
        reduceDuplicates: !1,
        repulse: { enabled: !1 },
        roll: { enable: !1 },
        rotate: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          animation: { enable: !1, speed: 0, sync: !1 },
          direction: "clockwise",
          path: !1,
        },
        shadow: {
          blur: 8,
          color: { value: "#5ae2f9" },
          enable: !0,
          offset: { x: 0, y: 0 },
        },
        shape: { options: {}, type: "circle" },
        size: {
          random: { enable: !0, minimumValue: 1 },
          value: { min: 1, max: 3 },
          animation: {
            count: 0,
            enable: !0,
            speed: 3,
            sync: !1,
            destroy: "none",
            startValue: "random",
            minimumValue: 1,
          },
        },
        stroke: { width: 0, color: { value: "#5ae2f9" } },
        tilt: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          animation: { enable: !1, speed: 0, sync: !1 },
          direction: "clockwise",
          enable: !1,
        },
        twinkle: {
          lines: { enable: !1, frequency: 0.05, opacity: 1 },
          particles: { enable: !1, frequency: 0.05, opacity: 1 },
        },
        wobble: { distance: 5, enable: !1, speed: 50 },
        zIndex: {
          random: { enable: !1, minimumValue: 0 },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
      },
      pauseOnBlur: !0,
      pauseOnOutsideViewport: !0,
      responsive: [],
      style: {},
      themes: [],
      zLayers: 100,
      emitters: [],
    },
  });
}
function WT() {
  const [t, e] = j.useState(!0);
  j.useEffect(() => {
    localStorage.getItem("&7aQ@sb95ZF1cP#4&m3K") === "false" && e(!1),
      Kr.init({ duration: 1e3 }),
      Kr.refresh();
  }, []),
    j.useEffect(() => {
      const r = () =>
        setInterval(() => {
          Kr.refresh();
        }, 100);
      return (
        r(),
        () => {
          clearInterval(r);
        }
      );
    }, []),
    j.useEffect(() => {
      t
        ? ((document.getElementsByTagName("html")[0].style.backgroundColor =
            "rgba(2, 12, 23, 1)"),
          (document.getElementById("root").style.backgroundColor =
            "rgba(2, 12, 23, 0.9)"),
          (document.getElementsByTagName("html")[0].style.color = "#5cb6f9"),
          (document.getElementsByClassName(
            "spinner-container",
          )[0].style.backgroundColor = "rgba(2, 12, 23, 0.5)"),
          (document.getElementsByClassName("spinner")[0].style.animationName =
            "text-color"))
        : ((document.getElementsByTagName("html")[0].style.backgroundColor =
            "rgba(255, 255, 255, 1)"),
          (document.getElementById("root").style.backgroundColor =
            "rgba(255, 255, 255, 0.7)"),
          (document.getElementsByTagName("html")[0].style.color = "#15023a"),
          (document.getElementsByClassName(
            "spinner-container",
          )[0].style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
          (document.getElementsByClassName("spinner")[0].style.animationName =
            "text-color2")),
        localStorage.setItem("&7aQ@sb95ZF1cP#4&m3K", t);
    }, [t]);
  const [n, i] = j.useState(!1);
  return T.jsx(j.Suspense, {
    fallback: T.jsx(fr, { test: "welcome" }),
    children: T.jsx("div", {
      children: T.jsxs(VT, {
        children: [
          T.jsx(Hd, { menuOpen: n, setMenuOpen: i, isdark: t, setDark: e }),
          T.jsxs(qT, {
            fullscreen: !n,
            children: [
              T.jsx(Id, { isdark: t }),
              T.jsx(Rd, { isdark: t }),
              T.jsx(Ld, { isdark: t }),
              T.jsx($d, { isdark: t }),
              T.jsx(jd, { isdark: t }),
            ],
          }),
          t ? T.jsx(HT, {}) : T.jsx(FT, {}),
        ],
      }),
    }),
  });
}
const VT = U.div`
	height: 100vh;
	width: 100vw;
`,
  qT = U.main`
	max-width: 100vw;
	overflow-x: hidden;
	width: ${(t) => (t.fullscreen ? "100vw" : "calc(100vw - 204px)")};
	@media (max-width: 540px) {
		width: 100vw;
	}
	transition: width 0.5s ease-in-out;
	height: calc(100vh - 70px);
	position: relative;
	top: 70px;
	display: grid;
	/* grid-template-columns: repeat(1, 1fr); */
	overflow-y: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	scroll-snap-type: y mandatory;
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
		top: 56px;
	}
`;
au.createRoot(document.getElementById("root")).render(
  T.jsx(de.StrictMode, { children: T.jsx(WT, {}) }),
);
