! function(t) {
    function e(e) {
        for (var n, o, r = e[0], a = e[1], s = 0, c = []; s < r.length; s++) o = r[s], Object.prototype.hasOwnProperty.call(i, o) && i[o] && c.push(i[o][0]), i[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (l && l(e); c.length;) c.shift()()
    }
    var n = {},
        i = {
            1: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise((function(e, o) {
                    n = i[t] = [e, o]
                }));
                e.push(n[2] = r);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function(t) {
                    return function(t) {
                        return o.p + "chunk." + ({
                            0: "countup",
                            2: "sticky-sidebar",
                            3: "tooltips",
                            4: "vendors-popups",
                            5: "vendors-slider"
                        }[t] || t) + ".js"
                    }(t) + (window.flatsomeVars ? "?ver=" + window.flatsomeVars.theme.version : "")
                }(t);
                var l = new Error;
                a = function(e) {
                    s.onerror = s.onload = null, clearTimeout(c);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")", l.name = "ChunkLoadError", l.type = o, l.request = r, n[1](l)
                        }
                        i[t] = void 0
                    }
                };
                var c = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var r = window.flatsomeJsonp = window.flatsomeJsonp || [],
        a = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var l = a;
    o(o.s = 9)
}([function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    })), n.d(e, "b", (function() {
        return l
    })), n.d(e, "c", (function() {
        return c
    }));
    const i = document.body,
        o = "body-scroll-lock--active",
        r = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    let a = 0;

    function s() {
        if (!r) return;
        a = window.pageYOffset;
        const t = document.getElementById("wpadminbar"),
            e = a - (t ? t.offsetHeight : 0);
        i.style.overflow = "hidden", i.style.position = "fixed", i.style.top = "-".concat(e, "px"), i.style.width = "100%", i.classList.add(o)
    }

    function l() {
        r && (i.style.removeProperty("overflow"), i.style.removeProperty("position"), i.style.removeProperty("top"), i.style.removeProperty("width"), window.scrollTo(0, a), i.classList.remove(o))
    }

    function c() {
        return i.classList.contains(o)
    }
}, function(t, e, n) {
    "use strict";
    var i;
    n.d(e, "a", (function() {
        return r
    }));
    const o = window.matchMedia("(prefers-reduced-motion: reduce)");
    let r = !1;

    function a() {
        r = "undefined" == typeof UxBuilder && o.matches
    }
    a(), null === (i = o.addEventListener) || void 0 === i || i.call(o, "change", a)
}, function(t, e, n) {
    "use strict";

    function i() {
        return jQuery.fn.magnificPopup ? Promise.resolve() : n.e(4).then(n.t.bind(null, 8, 7))
    }
    n.d(e, "a", (function() {
        return i
    })), jQuery.loadMagnificPopup = i, jQuery.fn.lazyMagnificPopup = function(t) {
        const e = jQuery(this),
            n = t.delegate ? e.find(t.delegate) : e;
        return n.one("click", o => {
            o.preventDefault(), i().then(() => {
                e.data("magnificPopup") || e.magnificPopup(t), e.magnificPopup("open", n.index(o.currentTarget) || 0)
            })
        }), e
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return new IntersectionObserver((function(e) {
            for (let n = 0; n < e.length; n++) t(e[n])
        }), {
            rootMargin: "0px",
            threshold: .1
        })
    }

    function o(t) {
        if ("ResizeObserver" in window) return new ResizeObserver((function(e) {
            for (let n = 0; n < e.length; n++) t(e[n])
        }))
    }
    n.d(e, "a", (function() {
        return i
    })), n.d(e, "b", (function() {
        return o
    }))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    t.exports = window.jQuery
}, function(t, e, n) {
    n.p = window.flatsomeVars ? window.flatsomeVars.assets_url : "/"
}, function(t, e, n) {
    (function(e) {
        var n;
        n = void 0 !== e ? e : this, t.exports = function(t, e, i) {
            if (void 0 === e) {
                var o = ("; " + n.document.cookie).split("; " + t + "=");
                return 2 === o.length ? o.pop().split(";").shift() : null
            }!1 === e && (i = -1);
            var r = "";
            if (i) {
                var a = new Date;
                a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3), r = "; expires=" + a.toGMTString()
            }
            n.document.cookie = t + "=" + e + r + "; path=/"
        }
    }).call(this, n(4))
}, , function(t, e, n) {
    n(6), t.exports = n(10)
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var e = n(7),
                i = n.n(e);
            n(11), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(2), n(22), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44), n(45), n(46), n(53);
            for (const t of ["touchstart", "touchmove"]) jQuery.event.special[t] = {
                setup(e, n, i) {
                    this.addEventListener(t, i, {
                        passive: !n.includes("noPreventDefault")
                    })
                }
            };
            for (const t of ["wheel", "mousewheel"]) jQuery.event.special[t] = {
                setup(e, n, i) {
                    this.addEventListener(t, i, {
                        passive: !0
                    })
                }
            };
            jQuery(() => t.Flatsome.attach(document)), t.cookie = i.a
        }.call(this, n(4))
}, function(t, e, n) {
    var i, o;
    ! function(r, a) {
        "use strict";
        i = [n(12)], void 0 === (o = function(t) {
            return function(t, e) {
                var n = t.jQuery,
                    i = t.console;

                function o(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                }
                var r = Array.prototype.slice;

                function a(t, e, s) {
                    if (!(this instanceof a)) return new a(t, e, s);
                    var l, c = t;
                    "string" == typeof t && (c = document.querySelectorAll(t)), c ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof e ? s = e : o(this.options, e), s && this.on("always", s), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || t))
                }
                a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                    this.images = [], this.elements.forEach(this.addElementImages, this)
                }, a.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && s[e]) {
                        for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                            var o = n[i];
                            this.addImage(o)
                        }
                        if ("string" == typeof this.options.background) {
                            var r = t.querySelectorAll(this.options.background);
                            for (i = 0; i < r.length; i++) {
                                var a = r[i];
                                this.addElementBackgroundImages(a)
                            }
                        }
                    }
                };
                var s = {
                    1: !0,
                    9: !0,
                    11: !0
                };

                function l(t) {
                    this.img = t
                }

                function c(t, e) {
                    this.url = t, this.element = e, this.img = new Image
                }
                return a.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                            var o = i && i[2];
                            o && this.addBackground(o, t), i = n.exec(e.backgroundImage)
                        }
                }, a.prototype.addImage = function(t) {
                    var e = new l(t);
                    this.images.push(e)
                }, a.prototype.addBackground = function(t, e) {
                    var n = new c(t, e);
                    this.images.push(n)
                }, a.prototype.check = function() {
                    var t = this;

                    function e(e, n, i) {
                        setTimeout((function() {
                            t.progress(e, n, i)
                        }))
                    }
                    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                        t.once("progress", e), t.check()
                    })) : this.complete()
                }, a.prototype.progress = function(t, e, n) {
                    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, t, e)
                }, a.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
                    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                }, l.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }, l.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                }, l.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, l.prototype.onload = function() {
                    this.confirm(!0, "onload"), this.unbindEvents()
                }, l.prototype.onerror = function() {
                    this.confirm(!1, "onerror"), this.unbindEvents()
                }, l.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, c.prototype = Object.create(l.prototype), c.prototype.check = function() {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                }, c.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, c.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                }, a.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function(t, e) {
                        return new a(this, t, e).jqDeferred.promise(n(this))
                    })
                }, a.makeJQueryPlugin(), a
            }(r, t)
        }.apply(e, i)) || (t.exports = o)
    }("undefined" != typeof window ? window : this)
}, function(t, e, n) {
    var i, o;
    "undefined" != typeof window && window, void 0 === (o = "function" == typeof(i = function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
                    var r = n[o];
                    i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }) ? i.call(e, n, e, t) : i) || (t.exports = o)
}, function(t, e) {
    ! function() {
        var t = window.MutationObserver || window.WebKitMutationObserver,
            e = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        if (void 0 === document.documentElement.style["touch-action"] && !document.documentElement.style["-ms-touch-action"] && e && t) {
            window.Hammer = window.Hammer || {};
            var n = /touch-action[:][\s]*(none)[^;'"]*/,
                i = /touch-action[:][\s]*(manipulation)[^;'"]*/,
                o = /touch-action/,
                r = /(iP(ad|hone|od))/.test(navigator.userAgent) && ("indexedDB" in window || !!window.performance);
            window.Hammer.time = {
                getTouchAction: function(t) {
                    return this.checkStyleString(t.getAttribute("style"))
                },
                checkStyleString: function(t) {
                    if (o.test(t)) return n.test(t) ? "none" : !i.test(t) || "manipulation"
                },
                shouldHammer: function(t) {
                    var e = t.target.hasParent;
                    return !(!e || r && !(Date.now() - t.target.lastStart < 125)) && e
                },
                touchHandler: function(t) {
                    var e = this.shouldHammer(t);
                    if ("none" === e) this.dropHammer(t);
                    else if ("manipulation" === e) {
                        var n = t.target.getBoundingClientRect();
                        n.top === this.pos.top && n.left === this.pos.left && this.dropHammer(t)
                    }
                    this.scrolled = !1, delete t.target.lastStart, delete t.target.hasParent
                },
                dropHammer: function(t) {
                    "touchend" === t.type && (t.target.focus(), setTimeout((function() {
                        t.target.click()
                    }), 0)), t.preventDefault()
                },
                touchStart: function(t) {
                    this.pos = t.target.getBoundingClientRect(), t.target.hasParent = this.hasParent(t.target), r && t.target.hasParent && (t.target.lastStart = Date.now())
                },
                styleWatcher: function(t) {
                    t.forEach(this.styleUpdater, this)
                },
                styleUpdater: function(t) {
                    if (t.target.updateNext) t.target.updateNext = !1;
                    else {
                        var e = this.getTouchAction(t.target);
                        e ? "none" !== e && (t.target.hadTouchNone = !1) : !e && (t.oldValue && this.checkStyleString(t.oldValue) || t.target.hadTouchNone) && (t.target.hadTouchNone = !0, t.target.updateNext = !1, t.target.setAttribute("style", t.target.getAttribute("style") + " touch-action: none;"))
                    }
                },
                hasParent: function(t) {
                    for (var e, n = t; n && n.parentNode; n = n.parentNode)
                        if (e = this.getTouchAction(n)) return e;
                    return !1
                },
                installStartEvents: function() {
                    document.addEventListener("touchstart", this.touchStart.bind(this)), document.addEventListener("mousedown", this.touchStart.bind(this))
                },
                installEndEvents: function() {
                    document.addEventListener("touchend", this.touchHandler.bind(this), !0), document.addEventListener("mouseup", this.touchHandler.bind(this), !0)
                },
                installObserver: function() {
                    this.observer = new t(this.styleWatcher.bind(this)).observe(document, {
                        subtree: !0,
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: ["style"]
                    })
                },
                install: function() {
                    this.installEndEvents(), this.installStartEvents(), this.installObserver()
                }
            }, window.Hammer.time.install()
        }
    }()
}, function(t, e, n) {
    var i, o, r;
    ! function(a) {
        "use strict";
        o = [n(5)], void 0 === (r = "function" == typeof(i = function(t) {
            var e = t.scrollTo = function(e, n, i) {
                return t(window).scrollTo(e, n, i)
            };

            function n(e) {
                return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
            }

            function i(t) {
                return "function" == typeof t
            }

            function o(e) {
                return i(e) || t.isPlainObject(e) ? e : {
                    top: e,
                    left: e
                }
            }
            return e.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, t.fn.scrollTo = function(r, a, s) {
                "object" == typeof a && (s = a, a = 0), "function" == typeof s && (s = {
                    onAfter: s
                }), "max" === r && (r = 9e9), s = t.extend({}, e.defaults, s), a = a || s.duration;
                var l = s.queue && s.axis.length > 1;
                return l && (a /= 2), s.offset = o(s.offset), s.over = o(s.over), this.each((function() {
                    if (null !== r) {
                        var c, u = n(this),
                            d = u ? this.contentWindow || window : this,
                            h = t(d),
                            f = r,
                            p = {};
                        switch (typeof f) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                    f = o(f);
                                    break
                                }
                                f = u ? t(f) : t(f, d);
                            case "object":
                                if (0 === f.length) return;
                                (f.is || f.style) && (c = (f = t(f)).offset())
                        }
                        var y = i(s.offset) && s.offset(d, f) || s.offset;
                        t.each(s.axis.split(""), (function(t, n) {
                            var i = "x" === n ? "Left" : "Top",
                                o = i.toLowerCase(),
                                r = "scroll" + i,
                                a = h[r](),
                                m = e.max(d, n);
                            if (c) p[r] = c[o] + (u ? 0 : a - h.offset()[o]), s.margin && (p[r] -= parseInt(f.css("margin" + i), 10) || 0, p[r] -= parseInt(f.css("border" + i + "Width"), 10) || 0), p[r] += y[o] || 0, s.over[o] && (p[r] += f["x" === n ? "width" : "height"]() * s.over[o]);
                            else {
                                var v = f[o];
                                p[r] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * m : v
                            }
                            s.limit && /^\d+$/.test(p[r]) && (p[r] = p[r] <= 0 ? 0 : Math.min(p[r], m)), !t && s.axis.length > 1 && (a === p[r] ? p = {} : l && (g(s.onAfterFirst), p = {}))
                        })), g(s.onAfter)
                    }

                    function g(e) {
                        var n = t.extend({}, s, {
                            queue: !0,
                            duration: a,
                            complete: e && function() {
                                e.call(d, f, s)
                            }
                        });
                        h.animate(p, n)
                    }
                }))
            }, e.max = function(e, i) {
                var o = "x" === i ? "Width" : "Height",
                    r = "scroll" + o;
                if (!n(e)) return e[r] - t(e)[o.toLowerCase()]();
                var a = "client" + o,
                    s = e.ownerDocument || e.document,
                    l = s.documentElement,
                    c = s.body;
                return Math.max(l[r], c[r]) - Math.min(l[a], c[a])
            }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
                get: function(e) {
                    return t(e.elem)[e.prop]()
                },
                set: function(e) {
                    var n = this.get(e);
                    if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();
                    var i = Math.round(e.now);
                    n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e))
                }
            }, e
        }) ? i.apply(e, o) : i) || (t.exports = r)
    }()
}, function(t, e) {
    ! function() {
        "use strict";
        var t = 0,
            e = {};

        function n(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = n.Adapter.extend({}, n.defaults, i), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
        }
        n.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, n.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, n.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete e[this.key]
        }, n.prototype.disable = function() {
            return this.enabled = !1, this
        }, n.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, n.prototype.next = function() {
            return this.group.next(this)
        }, n.prototype.previous = function() {
            return this.group.previous(this)
        }, n.invokeAll = function(t) {
            var n = [];
            for (var i in e) n.push(e[i]);
            for (var o = 0, r = n.length; o < r; o++) n[o][t]()
        }, n.destroyAll = function() {
            n.invokeAll("destroy")
        }, n.disableAll = function() {
            n.invokeAll("disable")
        }, n.enableAll = function() {
            for (var t in n.Context.refreshAll(), e) e[t].enabled = !0;
            return this
        }, n.refreshAll = function() {
            n.Context.refreshAll()
        }, n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, n.adapters = [], n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = n
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        var e = 0,
            n = {},
            i = window.Waypoint,
            o = window.onload;

        function r(t) {
            this.element = t, this.Adapter = i.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, e += 1, i.windowContext || (i.windowContext = !0, i.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        r.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, r.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
        }, r.prototype.createThrottledResizeHandler = function() {
            var t = this;

            function e() {
                t.handleResize(), t.didResize = !1
            }
            this.adapter.on("resize.waypoints", (function() {
                t.didResize || (t.didResize = !0, i.requestAnimationFrame(e))
            }))
        }, r.prototype.createThrottledScrollHandler = function() {
            var t = this;

            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", (function() {
                t.didScroll && !i.isTouch || (t.didScroll = !0, i.requestAnimationFrame(e))
            }))
        }, r.prototype.handleResize = function() {
            i.Context.refreshAll()
        }, r.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in e) {
                var i = e[n],
                    o = i.newScroll > i.oldScroll ? i.forward : i.backward;
                for (var r in this.waypoints[n]) {
                    var a = this.waypoints[n][r];
                    if (null !== a.triggerPoint) {
                        var s = i.oldScroll < a.triggerPoint,
                            l = i.newScroll >= a.triggerPoint;
                        (s && l || !s && !l) && (a.queueTrigger(o), t[a.group.id] = a.group)
                    }
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, r.prototype.innerHeight = function() {
            return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
        }, r.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, r.prototype.innerWidth = function() {
            return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
        }, r.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
            for (var i = 0, o = t.length; i < o; i++) t[i].destroy()
        }, r.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                n = e ? void 0 : this.adapter.offset(),
                o = {};
            for (var r in this.handleScroll(), t = {
                    horizontal: {
                        contextOffset: e ? 0 : n.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: e ? 0 : n.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var a = t[r];
                for (var s in this.waypoints[r]) {
                    var l, c, u, d, h = this.waypoints[r][s],
                        f = h.options.offset,
                        p = h.triggerPoint,
                        y = 0,
                        g = null == p;
                    h.element !== h.element.window && (y = h.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, h.triggerPoint = Math.floor(y + l - f), c = p < a.oldScroll, u = h.triggerPoint >= a.oldScroll, d = !c && !u, !g && c && u ? (h.queueTrigger(a.backward), o[h.group.id] = h.group) : (!g && d || g && a.oldScroll >= h.triggerPoint) && (h.queueTrigger(a.forward), o[h.group.id] = h.group)
                }
            }
            return i.requestAnimationFrame((function() {
                for (var t in o) o[t].flushTriggers()
            })), this
        }, r.findOrCreateByElement = function(t) {
            return r.findByElement(t) || new r(t)
        }, r.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, r.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            o && o(), r.refreshAll()
        }, i.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, i.Context = r
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            i = window.Waypoint;

        function o(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        o.prototype.add = function(t) {
            this.waypoints.push(t)
        }, o.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, o.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    o = "up" === n || "left" === n;
                i.sort(o ? e : t);
                for (var r = 0, a = i.length; r < a; r += 1) {
                    var s = i[r];
                    (s.options.continuous || r === i.length - 1) && s.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, o.prototype.next = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
        }, o.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, o.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, o.prototype.remove = function(t) {
            var e = i.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, o.prototype.first = function() {
            return this.waypoints[0]
        }, o.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, o.findOrCreate = function(t) {
            return n[t.axis][t.name] || new o(t)
        }, i.Group = o
    }(),
    function() {
        "use strict";
        var t = window.jQuery,
            e = window.Waypoint;

        function n(e) {
            this.$element = t(e)
        }
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(t, e) {
            n.prototype[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        })), t.each(["extend", "inArray", "isEmptyObject"], (function(e, i) {
            n[i] = t[i]
        })), e.adapters.push({
            name: "jquery",
            Adapter: n
        }), e.Adapter = n
    }(),
    function() {
        "use strict";
        var t = window.Waypoint;

        function e(e) {
            return function() {
                var n = [],
                    i = arguments[0];
                return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]), this.each((function() {
                    var o = e.extend({}, i, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), n.push(new t(o))
                })), n
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }()
}, function(t, e, n) {
    (function(t) {
        t.Flatsome = {
            behaviors: {},
            plugin(t, e, n) {
                n = n || {}, jQuery.fn[t] = function(i) {
                    if ("string" == typeof arguments[0]) {
                        var o = null,
                            r = arguments[0],
                            a = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            if (!jQuery.data(this, "plugin_" + t) || "function" != typeof jQuery.data(this, "plugin_" + t)[r]) throw new Error("Method " + r + " does not exist on jQuery." + t);
                            o = jQuery.data(this, "plugin_" + t)[r].apply(this, a)
                        })), "destroy" === r && this.each((function() {
                            jQuery(this).removeData("plugin_" + t)
                        })), void 0 !== o ? o : this
                    }
                    if ("object" == typeof i || !i) return this.each((function() {
                        jQuery.data(this, "plugin_" + t) || (i = jQuery.extend({}, n, i), jQuery.data(this, "plugin_" + t, new e(this, i)))
                    }))
                }
            },
            behavior(t, e) {
                this.behaviors[t] = e
            },
            attach(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t) return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].attach ? this.behaviors[t].attach(e || document) : null;
                for (let t in this.behaviors) "function" == typeof this.behaviors[t].attach && this.behaviors[t].attach(e || document)
            },
            detach(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t) return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].detach ? this.behaviors[t].detach(e || document) : null;
                for (let t in this.behaviors) "function" == typeof this.behaviors[t].detach && this.behaviors[t].detach(e || document)
            }
        }
    }).call(this, n(4))
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    const o = jQuery("#wrapper"),
        r = jQuery("#header"),
        a = jQuery(".header-top", r),
        s = jQuery("#wpadminbar"),
        l = s.length && s.is(":visible") ? s.height() : 0,
        c = r.hasClass("has-sticky"),
        u = r.hasClass("sticky-hide-on-scroll");
    let d = -jQuery(".header-wrapper").height() - 100,
        h = a.hasClass("hide-for-sticky") ? -a.height() - 1 : -1;
    if (jQuery(".sticky-shrink .header-wrapper").length) {
        let t = a.hasClass("hide-for-sticky") ? a.height() : 0;
        d = -1 - t + l, h = -1 - t
    }
    if (c && (r.find(".header-wrapper").waypoint((function(t) {
            var e = jQuery(this.element),
                n = r.height();
            "down" === t && (jQuery(document).trigger("flatsome-header-sticky"), e.addClass("stuck"), r.height(n), jQuery(".has-transparent").removeClass("transparent"), jQuery(".toggle-nav-dark").removeClass("nav-dark"))
        }), {
            offset: d
        }), o.waypoint((function(t) {
            Object(i.c)() || "up" === t && (r.height(""), jQuery(".header-wrapper").removeClass("stuck"), jQuery(".has-transparent").addClass("transparent"), jQuery(".toggle-nav-dark").addClass("nav-dark"))
        }), {
            offset: h + l
        }), u)) {
        let t, e = 0;
        jQuery(window).on("scroll", () => {
            if (Object(i.c)()) return;
            clearTimeout(t);
            let n = jQuery(window).scrollTop();
            const o = jQuery(".header-wrapper");
            n >= o.outerHeight() && (n <= e ? (o.addClass("stuck"), r.removeClass("sticky-hide-on-scroll--active")) : (o.removeClass("stuck"), r.addClass("sticky-hide-on-scroll--active"))), t = setTimeout((function() {
                e = jQuery(window).scrollTop()
            }), 100)
        })
    }
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(1);
    const o = [];
    let r;

    function a() {
        o.length && (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
            for (let t = 0; t < o.length; t++) o[t].element.offsetParent ? s(o[t]) : o.splice(t, 1)
        }))
    }

    function s(t) {
        ! function(t) {
            let {
                element: e,
                type: n
            } = t, i = h(e.dataset.parallax), o = u(e), r = (window.innerHeight - o.offsetHeight) * i;
            switch (n) {
                case "backgroundImage":
                    e.style.backgroundSize = i ? "100% auto" : null;
                    break;
                case "backgroundElement":
                    e.style.height = i ? "".concat(o.offsetHeight + r, "px") : null
            }
        }(t),
        function(t) {
            let {
                element: e,
                type: n
            } = t, i = h(e.dataset.parallax || e.dataset.parallaxBackground), o = window.innerHeight, r = u(e), a = e.offsetHeight - r.offsetHeight, s = e.getBoundingClientRect(), l = r !== e ? r.getBoundingClientRect() : s, d = s.top + e.offsetHeight / 2, f = o / 2 - d, p = o / 2 - (l.top + r.offsetHeight / 2), y = d + c() < o / 2 ? c() : f, g = (Math.abs(f), Math.abs(y) / (o / 2)), m = 0;
            var v;
            if (!(l.top > o || l.top + r.offsetHeight < 0)) switch (n) {
                case "backgroundImage":
                    m = l.top * i, e.style.backgroundPosition = i ? "50% ".concat(m.toFixed(0), "px") : null, e.style.backgroundAttachment = i ? "fixed" : null;
                    break;
                case "backgroundElement":
                    m = p * i - a / 2, e.style.transform = i ? "translate3d(0, ".concat(m.toFixed(2), "px, 0)") : null, e.style.backfaceVisibility = i ? "hidden" : null;
                    break;
                case "element":
                    m = y * i, e.style.transform = i ? "translate3d(0, ".concat(m.toFixed(2), "px, 0)") : null, e.style.backfaceVisibility = i ? "hidden" : null, void 0 !== e.dataset.parallaxFade && (e.style.opacity = i ? (v = 1 - g, v * (2 - v)).toFixed(2) : null)
            }
        }(t)
    }

    function l(t) {
        return void 0 !== t.dataset.parallaxBackground ? "backgroundElement" : void 0 !== t.dataset.parallaxElemenet ? "element" : "" !== t.style.backgroundImage ? "backgroundImage" : "element"
    }

    function c() {
        return document.documentElement.scrollTop || document.body.scrollTop
    }

    function u(t) {
        return function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            for (; t && !d(t).call(t, e);) t = t.parentElement;
            return t
        }(t, t.dataset.parallaxContainer || "[data-parallax-container]") || t
    }

    function d(t) {
        return t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
    }

    function h(t) {
        return t / 10 * -1 / (2 - Math.abs(t) / 10)
    }
    window.addEventListener("scroll", a, {
        passive: !0
    }), window.addEventListener("resize", a), new MutationObserver(a).observe(document.body, {
        childList: !0
    }), window.jQuery && (window.jQuery.fn.flatsomeParallax = function(t) {
        i.a || "destroy" !== t && this.each((t, e) => function(t) {
            t.classList.add("parallax-active"), !document.querySelector("body").classList.contains("parallax-mobile") && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || t.classList && t.dataset && (o.push({
                element: t,
                type: l(t)
            }), s(o[o.length - 1]))
        }(e))
    })
}, function(t, e) {
    Flatsome.plugin("resizeselect", (function(t, e) {
        jQuery(t).change((function() {
            var t = jQuery(this),
                e = t.find("option:selected").val(),
                n = t.find("option:selected").text(),
                i = jQuery('<span class="select-resize-ghost">').html(n);
            i.appendTo(t.parent());
            var o = i.width();
            i.remove(), t.width(o + 7), e && t.parent().parent().find("input.search-field").focus()
        })).change()
    }))
}, function(t, e, n) {
    "use strict";
    var i = n(3);

    function o() {
        return console.warn("Flatsome: Flickity is lazy loaded. Use 'lazyFlickity()' to instantiate and 'flatsome-flickity-ready' event to interact with Flickity instead."), this
    }
    jQuery.fn.flickity || (jQuery.fn.flickity = o), jQuery.fn.lazyFlickity = function(t) {
        const e = Object(i.a)(i => {
            if (i.isIntersecting) {
                if (e.unobserve(i.target), !jQuery.fn.flickity || jQuery.fn.flickity === o) return n.e(5).then(n.t.bind(null, 54, 7)).then(() => {
                    jQuery(i.target).flickity(t), jQuery(i.target).trigger("flatsome-flickity-ready")
                });
                jQuery(i.target).flickity(t), jQuery(i.target).trigger("flatsome-flickity-ready")
            }
        });
        return this.each((n, i) => {
            "string" == typeof t ? jQuery.fn.flickity && jQuery(i).flickity(t) : e.observe(i)
        })
    }
}, function(t, e, n) {
    jQuery.fn.lazyTooltipster = function(t) {
        return this.each((e, i) => {
            const o = jQuery(i);
            "string" == typeof t ? jQuery.fn.tooltipster && o.hasClass("tooltipstered") && o.tooltipster(t) : o.one("mouseenter", e => {
                ! function(t, e) {
                    (jQuery.fn.tooltipster ? Promise.resolve() : n.e(3).then(n.t.bind(null, 55, 7))).then(() => {
                        t.hasClass("tooltipstered") || t.tooltipster(e), t.tooltipster("show")
                    })
                }(o, t)
            })
        })
    }
}, function(t, e) {
    jQuery(".section .loading-spin, .banner .loading-spin, .page-loader").fadeOut(), jQuery("#top-link").on("click", (function(t) {
        jQuery.scrollTo(0, 300), t.preventDefault()
    })), jQuery(".scroll-for-more").on("click", (function() {
        jQuery.scrollTo(jQuery(this), {
            duration: 300
        })
    })), jQuery(".search-dropdown button").on("click", (function(t) {
        jQuery(this).parent().find("input").trigger("focus"), t.preventDefault()
    })), jQuery(".current-cat").addClass("active"), jQuery("html").removeClass("loading-site"), setTimeout((function() {
        jQuery(".page-loader").remove()
    }), 1e3), jQuery(".resize-select").resizeselect(), flatsomeVars.user.can_edit_pages && jQuery(".block-edit-link").each((function() {
        const t = jQuery(this);
        let e = t.data("link");
        const n = t.data("backend"),
            i = t.data("title"),
            o = t.parents('[id^="menu-item-"]');
        if (o.length && o.hasClass("menu-item-has-block")) {
            const t = o.attr("id").match(/menu-item-(\d+)/);
            t && t[1] && (e += "&menu_id=".concat(t[1]))
        }
        jQuery(this).next().addClass("has-block").lazyTooltipster({
            animationDuration: 100,
            distance: -15,
            delay: 0,
            repositionOnScroll: !0,
            interactive: !0,
            contentAsHTML: !0,
            content: i + ' <br/> <a class="button edit-block-button edit-block-button-builder" href="' + e + '">UX Builder</a> <a class="button edit-block-button edit-block-button edit-block-button-backend" href="' + n + '">WP Editor</a>'
        }), jQuery(this).remove()
    })), document.addEventListener("uxb_app_ready", () => {
        const t = new URLSearchParams(window.top.location.search),
            e = parseInt(t.get("menu_id"));
        e && setTimeout(() => {
            const t = jQuery("#menu-item-".concat(e)),
                n = t.parent().hasClass("ux-nav-vertical-menu");
            t.hasClass("menu-item-has-block has-dropdown") && !t.hasClass("current-dropdown") && (n && jQuery(".header-vertical-menu__fly-out").addClass("header-vertical-menu__fly-out--open"), jQuery("#menu-item-".concat(e, " a:first")).trigger("click"))
        }, 1e3)
    }), jQuery("#hotspot").on("click", (function(t) {
        t.preventDefault()
    })), jQuery(".wpcf7-form .wpcf7-submit").on("click", (function(t) {
        jQuery(this).parent().parent().addClass("processing")
    })), jQuery(".wpcf7").on("wpcf7invalid wpcf7spam wpcf7mailsent wpcf7mailfailed", (function(t) {
        jQuery(".processing").removeClass("processing")
    })), jQuery(document).ajaxComplete((function(t, e, n) {
        jQuery(".processing").removeClass("processing")
    }))
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    Flatsome.behavior("animate", {
        attach(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                let n = jQuery(e);
                if (0 === n.data("animate").length || i.a) return n.attr("data-animated", "true");
                n.waypoint((function(t) {
                    if ("down" === t) {
                        if ("true" == n.data("animated")) return;
                        setTimeout((function() {
                            n.attr("data-animated", "true")
                        }), 300)
                    }
                }), {
                    offset: "101%"
                })
            }))
        },
        detach(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                jQuery(e).attr("data-animated", "false")
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("commons", {
        attach(t) {
            jQuery("select.resizeselect").resizeselect(), jQuery("[data-parallax]", t).flatsomeParallax(), jQuery.fn.packery && (jQuery("[data-packery-options], .has-packery", t).each((function() {
                let t = jQuery(this);
                t.packery({
                    originLeft: !flatsomeVars.rtl
                }), setTimeout((function() {
                    t.imagesLoaded((function() {
                        t.packery("layout")
                    }))
                }), 100)
            })), jQuery(".banner-grid-wrapper").imagesLoaded((function() {
                jQuery(this.elements).removeClass("processing")
            }))), "objectFitPolyfill" in window && window.objectFitPolyfill()
        },
        detach(t) {}
    })
}, function(t, e, n) {
    Flatsome.behavior("count-up", {
        attach(t) {
            jQuery("span.count-up", t).each((function(t, e) {
                var i = jQuery(e);
                i.waypoint({
                    handler(t) {
                        jQuery(this.element).hasClass("active") || n.e(0).then(n.bind(null, 56)).then(t => {
                            let {
                                CountUp: e
                            } = t;
                            var n = parseInt(i.text());
                            new e(i.get(0), n, {
                                decimalPlaces: 0,
                                duration: 4
                            }).start(), i.addClass("active")
                        })
                    },
                    offset: "100%"
                })
            }))
        }
    })
}, function(t, e, n) {
    (function(t) {
        function e(e) {
            e.addClass("current-dropdown"), e.find(".nav-top-link").attr("aria-expanded", !0),
                function(e) {
                    const n = e,
                        i = n.closest(".container").width(),
                        o = n.closest("li.menu-item"),
                        r = o.hasClass("menu-item-design-full-width"),
                        a = o.hasClass("menu-item-design-container-width"),
                        s = o.parent().hasClass("ux-nav-vertical-menu"),
                        l = !r && !a,
                        c = t.flatsomeVars.rtl;
                    if (l && !s) {
                        if (i < 750) return !1;
                        var u = n.outerWidth(),
                            d = n.offset(),
                            h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            f = d.left - (h - i) / 2;
                        c && (f = jQuery(window).width() - (d.left + u) - (h - i) / 2);
                        var p = n.width(),
                            y = i - (f + p),
                            g = !1;
                        f > y && f < p && (g = (f + y) / 3), y < 0 && (g = -y), g && c ? n.css("margin-right", -g) : g && n.css("margin-left", -g), p > i && n.addClass("nav-dropdown-full")
                    }
                    if (a) {
                        n.css({
                            inset: 0
                        });
                        const t = n.closest(".container").get(0).getBoundingClientRect(),
                            e = n.get(0).getBoundingClientRect();
                        n.css({
                            width: s ? i - o.width() : i,
                            ...!c && {
                                left: t.left - e.left + 15
                            },
                            ...c && {
                                right: 15 - (t.right - e.right)
                            }
                        })
                    }
                    if (r) {
                        n.css({
                            inset: 0
                        });
                        const t = document.body,
                            e = t.getBoundingClientRect(),
                            i = n.get(0).getBoundingClientRect(),
                            r = t.clientWidth;
                        n.css({ ...!c && {
                                width: s ? r - o.get(0).getBoundingClientRect().right : r
                            },
                            ...c && {
                                width: s ? o.get(0).getBoundingClientRect().left : r
                            },
                            ...!c && {
                                left: e.left - i.left
                            },
                            ...c && {
                                right: -(e.right - i.right)
                            }
                        })
                    }
                    if ((a || r) && !s) {
                        let t = null;
                        if (o.closest("#top-bar").length && (t = document.querySelector("#top-bar")), o.closest("#masthead").length && (t = document.querySelector("#masthead")), o.closest("#wide-nav").length && (t = document.querySelector("#wide-nav")), null !== t) {
                            const e = t.getBoundingClientRect(),
                                i = o.get(0).getBoundingClientRect();
                            n.css({
                                top: e.bottom - i.bottom + i.height
                            })
                        }
                    }
                }(e.find(".nav-dropdown"))
        }

        function n(t) {
            t.removeClass("current-dropdown"), t.find(".nav-top-link").attr("aria-expanded", !1), t.find(".nav-dropdown").attr("style", "")
        }

        function i(t) {
            t.each((t, e) => {
                const i = jQuery(e);
                i.hasClass("current-dropdown") && n(i)
            })
        }

        function o(t, e) {
            t.length && t.addClass("ux-body-overlay--".concat(e, "-active"))
        }

        function r(t, e) {
            t.length && t.removeClass("ux-body-overlay--".concat(e, "-active"))
        }
        Flatsome.behavior("dropdown", {
            attach(t) {
                const a = jQuery(".nav li.has-dropdown", t),
                    s = "uxBuilder" === jQuery("html").attr("ng-app"),
                    l = jQuery(".ux-body-overlay"),
                    c = "ontouchstart" in window;
                let u = !1,
                    d = null;
                jQuery(".header-nav > li > a, .top-bar-nav > li > a", t).on("focus", () => {
                    i(a)
                }), a.each((function(t, h) {
                    const f = jQuery(h),
                        p = f.hasClass("nav-dropdown-toggle") && !c;
                    let y = !1,
                        g = !1;
                    f.on("touchstart click", (function(t) {
                        "touchstart" === t.type && (y = !0), "click" === t.type && y && (y && !g && t.preventDefault(), g = !0)
                    })), s || p ? (u = !0, f.on("click", "a:first", (function(t) {
                        if (t.preventDefault(), d = f, f.hasClass("current-dropdown")) return n(f), void r(l, "click");
                        i(a), e(f), o(l, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [f])
                    }))) : (f.on("keydown", "a:first", (function(t) {
                        "Space" === t.code && (t.preventDefault(), f.hasClass("current-dropdown") ? (n(f), r(l, "click")) : (i(a), e(f), o(l, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [f])))
                    })), f.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over(t) {
                            i(a), e(f), r(l, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [f])
                        },
                        out() {
                            g = !1, y = !1, n(f)
                        }
                    }))
                })), !s && u && jQuery(document).on("click", (function(t) {
                    null === d || d === t.target || d.has(t.target).length || (n(d), r(l, "click"))
                })), jQuery(document).on("flatsome-dropdown-opened", (function(t, e) {
                    e.hasClass("menu-item-has-block") && jQuery.fn.packery && e.find("[data-packery-options]").packery("layout")
                })), jQuery(document).on("flatsome-header-sticky", (function() {
                    i(a), r(l, "click")
                }))
            }
        })
    }).call(this, n(4))
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-gallery", {
        attach(t) {
            const e = {
                delegate: "a",
                type: "image",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    verticalFit: !1
                },
                callbacks: {
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    }
                }
            };
            jQuery('.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox .gallery a[href*=".png"], .lightbox a.lightbox-gallery', t).parent().lazyMagnificPopup(e), jQuery(".lightbox .lightbox-multi-gallery", t).length && jQuery(".lightbox-multi-gallery", t).each((function() {
                jQuery(this).lazyMagnificPopup(e)
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-image", {
        attach(t) {
            jQuery(['.lightbox *[id^="attachment"] a[href*=".jpg"]', '.lightbox *[id^="attachment"] a[href*=".jpeg"]', '.lightbox *[id^="attachment"] a[href*=".png"]', '.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".png"]:not([target="_blank"])', ".lightbox a.image-lightbox", '.lightbox .entry-content a[href*=".jpg"]', '.lightbox .entry-content a[href*=".jpeg"]', '.lightbox .entry-content a[href*=".png"]'].join(","), t).not([".lightbox a.lightbox-gallery", '.lightbox .gallery a[href*=".jpg"]', '.lightbox .gallery a[href*=".jpeg"]', '.lightbox .gallery a[href*=".png"]', '.lightbox .lightbox-multi-gallery a[href*=".jpg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpeg"]', '.lightbox .lightbox-multi-gallery a[href*=".png"]'].join(",")).lazyMagnificPopup({
                type: "image",
                tLoading: '<div class="loading-spin centered dark"></div>',
                closeOnContentClick: !0,
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                removalDelay: 300,
                image: {
                    verticalFit: !1
                },
                callbacks: {
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    }
                }
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        o = n(0);
    Flatsome.behavior("lightboxes-link", {
        attach(t) {
            jQuery(".lightbox-by-id", t).each((function() {
                const e = jQuery(this).attr("id");
                jQuery('a[href="#' + e + '"]', t).on("click", t => {
                    t.preventDefault();
                    const e = jQuery(t.currentTarget);
                    Object(i.a)().then(() => {
                        let t = e.attr("href").substring(1),
                            n = jQuery("#".concat(t, ".lightbox-by-id"));
                        if (t && n.length > 0) {
                            let t = n[0],
                                e = jQuery.magnificPopup.open ? 300 : 0;
                            e && jQuery.magnificPopup.close(), setTimeout((function() {
                                jQuery.magnificPopup.open({
                                    removalDelay: 300,
                                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                    closeMarkup: flatsomeVars.lightbox.close_markup,
                                    items: {
                                        src: t,
                                        type: "inline",
                                        tLoading: '<div class="loading-spin dark"></div>'
                                    },
                                    callbacks: {
                                        beforeOpen: function() {
                                            Object(o.a)()
                                        },
                                        open: function() {
                                            if (Flatsome.attach(this.content), jQuery.fn.flickity && jQuery("[data-flickity-options].flickity-enabled", this.content).each((t, e) => {
                                                    jQuery(e).flickity("resize")
                                                }), jQuery.fn.packery) {
                                                const t = jQuery("[data-packery-options]", this.content);
                                                t && t.imagesLoaded((function() {
                                                    t.packery("layout")
                                                }))
                                            }
                                        },
                                        beforeClose: function() {
                                            Object(o.b)()
                                        }
                                    }
                                })
                            }), e)
                        }
                    })
                })
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-video", {
        attach(t) {
            jQuery('a.open-video, a.button[href*="vimeo"], a.button[href*="youtube.com/watch"]', t).lazyMagnificPopup({
                type: "iframe",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                mainClass: "my-mfp-video",
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                preloader: !0,
                callbacks: {
                    elementParse: function(t) {
                        /^.*\.(mp4)$/i.test(t.src) && (t.type = "inline", t.src = '<div class="ux-mfp-inline-content ux-mfp-inline-content--video"><video autoplay controls playsinline width="100%" height="auto" name="media"><source src="' + t.src + '" type="video/mp4"></video></div>')
                    },
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    open: function() {
                        jQuery(".slider .is-selected .video").trigger("pause")
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    },
                    close: function() {
                        jQuery(".slider .is-selected .video").trigger("play")
                    }
                }
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        o = n(0);
    Flatsome.behavior("lightboxes", {
        attach(t) {
            jQuery("[data-open]", t).on("click", t => {
                t.preventDefault();
                const e = jQuery(t.currentTarget);
                Object(i.a)().then(() => {
                    var t = e.data("open"),
                        n = e.data("color"),
                        i = e.data("bg"),
                        r = e.data("pos"),
                        a = e.data("visible-after"),
                        s = e.data("class"),
                        l = e.attr("data-focus");
                    e.offset(), e.addClass("current-lightbox-clicked"), jQuery.magnificPopup.open({
                        items: {
                            src: t,
                            type: "inline",
                            tLoading: '<div class="loading-spin dark"></div>'
                        },
                        removalDelay: 300,
                        closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                        closeMarkup: flatsomeVars.lightbox.close_markup,
                        focus: l,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.mainClass = "off-canvas ".concat(n, " off-canvas-").concat(r), Object(o.a)()
                            },
                            open: function() {
                                jQuery("html").addClass("has-off-canvas"), jQuery("html").addClass("has-off-canvas-" + r), s && jQuery(".mfp-content").addClass(s), i && jQuery(".mfp-bg").addClass(i), jQuery(".mfp-content .resize-select").change(), jQuery.fn.packery && jQuery("[data-packery-options], .has-packery").packery("layout"), jQuery(".equalize-box", this.content).length && Flatsome.attach("equalize-box", this.content)
                            },
                            beforeClose: function() {
                                jQuery("html").removeClass("has-off-canvas"), Object(o.b)()
                            },
                            afterClose: function() {
                                jQuery("html").removeClass("has-off-canvas-" + r), jQuery(".current-lightbox-clicked").removeClass("current-lightbox-clicked"), a && jQuery(t).removeClass("mfp-hide")
                            }
                        }
                    })
                })
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    Flatsome.behavior("slider", {
        attach(t) {
            var e;
            (e = jQuery(t).data("flickityOptions") ? jQuery(t) : jQuery("[data-flickity-options]", t)).length && e.each((t, e) => {
                var n = jQuery(e),
                    o = n.closest(".slider-wrapper"),
                    r = n.data("flickity-options");
                if ("undefined" != typeof UxBuilder && (r.draggable = !1), !0 === r.watchCSS) return;
                let a = !1,
                    s = !1;
                const l = t => {
                    try {
                        a = e.contains(t.target), !r.pauseAutoPlayOnHover || a || s || n.flickity("playPlayer")
                    } catch (t) {}
                };
                n.on("flatsome-flickity-ready", (function() {
                    n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play"), "requestAnimationFrame" in window && (n.removeClass("flickity-enabled"), window.requestAnimationFrame(() => {
                        n.addClass("flickity-enabled")
                    }));
                    const t = n.data("flickity");
                    if (t && r.parallax) {
                        const e = n.find(".bg, .flickity-slider > .img img");
                        n.addClass("slider-has-parallax"), n.on("scroll.flickity", (function(n, i) {
                            t.slides.forEach((function(n, i) {
                                const o = e[i],
                                    a = -1 * (n.target + t.x) / r.parallax;
                                o && (o.style.transform = "translateX( " + a + "px)")
                            }))
                        }))
                    }
                    document.addEventListener("touchstart", l, {
                        passive: !0
                    })
                })), i.a && (r.friction = 1, r.selectedAttraction = 1, r.autoPlay = !1), n.lazyFlickity(r), n.imagesLoaded((function() {
                    o.find(".loading-spin").fadeOut()
                })), n.on("change.flickity", (function() {
                    a && (s = !0), n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play")
                })), n.on("dragStart.flickity", (function() {
                    document.ontouchmove = t => t.preventDefault(), n.addClass("is-dragging")
                })), n.on("dragEnd.flickity", (function() {
                    document.ontouchmove = () => !0, n.removeClass("is-dragging")
                })), n.on("destroy.flickity", () => {
                    document.removeEventListener("touchstart", l)
                })
            })
        },
        detach(t) {
            jQuery.fn.flickity && (jQuery(t).data("flickityOptions") ? jQuery(t).flickity("destroy") : jQuery("[data-flickity-options]", t).flickity("destroy"))
        }
    })
}, function(t, e) {
    function n(t, e, n) {
        e.each((e, n) => {
            jQuery(n).toggleClass("active", e === t), jQuery(n).find("> a").attr("aria-selected", e === t ? "true" : "false").attr("tabindex", e === t ? null : "-1")
        }), n.each((e, n) => jQuery(n).toggleClass("active", e === t)), jQuery.fn.packery && jQuery("[data-packery-options]", n[t]).packery("layout")
    }
    Flatsome.behavior("tabs", {
        attach(t) {
            const e = window.location.hash;
            jQuery(".tabbed-content", t).each((function(t, i) {
                const o = jQuery(i),
                    r = o.find("> .nav > li"),
                    a = o.find("> .tab-panels > .panel"),
                    s = o.find("> .nav").hasClass("active-on-hover"),
                    l = o.find("> .nav").hasClass("nav-vertical");
                a.removeAttr("style"), r.each((function(t, i) {
                    const o = jQuery(i).find("a");
                    o.on("click", (function(e) {
                        n(t, r, a), e.preventDefault(), e.stopPropagation()
                    })), o.on("keydown", e => {
                        let n;
                        switch (e.key) {
                            case l ? "ArrowDown":
                                "ArrowRight" : n = r.eq((t + 1) % r.length);
                                break;
                            case l ? "ArrowUp":
                                "ArrowLeft" : n = r.eq((t - 1) % r.length);
                                break;
                            case "Home":
                                n = r.first();
                                break;
                            case "End":
                                n = r.last()
                        }
                        n && (n.find("> a").trigger("focus"), e.stopPropagation(), e.preventDefault())
                    }), s && o.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over(e) {
                            n(t, r, a)
                        },
                        out() {}
                    }), e.substr(1).length && e.substr(1) === o.attr("href").split("#")[1] && n(t, r, a)
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("toggle", {
        attach(t) {
            function e(t) {
                const e = jQuery(t.currentTarget).parent();
                e.toggleClass("active"), e.attr("aria-expanded", "false" === e.attr("aria-expanded") ? "true" : "false"), t.preventDefault()
            }
            jQuery([".widget ul.children", ".nav ul.children", ".menu .sub-menu", ".mobile-sidebar-levels-2 .nav ul.children > li > ul"].join(", "), t).each((function() {
                const t = jQuery(this).parents(".nav-slide").length ? "right" : "down";
                jQuery(this).parent().addClass("has-child").attr("aria-expanded", "false"), jQuery(this).before('<button class="toggle" aria-label="'.concat(window.flatsomeVars.i18n.toggleButton, '"><i class="icon-angle-').concat(t, '"></i></button>'))
            })), jQuery(".current-cat-parent", t).addClass("active").attr("aria-expanded", "true").removeClass("current-cat-parent"), jQuery(".toggle", t).on("click", e);
            const n = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".sidebar-menu li.menu-item.has-child", t).each((function() {
                let t = jQuery(this),
                    i = t.find("> a:first");
                "#" === i.attr("href") ? i.on("click", (function(e) {
                    e.preventDefault(), t.toggleClass("active"), t.attr("aria-expanded", "false" === t.attr("aria-expanded") ? "true" : "false")
                })) : n && i.next(".toggle").length && i.on("click", e)
            }))
        }
    })
}, function(t, e) {
    function n(t) {
        t.attr("aria-hidden", "true"), t.find("> li > a, > li > button").attr("tabindex", "-1")
    }
    Flatsome.behavior("sidebar-slider", {
        attach(t) {
            const e = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".mobile-sidebar-slide", t).each((t, i) => {
                const o = parseInt(jQuery(i).data("levels"), 10) || 1,
                    r = jQuery(".sidebar-menu", i),
                    a = jQuery(".nav-sidebar", i);
                jQuery(["> li > ul.children", "> li > .sub-menu", o > 1 ? "> li > ul.children > li > ul" : null].filter(Boolean).join(", "), a).each((t, i) => {
                    const o = jQuery(i),
                        a = o.parent(),
                        s = a.parents("ul:first"),
                        l = jQuery(["> .toggle", '> a[href="#"]', e && "> a"].filter(Boolean).join(","), a),
                        c = a.find("> a").text().trim(),
                        u = o.parents("ul").length,
                        d = Boolean(window.flatsomeVars.rtl),
                        h = jQuery('\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                '.concat(c || window.flatsomeVars.i18n.mainMenu, "\n              </button>\n            </li>\n          "));
                    o.prepend(h), n(o);
                    let f = null;
                    l.off("click").on("click", t => {
                        var e;
                        a.attr("aria-expanded", "true"), s.addClass("is-current-parent"), o.addClass("is-current-slide"), r.css("transform", "translateX(".concat(d ? "" : "-").concat(100 * u, "%)")), (e = o).attr("aria-hidden", "false"), e.find("> li > a, > li > button").attr("tabindex", ""), clearTimeout(f), t.preventDefault()
                    }), h.find(".toggle").on("click", () => {
                        r.css("transform", "translateX(".concat(d ? "" : "-").concat(100 * (u - 1), "%)")), n(o), f = setTimeout(() => {
                            o.removeClass("is-current-slide"), s.removeClass("is-current-parent")
                        }, 300), a.removeClass("active"), a.attr("aria-expanded", "false")
                    })
                })
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("sidebar-tabs", {
        attach(t) {
            jQuery(".sidebar-menu-tabs", t).each((t, e) => {
                const n = jQuery(e),
                    i = n.find(".sidebar-menu-tabs__tab"),
                    o = n.parent().find("ul.nav-sidebar");
                i.each((t, e) => {
                    jQuery(e).on("click", (function(e) {
                        ! function(t, e, n) {
                            e.each((e, n) => jQuery(n).toggleClass("active", e === t)), n.each((e, n) => jQuery(n).toggleClass("hidden", e === t))
                        }(t, i, o), e.preventDefault(), e.stopPropagation()
                    }))
                })
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("nav-hover", {
        attach(t) {
            const e = jQuery(".ux-body-overlay", t);
            e.length && jQuery([".nav-prompts-overlay li.menu-item", ".nav-prompts-overlay .header-vertical-menu__opener"].join(", "), t).on({
                mouseenter: () => {
                    e.addClass("ux-body-overlay--hover-active")
                },
                mouseleave: () => {
                    e.removeClass("ux-body-overlay--hover-active")
                }
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("back-to-top", {
        attach(t) {
            jQuery("body", t).waypoint({
                handler: function(e) {
                    jQuery(".back-to-top", t).toggleClass("active")
                },
                offset: "-100%"
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("scroll-to", {
        attach() {
            let t = jQuery("span.scroll-to"),
                e = jQuery(".scroll-to-bullets"),
                n = flatsomeVars.sticky_height;
            if (e.length && (e.children().lazyTooltipster("destroy"), e.remove()), jQuery("li.scroll-to-link").remove(), t.length && (e = jQuery('<div class="scroll-to-bullets hide-for-medium"/>'), jQuery("body").append(e), t.each((function(t, e) {
                    let i = jQuery(e),
                        o = i.data("link"),
                        r = i.data("title"),
                        a = i.data("bullet"),
                        s = 'a[href*="'.concat(o || "<nolink>", '"]');
                    if (a) {
                        let t = jQuery('\n          <a href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          <strong></strong>\n          </a>\n        '));
                        t.lazyTooltipster({
                            position: "left",
                            delay: 50,
                            contentAsHTML: !0,
                            touchDevices: !1
                        }), jQuery(".scroll-to-bullets").append(t)
                    }
                    let l = jQuery('\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          ').concat(r, "\n          </a></li>\n        "));
                    jQuery("li.nav-single-page").before(l), setTimeout((function() {
                        jQuery(".scroll-to-link a").attr("data-animated", "true")
                    }), 300), i.waypoint((function(t) {
                        jQuery(".scroll-to-bullets a, .scroll-to-link").removeClass("active"), jQuery(".scroll-to-bullets").find(s).addClass("active"), jQuery(".nav-single-page").parent().find(s).parent().addClass("active"), "up" === t && jQuery(".scroll-to-bullets, .nav-single-page").find(s).removeClass("active").prev().addClass("active")
                    }), {
                        offset: n
                    }), jQuery(s).off("click").on("click", (function(t) {
                        const e = jQuery(this).attr("href").split("#")[1];
                        e && (setTimeout(() => {
                            jQuery.scrollTo("a[name=" + e + "]", {
                                duration: 500,
                                axis: "y",
                                offset: -n
                            })
                        }, 0), jQuery.fn.magnificPopup && jQuery.magnificPopup.close(), t.preventDefault())
                    }))
                })), location.hash)) {
                let t = location.hash.replace("#", "");
                jQuery.scrollTo("a[name=" + t + "]", {
                    duration: 500,
                    axis: "y",
                    offset: -n
                })
            }
        },
        detach() {
            jQuery("span.scroll-to").length && setTimeout(this.attach, 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    Flatsome.behavior("accordion-title", {
        attach(t) {
            jQuery(".accordion-title", t).each((function() {
                jQuery(this).off("click.flatsome").on("click.flatsome", (function(t) {
                    const e = i.a ? 0 : 200;
                    jQuery(this).next().is(":hidden") ? (jQuery(this).parent().parent().find(".accordion-title").attr("aria-expanded", !1).removeClass("active").next().slideUp(e), jQuery(this).attr("aria-expanded", !jQuery(this).hasClass("active")).toggleClass("active").next().slideDown(e, (function() {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && jQuery.scrollTo(jQuery(this).prev(), {
                            duration: 300,
                            offset: -100
                        })
                    })), window.requestAnimationFrame(() => {
                        jQuery.fn.flickity && jQuery(this).next().find("[data-flickity-options].flickity-enabled").each((t, e) => {
                            jQuery(e).flickity("resize")
                        }), jQuery.fn.packery && jQuery(this).next().find("[data-packery-options]").packery("layout")
                    })) : jQuery(this).parent().parent().find(".accordion-title").attr("aria-expanded", !1).removeClass("active").next().slideUp(e), t.preventDefault()
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("tooltips", {
        attach(t) {
            jQuery(".tooltip, .has-tooltip, .tip-top, li.chosen a", t).lazyTooltipster(), jQuery(".tooltip-as-html", t).lazyTooltipster({
                interactive: !0,
                contentAsHTML: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(3);
    Flatsome.behavior("lazy-load-bg", {
        attach(t) {
            const e = Object(i.a)(t => {
                t.intersectionRatio > 0 && (e.unobserve(t.target), jQuery(t.target).addClass("bg-loaded"))
            });
            jQuery(".bg", t).each((t, n) => {
                e.observe(n)
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("sticky-section", {
        attach(t) {
            jQuery(".sticky-section", t).each((function(t, e) {
                let n = jQuery(e);
                n.waypoint((function(t) {
                    "down" === t && (n.addClass("is-sticky-section"), n.after('<div class="sticky-section-helper"></div>')), "up" === t && (n.removeClass("is-sticky-section"), n.next(".sticky-section-helper").remove())
                }), {
                    offset: "0.1px"
                }), n.waypoint((function(t) {
                    "down" === t && (n.removeClass("is-sticky-section"), n.next(".sticky-section-helper").remove()), "up" === t && (n.addClass("is-sticky-section"), n.after('<div class="sticky-section-helper"></div>'))
                }), {
                    offset: "-100%"
                })
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(3);
    Flatsome.behavior("sticky-sidebar", {
        attach(t) {
            let e = parseInt(flatsomeVars.sticky_height) + 15;
            jQuery(".is-sticky-column", t).each((t, o) => {
                n.e(2).then(n.t.bind(null, 57, 7)).then(() => {
                    jQuery(o).stickySidebar({
                        topSpacing: e,
                        bottomSpacing: 15,
                        minWidth: 850,
                        innerWrapperSelector: ".is-sticky-column__inner"
                    });
                    const t = Object(i.b)(() => {
                        jQuery(o).stickySidebar("updateSticky")
                    });
                    null == t || t.observe(jQuery(".is-sticky-column__inner", o).get(0)), jQuery(document).on("updated_checkout flatsome-sticky-sidebar-update-sticky flatsome-infiniteScroll-append", (function() {
                        jQuery(o).stickySidebar("updateSticky")
                    }))
                })
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("youtube", {
        attach(t) {
            var e, n, i, o, r, a = jQuery(".ux-youtube", t);
            0 !== a.length && (window.onYouTubePlayerAPIReady = function() {
                a.each((function() {
                    var t = jQuery(this),
                        e = t.attr("id"),
                        n = t.data("videoid"),
                        i = t.data("loop"),
                        o = t.data("audio");
                    new YT.Player(e, {
                        height: "100%",
                        width: "100%",
                        playerVars: {
                            html5: 1,
                            autoplay: 1,
                            controls: 0,
                            rel: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            showinfo: 0,
                            fs: 0,
                            loop: i,
                            el: 0,
                            playlist: i ? n : void 0
                        },
                        videoId: n,
                        events: {
                            onReady: function(t) {
                                0 === o && t.target.mute()
                            }
                        }
                    })
                }))
            }, n = "script", i = "youtube-jssdk", r = (e = document).getElementsByTagName(n)[0], e.getElementById(i) || ((o = e.createElement(n)).id = i, o.src = "https://www.youtube.com/player_api", r.parentNode.insertBefore(o, r)))
        }
    })
}, , , , , , , function(t, e, n) {
    "use strict";
    n(1).a && window.flatsomeVars.user.can_edit_pages && ("Prefer reduced motion is active on your OS", "The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion.", console.groupCollapsed("%cFlatsome%c: ".concat("Prefer reduced motion is active on your OS"), "color: #0693e3; font-weight: bold;", "color: inherit;"), console.log("The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion."), console.groupEnd())
}]);