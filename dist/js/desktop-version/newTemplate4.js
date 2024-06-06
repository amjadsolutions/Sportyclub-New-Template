/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    1413: function (e, t, n) {
      var r;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        var l = [],
          c = Object.getPrototypeOf,
          f = l.slice,
          d = l.flat
            ? function (e) {
                return l.flat.call(e);
              }
            : function (e) {
                return l.concat.apply([], e);
              },
          h = l.push,
          v = l.indexOf,
          y = {},
          m = y.toString,
          x = y.hasOwnProperty,
          w = x.toString,
          T = w.call(Object),
          C = {},
          E = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          S = function (e) {
            return null != e && e === e.window;
          },
          k = n.document,
          A = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function N(code, e, t) {
          var i,
            n,
            script = (t = t || k).createElement("script");
          if (((script.text = code), e))
            for (i in A)
              (n = e[i] || (e.getAttribute && e.getAttribute(i))) &&
                script.setAttribute(i, n);
          t.head.appendChild(script).parentNode.removeChild(script);
        }
        function D(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? y[m.call(e)] || "object"
            : typeof e;
        }
        var j = function (e, t) {
          return new j.fn.init(e, t);
        };
        function L(e) {
          var t = !!e && "length" in e && e.length,
            n = D(e);
          return (
            !E(e) &&
            !S(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (j.fn = j.prototype =
          {
            jquery: "3.5.1",
            constructor: j,
            length: 0,
            toArray: function () {
              return f.call(this);
            },
            get: function (e) {
              return null == e
                ? f.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = j.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return j.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                j.map(this, function (t, i) {
                  return e.call(t, i, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(f.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                j.grep(this, function (e, i) {
                  return (i + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                j.grep(this, function (e, i) {
                  return i % 2;
                })
              );
            },
            eq: function (i) {
              var e = this.length,
                t = +i + (i < 0 ? e : 0);
              return this.pushStack(t >= 0 && t < e ? [this[t]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: h,
            sort: l.sort,
            splice: l.splice,
          }),
          (j.extend = j.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                o,
                l,
                c = arguments[0] || {},
                i = 1,
                f = arguments.length,
                d = !1;
              for (
                "boolean" == typeof c &&
                  ((d = c), (c = arguments[i] || {}), i++),
                  "object" == typeof c || E(c) || (c = {}),
                  i === f && ((c = this), i--);
                i < f;
                i++
              )
                if (null != (e = arguments[i]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        c !== r &&
                        (d &&
                        r &&
                        (j.isPlainObject(r) || (o = Array.isArray(r)))
                          ? ((n = c[t]),
                            (l =
                              o && !Array.isArray(n)
                                ? []
                                : o || j.isPlainObject(n)
                                ? n
                                : {}),
                            (o = !1),
                            (c[t] = j.extend(d, l, r)))
                          : void 0 !== r && (c[t] = r));
              return c;
            }),
          j.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== m.call(e)) &&
                (!(t = c(e)) ||
                  ("function" ==
                    typeof (n = x.call(t, "constructor") && t.constructor) &&
                    w.call(n) === T))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (code, e, t) {
              N(code, { nonce: e && e.nonce }, t);
            },
            each: function (e, t) {
              var n,
                i = 0;
              if (L(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
              else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (L(Object(e))
                    ? j.merge(n, "string" == typeof e ? [e] : e)
                    : h.call(n, e)),
                n
              );
            },
            inArray: function (e, t, i) {
              return null == t ? -1 : v.call(t, e, i);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, l = !n; i < o; i++)
                !t(e[i], i) !== l && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                o,
                i = 0,
                l = [];
              if (L(e))
                for (r = e.length; i < r; i++)
                  null != (o = t(e[i], i, n)) && l.push(o);
              else for (i in e) null != (o = t(e[i], i, n)) && l.push(o);
              return d(l);
            },
            guid: 1,
            support: C,
          }),
          "function" == typeof Symbol &&
            (j.fn[Symbol.iterator] = l[Symbol.iterator]),
          j.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              y["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var H = (function (e) {
          var i,
            t,
            n,
            r,
            o,
            l,
            c,
            select,
            f,
            d,
            h,
            v,
            y,
            m,
            x,
            w,
            T,
            C,
            E,
            S = "sizzle" + 1 * new Date(),
            k = e.document,
            A = 0,
            N = 0,
            D = he(),
            j = he(),
            L = he(),
            H = he(),
            O = function (a, b) {
              return a === b && (h = !0), 0;
            },
            P = {}.hasOwnProperty,
            R = [],
            M = R.pop,
            I = R.push,
            W = R.push,
            F = R.slice,
            B = function (e, t) {
              for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t) return i;
              return -1;
            },
            $ =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]",
            z =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              _ +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            U =
              "\\[" +
              _ +
              "*(" +
              z +
              ")(?:" +
              _ +
              "*([*^$|!~]?=)" +
              _ +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              z +
              "))|)" +
              _ +
              "*\\]",
            X =
              ":(" +
              z +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              U +
              ")*)|.*)\\)|)",
            V = new RegExp(_ + "+", "g"),
            G = new RegExp(
              "^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$",
              "g"
            ),
            Y = new RegExp("^" + _ + "*," + _ + "*"),
            J = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            Q = new RegExp(_ + "|>"),
            K = new RegExp(X),
            Z = new RegExp("^" + z + "$"),
            ee = {
              ID: new RegExp("^#(" + z + ")"),
              CLASS: new RegExp("^\\.(" + z + ")"),
              TAG: new RegExp("^(" + z + "|[*])"),
              ATTR: new RegExp("^" + U),
              PSEUDO: new RegExp("^" + X),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  _ +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  _ +
                  "*(?:([+-]|)" +
                  _ +
                  "*(\\d+)|))" +
                  _ +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + $ + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  _ +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  _ +
                  "*((?:-\\d)?\\d*)" +
                  _ +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            te = /HTML$/i,
            ne = /^(?:input|select|textarea|button)$/i,
            re = /^h\d$/i,
            ie = /^[^{]+\{\s*\[native \w/,
            oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ae = /[+~]/,
            se = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ue = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            le = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ce = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            fe = function () {
              v();
            },
            pe = ke(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            W.apply((R = F.call(k.childNodes)), k.childNodes),
              R[k.childNodes.length].nodeType;
          } catch (e) {
            W = {
              apply: R.length
                ? function (e, t) {
                    I.apply(e, F.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function de(e, n, r, o) {
            var c,
              i,
              f,
              d,
              h,
              m,
              T,
              C = n && n.ownerDocument,
              k = n ? n.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
            )
              return r;
            if (!o && (v(n), (n = n || y), x)) {
              if (11 !== k && (h = oe.exec(e)))
                if ((c = h[1])) {
                  if (9 === k) {
                    if (!(f = n.getElementById(c))) return r;
                    if (f.id === c) return r.push(f), r;
                  } else if (
                    C &&
                    (f = C.getElementById(c)) &&
                    E(n, f) &&
                    f.id === c
                  )
                    return r.push(f), r;
                } else {
                  if (h[2]) return W.apply(r, n.getElementsByTagName(e)), r;
                  if (
                    (c = h[3]) &&
                    t.getElementsByClassName &&
                    n.getElementsByClassName
                  )
                    return W.apply(r, n.getElementsByClassName(c)), r;
                }
              if (
                t.qsa &&
                !H[e + " "] &&
                (!w || !w.test(e)) &&
                (1 !== k || "object" !== n.nodeName.toLowerCase())
              ) {
                if (((T = e), (C = n), 1 === k && (Q.test(e) || J.test(e)))) {
                  for (
                    ((C = (ae.test(e) && Ce(n.parentNode)) || n) === n &&
                      t.scope) ||
                      ((d = n.getAttribute("id"))
                        ? (d = d.replace(le, ce))
                        : n.setAttribute("id", (d = S))),
                      i = (m = l(e)).length;
                    i--;

                  )
                    m[i] = (d ? "#" + d : ":scope") + " " + Se(m[i]);
                  T = m.join(",");
                }
                try {
                  return W.apply(r, C.querySelectorAll(T)), r;
                } catch (t) {
                  H(e, !0);
                } finally {
                  d === S && n.removeAttribute("id");
                }
              }
            }
            return select(e.replace(G, "$1"), n, r, o);
          }
          function he() {
            var e = [];
            return function t(r, o) {
              return (
                e.push(r + " ") > n.cacheLength && delete t[e.shift()],
                (t[r + " "] = o)
              );
            };
          }
          function ge(e) {
            return (e[S] = !0), e;
          }
          function ve(e) {
            var t = y.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ye(e, t) {
            for (var r = e.split("|"), i = r.length; i--; )
              n.attrHandle[r[i]] = t;
          }
          function me(a, b) {
            var e = b && a,
              t =
                e &&
                1 === a.nodeType &&
                1 === b.nodeType &&
                a.sourceIndex - b.sourceIndex;
            if (t) return t;
            if (e) for (; (e = e.nextSibling); ) if (e === b) return -1;
            return a ? 1 : -1;
          }
          function xe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function be(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function we(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && pe(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function Te(e) {
            return ge(function (t) {
              return (
                (t = +t),
                ge(function (n, r) {
                  for (var o, l = e([], n.length, t), i = l.length; i--; )
                    n[(o = l[i])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function Ce(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (i in ((t = de.support = {}),
          (o = de.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !te.test(t || (n && n.nodeName) || "HTML");
            }),
          (v = de.setDocument =
            function (e) {
              var r,
                l,
                c = e ? e.ownerDocument || e : k;
              return c != y && 9 === c.nodeType && c.documentElement
                ? ((m = (y = c).documentElement),
                  (x = !o(y)),
                  k != y &&
                    (l = y.defaultView) &&
                    l.top !== l &&
                    (l.addEventListener
                      ? l.addEventListener("unload", fe, !1)
                      : l.attachEvent && l.attachEvent("onunload", fe)),
                  (t.scope = ve(function (e) {
                    return (
                      m.appendChild(e).appendChild(y.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (t.attributes = ve(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (t.getElementsByTagName = ve(function (e) {
                    return (
                      e.appendChild(y.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (t.getElementsByClassName = ie.test(
                    y.getElementsByClassName
                  )),
                  (t.getById = ve(function (e) {
                    return (
                      (m.appendChild(e).id = S),
                      !y.getElementsByName || !y.getElementsByName(S).length
                    );
                  })),
                  t.getById
                    ? ((n.filter.ID = function (e) {
                        var t = e.replace(se, ue);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (n.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && x) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((n.filter.ID = function (e) {
                        var t = e.replace(se, ue);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (n.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && x) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (n.find.TAG = t.getElementsByTagName
                    ? function (e, n) {
                        return void 0 !== n.getElementsByTagName
                          ? n.getElementsByTagName(e)
                          : t.qsa
                          ? n.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (n.find.CLASS =
                    t.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && x)
                        return t.getElementsByClassName(e);
                    }),
                  (T = []),
                  (w = []),
                  (t.qsa = ie.test(y.querySelectorAll)) &&
                    (ve(function (e) {
                      var input;
                      (m.appendChild(e).innerHTML =
                        "<a id='" +
                        S +
                        "'></a><select id='" +
                        S +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          w.push("[*^$]=" + _ + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          w.push("\\[" + _ + "*(?:value|" + $ + ")"),
                        e.querySelectorAll("[id~=" + S + "-]").length ||
                          w.push("~="),
                        (input = y.createElement("input")).setAttribute(
                          "name",
                          ""
                        ),
                        e.appendChild(input),
                        e.querySelectorAll("[name='']").length ||
                          w.push(
                            "\\[" + _ + "*name" + _ + "*=" + _ + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          w.push(":checked"),
                        e.querySelectorAll("a#" + S + "+*").length ||
                          w.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        w.push("[\\r\\n\\f]");
                    }),
                    ve(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var input = y.createElement("input");
                      input.setAttribute("type", "hidden"),
                        e.appendChild(input).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          w.push("name" + _ + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          w.push(":enabled", ":disabled"),
                        (m.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          w.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        w.push(",.*:");
                    })),
                  (t.matchesSelector = ie.test(
                    (C =
                      m.matches ||
                      m.webkitMatchesSelector ||
                      m.mozMatchesSelector ||
                      m.oMatchesSelector ||
                      m.msMatchesSelector)
                  )) &&
                    ve(function (e) {
                      (t.disconnectedMatch = C.call(e, "*")),
                        C.call(e, "[s!='']:x"),
                        T.push("!=", X);
                    }),
                  (w = w.length && new RegExp(w.join("|"))),
                  (T = T.length && new RegExp(T.join("|"))),
                  (r = ie.test(m.compareDocumentPosition)),
                  (E =
                    r || ie.test(m.contains)
                      ? function (a, b) {
                          var e = 9 === a.nodeType ? a.documentElement : a,
                            t = b && b.parentNode;
                          return (
                            a === t ||
                            !(
                              !t ||
                              1 !== t.nodeType ||
                              !(e.contains
                                ? e.contains(t)
                                : a.compareDocumentPosition &&
                                  16 & a.compareDocumentPosition(t))
                            )
                          );
                        }
                      : function (a, b) {
                          if (b)
                            for (; (b = b.parentNode); ) if (b === a) return !0;
                          return !1;
                        }),
                  (O = r
                    ? function (a, b) {
                        if (a === b) return (h = !0), 0;
                        var e =
                          !a.compareDocumentPosition -
                          !b.compareDocumentPosition;
                        return (
                          e ||
                          (1 &
                            (e =
                              (a.ownerDocument || a) == (b.ownerDocument || b)
                                ? a.compareDocumentPosition(b)
                                : 1) ||
                          (!t.sortDetached &&
                            b.compareDocumentPosition(a) === e)
                            ? a == y || (a.ownerDocument == k && E(k, a))
                              ? -1
                              : b == y || (b.ownerDocument == k && E(k, b))
                              ? 1
                              : d
                              ? B(d, a) - B(d, b)
                              : 0
                            : 4 & e
                            ? -1
                            : 1)
                        );
                      }
                    : function (a, b) {
                        if (a === b) return (h = !0), 0;
                        var e,
                          i = 0,
                          t = a.parentNode,
                          n = b.parentNode,
                          r = [a],
                          o = [b];
                        if (!t || !n)
                          return a == y
                            ? -1
                            : b == y
                            ? 1
                            : t
                            ? -1
                            : n
                            ? 1
                            : d
                            ? B(d, a) - B(d, b)
                            : 0;
                        if (t === n) return me(a, b);
                        for (e = a; (e = e.parentNode); ) r.unshift(e);
                        for (e = b; (e = e.parentNode); ) o.unshift(e);
                        for (; r[i] === o[i]; ) i++;
                        return i
                          ? me(r[i], o[i])
                          : r[i] == k
                          ? -1
                          : o[i] == k
                          ? 1
                          : 0;
                      }),
                  y)
                : y;
            }),
          (de.matches = function (e, t) {
            return de(e, null, null, t);
          }),
          (de.matchesSelector = function (e, n) {
            if (
              (v(e),
              t.matchesSelector &&
                x &&
                !H[n + " "] &&
                (!T || !T.test(n)) &&
                (!w || !w.test(n)))
            )
              try {
                var r = C.call(e, n);
                if (
                  r ||
                  t.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                H(n, !0);
              }
            return de(n, y, null, [e]).length > 0;
          }),
          (de.contains = function (e, t) {
            return (e.ownerDocument || e) != y && v(e), E(e, t);
          }),
          (de.attr = function (e, r) {
            (e.ownerDocument || e) != y && v(e);
            var o = n.attrHandle[r.toLowerCase()],
              l =
                o && P.call(n.attrHandle, r.toLowerCase())
                  ? o(e, r, !x)
                  : void 0;
            return void 0 !== l
              ? l
              : t.attributes || !x
              ? e.getAttribute(r)
              : (l = e.getAttributeNode(r)) && l.specified
              ? l.value
              : null;
          }),
          (de.escape = function (e) {
            return (e + "").replace(le, ce);
          }),
          (de.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (de.uniqueSort = function (e) {
            var n,
              r = [],
              o = 0,
              i = 0;
            if (
              ((h = !t.detectDuplicates),
              (d = !t.sortStable && e.slice(0)),
              e.sort(O),
              h)
            ) {
              for (; (n = e[i++]); ) n === e[i] && (o = r.push(i));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (d = null), e;
          }),
          (r = de.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
            }),
          ((n = de.selectors =
            {
              cacheLength: 50,
              createPseudo: ge,
              match: ee,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(se, ue)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(se, ue)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || de.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && de.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return ee.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          K.test(n) &&
                          (t = l(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(se, ue).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var pattern = D[e + " "];
                  return (
                    pattern ||
                    ((pattern = new RegExp(
                      "(^|" + _ + ")" + e + "(" + _ + "|$)"
                    )) &&
                      D(e, function (e) {
                        return pattern.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var o = de.attr(r, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(V, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (o === n ||
                                o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, o) {
                  var l = "nth" !== e.slice(0, 3),
                    c = "last" !== e.slice(-4),
                    f = "of-type" === t;
                  return 1 === r && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, d) {
                        var h,
                          v,
                          y,
                          m,
                          x,
                          w,
                          T = l !== c ? "nextSibling" : "previousSibling",
                          C = t.parentNode,
                          E = f && t.nodeName.toLowerCase(),
                          k = !d && !f,
                          N = !1;
                        if (C) {
                          if (l) {
                            for (; T; ) {
                              for (m = t; (m = m[T]); )
                                if (
                                  f
                                    ? m.nodeName.toLowerCase() === E
                                    : 1 === m.nodeType
                                )
                                  return !1;
                              w = T = "only" === e && !w && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((w = [c ? C.firstChild : C.lastChild]), c && k)
                          ) {
                            for (
                              N =
                                (x =
                                  (h =
                                    (v =
                                      (y = (m = C)[S] || (m[S] = {}))[
                                        m.uniqueID
                                      ] || (y[m.uniqueID] = {}))[e] ||
                                    [])[0] === A && h[1]) && h[2],
                                m = x && C.childNodes[x];
                              (m =
                                (++x && m && m[T]) || (N = x = 0) || w.pop());

                            )
                              if (1 === m.nodeType && ++N && m === t) {
                                v[e] = [A, x, N];
                                break;
                              }
                          } else if (
                            (k &&
                              (N = x =
                                (h =
                                  (v =
                                    (y = (m = t)[S] || (m[S] = {}))[
                                      m.uniqueID
                                    ] || (y[m.uniqueID] = {}))[e] || [])[0] ===
                                  A && h[1]),
                            !1 === N)
                          )
                            for (
                              ;
                              (m =
                                (++x && m && m[T]) || (N = x = 0) || w.pop()) &&
                              ((f
                                ? m.nodeName.toLowerCase() !== E
                                : 1 !== m.nodeType) ||
                                !++N ||
                                (k &&
                                  ((v =
                                    (y = m[S] || (m[S] = {}))[m.uniqueID] ||
                                    (y[m.uniqueID] = {}))[e] = [A, N]),
                                m !== t));

                            );
                          return (N -= o) === r || (N % r == 0 && N / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var r,
                    o =
                      n.pseudos[e] ||
                      n.setFilters[e.toLowerCase()] ||
                      de.error("unsupported pseudo: " + e);
                  return o[S]
                    ? o(t)
                    : o.length > 1
                    ? ((r = [e, e, "", t]),
                      n.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ge(function (e, n) {
                            for (var r, l = o(e, t), i = l.length; i--; )
                              e[(r = B(e, l[i]))] = !(n[r] = l[i]);
                          })
                        : function (e) {
                            return o(e, 0, r);
                          })
                    : o;
                },
              },
              pseudos: {
                not: ge(function (e) {
                  var input = [],
                    t = [],
                    n = c(e.replace(G, "$1"));
                  return n[S]
                    ? ge(function (e, t, r, o) {
                        for (var l, c = n(e, null, o, []), i = e.length; i--; )
                          (l = c[i]) && (e[i] = !(t[i] = l));
                      })
                    : function (e, r, o) {
                        return (
                          (input[0] = e),
                          n(input, null, o, t),
                          (input[0] = null),
                          !t.pop()
                        );
                      };
                }),
                has: ge(function (e) {
                  return function (t) {
                    return de(e, t).length > 0;
                  };
                }),
                contains: ge(function (text) {
                  return (
                    (text = text.replace(se, ue)),
                    function (e) {
                      return (e.textContent || r(e)).indexOf(text) > -1;
                    }
                  );
                }),
                lang: ge(function (e) {
                  return (
                    Z.test(e || "") || de.error("unsupported lang: " + e),
                    (e = e.replace(se, ue).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = x
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === m;
                },
                focus: function (e) {
                  return (
                    e === y.activeElement &&
                    (!y.hasFocus || y.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: we(!1),
                disabled: we(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !n.pseudos.empty(e);
                },
                header: function (e) {
                  return re.test(e.nodeName);
                },
                input: function (e) {
                  return ne.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: Te(function () {
                  return [0];
                }),
                last: Te(function (e, t) {
                  return [t - 1];
                }),
                eq: Te(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: Te(function (e, t) {
                  for (var i = 0; i < t; i += 2) e.push(i);
                  return e;
                }),
                odd: Te(function (e, t) {
                  for (var i = 1; i < t; i += 2) e.push(i);
                  return e;
                }),
                lt: Te(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                    e.push(i);
                  return e;
                }),
                gt: Te(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = n.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[i] = xe(i);
          for (i in { submit: !0, reset: !0 }) n.pseudos[i] = be(i);
          function Ee() {}
          function Se(e) {
            for (var i = 0, t = e.length, n = ""; i < t; i++) n += e[i].value;
            return n;
          }
          function ke(e, t, base) {
            var n = t.dir,
              r = t.next,
              o = r || n,
              l = base && "parentNode" === o,
              c = N++;
            return t.first
              ? function (t, r, o) {
                  for (; (t = t[n]); )
                    if (1 === t.nodeType || l) return e(t, r, o);
                  return !1;
                }
              : function (t, f, d) {
                  var h,
                    v,
                    y,
                    m = [A, c];
                  if (d) {
                    for (; (t = t[n]); )
                      if ((1 === t.nodeType || l) && e(t, f, d)) return !0;
                  } else
                    for (; (t = t[n]); )
                      if (1 === t.nodeType || l)
                        if (
                          ((v =
                            (y = t[S] || (t[S] = {}))[t.uniqueID] ||
                            (y[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[n] || t;
                        else {
                          if ((h = v[o]) && h[0] === A && h[1] === c)
                            return (m[2] = h[2]);
                          if (((v[o] = m), (m[2] = e(t, f, d)))) return !0;
                        }
                  return !1;
                };
          }
          function Ae(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ne(e, map, filter, t, n) {
            for (
              var r, o = [], i = 0, l = e.length, c = null != map;
              i < l;
              i++
            )
              (r = e[i]) &&
                ((filter && !filter(r, t, n)) || (o.push(r), c && map.push(i)));
            return o;
          }
          function De(e, t, n, r, o, l) {
            return (
              r && !r[S] && (r = De(r)),
              o && !o[S] && (o = De(o, l)),
              ge(function (l, c, f, d) {
                var h,
                  i,
                  v,
                  y = [],
                  m = [],
                  x = c.length,
                  w =
                    l ||
                    (function (e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) de(e, t[i], n);
                      return n;
                    })(t || "*", f.nodeType ? [f] : f, []),
                  T = !e || (!l && t) ? w : Ne(w, y, e, f, d),
                  C = n ? (o || (l ? e : x || r) ? [] : c) : T;
                if ((n && n(T, C, f, d), r))
                  for (h = Ne(C, m), r(h, [], f, d), i = h.length; i--; )
                    (v = h[i]) && (C[m[i]] = !(T[m[i]] = v));
                if (l) {
                  if (o || e) {
                    if (o) {
                      for (h = [], i = C.length; i--; )
                        (v = C[i]) && h.push((T[i] = v));
                      o(null, (C = []), h, d);
                    }
                    for (i = C.length; i--; )
                      (v = C[i]) &&
                        (h = o ? B(l, v) : y[i]) > -1 &&
                        (l[h] = !(c[h] = v));
                  }
                } else (C = Ne(C === c ? C.splice(x, C.length) : C)), o ? o(null, c, C, d) : W.apply(c, C);
              })
            );
          }
          function je(e) {
            for (
              var t,
                r,
                o,
                l = e.length,
                c = n.relative[e[0].type],
                d = c || n.relative[" "],
                i = c ? 1 : 0,
                h = ke(
                  function (e) {
                    return e === t;
                  },
                  d,
                  !0
                ),
                v = ke(
                  function (e) {
                    return B(t, e) > -1;
                  },
                  d,
                  !0
                ),
                y = [
                  function (e, n, r) {
                    var o =
                      (!c && (r || n !== f)) ||
                      ((t = n).nodeType ? h(e, n, r) : v(e, n, r));
                    return (t = null), o;
                  },
                ];
              i < l;
              i++
            )
              if ((r = n.relative[e[i].type])) y = [ke(Ae(y), r)];
              else {
                if ((r = n.filter[e[i].type].apply(null, e[i].matches))[S]) {
                  for (o = ++i; o < l && !n.relative[e[o].type]; o++);
                  return De(
                    i > 1 && Ae(y),
                    i > 1 &&
                      Se(
                        e
                          .slice(0, i - 1)
                          .concat({ value: " " === e[i - 2].type ? "*" : "" })
                      ).replace(G, "$1"),
                    r,
                    i < o && je(e.slice(i, o)),
                    o < l && je((e = e.slice(o))),
                    o < l && Se(e)
                  );
                }
                y.push(r);
              }
            return Ae(y);
          }
          return (
            (Ee.prototype = n.filters = n.pseudos),
            (n.setFilters = new Ee()),
            (l = de.tokenize =
              function (e, t) {
                var r,
                  o,
                  l,
                  c,
                  f,
                  d,
                  h,
                  v = j[e + " "];
                if (v) return t ? 0 : v.slice(0);
                for (f = e, d = [], h = n.preFilter; f; ) {
                  for (c in ((r && !(o = Y.exec(f))) ||
                    (o && (f = f.slice(o[0].length) || f), d.push((l = []))),
                  (r = !1),
                  (o = J.exec(f)) &&
                    ((r = o.shift()),
                    l.push({ value: r, type: o[0].replace(G, " ") }),
                    (f = f.slice(r.length))),
                  n.filter))
                    !(o = ee[c].exec(f)) ||
                      (h[c] && !(o = h[c](o))) ||
                      ((r = o.shift()),
                      l.push({ value: r, type: c, matches: o }),
                      (f = f.slice(r.length)));
                  if (!r) break;
                }
                return t ? f.length : f ? de.error(e) : j(e, d).slice(0);
              }),
            (c = de.compile =
              function (e, t) {
                var i,
                  r = [],
                  o = [],
                  c = L[e + " "];
                if (!c) {
                  for (t || (t = l(e)), i = t.length; i--; )
                    (c = je(t[i]))[S] ? r.push(c) : o.push(c);
                  (c = L(
                    e,
                    (function (e, t) {
                      var r = t.length > 0,
                        o = e.length > 0,
                        l = function (l, c, d, h, m) {
                          var w,
                            T,
                            C,
                            E = 0,
                            i = "0",
                            S = l && [],
                            k = [],
                            N = f,
                            D = l || (o && n.find.TAG("*", m)),
                            j = (A += null == N ? 1 : Math.random() || 0.1),
                            L = D.length;
                          for (
                            m && (f = c == y || c || m);
                            i !== L && null != (w = D[i]);
                            i++
                          ) {
                            if (o && w) {
                              for (
                                T = 0,
                                  c || w.ownerDocument == y || (v(w), (d = !x));
                                (C = e[T++]);

                              )
                                if (C(w, c || y, d)) {
                                  h.push(w);
                                  break;
                                }
                              m && (A = j);
                            }
                            r && ((w = !C && w) && E--, l && S.push(w));
                          }
                          if (((E += i), r && i !== E)) {
                            for (T = 0; (C = t[T++]); ) C(S, k, c, d);
                            if (l) {
                              if (E > 0)
                                for (; i--; )
                                  S[i] || k[i] || (k[i] = M.call(h));
                              k = Ne(k);
                            }
                            W.apply(h, k),
                              m &&
                                !l &&
                                k.length > 0 &&
                                E + t.length > 1 &&
                                de.uniqueSort(h);
                          }
                          return m && ((A = j), (f = N)), S;
                        };
                      return r ? ge(l) : l;
                    })(o, r)
                  )).selector = e;
                }
                return c;
              }),
            (select = de.select =
              function (e, t, r, o) {
                var i,
                  f,
                  d,
                  h,
                  v,
                  y = "function" == typeof e && e,
                  m = !o && l((e = y.selector || e));
                if (((r = r || []), 1 === m.length)) {
                  if (
                    (f = m[0] = m[0].slice(0)).length > 2 &&
                    "ID" === (d = f[0]).type &&
                    9 === t.nodeType &&
                    x &&
                    n.relative[f[1].type]
                  ) {
                    if (
                      !(t = (n.find.ID(d.matches[0].replace(se, ue), t) ||
                        [])[0])
                    )
                      return r;
                    y && (t = t.parentNode),
                      (e = e.slice(f.shift().value.length));
                  }
                  for (
                    i = ee.needsContext.test(e) ? 0 : f.length;
                    i-- && ((d = f[i]), !n.relative[(h = d.type)]);

                  )
                    if (
                      (v = n.find[h]) &&
                      (o = v(
                        d.matches[0].replace(se, ue),
                        (ae.test(f[0].type) && Ce(t.parentNode)) || t
                      ))
                    ) {
                      if ((f.splice(i, 1), !(e = o.length && Se(f))))
                        return W.apply(r, o), r;
                      break;
                    }
                }
                return (
                  (y || c(e, m))(
                    o,
                    t,
                    !x,
                    r,
                    !t || (ae.test(e) && Ce(t.parentNode)) || t
                  ),
                  r
                );
              }),
            (t.sortStable = S.split("").sort(O).join("") === S),
            (t.detectDuplicates = !!h),
            v(),
            (t.sortDetached = ve(function (e) {
              return 1 & e.compareDocumentPosition(y.createElement("fieldset"));
            })),
            ve(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ye("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (t.attributes &&
              ve(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ye("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ve(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ye($, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            de
          );
        })(n);
        (j.find = H),
          (j.expr = H.selectors),
          (j.expr[":"] = j.expr.pseudos),
          (j.uniqueSort = j.unique = H.uniqueSort),
          (j.text = H.getText),
          (j.isXMLDoc = H.isXML),
          (j.contains = H.contains),
          (j.escapeSelector = H.escape);
        var O = function (e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && j(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          P = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          R = j.expr.match.needsContext;
        function M(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var I =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function W(e, t, n) {
          return E(t)
            ? j.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? j.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? j.grep(e, function (e) {
                return v.call(t, e) > -1 !== n;
              })
            : j.filter(t, e, n);
        }
        (j.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? j.find.matchesSelector(r, e)
                ? [r]
                : []
              : j.find.matches(
                  e,
                  j.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          j.fn.extend({
            find: function (e) {
              var i,
                t,
                n = this.length,
                r = this;
              if ("string" != typeof e)
                return this.pushStack(
                  j(e).filter(function () {
                    for (i = 0; i < n; i++)
                      if (j.contains(r[i], this)) return !0;
                  })
                );
              for (t = this.pushStack([]), i = 0; i < n; i++)
                j.find(e, r[i], t);
              return n > 1 ? j.uniqueSort(t) : t;
            },
            filter: function (e) {
              return this.pushStack(W(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(W(this, e || [], !0));
            },
            is: function (e) {
              return !!W(
                this,
                "string" == typeof e && R.test(e) ? j(e) : e || [],
                !1
              ).length;
            },
          });
        var F,
          B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((j.fn.init = function (e, t, n) {
          var r, o;
          if (!e) return this;
          if (((n = n || F), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : B.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof j ? t[0] : t),
                j.merge(
                  this,
                  j.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : k,
                    !0
                  )
                ),
                I.test(r[1]) && j.isPlainObject(t))
              )
                for (r in t) E(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (o = k.getElementById(r[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : E(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(j)
            : j.makeArray(e, this);
        }).prototype = j.fn),
          (F = j(k));
        var $ = /^(?:parents|prev(?:Until|All))/,
          _ = { children: !0, contents: !0, next: !0, prev: !0 };
        function z(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        j.fn.extend({
          has: function (e) {
            var t = j(e, this),
              n = t.length;
            return this.filter(function () {
              for (var i = 0; i < n; i++) if (j.contains(this, t[i])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              i = 0,
              r = this.length,
              o = [],
              l = "string" != typeof e && j(e);
            if (!R.test(e))
              for (; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (l
                      ? l.index(n) > -1
                      : 1 === n.nodeType && j.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? j.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? v.call(j(e), this[0])
                : v.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(j.uniqueSort(j.merge(this.get(), j(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          j.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return O(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return O(e, "parentNode", n);
              },
              next: function (e) {
                return z(e, "nextSibling");
              },
              prev: function (e) {
                return z(e, "previousSibling");
              },
              nextAll: function (e) {
                return O(e, "nextSibling");
              },
              prevAll: function (e) {
                return O(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return O(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return O(e, "previousSibling", n);
              },
              siblings: function (e) {
                return P((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return P(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && c(e.contentDocument)
                  ? e.contentDocument
                  : (M(e, "template") && (e = e.content || e),
                    j.merge([], e.childNodes));
              },
            },
            function (e, t) {
              j.fn[e] = function (n, r) {
                var o = j.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (o = j.filter(r, o)),
                  this.length > 1 &&
                    (_[e] || j.uniqueSort(o), $.test(e) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
        var U = /[^\x20\t\r\n\f]+/g;
        function X(e) {
          return e;
        }
        function V(e) {
          throw e;
        }
        function G(e, t, n, r) {
          var o;
          try {
            e && E((o = e.promise))
              ? o.call(e).done(t).fail(n)
              : e && E((o = e.then))
              ? o.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (j.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var object = {};
                  return (
                    j.each(e.match(U) || [], function (e, t) {
                      object[t] = !0;
                    }),
                    object
                  );
                })(e)
              : j.extend({}, e);
          var t,
            n,
            r,
            o,
            l = [],
            c = [],
            f = -1,
            d = function () {
              for (o = o || e.once, r = t = !0; c.length; f = -1)
                for (n = c.shift(); ++f < l.length; )
                  !1 === l[f].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((f = l.length), (n = !1));
              e.memory || (n = !1), (t = !1), o && (l = n ? [] : "");
            },
            h = {
              add: function () {
                return (
                  l &&
                    (n && !t && ((f = l.length - 1), c.push(n)),
                    (function t(n) {
                      j.each(n, function (n, r) {
                        E(r)
                          ? (e.unique && h.has(r)) || l.push(r)
                          : r && r.length && "string" !== D(r) && t(r);
                      });
                    })(arguments),
                    n && !t && d()),
                  this
                );
              },
              remove: function () {
                return (
                  j.each(arguments, function (e, t) {
                    for (var n; (n = j.inArray(t, l, n)) > -1; )
                      l.splice(n, 1), n <= f && f--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? j.inArray(e, l) > -1 : l.length > 0;
              },
              empty: function () {
                return l && (l = []), this;
              },
              disable: function () {
                return (o = c = []), (l = n = ""), this;
              },
              disabled: function () {
                return !l;
              },
              lock: function () {
                return (o = c = []), n || t || (l = n = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return (
                  o ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    c.push(n),
                    t || d()),
                  this
                );
              },
              fire: function () {
                return h.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return h;
        }),
          j.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    j.Callbacks("memory"),
                    j.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    j.Callbacks("once memory"),
                    j.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    j.Callbacks("once memory"),
                    j.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                r = "pending",
                o = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return l.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return o.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return j
                      .Deferred(function (n) {
                        j.each(t, function (t, r) {
                          var o = E(e[r[4]]) && e[r[4]];
                          l[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && E(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  then: function (e, r, o) {
                    var l = 0;
                    function c(e, t, r, o) {
                      return function () {
                        var f = this,
                          d = arguments,
                          h = function () {
                            var n, h;
                            if (!(e < l)) {
                              if ((n = r.apply(f, d)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (h =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                E(h)
                                  ? o
                                    ? h.call(n, c(l, t, X, o), c(l, t, V, o))
                                    : (l++,
                                      h.call(
                                        n,
                                        c(l, t, X, o),
                                        c(l, t, V, o),
                                        c(l, t, X, t.notifyWith)
                                      ))
                                  : (r !== X && ((f = void 0), (d = [n])),
                                    (o || t.resolveWith)(f, d));
                            }
                          },
                          v = o
                            ? h
                            : function () {
                                try {
                                  h();
                                } catch (n) {
                                  j.Deferred.exceptionHook &&
                                    j.Deferred.exceptionHook(n, v.stackTrace),
                                    e + 1 >= l &&
                                      (r !== V && ((f = void 0), (d = [n])),
                                      t.rejectWith(f, d));
                                }
                              };
                        e
                          ? v()
                          : (j.Deferred.getStackHook &&
                              (v.stackTrace = j.Deferred.getStackHook()),
                            n.setTimeout(v));
                      };
                    }
                    return j
                      .Deferred(function (n) {
                        t[0][3].add(c(0, n, E(o) ? o : X, n.notifyWith)),
                          t[1][3].add(c(0, n, E(e) ? e : X)),
                          t[2][3].add(c(0, n, E(r) ? r : V));
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? j.extend(e, o) : o;
                  },
                },
                l = {};
              return (
                j.each(t, function (i, e) {
                  var n = e[2],
                    c = e[5];
                  (o[e[1]] = n.add),
                    c &&
                      n.add(
                        function () {
                          r = c;
                        },
                        t[3 - i][2].disable,
                        t[3 - i][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    n.add(e[3].fire),
                    (l[e[0]] = function () {
                      return (
                        l[e[0] + "With"](this === l ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (l[e[0] + "With"] = n.fireWith);
                }),
                o.promise(l),
                e && e.call(l, l),
                l
              );
            },
            when: function (e) {
              var t = arguments.length,
                i = t,
                n = Array(i),
                r = f.call(arguments),
                o = j.Deferred(),
                l = function (i) {
                  return function (e) {
                    (n[i] = this),
                      (r[i] = arguments.length > 1 ? f.call(arguments) : e),
                      --t || o.resolveWith(n, r);
                  };
                };
              if (
                t <= 1 &&
                (G(e, o.done(l(i)).resolve, o.reject, !t),
                "pending" === o.state() || E(r[i] && r[i].then))
              )
                return o.then();
              for (; i--; ) G(r[i], l(i), o.reject);
              return o.promise();
            },
          });
        var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (j.Deferred.exceptionHook = function (e, t) {
          n.console &&
            n.console.warn &&
            e &&
            Y.test(e.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (j.readyException = function (e) {
            n.setTimeout(function () {
              throw e;
            });
          });
        var J = j.Deferred();
        function Q() {
          k.removeEventListener("DOMContentLoaded", Q),
            n.removeEventListener("load", Q),
            j.ready();
        }
        (j.fn.ready = function (e) {
          return (
            J.then(e).catch(function (e) {
              j.readyException(e);
            }),
            this
          );
        }),
          j.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --j.readyWait : j.isReady) ||
                ((j.isReady = !0),
                (!0 !== e && --j.readyWait > 0) || J.resolveWith(k, [j]));
            },
          }),
          (j.ready.then = J.then),
          "complete" === k.readyState ||
          ("loading" !== k.readyState && !k.documentElement.doScroll)
            ? n.setTimeout(j.ready)
            : (k.addEventListener("DOMContentLoaded", Q),
              n.addEventListener("load", Q));
        var K = function (e, t, n, r, o, l, c) {
            var i = 0,
              f = e.length,
              d = null == n;
            if ("object" === D(n))
              for (i in ((o = !0), n)) K(e, t, i, n[i], !0, l, c);
            else if (
              void 0 !== r &&
              ((o = !0),
              E(r) || (c = !0),
              d &&
                (c
                  ? (t.call(e, r), (t = null))
                  : ((d = t),
                    (t = function (e, t, n) {
                      return d.call(j(e), n);
                    }))),
              t)
            )
              for (; i < f; i++)
                t(e[i], n, c ? r : r.call(e[i], i, t(e[i], n)));
            return o ? e : d ? t.call(e) : f ? t(e[0], n) : l;
          },
          Z = /^-ms-/,
          ee = /-([a-z])/g;
        function te(e, t) {
          return t.toUpperCase();
        }
        function ne(e) {
          return e.replace(Z, "ms-").replace(ee, te);
        }
        var re = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function ie() {
          this.expando = j.expando + ie.uid++;
        }
        (ie.uid = 1),
          (ie.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  re(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, data, t) {
              var n,
                r = this.cache(e);
              if ("string" == typeof data) r[ne(data)] = t;
              else for (n in data) r[ne(n)] = data[n];
              return r;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][ne(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var i,
                n = e[this.expando];
              if (void 0 !== n) {
                if (void 0 !== t) {
                  i = (t = Array.isArray(t)
                    ? t.map(ne)
                    : (t = ne(t)) in n
                    ? [t]
                    : t.match(U) || []).length;
                  for (; i--; ) delete n[t[i]];
                }
                (void 0 === t || j.isEmptyObject(n)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !j.isEmptyObject(t);
            },
          });
        var oe = new ie(),
          ae = new ie(),
          se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ue = /[A-Z]/g;
        function le(e, t, data) {
          var n;
          if (void 0 === data && 1 === e.nodeType)
            if (
              ((n = "data-" + t.replace(ue, "-$&").toLowerCase()),
              "string" == typeof (data = e.getAttribute(n)))
            ) {
              try {
                data = (function (data) {
                  return (
                    "true" === data ||
                    ("false" !== data &&
                      ("null" === data
                        ? null
                        : data === +data + ""
                        ? +data
                        : se.test(data)
                        ? JSON.parse(data)
                        : data))
                  );
                })(data);
              } catch (e) {}
              ae.set(e, t, data);
            } else data = void 0;
          return data;
        }
        j.extend({
          hasData: function (e) {
            return ae.hasData(e) || oe.hasData(e);
          },
          data: function (e, t, data) {
            return ae.access(e, t, data);
          },
          removeData: function (e, t) {
            ae.remove(e, t);
          },
          _data: function (e, t, data) {
            return oe.access(e, t, data);
          },
          _removeData: function (e, t) {
            oe.remove(e, t);
          },
        }),
          j.fn.extend({
            data: function (e, t) {
              var i,
                n,
                data,
                r = this[0],
                o = r && r.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((data = ae.get(r)),
                  1 === r.nodeType && !oe.get(r, "hasDataAttrs"))
                ) {
                  for (i = o.length; i--; )
                    o[i] &&
                      0 === (n = o[i].name).indexOf("data-") &&
                      ((n = ne(n.slice(5))), le(r, n, data[n]));
                  oe.set(r, "hasDataAttrs", !0);
                }
                return data;
              }
              return "object" == typeof e
                ? this.each(function () {
                    ae.set(this, e);
                  })
                : K(
                    this,
                    function (t) {
                      var data;
                      if (r && void 0 === t)
                        return void 0 !== (data = ae.get(r, e)) ||
                          void 0 !== (data = le(r, e))
                          ? data
                          : void 0;
                      this.each(function () {
                        ae.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                ae.remove(this, e);
              });
            },
          }),
          j.extend({
            queue: function (e, t, data) {
              var n;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (n = oe.get(e, t)),
                  data &&
                    (!n || Array.isArray(data)
                      ? (n = oe.access(e, t, j.makeArray(data)))
                      : n.push(data)),
                  n || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = j.queue(e, t),
                r = n.length,
                o = n.shift(),
                l = j._queueHooks(e, t);
              "inprogress" === o && ((o = n.shift()), r--),
                o &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete l.stop,
                  o.call(
                    e,
                    function () {
                      j.dequeue(e, t);
                    },
                    l
                  )),
                !r && l && l.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                oe.get(e, n) ||
                oe.access(e, n, {
                  empty: j.Callbacks("once memory").add(function () {
                    oe.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          j.fn.extend({
            queue: function (e, data) {
              var t = 2;
              return (
                "string" != typeof e && ((data = e), (e = "fx"), t--),
                arguments.length < t
                  ? j.queue(this[0], e)
                  : void 0 === data
                  ? this
                  : this.each(function () {
                      var t = j.queue(this, e, data);
                      j._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== t[0] &&
                          j.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                j.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                o = j.Deferred(),
                l = this,
                i = this.length,
                c = function () {
                  --r || o.resolveWith(l, [l]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                i--;

              )
                (n = oe.get(l[i], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(c));
              return c(), o.promise(t);
            },
          });
        var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          fe = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
          pe = ["Top", "Right", "Bottom", "Left"],
          de = k.documentElement,
          he = function (e) {
            return j.contains(e.ownerDocument, e);
          },
          ge = { composed: !0 };
        de.getRootNode &&
          (he = function (e) {
            return (
              j.contains(e.ownerDocument, e) ||
              e.getRootNode(ge) === e.ownerDocument
            );
          });
        var ve = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && he(e) && "none" === j.css(e, "display"))
          );
        };
        function ye(e, t, n, r) {
          var o,
            l,
            c = 20,
            f = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return j.css(e, t, "");
                },
            d = f(),
            h = (n && n[3]) || (j.cssNumber[t] ? "" : "px"),
            v =
              e.nodeType &&
              (j.cssNumber[t] || ("px" !== h && +d)) &&
              fe.exec(j.css(e, t));
          if (v && v[3] !== h) {
            for (d /= 2, h = h || v[3], v = +d || 1; c--; )
              j.style(e, t, v + h),
                (1 - l) * (1 - (l = f() / d || 0.5)) <= 0 && (c = 0),
                (v /= l);
            (v *= 2), j.style(e, t, v + h), (n = n || []);
          }
          return (
            n &&
              ((v = +v || +d || 0),
              (o = n[1] ? v + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = h), (r.start = v), (r.end = o))),
            o
          );
        }
        var me = {};
        function xe(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = me[r];
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(r))),
            (o = j.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            (me[r] = o),
            o)
          );
        }
        function be(e, t) {
          for (var n, r, o = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((o[l] = oe.get(r, "display") || null),
                    o[l] || (r.style.display = "")),
                  "" === r.style.display && ve(r) && (o[l] = xe(r)))
                : "none" !== n && ((o[l] = "none"), oe.set(r, "display", n)));
          for (l = 0; l < c; l++) null != o[l] && (e[l].style.display = o[l]);
          return e;
        }
        j.fn.extend({
          show: function () {
            return be(this, !0);
          },
          hide: function () {
            return be(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ve(this) ? j(this).show() : j(this).hide();
                });
          },
        });
        var div,
          input,
          we = /^(?:checkbox|radio)$/i,
          Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          Ce = /^$|^module$|\/(?:java|ecma)script/i;
        (div = k.createDocumentFragment().appendChild(k.createElement("div"))),
          (input = k.createElement("input")).setAttribute("type", "radio"),
          input.setAttribute("checked", "checked"),
          input.setAttribute("name", "t"),
          div.appendChild(input),
          (C.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (div.innerHTML = "<textarea>x</textarea>"),
          (C.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue),
          (div.innerHTML = "<option></option>"),
          (C.option = !!div.lastChild);
        var Ee = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function Se(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && M(e, t)) ? j.merge([e], n) : n
          );
        }
        function ke(e, t) {
          for (var i = 0, n = e.length; i < n; i++)
            oe.set(e[i], "globalEval", !t || oe.get(t[i], "globalEval"));
        }
        (Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead),
          (Ee.th = Ee.td),
          C.option ||
            (Ee.optgroup = Ee.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var Ae = /<|&#?\w+;/;
        function Ne(e, t, n, r, o) {
          for (
            var l,
              c,
              f,
              d,
              h,
              v,
              y = t.createDocumentFragment(),
              m = [],
              i = 0,
              x = e.length;
            i < x;
            i++
          )
            if ((l = e[i]) || 0 === l)
              if ("object" === D(l)) j.merge(m, l.nodeType ? [l] : l);
              else if (Ae.test(l)) {
                for (
                  c = c || y.appendChild(t.createElement("div")),
                    f = (Te.exec(l) || ["", ""])[1].toLowerCase(),
                    d = Ee[f] || Ee._default,
                    c.innerHTML = d[1] + j.htmlPrefilter(l) + d[2],
                    v = d[0];
                  v--;

                )
                  c = c.lastChild;
                j.merge(m, c.childNodes), ((c = y.firstChild).textContent = "");
              } else m.push(t.createTextNode(l));
          for (y.textContent = "", i = 0; (l = m[i++]); )
            if (r && j.inArray(l, r) > -1) o && o.push(l);
            else if (
              ((h = he(l)), (c = Se(y.appendChild(l), "script")), h && ke(c), n)
            )
              for (v = 0; (l = c[v++]); ) Ce.test(l.type || "") && n.push(l);
          return y;
        }
        var De = /^key/,
          je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          qe = /^([^.]*)(?:\.(.+)|)/;
        function Le() {
          return !0;
        }
        function He() {
          return !1;
        }
        function Oe(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return k.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function Pe(e, t, n, data, r, o) {
          var l, c;
          if ("object" == typeof t) {
            for (c in ("string" != typeof n &&
              ((data = data || n), (n = void 0)),
            t))
              Pe(e, c, n, data, t[c], o);
            return e;
          }
          if (
            (null == data && null == r
              ? ((r = n), (data = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = data), (data = void 0))
                  : ((r = data), (data = n), (n = void 0))),
            !1 === r)
          )
            r = He;
          else if (!r) return e;
          return (
            1 === o &&
              ((l = r),
              ((r = function (e) {
                return j().off(e), l.apply(this, arguments);
              }).guid = l.guid || (l.guid = j.guid++))),
            e.each(function () {
              j.event.add(this, t, r, data, n);
            })
          );
        }
        function Re(e, t, n) {
          n
            ? (oe.set(e, t, !1),
              j.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    o,
                    l = oe.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (l.length)
                      (j.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((l = f.call(arguments)),
                      oe.set(this, t, l),
                      (r = n(this, t)),
                      this[t](),
                      l !== (o = oe.get(this, t)) || r
                        ? oe.set(this, t, !1)
                        : (o = {}),
                      l !== o)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o.value
                      );
                  } else
                    l.length &&
                      (oe.set(this, t, {
                        value: j.event.trigger(
                          j.extend(l[0], j.Event.prototype),
                          l.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === oe.get(e, t) && j.event.add(e, t, Le);
        }
        (j.event = {
          global: {},
          add: function (e, t, n, data, r) {
            var o,
              l,
              c,
              f,
              d,
              h,
              v,
              y,
              m,
              x,
              w,
              T = oe.get(e);
            if (re(e))
              for (
                n.handler && ((n = (o = n).handler), (r = o.selector)),
                  r && j.find.matchesSelector(de, r),
                  n.guid || (n.guid = j.guid++),
                  (f = T.events) || (f = T.events = Object.create(null)),
                  (l = T.handle) ||
                    (l = T.handle =
                      function (t) {
                        return void 0 !== j && j.event.triggered !== t.type
                          ? j.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  d = (t = (t || "").match(U) || [""]).length;
                d--;

              )
                (m = w = (c = qe.exec(t[d]) || [])[1]),
                  (x = (c[2] || "").split(".").sort()),
                  m &&
                    ((v = j.event.special[m] || {}),
                    (m = (r ? v.delegateType : v.bindType) || m),
                    (v = j.event.special[m] || {}),
                    (h = j.extend(
                      {
                        type: m,
                        origType: w,
                        data: data,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && j.expr.match.needsContext.test(r),
                        namespace: x.join("."),
                      },
                      o
                    )),
                    (y = f[m]) ||
                      (((y = f[m] = []).delegateCount = 0),
                      (v.setup && !1 !== v.setup.call(e, data, x, l)) ||
                        (e.addEventListener && e.addEventListener(m, l))),
                    v.add &&
                      (v.add.call(e, h),
                      h.handler.guid || (h.handler.guid = n.guid)),
                    r ? y.splice(y.delegateCount++, 0, h) : y.push(h),
                    (j.event.global[m] = !0));
          },
          remove: function (e, t, n, r, o) {
            var l,
              c,
              f,
              d,
              h,
              v,
              y,
              m,
              x,
              w,
              T,
              C = oe.hasData(e) && oe.get(e);
            if (C && (d = C.events)) {
              for (h = (t = (t || "").match(U) || [""]).length; h--; )
                if (
                  ((x = T = (f = qe.exec(t[h]) || [])[1]),
                  (w = (f[2] || "").split(".").sort()),
                  x)
                ) {
                  for (
                    y = j.event.special[x] || {},
                      m = d[(x = (r ? y.delegateType : y.bindType) || x)] || [],
                      f =
                        f[2] &&
                        new RegExp(
                          "(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      c = l = m.length;
                    l--;

                  )
                    (v = m[l]),
                      (!o && T !== v.origType) ||
                        (n && n.guid !== v.guid) ||
                        (f && !f.test(v.namespace)) ||
                        (r &&
                          r !== v.selector &&
                          ("**" !== r || !v.selector)) ||
                        (m.splice(l, 1),
                        v.selector && m.delegateCount--,
                        y.remove && y.remove.call(e, v));
                  c &&
                    !m.length &&
                    ((y.teardown && !1 !== y.teardown.call(e, w, C.handle)) ||
                      j.removeEvent(e, x, C.handle),
                    delete d[x]);
                } else for (x in d) j.event.remove(e, x + t[h], n, r, !0);
              j.isEmptyObject(d) && oe.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var i,
              t,
              n,
              r,
              o,
              l,
              c = new Array(arguments.length),
              f = j.event.fix(e),
              d = (oe.get(this, "events") || Object.create(null))[f.type] || [],
              h = j.event.special[f.type] || {};
            for (c[0] = f, i = 1; i < arguments.length; i++)
              c[i] = arguments[i];
            if (
              ((f.delegateTarget = this),
              !h.preDispatch || !1 !== h.preDispatch.call(this, f))
            ) {
              for (
                l = j.event.handlers.call(this, f, d), i = 0;
                (r = l[i++]) && !f.isPropagationStopped();

              )
                for (
                  f.currentTarget = r.elem, t = 0;
                  (o = r.handlers[t++]) && !f.isImmediatePropagationStopped();

                )
                  (f.rnamespace &&
                    !1 !== o.namespace &&
                    !f.rnamespace.test(o.namespace)) ||
                    ((f.handleObj = o),
                    (f.data = o.data),
                    void 0 !==
                      (n = (
                        (j.event.special[o.origType] || {}).handle || o.handler
                      ).apply(r.elem, c)) &&
                      !1 === (f.result = n) &&
                      (f.preventDefault(), f.stopPropagation()));
              return h.postDispatch && h.postDispatch.call(this, f), f.result;
            }
          },
          handlers: function (e, t) {
            var i,
              n,
              r,
              o,
              l,
              c = [],
              f = t.delegateCount,
              d = e.target;
            if (f && d.nodeType && !("click" === e.type && e.button >= 1))
              for (; d !== this; d = d.parentNode || this)
                if (
                  1 === d.nodeType &&
                  ("click" !== e.type || !0 !== d.disabled)
                ) {
                  for (o = [], l = {}, i = 0; i < f; i++)
                    void 0 === l[(r = (n = t[i]).selector + " ")] &&
                      (l[r] = n.needsContext
                        ? j(r, this).index(d) > -1
                        : j.find(r, this, null, [d]).length),
                      l[r] && o.push(n);
                  o.length && c.push({ elem: d, handlers: o });
                }
            return (
              (d = this),
              f < t.length && c.push({ elem: d, handlers: t.slice(f) }),
              c
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(j.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: E(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[j.expando] ? e : new j.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (data) {
                var e = this || data;
                return (
                  we.test(e.type) &&
                    e.click &&
                    M(e, "input") &&
                    Re(e, "click", Le),
                  !1
                );
              },
              trigger: function (data) {
                var e = this || data;
                return (
                  we.test(e.type) && e.click && M(e, "input") && Re(e, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (we.test(t.type) &&
                    t.click &&
                    M(t, "input") &&
                    oe.get(t, "click")) ||
                  M(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (j.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (j.Event = function (e, t) {
            if (!(this instanceof j.Event)) return new j.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Le
                    : He),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && j.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[j.expando] = !0);
          }),
          (j.Event.prototype = {
            constructor: j.Event,
            isDefaultPrevented: He,
            isPropagationStopped: He,
            isImmediatePropagationStopped: He,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Le),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Le),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Le),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          j.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var button = e.button;
                return null == e.which && De.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== button && je.test(e.type)
                  ? 1 & button
                    ? 1
                    : 2 & button
                    ? 3
                    : 4 & button
                    ? 2
                    : 0
                  : e.which;
              },
            },
            j.event.addProp
          ),
          j.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            j.event.special[e] = {
              setup: function () {
                return Re(this, e, Oe), !1;
              },
              trigger: function () {
                return Re(this, e), !0;
              },
              delegateType: t,
            };
          }),
          j.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              j.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = this,
                    o = e.relatedTarget,
                    l = e.handleObj;
                  return (
                    (o && (o === r || j.contains(r, o))) ||
                      ((e.type = l.origType),
                      (n = l.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          j.fn.extend({
            on: function (e, t, data, n) {
              return Pe(this, e, t, data, n);
            },
            one: function (e, t, data, n) {
              return Pe(this, e, t, data, n, 1);
            },
            off: function (e, t, n) {
              var r, o;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  j(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = He),
                this.each(function () {
                  j.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Me = /<script|<style|<link/i,
          Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
          We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Fe(e, content) {
          return (
            (M(e, "table") &&
              M(11 !== content.nodeType ? content : content.firstChild, "tr") &&
              j(e).children("tbody")[0]) ||
            e
          );
        }
        function Be(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function $e(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function _e(e, t) {
          var i, n, r, o, l, c;
          if (1 === t.nodeType) {
            if (oe.hasData(e) && (c = oe.get(e).events))
              for (r in (oe.remove(t, "handle events"), c))
                for (i = 0, n = c[r].length; i < n; i++)
                  j.event.add(t, r, c[r][i]);
            ae.hasData(e) &&
              ((o = ae.access(e)), (l = j.extend({}, o)), ae.set(t, l));
          }
        }
        function ze(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && we.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function Ue(e, t, n, r) {
          t = d(t);
          var o,
            l,
            c,
            f,
            h,
            v,
            i = 0,
            y = e.length,
            m = y - 1,
            x = t[0],
            w = E(x);
          if (
            w ||
            (y > 1 && "string" == typeof x && !C.checkClone && Ie.test(x))
          )
            return e.each(function (o) {
              var l = e.eq(o);
              w && (t[0] = x.call(this, o, l.html())), Ue(l, t, n, r);
            });
          if (
            y &&
            ((l = (o = Ne(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === o.childNodes.length && (o = l),
            l || r)
          ) {
            for (f = (c = j.map(Se(o, "script"), Be)).length; i < y; i++)
              (h = o),
                i !== m &&
                  ((h = j.clone(h, !0, !0)), f && j.merge(c, Se(h, "script"))),
                n.call(e[i], h, i);
            if (f)
              for (
                v = c[c.length - 1].ownerDocument, j.map(c, $e), i = 0;
                i < f;
                i++
              )
                (h = c[i]),
                  Ce.test(h.type || "") &&
                    !oe.access(h, "globalEval") &&
                    j.contains(v, h) &&
                    (h.src && "module" !== (h.type || "").toLowerCase()
                      ? j._evalUrl &&
                        !h.noModule &&
                        j._evalUrl(
                          h.src,
                          { nonce: h.nonce || h.getAttribute("nonce") },
                          v
                        )
                      : N(h.textContent.replace(We, ""), h, v));
          }
          return e;
        }
        function Xe(e, t, n) {
          for (
            var r, o = t ? j.filter(t, e) : e, i = 0;
            null != (r = o[i]);
            i++
          )
            n || 1 !== r.nodeType || j.cleanData(Se(r)),
              r.parentNode &&
                (n && he(r) && ke(Se(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        j.extend({
          htmlPrefilter: function (html) {
            return html;
          },
          clone: function (e, t, n) {
            var i,
              r,
              o,
              l,
              c = e.cloneNode(!0),
              f = he(e);
            if (
              !(
                C.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                j.isXMLDoc(e)
              )
            )
              for (l = Se(c), i = 0, r = (o = Se(e)).length; i < r; i++)
                ze(o[i], l[i]);
            if (t)
              if (n)
                for (
                  o = o || Se(e), l = l || Se(c), i = 0, r = o.length;
                  i < r;
                  i++
                )
                  _e(o[i], l[i]);
              else _e(e, c);
            return (
              (l = Se(c, "script")).length > 0 && ke(l, !f && Se(e, "script")),
              c
            );
          },
          cleanData: function (e) {
            for (
              var data, t, n, r = j.event.special, i = 0;
              void 0 !== (t = e[i]);
              i++
            )
              if (re(t)) {
                if ((data = t[oe.expando])) {
                  if (data.events)
                    for (n in data.events)
                      r[n]
                        ? j.event.remove(t, n)
                        : j.removeEvent(t, n, data.handle);
                  t[oe.expando] = void 0;
                }
                t[ae.expando] && (t[ae.expando] = void 0);
              }
          },
        }),
          j.fn.extend({
            detach: function (e) {
              return Xe(this, e, !0);
            },
            remove: function (e) {
              return Xe(this, e);
            },
            text: function (e) {
              return K(
                this,
                function (e) {
                  return void 0 === e
                    ? j.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ue(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Fe(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ue(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Fe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ue(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ue(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, i = 0; null != (e = this[i]); i++)
                1 === e.nodeType &&
                  (j.cleanData(Se(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return j.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return K(
                this,
                function (e) {
                  var t = this[0] || {},
                    i = 0,
                    n = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Me.test(e) &&
                    !Ee[(Te.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = j.htmlPrefilter(e);
                    try {
                      for (; i < n; i++)
                        1 === (t = this[i] || {}).nodeType &&
                          (j.cleanData(Se(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ue(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  j.inArray(this, e) < 0 &&
                    (j.cleanData(Se(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          j.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              j.fn[e] = function (e) {
                for (
                  var n, r = [], o = j(e), l = o.length - 1, i = 0;
                  i <= l;
                  i++
                )
                  (n = i === l ? this : this.clone(!0)),
                    j(o[i])[t](n),
                    h.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Ve = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
          Ge = function (e) {
            var view = e.ownerDocument.defaultView;
            return (
              (view && view.opener) || (view = n), view.getComputedStyle(e)
            );
          },
          Ye = function (e, t, n) {
            var r,
              o,
              l = {};
            for (o in t) (l[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.call(e)), t)) e.style[o] = l[o];
            return r;
          },
          Je = new RegExp(pe.join("|"), "i");
        function Qe(e, t, n) {
          var r,
            o,
            l,
            c,
            style = e.style;
          return (
            (n = n || Ge(e)) &&
              ("" !== (c = n.getPropertyValue(t) || n[t]) ||
                he(e) ||
                (c = j.style(e, t)),
              !C.pixelBoxStyles() &&
                Ve.test(c) &&
                Je.test(t) &&
                ((r = style.width),
                (o = style.minWidth),
                (l = style.maxWidth),
                (style.minWidth = style.maxWidth = style.width = c),
                (c = n.width),
                (style.width = r),
                (style.minWidth = o),
                (style.maxWidth = l))),
            void 0 !== c ? c + "" : c
          );
        }
        function Ke(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (div) {
              (h.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (div.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                de.appendChild(h).appendChild(div);
              var e = n.getComputedStyle(div);
              (r = "1%" !== e.top),
                (d = 12 === t(e.marginLeft)),
                (div.style.right = "60%"),
                (c = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (div.style.position = "absolute"),
                (l = 12 === t(div.offsetWidth / 3)),
                de.removeChild(h),
                (div = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var r,
            o,
            l,
            c,
            f,
            d,
            h = k.createElement("div"),
            div = k.createElement("div");
          div.style &&
            ((div.style.backgroundClip = "content-box"),
            (div.cloneNode(!0).style.backgroundClip = ""),
            (C.clearCloneStyle = "content-box" === div.style.backgroundClip),
            j.extend(C, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), c;
              },
              pixelPosition: function () {
                return e(), r;
              },
              reliableMarginLeft: function () {
                return e(), d;
              },
              scrollboxSize: function () {
                return e(), l;
              },
              reliableTrDimensions: function () {
                var table, tr, e, t;
                return (
                  null == f &&
                    ((table = k.createElement("table")),
                    (tr = k.createElement("tr")),
                    (e = k.createElement("div")),
                    (table.style.cssText = "position:absolute;left:-11111px"),
                    (tr.style.height = "1px"),
                    (e.style.height = "9px"),
                    de.appendChild(table).appendChild(tr).appendChild(e),
                    (t = n.getComputedStyle(tr)),
                    (f = parseInt(t.height) > 3),
                    de.removeChild(table)),
                  f
                );
              },
            }));
        })();
        var Ze = ["Webkit", "Moz", "ms"],
          et = k.createElement("div").style,
          tt = {};
        function nt(e) {
          var t = j.cssProps[e] || tt[e];
          return (
            t ||
            (e in et
              ? e
              : (tt[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), i = Ze.length;
                      i--;

                    )
                      if ((e = Ze[i] + t) in et) return e;
                  })(e) || e))
          );
        }
        var it = /^(none|table(?!-c[ea]).+)/,
          ot = /^--/,
          at = { position: "absolute", visibility: "hidden", display: "block" },
          st = { letterSpacing: "0", fontWeight: "400" };
        function ut(e, t, n) {
          var r = fe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function lt(e, t, n, r, o, l) {
          var i = "width" === t ? 1 : 0,
            c = 0,
            f = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; i < 4; i += 2)
            "margin" === n && (f += j.css(e, n + pe[i], !0, o)),
              r
                ? ("content" === n && (f -= j.css(e, "padding" + pe[i], !0, o)),
                  "margin" !== n &&
                    (f -= j.css(e, "border" + pe[i] + "Width", !0, o)))
                : ((f += j.css(e, "padding" + pe[i], !0, o)),
                  "padding" !== n
                    ? (f += j.css(e, "border" + pe[i] + "Width", !0, o))
                    : (c += j.css(e, "border" + pe[i] + "Width", !0, o)));
          return (
            !r &&
              l >= 0 &&
              (f +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      l -
                      f -
                      c -
                      0.5
                  )
                ) || 0),
            f
          );
        }
        function ct(e, t, n) {
          var r = Ge(e),
            o =
              (!C.boxSizingReliable() || n) &&
              "border-box" === j.css(e, "boxSizing", !1, r),
            l = o,
            c = Qe(e, t, r),
            f = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Ve.test(c)) {
            if (!n) return c;
            c = "auto";
          }
          return (
            ((!C.boxSizingReliable() && o) ||
              (!C.reliableTrDimensions() && M(e, "tr")) ||
              "auto" === c ||
              (!parseFloat(c) && "inline" === j.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((o = "border-box" === j.css(e, "boxSizing", !1, r)),
              (l = f in e) && (c = e[f])),
            (c = parseFloat(c) || 0) +
              lt(e, t, n || (o ? "border" : "content"), l, r, c) +
              "px"
          );
        }
        function ft(e, t, n, r, o) {
          return new ft.prototype.init(e, t, n, r, o);
        }
        j.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Qe(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                l,
                c,
                f = ne(t),
                d = ot.test(t),
                style = e.style;
              if (
                (d || (t = nt(f)),
                (c = j.cssHooks[t] || j.cssHooks[f]),
                void 0 === n)
              )
                return c && "get" in c && void 0 !== (o = c.get(e, !1, r))
                  ? o
                  : style[t];
              "string" === (l = typeof n) &&
                (o = fe.exec(n)) &&
                o[1] &&
                ((n = ye(e, t, o)), (l = "number")),
                null != n &&
                  n == n &&
                  ("number" !== l ||
                    d ||
                    (n += (o && o[3]) || (j.cssNumber[f] ? "" : "px")),
                  C.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (style[t] = "inherit"),
                  (c && "set" in c && void 0 === (n = c.set(e, n, r))) ||
                    (d ? style.setProperty(t, n) : (style[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var o,
              l,
              c,
              f = ne(t);
            return (
              ot.test(t) || (t = nt(f)),
              (c = j.cssHooks[t] || j.cssHooks[f]) &&
                "get" in c &&
                (o = c.get(e, !0, n)),
              void 0 === o && (o = Qe(e, t, r)),
              "normal" === o && t in st && (o = st[t]),
              "" === n || n
                ? ((l = parseFloat(o)), !0 === n || isFinite(l) ? l || 0 : o)
                : o
            );
          },
        }),
          j.each(["height", "width"], function (e, t) {
            j.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !it.test(j.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? ct(e, t, r)
                    : Ye(e, at, function () {
                        return ct(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var o,
                  l = Ge(e),
                  c = !C.scrollboxSize() && "absolute" === l.position,
                  f = (c || r) && "border-box" === j.css(e, "boxSizing", !1, l),
                  d = r ? lt(e, t, r, f, l) : 0;
                return (
                  f &&
                    c &&
                    (d -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(l[t]) -
                        lt(e, t, "border", !1, l) -
                        0.5
                    )),
                  d &&
                    (o = fe.exec(n)) &&
                    "px" !== (o[3] || "px") &&
                    ((e.style[t] = n), (n = j.css(e, t))),
                  ut(0, n, d)
                );
              },
            };
          }),
          (j.cssHooks.marginLeft = Ke(C.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Qe(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    Ye(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          j.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (j.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    r = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  r[e + pe[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
              },
            }),
              "margin" !== e && (j.cssHooks[e + t].set = ut);
          }),
          j.fn.extend({
            css: function (e, t) {
              return K(
                this,
                function (e, t, n) {
                  var r,
                    o,
                    map = {},
                    i = 0;
                  if (Array.isArray(t)) {
                    for (r = Ge(e), o = t.length; i < o; i++)
                      map[t[i]] = j.css(e, t[i], !1, r);
                    return map;
                  }
                  return void 0 !== n ? j.style(e, t, n) : j.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (j.Tween = ft),
          (ft.prototype = {
            constructor: ft,
            init: function (e, t, n, r, o, l) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = o || j.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = l || (j.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = ft.propHooks[this.prop];
              return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ft.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      j.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                this
              );
            },
          }),
          (ft.prototype.init.prototype = ft.prototype),
          (ft.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = j.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                j.fx.step[e.prop]
                  ? j.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!j.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : j.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (ft.propHooks.scrollTop = ft.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (j.easing = {
            linear: function (p) {
              return p;
            },
            swing: function (p) {
              return 0.5 - Math.cos(p * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (j.fx = ft.prototype.init),
          (j.fx.step = {});
        var pt,
          ht,
          gt = /^(?:toggle|show|hide)$/,
          vt = /queueHooks$/;
        function yt() {
          ht &&
            (!1 === k.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(yt)
              : n.setTimeout(yt, j.fx.interval),
            j.fx.tick());
        }
        function mt() {
          return (
            n.setTimeout(function () {
              pt = void 0;
            }),
            (pt = Date.now())
          );
        }
        function xt(e, t) {
          var n,
            i = 0,
            r = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = pe[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
        }
        function bt(e, t, n) {
          for (
            var r,
              o = (wt.tweeners[t] || []).concat(wt.tweeners["*"]),
              l = 0,
              c = o.length;
            l < c;
            l++
          )
            if ((r = o[l].call(n, t, e))) return r;
        }
        function wt(e, t, n) {
          var r,
            o,
            l = 0,
            c = wt.prefilters.length,
            f = j.Deferred().always(function () {
              delete d.elem;
            }),
            d = function () {
              if (o) return !1;
              for (
                var t = pt || mt(),
                  n = Math.max(0, h.startTime + h.duration - t),
                  r = 1 - (n / h.duration || 0),
                  l = 0,
                  c = h.tweens.length;
                l < c;
                l++
              )
                h.tweens[l].run(r);
              return (
                f.notifyWith(e, [h, r, n]),
                r < 1 && c
                  ? n
                  : (c || f.notifyWith(e, [h, 1, 0]), f.resolveWith(e, [h]), !1)
              );
            },
            h = f.promise({
              elem: e,
              props: j.extend({}, t),
              opts: j.extend(
                !0,
                { specialEasing: {}, easing: j.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: pt || mt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = j.Tween(
                  e,
                  h.opts,
                  t,
                  n,
                  h.opts.specialEasing[t] || h.opts.easing
                );
                return h.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? h.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < r; n++) h.tweens[n].run(1);
                return (
                  t
                    ? (f.notifyWith(e, [h, 1, 0]), f.resolveWith(e, [h, t]))
                    : f.rejectWith(e, [h, t]),
                  this
                );
              },
            }),
            v = h.props;
          for (
            !(function (e, t) {
              var n, r, o, l, c;
              for (n in e)
                if (
                  ((o = t[(r = ne(n))]),
                  (l = e[n]),
                  Array.isArray(l) && ((o = l[1]), (l = e[n] = l[0])),
                  n !== r && ((e[r] = l), delete e[n]),
                  (c = j.cssHooks[r]) && ("expand" in c))
                )
                  for (n in ((l = c.expand(l)), delete e[r], l))
                    (n in e) || ((e[n] = l[n]), (t[n] = o));
                else t[r] = o;
            })(v, h.opts.specialEasing);
            l < c;
            l++
          )
            if ((r = wt.prefilters[l].call(h, e, v, h.opts)))
              return (
                E(r.stop) &&
                  (j._queueHooks(h.elem, h.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            j.map(v, bt, h),
            E(h.opts.start) && h.opts.start.call(e, h),
            h
              .progress(h.opts.progress)
              .done(h.opts.done, h.opts.complete)
              .fail(h.opts.fail)
              .always(h.opts.always),
            j.fx.timer(j.extend(d, { elem: e, anim: h, queue: h.opts.queue })),
            h
          );
        }
        (j.Animation = j.extend(wt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ye(n.elem, e, fe.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            E(e) ? ((t = e), (e = ["*"])) : (e = e.match(U));
            for (var n, r = 0, o = e.length; r < o; r++)
              (n = e[r]),
                (wt.tweeners[n] = wt.tweeners[n] || []),
                wt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                o,
                l,
                c,
                f,
                d,
                h,
                v,
                y = "width" in t || "height" in t,
                m = this,
                x = {},
                style = e.style,
                w = e.nodeType && ve(e),
                T = oe.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (c = j._queueHooks(e, "fx")).unqueued &&
                  ((c.unqueued = 0),
                  (f = c.empty.fire),
                  (c.empty.fire = function () {
                    c.unqueued || f();
                  })),
                c.unqueued++,
                m.always(function () {
                  m.always(function () {
                    c.unqueued--, j.queue(e, "fx").length || c.empty.fire();
                  });
                })),
              t))
                if (((o = t[r]), gt.test(o))) {
                  if (
                    (delete t[r],
                    (l = l || "toggle" === o),
                    o === (w ? "hide" : "show"))
                  ) {
                    if ("show" !== o || !T || void 0 === T[r]) continue;
                    w = !0;
                  }
                  x[r] = (T && T[r]) || j.style(e, r);
                }
              if ((d = !j.isEmptyObject(t)) || !j.isEmptyObject(x))
                for (r in (y &&
                  1 === e.nodeType &&
                  ((n.overflow = [
                    style.overflow,
                    style.overflowX,
                    style.overflowY,
                  ]),
                  null == (h = T && T.display) && (h = oe.get(e, "display")),
                  "none" === (v = j.css(e, "display")) &&
                    (h
                      ? (v = h)
                      : (be([e], !0),
                        (h = e.style.display || h),
                        (v = j.css(e, "display")),
                        be([e]))),
                  ("inline" === v || ("inline-block" === v && null != h)) &&
                    "none" === j.css(e, "float") &&
                    (d ||
                      (m.done(function () {
                        style.display = h;
                      }),
                      null == h &&
                        ((v = style.display), (h = "none" === v ? "" : v))),
                    (style.display = "inline-block"))),
                n.overflow &&
                  ((style.overflow = "hidden"),
                  m.always(function () {
                    (style.overflow = n.overflow[0]),
                      (style.overflowX = n.overflow[1]),
                      (style.overflowY = n.overflow[2]);
                  })),
                (d = !1),
                x))
                  d ||
                    (T
                      ? "hidden" in T && (w = T.hidden)
                      : (T = oe.access(e, "fxshow", { display: h })),
                    l && (T.hidden = !w),
                    w && be([e], !0),
                    m.done(function () {
                      for (r in (w || be([e]), oe.remove(e, "fxshow"), x))
                        j.style(e, r, x[r]);
                    })),
                    (d = bt(w ? T[r] : 0, r, m)),
                    r in T ||
                      ((T[r] = d.start),
                      w && ((d.end = d.start), (d.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
          },
        })),
          (j.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? j.extend({}, e)
                : {
                    complete: n || (!n && t) || (E(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !E(t) && t),
                  };
            return (
              j.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in j.fx.speeds
                    ? (r.duration = j.fx.speeds[r.duration])
                    : (r.duration = j.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                E(r.old) && r.old.call(this),
                  r.queue && j.dequeue(this, r.queue);
              }),
              r
            );
          }),
          j.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ve)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var o = j.isEmptyObject(e),
                l = j.speed(t, n, r),
                c = function () {
                  var t = wt(this, j.extend({}, e), l);
                  (o || oe.get(this, "finish")) && t.stop(!0);
                };
              return (
                (c.finish = c),
                o || !1 === l.queue ? this.each(c) : this.queue(l.queue, c)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    o = null != e && e + "queueHooks",
                    l = j.timers,
                    data = oe.get(this);
                  if (o) data[o] && data[o].stop && r(data[o]);
                  else
                    for (o in data)
                      data[o] && data[o].stop && vt.test(o) && r(data[o]);
                  for (o = l.length; o--; )
                    l[o].elem !== this ||
                      (null != e && l[o].queue !== e) ||
                      (l[o].anim.stop(n), (t = !1), l.splice(o, 1));
                  (!t && n) || j.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    data = oe.get(this),
                    n = data[e + "queue"],
                    r = data[e + "queueHooks"],
                    o = j.timers,
                    l = n ? n.length : 0;
                  for (
                    data.finish = !0,
                      j.queue(this, e, []),
                      r && r.stop && r.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < l; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                  delete data.finish;
                })
              );
            },
          }),
          j.each(["toggle", "show", "hide"], function (e, t) {
            var n = j.fn[t];
            j.fn[t] = function (e, r, o) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(xt(t, !0), e, r, o);
            };
          }),
          j.each(
            {
              slideDown: xt("show"),
              slideUp: xt("hide"),
              slideToggle: xt("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              j.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (j.timers = []),
          (j.fx.tick = function () {
            var e,
              i = 0,
              t = j.timers;
            for (pt = Date.now(); i < t.length; i++)
              (e = t[i])() || t[i] !== e || t.splice(i--, 1);
            t.length || j.fx.stop(), (pt = void 0);
          }),
          (j.fx.timer = function (e) {
            j.timers.push(e), j.fx.start();
          }),
          (j.fx.interval = 13),
          (j.fx.start = function () {
            ht || ((ht = !0), yt());
          }),
          (j.fx.stop = function () {
            ht = null;
          }),
          (j.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (j.fn.delay = function (time, e) {
            return (
              (time = (j.fx && j.fx.speeds[time]) || time),
              (e = e || "fx"),
              this.queue(e, function (e, t) {
                var r = n.setTimeout(e, time);
                t.stop = function () {
                  n.clearTimeout(r);
                };
              })
            );
          }),
          (function () {
            var input = k.createElement("input"),
              e = k
                .createElement("select")
                .appendChild(k.createElement("option"));
            (input.type = "checkbox"),
              (C.checkOn = "" !== input.value),
              (C.optSelected = e.selected),
              ((input = k.createElement("input")).value = "t"),
              (input.type = "radio"),
              (C.radioValue = "t" === input.value);
          })();
        var Tt,
          Ct = j.expr.attrHandle;
        j.fn.extend({
          attr: function (e, t) {
            return K(this, j.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              j.removeAttr(this, e);
            });
          },
        }),
          j.extend({
            attr: function (e, t, n) {
              var r,
                o,
                l = e.nodeType;
              if (3 !== l && 8 !== l && 2 !== l)
                return void 0 === e.getAttribute
                  ? j.prop(e, t, n)
                  : ((1 === l && j.isXMLDoc(e)) ||
                      (o =
                        j.attrHooks[t.toLowerCase()] ||
                        (j.expr.match.bool.test(t) ? Tt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void j.removeAttr(e, t)
                        : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : null == (r = j.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!C.radioValue && "radio" === t && M(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                i = 0,
                r = t && t.match(U);
              if (r && 1 === e.nodeType)
                for (; (n = r[i++]); ) e.removeAttribute(n);
            },
          }),
          (Tt = {
            set: function (e, t, n) {
              return !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          j.each(j.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ct[t] || j.find.attr;
            Ct[t] = function (e, t, r) {
              var o,
                l,
                c = t.toLowerCase();
              return (
                r ||
                  ((l = Ct[c]),
                  (Ct[c] = o),
                  (o = null != n(e, t, r) ? c : null),
                  (Ct[c] = l)),
                o
              );
            };
          });
        var Et = /^(?:input|select|textarea|button)$/i,
          St = /^(?:a|area)$/i;
        function kt(e) {
          return (e.match(U) || []).join(" ");
        }
        function At(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function Nt(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(U)) || [];
        }
        j.fn.extend({
          prop: function (e, t) {
            return K(this, j.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[j.propFix[e] || e];
            });
          },
        }),
          j.extend({
            prop: function (e, t, n) {
              var r,
                o,
                l = e.nodeType;
              if (3 !== l && 8 !== l && 2 !== l)
                return (
                  (1 === l && j.isXMLDoc(e)) ||
                    ((t = j.propFix[t] || t), (o = j.propHooks[t])),
                  void 0 !== n
                    ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = j.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : Et.test(e.nodeName) || (St.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          C.optSelected ||
            (j.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          j.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              j.propFix[this.toLowerCase()] = this;
            }
          ),
          j.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                o,
                l,
                c,
                f,
                i = 0;
              if (E(e))
                return this.each(function (t) {
                  j(this).addClass(e.call(this, t, At(this)));
                });
              if ((t = Nt(e)).length)
                for (; (n = this[i++]); )
                  if (
                    ((o = At(n)), (r = 1 === n.nodeType && " " + kt(o) + " "))
                  ) {
                    for (c = 0; (l = t[c++]); )
                      r.indexOf(" " + l + " ") < 0 && (r += l + " ");
                    o !== (f = kt(r)) && n.setAttribute("class", f);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                o,
                l,
                c,
                f,
                i = 0;
              if (E(e))
                return this.each(function (t) {
                  j(this).removeClass(e.call(this, t, At(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = Nt(e)).length)
                for (; (n = this[i++]); )
                  if (
                    ((o = At(n)), (r = 1 === n.nodeType && " " + kt(o) + " "))
                  ) {
                    for (c = 0; (l = t[c++]); )
                      for (; r.indexOf(" " + l + " ") > -1; )
                        r = r.replace(" " + l + " ", " ");
                    o !== (f = kt(r)) && n.setAttribute("class", f);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : E(e)
                ? this.each(function (i) {
                    j(this).toggleClass(e.call(this, i, At(this), t), t);
                  })
                : this.each(function () {
                    var t, i, o, l;
                    if (r)
                      for (i = 0, o = j(this), l = Nt(e); (t = l[i++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = At(this)) && oe.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : oe.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                i = 0;
              for (t = " " + e + " "; (n = this[i++]); )
                if (1 === n.nodeType && (" " + kt(At(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var Dt = /\r/g;
        j.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              o = this[0];
            return arguments.length
              ? ((r = E(e)),
                this.each(function (i) {
                  var n;
                  1 === this.nodeType &&
                    (null == (n = r ? e.call(this, i, j(this).val()) : e)
                      ? (n = "")
                      : "number" == typeof n
                      ? (n += "")
                      : Array.isArray(n) &&
                        (n = j.map(n, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      j.valHooks[this.type] ||
                      j.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, n, "value")) ||
                      (this.value = n));
                }))
              : o
              ? (t =
                  j.valHooks[o.type] || j.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(o, "value"))
                ? n
                : "string" == typeof (n = o.value)
                ? n.replace(Dt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          j.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = j.find.attr(e, "value");
                  return null != t ? t : kt(j.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    option,
                    i,
                    n = e.options,
                    r = e.selectedIndex,
                    o = "select-one" === e.type,
                    l = o ? null : [],
                    c = o ? r + 1 : n.length;
                  for (i = r < 0 ? c : o ? r : 0; i < c; i++)
                    if (
                      ((option = n[i]).selected || i === r) &&
                      !option.disabled &&
                      (!option.parentNode.disabled ||
                        !M(option.parentNode, "optgroup"))
                    ) {
                      if (((t = j(option).val()), o)) return t;
                      l.push(t);
                    }
                  return l;
                },
                set: function (e, t) {
                  for (
                    var n,
                      option,
                      r = e.options,
                      o = j.makeArray(t),
                      i = r.length;
                    i--;

                  )
                    ((option = r[i]).selected =
                      j.inArray(j.valHooks.option.get(option), o) > -1) &&
                      (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          j.each(["radio", "checkbox"], function () {
            (j.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = j.inArray(j(e).val(), t) > -1);
              },
            }),
              C.checkOn ||
                (j.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (C.focusin = "onfocusin" in n);
        var jt = /^(?:focusinfocus|focusoutblur)$/,
          qt = function (e) {
            e.stopPropagation();
          };
        j.extend(j.event, {
          trigger: function (e, data, t, r) {
            var i,
              o,
              l,
              c,
              f,
              d,
              h,
              v,
              y = [t || k],
              m = x.call(e, "type") ? e.type : e,
              w = x.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((o = v = l = t = t || k),
              3 !== t.nodeType &&
                8 !== t.nodeType &&
                !jt.test(m + j.event.triggered) &&
                (m.indexOf(".") > -1 &&
                  ((w = m.split(".")), (m = w.shift()), w.sort()),
                (f = m.indexOf(":") < 0 && "on" + m),
                ((e = e[j.expando]
                  ? e
                  : new j.Event(m, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = w.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = t),
                (data = null == data ? [e] : j.makeArray(data, [e])),
                (h = j.event.special[m] || {}),
                r || !h.trigger || !1 !== h.trigger.apply(t, data)))
            ) {
              if (!r && !h.noBubble && !S(t)) {
                for (
                  c = h.delegateType || m, jt.test(c + m) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  y.push(o), (l = o);
                l === (t.ownerDocument || k) &&
                  y.push(l.defaultView || l.parentWindow || n);
              }
              for (i = 0; (o = y[i++]) && !e.isPropagationStopped(); )
                (v = o),
                  (e.type = i > 1 ? c : h.bindType || m),
                  (d =
                    (oe.get(o, "events") || Object.create(null))[e.type] &&
                    oe.get(o, "handle")) && d.apply(o, data),
                  (d = f && o[f]) &&
                    d.apply &&
                    re(o) &&
                    ((e.result = d.apply(o, data)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                r ||
                  e.isDefaultPrevented() ||
                  (h._default && !1 !== h._default.apply(y.pop(), data)) ||
                  !re(t) ||
                  (f &&
                    E(t[m]) &&
                    !S(t) &&
                    ((l = t[f]) && (t[f] = null),
                    (j.event.triggered = m),
                    e.isPropagationStopped() && v.addEventListener(m, qt),
                    t[m](),
                    e.isPropagationStopped() && v.removeEventListener(m, qt),
                    (j.event.triggered = void 0),
                    l && (t[f] = l))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = j.extend(new j.Event(), n, { type: e, isSimulated: !0 });
            j.event.trigger(r, null, t);
          },
        }),
          j.fn.extend({
            trigger: function (e, data) {
              return this.each(function () {
                j.event.trigger(e, data, this);
              });
            },
            triggerHandler: function (e, data) {
              var t = this[0];
              if (t) return j.event.trigger(e, data, t, !0);
            },
          }),
          C.focusin ||
            j.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                j.event.simulate(t, e.target, j.event.fix(e));
              };
              j.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = oe.access(r, t);
                  o || r.addEventListener(e, n, !0),
                    oe.access(r, t, (o || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = oe.access(r, t) - 1;
                  o
                    ? oe.access(r, t, o)
                    : (r.removeEventListener(e, n, !0), oe.remove(r, t));
                },
              };
            });
        var Lt = n.location,
          Ht = { guid: Date.now() },
          Ot = /\?/;
        j.parseXML = function (data) {
          var e;
          if (!data || "string" != typeof data) return null;
          try {
            e = new n.DOMParser().parseFromString(data, "text/xml");
          } catch (t) {
            e = void 0;
          }
          return (
            (e && !e.getElementsByTagName("parsererror").length) ||
              j.error("Invalid XML: " + data),
            e
          );
        };
        var Pt = /\[\]$/,
          Rt = /\r?\n/g,
          Mt = /^(?:submit|button|image|reset|file)$/i,
          It = /^(?:input|select|textarea|keygen)/i;
        function Wt(e, t, n, r) {
          var o;
          if (Array.isArray(t))
            j.each(t, function (i, t) {
              n || Pt.test(e)
                ? r(e, t)
                : Wt(
                    e +
                      "[" +
                      ("object" == typeof t && null != t ? i : "") +
                      "]",
                    t,
                    n,
                    r
                  );
            });
          else if (n || "object" !== D(t)) r(e, t);
          else for (o in t) Wt(e + "[" + o + "]", t[o], n, r);
        }
        (j.param = function (a, e) {
          var t,
            s = [],
            n = function (e, t) {
              var n = E(t) ? t() : t;
              s[s.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == a) return "";
          if (Array.isArray(a) || (a.jquery && !j.isPlainObject(a)))
            j.each(a, function () {
              n(this.name, this.value);
            });
          else for (t in a) Wt(t, a[t], e, n);
          return s.join("&");
        }),
          j.fn.extend({
            serialize: function () {
              return j.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = j.prop(this, "elements");
                return e ? j.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !j(this).is(":disabled") &&
                    It.test(this.nodeName) &&
                    !Mt.test(e) &&
                    (this.checked || !we.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = j(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? j.map(n, function (e) {
                        return { name: t.name, value: e.replace(Rt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Rt, "\r\n") };
                })
                .get();
            },
          });
        var Ft = /%20/g,
          Bt = /#.*$/,
          $t = /([?&])_=[^&]*/,
          _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          zt = /^(?:GET|HEAD)$/,
          Ut = /^\/\//,
          Xt = {},
          Vt = {},
          Gt = "*/".concat("*"),
          Yt = k.createElement("a");
        function Jt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(U) || [];
            if (E(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Qt(e, t, n, r) {
          var o = {},
            l = e === Vt;
          function c(f) {
            var d;
            return (
              (o[f] = !0),
              j.each(e[f] || [], function (e, f) {
                var h = f(t, n, r);
                return "string" != typeof h || l || o[h]
                  ? l
                    ? !(d = h)
                    : void 0
                  : (t.dataTypes.unshift(h), c(h), !1);
              }),
              d
            );
          }
          return c(t.dataTypes[0]) || (!o["*"] && c("*"));
        }
        function Kt(e, t) {
          var n,
            r,
            o = j.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
          return r && j.extend(!0, e, r), e;
        }
        (Yt.href = Lt.href),
          j.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Lt.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Lt.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": j.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Kt(Kt(e, j.ajaxSettings), t) : Kt(j.ajaxSettings, e);
            },
            ajaxPrefilter: Jt(Xt),
            ajaxTransport: Jt(Vt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                o,
                l,
                c,
                f,
                d,
                h,
                v,
                i,
                y,
                s = j.ajaxSetup({}, t),
                m = s.context || s,
                x = s.context && (m.nodeType || m.jquery) ? j(m) : j.event,
                w = j.Deferred(),
                T = j.Callbacks("once memory"),
                C = s.statusCode || {},
                E = {},
                S = {},
                A = "canceled",
                N = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (h) {
                      if (!c)
                        for (c = {}; (t = _t.exec(l)); )
                          c[t[1].toLowerCase() + " "] = (
                            c[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = c[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return h ? l : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == h &&
                        ((e = S[e.toLowerCase()] = S[e.toLowerCase()] || e),
                        (E[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == h && (s.mimeType = e), this;
                  },
                  statusCode: function (map) {
                    var code;
                    if (map)
                      if (h) N.always(map[N.status]);
                      else for (code in map) C[code] = [C[code], map[code]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || A;
                    return r && r.abort(t), D(0, t), this;
                  },
                };
              if (
                (w.promise(N),
                (s.url = ((e || s.url || Lt.href) + "").replace(
                  Ut,
                  Lt.protocol + "//"
                )),
                (s.type = t.method || t.type || s.method || s.type),
                (s.dataTypes = (s.dataType || "*").toLowerCase().match(U) || [
                  "",
                ]),
                null == s.crossDomain)
              ) {
                d = k.createElement("a");
                try {
                  (d.href = s.url),
                    (d.href = d.href),
                    (s.crossDomain =
                      Yt.protocol + "//" + Yt.host !=
                      d.protocol + "//" + d.host);
                } catch (e) {
                  s.crossDomain = !0;
                }
              }
              if (
                (s.data &&
                  s.processData &&
                  "string" != typeof s.data &&
                  (s.data = j.param(s.data, s.traditional)),
                Qt(Xt, s, t, N),
                h)
              )
                return N;
              for (i in ((v = j.event && s.global) &&
                0 == j.active++ &&
                j.event.trigger("ajaxStart"),
              (s.type = s.type.toUpperCase()),
              (s.hasContent = !zt.test(s.type)),
              (o = s.url.replace(Bt, "")),
              s.hasContent
                ? s.data &&
                  s.processData &&
                  0 ===
                    (s.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (s.data = s.data.replace(Ft, "+"))
                : ((y = s.url.slice(o.length)),
                  s.data &&
                    (s.processData || "string" == typeof s.data) &&
                    ((o += (Ot.test(o) ? "&" : "?") + s.data), delete s.data),
                  !1 === s.cache &&
                    ((o = o.replace($t, "$1")),
                    (y = (Ot.test(o) ? "&" : "?") + "_=" + Ht.guid++ + y)),
                  (s.url = o + y)),
              s.ifModified &&
                (j.lastModified[o] &&
                  N.setRequestHeader("If-Modified-Since", j.lastModified[o]),
                j.etag[o] && N.setRequestHeader("If-None-Match", j.etag[o])),
              ((s.data && s.hasContent && !1 !== s.contentType) ||
                t.contentType) &&
                N.setRequestHeader("Content-Type", s.contentType),
              N.setRequestHeader(
                "Accept",
                s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                  ? s.accepts[s.dataTypes[0]] +
                      ("*" !== s.dataTypes[0] ? ", " + Gt + "; q=0.01" : "")
                  : s.accepts["*"]
              ),
              s.headers))
                N.setRequestHeader(i, s.headers[i]);
              if (s.beforeSend && (!1 === s.beforeSend.call(m, N, s) || h))
                return N.abort();
              if (
                ((A = "abort"),
                T.add(s.complete),
                N.done(s.success),
                N.fail(s.error),
                (r = Qt(Vt, s, t, N)))
              ) {
                if (((N.readyState = 1), v && x.trigger("ajaxSend", [N, s]), h))
                  return N;
                s.async &&
                  s.timeout > 0 &&
                  (f = n.setTimeout(function () {
                    N.abort("timeout");
                  }, s.timeout));
                try {
                  (h = !1), r.send(E, D);
                } catch (e) {
                  if (h) throw e;
                  D(-1, e);
                }
              } else D(-1, "No Transport");
              function D(e, t, c, d) {
                var y,
                  E,
                  S,
                  k,
                  A,
                  D = t;
                h ||
                  ((h = !0),
                  f && n.clearTimeout(f),
                  (r = void 0),
                  (l = d || ""),
                  (N.readyState = e > 0 ? 4 : 0),
                  (y = (e >= 200 && e < 300) || 304 === e),
                  c &&
                    (k = (function (s, e, t) {
                      for (
                        var n, r, o, l, c = s.contents, f = s.dataTypes;
                        "*" === f[0];

                      )
                        f.shift(),
                          void 0 === n &&
                            (n =
                              s.mimeType ||
                              e.getResponseHeader("Content-Type"));
                      if (n)
                        for (r in c)
                          if (c[r] && c[r].test(n)) {
                            f.unshift(r);
                            break;
                          }
                      if (f[0] in t) o = f[0];
                      else {
                        for (r in t) {
                          if (!f[0] || s.converters[r + " " + f[0]]) {
                            o = r;
                            break;
                          }
                          l || (l = r);
                        }
                        o = o || l;
                      }
                      if (o) return o !== f[0] && f.unshift(o), t[o];
                    })(s, N, c)),
                  !y &&
                    j.inArray("script", s.dataTypes) > -1 &&
                    (s.converters["text script"] = function () {}),
                  (k = (function (s, e, t, n) {
                    var r,
                      o,
                      l,
                      c,
                      f,
                      d = {},
                      h = s.dataTypes.slice();
                    if (h[1])
                      for (l in s.converters)
                        d[l.toLowerCase()] = s.converters[l];
                    for (o = h.shift(); o; )
                      if (
                        (s.responseFields[o] && (t[s.responseFields[o]] = e),
                        !f &&
                          n &&
                          s.dataFilter &&
                          (e = s.dataFilter(e, s.dataType)),
                        (f = o),
                        (o = h.shift()))
                      )
                        if ("*" === o) o = f;
                        else if ("*" !== f && f !== o) {
                          if (!(l = d[f + " " + o] || d["* " + o]))
                            for (r in d)
                              if (
                                (c = r.split(" "))[1] === o &&
                                (l = d[f + " " + c[0]] || d["* " + c[0]])
                              ) {
                                !0 === l
                                  ? (l = d[r])
                                  : !0 !== d[r] &&
                                    ((o = c[0]), h.unshift(c[1]));
                                break;
                              }
                          if (!0 !== l)
                            if (l && s.throws) e = l(e);
                            else
                              try {
                                e = l(e);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: l
                                    ? e
                                    : "No conversion from " + f + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: e };
                  })(s, k, N, y)),
                  y
                    ? (s.ifModified &&
                        ((A = N.getResponseHeader("Last-Modified")) &&
                          (j.lastModified[o] = A),
                        (A = N.getResponseHeader("etag")) && (j.etag[o] = A)),
                      204 === e || "HEAD" === s.type
                        ? (D = "nocontent")
                        : 304 === e
                        ? (D = "notmodified")
                        : ((D = k.state), (E = k.data), (y = !(S = k.error))))
                    : ((S = D), (!e && D) || ((D = "error"), e < 0 && (e = 0))),
                  (N.status = e),
                  (N.statusText = (t || D) + ""),
                  y ? w.resolveWith(m, [E, D, N]) : w.rejectWith(m, [N, D, S]),
                  N.statusCode(C),
                  (C = void 0),
                  v &&
                    x.trigger(y ? "ajaxSuccess" : "ajaxError", [
                      N,
                      s,
                      y ? E : S,
                    ]),
                  T.fireWith(m, [N, D]),
                  v &&
                    (x.trigger("ajaxComplete", [N, s]),
                    --j.active || j.event.trigger("ajaxStop")));
              }
              return N;
            },
            getJSON: function (e, data, t) {
              return j.get(e, data, t, "json");
            },
            getScript: function (e, t) {
              return j.get(e, void 0, t, "script");
            },
          }),
          j.each(["get", "post"], function (e, t) {
            j[t] = function (e, data, n, r) {
              return (
                E(data) && ((r = r || n), (n = data), (data = void 0)),
                j.ajax(
                  j.extend(
                    { url: e, type: t, dataType: r, data: data, success: n },
                    j.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          j.ajaxPrefilter(function (s) {
            var i;
            for (i in s.headers)
              "content-type" === i.toLowerCase() &&
                (s.contentType = s.headers[i] || "");
          }),
          (j._evalUrl = function (e, t, n) {
            return j.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                j.globalEval(e, t, n);
              },
            });
          }),
          j.fn.extend({
            wrapAll: function (html) {
              var e;
              return (
                this[0] &&
                  (E(html) && (html = html.call(this[0])),
                  (e = j(html, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (html) {
              return E(html)
                ? this.each(function (i) {
                    j(this).wrapInner(html.call(this, i));
                  })
                : this.each(function () {
                    var e = j(this),
                      t = e.contents();
                    t.length ? t.wrapAll(html) : e.append(html);
                  });
            },
            wrap: function (html) {
              var e = E(html);
              return this.each(function (i) {
                j(this).wrapAll(e ? html.call(this, i) : html);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    j(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (j.expr.pseudos.hidden = function (e) {
            return !j.expr.pseudos.visible(e);
          }),
          (j.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (j.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Zt = { 0: 200, 1223: 204 },
          en = j.ajaxSettings.xhr();
        (C.cors = !!en && "withCredentials" in en),
          (C.ajax = en = !!en),
          j.ajaxTransport(function (e) {
            var t, r;
            if (C.cors || (en && !e.crossDomain))
              return {
                send: function (o, l) {
                  var i,
                    c = e.xhr();
                  if (
                    (c.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (i in e.xhrFields) c[i] = e.xhrFields[i];
                  for (i in (e.mimeType &&
                    c.overrideMimeType &&
                    c.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    o["X-Requested-With"] ||
                    (o["X-Requested-With"] = "XMLHttpRequest"),
                  o))
                    c.setRequestHeader(i, o[i]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          r =
                          c.onload =
                          c.onerror =
                          c.onabort =
                          c.ontimeout =
                          c.onreadystatechange =
                            null),
                        "abort" === e
                          ? c.abort()
                          : "error" === e
                          ? "number" != typeof c.status
                            ? l(0, "error")
                            : l(c.status, c.statusText)
                          : l(
                              Zt[c.status] || c.status,
                              c.statusText,
                              "text" !== (c.responseType || "text") ||
                                "string" != typeof c.responseText
                                ? { binary: c.response }
                                : { text: c.responseText },
                              c.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (c.onload = t()),
                    (r = c.onerror = c.ontimeout = t("error")),
                    void 0 !== c.onabort
                      ? (c.onabort = r)
                      : (c.onreadystatechange = function () {
                          4 === c.readyState &&
                            n.setTimeout(function () {
                              t && r();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    c.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          j.ajaxPrefilter(function (s) {
            s.crossDomain && (s.contents.script = !1);
          }),
          j.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (text) {
                return j.globalEval(text), text;
              },
            },
          }),
          j.ajaxPrefilter("script", function (s) {
            void 0 === s.cache && (s.cache = !1),
              s.crossDomain && (s.type = "GET");
          }),
          j.ajaxTransport("script", function (s) {
            var script, e;
            if (s.crossDomain || s.scriptAttrs)
              return {
                send: function (t, n) {
                  (script = j("<script>")
                    .attr(s.scriptAttrs || {})
                    .prop({ charset: s.scriptCharset, src: s.url })
                    .on(
                      "load error",
                      (e = function (t) {
                        script.remove(),
                          (e = null),
                          t && n("error" === t.type ? 404 : 200, t.type);
                      })
                    )),
                    k.head.appendChild(script[0]);
                },
                abort: function () {
                  e && e();
                },
              };
          });
        var body,
          tn = [],
          nn = /(=)\?(?=&|$)|\?\?/;
        j.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = tn.pop() || j.expando + "_" + Ht.guid++;
            return (this[e] = !0), e;
          },
        }),
          j.ajaxPrefilter("json jsonp", function (s, e, t) {
            var r,
              o,
              l,
              c =
                !1 !== s.jsonp &&
                (nn.test(s.url)
                  ? "url"
                  : "string" == typeof s.data &&
                    0 ===
                      (s.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    nn.test(s.data) &&
                    "data");
            if (c || "jsonp" === s.dataTypes[0])
              return (
                (r = s.jsonpCallback =
                  E(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback),
                c
                  ? (s[c] = s[c].replace(nn, "$1" + r))
                  : !1 !== s.jsonp &&
                    (s.url += (Ot.test(s.url) ? "&" : "?") + s.jsonp + "=" + r),
                (s.converters["script json"] = function () {
                  return l || j.error(r + " was not called"), l[0];
                }),
                (s.dataTypes[0] = "json"),
                (o = n[r]),
                (n[r] = function () {
                  l = arguments;
                }),
                t.always(function () {
                  void 0 === o ? j(n).removeProp(r) : (n[r] = o),
                    s[r] && ((s.jsonpCallback = e.jsonpCallback), tn.push(r)),
                    l && E(o) && o(l[0]),
                    (l = o = void 0);
                }),
                "script"
              );
          }),
          (C.createHTMLDocument =
            (((body = k.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === body.childNodes.length)),
          (j.parseHTML = function (data, e, t) {
            return "string" != typeof data
              ? []
              : ("boolean" == typeof e && ((t = e), (e = !1)),
                e ||
                  (C.createHTMLDocument
                    ? (((base = (e =
                        k.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = k.location.href),
                      e.head.appendChild(base))
                    : (e = k)),
                (r = !t && []),
                (n = I.exec(data))
                  ? [e.createElement(n[1])]
                  : ((n = Ne([data], e, r)),
                    r && r.length && j(r).remove(),
                    j.merge([], n.childNodes)));
            var base, n, r;
          }),
          (j.fn.load = function (e, t, n) {
            var r,
              o,
              l,
              c = this,
              f = e.indexOf(" ");
            return (
              f > -1 && ((r = kt(e.slice(f))), (e = e.slice(0, f))),
              E(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (o = "POST"),
              c.length > 0 &&
                j
                  .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (l = arguments),
                      c.html(r ? j("<div>").append(j.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        c.each(function () {
                          n.apply(this, l || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (j.expr.pseudos.animated = function (e) {
            return j.grep(j.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (j.offset = {
            setOffset: function (e, t, i) {
              var n,
                r,
                o,
                l,
                c,
                f,
                d = j.css(e, "position"),
                h = j(e),
                v = {};
              "static" === d && (e.style.position = "relative"),
                (c = h.offset()),
                (o = j.css(e, "top")),
                (f = j.css(e, "left")),
                ("absolute" === d || "fixed" === d) &&
                (o + f).indexOf("auto") > -1
                  ? ((l = (n = h.position()).top), (r = n.left))
                  : ((l = parseFloat(o) || 0), (r = parseFloat(f) || 0)),
                E(t) && (t = t.call(e, i, j.extend({}, c))),
                null != t.top && (v.top = t.top - c.top + l),
                null != t.left && (v.left = t.left - c.left + r),
                "using" in t
                  ? t.using.call(e, v)
                  : ("number" == typeof v.top && (v.top += "px"),
                    "number" == typeof v.left && (v.left += "px"),
                    h.css(v));
            },
          }),
          j.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (i) {
                      j.offset.setOffset(this, e, i);
                    });
              var rect,
                t,
                n = this[0];
              return n
                ? n.getClientRects().length
                  ? ((rect = n.getBoundingClientRect()),
                    (t = n.ownerDocument.defaultView),
                    {
                      top: rect.top + t.pageYOffset,
                      left: rect.left + t.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 };
                if ("fixed" === j.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === j.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((o = j(e).offset()).top += j.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (o.left += j.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - o.top - j.css(r, "marginTop", !0),
                  left: t.left - o.left - j.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === j.css(e, "position");

                )
                  e = e.offsetParent;
                return e || de;
              });
            },
          }),
          j.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              j.fn[e] = function (r) {
                return K(
                  this,
                  function (e, r, o) {
                    var l;
                    if (
                      (S(e) ? (l = e) : 9 === e.nodeType && (l = e.defaultView),
                      void 0 === o)
                    )
                      return l ? l[t] : e[r];
                    l
                      ? l.scrollTo(n ? l.pageXOffset : o, n ? o : l.pageYOffset)
                      : (e[r] = o);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          j.each(["top", "left"], function (e, t) {
            j.cssHooks[t] = Ke(C.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Qe(e, t)), Ve.test(n) ? j(e).position()[t] + "px" : n
                );
            });
          }),
          j.each({ Height: "height", Width: "width" }, function (e, t) {
            j.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                j.fn[r] = function (o, l) {
                  var c = arguments.length && (n || "boolean" != typeof o),
                    f = n || (!0 === o || !0 === l ? "margin" : "border");
                  return K(
                    this,
                    function (t, n, o) {
                      var l;
                      return S(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((l = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            l["scroll" + e],
                            t.body["offset" + e],
                            l["offset" + e],
                            l["client" + e]
                          ))
                        : void 0 === o
                        ? j.css(t, n, f)
                        : j.style(t, n, o, f);
                    },
                    t,
                    c ? o : void 0,
                    c
                  );
                };
              }
            );
          }),
          j.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              j.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          j.fn.extend({
            bind: function (e, data, t) {
              return this.on(e, null, data, t);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, data, n) {
              return this.on(t, e, data, n);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          j.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              j.fn[t] = function (data, e) {
                return arguments.length > 0
                  ? this.on(t, null, data, e)
                  : this.trigger(t);
              };
            }
          );
        var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (j.proxy = function (e, t) {
          var n, r, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), E(e)))
            return (
              (r = f.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, r.concat(f.call(arguments)));
              }).guid = e.guid =
                e.guid || j.guid++),
              o
            );
        }),
          (j.holdReady = function (e) {
            e ? j.readyWait++ : j.ready(!0);
          }),
          (j.isArray = Array.isArray),
          (j.parseJSON = JSON.parse),
          (j.nodeName = M),
          (j.isFunction = E),
          (j.isWindow = S),
          (j.camelCase = ne),
          (j.type = D),
          (j.now = Date.now),
          (j.isNumeric = function (e) {
            var t = j.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (j.trim = function (text) {
            return null == text ? "" : (text + "").replace(rn, "");
          }),
          void 0 ===
            (r = function () {
              return j;
            }.apply(t, [])) || (e.exports = r);
        var on = n.jQuery,
          an = n.$;
        return (
          (j.noConflict = function (e) {
            return (
              n.$ === j && (n.$ = an), e && n.jQuery === j && (n.jQuery = on), j
            );
          }),
          void 0 === o && (n.jQuery = n.$ = j),
          j
        );
      });
    },
  },
]);
