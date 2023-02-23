var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {
    data() {
      return {
        title: "\u6B22\u8FCE\u4F7F\u7528"
      };
    },
    onLoad() {
      uni.hideTabBar();
    },
    methods: {
      qqLogin() {
        formatAppLog("info", "at pages/index/index.vue:34", "\u5F00\u59CB\u8DF3\u8F6C");
        this.loading("\u767B\u5F55\u4E2D...", 2e3);
        uni.getProvider({
          service: "oauth",
          success: function(res) {
            formatAppLog("info", "at pages/index/index.vue:39", "\u83B7\u53D6\u53EF\u7528\u670D\u52A1\u63D0\u4F9B\u5546=" + res.provider);
            if (res.provider.indexOf("qq") > -1) {
              formatAppLog("info", "at pages/index/index.vue:41", "\u5F00\u59CB\u5C1D\u8BD5qq\u767B\u5F55");
              uni.login({
                provider: "qq",
                success: (lres) => {
                  uni.getUserInfo({
                    provider: "qq",
                    success: (userRes) => {
                      let openId = userRes.userInfo.openId;
                      formatAppLog("info", "at pages/index/index.vue:51", "qq\u767B\u5F55\u6210\u529F==openId===" + openId);
                      uni.hideLoading();
                      uni.switchTab({
                        url: "/pages/list/list"
                      });
                    }
                  });
                },
                fail(lres) {
                  formatAppLog("info", "at pages/index/index.vue:61", "\u5F00\u59CB\u5C1D\u8BD5qq\u767B\u5F55\u5931\u8D25=", err);
                }
              });
            }
          },
          fail(err2) {
            formatAppLog("info", "at pages/index/index.vue:67", "\u83B7\u53D6\u53EF\u7528\u670D\u52A1\u63D0\u4F9B\u5546\u5931\u8D25=", err2);
          }
        });
      },
      login: function() {
        formatAppLog("info", "at pages/index/index.vue:73", "\u5F00\u59CB\u6D4B\u8BD5\u4E00\u952E\u767B\u5F55,\u5148\u542F\u52A8\u9884\u52A0\u8F7D");
        this.loading("\u767B\u5F55\u4E2D...", 2e3);
        uni.preLogin({
          provider: "univerify",
          success(res) {
            formatAppLog("info", "at pages/index/index.vue:78", "\u9884\u52A0\u8F7D\u6210\u529F=", res);
          },
          fail(err2) {
            formatAppLog("info", "at pages/index/index.vue:81", "\u9884\u52A0\u8F7D\u5931\u8D25=", err2);
            uni.switchTab({
              url: "/pages/list/list"
            });
          }
        });
        uni.login({
          provider: "univerify"
        });
      },
      loading: function(content, time) {
        uni.showLoading({
          title: content
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.switchTab({
            url: "/pages/list/list"
          });
        }, time);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.title), 1)
      ]),
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.qqLogin && $options.qqLogin(...args))
      }, "qq\u4E00\u952E\u767B\u5F55"),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.login && $options.login(...args))
      }, "\u624B\u673A\u4E00\u952E\u767B\u5F55")
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/pages/index/index.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages] = [
        messages,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "uni-app"
      }
    },
    {
      path: "pages/list/list",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/root/root",
      style: {
        navigationBarTitleText: "\u516D\u723B\u9884\u6D4B",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/about/about",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/Login/Login",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const tabBar = {
    color: "#8a8a8a",
    selectedColor: "#0857f9",
    list: [
      {
        pagePath: "pages/root/root",
        iconPath: "static/tabicon/home_default.png",
        selectedIconPath: "static/tabicon/home_foucs.png",
        text: "\u9996\u9875"
      },
      {
        pagePath: "pages/list/list",
        iconPath: "static/tabicon/list_default.png",
        selectedIconPath: "static/tabicon/list_foucs.png",
        text: "\u5217\u8868"
      },
      {
        pagePath: "pages/about/about",
        iconPath: "static/tabicon/my_default.png",
        selectedIconPath: "static/tabicon/my_foucs.png",
        text: "\u6211\u7684"
      }
    ]
  };
  const uniIdRouter = {};
  var t = {
    pages,
    globalStyle,
    tabBar,
    uniIdRouter
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var o = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, o2 = s2.lib = {}, r2 = o2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = o2.WordArray = r2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, o3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var r3 = 0; r3 < o3; r3++) {
            var i3 = n4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            t4[s3 + r3 >>> 2] |= i3 << 24 - (s3 + r3) % 4 * 8;
          }
        else
          for (r3 = 0; r3 < o3; r3 += 4)
            t4[s3 + r3 >>> 2] = n4[r3 >>> 2];
        return this.sigBytes += o3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], o3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var o4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return o4 /= 4294967296, (o4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, r3 = 0; r3 < t4; r3 += 4) {
          var a3 = o3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push((r3 >>> 4).toString(16)), s3.push((15 & r3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(r3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = o2.BufferedBlockAlgorithm = r2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, o3 = n4.sigBytes, r3 = this.blockSize, a3 = o3 / (4 * r3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * r3, u3 = e2.min(4 * c3, o3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += r3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(h3, u3);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      o2.Hasher = h2.extend({ cfg: r2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = o, function(e2) {
      var t3 = n2, s2 = t3.lib, o2 = s2.WordArray, r2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = r2.extend({ _doReset: function() {
        this._hash = new o2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, o3 = e3[s3];
          e3[s3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
        }
        var r3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], g2 = e3[t4 + 3], p2 = e3[t4 + 4], m2 = e3[t4 + 5], y = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], T2 = e3[t4 + 11], S2 = e3[t4 + 12], P2 = e3[t4 + 13], A2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = r3[0], O2 = r3[1], C2 = r3[2], E2 = r3[3];
        b2 = u2(b2, O2, C2, E2, i3, 7, a2[0]), E2 = u2(E2, b2, O2, C2, c3, 12, a2[1]), C2 = u2(C2, E2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, C2, E2, b2, g2, 22, a2[3]), b2 = u2(b2, O2, C2, E2, p2, 7, a2[4]), E2 = u2(E2, b2, O2, C2, m2, 12, a2[5]), C2 = u2(C2, E2, b2, O2, y, 17, a2[6]), O2 = u2(O2, C2, E2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, C2, E2, w2, 7, a2[8]), E2 = u2(E2, b2, O2, C2, k2, 12, a2[9]), C2 = u2(C2, E2, b2, O2, v2, 17, a2[10]), O2 = u2(O2, C2, E2, b2, T2, 22, a2[11]), b2 = u2(b2, O2, C2, E2, S2, 7, a2[12]), E2 = u2(E2, b2, O2, C2, P2, 12, a2[13]), C2 = u2(C2, E2, b2, O2, A2, 17, a2[14]), b2 = l2(b2, O2 = u2(O2, C2, E2, b2, I2, 22, a2[15]), C2, E2, c3, 5, a2[16]), E2 = l2(E2, b2, O2, C2, y, 9, a2[17]), C2 = l2(C2, E2, b2, O2, T2, 14, a2[18]), O2 = l2(O2, C2, E2, b2, i3, 20, a2[19]), b2 = l2(b2, O2, C2, E2, m2, 5, a2[20]), E2 = l2(E2, b2, O2, C2, v2, 9, a2[21]), C2 = l2(C2, E2, b2, O2, I2, 14, a2[22]), O2 = l2(O2, C2, E2, b2, p2, 20, a2[23]), b2 = l2(b2, O2, C2, E2, k2, 5, a2[24]), E2 = l2(E2, b2, O2, C2, A2, 9, a2[25]), C2 = l2(C2, E2, b2, O2, g2, 14, a2[26]), O2 = l2(O2, C2, E2, b2, w2, 20, a2[27]), b2 = l2(b2, O2, C2, E2, P2, 5, a2[28]), E2 = l2(E2, b2, O2, C2, f2, 9, a2[29]), C2 = l2(C2, E2, b2, O2, _2, 14, a2[30]), b2 = h2(b2, O2 = l2(O2, C2, E2, b2, S2, 20, a2[31]), C2, E2, m2, 4, a2[32]), E2 = h2(E2, b2, O2, C2, w2, 11, a2[33]), C2 = h2(C2, E2, b2, O2, T2, 16, a2[34]), O2 = h2(O2, C2, E2, b2, A2, 23, a2[35]), b2 = h2(b2, O2, C2, E2, c3, 4, a2[36]), E2 = h2(E2, b2, O2, C2, p2, 11, a2[37]), C2 = h2(C2, E2, b2, O2, _2, 16, a2[38]), O2 = h2(O2, C2, E2, b2, v2, 23, a2[39]), b2 = h2(b2, O2, C2, E2, P2, 4, a2[40]), E2 = h2(E2, b2, O2, C2, i3, 11, a2[41]), C2 = h2(C2, E2, b2, O2, g2, 16, a2[42]), O2 = h2(O2, C2, E2, b2, y, 23, a2[43]), b2 = h2(b2, O2, C2, E2, k2, 4, a2[44]), E2 = h2(E2, b2, O2, C2, S2, 11, a2[45]), C2 = h2(C2, E2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = h2(O2, C2, E2, b2, f2, 23, a2[47]), C2, E2, i3, 6, a2[48]), E2 = d2(E2, b2, O2, C2, _2, 10, a2[49]), C2 = d2(C2, E2, b2, O2, A2, 15, a2[50]), O2 = d2(O2, C2, E2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, C2, E2, S2, 6, a2[52]), E2 = d2(E2, b2, O2, C2, g2, 10, a2[53]), C2 = d2(C2, E2, b2, O2, v2, 15, a2[54]), O2 = d2(O2, C2, E2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, C2, E2, w2, 6, a2[56]), E2 = d2(E2, b2, O2, C2, I2, 10, a2[57]), C2 = d2(C2, E2, b2, O2, y, 15, a2[58]), O2 = d2(O2, C2, E2, b2, P2, 21, a2[59]), b2 = d2(b2, O2, C2, E2, p2, 6, a2[60]), E2 = d2(E2, b2, O2, C2, T2, 10, a2[61]), C2 = d2(C2, E2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, C2, E2, b2, k2, 21, a2[63]), r3[0] = r3[0] + b2 | 0, r3[1] = r3[1] + O2 | 0, r3[2] = r3[2] + C2 | 0, r3[3] = r3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, o3 = 8 * t4.sigBytes;
        n3[o3 >>> 5] |= 128 << 24 - o3 % 32;
        var r3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (o3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), n3[14 + (o3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function l2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function h2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function d2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      t3.MD5 = r2._createHelper(c2), t3.HmacMD5 = r2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2, s2, r2;
    e.exports = (s2 = (n2 = o).lib.Base, r2 = n2.enc.Utf8, void (n2.algo.HMAC = s2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = r2.parse(t3));
      var n3 = e2.blockSize, s3 = 4 * n3;
      t3.sigBytes > s3 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var o2 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = o2.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      o2.sigBytes = i2.sigBytes = s3, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), s(function(e, t2) {
    e.exports = o.HmacMD5;
  }));
  const i = "FUNCTION", a = "OBJECT", c = "CLIENT_DB";
  function u(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function l(e) {
    return u(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const d = true, f = "app";
  let g;
  switch (f) {
    case "h5":
      g = "web";
      break;
    case "app-plus":
      g = "app";
      break;
    default:
      g = f;
  }
  const p = h({}.UNICLOUD_DEBUG), m = h("[]") || [];
  let _ = "";
  try {
    _ = "__UNI__D0C0B0E";
  } catch (e) {
  }
  let w = {};
  function k(e, t2 = {}) {
    var n2, s2;
    return n2 = w, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (w[e] = t2), w[e];
  }
  g === "app" && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const v = ["invoke", "success", "fail", "complete"], T = k("_globalUniCloudInterceptor");
  function S(e, t2) {
    T[e] || (T[e] = {}), l(t2) && Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = T[e2][t3];
        s2 || (s2 = T[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function P(e, t2) {
    T[e] || (T[e] = {}), l(t2) ? Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = T[e2][t3];
        if (!s2)
          return;
        const o2 = s2.indexOf(n3);
        o2 > -1 && s2.splice(o2, 1);
      }(e, n2, t2[n2]);
    }) : delete T[e];
  }
  function A(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function I(e, t2) {
    return T[e] && T[e][t2] || [];
  }
  function b(e) {
    S("callObject", e);
  }
  const O = k("_globalUniCloudListener"), C = "response", E = "needLogin", R = "refreshToken", U = "clientdb", x = "cloudfunction", L = "cloudobject";
  function D(e) {
    return O[e] || (O[e] = []), O[e];
  }
  function N(e, t2) {
    const n2 = D(e);
    n2.includes(t2) || n2.push(t2);
  }
  function q(e, t2) {
    const n2 = D(e), s2 = n2.indexOf(t2);
    s2 !== -1 && n2.splice(s2, 1);
  }
  function F(e, t2) {
    const n2 = D(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let M = false;
  const j = new Promise((e) => {
    M && e(), function t2() {
      if (typeof getCurrentPages == "function") {
        const t3 = getCurrentPages();
        t3 && t3[0] && (M = true, e());
      }
      M || setTimeout(() => {
        t2();
      }, 30);
    }();
  });
  function $() {
    return j;
  }
  function K(e, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if (t2 === "callFunction") {
        const e2 = n2 && n2.type || i;
        s2 = e2 !== i;
      }
      const o2 = t2 === "callFunction" && !s2;
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const a2 = r2.then(() => s2 ? Promise.resolve() : A(I(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : A(I(t2, "success"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (o2 && F(C, { type: x, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : A(I(t2, "fail"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (F(C, { type: x, content: e2 }), Promise.reject(e2))));
      if (!(n2.success || n2.fail || n2.complete))
        return a2;
      a2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      }, (e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class B extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code || "SYSTEM_ERROR", this.requestId = e.requestId;
    }
  }
  function H() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  let W;
  function z() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (W)
      return __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
    const t2 = uni.getSystemInfoSync(), { deviceId: n2, osName: s2, uniPlatform: o2, appId: r2 } = t2, i2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < i2.length; e2++) {
      delete t2[i2[e2]];
    }
    return W = __spreadValues(__spreadValues({ PLATFORM: o2, OS: s2, APPID: r2, DEVICEID: n2 }, H()), t2), __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
  }
  var J = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), g === "web" && e2.errMsg && e2.errMsg.indexOf("request:fail") === 0 && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new B({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const o2 = e2.data;
        if (o2.error)
          return s2(new B({ code: o2.error.code, message: o2.error.message, requestId: t3 }));
        o2.result = o2.data, o2.requestId = t3, delete o2.data, n2(o2);
      } }));
    });
  } };
  var V = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() }, Y = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: X } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: Y, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: Y }, "zh-Hans");
  var G = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(X("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = V, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return J.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = J.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new B({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: o2 }) {
      if (u(t2) !== "string")
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const r2 = o2 && o2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: r2, filename: t2 }).then((t3) => {
        const o3 = t3.result;
        i2 = o3.id, a2 = "https://" + o3.cdnDomain + "/" + o3.ossPath;
        const r3 = { url: "https://" + o3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o3.accessKeyId, Signature: o3.signature, host: o3.host, id: i2, key: o3.ossPath, policy: o3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, r3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new B({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var Q = { init(e) {
    const t2 = new G(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const Z = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var ee;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(ee || (ee = {}));
  var te = function() {
  };
  const ne = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new B({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function se(e) {
    return e === void 0;
  }
  function oe(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var re;
  function ie(e) {
    const t2 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(re || (re = {}));
  const ae = { adapter: null, runtime: void 0 }, ce = ["anonymousUuidKey"];
  class ue extends te {
    constructor() {
      super(), ae.adapter.root.tcbObject || (ae.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      ae.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return ae.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete ae.adapter.root.tcbObject[e];
    }
    clear() {
      delete ae.adapter.root.tcbObject;
    }
  }
  function le(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new ue();
      case "none":
        return new ue();
      default:
        return t2.sessionStorage || new ue();
    }
  }
  class he {
    constructor(e) {
      if (!this._storage) {
        this._persistence = ae.adapter.primaryStorage || e.persistence, this._storage = le(this._persistence, ae.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, o2 = `anonymous_uuid_${e.env}`, r2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: o2, loginTypeKey: r2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const n2 = le(e, ae.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && ce.includes(e2))
          continue;
        const o2 = this._storage.getItem(s2);
        se(o2) || oe(o2) || (n2.setItem(s2, o2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, o2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, o2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const de = {}, fe = {};
  function ge(e) {
    return de[e];
  }
  class pe {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class me extends pe {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const ye = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof me)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new pe(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function _e(e, t2) {
    ye.on(e, t2);
  }
  function we(e, t2 = {}) {
    ye.fire(e, t2);
  }
  function ke(e, t2) {
    ye.off(e, t2);
  }
  const ve = "loginStateChanged", Te = "loginStateExpire", Se = "loginTypeChanged", Pe = "anonymousConverted", Ae = "refreshAccessToken";
  var Ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Ie || (Ie = {}));
  const be = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Oe = { "X-SDK-Version": "1.3.5" };
  function Ce(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const o2 = {}, r2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(o2, s3), Object.assign(r2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), o2);
        else
          for (const e3 in o2)
            i2.append(e3, o2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), r2), s2.call(e, t3);
    };
  }
  function Ee() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, Oe), { "x-seqid": e }) };
  }
  class Re {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = ge(this.config.env), this._localCache = (t2 = this.config.env, fe[t2]), Ce(this._reqClass, "post", [Ee]), Ce(this._reqClass, "upload", [Ee]), Ce(this._reqClass, "download", [Ee]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: o2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let r2 = this._cache.getStore(n2);
      if (!r2)
        throw new B({ message: "\u672A\u767B\u5F55CloudBase" });
      const i2 = { refresh_token: r2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === Ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(o2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          we(Te), this._cache.removeStore(n2);
        }
        throw new B({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return we(Ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new B({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e), o2 = this._cache.getStore(t2), r2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, o2) && (r2 = false), (!s2 || !o2 || o2 < Date.now()) && r2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: o2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let o2 = "application/x-www-form-urlencoded";
      const r2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (be.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (r2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, r2[e2]);
        o2 = "multipart/form-data";
      } else {
        o2 = "application/json", i2 = {};
        for (let e2 in r2)
          r2[e2] !== void 0 && (i2[e2] = r2[e2]);
      }
      let a2 = { headers: { "content-type": o2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let o3 = "";
        for (let e3 in n3)
          o3 === "" ? !s3 && (t3 += "?") : o3 += "&", o3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += o3) ? t3 : `${e2}${t3}`;
      }(Z, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const g2 = await this.post(__spreadValues({ url: f2, data: i2 }, a2)), p2 = g2.header && g2.header["x-tcb-trace"];
      if (p2 && this._localCache.setStore(s2, p2), Number(g2.status) !== 200 && Number(g2.statusCode) !== 200 || !g2.data)
        throw new B({ code: "NETWORK_ERROR", message: "network request error" });
      return g2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && be.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new B({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new B({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Ue = {};
  function xe(e) {
    return Ue[e];
  }
  class Le {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class De {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = ge(this._envId), this._request = xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class Ne {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = ge(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, o2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: o2, accessToken: r2, accessTokenExpire: i2 }, this.user = new De(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ie.WECHAT || this.loginType === Ie.WECHAT_OPEN || this.loginType === Ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class qe extends Le {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, o2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (o2.uuid && o2.refresh_token) {
        this._setAnonymousUUID(o2.uuid), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.ANONYMOUS, persistence: "local" });
        const e2 = new Ne(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new B({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), r2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: o2, ticket: e });
      if (r2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), we(Pe, { env: this.config.env }), we(Se, { loginType: Ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: r2.refresh_token } };
      throw new B({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, Ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Fe extends Le {
    async signIn(e) {
      if (typeof e != "string")
        throw new B({ param: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ne(this.config.env);
      throw new B({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class Me extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token: r2, access_token_expire: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), r2 && i2 ? this.setAccessToken(r2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.EMAIL, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class je extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Ie.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token_expire: r2, access_token: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), i2 && r2 ? this.setAccessToken(i2, r2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.USERNAME, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class $e {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), _e(Se, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new qe(this.config);
    }
    customAuthProvider() {
      return new Fe(this.config);
    }
    emailAuthProvider() {
      return new Me(this.config);
    }
    usernameAuthProvider() {
      return new je(this.config);
    }
    async signInAnonymously() {
      return new qe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new Me(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new je(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new qe(this.config)), _e(Pe, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === Ie.ANONYMOUS)
        throw new B({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const o2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), we(ve), we(Se, { env: this.config.env, loginType: Ie.NULL, persistence: this.config.persistence }), o2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      _e(ve, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      _e(Te, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      _e(Ae, e.bind(this));
    }
    onAnonymousConverted(e) {
      _e(Pe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      _e(Se, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ne(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new Fe(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Ke = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2, filePath: o2, onUploadProgress: r2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: o2, name: s2, fileType: i2, onUploadProgress: r2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: l2, requestId: d2 }) : t2(new B({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Be = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, He = function({ fileList: e }, t2) {
    if (t2 = t2 || ne(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return xe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, We = function({ fileList: e }, t2) {
    t2 = t2 || ne(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ze = async function({ fileID: e }, t2) {
    const n2 = (await We.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = xe(this.config.env);
    let o2 = n2.download_url;
    if (o2 = encodeURI(o2), !t2)
      return s2.download({ url: o2 });
    t2(await s2.download({ url: o2 }));
  }, Je = function({ name: e, data: t2, query: n2, parse: s2, search: o2 }, r2) {
    const i2 = r2 || ne();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new B({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: o2, function_name: e, request_data: a2 };
    return xe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new B({ message: "response data must be json" }));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, Ve = { timeout: 15e3, persistence: "session" }, Ye = {};
  class Xe {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (ae.adapter || (this.requestClient = new ae.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ve), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Xe(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || ae.adapter.primaryStorage || Ve.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        de[t3] = new he(e2), fe[t3] = new he(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, Ue[n2.env] = new Re(n2), this.authObj = new $e(this.config), this.authObj;
    }
    on(e, t2) {
      return _e.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ke.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return Je.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return He.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return We.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ze.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return Ke.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Be.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Ye[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = Ye[e];
      if (!n2)
        throw new B({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ie(e) || {};
      t2 && (ae.adapter = t2), n2 && (ae.runtime = n2);
    }
  }
  var Ge = new Xe();
  function Qe(e, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), o2 = "";
    for (var r2 in n2)
      o2 === "" ? !s2 && (t2 += "?") : o2 += "&", o2 += r2 + "=" + encodeURIComponent(n2[r2]);
    return /^http(s)?:\/\//.test(t2 += o2) ? t2 : "" + e + t2;
  }
  class Ze {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, o2) => {
        V.request({ url: Qe("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          o2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: o2, data: r2, headers: i2, fileType: a2 } = e, c2 = V.uploadFile({ url: Qe("https:", s2), name: "file", formData: Object.assign({}, r2), filePath: o2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && r2.success_action_status && (n3.statusCode = parseInt(r2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const et = { setItem(e, t2) {
    V.setStorageSync(e, t2);
  }, getItem: (e) => V.getStorageSync(e), removeItem(e) {
    V.removeStorageSync(e);
  }, clear() {
    V.clearStorageSync();
  } };
  var tt = { genAdapter: function() {
    return { root: {}, reqClass: Ze, localStorage: et, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ge.useAdapters(tt);
  const nt = Ge, st = nt.init;
  nt.init = function(e) {
    e.env = e.spaceId;
    const t2 = st.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = K(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var ot = nt;
  function rt(e) {
    return e && rt(e.__v_raw) || e;
  }
  function it() {
    return { token: V.getStorageSync("uni_id_token") || V.getStorageSync("uniIdToken"), tokenExpired: V.getStorageSync("uni_id_token_expired") };
  }
  function at({ token: e, tokenExpired: t2 } = {}) {
    e && V.setStorageSync("uni_id_token", e), t2 && V.setStorageSync("uni_id_token_expired", t2);
  }
  function ct() {
    if (g !== "web")
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), V.removeStorageSync("uni_id_token"), V.removeStorageSync("uniIdToken"), V.removeStorageSync("uni_id_token_expired"));
  }
  var ut = class extends G {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret);
      const o2 = z();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(o2));
      const { token: r2 } = it();
      return s2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let o2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: r2, formData: i2, name: a2 } = t3.result;
        o2 = t3.result.fileUrl;
        const c2 = { url: r2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: o2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var lt = { init(e) {
    const t2 = new ut(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function ht({ data: e }) {
    let t2;
    t2 = z();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = it();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function dt({ name: e, data: t2 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, o2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      V.request({ method: "POST", url: i2, data: { name: e, platform: g, provider: o2, spaceId: r2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = ht.call(this, { data: t2 });
        V.request({ method: "POST", url: a2, data: { provider: o2, platform: g, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new B({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new B({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ft = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var gt = /[\\^$.*+?()[\]{}|]/g, pt = RegExp(gt.source);
  function mt(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && pt.test(s2) ? s2.replace(gt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function yt({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function _t(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ht.call(e, { data: n3.data });
      const o2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), Promise.resolve(e2)), (e2) => (yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: o3, content: r2, mode: i2 } = n4[s3], a2 = e3.match(o3);
          if (!a2)
            continue;
          let c2 = r2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = mt(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = mt(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: ft, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && m ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = dt), s2 = dt) : s2 = n2;
      const o2 = s2.call(this, t3);
      return Object.defineProperty(o2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), o2;
    };
  }
  const wt = Symbol("CLIENT_DB_INTERNAL");
  function kt(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = wt, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function vt(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      s2 !== -1 && e[t2].splice(s2, 1);
    } };
  }
  const Tt = ["db.Geo", "db.command", "command.aggregate"];
  function St(e, t2) {
    return Tt.indexOf(`${e}.${t2}`) > -1;
  }
  function Pt(e) {
    switch (u(e = rt(e))) {
      case "array":
        return e.map((e2) => Pt(e2));
      case "object":
        return e._internalType === wt || Object.keys(e).forEach((t2) => {
          e[t2] = Pt(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function At(e) {
    return e && e.content && e.content.$method;
  }
  class It {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Pt(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "collection" || t2 === "pipeline")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if (At(e) === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get count() {
      if (!this.isAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "count", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get remove() {
      if (!this.isCommand)
        return function() {
          return this._send("remove", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "remove", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      if (!this.isCommand)
        return function() {
          throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        };
      const e = this;
      return function() {
        return bt({ $method: "set", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Pt(t2) }), d) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function bt(e, t2, n2) {
    return kt(new It(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), St(s2, t3) ? bt({ $method: t3 }, e2, n2) : function() {
        return bt({ $method: t3, $param: Pt(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Ot({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class Ct extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = vt(this._authCallBacks), Object.assign(this, vt(this._dbCallBacks)), this.env = kt({}, { get: (e2, t2) => ({ $env: t2 }) }), this.Geo = kt({}, { get: (e2, t2) => Ot({ path: ["Geo"], method: t2 }) }), this.serverDate = Ot({ path: [], method: "serverDate" }), this.RegExp = Ot({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function o2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const o3 = s2[n3];
            o3.udb && typeof o3.udb.setResult == "function" && (t3 ? o3.udb.setResult(t3) : o3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const r2 = this;
      function i2(e2) {
        return r2._callback("error", [e2]), A(I("database", "fail"), e2).then(() => A(I("database", "complete"), e2)).then(() => (o2(null, e2), F(C, { type: U, content: e2 }), Promise.reject(e2)));
      }
      const a2 = A(I("database", "invoke")), u2 = this._uniClient;
      return a2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: r3, systemInfo: a3 = [] } = e2.result;
        if (a3)
          for (let e3 = 0; e3 < a3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = a3[e3], o3 = console[g === "app" && t4 === "warn" ? "error" : t4] || console.log;
            let r4 = "[System Info]" + n4;
            s4 && (r4 = `${r4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), o3(r4);
          }
        if (t3) {
          return i2(new B({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.code, e2.result.errMsg = e2.result.message, s3 && r3 && (at({ token: s3, tokenExpired: r3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: r3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: r3 }]), F(R, { token: s3, tokenExpired: r3 }));
        const c2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < c2.length; t4++) {
          const { prop: n4, tips: s4 } = c2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return A(I("database", "success"), e3).then(() => A(I("database", "complete"), e3)).then(() => (o2(e3, null), F(C, { type: U, content: e3 }), Promise.resolve(e3)));
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return i2(new B({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  function Et(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = function(e2, t3 = {}) {
        return kt(new e2(t3), { get: (e3, t4) => St("db", t4) ? bt({ $method: t4 }, null, e3) : function() {
          return bt({ $method: t4, $param: Pt(Array.from(arguments)) }, null, e3);
        } });
      }(Ct, { uniClient: e });
      return this._database = n2, n2;
    };
  }
  const Rt = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Ut = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", xt = { TOKEN_INVALID_TOKEN_EXPIRED: Ut, TOKEN_INVALID_INVALID_CLIENTID: Rt, TOKEN_INVALID: Rt, TOKEN_INVALID_WRONG_TOKEN: Rt, TOKEN_INVALID_ANONYMOUS_USER: Rt }, Lt = { "uni-id-token-expired": Ut, "uni-id-check-token-failed": Rt, "uni-id-token-not-exist": Rt, "uni-id-check-device-feature-failed": Rt };
  function Dt(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Nt(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      e2.needLogin === true ? n2.push(Dt(t2, e2.path)) : e2.needLogin === false && s2.push(Dt(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function qt(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Ft() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? (t2.charAt(0) !== "/" && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Mt() {
    return qt(Ft());
  }
  function jt(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = qt(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const $t = !!t.uniIdRouter;
  const { loginPage: Kt, routerNeedLogin: Bt, resToLogin: Ht, needLoginPage: Wt, notNeedLoginPage: zt, loginPageInTabBar: Jt } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: o2 = {} } = t) {
    const { loginPage: r2, needLogin: i2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Nt(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: o3 = [] } = e3, { needLoginPage: r3, notNeedLoginPage: i3 } = Nt(o3, s3);
        t2.push(...r3), n3.push(...i3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: r2, routerNeedLogin: i2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: jt(r2, o2) };
  }();
  if (Wt.indexOf(Kt) > -1)
    throw new Error(`Login page [${Kt}] should not be "needLogin", please check your pages.json`);
  function Vt(e) {
    const t2 = qt(function(e2) {
      const t3 = Mt(), n2 = e2.charAt(0), s2 = e2.split("?")[0];
      if (n2 === "/")
        return s2;
      const o2 = s2.replace(/^\//, "").split("/"), r2 = t3.split("/");
      r2.pop();
      for (let e3 = 0; e3 < o2.length; e3++) {
        const t4 = o2[e3];
        t4 === ".." ? r2.pop() : t4 !== "." && r2.push(t4);
      }
      return r2[0] === "" && r2.shift(), r2.join("/");
    }(e));
    return !(zt.indexOf(t2) > -1) && (Wt.indexOf(t2) > -1 || Bt.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function Yt({ redirect: e }) {
    const t2 = qt(e), n2 = qt(Kt);
    return Mt() !== n2 && t2 !== n2;
  }
  function Xt({ api: e, redirect: t2 } = {}) {
    if (!t2 || !Yt({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return e2.charAt(0) !== "/" && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Kt, t2);
    Jt ? e !== "navigateTo" && e !== "redirectTo" || (e = "switchTab") : e === "switchTab" && (e = "navigateTo"), setTimeout(() => {
      uni[e]({ url: n2 });
    });
  }
  function Gt({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = it();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Lt[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Lt[e3] };
      }
      return n3;
    }();
    if (Vt(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (D(E).length > 0)
        return setTimeout(() => {
          F(E, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Qt() {
    !function() {
      const e2 = Ft(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = Gt({ url: e2 });
      t2 || n2 && Xt({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Gt({ url: e2.url });
        return t3 ? e2 : s2 ? (Xt({ api: n2, redirect: e2.url }), false) : e2;
      } });
    }
  }
  function Zt() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Lt;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in xt;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = D(E);
        $().then(() => {
          const n3 = Ft();
          if (n3 && Yt({ redirect: n3 }))
            return t3.length > 0 ? F(E, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Kt && Xt({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function en(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        N(C, e3);
      }, e2.offResponse = function(e3) {
        q(C, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        N(E, e3);
      }, e2.offNeedLogin = function(e3) {
        q(E, e3);
      }, $t && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = true, $().then(() => {
        Qt.call(e2);
      }), Ht && Zt.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        N(R, e3);
      }, e2.offRefreshToken = function(e3) {
        q(R, e3);
      };
    }(e);
  }
  let tn;
  const nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", sn = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function on() {
    const e = it().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(tn(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  tn = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !sn.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, o2 = "", r2 = 0; r2 < e.length; )
      t2 = nn.indexOf(e.charAt(r2++)) << 18 | nn.indexOf(e.charAt(r2++)) << 12 | (n2 = nn.indexOf(e.charAt(r2++))) << 6 | (s2 = nn.indexOf(e.charAt(r2++))), o2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return o2;
  } : atob;
  var rn = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function o2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function r2(e2, t3, { onChooseFile: s3, onUploadProgress: o3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, o4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const r3 = t5.tempFiles, i2 = r3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!r3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = r3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, o4 && o4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, o3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? r2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: r3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: r3, extension: i2, success(t5) {
              e4(o2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? r2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: r3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: r3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: r4, height: i3, width: a3 } = t5;
              e4(o2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: r4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : r2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, r3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return r3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(o2(t5));
            }, fail(e5) {
              r3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), an = n(rn);
  const cn = "manual";
  function un(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === cn)
          return;
        let n2 = false;
        const s2 = [];
        for (let o2 = 2; o2 < e2.length; o2++)
          e2[o2] !== t2[o2] && (s2.push(e2[o2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: o2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = o2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const r2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = r2, t2 && t2(r2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const o2 = t2.collection || this.collection;
      n2 = Array.isArray(o2) ? n2.collection(...o2) : n2.collection(o2);
      const r2 = t2.where || this.where;
      r2 && Object.keys(r2).length && (n2 = n2.where(r2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f2 = t2.getcount !== void 0 ? t2.getcount : this.getcount, g2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, p2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return g2 && (m2.getTree = y), p2 && (m2.getTreePath = y), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ln(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), typeof t3.secretMethods == "object" && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: o2, errorOptions: r2 } = n2, i2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const o3 = n3 ? n3({ params: s4 }) : {};
          let r3, i3;
          try {
            return await A(I(t3, "invoke"), __spreadValues({}, o3)), r3 = await e2(...s4), await A(I(t3, "success"), __spreadProps(__spreadValues({}, o3), { result: r3 })), r3;
          } catch (e3) {
            throw i3 = e3, await A(I(t3, "fail"), __spreadProps(__spreadValues({}, o3), { error: i3 })), i3;
          } finally {
            await A(I(t3, "complete"), i3 ? __spreadProps(__spreadValues({}, o3), { error: i3 }) : __spreadProps(__spreadValues({}, o3), { result: r3 }));
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        i2 && uni.showLoading({ title: o2.title, mask: o2.mask });
        const h2 = { name: t2, type: a, data: { method: c2, params: u2 } };
        typeof n2.secretMethods == "object" && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods[n3];
          s5 && (t3.secret = s5);
        }(n2, h2);
        try {
          l2 = await e.callFunction(h2);
        } catch (e2) {
          l2 = { result: e2 };
        }
        const { errCode: d2, errMsg: f2, newToken: g2 } = l2.result || {};
        if (i2 && uni.hideLoading(), g2 && g2.token && g2.tokenExpired && (at(g2), F(R, __spreadValues({}, g2))), d2) {
          if (i2)
            if (r2.type === "toast")
              uni.showToast({ title: f2, icon: "none" });
            else {
              if (r2.type !== "modal")
                throw new Error(`Invalid errorOptions.type: ${r2.type}`);
              {
                const { confirm: e3 } = await async function({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3 } = {}) {
                  return new Promise((r3, i3) => {
                    uni.showModal({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3, success(e5) {
                      r3(e5);
                    }, fail() {
                      r3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: f2, showCancel: r2.retry, cancelText: "\u53D6\u6D88", confirmText: r2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (r2.retry && e3)
                  return s4(...u2);
              }
            }
          const e2 = new B({ code: d2, message: f2, requestId: l2.requestId });
          throw e2.detail = l2.result, F(C, { type: L, content: e2 }), e2;
        }
        return F(C, { type: L, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  async function hn(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        V.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function dn(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (g === "app") {
        const { osName: e2, osVersion: t3 } = uni.getSystemInfoSync();
        e2 === "ios" && function(e3) {
          if (!e3 || typeof e3 != "string")
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const o2 = e2[s3];
            if (await hn(o2, t4)) {
              n4 = o2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console[g === "app" ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        e.__dev__.debugInfo.initialLaunchType === "remote" ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", g === "web" && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), g.indexOf("mp-") === 0 && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ct(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  const fn = { tcb: ot, tencent: ot, aliyun: Q, private: lt };
  let gn = new class {
    init(e) {
      let t2 = {};
      const n2 = fn[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = g === "web" && navigator.userAgent.indexOf("HBuilderX") > 0 || g === "app";
      const s2 = p;
      s2 && !s2.code && (t2.__dev__.debugInfo = s2), dn(t2), t2.reInit = function() {
        dn(this);
      }, _t(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), Et(t2), function(e2) {
        e2.getCurrentUserInfo = on, e2.chooseAndUploadFile = an.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return un(e2);
        } }), e2.importObject = ln(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = K(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = m;
    let t2 = {};
    if (e && e.length === 1)
      t2 = e[0], gn = gn.init(t2), gn.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        gn[e2] = function() {
          return console.error(n2), Promise.reject(new B({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(gn, { get mixinDatacom() {
      return un(gn);
    } }), en(gn), gn.addInterceptor = S, gn.removeInterceptor = P, gn.interceptObject = b, g === "web" && (window.uniCloud = gn);
  })();
  var pn = gn;
  const _sfc_main$g = {
    name: "u-icon",
    emits: ["click", "touchstart"],
    props: {
      name: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: "inherit"
      },
      bold: {
        type: Boolean,
        default: false
      },
      index: {
        type: [Number, String],
        default: ""
      },
      hoverClass: {
        type: String,
        default: ""
      },
      customPrefix: {
        type: String,
        default: "uicon"
      },
      label: {
        type: [String, Number],
        default: ""
      },
      labelPos: {
        type: String,
        default: "right"
      },
      labelSize: {
        type: [String, Number],
        default: "28"
      },
      labelColor: {
        type: String,
        default: "#606266"
      },
      marginLeft: {
        type: [String, Number],
        default: "6"
      },
      marginTop: {
        type: [String, Number],
        default: "6"
      },
      marginRight: {
        type: [String, Number],
        default: "6"
      },
      marginBottom: {
        type: [String, Number],
        default: "6"
      },
      imgMode: {
        type: String,
        default: "widthFix"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      width: {
        type: [String, Number],
        default: ""
      },
      height: {
        type: [String, Number],
        default: ""
      },
      top: {
        type: [String, Number],
        default: 0
      },
      showDecimalIcon: {
        type: Boolean,
        default: false
      },
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      percent: {
        type: [Number, String],
        default: "50"
      }
    },
    computed: {
      customClass() {
        let classes = [];
        let { customPrefix, name } = this;
        let index = name.indexOf("-icon-");
        if (index > -1) {
          customPrefix = name.substring(0, index + 5);
          classes.push(name);
        } else {
          classes.push(`${customPrefix}-${name}`);
        }
        if (customPrefix === "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(customPrefix);
        }
        if (this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor)) {
          classes.push("u-icon__icon--" + this.inactiveColor);
        } else if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: this.$u.addUnit(this.top)
        };
        if (this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor)) {
          style.color = this.inactiveColor;
        } else if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size);
        style.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size);
        return style;
      },
      decimalIconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: this.$u.addUnit(this.top),
          width: this.percent + "%"
        };
        if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      decimalIconClass() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        else
          classes.push("u-icon__icon--primary");
        return classes;
      }
    },
    methods: {
      click() {
        this.$emit("click", this.index);
      },
      touchstart() {
        this.$emit("touchstart", this.index);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle([$props.customStyle]),
      class: vue.normalizeClass(["u-icon", ["u-icon--" + $props.labelPos]]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.click && $options.click(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: $props.name,
        mode: $props.imgMode,
        style: vue.normalizeStyle([$options.imgStyle])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.customClass]),
        style: vue.normalizeStyle([$options.iconStyle]),
        "hover-class": $props.hoverClass,
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $props.showDecimalIcon ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          style: vue.normalizeStyle([$options.decimalIconStyle]),
          class: vue.normalizeClass([$options.decimalIconClass, "u-icon__decimal"]),
          "hover-class": $props.hoverClass
        }, null, 14, ["hover-class"])) : vue.createCommentVNode("v-if", true)
      ], 46, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u4F20\u503C\u9ED8\u8BA4\u4E3Anull\uFF0C\u6545\u9700\u8981\u589E\u52A0null\u7684\u5224\u65AD '),
      $props.label !== "" && $props.label !== null ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: $props.labelColor,
          fontSize: _ctx.$u.addUnit($props.labelSize),
          marginLeft: $props.labelPos == "right" ? _ctx.$u.addUnit($props.marginLeft) : 0,
          marginTop: $props.labelPos == "bottom" ? _ctx.$u.addUnit($props.marginTop) : 0,
          marginRight: $props.labelPos == "left" ? _ctx.$u.addUnit($props.marginRight) : 0,
          marginBottom: $props.labelPos == "top" ? _ctx.$u.addUnit($props.marginBottom) : 0
        })
      }, vue.toDisplayString($props.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-4cd0916b"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-icon/u-icon.vue"]]);
  const _sfc_main$f = {
    name: "u-alert-tips",
    emits: ["click", "close"],
    props: {
      title: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "warning"
      },
      description: {
        type: String,
        default: ""
      },
      closeAble: {
        type: Boolean,
        default: false
      },
      closeText: {
        type: String,
        default: ""
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: ""
      },
      borderColor: {
        type: String,
        default: ""
      },
      show: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: ""
      },
      iconStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      titleStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      descStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      uTitleStyle() {
        let style = {};
        style.fontWeight = this.description ? 500 : "normal";
        return this.$u.deepMerge(style, this.titleStyle);
      },
      uIcon() {
        return this.icon ? this.icon : this.$u.type2icon(this.type);
      },
      uIconType() {
        return Object.keys(this.iconStyle).length ? "" : this.type;
      }
    },
    methods: {
      click() {
        this.$emit("click");
      },
      close() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    return $props.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-alert-tips", [
        !$props.show ? "u-close-alert-tips" : "",
        $props.type ? "u-alert-tips--bg--" + $props.type + "-light" : "",
        $props.type ? "u-alert-tips--border--" + $props.type + "-disabled" : ""
      ]]),
      style: vue.normalizeStyle({
        backgroundColor: $props.bgColor,
        borderColor: $props.borderColor
      })
    }, [
      vue.createElementVNode("view", { class: "u-icon-wrap" }, [
        $props.showIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: $options.uIcon,
          size: $props.description ? 40 : 32,
          class: "u-icon",
          color: $options.uIconType,
          "custom-style": $props.iconStyle
        }, null, 8, ["name", "size", "color", "custom-style"])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", {
        class: "u-alert-content",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.click && $options.click(...args), ["stop"]))
      }, [
        vue.createElementVNode("view", {
          class: "u-alert-title",
          style: vue.normalizeStyle([$options.uTitleStyle])
        }, vue.toDisplayString($props.title), 5),
        $props.description ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-alert-desc",
          style: vue.normalizeStyle([$props.descStyle])
        }, vue.toDisplayString($props.description), 5)) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "u-icon-wrap" }, [
        $props.closeAble && !$props.closeText ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          onClick: $options.close,
          hoverClass: "u-type-error-hover-color",
          name: "close",
          color: "#c0c4cc",
          size: 22,
          class: "u-close-icon",
          style: vue.normalizeStyle({
            top: $props.description ? "18rpx" : "24rpx"
          })
        }, null, 8, ["onClick", "style"])) : vue.createCommentVNode("v-if", true)
      ]),
      $props.closeAble && $props.closeText ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: "u-close-text",
        style: vue.normalizeStyle({
          top: $props.description ? "18rpx" : "24rpx"
        })
      }, vue.toDisplayString($props.closeText), 5)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-4d321eeb"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-alert-tips/u-alert-tips.vue"]]);
  function broadcast(componentName, eventName, params) {
  }
  var Emitter = {
    methods: {
      dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent[eventName](params);
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  };
  const _sfc_main$e = {
    name: "u-input",
    emits: ["update:modelValue", "input", "change", "blur", "focus", "click", "touchstart"],
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      inputAlign: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u8F93\u5165\u5185\u5BB9"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      placeholderStyle: {
        type: String,
        default: "color: #c0c4cc;"
      },
      confirmType: {
        type: String,
        default: "done"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      fixed: {
        type: Boolean,
        default: false
      },
      focus: {
        type: Boolean,
        default: false
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: "#dcdfe6"
      },
      autoHeight: {
        type: Boolean,
        default: true
      },
      selectOpen: {
        type: Boolean,
        default: false
      },
      height: {
        type: [Number, String],
        default: ""
      },
      clearable: {
        type: [Boolean, String]
      },
      cursorSpacing: {
        type: [Number, String],
        default: 0
      },
      selectionStart: {
        type: [Number, String],
        default: -1
      },
      selectionEnd: {
        type: [Number, String],
        default: -1
      },
      trim: {
        type: Boolean,
        default: true
      },
      showConfirmbar: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String
      },
      padding: {
        type: String
      }
    },
    data() {
      return {
        defaultValue: "",
        inputHeight: 70,
        textareaHeight: 100,
        validateState: false,
        focused: false,
        showPassword: false,
        lastValue: "",
        uForm: {
          inputAlign: "",
          clearable: ""
        }
      };
    },
    watch: {
      valueCom(nVal, oVal) {
        this.defaultValue = nVal;
        if (nVal != oVal && this.type == "select")
          this.handleInput({
            detail: {
              value: nVal
            }
          });
      }
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      inputAlignCom() {
        return this.inputAlign || this.uForm.inputAlign || "left";
      },
      clearableCom() {
        if (typeof this.clearable == "boolean")
          return this.clearable;
        if (typeof this.uForm.clearable == "boolean")
          return this.uForm.clearable;
        return true;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      getStyle() {
        let style = {};
        style.minHeight = this.height ? this.height + "rpx" : this.type == "textarea" ? this.textareaHeight + "rpx" : this.inputHeight + "rpx";
        style = Object.assign(style, this.customStyle);
        return style;
      },
      getCursorSpacing() {
        return Number(this.cursorSpacing);
      },
      uSelectionStart() {
        return String(this.selectionStart);
      },
      uSelectionEnd() {
        return String(this.selectionEnd);
      }
    },
    created() {
      this.defaultValue = this.valueCom;
    },
    mounted() {
      let parent = this.$u.$parent.call(this, "u-form");
      if (parent) {
        Object.keys(this.uForm).map((key) => {
          this.uForm[key] = parent[key];
        });
      }
    },
    methods: {
      handleInput(event) {
        let value = event.detail.value;
        if (this.trim)
          value = this.$u.trim(value);
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.defaultValue = value;
        setTimeout(() => {
          this.dispatch("u-form-item", "onFieldChange", value);
        }, 40);
      },
      handleBlur(event) {
        setTimeout(() => {
          this.focused = false;
        }, 100);
        this.$emit("blur", event.detail.value);
        setTimeout(() => {
          this.dispatch("u-form-item", "onFieldBlur", event.detail.value);
        }, 40);
      },
      onFormItemError(status) {
        this.validateState = status;
      },
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      onConfirm(e) {
        this.$emit("confirm", e.detail.value);
      },
      onClear(event) {
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      inputClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-input", {
        "u-input--border": $props.border,
        "u-input--error": $data.validateState
      }]),
      style: vue.normalizeStyle({
        padding: $props.padding ? $props.padding : `0 ${$props.border ? 20 : 0}rpx`,
        borderColor: $props.borderColor,
        textAlign: $options.inputAlignCom,
        backgroundColor: $props.backgroundColor
      }),
      onClick: _cache[10] || (_cache[10] = vue.withModifiers((...args) => $options.inputClick && $options.inputClick(...args), ["stop"]))
    }, [
      $props.type == "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
        key: 0,
        class: "u-input__input u-input__textarea",
        style: vue.normalizeStyle([$options.getStyle]),
        value: $data.defaultValue,
        placeholder: $props.placeholder,
        placeholderStyle: $props.placeholderStyle,
        disabled: $props.disabled,
        maxlength: $options.inputMaxlength,
        fixed: $props.fixed,
        focus: $props.focus,
        autoHeight: $props.autoHeight,
        "selection-end": $options.uSelectionEnd,
        "selection-start": $options.uSelectionStart,
        "cursor-spacing": $options.getCursorSpacing,
        "show-confirm-bar": $props.showConfirmbar,
        "adjust-position": $props.adjustPosition,
        onInput: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.handleBlur && $options.handleBlur(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args))
      }, null, 44, ["value", "placeholder", "placeholderStyle", "disabled", "maxlength", "fixed", "focus", "autoHeight", "selection-end", "selection-start", "cursor-spacing", "show-confirm-bar", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        class: "u-input__input",
        type: $props.type == "password" ? "text" : $props.type,
        style: vue.normalizeStyle([$options.getStyle]),
        value: $data.defaultValue,
        password: $props.type == "password" && !$data.showPassword,
        placeholder: $props.placeholder,
        placeholderStyle: $props.placeholderStyle,
        disabled: $props.disabled || $props.type === "select",
        maxlength: $options.inputMaxlength,
        focus: $props.focus,
        confirmType: $props.confirmType,
        "cursor-spacing": $options.getCursorSpacing,
        "selection-end": $options.uSelectionEnd,
        "selection-start": $options.uSelectionStart,
        "show-confirm-bar": $props.showConfirmbar,
        "adjust-position": $props.adjustPosition,
        onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => $options.handleBlur && $options.handleBlur(...args)),
        onInput: _cache[6] || (_cache[6] = (...args) => $options.handleInput && $options.handleInput(...args)),
        onConfirm: _cache[7] || (_cache[7] = (...args) => $options.onConfirm && $options.onConfirm(...args))
      }, null, 44, ["type", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "selection-end", "selection-start", "show-confirm-bar", "adjust-position"])),
      vue.createElementVNode("view", { class: "u-input__right-icon u-flex" }, [
        $options.clearableCom && $options.valueCom != "" && $data.focused ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-input__right-icon__clear u-input__right-icon__item",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            size: "32",
            name: "close-circle-fill",
            color: "#c0c4cc"
          })
        ])) : vue.createCommentVNode("v-if", true),
        $props.passwordIcon && $props.type == "password" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-input__right-icon__clear u-input__right-icon__item"
        }, [
          vue.createVNode(_component_u_icon, {
            size: "32",
            name: !$data.showPassword ? "eye" : "eye-fill",
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $data.showPassword = !$data.showPassword)
          }, null, 8, ["name"])
        ])) : vue.createCommentVNode("v-if", true),
        $props.type == "select" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass(["u-input__right-icon--select u-input__right-icon__item", {
            "u-input__right-icon--select--reverse": $props.selectOpen
          }])
        }, [
          vue.createVNode(_component_u_icon, {
            name: "arrow-down-fill",
            size: "26",
            color: "#c0c4cc"
          })
        ], 2)) : vue.createCommentVNode("v-if", true)
      ])
    ], 6);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-556d7571"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-input/u-input.vue"]]);
  const _sfc_main$d = {
    name: "u-button",
    emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
    props: {
      hairLine: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "default"
      },
      shape: {
        type: String,
        default: "square"
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      openType: {
        type: String,
        default: ""
      },
      formType: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      hoverStopPropagation: {
        type: Boolean,
        default: false
      },
      lang: {
        type: String,
        default: "en"
      },
      sessionFrom: {
        type: String,
        default: ""
      },
      sendMessageTitle: {
        type: String,
        default: ""
      },
      sendMessagePath: {
        type: String,
        default: ""
      },
      sendMessageImg: {
        type: String,
        default: ""
      },
      showMessageCard: {
        type: Boolean,
        default: false
      },
      hoverBgColor: {
        type: String,
        default: ""
      },
      rippleBgColor: {
        type: String,
        default: ""
      },
      ripple: {
        type: Boolean,
        default: false
      },
      hoverClass: {
        type: String,
        default: ""
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      dataName: {
        type: String,
        default: ""
      },
      throttleTime: {
        type: [String, Number],
        default: 500
      },
      hoverStartTime: {
        type: [String, Number],
        default: 20
      },
      hoverStayTime: {
        type: [String, Number],
        default: 150
      },
      timerId: {
        type: [String, Number]
      }
    },
    computed: {
      getHoverClass() {
        if (this.loading || this.disabled || this.ripple || this.hoverClass)
          return "";
        let hoverClass = "";
        hoverClass = this.plain ? "u-" + this.type + "-plain-hover" : "u-" + this.type + "-hover";
        return hoverClass;
      },
      showHairLineBorder() {
        if (["primary", "success", "error", "warning"].indexOf(this.type) >= 0 && !this.plain) {
          return "";
        } else {
          return "u-hairline-border";
        }
      }
    },
    data() {
      let btnTimerId = this.timerId || "button_" + Math.floor(Math.random() * 1e8 + 0);
      return {
        btnTimerId,
        rippleTop: 0,
        rippleLeft: 0,
        fields: {},
        waveActive: false
      };
    },
    methods: {
      click(e) {
        this.$u.throttle(() => {
          if (this.loading === true || this.disabled === true)
            return;
          if (this.ripple) {
            this.waveActive = false;
            this.$nextTick(function() {
              this.getWaveQuery(e);
            });
          }
          this.$emit("click", e);
        }, this.throttleTime, true, this.btnTimerId);
      },
      getWaveQuery(e) {
        this.getElQuery().then((res) => {
          let data2 = res[0];
          if (!data2.width || !data2.width)
            return;
          data2.targetWidth = data2.height > data2.width ? data2.height : data2.width;
          if (!data2.targetWidth)
            return;
          this.fields = data2;
          let touchesX = "", touchesY = "";
          touchesX = e.touches[0].clientX;
          touchesY = e.touches[0].clientY;
          this.rippleTop = touchesY - data2.top - data2.targetWidth / 2;
          this.rippleLeft = touchesX - data2.left - data2.targetWidth / 2;
          this.$nextTick(() => {
            this.waveActive = true;
          });
        });
      },
      getElQuery() {
        return new Promise((resolve) => {
          let queryInfo = "";
          queryInfo = uni.createSelectorQuery().in(this);
          queryInfo.select(".u-btn").boundingClientRect();
          queryInfo.exec((data2) => {
            resolve(data2);
          });
        });
      },
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      id: "u-wave-btn",
      class: vue.normalizeClass(["u-btn u-line-1 u-fix-ios-appearance", [
        "u-size-" + $props.size,
        $props.plain ? "u-btn--" + $props.type + "--plain" : "",
        $props.loading ? "u-loading" : "",
        $props.shape == "circle" ? "u-round-circle" : "",
        $props.hairLine ? $options.showHairLineBorder : "u-btn--bold-border",
        "u-btn--" + $props.type,
        $props.disabled ? `u-btn--${$props.type}--disabled` : ""
      ]]),
      "hover-start-time": Number($props.hoverStartTime),
      "hover-stay-time": Number($props.hoverStayTime),
      disabled: $props.disabled,
      "form-type": $props.formType,
      "open-type": $props.openType,
      "app-parameter": $props.appParameter,
      "hover-stop-propagation": $props.hoverStopPropagation,
      "send-message-title": $props.sendMessageTitle,
      "send-message-path": "sendMessagePath",
      lang: $props.lang,
      "data-name": $props.dataName,
      "session-from": $props.sessionFrom,
      "send-message-img": $props.sendMessageImg,
      "show-message-card": $props.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      style: vue.normalizeStyle([$props.customStyle, {
        overflow: $props.ripple ? "hidden" : "visible"
      }]),
      onClick: _cache[5] || (_cache[5] = vue.withModifiers(($event) => $options.click($event), ["stop"])),
      "hover-class": $options.getHoverClass,
      loading: $props.loading
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.ripple ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-wave-ripple", [$data.waveActive ? "u-wave-active" : ""]]),
        style: vue.normalizeStyle({
          top: $data.rippleTop + "px",
          left: $data.rippleLeft + "px",
          width: $data.fields.targetWidth + "px",
          height: $data.fields.targetWidth + "px",
          "background-color": $props.rippleBgColor || "rgba(0, 0, 0, 0.15)"
        })
      }, null, 6)) : vue.createCommentVNode("v-if", true)
    ], 46, ["hover-start-time", "hover-stay-time", "disabled", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class", "loading"]);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-2a82580b"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-button/u-button.vue"]]);
  const _sfc_main$c = {
    name: "u-badge",
    props: {
      type: {
        type: String,
        default: "error"
      },
      size: {
        type: String,
        default: "default"
      },
      isDot: {
        type: Boolean,
        default: false
      },
      count: {
        type: [Number, String]
      },
      overflowCount: {
        type: Number,
        default: 99
      },
      showZero: {
        type: Boolean,
        default: false
      },
      offset: {
        type: Array,
        default: () => {
          return [20, 20];
        }
      },
      absolute: {
        type: Boolean,
        default: true
      },
      fontSize: {
        type: [String, Number],
        default: "24"
      },
      color: {
        type: String,
        default: "#ffffff"
      },
      bgColor: {
        type: String,
        default: ""
      },
      isCenter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      boxStyle() {
        let style = {};
        if (this.isCenter) {
          style.top = 0;
          style.right = 0;
          style.transform = "translateY(-50%) translateX(50%)";
        } else {
          style.top = this.offset[0] + "rpx";
          style.right = this.offset[1] + "rpx";
          style.transform = "translateY(0) translateX(0)";
        }
        if (this.size == "mini") {
          style.transform = style.transform + " scale(0.8)";
        }
        return style;
      },
      showText() {
        if (this.isDot)
          return "";
        else {
          if (this.count > this.overflowCount)
            return `${this.overflowCount}+`;
          else
            return this.count;
        }
      },
      show() {
        if (this.count == 0 && this.showZero == false)
          return false;
        else
          return true;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-badge", [
        $props.isDot ? "u-badge-dot" : "",
        $props.size == "mini" ? "u-badge-mini" : "",
        $props.type ? "u-badge--bg--" + $props.type : ""
      ]]),
      style: vue.normalizeStyle([{
        top: $props.offset[0] + "rpx",
        right: $props.offset[1] + "rpx",
        fontSize: $props.fontSize + "rpx",
        position: $props.absolute ? "absolute" : "static",
        color: $props.color,
        backgroundColor: $props.bgColor
      }, $options.boxStyle])
    }, vue.toDisplayString($options.showText), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-3a786b23"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-badge/u-badge.vue"]]);
  const _sfc_main$b = {
    name: "u-subsection",
    emits: ["change", "update:modelValue", "input"],
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: 0
      },
      modelValue: {
        type: [String, Number],
        default: 0
      },
      current: {
        type: [Number, String],
        default: 0
      },
      activeColor: {
        type: String,
        default: "#303133"
      },
      inactiveColor: {
        type: String,
        default: "#606266"
      },
      mode: {
        type: String,
        default: "button"
      },
      fontSize: {
        type: [Number, String],
        default: 28
      },
      animation: {
        type: Boolean,
        default: true
      },
      height: {
        type: [Number, String],
        default: 70
      },
      bold: {
        type: Boolean,
        default: true
      },
      bgColor: {
        type: String,
        default: "#eeeeef"
      },
      buttonColor: {
        type: String,
        default: "#ffffff"
      },
      vibrateShort: {
        type: Boolean,
        default: false
      },
      offset: {
        type: Array,
        default: function() {
          return [0, 0];
        }
      }
    },
    data() {
      return {
        itemBgStyle: {
          width: 0,
          left: 0,
          backgroundColor: "#ffffff",
          height: "100%",
          transition: ""
        },
        currentIndex: this.current,
        buttonPadding: 3,
        borderRadius: 5,
        firstTimeVibrateShort: true,
        listInfo: []
      };
    },
    watch: {
      valueCom: {
        immediate: true,
        handler(nVal) {
          if (nVal) {
            this.currentIndex = nVal;
            this.changeSectionStatus(nVal);
          }
        }
      },
      current: {
        immediate: true,
        handler(nVal) {
          if (nVal) {
            this.currentIndex = nVal;
            this.changeSectionStatus(nVal);
          }
        }
      },
      list: {
        deep: true,
        handler(nVal = []) {
          this.listInfoFn();
          setTimeout(() => {
            this.getTabsInfo();
          }, 10);
        }
      }
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      noBorderRight() {
        return (index) => {
          if (this.mode != "subsection")
            return;
          let classs = "";
          if (index < this.list.length - 1)
            classs += " u-none-border-right";
          if (index == 0)
            classs += " u-item-first";
          if (index == this.list.length - 1)
            classs += " u-item-last";
          return classs;
        };
      },
      textStyle() {
        return (index) => {
          let style = {};
          if (this.mode == "subsection") {
            if (index == this.currentIndex) {
              style.color = "#ffffff";
            } else {
              style.color = this.activeColor;
            }
          } else {
            if (index == this.currentIndex) {
              style.color = this.activeColor;
            } else {
              style.color = this.inactiveColor;
            }
          }
          if (index == this.currentIndex && this.bold)
            style.fontWeight = "bold";
          style.fontSize = this.fontSize + "rpx";
          return style;
        };
      },
      itemStyle() {
        return (index) => {
          let style = {};
          if (this.mode == "subsection") {
            style.borderColor = this.activeColor;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
          return style;
        };
      },
      subsectionStyle() {
        let style = {};
        style.height = uni.upx2px(this.height) + "px";
        if (this.mode == "button") {
          style.backgroundColor = this.bgColor;
          style.padding = `${this.buttonPadding}px`;
          style.borderRadius = `${this.borderRadius}px`;
        }
        return style;
      },
      itemBarStyle() {
        let style = {};
        style.backgroundColor = this.activeColor;
        style.zIndex = 1;
        if (this.mode == "button") {
          style.backgroundColor = this.buttonColor;
          style.borderRadius = `${this.borderRadius}px`;
          style.bottom = `${this.buttonPadding}px`;
          style.height = uni.upx2px(this.height) - this.buttonPadding * 2 + "px";
          style.zIndex = 0;
        }
        return Object.assign(this.itemBgStyle, style);
      }
    },
    mounted() {
      this.listInfoFn();
      setTimeout(() => {
        this.getTabsInfo();
      }, 10);
    },
    methods: {
      listInfoFn() {
        this.listInfo = this.list.map((val, index) => {
          if (typeof val != "object") {
            let obj = {
              width: 0,
              name: val
            };
            return obj;
          } else {
            return val;
          }
        });
        return this.listInfo;
      },
      changeSectionStatus(nVal) {
        if (this.mode == "subsection") {
          if (nVal == this.list.length - 1) {
            this.itemBgStyle.borderRadius = `0 ${this.buttonPadding}px ${this.buttonPadding}px 0`;
          }
          if (nVal == 0) {
            this.itemBgStyle.borderRadius = `${this.buttonPadding}px 0 0 ${this.buttonPadding}px`;
          }
          if (nVal > 0 && nVal < this.list.length - 1) {
            this.itemBgStyle.borderRadius = "0";
          }
        }
        setTimeout(() => {
          this.itemBgLeft();
        }, 10);
        if (this.vibrateShort && !this.firstTimeVibrateShort) {
          uni.vibrateShort();
        }
        this.firstTimeVibrateShort = false;
      },
      click(index) {
        if (index == this.currentIndex)
          return;
        this.currentIndex = index;
        this.changeSectionStatus(index);
        this.$emit("change", Number(index));
        this.$emit("input", Number(index));
        this.$emit("update:modelValue", Number(index));
      },
      getTabsInfo() {
        let view = uni.createSelectorQuery().in(this);
        for (let i2 = 0; i2 < this.list.length; i2++) {
          view.select(".u-item-" + i2).boundingClientRect();
        }
        view.exec((res) => {
          if (!res.length) {
            setTimeout(() => {
              this.getTabsInfo();
              return;
            }, 10);
          }
          res.map((val, index) => {
            this.listInfo[index].width = val.width;
          });
          if (this.mode == "subsection") {
            this.itemBgStyle.width = this.listInfo[0].width + "px";
          } else if (this.mode == "button") {
            this.itemBgStyle.width = this.listInfo[0].width + "px";
          }
          this.itemBgLeft();
        });
      },
      itemBgLeft() {
        if (this.animation) {
          this.itemBgStyle.transition = "all 0.35s";
        } else {
          this.itemBgStyle.transition = "all 0s";
        }
        let left = 0;
        this.listInfo.map((val, index) => {
          if (index < this.currentIndex)
            left += val.width;
        });
        if (this.mode == "subsection") {
          this.itemBgStyle.left = left + "px";
        } else if (this.mode == "button") {
          this.itemBgStyle.left = left + this.buttonPadding + "px";
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-subsection",
      style: vue.normalizeStyle([$options.subsectionStyle])
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.listInfo, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["u-item u-line-1", [$options.noBorderRight(index), "u-item-" + index]]),
          style: vue.normalizeStyle([$options.itemStyle(index)]),
          onClick: ($event) => $options.click(index),
          key: index
        }, [
          vue.createElementVNode("view", {
            style: vue.normalizeStyle([$options.textStyle(index)]),
            class: "u-item-text u-line-1"
          }, vue.toDisplayString(item.name), 5),
          item.num > 0 ? (vue.openBlock(), vue.createBlock(_component_u_badge, {
            key: 0,
            count: item.num,
            offset: $props.offset,
            size: "mini"
          }, null, 8, ["count", "offset"])) : vue.createCommentVNode("v-if", true)
        ], 14, ["onClick"]);
      }), 128)),
      vue.createElementVNode("view", {
        class: "u-item-bg",
        style: vue.normalizeStyle([$options.itemBarStyle])
      }, null, 4)
    ], 4);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-2425c72a"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-subsection/u-subsection.vue"]]);
  const _sfc_main$a = {
    name: "u-col",
    emits: ["click"],
    props: {
      span: {
        type: [Number, String],
        default: 12
      },
      offset: {
        type: [Number, String],
        default: 0
      },
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "center"
      },
      textAlign: {
        type: String,
        default: "left"
      },
      stop: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        gutter: 20
      };
    },
    created() {
      this.parent = false;
    },
    mounted() {
      this.parent = this.$u.$parent.call(this, "u-row");
      if (this.parent) {
        this.gutter = this.parent.gutter;
      }
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      }
    },
    methods: {
      click(e) {
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-col", [
        "u-col-" + $props.span
      ]]),
      style: vue.normalizeStyle({
        padding: `0 ${Number($data.gutter) / 2 + "rpx"}`,
        marginLeft: 100 / 12 * $props.offset + "%",
        flex: `0 0 ${100 / 12 * $props.span}%`,
        alignItems: $options.uAlignItem,
        justifyContent: $options.uJustify,
        textAlign: $props.textAlign
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-244ae51d"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-col/u-col.vue"]]);
  const _sfc_main$9 = {
    name: "u-row",
    emits: ["click"],
    props: {
      gutter: {
        type: [String, Number],
        default: 20
      },
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "center"
      },
      stop: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      }
    },
    methods: {
      click(e) {
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-row",
      style: vue.normalizeStyle({
        alignItems: $options.uAlignItem,
        justifyContent: $options.uJustify
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-c4371f5e"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-row/u-row.vue"]]);
  function getData(key) {
    return data[key];
  }
  function getChunGuaData(key) {
    return chunGua[key];
  }
  function get64Data() {
    return data;
  }
  function getGuaGong(data2) {
    if (data2[3] != "\u516B\u7EAF\u5366") {
      return data2[4];
    }
    return "";
  }
  function getGuaGongWuXin(data2) {
    if (data2[3] != "\u516B\u7EAF\u5366") {
      return wuxing[chuGuaWuXin[data2[4]][0]];
    } else {
      return wuxing[data2[4]];
    }
  }
  function getFuYao(data2) {
    if (data2[3] != "\u516B\u7EAF\u5366") {
      return chuGuaWuXin[data2[4]][1];
    } else {
      return ["", "", "", "", "", ""];
    }
  }
  function getZhuGuaNajia(userArr) {
    let waigua = userArr.substring(0, 3);
    let neigua = userArr.substring(3);
    let neichungua = neigua + neigua;
    let waichungua = waigua + waigua;
    waichungua = waichungua.replace(/2/g, "0");
    waichungua = waichungua.replace(/3/g, "1");
    neichungua = neichungua.replace(/3/g, "1");
    neichungua = neichungua.replace(/2/g, "0");
    let targetNeiChunGua = this.getChunGuaData(neichungua);
    let targetWaiChunGua = this.getChunGuaData(waichungua);
    let najia = [];
    najia[0] = targetWaiChunGua[2][0];
    najia[1] = targetWaiChunGua[2][1];
    najia[2] = targetWaiChunGua[2][2];
    najia[3] = targetNeiChunGua[2][3];
    najia[4] = targetNeiChunGua[2][4];
    najia[5] = targetNeiChunGua[2][5];
    return najia;
  }
  function getZhuGuaData(userArr) {
    userArr = userArr.replace(/2/g, "0");
    userArr = userArr.replace(/3/g, "1");
    return userArr;
  }
  function getBianGuaData(userArr) {
    userArr = userArr.replace(/2/g, "1");
    userArr = userArr.replace(/3/g, "0");
    return userArr;
  }
  function getBianGuaNajia(userArr) {
    let waigua = userArr.substring(0, 3);
    let neigua = userArr.substring(3);
    let neichungua = neigua + neigua;
    let waichungua = waigua + waigua;
    waichungua = waichungua.replace(/2/g, "1");
    waichungua = waichungua.replace(/3/g, "0");
    neichungua = neichungua.replace(/3/g, "0");
    neichungua = neichungua.replace(/2/g, "1");
    let targetNeiChunGua = this.getChunGuaData(neichungua);
    let targetWaiChunGua = this.getChunGuaData(waichungua);
    let najia = [];
    najia[0] = targetWaiChunGua[2][0];
    najia[1] = targetWaiChunGua[2][1];
    najia[2] = targetWaiChunGua[2][2];
    najia[3] = targetNeiChunGua[2][3];
    najia[4] = targetNeiChunGua[2][4];
    najia[5] = targetNeiChunGua[2][5];
    return najia;
  }
  let jiaZiWuxin = {
    "\u5B50": ["\u6C34", 2],
    "\u4E11": ["\u571F", 4],
    "\u5BC5": ["\u6728", 1],
    "\u536F": ["\u6728", 1],
    "\u8FB0": ["\u571F", 4],
    "\u5DF3": ["\u706B", 3],
    "\u5348": ["\u706B", 3],
    "\u672A": ["\u571F", 4],
    "\u7533": ["\u91D1", 0],
    "\u9149": ["\u91D1", 0],
    "\u620C": ["\u571F", 4],
    "\u4EA5": ["\u6C34", 2]
  };
  let wuxing = {
    "\u91D1": ["\u5144\u5F1F", "\u59BB\u8D22", "\u5B50\u5B59", "\u5B98\u9B3C", "\u7236\u6BCD"],
    "\u6728": ["\u5B98\u9B3C", "\u5144\u5F1F", "\u7236\u6BCD", "\u5B50\u5B59", "\u59BB\u8D22"],
    "\u6C34": ["\u7236\u6BCD", "\u5B50\u5B59", "\u5144\u5F1F", "\u59BB\u8D22", "\u5B98\u9B3C"],
    "\u706B": ["\u59BB\u8D22", "\u7236\u6BCD", "\u5B98\u9B3C", "\u5144\u5F1F", "\u5B50\u5B59"],
    "\u571F": ["\u7236\u6BCD", "\u5B98\u9B3C", "\u59BB\u8D22", "\u7236\u6BCD", "\u5144\u5F1F"]
  };
  let chunGua = {
    "111111": ["\u4E7E\u4E3A\u5929", "\u91D1", ["\u58EC\u620C\u571F", "\u58EC\u7533\u91D1", "\u58EC\u5348\u706B", "\u7532\u8FB0\u571F", "\u7532\u5BC5\u6728", "\u7532\u5B50\u6C34"]],
    "000000": ["\u5764\u4E3A\u5730", "\u571F", ["\u7678\u9149\u91D1", "\u7678\u4EA5\u6C34", "\u7678\u4E11\u571F", "\u4E59\u536F\u6728", "\u4E59\u5DF3\u706B", "\u4E59\u672A\u571F"]],
    "101101": ["\u79BB\u4E3A\u706B", "\u706B", ["\u5DF1\u5DF3\u706B", "\u5DF1\u672A\u571F", "\u5DF1\u9149\u91D1", "\u5DF1\u4EA5\u6C34", "\u5DF1\u4E11\u571F", "\u5DF1\u536F\u6728"]],
    "010010": ["\u574E\u4E3A\u6C34", "\u6C34", ["\u620A\u5B50\u6C34", "\u620A\u620C\u571F", "\u620A\u7533\u91D1", "\u620A\u5348\u706B", "\u620A\u8FB0\u571F", "\u620A\u5BC5\u6728"]],
    "100100": ["\u826E\u4E3A\u5C71", "\u571F", ["\u4E19\u5BC5\u6728", "\u4E19\u5B50\u6C34", "\u4E19\u620C\u571F", "\u4E19\u7533\u91D1", "\u4E19\u5348\u706B", "\u4E19\u8FB0\u571F"]],
    "011011": ["\u5151\u4E3A\u6CFD", "\u91D1", ["\u4E01\u672A\u571F", "\u4E01\u9149\u91D1", "\u4E01\u4EA5\u6C34", "\u4E01\u4E11\u571F", "\u4E01\u536F\u6728", "\u4E01\u5DF3\u706B"]],
    "110110": ["\u5DFD\u4E3A\u98CE", "\u6728", ["\u8F9B\u536F\u6728", "\u8F9B\u5DF3\u706B", "\u8F9B\u672A\u58EB", "\u8F9B\u9149\u91D1", "\u8F9B\u4EA5\u6C34", "\u8F9B\u4E11\u571F"]],
    "001001": ["\u9707\u4E3A\u96F7", "\u6728", ["\u5E9A\u620C\u571F", "\u5E9A\u7533\u91D1", "\u5E9A\u5348\u706B", "\u5E9A\u8FB0\u571F", "\u5E9A\u5BC5\u6728", "\u5E9A\u5B50\u6C34"]]
  };
  let chuGuaWuXin = {
    "\u4E7E": ["\u91D1", ["\u58EC\u620C\u571F", "\u58EC\u7533\u91D1", "\u58EC\u5348\u706B", "\u7532\u8FB0\u571F", "\u7532\u5BC5\u6728", "\u7532\u5B50\u6C34"]],
    "\u5764": ["\u571F", ["\u7678\u9149\u91D1", "\u7678\u4EA5\u6C34", "\u7678\u4E11\u571F", "\u4E59\u536F\u6728", "\u4E59\u5DF3\u706B", "\u4E59\u672A\u571F"]],
    "\u574E": ["\u6C34", ["\u620A\u5B50\u6C34", "\u620A\u620C\u571F", "\u620A\u7533\u91D1", "\u620A\u5348\u706B", "\u620A\u8FB0\u571F", "\u620A\u5BC5\u6728"]],
    "\u79BB": ["\u706B", ["\u5DF1\u5DF3\u706B", "\u5DF1\u672A\u571F", "\u5DF1\u9149\u91D1", "\u5DF1\u4EA5\u6C34", "\u5DF1\u4E11\u571F", "\u5DF1\u536F\u6728"]],
    "\u9707": ["\u6728", ["\u5E9A\u620C\u571F", "\u5E9A\u7533\u91D1", "\u5E9A\u5348\u706B", "\u5E9A\u8FB0\u571F", "\u5E9A\u5BC5\u6728", "\u5E9A\u5B50\u6C34"]],
    "\u826E": ["\u571F", ["\u4E19\u5BC5\u6728", "\u4E19\u5B50\u6C34", "\u4E19\u620C\u571F", "\u4E19\u7533\u91D1", "\u4E19\u5348\u706B", "\u4E19\u8FB0\u571F"]],
    "\u5DFD": ["\u6728", ["\u8F9B\u536F\u6728", "\u8F9B\u5DF3\u706B", "\u8F9B\u672A\u58EB", "\u8F9B\u9149\u91D1", "\u8F9B\u4EA5\u6C34", "\u8F9B\u4E11\u571F"]],
    "\u5151": ["\u91D1", ["\u4E01\u672A\u571F", "\u4E01\u9149\u91D1", "\u4E01\u4EA5\u6C34", "\u4E01\u4E11\u571F", "\u4E01\u536F\u6728", "\u4E01\u5DF3\u706B"]]
  };
  let data = {
    "111111": ["1", "\u4E7E\u4E3A\u5929", "\u4E7E", "\u516B\u7EAF\u5366", "\u91D1", "111111"],
    "000000": ["2", "\u5764\u4E3A\u5730", "\u5764", "\u516B\u7EAF\u5366", "\u571F", "000000"],
    "010001": ["3", "\u6C34\u96F7\u5C6F", "\u5C6F", "\u4E8C\u4E16\u5366", "\u574E", "010001"],
    "100010": ["4", "\u5C71\u6C34\u8499", "\u8499", "\u56DB\u4E16\u5366", "\u79BB", "100010"],
    "010111": ["5", "\u6C34\u5929\u9700", "\u9700", "\u6E38\u9B42\u5366", "\u5764", "010111"],
    "111010": ["6", "\u5929\u6C34\u8BBC", "\u8BBC", "\u6E38\u9B42\u5366", "\u79BB", "111010"],
    "000010": ["7", "\u5730\u6C34\u5E08", "\u5E08", "\u5F52\u9B42\u5366", "\u574E", "000010"],
    "010000": ["8", "\u6C34\u5730\u6BD4", "\u6BD4", "\u5F52\u9B42\u5366", "\u5764", "010000"],
    "110111": ["9", "\u98CE\u5929\u5C0F\u755C", "\u5C0F\u755C", "\u4E00\u4E16\u5366", "\u5DFD", "110111"],
    "111011": ["10", "\u5929\u6CFD\u5C65", "\u5C65", "\u4E94\u4E16\u5366", "\u826E", "111011"],
    "000111": ["11", "\u5730\u5929\u6CF0", "\u6CF0", "\u4E09\u4E16\u5366", "\u5764", "000111"],
    "111000": ["12", "\u5929\u5730\u5426", "\u5426", "\u4E09\u4E16\u5366", "\u4E7E", "111000"],
    "111101": ["13", "\u5929\u706B\u540C\u4EBA", "\u540C\u4EBA", "\u5F52\u9B42\u5366", "\u79BB", "111101"],
    "101111": ["14", "\u706B\u5929\u5927\u6709", "\u5927\u6709", "\u5F52\u9B42\u5366", "\u4E7E", "101111"],
    "000100": ["15", "\u5730\u5C71\u8C26", "\u8C26", "\u4E94\u4E16\u5366", "\u5151", "000100"],
    "001000": ["16", "\u96F7\u5730\u8C6B", "\u8C6B", "\u4E00\u4E16\u5366", "\u9707", "001000"],
    "011001": ["17", "\u6CFD\u96F7\u968F", "\u968F", "\u5F52\u9B42\u5366", "\u9707", "011001"],
    "100110": ["18", "\u5C71\u98CE\u86CA", "\u86CA", "\u5F52\u9B42\u5366", "\u5DFD", "100110"],
    "000011": ["19", "\u5730\u6CFD\u4E34", "\u4E34", "\u4E8C\u4E16\u5366", "\u5764", "000011"],
    "110000": ["20", "\u98CE\u5730\u89C2", "\u89C2", "\u56DB\u4E16\u5366", "\u4E7E", "110000"],
    "101001": ["21", "\u706B\u96F7\u566C\u55D1", "\u566C\u55D1", "\u4E94\u4E16\u5366", "\u5DFD", "101001"],
    "100101": ["22", "\u5C71\u706B\u8D32", "\u8D32", "\u4E00\u4E16\u5366", "\u826E", "100101"],
    "100000": ["23", "\u5C71\u5730\u5265", "\u5265", "\u4E94\u4E16\u5366", "\u4E7E", "100000"],
    "000001": ["24", "\u5730\u96F7\u590D", "\u590D", "\u4E00\u4E16\u5366", "\u5764", "000001"],
    "111001": ["25", "\u5929\u96F7\u65E0\u5984", "\u65E0\u5984", "\u56DB\u4E16\u5366", "\u5DFD", "111001"],
    "100111": ["26", "\u5C71\u5929\u5927\u755C", "\u5927\u755C", "\u4E8C\u4E16\u5366", "\u826E", "100111"],
    "100001": ["27", "\u5C71\u96F7\u9890", "\u9890", "\u6E38\u9B42\u5366", "\u5DFD", "100001"],
    "011110": ["28", "\u6CFD\u98CE\u5927\u8FC7", "\u5927\u8FC7", "\u6E38\u9B42\u5366", "\u9707", "011110"],
    "010010": ["29", "\u574E\u4E3A\u6C34", "\u574E", "\u516B\u7EAF\u5366", "\u6C34", "010010"],
    "101101": ["30", "\u79BB\u4E3A\u706B", "\u79BB", "\u516B\u7EAF\u5366", "\u706B", "101101"],
    "011100": ["31", "\u6CFD\u5C71\u54B8", "\u54B8", "\u4E09\u4E16\u5366", "\u5151", "011100"],
    "001110": ["32", "\u96F7\u98CE\u6052", "\u6052", "\u4E09\u4E16\u5366", "\u9707", "001110"],
    "111100": ["33", "\u5929\u5C71\u9041", "\u9041", "\u4E8C\u4E16\u5366", "\u4E7E", "111100"],
    "001111": ["34", "\u96F7\u5929\u5927\u58EE", "\u5927\u58EE", "\u56DB\u4E16\u5366", "\u5764", "001111"],
    "101000": ["35", "\u706B\u5730\u664B", "\u664B", "\u6E38\u9B42\u5366", "\u4E7E", "101000"],
    "000101": ["36", "\u5730\u706B\u660E\u5937", "\u660E\u5937", "\u6E38\u9B42\u5366", "\u574E", "000101"],
    "110101": ["37", "\u98CE\u706B\u5BB6\u4EBA", "\u5BB6\u4EBA", "\u4E8C\u4E16\u5366", "\u5DFD", "110101"],
    "101011": ["38", "\u706B\u6CFD\u777D", "\u777D", "\u56DB\u4E16\u5366", "\u826E", "101011"],
    "010100": ["39", "\u6C34\u5C71\u8E47", "\u8E47", "\u56DB\u4E16\u5366", "\u5151", "010100"],
    "001010": ["40", "\u96F7\u6C34\u89E3", "\u89E3", "\u4E8C\u4E16\u5366", "\u9707", "001010"],
    "100011": ["41", "\u5C71\u6CFD\u635F", "\u635F", "\u4E09\u4E16\u5366", "\u826E", "100011"],
    "110001": ["42", "\u98CE\u96F7\u76CA", "\u76CA", "\u4E09\u4E16\u5366", "\u5DFD", "110001"],
    "011111": ["43", "\u6CFD\u5929\u592C", "\u592C", "\u4E94\u4E16\u5366", "\u5764", "011111"],
    "111110": ["44", "\u98CE\u5929\u59E4", "\u59E4", "\u4E00\u4E16\u5366", "\u4E7E", "111110"],
    "011000": ["45", "\u6CFD\u5730\u8403", "\u8403", "\u4E8C\u4E16\u5366", "\u5151", "011000"],
    "000110": ["46", "\u5730\u98CE\u5347", "\u5347", "\u56DB\u4E16\u5366", "\u9707", "000110"],
    "011010": ["47", "\u6CFD\u6C34\u56F0", "\u56F0", "\u4E00\u4E16\u5366", "\u5151", "011010"],
    "010110": ["48", "\u6C34\u98CE\u4E95", "\u4E95", "\u4E94\u4E16\u5366", "\u9707", "010110"],
    "011101": ["49", "\u6CFD\u706B\u9769", "\u9769", "\u56DB\u4E16\u5366", "\u574E", "011101"],
    "101110": ["50", "\u706B\u98CE\u9F0E", "\u9F0E", "\u4E8C\u4E16\u5366", "\u79BB", "101110"],
    "001001": ["51", "\u9707\u4E3A\u96F7", "\u9707", "\u516B\u7EAF\u5366", "\u6728", "001001"],
    "100100": ["52", "\u826E\u4E3A\u5C71", "\u826E", "\u516B\u7EAF\u5366", "\u571F", "100100"],
    "110100": ["53", "\u98CE\u5C71\u6E10", "\u6E10", "\u5F52\u9B42\u5366", "\u826E", "110100"],
    "001011": ["54", "\u96F7\u6CFD\u5F52\u59B9", "\u5F52\u59B9", "\u5F52\u9B42\u5366", "\u5151", "001011"],
    "001101": ["55", "\u96F7\u706B\u4E30", "\u4E30", "\u4E94\u4E16\u5366", "\u574E", "001101"],
    "101100": ["56", "\u706B\u5C71\u65C5", "\u65C5", "\u4E00\u4E16\u5366", "\u79BB", "101100"],
    "110110": ["57", "\u5DFD\u4E3A\u98CE", "\u5DFD", "\u516B\u7EAF\u5366", "\u6728", "110110"],
    "011011": ["58", "\u5151\u4E3A\u6CFD", "\u5151", "\u516B\u7EAF\u5366", "\u91D1", "011011"],
    "110010": ["59", "\u98CE\u6C34\u6DA3", "\u6DA3", "\u4E94\u4E16\u5366", "\u79BB", "110010"],
    "010011": ["60", "\u6C34\u6CFD\u8282", "\u8282", "\u4E00\u4E16\u5366", "\u574E", "010011"],
    "110011": ["61", "\u98CE\u6CFD\u4E2D\u5B5A", "\u4E2D\u5B5A", "\u6E38\u9B42\u5366", "\u826E", "110011"],
    "001100": ["62", "\u96F7\u5C71\u5C0F\u8FC7", "\u5C0F\u8FC7", "\u6E38\u9B42\u5366", "\u5151", "001100"],
    "010101": ["63", "\u6C34\u706B\u65E2\u6D4E", "\u65E2\u6D4E", "\u4E09\u4E16\u5366", "\u574E", "010101"],
    "101010": ["64", "\u706B\u6C34\u672A\u6D4E", "\u672A\u6D4E", "\u4E09\u4E16\u5366", "\u79BB", "101010"]
  };
  function getWuXingIndex(dizhi) {
    return jiaZiWuxin[dizhi];
  }
  function getShiYing(zhushiyin) {
    let data2 = [];
    if (zhushiyin == "\u4E00\u4E16\u5366") {
      data2 = ["", "", "\u5E94", "", "", "\u4E16"];
    } else if (zhushiyin == "\u4E8C\u4E16\u5366") {
      data2 = ["", "\u5E94", "", "", "\u4E16", ""];
    } else if (zhushiyin == "\u4E09\u4E16\u5366" || zhushiyin == "\u6E38\u9B42\u5366") {
      data2 = ["\u5E94", "", "", "\u4E16", "", ""];
    } else if (zhushiyin == "\u56DB\u4E16\u5366" || zhushiyin == "\u5F52\u9B42\u5366") {
      data2 = ["", "", "\u4E16", "", "", "\u5E94"];
    } else if (zhushiyin == "\u4E94\u4E16\u5366") {
      data2 = ["", "\u4E16", "", "", "\u5E94", ""];
    } else if (zhushiyin == "\u516B\u7EAF\u5366") {
      data2 = ["\u4E16", "", "", "\u5E94", "", ""];
    }
    return data2;
  }
  var sortdata = {
    getData,
    getChunGuaData,
    getBianGuaNajia,
    getZhuGuaNajia,
    getZhuGuaData,
    getBianGuaData,
    get64Data,
    getShiYing,
    getGuaGong,
    getGuaGongWuXin,
    getWuXingIndex,
    getFuYao
  };
  const _sfc_main$8 = {
    data() {
      return {
        list: [
          {
            name: "\u6027\u522B\u672A\u9009\u62E9"
          },
          {
            name: "\u7537"
          },
          {
            name: "\u5973"
          }
        ],
        current: 0,
        userArr: "111111",
        inputValue: "",
        seen: true,
        chungua: [],
        najia: ["", "", "", "", "", ""],
        zhuguaName: "",
        bianguaName: "",
        zhugua: ["", "", "", "", "", ""],
        biangua: ["", "", "", "", "", ""],
        zhuganShiYing: [],
        bianganShiYing: [],
        fuYao: ["", "", "", "", "", ""]
      };
    },
    onLoad() {
      let cgua = sortdata.getChunGuaData(this.userArr);
      {
        this.chungua = cgua[2];
      }
    },
    methods: {
      btnClick(name) {
        if (this.inputValue.length == 6) {
          this.userArr = this.inputValue;
          let zhuguanajia = sortdata.getZhuGuaNajia(this.userArr);
          let zhuData = sortdata.getData(sortdata.getZhuGuaData(this.userArr));
          let bianData = sortdata.getData(sortdata.getBianGuaData(this.userArr));
          let zhushiyin = zhuData[3];
          let bianshiyin = bianData[3];
          this.zhuganShiYing = sortdata.getShiYing(zhushiyin);
          this.bianganShiYing = sortdata.getShiYing(bianshiyin);
          let zhuGuaGong = sortdata.getGuaGong(zhuData);
          let bianGuaGong = sortdata.getGuaGong(bianData);
          let zhuGuaGongliuQing = sortdata.getGuaGongWuXin(zhuData);
          sortdata.getGuaGongWuXin(bianData);
          let tempFuYao = sortdata.getFuYao(zhuData);
          for (let i2 = 0; i2 < this.userArr.length; i2++) {
            let item = this.userArr.charAt(i2);
            let zhuGuaYao = zhuguanajia[i2];
            let zhuFuYao = tempFuYao[i2];
            let wuxin = zhuGuaYao[1];
            let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]];
            let fuYaoWuXin = sortdata.getWuXingIndex(zhuFuYao[1]);
            this.fuYao[i2] = zhuGuaGongliuQing[fuYaoWuXin[1]] + tempFuYao[i2];
            formatAppLog("log", "at pages/list/list.vue:152", fuYaoWuXin);
            if (item == "0" || item == "2") {
              this.zhugua[i2] = "\u2585&#12288;\u2585 " + liuqing + zhuGuaYao + " " + this.zhuganShiYing[i2] + (item == "2" ? " X" : "");
            } else {
              this.zhugua[i2] = "\u2585\u2585\u2585 " + liuqing + zhuGuaYao + " " + this.zhuganShiYing[i2] + (item == "3" ? " \u3007" : "");
            }
          }
          let bianguanajia = sortdata.getBianGuaNajia(this.userArr);
          for (let i2 = 0; i2 < this.userArr.length; i2++) {
            let item = this.userArr.charAt(i2);
            let bianGuaYao = bianguanajia[i2];
            let wuxin = bianGuaYao[1];
            let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]];
            if (item == "0" || item == "3") {
              this.biangua[i2] = "\u2585&#12288;\u2585 " + liuqing + bianGuaYao + " " + this.bianganShiYing[i2];
            } else {
              this.biangua[i2] = "\u2585\u2585\u2585 " + liuqing + bianGuaYao + " " + this.bianganShiYing[i2];
            }
          }
          this.zhuguaName = zhuData[1] + " " + (zhuGuaGong == void 0 ? "" : zhuGuaGong);
          this.bianguaName = bianData[1] + " " + (bianGuaGong == void 0 ? "" : bianGuaGong);
        } else {
          this.$u.toast("\u5366\u540D\u4E0D\u5BF9");
        }
      },
      async testco() {
        const userdata = pn.importObject("userdata");
        try {
          const res = await userdata.sum(1, 2);
          formatAppLog("log", "at pages/list/list.vue:194", res);
          this.$u.toast(res);
        } catch (e) {
          formatAppLog("log", "at pages/list/list.vue:197", e);
        }
        pn.callFunction({
          name: "data"
        }).then((res) => {
          formatAppLog("log", "at pages/list/list.vue:202", res);
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_alert_tips = resolveEasycom(vue.resolveDynamicComponent("u-alert-tips"), __easycom_0$5);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_3$1);
    const _component_u_subsection = resolveEasycom(vue.resolveDynamicComponent("u-subsection"), __easycom_3);
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_0$3);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-demo" }, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_u_alert_tips, {
          type: "primary",
          title: "\u76F8\u540C timerId \u7684\u6309\u94AE\u4E00\u5B9A\u65F6\u95F4\u5185\u53EA\u80FD\u70B9\u51FB1\u6B21"
        })
      ]),
      vue.createElementVNode("view", { class: "btn-box" }, [
        vue.createVNode(_component_u_input, {
          modelValue: $data.inputValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputValue = $event),
          placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",
          "placeholder-class": "color:#4a4a4a"
        }, null, 8, ["modelValue"]),
        vue.createVNode(_component_u_button, {
          onClick: _cache[1] || (_cache[1] = ($event) => $options.btnClick("A3")),
          "timer-id": "A"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u67E5\u8BE2")
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_button, {
          onClick: _cache[2] || (_cache[2] = ($event) => $options.testco())
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u8BF7\u6C42\u4E91\u5BF9\u8C61\u7684\u65B9\u6CD5")
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", null, [
        vue.createCommentVNode(' <u-button @click="testco()">\u8BF7\u6C42\u4E91\u5BF9\u8C61\u7684\u65B9\u6CD5</u-button> '),
        vue.createVNode(_component_u_subsection, {
          list: $data.list,
          modelValue: $data.current,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.current = $event),
          "active-color": "#ff9900",
          mode: "button"
        }, null, 8, ["list", "modelValue"])
      ]),
      vue.createVNode(_component_u_row, { gutter: "0" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_col, { span: "1" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view")
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "2" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "XXX")
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "5" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, vue.toDisplayString($data.zhuguaName), 1)
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "3" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, vue.toDisplayString($data.bianguaName), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_u_row, { gutter: "0" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_col, { span: "1" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "\u795E")
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "2" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "\u3010\u4F0F\u5366\u3011")
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "5" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "\u3010\u4E3B\u5366\u3011")
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "3" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "\u3010\u53D8\u5366\u3011")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.userArr, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_u_row, { gutter: "0" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "1" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u59BB\u8D22")
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "demo-layout bg-purple-light" }, vue.toDisplayString($data.fuYao[index]), 1)
                ]),
                _: 2
              }, 1024),
              vue.createVNode(_component_u_col, {
                span: "5",
                align: "center"
              }, {
                default: vue.withCtx(() => [
                  vue.createCommentVNode(` 				<view v-if="item == '1' || item == '3'" class="demo-layout bg-purple-light">\u2585\u2585\u2585</view>\r
					<view v-else><view v-html="'\u2585&#12288;\u2585'" class="demo-layout bg-purple-light"></view></view> `),
                  vue.createElementVNode("view", {
                    class: "demo-layout bg-purple-light",
                    innerHTML: $data.zhugua[index]
                  }, null, 8, ["innerHTML"])
                ]),
                _: 2
              }, 1024),
              vue.createVNode(_component_u_col, {
                span: "4",
                align: "center"
              }, {
                default: vue.withCtx(() => [
                  vue.createCommentVNode(` 			<view v-if="item == '1' || item == '2'" class="demo-layout bg-purple-light">\u2585\u2585\u2585</view>\r
					<view v-else><view v-html="'\u2585&#12288;\u2585'" class="demo-layout bg-purple-light"></view></view> `),
                  vue.createElementVNode("view", {
                    class: "demo-layout bg-purple-light",
                    innerHTML: $data.biangua[index]
                  }, null, 8, ["innerHTML"])
                ]),
                _: 2
              }, 1024),
              vue.createCommentVNode(' 	<u-col span="2">\r\n					<view class="demo-layout bg-purple-light">{{chungua[index]}}</view>\r\n				</u-col> ')
            ]),
            _: 2
          }, 1024)
        ]);
      }), 256))
    ]);
  }
  var PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-7d5e07c6"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/pages/list/list.vue"]]);
  const _sfc_main$7 = {
    emits: ["click"],
    name: "u-section",
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: "\u66F4\u591A"
      },
      right: {
        type: Boolean,
        default: true
      },
      fontSize: {
        type: [Number, String],
        default: 28
      },
      bold: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: "#303133"
      },
      subColor: {
        type: String,
        default: "#909399"
      },
      showLine: {
        type: Boolean,
        default: true
      },
      lineColor: {
        type: String,
        default: ""
      },
      arrow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      lineStyle() {
        return {
          left: -(Number(this.fontSize) * 0.9) + "rpx",
          top: -(Number(this.fontSize) * (this.$u.os() == "ios" ? 0.14 : 0.15)) + "rpx"
        };
      }
    },
    methods: {
      rightClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-section" }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-section__title", {
          "u-section--line": $props.showLine
        }]),
        style: vue.normalizeStyle({
          fontWeight: $props.bold ? "bold" : "normal",
          color: $props.color,
          fontSize: $props.fontSize + "rpx",
          paddingLeft: $props.showLine ? $props.fontSize * 0.7 + "rpx" : 0
        })
      }, [
        $props.showLine ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-section__title__icon-wrap u-flex",
          style: vue.normalizeStyle([$options.lineStyle])
        }, [
          vue.createVNode(_component_u_icon, {
            top: "0",
            name: "column-line",
            size: $props.fontSize * 1.25,
            bold: "",
            color: $props.lineColor ? $props.lineColor : $props.color
          }, null, 8, ["size", "color"])
        ], 4)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("text", { class: "u-flex u-section__title__text" }, vue.toDisplayString($props.title), 1)
      ], 6),
      $props.right || _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-section__right-info",
        style: vue.normalizeStyle({
          color: $props.subColor
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.rightClick && $options.rightClick(...args))
      }, [
        _ctx.$slots.right ? vue.renderSlot(_ctx.$slots, "right", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createTextVNode(vue.toDisplayString($props.subTitle) + " ", 1),
          $props.arrow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-section__right-info__icon-arrow u-flex"
          }, [
            vue.createVNode(_component_u_icon, {
              name: "arrow-right",
              size: "24",
              color: $props.subColor
            }, null, 8, ["color"])
          ])) : vue.createCommentVNode("v-if", true)
        ], 64))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-36a8d027"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-section/u-section.vue"]]);
  const _sfc_main$6 = {
    name: "u-mask",
    emits: ["click"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: [Number, String],
        default: ""
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      zoom: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 300
      },
      maskClickAble: {
        type: Boolean,
        default: true
      },
      blur: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        zoomStyle: {
          transform: ""
        },
        scale: "scale(1.2, 1.2)"
      };
    },
    watch: {
      show(n2) {
        if (n2 && this.zoom) {
          this.zoomStyle.transform = "scale(1, 1)";
        } else if (!n2 && this.zoom) {
          this.zoomStyle.transform = this.scale;
        }
      }
    },
    computed: {
      maskStyle() {
        let style = {};
        style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        if (this.show)
          style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
        else
          style.zIndex = -1;
        style.transition = `all ${this.duration / 1e3}s ease-in-out`;
        if (Object.keys(this.customStyle).length)
          style = __spreadValues(__spreadValues({}, style), this.customStyle);
        return style;
      },
      filterStyle() {
        let { blur } = this;
        let style = {};
        if (blur) {
          style.backdropFilter = `blur(${blur}rpx)`;
        }
        return style;
      }
    },
    methods: {
      click() {
        if (!this.maskClickAble)
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-mask", {
        "u-mask-zoom": $props.zoom,
        "u-mask-show": $props.show
      }]),
      "hover-stop-propagation": "",
      style: vue.normalizeStyle([$options.maskStyle, $data.zoomStyle, $options.filterStyle]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args)),
      onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
      }, ["stop", "prevent"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 38);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-6049abea"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-mask/u-mask.vue"]]);
  const _sfc_main$5 = {
    name: "u-popup",
    emits: ["update:modelValue", "input", "open", "close"],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      mode: {
        type: String,
        default: "left"
      },
      mask: {
        type: Boolean,
        default: true
      },
      length: {
        type: [Number, String],
        default: "auto"
      },
      zoom: {
        type: Boolean,
        default: true
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      popup: {
        type: Boolean,
        default: true
      },
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: ""
      },
      closeable: {
        type: Boolean,
        default: false
      },
      closeIcon: {
        type: String,
        default: "close"
      },
      closeIconPos: {
        type: String,
        default: "top-right"
      },
      closeIconColor: {
        type: String,
        default: "#909399"
      },
      closeIconSize: {
        type: [String, Number],
        default: "30"
      },
      width: {
        type: String,
        default: ""
      },
      height: {
        type: String,
        default: ""
      },
      negativeTop: {
        type: [String, Number],
        default: 0
      },
      maskCustomStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      duration: {
        type: [String, Number],
        default: 250
      },
      blur: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        visibleSync: false,
        showDrawer: false,
        timer: null,
        closeFromInner: false
      };
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      style() {
        let style = {};
        if (this.mode == "left" || this.mode == "right") {
          style = {
            width: this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
            height: "100%",
            transform: `translate3D(${this.mode == "left" ? "-100%" : "100%"},0px,0px)`
          };
        } else if (this.mode == "top" || this.mode == "bottom") {
          style = {
            width: "100%",
            height: this.height ? this.getUnitValue(this.height) : this.getUnitValue(this.length),
            transform: `translate3D(0px,${this.mode == "top" ? "-100%" : "100%"},0px)`
          };
        }
        style.zIndex = this.uZindex;
        if (this.borderRadius) {
          switch (this.mode) {
            case "left":
              style.borderRadius = `0 ${this.borderRadius}rpx ${this.borderRadius}rpx 0`;
              break;
            case "top":
              style.borderRadius = `0 0 ${this.borderRadius}rpx ${this.borderRadius}rpx`;
              break;
            case "right":
              style.borderRadius = `${this.borderRadius}rpx 0 0 ${this.borderRadius}rpx`;
              break;
            case "bottom":
              style.borderRadius = `${this.borderRadius}rpx ${this.borderRadius}rpx 0 0`;
              break;
          }
          style.overflow = "hidden";
        }
        if (this.duration)
          style.transition = `all ${this.duration / 1e3}s linear`;
        return style;
      },
      centerStyle() {
        let style = {};
        style.width = this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length);
        style.height = this.height ? this.getUnitValue(this.height) : "auto";
        style.zIndex = this.uZindex;
        style.marginTop = `-${this.$u.addUnit(this.negativeTop)}`;
        if (this.borderRadius) {
          style.borderRadius = `${this.borderRadius}rpx`;
          style.overflow = "hidden";
        }
        return style;
      },
      uZindex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      }
    },
    watch: {
      valueCom: {
        immediate: true,
        handler(val) {
          if (val) {
            this.open();
          } else if (!this.closeFromInner) {
            this.close();
          }
          this.closeFromInner = false;
        }
      }
    },
    mounted() {
      this.valueCom && this.open();
    },
    methods: {
      getUnitValue(val) {
        if (/(%|px|rpx|auto)$/.test(val))
          return val;
        else
          return val + "rpx";
      },
      maskClick() {
        this.close();
      },
      close() {
        this.closeFromInner = true;
        this.change("showDrawer", "visibleSync", false);
      },
      modeCenterClose(mode) {
        if (mode != "center" || !this.maskCloseAble)
          return;
        this.close();
      },
      open() {
        this.change("visibleSync", "showDrawer", true);
      },
      change(param1, param2, status) {
        if (this.popup == true) {
          this.$emit("input", status);
          this.$emit("update:modelValue", status);
        }
        this[param1] = status;
        if (status) {
          this.$nextTick(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          });
        } else {
          this.timer = setTimeout(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          }, this.duration);
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_mask = resolveEasycom(vue.resolveDynamicComponent("u-mask"), __easycom_0$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    return $data.visibleSync ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      style: vue.normalizeStyle([$props.customStyle, {
        zIndex: $options.uZindex - 1
      }]),
      class: "u-drawer",
      "hover-stop-propagation": ""
    }, [
      vue.createVNode(_component_u_mask, {
        blur: $props.blur,
        duration: $props.duration,
        "custom-style": $props.maskCustomStyle,
        maskClickAble: $props.maskCloseAble,
        "z-index": $options.uZindex - 2,
        show: $data.showDrawer && $props.mask,
        onClick: $options.maskClick
      }, null, 8, ["blur", "duration", "custom-style", "maskClickAble", "z-index", "show", "onClick"]),
      vue.createCommentVNode(" \u79FB\u9664	@tap.stop.prevent "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-drawer-content", [
          $props.safeAreaInsetBottom ? "safe-area-inset-bottom" : "",
          "u-drawer-" + $props.mode,
          $data.showDrawer ? "u-drawer-content-visible" : "",
          $props.zoom && $props.mode == "center" ? "u-animation-zoom" : ""
        ]]),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.modeCenterClose($props.mode)),
        onTouchmove: _cache[4] || (_cache[4] = vue.withModifiers(() => {
        }, ["stop", "prevent"])),
        style: vue.normalizeStyle([$options.style])
      }, [
        $props.mode == "center" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-mode-center-box",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop", "prevent"])),
          onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop", "prevent"])),
          style: vue.normalizeStyle([$options.centerStyle])
        }, [
          $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            onClick: $options.close,
            class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]]),
            name: $props.closeIcon,
            color: $props.closeIconColor,
            size: $props.closeIconSize
          }, null, 8, ["onClick", "class", "name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("scroll-view", {
            class: "u-drawer__scroll-view",
            "scroll-y": "true"
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 36)) : (vue.openBlock(), vue.createElementBlock("scroll-view", {
          key: 1,
          class: "u-drawer__scroll-view",
          "scroll-y": "true"
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])),
        vue.createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args)),
          class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]])
        }, [
          $props.mode != "center" && $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: $props.closeIcon,
            color: $props.closeIconColor,
            size: $props.closeIconSize
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true)
        ], 2)
      ], 38)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-27202335"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-popup/u-popup.vue"]]);
  var provinces = [
    {
      code: "110000",
      name: "\u5317\u4EAC\u5E02"
    },
    {
      code: "120000",
      name: "\u5929\u6D25\u5E02"
    },
    {
      code: "130000",
      name: "\u6CB3\u5317\u7701"
    },
    {
      code: "140000",
      name: "\u5C71\u897F\u7701"
    },
    {
      code: "150000",
      name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A"
    },
    {
      code: "210000",
      name: "\u8FBD\u5B81\u7701"
    },
    {
      code: "220000",
      name: "\u5409\u6797\u7701"
    },
    {
      code: "230000",
      name: "\u9ED1\u9F99\u6C5F\u7701"
    },
    {
      code: "310000",
      name: "\u4E0A\u6D77\u5E02"
    },
    {
      code: "320000",
      name: "\u6C5F\u82CF\u7701"
    },
    {
      code: "330000",
      name: "\u6D59\u6C5F\u7701"
    },
    {
      code: "340000",
      name: "\u5B89\u5FBD\u7701"
    },
    {
      code: "350000",
      name: "\u798F\u5EFA\u7701"
    },
    {
      code: "360000",
      name: "\u6C5F\u897F\u7701"
    },
    {
      code: "370000",
      name: "\u5C71\u4E1C\u7701"
    },
    {
      code: "410000",
      name: "\u6CB3\u5357\u7701"
    },
    {
      code: "420000",
      name: "\u6E56\u5317\u7701"
    },
    {
      code: "430000",
      name: "\u6E56\u5357\u7701"
    },
    {
      code: "440000",
      name: "\u5E7F\u4E1C\u7701"
    },
    {
      code: "450000",
      name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A"
    },
    {
      code: "460000",
      name: "\u6D77\u5357\u7701"
    },
    {
      code: "500000",
      name: "\u91CD\u5E86\u5E02"
    },
    {
      code: "510000",
      name: "\u56DB\u5DDD\u7701"
    },
    {
      code: "520000",
      name: "\u8D35\u5DDE\u7701"
    },
    {
      code: "530000",
      name: "\u4E91\u5357\u7701"
    },
    {
      code: "540000",
      name: "\u897F\u85CF\u81EA\u6CBB\u533A"
    },
    {
      code: "610000",
      name: "\u9655\u897F\u7701"
    },
    {
      code: "620000",
      name: "\u7518\u8083\u7701"
    },
    {
      code: "630000",
      name: "\u9752\u6D77\u7701"
    },
    {
      code: "640000",
      name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A"
    },
    {
      code: "650000",
      name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A"
    },
    {
      code: "710000",
      name: "\u53F0\u6E7E\u7701"
    },
    {
      code: "810000",
      name: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"
    },
    {
      code: "820000",
      name: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
    }
  ];
  var citys = [
    [
      {
        code: "110100",
        name: "\u5317\u4EAC\u5E02"
      }
    ],
    [
      {
        code: "120100",
        name: "\u5929\u6D25\u5E02"
      }
    ],
    [
      {
        code: "130100",
        name: "\u77F3\u5BB6\u5E84\u5E02"
      },
      {
        code: "130200",
        name: "\u5510\u5C71\u5E02"
      },
      {
        code: "130300",
        name: "\u79E6\u7687\u5C9B\u5E02"
      },
      {
        code: "130400",
        name: "\u90AF\u90F8\u5E02"
      },
      {
        code: "130500",
        name: "\u90A2\u53F0\u5E02"
      },
      {
        code: "130600",
        name: "\u4FDD\u5B9A\u5E02"
      },
      {
        code: "130700",
        name: "\u5F20\u5BB6\u53E3\u5E02"
      },
      {
        code: "130800",
        name: "\u627F\u5FB7\u5E02"
      },
      {
        code: "130900",
        name: "\u6CA7\u5DDE\u5E02"
      },
      {
        code: "131000",
        name: "\u5ECA\u574A\u5E02"
      },
      {
        code: "131100",
        name: "\u8861\u6C34\u5E02"
      }
    ],
    [
      {
        code: "140100",
        name: "\u592A\u539F\u5E02"
      },
      {
        code: "140200",
        name: "\u5927\u540C\u5E02"
      },
      {
        code: "140300",
        name: "\u9633\u6CC9\u5E02"
      },
      {
        code: "140400",
        name: "\u957F\u6CBB\u5E02"
      },
      {
        code: "140500",
        name: "\u664B\u57CE\u5E02"
      },
      {
        code: "140600",
        name: "\u6714\u5DDE\u5E02"
      },
      {
        code: "140700",
        name: "\u664B\u4E2D\u5E02"
      },
      {
        code: "140800",
        name: "\u8FD0\u57CE\u5E02"
      },
      {
        code: "140900",
        name: "\u5FFB\u5DDE\u5E02"
      },
      {
        code: "141000",
        name: "\u4E34\u6C7E\u5E02"
      },
      {
        code: "141100",
        name: "\u5415\u6881\u5E02"
      }
    ],
    [
      {
        code: "150100",
        name: "\u547C\u548C\u6D69\u7279\u5E02"
      },
      {
        code: "150200",
        name: "\u5305\u5934\u5E02"
      },
      {
        code: "150300",
        name: "\u4E4C\u6D77\u5E02"
      },
      {
        code: "150400",
        name: "\u8D64\u5CF0\u5E02"
      },
      {
        code: "150500",
        name: "\u901A\u8FBD\u5E02"
      },
      {
        code: "150600",
        name: "\u9102\u5C14\u591A\u65AF\u5E02"
      },
      {
        code: "150700",
        name: "\u547C\u4F26\u8D1D\u5C14\u5E02"
      },
      {
        code: "150800",
        name: "\u5DF4\u5F66\u6DD6\u5C14\u5E02"
      },
      {
        code: "150900",
        name: "\u4E4C\u5170\u5BDF\u5E03\u5E02"
      },
      {
        code: "152200",
        name: "\u5174\u5B89\u76DF"
      },
      {
        code: "152500",
        name: "\u9521\u6797\u90ED\u52D2\u76DF"
      },
      {
        code: "152900",
        name: "\u963F\u62C9\u5584\u76DF"
      }
    ],
    [
      {
        code: "210100",
        name: "\u6C88\u9633\u5E02"
      },
      {
        code: "210200",
        name: "\u5927\u8FDE\u5E02"
      },
      {
        code: "210300",
        name: "\u978D\u5C71\u5E02"
      },
      {
        code: "210400",
        name: "\u629A\u987A\u5E02"
      },
      {
        code: "210500",
        name: "\u672C\u6EAA\u5E02"
      },
      {
        code: "210600",
        name: "\u4E39\u4E1C\u5E02"
      },
      {
        code: "210700",
        name: "\u9526\u5DDE\u5E02"
      },
      {
        code: "210800",
        name: "\u8425\u53E3\u5E02"
      },
      {
        code: "210900",
        name: "\u961C\u65B0\u5E02"
      },
      {
        code: "211000",
        name: "\u8FBD\u9633\u5E02"
      },
      {
        code: "211100",
        name: "\u76D8\u9526\u5E02"
      },
      {
        code: "211200",
        name: "\u94C1\u5CAD\u5E02"
      },
      {
        code: "211300",
        name: "\u671D\u9633\u5E02"
      },
      {
        code: "211400",
        name: "\u846B\u82A6\u5C9B\u5E02"
      }
    ],
    [
      {
        code: "220100",
        name: "\u957F\u6625\u5E02"
      },
      {
        code: "220200",
        name: "\u5409\u6797\u5E02"
      },
      {
        code: "220300",
        name: "\u56DB\u5E73\u5E02"
      },
      {
        code: "220400",
        name: "\u8FBD\u6E90\u5E02"
      },
      {
        code: "220500",
        name: "\u901A\u5316\u5E02"
      },
      {
        code: "220600",
        name: "\u767D\u5C71\u5E02"
      },
      {
        code: "220700",
        name: "\u677E\u539F\u5E02"
      },
      {
        code: "220800",
        name: "\u767D\u57CE\u5E02"
      },
      {
        code: "222400",
        name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "230100",
        name: "\u54C8\u5C14\u6EE8\u5E02"
      },
      {
        code: "230200",
        name: "\u9F50\u9F50\u54C8\u5C14\u5E02"
      },
      {
        code: "230300",
        name: "\u9E21\u897F\u5E02"
      },
      {
        code: "230400",
        name: "\u9E64\u5C97\u5E02"
      },
      {
        code: "230500",
        name: "\u53CC\u9E2D\u5C71\u5E02"
      },
      {
        code: "230600",
        name: "\u5927\u5E86\u5E02"
      },
      {
        code: "230700",
        name: "\u4F0A\u6625\u5E02"
      },
      {
        code: "230800",
        name: "\u4F73\u6728\u65AF\u5E02"
      },
      {
        code: "230900",
        name: "\u4E03\u53F0\u6CB3\u5E02"
      },
      {
        code: "231000",
        name: "\u7261\u4E39\u6C5F\u5E02"
      },
      {
        code: "231100",
        name: "\u9ED1\u6CB3\u5E02"
      },
      {
        code: "231200",
        name: "\u7EE5\u5316\u5E02"
      },
      {
        code: "232700",
        name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A"
      }
    ],
    [
      {
        code: "310100",
        name: "\u4E0A\u6D77\u5E02"
      }
    ],
    [
      {
        code: "320100",
        name: "\u5357\u4EAC\u5E02"
      },
      {
        code: "320200",
        name: "\u65E0\u9521\u5E02"
      },
      {
        code: "320300",
        name: "\u5F90\u5DDE\u5E02"
      },
      {
        code: "320400",
        name: "\u5E38\u5DDE\u5E02"
      },
      {
        code: "320500",
        name: "\u82CF\u5DDE\u5E02"
      },
      {
        code: "320600",
        name: "\u5357\u901A\u5E02"
      },
      {
        code: "320700",
        name: "\u8FDE\u4E91\u6E2F\u5E02"
      },
      {
        code: "320800",
        name: "\u6DEE\u5B89\u5E02"
      },
      {
        code: "320900",
        name: "\u76D0\u57CE\u5E02"
      },
      {
        code: "321000",
        name: "\u626C\u5DDE\u5E02"
      },
      {
        code: "321100",
        name: "\u9547\u6C5F\u5E02"
      },
      {
        code: "321200",
        name: "\u6CF0\u5DDE\u5E02"
      },
      {
        code: "321300",
        name: "\u5BBF\u8FC1\u5E02"
      }
    ],
    [
      {
        code: "330100",
        name: "\u676D\u5DDE\u5E02"
      },
      {
        code: "330200",
        name: "\u5B81\u6CE2\u5E02"
      },
      {
        code: "330300",
        name: "\u6E29\u5DDE\u5E02"
      },
      {
        code: "330400",
        name: "\u5609\u5174\u5E02"
      },
      {
        code: "330500",
        name: "\u6E56\u5DDE\u5E02"
      },
      {
        code: "330600",
        name: "\u7ECD\u5174\u5E02"
      },
      {
        code: "330700",
        name: "\u91D1\u534E\u5E02"
      },
      {
        code: "330800",
        name: "\u8862\u5DDE\u5E02"
      },
      {
        code: "330900",
        name: "\u821F\u5C71\u5E02"
      },
      {
        code: "331000",
        name: "\u53F0\u5DDE\u5E02"
      },
      {
        code: "331100",
        name: "\u4E3D\u6C34\u5E02"
      }
    ],
    [
      {
        code: "340100",
        name: "\u5408\u80A5\u5E02"
      },
      {
        code: "340200",
        name: "\u829C\u6E56\u5E02"
      },
      {
        code: "340300",
        name: "\u868C\u57E0\u5E02"
      },
      {
        code: "340400",
        name: "\u6DEE\u5357\u5E02"
      },
      {
        code: "340500",
        name: "\u9A6C\u978D\u5C71\u5E02"
      },
      {
        code: "340600",
        name: "\u6DEE\u5317\u5E02"
      },
      {
        code: "340700",
        name: "\u94DC\u9675\u5E02"
      },
      {
        code: "340800",
        name: "\u5B89\u5E86\u5E02"
      },
      {
        code: "341000",
        name: "\u9EC4\u5C71\u5E02"
      },
      {
        code: "341100",
        name: "\u6EC1\u5DDE\u5E02"
      },
      {
        code: "341200",
        name: "\u961C\u9633\u5E02"
      },
      {
        code: "341300",
        name: "\u5BBF\u5DDE\u5E02"
      },
      {
        code: "341500",
        name: "\u516D\u5B89\u5E02"
      },
      {
        code: "341600",
        name: "\u4EB3\u5DDE\u5E02"
      },
      {
        code: "341700",
        name: "\u6C60\u5DDE\u5E02"
      },
      {
        code: "341800",
        name: "\u5BA3\u57CE\u5E02"
      }
    ],
    [
      {
        code: "350100",
        name: "\u798F\u5DDE\u5E02"
      },
      {
        code: "350200",
        name: "\u53A6\u95E8\u5E02"
      },
      {
        code: "350300",
        name: "\u8386\u7530\u5E02"
      },
      {
        code: "350400",
        name: "\u4E09\u660E\u5E02"
      },
      {
        code: "350500",
        name: "\u6CC9\u5DDE\u5E02"
      },
      {
        code: "350600",
        name: "\u6F33\u5DDE\u5E02"
      },
      {
        code: "350700",
        name: "\u5357\u5E73\u5E02"
      },
      {
        code: "350800",
        name: "\u9F99\u5CA9\u5E02"
      },
      {
        code: "350900",
        name: "\u5B81\u5FB7\u5E02"
      }
    ],
    [
      {
        code: "360100",
        name: "\u5357\u660C\u5E02"
      },
      {
        code: "360200",
        name: "\u666F\u5FB7\u9547\u5E02"
      },
      {
        code: "360300",
        name: "\u840D\u4E61\u5E02"
      },
      {
        code: "360400",
        name: "\u4E5D\u6C5F\u5E02"
      },
      {
        code: "360500",
        name: "\u65B0\u4F59\u5E02"
      },
      {
        code: "360600",
        name: "\u9E70\u6F6D\u5E02"
      },
      {
        code: "360700",
        name: "\u8D63\u5DDE\u5E02"
      },
      {
        code: "360800",
        name: "\u5409\u5B89\u5E02"
      },
      {
        code: "360900",
        name: "\u5B9C\u6625\u5E02"
      },
      {
        code: "361000",
        name: "\u629A\u5DDE\u5E02"
      },
      {
        code: "361100",
        name: "\u4E0A\u9976\u5E02"
      }
    ],
    [
      {
        code: "370100",
        name: "\u6D4E\u5357\u5E02"
      },
      {
        code: "370200",
        name: "\u9752\u5C9B\u5E02"
      },
      {
        code: "370300",
        name: "\u6DC4\u535A\u5E02"
      },
      {
        code: "370400",
        name: "\u67A3\u5E84\u5E02"
      },
      {
        code: "370500",
        name: "\u4E1C\u8425\u5E02"
      },
      {
        code: "370600",
        name: "\u70DF\u53F0\u5E02"
      },
      {
        code: "370700",
        name: "\u6F4D\u574A\u5E02"
      },
      {
        code: "370800",
        name: "\u6D4E\u5B81\u5E02"
      },
      {
        code: "370900",
        name: "\u6CF0\u5B89\u5E02"
      },
      {
        code: "371000",
        name: "\u5A01\u6D77\u5E02"
      },
      {
        code: "371100",
        name: "\u65E5\u7167\u5E02"
      },
      {
        code: "371200",
        name: "\u83B1\u829C\u5E02"
      },
      {
        code: "371300",
        name: "\u4E34\u6C82\u5E02"
      },
      {
        code: "371400",
        name: "\u5FB7\u5DDE\u5E02"
      },
      {
        code: "371500",
        name: "\u804A\u57CE\u5E02"
      },
      {
        code: "371600",
        name: "\u6EE8\u5DDE\u5E02"
      },
      {
        code: "371700",
        name: "\u83CF\u6CFD\u5E02"
      }
    ],
    [
      {
        code: "410100",
        name: "\u90D1\u5DDE\u5E02"
      },
      {
        code: "410200",
        name: "\u5F00\u5C01\u5E02"
      },
      {
        code: "410300",
        name: "\u6D1B\u9633\u5E02"
      },
      {
        code: "410400",
        name: "\u5E73\u9876\u5C71\u5E02"
      },
      {
        code: "410500",
        name: "\u5B89\u9633\u5E02"
      },
      {
        code: "410600",
        name: "\u9E64\u58C1\u5E02"
      },
      {
        code: "410700",
        name: "\u65B0\u4E61\u5E02"
      },
      {
        code: "410800",
        name: "\u7126\u4F5C\u5E02"
      },
      {
        code: "410900",
        name: "\u6FEE\u9633\u5E02"
      },
      {
        code: "411000",
        name: "\u8BB8\u660C\u5E02"
      },
      {
        code: "411100",
        name: "\u6F2F\u6CB3\u5E02"
      },
      {
        code: "411200",
        name: "\u4E09\u95E8\u5CE1\u5E02"
      },
      {
        code: "411300",
        name: "\u5357\u9633\u5E02"
      },
      {
        code: "411400",
        name: "\u5546\u4E18\u5E02"
      },
      {
        code: "411500",
        name: "\u4FE1\u9633\u5E02"
      },
      {
        code: "411600",
        name: "\u5468\u53E3\u5E02"
      },
      {
        code: "411700",
        name: "\u9A7B\u9A6C\u5E97\u5E02"
      },
      {
        code: "419000",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
      }
    ],
    [
      {
        code: "420100",
        name: "\u6B66\u6C49\u5E02"
      },
      {
        code: "420200",
        name: "\u9EC4\u77F3\u5E02"
      },
      {
        code: "420300",
        name: "\u5341\u5830\u5E02"
      },
      {
        code: "420500",
        name: "\u5B9C\u660C\u5E02"
      },
      {
        code: "420600",
        name: "\u8944\u9633\u5E02"
      },
      {
        code: "420700",
        name: "\u9102\u5DDE\u5E02"
      },
      {
        code: "420800",
        name: "\u8346\u95E8\u5E02"
      },
      {
        code: "420900",
        name: "\u5B5D\u611F\u5E02"
      },
      {
        code: "421000",
        name: "\u8346\u5DDE\u5E02"
      },
      {
        code: "421100",
        name: "\u9EC4\u5188\u5E02"
      },
      {
        code: "421200",
        name: "\u54B8\u5B81\u5E02"
      },
      {
        code: "421300",
        name: "\u968F\u5DDE\u5E02"
      },
      {
        code: "422800",
        name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "429000",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
      }
    ],
    [
      {
        code: "430100",
        name: "\u957F\u6C99\u5E02"
      },
      {
        code: "430200",
        name: "\u682A\u6D32\u5E02"
      },
      {
        code: "430300",
        name: "\u6E58\u6F6D\u5E02"
      },
      {
        code: "430400",
        name: "\u8861\u9633\u5E02"
      },
      {
        code: "430500",
        name: "\u90B5\u9633\u5E02"
      },
      {
        code: "430600",
        name: "\u5CB3\u9633\u5E02"
      },
      {
        code: "430700",
        name: "\u5E38\u5FB7\u5E02"
      },
      {
        code: "430800",
        name: "\u5F20\u5BB6\u754C\u5E02"
      },
      {
        code: "430900",
        name: "\u76CA\u9633\u5E02"
      },
      {
        code: "431000",
        name: "\u90F4\u5DDE\u5E02"
      },
      {
        code: "431100",
        name: "\u6C38\u5DDE\u5E02"
      },
      {
        code: "431200",
        name: "\u6000\u5316\u5E02"
      },
      {
        code: "431300",
        name: "\u5A04\u5E95\u5E02"
      },
      {
        code: "433100",
        name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "440100",
        name: "\u5E7F\u5DDE\u5E02"
      },
      {
        code: "440200",
        name: "\u97F6\u5173\u5E02"
      },
      {
        code: "440300",
        name: "\u6DF1\u5733\u5E02"
      },
      {
        code: "440400",
        name: "\u73E0\u6D77\u5E02"
      },
      {
        code: "440500",
        name: "\u6C55\u5934\u5E02"
      },
      {
        code: "440600",
        name: "\u4F5B\u5C71\u5E02"
      },
      {
        code: "440700",
        name: "\u6C5F\u95E8\u5E02"
      },
      {
        code: "440800",
        name: "\u6E5B\u6C5F\u5E02"
      },
      {
        code: "440900",
        name: "\u8302\u540D\u5E02"
      },
      {
        code: "441200",
        name: "\u8087\u5E86\u5E02"
      },
      {
        code: "441300",
        name: "\u60E0\u5DDE\u5E02"
      },
      {
        code: "441400",
        name: "\u6885\u5DDE\u5E02"
      },
      {
        code: "441500",
        name: "\u6C55\u5C3E\u5E02"
      },
      {
        code: "441600",
        name: "\u6CB3\u6E90\u5E02"
      },
      {
        code: "441700",
        name: "\u9633\u6C5F\u5E02"
      },
      {
        code: "441800",
        name: "\u6E05\u8FDC\u5E02"
      },
      {
        code: "441900",
        name: "\u4E1C\u839E\u5E02"
      },
      {
        code: "442000",
        name: "\u4E2D\u5C71\u5E02"
      },
      {
        code: "445100",
        name: "\u6F6E\u5DDE\u5E02"
      },
      {
        code: "445200",
        name: "\u63ED\u9633\u5E02"
      },
      {
        code: "445300",
        name: "\u4E91\u6D6E\u5E02"
      }
    ],
    [
      {
        code: "450100",
        name: "\u5357\u5B81\u5E02"
      },
      {
        code: "450200",
        name: "\u67F3\u5DDE\u5E02"
      },
      {
        code: "450300",
        name: "\u6842\u6797\u5E02"
      },
      {
        code: "450400",
        name: "\u68A7\u5DDE\u5E02"
      },
      {
        code: "450500",
        name: "\u5317\u6D77\u5E02"
      },
      {
        code: "450600",
        name: "\u9632\u57CE\u6E2F\u5E02"
      },
      {
        code: "450700",
        name: "\u94A6\u5DDE\u5E02"
      },
      {
        code: "450800",
        name: "\u8D35\u6E2F\u5E02"
      },
      {
        code: "450900",
        name: "\u7389\u6797\u5E02"
      },
      {
        code: "451000",
        name: "\u767E\u8272\u5E02"
      },
      {
        code: "451100",
        name: "\u8D3A\u5DDE\u5E02"
      },
      {
        code: "451200",
        name: "\u6CB3\u6C60\u5E02"
      },
      {
        code: "451300",
        name: "\u6765\u5BBE\u5E02"
      },
      {
        code: "451400",
        name: "\u5D07\u5DE6\u5E02"
      }
    ],
    [
      {
        code: "460100",
        name: "\u6D77\u53E3\u5E02"
      },
      {
        code: "460200",
        name: "\u4E09\u4E9A\u5E02"
      },
      {
        code: "460300",
        name: "\u4E09\u6C99\u5E02"
      },
      {
        code: "460400",
        name: "\u510B\u5DDE\u5E02"
      },
      {
        code: "469000",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
      }
    ],
    [
      {
        code: "500100",
        name: "\u91CD\u5E86\u5E02"
      },
      {
        code: "500200",
        name: "\u53BF"
      }
    ],
    [
      {
        code: "510100",
        name: "\u6210\u90FD\u5E02"
      },
      {
        code: "510300",
        name: "\u81EA\u8D21\u5E02"
      },
      {
        code: "510400",
        name: "\u6500\u679D\u82B1\u5E02"
      },
      {
        code: "510500",
        name: "\u6CF8\u5DDE\u5E02"
      },
      {
        code: "510600",
        name: "\u5FB7\u9633\u5E02"
      },
      {
        code: "510700",
        name: "\u7EF5\u9633\u5E02"
      },
      {
        code: "510800",
        name: "\u5E7F\u5143\u5E02"
      },
      {
        code: "510900",
        name: "\u9042\u5B81\u5E02"
      },
      {
        code: "511000",
        name: "\u5185\u6C5F\u5E02"
      },
      {
        code: "511100",
        name: "\u4E50\u5C71\u5E02"
      },
      {
        code: "511300",
        name: "\u5357\u5145\u5E02"
      },
      {
        code: "511400",
        name: "\u7709\u5C71\u5E02"
      },
      {
        code: "511500",
        name: "\u5B9C\u5BBE\u5E02"
      },
      {
        code: "511600",
        name: "\u5E7F\u5B89\u5E02"
      },
      {
        code: "511700",
        name: "\u8FBE\u5DDE\u5E02"
      },
      {
        code: "511800",
        name: "\u96C5\u5B89\u5E02"
      },
      {
        code: "511900",
        name: "\u5DF4\u4E2D\u5E02"
      },
      {
        code: "512000",
        name: "\u8D44\u9633\u5E02"
      },
      {
        code: "513200",
        name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "513300",
        name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "513400",
        name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "520100",
        name: "\u8D35\u9633\u5E02"
      },
      {
        code: "520200",
        name: "\u516D\u76D8\u6C34\u5E02"
      },
      {
        code: "520300",
        name: "\u9075\u4E49\u5E02"
      },
      {
        code: "520400",
        name: "\u5B89\u987A\u5E02"
      },
      {
        code: "520500",
        name: "\u6BD5\u8282\u5E02"
      },
      {
        code: "520600",
        name: "\u94DC\u4EC1\u5E02"
      },
      {
        code: "522300",
        name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "522600",
        name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "522700",
        name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "530100",
        name: "\u6606\u660E\u5E02"
      },
      {
        code: "530300",
        name: "\u66F2\u9756\u5E02"
      },
      {
        code: "530400",
        name: "\u7389\u6EAA\u5E02"
      },
      {
        code: "530500",
        name: "\u4FDD\u5C71\u5E02"
      },
      {
        code: "530600",
        name: "\u662D\u901A\u5E02"
      },
      {
        code: "530700",
        name: "\u4E3D\u6C5F\u5E02"
      },
      {
        code: "530800",
        name: "\u666E\u6D31\u5E02"
      },
      {
        code: "530900",
        name: "\u4E34\u6CA7\u5E02"
      },
      {
        code: "532300",
        name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "532500",
        name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "532600",
        name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "532800",
        name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "532900",
        name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "533100",
        name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "533300",
        name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "533400",
        name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "540100",
        name: "\u62C9\u8428\u5E02"
      },
      {
        code: "540200",
        name: "\u65E5\u5580\u5219\u5E02"
      },
      {
        code: "540300",
        name: "\u660C\u90FD\u5E02"
      },
      {
        code: "540400",
        name: "\u6797\u829D\u5E02"
      },
      {
        code: "540500",
        name: "\u5C71\u5357\u5E02"
      },
      {
        code: "542400",
        name: "\u90A3\u66F2\u5730\u533A"
      },
      {
        code: "542500",
        name: "\u963F\u91CC\u5730\u533A"
      }
    ],
    [
      {
        code: "610100",
        name: "\u897F\u5B89\u5E02"
      },
      {
        code: "610200",
        name: "\u94DC\u5DDD\u5E02"
      },
      {
        code: "610300",
        name: "\u5B9D\u9E21\u5E02"
      },
      {
        code: "610400",
        name: "\u54B8\u9633\u5E02"
      },
      {
        code: "610500",
        name: "\u6E2D\u5357\u5E02"
      },
      {
        code: "610600",
        name: "\u5EF6\u5B89\u5E02"
      },
      {
        code: "610700",
        name: "\u6C49\u4E2D\u5E02"
      },
      {
        code: "610800",
        name: "\u6986\u6797\u5E02"
      },
      {
        code: "610900",
        name: "\u5B89\u5EB7\u5E02"
      },
      {
        code: "611000",
        name: "\u5546\u6D1B\u5E02"
      }
    ],
    [
      {
        code: "620100",
        name: "\u5170\u5DDE\u5E02"
      },
      {
        code: "620200",
        name: "\u5609\u5CEA\u5173\u5E02"
      },
      {
        code: "620300",
        name: "\u91D1\u660C\u5E02"
      },
      {
        code: "620400",
        name: "\u767D\u94F6\u5E02"
      },
      {
        code: "620500",
        name: "\u5929\u6C34\u5E02"
      },
      {
        code: "620600",
        name: "\u6B66\u5A01\u5E02"
      },
      {
        code: "620700",
        name: "\u5F20\u6396\u5E02"
      },
      {
        code: "620800",
        name: "\u5E73\u51C9\u5E02"
      },
      {
        code: "620900",
        name: "\u9152\u6CC9\u5E02"
      },
      {
        code: "621000",
        name: "\u5E86\u9633\u5E02"
      },
      {
        code: "621100",
        name: "\u5B9A\u897F\u5E02"
      },
      {
        code: "621200",
        name: "\u9647\u5357\u5E02"
      },
      {
        code: "622900",
        name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "623000",
        name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "630100",
        name: "\u897F\u5B81\u5E02"
      },
      {
        code: "630200",
        name: "\u6D77\u4E1C\u5E02"
      },
      {
        code: "632200",
        name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "632300",
        name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "632500",
        name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "632600",
        name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "632700",
        name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "632800",
        name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE"
      }
    ],
    [
      {
        code: "640100",
        name: "\u94F6\u5DDD\u5E02"
      },
      {
        code: "640200",
        name: "\u77F3\u5634\u5C71\u5E02"
      },
      {
        code: "640300",
        name: "\u5434\u5FE0\u5E02"
      },
      {
        code: "640400",
        name: "\u56FA\u539F\u5E02"
      },
      {
        code: "640500",
        name: "\u4E2D\u536B\u5E02"
      }
    ],
    [
      {
        code: "650100",
        name: "\u4E4C\u9C81\u6728\u9F50\u5E02"
      },
      {
        code: "650200",
        name: "\u514B\u62C9\u739B\u4F9D\u5E02"
      },
      {
        code: "650400",
        name: "\u5410\u9C81\u756A\u5E02"
      },
      {
        code: "650500",
        name: "\u54C8\u5BC6\u5E02"
      },
      {
        code: "652300",
        name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE"
      },
      {
        code: "652700",
        name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE"
      },
      {
        code: "652800",
        name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE"
      },
      {
        code: "652900",
        name: "\u963F\u514B\u82CF\u5730\u533A"
      },
      {
        code: "653000",
        name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE"
      },
      {
        code: "653100",
        name: "\u5580\u4EC0\u5730\u533A"
      },
      {
        code: "653200",
        name: "\u548C\u7530\u5730\u533A"
      },
      {
        code: "654000",
        name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE"
      },
      {
        code: "654200",
        name: "\u5854\u57CE\u5730\u533A"
      },
      {
        code: "654300",
        name: "\u963F\u52D2\u6CF0\u5730\u533A"
      },
      {
        code: "659000",
        name: "\u81EA\u6CBB\u533A\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
      }
    ],
    [
      {
        code: "710100",
        name: "\u53F0\u5317\u5E02"
      },
      {
        code: "710200",
        name: "\u9AD8\u96C4\u5E02"
      },
      {
        code: "710300",
        name: "\u53F0\u5357\u5E02"
      },
      {
        code: "710400",
        name: "\u53F0\u4E2D\u5E02"
      },
      {
        code: "710600",
        name: "\u5357\u6295\u53BF"
      },
      {
        code: "710700",
        name: "\u57FA\u9686\u5E02"
      },
      {
        code: "710800",
        name: "\u65B0\u7AF9\u5E02"
      },
      {
        code: "710900",
        name: "\u5609\u4E49\u5E02"
      },
      {
        code: "711100",
        name: "\u65B0\u5317\u5E02"
      },
      {
        code: "711200",
        name: "\u5B9C\u5170\u53BF"
      },
      {
        code: "711300",
        name: "\u65B0\u7AF9\u53BF"
      },
      {
        code: "711400",
        name: "\u6843\u56ED\u5E02"
      },
      {
        code: "711500",
        name: "\u82D7\u6817\u53BF"
      },
      {
        code: "711700",
        name: "\u5F70\u5316\u53BF"
      },
      {
        code: "711900",
        name: "\u5609\u4E49\u53BF"
      },
      {
        code: "712100",
        name: "\u4E91\u6797\u53BF"
      },
      {
        code: "712400",
        name: "\u5C4F\u4E1C\u53BF"
      },
      {
        code: "712500",
        name: "\u53F0\u4E1C\u53BF"
      },
      {
        code: "712600",
        name: "\u82B1\u83B2\u53BF"
      },
      {
        code: "712700",
        name: "\u6F8E\u6E56\u53BF"
      }
    ],
    [
      {
        code: "810100",
        name: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"
      }
    ],
    [
      {
        code: "820100",
        name: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
      }
    ]
  ];
  var areas = [
    [
      [
        {
          code: "110101",
          name: "\u4E1C\u57CE\u533A"
        },
        {
          code: "110102",
          name: "\u897F\u57CE\u533A"
        },
        {
          code: "110105",
          name: "\u671D\u9633\u533A"
        },
        {
          code: "110106",
          name: "\u4E30\u53F0\u533A"
        },
        {
          code: "110107",
          name: "\u77F3\u666F\u5C71\u533A"
        },
        {
          code: "110108",
          name: "\u6D77\u6DC0\u533A"
        },
        {
          code: "110109",
          name: "\u95E8\u5934\u6C9F\u533A"
        },
        {
          code: "110111",
          name: "\u623F\u5C71\u533A"
        },
        {
          code: "110112",
          name: "\u901A\u5DDE\u533A"
        },
        {
          code: "110113",
          name: "\u987A\u4E49\u533A"
        },
        {
          code: "110114",
          name: "\u660C\u5E73\u533A"
        },
        {
          code: "110115",
          name: "\u5927\u5174\u533A"
        },
        {
          code: "110116",
          name: "\u6000\u67D4\u533A"
        },
        {
          code: "110117",
          name: "\u5E73\u8C37\u533A"
        },
        {
          code: "110118",
          name: "\u5BC6\u4E91\u533A"
        },
        {
          code: "110119",
          name: "\u5EF6\u5E86\u533A"
        }
      ]
    ],
    [
      [
        {
          code: "120101",
          name: "\u548C\u5E73\u533A"
        },
        {
          code: "120102",
          name: "\u6CB3\u4E1C\u533A"
        },
        {
          code: "120103",
          name: "\u6CB3\u897F\u533A"
        },
        {
          code: "120104",
          name: "\u5357\u5F00\u533A"
        },
        {
          code: "120105",
          name: "\u6CB3\u5317\u533A"
        },
        {
          code: "120106",
          name: "\u7EA2\u6865\u533A"
        },
        {
          code: "120110",
          name: "\u4E1C\u4E3D\u533A"
        },
        {
          code: "120111",
          name: "\u897F\u9752\u533A"
        },
        {
          code: "120112",
          name: "\u6D25\u5357\u533A"
        },
        {
          code: "120113",
          name: "\u5317\u8FB0\u533A"
        },
        {
          code: "120114",
          name: "\u6B66\u6E05\u533A"
        },
        {
          code: "120115",
          name: "\u5B9D\u577B\u533A"
        },
        {
          code: "120116",
          name: "\u6EE8\u6D77\u65B0\u533A"
        },
        {
          code: "120117",
          name: "\u5B81\u6CB3\u533A"
        },
        {
          code: "120118",
          name: "\u9759\u6D77\u533A"
        },
        {
          code: "120119",
          name: "\u84DF\u5DDE\u533A"
        }
      ]
    ],
    [
      [
        {
          code: "130102",
          name: "\u957F\u5B89\u533A"
        },
        {
          code: "130104",
          name: "\u6865\u897F\u533A"
        },
        {
          code: "130105",
          name: "\u65B0\u534E\u533A"
        },
        {
          code: "130107",
          name: "\u4E95\u9649\u77FF\u533A"
        },
        {
          code: "130108",
          name: "\u88D5\u534E\u533A"
        },
        {
          code: "130109",
          name: "\u85C1\u57CE\u533A"
        },
        {
          code: "130110",
          name: "\u9E7F\u6CC9\u533A"
        },
        {
          code: "130111",
          name: "\u683E\u57CE\u533A"
        },
        {
          code: "130121",
          name: "\u4E95\u9649\u53BF"
        },
        {
          code: "130123",
          name: "\u6B63\u5B9A\u53BF"
        },
        {
          code: "130125",
          name: "\u884C\u5510\u53BF"
        },
        {
          code: "130126",
          name: "\u7075\u5BFF\u53BF"
        },
        {
          code: "130127",
          name: "\u9AD8\u9091\u53BF"
        },
        {
          code: "130128",
          name: "\u6DF1\u6CFD\u53BF"
        },
        {
          code: "130129",
          name: "\u8D5E\u7687\u53BF"
        },
        {
          code: "130130",
          name: "\u65E0\u6781\u53BF"
        },
        {
          code: "130131",
          name: "\u5E73\u5C71\u53BF"
        },
        {
          code: "130132",
          name: "\u5143\u6C0F\u53BF"
        },
        {
          code: "130133",
          name: "\u8D75\u53BF"
        },
        {
          code: "130181",
          name: "\u8F9B\u96C6\u5E02"
        },
        {
          code: "130183",
          name: "\u664B\u5DDE\u5E02"
        },
        {
          code: "130184",
          name: "\u65B0\u4E50\u5E02"
        }
      ],
      [
        {
          code: "130202",
          name: "\u8DEF\u5357\u533A"
        },
        {
          code: "130203",
          name: "\u8DEF\u5317\u533A"
        },
        {
          code: "130204",
          name: "\u53E4\u51B6\u533A"
        },
        {
          code: "130205",
          name: "\u5F00\u5E73\u533A"
        },
        {
          code: "130207",
          name: "\u4E30\u5357\u533A"
        },
        {
          code: "130208",
          name: "\u4E30\u6DA6\u533A"
        },
        {
          code: "130209",
          name: "\u66F9\u5983\u7538\u533A"
        },
        {
          code: "130223",
          name: "\u6EE6\u53BF"
        },
        {
          code: "130224",
          name: "\u6EE6\u5357\u53BF"
        },
        {
          code: "130225",
          name: "\u4E50\u4EAD\u53BF"
        },
        {
          code: "130227",
          name: "\u8FC1\u897F\u53BF"
        },
        {
          code: "130229",
          name: "\u7389\u7530\u53BF"
        },
        {
          code: "130281",
          name: "\u9075\u5316\u5E02"
        },
        {
          code: "130283",
          name: "\u8FC1\u5B89\u5E02"
        }
      ],
      [
        {
          code: "130302",
          name: "\u6D77\u6E2F\u533A"
        },
        {
          code: "130303",
          name: "\u5C71\u6D77\u5173\u533A"
        },
        {
          code: "130304",
          name: "\u5317\u6234\u6CB3\u533A"
        },
        {
          code: "130306",
          name: "\u629A\u5B81\u533A"
        },
        {
          code: "130321",
          name: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "130322",
          name: "\u660C\u9ECE\u53BF"
        },
        {
          code: "130324",
          name: "\u5362\u9F99\u53BF"
        }
      ],
      [
        {
          code: "130402",
          name: "\u90AF\u5C71\u533A"
        },
        {
          code: "130403",
          name: "\u4E1B\u53F0\u533A"
        },
        {
          code: "130404",
          name: "\u590D\u5174\u533A"
        },
        {
          code: "130406",
          name: "\u5CF0\u5CF0\u77FF\u533A"
        },
        {
          code: "130407",
          name: "\u80A5\u4E61\u533A"
        },
        {
          code: "130408",
          name: "\u6C38\u5E74\u533A"
        },
        {
          code: "130423",
          name: "\u4E34\u6F33\u53BF"
        },
        {
          code: "130424",
          name: "\u6210\u5B89\u53BF"
        },
        {
          code: "130425",
          name: "\u5927\u540D\u53BF"
        },
        {
          code: "130426",
          name: "\u6D89\u53BF"
        },
        {
          code: "130427",
          name: "\u78C1\u53BF"
        },
        {
          code: "130430",
          name: "\u90B1\u53BF"
        },
        {
          code: "130431",
          name: "\u9E21\u6CFD\u53BF"
        },
        {
          code: "130432",
          name: "\u5E7F\u5E73\u53BF"
        },
        {
          code: "130433",
          name: "\u9986\u9676\u53BF"
        },
        {
          code: "130434",
          name: "\u9B4F\u53BF"
        },
        {
          code: "130435",
          name: "\u66F2\u5468\u53BF"
        },
        {
          code: "130481",
          name: "\u6B66\u5B89\u5E02"
        }
      ],
      [
        {
          code: "130502",
          name: "\u6865\u4E1C\u533A"
        },
        {
          code: "130503",
          name: "\u6865\u897F\u533A"
        },
        {
          code: "130521",
          name: "\u90A2\u53F0\u53BF"
        },
        {
          code: "130522",
          name: "\u4E34\u57CE\u53BF"
        },
        {
          code: "130523",
          name: "\u5185\u4E18\u53BF"
        },
        {
          code: "130524",
          name: "\u67CF\u4E61\u53BF"
        },
        {
          code: "130525",
          name: "\u9686\u5C27\u53BF"
        },
        {
          code: "130526",
          name: "\u4EFB\u53BF"
        },
        {
          code: "130527",
          name: "\u5357\u548C\u53BF"
        },
        {
          code: "130528",
          name: "\u5B81\u664B\u53BF"
        },
        {
          code: "130529",
          name: "\u5DE8\u9E7F\u53BF"
        },
        {
          code: "130530",
          name: "\u65B0\u6CB3\u53BF"
        },
        {
          code: "130531",
          name: "\u5E7F\u5B97\u53BF"
        },
        {
          code: "130532",
          name: "\u5E73\u4E61\u53BF"
        },
        {
          code: "130533",
          name: "\u5A01\u53BF"
        },
        {
          code: "130534",
          name: "\u6E05\u6CB3\u53BF"
        },
        {
          code: "130535",
          name: "\u4E34\u897F\u53BF"
        },
        {
          code: "130581",
          name: "\u5357\u5BAB\u5E02"
        },
        {
          code: "130582",
          name: "\u6C99\u6CB3\u5E02"
        }
      ],
      [
        {
          code: "130602",
          name: "\u7ADE\u79C0\u533A"
        },
        {
          code: "130606",
          name: "\u83B2\u6C60\u533A"
        },
        {
          code: "130607",
          name: "\u6EE1\u57CE\u533A"
        },
        {
          code: "130608",
          name: "\u6E05\u82D1\u533A"
        },
        {
          code: "130609",
          name: "\u5F90\u6C34\u533A"
        },
        {
          code: "130623",
          name: "\u6D9E\u6C34\u53BF"
        },
        {
          code: "130624",
          name: "\u961C\u5E73\u53BF"
        },
        {
          code: "130626",
          name: "\u5B9A\u5174\u53BF"
        },
        {
          code: "130627",
          name: "\u5510\u53BF"
        },
        {
          code: "130628",
          name: "\u9AD8\u9633\u53BF"
        },
        {
          code: "130629",
          name: "\u5BB9\u57CE\u53BF"
        },
        {
          code: "130630",
          name: "\u6D9E\u6E90\u53BF"
        },
        {
          code: "130631",
          name: "\u671B\u90FD\u53BF"
        },
        {
          code: "130632",
          name: "\u5B89\u65B0\u53BF"
        },
        {
          code: "130633",
          name: "\u6613\u53BF"
        },
        {
          code: "130634",
          name: "\u66F2\u9633\u53BF"
        },
        {
          code: "130635",
          name: "\u8821\u53BF"
        },
        {
          code: "130636",
          name: "\u987A\u5E73\u53BF"
        },
        {
          code: "130637",
          name: "\u535A\u91CE\u53BF"
        },
        {
          code: "130638",
          name: "\u96C4\u53BF"
        },
        {
          code: "130681",
          name: "\u6DBF\u5DDE\u5E02"
        },
        {
          code: "130682",
          name: "\u5B9A\u5DDE\u5E02"
        },
        {
          code: "130683",
          name: "\u5B89\u56FD\u5E02"
        },
        {
          code: "130684",
          name: "\u9AD8\u7891\u5E97\u5E02"
        }
      ],
      [
        {
          code: "130702",
          name: "\u6865\u4E1C\u533A"
        },
        {
          code: "130703",
          name: "\u6865\u897F\u533A"
        },
        {
          code: "130705",
          name: "\u5BA3\u5316\u533A"
        },
        {
          code: "130706",
          name: "\u4E0B\u82B1\u56ED\u533A"
        },
        {
          code: "130708",
          name: "\u4E07\u5168\u533A"
        },
        {
          code: "130709",
          name: "\u5D07\u793C\u533A"
        },
        {
          code: "130722",
          name: "\u5F20\u5317\u53BF"
        },
        {
          code: "130723",
          name: "\u5EB7\u4FDD\u53BF"
        },
        {
          code: "130724",
          name: "\u6CBD\u6E90\u53BF"
        },
        {
          code: "130725",
          name: "\u5C1A\u4E49\u53BF"
        },
        {
          code: "130726",
          name: "\u851A\u53BF"
        },
        {
          code: "130727",
          name: "\u9633\u539F\u53BF"
        },
        {
          code: "130728",
          name: "\u6000\u5B89\u53BF"
        },
        {
          code: "130730",
          name: "\u6000\u6765\u53BF"
        },
        {
          code: "130731",
          name: "\u6DBF\u9E7F\u53BF"
        },
        {
          code: "130732",
          name: "\u8D64\u57CE\u53BF"
        }
      ],
      [
        {
          code: "130802",
          name: "\u53CC\u6865\u533A"
        },
        {
          code: "130803",
          name: "\u53CC\u6EE6\u533A"
        },
        {
          code: "130804",
          name: "\u9E70\u624B\u8425\u5B50\u77FF\u533A"
        },
        {
          code: "130821",
          name: "\u627F\u5FB7\u53BF"
        },
        {
          code: "130822",
          name: "\u5174\u9686\u53BF"
        },
        {
          code: "130824",
          name: "\u6EE6\u5E73\u53BF"
        },
        {
          code: "130825",
          name: "\u9686\u5316\u53BF"
        },
        {
          code: "130826",
          name: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "130827",
          name: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "130828",
          name: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "130881",
          name: "\u5E73\u6CC9\u5E02"
        }
      ],
      [
        {
          code: "130902",
          name: "\u65B0\u534E\u533A"
        },
        {
          code: "130903",
          name: "\u8FD0\u6CB3\u533A"
        },
        {
          code: "130921",
          name: "\u6CA7\u53BF"
        },
        {
          code: "130922",
          name: "\u9752\u53BF"
        },
        {
          code: "130923",
          name: "\u4E1C\u5149\u53BF"
        },
        {
          code: "130924",
          name: "\u6D77\u5174\u53BF"
        },
        {
          code: "130925",
          name: "\u76D0\u5C71\u53BF"
        },
        {
          code: "130926",
          name: "\u8083\u5B81\u53BF"
        },
        {
          code: "130927",
          name: "\u5357\u76AE\u53BF"
        },
        {
          code: "130928",
          name: "\u5434\u6865\u53BF"
        },
        {
          code: "130929",
          name: "\u732E\u53BF"
        },
        {
          code: "130930",
          name: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "130981",
          name: "\u6CCA\u5934\u5E02"
        },
        {
          code: "130982",
          name: "\u4EFB\u4E18\u5E02"
        },
        {
          code: "130983",
          name: "\u9EC4\u9A85\u5E02"
        },
        {
          code: "130984",
          name: "\u6CB3\u95F4\u5E02"
        }
      ],
      [
        {
          code: "131002",
          name: "\u5B89\u6B21\u533A"
        },
        {
          code: "131003",
          name: "\u5E7F\u9633\u533A"
        },
        {
          code: "131022",
          name: "\u56FA\u5B89\u53BF"
        },
        {
          code: "131023",
          name: "\u6C38\u6E05\u53BF"
        },
        {
          code: "131024",
          name: "\u9999\u6CB3\u53BF"
        },
        {
          code: "131025",
          name: "\u5927\u57CE\u53BF"
        },
        {
          code: "131026",
          name: "\u6587\u5B89\u53BF"
        },
        {
          code: "131028",
          name: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "131081",
          name: "\u9738\u5DDE\u5E02"
        },
        {
          code: "131082",
          name: "\u4E09\u6CB3\u5E02"
        }
      ],
      [
        {
          code: "131102",
          name: "\u6843\u57CE\u533A"
        },
        {
          code: "131103",
          name: "\u5180\u5DDE\u533A"
        },
        {
          code: "131121",
          name: "\u67A3\u5F3A\u53BF"
        },
        {
          code: "131122",
          name: "\u6B66\u9091\u53BF"
        },
        {
          code: "131123",
          name: "\u6B66\u5F3A\u53BF"
        },
        {
          code: "131124",
          name: "\u9976\u9633\u53BF"
        },
        {
          code: "131125",
          name: "\u5B89\u5E73\u53BF"
        },
        {
          code: "131126",
          name: "\u6545\u57CE\u53BF"
        },
        {
          code: "131127",
          name: "\u666F\u53BF"
        },
        {
          code: "131128",
          name: "\u961C\u57CE\u53BF"
        },
        {
          code: "131182",
          name: "\u6DF1\u5DDE\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "140105",
          name: "\u5C0F\u5E97\u533A"
        },
        {
          code: "140106",
          name: "\u8FCE\u6CFD\u533A"
        },
        {
          code: "140107",
          name: "\u674F\u82B1\u5CAD\u533A"
        },
        {
          code: "140108",
          name: "\u5C16\u8349\u576A\u533A"
        },
        {
          code: "140109",
          name: "\u4E07\u67CF\u6797\u533A"
        },
        {
          code: "140110",
          name: "\u664B\u6E90\u533A"
        },
        {
          code: "140121",
          name: "\u6E05\u5F90\u53BF"
        },
        {
          code: "140122",
          name: "\u9633\u66F2\u53BF"
        },
        {
          code: "140123",
          name: "\u5A04\u70E6\u53BF"
        },
        {
          code: "140181",
          name: "\u53E4\u4EA4\u5E02"
        }
      ],
      [
        {
          code: "140202",
          name: "\u57CE\u533A"
        },
        {
          code: "140203",
          name: "\u77FF\u533A"
        },
        {
          code: "140211",
          name: "\u5357\u90CA\u533A"
        },
        {
          code: "140212",
          name: "\u65B0\u8363\u533A"
        },
        {
          code: "140221",
          name: "\u9633\u9AD8\u53BF"
        },
        {
          code: "140222",
          name: "\u5929\u9547\u53BF"
        },
        {
          code: "140223",
          name: "\u5E7F\u7075\u53BF"
        },
        {
          code: "140224",
          name: "\u7075\u4E18\u53BF"
        },
        {
          code: "140225",
          name: "\u6D51\u6E90\u53BF"
        },
        {
          code: "140226",
          name: "\u5DE6\u4E91\u53BF"
        },
        {
          code: "140227",
          name: "\u5927\u540C\u53BF"
        }
      ],
      [
        {
          code: "140302",
          name: "\u57CE\u533A"
        },
        {
          code: "140303",
          name: "\u77FF\u533A"
        },
        {
          code: "140311",
          name: "\u90CA\u533A"
        },
        {
          code: "140321",
          name: "\u5E73\u5B9A\u53BF"
        },
        {
          code: "140322",
          name: "\u76C2\u53BF"
        }
      ],
      [
        {
          code: "140402",
          name: "\u57CE\u533A"
        },
        {
          code: "140411",
          name: "\u90CA\u533A"
        },
        {
          code: "140421",
          name: "\u957F\u6CBB\u53BF"
        },
        {
          code: "140423",
          name: "\u8944\u57A3\u53BF"
        },
        {
          code: "140424",
          name: "\u5C6F\u7559\u53BF"
        },
        {
          code: "140425",
          name: "\u5E73\u987A\u53BF"
        },
        {
          code: "140426",
          name: "\u9ECE\u57CE\u53BF"
        },
        {
          code: "140427",
          name: "\u58F6\u5173\u53BF"
        },
        {
          code: "140428",
          name: "\u957F\u5B50\u53BF"
        },
        {
          code: "140429",
          name: "\u6B66\u4E61\u53BF"
        },
        {
          code: "140430",
          name: "\u6C81\u53BF"
        },
        {
          code: "140431",
          name: "\u6C81\u6E90\u53BF"
        },
        {
          code: "140481",
          name: "\u6F5E\u57CE\u5E02"
        }
      ],
      [
        {
          code: "140502",
          name: "\u57CE\u533A"
        },
        {
          code: "140521",
          name: "\u6C81\u6C34\u53BF"
        },
        {
          code: "140522",
          name: "\u9633\u57CE\u53BF"
        },
        {
          code: "140524",
          name: "\u9675\u5DDD\u53BF"
        },
        {
          code: "140525",
          name: "\u6CFD\u5DDE\u53BF"
        },
        {
          code: "140581",
          name: "\u9AD8\u5E73\u5E02"
        }
      ],
      [
        {
          code: "140602",
          name: "\u6714\u57CE\u533A"
        },
        {
          code: "140603",
          name: "\u5E73\u9C81\u533A"
        },
        {
          code: "140621",
          name: "\u5C71\u9634\u53BF"
        },
        {
          code: "140622",
          name: "\u5E94\u53BF"
        },
        {
          code: "140623",
          name: "\u53F3\u7389\u53BF"
        },
        {
          code: "140624",
          name: "\u6000\u4EC1\u53BF"
        }
      ],
      [
        {
          code: "140702",
          name: "\u6986\u6B21\u533A"
        },
        {
          code: "140721",
          name: "\u6986\u793E\u53BF"
        },
        {
          code: "140722",
          name: "\u5DE6\u6743\u53BF"
        },
        {
          code: "140723",
          name: "\u548C\u987A\u53BF"
        },
        {
          code: "140724",
          name: "\u6614\u9633\u53BF"
        },
        {
          code: "140725",
          name: "\u5BFF\u9633\u53BF"
        },
        {
          code: "140726",
          name: "\u592A\u8C37\u53BF"
        },
        {
          code: "140727",
          name: "\u7941\u53BF"
        },
        {
          code: "140728",
          name: "\u5E73\u9065\u53BF"
        },
        {
          code: "140729",
          name: "\u7075\u77F3\u53BF"
        },
        {
          code: "140781",
          name: "\u4ECB\u4F11\u5E02"
        }
      ],
      [
        {
          code: "140802",
          name: "\u76D0\u6E56\u533A"
        },
        {
          code: "140821",
          name: "\u4E34\u7317\u53BF"
        },
        {
          code: "140822",
          name: "\u4E07\u8363\u53BF"
        },
        {
          code: "140823",
          name: "\u95FB\u559C\u53BF"
        },
        {
          code: "140824",
          name: "\u7A37\u5C71\u53BF"
        },
        {
          code: "140825",
          name: "\u65B0\u7EDB\u53BF"
        },
        {
          code: "140826",
          name: "\u7EDB\u53BF"
        },
        {
          code: "140827",
          name: "\u57A3\u66F2\u53BF"
        },
        {
          code: "140828",
          name: "\u590F\u53BF"
        },
        {
          code: "140829",
          name: "\u5E73\u9646\u53BF"
        },
        {
          code: "140830",
          name: "\u82AE\u57CE\u53BF"
        },
        {
          code: "140881",
          name: "\u6C38\u6D4E\u5E02"
        },
        {
          code: "140882",
          name: "\u6CB3\u6D25\u5E02"
        }
      ],
      [
        {
          code: "140902",
          name: "\u5FFB\u5E9C\u533A"
        },
        {
          code: "140921",
          name: "\u5B9A\u8944\u53BF"
        },
        {
          code: "140922",
          name: "\u4E94\u53F0\u53BF"
        },
        {
          code: "140923",
          name: "\u4EE3\u53BF"
        },
        {
          code: "140924",
          name: "\u7E41\u5CD9\u53BF"
        },
        {
          code: "140925",
          name: "\u5B81\u6B66\u53BF"
        },
        {
          code: "140926",
          name: "\u9759\u4E50\u53BF"
        },
        {
          code: "140927",
          name: "\u795E\u6C60\u53BF"
        },
        {
          code: "140928",
          name: "\u4E94\u5BE8\u53BF"
        },
        {
          code: "140929",
          name: "\u5CA2\u5C9A\u53BF"
        },
        {
          code: "140930",
          name: "\u6CB3\u66F2\u53BF"
        },
        {
          code: "140931",
          name: "\u4FDD\u5FB7\u53BF"
        },
        {
          code: "140932",
          name: "\u504F\u5173\u53BF"
        },
        {
          code: "140981",
          name: "\u539F\u5E73\u5E02"
        }
      ],
      [
        {
          code: "141002",
          name: "\u5C27\u90FD\u533A"
        },
        {
          code: "141021",
          name: "\u66F2\u6C83\u53BF"
        },
        {
          code: "141022",
          name: "\u7FFC\u57CE\u53BF"
        },
        {
          code: "141023",
          name: "\u8944\u6C7E\u53BF"
        },
        {
          code: "141024",
          name: "\u6D2A\u6D1E\u53BF"
        },
        {
          code: "141025",
          name: "\u53E4\u53BF"
        },
        {
          code: "141026",
          name: "\u5B89\u6CFD\u53BF"
        },
        {
          code: "141027",
          name: "\u6D6E\u5C71\u53BF"
        },
        {
          code: "141028",
          name: "\u5409\u53BF"
        },
        {
          code: "141029",
          name: "\u4E61\u5B81\u53BF"
        },
        {
          code: "141030",
          name: "\u5927\u5B81\u53BF"
        },
        {
          code: "141031",
          name: "\u96B0\u53BF"
        },
        {
          code: "141032",
          name: "\u6C38\u548C\u53BF"
        },
        {
          code: "141033",
          name: "\u84B2\u53BF"
        },
        {
          code: "141034",
          name: "\u6C7E\u897F\u53BF"
        },
        {
          code: "141081",
          name: "\u4FAF\u9A6C\u5E02"
        },
        {
          code: "141082",
          name: "\u970D\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "141102",
          name: "\u79BB\u77F3\u533A"
        },
        {
          code: "141121",
          name: "\u6587\u6C34\u53BF"
        },
        {
          code: "141122",
          name: "\u4EA4\u57CE\u53BF"
        },
        {
          code: "141123",
          name: "\u5174\u53BF"
        },
        {
          code: "141124",
          name: "\u4E34\u53BF"
        },
        {
          code: "141125",
          name: "\u67F3\u6797\u53BF"
        },
        {
          code: "141126",
          name: "\u77F3\u697C\u53BF"
        },
        {
          code: "141127",
          name: "\u5C9A\u53BF"
        },
        {
          code: "141128",
          name: "\u65B9\u5C71\u53BF"
        },
        {
          code: "141129",
          name: "\u4E2D\u9633\u53BF"
        },
        {
          code: "141130",
          name: "\u4EA4\u53E3\u53BF"
        },
        {
          code: "141181",
          name: "\u5B5D\u4E49\u5E02"
        },
        {
          code: "141182",
          name: "\u6C7E\u9633\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "150102",
          name: "\u65B0\u57CE\u533A"
        },
        {
          code: "150103",
          name: "\u56DE\u6C11\u533A"
        },
        {
          code: "150104",
          name: "\u7389\u6CC9\u533A"
        },
        {
          code: "150105",
          name: "\u8D5B\u7F55\u533A"
        },
        {
          code: "150121",
          name: "\u571F\u9ED8\u7279\u5DE6\u65D7"
        },
        {
          code: "150122",
          name: "\u6258\u514B\u6258\u53BF"
        },
        {
          code: "150123",
          name: "\u548C\u6797\u683C\u5C14\u53BF"
        },
        {
          code: "150124",
          name: "\u6E05\u6C34\u6CB3\u53BF"
        },
        {
          code: "150125",
          name: "\u6B66\u5DDD\u53BF"
        }
      ],
      [
        {
          code: "150202",
          name: "\u4E1C\u6CB3\u533A"
        },
        {
          code: "150203",
          name: "\u6606\u90FD\u4ED1\u533A"
        },
        {
          code: "150204",
          name: "\u9752\u5C71\u533A"
        },
        {
          code: "150205",
          name: "\u77F3\u62D0\u533A"
        },
        {
          code: "150206",
          name: "\u767D\u4E91\u9102\u535A\u77FF\u533A"
        },
        {
          code: "150207",
          name: "\u4E5D\u539F\u533A"
        },
        {
          code: "150221",
          name: "\u571F\u9ED8\u7279\u53F3\u65D7"
        },
        {
          code: "150222",
          name: "\u56FA\u9633\u53BF"
        },
        {
          code: "150223",
          name: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7"
        }
      ],
      [
        {
          code: "150302",
          name: "\u6D77\u52C3\u6E7E\u533A"
        },
        {
          code: "150303",
          name: "\u6D77\u5357\u533A"
        },
        {
          code: "150304",
          name: "\u4E4C\u8FBE\u533A"
        }
      ],
      [
        {
          code: "150402",
          name: "\u7EA2\u5C71\u533A"
        },
        {
          code: "150403",
          name: "\u5143\u5B9D\u5C71\u533A"
        },
        {
          code: "150404",
          name: "\u677E\u5C71\u533A"
        },
        {
          code: "150421",
          name: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7"
        },
        {
          code: "150422",
          name: "\u5DF4\u6797\u5DE6\u65D7"
        },
        {
          code: "150423",
          name: "\u5DF4\u6797\u53F3\u65D7"
        },
        {
          code: "150424",
          name: "\u6797\u897F\u53BF"
        },
        {
          code: "150425",
          name: "\u514B\u4EC0\u514B\u817E\u65D7"
        },
        {
          code: "150426",
          name: "\u7FC1\u725B\u7279\u65D7"
        },
        {
          code: "150428",
          name: "\u5580\u5587\u6C81\u65D7"
        },
        {
          code: "150429",
          name: "\u5B81\u57CE\u53BF"
        },
        {
          code: "150430",
          name: "\u6556\u6C49\u65D7"
        }
      ],
      [
        {
          code: "150502",
          name: "\u79D1\u5C14\u6C81\u533A"
        },
        {
          code: "150521",
          name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7"
        },
        {
          code: "150522",
          name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7"
        },
        {
          code: "150523",
          name: "\u5F00\u9C81\u53BF"
        },
        {
          code: "150524",
          name: "\u5E93\u4F26\u65D7"
        },
        {
          code: "150525",
          name: "\u5948\u66FC\u65D7"
        },
        {
          code: "150526",
          name: "\u624E\u9C81\u7279\u65D7"
        },
        {
          code: "150581",
          name: "\u970D\u6797\u90ED\u52D2\u5E02"
        }
      ],
      [
        {
          code: "150602",
          name: "\u4E1C\u80DC\u533A"
        },
        {
          code: "150603",
          name: "\u5EB7\u5DF4\u4EC0\u533A"
        },
        {
          code: "150621",
          name: "\u8FBE\u62C9\u7279\u65D7"
        },
        {
          code: "150622",
          name: "\u51C6\u683C\u5C14\u65D7"
        },
        {
          code: "150623",
          name: "\u9102\u6258\u514B\u524D\u65D7"
        },
        {
          code: "150624",
          name: "\u9102\u6258\u514B\u65D7"
        },
        {
          code: "150625",
          name: "\u676D\u9526\u65D7"
        },
        {
          code: "150626",
          name: "\u4E4C\u5BA1\u65D7"
        },
        {
          code: "150627",
          name: "\u4F0A\u91D1\u970D\u6D1B\u65D7"
        }
      ],
      [
        {
          code: "150702",
          name: "\u6D77\u62C9\u5C14\u533A"
        },
        {
          code: "150703",
          name: "\u624E\u8D49\u8BFA\u5C14\u533A"
        },
        {
          code: "150721",
          name: "\u963F\u8363\u65D7"
        },
        {
          code: "150722",
          name: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7"
        },
        {
          code: "150723",
          name: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7"
        },
        {
          code: "150724",
          name: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7"
        },
        {
          code: "150725",
          name: "\u9648\u5DF4\u5C14\u864E\u65D7"
        },
        {
          code: "150726",
          name: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7"
        },
        {
          code: "150727",
          name: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7"
        },
        {
          code: "150781",
          name: "\u6EE1\u6D32\u91CC\u5E02"
        },
        {
          code: "150782",
          name: "\u7259\u514B\u77F3\u5E02"
        },
        {
          code: "150783",
          name: "\u624E\u5170\u5C6F\u5E02"
        },
        {
          code: "150784",
          name: "\u989D\u5C14\u53E4\u7EB3\u5E02"
        },
        {
          code: "150785",
          name: "\u6839\u6CB3\u5E02"
        }
      ],
      [
        {
          code: "150802",
          name: "\u4E34\u6CB3\u533A"
        },
        {
          code: "150821",
          name: "\u4E94\u539F\u53BF"
        },
        {
          code: "150822",
          name: "\u78F4\u53E3\u53BF"
        },
        {
          code: "150823",
          name: "\u4E4C\u62C9\u7279\u524D\u65D7"
        },
        {
          code: "150824",
          name: "\u4E4C\u62C9\u7279\u4E2D\u65D7"
        },
        {
          code: "150825",
          name: "\u4E4C\u62C9\u7279\u540E\u65D7"
        },
        {
          code: "150826",
          name: "\u676D\u9526\u540E\u65D7"
        }
      ],
      [
        {
          code: "150902",
          name: "\u96C6\u5B81\u533A"
        },
        {
          code: "150921",
          name: "\u5353\u8D44\u53BF"
        },
        {
          code: "150922",
          name: "\u5316\u5FB7\u53BF"
        },
        {
          code: "150923",
          name: "\u5546\u90FD\u53BF"
        },
        {
          code: "150924",
          name: "\u5174\u548C\u53BF"
        },
        {
          code: "150925",
          name: "\u51C9\u57CE\u53BF"
        },
        {
          code: "150926",
          name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7"
        },
        {
          code: "150927",
          name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7"
        },
        {
          code: "150928",
          name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7"
        },
        {
          code: "150929",
          name: "\u56DB\u5B50\u738B\u65D7"
        },
        {
          code: "150981",
          name: "\u4E30\u9547\u5E02"
        }
      ],
      [
        {
          code: "152201",
          name: "\u4E4C\u5170\u6D69\u7279\u5E02"
        },
        {
          code: "152202",
          name: "\u963F\u5C14\u5C71\u5E02"
        },
        {
          code: "152221",
          name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7"
        },
        {
          code: "152222",
          name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7"
        },
        {
          code: "152223",
          name: "\u624E\u8D49\u7279\u65D7"
        },
        {
          code: "152224",
          name: "\u7A81\u6CC9\u53BF"
        }
      ],
      [
        {
          code: "152501",
          name: "\u4E8C\u8FDE\u6D69\u7279\u5E02"
        },
        {
          code: "152502",
          name: "\u9521\u6797\u6D69\u7279\u5E02"
        },
        {
          code: "152522",
          name: "\u963F\u5DF4\u560E\u65D7"
        },
        {
          code: "152523",
          name: "\u82CF\u5C3C\u7279\u5DE6\u65D7"
        },
        {
          code: "152524",
          name: "\u82CF\u5C3C\u7279\u53F3\u65D7"
        },
        {
          code: "152525",
          name: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7"
        },
        {
          code: "152526",
          name: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7"
        },
        {
          code: "152527",
          name: "\u592A\u4EC6\u5BFA\u65D7"
        },
        {
          code: "152528",
          name: "\u9576\u9EC4\u65D7"
        },
        {
          code: "152529",
          name: "\u6B63\u9576\u767D\u65D7"
        },
        {
          code: "152530",
          name: "\u6B63\u84DD\u65D7"
        },
        {
          code: "152531",
          name: "\u591A\u4F26\u53BF"
        }
      ],
      [
        {
          code: "152921",
          name: "\u963F\u62C9\u5584\u5DE6\u65D7"
        },
        {
          code: "152922",
          name: "\u963F\u62C9\u5584\u53F3\u65D7"
        },
        {
          code: "152923",
          name: "\u989D\u6D4E\u7EB3\u65D7"
        }
      ]
    ],
    [
      [
        {
          code: "210102",
          name: "\u548C\u5E73\u533A"
        },
        {
          code: "210103",
          name: "\u6C88\u6CB3\u533A"
        },
        {
          code: "210104",
          name: "\u5927\u4E1C\u533A"
        },
        {
          code: "210105",
          name: "\u7687\u59D1\u533A"
        },
        {
          code: "210106",
          name: "\u94C1\u897F\u533A"
        },
        {
          code: "210111",
          name: "\u82CF\u5BB6\u5C6F\u533A"
        },
        {
          code: "210112",
          name: "\u6D51\u5357\u533A"
        },
        {
          code: "210113",
          name: "\u6C88\u5317\u65B0\u533A"
        },
        {
          code: "210114",
          name: "\u4E8E\u6D2A\u533A"
        },
        {
          code: "210115",
          name: "\u8FBD\u4E2D\u533A"
        },
        {
          code: "210123",
          name: "\u5EB7\u5E73\u53BF"
        },
        {
          code: "210124",
          name: "\u6CD5\u5E93\u53BF"
        },
        {
          code: "210181",
          name: "\u65B0\u6C11\u5E02"
        }
      ],
      [
        {
          code: "210202",
          name: "\u4E2D\u5C71\u533A"
        },
        {
          code: "210203",
          name: "\u897F\u5C97\u533A"
        },
        {
          code: "210204",
          name: "\u6C99\u6CB3\u53E3\u533A"
        },
        {
          code: "210211",
          name: "\u7518\u4E95\u5B50\u533A"
        },
        {
          code: "210212",
          name: "\u65C5\u987A\u53E3\u533A"
        },
        {
          code: "210213",
          name: "\u91D1\u5DDE\u533A"
        },
        {
          code: "210214",
          name: "\u666E\u5170\u5E97\u533A"
        },
        {
          code: "210224",
          name: "\u957F\u6D77\u53BF"
        },
        {
          code: "210281",
          name: "\u74E6\u623F\u5E97\u5E02"
        },
        {
          code: "210283",
          name: "\u5E84\u6CB3\u5E02"
        }
      ],
      [
        {
          code: "210302",
          name: "\u94C1\u4E1C\u533A"
        },
        {
          code: "210303",
          name: "\u94C1\u897F\u533A"
        },
        {
          code: "210304",
          name: "\u7ACB\u5C71\u533A"
        },
        {
          code: "210311",
          name: "\u5343\u5C71\u533A"
        },
        {
          code: "210321",
          name: "\u53F0\u5B89\u53BF"
        },
        {
          code: "210323",
          name: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "210381",
          name: "\u6D77\u57CE\u5E02"
        }
      ],
      [
        {
          code: "210402",
          name: "\u65B0\u629A\u533A"
        },
        {
          code: "210403",
          name: "\u4E1C\u6D32\u533A"
        },
        {
          code: "210404",
          name: "\u671B\u82B1\u533A"
        },
        {
          code: "210411",
          name: "\u987A\u57CE\u533A"
        },
        {
          code: "210421",
          name: "\u629A\u987A\u53BF"
        },
        {
          code: "210422",
          name: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "210423",
          name: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "210502",
          name: "\u5E73\u5C71\u533A"
        },
        {
          code: "210503",
          name: "\u6EAA\u6E56\u533A"
        },
        {
          code: "210504",
          name: "\u660E\u5C71\u533A"
        },
        {
          code: "210505",
          name: "\u5357\u82AC\u533A"
        },
        {
          code: "210521",
          name: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "210522",
          name: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "210602",
          name: "\u5143\u5B9D\u533A"
        },
        {
          code: "210603",
          name: "\u632F\u5174\u533A"
        },
        {
          code: "210604",
          name: "\u632F\u5B89\u533A"
        },
        {
          code: "210624",
          name: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "210681",
          name: "\u4E1C\u6E2F\u5E02"
        },
        {
          code: "210682",
          name: "\u51E4\u57CE\u5E02"
        }
      ],
      [
        {
          code: "210702",
          name: "\u53E4\u5854\u533A"
        },
        {
          code: "210703",
          name: "\u51CC\u6CB3\u533A"
        },
        {
          code: "210711",
          name: "\u592A\u548C\u533A"
        },
        {
          code: "210726",
          name: "\u9ED1\u5C71\u53BF"
        },
        {
          code: "210727",
          name: "\u4E49\u53BF"
        },
        {
          code: "210781",
          name: "\u51CC\u6D77\u5E02"
        },
        {
          code: "210782",
          name: "\u5317\u9547\u5E02"
        }
      ],
      [
        {
          code: "210802",
          name: "\u7AD9\u524D\u533A"
        },
        {
          code: "210803",
          name: "\u897F\u5E02\u533A"
        },
        {
          code: "210804",
          name: "\u9C85\u9C7C\u5708\u533A"
        },
        {
          code: "210811",
          name: "\u8001\u8FB9\u533A"
        },
        {
          code: "210881",
          name: "\u76D6\u5DDE\u5E02"
        },
        {
          code: "210882",
          name: "\u5927\u77F3\u6865\u5E02"
        }
      ],
      [
        {
          code: "210902",
          name: "\u6D77\u5DDE\u533A"
        },
        {
          code: "210903",
          name: "\u65B0\u90B1\u533A"
        },
        {
          code: "210904",
          name: "\u592A\u5E73\u533A"
        },
        {
          code: "210905",
          name: "\u6E05\u6CB3\u95E8\u533A"
        },
        {
          code: "210911",
          name: "\u7EC6\u6CB3\u533A"
        },
        {
          code: "210921",
          name: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "210922",
          name: "\u5F70\u6B66\u53BF"
        }
      ],
      [
        {
          code: "211002",
          name: "\u767D\u5854\u533A"
        },
        {
          code: "211003",
          name: "\u6587\u5723\u533A"
        },
        {
          code: "211004",
          name: "\u5B8F\u4F1F\u533A"
        },
        {
          code: "211005",
          name: "\u5F13\u957F\u5CAD\u533A"
        },
        {
          code: "211011",
          name: "\u592A\u5B50\u6CB3\u533A"
        },
        {
          code: "211021",
          name: "\u8FBD\u9633\u53BF"
        },
        {
          code: "211081",
          name: "\u706F\u5854\u5E02"
        }
      ],
      [
        {
          code: "211102",
          name: "\u53CC\u53F0\u5B50\u533A"
        },
        {
          code: "211103",
          name: "\u5174\u9686\u53F0\u533A"
        },
        {
          code: "211104",
          name: "\u5927\u6D3C\u533A"
        },
        {
          code: "211122",
          name: "\u76D8\u5C71\u53BF"
        }
      ],
      [
        {
          code: "211202",
          name: "\u94F6\u5DDE\u533A"
        },
        {
          code: "211204",
          name: "\u6E05\u6CB3\u533A"
        },
        {
          code: "211221",
          name: "\u94C1\u5CAD\u53BF"
        },
        {
          code: "211223",
          name: "\u897F\u4E30\u53BF"
        },
        {
          code: "211224",
          name: "\u660C\u56FE\u53BF"
        },
        {
          code: "211281",
          name: "\u8C03\u5175\u5C71\u5E02"
        },
        {
          code: "211282",
          name: "\u5F00\u539F\u5E02"
        }
      ],
      [
        {
          code: "211302",
          name: "\u53CC\u5854\u533A"
        },
        {
          code: "211303",
          name: "\u9F99\u57CE\u533A"
        },
        {
          code: "211321",
          name: "\u671D\u9633\u53BF"
        },
        {
          code: "211322",
          name: "\u5EFA\u5E73\u53BF"
        },
        {
          code: "211324",
          name: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "211381",
          name: "\u5317\u7968\u5E02"
        },
        {
          code: "211382",
          name: "\u51CC\u6E90\u5E02"
        }
      ],
      [
        {
          code: "211402",
          name: "\u8FDE\u5C71\u533A"
        },
        {
          code: "211403",
          name: "\u9F99\u6E2F\u533A"
        },
        {
          code: "211404",
          name: "\u5357\u7968\u533A"
        },
        {
          code: "211421",
          name: "\u7EE5\u4E2D\u53BF"
        },
        {
          code: "211422",
          name: "\u5EFA\u660C\u53BF"
        },
        {
          code: "211481",
          name: "\u5174\u57CE\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "220102",
          name: "\u5357\u5173\u533A"
        },
        {
          code: "220103",
          name: "\u5BBD\u57CE\u533A"
        },
        {
          code: "220104",
          name: "\u671D\u9633\u533A"
        },
        {
          code: "220105",
          name: "\u4E8C\u9053\u533A"
        },
        {
          code: "220106",
          name: "\u7EFF\u56ED\u533A"
        },
        {
          code: "220112",
          name: "\u53CC\u9633\u533A"
        },
        {
          code: "220113",
          name: "\u4E5D\u53F0\u533A"
        },
        {
          code: "220122",
          name: "\u519C\u5B89\u53BF"
        },
        {
          code: "220182",
          name: "\u6986\u6811\u5E02"
        },
        {
          code: "220183",
          name: "\u5FB7\u60E0\u5E02"
        }
      ],
      [
        {
          code: "220202",
          name: "\u660C\u9091\u533A"
        },
        {
          code: "220203",
          name: "\u9F99\u6F6D\u533A"
        },
        {
          code: "220204",
          name: "\u8239\u8425\u533A"
        },
        {
          code: "220211",
          name: "\u4E30\u6EE1\u533A"
        },
        {
          code: "220221",
          name: "\u6C38\u5409\u53BF"
        },
        {
          code: "220281",
          name: "\u86DF\u6CB3\u5E02"
        },
        {
          code: "220282",
          name: "\u6866\u7538\u5E02"
        },
        {
          code: "220283",
          name: "\u8212\u5170\u5E02"
        },
        {
          code: "220284",
          name: "\u78D0\u77F3\u5E02"
        }
      ],
      [
        {
          code: "220302",
          name: "\u94C1\u897F\u533A"
        },
        {
          code: "220303",
          name: "\u94C1\u4E1C\u533A"
        },
        {
          code: "220322",
          name: "\u68A8\u6811\u53BF"
        },
        {
          code: "220323",
          name: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "220381",
          name: "\u516C\u4E3B\u5CAD\u5E02"
        },
        {
          code: "220382",
          name: "\u53CC\u8FBD\u5E02"
        }
      ],
      [
        {
          code: "220402",
          name: "\u9F99\u5C71\u533A"
        },
        {
          code: "220403",
          name: "\u897F\u5B89\u533A"
        },
        {
          code: "220421",
          name: "\u4E1C\u4E30\u53BF"
        },
        {
          code: "220422",
          name: "\u4E1C\u8FBD\u53BF"
        }
      ],
      [
        {
          code: "220502",
          name: "\u4E1C\u660C\u533A"
        },
        {
          code: "220503",
          name: "\u4E8C\u9053\u6C5F\u533A"
        },
        {
          code: "220521",
          name: "\u901A\u5316\u53BF"
        },
        {
          code: "220523",
          name: "\u8F89\u5357\u53BF"
        },
        {
          code: "220524",
          name: "\u67F3\u6CB3\u53BF"
        },
        {
          code: "220581",
          name: "\u6885\u6CB3\u53E3\u5E02"
        },
        {
          code: "220582",
          name: "\u96C6\u5B89\u5E02"
        }
      ],
      [
        {
          code: "220602",
          name: "\u6D51\u6C5F\u533A"
        },
        {
          code: "220605",
          name: "\u6C5F\u6E90\u533A"
        },
        {
          code: "220621",
          name: "\u629A\u677E\u53BF"
        },
        {
          code: "220622",
          name: "\u9756\u5B87\u53BF"
        },
        {
          code: "220623",
          name: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "220681",
          name: "\u4E34\u6C5F\u5E02"
        }
      ],
      [
        {
          code: "220702",
          name: "\u5B81\u6C5F\u533A"
        },
        {
          code: "220721",
          name: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "220722",
          name: "\u957F\u5CAD\u53BF"
        },
        {
          code: "220723",
          name: "\u4E7E\u5B89\u53BF"
        },
        {
          code: "220781",
          name: "\u6276\u4F59\u5E02"
        }
      ],
      [
        {
          code: "220802",
          name: "\u6D2E\u5317\u533A"
        },
        {
          code: "220821",
          name: "\u9547\u8D49\u53BF"
        },
        {
          code: "220822",
          name: "\u901A\u6986\u53BF"
        },
        {
          code: "220881",
          name: "\u6D2E\u5357\u5E02"
        },
        {
          code: "220882",
          name: "\u5927\u5B89\u5E02"
        }
      ],
      [
        {
          code: "222401",
          name: "\u5EF6\u5409\u5E02"
        },
        {
          code: "222402",
          name: "\u56FE\u4EEC\u5E02"
        },
        {
          code: "222403",
          name: "\u6566\u5316\u5E02"
        },
        {
          code: "222404",
          name: "\u73F2\u6625\u5E02"
        },
        {
          code: "222405",
          name: "\u9F99\u4E95\u5E02"
        },
        {
          code: "222406",
          name: "\u548C\u9F99\u5E02"
        },
        {
          code: "222424",
          name: "\u6C6A\u6E05\u53BF"
        },
        {
          code: "222426",
          name: "\u5B89\u56FE\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "230102",
          name: "\u9053\u91CC\u533A"
        },
        {
          code: "230103",
          name: "\u5357\u5C97\u533A"
        },
        {
          code: "230104",
          name: "\u9053\u5916\u533A"
        },
        {
          code: "230108",
          name: "\u5E73\u623F\u533A"
        },
        {
          code: "230109",
          name: "\u677E\u5317\u533A"
        },
        {
          code: "230110",
          name: "\u9999\u574A\u533A"
        },
        {
          code: "230111",
          name: "\u547C\u5170\u533A"
        },
        {
          code: "230112",
          name: "\u963F\u57CE\u533A"
        },
        {
          code: "230113",
          name: "\u53CC\u57CE\u533A"
        },
        {
          code: "230123",
          name: "\u4F9D\u5170\u53BF"
        },
        {
          code: "230124",
          name: "\u65B9\u6B63\u53BF"
        },
        {
          code: "230125",
          name: "\u5BBE\u53BF"
        },
        {
          code: "230126",
          name: "\u5DF4\u5F66\u53BF"
        },
        {
          code: "230127",
          name: "\u6728\u5170\u53BF"
        },
        {
          code: "230128",
          name: "\u901A\u6CB3\u53BF"
        },
        {
          code: "230129",
          name: "\u5EF6\u5BFF\u53BF"
        },
        {
          code: "230183",
          name: "\u5C1A\u5FD7\u5E02"
        },
        {
          code: "230184",
          name: "\u4E94\u5E38\u5E02"
        }
      ],
      [
        {
          code: "230202",
          name: "\u9F99\u6C99\u533A"
        },
        {
          code: "230203",
          name: "\u5EFA\u534E\u533A"
        },
        {
          code: "230204",
          name: "\u94C1\u950B\u533A"
        },
        {
          code: "230205",
          name: "\u6602\u6602\u6EAA\u533A"
        },
        {
          code: "230206",
          name: "\u5BCC\u62C9\u5C14\u57FA\u533A"
        },
        {
          code: "230207",
          name: "\u78BE\u5B50\u5C71\u533A"
        },
        {
          code: "230208",
          name: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A"
        },
        {
          code: "230221",
          name: "\u9F99\u6C5F\u53BF"
        },
        {
          code: "230223",
          name: "\u4F9D\u5B89\u53BF"
        },
        {
          code: "230224",
          name: "\u6CF0\u6765\u53BF"
        },
        {
          code: "230225",
          name: "\u7518\u5357\u53BF"
        },
        {
          code: "230227",
          name: "\u5BCC\u88D5\u53BF"
        },
        {
          code: "230229",
          name: "\u514B\u5C71\u53BF"
        },
        {
          code: "230230",
          name: "\u514B\u4E1C\u53BF"
        },
        {
          code: "230231",
          name: "\u62DC\u6CC9\u53BF"
        },
        {
          code: "230281",
          name: "\u8BB7\u6CB3\u5E02"
        }
      ],
      [
        {
          code: "230302",
          name: "\u9E21\u51A0\u533A"
        },
        {
          code: "230303",
          name: "\u6052\u5C71\u533A"
        },
        {
          code: "230304",
          name: "\u6EF4\u9053\u533A"
        },
        {
          code: "230305",
          name: "\u68A8\u6811\u533A"
        },
        {
          code: "230306",
          name: "\u57CE\u5B50\u6CB3\u533A"
        },
        {
          code: "230307",
          name: "\u9EBB\u5C71\u533A"
        },
        {
          code: "230321",
          name: "\u9E21\u4E1C\u53BF"
        },
        {
          code: "230381",
          name: "\u864E\u6797\u5E02"
        },
        {
          code: "230382",
          name: "\u5BC6\u5C71\u5E02"
        }
      ],
      [
        {
          code: "230402",
          name: "\u5411\u9633\u533A"
        },
        {
          code: "230403",
          name: "\u5DE5\u519C\u533A"
        },
        {
          code: "230404",
          name: "\u5357\u5C71\u533A"
        },
        {
          code: "230405",
          name: "\u5174\u5B89\u533A"
        },
        {
          code: "230406",
          name: "\u4E1C\u5C71\u533A"
        },
        {
          code: "230407",
          name: "\u5174\u5C71\u533A"
        },
        {
          code: "230421",
          name: "\u841D\u5317\u53BF"
        },
        {
          code: "230422",
          name: "\u7EE5\u6EE8\u53BF"
        }
      ],
      [
        {
          code: "230502",
          name: "\u5C16\u5C71\u533A"
        },
        {
          code: "230503",
          name: "\u5CAD\u4E1C\u533A"
        },
        {
          code: "230505",
          name: "\u56DB\u65B9\u53F0\u533A"
        },
        {
          code: "230506",
          name: "\u5B9D\u5C71\u533A"
        },
        {
          code: "230521",
          name: "\u96C6\u8D24\u53BF"
        },
        {
          code: "230522",
          name: "\u53CB\u8C0A\u53BF"
        },
        {
          code: "230523",
          name: "\u5B9D\u6E05\u53BF"
        },
        {
          code: "230524",
          name: "\u9976\u6CB3\u53BF"
        }
      ],
      [
        {
          code: "230602",
          name: "\u8428\u5C14\u56FE\u533A"
        },
        {
          code: "230603",
          name: "\u9F99\u51E4\u533A"
        },
        {
          code: "230604",
          name: "\u8BA9\u80E1\u8DEF\u533A"
        },
        {
          code: "230605",
          name: "\u7EA2\u5C97\u533A"
        },
        {
          code: "230606",
          name: "\u5927\u540C\u533A"
        },
        {
          code: "230621",
          name: "\u8087\u5DDE\u53BF"
        },
        {
          code: "230622",
          name: "\u8087\u6E90\u53BF"
        },
        {
          code: "230623",
          name: "\u6797\u7538\u53BF"
        },
        {
          code: "230624",
          name: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "230702",
          name: "\u4F0A\u6625\u533A"
        },
        {
          code: "230703",
          name: "\u5357\u5C94\u533A"
        },
        {
          code: "230704",
          name: "\u53CB\u597D\u533A"
        },
        {
          code: "230705",
          name: "\u897F\u6797\u533A"
        },
        {
          code: "230706",
          name: "\u7FE0\u5CE6\u533A"
        },
        {
          code: "230707",
          name: "\u65B0\u9752\u533A"
        },
        {
          code: "230708",
          name: "\u7F8E\u6EAA\u533A"
        },
        {
          code: "230709",
          name: "\u91D1\u5C71\u5C6F\u533A"
        },
        {
          code: "230710",
          name: "\u4E94\u8425\u533A"
        },
        {
          code: "230711",
          name: "\u4E4C\u9A6C\u6CB3\u533A"
        },
        {
          code: "230712",
          name: "\u6C64\u65FA\u6CB3\u533A"
        },
        {
          code: "230713",
          name: "\u5E26\u5CAD\u533A"
        },
        {
          code: "230714",
          name: "\u4E4C\u4F0A\u5CAD\u533A"
        },
        {
          code: "230715",
          name: "\u7EA2\u661F\u533A"
        },
        {
          code: "230716",
          name: "\u4E0A\u7518\u5CAD\u533A"
        },
        {
          code: "230722",
          name: "\u5609\u836B\u53BF"
        },
        {
          code: "230781",
          name: "\u94C1\u529B\u5E02"
        }
      ],
      [
        {
          code: "230803",
          name: "\u5411\u9633\u533A"
        },
        {
          code: "230804",
          name: "\u524D\u8FDB\u533A"
        },
        {
          code: "230805",
          name: "\u4E1C\u98CE\u533A"
        },
        {
          code: "230811",
          name: "\u90CA\u533A"
        },
        {
          code: "230822",
          name: "\u6866\u5357\u53BF"
        },
        {
          code: "230826",
          name: "\u6866\u5DDD\u53BF"
        },
        {
          code: "230828",
          name: "\u6C64\u539F\u53BF"
        },
        {
          code: "230881",
          name: "\u540C\u6C5F\u5E02"
        },
        {
          code: "230882",
          name: "\u5BCC\u9526\u5E02"
        },
        {
          code: "230883",
          name: "\u629A\u8FDC\u5E02"
        }
      ],
      [
        {
          code: "230902",
          name: "\u65B0\u5174\u533A"
        },
        {
          code: "230903",
          name: "\u6843\u5C71\u533A"
        },
        {
          code: "230904",
          name: "\u8304\u5B50\u6CB3\u533A"
        },
        {
          code: "230921",
          name: "\u52C3\u5229\u53BF"
        }
      ],
      [
        {
          code: "231002",
          name: "\u4E1C\u5B89\u533A"
        },
        {
          code: "231003",
          name: "\u9633\u660E\u533A"
        },
        {
          code: "231004",
          name: "\u7231\u6C11\u533A"
        },
        {
          code: "231005",
          name: "\u897F\u5B89\u533A"
        },
        {
          code: "231025",
          name: "\u6797\u53E3\u53BF"
        },
        {
          code: "231081",
          name: "\u7EE5\u82AC\u6CB3\u5E02"
        },
        {
          code: "231083",
          name: "\u6D77\u6797\u5E02"
        },
        {
          code: "231084",
          name: "\u5B81\u5B89\u5E02"
        },
        {
          code: "231085",
          name: "\u7A46\u68F1\u5E02"
        },
        {
          code: "231086",
          name: "\u4E1C\u5B81\u5E02"
        }
      ],
      [
        {
          code: "231102",
          name: "\u7231\u8F89\u533A"
        },
        {
          code: "231121",
          name: "\u5AE9\u6C5F\u53BF"
        },
        {
          code: "231123",
          name: "\u900A\u514B\u53BF"
        },
        {
          code: "231124",
          name: "\u5B59\u5434\u53BF"
        },
        {
          code: "231181",
          name: "\u5317\u5B89\u5E02"
        },
        {
          code: "231182",
          name: "\u4E94\u5927\u8FDE\u6C60\u5E02"
        }
      ],
      [
        {
          code: "231202",
          name: "\u5317\u6797\u533A"
        },
        {
          code: "231221",
          name: "\u671B\u594E\u53BF"
        },
        {
          code: "231222",
          name: "\u5170\u897F\u53BF"
        },
        {
          code: "231223",
          name: "\u9752\u5188\u53BF"
        },
        {
          code: "231224",
          name: "\u5E86\u5B89\u53BF"
        },
        {
          code: "231225",
          name: "\u660E\u6C34\u53BF"
        },
        {
          code: "231226",
          name: "\u7EE5\u68F1\u53BF"
        },
        {
          code: "231281",
          name: "\u5B89\u8FBE\u5E02"
        },
        {
          code: "231282",
          name: "\u8087\u4E1C\u5E02"
        },
        {
          code: "231283",
          name: "\u6D77\u4F26\u5E02"
        }
      ],
      [
        {
          code: "232701",
          name: "\u52A0\u683C\u8FBE\u5947\u533A"
        },
        {
          code: "232702",
          name: "\u677E\u5CAD\u533A"
        },
        {
          code: "232703",
          name: "\u65B0\u6797\u533A"
        },
        {
          code: "232704",
          name: "\u547C\u4E2D\u533A"
        },
        {
          code: "232721",
          name: "\u547C\u739B\u53BF"
        },
        {
          code: "232722",
          name: "\u5854\u6CB3\u53BF"
        },
        {
          code: "232723",
          name: "\u6F20\u6CB3\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "310101",
          name: "\u9EC4\u6D66\u533A"
        },
        {
          code: "310104",
          name: "\u5F90\u6C47\u533A"
        },
        {
          code: "310105",
          name: "\u957F\u5B81\u533A"
        },
        {
          code: "310106",
          name: "\u9759\u5B89\u533A"
        },
        {
          code: "310107",
          name: "\u666E\u9640\u533A"
        },
        {
          code: "310109",
          name: "\u8679\u53E3\u533A"
        },
        {
          code: "310110",
          name: "\u6768\u6D66\u533A"
        },
        {
          code: "310112",
          name: "\u95F5\u884C\u533A"
        },
        {
          code: "310113",
          name: "\u5B9D\u5C71\u533A"
        },
        {
          code: "310114",
          name: "\u5609\u5B9A\u533A"
        },
        {
          code: "310115",
          name: "\u6D66\u4E1C\u65B0\u533A"
        },
        {
          code: "310116",
          name: "\u91D1\u5C71\u533A"
        },
        {
          code: "310117",
          name: "\u677E\u6C5F\u533A"
        },
        {
          code: "310118",
          name: "\u9752\u6D66\u533A"
        },
        {
          code: "310120",
          name: "\u5949\u8D24\u533A"
        },
        {
          code: "310151",
          name: "\u5D07\u660E\u533A"
        }
      ]
    ],
    [
      [
        {
          code: "320102",
          name: "\u7384\u6B66\u533A"
        },
        {
          code: "320104",
          name: "\u79E6\u6DEE\u533A"
        },
        {
          code: "320105",
          name: "\u5EFA\u90BA\u533A"
        },
        {
          code: "320106",
          name: "\u9F13\u697C\u533A"
        },
        {
          code: "320111",
          name: "\u6D66\u53E3\u533A"
        },
        {
          code: "320113",
          name: "\u6816\u971E\u533A"
        },
        {
          code: "320114",
          name: "\u96E8\u82B1\u53F0\u533A"
        },
        {
          code: "320115",
          name: "\u6C5F\u5B81\u533A"
        },
        {
          code: "320116",
          name: "\u516D\u5408\u533A"
        },
        {
          code: "320117",
          name: "\u6EA7\u6C34\u533A"
        },
        {
          code: "320118",
          name: "\u9AD8\u6DF3\u533A"
        }
      ],
      [
        {
          code: "320205",
          name: "\u9521\u5C71\u533A"
        },
        {
          code: "320206",
          name: "\u60E0\u5C71\u533A"
        },
        {
          code: "320211",
          name: "\u6EE8\u6E56\u533A"
        },
        {
          code: "320213",
          name: "\u6881\u6EAA\u533A"
        },
        {
          code: "320214",
          name: "\u65B0\u5434\u533A"
        },
        {
          code: "320281",
          name: "\u6C5F\u9634\u5E02"
        },
        {
          code: "320282",
          name: "\u5B9C\u5174\u5E02"
        }
      ],
      [
        {
          code: "320302",
          name: "\u9F13\u697C\u533A"
        },
        {
          code: "320303",
          name: "\u4E91\u9F99\u533A"
        },
        {
          code: "320305",
          name: "\u8D3E\u6C6A\u533A"
        },
        {
          code: "320311",
          name: "\u6CC9\u5C71\u533A"
        },
        {
          code: "320312",
          name: "\u94DC\u5C71\u533A"
        },
        {
          code: "320321",
          name: "\u4E30\u53BF"
        },
        {
          code: "320322",
          name: "\u6C9B\u53BF"
        },
        {
          code: "320324",
          name: "\u7762\u5B81\u53BF"
        },
        {
          code: "320381",
          name: "\u65B0\u6C82\u5E02"
        },
        {
          code: "320382",
          name: "\u90B3\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "320402",
          name: "\u5929\u5B81\u533A"
        },
        {
          code: "320404",
          name: "\u949F\u697C\u533A"
        },
        {
          code: "320411",
          name: "\u65B0\u5317\u533A"
        },
        {
          code: "320412",
          name: "\u6B66\u8FDB\u533A"
        },
        {
          code: "320413",
          name: "\u91D1\u575B\u533A"
        },
        {
          code: "320481",
          name: "\u6EA7\u9633\u5E02"
        }
      ],
      [
        {
          code: "320505",
          name: "\u864E\u4E18\u533A"
        },
        {
          code: "320506",
          name: "\u5434\u4E2D\u533A"
        },
        {
          code: "320507",
          name: "\u76F8\u57CE\u533A"
        },
        {
          code: "320508",
          name: "\u59D1\u82CF\u533A"
        },
        {
          code: "320509",
          name: "\u5434\u6C5F\u533A"
        },
        {
          code: "320581",
          name: "\u5E38\u719F\u5E02"
        },
        {
          code: "320582",
          name: "\u5F20\u5BB6\u6E2F\u5E02"
        },
        {
          code: "320583",
          name: "\u6606\u5C71\u5E02"
        },
        {
          code: "320585",
          name: "\u592A\u4ED3\u5E02"
        }
      ],
      [
        {
          code: "320602",
          name: "\u5D07\u5DDD\u533A"
        },
        {
          code: "320611",
          name: "\u6E2F\u95F8\u533A"
        },
        {
          code: "320612",
          name: "\u901A\u5DDE\u533A"
        },
        {
          code: "320621",
          name: "\u6D77\u5B89\u53BF"
        },
        {
          code: "320623",
          name: "\u5982\u4E1C\u53BF"
        },
        {
          code: "320681",
          name: "\u542F\u4E1C\u5E02"
        },
        {
          code: "320682",
          name: "\u5982\u768B\u5E02"
        },
        {
          code: "320684",
          name: "\u6D77\u95E8\u5E02"
        }
      ],
      [
        {
          code: "320703",
          name: "\u8FDE\u4E91\u533A"
        },
        {
          code: "320706",
          name: "\u6D77\u5DDE\u533A"
        },
        {
          code: "320707",
          name: "\u8D63\u6986\u533A"
        },
        {
          code: "320722",
          name: "\u4E1C\u6D77\u53BF"
        },
        {
          code: "320723",
          name: "\u704C\u4E91\u53BF"
        },
        {
          code: "320724",
          name: "\u704C\u5357\u53BF"
        }
      ],
      [
        {
          code: "320803",
          name: "\u6DEE\u5B89\u533A"
        },
        {
          code: "320804",
          name: "\u6DEE\u9634\u533A"
        },
        {
          code: "320812",
          name: "\u6E05\u6C5F\u6D66\u533A"
        },
        {
          code: "320813",
          name: "\u6D2A\u6CFD\u533A"
        },
        {
          code: "320826",
          name: "\u6D9F\u6C34\u53BF"
        },
        {
          code: "320830",
          name: "\u76F1\u7719\u53BF"
        },
        {
          code: "320831",
          name: "\u91D1\u6E56\u53BF"
        }
      ],
      [
        {
          code: "320902",
          name: "\u4EAD\u6E56\u533A"
        },
        {
          code: "320903",
          name: "\u76D0\u90FD\u533A"
        },
        {
          code: "320904",
          name: "\u5927\u4E30\u533A"
        },
        {
          code: "320921",
          name: "\u54CD\u6C34\u53BF"
        },
        {
          code: "320922",
          name: "\u6EE8\u6D77\u53BF"
        },
        {
          code: "320923",
          name: "\u961C\u5B81\u53BF"
        },
        {
          code: "320924",
          name: "\u5C04\u9633\u53BF"
        },
        {
          code: "320925",
          name: "\u5EFA\u6E56\u53BF"
        },
        {
          code: "320981",
          name: "\u4E1C\u53F0\u5E02"
        }
      ],
      [
        {
          code: "321002",
          name: "\u5E7F\u9675\u533A"
        },
        {
          code: "321003",
          name: "\u9097\u6C5F\u533A"
        },
        {
          code: "321012",
          name: "\u6C5F\u90FD\u533A"
        },
        {
          code: "321023",
          name: "\u5B9D\u5E94\u53BF"
        },
        {
          code: "321081",
          name: "\u4EEA\u5F81\u5E02"
        },
        {
          code: "321084",
          name: "\u9AD8\u90AE\u5E02"
        }
      ],
      [
        {
          code: "321102",
          name: "\u4EAC\u53E3\u533A"
        },
        {
          code: "321111",
          name: "\u6DA6\u5DDE\u533A"
        },
        {
          code: "321112",
          name: "\u4E39\u5F92\u533A"
        },
        {
          code: "321181",
          name: "\u4E39\u9633\u5E02"
        },
        {
          code: "321182",
          name: "\u626C\u4E2D\u5E02"
        },
        {
          code: "321183",
          name: "\u53E5\u5BB9\u5E02"
        }
      ],
      [
        {
          code: "321202",
          name: "\u6D77\u9675\u533A"
        },
        {
          code: "321203",
          name: "\u9AD8\u6E2F\u533A"
        },
        {
          code: "321204",
          name: "\u59DC\u5830\u533A"
        },
        {
          code: "321281",
          name: "\u5174\u5316\u5E02"
        },
        {
          code: "321282",
          name: "\u9756\u6C5F\u5E02"
        },
        {
          code: "321283",
          name: "\u6CF0\u5174\u5E02"
        }
      ],
      [
        {
          code: "321302",
          name: "\u5BBF\u57CE\u533A"
        },
        {
          code: "321311",
          name: "\u5BBF\u8C6B\u533A"
        },
        {
          code: "321322",
          name: "\u6CAD\u9633\u53BF"
        },
        {
          code: "321323",
          name: "\u6CD7\u9633\u53BF"
        },
        {
          code: "321324",
          name: "\u6CD7\u6D2A\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "330102",
          name: "\u4E0A\u57CE\u533A"
        },
        {
          code: "330105",
          name: "\u62F1\u5885\u533A"
        },
        {
          code: "330106",
          name: "\u897F\u6E56\u533A"
        },
        {
          code: "330108",
          name: "\u6EE8\u6C5F\u533A"
        },
        {
          code: "330109",
          name: "\u8427\u5C71\u533A"
        },
        {
          code: "330110",
          name: "\u4F59\u676D\u533A"
        },
        {
          code: "330111",
          name: "\u5BCC\u9633\u533A"
        },
        {
          code: "330112",
          name: "\u4E34\u5B89\u533A"
        },
        {
          code: "330113",
          name: "\u4E34\u5E73\u533A"
        },
        {
          code: "330114",
          name: "\u94B1\u5858\u533A"
        },
        {
          code: "330122",
          name: "\u6850\u5E90\u53BF"
        },
        {
          code: "330127",
          name: "\u6DF3\u5B89\u53BF"
        },
        {
          code: "330182",
          name: "\u5EFA\u5FB7\u5E02"
        }
      ],
      [
        {
          code: "330203",
          name: "\u6D77\u66D9\u533A"
        },
        {
          code: "330205",
          name: "\u6C5F\u5317\u533A"
        },
        {
          code: "330206",
          name: "\u5317\u4ED1\u533A"
        },
        {
          code: "330211",
          name: "\u9547\u6D77\u533A"
        },
        {
          code: "330212",
          name: "\u911E\u5DDE\u533A"
        },
        {
          code: "330213",
          name: "\u5949\u5316\u533A"
        },
        {
          code: "330225",
          name: "\u8C61\u5C71\u53BF"
        },
        {
          code: "330226",
          name: "\u5B81\u6D77\u53BF"
        },
        {
          code: "330281",
          name: "\u4F59\u59DA\u5E02"
        },
        {
          code: "330282",
          name: "\u6148\u6EAA\u5E02"
        }
      ],
      [
        {
          code: "330302",
          name: "\u9E7F\u57CE\u533A"
        },
        {
          code: "330303",
          name: "\u9F99\u6E7E\u533A"
        },
        {
          code: "330304",
          name: "\u74EF\u6D77\u533A"
        },
        {
          code: "330305",
          name: "\u6D1E\u5934\u533A"
        },
        {
          code: "330324",
          name: "\u6C38\u5609\u53BF"
        },
        {
          code: "330326",
          name: "\u5E73\u9633\u53BF"
        },
        {
          code: "330327",
          name: "\u82CD\u5357\u53BF"
        },
        {
          code: "330328",
          name: "\u6587\u6210\u53BF"
        },
        {
          code: "330329",
          name: "\u6CF0\u987A\u53BF"
        },
        {
          code: "330381",
          name: "\u745E\u5B89\u5E02"
        },
        {
          code: "330382",
          name: "\u4E50\u6E05\u5E02"
        }
      ],
      [
        {
          code: "330402",
          name: "\u5357\u6E56\u533A"
        },
        {
          code: "330411",
          name: "\u79C0\u6D32\u533A"
        },
        {
          code: "330421",
          name: "\u5609\u5584\u53BF"
        },
        {
          code: "330424",
          name: "\u6D77\u76D0\u53BF"
        },
        {
          code: "330481",
          name: "\u6D77\u5B81\u5E02"
        },
        {
          code: "330482",
          name: "\u5E73\u6E56\u5E02"
        },
        {
          code: "330483",
          name: "\u6850\u4E61\u5E02"
        }
      ],
      [
        {
          code: "330502",
          name: "\u5434\u5174\u533A"
        },
        {
          code: "330503",
          name: "\u5357\u6D54\u533A"
        },
        {
          code: "330521",
          name: "\u5FB7\u6E05\u53BF"
        },
        {
          code: "330522",
          name: "\u957F\u5174\u53BF"
        },
        {
          code: "330523",
          name: "\u5B89\u5409\u53BF"
        }
      ],
      [
        {
          code: "330602",
          name: "\u8D8A\u57CE\u533A"
        },
        {
          code: "330603",
          name: "\u67EF\u6865\u533A"
        },
        {
          code: "330604",
          name: "\u4E0A\u865E\u533A"
        },
        {
          code: "330624",
          name: "\u65B0\u660C\u53BF"
        },
        {
          code: "330681",
          name: "\u8BF8\u66A8\u5E02"
        },
        {
          code: "330683",
          name: "\u5D4A\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "330702",
          name: "\u5A7A\u57CE\u533A"
        },
        {
          code: "330703",
          name: "\u91D1\u4E1C\u533A"
        },
        {
          code: "330723",
          name: "\u6B66\u4E49\u53BF"
        },
        {
          code: "330726",
          name: "\u6D66\u6C5F\u53BF"
        },
        {
          code: "330727",
          name: "\u78D0\u5B89\u53BF"
        },
        {
          code: "330781",
          name: "\u5170\u6EAA\u5E02"
        },
        {
          code: "330782",
          name: "\u4E49\u4E4C\u5E02"
        },
        {
          code: "330783",
          name: "\u4E1C\u9633\u5E02"
        },
        {
          code: "330784",
          name: "\u6C38\u5EB7\u5E02"
        }
      ],
      [
        {
          code: "330802",
          name: "\u67EF\u57CE\u533A"
        },
        {
          code: "330803",
          name: "\u8862\u6C5F\u533A"
        },
        {
          code: "330822",
          name: "\u5E38\u5C71\u53BF"
        },
        {
          code: "330824",
          name: "\u5F00\u5316\u53BF"
        },
        {
          code: "330825",
          name: "\u9F99\u6E38\u53BF"
        },
        {
          code: "330881",
          name: "\u6C5F\u5C71\u5E02"
        }
      ],
      [
        {
          code: "330902",
          name: "\u5B9A\u6D77\u533A"
        },
        {
          code: "330903",
          name: "\u666E\u9640\u533A"
        },
        {
          code: "330921",
          name: "\u5CB1\u5C71\u53BF"
        },
        {
          code: "330922",
          name: "\u5D4A\u6CD7\u53BF"
        }
      ],
      [
        {
          code: "331002",
          name: "\u6912\u6C5F\u533A"
        },
        {
          code: "331003",
          name: "\u9EC4\u5CA9\u533A"
        },
        {
          code: "331004",
          name: "\u8DEF\u6865\u533A"
        },
        {
          code: "331022",
          name: "\u4E09\u95E8\u53BF"
        },
        {
          code: "331023",
          name: "\u5929\u53F0\u53BF"
        },
        {
          code: "331024",
          name: "\u4ED9\u5C45\u53BF"
        },
        {
          code: "331081",
          name: "\u6E29\u5CAD\u5E02"
        },
        {
          code: "331082",
          name: "\u4E34\u6D77\u5E02"
        },
        {
          code: "331083",
          name: "\u7389\u73AF\u5E02"
        }
      ],
      [
        {
          code: "331102",
          name: "\u83B2\u90FD\u533A"
        },
        {
          code: "331121",
          name: "\u9752\u7530\u53BF"
        },
        {
          code: "331122",
          name: "\u7F19\u4E91\u53BF"
        },
        {
          code: "331123",
          name: "\u9042\u660C\u53BF"
        },
        {
          code: "331124",
          name: "\u677E\u9633\u53BF"
        },
        {
          code: "331125",
          name: "\u4E91\u548C\u53BF"
        },
        {
          code: "331126",
          name: "\u5E86\u5143\u53BF"
        },
        {
          code: "331127",
          name: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "331181",
          name: "\u9F99\u6CC9\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "340102",
          name: "\u7476\u6D77\u533A"
        },
        {
          code: "340103",
          name: "\u5E90\u9633\u533A"
        },
        {
          code: "340104",
          name: "\u8700\u5C71\u533A"
        },
        {
          code: "340111",
          name: "\u5305\u6CB3\u533A"
        },
        {
          code: "340121",
          name: "\u957F\u4E30\u53BF"
        },
        {
          code: "340122",
          name: "\u80A5\u4E1C\u53BF"
        },
        {
          code: "340123",
          name: "\u80A5\u897F\u53BF"
        },
        {
          code: "340124",
          name: "\u5E90\u6C5F\u53BF"
        },
        {
          code: "340181",
          name: "\u5DE2\u6E56\u5E02"
        }
      ],
      [
        {
          code: "340202",
          name: "\u955C\u6E56\u533A"
        },
        {
          code: "340203",
          name: "\u5F0B\u6C5F\u533A"
        },
        {
          code: "340207",
          name: "\u9E20\u6C5F\u533A"
        },
        {
          code: "340208",
          name: "\u4E09\u5C71\u533A"
        },
        {
          code: "340221",
          name: "\u829C\u6E56\u53BF"
        },
        {
          code: "340222",
          name: "\u7E41\u660C\u53BF"
        },
        {
          code: "340223",
          name: "\u5357\u9675\u53BF"
        },
        {
          code: "340225",
          name: "\u65E0\u4E3A\u53BF"
        }
      ],
      [
        {
          code: "340302",
          name: "\u9F99\u5B50\u6E56\u533A"
        },
        {
          code: "340303",
          name: "\u868C\u5C71\u533A"
        },
        {
          code: "340304",
          name: "\u79B9\u4F1A\u533A"
        },
        {
          code: "340311",
          name: "\u6DEE\u4E0A\u533A"
        },
        {
          code: "340321",
          name: "\u6000\u8FDC\u53BF"
        },
        {
          code: "340322",
          name: "\u4E94\u6CB3\u53BF"
        },
        {
          code: "340323",
          name: "\u56FA\u9547\u53BF"
        }
      ],
      [
        {
          code: "340402",
          name: "\u5927\u901A\u533A"
        },
        {
          code: "340403",
          name: "\u7530\u5BB6\u5EB5\u533A"
        },
        {
          code: "340404",
          name: "\u8C22\u5BB6\u96C6\u533A"
        },
        {
          code: "340405",
          name: "\u516B\u516C\u5C71\u533A"
        },
        {
          code: "340406",
          name: "\u6F58\u96C6\u533A"
        },
        {
          code: "340421",
          name: "\u51E4\u53F0\u53BF"
        },
        {
          code: "340422",
          name: "\u5BFF\u53BF"
        }
      ],
      [
        {
          code: "340503",
          name: "\u82B1\u5C71\u533A"
        },
        {
          code: "340504",
          name: "\u96E8\u5C71\u533A"
        },
        {
          code: "340506",
          name: "\u535A\u671B\u533A"
        },
        {
          code: "340521",
          name: "\u5F53\u6D82\u53BF"
        },
        {
          code: "340522",
          name: "\u542B\u5C71\u53BF"
        },
        {
          code: "340523",
          name: "\u548C\u53BF"
        }
      ],
      [
        {
          code: "340602",
          name: "\u675C\u96C6\u533A"
        },
        {
          code: "340603",
          name: "\u76F8\u5C71\u533A"
        },
        {
          code: "340604",
          name: "\u70C8\u5C71\u533A"
        },
        {
          code: "340621",
          name: "\u6FC9\u6EAA\u53BF"
        }
      ],
      [
        {
          code: "340705",
          name: "\u94DC\u5B98\u533A"
        },
        {
          code: "340706",
          name: "\u4E49\u5B89\u533A"
        },
        {
          code: "340711",
          name: "\u90CA\u533A"
        },
        {
          code: "340722",
          name: "\u679E\u9633\u53BF"
        }
      ],
      [
        {
          code: "340802",
          name: "\u8FCE\u6C5F\u533A"
        },
        {
          code: "340803",
          name: "\u5927\u89C2\u533A"
        },
        {
          code: "340811",
          name: "\u5B9C\u79C0\u533A"
        },
        {
          code: "340822",
          name: "\u6000\u5B81\u53BF"
        },
        {
          code: "340824",
          name: "\u6F5C\u5C71\u53BF"
        },
        {
          code: "340825",
          name: "\u592A\u6E56\u53BF"
        },
        {
          code: "340826",
          name: "\u5BBF\u677E\u53BF"
        },
        {
          code: "340827",
          name: "\u671B\u6C5F\u53BF"
        },
        {
          code: "340828",
          name: "\u5CB3\u897F\u53BF"
        },
        {
          code: "340881",
          name: "\u6850\u57CE\u5E02"
        }
      ],
      [
        {
          code: "341002",
          name: "\u5C6F\u6EAA\u533A"
        },
        {
          code: "341003",
          name: "\u9EC4\u5C71\u533A"
        },
        {
          code: "341004",
          name: "\u5FBD\u5DDE\u533A"
        },
        {
          code: "341021",
          name: "\u6B59\u53BF"
        },
        {
          code: "341022",
          name: "\u4F11\u5B81\u53BF"
        },
        {
          code: "341023",
          name: "\u9EDF\u53BF"
        },
        {
          code: "341024",
          name: "\u7941\u95E8\u53BF"
        }
      ],
      [
        {
          code: "341102",
          name: "\u7405\u740A\u533A"
        },
        {
          code: "341103",
          name: "\u5357\u8C2F\u533A"
        },
        {
          code: "341122",
          name: "\u6765\u5B89\u53BF"
        },
        {
          code: "341124",
          name: "\u5168\u6912\u53BF"
        },
        {
          code: "341125",
          name: "\u5B9A\u8FDC\u53BF"
        },
        {
          code: "341126",
          name: "\u51E4\u9633\u53BF"
        },
        {
          code: "341181",
          name: "\u5929\u957F\u5E02"
        },
        {
          code: "341182",
          name: "\u660E\u5149\u5E02"
        }
      ],
      [
        {
          code: "341202",
          name: "\u988D\u5DDE\u533A"
        },
        {
          code: "341203",
          name: "\u988D\u4E1C\u533A"
        },
        {
          code: "341204",
          name: "\u988D\u6CC9\u533A"
        },
        {
          code: "341221",
          name: "\u4E34\u6CC9\u53BF"
        },
        {
          code: "341222",
          name: "\u592A\u548C\u53BF"
        },
        {
          code: "341225",
          name: "\u961C\u5357\u53BF"
        },
        {
          code: "341226",
          name: "\u988D\u4E0A\u53BF"
        },
        {
          code: "341282",
          name: "\u754C\u9996\u5E02"
        }
      ],
      [
        {
          code: "341302",
          name: "\u57C7\u6865\u533A"
        },
        {
          code: "341321",
          name: "\u7800\u5C71\u53BF"
        },
        {
          code: "341322",
          name: "\u8427\u53BF"
        },
        {
          code: "341323",
          name: "\u7075\u74A7\u53BF"
        },
        {
          code: "341324",
          name: "\u6CD7\u53BF"
        }
      ],
      [
        {
          code: "341502",
          name: "\u91D1\u5B89\u533A"
        },
        {
          code: "341503",
          name: "\u88D5\u5B89\u533A"
        },
        {
          code: "341504",
          name: "\u53F6\u96C6\u533A"
        },
        {
          code: "341522",
          name: "\u970D\u90B1\u53BF"
        },
        {
          code: "341523",
          name: "\u8212\u57CE\u53BF"
        },
        {
          code: "341524",
          name: "\u91D1\u5BE8\u53BF"
        },
        {
          code: "341525",
          name: "\u970D\u5C71\u53BF"
        }
      ],
      [
        {
          code: "341602",
          name: "\u8C2F\u57CE\u533A"
        },
        {
          code: "341621",
          name: "\u6DA1\u9633\u53BF"
        },
        {
          code: "341622",
          name: "\u8499\u57CE\u53BF"
        },
        {
          code: "341623",
          name: "\u5229\u8F9B\u53BF"
        }
      ],
      [
        {
          code: "341702",
          name: "\u8D35\u6C60\u533A"
        },
        {
          code: "341721",
          name: "\u4E1C\u81F3\u53BF"
        },
        {
          code: "341722",
          name: "\u77F3\u53F0\u53BF"
        },
        {
          code: "341723",
          name: "\u9752\u9633\u53BF"
        }
      ],
      [
        {
          code: "341802",
          name: "\u5BA3\u5DDE\u533A"
        },
        {
          code: "341821",
          name: "\u90CE\u6EAA\u53BF"
        },
        {
          code: "341822",
          name: "\u5E7F\u5FB7\u53BF"
        },
        {
          code: "341823",
          name: "\u6CFE\u53BF"
        },
        {
          code: "341824",
          name: "\u7EE9\u6EAA\u53BF"
        },
        {
          code: "341825",
          name: "\u65CC\u5FB7\u53BF"
        },
        {
          code: "341881",
          name: "\u5B81\u56FD\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "350102",
          name: "\u9F13\u697C\u533A"
        },
        {
          code: "350103",
          name: "\u53F0\u6C5F\u533A"
        },
        {
          code: "350104",
          name: "\u4ED3\u5C71\u533A"
        },
        {
          code: "350105",
          name: "\u9A6C\u5C3E\u533A"
        },
        {
          code: "350111",
          name: "\u664B\u5B89\u533A"
        },
        {
          code: "350112",
          name: "\u957F\u4E50\u533A"
        },
        {
          code: "350121",
          name: "\u95FD\u4FAF\u53BF"
        },
        {
          code: "350122",
          name: "\u8FDE\u6C5F\u53BF"
        },
        {
          code: "350123",
          name: "\u7F57\u6E90\u53BF"
        },
        {
          code: "350124",
          name: "\u95FD\u6E05\u53BF"
        },
        {
          code: "350125",
          name: "\u6C38\u6CF0\u53BF"
        },
        {
          code: "350128",
          name: "\u5E73\u6F6D\u53BF"
        },
        {
          code: "350181",
          name: "\u798F\u6E05\u5E02"
        }
      ],
      [
        {
          code: "350203",
          name: "\u601D\u660E\u533A"
        },
        {
          code: "350205",
          name: "\u6D77\u6CA7\u533A"
        },
        {
          code: "350206",
          name: "\u6E56\u91CC\u533A"
        },
        {
          code: "350211",
          name: "\u96C6\u7F8E\u533A"
        },
        {
          code: "350212",
          name: "\u540C\u5B89\u533A"
        },
        {
          code: "350213",
          name: "\u7FD4\u5B89\u533A"
        }
      ],
      [
        {
          code: "350302",
          name: "\u57CE\u53A2\u533A"
        },
        {
          code: "350303",
          name: "\u6DB5\u6C5F\u533A"
        },
        {
          code: "350304",
          name: "\u8354\u57CE\u533A"
        },
        {
          code: "350305",
          name: "\u79C0\u5C7F\u533A"
        },
        {
          code: "350322",
          name: "\u4ED9\u6E38\u53BF"
        }
      ],
      [
        {
          code: "350404",
          name: "\u4E09\u5143\u533A"
        },
        {
          code: "350405",
          name: "\u6C99\u53BF\u533A"
        },
        {
          code: "350421",
          name: "\u660E\u6EAA\u53BF"
        },
        {
          code: "350423",
          name: "\u6E05\u6D41\u53BF"
        },
        {
          code: "350424",
          name: "\u5B81\u5316\u53BF"
        },
        {
          code: "350425",
          name: "\u5927\u7530\u53BF"
        },
        {
          code: "350426",
          name: "\u5C24\u6EAA\u53BF"
        },
        {
          code: "350428",
          name: "\u5C06\u4E50\u53BF"
        },
        {
          code: "350429",
          name: "\u6CF0\u5B81\u53BF"
        },
        {
          code: "350430",
          name: "\u5EFA\u5B81\u53BF"
        },
        {
          code: "350481",
          name: "\u6C38\u5B89\u5E02"
        }
      ],
      [
        {
          code: "350502",
          name: "\u9CA4\u57CE\u533A"
        },
        {
          code: "350503",
          name: "\u4E30\u6CFD\u533A"
        },
        {
          code: "350504",
          name: "\u6D1B\u6C5F\u533A"
        },
        {
          code: "350505",
          name: "\u6CC9\u6E2F\u533A"
        },
        {
          code: "350521",
          name: "\u60E0\u5B89\u53BF"
        },
        {
          code: "350524",
          name: "\u5B89\u6EAA\u53BF"
        },
        {
          code: "350525",
          name: "\u6C38\u6625\u53BF"
        },
        {
          code: "350526",
          name: "\u5FB7\u5316\u53BF"
        },
        {
          code: "350527",
          name: "\u91D1\u95E8\u53BF"
        },
        {
          code: "350581",
          name: "\u77F3\u72EE\u5E02"
        },
        {
          code: "350582",
          name: "\u664B\u6C5F\u5E02"
        },
        {
          code: "350583",
          name: "\u5357\u5B89\u5E02"
        }
      ],
      [
        {
          code: "350602",
          name: "\u8297\u57CE\u533A"
        },
        {
          code: "350603",
          name: "\u9F99\u6587\u533A"
        },
        {
          code: "350604",
          name: "\u9F99\u6D77\u533A"
        },
        {
          code: "350605",
          name: "\u957F\u6CF0\u533A"
        },
        {
          code: "350622",
          name: "\u4E91\u9704\u53BF"
        },
        {
          code: "350623",
          name: "\u6F33\u6D66\u53BF"
        },
        {
          code: "350624",
          name: "\u8BCF\u5B89\u53BF"
        },
        {
          code: "350626",
          name: "\u4E1C\u5C71\u53BF"
        },
        {
          code: "350627",
          name: "\u5357\u9756\u53BF"
        },
        {
          code: "350628",
          name: "\u5E73\u548C\u53BF"
        },
        {
          code: "350629",
          name: "\u534E\u5B89\u53BF"
        }
      ],
      [
        {
          code: "350702",
          name: "\u5EF6\u5E73\u533A"
        },
        {
          code: "350703",
          name: "\u5EFA\u9633\u533A"
        },
        {
          code: "350721",
          name: "\u987A\u660C\u53BF"
        },
        {
          code: "350722",
          name: "\u6D66\u57CE\u53BF"
        },
        {
          code: "350723",
          name: "\u5149\u6CFD\u53BF"
        },
        {
          code: "350724",
          name: "\u677E\u6EAA\u53BF"
        },
        {
          code: "350725",
          name: "\u653F\u548C\u53BF"
        },
        {
          code: "350781",
          name: "\u90B5\u6B66\u5E02"
        },
        {
          code: "350782",
          name: "\u6B66\u5937\u5C71\u5E02"
        },
        {
          code: "350783",
          name: "\u5EFA\u74EF\u5E02"
        }
      ],
      [
        {
          code: "350802",
          name: "\u65B0\u7F57\u533A"
        },
        {
          code: "350803",
          name: "\u6C38\u5B9A\u533A"
        },
        {
          code: "350821",
          name: "\u957F\u6C40\u53BF"
        },
        {
          code: "350823",
          name: "\u4E0A\u676D\u53BF"
        },
        {
          code: "350824",
          name: "\u6B66\u5E73\u53BF"
        },
        {
          code: "350825",
          name: "\u8FDE\u57CE\u53BF"
        },
        {
          code: "350881",
          name: "\u6F33\u5E73\u5E02"
        }
      ],
      [
        {
          code: "350902",
          name: "\u8549\u57CE\u533A"
        },
        {
          code: "350921",
          name: "\u971E\u6D66\u53BF"
        },
        {
          code: "350922",
          name: "\u53E4\u7530\u53BF"
        },
        {
          code: "350923",
          name: "\u5C4F\u5357\u53BF"
        },
        {
          code: "350924",
          name: "\u5BFF\u5B81\u53BF"
        },
        {
          code: "350925",
          name: "\u5468\u5B81\u53BF"
        },
        {
          code: "350926",
          name: "\u67D8\u8363\u53BF"
        },
        {
          code: "350981",
          name: "\u798F\u5B89\u5E02"
        },
        {
          code: "350982",
          name: "\u798F\u9F0E\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "360102",
          name: "\u4E1C\u6E56\u533A"
        },
        {
          code: "360103",
          name: "\u897F\u6E56\u533A"
        },
        {
          code: "360104",
          name: "\u9752\u4E91\u8C31\u533A"
        },
        {
          code: "360105",
          name: "\u6E7E\u91CC\u533A"
        },
        {
          code: "360111",
          name: "\u9752\u5C71\u6E56\u533A"
        },
        {
          code: "360112",
          name: "\u65B0\u5EFA\u533A"
        },
        {
          code: "360121",
          name: "\u5357\u660C\u53BF"
        },
        {
          code: "360123",
          name: "\u5B89\u4E49\u53BF"
        },
        {
          code: "360124",
          name: "\u8FDB\u8D24\u53BF"
        }
      ],
      [
        {
          code: "360202",
          name: "\u660C\u6C5F\u533A"
        },
        {
          code: "360203",
          name: "\u73E0\u5C71\u533A"
        },
        {
          code: "360222",
          name: "\u6D6E\u6881\u53BF"
        },
        {
          code: "360281",
          name: "\u4E50\u5E73\u5E02"
        }
      ],
      [
        {
          code: "360302",
          name: "\u5B89\u6E90\u533A"
        },
        {
          code: "360313",
          name: "\u6E58\u4E1C\u533A"
        },
        {
          code: "360321",
          name: "\u83B2\u82B1\u53BF"
        },
        {
          code: "360322",
          name: "\u4E0A\u6817\u53BF"
        },
        {
          code: "360323",
          name: "\u82A6\u6EAA\u53BF"
        }
      ],
      [
        {
          code: "360402",
          name: "\u6FC2\u6EAA\u533A"
        },
        {
          code: "360403",
          name: "\u6D54\u9633\u533A"
        },
        {
          code: "360404",
          name: "\u67F4\u6851\u533A"
        },
        {
          code: "360423",
          name: "\u6B66\u5B81\u53BF"
        },
        {
          code: "360424",
          name: "\u4FEE\u6C34\u53BF"
        },
        {
          code: "360425",
          name: "\u6C38\u4FEE\u53BF"
        },
        {
          code: "360426",
          name: "\u5FB7\u5B89\u53BF"
        },
        {
          code: "360428",
          name: "\u90FD\u660C\u53BF"
        },
        {
          code: "360429",
          name: "\u6E56\u53E3\u53BF"
        },
        {
          code: "360430",
          name: "\u5F6D\u6CFD\u53BF"
        },
        {
          code: "360481",
          name: "\u745E\u660C\u5E02"
        },
        {
          code: "360482",
          name: "\u5171\u9752\u57CE\u5E02"
        },
        {
          code: "360483",
          name: "\u5E90\u5C71\u5E02"
        }
      ],
      [
        {
          code: "360502",
          name: "\u6E1D\u6C34\u533A"
        },
        {
          code: "360521",
          name: "\u5206\u5B9C\u53BF"
        }
      ],
      [
        {
          code: "360602",
          name: "\u6708\u6E56\u533A"
        },
        {
          code: "360622",
          name: "\u4F59\u6C5F\u533A"
        },
        {
          code: "360681",
          name: "\u8D35\u6EAA\u5E02"
        }
      ],
      [
        {
          code: "360702",
          name: "\u7AE0\u8D21\u533A"
        },
        {
          code: "360703",
          name: "\u5357\u5EB7\u533A"
        },
        {
          code: "360704",
          name: "\u8D63\u53BF\u533A"
        },
        {
          code: "360722",
          name: "\u4FE1\u4E30\u53BF"
        },
        {
          code: "360723",
          name: "\u5927\u4F59\u53BF"
        },
        {
          code: "360724",
          name: "\u4E0A\u72B9\u53BF"
        },
        {
          code: "360725",
          name: "\u5D07\u4E49\u53BF"
        },
        {
          code: "360726",
          name: "\u5B89\u8FDC\u53BF"
        },
        {
          code: "360727",
          name: "\u9F99\u5357\u53BF"
        },
        {
          code: "360728",
          name: "\u5B9A\u5357\u53BF"
        },
        {
          code: "360729",
          name: "\u5168\u5357\u53BF"
        },
        {
          code: "360730",
          name: "\u5B81\u90FD\u53BF"
        },
        {
          code: "360731",
          name: "\u4E8E\u90FD\u53BF"
        },
        {
          code: "360732",
          name: "\u5174\u56FD\u53BF"
        },
        {
          code: "360733",
          name: "\u4F1A\u660C\u53BF"
        },
        {
          code: "360734",
          name: "\u5BFB\u4E4C\u53BF"
        },
        {
          code: "360735",
          name: "\u77F3\u57CE\u53BF"
        },
        {
          code: "360781",
          name: "\u745E\u91D1\u5E02"
        }
      ],
      [
        {
          code: "360802",
          name: "\u5409\u5DDE\u533A"
        },
        {
          code: "360803",
          name: "\u9752\u539F\u533A"
        },
        {
          code: "360821",
          name: "\u5409\u5B89\u53BF"
        },
        {
          code: "360822",
          name: "\u5409\u6C34\u53BF"
        },
        {
          code: "360823",
          name: "\u5CE1\u6C5F\u53BF"
        },
        {
          code: "360824",
          name: "\u65B0\u5E72\u53BF"
        },
        {
          code: "360825",
          name: "\u6C38\u4E30\u53BF"
        },
        {
          code: "360826",
          name: "\u6CF0\u548C\u53BF"
        },
        {
          code: "360827",
          name: "\u9042\u5DDD\u53BF"
        },
        {
          code: "360828",
          name: "\u4E07\u5B89\u53BF"
        },
        {
          code: "360829",
          name: "\u5B89\u798F\u53BF"
        },
        {
          code: "360830",
          name: "\u6C38\u65B0\u53BF"
        },
        {
          code: "360881",
          name: "\u4E95\u5188\u5C71\u5E02"
        }
      ],
      [
        {
          code: "360902",
          name: "\u8881\u5DDE\u533A"
        },
        {
          code: "360921",
          name: "\u5949\u65B0\u53BF"
        },
        {
          code: "360922",
          name: "\u4E07\u8F7D\u53BF"
        },
        {
          code: "360923",
          name: "\u4E0A\u9AD8\u53BF"
        },
        {
          code: "360924",
          name: "\u5B9C\u4E30\u53BF"
        },
        {
          code: "360925",
          name: "\u9756\u5B89\u53BF"
        },
        {
          code: "360926",
          name: "\u94DC\u9F13\u53BF"
        },
        {
          code: "360981",
          name: "\u4E30\u57CE\u5E02"
        },
        {
          code: "360982",
          name: "\u6A1F\u6811\u5E02"
        },
        {
          code: "360983",
          name: "\u9AD8\u5B89\u5E02"
        }
      ],
      [
        {
          code: "361002",
          name: "\u4E34\u5DDD\u533A"
        },
        {
          code: "361003",
          name: "\u4E1C\u4E61\u533A"
        },
        {
          code: "361021",
          name: "\u5357\u57CE\u53BF"
        },
        {
          code: "361022",
          name: "\u9ECE\u5DDD\u53BF"
        },
        {
          code: "361023",
          name: "\u5357\u4E30\u53BF"
        },
        {
          code: "361024",
          name: "\u5D07\u4EC1\u53BF"
        },
        {
          code: "361025",
          name: "\u4E50\u5B89\u53BF"
        },
        {
          code: "361026",
          name: "\u5B9C\u9EC4\u53BF"
        },
        {
          code: "361027",
          name: "\u91D1\u6EAA\u53BF"
        },
        {
          code: "361028",
          name: "\u8D44\u6EAA\u53BF"
        },
        {
          code: "361030",
          name: "\u5E7F\u660C\u53BF"
        }
      ],
      [
        {
          code: "361102",
          name: "\u4FE1\u5DDE\u533A"
        },
        {
          code: "361103",
          name: "\u5E7F\u4E30\u533A"
        },
        {
          code: "361121",
          name: "\u4E0A\u9976\u53BF"
        },
        {
          code: "361123",
          name: "\u7389\u5C71\u53BF"
        },
        {
          code: "361124",
          name: "\u94C5\u5C71\u53BF"
        },
        {
          code: "361125",
          name: "\u6A2A\u5CF0\u53BF"
        },
        {
          code: "361126",
          name: "\u5F0B\u9633\u53BF"
        },
        {
          code: "361127",
          name: "\u4F59\u5E72\u53BF"
        },
        {
          code: "361128",
          name: "\u9131\u9633\u53BF"
        },
        {
          code: "361129",
          name: "\u4E07\u5E74\u53BF"
        },
        {
          code: "361130",
          name: "\u5A7A\u6E90\u53BF"
        },
        {
          code: "361181",
          name: "\u5FB7\u5174\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "370102",
          name: "\u5386\u4E0B\u533A"
        },
        {
          code: "370103",
          name: "\u5E02\u4E2D\u533A"
        },
        {
          code: "370104",
          name: "\u69D0\u836B\u533A"
        },
        {
          code: "370105",
          name: "\u5929\u6865\u533A"
        },
        {
          code: "370112",
          name: "\u5386\u57CE\u533A"
        },
        {
          code: "370113",
          name: "\u957F\u6E05\u533A"
        },
        {
          code: "370114",
          name: "\u7AE0\u4E18\u533A"
        },
        {
          code: "370124",
          name: "\u5E73\u9634\u53BF"
        },
        {
          code: "370125",
          name: "\u6D4E\u9633\u53BF"
        },
        {
          code: "370126",
          name: "\u5546\u6CB3\u53BF"
        }
      ],
      [
        {
          code: "370202",
          name: "\u5E02\u5357\u533A"
        },
        {
          code: "370203",
          name: "\u5E02\u5317\u533A"
        },
        {
          code: "370211",
          name: "\u9EC4\u5C9B\u533A"
        },
        {
          code: "370212",
          name: "\u5D02\u5C71\u533A"
        },
        {
          code: "370213",
          name: "\u674E\u6CA7\u533A"
        },
        {
          code: "370214",
          name: "\u57CE\u9633\u533A"
        },
        {
          code: "370215",
          name: "\u5373\u58A8\u533A"
        },
        {
          code: "370281",
          name: "\u80F6\u5DDE\u5E02"
        },
        {
          code: "370283",
          name: "\u5E73\u5EA6\u5E02"
        },
        {
          code: "370285",
          name: "\u83B1\u897F\u5E02"
        }
      ],
      [
        {
          code: "370302",
          name: "\u6DC4\u5DDD\u533A"
        },
        {
          code: "370303",
          name: "\u5F20\u5E97\u533A"
        },
        {
          code: "370304",
          name: "\u535A\u5C71\u533A"
        },
        {
          code: "370305",
          name: "\u4E34\u6DC4\u533A"
        },
        {
          code: "370306",
          name: "\u5468\u6751\u533A"
        },
        {
          code: "370321",
          name: "\u6853\u53F0\u53BF"
        },
        {
          code: "370322",
          name: "\u9AD8\u9752\u53BF"
        },
        {
          code: "370323",
          name: "\u6C82\u6E90\u53BF"
        }
      ],
      [
        {
          code: "370402",
          name: "\u5E02\u4E2D\u533A"
        },
        {
          code: "370403",
          name: "\u859B\u57CE\u533A"
        },
        {
          code: "370404",
          name: "\u5CC4\u57CE\u533A"
        },
        {
          code: "370405",
          name: "\u53F0\u513F\u5E84\u533A"
        },
        {
          code: "370406",
          name: "\u5C71\u4EAD\u533A"
        },
        {
          code: "370481",
          name: "\u6ED5\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "370502",
          name: "\u4E1C\u8425\u533A"
        },
        {
          code: "370503",
          name: "\u6CB3\u53E3\u533A"
        },
        {
          code: "370505",
          name: "\u57A6\u5229\u533A"
        },
        {
          code: "370522",
          name: "\u5229\u6D25\u53BF"
        },
        {
          code: "370523",
          name: "\u5E7F\u9976\u53BF"
        }
      ],
      [
        {
          code: "370602",
          name: "\u829D\u7F58\u533A"
        },
        {
          code: "370611",
          name: "\u798F\u5C71\u533A"
        },
        {
          code: "370612",
          name: "\u725F\u5E73\u533A"
        },
        {
          code: "370613",
          name: "\u83B1\u5C71\u533A"
        },
        {
          code: "370634",
          name: "\u957F\u5C9B\u53BF"
        },
        {
          code: "370681",
          name: "\u9F99\u53E3\u5E02"
        },
        {
          code: "370682",
          name: "\u83B1\u9633\u5E02"
        },
        {
          code: "370683",
          name: "\u83B1\u5DDE\u5E02"
        },
        {
          code: "370684",
          name: "\u84EC\u83B1\u5E02"
        },
        {
          code: "370685",
          name: "\u62DB\u8FDC\u5E02"
        },
        {
          code: "370686",
          name: "\u6816\u971E\u5E02"
        },
        {
          code: "370687",
          name: "\u6D77\u9633\u5E02"
        }
      ],
      [
        {
          code: "370702",
          name: "\u6F4D\u57CE\u533A"
        },
        {
          code: "370703",
          name: "\u5BD2\u4EAD\u533A"
        },
        {
          code: "370704",
          name: "\u574A\u5B50\u533A"
        },
        {
          code: "370705",
          name: "\u594E\u6587\u533A"
        },
        {
          code: "370724",
          name: "\u4E34\u6710\u53BF"
        },
        {
          code: "370725",
          name: "\u660C\u4E50\u53BF"
        },
        {
          code: "370781",
          name: "\u9752\u5DDE\u5E02"
        },
        {
          code: "370782",
          name: "\u8BF8\u57CE\u5E02"
        },
        {
          code: "370783",
          name: "\u5BFF\u5149\u5E02"
        },
        {
          code: "370784",
          name: "\u5B89\u4E18\u5E02"
        },
        {
          code: "370785",
          name: "\u9AD8\u5BC6\u5E02"
        },
        {
          code: "370786",
          name: "\u660C\u9091\u5E02"
        }
      ],
      [
        {
          code: "370811",
          name: "\u4EFB\u57CE\u533A"
        },
        {
          code: "370812",
          name: "\u5156\u5DDE\u533A"
        },
        {
          code: "370826",
          name: "\u5FAE\u5C71\u53BF"
        },
        {
          code: "370827",
          name: "\u9C7C\u53F0\u53BF"
        },
        {
          code: "370828",
          name: "\u91D1\u4E61\u53BF"
        },
        {
          code: "370829",
          name: "\u5609\u7965\u53BF"
        },
        {
          code: "370830",
          name: "\u6C76\u4E0A\u53BF"
        },
        {
          code: "370831",
          name: "\u6CD7\u6C34\u53BF"
        },
        {
          code: "370832",
          name: "\u6881\u5C71\u53BF"
        },
        {
          code: "370881",
          name: "\u66F2\u961C\u5E02"
        },
        {
          code: "370883",
          name: "\u90B9\u57CE\u5E02"
        }
      ],
      [
        {
          code: "370902",
          name: "\u6CF0\u5C71\u533A"
        },
        {
          code: "370911",
          name: "\u5CB1\u5CB3\u533A"
        },
        {
          code: "370921",
          name: "\u5B81\u9633\u53BF"
        },
        {
          code: "370923",
          name: "\u4E1C\u5E73\u53BF"
        },
        {
          code: "370982",
          name: "\u65B0\u6CF0\u5E02"
        },
        {
          code: "370983",
          name: "\u80A5\u57CE\u5E02"
        }
      ],
      [
        {
          code: "371002",
          name: "\u73AF\u7FE0\u533A"
        },
        {
          code: "371003",
          name: "\u6587\u767B\u533A"
        },
        {
          code: "371082",
          name: "\u8363\u6210\u5E02"
        },
        {
          code: "371083",
          name: "\u4E73\u5C71\u5E02"
        }
      ],
      [
        {
          code: "371102",
          name: "\u4E1C\u6E2F\u533A"
        },
        {
          code: "371103",
          name: "\u5C9A\u5C71\u533A"
        },
        {
          code: "371121",
          name: "\u4E94\u83B2\u53BF"
        },
        {
          code: "371122",
          name: "\u8392\u53BF"
        }
      ],
      [
        {
          code: "371202",
          name: "\u83B1\u57CE\u533A"
        },
        {
          code: "371203",
          name: "\u94A2\u57CE\u533A"
        }
      ],
      [
        {
          code: "371302",
          name: "\u5170\u5C71\u533A"
        },
        {
          code: "371311",
          name: "\u7F57\u5E84\u533A"
        },
        {
          code: "371312",
          name: "\u6CB3\u4E1C\u533A"
        },
        {
          code: "371321",
          name: "\u6C82\u5357\u53BF"
        },
        {
          code: "371322",
          name: "\u90EF\u57CE\u53BF"
        },
        {
          code: "371323",
          name: "\u6C82\u6C34\u53BF"
        },
        {
          code: "371324",
          name: "\u5170\u9675\u53BF"
        },
        {
          code: "371325",
          name: "\u8D39\u53BF"
        },
        {
          code: "371326",
          name: "\u5E73\u9091\u53BF"
        },
        {
          code: "371327",
          name: "\u8392\u5357\u53BF"
        },
        {
          code: "371328",
          name: "\u8499\u9634\u53BF"
        },
        {
          code: "371329",
          name: "\u4E34\u6CAD\u53BF"
        }
      ],
      [
        {
          code: "371402",
          name: "\u5FB7\u57CE\u533A"
        },
        {
          code: "371403",
          name: "\u9675\u57CE\u533A"
        },
        {
          code: "371422",
          name: "\u5B81\u6D25\u53BF"
        },
        {
          code: "371423",
          name: "\u5E86\u4E91\u53BF"
        },
        {
          code: "371424",
          name: "\u4E34\u9091\u53BF"
        },
        {
          code: "371425",
          name: "\u9F50\u6CB3\u53BF"
        },
        {
          code: "371426",
          name: "\u5E73\u539F\u53BF"
        },
        {
          code: "371427",
          name: "\u590F\u6D25\u53BF"
        },
        {
          code: "371428",
          name: "\u6B66\u57CE\u53BF"
        },
        {
          code: "371481",
          name: "\u4E50\u9675\u5E02"
        },
        {
          code: "371482",
          name: "\u79B9\u57CE\u5E02"
        }
      ],
      [
        {
          code: "371502",
          name: "\u4E1C\u660C\u5E9C\u533A"
        },
        {
          code: "371521",
          name: "\u9633\u8C37\u53BF"
        },
        {
          code: "371522",
          name: "\u8398\u53BF"
        },
        {
          code: "371523",
          name: "\u830C\u5E73\u53BF"
        },
        {
          code: "371524",
          name: "\u4E1C\u963F\u53BF"
        },
        {
          code: "371525",
          name: "\u51A0\u53BF"
        },
        {
          code: "371526",
          name: "\u9AD8\u5510\u53BF"
        },
        {
          code: "371581",
          name: "\u4E34\u6E05\u5E02"
        }
      ],
      [
        {
          code: "371602",
          name: "\u6EE8\u57CE\u533A"
        },
        {
          code: "371603",
          name: "\u6CBE\u5316\u533A"
        },
        {
          code: "371621",
          name: "\u60E0\u6C11\u53BF"
        },
        {
          code: "371622",
          name: "\u9633\u4FE1\u53BF"
        },
        {
          code: "371623",
          name: "\u65E0\u68E3\u53BF"
        },
        {
          code: "371625",
          name: "\u535A\u5174\u53BF"
        },
        {
          code: "371626",
          name: "\u90B9\u5E73\u53BF"
        }
      ],
      [
        {
          code: "371702",
          name: "\u7261\u4E39\u533A"
        },
        {
          code: "371703",
          name: "\u5B9A\u9676\u533A"
        },
        {
          code: "371721",
          name: "\u66F9\u53BF"
        },
        {
          code: "371722",
          name: "\u5355\u53BF"
        },
        {
          code: "371723",
          name: "\u6210\u6B66\u53BF"
        },
        {
          code: "371724",
          name: "\u5DE8\u91CE\u53BF"
        },
        {
          code: "371725",
          name: "\u90D3\u57CE\u53BF"
        },
        {
          code: "371726",
          name: "\u9104\u57CE\u53BF"
        },
        {
          code: "371728",
          name: "\u4E1C\u660E\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "410102",
          name: "\u4E2D\u539F\u533A"
        },
        {
          code: "410103",
          name: "\u4E8C\u4E03\u533A"
        },
        {
          code: "410104",
          name: "\u7BA1\u57CE\u56DE\u65CF\u533A"
        },
        {
          code: "410105",
          name: "\u91D1\u6C34\u533A"
        },
        {
          code: "410106",
          name: "\u4E0A\u8857\u533A"
        },
        {
          code: "410108",
          name: "\u60E0\u6D4E\u533A"
        },
        {
          code: "410122",
          name: "\u4E2D\u725F\u53BF"
        },
        {
          code: "410181",
          name: "\u5DE9\u4E49\u5E02"
        },
        {
          code: "410182",
          name: "\u8365\u9633\u5E02"
        },
        {
          code: "410183",
          name: "\u65B0\u5BC6\u5E02"
        },
        {
          code: "410184",
          name: "\u65B0\u90D1\u5E02"
        },
        {
          code: "410185",
          name: "\u767B\u5C01\u5E02"
        }
      ],
      [
        {
          code: "410202",
          name: "\u9F99\u4EAD\u533A"
        },
        {
          code: "410203",
          name: "\u987A\u6CB3\u56DE\u65CF\u533A"
        },
        {
          code: "410204",
          name: "\u9F13\u697C\u533A"
        },
        {
          code: "410205",
          name: "\u79B9\u738B\u53F0\u533A"
        },
        {
          code: "410212",
          name: "\u7965\u7B26\u533A"
        },
        {
          code: "410221",
          name: "\u675E\u53BF"
        },
        {
          code: "410222",
          name: "\u901A\u8BB8\u53BF"
        },
        {
          code: "410223",
          name: "\u5C09\u6C0F\u53BF"
        },
        {
          code: "410225",
          name: "\u5170\u8003\u53BF"
        }
      ],
      [
        {
          code: "410302",
          name: "\u8001\u57CE\u533A"
        },
        {
          code: "410303",
          name: "\u897F\u5DE5\u533A"
        },
        {
          code: "410304",
          name: "\u700D\u6CB3\u56DE\u65CF\u533A"
        },
        {
          code: "410305",
          name: "\u6DA7\u897F\u533A"
        },
        {
          code: "410307",
          name: "\u5043\u5E08\u533A"
        },
        {
          code: "410308",
          name: "\u5B5F\u6D25\u533A"
        },
        {
          code: "410311",
          name: "\u6D1B\u9F99\u533A"
        },
        {
          code: "410323",
          name: "\u65B0\u5B89\u53BF"
        },
        {
          code: "410324",
          name: "\u683E\u5DDD\u53BF"
        },
        {
          code: "410325",
          name: "\u5D69\u53BF"
        },
        {
          code: "410326",
          name: "\u6C5D\u9633\u53BF"
        },
        {
          code: "410327",
          name: "\u5B9C\u9633\u53BF"
        },
        {
          code: "410328",
          name: "\u6D1B\u5B81\u53BF"
        },
        {
          code: "410329",
          name: "\u4F0A\u5DDD\u53BF"
        }
      ],
      [
        {
          code: "410402",
          name: "\u65B0\u534E\u533A"
        },
        {
          code: "410403",
          name: "\u536B\u4E1C\u533A"
        },
        {
          code: "410404",
          name: "\u77F3\u9F99\u533A"
        },
        {
          code: "410411",
          name: "\u6E5B\u6CB3\u533A"
        },
        {
          code: "410421",
          name: "\u5B9D\u4E30\u53BF"
        },
        {
          code: "410422",
          name: "\u53F6\u53BF"
        },
        {
          code: "410423",
          name: "\u9C81\u5C71\u53BF"
        },
        {
          code: "410425",
          name: "\u90CF\u53BF"
        },
        {
          code: "410481",
          name: "\u821E\u94A2\u5E02"
        },
        {
          code: "410482",
          name: "\u6C5D\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "410502",
          name: "\u6587\u5CF0\u533A"
        },
        {
          code: "410503",
          name: "\u5317\u5173\u533A"
        },
        {
          code: "410505",
          name: "\u6BB7\u90FD\u533A"
        },
        {
          code: "410506",
          name: "\u9F99\u5B89\u533A"
        },
        {
          code: "410522",
          name: "\u5B89\u9633\u53BF"
        },
        {
          code: "410523",
          name: "\u6C64\u9634\u53BF"
        },
        {
          code: "410526",
          name: "\u6ED1\u53BF"
        },
        {
          code: "410527",
          name: "\u5185\u9EC4\u53BF"
        },
        {
          code: "410581",
          name: "\u6797\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "410602",
          name: "\u9E64\u5C71\u533A"
        },
        {
          code: "410603",
          name: "\u5C71\u57CE\u533A"
        },
        {
          code: "410611",
          name: "\u6DC7\u6EE8\u533A"
        },
        {
          code: "410621",
          name: "\u6D5A\u53BF"
        },
        {
          code: "410622",
          name: "\u6DC7\u53BF"
        }
      ],
      [
        {
          code: "410702",
          name: "\u7EA2\u65D7\u533A"
        },
        {
          code: "410703",
          name: "\u536B\u6EE8\u533A"
        },
        {
          code: "410704",
          name: "\u51E4\u6CC9\u533A"
        },
        {
          code: "410711",
          name: "\u7267\u91CE\u533A"
        },
        {
          code: "410721",
          name: "\u65B0\u4E61\u53BF"
        },
        {
          code: "410724",
          name: "\u83B7\u5609\u53BF"
        },
        {
          code: "410725",
          name: "\u539F\u9633\u53BF"
        },
        {
          code: "410726",
          name: "\u5EF6\u6D25\u53BF"
        },
        {
          code: "410727",
          name: "\u5C01\u4E18\u53BF"
        },
        {
          code: "410728",
          name: "\u957F\u57A3\u53BF"
        },
        {
          code: "410781",
          name: "\u536B\u8F89\u5E02"
        },
        {
          code: "410782",
          name: "\u8F89\u53BF\u5E02"
        }
      ],
      [
        {
          code: "410802",
          name: "\u89E3\u653E\u533A"
        },
        {
          code: "410803",
          name: "\u4E2D\u7AD9\u533A"
        },
        {
          code: "410804",
          name: "\u9A6C\u6751\u533A"
        },
        {
          code: "410811",
          name: "\u5C71\u9633\u533A"
        },
        {
          code: "410821",
          name: "\u4FEE\u6B66\u53BF"
        },
        {
          code: "410822",
          name: "\u535A\u7231\u53BF"
        },
        {
          code: "410823",
          name: "\u6B66\u965F\u53BF"
        },
        {
          code: "410825",
          name: "\u6E29\u53BF"
        },
        {
          code: "410882",
          name: "\u6C81\u9633\u5E02"
        },
        {
          code: "410883",
          name: "\u5B5F\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "410902",
          name: "\u534E\u9F99\u533A"
        },
        {
          code: "410922",
          name: "\u6E05\u4E30\u53BF"
        },
        {
          code: "410923",
          name: "\u5357\u4E50\u53BF"
        },
        {
          code: "410926",
          name: "\u8303\u53BF"
        },
        {
          code: "410927",
          name: "\u53F0\u524D\u53BF"
        },
        {
          code: "410928",
          name: "\u6FEE\u9633\u53BF"
        }
      ],
      [
        {
          code: "411002",
          name: "\u9B4F\u90FD\u533A"
        },
        {
          code: "411003",
          name: "\u5EFA\u5B89\u533A"
        },
        {
          code: "411024",
          name: "\u9122\u9675\u53BF"
        },
        {
          code: "411025",
          name: "\u8944\u57CE\u53BF"
        },
        {
          code: "411081",
          name: "\u79B9\u5DDE\u5E02"
        },
        {
          code: "411082",
          name: "\u957F\u845B\u5E02"
        }
      ],
      [
        {
          code: "411102",
          name: "\u6E90\u6C47\u533A"
        },
        {
          code: "411103",
          name: "\u90FE\u57CE\u533A"
        },
        {
          code: "411104",
          name: "\u53EC\u9675\u533A"
        },
        {
          code: "411121",
          name: "\u821E\u9633\u53BF"
        },
        {
          code: "411122",
          name: "\u4E34\u988D\u53BF"
        }
      ],
      [
        {
          code: "411202",
          name: "\u6E56\u6EE8\u533A"
        },
        {
          code: "411203",
          name: "\u9655\u5DDE\u533A"
        },
        {
          code: "411221",
          name: "\u6E11\u6C60\u53BF"
        },
        {
          code: "411224",
          name: "\u5362\u6C0F\u53BF"
        },
        {
          code: "411281",
          name: "\u4E49\u9A6C\u5E02"
        },
        {
          code: "411282",
          name: "\u7075\u5B9D\u5E02"
        }
      ],
      [
        {
          code: "411302",
          name: "\u5B9B\u57CE\u533A"
        },
        {
          code: "411303",
          name: "\u5367\u9F99\u533A"
        },
        {
          code: "411321",
          name: "\u5357\u53EC\u53BF"
        },
        {
          code: "411322",
          name: "\u65B9\u57CE\u53BF"
        },
        {
          code: "411323",
          name: "\u897F\u5CE1\u53BF"
        },
        {
          code: "411324",
          name: "\u9547\u5E73\u53BF"
        },
        {
          code: "411325",
          name: "\u5185\u4E61\u53BF"
        },
        {
          code: "411326",
          name: "\u6DC5\u5DDD\u53BF"
        },
        {
          code: "411327",
          name: "\u793E\u65D7\u53BF"
        },
        {
          code: "411328",
          name: "\u5510\u6CB3\u53BF"
        },
        {
          code: "411329",
          name: "\u65B0\u91CE\u53BF"
        },
        {
          code: "411330",
          name: "\u6850\u67CF\u53BF"
        },
        {
          code: "411381",
          name: "\u9093\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "411402",
          name: "\u6881\u56ED\u533A"
        },
        {
          code: "411403",
          name: "\u7762\u9633\u533A"
        },
        {
          code: "411421",
          name: "\u6C11\u6743\u53BF"
        },
        {
          code: "411422",
          name: "\u7762\u53BF"
        },
        {
          code: "411423",
          name: "\u5B81\u9675\u53BF"
        },
        {
          code: "411424",
          name: "\u67D8\u57CE\u53BF"
        },
        {
          code: "411425",
          name: "\u865E\u57CE\u53BF"
        },
        {
          code: "411426",
          name: "\u590F\u9091\u53BF"
        },
        {
          code: "411481",
          name: "\u6C38\u57CE\u5E02"
        }
      ],
      [
        {
          code: "411502",
          name: "\u6D49\u6CB3\u533A"
        },
        {
          code: "411503",
          name: "\u5E73\u6865\u533A"
        },
        {
          code: "411521",
          name: "\u7F57\u5C71\u53BF"
        },
        {
          code: "411522",
          name: "\u5149\u5C71\u53BF"
        },
        {
          code: "411523",
          name: "\u65B0\u53BF"
        },
        {
          code: "411524",
          name: "\u5546\u57CE\u53BF"
        },
        {
          code: "411525",
          name: "\u56FA\u59CB\u53BF"
        },
        {
          code: "411526",
          name: "\u6F62\u5DDD\u53BF"
        },
        {
          code: "411527",
          name: "\u6DEE\u6EE8\u53BF"
        },
        {
          code: "411528",
          name: "\u606F\u53BF"
        }
      ],
      [
        {
          code: "411602",
          name: "\u5DDD\u6C47\u533A"
        },
        {
          code: "411621",
          name: "\u6276\u6C9F\u53BF"
        },
        {
          code: "411622",
          name: "\u897F\u534E\u53BF"
        },
        {
          code: "411623",
          name: "\u5546\u6C34\u53BF"
        },
        {
          code: "411624",
          name: "\u6C88\u4E18\u53BF"
        },
        {
          code: "411625",
          name: "\u90F8\u57CE\u53BF"
        },
        {
          code: "411626",
          name: "\u6DEE\u9633\u53BF"
        },
        {
          code: "411627",
          name: "\u592A\u5EB7\u53BF"
        },
        {
          code: "411628",
          name: "\u9E7F\u9091\u53BF"
        },
        {
          code: "411681",
          name: "\u9879\u57CE\u5E02"
        }
      ],
      [
        {
          code: "411702",
          name: "\u9A7F\u57CE\u533A"
        },
        {
          code: "411721",
          name: "\u897F\u5E73\u53BF"
        },
        {
          code: "411722",
          name: "\u4E0A\u8521\u53BF"
        },
        {
          code: "411723",
          name: "\u5E73\u8206\u53BF"
        },
        {
          code: "411724",
          name: "\u6B63\u9633\u53BF"
        },
        {
          code: "411725",
          name: "\u786E\u5C71\u53BF"
        },
        {
          code: "411726",
          name: "\u6CCC\u9633\u53BF"
        },
        {
          code: "411727",
          name: "\u6C5D\u5357\u53BF"
        },
        {
          code: "411728",
          name: "\u9042\u5E73\u53BF"
        },
        {
          code: "411729",
          name: "\u65B0\u8521\u53BF"
        }
      ],
      [
        {
          code: "419001",
          name: "\u6D4E\u6E90\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "420102",
          name: "\u6C5F\u5CB8\u533A"
        },
        {
          code: "420103",
          name: "\u6C5F\u6C49\u533A"
        },
        {
          code: "420104",
          name: "\u785A\u53E3\u533A"
        },
        {
          code: "420105",
          name: "\u6C49\u9633\u533A"
        },
        {
          code: "420106",
          name: "\u6B66\u660C\u533A"
        },
        {
          code: "420107",
          name: "\u9752\u5C71\u533A"
        },
        {
          code: "420111",
          name: "\u6D2A\u5C71\u533A"
        },
        {
          code: "420112",
          name: "\u4E1C\u897F\u6E56\u533A"
        },
        {
          code: "420113",
          name: "\u6C49\u5357\u533A"
        },
        {
          code: "420114",
          name: "\u8521\u7538\u533A"
        },
        {
          code: "420115",
          name: "\u6C5F\u590F\u533A"
        },
        {
          code: "420116",
          name: "\u9EC4\u9642\u533A"
        },
        {
          code: "420117",
          name: "\u65B0\u6D32\u533A"
        }
      ],
      [
        {
          code: "420202",
          name: "\u9EC4\u77F3\u6E2F\u533A"
        },
        {
          code: "420203",
          name: "\u897F\u585E\u5C71\u533A"
        },
        {
          code: "420204",
          name: "\u4E0B\u9646\u533A"
        },
        {
          code: "420205",
          name: "\u94C1\u5C71\u533A"
        },
        {
          code: "420222",
          name: "\u9633\u65B0\u53BF"
        },
        {
          code: "420281",
          name: "\u5927\u51B6\u5E02"
        }
      ],
      [
        {
          code: "420302",
          name: "\u8305\u7BAD\u533A"
        },
        {
          code: "420303",
          name: "\u5F20\u6E7E\u533A"
        },
        {
          code: "420304",
          name: "\u90E7\u9633\u533A"
        },
        {
          code: "420322",
          name: "\u90E7\u897F\u53BF"
        },
        {
          code: "420323",
          name: "\u7AF9\u5C71\u53BF"
        },
        {
          code: "420324",
          name: "\u7AF9\u6EAA\u53BF"
        },
        {
          code: "420325",
          name: "\u623F\u53BF"
        },
        {
          code: "420381",
          name: "\u4E39\u6C5F\u53E3\u5E02"
        }
      ],
      [
        {
          code: "420502",
          name: "\u897F\u9675\u533A"
        },
        {
          code: "420503",
          name: "\u4F0D\u5BB6\u5C97\u533A"
        },
        {
          code: "420504",
          name: "\u70B9\u519B\u533A"
        },
        {
          code: "420505",
          name: "\u7307\u4EAD\u533A"
        },
        {
          code: "420506",
          name: "\u5937\u9675\u533A"
        },
        {
          code: "420525",
          name: "\u8FDC\u5B89\u53BF"
        },
        {
          code: "420526",
          name: "\u5174\u5C71\u53BF"
        },
        {
          code: "420527",
          name: "\u79ED\u5F52\u53BF"
        },
        {
          code: "420528",
          name: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "420529",
          name: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "420581",
          name: "\u5B9C\u90FD\u5E02"
        },
        {
          code: "420582",
          name: "\u5F53\u9633\u5E02"
        },
        {
          code: "420583",
          name: "\u679D\u6C5F\u5E02"
        }
      ],
      [
        {
          code: "420602",
          name: "\u8944\u57CE\u533A"
        },
        {
          code: "420606",
          name: "\u6A0A\u57CE\u533A"
        },
        {
          code: "420607",
          name: "\u8944\u5DDE\u533A"
        },
        {
          code: "420624",
          name: "\u5357\u6F33\u53BF"
        },
        {
          code: "420625",
          name: "\u8C37\u57CE\u53BF"
        },
        {
          code: "420626",
          name: "\u4FDD\u5EB7\u53BF"
        },
        {
          code: "420682",
          name: "\u8001\u6CB3\u53E3\u5E02"
        },
        {
          code: "420683",
          name: "\u67A3\u9633\u5E02"
        },
        {
          code: "420684",
          name: "\u5B9C\u57CE\u5E02"
        }
      ],
      [
        {
          code: "420702",
          name: "\u6881\u5B50\u6E56\u533A"
        },
        {
          code: "420703",
          name: "\u534E\u5BB9\u533A"
        },
        {
          code: "420704",
          name: "\u9102\u57CE\u533A"
        }
      ],
      [
        {
          code: "420802",
          name: "\u4E1C\u5B9D\u533A"
        },
        {
          code: "420804",
          name: "\u6387\u5200\u533A"
        },
        {
          code: "420821",
          name: "\u4EAC\u5C71\u53BF"
        },
        {
          code: "420822",
          name: "\u6C99\u6D0B\u53BF"
        },
        {
          code: "420881",
          name: "\u949F\u7965\u5E02"
        }
      ],
      [
        {
          code: "420902",
          name: "\u5B5D\u5357\u533A"
        },
        {
          code: "420921",
          name: "\u5B5D\u660C\u53BF"
        },
        {
          code: "420922",
          name: "\u5927\u609F\u53BF"
        },
        {
          code: "420923",
          name: "\u4E91\u68A6\u53BF"
        },
        {
          code: "420981",
          name: "\u5E94\u57CE\u5E02"
        },
        {
          code: "420982",
          name: "\u5B89\u9646\u5E02"
        },
        {
          code: "420984",
          name: "\u6C49\u5DDD\u5E02"
        }
      ],
      [
        {
          code: "421002",
          name: "\u6C99\u5E02\u533A"
        },
        {
          code: "421003",
          name: "\u8346\u5DDE\u533A"
        },
        {
          code: "421022",
          name: "\u516C\u5B89\u53BF"
        },
        {
          code: "421023",
          name: "\u76D1\u5229\u53BF"
        },
        {
          code: "421024",
          name: "\u6C5F\u9675\u53BF"
        },
        {
          code: "421081",
          name: "\u77F3\u9996\u5E02"
        },
        {
          code: "421083",
          name: "\u6D2A\u6E56\u5E02"
        },
        {
          code: "421087",
          name: "\u677E\u6ECB\u5E02"
        }
      ],
      [
        {
          code: "421102",
          name: "\u9EC4\u5DDE\u533A"
        },
        {
          code: "421121",
          name: "\u56E2\u98CE\u53BF"
        },
        {
          code: "421122",
          name: "\u7EA2\u5B89\u53BF"
        },
        {
          code: "421123",
          name: "\u7F57\u7530\u53BF"
        },
        {
          code: "421124",
          name: "\u82F1\u5C71\u53BF"
        },
        {
          code: "421125",
          name: "\u6D60\u6C34\u53BF"
        },
        {
          code: "421126",
          name: "\u8572\u6625\u53BF"
        },
        {
          code: "421127",
          name: "\u9EC4\u6885\u53BF"
        },
        {
          code: "421181",
          name: "\u9EBB\u57CE\u5E02"
        },
        {
          code: "421182",
          name: "\u6B66\u7A74\u5E02"
        }
      ],
      [
        {
          code: "421202",
          name: "\u54B8\u5B89\u533A"
        },
        {
          code: "421221",
          name: "\u5609\u9C7C\u53BF"
        },
        {
          code: "421222",
          name: "\u901A\u57CE\u53BF"
        },
        {
          code: "421223",
          name: "\u5D07\u9633\u53BF"
        },
        {
          code: "421224",
          name: "\u901A\u5C71\u53BF"
        },
        {
          code: "421281",
          name: "\u8D64\u58C1\u5E02"
        }
      ],
      [
        {
          code: "421303",
          name: "\u66FE\u90FD\u533A"
        },
        {
          code: "421321",
          name: "\u968F\u53BF"
        },
        {
          code: "421381",
          name: "\u5E7F\u6C34\u5E02"
        }
      ],
      [
        {
          code: "422801",
          name: "\u6069\u65BD\u5E02"
        },
        {
          code: "422802",
          name: "\u5229\u5DDD\u5E02"
        },
        {
          code: "422822",
          name: "\u5EFA\u59CB\u53BF"
        },
        {
          code: "422823",
          name: "\u5DF4\u4E1C\u53BF"
        },
        {
          code: "422825",
          name: "\u5BA3\u6069\u53BF"
        },
        {
          code: "422826",
          name: "\u54B8\u4E30\u53BF"
        },
        {
          code: "422827",
          name: "\u6765\u51E4\u53BF"
        },
        {
          code: "422828",
          name: "\u9E64\u5CF0\u53BF"
        }
      ],
      [
        {
          code: "429004",
          name: "\u4ED9\u6843\u5E02"
        },
        {
          code: "429005",
          name: "\u6F5C\u6C5F\u5E02"
        },
        {
          code: "429006",
          name: "\u5929\u95E8\u5E02"
        },
        {
          code: "429021",
          name: "\u795E\u519C\u67B6\u6797\u533A"
        }
      ]
    ],
    [
      [
        {
          code: "430102",
          name: "\u8299\u84C9\u533A"
        },
        {
          code: "430103",
          name: "\u5929\u5FC3\u533A"
        },
        {
          code: "430104",
          name: "\u5CB3\u9E93\u533A"
        },
        {
          code: "430105",
          name: "\u5F00\u798F\u533A"
        },
        {
          code: "430111",
          name: "\u96E8\u82B1\u533A"
        },
        {
          code: "430112",
          name: "\u671B\u57CE\u533A"
        },
        {
          code: "430121",
          name: "\u957F\u6C99\u53BF"
        },
        {
          code: "430181",
          name: "\u6D4F\u9633\u5E02"
        },
        {
          code: "430182",
          name: "\u5B81\u4E61\u5E02"
        }
      ],
      [
        {
          code: "430202",
          name: "\u8377\u5858\u533A"
        },
        {
          code: "430203",
          name: "\u82A6\u6DDE\u533A"
        },
        {
          code: "430204",
          name: "\u77F3\u5CF0\u533A"
        },
        {
          code: "430211",
          name: "\u5929\u5143\u533A"
        },
        {
          code: "430221",
          name: "\u682A\u6D32\u53BF"
        },
        {
          code: "430223",
          name: "\u6538\u53BF"
        },
        {
          code: "430224",
          name: "\u8336\u9675\u53BF"
        },
        {
          code: "430225",
          name: "\u708E\u9675\u53BF"
        },
        {
          code: "430281",
          name: "\u91B4\u9675\u5E02"
        }
      ],
      [
        {
          code: "430302",
          name: "\u96E8\u6E56\u533A"
        },
        {
          code: "430304",
          name: "\u5CB3\u5858\u533A"
        },
        {
          code: "430321",
          name: "\u6E58\u6F6D\u53BF"
        },
        {
          code: "430381",
          name: "\u6E58\u4E61\u5E02"
        },
        {
          code: "430382",
          name: "\u97F6\u5C71\u5E02"
        }
      ],
      [
        {
          code: "430405",
          name: "\u73E0\u6656\u533A"
        },
        {
          code: "430406",
          name: "\u96C1\u5CF0\u533A"
        },
        {
          code: "430407",
          name: "\u77F3\u9F13\u533A"
        },
        {
          code: "430408",
          name: "\u84B8\u6E58\u533A"
        },
        {
          code: "430412",
          name: "\u5357\u5CB3\u533A"
        },
        {
          code: "430421",
          name: "\u8861\u9633\u53BF"
        },
        {
          code: "430422",
          name: "\u8861\u5357\u53BF"
        },
        {
          code: "430423",
          name: "\u8861\u5C71\u53BF"
        },
        {
          code: "430424",
          name: "\u8861\u4E1C\u53BF"
        },
        {
          code: "430426",
          name: "\u7941\u4E1C\u53BF"
        },
        {
          code: "430481",
          name: "\u8012\u9633\u5E02"
        },
        {
          code: "430482",
          name: "\u5E38\u5B81\u5E02"
        }
      ],
      [
        {
          code: "430502",
          name: "\u53CC\u6E05\u533A"
        },
        {
          code: "430503",
          name: "\u5927\u7965\u533A"
        },
        {
          code: "430511",
          name: "\u5317\u5854\u533A"
        },
        {
          code: "430521",
          name: "\u90B5\u4E1C\u53BF"
        },
        {
          code: "430522",
          name: "\u65B0\u90B5\u53BF"
        },
        {
          code: "430523",
          name: "\u90B5\u9633\u53BF"
        },
        {
          code: "430524",
          name: "\u9686\u56DE\u53BF"
        },
        {
          code: "430525",
          name: "\u6D1E\u53E3\u53BF"
        },
        {
          code: "430527",
          name: "\u7EE5\u5B81\u53BF"
        },
        {
          code: "430528",
          name: "\u65B0\u5B81\u53BF"
        },
        {
          code: "430529",
          name: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "430581",
          name: "\u6B66\u5188\u5E02"
        }
      ],
      [
        {
          code: "430602",
          name: "\u5CB3\u9633\u697C\u533A"
        },
        {
          code: "430603",
          name: "\u4E91\u6EAA\u533A"
        },
        {
          code: "430611",
          name: "\u541B\u5C71\u533A"
        },
        {
          code: "430621",
          name: "\u5CB3\u9633\u53BF"
        },
        {
          code: "430623",
          name: "\u534E\u5BB9\u53BF"
        },
        {
          code: "430624",
          name: "\u6E58\u9634\u53BF"
        },
        {
          code: "430626",
          name: "\u5E73\u6C5F\u53BF"
        },
        {
          code: "430681",
          name: "\u6C68\u7F57\u5E02"
        },
        {
          code: "430682",
          name: "\u4E34\u6E58\u5E02"
        }
      ],
      [
        {
          code: "430702",
          name: "\u6B66\u9675\u533A"
        },
        {
          code: "430703",
          name: "\u9F0E\u57CE\u533A"
        },
        {
          code: "430721",
          name: "\u5B89\u4E61\u53BF"
        },
        {
          code: "430722",
          name: "\u6C49\u5BFF\u53BF"
        },
        {
          code: "430723",
          name: "\u6FA7\u53BF"
        },
        {
          code: "430724",
          name: "\u4E34\u6FA7\u53BF"
        },
        {
          code: "430725",
          name: "\u6843\u6E90\u53BF"
        },
        {
          code: "430726",
          name: "\u77F3\u95E8\u53BF"
        },
        {
          code: "430781",
          name: "\u6D25\u5E02\u5E02"
        }
      ],
      [
        {
          code: "430802",
          name: "\u6C38\u5B9A\u533A"
        },
        {
          code: "430811",
          name: "\u6B66\u9675\u6E90\u533A"
        },
        {
          code: "430821",
          name: "\u6148\u5229\u53BF"
        },
        {
          code: "430822",
          name: "\u6851\u690D\u53BF"
        }
      ],
      [
        {
          code: "430902",
          name: "\u8D44\u9633\u533A"
        },
        {
          code: "430903",
          name: "\u8D6B\u5C71\u533A"
        },
        {
          code: "430921",
          name: "\u5357\u53BF"
        },
        {
          code: "430922",
          name: "\u6843\u6C5F\u53BF"
        },
        {
          code: "430923",
          name: "\u5B89\u5316\u53BF"
        },
        {
          code: "430981",
          name: "\u6C85\u6C5F\u5E02"
        }
      ],
      [
        {
          code: "431002",
          name: "\u5317\u6E56\u533A"
        },
        {
          code: "431003",
          name: "\u82CF\u4ED9\u533A"
        },
        {
          code: "431021",
          name: "\u6842\u9633\u53BF"
        },
        {
          code: "431022",
          name: "\u5B9C\u7AE0\u53BF"
        },
        {
          code: "431023",
          name: "\u6C38\u5174\u53BF"
        },
        {
          code: "431024",
          name: "\u5609\u79BE\u53BF"
        },
        {
          code: "431025",
          name: "\u4E34\u6B66\u53BF"
        },
        {
          code: "431026",
          name: "\u6C5D\u57CE\u53BF"
        },
        {
          code: "431027",
          name: "\u6842\u4E1C\u53BF"
        },
        {
          code: "431028",
          name: "\u5B89\u4EC1\u53BF"
        },
        {
          code: "431081",
          name: "\u8D44\u5174\u5E02"
        }
      ],
      [
        {
          code: "431102",
          name: "\u96F6\u9675\u533A"
        },
        {
          code: "431103",
          name: "\u51B7\u6C34\u6EE9\u533A"
        },
        {
          code: "431122",
          name: "\u4E1C\u5B89\u53BF"
        },
        {
          code: "431123",
          name: "\u53CC\u724C\u53BF"
        },
        {
          code: "431124",
          name: "\u9053\u53BF"
        },
        {
          code: "431125",
          name: "\u6C5F\u6C38\u53BF"
        },
        {
          code: "431126",
          name: "\u5B81\u8FDC\u53BF"
        },
        {
          code: "431127",
          name: "\u84DD\u5C71\u53BF"
        },
        {
          code: "431128",
          name: "\u65B0\u7530\u53BF"
        },
        {
          code: "431129",
          name: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431181",
          name: "\u7941\u9633\u5E02"
        }
      ],
      [
        {
          code: "431202",
          name: "\u9E64\u57CE\u533A"
        },
        {
          code: "431221",
          name: "\u4E2D\u65B9\u53BF"
        },
        {
          code: "431222",
          name: "\u6C85\u9675\u53BF"
        },
        {
          code: "431223",
          name: "\u8FB0\u6EAA\u53BF"
        },
        {
          code: "431224",
          name: "\u6E86\u6D66\u53BF"
        },
        {
          code: "431225",
          name: "\u4F1A\u540C\u53BF"
        },
        {
          code: "431226",
          name: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431227",
          name: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431228",
          name: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431229",
          name: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431230",
          name: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "431281",
          name: "\u6D2A\u6C5F\u5E02"
        }
      ],
      [
        {
          code: "431302",
          name: "\u5A04\u661F\u533A"
        },
        {
          code: "431321",
          name: "\u53CC\u5CF0\u53BF"
        },
        {
          code: "431322",
          name: "\u65B0\u5316\u53BF"
        },
        {
          code: "431381",
          name: "\u51B7\u6C34\u6C5F\u5E02"
        },
        {
          code: "431382",
          name: "\u6D9F\u6E90\u5E02"
        }
      ],
      [
        {
          code: "433101",
          name: "\u5409\u9996\u5E02"
        },
        {
          code: "433122",
          name: "\u6CF8\u6EAA\u53BF"
        },
        {
          code: "433123",
          name: "\u51E4\u51F0\u53BF"
        },
        {
          code: "433124",
          name: "\u82B1\u57A3\u53BF"
        },
        {
          code: "433125",
          name: "\u4FDD\u9756\u53BF"
        },
        {
          code: "433126",
          name: "\u53E4\u4E08\u53BF"
        },
        {
          code: "433127",
          name: "\u6C38\u987A\u53BF"
        },
        {
          code: "433130",
          name: "\u9F99\u5C71\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "440103",
          name: "\u8354\u6E7E\u533A"
        },
        {
          code: "440104",
          name: "\u8D8A\u79C0\u533A"
        },
        {
          code: "440105",
          name: "\u6D77\u73E0\u533A"
        },
        {
          code: "440106",
          name: "\u5929\u6CB3\u533A"
        },
        {
          code: "440111",
          name: "\u767D\u4E91\u533A"
        },
        {
          code: "440112",
          name: "\u9EC4\u57D4\u533A"
        },
        {
          code: "440113",
          name: "\u756A\u79BA\u533A"
        },
        {
          code: "440114",
          name: "\u82B1\u90FD\u533A"
        },
        {
          code: "440115",
          name: "\u5357\u6C99\u533A"
        },
        {
          code: "440117",
          name: "\u4ECE\u5316\u533A"
        },
        {
          code: "440118",
          name: "\u589E\u57CE\u533A"
        }
      ],
      [
        {
          code: "440203",
          name: "\u6B66\u6C5F\u533A"
        },
        {
          code: "440204",
          name: "\u6D48\u6C5F\u533A"
        },
        {
          code: "440205",
          name: "\u66F2\u6C5F\u533A"
        },
        {
          code: "440222",
          name: "\u59CB\u5174\u53BF"
        },
        {
          code: "440224",
          name: "\u4EC1\u5316\u53BF"
        },
        {
          code: "440229",
          name: "\u7FC1\u6E90\u53BF"
        },
        {
          code: "440232",
          name: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "440233",
          name: "\u65B0\u4E30\u53BF"
        },
        {
          code: "440281",
          name: "\u4E50\u660C\u5E02"
        },
        {
          code: "440282",
          name: "\u5357\u96C4\u5E02"
        }
      ],
      [
        {
          code: "440303",
          name: "\u7F57\u6E56\u533A"
        },
        {
          code: "440304",
          name: "\u798F\u7530\u533A"
        },
        {
          code: "440305",
          name: "\u5357\u5C71\u533A"
        },
        {
          code: "440306",
          name: "\u5B9D\u5B89\u533A"
        },
        {
          code: "440307",
          name: "\u9F99\u5C97\u533A"
        },
        {
          code: "440308",
          name: "\u76D0\u7530\u533A"
        },
        {
          code: "440309",
          name: "\u9F99\u534E\u533A"
        },
        {
          code: "440310",
          name: "\u576A\u5C71\u533A"
        }
      ],
      [
        {
          code: "440402",
          name: "\u9999\u6D32\u533A"
        },
        {
          code: "440403",
          name: "\u6597\u95E8\u533A"
        },
        {
          code: "440404",
          name: "\u91D1\u6E7E\u533A"
        }
      ],
      [
        {
          code: "440507",
          name: "\u9F99\u6E56\u533A"
        },
        {
          code: "440511",
          name: "\u91D1\u5E73\u533A"
        },
        {
          code: "440512",
          name: "\u6FE0\u6C5F\u533A"
        },
        {
          code: "440513",
          name: "\u6F6E\u9633\u533A"
        },
        {
          code: "440514",
          name: "\u6F6E\u5357\u533A"
        },
        {
          code: "440515",
          name: "\u6F84\u6D77\u533A"
        },
        {
          code: "440523",
          name: "\u5357\u6FB3\u53BF"
        }
      ],
      [
        {
          code: "440604",
          name: "\u7985\u57CE\u533A"
        },
        {
          code: "440605",
          name: "\u5357\u6D77\u533A"
        },
        {
          code: "440606",
          name: "\u987A\u5FB7\u533A"
        },
        {
          code: "440607",
          name: "\u4E09\u6C34\u533A"
        },
        {
          code: "440608",
          name: "\u9AD8\u660E\u533A"
        }
      ],
      [
        {
          code: "440703",
          name: "\u84EC\u6C5F\u533A"
        },
        {
          code: "440704",
          name: "\u6C5F\u6D77\u533A"
        },
        {
          code: "440705",
          name: "\u65B0\u4F1A\u533A"
        },
        {
          code: "440781",
          name: "\u53F0\u5C71\u5E02"
        },
        {
          code: "440783",
          name: "\u5F00\u5E73\u5E02"
        },
        {
          code: "440784",
          name: "\u9E64\u5C71\u5E02"
        },
        {
          code: "440785",
          name: "\u6069\u5E73\u5E02"
        }
      ],
      [
        {
          code: "440802",
          name: "\u8D64\u574E\u533A"
        },
        {
          code: "440803",
          name: "\u971E\u5C71\u533A"
        },
        {
          code: "440804",
          name: "\u5761\u5934\u533A"
        },
        {
          code: "440811",
          name: "\u9EBB\u7AE0\u533A"
        },
        {
          code: "440823",
          name: "\u9042\u6EAA\u53BF"
        },
        {
          code: "440825",
          name: "\u5F90\u95FB\u53BF"
        },
        {
          code: "440881",
          name: "\u5EC9\u6C5F\u5E02"
        },
        {
          code: "440882",
          name: "\u96F7\u5DDE\u5E02"
        },
        {
          code: "440883",
          name: "\u5434\u5DDD\u5E02"
        }
      ],
      [
        {
          code: "440902",
          name: "\u8302\u5357\u533A"
        },
        {
          code: "440904",
          name: "\u7535\u767D\u533A"
        },
        {
          code: "440981",
          name: "\u9AD8\u5DDE\u5E02"
        },
        {
          code: "440982",
          name: "\u5316\u5DDE\u5E02"
        },
        {
          code: "440983",
          name: "\u4FE1\u5B9C\u5E02"
        }
      ],
      [
        {
          code: "441202",
          name: "\u7AEF\u5DDE\u533A"
        },
        {
          code: "441203",
          name: "\u9F0E\u6E56\u533A"
        },
        {
          code: "441204",
          name: "\u9AD8\u8981\u533A"
        },
        {
          code: "441223",
          name: "\u5E7F\u5B81\u53BF"
        },
        {
          code: "441224",
          name: "\u6000\u96C6\u53BF"
        },
        {
          code: "441225",
          name: "\u5C01\u5F00\u53BF"
        },
        {
          code: "441226",
          name: "\u5FB7\u5E86\u53BF"
        },
        {
          code: "441284",
          name: "\u56DB\u4F1A\u5E02"
        }
      ],
      [
        {
          code: "441302",
          name: "\u60E0\u57CE\u533A"
        },
        {
          code: "441303",
          name: "\u60E0\u9633\u533A"
        },
        {
          code: "441322",
          name: "\u535A\u7F57\u53BF"
        },
        {
          code: "441323",
          name: "\u60E0\u4E1C\u53BF"
        },
        {
          code: "441324",
          name: "\u9F99\u95E8\u53BF"
        }
      ],
      [
        {
          code: "441402",
          name: "\u6885\u6C5F\u533A"
        },
        {
          code: "441403",
          name: "\u6885\u53BF\u533A"
        },
        {
          code: "441422",
          name: "\u5927\u57D4\u53BF"
        },
        {
          code: "441423",
          name: "\u4E30\u987A\u53BF"
        },
        {
          code: "441424",
          name: "\u4E94\u534E\u53BF"
        },
        {
          code: "441426",
          name: "\u5E73\u8FDC\u53BF"
        },
        {
          code: "441427",
          name: "\u8549\u5CAD\u53BF"
        },
        {
          code: "441481",
          name: "\u5174\u5B81\u5E02"
        }
      ],
      [
        {
          code: "441502",
          name: "\u57CE\u533A"
        },
        {
          code: "441521",
          name: "\u6D77\u4E30\u53BF"
        },
        {
          code: "441523",
          name: "\u9646\u6CB3\u53BF"
        },
        {
          code: "441581",
          name: "\u9646\u4E30\u5E02"
        }
      ],
      [
        {
          code: "441602",
          name: "\u6E90\u57CE\u533A"
        },
        {
          code: "441621",
          name: "\u7D2B\u91D1\u53BF"
        },
        {
          code: "441622",
          name: "\u9F99\u5DDD\u53BF"
        },
        {
          code: "441623",
          name: "\u8FDE\u5E73\u53BF"
        },
        {
          code: "441624",
          name: "\u548C\u5E73\u53BF"
        },
        {
          code: "441625",
          name: "\u4E1C\u6E90\u53BF"
        }
      ],
      [
        {
          code: "441702",
          name: "\u6C5F\u57CE\u533A"
        },
        {
          code: "441704",
          name: "\u9633\u4E1C\u533A"
        },
        {
          code: "441721",
          name: "\u9633\u897F\u53BF"
        },
        {
          code: "441781",
          name: "\u9633\u6625\u5E02"
        }
      ],
      [
        {
          code: "441802",
          name: "\u6E05\u57CE\u533A"
        },
        {
          code: "441803",
          name: "\u6E05\u65B0\u533A"
        },
        {
          code: "441821",
          name: "\u4F5B\u5188\u53BF"
        },
        {
          code: "441823",
          name: "\u9633\u5C71\u53BF"
        },
        {
          code: "441825",
          name: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "441826",
          name: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "441881",
          name: "\u82F1\u5FB7\u5E02"
        },
        {
          code: "441882",
          name: "\u8FDE\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "441901",
          name: "\u4E1C\u57CE\u8857\u9053"
        },
        {
          code: "441902",
          name: "\u5357\u57CE\u8857\u9053"
        },
        {
          code: "441903",
          name: "\u4E07\u6C5F\u8857\u9053"
        },
        {
          code: "441904",
          name: "\u839E\u57CE\u8857\u9053"
        },
        {
          code: "441905",
          name: "\u77F3\u78A3\u9547"
        },
        {
          code: "441906",
          name: "\u77F3\u9F99\u9547"
        },
        {
          code: "441907",
          name: "\u8336\u5C71\u9547"
        },
        {
          code: "441908",
          name: "\u77F3\u6392\u9547"
        },
        {
          code: "441909",
          name: "\u4F01\u77F3\u9547"
        },
        {
          code: "441910",
          name: "\u6A2A\u6CA5\u9547"
        },
        {
          code: "441911",
          name: "\u6865\u5934\u9547"
        },
        {
          code: "441912",
          name: "\u8C22\u5C97\u9547"
        },
        {
          code: "441913",
          name: "\u4E1C\u5751\u9547"
        },
        {
          code: "441914",
          name: "\u5E38\u5E73\u9547"
        },
        {
          code: "441915",
          name: "\u5BEE\u6B65\u9547"
        },
        {
          code: "441916",
          name: "\u6A1F\u6728\u5934\u9547"
        },
        {
          code: "441917",
          name: "\u5927\u6717\u9547"
        },
        {
          code: "441918",
          name: "\u9EC4\u6C5F\u9547"
        },
        {
          code: "441919",
          name: "\u6E05\u6EAA\u9547"
        },
        {
          code: "441920",
          name: "\u5858\u53A6\u9547"
        },
        {
          code: "441921",
          name: "\u51E4\u5C97\u9547"
        },
        {
          code: "441922",
          name: "\u5927\u5CAD\u5C71\u9547"
        },
        {
          code: "441923",
          name: "\u957F\u5B89\u9547"
        },
        {
          code: "441924",
          name: "\u864E\u95E8\u9547"
        },
        {
          code: "441925",
          name: "\u539A\u8857\u9547"
        },
        {
          code: "441926",
          name: "\u6C99\u7530\u9547"
        },
        {
          code: "441927",
          name: "\u9053\u6ED8\u9547"
        },
        {
          code: "441928",
          name: "\u6D2A\u6885\u9547"
        },
        {
          code: "441929",
          name: "\u9EBB\u6D8C\u9547"
        },
        {
          code: "441930",
          name: "\u671B\u725B\u58A9\u9547"
        },
        {
          code: "441931",
          name: "\u4E2D\u5802\u9547"
        },
        {
          code: "441932",
          name: "\u9AD8\u57D7\u9547"
        },
        {
          code: "441933",
          name: "\u677E\u5C71\u6E56\u7BA1\u59D4\u4F1A"
        },
        {
          code: "441934",
          name: "\u864E\u95E8\u6E2F\u7BA1\u59D4\u4F1A"
        },
        {
          code: "441935",
          name: "\u4E1C\u839E\u751F\u6001\u56ED"
        }
      ],
      [
        {
          code: "442001",
          name: "\u77F3\u5C90\u533A\u8857\u9053"
        },
        {
          code: "442002",
          name: "\u4E1C\u533A\u8857\u9053"
        },
        {
          code: "442003",
          name: "\u706B\u70AC\u5F00\u53D1\u533A"
        },
        {
          code: "442004",
          name: "\u897F\u533A\u8857\u9053"
        },
        {
          code: "442005",
          name: "\u5357\u533A\u8857\u9053"
        },
        {
          code: "442006",
          name: "\u4E94\u6842\u5C71\u8857\u9053"
        },
        {
          code: "442007",
          name: "\u5C0F\u6984\u9547"
        },
        {
          code: "442008",
          name: "\u9EC4\u5703\u9547"
        },
        {
          code: "442009",
          name: "\u6C11\u4F17\u9547"
        },
        {
          code: "442010",
          name: "\u4E1C\u51E4\u9547"
        },
        {
          code: "442011",
          name: "\u4E1C\u5347\u9547"
        },
        {
          code: "442012",
          name: "\u53E4\u9547\u9547"
        },
        {
          code: "442013",
          name: "\u6C99\u6EAA\u9547"
        },
        {
          code: "442014",
          name: "\u5766\u6D32\u9547"
        },
        {
          code: "442015",
          name: "\u6E2F\u53E3\u9547"
        },
        {
          code: "442016",
          name: "\u4E09\u89D2\u9547"
        },
        {
          code: "442017",
          name: "\u6A2A\u680F\u9547"
        },
        {
          code: "442018",
          name: "\u5357\u5934\u9547"
        },
        {
          code: "442019",
          name: "\u961C\u6C99\u9547"
        },
        {
          code: "442020",
          name: "\u5357\u6717\u9547"
        },
        {
          code: "442021",
          name: "\u4E09\u4E61\u9547"
        },
        {
          code: "442022",
          name: "\u677F\u8299\u9547"
        },
        {
          code: "442023",
          name: "\u5927\u6D8C\u9547"
        },
        {
          code: "442024",
          name: "\u795E\u6E7E\u9547"
        }
      ],
      [
        {
          code: "445102",
          name: "\u6E58\u6865\u533A"
        },
        {
          code: "445103",
          name: "\u6F6E\u5B89\u533A"
        },
        {
          code: "445122",
          name: "\u9976\u5E73\u53BF"
        }
      ],
      [
        {
          code: "445202",
          name: "\u6995\u57CE\u533A"
        },
        {
          code: "445203",
          name: "\u63ED\u4E1C\u533A"
        },
        {
          code: "445222",
          name: "\u63ED\u897F\u53BF"
        },
        {
          code: "445224",
          name: "\u60E0\u6765\u53BF"
        },
        {
          code: "445281",
          name: "\u666E\u5B81\u5E02"
        }
      ],
      [
        {
          code: "445302",
          name: "\u4E91\u57CE\u533A"
        },
        {
          code: "445303",
          name: "\u4E91\u5B89\u533A"
        },
        {
          code: "445321",
          name: "\u65B0\u5174\u53BF"
        },
        {
          code: "445322",
          name: "\u90C1\u5357\u53BF"
        },
        {
          code: "445381",
          name: "\u7F57\u5B9A\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "450102",
          name: "\u5174\u5B81\u533A"
        },
        {
          code: "450103",
          name: "\u9752\u79C0\u533A"
        },
        {
          code: "450105",
          name: "\u6C5F\u5357\u533A"
        },
        {
          code: "450107",
          name: "\u897F\u4E61\u5858\u533A"
        },
        {
          code: "450108",
          name: "\u826F\u5E86\u533A"
        },
        {
          code: "450109",
          name: "\u9095\u5B81\u533A"
        },
        {
          code: "450110",
          name: "\u6B66\u9E23\u533A"
        },
        {
          code: "450123",
          name: "\u9686\u5B89\u53BF"
        },
        {
          code: "450124",
          name: "\u9A6C\u5C71\u53BF"
        },
        {
          code: "450125",
          name: "\u4E0A\u6797\u53BF"
        },
        {
          code: "450126",
          name: "\u5BBE\u9633\u53BF"
        },
        {
          code: "450181",
          name: "\u6A2A\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "450202",
          name: "\u57CE\u4E2D\u533A"
        },
        {
          code: "450203",
          name: "\u9C7C\u5CF0\u533A"
        },
        {
          code: "450204",
          name: "\u67F3\u5357\u533A"
        },
        {
          code: "450205",
          name: "\u67F3\u5317\u533A"
        },
        {
          code: "450206",
          name: "\u67F3\u6C5F\u533A"
        },
        {
          code: "450222",
          name: "\u67F3\u57CE\u53BF"
        },
        {
          code: "450223",
          name: "\u9E7F\u5BE8\u53BF"
        },
        {
          code: "450224",
          name: "\u878D\u5B89\u53BF"
        },
        {
          code: "450225",
          name: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "450226",
          name: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "450302",
          name: "\u79C0\u5CF0\u533A"
        },
        {
          code: "450303",
          name: "\u53E0\u5F69\u533A"
        },
        {
          code: "450304",
          name: "\u8C61\u5C71\u533A"
        },
        {
          code: "450305",
          name: "\u4E03\u661F\u533A"
        },
        {
          code: "450311",
          name: "\u96C1\u5C71\u533A"
        },
        {
          code: "450312",
          name: "\u4E34\u6842\u533A"
        },
        {
          code: "450321",
          name: "\u9633\u6714\u53BF"
        },
        {
          code: "450323",
          name: "\u7075\u5DDD\u53BF"
        },
        {
          code: "450324",
          name: "\u5168\u5DDE\u53BF"
        },
        {
          code: "450325",
          name: "\u5174\u5B89\u53BF"
        },
        {
          code: "450326",
          name: "\u6C38\u798F\u53BF"
        },
        {
          code: "450327",
          name: "\u704C\u9633\u53BF"
        },
        {
          code: "450328",
          name: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "450329",
          name: "\u8D44\u6E90\u53BF"
        },
        {
          code: "450330",
          name: "\u5E73\u4E50\u53BF"
        },
        {
          code: "450331",
          name: "\u8354\u6D66\u53BF"
        },
        {
          code: "450332",
          name: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "450403",
          name: "\u4E07\u79C0\u533A"
        },
        {
          code: "450405",
          name: "\u957F\u6D32\u533A"
        },
        {
          code: "450406",
          name: "\u9F99\u5729\u533A"
        },
        {
          code: "450421",
          name: "\u82CD\u68A7\u53BF"
        },
        {
          code: "450422",
          name: "\u85E4\u53BF"
        },
        {
          code: "450423",
          name: "\u8499\u5C71\u53BF"
        },
        {
          code: "450481",
          name: "\u5C91\u6EAA\u5E02"
        }
      ],
      [
        {
          code: "450502",
          name: "\u6D77\u57CE\u533A"
        },
        {
          code: "450503",
          name: "\u94F6\u6D77\u533A"
        },
        {
          code: "450512",
          name: "\u94C1\u5C71\u6E2F\u533A"
        },
        {
          code: "450521",
          name: "\u5408\u6D66\u53BF"
        }
      ],
      [
        {
          code: "450602",
          name: "\u6E2F\u53E3\u533A"
        },
        {
          code: "450603",
          name: "\u9632\u57CE\u533A"
        },
        {
          code: "450621",
          name: "\u4E0A\u601D\u53BF"
        },
        {
          code: "450681",
          name: "\u4E1C\u5174\u5E02"
        }
      ],
      [
        {
          code: "450702",
          name: "\u94A6\u5357\u533A"
        },
        {
          code: "450703",
          name: "\u94A6\u5317\u533A"
        },
        {
          code: "450721",
          name: "\u7075\u5C71\u53BF"
        },
        {
          code: "450722",
          name: "\u6D66\u5317\u53BF"
        }
      ],
      [
        {
          code: "450802",
          name: "\u6E2F\u5317\u533A"
        },
        {
          code: "450803",
          name: "\u6E2F\u5357\u533A"
        },
        {
          code: "450804",
          name: "\u8983\u5858\u533A"
        },
        {
          code: "450821",
          name: "\u5E73\u5357\u53BF"
        },
        {
          code: "450881",
          name: "\u6842\u5E73\u5E02"
        }
      ],
      [
        {
          code: "450902",
          name: "\u7389\u5DDE\u533A"
        },
        {
          code: "450903",
          name: "\u798F\u7EF5\u533A"
        },
        {
          code: "450921",
          name: "\u5BB9\u53BF"
        },
        {
          code: "450922",
          name: "\u9646\u5DDD\u53BF"
        },
        {
          code: "450923",
          name: "\u535A\u767D\u53BF"
        },
        {
          code: "450924",
          name: "\u5174\u4E1A\u53BF"
        },
        {
          code: "450981",
          name: "\u5317\u6D41\u5E02"
        }
      ],
      [
        {
          code: "451002",
          name: "\u53F3\u6C5F\u533A"
        },
        {
          code: "451021",
          name: "\u7530\u9633\u53BF"
        },
        {
          code: "451022",
          name: "\u7530\u4E1C\u53BF"
        },
        {
          code: "451023",
          name: "\u5E73\u679C\u53BF"
        },
        {
          code: "451024",
          name: "\u5FB7\u4FDD\u53BF"
        },
        {
          code: "451026",
          name: "\u90A3\u5761\u53BF"
        },
        {
          code: "451027",
          name: "\u51CC\u4E91\u53BF"
        },
        {
          code: "451028",
          name: "\u4E50\u4E1A\u53BF"
        },
        {
          code: "451029",
          name: "\u7530\u6797\u53BF"
        },
        {
          code: "451030",
          name: "\u897F\u6797\u53BF"
        },
        {
          code: "451031",
          name: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451081",
          name: "\u9756\u897F\u5E02"
        }
      ],
      [
        {
          code: "451102",
          name: "\u516B\u6B65\u533A"
        },
        {
          code: "451103",
          name: "\u5E73\u6842\u533A"
        },
        {
          code: "451121",
          name: "\u662D\u5E73\u53BF"
        },
        {
          code: "451122",
          name: "\u949F\u5C71\u53BF"
        },
        {
          code: "451123",
          name: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "451202",
          name: "\u91D1\u57CE\u6C5F\u533A"
        },
        {
          code: "451203",
          name: "\u5B9C\u5DDE\u533A"
        },
        {
          code: "451221",
          name: "\u5357\u4E39\u53BF"
        },
        {
          code: "451222",
          name: "\u5929\u5CE8\u53BF"
        },
        {
          code: "451223",
          name: "\u51E4\u5C71\u53BF"
        },
        {
          code: "451224",
          name: "\u4E1C\u5170\u53BF"
        },
        {
          code: "451225",
          name: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451226",
          name: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451227",
          name: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451228",
          name: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451229",
          name: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "451302",
          name: "\u5174\u5BBE\u533A"
        },
        {
          code: "451321",
          name: "\u5FFB\u57CE\u53BF"
        },
        {
          code: "451322",
          name: "\u8C61\u5DDE\u53BF"
        },
        {
          code: "451323",
          name: "\u6B66\u5BA3\u53BF"
        },
        {
          code: "451324",
          name: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "451381",
          name: "\u5408\u5C71\u5E02"
        }
      ],
      [
        {
          code: "451402",
          name: "\u6C5F\u5DDE\u533A"
        },
        {
          code: "451421",
          name: "\u6276\u7EE5\u53BF"
        },
        {
          code: "451422",
          name: "\u5B81\u660E\u53BF"
        },
        {
          code: "451423",
          name: "\u9F99\u5DDE\u53BF"
        },
        {
          code: "451424",
          name: "\u5927\u65B0\u53BF"
        },
        {
          code: "451425",
          name: "\u5929\u7B49\u53BF"
        },
        {
          code: "451481",
          name: "\u51ED\u7965\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "460105",
          name: "\u79C0\u82F1\u533A"
        },
        {
          code: "460106",
          name: "\u9F99\u534E\u533A"
        },
        {
          code: "460107",
          name: "\u743C\u5C71\u533A"
        },
        {
          code: "460108",
          name: "\u7F8E\u5170\u533A"
        }
      ],
      [
        {
          code: "460202",
          name: "\u6D77\u68E0\u533A"
        },
        {
          code: "460203",
          name: "\u5409\u9633\u533A"
        },
        {
          code: "460204",
          name: "\u5929\u6DAF\u533A"
        },
        {
          code: "460205",
          name: "\u5D16\u5DDE\u533A"
        }
      ],
      [
        {
          code: "460321",
          name: "\u897F\u6C99\u7FA4\u5C9B"
        },
        {
          code: "460322",
          name: "\u5357\u6C99\u7FA4\u5C9B"
        },
        {
          code: "460323",
          name: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF"
        }
      ],
      [
        {
          code: "460401",
          name: "\u90A3\u5927\u9547"
        },
        {
          code: "460402",
          name: "\u548C\u5E86\u9547"
        },
        {
          code: "460403",
          name: "\u5357\u4E30\u9547"
        },
        {
          code: "460404",
          name: "\u5927\u6210\u9547"
        },
        {
          code: "460405",
          name: "\u96C5\u661F\u9547"
        },
        {
          code: "460406",
          name: "\u5170\u6D0B\u9547"
        },
        {
          code: "460407",
          name: "\u5149\u6751\u9547"
        },
        {
          code: "460408",
          name: "\u6728\u68E0\u9547"
        },
        {
          code: "460409",
          name: "\u6D77\u5934\u9547"
        },
        {
          code: "460410",
          name: "\u5CE8\u8513\u9547"
        },
        {
          code: "460411",
          name: "\u4E09\u90FD\u9547"
        },
        {
          code: "460412",
          name: "\u738B\u4E94\u9547"
        },
        {
          code: "460413",
          name: "\u767D\u9A6C\u4E95\u9547"
        },
        {
          code: "460414",
          name: "\u4E2D\u548C\u9547"
        },
        {
          code: "460415",
          name: "\u6392\u6D66\u9547"
        },
        {
          code: "460416",
          name: "\u4E1C\u6210\u9547"
        },
        {
          code: "460417",
          name: "\u65B0\u5DDE\u9547"
        },
        {
          code: "460418",
          name: "\u56FD\u8425\u897F\u57F9\u519C\u573A"
        },
        {
          code: "460419",
          name: "\u56FD\u8425\u897F\u8054\u519C\u573A"
        },
        {
          code: "460420",
          name: "\u56FD\u8425\u84DD\u6D0B\u519C\u573A"
        },
        {
          code: "460421",
          name: "\u56FD\u8425\u516B\u4E00\u519C\u573A"
        },
        {
          code: "460422",
          name: "\u6D0B\u6D66\u7ECF\u6D4E\u5F00\u53D1\u533A"
        },
        {
          code: "460423",
          name: "\u534E\u5357\u70ED\u4F5C\u5B66\u9662"
        },
        {
          code: "460424",
          name: "\u7EA2\u5CAD\u519C\u573A"
        }
      ],
      [
        {
          code: "469001",
          name: "\u4E94\u6307\u5C71\u5E02"
        },
        {
          code: "469002",
          name: "\u743C\u6D77\u5E02"
        },
        {
          code: "469005",
          name: "\u6587\u660C\u5E02"
        },
        {
          code: "469006",
          name: "\u4E07\u5B81\u5E02"
        },
        {
          code: "469007",
          name: "\u4E1C\u65B9\u5E02"
        },
        {
          code: "469021",
          name: "\u5B9A\u5B89\u53BF"
        },
        {
          code: "469022",
          name: "\u5C6F\u660C\u53BF"
        },
        {
          code: "469023",
          name: "\u6F84\u8FC8\u53BF"
        },
        {
          code: "469024",
          name: "\u4E34\u9AD8\u53BF"
        },
        {
          code: "469025",
          name: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "469026",
          name: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "469027",
          name: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "469028",
          name: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "469029",
          name: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "469030",
          name: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "500101",
          name: "\u4E07\u5DDE\u533A"
        },
        {
          code: "500102",
          name: "\u6DAA\u9675\u533A"
        },
        {
          code: "500103",
          name: "\u6E1D\u4E2D\u533A"
        },
        {
          code: "500104",
          name: "\u5927\u6E21\u53E3\u533A"
        },
        {
          code: "500105",
          name: "\u6C5F\u5317\u533A"
        },
        {
          code: "500106",
          name: "\u6C99\u576A\u575D\u533A"
        },
        {
          code: "500107",
          name: "\u4E5D\u9F99\u5761\u533A"
        },
        {
          code: "500108",
          name: "\u5357\u5CB8\u533A"
        },
        {
          code: "500109",
          name: "\u5317\u789A\u533A"
        },
        {
          code: "500110",
          name: "\u7DA6\u6C5F\u533A"
        },
        {
          code: "500111",
          name: "\u5927\u8DB3\u533A"
        },
        {
          code: "500112",
          name: "\u6E1D\u5317\u533A"
        },
        {
          code: "500113",
          name: "\u5DF4\u5357\u533A"
        },
        {
          code: "500114",
          name: "\u9ED4\u6C5F\u533A"
        },
        {
          code: "500115",
          name: "\u957F\u5BFF\u533A"
        },
        {
          code: "500116",
          name: "\u6C5F\u6D25\u533A"
        },
        {
          code: "500117",
          name: "\u5408\u5DDD\u533A"
        },
        {
          code: "500118",
          name: "\u6C38\u5DDD\u533A"
        },
        {
          code: "500119",
          name: "\u5357\u5DDD\u533A"
        },
        {
          code: "500120",
          name: "\u74A7\u5C71\u533A"
        },
        {
          code: "500151",
          name: "\u94DC\u6881\u533A"
        },
        {
          code: "500152",
          name: "\u6F7C\u5357\u533A"
        },
        {
          code: "500153",
          name: "\u8363\u660C\u533A"
        },
        {
          code: "500154",
          name: "\u5F00\u5DDE\u533A"
        },
        {
          code: "500155",
          name: "\u6881\u5E73\u533A"
        },
        {
          code: "500156",
          name: "\u6B66\u9686\u533A"
        }
      ],
      [
        {
          code: "500229",
          name: "\u57CE\u53E3\u53BF"
        },
        {
          code: "500230",
          name: "\u4E30\u90FD\u53BF"
        },
        {
          code: "500231",
          name: "\u57AB\u6C5F\u53BF"
        },
        {
          code: "500233",
          name: "\u5FE0\u53BF"
        },
        {
          code: "500235",
          name: "\u4E91\u9633\u53BF"
        },
        {
          code: "500236",
          name: "\u5949\u8282\u53BF"
        },
        {
          code: "500237",
          name: "\u5DEB\u5C71\u53BF"
        },
        {
          code: "500238",
          name: "\u5DEB\u6EAA\u53BF"
        },
        {
          code: "500240",
          name: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "500241",
          name: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "500242",
          name: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "500243",
          name: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "510104",
          name: "\u9526\u6C5F\u533A"
        },
        {
          code: "510105",
          name: "\u9752\u7F8A\u533A"
        },
        {
          code: "510106",
          name: "\u91D1\u725B\u533A"
        },
        {
          code: "510107",
          name: "\u6B66\u4FAF\u533A"
        },
        {
          code: "510108",
          name: "\u6210\u534E\u533A"
        },
        {
          code: "510112",
          name: "\u9F99\u6CC9\u9A7F\u533A"
        },
        {
          code: "510113",
          name: "\u9752\u767D\u6C5F\u533A"
        },
        {
          code: "510114",
          name: "\u65B0\u90FD\u533A"
        },
        {
          code: "510115",
          name: "\u6E29\u6C5F\u533A"
        },
        {
          code: "510116",
          name: "\u53CC\u6D41\u533A"
        },
        {
          code: "510117",
          name: "\u90EB\u90FD\u533A"
        },
        {
          code: "510121",
          name: "\u91D1\u5802\u53BF"
        },
        {
          code: "510129",
          name: "\u5927\u9091\u53BF"
        },
        {
          code: "510131",
          name: "\u84B2\u6C5F\u53BF"
        },
        {
          code: "510132",
          name: "\u65B0\u6D25\u53BF"
        },
        {
          code: "510181",
          name: "\u90FD\u6C5F\u5830\u5E02"
        },
        {
          code: "510182",
          name: "\u5F6D\u5DDE\u5E02"
        },
        {
          code: "510183",
          name: "\u909B\u5D03\u5E02"
        },
        {
          code: "510184",
          name: "\u5D07\u5DDE\u5E02"
        },
        {
          code: "510185",
          name: "\u7B80\u9633\u5E02"
        }
      ],
      [
        {
          code: "510302",
          name: "\u81EA\u6D41\u4E95\u533A"
        },
        {
          code: "510303",
          name: "\u8D21\u4E95\u533A"
        },
        {
          code: "510304",
          name: "\u5927\u5B89\u533A"
        },
        {
          code: "510311",
          name: "\u6CBF\u6EE9\u533A"
        },
        {
          code: "510321",
          name: "\u8363\u53BF"
        },
        {
          code: "510322",
          name: "\u5BCC\u987A\u53BF"
        }
      ],
      [
        {
          code: "510402",
          name: "\u4E1C\u533A"
        },
        {
          code: "510403",
          name: "\u897F\u533A"
        },
        {
          code: "510411",
          name: "\u4EC1\u548C\u533A"
        },
        {
          code: "510421",
          name: "\u7C73\u6613\u53BF"
        },
        {
          code: "510422",
          name: "\u76D0\u8FB9\u53BF"
        }
      ],
      [
        {
          code: "510502",
          name: "\u6C5F\u9633\u533A"
        },
        {
          code: "510503",
          name: "\u7EB3\u6EAA\u533A"
        },
        {
          code: "510504",
          name: "\u9F99\u9A6C\u6F6D\u533A"
        },
        {
          code: "510521",
          name: "\u6CF8\u53BF"
        },
        {
          code: "510522",
          name: "\u5408\u6C5F\u53BF"
        },
        {
          code: "510524",
          name: "\u53D9\u6C38\u53BF"
        },
        {
          code: "510525",
          name: "\u53E4\u853A\u53BF"
        }
      ],
      [
        {
          code: "510603",
          name: "\u65CC\u9633\u533A"
        },
        {
          code: "510604",
          name: "\u7F57\u6C5F\u533A"
        },
        {
          code: "510623",
          name: "\u4E2D\u6C5F\u53BF"
        },
        {
          code: "510681",
          name: "\u5E7F\u6C49\u5E02"
        },
        {
          code: "510682",
          name: "\u4EC0\u90A1\u5E02"
        },
        {
          code: "510683",
          name: "\u7EF5\u7AF9\u5E02"
        }
      ],
      [
        {
          code: "510703",
          name: "\u6DAA\u57CE\u533A"
        },
        {
          code: "510704",
          name: "\u6E38\u4ED9\u533A"
        },
        {
          code: "510705",
          name: "\u5B89\u5DDE\u533A"
        },
        {
          code: "510722",
          name: "\u4E09\u53F0\u53BF"
        },
        {
          code: "510723",
          name: "\u76D0\u4EAD\u53BF"
        },
        {
          code: "510725",
          name: "\u6893\u6F7C\u53BF"
        },
        {
          code: "510726",
          name: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "510727",
          name: "\u5E73\u6B66\u53BF"
        },
        {
          code: "510781",
          name: "\u6C5F\u6CB9\u5E02"
        }
      ],
      [
        {
          code: "510802",
          name: "\u5229\u5DDE\u533A"
        },
        {
          code: "510811",
          name: "\u662D\u5316\u533A"
        },
        {
          code: "510812",
          name: "\u671D\u5929\u533A"
        },
        {
          code: "510821",
          name: "\u65FA\u82CD\u53BF"
        },
        {
          code: "510822",
          name: "\u9752\u5DDD\u53BF"
        },
        {
          code: "510823",
          name: "\u5251\u9601\u53BF"
        },
        {
          code: "510824",
          name: "\u82CD\u6EAA\u53BF"
        }
      ],
      [
        {
          code: "510903",
          name: "\u8239\u5C71\u533A"
        },
        {
          code: "510904",
          name: "\u5B89\u5C45\u533A"
        },
        {
          code: "510921",
          name: "\u84EC\u6EAA\u53BF"
        },
        {
          code: "510922",
          name: "\u5C04\u6D2A\u53BF"
        },
        {
          code: "510923",
          name: "\u5927\u82F1\u53BF"
        }
      ],
      [
        {
          code: "511002",
          name: "\u5E02\u4E2D\u533A"
        },
        {
          code: "511011",
          name: "\u4E1C\u5174\u533A"
        },
        {
          code: "511024",
          name: "\u5A01\u8FDC\u53BF"
        },
        {
          code: "511025",
          name: "\u8D44\u4E2D\u53BF"
        },
        {
          code: "511083",
          name: "\u9686\u660C\u5E02"
        }
      ],
      [
        {
          code: "511102",
          name: "\u5E02\u4E2D\u533A"
        },
        {
          code: "511111",
          name: "\u6C99\u6E7E\u533A"
        },
        {
          code: "511112",
          name: "\u4E94\u901A\u6865\u533A"
        },
        {
          code: "511113",
          name: "\u91D1\u53E3\u6CB3\u533A"
        },
        {
          code: "511123",
          name: "\u728D\u4E3A\u53BF"
        },
        {
          code: "511124",
          name: "\u4E95\u7814\u53BF"
        },
        {
          code: "511126",
          name: "\u5939\u6C5F\u53BF"
        },
        {
          code: "511129",
          name: "\u6C90\u5DDD\u53BF"
        },
        {
          code: "511132",
          name: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "511133",
          name: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "511181",
          name: "\u5CE8\u7709\u5C71\u5E02"
        }
      ],
      [
        {
          code: "511302",
          name: "\u987A\u5E86\u533A"
        },
        {
          code: "511303",
          name: "\u9AD8\u576A\u533A"
        },
        {
          code: "511304",
          name: "\u5609\u9675\u533A"
        },
        {
          code: "511321",
          name: "\u5357\u90E8\u53BF"
        },
        {
          code: "511322",
          name: "\u8425\u5C71\u53BF"
        },
        {
          code: "511323",
          name: "\u84EC\u5B89\u53BF"
        },
        {
          code: "511324",
          name: "\u4EEA\u9647\u53BF"
        },
        {
          code: "511325",
          name: "\u897F\u5145\u53BF"
        },
        {
          code: "511381",
          name: "\u9606\u4E2D\u5E02"
        }
      ],
      [
        {
          code: "511402",
          name: "\u4E1C\u5761\u533A"
        },
        {
          code: "511403",
          name: "\u5F6D\u5C71\u533A"
        },
        {
          code: "511421",
          name: "\u4EC1\u5BFF\u53BF"
        },
        {
          code: "511423",
          name: "\u6D2A\u96C5\u53BF"
        },
        {
          code: "511424",
          name: "\u4E39\u68F1\u53BF"
        },
        {
          code: "511425",
          name: "\u9752\u795E\u53BF"
        }
      ],
      [
        {
          code: "511502",
          name: "\u7FE0\u5C4F\u533A"
        },
        {
          code: "511503",
          name: "\u5357\u6EAA\u533A"
        },
        {
          code: "511521",
          name: "\u5B9C\u5BBE\u53BF"
        },
        {
          code: "511523",
          name: "\u6C5F\u5B89\u53BF"
        },
        {
          code: "511524",
          name: "\u957F\u5B81\u53BF"
        },
        {
          code: "511525",
          name: "\u9AD8\u53BF"
        },
        {
          code: "511526",
          name: "\u73D9\u53BF"
        },
        {
          code: "511527",
          name: "\u7B60\u8FDE\u53BF"
        },
        {
          code: "511528",
          name: "\u5174\u6587\u53BF"
        },
        {
          code: "511529",
          name: "\u5C4F\u5C71\u53BF"
        }
      ],
      [
        {
          code: "511602",
          name: "\u5E7F\u5B89\u533A"
        },
        {
          code: "511603",
          name: "\u524D\u950B\u533A"
        },
        {
          code: "511621",
          name: "\u5CB3\u6C60\u53BF"
        },
        {
          code: "511622",
          name: "\u6B66\u80DC\u53BF"
        },
        {
          code: "511623",
          name: "\u90BB\u6C34\u53BF"
        },
        {
          code: "511681",
          name: "\u534E\u84E5\u5E02"
        }
      ],
      [
        {
          code: "511702",
          name: "\u901A\u5DDD\u533A"
        },
        {
          code: "511703",
          name: "\u8FBE\u5DDD\u533A"
        },
        {
          code: "511722",
          name: "\u5BA3\u6C49\u53BF"
        },
        {
          code: "511723",
          name: "\u5F00\u6C5F\u53BF"
        },
        {
          code: "511724",
          name: "\u5927\u7AF9\u53BF"
        },
        {
          code: "511725",
          name: "\u6E20\u53BF"
        },
        {
          code: "511781",
          name: "\u4E07\u6E90\u5E02"
        }
      ],
      [
        {
          code: "511802",
          name: "\u96E8\u57CE\u533A"
        },
        {
          code: "511803",
          name: "\u540D\u5C71\u533A"
        },
        {
          code: "511822",
          name: "\u8365\u7ECF\u53BF"
        },
        {
          code: "511823",
          name: "\u6C49\u6E90\u53BF"
        },
        {
          code: "511824",
          name: "\u77F3\u68C9\u53BF"
        },
        {
          code: "511825",
          name: "\u5929\u5168\u53BF"
        },
        {
          code: "511826",
          name: "\u82A6\u5C71\u53BF"
        },
        {
          code: "511827",
          name: "\u5B9D\u5174\u53BF"
        }
      ],
      [
        {
          code: "511902",
          name: "\u5DF4\u5DDE\u533A"
        },
        {
          code: "511903",
          name: "\u6069\u9633\u533A"
        },
        {
          code: "511921",
          name: "\u901A\u6C5F\u53BF"
        },
        {
          code: "511922",
          name: "\u5357\u6C5F\u53BF"
        },
        {
          code: "511923",
          name: "\u5E73\u660C\u53BF"
        }
      ],
      [
        {
          code: "512002",
          name: "\u96C1\u6C5F\u533A"
        },
        {
          code: "512021",
          name: "\u5B89\u5CB3\u53BF"
        },
        {
          code: "512022",
          name: "\u4E50\u81F3\u53BF"
        }
      ],
      [
        {
          code: "513201",
          name: "\u9A6C\u5C14\u5EB7\u5E02"
        },
        {
          code: "513221",
          name: "\u6C76\u5DDD\u53BF"
        },
        {
          code: "513222",
          name: "\u7406\u53BF"
        },
        {
          code: "513223",
          name: "\u8302\u53BF"
        },
        {
          code: "513224",
          name: "\u677E\u6F58\u53BF"
        },
        {
          code: "513225",
          name: "\u4E5D\u5BE8\u6C9F\u53BF"
        },
        {
          code: "513226",
          name: "\u91D1\u5DDD\u53BF"
        },
        {
          code: "513227",
          name: "\u5C0F\u91D1\u53BF"
        },
        {
          code: "513228",
          name: "\u9ED1\u6C34\u53BF"
        },
        {
          code: "513230",
          name: "\u58E4\u5858\u53BF"
        },
        {
          code: "513231",
          name: "\u963F\u575D\u53BF"
        },
        {
          code: "513232",
          name: "\u82E5\u5C14\u76D6\u53BF"
        },
        {
          code: "513233",
          name: "\u7EA2\u539F\u53BF"
        }
      ],
      [
        {
          code: "513301",
          name: "\u5EB7\u5B9A\u5E02"
        },
        {
          code: "513322",
          name: "\u6CF8\u5B9A\u53BF"
        },
        {
          code: "513323",
          name: "\u4E39\u5DF4\u53BF"
        },
        {
          code: "513324",
          name: "\u4E5D\u9F99\u53BF"
        },
        {
          code: "513325",
          name: "\u96C5\u6C5F\u53BF"
        },
        {
          code: "513326",
          name: "\u9053\u5B5A\u53BF"
        },
        {
          code: "513327",
          name: "\u7089\u970D\u53BF"
        },
        {
          code: "513328",
          name: "\u7518\u5B5C\u53BF"
        },
        {
          code: "513329",
          name: "\u65B0\u9F99\u53BF"
        },
        {
          code: "513330",
          name: "\u5FB7\u683C\u53BF"
        },
        {
          code: "513331",
          name: "\u767D\u7389\u53BF"
        },
        {
          code: "513332",
          name: "\u77F3\u6E20\u53BF"
        },
        {
          code: "513333",
          name: "\u8272\u8FBE\u53BF"
        },
        {
          code: "513334",
          name: "\u7406\u5858\u53BF"
        },
        {
          code: "513335",
          name: "\u5DF4\u5858\u53BF"
        },
        {
          code: "513336",
          name: "\u4E61\u57CE\u53BF"
        },
        {
          code: "513337",
          name: "\u7A3B\u57CE\u53BF"
        },
        {
          code: "513338",
          name: "\u5F97\u8363\u53BF"
        }
      ],
      [
        {
          code: "513401",
          name: "\u897F\u660C\u5E02"
        },
        {
          code: "513402",
          name: "\u4F1A\u7406\u5E02"
        },
        {
          code: "513422",
          name: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "513423",
          name: "\u76D0\u6E90\u53BF"
        },
        {
          code: "513424",
          name: "\u5FB7\u660C\u53BF"
        },
        {
          code: "513426",
          name: "\u4F1A\u4E1C\u53BF"
        },
        {
          code: "513427",
          name: "\u5B81\u5357\u53BF"
        },
        {
          code: "513428",
          name: "\u666E\u683C\u53BF"
        },
        {
          code: "513429",
          name: "\u5E03\u62D6\u53BF"
        },
        {
          code: "513430",
          name: "\u91D1\u9633\u53BF"
        },
        {
          code: "513431",
          name: "\u662D\u89C9\u53BF"
        },
        {
          code: "513432",
          name: "\u559C\u5FB7\u53BF"
        },
        {
          code: "513433",
          name: "\u5195\u5B81\u53BF"
        },
        {
          code: "513434",
          name: "\u8D8A\u897F\u53BF"
        },
        {
          code: "513435",
          name: "\u7518\u6D1B\u53BF"
        },
        {
          code: "513436",
          name: "\u7F8E\u59D1\u53BF"
        },
        {
          code: "513437",
          name: "\u96F7\u6CE2\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "520102",
          name: "\u5357\u660E\u533A"
        },
        {
          code: "520103",
          name: "\u4E91\u5CA9\u533A"
        },
        {
          code: "520111",
          name: "\u82B1\u6EAA\u533A"
        },
        {
          code: "520112",
          name: "\u4E4C\u5F53\u533A"
        },
        {
          code: "520113",
          name: "\u767D\u4E91\u533A"
        },
        {
          code: "520115",
          name: "\u89C2\u5C71\u6E56\u533A"
        },
        {
          code: "520121",
          name: "\u5F00\u9633\u53BF"
        },
        {
          code: "520122",
          name: "\u606F\u70FD\u53BF"
        },
        {
          code: "520123",
          name: "\u4FEE\u6587\u53BF"
        },
        {
          code: "520181",
          name: "\u6E05\u9547\u5E02"
        }
      ],
      [
        {
          code: "520201",
          name: "\u949F\u5C71\u533A"
        },
        {
          code: "520203",
          name: "\u516D\u679D\u7279\u533A"
        },
        {
          code: "520221",
          name: "\u6C34\u57CE\u53BF"
        },
        {
          code: "520281",
          name: "\u76D8\u5DDE\u5E02"
        }
      ],
      [
        {
          code: "520302",
          name: "\u7EA2\u82B1\u5C97\u533A"
        },
        {
          code: "520303",
          name: "\u6C47\u5DDD\u533A"
        },
        {
          code: "520304",
          name: "\u64AD\u5DDE\u533A"
        },
        {
          code: "520322",
          name: "\u6850\u6893\u53BF"
        },
        {
          code: "520323",
          name: "\u7EE5\u9633\u53BF"
        },
        {
          code: "520324",
          name: "\u6B63\u5B89\u53BF"
        },
        {
          code: "520325",
          name: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520326",
          name: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520327",
          name: "\u51E4\u5188\u53BF"
        },
        {
          code: "520328",
          name: "\u6E44\u6F6D\u53BF"
        },
        {
          code: "520329",
          name: "\u4F59\u5E86\u53BF"
        },
        {
          code: "520330",
          name: "\u4E60\u6C34\u53BF"
        },
        {
          code: "520381",
          name: "\u8D64\u6C34\u5E02"
        },
        {
          code: "520382",
          name: "\u4EC1\u6000\u5E02"
        }
      ],
      [
        {
          code: "520402",
          name: "\u897F\u79C0\u533A"
        },
        {
          code: "520403",
          name: "\u5E73\u575D\u533A"
        },
        {
          code: "520422",
          name: "\u666E\u5B9A\u53BF"
        },
        {
          code: "520423",
          name: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520424",
          name: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520425",
          name: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "520502",
          name: "\u4E03\u661F\u5173\u533A"
        },
        {
          code: "520521",
          name: "\u5927\u65B9\u53BF"
        },
        {
          code: "520523",
          name: "\u91D1\u6C99\u53BF"
        },
        {
          code: "520524",
          name: "\u7EC7\u91D1\u53BF"
        },
        {
          code: "520525",
          name: "\u7EB3\u96CD\u53BF"
        },
        {
          code: "520526",
          name: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520527",
          name: "\u8D6B\u7AE0\u53BF"
        },
        {
          code: "520581",
          name: "\u9ED4\u897F\u5E02"
        }
      ],
      [
        {
          code: "520602",
          name: "\u78A7\u6C5F\u533A"
        },
        {
          code: "520603",
          name: "\u4E07\u5C71\u533A"
        },
        {
          code: "520621",
          name: "\u6C5F\u53E3\u53BF"
        },
        {
          code: "520622",
          name: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520623",
          name: "\u77F3\u9621\u53BF"
        },
        {
          code: "520624",
          name: "\u601D\u5357\u53BF"
        },
        {
          code: "520625",
          name: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520626",
          name: "\u5FB7\u6C5F\u53BF"
        },
        {
          code: "520627",
          name: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "520628",
          name: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "522301",
          name: "\u5174\u4E49\u5E02"
        },
        {
          code: "522322",
          name: "\u5174\u4EC1\u53BF"
        },
        {
          code: "522323",
          name: "\u666E\u5B89\u53BF"
        },
        {
          code: "522324",
          name: "\u6674\u9686\u53BF"
        },
        {
          code: "522325",
          name: "\u8D1E\u4E30\u53BF"
        },
        {
          code: "522326",
          name: "\u671B\u8C1F\u53BF"
        },
        {
          code: "522327",
          name: "\u518C\u4EA8\u53BF"
        },
        {
          code: "522328",
          name: "\u5B89\u9F99\u53BF"
        }
      ],
      [
        {
          code: "522601",
          name: "\u51EF\u91CC\u5E02"
        },
        {
          code: "522622",
          name: "\u9EC4\u5E73\u53BF"
        },
        {
          code: "522623",
          name: "\u65BD\u79C9\u53BF"
        },
        {
          code: "522624",
          name: "\u4E09\u7A57\u53BF"
        },
        {
          code: "522625",
          name: "\u9547\u8FDC\u53BF"
        },
        {
          code: "522626",
          name: "\u5C91\u5DE9\u53BF"
        },
        {
          code: "522627",
          name: "\u5929\u67F1\u53BF"
        },
        {
          code: "522628",
          name: "\u9526\u5C4F\u53BF"
        },
        {
          code: "522629",
          name: "\u5251\u6CB3\u53BF"
        },
        {
          code: "522630",
          name: "\u53F0\u6C5F\u53BF"
        },
        {
          code: "522631",
          name: "\u9ECE\u5E73\u53BF"
        },
        {
          code: "522632",
          name: "\u6995\u6C5F\u53BF"
        },
        {
          code: "522633",
          name: "\u4ECE\u6C5F\u53BF"
        },
        {
          code: "522634",
          name: "\u96F7\u5C71\u53BF"
        },
        {
          code: "522635",
          name: "\u9EBB\u6C5F\u53BF"
        },
        {
          code: "522636",
          name: "\u4E39\u5BE8\u53BF"
        }
      ],
      [
        {
          code: "522701",
          name: "\u90FD\u5300\u5E02"
        },
        {
          code: "522702",
          name: "\u798F\u6CC9\u5E02"
        },
        {
          code: "522722",
          name: "\u8354\u6CE2\u53BF"
        },
        {
          code: "522723",
          name: "\u8D35\u5B9A\u53BF"
        },
        {
          code: "522725",
          name: "\u74EE\u5B89\u53BF"
        },
        {
          code: "522726",
          name: "\u72EC\u5C71\u53BF"
        },
        {
          code: "522727",
          name: "\u5E73\u5858\u53BF"
        },
        {
          code: "522728",
          name: "\u7F57\u7538\u53BF"
        },
        {
          code: "522729",
          name: "\u957F\u987A\u53BF"
        },
        {
          code: "522730",
          name: "\u9F99\u91CC\u53BF"
        },
        {
          code: "522731",
          name: "\u60E0\u6C34\u53BF"
        },
        {
          code: "522732",
          name: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "530102",
          name: "\u4E94\u534E\u533A"
        },
        {
          code: "530103",
          name: "\u76D8\u9F99\u533A"
        },
        {
          code: "530111",
          name: "\u5B98\u6E21\u533A"
        },
        {
          code: "530112",
          name: "\u897F\u5C71\u533A"
        },
        {
          code: "530113",
          name: "\u4E1C\u5DDD\u533A"
        },
        {
          code: "530114",
          name: "\u5448\u8D21\u533A"
        },
        {
          code: "530115",
          name: "\u664B\u5B81\u533A"
        },
        {
          code: "530124",
          name: "\u5BCC\u6C11\u53BF"
        },
        {
          code: "530125",
          name: "\u5B9C\u826F\u53BF"
        },
        {
          code: "530126",
          name: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530127",
          name: "\u5D69\u660E\u53BF"
        },
        {
          code: "530128",
          name: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530129",
          name: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530181",
          name: "\u5B89\u5B81\u5E02"
        }
      ],
      [
        {
          code: "530302",
          name: "\u9E92\u9E9F\u533A"
        },
        {
          code: "530303",
          name: "\u6CBE\u76CA\u533A"
        },
        {
          code: "530321",
          name: "\u9A6C\u9F99\u53BF"
        },
        {
          code: "530322",
          name: "\u9646\u826F\u53BF"
        },
        {
          code: "530323",
          name: "\u5E08\u5B97\u53BF"
        },
        {
          code: "530324",
          name: "\u7F57\u5E73\u53BF"
        },
        {
          code: "530325",
          name: "\u5BCC\u6E90\u53BF"
        },
        {
          code: "530326",
          name: "\u4F1A\u6CFD\u53BF"
        },
        {
          code: "530381",
          name: "\u5BA3\u5A01\u5E02"
        }
      ],
      [
        {
          code: "530402",
          name: "\u7EA2\u5854\u533A"
        },
        {
          code: "530403",
          name: "\u6C5F\u5DDD\u533A"
        },
        {
          code: "530422",
          name: "\u6F84\u6C5F\u53BF"
        },
        {
          code: "530423",
          name: "\u901A\u6D77\u53BF"
        },
        {
          code: "530424",
          name: "\u534E\u5B81\u53BF"
        },
        {
          code: "530425",
          name: "\u6613\u95E8\u53BF"
        },
        {
          code: "530426",
          name: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530427",
          name: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530428",
          name: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "530502",
          name: "\u9686\u9633\u533A"
        },
        {
          code: "530521",
          name: "\u65BD\u7538\u53BF"
        },
        {
          code: "530523",
          name: "\u9F99\u9675\u53BF"
        },
        {
          code: "530524",
          name: "\u660C\u5B81\u53BF"
        },
        {
          code: "530581",
          name: "\u817E\u51B2\u5E02"
        }
      ],
      [
        {
          code: "530602",
          name: "\u662D\u9633\u533A"
        },
        {
          code: "530621",
          name: "\u9C81\u7538\u53BF"
        },
        {
          code: "530622",
          name: "\u5DE7\u5BB6\u53BF"
        },
        {
          code: "530623",
          name: "\u76D0\u6D25\u53BF"
        },
        {
          code: "530624",
          name: "\u5927\u5173\u53BF"
        },
        {
          code: "530625",
          name: "\u6C38\u5584\u53BF"
        },
        {
          code: "530626",
          name: "\u7EE5\u6C5F\u53BF"
        },
        {
          code: "530627",
          name: "\u9547\u96C4\u53BF"
        },
        {
          code: "530628",
          name: "\u5F5D\u826F\u53BF"
        },
        {
          code: "530629",
          name: "\u5A01\u4FE1\u53BF"
        },
        {
          code: "530630",
          name: "\u6C34\u5BCC\u53BF"
        }
      ],
      [
        {
          code: "530702",
          name: "\u53E4\u57CE\u533A"
        },
        {
          code: "530721",
          name: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530722",
          name: "\u6C38\u80DC\u53BF"
        },
        {
          code: "530723",
          name: "\u534E\u576A\u53BF"
        },
        {
          code: "530724",
          name: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "530802",
          name: "\u601D\u8305\u533A"
        },
        {
          code: "530821",
          name: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530822",
          name: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530823",
          name: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530824",
          name: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530825",
          name: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530826",
          name: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530827",
          name: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530828",
          name: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530829",
          name: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "530902",
          name: "\u4E34\u7FD4\u533A"
        },
        {
          code: "530921",
          name: "\u51E4\u5E86\u53BF"
        },
        {
          code: "530922",
          name: "\u4E91\u53BF"
        },
        {
          code: "530923",
          name: "\u6C38\u5FB7\u53BF"
        },
        {
          code: "530924",
          name: "\u9547\u5EB7\u53BF"
        },
        {
          code: "530925",
          name: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530926",
          name: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "530927",
          name: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "532301",
          name: "\u695A\u96C4\u5E02"
        },
        {
          code: "532302",
          name: "\u7984\u4E30\u5E02"
        },
        {
          code: "532322",
          name: "\u53CC\u67CF\u53BF"
        },
        {
          code: "532323",
          name: "\u725F\u5B9A\u53BF"
        },
        {
          code: "532324",
          name: "\u5357\u534E\u53BF"
        },
        {
          code: "532325",
          name: "\u59DA\u5B89\u53BF"
        },
        {
          code: "532326",
          name: "\u5927\u59DA\u53BF"
        },
        {
          code: "532327",
          name: "\u6C38\u4EC1\u53BF"
        },
        {
          code: "532328",
          name: "\u5143\u8C0B\u53BF"
        },
        {
          code: "532329",
          name: "\u6B66\u5B9A\u53BF"
        }
      ],
      [
        {
          code: "532501",
          name: "\u4E2A\u65E7\u5E02"
        },
        {
          code: "532502",
          name: "\u5F00\u8FDC\u5E02"
        },
        {
          code: "532503",
          name: "\u8499\u81EA\u5E02"
        },
        {
          code: "532504",
          name: "\u5F25\u52D2\u5E02"
        },
        {
          code: "532523",
          name: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "532524",
          name: "\u5EFA\u6C34\u53BF"
        },
        {
          code: "532525",
          name: "\u77F3\u5C4F\u53BF"
        },
        {
          code: "532527",
          name: "\u6CF8\u897F\u53BF"
        },
        {
          code: "532528",
          name: "\u5143\u9633\u53BF"
        },
        {
          code: "532529",
          name: "\u7EA2\u6CB3\u53BF"
        },
        {
          code: "532530",
          name: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "532531",
          name: "\u7EFF\u6625\u53BF"
        },
        {
          code: "532532",
          name: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "532601",
          name: "\u6587\u5C71\u5E02"
        },
        {
          code: "532622",
          name: "\u781A\u5C71\u53BF"
        },
        {
          code: "532623",
          name: "\u897F\u7574\u53BF"
        },
        {
          code: "532624",
          name: "\u9EBB\u6817\u5761\u53BF"
        },
        {
          code: "532625",
          name: "\u9A6C\u5173\u53BF"
        },
        {
          code: "532626",
          name: "\u4E18\u5317\u53BF"
        },
        {
          code: "532627",
          name: "\u5E7F\u5357\u53BF"
        },
        {
          code: "532628",
          name: "\u5BCC\u5B81\u53BF"
        }
      ],
      [
        {
          code: "532801",
          name: "\u666F\u6D2A\u5E02"
        },
        {
          code: "532822",
          name: "\u52D0\u6D77\u53BF"
        },
        {
          code: "532823",
          name: "\u52D0\u814A\u53BF"
        }
      ],
      [
        {
          code: "532901",
          name: "\u5927\u7406\u5E02"
        },
        {
          code: "532922",
          name: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "532923",
          name: "\u7965\u4E91\u53BF"
        },
        {
          code: "532924",
          name: "\u5BBE\u5DDD\u53BF"
        },
        {
          code: "532925",
          name: "\u5F25\u6E21\u53BF"
        },
        {
          code: "532926",
          name: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "532927",
          name: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "532928",
          name: "\u6C38\u5E73\u53BF"
        },
        {
          code: "532929",
          name: "\u4E91\u9F99\u53BF"
        },
        {
          code: "532930",
          name: "\u6D31\u6E90\u53BF"
        },
        {
          code: "532931",
          name: "\u5251\u5DDD\u53BF"
        },
        {
          code: "532932",
          name: "\u9E64\u5E86\u53BF"
        }
      ],
      [
        {
          code: "533102",
          name: "\u745E\u4E3D\u5E02"
        },
        {
          code: "533103",
          name: "\u8292\u5E02"
        },
        {
          code: "533122",
          name: "\u6881\u6CB3\u53BF"
        },
        {
          code: "533123",
          name: "\u76C8\u6C5F\u53BF"
        },
        {
          code: "533124",
          name: "\u9647\u5DDD\u53BF"
        }
      ],
      [
        {
          code: "533301",
          name: "\u6CF8\u6C34\u5E02"
        },
        {
          code: "533323",
          name: "\u798F\u8D21\u53BF"
        },
        {
          code: "533324",
          name: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "533325",
          name: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "533401",
          name: "\u9999\u683C\u91CC\u62C9\u5E02"
        },
        {
          code: "533422",
          name: "\u5FB7\u94A6\u53BF"
        },
        {
          code: "533423",
          name: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "540102",
          name: "\u57CE\u5173\u533A"
        },
        {
          code: "540103",
          name: "\u5806\u9F99\u5FB7\u5E86\u533A"
        },
        {
          code: "540104",
          name: "\u8FBE\u5B5C\u533A"
        },
        {
          code: "540121",
          name: "\u6797\u5468\u53BF"
        },
        {
          code: "540122",
          name: "\u5F53\u96C4\u53BF"
        },
        {
          code: "540123",
          name: "\u5C3C\u6728\u53BF"
        },
        {
          code: "540124",
          name: "\u66F2\u6C34\u53BF"
        },
        {
          code: "540127",
          name: "\u58A8\u7AF9\u5DE5\u5361\u53BF"
        }
      ],
      [
        {
          code: "540202",
          name: "\u6851\u73E0\u5B5C\u533A"
        },
        {
          code: "540221",
          name: "\u5357\u6728\u6797\u53BF"
        },
        {
          code: "540222",
          name: "\u6C5F\u5B5C\u53BF"
        },
        {
          code: "540223",
          name: "\u5B9A\u65E5\u53BF"
        },
        {
          code: "540224",
          name: "\u8428\u8FE6\u53BF"
        },
        {
          code: "540225",
          name: "\u62C9\u5B5C\u53BF"
        },
        {
          code: "540226",
          name: "\u6602\u4EC1\u53BF"
        },
        {
          code: "540227",
          name: "\u8C22\u901A\u95E8\u53BF"
        },
        {
          code: "540228",
          name: "\u767D\u6717\u53BF"
        },
        {
          code: "540229",
          name: "\u4EC1\u5E03\u53BF"
        },
        {
          code: "540230",
          name: "\u5EB7\u9A6C\u53BF"
        },
        {
          code: "540231",
          name: "\u5B9A\u7ED3\u53BF"
        },
        {
          code: "540232",
          name: "\u4EF2\u5DF4\u53BF"
        },
        {
          code: "540233",
          name: "\u4E9A\u4E1C\u53BF"
        },
        {
          code: "540234",
          name: "\u5409\u9686\u53BF"
        },
        {
          code: "540235",
          name: "\u8042\u62C9\u6728\u53BF"
        },
        {
          code: "540236",
          name: "\u8428\u560E\u53BF"
        },
        {
          code: "540237",
          name: "\u5C97\u5DF4\u53BF"
        }
      ],
      [
        {
          code: "540302",
          name: "\u5361\u82E5\u533A"
        },
        {
          code: "540321",
          name: "\u6C5F\u8FBE\u53BF"
        },
        {
          code: "540322",
          name: "\u8D21\u89C9\u53BF"
        },
        {
          code: "540323",
          name: "\u7C7B\u4E4C\u9F50\u53BF"
        },
        {
          code: "540324",
          name: "\u4E01\u9752\u53BF"
        },
        {
          code: "540325",
          name: "\u5BDF\u96C5\u53BF"
        },
        {
          code: "540326",
          name: "\u516B\u5BBF\u53BF"
        },
        {
          code: "540327",
          name: "\u5DE6\u8D21\u53BF"
        },
        {
          code: "540328",
          name: "\u8292\u5EB7\u53BF"
        },
        {
          code: "540329",
          name: "\u6D1B\u9686\u53BF"
        },
        {
          code: "540330",
          name: "\u8FB9\u575D\u53BF"
        }
      ],
      [
        {
          code: "540402",
          name: "\u5DF4\u5B9C\u533A"
        },
        {
          code: "540421",
          name: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF"
        },
        {
          code: "540422",
          name: "\u7C73\u6797\u53BF"
        },
        {
          code: "540423",
          name: "\u58A8\u8131\u53BF"
        },
        {
          code: "540424",
          name: "\u6CE2\u5BC6\u53BF"
        },
        {
          code: "540425",
          name: "\u5BDF\u9685\u53BF"
        },
        {
          code: "540426",
          name: "\u6717\u53BF"
        }
      ],
      [
        {
          code: "540502",
          name: "\u4E43\u4E1C\u533A"
        },
        {
          code: "540521",
          name: "\u624E\u56CA\u53BF"
        },
        {
          code: "540522",
          name: "\u8D21\u560E\u53BF"
        },
        {
          code: "540523",
          name: "\u6851\u65E5\u53BF"
        },
        {
          code: "540524",
          name: "\u743C\u7ED3\u53BF"
        },
        {
          code: "540525",
          name: "\u66F2\u677E\u53BF"
        },
        {
          code: "540526",
          name: "\u63AA\u7F8E\u53BF"
        },
        {
          code: "540527",
          name: "\u6D1B\u624E\u53BF"
        },
        {
          code: "540528",
          name: "\u52A0\u67E5\u53BF"
        },
        {
          code: "540529",
          name: "\u9686\u5B50\u53BF"
        },
        {
          code: "540530",
          name: "\u9519\u90A3\u53BF"
        },
        {
          code: "540531",
          name: "\u6D6A\u5361\u5B50\u53BF"
        }
      ],
      [
        {
          code: "542421",
          name: "\u90A3\u66F2\u53BF"
        },
        {
          code: "542422",
          name: "\u5609\u9ECE\u53BF"
        },
        {
          code: "542423",
          name: "\u6BD4\u5982\u53BF"
        },
        {
          code: "542424",
          name: "\u8042\u8363\u53BF"
        },
        {
          code: "542425",
          name: "\u5B89\u591A\u53BF"
        },
        {
          code: "542426",
          name: "\u7533\u624E\u53BF"
        },
        {
          code: "542427",
          name: "\u7D22\u53BF"
        },
        {
          code: "542428",
          name: "\u73ED\u6208\u53BF"
        },
        {
          code: "542429",
          name: "\u5DF4\u9752\u53BF"
        },
        {
          code: "542430",
          name: "\u5C3C\u739B\u53BF"
        },
        {
          code: "542431",
          name: "\u53CC\u6E56\u53BF"
        }
      ],
      [
        {
          code: "542521",
          name: "\u666E\u5170\u53BF"
        },
        {
          code: "542522",
          name: "\u672D\u8FBE\u53BF"
        },
        {
          code: "542523",
          name: "\u5676\u5C14\u53BF"
        },
        {
          code: "542524",
          name: "\u65E5\u571F\u53BF"
        },
        {
          code: "542525",
          name: "\u9769\u5409\u53BF"
        },
        {
          code: "542526",
          name: "\u6539\u5219\u53BF"
        },
        {
          code: "542527",
          name: "\u63AA\u52E4\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "610102",
          name: "\u65B0\u57CE\u533A"
        },
        {
          code: "610103",
          name: "\u7891\u6797\u533A"
        },
        {
          code: "610104",
          name: "\u83B2\u6E56\u533A"
        },
        {
          code: "610111",
          name: "\u705E\u6865\u533A"
        },
        {
          code: "610112",
          name: "\u672A\u592E\u533A"
        },
        {
          code: "610113",
          name: "\u96C1\u5854\u533A"
        },
        {
          code: "610114",
          name: "\u960E\u826F\u533A"
        },
        {
          code: "610115",
          name: "\u4E34\u6F7C\u533A"
        },
        {
          code: "610116",
          name: "\u957F\u5B89\u533A"
        },
        {
          code: "610117",
          name: "\u9AD8\u9675\u533A"
        },
        {
          code: "610118",
          name: "\u9120\u9091\u533A"
        },
        {
          code: "610122",
          name: "\u84DD\u7530\u53BF"
        },
        {
          code: "610124",
          name: "\u5468\u81F3\u53BF"
        }
      ],
      [
        {
          code: "610202",
          name: "\u738B\u76CA\u533A"
        },
        {
          code: "610203",
          name: "\u5370\u53F0\u533A"
        },
        {
          code: "610204",
          name: "\u8000\u5DDE\u533A"
        },
        {
          code: "610222",
          name: "\u5B9C\u541B\u53BF"
        }
      ],
      [
        {
          code: "610302",
          name: "\u6E2D\u6EE8\u533A"
        },
        {
          code: "610303",
          name: "\u91D1\u53F0\u533A"
        },
        {
          code: "610304",
          name: "\u9648\u4ED3\u533A"
        },
        {
          code: "610305",
          name: "\u51E4\u7FD4\u533A"
        },
        {
          code: "610323",
          name: "\u5C90\u5C71\u53BF"
        },
        {
          code: "610324",
          name: "\u6276\u98CE\u53BF"
        },
        {
          code: "610326",
          name: "\u7709\u53BF"
        },
        {
          code: "610327",
          name: "\u9647\u53BF"
        },
        {
          code: "610328",
          name: "\u5343\u9633\u53BF"
        },
        {
          code: "610329",
          name: "\u9E9F\u6E38\u53BF"
        },
        {
          code: "610330",
          name: "\u51E4\u53BF"
        },
        {
          code: "610331",
          name: "\u592A\u767D\u53BF"
        }
      ],
      [
        {
          code: "610402",
          name: "\u79E6\u90FD\u533A"
        },
        {
          code: "610403",
          name: "\u6768\u9675\u533A"
        },
        {
          code: "610404",
          name: "\u6E2D\u57CE\u533A"
        },
        {
          code: "610422",
          name: "\u4E09\u539F\u53BF"
        },
        {
          code: "610423",
          name: "\u6CFE\u9633\u53BF"
        },
        {
          code: "610424",
          name: "\u4E7E\u53BF"
        },
        {
          code: "610425",
          name: "\u793C\u6CC9\u53BF"
        },
        {
          code: "610426",
          name: "\u6C38\u5BFF\u53BF"
        },
        {
          code: "610427",
          name: "\u5F6C\u5DDE\u5E02"
        },
        {
          code: "610428",
          name: "\u957F\u6B66\u53BF"
        },
        {
          code: "610429",
          name: "\u65EC\u9091\u53BF"
        },
        {
          code: "610430",
          name: "\u6DF3\u5316\u53BF"
        },
        {
          code: "610431",
          name: "\u6B66\u529F\u53BF"
        },
        {
          code: "610481",
          name: "\u5174\u5E73\u5E02"
        }
      ],
      [
        {
          code: "610502",
          name: "\u4E34\u6E2D\u533A"
        },
        {
          code: "610503",
          name: "\u534E\u5DDE\u533A"
        },
        {
          code: "610522",
          name: "\u6F7C\u5173\u53BF"
        },
        {
          code: "610523",
          name: "\u5927\u8354\u53BF"
        },
        {
          code: "610524",
          name: "\u5408\u9633\u53BF"
        },
        {
          code: "610525",
          name: "\u6F84\u57CE\u53BF"
        },
        {
          code: "610526",
          name: "\u84B2\u57CE\u53BF"
        },
        {
          code: "610527",
          name: "\u767D\u6C34\u53BF"
        },
        {
          code: "610528",
          name: "\u5BCC\u5E73\u53BF"
        },
        {
          code: "610581",
          name: "\u97E9\u57CE\u5E02"
        },
        {
          code: "610582",
          name: "\u534E\u9634\u5E02"
        }
      ],
      [
        {
          code: "610602",
          name: "\u5B9D\u5854\u533A"
        },
        {
          code: "610603",
          name: "\u5B89\u585E\u533A"
        },
        {
          code: "610621",
          name: "\u5EF6\u957F\u53BF"
        },
        {
          code: "610622",
          name: "\u5EF6\u5DDD\u53BF"
        },
        {
          code: "610623",
          name: "\u5B50\u957F\u53BF"
        },
        {
          code: "610625",
          name: "\u5FD7\u4E39\u53BF"
        },
        {
          code: "610626",
          name: "\u5434\u8D77\u53BF"
        },
        {
          code: "610627",
          name: "\u7518\u6CC9\u53BF"
        },
        {
          code: "610628",
          name: "\u5BCC\u53BF"
        },
        {
          code: "610629",
          name: "\u6D1B\u5DDD\u53BF"
        },
        {
          code: "610630",
          name: "\u5B9C\u5DDD\u53BF"
        },
        {
          code: "610631",
          name: "\u9EC4\u9F99\u53BF"
        },
        {
          code: "610632",
          name: "\u9EC4\u9675\u53BF"
        }
      ],
      [
        {
          code: "610702",
          name: "\u6C49\u53F0\u533A"
        },
        {
          code: "610703",
          name: "\u5357\u90D1\u533A"
        },
        {
          code: "610722",
          name: "\u57CE\u56FA\u53BF"
        },
        {
          code: "610723",
          name: "\u6D0B\u53BF"
        },
        {
          code: "610724",
          name: "\u897F\u4E61\u53BF"
        },
        {
          code: "610725",
          name: "\u52C9\u53BF"
        },
        {
          code: "610726",
          name: "\u5B81\u5F3A\u53BF"
        },
        {
          code: "610727",
          name: "\u7565\u9633\u53BF"
        },
        {
          code: "610728",
          name: "\u9547\u5DF4\u53BF"
        },
        {
          code: "610729",
          name: "\u7559\u575D\u53BF"
        },
        {
          code: "610730",
          name: "\u4F5B\u576A\u53BF"
        }
      ],
      [
        {
          code: "610802",
          name: "\u6986\u9633\u533A"
        },
        {
          code: "610803",
          name: "\u6A2A\u5C71\u533A"
        },
        {
          code: "610822",
          name: "\u5E9C\u8C37\u53BF"
        },
        {
          code: "610824",
          name: "\u9756\u8FB9\u53BF"
        },
        {
          code: "610825",
          name: "\u5B9A\u8FB9\u53BF"
        },
        {
          code: "610826",
          name: "\u7EE5\u5FB7\u53BF"
        },
        {
          code: "610827",
          name: "\u7C73\u8102\u53BF"
        },
        {
          code: "610828",
          name: "\u4F73\u53BF"
        },
        {
          code: "610829",
          name: "\u5434\u5821\u53BF"
        },
        {
          code: "610830",
          name: "\u6E05\u6DA7\u53BF"
        },
        {
          code: "610831",
          name: "\u5B50\u6D32\u53BF"
        },
        {
          code: "610881",
          name: "\u795E\u6728\u5E02"
        }
      ],
      [
        {
          code: "610902",
          name: "\u6C49\u6EE8\u533A"
        },
        {
          code: "610921",
          name: "\u6C49\u9634\u53BF"
        },
        {
          code: "610922",
          name: "\u77F3\u6CC9\u53BF"
        },
        {
          code: "610923",
          name: "\u5B81\u9655\u53BF"
        },
        {
          code: "610924",
          name: "\u7D2B\u9633\u53BF"
        },
        {
          code: "610925",
          name: "\u5C9A\u768B\u53BF"
        },
        {
          code: "610926",
          name: "\u5E73\u5229\u53BF"
        },
        {
          code: "610927",
          name: "\u9547\u576A\u53BF"
        },
        {
          code: "610929",
          name: "\u767D\u6CB3\u53BF"
        },
        {
          code: "610981",
          name: "\u65EC\u9633\u5E02"
        }
      ],
      [
        {
          code: "611002",
          name: "\u5546\u5DDE\u533A"
        },
        {
          code: "611021",
          name: "\u6D1B\u5357\u53BF"
        },
        {
          code: "611022",
          name: "\u4E39\u51E4\u53BF"
        },
        {
          code: "611023",
          name: "\u5546\u5357\u53BF"
        },
        {
          code: "611024",
          name: "\u5C71\u9633\u53BF"
        },
        {
          code: "611025",
          name: "\u9547\u5B89\u53BF"
        },
        {
          code: "611026",
          name: "\u67DE\u6C34\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "620102",
          name: "\u57CE\u5173\u533A"
        },
        {
          code: "620103",
          name: "\u4E03\u91CC\u6CB3\u533A"
        },
        {
          code: "620104",
          name: "\u897F\u56FA\u533A"
        },
        {
          code: "620105",
          name: "\u5B89\u5B81\u533A"
        },
        {
          code: "620111",
          name: "\u7EA2\u53E4\u533A"
        },
        {
          code: "620121",
          name: "\u6C38\u767B\u53BF"
        },
        {
          code: "620122",
          name: "\u768B\u5170\u53BF"
        },
        {
          code: "620123",
          name: "\u6986\u4E2D\u53BF"
        }
      ],
      [
        {
          code: "620201",
          name: "\u96C4\u5173\u533A"
        },
        {
          code: "620202",
          name: "\u955C\u94C1\u533A"
        },
        {
          code: "620203",
          name: "\u957F\u57CE\u533A"
        }
      ],
      [
        {
          code: "620302",
          name: "\u91D1\u5DDD\u533A"
        },
        {
          code: "620321",
          name: "\u6C38\u660C\u53BF"
        }
      ],
      [
        {
          code: "620402",
          name: "\u767D\u94F6\u533A"
        },
        {
          code: "620403",
          name: "\u5E73\u5DDD\u533A"
        },
        {
          code: "620421",
          name: "\u9756\u8FDC\u53BF"
        },
        {
          code: "620422",
          name: "\u4F1A\u5B81\u53BF"
        },
        {
          code: "620423",
          name: "\u666F\u6CF0\u53BF"
        }
      ],
      [
        {
          code: "620502",
          name: "\u79E6\u5DDE\u533A"
        },
        {
          code: "620503",
          name: "\u9EA6\u79EF\u533A"
        },
        {
          code: "620521",
          name: "\u6E05\u6C34\u53BF"
        },
        {
          code: "620522",
          name: "\u79E6\u5B89\u53BF"
        },
        {
          code: "620523",
          name: "\u7518\u8C37\u53BF"
        },
        {
          code: "620524",
          name: "\u6B66\u5C71\u53BF"
        },
        {
          code: "620525",
          name: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "620602",
          name: "\u51C9\u5DDE\u533A"
        },
        {
          code: "620621",
          name: "\u6C11\u52E4\u53BF"
        },
        {
          code: "620622",
          name: "\u53E4\u6D6A\u53BF"
        },
        {
          code: "620623",
          name: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "620702",
          name: "\u7518\u5DDE\u533A"
        },
        {
          code: "620721",
          name: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "620722",
          name: "\u6C11\u4E50\u53BF"
        },
        {
          code: "620723",
          name: "\u4E34\u6CFD\u53BF"
        },
        {
          code: "620724",
          name: "\u9AD8\u53F0\u53BF"
        },
        {
          code: "620725",
          name: "\u5C71\u4E39\u53BF"
        }
      ],
      [
        {
          code: "620802",
          name: "\u5D06\u5CD2\u533A"
        },
        {
          code: "620821",
          name: "\u6CFE\u5DDD\u53BF"
        },
        {
          code: "620822",
          name: "\u7075\u53F0\u53BF"
        },
        {
          code: "620823",
          name: "\u5D07\u4FE1\u53BF"
        },
        {
          code: "620824",
          name: "\u534E\u4EAD\u53BF"
        },
        {
          code: "620825",
          name: "\u5E84\u6D6A\u53BF"
        },
        {
          code: "620826",
          name: "\u9759\u5B81\u53BF"
        }
      ],
      [
        {
          code: "620902",
          name: "\u8083\u5DDE\u533A"
        },
        {
          code: "620921",
          name: "\u91D1\u5854\u53BF"
        },
        {
          code: "620922",
          name: "\u74DC\u5DDE\u53BF"
        },
        {
          code: "620923",
          name: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "620924",
          name: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "620981",
          name: "\u7389\u95E8\u5E02"
        },
        {
          code: "620982",
          name: "\u6566\u714C\u5E02"
        }
      ],
      [
        {
          code: "621002",
          name: "\u897F\u5CF0\u533A"
        },
        {
          code: "621021",
          name: "\u5E86\u57CE\u53BF"
        },
        {
          code: "621022",
          name: "\u73AF\u53BF"
        },
        {
          code: "621023",
          name: "\u534E\u6C60\u53BF"
        },
        {
          code: "621024",
          name: "\u5408\u6C34\u53BF"
        },
        {
          code: "621025",
          name: "\u6B63\u5B81\u53BF"
        },
        {
          code: "621026",
          name: "\u5B81\u53BF"
        },
        {
          code: "621027",
          name: "\u9547\u539F\u53BF"
        }
      ],
      [
        {
          code: "621102",
          name: "\u5B89\u5B9A\u533A"
        },
        {
          code: "621121",
          name: "\u901A\u6E2D\u53BF"
        },
        {
          code: "621122",
          name: "\u9647\u897F\u53BF"
        },
        {
          code: "621123",
          name: "\u6E2D\u6E90\u53BF"
        },
        {
          code: "621124",
          name: "\u4E34\u6D2E\u53BF"
        },
        {
          code: "621125",
          name: "\u6F33\u53BF"
        },
        {
          code: "621126",
          name: "\u5CB7\u53BF"
        }
      ],
      [
        {
          code: "621202",
          name: "\u6B66\u90FD\u533A"
        },
        {
          code: "621221",
          name: "\u6210\u53BF"
        },
        {
          code: "621222",
          name: "\u6587\u53BF"
        },
        {
          code: "621223",
          name: "\u5B95\u660C\u53BF"
        },
        {
          code: "621224",
          name: "\u5EB7\u53BF"
        },
        {
          code: "621225",
          name: "\u897F\u548C\u53BF"
        },
        {
          code: "621226",
          name: "\u793C\u53BF"
        },
        {
          code: "621227",
          name: "\u5FBD\u53BF"
        },
        {
          code: "621228",
          name: "\u4E24\u5F53\u53BF"
        }
      ],
      [
        {
          code: "622901",
          name: "\u4E34\u590F\u5E02"
        },
        {
          code: "622921",
          name: "\u4E34\u590F\u53BF"
        },
        {
          code: "622922",
          name: "\u5EB7\u4E50\u53BF"
        },
        {
          code: "622923",
          name: "\u6C38\u9756\u53BF"
        },
        {
          code: "622924",
          name: "\u5E7F\u6CB3\u53BF"
        },
        {
          code: "622925",
          name: "\u548C\u653F\u53BF"
        },
        {
          code: "622926",
          name: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "622927",
          name: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "623001",
          name: "\u5408\u4F5C\u5E02"
        },
        {
          code: "623021",
          name: "\u4E34\u6F6D\u53BF"
        },
        {
          code: "623022",
          name: "\u5353\u5C3C\u53BF"
        },
        {
          code: "623023",
          name: "\u821F\u66F2\u53BF"
        },
        {
          code: "623024",
          name: "\u8FED\u90E8\u53BF"
        },
        {
          code: "623025",
          name: "\u739B\u66F2\u53BF"
        },
        {
          code: "623026",
          name: "\u788C\u66F2\u53BF"
        },
        {
          code: "623027",
          name: "\u590F\u6CB3\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "630102",
          name: "\u57CE\u4E1C\u533A"
        },
        {
          code: "630103",
          name: "\u57CE\u4E2D\u533A"
        },
        {
          code: "630104",
          name: "\u57CE\u897F\u533A"
        },
        {
          code: "630105",
          name: "\u57CE\u5317\u533A"
        },
        {
          code: "630121",
          name: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "630122",
          name: "\u6E5F\u4E2D\u53BF"
        },
        {
          code: "630123",
          name: "\u6E5F\u6E90\u53BF"
        }
      ],
      [
        {
          code: "630202",
          name: "\u4E50\u90FD\u533A"
        },
        {
          code: "630203",
          name: "\u5E73\u5B89\u533A"
        },
        {
          code: "630222",
          name: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "630223",
          name: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "630224",
          name: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "630225",
          name: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "632221",
          name: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "632222",
          name: "\u7941\u8FDE\u53BF"
        },
        {
          code: "632223",
          name: "\u6D77\u664F\u53BF"
        },
        {
          code: "632224",
          name: "\u521A\u5BDF\u53BF"
        }
      ],
      [
        {
          code: "632321",
          name: "\u540C\u4EC1\u53BF"
        },
        {
          code: "632322",
          name: "\u5C16\u624E\u53BF"
        },
        {
          code: "632323",
          name: "\u6CFD\u5E93\u53BF"
        },
        {
          code: "632324",
          name: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "632521",
          name: "\u5171\u548C\u53BF"
        },
        {
          code: "632522",
          name: "\u540C\u5FB7\u53BF"
        },
        {
          code: "632523",
          name: "\u8D35\u5FB7\u53BF"
        },
        {
          code: "632524",
          name: "\u5174\u6D77\u53BF"
        },
        {
          code: "632525",
          name: "\u8D35\u5357\u53BF"
        }
      ],
      [
        {
          code: "632621",
          name: "\u739B\u6C81\u53BF"
        },
        {
          code: "632622",
          name: "\u73ED\u739B\u53BF"
        },
        {
          code: "632623",
          name: "\u7518\u5FB7\u53BF"
        },
        {
          code: "632624",
          name: "\u8FBE\u65E5\u53BF"
        },
        {
          code: "632625",
          name: "\u4E45\u6CBB\u53BF"
        },
        {
          code: "632626",
          name: "\u739B\u591A\u53BF"
        }
      ],
      [
        {
          code: "632701",
          name: "\u7389\u6811\u5E02"
        },
        {
          code: "632722",
          name: "\u6742\u591A\u53BF"
        },
        {
          code: "632723",
          name: "\u79F0\u591A\u53BF"
        },
        {
          code: "632724",
          name: "\u6CBB\u591A\u53BF"
        },
        {
          code: "632725",
          name: "\u56CA\u8C26\u53BF"
        },
        {
          code: "632726",
          name: "\u66F2\u9EBB\u83B1\u53BF"
        }
      ],
      [
        {
          code: "632801",
          name: "\u683C\u5C14\u6728\u5E02"
        },
        {
          code: "632802",
          name: "\u5FB7\u4EE4\u54C8\u5E02"
        },
        {
          code: "632821",
          name: "\u4E4C\u5170\u53BF"
        },
        {
          code: "632822",
          name: "\u90FD\u5170\u53BF"
        },
        {
          code: "632823",
          name: "\u5929\u5CFB\u53BF"
        },
        {
          code: "632824",
          name: "\u51B7\u6E56\u884C\u653F\u59D4\u5458\u4F1A"
        },
        {
          code: "632825",
          name: "\u5927\u67F4\u65E6\u884C\u653F\u59D4\u5458\u4F1A"
        },
        {
          code: "632826",
          name: "\u832B\u5D16\u884C\u653F\u59D4\u5458\u4F1A"
        }
      ]
    ],
    [
      [
        {
          code: "640104",
          name: "\u5174\u5E86\u533A"
        },
        {
          code: "640105",
          name: "\u897F\u590F\u533A"
        },
        {
          code: "640106",
          name: "\u91D1\u51E4\u533A"
        },
        {
          code: "640121",
          name: "\u6C38\u5B81\u53BF"
        },
        {
          code: "640122",
          name: "\u8D3A\u5170\u53BF"
        },
        {
          code: "640181",
          name: "\u7075\u6B66\u5E02"
        }
      ],
      [
        {
          code: "640202",
          name: "\u5927\u6B66\u53E3\u533A"
        },
        {
          code: "640205",
          name: "\u60E0\u519C\u533A"
        },
        {
          code: "640221",
          name: "\u5E73\u7F57\u53BF"
        }
      ],
      [
        {
          code: "640302",
          name: "\u5229\u901A\u533A"
        },
        {
          code: "640303",
          name: "\u7EA2\u5BFA\u5821\u533A"
        },
        {
          code: "640323",
          name: "\u76D0\u6C60\u53BF"
        },
        {
          code: "640324",
          name: "\u540C\u5FC3\u53BF"
        },
        {
          code: "640381",
          name: "\u9752\u94DC\u5CE1\u5E02"
        }
      ],
      [
        {
          code: "640402",
          name: "\u539F\u5DDE\u533A"
        },
        {
          code: "640422",
          name: "\u897F\u5409\u53BF"
        },
        {
          code: "640423",
          name: "\u9686\u5FB7\u53BF"
        },
        {
          code: "640424",
          name: "\u6CFE\u6E90\u53BF"
        },
        {
          code: "640425",
          name: "\u5F6D\u9633\u53BF"
        }
      ],
      [
        {
          code: "640502",
          name: "\u6C99\u5761\u5934\u533A"
        },
        {
          code: "640521",
          name: "\u4E2D\u5B81\u53BF"
        },
        {
          code: "640522",
          name: "\u6D77\u539F\u53BF"
        }
      ]
    ],
    [
      [
        {
          code: "650102",
          name: "\u5929\u5C71\u533A"
        },
        {
          code: "650103",
          name: "\u6C99\u4F9D\u5DF4\u514B\u533A"
        },
        {
          code: "650104",
          name: "\u65B0\u5E02\u533A"
        },
        {
          code: "650105",
          name: "\u6C34\u78E8\u6C9F\u533A"
        },
        {
          code: "650106",
          name: "\u5934\u5C6F\u6CB3\u533A"
        },
        {
          code: "650107",
          name: "\u8FBE\u5742\u57CE\u533A"
        },
        {
          code: "650109",
          name: "\u7C73\u4E1C\u533A"
        },
        {
          code: "650121",
          name: "\u4E4C\u9C81\u6728\u9F50\u53BF"
        }
      ],
      [
        {
          code: "650202",
          name: "\u72EC\u5C71\u5B50\u533A"
        },
        {
          code: "650203",
          name: "\u514B\u62C9\u739B\u4F9D\u533A"
        },
        {
          code: "650204",
          name: "\u767D\u78B1\u6EE9\u533A"
        },
        {
          code: "650205",
          name: "\u4E4C\u5C14\u79BE\u533A"
        }
      ],
      [
        {
          code: "650402",
          name: "\u9AD8\u660C\u533A"
        },
        {
          code: "650421",
          name: "\u912F\u5584\u53BF"
        },
        {
          code: "650422",
          name: "\u6258\u514B\u900A\u53BF"
        }
      ],
      [
        {
          code: "650502",
          name: "\u4F0A\u5DDE\u533A"
        },
        {
          code: "650521",
          name: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
        },
        {
          code: "650522",
          name: "\u4F0A\u543E\u53BF"
        }
      ],
      [
        {
          code: "652301",
          name: "\u660C\u5409\u5E02"
        },
        {
          code: "652302",
          name: "\u961C\u5EB7\u5E02"
        },
        {
          code: "652323",
          name: "\u547C\u56FE\u58C1\u53BF"
        },
        {
          code: "652324",
          name: "\u739B\u7EB3\u65AF\u53BF"
        },
        {
          code: "652325",
          name: "\u5947\u53F0\u53BF"
        },
        {
          code: "652327",
          name: "\u5409\u6728\u8428\u5C14\u53BF"
        },
        {
          code: "652328",
          name: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "652701",
          name: "\u535A\u4E50\u5E02"
        },
        {
          code: "652702",
          name: "\u963F\u62C9\u5C71\u53E3\u5E02"
        },
        {
          code: "652722",
          name: "\u7CBE\u6CB3\u53BF"
        },
        {
          code: "652723",
          name: "\u6E29\u6CC9\u53BF"
        }
      ],
      [
        {
          code: "652801",
          name: "\u5E93\u5C14\u52D2\u5E02"
        },
        {
          code: "652822",
          name: "\u8F6E\u53F0\u53BF"
        },
        {
          code: "652823",
          name: "\u5C09\u7281\u53BF"
        },
        {
          code: "652824",
          name: "\u82E5\u7F8C\u53BF"
        },
        {
          code: "652825",
          name: "\u4E14\u672B\u53BF"
        },
        {
          code: "652826",
          name: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF"
        },
        {
          code: "652827",
          name: "\u548C\u9759\u53BF"
        },
        {
          code: "652828",
          name: "\u548C\u7855\u53BF"
        },
        {
          code: "652829",
          name: "\u535A\u6E56\u53BF"
        }
      ],
      [
        {
          code: "652901",
          name: "\u963F\u514B\u82CF\u5E02"
        },
        {
          code: "652922",
          name: "\u6E29\u5BBF\u53BF"
        },
        {
          code: "652923",
          name: "\u5E93\u8F66\u53BF"
        },
        {
          code: "652924",
          name: "\u6C99\u96C5\u53BF"
        },
        {
          code: "652925",
          name: "\u65B0\u548C\u53BF"
        },
        {
          code: "652926",
          name: "\u62DC\u57CE\u53BF"
        },
        {
          code: "652927",
          name: "\u4E4C\u4EC0\u53BF"
        },
        {
          code: "652928",
          name: "\u963F\u74E6\u63D0\u53BF"
        },
        {
          code: "652929",
          name: "\u67EF\u576A\u53BF"
        }
      ],
      [
        {
          code: "653001",
          name: "\u963F\u56FE\u4EC0\u5E02"
        },
        {
          code: "653022",
          name: "\u963F\u514B\u9676\u53BF"
        },
        {
          code: "653023",
          name: "\u963F\u5408\u5947\u53BF"
        },
        {
          code: "653024",
          name: "\u4E4C\u6070\u53BF"
        }
      ],
      [
        {
          code: "653101",
          name: "\u5580\u4EC0\u5E02"
        },
        {
          code: "653121",
          name: "\u758F\u9644\u53BF"
        },
        {
          code: "653122",
          name: "\u758F\u52D2\u53BF"
        },
        {
          code: "653123",
          name: "\u82F1\u5409\u6C99\u53BF"
        },
        {
          code: "653124",
          name: "\u6CFD\u666E\u53BF"
        },
        {
          code: "653125",
          name: "\u838E\u8F66\u53BF"
        },
        {
          code: "653126",
          name: "\u53F6\u57CE\u53BF"
        },
        {
          code: "653127",
          name: "\u9EA6\u76D6\u63D0\u53BF"
        },
        {
          code: "653128",
          name: "\u5CB3\u666E\u6E56\u53BF"
        },
        {
          code: "653129",
          name: "\u4F3D\u5E08\u53BF"
        },
        {
          code: "653130",
          name: "\u5DF4\u695A\u53BF"
        },
        {
          code: "653131",
          name: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "653201",
          name: "\u548C\u7530\u5E02"
        },
        {
          code: "653221",
          name: "\u548C\u7530\u53BF"
        },
        {
          code: "653222",
          name: "\u58A8\u7389\u53BF"
        },
        {
          code: "653223",
          name: "\u76AE\u5C71\u53BF"
        },
        {
          code: "653224",
          name: "\u6D1B\u6D66\u53BF"
        },
        {
          code: "653225",
          name: "\u7B56\u52D2\u53BF"
        },
        {
          code: "653226",
          name: "\u4E8E\u7530\u53BF"
        },
        {
          code: "653227",
          name: "\u6C11\u4E30\u53BF"
        }
      ],
      [
        {
          code: "654002",
          name: "\u4F0A\u5B81\u5E02"
        },
        {
          code: "654003",
          name: "\u594E\u5C6F\u5E02"
        },
        {
          code: "654004",
          name: "\u970D\u5C14\u679C\u65AF\u5E02"
        },
        {
          code: "654021",
          name: "\u4F0A\u5B81\u53BF"
        },
        {
          code: "654022",
          name: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF"
        },
        {
          code: "654023",
          name: "\u970D\u57CE\u53BF"
        },
        {
          code: "654024",
          name: "\u5DE9\u7559\u53BF"
        },
        {
          code: "654025",
          name: "\u65B0\u6E90\u53BF"
        },
        {
          code: "654026",
          name: "\u662D\u82CF\u53BF"
        },
        {
          code: "654027",
          name: "\u7279\u514B\u65AF\u53BF"
        },
        {
          code: "654028",
          name: "\u5C3C\u52D2\u514B\u53BF"
        }
      ],
      [
        {
          code: "654201",
          name: "\u5854\u57CE\u5E02"
        },
        {
          code: "654202",
          name: "\u4E4C\u82CF\u5E02"
        },
        {
          code: "654203",
          name: "\u6C99\u6E7E\u5E02"
        },
        {
          code: "654221",
          name: "\u989D\u654F\u53BF"
        },
        {
          code: "654224",
          name: "\u6258\u91CC\u53BF"
        },
        {
          code: "654225",
          name: "\u88D5\u6C11\u53BF"
        },
        {
          code: "654226",
          name: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF"
        }
      ],
      [
        {
          code: "654301",
          name: "\u963F\u52D2\u6CF0\u5E02"
        },
        {
          code: "654321",
          name: "\u5E03\u5C14\u6D25\u53BF"
        },
        {
          code: "654322",
          name: "\u5BCC\u8574\u53BF"
        },
        {
          code: "654323",
          name: "\u798F\u6D77\u53BF"
        },
        {
          code: "654324",
          name: "\u54C8\u5DF4\u6CB3\u53BF"
        },
        {
          code: "654325",
          name: "\u9752\u6CB3\u53BF"
        },
        {
          code: "654326",
          name: "\u5409\u6728\u4E43\u53BF"
        }
      ],
      [
        {
          code: "659001",
          name: "\u77F3\u6CB3\u5B50\u5E02"
        },
        {
          code: "659002",
          name: "\u963F\u62C9\u5C14\u5E02"
        },
        {
          code: "659003",
          name: "\u56FE\u6728\u8212\u514B\u5E02"
        },
        {
          code: "659004",
          name: "\u4E94\u5BB6\u6E20\u5E02"
        },
        {
          code: "659005",
          name: "\u5317\u5C6F\u5E02"
        },
        {
          code: "659006",
          name: "\u94C1\u95E8\u5173\u5E02"
        },
        {
          code: "659007",
          name: "\u53CC\u6CB3\u5E02"
        },
        {
          code: "659008",
          name: "\u53EF\u514B\u8FBE\u62C9\u5E02"
        },
        {
          code: "659009",
          name: "\u6606\u7389\u5E02"
        }
      ]
    ],
    [
      [
        {
          code: "710101",
          name: "\u4E2D\u6B63\u533A"
        },
        {
          code: "710102",
          name: "\u5927\u540C\u533A"
        },
        {
          code: "710103",
          name: "\u4E2D\u5C71\u533A"
        },
        {
          code: "710104",
          name: "\u677E\u5C71\u533A"
        },
        {
          code: "710105",
          name: "\u5927\u5B89\u533A"
        },
        {
          code: "710106",
          name: "\u4E07\u534E\u533A"
        },
        {
          code: "710107",
          name: "\u4FE1\u4E49\u533A"
        },
        {
          code: "710108",
          name: "\u58EB\u6797\u533A"
        },
        {
          code: "710109",
          name: "\u5317\u6295\u533A"
        },
        {
          code: "710110",
          name: "\u5185\u6E56\u533A"
        },
        {
          code: "710111",
          name: "\u5357\u6E2F\u533A"
        },
        {
          code: "710112",
          name: "\u6587\u5C71\u533A"
        }
      ],
      [
        {
          code: "710201",
          name: "\u65B0\u5174\u533A"
        },
        {
          code: "710202",
          name: "\u524D\u91D1\u533A"
        },
        {
          code: "710203",
          name: "\u82D3\u96C5\u533A"
        },
        {
          code: "710204",
          name: "\u76D0\u57D5\u533A"
        },
        {
          code: "710205",
          name: "\u9F13\u5C71\u533A"
        },
        {
          code: "710206",
          name: "\u65D7\u6D25\u533A"
        },
        {
          code: "710207",
          name: "\u524D\u9547\u533A"
        },
        {
          code: "710208",
          name: "\u4E09\u6C11\u533A"
        },
        {
          code: "710209",
          name: "\u5DE6\u8425\u533A"
        },
        {
          code: "710210",
          name: "\u6960\u6893\u533A"
        },
        {
          code: "710211",
          name: "\u5C0F\u6E2F\u533A"
        },
        {
          code: "710242",
          name: "\u4EC1\u6B66\u533A"
        },
        {
          code: "710243",
          name: "\u5927\u793E\u533A"
        },
        {
          code: "710244",
          name: "\u5188\u5C71\u533A"
        },
        {
          code: "710245",
          name: "\u8DEF\u7AF9\u533A"
        },
        {
          code: "710246",
          name: "\u963F\u83B2\u533A"
        },
        {
          code: "710247",
          name: "\u7530\u5BEE\u533A"
        },
        {
          code: "710248",
          name: "\u71D5\u5DE2\u533A"
        },
        {
          code: "710249",
          name: "\u6865\u5934\u533A"
        },
        {
          code: "710250",
          name: "\u6893\u5B98\u533A"
        },
        {
          code: "710251",
          name: "\u5F25\u9640\u533A"
        },
        {
          code: "710252",
          name: "\u6C38\u5B89\u533A"
        },
        {
          code: "710253",
          name: "\u6E56\u5185\u533A"
        },
        {
          code: "710254",
          name: "\u51E4\u5C71\u533A"
        },
        {
          code: "710255",
          name: "\u5927\u5BEE\u533A"
        },
        {
          code: "710256",
          name: "\u6797\u56ED\u533A"
        },
        {
          code: "710257",
          name: "\u9E1F\u677E\u533A"
        },
        {
          code: "710258",
          name: "\u5927\u6811\u533A"
        },
        {
          code: "710259",
          name: "\u65D7\u5C71\u533A"
        },
        {
          code: "710260",
          name: "\u7F8E\u6D53\u533A"
        },
        {
          code: "710261",
          name: "\u516D\u9F9F\u533A"
        },
        {
          code: "710262",
          name: "\u5185\u95E8\u533A"
        },
        {
          code: "710263",
          name: "\u6749\u6797\u533A"
        },
        {
          code: "710264",
          name: "\u7532\u4ED9\u533A"
        },
        {
          code: "710265",
          name: "\u6843\u6E90\u533A"
        },
        {
          code: "710266",
          name: "\u90A3\u739B\u590F\u533A"
        },
        {
          code: "710267",
          name: "\u8302\u6797\u533A"
        },
        {
          code: "710268",
          name: "\u8304\u8423\u533A"
        }
      ],
      [
        {
          code: "710301",
          name: "\u4E2D\u897F\u533A"
        },
        {
          code: "710302",
          name: "\u4E1C\u533A"
        },
        {
          code: "710303",
          name: "\u5357\u533A"
        },
        {
          code: "710304",
          name: "\u5317\u533A"
        },
        {
          code: "710305",
          name: "\u5B89\u5E73\u533A"
        },
        {
          code: "710306",
          name: "\u5B89\u5357\u533A"
        },
        {
          code: "710339",
          name: "\u6C38\u5EB7\u533A"
        },
        {
          code: "710340",
          name: "\u5F52\u4EC1\u533A"
        },
        {
          code: "710341",
          name: "\u65B0\u5316\u533A"
        },
        {
          code: "710342",
          name: "\u5DE6\u9547\u533A"
        },
        {
          code: "710343",
          name: "\u7389\u4E95\u533A"
        },
        {
          code: "710344",
          name: "\u6960\u897F\u533A"
        },
        {
          code: "710345",
          name: "\u5357\u5316\u533A"
        },
        {
          code: "710346",
          name: "\u4EC1\u5FB7\u533A"
        },
        {
          code: "710347",
          name: "\u5173\u5E99\u533A"
        },
        {
          code: "710348",
          name: "\u9F99\u5D0E\u533A"
        },
        {
          code: "710349",
          name: "\u5B98\u7530\u533A"
        },
        {
          code: "710350",
          name: "\u9EBB\u8C46\u533A"
        },
        {
          code: "710351",
          name: "\u4F73\u91CC\u533A"
        },
        {
          code: "710352",
          name: "\u897F\u6E2F\u533A"
        },
        {
          code: "710353",
          name: "\u4E03\u80A1\u533A"
        },
        {
          code: "710354",
          name: "\u5C06\u519B\u533A"
        },
        {
          code: "710355",
          name: "\u5B66\u7532\u533A"
        },
        {
          code: "710356",
          name: "\u5317\u95E8\u533A"
        },
        {
          code: "710357",
          name: "\u65B0\u8425\u533A"
        },
        {
          code: "710358",
          name: "\u540E\u58C1\u533A"
        },
        {
          code: "710359",
          name: "\u767D\u6CB3\u533A"
        },
        {
          code: "710360",
          name: "\u4E1C\u5C71\u533A"
        },
        {
          code: "710361",
          name: "\u516D\u7532\u533A"
        },
        {
          code: "710362",
          name: "\u4E0B\u8425\u533A"
        },
        {
          code: "710363",
          name: "\u67F3\u8425\u533A"
        },
        {
          code: "710364",
          name: "\u76D0\u6C34\u533A"
        },
        {
          code: "710365",
          name: "\u5584\u5316\u533A"
        },
        {
          code: "710366",
          name: "\u5927\u5185\u533A"
        },
        {
          code: "710367",
          name: "\u5C71\u4E0A\u533A"
        },
        {
          code: "710368",
          name: "\u65B0\u5E02\u533A"
        },
        {
          code: "710369",
          name: "\u5B89\u5B9A\u533A"
        }
      ],
      [
        {
          code: "710401",
          name: "\u4E2D\u533A"
        },
        {
          code: "710402",
          name: "\u4E1C\u533A"
        },
        {
          code: "710403",
          name: "\u5357\u533A"
        },
        {
          code: "710404",
          name: "\u897F\u533A"
        },
        {
          code: "710405",
          name: "\u5317\u533A"
        },
        {
          code: "710406",
          name: "\u5317\u5C6F\u533A"
        },
        {
          code: "710407",
          name: "\u897F\u5C6F\u533A"
        },
        {
          code: "710408",
          name: "\u5357\u5C6F\u533A"
        },
        {
          code: "710431",
          name: "\u592A\u5E73\u533A"
        },
        {
          code: "710432",
          name: "\u5927\u91CC\u533A"
        },
        {
          code: "710433",
          name: "\u96FE\u5CF0\u533A"
        },
        {
          code: "710434",
          name: "\u4E4C\u65E5\u533A"
        },
        {
          code: "710435",
          name: "\u4E30\u539F\u533A"
        },
        {
          code: "710436",
          name: "\u540E\u91CC\u533A"
        },
        {
          code: "710437",
          name: "\u77F3\u5188\u533A"
        },
        {
          code: "710438",
          name: "\u4E1C\u52BF\u533A"
        },
        {
          code: "710439",
          name: "\u548C\u5E73\u533A"
        },
        {
          code: "710440",
          name: "\u65B0\u793E\u533A"
        },
        {
          code: "710441",
          name: "\u6F6D\u5B50\u533A"
        },
        {
          code: "710442",
          name: "\u5927\u96C5\u533A"
        },
        {
          code: "710443",
          name: "\u795E\u5188\u533A"
        },
        {
          code: "710444",
          name: "\u5927\u809A\u533A"
        },
        {
          code: "710445",
          name: "\u6C99\u9E7F\u533A"
        },
        {
          code: "710446",
          name: "\u9F99\u4E95\u533A"
        },
        {
          code: "710447",
          name: "\u68A7\u6816\u533A"
        },
        {
          code: "710448",
          name: "\u6E05\u6C34\u533A"
        },
        {
          code: "710449",
          name: "\u5927\u7532\u533A"
        },
        {
          code: "710450",
          name: "\u5916\u57D4\u533A"
        },
        {
          code: "710451",
          name: "\u5927\u5B89\u533A"
        }
      ],
      [
        {
          code: "710614",
          name: "\u5357\u6295\u5E02"
        },
        {
          code: "710615",
          name: "\u4E2D\u5BEE\u4E61"
        },
        {
          code: "710616",
          name: "\u8349\u5C6F\u9547"
        },
        {
          code: "710617",
          name: "\u56FD\u59D3\u4E61"
        },
        {
          code: "710618",
          name: "\u57D4\u91CC\u9547"
        },
        {
          code: "710619",
          name: "\u4EC1\u7231\u4E61"
        },
        {
          code: "710620",
          name: "\u540D\u95F4\u4E61"
        },
        {
          code: "710621",
          name: "\u96C6\u96C6\u9547"
        },
        {
          code: "710622",
          name: "\u6C34\u91CC\u4E61"
        },
        {
          code: "710623",
          name: "\u9C7C\u6C60\u4E61"
        },
        {
          code: "710624",
          name: "\u4FE1\u4E49\u4E61"
        },
        {
          code: "710625",
          name: "\u7AF9\u5C71\u9547"
        },
        {
          code: "710626",
          name: "\u9E7F\u8C37\u4E61"
        }
      ],
      [
        {
          code: "710701",
          name: "\u4EC1\u7231\u533A"
        },
        {
          code: "710702",
          name: "\u4FE1\u4E49\u533A"
        },
        {
          code: "710703",
          name: "\u4E2D\u6B63\u533A"
        },
        {
          code: "710704",
          name: "\u4E2D\u5C71\u533A"
        },
        {
          code: "710705",
          name: "\u5B89\u4E50\u533A"
        },
        {
          code: "710706",
          name: "\u6696\u6696\u533A"
        },
        {
          code: "710707",
          name: "\u4E03\u5835\u533A"
        }
      ],
      [
        {
          code: "710801",
          name: "\u4E1C\u533A"
        },
        {
          code: "710802",
          name: "\u5317\u533A"
        },
        {
          code: "710803",
          name: "\u9999\u5C71\u533A"
        }
      ],
      [
        {
          code: "710901",
          name: "\u4E1C\u533A"
        },
        {
          code: "710902",
          name: "\u897F\u533A"
        }
      ],
      [
        {
          code: "711130",
          name: "\u4E07\u91CC\u533A"
        },
        {
          code: "711131",
          name: "\u91D1\u5C71\u533A"
        },
        {
          code: "711132",
          name: "\u677F\u6865\u533A"
        },
        {
          code: "711133",
          name: "\u6C50\u6B62\u533A"
        },
        {
          code: "711134",
          name: "\u6DF1\u5751\u533A"
        },
        {
          code: "711135",
          name: "\u77F3\u7887\u533A"
        },
        {
          code: "711136",
          name: "\u745E\u82B3\u533A"
        },
        {
          code: "711137",
          name: "\u5E73\u6EAA\u533A"
        },
        {
          code: "711138",
          name: "\u53CC\u6EAA\u533A"
        },
        {
          code: "711139",
          name: "\u8D21\u5BEE\u533A"
        },
        {
          code: "711140",
          name: "\u65B0\u5E97\u533A"
        },
        {
          code: "711141",
          name: "\u576A\u6797\u533A"
        },
        {
          code: "711142",
          name: "\u4E4C\u6765\u533A"
        },
        {
          code: "711143",
          name: "\u6C38\u548C\u533A"
        },
        {
          code: "711144",
          name: "\u4E2D\u548C\u533A"
        },
        {
          code: "711145",
          name: "\u571F\u57CE\u533A"
        },
        {
          code: "711146",
          name: "\u4E09\u5CE1\u533A"
        },
        {
          code: "711147",
          name: "\u6811\u6797\u533A"
        },
        {
          code: "711148",
          name: "\u83BA\u6B4C\u533A"
        },
        {
          code: "711149",
          name: "\u4E09\u91CD\u533A"
        },
        {
          code: "711150",
          name: "\u65B0\u5E84\u533A"
        },
        {
          code: "711151",
          name: "\u6CF0\u5C71\u533A"
        },
        {
          code: "711152",
          name: "\u6797\u53E3\u533A"
        },
        {
          code: "711153",
          name: "\u82A6\u6D32\u533A"
        },
        {
          code: "711154",
          name: "\u4E94\u80A1\u533A"
        },
        {
          code: "711155",
          name: "\u516B\u91CC\u533A"
        },
        {
          code: "711156",
          name: "\u6DE1\u6C34\u533A"
        },
        {
          code: "711157",
          name: "\u4E09\u829D\u533A"
        },
        {
          code: "711158",
          name: "\u77F3\u95E8\u533A"
        }
      ],
      [
        {
          code: "711214",
          name: "\u5B9C\u5170\u5E02"
        },
        {
          code: "711215",
          name: "\u5934\u57CE\u9547"
        },
        {
          code: "711216",
          name: "\u7901\u6EAA\u4E61"
        },
        {
          code: "711217",
          name: "\u58EE\u56F4\u4E61"
        },
        {
          code: "711218",
          name: "\u5458\u5C71\u4E61"
        },
        {
          code: "711219",
          name: "\u7F57\u4E1C\u9547"
        },
        {
          code: "711220",
          name: "\u4E09\u661F\u4E61"
        },
        {
          code: "711221",
          name: "\u5927\u540C\u4E61"
        },
        {
          code: "711222",
          name: "\u4E94\u7ED3\u4E61"
        },
        {
          code: "711223",
          name: "\u51AC\u5C71\u4E61"
        },
        {
          code: "711224",
          name: "\u82CF\u6FB3\u9547"
        },
        {
          code: "711225",
          name: "\u5357\u6FB3\u4E61"
        }
      ],
      [
        {
          code: "711314",
          name: "\u7AF9\u5317\u5E02"
        },
        {
          code: "711315",
          name: "\u6E56\u53E3\u4E61"
        },
        {
          code: "711316",
          name: "\u65B0\u4E30\u4E61"
        },
        {
          code: "711317",
          name: "\u65B0\u57D4\u9547"
        },
        {
          code: "711318",
          name: "\u5173\u897F\u9547"
        },
        {
          code: "711319",
          name: "\u828E\u6797\u4E61"
        },
        {
          code: "711320",
          name: "\u5B9D\u5C71\u4E61"
        },
        {
          code: "711321",
          name: "\u7AF9\u4E1C\u9547"
        },
        {
          code: "711322",
          name: "\u4E94\u5CF0\u4E61"
        },
        {
          code: "711323",
          name: "\u6A2A\u5C71\u4E61"
        },
        {
          code: "711324",
          name: "\u5C16\u77F3\u4E61"
        },
        {
          code: "711325",
          name: "\u5317\u57D4\u4E61"
        },
        {
          code: "711326",
          name: "\u5CE8\u7709\u4E61"
        }
      ],
      [
        {
          code: "711414",
          name: "\u4E2D\u575C\u533A"
        },
        {
          code: "711415",
          name: "\u5E73\u9547\u533A"
        },
        {
          code: "711416",
          name: "\u9F99\u6F6D\u533A"
        },
        {
          code: "711417",
          name: "\u6768\u6885\u533A"
        },
        {
          code: "711418",
          name: "\u65B0\u5C4B\u533A"
        },
        {
          code: "711419",
          name: "\u89C2\u97F3\u533A"
        },
        {
          code: "711420",
          name: "\u6843\u56ED\u533A"
        },
        {
          code: "711421",
          name: "\u9F9F\u5C71\u533A"
        },
        {
          code: "711422",
          name: "\u516B\u5FB7\u533A"
        },
        {
          code: "711423",
          name: "\u5927\u6EAA\u533A"
        },
        {
          code: "711424",
          name: "\u590D\u5174\u533A"
        },
        {
          code: "711425",
          name: "\u5927\u56ED\u533A"
        },
        {
          code: "711426",
          name: "\u82A6\u7AF9\u533A"
        }
      ],
      [
        {
          code: "711519",
          name: "\u7AF9\u5357\u9547"
        },
        {
          code: "711520",
          name: "\u5934\u4EFD\u5E02"
        },
        {
          code: "711521",
          name: "\u4E09\u6E7E\u4E61"
        },
        {
          code: "711522",
          name: "\u5357\u5E84\u4E61"
        },
        {
          code: "711523",
          name: "\u72EE\u6F6D\u4E61"
        },
        {
          code: "711524",
          name: "\u540E\u9F99\u9547"
        },
        {
          code: "711525",
          name: "\u901A\u9704\u9547"
        },
        {
          code: "711526",
          name: "\u82D1\u91CC\u9547"
        },
        {
          code: "711527",
          name: "\u82D7\u6817\u5E02"
        },
        {
          code: "711528",
          name: "\u9020\u6865\u4E61"
        },
        {
          code: "711529",
          name: "\u5934\u5C4B\u4E61"
        },
        {
          code: "711530",
          name: "\u516C\u9986\u4E61"
        },
        {
          code: "711531",
          name: "\u5927\u6E56\u4E61"
        },
        {
          code: "711532",
          name: "\u6CF0\u5B89\u4E61"
        },
        {
          code: "711533",
          name: "\u94DC\u9523\u4E61"
        },
        {
          code: "711534",
          name: "\u4E09\u4E49\u4E61"
        },
        {
          code: "711535",
          name: "\u897F\u6E56\u4E61"
        },
        {
          code: "711536",
          name: "\u5353\u5170\u9547"
        }
      ],
      [
        {
          code: "711727",
          name: "\u5F70\u5316\u5E02"
        },
        {
          code: "711728",
          name: "\u82AC\u56ED\u4E61"
        },
        {
          code: "711729",
          name: "\u82B1\u575B\u4E61"
        },
        {
          code: "711730",
          name: "\u79C0\u6C34\u4E61"
        },
        {
          code: "711731",
          name: "\u9E7F\u6E2F\u9547"
        },
        {
          code: "711732",
          name: "\u798F\u5174\u4E61"
        },
        {
          code: "711733",
          name: "\u7EBF\u897F\u4E61"
        },
        {
          code: "711734",
          name: "\u548C\u7F8E\u9547"
        },
        {
          code: "711735",
          name: "\u4F38\u6E2F\u4E61"
        },
        {
          code: "711736",
          name: "\u5458\u6797\u5E02"
        },
        {
          code: "711737",
          name: "\u793E\u5934\u4E61"
        },
        {
          code: "711738",
          name: "\u6C38\u9756\u4E61"
        },
        {
          code: "711739",
          name: "\u57D4\u5FC3\u4E61"
        },
        {
          code: "711740",
          name: "\u6EAA\u6E56\u9547"
        },
        {
          code: "711741",
          name: "\u5927\u6751\u4E61"
        },
        {
          code: "711742",
          name: "\u57D4\u76D0\u4E61"
        },
        {
          code: "711743",
          name: "\u7530\u4E2D\u9547"
        },
        {
          code: "711744",
          name: "\u5317\u6597\u9547"
        },
        {
          code: "711745",
          name: "\u7530\u5C3E\u4E61"
        },
        {
          code: "711746",
          name: "\u57E4\u5934\u4E61"
        },
        {
          code: "711747",
          name: "\u6EAA\u5DDE\u4E61"
        },
        {
          code: "711748",
          name: "\u7AF9\u5858\u4E61"
        },
        {
          code: "711749",
          name: "\u4E8C\u6797\u9547"
        },
        {
          code: "711750",
          name: "\u5927\u57CE\u4E61"
        },
        {
          code: "711751",
          name: "\u82B3\u82D1\u4E61"
        },
        {
          code: "711752",
          name: "\u4E8C\u6C34\u4E61"
        }
      ],
      [
        {
          code: "711919",
          name: "\u756A\u8DEF\u4E61"
        },
        {
          code: "711920",
          name: "\u6885\u5C71\u4E61"
        },
        {
          code: "711921",
          name: "\u7AF9\u5D0E\u4E61"
        },
        {
          code: "711922",
          name: "\u963F\u91CC\u5C71\u4E61"
        },
        {
          code: "711923",
          name: "\u4E2D\u57D4\u4E61"
        },
        {
          code: "711924",
          name: "\u5927\u57D4\u4E61"
        },
        {
          code: "711925",
          name: "\u6C34\u4E0A\u4E61"
        },
        {
          code: "711926",
          name: "\u9E7F\u8349\u4E61"
        },
        {
          code: "711927",
          name: "\u592A\u4FDD\u5E02"
        },
        {
          code: "711928",
          name: "\u6734\u5B50\u5E02"
        },
        {
          code: "711929",
          name: "\u4E1C\u77F3\u4E61"
        },
        {
          code: "711930",
          name: "\u516D\u811A\u4E61"
        },
        {
          code: "711931",
          name: "\u65B0\u6E2F\u4E61"
        },
        {
          code: "711932",
          name: "\u6C11\u96C4\u4E61"
        },
        {
          code: "711933",
          name: "\u5927\u6797\u9547"
        },
        {
          code: "711934",
          name: "\u6EAA\u53E3\u4E61"
        },
        {
          code: "711935",
          name: "\u4E49\u7AF9\u4E61"
        },
        {
          code: "711936",
          name: "\u5E03\u888B\u9547"
        }
      ],
      [
        {
          code: "712121",
          name: "\u6597\u5357\u9547"
        },
        {
          code: "712122",
          name: "\u5927\u57E4\u4E61"
        },
        {
          code: "712123",
          name: "\u864E\u5C3E\u9547"
        },
        {
          code: "712124",
          name: "\u571F\u5E93\u9547"
        },
        {
          code: "712125",
          name: "\u8912\u5FE0\u4E61"
        },
        {
          code: "712126",
          name: "\u4E1C\u52BF\u4E61"
        },
        {
          code: "712127",
          name: "\u53F0\u897F\u4E61"
        },
        {
          code: "712128",
          name: "\u4ED1\u80CC\u4E61"
        },
        {
          code: "712129",
          name: "\u9EA6\u5BEE\u4E61"
        },
        {
          code: "712130",
          name: "\u6597\u516D\u5E02"
        },
        {
          code: "712131",
          name: "\u6797\u5185\u4E61"
        },
        {
          code: "712132",
          name: "\u53E4\u5751\u4E61"
        },
        {
          code: "712133",
          name: "\u83BF\u6850\u4E61"
        },
        {
          code: "712134",
          name: "\u897F\u87BA\u9547"
        },
        {
          code: "712135",
          name: "\u4E8C\u4ED1\u4E61"
        },
        {
          code: "712136",
          name: "\u5317\u6E2F\u9547"
        },
        {
          code: "712137",
          name: "\u6C34\u6797\u4E61"
        },
        {
          code: "712138",
          name: "\u53E3\u6E56\u4E61"
        },
        {
          code: "712139",
          name: "\u56DB\u6E56\u4E61"
        },
        {
          code: "712140",
          name: "\u5143\u957F\u4E61"
        }
      ],
      [
        {
          code: "712434",
          name: "\u5C4F\u4E1C\u5E02"
        },
        {
          code: "712435",
          name: "\u4E09\u5730\u95E8\u4E61"
        },
        {
          code: "712436",
          name: "\u96FE\u53F0\u4E61"
        },
        {
          code: "712437",
          name: "\u739B\u5BB6\u4E61"
        },
        {
          code: "712438",
          name: "\u4E5D\u5982\u4E61"
        },
        {
          code: "712439",
          name: "\u91CC\u6E2F\u4E61"
        },
        {
          code: "712440",
          name: "\u9AD8\u6811\u4E61"
        },
        {
          code: "712441",
          name: "\u76D0\u57D4\u4E61"
        },
        {
          code: "712442",
          name: "\u957F\u6CBB\u4E61"
        },
        {
          code: "712443",
          name: "\u9E9F\u6D1B\u4E61"
        },
        {
          code: "712444",
          name: "\u7AF9\u7530\u4E61"
        },
        {
          code: "712445",
          name: "\u5185\u57D4\u4E61"
        },
        {
          code: "712446",
          name: "\u4E07\u4E39\u4E61"
        },
        {
          code: "712447",
          name: "\u6F6E\u5DDE\u9547"
        },
        {
          code: "712448",
          name: "\u6CF0\u6B66\u4E61"
        },
        {
          code: "712449",
          name: "\u6765\u4E49\u4E61"
        },
        {
          code: "712450",
          name: "\u4E07\u5CE6\u4E61"
        },
        {
          code: "712451",
          name: "\u5D01\u9876\u4E61"
        },
        {
          code: "712452",
          name: "\u65B0\u57E4\u4E61"
        },
        {
          code: "712453",
          name: "\u5357\u5DDE\u4E61"
        },
        {
          code: "712454",
          name: "\u6797\u8FB9\u4E61"
        },
        {
          code: "712455",
          name: "\u4E1C\u6E2F\u9547"
        },
        {
          code: "712456",
          name: "\u7409\u7403\u4E61"
        },
        {
          code: "712457",
          name: "\u4F73\u51AC\u4E61"
        },
        {
          code: "712458",
          name: "\u65B0\u56ED\u4E61"
        },
        {
          code: "712459",
          name: "\u678B\u5BEE\u4E61"
        },
        {
          code: "712460",
          name: "\u678B\u5C71\u4E61"
        },
        {
          code: "712461",
          name: "\u6625\u65E5\u4E61"
        },
        {
          code: "712462",
          name: "\u72EE\u5B50\u4E61"
        },
        {
          code: "712463",
          name: "\u8F66\u57CE\u4E61"
        },
        {
          code: "712464",
          name: "\u7261\u4E39\u4E61"
        },
        {
          code: "712465",
          name: "\u6052\u6625\u9547"
        },
        {
          code: "712466",
          name: "\u6EE1\u5DDE\u4E61"
        }
      ],
      [
        {
          code: "712517",
          name: "\u53F0\u4E1C\u5E02"
        },
        {
          code: "712518",
          name: "\u7EFF\u5C9B\u4E61"
        },
        {
          code: "712519",
          name: "\u5170\u5C7F\u4E61"
        },
        {
          code: "712520",
          name: "\u5EF6\u5E73\u4E61"
        },
        {
          code: "712521",
          name: "\u5351\u5357\u4E61"
        },
        {
          code: "712522",
          name: "\u9E7F\u91CE\u4E61"
        },
        {
          code: "712523",
          name: "\u5173\u5C71\u9547"
        },
        {
          code: "712524",
          name: "\u6D77\u7AEF\u4E61"
        },
        {
          code: "712525",
          name: "\u6C60\u4E0A\u4E61"
        },
        {
          code: "712526",
          name: "\u4E1C\u6CB3\u4E61"
        },
        {
          code: "712527",
          name: "\u6210\u529F\u9547"
        },
        {
          code: "712528",
          name: "\u957F\u6EE8\u4E61"
        },
        {
          code: "712529",
          name: "\u91D1\u5CF0\u4E61"
        },
        {
          code: "712530",
          name: "\u5927\u6B66\u4E61"
        },
        {
          code: "712531",
          name: "\u8FBE\u4EC1\u4E61"
        },
        {
          code: "712532",
          name: "\u592A\u9EBB\u91CC\u4E61"
        }
      ],
      [
        {
          code: "712615",
          name: "\u82B1\u83B2\u5E02"
        },
        {
          code: "712616",
          name: "\u65B0\u57CE\u4E61"
        },
        {
          code: "712618",
          name: "\u79C0\u6797\u4E61"
        },
        {
          code: "712619",
          name: "\u5409\u5B89\u4E61"
        },
        {
          code: "712620",
          name: "\u5BFF\u4E30\u4E61"
        },
        {
          code: "712621",
          name: "\u51E4\u6797\u9547"
        },
        {
          code: "712622",
          name: "\u5149\u590D\u4E61"
        },
        {
          code: "712623",
          name: "\u4E30\u6EE8\u4E61"
        },
        {
          code: "712624",
          name: "\u745E\u7A57\u4E61"
        },
        {
          code: "712625",
          name: "\u4E07\u8363\u4E61"
        },
        {
          code: "712626",
          name: "\u7389\u91CC\u9547"
        },
        {
          code: "712627",
          name: "\u5353\u6EAA\u4E61"
        },
        {
          code: "712628",
          name: "\u5BCC\u91CC\u4E61"
        }
      ],
      [
        {
          code: "712707",
          name: "\u9A6C\u516C\u5E02"
        },
        {
          code: "712708",
          name: "\u897F\u5C7F\u4E61"
        },
        {
          code: "712709",
          name: "\u671B\u5B89\u4E61"
        },
        {
          code: "712710",
          name: "\u4E03\u7F8E\u4E61"
        },
        {
          code: "712711",
          name: "\u767D\u6C99\u4E61"
        },
        {
          code: "712712",
          name: "\u6E56\u897F\u4E61"
        }
      ]
    ],
    [
      [
        {
          code: "810101",
          name: "\u4E2D\u897F\u533A"
        },
        {
          code: "810102",
          name: "\u4E1C\u533A"
        },
        {
          code: "810103",
          name: "\u4E5D\u9F99\u57CE\u533A"
        },
        {
          code: "810104",
          name: "\u89C2\u5858\u533A"
        },
        {
          code: "810105",
          name: "\u5357\u533A"
        },
        {
          code: "810106",
          name: "\u6DF1\u6C34\u57D7\u533A"
        },
        {
          code: "810107",
          name: "\u6E7E\u4ED4\u533A"
        },
        {
          code: "810108",
          name: "\u9EC4\u5927\u4ED9\u533A"
        },
        {
          code: "810109",
          name: "\u6CB9\u5C16\u65FA\u533A"
        },
        {
          code: "810110",
          name: "\u79BB\u5C9B\u533A"
        },
        {
          code: "810111",
          name: "\u8475\u9752\u533A"
        },
        {
          code: "810112",
          name: "\u5317\u533A"
        },
        {
          code: "810113",
          name: "\u897F\u8D21\u533A"
        },
        {
          code: "810114",
          name: "\u6C99\u7530\u533A"
        },
        {
          code: "810115",
          name: "\u5C6F\u95E8\u533A"
        },
        {
          code: "810116",
          name: "\u5927\u57D4\u533A"
        },
        {
          code: "810117",
          name: "\u8343\u6E7E\u533A"
        },
        {
          code: "810118",
          name: "\u5143\u6717\u533A"
        }
      ]
    ],
    [
      [
        {
          code: "820101",
          name: "\u6FB3\u95E8\u534A\u5C9B"
        },
        {
          code: "820102",
          name: "\u51FC\u4ED4"
        },
        {
          code: "820103",
          name: "\u8DEF\u51FC\u57CE"
        },
        {
          code: "820104",
          name: "\u8DEF\u73AF"
        }
      ]
    ]
  ];
  const _sfc_main$4 = {
    name: "u-picker",
    emits: ["update:modelValue", "input", "confirm", "cancel"],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      params: {
        type: Object,
        default() {
          return {
            year: true,
            month: true,
            day: true,
            hour: false,
            minute: false,
            second: false,
            province: true,
            city: true,
            area: true,
            timestamp: true
          };
        }
      },
      range: {
        type: Array,
        default() {
          return [];
        }
      },
      defaultSelector: {
        type: Array,
        default() {
          return [0];
        }
      },
      rangeKey: {
        type: String,
        default: ""
      },
      mode: {
        type: String,
        default: "time"
      },
      startYear: {
        type: [String, Number],
        default: 1950
      },
      endYear: {
        type: [String, Number],
        default: 2050
      },
      cancelColor: {
        type: String,
        default: "#606266"
      },
      confirmColor: {
        type: String,
        default: "#2979ff"
      },
      defaultTime: {
        type: String,
        default: ""
      },
      defaultRegion: {
        type: Array,
        default() {
          return [];
        }
      },
      showTimeTag: {
        type: Boolean,
        default: true
      },
      areaCode: {
        type: Array,
        default() {
          return [];
        }
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: [String, Number],
        default: 0
      },
      title: {
        type: String,
        default: ""
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      confirmText: {
        type: String,
        default: "\u786E\u8BA4"
      },
      blur: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        popupValue: false,
        years: [],
        months: [],
        days: [],
        hours: [],
        minutes: [],
        seconds: [],
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        reset: false,
        startDate: "",
        endDate: "",
        valueArr: [],
        provinces,
        citys: citys[0],
        areas: areas[0][0],
        province: 0,
        city: 0,
        area: 0,
        moving: false
      };
    },
    mounted() {
      this.init();
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      propsChange() {
        return `${this.mode}-${this.defaultTime}-${this.startYear}-${this.endYear}-${this.defaultRegion}-${this.areaCode}`;
      },
      regionChange() {
        return `${this.province}-${this.city}`;
      },
      yearAndMonth() {
        return `${this.year}-${this.month}`;
      },
      uZIndex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      }
    },
    watch: {
      propsChange() {
        this.reset = true;
        setTimeout(() => this.init(), 10);
      },
      regionChange(val) {
        this.citys = citys[this.province];
        this.areas = areas[this.province][this.city];
      },
      yearAndMonth(val) {
        if (this.params.year)
          this.setDays();
      },
      valueCom: {
        immediate: true,
        handler(n2) {
          if (n2) {
            this.reset = true;
            setTimeout(() => this.init(), 10);
          }
          this.popupValue = n2;
        }
      }
    },
    methods: {
      pickstart() {
      },
      pickend() {
      },
      getItemValue(item, mode) {
        if (this.mode == mode) {
          return typeof item == "object" ? item[this.rangeKey] : item;
        }
      },
      formatNumber(num) {
        return +num < 10 ? "0" + num : String(num);
      },
      generateArray: function(start, end) {
        start = Number(start);
        end = Number(end);
        end = end > start ? end : start;
        return [...Array(end + 1).keys()].slice(start);
      },
      getIndex: function(arr, val) {
        let index = arr.indexOf(val);
        return ~index ? index : 0;
      },
      initTimeValue() {
        let fdate = this.defaultTime.replace(/\-/g, "/");
        fdate = fdate && fdate.indexOf("/") == -1 ? `2020/01/01 ${fdate}` : fdate;
        let time = null;
        if (fdate)
          time = new Date(fdate);
        else
          time = new Date();
        this.year = time.getFullYear();
        this.month = Number(time.getMonth()) + 1;
        this.day = time.getDate();
        this.hour = time.getHours();
        this.minute = time.getMinutes();
        this.second = time.getSeconds();
      },
      init() {
        this.valueArr = [];
        this.reset = false;
        if (this.mode == "time") {
          this.initTimeValue();
          if (this.params.year) {
            this.valueArr.push(0);
            this.setYears();
          }
          if (this.params.month) {
            this.valueArr.push(0);
            this.setMonths();
          }
          if (this.params.day) {
            this.valueArr.push(0);
            this.setDays();
          }
          if (this.params.hour) {
            this.valueArr.push(0);
            this.setHours();
          }
          if (this.params.minute) {
            this.valueArr.push(0);
            this.setMinutes();
          }
          if (this.params.second) {
            this.valueArr.push(0);
            this.setSeconds();
          }
        } else if (this.mode == "region") {
          if (this.params.province) {
            this.valueArr.push(0);
            this.setProvinces();
          }
          if (this.params.city) {
            this.valueArr.push(0);
            this.setCitys();
          }
          if (this.params.area) {
            this.valueArr.push(0);
            this.setAreas();
          }
        } else if (this.mode == "selector") {
          this.valueArr = this.defaultSelector;
        } else if (this.mode == "multiSelector") {
          this.valueArr = this.defaultSelector;
          this.multiSelectorValue = this.defaultSelector;
        }
        this.$forceUpdate();
      },
      setYears() {
        this.years = this.generateArray(this.startYear, this.endYear);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.years, this.year));
      },
      setMonths() {
        this.months = this.generateArray(1, 12);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.months, this.month));
      },
      setDays() {
        let totalDays = new Date(this.year, this.month, 0).getDate();
        this.days = this.generateArray(1, totalDays);
        let index = 0;
        if (this.params.year && this.params.month)
          index = 2;
        else if (this.params.month)
          index = 1;
        else if (this.params.year)
          index = 1;
        else
          index = 0;
        if (this.day > this.days.length)
          this.day = this.days.length;
        this.valueArr.splice(index, 1, this.getIndex(this.days, this.day));
      },
      setHours() {
        this.hours = this.generateArray(0, 23);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.hours, this.hour));
      },
      setMinutes() {
        this.minutes = this.generateArray(0, 59);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.minutes, this.minute));
      },
      setSeconds() {
        this.seconds = this.generateArray(0, 59);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.seconds, this.second));
      },
      setProvinces() {
        if (!this.params.province)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[0];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[0];
        else
          tmp = 0;
        provinces.map((v2, k2) => {
          if (useCode ? v2.code == tmp : v2.name == tmp) {
            tmp = k2;
          }
        });
        this.province = tmp;
        this.provinces = provinces;
        this.valueArr.splice(0, 1, this.province);
      },
      setCitys() {
        if (!this.params.city)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[1];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[1];
        else
          tmp = 0;
        citys[this.province].map((v2, k2) => {
          if (useCode ? v2.code == tmp : v2.name == tmp) {
            tmp = k2;
          }
        });
        this.city = tmp;
        this.citys = citys[this.province];
        this.valueArr.splice(1, 1, this.city);
      },
      setAreas() {
        if (!this.params.area)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[2];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[2];
        else
          tmp = 0;
        areas[this.province][this.city].map((v2, k2) => {
          if (useCode ? v2.code == tmp : v2.name == tmp) {
            tmp = k2;
          }
        });
        this.area = tmp;
        this.areas = areas[this.province][this.city];
        this.valueArr.splice(2, 1, this.area);
      },
      close() {
        this.$emit("input", false);
        this.$emit("update:modelValue", false);
      },
      change(e) {
        this.valueArr = e.detail.value;
        let i2 = 0;
        if (this.mode == "time") {
          if (this.params.year)
            this.year = this.years[this.valueArr[i2++]];
          if (this.params.month)
            this.month = this.months[this.valueArr[i2++]];
          if (this.params.day)
            this.day = this.days[this.valueArr[i2++]];
          if (this.params.hour)
            this.hour = this.hours[this.valueArr[i2++]];
          if (this.params.minute)
            this.minute = this.minutes[this.valueArr[i2++]];
          if (this.params.second)
            this.second = this.seconds[this.valueArr[i2++]];
        } else if (this.mode == "region") {
          if (this.params.province)
            this.province = this.valueArr[i2++];
          if (this.params.city)
            this.city = this.valueArr[i2++];
          if (this.params.area)
            this.area = this.valueArr[i2++];
        } else if (this.mode == "multiSelector") {
          let index = null;
          this.defaultSelector.map((val, idx) => {
            if (val != e.detail.value[idx])
              index = idx;
          });
          if (index != null) {
            this.$emit("columnchange", {
              column: index,
              index: e.detail.value[index]
            });
          }
        }
      },
      getResult(event = null) {
        let result = {};
        if (this.mode == "time") {
          if (this.params.year)
            result.year = this.formatNumber(this.year || 0);
          if (this.params.month)
            result.month = this.formatNumber(this.month || 0);
          if (this.params.day)
            result.day = this.formatNumber(this.day || 0);
          if (this.params.hour)
            result.hour = this.formatNumber(this.hour || 0);
          if (this.params.minute)
            result.minute = this.formatNumber(this.minute || 0);
          if (this.params.second)
            result.second = this.formatNumber(this.second || 0);
          if (this.params.timestamp)
            result.timestamp = this.getTimestamp();
        } else if (this.mode == "region") {
          if (this.params.province)
            result.province = provinces[this.province];
          if (this.params.city)
            result.city = citys[this.province][this.city];
          if (this.params.area)
            result.area = areas[this.province][this.city][this.area];
        } else if (this.mode == "selector") {
          result = this.valueArr;
        } else if (this.mode == "multiSelector") {
          result = this.valueArr;
        }
        if (event)
          this.$emit(event, result);
        this.close();
      },
      getTimestamp() {
        let time = this.year + "/" + this.month + "/" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
        return new Date(time).getTime() / 1e3;
      },
      getDateSource() {
        return {
          provinces,
          citys,
          areas
        };
      },
      regionDiscern(addressText) {
        let address = "";
        let province = {};
        let city = {};
        let area = {};
        if (!addressText)
          return { code: -1, msg: "\u5730\u5740\u6587\u672C\u4E0D\u80FD\u4E3A\u7A7A" };
        addressText.trim();
        let firstTwoKey = addressText.substring(0, 2);
        let provinceIndex = -1;
        for (let i2 = 0; i2 < provinces.length; i2++) {
          let { code: code2, name } = provinces[i2];
          if (name.indexOf(firstTwoKey) == 0) {
            province = { code: code2, name };
            provinceIndex = i2;
            break;
          }
        }
        if (provinceIndex == -1)
          return { code: -1, msg: `\u7701\u4EFD\u3010${firstTwoKey}\u3011\u6CA1\u6709\u627E\u5230\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5730\u5740` };
        let citysArr = citys[provinceIndex];
        let cityIndex = -1;
        for (let i2 = 0; i2 < citysArr.length; i2++) {
          let { name, code: code2 } = citysArr[i2];
          let cityName = name.substr(0, name.length - 1);
          if (addressText.indexOf(cityName) > -1) {
            city = { code: code2, name };
            cityIndex = i2;
            break;
          }
        }
        if (cityIndex == -1)
          return { code: -1, msg: `\u5730\u7EA7\u5E02\u6CA1\u6709\u627E\u5230\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5730\u5740` };
        let areasArr = areas[provinceIndex][cityIndex];
        let areaIndex = -1;
        for (let i2 = 0; i2 < areasArr.length; i2++) {
          let { code: code2, name } = areasArr[i2];
          let reg = name;
          if (name.length > 2)
            reg += `|${name.substr(0, name.length - 1)}`;
          let areaRegExp = new RegExp(reg);
          if (addressText.search(areaRegExp) > -1) {
            area = { code: code2, name };
            address = addressText.replace(new RegExp(reg), "{{~}}").split("{{~}}")[1];
            areaIndex = i2;
            break;
          }
        }
        if (areaIndex == -1)
          return { code: -1, msg: "\u53BF\u7EA7\u5E02\u6CA1\u6709\u627E\u5230\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5730\u5740" };
        let formatted_address = `${province.name}${city.name}${area.name}${address}`;
        let res = {
          code: 0,
          msg: "ok",
          data: {
            province,
            city,
            area,
            address,
            formatted_address
          }
        };
        return res;
      },
      addressDiscern(text) {
        let name = "";
        let mobile2 = "";
        if (!text)
          return { code: -1, msg: "\u5730\u5740\u6587\u672C\u4E0D\u80FD\u4E3A\u7A7A" };
        let textArr = text.split(/[^\u4e00-\u9fa5a-zA-Z0-9+-（）()]+/g).filter((v2) => v2.length);
        if (textArr.length != 3)
          return { code: -1, msg: "\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6309\u59D3\u540D \u624B\u673A\u53F7 \u6536\u8D27\u5730\u5740\u683C\u5F0F\u3002" };
        let temp;
        let addressText;
        for (let [k2, v2] of textArr.entries()) {
          if (/^1[3,4,5,6,7,8,9][0-9]{9}$/.test(v2)) {
            mobile2 = v2;
            continue;
          }
          if (!temp) {
            temp = v2;
            continue;
          }
          temp.length > v2.length ? (addressText = temp, name = v2) : (addressText = v2, name = temp);
        }
        let positionRes = this.regionDiscern(addressText);
        if (positionRes.code !== 0)
          return positionRes;
        let res = {
          code: 0,
          msg: "ok",
          data: {
            name,
            mobile: mobile2,
            position: positionRes.data
          }
        };
        return res;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_0);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      maskCloseAble: $props.maskCloseAble,
      mode: "bottom",
      popup: false,
      modelValue: $data.popupValue,
      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.popupValue = $event),
      length: "auto",
      safeAreaInsetBottom: $props.safeAreaInsetBottom,
      onClose: $options.close,
      "z-index": $options.uZIndex,
      blur: $props.blur
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-datetime-picker" }, [
          vue.createElementVNode("view", {
            class: "u-picker-header",
            onTouchmove: _cache[3] || (_cache[3] = vue.withModifiers(() => {
            }, ["stop", "prevent"]))
          }, [
            vue.createElementVNode("view", {
              class: "u-btn-picker u-btn-picker--tips",
              style: vue.normalizeStyle({ color: $props.cancelColor }),
              "hover-class": "u-opacity",
              "hover-stay-time": 150,
              onClick: _cache[0] || (_cache[0] = ($event) => $options.getResult("cancel"))
            }, vue.toDisplayString($props.cancelText), 5),
            vue.createElementVNode("view", { class: "u-picker__title" }, vue.toDisplayString($props.title), 1),
            vue.createElementVNode("view", {
              class: "u-btn-picker u-btn-picker--primary",
              style: vue.normalizeStyle({ color: $data.moving ? $props.cancelColor : $props.confirmColor }),
              "hover-class": "u-opacity",
              "hover-stay-time": 150,
              onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => $options.getResult("confirm"), ["stop"]))
            }, vue.toDisplayString($props.confirmText), 37)
          ], 32),
          vue.createElementVNode("view", { class: "u-picker-body" }, [
            $props.mode == "region" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 0,
              value: $data.valueArr,
              onChange: _cache[4] || (_cache[4] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[5] || (_cache[5] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[6] || (_cache[6] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              !$data.reset && $props.params.province ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.provinces, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "u-line-1" }, vue.toDisplayString(item.name), 1)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.city ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 1 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.citys, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "u-line-1" }, vue.toDisplayString(item.name), 1)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.area ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 2 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.areas, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "u-line-1" }, vue.toDisplayString(item.name), 1)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "time" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 1,
              value: $data.valueArr,
              onChange: _cache[7] || (_cache[7] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[8] || (_cache[8] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[9] || (_cache[9] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              !$data.reset && $props.params.year ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.years, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString(item) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u5E74")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.month ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 1 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.months, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString($options.formatNumber(item)) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u6708")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.day ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 2 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.days, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString($options.formatNumber(item)) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u65E5")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.hour ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 3 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.hours, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString($options.formatNumber(item)) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u65F6")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.minute ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 4 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.minutes, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString($options.formatNumber(item)) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u5206")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true),
              !$data.reset && $props.params.second ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 5 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.seconds, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createTextVNode(vue.toDisplayString($options.formatNumber(item)) + " ", 1),
                    $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-text"
                    }, "\u79D2")) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "selector" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 2,
              value: $data.valueArr,
              onChange: _cache[10] || (_cache[10] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[11] || (_cache[11] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[12] || (_cache[12] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              !$data.reset ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.range, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-column-item",
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "u-line-1" }, vue.toDisplayString($options.getItemValue(item, "selector")), 1)
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "multiSelector" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 3,
              value: $data.valueArr,
              onChange: _cache[13] || (_cache[13] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[14] || (_cache[14] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[15] || (_cache[15] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              !$data.reset ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.range, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("picker-view-column", { key: index }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (item1, index1) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index1
                    }, [
                      vue.createElementVNode("view", { class: "u-line-1" }, vue.toDisplayString($options.getItemValue(item1, "multiSelector")), 1)
                    ]);
                  }), 128))
                ]);
              }), 128)) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ]),
      _: 1
    }, 8, ["maskCloseAble", "modelValue", "safeAreaInsetBottom", "onClose", "z-index", "blur"]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-f73740ea"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/uni_modules/vk-uview-ui/components/u-picker/u-picker.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        list: [
          {
            iconPath: "home",
            selectedIconPath: "home-fill",
            text: "\u9996\u9875",
            count: 2,
            isDot: true,
            customIcon: false
          },
          {
            iconPath: "photo",
            selectedIconPath: "photo-fill",
            text: "\u653E\u6620\u5385",
            customIcon: false
          },
          {
            iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
            selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
            text: "\u53D1\u5E03",
            midButton: true,
            customIcon: false
          },
          {
            iconPath: "play-right",
            selectedIconPath: "play-right-fill",
            text: "\u76F4\u64AD",
            customIcon: false
          },
          {
            iconPath: "account",
            selectedIconPath: "account-fill",
            text: "\u6211\u7684",
            count: 23,
            isDot: false,
            customIcon: false
          }
        ],
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        columns: ["\u2585\u2585\u3000\u2585\u2585\u3000\u5C11\u9634", "\u2585\u2585\u2585\u2585\u2585\u3000\u3000\u5C11\u9633", "\u2585\u2585\u3000\u2585\u2585 \u2169\u8001\u9634", "\u2585\u2585\u2585\u2585\u2585 \u3007 \u8001\u9633"],
        current: 0,
        yaoName1: "\u8BF7\u9009\u62E9",
        yaoName2: "\u8BF7\u9009\u62E9",
        yaoName3: "\u8BF7\u9009\u62E9",
        yaoName4: "\u8BF7\u9009\u62E9",
        yaoName5: "\u8BF7\u9009\u62E9",
        yaoName6: "\u8BF7\u9009\u62E9",
        defaultSelector1: [-1],
        defaultSelector2: [0],
        defaultSelector3: [0],
        defaultSelector4: [0],
        defaultSelector5: [0],
        defaultSelector6: [0],
        type: "text"
      };
    },
    methods: {
      confirm1(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName1 = this.columns[index];
        this.defaultSelector1[0] = index;
      },
      confirm2(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName2 = this.columns[index];
        this.defaultSelector2[0] = index;
      },
      confirm3(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName3 = this.columns[index];
        this.defaultSelector3[0] = index;
      },
      confirm4(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName4 = this.columns[index];
        this.defaultSelector4[0] = index;
      },
      confirm5(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName5 = this.columns[index];
        this.defaultSelector5[0] = index;
      },
      confirm6(index) {
        this.$u.toast(this.columns[index]);
        this.yaoName6 = this.columns[index];
        this.defaultSelector5[0] = index;
      },
      columnchange(e) {
        formatAppLog("log", "at pages/root/root.vue:164", e);
        e.column;
        e.index;
        this.$u.toast("11");
      },
      btnClick(name) {
        formatAppLog("log", "at pages/root/root.vue:169", name);
        this.$u.toast(name);
      },
      btnStart() {
        if (this.defaultSelector1 < 0 || this.defaultSelector2 < 0 || this.defaultSelector3 < 0 || this.defaultSelector4 < 0 || this.defaultSelector5 < 0 || this.defaultSelector6 < 0) {
          this.$u.toast("\u60A8\u6CA1\u6709\u5B8C\u6210\u624B\u5DE5\u6307\u5B9A");
          return;
        }
        this.$u.toast(this.defaultSelector2);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_section = resolveEasycom(vue.resolveDynamicComponent("u-section"), __easycom_0$2);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$1);
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_0$3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_3$1);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_4);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "u-demo" }, [
        vue.createVNode(_component_u_section, {
          title: "\u5360\u4E8B\u6807\u9898",
          right: false
        }),
        vue.createVNode(_component_u_input, {
          type: $data.type,
          border: true,
          class: "u-config-item",
          placeholder: "\u8BF7\u8F93\u5165\u60A8\u6240\u6D4B\u4F55\u4E8B"
        }, null, 8, ["type"]),
        vue.createVNode(_component_u_section, {
          title: "\u624B\u5F0F\u6307\u5B9A",
          right: false,
          class: "u-config-item"
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u516D\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[0] || (_cache[0] = ($event) => $data.show6 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName6), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show6,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.show6 = $event),
                  "default-selector": $data.defaultSelector6,
                  range: $data.columns,
                  onConfirm: $options.confirm6
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u4E94\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[2] || (_cache[2] = ($event) => $data.show5 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName5), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show5,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.show5 = $event),
                  "default-selector": $data.defaultSelector5,
                  range: $data.columns,
                  onConfirm: $options.confirm5
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u56DB\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[4] || (_cache[4] = ($event) => $data.show4 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName4), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show4,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.show4 = $event),
                  "default-selector": $data.defaultSelector4,
                  range: $data.columns,
                  onConfirm: $options.confirm4
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u4E09\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[6] || (_cache[6] = ($event) => $data.show3 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName3), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show3,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.show3 = $event),
                  "default-selector": $data.defaultSelector3,
                  range: $data.columns,
                  onConfirm: $options.confirm3
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u4E8C\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[8] || (_cache[8] = ($event) => $data.show2 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName2), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show2,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.show2 = $event),
                  "default-selector": $data.defaultSelector2,
                  range: $data.columns,
                  onConfirm: $options.confirm2
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_row, {
          gutter: "16",
          class: "u-config-item"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "2" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "demo-layout bg-purple" }, "\u521D\u723B")
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_col, { span: "4" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  onClick: _cache[10] || (_cache[10] = ($event) => $data.show1 = true),
                  border: "false",
                  class: "button"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString($data.yaoName1), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_picker, {
                  mode: "selector",
                  modelValue: $data.show1,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.show1 = $event),
                  "default-selector": $data.defaultSelector1,
                  range: $data.columns,
                  onConfirm: $options.confirm1
                }, null, 8, ["modelValue", "default-selector", "range", "onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_button, {
          ripple: true,
          "ripple-bg-color": "#909399",
          class: "u-config-item",
          onClick: $options.btnStart
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u5F00\u59CB")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      vue.createCommentVNode(" \u4E0E\u5305\u88F9\u9875\u9762\u6240\u6709\u5185\u5BB9\u7684\u5143\u7D20u-page\u540C\u7EA7\uFF0C\u4E14\u5728\u5B83\u7684\u4E0B\u65B9 "),
      vue.createCommentVNode(' <u-tabbar v-model="current" :list="list" :mid-button="false"></u-tabbar> ')
    ]);
  }
  var PagesRootRoot = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/pages/root/root.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_0$3);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrap" }, [
      vue.createVNode(_component_u_row, { gutter: "12" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_col, { span: "1" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "demo-layout bg-purple" })
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "3" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "demo-layout bg-purple-light" })
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "5" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "demo-layout bg-purple-dark" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      vue.createVNode(_component_u_row, {
        gutter: "16",
        justify: "space-between"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_col, { span: "1" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "demo-layout bg-purple" })
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_col, { span: "3" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "demo-layout bg-purple-light" })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]);
  }
  var PagesAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-92c79dbc"], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/pages/about/about.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        seen: false
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.seen ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "\u73B0\u5728\u4F60\u770B\u5230\u6211\u4E86")) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, "\u4F60\u770B\u4E0D\u5230\u6211\u4E86"))
    ]);
  }
  var PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/pages/Login/Login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/root/root", PagesRootRoot);
  __definePage("pages/about/about", PagesAboutAbout);
  __definePage("pages/Login/Login", PagesLoginLogin);
  const _sfc_main = {
    globalData: {},
    onLaunch: function() {
      formatAppLog("log", "at App.vue:7", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:11", "App Show");
      formatAppLog("log", "at App.vue:12", uni.$u.config.v);
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:22", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/company/workspace/my/EsotericNumbers/VueApp/App.vue"]]);
  var mixin = {
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    methods: {
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = false;
        this.parent = this.$u.$parent.call(this, parentName);
        if (this.parent) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
          this.parentData.value = this.parent.modelValue;
        }
      },
      preventEvent(e) {
        e && e.stopPropagation && e.stopPropagation();
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index) => {
          if (child === this) {
            childrenList.splice(index, 1);
          }
        });
      }
    }
  };
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    var o2 = isArray(obj) ? [] : {};
    for (let i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        o2[i2] = typeof obj[i2] === "object" ? deepClone(obj[i2]) : obj[i2];
      }
    }
    return o2;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (var prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else {
          if (typeof source[prop] !== "object") {
            target[prop] = source[prop];
          } else {
            if (target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = deepMerge(target[prop], source[prop]);
            }
          }
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
  }
  function date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    } else if (value.length === 8) {
      return xreg.test(value);
    } else {
      return false;
    }
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    let reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    let reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (var i2 in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value == "string") {
      try {
        var obj = JSON.parse(value);
        if (typeof obj == "object" && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code
  };
  class Request {
    setConfig(customConfig) {
      this.config = deepMerge(this.config, customConfig);
    }
    request(options = {}) {
      if (this.interceptor.request && typeof this.interceptor.request === "function") {
        let interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          return new Promise(() => {
          });
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || "";
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise((resolve, reject) => {
        options.complete = (response) => {
          uni.hideLoading();
          clearTimeout(this.config.timer);
          this.config.timer = null;
          if (this.config.originalData) {
            if (this.interceptor.response && typeof this.interceptor.response === "function") {
              let resInterceptors = this.interceptor.response(response);
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                reject(response);
              }
            } else {
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (this.interceptor.response && typeof this.interceptor.response === "function") {
                let resInterceptors = this.interceptor.response(response.data);
                if (resInterceptors !== false) {
                  resolve(resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                resolve(response.data);
              }
            } else {
              reject(response);
            }
          }
        };
        options.url = test.url(options.url) ? options.url : this.config.baseUrl + (options.url.indexOf("/") == 0 ? options.url : "/" + options.url);
        if (this.config.showLoading && !this.config.timer) {
          this.config.timer = setTimeout(() => {
            uni.showLoading({
              title: this.config.loadingText,
              mask: this.config.loadingMask
            });
            this.config.timer = null;
          }, this.config.loadingTime);
        }
        uni.request(options);
      });
    }
    constructor() {
      this.config = {
        baseUrl: "",
        header: {},
        method: "POST",
        dataType: "json",
        responseType: "text",
        showLoading: true,
        loadingText: "\u8BF7\u6C42\u4E2D...",
        loadingTime: 800,
        timer: null,
        originalData: false,
        loadingMask: true
      };
      this.interceptor = {
        request: null,
        response: null
      };
      this.get = (url2, data2 = {}, header = {}) => {
        return this.request({
          method: "GET",
          url: url2,
          header,
          data: data2
        });
      };
      this.post = (url2, data2 = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "POST",
          header,
          data: data2
        });
      };
      this.put = (url2, data2 = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "PUT",
          header,
          data: data2
        });
      };
      this.delete = (url2, data2 = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "DELETE",
          header,
          data: data2
        });
      };
    }
  }
  var http = new Request();
  function queryParams(data2 = {}, isPrefix = true, arrayFormat = "brackets") {
    let prefix = isPrefix ? "?" : "";
    let _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (let key in data2) {
      let value = data2[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value.length; i2++) {
              _result.push(key + "[" + i2 + "]=" + value[i2]);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(key + "=" + _value);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(key + "=" + commaStr);
            break;
          default:
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
        }
      } else {
        _result.push(key + "=" + value);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += "&" + query;
      } else {
        query = uni.$u.queryParams(params);
        return url2 += query;
      }
    }
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = uni.$u.deepClone(options, this.config);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]")
        throw new TypeError("fillString must be String");
      let str = this;
      if (str.length >= maxLength)
        return String(str);
      let fillLength = maxLength - str.length, times = Math.ceil(fillLength / fillString.length);
      while (times >>= 1) {
        fillString += fillString;
        if (times === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, fmt = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let date2 = new Date(dateTime);
    let ret;
    let opt = {
      "y+": date2.getFullYear().toString(),
      "m+": (date2.getMonth() + 1).toString(),
      "d+": date2.getDate().toString(),
      "h+": date2.getHours().toString(),
      "M+": date2.getMinutes().toString(),
      "s+": date2.getSeconds().toString()
    };
    for (let k2 in opt) {
      ret = new RegExp("(" + k2 + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k2] : opt[k2].padStart(ret[1].length, "0"));
      }
    }
    return fmt;
  }
  function timeFrom(dateTime = null, format = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let timestamp = +new Date(Number(dateTime));
    let timer = (Number(new Date()) - timestamp) / 1e3;
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = parseInt(timer / 60) + "\u5206\u949F\u524D";
        break;
      case (timer >= 3600 && timer < 86400):
        tips = parseInt(timer / 3600) + "\u5C0F\u65F6\u524D";
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = parseInt(timer / 86400) + "\u5929\u524D";
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = parseInt(timer / (86400 * 30)) + "\u4E2A\u6708\u524D";
          } else {
            tips = parseInt(timer / (86400 * 365)) + "\u5E74\u524D";
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    let startRGB = hexToRgb(startColor, false);
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
    let endRGB = hexToRgb(endColor, false);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
    let sR = (endR - startR) / step;
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;
    let colorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      let hex = rgbToHex("rgb(" + Math.round(sR * i2 + startR) + "," + Math.round(sG * i2 + startG) + "," + Math.round(sB * i2 + startB) + ")");
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      let sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i2, i2 + 2)));
      }
      if (!str) {
        return sColorChange;
      } else {
        return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
      }
    } else if (/^(rgb|RGB)/.test(sColor)) {
      let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    } else {
      return sColor;
    }
  }
  function rgbToHex(rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i2 = 0; i2 < aColor.length; i2++) {
        let hex = Number(aColor[i2]).toString(16);
        hex = String(hex).length == 1 ? 0 + "" + hex : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = "#";
        for (let i2 = 0; i2 < aNum.length; i2 += 1) {
          numHex += aNum[i2] + aNum[i2];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha = 0.3) {
    color2 = rgbToHex(color2);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color2.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      var sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i2, i2 + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
    } else {
      return sColor;
    }
  }
  var colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function guid(len = 32, firstU = true, radix = null) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i2 = 0; i2 < len; i2++)
        uuid[i2] = chars[0 | Math.random() * radix];
    } else {
      let r2;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i2 = 0; i2 < 36; i2++) {
        if (!uuid[i2]) {
          r2 = 0 | Math.random() * 16;
          uuid[i2] = chars[i2 == 19 ? r2 & 3 | 8 : r2];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return "u" + uuid.join("");
    } else {
      return uuid.join("");
    }
  }
  let color = {
    primary: "#2979ff",
    primaryDark: "#2b85e4",
    primaryDisabled: "#a0cfff",
    primaryLight: "#ecf5ff",
    bgColor: "#f3f4f6",
    info: "#909399",
    infoDark: "#82848a",
    infoDisabled: "#c8c9cc",
    infoLight: "#f4f4f5",
    warning: "#ff9900",
    warningDark: "#f29100",
    warningDisabled: "#fcbd71",
    warningLight: "#fdf6ec",
    error: "#fa3534",
    errorDark: "#dd6161",
    errorDisabled: "#fab6b6",
    errorLight: "#fef0f0",
    success: "#19be6b",
    successDark: "#18b566",
    successDisabled: "#71d5a1",
    successLight: "#dbf1e1",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  function addUnit(value = "auto", unit = "rpx") {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      let gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    } else {
      return 0;
    }
  }
  function trim(str, pos = "both") {
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return str.replace(/^\s*/, "");
    } else if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    } else if (pos == "all") {
      return str.replace(/\s+/g, "");
    } else {
      return str;
    }
  }
  function toast(title, duration = 1500) {
    uni.showToast({
      title,
      icon: "none",
      duration
    });
  }
  function getParent(name, keys) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        let data2 = {};
        if (Array.isArray(keys)) {
          keys.map((val) => {
            data2[val] = parent[val] ? parent[val] : "";
          });
        } else {
          for (let i2 in keys) {
            if (Array.isArray(keys[i2])) {
              if (keys[i2].length) {
                data2[i2] = keys[i2];
              } else {
                data2[i2] = parent[i2];
              }
            } else if (keys[i2].constructor === Object) {
              if (Object.keys(keys[i2]).length) {
                data2[i2] = keys[i2];
              } else {
                data2[i2] = parent[i2];
              }
            } else {
              data2[i2] = keys[i2] || keys[i2] === false ? keys[i2] : parent[i2];
            }
          }
        }
        return data2;
      }
    }
    return {};
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function os() {
    return uni.getSystemInfoSync().platform;
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  let timeout = null;
  function debounce(func, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func === "function" && func();
    } else {
      timeout = setTimeout(function() {
        typeof func === "function" && func();
      }, wait);
    }
  }
  let timeoutArr = [];
  let flagArr = [];
  function throttle(fn2, time = 500, isImmediate = true, timeoutName = "default") {
    if (!timeoutArr[timeoutName])
      timeoutArr[timeoutName] = null;
    if (isImmediate) {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        if (typeof fn2 === "function")
          fn2();
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
        }, time);
      }
    } else {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
          if (typeof fn2 === "function")
            fn2();
        }, time);
      }
    }
  }
  let version = "1.10.1";
  var config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ]
  };
  var zIndex = {
    toast: 10090,
    noNetwork: 10080,
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  function wranning(str) {
    {
      formatAppLog("warn", "at uni_modules/vk-uview-ui/index.js:13", str);
    }
  }
  const $u = {
    queryParams,
    route,
    timeFormat,
    date: timeFormat,
    timeFrom,
    colorGradient: colorGradient$1.colorGradient,
    colorToRgba: colorGradient$1.colorToRgba,
    guid,
    color,
    sys,
    os,
    type2icon,
    randomArray,
    wranning,
    get: http.get,
    post: http.post,
    put: http.put,
    "delete": http.delete,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    test,
    random,
    deepClone,
    deepMerge,
    getParent,
    $parent,
    addUnit,
    trim,
    type: ["primary", "success", "error", "warning", "info"],
    http,
    toast,
    config,
    zIndex,
    debounce,
    throttle
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.mixin(mixin);
    Vue2.config.globalProperties.$u = $u;
  };
  var uView = {
    install
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(uView);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
