! function(e) {
    var t = {};

    function o(r) { if (t[r]) return t[r].exports; var n = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports }
    o.m = e, o.c = t, o.d = function(e, t, r) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(r, n, function(t) { return e[t] }.bind(null, n));
        return r
    }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 0)
}([function(e, t, o) {
    "use strict";
    o.r(t);
    o(1);
    console.log("Hello, SASS"), console.log("Hello, HTML");
    const r = document.querySelector(".photo-editor__button-clear"),
        n = document.querySelector(".modal"),
        c = n.querySelector(".modal__button"),
        u = n.querySelector(".modal__button-close"),
        l = document.querySelector(".photo-editor__card-pic");
    let i;
    r.addEventListener("click", () => { n.classList.add("block") }), u.addEventListener("click", () => { n.classList.remove("block") }), c.addEventListener("click", () => { n.classList.remove("block"), i = document.querySelector("#user-picture").value, l.src = i || "img\\demo-version.jpg", document.querySelector("#user-picture").value = "" }), document.addEventListener("keydown", e => { 27 === e.keyCode && n.classList.remove("block") });
    const d = document.querySelectorAll(".photo-editor__controls input");

    function s() {
        const e = this.dataset.sizing || "";
        document.documentElement.style.setProperty("--" + this.name, this.value + e)
    }
    d.forEach(e => e.addEventListener("change", s)), d.forEach(e => e.addEventListener("mousemove", s))
}, function(e, t) {}]);