(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/.pnpm/plyr@3.6.12/node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/.pnpm/plyr@3.6.12/node_modules/plyr/dist/plyr.min.js"(exports, module) {
      typeof navigator == "object" && function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define("Plyr", t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).Plyr = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function t(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var s2 = t2[i2];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
          }
        }
        function i(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function s(e2, t2) {
          var i2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            t2 && (s2 = s2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), i2.push.apply(i2, s2);
          }
          return i2;
        }
        function n(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2] != null ? arguments[t2] : {};
            t2 % 2 ? s(Object(n2), true).forEach(function(t3) {
              i(e2, t3, n2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
            });
          }
          return e2;
        }
        var a = { addCSS: true, thumbWidth: 15, watch: true };
        function l(e2, t2) {
          return function() {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }.call(e2, t2);
        }
        var o = function(e2) {
          return e2 != null ? e2.constructor : null;
        }, r = function(e2, t2) {
          return !!(e2 && t2 && e2 instanceof t2);
        }, c = function(e2) {
          return e2 == null;
        }, h = function(e2) {
          return o(e2) === Object;
        }, u = function(e2) {
          return o(e2) === String;
        }, d = function(e2) {
          return Array.isArray(e2);
        }, m = function(e2) {
          return r(e2, NodeList);
        }, p = u, g = d, f = m, b = function(e2) {
          return r(e2, Element);
        }, y = function(e2) {
          return r(e2, Event);
        }, v = function(e2) {
          return c(e2) || (u(e2) || d(e2) || m(e2)) && !e2.length || h(e2) && !Object.keys(e2).length;
        };
        function w(e2, t2) {
          if (1 > t2) {
            var i2 = function(e3) {
              var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
            }(t2);
            return parseFloat(e2.toFixed(i2));
          }
          return Math.round(e2 / t2) * t2;
        }
        var T = function() {
          function e2(t2, i2) {
            (function(e3, t3) {
              if (!(e3 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            })(this, e2), b(t2) ? this.element = t2 : p(t2) && (this.element = document.querySelector(t2)), b(this.element) && v(this.element.rangeTouch) && (this.config = n({}, a, {}, i2), this.init());
          }
          return function(e3, i2, s2) {
            i2 && t(e3.prototype, i2), s2 && t(e3, s2);
          }(e2, [{ key: "init", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e3) {
            var t2 = this, i2 = e3 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
              t2.element[i2](e4, function(e5) {
                return t2.set(e5);
              }, false);
            });
          } }, { key: "get", value: function(t2) {
            if (!e2.enabled || !y(t2))
              return null;
            var i2, s2 = t2.target, n2 = t2.changedTouches[0], a2 = parseFloat(s2.getAttribute("min")) || 0, l2 = parseFloat(s2.getAttribute("max")) || 100, o2 = parseFloat(s2.getAttribute("step")) || 1, r2 = s2.getBoundingClientRect(), c2 = 100 / r2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i2 = 100 / r2.width * (n2.clientX - r2.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), a2 + w(i2 / 100 * (l2 - a2), o2);
          } }, { key: "set", value: function(t2) {
            e2.enabled && y(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), function(e3, t3) {
              if (e3 && t3) {
                var i2 = new Event(t3, { bubbles: true });
                e3.dispatchEvent(i2);
              }
            }(t2.target, t2.type === "touchend" ? "change" : "input"));
          } }], [{ key: "setup", value: function(t2) {
            var i2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, s2 = null;
            if (v(t2) || p(t2) ? s2 = Array.from(document.querySelectorAll(p(t2) ? t2 : 'input[type="range"]')) : b(t2) ? s2 = [t2] : f(t2) ? s2 = Array.from(t2) : g(t2) && (s2 = t2.filter(b)), v(s2))
              return null;
            var o2 = n({}, a, {}, i2);
            if (p(t2) && o2.watch) {
              var r2 = new MutationObserver(function(i3) {
                Array.from(i3).forEach(function(i4) {
                  Array.from(i4.addedNodes).forEach(function(i5) {
                    b(i5) && l(i5, t2) && new e2(i5, o2);
                  });
                });
              });
              r2.observe(document.body, { childList: true, subtree: true });
            }
            return s2.map(function(t3) {
              return new e2(t3, i2);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e2;
        }();
        const k = (e2) => e2 != null ? e2.constructor : null, C = (e2, t2) => Boolean(e2 && t2 && e2 instanceof t2), A = (e2) => e2 == null, S = (e2) => k(e2) === Object, E = (e2) => k(e2) === String, P = (e2) => k(e2) === Function, N = (e2) => Array.isArray(e2), x = (e2) => C(e2, NodeList), M = (e2) => A(e2) || (E(e2) || N(e2) || x(e2)) && !e2.length || S(e2) && !Object.keys(e2).length;
        var I = A, L = S, $ = (e2) => k(e2) === Number && !Number.isNaN(e2), _ = E, O = (e2) => k(e2) === Boolean, j = P, q = N, D = x, H = (e2) => e2 !== null && typeof e2 == "object" && e2.nodeType === 1 && typeof e2.style == "object" && typeof e2.ownerDocument == "object", F = (e2) => C(e2, Event), R = (e2) => C(e2, KeyboardEvent), V = (e2) => C(e2, TextTrack) || !A(e2) && E(e2.kind), B = (e2) => C(e2, Promise) && P(e2.then), U = (e2) => {
          if (C(e2, window.URL))
            return true;
          if (!E(e2))
            return false;
          let t2 = e2;
          e2.startsWith("http://") && e2.startsWith("https://") || (t2 = `http://${e2}`);
          try {
            return !M(new URL(t2).hostname);
          } catch (e3) {
            return false;
          }
        }, W = M;
        const z = (() => {
          const e2 = document.createElement("span"), t2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i2 = Object.keys(t2).find((t3) => e2.style[t3] !== void 0);
          return !!_(i2) && t2[i2];
        })();
        function K(e2, t2) {
          setTimeout(() => {
            try {
              e2.hidden = true, e2.offsetHeight, e2.hidden = false;
            } catch (e3) {
            }
          }, t2);
        }
        const Y = { isIE: Boolean(window.document.documentMode), isEdge: window.navigator.userAgent.includes("Edge"), isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform) };
        function Q(e2, t2) {
          return t2.split(".").reduce((e3, t3) => e3 && e3[t3], e2);
        }
        function X(e2 = {}, ...t2) {
          if (!t2.length)
            return e2;
          const i2 = t2.shift();
          return L(i2) ? (Object.keys(i2).forEach((t3) => {
            L(i2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, { [t3]: {} }), X(e2[t3], i2[t3])) : Object.assign(e2, { [t3]: i2[t3] });
          }), X(e2, ...t2)) : e2;
        }
        function J(e2, t2) {
          const i2 = e2.length ? e2 : [e2];
          Array.from(i2).reverse().forEach((e3, i3) => {
            const s2 = i3 > 0 ? t2.cloneNode(true) : t2, n2 = e3.parentNode, a2 = e3.nextSibling;
            s2.appendChild(e3), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }
        function G(e2, t2) {
          H(e2) && !W(t2) && Object.entries(t2).filter(([, e3]) => !I(e3)).forEach(([t3, i2]) => e2.setAttribute(t3, i2));
        }
        function Z(e2, t2, i2) {
          const s2 = document.createElement(e2);
          return L(t2) && G(s2, t2), _(i2) && (s2.innerText = i2), s2;
        }
        function ee(e2, t2, i2, s2) {
          H(t2) && t2.appendChild(Z(e2, i2, s2));
        }
        function te(e2) {
          D(e2) || q(e2) ? Array.from(e2).forEach(te) : H(e2) && H(e2.parentNode) && e2.parentNode.removeChild(e2);
        }
        function ie(e2) {
          if (!H(e2))
            return;
          let { length: t2 } = e2.childNodes;
          for (; t2 > 0; )
            e2.removeChild(e2.lastChild), t2 -= 1;
        }
        function se(e2, t2) {
          return H(t2) && H(t2.parentNode) && H(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
        }
        function ne(e2, t2) {
          if (!_(e2) || W(e2))
            return {};
          const i2 = {}, s2 = X({}, t2);
          return e2.split(",").forEach((e3) => {
            const t3 = e3.trim(), n2 = t3.replace(".", ""), a2 = t3.replace(/[[\]]/g, "").split("="), [l2] = a2, o2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
            switch (t3.charAt(0)) {
              case ".":
                _(s2.class) ? i2.class = `${s2.class} ${n2}` : i2.class = n2;
                break;
              case "#":
                i2.id = t3.replace("#", "");
                break;
              case "[":
                i2[l2] = o2;
            }
          }), X(s2, i2);
        }
        function ae(e2, t2) {
          if (!H(e2))
            return;
          let i2 = t2;
          O(i2) || (i2 = !e2.hidden), e2.hidden = i2;
        }
        function le(e2, t2, i2) {
          if (D(e2))
            return Array.from(e2).map((e3) => le(e3, t2, i2));
          if (H(e2)) {
            let s2 = "toggle";
            return i2 !== void 0 && (s2 = i2 ? "add" : "remove"), e2.classList[s2](t2), e2.classList.contains(t2);
          }
          return false;
        }
        function oe(e2, t2) {
          return H(e2) && e2.classList.contains(t2);
        }
        function re(e2, t2) {
          const { prototype: i2 } = Element;
          return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }).call(e2, t2);
        }
        function ce(e2) {
          return this.elements.container.querySelectorAll(e2);
        }
        function he(e2) {
          return this.elements.container.querySelector(e2);
        }
        function ue(e2 = null, t2 = false) {
          H(e2) && (e2.focus({ preventScroll: true }), t2 && le(e2, this.config.classNames.tabFocus));
        }
        const de = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, me = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e2, t2, i2) {
          const s2 = Y.isIPhone && i2 && me.playsinline, n2 = me[e2] || t2 !== "html5";
          return { api: n2, ui: n2 && me.rangeInput && (e2 !== "video" || !Y.isIPhone || s2) };
        }, pip: !(Y.isIPhone || !j(Z("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Z("video").disablePictureInPicture)), airplay: j(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e2) {
          if (W(e2))
            return false;
          const [t2] = e2.split("/");
          let i2 = e2;
          if (!this.isHTML5 || t2 !== this.type)
            return false;
          Object.keys(de).includes(i2) && (i2 += `; codecs="${de[e2]}"`);
          try {
            return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
          } catch (e3) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e2 = document.createElement("input");
          return e2.type = "range", e2.type === "range";
        })(), touch: "ontouchstart" in document.documentElement, transitions: z !== false, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, pe = (() => {
          let e2 = false;
          try {
            const t2 = Object.defineProperty({}, "passive", { get: () => (e2 = true, null) });
            window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
          } catch (e3) {
          }
          return e2;
        })();
        function ge(e2, t2, i2, s2 = false, n2 = true, a2 = false) {
          if (!e2 || !("addEventListener" in e2) || W(t2) || !j(i2))
            return;
          const l2 = t2.split(" ");
          let o2 = a2;
          pe && (o2 = { passive: n2, capture: a2 }), l2.forEach((t3) => {
            this && this.eventListeners && s2 && this.eventListeners.push({ element: e2, type: t3, callback: i2, options: o2 }), e2[s2 ? "addEventListener" : "removeEventListener"](t3, i2, o2);
          });
        }
        function fe(e2, t2 = "", i2, s2 = true, n2 = false) {
          ge.call(this, e2, t2, i2, true, s2, n2);
        }
        function be(e2, t2 = "", i2, s2 = true, n2 = false) {
          ge.call(this, e2, t2, i2, false, s2, n2);
        }
        function ye(e2, t2 = "", i2, s2 = true, n2 = false) {
          const a2 = (...l2) => {
            be(e2, t2, a2, s2, n2), i2.apply(this, l2);
          };
          ge.call(this, e2, t2, a2, true, s2, n2);
        }
        function ve(e2, t2 = "", i2 = false, s2 = {}) {
          if (!H(e2) || W(t2))
            return;
          const n2 = new CustomEvent(t2, { bubbles: i2, detail: __spreadProps(__spreadValues({}, s2), { plyr: this }) });
          e2.dispatchEvent(n2);
        }
        function we() {
          this && this.eventListeners && (this.eventListeners.forEach((e2) => {
            const { element: t2, type: i2, callback: s2, options: n2 } = e2;
            t2.removeEventListener(i2, s2, n2);
          }), this.eventListeners = []);
        }
        function Te() {
          return new Promise((e2) => this.ready ? setTimeout(e2, 0) : fe.call(this, this.elements.container, "ready", e2)).then(() => {
          });
        }
        function ke(e2) {
          B(e2) && e2.then(null, () => {
          });
        }
        function Ce(e2) {
          return q(e2) ? e2.filter((t2, i2) => e2.indexOf(t2) === i2) : e2;
        }
        function Ae(e2, t2) {
          return q(e2) && e2.length ? e2.reduce((e3, i2) => Math.abs(i2 - t2) < Math.abs(e3 - t2) ? i2 : e3) : null;
        }
        function Se(e2) {
          return !(!window || !window.CSS) && window.CSS.supports(e2);
        }
        const Ee = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e2, [t2, i2]) => __spreadProps(__spreadValues({}, e2), { [t2 / i2]: [t2, i2] }), {});
        function Pe(e2) {
          if (!(q(e2) || _(e2) && e2.includes(":")))
            return false;
          return (q(e2) ? e2 : e2.split(":")).map(Number).every($);
        }
        function Ne(e2) {
          if (!q(e2) || !e2.every($))
            return null;
          const [t2, i2] = e2, s2 = (e3, t3) => t3 === 0 ? e3 : s2(t3, e3 % t3), n2 = s2(t2, i2);
          return [t2 / n2, i2 / n2];
        }
        function xe(e2) {
          const t2 = (e3) => Pe(e3) ? e3.split(":").map(Number) : null;
          let i2 = t2(e2);
          if (i2 === null && (i2 = t2(this.config.ratio)), i2 === null && !W(this.embed) && q(this.embed.ratio) && ({ ratio: i2 } = this.embed), i2 === null && this.isHTML5) {
            const { videoWidth: e3, videoHeight: t3 } = this.media;
            i2 = [e3, t3];
          }
          return Ne(i2);
        }
        function Me(e2) {
          if (!this.isVideo)
            return {};
          const { wrapper: t2 } = this.elements, i2 = xe.call(this, e2);
          if (!q(i2))
            return {};
          const [s2, n2] = Ne(i2), a2 = 100 / s2 * n2;
          if (Se(`aspect-ratio: ${s2}/${n2}`) ? t2.style.aspectRatio = `${s2}/${n2}` : t2.style.paddingBottom = `${a2}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i3 = (e3 - a2) / (e3 / 50);
            this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = `translateY(-${i3}%)`;
          } else
            this.isHTML5 && t2.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a2, ratio: i2 };
        }
        function Ie(e2, t2, i2 = 0.05) {
          const s2 = e2 / t2, n2 = Ae(Object.keys(Ee), s2);
          return Math.abs(n2 - s2) <= i2 ? Ee[n2] : [e2, t2];
        }
        const Le = { getSources() {
          if (!this.isHTML5)
            return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e2) => {
            const t2 = e2.getAttribute("type");
            return !!W(t2) || me.mime.call(this, t2);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : Le.getSources.call(this).map((e2) => Number(e2.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5)
            return;
          const e2 = this;
          e2.options.speed = e2.config.speed.options, W(this.config.ratio) || Me.call(e2), Object.defineProperty(e2.media, "quality", { get() {
            const t2 = Le.getSources.call(e2).find((t3) => t3.getAttribute("src") === e2.source);
            return t2 && Number(t2.getAttribute("size"));
          }, set(t2) {
            if (e2.quality !== t2) {
              if (e2.config.quality.forced && j(e2.config.quality.onChange))
                e2.config.quality.onChange(t2);
              else {
                const i2 = Le.getSources.call(e2).find((e3) => Number(e3.getAttribute("size")) === t2);
                if (!i2)
                  return;
                const { currentTime: s2, paused: n2, preload: a2, readyState: l2, playbackRate: o2 } = e2.media;
                e2.media.src = i2.getAttribute("src"), (a2 !== "none" || l2) && (e2.once("loadedmetadata", () => {
                  e2.speed = o2, e2.currentTime = s2, n2 || ke(e2.play());
                }), e2.media.load());
              }
              ve.call(e2, e2.media, "qualitychange", false, { quality: t2 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (te(Le.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function $e(e2, ...t2) {
          return W(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, (e3, i2) => t2[i2].toString());
        }
        const _e = (e2 = "", t2 = "", i2 = "") => e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString()), Oe = (e2 = "") => e2.toString().replace(/\w\S*/g, (e3) => e3.charAt(0).toUpperCase() + e3.substr(1).toLowerCase());
        function je(e2 = "") {
          let t2 = e2.toString();
          return t2 = function(e3 = "") {
            let t3 = e3.toString();
            return t3 = _e(t3, "-", " "), t3 = _e(t3, "_", " "), t3 = Oe(t3), _e(t3, " ", "");
          }(t2), t2.charAt(0).toLowerCase() + t2.slice(1);
        }
        function qe(e2) {
          const t2 = document.createElement("div");
          return t2.appendChild(e2), t2.innerHTML;
        }
        const De = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, He = { get(e2 = "", t2 = {}) {
          if (W(e2) || W(t2))
            return "";
          let i2 = Q(t2.i18n, e2);
          if (W(i2))
            return Object.keys(De).includes(e2) ? De[e2] : "";
          const s2 = { "{seektime}": t2.seekTime, "{title}": t2.title };
          return Object.entries(s2).forEach(([e3, t3]) => {
            i2 = _e(i2, e3, t3);
          }), i2;
        } };
        class Fe {
          constructor(t2) {
            e(this, "get", (e2) => {
              if (!Fe.supported || !this.enabled)
                return null;
              const t3 = window.localStorage.getItem(this.key);
              if (W(t3))
                return null;
              const i2 = JSON.parse(t3);
              return _(e2) && e2.length ? i2[e2] : i2;
            }), e(this, "set", (e2) => {
              if (!Fe.supported || !this.enabled)
                return;
              if (!L(e2))
                return;
              let t3 = this.get();
              W(t3) && (t3 = {}), X(t3, e2);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t3));
              } catch (e3) {
              }
            }), this.enabled = t2.config.storage.enabled, this.key = t2.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window))
                return false;
              const e2 = "___test";
              return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
            } catch (e2) {
              return false;
            }
          }
        }
        function Re(e2, t2 = "text") {
          return new Promise((i2, s2) => {
            try {
              const s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3))
                return;
              s3.addEventListener("load", () => {
                if (t2 === "text")
                  try {
                    i2(JSON.parse(s3.responseText));
                  } catch (e3) {
                    i2(s3.responseText);
                  }
                else
                  i2(s3.response);
              }), s3.addEventListener("error", () => {
                throw new Error(s3.status);
              }), s3.open("GET", e2, true), s3.responseType = t2, s3.send();
            } catch (e3) {
              s2(e3);
            }
          });
        }
        function Ve(e2, t2) {
          if (!_(e2))
            return;
          const i2 = _(t2);
          let s2 = false;
          const n2 = () => document.getElementById(t2) !== null, a2 = (e3, t3) => {
            e3.innerHTML = t3, i2 && n2() || document.body.insertAdjacentElement("afterbegin", e3);
          };
          if (!i2 || !n2()) {
            const n3 = Fe.supported, l2 = document.createElement("div");
            if (l2.setAttribute("hidden", ""), i2 && l2.setAttribute("id", t2), n3) {
              const e3 = window.localStorage.getItem(`cache-${t2}`);
              if (s2 = e3 !== null, s2) {
                const t3 = JSON.parse(e3);
                a2(l2, t3.content);
              }
            }
            Re(e2).then((e3) => {
              if (!W(e3)) {
                if (n3)
                  try {
                    window.localStorage.setItem(`cache-${t2}`, JSON.stringify({ content: e3 }));
                  } catch (e4) {
                  }
                a2(l2, e3);
              }
            }).catch(() => {
            });
          }
        }
        const Be = (e2) => Math.trunc(e2 / 60 / 60 % 60, 10);
        function Ue(e2 = 0, t2 = false, i2 = false) {
          if (!$(e2))
            return Ue(void 0, t2, i2);
          const s2 = (e3) => `0${e3}`.slice(-2);
          let n2 = Be(e2);
          const a2 = (l2 = e2, Math.trunc(l2 / 60 % 60, 10));
          var l2;
          const o2 = ((e3) => Math.trunc(e3 % 60, 10))(e2);
          return n2 = t2 || n2 > 0 ? `${n2}:` : "", `${i2 && e2 > 0 ? "-" : ""}${n2}${s2(a2)}:${s2(o2)}`;
        }
        const We = { getIconUrl() {
          const e2 = new URL(this.config.iconUrl, window.location), t2 = window.location.host ? window.location.host : window.top.location.host, i2 = e2.host !== t2 || Y.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i2 };
        }, findElements() {
          try {
            return this.elements.controls = he.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: ce.call(this, this.config.selectors.buttons.play), pause: he.call(this, this.config.selectors.buttons.pause), restart: he.call(this, this.config.selectors.buttons.restart), rewind: he.call(this, this.config.selectors.buttons.rewind), fastForward: he.call(this, this.config.selectors.buttons.fastForward), mute: he.call(this, this.config.selectors.buttons.mute), pip: he.call(this, this.config.selectors.buttons.pip), airplay: he.call(this, this.config.selectors.buttons.airplay), settings: he.call(this, this.config.selectors.buttons.settings), captions: he.call(this, this.config.selectors.buttons.captions), fullscreen: he.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = he.call(this, this.config.selectors.progress), this.elements.inputs = { seek: he.call(this, this.config.selectors.inputs.seek), volume: he.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: he.call(this, this.config.selectors.display.buffer), currentTime: he.call(this, this.config.selectors.display.currentTime), duration: he.call(this, this.config.selectors.display.duration) }, H(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e2) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
          }
        }, createIcon(e2, t2) {
          const i2 = "http://www.w3.org/2000/svg", s2 = We.getIconUrl.call(this), n2 = `${s2.cors ? "" : s2.url}#${this.config.iconPrefix}`, a2 = document.createElementNS(i2, "svg");
          G(a2, X(t2, { "aria-hidden": "true", focusable: "false" }));
          const l2 = document.createElementNS(i2, "use"), o2 = `${n2}-${e2}`;
          return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", o2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o2), a2.appendChild(l2), a2;
        }, createLabel(e2, t2 = {}) {
          const i2 = He.get(e2, this.config);
          return Z("span", __spreadProps(__spreadValues({}, t2), { class: [t2.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), i2);
        }, createBadge(e2) {
          if (W(e2))
            return null;
          const t2 = Z("span", { class: this.config.classNames.menu.value });
          return t2.appendChild(Z("span", { class: this.config.classNames.menu.badge }, e2)), t2;
        }, createButton(e2, t2) {
          const i2 = X({}, t2);
          let s2 = je(e2);
          const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e3) => {
            Object.keys(i2).includes(e3) && (n2[e3] = i2[e3], delete i2[e3]);
          }), n2.element !== "button" || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some((e3) => e3 === this.config.classNames.control) || X(i2, { class: `${i2.class} ${this.config.classNames.control}` }) : i2.class = this.config.classNames.control, e2) {
            case "play":
              n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
              break;
            case "mute":
              n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
              break;
            case "captions":
              n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i2.class += ` ${this.config.classNames.control}--overlaid`, s2 = "play", n2.label = "play", n2.icon = "play";
              break;
            default:
              W(n2.label) && (n2.label = s2), W(n2.icon) && (n2.icon = e2);
          }
          const a2 = Z(n2.element);
          return n2.toggle ? (a2.appendChild(We.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), a2.appendChild(We.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), a2.appendChild(We.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), a2.appendChild(We.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (a2.appendChild(We.createIcon.call(this, n2.icon)), a2.appendChild(We.createLabel.call(this, n2.label))), X(i2, ne(this.config.selectors.buttons[s2], i2)), G(a2, i2), s2 === "play" ? (q(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
        }, createRange(e2, t2) {
          const i2 = Z("input", X(ne(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": He.get(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t2));
          return this.elements.inputs[e2] = i2, We.updateRangeFill.call(this, i2), T.setup(i2), i2;
        }, createProgress(e2, t2) {
          const i2 = Z("progress", X(ne(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t2));
          if (e2 !== "volume") {
            i2.appendChild(Z("span", null, "0"));
            const t3 = { played: "played", buffer: "buffered" }[e2], s2 = t3 ? He.get(t3, this.config) : "";
            i2.innerText = `% ${s2.toLowerCase()}`;
          }
          return this.elements.display[e2] = i2, i2;
        }, createTime(e2, t2) {
          const i2 = ne(this.config.selectors.display[e2], t2), s2 = Z("div", X(i2, { class: `${i2.class ? i2.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": He.get(e2, this.config) }), "00:00");
          return this.elements.display[e2] = s2, s2;
        }, bindMenuItemShortcuts(e2, t2) {
          fe.call(this, e2, "keydown keyup", (i2) => {
            if (![32, 38, 39, 40].includes(i2.which))
              return;
            if (i2.preventDefault(), i2.stopPropagation(), i2.type === "keydown")
              return;
            const s2 = re(e2, '[role="menuitemradio"]');
            if (!s2 && [32, 39].includes(i2.which))
              We.showMenuPanel.call(this, t2, true);
            else {
              let t3;
              i2.which !== 32 && (i2.which === 40 || s2 && i2.which === 39 ? (t3 = e2.nextElementSibling, H(t3) || (t3 = e2.parentNode.firstElementChild)) : (t3 = e2.previousElementSibling, H(t3) || (t3 = e2.parentNode.lastElementChild)), ue.call(this, t3, true));
            }
          }, false), fe.call(this, e2, "keyup", (e3) => {
            e3.which === 13 && We.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e2, list: t2, type: i2, title: s2, badge: n2 = null, checked: a2 = false }) {
          const l2 = ne(this.config.selectors.inputs[i2]), o2 = Z("button", X(l2, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l2.class ? l2.class : ""}`.trim(), "aria-checked": a2, value: e2 })), r2 = Z("span");
          r2.innerHTML = s2, H(n2) && r2.appendChild(n2), o2.appendChild(r2), Object.defineProperty(o2, "checked", { enumerable: true, get: () => o2.getAttribute("aria-checked") === "true", set(e3) {
            e3 && Array.from(o2.parentNode.children).filter((e4) => re(e4, '[role="menuitemradio"]')).forEach((e4) => e4.setAttribute("aria-checked", "false")), o2.setAttribute("aria-checked", e3 ? "true" : "false");
          } }), this.listeners.bind(o2, "click keyup", (t3) => {
            if (!R(t3) || t3.which === 32) {
              switch (t3.preventDefault(), t3.stopPropagation(), o2.checked = true, i2) {
                case "language":
                  this.currentTrack = Number(e2);
                  break;
                case "quality":
                  this.quality = e2;
                  break;
                case "speed":
                  this.speed = parseFloat(e2);
              }
              We.showMenuPanel.call(this, "home", R(t3));
            }
          }, i2, false), We.bindMenuItemShortcuts.call(this, o2, i2), t2.appendChild(o2);
        }, formatTime(e2 = 0, t2 = false) {
          if (!$(e2))
            return e2;
          return Ue(e2, Be(this.duration) > 0, t2);
        }, updateTimeDisplay(e2 = null, t2 = 0, i2 = false) {
          H(e2) && $(t2) && (e2.innerText = We.formatTime(t2, i2));
        }, updateVolume() {
          this.supported.ui && (H(this.elements.inputs.volume) && We.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), H(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
        }, setRange(e2, t2 = 0) {
          H(e2) && (e2.value = t2, We.updateRangeFill.call(this, e2));
        }, updateProgress(e2) {
          if (!this.supported.ui || !F(e2))
            return;
          let t2 = 0;
          const i2 = (e3, t3) => {
            const i3 = $(t3) ? t3 : 0, s3 = H(e3) ? e3 : this.elements.display.buffer;
            if (H(s3)) {
              s3.value = i3;
              const e4 = s3.getElementsByTagName("span")[0];
              H(e4) && (e4.childNodes[0].nodeValue = i3);
            }
          };
          if (e2)
            switch (e2.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                s2 = this.currentTime, n2 = this.duration, t2 = s2 === 0 || n2 === 0 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), e2.type === "timeupdate" && We.setRange.call(this, this.elements.inputs.seek, t2);
                break;
              case "playing":
              case "progress":
                i2(this.elements.display.buffer, 100 * this.buffered);
            }
          var s2, n2;
        }, updateRangeFill(e2) {
          const t2 = F(e2) ? e2.target : e2;
          if (H(t2) && t2.getAttribute("type") === "range") {
            if (re(t2, this.config.selectors.inputs.seek)) {
              t2.setAttribute("aria-valuenow", this.currentTime);
              const e3 = We.formatTime(this.currentTime), i2 = We.formatTime(this.duration), s2 = He.get("seekLabel", this.config);
              t2.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i2));
            } else if (re(t2, this.config.selectors.inputs.volume)) {
              const e3 = 100 * t2.value;
              t2.setAttribute("aria-valuenow", e3), t2.setAttribute("aria-valuetext", `${e3.toFixed(1)}%`);
            } else
              t2.setAttribute("aria-valuenow", t2.value);
            Y.isWebkit && t2.style.setProperty("--value", t2.value / t2.max * 100 + "%");
          }
        }, updateSeekTooltip(e2) {
          if (!this.config.tooltips.seek || !H(this.elements.inputs.seek) || !H(this.elements.display.seekTooltip) || this.duration === 0)
            return;
          const t2 = `${this.config.classNames.tooltip}--visible`, i2 = (e3) => le(this.elements.display.seekTooltip, t2, e3);
          if (this.touch)
            return void i2(false);
          let s2 = 0;
          const n2 = this.elements.progress.getBoundingClientRect();
          if (F(e2))
            s2 = 100 / n2.width * (e2.pageX - n2.left);
          else {
            if (!oe(this.elements.display.seekTooltip, t2))
              return;
            s2 = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          s2 < 0 ? s2 = 0 : s2 > 100 && (s2 = 100), We.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s2), this.elements.display.seekTooltip.style.left = `${s2}%`, F(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && i2(e2.type === "mouseenter");
        }, timeUpdate(e2) {
          const t2 = !H(this.elements.display.duration) && this.config.invertTime;
          We.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && e2.type === "timeupdate" && this.media.seeking || We.updateProgress.call(this, e2);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime)
            return;
          if (this.duration >= 2 ** 32)
            return ae(this.elements.display.currentTime, true), void ae(this.elements.progress, true);
          H(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e2 = H(this.elements.display.duration);
          !e2 && this.config.displayDuration && this.paused && We.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && We.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), We.updateSeekTooltip.call(this);
        }, toggleMenuButton(e2, t2) {
          ae(this.elements.settings.buttons[e2], !t2);
        }, updateSetting(e2, t2, i2) {
          const s2 = this.elements.settings.panels[e2];
          let n2 = null, a2 = t2;
          if (e2 === "captions")
            n2 = this.currentTrack;
          else {
            if (n2 = W(i2) ? this[e2] : i2, W(n2) && (n2 = this.config[e2].default), !W(this.options[e2]) && !this.options[e2].includes(n2))
              return void this.debug.warn(`Unsupported value of '${n2}' for ${e2}`);
            if (!this.config[e2].options.includes(n2))
              return void this.debug.warn(`Disabled value of '${n2}' for ${e2}`);
          }
          if (H(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !H(a2))
            return;
          this.elements.settings.buttons[e2].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = We.getLabel.call(this, e2, n2);
          const l2 = a2 && a2.querySelector(`[value="${n2}"]`);
          H(l2) && (l2.checked = true);
        }, getLabel(e2, t2) {
          switch (e2) {
            case "speed":
              return t2 === 1 ? He.get("normal", this.config) : `${t2}&times;`;
            case "quality":
              if ($(t2)) {
                const e3 = He.get(`qualityLabel.${t2}`, this.config);
                return e3.length ? e3 : `${t2}p`;
              }
              return Oe(t2);
            case "captions":
              return Ye.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e2) {
          if (!H(this.elements.settings.panels.quality))
            return;
          const t2 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          q(e2) && (this.options.quality = Ce(e2).filter((e3) => this.config.quality.options.includes(e3)));
          const s2 = !W(this.options.quality) && this.options.quality.length > 1;
          if (We.toggleMenuButton.call(this, t2, s2), ie(i2), We.checkMenu.call(this), !s2)
            return;
          const n2 = (e3) => {
            const t3 = He.get(`qualityBadge.${e3}`, this.config);
            return t3.length ? We.createBadge.call(this, t3) : null;
          };
          this.options.quality.sort((e3, t3) => {
            const i3 = this.config.quality.options;
            return i3.indexOf(e3) > i3.indexOf(t3) ? 1 : -1;
          }).forEach((e3) => {
            We.createMenuItem.call(this, { value: e3, list: i2, type: t2, title: We.getLabel.call(this, "quality", e3), badge: n2(e3) });
          }), We.updateSetting.call(this, t2, i2);
        }, setCaptionsMenu() {
          if (!H(this.elements.settings.panels.captions))
            return;
          const e2 = "captions", t2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = Ye.getTracks.call(this), s2 = Boolean(i2.length);
          if (We.toggleMenuButton.call(this, e2, s2), ie(t2), We.checkMenu.call(this), !s2)
            return;
          const n2 = i2.map((e3, i3) => ({ value: i3, checked: this.captions.toggled && this.currentTrack === i3, title: Ye.getLabel.call(this, e3), badge: e3.language && We.createBadge.call(this, e3.language.toUpperCase()), list: t2, type: "language" }));
          n2.unshift({ value: -1, checked: !this.captions.toggled, title: He.get("disabled", this.config), list: t2, type: "language" }), n2.forEach(We.createMenuItem.bind(this)), We.updateSetting.call(this, e2, t2);
        }, setSpeedMenu() {
          if (!H(this.elements.settings.panels.speed))
            return;
          const e2 = "speed", t2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e3) => e3 >= this.minimumSpeed && e3 <= this.maximumSpeed);
          const i2 = !W(this.options.speed) && this.options.speed.length > 1;
          We.toggleMenuButton.call(this, e2, i2), ie(t2), We.checkMenu.call(this), i2 && (this.options.speed.forEach((i3) => {
            We.createMenuItem.call(this, { value: i3, list: t2, type: e2, title: We.getLabel.call(this, "speed", i3) });
          }), We.updateSetting.call(this, e2, t2));
        }, checkMenu() {
          const { buttons: e2 } = this.elements.settings, t2 = !W(e2) && Object.values(e2).some((e3) => !e3.hidden);
          ae(this.elements.settings.menu, !t2);
        }, focusFirstMenuItem(e2, t2 = false) {
          if (this.elements.settings.popup.hidden)
            return;
          let i2 = e2;
          H(i2) || (i2 = Object.values(this.elements.settings.panels).find((e3) => !e3.hidden));
          const s2 = i2.querySelector('[role^="menuitem"]');
          ue.call(this, s2, t2);
        }, toggleMenu(e2) {
          const { popup: t2 } = this.elements.settings, i2 = this.elements.buttons.settings;
          if (!H(t2) || !H(i2))
            return;
          const { hidden: s2 } = t2;
          let n2 = s2;
          if (O(e2))
            n2 = e2;
          else if (R(e2) && e2.which === 27)
            n2 = false;
          else if (F(e2)) {
            const s3 = j(e2.composedPath) ? e2.composedPath()[0] : e2.target, a2 = t2.contains(s3);
            if (a2 || !a2 && e2.target !== i2 && n2)
              return;
          }
          i2.setAttribute("aria-expanded", n2), ae(t2, !n2), le(this.elements.container, this.config.classNames.menu.open, n2), n2 && R(e2) ? We.focusFirstMenuItem.call(this, null, true) : n2 || s2 || ue.call(this, i2, R(e2));
        }, getMenuSize(e2) {
          const t2 = e2.cloneNode(true);
          t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
          const i2 = t2.scrollWidth, s2 = t2.scrollHeight;
          return te(t2), { width: i2, height: s2 };
        }, showMenuPanel(e2 = "", t2 = false) {
          const i2 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e2}`);
          if (!H(i2))
            return;
          const s2 = i2.parentNode, n2 = Array.from(s2.children).find((e3) => !e3.hidden);
          if (me.transitions && !me.reducedMotion) {
            s2.style.width = `${n2.scrollWidth}px`, s2.style.height = `${n2.scrollHeight}px`;
            const e3 = We.getMenuSize.call(this, i2), t3 = (e4) => {
              e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", be.call(this, s2, z, t3));
            };
            fe.call(this, s2, z, t3), s2.style.width = `${e3.width}px`, s2.style.height = `${e3.height}px`;
          }
          ae(n2, true), ae(i2, false), We.focusFirstMenuItem.call(this, i2, t2);
        }, setDownloadUrl() {
          const e2 = this.elements.buttons.download;
          H(e2) && e2.setAttribute("href", this.download);
        }, create(e2) {
          const { bindMenuItemShortcuts: t2, createButton: i2, createProgress: s2, createRange: n2, createTime: a2, setQualityMenu: l2, setSpeedMenu: o2, showMenuPanel: r2 } = We;
          this.elements.controls = null, q(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
          const c2 = Z("div", ne(this.config.selectors.controls.wrapper));
          this.elements.controls = c2;
          const h2 = { class: "plyr__controls__item" };
          return Ce(q(this.config.controls) ? this.config.controls : []).forEach((l3) => {
            if (l3 === "restart" && c2.appendChild(i2.call(this, "restart", h2)), l3 === "rewind" && c2.appendChild(i2.call(this, "rewind", h2)), l3 === "play" && c2.appendChild(i2.call(this, "play", h2)), l3 === "fast-forward" && c2.appendChild(i2.call(this, "fast-forward", h2)), l3 === "progress") {
              const t3 = Z("div", { class: `${h2.class} plyr__progress__container` }), i3 = Z("div", ne(this.config.selectors.progress));
              if (i3.appendChild(n2.call(this, "seek", { id: `plyr-seek-${e2.id}` })), i3.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
                const e3 = Z("span", { class: this.config.classNames.tooltip }, "00:00");
                i3.appendChild(e3), this.elements.display.seekTooltip = e3;
              }
              this.elements.progress = i3, t3.appendChild(this.elements.progress), c2.appendChild(t3);
            }
            if (l3 === "current-time" && c2.appendChild(a2.call(this, "currentTime", h2)), l3 === "duration" && c2.appendChild(a2.call(this, "duration", h2)), l3 === "mute" || l3 === "volume") {
              let { volume: t3 } = this.elements;
              if (H(t3) && c2.contains(t3) || (t3 = Z("div", X({}, h2, { class: `${h2.class} plyr__volume`.trim() })), this.elements.volume = t3, c2.appendChild(t3)), l3 === "mute" && t3.appendChild(i2.call(this, "mute")), l3 === "volume" && !Y.isIos) {
                const i3 = { max: 1, step: 0.05, value: this.config.volume };
                t3.appendChild(n2.call(this, "volume", X(i3, { id: `plyr-volume-${e2.id}` })));
              }
            }
            if (l3 === "captions" && c2.appendChild(i2.call(this, "captions", h2)), l3 === "settings" && !W(this.config.settings)) {
              const s3 = Z("div", X({}, h2, { class: `${h2.class} plyr__menu`.trim(), hidden: "" }));
              s3.appendChild(i2.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e2.id}`, "aria-expanded": false }));
              const n3 = Z("div", { class: "plyr__menu__container", id: `plyr-settings-${e2.id}`, hidden: "" }), a3 = Z("div"), l4 = Z("div", { id: `plyr-settings-${e2.id}-home` }), o3 = Z("div", { role: "menu" });
              l4.appendChild(o3), a3.appendChild(l4), this.elements.settings.panels.home = l4, this.config.settings.forEach((i3) => {
                const s4 = Z("button", X(ne(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t2.call(this, s4, i3), fe.call(this, s4, "click", () => {
                  r2.call(this, i3, false);
                });
                const n4 = Z("span", null, He.get(i3, this.config)), l5 = Z("span", { class: this.config.classNames.menu.value });
                l5.innerHTML = e2[i3], n4.appendChild(l5), s4.appendChild(n4), o3.appendChild(s4);
                const c3 = Z("div", { id: `plyr-settings-${e2.id}-${i3}`, hidden: "" }), h3 = Z("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                h3.appendChild(Z("span", { "aria-hidden": true }, He.get(i3, this.config))), h3.appendChild(Z("span", { class: this.config.classNames.hidden }, He.get("menuBack", this.config))), fe.call(this, c3, "keydown", (e3) => {
                  e3.which === 37 && (e3.preventDefault(), e3.stopPropagation(), r2.call(this, "home", true));
                }, false), fe.call(this, h3, "click", () => {
                  r2.call(this, "home", false);
                }), c3.appendChild(h3), c3.appendChild(Z("div", { role: "menu" })), a3.appendChild(c3), this.elements.settings.buttons[i3] = s4, this.elements.settings.panels[i3] = c3;
              }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
            }
            if (l3 === "pip" && me.pip && c2.appendChild(i2.call(this, "pip", h2)), l3 === "airplay" && me.airplay && c2.appendChild(i2.call(this, "airplay", h2)), l3 === "download") {
              const e3 = X({}, h2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e3.download = "");
              const { download: t3 } = this.config.urls;
              !U(t3) && this.isEmbed && X(e3, { icon: `logo-${this.provider}`, label: this.provider }), c2.appendChild(i2.call(this, "download", e3));
            }
            l3 === "fullscreen" && c2.appendChild(i2.call(this, "fullscreen", h2));
          }), this.isHTML5 && l2.call(this, Le.getQualityOptions.call(this)), o2.call(this), c2;
        }, inject() {
          if (this.config.loadSprite) {
            const e3 = We.getIconUrl.call(this);
            e3.cors && Ve(e3.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e2 = null;
          this.elements.controls = null;
          const t2 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i2 = true;
          j(this.config.controls) && (this.config.controls = this.config.controls.call(this, t2)), this.config.controls || (this.config.controls = []), H(this.config.controls) || _(this.config.controls) ? e2 = this.config.controls : (e2 = We.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: Ye.getLabel.call(this) }), i2 = false);
          let s2;
          i2 && _(this.config.controls) && (e2 = ((e3) => {
            let i3 = e3;
            return Object.entries(t2).forEach(([e4, t3]) => {
              i3 = _e(i3, `{${e4}}`, t3);
            }), i3;
          })(e2)), _(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), H(s2) || (s2 = this.elements.container);
          if (s2[H(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), H(this.elements.controls) || We.findElements.call(this), !W(this.elements.buttons)) {
            const e3 = (e4) => {
              const t3 = this.config.classNames.controlPressed;
              Object.defineProperty(e4, "pressed", { enumerable: true, get: () => oe(e4, t3), set(i3 = false) {
                le(e4, t3, i3);
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t3) => {
              q(t3) || D(t3) ? Array.from(t3).filter(Boolean).forEach(e3) : e3(t3);
            });
          }
          if (Y.isEdge && K(s2), this.config.tooltips.controls) {
            const { classNames: e3, selectors: t3 } = this.config, i3 = `${t3.controls.wrapper} ${t3.labels} .${e3.hidden}`, s3 = ce.call(this, i3);
            Array.from(s3).forEach((e4) => {
              le(e4, this.config.classNames.hidden, false), le(e4, this.config.classNames.tooltip, true);
            });
          }
        } };
        function ze(e2, t2 = true) {
          let i2 = e2;
          if (t2) {
            const e3 = document.createElement("a");
            e3.href = i2, i2 = e3.href;
          }
          try {
            return new URL(i2);
          } catch (e3) {
            return null;
          }
        }
        function Ke(e2) {
          const t2 = new URLSearchParams();
          return L(e2) && Object.entries(e2).forEach(([e3, i2]) => {
            t2.set(e3, i2);
          }), t2;
        }
        const Ye = { setup() {
          if (!this.supported.ui)
            return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !me.textTracks)
            return void (q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this));
          var e2, t2;
          if (H(this.elements.captions) || (this.elements.captions = Z("div", ne(this.config.selectors.captions)), e2 = this.elements.captions, t2 = this.elements.wrapper, H(e2) && H(t2) && t2.parentNode.insertBefore(e2, t2.nextSibling)), Y.isIE && window.URL) {
            const e3 = this.media.querySelectorAll("track");
            Array.from(e3).forEach((e4) => {
              const t3 = e4.getAttribute("src"), i3 = ze(t3);
              i3 !== null && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && Re(t3, "blob").then((t4) => {
                e4.setAttribute("src", window.URL.createObjectURL(t4));
              }).catch(() => {
                te(e4);
              });
            });
          }
          const i2 = Ce((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e3) => e3.split("-")[0]));
          let s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          s2 === "auto" && ([s2] = i2);
          let n2 = this.storage.get("captions");
          if (O(n2) || ({ active: n2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n2, language: s2, languages: i2 }), this.isHTML5) {
            const e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            fe.call(this, this.media.textTracks, e3, Ye.update.bind(this));
          }
          setTimeout(Ye.update.bind(this), 0);
        }, update() {
          const e2 = Ye.getTracks.call(this, true), { active: t2, language: i2, meta: s2, currentTrackNode: n2 } = this.captions, a2 = Boolean(e2.find((e3) => e3.language === i2));
          this.isHTML5 && this.isVideo && e2.filter((e3) => !s2.get(e3)).forEach((e3) => {
            this.debug.log("Track added", e3), s2.set(e3, { default: e3.mode === "showing" }), e3.mode === "showing" && (e3.mode = "hidden"), fe.call(this, e3, "cuechange", () => Ye.updateCues.call(this));
          }), (a2 && this.language !== i2 || !e2.includes(n2)) && (Ye.setLanguage.call(this, i2), Ye.toggle.call(this, t2 && a2)), this.elements && le(this.elements.container, this.config.classNames.captions.enabled, !W(e2)), q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this);
        }, toggle(e2, t2 = true) {
          if (!this.supported.ui)
            return;
          const { toggled: i2 } = this.captions, s2 = this.config.classNames.captions.active, n2 = I(e2) ? !i2 : e2;
          if (n2 !== i2) {
            if (t2 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t2) {
              const e3 = Ye.getTracks.call(this), t3 = Ye.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t3.language, void Ye.set.call(this, e3.indexOf(t3));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), le(this.elements.container, s2, n2), this.captions.toggled = n2, We.updateSetting.call(this, "captions"), ve.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e2, t2 = true) {
          const i2 = Ye.getTracks.call(this);
          if (e2 !== -1)
            if ($(e2))
              if (e2 in i2) {
                if (this.captions.currentTrack !== e2) {
                  this.captions.currentTrack = e2;
                  const s2 = i2[e2], { language: n2 } = s2 || {};
                  this.captions.currentTrackNode = s2, We.updateSetting.call(this, "captions"), t2 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), ve.call(this, this.media, "languagechange");
                }
                Ye.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && Ye.updateCues.call(this);
              } else
                this.debug.warn("Track not found", e2);
            else
              this.debug.warn("Invalid caption argument", e2);
          else
            Ye.toggle.call(this, false, t2);
        }, setLanguage(e2, t2 = true) {
          if (!_(e2))
            return void this.debug.warn("Invalid language argument", e2);
          const i2 = e2.toLowerCase();
          this.captions.language = i2;
          const s2 = Ye.getTracks.call(this), n2 = Ye.findTrack.call(this, [i2]);
          Ye.set.call(this, s2.indexOf(n2), t2);
        }, getTracks(e2 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t2) => !this.isHTML5 || e2 || this.captions.meta.has(t2)).filter((e3) => ["captions", "subtitles"].includes(e3.kind));
        }, findTrack(e2, t2 = false) {
          const i2 = Ye.getTracks.call(this), s2 = (e3) => Number((this.captions.meta.get(e3) || {}).default), n2 = Array.from(i2).sort((e3, t3) => s2(t3) - s2(e3));
          let a2;
          return e2.every((e3) => (a2 = n2.find((t3) => t3.language === e3), !a2)), a2 || (t2 ? n2[0] : void 0);
        }, getCurrentTrack() {
          return Ye.getTracks.call(this)[this.currentTrack];
        }, getLabel(e2) {
          let t2 = e2;
          return !V(t2) && me.textTracks && this.captions.toggled && (t2 = Ye.getCurrentTrack.call(this)), V(t2) ? W(t2.label) ? W(t2.language) ? He.get("enabled", this.config) : e2.language.toUpperCase() : t2.label : He.get("disabled", this.config);
        }, updateCues(e2) {
          if (!this.supported.ui)
            return;
          if (!H(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!I(e2) && !Array.isArray(e2))
            return void this.debug.warn("updateCues: Invalid input", e2);
          let t2 = e2;
          if (!t2) {
            const e3 = Ye.getCurrentTrack.call(this);
            t2 = Array.from((e3 || {}).activeCues || []).map((e4) => e4.getCueAsHTML()).map(qe);
          }
          const i2 = t2.map((e3) => e3.trim()).join("\n");
          if (i2 !== this.elements.captions.innerHTML) {
            ie(this.elements.captions);
            const e3 = Z("span", ne(this.config.selectors.caption));
            e3.innerHTML = i2, this.elements.captions.appendChild(e3), ve.call(this, this.media, "cuechange");
          }
        } }, Qe = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.6.12/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus", previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false } }, Xe = "picture-in-picture", Je = "inline", Ge = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Ze = "audio", et = "video";
        const tt = () => {
        };
        class it {
          constructor(e2 = false) {
            this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : tt;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : tt;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : tt;
          }
        }
        class st {
          constructor(t2) {
            e(this, "onChange", () => {
              if (!this.enabled)
                return;
              const e2 = this.player.elements.buttons.fullscreen;
              H(e2) && (e2.pressed = this.active);
              const t3 = this.target === this.player.media ? this.target : this.player.elements.container;
              ve.call(this.player, t3, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e(this, "toggleFallback", (e2 = false) => {
              if (e2 ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e2 ? "hidden" : "", le(this.target, this.player.config.classNames.fullscreen.fallback, e2), Y.isIos) {
                let t3 = document.head.querySelector('meta[name="viewport"]');
                const i2 = "viewport-fit=cover";
                t3 || (t3 = document.createElement("meta"), t3.setAttribute("name", "viewport"));
                const s2 = _(t3.content) && t3.content.includes(i2);
                e2 ? (this.cleanupViewport = !s2, s2 || (t3.content += `,${i2}`)) : this.cleanupViewport && (t3.content = t3.content.split(",").filter((e3) => e3.trim() !== i2).join(","));
              }
              this.onChange();
            }), e(this, "trapFocus", (e2) => {
              if (Y.isIos || !this.active || e2.key !== "Tab" || e2.keyCode !== 9)
                return;
              const t3 = document.activeElement, i2 = ce.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i2, n2 = i2[i2.length - 1];
              t3 !== n2 || e2.shiftKey ? t3 === s2 && e2.shiftKey && (n2.focus(), e2.preventDefault()) : (s2.focus(), e2.preventDefault());
            }), e(this, "update", () => {
              if (this.enabled) {
                let e2;
                e2 = this.forceFallback ? "Fallback (forced)" : st.native ? "Native" : "Fallback", this.player.debug.log(`${e2} fullscreen enabled`);
              } else
                this.player.debug.log("Fullscreen not supported and fallback disabled");
              le(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
            }), e(this, "enter", () => {
              this.enabled && (Y.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !st.native || this.forceFallback ? this.toggleFallback(true) : this.prefix ? W(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e(this, "exit", () => {
              if (this.enabled)
                if (Y.isIos && this.player.config.fullscreen.iosNative)
                  this.target.webkitExitFullscreen(), ke(this.player.play());
                else if (!st.native || this.forceFallback)
                  this.toggleFallback(false);
                else if (this.prefix) {
                  if (!W(this.prefix)) {
                    const e2 = this.prefix === "moz" ? "Cancel" : "Exit";
                    document[`${this.prefix}${e2}${this.property}`]();
                  }
                } else
                  (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t2, this.prefix = st.prefix, this.property = st.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = t2.config.fullscreen.fallback === "force", this.player.elements.fullscreen = t2.config.fullscreen.container && function(e2, t3) {
              const { prototype: i2 } = Element;
              return (i2.closest || function() {
                let e3 = this;
                do {
                  if (re.matches(e3, t3))
                    return e3;
                  e3 = e3.parentElement || e3.parentNode;
                } while (e3 !== null && e3.nodeType === 1);
                return null;
              }).call(e2, t3);
            }(this.player.elements.container, t2.config.fullscreen.container), fe.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), fe.call(this.player, this.player.elements.container, "dblclick", (e2) => {
              H(this.player.elements.controls) && this.player.elements.controls.contains(e2.target) || this.player.listeners.proxy(e2, this.toggle, "fullscreen");
            }), fe.call(this, this.player.elements.container, "keydown", (e2) => this.trapFocus(e2)), this.update();
          }
          static get native() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get usingNative() {
            return st.native && !this.forceFallback;
          }
          static get prefix() {
            if (j(document.exitFullscreen))
              return "";
            let e2 = "";
            return ["webkit", "moz", "ms"].some((t2) => !(!j(document[`${t2}ExitFullscreen`]) && !j(document[`${t2}CancelFullScreen`])) && (e2 = t2, true)), e2;
          }
          static get property() {
            return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
          }
          get enabled() {
            return (st.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
          }
          get active() {
            if (!this.enabled)
              return false;
            if (!st.native || this.forceFallback)
              return oe(this.target, this.player.config.classNames.fullscreen.fallback);
            const e2 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
          }
          get target() {
            return Y.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
          }
        }
        function nt(e2, t2 = 1) {
          return new Promise((i2, s2) => {
            const n2 = new Image(), a2 = () => {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t2 ? i2 : s2)(n2);
            };
            Object.assign(n2, { onload: a2, onerror: a2, src: e2 });
          });
        }
        const at = { addStyleHook() {
          le(this.elements.container, this.config.selectors.container.replace(".", ""), true), le(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e2 = false) {
          e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui)
            return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void at.toggleNativeControls.call(this, true);
          H(this.elements.controls) || (We.inject.call(this), this.listeners.controls()), at.toggleNativeControls.call(this), this.isHTML5 && Ye.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, We.updateVolume.call(this), We.timeUpdate.call(this), We.durationUpdate.call(this), at.checkPlaying.call(this), le(this.elements.container, this.config.classNames.pip.supported, me.pip && this.isHTML5 && this.isVideo), le(this.elements.container, this.config.classNames.airplay.supported, me.airplay && this.isHTML5), le(this.elements.container, this.config.classNames.isIos, Y.isIos), le(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            ve.call(this, this.media, "ready");
          }, 0), at.setTitle.call(this), this.poster && at.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && We.durationUpdate.call(this);
        }, setTitle() {
          let e2 = He.get("play", this.config);
          if (_(this.config.title) && !W(this.config.title) && (e2 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t2) => {
            t2.setAttribute("aria-label", e2);
          }), this.isEmbed) {
            const e3 = he.call(this, "iframe");
            if (!H(e3))
              return;
            const t2 = W(this.config.title) ? "video" : this.config.title, i2 = He.get("frameTitle", this.config);
            e3.setAttribute("title", i2.replace("{title}", t2));
          }
        }, togglePoster(e2) {
          le(this.elements.container, this.config.classNames.posterEnabled, e2);
        }, setPoster(e2, t2 = true) {
          return t2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), Te.call(this).then(() => nt(e2)).catch((t3) => {
            throw e2 === this.poster && at.togglePoster.call(this, false), t3;
          }).then(() => {
            if (e2 !== this.poster)
              throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e2}')`, backgroundSize: "" }), at.togglePoster.call(this, true), e2)));
        }, checkPlaying(e2) {
          le(this.elements.container, this.config.classNames.playing, this.playing), le(this.elements.container, this.config.classNames.paused, this.paused), le(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e3) => {
            Object.assign(e3, { pressed: this.playing }), e3.setAttribute("aria-label", He.get(this.playing ? "pause" : "play", this.config));
          }), F(e2) && e2.type === "timeupdate" || at.toggleControls.call(this);
        }, checkLoading(e2) {
          this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            le(this.elements.container, this.config.classNames.loading, this.loading), at.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e2) {
          const { controls: t2 } = this.elements;
          if (t2 && this.config.hideControls) {
            const i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || i2));
          }
        }, migrateStyles() {
          Object.values(__spreadValues({}, this.media.style)).filter((e2) => !W(e2) && _(e2) && e2.startsWith("--plyr")).forEach((e2) => {
            this.elements.container.style.setProperty(e2, this.media.style.getPropertyValue(e2)), this.media.style.removeProperty(e2);
          }), W(this.media.style) && this.media.removeAttribute("style");
        } };
        class lt {
          constructor(t2) {
            e(this, "firstTouch", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              e2.touch = true, le(t3.container, e2.config.classNames.isTouch, true);
            }), e(this, "setTabFocus", (e2) => {
              const { player: t3 } = this, { elements: i2 } = t3;
              if (clearTimeout(this.focusTimer), e2.type === "keydown" && e2.which !== 9)
                return;
              e2.type === "keydown" && (this.lastKeyDown = e2.timeStamp);
              const s2 = e2.timeStamp - this.lastKeyDown <= 20;
              (e2.type !== "focus" || s2) && ((() => {
                const e3 = t3.config.classNames.tabFocus;
                le(ce.call(t3, `.${e3}`), e3, false);
              })(), e2.type !== "focusout" && (this.focusTimer = setTimeout(() => {
                const e3 = document.activeElement;
                i2.container.contains(e3) && le(document.activeElement, t3.config.classNames.tabFocus, true);
              }, 10)));
            }), e(this, "global", (e2 = true) => {
              const { player: t3 } = this;
              t3.config.keyboard.global && ge.call(t3, window, "keydown keyup", this.handleKey, e2, false), ge.call(t3, document.body, "click", this.toggleMenu, e2), ye.call(t3, document.body, "touchstart", this.firstTouch), ge.call(t3, document.body, "keydown focus blur focusout", this.setTabFocus, e2, false, true);
            }), e(this, "container", () => {
              const { player: e2 } = this, { config: t3, elements: i2, timers: s2 } = e2;
              !t3.keyboard.global && t3.keyboard.focused && fe.call(e2, i2.container, "keydown keyup", this.handleKey, false), fe.call(e2, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t4) => {
                const { controls: n3 } = i2;
                n3 && t4.type === "enterfullscreen" && (n3.pressed = false, n3.hover = false);
                let a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t4.type) && (at.toggleControls.call(e2, true), a3 = e2.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => at.toggleControls.call(e2, false), a3);
              });
              const n2 = () => {
                if (!e2.isVimeo || e2.config.vimeo.premium)
                  return;
                const t4 = i2.wrapper, { active: s3 } = e2.fullscreen, [n3, a3] = xe.call(e2), l2 = Se(`aspect-ratio: ${n3} / ${a3}`);
                if (!s3)
                  return void (l2 ? (t4.style.width = null, t4.style.height = null) : (t4.style.maxWidth = null, t4.style.margin = null));
                const [o2, r2] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c2 = o2 / r2 > n3 / a3;
                l2 ? (t4.style.width = c2 ? "auto" : "100%", t4.style.height = c2 ? "100%" : "auto") : (t4.style.maxWidth = c2 ? r2 / a3 * n3 + "px" : null, t4.style.margin = c2 ? "0 auto" : null);
              }, a2 = () => {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };
              fe.call(e2, i2.container, "enterfullscreen exitfullscreen", (t4) => {
                const { target: s3 } = e2.fullscreen;
                if (s3 !== i2.container)
                  return;
                if (!e2.isEmbed && W(e2.config.ratio))
                  return;
                n2();
                (t4.type === "enterfullscreen" ? fe : be).call(e2, window, "resize", a2);
              });
            }), e(this, "media", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              if (fe.call(e2, e2.media, "timeupdate seeking seeked", (t4) => We.timeUpdate.call(e2, t4)), fe.call(e2, e2.media, "durationchange loadeddata loadedmetadata", (t4) => We.durationUpdate.call(e2, t4)), fe.call(e2, e2.media, "ended", () => {
                e2.isHTML5 && e2.isVideo && e2.config.resetOnEnd && (e2.restart(), e2.pause());
              }), fe.call(e2, e2.media, "progress playing seeking seeked", (t4) => We.updateProgress.call(e2, t4)), fe.call(e2, e2.media, "volumechange", (t4) => We.updateVolume.call(e2, t4)), fe.call(e2, e2.media, "playing play pause ended emptied timeupdate", (t4) => at.checkPlaying.call(e2, t4)), fe.call(e2, e2.media, "waiting canplay seeked playing", (t4) => at.checkLoading.call(e2, t4)), e2.supported.ui && e2.config.clickToPlay && !e2.isAudio) {
                const i3 = he.call(e2, `.${e2.config.classNames.video}`);
                if (!H(i3))
                  return;
                fe.call(e2, t3.container, "click", (s2) => {
                  ([t3.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e2.touch && e2.config.hideControls || (e2.ended ? (this.proxy(s2, e2.restart, "restart"), this.proxy(s2, () => {
                    ke(e2.play());
                  }, "play")) : this.proxy(s2, () => {
                    ke(e2.togglePlay());
                  }, "play")));
                });
              }
              e2.supported.ui && e2.config.disableContextMenu && fe.call(e2, t3.wrapper, "contextmenu", (e3) => {
                e3.preventDefault();
              }, false), fe.call(e2, e2.media, "volumechange", () => {
                e2.storage.set({ volume: e2.volume, muted: e2.muted });
              }), fe.call(e2, e2.media, "ratechange", () => {
                We.updateSetting.call(e2, "speed"), e2.storage.set({ speed: e2.speed });
              }), fe.call(e2, e2.media, "qualitychange", (t4) => {
                We.updateSetting.call(e2, "quality", null, t4.detail.quality);
              }), fe.call(e2, e2.media, "ready qualitychange", () => {
                We.setDownloadUrl.call(e2);
              });
              const i2 = e2.config.events.concat(["keyup", "keydown"]).join(" ");
              fe.call(e2, e2.media, i2, (i3) => {
                let { detail: s2 = {} } = i3;
                i3.type === "error" && (s2 = e2.media.error), ve.call(e2, t3.container, i3.type, true, s2);
              });
            }), e(this, "proxy", (e2, t3, i2) => {
              const { player: s2 } = this, n2 = s2.config.listeners[i2];
              let a2 = true;
              j(n2) && (a2 = n2.call(s2, e2)), a2 !== false && j(t3) && t3.call(s2, e2);
            }), e(this, "bind", (e2, t3, i2, s2, n2 = true) => {
              const { player: a2 } = this, l2 = a2.config.listeners[s2], o2 = j(l2);
              fe.call(a2, e2, t3, (e3) => this.proxy(e3, i2, s2), n2 && !o2);
            }), e(this, "controls", () => {
              const { player: e2 } = this, { elements: t3 } = e2, i2 = Y.isIE ? "change" : "input";
              if (t3.buttons.play && Array.from(t3.buttons.play).forEach((t4) => {
                this.bind(t4, "click", () => {
                  ke(e2.togglePlay());
                }, "play");
              }), this.bind(t3.buttons.restart, "click", e2.restart, "restart"), this.bind(t3.buttons.rewind, "click", () => {
                e2.lastSeekTime = Date.now(), e2.rewind();
              }, "rewind"), this.bind(t3.buttons.fastForward, "click", () => {
                e2.lastSeekTime = Date.now(), e2.forward();
              }, "fastForward"), this.bind(t3.buttons.mute, "click", () => {
                e2.muted = !e2.muted;
              }, "mute"), this.bind(t3.buttons.captions, "click", () => e2.toggleCaptions()), this.bind(t3.buttons.download, "click", () => {
                ve.call(e2, e2.media, "download");
              }, "download"), this.bind(t3.buttons.fullscreen, "click", () => {
                e2.fullscreen.toggle();
              }, "fullscreen"), this.bind(t3.buttons.pip, "click", () => {
                e2.pip = "toggle";
              }, "pip"), this.bind(t3.buttons.airplay, "click", e2.airplay, "airplay"), this.bind(t3.buttons.settings, "click", (t4) => {
                t4.stopPropagation(), t4.preventDefault(), We.toggleMenu.call(e2, t4);
              }, null, false), this.bind(t3.buttons.settings, "keyup", (t4) => {
                const i3 = t4.which;
                [13, 32].includes(i3) && (i3 !== 13 ? (t4.preventDefault(), t4.stopPropagation(), We.toggleMenu.call(e2, t4)) : We.focusFirstMenuItem.call(e2, null, true));
              }, null, false), this.bind(t3.settings.menu, "keydown", (t4) => {
                t4.which === 27 && We.toggleMenu.call(e2, t4);
              }), this.bind(t3.inputs.seek, "mousedown mousemove", (e3) => {
                const i3 = t3.progress.getBoundingClientRect(), s2 = 100 / i3.width * (e3.pageX - i3.left);
                e3.currentTarget.setAttribute("seek-value", s2);
              }), this.bind(t3.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t4) => {
                const i3 = t4.currentTarget, s2 = t4.keyCode ? t4.keyCode : t4.which, n2 = "play-on-seeked";
                if (R(t4) && s2 !== 39 && s2 !== 37)
                  return;
                e2.lastSeekTime = Date.now();
                const a2 = i3.hasAttribute(n2), l2 = ["mouseup", "touchend", "keyup"].includes(t4.type);
                a2 && l2 ? (i3.removeAttribute(n2), ke(e2.play())) : !l2 && e2.playing && (i3.setAttribute(n2, ""), e2.pause());
              }), Y.isIos) {
                const t4 = ce.call(e2, 'input[type="range"]');
                Array.from(t4).forEach((e3) => this.bind(e3, i2, (e4) => K(e4.target)));
              }
              this.bind(t3.inputs.seek, i2, (t4) => {
                const i3 = t4.currentTarget;
                let s2 = i3.getAttribute("seek-value");
                W(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e2.currentTime = s2 / i3.max * e2.duration;
              }, "seek"), this.bind(t3.progress, "mouseenter mouseleave mousemove", (t4) => We.updateSeekTooltip.call(e2, t4)), this.bind(t3.progress, "mousemove touchmove", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startMove(t4);
              }), this.bind(t3.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t4 } = e2;
                t4 && t4.loaded && t4.endMove(false, true);
              }), this.bind(t3.progress, "mousedown touchstart", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startScrubbing(t4);
              }), this.bind(t3.progress, "mouseup touchend", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.endScrubbing(t4);
              }), Y.isWebkit && Array.from(ce.call(e2, 'input[type="range"]')).forEach((t4) => {
                this.bind(t4, "input", (t5) => We.updateRangeFill.call(e2, t5.target));
              }), e2.config.toggleInvert && !H(t3.display.duration) && this.bind(t3.display.currentTime, "click", () => {
                e2.currentTime !== 0 && (e2.config.invertTime = !e2.config.invertTime, We.timeUpdate.call(e2));
              }), this.bind(t3.inputs.volume, i2, (t4) => {
                e2.volume = t4.target.value;
              }, "volume"), this.bind(t3.controls, "mouseenter mouseleave", (i3) => {
                t3.controls.hover = !e2.touch && i3.type === "mouseenter";
              }), t3.fullscreen && Array.from(t3.fullscreen.children).filter((e3) => !e3.contains(t3.container)).forEach((i3) => {
                this.bind(i3, "mouseenter mouseleave", (i4) => {
                  t3.controls && (t3.controls.hover = !e2.touch && i4.type === "mouseenter");
                });
              }), this.bind(t3.controls, "mousedown mouseup touchstart touchend touchcancel", (e3) => {
                t3.controls.pressed = ["mousedown", "touchstart"].includes(e3.type);
              }), this.bind(t3.controls, "focusin", () => {
                const { config: i3, timers: s2 } = e2;
                le(t3.controls, i3.classNames.noTransition, true), at.toggleControls.call(e2, true), setTimeout(() => {
                  le(t3.controls, i3.classNames.noTransition, false);
                }, 0);
                const n2 = this.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(() => at.toggleControls.call(e2, false), n2);
              }), this.bind(t3.inputs.volume, "wheel", (t4) => {
                const i3 = t4.webkitDirectionInvertedFromDevice, [s2, n2] = [t4.deltaX, -t4.deltaY].map((e3) => i3 ? -e3 : e3), a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
                e2.increaseVolume(a2 / 50);
                const { volume: l2 } = e2.media;
                (a2 === 1 && l2 < 1 || a2 === -1 && l2 > 0) && t4.preventDefault();
              }, "volume", false);
            }), this.player = t2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e2) {
            const { player: t2 } = this, { elements: i2 } = t2, s2 = e2.keyCode ? e2.keyCode : e2.which, n2 = e2.type === "keydown", a2 = n2 && s2 === this.lastKey;
            if (e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey)
              return;
            if (!$(s2))
              return;
            if (n2) {
              const n3 = document.activeElement;
              if (H(n3)) {
                const { editable: s3 } = t2.config.selectors, { seek: a3 } = i2.inputs;
                if (n3 !== a3 && re(n3, s3))
                  return;
                if (e2.which === 32 && re(n3, 'button, [role^="menuitem"]'))
                  return;
              }
              switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  a2 || (t2.currentTime = t2.duration / 10 * (s2 - 48));
                  break;
                case 32:
                case 75:
                  a2 || ke(t2.togglePlay());
                  break;
                case 38:
                  t2.increaseVolume(0.1);
                  break;
                case 40:
                  t2.decreaseVolume(0.1);
                  break;
                case 77:
                  a2 || (t2.muted = !t2.muted);
                  break;
                case 39:
                  t2.forward();
                  break;
                case 37:
                  t2.rewind();
                  break;
                case 70:
                  t2.fullscreen.toggle();
                  break;
                case 67:
                  a2 || t2.toggleCaptions();
                  break;
                case 76:
                  t2.loop = !t2.loop;
              }
              s2 === 27 && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = s2;
            } else
              this.lastKey = null;
          }
          toggleMenu(e2) {
            We.toggleMenu.call(this.player, e2);
          }
        }
        typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" && self;
        var ot = function(e2, t2) {
          return e2(t2 = { exports: {} }, t2.exports), t2.exports;
        }(function(e2, t2) {
          e2.exports = function() {
            var e3 = function() {
            }, t3 = {}, i2 = {}, s2 = {};
            function n2(e4, t4) {
              e4 = e4.push ? e4 : [e4];
              var n3, a3, l3, o3 = [], r3 = e4.length, c3 = r3;
              for (n3 = function(e5, i3) {
                i3.length && o3.push(e5), --c3 || t4(o3);
              }; r3--; )
                a3 = e4[r3], (l3 = i2[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
            }
            function a2(e4, t4) {
              if (e4) {
                var n3 = s2[e4];
                if (i2[e4] = t4, n3)
                  for (; n3.length; )
                    n3[0](e4, t4), n3.splice(0, 1);
              }
            }
            function l2(t4, i3) {
              t4.call && (t4 = { success: t4 }), i3.length ? (t4.error || e3)(i3) : (t4.success || e3)(t4);
            }
            function o2(t4, i3, s3, n3) {
              var a3, l3, r3 = document, c3 = s3.async, h2 = (s3.numRetries || 0) + 1, u2 = s3.before || e3, d2 = t4.replace(/[\?|#].*$/, ""), m2 = t4.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = r3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = r3.createElement("img")).src = m2 : ((l3 = r3.createElement("script")).src = t4, l3.async = c3 === void 0 || c3), l3.onload = l3.onerror = l3.onbeforeload = function(e4) {
                var r4 = e4.type[0];
                if (a3)
                  try {
                    l3.sheet.cssText.length || (r4 = "e");
                  } catch (e5) {
                    e5.code != 18 && (r4 = "e");
                  }
                if (r4 == "e") {
                  if ((n3 += 1) < h2)
                    return o2(t4, i3, s3, n3);
                } else if (l3.rel == "preload" && l3.as == "style")
                  return l3.rel = "stylesheet";
                i3(t4, r4, e4.defaultPrevented);
              }, u2(t4, l3) !== false && r3.head.appendChild(l3);
            }
            function r2(e4, t4, i3) {
              var s3, n3, a3 = (e4 = e4.push ? e4 : [e4]).length, l3 = a3, r3 = [];
              for (s3 = function(e5, i4, s4) {
                if (i4 == "e" && r3.push(e5), i4 == "b") {
                  if (!s4)
                    return;
                  r3.push(e5);
                }
                --a3 || t4(r3);
              }, n3 = 0; n3 < l3; n3++)
                o2(e4[n3], s3, i3);
            }
            function c2(e4, i3, s3) {
              var n3, o3;
              if (i3 && i3.trim && (n3 = i3), o3 = (n3 ? s3 : i3) || {}, n3) {
                if (n3 in t3)
                  throw "LoadJS";
                t3[n3] = true;
              }
              function c3(t4, i4) {
                r2(e4, function(e5) {
                  l2(o3, e5), t4 && l2({ success: t4, error: i4 }, e5), a2(n3, e5);
                }, o3);
              }
              if (o3.returnPromise)
                return new Promise(c3);
              c3();
            }
            return c2.ready = function(e4, t4) {
              return n2(e4, function(e5) {
                l2(t4, e5);
              }), c2;
            }, c2.done = function(e4) {
              a2(e4, []);
            }, c2.reset = function() {
              t3 = {}, i2 = {}, s2 = {};
            }, c2.isDefined = function(e4) {
              return e4 in t3;
            }, c2;
          }();
        });
        function rt(e2) {
          return new Promise((t2, i2) => {
            ot(e2, { success: t2, error: i2 });
          });
        }
        function ct(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, ve.call(this, this.media, e2 ? "play" : "pause"));
        }
        const ht = { setup() {
          const e2 = this;
          le(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, Me.call(e2), L(window.Vimeo) ? ht.ready.call(e2) : rt(e2.config.urls.vimeo.sdk).then(() => {
            ht.ready.call(e2);
          }).catch((t2) => {
            e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.vimeo, _a = t2, { premium: i2, referrerPolicy: s2 } = _a, n2 = __objRest(_a, ["premium", "referrerPolicy"]);
          let a2 = e2.media.getAttribute("src"), l2 = "";
          W(a2) ? (a2 = e2.media.getAttribute(e2.config.attributes.embed.id), l2 = e2.media.getAttribute(e2.config.attributes.embed.hash)) : l2 = function(e3) {
            const t3 = e3.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*&*h=|\/)+(?<hash>[\d,a-f]+)/);
            return t3 ? t3.groups.hash : null;
          }(a2);
          const o2 = l2 ? { h: l2 } : {};
          i2 && Object.assign(n2, { controls: false, sidedock: false });
          const r2 = Ke(__spreadValues(__spreadValues({ loop: e2.config.loop.active, autoplay: e2.autoplay, muted: e2.muted, gesture: "media", playsinline: !this.config.fullscreen.iosNative }, o2), n2)), c2 = W(h2 = a2) ? null : $(Number(h2)) ? h2 : h2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h2;
          var h2;
          const u2 = Z("iframe"), d2 = $e(e2.config.urls.vimeo.iframe, c2, r2);
          if (u2.setAttribute("src", d2), u2.setAttribute("allowfullscreen", ""), u2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), W(s2) || u2.setAttribute("referrerPolicy", s2), i2 || !t2.customControls)
            u2.setAttribute("data-poster", e2.poster), e2.media = se(u2, e2.media);
          else {
            const t3 = Z("div", { class: e2.config.classNames.embedContainer, "data-poster": e2.poster });
            t3.appendChild(u2), e2.media = se(t3, e2.media);
          }
          t2.customControls || Re($e(e2.config.urls.vimeo.api, d2)).then((t3) => {
            !W(t3) && t3.thumbnail_url && at.setPoster.call(e2, t3.thumbnail_url).catch(() => {
            });
          }), e2.embed = new window.Vimeo.Player(u2, { autopause: e2.config.autopause, muted: e2.muted }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = () => (ct.call(e2, true), e2.embed.play()), e2.media.pause = () => (ct.call(e2, false), e2.embed.pause()), e2.media.stop = () => {
            e2.pause(), e2.currentTime = 0;
          };
          let { currentTime: m2 } = e2.media;
          Object.defineProperty(e2.media, "currentTime", { get: () => m2, set(t3) {
            const { embed: i3, media: s3, paused: n3, volume: a3 } = e2, l3 = n3 && !i3.hasPlayed;
            s3.seeking = true, ve.call(e2, s3, "seeking"), Promise.resolve(l3 && i3.setVolume(0)).then(() => i3.setCurrentTime(t3)).then(() => l3 && i3.pause()).then(() => l3 && i3.setVolume(a3)).catch(() => {
            });
          } });
          let p2 = e2.config.speed.selected;
          Object.defineProperty(e2.media, "playbackRate", { get: () => p2, set(t3) {
            e2.embed.setPlaybackRate(t3).then(() => {
              p2 = t3, ve.call(e2, e2.media, "ratechange");
            }).catch(() => {
              e2.options.speed = [1];
            });
          } });
          let { volume: g2 } = e2.config;
          Object.defineProperty(e2.media, "volume", { get: () => g2, set(t3) {
            e2.embed.setVolume(t3).then(() => {
              g2 = t3, ve.call(e2, e2.media, "volumechange");
            });
          } });
          let { muted: f2 } = e2.config;
          Object.defineProperty(e2.media, "muted", { get: () => f2, set(t3) {
            const i3 = !!O(t3) && t3;
            e2.embed.setVolume(i3 ? 0 : e2.config.volume).then(() => {
              f2 = i3, ve.call(e2, e2.media, "volumechange");
            });
          } });
          let b2, { loop: y2 } = e2.config;
          Object.defineProperty(e2.media, "loop", { get: () => y2, set(t3) {
            const i3 = O(t3) ? t3 : e2.config.loop.active;
            e2.embed.setLoop(i3).then(() => {
              y2 = i3;
            });
          } }), e2.embed.getVideoUrl().then((t3) => {
            b2 = t3, We.setDownloadUrl.call(e2);
          }).catch((e3) => {
            this.debug.warn(e3);
          }), Object.defineProperty(e2.media, "currentSrc", { get: () => b2 }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then((t3) => {
            const [i3, s3] = t3;
            e2.embed.ratio = Ie(i3, s3), Me.call(this);
          }), e2.embed.setAutopause(e2.config.autopause).then((t3) => {
            e2.config.autopause = t3;
          }), e2.embed.getVideoTitle().then((t3) => {
            e2.config.title = t3, at.setTitle.call(this);
          }), e2.embed.getCurrentTime().then((t3) => {
            m2 = t3, ve.call(e2, e2.media, "timeupdate");
          }), e2.embed.getDuration().then((t3) => {
            e2.media.duration = t3, ve.call(e2, e2.media, "durationchange");
          }), e2.embed.getTextTracks().then((t3) => {
            e2.media.textTracks = t3, Ye.setup.call(e2);
          }), e2.embed.on("cuechange", ({ cues: t3 = [] }) => {
            const i3 = t3.map((e3) => function(e4) {
              const t4 = document.createDocumentFragment(), i4 = document.createElement("div");
              return t4.appendChild(i4), i4.innerHTML = e4, t4.firstChild.innerText;
            }(e3.text));
            Ye.updateCues.call(e2, i3);
          }), e2.embed.on("loaded", () => {
            if (e2.embed.getPaused().then((t3) => {
              ct.call(e2, !t3), t3 || ve.call(e2, e2.media, "playing");
            }), H(e2.embed.element) && e2.supported.ui) {
              e2.embed.element.setAttribute("tabindex", -1);
            }
          }), e2.embed.on("bufferstart", () => {
            ve.call(e2, e2.media, "waiting");
          }), e2.embed.on("bufferend", () => {
            ve.call(e2, e2.media, "playing");
          }), e2.embed.on("play", () => {
            ct.call(e2, true), ve.call(e2, e2.media, "playing");
          }), e2.embed.on("pause", () => {
            ct.call(e2, false);
          }), e2.embed.on("timeupdate", (t3) => {
            e2.media.seeking = false, m2 = t3.seconds, ve.call(e2, e2.media, "timeupdate");
          }), e2.embed.on("progress", (t3) => {
            e2.media.buffered = t3.percent, ve.call(e2, e2.media, "progress"), parseInt(t3.percent, 10) === 1 && ve.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then((t4) => {
              t4 !== e2.media.duration && (e2.media.duration = t4, ve.call(e2, e2.media, "durationchange"));
            });
          }), e2.embed.on("seeked", () => {
            e2.media.seeking = false, ve.call(e2, e2.media, "seeked");
          }), e2.embed.on("ended", () => {
            e2.media.paused = true, ve.call(e2, e2.media, "ended");
          }), e2.embed.on("error", (t3) => {
            e2.media.error = t3, ve.call(e2, e2.media, "error");
          }), t2.customControls && setTimeout(() => at.build.call(e2), 0);
        } };
        function ut(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, ve.call(this, this.media, e2 ? "play" : "pause"));
        }
        function dt(e2) {
          return e2.noCookie ? "https://www.youtube-nocookie.com" : window.location.protocol === "http:" ? "http://www.youtube.com" : void 0;
        }
        const mt = { setup() {
          if (le(this.elements.wrapper, this.config.classNames.embed, true), L(window.YT) && j(window.YT.Player))
            mt.ready.call(this);
          else {
            const e2 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              j(e2) && e2(), mt.ready.call(this);
            }, rt(this.config.urls.youtube.sdk).catch((e3) => {
              this.debug.warn("YouTube API failed to load", e3);
            });
          }
        }, getTitle(e2) {
          Re($e(this.config.urls.youtube.api, e2)).then((e3) => {
            if (L(e3)) {
              const { title: t2, height: i2, width: s2 } = e3;
              this.config.title = t2, at.setTitle.call(this), this.embed.ratio = Ie(s2, i2);
            }
            Me.call(this);
          }).catch(() => {
            Me.call(this);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.youtube, i2 = e2.media && e2.media.getAttribute("id");
          if (!W(i2) && i2.startsWith("youtube-"))
            return;
          let s2 = e2.media.getAttribute("src");
          W(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
          const n2 = W(a2 = s2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2;
          var a2;
          const l2 = Z("div", { id: `${e2.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t2.customControls ? e2.poster : void 0 });
          if (e2.media = se(l2, e2.media), t2.customControls) {
            const t3 = (e3) => `https://i.ytimg.com/vi/${n2}/${e3}default.jpg`;
            nt(t3("maxres"), 121).catch(() => nt(t3("sd"), 121)).catch(() => nt(t3("hq"))).then((t4) => at.setPoster.call(e2, t4.src)).then((t4) => {
              t4.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e2.embed = new window.YT.Player(e2.media, { videoId: n2, host: dt(t2), playerVars: X({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui && t2.customControls ? 0 : 1, disablekb: 1, playsinline: e2.config.fullscreen.iosNative ? 0 : 1, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, t2), events: { onError(t3) {
            if (!e2.media.error) {
              const i3 = t3.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i3] || "An unknown error occured";
              e2.media.error = { code: i3, message: s3 }, ve.call(e2, e2.media, "error");
            }
          }, onPlaybackRateChange(t3) {
            const i3 = t3.target;
            e2.media.playbackRate = i3.getPlaybackRate(), ve.call(e2, e2.media, "ratechange");
          }, onReady(i3) {
            if (j(e2.media.play))
              return;
            const s3 = i3.target;
            mt.getTitle.call(e2, n2), e2.media.play = () => {
              ut.call(e2, true), s3.playVideo();
            }, e2.media.pause = () => {
              ut.call(e2, false), s3.pauseVideo();
            }, e2.media.stop = () => {
              s3.stopVideo();
            }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t3) {
              e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, ve.call(e2, e2.media, "seeking"), s3.seekTo(t3);
            } }), Object.defineProperty(e2.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e3) {
              s3.setPlaybackRate(e3);
            } });
            let { volume: a3 } = e2.config;
            Object.defineProperty(e2.media, "volume", { get: () => a3, set(t3) {
              a3 = t3, s3.setVolume(100 * a3), ve.call(e2, e2.media, "volumechange");
            } });
            let { muted: l3 } = e2.config;
            Object.defineProperty(e2.media, "muted", { get: () => l3, set(t3) {
              const i4 = O(t3) ? t3 : l3;
              l3 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * a3), ve.call(e2, e2.media, "volumechange");
            } }), Object.defineProperty(e2.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration });
            const o2 = s3.getAvailablePlaybackRates();
            e2.options.speed = o2.filter((t3) => e2.config.speed.options.includes(t3)), e2.supported.ui && t2.customControls && e2.media.setAttribute("tabindex", -1), ve.call(e2, e2.media, "timeupdate"), ve.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(() => {
              e2.media.buffered = s3.getVideoLoadedFraction(), (e2.media.lastBuffered === null || e2.media.lastBuffered < e2.media.buffered) && ve.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, e2.media.buffered === 1 && (clearInterval(e2.timers.buffering), ve.call(e2, e2.media, "canplaythrough"));
            }, 200), t2.customControls && setTimeout(() => at.build.call(e2), 50);
          }, onStateChange(i3) {
            const s3 = i3.target;
            clearInterval(e2.timers.playing);
            switch (e2.media.seeking && [1, 2].includes(i3.data) && (e2.media.seeking = false, ve.call(e2, e2.media, "seeked")), i3.data) {
              case -1:
                ve.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), ve.call(e2, e2.media, "progress");
                break;
              case 0:
                ut.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : ve.call(e2, e2.media, "ended");
                break;
              case 1:
                t2.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (ut.call(e2, true), ve.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(() => {
                  ve.call(e2, e2.media, "timeupdate");
                }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), ve.call(e2, e2.media, "durationchange")));
                break;
              case 2:
                e2.muted || e2.embed.unMute(), ut.call(e2, false);
                break;
              case 3:
                ve.call(e2, e2.media, "waiting");
            }
            ve.call(e2, e2.elements.container, "statechange", false, { code: i3.data });
          } } });
        } }, pt = { setup() {
          this.media ? (le(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), le(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && le(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = Z("div", { class: this.config.classNames.video }), J(this.media, this.elements.wrapper), this.elements.poster = Z("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Le.setup.call(this) : this.isYouTube ? mt.setup.call(this) : this.isVimeo && ht.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class gt {
          constructor(t2) {
            e(this, "load", () => {
              this.enabled && (L(window.google) && L(window.google.ima) ? this.ready() : rt(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e(this, "ready", () => {
              var e2;
              this.enabled || ((e2 = this).manager && e2.manager.destroy(), e2.elements.displayContainer && e2.elements.displayContainer.destroy(), e2.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", () => {
              this.elements.container = Z("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e2) => this.onAdsManagerLoaded(e2), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e2) => this.onAdError(e2), false), this.requestAds();
            }), e(this, "requestAds", () => {
              const { container: e2 } = this.player.elements;
              try {
                const t3 = new google.ima.AdsRequest();
                t3.adTagUrl = this.tagUrl, t3.linearAdSlotWidth = e2.offsetWidth, t3.linearAdSlotHeight = e2.offsetHeight, t3.nonLinearAdSlotWidth = e2.offsetWidth, t3.nonLinearAdSlotHeight = e2.offsetHeight, t3.forceNonLinearFullSlot = false, t3.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t3);
              } catch (e3) {
                this.onAdError(e3);
              }
            }), e(this, "pollCountdown", (e2 = false) => {
              if (!e2)
                return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e3 = Ue(Math.max(this.manager.getRemainingTime(), 0)), t3 = `${He.get("advertisement", this.player.config)} - ${e3}`;
                this.elements.container.setAttribute("data-badge-text", t3);
              }, 100);
            }), e(this, "onAdsManagerLoaded", (e2) => {
              if (!this.enabled)
                return;
              const t3 = new google.ima.AdsRenderingSettings();
              t3.restoreCustomPlaybackStateOnAdBreakComplete = true, t3.enablePreloading = true, this.manager = e2.getAdsManager(this.player, t3), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3)), Object.keys(google.ima.AdEvent.Type).forEach((e3) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e3], (e4) => this.onAdEvent(e4));
              }), this.trigger("loaded");
            }), e(this, "addCuePoints", () => {
              W(this.cuePoints) || this.cuePoints.forEach((e2) => {
                if (e2 !== 0 && e2 !== -1 && e2 < this.player.duration) {
                  const t3 = this.player.elements.progress;
                  if (H(t3)) {
                    const i2 = 100 / this.player.duration * e2, s2 = Z("span", { class: this.player.config.classNames.cues });
                    s2.style.left = `${i2.toString()}%`, t3.appendChild(s2);
                  }
                }
              });
            }), e(this, "onAdEvent", (e2) => {
              const { container: t3 } = this.player.elements, i2 = e2.getAd(), s2 = e2.getAdData();
              switch (((e3) => {
                ve.call(this.player, this.player.media, `ads${e3.replace(/_/g, "").toLowerCase()}`);
              })(e2.type), e2.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = t3.offsetWidth, i2.height = t3.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s2.adError && this.player.debug.warn(`Non-fatal ad error: ${s2.adError.getMessage()}`);
              }
            }), e(this, "onAdError", (e2) => {
              this.cancel(), this.player.debug.warn("Ads error", e2);
            }), e(this, "listeners", () => {
              const { container: e2 } = this.player.elements;
              let t3;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t3 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e3 = this.player.currentTime;
                W(this.cuePoints) || this.cuePoints.forEach((i2, s2) => {
                  t3 < i2 && i2 < e3 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e(this, "play", () => {
              const { container: e2 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e3) {
                  this.onAdError(e3);
                }
              }).catch(() => {
              });
            }), e(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ke(this.player.media.play());
            }), e(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e2) => {
                  this.on("loaded", e2), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e(this, "trigger", (e2, ...t3) => {
              const i2 = this.events[e2];
              q(i2) && i2.forEach((e3) => {
                j(e3) && e3.apply(this, t3);
              });
            }), e(this, "on", (e2, t3) => (q(this.events[e2]) || (this.events[e2] = []), this.events[e2].push(t3), this)), e(this, "startSafetyTimer", (e2, t3) => {
              this.player.debug.log(`Safety timer invoked from: ${t3}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e2);
            }), e(this, "clearSafetyTimer", (e2) => {
              I(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e2}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t2, this.config = t2.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e2, t3) => {
              this.on("loaded", e2), this.on("error", t3);
            }), this.load();
          }
          get enabled() {
            const { config: e2 } = this;
            return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!W(e2.publisherId) || U(e2.tagUrl));
          }
          get tagUrl() {
            const { config: e2 } = this;
            if (U(e2.tagUrl))
              return e2.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ke({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e2.publisherId })}`;
          }
        }
        const ft = (e2) => {
          const t2 = [];
          return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach((e3) => {
            const i2 = {};
            e3.split(/\r\n|\n|\r/).forEach((e4) => {
              if ($(i2.startTime)) {
                if (!W(e4.trim()) && W(i2.text)) {
                  const t3 = e4.trim().split("#xywh=");
                  [i2.text] = t3, t3[1] && ([i2.x, i2.y, i2.w, i2.h] = t3[1].split(","));
                }
              } else {
                const t3 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t3 && (i2.startTime = 60 * Number(t3[1] || 0) * 60 + 60 * Number(t3[2]) + Number(t3[3]) + Number(`0.${t3[4]}`), i2.endTime = 60 * Number(t3[6] || 0) * 60 + 60 * Number(t3[7]) + Number(t3[8]) + Number(`0.${t3[9]}`));
              }
            }), i2.text && t2.push(i2);
          }), t2;
        }, bt = (e2, t2) => {
          const i2 = {};
          return e2 > t2.width / t2.height ? (i2.width = t2.width, i2.height = 1 / e2 * t2.width) : (i2.height = t2.height, i2.width = e2 * t2.height), i2;
        };
        class yt {
          constructor(t2) {
            e(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = true);
              });
            }), e(this, "getThumbnails", () => new Promise((e2) => {
              const { src: t3 } = this.player.config.previewThumbnails;
              if (W(t3))
                throw new Error("Missing previewThumbnails.src config attribute");
              const i2 = () => {
                this.thumbnails.sort((e3, t4) => e3.height - t4.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e2();
              };
              if (j(t3))
                t3((e3) => {
                  this.thumbnails = e3, i2();
                });
              else {
                const e3 = (_(t3) ? [t3] : t3).map((e4) => this.getThumbnail(e4));
                Promise.all(e3).then(i2);
              }
            })), e(this, "getThumbnail", (e2) => new Promise((t3) => {
              Re(e2).then((i2) => {
                const s2 = { frames: ft(i2), height: null, urlPrefix: "" };
                s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e2.substring(0, e2.lastIndexOf("/") + 1));
                const n2 = new Image();
                n2.onload = () => {
                  s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t3();
                }, n2.src = s2.urlPrefix + s2.frames[0].text;
              });
            })), e(this, "startMove", (e2) => {
              if (this.loaded && F(e2) && ["touchmove", "mousemove"].includes(e2.type) && this.player.media.duration) {
                if (e2.type === "touchmove")
                  this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  const t3 = this.player.elements.progress.getBoundingClientRect(), i2 = 100 / t3.width * (e2.pageX - t3.left);
                  this.seekTime = this.player.media.duration * (i2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e2.pageX, this.elements.thumb.time.innerText = Ue(this.seekTime);
                }
                this.showImageAtCurrentTime();
              }
            }), e(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e(this, "startScrubbing", (e2) => {
              (I(e2.button) || e2.button === false || e2.button === 0) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : ye.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e(this, "render", () => {
              this.elements.thumb.container = Z("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = Z("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e2 = Z("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = Z("span", {}, "00:00"), e2.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e2), H(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Z("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e2 = this.thumbnails[0].frames.findIndex((e3) => this.seekTime >= e3.startTime && this.seekTime <= e3.endTime), t3 = e2 >= 0;
              let i2 = 0;
              this.mouseDown || this.toggleThumbContainer(t3), t3 && (this.thumbnails.forEach((t4, s2) => {
                this.loadedImages.includes(t4.frames[e2].text) && (i2 = s2);
              }), e2 !== this.showingThumb && (this.showingThumb = e2, this.loadImage(i2)));
            }), e(this, "loadImage", (e2 = 0) => {
              const t3 = this.showingThumb, i2 = this.thumbnails[e2], { urlPrefix: s2 } = i2, n2 = i2.frames[t3], a2 = i2.frames[t3].text, l2 = s2 + a2;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a2)
                this.showImage(this.currentImageElement, n2, e2, t3, a2, false), this.currentImageElement.dataset.index = t3, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i3 = new Image();
                i3.src = l2, i3.dataset.index = t3, i3.dataset.filename = a2, this.showingThumbFilename = a2, this.player.debug.log(`Loading image: ${l2}`), i3.onload = () => this.showImage(i3, n2, e2, t3, a2, true), this.loadingImage = i3, this.removeOldImages(i3);
              }
            }), e(this, "showImage", (e2, t3, i2, s2, n2, a2 = true) => {
              this.player.debug.log(`Showing thumb: ${n2}. num: ${s2}. qual: ${i2}. newimg: ${a2}`), this.setImageSizeAndOffset(e2, t3), a2 && (this.currentImageContainer.appendChild(e2), this.currentImageElement = e2, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i2, e2, t3, n2));
            }), e(this, "removeOldImages", (e2) => {
              Array.from(this.currentImageContainer.children).forEach((t3) => {
                if (t3.tagName.toLowerCase() !== "img")
                  return;
                const i2 = this.usingSprites ? 500 : 1e3;
                if (t3.dataset.index !== e2.dataset.index && !t3.dataset.deleting) {
                  t3.dataset.deleting = true;
                  const { currentImageContainer: e3 } = this;
                  setTimeout(() => {
                    e3.removeChild(t3), this.player.debug.log(`Removing thumb: ${t3.dataset.filename}`);
                  }, i2);
                }
              });
            }), e(this, "preloadNearby", (e2, t3 = true) => new Promise((i2) => {
              setTimeout(() => {
                const s2 = this.thumbnails[0].frames[e2].text;
                if (this.showingThumbFilename === s2) {
                  let n2;
                  n2 = t3 ? this.thumbnails[0].frames.slice(e2) : this.thumbnails[0].frames.slice(0, e2).reverse();
                  let a2 = false;
                  n2.forEach((e3) => {
                    const t4 = e3.text;
                    if (t4 !== s2 && !this.loadedImages.includes(t4)) {
                      a2 = true, this.player.debug.log(`Preloading thumb filename: ${t4}`);
                      const { urlPrefix: e4 } = this.thumbnails[0], s3 = e4 + t4, n3 = new Image();
                      n3.src = s3, n3.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t4}`), this.loadedImages.includes(t4) || this.loadedImages.push(t4), i2();
                      };
                    }
                  }), a2 || i2();
                }
              }, 300);
            })), e(this, "getHigherQuality", (e2, t3, i2, s2) => {
              if (e2 < this.thumbnails.length - 1) {
                let n2 = t3.naturalHeight;
                this.usingSprites && (n2 = i2.h), n2 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s2 && (this.player.debug.log(`Showing higher quality thumb for: ${s2}`), this.loadImage(e2 + 1));
                }, 300);
              }
            }), e(this, "toggleThumbContainer", (e2 = false, t3 = false) => {
              const i2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i2, e2), !e2 && t3 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e2 = false) => {
              const t3 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t3, e2), e2 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e(this, "setThumbContainerSizeAndPos", () => {
              if (this.sizeSpecifiedInCSS) {
                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                  const e2 = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                  this.elements.thumb.imageContainer.style.width = `${e2}px`;
                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                  const e2 = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                  this.elements.thumb.imageContainer.style.height = `${e2}px`;
                }
              } else {
                const e2 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`, this.elements.thumb.imageContainer.style.width = `${e2}px`;
              }
              this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", () => {
              const e2 = this.player.elements.progress.getBoundingClientRect(), t3 = this.player.elements.container.getBoundingClientRect(), { container: i2 } = this.elements.thumb, s2 = t3.left - e2.left + 10, n2 = t3.right - e2.left - i2.clientWidth - 10;
              let a2 = this.mousePosX - e2.left - i2.clientWidth / 2;
              a2 < s2 && (a2 = s2), a2 > n2 && (a2 = n2), i2.style.left = `${a2}px`;
            }), e(this, "setScrubbingContainerSize", () => {
              const { width: e2, height: t3 } = bt(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e2}px`, this.elements.scrubbing.container.style.height = `${t3}px`;
            }), e(this, "setImageSizeAndOffset", (e2, t3) => {
              if (!this.usingSprites)
                return;
              const i2 = this.thumbContainerHeight / t3.h;
              e2.style.height = e2.naturalHeight * i2 + "px", e2.style.width = e2.naturalWidth * i2 + "px", e2.style.left = `-${t3.x * i2}px`, e2.style.top = `-${t3.y * i2}px`;
            }), this.player = t2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e2 } = bt(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e2;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e2) {
            this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
          }
        }
        const vt = { insertElements(e2, t2) {
          _(t2) ? ee(e2, this.media, { src: t2 }) : q(t2) && t2.forEach((t3) => {
            ee(e2, this.media, t3);
          });
        }, change(e2) {
          Q(e2, "sources.length") ? (Le.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], te(this.media), this.media = null, H(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t2, type: i2 } = e2, [{ provider: s2 = Ge.html5, src: n2 }] = t2, a2 = s2 === "html5" ? i2 : "div", l2 = s2 === "html5" ? {} : { src: n2 };
            Object.assign(this, { provider: s2, type: i2, supported: me.check(i2, s2, this.config.playsinline), media: Z(a2, l2) }), this.elements.container.appendChild(this.media), O(e2.autoplay) && (this.config.autoplay = e2.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), W(e2.poster) || (this.poster = e2.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), at.addStyleHook.call(this), this.isHTML5 && vt.insertElements.call(this, "source", t2), this.config.title = e2.title, pt.setup.call(this), this.isHTML5 && Object.keys(e2).includes("tracks") && vt.insertElements.call(this, "track", e2.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && at.build.call(this), this.isHTML5 && this.media.load(), W(e2.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e2.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class wt {
          constructor(t2, i2) {
            if (e(this, "play", () => j(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ke(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && j(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e2) => (O(e2) ? e2 : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : j(this.media.stop) && this.media.stop();
            }), e(this, "restart", () => {
              this.currentTime = 0;
            }), e(this, "rewind", (e2) => {
              this.currentTime -= $(e2) ? e2 : this.config.seekTime;
            }), e(this, "forward", (e2) => {
              this.currentTime += $(e2) ? e2 : this.config.seekTime;
            }), e(this, "increaseVolume", (e2) => {
              const t3 = this.media.muted ? 0 : this.volume;
              this.volume = t3 + ($(e2) ? e2 : 0);
            }), e(this, "decreaseVolume", (e2) => {
              this.increaseVolume(-e2);
            }), e(this, "airplay", () => {
              me.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e2) => {
              if (this.supported.ui && !this.isAudio) {
                const t3 = oe(this.elements.container, this.config.classNames.hideControls), i3 = e2 === void 0 ? void 0 : !e2, s3 = le(this.elements.container, this.config.classNames.hideControls, i3);
                if (s3 && q(this.config.controls) && this.config.controls.includes("settings") && !W(this.config.settings) && We.toggleMenu.call(this, false), s3 !== t3) {
                  const e3 = s3 ? "controlshidden" : "controlsshown";
                  ve.call(this, this.media, e3);
                }
                return !s3;
              }
              return false;
            }), e(this, "on", (e2, t3) => {
              fe.call(this, this.elements.container, e2, t3);
            }), e(this, "once", (e2, t3) => {
              ye.call(this, this.elements.container, e2, t3);
            }), e(this, "off", (e2, t3) => {
              be(this.elements.container, e2, t3);
            }), e(this, "destroy", (e2, t3 = false) => {
              if (!this.ready)
                return;
              const i3 = () => {
                document.body.style.overflow = "", this.embed = null, t3 ? (Object.keys(this.elements).length && (te(this.elements.buttons.play), te(this.elements.captions), te(this.elements.controls), te(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), j(e2) && e2()) : (we.call(this), Le.cancelRequests.call(this), se(this.elements.original, this.elements.container), ve.call(this, this.elements.original, "destroyed", true), j(e2) && e2.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (at.toggleNativeControls.call(this, true), i3()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), this.embed !== null && j(this.embed.destroy) && this.embed.destroy(), i3()) : this.isVimeo && (this.embed !== null && this.embed.unload().then(i3), setTimeout(i3, 200));
            }), e(this, "supports", (e2) => me.mime.call(this, e2)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = me.touch, this.media = t2, _(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || D(this.media) || q(this.media)) && (this.media = this.media[0]), this.config = X({}, Qe, wt.defaults, i2 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e2) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new it(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", me), I(this.media) || !H(this.media))
              return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr)
              return void this.debug.warn("Target already setup");
            if (!this.config.enabled)
              return void this.debug.error("Setup failed: disabled by config");
            if (!me.check().api)
              return void this.debug.error("Setup failed: no support");
            const s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            const n2 = this.media.tagName.toLowerCase();
            let a2 = null, l2 = null;
            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), H(a2)) {
                  if (l2 = ze(a2.getAttribute("src")), this.provider = function(e2) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? Ge.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? Ge.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    const e2 = ["1", "true"];
                    e2.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e2.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e2.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else
                  this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (W(this.provider) || !Object.values(Ge).includes(this.provider))
                  return void this.debug.error("Setup failed: Invalid provider");
                this.type = et;
                break;
              case "video":
              case "audio":
                this.type = n2, this.provider = Ge.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = me.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new lt(this), this.storage = new Fe(this), this.media.plyr = this, H(this.elements.container) || (this.elements.container = Z("div", { tabindex: 0 }), J(this.media, this.elements.container)), at.migrateStyles.call(this), at.addStyleHook.call(this), pt.setup.call(this), this.config.debug && fe.call(this, this.elements.container, this.config.events.join(" "), (e2) => {
              this.debug.log(`event: ${e2.type}`);
            }), this.fullscreen = new st(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && at.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new gt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ke(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === Ge.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === Ge.youtube;
          }
          get isVimeo() {
            return this.provider === Ge.vimeo;
          }
          get isVideo() {
            return this.type === et;
          }
          get isAudio() {
            return this.type === Ze;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && this.currentTime === 0);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e2) {
            if (!this.duration)
              return;
            const t2 = $(e2) && e2 > 0;
            this.media.currentTime = t2 ? Math.min(e2, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e2 } = this.media;
            return $(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e2 = parseFloat(this.config.duration), t2 = (this.media || {}).duration, i2 = $(t2) && t2 !== 1 / 0 ? t2 : 0;
            return e2 || i2;
          }
          set volume(e2) {
            let t2 = e2;
            _(t2) && (t2 = Number(t2)), $(t2) || (t2 = this.storage.get("volume")), $(t2) || ({ volume: t2 } = this.config), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !W(e2) && this.muted && t2 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e2) {
            let t2 = e2;
            O(t2) || (t2 = this.storage.get("muted")), O(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e2) {
            let t2 = null;
            $(e2) && (t2 = e2), $(t2) || (t2 = this.storage.get("speed")), $(t2) || (t2 = this.config.speed.selected);
            const { minimumSpeed: i2, maximumSpeed: s2 } = this;
            t2 = function(e3 = 0, t3 = 0, i3 = 255) {
              return Math.min(Math.max(e3, t3), i3);
            }(t2, i2, s2), this.config.speed.selected = t2, setTimeout(() => {
              this.media && (this.media.playbackRate = t2);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e2) {
            const t2 = this.config.quality, i2 = this.options.quality;
            if (!i2.length)
              return;
            let s2 = [!W(e2) && Number(e2), this.storage.get("quality"), t2.selected, t2.default].find($), n2 = true;
            if (!i2.includes(s2)) {
              const e3 = Ae(i2, s2);
              this.debug.warn(`Unsupported quality option: ${s2}, using ${e3} instead`), s2 = e3, n2 = false;
            }
            t2.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e2) {
            const t2 = O(e2) ? e2 : this.config.loop.active;
            this.config.loop.active = t2, this.media.loop = t2;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e2) {
            vt.change.call(this, e2);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e2 } = this.config.urls;
            return U(e2) ? e2 : this.source;
          }
          set download(e2) {
            U(e2) && (this.config.urls.download = e2, We.setDownloadUrl.call(this));
          }
          set poster(e2) {
            this.isVideo ? at.setPoster.call(this, e2, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo)
              return null;
            const e2 = Ne(xe.call(this));
            return q(e2) ? e2.join(":") : e2;
          }
          set ratio(e2) {
            this.isVideo ? _(e2) && Pe(e2) ? (this.config.ratio = Ne(e2), Me.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e2})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e2) {
            const t2 = O(e2) ? e2 : this.config.autoplay;
            this.config.autoplay = t2;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e2) {
            Ye.toggle.call(this, e2, false);
          }
          set currentTrack(e2) {
            Ye.set.call(this, e2, false), Ye.setup();
          }
          get currentTrack() {
            const { toggled: e2, currentTrack: t2 } = this.captions;
            return e2 ? t2 : -1;
          }
          set language(e2) {
            Ye.setLanguage.call(this, e2, false);
          }
          get language() {
            return (Ye.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e2) {
            if (!me.pip)
              return;
            const t2 = O(e2) ? e2 : !this.pip;
            j(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? Xe : Je), j(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
          }
          get pip() {
            return me.pip ? W(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Xe : null;
          }
          setPreviewThumbnails(e2) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e2), this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this));
          }
          static supported(e2, t2, i2) {
            return me.check(e2, t2, i2);
          }
          static loadSprite(e2, t2) {
            return Ve(e2, t2);
          }
          static setup(e2, t2 = {}) {
            let i2 = null;
            return _(e2) ? i2 = Array.from(document.querySelectorAll(e2)) : D(e2) ? i2 = Array.from(e2) : q(e2) && (i2 = e2.filter(H)), W(i2) ? null : i2.map((e3) => new wt(e3, t2));
          }
        }
        var Tt;
        return wt.defaults = (Tt = Qe, JSON.parse(JSON.stringify(Tt))), wt;
      });
    }
  });

  // node_modules/.pnpm/alpinejs@3.9.0/node_modules/alpinejs/dist/module.esm.js
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
  var __commonJS2 = (callback, module) => () => {
    if (!module) {
      module = { exports: {} };
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames2(module))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule2(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var require_shared_cjs = __commonJS2((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeMap(str, expectsLowerCase) {
      const map = /* @__PURE__ */ Object.create(null);
      const list = str.split(",");
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
    }
    var PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `HYDRATE_EVENTS`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`
    };
    var slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
    var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
    var range = 2;
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      const lines = source.split(/\r?\n/);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start2) {
          for (let j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length)
              continue;
            const line = j + 1;
            res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
            const lineLength = lines[j].length;
            if (j === i) {
              const pad = start2 - (count - lineLength) + 1;
              const length = Math.max(1, end > count ? lineLength - pad : end - start2);
              res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
            } else if (j > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1);
                res.push(`   |  ` + "^".repeat(length));
              }
              count += lineLength + 1;
            }
          }
          break;
        }
      }
      return res.join("\n");
    }
    var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }
      const isUnsafe = unsafeAttrCharRE.test(name);
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
      }
      return attrValidationCache[name] = !isUnsafe;
    }
    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
    var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isObject(value)) {
        return value;
      }
    }
    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:(.+)/;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function stringifyStyle(styles) {
      let ret = "";
      if (!styles) {
        return ret;
      }
      for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
          ret += `${normalizedKey}:${value};`;
        }
      }
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }
    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    var escapeRE = /["'&<>]/;
    function escapeHtml(string) {
      const str = "" + string;
      const match = escapeRE.exec(str);
      if (!match) {
        return str;
      }
      let html = "";
      let escaped;
      let index;
      let lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;
          case 38:
            escaped = "&amp;";
            break;
          case 39:
            escaped = "&#39;";
            break;
          case 60:
            escaped = "&lt;";
            break;
          case 62:
            escaped = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }
    function looseCompareArrays(a, b) {
      if (a.length !== b.length)
        return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
      return equal;
    }
    function looseEqual(a, b) {
      if (a === b)
        return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isArray(a);
      bValidType = isArray(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b);
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    var toDisplayString = (val) => {
      return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
    };
    var replacer = (_key, val) => {
      if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
            entries[`${key} =>`] = val2;
            return entries;
          }, {})
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()]
        };
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var babelParserDefaultPlugins = [
      "bigInt",
      "optionalChaining",
      "nullishCoalescingOperator"
    ];
    var EMPTY_OBJ = Object.freeze({});
    var EMPTY_ARR = Object.freeze([]);
    var NOOP = () => {
    };
    var NO = () => false;
    var onRE = /^on[^a-z]/;
    var isOn = (key) => onRE.test(key);
    var isModelListener = (key) => key.startsWith("onUpdate:");
    var extend = Object.assign;
    var remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = (val, key) => hasOwnProperty.call(val, key);
    var isArray = Array.isArray;
    var isMap = (val) => toTypeString(val) === "[object Map]";
    var isSet = (val) => toTypeString(val) === "[object Set]";
    var isDate = (val) => val instanceof Date;
    var isFunction = (val) => typeof val === "function";
    var isString = (val) => typeof val === "string";
    var isSymbol = (val) => typeof val === "symbol";
    var isObject = (val) => val !== null && typeof val === "object";
    var isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    };
    var objectToString = Object.prototype.toString;
    var toTypeString = (value) => objectToString.call(value);
    var toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    var isPlainObject = (val) => toTypeString(val) === "[object Object]";
    var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    var cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
    var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
    var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
    var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
    var invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    var def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
      });
    };
    var toNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    var _globalThis;
    var getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    exports.EMPTY_ARR = EMPTY_ARR;
    exports.EMPTY_OBJ = EMPTY_OBJ;
    exports.NO = NO;
    exports.NOOP = NOOP;
    exports.PatchFlagNames = PatchFlagNames;
    exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
    exports.camelize = camelize;
    exports.capitalize = capitalize;
    exports.def = def;
    exports.escapeHtml = escapeHtml;
    exports.escapeHtmlComment = escapeHtmlComment;
    exports.extend = extend;
    exports.generateCodeFrame = generateCodeFrame;
    exports.getGlobalThis = getGlobalThis;
    exports.hasChanged = hasChanged;
    exports.hasOwn = hasOwn;
    exports.hyphenate = hyphenate;
    exports.invokeArrayFns = invokeArrayFns;
    exports.isArray = isArray;
    exports.isBooleanAttr = isBooleanAttr2;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isGloballyWhitelisted = isGloballyWhitelisted;
    exports.isHTMLTag = isHTMLTag;
    exports.isIntegerKey = isIntegerKey;
    exports.isKnownAttr = isKnownAttr;
    exports.isMap = isMap;
    exports.isModelListener = isModelListener;
    exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
    exports.isObject = isObject;
    exports.isOn = isOn;
    exports.isPlainObject = isPlainObject;
    exports.isPromise = isPromise;
    exports.isReservedProp = isReservedProp;
    exports.isSSRSafeAttrName = isSSRSafeAttrName;
    exports.isSVGTag = isSVGTag;
    exports.isSet = isSet;
    exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isVoidTag = isVoidTag;
    exports.looseEqual = looseEqual;
    exports.looseIndexOf = looseIndexOf;
    exports.makeMap = makeMap;
    exports.normalizeClass = normalizeClass;
    exports.normalizeStyle = normalizeStyle;
    exports.objectToString = objectToString;
    exports.parseStringStyle = parseStringStyle;
    exports.propsToAttrMap = propsToAttrMap;
    exports.remove = remove;
    exports.slotFlagsText = slotFlagsText;
    exports.stringifyStyle = stringifyStyle;
    exports.toDisplayString = toDisplayString;
    exports.toHandlerKey = toHandlerKey;
    exports.toNumber = toNumber;
    exports.toRawType = toRawType;
    exports.toTypeString = toTypeString;
  });
  var require_shared = __commonJS2((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_shared_cjs();
    }
  });
  var require_reactivity_cjs = __commonJS2((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared = require_shared();
    var targetMap = /* @__PURE__ */ new WeakMap();
    var effectStack = [];
    var activeEffect;
    var ITERATE_KEY = Symbol("iterate");
    var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
    function isEffect(fn) {
      return fn && fn._isEffect === true;
    }
    function effect3(fn, options = shared.EMPTY_OBJ) {
      if (isEffect(fn)) {
        fn = fn.raw;
      }
      const effect4 = createReactiveEffect(fn, options);
      if (!options.lazy) {
        effect4();
      }
      return effect4;
    }
    function stop2(effect4) {
      if (effect4.active) {
        cleanup(effect4);
        if (effect4.options.onStop) {
          effect4.options.onStop();
        }
        effect4.active = false;
      }
    }
    var uid = 0;
    function createReactiveEffect(fn, options) {
      const effect4 = function reactiveEffect() {
        if (!effect4.active) {
          return fn();
        }
        if (!effectStack.includes(effect4)) {
          cleanup(effect4);
          try {
            enableTracking();
            effectStack.push(effect4);
            activeEffect = effect4;
            return fn();
          } finally {
            effectStack.pop();
            resetTracking();
            activeEffect = effectStack[effectStack.length - 1];
          }
        }
      };
      effect4.id = uid++;
      effect4.allowRecurse = !!options.allowRecurse;
      effect4._isEffect = true;
      effect4.active = true;
      effect4.raw = fn;
      effect4.deps = [];
      effect4.options = options;
      return effect4;
    }
    function cleanup(effect4) {
      const { deps } = effect4;
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect4);
        }
        deps.length = 0;
      }
    }
    var shouldTrack = true;
    var trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return;
      }
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = /* @__PURE__ */ new Set());
      }
      if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
          });
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      const effects = /* @__PURE__ */ new Set();
      const add2 = (effectsToAdd) => {
        if (effectsToAdd) {
          effectsToAdd.forEach((effect4) => {
            if (effect4 !== activeEffect || effect4.allowRecurse) {
              effects.add(effect4);
            }
          });
        }
      };
      if (type === "clear") {
        depsMap.forEach(add2);
      } else if (key === "length" && shared.isArray(target)) {
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 >= newValue) {
            add2(dep);
          }
        });
      } else {
        if (key !== void 0) {
          add2(depsMap.get(key));
        }
        switch (type) {
          case "add":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (shared.isIntegerKey(key)) {
              add2(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (shared.isMap(target)) {
              add2(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      const run = (effect4) => {
        if (effect4.options.onTrigger) {
          effect4.options.onTrigger({
            effect: effect4,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
          });
        }
        if (effect4.options.scheduler) {
          effect4.options.scheduler(effect4);
        } else {
          effect4();
        }
      };
      effects.forEach(run);
    }
    var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
    var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
    var get2 = /* @__PURE__ */ createGetter();
    var shallowGet = /* @__PURE__ */ createGetter(false, true);
    var readonlyGet = /* @__PURE__ */ createGetter(true);
    var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
    var arrayInstrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      const method = Array.prototype[key];
      arrayInstrumentations[key] = function(...args) {
        const arr = toRaw2(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
          return method.apply(arr, args.map(toRaw2));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      const method = Array.prototype[key];
      arrayInstrumentations[key] = function(...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
      };
    });
    function createGetter(isReadonly2 = false, shallow = false) {
      return function get3(target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target;
        }
        const targetIsArray = shared.isArray(target);
        if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
          return shouldUnwrap ? res.value : res;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive3(res);
        }
        return res;
      };
    }
    var set2 = /* @__PURE__ */ createSetter();
    var shallowSet = /* @__PURE__ */ createSetter(true);
    function createSetter(shallow = false) {
      return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
          value = toRaw2(value);
          oldValue = toRaw2(oldValue);
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw2(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
        }
        return result;
      };
    }
    function deleteProperty(target, key) {
      const hadKey = shared.hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function has(target, key) {
      const result = Reflect.has(target, key);
      if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    function ownKeys(target) {
      track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }
    var mutableHandlers = {
      get: get2,
      set: set2,
      deleteProperty,
      has,
      ownKeys
    };
    var readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
        {
          console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      },
      deleteProperty(target, key) {
        {
          console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      }
    };
    var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
    });
    var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
      get: shallowReadonlyGet
    });
    var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
    var toShallow = (value) => value;
    var getProto = (v) => Reflect.getPrototypeOf(v);
    function get$1(target, key, isReadonly2 = false, isShallow = false) {
      target = target["__v_raw"];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "get", key);
      }
      !isReadonly2 && track(rawTarget, "get", rawKey);
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }
    function has$1(key, isReadonly2 = false) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "has", key);
      }
      !isReadonly2 && track(rawTarget, "has", rawKey);
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }
    function size(target, isReadonly2 = false) {
      target = target["__v_raw"];
      !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }
    function add(value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    }
    function set$1(key, value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    }
    function deleteEntry(key) {
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3 ? get3.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function clear() {
      const target = toRaw2(this);
      const hadItems = target.size !== 0;
      const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
    function createForEach(isReadonly2, isShallow) {
      return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw2(target);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }
    function createIterableMethod(method, isReadonly2, isShallow) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw2(target);
        const targetIsMap = shared.isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ``;
          console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
        }
        return type === "delete" ? false : this;
      };
    }
    var mutableInstrumentations = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    var shallowInstrumentations = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    var readonlyInstrumentations = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    var shallowReadonlyInstrumentations = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations[method] = createIterableMethod(method, true, false);
      shallowInstrumentations[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
      };
    }
    var mutableCollectionHandlers = {
      get: createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, true)
    };
    function checkIdentityKeys(target, has2, key) {
      const rawKey = toRaw2(key);
      if (rawKey !== key && has2.call(target, rawKey)) {
        const type = shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
      }
    }
    var reactiveMap = /* @__PURE__ */ new WeakMap();
    var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    var readonlyMap = /* @__PURE__ */ new WeakMap();
    var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }
    function reactive3(target) {
      if (target && target["__v_isReadonly"]) {
        return target;
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }
    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }
    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }
    function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive2(value) {
      if (isReadonly(value)) {
        return isReactive2(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    function isProxy(value) {
      return isReactive2(value) || isReadonly(value);
    }
    function toRaw2(observed) {
      return observed && toRaw2(observed["__v_raw"]) || observed;
    }
    function markRaw(value) {
      shared.def(value, "__v_skip", true);
      return value;
    }
    var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
    function isRef(r) {
      return Boolean(r && r.__v_isRef === true);
    }
    function ref(value) {
      return createRef(value);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    var RefImpl = class {
      constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
      }
      get value() {
        track(toRaw2(this), "get", "value");
        return this._value;
      }
      set value(newVal) {
        if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
          this._rawValue = newVal;
          this._value = this._shallow ? newVal : convert(newVal);
          trigger(toRaw2(this), "set", "value", newVal);
        }
      }
    };
    function createRef(rawValue, shallow = false) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    function triggerRef(ref2) {
      trigger(toRaw2(ref2), "set", "value", ref2.value);
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var CustomRefImpl = class {
      constructor(factory) {
        this.__v_isRef = true;
        const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
        this._get = get3;
        this._set = set3;
      }
      get value() {
        return this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    };
    function customRef(factory) {
      return new CustomRefImpl(factory);
    }
    function toRefs(object) {
      if (!isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = toRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
      }
      get value() {
        return this._object[this._key];
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
    };
    function toRef(object, key) {
      return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
    }
    var ComputedRefImpl = class {
      constructor(getter, _setter, isReadonly2) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect3(getter, {
          lazy: true,
          scheduler: () => {
            if (!this._dirty) {
              this._dirty = true;
              trigger(toRaw2(this), "set", "value");
            }
          }
        });
        this["__v_isReadonly"] = isReadonly2;
      }
      get value() {
        const self2 = toRaw2(this);
        if (self2._dirty) {
          self2._value = this.effect();
          self2._dirty = false;
        }
        track(self2, "get", "value");
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
    };
    function computed(getterOrOptions) {
      let getter;
      let setter;
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;
        setter = () => {
          console.warn("Write operation failed: computed value is readonly");
        };
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
    }
    exports.ITERATE_KEY = ITERATE_KEY;
    exports.computed = computed;
    exports.customRef = customRef;
    exports.effect = effect3;
    exports.enableTracking = enableTracking;
    exports.isProxy = isProxy;
    exports.isReactive = isReactive2;
    exports.isReadonly = isReadonly;
    exports.isRef = isRef;
    exports.markRaw = markRaw;
    exports.pauseTracking = pauseTracking;
    exports.proxyRefs = proxyRefs;
    exports.reactive = reactive3;
    exports.readonly = readonly;
    exports.ref = ref;
    exports.resetTracking = resetTracking;
    exports.shallowReactive = shallowReactive;
    exports.shallowReadonly = shallowReadonly;
    exports.shallowRef = shallowRef;
    exports.stop = stop2;
    exports.toRaw = toRaw2;
    exports.toRef = toRef;
    exports.toRefs = toRefs;
    exports.track = track;
    exports.trigger = trigger;
    exports.triggerRef = triggerRef;
    exports.unref = unref;
  });
  var require_reactivity = __commonJS2((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_reactivity_cjs();
    }
  });
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    const index = queue.indexOf(job);
    if (index !== -1) {
      queue.splice(index, 1);
    }
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
    };
    return [wrappedEffect, () => {
      cleanup();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(callback) {
    onElRemoveds.push(callback);
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add();
        } else if (el.hasAttribute(name)) {
          remove();
          add();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, __spreadProps(__spreadValues({}, property), {
                get: getter,
                set: setter
              }));
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, { Alpine: alpine_default, interceptor });
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let cleanups = [];
    let cleanup = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    onAttributeRemoved(el, directive2.original, doCleanup);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = doCleanup;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport",
    "element"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback) {
    tickStack.push(callback);
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    let clickAwayCompatibleShow = () => {
      document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        queueMicrotask(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    if (attr === "")
      return true;
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, object) {
    binds[name] = typeof object !== "function" ? () => object : object;
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.9.0",
    flushAndStopDeferringMutations,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  var import_reactivity9 = __toModule(require_reactivity());
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el) => (key, callback) => {
    let evaluate2 = evaluateLater(el, key);
    let firstTime = true;
    let oldValue;
    effect(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  directive("modelable", (el, { expression }, { effect: effect3, evaluate: evaluate2, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    if (el._x_modelable_hook)
      initialValue = el._x_modelable_hook(initialValue);
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el, { expression }, { cleanup }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.target === el && next(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e) => {
        if (el.contains(e.target))
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    handler3 = wrapHandler(handler3, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      } });
    });
    cleanup(() => removeListener());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate(el, expression, {}, false);
    }
    return evaluate(el, expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        el.innerHTML = value;
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      return applyBindingsObject(el, expression, original, effect3);
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && expression.match(/\./))
        result = "";
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function applyBindingsObject(el, expression, original, effect3) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    }, { scope: bindingProviders });
  }
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup(() => {
      undo();
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let hide = () => mutateDom(() => {
      el.style.display = "none";
      el._x_isShown = false;
    });
    let show = () => mutateDom(() => {
      if (el.style.length === 1 && el.style.display === "none") {
        el.removeAttribute("style");
      } else {
        el.style.removeProperty("display");
      }
      el._x_isShown = true;
    });
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: __spreadValues({ index: key }, scope2) });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: __spreadValues({ index: i }, scope2) });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { $event: e }, params: [e] });
    });
    cleanup(() => removeListener());
  }));
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // DistributionPackages/465M.Site/Resources/Private/Fusion/Component/Atom/Button/Button.js
  var Button_exports = {};
  __export(Button_exports, {
    buttonData: () => buttonData
  });
  var buttonData = () => ({
    foo: () => console.log("foo")
  });

  // DistributionPackages/465M.Site/Resources/Private/Fusion/Alpine.js
  var AlpineData = [
    Button_exports
  ];
  AlpineData.map((component) => {
    Object.entries(component).map(([key, value]) => {
      module_default.data(key, value);
    });
  });
  module_default.start();

  // DistributionPackages/465M.Site/Resources/Private/Fusion/Component/Atom/Video/Video.js
  var import_plyr = __toESM(require_plyr_min());
  var videoPlayers = document.querySelectorAll(".js_video-player");
  videoPlayers.forEach((player) => {
    return new import_plyr.default(player, {
      youtube: {
        noCookie: true
      }
    });
  });
})();
//# sourceMappingURL=Main.js.map
