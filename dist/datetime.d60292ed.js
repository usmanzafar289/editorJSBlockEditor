// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/datetime.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/demo/dist/", i(i.s = 69);
}([function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  }), i.d(t, "b", function () {
    return s;
  });
  i(5);

  var n = function () {
    function e(t) {
      babelHelpers.classCallCheck(this, e), this.value = t.toString();
    }

    return babelHelpers.createClass(e, [{
      key: "toString",
      value: function value() {
        return this.value;
      }
    }]), e;
  }();

  function r(e) {
    if (e instanceof n) return e.value;
    throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(e));
  }

  var a = function a(e) {
    for (var t = document.createElement("template"), i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
      a[s - 1] = arguments[s];
    }

    return t.innerHTML = a.reduce(function (t, i, a) {
      return t + function (e) {
        if (e instanceof HTMLTemplateElement) return e.innerHTML;
        if (e instanceof n) return r(e);
        throw new Error("non-template value passed to Polymer's html function: ".concat(e));
      }(i) + e[a + 1];
    }, e[0]), t;
  },
      s = function s(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
      i[a - 1] = arguments[a];
    }

    return new n(i.reduce(function (t, i, n) {
      return t + r(i) + e[n + 1];
    }, e[0]));
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  i(5);
  var n = 0;

  function r() {}

  r.prototype.__mixinApplications, r.prototype.__mixinSet;

  var a = function a(e) {
    var t = e.__mixinApplications;
    t || (t = new WeakMap(), e.__mixinApplications = t);
    var i = n++;

    function r(n) {
      var r = n.__mixinSet;
      if (r && r[i]) return n;
      var a = t,
          s = a.get(n);
      s || (s = e(n), a.set(n, s));
      var o = Object.create(s.__mixinSet || r || null);
      return o[i] = !0, s.__mixinSet = o, s;
    }

    return r;
  };
}, function (e, t, i) {
  "use strict";

  i(5), i(6);
  var n = i(41),
      r = i(8);

  function a(e) {
    return "slot" === e.localName;
  }

  var s = function () {
    function e(t, i) {
      var n = this;
      babelHelpers.classCallCheck(this, e), this._shadyChildrenObserver = null, this._nativeChildrenObserver = null, this._connected = !1, this._target = t, this.callback = i, this._effectiveNodes = [], this._observer = null, this._scheduled = !1, this._boundSchedule = function () {
        n._schedule();
      }, this.connect(), this._schedule();
    }

    return babelHelpers.createClass(e, null, [{
      key: "getFlattenedNodes",
      value: function value(e) {
        return a(e) ? (e = e).assignedNodes({
          flatten: !0
        }) : Array.from(e.childNodes).map(function (e) {
          return a(e) ? (e = e).assignedNodes({
            flatten: !0
          }) : [e];
        }).reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
    }]), babelHelpers.createClass(e, [{
      key: "connect",
      value: function value() {
        var e = this;
        a(this._target) ? this._listenSlots([this._target]) : this._target.children && (this._listenSlots(this._target.children), window.ShadyDOM ? this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, function (t) {
          e._processMutations(t);
        }) : (this._nativeChildrenObserver = new MutationObserver(function (t) {
          e._processMutations(t);
        }), this._nativeChildrenObserver.observe(this._target, {
          childList: !0
        }))), this._connected = !0;
      }
    }, {
      key: "disconnect",
      value: function value() {
        a(this._target) ? this._unlistenSlots([this._target]) : this._target.children && (this._unlistenSlots(this._target.children), window.ShadyDOM && this._shadyChildrenObserver ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver), this._shadyChildrenObserver = null) : this._nativeChildrenObserver && (this._nativeChildrenObserver.disconnect(), this._nativeChildrenObserver = null)), this._connected = !1;
      }
    }, {
      key: "_schedule",
      value: function value() {
        var e = this;
        this._scheduled || (this._scheduled = !0, r.b.run(function () {
          return e.flush();
        }));
      }
    }, {
      key: "_processMutations",
      value: function value(e) {
        this._processSlotMutations(e), this.flush();
      }
    }, {
      key: "_processSlotMutations",
      value: function value(e) {
        if (e) for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.addedNodes && this._listenSlots(i.addedNodes), i.removedNodes && this._unlistenSlots(i.removedNodes);
        }
      }
    }, {
      key: "flush",
      value: function value() {
        if (!this._connected) return !1;
        window.ShadyDOM && ShadyDOM.flush(), this._nativeChildrenObserver ? this._processSlotMutations(this._nativeChildrenObserver.takeRecords()) : this._shadyChildrenObserver && this._processSlotMutations(this._shadyChildrenObserver.takeRecords()), this._scheduled = !1;

        for (var e, t = {
          target: this._target,
          addedNodes: [],
          removedNodes: []
        }, i = this.constructor.getFlattenedNodes(this._target), r = Object(n.a)(i, this._effectiveNodes), a = 0; a < r.length && (e = r[a]); a++) {
          for (var s, o = 0; o < e.removed.length && (s = e.removed[o]); o++) {
            t.removedNodes.push(s);
          }
        }

        for (var l, u = 0; u < r.length && (l = r[u]); u++) {
          for (var c = l.index; c < l.index + l.addedCount; c++) {
            t.addedNodes.push(i[c]);
          }
        }

        this._effectiveNodes = i;
        var d = !1;
        return (t.addedNodes.length || t.removedNodes.length) && (d = !0, this.callback.call(this._target, t)), d;
      }
    }, {
      key: "_listenSlots",
      value: function value(e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          a(i) && i.addEventListener("slotchange", this._boundSchedule);
        }
      }
    }, {
      key: "_unlistenSlots",
      value: function value(e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          a(i) && i.removeEventListener("slotchange", this._boundSchedule);
        }
      }
    }]), e;
  }();

  i(20), i(19);
  i.d(t, "b", function () {
    return u;
  }), i.d(t, "a", function () {
    return h;
  });

  var o = Element.prototype,
      l = o.matches || o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector,
      u = function u(e, t) {
    return l.call(e, t);
  },
      c = function () {
    function e(t) {
      babelHelpers.classCallCheck(this, e), this.node = t;
    }

    return babelHelpers.createClass(e, [{
      key: "observeNodes",
      value: function value(e) {
        return new s(this.node, e);
      }
    }, {
      key: "unobserveNodes",
      value: function value(e) {
        e.disconnect();
      }
    }, {
      key: "notifyObserver",
      value: function value() {}
    }, {
      key: "deepContains",
      value: function value(e) {
        if (this.node.contains(e)) return !0;

        for (var t = e, i = e.ownerDocument; t && t !== i && t !== this.node;) {
          t = t.parentNode || t.host;
        }

        return t === this.node;
      }
    }, {
      key: "getOwnerRoot",
      value: function value() {
        return this.node.getRootNode();
      }
    }, {
      key: "getDistributedNodes",
      value: function value() {
        return "slot" === this.node.localName ? this.node.assignedNodes({
          flatten: !0
        }) : [];
      }
    }, {
      key: "getDestinationInsertionPoints",
      value: function value() {
        for (var e = [], t = this.node.assignedSlot; t;) {
          e.push(t), t = t.assignedSlot;
        }

        return e;
      }
    }, {
      key: "importNode",
      value: function value(e, t) {
        return (this.node instanceof Document ? this.node : this.node.ownerDocument).importNode(e, t);
      }
    }, {
      key: "getEffectiveChildNodes",
      value: function value() {
        return s.getFlattenedNodes(this.node);
      }
    }, {
      key: "queryDistributedElements",
      value: function value(e) {
        for (var t, i = this.getEffectiveChildNodes(), n = [], r = 0, a = i.length; r < a && (t = i[r]); r++) {
          t.nodeType === Node.ELEMENT_NODE && u(t, e) && n.push(t);
        }

        return n;
      }
    }, {
      key: "activeElement",
      get: function get() {
        var e = this.node;
        return void 0 !== e._activeElement ? e._activeElement : e.activeElement;
      }
    }]), e;
  }();

  var d = function () {
    function e(t) {
      babelHelpers.classCallCheck(this, e), this.event = t;
    }

    return babelHelpers.createClass(e, [{
      key: "rootTarget",
      get: function get() {
        return this.event.composedPath()[0];
      }
    }, {
      key: "localTarget",
      get: function get() {
        return this.event.target;
      }
    }, {
      key: "path",
      get: function get() {
        return this.event.composedPath();
      }
    }]), e;
  }();

  c.prototype.cloneNode, c.prototype.appendChild, c.prototype.insertBefore, c.prototype.removeChild, c.prototype.replaceChild, c.prototype.setAttribute, c.prototype.removeAttribute, c.prototype.querySelector, c.prototype.querySelectorAll, c.prototype.parentNode, c.prototype.firstChild, c.prototype.lastChild, c.prototype.nextSibling, c.prototype.previousSibling, c.prototype.firstElementChild, c.prototype.lastElementChild, c.prototype.nextElementSibling, c.prototype.previousElementSibling, c.prototype.childNodes, c.prototype.children, c.prototype.classList, c.prototype.textContent, c.prototype.innerHTML, function (e, t) {
    for (var i = function i(_i) {
      var n = t[_i];

      e[n] = function () {
        return this.node[n].apply(this.node, arguments);
      };
    }, n = 0; n < t.length; n++) {
      i(n);
    }
  }(c.prototype, ["cloneNode", "appendChild", "insertBefore", "removeChild", "replaceChild", "setAttribute", "removeAttribute", "querySelector", "querySelectorAll"]), function (e, t) {
    for (var i = function i(_i2) {
      var n = t[_i2];
      Object.defineProperty(e, n, {
        get: function get() {
          return this.node[n];
        },
        configurable: !0
      });
    }, n = 0; n < t.length; n++) {
      i(n);
    }
  }(c.prototype, ["parentNode", "firstChild", "lastChild", "nextSibling", "previousSibling", "firstElementChild", "lastElementChild", "nextElementSibling", "previousElementSibling", "childNodes", "children", "classList"]), function (e, t) {
    for (var i = function i(_i3) {
      var n = t[_i3];
      Object.defineProperty(e, n, {
        get: function get() {
          return this.node[n];
        },
        set: function set(e) {
          this.node[n] = e;
        },
        configurable: !0
      });
    }, n = 0; n < t.length; n++) {
      i(n);
    }
  }(c.prototype, ["textContent", "innerHTML"]);

  var h = function h(e) {
    var t;
    (e = e || document).__domApi || (t = e instanceof Event ? new d(e) : new c(e), e.__domApi = t);
    return e.__domApi;
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "d", function () {
    return n;
  }), i.d(t, "g", function () {
    return r;
  }), i.d(t, "b", function () {
    return a;
  }), i.d(t, "c", function () {
    return s;
  }), i.d(t, "i", function () {
    return o;
  }), i.d(t, "e", function () {
    return l;
  }), i.d(t, "f", function () {
    return u;
  }), i.d(t, "a", function () {
    return d;
  }), i.d(t, "h", function () {
    return h;
  });
  i(5);

  function n(e) {
    return e.indexOf(".") >= 0;
  }

  function r(e) {
    var t = e.indexOf(".");
    return -1 === t ? e : e.slice(0, t);
  }

  function a(e, t) {
    return 0 === e.indexOf(t + ".");
  }

  function s(e, t) {
    return 0 === t.indexOf(e + ".");
  }

  function o(e, t, i) {
    return t + i.slice(e.length);
  }

  function l(e, t) {
    return e === t || a(e, t) || s(e, t);
  }

  function u(e) {
    if (Array.isArray(e)) {
      for (var t = [], i = 0; i < e.length; i++) {
        for (var n = e[i].toString().split("."), r = 0; r < n.length; r++) {
          t.push(n[r]);
        }
      }

      return t.join(".");
    }

    return e;
  }

  function c(e) {
    return Array.isArray(e) ? u(e).split(".") : e.toString().split(".");
  }

  function d(e, t, i) {
    for (var n = e, r = c(t), a = 0; a < r.length; a++) {
      if (!n) return;
      n = n[r[a]];
    }

    return i && (i.path = r.join(".")), n;
  }

  function h(e, t, i) {
    var n = e,
        r = c(t),
        a = r[r.length - 1];

    if (r.length > 1) {
      for (var s = 0; s < r.length - 1; s++) {
        if (!(n = n[r[s]])) return;
      }

      n[a] = i;
    } else n[t] = i;

    return r.join(".");
  }
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return r;
  });
  var n = i(24),
      r = (i(0), Object(n.a)(HTMLElement));
}, function (e, t, i) {
  "use strict";

  window.JSCompiler_renameProperty = function (e, t) {
    return e;
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "f", function () {
    return r;
  }), i.d(t, "c", function () {
    return a;
  }), i.d(t, "d", function () {
    return s;
  }), i.d(t, "b", function () {
    return o;
  }), i.d(t, "e", function () {
    return l;
  }), i.d(t, "a", function () {
    return u;
  });
  i(5);
  var n = i(14),
      r = !window.ShadyDOM,
      a = (Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss), window.customElements.polyfillWrapFlushCallback, Object(n.a)(document.baseURI || window.location.href)),
      s = window.Polymer && window.Polymer.sanitizeDOMValue || void 0,
      o = !1,
      l = !1,
      u = !1;
}, function (e, t, i) {
  "use strict";

  var n = i(1),
      r = new Map(),
      a = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_localeChanged",
        value: function value(e) {
          if (e && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf(e)) {
            var t = new Intl.DateTimeFormat(e).resolvedOptions();

            if ("gregory" === t.calendar || "iso8601" === t.calendar) {
              if (!r.has(e)) {
                var i = .5.toLocaleString(e, {
                  minimumIntergerDigits: 1,
                  maximumIntergerDigits: 1,
                  minimumFractionsDigits: 1,
                  maximumFractionsDigits: 1
                })[1],
                    n = new Date(Date.UTC(1970, 0, 22, 11, 44, 55)),
                    a = [n.toLocaleDateString(e, {
                  year: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, "").slice(0, 2), n.toLocaleDateString(e, {
                  month: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, "").slice(0, 2), n.toLocaleDateString(e, {
                  day: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, "").slice(0, 2), n.toLocaleTimeString(e, {
                  hour: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, "").slice(0, 2)],
                    s = n.toLocaleString(e, {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, ""),
                    o = a.reduce(function (e, t) {
                  return e.replace(t, "").replace(/[\u200E\u200F]/g, "");
                }, n.toLocaleDateString(e, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }))[0],
                    l = {
                  year: s.indexOf(a[0]),
                  month: s.indexOf(a[1]),
                  day: s.indexOf(a[2]),
                  hour: s.indexOf(a[3])
                },
                    u = {
                  parts: [],
                  timeFirst: l.year > l.hour,
                  dateFirst: l.year < l.hour
                };
                l.year < l.month ? l.year < l.day ? (u.parts.push("year"), l.month < l.day ? u.parts.push("month", "day") : u.parts.push("day", "month")) : u.parts.push("day", "year", "month") : l.month < l.day ? (u.parts.push("month"), l.year < l.day ? u.parts.push("year", "day") : u.parts.push("day", "year")) : u.parts.push("day", "month", "year");
                var c = n.toLocaleTimeString(e, {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                  hour12: !1
                }).replace(/[\u200E\u200F]/g, ""),
                    d = c.replace(/[\u200E\u200F]/g, "")[2],
                    h = c.split(d);
                h.push(d);
                var p = h.reduce(function (e, t) {
                  return e.replace(t, "").replace(/[\u200E\u200F\s]/g, "");
                }, n.toLocaleTimeString(e, {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                  hour12: !0,
                  hourCycle: "h12"
                }));
                h.push(p), n.setUTCHours(23);
                var f = h.reduce(function (e, t) {
                  return e.replace(t, "").replace(/[\u200E\u200F\s]/g, "");
                }, n.toLocaleTimeString(e, {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                  hour12: !0,
                  hourCycle: "h12"
                }));
                r.set(e, {
                  decimalSeparator: i,
                  dateSeparator: o,
                  timeSeparator: d,
                  amString: p && "." !== p ? p : "AM",
                  pmString: f && "." !== f ? f : "PM",
                  dateOrder: u
                });
              }

              var b = r.get(e);
              b.hour12Format = void 0 === this.hour12Format ? Boolean(t.hour12) : this.hour12Format, this.setProperties(b, !0);
            } else {
              var m;
              if (-1 !== e.indexOf("-u-")) {
                if (-1 !== (m = e.indexOf("-ca-"))) {
                  var v = e.indexOf("-", m + 4);
                  this.locale = -1 !== v ? e.slice(0, m + 4) + "gregory" + e.slice(v) : e.slice(0, m + 4) + "gregory";
                } else this.locale = e + "-ca-gregory";
              } else this.locale = e + "-u-ca-gregory";
            }
          } else this.locale = navigator.language;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            locale: {
              type: String,
              value: navigator.language
            },
            decimalSeparator: {
              type: String,
              readOnly: !0
            },
            dateSeparator: {
              type: String,
              readOnly: !0
            },
            timeSeparator: {
              type: String,
              readOnly: !0
            },
            amString: {
              type: String,
              readOnly: !0
            },
            pmString: {
              type: String,
              readOnly: !0
            },
            dateOrder: {
              type: Object,
              value: function value() {
                return {
                  parts: [],
                  timeFirst: !1,
                  dateFirst: !0
                };
              },
              notify: !0,
              readOnly: !0
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_localeChanged(locale)"];
        }
      }]), t;
    }(e);
  }),
      s = i(11);
  i.d(t, "c", function () {
    return h;
  }), i.d(t, "b", function () {
    return p;
  }), i.d(t, "a", function () {
    return f;
  });

  var o = /^([+-]?\d+-?\d\d-?\d\d)?(?:T?(?:(\d\d:?\d\d(?::?\d\d(?:\.?\d\d\d)?)?)([+-]\d\d:?\d\d|Z)?)?)$/,
      l = /(?:([+-]\d\d):?(\d\d)|Z)$/,
      u = function u(e, t) {
    for (var i = e < 0 ? "-" : "", n = "" + Math.abs(e); n.length < t;) {
      n = "0" + n;
    }

    return i + n;
  },
      c = function c(e) {
    if (isNaN(e)) return {};
    var t = Object(s.a)(e);
    if (0 === e) return {
      timezone: "+00:00",
      offsetMinutes: e,
      _timeZoneHours: t ? 0 : -0,
      _timeZoneMinutes: 0
    };
    var i = (t ? 1 : -1) * Math.floor(Math.abs(e) / 60),
        n = Math.abs(e) % 60;
    return {
      timezone: (t ? "+" : "-") + u(Math.abs(i), 2) + ":" + u(n, 2),
      offsetMinutes: e,
      _timeZoneHours: i,
      _timeZoneMinutes: n
    };
  },
      d = function d(e) {
    if ("Z" === e) return {
      timezone: "+00:00",
      offsetMinutes: 0,
      _timeZoneHours: 0,
      _timeZoneMinutes: 0
    };
    var t = l.exec(e);

    if (t) {
      var i = +t[1],
          n = +t[2],
          r = Object(s.a)(i),
          a = (r ? 1 : -1) * (60 * Math.abs(i) + n);
      return 0 === a ? {
        timezone: "+00:00",
        offsetMinutes: a,
        _timeZoneHours: r ? -0 : 0,
        _timeZoneMinutes: 0
      } : {
        timezone: e,
        offsetMinutes: a,
        _timeZoneHours: i,
        _timeZoneMinutes: n
      };
    }
  },
      h = function h(e, t) {
    var i = new Date(e, t, 0);
    return isNaN(i) ? 31 : (i.setFullYear(e), i.getDate());
  },
      p = function p(e, t, i) {
    var n;

    switch (babelHelpers.typeof(e)) {
      case "object":
        e && e.getDate && (n = new Date(e));
        break;

      case "number":
        isNaN(e) || (n = new Date(e));
        break;

      case "string":
        var r = o.exec(e);
        r && (n = new Date("".concat(r[1] || "1970-01-01", "T").concat(r[2] || "00:00:00").concat(r[3] || "Z")), r[3] ? t = d(r[3]).offsetMinutes : (isNaN(t) && (t = r[1] || !i ? n.getTimezoneOffset() : 0), n.setMinutes(n.getMinutes() + t)));
    }

    return isNaN(n) || isNaN(t) && (t = n.getTimezoneOffset()), {
      valueAsDate: n,
      offsetMinutes: t
    };
  },
      f = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_shouldPropertyChange",
        value: function value(e, i, n) {
          return 0 === i && 0 === n ? 1 / i !== 1 / n : babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_shouldPropertyChange", this).call(this, e, i, n);
        }
      }, {
        key: "now",
        value: function value() {
          var e = new Date();
          this.timezone || (this._timeOnly && !this.date ? (this.__updatingTimezoneOffset = !0, this.offsetMinutes = 0, this.__updatingTimezoneOffset = !1, e.setUTCFullYear(1970), e.setUTCMonth(0), e.setUTCDate(1)) : this._checkDefaultTimezone(e)), e.setMinutes(e.getMinutes() - e.getTimezoneOffset() + this.offsetMinutes), this.setDate(e);
        }
      }, {
        key: "setDate",
        value: function value(e) {
          if (isNaN(e)) isNaN(this._defaultValue) || this.resetDate();else {
            e = this._checkThreshold(e), this._checkDefaultTimezone(e);

            var t = {},
                i = +e,
                n = this._computeTimezoneShift(e);

            n !== this.offsetMinutes && (t = c(n)), this.valueAsNumber !== i && (t.valueAsNumber = i), +this.valueAsDate !== i && (t.valueAsDate = new Date(i));
            var r = new Date(i);
            r.setMinutes(e.getMinutes() - n);

            var a = (r = this._clampUTCComponents(r, this.clamp)).getUTCFullYear(),
                s = r.getUTCMonth() + 1,
                o = r.getUTCDate(),
                l = this._dateLocked ? 0 : r.getUTCHours(),
                d = this._dateLocked ? 0 : r.getUTCMinutes(),
                h = this._dateLocked ? 0 : r.getUTCSeconds(),
                p = this._dateLocked ? 0 : r.getUTCMilliseconds(),
                f = 0 === l ? 12 : l > 12 ? l - 12 : l,
                b = l < 12,
                m = function (e, t, i) {
              return u(e, e < 0 ? 6 : 4) + "-" + u(t, 2) + "-" + u(i, 2);
            }(a, s, o),
                v = this._dateLocked ? "00:00:00.000" : function (e, t, i, n) {
              return u(e || 0, 2) + ":" + u(t || 0, 2) + (void 0 !== i ? ":" + u(i, 2) + (void 0 !== n ? "." + u(n, 3) : "") : "");
            }(l, d, h, p),
                y = m + "T" + v + (t.timezone || this.timezone);

            a === this.year && s === this.month && o === this.day && l === this.hour && f === this.hour12 && b === this.isAm && d === this.minute && h === this.second && p === this.millisecond || (t.year = a, t.month = s, t.day = o, t.hour = l, t.hour12 = f, t.minute = d, t.second = h, t.millisecond = p, t.isAm = b), y === this.datetime && m === this.date && v === this.time || (t.date = m, t.time = v, t.datetime = y), this.setProperties(t);
          }
        }
      }, {
        key: "resetDate",
        value: function value(e) {
          e && e.stopPropagation && e.stopPropagation(), this.setProperties({
            valueAsDate: void 0,
            valueAsNumber: void 0,
            datetime: void 0,
            date: void 0,
            time: void 0,
            year: void 0,
            month: void 0,
            day: void 0,
            hour: void 0,
            hour12: void 0,
            isAm: void 0,
            minute: void 0,
            second: void 0,
            millisecond: void 0,
            timezone: void 0,
            offsetMinutes: void 0,
            _timeZoneHours: void 0,
            _timeZoneMinutes: void 0,
            _recentLocalTimezoneOffset: void 0
          });
          var t = p(this.default, void 0, this._timeOnly);
          isNaN(t.valueAsDate) || (this.__updatingTimezoneOffset = !0, this.setProperties(c(t.offsetMinutes)), this._recentLocalTimezoneOffset = t.valueAsDate.getTimezoneOffset(), this.__updatingTimezoneOffset = !1, this.setDate(t.valueAsDate));
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          void 0 !== e && (isNaN(this.valueAsDate) || isNaN(this.valueAsNumber)) && this.resetDate();
        }
      }, {
        key: "_computeDatetime",
        value: function value(e, t, i, n, r, a, s) {
          if (!this.__updatingTimezoneOffset) if (isNaN(e) && isNaN(t) && isNaN(i) && isNaN(n) && isNaN(r) && isNaN(a) && isNaN(s)) void 0 !== this.valueAsDate && this.resetDate();else {
            var o = new Date(this.valueAsDate);
            isNaN(o) && (o = new Date(void 0 !== this.valueAsNumber ? this.valueAsNumber : this.datetime), isNaN(o) && (this._timeOnly && !this.date ? (o = this.time ? new Date("1970-01-01T" + this.time + "Z") : new Date(0)).setMinutes(o.getMinutes() + o.getTimezoneOffset()) : this.date && (o = new Date(this.date + "T" + (this.time || "00:00") + (this.timezone || "Z")), this.timezone || o.setMinutes(o.getMinutes() + o.getTimezoneOffset())), isNaN(o) && (o = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0))));
            var l = o.getTimezoneOffset(),
                u = this.offsetMinutes;
            isNaN(u) && (u = l), o.setMinutes(o.getMinutes() - u), void 0 !== e && o.setUTCFullYear(e), void 0 !== t && o.setUTCMonth(t - 1), void 0 !== i && o.setUTCDate(i), void 0 !== n && o.setUTCHours(n), void 0 !== r && o.setUTCMinutes(r), void 0 !== a && o.setUTCSeconds(a), void 0 !== s && o.setUTCMilliseconds(s), o.setMinutes(o.getMinutes() + u - l + o.getTimezoneOffset()), this.setDate(o);
          }
        }
      }, {
        key: "_dateTimeChanged",
        value: function value(e, t) {
          this.__updatingTimezoneOffset || (void 0 !== e || void 0 !== t ? (!e && this._timeOnly && (this.__updatingTimezoneOffset = !0, this.offsetMinutes = 0, this.__updatingTimezoneOffset = !1), e = e || "1970-01-01", t = t || "00:00:00.000", this.timezone || this._checkDefaultTimezone(new Date(e + "T" + t + "Z")), this.datetime = e + "T" + t + this.timezone) : void 0 !== this.valueAsDate && this.resetDate());
        }
      }, {
        key: "_datetimeChanged",
        value: function value(e) {
          if (!this.__updatingTimezoneOffset) if (void 0 !== e) {
            if ("object" === babelHelpers.typeof(e) && e instanceof Date) return this._recentLocalTimezoneOffset = e.getTimezoneOffset(), void this.setDate(e);
            var t,
                i = o.exec(e);
            null !== i && (void 0 === i[3] ? (t = new Date((i[1] || "1970-01-01") + "T" + i[2] + "Z"), this._checkDefaultTimezone(t), t.setMinutes(t.getMinutes() + this.offsetMinutes)) : (void 0 === i[1] && (i[0] = "1970-01-01T" + i[2] + i[3]), t = new Date(i[0]), i[3] !== this.timezone && (this.__updatingTimezoneOffset = !0, this.setProperties(d(i[3])), this.__updatingTimezoneOffset = !1)), this._recentLocalTimezoneOffset = t.getTimezoneOffset(), this.setDate(t));
          } else void 0 !== this.valueAsDate && this.resetDate();
        }
      }, {
        key: "_valueAsNumberChanged",
        value: function value(e) {
          isNaN(e) || "" === e || "boolean" === typeof e ? this.resetDate() : this.setDate(new Date(+e));
        }
      }, {
        key: "_valueAsDateChanged",
        value: function value(e) {
          switch (babelHelpers.typeof(e)) {
            case "number":
            case "string":
              e = new Date(e);
          }

          isNaN(e) ? this.resetDate() : this.setDate(new Date(e));
        }
      }, {
        key: "_checkThreshold",
        value: function value(e) {
          if (!isNaN(e)) return this._minValue > e ? new Date(this._minValue) : this._maxValue < e ? new Date(this._maxValue) : e;
        }
      }, {
        key: "_clampUTCComponents",
        value: function value(e, t) {
          switch (t) {
            case "year":
            case "month":
              e.setUTCMonth(0);

            case "day":
              e.setUTCDate(1);

            case "hour":
              e.setUTCHours(0);

            case "minute":
              e.setUTCMinutes(0);

            case "second":
              e.setUTCSeconds(0);

            case "millisecond":
              e.setUTCMilliseconds(0);
          }

          return e;
        }
      }, {
        key: "_ifClamped",
        value: function value(e, t, i) {
          var n = ["month", "day", "hour", "minute", "second", "millisecond"],
              r = n.indexOf(e);
          return i || -1 !== r && r <= n.indexOf(t);
        }
      }, {
        key: "_ifNotClamped",
        value: function value(e, t, i) {
          return !this._ifClamped(e, t, i);
        }
      }, {
        key: "_checkDefaultTimezone",
        value: function value(e) {
          (isNaN(this.offsetMinutes) || void 0 === this.timezone) && (this.__updatingTimezoneOffset = !0, this.timezone ? this.setProperties(d(this.timezone)) : this.setProperties(c((void 0 !== e ? e : new Date()).getTimezoneOffset())), this.__updatingTimezoneOffset = !1), isNaN(this._recentLocalTimezoneOffset) && (this._recentLocalTimezoneOffset = (void 0 !== e ? e : new Date()).getTimezoneOffset());
        }
      }, {
        key: "_computeTimezoneShift",
        value: function value(e) {
          var t = e.getTimezoneOffset(),
              i = this.offsetMinutes;
          return this._recentLocalTimezoneOffset !== t && (i = i - this._recentLocalTimezoneOffset + t), this._recentLocalTimezoneOffset = t, i;
        }
      }, {
        key: "_clampChanged",
        value: function value(e) {
          void 0 !== e && (isNaN(this.valueAsNumber) || this.setDate(new Date(this.valueAsNumber)));
        }
      }, {
        key: "_minChanged",
        value: function value(e) {
          var t = p(e, this.offsetMinutes, this._timeOnly).valueAsDate;
          isNaN(t) ? this._minValue = void 0 : !isNaN(this._maxValue) && t > this._maxValue ? this.setProperties({
            min: this.max,
            max: e,
            _minValue: this._maxValue,
            _maxValue: +t
          }) : this._minValue = +t;
        }
      }, {
        key: "_maxChanged",
        value: function value(e) {
          var t = p(e, this.offsetMinutes, this._timeOnly).valueAsDate;
          isNaN(t) ? this._maxValue = void 0 : !isNaN(this._minValue) && this._minValue > t ? this.setProperties({
            min: e,
            max: this.min,
            _minValue: +t,
            _maxValue: this._minValue
          }) : this._maxValue = +t;
        }
      }, {
        key: "_minMaxValueChanged",
        value: function value() {
          isNaN(this.valueAsNumber) || this.setDate(new Date(this.valueAsNumber));
        }
      }, {
        key: "_hour12Changed",
        value: function value(e, t) {
          void 0 !== e && e !== t && (this.hour = 12 === e ? this.isAm ? 0 : 12 : this.isAm ? e : e + 12);
        }
      }, {
        key: "_isAmChanged",
        value: function value(e, t) {
          void 0 !== e && e !== t && this._hour12Changed(this.hour12);
        }
      }, {
        key: "_timezoneChanged",
        value: function value(e, t) {
          if (void 0 !== e) {
            if (!l.exec(e)) return l.exec(t) ? void this.setProperties(d(t)) : void this.setProperties(c(isNaN(this.valueAsDate) ? new Date() : this.valueAsDate.getTimezoneOffset()));
            var i = d(e);
            i.offsetMinutes !== this.offsetMinutes || i.timezone !== e ? (this.__updatingTimezoneOffset = !0, this.setProperties(i), this.__updatingTimezoneOffset = !1) : this.valueAsDate && (this.datetime = this.date + "T" + this.time + e);
          } else void 0 !== this.valueAsDate && this.resetDate();
        }
      }, {
        key: "_offsetMinutesChanged",
        value: function value(e) {
          if (!isNaN(e)) {
            var t = c(e);
            this.setProperties(t), this.date && this.time && (this.datetime = this.date + "T" + this.time + t.timezone);
          }
        }
      }, {
        key: "_timeZoneHoursMinutesChanged",
        value: function value(e, t) {
          if (!isNaN(e) && !isNaN(t)) {
            var i = Object(s.a)(e);

            if (0 !== e || 0 !== t) {
              var n = (i ? 1 : -1) * (60 * Math.abs(e) + t),
                  r = (i ? "-" : "+") + u(Math.abs(e), 2) + ":" + u(t, 2);
              this.setProperties({
                offsetMinutes: n,
                timezone: r
              });
            } else this.setProperties({
              offsetMinutes: i ? 0 : -0,
              timezone: "+00:00"
            });
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            year: {
              type: Number,
              notify: !0
            },
            month: {
              type: Number,
              notify: !0
            },
            day: {
              type: Number,
              notify: !0
            },
            hour: {
              type: Number,
              notify: !0
            },
            hour12: {
              type: Number,
              notify: !0,
              observer: "_hour12Changed"
            },
            isAm: {
              type: Boolean,
              notify: !0,
              observer: "_isAmChanged"
            },
            minute: {
              type: Number,
              notify: !0
            },
            second: {
              type: Number,
              notify: !0
            },
            millisecond: {
              type: Number,
              notify: !0
            },
            datetime: {
              type: String,
              notify: !0
            },
            date: {
              type: String,
              notify: !0
            },
            time: {
              type: String,
              notify: !0
            },
            valueAsDate: {
              type: Date,
              notify: !0,
              observer: "_valueAsDateChanged"
            },
            valueAsNumber: {
              type: Number,
              notify: !0,
              observer: "_valueAsNumberChanged"
            },
            default: {
              type: Object,
              observer: "_defaultChanged"
            },
            min: {
              type: Object,
              notify: !0,
              observer: "_minChanged"
            },
            _minValue: {
              type: Number
            },
            max: {
              type: Object,
              notify: !0,
              observer: "_maxChanged"
            },
            _maxValue: {
              type: Number
            },
            hour12Format: {
              type: Boolean,
              reflectToAttribute: !0,
              notify: !0
            },
            clamp: {
              type: String,
              notify: !0,
              observer: "_clampChanged"
            },
            timezone: {
              type: String,
              notify: !0,
              observer: "_timezoneChanged"
            },
            offsetMinutes: {
              type: Number,
              notify: !0,
              observer: "_offsetMinutesChanged"
            },
            _timeZoneHours: {
              type: Number
            },
            _timeZoneMinutes: {
              type: Number
            },
            _recentLocalTimezoneOffset: {
              type: Number
            },
            _timeOnly: {
              type: Boolean,
              value: !1
            },
            _dateLocked: {
              type: Boolean,
              computed: '_ifClamped(clamp, "hour")'
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computeDatetime(year, month, day, hour, minute, second, millisecond)", "_datetimeChanged(datetime)", "_dateTimeChanged(date, time)", "_timeZoneHoursMinutesChanged(_timeZoneHours, _timeZoneMinutes)", "_minMaxValueChanged(_minValue, _maxValue)"];
        }
      }]), t;
    }(a(e));
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return l;
  }), i.d(t, "a", function () {
    return u;
  }), i.d(t, "b", function () {
    return c;
  });
  i(5);
  var n = 0,
      r = 0,
      a = [],
      s = 0,
      o = document.createTextNode("");
  new window.MutationObserver(function () {
    for (var e = a.length, t = 0; t < e; t++) {
      var i = a[t];
      if (i) try {
        i();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    a.splice(0, e), r += e;
  }).observe(o, {
    characterData: !0
  });
  var l = {
    after: function after(e) {
      return {
        run: function run(t) {
          return window.setTimeout(t, e);
        },
        cancel: function cancel(e) {
          window.clearTimeout(e);
        }
      };
    },
    run: function run(e, t) {
      return window.setTimeout(e, t);
    },
    cancel: function cancel(e) {
      window.clearTimeout(e);
    }
  },
      u = {
    run: function run(e) {
      return window.requestAnimationFrame(e);
    },
    cancel: function cancel(e) {
      window.cancelAnimationFrame(e);
    }
  },
      c = {
    run: function run(e) {
      return o.textContent = s++, a.push(e), n++;
    },
    cancel: function cancel(e) {
      var t = e - r;

      if (t >= 0) {
        if (!a[t]) throw new Error("invalid async handle: " + e);
        a[t] = null;
      }
    }
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return h;
  }), i.d(t, "b", function () {
    return p;
  });
  var n = i(1),
      r = i(0),
      a = i(7),
      s = i(23);
  i(35);

  function o() {
    var e = babelHelpers.taggedTemplateLiteral(['<template is="dom-if" if="[[withTimezone]]"><div class="timezone" style$="order:[[_computePartOrder(dateOrder.timeFirst)]];"><integer-input value="{{_timeZoneHours}}" pad-length="2" always-sign step="1" placeholder="\xb100" min="-23" max="23" use-negative-zero></integer-input><span>[[timeSeparator]]</span><integer-input value="{{_timeZoneMinutes}}" pad-length="2" min="0" max="45" step="15" placeholder="00"></integer-input></div></template>']);
    return o = function o() {
      return e;
    }, e;
  }

  function l() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return l = function l() {
      return e;
    }, e;
  }

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["", ' <button class="icon reset" invisible$="[[_resetButtonIsInvisible]]" hidden$="[[disabled]]" on-click="resetDate"><svg viewBox="0 0 24 24"><g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></g></svg></button> ', ""]);
    return u = function u() {
      return e;
    }, e;
  }

  function c() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return c = function c() {
      return e;
    }, e;
  }

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", "<style>#input>.part,.timezone{display:inline-flex;flex-flow:row nowrap;align-items:baseline}#input>div{padding:var(--input-field-padding,0 1px);border:var(--input-border-width,thin) solid transparent}#input .reset{order:2}#input integer-input[always-sign]{--input-align:end}</style>"]);
    return d = function d() {
      return e;
    }, e;
  }

  var h = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._isSet = function (e) {
          return !("boolean" === typeof e) && this._defaultIsSet(e);
        }.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeDefaultValue",
        value: function value(e) {
          return +Object(a.b)(e).valueAsDate;
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          !1 === this._isSet(e) && (this.default = void 0);
        }
      }, {
        key: "_defaultValueChanged",
        value: function value(e) {
          isNaN(e) || (isNaN(this.valueAsDate) || isNaN(this.valueAsNumber)) && this.reset();
        }
      }, {
        key: "now",
        value: function value() {
          var e = new Date();
          this.timezone || (this._timeOnly && !this.date ? (this.__updatingTimezoneOffset = !0, this.offsetMinutes = 0, this.__updatingTimezoneOffset = !1, e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e.setUTCFullYear(1970), e.setUTCMonth(0), e.setUTCDate(1)) : this._checkDefaultTimezone(e)), e.setMinutes(e.getMinutes() - this.offsetMinutes), this._partsDisabled && (this._partsDisabled.month ? e = this._clampUTC(e, "month") : this._partsDisabled.day ? e = this._clampUTC(e, "day") : this._partsDisabled.hour ? e = this._clampUTC(e, "hour") : this._partsDisabled.minute ? e = this._clampUTC(e, "minute") : this._partsDisabled.second ? e = this._clampUTC(e, "second") : this._partsDisabled.millisecond && (e = this._clampUTC(e, "millisecond"))), e.setMinutes(e.getMinutes() + this.offsetMinutes), this.setDate(e);
        }
      }, {
        key: "_computePartsStep",
        value: function value(e) {
          if (void 0 !== e) {
            if (0 === e) return this.set("_partsStep.day", 0), this.set("_partsStep.hour", 0), this.set("_partsStep.minute", 0), this.set("_partsStep.second", 0), this.set("_partsStep.millisecond", 0), void this.notifyPath("_partsStep");
            if (e < .001) return this.set("step", .001), this.set("_partsStep.day", 1), this.set("_partsStep.hour", 1), this.set("_partsStep.minute", 1), this.set("_partsStep.second", 1), this.set("_partsStep.millisecond", 1), this.notifyPath("_partsStep"), void (this._ifClamped(this.clamp, "millisecond") && this.set("clamp", ""));
            (e = +e.toFixed(3)) % 86400 === 0 ? (this.set("_partsStep.day", e / 86400), this.set("_partsStep.hour", 0), this.set("_partsStep.minute", 0), this.set("_partsStep.second", 0), this.set("_partsStep.millisecond", 0), this._ifClamped(this.clamp, "day") && this.set("clamp", "hour")) : e % 3600 === 0 ? (this.set("_partsStep.day", 1), this.set("_partsStep.hour", e / 3600), this.set("_partsStep.minute", 0), this.set("_partsStep.second", 0), this.set("_partsStep.millisecond", 0), this._ifClamped(this.clamp, "hour") && this.set("clamp", "minute")) : e % 60 === 0 ? (this.set("_partsStep.day", 1), this.set("_partsStep.hour", 1), this.set("_partsStep.minute", e / 60), this.set("_partsStep.second", 0), this.set("_partsStep.millisecond", 0), this._ifClamped(this.clamp, "minute") && this.set("clamp", "second")) : e % 1 === 0 ? (this.set("_partsStep.day", 1), this.set("_partsStep.hour", 1), this.set("_partsStep.minute", 1), this.set("_partsStep.second", e), this.set("_partsStep.millisecond", 0), this._ifClamped(this.clamp, "second") && this.set("clamp", "millisecond")) : (this.set("_partsStep.day", 1), this.set("_partsStep.hour", 1), this.set("_partsStep.minute", 1), this.set("_partsStep.second", 1), this.set("_partsStep.millisecond", 1e3 * e), this._ifClamped(this.clamp, "millisecond") && this.set("clamp", "")), this.notifyPath("_partsStep");
          }
        }
      }, {
        key: "_computePartsDisabled",
        value: function value(e, t) {
          if (e && e.path) {
            if (-1 !== e.path.indexOf(".")) {
              var i = "_partsDisabled." + e.path.split(".")[1];
              t ? this.set(i, !0) : this.set(i, !e.value);
            } else if (e && e.value) for (var n in e.value) {
              this.set("_partsDisabled." + n, t || !e.value[n]);
            }

            this.notifyPath("_partsDisabled");
          }
        }
      }, {
        key: "reset",
        value: function value(e) {
          this.resetDate(e);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            step: {
              type: Number,
              notify: !0
            },
            _partsDisabled: {
              type: Object,
              notify: !0,
              value: function value() {
                return {};
              }
            },
            _partsStep: {
              type: Object,
              notify: !0,
              readOnly: !0,
              value: function value() {
                return {
                  day: 1,
                  hour: 1,
                  minute: 1,
                  second: 1,
                  millisecond: 1
                };
              }
            },
            propertyForValue: {
              type: String,
              value: "valueAsNumber"
            },
            _defaultValue: {
              type: Number,
              computed: "_computeDefaultValue(default)"
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computePartsStep(step)", "_computePartsDisabled(_partsStep.*, disabled)", "_defaultValueChanged(_defaultValue)"];
        }
      }]), t;
    }(e);
  }),
      p = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computePartOrder",
        value: function value(e) {
          return e ? 0 : 1;
        }
      }, {
        key: "_computeResetButtonIsInvisible",
        value: function value(e, t, i) {
          return !e || !isNaN(t) && t === i || !1 === this._isSet(i);
        }
      }], [{
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(d(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(r.a)(c()), s.a);
        }
      }, {
        key: "inputTemplate",
        get: function get() {
          return Object(r.a)(u(), this.timezoneInputTemplate, babelHelpers.get(babelHelpers.getPrototypeOf(t), "inputTemplate", this) || Object(r.a)(l()));
        }
      }, {
        key: "timezoneInputTemplate",
        get: function get() {
          return Object(r.a)(o());
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            hideResetButton: {
              type: Boolean,
              reflectToAttribute: !0
            },
            withTimezone: {
              type: Boolean,
              value: !1
            },
            _resetButtonIsInvisible: {
              type: Boolean,
              computed: "_computeResetButtonIsInvisible(valueIsSet, _defaultValue, valueAsNumber)"
            }
          };
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "b", function () {
    return D;
  }), i.d(t, "c", function () {
    return I;
  }), i.d(t, "d", function () {
    return L;
  }), i.d(t, "a", function () {
    return U;
  });
  i(5);

  var n = i(8),
      r = i(19),
      a = i(6),
      s = "string" === typeof document.head.style.touchAction,
      o = "__polymerGestures",
      l = "__polymerGesturesHandled",
      u = "__polymerGesturesTouchAction",
      c = 25,
      d = 5,
      h = 2500,
      p = ["mousedown", "mousemove", "mouseup", "click"],
      f = [0, 1, 4, 2],
      b = function () {
    try {
      return 1 === new MouseEvent("test", {
        buttons: 1
      }).buttons;
    } catch (e) {
      return !1;
    }
  }();

  function m(e) {
    return p.indexOf(e) > -1;
  }

  var v = !1;

  function y(e) {
    if (!m(e) && "touchend" !== e) return s && v && a.b ? {
      passive: !0
    } : void 0;
  }

  !function () {
    try {
      var e = Object.defineProperty({}, "passive", {
        get: function get() {
          v = !0;
        }
      });
      window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
    } catch (e) {}
  }();
  var g = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),
      _ = [],
      k = {
    button: !0,
    input: !0,
    keygen: !0,
    meter: !0,
    output: !0,
    textarea: !0,
    progress: !0,
    select: !0
  },
      C = {
    button: !0,
    command: !0,
    fieldset: !0,
    input: !0,
    keygen: !0,
    optgroup: !0,
    option: !0,
    select: !0,
    textarea: !0
  };

  function w(e) {
    var t = Array.prototype.slice.call(e.labels || []);

    if (!t.length) {
      t = [];
      var i = e.getRootNode();
      if (e.id) for (var n = i.querySelectorAll("label[for = ".concat(e.id, "]")), r = 0; r < n.length; r++) {
        t.push(n[r]);
      }
    }

    return t;
  }

  var O = function O(e) {
    var t,
        i = e.sourceCapabilities;

    if ((!i || i.firesTouchEvents) && (e[l] = {
      skip: !0
    }, "click" === e.type)) {
      var n = !1,
          r = e.composedPath && e.composedPath();
      if (r) for (var a = 0; a < r.length; a++) {
        if (r[a].nodeType === Node.ELEMENT_NODE) if ("label" === r[a].localName) _.push(r[a]);else if (t = r[a], k[t.localName]) for (var s = w(r[a]), o = 0; o < s.length; o++) {
          n = n || _.indexOf(s[o]) > -1;
        }
        if (r[a] === S.mouse.target) return;
      }
      if (n) return;
      e.preventDefault(), e.stopPropagation();
    }
  };

  function x(e) {
    for (var t, i = g ? ["click"] : p, n = 0; n < i.length; n++) {
      t = i[n], e ? (_.length = 0, document.addEventListener(t, O, !0)) : document.removeEventListener(t, O, !0);
    }
  }

  function T(e) {
    var t = e.type;
    if (!m(t)) return !1;

    if ("mousemove" === t) {
      var i = void 0 === e.buttons ? 1 : e.buttons;
      return e instanceof window.MouseEvent && !b && (i = f[e.which] || 0), Boolean(1 & i);
    }

    return 0 === (void 0 === e.button ? 0 : e.button);
  }

  var S = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: !1
    }
  };

  function P(e, t, i) {
    e.movefn = t, e.upfn = i, document.addEventListener("mousemove", t), document.addEventListener("mouseup", i);
  }

  function H(e) {
    document.removeEventListener("mousemove", e.movefn), document.removeEventListener("mouseup", e.upfn), e.movefn = null, e.upfn = null;
  }

  document.addEventListener("touchend", function (e) {
    S.mouse.mouseIgnoreJob || x(!0), S.mouse.target = e.composedPath()[0], S.mouse.mouseIgnoreJob = r.a.debounce(S.mouse.mouseIgnoreJob, n.c.after(h), function () {
      x(), S.mouse.target = null, S.mouse.mouseIgnoreJob = null;
    });
  }, !!v && {
    passive: !0
  });
  var N = {},
      A = [];

  function E(e) {
    if (e.composedPath) {
      var t = e.composedPath();
      return t.length > 0 ? t[0] : e.target;
    }

    return e.target;
  }

  function z(e) {
    var t,
        i = e.type,
        n = e.currentTarget[o];

    if (n) {
      var r = n[i];

      if (r) {
        if (!e[l] && (e[l] = {}, "touch" === i.slice(0, 5))) {
          var a = (e = e).changedTouches[0];
          if ("touchstart" === i && 1 === e.touches.length && (S.touch.id = a.identifier), S.touch.id !== a.identifier) return;
          s || "touchstart" !== i && "touchmove" !== i || function (e) {
            var t = e.changedTouches[0],
                i = e.type;
            if ("touchstart" === i) S.touch.x = t.clientX, S.touch.y = t.clientY, S.touch.scrollDecided = !1;else if ("touchmove" === i) {
              if (S.touch.scrollDecided) return;
              S.touch.scrollDecided = !0;

              var n = function (e) {
                var t = "auto",
                    i = e.composedPath && e.composedPath();
                if (i) for (var n, r = 0; r < i.length; r++) {
                  if ((n = i[r])[u]) {
                    t = n[u];
                    break;
                  }
                }
                return t;
              }(e),
                  r = !1,
                  a = Math.abs(S.touch.x - t.clientX),
                  s = Math.abs(S.touch.y - t.clientY);

              e.cancelable && ("none" === n ? r = !0 : "pan-x" === n ? r = s > a : "pan-y" === n && (r = a > s)), r ? e.preventDefault() : R("track");
            }
          }(e);
        }

        if (!(t = e[l]).skip) {
          for (var c, d = 0; d < A.length; d++) {
            r[(c = A[d]).name] && !t[c.name] && c.flow && c.flow.start.indexOf(e.type) > -1 && c.reset && c.reset();
          }

          for (var h, p = 0; p < A.length; p++) {
            r[(h = A[p]).name] && !t[h.name] && (t[h.name] = !0, h[i](e));
          }
        }
      }
    }
  }

  function D(e, t, i) {
    return !!N[t] && (function (e, t, i) {
      var n = N[t],
          r = n.deps,
          a = n.name,
          s = e[o];
      s || (e[o] = s = {});

      for (var l, u, c = 0; c < r.length; c++) {
        l = r[c], g && m(l) && "click" !== l || ((u = s[l]) || (s[l] = u = {
          _count: 0
        }), 0 === u._count && e.addEventListener(l, z, y(l)), u[a] = (u[a] || 0) + 1, u._count = (u._count || 0) + 1);
      }

      e.addEventListener(t, i), n.touchAction && L(e, n.touchAction);
    }(e, t, i), !0);
  }

  function I(e, t, i) {
    return !!N[t] && (function (e, t, i) {
      var n = N[t],
          r = n.deps,
          a = n.name,
          s = e[o];
      if (s) for (var l, u, c = 0; c < r.length; c++) {
        l = r[c], (u = s[l]) && u[a] && (u[a] = (u[a] || 1) - 1, u._count = (u._count || 1) - 1, 0 === u._count && e.removeEventListener(l, z, y(l)));
      }
      e.removeEventListener(t, i);
    }(e, t, i), !0);
  }

  function j(e) {
    A.push(e);

    for (var t = 0; t < e.emits.length; t++) {
      N[e.emits[t]] = e;
    }
  }

  function L(e, t) {
    s && e instanceof HTMLElement && n.b.run(function () {
      e.style.touchAction = t;
    }), e[u] = t;
  }

  function M(e, t, i) {
    var n = new Event(t, {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    });

    if (n.detail = i, e.dispatchEvent(n), n.defaultPrevented) {
      var r = i.preventer || i.sourceEvent;
      r && r.preventDefault && r.preventDefault();
    }
  }

  function R(e) {
    var t = function (e) {
      for (var t, i = 0; i < A.length; i++) {
        t = A[i];

        for (var n = 0; n < t.emits.length; n++) {
          if (t.emits[n] === e) return t;
        }
      }

      return null;
    }(e);

    t.info && (t.info.prevent = !0);
  }

  function F(e, t, i, n) {
    t && M(t, e, {
      x: i.clientX,
      y: i.clientY,
      sourceEvent: i,
      preventer: n,
      prevent: function prevent(e) {
        return R(e);
      }
    });
  }

  function $(e, t, i) {
    if (e.prevent) return !1;
    if (e.started) return !0;
    var n = Math.abs(e.x - t),
        r = Math.abs(e.y - i);
    return n >= d || r >= d;
  }

  function B(e, t, i) {
    if (t) {
      var n,
          r = e.moves[e.moves.length - 2],
          a = e.moves[e.moves.length - 1],
          s = a.x - e.x,
          o = a.y - e.y,
          l = 0;
      r && (n = a.x - r.x, l = a.y - r.y), M(t, "track", {
        state: e.state,
        x: i.clientX,
        y: i.clientY,
        dx: s,
        dy: o,
        ddx: n,
        ddy: l,
        sourceEvent: i,
        hover: function hover() {
          return function (e, t) {
            for (var i = document.elementFromPoint(e, t), n = i; n && n.shadowRoot && !window.ShadyDOM && n !== (n = n.shadowRoot.elementFromPoint(e, t));) {
              n && (i = n);
            }

            return i;
          }(i.clientX, i.clientY);
        }
      });
    }
  }

  function V(e, t, i) {
    var n = Math.abs(t.clientX - e.x),
        r = Math.abs(t.clientY - e.y),
        a = E(i || t);
    !a || C[a.localName] && a.hasAttribute("disabled") || (isNaN(n) || isNaN(r) || n <= c && r <= c || function (e) {
      if ("click" === e.type) {
        if (0 === e.detail) return !0;
        var t = E(e);
        if (!t.nodeType || t.nodeType !== Node.ELEMENT_NODE) return !0;
        var i = t.getBoundingClientRect(),
            n = e.pageX,
            r = e.pageY;
        return !(n >= i.left && n <= i.right && r >= i.top && r <= i.bottom);
      }

      return !1;
    }(t)) && (e.prevent || M(a, "tap", {
      x: t.clientX,
      y: t.clientY,
      sourceEvent: t,
      preventer: i
    }));
  }

  j({
    name: "downup",
    deps: ["mousedown", "touchstart", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["mouseup", "touchend"]
    },
    emits: ["down", "up"],
    info: {
      movefn: null,
      upfn: null
    },
    reset: function reset() {
      H(this.info);
    },
    mousedown: function mousedown(e) {
      if (T(e)) {
        var t = E(e),
            i = this;
        P(this.info, function (e) {
          T(e) || (F("up", t, e), H(i.info));
        }, function (e) {
          T(e) && F("up", t, e), H(i.info);
        }), F("down", t, e);
      }
    },
    touchstart: function touchstart(e) {
      F("down", E(e), e.changedTouches[0], e);
    },
    touchend: function touchend(e) {
      F("up", E(e), e.changedTouches[0], e);
    }
  }), j({
    name: "track",
    touchAction: "none",
    deps: ["mousedown", "touchstart", "touchmove", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["mouseup", "touchend"]
    },
    emits: ["track"],
    info: {
      x: 0,
      y: 0,
      state: "start",
      started: !1,
      moves: [],
      addMove: function addMove(e) {
        this.moves.length > 2 && this.moves.shift(), this.moves.push(e);
      },
      movefn: null,
      upfn: null,
      prevent: !1
    },
    reset: function reset() {
      this.info.state = "start", this.info.started = !1, this.info.moves = [], this.info.x = 0, this.info.y = 0, this.info.prevent = !1, H(this.info);
    },
    mousedown: function mousedown(e) {
      if (T(e)) {
        var t = E(e),
            i = this,
            n = function n(e) {
          var n = e.clientX,
              r = e.clientY;
          $(i.info, n, r) && (i.info.state = i.info.started ? "mouseup" === e.type ? "end" : "track" : "start", "start" === i.info.state && R("tap"), i.info.addMove({
            x: n,
            y: r
          }), T(e) || (i.info.state = "end", H(i.info)), t && B(i.info, t, e), i.info.started = !0);
        };

        P(this.info, n, function (e) {
          i.info.started && n(e), H(i.info);
        }), this.info.x = e.clientX, this.info.y = e.clientY;
      }
    },
    touchstart: function touchstart(e) {
      var t = e.changedTouches[0];
      this.info.x = t.clientX, this.info.y = t.clientY;
    },
    touchmove: function touchmove(e) {
      var t = E(e),
          i = e.changedTouches[0],
          n = i.clientX,
          r = i.clientY;
      $(this.info, n, r) && ("start" === this.info.state && R("tap"), this.info.addMove({
        x: n,
        y: r
      }), B(this.info, t, i), this.info.state = "track", this.info.started = !0);
    },
    touchend: function touchend(e) {
      var t = E(e),
          i = e.changedTouches[0];
      this.info.started && (this.info.state = "end", this.info.addMove({
        x: i.clientX,
        y: i.clientY
      }), B(this.info, t, i));
    }
  }), j({
    name: "tap",
    deps: ["mousedown", "click", "touchstart", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["click", "touchend"]
    },
    emits: ["tap"],
    info: {
      x: NaN,
      y: NaN,
      prevent: !1
    },
    reset: function reset() {
      this.info.x = NaN, this.info.y = NaN, this.info.prevent = !1;
    },
    mousedown: function mousedown(e) {
      T(e) && (this.info.x = e.clientX, this.info.y = e.clientY);
    },
    click: function click(e) {
      T(e) && V(this.info, e);
    },
    touchstart: function touchstart(e) {
      var t = e.changedTouches[0];
      this.info.x = t.clientX, this.info.y = t.clientY;
    },
    touchend: function touchend(e) {
      V(this.info, e.changedTouches[0], e);
    }
  });
  var U = D;
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return n;
  }), i.d(t, "d", function () {
    return r;
  }), i.d(t, "a", function () {
    return s;
  }), i.d(t, "b", function () {
    return o;
  });

  var n = function n(e, t) {
    var i = a(e),
        n = a(t),
        r = Math.max(i, n);
    if (0 === r) return e + t;

    for (var o = Math.round(Math.pow(10, r) * e + Math.pow(10, r) * t), l = s(o) ? "-" : "", u = (o = "" + Math.abs(o)).length; u < r; u++) {
      o = "0" + o;
    }

    return +(l + o.slice(0, o.length - r) + "." + o.slice(o.length - r));
  },
      r = function r(e, t) {
    var i = a(e),
        n = a(t),
        r = i + n;
    if (0 === r) return e * t;
    var o = (s(e) ? !s(t) : s(t)) ? "-" : "";
    e = Math.round(Math.pow(10, i) * Math.abs(e));

    for (var l = 0, u = (t = "" + Math.round(Math.pow(10, n) * Math.abs(t))).length - 1; u >= 0; u--) {
      l += e * +t[u], e *= 10;
    }

    for (var c = (l = "" + l).length; c < r; c++) {
      l = "0" + l;
    }

    return +(o + l.slice(0, l.length - r) + "." + l.slice(l.length - r));
  },
      a = function a(e) {
    var t = (e || 0).toExponential().split("e"),
        i = -t[1] + (t[0].slice(t[0].indexOf(".")).length - 1);
    return i > 0 ? i : 0;
  },
      s = function s(e) {
    return e < 0 || 1 / e === -1 / 0;
  },
      o = function o(e) {
    return 0 === e && 1 / e === -1 / 0;
  };
}, function (e, t, i) {
  "use strict";

  var n = i(33),
      r = (i(13), i(5), i(25)),
      a = i(1);

  function s(e, t, i, n, r) {
    var a;
    r && (a = "object" === babelHelpers.typeof(i) && null !== i) && (n = e.__dataTemp[t]);
    var s = n !== i && (n === n || i === i);
    return a && s && (e.__dataTemp[t] = i), s;
  }

  var o = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_shouldPropertyChange",
        value: function value(e, t, i) {
          return s(this, e, t, i, !0);
        }
      }]), t;
    }(e);
  }),
      l = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_shouldPropertyChange",
        value: function value(e, t, i) {
          return s(this, e, t, i, this.mutableData);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            mutableData: Boolean
          };
        }
      }]), t;
    }(e);
  });
  o._mutablePropertyChange = s;
  var u = i(6),
      c = null;

  function d() {
    return c;
  }

  d.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: d,
      writable: !0
    }
  });
  var h = Object(r.a)(d),
      p = o(h);

  var f = function (e) {
    function t(e) {
      var i;
      babelHelpers.classCallCheck(this, t), (i = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._configureProperties(e), i.root = i._stampTemplate(i.__dataHost);

      for (var n = i.children = [], r = i.root.firstChild; r; r = r.nextSibling) {
        n.push(r), r.__templatizeInstance = babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(i));
      }

      i.__templatizeOwner && i.__templatizeOwner.__hideTemplateChildren__ && i._showHideChildren(!0);
      var a = i.__templatizeOptions;
      return (e && a.instanceProps || !a.instanceProps) && i._enableProperties(), i;
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "_configureProperties",
      value: function value(e) {
        if (this.__templatizeOptions.forwardHostProp) for (var t in this.__hostProps) {
          this._setPendingProperty(t, this.__dataHost["_host_" + t]);
        }

        for (var i in e) {
          this._setPendingProperty(i, e[i]);
        }
      }
    }, {
      key: "forwardHostProp",
      value: function value(e, t) {
        this._setPendingPropertyOrPath(e, t, !1, !0) && this.__dataHost._enqueueClient(this);
      }
    }, {
      key: "_addEventListenerToNode",
      value: function value(e, t, i) {
        var n = this;
        if (this._methodHost && this.__templatizeOptions.parentModel) this._methodHost._addEventListenerToNode(e, t, function (e) {
          e.model = n, i(e);
        });else {
          var r = this.__dataHost.__dataHost;
          r && r._addEventListenerToNode(e, t, i);
        }
      }
    }, {
      key: "_showHideChildren",
      value: function value(e) {
        for (var t = this.children, i = 0; i < t.length; i++) {
          var n = t[i];
          if (Boolean(e) != Boolean(n.__hideTemplateChildren__)) if (n.nodeType === Node.TEXT_NODE) e ? (n.__polymerTextContent__ = n.textContent, n.textContent = "") : n.textContent = n.__polymerTextContent__;else if ("slot" === n.localName) {
            if (e) n.__polymerReplaced__ = document.createComment("hidden-slot"), n.parentNode.replaceChild(n.__polymerReplaced__, n);else {
              var r = n.__polymerReplaced__;
              r && r.parentNode.replaceChild(n, r);
            }
          } else n.style && (e ? (n.__polymerDisplay__ = n.style.display, n.style.display = "none") : n.style.display = n.__polymerDisplay__);
          n.__hideTemplateChildren__ = e, n._showHideChildren && n._showHideChildren(e);
        }
      }
    }, {
      key: "_setUnmanagedPropertyToNode",
      value: function value(e, i, n) {
        e.__hideTemplateChildren__ && e.nodeType == Node.TEXT_NODE && "textContent" == i ? e.__polymerTextContent__ = n : babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_setUnmanagedPropertyToNode", this).call(this, e, i, n);
      }
    }, {
      key: "dispatchEvent",
      value: function value(e) {
        return !0;
      }
    }, {
      key: "parentModel",
      get: function get() {
        var e = this.__parentModel;

        if (!e) {
          var t;
          e = this;

          do {
            e = e.__dataHost.__dataHost;
          } while ((t = e.__templatizeOptions) && !t.parentModel);

          this.__parentModel = e;
        }

        return e;
      }
    }]), t;
  }(Object(r.a)(function () {
    return function e() {
      babelHelpers.classCallCheck(this, e);
    };
  }()));

  f.prototype.__dataHost, f.prototype.__templatizeOptions, f.prototype._methodHost, f.prototype.__templatizeOwner, f.prototype.__hostProps;
  var b = o(f);

  function m(e) {
    var t = e.__dataHost;
    return t && t._methodHost || t;
  }

  function v(e, t, i) {
    var n = function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), t;
    }(i.mutableData ? b : f);

    return n.prototype.__templatizeOptions = i, n.prototype._bindTemplate(e), function (e, t, i, n) {
      var r = i.hostProps || {};

      for (var a in n.instanceProps) {
        delete r[a];
        var s = n.notifyInstanceProp;
        s && e.prototype._addPropertyEffect(a, e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: _(a, s)
        });
      }

      if (n.forwardHostProp && t.__dataHost) for (var o in r) {
        e.prototype._addPropertyEffect(o, e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: function fn(e, t, i) {
            e.__dataHost._setPendingPropertyOrPath("_host_" + t, i[t], !0, !0);
          }
        });
      }
    }(n, e, t, i), n;
  }

  function y(e, t, i) {
    var n = i.forwardHostProp;

    if (n) {
      var r = t.templatizeTemplateClass;

      if (!r) {
        var a = i.mutableData ? p : h;

        r = t.templatizeTemplateClass = function (e) {
          function t() {
            return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
          }

          return babelHelpers.inherits(t, e), t;
        }(a);

        var s = t.hostProps;

        for (var o in s) {
          r.prototype._addPropertyEffect("_host_" + o, r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, {
            fn: g(o, n)
          }), r.prototype._createNotifyingProperty("_host_" + o);
        }
      }

      !function (e, t) {
        c = e, Object.setPrototypeOf(e, t.prototype), new t(), c = null;
      }(e, r), e.__dataProto && Object.assign(e.__data, e.__dataProto), e.__dataTemp = {}, e.__dataPending = null, e.__dataOld = null, e._enableProperties();
    }
  }

  function g(e, t) {
    return function (e, i, n) {
      t.call(e.__templatizeOwner, i.substring("_host_".length), n[i]);
    };
  }

  function _(e, t) {
    return function (e, i, n) {
      t.call(e.__templatizeOwner, e, i, n[i]);
    };
  }

  function k(e, t, i) {
    if (u.e && !m(e)) throw new Error("strictTemplatePolicy: template owner not trusted");
    if (i = i || {}, e.__templatizeOwner) throw new Error("A <template> can only be templatized once");
    e.__templatizeOwner = t;

    var n = (t ? t.constructor : f)._parseTemplate(e),
        r = n.templatizeInstanceClass;

    r || (r = v(e, n, i), n.templatizeInstanceClass = r), y(e, n, i);

    var a = function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), t;
    }(r);

    return a.prototype._methodHost = m(e), a.prototype.__dataHost = e, a.prototype.__templatizeOwner = t, a.prototype.__hostProps = n.hostProps, a = a;
  }

  function C(e, t) {
    for (var i; t;) {
      if (i = t.__templatizeInstance) {
        if (i.__dataHost == e) return i;
        t = i.__dataHost;
      } else t = t.parentNode;
    }

    return null;
  }

  var w = i(28),
      O = function (e) {
    function t() {
      var e;
      if (babelHelpers.classCallCheck(this, t), e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)), u.e) throw new Error("strictTemplatePolicy: dom-bind not allowed");
      return e.root = null, e.$ = null, e.__children = null, e;
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "observedAttributes",
      get: function get() {
        return ["mutable-data"];
      }
    }]), babelHelpers.createClass(t, [{
      key: "attributeChangedCallback",
      value: function value() {
        this.mutableData = !0;
      }
    }, {
      key: "connectedCallback",
      value: function value() {
        this.style.display = "none", this.render();
      }
    }, {
      key: "disconnectedCallback",
      value: function value() {
        this.__removeChildren();
      }
    }, {
      key: "__insertChildren",
      value: function value() {
        this.parentNode.insertBefore(this.root, this);
      }
    }, {
      key: "__removeChildren",
      value: function value() {
        if (this.__children) for (var e = 0; e < this.__children.length; e++) {
          this.root.appendChild(this.__children[e]);
        }
      }
    }, {
      key: "render",
      value: function value() {
        var e,
            t = this;

        if (!this.__children) {
          if (!(e = e || this.querySelector("template"))) {
            var i = new MutationObserver(function () {
              if (!(e = t.querySelector("template"))) throw new Error("dom-bind requires a <template> child");
              i.disconnect(), t.render();
            });
            return void i.observe(this, {
              childList: !0
            });
          }

          this.root = this._stampTemplate(e), this.$ = this.root.$, this.__children = [];

          for (var n = this.root.firstChild; n; n = n.nextSibling) {
            this.__children[this.__children.length] = n;
          }

          this._enableProperties();
        }

        this.__insertChildren(), this.dispatchEvent(new CustomEvent("dom-change", {
          bubbles: !0,
          composed: !0
        }));
      }
    }]), t;
  }(Object(w.a)(l(Object(r.a)(HTMLElement))));

  customElements.define("dom-bind", O);

  var x = i(4),
      T = i(19),
      S = i(20),
      P = i(3),
      H = i(8),
      N = function (e) {
    function t() {
      var e;
      return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__instances = [], e.__limit = 1 / 0, e.__pool = [], e.__renderDebouncer = null, e.__itemsIdxToInstIdx = {}, e.__chunkCount = null, e.__lastChunkTime = null, e.__sortFn = null, e.__filterFn = null, e.__observePaths = null, e.__ctor = null, e.__isDetached = !0, e.template = null, e;
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "dom-repeat";
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          items: {
            type: Array
          },
          as: {
            type: String,
            value: "item"
          },
          indexAs: {
            type: String,
            value: "index"
          },
          itemsIndexAs: {
            type: String,
            value: "itemsIndex"
          },
          sort: {
            type: Function,
            observer: "__sortChanged"
          },
          filter: {
            type: Function,
            observer: "__filterChanged"
          },
          observe: {
            type: String,
            observer: "__observeChanged"
          },
          delay: Number,
          renderedItemCount: {
            type: Number,
            notify: !0,
            readOnly: !0
          },
          initialCount: {
            type: Number,
            observer: "__initializeChunking"
          },
          targetFramerate: {
            type: Number,
            value: 20
          },
          _targetFrameTime: {
            type: Number,
            computed: "__computeFrameTime(targetFramerate)"
          }
        };
      }
    }, {
      key: "observers",
      get: function get() {
        return ["__itemsChanged(items.*)"];
      }
    }]), babelHelpers.createClass(t, [{
      key: "disconnectedCallback",
      value: function value() {
        babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this.__isDetached = !0;

        for (var e = 0; e < this.__instances.length; e++) {
          this.__detachInstance(e);
        }
      }
    }, {
      key: "connectedCallback",
      value: function value() {
        if (babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this.style.display = "none", this.__isDetached) {
          this.__isDetached = !1;

          for (var e = this.parentNode, i = 0; i < this.__instances.length; i++) {
            this.__attachInstance(i, e);
          }
        }
      }
    }, {
      key: "__ensureTemplatized",
      value: function value() {
        var e = this;

        if (!this.__ctor) {
          var t = this.template = this.querySelector("template");

          if (!t) {
            var i = new MutationObserver(function () {
              if (!e.querySelector("template")) throw new Error("dom-repeat requires a <template> child");
              i.disconnect(), e.__render();
            });
            return i.observe(this, {
              childList: !0
            }), !1;
          }

          var n = {};
          n[this.as] = !0, n[this.indexAs] = !0, n[this.itemsIndexAs] = !0, this.__ctor = k(t, this, {
            mutableData: this.mutableData,
            parentModel: !0,
            instanceProps: n,
            forwardHostProp: function forwardHostProp(e, t) {
              for (var i, n = this.__instances, r = 0; r < n.length && (i = n[r]); r++) {
                i.forwardHostProp(e, t);
              }
            },
            notifyInstanceProp: function notifyInstanceProp(e, t, i) {
              if (Object(P.e)(this.as, t)) {
                var n = e[this.itemsIndexAs];
                t == this.as && (this.items[n] = i);
                var r = Object(P.i)(this.as, "items." + n, t);
                this.notifyPath(r, i);
              }
            }
          });
        }

        return !0;
      }
    }, {
      key: "__getMethodHost",
      value: function value() {
        return this.__dataHost._methodHost || this.__dataHost;
      }
    }, {
      key: "__functionFromPropertyValue",
      value: function value(e) {
        if ("string" === typeof e) {
          var t = e,
              i = this.__getMethodHost();

          return function () {
            return i[t].apply(i, arguments);
          };
        }

        return e;
      }
    }, {
      key: "__sortChanged",
      value: function value(e) {
        this.__sortFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render);
      }
    }, {
      key: "__filterChanged",
      value: function value(e) {
        this.__filterFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render);
      }
    }, {
      key: "__computeFrameTime",
      value: function value(e) {
        return Math.ceil(1e3 / e);
      }
    }, {
      key: "__initializeChunking",
      value: function value() {
        this.initialCount && (this.__limit = this.initialCount, this.__chunkCount = this.initialCount, this.__lastChunkTime = performance.now());
      }
    }, {
      key: "__tryRenderChunk",
      value: function value() {
        this.items && this.__limit < this.items.length && this.__debounceRender(this.__requestRenderChunk);
      }
    }, {
      key: "__requestRenderChunk",
      value: function value() {
        var e = this;
        requestAnimationFrame(function () {
          return e.__renderChunk();
        });
      }
    }, {
      key: "__renderChunk",
      value: function value() {
        var e = performance.now(),
            t = this._targetFrameTime / (e - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * t) || 1, this.__limit += this.__chunkCount, this.__lastChunkTime = e, this.__debounceRender(this.__render);
      }
    }, {
      key: "__observeChanged",
      value: function value() {
        this.__observePaths = this.observe && this.observe.replace(".*", ".").split(" ");
      }
    }, {
      key: "__itemsChanged",
      value: function value(e) {
        this.items && !Array.isArray(this.items) && console.warn("dom-repeat expected array for `items`, found", this.items), this.__handleItemPath(e.path, e.value) || (this.__initializeChunking(), this.__debounceRender(this.__render));
      }
    }, {
      key: "__handleObservedPaths",
      value: function value(e) {
        if (this.__sortFn || this.__filterFn) if (e) {
          if (this.__observePaths) for (var t = this.__observePaths, i = 0; i < t.length; i++) {
            0 === e.indexOf(t[i]) && this.__debounceRender(this.__render, this.delay);
          }
        } else this.__debounceRender(this.__render, this.delay);
      }
    }, {
      key: "__debounceRender",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.__renderDebouncer = T.a.debounce(this.__renderDebouncer, t > 0 ? H.c.after(t) : H.b, e.bind(this)), Object(S.a)(this.__renderDebouncer);
      }
    }, {
      key: "render",
      value: function value() {
        this.__debounceRender(this.__render), Object(S.b)();
      }
    }, {
      key: "__render",
      value: function value() {
        this.__ensureTemplatized() && (this.__applyFullRefresh(), this.__pool.length = 0, this._setRenderedItemCount(this.__instances.length), this.dispatchEvent(new CustomEvent("dom-change", {
          bubbles: !0,
          composed: !0
        })), this.__tryRenderChunk());
      }
    }, {
      key: "__applyFullRefresh",
      value: function value() {
        for (var e = this, t = this.items || [], i = new Array(t.length), n = 0; n < t.length; n++) {
          i[n] = n;
        }

        this.__filterFn && (i = i.filter(function (i, n, r) {
          return e.__filterFn(t[i], n, r);
        })), this.__sortFn && i.sort(function (i, n) {
          return e.__sortFn(t[i], t[n]);
        });

        for (var r = this.__itemsIdxToInstIdx = {}, a = 0, s = Math.min(i.length, this.__limit); a < s; a++) {
          var o = this.__instances[a],
              l = i[a],
              u = t[l];
          r[l] = a, o ? (o._setPendingProperty(this.as, u), o._setPendingProperty(this.indexAs, a), o._setPendingProperty(this.itemsIndexAs, l), o._flushProperties()) : this.__insertInstance(u, a, l);
        }

        for (var c = this.__instances.length - 1; c >= a; c--) {
          this.__detachAndRemoveInstance(c);
        }
      }
    }, {
      key: "__detachInstance",
      value: function value(e) {
        for (var t = this.__instances[e], i = 0; i < t.children.length; i++) {
          var n = t.children[i];
          t.root.appendChild(n);
        }

        return t;
      }
    }, {
      key: "__attachInstance",
      value: function value(e, t) {
        var i = this.__instances[e];
        t.insertBefore(i.root, this);
      }
    }, {
      key: "__detachAndRemoveInstance",
      value: function value(e) {
        var t = this.__detachInstance(e);

        t && this.__pool.push(t), this.__instances.splice(e, 1);
      }
    }, {
      key: "__stampInstance",
      value: function value(e, t, i) {
        var n = {};
        return n[this.as] = e, n[this.indexAs] = t, n[this.itemsIndexAs] = i, new this.__ctor(n);
      }
    }, {
      key: "__insertInstance",
      value: function value(e, t, i) {
        var n = this.__pool.pop();

        n ? (n._setPendingProperty(this.as, e), n._setPendingProperty(this.indexAs, t), n._setPendingProperty(this.itemsIndexAs, i), n._flushProperties()) : n = this.__stampInstance(e, t, i);
        var r = this.__instances[t + 1],
            a = r ? r.children[0] : this;
        return this.parentNode.insertBefore(n.root, a), this.__instances[t] = n, n;
      }
    }, {
      key: "_showHideChildren",
      value: function value(e) {
        for (var t = 0; t < this.__instances.length; t++) {
          this.__instances[t]._showHideChildren(e);
        }
      }
    }, {
      key: "__handleItemPath",
      value: function value(e, t) {
        var i = e.slice(6),
            n = i.indexOf("."),
            r = n < 0 ? i : i.substring(0, n);

        if (r == parseInt(r, 10)) {
          var a = n < 0 ? "" : i.substring(n + 1);

          this.__handleObservedPaths(a);

          var s = this.__itemsIdxToInstIdx[r],
              o = this.__instances[s];

          if (o) {
            var l = this.as + (a ? "." + a : "");
            o._setPendingPropertyOrPath(l, t, !1, !0), o._flushProperties();
          }

          return !0;
        }
      }
    }, {
      key: "itemForElement",
      value: function value(e) {
        var t = this.modelForElement(e);
        return t && t[this.as];
      }
    }, {
      key: "indexForElement",
      value: function value(e) {
        var t = this.modelForElement(e);
        return t && t[this.indexAs];
      }
    }, {
      key: "modelForElement",
      value: function value(e) {
        return C(this.template, e);
      }
    }]), t;
  }(l(x.a));

  customElements.define(N.is, N);

  var A = function (e) {
    function t() {
      var e;
      return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__renderDebouncer = null, e.__invalidProps = null, e.__instance = null, e._lastIf = !1, e.__ctor = null, e.__hideTemplateChildren__ = !1, e;
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "dom-if";
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          if: {
            type: Boolean,
            observer: "__debounceRender"
          },
          restamp: {
            type: Boolean,
            observer: "__debounceRender"
          }
        };
      }
    }]), babelHelpers.createClass(t, [{
      key: "__debounceRender",
      value: function value() {
        var e = this;
        this.__renderDebouncer = T.a.debounce(this.__renderDebouncer, H.b, function () {
          return e.__render();
        }), Object(S.a)(this.__renderDebouncer);
      }
    }, {
      key: "disconnectedCallback",
      value: function value() {
        babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this.parentNode && (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE || this.parentNode.host) || this.__teardownInstance();
      }
    }, {
      key: "connectedCallback",
      value: function value() {
        babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this.style.display = "none", this.if && this.__debounceRender();
      }
    }, {
      key: "render",
      value: function value() {
        Object(S.b)();
      }
    }, {
      key: "__render",
      value: function value() {
        if (this.if) {
          if (!this.__ensureInstance()) return;

          this._showHideChildren();
        } else this.restamp && this.__teardownInstance();

        !this.restamp && this.__instance && this._showHideChildren(), this.if != this._lastIf && (this.dispatchEvent(new CustomEvent("dom-change", {
          bubbles: !0,
          composed: !0
        })), this._lastIf = this.if);
      }
    }, {
      key: "__ensureInstance",
      value: function value() {
        var e = this,
            t = this.parentNode;

        if (t) {
          if (!this.__ctor) {
            var i = this.querySelector("template");

            if (!i) {
              var n = new MutationObserver(function () {
                if (!e.querySelector("template")) throw new Error("dom-if requires a <template> child");
                n.disconnect(), e.__render();
              });
              return n.observe(this, {
                childList: !0
              }), !1;
            }

            this.__ctor = k(i, this, {
              mutableData: !0,
              forwardHostProp: function forwardHostProp(e, t) {
                this.__instance && (this.if ? this.__instance.forwardHostProp(e, t) : (this.__invalidProps = this.__invalidProps || Object.create(null), this.__invalidProps[Object(P.g)(e)] = !0));
              }
            });
          }

          if (this.__instance) {
            this.__syncHostProperties();

            var r = this.__instance.children;
            if (r && r.length) if (this.previousSibling !== r[r.length - 1]) for (var a, s = 0; s < r.length && (a = r[s]); s++) {
              t.insertBefore(a, this);
            }
          } else this.__instance = new this.__ctor(), t.insertBefore(this.__instance.root, this);
        }

        return !0;
      }
    }, {
      key: "__syncHostProperties",
      value: function value() {
        var e = this.__invalidProps;

        if (e) {
          for (var t in e) {
            this.__instance._setPendingProperty(t, this.__dataHost[t]);
          }

          this.__invalidProps = null, this.__instance._flushProperties();
        }
      }
    }, {
      key: "__teardownInstance",
      value: function value() {
        if (this.__instance) {
          var e = this.__instance.children;

          if (e && e.length) {
            var t = e[0].parentNode;
            if (t) for (var i, n = 0; n < e.length && (i = e[n]); n++) {
              t.removeChild(i);
            }
          }

          this.__instance = null, this.__invalidProps = null;
        }
      }
    }, {
      key: "_showHideChildren",
      value: function value() {
        var e = this.__hideTemplateChildren__ || !this.if;
        this.__instance && this.__instance._showHideChildren(e);
      }
    }]), t;
  }(x.a);

  customElements.define(A.is, A);

  var E = i(41),
      z = i(24),
      D = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "array-selector";
      }
    }]), t;
  }(Object(a.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__lastItems = null, e.__lastMulti = null, e.__selectedMap = null, e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
        key: "properties",
        get: function get() {
          return {
            items: {
              type: Array
            },
            multi: {
              type: Boolean,
              value: !1
            },
            selected: {
              type: Object,
              notify: !0
            },
            selectedItem: {
              type: Object,
              notify: !0
            },
            toggle: {
              type: Boolean,
              value: !1
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["__updateSelection(multi, items.*)"];
        }
      }]), babelHelpers.createClass(t, [{
        key: "__updateSelection",
        value: function value(e, t) {
          var i = t.path;

          if ("items" == i) {
            var n = t.base || [],
                r = this.__lastItems;

            if (e !== this.__lastMulti && this.clearSelection(), r) {
              var a = Object(E.a)(n, r);

              this.__applySplices(a);
            }

            this.__lastItems = n, this.__lastMulti = e;
          } else if ("items.splices" == t.path) this.__applySplices(t.value.indexSplices);else {
            var s = i.slice("items.".length),
                o = parseInt(s, 10);
            s.indexOf(".") < 0 && s == o && this.__deselectChangedIdx(o);
          }
        }
      }, {
        key: "__applySplices",
        value: function value(e) {
          for (var t = this, i = this.__selectedMap, n = function n(_n) {
            var r = e[_n];
            i.forEach(function (e, t) {
              e < r.index || (e >= r.index + r.removed.length ? i.set(t, e + r.addedCount - r.removed.length) : i.set(t, -1));
            });

            for (var a = 0; a < r.addedCount; a++) {
              var s = r.index + a;
              i.has(t.items[s]) && i.set(t.items[s], s);
            }
          }, r = 0; r < e.length; r++) {
            n(r);
          }

          this.__updateLinks();

          var a = 0;
          i.forEach(function (e, n) {
            e < 0 ? (t.multi ? t.splice("selected", a, 1) : t.selected = t.selectedItem = null, i.delete(n)) : a++;
          });
        }
      }, {
        key: "__updateLinks",
        value: function value() {
          var e = this;

          if (this.__dataLinkedPaths = {}, this.multi) {
            var t = 0;

            this.__selectedMap.forEach(function (i) {
              i >= 0 && e.linkPaths("items." + i, "selected." + t++);
            });
          } else this.__selectedMap.forEach(function (t) {
            e.linkPaths("selected", "items." + t), e.linkPaths("selectedItem", "items." + t);
          });
        }
      }, {
        key: "clearSelection",
        value: function value() {
          this.__dataLinkedPaths = {}, this.__selectedMap = new Map(), this.selected = this.multi ? [] : null, this.selectedItem = null;
        }
      }, {
        key: "isSelected",
        value: function value(e) {
          return this.__selectedMap.has(e);
        }
      }, {
        key: "isIndexSelected",
        value: function value(e) {
          return this.isSelected(this.items[e]);
        }
      }, {
        key: "__deselectChangedIdx",
        value: function value(e) {
          var t = this,
              i = this.__selectedIndexForItemIndex(e);

          if (i >= 0) {
            var n = 0;

            this.__selectedMap.forEach(function (e, r) {
              i == n++ && t.deselect(r);
            });
          }
        }
      }, {
        key: "__selectedIndexForItemIndex",
        value: function value(e) {
          var t = this.__dataLinkedPaths["items." + e];
          if (t) return parseInt(t.slice("selected.".length), 10);
        }
      }, {
        key: "deselect",
        value: function value(e) {
          var t,
              i = this.__selectedMap.get(e);

          i >= 0 && (this.__selectedMap.delete(e), this.multi && (t = this.__selectedIndexForItemIndex(i)), this.__updateLinks(), this.multi ? this.splice("selected", t, 1) : this.selected = this.selectedItem = null);
        }
      }, {
        key: "deselectIndex",
        value: function value(e) {
          this.deselect(this.items[e]);
        }
      }, {
        key: "select",
        value: function value(e) {
          this.selectIndex(this.items.indexOf(e));
        }
      }, {
        key: "selectIndex",
        value: function value(e) {
          var t = this.items[e];
          this.isSelected(t) ? this.toggle && this.deselectIndex(e) : (this.multi || this.__selectedMap.clear(), this.__selectedMap.set(t, e), this.__updateLinks(), this.multi ? this.push("selected", t) : this.selected = this.selectedItem = t);
        }
      }]), t;
    }(Object(z.a)(e));
  })(x.a));

  customElements.define(D.is, D);
  var I = i(47),
      j = i(21),
      L = i(16),
      M = new I.a();
  window.ShadyCSS || (window.ShadyCSS = {
    prepareTemplate: function prepareTemplate(e, t, i) {},
    prepareTemplateDom: function prepareTemplateDom(e, t) {},
    prepareTemplateStyles: function prepareTemplateStyles(e, t, i) {},
    styleSubtree: function styleSubtree(e, t) {
      M.processStyles(), Object(j.c)(e, t);
    },
    styleElement: function styleElement(e) {
      M.processStyles();
    },
    styleDocument: function styleDocument(e) {
      M.processStyles(), Object(j.c)(document.body, e);
    },
    getComputedStyleValue: function getComputedStyleValue(e, t) {
      return Object(j.b)(e, t);
    },
    flushCustomStyles: function flushCustomStyles() {},
    nativeCss: L.a,
    nativeShadow: L.b
  }), window.ShadyCSS.CustomStyleInterface = M;

  var R = i(32),
      F = window.ShadyCSS.CustomStyleInterface,
      $ = function (e) {
    function t() {
      var e;
      return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._style = null, F.addCustomStyle(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "getStyle",
      value: function value() {
        if (this._style) return this._style;
        var e = this.querySelector("style");
        if (!e) return null;
        this._style = e;
        var t = e.getAttribute("include");
        return t && (e.removeAttribute("include"), e.textContent = Object(R.a)(t) + e.textContent), this.ownerDocument !== window.document && window.document.head.appendChild(this), this._style;
      }
    }]), t;
  }(babelHelpers.wrapNativeSuper(HTMLElement));

  window.customElements.define("custom-style", $), o._mutablePropertyChange;
  Boolean, i(0);
  i.d(t, "a", function () {
    return B;
  });
  var B = Object(n.a)(HTMLElement).prototype;
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return r;
  });
  var n = i(45),
      r = (i(5), function e(t) {
    var i;
    return i = "function" === typeof t ? t : e.Class(t), customElements.define(i.is, i), i;
  });
  r.Class = n.a;
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return o;
  }), i.d(t, "b", function () {
    return l;
  }), i.d(t, "a", function () {
    return u;
  });
  i(5);
  var n,
      r,
      a = /(url\()([^)]*)(\))/g,
      s = /(^\/)|(^#)|(^[\w-\d]*:)/;

  function o(e, t) {
    if (e && s.test(e)) return e;

    if (void 0 === n) {
      n = !1;

      try {
        var i = new URL("b", "http://a");
        i.pathname = "c%20d", n = "http://a/c%20d" === i.href;
      } catch (e) {}
    }

    return t || (t = document.baseURI || window.location.href), n ? new URL(e, t).href : (r || ((r = document.implementation.createHTMLDocument("temp")).base = r.createElement("base"), r.head.appendChild(r.base), r.anchor = r.createElement("a"), r.body.appendChild(r.anchor)), r.base.href = t, r.anchor.href = e, r.anchor.href || e);
  }

  function l(e, t) {
    return e.replace(a, function (e, i, n, r) {
      return i + "'" + o(n.replace(/["']/g, ""), t) + "'" + r;
    });
  }

  function u(e) {
    return e.substring(0, e.lastIndexOf("/") + 1);
  }
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return s;
  });
  var n = i(1),
      r = i(0);

  function a() {
    var e = babelHelpers.taggedTemplateLiteral(['<button class="icon reset" invisible$="[[!valueIsSet]]" hidden$="[[disabled]]" on-click="reset"><svg viewBox="0 0 24 24"><g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></g></svg></button>']);
    return a = function a() {
      return e;
    }, e;
  }

  Object(r.a)(a());
  var s = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._validate = e._defaultValidate.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._isSet = e._defaultIsSet.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_attachDom",
        value: function value(e) {
          return this.shadowRoot || (this.attachShadow({
            mode: "open",
            delegatesFocus: !0
          }), this.shadowRoot.appendChild(e)), this.shadowRoot;
        }
      }, {
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this._ensureAttribute("tabindex", 0);
        }
      }, {
        key: "_defaultIsSet",
        value: function value(e) {
          return !(void 0 === e || null === e || "" === e);
        }
      }, {
        key: "_defaultValidate",
        value: function value(e, t, i) {
          return Boolean(!i || e(t));
        }
      }, {
        key: "_computeInvalid",
        value: function value(e, t, i, n) {
          this._setInvalid(!e(t, i, n));
        }
      }, {
        key: "_computeValueIsSet",
        value: function value(e, t) {
          this._setValueIsSet(e(t));
        }
      }, {
        key: "_valueChanged",
        value: function value(e) {
          !1 === this._isSet(e) && this.reset(e);
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          !1 === this._isSet(e) && (this.default = void 0), !1 === this._isSet(this.value) && (this.value = this.default);
        }
      }, {
        key: "_createReflectPropertyToValueObserver",
        value: function value(e) {
          void 0 !== e && (this._createPropertyObserver(e, "_reflectPropertyToValue"), this._createPropertyObserver("value", "_reflectValueToProperty"), this._isSet(this[e]) ? this.set("value", this[e]) : this._isSet(this.value) && this.set(e, this.value));
        }
      }, {
        key: "_reflectPropertyToValue",
        value: function value() {
          this.set("value", this[this.propertyForValue]);
        }
      }, {
        key: "_reflectValueToProperty",
        value: function value(e) {
          this.set(this.propertyForValue, e);
        }
      }, {
        key: "validate",
        value: function value() {
          return !this.invalid;
        }
      }, {
        key: "reset",
        value: function value(e) {
          this._isSet(this.default) ? this.value = this.default : this.value = e;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            name: {
              type: String
            },
            title: {
              type: String,
              reflectToAttribute: !0
            },
            propertyForValue: {
              type: String,
              observer: "_createReflectPropertyToValueObserver"
            },
            value: {
              type: Object,
              notify: !0,
              observer: "_valueChanged"
            },
            default: {
              type: Object,
              observer: "_defaultChanged"
            },
            disabled: {
              type: Boolean,
              reflectToAttribute: !0,
              notify: !0
            },
            invalid: {
              type: Boolean,
              readOnly: !0,
              reflectToAttribute: !0,
              notify: !0
            },
            required: {
              type: Boolean,
              reflectToAttribute: !0,
              notify: !0,
              value: !1
            },
            valueIsSet: {
              type: Boolean,
              readOnly: !0,
              value: !1
            },
            _isSet: {
              type: Function
            },
            _validate: {
              type: Function
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computeValueIsSet(_isSet, value)", "_computeInvalid(_validate, _isSet, value, required)"];
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "b", function () {
    return r;
  }), i.d(t, "a", function () {
    return s;
  });
  var n,
      r = !(window.ShadyDOM && window.ShadyDOM.inUse);

  function a(e) {
    n = (!e || !e.shimcssproperties) && (r || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)")));
  }

  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? n = window.ShadyCSS.nativeCss : window.ShadyCSS ? (a(window.ShadyCSS), window.ShadyCSS = void 0) : a(window.WebComponents && window.WebComponents.flags);
  var s = n;
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return n;
  }), i.d(t, "b", function () {
    return r;
  }), i.d(t, "a", function () {
    return a;
  });
  var n = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      r = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      a = /@media\s(.*)/;
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return c;
  });
  var n = i(1),
      r = i(10),
      a = i(0);

  function s() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g></svg>']);
    return s = function s() {
      return e;
    }, e;
  }

  function o() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g></svg>']);
    return o = function o() {
      return e;
    }, e;
  }

  function l() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g></svg>']);
    return l = function l() {
      return e;
    }, e;
  }

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g></svg>']);
    return u = function u() {
      return e;
    }, e;
  }

  var c = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__increm = e.__increm.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.__incremProp = e.__incremProp.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._stopActiveIncremJob = e._stopActiveIncremJob.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._checkKeycodeSwitch = e._checkKeycodeSwitch.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this.addEventListener("blur", this._stopActiveIncremJob, {
            passive: !0
          }), this.addEventListener("contextmenu", this._stopActiveIncremJob, {
            passive: !0
          }), this._addSwitchListener();
        }
      }, {
        key: "disconnectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this.removeEventListener("blur", this._stopActiveIncremJob, {
            passive: !0
          }), this.removeEventListener("contextmenu", this._stopActiveIncremJob, {
            passive: !0
          }), this._removeSwitchListener();
        }
      }, {
        key: "_addSwitchListener",
        value: function value() {
          var e = this;
          this._removeSwitchListener(), setTimeout(function () {
            var t = e.root.querySelectorAll(".switch");
            t && Array.prototype.forEach.call(t, function (t) {
              Object(r.b)(t, "down", e.__increm, !1), Object(r.b)(t, "up", e._stopActiveIncremJob, !1), t.addEventListener("keydown", e._checkKeycodeSwitch, {
                passive: !0
              }), t.addEventListener("keyup", e._stopActiveIncremJob, {
                passive: !0
              });
            });
          }, 0);
        }
      }, {
        key: "_removeSwitchListener",
        value: function value() {
          var e = this;
          this.root.querySelectorAll(".switch") && Array.prototype.forEach(function (t) {
            Object(r.c)(t, "down", e.__increm, !1), Object(r.c)(t, "up", e._stopActiveIncremJob, !1), t.removeEventListener("keydown", e._checkKeycodeSwitch, {
              passive: !0
            }), t.removeEventListener("keyup", e._stopActiveIncremJob, {
              passive: !0
            });
          });
        }
      }, {
        key: "_checkKeycodeSwitch",
        value: function value(e) {
          !e || 13 !== e.keyCode && 32 !== e.keyCode ? this._stopActiveIncremJob() : (this.__increm(e, !0), e.stopPropagation());
        }
      }, {
        key: "__getEventTarget",
        value: function value(e, t) {
          if (void 0 !== e) if (e.path) {
            for (var i = 0; i < e.path.length; i++) {
              if (e.path[i].classList.contains(t)) return e.path[i];
            }
          } else if (e.target && e.target.classList.contains(t)) return e.target;
        }
      }, {
        key: "__increm",
        value: function value(e, t) {
          this._stopActiveIncremJob();

          var i = this.__getEventTarget(e, this._switchClassSelector);

          if (void 0 !== i) {
            var n = i.getAttribute("prop"),
                r = i.hasAttribute("invert") ? -1 : 1,
                a = (+i.getAttribute("step") || 1) * r;
            if (i.setAttribute("active", ""), this._activeSwitch = i, isNaN(this[n])) this[n] = this._getDefaultForProp(n);else if (0 === this[n] && a / this[n] < 0) {
              var s = this[n];
              this[n] = void 0, this[n] = -s;
            } else this.__incremProp(n, a);
            t || (this._activeDelayJob = setTimeout(function () {
              this._activeIncremJob = setInterval(this.__incremProp.bind(this, n, a), +this.dwellTime || 15);
            }.bind(this), this.dwellDelay));
          }
        }
      }, {
        key: "__incremProp",
        value: function value(e, t) {
          this[e] += t;
        }
      }, {
        key: "_getDefaultForProp",
        value: function value(e) {
          return 0;
        }
      }, {
        key: "_stopActiveIncremJob",
        value: function value() {
          this._activeDelayJob && (clearTimeout(this._activeDelayJob), this._activeDelayJob = null), this._activeIncremJob && (clearInterval(this._activeIncremJob), this._activeIncremJob = null), this._activeSwitch && (this._activeSwitch.removeAttribute("active"), this._activeSwitch = null);
        }
      }, {
        key: "_dwellTimeChanged",
        value: function value(e) {
          isNaN(e) ? this.dwellTime = 50 : e < 15 && (this.dwellTime = 15);
        }
      }, {
        key: "_dwellDelayChanged",
        value: function value(e) {
          isNaN(e) ? this.dwellTime = 500 : e < 15 && (this.dwellTime = 15);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            dwellTime: {
              type: Number,
              value: 50,
              observer: "_dwellTimeChanged"
            },
            dwellDelay: {
              type: Number,
              value: 500,
              observer: "_dwellTimeChanged"
            },
            _switchClassSelector: {
              type: String,
              value: "switch"
            }
          };
        }
      }, {
        key: "_iconStepUpTemplate",
        get: function get() {
          return Object(a.a)(u());
        }
      }, {
        key: "_iconStepDownTemplate",
        get: function get() {
          return Object(a.a)(l());
        }
      }, {
        key: "_iconStepLeftTemplate",
        get: function get() {
          return Object(a.a)(o());
        }
      }, {
        key: "_iconStepRightTemplate",
        get: function get() {
          return Object(a.a)(s());
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return n;
  });
  i(5), i(1), i(8);

  var n = function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this._asyncModule = null, this._callback = null, this._timer = null;
    }

    return babelHelpers.createClass(e, [{
      key: "setConfig",
      value: function value(e, t) {
        var i = this;
        this._asyncModule = e, this._callback = t, this._timer = this._asyncModule.run(function () {
          i._timer = null, i._callback();
        });
      }
    }, {
      key: "cancel",
      value: function value() {
        this.isActive() && (this._asyncModule.cancel(this._timer), this._timer = null);
      }
    }, {
      key: "flush",
      value: function value() {
        this.isActive() && (this.cancel(), this._callback());
      }
    }, {
      key: "isActive",
      value: function value() {
        return null != this._timer;
      }
    }], [{
      key: "debounce",
      value: function value(t, i, n) {
        return t instanceof e ? t.cancel() : t = new e(), t.setConfig(i, n), t;
      }
    }]), e;
  }();
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return r;
  }), i.d(t, "b", function () {
    return s;
  });
  i(5), i(19);

  var n = [],
      r = function r(e) {
    n.push(e);
  };

  function a() {
    for (var e = Boolean(n.length); n.length;) {
      try {
        n.shift().flush();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    return e;
  }

  var s = function s() {
    var e, t;

    do {
      e = window.ShadyDOM && ShadyDOM.flush(), window.ShadyCSS && window.ShadyCSS.ScopingShim && window.ShadyCSS.ScopingShim.flush(), t = a();
    } while (e || t);
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return r;
  }), i.d(t, "b", function () {
    return a;
  }), i.d(t, "a", function () {
    return s;
  });
  var n = i(17);

  function r(e, t) {
    for (var i in t) {
      null === i ? e.style.removeProperty(i) : e.style.setProperty(i, t[i]);
    }
  }

  function a(e, t) {
    var i = window.getComputedStyle(e).getPropertyValue(t);
    return i ? i.trim() : "";
  }

  function s(e) {
    var t = n.b.test(e) || n.c.test(e);
    return n.b.lastIndex = 0, n.c.lastIndex = 0, t;
  }
}, function (e, t, i) {
  "use strict";

  i.d(t, "b", function () {
    return s;
  }), i.d(t, "a", function () {
    return o;
  });
  i(5);
  var n = {},
      r = /-[a-z]/g,
      a = /([A-Z])/g;

  function s(e) {
    return n[e] || (n[e] = e.indexOf("-") < 0 ? e : e.replace(r, function (e) {
      return e[1].toUpperCase();
    }));
  }

  function o(e) {
    return n[e] || (n[e] = e.replace(a, "-$1").toLowerCase());
  }
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(["<style>:host{display:inline-flex;box-sizing:content-box}:host([hidden]),[hidden]{display:none!important}:host([disabled]),[disabled]{pointer-events:none}:focus,:host(:focus){outline:0}integer-input,number-input,text-input{--input-color:var(--inner-input-color, inherit);--input-background:var(--inner-input-background, transparent);--input-border-width:var(--inner-input-border-width, thin);--input-border-color:var(--inner-input-border-color, transparent);--input-border-style:var(--inner-input-border-style, dotted);--input-padding:var(--inner-input-padding, 0);--input-border-radius:var(--inner-input-border-radius, 0.1em);--input-focus-color:var(--inner-input-focus-color, inherit);--input-focus-background:var(--inner-input-focus-background, rgba(0,0,0,0.1));--input-focus-border-color:var(--inner-input-focus-border-color, rgba(0,0,0,0.15));--input-focus-border-style:var(--inner-input-focus-border-style, dotted);--input-invalid-color:var(--inner-input-invalid-color, inherit);--input-invalid-background:var(--inner-input-invalid-background, rgba(255,255,255,0.5));--input-invalid-border-style:var(--inner-input-invalid-border-style, dotted);--input-invalid-border-color:var(--inner-input-invalid-border-color, rgba(255,0,0,0.25))}button,select{-moz-appearance:none;-webkit-appearance:none;appearance:none;color:inherit;background:0 0;border:var(--inner-input-border-width,thin) solid transparent;box-sizing:border-box}#input,input{display:inline-flex;flex-direction:row;align-items:baseline;color:inherit;min-width:inherit;max-width:inherit;box-sizing:content-box;border-style:var(--input-border-style,dotted);border-width:var(--input-border-width,thin);border-color:var(--input-border-color,rgba(0,0,0,.25))}#input,button,input,select{font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;outline:0;line-height:normal;cursor:var(--input-cursor,initial);text-align:var(--input-align,center);transition-duration:var(--input-transition-duration,250ms);transition-timing-function:var(--input-transition-timing-function,cubic-bezier(.6,1,.2,1));transition-property:var(--input-transition-property,background-color);padding:var(--input-padding,.25em);color:var(--input-color,inherit);background-color:var(--input-background,transparent);border-radius:var(--input-border-radius,.25em);@apply --input-style;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-backface-visibility:hidden;-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0);margin:0;letter-spacing:inherit}select{color:var(--inner-input-color,inherit);background-color:var(--inner-input-background,transparent);border-width:var(--inner-input-border-width,thin);border-color:var(--inner-input-border-color,transparent);border-style:var(--inner-input-border-style,dotted);border-radius:var(--inner-input-border-radius,.1em)}#input:focus,#input:hover,:host(:focus) #input,:host(:hover) #input,input:focus,input:hover{color:var(--input-focus-color,inherit);background-color:var(--input-focus-background,rgba(0,0,0,.1));border-style:var(--input-focus-border-style,dotted);border-color:var(--input-focus-border-color,rgba(0,0,0,.5));border-width:var(--input-border-width,thin);outline:0;@apply --input-focus;}button:focus,button:hover,select:focus,select:hover{color:var(--inner-input-focus-color,inherit);background-color:var(--inner-input-focus-background,rgba(0,0,0,.1));border-style:var(--inner-input-focus-border-style,dotted);border-color:var(--inner-input-focus-border-color,rgba(0,0,0,.2));border-width:var(--inner-input-border-width,thin);outline:0;@apply --input-focus;}#input:invalid,#input:invalid:focus,#input:invalid:hover,:host([invalid]) #input,:host([invalid]:focus) #input,:host([invalid]:hover) #input{color:var(--input-invalid-color,inherit);background-color:var(--input-invalid-background,rgba(255,0,0,.25));border-width:var(--input-border-width,thin);border-style:var(--input-invalid-border-style,dotted);border-color:var(--input-invalid-border-color,rgba(255,0,0,.25));@apply --input-invalid;}:host([disabled]) #input{color:var(--input-disabled-color,inherit);background-color:var(--input-disabled-background,transparent);font-style:var(--input-disabled-font-style,oblique);opacity:var(--input-disabled-opacity,.75);@apply --input-disabled;--input-placeholder-opacity:1;pointer-events:none}#input .reset{display:block;cursor:pointer;border-width:var(--inner-input-border-width,thin);border-style:var(--inner-input-border-style,dotted);border-color:var(--inner-input-border-color,transparent);box-sizing:content-box;opacity:0;color:inherit;background-color:transparent;transition-property:background,opacity;height:1em;width:1em;border-radius:50%;padding:.15em;margin:0 2px;align-self:center}#input .reset>svg{height:100%;width:100%;fill:currentColor}#input .reset:focus,#input .reset:hover{border-style:var(--inner-input-focus-border-style,dotted);outline:0}#input .reset:focus,#input:hover .reset{opacity:.5}#input .reset:hover{opacity:1;color:var(--inner-input-focus-color,inherit);background-color:var(--inner-input-focus-background,rgba(0,0,0,.1))}#input .reset:focus{border-color:var(--inner-input-focus-border-color,var(--inner-input-focus-background,rgba(0,0,0,.2)))}:host([hide-reset-button]) #input .reset{display:none}:-moz-placeholder,::-moz-placeholder,::-webkit-input-placeholder,::placeholder{color:currentColor;opacity:var(--input-placeholder-opacity,.5);text-align:var(--input-placeholder-align,center)}:-ms-input-placeholder{color:currentColor!important;opacity:var(--input-placeholder-opacity,.5)!important}::-ms-input-placeholder{color:currentColor!important;opacity:var(--input-placeholder-opacity,.5)!important}::placeholder{@apply --input-placeholder;}:host([invalid]) :-moz-placeholder,:host([invalid]) ::-moz-placeholder,:host([invalid]) ::-webkit-input-placeholder,:host([invalid]) ::placeholder{color:var(--input-invalid-color,currentColor)}:host([invalid]) :-ms-input-placeholder{color:var(--input-invalid-color,currentColor)!important}::-moz-selection{color:inherit;background-color:transparent}:hover::-moz-selection{color:var(--input-selection-color,inherit);background-color:var(--input-selection-background,rgba(255,255,255,.5))}::selection{color:inherit;background-color:transparent}:hover::selection{color:var(--input-selection-color,inherit);background-color:var(--input-selection-background,rgba(255,255,255,.5))}::-moz-focus-inner{border-width:0;border-style:none;padding:0}::-moz-focusring{border-width:0;border-style:none;color:transparent!important;text-shadow:0 0 0 var(--input-focus-color,#000)}select:focus::-ms-value{background:0 0}::-ms-clear,::-ms-expand{display:none}::-webkit-clear-button,::-webkit-input-edit-text,::-webkit-search-cancel-button{color:currentColor;align-self:center;vertical-align:middle;cursor:pointer}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}::-webkit-clear-button,::-webkit-search-cancel-button{-webkit-appearance:none;height:1em;width:1em;opacity:0;transition-property:opacity;transition-duration:var(--input-transition-duration,250ms);transition-timing-function:var(--input-transition-timing-function,cubic-bezier(.6,1,.2,1));background-image:url(data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22height%3A100%25%3B%22%3E%3Cg%3E%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)}input:hover ::-webkit-clear-button,input:hover ::-webkit-search-cancel-button{opacity:.5}::-webkit-clear-button:hover,::-webkit-search-cancel-button:hover{opacity:1}:host([hide-reset-button]) ::-webkit-clear-button,:host([hide-reset-button]) ::-webkit-search-cancel-button{display:none}[invisible]{visibility:hidden}</style>"]);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
}, function (e, t, i) {
  "use strict";

  i(5);
  var n = i(6),
      r = i(1),
      a = i(32),
      s = i(14),
      o = i(29),
      l = i(25),
      u = i(40);
  var c = Object(r.a)(function (e) {
    function t(e) {
      var t = Object.getPrototypeOf(e);
      return t.prototype instanceof n ? t : null;
    }

    function i(e) {
      if (!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", e))) {
        var t = null;

        if (e.hasOwnProperty(JSCompiler_renameProperty("properties", e))) {
          var i = e.properties;
          i && (t = function (e) {
            var t = {};

            for (var i in e) {
              var n = e[i];
              t[i] = "function" === typeof n ? {
                type: n
              } : n;
            }

            return t;
          }(i));
        }

        e.__ownProperties = t;
      }

      return e.__ownProperties;
    }

    var n = function (e) {
      function n() {
        return babelHelpers.classCallCheck(this, n), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(n).apply(this, arguments));
      }

      return babelHelpers.inherits(n, e), babelHelpers.createClass(n, [{
        key: "_initializeProperties",
        value: function value() {
          this.constructor.finalize(), babelHelpers.get(babelHelpers.getPrototypeOf(n.prototype), "_initializeProperties", this).call(this);
        }
      }, {
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(n.prototype), "connectedCallback", this) && babelHelpers.get(babelHelpers.getPrototypeOf(n.prototype), "connectedCallback", this).call(this), this._enableProperties();
        }
      }, {
        key: "disconnectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(n.prototype), "disconnectedCallback", this) && babelHelpers.get(babelHelpers.getPrototypeOf(n.prototype), "disconnectedCallback", this).call(this);
        }
      }], [{
        key: "finalize",
        value: function value() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))) {
            var e = t(this);
            e && e.finalize(), this.__finalized = !0, this._finalizeClass();
          }
        }
      }, {
        key: "_finalizeClass",
        value: function value() {
          var e = i(this);
          e && this.createProperties(e);
        }
      }, {
        key: "typeForProperty",
        value: function value(e) {
          var t = this._properties[e];
          return t && t.type;
        }
      }, {
        key: "observedAttributes",
        get: function get() {
          var e = this,
              t = this._properties;
          return t ? Object.keys(t).map(function (t) {
            return e.attributeNameForProperty(t);
          }) : [];
        }
      }, {
        key: "_properties",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__properties", this))) {
            var e = t(this);
            this.__properties = Object.assign({}, e && e._properties, i(this));
          }

          return this.__properties;
        }
      }]), n;
    }(Object(u.a)(e));

    return n;
  });
  i.d(t, "a", function () {
    return d;
  });
  var d = Object(r.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._template, e._importPath, e.rootPath, e.importPath, e.root, e.$, e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
        key: "_finalizeClass",
        value: function value() {
          var e;
          babelHelpers.get(babelHelpers.getPrototypeOf(t), "_finalizeClass", this).call(this), this.hasOwnProperty(JSCompiler_renameProperty("is", this)) && this.is && (e = this.prototype, h.push(e));
          var i,
              n = ((i = this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers", i)) || (i.__ownObservers = i.hasOwnProperty(JSCompiler_renameProperty("observers", i)) ? i.observers : null), i.__ownObservers);
          n && this.createObservers(n, this._properties);
          var r = this.template;
          r && ("string" === typeof r ? (console.error("template getter must return HTMLTemplateElement"), r = null) : r = r.cloneNode(!0)), this.prototype._template = r;
        }
      }, {
        key: "createProperties",
        value: function value(e) {
          for (var t in e) {
            i = this.prototype, n = t, r = e[t], a = e, r.computed && (r.readOnly = !0), r.computed && !i._hasReadOnlyEffect(n) && i._createComputedProperty(n, r.computed, a), r.readOnly && !i._hasReadOnlyEffect(n) && i._createReadOnlyProperty(n, !r.computed), r.reflectToAttribute && !i._hasReflectEffect(n) && i._createReflectedProperty(n), r.notify && !i._hasNotifyEffect(n) && i._createNotifyingProperty(n), r.observer && i._createPropertyObserver(n, r.observer, a[r.observer]), i._addPropertyToAttributeMap(n);
          }

          var i, n, r, a;
        }
      }, {
        key: "createObservers",
        value: function value(e, t) {
          for (var i = this.prototype, n = 0; n < e.length; n++) {
            i._createMethodObserver(e[n], t);
          }
        }
      }, {
        key: "polymerElementVersion",
        get: function get() {
          return "3.0.5";
        }
      }, {
        key: "template",
        get: function get() {
          return this.hasOwnProperty(JSCompiler_renameProperty("_template", this)) || (this._template = this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template", this.prototype)) ? this.prototype._template : function (e) {
            var t = null;
            if (e && (!n.e || n.a) && (t = o.a.import(e, "template"), n.e && !t)) throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(e));
            return t;
          }(this.is) || Object.getPrototypeOf(this.prototype).constructor.template), this._template;
        },
        set: function set(e) {
          this._template = e;
        }
      }, {
        key: "importPath",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("_importPath", this))) {
            var e = this.importMeta;
            if (e) this._importPath = Object(s.a)(e.url);else {
              var t = o.a.import(this.is);
              this._importPath = t && t.assetpath || Object.getPrototypeOf(this.prototype).constructor.importPath;
            }
          }

          return this._importPath;
        }
      }]), babelHelpers.createClass(t, [{
        key: "_initializeProperties",
        value: function value() {
          0, this.constructor.finalize(), this.constructor._finalizeTemplate(this.localName), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_initializeProperties", this).call(this), this.rootPath = n.c, this.importPath = this.constructor.importPath;

          var e = function (e) {
            if (!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults", e))) {
              e.__propertyDefaults = null;
              var t = e._properties;

              for (var i in t) {
                var n = t[i];
                "value" in n && (e.__propertyDefaults = e.__propertyDefaults || {}, e.__propertyDefaults[i] = n);
              }
            }

            return e.__propertyDefaults;
          }(this.constructor);

          if (e) for (var i in e) {
            var r = e[i];

            if (!this.hasOwnProperty(i)) {
              var a = "function" == typeof r.value ? r.value.call(this) : r.value;
              this._hasAccessor(i) ? this._setPendingProperty(i, a, !0) : this[i] = a;
            }
          }
        }
      }, {
        key: "connectedCallback",
        value: function value() {
          window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this);
        }
      }, {
        key: "ready",
        value: function value() {
          this._template && (this.root = this._stampTemplate(this._template), this.$ = this.root.$), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "ready", this).call(this);
        }
      }, {
        key: "_readyClients",
        value: function value() {
          this._template && (this.root = this._attachDom(this.root)), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_readyClients", this).call(this);
        }
      }, {
        key: "_attachDom",
        value: function value(e) {
          if (this.attachShadow) return e ? (this.shadowRoot || this.attachShadow({
            mode: "open"
          }), this.shadowRoot.appendChild(e), this.shadowRoot) : null;
          throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.");
        }
      }, {
        key: "updateStyles",
        value: function value(e) {
          window.ShadyCSS && window.ShadyCSS.styleSubtree(this, e);
        }
      }, {
        key: "resolveUrl",
        value: function value(e, t) {
          return !t && this.importPath && (t = Object(s.c)(this.importPath)), Object(s.c)(e, t);
        }
      }], [{
        key: "_processStyleText",
        value: function value(e, t) {
          return Object(s.b)(e, t);
        }
      }, {
        key: "_finalizeTemplate",
        value: function value(e) {
          var t = this.prototype._template;

          if (t && !t.__polymerFinalized) {
            t.__polymerFinalized = !0;
            var i = this.importPath;
            !function (e, t, i, n) {
              for (var r = t.content.querySelectorAll("style"), s = Object(a.c)(t), o = Object(a.b)(i), l = t.content.firstElementChild, u = 0; u < o.length; u++) {
                var c = o[u];
                c.textContent = e._processStyleText(c.textContent, n), t.content.insertBefore(c, l);
              }

              for (var d = 0, h = 0; h < s.length; h++) {
                var p = s[h],
                    f = r[d];
                f !== p ? (p = p.cloneNode(!0), f.parentNode.insertBefore(p, f)) : d++, p.textContent = e._processStyleText(p.textContent, n);
              }

              window.ShadyCSS && window.ShadyCSS.prepareTemplate(t, i);
            }(this, t, e, i ? Object(s.c)(i) : ""), this.prototype._bindTemplate(t);
          }
        }
      }, {
        key: "_parseTemplateContent",
        value: function value(e, i, n) {
          return i.dynamicFns = i.dynamicFns || this._properties, babelHelpers.get(babelHelpers.getPrototypeOf(t), "_parseTemplateContent", this).call(this, e, i, n);
        }
      }]), t;
    }(c(Object(l.a)(e)));
  }),
      h = [];
}, function (e, t, i) {
  "use strict";

  i(5);
  var n = i(1),
      r = i(3),
      a = i(22),
      s = i(39),
      o = {
    "dom-if": !0,
    "dom-repeat": !0
  };

  function l(e) {
    var t = e.getAttribute("is");

    if (t && o[t]) {
      var i = e;

      for (i.removeAttribute("is"), e = i.ownerDocument.createElement(t), i.parentNode.replaceChild(e, i), e.appendChild(i); i.attributes.length;) {
        e.setAttribute(i.attributes[0].name, i.attributes[0].value), i.removeAttribute(i.attributes[0].name);
      }
    }

    return e;
  }

  function u(e, t) {
    var i = t.parentInfo && u(e, t.parentInfo);
    if (!i) return e;

    for (var n = i.firstChild, r = 0; n; n = n.nextSibling) {
      if (t.parentIndex === r++) return n;
    }
  }

  function c(e, t, i, n) {
    n.id && (t[n.id] = i);
  }

  function d(e, t, i) {
    if (i.events && i.events.length) for (var n, r = 0, a = i.events; r < a.length && (n = a[r]); r++) {
      e._addMethodEventListenerToNode(t, n.name, n.value, e);
    }
  }

  function h(e, t, i) {
    i.templateInfo && (t._templateInfo = i.templateInfo);
  }

  var p = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_stampTemplate",
        value: function value(e) {
          e && !e.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e);

          var t = this.constructor._parseTemplate(e),
              i = t.nodeInfoList,
              n = t.content || e.content,
              r = document.importNode(n, !0);

          r.__noInsertionPoint = !t.hasInsertionPoint;
          var a = r.nodeList = new Array(i.length);
          r.$ = {};

          for (var s, o = 0, l = i.length; o < l && (s = i[o]); o++) {
            var p = a[o] = u(r, s);
            c(0, r.$, p, s), h(0, p, s), d(this, p, s);
          }

          return r = r;
        }
      }, {
        key: "_addMethodEventListenerToNode",
        value: function value(e, t, i, n) {
          var r = function (e, t, i) {
            return e = e._methodHost || e, function (t) {
              e[i] ? e[i](t, t.detail) : console.warn("listener method `" + i + "` not defined");
            };
          }(n = n || e, 0, i);

          return this._addEventListenerToNode(e, t, r), r;
        }
      }, {
        key: "_addEventListenerToNode",
        value: function value(e, t, i) {
          e.addEventListener(t, i);
        }
      }, {
        key: "_removeEventListenerFromNode",
        value: function value(e, t, i) {
          e.removeEventListener(t, i);
        }
      }], [{
        key: "_parseTemplate",
        value: function value(e, t) {
          if (!e._templateInfo) {
            var i = e._templateInfo = {};
            i.nodeInfoList = [], i.stripWhiteSpace = t && t.stripWhiteSpace || e.hasAttribute("strip-whitespace"), this._parseTemplateContent(e, i, {
              parent: null
            });
          }

          return e._templateInfo;
        }
      }, {
        key: "_parseTemplateContent",
        value: function value(e, t, i) {
          return this._parseTemplateNode(e.content, t, i);
        }
      }, {
        key: "_parseTemplateNode",
        value: function value(e, t, i) {
          var n,
              r = e;
          return "template" != r.localName || r.hasAttribute("preserve-content") ? "slot" === r.localName && (t.hasInsertionPoint = !0) : n = this._parseTemplateNestedTemplate(r, t, i) || n, r.firstChild && (n = this._parseTemplateChildNodes(r, t, i) || n), r.hasAttributes && r.hasAttributes() && (n = this._parseTemplateNodeAttributes(r, t, i) || n), n;
        }
      }, {
        key: "_parseTemplateChildNodes",
        value: function value(e, t, i) {
          if ("script" !== e.localName && "style" !== e.localName) for (var n, r = e.firstChild, a = 0; r; r = n) {
            if ("template" == r.localName && (r = l(r)), n = r.nextSibling, r.nodeType === Node.TEXT_NODE) {
              for (var s = n; s && s.nodeType === Node.TEXT_NODE;) {
                r.textContent += s.textContent, n = s.nextSibling, e.removeChild(s), s = n;
              }

              if (t.stripWhiteSpace && !r.textContent.trim()) {
                e.removeChild(r);
                continue;
              }
            }

            var o = {
              parentIndex: a,
              parentInfo: i
            };
            this._parseTemplateNode(r, t, o) && (o.infoIndex = t.nodeInfoList.push(o) - 1), r.parentNode && a++;
          }
        }
      }, {
        key: "_parseTemplateNestedTemplate",
        value: function value(e, t, i) {
          var n = this._parseTemplate(e, t);

          return (n.content = e.content.ownerDocument.createDocumentFragment()).appendChild(e.content), i.templateInfo = n, !0;
        }
      }, {
        key: "_parseTemplateNodeAttributes",
        value: function value(e, t, i) {
          for (var n, r = !1, a = Array.from(e.attributes), s = a.length - 1; n = a[s]; s--) {
            r = this._parseTemplateNodeAttribute(e, t, i, n.name, n.value) || r;
          }

          return r;
        }
      }, {
        key: "_parseTemplateNodeAttribute",
        value: function value(e, t, i, n, r) {
          return "on-" === n.slice(0, 3) ? (e.removeAttribute(n), i.events = i.events || [], i.events.push({
            name: n.slice(3),
            value: r
          }), !0) : "id" === n && (i.id = r, !0);
        }
      }, {
        key: "_contentForTemplate",
        value: function value(e) {
          var t = e._templateInfo;
          return t && t.content || e.content;
        }
      }]), t;
    }(e);
  }),
      f = i(6);
  i.d(t, "a", function () {
    return B;
  });
  var b = 0,
      m = {
    COMPUTE: "__computeEffects",
    REFLECT: "__reflectEffects",
    NOTIFY: "__notifyEffects",
    PROPAGATE: "__propagateEffects",
    OBSERVE: "__observeEffects",
    READ_ONLY: "__readOnly"
  },
      v = /[A-Z]/;

  function y(e, t) {
    var i = e[t];

    if (i) {
      if (!e.hasOwnProperty(t)) for (var n in i = e[t] = Object.create(e[t])) {
        for (var r = i[n], a = i[n] = Array(r.length), s = 0; s < r.length; s++) {
          a[s] = r[s];
        }
      }
    } else i = e[t] = {};

    return i;
  }

  function g(e, t, i, n, r, a) {
    if (t) {
      var s = !1,
          o = b++;

      for (var l in i) {
        _(e, t, o, l, i, n, r, a) && (s = !0);
      }

      return s;
    }

    return !1;
  }

  function _(e, t, i, n, a, s, o, l) {
    var u = !1,
        c = t[o ? Object(r.g)(n) : n];
    if (c) for (var d, h = 0, p = c.length; h < p && (d = c[h]); h++) {
      d.info && d.info.lastRun === i || o && !k(n, d.trigger) || (d.info && (d.info.lastRun = i), d.fn(e, n, a, s, d.info, o, l), u = !0);
    }
    return u;
  }

  function k(e, t) {
    if (t) {
      var i = t.name;
      return i == e || t.structured && Object(r.b)(i, e) || t.wildcard && Object(r.c)(i, e);
    }

    return !0;
  }

  function C(e, t, i, n, r) {
    var a = "string" === typeof r.method ? e[r.method] : r.method,
        s = r.property;
    a ? a.call(e, e.__data[s], n[s]) : r.dynamicFn || console.warn("observer method `" + r.method + "` not defined");
  }

  function w(e, t, i) {
    var n = Object(r.g)(t);
    return n !== t && (O(e, Object(a.a)(n) + "-changed", i[t], t), !0);
  }

  function O(e, t, i, n) {
    var r = {
      value: i,
      queueProperty: !0
    };
    n && (r.path = n), e.dispatchEvent(new CustomEvent(t, {
      detail: r
    }));
  }

  function x(e, t, i, n, a, s) {
    var o = (s ? Object(r.g)(t) : t) != t ? t : null,
        l = o ? Object(r.a)(e, o) : e.__data[t];
    o && void 0 === l && (l = i[t]), O(e, a.eventName, l, o);
  }

  function T(e, t, i, n, r) {
    var a = e.__data[t];
    f.d && (a = Object(f.d)(a, r.attrName, "attribute", e)), e._propertyToAttribute(t, r.attrName, a);
  }

  function S(e, t, i, n, r) {
    var a = D(e, t, i, n, r),
        s = r.methodInfo;
    e.__dataHasAccessor && e.__dataHasAccessor[s] ? e._setPendingProperty(s, a, !0) : e[s] = a;
  }

  function P(e, t, i, n, r, s, o) {
    i.bindings = i.bindings || [];
    var l = {
      kind: n,
      target: r,
      parts: s,
      literal: o,
      isCompound: 1 !== s.length
    };

    if (i.bindings.push(l), function (e) {
      return Boolean(e.target) && "attribute" != e.kind && "text" != e.kind && !e.isCompound && "{" === e.parts[0].mode;
    }(l)) {
      var u = l.parts[0],
          c = u.event,
          d = u.negate;
      l.listenerEvent = c || Object(a.a)(r) + "-changed", l.listenerNegate = d;
    }

    for (var h = t.nodeInfoList.length, p = 0; p < l.parts.length; p++) {
      var f = l.parts[p];
      f.compoundIndex = p, H(e, t, l, f, h);
    }
  }

  function H(e, t, i, n, r) {
    if (!n.literal) if ("attribute" === i.kind && "-" === i.target[0]) console.warn("Cannot set attribute " + i.target + ' because "-" is not a valid attribute starting character');else for (var a = n.dependencies, s = {
      index: r,
      binding: i,
      part: n,
      evaluator: e
    }, o = 0; o < a.length; o++) {
      var l = a[o];
      "string" == typeof l && ((l = R(l)).wildcard = !0), e._addTemplatePropertyEffect(t, l.rootProperty, {
        fn: N,
        info: s,
        trigger: l
      });
    }
  }

  function N(e, t, i, n, a, s, o) {
    var l = o[a.index],
        u = a.binding,
        c = a.part;

    if (s && c.source && t.length > c.source.length && "property" == u.kind && !u.isCompound && l.__isPropertyEffectsClient && l.__dataHasAccessor && l.__dataHasAccessor[u.target]) {
      var d = i[t];
      t = Object(r.i)(c.source, u.target, t), l._setPendingPropertyOrPath(t, d, !1, !0) && e._enqueueClient(l);
    } else {
      !function (e, t, i, n, r) {
        r = function (e, t, i, n) {
          if (i.isCompound) {
            var r = e.__dataCompoundStorage[i.target];
            r[n.compoundIndex] = t, t = r.join("");
          }

          return "attribute" !== i.kind && ("textContent" !== i.target && ("value" !== i.target || "input" !== e.localName && "textarea" !== e.localName) || (t = void 0 == t ? "" : t)), t;
        }(t, r, i, n), f.d && (r = Object(f.d)(r, i.target, i.kind, t));
        if ("attribute" == i.kind) e._valueToNodeAttribute(t, r, i.target);else {
          var a = i.target;
          t.__isPropertyEffectsClient && t.__dataHasAccessor && t.__dataHasAccessor[a] ? t[m.READ_ONLY] && t[m.READ_ONLY][a] || t._setPendingProperty(a, r) && e._enqueueClient(t) : e._setUnmanagedPropertyToNode(t, a, r);
        }
      }(e, l, u, c, a.evaluator._evaluateBinding(e, c, t, i, n, s));
    }
  }

  function A(e, t) {
    if (t.isCompound) {
      for (var i = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}), n = t.parts, r = new Array(n.length), a = 0; a < n.length; a++) {
        r[a] = n[a].literal;
      }

      var s = t.target;
      i[s] = r, t.literal && "property" == t.kind && (e[s] = t.literal);
    }
  }

  function E(e, t, i) {
    if (i.listenerEvent) {
      var n = i.parts[0];
      e.addEventListener(i.listenerEvent, function (e) {
        !function (e, t, i, n, a) {
          var s,
              o = e.detail,
              l = o && o.path;
          l ? (n = Object(r.i)(i, n, l), s = o && o.value) : s = e.currentTarget[i], s = a ? !s : s, t[m.READ_ONLY] && t[m.READ_ONLY][n] || !t._setPendingPropertyOrPath(n, s, !0, Boolean(l)) || o && o.queueProperty || t._invalidateProperties();
        }(e, t, i.target, n.source, n.negate);
      });
    }
  }

  function z(e, t, i, n, r, a) {
    a = t.static || a && ("object" !== babelHelpers.typeof(a) || a[t.methodName]);

    for (var s, o = {
      methodName: t.methodName,
      args: t.args,
      methodInfo: r,
      dynamicFn: a
    }, l = 0; l < t.args.length && (s = t.args[l]); l++) {
      s.literal || e._addPropertyEffect(s.rootProperty, i, {
        fn: n,
        info: o,
        trigger: s
      });
    }

    a && e._addPropertyEffect(t.methodName, i, {
      fn: n,
      info: o
    });
  }

  function D(e, t, i, n, r) {
    var a = e._methodHost || e,
        s = a[r.methodName];

    if (s) {
      var o = e._marshalArgs(r.args, t, i);

      return s.apply(a, o);
    }

    r.dynamicFn || console.warn("method `" + r.methodName + "` not defined");
  }

  var I = [],
      j = new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})", "g");

  function L(e) {
    for (var t = "", i = 0; i < e.length; i++) {
      t += e[i].literal || "";
    }

    return t;
  }

  function M(e) {
    var t = e.match(/([^\s]+?)\(([\s\S]*)\)/);

    if (t) {
      var i = {
        methodName: t[1],
        static: !0,
        args: I
      };
      return t[2].trim() ? function (e, t) {
        return t.args = e.map(function (e) {
          var i = R(e);
          return i.literal || (t.static = !1), i;
        }, this), t;
      }(t[2].replace(/\\,/g, "&comma;").split(","), i) : i;
    }

    return null;
  }

  function R(e) {
    var t = e.trim().replace(/&comma;/g, ",").replace(/\\(.)/g, "$1"),
        i = {
      name: t,
      value: "",
      literal: !1
    },
        n = t[0];

    switch ("-" === n && (n = t[1]), n >= "0" && n <= "9" && (n = "#"), n) {
      case "'":
      case '"':
        i.value = t.slice(1, -1), i.literal = !0;
        break;

      case "#":
        i.value = Number(t), i.literal = !0;
    }

    return i.literal || (i.rootProperty = Object(r.g)(t), i.structured = Object(r.d)(t), i.structured && (i.wildcard = ".*" == t.slice(-2), i.wildcard && (i.name = t.slice(0, -2)))), i;
  }

  function F(e, t, i, n) {
    var r = i + ".splices";
    e.notifyPath(r, {
      indexSplices: n
    }), e.notifyPath(i + ".length", t.length), e.__data[r] = {
      indexSplices: null
    };
  }

  function $(e, t, i, n, r, a) {
    F(e, t, i, [{
      index: n,
      addedCount: r,
      removed: a,
      object: t,
      type: "splice"
    }]);
  }

  var B = Object(n.a)(function (e) {
    var t = function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__isPropertyEffectsClient = !0, e.__dataCounter = 0, e.__dataClientsReady, e.__dataPendingClients, e.__dataToNotify, e.__dataLinkedPaths, e.__dataHasPaths, e.__dataCompoundStorage, e.__dataHost, e.__dataTemp, e.__dataClientsInitialized, e.__data, e.__dataPending, e.__dataOld, e.__computeEffects, e.__reflectEffects, e.__notifyEffects, e.__propagateEffects, e.__observeEffects, e.__readOnly, e.__templateInfo, e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_initializeProperties",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_initializeProperties", this).call(this), V.registerHost(this), this.__dataClientsReady = !1, this.__dataPendingClients = null, this.__dataToNotify = null, this.__dataLinkedPaths = null, this.__dataHasPaths = !1, this.__dataCompoundStorage = this.__dataCompoundStorage || null, this.__dataHost = this.__dataHost || null, this.__dataTemp = {}, this.__dataClientsInitialized = !1;
        }
      }, {
        key: "_initializeProtoProperties",
        value: function value(e) {
          this.__data = Object.create(e), this.__dataPending = Object.create(e), this.__dataOld = {};
        }
      }, {
        key: "_initializeInstanceProperties",
        value: function value(e) {
          var t = this[m.READ_ONLY];

          for (var i in e) {
            t && t[i] || (this.__dataPending = this.__dataPending || {}, this.__dataOld = this.__dataOld || {}, this.__data[i] = this.__dataPending[i] = e[i]);
          }
        }
      }, {
        key: "_addPropertyEffect",
        value: function value(e, t, i) {
          this._createPropertyAccessor(e, t == m.READ_ONLY);

          var n = y(this, t)[e];
          n || (n = this[t][e] = []), n.push(i);
        }
      }, {
        key: "_removePropertyEffect",
        value: function value(e, t, i) {
          var n = y(this, t)[e],
              r = n.indexOf(i);
          r >= 0 && n.splice(r, 1);
        }
      }, {
        key: "_hasPropertyEffect",
        value: function value(e, t) {
          var i = this[t];
          return Boolean(i && i[e]);
        }
      }, {
        key: "_hasReadOnlyEffect",
        value: function value(e) {
          return this._hasPropertyEffect(e, m.READ_ONLY);
        }
      }, {
        key: "_hasNotifyEffect",
        value: function value(e) {
          return this._hasPropertyEffect(e, m.NOTIFY);
        }
      }, {
        key: "_hasReflectEffect",
        value: function value(e) {
          return this._hasPropertyEffect(e, m.REFLECT);
        }
      }, {
        key: "_hasComputedEffect",
        value: function value(e) {
          return this._hasPropertyEffect(e, m.COMPUTE);
        }
      }, {
        key: "_setPendingPropertyOrPath",
        value: function value(e, i, n, a) {
          if (a || Object(r.g)(Array.isArray(e) ? e[0] : e) !== e) {
            if (!a) {
              var s = Object(r.a)(this, e);
              if (!(e = Object(r.h)(this, e, i)) || !babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_shouldPropertyChange", this).call(this, e, i, s)) return !1;
            }

            if (this.__dataHasPaths = !0, this._setPendingProperty(e, i, n)) return function (e, t, i) {
              var n,
                  a = e.__dataLinkedPaths;
              if (a) for (var s in a) {
                var o = a[s];
                Object(r.c)(s, t) ? (n = Object(r.i)(s, o, t), e._setPendingPropertyOrPath(n, i, !0, !0)) : Object(r.c)(o, t) && (n = Object(r.i)(o, s, t), e._setPendingPropertyOrPath(n, i, !0, !0));
              }
            }(this, e, i), !0;
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[e]) return this._setPendingProperty(e, i, n);
            this[e] = i;
          }

          return !1;
        }
      }, {
        key: "_setUnmanagedPropertyToNode",
        value: function value(e, t, i) {
          i === e[t] && "object" != babelHelpers.typeof(i) || (e[t] = i);
        }
      }, {
        key: "_setPendingProperty",
        value: function value(e, t, i) {
          var n = this.__dataHasPaths && Object(r.d)(e),
              a = n ? this.__dataTemp : this.__data;
          return !!this._shouldPropertyChange(e, t, a[e]) && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), e in this.__dataOld || (this.__dataOld[e] = this.__data[e]), n ? this.__dataTemp[e] = t : this.__data[e] = t, this.__dataPending[e] = t, (n || this[m.NOTIFY] && this[m.NOTIFY][e]) && (this.__dataToNotify = this.__dataToNotify || {}, this.__dataToNotify[e] = i), !0);
        }
      }, {
        key: "_setProperty",
        value: function value(e, t) {
          this._setPendingProperty(e, t, !0) && this._invalidateProperties();
        }
      }, {
        key: "_invalidateProperties",
        value: function value() {
          this.__dataReady && this._flushProperties();
        }
      }, {
        key: "_enqueueClient",
        value: function value(e) {
          this.__dataPendingClients = this.__dataPendingClients || [], e !== this && this.__dataPendingClients.push(e);
        }
      }, {
        key: "_flushProperties",
        value: function value() {
          this.__dataCounter++, babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_flushProperties", this).call(this), this.__dataCounter--;
        }
      }, {
        key: "_flushClients",
        value: function value() {
          this.__dataClientsReady ? this.__enableOrFlushClients() : (this.__dataClientsReady = !0, this._readyClients(), this.__dataReady = !0);
        }
      }, {
        key: "__enableOrFlushClients",
        value: function value() {
          var e = this.__dataPendingClients;

          if (e) {
            this.__dataPendingClients = null;

            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              i.__dataEnabled ? i.__dataPending && i._flushProperties() : i._enableProperties();
            }
          }
        }
      }, {
        key: "_readyClients",
        value: function value() {
          this.__enableOrFlushClients();
        }
      }, {
        key: "setProperties",
        value: function value(e, t) {
          for (var i in e) {
            !t && this[m.READ_ONLY] && this[m.READ_ONLY][i] || this._setPendingPropertyOrPath(i, e[i], !0);
          }

          this._invalidateProperties();
        }
      }, {
        key: "ready",
        value: function value() {
          this._flushProperties(), this.__dataClientsReady || this._flushClients(), this.__dataPending && this._flushProperties();
        }
      }, {
        key: "_propertiesChanged",
        value: function value(e, t, i) {
          var n = this.__dataHasPaths;
          this.__dataHasPaths = !1, function (e, t, i, n) {
            var r = e[m.COMPUTE];
            if (r) for (var a = t; g(e, r, a, i, n);) {
              Object.assign(i, e.__dataOld), Object.assign(t, e.__dataPending), a = e.__dataPending, e.__dataPending = null;
            }
          }(this, t, i, n);
          var r = this.__dataToNotify;
          this.__dataToNotify = null, this._propagatePropertyChanges(t, i, n), this._flushClients(), g(this, this[m.REFLECT], t, i, n), g(this, this[m.OBSERVE], t, i, n), r && function (e, t, i, n, r) {
            var a,
                s,
                o = e[m.NOTIFY],
                l = b++;

            for (var u in t) {
              t[u] && (o && _(e, o, l, u, i, n, r) ? a = !0 : r && w(e, u, i) && (a = !0));
            }

            a && (s = e.__dataHost) && s._invalidateProperties && s._invalidateProperties();
          }(this, r, t, i, n), 1 == this.__dataCounter && (this.__dataTemp = {});
        }
      }, {
        key: "_propagatePropertyChanges",
        value: function value(e, t, i) {
          this[m.PROPAGATE] && g(this, this[m.PROPAGATE], e, t, i);

          for (var n = this.__templateInfo; n;) {
            g(this, n.propertyEffects, e, t, i, n.nodeList), n = n.nextTemplateInfo;
          }
        }
      }, {
        key: "linkPaths",
        value: function value(e, t) {
          e = Object(r.f)(e), t = Object(r.f)(t), this.__dataLinkedPaths = this.__dataLinkedPaths || {}, this.__dataLinkedPaths[e] = t;
        }
      }, {
        key: "unlinkPaths",
        value: function value(e) {
          e = Object(r.f)(e), this.__dataLinkedPaths && delete this.__dataLinkedPaths[e];
        }
      }, {
        key: "notifySplices",
        value: function value(e, t) {
          var i = {
            path: ""
          };
          F(this, Object(r.a)(this, e, i), i.path, t);
        }
      }, {
        key: "get",
        value: function value(e, t) {
          return Object(r.a)(t || this, e);
        }
      }, {
        key: "set",
        value: function value(e, t, i) {
          i ? Object(r.h)(i, e, t) : this[m.READ_ONLY] && this[m.READ_ONLY][e] || this._setPendingPropertyOrPath(e, t, !0) && this._invalidateProperties();
        }
      }, {
        key: "push",
        value: function value(e) {
          for (var t = {
            path: ""
          }, i = Object(r.a)(this, e, t), n = i.length, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) {
            s[o - 1] = arguments[o];
          }

          var l = i.push.apply(i, s);
          return s.length && $(this, i, t.path, n, s.length, []), l;
        }
      }, {
        key: "pop",
        value: function value(e) {
          var t = {
            path: ""
          },
              i = Object(r.a)(this, e, t),
              n = Boolean(i.length),
              a = i.pop();
          return n && $(this, i, t.path, i.length, 0, [a]), a;
        }
      }, {
        key: "splice",
        value: function value(e, t, i) {
          for (var n = arguments.length, a = new Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) {
            a[s - 3] = arguments[s];
          }

          var o,
              l = {
            path: ""
          },
              u = Object(r.a)(this, e, l);
          return t < 0 ? t = u.length - Math.floor(-t) : t && (t = Math.floor(t)), o = 2 === arguments.length ? u.splice(t) : u.splice.apply(u, [t, i].concat(a)), (a.length || o.length) && $(this, u, l.path, t, a.length, o), o;
        }
      }, {
        key: "shift",
        value: function value(e) {
          var t = {
            path: ""
          },
              i = Object(r.a)(this, e, t),
              n = Boolean(i.length),
              a = i.shift();
          return n && $(this, i, t.path, 0, 0, [a]), a;
        }
      }, {
        key: "unshift",
        value: function value(e) {
          for (var t = {
            path: ""
          }, i = Object(r.a)(this, e, t), n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) {
            a[s - 1] = arguments[s];
          }

          var o = i.unshift.apply(i, a);
          return a.length && $(this, i, t.path, 0, a.length, []), o;
        }
      }, {
        key: "notifyPath",
        value: function value(e, t) {
          var i;

          if (1 == arguments.length) {
            var n = {
              path: ""
            };
            t = Object(r.a)(this, e, n), i = n.path;
          } else i = Array.isArray(e) ? Object(r.f)(e) : e;

          this._setPendingPropertyOrPath(i, t, !0, !0) && this._invalidateProperties();
        }
      }, {
        key: "_createReadOnlyProperty",
        value: function value(e, t) {
          var i;
          this._addPropertyEffect(e, m.READ_ONLY), t && (this["_set" + (i = e, i[0].toUpperCase() + i.substring(1))] = function (t) {
            this._setProperty(e, t);
          });
        }
      }, {
        key: "_createPropertyObserver",
        value: function value(e, t, i) {
          var n = {
            property: e,
            method: t,
            dynamicFn: Boolean(i)
          };
          this._addPropertyEffect(e, m.OBSERVE, {
            fn: C,
            info: n,
            trigger: {
              name: e
            }
          }), i && this._addPropertyEffect(t, m.OBSERVE, {
            fn: C,
            info: n,
            trigger: {
              name: t
            }
          });
        }
      }, {
        key: "_createMethodObserver",
        value: function value(e, t) {
          var i = M(e);
          if (!i) throw new Error("Malformed observer expression '" + e + "'");
          z(this, i, m.OBSERVE, D, null, t);
        }
      }, {
        key: "_createNotifyingProperty",
        value: function value(e) {
          this._addPropertyEffect(e, m.NOTIFY, {
            fn: x,
            info: {
              eventName: Object(a.a)(e) + "-changed",
              property: e
            }
          });
        }
      }, {
        key: "_createReflectedProperty",
        value: function value(e) {
          var t = this.constructor.attributeNameForProperty(e);
          "-" === t[0] ? console.warn("Property " + e + " cannot be reflected to attribute " + t + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.') : this._addPropertyEffect(e, m.REFLECT, {
            fn: T,
            info: {
              attrName: t
            }
          });
        }
      }, {
        key: "_createComputedProperty",
        value: function value(e, t, i) {
          var n = M(t);
          if (!n) throw new Error("Malformed computed expression '" + t + "'");
          z(this, n, m.COMPUTE, S, e, i);
        }
      }, {
        key: "_marshalArgs",
        value: function value(e, t, i) {
          for (var n = this.__data, a = [], s = 0, o = e.length; s < o; s++) {
            var l = e[s],
                u = l.name,
                c = void 0;

            if (l.literal ? c = l.value : l.structured ? void 0 === (c = Object(r.a)(n, u)) && (c = i[u]) : c = n[u], l.wildcard) {
              var d = 0 === u.indexOf(t + "."),
                  h = 0 === t.indexOf(u) && !d;
              a[s] = {
                path: h ? t : u,
                value: h ? i[t] : c,
                base: c
              };
            } else a[s] = c;
          }

          return a;
        }
      }, {
        key: "_bindTemplate",
        value: function value(e, t) {
          var i = this.constructor._parseTemplate(e),
              n = this.__templateInfo == i;

          if (!n) for (var r in i.propertyEffects) {
            this._createPropertyAccessor(r);
          }

          if (t && ((i = Object.create(i)).wasPreBound = n, !n && this.__templateInfo)) {
            var a = this.__templateInfoLast || this.__templateInfo;
            return this.__templateInfoLast = a.nextTemplateInfo = i, i.previousTemplateInfo = a, i;
          }

          return this.__templateInfo = i;
        }
      }, {
        key: "_stampTemplate",
        value: function value(e) {
          V.beginHosting(this);
          var i = babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_stampTemplate", this).call(this, e);
          V.endHosting(this);

          var n = this._bindTemplate(e, !0);

          if (n.nodeList = i.nodeList, !n.wasPreBound) for (var r = n.childNodes = [], a = i.firstChild; a; a = a.nextSibling) {
            r.push(a);
          }
          return i.templateInfo = n, function (e, t) {
            var i = t.nodeList,
                n = t.nodeInfoList;
            if (n.length) for (var r = 0; r < n.length; r++) {
              var a = n[r],
                  s = i[r],
                  o = a.bindings;
              if (o) for (var l = 0; l < o.length; l++) {
                var u = o[l];
                A(s, u), E(s, e, u);
              }
              s.__dataHost = e;
            }
          }(this, n), this.__dataReady && g(this, n.propertyEffects, this.__data, null, !1, n.nodeList), i;
        }
      }, {
        key: "_removeBoundDom",
        value: function value(e) {
          var t = e.templateInfo;
          t.previousTemplateInfo && (t.previousTemplateInfo.nextTemplateInfo = t.nextTemplateInfo), t.nextTemplateInfo && (t.nextTemplateInfo.previousTemplateInfo = t.previousTemplateInfo), this.__templateInfoLast == t && (this.__templateInfoLast = t.previousTemplateInfo), t.previousTemplateInfo = t.nextTemplateInfo = null;

          for (var i = t.childNodes, n = 0; n < i.length; n++) {
            var r = i[n];
            r.parentNode.removeChild(r);
          }
        }
      }, {
        key: "PROPERTY_EFFECT_TYPES",
        get: function get() {
          return m;
        }
      }], [{
        key: "addPropertyEffect",
        value: function value(e, t, i) {
          this.prototype._addPropertyEffect(e, t, i);
        }
      }, {
        key: "createPropertyObserver",
        value: function value(e, t, i) {
          this.prototype._createPropertyObserver(e, t, i);
        }
      }, {
        key: "createMethodObserver",
        value: function value(e, t) {
          this.prototype._createMethodObserver(e, t);
        }
      }, {
        key: "createNotifyingProperty",
        value: function value(e) {
          this.prototype._createNotifyingProperty(e);
        }
      }, {
        key: "createReadOnlyProperty",
        value: function value(e, t) {
          this.prototype._createReadOnlyProperty(e, t);
        }
      }, {
        key: "createReflectedProperty",
        value: function value(e) {
          this.prototype._createReflectedProperty(e);
        }
      }, {
        key: "createComputedProperty",
        value: function value(e, t, i) {
          this.prototype._createComputedProperty(e, t, i);
        }
      }, {
        key: "bindTemplate",
        value: function value(e) {
          return this.prototype._bindTemplate(e);
        }
      }, {
        key: "_addTemplatePropertyEffect",
        value: function value(e, t, i) {
          (e.hostProps = e.hostProps || {})[t] = !0;
          var n = e.propertyEffects = e.propertyEffects || {};
          (n[t] = n[t] || []).push(i);
        }
      }, {
        key: "_parseTemplateNode",
        value: function value(e, i, n) {
          var r = babelHelpers.get(babelHelpers.getPrototypeOf(t), "_parseTemplateNode", this).call(this, e, i, n);

          if (e.nodeType === Node.TEXT_NODE) {
            var a = this._parseBindings(e.textContent, i);

            a && (e.textContent = L(a) || " ", P(this, i, n, "text", "textContent", a), r = !0);
          }

          return r;
        }
      }, {
        key: "_parseTemplateNodeAttribute",
        value: function value(e, i, n, r, s) {
          var o = this._parseBindings(s, i);

          if (o) {
            var l = r,
                u = "property";
            v.test(r) ? u = "attribute" : "$" == r[r.length - 1] && (r = r.slice(0, -1), u = "attribute");
            var c = L(o);
            return c && "attribute" == u && e.setAttribute(r, c), "input" === e.localName && "value" === l && e.setAttribute(l, ""), e.removeAttribute(l), "property" === u && (r = Object(a.b)(r)), P(this, i, n, u, r, o, c), !0;
          }

          return babelHelpers.get(babelHelpers.getPrototypeOf(t), "_parseTemplateNodeAttribute", this).call(this, e, i, n, r, s);
        }
      }, {
        key: "_parseTemplateNestedTemplate",
        value: function value(e, i, n) {
          var r = babelHelpers.get(babelHelpers.getPrototypeOf(t), "_parseTemplateNestedTemplate", this).call(this, e, i, n),
              a = n.templateInfo.hostProps;

          for (var s in a) {
            P(this, i, n, "property", "_host_" + s, [{
              mode: "{",
              source: s,
              dependencies: [s]
            }]);
          }

          return r;
        }
      }, {
        key: "_parseBindings",
        value: function value(e, t) {
          for (var i, n = [], r = 0; null !== (i = j.exec(e));) {
            i.index > r && n.push({
              literal: e.slice(r, i.index)
            });
            var a = i[1][0],
                s = Boolean(i[2]),
                o = i[3].trim(),
                l = !1,
                u = "",
                c = -1;
            "{" == a && (c = o.indexOf("::")) > 0 && (u = o.substring(c + 2), o = o.substring(0, c), l = !0);
            var d = M(o),
                h = [];

            if (d) {
              for (var p = d.args, f = d.methodName, b = 0; b < p.length; b++) {
                var m = p[b];
                m.literal || h.push(m);
              }

              var v = t.dynamicFns;
              (v && v[f] || d.static) && (h.push(f), d.dynamicFn = !0);
            } else h.push(o);

            n.push({
              source: o,
              mode: a,
              negate: s,
              customEvent: l,
              signature: d,
              dependencies: h,
              event: u
            }), r = j.lastIndex;
          }

          if (r && r < e.length) {
            var y = e.substring(r);
            y && n.push({
              literal: y
            });
          }

          return n.length ? n : null;
        }
      }, {
        key: "_evaluateBinding",
        value: function value(e, t, i, n, a, s) {
          var o;
          return o = t.signature ? D(e, i, n, 0, t.signature) : i != t.source ? Object(r.a)(e, t.source) : s && Object(r.d)(i) ? Object(r.a)(e, i) : e.__data[i], t.negate && (o = !o), o;
        }
      }]), t;
    }(p(Object(s.a)(e)));

    return t, t;
  }),
      V = new (function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this.stack = [];
    }

    return babelHelpers.createClass(e, [{
      key: "registerHost",
      value: function value(e) {
        this.stack.length && this.stack[this.stack.length - 1]._enqueueClient(e);
      }
    }, {
      key: "beginHosting",
      value: function value(e) {
        this.stack.push(e);
      }
    }, {
      key: "endHosting",
      value: function value(e) {
        var t = this.stack.length;
        t && this.stack[t - 1] == e && this.stack.pop();
      }
    }]), e;
  }())();
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return h;
  });
  var n = i(0),
      r = i(1);

  function a() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></g></svg>']);
    return a = function a() {
      return e;
    }, e;
  }

  function s() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return s = function s() {
      return e;
    }, e;
  }

  function o() {
    var e = babelHelpers.taggedTemplateLiteral(['<button class="icon now" hidden$="[[hideNowButton]]" on-click="now" on-keydown="_stopPropagation">', "</button> ", ""]);
    return o = function o() {
      return e;
    }, e;
  }

  function l() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return l = function l() {
      return e;
    }, e;
  }

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["", "<style>.native{text-align:var(--input-align,left)}.native,.native::-webkit-datetime-edit,.native::-webkit-datetime-edit-fields-wrapper{display:inline-flex;align-items:center;justify-content:center}.native::-webkit-datetime-edit-fields-wrapper{padding:var(--input-field-padding,0 1px);border:var(--input-border-width,thin) solid transparent}.native,.native::-webkit-datetime-edit,.native::-webkit-datetime-edit-ampm-field,.native::-webkit-datetime-edit-day-field,.native::-webkit-datetime-edit-fields-wrapper,.native::-webkit-datetime-edit-hour-field,.native::-webkit-datetime-edit-millisecond-field,.native::-webkit-datetime-edit-minute-field,.native::-webkit-datetime-edit-month-field,.native::-webkit-datetime-edit-second-field,.native::-webkit-datetime-edit-text,.native::-webkit-datetime-edit-week-field,.native::-webkit-datetime-edit-year-field{position:relative;line-height:normal;outline:0;color:var(--inner-input-color,currentColor);font-family:inherit;font-size:inherit;box-sizing:content-box;letter-spacing:inherit;align-self:center}.native::-webkit-datetime-edit-ampm-field,.native::-webkit-datetime-edit-day-field,.native::-webkit-datetime-edit-hour-field,.native::-webkit-datetime-edit-millisecond-field,.native::-webkit-datetime-edit-minute-field,.native::-webkit-datetime-edit-month-field,.native::-webkit-datetime-edit-second-field,.native::-webkit-datetime-edit-week-field,.native::-webkit-datetime-edit-year-field{cursor:var(--input-cursor,pointer);@apply --input-style;background:var(--inner-input-background);border-width:var(--inner-input-border-width,thin);border-color:var(--inner-input-border-color,transparent);border-style:var(--inner-input-border-style,solid);padding:var(--inner-input-padding);border-radius:var(--inner-input-border-radius);text-align:center;align-self:center}.native::-webkit-datetime-edit-day-field,.native::-webkit-datetime-edit-hour-field,.native::-webkit-datetime-edit-millisecond-field,.native::-webkit-datetime-edit-minute-field,.native::-webkit-datetime-edit-month-field,.native::-webkit-datetime-edit-second-field,.native::-webkit-datetime-edit-week-field{min-width:2ch}.native::-webkit-datetime-edit-millisecond-field{min-width:3ch}.native::-webkit-datetime-edit-year-field{min-width:4ch}.native::-webkit-datetime-edit-ampm-field:focus,.native::-webkit-datetime-edit-day-field:focus,.native::-webkit-datetime-edit-hour-field:focus,.native::-webkit-datetime-edit-millisecond-field:focus,.native::-webkit-datetime-edit-minute-field:focus,.native::-webkit-datetime-edit-month-field:focus,.native::-webkit-datetime-edit-second-field:focus,.native::-webkit-datetime-edit-week-field:focus,.native::-webkit-datetime-edit-year-field:focus{color:var(--inner-input-focus-color);background:var(--inner-input-focus-background);border-color:var(--inner-input-focus-border-color,transparent);border-style:var(--inner-input-focus-border-style,solid)}.native::-webkit-calendar-picker-indicator{fill:currentColor;align-self:center;cursor:pointer}.native::-webkit-calendar-picker-indicator:hover{background:0 0}.native::-webkit-inner-spin-button{display:none}.native.timezone{--input-border-color:transparent;--input-focus-border-color:transparent}</style>"]);
    return u = function u() {
      return e;
    }, e;
  }

  function c() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return c = function c() {
      return e;
    }, e;
  }

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(['<template is="dom-if" if="[[_computeShouldNative(native)]]" restamp><input class="native" type="', '" disabled$="[[disabled]]" value="{{_nativeInput::input}}" step="[[_computeNativeStep(_partsStep, clamp)]]" min="[[_computeNativeThreshold(_minValue)]]" max="[[_computeNativeThreshold(_maxValue)]]"> ', "</template>"]);
    return d = function d() {
      return e;
    }, e;
  }

  var h = Object(r.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeNativeInput",
        value: function value(e, t) {
          e && t ? this._nativeInput = "".concat(e, "T").concat(t) : e || t || (this._nativeInput = "");
        }
      }, {
        key: "_reflectNativeInput",
        value: function value(e) {
          if (this._computeShouldNative(this.native) && e) {
            var t = e.split("T");

            this._dateTimeChanged(t[0], t[1]);
          }
        }
      }, {
        key: "_computeNativeStep",
        value: function value(e, t) {
          if (void 0 === e) return 1;
          if ("date" === this.constructor.expectedNativeInputType) return e.day;

          switch (t) {
            case "year":
            case "month":
            case "day":
            case "hour":
              return 86400 * e.day;

            case "minute":
              return 3600 * e.hour;

            case "second":
              return 60 * e.second;

            case "millisecond":
              return 1 * e.millisecond;

            default:
              return .001;
          }
        }
      }, {
        key: "_computeNativeThreshold",
        value: function value(e) {
          if (!isNaN(e)) {
            var t = new Date(e),
                i = this.offsetMinutes;
            return isNaN(i) && (i = t.getTimezoneOffset()), t.setMinutes(t.getMinutes() - i), "date" === this.constructor.expectedNativeInputType ? this.__toDate(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate()) : "time" === this.constructor.expectedNativeInputType ? this.__toTime(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()) : this.__toDate(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate()) + "T" + this.__toTime(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds());
          }
        }
      }, {
        key: "setDate",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "setDate", this).call(this, e), (this.autoConfirm || this._hasNative && this.native) && this._setConfirmedValue();
        }
      }, {
        key: "_defaultValueChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_defaultValueChanged", this).call(this, e), this._isSet(this.value) && this._setConfirmedValue();
        }
      }, {
        key: "reset",
        value: function value(e) {
          this.resetDate(e), this._setConfirmedValue();
        }
      }], [{
        key: "nativeInputTemplate",
        get: function get() {
          return Object(n.a)(d(), this.expectedNativeInputType, this.timezoneInputTemplate || Object(n.a)(c()));
        }
      }, {
        key: "styleTemplate",
        get: function get() {
          return Object(n.a)(u(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(n.a)(l()));
        }
      }, {
        key: "buttonTemplate",
        get: function get() {
          return Object(n.a)(o(), this._iconNowTemplate, babelHelpers.get(babelHelpers.getPrototypeOf(t), "buttonTemplate", this) || Object(n.a)(s()));
        }
      }, {
        key: "_iconNowTemplate",
        get: function get() {
          return Object(n.a)(a());
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            hideNowButton: {
              type: Boolean
            },
            _nativeInput: {
              type: String
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computeNativeInput(date, time)", "_reflectNativeInput(_nativeInput)"];
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  var n = i(1),
      r = i(28),
      a = i(10),
      s = i(0),
      o = i(30);

  function l() {
    var e = babelHelpers.taggedTemplateLiteral(['<style>:host{--computed-dropdown-tip-size:var(--dropdown-tip-size, 6px);--computed-dropdown-tip-gap:var(--dropdown-tip-gap, 12px);--computed-dropdown-background:var(--dropdown-background, var(--input-picker-background, transparent))}.dropdown:after{content:"";position:absolute;width:0;height:0;border-width:var(--computed-dropdown-tip-size);border-style:solid;border-color:transparent transparent transparent transparent;left:auto;top:auto;bottom:auto;right:auto}:host([dynamic-align]) .dropdown:after,:host([no-tip]) .dropdown:after{display:none!important}:host([horizontal-align=auto]) .dropdown:after,:host([horizontal-align=left]) .dropdown:after,:host([horizontal-align]) .dropdown:after,:host([vertical-align=auto]) .dropdown:after,:host([vertical-align=top]) .dropdown:after,:host([vertical-align]) .dropdown:after{top:0;left:var(--computed-dropdown-tip-gap);border-bottom-color:var(--computed-dropdown-background);transform:translateY(-100%)}:host([horizontal-align=right][vertical-align]) .dropdown:after{left:auto;right:var(--computed-dropdown-tip-gap)}:host([horizontal-align=center][vertical-align]) .dropdown:after{left:50%;right:auto;transform:translate(-50%,-100%)}:host([horizontal-align][vertical-align=bottom]) .dropdown:after{top:auto;bottom:0;border-bottom-color:transparent;border-top-color:var(--computed-dropdown-background);transform:translateY(100%)}:host([horizontal-align][vertical-align=middle]) .dropdown:after{top:auto;bottom:50%;right:0;left:auto;transform:translate(100%,50%);border-top-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-left-color:var(--computed-dropdown-background)}:host([horizontal-align=left][vertical-align=middle]) .dropdown:after{right:auto;left:0;transform:translate(-100%,50%);border-left-color:transparent;border-right-color:var(--computed-dropdown-background)}:host([horizontal-align=center][vertical-align=middle]) .dropdown:after{border:none}</style>']);
    return l = function l() {
      return e;
    }, e;
  }

  var u = Object(s.a)(l()),
      c = i(15);

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg>']);
    return d = function d() {
      return e;
    }, e;
  }

  function h() {
    var e = babelHelpers.taggedTemplateLiteral(['<svg viewBox="0 0 24 24"><g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></g></svg>']);
    return h = function h() {
      return e;
    }, e;
  }

  function p() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return p = function p() {
      return e;
    }, e;
  }

  function f() {
    var e = babelHelpers.taggedTemplateLiteral(["", ' <button id="confirm" class="icon" hidden$="[[disabled]]" on-tap="confirm" on-keydown="_stopPropagation">', '</button> <button id="cancel" class="icon" on-tap="cancel" on-keydown="_stopPropagation" hidden$="[[autoConfirm]]">', "</button>"]);
    return f = function f() {
      return e;
    }, e;
  }

  function b() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return b = function b() {
      return e;
    }, e;
  }

  function m() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="picker" class="dropdown" tabindex="-1" hidden$="[[_computeShouldNative(native)]]">', '<div id="buttons">', "<div></div></div></div>"]);
    return m = function m() {
      return e;
    }, e;
  }

  function v() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return v = function v() {
      return e;
    }, e;
  }

  function y() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="input" on-tap="open" hidden$="[[_computeShouldNative(native)]]">', "</div>", ""]);
    return y = function y() {
      return e;
    }, e;
  }

  function g() {
    var e = babelHelpers.taggedTemplateLiteral(['<template is="dom-if" if="[[_computeShouldNative(native)]]" restamp><input class="native" type="', '" disabled$="[[disabled]]" readonly="[[disabled]]" required="[[required]]" value="{{confirmedValue::input}}"></template>']);
    return g = function g() {
      return e;
    }, e;
  }

  function _() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", ""]);
    return _ = function _() {
      return e;
    }, e;
  }

  function k() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return k = function k() {
      return e;
    }, e;
  }

  function C() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", " ", "<style>:host{display:inline-flex;position:relative}#picker #buttons{display:inline-flex;position:relative;align-self:stretch;align-items:flex-end;justify-content:flex-end;padding-top:0}</style>"]);
    return C = function C() {
      return e;
    }, e;
  }

  function w() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", ""]);
    return w = function w() {
      return e;
    }, e;
  }

  function O() {
    var e = babelHelpers.taggedTemplateLiteral(["text"]);
    return O = function O() {
      return e;
    }, e;
  }

  i.d(t, "a", function () {
    return x;
  });
  var x = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._onPickerTransitionEnd = e._onPickerTransitionEnd.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._checkKeycode = e._checkKeycode.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._stopPropagation = e._stopPropagation.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.confirm = e.confirm.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.cancel = e.cancel.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.open = e.open.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.close = e.close.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.toggle = e.toggle.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this._addPickerTransitionEndListener(), this._addKeyListener(), this._isSet(this.value) && this._setConfirmedValue();
        }
      }, {
        key: "disconnectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this._removePickerTransitionEndListener(), this._removeKeyListener();
        }
      }, {
        key: "_computeShouldNative",
        value: function value(e) {
          return this._hasNative && e;
        }
      }, {
        key: "_addPickerTransitionEndListener",
        value: function value() {
          this.opened || (this.$.picker.style.visibility = "hidden", this.$.picker.style.display = "none"), this.$.picker.addEventListener("transitionend", this._onPickerTransitionEnd, !1);
        }
      }, {
        key: "_removePickerTransitionEndListener",
        value: function value() {
          this.$.picker.removeEventListener("transitionend", this._onPickerTransitionEnd, !1);
        }
      }, {
        key: "_onPickerTransitionEnd",
        value: function value(e) {
          this.opened || (e.path && e.path[0] || e.target) === this.$.picker && (this.$.picker.style.visibility = "hidden", this.$.picker.style.display = "none");
        }
      }, {
        key: "_addCancelOnClickListener",
        value: function value() {
          Object(a.b)(document, "tap", this.cancel, !1), Object(a.d)(this, "auto"), Object(a.b)(this, "tap", this._stopPropagation, !1);
        }
      }, {
        key: "_removeCancelOnClickListener",
        value: function value() {
          Object(a.c)(document, "tap", this.cancel, !1), Object(a.c)(this, "tap", this._stopPropagation, !1);
        }
      }, {
        key: "_addCloseOnPickerOpenedListener",
        value: function value() {
          document.addEventListener("input-picker-opened", this.close, !1);
        }
      }, {
        key: "_removeCloseOnPickerOpenedListener",
        value: function value() {
          document.removeEventListener("input-picker-opened", this.close, !1);
        }
      }, {
        key: "_stopPropagation",
        value: function value(e) {
          e && e.stopPropagation && e.stopPropagation(), e && e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation && e.detail.sourceEvent.stopPropagation();
        }
      }, {
        key: "_addKeyListener",
        value: function value() {
          this.addEventListener("keydown", this._checkKeycode, !1);
        }
      }, {
        key: "_removeKeyListener",
        value: function value() {
          this.removeEventListener("keydown", this._checkKeycode, !1);
        }
      }, {
        key: "_nativeOnMobileChanged",
        value: function value() {
          if (void 0 !== this.nativeOnMobile) {
            var e = window.navigator.userAgent;
            !0 === new RegExp(this.mobileUserAgentTestString, "i").test(e) && (!0 === this.nativeOnMobile ? this.native = !0 : this.native || !1 !== this.nativeOnMobile || (this.native = !1));
          }
        }
      }, {
        key: "_checkKeycode",
        value: function value(e) {
          e && (27 !== e.keyCode || this.noCancelOnEscKey ? 13 !== e.keyCode && 32 !== e.keyCode || (this.opened ? this.confirm() : this.open()) : this.cancel());
        }
      }, {
        key: "_openedChanged",
        value: function value(e) {
          this._computeShouldNative(this.native) || (e ? (this.$.picker.style.display = "", this.$.picker.style.visibility = "", this.dispatchEvent(new (CustomEvent || Event)("input-picker-opened", {
            bubbles: !0,
            detail: this
          })), this.noCancelOnOutsideClick || this._addCancelOnClickListener(), this.noCloseOnPickerOpened || this._addCloseOnPickerOpenedListener()) : (this.dispatchEvent(new (CustomEvent || Event)("input-picker-closed", {
            bubbles: !0,
            detail: this
          })), this._removeCancelOnClickListener(), this._removeCloseOnPickerOpenedListener()));
        }
      }, {
        key: "validate",
        value: function value() {
          return this.valueIsSet ? this._setConfirmedValue() : this._isSet(this.confirmedValue) && this._resetValue(), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "validate", this).call(this);
        }
      }, {
        key: "open",
        value: function value(e) {
          this._stopPropagation(e), this.opened = !0;
        }
      }, {
        key: "close",
        value: function value() {
          this.opened = !1;
        }
      }, {
        key: "toggle",
        value: function value() {
          this.opened = !this.opened;
        }
      }, {
        key: "confirm",
        value: function value(e) {
          this._stopPropagation(e), this.disabled || this._setConfirmedValue(), this.close();
        }
      }, {
        key: "cancel",
        value: function value() {
          this.disabled || (this.autoConfirm ? this.confirm() : this._resetValue()), this.close();
        }
      }, {
        key: "_valueChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_valueChanged", this).call(this, e), this.autoConfirm && this._setConfirmedValue();
        }
      }, {
        key: "_confirmedValueChanged",
        value: function value(e) {
          !1 === this._isSet(e) ? this.reset(e) : this.value = e;
        }
      }, {
        key: "reset",
        value: function value(e) {
          this.setProperties({
            value: this.default || e,
            confirmedValue: this.default || e
          });
        }
      }, {
        key: "_setConfirmedValue",
        value: function value() {
          this.confirmedValue = this.value;
        }
      }, {
        key: "_resetValue",
        value: function value() {
          this.value = this.confirmedValue;
        }
      }, {
        key: "_autoConfirmChanged",
        value: function value(e) {
          e && this._isSet(this.value) && this._setConfirmedValue();
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_defaultChanged", this).call(this, e), this._isSet(this.value) && this._setConfirmedValue();
        }
      }], [{
        key: "expectedNativeInputType",
        get: function get() {
          return Object(s.b)(O());
        }
      }, {
        key: "hasNative",
        get: function get() {
          var e = document.createElement("input");
          return e.setAttribute("type", "".concat(this.expectedNativeInputType)), this._hasNative = e.type == "".concat(this.expectedNativeInputType);
        }
      }, {
        key: "template",
        get: function get() {
          return Object(s.a)(w(), this.styleTemplate, this.hasNative ? this.nativeTemplate : this.polyfillTemplate);
        }
      }, {
        key: "styleTemplate",
        get: function get() {
          return Object(s.a)(C(), o.a, u, babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(s.a)(k()));
        }
      }, {
        key: "nativeTemplate",
        get: function get() {
          return Object(s.a)(_(), this.nativeInputTemplate, this.polyfillTemplate);
        }
      }, {
        key: "nativeInputTemplate",
        get: function get() {
          return Object(s.a)(g(), this.expectedNativeInputType);
        }
      }, {
        key: "polyfillTemplate",
        get: function get() {
          return Object(s.a)(y(), this.inputTemplate || Object(s.a)(v()), this.pickerTemplate);
        }
      }, {
        key: "pickerTemplate",
        get: function get() {
          return Object(s.a)(m(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "pickerTemplate", this) || Object(s.a)(b()), this.buttonTemplate);
        }
      }, {
        key: "buttonTemplate",
        get: function get() {
          return Object(s.a)(f(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "buttonTemplate", this) || Object(s.a)(p()), this._iconConfirmTemplate, this._iconCloseTemplate);
        }
      }, {
        key: "_iconCloseTemplate",
        get: function get() {
          return Object(s.a)(h());
        }
      }, {
        key: "_iconConfirmTemplate",
        get: function get() {
          return Object(s.a)(d());
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            native: {
              type: Boolean,
              value: !1
            },
            nativeOnMobile: {
              type: Boolean,
              observer: "_nativeOnMobileChanged"
            },
            mobileUserAgentTestString: {
              type: String,
              value: "mM]obi|[tT]ablet|[aA]ndroid",
              observer: "_nativeOnMobileChanged"
            },
            opened: {
              type: Boolean,
              reflectToAttribute: !0,
              value: !1,
              notify: !0
            },
            horizontalAlign: {
              type: String,
              reflectToAttribute: !0,
              value: "auto"
            },
            verticalAlign: {
              type: String,
              reflectToAttribute: !0,
              value: "auto"
            },
            autoConfirm: {
              type: Boolean,
              observer: "_autoConfirmChanged"
            },
            noCancelOnEscKey: {
              type: Boolean,
              value: !1
            },
            noCancelOnOutsideClick: {
              type: Boolean,
              value: !1
            },
            noCloseOnPickerOpened: {
              type: Boolean,
              value: !1
            },
            noTip: {
              type: Boolean,
              reflectToAttribute: !0
            },
            confirmedValue: {
              type: Object,
              notify: !0
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_confirmedValueChanged(confirmedValue)", "_openedChanged(opened)"];
        }
      }]), t;
    }(Object(r.a)(Object(c.a)(e)));
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  i(5);
  var n = i(1),
      r = i(10),
      a = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_addEventListenerToNode",
        value: function value(e, i, n) {
          Object(r.b)(e, i, n) || babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_addEventListenerToNode", this).call(this, e, i, n);
        }
      }, {
        key: "_removeEventListenerFromNode",
        value: function value(e, i, n) {
          Object(r.c)(e, i, n) || babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_removeEventListenerFromNode", this).call(this, e, i, n);
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return u;
  });
  i(5);
  var n = i(14),
      r = i(6),
      a = {},
      s = {};

  function o(e, t) {
    a[e] = s[e.toLowerCase()] = t;
  }

  function l(e) {
    return a[e] || s[e.toLowerCase()];
  }

  var u = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "attributeChangedCallback",
      value: function value(e, t, i, n) {
        t !== i && this.register();
      }
    }, {
      key: "register",
      value: function value(e) {
        if (e = e || this.id) {
          if (r.e && void 0 !== l(e)) throw o(e, null), new Error("strictTemplatePolicy: dom-module ".concat(e, " re-registered"));
          this.id = e, o(e, this), (t = this).querySelector("style") && console.warn("dom-module %s has style outside template", t.id);
        }

        var t;
      }
    }, {
      key: "assetpath",
      get: function get() {
        if (!this.__assetpath) {
          var e = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument,
              t = Object(n.c)(this.getAttribute("assetpath") || "", e.baseURI);
          this.__assetpath = Object(n.a)(t);
        }

        return this.__assetpath;
      }
    }], [{
      key: "import",
      value: function value(e, t) {
        if (e) {
          var i = l(e);
          return i && t ? i.querySelector(t) : i;
        }

        return null;
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ["id"];
      }
    }]), t;
  }(babelHelpers.wrapNativeSuper(HTMLElement));

  u.prototype.modules = a, customElements.define("dom-module", u);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(["<style>:host{font-family:inherit;font-size:inherit;outline:0;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;box-sizing:content-box;--input-picker-color:#dfdfdf;--input-picker-background:#222;--input-picker-border-radius:0.5em;--input-picker-padding:0.3em;--input-picker-box-shadow:0 3px 4px 0 rgba(0, 0, 0, 0.14),0 1px 8px 0 rgba(0, 0, 0, 0.12),0 3px 3px -2px rgba(0, 0, 0, 0.4);--input-icon-border-radius:0.3em;--input-icon-padding:0.5em;--input-icon-height:1em;--input-icon-width:1em;--input-icon-background:transparent;--input-cursor:pointer;--inner-input-border-width:thin;--inner-input-padding:0;--inner-input-border-radius:0.2em;--inner-input-focus-color:#f1f1f1;--inner-input-focus-background:var(--primary-color, #394FE8);--input-disabled:{font-weight:lighter};}button,select{-moz-appearance:none;-webkit-appearance:none;text-align-last:var(--input-align,center);background-image:none;border-width:var(--inner-input-border-width,thin);border-style:solid;border-color:var(--inner-input-border-color,transparent)}button:focus,button:hover,select:focus,select:hover{border-width:var(--inner-input-border-width,thin);color:var(--inner-input-focus-color,inherit);background-color:var(--inner-input-focus-background,rgba(0,0,0,.1));outline:0;@apply --input-focus;}select option,select:focus option{color:var(--input-color,inherit);background-color:var(--input-background,transparent);outline:0;font-family:inherit;font-size:inherit;font-weight:inherit}button>*{pointer-events:none}.icon{color:inherit;border-radius:var(--input-icon-border-radius);padding:var(--input-icon-padding);height:var(--input-icon-height);width:var(--input-icon-width);border:var(--inner-input-border-width,thin) solid transparent;background:var(--input-icon-background);transition-duration:var(--input-transition-duration,250ms);transition-timing-function:var(--input-transition-timing-function,cubic-bezier(.6,1,.2,1));@apply --input-icon;box-sizing:content-box;flex-shrink:0;transition-property:background-color,border-color}.icon>svg{height:100%;width:100%;fill:currentColor}.icon:focus{border-color:var(--inner-input-focus-background);background:0 0;outline:0}.icon:active,.icon:hover:focus,.icon[active],:host(:hover) .icon:focus{color:var(--inner-input-focus-color);background-color:var(--inner-input-focus-background);border-color:transparent!important;@apply --input-focus;outline:0}.icon[disabled]{pointer-events:none;opacity:var(--input-disabled-opacity,.75)}#picker,#picker>*{color:var(--input-picker-color);background-color:var(--input-picker-background);border-radius:var(--input-picker-border-radius)}#picker{box-shadow:var(--input-picker-box-shadow);@apply --input-picker;display:inline-flex;flex-flow:column nowrap;padding:0;margin:0}#picker[horizontal]{flex-flow:row nowrap}#picker>*{padding:var(--input-picker-padding);box-shadow:none!important;box-sizing:border-box;flex-shrink:0}[hidden]{display:none!important}</style>"]);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(["<style>:host{--computed-dropdown-background:var(--dropdown-background, var(--input-picker-background, transparent))}.dropdown{margin:0;padding:0;position:absolute;opacity:0;background:var(--computed-dropdown-background);transition-duration:var(--dropdown-transition-duration,250ms);transition-timing-function:var(--dropdown-transition-timing-function,cubic-bezier(.6,1,.2,1));transition-property:opacity;pointer-events:none;z-index:1}:host([opened]) .dropdown{opacity:1;pointer-events:all}:host([vertical-align=auto]) .dropdown,:host([vertical-align=top]) .dropdown,:host([vertical-align]) .dropdown{top:auto;bottom:0}:host([vertical-align=bottom]) .dropdown{top:0;bottom:auto}:host([vertical-align=middle]) .dropdown{top:auto;bottom:50%}:host([horizontal-align=auto]) .dropdown,:host([horizontal-align=left]) .dropdown,:host([horizontal-align]) .dropdown{left:0;right:auto}:host([horizontal-align=right]) .dropdown{left:auto;right:0}:host([horizontal-align][vertical-align]) .dropdown{transform:translateY(100%)}:host([horizontal-align=center][vertical-align]) .dropdown{left:50%;right:auto;transform:translate(-50%,100%)}:host([horizontal-align][vertical-align=bottom]) .dropdown{transform:translateY(-100%)}:host([horizontal-align=center][vertical-align=bottom]) .dropdown{transform:translate(-50%,-100%)}:host([horizontal-align][vertical-align=middle]) .dropdown{left:0;right:auto;transform:translate(-100%,50%)}:host([horizontal-align=left][vertical-align=middle]) .dropdown{left:auto;right:0;transform:translate(100%,50%)}:host([horizontal-align=center][vertical-align=middle]) .dropdown{position:fixed;top:50%;left:50%;bottom:auto;right:auto;transform:translate(-50%,-50%)}</style>"]);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
}, function (e, t, i) {
  "use strict";

  i.d(t, "c", function () {
    return h;
  }), i.d(t, "b", function () {
    return p;
  }), i.d(t, "a", function () {
    return b;
  });
  var n = i(29),
      r = i(14),
      a = "link[rel=import][type~=css]",
      s = "include",
      o = "shady-unscoped";

  function l(e) {
    return n.a.import(e);
  }

  function u(e) {
    var t = e.body ? e.body : e,
        i = Object(r.b)(t.textContent, e.baseURI),
        n = document.createElement("style");
    return n.textContent = i, n;
  }

  function c(e) {
    for (var t = e.trim().split(/\s+/), i = [], n = 0; n < t.length; n++) {
      i.push.apply(i, babelHelpers.toConsumableArray(d(t[n])));
    }

    return i;
  }

  function d(e) {
    var t = l(e);
    if (!t) return console.warn("Could not find style data in module named", e), [];

    if (void 0 === t._styles) {
      var i = [];
      i.push.apply(i, babelHelpers.toConsumableArray(f(t)));
      var n = t.querySelector("template");
      n && i.push.apply(i, babelHelpers.toConsumableArray(h(n, t.assetpath))), t._styles = i;
    }

    return t._styles;
  }

  function h(e, t) {
    if (!e._styles) {
      for (var i = [], n = e.content.querySelectorAll("style"), a = 0; a < n.length; a++) {
        var o = n[a],
            l = o.getAttribute(s);
        l && i.push.apply(i, babelHelpers.toConsumableArray(c(l).filter(function (e, t, i) {
          return i.indexOf(e) === t;
        }))), t && (o.textContent = Object(r.b)(o.textContent, t)), i.push(o);
      }

      e._styles = i;
    }

    return e._styles;
  }

  function p(e) {
    var t = l(e);
    return t ? f(t) : [];
  }

  function f(e) {
    for (var t = [], i = e.querySelectorAll(a), n = 0; n < i.length; n++) {
      var r = i[n];

      if (r.import) {
        var s = r.import,
            l = r.hasAttribute(o);

        if (l && !s._unscopedStyle) {
          var c = u(s);
          c.setAttribute(o, ""), s._unscopedStyle = c;
        } else s._style || (s._style = u(s));

        t.push(l ? s._unscopedStyle : s._style);
      }
    }

    return t;
  }

  function b(e) {
    for (var t = e.trim().split(/\s+/), i = "", n = 0; n < t.length; n++) {
      i += m(t[n]);
    }

    return i;
  }

  function m(e) {
    var t = l(e);

    if (t && void 0 === t._cssText) {
      var i = v(t),
          n = t.querySelector("template");
      n && (i += function (e, t) {
        for (var i = "", n = h(e, t), r = 0; r < n.length; r++) {
          var a = n[r];
          a.parentNode && a.parentNode.removeChild(a), i += a.textContent;
        }

        return i;
      }(n, t.assetpath)), t._cssText = i || null;
    }

    return t || console.warn("Could not find style data in module named", e), t && t._cssText || "";
  }

  function v(e) {
    for (var t = "", i = f(e), n = 0; n < i.length; n++) {
      t += i[n].textContent;
    }

    return t;
  }
}, function (e, t, i) {
  "use strict";

  var n = i(16),
      r = function e() {
    babelHelpers.classCallCheck(this, e), this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = "", this.cssText = "", this.atRule = !1, this.type = 0, this.keyframesName = "", this.selector = "", this.parsedSelector = "";
  };

  function a(e) {
    return function e(t, i) {
      var n = i.substring(t.start, t.end - 1);
      t.parsedCssText = t.cssText = n.trim();

      if (t.parent) {
        var r = t.previous ? t.previous.end : t.parent.start;

        n = (n = (n = function (e) {
          return e.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
            for (var e = arguments[1], t = 6 - e.length; t--;) {
              e = "0" + e;
            }

            return "\\" + e;
          });
        }(n = i.substring(r, t.start - 1))).replace(c.multipleSpaces, " ")).substring(n.lastIndexOf(";") + 1);

        var a = t.parsedSelector = t.selector = n.trim();
        t.atRule = 0 === a.indexOf(p), t.atRule ? 0 === a.indexOf(h) ? t.type = o.MEDIA_RULE : a.match(c.keyframesRule) && (t.type = o.KEYFRAMES_RULE, t.keyframesName = t.selector.split(c.multipleSpaces).pop()) : 0 === a.indexOf(d) ? t.type = o.MIXIN_RULE : t.type = o.STYLE_RULE;
      }

      var s = t.rules;
      if (s) for (var l, u = 0, f = s.length; u < f && (l = s[u]); u++) {
        e(l, i);
      }
      return t;
    }(function (e) {
      var t = new r();
      t.start = 0, t.end = e.length;

      for (var i = t, n = 0, a = e.length; n < a; n++) {
        if (e[n] === l) {
          i.rules || (i.rules = []);
          var s = i,
              o = s.rules[s.rules.length - 1] || null;
          (i = new r()).start = n + 1, i.parent = s, i.previous = o, s.rules.push(i);
        } else e[n] === u && (i.end = n + 1, i = i.parent || t);
      }

      return t;
    }(e = e.replace(c.comments, "").replace(c.port, "")), e);
  }

  function s(e, t) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        n = "";

    if (e.cssText || e.rules) {
      var r = e.rules;
      if (r && !function (e) {
        var t = e[0];
        return Boolean(t) && Boolean(t.selector) && 0 === t.selector.indexOf(d);
      }(r)) for (var a, o = 0, h = r.length; o < h && (a = r[o]); o++) {
        n = s(a, t, n);
      } else (n = (n = t ? e.cssText : function (e) {
        return function (e) {
          return e.replace(c.mixinApply, "").replace(c.varApply, "");
        }(e = function (e) {
          return e.replace(c.customProp, "").replace(c.mixinProp, "");
        }(e));
      }(e.cssText)).trim()) && (n = "  " + n + "\n");
    }

    return n && (e.selector && (i += e.selector + " " + l + "\n"), i += n, e.selector && (i += u + "\n\n")), i;
  }

  var o = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1e3
  },
      l = "{",
      u = "}",
      c = {
    comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
  },
      d = "--",
      h = "@media",
      p = "@",
      f = i(17),
      b = new Set(),
      m = "shady-unscoped";

  function v(e) {
    var t = e.textContent;

    if (!b.has(t)) {
      b.add(t);
      var i = e.cloneNode(!0);
      document.head.appendChild(i);
    }
  }

  function y(e) {
    return e.hasAttribute(m);
  }

  function g(e, t) {
    return e ? ("string" === typeof e && (e = a(e)), t && k(e, t), s(e, n.a)) : "";
  }

  function _(e) {
    return !e.__cssRules && e.textContent && (e.__cssRules = a(e.textContent)), e.__cssRules || null;
  }

  function k(e, t, i, n) {
    if (e) {
      var r = !1,
          a = e.type;

      if (n && a === o.MEDIA_RULE) {
        var s = e.selector.match(f.a);
        s && (window.matchMedia(s[1]).matches || (r = !0));
      }

      a === o.STYLE_RULE ? t(e) : i && a === o.KEYFRAMES_RULE ? i(e) : a === o.MIXIN_RULE && (r = !0);
      var l = e.rules;
      if (l && !r) for (var u, c = 0, d = l.length; c < d && (u = l[c]); c++) {
        k(u, t, i, n);
      }
    }
  }

  function C(e, t) {
    for (var i = 0, n = t, r = e.length; n < r; n++) {
      if ("(" === e[n]) i++;else if (")" === e[n] && 0 === --i) return n;
    }

    return -1;
  }

  var w = "css-build";

  function O(e) {
    if (void 0 === e.__cssBuild) {
      var t = e.getAttribute(w);
      if (t) e.__cssBuild = t;else {
        var i = function (e) {
          var t = "template" === e.localName ? e.content.firstChild : e.firstChild;

          if (t instanceof Comment) {
            var i = t.textContent.trim().split(":");
            if (i[0] === w) return i[1];
          }

          return "";
        }(e);

        "" !== i && function (e) {
          var t = "template" === e.localName ? e.content.firstChild : e.firstChild;
          t.parentNode.removeChild(t);
        }(e), e.__cssBuild = i;
      }
    }

    return e.__cssBuild || "";
  }

  function x(e) {
    return "" !== O(e);
  }

  var T = i(21),
      S = /;\s*/m,
      P = /^\s*(initial)|(inherit)\s*$/,
      H = /\s*!important/,
      N = function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this._map = {};
    }

    return babelHelpers.createClass(e, [{
      key: "set",
      value: function value(e, t) {
        e = e.trim(), this._map[e] = {
          properties: t,
          dependants: {}
        };
      }
    }, {
      key: "get",
      value: function value(e) {
        return e = e.trim(), this._map[e] || null;
      }
    }]), e;
  }(),
      A = null,
      E = function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this._currentElement = null, this._measureElement = null, this._map = new N();
    }

    return babelHelpers.createClass(e, [{
      key: "detectMixin",
      value: function value(e) {
        return Object(T.a)(e);
      }
    }, {
      key: "gatherStyles",
      value: function value(e) {
        var t = function (e) {
          for (var t = [], i = e.querySelectorAll("style"), r = 0; r < i.length; r++) {
            var a = i[r];
            y(a) ? n.b || (v(a), a.parentNode.removeChild(a)) : (t.push(a.textContent), a.parentNode.removeChild(a));
          }

          return t.join("").trim();
        }(e.content);

        if (t) {
          var i = document.createElement("style");
          return i.textContent = t, e.content.insertBefore(i, e.content.firstChild), i;
        }

        return null;
      }
    }, {
      key: "transformTemplate",
      value: function value(e, t) {
        void 0 === e._gatheredStyle && (e._gatheredStyle = this.gatherStyles(e));
        var i = e._gatheredStyle;
        return i ? this.transformStyle(i, t) : null;
      }
    }, {
      key: "transformStyle",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = _(e);

        return this.transformRules(i, t), e.textContent = g(i), i;
      }
    }, {
      key: "transformCustomStyle",
      value: function value(e) {
        var t = this,
            i = _(e);

        return k(i, function (e) {
          ":root" === e.selector && (e.selector = "html"), t.transformRule(e);
        }), e.textContent = g(i), i;
      }
    }, {
      key: "transformRules",
      value: function value(e, t) {
        var i = this;
        this._currentElement = t, k(e, function (e) {
          i.transformRule(e);
        }), this._currentElement = null;
      }
    }, {
      key: "transformRule",
      value: function value(e) {
        e.cssText = this.transformCssText(e.parsedCssText, e), ":root" === e.selector && (e.selector = ":host > *");
      }
    }, {
      key: "transformCssText",
      value: function value(e, t) {
        var i = this;
        return e = e.replace(f.c, function (e, n, r, a) {
          return i._produceCssProperties(e, n, r, a, t);
        }), this._consumeCssProperties(e, t);
      }
    }, {
      key: "_getInitialValueForProperty",
      value: function value(e) {
        return this._measureElement || (this._measureElement = document.createElement("meta"), this._measureElement.setAttribute("apply-shim-measure", ""), this._measureElement.style.all = "initial", document.head.appendChild(this._measureElement)), window.getComputedStyle(this._measureElement).getPropertyValue(e);
      }
    }, {
      key: "_fallbacksFromPreviousRules",
      value: function value(e) {
        for (var t = this, i = e; i.parent;) {
          i = i.parent;
        }

        var n = {},
            r = !1;
        return k(i, function (i) {
          (r = r || i === e) || i.selector === e.selector && Object.assign(n, t._cssTextToMap(i.parsedCssText));
        }), n;
      }
    }, {
      key: "_consumeCssProperties",
      value: function value(e, t) {
        for (var i = null; i = f.b.exec(e);) {
          var n = i[0],
              r = i[1],
              a = i.index,
              s = a + n.indexOf("@apply"),
              o = a + n.length,
              l = e.slice(0, s),
              u = e.slice(o),
              c = t ? this._fallbacksFromPreviousRules(t) : {};
          Object.assign(c, this._cssTextToMap(l));

          var d = this._atApplyToCssProperties(r, c);

          e = "".concat(l).concat(d).concat(u), f.b.lastIndex = a + d.length;
        }

        return e;
      }
    }, {
      key: "_atApplyToCssProperties",
      value: function value(e, t) {
        e = e.replace(S, "");

        var i = [],
            n = this._map.get(e);

        if (n || (this._map.set(e, {}), n = this._map.get(e)), n) {
          var r, a, s;
          this._currentElement && (n.dependants[this._currentElement] = !0);
          var o = n.properties;

          for (r in o) {
            a = [r, ": var(", e, "_-_", r], (s = t && t[r]) && a.push(",", s.replace(H, "")), a.push(")"), H.test(o[r]) && a.push(" !important"), i.push(a.join(""));
          }
        }

        return i.join("; ");
      }
    }, {
      key: "_replaceInitialOrInherit",
      value: function value(e, t) {
        var i = P.exec(t);
        return i && (t = i[1] ? this._getInitialValueForProperty(e) : "apply-shim-inherit"), t;
      }
    }, {
      key: "_cssTextToMap",
      value: function value(e) {
        for (var t, i, n, r, a = e.split(";"), s = {}, o = 0; o < a.length; o++) {
          (n = a[o]) && (r = n.split(":")).length > 1 && (t = r[0].trim(), i = this._replaceInitialOrInherit(t, r.slice(1).join(":")), s[t] = i);
        }

        return s;
      }
    }, {
      key: "_invalidateMixinEntry",
      value: function value(e) {
        if (A) for (var t in e.dependants) {
          t !== this._currentElement && A(t);
        }
      }
    }, {
      key: "_produceCssProperties",
      value: function value(e, t, i, n, r) {
        var a = this;
        if (i && function e(t, i) {
          var n = t.indexOf("var(");
          if (-1 === n) return i(t, "", "", "");
          var r = C(t, n + 3),
              a = t.substring(n + 4, r),
              s = t.substring(0, n),
              o = e(t.substring(r + 1), i),
              l = a.indexOf(",");
          return -1 === l ? i(s, a.trim(), "", o) : i(s, a.substring(0, l).trim(), a.substring(l + 1).trim(), o);
        }(i, function (e, t) {
          t && a._map.get(t) && (n = "@apply ".concat(t, ";"));
        }), !n) return e;

        var s = this._consumeCssProperties("" + n, r),
            o = e.slice(0, e.indexOf("--")),
            l = this._cssTextToMap(s),
            u = l,
            c = this._map.get(t),
            d = c && c.properties;

        d ? u = Object.assign(Object.create(d), l) : this._map.set(t, u);
        var h,
            p,
            f = [],
            b = !1;

        for (h in u) {
          void 0 === (p = l[h]) && (p = "initial"), !d || h in d || (b = !0), f.push("".concat(t).concat("_-_").concat(h, ": ").concat(p));
        }

        return b && this._invalidateMixinEntry(c), c && (c.properties = u), i && (o = "".concat(e, ";").concat(o)), "".concat(o).concat(f.join("; "), ";");
      }
    }]), e;
  }();

  E.prototype.detectMixin = E.prototype.detectMixin, E.prototype.transformStyle = E.prototype.transformStyle, E.prototype.transformCustomStyle = E.prototype.transformCustomStyle, E.prototype.transformRules = E.prototype.transformRules, E.prototype.transformRule = E.prototype.transformRule, E.prototype.transformTemplate = E.prototype.transformTemplate, E.prototype._separator = "_-_", Object.defineProperty(E.prototype, "invalidCallback", {
    get: function get() {
      return A;
    },
    set: function set(e) {
      A = e;
    }
  });
  var z = E,
      D = {},
      I = "_applyShimCurrentVersion",
      j = "_applyShimNextVersion",
      L = "_applyShimValidatingVersion",
      M = Promise.resolve();

  function R(e) {
    var t = D[e];
    t && function (e) {
      e[I] = e[I] || 0, e[L] = e[L] || 0, e[j] = (e[j] || 0) + 1;
    }(t);
  }

  function F(e) {
    return e[I] === e[j];
  }

  function $(e) {
    return !F(e) && e[L] === e[j];
  }

  function B(e) {
    e[L] = e[j], e._validating || (e._validating = !0, M.then(function () {
      e[I] = e[j], e._validating = !1;
    }));
  }

  i(47);

  var V = new z(),
      U = function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this.customStyleInterface = null, V.invalidCallback = R;
    }

    return babelHelpers.createClass(e, [{
      key: "ensure",
      value: function value() {
        var e = this;
        this.customStyleInterface || (this.customStyleInterface = window.ShadyCSS.CustomStyleInterface, this.customStyleInterface && (this.customStyleInterface.transformCallback = function (e) {
          V.transformCustomStyle(e);
        }, this.customStyleInterface.validateCallback = function () {
          requestAnimationFrame(function () {
            e.customStyleInterface.enqueued && e.flushCustomStyles();
          });
        }));
      }
    }, {
      key: "prepareTemplate",
      value: function value(e, t) {
        if (this.ensure(), !x(e)) {
          D[t] = e;
          var i = V.transformTemplate(e, t);
          e._styleAst = i;
        }
      }
    }, {
      key: "flushCustomStyles",
      value: function value() {
        if (this.ensure(), this.customStyleInterface) {
          var e = this.customStyleInterface.processStyles();

          if (this.customStyleInterface.enqueued) {
            for (var t = 0; t < e.length; t++) {
              var i = e[t],
                  n = this.customStyleInterface.getStyleForCustomStyle(i);
              n && V.transformCustomStyle(n);
            }

            this.customStyleInterface.enqueued = !1;
          }
        }
      }
    }, {
      key: "styleSubtree",
      value: function value(e, t) {
        if (this.ensure(), t && Object(T.c)(e, t), e.shadowRoot) {
          this.styleElement(e);

          for (var i = e.shadowRoot.children || e.shadowRoot.childNodes, n = 0; n < i.length; n++) {
            this.styleSubtree(i[n]);
          }
        } else for (var r = e.children || e.childNodes, a = 0; a < r.length; a++) {
          this.styleSubtree(r[a]);
        }
      }
    }, {
      key: "styleElement",
      value: function value(e) {
        this.ensure();

        var t = function (e) {
          var t = e.localName,
              i = "",
              n = "";
          return t ? t.indexOf("-") > -1 ? i = t : (n = t, i = e.getAttribute && e.getAttribute("is") || "") : (i = e.is, n = e.extends), {
            is: i,
            typeExtension: n
          };
        }(e).is,
            i = D[t];

        if ((!i || !x(i)) && i && !F(i)) {
          $(i) || (this.prepareTemplate(i, t), B(i));
          var n = e.shadowRoot;

          if (n) {
            var r = n.querySelector("style");
            r && (r.__cssRules = i._styleAst, r.textContent = g(i._styleAst));
          }
        }
      }
    }, {
      key: "styleDocument",
      value: function value(e) {
        this.ensure(), this.styleSubtree(document.body, e);
      }
    }]), e;
  }();

  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var q = new U(),
        Z = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
    window.ShadyCSS = {
      prepareTemplate: function prepareTemplate(e, t, i) {
        q.flushCustomStyles(), q.prepareTemplate(e, t);
      },
      prepareTemplateStyles: function prepareTemplateStyles(e, t, i) {
        this.prepareTemplate(e, t, i);
      },
      prepareTemplateDom: function prepareTemplateDom(e, t) {},
      styleSubtree: function styleSubtree(e, t) {
        q.flushCustomStyles(), q.styleSubtree(e, t);
      },
      styleElement: function styleElement(e) {
        q.flushCustomStyles(), q.styleElement(e);
      },
      styleDocument: function styleDocument(e) {
        q.flushCustomStyles(), q.styleDocument(e);
      },
      getComputedStyleValue: function getComputedStyleValue(e, t) {
        return Object(T.b)(e, t);
      },
      flushCustomStyles: function flushCustomStyles() {
        q.flushCustomStyles();
      },
      nativeCss: n.a,
      nativeShadow: n.b
    }, Z && (window.ShadyCSS.CustomStyleInterface = Z);
  }

  window.ShadyCSS.ApplyShim = V;
  var K = i(24),
      Y = i(28),
      W = i(39),
      J = i(1),
      X = /:host\(:dir\((ltr|rtl)\)\)/g,
      G = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,
      Q = [],
      ee = null,
      te = "";

  function ie() {
    te = document.documentElement.getAttribute("dir");
  }

  function ne(e) {
    e.__autoDirOptOut || e.setAttribute("dir", te);
  }

  function re() {
    ie(), te = document.documentElement.getAttribute("dir");

    for (var e = 0; e < Q.length; e++) {
      ne(Q[e]);
    }
  }

  var ae = Object(J.a)(function (e) {
    ee || (ie(), (ee = new MutationObserver(re)).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["dir"]
    }));

    var t = Object(W.a)(e),
        i = function (e) {
      function i() {
        var e;
        return babelHelpers.classCallCheck(this, i), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(i).call(this))).__autoDirOptOut = !1, e;
      }

      return babelHelpers.inherits(i, e), babelHelpers.createClass(i, null, [{
        key: "_processStyleText",
        value: function value(e, t) {
          return e = babelHelpers.get(babelHelpers.getPrototypeOf(i), "_processStyleText", this).call(this, e, t), e = this._replaceDirInCssText(e);
        }
      }, {
        key: "_replaceDirInCssText",
        value: function value(e) {
          var t = e;
          return e !== (t = (t = t.replace(X, ':host([dir="$1"])')).replace(G, ':host([dir="$2"]) $1')) && (this.__activateDir = !0), t;
        }
      }]), babelHelpers.createClass(i, [{
        key: "ready",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "ready", this).call(this), this.__autoDirOptOut = this.hasAttribute("dir");
        }
      }, {
        key: "connectedCallback",
        value: function value() {
          t.prototype.connectedCallback && babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "connectedCallback", this).call(this), this.constructor.__activateDir && (ee && ee.takeRecords().length && re(), Q.push(this), ne(this));
        }
      }, {
        key: "disconnectedCallback",
        value: function value() {
          if (t.prototype.disconnectedCallback && babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "disconnectedCallback", this).call(this), this.constructor.__activateDir) {
            var e = Q.indexOf(this);
            e > -1 && Q.splice(e, 1);
          }
        }
      }]), i;
    }(t);

    return i.__activateDir = !1, i;
  });
  i(54);

  function se() {
    document.body.removeAttribute("unresolved");
  }

  "interactive" === document.readyState || "complete" === document.readyState ? se() : window.addEventListener("DOMContentLoaded", se);
  var oe = i(2),
      le = i(10),
      ue = i(19),
      ce = i(8),
      de = i(3);
  i.d(t, "a", function () {
    return pe;
  });
  var he = window.ShadyCSS,
      pe = Object(J.a)(function (e) {
    var t = ae(Object(Y.a)(Object(K.a)(e))),
        i = {
      x: "pan-x",
      y: "pan-y",
      none: "none",
      all: "auto"
    },
        n = function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).isAttached, e.__boundListeners, e._debouncers, e._applyListeners(), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "created",
        value: function value() {}
      }, {
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this.isAttached = !0, this.attached();
        }
      }, {
        key: "attached",
        value: function value() {}
      }, {
        key: "disconnectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this.isAttached = !1, this.detached();
        }
      }, {
        key: "detached",
        value: function value() {}
      }, {
        key: "attributeChangedCallback",
        value: function value(e, i, n, r) {
          i !== n && (babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "attributeChangedCallback", this).call(this, e, i, n, r), this.attributeChanged(e, i, n));
        }
      }, {
        key: "attributeChanged",
        value: function value(e, t, i) {}
      }, {
        key: "_initializeProperties",
        value: function value() {
          var e = Object.getPrototypeOf(this);
          e.hasOwnProperty("__hasRegisterFinished") || (e.__hasRegisterFinished = !0, this._registered()), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_initializeProperties", this).call(this), this.root = this, this.created();
        }
      }, {
        key: "_registered",
        value: function value() {}
      }, {
        key: "ready",
        value: function value() {
          this._ensureAttributes(), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "ready", this).call(this);
        }
      }, {
        key: "_ensureAttributes",
        value: function value() {}
      }, {
        key: "_applyListeners",
        value: function value() {}
      }, {
        key: "serialize",
        value: function value(e) {
          return this._serializeValue(e);
        }
      }, {
        key: "deserialize",
        value: function value(e, t) {
          return this._deserializeValue(e, t);
        }
      }, {
        key: "reflectPropertyToAttribute",
        value: function value(e, t, i) {
          this._propertyToAttribute(e, t, i);
        }
      }, {
        key: "serializeValueToAttribute",
        value: function value(e, t, i) {
          this._valueToNodeAttribute(i || this, e, t);
        }
      }, {
        key: "extend",
        value: function value(e, t) {
          if (!e || !t) return e || t;

          for (var i, n = Object.getOwnPropertyNames(t), r = 0; r < n.length && (i = n[r]); r++) {
            var a = Object.getOwnPropertyDescriptor(t, i);
            a && Object.defineProperty(e, i, a);
          }

          return e;
        }
      }, {
        key: "mixin",
        value: function value(e, t) {
          for (var i in t) {
            e[i] = t[i];
          }

          return e;
        }
      }, {
        key: "chainObject",
        value: function value(e, t) {
          return e && t && e !== t && (e.__proto__ = t), e;
        }
      }, {
        key: "instanceTemplate",
        value: function value(e) {
          var t = this.constructor._contentForTemplate(e);

          return document.importNode(t, !0);
        }
      }, {
        key: "fire",
        value: function value(e, t, i) {
          i = i || {}, t = null === t || void 0 === t ? {} : t;
          var n = new Event(e, {
            bubbles: void 0 === i.bubbles || i.bubbles,
            cancelable: Boolean(i.cancelable),
            composed: void 0 === i.composed || i.composed
          });
          return n.detail = t, (i.node || this).dispatchEvent(n), n;
        }
      }, {
        key: "listen",
        value: function value(e, t, i) {
          e = e || this;
          var n = this.__boundListeners || (this.__boundListeners = new WeakMap()),
              r = n.get(e);
          r || (r = {}, n.set(e, r));
          var a = t + i;
          r[a] || (r[a] = this._addMethodEventListenerToNode(e, t, i, this));
        }
      }, {
        key: "unlisten",
        value: function value(e, t, i) {
          e = e || this;

          var n = this.__boundListeners && this.__boundListeners.get(e),
              r = t + i,
              a = n && n[r];

          a && (this._removeEventListenerFromNode(e, t, a), n[r] = null);
        }
      }, {
        key: "setScrollDirection",
        value: function value(e, t) {
          Object(le.d)(t || this, i[e] || "auto");
        }
      }, {
        key: "$$",
        value: function value(e) {
          return this.root.querySelector(e);
        }
      }, {
        key: "distributeContent",
        value: function value() {
          window.ShadyDOM && this.shadowRoot && ShadyDOM.flush();
        }
      }, {
        key: "getEffectiveChildNodes",
        value: function value() {
          return Object(oe.a)(this).getEffectiveChildNodes();
        }
      }, {
        key: "queryDistributedElements",
        value: function value(e) {
          return Object(oe.a)(this).queryDistributedElements(e);
        }
      }, {
        key: "getEffectiveChildren",
        value: function value() {
          return this.getEffectiveChildNodes().filter(function (e) {
            return e.nodeType === Node.ELEMENT_NODE;
          });
        }
      }, {
        key: "getEffectiveTextContent",
        value: function value() {
          for (var e, t = this.getEffectiveChildNodes(), i = [], n = 0; e = t[n]; n++) {
            e.nodeType !== Node.COMMENT_NODE && i.push(e.textContent);
          }

          return i.join("");
        }
      }, {
        key: "queryEffectiveChildren",
        value: function value(e) {
          var t = this.queryDistributedElements(e);
          return t && t[0];
        }
      }, {
        key: "queryAllEffectiveChildren",
        value: function value(e) {
          return this.queryDistributedElements(e);
        }
      }, {
        key: "getContentChildNodes",
        value: function value(e) {
          var t = this.root.querySelector(e || "slot");
          return t ? Object(oe.a)(t).getDistributedNodes() : [];
        }
      }, {
        key: "getContentChildren",
        value: function value(e) {
          return this.getContentChildNodes(e).filter(function (e) {
            return e.nodeType === Node.ELEMENT_NODE;
          });
        }
      }, {
        key: "isLightDescendant",
        value: function value(e) {
          return this !== e && this.contains(e) && this.getRootNode() === e.getRootNode();
        }
      }, {
        key: "isLocalDescendant",
        value: function value(e) {
          return this.root === e.getRootNode();
        }
      }, {
        key: "scopeSubtree",
        value: function value(e, t) {}
      }, {
        key: "getComputedStyleValue",
        value: function value(e) {
          return he.getComputedStyleValue(this, e);
        }
      }, {
        key: "debounce",
        value: function value(e, t, i) {
          return this._debouncers = this._debouncers || {}, this._debouncers[e] = ue.a.debounce(this._debouncers[e], i > 0 ? ce.c.after(i) : ce.b, t.bind(this));
        }
      }, {
        key: "isDebouncerActive",
        value: function value(e) {
          this._debouncers = this._debouncers || {};
          var t = this._debouncers[e];
          return !(!t || !t.isActive());
        }
      }, {
        key: "flushDebouncer",
        value: function value(e) {
          this._debouncers = this._debouncers || {};
          var t = this._debouncers[e];
          t && t.flush();
        }
      }, {
        key: "cancelDebouncer",
        value: function value(e) {
          this._debouncers = this._debouncers || {};
          var t = this._debouncers[e];
          t && t.cancel();
        }
      }, {
        key: "async",
        value: function value(e, t) {
          return t > 0 ? ce.c.run(e.bind(this), t) : ~ce.b.run(e.bind(this));
        }
      }, {
        key: "cancelAsync",
        value: function value(e) {
          e < 0 ? ce.b.cancel(~e) : ce.c.cancel(e);
        }
      }, {
        key: "create",
        value: function value(e, t) {
          var i = document.createElement(e);
          if (t) if (i.setProperties) i.setProperties(t);else for (var n in t) {
            i[n] = t[n];
          }
          return i;
        }
      }, {
        key: "elementMatches",
        value: function value(e, t) {
          return Object(oe.b)(t || this, e);
        }
      }, {
        key: "toggleAttribute",
        value: function value(e, t) {
          var i = this;
          return 3 === arguments.length && (i = arguments[2]), 1 == arguments.length && (t = !i.hasAttribute(e)), t ? (i.setAttribute(e, ""), !0) : (i.removeAttribute(e), !1);
        }
      }, {
        key: "toggleClass",
        value: function value(e, t, i) {
          i = i || this, 1 == arguments.length && (t = !i.classList.contains(e)), t ? i.classList.add(e) : i.classList.remove(e);
        }
      }, {
        key: "transform",
        value: function value(e, t) {
          (t = t || this).style.webkitTransform = e, t.style.transform = e;
        }
      }, {
        key: "translate3d",
        value: function value(e, t, i, n) {
          n = n || this, this.transform("translate3d(" + e + "," + t + "," + i + ")", n);
        }
      }, {
        key: "arrayDelete",
        value: function value(e, t) {
          var i;

          if (Array.isArray(e)) {
            if ((i = e.indexOf(t)) >= 0) return e.splice(i, 1);
          } else if ((i = Object(de.a)(this, e).indexOf(t)) >= 0) return this.splice(e, i, 1);

          return null;
        }
      }, {
        key: "_logger",
        value: function value(e, t) {
          var i;

          switch (Array.isArray(t) && 1 === t.length && Array.isArray(t[0]) && (t = t[0]), e) {
            case "log":
            case "warn":
            case "error":
              (i = console)[e].apply(i, babelHelpers.toConsumableArray(t));
          }
        }
      }, {
        key: "_log",
        value: function value() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
            t[i] = arguments[i];
          }

          this._logger("log", t);
        }
      }, {
        key: "_warn",
        value: function value() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
            t[i] = arguments[i];
          }

          this._logger("warn", t);
        }
      }, {
        key: "_error",
        value: function value() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
            t[i] = arguments[i];
          }

          this._logger("error", t);
        }
      }, {
        key: "_logf",
        value: function value(e) {
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
            i[n - 1] = arguments[n];
          }

          return ["[%s::%s]", this.is, e].concat(i);
        }
      }, {
        key: "domHost",
        get: function get() {
          var e = this.getRootNode();
          return e instanceof DocumentFragment ? e.host : e;
        }
      }], [{
        key: "importMeta",
        get: function get() {
          return this.prototype.importMeta;
        }
      }]), t;
    }(t);

    return n.prototype.is = "", n;
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return y;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(15),
      o = i(7),
      l = i(9),
      u = i(18),
      c = (i(35), i(30)),
      d = i(23);

  function h() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", " ", ""]);
    return h = function h() {
      return e;
    }, e;
  }

  function p() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="calendar" tabindex><div id="top"><button class="icon switch" prop$="[[_computeIncremPropTop(_partsDisabled.month, clamp)]]" step="-1" style="order:0" disabled$="[[_partsDisabled.year]]">', '</button> <select id="monthSelector" hidden$="[[_ifClamped(clamp, \'month\')]]" style="order:[[_computeOrderMonth(dateOrder) ]]" disabled$="[[_partsDisabled.month]]" value="{{month::change}}"><option value="1"></option><option value="2"></option><option value="3"></option><option value="4"></option><option value="5"></option><option value="6"></option><option value="7"></option><option value="8"></option><option value="9"></option><option value="10"></option><option value="11"></option><option value="12"></option></select><integer-input id="yearSelector" style="order:[[_computeOrderMonth(dateOrder, \'true\') ]]" pad-length="4" disabled="[[_partsDisabled.year]]" start-at="[[_getDefaultForProp(\'year\')]]" placeholder="[[_getDefaultForProp(\'year\')]]" value="{{year}}"></integer-input><button class="icon switch" prop$="[[_computeIncremPropTop(_partsDisabled.month, clamp)]]" step="1" style="order:3" disabled$="[[_partsDisabled.year]]">', '</button></div><div id="daySelector" hidden$="[[_ifClamped(clamp, \'day\')]]" disabled$="[[_partsDisabled.day]]" tabindex="0" on-keydown="_checkKeycodeForDates"><div id="caption"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div id="days" on-touchstart="_onClickDay" on-click="_onClickDay" on-mousemove="_onMouseMoveDay"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>']);
    return p = function p() {
      return e;
    }, e;
  }

  function f() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return f = function f() {
      return e;
    }, e;
  }

  function b() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", "<style>#calendar{color:var(--input-picker-color);background-color:var(--input-picker-background);border-radius:var(--input-picker-border-radius);padding:var(--input-picker-padding);@apply --input-picker;display:inline-flex;flex-flow:column nowrap;@apply --calendar-element;}#calendar #top{display:inline-flex;flex-flow:row nowrap;align-items:stretch;align-self:stretch}#calendar #monthSelector{flex:1 0 auto;--inner-input-color:var(--input-picker-color, inherit);--inner-input-border-style:solid;--inner-input-focus-border-style:solid}#calendar #monthSelector option{color:var(--inner-input-focus-color,currentColor);background:var(--inner-input-focus-background,rgba(0,0,0,.1));text-align:center}#calendar #yearSelector{font-weight:700;flex:0 0 auto;--input-color:var(--inner-input-color, var(--input-picker-color, inherit));--input-border-style:solid;--input-focus-border-style:solid;--input-padding:var(--inner-input-padding, 0.5em);align-self:stretch}#calendar #daySelector{display:inline-block;position:relative}#calendar #daySelector:focus{outline:0}#calendar #caption{display:inline-flex;flex-flow:row nowrap}#calendar #caption>*,#calendar #days>*{@apply --calendar-cell;-webkit-background-clip:padding-box;color:inherit;background-clip:padding-box;line-height:normal;float:left;position:relative;font-size:var(--calendar-cell-font-size,.75em);border-radius:var(--calendar-cell-border-radius,.3em);min-width:2ch;min-height:1em;box-sizing:content-box;background-color:transparent;transition-property:background-color;transition-duration:var(--input-transition-duration,250ms);transition-timing-function:var(--input-transition-timing-function,cubic-bezier(.6,1,.2,1));width:var(--calendar-cell-size,3em)}#calendar #days>*{height:var(--calendar-cell-size,3em)}#calendar #caption>*{height:var(--calendar-caption-height,2em)}#calendar #days>:nth-child(7n+1){clear:left}#calendar #days>:before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;border-radius:inherit;border:thin solid transparent;transition-property:opacity;transition-duration:var(--input-transition-duration,250ms);transition-timing-function:var(--input-transition-timing-function,cubic-bezier(.6,1,.2,1))}#calendar #caption>:after,#calendar #days>:after{content:attr(data-day);color:currentColor;position:absolute;white-space:nowrap;opacity:1;top:50%;right:50%;transform:translate(50%,-50%)}#calendar #daySelector :nth-child(7n):after,#calendar #daySelector :nth-child(7n-1):after{opacity:var(--calendar-cell-weekend-opacity,1)}#calendar #daySelector[disabled] #days{font-style:var(--input-disabled-font-style,oblique);opacity:var(--input-disabled-opacity,.75)}#calendar #days{cursor:pointer}#calendar #days>:hover{will-change:background-color;background-color:var(--calendar-cell-hovered-background,transparent)}#calendar #daySelector:not([disabled]) .selected{background-color:var(--inner-input-focus-background);color:var(--inner-input-focus-color)}#calendar #days>:hover:before{will-change:opacity,border-color;border-color:var(--calendar-cell-hovered-border-color,currentColor);opacity:.5}#calendar #days>.active:before,#calendar #days>.current:before{opacity:.5;border-color:currentColor}#calendar #daySelector:focus .active:before,#calendar #days>.selected:before,:host(:hover) #calendar #days>.active:before{border-color:var(--inner-input-focus-background)}#calendar #days>.active:hover:before,:host(:hover) #calendar #days>.active:before{opacity:.75}#calendar #days>.active:before{transition-duration:0}#calendar #days>.selected:before{opacity:.9}#calendar #days>.notinmonth:after{opacity:var(--calendar-cell-notinmonth-opacity,.6)}#calendar #days>.outofrange{pointer-events:none!important}#calendar #days>.outofrange:after{opacity:.5}#calendar #days>.outofrange:before{opacity:.25}#calendar #days>.outofrange:not(.notinmonth):after{font-style:var(--input-disabled-font-style,oblique)}#calendar #days>.outofrange:after{opacity:.5;@apply --input-disabled;}</style>"]);
    return b = function b() {
      return e;
    }, e;
  }

  var m = function m(e) {
    return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
  },
      v = function v(e, t) {
    return Math.ceil((e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
  },
      y = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this.renderCalendar(this.year, this.month, this.day);
        }
      }, {
        key: "_computeOrderMonth",
        value: function value(e, t) {
          if (e && e.parts) return e.parts.indexOf("month") < e.parts.indexOf("year") ? t ? 2 : 1 : t ? 1 : 2;
        }
      }, {
        key: "_onMouseMoveDay",
        value: function value(e) {
          if (e) for (var t = e.path || [e.target], i = 0; i < t.length; i++) {
            if (t[i].dataset && t[i].dataset.day) return void (t[i] !== this.currentHoveredDayNode && this._setCurrentHoveredDayNode(t[i]));
          }

          this._setCurrentHoveredDayNode(null);
        }
      }, {
        key: "_onClickDay",
        value: function value(e) {
          var t = this;

          if (this._onMouseMoveDay(e), this.currentHoveredDayNode) {
            if (this.currentActiveDayNode && !0 === this._dayDblClicked) return this._setCurrentSelectedDayNode(this.currentActiveDayNode), this._dayDblClicked = !1, void (this.confirm && this.confirm());
            this._setCurrentActiveDayNode(this.currentHoveredDayNode), this._dayDblClicked = !0, setTimeout(function () {
              t._dayDblClicked = !1;
            }, 500);
          }
        }
      }, {
        key: "_currentActiveDayNodeChanged",
        value: function value(e, t) {
          if (t && t.classList.remove("active"), e) {
            if (e.classList.add("active"), this.__updatingTimezoneOffset) return;

            this._computeDatetime(+e.dataset.year, +e.dataset.month, +e.dataset.day, this.hour, this.minute, this.second, this.millisecond);
          }
        }
      }, {
        key: "_currentSelectedDayNodeChanged",
        value: function value(e, t) {
          t && t.classList.remove("selected"), e && (e.classList.add("selected"), this.__lastSelectedDay = [+e.dataset.year, +e.dataset.month - 1, +e.dataset.day]);
        }
      }, {
        key: "_computeIncremPropTop",
        value: function value(e) {
          return !0 === e ? "year" : "month";
        }
      }, {
        key: "_setWeekDayCaptions",
        value: function value(e, t) {
          if (e) for (var i = 0; i < 7; i++) {
            var n = new Date(Date.UTC(2e3, 0, 1 + i)),
                r = ((n.getUTCDay() - (t || 0)) % 7 + 7) % 7;
            this.$.caption.children[r] && (this.$.caption.children[r].dataset.day = n.toLocaleDateString(e, {
              timeZone: "UTC",
              weekday: "short"
            }));
          }
        }
      }, {
        key: "_setMonthSelectorOptions",
        value: function value(e) {
          if (e) for (var t = 0; t < 12; t++) {
            this.$.monthSelector.options[t].text = new Date(1970, t, 15).toLocaleDateString(e, {
              month: "long"
            });
          }
        }
      }, {
        key: "renderCalendar",
        value: function value(e, t, i) {
          var n = m(this._checkThreshold(new Date())),
              r = void 0 !== e && void 0 !== t && void 0 !== i ? new Date(e, +t - 1, i) : void 0;
          isNaN(r) ? (e = n.getFullYear(), t = n.getMonth() + 1) : (r.setFullYear(e), e = (r = m(this._checkThreshold(r))).getFullYear(), t = r.getMonth() + 1);
          var a = this.__lastSelectedDay ? new (Date.bind.apply(Date, [null].concat(this.__lastSelectedDay)))() : void 0;
          isNaN(a) || (a = m(this._checkThreshold(a)));
          var s = new Date(e, t - 1, 0);
          s.setFullYear(t <= 1 ? e - 1 : e);
          var o,
              l,
              u = s.getDate(),
              c = +new Date(new Date(e, t, 0).setFullYear(e)).getDate(),
              d = ((s.getDay() + 1 - (this.firstDayOfWeek || 0)) % 7 + 7) % 7 - 1,
              h = v(n, s) + d,
              p = isNaN(r) ? void 0 : v(r, s) + d,
              f = isNaN(a) ? void 0 : v(a, s) + d;
          this._minValue && (o = v(m(new Date(this._minValue)), s) + d), this._maxValue && (l = v(m(new Date(this._maxValue)), s) + d);

          for (var b = -d, y = 0; y < 42; y++, b++) {
            b <= 0 ? (t > 1 ? (this.$.days.children[y].dataset.year = e, this.$.days.children[y].dataset.month = t - 1) : (this.$.days.children[y].dataset.year = e - 1, this.$.days.children[y].dataset.month = 12), this.$.days.children[y].dataset.day = u + b, this.$.days.children[y].classList.add("notinmonth")) : b > c ? (t < 12 ? (this.$.days.children[y].dataset.year = e, this.$.days.children[y].dataset.month = t + 1) : (this.$.days.children[y].dataset.year = e + 1, this.$.days.children[y].dataset.month = 1), this.$.days.children[y].dataset.day = b - c, this.$.days.children[y].classList.add("notinmonth")) : (this.$.days.children[y].dataset.year = e, this.$.days.children[y].dataset.month = t, this.$.days.children[y].dataset.day = b, this.$.days.children[y].classList.remove("notinmonth")), this.$.days.children[y].classList.remove("current"), this.$.days.children[y].classList.remove("min"), this.$.days.children[y].classList.remove("max"), y < o || y > l ? this.$.days.children[y].classList.add("outofrange") : this.$.days.children[y].classList.remove("outofrange");
          }

          this.$.days.children[h] && this.$.days.children[h].classList.add("current"), !isNaN(f) && this.$.days.children[f] ? this._setCurrentSelectedDayNode(this.$.days.children[f]) : this._setCurrentSelectedDayNode(null), !isNaN(p) && this.$.days.children[p] && this._setCurrentActiveDayNode(this.$.days.children[p]), !isNaN(o) && this.$.days.children[o] && this.$.days.children[o].classList.add("min"), !isNaN(l) && this.$.days.children[l] && this.$.days.children[l].classList.add("max"), this.$.monthSelector.selectedIndex = t - 1, this.$.yearSelector.input = e;
        }
      }, {
        key: "_minChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_minChanged", this).call(this, e), this.renderCalendar(this.year, this.month, this.day);
        }
      }, {
        key: "_maxChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_maxChanged", this).call(this, e), this.renderCalendar(this.year, this.month, this.day);
        }
      }, {
        key: "_checkKeycodeForDates",
        value: function value(e) {
          if (e && e.keyCode) switch (e.keyCode) {
            case 13:
            case 32:
              return this.currentActiveDayNode && this._setCurrentSelectedDayNode(this.currentActiveDayNode), void e.stopPropagation();

            case 27:
              return void (this.__lastSelectedDay && this._computeDatetime(this.__lastSelectedDay[0], this.__lastSelectedDay[1] + 1, this.__lastSelectedDay[2], this.hour, this.minute, this.second, this.millisecond));

            case 37:
            case 38:
            case 39:
            case 40:
              var t,
                  i,
                  n,
                  r = this.currentActiveDayNode || this.currentSelectedDayNode || this.currentHoveredDayNode;

              switch (r ? (t = +r.dataset.year, i = +r.dataset.month, n = +r.dataset.day) : (t = +this.$.yearSelector.input, i = +this.$.monthSelector.selectedIndex + 1, n = new Date().getDate()), e.keyCode) {
                case 37:
                  for (n -= this._partsStep.day; n < 1;) {
                    --i < 1 && (i = 12, t--), n = Object(o.c)(t, i) - n;
                  }

                  break;

                case 39:
                  var a;

                  for (n += this._partsStep.day; n > (a = Object(o.c)(t, i));) {
                    ++i > 12 && (i = 1, t++), n -= a;
                  }

                  break;

                case 38:
                  --i < 1 && (i = 12, t--), n = Math.min(n, Object(o.c)(t, i));
                  break;

                case 40:
                  ++i > 12 && (i = 1, t++), n > Object(o.c)(t, i) && (n = 1);
              }

              return this.renderCalendar(t, i, n), e.preventDefault(), void e.stopPropagation();
          }
        }
      }, {
        key: "_getDefaultForProp",
        value: function value(e) {
          var t = this._defaultValue && new Date(this._defaultValue) || new Date();

          switch (e) {
            case "year":
              return t.getFullYear();

            case "month":
              return t.getMonth() + 1;

            default:
              return 0;
          }
        }
      }], [{
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(b(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(r.a)(f()), d.a);
        }
      }, {
        key: "calendarTemplate",
        get: function get() {
          return Object(r.a)(p(), this._iconStepLeftTemplate, this._iconStepRightTemplate);
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            firstDayOfWeek: {
              type: Number,
              value: 1
            },
            currentHoveredDayNode: {
              type: Node,
              readOnly: !0,
              notify: !0
            },
            currentActiveDayNode: {
              type: Node,
              readOnly: !0,
              notify: !0,
              observer: "_currentActiveDayNodeChanged"
            },
            currentSelectedDayNode: {
              type: Node,
              readOnly: !0,
              notify: !0,
              observer: "_currentSelectedDayNodeChanged"
            },
            clamp: {
              type: String,
              value: "hour",
              notify: !0
            },
            _timeOnly: {
              type: Boolean,
              value: !1
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["renderCalendar(year, month, day)", "_setWeekDayCaptions(locale, firstDayOfWeek)", "_setMonthSelectorOptions(locale)"];
        }
      }]), t;
    }(e);
  }),
      g = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "calendar-element";
      }
    }, {
      key: "template",
      get: function get() {
        return Object(r.a)(h(), c.a, this.styleTemplate, this.calendarTemplate);
      }
    }]), t;
  }(y(Object(u.a)(Object(l.a)(Object(s.a)(Object(o.a)(n.a))))));

  customElements.get(g.is) || customElements.define(g.is, g);
}, function (e, t, i) {
  "use strict";

  var n = i(4),
      r = i(1),
      a = i(50),
      s = i(42),
      o = i(43),
      l = i(44),
      u = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "integer-input";
      }
    }]), t;
  }(Object(r.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeMinimumFractionDigits",
        value: function value() {
          return 0;
        }
      }, {
        key: "_safeAdd",
        value: function value(e, t) {
          return e + t;
        }
      }, {
        key: "_safeMult",
        value: function value(e, t) {
          return e * t;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            step: {
              type: Number,
              value: 1,
              observer: "_stepChanged"
            },
            maximumFractionDigits: {
              type: Number,
              readOnly: !0,
              value: 0
            }
          };
        }
      }]), t;
    }(e);
  })(Object(a.a)(Object(l.a)(Object(s.a)(Object(o.a)(n.a))))));

  customElements.get(u.is) || customElements.define(u.is, u);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return h;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(15),
      o = i(7),
      l = i(9);
  i(35);

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["", '<div id="input">', "</div>"]);
    return u = function u() {
      return e;
    }, e;
  }

  function c() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return c = function c() {
      return e;
    }, e;
  }

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(["<div class=\"date part\" style$=\"order:[[_computePartOrder(dateOrder.dateFirst)]];\" tabindex><integer-input id=\"year\" value-as-number=\"{{year}}\" pad-length=\"4\" placeholder=\"\u2212\u2212\u2212\u2212\" disabled=\"[[_partsDisabled.year]]\" start-at=\"[[_getDefaultForProp('year')]]\"></integer-input><span id=\"dateSeparator1\">[[dateSeparator]]</span><integer-input id=\"month\" value-as-number=\"{{month}}\" min=\"0\" max=\"13\" pad-length=\"2\" placeholder=\"\u2212\u2212\" disabled=\"[[_partsDisabled.month]]\" start-at=\"[[_getDefaultForProp('month')]]\"></integer-input><span id=\"dateSeparator2\">[[dateSeparator]]</span><integer-input id=\"day\" max=\"[[_computeMaxForDayInput(year, month)]]\" value-as-number=\"{{day}}\" min=\"0\" no-clamp pad-length=\"2\" placeholder=\"\u2212\u2212\" step=\"[[_partsStep.day]]\" disabled=\"[[_partsDisabled.day]]\" start-at=\"1\"></integer-input></div>", ""]);
    return d = function d() {
      return e;
    }, e;
  }

  var h = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_orderDateParts",
        value: function value(e, t) {
          if (void 0 !== e) {
            var i = this._ifClamped(t, e.parts[0]),
                n = 0;

            i ? (this.$[e.parts[0]].setAttribute("hidden", ""), this.$.dateSeparator1.setAttribute("hidden", ""), n++) : (this.$[e.parts[0]].removeAttribute("hidden"), this.$.dateSeparator1.removeAttribute("hidden")), (i = this._ifClamped(t, e.parts[1])) ? (this.$[e.parts[1]].setAttribute("hidden", ""), n++) : this.$[e.parts[1]].removeAttribute("hidden"), (i = this._ifClamped(t, e.parts[2])) ? (this.$[e.parts[2]].setAttribute("hidden", ""), this.$.dateSeparator2.setAttribute("hidden", ""), n++) : (this.$[e.parts[2]].removeAttribute("hidden"), this.$.dateSeparator2.removeAttribute("hidden")), n > 1 && (this.$.dateSeparator1.setAttribute("hidden", ""), this.$.dateSeparator2.setAttribute("hidden", ""));
            var r = this.shadowRoot.querySelector(".date.part");
            r.appendChild(this.$[e.parts[0]]), r.appendChild(this.$.dateSeparator1), r.appendChild(this.$[e.parts[1]]), r.appendChild(this.$.dateSeparator2), r.appendChild(this.$[e.parts[2]]), this.$[e.parts[2]].hasAttribute("hidden") && this.$.dateSeparator2.setAttribute("hidden", "");
          }
        }
      }, {
        key: "_getDefaultForProp",
        value: function value(e) {
          var t = this._defaultValue && new Date(this._defaultValue) || new Date();

          switch (e) {
            case "year":
              return t.getFullYear();

            case "month":
              return t.getMonth() + 1;

            default:
              return 0;
          }
        }
      }, {
        key: "_computeMaxForDayInput",
        value: function value(e, t) {
          if (void 0 !== e && void 0 !== t) return Object(o.c)(e, t) + 1;
        }
      }], [{
        key: "inputTemplate",
        get: function get() {
          return Object(r.a)(d(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "inputTemplate", this) || Object(r.a)(c()));
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            clamp: {
              type: String,
              value: "hour",
              notify: !0
            },
            _timeOnly: {
              type: Boolean,
              value: !1
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_orderDateParts(dateOrder, clamp)"];
        }
      }]), t;
    }(e);
  }),
      p = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "date-input";
      }
    }, {
      key: "template",
      get: function get() {
        return Object(r.a)(u(), this.styleTemplate, this.inputTemplate);
      }
    }]), t;
  }(h(Object(l.b)(Object(l.a)(Object(s.a)(Object(o.a)(n.a))))));

  customElements.get(p.is) || customElements.define(p.is, p);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return f;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(15),
      o = i(7),
      l = i(9);
  i(35);

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["", '<div id="input">', "</div>"]);
    return u = function u() {
      return e;
    }, e;
  }

  function c() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return c = function c() {
      return e;
    }, e;
  }

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(["", "<style>#input .hour12{font-size:.85em;margin:0 .15em;padding:.1em;align-self:stretch;border-color:transparent}</style>"]);
    return d = function d() {
      return e;
    }, e;
  }

  function h() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return h = function h() {
      return e;
    }, e;
  }

  function p() {
    var e = babelHelpers.taggedTemplateLiteral(['<div class="time part" style$="order:[[_computePartOrder(dateOrder.timeFirst)]];" hidden$="[[_ifClamped(clamp, \'hour\')]]"><integer-input hidden$="[[hour12Format]]" pad-length="2" min="-1" max="24" no-clamp value-as-number="{{hour}}" placeholder="00" disabled$="[[_partsDisabled.hour]]" step="[[_partsStep.hour]]"></integer-input><template is="dom-if" if="[[hour12Format]]"><integer-input pad-length="2" no-clamp value-as-number="{{hour12}}" placeholder="00" min="0" max="13" disabled$="[[_partsDisabled.hour]]" step="[[_partsStep.hour]]"></integer-input></template><span hidden$="[[_ifClamped(clamp, \'minute\')]]">[[timeSeparator]]</span><integer-input hidden$="[[_ifClamped(clamp, \'minute\')]]" value-as-number="{{minute}}" min="-1" max="60" pad-length="2" no-clamp step="[[_partsStep.minute]]" disabled="[[_partsDisabled.minute]]" placeholder="00"></integer-input><span hidden$="[[_ifClamped(clamp, \'second\')]]">[[timeSeparator]]</span><integer-input hidden$="[[_ifClamped(clamp, \'second\')]]" pad-length="2" min="-1" max="60" no-clamp step="[[_partsStep.second]]" disabled="[[_partsDisabled.second]]" value-as-number="{{second}}" placeholder="00"></integer-input><span hidden$="[[_ifClamped(clamp, \'millisecond\')]]">[[decimalSeparator]]</span><integer-input hidden$="[[_ifClamped(clamp, \'millisecond\')]]" value-as-number="{{millisecond}}" min="0" max="999" pad-length="3" no-clamp step="[[_partsStep.millisecond]]" disabled="[[_partsDisabled.millisecond]]" placeholder="000"></integer-input><template is="dom-if" if="[[hour12Format]]"><button class="hour12" on-click="_switchAm" hidden$="[[!valueIsSet]]"><div hidden$="[[!isAm]]">[[amString]]</div><div hidden$="[[isAm]]">[[pmString]]</div></button></template></div>', ""]);
    return p = function p() {
      return e;
    }, e;
  }

  var f = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_switchAm",
        value: function value() {
          this.isAm = !this.isAm;
        }
      }], [{
        key: "inputTemplate",
        get: function get() {
          return Object(r.a)(p(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "inputTemplate", this) || Object(r.a)(h()));
        }
      }, {
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(d(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(r.a)(c()));
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            clamp: {
              type: String,
              value: "",
              notify: !0
            },
            _timeOnly: {
              type: Boolean,
              value: !0
            }
          };
        }
      }]), t;
    }(e);
  }),
      b = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "time-input";
      }
    }, {
      key: "template",
      get: function get() {
        return Object(r.a)(u(), this.styleTemplate, this.inputTemplate);
      }
    }]), t;
  }(f(Object(l.b)(Object(l.a)(Object(s.a)(Object(o.a)(n.a))))));

  customElements.get(b.is) || customElements.define(b.is, b);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return m;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(15),
      o = i(7),
      l = i(9),
      u = i(18),
      c = (i(35), i(30)),
      d = i(23);

  function h() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", " ", ""]);
    return h = function h() {
      return e;
    }, e;
  }

  function p() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="timer" hidden$="[[_ifClamped(clamp, \'hour\')]]"><div class="field"><button class="icon switch" prop="hour" step$="[[_partsStep.hour]]" disabled$="[[_partsDisabled.hour]]">', '</button><integer-input hidden$="[[hour12Format]]" pad-length="2" no-clamp min="-1" max="24" value-as-number="{{hour}}" placeholder="00" disabled$="[[_partsDisabled.hour]]" step="[[_partsStep.hour]]"></integer-input><template is="dom-if" if="[[hour12Format]]"><integer-input pad-length="2" no-clamp value-as-number="{{hour12}}" min="0" max="13" placeholder="00" disabled$="[[_partsDisabled.hour]]" step="[[_partsStep.hour]]"></integer-input></template><button class="icon switch" prop="hour" step$="[[_partsStep.hour]]" disabled$="[[_partsDisabled.hour]]" invert>', '</button></div><span hidden$="[[_ifClamped(clamp, \'minute\')]]">[[timeSeparator]]</span><div class="field" hidden$="[[_ifClamped(clamp, \'minute\')]]"><button class="icon switch" prop="minute" step$="[[_partsStep.minute]]" disabled$="[[_partsDisabled.minute]]">', '</button><integer-input pad-length="2" value-as-number="{{minute}}" min="-1" max="60" no-clamp placeholder="00" disabled$="[[_partsDisabled.minute]]" step="[[_partsStep.minute]]"></integer-input><button class="icon switch" prop="minute" step$="[[_partsStep.minute]]" disabled$="[[_partsDisabled.minute]]" invert>', '</button></div><span hidden$="[[_ifClamped(clamp, \'minute\')]]">[[timeSeparator]]</span><div class="field" hidden$="[[_ifClamped(clamp, \'second\')]]"><button class="icon switch" prop="second" step$="[[_partsStep.second]]" disabled$="[[_partsDisabled.second]]">', '</button><integer-input pad-length="2" value-as-number="{{second}}" min="-1" max="60" no-clamp placeholder="00" disabled$="[[_partsDisabled.second]]" step="[[_partsStep.second]]"></integer-input><button class="icon switch" prop="second" step$="[[_partsStep.second]]" disabled$="[[_partsDisabled.second]]" invert>', '</button></div><span hidden$="[[_ifClamped(clamp, \'millisecond\')]]">[[decimalSeparator]]</span><div class="field" hidden$="[[_ifClamped(clamp, \'millisecond\')]]"><button class="icon switch" prop="millisecond" step$="[[_partsStep.millisecond]]" disabled$="[[_partsDisabled.millisecond]]">', '</button><integer-input pad-length="3" value-as-number="{{millisecond}}" min="0" max="999" no-clamp placeholder="000" disabled$="[[_partsDisabled.millisecond]]" step="[[_partsStep.millisecond]]"></integer-input><button class="icon switch" prop="millisecond" step$="[[_partsStep.millisecond]]" disabled$="[[_partsDisabled.millisecond]]" invert>', '</button></div><template is="dom-if" if="[[hour12Format]]"><button class="hour12" disabled$="[[partsHidden.hour]]" on-click="_switchAm" hidden$="[[!valueIsSet]]"><div hidden$="[[!isAm]]">[[amString]]</div><div hidden$="[[isAm]]">[[pmString]]</div></button></template><template is="dom-if" if="[[withTimezone]]"><div class="timezone"><div class="field"><button class="icon switch" prop="_timeZoneHours" step="1" disabled$="[[disabled]]">', '</button><integer-input value="{{_timeZoneHours}}" pad-length="2" always-sign step="1" placeholder="\xb100" min="-23" max="23" use-negative-zero></integer-input><button class="icon switch" prop="_timeZoneHours" step="-1" disabled$="[[disabled]]">', '</button></div><span>[[timeSeparator]]</span><div class="field"><button class="icon switch" prop="_timeZoneMinutes" step="15" disabled$="[[disabled]]">', '</button><integer-input value="{{_timeZoneMinutes}}" pad-length="2" min="0" max="45" step="15" placeholder="00"></integer-input><button class="icon switch" prop="_timeZoneMinutes" step="-15" disabled$="[[disabled]]">', "</button></div></div></template></div>"]);
    return p = function p() {
      return e;
    }, e;
  }

  function f() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return f = function f() {
      return e;
    }, e;
  }

  function b() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", "<style>:host{--computed-reduced-icon-padding:calc(var(--input-icon-padding, 0.5em) / 4)}#timer{color:var(--input-picker-color);background-color:var(--input-picker-background);border-radius:var(--input-picker-border-radius);padding:var(--input-picker-padding);@apply --input-picker;display:inline-flex;flex-flow:row nowrap;align-items:center;@apply --time-element;}#timer .field{display:flex;flex-direction:column;align-items:center}#timer .timezone{display:flex;align-items:center}#timer .buttons{display:flex;flex-direction:column;align-self:stretch;justify-content:space-between}#timer .field>integer-input{--input-color:var(--inner-input-color, var(--input-picker-color));align-self:stretch;justify-content:center}#timer .field>.switch{padding-top:var(--computed-reduced-icon-padding);padding-bottom:var(--computed-reduced-icon-padding)}#timer .field>.switch:first-of-type{border-bottom-left-radius:1px;border-bottom-right-radius:1px}#timer .field>.switch:last-of-type{border-top-left-radius:1px;border-top-right-radius:1px}#timer .hour12{flex-shrink:0;font-size:.85em;margin:0 .15em;padding:.1em;border-color:transparent}</style>"]);
    return b = function b() {
      return e;
    }, e;
  }

  var m = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_switchAm",
        value: function value() {
          this.isAm = !this.isAm;
        }
      }], [{
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(b(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(r.a)(f()), d.a);
        }
      }, {
        key: "timeTemplate",
        get: function get() {
          return Object(r.a)(p(), this._iconStepUpTemplate, this._iconStepDownTemplate, this._iconStepUpTemplate, this._iconStepDownTemplate, this._iconStepUpTemplate, this._iconStepDownTemplate, this._iconStepUpTemplate, this._iconStepDownTemplate, this._iconStepUpTemplate, this._iconStepDownTemplate, this._iconStepUpTemplate, this._iconStepDownTemplate);
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            withTimezone: {
              type: Boolean,
              value: !1
            },
            clamp: {
              type: String,
              value: "",
              notify: !0
            },
            _timeOnly: {
              type: Boolean,
              value: !0
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_addSwitchListener(withTimezone, hour12Format)"];
        }
      }]), t;
    }(e);
  }),
      v = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "time-element";
      }
    }, {
      key: "template",
      get: function get() {
        return Object(r.a)(h(), c.a, this.styleTemplate, this.timeTemplate);
      }
    }]), t;
  }(m(Object(u.a)(Object(l.a)(Object(s.a)(Object(o.a)(n.a))))));

  customElements.get(v.is) || customElements.define(v.is, v);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return c;
  });
  i(5);

  for (var n = i(1), r = i(22), a = i(40), s = {}, o = HTMLElement.prototype; o;) {
    for (var l = Object.getOwnPropertyNames(o), u = 0; u < l.length; u++) {
      s[l[u]] = !0;
    }

    o = Object.getPrototypeOf(o);
  }

  var c = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_initializeProperties",
        value: function value() {
          this.__dataProto && (this._initializeProtoProperties(this.__dataProto), this.__dataProto = null), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_initializeProperties", this).call(this);
        }
      }, {
        key: "_initializeProtoProperties",
        value: function value(e) {
          for (var t in e) {
            this._setProperty(t, e[t]);
          }
        }
      }, {
        key: "_ensureAttribute",
        value: function value(e, t) {
          this.hasAttribute(e) || this._valueToNodeAttribute(this, t, e);
        }
      }, {
        key: "_serializeValue",
        value: function value(e) {
          switch (babelHelpers.typeof(e)) {
            case "object":
              if (e instanceof Date) return e.toString();
              if (e) try {
                return JSON.stringify(e);
              } catch (e) {
                return "";
              }

            default:
              return babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_serializeValue", this).call(this, e);
          }
        }
      }, {
        key: "_deserializeValue",
        value: function value(e, i) {
          var n;

          switch (i) {
            case Object:
              try {
                n = JSON.parse(e);
              } catch (t) {
                n = e;
              }

              break;

            case Array:
              try {
                n = JSON.parse(e);
              } catch (t) {
                n = null, console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(e));
              }

              break;

            case Date:
              n = isNaN(e) ? String(e) : Number(e), n = new Date(n);
              break;

            default:
              n = babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_deserializeValue", this).call(this, e, i);
          }

          return n;
        }
      }, {
        key: "_definePropertyAccessor",
        value: function value(e, i) {
          !function (e, t) {
            if (!s[t]) {
              var i = e[t];
              void 0 !== i && (e.__data ? e._setPendingProperty(t, i) : (e.__dataProto ? e.hasOwnProperty(JSCompiler_renameProperty("__dataProto", e)) || (e.__dataProto = Object.create(e.__dataProto)) : e.__dataProto = {}, e.__dataProto[t] = i));
            }
          }(this, e), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_definePropertyAccessor", this).call(this, e, i);
        }
      }, {
        key: "_hasAccessor",
        value: function value(e) {
          return this.__dataHasAccessor && this.__dataHasAccessor[e];
        }
      }, {
        key: "_isPropertyPending",
        value: function value(e) {
          return Boolean(this.__dataPending && e in this.__dataPending);
        }
      }], [{
        key: "createPropertiesForAttributes",
        value: function value() {
          for (var e = this.observedAttributes, t = 0; t < e.length; t++) {
            this.prototype._createPropertyAccessor(Object(r.b)(e[t]));
          }
        }
      }, {
        key: "attributeNameForProperty",
        value: function value(e) {
          return Object(r.a)(e);
        }
      }]), t;
    }(Object(a.a)(e));
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  i(5);
  var n = i(1),
      r = i(8).b,
      a = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).__dataEnabled = !1, e.__dataReady = !1, e.__dataInvalid = !1, e.__data = {}, e.__dataPending = null, e.__dataOld = null, e.__dataInstanceProps = null, e.__serializing = !1, e._initializeProperties(), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_createPropertyAccessor",
        value: function value(e, t) {
          this._addPropertyToAttributeMap(e), this.hasOwnProperty("__dataHasAccessor") || (this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor)), this.__dataHasAccessor[e] || (this.__dataHasAccessor[e] = !0, this._definePropertyAccessor(e, t));
        }
      }, {
        key: "_addPropertyToAttributeMap",
        value: function value(e) {
          if (this.hasOwnProperty("__dataAttributes") || (this.__dataAttributes = Object.assign({}, this.__dataAttributes)), !this.__dataAttributes[e]) {
            var t = this.constructor.attributeNameForProperty(e);
            this.__dataAttributes[t] = e;
          }
        }
      }, {
        key: "_definePropertyAccessor",
        value: function value(e, t) {
          Object.defineProperty(this, e, {
            get: function get() {
              return this._getProperty(e);
            },
            set: t ? function () {} : function (t) {
              this._setProperty(e, t);
            }
          });
        }
      }], [{
        key: "createProperties",
        value: function value(e) {
          var t = this.prototype;

          for (var i in e) {
            i in t || t._createPropertyAccessor(i);
          }
        }
      }, {
        key: "attributeNameForProperty",
        value: function value(e) {
          return e.toLowerCase();
        }
      }, {
        key: "typeForProperty",
        value: function value(e) {}
      }]), babelHelpers.createClass(t, [{
        key: "ready",
        value: function value() {
          this.__dataReady = !0, this._flushProperties();
        }
      }, {
        key: "_initializeProperties",
        value: function value() {
          for (var e in this.__dataHasAccessor) {
            this.hasOwnProperty(e) && (this.__dataInstanceProps = this.__dataInstanceProps || {}, this.__dataInstanceProps[e] = this[e], delete this[e]);
          }
        }
      }, {
        key: "_initializeInstanceProperties",
        value: function value(e) {
          Object.assign(this, e);
        }
      }, {
        key: "_setProperty",
        value: function value(e, t) {
          this._setPendingProperty(e, t) && this._invalidateProperties();
        }
      }, {
        key: "_getProperty",
        value: function value(e) {
          return this.__data[e];
        }
      }, {
        key: "_setPendingProperty",
        value: function value(e, t, i) {
          var n = this.__data[e],
              r = this._shouldPropertyChange(e, t, n);

          return r && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), !this.__dataOld || e in this.__dataOld || (this.__dataOld[e] = n), this.__data[e] = t, this.__dataPending[e] = t), r;
        }
      }, {
        key: "_invalidateProperties",
        value: function value() {
          var e = this;
          !this.__dataInvalid && this.__dataReady && (this.__dataInvalid = !0, r.run(function () {
            e.__dataInvalid && (e.__dataInvalid = !1, e._flushProperties());
          }));
        }
      }, {
        key: "_enableProperties",
        value: function value() {
          this.__dataEnabled || (this.__dataEnabled = !0, this.__dataInstanceProps && (this._initializeInstanceProperties(this.__dataInstanceProps), this.__dataInstanceProps = null), this.ready());
        }
      }, {
        key: "_flushProperties",
        value: function value() {
          var e = this.__data,
              t = this.__dataPending,
              i = this.__dataOld;
          this._shouldPropertiesChange(e, t, i) && (this.__dataPending = null, this.__dataOld = null, this._propertiesChanged(e, t, i));
        }
      }, {
        key: "_shouldPropertiesChange",
        value: function value(e, t, i) {
          return Boolean(t);
        }
      }, {
        key: "_propertiesChanged",
        value: function value(e, t, i) {}
      }, {
        key: "_shouldPropertyChange",
        value: function value(e, t, i) {
          return i !== t && (i === i || t === t);
        }
      }, {
        key: "attributeChangedCallback",
        value: function value(e, i, n, r) {
          i !== n && this._attributeToProperty(e, n), babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "attributeChangedCallback", this) && babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "attributeChangedCallback", this).call(this, e, i, n, r);
        }
      }, {
        key: "_attributeToProperty",
        value: function value(e, t, i) {
          if (!this.__serializing) {
            var n = this.__dataAttributes,
                r = n && n[e] || e;
            this[r] = this._deserializeValue(t, i || this.constructor.typeForProperty(r));
          }
        }
      }, {
        key: "_propertyToAttribute",
        value: function value(e, t, i) {
          this.__serializing = !0, i = arguments.length < 3 ? this[e] : i, this._valueToNodeAttribute(this, i, t || this.constructor.attributeNameForProperty(e)), this.__serializing = !1;
        }
      }, {
        key: "_valueToNodeAttribute",
        value: function value(e, t, i) {
          var n = this._serializeValue(t);

          void 0 === n ? e.removeAttribute(i) : e.setAttribute(i, n);
        }
      }, {
        key: "_serializeValue",
        value: function value(e) {
          switch (babelHelpers.typeof(e)) {
            case "boolean":
              return e ? "" : void 0;

            default:
              return null != e ? e.toString() : void 0;
          }
        }
      }, {
        key: "_deserializeValue",
        value: function value(e, t) {
          switch (t) {
            case Boolean:
              return null !== e;

            case Number:
              return Number(e);

            default:
              return e;
          }
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return u;
  });
  i(5);

  function n(e, t, i) {
    return {
      index: e,
      removed: t,
      addedCount: i
    };
  }

  var r = 0,
      a = 1,
      s = 2,
      o = 3;

  function l(e, t, i, l, u, d) {
    var h,
        p = 0,
        f = 0,
        b = Math.min(i - t, d - u);
    if (0 == t && 0 == u && (p = function (e, t, i) {
      for (var n = 0; n < i; n++) {
        if (!c(e[n], t[n])) return n;
      }

      return i;
    }(e, l, b)), i == e.length && d == l.length && (f = function (e, t, i) {
      var n = e.length,
          r = t.length,
          a = 0;

      for (; a < i && c(e[--n], t[--r]);) {
        a++;
      }

      return a;
    }(e, l, b - p)), u += p, d -= f, (i -= f) - (t += p) == 0 && d - u == 0) return [];

    if (t == i) {
      for (h = n(t, [], 0); u < d;) {
        h.removed.push(l[u++]);
      }

      return [h];
    }

    if (u == d) return [n(t, [], i - t)];

    var m = function (e) {
      for (var t = e.length - 1, i = e[0].length - 1, n = e[t][i], l = []; t > 0 || i > 0;) {
        if (0 != t) {
          if (0 != i) {
            var u = e[t - 1][i - 1],
                c = e[t - 1][i],
                d = e[t][i - 1],
                h = void 0;
            (h = c < d ? c < u ? c : u : d < u ? d : u) == u ? (u == n ? l.push(r) : (l.push(a), n = u), t--, i--) : h == c ? (l.push(o), t--, n = c) : (l.push(s), i--, n = d);
          } else l.push(o), t--;
        } else l.push(s), i--;
      }

      return l.reverse(), l;
    }(function (e, t, i, n, r, a) {
      for (var s = a - r + 1, o = i - t + 1, l = new Array(s), u = 0; u < s; u++) {
        l[u] = new Array(o), l[u][0] = u;
      }

      for (var d = 0; d < o; d++) {
        l[0][d] = d;
      }

      for (var h = 1; h < s; h++) {
        for (var p = 1; p < o; p++) {
          if (c(e[t + p - 1], n[r + h - 1])) l[h][p] = l[h - 1][p - 1];else {
            var f = l[h - 1][p] + 1,
                b = l[h][p - 1] + 1;
            l[h][p] = f < b ? f : b;
          }
        }
      }

      return l;
    }(e, t, i, l, u, d));

    h = void 0;

    for (var v = [], y = t, g = u, _ = 0; _ < m.length; _++) {
      switch (m[_]) {
        case r:
          h && (v.push(h), h = void 0), y++, g++;
          break;

        case a:
          h || (h = n(y, [], 0)), h.addedCount++, y++, h.removed.push(l[g]), g++;
          break;

        case s:
          h || (h = n(y, [], 0)), h.addedCount++, y++;
          break;

        case o:
          h || (h = n(y, [], 0)), h.removed.push(l[g]), g++;
      }
    }

    return h && v.push(h), v;
  }

  function u(e, t) {
    return l(e, 0, e.length, t, 0, t.length);
  }

  function c(e, t) {
    return e === t;
  }
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return a;
  });
  var n = i(1),
      r = i(11),
      a = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_minMaxChanged",
        value: function value(e, t) {
          +t < +e ? this.setProperties({
            min: +t,
            max: +e
          }) : this._updateValueAsNumber();
        }
      }, {
        key: "_valueAsNumberChanged",
        value: function value(e, t) {
          if (!0 !== this.__resettingValueAsNumber) return this.useNegativeZero && 0 === e && 0 === t && 1 / e !== 1 / t ? (this.__resettingValueAsNumber = !0, this.valueAsNumber = void 0, this.__resettingValueAsNumber = !1, void (this.valueAsNumber = e)) : void (this.valueAsNumber = this._checkValueAsNumber(e, t));
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          isNaN(e) || isNaN(this.valueAsNumber) && (this.valueAsNumber = e);
        }
      }, {
        key: "_computeDefaultValue",
        value: function value(e) {
          return isNaN(this.default) ? e : +this.default;
        }
      }, {
        key: "_checkValueAsNumber",
        value: function value(e, t) {
          if (isNaN(e)) return this._computeDefaultValue(e);
          var i = this.saturate,
              n = this.min,
              r = this.max;
          return !isNaN(n) && e <= n ? i || e === n || isNaN(r) || t !== n ? n : r : !isNaN(r) && e >= r ? i || e === r || isNaN(n) || r !== t ? r : n : this.noClamp ? e : this._checkStep(e, this.step);
        }
      }, {
        key: "_updateValueAsNumber",
        value: function value() {
          isNaN(this.valueAsNumber) && isNaN(this.default) && isNaN(this.min) && isNaN(this.max) || this._valueAsNumberChanged(this.valueAsNumber, this.valueAsNumber);
        }
      }, {
        key: "_checkStep",
        value: function value(e, t) {
          if (!t) return e;
          var i = this._safeAdd,
              n = this._safeMult,
              a = this.useNegativeZero && Object(r.b)(e);
          return e = isNaN(this.default) ? isNaN(this.min) ? isNaN(this.max) ? n(Math.round(e / t), t) : i(n(-Math.round((this.max - e) / t), t), this.max) : i(n(Math.round((e - this.min) / t), t), this.min) : i(n(Math.round((e - this.default) / t), t), this.default), a && 0 === e ? -0 : e;
        }
      }, {
        key: "_safeMult",
        value: function value(e, t) {
          return Object(r.d)(e, t);
        }
      }, {
        key: "_safeAdd",
        value: function value(e, t) {
          return Object(r.c)(e, t);
        }
      }, {
        key: "_stepChanged",
        value: function value(e) {
          (e = e || 0) === Math.abs(e) ? this._updateValueAsNumber() : this.step = Math.abs(e);
        }
      }, {
        key: "increase",
        value: function value() {
          this._increm(this.step || 1);
        }
      }, {
        key: "decrease",
        value: function value() {
          this._increm(-(this.step || 1));
        }
      }, {
        key: "_increm",
        value: function value(e) {
          if (this.useNegativeZero && 0 === this.valueAsNumber) if (1 / this.valueAsNumber === 1 / 0) {
            if (e < 0) return void (this.valueAsNumber = -0);
          } else if (e > 0) return void (this.valueAsNumber = 0);
          var t = +this._safeAdd(this.valueAsNumber, e);
          isNaN(t) ? isNaN(this.startAt) ? isNaN(this.default) ? this.valueAsNumber = this.min < 0 ? 0 : this.min || 0 : this.valueAsNumber = +this.default : this.valueAsNumber = +this.startAt : this.useNegativeZero && 0 === t ? e < 0 ? this.valueAsNumber = 0 : e > 0 && (this.valueAsNumber = -0) : this.valueAsNumber = t;
        }
      }, {
        key: "_shouldPropertyChange",
        value: function value(e, i, n) {
          return this.useNegativeZero && 0 === i && 0 === n ? 1 / i !== 1 / n : babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_shouldPropertyChange", this).call(this, e, i, n);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            min: {
              type: Number
            },
            max: {
              type: Number
            },
            step: {
              type: Number,
              observer: "_stepChanged"
            },
            startAt: {
              type: Number
            },
            valueAsNumber: {
              type: Number,
              notify: !0,
              observer: "_valueAsNumberChanged"
            },
            default: {
              type: Number,
              observer: "_defaultChanged"
            },
            saturate: {
              type: Boolean,
              observer: "_updateValueAsNumber"
            },
            useNegativeZero: {
              type: Boolean,
              observer: "_updateValueAsNumber"
            },
            noClamp: {
              type: Boolean,
              observer: "_updateValueAsNumber"
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_minMaxChanged(min, max)"];
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return u;
  });

  var n = i(1),
      r = i(11),
      a = /[^\d\-+.e]/g,
      s = new Map(),
      o = function e(t) {
    switch (babelHelpers.typeof(t)) {
      case "number":
        return t;

      case "string":
        if (0 !== t.length) return t;

      case "object":
        if (null !== t && t.valueOf) return e(t.valueOf());
    }
  },
      l = function l(e) {
    return isNaN(e) ? "" : String(e);
  },
      u = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).formatNumber = l.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.parseNumber = o.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_localeChanged",
        value: function value(e) {
          if (e && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf(e)) {
            if ("latn" === new Intl.NumberFormat(e).resolvedOptions().numberingSystem) {
              if (!s.has(e)) {
                for (var t, i = .5.toLocaleString(e, {
                  minimumIntergerDigits: 1,
                  minimumFractionsDigits: 1
                })[1], n = 1e6.toLocaleString(e, {
                  useGrouping: !1
                }), r = 1e6.toLocaleString(e, {
                  useGrouping: !0
                }), a = 0; a < n.length; a++) {
                  if (r[a] !== n[a]) {
                    t = r[a];
                    break;
                  }
                }

                s.set(e, {
                  decimalSeparator: i,
                  groupingSeparator: t
                });
              }

              this.setProperties(s.get(e), !0);
            } else {
              var o;
              if (-1 !== e.indexOf("-u-")) {
                if (-1 !== (o = e.indexOf("-nu-"))) {
                  var l = e.indexOf("-", o + 4);
                  this.locale = -1 !== l ? e.slice(0, o + 4) + "latn" + e.slice(l) : e.slice(0, o + 4) + "latn";
                } else this.locale = e + "-nu-latn";
              } else this.locale = e + "-u-nu-latn";
            }
          } else this.locale = navigator.language;
        }
      }, {
        key: "_computeNumberOptions",
        value: function value(e, t, i, n, r, a, s, o, l) {
          var u = {
            minimumIntegerDigits: e || 1,
            minimumFractionDigits: t || 0,
            useGrouping: Boolean(a),
            style: s || "decimal"
          };
          return "currency" === s && (o ? (u.currency = o, l && -1 !== ["symbol", "code", "name"].indexOf(this.currencyDisplay) ? u.currencyDisplay = l : u.currencyDisplay = new Intl.NumberFormat(this.locale, {
            style: "currency",
            currency: this.currency
          }).resolvedOptions().currencyDisplay || "symbol") : (console.warn("No currency is given. Using number style: 'decimal'."), u.style = "decimal")), isNaN(t) ? isNaN(i) || (u.maximumFractionDigits = i >= 0 ? i : 20) : (u.minimumFractionDigits = t >= 0 ? t : 0, isNaN(i) ? u.maximumFractionDigits = 20 : u.maximumFractionDigits = Math.max(u.minimumFractionDigits, i)), isNaN(n) ? isNaN(r) || (u.maximumSignificantDigits = r >= 1 ? r : 21) : (u.minimumSignificantDigits = n >= 1 ? n : 1, isNaN(r) || (u.maximumSignificantDigits = Math.max(u.minimumSignificantDigits, r))), u;
        }
      }, {
        key: "_computeFormatNumber",
        value: function value(e, t, i, n, a) {
          t && "decimal" !== t.style && (i = "");
          var s,
              o = new Intl.NumberFormat(e, t).format;
          s = i ? a ? function (e) {
            return isNaN(e) ? "" : "".concat(e > 0 ? "+" : e < 0 ? "" : Object(r.b)(e) ? "-" : "+").concat(o(e)).concat(n).concat(i);
          } : function (e) {
            return isNaN(e) ? "" : "".concat(Object(r.b)(e) ? "-" : "").concat(o(e)).concat(n).concat(i);
          } : a ? function (e) {
            return isNaN(e) ? "" : "".concat(e > 0 ? "+" : e < 0 ? "" : Object(r.b)(e) ? "-" : "+").concat(o(e));
          } : function (e) {
            return isNaN(e) ? "" : "".concat(Object(r.b)(e) ? "-" : "").concat(o(e));
          }, this._setFormatNumber(s);
        }
      }, {
        key: "_computeParseNumber",
        value: function value(e, t, i) {
          var n,
              s = new RegExp("[".concat(t || "", "]"), "g");
          n = 0 === i.maximumFractionDigits ? "currency" === i.style ? i.useGrouping ? function (e) {
            return parseInt(e.replace(s, "").replace(a, ""));
          } : function (e) {
            return parseInt(e.replace(a, ""));
          } : "percent" === i.style ? i.useGrouping ? function (e) {
            return Object(r.d)(parseInt(e.replace(s, "")), .01);
          } : function (e) {
            return Object(r.d)(parseInt(e), .01);
          } : i.useGrouping ? function (e) {
            return parseInt(e.replace(s, ""));
          } : function (e) {
            return parseInt(e);
          } : "currency" === i.style ? i.useGrouping ? function (t) {
            return parseFloat(t.replace(s, "").replace(e, ".").replace(a, ""));
          } : function (t) {
            return parseFloat(t.replace(e, ".").replace(a, ""));
          } : "percent" === i.style ? i.useGrouping ? function (t) {
            return Object(r.d)(parseFloat(t.replace(s, "").replace(e, ".")), .01);
          } : function (t) {
            return Object(r.d)(parseFloat(t.replace(e, ".")), .01);
          } : i.useGrouping ? function (t) {
            return parseFloat(t.replace(s, "").replace(e, "."));
          } : function (t) {
            return parseFloat(t.replace(e, "."));
          };
          return this._setParseNumber(function e(t) {
            switch (babelHelpers.typeof(t)) {
              case "number":
                return t;

              case "string":
                if (0 === t.length) return;
                return n(t);

              case "object":
                if (null !== t && t.valueOf) return e(t.valueOf());
            }
          });
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            locale: {
              type: String,
              value: navigator.language
            },
            decimalSeparator: {
              type: String,
              readOnly: !0
            },
            groupingSeparator: {
              type: String,
              readOnly: !0
            },
            minimumFractionDigits: {
              type: Number
            },
            maximumFractionDigits: {
              type: Number
            },
            minimumIntegerDigits: {
              type: Number
            },
            minimumSignificantDigits: {
              type: Number
            },
            maximumSignificantDigits: {
              type: Number
            },
            unit: {
              type: String
            },
            unitSeparator: {
              type: String,
              value: "\u202F"
            },
            alwaysSign: {
              type: Boolean
            },
            numberStyle: {
              type: String,
              value: "decimal"
            },
            useGrouping: {
              type: Boolean
            },
            currency: {
              type: String
            },
            currencyDisplay: {
              type: String
            },
            _numberOptions: {
              type: Number,
              computed: "_computeNumberOptions(minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, useGrouping, numberStyle, currency, currencyDisplay, unit)"
            },
            formatNumber: {
              type: Function,
              readOnly: !0,
              notify: !0
            },
            parseNumber: {
              type: Function,
              readOnly: !0,
              notify: !0
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_localeChanged(locale)", "_computeFormatNumber(locale, _numberOptions, unit, unitSeparator, alwaysSign)", "_computeParseNumber(decimalSeparator, groupingSeparator, _numberOptions)"];
        }
      }]), t;
    }(e);
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return d;
  });
  var n = i(1),
      r = i(0),
      a = i(15),
      s = i(23);

  function o() {
    var e = babelHelpers.taggedTemplateLiteral(['<input id="input" type="[[type]]" value="{{input::input}}" placeholder="[[placeholder]]" required$="[[required]]" disabled$="[[disabled]]" title$="[[title]]" spellcheck="false" autocomplete="off">']);
    return o = function o() {
      return e;
    }, e;
  }

  function l() {
    var e = babelHelpers.taggedTemplateLiteral(["", "<style>#input{width:0}#minlength,#size{position:fixed;top:0;left:0;right:auto;bottom:auto;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;letter-spacing:inherit;outline:0;min-width:inherit;max-width:inherit;margin:0;padding:0;visibility:hidden}</style>"]);
    return l = function l() {
      return e;
    }, e;
  }

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", '<div id="size">[[input]]</div><div id="minlength">[[_minlengthString]]</div>']);
    return u = function u() {
      return e;
    }, e;
  }

  var c = function c(e, t) {
    var i;

    if (t || (i = e.getBoundingClientRect()), !i || 0 === i.width || 0 === i.height) {
      var n = e.cloneNode(!0),
          r = document.defaultView.getComputedStyle(e, "");
      ["font-family", "font-size", "font-weight", "font-stretch", "font-style", "min-width", "max-width", "min-height", "max-height", "line-height", "width", "height", "word-spacing"].reduce(function (e, t) {
        t && r[t] && (n.style[t] = r[t]);
      }, "letter-spacing"), n.style.visibility = "hidden", n.style.position = "fixed", n.style.left = "0", n.style.top = "0", document.body.appendChild(n), i = n.getBoundingClientRect(), n.parentElement.removeChild(n);
    }

    return i;
  },
      d = Object(n.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this))).focus = e.focus.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.blur = e.blur.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.resize = e.resize.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._updateInput = e._updateInput.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._confirmInput = e._confirmInput.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._checkKeycode = e._checkKeycode.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e._resizeWidth = e._resizeWidth.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e.__minSizeInitialized = !1, e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "connectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "connectedCallback", this).call(this), this._delayedAddEventListeners(), this.input && this.input.length && this._debouncedResizeWidth();
        }
      }, {
        key: "disconnectedCallback",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "disconnectedCallback", this).call(this), this._removeEventListeners();
        }
      }, {
        key: "_delayedAddEventListeners",
        value: function value() {
          var _e = function e() {
            "loading" !== document.readyState && (this._addEventListeners(), this._createPropertyObserver("_minlengthString", "resize", !0), this.resize(), document.removeEventListener("readystatechange", _e));
          };

          _e = _e.bind(this), document.addEventListener("readystatechange", _e), _e();
        }
      }, {
        key: "_addEventListeners",
        value: function value() {
          this.addEventListener("focus", this.focus), this.addEventListener("blur", this.blur), this.$.input.addEventListener("focus", this._confirmInput), this.$.input.addEventListener("blur", this._confirmInput), this.$.input.addEventListener("keydown", this._checkKeycode), window.addEventListener("resize", this.resize);
        }
      }, {
        key: "_removeEventListeners",
        value: function value() {
          this.removeEventListener("focus", this.focus), this.removeEventListener("blur", this.blur), this.$.input.removeEventListener("focus", this._confirmInput), this.$.input.removeEventListener("blur", this._confirmInput), this.$.input.removeEventListener("keydown", this._checkKeycode), window.removeEventListener("resize", this.resize);
        }
      }, {
        key: "_checkKeycode",
        value: function value(e) {
          switch (babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_checkKeycode", this) && babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_checkKeycode", this).call(this, e), e.keyCode) {
            case 9:
            case 13:
              this._confirmInput();

              break;

            case 27:
              this._updateInput(), this.blur();
          }
        }
      }, {
        key: "_inputChanged",
        value: function value(e) {
          !1 === this._defaultIsSet(e) && this._isSet(this.default) ? this.input = this.default : this.autoResize && this._debouncedResizeWidth();
        }
      }, {
        key: "_valueChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_valueChanged", this).call(this, e), this._updateInput();
        }
      }, {
        key: "_confirmInput",
        value: function value(e) {
          this._isSet(this.input) ? this.value = this.input : this.reset(), this._debouncedResizeWidth(), e && e.stopPropagation && e.stopPropagation();
        }
      }, {
        key: "_updateInput",
        value: function value(e) {
          this._isSet(this.value) ? this.input = this.value : this.input = "", this._debouncedResizeWidth(), e && e.stopPropagation && e.stopPropagation();
        }
      }, {
        key: "_computeMinlengthString",
        value: function value() {
          for (var e = "" + (this.default || ""), t = "" + (this.placeholder || ""), i = this.minlength < 1 ? 1 : this.minlength, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", r = "", a = 0; a < i; a++) {
            r += n.charAt(Math.floor(Math.random() * n.length));
          }

          this._minlengthString = [t, r].reduce(function (e, t) {
            return t.length > e.length ? t : e;
          }, e);
        }
      }, {
        key: "resize",
        value: function value() {
          var e = this;
          this._minSizeJob && cancelAnimationFrame(this._minSizeJob), this._minlengthString && (this._minSizeJob = requestAnimationFrame(function () {
            e.$.input.style.minWidth = "".concat(Math.ceil(c(e.$.minlength, !e.__minSizeInitialized).width), "px"), e.__minSizeInitialized = !0, e.input && e._debouncedResizeWidth();
          }));
        }
      }, {
        key: "_debouncedResizeWidth",
        value: function value() {
          this._activeResizeJob && (clearTimeout(this._activeResizeJob), this._activeResizeJob = null), this._activeResizeJob = setTimeout(this._resizeWidth, 0);
        }
      }, {
        key: "_resizeWidth",
        value: function value() {
          this.$.input.style.width = "".concat(Math.ceil(c(this.$.size).width), "px");
        }
      }, {
        key: "focus",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "focus", this).call(this, e), this.$.input.focus(), this.$.input.scrollIntoViewIfNeeded && this.$.input.scrollIntoViewIfNeeded();
        }
      }, {
        key: "blur",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "blur", this).call(this, e), this.$.input.blur();
        }
      }, {
        key: "validate",
        value: function value() {
          return this._confirmInput(), !this.invalid;
        }
      }, {
        key: "select",
        value: function value() {
          this.$.input.select();
        }
      }, {
        key: "click",
        value: function value() {
          this.$.input.click();
        }
      }, {
        key: "setCustomValidity",
        value: function value(e) {
          this.$.input.setCustomValidity(e || "");
        }
      }, {
        key: "reportValidity",
        value: function value() {
          return this.$.input.reportValidity();
        }
      }], [{
        key: "template",
        get: function get() {
          return Object(r.a)(u(), this.styleTemplate, this.inputTemplate);
        }
      }, {
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(l(), s.a);
        }
      }, {
        key: "inputTemplate",
        get: function get() {
          return Object(r.a)(o());
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            type: {
              type: String,
              value: "text"
            },
            input: {
              type: String,
              notify: !0,
              observer: "_inputChanged"
            },
            validationMessage: {
              type: String,
              observer: "setCustomValidity"
            },
            placeholder: {
              type: String
            },
            minlength: {
              type: Number
            },
            autoResize: {
              type: Boolean,
              observer: "_debouncedResizeWidth"
            },
            _minlengthString: {
              type: String
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computeInvalid(_validate, _isSet, input, required)", "_computeMinlengthString(minlength, default, placeholder)"];
        }
      }]), t;
    }(Object(a.a)(e));
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "b", function () {
    return a;
  }), i.d(t, "a", function () {
    return o;
  });
  var n = i(33),
      r = {
    attached: !0,
    detached: !0,
    ready: !0,
    created: !0,
    beforeRegister: !0,
    registered: !0,
    attributeChanged: !0,
    behaviors: !0
  };

  function a(e, t) {
    if (!e) return t = t;
    t = Object(n.a)(t), Array.isArray(e) || (e = [e]);
    var i = t.prototype.behaviors;
    return t = function e(t, i) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r && (i = Array.isArray(r) ? e(r, i) : s(r, i));
      }

      return i;
    }(e = function e(t, i, n) {
      i = i || [];

      for (var r = t.length - 1; r >= 0; r--) {
        var a = t[r];
        a ? Array.isArray(a) ? e(a, i) : i.indexOf(a) < 0 && (!n || n.indexOf(a) < 0) && i.unshift(a) : console.warn("behavior is null, check for missing or 404 import");
      }

      return i;
    }(e, null, i), t), i && (e = i.concat(e)), t.prototype.behaviors = e, t;
  }

  function s(e, t) {
    var i = function (t) {
      function i() {
        return babelHelpers.classCallCheck(this, i), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(i).apply(this, arguments));
      }

      return babelHelpers.inherits(i, t), babelHelpers.createClass(i, [{
        key: "created",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "created", this).call(this), e.created && e.created.call(this);
        }
      }, {
        key: "_registered",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "_registered", this).call(this), e.beforeRegister && e.beforeRegister.call(Object.getPrototypeOf(this)), e.registered && e.registered.call(Object.getPrototypeOf(this));
        }
      }, {
        key: "_applyListeners",
        value: function value() {
          if (babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "_applyListeners", this).call(this), e.listeners) for (var t in e.listeners) {
            this._addMethodEventListenerToNode(this, t, e.listeners[t]);
          }
        }
      }, {
        key: "_ensureAttributes",
        value: function value() {
          if (e.hostAttributes) for (var t in e.hostAttributes) {
            this._ensureAttribute(t, e.hostAttributes[t]);
          }
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "_ensureAttributes", this).call(this);
        }
      }, {
        key: "ready",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "ready", this).call(this), e.ready && e.ready.call(this);
        }
      }, {
        key: "attached",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "attached", this).call(this), e.attached && e.attached.call(this);
        }
      }, {
        key: "detached",
        value: function value() {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "detached", this).call(this), e.detached && e.detached.call(this);
        }
      }, {
        key: "attributeChanged",
        value: function value(t, n, r) {
          babelHelpers.get(babelHelpers.getPrototypeOf(i.prototype), "attributeChanged", this).call(this, t, n, r), e.attributeChanged && e.attributeChanged.call(this, t, n, r);
        }
      }], [{
        key: "properties",
        get: function get() {
          return e.properties;
        }
      }, {
        key: "observers",
        get: function get() {
          return e.observers;
        }
      }]), i;
    }(t);

    for (var n in i.generatedFrom = e, e) {
      if (!(n in r)) {
        var a = Object.getOwnPropertyDescriptor(e, n);
        a && Object.defineProperty(i.prototype, n, a);
      }
    }

    return i;
  }

  var o = function o(e, t) {
    e || console.warn("Polymer's Class function requires `info` argument");
    var i = e.behaviors ? a(e.behaviors, HTMLElement) : Object(n.a)(HTMLElement),
        r = s(e, t ? t(i) : i);
    return r.is = e.is, r;
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return g;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(27),
      o = i(18),
      l = i(9),
      u = i(36),
      c = i(7),
      d = i(34),
      h = i(26),
      p = i(31);

  function f() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", ""]);
    return f = function f() {
      return e;
    }, e;
  }

  function b() {
    var e = babelHelpers.taggedTemplateLiteral([""]);
    return b = function b() {
      return e;
    }, e;
  }

  function m() {
    var e = babelHelpers.taggedTemplateLiteral(["", "<style>:host(:not([opened])) #calendar #days>:hover:before{border-color:var(--inner-input-focus-background)}</style>"]);
    return m = function m() {
      return e;
    }, e;
  }

  function v() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="picker" class="dropdown" horizontal$="[[_ifClamped(clamp, \'day\')]]">', '<div id="buttons">', "<div></div></div></div>"]);
    return v = function v() {
      return e;
    }, e;
  }

  function y() {
    var e = babelHelpers.taggedTemplateLiteral(["date"]);
    return y = function y() {
      return e;
    }, e;
  }

  var g = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeNativeInput",
        value: function value(e, t) {
          e && t ? this._nativeInput = e : e || t || (this._nativeInput = "");
        }
      }, {
        key: "_reflectNativeInput",
        value: function value(e) {
          this._computeShouldNative(this.native) && e && this._dateTimeChanged(e, this.time);
        }
      }, {
        key: "renderCalendar",
        value: function value(e, i, n) {
          !this.opened || this._hasNative && this.native || isNaN(e) && isNaN(i) && isNaN(n) || babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "renderCalendar", this).call(this, e, i, n);
        }
      }, {
        key: "_openedChanged",
        value: function value(e) {
          var i = this;
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_openedChanged", this) && babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_openedChanged", this).call(this, e), this._hasNative && this.native || (e ? (babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "renderCalendar", this).call(this, this.year, this.month, this.day), this.$.daySelector && this.$.daySelector.focus()) : setTimeout(function () {
            i._setCurrentHoveredDayNode(null), i._setCurrentActiveDayNode(null), i._setCurrentSelectedDayNode(null);
          }, 0));
        }
      }, {
        key: "_confirmedValueChanged",
        value: function value(e) {
          babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_confirmedValueChanged", this).call(this, e), this.__lastSelectedDay = [this.year, this.month - 1, this.day];
        }
      }], [{
        key: "expectedNativeInputType",
        get: function get() {
          return Object(r.b)(y());
        }
      }, {
        key: "pickerTemplate",
        get: function get() {
          return Object(r.a)(v(), this.calendarTemplate, this.buttonTemplate);
        }
      }, {
        key: "styleTemplate",
        get: function get() {
          return Object(r.a)(m(), babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this) || Object(r.a)(b()));
        }
      }]), t;
    }(e);
  }),
      _ = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "_hasNative",
      get: function get() {
        return t._hasNative;
      }
    }], [{
      key: "is",
      get: function get() {
        return "date-picker";
      }
    }, {
      key: "styleTemplate",
      get: function get() {
        return Object(r.a)(f(), p.a, babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this));
      }
    }]), t;
  }(g(Object(h.a)(Object(d.a)(Object(o.a)(Object(u.a)(Object(l.b)(Object(l.a)(Object(s.a)(Object(c.a)(n.a))))))))));

  customElements.get(_.is) || customElements.define(_.is, _);
}, function (e, t, i) {
  "use strict";

  var n,
      r = null,
      a = window.HTMLImports && window.HTMLImports.whenReady || null;

  function s(e) {
    requestAnimationFrame(function () {
      a ? a(e) : (r || (r = new Promise(function (e) {
        n = e;
      }), "complete" === document.readyState ? n() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && n();
      })), r.then(function () {
        e && e();
      }));
    });
  }

  i.d(t, "a", function () {
    return c;
  });

  var o = "__shadyCSSCachedStyle",
      l = null,
      u = null,
      c = function () {
    function e() {
      babelHelpers.classCallCheck(this, e), this.customStyles = [], this.enqueued = !1, s(function () {
        window.ShadyCSS.flushCustomStyles && window.ShadyCSS.flushCustomStyles();
      });
    }

    return babelHelpers.createClass(e, [{
      key: "enqueueDocumentValidation",
      value: function value() {
        !this.enqueued && u && (this.enqueued = !0, s(u));
      }
    }, {
      key: "addCustomStyle",
      value: function value(e) {
        e.__seenByShadyCSS || (e.__seenByShadyCSS = !0, this.customStyles.push(e), this.enqueueDocumentValidation());
      }
    }, {
      key: "getStyleForCustomStyle",
      value: function value(e) {
        return e[o] ? e[o] : e.getStyle ? e.getStyle() : e;
      }
    }, {
      key: "processStyles",
      value: function value() {
        for (var e = this.customStyles, t = 0; t < e.length; t++) {
          var i = e[t];

          if (!i[o]) {
            var n = this.getStyleForCustomStyle(i);

            if (n) {
              var r = n.__appliedElement || n;
              l && l(r), i[o] = r;
            }
          }
        }

        return e;
      }
    }]), e;
  }();

  c.prototype.addCustomStyle = c.prototype.addCustomStyle, c.prototype.getStyleForCustomStyle = c.prototype.getStyleForCustomStyle, c.prototype.processStyles = c.prototype.processStyles, Object.defineProperties(c.prototype, {
    transformCallback: {
      get: function get() {
        return l;
      },
      set: function set(e) {
        l = e;
      }
    },
    validateCallback: {
      get: function get() {
        return u;
      },
      set: function set(e) {
        var t = !1;
        u || (t = !0), u = e, t && this.enqueueDocumentValidation();
      }
    }
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return b;
  });
  i(12);
  var n = {
    "U+0008": "backspace",
    "U+0009": "tab",
    "U+001B": "esc",
    "U+0020": "space",
    "U+007F": "del"
  },
      r = {
    8: "backspace",
    9: "tab",
    13: "enter",
    27: "esc",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    46: "del",
    106: "*"
  },
      a = {
    shift: "shiftKey",
    ctrl: "ctrlKey",
    alt: "altKey",
    meta: "metaKey"
  },
      s = /[a-z0-9*]/,
      o = /U\+/,
      l = /^arrow/,
      u = /^space(bar)?/,
      c = /^escape$/;

  function d(e, t) {
    var i = "";

    if (e) {
      var n = e.toLowerCase();
      " " === n || u.test(n) ? i = "space" : c.test(n) ? i = "esc" : 1 == n.length ? t && !s.test(n) || (i = n) : i = l.test(n) ? n.replace("arrow", "") : "multiply" == n ? "*" : n;
    }

    return i;
  }

  function h(e, t) {
    return e.key ? d(e.key, t) : e.detail && e.detail.key ? d(e.detail.key, t) : (i = e.keyIdentifier, a = "", i && (i in n ? a = n[i] : o.test(i) ? (i = parseInt(i.replace("U+", "0x"), 16), a = String.fromCharCode(i).toLowerCase()) : a = i.toLowerCase()), a || function (e) {
      var t = "";
      return Number(e) && (t = e >= 65 && e <= 90 ? String.fromCharCode(32 + e) : e >= 112 && e <= 123 ? "f" + (e - 112 + 1) : e >= 48 && e <= 57 ? String(e - 48) : e >= 96 && e <= 105 ? String(e - 96) : r[e]), t;
    }(e.keyCode) || "");
    var i, a;
  }

  function p(e, t) {
    return h(t, e.hasModifiers) === e.key && (!e.hasModifiers || !!t.shiftKey === !!e.shiftKey && !!t.ctrlKey === !!e.ctrlKey && !!t.altKey === !!e.altKey && !!t.metaKey === !!e.metaKey);
  }

  function f(e) {
    return e.trim().split(" ").map(function (e) {
      return function (e) {
        return 1 === e.length ? {
          combo: e,
          key: e,
          event: "keydown"
        } : e.split("+").reduce(function (e, t) {
          var i = t.split(":"),
              n = i[0],
              r = i[1];
          return n in a ? (e[a[n]] = !0, e.hasModifiers = !0) : (e.key = n, e.event = r || "keydown"), e;
        }, {
          combo: e.split(":").shift()
        });
      }(e);
    });
  }

  var b = {
    properties: {
      keyEventTarget: {
        type: Object,
        value: function value() {
          return this;
        }
      },
      stopKeyboardEventPropagation: {
        type: Boolean,
        value: !1
      },
      _boundKeyHandlers: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      _imperativeKeyBindings: {
        type: Object,
        value: function value() {
          return {};
        }
      }
    },
    observers: ["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],
    keyBindings: {},
    registered: function registered() {
      this._prepKeyBindings();
    },
    attached: function attached() {
      this._listenKeyEventListeners();
    },
    detached: function detached() {
      this._unlistenKeyEventListeners();
    },
    addOwnKeyBinding: function addOwnKeyBinding(e, t) {
      this._imperativeKeyBindings[e] = t, this._prepKeyBindings(), this._resetKeyEventListeners();
    },
    removeOwnKeyBindings: function removeOwnKeyBindings() {
      this._imperativeKeyBindings = {}, this._prepKeyBindings(), this._resetKeyEventListeners();
    },
    keyboardEventMatchesKeys: function keyboardEventMatchesKeys(e, t) {
      for (var i = f(t), n = 0; n < i.length; ++n) {
        if (p(i[n], e)) return !0;
      }

      return !1;
    },
    _collectKeyBindings: function _collectKeyBindings() {
      var e = this.behaviors.map(function (e) {
        return e.keyBindings;
      });
      return -1 === e.indexOf(this.keyBindings) && e.push(this.keyBindings), e;
    },
    _prepKeyBindings: function _prepKeyBindings() {
      for (var e in this._keyBindings = {}, this._collectKeyBindings().forEach(function (e) {
        for (var t in e) {
          this._addKeyBinding(t, e[t]);
        }
      }, this), this._imperativeKeyBindings) {
        this._addKeyBinding(e, this._imperativeKeyBindings[e]);
      }

      for (var t in this._keyBindings) {
        this._keyBindings[t].sort(function (e, t) {
          var i = e[0].hasModifiers;
          return i === t[0].hasModifiers ? 0 : i ? -1 : 1;
        });
      }
    },
    _addKeyBinding: function _addKeyBinding(e, t) {
      f(e).forEach(function (e) {
        this._keyBindings[e.event] = this._keyBindings[e.event] || [], this._keyBindings[e.event].push([e, t]);
      }, this);
    },
    _resetKeyEventListeners: function _resetKeyEventListeners() {
      this._unlistenKeyEventListeners(), this.isAttached && this._listenKeyEventListeners();
    },
    _listenKeyEventListeners: function _listenKeyEventListeners() {
      this.keyEventTarget && Object.keys(this._keyBindings).forEach(function (e) {
        var t = this._keyBindings[e],
            i = this._onKeyBindingEvent.bind(this, t);

        this._boundKeyHandlers.push([this.keyEventTarget, e, i]), this.keyEventTarget.addEventListener(e, i);
      }, this);
    },
    _unlistenKeyEventListeners: function _unlistenKeyEventListeners() {
      for (var e, t, i, n; this._boundKeyHandlers.length;) {
        t = (e = this._boundKeyHandlers.pop())[0], i = e[1], n = e[2], t.removeEventListener(i, n);
      }
    },
    _onKeyBindingEvent: function _onKeyBindingEvent(e, t) {
      if (this.stopKeyboardEventPropagation && t.stopPropagation(), !t.defaultPrevented) for (var i = 0; i < e.length; i++) {
        var n = e[i][0],
            r = e[i][1];
        if (p(n, t) && (this._triggerKeyHandler(n, r, t), t.defaultPrevented)) return;
      }
    },
    _triggerKeyHandler: function _triggerKeyHandler(e, t, i) {
      var n = Object.create(e);
      n.keyboardEvent = i;
      var r = new CustomEvent(e.event, {
        detail: n,
        cancelable: !0
      });
      this[t].call(this, r), r.defaultPrevented && i.preventDefault();
    }
  };
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return v;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(27),
      o = i(18),
      l = i(9),
      u = i(37),
      c = i(7),
      d = i(38),
      h = i(26),
      p = i(31);

  function f() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", ""]);
    return f = function f() {
      return e;
    }, e;
  }

  function b() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="picker" class="dropdown" horizontal>', '<div id="buttons">', "<div></div></div></div>"]);
    return b = function b() {
      return e;
    }, e;
  }

  function m() {
    var e = babelHelpers.taggedTemplateLiteral(["time"]);
    return m = function m() {
      return e;
    }, e;
  }

  var v = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeNativeInput",
        value: function value(e, t) {
          e && t ? this._nativeInput = t : e || t || (this._nativeInput = "");
        }
      }, {
        key: "_reflectNativeInput",
        value: function value(e) {
          this._computeShouldNative(this.native) && e && this._dateTimeChanged(this.date, e);
        }
      }], [{
        key: "expectedNativeInputType",
        get: function get() {
          return Object(r.b)(m());
        }
      }, {
        key: "pickerTemplate",
        get: function get() {
          return Object(r.a)(b(), this.timeTemplate, this.buttonTemplate);
        }
      }]), t;
    }(e);
  }),
      y = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "_hasNative",
      get: function get() {
        return t._hasNative;
      }
    }], [{
      key: "is",
      get: function get() {
        return "time-picker";
      }
    }, {
      key: "styleTemplate",
      get: function get() {
        return Object(r.a)(f(), p.a, babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this));
      }
    }]), t;
  }(v(Object(h.a)(Object(d.a)(Object(o.a)(Object(u.a)(Object(l.b)(Object(l.a)(Object(s.a)(Object(c.a)(n.a))))))))));

  customElements.get(y.is) || customElements.define(y.is, y);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return c;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(42),
      o = i(43),
      l = i(44);

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(['<input id="input" type$="[[type]]" value="{{input::input}}" step="[[step]]" required$="[[required]]" disabled$="[[disabled]]" placeholder="[[placeholder]]" spellcheck="false" autocomplete="off">']);
    return u = function u() {
      return e;
    }, e;
  }

  var c = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        var e;
        return babelHelpers.classCallCheck(this, t), (e = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this)))._isSet = function (e) {
          return !isNaN(this.parseNumber(e));
        }.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(e))), e;
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "reset",
        value: function value(e) {
          this.value = this._computeDefaultValue(e);
        }
      }, {
        key: "_checkKeycode",
        value: function value(e) {
          switch (e.keyCode) {
            case 38:
              e.preventDefault(), e.stopPropagation(), this.increase();
              break;

            case 40:
              e.preventDefault(), e.stopPropagation(), this.decrease();
              break;

            default:
              babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_checkKeycode", this).call(this, e);
          }
        }
      }, {
        key: "_inputChanged",
        value: function value(e) {
          if (!1 === this._defaultIsSet(e)) {
            var t = this._computeDefaultValue();

            if (this._isSet(t)) return void (this.input = this.formatNumber(t));
          }

          this.autoResize && this._debouncedResizeWidth();
        }
      }, {
        key: "_valueChanged",
        value: function value(e, t) {
          !0 !== this.__resettingValueAsNumber && (e = this._checkValueAsNumber(this.parseNumber(e), t), !1 !== this._isSet(e) ? (this.setProperties({
            input: this.formatNumber(e),
            value: e
          }), this._debouncedResizeWidth()) : this._updateInput(void 0, e));
        }
      }, {
        key: "_valueAsNumberChanged",
        value: function value(e, i) {
          !0 !== this.__resettingValueAsNumber && (!1 !== this._isSet(e) ? babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "_valueAsNumberChanged", this).call(this, e, i) : this._updateInput(void 0, e));
        }
      }, {
        key: "_defaultChanged",
        value: function value(e) {
          isNaN(this.parseNumber(e)) || !1 === this._isSet(this.value) && (this.value = this._computeDefaultValue());
        }
      }, {
        key: "_computeDefaultValue",
        value: function value(e) {
          return this._isSet(this.default) ? this.parseNumber(this.default) : e;
        }
      }, {
        key: "_confirmInput",
        value: function value(e) {
          var t = this.parseNumber(this.input);
          this._isSet(t) ? this.setProperties({
            input: this.formatNumber(t),
            value: t
          }) : this.reset(), this._debouncedResizeWidth(), e && e.stopPropagation && e.stopPropagation();
        }
      }, {
        key: "_updateInput",
        value: function value(e, t) {
          void 0 === t && (t = this.parseNumber(this.value)), this._isSet(t) ? this.input = this.formatNumber(t) : this.input = "", this._debouncedResizeWidth(), e && e.stopPropagation && e.stopPropagation();
        }
      }, {
        key: "_formatNumberChanged",
        value: function value() {
          isNaN(this.valueAsNumber) || this._updateInput(void 0, this.valueAsNumber);
        }
      }, {
        key: "_computeMinlengthString",
        value: function value() {
          if (void 0 !== this.formatNumber) {
            var e = isNaN(this.default) ? "" : this.formatNumber(this.default),
                t = this.placeholder || "",
                i = isNaN(this.startAt) ? "" : this.formatNumber(this.startAt),
                n = isNaN(this.min) ? "" : this.formatNumber(Math.abs(this.min)),
                r = isNaN(this.max) ? "" : this.formatNumber(this.max),
                a = this.formatNumber(Math.pow(10, Math.ceil(this.minlength || 1) - ("percent" === this.numberStyle ? 3 : 1))),
                s = (!this.alwaysSign && this.max < 0 ? "-" : "") + this.formatNumber(Math.pow(10, (this.minimumIntegerDigits || 1) - 1) + Math.pow(10, -(this.minimumFractionDigits || 0)));
            this._minlengthString = [i, r, n, t, s, a].reduce(function (e, t) {
              return t.length > e.length ? t : e;
            }, e);
          }
        }
      }, {
        key: "_computeType",
        value: function value(e, t, i, n, r, a) {
          var s;
          s = !e || "decimal" !== e.numberStyle || i || n || r || a ? "." === t || e && 0 === e.maximumFractionDigits ? "tel" : "text" : "number", this._setType(s);
        }
      }, {
        key: "_computeMinimumIntegerDigits",
        value: function value(e, t, i, n, r, a, s, o) {
          var l;
          "percent" === o ? (r = Math.round(100 * r), a = Math.round(100 * a), i = Math.round(100 * i), s = Math.round(100 * s), n = Math.round(100 * n)) : (r = Math.round(r), a = Math.round(a), i = Math.round(i), s = Math.round(s), n = Math.round(n)), r = "" + (Math.abs(r) || 0), a = "" + (Math.abs(a) || 0), i = "" + (Math.abs(i) || 0), s = "" + (Math.abs(s) || 0), n = "" + (Math.abs(n) || 0), l = e ? Math.max(t || 1, n.length, s.length, i.length, r.length, a.length) : t || 1, this._setMinimumIntegerDigits(l);
        }
      }, {
        key: "_computeMinimumFractionDigits",
        value: function value(e, t, i, n) {
          "percent" === n && (t = this._safeMult(t || 0, 100), i = this._safeMult(i || 0, 100), e = this._safeMult(e || .01, 100)), t = "" + (Math.abs(t) || ""), i = "" + (Math.abs(i) || ""), e = "" + e, this._setMinimumFractionDigits(["0", e, t, i].reduce(function (e, t) {
            var i = t.indexOf(".");
            return Math.max(i < 0 ? 0 : t.length - 1 - i, e);
          }));
        }
      }], [{
        key: "inputTemplate",
        get: function get() {
          return Object(r.a)(u());
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            type: {
              type: String,
              readOnly: !0
            },
            padLength: {
              type: Number
            },
            autoPadding: {
              type: Boolean
            },
            minimumFractionDigits: {
              type: Number,
              readOnly: !0
            },
            minimumIntegerDigits: {
              type: Number,
              readOnly: !0
            },
            value: {
              type: Number,
              notify: !0
            },
            propertyForValue: {
              type: String,
              value: "valueAsNumber"
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["_computeMinlengthString(formatNumber, startAt, min, max, minimumIntegerDigits, minimumFractionDigits, alwaysSign)", "_computeType(_numberOptions, decimalSeparator, alwaysSign, padLength, autoPadding)", "_computeMinimumFractionDigits(step, min, max, numberStyle)", "_computeMinimumIntegerDigits(autoPadding, padLength, default, startAt, min, max, step, numberStyle)", "_formatNumberChanged(formatNumber)"];
        }
      }]), t;
    }(e);
  }),
      d = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, null, [{
      key: "is",
      get: function get() {
        return "number-input";
      }
    }]), t;
  }(c(Object(l.a)(Object(s.a)(Object(o.a)(n.a)))));

  customElements.get(d.is) || customElements.define(d.is, d);
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return s;
  });
  i(12);
  var n = i(2),
      r = i(6),
      a = new Set(),
      s = {
    properties: {
      _parentResizable: {
        type: Object,
        observer: "_parentResizableChanged"
      },
      _notifyingDescendant: {
        type: Boolean,
        value: !1
      }
    },
    listeners: {
      "iron-request-resize-notifications": "_onIronRequestResizeNotifications"
    },
    created: function created() {
      this._interestedResizables = [], this._boundNotifyResize = this.notifyResize.bind(this), this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(this);
    },
    attached: function attached() {
      this._requestResizeNotifications();
    },
    detached: function detached() {
      this._parentResizable ? this._parentResizable.stopResizeNotificationsFor(this) : (a.delete(this), window.removeEventListener("resize", this._boundNotifyResize)), this._parentResizable = null;
    },
    notifyResize: function notifyResize() {
      this.isAttached && (this._interestedResizables.forEach(function (e) {
        this.resizerShouldNotify(e) && this._notifyDescendant(e);
      }, this), this._fireResize());
    },
    assignParentResizable: function assignParentResizable(e) {
      this._parentResizable && this._parentResizable.stopResizeNotificationsFor(this), this._parentResizable = e, e && -1 === e._interestedResizables.indexOf(this) && (e._interestedResizables.push(this), e._subscribeIronResize(this));
    },
    stopResizeNotificationsFor: function stopResizeNotificationsFor(e) {
      var t = this._interestedResizables.indexOf(e);

      t > -1 && (this._interestedResizables.splice(t, 1), this._unsubscribeIronResize(e));
    },
    _subscribeIronResize: function _subscribeIronResize(e) {
      e.addEventListener("iron-resize", this._boundOnDescendantIronResize);
    },
    _unsubscribeIronResize: function _unsubscribeIronResize(e) {
      e.removeEventListener("iron-resize", this._boundOnDescendantIronResize);
    },
    resizerShouldNotify: function resizerShouldNotify(e) {
      return !0;
    },
    _onDescendantIronResize: function _onDescendantIronResize(e) {
      this._notifyingDescendant ? e.stopPropagation() : r.f || this._fireResize();
    },
    _fireResize: function _fireResize() {
      this.fire("iron-resize", null, {
        node: this,
        bubbles: !1
      });
    },
    _onIronRequestResizeNotifications: function _onIronRequestResizeNotifications(e) {
      var t = Object(n.a)(e).rootTarget;
      t !== this && (t.assignParentResizable(this), this._notifyDescendant(t), e.stopPropagation());
    },
    _parentResizableChanged: function _parentResizableChanged(e) {
      e && window.removeEventListener("resize", this._boundNotifyResize);
    },
    _notifyDescendant: function _notifyDescendant(e) {
      this.isAttached && (this._notifyingDescendant = !0, e.notifyResize(), this._notifyingDescendant = !1);
    },
    _requestResizeNotifications: function _requestResizeNotifications() {
      if (this.isAttached) if ("loading" === document.readyState) {
        var e = this._requestResizeNotifications.bind(this);

        document.addEventListener("readystatechange", function t() {
          document.removeEventListener("readystatechange", t), e();
        });
      } else this._findParent(), this._parentResizable ? this._parentResizable._interestedResizables.forEach(function (e) {
        e !== this && e._findParent();
      }, this) : (a.forEach(function (e) {
        e !== this && e._findParent();
      }, this), window.addEventListener("resize", this._boundNotifyResize), this.notifyResize());
    },
    _findParent: function _findParent() {
      this.assignParentResizable(null), this.fire("iron-request-resize-notifications", null, {
        node: this,
        bubbles: !0,
        cancelable: !0
      }), this._parentResizable ? a.delete(this) : a.add(this);
    }
  };
}, function (e, t, i) {
  "use strict";

  i(12);
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(['<custom-style><style is="custom-style">[hidden]{display:none!important}</style></custom-style><custom-style><style is="custom-style">html{--layout:{display:-ms-flexbox;display:-webkit-flex;display:flex};--layout-inline:{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex};--layout-horizontal:{@apply --layout;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row};--layout-horizontal-reverse:{@apply --layout;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse};--layout-vertical:{@apply --layout;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column};--layout-vertical-reverse:{@apply --layout;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse};--layout-wrap:{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap};--layout-wrap-reverse:{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse};--layout-flex-auto:{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto};--layout-flex-none:{-ms-flex:none;-webkit-flex:none;flex:none};--layout-flex:{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px};--layout-flex-2:{-ms-flex:2;-webkit-flex:2;flex:2};--layout-flex-3:{-ms-flex:3;-webkit-flex:3;flex:3};--layout-flex-4:{-ms-flex:4;-webkit-flex:4;flex:4};--layout-flex-5:{-ms-flex:5;-webkit-flex:5;flex:5};--layout-flex-6:{-ms-flex:6;-webkit-flex:6;flex:6};--layout-flex-7:{-ms-flex:7;-webkit-flex:7;flex:7};--layout-flex-8:{-ms-flex:8;-webkit-flex:8;flex:8};--layout-flex-9:{-ms-flex:9;-webkit-flex:9;flex:9};--layout-flex-10:{-ms-flex:10;-webkit-flex:10;flex:10};--layout-flex-11:{-ms-flex:11;-webkit-flex:11;flex:11};--layout-flex-12:{-ms-flex:12;-webkit-flex:12;flex:12};--layout-start:{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start};--layout-center:{-ms-flex-align:center;-webkit-align-items:center;align-items:center};--layout-end:{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end};--layout-baseline:{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline};--layout-start-justified:{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start};--layout-center-justified:{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center};--layout-end-justified:{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end};--layout-around-justified:{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around};--layout-justified:{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between};--layout-center-center:{@apply --layout-center;@apply --layout-center-justified;};--layout-self-start:{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start};--layout-self-center:{-ms-align-self:center;-webkit-align-self:center;align-self:center};--layout-self-end:{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end};--layout-self-stretch:{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch};--layout-self-baseline:{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline};--layout-start-aligned:{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start};--layout-end-aligned:{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end};--layout-center-aligned:{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center};--layout-between-aligned:{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between};--layout-around-aligned:{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around};--layout-block:{display:block};--layout-invisible:{visibility:hidden!important};--layout-relative:{position:relative};--layout-fit:{position:absolute;top:0;right:0;bottom:0;left:0};--layout-scroll:{-webkit-overflow-scrolling:touch;overflow:auto};--layout-fullbleed:{margin:0;height:100vh};--layout-fixed-top:{position:fixed;top:0;left:0;right:0};--layout-fixed-right:{position:fixed;top:0;right:0;bottom:0};--layout-fixed-bottom:{position:fixed;right:0;bottom:0;left:0};--layout-fixed-left:{position:fixed;top:0;bottom:0;left:0};}</style></custom-style>']);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
  a.setAttribute("style", "display: none;"), document.head.appendChild(a.content);
  var s = document.createElement("style");
  s.textContent = "[hidden] { display: none !important; }", document.head.appendChild(s);
}, function (e, t) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" === ("undefined" === typeof window ? "undefined" : babelHelpers.typeof(window)) && (i = window);
  }

  e.exports = i;
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return u;
  });
  i(5);
  var n = !1,
      r = [],
      a = [];

  function s() {
    n = !0, requestAnimationFrame(function () {
      n = !1, o(r), setTimeout(function () {
        !function (e) {
          for (var t = 0, i = e.length; t < i; t++) {
            l(e.shift());
          }
        }(a);
      });
    });
  }

  function o(e) {
    for (; e.length;) {
      l(e.shift());
    }
  }

  function l(e) {
    var t = e[0],
        i = e[1],
        n = e[2];

    try {
      i.apply(t, n);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function u(e, t, i) {
    n || s(), a.push([e, t, i]);
  }
}, function (e, t, i) {
  (function (n) {
    var r;
    !function (n) {
      "use strict";

      var a = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: y,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: y,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        table: y,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
        text: /^[^\n]+/
      };

      function s(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || _.defaults, this.rules = a.normal, this.options.gfm && (this.options.tables ? this.rules = a.tables : this.rules = a.gfm);
      }

      a._label = /(?:\\[\[\]]|[^\[\]])+/, a._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/, a.def = f(a.def).replace("label", a._label).replace("title", a._title).getRegex(), a.bullet = /(?:[*+-]|\d+\.)/, a.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, a.item = f(a.item, "gm").replace(/bull/g, a.bullet).getRegex(), a.list = f(a.list).replace(/bull/g, a.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + a.def.source + ")").getRegex(), a._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b", a.html = f(a.html).replace("comment", /<!--[\s\S]*?-->/).replace("closed", /<(tag)[\s\S]+?<\/\1>/).replace("closing", /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g, a._tag).getRegex(), a.paragraph = f(a.paragraph).replace("hr", a.hr).replace("heading", a.heading).replace("lheading", a.lheading).replace("tag", "<" + a._tag).getRegex(), a.blockquote = f(a.blockquote).replace("paragraph", a.paragraph).getRegex(), a.normal = g({}, a), a.gfm = g({}, a.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
      }), a.gfm.paragraph = f(a.paragraph).replace("(?!", "(?!" + a.gfm.fences.source.replace("\\1", "\\2") + "|" + a.list.source.replace("\\1", "\\3") + "|").getRegex(), a.tables = g({}, a.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
      }), s.rules = a, s.lex = function (e, t) {
        return new s(t).lex(e);
      }, s.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0);
      }, s.prototype.token = function (e, t) {
        var i, n, r, s, o, l, u, c, d, h, p;

        for (e = e.replace(/^ +$/gm, ""); e;) {
          if ((r = this.rules.newline.exec(e)) && (e = e.substring(r[0].length), r[0].length > 1 && this.tokens.push({
            type: "space"
          })), r = this.rules.code.exec(e)) e = e.substring(r[0].length), r = r[0].replace(/^ {4}/gm, ""), this.tokens.push({
            type: "code",
            text: this.options.pedantic ? r : r.replace(/\n+$/, "")
          });else if (r = this.rules.fences.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "code",
            lang: r[2],
            text: r[3] || ""
          });else if (r = this.rules.heading.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "heading",
            depth: r[1].length,
            text: r[2]
          });else if (t && (r = this.rules.nptable.exec(e))) {
            for (e = e.substring(r[0].length), l = {
              type: "table",
              header: r[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
              align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: r[3].replace(/\n$/, "").split("\n")
            }, c = 0; c < l.align.length; c++) {
              /^ *-+: *$/.test(l.align[c]) ? l.align[c] = "right" : /^ *:-+: *$/.test(l.align[c]) ? l.align[c] = "center" : /^ *:-+ *$/.test(l.align[c]) ? l.align[c] = "left" : l.align[c] = null;
            }

            for (c = 0; c < l.cells.length; c++) {
              l.cells[c] = l.cells[c].split(/ *\| */);
            }

            this.tokens.push(l);
          } else if (r = this.rules.hr.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "hr"
          });else if (r = this.rules.blockquote.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "blockquote_start"
          }), r = r[0].replace(/^ *> ?/gm, ""), this.token(r, t), this.tokens.push({
            type: "blockquote_end"
          });else if (r = this.rules.list.exec(e)) {
            for (e = e.substring(r[0].length), p = (s = r[2]).length > 1, this.tokens.push({
              type: "list_start",
              ordered: p,
              start: p ? +s : ""
            }), i = !1, h = (r = r[0].match(this.rules.item)).length, c = 0; c < h; c++) {
              u = (l = r[c]).length, ~(l = l.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (u -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + u + "}", "gm"), "")), this.options.smartLists && c !== h - 1 && (s === (o = a.bullet.exec(r[c + 1])[0]) || s.length > 1 && o.length > 1 || (e = r.slice(c + 1).join("\n") + e, c = h - 1)), n = i || /\n\n(?!\s*$)/.test(l), c !== h - 1 && (i = "\n" === l.charAt(l.length - 1), n || (n = i)), this.tokens.push({
                type: n ? "loose_item_start" : "list_item_start"
              }), this.token(l, !1), this.tokens.push({
                type: "list_item_end"
              });
            }

            this.tokens.push({
              type: "list_end"
            });
          } else if (r = this.rules.html.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === r[1] || "script" === r[1] || "style" === r[1]),
            text: r[0]
          });else if (t && (r = this.rules.def.exec(e))) e = e.substring(r[0].length), r[3] && (r[3] = r[3].substring(1, r[3].length - 1)), d = r[1].toLowerCase(), this.tokens.links[d] || (this.tokens.links[d] = {
            href: r[2],
            title: r[3]
          });else if (t && (r = this.rules.table.exec(e))) {
            for (e = e.substring(r[0].length), l = {
              type: "table",
              header: r[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
              align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: r[3].replace(/(?: *\| *)?\n$/, "").split("\n")
            }, c = 0; c < l.align.length; c++) {
              /^ *-+: *$/.test(l.align[c]) ? l.align[c] = "right" : /^ *:-+: *$/.test(l.align[c]) ? l.align[c] = "center" : /^ *:-+ *$/.test(l.align[c]) ? l.align[c] = "left" : l.align[c] = null;
            }

            for (c = 0; c < l.cells.length; c++) {
              l.cells[c] = l.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
            }

            this.tokens.push(l);
          } else if (r = this.rules.lheading.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === r[2] ? 1 : 2,
            text: r[1]
          });else if (t && (r = this.rules.paragraph.exec(e))) e = e.substring(r[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === r[1].charAt(r[1].length - 1) ? r[1].slice(0, -1) : r[1]
          });else if (r = this.rules.text.exec(e)) e = e.substring(r[0].length), this.tokens.push({
            type: "text",
            text: r[0]
          });else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        }

        return this.tokens;
      };
      var o = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: y,
        tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: y,
        text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
      };

      function l(e, t) {
        if (this.options = t || _.defaults, this.links = e, this.rules = o.normal, this.renderer = this.options.renderer || new u(), this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = o.breaks : this.rules = o.gfm : this.options.pedantic && (this.rules = o.pedantic);
      }

      function u(e) {
        this.options = e || {};
      }

      function c() {}

      function d(e) {
        this.tokens = [], this.token = null, this.options = e || _.defaults, this.options.renderer = this.options.renderer || new u(), this.renderer = this.options.renderer, this.renderer.options = this.options;
      }

      function h(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      }

      function p(e) {
        return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
        });
      }

      function f(e, t) {
        return e = e.source, t = t || "", {
          replace: function replace(t, i) {
            return i = (i = i.source || i).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, i), this;
          },
          getRegex: function getRegex() {
            return new RegExp(e, t);
          }
        };
      }

      function b(e, t) {
        return m[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? m[" " + e] = e + "/" : m[" " + e] = e.replace(/[^\/]*$/, "")), e = m[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t;
      }

      o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, o._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, o.autolink = f(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex(), o._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, o._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, o.link = f(o.link).replace("inside", o._inside).replace("href", o._href).getRegex(), o.reflink = f(o.reflink).replace("inside", o._inside).getRegex(), o.normal = g({}, o), o.pedantic = g({}, o.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
      }), o.gfm = g({}, o.normal, {
        escape: f(o.escape).replace("])", "~|])").getRegex(),
        url: f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", o._email).getRegex(),
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: f(o.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
      }), o.breaks = g({}, o.gfm, {
        br: f(o.br).replace("{2,}", "*").getRegex(),
        text: f(o.gfm.text).replace("{2,}", "*").getRegex()
      }), l.rules = o, l.output = function (e, t, i) {
        return new l(t, i).output(e);
      }, l.prototype.output = function (e) {
        for (var t, i, n, r, a = ""; e;) {
          if (r = this.rules.escape.exec(e)) e = e.substring(r[0].length), a += r[1];else if (r = this.rules.autolink.exec(e)) e = e.substring(r[0].length), n = "@" === r[2] ? "mailto:" + (i = h(this.mangle(r[1]))) : i = h(r[1]), a += this.renderer.link(n, null, i);else if (this.inLink || !(r = this.rules.url.exec(e))) {
            if (r = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(r[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(r[0]) && (this.inLink = !1), e = e.substring(r[0].length), a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : h(r[0]) : r[0];else if (r = this.rules.link.exec(e)) e = e.substring(r[0].length), this.inLink = !0, a += this.outputLink(r, {
              href: r[2],
              title: r[3]
            }), this.inLink = !1;else if ((r = this.rules.reflink.exec(e)) || (r = this.rules.nolink.exec(e))) {
              if (e = e.substring(r[0].length), t = (r[2] || r[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                a += r[0].charAt(0), e = r[0].substring(1) + e;
                continue;
              }

              this.inLink = !0, a += this.outputLink(r, t), this.inLink = !1;
            } else if (r = this.rules.strong.exec(e)) e = e.substring(r[0].length), a += this.renderer.strong(this.output(r[2] || r[1]));else if (r = this.rules.em.exec(e)) e = e.substring(r[0].length), a += this.renderer.em(this.output(r[2] || r[1]));else if (r = this.rules.code.exec(e)) e = e.substring(r[0].length), a += this.renderer.codespan(h(r[2].trim(), !0));else if (r = this.rules.br.exec(e)) e = e.substring(r[0].length), a += this.renderer.br();else if (r = this.rules.del.exec(e)) e = e.substring(r[0].length), a += this.renderer.del(this.output(r[1]));else if (r = this.rules.text.exec(e)) e = e.substring(r[0].length), a += this.renderer.text(h(this.smartypants(r[0])));else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
          } else r[0] = this.rules._backpedal.exec(r[0])[0], e = e.substring(r[0].length), "@" === r[2] ? n = "mailto:" + (i = h(r[0])) : (i = h(r[0]), n = "www." === r[1] ? "http://" + i : i), a += this.renderer.link(n, null, i);
        }

        return a;
      }, l.prototype.outputLink = function (e, t) {
        var i = h(t.href),
            n = t.title ? h(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(i, n, this.output(e[1])) : this.renderer.image(i, n, h(e[1]));
      }, l.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026") : e;
      }, l.prototype.mangle = function (e) {
        if (!this.options.mangle) return e;

        for (var t, i = "", n = e.length, r = 0; r < n; r++) {
          t = e.charCodeAt(r), Math.random() > .5 && (t = "x" + t.toString(16)), i += "&#" + t + ";";
        }

        return i;
      }, u.prototype.code = function (e, t, i) {
        if (this.options.highlight) {
          var n = this.options.highlight(e, t);
          null != n && n !== e && (i = !0, e = n);
        }

        return t ? '<pre><code class="' + this.options.langPrefix + h(t, !0) + '">' + (i ? e : h(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (i ? e : h(e, !0)) + "\n</code></pre>";
      }, u.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n";
      }, u.prototype.html = function (e) {
        return e;
      }, u.prototype.heading = function (e, t, i) {
        return "<h" + t + ' id="' + this.options.headerPrefix + i.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n";
      }, u.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, u.prototype.list = function (e, t, i) {
        var n = t ? "ol" : "ul";
        return "<" + n + (t && 1 !== i ? ' start="' + i + '"' : "") + ">\n" + e + "</" + n + ">\n";
      }, u.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n";
      }, u.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n";
      }, u.prototype.table = function (e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n";
      }, u.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n";
      }, u.prototype.tablecell = function (e, t) {
        var i = t.header ? "th" : "td";
        return (t.align ? "<" + i + ' style="text-align:' + t.align + '">' : "<" + i + ">") + e + "</" + i + ">\n";
      }, u.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>";
      }, u.prototype.em = function (e) {
        return "<em>" + e + "</em>";
      }, u.prototype.codespan = function (e) {
        return "<code>" + e + "</code>";
      }, u.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, u.prototype.del = function (e) {
        return "<del>" + e + "</del>";
      }, u.prototype.link = function (e, t, i) {
        if (this.options.sanitize) {
          try {
            var n = decodeURIComponent(p(e)).replace(/[^\w:]/g, "").toLowerCase();
          } catch (e) {
            return i;
          }

          if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return i;
        }

        this.options.baseUrl && !v.test(e) && (e = b(this.options.baseUrl, e));
        var r = '<a href="' + e + '"';
        return t && (r += ' title="' + t + '"'), r += ">" + i + "</a>";
      }, u.prototype.image = function (e, t, i) {
        this.options.baseUrl && !v.test(e) && (e = b(this.options.baseUrl, e));
        var n = '<img src="' + e + '" alt="' + i + '"';
        return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">";
      }, u.prototype.text = function (e) {
        return e;
      }, c.prototype.strong = c.prototype.em = c.prototype.codespan = c.prototype.del = c.prototype.text = function (e) {
        return e;
      }, c.prototype.link = c.prototype.image = function (e, t, i) {
        return "" + i;
      }, c.prototype.br = function () {
        return "";
      }, d.parse = function (e, t) {
        return new d(t).parse(e);
      }, d.prototype.parse = function (e) {
        this.inline = new l(e.links, this.options), this.inlineText = new l(e.links, g({}, this.options, {
          renderer: new c()
        })), this.tokens = e.reverse();

        for (var t = ""; this.next();) {
          t += this.tok();
        }

        return t;
      }, d.prototype.next = function () {
        return this.token = this.tokens.pop();
      }, d.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0;
      }, d.prototype.parseText = function () {
        for (var e = this.token.text; "text" === this.peek().type;) {
          e += "\n" + this.next().text;
        }

        return this.inline.output(e);
      }, d.prototype.tok = function () {
        switch (this.token.type) {
          case "space":
            return "";

          case "hr":
            return this.renderer.hr();

          case "heading":
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, p(this.inlineText.output(this.token.text)));

          case "code":
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);

          case "table":
            var e,
                t,
                i,
                n,
                r = "",
                a = "";

            for (i = "", e = 0; e < this.token.header.length; e++) {
              i += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                header: !0,
                align: this.token.align[e]
              });
            }

            for (r += this.renderer.tablerow(i), e = 0; e < this.token.cells.length; e++) {
              for (t = this.token.cells[e], i = "", n = 0; n < t.length; n++) {
                i += this.renderer.tablecell(this.inline.output(t[n]), {
                  header: !1,
                  align: this.token.align[n]
                });
              }

              a += this.renderer.tablerow(i);
            }

            return this.renderer.table(r, a);

          case "blockquote_start":
            for (a = ""; "blockquote_end" !== this.next().type;) {
              a += this.tok();
            }

            return this.renderer.blockquote(a);

          case "list_start":
            a = "";

            for (var s = this.token.ordered, o = this.token.start; "list_end" !== this.next().type;) {
              a += this.tok();
            }

            return this.renderer.list(a, s, o);

          case "list_item_start":
            for (a = ""; "list_item_end" !== this.next().type;) {
              a += "text" === this.token.type ? this.parseText() : this.tok();
            }

            return this.renderer.listitem(a);

          case "loose_item_start":
            for (a = ""; "list_item_end" !== this.next().type;) {
              a += this.tok();
            }

            return this.renderer.listitem(a);

          case "html":
            var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
            return this.renderer.html(l);

          case "paragraph":
            return this.renderer.paragraph(this.inline.output(this.token.text));

          case "text":
            return this.renderer.paragraph(this.parseText());
        }
      };
      var m = {},
          v = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

      function y() {}

      function g(e) {
        for (var t, i, n = 1; n < arguments.length; n++) {
          for (i in t = arguments[n]) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }

        return e;
      }

      function _(e, t, i) {
        if ("undefined" === typeof e || null === e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" !== typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");

        if (i || "function" === typeof t) {
          i || (i = t, t = null);
          var n,
              r,
              a = (t = g({}, _.defaults, t || {})).highlight,
              o = 0;

          try {
            n = s.lex(e, t);
          } catch (e) {
            return i(e);
          }

          r = n.length;

          var l = function l(e) {
            if (e) return t.highlight = a, i(e);
            var r;

            try {
              r = d.parse(n, t);
            } catch (t) {
              e = t;
            }

            return t.highlight = a, e ? i(e) : i(null, r);
          };

          if (!a || a.length < 3) return l();
          if (delete t.highlight, !r) return l();

          for (; o < n.length; o++) {
            !function (e) {
              "code" !== e.type ? --r || l() : a(e.text, e.lang, function (t, i) {
                return t ? l(t) : null == i || i === e.text ? --r || l() : (e.text = i, e.escaped = !0, void (--r || l()));
              });
            }(n[o]);
          }
        } else try {
          return t && (t = g({}, _.defaults, t)), d.parse(s.lex(e, t), t);
        } catch (e) {
          if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || _.defaults).silent) return "<p>An error occurred:</p><pre>" + h(e.message + "", !0) + "</pre>";
          throw e;
        }
      }

      y.exec = y, _.options = _.setOptions = function (e) {
        return g(_.defaults, e), _;
      }, _.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new u(),
        xhtml: !1,
        baseUrl: null
      }, _.Parser = d, _.parser = d.parse, _.Renderer = u, _.TextRenderer = c, _.Lexer = s, _.lexer = s.lex, _.InlineLexer = l, _.inlineLexer = l.output, _.parse = _, "object" === babelHelpers.typeof(t) ? e.exports = _ : void 0 === (r = function () {
        return _;
      }.call(t, i, t, e)) || (e.exports = r);
    }(this || "undefined" !== typeof window && window);
  }).call(this, i(53));
}, function (e, t, i) {
  "use strict";

  if (!window.polymerSkipLoadingFontRoboto) {
    var n = document.createElement("link");
    n.rel = "stylesheet", n.type = "text/css", n.crossOrigin = "anonymous", n.href = "https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic", document.head.appendChild(n);
  }
},, function (e, t, i) {
  "use strict";

  i(12), i(52), i(56);
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(['<dom-module id="demo-pages-shared-styles"><template><style>body{font-family:Roboto,Noto,sans-serif;font-size:14px;margin:0;padding:24px;background-color:#fafafa}.horizontal-section-container{@apply --layout-horizontal;@apply --layout-center-justified;@apply --layout-wrap;}.vertical-section-container{@apply --layout-vertical;@apply --center-justified;}.centered{max-width:600px;margin-left:auto;margin-right:auto}demo-snippet.centered-demo{--demo-snippet-demo:{@apply --layout-horizontal;@apply --layout-wrap;@apply --layout-center-justified;};}</style></template></dom-module>']);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
  a.setAttribute("style", "display: none;"), document.head.appendChild(a.content);
}, function (e, t, i) {
  (function (t) {
    var i = "undefined" !== typeof window ? window : "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
        n = function () {
      var e = /\blang(?:uage)?-([\w-]+)\b/i,
          t = 0,
          n = i.Prism = {
        manual: i.Prism && i.Prism.manual,
        disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(e) {
            return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function type(e) {
            return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
          },
          objId: function objId(e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++t
            }), e.__id;
          },
          clone: function clone(e, t) {
            var i = n.util.type(e);

            switch (t = t || {}, i) {
              case "Object":
                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                a = {};

                for (var r in t[n.util.objId(e)] = a, e) {
                  e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r], t));
                }

                return a;

              case "Array":
                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                var a = [];
                return t[n.util.objId(e)] = a, e.forEach(function (e, i) {
                  a[i] = n.util.clone(e, t);
                }), a;
            }

            return e;
          }
        },
        languages: {
          extend: function extend(e, t) {
            var i = n.util.clone(n.languages[e]);

            for (var r in t) {
              i[r] = t[r];
            }

            return i;
          },
          insertBefore: function insertBefore(e, t, i, r) {
            var a = (r = r || n.languages)[e];

            if (2 == arguments.length) {
              for (var s in i = arguments[1]) {
                i.hasOwnProperty(s) && (a[s] = i[s]);
              }

              return a;
            }

            var o = {};

            for (var l in a) {
              if (a.hasOwnProperty(l)) {
                if (l == t) for (var s in i) {
                  i.hasOwnProperty(s) && (o[s] = i[s]);
                }
                o[l] = a[l];
              }
            }

            return n.languages.DFS(n.languages, function (t, i) {
              i === r[e] && t != e && (this[t] = o);
            }), r[e] = o;
          },
          DFS: function DFS(e, t, i, r) {
            for (var a in r = r || {}, e) {
              e.hasOwnProperty(a) && (t.call(e, a, e[a], i || a), "Object" !== n.util.type(e[a]) || r[n.util.objId(e[a])] ? "Array" !== n.util.type(e[a]) || r[n.util.objId(e[a])] || (r[n.util.objId(e[a])] = !0, n.languages.DFS(e[a], t, a, r)) : (r[n.util.objId(e[a])] = !0, n.languages.DFS(e[a], t, null, r)));
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(e, t) {
          n.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function highlightAllUnder(e, t, i) {
          var r = {
            callback: i,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run("before-highlightall", r);

          for (var a, s = r.elements || e.querySelectorAll(r.selector), o = 0; a = s[o++];) {
            n.highlightElement(a, !0 === t, r.callback);
          }
        },
        highlightElement: function highlightElement(t, r, a) {
          for (var s, o, l = t; l && !e.test(l.className);) {
            l = l.parentNode;
          }

          l && (s = (l.className.match(e) || [, ""])[1].toLowerCase(), o = n.languages[s]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s));
          var u = {
            element: t,
            language: s,
            grammar: o,
            code: t.textContent
          };
          if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), void n.hooks.run("complete", u);

          if (n.hooks.run("before-highlight", u), r && i.Worker) {
            var c = new Worker(n.filename);
            c.onmessage = function (e) {
              u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
            }, c.postMessage(JSON.stringify({
              language: u.language,
              code: u.code,
              immediateClose: !0
            }));
          } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        },
        highlight: function highlight(e, t, i) {
          var a = {
            code: e,
            grammar: t,
            language: i
          };
          return n.hooks.run("before-tokenize", a), a.tokens = n.tokenize(a.code, a.grammar), n.hooks.run("after-tokenize", a), r.stringify(n.util.encode(a.tokens), a.language);
        },
        matchGrammar: function matchGrammar(e, t, i, r, a, s, o) {
          var l = n.Token;

          for (var u in i) {
            if (i.hasOwnProperty(u) && i[u]) {
              if (u == o) return;
              var c = i[u];
              c = "Array" === n.util.type(c) ? c : [c];

              for (var d = 0; d < c.length; ++d) {
                var h = c[d],
                    p = h.inside,
                    f = !!h.lookbehind,
                    b = !!h.greedy,
                    m = 0,
                    v = h.alias;

                if (b && !h.pattern.global) {
                  var y = h.pattern.toString().match(/[imuy]*$/)[0];
                  h.pattern = RegExp(h.pattern.source, y + "g");
                }

                h = h.pattern || h;

                for (var g = r, _ = a; g < t.length; _ += t[g].length, ++g) {
                  var k = t[g];
                  if (t.length > e.length) return;

                  if (!(k instanceof l)) {
                    if (b && g != t.length - 1) {
                      if (h.lastIndex = _, !(S = h.exec(e))) break;

                      for (var C = S.index + (f ? S[1].length : 0), w = S.index + S[0].length, O = g, x = _, T = t.length; O < T && (x < w || !t[O].type && !t[O - 1].greedy); ++O) {
                        C >= (x += t[O].length) && (++g, _ = x);
                      }

                      if (t[g] instanceof l) continue;
                      P = O - g, k = e.slice(_, x), S.index -= _;
                    } else {
                      h.lastIndex = 0;
                      var S = h.exec(k),
                          P = 1;
                    }

                    if (S) {
                      f && (m = S[1] ? S[1].length : 0);
                      w = (C = S.index + m) + (S = S[0].slice(m)).length;
                      var H = k.slice(0, C),
                          N = k.slice(w),
                          A = [g, P];
                      H && (++g, _ += H.length, A.push(H));
                      var E = new l(u, p ? n.tokenize(S, p) : S, v, S, b);
                      if (A.push(E), N && A.push(N), Array.prototype.splice.apply(t, A), 1 != P && n.matchGrammar(e, t, i, g, _, !0, u), s) break;
                    } else if (s) break;
                  }
                }
              }
            }
          }
        },
        tokenize: function tokenize(e, t, i) {
          var r = [e],
              a = t.rest;

          if (a) {
            for (var s in a) {
              t[s] = a[s];
            }

            delete t.rest;
          }

          return n.matchGrammar(e, r, t, 0, 0, !1), r;
        },
        hooks: {
          all: {},
          add: function add(e, t) {
            var i = n.hooks.all;
            i[e] = i[e] || [], i[e].push(t);
          },
          run: function run(e, t) {
            var i = n.hooks.all[e];
            if (i && i.length) for (var r, a = 0; r = i[a++];) {
              r(t);
            }
          }
        }
      },
          r = n.Token = function (e, t, i, n, r) {
        this.type = e, this.content = t, this.alias = i, this.length = 0 | (n || "").length, this.greedy = !!r;
      };

      if (r.stringify = function (e, t, i) {
        if ("string" == typeof e) return e;
        if ("Array" === n.util.type(e)) return e.map(function (i) {
          return r.stringify(i, t, e);
        }).join("");
        var a = {
          type: e.type,
          content: r.stringify(e.content, t, i),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: t,
          parent: i
        };

        if (e.alias) {
          var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(a.classes, s);
        }

        n.hooks.run("wrap", a);
        var o = Object.keys(a.attributes).map(function (e) {
          return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + a.content + "</" + a.tag + ">";
      }, !i.document) return i.addEventListener ? (n.disableWorkerMessageHandler || i.addEventListener("message", function (e) {
        var t = JSON.parse(e.data),
            r = t.language,
            a = t.code,
            s = t.immediateClose;
        i.postMessage(n.highlight(a, n.languages[r], r)), s && i.close();
      }, !1), i.Prism) : i.Prism;
      var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
      return a && (n.filename = a.src, n.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), i.Prism;
    }();

    e.exports && (e.exports = n), "undefined" !== typeof t && (t.Prism = n), n.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: /<!DOCTYPE[\s\S]+?>/i,
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "attr-value": {
            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
            inside: {
              punctuation: [/^=/, {
                pattern: /(^|[^\\])["']/,
                lookbehind: !0
              }]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: /&#?[\da-z]{1,8};/i
    }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.hooks.add("wrap", function (e) {
      "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }), n.languages.xml = n.languages.markup, n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
          rule: /@[\w-]+/
        }
      },
      url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
      selector: /[^{}\s][^{};]*?(?=\s*\{)/,
      string: {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /\B!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:]/
    }, n.languages.css.atrule.inside.rest = n.languages.css, n.languages.markup && (n.languages.insertBefore("markup", "tag", {
      style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: n.languages.css,
        alias: "language-css",
        greedy: !0
      }
    }), n.languages.insertBefore("inside", "attr-value", {
      "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          "attr-name": {
            pattern: /^\s*style/i,
            inside: n.languages.markup.tag.inside
          },
          punctuation: /^\s*=\s*['"]|['"]\s*$/,
          "attr-value": {
            pattern: /.+/i,
            inside: n.languages.css
          }
        },
        alias: "language-css"
      }
    }, n.languages.markup.tag)), n.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /[a-z0-9_]+(?=\()/i,
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
      punctuation: /[{}[\];(),.:]/
    }, n.languages.javascript = n.languages.extend("clike", {
      keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
      number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
      function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
      operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), n.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
      },
      "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
      },
      constant: /\b[A-Z][A-Z\d_]*\b/
    }), n.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /\${[^}]+}/,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\${|}$/,
                alias: "punctuation"
              },
              rest: null
            }
          },
          string: /[\s\S]+/
        }
      }
    }), n.languages.javascript["template-string"].inside.interpolation.inside.rest = n.languages.javascript, n.languages.markup && n.languages.insertBefore("markup", "tag", {
      script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: n.languages.javascript,
        alias: "language-javascript",
        greedy: !0
      }
    }), n.languages.js = n.languages.javascript, "undefined" !== typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
      var e = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      };
      Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
        for (var i, r = t.getAttribute("data-src"), a = t, s = /\blang(?:uage)?-([\w-]+)\b/i; a && !s.test(a.className);) {
          a = a.parentNode;
        }

        if (a && (i = (t.className.match(s) || [, ""])[1]), !i) {
          var o = (r.match(/\.(\w+)$/) || [, ""])[1];
          i = e[o] || o;
        }

        var l = document.createElement("code");
        l.className = "language-" + i, t.textContent = "", l.textContent = "Loading\u2026", t.appendChild(l);
        var u = new XMLHttpRequest();
        u.open("GET", r, !0), u.onreadystatechange = function () {
          4 == u.readyState && (u.status < 400 && u.responseText ? (l.textContent = u.responseText, n.highlightElement(l)) : u.status >= 400 ? l.textContent = "\u2716 Error " + u.status + " while fetching file: " + u.statusText : l.textContent = "\u2716 Error: File does not exist or is empty");
        }, u.send(null);
      }), n.plugins.toolbar && n.plugins.toolbar.registerButton("download-file", function (e) {
        var t = e.element.parentNode;

        if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
          var i = t.getAttribute("data-src"),
              n = document.createElement("a");
          return n.textContent = t.getAttribute("data-download-link-label") || "Download", n.setAttribute("download", ""), n.href = i, n;
        }
      });
    }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight));
  }).call(this, i(53));
}, function (e, t, i) {
  "use strict";

  i(12);
  var n = i(2),
      r = {
    properties: {
      sizingTarget: {
        type: Object,
        value: function value() {
          return this;
        }
      },
      fitInto: {
        type: Object,
        value: window
      },
      noOverlap: {
        type: Boolean
      },
      positionTarget: {
        type: Element
      },
      horizontalAlign: {
        type: String
      },
      verticalAlign: {
        type: String
      },
      dynamicAlign: {
        type: Boolean
      },
      horizontalOffset: {
        type: Number,
        value: 0,
        notify: !0
      },
      verticalOffset: {
        type: Number,
        value: 0,
        notify: !0
      },
      autoFitOnAttach: {
        type: Boolean,
        value: !1
      },
      _fitInfo: {
        type: Object
      }
    },

    get _fitWidth() {
      return this.fitInto === window ? this.fitInto.innerWidth : this.fitInto.getBoundingClientRect().width;
    },

    get _fitHeight() {
      return this.fitInto === window ? this.fitInto.innerHeight : this.fitInto.getBoundingClientRect().height;
    },

    get _fitLeft() {
      return this.fitInto === window ? 0 : this.fitInto.getBoundingClientRect().left;
    },

    get _fitTop() {
      return this.fitInto === window ? 0 : this.fitInto.getBoundingClientRect().top;
    },

    get _defaultPositionTarget() {
      var e = Object(n.a)(this).parentNode;
      return e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (e = e.host), e;
    },

    get _localeHorizontalAlign() {
      if (this._isRTL) {
        if ("right" === this.horizontalAlign) return "left";
        if ("left" === this.horizontalAlign) return "right";
      }

      return this.horizontalAlign;
    },

    get __shouldPosition() {
      return (this.horizontalAlign || this.verticalAlign) && this.positionTarget;
    },

    attached: function attached() {
      "undefined" === typeof this._isRTL && (this._isRTL = "rtl" == window.getComputedStyle(this).direction), this.positionTarget = this.positionTarget || this._defaultPositionTarget, this.autoFitOnAttach && ("none" === window.getComputedStyle(this).display ? setTimeout(function () {
        this.fit();
      }.bind(this)) : (window.ShadyDOM && ShadyDOM.flush(), this.fit()));
    },
    detached: function detached() {
      this.__deferredFit && (clearTimeout(this.__deferredFit), this.__deferredFit = null);
    },
    fit: function fit() {
      this.position(), this.constrain(), this.center();
    },
    _discoverInfo: function _discoverInfo() {
      if (!this._fitInfo) {
        var e = window.getComputedStyle(this),
            t = window.getComputedStyle(this.sizingTarget);
        this._fitInfo = {
          inlineStyle: {
            top: this.style.top || "",
            left: this.style.left || "",
            position: this.style.position || ""
          },
          sizerInlineStyle: {
            maxWidth: this.sizingTarget.style.maxWidth || "",
            maxHeight: this.sizingTarget.style.maxHeight || "",
            boxSizing: this.sizingTarget.style.boxSizing || ""
          },
          positionedBy: {
            vertically: "auto" !== e.top ? "top" : "auto" !== e.bottom ? "bottom" : null,
            horizontally: "auto" !== e.left ? "left" : "auto" !== e.right ? "right" : null
          },
          sizedBy: {
            height: "none" !== t.maxHeight,
            width: "none" !== t.maxWidth,
            minWidth: parseInt(t.minWidth, 10) || 0,
            minHeight: parseInt(t.minHeight, 10) || 0
          },
          margin: {
            top: parseInt(e.marginTop, 10) || 0,
            right: parseInt(e.marginRight, 10) || 0,
            bottom: parseInt(e.marginBottom, 10) || 0,
            left: parseInt(e.marginLeft, 10) || 0
          }
        };
      }
    },
    resetFit: function resetFit() {
      var e = this._fitInfo || {};

      for (var t in e.sizerInlineStyle) {
        this.sizingTarget.style[t] = e.sizerInlineStyle[t];
      }

      for (var t in e.inlineStyle) {
        this.style[t] = e.inlineStyle[t];
      }

      this._fitInfo = null;
    },
    refit: function refit() {
      var e = this.sizingTarget.scrollLeft,
          t = this.sizingTarget.scrollTop;
      this.resetFit(), this.fit(), this.sizingTarget.scrollLeft = e, this.sizingTarget.scrollTop = t;
    },
    position: function position() {
      if (this.__shouldPosition) {
        this._discoverInfo(), this.style.position = "fixed", this.sizingTarget.style.boxSizing = "border-box", this.style.left = "0px", this.style.top = "0px";

        var e = this.getBoundingClientRect(),
            t = this.__getNormalizedRect(this.positionTarget),
            i = this.__getNormalizedRect(this.fitInto),
            n = this._fitInfo.margin,
            r = {
          width: e.width + n.left + n.right,
          height: e.height + n.top + n.bottom
        },
            a = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, r, e, t, i),
            s = a.left + n.left,
            o = a.top + n.top,
            l = Math.min(i.right - n.right, s + e.width),
            u = Math.min(i.bottom - n.bottom, o + e.height);

        s = Math.max(i.left + n.left, Math.min(s, l - this._fitInfo.sizedBy.minWidth)), o = Math.max(i.top + n.top, Math.min(o, u - this._fitInfo.sizedBy.minHeight)), this.sizingTarget.style.maxWidth = Math.max(l - s, this._fitInfo.sizedBy.minWidth) + "px", this.sizingTarget.style.maxHeight = Math.max(u - o, this._fitInfo.sizedBy.minHeight) + "px", this.style.left = s - e.left + "px", this.style.top = o - e.top + "px";
      }
    },
    constrain: function constrain() {
      if (!this.__shouldPosition) {
        this._discoverInfo();

        var e = this._fitInfo;
        e.positionedBy.vertically || (this.style.position = "fixed", this.style.top = "0px"), e.positionedBy.horizontally || (this.style.position = "fixed", this.style.left = "0px"), this.sizingTarget.style.boxSizing = "border-box";
        var t = this.getBoundingClientRect();
        e.sizedBy.height || this.__sizeDimension(t, e.positionedBy.vertically, "top", "bottom", "Height"), e.sizedBy.width || this.__sizeDimension(t, e.positionedBy.horizontally, "left", "right", "Width");
      }
    },
    _sizeDimension: function _sizeDimension(e, t, i, n, r) {
      this.__sizeDimension(e, t, i, n, r);
    },
    __sizeDimension: function __sizeDimension(e, t, i, n, r) {
      var a = this._fitInfo,
          s = this.__getNormalizedRect(this.fitInto),
          o = "Width" === r ? s.width : s.height,
          l = t === n,
          u = l ? o - e[n] : e[i],
          c = a.margin[l ? i : n],
          d = "offset" + r,
          h = this[d] - this.sizingTarget[d];

      this.sizingTarget.style["max" + r] = o - c - u - h + "px";
    },
    center: function center() {
      if (!this.__shouldPosition) {
        this._discoverInfo();

        var e = this._fitInfo.positionedBy;

        if (!e.vertically || !e.horizontally) {
          this.style.position = "fixed", e.vertically || (this.style.top = "0px"), e.horizontally || (this.style.left = "0px");

          var t = this.getBoundingClientRect(),
              i = this.__getNormalizedRect(this.fitInto);

          if (!e.vertically) {
            var n = i.top - t.top + (i.height - t.height) / 2;
            this.style.top = n + "px";
          }

          if (!e.horizontally) {
            var r = i.left - t.left + (i.width - t.width) / 2;
            this.style.left = r + "px";
          }
        }
      }
    },
    __getNormalizedRect: function __getNormalizedRect(e) {
      return e === document.documentElement || e === window ? {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      } : e.getBoundingClientRect();
    },
    __getOffscreenArea: function __getOffscreenArea(e, t, i) {
      var n = Math.min(0, e.top) + Math.min(0, i.bottom - (e.top + t.height)),
          r = Math.min(0, e.left) + Math.min(0, i.right - (e.left + t.width));
      return Math.abs(n) * t.width + Math.abs(r) * t.height;
    },
    __getPosition: function __getPosition(e, t, i, n, r, a) {
      var s,
          o = [{
        verticalAlign: "top",
        horizontalAlign: "left",
        top: r.top + this.verticalOffset,
        left: r.left + this.horizontalOffset
      }, {
        verticalAlign: "top",
        horizontalAlign: "right",
        top: r.top + this.verticalOffset,
        left: r.right - i.width - this.horizontalOffset
      }, {
        verticalAlign: "bottom",
        horizontalAlign: "left",
        top: r.bottom - i.height - this.verticalOffset,
        left: r.left + this.horizontalOffset
      }, {
        verticalAlign: "bottom",
        horizontalAlign: "right",
        top: r.bottom - i.height - this.verticalOffset,
        left: r.right - i.width - this.horizontalOffset
      }];

      if (this.noOverlap) {
        for (var l = 0, u = o.length; l < u; l++) {
          var c = {};

          for (var d in o[l]) {
            c[d] = o[l][d];
          }

          o.push(c);
        }

        o[0].top = o[1].top += r.height, o[2].top = o[3].top -= r.height, o[4].left = o[6].left += r.width, o[5].left = o[7].left -= r.width;
      }

      t = "auto" === t ? null : t, (e = "auto" === e ? null : e) && "center" !== e || (o.push({
        verticalAlign: "top",
        horizontalAlign: "center",
        top: r.top + this.verticalOffset + (this.noOverlap ? r.height : 0),
        left: r.left - n.width / 2 + r.width / 2 + this.horizontalOffset
      }), o.push({
        verticalAlign: "bottom",
        horizontalAlign: "center",
        top: r.bottom - i.height - this.verticalOffset - (this.noOverlap ? r.height : 0),
        left: r.left - n.width / 2 + r.width / 2 + this.horizontalOffset
      })), t && "middle" !== t || (o.push({
        verticalAlign: "middle",
        horizontalAlign: "left",
        top: r.top - n.height / 2 + r.height / 2 + this.verticalOffset,
        left: r.left + this.horizontalOffset + (this.noOverlap ? r.width : 0)
      }), o.push({
        verticalAlign: "middle",
        horizontalAlign: "right",
        top: r.top - n.height / 2 + r.height / 2 + this.verticalOffset,
        left: r.right - i.width - this.horizontalOffset - (this.noOverlap ? r.width : 0)
      })), "middle" === t && "center" === e && o.push({
        verticalAlign: "middle",
        horizontalAlign: "center",
        top: r.top - n.height / 2 + r.height / 2 + this.verticalOffset,
        left: r.left - n.width / 2 + r.width / 2 + this.horizontalOffset
      });

      for (l = 0; l < o.length; l++) {
        var h = o[l],
            p = h.verticalAlign === t,
            f = h.horizontalAlign === e;

        if (!this.dynamicAlign && !this.noOverlap && p && f) {
          s = h;
          break;
        }

        var b = (!t || p) && (!e || f);

        if (this.dynamicAlign || b) {
          if (h.offscreenArea = this.__getOffscreenArea(h, i, a), 0 === h.offscreenArea && b) {
            s = h;
            break;
          }

          s = s || h;
          var m = h.offscreenArea - s.offscreenArea;
          (m < 0 || 0 === m && (p || f)) && (s = h);
        }
      }

      return s;
    }
  },
      a = i(51),
      s = i(6),
      o = Element.prototype,
      l = o.matches || o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector,
      u = {
    getTabbableNodes: function getTabbableNodes(e) {
      var t = [];
      return this._collectTabbableNodes(e, t) ? this._sortByTabIndex(t) : t;
    },
    isFocusable: function isFocusable(e) {
      return l.call(e, "input, select, textarea, button, object") ? l.call(e, ":not([disabled])") : l.call(e, "a[href], area[href], iframe, [tabindex], [contentEditable]");
    },
    isTabbable: function isTabbable(e) {
      return this.isFocusable(e) && l.call(e, ':not([tabindex="-1"])') && this._isVisible(e);
    },
    _normalizedTabIndex: function _normalizedTabIndex(e) {
      if (this.isFocusable(e)) {
        var t = e.getAttribute("tabindex") || 0;
        return Number(t);
      }

      return -1;
    },
    _collectTabbableNodes: function _collectTabbableNodes(e, t) {
      if (e.nodeType !== Node.ELEMENT_NODE || !this._isVisible(e)) return !1;

      var i,
          r = e,
          a = this._normalizedTabIndex(r),
          s = a > 0;

      a >= 0 && t.push(r), i = "content" === r.localName || "slot" === r.localName ? Object(n.a)(r).getDistributedNodes() : Object(n.a)(r.root || r).children;

      for (var o = 0; o < i.length; o++) {
        s = this._collectTabbableNodes(i[o], t) || s;
      }

      return s;
    },
    _isVisible: function _isVisible(e) {
      var t = e.style;
      return "hidden" !== t.visibility && "none" !== t.display && "hidden" !== (t = window.getComputedStyle(e)).visibility && "none" !== t.display;
    },
    _sortByTabIndex: function _sortByTabIndex(e) {
      var t = e.length;
      if (t < 2) return e;

      var i = Math.ceil(t / 2),
          n = this._sortByTabIndex(e.slice(0, i)),
          r = this._sortByTabIndex(e.slice(i));

      return this._mergeSortByTabIndex(n, r);
    },
    _mergeSortByTabIndex: function _mergeSortByTabIndex(e, t) {
      for (var i = []; e.length > 0 && t.length > 0;) {
        this._hasLowerTabOrder(e[0], t[0]) ? i.push(t.shift()) : i.push(e.shift());
      }

      return i.concat(e, t);
    },
    _hasLowerTabOrder: function _hasLowerTabOrder(e, t) {
      var i = Math.max(e.tabIndex, 0),
          n = Math.max(t.tabIndex, 0);
      return 0 === i || 0 === n ? n > i : i > n;
    }
  },
      c = i(13),
      d = i(0);

  function h() {
    var e = babelHelpers.taggedTemplateLiteral(["<style>:host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--iron-overlay-backdrop-background-color,#000);opacity:0;transition:opacity .2s;pointer-events:none;@apply --iron-overlay-backdrop;}:host(.opened){opacity:var(--iron-overlay-backdrop-opacity,.6);pointer-events:auto;@apply --iron-overlay-backdrop-opened;}</style><slot></slot>"]);
    return h = function h() {
      return e;
    }, e;
  }

  Object(c.a)({
    _template: Object(d.a)(h()),
    is: "iron-overlay-backdrop",
    properties: {
      opened: {
        reflectToAttribute: !0,
        type: Boolean,
        value: !1,
        observer: "_openedChanged"
      }
    },
    listeners: {
      transitionend: "_onTransitionend"
    },
    created: function created() {
      this.__openedRaf = null;
    },
    attached: function attached() {
      this.opened && this._openedChanged(this.opened);
    },
    prepare: function prepare() {
      this.opened && !this.parentNode && Object(n.a)(document.body).appendChild(this);
    },
    open: function open() {
      this.opened = !0;
    },
    close: function close() {
      this.opened = !1;
    },
    complete: function complete() {
      this.opened || this.parentNode !== document.body || Object(n.a)(this.parentNode).removeChild(this);
    },
    _onTransitionend: function _onTransitionend(e) {
      e && e.target === this && this.complete();
    },
    _openedChanged: function _openedChanged(e) {
      if (e) this.prepare();else {
        var t = window.getComputedStyle(this);
        "0s" !== t.transitionDuration && 0 != t.opacity || this.complete();
      }
      this.isAttached && (this.__openedRaf && (window.cancelAnimationFrame(this.__openedRaf), this.__openedRaf = null), this.scrollTop = this.scrollTop, this.__openedRaf = window.requestAnimationFrame(function () {
        this.__openedRaf = null, this.toggleClass("opened", this.opened);
      }.bind(this)));
    }
  });

  var p = i(48),
      f = i(10),
      b = function b() {
    this._overlays = [], this._minimumZ = 101, this._backdropElement = null, f.a(document.documentElement, "tap", function () {}), document.addEventListener("tap", this._onCaptureClick.bind(this), !0), document.addEventListener("focus", this._onCaptureFocus.bind(this), !0), document.addEventListener("keydown", this._onCaptureKeyDown.bind(this), !0);
  };

  b.prototype = {
    constructor: b,

    get backdropElement() {
      return this._backdropElement || (this._backdropElement = document.createElement("iron-overlay-backdrop")), this._backdropElement;
    },

    get deepActiveElement() {
      var e = document.activeElement;

      for (e && e instanceof Element !== !1 || (e = document.body); e.root && Object(n.a)(e.root).activeElement;) {
        e = Object(n.a)(e.root).activeElement;
      }

      return e;
    },

    _bringOverlayAtIndexToFront: function _bringOverlayAtIndexToFront(e) {
      var t = this._overlays[e];

      if (t) {
        var i = this._overlays.length - 1,
            n = this._overlays[i];

        if (n && this._shouldBeBehindOverlay(t, n) && i--, !(e >= i)) {
          var r = Math.max(this.currentOverlayZ(), this._minimumZ);

          for (this._getZ(t) <= r && this._applyOverlayZ(t, r); e < i;) {
            this._overlays[e] = this._overlays[e + 1], e++;
          }

          this._overlays[i] = t;
        }
      }
    },
    addOrRemoveOverlay: function addOrRemoveOverlay(e) {
      e.opened ? this.addOverlay(e) : this.removeOverlay(e);
    },
    addOverlay: function addOverlay(e) {
      var t = this._overlays.indexOf(e);

      if (t >= 0) return this._bringOverlayAtIndexToFront(t), void this.trackBackdrop();

      var i = this._overlays.length,
          n = this._overlays[i - 1],
          r = Math.max(this._getZ(n), this._minimumZ),
          a = this._getZ(e);

      if (n && this._shouldBeBehindOverlay(e, n)) {
        this._applyOverlayZ(n, r), i--;
        var s = this._overlays[i - 1];
        r = Math.max(this._getZ(s), this._minimumZ);
      }

      a <= r && this._applyOverlayZ(e, r), this._overlays.splice(i, 0, e), this.trackBackdrop();
    },
    removeOverlay: function removeOverlay(e) {
      var t = this._overlays.indexOf(e);

      -1 !== t && (this._overlays.splice(t, 1), this.trackBackdrop());
    },
    currentOverlay: function currentOverlay() {
      var e = this._overlays.length - 1;
      return this._overlays[e];
    },
    currentOverlayZ: function currentOverlayZ() {
      return this._getZ(this.currentOverlay());
    },
    ensureMinimumZ: function ensureMinimumZ(e) {
      this._minimumZ = Math.max(this._minimumZ, e);
    },
    focusOverlay: function focusOverlay() {
      var e = this.currentOverlay();
      e && e._applyFocus();
    },
    trackBackdrop: function trackBackdrop() {
      var e = this._overlayWithBackdrop();

      (e || this._backdropElement) && (this.backdropElement.style.zIndex = this._getZ(e) - 1, this.backdropElement.opened = !!e, this.backdropElement.prepare());
    },
    getBackdrops: function getBackdrops() {
      for (var e = [], t = 0; t < this._overlays.length; t++) {
        this._overlays[t].withBackdrop && e.push(this._overlays[t]);
      }

      return e;
    },
    backdropZ: function backdropZ() {
      return this._getZ(this._overlayWithBackdrop()) - 1;
    },
    _overlayWithBackdrop: function _overlayWithBackdrop() {
      for (var e = this._overlays.length - 1; e >= 0; e--) {
        if (this._overlays[e].withBackdrop) return this._overlays[e];
      }
    },
    _getZ: function _getZ(e) {
      var t = this._minimumZ;

      if (e) {
        var i = Number(e.style.zIndex || window.getComputedStyle(e).zIndex);
        i === i && (t = i);
      }

      return t;
    },
    _setZ: function _setZ(e, t) {
      e.style.zIndex = t;
    },
    _applyOverlayZ: function _applyOverlayZ(e, t) {
      this._setZ(e, t + 2);
    },
    _overlayInPath: function _overlayInPath(e) {
      e = e || [];

      for (var t = 0; t < e.length; t++) {
        if (e[t]._manager === this) return e[t];
      }
    },
    _onCaptureClick: function _onCaptureClick(e) {
      var t = this._overlays.length - 1;
      if (-1 !== t) for (var i, r = Object(n.a)(e).path; (i = this._overlays[t]) && this._overlayInPath(r) !== i && (i._onCaptureClick(e), i.allowClickThrough);) {
        t--;
      }
    },
    _onCaptureFocus: function _onCaptureFocus(e) {
      var t = this.currentOverlay();
      t && t._onCaptureFocus(e);
    },
    _onCaptureKeyDown: function _onCaptureKeyDown(e) {
      var t = this.currentOverlay();
      t && (p.a.keyboardEventMatchesKeys(e, "esc") ? t._onCaptureEsc(e) : p.a.keyboardEventMatchesKeys(e, "tab") && t._onCaptureTab(e));
    },
    _shouldBeBehindOverlay: function _shouldBeBehindOverlay(e, t) {
      return !e.alwaysOnTop && t.alwaysOnTop;
    }
  };
  var m,
      v,
      y = new b(),
      g = {
    pageX: 0,
    pageY: 0
  },
      _ = null,
      k = [],
      C = ["wheel", "mousewheel", "DOMMouseScroll", "touchstart", "touchmove"];

  function w(e) {
    x.indexOf(e) >= 0 || (0 === x.length && function () {
      m = m || function (e) {
        e.cancelable && function (e) {
          var t = Object(n.a)(e).rootTarget;
          "touchmove" !== e.type && _ !== t && (_ = t, k = function (e) {
            for (var t = [], i = e.indexOf(v), n = 0; n <= i; n++) {
              if (e[n].nodeType === Node.ELEMENT_NODE) {
                var r = e[n],
                    a = r.style;
                "scroll" !== a.overflow && "auto" !== a.overflow && (a = window.getComputedStyle(r)), "scroll" !== a.overflow && "auto" !== a.overflow || t.push(r);
              }
            }

            return t;
          }(Object(n.a)(e).path));
          if (!k.length) return !0;
          if ("touchstart" === e.type) return !1;

          var i = function (e) {
            var t = {
              deltaX: e.deltaX,
              deltaY: e.deltaY
            };
            if ("deltaX" in e) ;else if ("wheelDeltaX" in e && "wheelDeltaY" in e) t.deltaX = -e.wheelDeltaX, t.deltaY = -e.wheelDeltaY;else if ("wheelDelta" in e) t.deltaX = 0, t.deltaY = -e.wheelDelta;else if ("axis" in e) t.deltaX = 1 === e.axis ? e.detail : 0, t.deltaY = 2 === e.axis ? e.detail : 0;else if (e.targetTouches) {
              var i = e.targetTouches[0];
              t.deltaX = g.pageX - i.pageX, t.deltaY = g.pageY - i.pageY;
            }
            return t;
          }(e);

          return !function (e, t, i) {
            if (!t && !i) return;

            for (var n = Math.abs(i) >= Math.abs(t), r = 0; r < e.length; r++) {
              var a = e[r];
              if (n ? i < 0 ? a.scrollTop > 0 : a.scrollTop < a.scrollHeight - a.clientHeight : t < 0 ? a.scrollLeft > 0 : a.scrollLeft < a.scrollWidth - a.clientWidth) return a;
            }
          }(k, i.deltaX, i.deltaY);
        }(e) && e.preventDefault();

        if (e.targetTouches) {
          var t = e.targetTouches[0];
          g.pageX = t.pageX, g.pageY = t.pageY;
        }
      }.bind(void 0);

      for (var e = 0, t = C.length; e < t; e++) {
        document.addEventListener(C[e], m, {
          capture: !0,
          passive: !1
        });
      }
    }(), x.push(e), v = x[x.length - 1], [], []);
  }

  function O(e) {
    var t = x.indexOf(e);
    -1 !== t && (x.splice(t, 1), v = x[x.length - 1], [], [], 0 === x.length && function () {
      for (var e = 0, t = C.length; e < t; e++) {
        document.removeEventListener(C[e], m, {
          capture: !0,
          passive: !1
        });
      }
    }());
  }

  var x = [];
  var T = {
    properties: {
      opened: {
        observer: "_openedChanged",
        type: Boolean,
        value: !1,
        notify: !0
      },
      canceled: {
        observer: "_canceledChanged",
        readOnly: !0,
        type: Boolean,
        value: !1
      },
      withBackdrop: {
        observer: "_withBackdropChanged",
        type: Boolean
      },
      noAutoFocus: {
        type: Boolean,
        value: !1
      },
      noCancelOnEscKey: {
        type: Boolean,
        value: !1
      },
      noCancelOnOutsideClick: {
        type: Boolean,
        value: !1
      },
      closingReason: {
        type: Object
      },
      restoreFocusOnClose: {
        type: Boolean,
        value: !1
      },
      allowClickThrough: {
        type: Boolean
      },
      alwaysOnTop: {
        type: Boolean
      },
      scrollAction: {
        type: String
      },
      _manager: {
        type: Object,
        value: y
      },
      _focusedChild: {
        type: Object
      }
    },
    listeners: {
      "iron-resize": "_onIronResize"
    },
    observers: ["__updateScrollObservers(isAttached, opened, scrollAction)"],

    get backdropElement() {
      return this._manager.backdropElement;
    },

    get _focusNode() {
      return this._focusedChild || Object(n.a)(this).querySelector("[autofocus]") || this;
    },

    get _focusableNodes() {
      return u.getTabbableNodes(this);
    },

    ready: function ready() {
      this.__isAnimating = !1, this.__shouldRemoveTabIndex = !1, this.__firstFocusableNode = this.__lastFocusableNode = null, this.__rafs = {}, this.__restoreFocusNode = null, this.__scrollTop = this.__scrollLeft = null, this.__onCaptureScroll = this.__onCaptureScroll.bind(this), this.__rootNodes = null, this._ensureSetup();
    },
    attached: function attached() {
      this.opened && this._openedChanged(this.opened), this._observer = Object(n.a)(this).observeNodes(this._onNodesChange);
    },
    detached: function detached() {
      for (var e in Object(n.a)(this).unobserveNodes(this._observer), this._observer = null, this.__rafs) {
        null !== this.__rafs[e] && cancelAnimationFrame(this.__rafs[e]);
      }

      this.__rafs = {}, this._manager.removeOverlay(this), this.__isAnimating && (this.opened ? this._finishRenderOpened() : (this._applyFocus(), this._finishRenderClosed()));
    },
    toggle: function toggle() {
      this._setCanceled(!1), this.opened = !this.opened;
    },
    open: function open() {
      this._setCanceled(!1), this.opened = !0;
    },
    close: function close() {
      this._setCanceled(!1), this.opened = !1;
    },
    cancel: function cancel(e) {
      this.fire("iron-overlay-canceled", e, {
        cancelable: !0
      }).defaultPrevented || (this._setCanceled(!0), this.opened = !1);
    },
    invalidateTabbables: function invalidateTabbables() {
      this.__firstFocusableNode = this.__lastFocusableNode = null;
    },
    _ensureSetup: function _ensureSetup() {
      this._overlaySetup || (this._overlaySetup = !0, this.style.outline = "none", this.style.display = "none");
    },
    _openedChanged: function _openedChanged(e) {
      e ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true"), this.isAttached && (this.__isAnimating = !0, this.__deraf("__openedChanged", this.__openedChanged));
    },
    _canceledChanged: function _canceledChanged() {
      this.closingReason = this.closingReason || {}, this.closingReason.canceled = this.canceled;
    },
    _withBackdropChanged: function _withBackdropChanged() {
      this.withBackdrop && !this.hasAttribute("tabindex") ? (this.setAttribute("tabindex", "-1"), this.__shouldRemoveTabIndex = !0) : this.__shouldRemoveTabIndex && (this.removeAttribute("tabindex"), this.__shouldRemoveTabIndex = !1), this.opened && this.isAttached && this._manager.trackBackdrop();
    },
    _prepareRenderOpened: function _prepareRenderOpened() {
      this.__restoreFocusNode = this._manager.deepActiveElement, this._preparePositioning(), this.refit(), this._finishPositioning(), this.noAutoFocus && document.activeElement === this._focusNode && (this._focusNode.blur(), this.__restoreFocusNode.focus());
    },
    _renderOpened: function _renderOpened() {
      this._finishRenderOpened();
    },
    _renderClosed: function _renderClosed() {
      this._finishRenderClosed();
    },
    _finishRenderOpened: function _finishRenderOpened() {
      this.notifyResize(), this.__isAnimating = !1, this.fire("iron-overlay-opened");
    },
    _finishRenderClosed: function _finishRenderClosed() {
      this.style.display = "none", this.style.zIndex = "", this.notifyResize(), this.__isAnimating = !1, this.fire("iron-overlay-closed", this.closingReason);
    },
    _preparePositioning: function _preparePositioning() {
      this.style.transition = this.style.webkitTransition = "none", this.style.transform = this.style.webkitTransform = "none", this.style.display = "";
    },
    _finishPositioning: function _finishPositioning() {
      this.style.display = "none", this.scrollTop = this.scrollTop, this.style.transition = this.style.webkitTransition = "", this.style.transform = this.style.webkitTransform = "", this.style.display = "", this.scrollTop = this.scrollTop;
    },
    _applyFocus: function _applyFocus() {
      if (this.opened) this.noAutoFocus || this._focusNode.focus();else {
        if (this.restoreFocusOnClose && this.__restoreFocusNode) {
          var e = this._manager.deepActiveElement;
          (e === document.body || Object(n.a)(this).deepContains(e)) && this.__restoreFocusNode.focus();
        }

        this.__restoreFocusNode = null, this._focusNode.blur(), this._focusedChild = null;
      }
    },
    _onCaptureClick: function _onCaptureClick(e) {
      this.noCancelOnOutsideClick || this.cancel(e);
    },
    _onCaptureFocus: function _onCaptureFocus(e) {
      if (this.withBackdrop) {
        var t = Object(n.a)(e).path;
        -1 === t.indexOf(this) ? (e.stopPropagation(), this._applyFocus()) : this._focusedChild = t[0];
      }
    },
    _onCaptureEsc: function _onCaptureEsc(e) {
      this.noCancelOnEscKey || this.cancel(e);
    },
    _onCaptureTab: function _onCaptureTab(e) {
      if (this.withBackdrop) {
        this.__ensureFirstLastFocusables();

        var t = e.shiftKey,
            i = t ? this.__firstFocusableNode : this.__lastFocusableNode,
            n = t ? this.__lastFocusableNode : this.__firstFocusableNode,
            r = !1;
        if (i === n) r = !0;else {
          var a = this._manager.deepActiveElement;
          r = a === i || a === this;
        }
        r && (e.preventDefault(), this._focusedChild = n, this._applyFocus());
      }
    },
    _onIronResize: function _onIronResize() {
      this.opened && !this.__isAnimating && this.__deraf("refit", this.refit);
    },
    _onNodesChange: function _onNodesChange() {
      this.opened && !this.__isAnimating && (this.invalidateTabbables(), this.notifyResize());
    },
    __ensureFirstLastFocusables: function __ensureFirstLastFocusables() {
      var e = this._focusableNodes;
      this.__firstFocusableNode = e[0], this.__lastFocusableNode = e[e.length - 1];
    },
    __openedChanged: function __openedChanged() {
      this.opened ? (this._prepareRenderOpened(), this._manager.addOverlay(this), this._applyFocus(), this._renderOpened()) : (this._manager.removeOverlay(this), this._applyFocus(), this._renderClosed());
    },
    __deraf: function __deraf(e, t) {
      var i = this.__rafs;
      null !== i[e] && cancelAnimationFrame(i[e]), i[e] = requestAnimationFrame(function () {
        i[e] = null, t.call(this);
      }.bind(this));
    },
    __updateScrollObservers: function __updateScrollObservers(e, t, i) {
      e && t && this.__isValidScrollAction(i) ? ("lock" === i && (this.__saveScrollPosition(), w(this)), this.__addScrollListeners()) : (O(this), this.__removeScrollListeners());
    },
    __addScrollListeners: function __addScrollListeners() {
      if (!this.__rootNodes) {
        if (this.__rootNodes = [], s.f) for (var e = this; e;) {
          e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host && this.__rootNodes.push(e), e = e.host || e.assignedSlot || e.parentNode;
        }

        this.__rootNodes.push(document);
      }

      this.__rootNodes.forEach(function (e) {
        e.addEventListener("scroll", this.__onCaptureScroll, {
          capture: !0,
          passive: !0
        });
      }, this);
    },
    __removeScrollListeners: function __removeScrollListeners() {
      this.__rootNodes && this.__rootNodes.forEach(function (e) {
        e.removeEventListener("scroll", this.__onCaptureScroll, {
          capture: !0,
          passive: !0
        });
      }, this), this.isAttached || (this.__rootNodes = null);
    },
    __isValidScrollAction: function __isValidScrollAction(e) {
      return "lock" === e || "refit" === e || "cancel" === e;
    },
    __onCaptureScroll: function __onCaptureScroll(e) {
      if (!this.__isAnimating && !(Object(n.a)(e).path.indexOf(this) >= 0)) switch (this.scrollAction) {
        case "lock":
          this.__restoreScrollPosition();

          break;

        case "refit":
          this.__deraf("refit", this.refit);

          break;

        case "cancel":
          this.cancel(e);
      }
    },
    __saveScrollPosition: function __saveScrollPosition() {
      document.scrollingElement ? (this.__scrollTop = document.scrollingElement.scrollTop, this.__scrollLeft = document.scrollingElement.scrollLeft) : (this.__scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop), this.__scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft));
    },
    __restoreScrollPosition: function __restoreScrollPosition() {
      document.scrollingElement ? (document.scrollingElement.scrollTop = this.__scrollTop, document.scrollingElement.scrollLeft = this.__scrollLeft) : (document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop, document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft);
    }
  },
      S = [r, a.a, T],
      P = i(45),
      H = i(4);

  function N() {
    var e = babelHelpers.taggedTemplateLiteral(["<slot></slot>"]);
    return N = function N() {
      return e;
    }, e;
  }

  var A = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "_fitIntoChanged",
      value: function value(e, t) {
        e && t && this.fit();
      }
    }, {
      key: "_attachDom",
      value: function value(e) {
        return this.shadowRoot || (this.attachShadow({
          mode: "open",
          delegatesFocus: !0
        }), this.shadowRoot.appendChild(e)), this.shadowRoot;
      }
    }], [{
      key: "is",
      get: function get() {
        return "overlay-element";
      }
    }, {
      key: "template",
      get: function get() {
        return Object(d.a)(N());
      }
    }, {
      key: "observers",
      get: function get() {
        return ["_fitIntoChanged(fitInto, positionTarget)"];
      }
    }]), t;
  }(Object(P.b)([S], H.a));

  customElements.get(A.is) || customElements.define(A.is, A);
}, function (e, t, i) {
  "use strict";

  var n = i(12),
      r = i(55);
  window.marked || (window.marked = r);
  var a = i(13),
      s = i(2),
      o = i(0);

  function l() {
    var e = babelHelpers.taggedTemplateLiteral(['<style>:host{display:block}</style><slot name="markdown-html"><div id="content"></div></slot>']);
    return l = function l() {
      return e;
    }, e;
  }

  Object(a.a)({
    _template: Object(o.a)(l()),
    is: "marked-element",
    properties: {
      markdown: {
        type: String,
        value: null
      },
      breaks: {
        type: Boolean,
        value: !1
      },
      pedantic: {
        type: Boolean,
        value: !1
      },
      renderer: {
        type: Function,
        value: null
      },
      sanitize: {
        type: Boolean,
        value: !1
      },
      sanitizer: {
        type: Function,
        value: null
      },
      disableRemoteSanitization: {
        type: Boolean,
        value: !1
      },
      smartypants: {
        type: Boolean,
        value: !1
      },
      callback: {
        type: Function,
        value: null
      },
      xhr: {
        type: Object,
        notify: !0,
        readOnly: !0
      }
    },
    observers: ["render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)"],
    ready: function ready() {
      this.markdown || (this._markdownElement = Object(s.a)(this).querySelector('[type="text/markdown"]'), this._markdownElement && (this._markdownElement.src && this._request(this._markdownElement.src), "" !== this._markdownElement.textContent.trim() && (this.markdown = this._unindent(this._markdownElement.textContent)), new MutationObserver(this._onScriptAttributeChanged.bind(this)).observe(this._markdownElement, {
        attributes: !0
      })));
    },
    attached: function attached() {
      this._attached = !0, this._outputElement = this.outputElement, this.render();
    },
    detached: function detached() {
      this._attached = !1;
    },
    unindent: function unindent(e) {
      return this._unindent(e);
    },

    get outputElement() {
      return Object(s.a)(this).queryDistributedElements('[slot="markdown-html"]')[0] || this.$.content;
    },

    render: function render() {
      if (this._attached) if (this.markdown) {
        var e = new marked.Renderer();
        this.renderer && this.renderer(e);
        var t = {
          renderer: e,
          highlight: this._highlight.bind(this),
          breaks: this.breaks,
          sanitize: this.sanitize,
          sanitizer: this.sanitizer,
          pedantic: this.pedantic,
          smartypants: this.smartypants
        };
        Object(s.a)(this._outputElement).innerHTML = marked(this.markdown, t, this.callback), this.fire("marked-render-complete", {}, {
          composed: !0
        });
      } else Object(s.a)(this._outputElement).innerHTML = "";
    },
    _highlight: function _highlight(e, t) {
      return this.fire("syntax-highlight", {
        code: e,
        lang: t
      }, {
        composed: !0
      }).detail.code || e;
    },
    _unindent: function _unindent(e) {
      if (!e) return e;
      var t = e.replace(/\t/g, "  ").split("\n"),
          i = t.reduce(function (e, t) {
        if (/^\s*$/.test(t)) return e;
        var i = t.match(/^(\s*)/)[0].length;
        return null === e ? i : i < e ? i : e;
      }, null);
      return t.map(function (e) {
        return e.substr(i);
      }).join("\n");
    },
    _request: function _request(e) {
      this._setXhr(new XMLHttpRequest());

      var t = this.xhr;
      if (t.readyState > 0) return null;
      t.addEventListener("error", this._handleError.bind(this)), t.addEventListener("loadend", function (e) {
        var t = this.xhr.status || 0;
        0 === t || t >= 200 && t < 300 ? (this.sanitize = !this.disableRemoteSanitization, this.markdown = e.target.response) : this._handleError(e), this.fire("marked-loadend", e);
      }.bind(this)), t.open("GET", e), t.setRequestHeader("Accept", "text/markdown"), t.send();
    },
    _handleError: function _handleError(e) {
      this.fire("marked-request-error", e, {
        cancelable: !0
      }).defaultPrevented || (this.markdown = "Failed loading markdown source");
    },
    _onScriptAttributeChanged: function _onScriptAttributeChanged(e) {
      "src" === e[0].attributeName && this._request(this._markdownElement.src);
    }
  });
  i(59);
  Object(a.a)({
    is: "prism-highlighter",
    properties: {
      languages: {
        type: Object,
        value: function value() {
          return {};
        }
      }
    },
    ready: function ready() {
      this._handler = this._highlight.bind(this);
    },
    attached: function attached() {
      (this.parentNode.host || this.parentElement).addEventListener("syntax-highlight", this._handler);
    },
    detached: function detached() {
      (this.parentNode.host || this.parentElement).removeEventListener("syntax-highlight", this._handler);
    },
    _highlight: function _highlight(e) {
      if (e.detail && e.detail.code) {
        e.stopPropagation();
        var t = e.detail;
        t.code = Prism.highlight(t.code, this._detectLang(t.code, t.lang));
      } else n.a._warn("Malformed", "syntax-highlight", "event:", e.detail);
    },
    _detectLang: function _detectLang(e, t) {
      if (!t) return e.match(/^\s*</) ? Prism.languages.markup : Prism.languages.javascript;
      if (this.languages[t]) return this.languages[t];
      if (Prism.languages[t]) return Prism.languages[t];

      switch (t.substr(0, 2)) {
        case "js":
        case "es":
          return Prism.languages.javascript;

        case "c":
          return Prism.languages.clike;

        default:
          return Prism.languages.markup;
      }
    }
  });
  i(29);

  function u() {
    var e = babelHelpers.taggedTemplateLiteral(["<dom-module id=\"prism-theme-default\"><template><style>code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}</style></template></dom-module>"]);
    return u = function u() {
      return e;
    }, e;
  }

  var c = Object(o.a)(u());

  function d() {
    var e = babelHelpers.taggedTemplateLiteral(['<style include="prism-theme-default">:host{display:block;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);margin-bottom:40px;@apply --demo-snippet;}.demo{display:block;border-bottom:1px solid #e0e0e0;background-color:#fff;margin:0;padding:20px;@apply --demo-snippet-demo;}.code-container{margin:0;background-color:#f5f5f5;font-size:13px;overflow:auto;position:relative;padding:0 20px;@apply --demo-snippet-code;}.code{padding:20px;margin:0;background-color:var(--google-grey-100);font-size:13px;overflow:auto;@apply --demo-snippet-code;}.code>pre{margin:0;padding:0 0 10px 0}button{position:absolute;top:0;right:0;text-transform:uppercase;border:none;cursor:pointer;background:#e0e0e0}</style><prism-highlighter></prism-highlighter><div class="demo"><slot id="content"></slot></div><div class="code-container"><marked-element markdown="[[_markdown]]" id="marked"><div class="code" slot="markdown-html" id="code"></div></marked-element><button id="copyButton" title="copy to clipboard" on-tap="_copyToClipboard">Copy</button></div>']);
    return d = function d() {
      return e;
    }, e;
  }

  document.head.appendChild(c.content), Object(a.a)({
    _template: Object(o.a)(d()),
    is: "demo-snippet",
    properties: {
      _markdown: {
        type: String
      }
    },
    attached: function attached() {
      this._observer = Object(s.a)(this.$.content).observeNodes(function (e) {
        this._updateMarkdown();
      }.bind(this));
    },
    detached: function detached() {
      this._observer && (Object(s.a)(this.$.content).unobserveNodes(this._observer), this._observer = null);
    },
    _updateMarkdown: function _updateMarkdown() {
      var e = Object(s.a)(this).queryDistributedElements("template")[0];

      if (e) {
        var t = this.$.marked.unindent(e.innerHTML);
        t = (t = t.replace(/ class=""/g, "")).replace(/=""/g, ""), this._markdown = "```\n" + t + "\n```", e.hasAttribute("is") || (Object(s.a)(this.$.content).unobserveNodes(this._observer), this._observer = null, Object(s.a)(this).appendChild(document.importNode(e.content, !0)));
      } else this._markdown = "";
    },
    _copyToClipboard: function _copyToClipboard() {
      var e = document.createRange();
      e.selectNodeContents(this.$.code);
      var t = window.getSelection();
      t.removeAllRanges(), t.addRange(e);
      var i = !1;

      try {
        i = document.execCommand("copy"), this.$.copyButton.textContent = "done";
      } catch (e) {
        console.error(e), this.$.copyButton.textContent = "error";
      }

      return setTimeout(this._resetCopyButtonState.bind(this), 1e3), t.removeAllRanges(), i;
    },
    _resetCopyButtonState: function _resetCopyButtonState() {
      this.$.copyButton.textContent = "copy";
    }
  });
}, function (e, t, i) {
  "use strict";

  i.d(t, "a", function () {
    return k;
  });
  var n = i(4),
      r = i(0),
      a = i(1),
      s = i(27),
      o = i(18),
      l = i(9),
      u = i(36),
      c = i(37),
      d = i(7),
      h = i(34),
      p = i(46),
      f = i(38),
      b = i(49),
      m = i(26),
      v = i(31);

  function y() {
    var e = babelHelpers.taggedTemplateLiteral(["", " ", ""]);
    return y = function y() {
      return e;
    }, e;
  }

  function g() {
    var e = babelHelpers.taggedTemplateLiteral(['<div id="picker" class="dropdown" horizontal$="[[_ifClamped(clamp, \'day\')]]">', " ", '<div id="buttons">', "</div></div>"]);
    return g = function g() {
      return e;
    }, e;
  }

  function _() {
    var e = babelHelpers.taggedTemplateLiteral(["datetime-local"]);
    return _ = function _() {
      return e;
    }, e;
  }

  var k = Object(a.a)(function (e) {
    return function (e) {
      function t() {
        return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
      }

      return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
        key: "_computeNativeInput",
        value: function value(e, t) {
          e && t && (this._nativeInput = "".concat(e, "T").concat(t));
        }
      }, {
        key: "_reflectNativeInput",
        value: function value(e) {
          if (this._computeShouldNative(this.native) && e) {
            var t = e.split("T");

            this._dateTimeChanged(t[0], t[1]);
          }
        }
      }], [{
        key: "expectedNativeInputType",
        get: function get() {
          return Object(r.b)(_());
        }
      }, {
        key: "pickerTemplate",
        get: function get() {
          return Object(r.a)(g(), this.calendarTemplate, this.timeTemplate, this.buttonTemplate);
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            clamp: {
              type: String,
              value: "millisecond",
              notify: !0
            }
          };
        }
      }]), t;
    }(e);
  }),
      C = function (e) {
    function t() {
      return babelHelpers.classCallCheck(this, t), babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments));
    }

    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
      key: "_hasNative",
      get: function get() {
        return t._hasNative;
      }
    }], [{
      key: "is",
      get: function get() {
        return "datetime-picker";
      }
    }, {
      key: "styleTemplate",
      get: function get() {
        return Object(r.a)(y(), v.a, babelHelpers.get(babelHelpers.getPrototypeOf(t), "styleTemplate", this));
      }
    }]), t;
  }(k(Object(p.a)(Object(b.a)(Object(m.a)(Object(h.a)(Object(f.a)(Object(o.a)(Object(u.a)(Object(c.a)(Object(l.b)(Object(l.a)(Object(s.a)(Object(d.a)(n.a))))))))))))));

  customElements.get(C.is) || customElements.define(C.is, C);
},,,,,,, function (e, t, i) {
  "use strict";

  i.r(t);
  i(61), i(58), i(60), i(34), i(62);
  var n = i(0);

  function r() {
    var e = babelHelpers.taggedTemplateLiteral(['<custom-style><style is="custom-style" include="demo-pages-shared-styles">.result{margin:.75em;padding:.5em;line-height:1.5}</style></custom-style>']);
    return r = function r() {
      return e;
    }, e;
  }

  var a = Object(n.a)(r());
  document.body.appendChild(a.content);
}]);
},{}],"C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53688" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/datetime.js"], null)
//# sourceMappingURL=/datetime.d60292ed.js.map