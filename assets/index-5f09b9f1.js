function Pv(t, e) {
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
var Vo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Rs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function zv(t) {
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
var tm = { exports: {} },
  za = {},
  nm = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = Symbol.for("react.element"),
  Ov = Symbol.for("react.portal"),
  Mv = Symbol.for("react.fragment"),
  Iv = Symbol.for("react.strict_mode"),
  Rv = Symbol.for("react.profiler"),
  Lv = Symbol.for("react.provider"),
  Av = Symbol.for("react.context"),
  $v = Symbol.for("react.forward_ref"),
  Dv = Symbol.for("react.suspense"),
  jv = Symbol.for("react.memo"),
  Nv = Symbol.for("react.lazy"),
  Sf = Symbol.iterator;
function Fv(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Sf && t[Sf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var im = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rm = Object.assign,
  sm = {};
function kr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = sm),
    (this.updater = n || im);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
kr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function om() {}
om.prototype = kr.prototype;
function Dc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = sm),
    (this.updater = n || im);
}
var jc = (Dc.prototype = new om());
jc.constructor = Dc;
rm(jc, kr.prototype);
jc.isPureReactComponent = !0;
var kf = Array.isArray,
  am = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function um(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      am.call(e, i) && !lm.hasOwnProperty(i) && (r[i] = e[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  if (t && t.defaultProps)
    for (i in ((a = t.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return {
    $$typeof: Ls,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: Nc.current,
  };
}
function Bv(t, e) {
  return {
    $$typeof: Ls,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Fc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ls;
}
function Wv(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var _f = /\/+/g;
function yl(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Wv("" + t.key)
    : e.toString(36);
}
function xo(t, e, n, i, r) {
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
          case Ls:
          case Ov:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + yl(o, 0) : i),
      kf(r)
        ? ((n = ""),
          t != null && (n = t.replace(_f, "$&/") + "/"),
          xo(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (Fc(r) &&
            (r = Bv(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(_f, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), kf(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = i + yl(s, a);
      o += xo(s, e, n, l, r);
    }
  else if (((l = Fv(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = i + yl(s, a++)), (o += xo(s, e, n, l, r));
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
function Ys(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    xo(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function Hv(t) {
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
var st = { current: null },
  So = { transition: null },
  Uv = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: So,
    ReactCurrentOwner: Nc,
  };
te.Children = {
  map: Ys,
  forEach: function (t, e, n) {
    Ys(
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
      Ys(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ys(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Fc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
te.Component = kr;
te.Fragment = Mv;
te.Profiler = Rv;
te.PureComponent = Dc;
te.StrictMode = Iv;
te.Suspense = Dv;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uv;
te.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = rm({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Nc.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      am.call(e, l) &&
        !lm.hasOwnProperty(l) &&
        (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  return { $$typeof: Ls, type: t.type, key: r, ref: s, props: i, _owner: o };
};
te.createContext = function (t) {
  return (
    (t = {
      $$typeof: Av,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Lv, _context: t }),
    (t.Consumer = t)
  );
};
te.createElement = um;
te.createFactory = function (t) {
  var e = um.bind(null, t);
  return (e.type = t), e;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (t) {
  return { $$typeof: $v, render: t };
};
te.isValidElement = Fc;
te.lazy = function (t) {
  return { $$typeof: Nv, _payload: { _status: -1, _result: t }, _init: Hv };
};
te.memo = function (t, e) {
  return { $$typeof: jv, type: t, compare: e === void 0 ? null : e };
};
te.startTransition = function (t) {
  var e = So.transition;
  So.transition = {};
  try {
    t();
  } finally {
    So.transition = e;
  }
};
te.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function (t, e) {
  return st.current.useCallback(t, e);
};
te.useContext = function (t) {
  return st.current.useContext(t);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (t) {
  return st.current.useDeferredValue(t);
};
te.useEffect = function (t, e) {
  return st.current.useEffect(t, e);
};
te.useId = function () {
  return st.current.useId();
};
te.useImperativeHandle = function (t, e, n) {
  return st.current.useImperativeHandle(t, e, n);
};
te.useInsertionEffect = function (t, e) {
  return st.current.useInsertionEffect(t, e);
};
te.useLayoutEffect = function (t, e) {
  return st.current.useLayoutEffect(t, e);
};
te.useMemo = function (t, e) {
  return st.current.useMemo(t, e);
};
te.useReducer = function (t, e, n) {
  return st.current.useReducer(t, e, n);
};
te.useRef = function (t) {
  return st.current.useRef(t);
};
te.useState = function (t) {
  return st.current.useState(t);
};
te.useSyncExternalStore = function (t, e, n) {
  return st.current.useSyncExternalStore(t, e, n);
};
te.useTransition = function () {
  return st.current.useTransition();
};
te.version = "18.2.0";
nm.exports = te;
var A = nm.exports;
const Y = Rs(A),
  _u = Pv({ __proto__: null, default: Y }, [A]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv = A,
  Gv = Symbol.for("react.element"),
  qv = Symbol.for("react.fragment"),
  Kv = Object.prototype.hasOwnProperty,
  Yv = Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function cm(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (i in e) Kv.call(e, i) && !Qv.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps)
    for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return {
    $$typeof: Gv,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: Yv.current,
  };
}
za.Fragment = qv;
za.jsx = cm;
za.jsxs = cm;
tm.exports = za;
var P = tm.exports,
  Eu = {},
  dm = { exports: {} },
  Ct = {},
  fm = { exports: {} },
  pm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e($, I) {
    var R = $.length;
    $.push(I);
    e: for (; 0 < R; ) {
      var H = (R - 1) >>> 1,
        U = $[H];
      if (0 < r(U, I)) ($[H] = I), ($[R] = U), (R = H);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function i($) {
    if ($.length === 0) return null;
    var I = $[0],
      R = $.pop();
    if (R !== I) {
      $[0] = R;
      e: for (var H = 0, U = $.length, re = U >>> 1; H < re; ) {
        var O = 2 * (H + 1) - 1,
          Ce = $[O],
          F = O + 1,
          K = $[F];
        if (0 > r(Ce, R))
          F < U && 0 > r(K, Ce)
            ? (($[H] = K), ($[F] = R), (H = F))
            : (($[H] = Ce), ($[O] = R), (H = O));
        else if (F < U && 0 > r(K, R)) ($[H] = K), ($[F] = R), (H = F);
        else break e;
      }
    }
    return I;
  }
  function r($, I) {
    var R = $.sortIndex - I.sortIndex;
    return R !== 0 ? R : $.id - I.id;
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
    p = 3,
    f = !1,
    g = !1,
    m = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v($) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) i(u);
      else if (I.startTime <= $)
        i(u), (I.sortIndex = I.expirationTime), e(l, I);
      else break;
      I = n(u);
    }
  }
  function b($) {
    if (((m = !1), v($), !g))
      if (n(l) !== null) (g = !0), N(x);
      else {
        var I = n(u);
        I !== null && W(b, I.startTime - $);
      }
  }
  function x($, I) {
    (g = !1), m && ((m = !1), y(C), (C = -1)), (f = !0);
    var R = p;
    try {
      for (
        v(I), d = n(l);
        d !== null && (!(d.expirationTime > I) || ($ && !_()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var U = H(d.expirationTime <= I);
          (I = t.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(l) && i(l),
            v(I);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var re = !0;
      else {
        var O = n(u);
        O !== null && W(b, O.startTime - I), (re = !1);
      }
      return re;
    } finally {
      (d = null), (p = R), (f = !1);
    }
  }
  var k = !1,
    S = null,
    C = -1,
    T = 5,
    z = -1;
  function _() {
    return !(t.unstable_now() - z < T);
  }
  function E() {
    if (S !== null) {
      var $ = t.unstable_now();
      z = $;
      var I = !0;
      try {
        I = S(!0, $);
      } finally {
        I ? M() : ((k = !1), (S = null));
      }
    } else k = !1;
  }
  var M;
  if (typeof h == "function")
    M = function () {
      h(E);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      j = L.port2;
    (L.port1.onmessage = E),
      (M = function () {
        j.postMessage(null);
      });
  } else
    M = function () {
      w(E, 0);
    };
  function N($) {
    (S = $), k || ((k = !0), M());
  }
  function W($, I) {
    C = w(function () {
      $(t.unstable_now());
    }, I);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      g || f || ((g = !0), N(x));
    }),
    (t.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (T = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function ($) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var R = p;
      p = I;
      try {
        return $();
      } finally {
        p = R;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function ($, I) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var R = p;
      p = $;
      try {
        return I();
      } finally {
        p = R;
      }
    }),
    (t.unstable_scheduleCallback = function ($, I, R) {
      var H = t.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? H + R : H))
          : (R = H),
        $)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = R + U),
        ($ = {
          id: c++,
          callback: I,
          priorityLevel: $,
          startTime: R,
          expirationTime: U,
          sortIndex: -1,
        }),
        R > H
          ? (($.sortIndex = R),
            e(u, $),
            n(l) === null &&
              $ === n(u) &&
              (m ? (y(C), (C = -1)) : (m = !0), W(b, R - H)))
          : (($.sortIndex = U), e(l, $), g || f || ((g = !0), N(x))),
        $
      );
    }),
    (t.unstable_shouldYield = _),
    (t.unstable_wrapCallback = function ($) {
      var I = p;
      return function () {
        var R = p;
        p = I;
        try {
          return $.apply(this, arguments);
        } finally {
          p = R;
        }
      };
    });
})(pm);
fm.exports = pm;
var Xv = fm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hm = A,
  Et = Xv;
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
var mm = new Set(),
  us = {};
function _i(t, e) {
  ir(t, e), ir(t + "Capture", e);
}
function ir(t, e) {
  for (us[t] = e, t = 0; t < e.length; t++) mm.add(e[t]);
}
var Sn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cu = Object.prototype.hasOwnProperty,
  Jv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ef = {},
  Cf = {};
function Zv(t) {
  return Cu.call(Cf, t)
    ? !0
    : Cu.call(Ef, t)
    ? !1
    : Jv.test(t)
    ? (Cf[t] = !0)
    : ((Ef[t] = !0), !1);
}
function e1(t, e, n, i) {
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
function t1(t, e, n, i) {
  if (e === null || typeof e > "u" || e1(t, e, n, i)) return !0;
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
function ot(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Ke[t] = new ot(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Ke[e] = new ot(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Ke[t] = new ot(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Ke[t] = new ot(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Ke[t] = new ot(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Ke[t] = new ot(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Ke[t] = new ot(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Ke[t] = new ot(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Ke[t] = new ot(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Bc = /[\-:]([a-z])/g;
function Wc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Bc, Wc);
    Ke[e] = new ot(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Bc, Wc);
    Ke[e] = new ot(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Bc, Wc);
  Ke[e] = new ot(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Ke[t] = new ot(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Ke[t] = new ot(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Hc(t, e, n, i) {
  var r = Ke.hasOwnProperty(e) ? Ke[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (t1(e, n, r, i) && (n = null),
    i || r === null
      ? Zv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
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
var Pn = hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qs = Symbol.for("react.element"),
  Ai = Symbol.for("react.portal"),
  $i = Symbol.for("react.fragment"),
  Uc = Symbol.for("react.strict_mode"),
  Tu = Symbol.for("react.profiler"),
  gm = Symbol.for("react.provider"),
  ym = Symbol.for("react.context"),
  Vc = Symbol.for("react.forward_ref"),
  Pu = Symbol.for("react.suspense"),
  zu = Symbol.for("react.suspense_list"),
  Gc = Symbol.for("react.memo"),
  Rn = Symbol.for("react.lazy"),
  vm = Symbol.for("react.offscreen"),
  Tf = Symbol.iterator;
function Pr(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Tf && t[Tf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ee = Object.assign,
  vl;
function Fr(t) {
  if (vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      vl = (e && e[1]) || "";
    }
  return (
    `
` +
    vl +
    t
  );
}
var wl = !1;
function bl(t, e) {
  if (!t || wl) return "";
  wl = !0;
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
    (wl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Fr(t) : "";
}
function n1(t) {
  switch (t.tag) {
    case 5:
      return Fr(t.type);
    case 16:
      return Fr("Lazy");
    case 13:
      return Fr("Suspense");
    case 19:
      return Fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = bl(t.type, !1)), t;
    case 11:
      return (t = bl(t.type.render, !1)), t;
    case 1:
      return (t = bl(t.type, !0)), t;
    default:
      return "";
  }
}
function Ou(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case $i:
      return "Fragment";
    case Ai:
      return "Portal";
    case Tu:
      return "Profiler";
    case Uc:
      return "StrictMode";
    case Pu:
      return "Suspense";
    case zu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case ym:
        return (t.displayName || "Context") + ".Consumer";
      case gm:
        return (t._context.displayName || "Context") + ".Provider";
      case Vc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Gc:
        return (
          (e = t.displayName || null), e !== null ? e : Ou(t.type) || "Memo"
        );
      case Rn:
        (e = t._payload), (t = t._init);
        try {
          return Ou(t(e));
        } catch {}
    }
  return null;
}
function i1(t) {
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
      return Ou(e);
    case 8:
      return e === Uc ? "StrictMode" : "Mode";
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
function wm(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function r1(t) {
  var e = wm(t) ? "checked" : "value",
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
function Xs(t) {
  t._valueTracker || (t._valueTracker = r1(t));
}
function bm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = wm(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Go(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Mu(t, e) {
  var n = e.checked;
  return Ee({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Pf(t, e) {
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
function xm(t, e) {
  (e = e.checked), e != null && Hc(t, "checked", e, !1);
}
function Iu(t, e) {
  xm(t, e);
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
    ? Ru(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Ru(t, e.type, Xn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function zf(t, e, n) {
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
function Ru(t, e, n) {
  (e !== "number" || Go(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Br = Array.isArray;
function Ki(t, e, n, i) {
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
function Lu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Ee({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Of(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(D(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Xn(n) };
}
function Sm(t, e) {
  var n = Xn(e.value),
    i = Xn(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function Mf(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function km(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Au(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? km(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Js,
  _m = (function (t) {
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
        Js = Js || document.createElement("div"),
          Js.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Js.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function cs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Gr = {
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
  s1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function (t) {
  s1.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Gr[e] = Gr[t]);
  });
});
function Em(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Gr.hasOwnProperty(t) && Gr[t])
    ? ("" + e).trim()
    : e + "px";
}
function Cm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = Em(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var o1 = Ee(
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
function $u(t, e) {
  if (e) {
    if (o1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
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
function Du(t, e) {
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
var ju = null;
function qc(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Nu = null,
  Yi = null,
  Qi = null;
function If(t) {
  if ((t = Ds(t))) {
    if (typeof Nu != "function") throw Error(D(280));
    var e = t.stateNode;
    e && ((e = La(e)), Nu(t.stateNode, t.type, e));
  }
}
function Tm(t) {
  Yi ? (Qi ? Qi.push(t) : (Qi = [t])) : (Yi = t);
}
function Pm() {
  if (Yi) {
    var t = Yi,
      e = Qi;
    if (((Qi = Yi = null), If(t), e)) for (t = 0; t < e.length; t++) If(e[t]);
  }
}
function zm(t, e) {
  return t(e);
}
function Om() {}
var xl = !1;
function Mm(t, e, n) {
  if (xl) return t(e, n);
  xl = !0;
  try {
    return zm(t, e, n);
  } finally {
    (xl = !1), (Yi !== null || Qi !== null) && (Om(), Pm());
  }
}
function ds(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = La(n);
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
var Fu = !1;
if (Sn)
  try {
    var zr = {};
    Object.defineProperty(zr, "passive", {
      get: function () {
        Fu = !0;
      },
    }),
      window.addEventListener("test", zr, zr),
      window.removeEventListener("test", zr, zr);
  } catch {
    Fu = !1;
  }
function a1(t, e, n, i, r, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qr = !1,
  qo = null,
  Ko = !1,
  Bu = null,
  l1 = {
    onError: function (t) {
      (qr = !0), (qo = t);
    },
  };
function u1(t, e, n, i, r, s, o, a, l) {
  (qr = !1), (qo = null), a1.apply(l1, arguments);
}
function c1(t, e, n, i, r, s, o, a, l) {
  if ((u1.apply(this, arguments), qr)) {
    if (qr) {
      var u = qo;
      (qr = !1), (qo = null);
    } else throw Error(D(198));
    Ko || ((Ko = !0), (Bu = u));
  }
}
function Ei(t) {
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
function Im(t) {
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
function Rf(t) {
  if (Ei(t) !== t) throw Error(D(188));
}
function d1(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Ei(t)), e === null)) throw Error(D(188));
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
        if (s === n) return Rf(r), t;
        if (s === i) return Rf(r), e;
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
function Rm(t) {
  return (t = d1(t)), t !== null ? Lm(t) : null;
}
function Lm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Lm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Am = Et.unstable_scheduleCallback,
  Lf = Et.unstable_cancelCallback,
  f1 = Et.unstable_shouldYield,
  p1 = Et.unstable_requestPaint,
  Ie = Et.unstable_now,
  h1 = Et.unstable_getCurrentPriorityLevel,
  Kc = Et.unstable_ImmediatePriority,
  $m = Et.unstable_UserBlockingPriority,
  Yo = Et.unstable_NormalPriority,
  m1 = Et.unstable_LowPriority,
  Dm = Et.unstable_IdlePriority,
  Oa = null,
  on = null;
function g1(t) {
  if (on && typeof on.onCommitFiberRoot == "function")
    try {
      on.onCommitFiberRoot(Oa, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Ut = Math.clz32 ? Math.clz32 : w1,
  y1 = Math.log,
  v1 = Math.LN2;
function w1(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((y1(t) / v1) | 0)) | 0;
}
var Zs = 64,
  eo = 4194304;
function Wr(t) {
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
function Qo(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? (i = Wr(a)) : ((s &= o), s !== 0 && (i = Wr(s)));
  } else (o = n & ~r), o !== 0 ? (i = Wr(o)) : s !== 0 && (i = Wr(s));
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
      (n = 31 - Ut(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function b1(t, e) {
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
function x1(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Ut(s),
      a = 1 << o,
      l = r[o];
    l === -1
      ? (!(a & n) || a & i) && (r[o] = b1(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function Wu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function jm() {
  var t = Zs;
  return (Zs <<= 1), !(Zs & 4194240) && (Zs = 64), t;
}
function Sl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function As(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Ut(e)),
    (t[e] = n);
}
function S1(t, e) {
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
    var r = 31 - Ut(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Yc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - Ut(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var fe = 0;
function Nm(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fm,
  Qc,
  Bm,
  Wm,
  Hm,
  Hu = !1,
  to = [],
  Hn = null,
  Un = null,
  Vn = null,
  fs = new Map(),
  ps = new Map(),
  An = [],
  k1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Af(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Hn = null;
      break;
    case "dragenter":
    case "dragleave":
      Un = null;
      break;
    case "mouseover":
    case "mouseout":
      Vn = null;
      break;
    case "pointerover":
    case "pointerout":
      fs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ps.delete(e.pointerId);
  }
}
function Or(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = Ds(e)), e !== null && Qc(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function _1(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (Hn = Or(Hn, t, e, n, i, r)), !0;
    case "dragenter":
      return (Un = Or(Un, t, e, n, i, r)), !0;
    case "mouseover":
      return (Vn = Or(Vn, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return fs.set(s, Or(fs.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), ps.set(s, Or(ps.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function Um(t) {
  var e = ai(t.target);
  if (e !== null) {
    var n = Ei(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Im(n)), e !== null)) {
          (t.blockedOn = e),
            Hm(t.priority, function () {
              Bm(n);
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
function ko(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Uu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (ju = i), n.target.dispatchEvent(i), (ju = null);
    } else return (e = Ds(n)), e !== null && Qc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function $f(t, e, n) {
  ko(t) && n.delete(e);
}
function E1() {
  (Hu = !1),
    Hn !== null && ko(Hn) && (Hn = null),
    Un !== null && ko(Un) && (Un = null),
    Vn !== null && ko(Vn) && (Vn = null),
    fs.forEach($f),
    ps.forEach($f);
}
function Mr(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Hu ||
      ((Hu = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, E1)));
}
function hs(t) {
  function e(r) {
    return Mr(r, t);
  }
  if (0 < to.length) {
    Mr(to[0], t);
    for (var n = 1; n < to.length; n++) {
      var i = to[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    Hn !== null && Mr(Hn, t),
      Un !== null && Mr(Un, t),
      Vn !== null && Mr(Vn, t),
      fs.forEach(e),
      ps.forEach(e),
      n = 0;
    n < An.length;
    n++
  )
    (i = An[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < An.length && ((n = An[0]), n.blockedOn === null); )
    Um(n), n.blockedOn === null && An.shift();
}
var Xi = Pn.ReactCurrentBatchConfig,
  Xo = !0;
function C1(t, e, n, i) {
  var r = fe,
    s = Xi.transition;
  Xi.transition = null;
  try {
    (fe = 1), Xc(t, e, n, i);
  } finally {
    (fe = r), (Xi.transition = s);
  }
}
function T1(t, e, n, i) {
  var r = fe,
    s = Xi.transition;
  Xi.transition = null;
  try {
    (fe = 4), Xc(t, e, n, i);
  } finally {
    (fe = r), (Xi.transition = s);
  }
}
function Xc(t, e, n, i) {
  if (Xo) {
    var r = Uu(t, e, n, i);
    if (r === null) Il(t, e, i, Jo, n), Af(t, i);
    else if (_1(r, t, e, n, i)) i.stopPropagation();
    else if ((Af(t, i), e & 4 && -1 < k1.indexOf(t))) {
      for (; r !== null; ) {
        var s = Ds(r);
        if (
          (s !== null && Fm(s),
          (s = Uu(t, e, n, i)),
          s === null && Il(t, e, i, Jo, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else Il(t, e, i, null, n);
  }
}
var Jo = null;
function Uu(t, e, n, i) {
  if (((Jo = null), (t = qc(i)), (t = ai(t)), t !== null))
    if (((e = Ei(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Im(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Jo = t), null;
}
function Vm(t) {
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
      switch (h1()) {
        case Kc:
          return 1;
        case $m:
          return 4;
        case Yo:
        case m1:
          return 16;
        case Dm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jn = null,
  Jc = null,
  _o = null;
function Gm() {
  if (_o) return _o;
  var t,
    e = Jc,
    n = e.length,
    i,
    r = "value" in jn ? jn.value : jn.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (_o = r.slice(t, 1 < i ? 1 - i : void 0));
}
function Eo(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function no() {
  return !0;
}
function Df() {
  return !1;
}
function Tt(t) {
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
        ? no
        : Df),
      (this.isPropagationStopped = Df),
      this
    );
  }
  return (
    Ee(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = no));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = no));
      },
      persist: function () {},
      isPersistent: no,
    }),
    e
  );
}
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zc = Tt(_r),
  $s = Ee({}, _r, { view: 0, detail: 0 }),
  P1 = Tt($s),
  kl,
  _l,
  Ir,
  Ma = Ee({}, $s, {
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
    getModifierState: ed,
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
        : (t !== Ir &&
            (Ir && t.type === "mousemove"
              ? ((kl = t.screenX - Ir.screenX), (_l = t.screenY - Ir.screenY))
              : (_l = kl = 0),
            (Ir = t)),
          kl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : _l;
    },
  }),
  jf = Tt(Ma),
  z1 = Ee({}, Ma, { dataTransfer: 0 }),
  O1 = Tt(z1),
  M1 = Ee({}, $s, { relatedTarget: 0 }),
  El = Tt(M1),
  I1 = Ee({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R1 = Tt(I1),
  L1 = Ee({}, _r, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  A1 = Tt(L1),
  $1 = Ee({}, _r, { data: 0 }),
  Nf = Tt($1),
  D1 = {
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
  j1 = {
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
  N1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function F1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = N1[t]) ? !!e[t] : !1;
}
function ed() {
  return F1;
}
var B1 = Ee({}, $s, {
    key: function (t) {
      if (t.key) {
        var e = D1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Eo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? j1[t.keyCode] || "Unidentified"
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
    getModifierState: ed,
    charCode: function (t) {
      return t.type === "keypress" ? Eo(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Eo(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  W1 = Tt(B1),
  H1 = Ee({}, Ma, {
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
  Ff = Tt(H1),
  U1 = Ee({}, $s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ed,
  }),
  V1 = Tt(U1),
  G1 = Ee({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q1 = Tt(G1),
  K1 = Ee({}, Ma, {
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
  Y1 = Tt(K1),
  Q1 = [9, 13, 27, 32],
  td = Sn && "CompositionEvent" in window,
  Kr = null;
Sn && "documentMode" in document && (Kr = document.documentMode);
var X1 = Sn && "TextEvent" in window && !Kr,
  qm = Sn && (!td || (Kr && 8 < Kr && 11 >= Kr)),
  Bf = String.fromCharCode(32),
  Wf = !1;
function Km(t, e) {
  switch (t) {
    case "keyup":
      return Q1.indexOf(e.keyCode) !== -1;
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
function Ym(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Di = !1;
function J1(t, e) {
  switch (t) {
    case "compositionend":
      return Ym(e);
    case "keypress":
      return e.which !== 32 ? null : ((Wf = !0), Bf);
    case "textInput":
      return (t = e.data), t === Bf && Wf ? null : t;
    default:
      return null;
  }
}
function Z1(t, e) {
  if (Di)
    return t === "compositionend" || (!td && Km(t, e))
      ? ((t = Gm()), (_o = Jc = jn = null), (Di = !1), t)
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
      return qm && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var ew = {
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
function Hf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!ew[t.type] : e === "textarea";
}
function Qm(t, e, n, i) {
  Tm(i),
    (e = Zo(e, "onChange")),
    0 < e.length &&
      ((n = new Zc("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var Yr = null,
  ms = null;
function tw(t) {
  ag(t, 0);
}
function Ia(t) {
  var e = Fi(t);
  if (bm(e)) return t;
}
function nw(t, e) {
  if (t === "change") return e;
}
var Xm = !1;
if (Sn) {
  var Cl;
  if (Sn) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var Uf = document.createElement("div");
      Uf.setAttribute("oninput", "return;"),
        (Tl = typeof Uf.oninput == "function");
    }
    Cl = Tl;
  } else Cl = !1;
  Xm = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Vf() {
  Yr && (Yr.detachEvent("onpropertychange", Jm), (ms = Yr = null));
}
function Jm(t) {
  if (t.propertyName === "value" && Ia(ms)) {
    var e = [];
    Qm(e, ms, t, qc(t)), Mm(tw, e);
  }
}
function iw(t, e, n) {
  t === "focusin"
    ? (Vf(), (Yr = e), (ms = n), Yr.attachEvent("onpropertychange", Jm))
    : t === "focusout" && Vf();
}
function rw(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Ia(ms);
}
function sw(t, e) {
  if (t === "click") return Ia(e);
}
function ow(t, e) {
  if (t === "input" || t === "change") return Ia(e);
}
function aw(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var qt = typeof Object.is == "function" ? Object.is : aw;
function gs(t, e) {
  if (qt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Cu.call(e, r) || !qt(t[r], e[r])) return !1;
  }
  return !0;
}
function Gf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function qf(t, e) {
  var n = Gf(t);
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
    n = Gf(n);
  }
}
function Zm(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Zm(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function eg() {
  for (var t = window, e = Go(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Go(t.document);
  }
  return e;
}
function nd(t) {
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
function lw(t) {
  var e = eg(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Zm(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && nd(n)) {
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
          (r = qf(n, s));
        var o = qf(n, i);
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
var uw = Sn && "documentMode" in document && 11 >= document.documentMode,
  ji = null,
  Vu = null,
  Qr = null,
  Gu = !1;
function Kf(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu ||
    ji == null ||
    ji !== Go(i) ||
    ((i = ji),
    "selectionStart" in i && nd(i)
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
    (Qr && gs(Qr, i)) ||
      ((Qr = i),
      (i = Zo(Vu, "onSelect")),
      0 < i.length &&
        ((e = new Zc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = ji))));
}
function io(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Ni = {
    animationend: io("Animation", "AnimationEnd"),
    animationiteration: io("Animation", "AnimationIteration"),
    animationstart: io("Animation", "AnimationStart"),
    transitionend: io("Transition", "TransitionEnd"),
  },
  Pl = {},
  tg = {};
Sn &&
  ((tg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ni.animationend.animation,
    delete Ni.animationiteration.animation,
    delete Ni.animationstart.animation),
  "TransitionEvent" in window || delete Ni.transitionend.transition);
function Ra(t) {
  if (Pl[t]) return Pl[t];
  if (!Ni[t]) return t;
  var e = Ni[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in tg) return (Pl[t] = e[n]);
  return t;
}
var ng = Ra("animationend"),
  ig = Ra("animationiteration"),
  rg = Ra("animationstart"),
  sg = Ra("transitionend"),
  og = new Map(),
  Yf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ti(t, e) {
  og.set(t, e), _i(e, [t]);
}
for (var zl = 0; zl < Yf.length; zl++) {
  var Ol = Yf[zl],
    cw = Ol.toLowerCase(),
    dw = Ol[0].toUpperCase() + Ol.slice(1);
  ti(cw, "on" + dw);
}
ti(ng, "onAnimationEnd");
ti(ig, "onAnimationIteration");
ti(rg, "onAnimationStart");
ti("dblclick", "onDoubleClick");
ti("focusin", "onFocus");
ti("focusout", "onBlur");
ti(sg, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
_i(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
_i(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
_i("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_i(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
_i(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
_i(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  fw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function Qf(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), c1(i, e, void 0, t), (t.currentTarget = null);
}
function ag(t, e) {
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
          Qf(r, a, u), (s = l);
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
          Qf(r, a, u), (s = l);
        }
    }
  }
  if (Ko) throw ((t = Bu), (Ko = !1), (Bu = null), t);
}
function me(t, e) {
  var n = e[Xu];
  n === void 0 && (n = e[Xu] = new Set());
  var i = t + "__bubble";
  n.has(i) || (lg(e, t, 2, !1), n.add(i));
}
function Ml(t, e, n) {
  var i = 0;
  e && (i |= 4), lg(n, t, i, e);
}
var ro = "_reactListening" + Math.random().toString(36).slice(2);
function ys(t) {
  if (!t[ro]) {
    (t[ro] = !0),
      mm.forEach(function (n) {
        n !== "selectionchange" && (fw.has(n) || Ml(n, !1, t), Ml(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[ro] || ((e[ro] = !0), Ml("selectionchange", !1, e));
  }
}
function lg(t, e, n, i) {
  switch (Vm(e)) {
    case 1:
      var r = C1;
      break;
    case 4:
      r = T1;
      break;
    default:
      r = Xc;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !Fu ||
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
function Il(t, e, n, i, r) {
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
          if (((o = ai(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  Mm(function () {
    var u = s,
      c = qc(n),
      d = [];
    e: {
      var p = og.get(t);
      if (p !== void 0) {
        var f = Zc,
          g = t;
        switch (t) {
          case "keypress":
            if (Eo(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = W1;
            break;
          case "focusin":
            (g = "focus"), (f = El);
            break;
          case "focusout":
            (g = "blur"), (f = El);
            break;
          case "beforeblur":
          case "afterblur":
            f = El;
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
            f = jf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = O1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = V1;
            break;
          case ng:
          case ig:
          case rg:
            f = R1;
            break;
          case sg:
            f = q1;
            break;
          case "scroll":
            f = P1;
            break;
          case "wheel":
            f = Y1;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = A1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Ff;
        }
        var m = (e & 4) !== 0,
          w = !m && t === "scroll",
          y = m ? (p !== null ? p + "Capture" : null) : p;
        m = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              y !== null && ((b = ds(h, y)), b != null && m.push(vs(h, b, v)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < m.length &&
          ((p = new f(p, g, null, n, c)), d.push({ event: p, listeners: m }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((p = t === "mouseover" || t === "pointerover"),
          (f = t === "mouseout" || t === "pointerout"),
          p &&
            n !== ju &&
            (g = n.relatedTarget || n.fromElement) &&
            (ai(g) || g[kn]))
        )
          break e;
        if (
          (f || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          f
            ? ((g = n.relatedTarget || n.toElement),
              (f = u),
              (g = g ? ai(g) : null),
              g !== null &&
                ((w = Ei(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((f = null), (g = u)),
          f !== g)
        ) {
          if (
            ((m = jf),
            (b = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((m = Ff),
              (b = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (w = f == null ? p : Fi(f)),
            (v = g == null ? p : Fi(g)),
            (p = new m(b, h + "leave", f, n, c)),
            (p.target = w),
            (p.relatedTarget = v),
            (b = null),
            ai(c) === u &&
              ((m = new m(y, h + "enter", g, n, c)),
              (m.target = v),
              (m.relatedTarget = w),
              (b = m)),
            (w = b),
            f && g)
          )
            t: {
              for (m = f, y = g, h = 0, v = m; v; v = Ci(v)) h++;
              for (v = 0, b = y; b; b = Ci(b)) v++;
              for (; 0 < h - v; ) (m = Ci(m)), h--;
              for (; 0 < v - h; ) (y = Ci(y)), v--;
              for (; h--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                (m = Ci(m)), (y = Ci(y));
              }
              m = null;
            }
          else m = null;
          f !== null && Xf(d, p, f, m, !1),
            g !== null && w !== null && Xf(d, w, g, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? Fi(u) : window),
          (f = p.nodeName && p.nodeName.toLowerCase()),
          f === "select" || (f === "input" && p.type === "file"))
        )
          var x = nw;
        else if (Hf(p))
          if (Xm) x = ow;
          else {
            x = rw;
            var k = iw;
          }
        else
          (f = p.nodeName) &&
            f.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = sw);
        if (x && (x = x(t, u))) {
          Qm(d, x, n, c);
          break e;
        }
        k && k(t, p, u),
          t === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            Ru(p, "number", p.value);
      }
      switch (((k = u ? Fi(u) : window), t)) {
        case "focusin":
          (Hf(k) || k.contentEditable === "true") &&
            ((ji = k), (Vu = u), (Qr = null));
          break;
        case "focusout":
          Qr = Vu = ji = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gu = !1), Kf(d, n, c);
          break;
        case "selectionchange":
          if (uw) break;
        case "keydown":
        case "keyup":
          Kf(d, n, c);
      }
      var S;
      if (td)
        e: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Di
          ? Km(t, n) && (C = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (qm &&
          n.locale !== "ko" &&
          (Di || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Di && (S = Gm())
            : ((jn = c),
              (Jc = "value" in jn ? jn.value : jn.textContent),
              (Di = !0))),
        (k = Zo(u, C)),
        0 < k.length &&
          ((C = new Nf(C, t, null, n, c)),
          d.push({ event: C, listeners: k }),
          S ? (C.data = S) : ((S = Ym(n)), S !== null && (C.data = S)))),
        (S = X1 ? J1(t, n) : Z1(t, n)) &&
          ((u = Zo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Nf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    ag(d, e);
  });
}
function vs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Zo(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = ds(t, n)),
      s != null && i.unshift(vs(t, s, r)),
      (s = ds(t, e)),
      s != null && i.push(vs(t, s, r))),
      (t = t.return);
  }
  return i;
}
function Ci(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Xf(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = ds(n, s)), l != null && o.unshift(vs(n, l, a)))
        : r || ((l = ds(n, s)), l != null && o.push(vs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var pw = /\r\n?/g,
  hw = /\u0000|\uFFFD/g;
function Jf(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      pw,
      `
`,
    )
    .replace(hw, "");
}
function so(t, e, n) {
  if (((e = Jf(e)), Jf(t) !== e && n)) throw Error(D(425));
}
function ea() {}
var qu = null,
  Ku = null;
function Yu(t, e) {
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
var Qu = typeof setTimeout == "function" ? setTimeout : void 0,
  mw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zf = typeof Promise == "function" ? Promise : void 0,
  gw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zf < "u"
      ? function (t) {
          return Zf.resolve(null).then(t).catch(yw);
        }
      : Qu;
function yw(t) {
  setTimeout(function () {
    throw t;
  });
}
function Rl(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), hs(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  hs(e);
}
function Gn(t) {
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
function ep(t) {
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
var Er = Math.random().toString(36).slice(2),
  nn = "__reactFiber$" + Er,
  ws = "__reactProps$" + Er,
  kn = "__reactContainer$" + Er,
  Xu = "__reactEvents$" + Er,
  vw = "__reactListeners$" + Er,
  ww = "__reactHandles$" + Er;
function ai(t) {
  var e = t[nn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[kn] || n[nn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = ep(t); t !== null; ) {
          if ((n = t[nn])) return n;
          t = ep(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ds(t) {
  return (
    (t = t[nn] || t[kn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Fi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(D(33));
}
function La(t) {
  return t[ws] || null;
}
var Ju = [],
  Bi = -1;
function ni(t) {
  return { current: t };
}
function ye(t) {
  0 > Bi || ((t.current = Ju[Bi]), (Ju[Bi] = null), Bi--);
}
function he(t, e) {
  Bi++, (Ju[Bi] = t.current), (t.current = e);
}
var Jn = {},
  tt = ni(Jn),
  ft = ni(!1),
  gi = Jn;
function rr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Jn;
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
function pt(t) {
  return (t = t.childContextTypes), t != null;
}
function ta() {
  ye(ft), ye(tt);
}
function tp(t, e, n) {
  if (tt.current !== Jn) throw Error(D(168));
  he(tt, e), he(ft, n);
}
function ug(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(D(108, i1(t) || "Unknown", r));
  return Ee({}, n, i);
}
function na(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Jn),
    (gi = tt.current),
    he(tt, t),
    he(ft, ft.current),
    !0
  );
}
function np(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(D(169));
  n
    ? ((t = ug(t, e, gi)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      ye(ft),
      ye(tt),
      he(tt, t))
    : ye(ft),
    he(ft, n);
}
var gn = null,
  Aa = !1,
  Ll = !1;
function cg(t) {
  gn === null ? (gn = [t]) : gn.push(t);
}
function bw(t) {
  (Aa = !0), cg(t);
}
function ii() {
  if (!Ll && gn !== null) {
    Ll = !0;
    var t = 0,
      e = fe;
    try {
      var n = gn;
      for (fe = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (gn = null), (Aa = !1);
    } catch (r) {
      throw (gn !== null && (gn = gn.slice(t + 1)), Am(Kc, ii), r);
    } finally {
      (fe = e), (Ll = !1);
    }
  }
  return null;
}
var Wi = [],
  Hi = 0,
  ia = null,
  ra = 0,
  Mt = [],
  It = 0,
  yi = null,
  yn = 1,
  vn = "";
function ri(t, e) {
  (Wi[Hi++] = ra), (Wi[Hi++] = ia), (ia = t), (ra = e);
}
function dg(t, e, n) {
  (Mt[It++] = yn), (Mt[It++] = vn), (Mt[It++] = yi), (yi = t);
  var i = yn;
  t = vn;
  var r = 32 - Ut(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - Ut(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (yn = (1 << (32 - Ut(e) + r)) | (n << r) | i),
      (vn = s + t);
  } else (yn = (1 << s) | (n << r) | i), (vn = t);
}
function id(t) {
  t.return !== null && (ri(t, 1), dg(t, 1, 0));
}
function rd(t) {
  for (; t === ia; )
    (ia = Wi[--Hi]), (Wi[Hi] = null), (ra = Wi[--Hi]), (Wi[Hi] = null);
  for (; t === yi; )
    (yi = Mt[--It]),
      (Mt[It] = null),
      (vn = Mt[--It]),
      (Mt[It] = null),
      (yn = Mt[--It]),
      (Mt[It] = null);
}
var St = null,
  xt = null,
  xe = !1,
  Ht = null;
function fg(t, e) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function ip(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (St = t), (xt = Gn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (St = t), (xt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = yi !== null ? { id: yn, overflow: vn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (St = t),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function ec(t) {
  if (xe) {
    var e = xt;
    if (e) {
      var n = e;
      if (!ip(t, e)) {
        if (Zu(t)) throw Error(D(418));
        e = Gn(n.nextSibling);
        var i = St;
        e && ip(t, e)
          ? fg(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (xe = !1), (St = t));
      }
    } else {
      if (Zu(t)) throw Error(D(418));
      (t.flags = (t.flags & -4097) | 2), (xe = !1), (St = t);
    }
  }
}
function rp(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  St = t;
}
function oo(t) {
  if (t !== St) return !1;
  if (!xe) return rp(t), (xe = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Yu(t.type, t.memoizedProps))),
    e && (e = xt))
  ) {
    if (Zu(t)) throw (pg(), Error(D(418)));
    for (; e; ) fg(t, e), (e = Gn(e.nextSibling));
  }
  if ((rp(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(D(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              xt = Gn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      xt = null;
    }
  } else xt = St ? Gn(t.stateNode.nextSibling) : null;
  return !0;
}
function pg() {
  for (var t = xt; t; ) t = Gn(t.nextSibling);
}
function sr() {
  (xt = St = null), (xe = !1);
}
function sd(t) {
  Ht === null ? (Ht = [t]) : Ht.push(t);
}
var xw = Pn.ReactCurrentBatchConfig;
function Bt(t, e) {
  if (t && t.defaultProps) {
    (e = Ee({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var sa = ni(null),
  oa = null,
  Ui = null,
  od = null;
function ad() {
  od = Ui = oa = null;
}
function ld(t) {
  var e = sa.current;
  ye(sa), (t._currentValue = e);
}
function tc(t, e, n) {
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
function Ji(t, e) {
  (oa = t),
    (od = Ui = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ut = !0), (t.firstContext = null));
}
function $t(t) {
  var e = t._currentValue;
  if (od !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ui === null)) {
      if (oa === null) throw Error(D(308));
      (Ui = t), (oa.dependencies = { lanes: 0, firstContext: t });
    } else Ui = Ui.next = t;
  return e;
}
var li = null;
function ud(t) {
  li === null ? (li = [t]) : li.push(t);
}
function hg(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), ud(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    _n(t, i)
  );
}
function _n(t, e) {
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
var Ln = !1;
function cd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mg(t, e) {
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
function bn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), se & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      _n(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), ud(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    _n(t, n)
  );
}
function Co(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Yc(t, n);
  }
}
function sp(t, e) {
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
function aa(t, e, n, i) {
  var r = t.updateQueue;
  Ln = !1;
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
      var p = a.lane,
        f = a.eventTime;
      if ((i & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = t,
            m = a;
          switch (((p = e), (f = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == "function")) {
                d = g.call(f, d, p);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (p = typeof g == "function" ? g.call(f, d, p) : g),
                p == null)
              )
                break e;
              d = Ee({}, d, p);
              break e;
            case 2:
              Ln = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (p = r.effects),
          p === null ? (r.effects = [a]) : p.push(a));
      } else
        (f = {
          eventTime: f,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (l = d)) : (c = c.next = f),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (r.lastBaseUpdate = p),
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
    (wi |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function op(t, e, n) {
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
var gg = new hm.Component().refs;
function nc(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : Ee({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var $a = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Ei(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = it(),
      r = Yn(t),
      s = bn(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = qn(t, s, r)),
      e !== null && (Vt(e, t, r, i), Co(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = it(),
      r = Yn(t),
      s = bn(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = qn(t, s, r)),
      e !== null && (Vt(e, t, r, i), Co(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = it(),
      i = Yn(t),
      r = bn(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = qn(t, r, i)),
      e !== null && (Vt(e, t, i, n), Co(e, t, i));
  },
};
function ap(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !gs(n, i) || !gs(r, s)
      : !0
  );
}
function yg(t, e, n) {
  var i = !1,
    r = Jn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = $t(s))
      : ((r = pt(e) ? gi : tt.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? rr(t, r) : Jn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = $a),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function lp(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && $a.enqueueReplaceState(e, e.state, null);
}
function ic(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = gg), cd(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = $t(s))
    : ((s = pt(e) ? gi : tt.current), (r.context = rr(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (nc(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && $a.enqueueReplaceState(r, r.state, null),
      aa(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function Rr(t, e, n) {
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
            a === gg && (a = r.refs = {}),
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
function ao(t, e) {
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
function up(t) {
  var e = t._init;
  return e(t._payload);
}
function vg(t) {
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
    return (y = Qn(y, h)), (y.index = 0), (y.sibling = null), y;
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
  function a(y, h, v, b) {
    return h === null || h.tag !== 6
      ? ((h = Bl(v, y.mode, b)), (h.return = y), h)
      : ((h = r(h, v)), (h.return = y), h);
  }
  function l(y, h, v, b) {
    var x = v.type;
    return x === $i
      ? c(y, h, v.props.children, b, v.key)
      : h !== null &&
        (h.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Rn &&
            up(x) === h.type))
      ? ((b = r(h, v.props)), (b.ref = Rr(y, h, v)), (b.return = y), b)
      : ((b = Io(v.type, v.key, v.props, null, y.mode, b)),
        (b.ref = Rr(y, h, v)),
        (b.return = y),
        b);
  }
  function u(y, h, v, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Wl(v, y.mode, b)), (h.return = y), h)
      : ((h = r(h, v.children || [])), (h.return = y), h);
  }
  function c(y, h, v, b, x) {
    return h === null || h.tag !== 7
      ? ((h = fi(v, y.mode, b, x)), (h.return = y), h)
      : ((h = r(h, v)), (h.return = y), h);
  }
  function d(y, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Bl("" + h, y.mode, v)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Qs:
          return (
            (v = Io(h.type, h.key, h.props, null, y.mode, v)),
            (v.ref = Rr(y, null, h)),
            (v.return = y),
            v
          );
        case Ai:
          return (h = Wl(h, y.mode, v)), (h.return = y), h;
        case Rn:
          var b = h._init;
          return d(y, b(h._payload), v);
      }
      if (Br(h) || Pr(h))
        return (h = fi(h, y.mode, v, null)), (h.return = y), h;
      ao(y, h);
    }
    return null;
  }
  function p(y, h, v, b) {
    var x = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return x !== null ? null : a(y, h, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Qs:
          return v.key === x ? l(y, h, v, b) : null;
        case Ai:
          return v.key === x ? u(y, h, v, b) : null;
        case Rn:
          return (x = v._init), p(y, h, x(v._payload), b);
      }
      if (Br(v) || Pr(v)) return x !== null ? null : c(y, h, v, b, null);
      ao(y, v);
    }
    return null;
  }
  function f(y, h, v, b, x) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (y = y.get(v) || null), a(h, y, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Qs:
          return (y = y.get(b.key === null ? v : b.key) || null), l(h, y, b, x);
        case Ai:
          return (y = y.get(b.key === null ? v : b.key) || null), u(h, y, b, x);
        case Rn:
          var k = b._init;
          return f(y, h, v, k(b._payload), x);
      }
      if (Br(b) || Pr(b)) return (y = y.get(v) || null), c(h, y, b, x, null);
      ao(h, b);
    }
    return null;
  }
  function g(y, h, v, b) {
    for (
      var x = null, k = null, S = h, C = (h = 0), T = null;
      S !== null && C < v.length;
      C++
    ) {
      S.index > C ? ((T = S), (S = null)) : (T = S.sibling);
      var z = p(y, S, v[C], b);
      if (z === null) {
        S === null && (S = T);
        break;
      }
      t && S && z.alternate === null && e(y, S),
        (h = s(z, h, C)),
        k === null ? (x = z) : (k.sibling = z),
        (k = z),
        (S = T);
    }
    if (C === v.length) return n(y, S), xe && ri(y, C), x;
    if (S === null) {
      for (; C < v.length; C++)
        (S = d(y, v[C], b)),
          S !== null &&
            ((h = s(S, h, C)), k === null ? (x = S) : (k.sibling = S), (k = S));
      return xe && ri(y, C), x;
    }
    for (S = i(y, S); C < v.length; C++)
      (T = f(S, y, C, v[C], b)),
        T !== null &&
          (t && T.alternate !== null && S.delete(T.key === null ? C : T.key),
          (h = s(T, h, C)),
          k === null ? (x = T) : (k.sibling = T),
          (k = T));
    return (
      t &&
        S.forEach(function (_) {
          return e(y, _);
        }),
      xe && ri(y, C),
      x
    );
  }
  function m(y, h, v, b) {
    var x = Pr(v);
    if (typeof x != "function") throw Error(D(150));
    if (((v = x.call(v)), v == null)) throw Error(D(151));
    for (
      var k = (x = null), S = h, C = (h = 0), T = null, z = v.next();
      S !== null && !z.done;
      C++, z = v.next()
    ) {
      S.index > C ? ((T = S), (S = null)) : (T = S.sibling);
      var _ = p(y, S, z.value, b);
      if (_ === null) {
        S === null && (S = T);
        break;
      }
      t && S && _.alternate === null && e(y, S),
        (h = s(_, h, C)),
        k === null ? (x = _) : (k.sibling = _),
        (k = _),
        (S = T);
    }
    if (z.done) return n(y, S), xe && ri(y, C), x;
    if (S === null) {
      for (; !z.done; C++, z = v.next())
        (z = d(y, z.value, b)),
          z !== null &&
            ((h = s(z, h, C)), k === null ? (x = z) : (k.sibling = z), (k = z));
      return xe && ri(y, C), x;
    }
    for (S = i(y, S); !z.done; C++, z = v.next())
      (z = f(S, y, C, z.value, b)),
        z !== null &&
          (t && z.alternate !== null && S.delete(z.key === null ? C : z.key),
          (h = s(z, h, C)),
          k === null ? (x = z) : (k.sibling = z),
          (k = z));
    return (
      t &&
        S.forEach(function (E) {
          return e(y, E);
        }),
      xe && ri(y, C),
      x
    );
  }
  function w(y, h, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === $i &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Qs:
          e: {
            for (var x = v.key, k = h; k !== null; ) {
              if (k.key === x) {
                if (((x = v.type), x === $i)) {
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
                    x.$$typeof === Rn &&
                    up(x) === k.type)
                ) {
                  n(y, k.sibling),
                    (h = r(k, v.props)),
                    (h.ref = Rr(y, k, v)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, k);
                break;
              } else e(y, k);
              k = k.sibling;
            }
            v.type === $i
              ? ((h = fi(v.props.children, y.mode, b, v.key)),
                (h.return = y),
                (y = h))
              : ((b = Io(v.type, v.key, v.props, null, y.mode, b)),
                (b.ref = Rr(y, h, v)),
                (b.return = y),
                (y = b));
          }
          return o(y);
        case Ai:
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
            (h = Wl(v, y.mode, b)), (h.return = y), (y = h);
          }
          return o(y);
        case Rn:
          return (k = v._init), w(y, h, k(v._payload), b);
      }
      if (Br(v)) return g(y, h, v, b);
      if (Pr(v)) return m(y, h, v, b);
      ao(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = r(h, v)), (h.return = y), (y = h))
          : (n(y, h), (h = Bl(v, y.mode, b)), (h.return = y), (y = h)),
        o(y))
      : n(y, h);
  }
  return w;
}
var or = vg(!0),
  wg = vg(!1),
  js = {},
  an = ni(js),
  bs = ni(js),
  xs = ni(js);
function ui(t) {
  if (t === js) throw Error(D(174));
  return t;
}
function dd(t, e) {
  switch ((he(xs, e), he(bs, t), he(an, js), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Au(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Au(e, t));
  }
  ye(an), he(an, e);
}
function ar() {
  ye(an), ye(bs), ye(xs);
}
function bg(t) {
  ui(xs.current);
  var e = ui(an.current),
    n = Au(e, t.type);
  e !== n && (he(bs, t), he(an, n));
}
function fd(t) {
  bs.current === t && (ye(an), ye(bs));
}
var ke = ni(0);
function la(t) {
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
var Al = [];
function pd() {
  for (var t = 0; t < Al.length; t++)
    Al[t]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var To = Pn.ReactCurrentDispatcher,
  $l = Pn.ReactCurrentBatchConfig,
  vi = 0,
  _e = null,
  De = null,
  Fe = null,
  ua = !1,
  Xr = !1,
  Ss = 0,
  Sw = 0;
function Qe() {
  throw Error(D(321));
}
function hd(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!qt(t[n], e[n])) return !1;
  return !0;
}
function md(t, e, n, i, r, s) {
  if (
    ((vi = s),
    (_e = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (To.current = t === null || t.memoizedState === null ? Cw : Tw),
    (t = n(i, r)),
    Xr)
  ) {
    s = 0;
    do {
      if (((Xr = !1), (Ss = 0), 25 <= s)) throw Error(D(301));
      (s += 1),
        (Fe = De = null),
        (e.updateQueue = null),
        (To.current = Pw),
        (t = n(i, r));
    } while (Xr);
  }
  if (
    ((To.current = ca),
    (e = De !== null && De.next !== null),
    (vi = 0),
    (Fe = De = _e = null),
    (ua = !1),
    e)
  )
    throw Error(D(300));
  return t;
}
function gd() {
  var t = Ss !== 0;
  return (Ss = 0), t;
}
function Jt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (_e.memoizedState = Fe = t) : (Fe = Fe.next = t), Fe;
}
function Dt() {
  if (De === null) {
    var t = _e.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = De.next;
  var e = Fe === null ? _e.memoizedState : Fe.next;
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
      Fe === null ? (_e.memoizedState = Fe = t) : (Fe = Fe.next = t);
  }
  return Fe;
}
function ks(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Dl(t) {
  var e = Dt(),
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
      if ((vi & c) === c)
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
          (_e.lanes |= c),
          (wi |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = i) : (l.next = a),
      qt(i, e.memoizedState) || (ut = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (_e.lanes |= s), (wi |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function jl(t) {
  var e = Dt(),
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
    qt(s, e.memoizedState) || (ut = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function xg() {}
function Sg(t, e) {
  var n = _e,
    i = Dt(),
    r = e(),
    s = !qt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (ut = !0)),
    (i = i.queue),
    yd(Eg.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _s(9, _g.bind(null, n, i, r, e), void 0, null),
      He === null)
    )
      throw Error(D(349));
    vi & 30 || kg(n, e, r);
  }
  return r;
}
function kg(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function _g(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), Cg(e) && Tg(t);
}
function Eg(t, e, n) {
  return n(function () {
    Cg(e) && Tg(t);
  });
}
function Cg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !qt(t, n);
  } catch {
    return !0;
  }
}
function Tg(t) {
  var e = _n(t, 1);
  e !== null && Vt(e, t, 1, -1);
}
function cp(t) {
  var e = Jt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Ew.bind(null, _e, t)),
    [e.memoizedState, t]
  );
}
function _s(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function Pg() {
  return Dt().memoizedState;
}
function Po(t, e, n, i) {
  var r = Jt();
  (_e.flags |= t),
    (r.memoizedState = _s(1 | e, n, void 0, i === void 0 ? null : i));
}
function Da(t, e, n, i) {
  var r = Dt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (((s = o.destroy), i !== null && hd(i, o.deps))) {
      r.memoizedState = _s(e, n, s, i);
      return;
    }
  }
  (_e.flags |= t), (r.memoizedState = _s(1 | e, n, s, i));
}
function dp(t, e) {
  return Po(8390656, 8, t, e);
}
function yd(t, e) {
  return Da(2048, 8, t, e);
}
function zg(t, e) {
  return Da(4, 2, t, e);
}
function Og(t, e) {
  return Da(4, 4, t, e);
}
function Mg(t, e) {
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
function Ig(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Da(4, 4, Mg.bind(null, e, t), n)
  );
}
function vd() {}
function Rg(t, e) {
  var n = Dt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && hd(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function Lg(t, e) {
  var n = Dt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && hd(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Ag(t, e, n) {
  return vi & 21
    ? (qt(n, e) || ((n = jm()), (_e.lanes |= n), (wi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ut = !0)), (t.memoizedState = n));
}
function kw(t, e) {
  var n = fe;
  (fe = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = $l.transition;
  $l.transition = {};
  try {
    t(!1), e();
  } finally {
    (fe = n), ($l.transition = i);
  }
}
function $g() {
  return Dt().memoizedState;
}
function _w(t, e, n) {
  var i = Yn(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dg(t))
  )
    jg(e, n);
  else if (((n = hg(t, e, n, i)), n !== null)) {
    var r = it();
    Vt(n, t, i, r), Ng(n, e, i);
  }
}
function Ew(t, e, n) {
  var i = Yn(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dg(t)) jg(e, r);
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
        if (((r.hasEagerState = !0), (r.eagerState = a), qt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((r.next = r), ud(e))
            : ((r.next = l.next), (l.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = hg(t, e, r, i)),
      n !== null && ((r = it()), Vt(n, t, i, r), Ng(n, e, i));
  }
}
function Dg(t) {
  var e = t.alternate;
  return t === _e || (e !== null && e === _e);
}
function jg(t, e) {
  Xr = ua = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Ng(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Yc(t, n);
  }
}
var ca = {
    readContext: $t,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  Cw = {
    readContext: $t,
    useCallback: function (t, e) {
      return (Jt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: $t,
    useEffect: dp,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Po(4194308, 4, Mg.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Po(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Po(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Jt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = Jt();
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
        (t = t.dispatch = _w.bind(null, _e, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Jt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: cp,
    useDebugValue: vd,
    useDeferredValue: function (t) {
      return (Jt().memoizedState = t);
    },
    useTransition: function () {
      var t = cp(!1),
        e = t[0];
      return (t = kw.bind(null, t[1])), (Jt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = _e,
        r = Jt();
      if (xe) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = e()), He === null)) throw Error(D(349));
        vi & 30 || kg(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        dp(Eg.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        _s(9, _g.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Jt(),
        e = He.identifierPrefix;
      if (xe) {
        var n = vn,
          i = yn;
        (n = (i & ~(1 << (32 - Ut(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Ss++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Sw++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Tw = {
    readContext: $t,
    useCallback: Rg,
    useContext: $t,
    useEffect: yd,
    useImperativeHandle: Ig,
    useInsertionEffect: zg,
    useLayoutEffect: Og,
    useMemo: Lg,
    useReducer: Dl,
    useRef: Pg,
    useState: function () {
      return Dl(ks);
    },
    useDebugValue: vd,
    useDeferredValue: function (t) {
      var e = Dt();
      return Ag(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = Dl(ks)[0],
        e = Dt().memoizedState;
      return [t, e];
    },
    useMutableSource: xg,
    useSyncExternalStore: Sg,
    useId: $g,
    unstable_isNewReconciler: !1,
  },
  Pw = {
    readContext: $t,
    useCallback: Rg,
    useContext: $t,
    useEffect: yd,
    useImperativeHandle: Ig,
    useInsertionEffect: zg,
    useLayoutEffect: Og,
    useMemo: Lg,
    useReducer: jl,
    useRef: Pg,
    useState: function () {
      return jl(ks);
    },
    useDebugValue: vd,
    useDeferredValue: function (t) {
      var e = Dt();
      return De === null ? (e.memoizedState = t) : Ag(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = jl(ks)[0],
        e = Dt().memoizedState;
      return [t, e];
    },
    useMutableSource: xg,
    useSyncExternalStore: Sg,
    useId: $g,
    unstable_isNewReconciler: !1,
  };
function lr(t, e) {
  try {
    var n = "",
      i = e;
    do (n += n1(i)), (i = i.return);
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
function Nl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function rc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zw = typeof WeakMap == "function" ? WeakMap : Map;
function Fg(t, e, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      fa || ((fa = !0), (hc = i)), rc(t, e);
    }),
    n
  );
}
function Bg(t, e, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        rc(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        rc(t, e),
          typeof i != "function" &&
            (Kn === null ? (Kn = new Set([this])) : Kn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function fp(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new zw();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = Hw.bind(null, t, e, n)), e.then(t, t));
}
function pp(t) {
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
function hp(t, e, n, i, r) {
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
              : ((e = bn(-1, 1)), (e.tag = 2), qn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Ow = Pn.ReactCurrentOwner,
  ut = !1;
function nt(t, e, n, i) {
  e.child = t === null ? wg(e, null, n, i) : or(e, t.child, n, i);
}
function mp(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    Ji(e, r),
    (i = md(t, e, n, i, s, r)),
    (n = gd()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        En(t, e, r))
      : (xe && n && id(e), (e.flags |= 1), nt(t, e, i, r), e.child)
  );
}
function gp(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Cd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Wg(t, e, s, i, r))
      : ((t = Io(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gs), n(o, i) && t.ref === e.ref)
    )
      return En(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = Qn(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Wg(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (gs(s, i) && t.ref === e.ref)
      if (((ut = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (ut = !0);
      else return (e.lanes = t.lanes), En(t, e, r);
  }
  return sc(t, e, n, i, r);
}
function Hg(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(Gi, vt),
        (vt |= n);
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
          he(Gi, vt),
          (vt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        he(Gi, vt),
        (vt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      he(Gi, vt),
      (vt |= i);
  return nt(t, e, r, n), e.child;
}
function Ug(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function sc(t, e, n, i, r) {
  var s = pt(n) ? gi : tt.current;
  return (
    (s = rr(e, s)),
    Ji(e, r),
    (n = md(t, e, n, i, s, r)),
    (i = gd()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        En(t, e, r))
      : (xe && i && id(e), (e.flags |= 1), nt(t, e, n, r), e.child)
  );
}
function yp(t, e, n, i, r) {
  if (pt(n)) {
    var s = !0;
    na(e);
  } else s = !1;
  if ((Ji(e, r), e.stateNode === null))
    zo(t, e), yg(e, n, i), ic(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = $t(u))
      : ((u = pt(n) ? gi : tt.current), (u = rr(e, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== u) && lp(e, o, i, u)),
      (Ln = !1);
    var p = e.memoizedState;
    (o.state = p),
      aa(e, i, o, r),
      (l = e.memoizedState),
      a !== i || p !== l || ft.current || Ln
        ? (typeof c == "function" && (nc(e, n, c, i), (l = e.memoizedState)),
          (a = Ln || ap(e, n, a, i, p, l, u))
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
      mg(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Bt(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (p = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = $t(l))
        : ((l = pt(n) ? gi : tt.current), (l = rr(e, l)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || p !== l) && lp(e, o, i, l)),
      (Ln = !1),
      (p = e.memoizedState),
      (o.state = p),
      aa(e, i, o, r);
    var g = e.memoizedState;
    a !== d || p !== g || ft.current || Ln
      ? (typeof f == "function" && (nc(e, n, f, i), (g = e.memoizedState)),
        (u = Ln || ap(e, n, u, i, p, g, l) || !1)
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
              (a === t.memoizedProps && p === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && p === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = g)),
        (o.props = i),
        (o.state = g),
        (o.context = l),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && p === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && p === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return oc(t, e, n, i, s, r);
}
function oc(t, e, n, i, r, s) {
  Ug(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && np(e, n, !1), En(t, e, s);
  (i = e.stateNode), (Ow.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = or(e, t.child, null, s)), (e.child = or(e, null, a, s)))
      : nt(t, e, a, s),
    (e.memoizedState = i.state),
    r && np(e, n, !0),
    e.child
  );
}
function Vg(t) {
  var e = t.stateNode;
  e.pendingContext
    ? tp(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && tp(t, e.context, !1),
    dd(t, e.containerInfo);
}
function vp(t, e, n, i, r) {
  return sr(), sd(r), (e.flags |= 256), nt(t, e, n, i), e.child;
}
var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function lc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Gg(t, e, n) {
  var i = e.pendingProps,
    r = ke.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    he(ke, r & 1),
    t === null)
  )
    return (
      ec(e),
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
                : (s = Fa(o, i, 0, null)),
              (t = fi(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = lc(n)),
              (e.memoizedState = ac),
              t)
            : wd(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return Mw(t, e, o, i, a, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (e.deletions = null))
        : ((i = Qn(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (s = Qn(a, s)) : ((s = fi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? lc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = ac),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = Qn(s, { mode: "visible", children: i.children })),
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
function wd(t, e) {
  return (
    (e = Fa({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function lo(t, e, n, i) {
  return (
    i !== null && sd(i),
    or(e, t.child, null, n),
    (t = wd(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Mw(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = Nl(Error(D(422)))), lo(t, e, o, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = i.fallback),
        (r = e.mode),
        (i = Fa({ mode: "visible", children: i.children }, r, 0, null)),
        (s = fi(s, r, o, null)),
        (s.flags |= 2),
        (i.return = e),
        (s.return = e),
        (i.sibling = s),
        (e.child = i),
        e.mode & 1 && or(e, t.child, null, o),
        (e.child.memoizedState = lc(o)),
        (e.memoizedState = ac),
        s);
  if (!(e.mode & 1)) return lo(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (s = Error(D(419))), (i = Nl(s, i, void 0)), lo(t, e, o, i);
  }
  if (((a = (o & t.childLanes) !== 0), ut || a)) {
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
          ((s.retryLane = r), _n(t, r), Vt(i, t, r, -1));
    }
    return Ed(), (i = Nl(Error(D(421)))), lo(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Uw.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (xt = Gn(r.nextSibling)),
      (St = e),
      (xe = !0),
      (Ht = null),
      t !== null &&
        ((Mt[It++] = yn),
        (Mt[It++] = vn),
        (Mt[It++] = yi),
        (yn = t.id),
        (vn = t.overflow),
        (yi = e)),
      (e = wd(e, i.children)),
      (e.flags |= 4096),
      e);
}
function wp(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), tc(t.return, e, n);
}
function Fl(t, e, n, i, r) {
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
function qg(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((nt(t, e, i.children, n), (i = ke.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && wp(t, n, e);
        else if (t.tag === 19) wp(t, n, e);
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
  if ((he(ke, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && la(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Fl(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && la(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Fl(e, !0, n, null, s);
        break;
      case "together":
        Fl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function zo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function En(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (wi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(D(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Qn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Qn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function Iw(t, e, n) {
  switch (e.tag) {
    case 3:
      Vg(e), sr();
      break;
    case 5:
      bg(e);
      break;
    case 1:
      pt(e.type) && na(e);
      break;
    case 4:
      dd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      he(sa, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (he(ke, ke.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Gg(t, e, n)
          : (he(ke, ke.current & 1),
            (t = En(t, e, n)),
            t !== null ? t.sibling : null);
      he(ke, ke.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return qg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        he(ke, ke.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Hg(t, e, n);
  }
  return En(t, e, n);
}
var Kg, uc, Yg, Qg;
Kg = function (t, e) {
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
uc = function () {};
Yg = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), ui(an.current);
    var s = null;
    switch (n) {
      case "input":
        (r = Mu(t, r)), (i = Mu(t, i)), (s = []);
        break;
      case "select":
        (r = Ee({}, r, { value: void 0 })),
          (i = Ee({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = Lu(t, r)), (i = Lu(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = ea);
    }
    $u(n, i);
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
            (us.hasOwnProperty(u)
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
              (us.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && me("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Qg = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function Lr(t, e) {
  if (!xe)
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
function Xe(t) {
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
function Rw(t, e, n) {
  var i = e.pendingProps;
  switch ((rd(e), e.tag)) {
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
      return Xe(e), null;
    case 1:
      return pt(e.type) && ta(), Xe(e), null;
    case 3:
      return (
        (i = e.stateNode),
        ar(),
        ye(ft),
        ye(tt),
        pd(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (oo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Ht !== null && (yc(Ht), (Ht = null)))),
        uc(t, e),
        Xe(e),
        null
      );
    case 5:
      fd(e);
      var r = ui(xs.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Yg(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(D(166));
          return Xe(e), null;
        }
        if (((t = ui(an.current)), oo(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[nn] = e), (i[ws] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", i), me("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Hr.length; r++) me(Hr[r], i);
              break;
            case "source":
              me("error", i);
              break;
            case "img":
            case "image":
            case "link":
              me("error", i), me("load", i);
              break;
            case "details":
              me("toggle", i);
              break;
            case "input":
              Pf(i, s), me("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                me("invalid", i);
              break;
            case "textarea":
              Of(i, s), me("invalid", i);
          }
          $u(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(i.textContent, a, t),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(i.textContent, a, t),
                    (r = ["children", "" + a]))
                : us.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  me("scroll", i);
            }
          switch (n) {
            case "input":
              Xs(i), zf(i, s, !0);
              break;
            case "textarea":
              Xs(i), Mf(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = ea);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = km(n)),
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
            (t[nn] = e),
            (t[ws] = i),
            Kg(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Du(n, i)), n)) {
              case "dialog":
                me("cancel", t), me("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Hr.length; r++) me(Hr[r], t);
                r = i;
                break;
              case "source":
                me("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                me("error", t), me("load", t), (r = i);
                break;
              case "details":
                me("toggle", t), (r = i);
                break;
              case "input":
                Pf(t, i), (r = Mu(t, i)), me("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = Ee({}, i, { value: void 0 })),
                  me("invalid", t);
                break;
              case "textarea":
                Of(t, i), (r = Lu(t, i)), me("invalid", t);
                break;
              default:
                r = i;
            }
            $u(n, r), (a = r);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Cm(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && _m(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && cs(t, l)
                    : typeof l == "number" && cs(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (us.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && me("scroll", t)
                      : l != null && Hc(t, s, l, o));
              }
            switch (n) {
              case "input":
                Xs(t), zf(t, i, !1);
                break;
              case "textarea":
                Xs(t), Mf(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + Xn(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Ki(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Ki(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = ea);
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
      return Xe(e), null;
    case 6:
      if (t && e.stateNode != null) Qg(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(D(166));
        if (((n = ui(xs.current)), ui(an.current), oo(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[nn] = e),
            (s = i.nodeValue !== n) && ((t = St), t !== null))
          )
            switch (t.tag) {
              case 3:
                so(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  so(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[nn] = e),
            (e.stateNode = i);
      }
      return Xe(e), null;
    case 13:
      if (
        (ye(ke),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (xe && xt !== null && e.mode & 1 && !(e.flags & 128))
          pg(), sr(), (e.flags |= 98560), (s = !1);
        else if (((s = oo(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(D(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(D(317));
            s[nn] = e;
          } else
            sr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Xe(e), (s = !1);
        } else Ht !== null && (yc(Ht), (Ht = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ke.current & 1 ? je === 0 && (je = 3) : Ed())),
          e.updateQueue !== null && (e.flags |= 4),
          Xe(e),
          null);
    case 4:
      return (
        ar(), uc(t, e), t === null && ys(e.stateNode.containerInfo), Xe(e), null
      );
    case 10:
      return ld(e.type._context), Xe(e), null;
    case 17:
      return pt(e.type) && ta(), Xe(e), null;
    case 19:
      if ((ye(ke), (s = e.memoizedState), s === null)) return Xe(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) Lr(s, !1);
        else {
          if (je !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = la(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Lr(s, !1),
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
                return he(ke, (ke.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Ie() > ur &&
            ((e.flags |= 128), (i = !0), Lr(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = la(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Lr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !xe)
            )
              return Xe(e), null;
          } else
            2 * Ie() - s.renderingStartTime > ur &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), Lr(s, !1), (e.lanes = 4194304));
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
          (s.renderingStartTime = Ie()),
          (e.sibling = null),
          (n = ke.current),
          he(ke, i ? (n & 1) | 2 : n & 1),
          e)
        : (Xe(e), null);
    case 22:
    case 23:
      return (
        _d(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? vt & 1073741824 && (Xe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Xe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, e.tag));
}
function Lw(t, e) {
  switch ((rd(e), e.tag)) {
    case 1:
      return (
        pt(e.type) && ta(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ar(),
        ye(ft),
        ye(tt),
        pd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return fd(e), null;
    case 13:
      if (
        (ye(ke), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(D(340));
        sr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ye(ke), null;
    case 4:
      return ar(), null;
    case 10:
      return ld(e.type._context), null;
    case 22:
    case 23:
      return _d(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var uo = !1,
  Ze = !1,
  Aw = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Vi(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        ze(t, e, i);
      }
    else n.current = null;
}
function cc(t, e, n) {
  try {
    n();
  } catch (i) {
    ze(t, e, i);
  }
}
var bp = !1;
function $w(t, e) {
  if (((qu = Xo), (t = eg()), nd(t))) {
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
            p = null;
          t: for (;;) {
            for (
              var f;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d !== s || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (f = d.firstChild) !== null;

            )
              (p = d), (d = f);
            for (;;) {
              if (d === t) break t;
              if (
                (p === n && ++u === r && (a = o),
                p === s && ++c === i && (l = o),
                (f = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = f;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ku = { focusedElem: t, selectionRange: n }, Xo = !1, V = e; V !== null; )
    if (((e = V), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (V = t);
    else
      for (; V !== null; ) {
        e = V;
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
                    w = g.memoizedState,
                    y = e.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : Bt(e.type, m),
                      w,
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
        } catch (b) {
          ze(e, e.return, b);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (V = t);
          break;
        }
        V = e.return;
      }
  return (g = bp), (bp = !1), g;
}
function Jr(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && cc(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function ja(t, e) {
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
function dc(t) {
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
function Xg(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Xg(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[nn], delete e[ws], delete e[Xu], delete e[vw], delete e[ww])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Jg(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function xp(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Jg(t.return)) return null;
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
function fc(t, e, n) {
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
          n != null || e.onclick !== null || (e.onclick = ea));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (fc(t, e, n), t = t.sibling; t !== null; ) fc(t, e, n), (t = t.sibling);
}
function pc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (pc(t, e, n), t = t.sibling; t !== null; ) pc(t, e, n), (t = t.sibling);
}
var Ve = null,
  Wt = !1;
function On(t, e, n) {
  for (n = n.child; n !== null; ) Zg(t, e, n), (n = n.sibling);
}
function Zg(t, e, n) {
  if (on && typeof on.onCommitFiberUnmount == "function")
    try {
      on.onCommitFiberUnmount(Oa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || Vi(n, e);
    case 6:
      var i = Ve,
        r = Wt;
      (Ve = null),
        On(t, e, n),
        (Ve = i),
        (Wt = r),
        Ve !== null &&
          (Wt
            ? ((t = Ve),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Wt
          ? ((t = Ve),
            (n = n.stateNode),
            t.nodeType === 8
              ? Rl(t.parentNode, n)
              : t.nodeType === 1 && Rl(t, n),
            hs(t))
          : Rl(Ve, n.stateNode));
      break;
    case 4:
      (i = Ve),
        (r = Wt),
        (Ve = n.stateNode.containerInfo),
        (Wt = !0),
        On(t, e, n),
        (Ve = i),
        (Wt = r);
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
            o !== void 0 && (s & 2 || s & 4) && cc(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      On(t, e, n);
      break;
    case 1:
      if (
        !Ze &&
        (Vi(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          ze(n, e, a);
        }
      On(t, e, n);
      break;
    case 21:
      On(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (i = Ze) || n.memoizedState !== null), On(t, e, n), (Ze = i))
        : On(t, e, n);
      break;
    default:
      On(t, e, n);
  }
}
function Sp(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Aw()),
      e.forEach(function (i) {
        var r = Vw.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function Ft(t, e) {
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
              (Ve = a.stateNode), (Wt = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (Wt = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (Wt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(D(160));
        Zg(s, o, r), (Ve = null), (Wt = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (u) {
        ze(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) e0(e, t), (e = e.sibling);
}
function e0(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ft(e, t), Xt(t), i & 4)) {
        try {
          Jr(3, t, t.return), ja(3, t);
        } catch (m) {
          ze(t, t.return, m);
        }
        try {
          Jr(5, t, t.return);
        } catch (m) {
          ze(t, t.return, m);
        }
      }
      break;
    case 1:
      Ft(e, t), Xt(t), i & 512 && n !== null && Vi(n, n.return);
      break;
    case 5:
      if (
        (Ft(e, t),
        Xt(t),
        i & 512 && n !== null && Vi(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          cs(r, "");
        } catch (m) {
          ze(t, t.return, m);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && xm(r, s),
              Du(a, o);
            var u = Du(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Cm(r, d)
                : c === "dangerouslySetInnerHTML"
                ? _m(r, d)
                : c === "children"
                ? cs(r, d)
                : Hc(r, c, d, u);
            }
            switch (a) {
              case "input":
                Iu(r, s);
                break;
              case "textarea":
                Sm(r, s);
                break;
              case "select":
                var p = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Ki(r, !!s.multiple, f, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ki(r, !!s.multiple, s.defaultValue, !0)
                      : Ki(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[ws] = s;
          } catch (m) {
            ze(t, t.return, m);
          }
      }
      break;
    case 6:
      if ((Ft(e, t), Xt(t), i & 4)) {
        if (t.stateNode === null) throw Error(D(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (m) {
          ze(t, t.return, m);
        }
      }
      break;
    case 3:
      if (
        (Ft(e, t), Xt(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hs(e.containerInfo);
        } catch (m) {
          ze(t, t.return, m);
        }
      break;
    case 4:
      Ft(e, t), Xt(t);
      break;
    case 13:
      Ft(e, t),
        Xt(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Sd = Ie())),
        i & 4 && Sp(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Ze = (u = Ze) || c), Ft(e, t), (Ze = u)) : Ft(e, t),
        Xt(t),
        i & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (V = t, c = t.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((p = V), (f = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, p, p.return);
                  break;
                case 1:
                  Vi(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (i = p), (n = p.return);
                    try {
                      (e = i),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      ze(i, n, m);
                    }
                  }
                  break;
                case 5:
                  Vi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    _p(d);
                    continue;
                  }
              }
              f !== null ? ((f.return = p), (V = f)) : _p(d);
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
                      (a.style.display = Em("display", o)));
              } catch (m) {
                ze(t, t.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                ze(t, t.return, m);
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
      Ft(e, t), Xt(t), i & 4 && Sp(t);
      break;
    case 21:
      break;
    default:
      Ft(e, t), Xt(t);
  }
}
function Xt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Jg(n)) {
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
          i.flags & 32 && (cs(r, ""), (i.flags &= -33));
          var s = xp(t);
          pc(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = xp(t);
          fc(t, a, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      ze(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Dw(t, e, n) {
  (V = t), t0(t);
}
function t0(t, e, n) {
  for (var i = (t.mode & 1) !== 0; V !== null; ) {
    var r = V,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || uo;
      if (!o) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || Ze;
        a = uo;
        var u = Ze;
        if (((uo = o), (Ze = l) && !u))
          for (V = r; V !== null; )
            (o = V),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ep(r)
                : l !== null
                ? ((l.return = o), (V = l))
                : Ep(r);
        for (; s !== null; ) (V = s), t0(s), (s = s.sibling);
        (V = r), (uo = a), (Ze = u);
      }
      kp(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (V = s)) : kp(t);
  }
}
function kp(t) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ze || ja(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Ze)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Bt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && op(e, s, i);
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
                op(e, o, n);
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
                    d !== null && hs(d);
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
        Ze || (e.flags & 512 && dc(e));
      } catch (p) {
        ze(e, e.return, p);
      }
    }
    if (e === t) {
      V = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function _p(t) {
  for (; V !== null; ) {
    var e = V;
    if (e === t) {
      V = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function Ep(t) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ja(4, e);
          } catch (l) {
            ze(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              ze(e, r, l);
            }
          }
          var s = e.return;
          try {
            dc(e);
          } catch (l) {
            ze(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            dc(e);
          } catch (l) {
            ze(e, o, l);
          }
      }
    } catch (l) {
      ze(e, e.return, l);
    }
    if (e === t) {
      V = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (V = a);
      break;
    }
    V = e.return;
  }
}
var jw = Math.ceil,
  da = Pn.ReactCurrentDispatcher,
  bd = Pn.ReactCurrentOwner,
  Lt = Pn.ReactCurrentBatchConfig,
  se = 0,
  He = null,
  $e = null,
  qe = 0,
  vt = 0,
  Gi = ni(0),
  je = 0,
  Es = null,
  wi = 0,
  Na = 0,
  xd = 0,
  Zr = null,
  lt = null,
  Sd = 0,
  ur = 1 / 0,
  hn = null,
  fa = !1,
  hc = null,
  Kn = null,
  co = !1,
  Nn = null,
  pa = 0,
  es = 0,
  mc = null,
  Oo = -1,
  Mo = 0;
function it() {
  return se & 6 ? Ie() : Oo !== -1 ? Oo : (Oo = Ie());
}
function Yn(t) {
  return t.mode & 1
    ? se & 2 && qe !== 0
      ? qe & -qe
      : xw.transition !== null
      ? (Mo === 0 && (Mo = jm()), Mo)
      : ((t = fe),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Vm(t.type))),
        t)
    : 1;
}
function Vt(t, e, n, i) {
  if (50 < es) throw ((es = 0), (mc = null), Error(D(185)));
  As(t, n, i),
    (!(se & 2) || t !== He) &&
      (t === He && (!(se & 2) && (Na |= n), je === 4 && $n(t, qe)),
      ht(t, i),
      n === 1 && se === 0 && !(e.mode & 1) && ((ur = Ie() + 500), Aa && ii()));
}
function ht(t, e) {
  var n = t.callbackNode;
  x1(t, e);
  var i = Qo(t, t === He ? qe : 0);
  if (i === 0)
    n !== null && Lf(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && Lf(n), e === 1))
      t.tag === 0 ? bw(Cp.bind(null, t)) : cg(Cp.bind(null, t)),
        gw(function () {
          !(se & 6) && ii();
        }),
        (n = null);
    else {
      switch (Nm(i)) {
        case 1:
          n = Kc;
          break;
        case 4:
          n = $m;
          break;
        case 16:
          n = Yo;
          break;
        case 536870912:
          n = Dm;
          break;
        default:
          n = Yo;
      }
      n = u0(n, n0.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function n0(t, e) {
  if (((Oo = -1), (Mo = 0), se & 6)) throw Error(D(327));
  var n = t.callbackNode;
  if (Zi() && t.callbackNode !== n) return null;
  var i = Qo(t, t === He ? qe : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = ha(t, i);
  else {
    e = i;
    var r = se;
    se |= 2;
    var s = r0();
    (He !== t || qe !== e) && ((hn = null), (ur = Ie() + 500), di(t, e));
    do
      try {
        Bw();
        break;
      } catch (a) {
        i0(t, a);
      }
    while (1);
    ad(),
      (da.current = s),
      (se = r),
      $e !== null ? (e = 0) : ((He = null), (qe = 0), (e = je));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = Wu(t)), r !== 0 && ((i = r), (e = gc(t, r)))), e === 1)
    )
      throw ((n = Es), di(t, 0), $n(t, i), ht(t, Ie()), n);
    if (e === 6) $n(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !Nw(r) &&
          ((e = ha(t, i)),
          e === 2 && ((s = Wu(t)), s !== 0 && ((i = s), (e = gc(t, s)))),
          e === 1))
      )
        throw ((n = Es), di(t, 0), $n(t, i), ht(t, Ie()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          si(t, lt, hn);
          break;
        case 3:
          if (
            ($n(t, i), (i & 130023424) === i && ((e = Sd + 500 - Ie()), 10 < e))
          ) {
            if (Qo(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              it(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = Qu(si.bind(null, t, lt, hn), e);
            break;
          }
          si(t, lt, hn);
          break;
        case 4:
          if (($n(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - Ut(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = Ie() - i),
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
                : 1960 * jw(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = Qu(si.bind(null, t, lt, hn), i);
            break;
          }
          si(t, lt, hn);
          break;
        case 5:
          si(t, lt, hn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return ht(t, Ie()), t.callbackNode === n ? n0.bind(null, t) : null;
}
function gc(t, e) {
  var n = Zr;
  return (
    t.current.memoizedState.isDehydrated && (di(t, e).flags |= 256),
    (t = ha(t, e)),
    t !== 2 && ((e = lt), (lt = n), e !== null && yc(e)),
    t
  );
}
function yc(t) {
  lt === null ? (lt = t) : lt.push.apply(lt, t);
}
function Nw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!qt(s(), r)) return !1;
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
function $n(t, e) {
  for (
    e &= ~xd,
      e &= ~Na,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Ut(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function Cp(t) {
  if (se & 6) throw Error(D(327));
  Zi();
  var e = Qo(t, 0);
  if (!(e & 1)) return ht(t, Ie()), null;
  var n = ha(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = Wu(t);
    i !== 0 && ((e = i), (n = gc(t, i)));
  }
  if (n === 1) throw ((n = Es), di(t, 0), $n(t, e), ht(t, Ie()), n);
  if (n === 6) throw Error(D(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    si(t, lt, hn),
    ht(t, Ie()),
    null
  );
}
function kd(t, e) {
  var n = se;
  se |= 1;
  try {
    return t(e);
  } finally {
    (se = n), se === 0 && ((ur = Ie() + 500), Aa && ii());
  }
}
function bi(t) {
  Nn !== null && Nn.tag === 0 && !(se & 6) && Zi();
  var e = se;
  se |= 1;
  var n = Lt.transition,
    i = fe;
  try {
    if (((Lt.transition = null), (fe = 1), t)) return t();
  } finally {
    (fe = i), (Lt.transition = n), (se = e), !(se & 6) && ii();
  }
}
function _d() {
  (vt = Gi.current), ye(Gi);
}
function di(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), mw(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var i = n;
      switch ((rd(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && ta();
          break;
        case 3:
          ar(), ye(ft), ye(tt), pd();
          break;
        case 5:
          fd(i);
          break;
        case 4:
          ar();
          break;
        case 13:
          ye(ke);
          break;
        case 19:
          ye(ke);
          break;
        case 10:
          ld(i.type._context);
          break;
        case 22:
        case 23:
          _d();
      }
      n = n.return;
    }
  if (
    ((He = t),
    ($e = t = Qn(t.current, null)),
    (qe = vt = e),
    (je = 0),
    (Es = null),
    (xd = Na = wi = 0),
    (lt = Zr = null),
    li !== null)
  ) {
    for (e = 0; e < li.length; e++)
      if (((n = li[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    li = null;
  }
  return t;
}
function i0(t, e) {
  do {
    var n = $e;
    try {
      if ((ad(), (To.current = ca), ua)) {
        for (var i = _e.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        ua = !1;
      }
      if (
        ((vi = 0),
        (Fe = De = _e = null),
        (Xr = !1),
        (Ss = 0),
        (bd.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (Es = e), ($e = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = qe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = pp(o);
          if (f !== null) {
            (f.flags &= -257),
              hp(f, o, a, s, e),
              f.mode & 1 && fp(s, u, e),
              (e = f),
              (l = u);
            var g = e.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(l), (e.updateQueue = m);
            } else g.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              fp(s, u, e), Ed();
              break e;
            }
            l = Error(D(426));
          }
        } else if (xe && a.mode & 1) {
          var w = pp(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              hp(w, o, a, s, e),
              sd(lr(l, a));
            break e;
          }
        }
        (s = l = lr(l, a)),
          je !== 4 && (je = 2),
          Zr === null ? (Zr = [s]) : Zr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var y = Fg(s, l, e);
              sp(s, y);
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
                    (Kn === null || !Kn.has(v))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var b = Bg(s, a, e);
                sp(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      o0(n);
    } catch (x) {
      (e = x), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function r0() {
  var t = da.current;
  return (da.current = ca), t === null ? ca : t;
}
function Ed() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    He === null || (!(wi & 268435455) && !(Na & 268435455)) || $n(He, qe);
}
function ha(t, e) {
  var n = se;
  se |= 2;
  var i = r0();
  (He !== t || qe !== e) && ((hn = null), di(t, e));
  do
    try {
      Fw();
      break;
    } catch (r) {
      i0(t, r);
    }
  while (1);
  if ((ad(), (se = n), (da.current = i), $e !== null)) throw Error(D(261));
  return (He = null), (qe = 0), je;
}
function Fw() {
  for (; $e !== null; ) s0($e);
}
function Bw() {
  for (; $e !== null && !f1(); ) s0($e);
}
function s0(t) {
  var e = l0(t.alternate, t, vt);
  (t.memoizedProps = t.pendingProps),
    e === null ? o0(t) : ($e = e),
    (bd.current = null);
}
function o0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Lw(n, e)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (je = 6), ($e = null);
        return;
      }
    } else if (((n = Rw(n, e, vt)), n !== null)) {
      $e = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      $e = e;
      return;
    }
    $e = e = t;
  } while (e !== null);
  je === 0 && (je = 5);
}
function si(t, e, n) {
  var i = fe,
    r = Lt.transition;
  try {
    (Lt.transition = null), (fe = 1), Ww(t, e, n, i);
  } finally {
    (Lt.transition = r), (fe = i);
  }
  return null;
}
function Ww(t, e, n, i) {
  do Zi();
  while (Nn !== null);
  if (se & 6) throw Error(D(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(D(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (S1(t, s),
    t === He && (($e = He = null), (qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      co ||
      ((co = !0),
      u0(Yo, function () {
        return Zi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Lt.transition), (Lt.transition = null);
    var o = fe;
    fe = 1;
    var a = se;
    (se |= 4),
      (bd.current = null),
      $w(t, n),
      e0(n, t),
      lw(Ku),
      (Xo = !!qu),
      (Ku = qu = null),
      (t.current = n),
      Dw(n),
      p1(),
      (se = a),
      (fe = o),
      (Lt.transition = s);
  } else t.current = n;
  if (
    (co && ((co = !1), (Nn = t), (pa = r)),
    (s = t.pendingLanes),
    s === 0 && (Kn = null),
    g1(n.stateNode),
    ht(t, Ie()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (fa) throw ((fa = !1), (t = hc), (hc = null), t);
  return (
    pa & 1 && t.tag !== 0 && Zi(),
    (s = t.pendingLanes),
    s & 1 ? (t === mc ? es++ : ((es = 0), (mc = t))) : (es = 0),
    ii(),
    null
  );
}
function Zi() {
  if (Nn !== null) {
    var t = Nm(pa),
      e = Lt.transition,
      n = fe;
    try {
      if (((Lt.transition = null), (fe = 16 > t ? 16 : t), Nn === null))
        var i = !1;
      else {
        if (((t = Nn), (Nn = null), (pa = 0), se & 6)) throw Error(D(331));
        var r = se;
        for (se |= 4, V = t.current; V !== null; ) {
          var s = V,
            o = s.child;
          if (V.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var p = c.sibling,
                        f = c.return;
                      if ((Xg(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = f), (V = p);
                        break;
                      }
                      V = f;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (V = o);
          else
            e: for (; V !== null; ) {
              if (((s = V), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (V = y);
                break e;
              }
              V = s.return;
            }
        }
        var h = t.current;
        for (V = h; V !== null; ) {
          o = V;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (V = v);
          else
            e: for (o = h; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ja(9, a);
                  }
                } catch (x) {
                  ze(a, a.return, x);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (V = b);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((se = r), ii(), on && typeof on.onPostCommitFiberRoot == "function")
        )
          try {
            on.onPostCommitFiberRoot(Oa, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (fe = n), (Lt.transition = e);
    }
  }
  return !1;
}
function Tp(t, e, n) {
  (e = lr(n, e)),
    (e = Fg(t, e, 1)),
    (t = qn(t, e, 1)),
    (e = it()),
    t !== null && (As(t, 1, e), ht(t, e));
}
function ze(t, e, n) {
  if (t.tag === 3) Tp(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Tp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Kn === null || !Kn.has(i)))
        ) {
          (t = lr(n, t)),
            (t = Bg(e, t, 1)),
            (e = qn(e, t, 1)),
            (t = it()),
            e !== null && (As(e, 1, t), ht(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Hw(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = it()),
    (t.pingedLanes |= t.suspendedLanes & n),
    He === t &&
      (qe & n) === n &&
      (je === 4 || (je === 3 && (qe & 130023424) === qe && 500 > Ie() - Sd)
        ? di(t, 0)
        : (xd |= n)),
    ht(t, e);
}
function a0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = eo), (eo <<= 1), !(eo & 130023424) && (eo = 4194304))
      : (e = 1));
  var n = it();
  (t = _n(t, e)), t !== null && (As(t, e, n), ht(t, n));
}
function Uw(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), a0(t, n);
}
function Vw(t, e) {
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
  i !== null && i.delete(e), a0(t, n);
}
var l0;
l0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ft.current) ut = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (ut = !1), Iw(t, e, n);
      ut = !!(t.flags & 131072);
    }
  else (ut = !1), xe && e.flags & 1048576 && dg(e, ra, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      zo(t, e), (t = e.pendingProps);
      var r = rr(e, tt.current);
      Ji(e, n), (r = md(null, e, i, t, r, n));
      var s = gd();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            pt(i) ? ((s = !0), na(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            cd(e),
            (r.updater = $a),
            (e.stateNode = r),
            (r._reactInternals = e),
            ic(e, i, t, n),
            (e = oc(null, e, i, !0, s, n)))
          : ((e.tag = 0), xe && s && id(e), nt(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (zo(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = qw(i)),
          (t = Bt(i, t)),
          r)
        ) {
          case 0:
            e = sc(null, e, i, t, n);
            break e;
          case 1:
            e = yp(null, e, i, t, n);
            break e;
          case 11:
            e = mp(null, e, i, t, n);
            break e;
          case 14:
            e = gp(null, e, i, Bt(i.type, t), n);
            break e;
        }
        throw Error(D(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Bt(i, r)),
        sc(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Bt(i, r)),
        yp(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((Vg(e), t === null)) throw Error(D(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          mg(t, e),
          aa(e, i, null, n);
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
            (r = lr(Error(D(423)), e)), (e = vp(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = lr(Error(D(424)), e)), (e = vp(t, e, i, n, r));
            break e;
          } else
            for (
              xt = Gn(e.stateNode.containerInfo.firstChild),
                St = e,
                xe = !0,
                Ht = null,
                n = wg(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sr(), i === r)) {
            e = En(t, e, n);
            break e;
          }
          nt(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        bg(e),
        t === null && ec(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        Yu(i, r) ? (o = null) : s !== null && Yu(i, s) && (e.flags |= 32),
        Ug(t, e),
        nt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && ec(e), null;
    case 13:
      return Gg(t, e, n);
    case 4:
      return (
        dd(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = or(e, null, i, n)) : nt(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Bt(i, r)),
        mp(t, e, i, r, n)
      );
    case 7:
      return nt(t, e, e.pendingProps, n), e.child;
    case 8:
      return nt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return nt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          he(sa, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (qt(s.value, o)) {
            if (s.children === r.children && !ft.current) {
              e = En(t, e, n);
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
                      (l = bn(-1, n & -n)), (l.tag = 2);
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
                      tc(s.return, n, e),
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
                  tc(o, n, e),
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
        nt(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        Ji(e, n),
        (r = $t(r)),
        (i = i(r)),
        (e.flags |= 1),
        nt(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = Bt(i, e.pendingProps)),
        (r = Bt(i.type, r)),
        gp(t, e, i, r, n)
      );
    case 15:
      return Wg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Bt(i, r)),
        zo(t, e),
        (e.tag = 1),
        pt(i) ? ((t = !0), na(e)) : (t = !1),
        Ji(e, n),
        yg(e, i, r),
        ic(e, i, r, n),
        oc(null, e, i, !0, t, n)
      );
    case 19:
      return qg(t, e, n);
    case 22:
      return Hg(t, e, n);
  }
  throw Error(D(156, e.tag));
};
function u0(t, e) {
  return Am(t, e);
}
function Gw(t, e, n, i) {
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
function Rt(t, e, n, i) {
  return new Gw(t, e, n, i);
}
function Cd(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function qw(t) {
  if (typeof t == "function") return Cd(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Vc)) return 11;
    if (t === Gc) return 14;
  }
  return 2;
}
function Qn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Rt(t.tag, e, t.key, t.mode)),
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
function Io(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) Cd(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case $i:
        return fi(n.children, r, s, e);
      case Uc:
        (o = 8), (r |= 8);
        break;
      case Tu:
        return (
          (t = Rt(12, n, e, r | 2)), (t.elementType = Tu), (t.lanes = s), t
        );
      case Pu:
        return (t = Rt(13, n, e, r)), (t.elementType = Pu), (t.lanes = s), t;
      case zu:
        return (t = Rt(19, n, e, r)), (t.elementType = zu), (t.lanes = s), t;
      case vm:
        return Fa(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case gm:
              o = 10;
              break e;
            case ym:
              o = 9;
              break e;
            case Vc:
              o = 11;
              break e;
            case Gc:
              o = 14;
              break e;
            case Rn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(D(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Rt(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function fi(t, e, n, i) {
  return (t = Rt(7, t, i, e)), (t.lanes = n), t;
}
function Fa(t, e, n, i) {
  return (
    (t = Rt(22, t, i, e)),
    (t.elementType = vm),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Bl(t, e, n) {
  return (t = Rt(6, t, null, e)), (t.lanes = n), t;
}
function Wl(t, e, n) {
  return (
    (e = Rt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function Kw(t, e, n, i, r) {
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
    (this.eventTimes = Sl(0)),
    (this.expirationTimes = Sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sl(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Td(t, e, n, i, r, s, o, a, l) {
  return (
    (t = new Kw(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Rt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cd(s),
    t
  );
}
function Yw(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ai,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function c0(t) {
  if (!t) return Jn;
  t = t._reactInternals;
  e: {
    if (Ei(t) !== t || t.tag !== 1) throw Error(D(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (pt(e.type)) {
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
    if (pt(n)) return ug(t, n, e);
  }
  return e;
}
function d0(t, e, n, i, r, s, o, a, l) {
  return (
    (t = Td(n, i, !0, t, r, s, o, a, l)),
    (t.context = c0(null)),
    (n = t.current),
    (i = it()),
    (r = Yn(n)),
    (s = bn(i, r)),
    (s.callback = e ?? null),
    qn(n, s, r),
    (t.current.lanes = r),
    As(t, r, i),
    ht(t, i),
    t
  );
}
function Ba(t, e, n, i) {
  var r = e.current,
    s = it(),
    o = Yn(r);
  return (
    (n = c0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = bn(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = qn(r, e, o)),
    t !== null && (Vt(t, r, o, s), Co(t, r, o)),
    o
  );
}
function ma(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Pp(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Pd(t, e) {
  Pp(t, e), (t = t.alternate) && Pp(t, e);
}
function Qw() {
  return null;
}
var f0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function zd(t) {
  this._internalRoot = t;
}
Wa.prototype.render = zd.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(D(409));
  Ba(t, e, null, null);
};
Wa.prototype.unmount = zd.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    bi(function () {
      Ba(null, t, null, null);
    }),
      (e[kn] = null);
  }
};
function Wa(t) {
  this._internalRoot = t;
}
Wa.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Wm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < An.length && e !== 0 && e < An[n].priority; n++);
    An.splice(n, 0, t), n === 0 && Um(t);
  }
};
function Od(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ha(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function zp() {}
function Xw(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ma(o);
        s.call(u);
      };
    }
    var o = d0(e, i, t, 0, null, !1, !1, "", zp);
    return (
      (t._reactRootContainer = o),
      (t[kn] = o.current),
      ys(t.nodeType === 8 ? t.parentNode : t),
      bi(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var u = ma(l);
      a.call(u);
    };
  }
  var l = Td(t, 0, !1, null, null, !1, !1, "", zp);
  return (
    (t._reactRootContainer = l),
    (t[kn] = l.current),
    ys(t.nodeType === 8 ? t.parentNode : t),
    bi(function () {
      Ba(e, l, n, i);
    }),
    l
  );
}
function Ua(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = ma(o);
        a.call(l);
      };
    }
    Ba(e, o, t, r);
  } else o = Xw(n, e, t, r, i);
  return ma(o);
}
Fm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Wr(e.pendingLanes);
        n !== 0 &&
          (Yc(e, n | 1), ht(e, Ie()), !(se & 6) && ((ur = Ie() + 500), ii()));
      }
      break;
    case 13:
      bi(function () {
        var i = _n(t, 1);
        if (i !== null) {
          var r = it();
          Vt(i, t, 1, r);
        }
      }),
        Pd(t, 1);
  }
};
Qc = function (t) {
  if (t.tag === 13) {
    var e = _n(t, 134217728);
    if (e !== null) {
      var n = it();
      Vt(e, t, 134217728, n);
    }
    Pd(t, 134217728);
  }
};
Bm = function (t) {
  if (t.tag === 13) {
    var e = Yn(t),
      n = _n(t, e);
    if (n !== null) {
      var i = it();
      Vt(n, t, e, i);
    }
    Pd(t, e);
  }
};
Wm = function () {
  return fe;
};
Hm = function (t, e) {
  var n = fe;
  try {
    return (fe = t), e();
  } finally {
    fe = n;
  }
};
Nu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Iu(t, n), (e = n.name), n.type === "radio" && e != null)) {
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
            var r = La(i);
            if (!r) throw Error(D(90));
            bm(i), Iu(i, r);
          }
        }
      }
      break;
    case "textarea":
      Sm(t, n);
      break;
    case "select":
      (e = n.value), e != null && Ki(t, !!n.multiple, e, !1);
  }
};
zm = kd;
Om = bi;
var Jw = { usingClientEntryPoint: !1, Events: [Ds, Fi, La, Tm, Pm, kd] },
  Ar = {
    findFiberByHostInstance: ai,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Zw = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Rm(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || Qw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fo.isDisabled && fo.supportsFiber)
    try {
      (Oa = fo.inject(Zw)), (on = fo);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jw;
Ct.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Od(e)) throw Error(D(200));
  return Yw(t, e, null, n);
};
Ct.createRoot = function (t, e) {
  if (!Od(t)) throw Error(D(299));
  var n = !1,
    i = "",
    r = f0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Td(t, 1, !1, null, null, n, !1, i, r)),
    (t[kn] = e.current),
    ys(t.nodeType === 8 ? t.parentNode : t),
    new zd(e)
  );
};
Ct.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(D(188))
      : ((t = Object.keys(t).join(",")), Error(D(268, t)));
  return (t = Rm(e)), (t = t === null ? null : t.stateNode), t;
};
Ct.flushSync = function (t) {
  return bi(t);
};
Ct.hydrate = function (t, e, n) {
  if (!Ha(e)) throw Error(D(200));
  return Ua(null, t, e, !0, n);
};
Ct.hydrateRoot = function (t, e, n) {
  if (!Od(t)) throw Error(D(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = f0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = d0(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[kn] = e.current),
    ys(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new Wa(e);
};
Ct.render = function (t, e, n) {
  if (!Ha(e)) throw Error(D(200));
  return Ua(null, t, e, !1, n);
};
Ct.unmountComponentAtNode = function (t) {
  if (!Ha(t)) throw Error(D(40));
  return t._reactRootContainer
    ? (bi(function () {
        Ua(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[kn] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = kd;
Ct.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Ha(n)) throw Error(D(200));
  if (t == null || t._reactInternals === void 0) throw Error(D(38));
  return Ua(t, e, n, !1, i);
};
Ct.version = "18.2.0-next-9e3b772b8-20220608";
function p0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0);
    } catch (t) {
      console.error(t);
    }
}
p0(), (dm.exports = Ct);
var eb = dm.exports,
  Op = eb;
(Eu.createRoot = Op.createRoot), (Eu.hydrateRoot = Op.hydrateRoot);
var ct = function () {
  return (
    (ct =
      Object.assign ||
      function (e) {
        for (var n, i = 1, r = arguments.length; i < r; i++) {
          n = arguments[i];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
        }
        return e;
      }),
    ct.apply(this, arguments)
  );
};
function ga(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]));
  return t.concat(s || Array.prototype.slice.call(e));
}
function h0(t) {
  var e = Object.create(null);
  return function (n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var tb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  nb = h0(function (t) {
    return (
      tb.test(t) ||
      (t.charCodeAt(0) === 111 &&
        t.charCodeAt(1) === 110 &&
        t.charCodeAt(2) < 91)
    );
  }),
  ge = "-ms-",
  ts = "-moz-",
  le = "-webkit-",
  m0 = "comm",
  Va = "rule",
  Md = "decl",
  ib = "@import",
  g0 = "@keyframes",
  rb = "@layer",
  sb = Math.abs,
  Id = String.fromCharCode,
  vc = Object.assign;
function ob(t, e) {
  return Be(t, 0) ^ 45
    ? (((((((e << 2) ^ Be(t, 0)) << 2) ^ Be(t, 1)) << 2) ^ Be(t, 2)) << 2) ^
        Be(t, 3)
    : 0;
}
function y0(t) {
  return t.trim();
}
function mn(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function Z(t, e, n) {
  return t.replace(e, n);
}
function Ro(t, e) {
  return t.indexOf(e);
}
function Be(t, e) {
  return t.charCodeAt(e) | 0;
}
function cr(t, e, n) {
  return t.slice(e, n);
}
function Zt(t) {
  return t.length;
}
function v0(t) {
  return t.length;
}
function Ur(t, e) {
  return e.push(t), t;
}
function ab(t, e) {
  return t.map(e).join("");
}
function Mp(t, e) {
  return t.filter(function (n) {
    return !mn(n, e);
  });
}
var Ga = 1,
  dr = 1,
  w0 = 0,
  jt = 0,
  Le = 0,
  Cr = "";
function qa(t, e, n, i, r, s, o, a) {
  return {
    value: t,
    root: e,
    parent: n,
    type: i,
    props: r,
    children: s,
    line: Ga,
    column: dr,
    length: o,
    return: "",
    siblings: a,
  };
}
function In(t, e) {
  return vc(
    qa("", null, null, "", null, null, 0, t.siblings),
    t,
    { length: -t.length },
    e,
  );
}
function Ti(t) {
  for (; t.root; ) t = In(t.root, { children: [t] });
  Ur(t, t.siblings);
}
function lb() {
  return Le;
}
function ub() {
  return (
    (Le = jt > 0 ? Be(Cr, --jt) : 0), dr--, Le === 10 && ((dr = 1), Ga--), Le
  );
}
function Gt() {
  return (
    (Le = jt < w0 ? Be(Cr, jt++) : 0), dr++, Le === 10 && ((dr = 1), Ga++), Le
  );
}
function pi() {
  return Be(Cr, jt);
}
function Lo() {
  return jt;
}
function Ka(t, e) {
  return cr(Cr, t, e);
}
function wc(t) {
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
function cb(t) {
  return (Ga = dr = 1), (w0 = Zt((Cr = t))), (jt = 0), [];
}
function db(t) {
  return (Cr = ""), t;
}
function Hl(t) {
  return y0(Ka(jt - 1, bc(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function fb(t) {
  for (; (Le = pi()) && Le < 33; ) Gt();
  return wc(t) > 2 || wc(Le) > 3 ? "" : " ";
}
function pb(t, e) {
  for (
    ;
    --e &&
    Gt() &&
    !(Le < 48 || Le > 102 || (Le > 57 && Le < 65) || (Le > 70 && Le < 97));

  );
  return Ka(t, Lo() + (e < 6 && pi() == 32 && Gt() == 32));
}
function bc(t) {
  for (; Gt(); )
    switch (Le) {
      case t:
        return jt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && bc(Le);
        break;
      case 40:
        t === 41 && bc(t);
        break;
      case 92:
        Gt();
        break;
    }
  return jt;
}
function hb(t, e) {
  for (; Gt() && t + Le !== 47 + 10; )
    if (t + Le === 42 + 42 && pi() === 47) break;
  return "/*" + Ka(e, jt - 1) + "*" + Id(t === 47 ? t : Gt());
}
function mb(t) {
  for (; !wc(pi()); ) Gt();
  return Ka(t, jt);
}
function gb(t) {
  return db(Ao("", null, null, null, [""], (t = cb(t)), 0, [0], t));
}
function Ao(t, e, n, i, r, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      d = o,
      p = 0,
      f = 0,
      g = 0,
      m = 1,
      w = 1,
      y = 1,
      h = 0,
      v = "",
      b = r,
      x = s,
      k = i,
      S = v;
    w;

  )
    switch (((g = h), (h = Gt()))) {
      case 40:
        if (g != 108 && Be(S, d - 1) == 58) {
          Ro((S += Z(Hl(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Hl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += fb(g);
        break;
      case 92:
        S += pb(Lo() - 1, 7);
        continue;
      case 47:
        switch (pi()) {
          case 42:
          case 47:
            Ur(yb(hb(Gt(), Lo()), e, n, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        a[u++] = Zt(S) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            y == -1 && (S = Z(S, /\f/g, "")),
              f > 0 &&
                Zt(S) - d &&
                Ur(
                  f > 32
                    ? Rp(S + ";", i, n, d - 1, l)
                    : Rp(Z(S, " ", "") + ";", i, n, d - 2, l),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (Ur(
                (k = Ip(S, e, n, u, c, r, a, v, (b = []), (x = []), d, s)),
                s,
              ),
              h === 123)
            )
              if (c === 0) Ao(S, e, k, k, b, s, d, a, x);
              else
                switch (p === 99 && Be(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ao(
                      t,
                      k,
                      k,
                      i && Ur(Ip(t, k, k, 0, 0, r, a, v, r, (b = []), d, x), x),
                      r,
                      x,
                      d,
                      a,
                      i ? b : x,
                    );
                    break;
                  default:
                    Ao(S, k, k, k, [""], x, 0, a, x);
                }
        }
        (u = c = f = 0), (m = y = 1), (v = S = ""), (d = o);
        break;
      case 58:
        (d = 1 + Zt(S)), (f = g);
      default:
        if (m < 1) {
          if (h == 123) --m;
          else if (h == 125 && m++ == 0 && ub() == 125) continue;
        }
        switch (((S += Id(h)), h * m)) {
          case 38:
            y = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Zt(S) - 1) * y), (y = 1);
            break;
          case 64:
            pi() === 45 && (S += Hl(Gt())),
              (p = pi()),
              (c = d = Zt((v = S += mb(Lo())))),
              h++;
            break;
          case 45:
            g === 45 && Zt(S) == 2 && (m = 0);
        }
    }
  return s;
}
function Ip(t, e, n, i, r, s, o, a, l, u, c, d) {
  for (
    var p = r - 1, f = r === 0 ? s : [""], g = v0(f), m = 0, w = 0, y = 0;
    m < i;
    ++m
  )
    for (var h = 0, v = cr(t, p + 1, (p = sb((w = o[m])))), b = t; h < g; ++h)
      (b = y0(w > 0 ? f[h] + " " + v : Z(v, /&\f/g, f[h]))) && (l[y++] = b);
  return qa(t, e, n, r === 0 ? Va : a, l, u, c, d);
}
function yb(t, e, n, i) {
  return qa(t, e, n, m0, Id(lb()), cr(t, 2, -2), 0, i);
}
function Rp(t, e, n, i, r) {
  return qa(t, e, n, Md, cr(t, 0, i), cr(t, i + 1, -1), i, r);
}
function b0(t, e, n) {
  switch (ob(t, e)) {
    case 5103:
      return le + "print-" + t + t;
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
      return le + t + t;
    case 4789:
      return ts + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + t + ts + t + ge + t + t;
    case 5936:
      switch (Be(t, e + 11)) {
        case 114:
          return le + t + ge + Z(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return le + t + ge + Z(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return le + t + ge + Z(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return le + t + ge + t + t;
    case 6165:
      return le + t + ge + "flex-" + t + t;
    case 5187:
      return (
        le + t + Z(t, /(\w+).+(:[^]+)/, le + "box-$1$2" + ge + "flex-$1$2") + t
      );
    case 5443:
      return (
        le +
        t +
        ge +
        "flex-item-" +
        Z(t, /flex-|-self/g, "") +
        (mn(t, /flex-|baseline/)
          ? ""
          : ge + "grid-row-" + Z(t, /flex-|-self/g, "")) +
        t
      );
    case 4675:
      return (
        le +
        t +
        ge +
        "flex-line-pack" +
        Z(t, /align-content|flex-|-self/g, "") +
        t
      );
    case 5548:
      return le + t + ge + Z(t, "shrink", "negative") + t;
    case 5292:
      return le + t + ge + Z(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        le +
        "box-" +
        Z(t, "-grow", "") +
        le +
        t +
        ge +
        Z(t, "grow", "positive") +
        t
      );
    case 4554:
      return le + Z(t, /([^-])(transform)/g, "$1" + le + "$2") + t;
    case 6187:
      return (
        Z(Z(Z(t, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), t, "") +
        t
      );
    case 5495:
    case 3959:
      return Z(t, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(t, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + ge + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        le +
        t +
        t
      );
    case 4200:
      if (!mn(t, /flex-|baseline/))
        return ge + "grid-column-align" + cr(t, e) + t;
      break;
    case 2592:
    case 3360:
      return ge + Z(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n &&
        n.some(function (i, r) {
          return (e = r), mn(i.props, /grid-\w+-end/);
        })
        ? ~Ro(t + (n = n[e].value), "span")
          ? t
          : ge +
            Z(t, "-start", "") +
            t +
            ge +
            "grid-row-span:" +
            (~Ro(n, "span") ? mn(n, /\d+/) : +mn(n, /\d+/) - +mn(t, /\d+/)) +
            ";"
        : ge + Z(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n &&
        n.some(function (i) {
          return mn(i.props, /grid-\w+-start/);
        })
        ? t
        : ge + Z(Z(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(t, /(.+)-inline(.+)/, le + "$1$2") + t;
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
      if (Zt(t) - 1 - e > 6)
        switch (Be(t, e + 1)) {
          case 109:
            if (Be(t, e + 4) !== 45) break;
          case 102:
            return (
              Z(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  le +
                  "$2-$3$1" +
                  ts +
                  (Be(t, e + 3) == 108 ? "$3" : "$2-$3"),
              ) + t
            );
          case 115:
            return ~Ro(t, "stretch")
              ? b0(Z(t, "stretch", "fill-available"), e, n) + t
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
            ge +
            r +
            ":" +
            s +
            u +
            (o ? ge + r + "-span:" + (a ? l : +l - +s) + u : "") +
            t
          );
        },
      );
    case 4949:
      if (Be(t, e + 6) === 121) return Z(t, ":", ":" + le) + t;
      break;
    case 6444:
      switch (Be(t, Be(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Z(
              t,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                le +
                (Be(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                le +
                "$2$3$1" +
                ge +
                "$2box$3",
            ) + t
          );
        case 100:
          return Z(t, ":", ":" + ge) + t;
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
function ya(t, e) {
  for (var n = "", i = 0; i < t.length; i++) n += e(t[i], i, t, e) || "";
  return n;
}
function vb(t, e, n, i) {
  switch (t.type) {
    case rb:
      if (t.children.length) break;
    case ib:
    case Md:
      return (t.return = t.return || t.value);
    case m0:
      return "";
    case g0:
      return (t.return = t.value + "{" + ya(t.children, i) + "}");
    case Va:
      if (!Zt((t.value = t.props.join(",")))) return "";
  }
  return Zt((n = ya(t.children, i)))
    ? (t.return = t.value + "{" + n + "}")
    : "";
}
function wb(t) {
  var e = v0(t);
  return function (n, i, r, s) {
    for (var o = "", a = 0; a < e; a++) o += t[a](n, i, r, s) || "";
    return o;
  };
}
function bb(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
function xb(t, e, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Md:
        t.return = b0(t.value, t.length, n);
        return;
      case g0:
        return ya([In(t, { value: Z(t.value, "@", "@" + le) })], i);
      case Va:
        if (t.length)
          return ab((n = t.props), function (r) {
            switch (mn(r, (i = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Ti(In(t, { props: [Z(r, /:(read-\w+)/, ":" + ts + "$1")] })),
                  Ti(In(t, { props: [r] })),
                  vc(t, { props: Mp(n, i) });
                break;
              case "::placeholder":
                Ti(
                  In(t, { props: [Z(r, /:(plac\w+)/, ":" + le + "input-$1")] }),
                ),
                  Ti(In(t, { props: [Z(r, /:(plac\w+)/, ":" + ts + "$1")] })),
                  Ti(In(t, { props: [Z(r, /:(plac\w+)/, ge + "input-$1")] })),
                  Ti(In(t, { props: [r] })),
                  vc(t, { props: Mp(n, i) });
                break;
            }
            return "";
          });
    }
}
var x0 = {
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
  fr =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Rd = typeof window < "u" && "HTMLElement" in window,
  Sb = !!(typeof SC_DISABLE_SPEEDY == "boolean"
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
  Ya = Object.freeze([]),
  pr = Object.freeze({});
function kb(t, e, n) {
  return (
    n === void 0 && (n = pr), (t.theme !== n.theme && t.theme) || e || n.theme
  );
}
var S0 = new Set([
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
  _b = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Eb = /(^-|-$)/g;
function Lp(t) {
  return t.replace(_b, "-").replace(Eb, "");
}
var Cb = /(a)(d)/gi,
  Ap = function (t) {
    return String.fromCharCode(t + (t > 25 ? 39 : 97));
  };
function xc(t) {
  var e,
    n = "";
  for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = Ap(e % 52) + n;
  return (Ap(e % 52) + n).replace(Cb, "$1-$2");
}
var Ul,
  qi = function (t, e) {
    for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
    return t;
  },
  k0 = function (t) {
    return qi(5381, t);
  };
function Tb(t) {
  return xc(k0(t) >>> 0);
}
function Pb(t) {
  return t.displayName || t.name || "Component";
}
function Vl(t) {
  return typeof t == "string" && !0;
}
var _0 = typeof Symbol == "function" && Symbol.for,
  E0 = _0 ? Symbol.for("react.memo") : 60115,
  zb = _0 ? Symbol.for("react.forward_ref") : 60112,
  Ob = {
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
  Mb = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  C0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ib =
    (((Ul = {})[zb] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Ul[E0] = C0),
    Ul);
function $p(t) {
  return ("type" in (e = t) && e.type.$$typeof) === E0
    ? C0
    : "$$typeof" in t
    ? Ib[t.$$typeof]
    : Ob;
  var e;
}
var Rb = Object.defineProperty,
  Lb = Object.getOwnPropertyNames,
  Dp = Object.getOwnPropertySymbols,
  Ab = Object.getOwnPropertyDescriptor,
  $b = Object.getPrototypeOf,
  jp = Object.prototype;
function T0(t, e, n) {
  if (typeof e != "string") {
    if (jp) {
      var i = $b(e);
      i && i !== jp && T0(t, i, n);
    }
    var r = Lb(e);
    Dp && (r = r.concat(Dp(e)));
    for (var s = $p(t), o = $p(e), a = 0; a < r.length; ++a) {
      var l = r[a];
      if (!(l in Mb || (n && n[l]) || (o && l in o) || (s && l in s))) {
        var u = Ab(e, l);
        try {
          Rb(t, l, u);
        } catch {}
      }
    }
  }
  return t;
}
function hr(t) {
  return typeof t == "function";
}
function Ld(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function ci(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Np(t, e) {
  if (t.length === 0) return "";
  for (var n = t[0], i = 1; i < t.length; i++) n += e ? e + t[i] : t[i];
  return n;
}
function Cs(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    t.constructor.name === Object.name &&
    !("props" in t && t.$$typeof)
  );
}
function Sc(t, e, n) {
  if ((n === void 0 && (n = !1), !n && !Cs(t) && !Array.isArray(t))) return e;
  if (Array.isArray(e))
    for (var i = 0; i < e.length; i++) t[i] = Sc(t[i], e[i]);
  else if (Cs(e)) for (var i in e) t[i] = Sc(t[i], e[i]);
  return t;
}
function Ad(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
function Ns(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(t, " for more information.")
      .concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""),
  );
}
var Db = (function () {
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
            if ((s <<= 1) < 0) throw Ns(16, "".concat(e));
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
  $o = new Map(),
  va = new Map(),
  Gl = 1,
  po = function (t) {
    if ($o.has(t)) return $o.get(t);
    for (; va.has(Gl); ) Gl++;
    var e = Gl++;
    return $o.set(t, e), va.set(e, t), e;
  },
  jb = function (t, e) {
    $o.set(t, e), va.set(e, t);
  },
  Nb = "style["
    .concat(fr, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.2", '"]'),
  Fb = new RegExp(
    "^".concat(fr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  Bb = function (t, e, n) {
    for (var i, r = n.split(","), s = 0, o = r.length; s < o; s++)
      (i = r[s]) && t.registerName(e, i);
  },
  Wb = function (t, e) {
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
        var l = a.match(Fb);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (jb(c, u), Bb(t, c, l[3]), t.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  };
function Hb() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var P0 = function (t) {
    var e = document.head,
      n = t || e,
      i = document.createElement("style"),
      r = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(fr, "]")));
        return l[l.length - 1];
      })(n),
      s = r !== void 0 ? r.nextSibling : null;
    i.setAttribute(fr, "active"),
      i.setAttribute("data-styled-version", "6.0.2");
    var o = Hb();
    return o && i.setAttribute("nonce", o), n.insertBefore(i, s), i;
  },
  Ub = (function () {
    function t(e) {
      (this.element = P0(e)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var i = document.styleSheets, r = 0, s = i.length; r < s; r++) {
            var o = i[r];
            if (o.ownerNode === n) return o;
          }
          throw Ns(17);
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
  Vb = (function () {
    function t(e) {
      (this.element = P0(e)),
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
  Gb = (function () {
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
  Fp = Rd,
  qb = { isServer: !Rd, useCSSOMInjection: !Sb },
  z0 = (function () {
    function t(e, n, i) {
      e === void 0 && (e = pr), n === void 0 && (n = {});
      var r = this;
      (this.options = ct(ct({}, qb), e)),
        (this.gs = n),
        (this.names = new Map(i)),
        (this.server = !!e.isServer),
        !this.server &&
          Rd &&
          Fp &&
          ((Fp = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(Nb), a = 0, l = o.length;
              a < l;
              a++
            ) {
              var u = o[a];
              u &&
                u.getAttribute(fr) !== "active" &&
                (Wb(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Ad(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                l = "",
                u = function (d) {
                  var p = (function (y) {
                    return va.get(y);
                  })(d);
                  if (p === void 0) return "continue";
                  var f = s.names.get(p),
                    g = o.getGroup(d);
                  if (f === void 0 || g.length === 0) return "continue";
                  var m = ""
                      .concat(fr, ".g")
                      .concat(d, '[id="')
                      .concat(p, '"]'),
                    w = "";
                  f !== void 0 &&
                    f.forEach(function (y) {
                      y.length > 0 && (w += "".concat(y, ","));
                    }),
                    (l += "".concat(g).concat(m, '{content:"').concat(w, '"}')
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
        return po(e);
      }),
      (t.prototype.reconstructWithOptions = function (e, n) {
        return (
          n === void 0 && (n = !0),
          new t(
            ct(ct({}, this.options), e),
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
              return n.isServer ? new Gb(r) : i ? new Ub(r) : new Vb(r);
            })(this.options)),
            new Db(e)))
        );
        var e;
      }),
      (t.prototype.hasNameForId = function (e, n) {
        return this.names.has(e) && this.names.get(e).has(n);
      }),
      (t.prototype.registerName = function (e, n) {
        if ((po(e), this.names.has(e))) this.names.get(e).add(n);
        else {
          var i = new Set();
          i.add(n), this.names.set(e, i);
        }
      }),
      (t.prototype.insertRules = function (e, n, i) {
        this.registerName(e, n), this.getTag().insertRules(po(e), i);
      }),
      (t.prototype.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.prototype.clearRules = function (e) {
        this.getTag().clearGroup(po(e)), this.clearNames(e);
      }),
      (t.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      t
    );
  })(),
  Kb = /&/g,
  Yb = /^\s*\/\/.*$/gm;
function O0(t, e) {
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
        (n.children = O0(n.children, e)),
      n
    );
  });
}
function Qb(t) {
  var e,
    n,
    i,
    r = t === void 0 ? pr : t,
    s = r.options,
    o = s === void 0 ? pr : s,
    a = r.plugins,
    l = a === void 0 ? Ya : a,
    u = function (p, f, g) {
      return g === n ||
        (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
        ? ".".concat(e)
        : p;
    },
    c = l.slice();
  c.push(function (p) {
    p.type === Va &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(Kb, n).replace(i, u));
  }),
    o.prefix && c.push(xb),
    c.push(vb);
  var d = function (p, f, g, m) {
    f === void 0 && (f = ""),
      g === void 0 && (g = ""),
      m === void 0 && (m = "&"),
      (e = m),
      (n = f),
      (i = new RegExp("\\".concat(n, "\\b"), "g"));
    var w = p.replace(Yb, ""),
      y = gb(g || f ? "".concat(g, " ").concat(f, " { ").concat(w, " }") : w);
    o.namespace && (y = O0(y, o.namespace));
    var h = [];
    return (
      ya(
        y,
        wb(
          c.concat(
            bb(function (v) {
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
          .reduce(function (p, f) {
            return f.name || Ns(15), qi(p, f.name);
          }, 5381)
          .toString()
      : ""),
    d
  );
}
var Xb = new z0(),
  kc = Qb(),
  M0 = Y.createContext({
    shouldForwardProp: void 0,
    styleSheet: Xb,
    stylis: kc,
  });
M0.Consumer;
Y.createContext(void 0);
function Bp() {
  return A.useContext(M0);
}
var Jb = (function () {
    function t(e, n) {
      var i = this;
      (this.inject = function (r, s) {
        s === void 0 && (s = kc);
        var o = i.name + s.hash;
        r.hasNameForId(i.id, o) ||
          r.insertRules(i.id, o, s(i.rules, o, "@keyframes"));
      }),
        (this.name = e),
        (this.id = "sc-keyframes-".concat(e)),
        (this.rules = n),
        Ad(this, function () {
          throw Ns(12, String(i.name));
        });
    }
    return (
      (t.prototype.getName = function (e) {
        return e === void 0 && (e = kc), this.name + e.hash;
      }),
      t
    );
  })(),
  Zb = function (t) {
    return t >= "A" && t <= "Z";
  };
function Wp(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var i = t[n];
    if (n === 1 && i === "-" && t[0] === "-") return t;
    Zb(i) ? (e += "-" + i.toLowerCase()) : (e += i);
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var I0 = function (t) {
    return t == null || t === !1 || t === "";
  },
  R0 = function (t) {
    var e,
      n,
      i = [];
    for (var r in t) {
      var s = t[r];
      t.hasOwnProperty(r) &&
        !I0(s) &&
        ((Array.isArray(s) && s.isCss) || hr(s)
          ? i.push("".concat(Wp(r), ":"), s, ";")
          : Cs(s)
          ? i.push.apply(i, ga(ga(["".concat(r, " {")], R0(s), !1), ["}"], !1))
          : i.push(
              ""
                .concat(Wp(r), ": ")
                .concat(
                  ((e = r),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      e in x0 ||
                      e.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";",
                ),
            ));
    }
    return i;
  };
function hi(t, e, n, i) {
  if (I0(t)) return [];
  if (Ld(t)) return [".".concat(t.styledComponentId)];
  if (hr(t)) {
    if (!hr((s = t)) || (s.prototype && s.prototype.isReactComponent) || !e)
      return [t];
    var r = t(e);
    return hi(r, e, n, i);
  }
  var s;
  return t instanceof Jb
    ? n
      ? (t.inject(n, i), [t.getName(i)])
      : [t]
    : Cs(t)
    ? R0(t)
    : Array.isArray(t)
    ? Array.prototype.concat.apply(
        Ya,
        t.map(function (o) {
          return hi(o, e, n, i);
        }),
      )
    : [t.toString()];
}
function ex(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (hr(n) && !Ld(n)) return !1;
  }
  return !0;
}
var tx = k0("6.0.2"),
  nx = (function () {
    function t(e, n, i) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic = (i === void 0 || i.isStatic) && ex(e)),
        (this.componentId = n),
        (this.baseHash = qi(tx, n)),
        (this.baseStyle = i),
        z0.registerId(n);
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
            r = ci(r, this.staticRulesId);
          else {
            var s = Np(hi(this.rules, e, n, i)),
              o = xc(qi(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = i(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (r = ci(r, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var l = qi(this.baseHash, i.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") u += d;
            else if (d) {
              var p = Np(hi(d, e, n, i));
              (l = qi(l, p)), (u += p);
            }
          }
          if (u) {
            var f = xc(l >>> 0);
            n.hasNameForId(this.componentId, f) ||
              n.insertRules(
                this.componentId,
                f,
                i(u, ".".concat(f), void 0, this.componentId),
              ),
              (r = ci(r, f));
          }
        }
        return r;
      }),
      t
    );
  })(),
  L0 = Y.createContext(void 0);
L0.Consumer;
var ql = {};
function ix(t, e, n) {
  var i = Ld(t),
    r = t,
    s = !Vl(t),
    o = e.attrs,
    a = o === void 0 ? Ya : o,
    l = e.componentId,
    u =
      l === void 0
        ? (function (v, b) {
            var x = typeof v != "string" ? "sc" : Lp(v);
            ql[x] = (ql[x] || 0) + 1;
            var k = "".concat(x, "-").concat(Tb("6.0.2" + x + ql[x]));
            return b ? "".concat(b, "-").concat(k) : k;
          })(e.displayName, e.parentComponentId)
        : l,
    c = e.displayName;
  c === void 0 &&
    (function (v) {
      return Vl(v) ? "styled.".concat(v) : "Styled(".concat(Pb(v), ")");
    })(t);
  var d =
      e.displayName && e.componentId
        ? "".concat(Lp(e.displayName), "-").concat(e.componentId)
        : e.componentId || u,
    p = i && r.attrs ? r.attrs.concat(a).filter(Boolean) : a,
    f = e.shouldForwardProp;
  if (i && r.shouldForwardProp) {
    var g = r.shouldForwardProp;
    if (e.shouldForwardProp) {
      var m = e.shouldForwardProp;
      f = function (v, b) {
        return g(v, b) && m(v, b);
      };
    } else f = g;
  }
  var w = new nx(n, d, i ? r.componentStyle : void 0);
  function y(v, b) {
    return (function (x, k, S) {
      var C = x.attrs,
        T = x.componentStyle,
        z = x.defaultProps,
        _ = x.foldedComponentIds,
        E = x.styledComponentId,
        M = x.target,
        L = Y.useContext(L0),
        j = Bp(),
        N = x.shouldForwardProp || j.shouldForwardProp,
        W = (function (re, O, Ce) {
          for (
            var F, K = ct(ct({}, O), { className: void 0, theme: Ce }), J = 0;
            J < re.length;
            J += 1
          ) {
            var ne = hr((F = re[J])) ? F(K) : F;
            for (var X in ne)
              K[X] =
                X === "className"
                  ? ci(K[X], ne[X])
                  : X === "style"
                  ? ct(ct({}, K[X]), ne[X])
                  : ne[X];
          }
          return O.className && (K.className = ci(K.className, O.className)), K;
        })(C, k, kb(k, L, z) || pr),
        $ = W.as || M,
        I = {};
      for (var R in W)
        W[R] === void 0 ||
          R[0] === "$" ||
          R === "as" ||
          R === "theme" ||
          (R === "forwardedAs"
            ? (I.as = W.forwardedAs)
            : (N && !N(R, $)) || (I[R] = W[R]));
      var H = (function (re, O) {
          var Ce = Bp(),
            F = re.generateAndInjectStyles(O, Ce.styleSheet, Ce.stylis);
          return F;
        })(T, W),
        U = ci(_, E);
      return (
        H && (U += " " + H),
        W.className && (U += " " + W.className),
        (I[Vl($) && !S0.has($) ? "class" : "className"] = U),
        (I.ref = S),
        A.createElement($, I)
      );
    })(h, v, b);
  }
  var h = Y.forwardRef(y);
  return (
    (h.attrs = p),
    (h.componentStyle = w),
    (h.shouldForwardProp = f),
    (h.foldedComponentIds = i
      ? ci(r.foldedComponentIds, r.styledComponentId)
      : ""),
    (h.styledComponentId = d),
    (h.target = i ? r.target : t),
    Object.defineProperty(h, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = i
          ? (function (b) {
              for (var x = [], k = 1; k < arguments.length; k++)
                x[k - 1] = arguments[k];
              for (var S = 0, C = x; S < C.length; S++) Sc(b, C[S], !0);
              return b;
            })({}, r.defaultProps, v)
          : v;
      },
    }),
    Ad(h, function () {
      return ".".concat(h.styledComponentId);
    }),
    s &&
      T0(h, t, {
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
function Hp(t, e) {
  for (var n = [t[0]], i = 0, r = e.length; i < r; i += 1)
    n.push(e[i], t[i + 1]);
  return n;
}
var Up = function (t) {
  return Object.assign(t, { isCss: !0 });
};
function rx(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (hr(t) || Cs(t)) {
    var i = t;
    return Up(hi(Hp(Ya, ga([i], e, !0))));
  }
  var r = t;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? hi(r)
    : Up(hi(Hp(r, e)));
}
function _c(t, e, n) {
  if ((n === void 0 && (n = pr), !e)) throw Ns(1, e);
  var i = function (r) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return t(e, n, rx.apply(void 0, ga([r], s, !1)));
  };
  return (
    (i.attrs = function (r) {
      return _c(
        t,
        e,
        ct(ct({}, n), {
          attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
        }),
      );
    }),
    (i.withConfig = function (r) {
      return _c(t, e, ct(ct({}, n), r));
    }),
    i
  );
}
var A0 = function (t) {
    return _c(ix, t);
  },
  G = A0;
S0.forEach(function (t) {
  G[t] = A0(t);
});
function $0(t) {
  var e,
    n,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = $0(t[e])) && (i && (i += " "), (i += n));
    else for (e in t) t[e] && (i && (i += " "), (i += e));
  return i;
}
function wn() {
  for (var t, e, n = 0, i = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = $0(t)) && (i && (i += " "), (i += e));
  return i;
}
const ns = (t) => typeof t == "number" && !isNaN(t),
  xi = (t) => typeof t == "string",
  dt = (t) => typeof t == "function",
  Do = (t) => (xi(t) || dt(t) ? t : null),
  Kl = (t) => A.isValidElement(t) || xi(t) || dt(t) || ns(t);
function sx(t, e, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: i, style: r } = t;
  requestAnimationFrame(() => {
    (r.minHeight = "initial"),
      (r.height = i + "px"),
      (r.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (r.height = "0"), (r.padding = "0"), (r.margin = "0"), setTimeout(e, n);
      });
  });
}
function Qa(t) {
  let {
    enter: e,
    exit: n,
    appendPosition: i = !1,
    collapse: r = !0,
    collapseDuration: s = 300,
  } = t;
  return function (o) {
    let {
      children: a,
      position: l,
      preventExitTransition: u,
      done: c,
      nodeRef: d,
      isIn: p,
    } = o;
    const f = i ? `${e}--${l}` : e,
      g = i ? `${n}--${l}` : n,
      m = A.useRef(0);
    return (
      A.useLayoutEffect(() => {
        const w = d.current,
          y = f.split(" "),
          h = (v) => {
            v.target === d.current &&
              (w.dispatchEvent(new Event("d")),
              w.removeEventListener("animationend", h),
              w.removeEventListener("animationcancel", h),
              m.current === 0 &&
                v.type !== "animationcancel" &&
                w.classList.remove(...y));
          };
        w.classList.add(...y),
          w.addEventListener("animationend", h),
          w.addEventListener("animationcancel", h);
      }, []),
      A.useEffect(() => {
        const w = d.current,
          y = () => {
            w.removeEventListener("animationend", y), r ? sx(w, c, s) : c();
          };
        p ||
          (u
            ? y()
            : ((m.current = 1),
              (w.className += ` ${g}`),
              w.addEventListener("animationend", y)));
      }, [p]),
      Y.createElement(Y.Fragment, null, a)
    );
  };
}
function Vp(t, e) {
  return t != null
    ? {
        content: t.content,
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        status: e,
      }
    : {};
}
const Ot = {
    list: new Map(),
    emitQueue: new Map(),
    on(t, e) {
      return (
        this.list.has(t) || this.list.set(t, []), this.list.get(t).push(e), this
      );
    },
    off(t, e) {
      if (e) {
        const n = this.list.get(t).filter((i) => i !== e);
        return this.list.set(t, n), this;
      }
      return this.list.delete(t), this;
    },
    cancelEmit(t) {
      const e = this.emitQueue.get(t);
      return e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this;
    },
    emit(t) {
      this.list.has(t) &&
        this.list.get(t).forEach((e) => {
          const n = setTimeout(() => {
            e(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(t) || this.emitQueue.set(t, []),
            this.emitQueue.get(t).push(n);
        });
    },
  },
  ho = (t) => {
    let { theme: e, type: n, ...i } = t;
    return Y.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        e === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  Yl = {
    info: function (t) {
      return Y.createElement(
        ho,
        { ...t },
        Y.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        }),
      );
    },
    warning: function (t) {
      return Y.createElement(
        ho,
        { ...t },
        Y.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        }),
      );
    },
    success: function (t) {
      return Y.createElement(
        ho,
        { ...t },
        Y.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        }),
      );
    },
    error: function (t) {
      return Y.createElement(
        ho,
        { ...t },
        Y.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        }),
      );
    },
    spinner: function () {
      return Y.createElement("div", { className: "Toastify__spinner" });
    },
  };
function ox(t) {
  const [, e] = A.useReducer((f) => f + 1, 0),
    [n, i] = A.useState([]),
    r = A.useRef(null),
    s = A.useRef(new Map()).current,
    o = (f) => n.indexOf(f) !== -1,
    a = A.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: t,
      containerId: null,
      isToastActive: o,
      getToast: (f) => s.get(f),
    }).current;
  function l(f) {
    let { containerId: g } = f;
    const { limit: m } = a.props;
    !m ||
      (g && a.containerId !== g) ||
      ((a.count -= a.queue.length), (a.queue = []));
  }
  function u(f) {
    i((g) => (f == null ? [] : g.filter((m) => m !== f)));
  }
  function c() {
    const { toastContent: f, toastProps: g, staleId: m } = a.queue.shift();
    p(f, g, m);
  }
  function d(f, g) {
    let { delay: m, staleId: w, ...y } = g;
    if (
      !Kl(f) ||
      (function (E) {
        return (
          !r.current ||
          (a.props.enableMultiContainer &&
            E.containerId !== a.props.containerId) ||
          (s.has(E.toastId) && E.updateId == null)
        );
      })(y)
    )
      return;
    const { toastId: h, updateId: v, data: b } = y,
      { props: x } = a,
      k = () => u(h),
      S = v == null;
    S && a.count++;
    const C = {
      ...x,
      style: x.toastStyle,
      key: a.toastKey++,
      ...Object.fromEntries(
        Object.entries(y).filter((E) => {
          let [M, L] = E;
          return L != null;
        }),
      ),
      toastId: h,
      updateId: v,
      data: b,
      closeToast: k,
      isIn: !1,
      className: Do(y.className || x.toastClassName),
      bodyClassName: Do(y.bodyClassName || x.bodyClassName),
      progressClassName: Do(y.progressClassName || x.progressClassName),
      autoClose:
        !y.isLoading &&
        ((T = y.autoClose),
        (z = x.autoClose),
        T === !1 || (ns(T) && T > 0) ? T : z),
      deleteToast() {
        const E = Vp(s.get(h), "removed");
        s.delete(h), Ot.emit(4, E);
        const M = a.queue.length;
        if (
          ((a.count = h == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          M > 0)
        ) {
          const L = h == null ? a.props.limit : 1;
          if (M === 1 || L === 1) a.displayedToast++, c();
          else {
            const j = L > M ? M : L;
            a.displayedToast = j;
            for (let N = 0; N < j; N++) c();
          }
        } else e();
      },
    };
    var T, z;
    (C.iconOut = (function (E) {
      let { theme: M, type: L, isLoading: j, icon: N } = E,
        W = null;
      const $ = { theme: M, type: L };
      return (
        N === !1 ||
          (dt(N)
            ? (W = N($))
            : A.isValidElement(N)
            ? (W = A.cloneElement(N, $))
            : xi(N) || ns(N)
            ? (W = N)
            : j
            ? (W = Yl.spinner())
            : ((I) => I in Yl)(L) && (W = Yl[L]($))),
        W
      );
    })(C)),
      dt(y.onOpen) && (C.onOpen = y.onOpen),
      dt(y.onClose) && (C.onClose = y.onClose),
      (C.closeButton = x.closeButton),
      y.closeButton === !1 || Kl(y.closeButton)
        ? (C.closeButton = y.closeButton)
        : y.closeButton === !0 &&
          (C.closeButton = !Kl(x.closeButton) || x.closeButton);
    let _ = f;
    A.isValidElement(f) && !xi(f.type)
      ? (_ = A.cloneElement(f, { closeToast: k, toastProps: C, data: b }))
      : dt(f) && (_ = f({ closeToast: k, toastProps: C, data: b })),
      x.limit && x.limit > 0 && a.count > x.limit && S
        ? a.queue.push({ toastContent: _, toastProps: C, staleId: w })
        : ns(m)
        ? setTimeout(() => {
            p(_, C, w);
          }, m)
        : p(_, C, w);
  }
  function p(f, g, m) {
    const { toastId: w } = g;
    m && s.delete(m);
    const y = { content: f, props: g };
    s.set(w, y),
      i((h) => [...h, w].filter((v) => v !== m)),
      Ot.emit(4, Vp(y, y.props.updateId == null ? "added" : "updated"));
  }
  return (
    A.useEffect(
      () => (
        (a.containerId = t.containerId),
        Ot.cancelEmit(3)
          .on(0, d)
          .on(1, (f) => r.current && u(f))
          .on(5, l)
          .emit(2, a),
        () => {
          s.clear(), Ot.emit(3, a);
        }
      ),
      [],
    ),
    A.useEffect(() => {
      (a.props = t), (a.isToastActive = o), (a.displayedToast = n.length);
    }),
    {
      getToastToRender: function (f) {
        const g = new Map(),
          m = Array.from(s.values());
        return (
          t.newestOnTop && m.reverse(),
          m.forEach((w) => {
            const { position: y } = w.props;
            g.has(y) || g.set(y, []), g.get(y).push(w);
          }),
          Array.from(g, (w) => f(w[0], w[1]))
        );
      },
      containerRef: r,
      isToastActive: o,
    }
  );
}
function Gp(t) {
  return t.targetTouches && t.targetTouches.length >= 1
    ? t.targetTouches[0].clientX
    : t.clientX;
}
function qp(t) {
  return t.targetTouches && t.targetTouches.length >= 1
    ? t.targetTouches[0].clientY
    : t.clientY;
}
function ax(t) {
  const [e, n] = A.useState(!1),
    [i, r] = A.useState(!1),
    s = A.useRef(null),
    o = A.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    a = A.useRef(t),
    {
      autoClose: l,
      pauseOnHover: u,
      closeToast: c,
      onClick: d,
      closeOnClick: p,
    } = t;
  function f(b) {
    if (t.draggable) {
      b.nativeEvent.type === "touchstart" && b.nativeEvent.preventDefault(),
        (o.didMove = !1),
        document.addEventListener("mousemove", y),
        document.addEventListener("mouseup", h),
        document.addEventListener("touchmove", y),
        document.addEventListener("touchend", h);
      const x = s.current;
      (o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (o.boundingRect = x.getBoundingClientRect()),
        (x.style.transition = ""),
        (o.x = Gp(b.nativeEvent)),
        (o.y = qp(b.nativeEvent)),
        t.draggableDirection === "x"
          ? ((o.start = o.x),
            (o.removalDistance = x.offsetWidth * (t.draggablePercent / 100)))
          : ((o.start = o.y),
            (o.removalDistance =
              x.offsetHeight *
              (t.draggablePercent === 80
                ? 1.5 * t.draggablePercent
                : t.draggablePercent / 100)));
    }
  }
  function g(b) {
    if (o.boundingRect) {
      const { top: x, bottom: k, left: S, right: C } = o.boundingRect;
      b.nativeEvent.type !== "touchend" &&
      t.pauseOnHover &&
      o.x >= S &&
      o.x <= C &&
      o.y >= x &&
      o.y <= k
        ? w()
        : m();
    }
  }
  function m() {
    n(!0);
  }
  function w() {
    n(!1);
  }
  function y(b) {
    const x = s.current;
    o.canDrag &&
      x &&
      ((o.didMove = !0),
      e && w(),
      (o.x = Gp(b)),
      (o.y = qp(b)),
      (o.delta = t.draggableDirection === "x" ? o.x - o.start : o.y - o.start),
      o.start !== o.x && (o.canCloseOnClick = !1),
      (x.style.transform = `translate${t.draggableDirection}(${o.delta}px)`),
      (x.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function h() {
    document.removeEventListener("mousemove", y),
      document.removeEventListener("mouseup", h),
      document.removeEventListener("touchmove", y),
      document.removeEventListener("touchend", h);
    const b = s.current;
    if (o.canDrag && o.didMove && b) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return r(!0), void t.closeToast();
      (b.style.transition = "transform 0.2s, opacity 0.2s"),
        (b.style.transform = `translate${t.draggableDirection}(0)`),
        (b.style.opacity = "1");
    }
  }
  A.useEffect(() => {
    a.current = t;
  }),
    A.useEffect(
      () => (
        s.current && s.current.addEventListener("d", m, { once: !0 }),
        dt(t.onOpen) &&
          t.onOpen(A.isValidElement(t.children) && t.children.props),
        () => {
          const b = a.current;
          dt(b.onClose) &&
            b.onClose(A.isValidElement(b.children) && b.children.props);
        }
      ),
      [],
    ),
    A.useEffect(
      () => (
        t.pauseOnFocusLoss &&
          (document.hasFocus() || w(),
          window.addEventListener("focus", m),
          window.addEventListener("blur", w)),
        () => {
          t.pauseOnFocusLoss &&
            (window.removeEventListener("focus", m),
            window.removeEventListener("blur", w));
        }
      ),
      [t.pauseOnFocusLoss],
    );
  const v = { onMouseDown: f, onTouchStart: f, onMouseUp: g, onTouchEnd: g };
  return (
    l && u && ((v.onMouseEnter = w), (v.onMouseLeave = m)),
    p &&
      (v.onClick = (b) => {
        d && d(b), o.canCloseOnClick && c();
      }),
    {
      playToast: m,
      pauseToast: w,
      isRunning: e,
      preventExitTransition: i,
      toastRef: s,
      eventHandlers: v,
    }
  );
}
function D0(t) {
  let { closeToast: e, theme: n, ariaLabel: i = "close" } = t;
  return Y.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (r) => {
        r.stopPropagation(), e(r);
      },
      "aria-label": i,
    },
    Y.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Y.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      }),
    ),
  );
}
function lx(t) {
  let {
    delay: e,
    isRunning: n,
    closeToast: i,
    type: r = "default",
    hide: s,
    className: o,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: d,
    theme: p,
  } = t;
  const f = s || (l && u === 0),
    g = {
      ...a,
      animationDuration: `${e}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: f ? 0 : 1,
    };
  l && (g.transform = `scaleX(${u})`);
  const m = wn(
      "Toastify__progress-bar",
      l
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${r}`,
      { "Toastify__progress-bar--rtl": c },
    ),
    w = dt(o) ? o({ rtl: c, type: r, defaultClassName: m }) : wn(m, o);
  return Y.createElement("div", {
    role: "progressbar",
    "aria-hidden": f ? "true" : "false",
    "aria-label": "notification timer",
    className: w,
    style: g,
    [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      l && u < 1
        ? null
        : () => {
            d && i();
          },
  });
}
const ux = (t) => {
    const {
        isRunning: e,
        preventExitTransition: n,
        toastRef: i,
        eventHandlers: r,
      } = ax(t),
      {
        closeButton: s,
        children: o,
        autoClose: a,
        onClick: l,
        type: u,
        hideProgressBar: c,
        closeToast: d,
        transition: p,
        position: f,
        className: g,
        style: m,
        bodyClassName: w,
        bodyStyle: y,
        progressClassName: h,
        progressStyle: v,
        updateId: b,
        role: x,
        progress: k,
        rtl: S,
        toastId: C,
        deleteToast: T,
        isIn: z,
        isLoading: _,
        iconOut: E,
        closeOnClick: M,
        theme: L,
      } = t,
      j = wn(
        "Toastify__toast",
        `Toastify__toast-theme--${L}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": S },
        { "Toastify__toast--close-on-click": M },
      ),
      N = dt(g)
        ? g({ rtl: S, position: f, type: u, defaultClassName: j })
        : wn(j, g),
      W = !!k || !a,
      $ = { closeToast: d, type: u, theme: L };
    let I = null;
    return (
      s === !1 ||
        (I = dt(s) ? s($) : A.isValidElement(s) ? A.cloneElement(s, $) : D0($)),
      Y.createElement(
        p,
        { isIn: z, done: T, position: f, preventExitTransition: n, nodeRef: i },
        Y.createElement(
          "div",
          { id: C, onClick: l, className: N, ...r, style: m, ref: i },
          Y.createElement(
            "div",
            {
              ...(z && { role: x }),
              className: dt(w) ? w({ type: u }) : wn("Toastify__toast-body", w),
              style: y,
            },
            E != null &&
              Y.createElement(
                "div",
                {
                  className: wn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !_,
                  }),
                },
                E,
              ),
            Y.createElement("div", null, o),
          ),
          I,
          Y.createElement(lx, {
            ...(b && !W ? { key: `pb-${b}` } : {}),
            rtl: S,
            theme: L,
            delay: a,
            isRunning: e,
            isIn: z,
            closeToast: d,
            hide: c,
            type: u,
            style: v,
            className: h,
            controlledProgress: W,
            progress: k || 0,
          }),
        ),
      )
    );
  },
  Xa = function (t, e) {
    return (
      e === void 0 && (e = !1),
      {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e,
      }
    );
  },
  cx = Qa(Xa("bounce", !0));
Qa(Xa("slide", !0));
Qa(Xa("zoom"));
Qa(Xa("flip"));
const Ec = A.forwardRef((t, e) => {
  const { getToastToRender: n, containerRef: i, isToastActive: r } = ox(t),
    { className: s, style: o, rtl: a, containerId: l } = t;
  function u(c) {
    const d = wn(
      "Toastify__toast-container",
      `Toastify__toast-container--${c}`,
      { "Toastify__toast-container--rtl": a },
    );
    return dt(s)
      ? s({ position: c, rtl: a, defaultClassName: d })
      : wn(d, Do(s));
  }
  return (
    A.useEffect(() => {
      e && (e.current = i.current);
    }, []),
    Y.createElement(
      "div",
      { ref: i, className: "Toastify", id: l },
      n((c, d) => {
        const p = d.length ? { ...o } : { ...o, pointerEvents: "none" };
        return Y.createElement(
          "div",
          { className: u(c), style: p, key: `container-${c}` },
          d.map((f, g) => {
            let { content: m, props: w } = f;
            return Y.createElement(
              ux,
              {
                ...w,
                isIn: r(w.toastId),
                style: { ...w.style, "--nth": g + 1, "--len": d.length },
                key: `toast-${w.key}`,
              },
              m,
            );
          }),
        );
      }),
    )
  );
});
(Ec.displayName = "ToastContainer"),
  (Ec.defaultProps = {
    position: "top-right",
    transition: cx,
    autoClose: 5e3,
    closeButton: D0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let Ql,
  oi = new Map(),
  Vr = [],
  dx = 1;
function j0() {
  return "" + dx++;
}
function fx(t) {
  return t && (xi(t.toastId) || ns(t.toastId)) ? t.toastId : j0();
}
function is(t, e) {
  return (
    oi.size > 0 ? Ot.emit(0, t, e) : Vr.push({ content: t, options: e }),
    e.toastId
  );
}
function wa(t, e) {
  return { ...e, type: (e && e.type) || t, toastId: fx(e) };
}
function mo(t) {
  return (e, n) => is(e, wa(t, n));
}
function ue(t, e) {
  return is(t, wa("default", e));
}
(ue.loading = (t, e) =>
  is(
    t,
    wa("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...e,
    }),
  )),
  (ue.promise = function (t, e, n) {
    let i,
      { pending: r, error: s, success: o } = e;
    r && (i = xi(r) ? ue.loading(r, n) : ue.loading(r.render, { ...n, ...r }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (c, d, p) => {
        if (d == null) return void ue.dismiss(i);
        const f = { type: c, ...a, ...n, data: p },
          g = xi(d) ? { render: d } : d;
        return (
          i ? ue.update(i, { ...f, ...g }) : ue(g.render, { ...f, ...g }), p
        );
      },
      u = dt(t) ? t() : t;
    return u.then((c) => l("success", o, c)).catch((c) => l("error", s, c)), u;
  }),
  (ue.success = mo("success")),
  (ue.info = mo("info")),
  (ue.error = mo("error")),
  (ue.warning = mo("warning")),
  (ue.warn = ue.warning),
  (ue.dark = (t, e) => is(t, wa("default", { theme: "dark", ...e }))),
  (ue.dismiss = (t) => {
    oi.size > 0
      ? Ot.emit(1, t)
      : (Vr = Vr.filter((e) => t != null && e.options.toastId !== t));
  }),
  (ue.clearWaitingQueue = function (t) {
    return t === void 0 && (t = {}), Ot.emit(5, t);
  }),
  (ue.isActive = (t) => {
    let e = !1;
    return (
      oi.forEach((n) => {
        n.isToastActive && n.isToastActive(t) && (e = !0);
      }),
      e
    );
  }),
  (ue.update = function (t, e) {
    e === void 0 && (e = {}),
      setTimeout(() => {
        const n = (function (i, r) {
          let { containerId: s } = r;
          const o = oi.get(s || Ql);
          return o && o.getToast(i);
        })(t, e);
        if (n) {
          const { props: i, content: r } = n,
            s = {
              delay: 100,
              ...i,
              ...e,
              toastId: e.toastId || t,
              updateId: j0(),
            };
          s.toastId !== t && (s.staleId = t);
          const o = s.render || r;
          delete s.render, is(o, s);
        }
      }, 0);
  }),
  (ue.done = (t) => {
    ue.update(t, { progress: 1 });
  }),
  (ue.onChange = (t) => (
    Ot.on(4, t),
    () => {
      Ot.off(4, t);
    }
  )),
  (ue.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (ue.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  Ot.on(2, (t) => {
    (Ql = t.containerId || t),
      oi.set(Ql, t),
      Vr.forEach((e) => {
        Ot.emit(0, e.content, e.options);
      }),
      (Vr = []);
  }).on(3, (t) => {
    oi.delete(t.containerId || t), oi.size === 0 && Ot.off(0).off(1).off(5);
  });
var N0 = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i();
  })(Vo, function () {
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
        function s(L) {
          return L && L.__esModule ? L : { default: L };
        }
        var o =
            Object.assign ||
            function (L) {
              for (var j = 1; j < arguments.length; j++) {
                var N = arguments[j];
                for (var W in N)
                  Object.prototype.hasOwnProperty.call(N, W) && (L[W] = N[W]);
              }
              return L;
            },
          a = r(1),
          l = (s(a), r(6)),
          u = s(l),
          c = r(7),
          d = s(c),
          p = r(8),
          f = s(p),
          g = r(9),
          m = s(g),
          w = r(10),
          y = s(w),
          h = r(11),
          v = s(h),
          b = r(14),
          x = s(b),
          k = [],
          S = !1,
          C = {
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
          T = function () {
            var L =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((L && (S = !0), S))
              return (k = (0, v.default)(k, C)), (0, y.default)(k, C.once), k;
          },
          z = function () {
            (k = (0, x.default)()), T();
          },
          _ = function () {
            k.forEach(function (L, j) {
              L.node.removeAttribute("data-aos"),
                L.node.removeAttribute("data-aos-easing"),
                L.node.removeAttribute("data-aos-duration"),
                L.node.removeAttribute("data-aos-delay");
            });
          },
          E = function (L) {
            return (
              L === !0 ||
              (L === "mobile" && m.default.mobile()) ||
              (L === "phone" && m.default.phone()) ||
              (L === "tablet" && m.default.tablet()) ||
              (typeof L == "function" && L() === !0)
            );
          },
          M = function (L) {
            (C = o(C, L)), (k = (0, x.default)());
            var j = document.all && !window.atob;
            return E(C.disable) || j
              ? _()
              : (C.disableMutationObserver ||
                  f.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (C.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", C.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", C.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", C.delay),
                C.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? T(!0)
                  : C.startEvent === "load"
                  ? window.addEventListener(C.startEvent, function () {
                      T(!0);
                    })
                  : document.addEventListener(C.startEvent, function () {
                      T(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, d.default)(T, C.debounceDelay, !0),
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, d.default)(T, C.debounceDelay, !0),
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, y.default)(k, C.once);
                  }, C.throttleDelay),
                ),
                C.disableMutationObserver || f.default.ready("[data-aos]", z),
                k);
          };
        n.exports = { init: M, refresh: T, refreshHard: z };
      },
      function (n, i) {},
      ,
      ,
      ,
      ,
      function (n, i) {
        (function (r) {
          function s(E, M, L) {
            function j(ie) {
              var Ue = O,
                at = Ce;
              return (O = Ce = void 0), (X = ie), (K = E.apply(at, Ue));
            }
            function N(ie) {
              return (X = ie), (J = setTimeout(I, M)), Me ? j(ie) : K;
            }
            function W(ie) {
              var Ue = ie - ne,
                at = ie - X,
                Gs = M - Ue;
              return Ye ? z(Gs, F - at) : Gs;
            }
            function $(ie) {
              var Ue = ie - ne,
                at = ie - X;
              return ne === void 0 || Ue >= M || Ue < 0 || (Ye && at >= F);
            }
            function I() {
              var ie = _();
              return $(ie) ? R(ie) : void (J = setTimeout(I, W(ie)));
            }
            function R(ie) {
              return (J = void 0), de && O ? j(ie) : ((O = Ce = void 0), K);
            }
            function H() {
              J !== void 0 && clearTimeout(J),
                (X = 0),
                (O = ne = Ce = J = void 0);
            }
            function U() {
              return J === void 0 ? K : R(_());
            }
            function re() {
              var ie = _(),
                Ue = $(ie);
              if (((O = arguments), (Ce = this), (ne = ie), Ue)) {
                if (J === void 0) return N(ne);
                if (Ye) return (J = setTimeout(I, M)), j(ne);
              }
              return J === void 0 && (J = setTimeout(I, M)), K;
            }
            var O,
              Ce,
              F,
              K,
              J,
              ne,
              X = 0,
              Me = !1,
              Ye = !1,
              de = !0;
            if (typeof E != "function") throw new TypeError(p);
            return (
              (M = c(M) || 0),
              a(L) &&
                ((Me = !!L.leading),
                (Ye = "maxWait" in L),
                (F = Ye ? T(c(L.maxWait) || 0, M) : F),
                (de = "trailing" in L ? !!L.trailing : de)),
              (re.cancel = H),
              (re.flush = U),
              re
            );
          }
          function o(E, M, L) {
            var j = !0,
              N = !0;
            if (typeof E != "function") throw new TypeError(p);
            return (
              a(L) &&
                ((j = "leading" in L ? !!L.leading : j),
                (N = "trailing" in L ? !!L.trailing : N)),
              s(E, M, { leading: j, maxWait: M, trailing: N })
            );
          }
          function a(E) {
            var M = typeof E > "u" ? "undefined" : d(E);
            return !!E && (M == "object" || M == "function");
          }
          function l(E) {
            return !!E && (typeof E > "u" ? "undefined" : d(E)) == "object";
          }
          function u(E) {
            return (
              (typeof E > "u" ? "undefined" : d(E)) == "symbol" ||
              (l(E) && C.call(E) == g)
            );
          }
          function c(E) {
            if (typeof E == "number") return E;
            if (u(E)) return f;
            if (a(E)) {
              var M = typeof E.valueOf == "function" ? E.valueOf() : E;
              E = a(M) ? M + "" : M;
            }
            if (typeof E != "string") return E === 0 ? E : +E;
            E = E.replace(m, "");
            var L = y.test(E);
            return L || h.test(E)
              ? v(E.slice(2), L ? 2 : 8)
              : w.test(E)
              ? f
              : +E;
          }
          var d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (E) {
                    return typeof E;
                  }
                : function (E) {
                    return E &&
                      typeof Symbol == "function" &&
                      E.constructor === Symbol &&
                      E !== Symbol.prototype
                      ? "symbol"
                      : typeof E;
                  },
            p = "Expected a function",
            f = NaN,
            g = "[object Symbol]",
            m = /^\s+|\s+$/g,
            w = /^[-+]0x[0-9a-f]+$/i,
            y = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            v = parseInt,
            b =
              (typeof r > "u" ? "undefined" : d(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            x =
              (typeof self > "u" ? "undefined" : d(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            k = b || x || Function("return this")(),
            S = Object.prototype,
            C = S.toString,
            T = Math.max,
            z = Math.min,
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
          function s(_, E, M) {
            function L(de) {
              var ie = re,
                Ue = O;
              return (re = O = void 0), (ne = de), (F = _.apply(Ue, ie));
            }
            function j(de) {
              return (ne = de), (K = setTimeout($, E)), X ? L(de) : F;
            }
            function N(de) {
              var ie = de - J,
                Ue = de - ne,
                at = E - ie;
              return Me ? T(at, Ce - Ue) : at;
            }
            function W(de) {
              var ie = de - J,
                Ue = de - ne;
              return J === void 0 || ie >= E || ie < 0 || (Me && Ue >= Ce);
            }
            function $() {
              var de = z();
              return W(de) ? I(de) : void (K = setTimeout($, N(de)));
            }
            function I(de) {
              return (K = void 0), Ye && re ? L(de) : ((re = O = void 0), F);
            }
            function R() {
              K !== void 0 && clearTimeout(K),
                (ne = 0),
                (re = J = O = K = void 0);
            }
            function H() {
              return K === void 0 ? F : I(z());
            }
            function U() {
              var de = z(),
                ie = W(de);
              if (((re = arguments), (O = this), (J = de), ie)) {
                if (K === void 0) return j(J);
                if (Me) return (K = setTimeout($, E)), L(J);
              }
              return K === void 0 && (K = setTimeout($, E)), F;
            }
            var re,
              O,
              Ce,
              F,
              K,
              J,
              ne = 0,
              X = !1,
              Me = !1,
              Ye = !0;
            if (typeof _ != "function") throw new TypeError(d);
            return (
              (E = u(E) || 0),
              o(M) &&
                ((X = !!M.leading),
                (Me = "maxWait" in M),
                (Ce = Me ? C(u(M.maxWait) || 0, E) : Ce),
                (Ye = "trailing" in M ? !!M.trailing : Ye)),
              (U.cancel = R),
              (U.flush = H),
              U
            );
          }
          function o(_) {
            var E = typeof _ > "u" ? "undefined" : c(_);
            return !!_ && (E == "object" || E == "function");
          }
          function a(_) {
            return !!_ && (typeof _ > "u" ? "undefined" : c(_)) == "object";
          }
          function l(_) {
            return (
              (typeof _ > "u" ? "undefined" : c(_)) == "symbol" ||
              (a(_) && S.call(_) == f)
            );
          }
          function u(_) {
            if (typeof _ == "number") return _;
            if (l(_)) return p;
            if (o(_)) {
              var E = typeof _.valueOf == "function" ? _.valueOf() : _;
              _ = o(E) ? E + "" : E;
            }
            if (typeof _ != "string") return _ === 0 ? _ : +_;
            _ = _.replace(g, "");
            var M = w.test(_);
            return M || y.test(_)
              ? h(_.slice(2), M ? 2 : 8)
              : m.test(_)
              ? p
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
            p = NaN,
            f = "[object Symbol]",
            g = /^\s+|\s+$/g,
            m = /^[-+]0x[0-9a-f]+$/i,
            w = /^0b[01]+$/i,
            y = /^0o[0-7]+$/i,
            h = parseInt,
            v =
              (typeof r > "u" ? "undefined" : c(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            b =
              (typeof self > "u" ? "undefined" : c(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            x = v || b || Function("return this")(),
            k = Object.prototype,
            S = k.toString,
            C = Math.max,
            T = Math.min,
            z = function () {
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
            p = void 0;
          for (d = 0; d < c.length; d += 1)
            if (
              ((p = c[d]),
              (p.dataset && p.dataset.aos) || (p.children && r(p.children)))
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
          var p = window.document,
            f = s(),
            g = new f(l);
          (u = d),
            g.observe(p.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function l(c) {
          c &&
            c.forEach(function (d) {
              var p = Array.prototype.slice.call(d.addedNodes),
                f = Array.prototype.slice.call(d.removedNodes),
                g = p.concat(f);
              if (r(g)) return u();
            });
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var u = function () {};
        i.default = { isSupported: o, ready: a };
      },
      function (n, i) {
        function r(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        }
        function s() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var o = (function () {
            function p(f, g) {
              for (var m = 0; m < g.length; m++) {
                var w = g[m];
                (w.enumerable = w.enumerable || !1),
                  (w.configurable = !0),
                  "value" in w && (w.writable = !0),
                  Object.defineProperty(f, w.key, w);
              }
            }
            return function (f, g, m) {
              return g && p(f.prototype, g), m && p(f, m), f;
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
            function p() {
              r(this, p);
            }
            return (
              o(p, [
                {
                  key: "phone",
                  value: function () {
                    var f = s();
                    return !(!a.test(f) && !l.test(f.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var f = s();
                    return !(!u.test(f) && !c.test(f.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              p
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
              u.forEach(function (d, p) {
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
              p = 0,
              f = window.innerHeight,
              g = {
                offset: u.getAttribute("data-aos-offset"),
                anchor: u.getAttribute("data-aos-anchor"),
                anchorPlacement: u.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (g.offset && !isNaN(g.offset) && (p = parseInt(g.offset)),
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
                d += f / 2;
                break;
              case "bottom-center":
                d += f / 2 + u.offsetHeight;
                break;
              case "center-center":
                d += f / 2 + u.offsetHeight / 2;
                break;
              case "top-top":
                d += f;
                break;
              case "bottom-top":
                d += u.offsetHeight + f;
                break;
              case "center-top":
                d += u.offsetHeight / 2 + f;
            }
            return g.anchorPlacement || g.offset || isNaN(c) || (p = c), d + p;
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
})(N0);
var px = N0.exports;
const rs = Rs(px);
var $d = {},
  F0 = { exports: {} };
(function (t) {
  function e(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
})(F0);
var Ja = F0.exports,
  Xl = {};
function ee() {
  return (
    (ee = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    ee.apply(this, arguments)
  );
}
function Li(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function B0(t) {
  if (!Li(t)) return t;
  const e = {};
  return (
    Object.keys(t).forEach((n) => {
      e[n] = B0(t[n]);
    }),
    e
  );
}
function xn(t, e, n = { clone: !0 }) {
  const i = n.clone ? ee({}, t) : t;
  return (
    Li(t) &&
      Li(e) &&
      Object.keys(e).forEach((r) => {
        r !== "__proto__" &&
          (Li(e[r]) && r in t && Li(t[r])
            ? (i[r] = xn(t[r], e[r], n))
            : n.clone
            ? (i[r] = Li(e[r]) ? B0(e[r]) : e[r])
            : (i[r] = e[r]));
      }),
    i
  );
}
var W0 = { exports: {} },
  hx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  mx = hx,
  gx = mx;
function H0() {}
function U0() {}
U0.resetWarningCache = H0;
var yx = function () {
  function t(i, r, s, o, a, l) {
    if (l !== gx) {
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
    checkPropTypes: U0,
    resetWarningCache: H0,
  };
  return (n.PropTypes = n), n;
};
W0.exports = yx();
var vx = W0.exports;
const Ne = Rs(vx);
function mr(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let n = 1; n < arguments.length; n += 1)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
function ln(t) {
  if (typeof t != "string") throw new Error(mr(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function wx(...t) {
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
function bx(t, e = 166) {
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
function xx(t, e) {
  return () => null;
}
function Sx(t, e) {
  return A.isValidElement(t) && e.indexOf(t.type.muiName) !== -1;
}
function V0(t) {
  return (t && t.ownerDocument) || document;
}
function kx(t) {
  return V0(t).defaultView || window;
}
function _x(t, e) {
  return () => null;
}
function G0(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
const Ex = typeof window < "u" ? A.useLayoutEffect : A.useEffect,
  q0 = Ex;
let Kp = 0;
function Cx(t) {
  const [e, n] = A.useState(t),
    i = t || e;
  return (
    A.useEffect(() => {
      e == null && ((Kp += 1), n(`mui-${Kp}`));
    }, [e]),
    i
  );
}
const Yp = _u["useId".toString()];
function Tx(t) {
  if (Yp !== void 0) {
    const e = Yp();
    return t ?? e;
  }
  return Cx(t);
}
function Px(t, e, n, i, r) {
  return null;
}
function zx({ controlled: t, default: e, name: n, state: i = "value" }) {
  const { current: r } = A.useRef(t !== void 0),
    [s, o] = A.useState(e),
    a = r ? t : s,
    l = A.useCallback((u) => {
      r || o(u);
    }, []);
  return [a, l];
}
function Ox(t) {
  const e = A.useRef(t);
  return (
    q0(() => {
      e.current = t;
    }),
    A.useCallback((...n) => (0, e.current)(...n), [])
  );
}
function Mx(...t) {
  return A.useMemo(
    () =>
      t.every((e) => e == null)
        ? null
        : (e) => {
            t.forEach((n) => {
              G0(n, e);
            });
          },
    t,
  );
}
let Za = !0,
  Cc = !1,
  Qp;
const Ix = {
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
function Rx(t) {
  const { type: e, tagName: n } = t;
  return !!(
    (n === "INPUT" && Ix[e] && !t.readOnly) ||
    (n === "TEXTAREA" && !t.readOnly) ||
    t.isContentEditable
  );
}
function Lx(t) {
  t.metaKey || t.altKey || t.ctrlKey || (Za = !0);
}
function Jl() {
  Za = !1;
}
function Ax() {
  this.visibilityState === "hidden" && Cc && (Za = !0);
}
function $x(t) {
  t.addEventListener("keydown", Lx, !0),
    t.addEventListener("mousedown", Jl, !0),
    t.addEventListener("pointerdown", Jl, !0),
    t.addEventListener("touchstart", Jl, !0),
    t.addEventListener("visibilitychange", Ax, !0);
}
function Dx(t) {
  const { target: e } = t;
  try {
    return e.matches(":focus-visible");
  } catch {}
  return Za || Rx(e);
}
function jx() {
  const t = A.useCallback((r) => {
      r != null && $x(r.ownerDocument);
    }, []),
    e = A.useRef(!1);
  function n() {
    return e.current
      ? ((Cc = !0),
        window.clearTimeout(Qp),
        (Qp = window.setTimeout(() => {
          Cc = !1;
        }, 100)),
        (e.current = !1),
        !0)
      : !1;
  }
  function i(r) {
    return Dx(r) ? ((e.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: e, onFocus: i, onBlur: n, ref: t };
}
function K0(t, e) {
  const n = ee({}, e);
  return (
    Object.keys(t).forEach((i) => {
      if (i.toString().match(/^(components|slots)$/)) n[i] = ee({}, t[i], n[i]);
      else if (i.toString().match(/^(componentsProps|slotProps)$/)) {
        const r = t[i] || {},
          s = e[i];
        (n[i] = {}),
          !s || !Object.keys(s)
            ? (n[i] = r)
            : !r || !Object.keys(r)
            ? (n[i] = s)
            : ((n[i] = ee({}, s)),
              Object.keys(r).forEach((o) => {
                n[i][o] = K0(r[o], s[o]);
              }));
      } else n[i] === void 0 && (n[i] = t[i]);
    }),
    n
  );
}
function Nx(t, e, n = void 0) {
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
const Xp = (t) => t,
  Fx = () => {
    let t = Xp;
    return {
      configure(e) {
        t = e;
      },
      generate(e) {
        return t(e);
      },
      reset() {
        t = Xp;
      },
    };
  },
  Bx = Fx(),
  Y0 = Bx,
  Wx = {
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
function Q0(t, e, n = "Mui") {
  const i = Wx[e];
  return i ? `${n}-${i}` : `${Y0.generate(t)}-${e}`;
}
function Hx(t, e, n = "Mui") {
  const i = {};
  return (
    e.forEach((r) => {
      i[r] = Q0(t, r, n);
    }),
    i
  );
}
function zn(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function Ux(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
}
function Vx(t) {
  var e = document.createElement("style");
  return (
    e.setAttribute("data-emotion", t.key),
    t.nonce !== void 0 && e.setAttribute("nonce", t.nonce),
    e.appendChild(document.createTextNode("")),
    e.setAttribute("data-s", ""),
    e
  );
}
var Gx = (function () {
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
          this._insertTag(Vx(this));
        var r = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var s = Ux(r);
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
  Je = "-ms-",
  ba = "-moz-",
  oe = "-webkit-",
  X0 = "comm",
  Dd = "rule",
  jd = "decl",
  qx = "@import",
  J0 = "@keyframes",
  Kx = "@layer",
  Yx = Math.abs,
  el = String.fromCharCode,
  Qx = Object.assign;
function Xx(t, e) {
  return Ge(t, 0) ^ 45
    ? (((((((e << 2) ^ Ge(t, 0)) << 2) ^ Ge(t, 1)) << 2) ^ Ge(t, 2)) << 2) ^
        Ge(t, 3)
    : 0;
}
function Z0(t) {
  return t.trim();
}
function Jx(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function ae(t, e, n) {
  return t.replace(e, n);
}
function Tc(t, e) {
  return t.indexOf(e);
}
function Ge(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ts(t, e, n) {
  return t.slice(e, n);
}
function en(t) {
  return t.length;
}
function Nd(t) {
  return t.length;
}
function go(t, e) {
  return e.push(t), t;
}
function Zx(t, e) {
  return t.map(e).join("");
}
var tl = 1,
  gr = 1,
  ey = 0,
  gt = 0,
  Ae = 0,
  Tr = "";
function nl(t, e, n, i, r, s, o) {
  return {
    value: t,
    root: e,
    parent: n,
    type: i,
    props: r,
    children: s,
    line: tl,
    column: gr,
    length: o,
    return: "",
  };
}
function $r(t, e) {
  return Qx(nl("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function eS() {
  return Ae;
}
function tS() {
  return (
    (Ae = gt > 0 ? Ge(Tr, --gt) : 0), gr--, Ae === 10 && ((gr = 1), tl--), Ae
  );
}
function kt() {
  return (
    (Ae = gt < ey ? Ge(Tr, gt++) : 0), gr++, Ae === 10 && ((gr = 1), tl++), Ae
  );
}
function un() {
  return Ge(Tr, gt);
}
function jo() {
  return gt;
}
function Fs(t, e) {
  return Ts(Tr, t, e);
}
function Ps(t) {
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
function ty(t) {
  return (tl = gr = 1), (ey = en((Tr = t))), (gt = 0), [];
}
function ny(t) {
  return (Tr = ""), t;
}
function No(t) {
  return Z0(Fs(gt - 1, Pc(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function nS(t) {
  for (; (Ae = un()) && Ae < 33; ) kt();
  return Ps(t) > 2 || Ps(Ae) > 3 ? "" : " ";
}
function iS(t, e) {
  for (
    ;
    --e &&
    kt() &&
    !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97));

  );
  return Fs(t, jo() + (e < 6 && un() == 32 && kt() == 32));
}
function Pc(t) {
  for (; kt(); )
    switch (Ae) {
      case t:
        return gt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Pc(Ae);
        break;
      case 40:
        t === 41 && Pc(t);
        break;
      case 92:
        kt();
        break;
    }
  return gt;
}
function rS(t, e) {
  for (; kt() && t + Ae !== 47 + 10; )
    if (t + Ae === 42 + 42 && un() === 47) break;
  return "/*" + Fs(e, gt - 1) + "*" + el(t === 47 ? t : kt());
}
function sS(t) {
  for (; !Ps(un()); ) kt();
  return Fs(t, gt);
}
function oS(t) {
  return ny(Fo("", null, null, null, [""], (t = ty(t)), 0, [0], t));
}
function Fo(t, e, n, i, r, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      d = o,
      p = 0,
      f = 0,
      g = 0,
      m = 1,
      w = 1,
      y = 1,
      h = 0,
      v = "",
      b = r,
      x = s,
      k = i,
      S = v;
    w;

  )
    switch (((g = h), (h = kt()))) {
      case 40:
        if (g != 108 && Ge(S, d - 1) == 58) {
          Tc((S += ae(No(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += No(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += nS(g);
        break;
      case 92:
        S += iS(jo() - 1, 7);
        continue;
      case 47:
        switch (un()) {
          case 42:
          case 47:
            go(aS(rS(kt(), jo()), e, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        a[u++] = en(S) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            y == -1 && (S = ae(S, /\f/g, "")),
              f > 0 &&
                en(S) - d &&
                go(
                  f > 32
                    ? Zp(S + ";", i, n, d - 1)
                    : Zp(ae(S, " ", "") + ";", i, n, d - 2),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (go((k = Jp(S, e, n, u, c, r, a, v, (b = []), (x = []), d)), s),
              h === 123)
            )
              if (c === 0) Fo(S, e, k, k, b, s, d, a, x);
              else
                switch (p === 99 && Ge(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fo(
                      t,
                      k,
                      k,
                      i && go(Jp(t, k, k, 0, 0, r, a, v, r, (b = []), d), x),
                      r,
                      x,
                      d,
                      a,
                      i ? b : x,
                    );
                    break;
                  default:
                    Fo(S, k, k, k, [""], x, 0, a, x);
                }
        }
        (u = c = f = 0), (m = y = 1), (v = S = ""), (d = o);
        break;
      case 58:
        (d = 1 + en(S)), (f = g);
      default:
        if (m < 1) {
          if (h == 123) --m;
          else if (h == 125 && m++ == 0 && tS() == 125) continue;
        }
        switch (((S += el(h)), h * m)) {
          case 38:
            y = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (a[u++] = (en(S) - 1) * y), (y = 1);
            break;
          case 64:
            un() === 45 && (S += No(kt())),
              (p = un()),
              (c = d = en((v = S += sS(jo())))),
              h++;
            break;
          case 45:
            g === 45 && en(S) == 2 && (m = 0);
        }
    }
  return s;
}
function Jp(t, e, n, i, r, s, o, a, l, u, c) {
  for (
    var d = r - 1, p = r === 0 ? s : [""], f = Nd(p), g = 0, m = 0, w = 0;
    g < i;
    ++g
  )
    for (var y = 0, h = Ts(t, d + 1, (d = Yx((m = o[g])))), v = t; y < f; ++y)
      (v = Z0(m > 0 ? p[y] + " " + h : ae(h, /&\f/g, p[y]))) && (l[w++] = v);
  return nl(t, e, n, r === 0 ? Dd : a, l, u, c);
}
function aS(t, e, n) {
  return nl(t, e, n, X0, el(eS()), Ts(t, 2, -2), 0);
}
function Zp(t, e, n, i) {
  return nl(t, e, n, jd, Ts(t, 0, i), Ts(t, i + 1, -1), i);
}
function er(t, e) {
  for (var n = "", i = Nd(t), r = 0; r < i; r++) n += e(t[r], r, t, e) || "";
  return n;
}
function lS(t, e, n, i) {
  switch (t.type) {
    case Kx:
      if (t.children.length) break;
    case qx:
    case jd:
      return (t.return = t.return || t.value);
    case X0:
      return "";
    case J0:
      return (t.return = t.value + "{" + er(t.children, i) + "}");
    case Dd:
      t.value = t.props.join(",");
  }
  return en((n = er(t.children, i)))
    ? (t.return = t.value + "{" + n + "}")
    : "";
}
function uS(t) {
  var e = Nd(t);
  return function (n, i, r, s) {
    for (var o = "", a = 0; a < e; a++) o += t[a](n, i, r, s) || "";
    return o;
  };
}
function cS(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
var dS = function (e, n, i) {
    for (
      var r = 0, s = 0;
      (r = s), (s = un()), r === 38 && s === 12 && (n[i] = 1), !Ps(s);

    )
      kt();
    return Fs(e, gt);
  },
  fS = function (e, n) {
    var i = -1,
      r = 44;
    do
      switch (Ps(r)) {
        case 0:
          r === 38 && un() === 12 && (n[i] = 1), (e[i] += dS(gt - 1, n, i));
          break;
        case 2:
          e[i] += No(r);
          break;
        case 4:
          if (r === 44) {
            (e[++i] = un() === 58 ? "&\f" : ""), (n[i] = e[i].length);
            break;
          }
        default:
          e[i] += el(r);
      }
    while ((r = kt()));
    return e;
  },
  pS = function (e, n) {
    return ny(fS(ty(e), n));
  },
  eh = new WeakMap(),
  hS = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var n = e.value,
          i = e.parent,
          r = e.column === i.column && e.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(e.props.length === 1 && n.charCodeAt(0) !== 58 && !eh.get(i)) &&
        !r
      ) {
        eh.set(e, !0);
        for (
          var s = [], o = pS(n, s), a = i.props, l = 0, u = 0;
          l < o.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            e.props[u] = s[l] ? o[l].replace(/&\f/g, a[c]) : a[c] + " " + o[l];
      }
    }
  },
  mS = function (e) {
    if (e.type === "decl") {
      var n = e.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  };
function iy(t, e) {
  switch (Xx(t, e)) {
    case 5103:
      return oe + "print-" + t + t;
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
      return oe + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + t + ba + t + Je + t + t;
    case 6828:
    case 4268:
      return oe + t + Je + t + t;
    case 6165:
      return oe + t + Je + "flex-" + t + t;
    case 5187:
      return (
        oe + t + ae(t, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Je + "flex-$1$2") + t
      );
    case 5443:
      return oe + t + Je + "flex-item-" + ae(t, /flex-|-self/, "") + t;
    case 4675:
      return (
        oe +
        t +
        Je +
        "flex-line-pack" +
        ae(t, /align-content|flex-|-self/, "") +
        t
      );
    case 5548:
      return oe + t + Je + ae(t, "shrink", "negative") + t;
    case 5292:
      return oe + t + Je + ae(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        oe +
        "box-" +
        ae(t, "-grow", "") +
        oe +
        t +
        Je +
        ae(t, "grow", "positive") +
        t
      );
    case 4554:
      return oe + ae(t, /([^-])(transform)/g, "$1" + oe + "$2") + t;
    case 6187:
      return (
        ae(
          ae(ae(t, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"),
          t,
          "",
        ) + t
      );
    case 5495:
    case 3959:
      return ae(t, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return (
        ae(
          ae(t, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Je + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        oe +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(t, /(.+)-inline(.+)/, oe + "$1$2") + t;
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
      if (en(t) - 1 - e > 6)
        switch (Ge(t, e + 1)) {
          case 109:
            if (Ge(t, e + 4) !== 45) break;
          case 102:
            return (
              ae(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  oe +
                  "$2-$3$1" +
                  ba +
                  (Ge(t, e + 3) == 108 ? "$3" : "$2-$3"),
              ) + t
            );
          case 115:
            return ~Tc(t, "stretch")
              ? iy(ae(t, "stretch", "fill-available"), e) + t
              : t;
        }
      break;
    case 4949:
      if (Ge(t, e + 1) !== 115) break;
    case 6444:
      switch (Ge(t, en(t) - 3 - (~Tc(t, "!important") && 10))) {
        case 107:
          return ae(t, ":", ":" + oe) + t;
        case 101:
          return (
            ae(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                oe +
                (Ge(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                oe +
                "$2$3$1" +
                Je +
                "$2box$3",
            ) + t
          );
      }
      break;
    case 5936:
      switch (Ge(t, e + 11)) {
        case 114:
          return oe + t + Je + ae(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return oe + t + Je + ae(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return oe + t + Je + ae(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return oe + t + Je + t + t;
  }
  return t;
}
var gS = function (e, n, i, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case jd:
          e.return = iy(e.value, e.length);
          break;
        case J0:
          return er([$r(e, { value: ae(e.value, "@", "@" + oe) })], r);
        case Dd:
          if (e.length)
            return Zx(e.props, function (s) {
              switch (Jx(s, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return er(
                    [$r(e, { props: [ae(s, /:(read-\w+)/, ":" + ba + "$1")] })],
                    r,
                  );
                case "::placeholder":
                  return er(
                    [
                      $r(e, {
                        props: [ae(s, /:(plac\w+)/, ":" + oe + "input-$1")],
                      }),
                      $r(e, { props: [ae(s, /:(plac\w+)/, ":" + ba + "$1")] }),
                      $r(e, { props: [ae(s, /:(plac\w+)/, Je + "input-$1")] }),
                    ],
                    r,
                  );
              }
              return "";
            });
      }
  },
  yS = [gS],
  vS = function (e) {
    var n = e.key;
    if (n === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (m) {
        var w = m.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var r = e.stylisPlugins || yS,
      s = {},
      o,
      a = [];
    (o = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var w = m.getAttribute("data-emotion").split(" "), y = 1;
            y < w.length;
            y++
          )
            s[w[y]] = !0;
          a.push(m);
        },
      );
    var l,
      u = [hS, mS];
    {
      var c,
        d = [
          lS,
          cS(function (m) {
            c.insert(m);
          }),
        ],
        p = uS(u.concat(r, d)),
        f = function (w) {
          return er(oS(w), p);
        };
      l = function (w, y, h, v) {
        (c = h),
          f(w ? w + "{" + y.styles + "}" : y.styles),
          v && (g.inserted[y.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Gx({
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
  wS = !0;
function bS(t, e, n) {
  var i = "";
  return (
    n.split(" ").forEach(function (r) {
      t[r] !== void 0 ? e.push(t[r] + ";") : (i += r + " ");
    }),
    i
  );
}
var ry = function (e, n, i) {
    var r = e.key + "-" + n.name;
    (i === !1 || wS === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = n.styles);
  },
  xS = function (e, n, i) {
    ry(e, n, i);
    var r = e.key + "-" + n.name;
    if (e.inserted[n.name] === void 0) {
      var s = n;
      do e.insert(n === s ? "." + r : "", s, e.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
function SS(t) {
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
var kS = /[A-Z]|^ms/g,
  _S = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  sy = function (e) {
    return e.charCodeAt(1) === 45;
  },
  th = function (e) {
    return e != null && typeof e != "boolean";
  },
  Zl = h0(function (t) {
    return sy(t) ? t : t.replace(kS, "-$&").toLowerCase();
  }),
  nh = function (e, n) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(_S, function (i, r, s) {
            return (tn = { name: r, styles: s, next: tn }), r;
          });
    }
    return x0[e] !== 1 && !sy(e) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function zs(t, e, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (tn = { name: n.name, styles: n.styles, next: tn }), n.name;
      if (n.styles !== void 0) {
        var i = n.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (tn = { name: i.name, styles: i.styles, next: tn }), (i = i.next);
        var r = n.styles + ";";
        return r;
      }
      return ES(t, e, n);
    }
    case "function": {
      if (t !== void 0) {
        var s = tn,
          o = n(t);
        return (tn = s), zs(t, e, o);
      }
      break;
    }
  }
  if (e == null) return n;
  var a = e[n];
  return a !== void 0 ? a : n;
}
function ES(t, e, n) {
  var i = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++) i += zs(t, e, n[r]) + ";";
  else
    for (var s in n) {
      var o = n[s];
      if (typeof o != "object")
        e != null && e[o] !== void 0
          ? (i += s + "{" + e[o] + "}")
          : th(o) && (i += Zl(s) + ":" + nh(s, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (e == null || e[o[0]] === void 0)
      )
        for (var a = 0; a < o.length; a++)
          th(o[a]) && (i += Zl(s) + ":" + nh(s, o[a]) + ";");
      else {
        var l = zs(t, e, o);
        switch (s) {
          case "animation":
          case "animationName": {
            i += Zl(s) + ":" + l + ";";
            break;
          }
          default:
            i += s + "{" + l + "}";
        }
      }
    }
  return i;
}
var ih = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  tn,
  CS = function (e, n, i) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      s = "";
    tn = void 0;
    var o = e[0];
    o == null || o.raw === void 0
      ? ((r = !1), (s += zs(i, n, o)))
      : (s += o[0]);
    for (var a = 1; a < e.length; a++) (s += zs(i, n, e[a])), r && (s += o[a]);
    ih.lastIndex = 0;
    for (var l = "", u; (u = ih.exec(s)) !== null; ) l += "-" + u[1];
    var c = SS(s) + l;
    return { name: c, styles: s, next: tn };
  },
  TS = function (e) {
    return e();
  },
  PS = _u["useInsertionEffect"] ? _u["useInsertionEffect"] : !1,
  zS = PS || TS,
  oy = A.createContext(typeof HTMLElement < "u" ? vS({ key: "css" }) : null);
oy.Provider;
var OS = function (e) {
    return A.forwardRef(function (n, i) {
      var r = A.useContext(oy);
      return e(n, r, i);
    });
  },
  ay = A.createContext({}),
  MS = nb,
  IS = function (e) {
    return e !== "theme";
  },
  rh = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? MS : IS;
  },
  sh = function (e, n, i) {
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
  RS = function (e) {
    var n = e.cache,
      i = e.serialized,
      r = e.isStringTag;
    return (
      ry(n, i, r),
      zS(function () {
        return xS(n, i, r);
      }),
      null
    );
  },
  LS = function t(e, n) {
    var i = e.__emotion_real === e,
      r = (i && e.__emotion_base) || e,
      s,
      o;
    n !== void 0 && ((s = n.label), (o = n.target));
    var a = sh(e, n, i),
      l = a || rh(r),
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
        for (var p = c.length, f = 1; f < p; f++) d.push(c[f], c[0][f]);
      }
      var g = OS(function (m, w, y) {
        var h = (u && m.as) || r,
          v = "",
          b = [],
          x = m;
        if (m.theme == null) {
          x = {};
          for (var k in m) x[k] = m[k];
          x.theme = A.useContext(ay);
        }
        typeof m.className == "string"
          ? (v = bS(w.registered, b, m.className))
          : m.className != null && (v = m.className + " ");
        var S = CS(d.concat(b), w.registered, x);
        (v += w.key + "-" + S.name), o !== void 0 && (v += " " + o);
        var C = u && a === void 0 ? rh(h) : l,
          T = {};
        for (var z in m) (u && z === "as") || (C(z) && (T[z] = m[z]));
        return (
          (T.className = v),
          (T.ref = y),
          A.createElement(
            A.Fragment,
            null,
            A.createElement(RS, {
              cache: w,
              serialized: S,
              isStringTag: typeof h == "string",
            }),
            A.createElement(h, T),
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
        (g.withComponent = function (m, w) {
          return t(m, ee({}, n, w, { shouldForwardProp: sh(g, w, !0) })).apply(
            void 0,
            d,
          );
        }),
        g
      );
    };
  },
  AS = [
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
  zc = LS.bind();
AS.forEach(function (t) {
  zc[t] = zc(t);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $S(t, e) {
  return zc(t, e);
}
const DS = (t, e) => {
    Array.isArray(t.__emotion_styles) &&
      (t.__emotion_styles = e(t.__emotion_styles));
  },
  jS = ["values", "unit", "step"],
  NS = (t) => {
    const e = Object.keys(t).map((n) => ({ key: n, val: t[n] })) || [];
    return (
      e.sort((n, i) => n.val - i.val),
      e.reduce((n, i) => ee({}, n, { [i.key]: i.val }), {})
    );
  };
function FS(t) {
  const {
      values: e = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: i = 5,
    } = t,
    r = zn(t, jS),
    s = NS(e),
    o = Object.keys(s);
  function a(p) {
    return `@media (min-width:${typeof e[p] == "number" ? e[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${
      (typeof e[p] == "number" ? e[p] : p) - i / 100
    }${n})`;
  }
  function u(p, f) {
    const g = o.indexOf(f);
    return `@media (min-width:${
      typeof e[p] == "number" ? e[p] : p
    }${n}) and (max-width:${
      (g !== -1 && typeof e[o[g]] == "number" ? e[o[g]] : f) - i / 100
    }${n})`;
  }
  function c(p) {
    return o.indexOf(p) + 1 < o.length ? u(p, o[o.indexOf(p) + 1]) : a(p);
  }
  function d(p) {
    const f = o.indexOf(p);
    return f === 0
      ? a(o[1])
      : f === o.length - 1
      ? l(o[f])
      : u(p, o[o.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return ee(
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
const BS = { borderRadius: 4 },
  WS = BS;
function ss(t, e) {
  return e ? xn(t, e, { clone: !1 }) : t;
}
const Fd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  oh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (t) => `@media (min-width:${Fd[t]}px)`,
  };
function Cn(t, e, n) {
  const i = t.theme || {};
  if (Array.isArray(e)) {
    const s = i.breakpoints || oh;
    return e.reduce((o, a, l) => ((o[s.up(s.keys[l])] = n(e[l])), o), {});
  }
  if (typeof e == "object") {
    const s = i.breakpoints || oh;
    return Object.keys(e).reduce((o, a) => {
      if (Object.keys(s.values || Fd).indexOf(a) !== -1) {
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
function HS(t = {}) {
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
function US(t, e) {
  return t.reduce((n, i) => {
    const r = n[i];
    return (!r || Object.keys(r).length === 0) && delete n[i], n;
  }, e);
}
function il(t, e, n = !0) {
  if (!e || typeof e != "string") return null;
  if (t && t.vars && n) {
    const i = `vars.${e}`
      .split(".")
      .reduce((r, s) => (r && r[s] ? r[s] : null), t);
    if (i != null) return i;
  }
  return e.split(".").reduce((i, r) => (i && i[r] != null ? i[r] : null), t);
}
function xa(t, e, n, i = n) {
  let r;
  return (
    typeof t == "function"
      ? (r = t(n))
      : Array.isArray(t)
      ? (r = t[n] || i)
      : (r = il(t, n) || i),
    e && (r = e(r, i, t)),
    r
  );
}
function ce(t) {
  const { prop: e, cssProperty: n = t.prop, themeKey: i, transform: r } = t,
    s = (o) => {
      if (o[e] == null) return null;
      const a = o[e],
        l = o.theme,
        u = il(l, i) || {};
      return Cn(o, a, (d) => {
        let p = xa(u, r, d);
        return (
          d === p &&
            typeof d == "string" &&
            (p = xa(u, r, `${e}${d === "default" ? "" : ln(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (s.propTypes = {}), (s.filterProps = [e]), s;
}
function VS(t) {
  const e = {};
  return (n) => (e[n] === void 0 && (e[n] = t(n)), e[n]);
}
const GS = { m: "margin", p: "padding" },
  qS = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ah = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  KS = VS((t) => {
    if (t.length > 2)
      if (ah[t]) t = ah[t];
      else return [t];
    const [e, n] = t.split(""),
      i = GS[e],
      r = qS[n] || "";
    return Array.isArray(r) ? r.map((s) => i + s) : [i + r];
  }),
  Bd = [
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
  Wd = [
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
[...Bd, ...Wd];
function Bs(t, e, n, i) {
  var r;
  const s = (r = il(t, e, !1)) != null ? r : n;
  return typeof s == "number"
    ? (o) => (typeof o == "string" ? o : s * o)
    : Array.isArray(s)
    ? (o) => (typeof o == "string" ? o : s[o])
    : typeof s == "function"
    ? s
    : () => {};
}
function ly(t) {
  return Bs(t, "spacing", 8);
}
function Ws(t, e) {
  if (typeof e == "string" || e == null) return e;
  const n = Math.abs(e),
    i = t(n);
  return e >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function YS(t, e) {
  return (n) => t.reduce((i, r) => ((i[r] = Ws(e, n)), i), {});
}
function QS(t, e, n, i) {
  if (e.indexOf(n) === -1) return null;
  const r = KS(n),
    s = YS(r, i),
    o = t[n];
  return Cn(t, o, s);
}
function uy(t, e) {
  const n = ly(t.theme);
  return Object.keys(t)
    .map((i) => QS(t, e, i, n))
    .reduce(ss, {});
}
function Te(t) {
  return uy(t, Bd);
}
Te.propTypes = {};
Te.filterProps = Bd;
function Pe(t) {
  return uy(t, Wd);
}
Pe.propTypes = {};
Pe.filterProps = Wd;
function XS(t = 8) {
  if (t.mui) return t;
  const e = ly({ spacing: t }),
    n = (...i) =>
      (i.length === 0 ? [1] : i)
        .map((s) => {
          const o = e(s);
          return typeof o == "number" ? `${o}px` : o;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function rl(...t) {
  const e = t.reduce(
      (i, r) => (
        r.filterProps.forEach((s) => {
          i[s] = r;
        }),
        i
      ),
      {},
    ),
    n = (i) => Object.keys(i).reduce((r, s) => (e[s] ? ss(r, e[s](i)) : r), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = t.reduce((i, r) => i.concat(r.filterProps), [])),
    n
  );
}
function rn(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
const JS = ce({ prop: "border", themeKey: "borders", transform: rn }),
  ZS = ce({ prop: "borderTop", themeKey: "borders", transform: rn }),
  e2 = ce({ prop: "borderRight", themeKey: "borders", transform: rn }),
  t2 = ce({ prop: "borderBottom", themeKey: "borders", transform: rn }),
  n2 = ce({ prop: "borderLeft", themeKey: "borders", transform: rn }),
  i2 = ce({ prop: "borderColor", themeKey: "palette" }),
  r2 = ce({ prop: "borderTopColor", themeKey: "palette" }),
  s2 = ce({ prop: "borderRightColor", themeKey: "palette" }),
  o2 = ce({ prop: "borderBottomColor", themeKey: "palette" }),
  a2 = ce({ prop: "borderLeftColor", themeKey: "palette" }),
  sl = (t) => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const e = Bs(t.theme, "shape.borderRadius", 4),
        n = (i) => ({ borderRadius: Ws(e, i) });
      return Cn(t, t.borderRadius, n);
    }
    return null;
  };
sl.propTypes = {};
sl.filterProps = ["borderRadius"];
rl(JS, ZS, e2, t2, n2, i2, r2, s2, o2, a2, sl);
const ol = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = Bs(t.theme, "spacing", 8),
      n = (i) => ({ gap: Ws(e, i) });
    return Cn(t, t.gap, n);
  }
  return null;
};
ol.propTypes = {};
ol.filterProps = ["gap"];
const al = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = Bs(t.theme, "spacing", 8),
      n = (i) => ({ columnGap: Ws(e, i) });
    return Cn(t, t.columnGap, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ["columnGap"];
const ll = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = Bs(t.theme, "spacing", 8),
      n = (i) => ({ rowGap: Ws(e, i) });
    return Cn(t, t.rowGap, n);
  }
  return null;
};
ll.propTypes = {};
ll.filterProps = ["rowGap"];
const l2 = ce({ prop: "gridColumn" }),
  u2 = ce({ prop: "gridRow" }),
  c2 = ce({ prop: "gridAutoFlow" }),
  d2 = ce({ prop: "gridAutoColumns" }),
  f2 = ce({ prop: "gridAutoRows" }),
  p2 = ce({ prop: "gridTemplateColumns" }),
  h2 = ce({ prop: "gridTemplateRows" }),
  m2 = ce({ prop: "gridTemplateAreas" }),
  g2 = ce({ prop: "gridArea" });
rl(ol, al, ll, l2, u2, c2, d2, f2, p2, h2, m2, g2);
function tr(t, e) {
  return e === "grey" ? e : t;
}
const y2 = ce({ prop: "color", themeKey: "palette", transform: tr }),
  v2 = ce({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: tr,
  }),
  w2 = ce({ prop: "backgroundColor", themeKey: "palette", transform: tr });
rl(y2, v2, w2);
function bt(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const b2 = ce({ prop: "width", transform: bt }),
  Hd = (t) => {
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
            Fd[n] ||
            bt(n),
        };
      };
      return Cn(t, t.maxWidth, e);
    }
    return null;
  };
Hd.filterProps = ["maxWidth"];
const x2 = ce({ prop: "minWidth", transform: bt }),
  S2 = ce({ prop: "height", transform: bt }),
  k2 = ce({ prop: "maxHeight", transform: bt }),
  _2 = ce({ prop: "minHeight", transform: bt });
ce({ prop: "size", cssProperty: "width", transform: bt });
ce({ prop: "size", cssProperty: "height", transform: bt });
const E2 = ce({ prop: "boxSizing" });
rl(b2, Hd, x2, S2, k2, _2, E2);
const C2 = {
    border: { themeKey: "borders", transform: rn },
    borderTop: { themeKey: "borders", transform: rn },
    borderRight: { themeKey: "borders", transform: rn },
    borderBottom: { themeKey: "borders", transform: rn },
    borderLeft: { themeKey: "borders", transform: rn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: sl },
    color: { themeKey: "palette", transform: tr },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: tr,
    },
    backgroundColor: { themeKey: "palette", transform: tr },
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
    m: { style: Te },
    mt: { style: Te },
    mr: { style: Te },
    mb: { style: Te },
    ml: { style: Te },
    mx: { style: Te },
    my: { style: Te },
    margin: { style: Te },
    marginTop: { style: Te },
    marginRight: { style: Te },
    marginBottom: { style: Te },
    marginLeft: { style: Te },
    marginX: { style: Te },
    marginY: { style: Te },
    marginInline: { style: Te },
    marginInlineStart: { style: Te },
    marginInlineEnd: { style: Te },
    marginBlock: { style: Te },
    marginBlockStart: { style: Te },
    marginBlockEnd: { style: Te },
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
    gap: { style: ol },
    rowGap: { style: ll },
    columnGap: { style: al },
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
    width: { transform: bt },
    maxWidth: { style: Hd },
    minWidth: { transform: bt },
    height: { transform: bt },
    maxHeight: { transform: bt },
    minHeight: { transform: bt },
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
  Ud = C2;
function T2(...t) {
  const e = t.reduce((i, r) => i.concat(Object.keys(r)), []),
    n = new Set(e);
  return t.every((i) => n.size === Object.keys(i).length);
}
function P2(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function z2() {
  function t(n, i, r, s) {
    const o = { [n]: i, theme: r },
      a = s[n];
    if (!a) return { [n]: i };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (i == null) return null;
    if (u === "typography" && i === "inherit") return { [n]: i };
    const p = il(r, u) || {};
    return d
      ? d(o)
      : Cn(o, i, (g) => {
          let m = xa(p, c, g);
          return (
            g === m &&
              typeof g == "string" &&
              (m = xa(p, c, `${n}${g === "default" ? "" : ln(g)}`, g)),
            l === !1 ? m : { [l]: m }
          );
        });
  }
  function e(n) {
    var i;
    const { sx: r, theme: s = {} } = n || {};
    if (!r) return null;
    const o = (i = s.unstable_sxConfig) != null ? i : Ud;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(s);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = HS(s.breakpoints),
        d = Object.keys(c);
      let p = c;
      return (
        Object.keys(u).forEach((f) => {
          const g = P2(u[f], s);
          if (g != null)
            if (typeof g == "object")
              if (o[f]) p = ss(p, t(f, g, s, o));
              else {
                const m = Cn({ theme: s }, g, (w) => ({ [f]: w }));
                T2(m, g) ? (p[f] = e({ sx: g, theme: s })) : (p = ss(p, m));
              }
            else p = ss(p, t(f, g, s, o));
        }),
        US(d, p)
      );
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return e;
}
const cy = z2();
cy.filterProps = ["sx"];
const Vd = cy,
  O2 = ["breakpoints", "palette", "spacing", "shape"];
function Gd(t = {}, ...e) {
  const { breakpoints: n = {}, palette: i = {}, spacing: r, shape: s = {} } = t,
    o = zn(t, O2),
    a = FS(n),
    l = XS(r);
  let u = xn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: ee({ mode: "light" }, i),
      spacing: l,
      shape: ee({}, WS, s),
    },
    o,
  );
  return (
    (u = e.reduce((c, d) => xn(c, d), u)),
    (u.unstable_sxConfig = ee(
      {},
      Ud,
      o == null ? void 0 : o.unstable_sxConfig,
    )),
    (u.unstable_sx = function (d) {
      return Vd({ sx: d, theme: this });
    }),
    u
  );
}
function M2(t) {
  return Object.keys(t).length === 0;
}
function I2(t = null) {
  const e = A.useContext(ay);
  return !e || M2(e) ? t : e;
}
const R2 = Gd();
function L2(t = R2) {
  return I2(t);
}
const A2 = ["variant"];
function lh(t) {
  return t.length === 0;
}
function dy(t) {
  const { variant: e } = t,
    n = zn(t, A2);
  let i = e || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((r) => {
        r === "color"
          ? (i += lh(i) ? t[r] : ln(t[r]))
          : (i += `${lh(i) ? r : ln(r)}${ln(t[r].toString())}`);
      }),
    i
  );
}
const $2 = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function D2(t) {
  return Object.keys(t).length === 0;
}
function j2(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96;
}
const N2 = (t, e) =>
    e.components && e.components[t] && e.components[t].styleOverrides
      ? e.components[t].styleOverrides
      : null,
  F2 = (t, e) => {
    let n = [];
    e &&
      e.components &&
      e.components[t] &&
      e.components[t].variants &&
      (n = e.components[t].variants);
    const i = {};
    return (
      n.forEach((r) => {
        const s = dy(r.props);
        i[s] = r.style;
      }),
      i
    );
  },
  B2 = (t, e, n, i) => {
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
            c && a.push(e[dy(u.props)]);
        }),
      a
    );
  };
function Bo(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const W2 = Gd();
function Dr({ defaultTheme: t, theme: e, themeId: n }) {
  return D2(e) ? t : e[n] || e;
}
function H2(t = {}) {
  const {
      themeId: e,
      defaultTheme: n = W2,
      rootShouldForwardProp: i = Bo,
      slotShouldForwardProp: r = Bo,
    } = t,
    s = (o) =>
      Vd(ee({}, o, { theme: Dr(ee({}, o, { defaultTheme: n, themeId: e })) }));
  return (
    (s.__mui_systemSx = !0),
    (o, a = {}) => {
      DS(o, (b) => b.filter((x) => !(x != null && x.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: p,
        } = a,
        f = zn(a, $2),
        g = c !== void 0 ? c : (u && u !== "Root") || !1,
        m = d || !1;
      let w,
        y = Bo;
      u === "Root" ? (y = i) : u ? (y = r) : j2(o) && (y = void 0);
      const h = $S(o, ee({ shouldForwardProp: y, label: w }, f)),
        v = (b, ...x) => {
          const k = x
            ? x.map((z) =>
                typeof z == "function" && z.__emotion_real !== z
                  ? (_) =>
                      z(
                        ee({}, _, {
                          theme: Dr(ee({}, _, { defaultTheme: n, themeId: e })),
                        }),
                      )
                  : z,
              )
            : [];
          let S = b;
          l &&
            p &&
            k.push((z) => {
              const _ = Dr(ee({}, z, { defaultTheme: n, themeId: e })),
                E = N2(l, _);
              if (E) {
                const M = {};
                return (
                  Object.entries(E).forEach(([L, j]) => {
                    M[L] =
                      typeof j == "function" ? j(ee({}, z, { theme: _ })) : j;
                  }),
                  p(z, M)
                );
              }
              return null;
            }),
            l &&
              !g &&
              k.push((z) => {
                const _ = Dr(ee({}, z, { defaultTheme: n, themeId: e }));
                return B2(z, F2(l, _), _, l);
              }),
            m || k.push(s);
          const C = k.length - x.length;
          if (Array.isArray(b) && C > 0) {
            const z = new Array(C).fill("");
            (S = [...b, ...z]), (S.raw = [...b.raw, ...z]);
          } else
            typeof b == "function" &&
              b.__emotion_real !== b &&
              (S = (z) =>
                b(
                  ee({}, z, {
                    theme: Dr(ee({}, z, { defaultTheme: n, themeId: e })),
                  }),
                ));
          const T = h(S, ...k);
          return o.muiName && (T.muiName = o.muiName), T;
        };
      return h.withConfig && (v.withConfig = h.withConfig), v;
    }
  );
}
function U2(t) {
  const { theme: e, name: n, props: i } = t;
  return !e ||
    !e.components ||
    !e.components[n] ||
    !e.components[n].defaultProps
    ? i
    : K0(e.components[n].defaultProps, i);
}
function V2({ props: t, name: e, defaultTheme: n, themeId: i }) {
  let r = L2(n);
  return i && (r = r[i] || r), U2({ theme: r, name: e, props: t });
}
function fy(t, e = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function G2(t) {
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
function yr(t) {
  if (t.type) return t;
  if (t.charAt(0) === "#") return yr(G2(t));
  const e = t.indexOf("("),
    n = t.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(mr(9, t));
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
      throw new Error(mr(10, r));
  } else i = i.split(",");
  return (
    (i = i.map((s) => parseFloat(s))), { type: n, values: i, colorSpace: r }
  );
}
function qd(t) {
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
function q2(t) {
  t = yr(t);
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
    t.type === "hsla" && ((a += "a"), l.push(e[3])), qd({ type: a, values: l })
  );
}
function uh(t) {
  t = yr(t);
  let e = t.type === "hsl" || t.type === "hsla" ? yr(q2(t)).values : t.values;
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
function K2(t, e) {
  const n = uh(t),
    i = uh(e);
  return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05);
}
function Y2(t, e) {
  if (((t = yr(t)), (e = fy(e)), t.type.indexOf("hsl") !== -1))
    t.values[2] *= 1 - e;
  else if (t.type.indexOf("rgb") !== -1 || t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] *= 1 - e;
  return qd(t);
}
function Q2(t, e) {
  if (((t = yr(t)), (e = fy(e)), t.type.indexOf("hsl") !== -1))
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] += (255 - t.values[n]) * e;
  else if (t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) t.values[n] += (1 - t.values[n]) * e;
  return qd(t);
}
function X2(t, e) {
  return ee(
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
const J2 = { black: "#000", white: "#fff" },
  Os = J2,
  Z2 = {
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
  ek = Z2,
  tk = {
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
  Pi = tk,
  nk = {
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
  zi = nk,
  ik = {
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
  jr = ik,
  rk = {
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
  Oi = rk,
  sk = {
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
  Mi = sk,
  ok = {
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
  Ii = ok,
  ak = ["mode", "contrastThreshold", "tonalOffset"],
  ch = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Os.white, default: Os.white },
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
  eu = {
    text: {
      primary: Os.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Os.white,
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
function dh(t, e, n, i) {
  const r = i.light || i,
    s = i.dark || i * 1.5;
  t[e] ||
    (t.hasOwnProperty(n)
      ? (t[e] = t[n])
      : e === "light"
      ? (t.light = Q2(t.main, r))
      : e === "dark" && (t.dark = Y2(t.main, s)));
}
function lk(t = "light") {
  return t === "dark"
    ? { main: Oi[200], light: Oi[50], dark: Oi[400] }
    : { main: Oi[700], light: Oi[400], dark: Oi[800] };
}
function uk(t = "light") {
  return t === "dark"
    ? { main: Pi[200], light: Pi[50], dark: Pi[400] }
    : { main: Pi[500], light: Pi[300], dark: Pi[700] };
}
function ck(t = "light") {
  return t === "dark"
    ? { main: zi[500], light: zi[300], dark: zi[700] }
    : { main: zi[700], light: zi[400], dark: zi[800] };
}
function dk(t = "light") {
  return t === "dark"
    ? { main: Mi[400], light: Mi[300], dark: Mi[700] }
    : { main: Mi[700], light: Mi[500], dark: Mi[900] };
}
function fk(t = "light") {
  return t === "dark"
    ? { main: Ii[400], light: Ii[300], dark: Ii[700] }
    : { main: Ii[800], light: Ii[500], dark: Ii[900] };
}
function pk(t = "light") {
  return t === "dark"
    ? { main: jr[400], light: jr[300], dark: jr[700] }
    : { main: "#ed6c02", light: jr[500], dark: jr[900] };
}
function hk(t) {
  const {
      mode: e = "light",
      contrastThreshold: n = 3,
      tonalOffset: i = 0.2,
    } = t,
    r = zn(t, ak),
    s = t.primary || lk(e),
    o = t.secondary || uk(e),
    a = t.error || ck(e),
    l = t.info || dk(e),
    u = t.success || fk(e),
    c = t.warning || pk(e);
  function d(m) {
    return K2(m, eu.text.primary) >= n ? eu.text.primary : ch.text.primary;
  }
  const p = ({
      color: m,
      name: w,
      mainShade: y = 500,
      lightShade: h = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((m = ee({}, m)),
        !m.main && m[y] && (m.main = m[y]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(mr(11, w ? ` (${w})` : "", y));
      if (typeof m.main != "string")
        throw new Error(mr(12, w ? ` (${w})` : "", JSON.stringify(m.main)));
      return (
        dh(m, "light", h, i),
        dh(m, "dark", v, i),
        m.contrastText || (m.contrastText = d(m.main)),
        m
      );
    },
    f = { dark: eu, light: ch };
  return xn(
    ee(
      {
        common: ee({}, Os),
        mode: e,
        primary: p({ color: s, name: "primary" }),
        secondary: p({
          color: o,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: a, name: "error" }),
        warning: p({ color: c, name: "warning" }),
        info: p({ color: l, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: ek,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: i,
      },
      f[e],
    ),
    r,
  );
}
const mk = [
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
function gk(t) {
  return Math.round(t * 1e5) / 1e5;
}
const fh = { textTransform: "uppercase" },
  ph = '"Roboto", "Helvetica", "Arial", sans-serif';
function yk(t, e) {
  const n = typeof e == "function" ? e(t) : e,
    {
      fontFamily: i = ph,
      fontSize: r = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    p = zn(n, mk),
    f = r / 14,
    g = d || ((y) => `${(y / u) * f}rem`),
    m = (y, h, v, b, x) =>
      ee(
        { fontFamily: i, fontWeight: y, fontSize: g(h), lineHeight: v },
        i === ph ? { letterSpacing: `${gk(b / h)}em` } : {},
        x,
        c,
      ),
    w = {
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
      button: m(a, 14, 1.75, 0.4, fh),
      caption: m(o, 12, 1.66, 0.4),
      overline: m(o, 12, 2.66, 1, fh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return xn(
    ee(
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
      w,
    ),
    p,
    { clone: !1 },
  );
}
const vk = 0.2,
  wk = 0.14,
  bk = 0.12;
function be(...t) {
  return [
    `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${vk})`,
    `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${wk})`,
    `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${bk})`,
  ].join(",");
}
const xk = [
    "none",
    be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Sk = xk,
  kk = ["duration", "easing", "delay"],
  _k = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Ek = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function hh(t) {
  return `${Math.round(t)}ms`;
}
function Ck(t) {
  if (!t) return 0;
  const e = t / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Tk(t) {
  const e = ee({}, _k, t.easing),
    n = ee({}, Ek, t.duration);
  return ee(
    {
      getAutoHeightDuration: Ck,
      create: (r = ["all"], s = {}) => {
        const {
          duration: o = n.standard,
          easing: a = e.easeInOut,
          delay: l = 0,
        } = s;
        return (
          zn(s, kk),
          (Array.isArray(r) ? r : [r])
            .map(
              (u) =>
                `${u} ${typeof o == "string" ? o : hh(o)} ${a} ${
                  typeof l == "string" ? l : hh(l)
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
const Pk = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  zk = Pk,
  Ok = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Mk(t = {}, ...e) {
  const {
      mixins: n = {},
      palette: i = {},
      transitions: r = {},
      typography: s = {},
    } = t,
    o = zn(t, Ok);
  if (t.vars) throw new Error(mr(18));
  const a = hk(i),
    l = Gd(t);
  let u = xn(l, {
    mixins: X2(l.breakpoints, n),
    palette: a,
    shadows: Sk.slice(),
    typography: yk(a, s),
    transitions: Tk(r),
    zIndex: ee({}, zk),
  });
  return (
    (u = xn(u, o)),
    (u = e.reduce((c, d) => xn(c, d), u)),
    (u.unstable_sxConfig = ee(
      {},
      Ud,
      o == null ? void 0 : o.unstable_sxConfig,
    )),
    (u.unstable_sx = function (d) {
      return Vd({ sx: d, theme: this });
    }),
    u
  );
}
const Ik = Mk(),
  py = Ik,
  hy = "$$material";
function Rk({ props: t, name: e }) {
  return V2({ props: t, name: e, defaultTheme: py, themeId: hy });
}
const Lk = (t) => Bo(t) && t !== "classes",
  Ak = H2({ themeId: hy, defaultTheme: py, rootShouldForwardProp: Lk }),
  $k = Ak;
function Dk(t) {
  return Q0("MuiSvgIcon", t);
}
Hx("MuiSvgIcon", [
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
const jk = [
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
  Nk = (t) => {
    const { color: e, fontSize: n, classes: i } = t,
      r = {
        root: ["root", e !== "inherit" && `color${ln(e)}`, `fontSize${ln(n)}`],
      };
    return Nx(r, Dk, i);
  },
  Fk = $k("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        n.color !== "inherit" && e[`color${ln(n.color)}`],
        e[`fontSize${ln(n.fontSize)}`],
      ];
    },
  })(({ theme: t, ownerState: e }) => {
    var n, i, r, s, o, a, l, u, c, d, p, f, g, m, w, y, h;
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
        (p =
          (f = (t.vars || t).palette) == null || (g = f[e.color]) == null
            ? void 0
            : g.main) != null
          ? p
          : {
              action:
                (m = (t.vars || t).palette) == null || (w = m.action) == null
                  ? void 0
                  : w.active,
              disabled:
                (y = (t.vars || t).palette) == null || (h = y.action) == null
                  ? void 0
                  : h.disabled,
              inherit: void 0,
            }[e.color],
    };
  }),
  my = A.forwardRef(function (e, n) {
    const i = Rk({ props: e, name: "MuiSvgIcon" }),
      {
        children: r,
        className: s,
        color: o = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: p = "0 0 24 24",
      } = i,
      f = zn(i, jk),
      g = A.isValidElement(r) && r.type === "svg",
      m = ee({}, i, {
        color: o,
        component: a,
        fontSize: l,
        instanceFontSize: e.fontSize,
        inheritViewBox: c,
        viewBox: p,
        hasSvgAsChild: g,
      }),
      w = {};
    c || (w.viewBox = p);
    const y = Nk(m);
    return P.jsxs(
      Fk,
      ee(
        {
          as: a,
          className: wn(y.root, s),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        w,
        f,
        g && r.props,
        {
          ownerState: m,
          children: [
            g ? r.props.children : r,
            d ? P.jsx("title", { children: d }) : null,
          ],
        },
      ),
    );
  });
my.muiName = "SvgIcon";
const mh = my;
function Bk(t, e) {
  function n(i, r) {
    return P.jsx(
      mh,
      ee({ "data-testid": `${e}Icon`, ref: r }, i, { children: t }),
    );
  }
  return (n.muiName = mh.muiName), A.memo(A.forwardRef(n));
}
const Wk = {
    configure: (t) => {
      Y0.configure(t);
    },
  },
  Hk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: ln,
        createChainedFunction: wx,
        createSvgIcon: Bk,
        debounce: bx,
        deprecatedPropType: xx,
        isMuiElement: Sx,
        ownerDocument: V0,
        ownerWindow: kx,
        requirePropFactory: _x,
        setRef: G0,
        unstable_ClassNameGenerator: Wk,
        unstable_useEnhancedEffect: q0,
        unstable_useId: Tx,
        unsupportedProp: Px,
        useControlled: zx,
        useEventCallback: Ox,
        useForkRef: Mx,
        useIsFocusVisible: jx,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Uk = zv(Hk);
var gh;
function ul() {
  return (
    gh ||
      ((gh = 1),
      (function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return e.createSvgIcon;
            },
          });
        var e = Uk;
      })(Xl)),
    Xl
  );
}
var Vk = Ja;
Object.defineProperty($d, "__esModule", { value: !0 });
var gy = ($d.default = void 0),
  Gk = Vk(ul()),
  qk = P,
  Kk = (0, Gk.default)(
    (0, qk.jsx)("path", {
      d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    }),
    "KeyboardArrowDown",
  );
gy = $d.default = Kk;
const Kd = ({ link: t, isdark: e }) =>
  P.jsx(Yk, {
    href: t,
    isdark: e,
    children: P.jsx(gy, {
      sx: { width: 64, height: 64, animation: "BottomUpDown 1.5s 0s infinite" },
    }),
  });
Kd.defaultProps = { link: "#", isdark: !0 };
Kd.propTypes = { link: Ne.string, isdark: Ne.bool };
const Yk = G.a`
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
  cl = A.memo(Kd),
  Yd = ({ text: t }) =>
    P.jsx("div", {
      className: "spinner-container",
      children: P.jsxs("div", {
        className: "spinner",
        children: [
          t,
          P.jsx("div", { className: "spinner-sector spinner-sector-red" }),
          P.jsx("div", { className: "spinner-sector spinner-sector-blue" }),
          P.jsx("div", { className: "spinner-sector spinner-sector-green" }),
        ],
      }),
    });
Yd.propTypes = { text: Ne.string };
Yd.defaultProps = { text: "" };
const vr = A.memo(Yd);
function Qk() {
  return P.jsx("div", {
    className: "spinner-container",
    children: P.jsxs("div", {
      className: "spinner-s",
      children: [
        P.jsx("div", { className: "spinner-sector spinner-sector-red" }),
        P.jsx("div", { className: "spinner-sector spinner-sector-blue" }),
        P.jsx("div", { className: "spinner-sector spinner-sector-green" }),
      ],
    }),
  });
}
const Xk = A.memo(Qk);
function Qd({ show: t, isdark: e, setDark: n }) {
  const i = [
    { id: "#Home", title: "home" },
    { id: "#About-me", title: "about me" },
    { id: "#Portfolio", title: "portfolio" },
    { id: "#Projects", title: "projects" },
    { id: "#Contact-me", title: "contact" },
    {
      id: "https://drive.google.com/file/d/1Ajxq0J7MF7ySTEbG03mCYT41fG3_4xap/view?usp=drive_link",
      title: "resume",
    },
  ];
  return P.jsx(Jk, {
    show: t,
    isdark: e,
    children: P.jsxs(Zk, {
      isdark: e,
      children: [
        P.jsx(vy, { setDark: n, isdark: e }),
        i.map((r, s) =>
          P.jsx(
            e_,
            {
              children: P.jsx("a", {
                className: "link",
                href: r.id,
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
Qd.propTypes = { show: Ne.bool, isdark: Ne.bool, setDark: Ne.func };
Qd.defaultProps = { show: !1, isdark: !1 };
const Jk = G.div`
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
  Zk = G.ul`
    display: grid;
    width: 100%;
    grid-gap: 4vh;
    margin-bottom: 2vh;
    padding: 1rem;
    grid-template-columns: auto;
    position: relative;
    color: ${({ isdark: t }) => (t ? "#15023a" : "#fff")};
`,
  e_ = G.li`
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
function t_() {
  return P.jsxs("div", {
    className: "map-container",
    children: [
      P.jsx(vr, { test: "loading" }),
      P.jsx("iframe", {
        title: "Map",
        id: "map",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968.565426264222!2d85.75219930746348!3d20.294415313716772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1663484238879!5m2!1sen!2sin",
        referrerPolicy: "no-referrer-when-downgrade",
        loading: "lazy",
      }),
    ],
  });
}
const n_ = A.memo(t_);
function Xd({ data: t, isdark: e }) {
  return P.jsx(r_, {
    children: P.jsx("div", {
      "data-aos": "zoom-in",
      children:
        t.type === "project"
          ? P.jsxs(s_, {
              isdark: e,
              children: [
                P.jsx(o_, {
                  children: P.jsxs(a_, {
                    children: [
                      P.jsx(l_, {
                        children: P.jsx(u_, { src: t.icon, alt: t.title }),
                      }),
                      P.jsx("h1", { children: t.title }),
                      P.jsx("p", { className: "desc", children: t.desc }),
                      P.jsx("a", {
                        target: "_blank",
                        href: t.link,
                        rel: "noreferrer",
                        children: "Link",
                      }),
                    ],
                  }),
                }),
                P.jsx(c_, {
                  children: P.jsx(d_, {
                    src: t.image,
                    loading: "lazy",
                    alt: t.title,
                  }),
                }),
              ],
            })
          : P.jsx(i_, {
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
Xd.propTypes = { data: Ne.object.isRequired, isdark: Ne.bool };
Xd.defaultProps = { isdark: !1 };
const i_ = G.img`
	width: 720px;
	height: auto;
	max-width: 50vw;
	object-fit: contain;
	cursor: pointer;
	overflow: hidden;
	scale: 0.95;
`,
  r_ = G.div`
	width: max-content;
	max-width: 75vw !important;
	height: 100%;
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: center;
	* {
		/* overflow: hidden; */
	}
	scale: 0.95;
	transition: all 0.1s ease-in-out;
	&:hover {
		scale: 1;
		transition: all 0.2s ease-in-out;
	}
`,
  s_ = G.div`
	/* width: 764px; */
	/* height: 400px; */
	padding: min(3vw,16px);
	background-color: ${({ isdark: t }) =>
    t ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)"};
	color: ${({ isdark: t }) => (t ? "#000" : "#fff")};
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 70vw !important;
	/* min-height: 45vh !important; */
	max-height: 60vh !important;
	overflow: hidden !important; 
	@media (max-width: 540px) {
		max-height: 40vh;
	}
	@media (max-width: 380px) {
		max-height: 33vh;
	}
`,
  o_ = G.div`
	flex: 4;
	width: 100%;
	height: 100%;
	display: grid;
	align-items: center;
	justify-content: center;
`,
  a_ = G.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	/* align-items: center; */
	h1 {
		display: grid;
		align-items: center;
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
		display: grid;
		align-items: center;
		margin: 8px 0;
		max-width: 22vw;
		max-height: 30vh;
		/* font-style: italic; */
		font-family: 'Comic Sans MS', cursive, monospace;
		font-weight: 300;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.6px;
		overflow-y: auto;
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
		display: grid;
		align-items: center;
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
  l_ = G.div`
	display: grid;
	align-items: center;
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
	justify-content: center;
	margin-bottom: 8px;
`,
  u_ = G.img`
	width: 25px;
	@media (max-width: 540px) {
		width: 20px;
	}
	@media (max-width: 380px) {
		width: 15px;
	}
`,
  c_ = G.div`
	flex: 8;
	height: max-content;
	display: flex;
	align-items: center;
	justify-content: center;
`,
  d_ = G.img`
	width: 480px;
	max-width: 30vw !important;
	transform: rotate(-15deg);
	margin: 3vw 0 !important;
	transition: transform 0.1s ease-in-out;
	&:hover {
		transform: rotate(0deg);
		transition: transform 0.2s ease-in-out;
	}
`,
  yh = [
    {
      id: 1,
      title: "LeetCode",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKruyd5Ae.png",
      link: "https://leetcode.com/HarshRajGupta/",
    },
    {
      id: 2,
      title: "CodeChef",
      image:
        "https://user-images.githubusercontent.com/85221003/190646494-3553d4ac-a243-4c7e-9ae9-56aa7c0111fd.png",
      link: "https://www.codechef.com/users/HarshRajGupta",
    },
    {
      id: 3,
      title: "CodeForces",
      image:
        "https://user-images.githubusercontent.com/85221003/190646468-bcc72b58-bc09-4523-8a1a-1747d8477167.png",
      link: "https://codeforces.com/profile/Harsh_Raj_Gupta",
    },
    {
      id: 4,
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKru6wXFk.png",
    },
    {
      id: 5,
      title: "HTML mod",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrpmGhDr.png",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: 6,
      title: "Dhrti",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrkKUyH3.jpg",
      link: "https://github.com/HarshRajGupta/Dhrti",
    },
    {
      id: 7,
      title: "SIH",
      image:
        "https://user-images.githubusercontent.com/85221003/190645643-00c8a76b-2029-4761-bf99-b00fab2e8e63.png",
      link: "https://drive.google.com/file/d/1R9RqFUAuQWpAuvbs71dDrEpK5SCn1JK5/view?usp=sharing",
    },
    {
      id: 8,
      title: "ICPC",
      image:
        "https://user-images.githubusercontent.com/85221003/190646074-6f2334d5-9a09-450b-a9fa-d7df7420562c.png",
      link: "https://drive.google.com/file/d/1d4P6RoOAOihgkG-W-187fgQ3NlCwjYIk/view?usp=sharing",
    },
    {
      id: 9,
      title: "GeeksFiesta",
      image:
        "https://user-images.githubusercontent.com/85221003/190646226-65d7cfd3-6cf3-413b-a112-5945d355c5d7.png",
      link: "https://drive.google.com/file/d/1GdkrSHH32-dpBqvRd-AWc2esLDZ8Swlh/view?usp=drive_link",
    },
  ],
  f_ = [
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
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrnHNLBz.png",
      link: "https://drive.google.com/file/d/1MGMu50F6_dZHfw_pbfBZCVHBAdS8rdH4/view?usp=drive_link",
    },
    {
      id: 6,
      title: "TCS CodeVita",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrm7L9Ak.png",
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
  p_ = [
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
  h_ = [
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
  m_ = [
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
  g_ = [
    {
      id: "1",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKru6wXFk.png",
    },
    {
      id: "2",
      link: "https://editorPro.onrender.com/",
      title: "Editor-Pro",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrsz2Q9i.png",
    },
    {
      id: "3",
      title: "Editor-Pro",
      link: "http://github.com/HarshRajGupta/editor-pro",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrsWZ2GQ.png",
    },
    {
      id: "4",
      title: "HTML-mod",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrrWnSGw.png",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "5",
      title: "HTML-mod",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrpmGhDr.png",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "6",
      title: "HTML-mod",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrqfiZ6D.png",
      link: "https://htmlmod.onrender.com",
    },
    {
      id: "7",
      title: "Dhrti",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrkKUyH3.jpg",
      link: "https://github.com/HarshRajGupta/Dhrti",
    },
    {
      id: "8",
      title: "Tesla clone",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrinDN3W.png",
      link: "https://harshrajgupta.github.io/tesla-clone",
    },
  ],
  y_ = [
    {
      id: "1",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "A feature rich Text and Code Editor that combines document sharing, editing, and compilation capabilities.",
      img: "https://editor-pro.onrender.com/logo.png",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKru6wXFk.png",
      type: "project",
    },
    {
      id: "2",
      link: "https://editor-pro.onrender.com/",
      title: "Editor Pro",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKru6wXFk.png",
      type: "photo",
    },
    {
      id: "3",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "Real Time Collaboration system allowing 50+ users to edit and share files simultaneously",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrsz2Q9i.png",
      type: "project",
    },
    {
      id: "4",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "Support for 40+ programming languages (including Markdown) and Word File. Secure Access management system and updates limited to the original creator.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrsWZ2GQ.png",
      type: "project",
    },
    {
      id: "5",
      icon: "https://editor-pro.onrender.com/logo.png",
      link: "https://editor-pro.onrender.com/",
      title: "Editor-Pro",
      desc: "User invitations via email and prompts for real-time updates during collaboration.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrs2SSFo.png",
      type: "project",
    },
    {
      id: "6",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "A visualizer and extractor for the analysis of html documents.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrrWnSGw.png",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "7",
      title: "HTML mod",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrrWnSGw.png",
      link: "https://htmlmod.onrender.com",
      type: "photo",
    },
    {
      id: "8",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: " Extracts a diverse range of elements: images, dynamic links, engaging text, and intricate JavaScript.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrpmGhDr.png",
      link: "https://html-mod.onrender.com",
      type: "project",
    },
    {
      id: "9",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "Analyses SEO and offers personalized recommendations for optimizing search engine visibility.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrqBR6F7.png",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "10",
      icon: "https://vitejs.dev/logo.svg",
      title: "HTML mod",
      desc: "Supports both live URLs and local HTML file uploads, ensuring flexibility and convenience for users.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrqfiZ6D.png",
      link: "https://htmlmod.onrender.com",
      type: "project",
    },
    {
      id: "11",
      icon: "https://upcdn.io/W142hJk/raw/demo/4mKrgWqA3f.ico",
      title: "Dhrti",
      desc: "A Geographical simulator that converts AIS data into GIS for greater visualization and analysis. Predicts the gear type of ships and provides a detailed analysis of the same.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrkKUyH3.jpg",
      link: "https://github.com/HarshRajGupta/Dhrti",
      type: "project",
    },
    {
      id: "12",
      title: "Dhrti",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrkKUyH3.jpg",
      link: "https://github.com/HarshRajGupta/Dhrti",
      type: "photo",
    },
    {
      id: "13",
      icon: "https://harshrajgupta.github.io/tesla-clone/favicon.ico",
      title: "Tesla clone",
      desc: "A clone of the Tesla website with a fully responsive UI and a smooth scroll and animations.",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrinDN3W.png",
      link: "https://harshrajgupta.github.io/tesla-clone",
      type: "project",
    },
    {
      id: "14",
      title: "Tesla clone",
      image: "https://upcdn.io/W142hJk/raw/demo/4mKrinDN3W.png",
      link: "https://harshrajgupta.github.io/tesla-clone",
      type: "photo",
    },
  ];
function yy({ selector: t, isdark: e }) {
  const [n, i] = A.useState(yh);
  return (
    A.useEffect(() => {
      switch (t) {
        case "achievements":
          i(f_);
          break;
        case "certifications":
          i(p_);
          break;
        case "skills":
          i(h_);
          break;
        case "languages":
          i(m_);
          break;
        case "project":
          i(g_);
          break;
        default:
          i(yh);
      }
      return (
        rs.init({ duration: 750 }),
        () => {
          rs.refresh();
        }
      );
    }, [t]),
    P.jsx(A.Suspense, {
      fallback: P.jsx(vr, { text: "Loading" }),
      children: P.jsx(v_, {
        isdark: e,
        children: n.map((r, s) =>
          P.jsx(
            A.Suspense,
            {
              fallback: P.jsx(vr, {}),
              children: P.jsx("a", {
                "data-aos":
                  s % 3 === 2
                    ? "zoom-in-left"
                    : s % 3
                    ? "zoom-in-up"
                    : "zoom-in-right",
                target: "_blank",
                href: r.link,
                rel: "noreferrer",
                children: P.jsxs(w_, {
                  bgcolor:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                  children: [
                    t !== "languages" &&
                      t !== "skills" &&
                      P.jsx(x_, { children: P.jsx(Xk, {}) }),
                    P.jsx(b_, {
                      src: r.image,
                      alt: r.title,
                      isdark: e,
                      loading: "lazy",
                    }),
                    P.jsx("h1", { children: r.title }),
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
yy.propTypes = { selector: Ne.string, isdark: Ne.bool };
const v_ = G.div`
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
  w_ = G.div`
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
  b_ = G.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
    background: ${({ isdark: t }) =>
      t ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
`,
  x_ = G.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
`,
  S_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yy },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k_ = G.div`
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
function __({ isdark: t, setDark: e }) {
  return P.jsx(k_, {
    onClick: () => e(!t),
    isdark: t,
    children: t
      ? P.jsx("svg", {
          fill: "currentColor",
          viewBox: "0 0 16 16",
          className: "bi bi-brightness-high-fill active",
          children: P.jsx("path", {
            d: "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
          }),
        })
      : P.jsx("svg", {
          width: "32",
          height: "32",
          fill: "currentColor",
          viewBox: "0 0 16 16",
          className: "bi bi-moon-fill active",
          children: P.jsx("path", {
            d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z",
          }),
        }),
  });
}
const vy = A.memo(__);
var wy = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i(A);
  })(typeof self < "u" ? self : Vo, (n) =>
    (() => {
      var i = {
          7403: (a, l, u) => {
            u.d(l, { default: () => $ });
            var c = u(4087),
              d = u.n(c);
            const p = function (I) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(I);
              },
              f = function (I, R) {
                return Math.floor(Math.random() * (R - I + 1)) + I;
              };
            var g = "TYPE_CHARACTER",
              m = "REMOVE_CHARACTER",
              w = "REMOVE_ALL",
              y = "REMOVE_LAST_VISIBLE_NODE",
              h = "PAUSE_FOR",
              v = "CALL_FUNCTION",
              b = "ADD_HTML_TAG_ELEMENT",
              x = "CHANGE_DELETE_SPEED",
              k = "CHANGE_DELAY",
              S = "CHANGE_CURSOR",
              C = "PASTE_STRING",
              T = "HTML_TAG";
            function z(I) {
              return (
                (z =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (R) {
                        return typeof R;
                      }
                    : function (R) {
                        return R &&
                          typeof Symbol == "function" &&
                          R.constructor === Symbol &&
                          R !== Symbol.prototype
                          ? "symbol"
                          : typeof R;
                      }),
                z(I)
              );
            }
            function _(I, R) {
              var H = Object.keys(I);
              if (Object.getOwnPropertySymbols) {
                var U = Object.getOwnPropertySymbols(I);
                R &&
                  (U = U.filter(function (re) {
                    return Object.getOwnPropertyDescriptor(I, re).enumerable;
                  })),
                  H.push.apply(H, U);
              }
              return H;
            }
            function E(I) {
              for (var R = 1; R < arguments.length; R++) {
                var H = arguments[R] != null ? arguments[R] : {};
                R % 2
                  ? _(Object(H), !0).forEach(function (U) {
                      N(I, U, H[U]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      I,
                      Object.getOwnPropertyDescriptors(H),
                    )
                  : _(Object(H)).forEach(function (U) {
                      Object.defineProperty(
                        I,
                        U,
                        Object.getOwnPropertyDescriptor(H, U),
                      );
                    });
              }
              return I;
            }
            function M(I) {
              return (
                (function (R) {
                  if (Array.isArray(R)) return L(R);
                })(I) ||
                (function (R) {
                  if (
                    (typeof Symbol < "u" && R[Symbol.iterator] != null) ||
                    R["@@iterator"] != null
                  )
                    return Array.from(R);
                })(I) ||
                (function (R, H) {
                  if (R) {
                    if (typeof R == "string") return L(R, H);
                    var U = Object.prototype.toString.call(R).slice(8, -1);
                    return (
                      U === "Object" &&
                        R.constructor &&
                        (U = R.constructor.name),
                      U === "Map" || U === "Set"
                        ? Array.from(R)
                        : U === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)
                        ? L(R, H)
                        : void 0
                    );
                  }
                })(I) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function L(I, R) {
              (R == null || R > I.length) && (R = I.length);
              for (var H = 0, U = new Array(R); H < R; H++) U[H] = I[H];
              return U;
            }
            function j(I, R) {
              for (var H = 0; H < R.length; H++) {
                var U = R[H];
                (U.enumerable = U.enumerable || !1),
                  (U.configurable = !0),
                  "value" in U && (U.writable = !0),
                  Object.defineProperty(I, W(U.key), U);
              }
            }
            function N(I, R, H) {
              return (
                (R = W(R)) in I
                  ? Object.defineProperty(I, R, {
                      value: H,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (I[R] = H),
                I
              );
            }
            function W(I) {
              var R = (function (H, U) {
                if (z(H) !== "object" || H === null) return H;
                var re = H[Symbol.toPrimitive];
                if (re !== void 0) {
                  var O = re.call(H, "string");
                  if (z(O) !== "object") return O;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(H);
              })(I);
              return z(R) === "symbol" ? R : String(R);
            }
            const $ = (function () {
              function I(U, re) {
                var O = this;
                if (
                  ((function (F, K) {
                    if (!(F instanceof K))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, I),
                  N(this, "state", {
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
                  N(this, "options", {
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
                  N(this, "setupWrapperElement", function () {
                    O.state.elements.container &&
                      ((O.state.elements.wrapper.className =
                        O.options.wrapperClassName),
                      (O.state.elements.cursor.className =
                        O.options.cursorClassName),
                      (O.state.elements.cursor.innerHTML = O.options.cursor),
                      (O.state.elements.container.innerHTML = ""),
                      O.state.elements.container.appendChild(
                        O.state.elements.wrapper,
                      ),
                      O.state.elements.container.appendChild(
                        O.state.elements.cursor,
                      ));
                  }),
                  N(this, "start", function () {
                    return (O.state.eventLoopPaused = !1), O.runEventLoop(), O;
                  }),
                  N(this, "pause", function () {
                    return (O.state.eventLoopPaused = !0), O;
                  }),
                  N(this, "stop", function () {
                    return (
                      O.state.eventLoop &&
                        ((0, c.cancel)(O.state.eventLoop),
                        (O.state.eventLoop = null)),
                      O
                    );
                  }),
                  N(this, "pauseFor", function (F) {
                    return O.addEventToQueue(h, { ms: F }), O;
                  }),
                  N(this, "typeOutAllStrings", function () {
                    return typeof O.options.strings == "string"
                      ? (O.typeString(O.options.strings).pauseFor(
                          O.options.pauseFor,
                        ),
                        O)
                      : (O.options.strings.forEach(function (F) {
                          O.typeString(F)
                            .pauseFor(O.options.pauseFor)
                            .deleteAll(O.options.deleteSpeed);
                        }),
                        O);
                  }),
                  N(this, "typeString", function (F) {
                    var K =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (p(F)) return O.typeOutHTMLString(F, K);
                    if (F) {
                      var J = (O.options || {}).stringSplitter,
                        ne = typeof J == "function" ? J(F) : F.split("");
                      O.typeCharacters(ne, K);
                    }
                    return O;
                  }),
                  N(this, "pasteString", function (F) {
                    var K =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return p(F)
                      ? O.typeOutHTMLString(F, K, !0)
                      : (F && O.addEventToQueue(C, { character: F, node: K }),
                        O);
                  }),
                  N(this, "typeOutHTMLString", function (F) {
                    var K =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      J = arguments.length > 2 ? arguments[2] : void 0,
                      ne = (function (de) {
                        var ie = document.createElement("div");
                        return (ie.innerHTML = de), ie.childNodes;
                      })(F);
                    if (ne.length > 0)
                      for (var X = 0; X < ne.length; X++) {
                        var Me = ne[X],
                          Ye = Me.innerHTML;
                        Me && Me.nodeType !== 3
                          ? ((Me.innerHTML = ""),
                            O.addEventToQueue(b, { node: Me, parentNode: K }),
                            J ? O.pasteString(Ye, Me) : O.typeString(Ye, Me))
                          : Me.textContent &&
                            (J
                              ? O.pasteString(Me.textContent, K)
                              : O.typeString(Me.textContent, K));
                      }
                    return O;
                  }),
                  N(this, "deleteAll", function () {
                    var F =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return O.addEventToQueue(w, { speed: F }), O;
                  }),
                  N(this, "changeDeleteSpeed", function (F) {
                    if (!F) throw new Error("Must provide new delete speed");
                    return O.addEventToQueue(x, { speed: F }), O;
                  }),
                  N(this, "changeDelay", function (F) {
                    if (!F) throw new Error("Must provide new delay");
                    return O.addEventToQueue(k, { delay: F }), O;
                  }),
                  N(this, "changeCursor", function (F) {
                    if (!F) throw new Error("Must provide new cursor");
                    return O.addEventToQueue(S, { cursor: F }), O;
                  }),
                  N(this, "deleteChars", function (F) {
                    if (!F)
                      throw new Error(
                        "Must provide amount of characters to delete",
                      );
                    for (var K = 0; K < F; K++) O.addEventToQueue(m);
                    return O;
                  }),
                  N(this, "callFunction", function (F, K) {
                    if (!F || typeof F != "function")
                      throw new Error("Callbak must be a function");
                    return O.addEventToQueue(v, { cb: F, thisArg: K }), O;
                  }),
                  N(this, "typeCharacters", function (F) {
                    var K =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!F || !Array.isArray(F))
                      throw new Error("Characters must be an array");
                    return (
                      F.forEach(function (J) {
                        O.addEventToQueue(g, { character: J, node: K });
                      }),
                      O
                    );
                  }),
                  N(this, "removeCharacters", function (F) {
                    if (!F || !Array.isArray(F))
                      throw new Error("Characters must be an array");
                    return (
                      F.forEach(function () {
                        O.addEventToQueue(m);
                      }),
                      O
                    );
                  }),
                  N(this, "addEventToQueue", function (F, K) {
                    var J =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return O.addEventToStateProperty(F, K, J, "eventQueue");
                  }),
                  N(this, "addReverseCalledEvent", function (F, K) {
                    var J =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return O.options.loop
                      ? O.addEventToStateProperty(
                          F,
                          K,
                          J,
                          "reverseCalledEvents",
                        )
                      : O;
                  }),
                  N(this, "addEventToStateProperty", function (F, K) {
                    var J =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      ne = arguments.length > 3 ? arguments[3] : void 0,
                      X = { eventName: F, eventArgs: K || {} };
                    return (
                      (O.state[ne] = J
                        ? [X].concat(M(O.state[ne]))
                        : [].concat(M(O.state[ne]), [X])),
                      O
                    );
                  }),
                  N(this, "runEventLoop", function () {
                    O.state.lastFrameTime ||
                      (O.state.lastFrameTime = Date.now());
                    var F = Date.now(),
                      K = F - O.state.lastFrameTime;
                    if (!O.state.eventQueue.length) {
                      if (!O.options.loop) return;
                      (O.state.eventQueue = M(O.state.calledEvents)),
                        (O.state.calledEvents = []),
                        (O.options = E({}, O.state.initialOptions));
                    }
                    if (
                      ((O.state.eventLoop = d()(O.runEventLoop)),
                      !O.state.eventLoopPaused)
                    ) {
                      if (O.state.pauseUntil) {
                        if (F < O.state.pauseUntil) return;
                        O.state.pauseUntil = null;
                      }
                      var J,
                        ne = M(O.state.eventQueue),
                        X = ne.shift();
                      if (
                        !(
                          K <=
                          (J =
                            X.eventName === y || X.eventName === m
                              ? O.options.deleteSpeed === "natural"
                                ? f(40, 80)
                                : O.options.deleteSpeed
                              : O.options.delay === "natural"
                              ? f(120, 160)
                              : O.options.delay)
                        )
                      ) {
                        var Me = X.eventName,
                          Ye = X.eventArgs;
                        switch (
                          (O.logInDevMode({
                            currentEvent: X,
                            state: O.state,
                            delay: J,
                          }),
                          Me)
                        ) {
                          case C:
                          case g:
                            var de = Ye.character,
                              ie = Ye.node,
                              Ue = document.createTextNode(de),
                              at = Ue;
                            O.options.onCreateTextNode &&
                              typeof O.options.onCreateTextNode == "function" &&
                              (at = O.options.onCreateTextNode(de, Ue)),
                              at &&
                                (ie
                                  ? ie.appendChild(at)
                                  : O.state.elements.wrapper.appendChild(at)),
                              (O.state.visibleNodes = [].concat(
                                M(O.state.visibleNodes),
                                [
                                  {
                                    type: "TEXT_NODE",
                                    character: de,
                                    node: at,
                                  },
                                ],
                              ));
                            break;
                          case m:
                            ne.unshift({
                              eventName: y,
                              eventArgs: { removingCharacterNode: !0 },
                            });
                            break;
                          case h:
                            var Gs = X.eventArgs.ms;
                            O.state.pauseUntil = Date.now() + parseInt(Gs);
                            break;
                          case v:
                            var wf = X.eventArgs,
                              xv = wf.cb,
                              Sv = wf.thisArg;
                            xv.call(Sv, { elements: O.state.elements });
                            break;
                          case b:
                            var bf = X.eventArgs,
                              pl = bf.node,
                              hl = bf.parentNode;
                            hl
                              ? hl.appendChild(pl)
                              : O.state.elements.wrapper.appendChild(pl),
                              (O.state.visibleNodes = [].concat(
                                M(O.state.visibleNodes),
                                [
                                  {
                                    type: T,
                                    node: pl,
                                    parentNode: hl || O.state.elements.wrapper,
                                  },
                                ],
                              ));
                            break;
                          case w:
                            var kv = O.state.visibleNodes,
                              ml = Ye.speed,
                              qs = [];
                            ml &&
                              qs.push({
                                eventName: x,
                                eventArgs: { speed: ml, temp: !0 },
                              });
                            for (var xf = 0, _v = kv.length; xf < _v; xf++)
                              qs.push({
                                eventName: y,
                                eventArgs: { removingCharacterNode: !1 },
                              });
                            ml &&
                              qs.push({
                                eventName: x,
                                eventArgs: {
                                  speed: O.options.deleteSpeed,
                                  temp: !0,
                                },
                              }),
                              ne.unshift.apply(ne, qs);
                            break;
                          case y:
                            var Ev = X.eventArgs.removingCharacterNode;
                            if (O.state.visibleNodes.length) {
                              var gl = O.state.visibleNodes.pop(),
                                Cv = gl.type,
                                Ks = gl.node,
                                Tv = gl.character;
                              O.options.onRemoveNode &&
                                typeof O.options.onRemoveNode == "function" &&
                                O.options.onRemoveNode({
                                  node: Ks,
                                  character: Tv,
                                }),
                                Ks && Ks.parentNode.removeChild(Ks),
                                Cv === T &&
                                  Ev &&
                                  ne.unshift({ eventName: y, eventArgs: {} });
                            }
                            break;
                          case x:
                            O.options.deleteSpeed = X.eventArgs.speed;
                            break;
                          case k:
                            O.options.delay = X.eventArgs.delay;
                            break;
                          case S:
                            (O.options.cursor = X.eventArgs.cursor),
                              (O.state.elements.cursor.innerHTML =
                                X.eventArgs.cursor);
                        }
                        O.options.loop &&
                          (X.eventName === y ||
                            (X.eventArgs && X.eventArgs.temp) ||
                            (O.state.calledEvents = [].concat(
                              M(O.state.calledEvents),
                              [X],
                            ))),
                          (O.state.eventQueue = ne),
                          (O.state.lastFrameTime = F);
                      }
                    }
                  }),
                  U)
                )
                  if (typeof U == "string") {
                    var Ce = document.querySelector(U);
                    if (!Ce)
                      throw new Error("Could not find container element");
                    this.state.elements.container = Ce;
                  } else this.state.elements.container = U;
                re && (this.options = E(E({}, this.options), re)),
                  (this.state.initialOptions = E({}, this.options)),
                  this.init();
              }
              var R, H;
              return (
                (R = I),
                (H = [
                  {
                    key: "init",
                    value: function () {
                      var U, re;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          S,
                          { cursor: this.options.cursor },
                          !0,
                        ),
                        this.addEventToQueue(w, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((U =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (re = document.createElement("style")).appendChild(
                            document.createTextNode(U),
                          ),
                          document.head.appendChild(re),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (U) {
                      this.options.devMode && console.log(U);
                    },
                  },
                ]) && j(R.prototype, H),
                Object.defineProperty(R, "prototype", { writable: !1 }),
                I
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
              p = u(7667),
              f = u(1327),
              g = u(1866);
            function m(w) {
              var y = -1,
                h = w == null ? 0 : w.length;
              for (this.clear(); ++y < h; ) {
                var v = w[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = p),
              (m.prototype.has = f),
              (m.prototype.set = g),
              (a.exports = m);
          },
          8407: (a, l, u) => {
            var c = u(7040),
              d = u(4125),
              p = u(2117),
              f = u(7518),
              g = u(4705);
            function m(w) {
              var y = -1,
                h = w == null ? 0 : w.length;
              for (this.clear(); ++y < h; ) {
                var v = w[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = p),
              (m.prototype.has = f),
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
              p = u(6e3),
              f = u(9916),
              g = u(5265);
            function m(w) {
              var y = -1,
                h = w == null ? 0 : w.length;
              for (this.clear(); ++y < h; ) {
                var v = w[y];
                this.set(v[0], v[1]);
              }
            }
            (m.prototype.clear = c),
              (m.prototype.delete = d),
              (m.prototype.get = p),
              (m.prototype.has = f),
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
              p = u(2385);
            function f(g) {
              var m = -1,
                w = g == null ? 0 : g.length;
              for (this.__data__ = new c(); ++m < w; ) this.add(g[m]);
            }
            (f.prototype.add = f.prototype.push = d),
              (f.prototype.has = p),
              (a.exports = f);
          },
          6384: (a, l, u) => {
            var c = u(8407),
              d = u(7465),
              p = u(3779),
              f = u(7599),
              g = u(4758),
              m = u(4309);
            function w(y) {
              var h = (this.__data__ = new c(y));
              this.size = h.size;
            }
            (w.prototype.clear = d),
              (w.prototype.delete = p),
              (w.prototype.get = f),
              (w.prototype.has = g),
              (w.prototype.set = m),
              (a.exports = w);
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
                var c = -1, d = l == null ? 0 : l.length, p = 0, f = [];
                ++c < d;

              ) {
                var g = l[c];
                u(g, c, l) && (f[p++] = g);
              }
              return f;
            };
          },
          4636: (a, l, u) => {
            var c = u(2545),
              d = u(5694),
              p = u(1469),
              f = u(4144),
              g = u(5776),
              m = u(6719),
              w = Object.prototype.hasOwnProperty;
            a.exports = function (y, h) {
              var v = p(y),
                b = !v && d(y),
                x = !v && !b && f(y),
                k = !v && !b && !x && m(y),
                S = v || b || x || k,
                C = S ? c(y.length, String) : [],
                T = C.length;
              for (var z in y)
                (!h && !w.call(y, z)) ||
                  (S &&
                    (z == "length" ||
                      (x && (z == "offset" || z == "parent")) ||
                      (k &&
                        (z == "buffer" ||
                          z == "byteLength" ||
                          z == "byteOffset")) ||
                      g(z, T))) ||
                  C.push(z);
              return C;
            };
          },
          2488: (a) => {
            a.exports = function (l, u) {
              for (var c = -1, d = u.length, p = l.length; ++c < d; )
                l[p + c] = u[c];
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
            a.exports = function (d, p) {
              for (var f = d.length; f--; ) if (c(d[f][0], p)) return f;
              return -1;
            };
          },
          8866: (a, l, u) => {
            var c = u(2488),
              d = u(1469);
            a.exports = function (p, f, g) {
              var m = f(p);
              return d(p) ? m : c(m, g(p));
            };
          },
          4239: (a, l, u) => {
            var c = u(2705),
              d = u(9607),
              p = u(2333),
              f = c ? c.toStringTag : void 0;
            a.exports = function (g) {
              return g == null
                ? g === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : f && f in Object(g)
                ? d(g)
                : p(g);
            };
          },
          9454: (a, l, u) => {
            var c = u(4239),
              d = u(7005);
            a.exports = function (p) {
              return d(p) && c(p) == "[object Arguments]";
            };
          },
          939: (a, l, u) => {
            var c = u(2492),
              d = u(7005);
            a.exports = function p(f, g, m, w, y) {
              return (
                f === g ||
                (f == null || g == null || (!d(f) && !d(g))
                  ? f != f && g != g
                  : c(f, g, m, w, p, y))
              );
            };
          },
          2492: (a, l, u) => {
            var c = u(6384),
              d = u(7114),
              p = u(8351),
              f = u(6096),
              g = u(4160),
              m = u(1469),
              w = u(4144),
              y = u(6719),
              h = "[object Arguments]",
              v = "[object Array]",
              b = "[object Object]",
              x = Object.prototype.hasOwnProperty;
            a.exports = function (k, S, C, T, z, _) {
              var E = m(k),
                M = m(S),
                L = E ? v : g(k),
                j = M ? v : g(S),
                N = (L = L == h ? b : L) == b,
                W = (j = j == h ? b : j) == b,
                $ = L == j;
              if ($ && w(k)) {
                if (!w(S)) return !1;
                (E = !0), (N = !1);
              }
              if ($ && !N)
                return (
                  _ || (_ = new c()),
                  E || y(k) ? d(k, S, C, T, z, _) : p(k, S, L, C, T, z, _)
                );
              if (!(1 & C)) {
                var I = N && x.call(k, "__wrapped__"),
                  R = W && x.call(S, "__wrapped__");
                if (I || R) {
                  var H = I ? k.value() : k,
                    U = R ? S.value() : S;
                  return _ || (_ = new c()), z(H, U, C, T, _);
                }
              }
              return !!$ && (_ || (_ = new c()), f(k, S, C, T, z, _));
            };
          },
          8458: (a, l, u) => {
            var c = u(3560),
              d = u(5346),
              p = u(3218),
              f = u(346),
              g = /^\[object .+?Constructor\]$/,
              m = Function.prototype,
              w = Object.prototype,
              y = m.toString,
              h = w.hasOwnProperty,
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
            a.exports = function (b) {
              return !(!p(b) || d(b)) && (c(b) ? v : g).test(f(b));
            };
          },
          8749: (a, l, u) => {
            var c = u(4239),
              d = u(1780),
              p = u(7005),
              f = {};
            (f["[object Float32Array]"] =
              f["[object Float64Array]"] =
              f["[object Int8Array]"] =
              f["[object Int16Array]"] =
              f["[object Int32Array]"] =
              f["[object Uint8Array]"] =
              f["[object Uint8ClampedArray]"] =
              f["[object Uint16Array]"] =
              f["[object Uint32Array]"] =
                !0),
              (f["[object Arguments]"] =
                f["[object Array]"] =
                f["[object ArrayBuffer]"] =
                f["[object Boolean]"] =
                f["[object DataView]"] =
                f["[object Date]"] =
                f["[object Error]"] =
                f["[object Function]"] =
                f["[object Map]"] =
                f["[object Number]"] =
                f["[object Object]"] =
                f["[object RegExp]"] =
                f["[object Set]"] =
                f["[object String]"] =
                f["[object WeakMap]"] =
                  !1),
              (a.exports = function (g) {
                return p(g) && d(g.length) && !!f[c(g)];
              });
          },
          280: (a, l, u) => {
            var c = u(5726),
              d = u(6916),
              p = Object.prototype.hasOwnProperty;
            a.exports = function (f) {
              if (!c(f)) return d(f);
              var g = [];
              for (var m in Object(f))
                p.call(f, m) && m != "constructor" && g.push(m);
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
              p = u(4757);
            a.exports = function (f, g, m, w, y, h) {
              var v = 1 & m,
                b = f.length,
                x = g.length;
              if (b != x && !(v && x > b)) return !1;
              var k = h.get(f),
                S = h.get(g);
              if (k && S) return k == g && S == f;
              var C = -1,
                T = !0,
                z = 2 & m ? new c() : void 0;
              for (h.set(f, g), h.set(g, f); ++C < b; ) {
                var _ = f[C],
                  E = g[C];
                if (w) var M = v ? w(E, _, C, g, f, h) : w(_, E, C, f, g, h);
                if (M !== void 0) {
                  if (M) continue;
                  T = !1;
                  break;
                }
                if (z) {
                  if (
                    !d(g, function (L, j) {
                      if (!p(z, j) && (_ === L || y(_, L, m, w, h)))
                        return z.push(j);
                    })
                  ) {
                    T = !1;
                    break;
                  }
                } else if (_ !== E && !y(_, E, m, w, h)) {
                  T = !1;
                  break;
                }
              }
              return h.delete(f), h.delete(g), T;
            };
          },
          8351: (a, l, u) => {
            var c = u(2705),
              d = u(1149),
              p = u(7813),
              f = u(7114),
              g = u(8776),
              m = u(1814),
              w = c ? c.prototype : void 0,
              y = w ? w.valueOf : void 0;
            a.exports = function (h, v, b, x, k, S, C) {
              switch (b) {
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
                  return p(+h, +v);
                case "[object Error]":
                  return h.name == v.name && h.message == v.message;
                case "[object RegExp]":
                case "[object String]":
                  return h == v + "";
                case "[object Map]":
                  var T = g;
                case "[object Set]":
                  var z = 1 & x;
                  if ((T || (T = m), h.size != v.size && !z)) return !1;
                  var _ = C.get(h);
                  if (_) return _ == v;
                  (x |= 2), C.set(h, v);
                  var E = f(T(h), T(v), x, k, S, C);
                  return C.delete(h), E;
                case "[object Symbol]":
                  if (y) return y.call(h) == y.call(v);
              }
              return !1;
            };
          },
          6096: (a, l, u) => {
            var c = u(8234),
              d = Object.prototype.hasOwnProperty;
            a.exports = function (p, f, g, m, w, y) {
              var h = 1 & g,
                v = c(p),
                b = v.length;
              if (b != c(f).length && !h) return !1;
              for (var x = b; x--; ) {
                var k = v[x];
                if (!(h ? k in f : d.call(f, k))) return !1;
              }
              var S = y.get(p),
                C = y.get(f);
              if (S && C) return S == f && C == p;
              var T = !0;
              y.set(p, f), y.set(f, p);
              for (var z = h; ++x < b; ) {
                var _ = p[(k = v[x])],
                  E = f[k];
                if (m) var M = h ? m(E, _, k, f, p, y) : m(_, E, k, p, f, y);
                if (!(M === void 0 ? _ === E || w(_, E, g, m, y) : M)) {
                  T = !1;
                  break;
                }
                z || (z = k == "constructor");
              }
              if (T && !z) {
                var L = p.constructor,
                  j = f.constructor;
                L == j ||
                  !("constructor" in p) ||
                  !("constructor" in f) ||
                  (typeof L == "function" &&
                    L instanceof L &&
                    typeof j == "function" &&
                    j instanceof j) ||
                  (T = !1);
              }
              return y.delete(p), y.delete(f), T;
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
              p = u(3674);
            a.exports = function (f) {
              return c(f, p, d);
            };
          },
          5050: (a, l, u) => {
            var c = u(7019);
            a.exports = function (d, p) {
              var f = d.__data__;
              return c(p) ? f[typeof p == "string" ? "string" : "hash"] : f.map;
            };
          },
          852: (a, l, u) => {
            var c = u(8458),
              d = u(7801);
            a.exports = function (p, f) {
              var g = d(p, f);
              return c(g) ? g : void 0;
            };
          },
          9607: (a, l, u) => {
            var c = u(2705),
              d = Object.prototype,
              p = d.hasOwnProperty,
              f = d.toString,
              g = c ? c.toStringTag : void 0;
            a.exports = function (m) {
              var w = p.call(m, g),
                y = m[g];
              try {
                m[g] = void 0;
                var h = !0;
              } catch {}
              var v = f.call(m);
              return h && (w ? (m[g] = y) : delete m[g]), v;
            };
          },
          9551: (a, l, u) => {
            var c = u(4963),
              d = u(479),
              p = Object.prototype.propertyIsEnumerable,
              f = Object.getOwnPropertySymbols,
              g = f
                ? function (m) {
                    return m == null
                      ? []
                      : ((m = Object(m)),
                        c(f(m), function (w) {
                          return p.call(m, w);
                        }));
                  }
                : d;
            a.exports = g;
          },
          4160: (a, l, u) => {
            var c = u(8552),
              d = u(7071),
              p = u(3818),
              f = u(8525),
              g = u(577),
              m = u(4239),
              w = u(346),
              y = "[object Map]",
              h = "[object Promise]",
              v = "[object Set]",
              b = "[object WeakMap]",
              x = "[object DataView]",
              k = w(c),
              S = w(d),
              C = w(p),
              T = w(f),
              z = w(g),
              _ = m;
            ((c && _(new c(new ArrayBuffer(1))) != x) ||
              (d && _(new d()) != y) ||
              (p && _(p.resolve()) != h) ||
              (f && _(new f()) != v) ||
              (g && _(new g()) != b)) &&
              (_ = function (E) {
                var M = m(E),
                  L = M == "[object Object]" ? E.constructor : void 0,
                  j = L ? w(L) : "";
                if (j)
                  switch (j) {
                    case k:
                      return x;
                    case S:
                      return y;
                    case C:
                      return h;
                    case T:
                      return v;
                    case z:
                      return b;
                  }
                return M;
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
            a.exports = function (p) {
              var f = this.__data__;
              if (c) {
                var g = f[p];
                return g === "__lodash_hash_undefined__" ? void 0 : g;
              }
              return d.call(f, p) ? f[p] : void 0;
            };
          },
          1327: (a, l, u) => {
            var c = u(4536),
              d = Object.prototype.hasOwnProperty;
            a.exports = function (p) {
              var f = this.__data__;
              return c ? f[p] !== void 0 : d.call(f, p);
            };
          },
          1866: (a, l, u) => {
            var c = u(4536);
            a.exports = function (d, p) {
              var f = this.__data__;
              return (
                (this.size += this.has(d) ? 0 : 1),
                (f[d] = c && p === void 0 ? "__lodash_hash_undefined__" : p),
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
              p = (c = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + c
                : "";
            a.exports = function (f) {
              return !!p && p in f;
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
            a.exports = function (p) {
              var f = this.__data__,
                g = c(f, p);
              return !(
                g < 0 ||
                (g == f.length - 1 ? f.pop() : d.call(f, g, 1), --this.size, 0)
              );
            };
          },
          2117: (a, l, u) => {
            var c = u(8470);
            a.exports = function (d) {
              var p = this.__data__,
                f = c(p, d);
              return f < 0 ? void 0 : p[f][1];
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
            a.exports = function (d, p) {
              var f = this.__data__,
                g = c(f, d);
              return (
                g < 0 ? (++this.size, f.push([d, p])) : (f[g][1] = p), this
              );
            };
          },
          4785: (a, l, u) => {
            var c = u(1989),
              d = u(8407),
              p = u(7071);
            a.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new c(),
                  map: new (p || d)(),
                  string: new c(),
                });
            };
          },
          1285: (a, l, u) => {
            var c = u(5050);
            a.exports = function (d) {
              var p = c(this, d).delete(d);
              return (this.size -= p ? 1 : 0), p;
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
            a.exports = function (d, p) {
              var f = c(this, d),
                g = f.size;
              return f.set(d, p), (this.size += f.size == g ? 0 : 1), this;
            };
          },
          8776: (a) => {
            a.exports = function (l) {
              var u = -1,
                c = Array(l.size);
              return (
                l.forEach(function (d, p) {
                  c[++u] = [p, d];
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
              p = d && a && !a.nodeType && a,
              f = p && p.exports === d && c.process,
              g = (function () {
                try {
                  return (
                    (p && p.require && p.require("util").types) ||
                    (f && f.binding && f.binding("util"))
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
              p = c || d || Function("return this")();
            a.exports = p;
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
              p = u(3369);
            a.exports = function (f, g) {
              var m = this.__data__;
              if (m instanceof c) {
                var w = m.__data__;
                if (!d || w.length < 199)
                  return w.push([f, g]), (this.size = ++m.size), this;
                m = this.__data__ = new p(w);
              }
              return m.set(f, g), (this.size = m.size), this;
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
              p = Object.prototype,
              f = p.hasOwnProperty,
              g = p.propertyIsEnumerable,
              m = c(
                (function () {
                  return arguments;
                })(),
              )
                ? c
                : function (w) {
                    return d(w) && f.call(w, "callee") && !g.call(w, "callee");
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
            a.exports = function (p) {
              return p != null && d(p.length) && !c(p);
            };
          },
          4144: (a, l, u) => {
            a = u.nmd(a);
            var c = u(5639),
              d = u(5062),
              p = l && !l.nodeType && l,
              f = p && a && !a.nodeType && a,
              g = f && f.exports === p ? c.Buffer : void 0,
              m = (g ? g.isBuffer : void 0) || d;
            a.exports = m;
          },
          8446: (a, l, u) => {
            var c = u(939);
            a.exports = function (d, p) {
              return c(d, p);
            };
          },
          3560: (a, l, u) => {
            var c = u(4239),
              d = u(3218);
            a.exports = function (p) {
              if (!d(p)) return !1;
              var f = c(p);
              return (
                f == "[object Function]" ||
                f == "[object GeneratorFunction]" ||
                f == "[object AsyncFunction]" ||
                f == "[object Proxy]"
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
              p = u(1167),
              f = p && p.isTypedArray,
              g = f ? d(f) : c;
            a.exports = g;
          },
          3674: (a, l, u) => {
            var c = u(4636),
              d = u(280),
              p = u(8612);
            a.exports = function (f) {
              return p(f) ? c(f) : d(f);
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
              var l, u, c, d, p, f;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (a.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((a.exports = function () {
                    return (l() - p) / 1e6;
                  }),
                  (u = process.hrtime),
                  (d = (l = function () {
                    var g;
                    return 1e9 * (g = u())[0] + g[1];
                  })()),
                  (f = 1e9 * process.uptime()),
                  (p = d - f))
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
                p = ["moz", "webkit"],
                f = "AnimationFrame",
                g = d["request" + f],
                m = d["cancel" + f] || d["cancelRequest" + f],
                w = 0;
              !g && w < p.length;
              w++
            )
              (g = d[p[w] + "Request" + f]),
                (m = d[p[w] + "Cancel" + f] || d[p[w] + "CancelRequest" + f]);
            if (!g || !m) {
              var y = 0,
                h = 0,
                v = [];
              (g = function (b) {
                if (v.length === 0) {
                  var x = c(),
                    k = Math.max(0, 16.666666666666668 - (x - y));
                  (y = k + x),
                    setTimeout(function () {
                      var S = v.slice(0);
                      v.length = 0;
                      for (var C = 0; C < S.length; C++)
                        if (!S[C].cancelled)
                          try {
                            S[C].callback(y);
                          } catch (T) {
                            setTimeout(function () {
                              throw T;
                            }, 0);
                          }
                    }, Math.round(k));
                }
                return v.push({ handle: ++h, callback: b, cancelled: !1 }), h;
              }),
                (m = function (b) {
                  for (var x = 0; x < v.length; x++)
                    v[x].handle === b && (v[x].cancelled = !0);
                });
            }
            (a.exports = function (b) {
              return g.call(d, b);
            }),
              (a.exports.cancel = function () {
                m.apply(d, arguments);
              }),
              (a.exports.polyfill = function (b) {
                b || (b = d),
                  (b.requestAnimationFrame = g),
                  (b.cancelAnimationFrame = m);
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
          function p(b) {
            return (
              (p =
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
              p(b)
            );
          }
          function f(b, x) {
            for (var k = 0; k < x.length; k++) {
              var S = x[k];
              (S.enumerable = S.enumerable || !1),
                (S.configurable = !0),
                "value" in S && (S.writable = !0),
                Object.defineProperty(b, y(S.key), S);
            }
          }
          function g(b, x) {
            return (
              (g = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (k, S) {
                    return (k.__proto__ = S), k;
                  }),
              g(b, x)
            );
          }
          function m(b) {
            if (b === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return b;
          }
          function w(b) {
            return (
              (w = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (x) {
                    return x.__proto__ || Object.getPrototypeOf(x);
                  }),
              w(b)
            );
          }
          function y(b) {
            var x = (function (k, S) {
              if (p(k) !== "object" || k === null) return k;
              var C = k[Symbol.toPrimitive];
              if (C !== void 0) {
                var T = C.call(k, "string");
                if (p(T) !== "object") return T;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(k);
            })(b);
            return p(x) === "symbol" ? x : String(x);
          }
          var h = (function (b) {
            (function (_, E) {
              if (typeof E != "function" && E !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (_.prototype = Object.create(E && E.prototype, {
                constructor: { value: _, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(_, "prototype", { writable: !1 }),
                E && g(_, E);
            })(z, b);
            var x,
              k,
              S,
              C,
              T =
                ((S = z),
                (C = (function () {
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
                    E = w(S);
                  if (C) {
                    var M = w(this).constructor;
                    _ = Reflect.construct(E, arguments, M);
                  } else _ = E.apply(this, arguments);
                  return (function (L, j) {
                    if (j && (p(j) === "object" || typeof j == "function"))
                      return j;
                    if (j !== void 0)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return m(L);
                  })(this, _);
                });
            function z() {
              var _, E, M, L;
              (function ($, I) {
                if (!($ instanceof I))
                  throw new TypeError("Cannot call a class as a function");
              })(this, z);
              for (
                var j = arguments.length, N = new Array(j), W = 0;
                W < j;
                W++
              )
                N[W] = arguments[W];
              return (
                (E = m((_ = T.call.apply(T, [this].concat(N))))),
                (L = { instance: null }),
                (M = y((M = "state"))) in E
                  ? Object.defineProperty(E, M, {
                      value: L,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (E[M] = L),
                _
              );
            }
            return (
              (x = z),
              (k = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var _ = this,
                      E = new u.default(this.typewriter, this.props.options);
                    this.setState({ instance: E }, function () {
                      var M = _.props.onInit;
                      M && M(E);
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
                      E = this.props.component;
                    return l().createElement(E, {
                      ref: function (M) {
                        return (_.typewriter = M);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && f(x.prototype, k),
              Object.defineProperty(x, "prototype", { writable: !1 }),
              z
            );
          })(a.Component);
          h.defaultProps = { component: "div" };
          const v = h;
        })(),
        o.default
      );
    })(),
  );
})(wy);
var E_ = wy.exports;
const C_ = Rs(E_);
function Jd({ isdark: t }) {
  return P.jsxs(T_, {
    id: "Home",
    children: [
      P.jsx(P_, {
        children: P.jsx(z_, {
          "data-aos": "zoom-in-right",
          children: P.jsx("div", {
            "data-aos": "zoom-in",
            children: P.jsx(O_, {
              src: "https://user-images.githubusercontent.com/85221003/156927272-0c54db85-436c-4e95-b0b9-9959978a1f5d.gif",
            }),
          }),
        }),
      }),
      P.jsx(M_, {
        children: P.jsxs(I_, {
          isdark: t,
          "data-aos": "zoom-in-left",
          children: [
            P.jsx(R_, { isdark: t, children: "Hi There, I'm" }),
            P.jsx(L_, { isdark: t, children: "Harsh Raj Gupta" }),
            P.jsx(A_, {
              isdark: t,
              children: P.jsx("span", {
                children: P.jsx(C_, {
                  options: {
                    strings: [
                      "Competitive Programmer",
                      "MERN Stack Developer",
                      "SIH 2022 Finalist",
                      "ICPC 21-22 Regionalist",
                      "Specialist @CF",
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
      P.jsx(cl, { link: "#About-me", isdark: t }),
    ],
  });
}
Jd.defaultProps = { isdark: !0 };
Jd.propTypes = { isdark: Ne.bool };
const T_ = G.main`
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
  P_ = G.div`
    display: grid;
    overflow: hidden;
    width: 100%;
    @media (max-width: 1280px) and (min-width: 984px) {
        align-items: center;
    }
`,
  z_ = G.div`
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
  O_ = G.img`
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
  M_ = G.div`
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
  I_ = G.ul`
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
  R_ = G.h1`
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
  L_ = G.h3`
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
  A_ = G.h2`
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
  $_ = [
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
function Zd({ isdark: t }) {
  return P.jsxs(D_, {
    id: "About-me",
    children: [
      P.jsxs(N_, {
        isdark: t,
        children: [
          P.jsx(j_, { isdark: t, "data-aos": "fade-right", children: " Me" }),
          P.jsx(F_, {
            isdark: t,
            children: P.jsx("p", {
              children: $_.map((e, n) =>
                P.jsxs(
                  "span",
                  {
                    "data-aos": n & 1 ? "zoom-in-left" : "zoom-in-right",
                    children: [e, P.jsx("br", {})],
                  },
                  n,
                ),
              ),
            }),
          }),
          P.jsx(B_, {
            isdark: t,
            href: "#Home",
            "data-aos": "fade-left",
            children: "Harsh Raj Gupta",
          }),
        ],
      }),
      P.jsx(cl, { link: "#Portfolio", isdark: t }),
    ],
  });
}
Zd.defaultProps = { isdark: !0 };
Zd.propTypes = { isdark: Ne.bool };
const D_ = G.div`
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
  j_ = G.h1`
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
  N_ = G.div`
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
  F_ = G.div`
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
  B_ = G.a`
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
  W_ = "modulepreload",
  H_ = function (t) {
    return "/" + t;
  },
  vh = {},
  U_ = function (e, n, i) {
    if (!n || n.length === 0) return e();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = H_(s)), s in vh)) return;
        vh[s] = !0;
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
          ((u.rel = o ? "stylesheet" : W_),
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
  V_ = A.lazy(() => U_(() => Promise.resolve().then(() => S_), void 0)),
  wh = [
    { id: "", title: "Featured" },
    { id: "achievements", title: "Achievements" },
    { id: "project", title: "Projects" },
    { id: "certifications", title: "Certifications" },
    { id: "skills", title: "Skills" },
    { id: "languages", title: "Languages" },
  ];
function ef({ isdark: t }) {
  const [e, n] = A.useState(0);
  return P.jsx(A.Suspense, {
    fallback: P.jsx(vr, { text: "Loading" }),
    children: P.jsxs(G_, {
      id: "Portfolio",
      children: [
        P.jsx(q_, {
          isdark: t,
          "data-aos": "fade-left",
          children: "Portfolio",
        }),
        P.jsx(K_, {
          isdark: t,
          "data-aos": "fade-right",
          children: wh.map((i, r) =>
            P.jsx(
              "div",
              {
                className: e === r ? "active" : "",
                onClick: () => {
                  n(r);
                },
                children: P.jsx(Y_, { isdark: t, children: i.title }),
              },
              i.id,
            ),
          ),
        }),
        P.jsx(V_, { selector: wh[e].id, isdark: t }),
        P.jsx(cl, { link: "#Projects", isdark: t }),
      ],
    }),
  });
}
ef.propTypes = { isdark: Ne.bool };
ef.defaultProps = { isdark: !0 };
const G_ = G.main`
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
  q_ = G.h1`
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
  K_ = G.ul`
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
  Y_ = G.li`
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
function bh(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function tf(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] > "u"
        ? (t[n] = e[n])
        : bh(e[n]) &&
          bh(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          tf(t[n], e[n]);
    });
}
const by = {
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
function cn() {
  const t = typeof document < "u" ? document : {};
  return tf(t, by), t;
}
const Q_ = {
  document: by,
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
function Pt() {
  const t = typeof window < "u" ? window : {};
  return tf(t, Q_), t;
}
function X_(t) {
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
function Oc(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function Sa() {
  return Date.now();
}
function J_(t) {
  const e = Pt();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function Z_(t, e) {
  e === void 0 && (e = "x");
  const n = Pt();
  let i, r, s;
  const o = J_(t);
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
function yo(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function e5(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function wt() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !e5(i)) {
      const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = r.length; s < o; s += 1) {
        const a = r[s],
          l = Object.getOwnPropertyDescriptor(i, a);
        l !== void 0 &&
          l.enumerable &&
          (yo(t[a]) && yo(i[a])
            ? i[a].__swiper__
              ? (t[a] = i[a])
              : wt(t[a], i[a])
            : !yo(t[a]) && yo(i[a])
            ? ((t[a] = {}), i[a].__swiper__ ? (t[a] = i[a]) : wt(t[a], i[a]))
            : (t[a] = i[a]));
      }
    }
  }
  return t;
}
function vo(t, e, n) {
  t.style.setProperty(e, n);
}
function xy(t) {
  let { swiper: e, targetPosition: n, side: i } = t;
  const r = Pt(),
    s = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (p, f) => (u === "next" && p >= f) || (u === "prev" && p <= f),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const p = Math.max(Math.min((a - o) / l, 1), 0),
        f = 0.5 - Math.cos(p * Math.PI) / 2;
      let g = s + f * (n - s);
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
function sn(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((n) => n.matches(e));
}
function Sy(t, e) {
  e === void 0 && (e = []);
  const n = document.createElement(t);
  return n.classList.add(...(Array.isArray(e) ? e : [e])), n;
}
function t5(t, e) {
  const n = [];
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i);
  }
  return n;
}
function n5(t, e) {
  const n = [];
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i);
  }
  return n;
}
function Fn(t, e) {
  return Pt().getComputedStyle(t, null).getPropertyValue(e);
}
function ka(t) {
  let e = t,
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function ky(t, e) {
  const n = [];
  let i = t.parentElement;
  for (; i; ) e ? i.matches(e) && n.push(i) : n.push(i), (i = i.parentElement);
  return n;
}
function Mc(t, e, n) {
  const i = Pt();
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
let tu;
function i5() {
  const t = Pt(),
    e = cn();
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
function _y() {
  return tu || (tu = i5()), tu;
}
let nu;
function r5(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const n = _y(),
    i = Pt(),
    r = i.navigator.platform,
    s = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = i.screen.width,
    l = i.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = r === "Win32";
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
    u && !f && ((o.os = "android"), (o.android = !0)),
    (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function s5(t) {
  return t === void 0 && (t = {}), nu || (nu = r5(t)), nu;
}
let iu;
function o5() {
  const t = Pt();
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
function a5() {
  return iu || (iu = o5()), iu;
}
function l5(t) {
  let { swiper: e, on: n, emit: i } = t;
  const r = Pt();
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
            const { width: p, height: f } = e;
            let g = p,
              m = f;
            d.forEach((w) => {
              let { contentBoxSize: y, contentRect: h, target: v } = w;
              (v && v !== e.el) ||
                ((g = h ? h.width : (y[0] || y).inlineSize),
                (m = h ? h.height : (y[0] || y).blockSize));
            }),
              (g !== p || m !== f) && a();
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
function u5(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t;
  const s = [],
    o = Pt(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        f = new p((g) => {
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
      f.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(f);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = ky(e.el);
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
var c5 = {
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
function d5() {
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
        parseInt(Fn(i, "padding-left") || 0, 10) -
        parseInt(Fn(i, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Fn(i, "padding-top") || 0, 10) -
        parseInt(Fn(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, {
        width: e,
        height: n,
        size: t.isHorizontal() ? e : n,
      }));
}
function f5() {
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
  function n(_, E) {
    return parseFloat(_.getPropertyValue(e(E)) || 0);
  }
  const i = t.params,
    { wrapperEl: r, slidesEl: s, size: o, rtlTranslate: a, wrongRTL: l } = t,
    u = t.virtual && i.virtual.enabled,
    c = u ? t.virtual.slides.length : t.slides.length,
    d = sn(s, `.${t.params.slideClass}, swiper-slide`),
    p = u ? t.virtual.slides.length : d.length;
  let f = [];
  const g = [],
    m = [];
  let w = i.slidesOffsetBefore;
  typeof w == "function" && (w = i.slidesOffsetBefore.call(t));
  let y = i.slidesOffsetAfter;
  typeof y == "function" && (y = i.slidesOffsetAfter.call(t));
  const h = t.snapGrid.length,
    v = t.slidesGrid.length;
  let b = i.spaceBetween,
    x = -w,
    k = 0,
    S = 0;
  if (typeof o > "u") return;
  typeof b == "string" && b.indexOf("%") >= 0
    ? (b = (parseFloat(b.replace("%", "")) / 100) * o)
    : typeof b == "string" && (b = parseFloat(b)),
    (t.virtualSize = -b),
    d.forEach((_) => {
      a ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (vo(r, "--swiper-centered-offset-before", ""),
      vo(r, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && t.grid;
  C && t.grid.initSlides(p);
  let T;
  const z =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (_) => typeof i.breakpoints[_].slidesPerView < "u",
    ).length > 0;
  for (let _ = 0; _ < p; _ += 1) {
    T = 0;
    let E;
    if (
      (d[_] && (E = d[_]),
      C && t.grid.updateSlide(_, E, p, e),
      !(d[_] && Fn(E, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        z && (d[_].style[e("width")] = "");
        const M = getComputedStyle(E),
          L = E.style.transform,
          j = E.style.webkitTransform;
        if (
          (L && (E.style.transform = "none"),
          j && (E.style.webkitTransform = "none"),
          i.roundLengths)
        )
          T = t.isHorizontal() ? Mc(E, "width", !0) : Mc(E, "height", !0);
        else {
          const N = n(M, "width"),
            W = n(M, "padding-left"),
            $ = n(M, "padding-right"),
            I = n(M, "margin-left"),
            R = n(M, "margin-right"),
            H = M.getPropertyValue("box-sizing");
          if (H && H === "border-box") T = N + I + R;
          else {
            const { clientWidth: U, offsetWidth: re } = E;
            T = N + W + $ + I + R + (re - U);
          }
        }
        L && (E.style.transform = L),
          j && (E.style.webkitTransform = j),
          i.roundLengths && (T = Math.floor(T));
      } else
        (T = (o - (i.slidesPerView - 1) * b) / i.slidesPerView),
          i.roundLengths && (T = Math.floor(T)),
          d[_] && (d[_].style[e("width")] = `${T}px`);
      d[_] && (d[_].swiperSlideSize = T),
        m.push(T),
        i.centeredSlides
          ? ((x = x + T / 2 + k / 2 + b),
            k === 0 && _ !== 0 && (x = x - o / 2 - b),
            _ === 0 && (x = x - o / 2 - b),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            i.roundLengths && (x = Math.floor(x)),
            S % i.slidesPerGroup === 0 && f.push(x),
            g.push(x))
          : (i.roundLengths && (x = Math.floor(x)),
            (S - Math.min(t.params.slidesPerGroupSkip, S)) %
              t.params.slidesPerGroup ===
              0 && f.push(x),
            g.push(x),
            (x = x + T + b)),
        (t.virtualSize += T + b),
        (k = T),
        (S += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, o) + y),
    a &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (r.style.width = `${t.virtualSize + b}px`),
    i.setWrapperSize && (r.style[e("width")] = `${t.virtualSize + b}px`),
    C && t.grid.updateWrapperSize(T, f, e),
    !i.centeredSlides)
  ) {
    const _ = [];
    for (let E = 0; E < f.length; E += 1) {
      let M = f[E];
      i.roundLengths && (M = Math.floor(M)),
        f[E] <= t.virtualSize - o && _.push(M);
    }
    (f = _),
      Math.floor(t.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(t.virtualSize - o);
  }
  if (u && i.loop) {
    const _ = m[0] + b;
    if (i.slidesPerGroup > 1) {
      const E = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup,
        ),
        M = _ * i.slidesPerGroup;
      for (let L = 0; L < E; L += 1) f.push(f[f.length - 1] + M);
    }
    for (let E = 0; E < t.virtual.slidesBefore + t.virtual.slidesAfter; E += 1)
      i.slidesPerGroup === 1 && f.push(f[f.length - 1] + _),
        g.push(g[g.length - 1] + _),
        (t.virtualSize += _);
  }
  if ((f.length === 0 && (f = [0]), b !== 0)) {
    const _ = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
    d.filter((E, M) =>
      !i.cssMode || i.loop ? !0 : M !== d.length - 1,
    ).forEach((E) => {
      E.style[_] = `${b}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let _ = 0;
    m.forEach((M) => {
      _ += M + (b || 0);
    }),
      (_ -= b);
    const E = _ - o;
    f = f.map((M) => (M <= 0 ? -w : M > E ? E + y : M));
  }
  if (i.centerInsufficientSlides) {
    let _ = 0;
    if (
      (m.forEach((E) => {
        _ += E + (b || 0);
      }),
      (_ -= b),
      _ < o)
    ) {
      const E = (o - _) / 2;
      f.forEach((M, L) => {
        f[L] = M - E;
      }),
        g.forEach((M, L) => {
          g[L] = M + E;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: d,
      snapGrid: f,
      slidesGrid: g,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    vo(r, "--swiper-centered-offset-before", `${-f[0]}px`),
      vo(
        r,
        "--swiper-centered-offset-after",
        `${t.size / 2 - m[m.length - 1] / 2}px`,
      );
    const _ = -t.snapGrid[0],
      E = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((M) => M + _)),
      (t.slidesGrid = t.slidesGrid.map((M) => M + E));
  }
  if (
    (p !== c && t.emit("slidesLengthChange"),
    f.length !== h &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    g.length !== v && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const _ = `${i.containerModifierClass}backface-hidden`,
      E = t.el.classList.contains(_);
    p <= i.maxBackfaceHiddenSlides
      ? E || t.el.classList.add(_)
      : E && t.el.classList.remove(_);
  }
}
function p5(t) {
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
function h5() {
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
function m5(t) {
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
      p =
        (o - s[0] + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f = -(o - c),
      g = f + e.slidesSizesGrid[l];
    ((f >= 0 && f < e.size - 1) ||
      (g > 1 && g <= e.size) ||
      (f <= 0 && g >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(l),
      i[l].classList.add(n.slideVisibleClass)),
      (u.progress = r ? -d : d),
      (u.originalProgress = r ? -p : p);
  }
}
function g5(t) {
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
      p = e.slidesGrid[c],
      f = e.slidesGrid[d],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      m = Math.abs(t);
    m >= p ? (a = (m - p) / g) : (a = (m + g - f) / g), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function y5() {
  const t = this,
    { slides: e, params: n, slidesEl: i, activeIndex: r } = t,
    s = t.virtual && n.virtual.enabled,
    o = (l) => sn(i, `.${n.slideClass}${l}, swiper-slide${l}`)[0];
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
    let l = n5(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !l && (l = e[0]), l && l.classList.add(n.slideNextClass);
    let u = t5(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = e[e.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  t.emitSlidesClasses();
}
const Wo = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const n = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      i = e.closest(n());
    if (i) {
      const r = i.querySelector(`.${t.params.lazyPreloaderClass}`);
      r && r.remove();
    }
  },
  ru = (t, e) => {
    if (!t.slides[e]) return;
    const n = t.slides[e].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Ic = (t) => {
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
          a.includes(l.column) && ru(t, u);
        });
      return;
    }
    const s = r + i - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = r - e; o <= s + e; o += 1) {
        const a = ((o % n) + n) % n;
        (a < r || a > s) && ru(t, a);
      }
    else
      for (let o = Math.max(r - e, 0); o <= Math.min(s + e, n - 1); o += 1)
        o !== r && (o > s || o < r) && ru(t, o);
  };
function v5(t) {
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
function w5(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: s, realIndex: o, snapIndex: a } = e;
  let l = t,
    u;
  const c = (p) => {
    let f = p - e.virtual.slidesBefore;
    return (
      f < 0 && (f = e.virtual.slides.length + f),
      f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
      f
    );
  };
  if ((typeof l > "u" && (l = v5(e)), i.indexOf(n) >= 0)) u = i.indexOf(n);
  else {
    const p = Math.min(r.slidesPerGroupSkip, l);
    u = p + Math.floor((l - p) / r.slidesPerGroup);
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
    e.initialized && Ic(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    o !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function b5(t) {
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
var x5 = {
  updateSize: d5,
  updateSlides: f5,
  updateAutoHeight: p5,
  updateSlidesOffset: h5,
  updateSlidesProgress: m5,
  updateProgress: g5,
  updateSlidesClasses: y5,
  updateActiveIndex: w5,
  updateClickedSlide: b5,
};
function S5(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: n, rtlTranslate: i, translate: r, wrapperEl: s } = e;
  if (n.virtualTranslate) return i ? -r : r;
  if (n.cssMode) return r;
  let o = Z_(s, t);
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function k5(t, e) {
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
function _5() {
  return -this.snapGrid[0];
}
function E5() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function C5(t, e, n, i, r) {
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
          xy({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
            (s.onTranslateToWrapperTransitionEnd = function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
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
var T5 = {
  getTranslate: S5,
  setTranslate: k5,
  minTranslate: _5,
  maxTranslate: E5,
  translateTo: C5,
};
function P5(t, e) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${t}ms`),
    n.emit("setTransition", t, e);
}
function Ey(t) {
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
function z5(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: i } = n;
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    Ey({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function O5(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: i } = n;
  (n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      Ey({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
}
var M5 = { setTransition: P5, transitionStart: z5, transitionEnd: O5 };
function I5(t, e, n, i, r) {
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
    rtlTranslate: p,
    wrapperEl: f,
    enabled: g,
  } = s;
  if ((s.animating && a.preventInteractionOnTransition) || (!g && !i && !r))
    return !1;
  const m = Math.min(s.params.slidesPerGroupSkip, o);
  let w = m + Math.floor((o - m) / s.params.slidesPerGroup);
  w >= l.length && (w = l.length - 1);
  const y = -l[w];
  if (a.normalizeSlideIndex)
    for (let v = 0; v < u.length; v += 1) {
      const b = -Math.floor(y * 100),
        x = Math.floor(u[v] * 100),
        k = Math.floor(u[v + 1] * 100);
      typeof u[v + 1] < "u"
        ? b >= x && b < k - (k - x) / 2
          ? (o = v)
          : b >= x && b < k && (o = v + 1)
        : b >= x && (o = v);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (p
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
    (p && -y === s.translate) || (!p && y === s.translate))
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
      b = p ? y : -y;
    if (e === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[v ? "scrollLeft" : "scrollTop"] = b;
            }))
          : (f[v ? "scrollLeft" : "scrollTop"] = b),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          xy({ swiper: s, targetPosition: b, side: v ? "left" : "top" }), !0
        );
      f.scrollTo({ [v ? "left" : "top"]: b, behavior: "smooth" });
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
          (s.onSlideToWrapperTransitionEnd = function (b) {
            !s ||
              s.destroyed ||
              (b.target === this &&
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
function R5(t, e, n, i) {
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
function L5(t, e, n) {
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
function A5(t, e, n) {
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
  function p(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const f = p(d),
    g = s.map((y) => p(y));
  let m = s[g.indexOf(f) - 1];
  if (typeof m > "u" && r.cssMode) {
    let y;
    s.forEach((h, v) => {
      f >= h && (y = v);
    }),
      typeof y < "u" && (m = s[y > 0 ? y - 1 : y]);
  }
  let w = 0;
  if (
    (typeof m < "u" &&
      ((w = o.indexOf(m)),
      w < 0 && (w = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((w = w - i.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const y =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(y, t, e, n);
  }
  return i.slideTo(w, t, e, n);
}
function $5(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this;
  return i.slideTo(i.activeIndex, t, e, n);
}
function D5(t, e, n, i) {
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
function j5() {
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
              sn(n, `${o}[data-swiper-slide-index="${s}"]`)[0],
            )),
            Oc(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r)
        : r > t.slides.length - i
        ? (t.loopFix(),
          (r = t.getSlideIndex(
            sn(n, `${o}[data-swiper-slide-index="${s}"]`)[0],
          )),
          Oc(() => {
            t.slideTo(r);
          }))
        : t.slideTo(r);
  } else t.slideTo(r);
}
var N5 = {
  slideTo: I5,
  slideToLoop: R5,
  slideNext: L5,
  slidePrev: A5,
  slideReset: $5,
  slideToClosest: D5,
  slideToClickedSlide: j5,
};
function F5(t) {
  const e = this,
    { params: n, slidesEl: i } = e;
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
  sn(i, `.${n.slideClass}, swiper-slide`).forEach((s, o) => {
    s.setAttribute("data-swiper-slide-index", o);
  }),
    e.loopFix({
      slideRealIndex: t,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function B5(t) {
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
    slidesEl: p,
    params: f,
  } = l;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && f.virtual.enabled)
  ) {
    n &&
      (!f.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : f.centeredSlides && l.snapIndex < f.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit("loopFix");
    return;
  }
  const g =
    f.slidesPerView === "auto"
      ? l.slidesPerViewDynamic()
      : Math.ceil(parseFloat(f.slidesPerView, 10));
  let m = f.loopedSlides || g;
  m % f.slidesPerGroup !== 0 &&
    (m += f.slidesPerGroup - (m % f.slidesPerGroup)),
    (l.loopedSlides = m);
  const w = [],
    y = [];
  let h = l.activeIndex;
  typeof s > "u"
    ? (s = l.getSlideIndex(
        l.slides.filter((S) => S.classList.contains(f.slideActiveClass))[0],
      ))
    : (h = s);
  const v = i === "next" || !i,
    b = i === "prev" || !i;
  let x = 0,
    k = 0;
  if (s < m) {
    x = Math.max(m - s, f.slidesPerGroup);
    for (let S = 0; S < m - s; S += 1) {
      const C = S - Math.floor(S / u.length) * u.length;
      w.push(u.length - C - 1);
    }
  } else if (s > l.slides.length - m * 2) {
    k = Math.max(s - (l.slides.length - m * 2), f.slidesPerGroup);
    for (let S = 0; S < k; S += 1) {
      const C = S - Math.floor(S / u.length) * u.length;
      y.push(C);
    }
  }
  if (
    (b &&
      w.forEach((S) => {
        (l.slides[S].swiperLoopMoveDOM = !0),
          p.prepend(l.slides[S]),
          (l.slides[S].swiperLoopMoveDOM = !1);
      }),
    v &&
      y.forEach((S) => {
        (l.slides[S].swiperLoopMoveDOM = !0),
          p.append(l.slides[S]),
          (l.slides[S].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    f.slidesPerView === "auto" && l.updateSlides(),
    f.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (w.length > 0 && b)
      if (typeof e > "u") {
        const S = l.slidesGrid[h],
          T = l.slidesGrid[h + x] - S;
        a
          ? l.setTranslate(l.translate - T)
          : (l.slideTo(h + x, 0, !1, !0),
            r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += T));
      } else r && l.slideToLoop(e, 0, !1, !0);
    else if (y.length > 0 && v)
      if (typeof e > "u") {
        const S = l.slidesGrid[h],
          T = l.slidesGrid[h - k] - S;
        a
          ? l.setTranslate(l.translate - T)
          : (l.slideTo(h - k, 0, !1, !0),
            r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += T));
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
      ? l.controller.control.forEach((C) => {
          !C.destroyed && C.params.loop && C.loopFix(S);
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix(S);
  }
  l.emit("loopFix");
}
function W5() {
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
var H5 = { loopCreate: F5, loopFix: B5, loopDestroy: W5 };
function U5(t) {
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
function V5() {
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
var G5 = { setGrabCursor: U5, unsetGrabCursor: V5 };
function q5(t, e) {
  e === void 0 && (e = this);
  function n(i) {
    if (!i || i === cn() || i === Pt()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(t);
    return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
  }
  return n(e);
}
function K5(t) {
  const e = this,
    n = cn(),
    i = Pt(),
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
  const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (f ? q5(p, u) : u.closest(p))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
  (o.currentX = l.pageX), (o.currentY = l.pageY);
  const g = o.currentX,
    m = o.currentY,
    w = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (w && (g <= y || g >= i.innerWidth - y))
    if (w === "prevent") t.preventDefault();
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
    (r.touchStartTime = Sa()),
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
function Y5(t) {
  const e = cn(),
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
    p = c.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = d), (s.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, {
          startX: d,
          startY: p,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: p,
        }),
        (i.touchStartTime = Sa()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (p < s.startY && n.translate <= n.maxTranslate()) ||
        (p > s.startY && n.translate >= n.minTranslate())
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
  (s.currentX = d), (s.currentY = p);
  const f = s.currentX - s.startX,
    g = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let k;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : f * f + g * g >= 25 &&
        ((k = (Math.atan2(Math.abs(g), Math.abs(f)) * 180) / Math.PI),
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
  let m = n.isHorizontal() ? f : g,
    w = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  r.oneWayMovement &&
    ((m = Math.abs(m) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
    (s.diff = m),
    (m *= r.touchRatio),
    o && ((m = -m), (w = -w));
  const y = n.touchesDirection;
  (n.swipeDirection = m > 0 ? "prev" : "next"),
    (n.touchesDirection = w > 0 ? "prev" : "next");
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
  let b = !0,
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
          ((b = !1),
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
          ((b = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - m) ** x))),
    b && (l.preventedByNestedSwiper = !0),
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
function Q5(t) {
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
  const c = Sa(),
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
    ((n.lastClickTime = Sa()),
    Oc(() => {
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
  let p;
  if (
    (r.followFinger
      ? (p = o ? e.translate : -e.translate)
      : (p = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (r.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let f = 0,
    g = e.slidesSizesGrid[0];
  for (
    let v = 0;
    v < a.length;
    v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const b = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof a[v + b] < "u"
      ? p >= a[v] && p < a[v + b] && ((f = v), (g = a[v + b] - a[v]))
      : p >= a[v] && ((f = v), (g = a[a.length - 1] - a[a.length - 2]));
  }
  let m = null,
    w = null;
  r.rewind &&
    (e.isBeginning
      ? (w =
          r.virtual && r.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (m = 0));
  const y = (p - a[f]) / g,
    h = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (d > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (y >= r.longSwipesRatio
        ? e.slideTo(r.rewind && e.isEnd ? m : f + h)
        : e.slideTo(f)),
      e.swipeDirection === "prev" &&
        (y > 1 - r.longSwipesRatio
          ? e.slideTo(f + h)
          : w !== null && y < 0 && Math.abs(y) > r.longSwipesRatio
          ? e.slideTo(w)
          : e.slideTo(f));
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl)
      ? u.target === e.navigation.nextEl
        ? e.slideTo(f + h)
        : e.slideTo(f)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : f + h),
        e.swipeDirection === "prev" && e.slideTo(w !== null ? w : f));
  }
}
function xh() {
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
function X5(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function J5() {
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
function Z5(t) {
  const e = this;
  Wo(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
let Sh = !1;
function eE() {}
const Cy = (t, e) => {
  const n = cn(),
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
          xh,
          !0,
        )
      : t[u]("observerUpdate", xh, !0),
    r[l]("load", t.onLoad, { capture: !0 });
};
function tE() {
  const t = this,
    e = cn(),
    { params: n } = t;
  (t.onTouchStart = K5.bind(t)),
    (t.onTouchMove = Y5.bind(t)),
    (t.onTouchEnd = Q5.bind(t)),
    n.cssMode && (t.onScroll = J5.bind(t)),
    (t.onClick = X5.bind(t)),
    (t.onLoad = Z5.bind(t)),
    Sh || (e.addEventListener("touchstart", eE), (Sh = !0)),
    Cy(t, "on");
}
function nE() {
  Cy(this, "off");
}
var iE = { attachEvents: tE, detachEvents: nE };
const kh = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function rE() {
  const t = this,
    { realIndex: e, initialized: n, params: i, el: r } = t,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || t.originalParams,
    u = kh(t, i),
    c = kh(t, l),
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
      const w = i[m] && i[m].enabled,
        y = l[m] && l[m].enabled;
      w && !y && t[m].disable(), !w && y && t[m].enable();
    });
  const p = l.direction && l.direction !== i.direction,
    f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
  p && n && t.changeDirection(), wt(t.params, l);
  const g = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    d && !g ? t.disable() : !d && g && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", l),
    f && n && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
    t.emit("breakpoint", l);
}
function sE(t, e, n) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !n))) return;
  let i = !1;
  const r = Pt(),
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
var oE = { setBreakpoint: rE, getBreakpoint: sE };
function aE(t, e) {
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
function lE() {
  const t = this,
    { classNames: e, params: n, rtl: i, el: r, device: s } = t,
    o = aE(
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
function uE() {
  const t = this,
    { el: e, classNames: n } = t;
  e.classList.remove(...n), t.emitContainerClasses();
}
var cE = { addClasses: lE, removeClasses: uE };
function dE() {
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
var fE = { checkOverflow: dE },
  _h = {
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
function pE(t, e) {
  return function (i) {
    i === void 0 && (i = {});
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      wt(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        t[r] === !0 &&
        (t[r] = { auto: !0 }),
      !(r in t && "enabled" in s))
    ) {
      wt(e, i);
      return;
    }
    t[r] === !0 && (t[r] = { enabled: !0 }),
      typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      wt(e, i);
  };
}
const su = {
    eventsEmitter: c5,
    update: x5,
    translate: T5,
    transition: M5,
    slide: N5,
    loop: H5,
    grabCursor: G5,
    events: iE,
    breakpoints: oE,
    checkOverflow: fE,
    classes: cE,
  },
  ou = {};
let Ms = class pn {
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
      (n = wt({}, n)),
      e && !n.el && (n.el = e);
    const o = cn();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = wt({}, n, { el: d });
          c.push(new pn(p));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = _y()),
      (a.device = s5({ userAgent: n.userAgent })),
      (a.browser = a5()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: pE(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = wt({}, _h, l);
    return (
      (a.params = wt({}, u, ou, n)),
      (a.originalParams = wt({}, a.params)),
      (a.passedParams = wt({}, n)),
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
      r = sn(n, `.${i.slideClass}, swiper-slide`),
      s = ka(r[0]);
    return ka(e) - s;
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
    e.slides = sn(n, `.${i.slideClass}, swiper-slide`);
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
        p;
      for (let f = u + 1; f < s.length; f += 1)
        s[f] &&
          !p &&
          ((d += s[f].swiperSlideSize), (c += 1), d > l && (p = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        s[f] &&
          !p &&
          ((d += s[f].swiperSlideSize), (c += 1), d > l && (p = !0));
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
        o.complete && Wo(e, o);
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
        : sn(i, r())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = Sy("div", n.params.wrapperClass)),
        i.append(o),
        sn(i, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: o,
        slidesEl: n.isElement ? i.parentNode.host : o,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Fn(i, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || Fn(i, "direction") === "rtl"),
        wrongRTL: Fn(o, "display") === "-webkit-box",
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
            ? Wo(n, r)
            : r.addEventListener("load", (s) => {
                Wo(n, s.target);
              });
        }),
        Ic(n),
        (n.initialized = !0),
        Ic(n),
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
        e !== !1 && ((i.el.swiper = null), X_(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    wt(ou, e);
  }
  static get extendedDefaults() {
    return ou;
  }
  static get defaults() {
    return _h;
  }
  static installModule(e) {
    pn.prototype.__modules__ || (pn.prototype.__modules__ = []);
    const n = pn.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => pn.installModule(n)), pn)
      : (pn.installModule(e), pn);
  }
};
Object.keys(su).forEach((t) => {
  Object.keys(su[t]).forEach((e) => {
    Ms.prototype[e] = su[t][e];
  });
});
Ms.use([l5, u5]);
const Ty = [
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
function Si(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function Bn(t, e) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : Si(e[i]) && Si(t[i]) && Object.keys(e[i]).length > 0
        ? e[i].__swiper__
          ? (t[i] = e[i])
          : Bn(t[i], e[i])
        : (t[i] = e[i]);
    });
}
function Py(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function zy(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function Oy(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function My(t) {
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
function hE(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function mE(t) {
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
      (T) => T !== "children" && T !== "direction" && T !== "wrapperClass",
    ),
    {
      params: c,
      pagination: d,
      navigation: p,
      scrollbar: f,
      virtual: g,
      thumbs: m,
    } = e;
  let w, y, h, v, b, x, k, S;
  r.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (w = !0),
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
      f &&
      !f.el &&
      (v = !0),
    r.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || o) &&
      (i.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (b = !0);
  const C = (T) => {
    e[T] &&
      (e[T].destroy(),
      T === "navigation"
        ? (e.isElement && (e[T].prevEl.remove(), e[T].nextEl.remove()),
          (c[T].prevEl = void 0),
          (c[T].nextEl = void 0),
          (e[T].prevEl = void 0),
          (e[T].nextEl = void 0))
        : (e.isElement && e[T].el.remove(),
          (c[T].el = void 0),
          (e[T].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (c.loop && !i.loop ? (x = !0) : !c.loop && i.loop ? (k = !0) : (S = !0)),
    u.forEach((T) => {
      if (Si(c[T]) && Si(i[T]))
        Bn(c[T], i[T]),
          (T === "navigation" || T === "pagination" || T === "scrollbar") &&
            "enabled" in i[T] &&
            !i[T].enabled &&
            C(T);
      else {
        const z = i[T];
        (z === !0 || z === !1) &&
        (T === "navigation" || T === "pagination" || T === "scrollbar")
          ? z === !1 && C(T)
          : (c[T] = i[T]);
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
    w && m.init() && m.update(!0),
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
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    b &&
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
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    r.includes("direction") && e.changeDirection(i.direction, !1),
    (x || S) && e.loopDestroy(),
    (k || S) && e.loopCreate(),
    e.update();
}
function gE(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const n = { on: {} },
    i = {},
    r = {};
  Bn(n, Ms.defaults),
    Bn(n, Ms.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const s = {},
    o = Ty.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, t);
  return (
    Object.keys(a).forEach((l) => {
      typeof t[l] > "u" ||
        (o.indexOf(l) >= 0
          ? Si(t[l])
            ? ((n[l] = {}), (r[l] = {}), Bn(n[l], t[l]), Bn(r[l], t[l]))
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
function yE(t, e) {
  let {
    el: n,
    nextEl: i,
    prevEl: r,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a,
  } = t;
  Py(e) &&
    i &&
    r &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = r),
    (a.originalParams.navigation.prevEl = r)),
    zy(e) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    Oy(e) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function vE(t, e, n, i, r) {
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
    Ty.filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in t && l in e)
          if (Si(t[l]) && Si(e[l])) {
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
const wE = (t) => {
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
function _a() {
  return (
    (_a = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    _a.apply(this, arguments)
  );
}
function Iy(t) {
  return (
    t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
  );
}
function Ry(t) {
  const e = [];
  return (
    Y.Children.toArray(t).forEach((n) => {
      Iy(n)
        ? e.push(n)
        : n.props &&
          n.props.children &&
          Ry(n.props.children).forEach((i) => e.push(i));
    }),
    e
  );
}
function bE(t) {
  const e = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Y.Children.toArray(t).forEach((i) => {
      if (Iy(i)) e.push(i);
      else if (i.props && i.props.slot && n[i.props.slot])
        n[i.props.slot].push(i);
      else if (i.props && i.props.children) {
        const r = Ry(i.props.children);
        r.length > 0 ? r.forEach((s) => e.push(s)) : n["container-end"].push(i);
      } else n["container-end"].push(i);
    }),
    { slides: e, slots: n }
  );
}
function xE(t, e, n) {
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
    Y.cloneElement(c, { swiper: t, style: r, key: `slide-${d}` }),
  );
}
function os(t, e) {
  return typeof window > "u" ? A.useEffect(t, e) : A.useLayoutEffect(t, e);
}
const Eh = A.createContext(null),
  SE = A.createContext(null),
  Ly = A.forwardRef(function (t, e) {
    let {
        className: n,
        tag: i = "div",
        wrapperTag: r = "div",
        children: s,
        onSwiper: o,
        ...a
      } = t === void 0 ? {} : t,
      l = !1;
    const [u, c] = A.useState("swiper"),
      [d, p] = A.useState(null),
      [f, g] = A.useState(!1),
      m = A.useRef(!1),
      w = A.useRef(null),
      y = A.useRef(null),
      h = A.useRef(null),
      v = A.useRef(null),
      b = A.useRef(null),
      x = A.useRef(null),
      k = A.useRef(null),
      S = A.useRef(null),
      { params: C, passedParams: T, rest: z, events: _ } = gE(a),
      { slides: E, slots: M } = bE(s),
      L = () => {
        g(!f);
      };
    Object.assign(C.on, {
      _containerClasses(I, R) {
        c(R);
      },
    });
    const j = () => {
      Object.assign(C.on, _), (l = !0);
      const I = { ...C };
      if (
        (delete I.wrapperClass,
        (y.current = new Ms(I)),
        y.current.virtual && y.current.params.virtual.enabled)
      ) {
        y.current.virtual.slides = E;
        const R = {
          cache: !1,
          slides: E,
          renderExternal: p,
          renderExternalUpdate: !1,
        };
        Bn(y.current.params.virtual, R),
          Bn(y.current.originalParams.virtual, R);
      }
    };
    w.current || j(), y.current && y.current.on("_beforeBreakpoint", L);
    const N = () => {
        l ||
          !_ ||
          !y.current ||
          Object.keys(_).forEach((I) => {
            y.current.on(I, _[I]);
          });
      },
      W = () => {
        !_ ||
          !y.current ||
          Object.keys(_).forEach((I) => {
            y.current.off(I, _[I]);
          });
      };
    A.useEffect(() => () => {
      y.current && y.current.off("_beforeBreakpoint", L);
    }),
      A.useEffect(() => {
        !m.current &&
          y.current &&
          (y.current.emitSlidesClasses(), (m.current = !0));
      }),
      os(() => {
        if ((e && (e.current = w.current), !!w.current))
          return (
            y.current.destroyed && j(),
            yE(
              {
                el: w.current,
                nextEl: b.current,
                prevEl: x.current,
                paginationEl: k.current,
                scrollbarEl: S.current,
                swiper: y.current,
              },
              C,
            ),
            o && o(y.current),
            () => {
              y.current && !y.current.destroyed && y.current.destroy(!0, !1);
            }
          );
      }, []),
      os(() => {
        N();
        const I = vE(T, h.current, E, v.current, (R) => R.key);
        return (
          (h.current = T),
          (v.current = E),
          I.length &&
            y.current &&
            !y.current.destroyed &&
            mE({
              swiper: y.current,
              slides: E,
              passedParams: T,
              changedParams: I,
              nextEl: b.current,
              prevEl: x.current,
              scrollbarEl: S.current,
              paginationEl: k.current,
            }),
          () => {
            W();
          }
        );
      }),
      os(() => {
        wE(y.current);
      }, [d]);
    function $() {
      return C.virtual
        ? xE(y.current, E, d)
        : E.map((I, R) =>
            Y.cloneElement(I, { swiper: y.current, swiperSlideIndex: R }),
          );
    }
    return Y.createElement(
      i,
      _a({ ref: w, className: My(`${u}${n ? ` ${n}` : ""}`) }, z),
      Y.createElement(
        SE.Provider,
        { value: y.current },
        M["container-start"],
        Y.createElement(
          r,
          { className: hE(C.wrapperClass) },
          M["wrapper-start"],
          $(),
          M["wrapper-end"],
        ),
        Py(C) &&
          Y.createElement(
            Y.Fragment,
            null,
            Y.createElement("div", { ref: x, className: "swiper-button-prev" }),
            Y.createElement("div", { ref: b, className: "swiper-button-next" }),
          ),
        Oy(C) &&
          Y.createElement("div", { ref: S, className: "swiper-scrollbar" }),
        zy(C) &&
          Y.createElement("div", { ref: k, className: "swiper-pagination" }),
        M["container-end"],
      ),
    );
  });
Ly.displayName = "Swiper";
const Ay = A.forwardRef(function (t, e) {
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
  const d = A.useRef(null),
    [p, f] = A.useState("swiper-slide"),
    [g, m] = A.useState(!1);
  function w(b, x, k) {
    x === d.current && f(k);
  }
  os(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      e && (e.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        p !== "swiper-slide" && f("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", w),
        () => {
          s && s.off("_slideClass", w);
        }
      );
    }
  }),
    os(() => {
      s && d.current && !s.destroyed && f(s.getSlideClasses(d.current));
    }, [s]);
  const y = {
      isActive: p.indexOf("swiper-slide-active") >= 0,
      isVisible: p.indexOf("swiper-slide-visible") >= 0,
      isPrev: p.indexOf("swiper-slide-prev") >= 0,
      isNext: p.indexOf("swiper-slide-next") >= 0,
    },
    h = () => (typeof i == "function" ? i(y) : i),
    v = () => {
      m(!0);
    };
  return Y.createElement(
    n,
    _a(
      {
        ref: d,
        className: My(`${p}${r ? ` ${r}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: v,
      },
      c,
    ),
    o &&
      Y.createElement(
        Eh.Provider,
        { value: y },
        Y.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          h(),
          a &&
            !g &&
            Y.createElement("div", { className: "swiper-lazy-preloader" }),
        ),
      ),
    !o &&
      Y.createElement(
        Eh.Provider,
        { value: y },
        h(),
        a &&
          !g &&
          Y.createElement("div", { className: "swiper-lazy-preloader" }),
      ),
  );
});
Ay.displayName = "SwiperSlide";
function $y(t, e, n, i) {
  return (
    t.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let s = sn(t.el, `.${i[r]}`)[0];
          s || ((s = Sy("div", i[r])), (s.className = i[r]), t.el.append(s)),
            (n[r] = s),
            (e[r] = s);
        }
      }),
    n
  );
}
function kE(t) {
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
  const s = (m) => (Array.isArray(m) || (m = [m].filter((w) => !!w)), m);
  function o(m) {
    let w;
    return m &&
      typeof m == "string" &&
      e.isElement &&
      ((w = e.el.querySelector(m)), w)
      ? w
      : (m &&
          (typeof m == "string" && (w = [...document.querySelectorAll(m)]),
          e.params.uniqueNavElements &&
            typeof m == "string" &&
            w.length > 1 &&
            e.el.querySelectorAll(m).length === 1 &&
            (w = e.el.querySelector(m))),
        m && !w ? m : w);
  }
  function a(m, w) {
    const y = e.params.navigation;
    (m = s(m)),
      m.forEach((h) => {
        h &&
          (h.classList[w ? "add" : "remove"](...y.disabledClass.split(" ")),
          h.tagName === "BUTTON" && (h.disabled = w),
          e.params.watchOverflow &&
            e.enabled &&
            h.classList[e.isLocked ? "add" : "remove"](y.lockClass));
      });
  }
  function l() {
    const { nextEl: m, prevEl: w } = e.navigation;
    if (e.params.loop) {
      a(w, !1), a(m, !1);
      return;
    }
    a(w, e.isBeginning && !e.params.rewind), a(m, e.isEnd && !e.params.rewind);
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
      ((e.params.navigation = $y(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return;
    let w = o(m.nextEl),
      y = o(m.prevEl);
    Object.assign(e.navigation, { nextEl: w, prevEl: y }),
      (w = s(w)),
      (y = s(y));
    const h = (v, b) => {
      v && v.addEventListener("click", b === "next" ? c : u),
        !e.enabled && v && v.classList.add(...m.lockClass.split(" "));
    };
    w.forEach((v) => h(v, "next")), y.forEach((v) => h(v, "prev"));
  }
  function p() {
    let { nextEl: m, prevEl: w } = e.navigation;
    (m = s(m)), (w = s(w));
    const y = (h, v) => {
      h.removeEventListener("click", v === "next" ? c : u),
        h.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    m.forEach((h) => y(h, "next")), w.forEach((h) => y(h, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? g() : (d(), l());
  }),
    i("toEdge fromEdge lock unlock", () => {
      l();
    }),
    i("destroy", () => {
      p();
    }),
    i("enable disable", () => {
      let { nextEl: m, prevEl: w } = e.navigation;
      (m = s(m)),
        (w = s(w)),
        [...m, ...w]
          .filter((y) => !!y)
          .forEach((y) =>
            y.classList[e.enabled ? "remove" : "add"](
              e.params.navigation.lockClass,
            ),
          );
    }),
    i("click", (m, w) => {
      let { nextEl: y, prevEl: h } = e.navigation;
      (y = s(y)), (h = s(h));
      const v = w.target;
      if (e.params.navigation.hideOnClick && !h.includes(v) && !y.includes(v)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === v || e.pagination.el.contains(v))
        )
          return;
        let b;
        y.length
          ? (b = y[0].classList.contains(e.params.navigation.hiddenClass))
          : h.length &&
            (b = h[0].classList.contains(e.params.navigation.hiddenClass)),
          r(b === !0 ? "navigationShow" : "navigationHide"),
          [...y, ...h]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(e.params.navigation.hiddenClass),
            );
      }
    });
  const f = () => {
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
        p();
    };
  Object.assign(e.navigation, {
    enable: f,
    disable: g,
    update: l,
    init: d,
    destroy: p,
  });
}
function Nr(t) {
  return (
    t === void 0 && (t = ""),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function _E(t) {
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
    const { bulletActiveClass: b } = e.params.pagination;
    h &&
      ((h = h[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
      h &&
        (h.classList.add(`${b}-${v}`),
        (h = h[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        h && h.classList.add(`${b}-${v}-${v}`)));
  }
  function d(h) {
    const v = h.target.closest(Nr(e.params.pagination.bulletClass));
    if (!v) return;
    h.preventDefault();
    const b = ka(v) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === b) return;
      const x = e.getSlideIndexByData(b),
        k = e.getSlideIndexByData(e.realIndex);
      x > e.slides.length - e.loopedSlides &&
        e.loopFix({
          direction: x > k ? "next" : "prev",
          activeSlideIndex: x,
          slideTo: !1,
        }),
        e.slideToLoop(b);
    } else e.slideTo(b);
  }
  function p() {
    const h = e.rtl,
      v = e.params.pagination;
    if (u()) return;
    let b = e.pagination.el;
    b = l(b);
    let x, k;
    const S =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      C = e.params.loop
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
      const T = e.pagination.bullets;
      let z, _, E;
      if (
        (v.dynamicBullets &&
          ((o = Mc(T[0], e.isHorizontal() ? "width" : "height", !0)),
          b.forEach((M) => {
            M.style[e.isHorizontal() ? "width" : "height"] = `${
              o * (v.dynamicMainBullets + 4)
            }px`;
          }),
          v.dynamicMainBullets > 1 &&
            k !== void 0 &&
            ((a += x - (k || 0)),
            a > v.dynamicMainBullets - 1
              ? (a = v.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (z = Math.max(x - a, 0)),
          (_ = z + (Math.min(T.length, v.dynamicMainBullets) - 1)),
          (E = (_ + z) / 2)),
        T.forEach((M) => {
          const L = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (j) => `${v.bulletActiveClass}${j}`,
            ),
          ]
            .map((j) =>
              typeof j == "string" && j.includes(" ") ? j.split(" ") : j,
            )
            .flat();
          M.classList.remove(...L);
        }),
        b.length > 1)
      )
        T.forEach((M) => {
          const L = ka(M);
          L === x
            ? M.classList.add(...v.bulletActiveClass.split(" "))
            : e.isElement && M.setAttribute("part", "bullet"),
            v.dynamicBullets &&
              (L >= z &&
                L <= _ &&
                M.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
              L === z && c(M, "prev"),
              L === _ && c(M, "next"));
        });
      else {
        const M = T[x];
        if (
          (M && M.classList.add(...v.bulletActiveClass.split(" ")),
          e.isElement &&
            T.forEach((L, j) => {
              L.setAttribute("part", j === x ? "bullet-active" : "bullet");
            }),
          v.dynamicBullets)
        ) {
          const L = T[z],
            j = T[_];
          for (let N = z; N <= _; N += 1)
            T[N] &&
              T[N].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
          c(L, "prev"), c(j, "next");
        }
      }
      if (v.dynamicBullets) {
        const M = Math.min(T.length, v.dynamicMainBullets + 4),
          L = (o * M - o) / 2 - E * o,
          j = h ? "right" : "left";
        T.forEach((N) => {
          N.style[e.isHorizontal() ? j : "top"] = `${L}px`;
        });
      }
    }
    b.forEach((T, z) => {
      if (
        (v.type === "fraction" &&
          (T.querySelectorAll(Nr(v.currentClass)).forEach((_) => {
            _.textContent = v.formatFractionCurrent(x + 1);
          }),
          T.querySelectorAll(Nr(v.totalClass)).forEach((_) => {
            _.textContent = v.formatFractionTotal(C);
          })),
        v.type === "progressbar")
      ) {
        let _;
        v.progressbarOpposite
          ? (_ = e.isHorizontal() ? "vertical" : "horizontal")
          : (_ = e.isHorizontal() ? "horizontal" : "vertical");
        const E = (x + 1) / C;
        let M = 1,
          L = 1;
        _ === "horizontal" ? (M = E) : (L = E),
          T.querySelectorAll(Nr(v.progressbarFillClass)).forEach((j) => {
            (j.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${L})`),
              (j.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      v.type === "custom" && v.renderCustom
        ? ((T.innerHTML = v.renderCustom(e, x + 1, C)),
          z === 0 && r("paginationRender", T))
        : (z === 0 && r("paginationRender", T), r("paginationUpdate", T)),
        e.params.watchOverflow &&
          e.enabled &&
          T.classList[e.isLocked ? "add" : "remove"](v.lockClass);
    });
  }
  function f() {
    const h = e.params.pagination;
    if (u()) return;
    const v =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.slides.length;
    let b = e.pagination.el;
    b = l(b);
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
      b.forEach((k) => {
        h.type !== "custom" && (k.innerHTML = x || ""),
          h.type === "bullets" &&
            e.pagination.bullets.push(...k.querySelectorAll(Nr(h.bulletClass)));
      }),
      h.type !== "custom" && r("paginationRender", b[0]);
  }
  function g() {
    e.params.pagination = $y(
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
            (v = v.filter((b) => ky(b, ".swiper")[0] === e.el)[0])),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(e.pagination, { el: v }),
        (v = l(v)),
        v.forEach((b) => {
          h.type === "bullets" &&
            h.clickable &&
            b.classList.add(h.clickableClass),
            b.classList.add(h.modifierClass + h.type),
            b.classList.add(
              e.isHorizontal() ? h.horizontalClass : h.verticalClass,
            ),
            h.type === "bullets" &&
              h.dynamicBullets &&
              (b.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (a = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" &&
              h.progressbarOpposite &&
              b.classList.add(h.progressbarOppositeClass),
            h.clickable && b.addEventListener("click", d),
            e.enabled || b.classList.add(h.lockClass);
        }));
  }
  function m() {
    const h = e.params.pagination;
    if (u()) return;
    let v = e.pagination.el;
    v &&
      ((v = l(v)),
      v.forEach((b) => {
        b.classList.remove(h.hiddenClass),
          b.classList.remove(h.modifierClass + h.type),
          b.classList.remove(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass,
          ),
          h.clickable && b.removeEventListener("click", d);
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((b) =>
          b.classList.remove(...h.bulletActiveClass.split(" ")),
        );
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const h = e.params.pagination;
    let { el: v } = e.pagination;
    (v = l(v)),
      v.forEach((b) => {
        b.classList.remove(h.horizontalClass, h.verticalClass),
          b.classList.add(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass,
          );
      });
  }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? y() : (g(), f(), p());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && p();
    }),
    i("snapIndexChange", () => {
      p();
    }),
    i("snapGridLengthChange", () => {
      f(), p();
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
      p();
    }),
    i("click", (h, v) => {
      const b = v.target,
        x = l(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !b.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && b === e.navigation.nextEl) ||
            (e.navigation.prevEl && b === e.navigation.prevEl))
        )
          return;
        const k = x[0].classList.contains(e.params.pagination.hiddenClass);
        r(k === !0 ? "paginationShow" : "paginationHide"),
          x.forEach((S) => S.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const w = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: h } = e.pagination;
      h &&
        ((h = l(h)),
        h.forEach((v) =>
          v.classList.remove(e.params.pagination.paginationDisabledClass),
        )),
        g(),
        f(),
        p();
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
    enable: w,
    disable: y,
    render: f,
    update: p,
    init: g,
    destroy: m,
  });
}
function EE(t) {
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
    p,
    f,
    g,
    m,
    w,
    y;
  function h(W) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (W.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", h), T()));
  }
  const v = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (p = !0) : p && ((u = c), (p = !1));
      const W = e.autoplay.paused ? c : d + u - new Date().getTime();
      (e.autoplay.timeLeft = W),
        r("autoplayTimeLeft", W, W / l),
        (a = requestAnimationFrame(() => {
          v();
        }));
    },
    b = () => {
      let W;
      return (
        e.virtual && e.params.virtual.enabled
          ? (W = e.slides.filter((I) =>
              I.classList.contains("swiper-slide-active"),
            )[0])
          : (W = e.slides[e.activeIndex]),
        W ? parseInt(W.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    x = (W) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), v();
      let $ = typeof W > "u" ? e.params.autoplay.delay : W;
      (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const I = b();
      !Number.isNaN(I) &&
        I > 0 &&
        typeof W > "u" &&
        (($ = I), (l = I), (u = I)),
        (c = $);
      const R = e.params.speed,
        H = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(R, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, R, !0, !0), r("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(R, !0, !0), r("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, R, !0, !0), r("autoplay")),
            e.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        $ > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              H();
            }, $)))
          : requestAnimationFrame(() => {
              H();
            }),
        $
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
    C = (W, $) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), W || (y = !0);
      const I = () => {
        r("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", h)
            : T();
      };
      if (((e.autoplay.paused = !0), $)) {
        w && (c = e.params.autoplay.delay), (w = !1), I();
        return;
      }
      (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), I());
    },
    T = () => {
      (e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((d = new Date().getTime()),
        y ? ((y = !1), x(c)) : x(),
        (e.autoplay.paused = !1),
        r("autoplayResume"));
    },
    z = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const W = cn();
      W.visibilityState === "hidden" && ((y = !0), C(!0)),
        W.visibilityState === "visible" && T();
    },
    _ = (W) => {
      W.pointerType === "mouse" && ((y = !0), C(!0));
    },
    E = (W) => {
      W.pointerType === "mouse" && e.autoplay.paused && T();
    },
    M = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", _),
        e.el.addEventListener("pointerleave", E));
    },
    L = () => {
      e.el.removeEventListener("pointerenter", _),
        e.el.removeEventListener("pointerleave", E);
    },
    j = () => {
      cn().addEventListener("visibilitychange", z);
    },
    N = () => {
      cn().removeEventListener("visibilitychange", z);
    };
  i("init", () => {
    e.params.autoplay.enabled && (M(), j(), (d = new Date().getTime()), k());
  }),
    i("destroy", () => {
      L(), N(), e.autoplay.running && S();
    }),
    i("beforeTransitionStart", (W, $, I) => {
      e.destroyed ||
        !e.autoplay.running ||
        (I || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : S());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          S();
          return;
        }
        (f = !0),
          (g = !1),
          (y = !1),
          (m = setTimeout(() => {
            (y = !0), (g = !0), C(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !f)) {
        if (
          (clearTimeout(m),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (g = !1), (f = !1);
          return;
        }
        g && e.params.cssMode && T(), (g = !1), (f = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (w = !0);
    }),
    Object.assign(e.autoplay, { start: k, stop: S, pause: C, resume: T });
}
function nf({ isdark: t }) {
  return P.jsxs(CE, {
    id: "Projects",
    isdark: t,
    children: [
      P.jsx(Ly, {
        slidesPerView: 1,
        centeredSlides: !0,
        autoplay: { delay: 2500, disableOnInteraction: !0 },
        spaceBetween: 1e3,
        loop: !0,
        pagination: { clickable: !0 },
        navigation: !0,
        modules: [EE, _E, kE],
        className: "mySwiper",
        children: y_.map((e) =>
          P.jsx(Ay, { children: P.jsx(Xd, { data: e, isdark: t }) }, e.id),
        ),
      }),
      P.jsx(cl, { link: "#Contact-me", isdark: t }),
    ],
  });
}
nf.propTypes = { isdark: Ne.bool };
nf.defaultProps = { isdark: !0 };
const CE = G.div`
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
  Is = { _origin: "https://api.emailjs.com" },
  TE = (t, e = "https://api.emailjs.com") => {
    (Is._userID = t), (Is._origin = e);
  },
  Dy = (t, e, n) => {
    if (!t)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!e)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Ch {
  constructor(e) {
    (this.status = e ? e.status : 0),
      (this.text = e ? e.responseText : "Network Error");
  }
}
const jy = (t, e, n = {}) =>
    new Promise((i, r) => {
      const s = new XMLHttpRequest();
      s.addEventListener("load", ({ target: o }) => {
        const a = new Ch(o);
        a.status === 200 || a.text === "OK" ? i(a) : r(a);
      }),
        s.addEventListener("error", ({ target: o }) => {
          r(new Ch(o));
        }),
        s.open("POST", Is._origin + t, !0),
        Object.keys(n).forEach((o) => {
          s.setRequestHeader(o, n[o]);
        }),
        s.send(e);
    }),
  PE = (t, e, n, i) => {
    const r = i || Is._userID;
    return (
      Dy(r, t, e),
      jy(
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
  zE = (t) => {
    let e;
    if (
      (typeof t == "string" ? (e = document.querySelector(t)) : (e = t),
      !e || e.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return e;
  },
  OE = (t, e, n, i) => {
    const r = i || Is._userID,
      s = zE(n);
    Dy(r, t, e);
    const o = new FormData(s);
    return (
      o.append("lib_version", "3.11.0"),
      o.append("service_id", t),
      o.append("template_id", e),
      o.append("user_id", r),
      jy("/api/v1.0/email/send-form", o)
    );
  },
  Th = { init: TE, send: PE, sendForm: OE };
function rf({ isdark: t }) {
  const e = A.useRef(),
    [n, i] = A.useState(localStorage.getItem("M$Ppl3R#3p&Bz994C93t"));
  n === null && i("send");
  const [r, s] = A.useState({
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
            Th.sendForm(
              "service_hvc5w18",
              "template_kl9awzw",
              e.current,
              "_s8CAk2YdEw7gn7U3",
            ).then(
              () => {
                ue.success("Mail sent successfully✨"),
                  i("sent"),
                  localStorage.setItem("M$Ppl3R#3p&Bz994C93t", "sent"),
                  localStorage.removeItem("VoTshS53jhSV22E^SRo@"),
                  localStorage.removeItem("I#S&hsG02P8Q0i^70!9e");
              },
              (u) => {
                console.error(u),
                  ue.error("Failed to send email"),
                  (u.text !== null || u.text !== "") && ue.error(u.text),
                  i("try again"),
                  localStorage.removeItem("M$Ppl3R#3p&Bz994C93t"),
                  console.error(u.text);
              },
            ),
            Th.sendForm(
              "service_hvc5w18",
              "template_fdnv60h",
              e.current,
              "_s8CAk2YdEw7gn7U3",
            ).then(
              () => {},
              (u) => {
                console.error(u.text);
              },
            ))
          : n === "try again" && i("send");
    };
  return P.jsxs(ME, {
    isdark: t,
    id: "Contact-me",
    children: [
      P.jsx(IE, { "data-aos": "zoom-in-right", children: P.jsx(n_, {}) }),
      P.jsxs(RE, {
        "data-aos": "zoom-in-left",
        children: [
          P.jsx(AE, { "data-aos": "zoom-in-down", children: "Contact" }),
          P.jsxs(LE, {
            ref: e,
            onSubmit: a,
            isdark: t,
            children: [
              (n === "send" &&
                P.jsxs(P.Fragment, {
                  children: [
                    P.jsxs($E, {
                      "data-aos": "zoom-out",
                      isdark: t,
                      children: [
                        P.jsx("span", {}),
                        P.jsx(DE, {
                          type: "email",
                          name: "user_email",
                          value: r.user_email,
                          onChange: o,
                          placeholder: "Enter your Email Address",
                          required: !0,
                        }),
                        P.jsx("span", {}),
                      ],
                    }),
                    P.jsxs(jE, {
                      "data-aos": "zoom-in",
                      isdark: t,
                      children: [
                        P.jsx("span", {}),
                        P.jsx(BE, {
                          children: P.jsx(NE, {
                            name: "message",
                            required: !0,
                            value: r.message,
                            onChange: o,
                            isdark: t,
                          }),
                        }),
                        P.jsx("span", {}),
                      ],
                    }),
                  ],
                })) ||
                (n === "sent" &&
                  P.jsx(Ph, {
                    src: "https://user-images.githubusercontent.com/85221003/190645104-c36be8f1-3721-4155-897d-2715be9a3972.png",
                  })) ||
                (n === "sending" && P.jsx(vr, { text: "sending" })) ||
                (n === "try again" &&
                  P.jsx(Ph, {
                    src: "https://user-images.githubusercontent.com/85221003/190645213-d4c57ad1-c85b-4516-8cac-ea3b6fbb544e.png",
                  })),
              P.jsx(FE, {
                children: P.jsxs(WE, {
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
                    P.jsx("svg", {
                      version: "1.1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      enableBackground: "new 0 0 512 512",
                      children: P.jsx("path", {
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
rf.propTypes = { isdark: Ne.bool };
rf.defaultProps = { isdark: !0 };
const ME = G.div`
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
  IE = G.div`
	display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
	@media (max-width: 1023px) {
        display: none;
    }
`,
  RE = G.div`
	display: grid;
    width: 100%;
    height: fit-content;
    align-items: center;
	justify-content: center;
`,
  LE = G.form`
	display: grid;
	min-height: 66vh;
    width: 100%;
    height: fit-content;
    align-items: center;
	color: ${({ isdark: t }) => (t ? "#fff" : "#15023a")};
`,
  AE = G.h1`
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
  $E = G.div`
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
  DE = G.input`
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
  jE = G.div`
	display: grid;
    background: ${({ isdark: t }) =>
      t ? "rgba(2, 12, 23, 0.69)" : "rgba(255, 255, 255, 0.69)"};
    height: max-content;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: linear-gradient(to right, #5cb6f9, #00c4cc, #185a9d)
`,
  NE = G.textarea`
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
  FE = G.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	* {
		overflow: visible;
	}
`,
  BE = G.div`
    background: url('https://user-images.githubusercontent.com/85221003/190644292-f8584039-a1df-455d-8905-e1c5eb6b04e7.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
	display: grid;
`,
  WE = G.button`
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
  Ph = G.img`
    width: 320px;
	display: grid;
`;
var sf = {},
  HE = Ja;
Object.defineProperty(sf, "__esModule", { value: !0 });
var Ny = (sf.default = void 0),
  UE = HE(ul()),
  VE = P,
  GE = (0, UE.default)(
    (0, VE.jsx)("path", {
      d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
    }),
    "Call",
  );
Ny = sf.default = GE;
var of = {},
  qE = Ja;
Object.defineProperty(of, "__esModule", { value: !0 });
var Fy = (of.default = void 0),
  KE = qE(ul()),
  YE = P,
  QE = (0, KE.default)(
    (0, YE.jsx)("path", {
      d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
    }),
    "Email",
  );
Fy = of.default = QE;
var af = {},
  XE = Ja;
Object.defineProperty(af, "__esModule", { value: !0 });
var By = (af.default = void 0),
  JE = XE(ul()),
  ZE = P,
  eC = (0, JE.default)(
    (0, ZE.jsx)("path", { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }),
    "Download",
  );
By = af.default = eC;
const Mn = {
  email: "HarshR4jGupta@gmail.com",
  number: "+917607642202",
  resume:
    "https://drive.google.com/file/d/1Ajxq0J7MF7ySTEbG03mCYT41fG3_4xap/view?usp=drive_link",
};
function lf({ menuOpen: t, setMenuOpen: e, isdark: n, setDark: i }) {
  return P.jsxs(oC, {
    className: !t && "active",
    isdark: n,
    children: [
      P.jsx(Qd, { show: t, isdark: n, setDark: i }),
      P.jsxs(tC, {
        children: [
          P.jsxs(nC, {
            children: [
              P.jsx(iC, {
                onClick: () => {
                  window.location.href = "#Home";
                },
                isdark: n,
                children: "harsh.",
              }),
              P.jsx(vy, { setDark: i, isdark: n }),
              P.jsxs(au, {
                children: [
                  P.jsx(Ny, {
                    className: "icon",
                    onClick: () => {
                      navigator.clipboard.writeText(Mn.number),
                        ue.success("Mobile Number has been copied✨");
                    },
                  }),
                  P.jsx(lu, {
                    onClick: () => {
                      navigator.clipboard.writeText(Mn.number),
                        ue.success("Mobile Number has been copied✨");
                    },
                    children: Mn.number,
                  }),
                ],
              }),
              P.jsxs(au, {
                children: [
                  P.jsx(Fy, {
                    className: "icon",
                    onClick: () => {
                      navigator.clipboard.writeText(Mn.email),
                        ue.success("Email id has been copied✨");
                    },
                  }),
                  P.jsx(lu, {
                    onClick: () => {
                      navigator.clipboard.writeText(Mn.email),
                        ue.success("Email id has been copied✨");
                    },
                    children: Mn.email,
                  }),
                ],
              }),
              P.jsxs(au, {
                children: [
                  P.jsx(By, {
                    className: "icon",
                    onClick: () => window.open(Mn.resume),
                  }),
                  P.jsx(lu, {
                    onClick: () => window.open(Mn.resume),
                    children: "Resume",
                  }),
                ],
              }),
            ],
          }),
          P.jsx(rC, {
            children: P.jsxs(sC, {
              onClick: () => e(!t),
              className: t && "active",
              isdark: n,
              children: [
                P.jsx("span", {}),
                P.jsx("span", {}),
                P.jsx("span", {}),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
lf.propTypes = {
  menuOpen: Ne.bool,
  setMenuOpen: Ne.func,
  isdark: Ne.bool,
  setDark: Ne.func,
};
lf.defaultProps = {
  menuOpen: !1,
  setMenuOpen: () => {},
  isdark: !1,
  setDark: () => {},
};
const tC = G.div`
	display: grid;
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`,
  nC = G.div`
	display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    grid-gap: 70px;
    @media (max-width: 1280px) {
        grid-gap: 16px;
    }
	width: max-content;
`,
  iC = G.h1`
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
  au = G.div`
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
  lu = G.div`
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
  rC = G.div``,
  sC = G.div`
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
  oC = G.div`
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
class aC {
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
const as = "generated",
  lC = "pointerdown",
  uC = "pointerup",
  Rc = "pointerleave",
  cC = "pointerout",
  ki = "pointermove",
  dC = "touchstart",
  zh = "touchend",
  fC = "touchmove",
  pC = "touchcancel",
  hC = "resize",
  mC = "visibilitychange",
  Kt = "tsParticles - Error";
class yt {
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
    else throw new Error(`${Kt} Vector3d not initialized correctly`);
  }
  static get origin() {
    return yt.create(0, 0, 0);
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
    return yt.create(e.x, e.y, e.z);
  }
  static create(e, n, i) {
    return new yt(e, n, i);
  }
  add(e) {
    return yt.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    (this.x += e.x), (this.y += e.y), (this.z += e.z);
  }
  copy() {
    return yt.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return yt.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    (this.x /= e), (this.y /= e), (this.z /= e);
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(e) {
    return yt.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    (this.x *= e), (this.y *= e), (this.z *= e);
  }
  rotate(e) {
    return yt.create(
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
    return yt.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    (this.x -= e.x), (this.y -= e.y), (this.z -= e.z);
  }
}
class pe extends yt {
  constructor(e, n) {
    super(e, n, 0);
  }
  static get origin() {
    return pe.create(0, 0);
  }
  static clone(e) {
    return pe.create(e.x, e.y);
  }
  static create(e, n) {
    return new pe(e, n);
  }
}
let gC = Math.random;
const yC = new Map();
function Wy(t) {
  return yC.get(t) || ((e) => e);
}
function Q() {
  return Yt(gC(), 0, 1 - 1e-16);
}
function Yt(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function uu(t, e, n, i) {
  return Math.floor((t * n + e * i) / (n + i));
}
function We(t) {
  const e = Wn(t);
  let n = uf(t);
  return e === n && (n = 0), Q() * (e - n) + n;
}
function B(t) {
  return typeof t == "number" ? t : We(t);
}
function uf(t) {
  return typeof t == "number" ? t : t.min;
}
function Wn(t) {
  return typeof t == "number" ? t : t.max;
}
function q(t, e) {
  if (t === e || (e === void 0 && typeof t == "number")) return t;
  const n = uf(t),
    i = Wn(t);
  return e !== void 0 ? { min: Math.min(n, e), max: Math.max(i, e) } : q(n, i);
}
function Tn(t) {
  const e = t.random,
    { enable: n, minimumValue: i } =
      typeof e == "boolean" ? { enable: e, minimumValue: 0 } : e;
  return B(n ? q(t.value, i) : t.value);
}
function et(t, e) {
  const n = t.x - e.x,
    i = t.y - e.y;
  return { dx: n, dy: i, distance: Math.sqrt(n ** 2 + i ** 2) };
}
function rt(t, e) {
  return et(t, e).distance;
}
function vC(t, e, n) {
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
      return Q() * Math.PI * 2;
  }
}
function wC(t) {
  const e = pe.origin;
  return (e.length = 1), (e.angle = t), e;
}
function Oh(t, e, n, i) {
  return pe.create((t.x * (n - i)) / (n + i) + (e.x * 2 * i) / (n + i), t.y);
}
function bC(t) {
  return t.position && t.position.x !== void 0 && t.position.y !== void 0
    ? {
        x: (t.position.x * t.size.width) / 100,
        y: (t.position.y * t.size.height) / 100,
      }
    : void 0;
}
function Hy(t) {
  var e, n;
  return {
    x:
      ((((e = t.position) == null ? void 0 : e.x) ?? Q() * 100) *
        t.size.width) /
      100,
    y:
      ((((n = t.position) == null ? void 0 : n.y) ?? Q() * 100) *
        t.size.height) /
      100,
  };
}
function Uy(t) {
  var n, i;
  const e = {
    x:
      ((n = t.position) == null ? void 0 : n.x) !== void 0
        ? B(t.position.x)
        : void 0,
    y:
      ((i = t.position) == null ? void 0 : i.y) !== void 0
        ? B(t.position.y)
        : void 0,
  };
  return Hy({ size: t.size, position: e });
}
function xC(t) {
  var e, n;
  return {
    x: ((e = t.position) == null ? void 0 : e.x) ?? Q() * t.size.width,
    y: ((n = t.position) == null ? void 0 : n.y) ?? Q() * t.size.height,
  };
}
function Vy(t) {
  return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
}
function Mh(t) {
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
function SC(t, e) {
  const n = we(e, (i) => t.matches(i));
  return n instanceof Array ? n.some((i) => i) : n;
}
function Zn() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function kC() {
  return !Zn() && typeof matchMedia < "u";
}
function Gy(t) {
  if (kC()) return matchMedia(t);
}
function _C() {
  return Zn()
    ? (t) => setTimeout(t)
    : (t) => (requestAnimationFrame || setTimeout)(t);
}
function EC() {
  return Zn()
    ? (t) => clearTimeout(t)
    : (t) => (cancelAnimationFrame || clearTimeout)(t);
}
function ve(t, e) {
  return t === e || (e instanceof Array && e.indexOf(t) > -1);
}
async function CC(t, e) {
  try {
    await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
  } catch {}
}
function qy(t) {
  return Math.floor(Q() * t.length);
}
function Hs(t, e, n = !0) {
  return t[e !== void 0 && n ? e % t.length : qy(t)];
}
function Us(t, e, n, i, r) {
  return TC(Vs(t, i ?? 0), e, n, r);
}
function TC(t, e, n, i) {
  let r = !0;
  return (
    (!i || i === "bottom") && (r = t.top < e.height + n.x),
    r && (!i || i === "left") && (r = t.right > n.x),
    r && (!i || i === "right") && (r = t.left < e.width + n.y),
    r && (!i || i === "top") && (r = t.bottom > n.y),
    r
  );
}
function Vs(t, e) {
  return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
}
function Re(t, ...e) {
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
      l[r] = a && Array.isArray(o) ? o.map((u) => Re(l[r], u)) : Re(l[r], o);
    }
  }
  return t;
}
function cf(t, e) {
  return !!Qy(e, (n) => n.enable && ve(t, n.mode));
}
function df(t, e, n) {
  we(e, (i) => {
    const r = i.mode;
    i.enable && ve(t, r) && PC(i, n);
  });
}
function PC(t, e) {
  const n = t.selectors;
  we(n, (i) => {
    e(i, t);
  });
}
function Ky(t, e) {
  if (!(!e || !t)) return Qy(t, (n) => SC(e, n.selectors));
}
function Lc(t) {
  return {
    position: t.getPosition(),
    radius: t.getRadius(),
    mass: t.getMass(),
    velocity: t.velocity,
    factor: pe.create(
      Tn(t.options.bounce.horizontal),
      Tn(t.options.bounce.vertical),
    ),
  };
}
function Yy(t, e) {
  const { x: n, y: i } = t.velocity.sub(e.velocity),
    [r, s] = [t.position, e.position],
    { dx: o, dy: a } = et(s, r);
  if (n * o + i * a < 0) return;
  const l = -Math.atan2(a, o),
    u = t.mass,
    c = e.mass,
    d = t.velocity.rotate(l),
    p = e.velocity.rotate(l),
    f = Oh(d, p, u, c),
    g = Oh(p, d, u, c),
    m = f.rotate(-l),
    w = g.rotate(-l);
  (t.velocity.x = m.x * t.factor.x),
    (t.velocity.y = m.y * t.factor.y),
    (e.velocity.x = w.x * e.factor.x),
    (e.velocity.y = w.y * e.factor.y);
}
function zC(t, e) {
  const n = t.getPosition(),
    i = t.getRadius(),
    r = Vs(n, i),
    s = Mh({
      pSide: { min: r.left, max: r.right },
      pOtherSide: { min: r.top, max: r.bottom },
      rectSide: { min: e.left, max: e.right },
      rectOtherSide: { min: e.top, max: e.bottom },
      velocity: t.velocity.x,
      factor: Tn(t.options.bounce.horizontal),
    });
  s.bounced &&
    (s.velocity !== void 0 && (t.velocity.x = s.velocity),
    s.position !== void 0 && (t.position.x = s.position));
  const o = Mh({
    pSide: { min: r.top, max: r.bottom },
    pOtherSide: { min: r.left, max: r.right },
    rectSide: { min: e.top, max: e.bottom },
    rectOtherSide: { min: e.left, max: e.right },
    velocity: t.velocity.y,
    factor: Tn(t.options.bounce.vertical),
  });
  o.bounced &&
    (o.velocity !== void 0 && (t.velocity.y = o.velocity),
    o.position !== void 0 && (t.position.y = o.position));
}
function we(t, e) {
  return t instanceof Array ? t.map((n, i) => e(n, i)) : e(t, 0);
}
function _t(t, e, n) {
  return t instanceof Array ? Hs(t, e, n) : t;
}
function Qy(t, e) {
  return t instanceof Array ? t.find((n, i) => e(n, i)) : e(t, 0) ? t : void 0;
}
function Xy(t, e) {
  const n = t.value,
    i = t.animation,
    r = {
      delayTime: B(i.delay) * 1e3,
      enable: i.enable,
      value: B(t.value) * e,
      max: Wn(n) * e,
      min: uf(n) * e,
      loops: 0,
      maxLoops: B(i.count),
      time: 0,
    };
  if (i.enable) {
    switch (((r.decay = 1 - B(i.decay)), i.mode)) {
      case "increase":
        r.status = "increasing";
        break;
      case "decrease":
        r.status = "decreasing";
        break;
      case "random":
        r.status = Q() >= 0.5 ? "increasing" : "decreasing";
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
        (r.value = We(r)),
          s && (r.status = Q() >= 0.5 ? "increasing" : "decreasing");
        break;
    }
  }
  return (r.initialValue = r.value), r;
}
const Ea = "random",
  Ho = "mid",
  dl = new Map();
function Jy(t) {
  dl.set(t.key, t);
}
function cu(t, e, n) {
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
function OC(t) {
  for (const [, s] of dl)
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
function At(t, e, n = !0) {
  if (!t) return;
  const i = typeof t == "string" ? { value: t } : t;
  if (typeof i.value == "string") return Zy(i.value, e, n);
  if (i.value instanceof Array) return At({ value: Hs(i.value, e, n) });
  for (const [, r] of dl) {
    const s = r.handleRangeColor(i);
    if (s) return s;
  }
}
function Zy(t, e, n = !0) {
  if (!t) return;
  const i = typeof t == "string" ? { value: t } : t;
  if (typeof i.value == "string") return i.value === Ea ? tv() : MC(i.value);
  if (i.value instanceof Array) return Zy({ value: Hs(i.value, e, n) });
  for (const [, r] of dl) {
    const s = r.handleColor(i);
    if (s) return s;
  }
}
function ei(t, e, n = !0) {
  const i = At(t, e, n);
  return i ? ev(i) : void 0;
}
function ev(t) {
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
function MC(t) {
  return OC(t);
}
function wr(t) {
  const e = { b: 0, g: 0, r: 0 },
    n = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
  if (!n.s) e.r = e.g = e.b = n.l;
  else {
    const i = n.l < 0.5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
      r = 2 * n.l - i;
    (e.r = cu(r, i, n.h + 1 / 3)),
      (e.g = cu(r, i, n.h)),
      (e.b = cu(r, i, n.h - 1 / 3));
  }
  return (
    (e.r = Math.floor(e.r * 255)),
    (e.g = Math.floor(e.g * 255)),
    (e.b = Math.floor(e.b * 255)),
    e
  );
}
function IC(t) {
  const e = wr(t);
  return { a: t.a, b: e.b, g: e.g, r: e.r };
}
function tv(t) {
  const e = t ?? 0;
  return {
    b: Math.floor(We(q(e, 256))),
    g: Math.floor(We(q(e, 256))),
    r: Math.floor(We(q(e, 256))),
  };
}
function dn(t, e) {
  return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
}
function br(t, e) {
  return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
}
function ff(t, e, n, i) {
  let r = t,
    s = e;
  return (
    r.r === void 0 && (r = wr(t)),
    s.r === void 0 && (s = wr(e)),
    { b: uu(r.b, s.b, n, i), g: uu(r.g, s.g, n, i), r: uu(r.r, s.r, n, i) }
  );
}
function Ac(t, e, n) {
  if (n === Ea) return tv();
  if (n === Ho) {
    const i = t.getFillColor() ?? t.getStrokeColor(),
      r =
        (e == null ? void 0 : e.getFillColor()) ??
        (e == null ? void 0 : e.getStrokeColor());
    if (i && r && e) return ff(i, r, t.getRadius(), e.getRadius());
    {
      const s = i ?? r;
      if (s) return wr(s);
    }
  } else return n;
}
function nv(t, e, n) {
  const i = typeof t == "string" ? t : t.value;
  return i === Ea
    ? n
      ? At({ value: i })
      : e
      ? Ea
      : Ho
    : i === Ho
    ? Ho
    : At({ value: i });
}
function Ih(t) {
  return t !== void 0 ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
}
function iv(t, e, n) {
  const i = {
    h: { enable: !1, value: t.h },
    s: { enable: !1, value: t.s },
    l: { enable: !1, value: t.l },
  };
  return e && (du(i.h, e.h, n), du(i.s, e.s, n), du(i.l, e.l, n)), i;
}
function du(t, e, n) {
  (t.enable = e.enable),
    t.enable
      ? ((t.velocity = (B(e.speed) / 100) * n),
        (t.decay = 1 - B(e.decay)),
        (t.status = "increasing"),
        (t.loops = 0),
        (t.maxLoops = B(e.count)),
        (t.time = 0),
        (t.delayTime = B(e.delay) * 1e3),
        e.sync || ((t.velocity *= Q()), (t.value *= Q())),
        (t.initialValue = t.value))
      : (t.velocity = 0);
}
function ls(t, e, n) {
  t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath();
}
function RC(t, e, n, i) {
  t.beginPath(),
    t.moveTo(e.x, e.y),
    t.lineTo(n.x, n.y),
    t.lineTo(i.x, i.y),
    t.closePath();
}
function LC(t, e, n) {
  (t.fillStyle = n ?? "rgba(0,0,0,0)"), t.fillRect(0, 0, e.width, e.height);
}
function AC(t, e, n, i) {
  n &&
    ((t.globalAlpha = i),
    t.drawImage(n, 0, 0, e.width, e.height),
    (t.globalAlpha = 1));
}
function fu(t, e) {
  t.clearRect(0, 0, e.width, e.height);
}
function $C(t) {
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
    p = i.getPosition(),
    f = i.rotation + (i.pathRotation ? i.velocity.angle : 0),
    g = { sin: Math.sin(f), cos: Math.cos(f) },
    m = {
      a: g.cos * (d.a ?? 1),
      b: g.sin * (d.b ?? 1),
      c: -g.sin * (d.c ?? 1),
      d: g.cos * (d.d ?? 1),
    };
  n.setTransform(m.a, m.b, m.c, m.d, p.x, p.y),
    n.beginPath(),
    o && (n.globalCompositeOperation = a);
  const w = i.shadowColor;
  c.enable &&
    w &&
    ((n.shadowBlur = c.blur),
    (n.shadowColor = dn(w)),
    (n.shadowOffsetX = c.offset.x),
    (n.shadowOffsetY = c.offset.y)),
    s.fill && (n.fillStyle = s.fill);
  const y = i.strokeWidth ?? 0;
  (n.lineWidth = y),
    s.stroke && (n.strokeStyle = s.stroke),
    DC(e, n, i, l, u, r),
    y > 0 && n.stroke(),
    i.close && n.closePath(),
    i.fill && n.fill(),
    jC(e, n, i, l, u, r),
    (n.globalCompositeOperation = "source-over"),
    n.setTransform(1, 0, 0, 1, 0, 0);
}
function DC(t, e, n, i, r, s) {
  if (!n.shape) return;
  const o = t.drawers.get(n.shape);
  o && o.draw(e, n, i, r, s, t.retina.pixelRatio);
}
function jC(t, e, n, i, r, s) {
  if (!n.shape) return;
  const o = t.drawers.get(n.shape);
  !o || !o.afterEffect || o.afterEffect(e, n, i, r, s, t.retina.pixelRatio);
}
function NC(t, e, n) {
  e.draw && e.draw(t, n);
}
function FC(t, e, n, i) {
  e.drawParticle && e.drawParticle(t, n, i);
}
function BC(t, e, n) {
  return { h: t.h, s: t.s, l: t.l + (e === "darken" ? -1 : 1) * n };
}
function WC(t, e, n) {
  const i = e[n];
  i !== void 0 && (t[n] = (t[n] ?? 1) * i);
}
class HC {
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
            for (const c in u) WC(a, u, c);
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
            (!i && s.particleFillColor && (i = ei(s.particleFillColor(n))),
            !r && s.particleStrokeColor && (r = ei(s.particleStrokeColor(n))),
            i && r)
          )
            break;
        return [i, r];
      }),
      (this._initCover = () => {
        const n = this.container.actualOptions,
          i = n.backgroundMask.cover,
          r = i.color,
          s = At(r);
        if (s) {
          const o = { ...s, a: i.opacity };
          this._coverColorStyle = dn(o, o.a);
        }
      }),
      (this._initStyle = () => {
        const n = this.element,
          i = this.container.actualOptions;
        if (n) {
          this._fullScreen
            ? ((this._originalStyle = Re({}, n.style)),
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
            const s = At(r.color);
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
        this.draw((i) => LC(i, this.size, n));
      }),
      (this._paintImage = (n, i) => {
        this.draw((r) => AC(r, this.size, n, i));
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
        !Zn() && typeof MutationObserver < "u"
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
        ? this._paintBase(dn(i.color, i.opacity))
        : i.image && this._paintImage(i.image, i.opacity)
      : this.draw((r) => {
          fu(r, this.size);
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
            p = (1 - e.zIndexFactor) ** d.opacityRate,
            f =
              e.bubble.opacity ??
              ((v = e.opacity) == null ? void 0 : v.value) ??
              1,
            g = e.strokeOpacity ?? f,
            m = f * p,
            w = g * p,
            y = {},
            h = { fill: o ? br(o, m) : void 0 };
          (h.stroke = a ? br(a, w) : h.fill),
            this._applyPreDrawUpdaters(l, e, i, m, h, y),
            $C({
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
    this.draw((r) => FC(r, e, n, i));
  }
  drawPlugin(e, n) {
    this.draw((i) => NC(i, e, n));
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
        const s = At(n.color);
        r.backgroundColor = s ? dn(s, n.opacity) : "";
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
        e.dataset && as in e.dataset
          ? e.dataset[as] === "true"
          : this._generated),
      (this.element = e),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = Re({}, this.element.style)),
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
        ? (fu(n, this.size), this._paintBase(this._coverColorStyle))
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
    this.draw((e) => fu(e, this.size));
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
function zt(t, e, n, i, r) {
  if (i) {
    let s = { passive: !0 };
    typeof r == "boolean" ? (s.capture = r) : r !== void 0 && (s = r),
      t.addEventListener(e, n, s);
  } else {
    const s = r;
    t.removeEventListener(e, n, s);
  }
}
class UC {
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
          we(a.mode, (l) => this.container.handleClickMode(l));
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
            (zt(a, ki, r.mouseMove, i),
            zt(a, dC, r.touchStart, i),
            zt(a, fC, r.touchMove, i),
            o.interactivity.events.onClick.enable
              ? (zt(a, zh, r.touchEndClick, i),
                zt(a, uC, r.mouseUp, i),
                zt(a, lC, r.mouseDown, i))
              : zt(a, zh, r.touchEnd, i),
            zt(a, n, r.mouseLeave, i),
            zt(a, pC, r.touchCancel, i));
      }),
      (this._manageListeners = (n) => {
        const i = this._handlers,
          r = this.container,
          s = r.actualOptions,
          o = s.interactivity.detectsOn,
          a = r.canvas.element;
        let l = Rc;
        o === "window"
          ? ((r.interactivity.element = window), (l = cC))
          : o === "parent" && a
          ? (r.interactivity.element = a.parentElement ?? a.parentNode)
          : (r.interactivity.element = a),
          this._manageMediaMatch(n),
          this._manageResize(n),
          this._manageInteractivityListeners(l, n),
          document && zt(document, mC, i.visibilityChange, n, !1);
      }),
      (this._manageMediaMatch = (n) => {
        const i = this._handlers,
          r = Gy("(prefers-color-scheme: dark)");
        if (r) {
          if (r.addEventListener !== void 0) {
            zt(r, "change", i.themeChange, n);
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
          zt(window, hC, i.resize, n);
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
          (n.status = Rc),
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
              const p = c.getBoundingClientRect(),
                f = d.getBoundingClientRect(),
                g = o.getBoundingClientRect();
              a = {
                x: u.offsetX + 2 * p.left - (f.left + g.left),
                y: u.offsetY + 2 * p.top - (f.top + g.top),
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
        a && ((a.x *= l), (a.y *= l)), (s.mouse.position = a), (s.status = ki);
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
function VC(t, e = 60, n = !1) {
  return { value: t, factor: n ? 60 / e : (60 * t) / 1e3 };
}
class GC {
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
      const i = VC(e - n.lastFrameTime, n.fpsLimit, n.smooth);
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
      console.error(`${Kt} in animation loop`, n);
    }
  }
}
class Oe {
  constructor() {
    this.value = "";
  }
  static create(e, n) {
    const i = new Oe();
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
let qC = class {
  constructor() {
    (this.color = new Oe()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.position !== void 0 && (this.position = e.position),
      e.repeat !== void 0 && (this.repeat = e.repeat),
      e.size !== void 0 && (this.size = e.size),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
};
class KC {
  constructor() {
    (this.color = new Oe()), (this.color.value = "#fff"), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class YC {
  constructor() {
    (this.composite = "destination-out"),
      (this.cover = new KC()),
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
class QC {
  constructor() {
    (this.enable = !0), (this.zIndex = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
}
class XC {
  constructor() {
    (this.enable = !1), (this.mode = []);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode));
  }
}
class Rh {
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
    return we(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = we(e, (n) => `#${n}`);
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
class JC {
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
class ZC {
  constructor() {
    (this.enable = !1), (this.mode = []), (this.parallax = new JC());
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.parallax.load(e.parallax));
  }
}
class eT {
  constructor() {
    (this.delay = 0.5), (this.enable = !0);
  }
  load(e) {
    e !== void 0 &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class tT {
  constructor() {
    (this.onClick = new XC()),
      (this.onDiv = new Rh()),
      (this.onHover = new ZC()),
      (this.resize = new eT());
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
      (this.onDiv = we(n, (i) => {
        const r = new Rh();
        return r.load(i), r;
      })),
      this.onHover.load(e.onHover ?? e.onhover),
      typeof e.resize == "boolean"
        ? (this.resize.enable = e.resize)
        : this.resize.load(e.resize);
  }
}
class nT {
  constructor(e, n) {
    (this._engine = e), (this._container = n);
  }
  load(e) {
    if (!e || !this._container) return;
    const n = this._engine.plugins.interactors.get(this._container);
    if (n) for (const i of n) i.loadModeOptions && i.loadModeOptions(this, e);
  }
}
class rv {
  constructor(e, n) {
    (this.detectsOn = "window"),
      (this.events = new tT()),
      (this.modes = new nT(e, n));
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
class iT {
  load(e) {
    e &&
      (e.position &&
        (this.position = {
          x: e.position.x ?? 50,
          y: e.position.y ?? 50,
          mode: e.position.mode ?? "percent",
        }),
      e.options && (this.options = Re({}, e.options)));
  }
}
class rT {
  constructor() {
    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
  }
  load(e) {
    e &&
      (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
      e.mode !== void 0 &&
        (e.mode === "screen" ? (this.mode = "screen") : (this.mode = "canvas")),
      e.options !== void 0 && (this.options = Re({}, e.options)));
  }
}
class sT {
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
class oT {
  constructor() {
    (this.name = ""), (this.default = new sT());
  }
  load(e) {
    e &&
      (e.name !== void 0 && (this.name = e.name),
      this.default.load(e.default),
      e.options !== void 0 && (this.options = Re({}, e.options)));
  }
}
class pu {
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
      (e.count !== void 0 && (this.count = q(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 && (this.offset = q(e.offset)),
      e.speed !== void 0 && (this.speed = q(e.speed)),
      e.decay !== void 0 && (this.decay = q(e.decay)),
      e.delay !== void 0 && (this.delay = q(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class aT {
  constructor() {
    (this.h = new pu()), (this.s = new pu()), (this.l = new pu());
  }
  load(e) {
    e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
}
class xr extends Oe {
  constructor() {
    super(), (this.animation = new aT());
  }
  static create(e, n) {
    const i = new xr();
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
class lT {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    e && e.speed !== void 0 && (this.speed = e.speed);
  }
}
class uT {
  constructor() {
    (this.enable = !0), (this.retries = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
class cT {
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
      (e.count !== void 0 && (this.count = q(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = q(e.speed)),
      e.decay !== void 0 && (this.decay = q(e.decay)),
      e.delay !== void 0 && (this.delay = q(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class sv extends cT {
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
class dT {
  constructor() {
    (this.enable = !1), (this.minimumValue = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue));
  }
}
class Nt {
  constructor() {
    (this.random = new dT()), (this.value = 0);
  }
  load(e) {
    e &&
      (typeof e.random == "boolean"
        ? (this.random.enable = e.random)
        : this.random.load(e.random),
      e.value !== void 0 &&
        (this.value = q(
          e.value,
          this.random.enable ? this.random.minimumValue : void 0,
        )));
  }
}
class Lh extends Nt {
  constructor() {
    super(), (this.random.minimumValue = 0.1), (this.value = 1);
  }
}
class ov {
  constructor() {
    (this.horizontal = new Lh()), (this.vertical = new Lh());
  }
  load(e) {
    e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
}
class fT {
  constructor() {
    (this.absorb = new lT()),
      (this.bounce = new ov()),
      (this.enable = !1),
      (this.maxSpeed = 50),
      (this.mode = "bounce"),
      (this.overlap = new uT());
  }
  load(e) {
    e &&
      (this.absorb.load(e.absorb),
      this.bounce.load(e.bounce),
      e.enable !== void 0 && (this.enable = e.enable),
      e.maxSpeed !== void 0 && (this.maxSpeed = q(e.maxSpeed)),
      e.mode !== void 0 && (this.mode = e.mode),
      this.overlap.load(e.overlap));
  }
}
class pT {
  constructor() {
    (this.offset = 0), (this.value = 90);
  }
  load(e) {
    e &&
      (e.offset !== void 0 && (this.offset = q(e.offset)),
      e.value !== void 0 && (this.value = q(e.value)));
  }
}
class hT {
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
    e.distance !== void 0 && (this.distance = q(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable);
    const n = ((r = e.rotate) == null ? void 0 : r.x) ?? e.rotateX;
    n !== void 0 && (this.rotate.x = n);
    const i = ((s = e.rotate) == null ? void 0 : s.y) ?? e.rotateY;
    i !== void 0 && (this.rotate.y = i);
  }
}
class mT {
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
class gT {
  constructor() {
    (this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50);
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = q(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.inverse !== void 0 && (this.inverse = e.inverse),
      e.maxSpeed !== void 0 && (this.maxSpeed = q(e.maxSpeed)));
  }
}
class yT {
  constructor() {
    (this.clamp = !0),
      (this.delay = new Nt()),
      (this.enable = !1),
      (this.options = {});
  }
  load(e) {
    e &&
      (e.clamp !== void 0 && (this.clamp = e.clamp),
      this.delay.load(e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.generator = e.generator),
      e.options && (this.options = Re(this.options, e.options)));
  }
}
class vT {
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image));
  }
}
class wT {
  constructor() {
    (this.enable = !1), (this.length = 10), (this.fill = new vT());
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
class bT {
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
class xT {
  constructor() {
    (this.acceleration = 0), (this.enable = !1);
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = q(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.position && (this.position = Re({}, e.position)));
  }
}
class ST {
  constructor() {
    (this.angle = new pT()),
      (this.attract = new hT()),
      (this.center = new mT()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = "none"),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new gT()),
      (this.path = new yT()),
      (this.outModes = new bT()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new xT()),
      (this.straight = !1),
      (this.trail = new wT()),
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
      e.decay !== void 0 && (this.decay = q(e.decay)),
      e.direction !== void 0 && (this.direction = e.direction),
      e.distance !== void 0 &&
        (this.distance =
          typeof e.distance == "number"
            ? { horizontal: e.distance, vertical: e.distance }
            : { ...e.distance }),
      e.drift !== void 0 && (this.drift = q(e.drift)),
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
      e.speed !== void 0 && (this.speed = q(e.speed)),
      this.spin.load(e.spin),
      e.straight !== void 0 && (this.straight = e.straight),
      this.trail.load(e.trail),
      e.vibrate !== void 0 && (this.vibrate = e.vibrate),
      e.warp !== void 0 && (this.warp = e.warp);
  }
}
class kT extends sv {
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
class _T extends Nt {
  constructor() {
    super(),
      (this.animation = new kT()),
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
      (this.value = q(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0,
      )));
  }
}
class ET {
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
class CT {
  constructor() {
    (this.density = new ET()), (this.limit = 0), (this.value = 0);
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
class TT {
  constructor() {
    (this.blur = 0),
      (this.color = new Oe()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000");
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = Oe.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 &&
        (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
}
const hu = "character",
  mu = "char",
  gu = "image",
  yu = "images",
  vu = "polygon",
  wu = "star";
class PT {
  constructor() {
    (this.loadShape = (e, n, i, r) => {
      if (!e) return;
      const s = e instanceof Array,
        o = s ? [] : {},
        a = s !== this.options[n] instanceof Array,
        l = s !== this.options[i] instanceof Array;
      a && (this.options[n] = o),
        l && r && (this.options[i] = o),
        (this.options[n] = Re(this.options[n] ?? o, e)),
        (!this.options[i] || r) &&
          (this.options[i] = Re(this.options[i] ?? o, e));
    }),
      (this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = "circle");
  }
  get character() {
    return this.options[hu] ?? this.options[mu];
  }
  set character(e) {
    this.options[mu] = this.options[hu] = e;
  }
  get custom() {
    return this.options;
  }
  set custom(e) {
    this.options = e;
  }
  get image() {
    return this.options[gu] ?? this.options[yu];
  }
  set image(e) {
    this.options[yu] = this.options[gu] = e;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
  get polygon() {
    return this.options[vu] ?? this.options[wu];
  }
  set polygon(e) {
    this.options[wu] = this.options[vu] = e;
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
        r && (this.options[i] = Re(this.options[i] ?? {}, r));
      }
    this.loadShape(e.character, hu, mu, !0),
      this.loadShape(e.polygon, vu, wu, !1),
      this.loadShape(e.image ?? e.images, gu, yu, !0),
      e.close !== void 0 && (this.close = e.close),
      e.fill !== void 0 && (this.fill = e.fill),
      e.type !== void 0 && (this.type = e.type);
  }
}
class zT extends sv {
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
class OT extends Nt {
  constructor() {
    super(),
      (this.animation = new zT()),
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
      (this.value = q(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0,
      )));
  }
}
class Ah {
  constructor() {
    this.width = 0;
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = xr.create(this.color, e.color)),
      e.width !== void 0 && (this.width = q(e.width)),
      e.opacity !== void 0 && (this.opacity = q(e.opacity)));
  }
}
class MT extends Nt {
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
class IT {
  constructor(e, n) {
    (this._engine = e),
      (this._container = n),
      (this.bounce = new ov()),
      (this.collisions = new fT()),
      (this.color = new xr()),
      (this.color.value = "#fff"),
      (this.groups = {}),
      (this.move = new ST()),
      (this.number = new CT()),
      (this.opacity = new _T()),
      (this.reduceDuplicates = !1),
      (this.shadow = new TT()),
      (this.shape = new PT()),
      (this.size = new OT()),
      (this.stroke = new Ah()),
      (this.zIndex = new MT());
  }
  load(e) {
    var r, s, o;
    if (!e) return;
    if (
      (this.bounce.load(e.bounce),
      this.color.load(xr.create(this.color, e.color)),
      e.groups !== void 0)
    )
      for (const a in e.groups) {
        const l = e.groups[a];
        l !== void 0 && (this.groups[a] = Re(this.groups[a] ?? {}, l));
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
        (this.interactivity = Re({}, e.interactivity));
    const i = e.stroke ?? ((o = e.shape) == null ? void 0 : o.stroke);
    if (
      (i &&
        (this.stroke = we(i, (a) => {
          const l = new Ah();
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
function av(t, ...e) {
  for (const n of e) t.load(n);
}
function pf(t, e, ...n) {
  const i = new IT(t, e);
  return av(i, ...n), i;
}
class RT {
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
      (this.background = new qC()),
      (this.backgroundMask = new YC()),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new QC()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new rv(e, n)),
      (this.manualParticles = []),
      (this.particles = pf(this._engine, this._container)),
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
    e.preset !== void 0 && we(e.preset, (l) => this._importPreset(l)),
      e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.delay !== void 0 && (this.delay = q(e.delay));
    const n = e.detectRetina ?? e.retina_detect;
    n !== void 0 && (this.detectRetina = n),
      e.duration !== void 0 && (this.duration = q(e.duration));
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
          const u = new iT();
          return u.load(l), u;
        })),
      this.particles.load(e.particles),
      (this.style = Re(this.style, e.style)),
      this._engine.plugins.loadOptions(this, e),
      e.smooth !== void 0 && (this.smooth = e.smooth);
    const s = this._engine.plugins.interactors.get(this._container);
    if (s) for (const l of s) l.loadOptions && l.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const l of e.responsive) {
        const u = new rT();
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
          const c = new oT();
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
      const n = Gy("(prefers-color-scheme: dark)"),
        i = n && n.matches,
        r = this._findDefaultTheme(i ? "dark" : "light");
      r && this.load(r.options);
    }
  }
}
class LT {
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
const $h = (t) => {
  if (!ve(t.outMode, t.checkModes)) return;
  const e = t.radius * 2;
  t.coord > t.maxCoord - e
    ? t.setCb(-t.radius)
    : t.coord < e && t.setCb(t.radius);
};
class AT {
  constructor(e, n, i, r, s, o) {
    (this.container = i),
      (this._calcPosition = (a, l, u, c = 0) => {
        for (const [, h] of a.plugins) {
          const v =
            h.particlePosition !== void 0
              ? h.particlePosition(l, this)
              : void 0;
          if (v) return yt.create(v.x, v.y, u);
        }
        const d = a.canvas.size,
          p = xC({ size: d, position: l }),
          f = yt.create(p.x, p.y, u),
          g = this.getRadius(),
          m = this.options.move.outModes,
          w = (h) => {
            $h({
              outMode: h,
              checkModes: ["bounce", "bounce-horizontal"],
              coord: f.x,
              maxCoord: a.canvas.size.width,
              setCb: (v) => (f.x += v),
              radius: g,
            });
          },
          y = (h) => {
            $h({
              outMode: h,
              checkModes: ["bounce", "bounce-vertical"],
              coord: f.y,
              maxCoord: a.canvas.size.height,
              setCb: (v) => (f.y += v),
              radius: g,
            });
          };
        return (
          w(m.left ?? m.default),
          w(m.right ?? m.default),
          y(m.top ?? m.default),
          y(m.bottom ?? m.default),
          this._checkOverlap(f, c) ? this._calcPosition(a, void 0, u, c + 1) : f
        );
      }),
      (this._calculateVelocity = () => {
        const a = wC(this.direction),
          l = a.copy(),
          u = this.options.move;
        if (u.direction === "inside" || u.direction === "outside") return l;
        const c = (Math.PI / 180) * B(u.angle.value),
          d = (Math.PI / 180) * B(u.angle.offset),
          p = { left: d - c / 2, right: d + c / 2 };
        return (
          u.straight || (l.angle += We(q(p.left, p.right))),
          u.random && typeof u.speed == "number" && (l.length *= Q()),
          l
        );
      }),
      (this._checkOverlap = (a, l = 0) => {
        const u = this.options.collisions,
          c = this.getRadius();
        if (!u.enable) return !1;
        const d = u.overlap;
        if (d.enable) return !1;
        const p = d.retries;
        if (p >= 0 && l > p)
          throw new Error(`${Kt} particle is overlapping and can't be placed`);
        return !!this.container.particles.find(
          (f) => rt(a, f.position) < c + f.getRadius(),
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
            ? BC(a, this.roll.alter.type, this.roll.alter.value)
            : a
          : a;
      }),
      (this._loadShapeData = (a, l) => {
        const u = a.options[this.shape];
        if (u) return Re({ close: a.close, fill: a.fill }, _t(u, this.id, l));
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
    return this._getRollColor(this.bubble.color ?? Ih(this.color));
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
    return this._getRollColor(this.bubble.color ?? Ih(this.strokeColor));
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
      u = pf(this._engine, s, l.particles),
      c = u.shape.type,
      { reduceDuplicates: d } = u;
    this.shape = _t(c, this.id, d);
    const p = u.shape;
    if (i && i.shape && i.shape.type) {
      const S = i.shape.type,
        C = _t(S, this.id, d);
      C && ((this.shape = C), p.load(i.shape));
    }
    (this.shapeData = this._loadShapeData(p, d)), u.load(i);
    const f = this.shapeData;
    f && u.load(f.particles);
    const g = new rv(o, s);
    g.load(s.actualOptions.interactivity),
      g.load(u.interactivity),
      (this.interactivity = g),
      (this.fill = (f == null ? void 0 : f.fill) ?? u.shape.fill),
      (this.close = (f == null ? void 0 : f.close) ?? u.shape.close),
      (this.options = u);
    const m = this.options.move.path;
    (this.pathDelay = Tn(m.delay) * 1e3),
      m.generator &&
        ((this.pathGenerator = this._engine.plugins.getPathGenerator(
          m.generator,
        )),
        this.pathGenerator &&
          s.addPath(m.generator, this.pathGenerator) &&
          this.pathGenerator.init(s));
    const w = B(this.options.zIndex.value);
    s.retina.initParticle(this),
      (this.size = Xy(this.options.size, a)),
      (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      (this.position = this._calcPosition(s, n, Yt(w, 0, s.zLayers))),
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
      (this.direction = vC(
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
      (this.moveDecay = 1 - B(this.options.move.decay)),
      (this.offset = pe.origin);
    const b = s.particles;
    (b.needsSort = b.needsSort || b.lastZIndex < this.position.z),
      (b.lastZIndex = this.position.z),
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
      (this.shadowColor = At(this.options.shadow.color));
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
class $T {
  constructor(e, n) {
    (this.position = e), (this.particle = n);
  }
}
class lv {
  constructor(e, n) {
    this.position = { x: e, y: n };
  }
}
class mt extends lv {
  constructor(e, n, i) {
    super(e, n), (this.radius = i);
  }
  contains(e) {
    return rt(e, this.position) <= this.radius;
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
class fn extends lv {
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
    e instanceof mt && e.intersects(this);
    const n = this.size.width,
      i = this.size.height,
      r = this.position,
      s = e.position,
      o = e instanceof fn ? e.size : { width: 0, height: 0 },
      a = o.width,
      l = o.height;
    return s.x < r.x + n && s.x + a > r.x && s.y < r.y + i && s.y + l > r.y;
  }
}
class Ca {
  constructor(e, n) {
    (this.rectangle = e),
      (this.capacity = n),
      (this._subdivide = () => {
        const { x: i, y: r } = this.rectangle.position,
          { width: s, height: o } = this.rectangle.size,
          { capacity: a } = this;
        for (let l = 0; l < 4; l++)
          this._subs.push(
            new Ca(
              new fn(
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
        rt(e.position, s.position) > s.particle.getRadius() &&
        (!n || n(s.particle))) ||
        r.push(s.particle);
    if (this._divided) for (const s of this._subs) s.query(e, n, r);
    return r;
  }
  queryCircle(e, n, i) {
    return this.query(new mt(e.x, e.y, n), i);
  }
  queryRectangle(e, n, i) {
    return this.query(new fn(e.x, e.y, n.width, n.height), i);
  }
}
const Dh = 4,
  jh = (t) =>
    new fn(-t.width / 4, -t.height / 4, (t.width * 3) / 2, (t.height * 3) / 2);
let DT = class {
  constructor(e, n) {
    (this._applyDensity = (r, s, o) => {
      var f;
      if (!((f = r.number.density) != null && f.enable)) return;
      const a = r.number,
        l = this._initDensityFactor(a.density),
        u = a.value,
        c = a.limit > 0 ? a.limit : u,
        d = Math.min(u, c) * l + s,
        p = Math.min(
          this.count,
          this._array.filter((g) => g.group === o).length,
        );
      (this.limit = a.limit * l),
        p < d
          ? this.push(Math.abs(d - p), void 0, r, o)
          : p > d && this.removeQuantity(p - d, o);
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
            : (l = new AT(
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
          console.warn(`${Kt} adding particle: ${l}`);
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
      (this._interactionManager = new LT(this._engine, this._container));
    const i = this._container.canvas.size;
    (this.quadTree = new Ca(jh(i), Dh)),
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
            : bC({ size: e.canvas.size, position: i.position })
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
    (this.quadTree = new Ca(jh(i), Dh)),
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
      this.quadTree.insert(new $T(r.getPosition(), r));
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
class jT {
  constructor(e) {
    this.container = e;
  }
  init() {
    const e = this.container,
      n = e.actualOptions;
    (this.pixelRatio = !n.detectRetina || Zn() ? 1 : window.devicePixelRatio),
      (this.reduceFactor = 1);
    const i = this.pixelRatio;
    if (e.canvas.element) {
      const s = e.canvas.element;
      (e.canvas.size.width = s.offsetWidth * i),
        (e.canvas.size.height = s.offsetHeight * i);
    }
    const r = n.particles;
    (this.attractDistance = B(r.move.attract.distance) * i),
      (this.sizeAnimationSpeed = B(r.size.animation.speed) * i),
      (this.maxSpeed = B(r.move.gravity.maxSpeed) * i);
  }
  initParticle(e) {
    const n = e.options,
      i = this.pixelRatio,
      r = n.move.distance,
      s = e.retina;
    (s.attractDistance = B(n.move.attract.distance) * i),
      (s.moveDrift = B(n.move.drift) * i),
      (s.moveSpeed = B(n.move.speed) * i),
      (s.sizeAnimationSpeed = B(n.size.animation.speed) * i);
    const o = s.maxDistance;
    (o.horizontal = r.horizontal !== void 0 ? r.horizontal * i : void 0),
      (o.vertical = r.vertical !== void 0 ? r.vertical * i : void 0),
      (s.maxSpeed = B(n.move.gravity.maxSpeed) * i);
  }
}
function Se(t) {
  return t && !t.destroyed;
}
function Ri(t, e, ...n) {
  const i = new RT(t, e);
  return av(i, ...n), i;
}
const NT = "default",
  Nh = {
    generate: (t) => t.velocity,
    init: () => {},
    update: () => {},
    reset: () => {},
  };
let FT = class {
  constructor(e, n, i) {
    (this.id = n),
      (this._intersectionManager = (r) => {
        if (!(!Se(this) || !this.actualOptions.pauseOnOutsideViewport))
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
      (this.retina = new jT(this)),
      (this.canvas = new HC(this)),
      (this.particles = new DT(this._engine, this)),
      (this.frameManager = new GC(this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.drawers = new Map()),
      (this._options = Ri(this._engine, this)),
      (this.actualOptions = Ri(this._engine, this)),
      (this._eventListeners = new UC(this)),
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
    if (!Se(this)) return;
    const n = this.interactivity.element;
    if (!n) return;
    const i = (d, p, f) => {
        if (!Se(this)) return;
        const g = this.retina.pixelRatio,
          m = { x: p.x * g, y: p.y * g },
          w = this.particles.quadTree.queryCircle(m, f * g);
        e(d, w);
      },
      r = (d) => {
        if (!Se(this)) return;
        const p = d,
          f = { x: p.offsetX || p.clientX, y: p.offsetY || p.clientY };
        i(d, f, 1);
      },
      s = () => {
        Se(this) && ((u = !0), (c = !1));
      },
      o = () => {
        Se(this) && (c = !0);
      },
      a = (d) => {
        if (Se(this)) {
          if (u && !c) {
            const p = d;
            let f = p.touches[p.touches.length - 1];
            if (!f && ((f = p.changedTouches[p.changedTouches.length - 1]), !f))
              return;
            const g = this.canvas.element,
              m = g ? g.getBoundingClientRect() : void 0,
              w = {
                x: f.clientX - (m ? m.left : 0),
                y: f.clientY - (m ? m.top : 0),
              };
            i(d, w, Math.max(f.radiusX, f.radiusY));
          }
          (u = !1), (c = !1);
        }
      },
      l = () => {
        Se(this) && ((u = !1), (c = !1));
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
    return !Se(this) || (!i && this.pathGenerators.has(e))
      ? !1
      : (this.pathGenerators.set(e, n ?? Nh), !0);
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  destroy() {
    if (!Se(this)) return;
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
    if (!Se(this)) return;
    let n = e;
    this._drawAnimationFrame = _C()(async (i) => {
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
    return !this._paused && !this.pageHidden && Se(this);
  }
  handleClickMode(e) {
    if (Se(this)) {
      this.particles.handleClickMode(e);
      for (const [, n] of this.plugins)
        n.handleClickMode && n.handleClickMode(e);
    }
  }
  async init() {
    if (!Se(this)) return;
    const e = this._engine.plugins.getSupportedShapes();
    for (const i of e) {
      const r = this._engine.plugins.getShapeDrawer(i);
      r && this.drawers.set(i, r);
    }
    (this._options = Ri(
      this._engine,
      this,
      this._initialSourceOptions,
      this.sourceOptions,
    )),
      (this.actualOptions = Ri(this._engine, this, this._options));
    const n = this._engine.plugins.getAvailablePlugins(this);
    for (const [i, r] of n) this.plugins.set(i, r);
    this.retina.init(),
      await this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize(),
      (this.zLayers = this.actualOptions.zLayers),
      (this._duration = B(this.actualOptions.duration) * 1e3),
      (this._delay = B(this.actualOptions.delay) * 1e3),
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
    Se(this) && ((this._currentTheme = e), await this.refresh());
  }
  pause() {
    if (
      Se(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (EC()(this._drawAnimationFrame), delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const [, e] of this.plugins) e.pause && e.pause();
      this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
  }
  play(e) {
    if (!Se(this)) return;
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
    if (Se(this)) return this.stop(), this.start();
  }
  async reset() {
    if (Se(this))
      return (
        (this._initialSourceOptions = void 0),
        (this._options = Ri(this._engine, this)),
        (this.actualOptions = Ri(this._engine, this, this._options)),
        this.refresh()
      );
  }
  setNoise(e, n, i) {
    Se(this) && this.setPath(e, n, i);
  }
  setPath(e, n, i) {
    if (!e || !Se(this)) return;
    const r = { ...Nh };
    if (typeof e == "function")
      (r.generate = e), n && (r.init = n), i && (r.update = i);
    else {
      const s = r;
      (r.generate = e.generate || s.generate),
        (r.init = e.init || s.init),
        (r.update = e.update || s.update);
    }
    this.addPath(NT, r, !0);
  }
  async start() {
    !Se(this) ||
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
    if (!(!Se(this) || !this.started)) {
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
async function BT(t, e) {
  const n = _t(t, e);
  if (!n) return;
  const i = await fetch(n);
  if (i.ok) return i.json();
  console.error(`${Kt} ${i.status} while retrieving config file`);
}
class WT {
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
    const n = e.tagId ?? `tsparticles${Math.floor(Q() * 1e4)}`,
      { index: i, url: r, remote: s } = e,
      o = s ? await BT(r, i) : e.options;
    let a = e.element ?? document.getElementById(n);
    a ||
      ((a = document.createElement("div")),
      (a.id = n),
      document.body.append(a));
    const l = _t(o, i),
      u = this._engine.dom(),
      c = u.findIndex((f) => f.id === n);
    if (c >= 0) {
      const f = this._engine.domItem(c);
      f && !f.destroyed && (f.destroy(), u.splice(c, 1));
    }
    let d;
    if (a.tagName.toLowerCase() === "canvas")
      (d = a), (d.dataset[as] = "false");
    else {
      const f = a.getElementsByTagName("canvas");
      f.length
        ? ((d = f[0]), (d.dataset[as] = "false"))
        : ((d = document.createElement("canvas")),
          (d.dataset[as] = "true"),
          a.appendChild(d));
    }
    d.style.width || (d.style.width = "100%"),
      d.style.height || (d.style.height = "100%");
    const p = new FT(this._engine, n, l);
    return (
      c >= 0 ? u.splice(c, 0, p) : u.push(p),
      p.canvas.loadCanvas(d),
      await p.start(),
      p
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
function bu(t, e, n, i = !1) {
  let r = e.get(t);
  return (!r || i) && ((r = [...n.values()].map((s) => s(t))), e.set(t, r)), r;
}
class HT {
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
    we(e, (i) => {
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
    return bu(e, this.interactors, this._initializers.interactors, n);
  }
  getMovers(e, n = !1) {
    return bu(e, this.movers, this._initializers.movers, n);
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
    return bu(e, this.updaters, this._initializers.updaters, n);
  }
  loadOptions(e, n) {
    for (const i of this.plugins) i.loadOptions(e, n);
  }
  loadParticlesOptions(e, n, ...i) {
    const r = this.updaters.get(e);
    if (r) for (const s of r) s.loadOptions && s.loadOptions(n, ...i);
  }
}
class UT {
  constructor() {
    (this._configs = new Map()),
      (this._domArray = []),
      (this._eventDispatcher = new aC()),
      (this._initialized = !1),
      (this._loader = new WT(this)),
      (this.plugins = new HT(this));
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
        `${Kt} can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()`,
      );
    for (const i of n) i.addClickHandler(e);
  }
}
class VT {
  constructor() {
    (this.key = "hsl"), (this.stringPrefix = "hsl");
  }
  handleColor(e) {
    const n = e.value,
      i = n.hsl ?? e.value;
    if (i.h !== void 0 && i.s !== void 0 && i.l !== void 0) return wr(i);
  }
  handleRangeColor(e) {
    const n = e.value,
      i = n.hsl ?? e.value;
    if (i.h !== void 0 && i.l !== void 0)
      return wr({ h: B(i.h), l: B(i.l), s: B(i.s) });
  }
  parseString(e) {
    if (!e.startsWith("hsl")) return;
    const n =
        /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      i = n.exec(e);
    return i
      ? IC({
          a: i.length > 4 ? Vy(i[5]) : 1,
          h: parseInt(i[1], 10),
          l: parseInt(i[3], 10),
          s: parseInt(i[2], 10),
        })
      : void 0;
  }
}
class GT {
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
    if (i.r !== void 0) return { r: B(i.r), g: B(i.g), b: B(i.b) };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix)) return;
    const n =
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
      i = n.exec(e);
    return i
      ? {
          a: i.length > 4 ? Vy(i[5]) : 1,
          b: parseInt(i[3], 10),
          g: parseInt(i[2], 10),
          r: parseInt(i[1], 10),
        }
      : void 0;
  }
}
class Qt {
  constructor(e) {
    (this.container = e), (this.type = "external");
  }
}
class hf {
  constructor(e) {
    (this.container = e), (this.type = "particles");
  }
}
const qT = new GT(),
  KT = new VT();
Jy(qT);
Jy(KT);
const nr = new UT();
nr.init();
Zn() || (window.tsParticles = nr);
var mf = { exports: {} },
  uv = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i();
  })(Vo, function () {
    var n = typeof Promise == "function",
      i = typeof self == "object" ? self : Vo,
      r = typeof Symbol < "u",
      s = typeof Map < "u",
      o = typeof Set < "u",
      a = typeof WeakMap < "u",
      l = typeof WeakSet < "u",
      u = typeof DataView < "u",
      c = r && typeof Symbol.iterator < "u",
      d = r && typeof Symbol.toStringTag < "u",
      p = o && typeof Set.prototype.entries == "function",
      f = s && typeof Map.prototype.entries == "function",
      g = p && Object.getPrototypeOf(new Set().entries()),
      m = f && Object.getPrototypeOf(new Map().entries()),
      w = c && typeof Array.prototype[Symbol.iterator] == "function",
      y = w && Object.getPrototypeOf([][Symbol.iterator]()),
      h = c && typeof String.prototype[Symbol.iterator] == "function",
      v = h && Object.getPrototypeOf(""[Symbol.iterator]()),
      b = 8,
      x = -1;
    function k(S) {
      var C = typeof S;
      if (C !== "object") return C;
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
      var T = d && S[Symbol.toStringTag];
      if (typeof T == "string") return T;
      var z = Object.getPrototypeOf(S);
      return z === RegExp.prototype
        ? "RegExp"
        : z === Date.prototype
        ? "Date"
        : n && z === Promise.prototype
        ? "Promise"
        : o && z === Set.prototype
        ? "Set"
        : s && z === Map.prototype
        ? "Map"
        : l && z === WeakSet.prototype
        ? "WeakSet"
        : a && z === WeakMap.prototype
        ? "WeakMap"
        : u && z === DataView.prototype
        ? "DataView"
        : s && z === m
        ? "Map Iterator"
        : o && z === g
        ? "Set Iterator"
        : w && z === y
        ? "Array Iterator"
        : h && z === v
        ? "String Iterator"
        : z === null
        ? "Object"
        : Object.prototype.toString.call(S).slice(b, x);
    }
    return k;
  });
})(uv);
var YT = uv.exports;
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */ var Fh = YT;
function cv() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
cv.prototype = {
  get: function (e) {
    return e[this._key];
  },
  set: function (e, n) {
    Object.isExtensible(e) &&
      Object.defineProperty(e, this._key, { value: n, configurable: !0 });
  },
};
var gf = typeof WeakMap == "function" ? WeakMap : cv;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
 */ function Bh(t, e, n) {
  if (!n || Sr(t) || Sr(e)) return null;
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
 */ function wo(t, e, n, i) {
  if (!(!n || Sr(t) || Sr(e))) {
    var r = n.get(t);
    r ? r.set(e, i) : ((r = new gf()), r.set(e, i), n.set(t, r));
  }
}
/*!
 * Primary Export
 */ mf.exports = fl;
mf.exports.MemoizeMap = gf;
function fl(t, e, n) {
  if (n && n.comparator) return Wh(t, e, n);
  var i = dv(t, e);
  return i !== null ? i : Wh(t, e, n);
}
function dv(t, e) {
  return t === e
    ? t !== 0 || 1 / t === 1 / e
    : t !== t && e !== e
    ? !0
    : Sr(t) || Sr(e)
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
*/ function Wh(t, e, n) {
  (n = n || {}), (n.memoize = n.memoize === !1 ? !1 : n.memoize || new gf());
  var i = n && n.comparator,
    r = Bh(t, e, n.memoize);
  if (r !== null) return r;
  var s = Bh(e, t, n.memoize);
  if (s !== null) return s;
  if (i) {
    var o = i(t, e);
    if (o === !1 || o === !0) return wo(t, e, n.memoize, o), o;
    var a = dv(t, e);
    if (a !== null) return a;
  }
  var l = Fh(t);
  if (l !== Fh(e)) return wo(t, e, n.memoize, !1), !1;
  wo(t, e, n.memoize, !0);
  var u = QT(t, e, l, n);
  return wo(t, e, n.memoize, u), u;
}
function QT(t, e, n, i) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return fl(t.valueOf(), e.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return t === e;
    case "Error":
      return fv(t, e, ["name", "message", "code"], i);
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
      return mi(t, e, i);
    case "RegExp":
      return XT(t, e);
    case "Generator":
      return JT(t, e, i);
    case "DataView":
      return mi(new Uint8Array(t.buffer), new Uint8Array(e.buffer), i);
    case "ArrayBuffer":
      return mi(new Uint8Array(t), new Uint8Array(e), i);
    case "Set":
      return Hh(t, e, i);
    case "Map":
      return Hh(t, e, i);
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
      return eP(t, e, i);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */ function XT(t, e) {
  return t.toString() === e.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function Hh(t, e, n) {
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
    mi(i.sort(), r.sort(), n)
  );
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function mi(t, e, n) {
  var i = t.length;
  if (i !== e.length) return !1;
  if (i === 0) return !0;
  for (var r = -1; ++r < i; ) if (fl(t[r], e[r], n) === !1) return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */ function JT(t, e, n) {
  return mi($c(t), $c(e), n);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */ function ZT(t) {
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
 */ function Uh(t) {
  if (ZT(t))
    try {
      return $c(t[Symbol.iterator]());
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
 */ function $c(t) {
  for (var e = t.next(), n = [e.value]; e.done === !1; )
    (e = t.next()), n.push(e.value);
  return n;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */ function Vh(t) {
  var e = [];
  for (var n in t) e.push(n);
  return e;
}
function Gh(t) {
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
 */ function fv(t, e, n, i) {
  var r = n.length;
  if (r === 0) return !0;
  for (var s = 0; s < r; s += 1) if (fl(t[n[s]], e[n[s]], i) === !1) return !1;
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
 */ function eP(t, e, n) {
  var i = Vh(t),
    r = Vh(e),
    s = Gh(t),
    o = Gh(e);
  if (((i = i.concat(s)), (r = r.concat(o)), i.length && i.length === r.length))
    return mi(qh(i).sort(), qh(r).sort()) === !1 ? !1 : fv(t, e, i, n);
  var a = Uh(t),
    l = Uh(e);
  return a.length && a.length === l.length
    ? (a.sort(), l.sort(), mi(a, l, n))
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
 */ function Sr(t) {
  return t === null || typeof t != "object";
}
function qh(t) {
  return t.map(function (n) {
    return typeof n == "symbol" ? n.toString() : n;
  });
}
var tP = mf.exports;
const nP = Rs(tP),
  pv = "tsparticles";
let yf = class hv extends A.Component {
  constructor(e) {
    super(e), (this.state = { init: !1, library: void 0 });
  }
  destroy() {
    this.state.library &&
      (this.state.library.destroy(), this.setState({ library: void 0 }));
  }
  shouldComponentUpdate(e) {
    return !nP(e, this.props);
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
      this.props.init && (await this.props.init(nr)),
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
    return Y.createElement(
      "div",
      { className: i, id: s },
      Y.createElement("canvas", {
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
      n = this.props.id ?? hv.defaultProps.id ?? pv,
      i = this.props.url
        ? await nr.loadJSON(n, this.props.url)
        : await nr.load(n, this.props.params ?? this.props.options);
    await e(i);
  }
};
yf.defaultProps = {
  width: "100%",
  height: "100%",
  options: {},
  style: {},
  url: void 0,
  id: pv,
};
class iP {
  constructor() {
    (this.radius = 0), (this.mass = 0);
  }
  load(e) {
    e &&
      (e.mass !== void 0 && (this.mass = e.mass),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class rP extends Nt {
  constructor() {
    super(), (this.density = 5), (this.value = 50), (this.limit = new iP());
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
class Ta {
  constructor() {
    (this.color = new Oe()),
      (this.color.value = "#000000"),
      (this.draggable = !1),
      (this.opacity = 1),
      (this.destroy = !0),
      (this.orbits = !1),
      (this.size = new rP());
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.draggable !== void 0 && (this.draggable = e.draggable),
      (this.name = e.name),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = q(e.position.x)),
        e.position.y !== void 0 && (this.position.y = q(e.position.y))),
      e.size !== void 0 && this.size.load(e.size),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.orbits !== void 0 && (this.orbits = e.orbits));
  }
}
class sP {
  constructor(e, n, i, r) {
    var o;
    (this.absorbers = e),
      (this.container = n),
      (this._calcPosition = () => {
        const a = Uy({
          size: this.container.canvas.size,
          position: this.options.position,
        });
        return pe.create(a.x, a.y);
      }),
      (this._updateParticlePosition = (a, l) => {
        if (a.destroyed) return;
        const u = this.container,
          c = u.canvas.size;
        if (a.needsNewPosition) {
          const d = Hy({ size: c });
          a.position.setTo(d),
            a.velocity.setTo(a.initialVelocity),
            (a.absorberOrbit = void 0),
            (a.needsNewPosition = !1);
        }
        if (this.options.orbits) {
          if (
            (a.absorberOrbit === void 0 &&
              ((a.absorberOrbit = pe.create(0, 0)),
              (a.absorberOrbit.length = rt(a.getPosition(), this.position)),
              (a.absorberOrbit.angle = Q() * Math.PI * 2)),
            a.absorberOrbit.length <= this.size && !this.options.destroy)
          ) {
            const m = Math.min(c.width, c.height);
            a.absorberOrbit.length = m * (1 + (Q() * 0.2 - 0.1));
          }
          a.absorberOrbitDirection === void 0 &&
            (a.absorberOrbitDirection =
              a.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
          const d = a.absorberOrbit.length,
            p = a.absorberOrbit.angle,
            f = a.absorberOrbitDirection;
          a.velocity.setTo(pe.origin);
          const g = {
            x: f === "clockwise" ? Math.cos : Math.sin,
            y: f === "clockwise" ? Math.sin : Math.cos,
          };
          (a.position.x = this.position.x + d * g.x(p)),
            (a.position.y = this.position.y + d * g.y(p)),
            (a.absorberOrbit.length -= l.length),
            (a.absorberOrbit.angle +=
              (((a.retina.moveSpeed ?? 0) * u.retina.pixelRatio) / 100) *
              u.retina.reduceFactor);
        } else {
          const d = pe.origin;
          (d.length = l.length), (d.angle = l.angle), a.velocity.addTo(d);
        }
      }),
      (this.initialPosition = r ? pe.create(r.x, r.y) : void 0),
      i instanceof Ta
        ? (this.options = i)
        : ((this.options = new Ta()), this.options.load(i)),
      (this.dragging = !1),
      (this.name = this.options.name),
      (this.opacity = this.options.opacity),
      (this.size = B(this.options.size.value) * n.retina.pixelRatio),
      (this.mass =
        this.size * this.options.size.density * n.retina.reduceFactor);
    const s = this.options.size.limit;
    (this.limit = {
      radius: s.radius * n.retina.pixelRatio * n.retina.reduceFactor,
      mass: s.mass,
    }),
      (this.color = At(this.options.color) ?? { b: 0, g: 0, r: 0 }),
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
        ? rt(this.position, u.downPosition) <= this.size && (this.dragging = !0)
        : (this.dragging = !1),
        this.dragging &&
          u.position &&
          ((this.position.x = u.position.x), (this.position.y = u.position.y));
    }
    const r = e.getPosition(),
      { dx: s, dy: o, distance: a } = et(this.position, r),
      l = pe.create(s, o);
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
      (e.fillStyle = dn(this.color, this.opacity)),
      e.fill();
  }
  resize() {
    const e = this.initialPosition;
    this.position =
      e && Us(e, this.container.canvas.size, pe.origin)
        ? e
        : this._calcPosition();
  }
}
class oP {
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
    const i = new sP(this, this.container, e, n);
    return this.array.push(i), i;
  }
  draw(e) {
    for (const n of this.array) n.draw(e);
  }
  handleClickMode(e) {
    const n = this.absorbers,
      i = this.interactivityAbsorbers;
    if (e === "absorber") {
      const r = _t(i),
        s = r ?? _t(n),
        o = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(s, o);
    }
  }
  async init() {
    (this.absorbers = this.container.actualOptions.absorbers),
      (this.interactivityAbsorbers =
        this.container.actualOptions.interactivity.modes.absorbers),
      we(this.absorbers, (e) => {
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
class aP {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(e) {
    return new oP(e);
  }
  loadOptions(e, n) {
    var i, r;
    (!this.needsPlugin(e) && !this.needsPlugin(n)) ||
      (n != null &&
        n.absorbers &&
        (e.absorbers = we(n.absorbers, (s) => {
          const o = new Ta();
          return o.load(s), o;
        })),
      (e.interactivity.modes.absorbers = we(
        (r =
          (i = n == null ? void 0 : n.interactivity) == null
            ? void 0
            : i.modes) == null
          ? void 0
          : r.absorbers,
        (s) => {
          const o = new Ta();
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
          ve("absorber", e.interactivity.events.onClick.mode)
        );
  }
}
async function lP(t) {
  const e = new aP();
  await t.addPlugin(e);
}
class uP {
  load(e) {
    e &&
      (e.bottom !== void 0 && (this.bottom = q(e.bottom)),
      e.left !== void 0 && (this.left = q(e.left)),
      e.right !== void 0 && (this.right = q(e.right)),
      e.top !== void 0 && (this.top = q(e.top)));
  }
}
class cP extends Nt {
  constructor() {
    super(), (this.value = 3);
  }
}
class dP extends Nt {
  constructor() {
    super(), (this.value = { min: 4, max: 9 });
  }
}
class fP {
  constructor() {
    (this.count = 1),
      (this.factor = new cP()),
      (this.rate = new dP()),
      (this.sizeOffset = !0);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.count !== void 0 && (this.count = e.count),
      this.factor.load(e.factor),
      this.rate.load(e.rate),
      (this.particles = we(e.particles, (n) => Re({}, n))),
      e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset),
      e.colorOffset &&
        ((this.colorOffset = this.colorOffset ?? {}),
        e.colorOffset.h !== void 0 && (this.colorOffset.h = e.colorOffset.h),
        e.colorOffset.s !== void 0 && (this.colorOffset.s = e.colorOffset.s),
        e.colorOffset.l !== void 0 && (this.colorOffset.l = e.colorOffset.l)));
  }
}
class pP {
  constructor() {
    (this.bounds = new uP()), (this.mode = "none"), (this.split = new fP());
  }
  load(e) {
    e &&
      (e.mode && (this.mode = e.mode),
      e.bounds && this.bounds.load(e.bounds),
      this.split.load(e.split));
  }
}
function hP(t, e, n, i) {
  const r = n.options.destroy;
  if (!r) return;
  const s = r.split,
    o = pf(t, e, n.options),
    a = Tn(s.factor),
    l = n.getFillColor();
  s.color
    ? o.color.load(s.color)
    : s.colorOffset && l
    ? o.color.load({
        value: {
          hsl: {
            h: l.h + B(s.colorOffset.h ?? 0),
            s: l.s + B(s.colorOffset.s ?? 0),
            l: l.l + B(s.colorOffset.l ?? 0),
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
  const u = s.sizeOffset ? q(-n.size.value, n.size.value) : 0,
    c = { x: n.position.x + We(u), y: n.position.y + We(u) };
  return e.particles.addParticle(c, o, n.group, (d) =>
    d.size.value < 0.5
      ? !1
      : ((d.velocity.length = We(q(n.velocity.length, d.velocity.length))),
        (d.splitCount = (n.splitCount ?? 0) + 1),
        (d.unbreakable = !0),
        setTimeout(() => {
          d.unbreakable = !1;
        }, 500),
        !0),
  );
}
function mP(t, e, n) {
  const i = n.options.destroy;
  if (!i) return;
  const r = i.split;
  if (r.count >= 0 && (n.splitCount === void 0 || n.splitCount++ > r.count))
    return;
  const s = Tn(r.rate),
    o = _t(r.particles);
  for (let a = 0; a < s; a++) hP(t, e, n, o);
}
class gP {
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
    o && (c.bottom = (B(o) * d.height) / 100),
      a && (c.left = (B(a) * d.width) / 100),
      l && (c.right = (B(l) * d.width) / 100),
      u && (c.top = (B(u) * d.height) / 100);
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...n) {
    e.destroy || (e.destroy = new pP());
    for (const i of n) e.destroy.load(i == null ? void 0 : i.destroy);
  }
  particleDestroyed(e, n) {
    if (n) return;
    const i = e.options.destroy;
    i && i.mode === "split" && mP(this.engine, this.container, e);
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
async function yP(t) {
  await t.addParticleUpdater("destroy", (e) => new gP(t, e));
}
class vP {
  randomPosition(e, n, i) {
    const r = (d, p) => {
        const f = Q() / 4,
          g = Math.atan((p / d) * Math.tan(2 * Math.PI * f)),
          m = Q();
        return m < 0.25
          ? g
          : m < 0.5
          ? Math.PI - g
          : m < 0.75
          ? Math.PI + g
          : -g;
      },
      s = (d, p, f) =>
        (d * p) / Math.sqrt((p * Math.cos(f)) ** 2 + (d * Math.sin(f)) ** 2),
      [o, a] = [n.width / 2, n.height / 2],
      l = r(o, a),
      u = s(o, a, l),
      c = i ? u * Math.sqrt(Q()) : u;
    return { x: e.x + c * Math.cos(l), y: e.y + c * Math.sin(l) };
  }
}
class wP {
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
class bP {
  constructor() {
    (this.quantity = 1), (this.delay = 0.1);
  }
  load(e) {
    e !== void 0 &&
      (e.quantity !== void 0 && (this.quantity = q(e.quantity)),
      e.delay !== void 0 && (this.delay = q(e.delay)));
  }
}
class mv {
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
class Dn {
  constructor() {
    (this.autoPlay = !0),
      (this.fill = !0),
      (this.life = new wP()),
      (this.rate = new bP()),
      (this.shape = "square"),
      (this.startCount = 0);
  }
  load(e) {
    e &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.size !== void 0 &&
        (this.size || (this.size = new mv()), this.size.load(e.size)),
      e.direction !== void 0 && (this.direction = e.direction),
      (this.domId = e.domId),
      e.fill !== void 0 && (this.fill = e.fill),
      this.life.load(e.life),
      (this.name = e.name),
      (this.particles = we(e.particles, (n) => Re({}, n))),
      this.rate.load(e.rate),
      e.shape !== void 0 && (this.shape = e.shape),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = q(e.position.x)),
        e.position.y !== void 0 && (this.position.y = q(e.position.y))),
      e.spawnColor !== void 0 &&
        (this.spawnColor === void 0 && (this.spawnColor = new xr()),
        this.spawnColor.load(e.spawnColor)),
      e.startCount !== void 0 && (this.startCount = e.startCount));
  }
}
class xP {
  constructor(e, n, i, r, s) {
    var a, l;
    (this.emitters = n),
      (this.container = i),
      (this._calcPosition = () =>
        Uy({
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
        const u = B(this.options.rate.quantity);
        this._emitParticles(u);
      }),
      (this._emitParticles = (u) => {
        var f, g;
        const c = this.getPosition(),
          d = this.getSize(),
          p = _t(this._particlesOptions);
        for (let m = 0; m < u; m++) {
          const w = Re({}, p);
          if (this.spawnColor) {
            const h =
              (f = this.options.spawnColor) == null ? void 0 : f.animation;
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
              w.color
                ? (w.color.value = this.spawnColor)
                : (w.color = { value: this.spawnColor });
          }
          if (!c) return;
          const y =
            ((g = this._shape) == null
              ? void 0
              : g.randomPosition(c, d, this.fill)) ?? c;
          this.container.particles.addParticle(y, w);
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
        const p = this.container;
        if (!u.enable) return c;
        const f = We(u.offset),
          g = B(this.options.rate.delay),
          m = (1e3 * g) / p.retina.reduceFactor,
          w = B(u.speed ?? 0);
        return (c + (w * p.fpsLimit) / m + f * 3.6) % d;
      }),
      (this._engine = e),
      (this._currentDuration = 0),
      (this._currentEmitDelay = 0),
      (this._currentSpawnDelay = 0),
      (this._initialPosition = s),
      r instanceof Dn
        ? (this.options = r)
        : ((this.options = new Dn()), this.options.load(r)),
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
    let o = Re({}, this.options.particles);
    o ?? (o = {}),
      o.move ?? (o.move = {}),
      (l = o.move).direction ?? (l.direction = this.options.direction),
      this.options.spawnColor &&
        (this.spawnColor = ei(this.options.spawnColor)),
      (this._paused = !this.options.autoPlay),
      (this._particlesOptions = o),
      (this.size =
        this.options.size ??
        (() => {
          const u = new mv();
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
        const e = B(this.options.rate.delay);
        this._emitDelay = (1e3 * e) / this.container.retina.reduceFactor;
      }
      (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
    }
  }
  resize() {
    const e = this._initialPosition;
    this.position =
      e && Us(e, this.container.canvas.size, pe.origin)
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
class SP {
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
    const i = new Dn();
    i.load(e);
    const r = new xP(this._engine, this, this.container, i, n);
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
          const u = qy(i.value);
          if (a.includes(u) && a.length < i.value.length) {
            l--;
            continue;
          }
          a.push(u), r.push(Hs(i.value, u));
        }
      } else r = i.value;
    else r = i == null ? void 0 : i.value;
    const s = r ?? n,
      o = this.container.interactivity.mouse.clickPosition;
    we(s, (a) => {
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
const xu = new Map();
class kP {
  constructor(e) {
    this._engine = e;
  }
  addShape(e, n) {
    this.getShape(e) || xu.set(e, n);
  }
  getShape(e) {
    return xu.get(e);
  }
  getSupportedShapes() {
    return xu.keys();
  }
}
function Kh(t, e) {
  return t + e * (Q() - 0.5);
}
class _P {
  randomPosition(e, n, i) {
    if (i) return { x: Kh(e.x, n.width), y: Kh(e.y, n.height) };
    {
      const r = n.width / 2,
        s = n.height / 2,
        o = Math.floor(Q() * 4),
        a = (Q() - 0.5) * 2;
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
class EP {
  constructor(e) {
    (this._engine = e), (this.id = "emitters");
  }
  getPlugin(e) {
    return new SP(this._engine, e);
  }
  loadOptions(e, n) {
    var r, s;
    if (!this.needsPlugin(e) && !this.needsPlugin(n)) return;
    n != null &&
      n.emitters &&
      (e.emitters = we(n.emitters, (o) => {
        const a = new Dn();
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
            const a = new Dn();
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
                const l = new Dn();
                return l.load(a), l;
              }),
            };
          else {
            const a = new Dn();
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
            value: new Dn(),
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
        ve("emitter", e.interactivity.events.onClick.mode))
    );
  }
}
async function CP(t) {
  t.emitterShapeManager || (t.emitterShapeManager = new kP(t)),
    t.addEmitterShape ||
      (t.addEmitterShape = (n, i) => {
        var r;
        (r = t.emitterShapeManager) == null || r.addShape(n, i);
      });
  const e = new EP(t);
  await t.addPlugin(e),
    t.addEmitterShape("circle", new vP()),
    t.addEmitterShape("square", new _P());
}
class TP {
  constructor() {
    (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
  }
  load(e) {
    e &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.quantity !== void 0 && (this.quantity = e.quantity),
      e.particles !== void 0 && (this.particles = Re({}, e.particles)),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop));
  }
}
class PP extends Qt {
  constructor(e) {
    super(e), (this._delay = 0);
  }
  clear() {}
  init() {}
  async interact(e) {
    var u, c, d, p;
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
              ((p = this._lastPosition) == null ? void 0 : p.y)))
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
      (r.clicking && r.inside && !!r.position && ve("trail", s.onClick.mode)) ||
      (r.inside && !!r.position && ve("trail", s.onHover.mode))
    );
  }
  loadModeOptions(e, ...n) {
    e.trail || (e.trail = new TP());
    for (const i of n) e.trail.load(i == null ? void 0 : i.trail);
  }
  reset() {}
}
async function zP(t) {
  await t.addInteractor("externalTrail", (e) => new PP(e));
}
function OP(t) {
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
      angle: Q() * Math.PI * 2,
      speed: B(e.speed) / 360,
    }),
    e.backColor)
  )
    t.backColor = ei(e.backColor);
  else if (e.darken.enable && e.enlighten.enable) {
    const n = Q() >= 0.5 ? "darken" : "enlighten";
    t.roll.alter = {
      type: n,
      value: B(n === "darken" ? e.darken.value : e.enlighten.value),
    };
  } else
    e.darken.enable
      ? (t.roll.alter = { type: "darken", value: B(e.darken.value) })
      : e.enlighten.enable &&
        (t.roll.alter = { type: "enlighten", value: B(e.enlighten.value) });
}
function MP(t, e) {
  const n = t.options.roll,
    i = t.roll;
  if (!i || !(n != null && n.enable)) return;
  const r = i.speed * e.factor,
    s = 2 * Math.PI;
  (i.angle += r), i.angle > s && (i.angle -= s);
}
class Yh {
  constructor() {
    (this.enable = !1), (this.value = 0);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.value !== void 0 && (this.value = q(e.value)));
  }
}
class IP {
  constructor() {
    (this.darken = new Yh()),
      (this.enable = !1),
      (this.enlighten = new Yh()),
      (this.mode = "vertical"),
      (this.speed = 25);
  }
  load(e) {
    e &&
      (e.backColor !== void 0 &&
        (this.backColor = Oe.create(this.backColor, e.backColor)),
      this.darken.load(e.darken),
      e.enable !== void 0 && (this.enable = e.enable),
      this.enlighten.load(e.enlighten),
      e.mode !== void 0 && (this.mode = e.mode),
      e.speed !== void 0 && (this.speed = q(e.speed)));
  }
}
class RP {
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
    OP(e);
  }
  isEnabled(e) {
    const n = e.options.roll;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...n) {
    e.roll || (e.roll = new IP());
    for (const i of n) e.roll.load(i == null ? void 0 : i.roll);
  }
  update(e, n) {
    this.isEnabled(e) && MP(e, n);
  }
}
async function LP(t) {
  await t.addParticleUpdater("roll", () => new RP());
}
class Pa {
  static init(e) {
    var s;
    const n = new Pa(),
      i = e.selector;
    if (!i) throw new Error("No selector provided");
    const r = document.querySelector(i);
    if (!r) throw new Error("No element found for selector");
    return (
      nr
        .set(i.replace(".", "").replace("!", ""), r, {
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
                            (u = o.options) == null
                              ? void 0
                              : u.connectParticles,
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
        })
        .then((o) => {
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
const AP = (t) => {
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
  $P = (t) => {
    const { particlesJS: e, pJSDom: n } = AP(t);
    return (
      (window.particlesJS = e),
      (window.pJSDom = n),
      (window.Particles = Pa),
      { particlesJS: e, pJSDom: n, Particles: Pa }
    );
  };
function DP(t) {
  const e = t.initialPosition,
    { dx: n, dy: i } = et(e, t.position),
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
      a && ((u.x < e.x && c.x < 0) || (u.x > e.x && c.x > 0)) && (c.x *= -Q()),
        l &&
          ((u.y < e.y && c.y < 0) || (u.y > e.y && c.y > 0)) &&
          (c.y *= -Q());
    }
  }
}
function jP(t, e, n, i, r, s) {
  FP(t, s);
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
  const { position: p } = t;
  p.addTo(u),
    e.vibrate &&
      ((p.x += Math.sin(p.x * Math.cos(p.y))),
      (p.y += Math.cos(p.y * Math.sin(p.x))));
}
function NP(t, e) {
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
function FP(t, e) {
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
      ((t.velocity.x = Yt(t.velocity.x, -1, 1)),
      (t.velocity.y = Yt(t.velocity.y, -1, 1))),
    (t.lastPathTime -= t.pathDelay);
}
function BP(t) {
  return t.slow.inRange ? t.slow.factor : 1;
}
const WP = 2;
class HP {
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
        l = rt(a, o),
        u = B(r.acceleration);
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
      acceleration: B(i.acceleration),
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
      a = BP(e),
      l =
        ((g = e.retina).moveSpeed ?? (g.moveSpeed = B(r.speed) * o)) *
        s.retina.reduceFactor,
      u =
        (m = e.retina).moveDrift ?? (m.moveDrift = B(e.options.move.drift) * o),
      c = Wn(i.size.value) * o,
      d = r.size ? e.getRadius() / c : 1,
      p = (l * d * a * (n.factor || 1)) / WP,
      f = e.retina.maxSpeed ?? s.retina.maxSpeed;
    r.spin.enable ? NP(e, p) : jP(e, r, p, f, u, n), DP(e);
  }
}
async function UP(t) {
  t.addMover("base", () => new HP());
}
class VP {
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
async function GP(t) {
  await t.addShape("circle", new VP());
}
function Su(t, e, n, i, r) {
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
  const s = We(n.offset),
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
function qP(t, e) {
  const { h: n, s: i, l: r } = t.options.color.animation,
    { color: s } = t;
  if (!s) return;
  const { h: o, s: a, l } = s;
  o && Su(e, o, n, 360, !1),
    a && Su(e, a, i, 100, !0),
    l && Su(e, l, r, 100, !0);
}
class KP {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = ei(e.options.color, e.id, e.options.reduceDuplicates);
    n &&
      (e.color = iv(
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
    qP(e, n);
  }
}
async function YP(t) {
  await t.addParticleUpdater("color", (e) => new KP(e));
}
class QP {
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
let XP = class extends Qt {
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
          this._processAttract(s, o, new mt(s.x, s.y, o));
        } else r.clicking === !1 && (r.particles = []);
      }),
      (this._hoverAttract = () => {
        const i = this.container,
          r = i.interactivity.mouse.position,
          s = i.retina.attractModeDistance;
        !s || s < 0 || !r || this._processAttract(r, s, new mt(r.x, r.y, s));
      }),
      (this._processAttract = (i, r, s) => {
        const o = this.container,
          a = o.actualOptions.interactivity.modes.attract;
        if (!a) return;
        const l = o.particles.quadTree.query(s, (u) => this.isEnabled(u));
        for (const u of l) {
          const { dx: c, dy: d, distance: p } = et(u.position, i),
            f = a.speed * a.factor,
            g = Yt(Wy(a.easing)(1 - p / r) * f, 0, a.maxSpeed),
            m = pe.create(p === 0 ? f : (c / p) * g, p === 0 ? f : (d / p) * g);
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
      i = e.interactivity.status === ki,
      r = n.interactivity.events,
      s = r.onHover.enable,
      o = r.onHover.mode,
      a = r.onClick.enable,
      l = r.onClick.mode;
    i && s && ve("attract", o)
      ? this._hoverAttract()
      : a && ve("attract", l) && this._clickAttract();
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
    return ve("attract", o) || ve("attract", a);
  }
  loadModeOptions(e, ...n) {
    e.attract || (e.attract = new QP());
    for (const i of n) e.attract.load(i == null ? void 0 : i.attract);
  }
  reset() {}
};
async function JP(t) {
  await t.addInteractor("externalAttract", (e) => new XP(t, e));
}
class ZP {
  constructor() {
    this.distance = 200;
  }
  load(e) {
    e && e.distance !== void 0 && (this.distance = e.distance);
  }
}
class e4 extends Qt {
  constructor(e) {
    super(e),
      (this._processBounce = (n, i, r) => {
        const s = this.container.particles.quadTree.query(r, (o) =>
          this.isEnabled(o),
        );
        for (const o of s)
          r instanceof mt
            ? Yy(Lc(o), {
                position: n,
                radius: i,
                mass: (i ** 2 * Math.PI) / 2,
                velocity: pe.origin,
                factor: pe.origin,
              })
            : r instanceof fn && zC(o, Vs(n, i));
      }),
      (this._processMouseBounce = () => {
        const n = this.container,
          i = n.retina.pixelRatio,
          r = 10 * i,
          s = n.interactivity.mouse.position,
          o = n.retina.bounceModeDistance;
        !o || o < 0 || !s || this._processBounce(s, o, new mt(s.x, s.y, o + r));
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
              p =
                i.type === "circle"
                  ? new mt(u.x, u.y, c + d)
                  : new fn(
                      a.offsetLeft * l - d,
                      a.offsetTop * l - d,
                      a.offsetWidth * l + d * 2,
                      a.offsetHeight * l + d * 2,
                    );
            this._processBounce(u, c, p);
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
      r = e.interactivity.status === ki,
      s = i.onHover.enable,
      o = i.onHover.mode,
      a = i.onDiv;
    r && s && ve("bounce", o)
      ? this._processMouseBounce()
      : df("bounce", a, (l, u) => this._singleSelectorBounce(l, u));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      o = s.onDiv;
    return (
      (r.position && s.onHover.enable && ve("bounce", s.onHover.mode)) ||
      cf("bounce", o)
    );
  }
  loadModeOptions(e, ...n) {
    e.bounce || (e.bounce = new ZP());
    for (const i of n) e.bounce.load(i == null ? void 0 : i.bounce);
  }
  reset() {}
}
async function t4(t) {
  await t.addInteractor("externalBounce", (e) => new e4(e));
}
class gv {
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
        this.color = we(e.color, (i) => Oe.create(n, i));
      }
      e.size !== void 0 && (this.size = e.size);
    }
  }
}
class n4 extends gv {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return we(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = we(e, (n) => `#${n}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class i4 extends gv {
  load(e) {
    super.load(e),
      e &&
        (this.divs = we(e.divs, (n) => {
          const i = new n4();
          return i.load(n), i;
        }));
  }
}
function Qh(t, e, n, i) {
  if (e >= n) {
    const r = t + (e - n) * i;
    return Yt(r, t, e);
  } else if (e < n) {
    const r = t - (n - e) * i;
    return Yt(r, e, t);
  }
}
class r4 extends Qt {
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
            p = rt(d, r),
            f =
              (new Date().getTime() - (n.interactivity.mouse.clickTime || 0)) /
              1e3;
          f > s.duration && (l.durationEnd = !0),
            f > s.duration * 2 && ((l.clicking = !1), (l.durationEnd = !1));
          const g = {
            bubbleObj: {
              optValue: n.retina.bubbleModeSize,
              value: c.bubble.radius,
            },
            particlesObj: {
              optValue: Wn(c.options.size.value) * n.retina.pixelRatio,
              value: c.size.value,
            },
            type: "size",
          };
          this._process(c, p, f, g);
          const m = {
            bubbleObj: { optValue: s.opacity, value: c.bubble.opacity },
            particlesObj: {
              optValue: Wn(c.options.opacity.value),
              value: ((u = c.opacity) == null ? void 0 : u.value) ?? 1,
            },
            type: "opacity",
          };
          this._process(c, p, f, m),
            !l.durationEnd && p <= o
              ? this._hoverBubbleColor(c, p)
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
            l = rt(a, i),
            u = 1 - l / r;
          l <= r
            ? u >= 0 &&
              n.interactivity.status === ki &&
              (this._hoverBubbleSize(o, u),
              this._hoverBubbleOpacity(o, u),
              this._hoverBubbleColor(o, u))
            : this.reset(o),
            n.interactivity.status === Rc && this.reset(o);
        }
      }),
      (this._hoverBubbleColor = (n, i, r) => {
        const s = this.container.actualOptions,
          o = r ?? s.interactivity.modes.bubble;
        if (o) {
          if (!n.bubble.finalColor) {
            const a = o.color;
            if (!a) return;
            const l = _t(a);
            n.bubble.finalColor = ei(l);
          }
          if (n.bubble.finalColor)
            if (o.mix) {
              n.bubble.color = void 0;
              const a = n.getFillColor();
              n.bubble.color = a
                ? ev(ff(a, n.bubble.finalColor, 1 - i, i))
                : n.bubble.finalColor;
            } else n.bubble.color = n.bubble.finalColor;
        }
      }),
      (this._hoverBubbleOpacity = (n, i, r) => {
        var d, p;
        const s = this.container,
          o = s.actualOptions,
          a =
            (r == null ? void 0 : r.opacity) ??
            ((d = o.interactivity.modes.bubble) == null ? void 0 : d.opacity);
        if (!a) return;
        const l = n.options.opacity.value,
          u = ((p = n.opacity) == null ? void 0 : p.value) ?? 1,
          c = Qh(u, a, Wn(l), i);
        c !== void 0 && (n.bubble.opacity = c);
      }),
      (this._hoverBubbleSize = (n, i, r) => {
        const s = this.container,
          o =
            r != null && r.size
              ? r.size * s.retina.pixelRatio
              : s.retina.bubbleModeSize;
        if (o === void 0) return;
        const a = Wn(n.options.size.value) * s.retina.pixelRatio,
          l = n.size.value,
          u = Qh(l, o, a, i);
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
          p = s.particlesObj.optValue,
          f = s.bubbleObj.value,
          g = s.particlesObj.value || 0,
          m = s.type;
        if (!(!d || d < 0 || a === p))
          if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
            f &&
              (m === "size" && delete n.bubble.radius,
              m === "opacity" && delete n.bubble.opacity);
          else if (i <= d) {
            if ((f ?? g) !== a) {
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
              p = (u.offsetWidth / 2) * c,
              f =
                r.type === "circle"
                  ? new mt(d.x, d.y, p)
                  : new fn(
                      u.offsetLeft * c,
                      u.offsetTop * c,
                      u.offsetWidth * c,
                      u.offsetHeight * c,
                    ),
              g = s.particles.quadTree.query(f, (m) => this.isEnabled(m));
            for (const m of g) {
              if (!f.contains(m.getPosition())) continue;
              m.bubble.inRange = !0;
              const w = a.divs,
                y = Ky(w, u);
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
    o && ve("bubble", a)
      ? this._hoverBubble()
      : l && ve("bubble", u)
      ? this._clickBubble()
      : df("bubble", c, (d, p) => this._singleSelectorHover(e, d, p));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      { onClick: o, onDiv: a, onHover: l } = s,
      u = cf("bubble", a);
    return u || (l.enable && r.position) || (o.enable && r.clickPosition)
      ? ve("bubble", l.mode) || ve("bubble", o.mode) || u
      : !1;
  }
  loadModeOptions(e, ...n) {
    e.bubble || (e.bubble = new i4());
    for (const i of n) e.bubble.load(i == null ? void 0 : i.bubble);
  }
  reset(e) {
    e.bubble.inRange = !1;
  }
}
async function s4(t) {
  await t.addInteractor("externalBubble", (e) => new r4(e));
}
class o4 {
  constructor() {
    this.opacity = 0.5;
  }
  load(e) {
    e && e.opacity !== void 0 && (this.opacity = e.opacity);
  }
}
class a4 {
  constructor() {
    (this.distance = 80), (this.links = new o4()), (this.radius = 60);
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
function l4(t, e, n, i) {
  const r = Math.floor(n.getRadius() / e.getRadius()),
    s = e.getFillColor(),
    o = n.getFillColor();
  if (!s || !o) return;
  const a = e.getPosition(),
    l = n.getPosition(),
    u = ff(s, o, e.getRadius(), n.getRadius()),
    c = t.createLinearGradient(a.x, a.y, l.x, l.y);
  return (
    c.addColorStop(0, br(s, i)),
    c.addColorStop(r > 1 ? 1 : r, dn(u, i)),
    c.addColorStop(1, br(o, i)),
    c
  );
}
function u4(t, e, n, i, r) {
  ls(t, i, r), (t.lineWidth = e), (t.strokeStyle = n), t.stroke();
}
function c4(t, e, n, i) {
  const r = t.actualOptions,
    s = r.interactivity.modes.connect;
  if (s) return l4(e, n, i, s.links.opacity);
}
function d4(t, e, n) {
  t.canvas.draw((i) => {
    const r = c4(t, i, e, n);
    if (!r) return;
    const s = e.getPosition(),
      o = n.getPosition();
    u4(i, e.retina.linksWidth ?? 0, r, s, o);
  });
}
class f4 extends Qt {
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
            p = Math.abs(l.x - c.x),
            f = Math.abs(l.y - c.y);
          p < d && f < d && d4(e, a, u);
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
    return r.onHover.enable && i.position ? ve("connect", r.onHover.mode) : !1;
  }
  loadModeOptions(e, ...n) {
    e.connect || (e.connect = new a4());
    for (const i of n) e.connect.load(i == null ? void 0 : i.connect);
  }
  reset() {}
}
async function p4(t) {
  await t.addInteractor("externalConnect", (e) => new f4(e));
}
class h4 {
  constructor() {
    (this.blink = !1), (this.consent = !1), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.blink !== void 0 && (this.blink = e.blink),
      e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class m4 {
  constructor() {
    (this.distance = 100), (this.links = new h4());
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
function g4(t, e, n, i, r, s) {
  ls(t, n, i), (t.strokeStyle = dn(r, s)), (t.lineWidth = e), t.stroke();
}
function y4(t, e, n, i, r) {
  t.canvas.draw((s) => {
    const o = e.getPosition();
    g4(s, e.retina.linksWidth ?? 0, o, r, n, i);
  });
}
class v4 extends Qt {
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
      e.interactivity.status !== ki
    )
      return;
    const r = e.interactivity.mouse.position;
    if (!r) return;
    const s = e.retina.grabModeDistance;
    if (!s || s < 0) return;
    const o = e.particles.quadTree.queryCircle(r, s, (l) => this.isEnabled(l));
    for (const l of o) {
      const u = l.getPosition(),
        c = rt(u, r);
      if (c > s) continue;
      const d = i.modes.grab.links,
        p = d.opacity,
        f = p - (c * p) / s;
      if (f <= 0) continue;
      const g = d.color ?? ((a = l.options.links) == null ? void 0 : a.color);
      if (!e.particles.grabLineColor && g) {
        const w = i.modes.grab.links;
        e.particles.grabLineColor = nv(g, w.blink, w.consent);
      }
      const m = Ac(l, void 0, e.particles.grabLineColor);
      m && y4(e, l, m, f, r);
    }
  }
  isEnabled(e) {
    const n = this.container,
      i = n.interactivity.mouse,
      r = (
        (e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity
      ).events;
    return r.onHover.enable && !!i.position && ve("grab", r.onHover.mode);
  }
  loadModeOptions(e, ...n) {
    e.grab || (e.grab = new m4());
    for (const i of n) e.grab.load(i == null ? void 0 : i.grab);
  }
  reset() {}
}
async function w4(t) {
  await t.addInteractor("externalGrab", (e) => new v4(e));
}
class b4 extends Qt {
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
async function x4(t) {
  await t.addInteractor("externalPause", (e) => new b4(e));
}
class S4 {
  constructor() {
    (this.default = !0), (this.groups = []), (this.quantity = 4);
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = q(e);
  }
  load(e) {
    if (!e) return;
    e.default !== void 0 && (this.default = e.default),
      e.groups !== void 0 && (this.groups = e.groups.map((i) => i)),
      this.groups.length || (this.default = !0);
    const n = e.quantity ?? e.particles_nb;
    n !== void 0 && (this.quantity = q(n));
  }
}
class k4 extends Qt {
  constructor(e) {
    super(e),
      (this.handleClickMode = (n) => {
        if (n !== "push") return;
        const i = this.container,
          r = i.actualOptions,
          s = r.interactivity.modes.push;
        if (!s) return;
        const o = B(s.quantity);
        if (o <= 0) return;
        const a = Hs([void 0, ...s.groups]),
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
    e.push || (e.push = new S4());
    for (const i of n) e.push.load(i == null ? void 0 : i.push);
  }
  reset() {}
}
async function _4(t) {
  await t.addInteractor("externalPush", (e) => new k4(e));
}
class E4 {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = q(e);
  }
  load(e) {
    if (!e) return;
    const n = e.quantity ?? e.particles_nb;
    n !== void 0 && (this.quantity = q(n));
  }
}
class C4 extends Qt {
  constructor(e) {
    super(e),
      (this.handleClickMode = (n) => {
        const i = this.container,
          r = i.actualOptions;
        if (!r.interactivity.modes.remove || n !== "remove") return;
        const s = B(r.interactivity.modes.remove.quantity);
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
    e.remove || (e.remove = new E4());
    for (const i of n) e.remove.load(i == null ? void 0 : i.remove);
  }
  reset() {}
}
async function T4(t) {
  await t.addInteractor("externalRemove", (e) => new C4(e));
}
class yv {
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
class P4 extends yv {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return we(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = we(e, (n) => `#${n}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class z4 extends yv {
  load(e) {
    super.load(e),
      e &&
        (this.divs = we(e.divs, (n) => {
          const i = new P4();
          return i.load(n), i;
        }));
  }
}
class O4 extends Qt {
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
          const u = new mt(l.x, l.y, a),
            c = i.particles.quadTree.query(u, (d) => this.isEnabled(d));
          for (const d of c) {
            const { dx: p, dy: f, distance: g } = et(l, d.position),
              m = g ** 2,
              w = r.speed,
              y = (-a * w) / m;
            if (m <= a) {
              s.particles.push(d);
              const h = pe.create(p, f);
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
        !s || s < 0 || !r || this._processRepulse(r, s, new mt(r.x, r.y, s));
      }),
      (this._processRepulse = (i, r, s, o) => {
        const a = this.container,
          l = a.particles.quadTree.query(s, (c) => this.isEnabled(c)),
          u = a.actualOptions.interactivity.modes.repulse;
        if (u)
          for (const c of l) {
            const { dx: d, dy: p, distance: f } = et(c.position, i),
              g = ((o == null ? void 0 : o.speed) ?? u.speed) * u.factor,
              m = Yt(Wy(u.easing)(1 - f / r) * g, 0, u.maxSpeed),
              w = pe.create(
                f === 0 ? g : (d / f) * m,
                f === 0 ? g : (p / f) * m,
              );
            c.position.addTo(w);
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
              p = (u.offsetWidth / 2) * c,
              f =
                r.type === "circle"
                  ? new mt(d.x, d.y, p)
                  : new fn(
                      u.offsetLeft * c,
                      u.offsetTop * c,
                      u.offsetWidth * c,
                      u.offsetHeight * c,
                    ),
              g = o.divs,
              m = Ky(g, u);
            this._processRepulse(d, p, f, m);
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
      i = e.interactivity.status === ki,
      r = n.interactivity.events,
      s = r.onHover,
      o = s.enable,
      a = s.mode,
      l = r.onClick,
      u = l.enable,
      c = l.mode,
      d = r.onDiv;
    i && o && ve("repulse", a)
      ? this._hoverRepulse()
      : u && ve("repulse", c)
      ? this._clickRepulse()
      : df("repulse", d, (p, f) => this._singleSelectorRepulse(p, f));
  }
  isEnabled(e) {
    const n = this.container,
      i = n.actualOptions,
      r = n.interactivity.mouse,
      s = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
      o = s.onDiv,
      a = s.onHover,
      l = s.onClick,
      u = cf("repulse", o);
    if (!(u || (a.enable && r.position) || (l.enable && r.clickPosition)))
      return !1;
    const c = a.mode,
      d = l.mode;
    return ve("repulse", c) || ve("repulse", d) || u;
  }
  loadModeOptions(e, ...n) {
    e.repulse || (e.repulse = new z4());
    for (const i of n) e.repulse.load(i == null ? void 0 : i.repulse);
  }
  reset() {}
}
async function M4(t) {
  await t.addInteractor("externalRepulse", (e) => new O4(t, e));
}
class I4 {
  constructor() {
    (this.factor = 3), (this.radius = 200);
  }
  load(e) {
    e &&
      (e.factor !== void 0 && (this.factor = e.factor),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class R4 extends Qt {
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
    return r.onHover.enable && !!i.position && ve("slow", r.onHover.mode);
  }
  loadModeOptions(e, ...n) {
    e.slow || (e.slow = new I4());
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
      l = rt(r, a),
      u = l / s,
      c = o.factor,
      { slow: d } = e;
    l > s || ((d.inRange = !0), (d.factor = u / c));
  }
}
async function L4(t) {
  await t.addInteractor("externalSlow", (e) => new R4(e));
}
const A4 =
  /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function $4(t, e, n) {
  const { svgData: i } = t;
  if (!i) return "";
  const r = br(e, n);
  if (i.includes("fill")) return i.replace(A4, () => r);
  const s = i.indexOf(">");
  return `${i.substring(0, s)} fill="${r}"${i.substring(s)}`;
}
async function vf(t) {
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
          console.error(`${Kt} loading image: ${t.source}`),
          e();
      }),
      (n.src = t.source);
  });
}
async function D4(t) {
  if (t.type !== "svg") {
    await vf(t);
    return;
  }
  t.loading = !0;
  const e = await fetch(t.source);
  e.ok || (console.error(`${Kt} Image not found`), (t.error = !0)),
    t.error || (t.svgData = await e.text()),
    (t.loading = !1);
}
function j4(t, e, n, i) {
  var o;
  const r = $4(t, n, ((o = i.opacity) == null ? void 0 : o.value) ?? 1),
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
        const p = { ...t, error: !1, loading: !0 };
        await vf(p), (s.loaded = !0), (s.element = p.element), a(s);
      }),
      (d.src = c);
  });
}
class N4 {
  constructor(e) {
    (this.loadImageShape = async (n) => {
      if (!this._engine.loadImage)
        throw new Error(`${Kt} image shape not initialized`);
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
        ? (l = await j4(o, r, s, n))
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
class F4 {
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
class B4 {
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
        const o = new F4();
        o.load(r), i.push(o);
      }
    }
  }
  needsPlugin() {
    return !0;
  }
}
async function W4(t) {
  t.loadImage ||
    (t.loadImage = async (n) => {
      if (!n.name && !n.src) throw new Error(`${Kt} no image source provided`);
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
          t.images.push(i), await (n.replaceColor ? D4 : vf)(i);
        } catch {
          throw new Error(`${Kt} ${n.name ?? n.src} not found`);
        }
    });
  const e = new B4(t);
  await t.addPlugin(e), await t.addShape(["image", "images"], new N4(t));
}
class H4 extends Nt {
  constructor() {
    super(), (this.sync = !1);
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class U4 extends Nt {
  constructor() {
    super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class V4 {
  constructor() {
    (this.count = 0), (this.delay = new H4()), (this.duration = new U4());
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = e.count),
      this.delay.load(e.delay),
      this.duration.load(e.duration));
  }
}
class G4 {
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
          ? ((B(r.delay.value) * (r.delay.sync ? 1 : Q())) /
              n.retina.reduceFactor) *
            1e3
          : 0,
        delayTime: 0,
        duration: n.retina.reduceFactor
          ? ((B(r.duration.value) * (r.duration.sync ? 1 : Q())) /
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
    e.life || (e.life = new V4());
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
      o = q(0, s.width),
      a = q(0, s.width);
    (e.position.x = We(o)),
      (e.position.y = We(a)),
      (e.spawning = !0),
      (i.delayTime = 0),
      (i.time = 0),
      e.reset();
    const l = e.options.life;
    l &&
      ((i.delay = B(l.delay.value) * 1e3),
      (i.duration = B(l.duration.value) * 1e3));
  }
}
async function q4(t) {
  await t.addParticleUpdater("life", (e) => new G4(e));
}
class K4 {
  draw(e, n, i) {
    e.moveTo(-i / 2, 0), e.lineTo(i / 2, 0);
  }
  getSidesCount() {
    return 1;
  }
}
async function Y4(t) {
  await t.addShape("line", new K4());
}
function Q4(t, e, n, i) {
  switch (t.options.opacity.animation.destroy) {
    case "max":
      e >= i && t.destroy();
      break;
    case "min":
      e <= n && t.destroy();
      break;
  }
}
function X4(t, e) {
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
      Q4(t, n.value, i, r),
      t.destroyed || (n.value = Yt(n.value, i, r));
  }
}
class J4 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.opacity;
    e.opacity = Xy(n, 1);
    const i = n.animation;
    i.enable &&
      ((e.opacity.velocity =
        (B(i.speed) / 100) * this.container.retina.reduceFactor),
      i.sync || (e.opacity.velocity *= Q()));
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
    this.isEnabled(e) && X4(e, n);
  }
}
async function Z4(t) {
  await t.addParticleUpdater("opacity", (e) => new J4(e));
}
function e3(t) {
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
    const r = Tn(t.particle.options.bounce.horizontal);
    (t.particle.velocity.x *= -r), (n = !0);
  }
  if (!n) return;
  const i = t.offset.x + t.size;
  t.bounds.right >= t.canvasSize.width
    ? (t.particle.position.x = t.canvasSize.width - i)
    : t.bounds.left <= 0 && (t.particle.position.x = i),
    t.outMode === "split" && t.particle.destroy();
}
function t3(t) {
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
    const r = Tn(t.particle.options.bounce.vertical);
    (t.particle.velocity.y *= -r), (n = !0);
  }
  if (!n) return;
  const i = t.offset.y + t.size;
  t.bounds.bottom >= t.canvasSize.height
    ? (t.particle.position.y = t.canvasSize.height - i)
    : t.bounds.top <= 0 && (t.particle.position.y = i),
    t.outMode === "split" && t.particle.destroy();
}
class n3 {
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
    for (const [, p] of s.plugins)
      if ((p.particleBounce !== void 0 && (o = p.particleBounce(e, i, n)), o))
        break;
    if (o) return;
    const a = e.getPosition(),
      l = e.offset,
      u = e.getRadius(),
      c = Vs(a, u),
      d = s.canvas.size;
    e3({
      particle: e,
      outMode: r,
      direction: n,
      bounds: c,
      canvasSize: d,
      offset: l,
      size: u,
    }),
      t3({
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
class i3 {
  constructor(e) {
    (this.container = e), (this.modes = ["destroy"]);
  }
  update(e, n, i, r) {
    if (!this.modes.includes(r)) return;
    const s = this.container;
    switch (e.outType) {
      case "normal":
      case "outside":
        if (Us(e.position, s.canvas.size, pe.origin, e.getRadius(), n)) return;
        break;
      case "inside": {
        const { dx: o, dy: a } = et(e.position, e.moveCenter),
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
class r3 {
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
      Us(e.position, o.canvas.size, pe.origin, l, n) || o.particles.remove(e);
    }
  }
}
class s3 {
  constructor(e) {
    (this.container = e), (this.modes = ["out"]);
  }
  update(e, n, i, r) {
    if (!this.modes.includes(r)) return;
    const s = this.container;
    switch (e.outType) {
      case "inside": {
        const { x: o, y: a } = e.velocity,
          l = pe.origin;
        (l.length = e.moveCenter.radius),
          (l.angle = e.velocity.angle + Math.PI),
          l.addTo(pe.create(e.moveCenter));
        const { dx: u, dy: c } = et(e.position, l);
        if (
          (o <= 0 && u >= 0) ||
          (a <= 0 && c >= 0) ||
          (o >= 0 && u <= 0) ||
          (a >= 0 && c <= 0)
        )
          return;
        (e.position.x = Math.floor(We({ min: 0, max: s.canvas.size.width }))),
          (e.position.y = Math.floor(
            We({ min: 0, max: s.canvas.size.height }),
          ));
        const { dx: d, dy: p } = et(e.position, e.moveCenter);
        (e.direction = Math.atan2(-p, -d)), (e.velocity.angle = e.direction);
        break;
      }
      default: {
        if (Us(e.position, s.canvas.size, pe.origin, e.getRadius(), n)) return;
        switch (e.outType) {
          case "outside": {
            (e.position.x =
              Math.floor(
                We({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
              ) + e.moveCenter.x),
              (e.position.y =
                Math.floor(
                  We({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
                ) + e.moveCenter.y);
            const { dx: o, dy: a } = et(e.position, e.moveCenter);
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
              c = Vs(e.position, u);
            n === "right" && c.left > a.width + e.offset.x
              ? ((e.position.x = l.left),
                (e.initialPosition.x = e.position.x),
                o ||
                  ((e.position.y = Q() * a.height),
                  (e.initialPosition.y = e.position.y)))
              : n === "left" &&
                c.right < -e.offset.x &&
                ((e.position.x = l.right),
                (e.initialPosition.x = e.position.x),
                o ||
                  ((e.position.y = Q() * a.height),
                  (e.initialPosition.y = e.position.y))),
              n === "bottom" && c.top > a.height + e.offset.y
                ? (o ||
                    ((e.position.x = Q() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.top),
                  (e.initialPosition.y = e.position.y))
                : n === "top" &&
                  c.bottom < -e.offset.y &&
                  (o ||
                    ((e.position.x = Q() * a.width),
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
class o3 {
  constructor(e) {
    (this.container = e),
      (this._updateOutMode = (n, i, r, s) => {
        for (const o of this.updaters) o.update(n, s, i, r);
      }),
      (this.updaters = [new n3(e), new i3(e), new s3(e), new r3(e)]);
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
async function a3(t) {
  await t.addParticleUpdater("outModes", (e) => new o3(e));
}
class l3 {
  init() {}
  isEnabled(e) {
    return (
      !Zn() &&
      !e.destroyed &&
      e.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(e) {
    const n = e.container,
      i = n.actualOptions,
      r = i.interactivity.events.onHover.parallax;
    if (Zn() || !r.enable) return;
    const s = r.force,
      o = n.interactivity.mouse.position;
    if (!o) return;
    const a = n.canvas.size,
      l = { x: a.width / 2, y: a.height / 2 },
      u = r.smooth,
      c = e.getRadius() / s,
      d = { x: (o.x - l.x) * c, y: (o.y - l.y) * c },
      { offset: p } = e;
    (p.x += (d.x - p.x) / u), (p.y += (d.y - p.y) / u);
  }
}
async function u3(t) {
  t.addMover("parallax", () => new l3());
}
class c3 extends hf {
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
        { dx: l, dy: u } = et(r, a),
        c = e.options.move.attract.rotate,
        d = l / (c.x * 1e3),
        p = u / (c.y * 1e3),
        f = o.size.value / e.size.value,
        g = 1 / f;
      (e.velocity.x -= d * f),
        (e.velocity.y -= p * f),
        (o.velocity.x += d * g),
        (o.velocity.y += p * g);
    }
  }
  isEnabled(e) {
    return e.options.move.attract.enable;
  }
  reset() {}
}
async function d3(t) {
  await t.addInteractor("particlesAttract", (e) => new c3(e));
}
function Xh(t, e, n, i, r, s) {
  const o = Yt((t.options.collisions.absorb.speed * r.factor) / 10, 0, i);
  (t.size.value += o / 2),
    (n.size.value -= o),
    i <= s && ((n.size.value = 0), n.destroy());
}
function f3(t, e, n, i) {
  const r = t.getRadius(),
    s = e.getRadius();
  r === void 0 && s !== void 0
    ? t.destroy()
    : r !== void 0 && s === void 0
    ? e.destroy()
    : r !== void 0 &&
      s !== void 0 &&
      (r >= s ? Xh(t, r, e, s, n, i) : Xh(e, s, t, r, n, i));
}
const Jh = (t) => {
  t.collisionMaxSpeed === void 0 &&
    (t.collisionMaxSpeed = B(t.options.collisions.maxSpeed)),
    t.velocity.length > t.collisionMaxSpeed &&
      (t.velocity.length = t.collisionMaxSpeed);
};
function vv(t, e) {
  Yy(Lc(t), Lc(e)), Jh(t), Jh(e);
}
function p3(t, e) {
  !t.unbreakable && !e.unbreakable && vv(t, e),
    t.getRadius() === void 0 && e.getRadius() !== void 0
      ? t.destroy()
      : t.getRadius() !== void 0 && e.getRadius() === void 0
      ? e.destroy()
      : t.getRadius() !== void 0 &&
        e.getRadius() !== void 0 &&
        (t.getRadius() >= e.getRadius() ? e : t).destroy();
}
function h3(t, e, n, i) {
  switch (t.options.collisions.mode) {
    case "absorb": {
      f3(t, e, n, i);
      break;
    }
    case "bounce": {
      vv(t, e);
      break;
    }
    case "destroy": {
      p3(t, e);
      break;
    }
  }
}
class m3 extends hf {
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
      const c = rt(r, l),
        d = s + u;
      c > d || h3(e, a, n, i.retina.pixelRatio);
    }
  }
  isEnabled(e) {
    return e.options.collisions.enable;
  }
  reset() {}
}
async function g3(t) {
  await t.addInteractor("particlesCollisions", (e) => new m3(e));
}
class y3 extends mt {
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
      const s = new mt(r.x, r.y, i.radius * 2);
      return super.intersects(s);
    } else if (n.size !== void 0) {
      const s = new fn(r.x, r.y, n.size.width * 2, n.size.height * 2);
      return super.intersects(s);
    }
    return !1;
  }
}
class v3 {
  constructor() {
    (this.blur = 5),
      (this.color = new Oe()),
      (this.color.value = "#000"),
      (this.enable = !1);
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = Oe.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class w3 {
  constructor() {
    (this.enable = !1), (this.frequency = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class b3 {
  constructor() {
    (this.blink = !1),
      (this.color = new Oe()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new v3()),
      (this.triangles = new w3()),
      (this.width = 1),
      (this.warp = !1);
  }
  load(e) {
    e &&
      (e.id !== void 0 && (this.id = e.id),
      e.blink !== void 0 && (this.blink = e.blink),
      (this.color = Oe.create(this.color, e.color)),
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
function x3(t, e, n, i, r) {
  const { dx: s, dy: o, distance: a } = et(t, e);
  if (!r || a <= n) return a;
  const l = { x: Math.abs(s), y: Math.abs(o) },
    u = { x: Math.min(l.x, i.width - l.x), y: Math.min(l.y, i.height - l.y) };
  return Math.sqrt(u.x ** 2 + u.y ** 2);
}
class S3 extends hf {
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
        (s = nv(o, r.blink, r.consent)),
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
      u = l ? new y3(n.x, n.y, a, r) : new mt(n.x, n.y, a),
      c = i.particles.quadTree.query(u);
    for (const d of c) {
      const p = d.options.links;
      if (
        e === d ||
        !(p != null && p.enable) ||
        s.id !== p.id ||
        d.spawning ||
        d.destroyed ||
        !d.links ||
        e.links.some((w) => w.destination === d) ||
        d.links.some((w) => w.destination === e)
      )
        continue;
      const f = d.getPosition();
      if (f.x < 0 || f.y < 0 || f.x > r.width || f.y > r.height) continue;
      const g = x3(n, f, a, r, l && p.warp);
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
    e.links || (e.links = new b3());
    for (const i of n)
      e.links.load(
        (i == null ? void 0 : i.links) ??
          (i == null ? void 0 : i.lineLinked) ??
          (i == null ? void 0 : i.line_linked),
      );
  }
  reset() {}
}
async function k3(t) {
  await t.addInteractor("particlesLinks", (e) => new S3(e));
}
function _3(t) {
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
  if (rt(n, i) <= r) ls(s, n, i), (e = !0);
  else if (d.warp) {
    let f, g;
    const m = { x: i.x - o.width, y: i.y },
      w = et(n, m);
    if (w.distance <= r) {
      const y = n.y - (w.dy / w.dx) * n.x;
      (f = { x: 0, y }), (g = { x: o.width, y });
    } else {
      const y = { x: i.x, y: i.y - o.height },
        h = et(n, y);
      if (h.distance <= r) {
        const b = -(n.y - (h.dy / h.dx) * n.x) / (h.dy / h.dx);
        (f = { x: b, y: 0 }), (g = { x: b, y: o.height });
      } else {
        const v = { x: i.x - o.width, y: i.y - o.height },
          b = et(n, v);
        if (b.distance <= r) {
          const x = n.y - (b.dy / b.dx) * n.x;
          (f = { x: -x / (b.dy / b.dx), y: x }),
            (g = { x: f.x + o.width, y: f.y + o.height });
        }
      }
    }
    f && g && (ls(s, n, f), ls(s, i, g), (e = !0));
  }
  if (!e) return;
  (s.lineWidth = a),
    l.enable && (s.globalCompositeOperation = l.composite),
    (s.strokeStyle = dn(u, c));
  const { shadow: p } = d;
  if (p.enable) {
    const f = At(p.color);
    f && ((s.shadowBlur = p.blur), (s.shadowColor = dn(f)));
  }
  s.stroke();
}
function E3(t) {
  const {
    context: e,
    pos1: n,
    pos2: i,
    pos3: r,
    backgroundMask: s,
    colorTriangle: o,
    opacityTriangle: a,
  } = t;
  RC(e, n, i, r),
    s.enable && (e.globalCompositeOperation = s.composite),
    (e.fillStyle = dn(o, a)),
    e.fill();
}
function C3(t) {
  return t.sort((e, n) => e - n), t.join("_");
}
function Zh(t, e) {
  const n = C3(t.map((r) => r.id));
  let i = e.get(n);
  return i === void 0 && ((i = Q()), e.set(n, i)), i;
}
class T3 {
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
          const p = (y = n.options.twinkle) == null ? void 0 : y.lines;
          if (p != null && p.enable) {
            const h = p.frequency,
              v = At(p.color);
            Q() < h && v && ((d = v), (u = B(p.opacity)));
          }
          const f = n.options.links;
          if (!d) {
            const h =
              (f == null ? void 0 : f.id) !== void 0
                ? r.particles.linksColors.get(f.id)
                : r.particles.linksColor;
            d = Ac(n, o, h);
          }
          if (!d) return;
          const g = n.retina.linksWidth ?? 0,
            m = n.retina.linksDistance ?? 0,
            { backgroundMask: w } = s;
          _3({
            context: c,
            width: g,
            begin: a,
            end: l,
            maxDistance: m,
            canvasSize: r.canvas.size,
            links: f,
            backgroundMask: w,
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
            const p = n.getPosition(),
              f = a.getPosition(),
              g = l.getPosition(),
              m = n.retina.linksDistance ?? 0;
            if (rt(p, f) > m || rt(g, f) > m || rt(g, p) > m) return;
            let w = At(u.color);
            if (!w) {
              const y = n.options.links,
                h =
                  (y == null ? void 0 : y.id) !== void 0
                    ? s.particles.linksColors.get(y.id)
                    : s.particles.linksColor;
              w = Ac(n, a, h);
            }
            w &&
              E3({
                context: d,
                pos1: p,
                pos2: f,
                pos3: g,
                backgroundMask: o.backgroundMask,
                colorTriangle: w,
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
                const p = this._getLinkFrequency(o, d.destination);
                return (
                  o.options.links &&
                  p <= o.options.links.frequency &&
                  s.findIndex((f) => f.destination === d.destination) >= 0
                );
              });
        if (a != null && a.length)
          for (const d of a) {
            const p = d.destination;
            this._getTriangleFrequency(i, o, p) > n.links.triangles.frequency ||
              this._drawLinkTriangle(i, r, d);
          }
      }),
      (this._getLinkFrequency = (n, i) => Zh([n, i], this._freqs.links)),
      (this._getTriangleFrequency = (n, i, r) =>
        Zh([n, i, r], this._freqs.triangles)),
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
class P3 {
  constructor() {
    this.id = "links";
  }
  getPlugin(e) {
    return new T3(e);
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function z3(t) {
  const e = new P3();
  await t.addPlugin(e);
}
async function O3(t) {
  await k3(t), await z3(t);
}
class wv {
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
      B(
        (n == null ? void 0 : n.sides) ??
          (n == null ? void 0 : n.nb_sides) ??
          5,
      ),
    );
  }
}
class M3 extends wv {
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
class I3 extends wv {
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
async function R3(t) {
  await t.addShape("polygon", new M3());
}
async function L3(t) {
  await t.addShape("triangle", new I3());
}
async function A3(t) {
  await R3(t), await L3(t);
}
class $3 {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = q(e.speed)),
      e.decay !== void 0 && (this.decay = q(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class D3 extends Nt {
  constructor() {
    super(),
      (this.animation = new $3()),
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
function j3(t, e) {
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
class N3 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.rotate;
    if (!n) return;
    (e.rotate = {
      enable: n.animation.enable,
      value: (B(n.value) * Math.PI) / 180,
    }),
      (e.pathRotation = n.path);
    let i = n.direction;
    switch (
      (i === "random" &&
        (i = Math.floor(Q() * 2) > 0 ? "counter-clockwise" : "clockwise"),
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
      ((e.rotate.decay = 1 - B(r.decay)),
      (e.rotate.velocity =
        (B(r.speed) / 360) * this.container.retina.reduceFactor),
      r.sync || (e.rotate.velocity *= Q())),
      (e.rotation = e.rotate.value);
  }
  isEnabled(e) {
    const n = e.options.rotate;
    return n
      ? !e.destroyed && !e.spawning && n.animation.enable && !n.path
      : !1;
  }
  loadOptions(e, ...n) {
    e.rotate || (e.rotate = new D3());
    for (const i of n) e.rotate.load(i == null ? void 0 : i.rotate);
  }
  update(e, n) {
    var i;
    this.isEnabled(e) &&
      (j3(e, n),
      (e.rotation = ((i = e.rotate) == null ? void 0 : i.value) ?? 0));
  }
}
async function F3(t) {
  await t.addParticleUpdater("rotate", (e) => new N3(e));
}
function B3(t, e, n, i) {
  switch (t.options.size.animation.destroy) {
    case "max":
      e >= i && t.destroy();
      break;
    case "min":
      e <= n && t.destroy();
      break;
  }
}
function W3(t, e) {
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
      B3(t, n.value, r, s),
      t.destroyed || (n.value = Yt(n.value, r, s));
  }
}
class H3 {
  init(e) {
    const n = e.container,
      i = e.options.size,
      r = i.animation;
    r.enable &&
      ((e.size.velocity =
        ((e.retina.sizeAnimationSpeed ?? n.retina.sizeAnimationSpeed) / 100) *
        n.retina.reduceFactor),
      r.sync || (e.size.velocity *= Q()));
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
    this.isEnabled(e) && W3(e, n);
  }
}
async function U3(t) {
  await t.addParticleUpdater("size", () => new H3());
}
const bo = Math.sqrt(2);
class V3 {
  draw(e, n, i) {
    e.rect(-i / bo, -i / bo, (i * 2) / bo, (i * 2) / bo);
  }
  getSidesCount() {
    return 4;
  }
}
async function G3(t) {
  const e = new V3();
  await t.addShape(["edge", "square"], e);
}
class q3 {
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
      B(
        (n == null ? void 0 : n.sides) ??
          (n == null ? void 0 : n.nb_sides) ??
          5,
      ),
    );
  }
  particleInit(e, n) {
    const i = n.shapeData,
      r = B((i == null ? void 0 : i.inset) ?? 2);
    n.starInset = r;
  }
}
async function K3(t) {
  await t.addShape("star", new q3());
}
function ku(t, e, n, i, r) {
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
  const s = We(n.offset),
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
function Y3(t, e) {
  if (!t.strokeColor || !t.strokeAnimation) return;
  const { h: n, s: i, l: r } = t.strokeColor,
    { h: s, s: o, l: a } = t.strokeAnimation;
  n && ku(e, n, s, 360, !1),
    i && ku(e, i, o, 100, !0),
    r && ku(e, r, a, 100, !0);
}
class Q3 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var o;
    const n = this.container,
      i = e.options,
      r = _t(i.stroke, e.id, i.reduceDuplicates);
    (e.strokeWidth = B(r.width) * n.retina.pixelRatio),
      (e.strokeOpacity = B(r.opacity ?? 1)),
      (e.strokeAnimation = (o = r.color) == null ? void 0 : o.animation);
    const s = ei(r.color) ?? e.getFillColor();
    s && (e.strokeColor = iv(s, e.strokeAnimation, n.retina.reduceFactor));
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
    this.isEnabled(e) && Y3(e, n);
  }
}
async function X3(t) {
  await t.addParticleUpdater("strokeColor", (e) => new Q3(e));
}
const Uo = ["text", "character", "char"];
class J3 {
  draw(e, n, i, r) {
    const s = n.shapeData;
    if (s === void 0) return;
    const o = s.value;
    if (o === void 0) return;
    n.text === void 0 && (n.text = _t(o, n.randomIndexData));
    const a = n.text,
      l = s.style ?? "",
      u = s.weight ?? "400",
      c = Math.round(i) * 2,
      d = s.font ?? "Verdana",
      p = n.fill,
      f = (a.length * i) / 2;
    e.font = `${l} ${u} ${c}px "${d}"`;
    const g = { x: -f, y: i / 2 };
    (e.globalAlpha = r),
      p ? e.fillText(a, g.x, g.y) : e.strokeText(a, g.x, g.y),
      (e.globalAlpha = 1);
  }
  getSidesCount() {
    return 12;
  }
  async init(e) {
    const n = e.actualOptions;
    if (Uo.find((i) => ve(i, n.particles.shape.type))) {
      const i = Uo.map((s) => n.particles.shape.options[s]).find((s) => !!s),
        r = [];
      we(i, (s) => {
        r.push(CC(s.font, s.weight));
      }),
        await Promise.all(r);
    }
  }
  particleInit(e, n) {
    if (!n.shape || !Uo.includes(n.shape)) return;
    const i = n.shapeData;
    if (i === void 0) return;
    const r = i.value;
    r !== void 0 && (n.text = _t(r, n.randomIndexData));
  }
}
async function Z3(t) {
  await t.addShape(Uo, new J3());
}
async function ez(t) {
  await UP(t),
    await u3(t),
    await JP(t),
    await t4(t),
    await s4(t),
    await p4(t),
    await w4(t),
    await x4(t),
    await _4(t),
    await T4(t),
    await M4(t),
    await L4(t),
    await d3(t),
    await g3(t),
    await O3(t),
    await GP(t),
    await W4(t),
    await Y4(t),
    await A3(t),
    await G3(t),
    await K3(t),
    await Z3(t),
    await q4(t),
    await Z4(t),
    await U3(t),
    await YP(t),
    await a3(t),
    await F3(t),
    await X3(t),
    await $P(t);
}
class tz {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = q(e.speed)),
      e.decay !== void 0 && (this.decay = q(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class nz extends Nt {
  constructor() {
    super(),
      (this.animation = new tz()),
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
function iz(t, e) {
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
class rz {
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
      value: (B(n.value) * Math.PI) / 180,
      sinDirection: Q() >= 0.5 ? 1 : -1,
      cosDirection: Q() >= 0.5 ? 1 : -1,
    };
    let i = n.direction;
    switch (
      (i === "random" &&
        (i = Math.floor(Q() * 2) > 0 ? "counter-clockwise" : "clockwise"),
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
      ((e.tilt.decay = 1 - B(r.decay)),
      (e.tilt.velocity =
        (B(r.speed) / 360) * this.container.retina.reduceFactor),
      r.sync || (e.tilt.velocity *= Q()));
  }
  isEnabled(e) {
    var i;
    const n = (i = e.options.tilt) == null ? void 0 : i.animation;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...n) {
    e.tilt || (e.tilt = new nz());
    for (const i of n) e.tilt.load(i == null ? void 0 : i.tilt);
  }
  update(e, n) {
    this.isEnabled(e) && iz(e, n);
  }
}
async function sz(t) {
  await t.addParticleUpdater("tilt", (e) => new rz(e));
}
class em {
  constructor() {
    (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Oe.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = q(e.opacity)));
  }
}
class oz {
  constructor() {
    (this.lines = new em()), (this.particles = new em());
  }
  load(e) {
    e && (this.lines.load(e.lines), this.particles.load(e.particles));
  }
}
class az {
  getColorStyles(e, n, i, r) {
    const s = e.options,
      o = s.twinkle;
    if (!o) return {};
    const a = o.particles,
      l = a.enable && Q() < a.frequency,
      u = e.options.zIndex,
      c = (1 - e.zIndexFactor) ** u.opacityRate,
      d = l ? B(a.opacity) * c : r,
      p = ei(a.color),
      f = p ? br(p, d) : void 0,
      g = {},
      m = l && f;
    return (g.fill = m ? f : void 0), (g.stroke = m ? f : void 0), g;
  }
  init() {}
  isEnabled(e) {
    const n = e.options,
      i = n.twinkle;
    return i ? i.particles.enable : !1;
  }
  loadOptions(e, ...n) {
    e.twinkle || (e.twinkle = new oz());
    for (const i of n) e.twinkle.load(i == null ? void 0 : i.twinkle);
  }
  update() {}
}
async function lz(t) {
  await t.addParticleUpdater("twinkle", () => new az());
}
class uz {
  constructor() {
    (this.angle = 50), (this.move = 10);
  }
  load(e) {
    e &&
      (e.angle !== void 0 && (this.angle = q(e.angle)),
      e.move !== void 0 && (this.move = q(e.move)));
  }
}
class cz {
  constructor() {
    (this.distance = 5), (this.enable = !1), (this.speed = new uz());
  }
  load(e) {
    if (
      e &&
      (e.distance !== void 0 && (this.distance = q(e.distance)),
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
function dz(t, e) {
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
class fz {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const n = e.options.wobble;
    n != null && n.enable
      ? (e.wobble = {
          angle: Q() * Math.PI * 2,
          angleSpeed: B(n.speed.angle) / 360,
          moveSpeed: B(n.speed.move) / 10,
        })
      : (e.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
      (e.retina.wobbleDistance =
        B((n == null ? void 0 : n.distance) ?? 0) *
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
    e.wobble || (e.wobble = new cz());
    for (const i of n) e.wobble.load(i == null ? void 0 : i.wobble);
  }
  update(e, n) {
    this.isEnabled(e) && dz(e, n);
  }
}
async function pz(t) {
  await t.addParticleUpdater("wobble", (e) => new fz(e));
}
async function bv(t) {
  await ez(t),
    await yP(t),
    await LP(t),
    await sz(t),
    await lz(t),
    await pz(t),
    await zP(t),
    await lP(t),
    await CP(t);
}
const hz = async (t) => {
    await bv(t);
  },
  mz = () => {};
function gz() {
  const t =
    (window.innerWidth * window.innerHeight * 216) / 2073600 > 69
      ? 69
      : (window.innerWidth * window.innerHeight * 216) / 2073600 < 10
      ? 10
      : (window.innerWidth * window.innerHeight * 216) / 2073600;
  return P.jsx(yf, {
    id: "tsparticles",
    init: hz,
    loaded: mz,
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
          color: { value: "#5ae2f9" },
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
const yz = async (t) => {
    await bv(t);
  },
  vz = () => {};
function wz() {
  const t =
    (window.innerWidth * window.innerHeight * 216) / 2073600 > 69
      ? 69
      : (window.innerWidth * window.innerHeight * 216) / 2073600 < 10
      ? 10
      : (window.innerWidth * window.innerHeight * 216) / 2073600;
  return P.jsx(yf, {
    id: "tsparticles",
    init: yz,
    loaded: vz,
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
          color: { value: "#5ae2f9" },
          consent: !1,
          distance: 100,
          enable: !0,
          frequency: 1,
          opacity: 1,
          shadow: { blur: 16, color: { value: "#5ae2f9" }, enable: !0 },
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
          blur: 10,
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
function bz() {
  const [t, e] = A.useState(!0);
  A.useEffect(() => {
    localStorage.getItem("&7aQ@sb95ZF1cP#4&m3K") === "false" && e(!1),
      rs.init({ duration: 1e3 }),
      rs.refresh();
  }, []),
    A.useEffect(() => {
      const r = () =>
        setInterval(() => {
          rs.refresh();
        }, 100);
      return (
        r(),
        () => {
          clearInterval(r);
        }
      );
    }, []),
    A.useEffect(() => {
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
  const [n, i] = A.useState(!1);
  return P.jsx(A.Suspense, {
    fallback: P.jsx(vr, { test: "welcome" }),
    children: P.jsxs("div", {
      children: [
        P.jsxs(xz, {
          children: [
            P.jsx(lf, { menuOpen: n, setMenuOpen: i, isdark: t, setDark: e }),
            P.jsxs(Sz, {
              fullscreen: !n,
              children: [
                P.jsx(Jd, { isdark: t }),
                P.jsx(Zd, { isdark: t }),
                P.jsx(ef, { isdark: t }),
                P.jsx(nf, { isdark: t }),
                P.jsx(rf, { isdark: t }),
              ],
            }),
            t ? P.jsx(wz, {}) : P.jsx(gz, {}),
          ],
        }),
        P.jsx(Ec, {}),
      ],
    }),
  });
}
const xz = G.div`
	height: 100vh;
	width: 100vw;
`,
  Sz = G.main`
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
Eu.createRoot(document.getElementById("root")).render(
  P.jsx(Y.StrictMode, { children: P.jsx(bz, {}) }),
);
