(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  [
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      });
      n(11), n(10), n(8), n(9), n(926), n(18), n(20);
      var o = n(3),
        r = (n(26), n(65)),
        l =
          (n(24),
          n(14),
          n(930),
          n(23),
          n(115),
          n(54),
          n(55),
          n(6),
          n(27),
          n(131)),
        c = n.n(l),
        d = n(5);
      function m(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function h(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? m(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : m(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var f = new Date(),
        y = f.getFullYear(),
        v = f.getMonth() + 1,
        _ = f.getDate();
      _ < 10 && (_ = "0".concat(_)), v < 10 && (v = "0".concat(v));
      var k = {
        publicYear: y,
        publicMonth: v,
        publicDay: _,
        currentDay: "".concat(y, "-").concat(v, "-").concat(_),
        accAdd: function (e, t) {
          var n, o, r;
          try {
            n = e.toString().split(".")[1].length;
          } catch (e) {
            n = 0;
          }
          try {
            o = t.toString().split(".")[1].length;
          } catch (e) {
            o = 0;
          }
          return (
            (r = Math.pow(10, Math.max(n, o))), Math.floor(e * r + t * r) / r
          );
        },
        setLStore: function (e, content) {
          e &&
            navigator.cookieEnabled &&
            ("string" != typeof content && (content = JSON.stringify(content)),
            window.localStorage.setItem(e, content));
        },
        getLStore: function (e) {
          if (e)
            return navigator.cookieEnabled
              ? window.localStorage.getItem(e)
              : void 0;
        },
        getCookie: function (e) {
          var t,
            n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
          return (t = document.cookie.match(n)) ? unescape(t[2]) : null;
        },
        formatNum: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return (function (e) {
            var n = t,
              o = !((e = (e || 0) + "") < 0),
              r = e.split(".");
            if (!r[1]) {
              r[1] = "";
              for (var i = 0; i < n; i++) r[1] += "0";
            }
            if (
              (r[1] && r[1].length > n && (r[1] = r[1].slice(0, n)),
              r[1] && r[1].length < n)
            ) {
              var l = n - r[1].length;
              for (i = 0; i < l; i++) r[1] += "0";
            }
            var c = "",
              d = 0;
            r[0] = Math.abs(r[0]) + "";
            for (i = r[0].length - 1; i >= 0; i--)
              d++, (c = r[0].charAt(i) + c), d % 3 || 0 == i || (c = "," + c);
            return (
              o || (c = "-" + c), (r[0] = c), (e = 0 == n ? r[0] : r.join("."))
            );
          })(e);
        },
        ab2str: function (e) {
          return String.fromCharCode.apply(null, new Uint8Array(e));
        },
        b64_to_utf8: function (e) {
          return decodeURIComponent(escape(window.atob(e)));
        },
        calculate1X2: function (e) {
          return e >= 2
            ? "+" + Math.floor(100 * (e - 1))
            : "-" + Math.floor(100 / Math.abs(e - 1));
        },
        calculateOV_UN: function (e) {
          return e >= 2
            ? "+" + Math.floor(100 * e)
            : "-" + Math.floor(100 / Math.abs(e));
        },
        ConverOdd: function (e, t) {
          var n = this;
          return (
            (e.oneXtwoDe = ["", "", ""]),
            (e.oneXtwoAm = ["", "", ""]),
            (e.overUnderDe = ["", "", ""]),
            (e.overUnderAm = ["", "", ""]),
            t &&
              t.length &&
              (t[1].odd &&
                t[1].odd.length &&
                ((e.oneXtwoAm = t[1].odd.map(function (e) {
                  return n.calculate1X2(e);
                })),
                (e.oneXtwoDe = t[1].odd.map(function (e) {
                  return n.formatNum(e);
                }))),
              t[2].odd &&
                t[2].odd.length &&
                ((e.overUnderAm = t[2].odd.map(function (e, t) {
                  return n.calculateOV_UN(e);
                })),
                (e.overUnderDe = t[2].odd.map(function (e, t) {
                  return 1 == t
                    ? parseFloat(n.formatNum(e))
                    : ((e = +e + 1), n.formatNum(e));
                })))),
            e
          );
        },
        sortby: function (e, dt, t) {
          for (
            var n = function (e, t, dt, n) {
                "int" == dt
                  ? ((e = parseInt(e, 10)), (t = parseInt(t, 10)))
                  : "float" == dt && ((e = parseFloat(e)), (t = parseFloat(t)));
                var o = 0;
                return (
                  e < t && (o = 1),
                  e > t && (o = -1),
                  "desc" == n && (o = 0 - o),
                  o
                );
              },
              o = [],
              i = 0;
            i < e.length;
            i++
          )
            o[o.length] = e[i];
          for (i = 0; i < o.length; i++) {
            for (
              var r = i, l = "" !== e ? o[i][e] : o[i], c = i + 1;
              c < o.length;
              c++
            ) {
              var d = "" !== e ? o[c][e] : o[c];
              n(l, d, dt, t) < 0 && ((r = c), (l = d));
            }
            if (r > i) {
              var m = o[r];
              (o[r] = o[i]), (o[i] = m);
            }
          }
          return o;
        },
        sortByName: function (e, t, n, o) {
          return (
            e.sort(function (a, b) {
              if (
                ("string" == typeof a && (a = n[a]),
                "string" == typeof b && (b = n[b]),
                !a || !b)
              )
                return 0;
              var e = a.competition.id,
                r = (t[e] && t[e].country) || {},
                l = t[e] ? t[e].weight : 0,
                c = r.name;
              if (!c) return 1;
              var d = b.competition.id,
                m = (t[d] && t[d].country) || {},
                h = t[d] ? t[d].weight : 0,
                f = m.name;
              if (!f) return -1;
              if (e == d) {
                if (a.matchTime != b.matchTime)
                  return a.matchTime - b.matchTime;
                try {
                  return (a.homeName || o[a.homeTeam.id].name) >
                    (b.homeName || o[b.homeTeam.id].name)
                    ? 1
                    : -1;
                } catch (e) {}
              }
              return c > f ? 1 : c < f ? -1 : l - h;
            }),
            e
          );
        },
        sortByTime: function (e, t, n) {
          return (
            e.sort(function (a, b) {
              return (
                "string" == typeof a && (a = n[a]),
                "string" == typeof b && (b = n[b]),
                a && b
                  ? a.matchTime == b.matchTime
                    ? (t[a.competition.id] ? t[a.competition.id].weight : 0) -
                      (t[b.competition.id] ? t[b.competition.id].weight : 0)
                    : a.matchTime - b.matchTime
                  : 0
              );
            }),
            e
          );
        },
        sortByName_bk: function (e, t) {
          return 0 == e.length
            ? []
            : e.sort(function (a, b) {
                var e = a.competition.country || {},
                  n = a.competition.weight || 0,
                  o = e.name,
                  r = a.competition.isHot || !1;
                if (!o) return 1;
                var l = b.competition.country || {},
                  d = b.competition.weight || 0,
                  m = l.name,
                  h = b.competition.isHot || !1;
                return m
                  ? (t && ((r = !1), (h = !1)),
                    (1 == r && 1 == h) || (0 == r && 0 == h)
                      ? o != m
                        ? o.localeCompare(m, c.a.get("locale"))
                        : n - d
                      : 1 == r && 0 == h
                      ? -1
                      : 0 == r && 1 == h
                      ? 1
                      : void 0)
                  : -1;
              });
        },
        sortByTime_bk: function (e, t) {
          return 0 == e.length
            ? []
            : e.sort(function (a, b) {
                var e = a.competition.isHot || !1,
                  n = b.competition.isHot || !1;
                if (
                  (t && ((e = !1), (n = !1)),
                  (1 == e && 1 == n) || (0 == e && 0 == n))
                ) {
                  if (a.list[0].matchTime != b.list[0].matchTime)
                    return a.list[0].matchTime - b.list[0].matchTime;
                  var o = a.competition.country || {},
                    r = a.competition.weight || 0,
                    l = o.name,
                    d = b.competition.country || {},
                    m = b.competition.weight || 0,
                    h = d.name;
                  return r != m ? m - r : l.localeCompare(h, c.a.get("locale"));
                }
                return 1 == e && 0 == n ? -1 : 0 == e && 1 == n ? 1 : void 0;
              });
        },
        time_to_sec: function (time) {
          time = time || "";
          var e = Number(time.split(":")[0]),
            t = Number(time.split(":")[1]);
          return -(e < 0 ? 3600 * e - 60 * t : 3600 * e + 60 * t);
        },
        getTickTime: function (e, time) {
          var t;
          if (null !== (t = e.times) && void 0 !== t && t.tmrUpdated && time) {
            var n = e.times.tmrUpdated,
              o = e.statusId,
              r = 0,
              l = new Date().getTime() / 1e3 - time - n;
            return (r = 4 == o ? l / 60 + 46 : l / 60 + 1), parseInt(r);
          }
        },
        formatSubStatus: function (e, t, time) {
          var n = e.statusId || 1;
          if (t[n]) return t[n];
          if (2 == n) {
            var a = this.getTickTime(e, time);
            return a > 45 ? "45+" : a;
          }
          if (4 == n) {
            var o = this.getTickTime(e, time);
            return o > 90 ? "90+" : o;
          }
        },
        calculateTimezone: function (e) {
          var t = this.time_to_sec(e);
          return 60 * new Date().getTimezoneOffset() - t;
        },
        DateZoneTrnf: function (e, t) {
          return new Date(
            1e3 * (this.calculateTimezone(e) + new Date(t).getTime() / 1e3)
          );
        },
        formatTime: function (e) {
          var t =
              "object" == Object(r.a)(e)
                ? e
                : (e || "").toString().length <= 10
                ? new Date(1e3 * e)
                : new Date(e),
            time = t.format("hh:mm"),
            n = t.format("dd"),
            o = "0" + t.getMonth();
          return "".concat(n, " ").concat(this.$t(o), " ").concat(time);
        },
        formatTimeDMY: function (e, t) {
          var n =
              "object" == Object(r.a)(e)
                ? e
                : (e || "").toString().length <= 10
                ? new Date(1e3 * e)
                : new Date(e),
            o = n.format("dd"),
            l = "0" + n.getMonth(),
            c = n.getFullYear(),
            d = t ? this.$i18n.messages[t][l] || "" : this.$t(l) || "";
          return "".concat(o, " ").concat(d, " ").concat(c);
        },
        getLastMonthAndDay: function (time) {
          var e = new Date(time),
            t = e.getFullYear(),
            n = e.getMonth();
          return 0 == n && ((n = 12), (t -= 1)), new Date(t, n, 0).getTime();
        },
        strForDate: function (e) {
          return (e || "")
            .toString()
            .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
        },
        getCurrentMonthFirstAndLastDay: function (e) {
          var t = new Date(e),
            n = t.getFullYear(),
            o = t.getMonth();
          return {
            firstDay: new Date(n, o, 1).getTime(),
            lastDay: new Date(n, o + 1, 1).getTime(),
          };
        },
        getNextMonthAndDay: function (time) {
          var e = new Date(time),
            t = e.getFullYear(),
            n = e.getMonth() + 2;
          return 13 == n && ((n = 1), (t += 1)), new Date(t, n, 0).getTime();
        },
        array_to_object: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "id",
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = {};
          return (
            (e || []).forEach(function (element) {
              (o[element[t]] = element), "function" == typeof n && n(element);
            }),
            o
          );
        },
        isToday: function (time, e) {
          var t = new Date(time),
            n = e ? this.DateZoneTrnf(e, new Date()) : new Date();
          return t.setHours(0, 0, 0, 0) == n.setHours(0, 0, 0, 0);
        },
        isDef: function (e) {
          return null != e;
        },
        generateTime: function (e) {
          var t = e.countdown,
            n = e.tmr_ticking,
            o = e.tmr_secs,
            r = void 0 === o ? 0 : o,
            l = e.tmr_mins,
            c = void 0 === l ? 0 : l,
            d = e.tmr_updated,
            m = e.diffe;
          m = Math.round(m ? 1e3 * m : 0);
          var h = { mins: "", secs: "" },
            f = new Date().getTime() - m,
            y = d ? f - d : 0,
            v = 60 * c * 1e3 + 1e3 * r;
          v < 0 && (v = -1);
          var _ = n ? (t ? v - y : v + y) : v;
          return (
            (h.mins = (_ / 6e4) >> 0),
            (h.secs = ((_ - 6e4 * h.mins) / 1e3) >> 0),
            (h.mins = h.mins < 10 && h.mins >= 0 ? "0" + h.mins : h.mins),
            (h.secs = h.secs < 10 && h.secs >= 0 ? "0" + h.secs : h.secs),
            h
          );
        },
        localstorage_set: function (data, e, t) {
          var n = {};
          (n[e] = t),
            navigator.cookieEnabled &&
              (localStorage[data]
                ? (localStorage[data] = JSON.stringify(
                    h(h({}, JSON.parse(localStorage[data])), n)
                  ))
                : (localStorage[data] = JSON.stringify(n)));
        },
        colorRgba: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
            o = ((e = e || "") || "").toLowerCase();
          if (o && n.test(o)) {
            if (4 === o.length) {
              for (var r = "#", i = 1; i < 4; i += 1)
                r += o.slice(i, i + 1).concat(o.slice(i, i + 1));
              o = r;
            }
            for (var l = [], c = 1; c < 7; c += 2)
              l.push(parseInt("0x" + o.slice(c, c + 2)));
            return "rgba(" + l.join(",") + "," + t + ")";
          }
          var d = k.rgbToHex(o);
          return k.colorRgba(d.hex, t);
        },
        rgbToHex: function (e) {
          var t,
            g,
            b,
            a,
            n = e
              .replace(/\s+/g, "")
              .match(/rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/);
          return n
            ? ((t =
                1 == (t = parseInt(n[1]).toString(16)).length ? "0" + t : t),
              (g = 1 == (g = (+n[2]).toString(16)).length ? "0" + g : g),
              (b = 1 == (b = (+n[3]).toString(16)).length ? "0" + b : b),
              (a = 100 * +(n[5] ? n[5] : 1)),
              { hex: "#" + t + g + b, alpha: Math.ceil(a) })
            : { hex: e, alpha: 100 };
        },
        deepObjectMerge: function (e, t) {
          if (
            "[object Object]" === Object.prototype.toString.call(e) &&
            "[object Object]" === Object.prototype.toString.call(t)
          )
            for (var n in t)
              e[n] ? (e[n] = k.deepObjectMerge(e[n], t[n])) : (e[n] = t[n]);
          else
            e =
              ("[object Array]" === Object.prototype.toString.call(e) &&
                Object.prototype.toString.call(t),
              t);
          return e;
        },
        bkShirtNum: function (e) {
          return "" === e || void 0 === e ? "-" : e;
        },
        getMatchTotalScores: function (e, t) {
          try {
            var n = 0,
              o = 0;
            if ("basketball" == t)
              (n = e.homeScores.slice(0, 5).reduce(function (a, b) {
                return a + b;
              })),
                (o = e.awayScores.slice(0, 5).reduce(function (a, b) {
                  return a + b;
                }));
            else if ("tennis" == t) {
              var r,
                l =
                  null === (r = e.commonScore) || void 0 === r ? void 0 : r.ft;
              l
                ? ((n = l[0]), (o = l[1]))
                : e.homeScores.map(function (s, t) {
                    t % 2 == 0 &&
                      (0 !== s || 0 !== e.awayScores[t]) &&
                      e.statusId > t + 2 &&
                      (s > e.awayScores[t] ? n++ : o++);
                  });
            } else if ("icehockey" == t) {
              var c,
                d,
                m = this.getScores(e),
                h = m.homeScores,
                f = m.awayScores;
              (n =
                (null !== (c = e.ihScores) && void 0 !== c && c.ft
                  ? e.ihScores.ft[0]
                  : h.reduce(function (a, b) {
                      return a + b;
                    })) || 0),
                (o =
                  (null !== (d = e.ihScores) && void 0 !== d && d.ft
                    ? e.ihScores.ft[1]
                    : f.reduce(function (a, b) {
                        return a + b;
                      })) || 0);
            } else if ("volleyball" == t) {
              var y, v;
              (n =
                null === (y = e.vbScores) || void 0 === y ? void 0 : y.pt[0]),
                (o =
                  null === (v = e.vbScores) || void 0 === v ? void 0 : v.pt[1]);
            } else if ("tabletennis" == t)
              (e.ttScores.ft && e.ttScores.ft.length) ||
                (p1[0] > p1[1] ? n++ : p1[0] < p1[1] && o++,
                p2[0] > p2[1] ? n++ : p2[0] < p2[1] && o++,
                p3[0] > p3[1] ? n++ : p3[0] < p3[1] && o++,
                p4[0] > p4[1] ? n++ : p4[0] < p4[1] && o++,
                p5[0] > p5[1] ? n++ : p5[0] < p5[1] && o++,
                p6[0] > p6[1] ? n++ : p6[0] < p6[1] && o++,
                p7[0] > p7[1] ? n++ : p7[0] < p7[1] && o++),
                (n = e.ttScores.ft ? e.ttScores.ft[0] : n),
                (o = e.ttScores.ft ? e.ttScores.ft[1] : o);
            else if ("baseball" == t) {
              var _,
                k = (null === (_ = e.bsScores) || void 0 === _
                  ? void 0
                  : _.ft) || [0, 0];
              (n = k[0]), (o = k[1]);
            } else if ("badminton" == t) {
              var A,
                j = (null === (A = e.bmScores) || void 0 === A
                  ? void 0
                  : A.ft) || [0, 0];
              (n = j[0]), (o = j[1]);
            } else if ("amfootball" == t) {
              var w,
                S = (null === (w = e.afScores) || void 0 === w
                  ? void 0
                  : w.ft) || [0, 0];
              (n = S[0]), (o = S[1]);
            } else if ("cricket" == t) {
              var T,
                M = (null === (T = e.ckScores) || void 0 === T
                  ? void 0
                  : T.ft) || [0, 0];
              (n = M[0]), (o = M[1]);
            } else if ("handball" == t || "waterpolo" == t || "snooker" == t) {
              var x,
                O = (null === (x = e.commonScore) || void 0 === x
                  ? void 0
                  : x.ft) || [0, 0];
              (n = O[0]), (o = O[1]);
            } else if ("esports" == t) {
              var I = [e.homeScore || 0, e.awayScore || 0];
              (n = I[0]), (o = I[1]);
            } else if ("football" == t) {
              var D = [
                e.homeScores[5] || e.homeScores[0],
                e.awayScores[5] || e.awayScores[0],
              ];
              (n = D[0]), (o = D[1]);
            }
            return { homeT: n, awayT: o };
          } catch (e) {
            return { homeT: 0, awayT: 0 };
          }
        },
        getScores: function (e, t) {
          if ("icehockey" == t) {
            var n,
              o,
              r,
              l,
              c,
              d,
              m = (null === (n = e.ihScores) || void 0 === n
                ? void 0
                : n.p1) || [0, 0],
              h = (null === (o = e.ihScores) || void 0 === o
                ? void 0
                : o.p2) || [0, 0],
              f = (null === (r = e.ihScores) || void 0 === r
                ? void 0
                : r.p3) || [0, 0],
              y = (null === (l = e.ihScores) || void 0 === l
                ? void 0
                : l.ot) || [0, 0],
              v = (null === (c = e.ihScores) || void 0 === c
                ? void 0
                : c.ap) || [0, 0],
              _ = (null === (d = e.ihScores) || void 0 === d
                ? void 0
                : d.ft) || [0, 0];
            return (
              m.length || (m = [0, 0]),
              h.length || (h = [0, 0]),
              f.length || (f = [0, 0]),
              y.length || (y = [0, 0]),
              v.length || (v = [0, 0]),
              _.length || (_ = [0, 0]),
              {
                homeScores: [m[0], h[0], f[0], y[0], v[0]],
                awayScores: [m[1], h[1], f[1], y[1], v[1]],
                titles: ["P1", "P2", "P3", "OT", "AP"],
              }
            );
          }
          if ("volleyball" == t) {
            var k,
              A,
              j,
              w,
              S,
              T,
              M = (null === (k = e.vbScores) || void 0 === k
                ? void 0
                : k.p1) || [0, 0],
              x = (null === (A = e.vbScores) || void 0 === A
                ? void 0
                : A.p2) || [0, 0],
              O = (null === (j = e.vbScores) || void 0 === j
                ? void 0
                : j.p3) || [0, 0],
              I = (null === (w = e.vbScores) || void 0 === w
                ? void 0
                : w.p4) || [0, 0],
              D = (null === (S = e.vbScores) || void 0 === S
                ? void 0
                : S.p5) || [0, 0],
              C = (null === (T = e.vbScores) || void 0 === T
                ? void 0
                : T.pt) || [0, 0];
            return (
              M.length || (M = [0, 0]),
              x.length || (x = [0, 0]),
              O.length || (O = [0, 0]),
              I.length || (I = [0, 0]),
              D.length || (D = [0, 0]),
              C.length || (C = [0, 0]),
              {
                homeScores: [M[0], x[0], O[0], I[0], D[0]],
                awayScores: [M[1], x[1], O[1], I[1], D[1]],
                titles: ["S1", "S2", "S3", "S4", "S5"],
              }
            );
          }
          if ("tabletennis" == t) {
            var P,
              E,
              z,
              L,
              R,
              B,
              N,
              F = (null === (P = e.ttScores) || void 0 === P
                ? void 0
                : P.p1) || [0, 0],
              U = (null === (E = e.ttScores) || void 0 === E
                ? void 0
                : E.p2) || [0, 0],
              H = (null === (z = e.ttScores) || void 0 === z
                ? void 0
                : z.p3) || [0, 0],
              W = (null === (L = e.ttScores) || void 0 === L
                ? void 0
                : L.p4) || [0, 0],
              V = (null === (R = e.ttScores) || void 0 === R
                ? void 0
                : R.p5) || [0, 0],
              G = (null === (B = e.ttScores) || void 0 === B
                ? void 0
                : B.p6) || [0, 0],
              K = (null === (N = e.ttScores) || void 0 === N
                ? void 0
                : N.p7) || [0, 0];
            return (
              F.length || (F = [0, 0]),
              U.length || (U = [0, 0]),
              H.length || (H = [0, 0]),
              W.length || (W = [0, 0]),
              V.length || (V = [0, 0]),
              G.length || (G = [0, 0]),
              K.length || (K = [0, 0]),
              {
                homeScores: [F[0], U[0], H[0], W[0], V[0], G[0], K[0]],
                awayScores: [F[1], U[1], H[1], W[1], V[1], G[1], K[1]],
                titles: ["S1", "S2", "S3", "S4", "S5", "S6", "S7"],
              }
            );
          }
          if ("baseball" == t) {
            var Q,
              $,
              J,
              Y,
              Z,
              X,
              ee,
              te,
              ae,
              ne,
              ie = (null === (Q = e.bsScores) || void 0 === Q
                ? void 0
                : Q.p1) || [0, 0],
              oe = (null === ($ = e.bsScores) || void 0 === $
                ? void 0
                : $.p2) || [0, 0],
              re = (null === (J = e.bsScores) || void 0 === J
                ? void 0
                : J.p3) || [0, 0],
              se = (null === (Y = e.bsScores) || void 0 === Y
                ? void 0
                : Y.p4) || [0, 0],
              le = (null === (Z = e.bsScores) || void 0 === Z
                ? void 0
                : Z.p5) || [0, 0],
              ce = (null === (X = e.bsScores) || void 0 === X
                ? void 0
                : X.p6) || [0, 0],
              pe = (null === (ee = e.bsScores) || void 0 === ee
                ? void 0
                : ee.p7) || [0, 0],
              de = (null === (te = e.bsScores) || void 0 === te
                ? void 0
                : te.p8) || [0, 0],
              ue = (null === (ae = e.bsScores) || void 0 === ae
                ? void 0
                : ae.p9) || [0, 0],
              me = (null === (ne = e.bsScores) || void 0 === ne
                ? void 0
                : ne.ot) || [0, 0];
            return (
              ie.length || (ie = [0, 0]),
              oe.length || (oe = [0, 0]),
              re.length || (re = [0, 0]),
              se.length || (se = [0, 0]),
              le.length || (le = [0, 0]),
              ce.length || (ce = [0, 0]),
              pe.length || (pe = [0, 0]),
              de.length || (de = [0, 0]),
              ue.length || (ue = [0, 0]),
              me.length || (me = [0, 0]),
              {
                homeScores: [
                  ie[0],
                  oe[0],
                  re[0],
                  se[0],
                  le[0],
                  ce[0],
                  pe[0],
                  de[0],
                  ue[0],
                  me[0],
                ],
                awayScores: [
                  ie[1],
                  oe[1],
                  re[1],
                  se[1],
                  le[1],
                  ce[1],
                  pe[1],
                  de[1],
                  ue[1],
                  me[1],
                ],
                titles: [
                  "I1",
                  "I2",
                  "I3",
                  "I4",
                  "I5",
                  "I6",
                  "I7",
                  "I8",
                  "I9",
                  "EI",
                ],
              }
            );
          }
          if ("badminton" == t) {
            var he,
              fe,
              ye,
              ge,
              be,
              ve = (null === (he = e.bmScores) || void 0 === he
                ? void 0
                : he.p1) || [0, 0],
              _e = (null === (fe = e.bmScores) || void 0 === fe
                ? void 0
                : fe.p2) || [0, 0],
              ke = (null === (ye = e.bmScores) || void 0 === ye
                ? void 0
                : ye.p3) || [0, 0],
              Ae = (null === (ge = e.bmScores) || void 0 === ge
                ? void 0
                : ge.p4) || [0, 0],
              je = (null === (be = e.bmScores) || void 0 === be
                ? void 0
                : be.p5) || [0, 0];
            return (
              ve.length || (ve = [0, 0]),
              _e.length || (_e = [0, 0]),
              ke.length || (ke = [0, 0]),
              Ae.length || (Ae = [0, 0]),
              je.length || (je = [0, 0]),
              {
                homeScores: [ve[0], _e[0], ke[0], Ae[0], je[0]],
                awayScores: [ve[1], _e[1], ke[1], Ae[1], je[1]],
                titles: ["S1", "S2", "S3", "S4", "S5"],
              }
            );
          }
          if ("amfootball" == t) {
            var we,
              Se,
              Te,
              Me,
              xe,
              Oe,
              Ie = (null === (we = e.afScores) || void 0 === we
                ? void 0
                : we.p1) || [0, 0],
              De = (null === (Se = e.afScores) || void 0 === Se
                ? void 0
                : Se.p2) || [0, 0],
              Ce = (null === (Te = e.afScores) || void 0 === Te
                ? void 0
                : Te.p3) || [0, 0],
              Pe = (null === (Me = e.afScores) || void 0 === Me
                ? void 0
                : Me.p4) || [0, 0],
              Ee = (null === (xe = e.afScores) || void 0 === xe
                ? void 0
                : xe.ot) || [0, 0],
              ze = (null === (Oe = e.afScores) || void 0 === Oe
                ? void 0
                : Oe.ft) || [0, 0];
            return (
              Ie.length || (Ie = [0, 0]),
              De.length || (De = [0, 0]),
              Ce.length || (Ce = [0, 0]),
              Pe.length || (Pe = [0, 0]),
              Ee.length || (Ee = [0, 0]),
              ze.length || (ze = [0, 0]),
              {
                homeScores: [Ie[0], De[0], Ce[0], Pe[0], Ee[0]],
                awayScores: [Ie[1], De[1], Ce[1], Pe[1], Ee[1]],
                titles: ["Q1", "Q2", "Q3", "Q4", "OT"],
              }
            );
          }
          if ("cricket" == t) {
            var Le,
              Re,
              Be,
              Ne,
              Fe,
              Ue = (null === (Le = e.ckScores) || void 0 === Le
                ? void 0
                : Le.p1) || [0, 0],
              He = (null === (Re = e.ckScores) || void 0 === Re
                ? void 0
                : Re.p2) || [0, 0],
              qe = (null === (Be = e.ckScores) || void 0 === Be
                ? void 0
                : Be.ft) || [0, 0];
            Ue.length || (Ue = [0, 0]),
              He.length || (He = [0, 0]),
              qe.length || (qe = [0, 0]);
            var We = [],
              Ve = [];
            return (
              null !== (Ne = e.ckScores) &&
              void 0 !== Ne &&
              null !== (Fe = Ne.innings) &&
              void 0 !== Fe &&
              Fe.length
                ? e.ckScores.innings.map(function (s) {
                    var e, t;
                    1 == s.belong
                      ? We.push(
                          (null === (e = s.overs) || void 0 === e
                            ? void 0
                            : e.toFixed(1)) || 0,
                          s.runs || 0,
                          s.wickets || 0
                        )
                      : Ve.push(
                          (null === (t = s.overs) || void 0 === t
                            ? void 0
                            : t.toFixed(1)) || 0,
                          s.runs || 0,
                          s.wickets || 0
                        );
                  })
                : (We.push(0, 0, 0), Ve.push(0, 0, 0)),
              We.length < Ve.length
                ? We.push(0, 0, 0)
                : We.length > Ve.length && Ve.push(0, 0, 0),
              { homeScores: We, awayScores: Ve, titles: ["S1", "S2"] }
            );
          }
          if ("handball" == t) {
            var Ge,
              Ke,
              Qe,
              $e,
              Je,
              Ye = (null === (Ge = e.commonScore) || void 0 === Ge
                ? void 0
                : Ge.p1) || [0, 0],
              Ze = (null === (Ke = e.commonScore) || void 0 === Ke
                ? void 0
                : Ke.p2) || [0, 0],
              Xe = (null === (Qe = e.commonScore) || void 0 === Qe
                ? void 0
                : Qe.ot) || [0, 0],
              et = (null === ($e = e.commonScore) || void 0 === $e
                ? void 0
                : $e.ap) || [0, 0],
              tt = (null === (Je = e.commonScore) || void 0 === Je
                ? void 0
                : Je.ft) || [0, 0];
            return (
              Ye.length || (Ye = [0, 0]),
              Ze.length || (Ze = [0, 0]),
              Xe.length || (Xe = [0, 0]),
              et.length || (et = [0, 0]),
              tt.length || (tt = [0, 0]),
              {
                homeScores: [Ye[0], Ze[0], Xe[0], et[0]],
                awayScores: [Ye[1], Ze[1], Xe[1], et[1]],
                titles: ["H1", "H2", "OT", "AP"],
              }
            );
          }
          if ("waterpolo" == t || "snooker" == t) {
            var at,
              nt,
              it,
              ot,
              st,
              lt,
              ct,
              pt = (null === (at = e.commonScore) || void 0 === at
                ? void 0
                : at.p1) || [0, 0],
              ut = (null === (nt = e.commonScore) || void 0 === nt
                ? void 0
                : nt.p2) || [0, 0],
              mt = (null === (it = e.commonScore) || void 0 === it
                ? void 0
                : it.p3) || [0, 0],
              ht = (null === (ot = e.commonScore) || void 0 === ot
                ? void 0
                : ot.p4) || [0, 0],
              ft = (null === (st = e.commonScore) || void 0 === st
                ? void 0
                : st.ot) || [0, 0],
              yt = (null === (lt = e.commonScore) || void 0 === lt
                ? void 0
                : lt.ap) || [0, 0],
              gt = (null === (ct = e.commonScore) || void 0 === ct
                ? void 0
                : ct.ft) || [0, 0];
            pt.length || (pt = [0, 0]),
              ut.length || (ut = [0, 0]),
              mt.length || (mt = [0, 0]),
              ht.length || (ht = [0, 0]),
              ft.length || (ft = [0, 0]),
              yt.length || (yt = [0, 0]),
              gt.length || (gt = [0, 0]);
            var dd = {
              homeScores: [pt[0], ut[0], mt[0], ht[0], ft[0], yt[0]],
              awayScores: [pt[1], ut[1], mt[1], ht[1], ft[1], yt[1]],
            };
            return (
              "waterpolo" == t &&
                (dd.titles = ["P1", "P2", "P3", "P4", "OT", "AP"]),
              dd
            );
          }
          if ("esports" == t)
            return { homeScores: [e.homeScore], awayScores: [e.awayScore] };
          var bt = { homeScores: e.homeScores, awayScores: e.awayScores };
          return (
            "basketball" == t
              ? (bt.titles = ["Q1", "Q2", "Q3", "Q4", "OT"])
              : "tennis" == t && (bt.titles = ["S1", "S2", "S3", "S4", "S5"]),
            bt
          );
        },
        formatMoney: function (e, t) {
          return Number(e) > 1e9
            ? t + Math.floor((10 * Number(e)) / 1e9) / 10 + "B"
            : Number(e) > 1e6
            ? t + Math.floor((10 * Number(e)) / 1e6) / 10 + "M"
            : t + Number(e).toLocaleString();
        },
        processingData: function (e, t) {
          var n = this,
            o = [];
          return (
            e.forEach(function (e, r, l) {
              e.list && e.list.length
                ? n.arrayClassify(e.list).forEach(function (l, c, d) {
                    var m = n.deepClone(e);
                    (m.list = l),
                      t
                        ? (m.copyKey = "".concat(r).concat(c).concat(m.key))
                        : (m.copyRid = "".concat(r).concat(c).concat(m.rId)),
                      o.push(m);
                  })
                : (t
                    ? (l[r].copyKey = "".concat(r).concat(e.key))
                    : (l[r].copyRid = "".concat(r).concat(e.rId)),
                  o.push(e));
            }),
            o
          );
        },
        deepClone: function (e) {
          var t = Array.isArray(e) ? [] : {};
          if (e && "object" === Object(r.a)(e))
            for (var n in e)
              e.hasOwnProperty(n) &&
                (e[n] && "object" === Object(r.a)(e[n])
                  ? (t[n] = this.deepClone(e[n]))
                  : (t[n] = e[n]));
          return t;
        },
        arrayClassify: function (e) {
          for (var t = []; e.length; ) {
            var n = [];
            n.push(e[0]), e.splice(0, 1);
            for (var i = 0; i < e.length; i++)
              e[i].stage === n[0].stage &&
                e[i].groupNum === n[0].groupNum &&
                e[i].roundNum === n[0].roundNum &&
                (n.push(e[i]), e.splice(i--, 1));
            t.push(n);
          }
          return t;
        },
        getLastOrNextDay: function (e, t) {
          (e = new Date(e)), (e = "+" === t ? +e + 864e5 : +e - 864e5);
          var n = (e = new Date(e)).getMonth() + 1,
            o = e.getDate();
          return (
            n < 10 && (n = "0".concat(n)),
            o < 10 && (o = "0".concat(o)),
            [e.getFullYear(), n, o]
          );
        },
        padLeftZero: function (e) {
          return e < 10 ? 0 + e : e;
        },
        formatDate: function (e, t) {
          if (!e) return "";
          /(y+)/.test(t) &&
            (t = t.replace(
              RegExp.$1,
              (e.getFullYear() + "").substr(4 - RegExp.$1.length)
            ));
          var n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
          };
          for (var o in n)
            if (new RegExp("(".concat(o, ")")).test(t)) {
              var r = n[o] + "";
              t = t.replace(
                RegExp.$1,
                1 === RegExp.$1.length ? r : this.padLeftZero(r)
              );
            }
          return t;
        },
        localizationData: function (e, t) {
          try {
            var n = navigator.appName,
              o = "";
            (o =
              "Netscape" === n ? navigator.language : navigator.userLanguage),
              ["zh-HK", "zh-TW"].includes(o) && (o = "zh-CN");
            var r = new Date(e),
              l = new Intl.DateTimeFormat(o, { dateStyle: "full" }).format(r),
              c = r.toLocaleString(o).split(" ").length > 2,
              time = r.toLocaleString(o, { hour12: c }).split(" "),
              d = ""
                .concat(time[1].split(":")[0], ":")
                .concat(time[1].split(":")[1]);
            return (
              time[0].includes(":") &&
                (d = ""
                  .concat(time[0].split(":")[0], ":")
                  .concat(time[0].split(":")[1])),
              time.length > 2 && (d += " ".concat(time[2])),
              1 === t ? d : 2 === t ? l : "".concat(d, " ").concat(l)
            );
          } catch (e) {
            return "";
          }
        },
        handicap: function (e) {
          if (e < 9.75) {
            var t = "".concat(e).split(".");
            return !t[1] || ("25" !== t[1] && "75" !== t[1])
              ? e
              : "".concat(e - 0.25, "/").concat(e + 0.25);
          }
          return e;
        },
        formattingDate: function (time, e, t) {
          var text = t || "-",
            n = new Date(time),
            o = n.getFullYear() + text,
            r =
              (n.getMonth() + 1 < 10
                ? "0" + (n.getMonth() + 1)
                : n.getMonth() + 1) + text,
            l = (n.getDate() < 10 ? "0" + n.getDate() : n.getDate()) + " ",
            c = (n.getHours() < 10 ? "0" + n.getHours() : n.getHours()) + ":",
            d =
              (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()) +
              ":",
            s = n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds();
          return e ? o + r + l + c + d + s : o + r + l;
        },
        matchSortCompetition: function (e) {
          var t = this,
            n = e.listData,
            o = e.favorites,
            r = e.locale,
            l = e.competitionList,
            c = e.teamsMap,
            d = e.sortBy,
            m = e.isElseBall;
          r = "zht" === r ? "zh" : r;
          var h = [];
          n.map(function (e) {
            e.list.map(function (t, n, o) {
              var r;
              (o[n].comName = m
                ? e.competition.name || ""
                : (null === (r = l[e.competitionId]) || void 0 === r
                    ? void 0
                    : r.name) || ""),
                (o[n].countryName = m
                  ? e.competition.country
                    ? e.competition.country.name
                    : ""
                  : e.name),
                (o[n].comId = m ? e.competition.id : e.competitionId),
                h.push(t);
            });
          });
          var f = o.matchIds,
            y = o.compIds;
          h.sort(function (a, b) {
            if (
              (a.countryName || (a.countryName = ""),
              b.countryName || (b.countryName = ""),
              1 == +d
                ? 3 === a.sportId
                  ? a.countryWeight !== b.countryWeight
                  : a.countryName.substr(0, 1) !== b.countryName.substr(0, 1)
                : a.matchTime !== b.matchTime)
            ) {
              if (1 != +d) return a.matchTime - b.matchTime;
              if (3 !== a.sportId)
                return a.countryName.localeCompare(b.countryName, r);
              if (a.countryWeight > b.countryWeight) return -1;
              if (a.countryWeight < b.countryWeight) return 1;
            } else {
              if (a.weight > b.weight) return -1;
              if (a.weight < b.weight) return 1;
              if (a.level !== b.level)
                return 0 === a.level || !a.level || a.level > b.level ? 1 : -1;
              if (
                1 == +d
                  ? a.comId === b.comId
                  : 3 === a.sportId
                  ? a.countryWeight === b.countryWeight
                  : a.countryName.substr(0, 1) === b.countryName.substr(0, 1)
              ) {
                if (
                  1 == +d
                    ? a.stage !== b.stage ||
                      a.groupNum !== b.groupNum ||
                      a.roundNum !== b.roundNum
                    : a.comId !== b.comId
                )
                  return 1 == +d
                    ? a.stage !== b.stage
                      ? a.stage.localeCompare(b.stage, r)
                      : a.groupNum !== b.groupNum
                      ? a.groupNum > b.groupNum
                        ? 1
                        : -1
                      : a.roundNum > b.roundNum
                      ? 1
                      : -1
                    : a.comName.localeCompare(b.comName, r);
                if (
                  1 == +d
                    ? a.matchTime !== b.matchTime
                    : a.stage !== b.stage ||
                      a.groupNum !== b.groupNum ||
                      a.roundNum !== b.roundNum
                )
                  return 1 == +d
                    ? a.matchTime - b.matchTime
                    : a.stage !== b.stage
                    ? a.stage.localeCompare(b.stage, r)
                    : a.groupNum !== b.groupNum
                    ? a.groupNum > b.groupNum
                      ? 1
                      : -1
                    : a.roundNum > b.roundNum
                    ? 1
                    : -1;
                var e,
                  t,
                  n =
                    (a.homeTeamId &&
                      (null === (e = c[a.homeTeamId]) || void 0 === e
                        ? void 0
                        : e.name)) ||
                    "",
                  o =
                    (b.homeTeamId &&
                      (null === (t = c[b.homeTeamId]) || void 0 === t
                        ? void 0
                        : t.name)) ||
                    "";
                return n !== o ? n.localeCompare(o, r) : 0;
              }
              if (1 == +d) return a.comName.localeCompare(b.comName, r);
              if (3 !== a.sportId)
                return a.countryName.localeCompare(b.countryName, r);
              if (a.countryWeight > b.countryWeight) return -1;
              if (a.countryWeight < b.countryWeight) return 1;
            }
          });
          for (var v = [], i = 0; i < h.length; i++) {
            var _ = h[i];
            f.includes(_.id)
              ? (v.push(_), h.splice(i--, 1))
              : y.includes(_.comId) && (v.push(_), h.splice(i--, 1));
          }
          return (
            v.sort(function (a, b) {
              return f.includes(a.id) && !f.includes(b.id)
                ? -1
                : !f.includes(a.id) && f.includes(b.id)
                ? 1
                : y.includes(a.comId) && !y.includes(b.comId)
                ? -1
                : !f.includes(a.comId) && f.includes(b.comId)
                ? 1
                : 0;
            }),
            (h = this.comClassify(v.concat(h))).forEach(function (e, o, r) {
              for (var l = {}, c = 0; c < n.length; c++) {
                if (
                  (m && n[c].competition
                    ? n[c].competition.id
                    : n[c].competitionId) === e[0].comId
                ) {
                  l = t.deepClone(n[c]);
                  break;
                }
              }
              var d = t.deepClone(e);
              (l.list = d),
                m
                  ? (l.copyKey = "".concat(o).concat(l.key))
                  : (l.copyRid = "".concat(o).concat(l.rId)),
                (r[o] = l);
            }),
            h
          );
        },
        comClassify: function (e) {
          for (var t = [], n = [], i = 0; i < e.length; i++)
            i !== e.length - 1 &&
            e[i].comId === e[i + 1].comId &&
            e[i].stage === e[i + 1].stage &&
            e[i].groupNum === e[i + 1].groupNum &&
            e[i].roundNum === e[i + 1].roundNum
              ? t.push(e[i])
              : (t.push(e[i]), n.push(t), (t = []));
          return n;
        },
        judgeTime: function (time, e) {
          return new Date(time).toDateString() === new Date(e).toDateString();
        },
        judgeToday: function (e) {
          return (
            { "-86400000": "Yesterday", 0: "Today", 864e5: "Tomorrow" }[
              new Date(e).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)
            ] || !1
          );
        },
        collectSort: function (data, e, t, n) {
          t = "zht" === t ? "zh" : t;
          var o = data.sort(function (a, b) {
            if (a.matchTime !== b.matchTime) return a.matchTime - b.matchTime;
            if (a.sportOrder !== b.sportOrder)
              return a.sportOrder - b.sportOrder;
            if (a.weight > b.weight) return -1;
            if (a.weight < b.weight) return 1;
            if (a.level !== b.level)
              return 0 === a.level || !a.level || a.level > b.level ? 1 : -1;
            var n,
              o,
              r =
                (null === (n = a.competition.country) || void 0 === n
                  ? void 0
                  : n.name) || "",
              l =
                (null === (o = b.competition.country) || void 0 === o
                  ? void 0
                  : o.name) || "";
            if (r.substr(0, 1) !== l.substr(0, 1)) return r.localeCompare(l, t);
            var c = a.competition.name,
              d = b.competition.name;
            if (c !== d) return c.localeCompare(d, t);
            if (
              a.stage !== b.stage ||
              a.groupNum !== b.groupNum ||
              a.roundNum !== b.roundNum
            )
              return a.stage !== b.stage
                ? a.stage.localeCompare(b.stage, t)
                : a.groupNum !== b.groupNum
                ? a.groupNum > b.groupNum
                  ? 1
                  : -1
                : a.roundNum > b.roundNum
                ? 1
                : -1;
            var m,
              h,
              f =
                (a.homeTeamId &&
                  (null === (m = e[a.homeTeamId]) || void 0 === m
                    ? void 0
                    : m.name)) ||
                "",
              y =
                (b.homeTeamId &&
                  (null === (h = e[b.homeTeamId]) || void 0 === h
                    ? void 0
                    : h.name)) ||
                "";
            return f !== y ? f.localeCompare(y, t) : 0;
          });
          o = this.comClassify(o);
          var r = [];
          return (
            o.map(function (e, t) {
              var o =
                  "football" === e[0].proModule
                    ? 48 * e.length + 40
                    : 64 * e.length + 40,
                l = 0;
              e.map(function (e) {
                e.note && (l += 20);
              }),
                r.push({
                  competition: n[e[0].comId],
                  key: e[0].comId,
                  copyKey: "".concat(e[0].comId, "_").concat(t),
                  list: e,
                  size: o + l,
                  sizeInit: o + l,
                  ss: 1,
                  proModule: e[0].proModule,
                  competitionId: e[0].comId,
                  id: e[0].comId,
                  name: n[e[0].comId].country ? n[e[0].comId].country.name : "",
                  packUp: !1,
                });
            }),
            r
          );
        },
        oddsConvert: function (e, t) {
          return (
            (e[0] =
              +this.oddsConvertFn(+e[0]) > 0
                ? "+".concat(this.oddsConvertFn(+e[0]))
                : this.oddsConvertFn(+e[0])),
            ("0" !== this.getLStore("footballOddType") && "eu" !== t) ||
              (e[1] =
                +this.oddsConvertFn(+e[1]) > 0
                  ? "+".concat(this.oddsConvertFn(+e[1]))
                  : this.oddsConvertFn(+e[1])),
            (e[2] =
              +this.oddsConvertFn(+e[2]) > 0
                ? "+".concat(this.oddsConvertFn(+e[2]))
                : this.oddsConvertFn(+e[2])),
            e
          );
        },
        oddsConvertFn: function (e) {
          return (e =
            e < 2
              ? 1 - e == 0
                ? 0
                : Math.floor(100 / (1 - e))
              : Math.floor(100 * (e - 1)));
        },
        _debounce: function (e, t) {
          var n;
          return function () {
            var th = this,
              o = arguments;
            n && clearTimeout(n),
              (n = setTimeout(function () {
                (n = null), e.apply(th, o);
              }, t));
          };
        },
        IframeOnClick: {
          resolution: 200,
          iframes: [],
          interval: null,
          Iframe: function () {
            (this.element = arguments[0]),
              (this.cb = arguments[1]),
              (this.hasTracked = !1);
          },
          track: function (element, e) {
            if (
              (this.iframes.push(new this.Iframe(element, e)), !this.interval)
            ) {
              var t = this;
              this.interval = setInterval(function () {
                t.checkClick();
              }, this.resolution);
            }
          },
          checkClick: function () {
            if (document.activeElement) {
              var e = document.activeElement;
              for (var i in this.iframes)
                e === this.iframes[i].element
                  ? !1 === this.iframes[i].hasTracked &&
                    (this.iframes[i].cb.apply(window, []),
                    (this.iframes[i].hasTracked = !0))
                  : (this.iframes[i].hasTracked = !1);
            }
          },
        },
        countryComSort: function (e, t) {
          return (
            (t = "zht" === t ? "zh" : t),
            e.sort(function (a, b) {
              return 1 === a.type && 1 !== b.type
                ? -1
                : 1 !== a.type && 1 === b.type
                ? 1
                : 2 === a.type && 2 !== b.type
                ? -1
                : 2 !== a.type && 2 === b.type
                ? 1
                : a.weight > b.weight
                ? -1
                : a.weight < b.weight
                ? 1
                : a.level !== b.level
                ? 0 === a.level || !a.level || a.level > b.level
                  ? 1
                  : -1
                : a.name.localeCompare(b.name, t);
            })
          );
        },
        continentComSort: function (e, t) {
          return (
            (t = "zht" === t ? "zh" : t),
            e.sort(function (a, b) {
              return a.weight > b.weight
                ? -1
                : a.weight < b.weight
                ? 1
                : a.level !== b.level
                ? 0 === a.level || !a.level || a.level > b.level
                  ? 1
                  : -1
                : a.name.localeCompare(b.name, t);
            })
          );
        },
        countryContinentSort: function (e, t, n) {
          for (var o = null, r = null, i = 0; i < e.length; i++)
            e[i] && !e[i].id && ((o = e[i]), e.splice(i--, 1)),
              e[i] && e[i].id === n && ((r = e[i]), e.splice(i--, 1));
          return (
            e.sort(function (a, b) {
              return a.isCategory && !b.isCategory
                ? -1
                : !a.isCategory && b.isCategory
                ? 1
                : a.isCategory && b.isCategory
                ? a.weight > b.weight
                  ? -1
                  : 1
                : 3 === a.sportId
                ? a.weight > b.weight
                  ? -1
                  : a.weight < b.weight
                  ? 1
                  : a.name.localeCompare(b.name, t)
                : a.name.localeCompare(b.name, t);
            }),
            r && e.unshift(r),
            o && e.push(o),
            e
          );
        },
        screenAds: function (e, t) {
          for (var n = null, o = -1, i = 0; i < d.ballTypes.length; i++)
            if (d.ballTypes[i].proModule === t) {
              o = d.ballTypes[i].sport_id;
              break;
            }
          for (var r = 0; r < e.length; r++)
            if (
              !e[r].sports ||
              0 === e[r].sports[0] ||
              e[r].sports.includes(o)
            ) {
              n = e[r];
              break;
            }
          return this.deepClone(n);
        },
        getClientHeight: function () {
          return document.body.clientHeight &&
            document.documentElement.clientHeight
            ? document.body.clientHeight < document.documentElement.clientHeight
              ? document.body.clientHeight
              : document.documentElement.clientHeight
            : document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
        },
        format: function (e) {
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new Date(),
            o = {
              "Y+": (n = new Date(n)).getFullYear().toString(),
              "M+": (n.getMonth() + 1).toString(),
              "D+": n.getDate().toString(),
              "h+": n.getHours().toString(),
              "m+": n.getMinutes().toString(),
              "s+": n.getSeconds().toString(),
            };
          for (var r in o)
            (t = new RegExp("(" + r + ")").exec(e)) &&
              (e = e.replace(
                t[1],
                1 === t[1].length ? o[r] : o[r].padStart(t[1].length, "0")
              ));
          return e;
        },
        formatUTC: function (e) {
          var time = this.format("YYYY-MM-DD hh:mm:ss", e);
          return (time = (time = time.replace(/\//g, "-")).replace(" ", "T"));
        },
        seoStructuredMatch: function (e) {
          var t = {
              "@type": "SportsTeam",
              sport: e.sport,
              name: e.homeName,
              logo: e.homeLogo,
            },
            n = {
              "@type": "SportsTeam",
              sport: e.sport,
              name: e.awayName,
              logo: e.awayLogo,
            };
          return (
            e.homeUrl && (t.url = e.homeUrl),
            e.awayUrl && (n.url = e.awayUrl),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "SportsEvent",
                    name: "".concat(e.homeName, " vs ").concat(e.awayName),
                    eventStatus: "EventScheduled",
                    description: ""
                      .concat(e.competition || "", " ")
                      .concat(e.matchTime, " ")
                      .concat(e.homeName, " vs ")
                      .concat(e.awayName),
                    homeTeam: t,
                    awayTeam: n,
                    startDate: e.matchTime,
                    sport: e.sport,
                    location: [
                      {
                        "@type": "Place",
                        name:
                          ("-" === e.stadiumName ? "" : e.stadiumName) ||
                          e.competition ||
                          "",
                      },
                    ],
                  },
                },
              ],
            }
          );
        },
        seoStructuredTeam: function (e) {
          var address = null;
          (e.city || e.country) &&
            ((address = { "@type": "PostalAddress" }),
            e.city && (address.addressLocality = e.city),
            e.country && (address.addressCountry = e.country));
          var t = {
            "@context": "https://schema.org",
            "@type": "SportsTeam",
            name: e.teamName,
            sport: e.sport,
            logo: e.logo,
            url: e.url,
            memberOf: { "@type": "SportsOrganization", name: e.competition },
          };
          return (
            address && (t.address = address),
            { script: [{ type: "application/ld+json", json: t }] }
          );
        },
        seoStructuredPlayer: function (e) {
          var t = null;
          e.country && (t = { "@type": "Country", name: e.country });
          var n = {
            "@context": "https://schema.org",
            "@type": "Person",
            name: e.name,
            birthDate: e.birthDate,
            url: e.url,
            affiliation: { "@type": "Organization", name: e.teamName },
            height: e.height,
            weight: e.weight,
          };
          return (
            t && (n.nationality = t),
            { script: [{ type: "application/ld+json", json: n }] }
          );
        },
        seoStructuredCompetition: function (e) {
          return {
            script: [
              {
                type: "application/ld+json",
                json: {
                  "@context": "https://schema.org",
                  "@type": "SportsOrganization",
                  name: e.name,
                  sport: e.sport,
                  logo: e.logo,
                  url: e.url,
                },
              },
            ],
          };
        },
        seoStructuredBreadcrumb_1: function (e) {
          var t = [
              {
                "@type": "ListItem",
                position: 1,
                name: e.sport,
                item: e.sportUrl,
              },
            ],
            n = 2;
          return (
            e.competition &&
              (t.push({
                "@type": "ListItem",
                position: 2,
                name: e.competition,
                item: e.competitionUrl,
              }),
              (n = 3)),
            t.push({
              "@type": "ListItem",
              position: n,
              name: ""
                .concat(e.homeName, " vs ")
                .concat(e.awayName)
                .concat(e.tab),
            }),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: t,
                  },
                },
              ],
            }
          );
        },
        seoStructuredBreadcrumb_2: function (e) {
          var t = [
              {
                "@type": "ListItem",
                position: 1,
                name: e.sport,
                item: e.sportUrl,
              },
            ],
            n = 2;
          return (
            e.competition &&
              (t.push({
                "@type": "ListItem",
                position: 2,
                name: e.competition,
                item: e.competitionUrl,
              }),
              (n = 3)),
            t.push({
              "@type": "ListItem",
              position: n,
              name: "".concat(e.competition).concat(e.tab),
            }),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: t,
                  },
                },
              ],
            }
          );
        },
        seoStructuredBreadcrumb_3: function (e) {
          var t = [
              {
                "@type": "ListItem",
                position: 1,
                name: e.sport,
                item: e.sportUrl,
              },
            ],
            n = 2;
          return (
            e.competition &&
              (t.push({
                "@type": "ListItem",
                position: 2,
                name: e.competition,
                item: e.competitionUrl,
              }),
              (n = 3)),
            t.push({
              "@type": "ListItem",
              position: n,
              name: "".concat(e.teamName).concat(e.tab),
            }),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: t,
                  },
                },
              ],
            }
          );
        },
        seoStructuredBreadcrumb_4: function (e) {
          var t = [
              {
                "@type": "ListItem",
                position: 1,
                name: e.sport,
                item: e.sportUrl,
              },
            ],
            n = 2;
          return (
            e.teamUrl.includes("false") ||
              (t.push({
                "@type": "ListItem",
                position: 2,
                name: e.teamName,
                item: e.teamUrl,
              }),
              (n = 3)),
            t.push({
              "@type": "ListItem",
              position: n,
              name: "".concat(e.playerName).concat(e.tab),
            }),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: t,
                  },
                },
              ],
            }
          );
        },
        seoStructuredBreadcrumb_5: function (e) {
          return {
            script: [
              {
                type: "application/ld+json",
                json: {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: e.sport,
                      item: e.sportUrl,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "".concat(e.sport, " ").concat(e.text),
                      item: e.h2hUrl,
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: ""
                        .concat(e.team1, " vs ")
                        .concat(e.team2, " ")
                        .concat(e.text),
                    },
                  ],
                },
              },
            ],
          };
        },
        seoStructuredBreadcrumb_6: function (e) {
          return {
            script: [
              {
                type: "application/ld+json",
                json: {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Football",
                      item: "https://www.aiscore.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Latest Football Transfer",
                      item: "https://www.aiscore.com/transfer",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "".concat(e.name, " Transfer"),
                    },
                  ],
                },
              },
            ],
          };
        },
        seoStructuredBreadcrumb_7: function (e) {
          return {
            script: [
              {
                type: "application/ld+json",
                json: {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Football",
                      item: "https://www.aiscore.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "FIFA Ranking ".concat(e.year),
                    },
                  ],
                },
              },
            ],
          };
        },
        seoStructuredBreadcrumb_8: function (e) {
          return {
            script: [
              {
                type: "application/ld+json",
                json: {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: e.sport,
                      item: e.sportUrl,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "".concat(e.sport, " Player Salary"),
                      item: e.salaryUrl,
                    },
                    { "@type": "ListItem", position: 3, name: e.name },
                  ],
                },
              },
            ],
          };
        },
        seoStructuredBreadcrumb_9: function (e) {
          var data = [
            {
              "@type": "ListItem",
              position: 1,
              name: e.sport,
              item: e.sportUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: e.key,
              item: e["".concat(e.key, "Url")],
            },
          ];
          return (
            e.url &&
              data.push({ "@type": "ListItem", position: 3, name: e.url }),
            {
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: data,
                  },
                },
              ],
            }
          );
        },
        mergeArray: function (e, t) {
          var n,
            o = [],
            r = [];
          for (var i in ((e = e.sort(function (a, b) {
            return a[t] < b[t] ? -1 : 1;
          })).length && (n = e[0][t]),
          e))
            e[i][t] === n
              ? r.push(e[i])
              : ((n = e[i][t]), o.push(r), (r = [e[i]]));
          return o.push(r), o;
        },
        keepLastIndex: function (e) {
          if (window.getSelection) {
            e.focus();
            var t = window.getSelection();
            t.selectAllChildren(e), t.collapseToEnd();
          } else if (document.selection) {
            var n = document.selection.createRange();
            n.moveToElementText(e), n.collapse(!1), n.select();
          }
        },
        imgLink: function (e, t) {
          var n;
          n = 2 === t ? "competition" : 3 === t ? "team" : "player";
          return "football" === e ||
            "basketball" === e ||
            "volleyball" === e ||
            "baseball" === e
            ? "https://img0.aiscore.com/".concat(e, "/").concat(n, "/")
            : [
                "handball",
                "tennis",
                "icehockey",
                "",
                "cricket",
                "amfootball",
                "tabletennis",
                "badminton",
                "waterpolo",
                "snooker",
              ].includes(e)
            ? 2 === t
              ? "https://img0.aiscore.com/v2/unique-tournament/"
              : "tennis" === e ||
                "tabletennis" === e ||
                "badminton" === e ||
                "snooker" === e
              ? "https://img0.aiscore.com/v2/team/"
              : "https://img0.aiscore.com/v2/".concat(n, "/")
            : "esports" === e
            ? "https://img0.aiscore.com/"
            : "https://img0.aiscore.com/v2/".concat(n, "/");
        },
        toThousands: function (e) {
          for (
            var t = "", n = 0, i = (e = (e || 0).toString()).length - 1;
            i >= 0;
            i--
          )
            n++, (t = e.charAt(i) + t), n % 3 || 0 === i || (t = "," + t);
          return t;
        },
        homeIsWeek: function (e) {
          return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
            new Date(e).getDay()
          ].toLocaleUpperCase();
        },
      };
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "web_fb_StatsType", function () {
          return o;
        }),
        n.d(t, "web_fb_StatsType_1", function () {
          return r;
        }),
        n.d(t, "emoji", function () {
          return l;
        }),
        n.d(t, "OddCompanies", function () {
          return c;
        }),
        n.d(t, "ballTypePre", function () {
          return d;
        }),
        n.d(t, "footballStatus", function () {
          return m;
        }),
        n.d(t, "basketballStatus", function () {
          return h;
        }),
        n.d(t, "tennisStatus", function () {
          return f;
        }),
        n.d(t, "icehockeyStatus", function () {
          return y;
        }),
        n.d(t, "volleyballStatus", function () {
          return v;
        }),
        n.d(t, "tabletennisStatus", function () {
          return _;
        }),
        n.d(t, "badmintonStatus", function () {
          return k;
        }),
        n.d(t, "baseballStatus", function () {
          return A;
        }),
        n.d(t, "amfootballStatus", function () {
          return j;
        }),
        n.d(t, "handballStatus", function () {
          return w;
        }),
        n.d(t, "waterpoloStatus", function () {
          return S;
        }),
        n.d(t, "snookerStatus", function () {
          return T;
        }),
        n.d(t, "cricketStatus", function () {
          return M;
        }),
        n.d(t, "esportsStatus", function () {
          return x;
        }),
        n.d(t, "sportIdMap", function () {
          return O;
        }),
        n.d(t, "sportsUrl", function () {
          return I;
        }),
        n.d(t, "ballTypes", function () {
          return D;
        }),
        n.d(t, "livescoreTextEn", function () {
          return C;
        }),
        n.d(t, "letterArray", function () {
          return P;
        }),
        n.d(t, "statsData", function () {
          return E;
        });
      var o = {
          1: "Matches",
          2: "First",
          3: "Goals",
          4: "Assists",
          5: "Minutes played",
          6: "Red cards",
          7: "Yellow cards",
          8: "Shots",
          9: "Shots on Target",
          10: "Dribble",
          11: "Dribble succ",
          12: "Clearances",
          13: "Interceptions",
          14: "Steals",
          15: "Passes",
          16: "Key passes",
          17: "Crosses",
          18: "Crosses accuracy",
          19: "Long balls",
          20: "Long balls accuracy",
          21: "Duels",
          22: "Duels won",
          23: "Fouls",
          24: "Dispossessed",
          25: "Was fouled",
          26: "Saves",
          27: "Punches",
          28: "Runs out",
          29: "Runs out succ",
          30: "Good high claim",
          31: "Blocked shots",
          32: "Passes accuracy",
        },
        r = {
          1: "Matches",
          2: "Goals",
          15: "Penalty",
          3: "Assists",
          4: "Red cards",
          5: "Yellow cards",
          6: "Shots",
          7: "Shots on Target",
          8: "Clearances",
          9: "Tackles",
          10: "Key passes",
          11: "Crosses",
          12: "Crosses accuracy",
          13: "Fouls",
          14: "Was fouled",
        },
        l = [
          "praygoal",
          "waqian",
          "notalk",
          "angry",
          "girl",
          "glasses",
          "555",
          "shydog",
          "crydog",
          "dog",
          "ballface",
          "slap",
          "coverface",
          "nosebleed",
          "maskpray",
          "maskcomeon",
          "mask",
          "awkward",
          "bye",
          "vomiting",
          "injured",
          "football",
          "corner",
          "nogoal",
          "nocorner",
          "redcard",
          "yellowcard",
          "5%",
          "50%",
          "100%",
          "KO",
          "100",
          "comeon",
          "ngu",
          "pray",
          "yeah",
          "shake",
          "applaud",
          "lookdown",
          "good",
          "goal",
          "blackface",
          "basketball",
          "phone",
          "qian",
          "whistle",
          "plane",
          "Allin",
          "cheering",
          "grimace",
          "God",
          "Palming",
          "BE9",
          "FR5",
          "BR53",
          "GB1",
          "HR32",
          "UY59",
          "PT6",
          "CH15",
          "ES3",
          "DK13",
          "AR52",
          "CO60",
          "DE4",
          "SE10",
          "CL55",
          "NL8",
          "IT2",
          "MX56",
          "WALES29",
          "PL19",
          "PE58",
          "IR74",
          "SN137",
          "US54",
          "RO23",
          "JP70",
          "UA20",
          "TN95",
          "RS36",
          "VE62",
          "IE16",
          "SK24",
          "IE17",
          "AT14",
          "BA40",
          "PY57",
          "KR71",
          "CR66",
          "TR31",
          "IS25",
          "AU72",
          "NG93",
          "GR22",
          "SCOTLAND7",
          "MA94",
          "CD178",
          "RU18",
          "CZ21",
          "GH108",
          "NO12",
          "BG33",
          "HU30",
          "ME44",
          "CM141",
          "QA79",
          "JM138",
          "EG97",
          "BF179",
          "EC61",
          "FI11",
          "HN64",
          "AL38",
          "SI34",
          "BO63",
          "ML146",
          "CI145",
          "AE75",
          "MK50",
          "GN180",
          "DZ96",
          "SV68",
          "SA73",
          "ZA92",
          "PA162",
          "CN69",
          "CV181",
          "IQ87",
          "CA65",
          "UG173",
          "ZM147",
          "BY27",
          "CURACAO182",
          "SY134",
          "IL37",
          "UZ123",
          "LU46",
          "LB86",
          "OM84",
          "CY35",
          "GA174",
          "BJ167",
          "CG183",
          "TT150",
          "GE48",
          "KG171",
          "EE41",
          "JO81",
          "VN89",
          "PS135",
          "HT172",
          "IN88",
          "FO47",
          "MR154",
          "NE184",
          "LY98",
          "AM43",
          "MG185",
          "KE140",
          "AZ49",
          "ZW139",
          "BH78",
          "CF186",
          "NA155",
          "TH82",
          "SL187",
          "KZ39",
          "MZ188",
          "GW189",
          "NZ91",
          "TJ153",
          "KP190",
          "AO107",
          "AG152",
          "PH163",
          "TG158",
          "KOSOVO133",
          "MW164",
          "NI166",
          "SD128",
          "TZ192",
          "LT28",
          "LV26",
          "AD51",
          "KN161",
          "BI175",
          "TM193",
          "RW143",
          "SB194",
          "MM131",
          "LS170",
          "GQ196",
          "SZ197",
          "GT67",
          "YE80",
          "KM198",
          "BW156",
          "AF199",
          "ET142",
          "MV200",
          "SR201",
          "LR202",
          "DO203",
          "NC204",
          "MU205",
          "KW83",
          "TAHITI206",
          "ID90",
          "SG76",
          "BB207",
          "NP208",
          "GM168",
          "BZ209",
          "FJ149",
          "VU210",
          "SSD211",
          "MY77",
          "PG212",
          "LC213",
          "MD42",
          "GD165",
          "KH214",
          "CU151",
          "GY159",
          "BM215",
          "TD216",
          "DM217",
          "VC218",
          "MT45",
          "PR219",
          "LI220",
          "LA169",
          "ST222",
          "BT144",
          "MN160",
          "BD176",
          "AW157",
          "CK223",
          "AS224",
          "SC225",
          "GU226",
          "BN227",
          "GI177",
          "TL228",
          "WS229",
          "DJ230",
          "MS231",
          "VI232",
          "PK136",
          "LK148",
          "TO233",
          "ER234",
          "SO235",
          "KY236",
          "VG237",
          "TC238",
          "AI239",
          "BS240",
          "SM121",
        ],
        c = {
          2: {
            id: 2,
            site: "bet365",
            name: "365",
            name_en: "365",
            logo: "cbbfda0f4c33fd3eb608.png",
            link: "https://link.admarketurl.com/jump/4",
          },
          3: {
            id: 3,
            site: "sb",
            name: "皇冠",
            name_en: "Crown",
            logo: "d0cbd2afa701eb3fa596.png",
            link: "",
          },
          21: {
            id: 21,
            site: "jbb",
            name: "188",
            name_en: "188",
            logo: "adc202a003e411914a6d.png",
            link: "",
          },
          9: {
            id: 9,
            site: "wlian",
            name: "William Hill",
            name_en: "William Hill",
            name_zh: "威廉希尔",
            logo: "268a8ebc124cf2d138e4.png",
            link: "https://link.admarketurl.com/jump/2",
          },
          101: {
            id: 101,
            site: "jbb",
            name: "1xbet",
            name_en: "1xbet",
            logo: "d2b41018db3a5b300ccd.png",
            link: "https://link.admarketurl.com/jump/6",
          },
          102: {
            id: 102,
            site: "sb",
            name: "betsson",
            name_en: "betsson",
            logo: "f776aef4c2ac2731ccec.png",
            link: "",
          },
          103: {
            id: 103,
            site: "bet365",
            name: "22bet",
            name_en: "22bet",
            logo: "",
            link: "",
          },
          104: {
            id: 104,
            site: "bet365",
            name: "bet9ja",
            name_en: "bet9ja",
            logo: "",
            link: "",
          },
          105: {
            id: 105,
            site: "bet365",
            name: "betway",
            name_en: "betway",
            logo: "11670a0532b0dc82d68f.png",
            link: "",
          },
        },
        d = {
          football: "",
          basketball: "bk_",
          tennis: "ts_",
          amfootball: "amft_",
          icehockey: "icehk_",
          volleyball: "volley_",
          tabletennis: "tbts_",
          baseball: "base_",
          badminton: "bm_",
          handball: "hand_",
          waterpolo: "wp_",
          snooker: "snk_",
          cricket: "cct_",
          esports: "est_",
        },
        m = {
          3: "HT",
          5: "ET",
          7: "Penalties",
          8: "FT",
          9: "Postponed",
          10: "Interrupted",
          11: "Cut",
          12: "Canceled",
          13: "Pending",
          105: "AET",
          110: "AP",
        },
        h = {
          0: "",
          1: "-",
          2: "Q1",
          3: "Q1-Ended",
          4: "Q2",
          5: "Q2-Ended",
          6: "Q3",
          7: "Q3-Ended",
          8: "Q4",
          9: "OT",
          10: "FT",
          11: "Interrupted",
          12: "Canceled",
          13: "Postponed",
          14: "Cut",
          15: "Pending",
          105: "AET",
        },
        f = {
          0: "",
          1: "-",
          2: "S1",
          3: "S1-Ended",
          4: "S2",
          5: "S2-Ended",
          6: "S3",
          7: "S3-Ended",
          8: "S4",
          9: "S4-Ended",
          10: "S5",
          11: "OT",
          12: "FT",
          13: "Postponed",
          14: "Interrupted",
          15: "Cut",
          16: "Canceled",
          17: "Pending",
          18: "P1-Retired",
          19: "P1-Retired",
          22: "P1-Walkover",
          23: "P2-Walkover",
          26: "Defaulted",
          27: "Defaulted",
        },
        y = {
          0: "",
          1: "-",
          30: "P1",
          331: "P1-Ended",
          31: "P2",
          332: "P2-Ended",
          32: "P3",
          100: "FT",
          6: "OT",
          10: "OT",
          105: "AOT",
          8: "Shootout",
          13: "Shootout",
          110: "ASO",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        v = {
          0: "",
          1: "-",
          432: "S1",
          453: "S1-Ended",
          434: "S2",
          455: "S2-Ended",
          436: "S3",
          457: "S3-Ended",
          438: "S4",
          459: "S4-Ended",
          440: "S5",
          100: "FT",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          21: "Cut",
          99: "Pending",
          24: "P1-Retired",
          25: "P1-Retired",
        },
        _ = {
          0: "",
          1: "-",
          51: "S1",
          331: "S1-Ended",
          52: "S2",
          332: "S2-Ended",
          53: "S3",
          333: "S3-Ended",
          54: "S4",
          334: "S4-Ended",
          55: "S5",
          335: "S5-Ended",
          472: "S6",
          336: "S6-Ended",
          473: "S7",
          100: "FT",
          22: "P1-Walkover",
          23: "P2-Walkover",
          24: "Away Walkover",
          25: "Home Walkover",
          26: "Defaulted",
          27: "Defaulted",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        k = {
          0: "",
          1: "-",
          51: "S1",
          331: "S1-Ended",
          52: "S2",
          332: "S2-Ended",
          53: "S3",
          333: "S3-Ended",
          54: "S4",
          334: "S4-Ended",
          55: "S5",
          100: "FT",
          22: "P1-Walkover",
          23: "P2-Walkover",
          24: "P1-Retired",
          25: "P2-Retired",
          26: "Defaulted",
          27: "Defaulted",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        A = {
          0: "",
          1: "-",
          432: "I1",
          452: "I1-Break",
          433: "I1",
          453: "I1-Ended",
          434: "I2",
          454: "I2-Break",
          435: "I2",
          455: "I2-Ended",
          436: "I3",
          456: "I3-Break",
          437: "I3",
          457: "I3-Ended",
          438: "I4",
          458: "I4-Break",
          439: "I4",
          459: "I4-Ended",
          440: "I5",
          460: "I5-Break",
          411: "I5",
          461: "I5-Ended",
          412: "I6",
          462: "I6-Break",
          413: "I6",
          463: "I6-Ended",
          414: "I7",
          464: "I7-Break",
          415: "I7",
          465: "I7-Ended",
          416: "I8",
          466: "I8-Break",
          417: "I8",
          467: "I8-Ended",
          418: "I9",
          468: "I9-Break",
          419: "I9",
          469: "I9-Ended",
          420: "EI",
          470: "EI",
          421: "EI",
          10: "EI",
          100: "FT",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          24: "Away Walkover",
          25: "Home Walkover",
          99: "Pending",
        },
        j = {
          0: "",
          1: "-",
          44: "Q1",
          331: "Q1-Ended",
          45: "Q2",
          332: "Q2-Ended",
          46: "Q3",
          333: "Q3-Ended",
          47: "Q4",
          100: "FT",
          6: "OT",
          10: "OT",
          105: "AOT",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        w = {
          0: "",
          1: "-",
          35: "H1",
          5: "HT",
          36: "H2",
          100: "FT",
          6: "OT",
          11: "OT",
          7: "ET-HT",
          12: "OT",
          105: "AET",
          8: "Penalties",
          13: "Penalties",
          110: "AP",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        S = {
          0: "",
          1: "-",
          100: "FT",
          105: "FT-OT",
          110: "FT-PEN",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        T = {
          0: "",
          1: "-",
          3: "Live",
          4: "Pause",
          476: "SESSION_BREAK",
          22: "Walkover",
          23: "Walkover",
          24: "Away Walkover",
          25: "Home Walkover",
          26: "Defaulted",
          27: "Defaulted",
          100: "FT",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        M = {
          0: "",
          1: "-",
          100: "FT",
          532: "1st Inning",
          533: "1st Inning",
          534: "2nd Inning",
          535: "2nd Inning",
          545: "3rd Inning",
          546: "3rd Inning",
          547: "4th Inning",
          548: "4th Inning",
          536: "Waiting for Super Over",
          537: "Super Over",
          538: "Super Over",
          539: "After Super Over",
          540: "Break Time",
          541: "Break Time of Super Over",
          542: "Lunch",
          543: "Tea",
          544: "Stumps",
          14: "Delayed",
          15: "Postponed",
          16: "Canceled",
          17: "Interrupted",
          18: "Suspended",
          19: "Abandoned",
          99: "Pending",
        },
        x = {
          0: "",
          1: "-",
          2: "Live",
          3: "FT",
          11: "Interrupted",
          12: "Canceled",
          13: "Delayed",
          14: "Cut",
          15: "Pending",
        },
        O = {
          1: "football",
          2: "basketball",
          3: "tennis",
          11: "tabletennis",
          17: "amfootball",
          8: "icehockey",
          10: "volleyball",
          6: "baseball",
          24: "badminton",
          7: "handball",
          22: "waterpolo",
          19: "snooker",
          5: "cricket",
        },
        I = [
          "football",
          "basketball",
          "tennis",
          "table-tennis",
          "american-football",
          "ice-hockey",
          "volleyball",
          "baseball",
          "badminton",
          "handball",
          "waterpolo",
          "snooker",
          "cricket",
          "esports",
        ],
        D = [
          {
            proModule: "football",
            i18n: "Football",
            icon: "icon-zuqiu-weixuanzhong",
            href: "",
            sport_id: 1,
            activeIcon: "#icon-zuqiu-yixuanzhong",
          },
          {
            proModule: "basketball",
            i18n: "Basketball",
            icon: "icon-lanqiu-weixuanzhong",
            href: "basketball",
            sport_id: 2,
            activeIcon: "#icon-lanqiu-yixuanzhong1",
          },
          {
            proModule: "tennis",
            i18n: "Tennis",
            icon: "icon-a-wangqiuweixuanzhong",
            href: "tennis",
            sport_id: 3,
            activeIcon: "#icon-wangqiu-yixuanzhong",
          },
          {
            proModule: "cricket",
            i18n: "map_cricket.cricket",
            icon: "icon-banqiu-weixuanzhong",
            href: "cricket",
            sport_id: 5,
            activeIcon: "#icon-banqiu-yixuanzhong",
          },
          {
            proModule: "baseball",
            i18n: "map_baseball.baseball",
            icon: "icon-bangqiu-weixuanzhong",
            href: "baseball",
            sport_id: 6,
            activeIcon: "#icon-bangqiu-yixuanzhong",
          },
          {
            proModule: "esports",
            i18n: "map_esports.esports",
            icon: "icon-dianjing-weixuanzhong",
            href: "esports",
            sport_id: 100,
            activeIcon: "#icon-dianjing-yixuanzhong",
          },
          {
            proModule: "volleyball",
            i18n: "map_volleyball.volleyball",
            icon: "icon-paiqiu-weixuanzhong",
            href: "volleyball",
            sport_id: 10,
            activeIcon: "#icon-paiqiu-yixuanzhong",
          },
          {
            proModule: "icehockey",
            i18n: "map_icehockey.Hockey",
            icon: "icon-bingqiu-weixuanzhong",
            href: "ice-hockey",
            sport_id: 8,
            activeIcon: "#icon-bingqiu-yixuanzhong",
          },
          {
            proModule: "amfootball",
            i18n: "map_amfootball.AMFootball",
            icon: "icon-ganlanqiu-weixuanzhong",
            href: "american-football",
            sport_id: 17,
            activeIcon: "#icon-ganlanqiu-yixuanzhong",
          },
          {
            proModule: "tabletennis",
            i18n: "map_tabletennis.tableTennis",
            icon: "icon-pingpangqiu-weixuanzhong",
            href: "table-tennis",
            sport_id: 11,
            activeIcon: "#icon-pingpangqiu-yixuanzhong",
          },
          {
            proModule: "badminton",
            i18n: "map_badminton.badminton",
            icon: "icon-yumaoqiu-weixuanzhong",
            href: "badminton",
            sport_id: 24,
            activeIcon: "#icon-yumaoqiu-yixuanzhong",
          },
          {
            proModule: "handball",
            i18n: "map_handball.handball",
            icon: "icon-shouqiu-weixuanzhong",
            href: "handball",
            sport_id: 7,
            activeIcon: "#icon-shouqiu-yixuanzhong",
          },
          {
            proModule: "snooker",
            i18n: "map_snooker.snooker",
            icon: "icon-sinuoke-weixuanzhong",
            href: "snooker",
            sport_id: 19,
            activeIcon: "#icon-sinuoke-yixuanzhong",
          },
          {
            proModule: "waterpolo",
            i18n: "map_waterpolo.waterpolo",
            icon: "icon-shuiqiu-weixuanzhong",
            href: "waterpolo",
            sport_id: 22,
            activeIcon: "#icon-shuiqiu-yixuanzhong",
          },
        ],
        C = {
          football: "Football",
          basketball: "Basketball",
          tennis: "Tennis",
          icehockey: "Hockey",
          volleyball: "Volleyball",
          tabletennis: "Table Tennis",
          baseball: "Baseball",
          badminton: "Badminton",
          amfootball: "AM. Football",
          handball: "Handball",
          waterpolo: "Water Polo",
          snooker: "Snooker",
          cricket: "Cricket",
          esports: "Esports",
        },
        P = [
          "",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        E = {
          football_Stats: [
            { name: "Blocked Shots", key: "137" },
            { name: "Penalties Awarded", key: "108" },
            { name: "Corner Kicks", key: "102" },
            { name: "Offsides", key: "132" },
            { name: "Fouls", key: "151" },
            { name: "Yellow Cards", key: "103" },
            { name: "Red Cards", key: "104" },
            { name: "Total Passes", key: "140" },
            { name: "Key Passes", key: "142" },
            { name: "Accurate Passes", key: "10001" },
            { name: "Accurate Crosses", key: "10006" },
            { name: "Accurate Long Balls", key: "10005" },
            { name: "Tackles", key: "139" },
            { name: "Interceptions", key: "138" },
            { name: "Clearances", key: "136" },
            { name: "Saves", key: "152" },
          ],
          basketball_Stats: [
            { name: "Field Goals", key: "20007" },
            { name: "Field Goals %", key: "20008" },
            { name: "3-Point", key: "20009" },
            { name: "3-Point %", key: "20010" },
            { name: "Free Throws", key: "20005" },
            { name: "Free Throws %", key: "20006" },
            { name: "Rebounds %", key: "226" },
            { name: "Offensive Rebounds", key: "224" },
            { name: "Defensive Rebounds", key: "225" },
            { name: "Assists", key: "227" },
            { name: "Blocks", key: "229" },
            { name: "Steals", key: "228" },
            { name: "Turnovers", key: "230" },
            { name: "Fouls", key: "205" },
          ],
          tennis_Stats: [
            { name: "Aces", key: "301" },
            { name: "Double Faults", key: "311" },
            { name: "1st serve", key: "30006" },
            { name: "1st serve %", key: "304" },
            { name: "2nd serve", key: "30007" },
            { name: "2nd serve %", key: "307" },
            { name: "Break points", key: "30008" },
            { name: "Break points %", key: "310" },
            { name: "Unforced error", key: "312" },
            { name: "Points won", key: "313" },
            { name: "1st serve points", key: "30009" },
            { name: "1st serve points %", key: "315" },
            { name: "2nd serve points", key: "30010" },
            { name: "2nd serve points %", key: "317" },
            { name: "Max points in a row", key: "318" },
            { name: "Receiver points won", key: "319" },
          ],
          volleyball_Stats: [
            { name: "Total Points", key: "1003" },
            { name: "Service Points", key: "100003" },
            { name: "Service Points %", key: "1008" },
            { name: "Receiver Points", key: "100004" },
            { name: "Receiver Points %", key: "1011" },
            { name: "Aces", key: "1001" },
            { name: "Service Errors", key: "1004" },
            { name: "Max points in a row", key: "1002" },
            { name: "Timeouts", key: "1005" },
          ],
          icehockey_Stats: [
            { name: "Shots on Goal", key: "806" },
            { name: "Shooting %", key: "807" },
            { name: "Blocked Shots", key: "808" },
            { name: "Goalkeeper Saves", key: "809" },
            { name: "Saves %", key: "810" },
            { name: "Penalties", key: "804" },
            { name: "Penalty in minutes", key: "811" },
            { name: "Power-play Goals", key: "802" },
            { name: "Shorthanded Goals", key: "803" },
            { name: "Power-play %", key: "812" },
            { name: "Penalty Kill %", key: "813" },
            { name: "Hits", key: "814" },
            { name: "Faceoffs Won", key: "815" },
            { name: "Faceoffs %", key: "816" },
            { name: "Empty Net Goals", key: "817" },
          ],
          baseball_Stats: [
            { name: "Hits", key: "601" },
            { name: "Errors", key: "602" },
            { name: "2B · Doubles", key: "603" },
            { name: "3B · Triples", key: "604" },
            { name: "Home Runs", key: "605" },
            { name: "At Bats", key: "611" },
            { name: "Batting %", key: "613" },
            { name: "Run Batted in", key: "606" },
            { name: "Left on Base", key: "607" },
            { name: "Stolen Bases", key: "610" },
            { name: "Strike Outs", key: "609" },
            { name: "Base on Balls", key: "608" },
          ],
          amfootball_Stats: [
            { name: "1st Downs", key: "1757" },
            { name: "Total Yards", key: "1766" },
            { name: "Passing Yards", key: "1769" },
            { name: "Rushing Yards", key: "1711" },
            { name: "Penalties", key: "1781" },
            { name: "Penalties Yards", key: "1782" },
            { name: "Turnovers", key: "1783" },
            { name: "Punts", key: "1751" },
            { name: "Touchdowns", key: "170001" },
            { name: "Rushing Touchdowns", key: "1713" },
            { name: "Passing Touchdowns", key: "1705" },
            { name: "Turnover Touchdowns", key: "1730" },
            { name: "Field Goals Succeeded", key: "1744" },
            { name: "Field Goals Attempted", key: "1745" },
            { name: "Interception Thrown", key: "1721" },
            { name: "Fumbles Lost", key: "1722" },
            { name: "Sacks Allowed", key: "1774" },
          ],
          tabletennis_Stats: [
            { name: "Total Points", key: "1101" },
            { name: "Service Points", key: "110003" },
            { name: "Service Points %", key: "1107" },
            { name: "Receiver Points", key: "110004" },
            { name: "Receiver Points %", key: "1110" },
            { name: "Comeback to win", key: "1103" },
            { name: "Service Errors", key: "1111" },
            { name: "Biggest lead", key: "1104" },
            { name: "Max points in a row", key: "1102" },
          ],
          badminton_Stats: [
            { name: "Total Points", key: "2401" },
            { name: "Service Points", key: "240003" },
            { name: "Service Points %", key: "2409" },
            { name: "Receiver Points", key: "240004" },
            { name: "Receiver Points %", key: "2412" },
            { name: "Comeback to win", key: "2404" },
            { name: "Service Errors", key: "2406" },
            { name: "Biggest lead", key: "2405" },
            { name: "Max points in a row", key: "2402" },
          ],
        };
    },
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "w", function () {
        return ve;
      }),
        n.d(t, "o", function () {
          return _e;
        }),
        n.d(t, "F", function () {
          return ke;
        }),
        n.d(t, "Y", function () {
          return Ae;
        }),
        n.d(t, "x", function () {
          return je;
        }),
        n.d(t, "Q", function () {
          return we;
        }),
        n.d(t, "M", function () {
          return Se;
        }),
        n.d(t, "L", function () {
          return Te;
        }),
        n.d(t, "K", function () {
          return Me;
        }),
        n.d(t, "O", function () {
          return xe;
        }),
        n.d(t, "N", function () {
          return Oe;
        }),
        n.d(t, "a", function () {
          return Ie;
        }),
        n.d(t, "lb", function () {
          return De;
        }),
        n.d(t, "q", function () {
          return Ce;
        }),
        n.d(t, "p", function () {
          return Pe;
        }),
        n.d(t, "P", function () {
          return Ee;
        }),
        n.d(t, "s", function () {
          return ze;
        }),
        n.d(t, "l", function () {
          return Le;
        }),
        n.d(t, "r", function () {
          return Re;
        }),
        n.d(t, "n", function () {
          return Be;
        }),
        n.d(t, "m", function () {
          return Ne;
        }),
        n.d(t, "y", function () {
          return Fe;
        }),
        n.d(t, "u", function () {
          return Ue;
        }),
        n.d(t, "v", function () {
          return He;
        }),
        n.d(t, "t", function () {
          return qe;
        }),
        n.d(t, "tb", function () {
          return Ke;
        }),
        n.d(t, "ub", function () {
          return Qe;
        }),
        n.d(t, "vb", function () {
          return $e;
        }),
        n.d(t, "Bb", function () {
          return Je;
        }),
        n.d(t, "Ab", function () {
          return Ye;
        }),
        n.d(t, "Db", function () {
          return Ze;
        }),
        n.d(t, "Cb", function () {
          return Xe;
        }),
        n.d(t, "Eb", function () {
          return et;
        }),
        n.d(t, "Fb", function () {
          return tt;
        }),
        n.d(t, "qb", function () {
          return at;
        }),
        n.d(t, "sb", function () {
          return nt;
        }),
        n.d(t, "rb", function () {
          return it;
        }),
        n.d(t, "c", function () {
          return ot;
        }),
        n.d(t, "b", function () {
          return st;
        }),
        n.d(t, "db", function () {
          return lt;
        }),
        n.d(t, "bb", function () {
          return ct;
        }),
        n.d(t, "yb", function () {
          return pt;
        }),
        n.d(t, "zb", function () {
          return ut;
        }),
        n.d(t, "xb", function () {
          return mt;
        }),
        n.d(t, "kb", function () {
          return ht;
        }),
        n.d(t, "ab", function () {
          return ft;
        }),
        n.d(t, "Wb", function () {
          return yt;
        }),
        n.d(t, "z", function () {
          return gt;
        }),
        n.d(t, "jb", function () {
          return bt;
        }),
        n.d(t, "hb", function () {
          return vt;
        }),
        n.d(t, "ib", function () {
          return _t;
        }),
        n.d(t, "fb", function () {
          return kt;
        }),
        n.d(t, "cb", function () {
          return At;
        }),
        n.d(t, "Z", function () {
          return jt;
        }),
        n.d(t, "nb", function () {
          return wt;
        }),
        n.d(t, "wb", function () {
          return St;
        }),
        n.d(t, "gb", function () {
          return Tt;
        }),
        n.d(t, "V", function () {
          return Mt;
        }),
        n.d(t, "W", function () {
          return xt;
        }),
        n.d(t, "Ib", function () {
          return Ot;
        }),
        n.d(t, "Jb", function () {
          return It;
        }),
        n.d(t, "Gb", function () {
          return Dt;
        }),
        n.d(t, "Hb", function () {
          return Ct;
        }),
        n.d(t, "A", function () {
          return Pt;
        }),
        n.d(t, "H", function () {
          return Et;
        }),
        n.d(t, "mb", function () {
          return zt;
        }),
        n.d(t, "G", function () {
          return Lt;
        }),
        n.d(t, "ob", function () {
          return Rt;
        }),
        n.d(t, "Kb", function () {
          return Bt;
        }),
        n.d(t, "Vb", function () {
          return Nt;
        }),
        n.d(t, "Mb", function () {
          return Ft;
        }),
        n.d(t, "Nb", function () {
          return Ut;
        }),
        n.d(t, "Tb", function () {
          return Ht;
        }),
        n.d(t, "Qb", function () {
          return qt;
        }),
        n.d(t, "Ub", function () {
          return Wt;
        }),
        n.d(t, "Sb", function () {
          return Vt;
        }),
        n.d(t, "Rb", function () {
          return Gt;
        }),
        n.d(t, "Lb", function () {
          return Kt;
        }),
        n.d(t, "Ob", function () {
          return Qt;
        }),
        n.d(t, "Pb", function () {
          return $t;
        }),
        n.d(t, "pb", function () {
          return Jt;
        }),
        n.d(t, "eb", function () {
          return Yt;
        }),
        n.d(t, "g", function () {
          return Zt;
        }),
        n.d(t, "d", function () {
          return Xt;
        }),
        n.d(t, "e", function () {
          return ea;
        }),
        n.d(t, "f", function () {
          return ta;
        }),
        n.d(t, "k", function () {
          return aa;
        }),
        n.d(t, "j", function () {
          return na;
        }),
        n.d(t, "i", function () {
          return ia;
        }),
        n.d(t, "h", function () {
          return oa;
        }),
        n.d(t, "J", function () {
          return ra;
        }),
        n.d(t, "S", function () {
          return sa;
        }),
        n.d(t, "R", function () {
          return la;
        }),
        n.d(t, "U", function () {
          return ca;
        }),
        n.d(t, "I", function () {
          return pa;
        }),
        n.d(t, "X", function () {
          return da;
        }),
        n.d(t, "T", function () {
          return ua;
        }),
        n.d(t, "D", function () {
          return ma;
        }),
        n.d(t, "C", function () {
          return ha;
        }),
        n.d(t, "E", function () {
          return fa;
        }),
        n.d(t, "B", function () {
          return ya;
        });
      n(17), n(14);
      var o = n(4),
        r = (n(9), n(8), n(6), n(63), n(16)),
        l = n(0),
        c = n(12),
        d = n.n(c),
        m = (n(132), n(105).Root.fromJSON(n(107))),
        h = m.lookup("onescore.app.v1.Matches"),
        f = m.lookup("onescore.app.v1.MatchIncidentStats"),
        y = m.lookup("onescore.app.v1.WebMatchOddsDetail"),
        v = m.lookup("onescore.app.v1.HistoryMatches"),
        _ = m.lookup("onescore.app.v1.MatchIncidents"),
        k = m.lookup("onescore.app.v1.MatchStat"),
        A = m.lookup("onescore.app.v1.WebTables"),
        j = m.lookup("onescore.app.v1.WebMatchData"),
        w = m.lookup("onescore.app.v1.FavoritesIds"),
        S = m.lookup("onescore.app.v1.Favorites"),
        T =
          (m.lookup("onescore.app.v1.DownloadUrl"),
          m.lookup("onescore.app.v1.TeamTransfers")),
        M = m.lookup("onescore.app.v1.WebDbTeam"),
        x = m.lookup("onescore.app.v1.WebDbComp"),
        O = m.lookup("onescore.app.v1.WebDbPlayer"),
        I =
          (m.lookup("onescore.app.v1.DbCompTotal"),
          m.lookup("onescore.app.v1.TeamTotals"),
          m.lookup("onescore.app.v1.PlayerStats")),
        D = m.lookup("onescore.app.v1.DbCompTransfers"),
        C = m.lookup("onescore.app.v1.WebHome"),
        P = m.lookup("onescore.app.v1.MatchLineup"),
        E = m.lookup("onescore.app.v1.WebTables"),
        z = m.lookup("onescore.app.v1.WebMatchData"),
        L = m.lookup("onescore.app.v1.TextLives"),
        R = m.lookup("onescore.app.v1.WebCompMap"),
        B = m.lookup("onescore.app.v1.WebPlayerMap"),
        N = m.lookup("onescore.app.v1.WebTeamMap"),
        F = m.lookup("onescore.app.v1.NewCompTotal"),
        U =
          (m.lookup("onescore.app.v1.TeamLineup"),
          m.lookup("onescore.app.v1.WebDbTeamPlayerTotal")),
        H = m.lookup("onescore.app.v1.WebDbBkPlayer"),
        W = m.lookup("onescore.app.v1.SeoPlayerTotals"),
        V = m.lookup("onescore.app.v1.Stream"),
        G = m.lookup("onescore.app.v1.FiFaRankings"),
        K = m.lookup("onescore.app.v1.SeoBottomItem"),
        Q = m.lookup("onescore.app.v1.MatchOdds"),
        $ = m.lookup("onescore.app.v1.Countries"),
        J = m.lookup("onescore.app.v1.Competitions"),
        Y = m.lookup("onescore.app.v1.MatchCount"),
        Z = m.lookup("onescore.app.v1.MatchBallByBall"),
        X = m.lookup("onescore.app.v1.Teams"),
        ee = m.lookup("onescore.app.v1.WebDbTeamSalary"),
        te = m.lookup("onescore.app.v1.WebDbPlayerSalary"),
        ae = m.lookup("onescore.app.v1.SeoMatch"),
        ne = m.lookup("onescore.app.v1.SeoLineups"),
        ie = m.lookup("onescore.app.v1.SeoTransfers"),
        oe = m.lookup("onescore.app.v1.AdvCopy"),
        re = m.lookup("onescore.app.v1.Search"),
        se = m.lookup("onescore.app.v1.MatchTeamStats"),
        le = m.lookup("onescore.app.v1.MatchOddsDetail"),
        ce = m.lookup("onescore.app.v1.WorldCupHistory"),
        pe = m.lookup("onescore.app.v1.WorldCupSeasonData"),
        de = m.lookup("onescore.app.v1.WorldCupTeams"),
        ue = m.lookup("onescore.app.v1.WorldCupTeamsLineups"),
        me = m.lookup("onescore.app.v1.PlayerPk"),
        he = m.lookup("onescore.app.v1.PlayerPkItems"),
        fe = m.lookup("onescore.app.v1.Rankings"),
        ye = m.lookup("onescore.app.v1.SeoMatchesHistory"),
        ge = m.lookup("onescore.app.v1.MLive"),
        be = m.lookup("onescore.app.v1.MatchScorecards");
      function ve(e) {
        var t = e.date,
          n = void 0 === t ? d()(new Date().getTime()).format("YYYYMMDD") : t,
          o = e.tz,
          l = void 0 === o ? "" : o,
          c = e.lang,
          m = void 0 === c ? 1 : c,
          f = e.sport_id,
          y = void 0 === f ? 1 : f,
          v = "/v1/web/api/matches?lang="
            .concat(m, "&sport_id=")
            .concat(y, "&date=")
            .concat(n, "&tz=")
            .concat(l);
        return Object(r.a)(v, h, "", !0)
          .then(function (e) {
            return e;
          })
          .catch(function (e) {});
      }
      function _e(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = e.tab,
          d = e.tz,
          m = void 0 === d ? "08:00" : d,
          h = "/v1/web/api/match/data?lang="
            .concat(l, "&match_id=")
            .concat(n, "&tz=")
            .concat(m),
          f = [Object(r.a)(h, j)];
        return (
          "overview" == c
            ? (f.push(Me({ match_id: n, lang: l })),
              f.push(Se({ match_id: n, lang: l })))
            : "lineups" == c
            ? f.push(Te({ match_id: n, lang: l }))
            : "h2h" == c
            ? f.push(xe({ match_id: n, lang: l }))
            : "odds" == c ||
              ("standings" == c
                ? f.push(
                    (function (e) {
                      var t = e.match_id,
                        n = void 0 === t ? "" : t,
                        o = e.lang,
                        l = void 0 === o ? 1 : o,
                        c = "/v1/web/api/match/tables?match_id="
                          .concat(n, "&lang=")
                          .concat(l);
                      return Object(r.a)(c, A);
                    })({ match_id: n, lang: l })
                  )
                : "live" == c &&
                  (f.push(Me({ match_id: n, lang: l })),
                  f.push(Se({ match_id: n, lang: l })),
                  f.push(Te({ match_id: n, lang: l })))),
          Promise.all(f)
            .then(function (e) {
              return Promise.resolve({ res: e, tab: c });
            })
            .catch(function (e) {})
        );
      }
      function ke() {
        return Object(r.a)("/v1/web/api/time", "", "nobuf");
      }
      function Ae(e) {
        var t = e.id,
          n = "/v1/web/api/match/s?match_id=".concat(t || "");
        return Object(r.a)(n, V);
      }
      function je(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = "/v1/web/api/match/stats?match_id=".concat(e, "&lang=").concat(t);
        return Object(r.a)(n, f);
      }
      function we(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          c = void 0 === o ? 1 : o,
          d = e.cid,
          m = "/v1/web/api/match/odds_detail?match_id="
            .concat(n, "&lang=")
            .concat(c, "&cid=")
            .concat(d);
        return Object(r.a)(m, y)
          .then(function (e) {
            var t = Object.keys(e),
              n = {};
            return (
              t.forEach(function (t) {
                "company" != t
                  ? ((n[t] = []),
                    e[t].forEach(function (element) {
                      if ("eu" == t) {
                        var e = Object.assign({}, element, {
                          wAm: l.a.calculate1X2(element.w),
                          dAm: l.a.calculate1X2(element.d),
                          lAm: l.a.calculate1X2(element.l),
                        });
                        n[t].push(e);
                      } else {
                        "asia" == t && (element.d = 0 - element.d);
                        var o = Object.assign({}, element, {
                          wAm: l.a.calculateOV_UN(l.a.accAdd(+element.w, 1)),
                          lAm: l.a.calculateOV_UN(l.a.accAdd(+element.l, 1)),
                          w: element.w,
                          l: element.l,
                        });
                        n[t].push(o);
                      }
                    }))
                  : (n[t] = e[t]);
              }),
              n
            );
          })
          .catch(function (e) {});
      }
      function Se(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 1 : o,
          c = "/v1/web/api/match/total?match_id=".concat(n, "&lang=").concat(l);
        return Object(r.a)(c, k);
      }
      function Te(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 1 : o,
          c = "/v1/web/api/match/lineups?match_id="
            .concat(n, "&lang=")
            .concat(l);
        return Object(r.a)(c, P);
      }
      function Me(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 1 : o,
          c = e.last_id,
          d = "/v1/web/api/match/incidents?match_id="
            .concat(n, "&lang=")
            .concat(l, "&last_id=")
            .concat(c || "");
        return Object(r.a)(d, _);
      }
      function xe(e) {
        var t = e.match_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 1 : o,
          c = "/v1/web/api/match/history?match_id="
            .concat(n, "&lang=")
            .concat(l);
        return Object(r.a)(c, v);
      }
      function Oe() {
        return Object(r.a)("/v1/web/api/favorite/ids", w, "", !0);
      }
      function Ie(e, t) {
        return Object(r.b)("/v1/web/api/favorite/add", { type: t, id: e });
      }
      function De(e, t) {
        return Object(r.b)("/v1/web/api/favorite/update", {
          type: t,
          id: e,
          method: 1,
        }).then(function (e) {});
      }
      function Ce(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.team_id,
          l = void 0 === o ? "" : o,
          c = e.date,
          d = void 0 === c ? "" : c,
          m = e.route.params.tab,
          h = "/v1/web/api/football/team?lang="
            .concat(n, "&team_id=")
            .concat(l);
        "schedule" == m &&
          (h = "/v1/web/api/football/team/matches?team_id="
            .concat(l, "&overview=1&lang=")
            .concat(n));
        var f = [Object(r.a)(h, M)];
        return (
          m &&
            "transfers" == m.toLowerCase() &&
            f.push(
              ze({ lang: n, team_id: l, date: d || new Date().getFullYear() })
            ),
          Promise.all(f)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {})
        );
      }
      function Pe(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.team_id,
          l = void 0 === o ? "" : o,
          c = e.date,
          d = e.status,
          m =
            (e.overview,
            "/v1/web/api/football/team/month_matches?lang="
              .concat(n, "&team_id=")
              .concat(l, "&date=")
              .concat(c, "&status=")
              .concat(d));
        return Object(r.a)(m, h);
      }
      function Ee(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.sid,
          l = void 0 === o ? 1 : o,
          c = "/v1/web/api/matches/future?lang=".concat(n, "&sid=").concat(l);
        return Object(r.a)(c, h);
      }
      function ze(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.team_id,
          l = void 0 === o ? "" : o,
          c = e.date,
          d = "/v1/web/api/football/team/transfers?lang="
            .concat(n, "&team_id=")
            .concat(l, "&date=")
            .concat(c);
        return Object(r.a)(d, T);
      }
      function Le(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.comp_id,
          l = e.season_id,
          c = void 0 === l ? "" : l,
          d = "/v1/web/api/football/comp?lang="
            .concat(n, "&comp_id=")
            .concat(o, "&season_id=")
            .concat(c);
        return Object(r.a)(d, x);
      }
      function Re(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.comp_id,
          l = e.team_id,
          c = void 0 === l ? "" : l,
          d = e.date,
          m = void 0 === d ? "" : d,
          h = "/v1/web/api/football/comp/transfers?lang="
            .concat(n, "&comp_id=")
            .concat(o, "&team_id=")
            .concat(c, "&date=")
            .concat(m);
        return Object(r.a)(h, D);
      }
      function Be(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = (e.team_id, e.type),
          d = void 0 === c ? "" : c,
          m = e.n,
          h = void 0 === m ? 1 : m,
          f = "/v1/web/api/football/comp/stats?lang="
            .concat(n, "&season_id=")
            .concat(l, "&type=")
            .concat(d, "&n=")
            .concat(h, "&kind=1");
        return Object(r.a)(f, I);
      }
      function Ne(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.team_id,
          d = void 0 === c ? "" : c,
          m = e.type,
          h = void 0 === m ? "" : m,
          f = e.n,
          y = void 0 === f ? 1 : f,
          v = "/v1/web/api/football/comp/stats?lang="
            .concat(n, "&season_id=")
            .concat(l, "&team_id=")
            .concat(d, "&type=")
            .concat(h, "&n=")
            .concat(y, "&kind=0");
        return Object(r.a)(v, I);
      }
      function Fe(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.player_id,
          l = void 0 === o ? "" : o,
          c = "/v1/web/api/football/player?lang="
            .concat(n, "&player_id=")
            .concat(l);
        return Object(r.a)(c, O);
      }
      function Ue(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.sport_id,
          l = void 0 === o ? 2 : o;
        return Object(r.a)(
          "/v1/web/api/hot/comp?lang=".concat(n, "&sport_id=").concat(l),
          C
        );
      }
      function He(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.sport_id,
          l = void 0 === o ? 2 : o,
          c = "/v1/web/api/countries?lang="
            .concat(n, "&sport_id=")
            .concat(l, "&cache=1");
        return Object(r.a)(c, $);
      }
      function qe(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.sport_id,
          l = void 0 === o ? 2 : o,
          c = e.country_id,
          d = void 0 === c ? 0 : c,
          m = e.category_id,
          h = void 0 === m ? 0 : m;
        return Object(r.a)(
          "/v1/web/api/country/comp?lang="
            .concat(n, "&sport_id=")
            .concat(l, "&country_id=")
            .concat(d, "&category_id=")
            .concat(h, "&cache=1"),
          J
        );
      }
      function We(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.match_id,
          l = void 0 === o ? "" : o;
        return Object(r.a)(
          "/v1/web/api/match/lineups?lang=".concat(n, "&match_id=").concat(l),
          P
        );
      }
      function Ve(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.match_id,
          l = void 0 === o ? "" : o,
          c = e.tz;
        return Object(r.a)(
          "/v1/web/api/match/data?lang="
            .concat(n, "&match_id=")
            .concat(l, "&tz=")
            .concat(c),
          z
        );
      }
      function Ge() {
        return (Ge = Object(o.a)(
          regeneratorRuntime.mark(function e(t) {
            var n, o, r, l;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.lang),
                      (o = void 0 === n ? 2 : n),
                      (r = t.match_id),
                      (l = void 0 === r ? "" : r),
                      (e.next = 3),
                      Se({ lang: o, match_id: l })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ke(e) {
        var t = e.type,
          n = "/v1/web/api/football/team/map?type=".concat(
            void 0 === t ? "" : t
          );
        return Object(r.a)(n, N);
      }
      function Qe(e) {
        var t = e.type,
          n = "/v1/web/api/football/comp/map?type=".concat(
            void 0 === t ? "" : t
          );
        return Object(r.a)(n, R);
      }
      function $e(e) {
        var t = e.type,
          n = "/v1/web/api/football/player/map?type=".concat(
            void 0 === t ? "" : t
          );
        return Object(r.a)(n, B);
      }
      function Je(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/comp?comp_id="
            .concat(n, "&season_id=")
            .concat(l, "&lang=")
            .concat(d);
        return Object(r.a)(m, x);
      }
      function Ye(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/comp/matches?comp_id="
            .concat(n, "&season_id=")
            .concat(l, "&lang=")
            .concat(d);
        return Object(r.a)(m, x);
      }
      function Ze(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/comp/tables?comp_id="
            .concat(n, "&season_id=")
            .concat(l, "&lang=")
            .concat(d);
        return Object(r.a)(m, x);
      }
      function Xe(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/comp/player_totals?comp_id="
            .concat(n, "&season_id=")
            .concat(l, "&lang=")
            .concat(d);
        return Object(r.a)(m, F);
      }
      function et(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = e.season_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/comp/team_totals?comp_id="
            .concat(n, "&season_id=")
            .concat(l, "&lang=")
            .concat(d);
        return Object(r.a)(m, F);
      }
      function tt(e) {
        var t = e.comp_id,
          n = void 0 === t ? "" : t,
          o = (e.season_id, e.lang),
          l = void 0 === o ? 2 : o,
          c = "/v1/web/api/basketball/comp/teams?comp_id="
            .concat(n, "&lang=")
            .concat(l);
        return Object(r.a)(c, x);
      }
      function at(e) {
        var t = e.team_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = "/v1/web/api/basketball/team?team_id="
            .concat(n, "&lang=")
            .concat(l);
        return Object(r.a)(c, M);
      }
      function nt(e) {
        var t = e.season_id,
          n = void 0 === t ? "" : t,
          o = e.team_id,
          l = void 0 === o ? "" : o,
          c = e.lang,
          d = void 0 === c ? 2 : c,
          m = "/v1/web/api/basketball/team/players_total?team_id="
            .concat(l, "&season_id=")
            .concat(n, "&lang=")
            .concat(d);
        return Object(r.a)(m, U);
      }
      function it(e) {
        var t = e.team_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = e.season_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/basketball/team/lineups?team_id="
            .concat(n, "&lang=")
            .concat(l, "&season_id=")
            .concat(d);
        return Object(r.a)(m, M);
      }
      function ot(e) {
        var t = e.player_id,
          n = void 0 === t ? "" : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = "/v1/web/api/basketball/player?player_id="
            .concat(n, "&lang=")
            .concat(l);
        return Object(r.a)(c, H);
      }
      function st(e) {
        var t = e.match_id,
          n = void 0 === t ? null : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = e.tab,
          d = e.tz,
          m = void 0 === d ? "08:00" : d,
          h = e.proModule,
          f = [Ve({ match_id: n, lang: l, tz: m })];
        return (
          "boxscore" == c
            ? f.push(We({ match_id: n, lang: l }))
            : "odds" == c ||
              ("h2h" == c
                ? f.push(xe({ match_id: n, lang: l }))
                : "standings" == c
                ? f.push(
                    (function (e) {
                      var t = e.lang,
                        n = void 0 === t ? 2 : t,
                        o = e.match_id,
                        l = void 0 === o ? "" : o;
                      return Object(r.a)(
                        "/v1/web/api/match/tables?lang="
                          .concat(n, "&match_id=")
                          .concat(l),
                        E
                      );
                    })({ match_id: n, lang: l })
                  )
                : "live" == c
                ? "basketball" == h
                  ? f.push(
                      We({ match_id: n, lang: l }),
                      (function (e) {
                        var t = e.lang,
                          n = void 0 === t ? 2 : t,
                          o = e.match_id,
                          l = void 0 === o ? "" : o;
                        return Object(r.a)(
                          "/v1/web/api/match/tlive?lang="
                            .concat(n, "&match_id=")
                            .concat(l),
                          L
                        );
                      })({ match_id: n, lang: l })
                    )
                  : "esports" !== h
                  ? f.push(
                      Promise.resolve({}),
                      Promise.resolve({}),
                      (function (e) {
                        return Ge.apply(this, arguments);
                      })({ match_id: n, lang: l })
                    )
                  : f.push(
                      Promise.resolve({}),
                      Promise.resolve({}),
                      Promise.resolve({})
                    )
                : "scorecard" === c &&
                  f.push(
                    (function (e) {
                      var t = e.match_id,
                        n = "/v1/web/api/match/scorecards?match_id=".concat(t);
                      return Object(r.a)(n, be);
                    })({ match_id: n })
                  )),
          Promise.all(f)
            .then(function (e) {
              return Promise.resolve({ res: e, tab: c });
            })
            .catch(function (e) {})
        );
      }
      function lt(e) {
        var t = e.sid,
          n = void 0 === t ? 1 : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = "/v1/web/api/matches/h2h?sid=".concat(n, "&lang=").concat(l);
        return Object(r.a)(c, h);
      }
      function ct(e) {
        var t = e.sid,
          n = e.home,
          o = e.away,
          l = e.lang,
          c = "/v1/web/api/match/h2h?sid="
            .concat(t, "&home=")
            .concat(n, "&away=")
            .concat(o, "&lang=")
            .concat(l);
        return Object(r.a)(c, ye);
      }
      function pt(e) {
        var t = e.season_id,
          n = e.comp_name,
          o = e.lang,
          l = "/v1/web/api/comp/top_scores?season_id="
            .concat(t, "&comp_name=")
            .concat(n, "&lang=")
            .concat(o);
        return Object(r.a)(l, W);
      }
      function ut(e) {
        var t = e.season_id,
          n = e.comp_name,
          o = e.team_name,
          l = e.lang,
          c = "/v1/web/api/team/top_scores?season_id="
            .concat(t, "&comp_name=")
            .concat(n, "&team_name=")
            .concat(o, "&lang=")
            .concat(l);
        return Object(r.a)(c, W);
      }
      function mt(e) {
        var t = e.sid,
          n = void 0 === t ? 1 : t,
          o = e.lang,
          l = void 0 === o ? 2 : o,
          c = e.tz,
          d = void 0 === c ? "08:00" : c,
          m = "/v1/web/api/today/matches?sid="
            .concat(n, "&tz=")
            .concat(d, "&lang=")
            .concat(l);
        return Object(r.a)(m, h);
      }
      function ht(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.gender,
          l = void 0 === o ? 1 : o,
          c = e.pub_time,
          d = void 0 === c ? 0 : c;
        return Object(r.a)(
          "/v1/web/api/football/fifa/ranking?lang="
            .concat(n, "&gender=")
            .concat(l, "&pub_time=")
            .concat(d, "&cache=1"),
          G
        );
      }
      function ft(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.sid,
          l = "/v1/web/api/matches/hot_h2h?lang=".concat(n, "&sid=").concat(o);
        return Object(r.a)(l, h);
      }
      function yt(e) {
        var t = e.lang,
          n = void 0 === t ? 2 : t,
          o = e.match_id,
          l = void 0 === o ? "" : o,
          c = e.tz,
          d = "/v1/web/api/match/data?lang="
            .concat(n, "&match_id=")
            .concat(l, "&tz=")
            .concat(c);
        return Object(r.a)(d, j);
      }
      function gt(e) {
        var t = e.lang,
          n = "/v1/web/api/bottom/default?lang=".concat(t);
        return Object(r.a)(n, K);
      }
      function bt(e) {
        var t = e.sport_id,
          n = e.lang,
          o = "/v1/web/api/prediction/matches?sport_id="
            .concat(t, "&lang=")
            .concat(n);
        return Object(r.a)(o, h);
      }
      function vt(e) {
        var t = e.sport_id,
          n = e.lang,
          o = "/v1/web/api/prediction/bottom?sport_id="
            .concat(t, "&lang=")
            .concat(n);
        return Object(r.a)(o, h);
      }
      function _t(e) {
        var t = e.home,
          n = void 0 === t ? "" : t,
          o = e.away,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = e.lang,
          m = e.id,
          h = void 0 === m ? "" : m,
          f = "/v1/web/api/prediction/match?home="
            .concat(n, "&away=")
            .concat(l, "&sport_id=")
            .concat(c, "&lang=")
            .concat(d)
            .concat(h ? "&id=".concat(h) : "");
        return Object(r.a)(f, ye);
      }
      function kt(e) {
        var t = e.match_id,
          code = e.code,
          n = e.tab;
        code = localStorage.cid;
        var o = "/v1/web/api/match/odds_list?match_id="
          .concat(t || "", "&code=")
          .concat(code || "");
        return n && (o += "&tab=1"), Object(r.a)(o, Q);
      }
      function At() {
        return Object(r.a)("/v1/web/api/matches/count", Y);
      }
      function jt(e) {
        var t = e.match_id,
          n = "/v1/web/api/match/ball_by_ball?match_id=".concat(t);
        return Object(r.a)(n, Z);
      }
      function wt(e) {
        var t = e.sport_id,
          n = e.lang,
          o = "/v1/web/api/salary/list?sid=".concat(t, "&lang=").concat(n);
        return Object(r.a)(o, X);
      }
      function St(e) {
        var t = e.lang,
          n = e.team_id,
          o = "/v1/web/api/team/salary?lang="
            .concat(t, "&team_id=")
            .concat(n || "");
        return Object(r.a)(o, ee);
      }
      function Tt(e) {
        var t = e.lang,
          n = e.player_id,
          o = void 0 === n ? "" : n,
          l = "/v1/web/api/player/salary?lang="
            .concat(t, "&player_id=")
            .concat(o);
        return Object(r.a)(l, te);
      }
      function Mt(e) {
        var t = e.lang,
          n = e.sport_id,
          o = e.home,
          l = e.away,
          c = "/v1/web/api/seo/match?lang="
            .concat(t, "&sport_id=")
            .concat(n, "&home=")
            .concat(o, "&away=")
            .concat(l);
        return Object(r.a)(c, ae);
      }
      function xt(e) {
        var t = e.lang,
          n = e.home_team_id,
          o = e.home_team_match_id,
          l = e.away_team_id,
          c = e.away_team_match_id,
          d = "/v1/web/api/seo/teams/lineup?lang="
            .concat(t, "&home_team_id=")
            .concat(n, "&home_team_match_id=")
            .concat(o, "&away_team_id=")
            .concat(l, "&away_team_match_id=")
            .concat(c);
        return Object(r.a)(d, ne);
      }
      function Ot(e) {
        var t = e.lang,
          n = e.year,
          o = e.hash_id,
          l = "/v1/web/api/seo/transfers/default_search?lang="
            .concat(t, "&year=")
            .concat(n, "&hash_id=")
            .concat(o);
        return Object(r.a)(l, ie);
      }
      function It(e) {
        var t = e.keyword,
          n = e.lang,
          o = e.type,
          l = "/v1/web/api/seo/transfers/search?lang="
            .concat(n, "&keyword=")
            .concat(t, "&type=")
            .concat(o, "&cache=1");
        return Object(r.a)(l, ie);
      }
      function Dt(e) {
        var t = e.year,
          n = e.hash_id,
          o = e.sort_type,
          l = e.lang,
          c = e.page,
          d = "/v1/web/api/seo/transfers?lang="
            .concat(l, "&year=")
            .concat(t, "&hash_id=")
            .concat(n, "&sort_type=")
            .concat(o, "&page=")
            .concat(c, "&cache=1");
        return Object(r.a)(d, ie);
      }
      function Ct(e) {
        var t = e.hash_id,
          n = e.lang,
          o = "/v1/web/api/seo/transfers/bottom?lang="
            .concat(n, "&hash_id=")
            .concat(t, "&cache=1");
        return Object(r.a)(o, ie);
      }
      function Pt(e) {
        var t = e.lang,
          n = "/v1/web/api/adv?lang=".concat(t);
        return Object(r.a)(n, oe, "", "");
      }
      function Et(e) {
        var t = e.lang,
          n = e.tz,
          o = e.status,
          l = "/v1/web/api/favorite/matches?lang="
            .concat(t, "&tz=")
            .concat(n, "&status=")
            .concat(o);
        return Object(r.a)(l, S);
      }
      function zt(e) {
        return Object(r.b)(
          "/v1/web/api/favorite/remove_history_matches",
          { lang: e },
          S
        );
      }
      function Lt(e) {
        var t = e.lang,
          n = e.type,
          o = "/v1/web/api/favorite/items?lang=".concat(t, "&type=").concat(n);
        return Object(r.a)(o, S);
      }
      function Rt(e) {
        var t = e.lang,
          n = e.keyword,
          o = e.page,
          l = e.type,
          c = e.sport_id,
          d = "/v1/web/api/database/search?lang="
            .concat(t, "&keyword=")
            .concat(n, "&page=")
            .concat(o, "&type=")
            .concat(l, "&sport_id=")
            .concat(c);
        return Object(r.a)(d, re);
      }
      function Bt(e) {
        var t = e.lang,
          n = "/v1/web/api/world_cup/home?lang=".concat(t);
        return Object(r.a)(n, ce);
      }
      function Nt(e) {
        var t = e.lang,
          n = "/v1/web/api/world_cup/winners?lang=".concat(t);
        return Object(r.a)(n, ce);
      }
      function Ft(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/overview?lang="
            .concat(t, "&name=")
            .concat(n);
        return Object(r.a)(o, pe);
      }
      function Ut(e) {
        var t = e.lang,
          n = e.name,
          o = e.qualifiers,
          l = "/v1/web/api/world_cup/qualifiers/matches?lang="
            .concat(t, "&name=")
            .concat(n, "&qualifiers=")
            .concat(o);
        return Object(r.a)(l, pe);
      }
      function Ht(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/tables?lang="
            .concat(t, "&name=")
            .concat(n);
        return Object(r.a)(o, pe);
      }
      function qt(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/matches?lang="
            .concat(t, "&name=")
            .concat(n);
        return Object(r.a)(o, pe);
      }
      function Wt(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/teams?lang=".concat(t, "&name=").concat(n);
        return Object(r.a)(o, de);
      }
      function Vt(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/stadiums?lang="
            .concat(t, "&name=")
            .concat(n);
        return Object(r.a)(o, pe);
      }
      function Gt(e) {
        var t = e.lang,
          n = e.name,
          o = "/v1/web/api/world_cup/lineups?lang="
            .concat(t, "&name=")
            .concat(n);
        return Object(r.a)(o, ue);
      }
      function Kt(e) {
        var t = e.lang,
          n = e.name,
          o = e.group,
          l = "/v1/web/api/world_cup/groups?lang="
            .concat(t, "&name=")
            .concat(n, "&group=")
            .concat(o);
        return Object(r.a)(l, pe);
      }
      function Qt(e) {
        var t = e.lang,
          n = e.name,
          o = e.qualifiers,
          l = "/v1/web/api/world_cup/qualifiers/overview?lang="
            .concat(t, "&name=")
            .concat(n, "&qualifiers=")
            .concat(o);
        return Object(r.a)(l, pe);
      }
      function $t(e) {
        var t = e.lang,
          n = e.name,
          o = e.qualifiers,
          l = "/v1/web/api/world_cup/qualifiers/totals?lang="
            .concat(t, "&name=")
            .concat(n, "&qualifiers=")
            .concat(o);
        return Object(r.a)(l, I);
      }
      function Jt(e) {
        var t = e.match_id,
          n = "/v1/web/api/match/team_stats?match_id=".concat(t || "");
        return Object(r.a)(n, se);
      }
      function Yt(e) {
        var t = e.match_id,
          n = e.cid,
          o = e.odds_type,
          l = "/v1/web/api/match/odds/detail?match_id="
            .concat(t || "", "&cid=")
            .concat(n, "&odds_type=")
            .concat(o);
        return Object(r.a)(l, le);
      }
      function Zt(e) {
        var t = e.lang,
          n = e.competition_id,
          o = e.season_id,
          l = "/v1/web/api/database/competition/info?lang="
            .concat(t, "&competition_id=")
            .concat(n, "&season_id=")
            .concat(o);
        return Object(r.a)(l, x);
      }
      function Xt(e) {
        var t = e.lang,
          n = e.competition_id,
          o = e.season_id,
          l = "/v1/web/api/database/competition/overview?lang="
            .concat(t, "&competition_id=")
            .concat(n, "&season_id=")
            .concat(o);
        return Object(r.a)(l, x);
      }
      function ea(e) {
        var t = e.lang,
          n = e.competition_id,
          o = e.season_id,
          l = "/v1/web/api/database/competition/matches?lang="
            .concat(t, "&competition_id=")
            .concat(n, "&season_id=")
            .concat(o);
        return Object(r.a)(l, x);
      }
      function ta(e) {
        var t = e.lang,
          n = e.competition_id,
          o = e.season_id,
          l = "/v1/web/api/database/competition/tables?lang="
            .concat(t, "&competition_id=")
            .concat(n, "&season_id=")
            .concat(o);
        return Object(r.a)(l, x);
      }
      function aa(e) {
        var t = e.lang,
          n = e.team_id,
          o = "/v1/web/api/database/team/info?lang="
            .concat(t, "&team_id=")
            .concat(n);
        return Object(r.a)(o, M);
      }
      function na(e) {
        var t = e.lang,
          n = e.team_id,
          o = "/v1/web/api/database/team/overview?lang="
            .concat(t, "&team_id=")
            .concat(n);
        return Object(r.a)(o, M);
      }
      function ia(e) {
        var t = e.lang,
          n = e.player_id,
          o = "/v1/web/api/database/player/info?lang="
            .concat(t, "&player_id=")
            .concat(n);
        return Object(r.a)(o, O);
      }
      function oa(e) {
        var t = e.lang,
          n = e.player_id,
          o = "/v1/web/api/database/player/overview?lang="
            .concat(t, "&player_id=")
            .concat(n);
        return Object(r.a)(o, O);
      }
      function ra(e) {
        var t = e.lang,
          n = "/v1/web/api/advertising/countries?lang=".concat(t);
        return Object(r.a)(n, "", "nobuf");
      }
      function sa(e) {
        var t = e.sport_id,
          n = e.lang,
          o = "/v1/web/api/seo/players/comparisons?sport_id="
            .concat(t, "&lang=")
            .concat(n);
        return Object(r.a)(o, he);
      }
      function la(e) {
        var t = e.sport_id,
          n = e.home,
          o = e.away,
          l = e.lang,
          c = "/v1/web/api/seo/player/comparisons?sport_id="
            .concat(t, "&home=")
            .concat(n, "&away=")
            .concat(o, "&lang=")
            .concat(l);
        return Object(r.a)(c, me);
      }
      function ca(e) {
        var t = e.lang,
          n = e.category,
          o = e.type,
          l = e.pub_time,
          c = e.sport_id,
          d = "/v1/web/api/database/rankings?lang="
            .concat(t, "&category=")
            .concat(n, "&type=")
            .concat(o, "&pub_time=")
            .concat(l, "&sport_id=")
            .concat(c);
        return Object(r.a)(d, fe);
      }
      function pa(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.id,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/database/competition/predictions?lang="
            .concat(n, "&id=")
            .concat(l, "&sport_id=")
            .concat(d);
        return Object(r.a)(m, h);
      }
      function da(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.id,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/database/team/predictions?lang="
            .concat(n, "&id=")
            .concat(l, "&sport_id=")
            .concat(d);
        return Object(r.a)(m, h);
      }
      function ua(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.id,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/database/player/predictions?lang="
            .concat(n, "&id=")
            .concat(l, "&sport_id=")
            .concat(d);
        return Object(r.a)(m, h);
      }
      function ma(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.id,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/database/player/comparisons?lang="
            .concat(n, "&id=")
            .concat(l, "&sport_id=")
            .concat(d);
        return Object(r.a)(m, h);
      }
      function ha(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.id,
          l = void 0 === o ? "" : o,
          c = e.sport_id,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/database/competition/comparisons?lang="
            .concat(n, "&id=")
            .concat(l, "&sport_id=")
            .concat(d);
        return Object(r.a)(m, h);
      }
      function fa(e) {
        var t = e.lang,
          n = void 0 === t ? "" : t,
          o = e.match_id,
          l = void 0 === o ? "" : o,
          c = e.country_code,
          d = void 0 === c ? "" : c,
          m = "/v1/web/api/match/mlive?lang="
            .concat(n, "&match_id=")
            .concat(l, "&country_code=")
            .concat(d);
        return Object(r.a)(m, ge);
      }
      function ya(e) {
        var t = e.lang,
          n = e.country_id,
          o = e.match_id,
          l = e.ad_ids,
          c = e.company_ids,
          d = "/v1/web/api/match_ads?lang="
            .concat(t, "&country_id=")
            .concat(n, "&match_id=")
            .concat(o, "&ad_ids=")
            .concat(l, "&company_ids=")
            .concat(c);
        return Object(r.a)(d, oe, "", "");
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "host", function () {
          return host;
        }),
        __webpack_require__.d(__webpack_exports__, "toThousands", function () {
          return toThousands;
        }),
        __webpack_require__.d(__webpack_exports__, "timeAgo", function () {
          return timeAgo;
        }),
        __webpack_require__.d(__webpack_exports__, "isNull", function () {
          return isNull;
        }),
        __webpack_require__.d(__webpack_exports__, "isNull2", function () {
          return isNull2;
        }),
        __webpack_require__.d(__webpack_exports__, "isNullAbs", function () {
          return isNullAbs;
        }),
        __webpack_require__.d(__webpack_exports__, "trim", function () {
          return trim;
        }),
        __webpack_require__.d(__webpack_exports__, "getWeeks", function () {
          return getWeeks;
        }),
        __webpack_require__.d(__webpack_exports__, "dateSeats", function () {
          return dateSeats;
        }),
        __webpack_require__.d(__webpack_exports__, "toDate", function () {
          return toDate;
        }),
        __webpack_require__.d(__webpack_exports__, "diffTime", function () {
          return diffTime;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "timeDifference",
          function () {
            return timeDifference;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "toLocaleLowerCase",
          function () {
            return toLocaleLowerCase;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "toLocaleUpperCase",
          function () {
            return toLocaleUpperCase;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "getLogo", function () {
          return getLogo;
        }),
        __webpack_require__.d(__webpack_exports__, "filterParams", function () {
          return filterParams;
        }),
        __webpack_require__.d(__webpack_exports__, "sortby", function () {
          return sortby;
        }),
        __webpack_require__.d(__webpack_exports__, "reverseby", function () {
          return reverseby;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "firstToUpperCase",
          function () {
            return firstToUpperCase;
          }
        );
      var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(25),
        core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(18),
        core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__
          ),
        core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(20),
        core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__
          ),
        core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(24),
        core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__
          ),
        core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(54),
        core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__
          ),
        core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(55),
        core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_5__
          ),
        core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(6),
        core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6___default =
          __webpack_require__.n(
            core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__
          ),
        core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(27),
        core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__
          ),
        core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(26),
        core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_8__
          ),
        _const_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32),
        _util_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
      function host(e) {
        var t = e
          .replace(/^https?:\/\//, "")
          .replace(/\/.*$/, "")
          .split(".")
          .slice(-3);
        return "www" === t[0] && t.shift(), t.join(".");
      }
      function toThousands(e) {
        return (e || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      }
      function timeAgo(time) {
        var e = Date.now() / 1e3 - Number(time);
        return e < 3600
          ? pluralize(~~(e / 60), " minute")
          : e < 86400
          ? pluralize(~~(e / 3600), " hour")
          : pluralize(~~(e / 86400), " day");
      }
      function pluralize(time, label) {
        return 1 === time ? time + label : time + label + "s";
      }
      function isNull(data, indexStr, toString) {
        var star = !0;
        try {
          star = eval(
            "data" + ("[" == indexStr.toString()[0] ? "" : ".") + indexStr
          );
        } catch (e) {
          star = !1;
        }
        return toString && 0 != star && (star = star.toString()), star;
      }
      function isNull2(data, e) {
        var t = e.num,
          n = e.type,
          o = e.eu,
          r = e.pk,
          l = e.zf,
          c = e.noneedAdd,
          d = e.checkfp,
          m = e.proModule;
        try {
          if (d && 1 == data.ext.odds.oddItems[t[0]].odd[3]) return "fp";
          var h = data.ext.odds.oddItems[t[0]].odd[t[1]],
            f = "";
          return void 0 === h || "" === h
            ? ""
            : ((f = n
                ? o
                  ? "De" === n || "Hk" === n
                    ? Number(h).toFixed(2)
                    : _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.calculate1X2(
                        h
                      )
                  : "De" === n
                  ? c
                    ? Number(h).toFixed(2)
                    : Number(
                        _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.accAdd(
                          h,
                          1
                        )
                      ).toFixed(2)
                  : "Am" === n
                  ? c
                    ? _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.calculate1X2(
                        h
                      )
                    : _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.calculate1X2(
                        _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.accAdd(
                          h,
                          1
                        )
                      )
                  : m
                  ? Number(h).toFixed(2)
                  : (Number(h) - 1).toFixed(2)
                : h),
              r &&
                (f =
                  Number(f) > 0
                    ? "- " + Number(f)
                    : "+" + f.toString().substring(1)),
              l && (f = f.substring(1)),
              f);
        } catch (e) {
          return "";
        }
      }
      function isNullAbs(data, e) {
        var t = e.num,
          n = e.type,
          o = e.eu,
          r = e.zf,
          l = isNull2(data, { num: t, type: n, eu: o, checkfp: e.checkfp });
        return "fp" == l
          ? "fp"
          : "" == l
          ? ""
          : (l < 0
              ? (l = Math.abs(l))
              : parseInt(0 - l) !== parseFloat(0 - l) &&
                (l = (0 - l).toFixed(1)),
            (l =
              Number(l) > 0
                ? "- " + Number(l)
                : "+" + l.toString().substring(1)),
            r && (l = l.substring(1)),
            l);
      }
      function trim(e) {
        var t = "";
        try {
          t = e.trim();
        } catch (e) {}
        return t;
      }
      function getWeeks(e) {
        return ["日", "一", "二", "三", "四", "五", "六"][e];
      }
      function dateSeats(e) {
        return e >= 0 && e < 10 && (e = "0" + e), e;
      }
      function toDate(e) {
        return {
          date: (e = e ? new Date(e) : new Date()),
          year: e.getFullYear(),
          month: dateSeats(e.getMonth() + 1),
          day: dateSeats(e.getDate()),
          hours: dateSeats(e.getHours()),
          minutes: dateSeats(e.getMinutes()),
          second: dateSeats(e.getSeconds()),
          weeks: getWeeks[e.getDay()],
          zoomDate: new Date(e).setHours(0, 0, 0, 0),
        };
      }
      function diffTime(e, t) {
        var n = new Date(1e3 * e).setHours(0, 0, 0, 0),
          o = new Date(1e3 * t).setHours(0, 0, 0, 0);
        return parseInt(Math.abs((n - o) / 864e5));
      }
      function timeDifference(e, t, n) {
        var o = 0,
          r = { month: 0, week: 0, day: 0, hours: 0, minutes: 0, seconds: 0 },
          l = t
            ? new Date(parseInt(t) * (t.toString().length > 10 ? 1 : 1e3))
            : new Date(),
          c = new Date(l).setHours(0, 0, 0, 0),
          d = new Date(
            parseInt(e) * ((e || "").toString().length > 10 ? 1 : 1e3)
          ),
          m = new Date(d).setHours(0, 0, 0, 0);
        return (
          null == n
            ? ((n = (l.getTime() - d.getTime()) / 1e3),
              (o = (c - m) / 1e3),
              (r.month =
                12 * (l.getFullYear() - d.getFullYear()) +
                (l.getMonth() + 1) -
                (d.getMonth() + 1)))
            : (o = n /= 1e3),
          (r.week = parseInt(o / 60 / 60 / 24 / 7, 10)),
          (r.day = Math.abs(parseInt(n / 86400, 10))),
          (r.hours = Math.abs(parseInt((n / 60 / 60) % 24, 10))),
          (r.minutes = Math.abs(parseInt((n / 60) % 60, 10))),
          (r.seconds = Math.abs(parseInt(n % 60, 10))),
          r
        );
      }
      function toLocaleLowerCase(e) {
        return (e || "").toLocaleLowerCase;
      }
      function toLocaleUpperCase(e) {
        return (e || "").toLocaleUpperCase;
      }
      function getLogo(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        try {
          if (!e) {
            var o = t.includes("_") ? t.split("_")[1] : t;
            return (
              (t.includes("tbts_") || t.includes("ts_") || t.includes("bm_")) &&
                (o = "player"),
              _const_url__WEBPACK_IMPORTED_MODULE_9__.a[o]
            );
          }
          if ((e = (e || "").split("!w")[0])) {
            var r = "";
            return (
              n && n.indexOf("!w") < 0
                ? (r = e)
                : ((r = _const_url__WEBPACK_IMPORTED_MODULE_9__.b[t] + e),
                  n.indexOf("!w") > -1 && (r = r + n || "")),
              r
            );
          }
          if (!t) return;
        } catch (e) {}
        return _const_url__WEBPACK_IMPORTED_MODULE_9__.a[
          t && (t.includes("tbts_") || t.includes("ts_") || t.includes("bm_"))
            ? "player"
            : t
        ];
      }
      function filterParams(data, e) {
        var t = e.sortBy,
          n = e.tab;
        if (0 == data.length) return data;
        var o,
          r,
          l,
          c,
          d,
          m = [],
          h = [],
          f = [],
          y = [];
        (data.map(function (e) {
          "Live" == n &&
            e.list.some(function (s) {
              return 2 == s.matchStatus;
            }) &&
            !0,
            e.key.indexOf("_top") > -1
              ? m.push(e)
              : "Live" == n && e.key.includes("_iscomming")
              ? y.push(e)
              : e.competition.isHot
              ? f.push(e)
              : h.push(e);
        }),
        (o =
          1 == t
            ? [].concat(
                Object(
                  _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
                )(
                  _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByName_bk(f)
                ),
                Object(
                  _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
                )(
                  _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByName_bk(h)
                )
              )
            : [].concat(
                Object(
                  _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
                )(
                  _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByTime_bk(f)
                ),
                Object(
                  _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
                )(
                  _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByTime_bk(h)
                )
              )),
        "Live" == n &&
          y.length &&
          o.push({ iscomming: 1, key: "iscomming", size: 60, list: [] }),
        1 == t)
          ? ((r = o).unshift.apply(
              r,
              Object(
                _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
              )(_util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByName_bk(m))
            ),
            (l = o).push.apply(
              l,
              Object(
                _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
              )(
                _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByName_bk(
                  y,
                  !0
                )
              )
            ))
          : ((c = o).unshift.apply(
              c,
              Object(
                _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
              )(_util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByTime_bk(m))
            ),
            (d = o).push.apply(
              d,
              Object(
                _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
              )(
                _util_util_js__WEBPACK_IMPORTED_MODULE_10__.a.sortByTime_bk(
                  y,
                  !0
                )
              )
            ));
        return o;
      }
      function sortby(e, t, dt, n) {
        var o = function (e, t, dt, n) {
            "int" == dt
              ? ((e = parseInt(e, 10)), (t = parseInt(t, 10)))
              : "float" == dt && ((e = parseFloat(e)), (t = parseFloat(t)));
            var o = 0;
            return (
              e < t && (o = 1), e > t && (o = -1), "desc" == n && (o = 0 - o), o
            );
          },
          r = [];
        if (e instanceof Array)
          for (var i = 0; i < e.length; i++) r[r.length] = e[i];
        else
          try {
            for (var l in e) r.push(e[l]);
          } catch (e) {}
        for (i = 0; i < r.length; i++) {
          for (
            var c = i, d = "" !== t ? r[i][t] : r[i], m = i + 1;
            m < r.length;
            m++
          ) {
            var h = "" !== t ? r[m][t] : r[m];
            o(d, h, dt, n) < 0 && ((c = m), (d = h));
          }
          if (c > i) {
            var f = r[c];
            (r[c] = r[i]), (r[i] = f);
          }
        }
        return r;
      }
      function reverseby(e) {
        try {
          return JSON.parse(JSON.stringify(e)).reverse();
        } catch (e) {
          return [];
        }
      }
      function firstToUpperCase(text) {
        var e = (text = text || "").substring(0, 1) || "",
          t = text.substring(1) || "";
        return e.toUpperCase() + t;
      }
    },
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "k", function () {
        return _;
      }),
        n.d(t, "m", function () {
          return k;
        }),
        n.d(t, "l", function () {
          return A;
        }),
        n.d(t, "e", function () {
          return j;
        }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "s", function () {
          return S;
        }),
        n.d(t, "g", function () {
          return T;
        }),
        n.d(t, "h", function () {
          return M;
        }),
        n.d(t, "d", function () {
          return x;
        }),
        n.d(t, "r", function () {
          return O;
        }),
        n.d(t, "j", function () {
          return I;
        }),
        n.d(t, "t", function () {
          return C;
        }),
        n.d(t, "o", function () {
          return E;
        }),
        n.d(t, "q", function () {
          return z;
        }),
        n.d(t, "f", function () {
          return L;
        }),
        n.d(t, "c", function () {
          return R;
        }),
        n.d(t, "i", function () {
          return B;
        }),
        n.d(t, "p", function () {
          return N;
        }),
        n.d(t, "a", function () {
          return K;
        }),
        n.d(t, "n", function () {
          return $;
        }),
        n.d(t, "u", function () {
          return J;
        });
      n(11), n(138), n(10), n(142), n(18), n(20), n(27), n(910);
      var o = n(65),
        r = (n(54), n(55), n(115), n(250), n(913), n(26), n(17), n(4)),
        l = (n(63), n(9), n(14), n(3)),
        c = n(71),
        d = (n(8), n(6), n(914), n(19)),
        m = n(186);
      function h(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (t) {
                Object(l.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      function y(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return v(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (r = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw r;
            }
          },
        };
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function _(e) {
        d.default.config.errorHandler && d.default.config.errorHandler(e);
      }
      function k(e) {
        return e.then(function (e) {
          return e.default || e;
        });
      }
      function A(e) {
        return (
          e.$options &&
          "function" == typeof e.$options.fetch &&
          !e.$options.fetch.length
        );
      }
      function j(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          o = e.$children || [],
          r = y(o);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var l = t.value;
            l.$fetch ? n.push(l) : l.$children && j(l, n);
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        return n;
      }
      function w(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var n =
            e.options._originDataFn ||
            e.options.data ||
            function () {
              return {};
            };
          (e.options._originDataFn = n),
            (e.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                f(f({}, data), t)
              );
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor &&
              e._Ctor.options &&
              (e._Ctor.options.data = e.options.data);
        }
      }
      function S(e) {
        return (
          (e.options && e._Ctor === e) ||
            (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = d.default.extend(e))._Ctor = e),
            !e.options.name &&
              e.options.__file &&
              (e.options.name = e.options.__file)),
          e
        );
      }
      function T(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, o) {
            return Object.keys(e[n]).map(function (r) {
              return t && t.push(o), e[n][r];
            });
          })
        );
      }
      function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return T(e, t, "instances");
      }
      function x(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, n) {
            return Object.keys(e.components).reduce(function (o, r) {
              return (
                e.components[r]
                  ? o.push(t(e.components[r], e.instances[r], e, r, n))
                  : delete e.components[r],
                o
              );
            }, []);
          })
        );
      }
      function O(e, t) {
        return Promise.all(
          x(
            e,
            (function () {
              var e = Object(r.a)(
                regeneratorRuntime.mark(function e(n, o, r, l) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("function" != typeof n || n.options) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 3), n();
                        case 3:
                          n = e.sent;
                        case 4:
                          return (
                            (r.components[l] = n = S(n)),
                            e.abrupt(
                              "return",
                              "function" == typeof t ? t(n, o, r, l) : n
                            )
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, o, r) {
                return e.apply(this, arguments);
              };
            })()
          )
        );
      }
      function I(e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(r.a)(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (e.next = 4), O(t);
                  case 4:
                    return e.abrupt(
                      "return",
                      f(
                        f({}, t),
                        {},
                        {
                          meta: T(t).map(function (e, n) {
                            return f(
                              f({}, e.options.meta),
                              (t.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function C(e, t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(r.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var r, l, d, m;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.context ||
                        ((t.context = {
                          isStatic: !1,
                          isDev: !1,
                          isHMR: !1,
                          app: t,
                          store: t.store,
                          payload: n.payload,
                          error: n.error,
                          base: "/",
                          env: {
                            NODE_ENV: "production",
                            ISGERNERATE: 0,
                            NUXT_ENV_BUILD_ENV: "production",
                          },
                        }),
                        n.req && (t.context.req = n.req),
                        n.res && (t.context.res = n.res),
                        n.ssrContext && (t.context.ssrContext = n.ssrContext),
                        (t.context.redirect = function (e, path, n) {
                          if (e) {
                            t.context._redirected = !0;
                            var r = Object(o.a)(path);
                            if (
                              ("number" == typeof e ||
                                ("undefined" !== r && "object" !== r) ||
                                ((n = path || {}),
                                (path = e),
                                (r = Object(o.a)(path)),
                                (e = 302)),
                              "object" === r &&
                                (path = t.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = G(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            t.context.next({ path: path, query: n, status: e });
                          }
                        }),
                        (t.context.nuxtState = window.__NUXT__)),
                      (e.next = 3),
                      Promise.all([I(n.route), I(n.from)])
                    );
                  case 3:
                    (r = e.sent),
                      (l = Object(c.a)(r, 2)),
                      (d = l[0]),
                      (m = l[1]),
                      n.route && (t.context.route = d),
                      n.from && (t.context.from = m),
                      (t.context.next = n.next),
                      (t.context._redirected = !1),
                      (t.context._errored = !1),
                      (t.context.isHMR = !1),
                      (t.context.params = t.context.route.params || {}),
                      (t.context.query = t.context.route.query || {});
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : z(e[0], t).then(function () {
              return E(e.slice(1), t);
            });
      }
      function z(e, t) {
        var n;
        return (n =
          2 === e.length
            ? new Promise(function (n) {
                e(t, function (e, data) {
                  e && t.error(e), n((data = data || {}));
                });
              })
            : e(t)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function L(base, e) {
        if ("hash" === e) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var t = (path || "/") + window.location.search + window.location.hash;
        return Object(m.normalizeURL)(t);
      }
      function R(e, t) {
        return (function (e, t) {
          for (var n = new Array(e.length), i = 0; i < e.length; i++)
            "object" === Object(o.a)(e[i]) &&
              (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", V(t)));
          return function (t, o) {
            for (
              var path = "",
                data = t || {},
                r = (o || {}).pretty ? U : encodeURIComponent,
                l = 0;
              l < e.length;
              l++
            ) {
              var c = e[l];
              if ("string" != typeof c) {
                var d = data[c.name || "pathMatch"],
                  m = void 0;
                if (null == d) {
                  if (c.optional) {
                    c.partial && (path += c.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + c.name + '" to be defined'
                  );
                }
                if (Array.isArray(d)) {
                  if (!c.repeat)
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  if (0 === d.length) {
                    if (c.optional) continue;
                    throw new TypeError(
                      'Expected "' + c.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < d.length; h++) {
                    if (((m = r(d[h])), !n[l].test(m)))
                      throw new TypeError(
                        'Expected all "' +
                          c.name +
                          '" to match "' +
                          c.pattern +
                          '", but received `' +
                          JSON.stringify(m) +
                          "`"
                      );
                    path += (0 === h ? c.prefix : c.delimiter) + m;
                  }
                } else {
                  if (((m = c.asterisk ? U(d, !0) : r(d)), !n[l].test(m)))
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received "' +
                        m +
                        '"'
                    );
                  path += c.prefix + m;
                }
              } else path += c;
            }
            return path;
          };
        })(
          (function (e, t) {
            var n,
              o = [],
              r = 0,
              l = 0,
              path = "",
              c = (t && t.delimiter) || "/";
            for (; null != (n = F.exec(e)); ) {
              var d = n[0],
                m = n[1],
                h = n.index;
              if (((path += e.slice(l, h)), (l = h + d.length), m))
                path += m[1];
              else {
                var f = e[l],
                  y = n[2],
                  v = n[3],
                  _ = n[4],
                  k = n[5],
                  A = n[6],
                  j = n[7];
                path && (o.push(path), (path = ""));
                var w = null != y && null != f && f !== y,
                  S = "+" === A || "*" === A,
                  T = "?" === A || "*" === A,
                  M = n[2] || c,
                  pattern = _ || k;
                o.push({
                  name: v || r++,
                  prefix: y || "",
                  delimiter: M,
                  optional: T,
                  repeat: S,
                  partial: w,
                  asterisk: Boolean(j),
                  pattern: pattern
                    ? W(pattern)
                    : j
                    ? ".*"
                    : "[^" + H(M) + "]+?",
                });
              }
            }
            l < e.length && (path += e.substr(l));
            path && o.push(path);
            return o;
          })(e, t),
          t
        );
      }
      function B(e, t) {
        var n = {},
          o = f(f({}, e), t);
        for (var r in o) String(e[r]) !== String(t[r]) && (n[r] = !0);
        return n;
      }
      function N(e) {
        var t;
        if (e.message || "string" == typeof e) t = e.message || e;
        else
          try {
            t = JSON.stringify(e, null, 2);
          } catch (n) {
            t = "[".concat(e.constructor.name, "]");
          }
        return f(
          f({}, e),
          {},
          {
            message: t,
            statusCode:
              e.statusCode ||
              e.status ||
              (e.response && e.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (e) {
          window.onNuxtReadyCbs.push(e);
        });
      var F = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function U(e, t) {
        var n = t ? /[?#]/g : /[/?#]/g;
        return encodeURI(e).replace(n, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function H(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function W(e) {
        return e.replace(/([=!:$/()])/g, "\\$1");
      }
      function V(e) {
        return e && e.sensitive ? "" : "i";
      }
      function G(e, t) {
        var n,
          o = e.indexOf("://");
        -1 !== o
          ? ((n = e.substring(0, o)), (e = e.substring(o + 3)))
          : e.startsWith("//") && (e = e.substring(2));
        var r,
          l = e.split("/"),
          d = (n ? n + "://" : "//") + l.shift(),
          path = l.join("/");
        if (
          ("" === path && 1 === l.length && (d += "/"),
          2 === (l = path.split("#")).length)
        ) {
          var m = l,
            h = Object(c.a)(m, 2);
          (path = h[0]), (r = h[1]);
        }
        return (
          (d += path ? "/" + path : ""),
          t &&
            "{}" !== JSON.stringify(t) &&
            (d +=
              (2 === e.split("?").length ? "&" : "?") +
              (function (e) {
                return Object.keys(e)
                  .sort()
                  .map(function (t) {
                    var n = e[t];
                    return null == n
                      ? ""
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function (e) {
                            return [t, "=", e].join("");
                          })
                          .join("&")
                      : t + "=" + n;
                  })
                  .filter(Boolean)
                  .join("&");
              })(t)),
          (d += r ? "#" + r : "")
        );
      }
      function K(e, t, n) {
        e.$options[t] || (e.$options[t] = []),
          e.$options[t].includes(n) || e.$options[t].push(n);
      }
      function Q(path) {
        return path.replace(/\/+$/, "") || "/";
      }
      function $(e, t) {
        return Q(e) === Q(t);
      }
      function J(e) {
        try {
          window.history.scrollRestoration = e;
        } catch (e) {}
      }
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return f;
        }),
          n.d(t, "b", function () {
            return y;
          });
        n(8), n(6), n(9), n(18), n(20), n(26);
        var o = n(132),
          r = n(808),
          l = n.n(r),
          c = n(105),
          d = n(1064),
          m = c.Root.fromJSON(n(107)).lookup("onescore.app.v1.Response"),
          h = new l.a({ maxAge: 18e5, max: 1e3 }),
          f = function (t, n, r, l) {
            var c = {
              method: "get",
              url: t.replace("&cache=1", ""),
              responseType: "arraybuffer",
            };
            return (
              r && (c.responseType = "json"),
              t.includes("cache=1") &&
              h.has(t) &&
              0 != Object.keys(h.get(t)).length
                ? Promise.resolve(h.get(t))
                : Object(o.default)(c)
                    .then(function (o) {
                      if (r)
                        try {
                          return o;
                        } catch (e) {
                          return !1;
                        }
                      else
                        try {
                          var c,
                            d = e.from(o.data, "utf8"),
                            f = m.decode(d);
                          return t.includes("match/data") && 100410 == f.code
                            ? { code: 410 }
                            : ((c = n
                                ? l
                                  ? n.toObject(
                                      n.decode(e.from(f.data, "utf8")),
                                      { defaults: !0 }
                                    )
                                  : n.toObject(n.decode(e.from(f.data, "utf8")))
                                : f),
                              t.includes("cache=1") && h.set(t, c),
                              c);
                        } catch (e) {
                          return !1;
                        }
                    })
                    .catch(function (e) {
                      return !1;
                    })
            );
          },
          y = function (t, data, n) {
            Date.now();
            var r = {
              method: "post",
              url: t,
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              responseType: "arraybuffer",
              data: d.stringify(data),
            };
            return Object(o.default)(r)
              .then(function (t) {
                try {
                  var o = e.from(t.data, "utf8"),
                    r = m.decode(o);
                  return n ? n.toObject(n.decode(e.from(r.data, "utf8"))) : r;
                } catch (e) {
                  return !1;
                }
              })
              .catch(function (e) {
                return !1;
              });
          };
      }).call(this, n(56).Buffer);
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      t.a = {
        "HANDLE-SORT": "HANDLE-SORT",
        "HANDLE-FILTER": "HANDLE-FILTER",
        "SET-ODDS-TYPE": "SET-ODDS-TYPE",
        "SET-LANGUAGE": "SET-LANGUAGE",
        "SET-TIMEZONE": "SET-TIMEZONE",
        URL: "URL",
        "TV-ANIMATION": "TV-ANIMATION",
        TAB: "TAB",
        "CHANGE-DATE": "CHANGE-DATE",
        "HIDE-FINISH": "HIDE-FINISH",
        COLLECT: "COLLECT",
        "TO-ROOF": "TO-ROOF",
        "OPEN-MAIL": "OPEN-MAIL",
        "OPEN-FACEBOOK": "OPEN-FACEBOOK",
        "OPEN-TWITTER": "OPEN-TWITTER",
        "H2H-LAST": "H2H-LAST",
        "H2H-HOME-AWAY": "H2H-HOME-AWAY",
        pc_privacy_dialog: "pc_privacy_dialog",
        pc_privacy_setting: "pc_privacy_setting",
        pc_privacy_reject: "pc_privacy_reject",
      };
    },
    function (e, t, n) {
      e.exports = n.p + "img/teamsDefault.2e6c42b.png";
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      (function (t) {
        var o = n(105).Root.fromJSON(n(107)).lookup("onescore.app.v1.Push"),
          r = n(954).connect;
        (e.exports.Client = function (e) {
          for (var i in ((this.options = {
            id: "",
            proto: !0,
            host: "wss://mq.aiscore.com",
            port: "443",
            route: "mqtt",
            topic: "",
            initCallback: "",
            message: "",
          }),
          e))
            this.options[i] = e[i];
          return this.init(), this;
        }),
          (e.exports.Client.prototype = {
            client: "",
            init: function () {
              var e = this;
              (e.client = r(
                e.options.host + ":" + e.options.port + "/" + e.options.route
              )),
                Array.isArray(e.options.topic)
                  ? e.options.topic.forEach(function (t) {
                      e.client.subscribe(t);
                    })
                  : e.client.subscribe(e.options.topic),
                e.client.on("message", function (n, r) {
                  try {
                    var l,
                      c = t.from(r, "utf8");
                    (l = e.options && e.options.proto ? o.decode(c) : c),
                      e.options.message && e.options.message(l);
                  } catch (e) {}
                }),
                e.client.publish(e.options.topic, "hello world!");
            },
          });
      }).call(this, n(56).Buffer);
    },
    function (e, t, n) {
      e.exports = n.p + "img/playerDefault.c13fcb9.png";
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return m;
        });
      n(18), n(20), n(8), n(6), n(9);
      var o = n(5),
        r = {
          nation: n(176),
          player: n(125),
          team: n(110),
          match: n(177),
          event: n(177),
          honor: n(177),
          category: n(176),
          hero: n(465),
        },
        l = {};
      [
        "nation",
        "player",
        "team",
        "match",
        "event",
        "avatar",
        "honor",
        "category",
        "hero",
      ].map(function (e) {
        l["".concat(e)] = r[e];
      });
      var c = l,
        d = {
          nation: "https://img1.aiscore.com/country/",
          anchor: "https://img0.aiscore.com/anchor/",
          avatar: "http://img1.aiscore.com/user/",
          category: "https://img0.aiscore.com/country/",
          oddsCompany: "https://img1.aiscore.com/other/",
        };
      Object.keys(o.ballTypePre).map(function (e) {
        ["football", "basketball", "volleyball", "baseball"].includes(e)
          ? ((d["".concat(o.ballTypePre[e], "event")] =
              "https://img0.aiscore.com/".concat(e, "/competition/")),
            (d["".concat(o.ballTypePre[e], "team")] =
              "https://img0.aiscore.com/".concat(e, "/team/")),
            (d["".concat(o.ballTypePre[e], "player")] =
              "https://img0.aiscore.com/".concat(e, "/player/")),
            (d["".concat(o.ballTypePre[e], "honor")] =
              "https://img0.aiscore.com/".concat(e, "/honor/")))
          : [
              "tennis",
              "amfootball",
              "icehockey",
              "tabletennis",
              "badminton",
              "handball",
              "waterpolo",
              "snooker",
              "cricket",
            ].includes(e)
          ? ((d["".concat(o.ballTypePre[e], "event")] =
              "https://img0.aiscore.com/v2/unique-tournament/"),
            (d["".concat(o.ballTypePre[e], "team")] =
              "https://img0.aiscore.com/v2/team/"),
            (d["".concat(o.ballTypePre[e], "player")] =
              "https://img0.aiscore.com/v2/player/"),
            (d["".concat(o.ballTypePre[e], "honor")] =
              "https://img0.aiscore.com/".concat(e, "/honor/")))
          : ["esports"].includes(e) &&
            ((d["".concat(o.ballTypePre[e], "tournament")] =
              "https://img0.aiscore.com/"),
            (d["".concat(o.ballTypePre[e], "team")] =
              "https://img0.aiscore.com/"),
            (d["".concat(o.ballTypePre[e], "hero")] =
              "https://img0.aiscore.com/"));
      });
      var m = d;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(8), n(6), n(9);
      t.a = {
        motionType: [
          "map_football",
          "map_common",
          "map_basketball",
          "map_tennis",
          "map_amfootball",
          "map_icehockey",
          "map_volleyball",
          "map_tabletennis",
          "map_baseball",
          "map_badminton",
          "map_handball",
          "map_waterpolo",
          "map_snooker",
          "map_cricket",
          "map_newseo",
          "map_esports",
          "map_newTranslate",
        ],
        languageMaps: {
          zh: { code: "zh", id: 1, name: "中文(简体)" },
          en: { code: "en", id: 2, name: "English", locale: "en" },
          zht: { code: "zht", id: 3, name: "中文繁體", locale: "zh-tw" },
          es: { code: "es", id: 4, name: "Español", locale: "es" },
          pt: { code: "pt", id: 5, name: "Português", locale: "pt" },
          fr: { code: "fr", id: 6, name: "Français", locale: "fr" },
          de: { code: "de", id: 7, name: "Deutsch", locale: "de" },
          it: { code: "it", id: 8, name: "Italiano", locale: "it" },
          ru: { code: "ru", id: 9, name: "Pусский", locale: "ru" },
          ja: { code: "ja", id: 10, name: "日本語", locale: "ja" },
          da: { code: "da", id: 11, name: "Dansk", locale: "da" },
          sv: { code: "sv", id: 12, name: "Svenska", locale: "sv" },
          nn: { code: "nn", id: 13, name: "Norsk", locale: "nn" },
          bg: { code: "bg", id: 14, name: "Български", locale: "bg" },
          el: { code: "el", id: 15, name: "Ελληνικά", locale: "el" },
          pl: { code: "pl", id: 16, name: "Polski", locale: "pl" },
          ro: { code: "ro", id: 17, name: "Română", locale: "ro" },
          cs: { code: "cs", id: 18, name: "Česky", locale: "cs" },
          hu: { code: "hu", id: 19, name: "Magyar", locale: "hu" },
          sk: { code: "sk", id: 20, name: "Slovenčina", locale: "sk" },
          nl: { code: "nl", id: 21, name: "Nederlands", locale: "nl" },
          et: { code: "et", id: 22, name: "Eesti", locale: "et" },
          ko: { code: "ko", id: 23, name: "한국어", locale: "ko" },
          tr: { code: "tr", id: 24, name: "Türkçe", locale: "tr" },
          hr: { code: "hr", id: 25, name: "Hrvatski", locale: "hr" },
          sl: { code: "sl", id: 26, name: "Slovenščina", locale: "sl" },
          lv: { code: "lv", id: 27, name: "Latviešu", locale: "lv" },
          fi: { code: "fi", id: 28, name: "Suomeksi", locale: "fi" },
          th: { code: "th", id: 29, name: "ไทย", locale: "th" },
          bs: { code: "bs", id: 30, name: "Bosanski", locale: "bs" },
          sr: { code: "sr", id: 31, name: "Cрпски", locale: "sr" },
          mk: { code: "mk", id: 32, name: "Македонски", locale: "mk" },
          lt: { code: "lt", id: 33, name: "Lietuvių", locale: "lt" },
          id: { code: "id", id: 34, name: "Bahasa Indonesia", locale: "id" },
          vi: { code: "vi", id: 35, name: "Tiếng Việt", locale: "vi" },
          aa: { code: "aa", id: 36, name: "العربية", locale: "ar-sa" },
          aze: { code: "aze", id: 37, name: "Azərbaycan dili", locale: "az" },
          ka: { code: "ka", id: 38, name: "ქართული", locale: "ka" },
          sqi: { code: "sqi", id: 39, name: "Shqip", locale: "sq" },
          ukr: { code: "ukr", id: 40, name: "Українська", locale: "uk" },
          mm: { code: "mm", id: 41, name: "မြန်မာဘာသာ", locale: "my" },
          br: {
            code: "br",
            id: 43,
            name: "Português do Brasil",
            locale: "pt-br",
          },
          km: { code: "km", id: 45, name: "ភាសាខ្មែរ", locale: "km" },
        },
        def: function () {
          var e = this,
            data = {};
          return (
            Object.keys(e.languageMaps).forEach(function (i) {
              var t = e.languageMaps[i];
              data[i] = t.id;
            }),
            data
          );
        },
        langStr: function () {
          var e = [];
          return (
            Object.keys(this.languageMaps).forEach(function (i) {
              e.push(i);
            }),
            e
          );
        },
        WORDS: "ABCDEFGHIJKLMNOPQRESUVWXYZ",
        chatLanguage: { 2: "en", 5: "pt", 24: "tr", 29: "th" },
      };
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/hot.f04d979.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA81BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDQ0TExMkJCQzMzM3NzdAQEBMTExXV1daWlpdXV1hYWFkZGRnZ2dqamp1dXV8fHyFhYWKioqMjIyWlpadnZ2jo6OmpqaqqqqxsbG3t7e4uLi9vb29vb3Dw8PGxsbLy8vR0dHV1dXX19fc3Nzd3d3l5eXm5ubq6urq6urs7Ozu7u7w8PDw8PDw8PDy8vL09PT09PT19fX29vb29vb39/f4+Pj4+Pj4+Pj5+fn5+fn5+fn6+vr7+/v7+/v7+/v8/Pz8/PxPhK+wAAAAUXRSTlMAAQMJDQ4WGBkcHR4gISUmJygrLS4wMjU2Nzc4OTo9QENGR0tOU1NXXGBhZGVqcHV7gYeMjZ6jq66zt7u/wMTIy8/R0tXX2tvc3+Hi5Obn6Om1CaJrAAABR0lEQVQ4y41U2VbCQAwNpXtpr4jijgso7qKIgriLKHWb//8aH4qdTC09c58yt+nJcpMQMRiW44dRFPqOZVA+TB8MvpnjUg6QQVDOuJRs5MAuKcl4yIXHUjMqmIFK6lXyMBPeX0QbBbCndaEQSY1BsVNARGTK9zr7tpZaJhHJPh/Ge6l9+byc9p7IkD9vvr7vTM2O6FdT3iCLhWhORg0AwIkY1iRtkcuTbH8+LgHY/3qoM9YlRXoc/9wtoBW/bCgDQaFa8JkYbI/HWwoXUpRpy4WI45ZKRf+c6m/iGlmnTLjaUNyKc2TCqYlX+6IzfyNOoSbuKO+e6AKL998HnHSUZqIregCw+vSxC95MJosUgwkEwOACH0kxmpPRChOYjUpjIMVoX83xUdEaOr3x1VoEvZXSWk69Ndc7GHqnR/OIJefQTc6hq57DX0XtSiX2PWf5AAAAAElFTkSuQmCC";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return wa;
      }),
        n.d(t, "a", function () {
          return P.default;
        });
      n(11), n(10), n(8), n(9), n(6), n(17);
      var o = n(4),
        r = n(3),
        l = (n(14), n(19)),
        c = n(2),
        d = n(806),
        m = n(319),
        h = n.n(m),
        f = n(99),
        y = n.n(f),
        v = n(156),
        _ = n(186),
        k = n(15);
      "scrollRestoration" in window.history &&
        (Object(k.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(k.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(k.u)("manual");
        }));
      var A = function () {
          return Object(k.m)(
            Promise.all([n.e(0), n.e(1), n.e(153)]).then(n.bind(null, 848))
          );
        },
        j = function () {
          return Object(k.m)(n.e(0).then(n.bind(null, 2646)));
        },
        w = function () {
          return Object(k.m)(
            Promise.all([
              n.e(0),
              n.e(1),
              n.e(2),
              n.e(11),
              n.e(12),
              n.e(4),
              n.e(10),
              n.e(3),
              n.e(6),
              n.e(14),
              n.e(9),
              n.e(8),
              n.e(13),
              n.e(5),
              n.e(7),
              n.e(129),
            ]).then(n.bind(null, 2618))
          );
        },
        S = function () {
          return Object(k.m)(
            Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2654))
          );
        },
        T = function () {},
        M = v.a.prototype.push;
      (v.a.prototype.push = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return M.call(this, e, t, n);
      }),
        l.default.use(v.a);
      var x = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (e, t, n) {
          var o = !1,
            r = Object(k.g)(e);
          (r.some(function (e) {
            return e.options.scrollToTop;
          }) ||
            (r.length < 2 &&
              r.every(function (e) {
                return !1 !== e.options.scrollToTop;
              }))) &&
            (o = { x: 0, y: 0 }),
            n && (o = n);
          var l = window.$nuxt;
          return (
            ((e.path === t.path && e.hash !== t.hash) || e === t) &&
              l.$nextTick(function () {
                return l.$emit("triggerScroll");
              }),
            new Promise(function (t) {
              l.$once("triggerScroll", function () {
                if (e.hash) {
                  var n = e.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (o = { selector: n });
                  } catch (e) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                t(o);
              });
            })
          );
        },
        routes: [
          {
            path: "",
            component: A,
            meta: { type: "football" },
            name: "football-home-match",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/account-deletion",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(164)]).then(n.bind(null, 2643))
              );
            },
            meta: { type: "accountDeletion" },
            name: "accountDeletion",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/advertising",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2645)));
            },
            meta: { type: "advertising" },
            name: "advertising",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/become-a-tipster",
            component: j,
            name: "specialist",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/favorite",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2647)));
            },
            meta: { type: "favorite" },
            name: "favorite",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(104)]).then(n.bind(null, 2665))
              );
            },
            name: "worldCup",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/live",
            component: w,
            name: "seoLiveIndex",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/livescorewidget",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(2), n.e(152)]).then(
                  n.bind(null, 2620)
                )
              );
            },
            name: "theme",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/mobile",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2622)));
            },
            name: "mobile",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/policy",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2623)));
            },
            name: "policy",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/prediction",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2624))
              );
            },
            name: "predictionIndex",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/user",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2671)));
            },
            name: "user",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/balls",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(105)]).then(n.bind(null, 2626))
              );
            },
            name: "ball",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/hosts",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(165)]).then(n.bind(null, 2628))
              );
            },
            name: "host",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/winners",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2629))
              );
            },
            name: "winner",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/prediction/basketball",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(133),
                ]).then(n.bind(null, 2630))
              );
            },
            meta: { type: "predictionList" },
            name: "predictionList",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/football/rankings/:type?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(155)]).then(n.bind(null, 2605))
              );
            },
            meta: { type: "football" },
            name: "football-fifa",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/american-football/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 2633))
              );
            },
            name: "amfootball-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/badminton/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 2634))
              );
            },
            name: "badminton-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/baseball/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 2635))
              );
            },
            name: "baseball-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/basketball/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(2), n.e(156)]).then(n.bind(null, 852))
              );
            },
            meta: { type: "basketball" },
            name: "basketball-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/comparison/:proModule?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(127),
                ]).then(n.bind(null, 2636))
              );
            },
            meta: { type: "comparisonList" },
            name: "comparisonList",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/cricket/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 2637))
              );
            },
            name: "cricket-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/esports/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 2638))
              );
            },
            name: "esports-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(137)]).then(n.bind(null, 2639))
              );
            },
            name: "perSession",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/handball/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 2641))
              );
            },
            name: "handball-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/head-to-head/:ballType(basketball|tennis|table-tennis|american-football|ice-hockey|volleyball|baseball|badminton|handball|waterpolo|snooker|cricket|esports)?",
            component: w,
            name: "seoH2hIndex",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/ice-hockey/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 2642))
              );
            },
            name: "icehockey-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/live/:ballType-:home-vs-:away",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(154)]).then(n.bind(null, 2601))
              );
            },
            name: "seoLiveDetail",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/prediction/:type(football)-:home-vs-:away-prediction",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(158)]).then(n.bind(null, 2644))
              );
            },
            name: "predictionDetail",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/salary/:ballType(basketball)?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(126),
                ]).then(n.bind(null, 2648))
              );
            },
            name: "salaryList",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/snooker/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 2649))
              );
            },
            name: "snooker-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/table-tennis/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(11)]).then(n.bind(null, 2650))
              );
            },
            name: "tabletennis-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/tennis/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 2651))
              );
            },
            name: "tennis-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/tips/tipster-:id",
            component: j,
            name: "tipsterIndex",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/today-matches/:sid?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(59), n.e(0), n.e(151)]).then(
                  n.bind(null, 2603)
                )
              );
            },
            meta: { type: "" },
            name: "football-today-matches",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/transfer/:year([0-9]{4})?",
            component: S,
            name: "transferList",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/volleyball/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 2656))
              );
            },
            name: "volleyball-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/waterpolo/:date([0-9]{8})?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 2657))
              );
            },
            name: "waterpolo-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/schedule",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2670))
              );
            },
            name: "schedule",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/stadiums",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2658))
              );
            },
            name: "stadium",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/standings",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2659))
              );
            },
            name: "standings",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/team-squads",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2660))
              );
            },
            name: "squads",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/teams",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2661))
              );
            },
            name: "team",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/comparison/:proModule/:homeId?-vs-:awayId?.html",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(131),
                ]).then(n.bind(null, 2652))
              );
            },
            meta: { type: "comparison" },
            name: "comparison",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/group-:type",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(138)]).then(n.bind(null, 2655))
              );
            },
            name: "group",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/fifa-world-cup/:year-:location-world-cup/qualifiers-:continent",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 2653))
              );
            },
            name: "qualifier",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/head-to-head/:ballType(basketball|tennis|table-tennis|american-football|ice-hockey|volleyball|baseball|badminton|handball|waterpolo|snooker|cricket|esports)?/:soccer(soccer-)?:home-vs-:away",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(106),
                ]).then(n.bind(null, 2612))
              );
            },
            name: "seoH2hDetail",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/salary/:ballType(basketball)?/player-:playerName-:playerId",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(128),
                ]).then(n.bind(null, 2602))
              );
            },
            name: "salaryPlayer",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/salary/:ballType(basketball)?/team-:teamName-:teamId",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(107),
                ]).then(n.bind(null, 2604))
              );
            },
            name: "salaryTeam",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/tips/tipster-:id/:planId",
            component: j,
            name: "tipsterDetail",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/transfer/football-:type(league|team|player)-:name-:id/:year?",
            component: S,
            name: "transferTourList",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/youtube/:type(football|basketball)/:matchId",
            component: function () {
              return Object(k.m)(n.e(0).then(n.bind(null, 2640)));
            },
            meta: { type: "" },
            name: "youtube-matches",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/american-football/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(108),
                ]).then(n.bind(null, 2617))
              );
            },
            name: "amfootballMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/badminton/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(115),
                ]).then(n.bind(null, 2611))
              );
            },
            name: "badmintonMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/baseball/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(120),
                ]).then(n.bind(null, 2615))
              );
            },
            name: "baseballMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/basketball/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(119),
                ]).then(n.bind(null, 2610))
              );
            },
            meta: { type: "basketball" },
            name: "basketballMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/basketball/player-:name?/:playerId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(2), n.e(159)]).then(n.bind(null, 2598))
              );
            },
            meta: { type: "basketball" },
            name: "basketballPlayer",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/cricket/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(118),
                ]).then(n.bind(null, 2599))
              );
            },
            name: "cricketMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/esports/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(117),
                ]).then(n.bind(null, 2600))
              );
            },
            name: "esportsMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/handball/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(116),
                ]).then(n.bind(null, 2607))
              );
            },
            name: "handballMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/ice-hockey/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(109),
                ]).then(n.bind(null, 2608))
              );
            },
            name: "icehockeyMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/prediction/:proModule/:homeId?-vs-:awayId?/:id?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(122),
                ]).then(n.bind(null, 2664))
              );
            },
            meta: { type: "predictionPage" },
            name: "predictionPage",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/snooker/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(113),
                ]).then(n.bind(null, 2609))
              );
            },
            name: "snookerMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/table-tennis/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(112),
                ]).then(n.bind(null, 2613))
              );
            },
            name: "tabletennisMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/tennis/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(111),
                ]).then(n.bind(null, 2614))
              );
            },
            name: "tennisMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/top-scorers/:teamName?/:compName/:seasonId",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(157)]).then(n.bind(null, 2619))
              );
            },
            name: "seoTopScorers",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/volleyball/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(110),
                ]).then(n.bind(null, 2616))
              );
            },
            name: "volleyballMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/waterpolo/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(114),
                ]).then(n.bind(null, 2606))
              );
            },
            name: "waterpoloMatch",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/basketball/team-:name?/:teamId?/:tab(overview|stats|squad)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(57), n.e(58), n.e(0), n.e(2), n.e(160)]).then(
                  n.bind(null, 2596)
                )
              );
            },
            meta: { type: "basketball" },
            name: "basketballTeam",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/basketball/tournament-:name?/:tourId?/:tab(overview|fixtures|standings|stats|teams)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(2), n.e(161)]).then(n.bind(null, 2597))
              );
            },
            meta: { type: "basketball" },
            name: "basketballTournament",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/:date([0-9]{8})?",
            component: A,
            meta: { type: "football" },
            name: "football-home-match-by-date",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/user-:uid/my-tipsters",
            component: j,
            name: "myTipsters",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/user-:uid/tips-orders",
            component: j,
            name: "tipsOrders",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/:proModule/rankings/:name?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(124),
                ]).then(n.bind(null, 2632))
              );
            },
            meta: { type: "ballRankings" },
            name: "ballRankings",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/match-:home-:away/:matchId/tips",
            component: j,
            name: "matchTips",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/match-:name?/:matchId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(57),
                  n.e(58),
                  n.e(59),
                  n.e(0),
                  n.e(1),
                  n.e(60),
                  n.e(62),
                  n.e(121),
                ]).then(n.bind(null, 2621))
              );
            },
            meta: { type: "football" },
            name: "football-detail",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/player-:name?/:playerId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(57), n.e(58), n.e(0), n.e(1), n.e(60)]).then(
                  n.bind(null, 846)
                )
              );
            },
            meta: { type: "football" },
            name: "football-player",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/:proModule/player-:name?/:playerId?/:tab?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(130),
                ]).then(n.bind(null, 2663))
              );
            },
            name: "dataBankPlayer",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/team-:name?/:teamId?/:tab(overview|schedule|squad|transfers|trophies)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(57),
                  n.e(58),
                  n.e(0),
                  n.e(1),
                  n.e(67),
                  n.e(135),
                ]).then(n.bind(null, 2594))
              );
            },
            meta: { type: "football" },
            name: "football-team",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/tournament-:name?/:compId?/:tab(overview|schedule|standings|stats|transfers|archive)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(1), n.e(136)]).then(n.bind(null, 2595))
              );
            },
            meta: { type: "football" },
            name: "football-competition",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/:proModule/team-:name?/:teamId?/:tab(overview|schedule|squad|transfers|trophies)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(125),
                ]).then(n.bind(null, 2631))
              );
            },
            name: "dataBankTeams",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/:proModule/tournament-:name?/:compId?/:tab(overview|matches|standings|stats|transfers|archive)?/:seasonId?",
            component: function () {
              return Object(k.m)(
                Promise.all([
                  n.e(0),
                  n.e(1),
                  n.e(2),
                  n.e(11),
                  n.e(12),
                  n.e(4),
                  n.e(10),
                  n.e(3),
                  n.e(6),
                  n.e(14),
                  n.e(9),
                  n.e(8),
                  n.e(13),
                  n.e(5),
                  n.e(7),
                  n.e(132),
                ]).then(n.bind(null, 2627))
              );
            },
            name: "dataBankCompetition",
          },
          {
            path: "/:lang(zh|en|zht|es|pt|fr|de|it|ru|ja|da|sv|nn|bg|el|pl|ro|cs|hu|sk|nl|et|ko|tr|hr|sl|lv|fi|th|bs|sr|mk|lt|id|vi|aa|aze|ka|sqi|ukr|mm|br|km)?/*",
            component: function () {
              return Object(k.m)(Promise.resolve().then(n.bind(null, 94)));
            },
            name: "error",
          },
        ],
        fallback: !1,
      };
      function O() {
        var e = new v.a(x),
          t = e.resolve.bind(e);
        return (
          (e.resolve = function (e, n, o) {
            "string" == typeof e && (e = Object(_.normalizeURL)(e));
            var r = t(e, n, o);
            return (
              r &&
                r.resolved &&
                r.resolved.query &&
                (function (e) {
                  for (var t in e)
                    "string" == typeof e[t] &&
                      (e[t] = decodeURIComponent(e[t]));
                })(r.resolved.query),
              r
            );
          }),
          e
        );
      }
      var I = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (e, t) {
            var n = t.parent,
              data = t.data,
              o = t.props,
              r = n.$createElement;
            data.nuxtChild = !0;
            for (
              var l = n,
                c = n.$nuxt.nuxt.transitions,
                d = n.$nuxt.nuxt.defaultTransition,
                m = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && m++, (n = n.$parent);
            data.nuxtChildDepth = m;
            var h = c[m] || d,
              f = {};
            D.forEach(function (e) {
              void 0 !== h[e] && (f[e] = h[e]);
            });
            var y = {};
            C.forEach(function (e) {
              "function" == typeof h[e] && (y[e] = h[e].bind(l));
            });
            var v = y.beforeEnter;
            if (
              ((y.beforeEnter = function (e) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  v)
                )
                  return v.call(l, e);
              }),
              !1 === h.css)
            ) {
              var _ = y.leave;
              (!_ || _.length < 2) &&
                (y.leave = function (e, t) {
                  _ && _.call(l, e), l.$nextTick(t);
                });
            }
            var k = r("routerView", data);
            return (
              o.keepAlive &&
                (k = r("keep-alive", { props: o.keepAliveProps }, [k])),
              r("transition", { props: f, on: y }, [k])
            );
          },
        },
        D = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        C = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        P = n(94),
        E = (n(54), n(55), n(26), n(71)),
        z = {
          name: "Nuxt",
          components: { NuxtChild: I, NuxtError: P.default },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" },
          },
          errorCaptured: function (e) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = e), this.$forceUpdate());
          },
          computed: {
            routerViewKey: function () {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(k.c)(this.$route.matched[0].path)(this.$route.params)
                );
              var e = Object(E.a)(this.$route.matched, 1)[0];
              if (!e) return this.$route.path;
              var t = e.components.default;
              if (t && t.options) {
                var n = t.options;
                if (n.key)
                  return "function" == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(e.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, "");
            },
          },
          beforeCreate: function () {
            l.default.util.defineReactive(
              this,
              "nuxt",
              this.$root.$options.nuxt
            );
          },
          render: function (e) {
            var t = this;
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function () {
                    return (t.errorFromNuxtError = !1);
                  }),
                  e("div", {}, [
                    e("h2", "An error occurred while showing the error page"),
                    e(
                      "p",
                      "Unfortunately an error occurred and while showing the error page another error occurred"
                    ),
                    e(
                      "p",
                      "Error details: ".concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    e("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function () {
                    return (t.displayingNuxtError = !1);
                  }),
                  e(P.default, { props: { error: this.nuxt.err } }))
              : e("NuxtChild", { key: this.routerViewKey, props: this.$props });
          },
        },
        L = (n(138), n(142), n(63), n(859)),
        R = (n(925), n(847)),
        B = n(858),
        N = n(860);
      function F(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return U(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return U(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (r = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw r;
            }
          },
        };
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var H = {
          _default: Object(k.s)(R.a),
          _iframePlugin: Object(k.s)(B.a),
          _youtubeTemp: Object(k.s)(N.a),
        },
        W = {
          render: function (e, t) {
            var n = e("NuxtLoading", { ref: "loading" }),
              o = e(this.layout || "nuxt"),
              r = e(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [o]
              ),
              l = e(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (e) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [r]
              );
            return e("div", { domProps: { id: "__nuxt" } }, [n, l]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            l.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$loading = e.$refs.loading;
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var e = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function t() {
                  var n, o;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((n = Object(k.h)(e.$route)).length) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              e.$loading.start(),
                              (o = n.map(function (t) {
                                var p = [];
                                if (
                                  (t.$options.fetch &&
                                    t.$options.fetch.length &&
                                    p.push(
                                      Object(k.q)(t.$options.fetch, e.context)
                                    ),
                                  t.$fetch)
                                )
                                  p.push(t.$fetch());
                                else {
                                  var n,
                                    o = F(
                                      Object(k.e)(t.$vnode.componentInstance)
                                    );
                                  try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (e) {
                                    o.e(e);
                                  } finally {
                                    o.f();
                                  }
                                }
                                return (
                                  t.$options.asyncData &&
                                    p.push(
                                      Object(k.q)(
                                        t.$options.asyncData,
                                        e.context
                                      ).then(function (e) {
                                        for (var n in e)
                                          l.default.set(t.$data, n, e[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (t.prev = 5),
                              (t.next = 8),
                              Promise.all(o)
                            );
                          case 8:
                            t.next = 15;
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(5)),
                              e.$loading.fail(t.t0),
                              Object(k.k)(t.t0),
                              e.error(t.t0);
                          case 15:
                            e.$loading.finish();
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var e = (P.default.options || P.default).layout;
                "function" == typeof e && (e = e(this.context)),
                  this.setLayout(e);
              }
            },
            setLayout: function (e) {
              return (
                (e && H["_" + e]) || (e = "default"),
                (this.layoutName = e),
                (this.layout = H["_" + e]),
                this.layout
              );
            },
            loadLayout: function (e) {
              return (
                (e && H["_" + e]) || (e = "default"),
                Promise.resolve(H["_" + e])
              );
            },
          },
          components: { NuxtLoading: L.a },
        };
      n(18), n(27);
      function V(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return G(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return G(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (r = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw r;
            }
          },
        };
      }
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      l.default.use(c.a);
      var K = ["state", "getters", "actions", "mutations"],
        Q = {};
      ((Q = (function (e, t) {
        if ((e = e.default || e).commit)
          throw new Error(
            "[nuxt] ".concat(
              t,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof e && (e = Object.assign({}, e)), Y(e, t);
      })(n(1082), "store/index.js")).modules = Q.modules || {}),
        Z(n(276), "actions.js"),
        Z(n(277), "mutations.js"),
        Z(n(1083), "basketball/index.js"),
        Z(n(1084), "user/index.js"),
        Z(n(1085), "today-matches/index.js"),
        Z(n(1086), "seoTopScorers/index.js"),
        Z(n(1087), "seoH2h/index.js"),
        Z(n(295), "user/mutations.js"),
        Z(n(278), "basketball/states.js"),
        Z(n(296), "today-matches/actions.js"),
        Z(n(280), "basketball/mutations.js"),
        Z(n(299), "seoH2h/mutations.js"),
        Z(n(281), "basketball/getters.js"),
        Z(n(298), "seoH2h/actions.js"),
        Z(n(294), "user/actions.js"),
        Z(n(297), "today-matches/mutations.js"),
        Z(n(279), "basketball/actions.js"),
        Z(n(1088), "football/fifa/index.js"),
        Z(n(1089), "football/comp/index.js"),
        Z(n(1090), "football/team/index.js"),
        Z(n(1091), "football/player/index.js"),
        Z(n(1092), "football/home-new/index.js"),
        Z(n(1093), "football/detail/index.js"),
        Z(n(1094), "football/sitemap/index.js"),
        Z(n(305), "football/team/getters.js"),
        Z(n(309), "football/detail/mutations.js"),
        Z(n(282), "basketball/tournament/states.js"),
        Z(n(301), "football/fifa/mutations.js"),
        Z(n(306), "football/home-new/actions.js"),
        Z(n(1095), "football/detail/getters.js"),
        Z(n(307), "football/home-new/mutations.js"),
        Z(n(1096), "football/player/actions.js"),
        Z(n(308), "football/detail/actions.js"),
        Z(n(1097), "football/player/mutations.js"),
        Z(n(311), "football/sitemap/actions.js"),
        Z(n(302), "football/comp/getters.js"),
        Z(n(312), "football/sitemap/mutations.js"),
        Z(n(310), "football/sitemap/states.js"),
        Z(n(303), "football/team/actions.js"),
        Z(n(300), "football/fifa/actions.js"),
        Z(n(154), "football/comp/mutations.js"),
        Z(n(304), "football/team/mutations.js"),
        Z(n(284), "basketball/tournament/mutations.js"),
        Z(n(285), "basketball/tournament/getters.js"),
        Z(n(283), "basketball/tournament/actions.js"),
        Z(n(286), "basketball/team/states.js"),
        Z(n(288), "basketball/team/mutations.js"),
        Z(n(289), "basketball/team/getters.js"),
        Z(n(287), "basketball/team/actions.js"),
        Z(n(290), "basketball/player/states.js"),
        Z(n(292), "basketball/player/mutations.js"),
        Z(n(293), "basketball/player/getters.js"),
        Z(n(291), "basketball/player/actions.js"),
        Z(n(153), "football/comp/actions.js");
      var J =
        Q instanceof Function
          ? Q
          : function () {
              return new c.a.Store(Object.assign({ strict: !1 }, Q));
            };
      function Y(e, t) {
        if (e.state && "function" != typeof e.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(t)
          );
          var n = Object.assign({}, e.state);
          e = Object.assign({}, e, {
            state: function () {
              return n;
            },
          });
        }
        return e;
      }
      function Z(e, t) {
        e = e.default || e;
        var n = t.replace(/\.(js|mjs)$/, "").split("/"),
          o = n[n.length - 1],
          r = "store/".concat(t);
        if (
          ((e =
            "state" === o
              ? (function (e, t) {
                  if ("function" != typeof e) {
                    console.warn(
                      "".concat(
                        t,
                        " should export a method that returns an object"
                      )
                    );
                    var n = Object.assign({}, e);
                    return function () {
                      return n;
                    };
                  }
                  return Y(e, t);
                })(e, r)
              : Y(e, r)),
          K.includes(o))
        ) {
          var l = o;
          ee(X(Q, n, { isProperty: !0 }), e, l);
        } else {
          "index" === o && (n.pop(), (o = n[n.length - 1]));
          var c,
            d = X(Q, n),
            m = V(K);
          try {
            for (m.s(); !(c = m.n()).done; ) {
              var h = c.value;
              ee(d, e[h], h);
            }
          } catch (e) {
            m.e(e);
          } finally {
            m.f();
          }
          !1 === e.namespaced && delete d.namespaced;
        }
      }
      function X(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.isProperty,
          r = void 0 !== o && o;
        if (!t.length || (r && 1 === t.length)) return e;
        var l = t.shift();
        return (
          (e.modules[l] = e.modules[l] || {}),
          (e.modules[l].namespaced = !0),
          (e.modules[l].modules = e.modules[l].modules || {}),
          X(e.modules[l], t, { isProperty: r })
        );
      }
      function ee(e, t, n) {
        t &&
          ("state" === n
            ? (e.state = t || e.state)
            : (e[n] = Object.assign({}, e[n], t)));
      }
      var te = n(809),
        ae = n.n(te),
        ne = function (e, t) {
          var n = e.req,
            o = e.res,
            r = !0;
          t("cookies", ae()(n, o, r));
        },
        ie = function (e) {
          return oe.apply(this, arguments);
        };
      function oe() {
        return (oe = Object(o.a)(
          regeneratorRuntime.mark(function e(t) {
            var n, o, r, l, c, d;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    t.app,
                      (n = t.store),
                      t.route,
                      t.params,
                      t.error,
                      t.redirect,
                      t.req,
                      t.res,
                      (o = new Date().getTimezoneOffset()),
                      (r = new Date().getTimezoneOffset()),
                      (l = parseInt(Math.abs(r) / 60)),
                      (c = parseInt(Math.abs(r) % 60)),
                      (d =
                        (r < 0 ? "" : "-") +
                        (l < 10 ? "0" + l : l) +
                        ":" +
                        (c < 10 ? "0" + c : c)),
                      navigator.cookieEnabled
                        ? localStorage.set_client_timezone
                          ? localStorage.client_timezone
                            ? n.dispatch(
                                "SET_TIMEZONE",
                                localStorage.client_timezone
                              )
                            : n.dispatch("SET_TIMEZONE", d)
                          : (localStorage.setItem("client_timezone", d),
                            n.dispatch("SET_TIMEZONE", d))
                        : n.dispatch("SET_TIMEZONE", d),
                      n.commit("set_server_zone", o);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      n(1098), n(30);
      var re = n(810),
        se = n.n(re),
        le = (n(1101), n(811)),
        ce = n.n(le),
        pe = (n(1102), n(812)),
        de = n.n(pe),
        ue = (n(1103), n(813)),
        me = n.n(ue),
        he = (n(1107), n(814)),
        fe = n.n(he),
        ye = (n(1109), n(815)),
        ge = n.n(ye),
        be = (n(1110), n(816)),
        ve = n.n(be),
        _e = (n(1111), n(817)),
        ke = n.n(_e),
        Ae = (n(1114), n(818)),
        je = n.n(Ae),
        we = (n(1115), n(819)),
        Se = n.n(we),
        Te = (n(1123), n(820)),
        Me = n.n(Te),
        xe = (n(1124), n(821)),
        Oe = n.n(xe),
        Ie = (n(1125), n(314)),
        De = n.n(Ie),
        Ce = (n(1126), n(822)),
        Pe = n.n(Ce),
        Ee = (n(1127), n(823)),
        ze = n.n(Ee),
        Le = (n(1128), n(824)),
        Re = n.n(Le),
        Be = (n(1130), n(130)),
        Ne = n.n(Be),
        Fe = (n(1131), n(152)),
        Ue = n.n(Fe),
        He = (n(1132), n(825)),
        qe = n.n(He),
        We = (n(1133), n(826)),
        Ve = n.n(We),
        Ge = (n(1134), n(827)),
        Ke = n.n(Ge),
        Qe = (n(1137), n(828)),
        $e = n.n(Qe),
        Je = (n(1140), n(183)),
        Ye = n.n(Je),
        Ze = (n(1141), n(315)),
        Xe = n.n(Ze),
        et = (n(1142), n(181)),
        tt = n.n(et),
        at = (n(1143), n(317)),
        nt = n.n(at),
        it = (n(1144), n(313)),
        ot = n.n(it),
        st = (n(1145), n(182)),
        lt = n.n(st),
        ct = (n(1146), n(829)),
        pt = n.n(ct),
        ut = (n(1147), n(830)),
        mt = n.n(ut),
        ht = (n(1148), n(831)),
        ft = n.n(ht),
        yt = (n(1149), n(832)),
        gt = n.n(yt),
        bt = (n(1150), n(833)),
        vt = n.n(bt),
        _t = (n(1151), n(834)),
        kt = n.n(_t),
        At = (n(1152), n(835)),
        jt = n.n(At),
        wt = (n(1153), n(316)),
        St = n.n(wt),
        Tt = (n(1154), n(836)),
        Mt = n.n(Tt),
        xt = (n(1155), n(837)),
        Ot = n.n(xt),
        It = (n(1156), n(838)),
        Dt = n.n(It),
        Ct = n(851),
        Pt = n(158);
      Pt.a.install = function (e) {
        e.component(Pt.a.name, Pt.a);
      };
      var Et = Pt.a,
        zt = n(157);
      zt.a.install = function (e) {
        e.component(zt.a.name, zt.a);
      };
      var Lt = zt.a,
        Rt = (n(1157), n(1158), n(1159), n(1160), n(839)),
        Bt = n.n(Rt),
        Nt = [
          Ct.a,
          Dt.a,
          Ot.a,
          Mt.a,
          St.a,
          jt.a,
          kt.a,
          vt.a,
          gt.a,
          ft.a,
          mt.a,
          pt.a,
          lt.a,
          ot.a,
          nt.a,
          tt.a,
          Xe.a,
          Ye.a,
          $e.a,
          Ke.a,
          Ve.a,
          qe.a,
          Ue.a,
          Ne.a,
          Re.a,
          ze.a,
          Pe.a,
          De.a,
          Oe.a,
          Me.a,
          Se.a,
          je.a,
          ke.a,
          ve.a,
          ge.a,
          fe.a,
          me.a,
          de.a,
          Et,
          Lt,
        ];
      (l.default.prototype.$message = ce.a),
        (l.default.prototype.$loading = se.a);
      var Ft = {
        install: function (e) {
          Nt.forEach(function (component) {
            e.component(component.name, component);
          });
        },
      };
      l.default.use(Ft, { locale: Bt.a });
      n(20);
      var Ut = (function () {
          var e = Object(o.a)(
            regeneratorRuntime.mark(function e(t) {
              var n, o, r, l, c, d, m;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.route),
                        (o = t.store),
                        (r = "football"),
                        (l = 1),
                        (c = n.fullPath),
                        (d = "Football"),
                        (m = "football"),
                        c.includes("/basketball")
                          ? ((r = "basketball"),
                            (l = 2),
                            (d = "Basketball"),
                            (m = "basketball"))
                          : c.includes("/table-tennis")
                          ? ((r = "tabletennis"),
                            (l = 11),
                            (d = "Tabletennis"),
                            (m = "table-tennis"))
                          : c.includes("/tennis")
                          ? ((r = "tennis"),
                            (l = 3),
                            (d = "Tennis"),
                            (m = "tennis"))
                          : c.includes("/american-football")
                          ? ((r = "amfootball"),
                            (l = 17),
                            (d = "AMFootball"),
                            (m = "american-football"))
                          : c.includes("/ice-hockey")
                          ? ((r = "icehockey"),
                            (l = 8),
                            (d = "ICEHockey"),
                            (m = "ice-hockey"))
                          : c.includes("/volleyball")
                          ? ((r = "volleyball"),
                            (l = 10),
                            (d = "Volleyball"),
                            (m = "volleyball"))
                          : c.includes("/baseball")
                          ? ((r = "baseball"),
                            (l = 6),
                            (d = "Baseball"),
                            (m = "baseball"))
                          : c.includes("/badminton")
                          ? ((r = "badminton"),
                            (l = 24),
                            (d = "Badminton"),
                            (m = "badminton"))
                          : c.includes("/handball")
                          ? ((r = "handball"),
                            (l = 7),
                            (d = "Handball"),
                            (m = "handball"))
                          : c.includes("/waterpolo")
                          ? ((r = "waterpolo"),
                            (l = 22),
                            (d = "Waterpolo"),
                            (m = "waterpolo"))
                          : c.includes("/snooker")
                          ? ((r = "snooker"),
                            (l = 19),
                            (d = "Snooker"),
                            (m = "snooker"))
                          : c.includes("/cricket")
                          ? ((r = "cricket"),
                            (l = 5),
                            (d = "Cricket"),
                            (m = "cricket"))
                          : c.includes("/mobile")
                          ? (r = "APP")
                          : c.includes("/esports") &&
                            ((r = "esports"),
                            (l = 100),
                            (d = "Esports"),
                            (m = "esports")),
                        o.commit("proModuleMutation", r),
                        o.commit("set_sport_idMutation", l),
                        o.commit("set_headerTitleMutation", d),
                        o.commit("set_ballRouteUrlMutation", m);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ht = n(12),
        qt = n.n(Ht),
        Wt = n(1161),
        Vt = n(1162),
        Gt = function (e, t) {
          e.app;
          t("dayjs", function (e) {
            return qt.a.extend(Wt), qt()(e);
          }),
            t("dayjs_utc", function (e) {
              return qt.a.extend(Vt), qt.a.utc(e);
            });
        },
        Kt = n(322),
        Qt = n(46),
        $t = n(469).production;
      l.default.use(Kt.a),
        (l.default.prototype.$WORDS = Qt.a.WORDS),
        (l.default.prototype.$languageMaps = Qt.a.languageMaps),
        (l.default.prototype.$languageMap = Qt.a.def());
      var Jt = function (e, t) {
          switch ((e = (e.toLocaleLowerCase() || "").split("-")[0])) {
            case "zh":
              e = "zht";
          }
          return t[e] || (e = "en"), e;
        },
        Yt = (function () {
          var e = Object(o.a)(
            regeneratorRuntime.mark(function e(t) {
              var o,
                r,
                l,
                c,
                d,
                m,
                h,
                f,
                y,
                v,
                _,
                k,
                A,
                j,
                w,
                S,
                T,
                M,
                x,
                O,
                I,
                D;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (o = t.app),
                          (r = t.store),
                          (l = t.route),
                          (c = t.params),
                          t.error,
                          (d = t.redirect),
                          t.req,
                          t.res,
                          t.next,
                          (m = ""),
                          (h = !1),
                          (f = (l.meta || [])[0] || {}),
                          f.type || "football",
                          r.dispatch("SET_LANG", c.lang || "en"),
                          (y = {}),
                          (v = 0);
                      case 5:
                        if (!(v < Qt.a.motionType.length)) {
                          e.next = 23;
                          break;
                        }
                        if (
                          ((_ = Qt.a.motionType[v]),
                          (k = r.state.locale),
                          (e.prev = 8),
                          y[k] || (y[k] = {}),
                          y[k][_])
                        ) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (A = "".concat(_, "/").concat(k)),
                          (e.next = 14),
                          n(1163)("./".concat(A, ".json"))
                        );
                      case 14:
                        (j = e.sent),
                          "map_football" == _
                            ? (y[k] = j.default)
                            : (y[k][_] = j.default);
                      case 16:
                        e.next = 20;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(8));
                      case 20:
                        v++, (e.next = 5);
                        break;
                      case 23:
                        if (
                          (r.commit("set_languageJsonMap", y),
                          (S = navigator.appName),
                          (T = ""),
                          (M = l.meta || {}),
                          (T =
                            "Netscape" == S
                              ? navigator.language
                              : navigator.userLanguage),
                          (T = Jt(T, r.state.languageJsonMap)),
                          (w = o.$cookies.get("locale")),
                          (x = navigator.appName),
                          (O = ""),
                          (O = (O =
                            "Netscape" === x
                              ? navigator.language
                              : navigator.userLanguage).substr(0, 2)),
                          w ||
                            ("zh" === O
                              ? (O = "zht")
                              : Qt.a.languageMaps[O] || (O = "en"),
                            (w = O),
                            o.$cookies.set("locale", w, {
                              path: "/",
                              maxAge: 604800,
                            })),
                          (m = w || T || r.state.locale || ""),
                          ["advertising", "accountDeletion"].includes(l.name) &&
                            (m = "en"),
                          c.lang == m ||
                            c.lang ||
                            "en" == m ||
                            0 == M.redirect ||
                            (-1 === l.fullPath.indexOf("/sitemap-football") &&
                              (h = !0)),
                          !h)
                        ) {
                          e.next = 44;
                          break;
                        }
                        (I = l.fullPath || ""), (D = "");
                        try {
                          D = window.location.href || "";
                        } catch (e) {}
                        if (
                          (c.lang &&
                            c.lang != m &&
                            (I = I.replace("/".concat(c.lang), "")),
                          I.indexOf("/".concat(m)) < 0 &&
                            (I = "/".concat(m).concat(I)),
                          !(D.indexOf("webcache.google") < 0))
                        ) {
                          e.next = 44;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          d("".concat($t.WWWROOT).concat(I))
                        );
                      case 44:
                        (o.i18n = new Kt.a({
                          locale: r.state.locale || "en",
                          fallbackLocale: "en",
                          messages: r.state.languageJsonMap,
                          silentTranslationWarn: !0,
                        })),
                          (o.i18n.path = function (link) {
                            return (
                              !(
                                !["football", "basketball"].includes(
                                  r.state.proModule
                                ) &&
                                (!link ||
                                  link.includes("/tournament") ||
                                  link.includes("/player") ||
                                  link.includes("/team"))
                              ) &&
                              (o.i18n.locale === o.i18n.fallbackLocale
                                ? "/".concat(link)
                                : "/".concat(o.i18n.locale, "/").concat(link))
                            );
                          });
                      case 47:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[8, 18]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Zt = n(77),
        Xt = n(13),
        ea = n(0),
        ta = (n(1164), n(1165), n(853)),
        aa = n(93),
        na = n(854),
        ia = n(843),
        oa = n.n(ia),
        ra = n(469).production;
      l.default.component(Zt.a.name, Zt.a),
        l.default.component(Zt.b.name, Zt.b),
        l.default.component(Zt.c.name, Zt.c);
      var sa = function (e) {
          e.app;
          var t = e.store,
            o = (e.req, e.route);
          if (
            (l.default.use(oa.a, {
              client_id:
                "369945107274-0p0a8hpp78jifcngkf6jms6a89spudsi.apps.googleusercontent.com",
            }),
            (l.default.prototype.googleAuth = l.default.googleAuth),
            l.default.component("no-ssr", y.a),
            l.default.component("TopTitle", ta.a),
            l.default.component("bkNoData", aa.a),
            l.default.component("breadcrumb", na.a),
            o.fullPath.includes("isplugin=true") &&
              t.commit("set_isplugin", !0),
            o.fullPath.includes("istour_rank=true") &&
              t.commit("set_istour_rank", !0),
            o.fullPath.includes("istour_week=true") &&
              t.commit("set_istour_week", !0),
            o.fullPath.includes("isteam_standings=true") &&
              t.commit("set_isteam_standings", !0),
            o.fullPath.includes("isteam_schedule=true") &&
              t.commit("set_isteam_schedule", !0),
            o.fullPath.includes("isteam_top=true") &&
              t.commit("set_isteam_top", !0),
            "mobile" == t.state.deviceType &&
              [
                "seoH2hIndex",
                "seoH2hDetail",
                "seoTopScorers",
                "football-today-matches",
              ].includes(o.name))
          )
            try {
              var r = document.body.clientWidth,
                c = window.screen.width;
              document.getElementsByTagName("html")[0].style.zoom = c / r;
            } catch (e) {}
          var d = n(1413);
          if (
            ((window.$ = window.jQuery = d),
            n(1414),
            n(1416),
            n(1417),
            $(function () {
              function e(e) {
                var n = navigator.onLine ? "online" : "offline";
                t.dispatch("UPDATE_ONLINE_STATUS", n);
              }
              window.addEventListener("online", e),
                window.addEventListener("offline", e);
            }),
            t.dispatch("setPageSize", {
              pageWidth: document.body.scrollWidth,
              pageHeight: document.body.scrollHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            }),
            (window.onresize = function () {
              t.dispatch("setPageSize", {
                pageWidth: document.body.scrollWidth,
                pageHeight: document.body.scrollHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
              });
            }),
            document.createEvent)
          ) {
            var m = document.createEvent("HTMLEvents");
            m.initEvent("resize", !0, !0), window.dispatchEvent(m);
          } else document.createEventObject && window.fireEvent("onresize");
          (l.default.prototype.$Util = ea.a),
            (l.default.prototype.$envData = ra),
            (l.default.prototype.$eventBus = new l.default()),
            Object.keys(Xt).forEach(function (e) {
              (l.default.prototype[e] = Xt[e]), l.default.filter(e, Xt[e]);
            });
        },
        la = (n(23), n(25)),
        ca = (n(24), n(31), n(5)),
        pa = n(187),
        da = n.n(pa),
        ua = {
          name: "common",
          computed: {
            isplugin: function () {
              return this.$store.state.isplugin;
            },
            mylocale: function () {
              return "en" == this.$store.state.locale
                ? ""
                : "/" + this.$store.state.locale;
            },
            proModule: function () {
              return this.$store.state.proModule;
            },
            proModuleText: function () {
              var e = this;
              return this.$t(
                ca.ballTypes.filter(function (t) {
                  return t.proModule === e.proModule;
                })[0].i18n
              );
            },
            proModuleHref: function () {
              var e = this;
              return ca.ballTypes.filter(function (t) {
                return t.proModule === e.proModule;
              })[0].href;
            },
            ballRouteUrl: function () {
              return this.$store.state.ballRouteUrl;
            },
            sport_id: function () {
              return this.$store.state.sport_id;
            },
            headerTitle: function () {
              return this.$store.state.headerTitle;
            },
            ODDS_TYPE: function () {
              return this.$store.state.ODDS_TYPE;
            },
            myballTypePre: function () {
              return ca.ballTypePre[this.$store.state.proModule];
            },
            m_LinkData: function () {
              return {
                rel: "alternate",
                media: "only screen and (max-width: 640px)",
              };
            },
            h2hDetailDataSeo: function () {
              return this.$store.state.seoH2h.h2hDetailData;
            },
            compVenues: function () {
              var e;
              if (
                this.$route.fullPath.includes("head-to-head") ||
                this.$route.fullPath.includes("prediction") ||
                this.$route.fullPath.includes("live")
              )
                return (
                  (null === (e = this.$store.state.seoH2h.h2hDetailData) ||
                  void 0 === e
                    ? void 0
                    : e.venues) || ""
                );
              if ("football" === this.proModule) {
                if (this.$route.fullPath.includes("tournament-"))
                  return this.$store.state.football.comp.data.venues || "";
                if (this.$route.fullPath.includes("team-"))
                  return this.$store.state.football.team.data.venues || "";
                if (this.$route.fullPath.includes("player-"))
                  return (
                    this.$store.state.football.player.data.playerMatches
                      .venues || ""
                  );
                if (this.$route.fullPath.includes("match-"))
                  return this.$store.state.football.detail.HISTORY_DETAIL_DATA
                    .venues;
              } else if ("basketball" === this.proModule) {
                if (this.$route.fullPath.includes("tournament-"))
                  return this.$store.state.basketball.tourData.venues || "";
                if (this.$route.fullPath.includes("team-"))
                  return this.$store.state.basketball.teamData.venues || "";
                if (this.$route.fullPath.includes("player-"))
                  return this.$store.state.basketball.playerData.venues || "";
                if (this.$route.fullPath.includes("match-"))
                  return this.$store.state.basketball._h2hData.venues;
              }
              return "";
            },
            sportHomeUrl: function () {
              return "https://www.aiscore.com"
                .concat(this.mylocale, "/")
                .concat(this.proModuleHref);
            },
            linkHref: function () {
              return "".concat(this.mylocale, "/").concat(this.proModuleHref);
            },
          },
          methods: {
            handleTeamRouter: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "overview",
                n = arguments.length > 2 ? arguments[2] : void 0,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "";
              n = (n || "").toLocaleLowerCase().split(" ").join("-");
              var r = this,
                l = r.$i18n.path("team-".concat(n, "/").concat(e));
              return (
                "overview" != t && (l += "/".concat(t)), (l += "".concat(o))
              );
            },
            handleMatchRouter: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "live",
                n = arguments.length > 2 ? arguments[2] : void 0,
                o = arguments.length > 3 ? arguments[3] : void 0;
              (n = (n || "")
                .toLocaleLowerCase()
                .split(" ")
                .join("-")
                .split("/")
                .join("-")),
                (o = (o || "")
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("-")
                  .split("/")
                  .join("-"));
              var r = this,
                l = r.$i18n.path(
                  "match-".concat(n, "-").concat(o, "/").concat(e)
                );
              return "overview" == t || "live" == t ? l : (l += "/".concat(t));
            },
            handleBasketballMatchRouter: function (e, t, n, o) {
              (n = (n || "")
                .toLocaleLowerCase()
                .split(" ")
                .join("-")
                .split("/")
                .join("-")),
                (o = (o || "")
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("-")
                  .split("/")
                  .join("-"));
              var r = this.$i18n.path(
                "basketball/match-".concat(n, "-").concat(o, "/").concat(e)
              );
              return t && (r += "/".concat(t)), r;
            },
            handleCompRouter: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "overview",
                n = arguments.length > 2 ? arguments[2] : void 0,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "";
              n = (n || "").toLocaleLowerCase().split(" ").join("-");
              var r = this,
                l = r.$i18n.path("tournament-".concat(n, "/").concat(e));
              return (
                "overview" != t && (l += "/".concat(t)), (l += "".concat(o))
              );
            },
            handlePlayerRouter: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "overview",
                n = arguments.length > 2 ? arguments[2] : void 0;
              n = (n || "").toLocaleLowerCase().split(" ").join("-");
              var o = this,
                r = o.$i18n.path("player-".concat(n, "/").concat(e));
              return "overview" != t && (r += "/".concat(t)), r;
            },
            handleHeadToHeadRouter: function (e, t) {
              if (e > t) {
                var n = [t, e];
                (e = n[0]), (t = n[1]);
              }
              return this.$i18n.path(
                "head-to-head/"
                  .concat(
                    "football" == this.proModule
                      ? "soccer-"
                      : this.ballRouteUrl + "/"
                  )
                  .concat(e, "-vs-")
                  .concat(t)
              );
            },
            transFtb: function (e, i) {
              return e & (1 << i);
            },
            pageRoute: function (e) {
              var t = e.type,
                n = void 0 === t ? "tournament" : t,
                o = e.name,
                r = void 0 === o ? "" : o,
                l = e.id,
                c = void 0 === l ? "" : l,
                d = e.tab,
                m = void 0 === d ? "overview" : d,
                h = e.isClick,
                f = void 0 !== h && h,
                y = e.proModule,
                v = void 0 === y ? "" : y;
              if ("" === c) return !1;
              var path,
                _ = this.$store.state.ballRouteUrl;
              if (
                (v && (_ = v),
                (r = r.toLocaleLowerCase().split(" ").join("-")),
                "match" != n || ("live" != m && "overview" != m)
                  ? v || ("football" !== _ && "basketball" !== _)
                    ? ((path = ""
                        .concat("football" == _ ? "" : _ + "/")
                        .concat(n, "-")
                        .concat(r, "/")
                        .concat(c)
                        .concat("overview" == m ? "" : "/" + m)),
                      (path =
                        "en" === this.$store.state.locale
                          ? "/".concat(path)
                          : "/"
                              .concat(this.$store.state.locale, "/")
                              .concat(path)))
                    : (path = this.$i18n.path(
                        ""
                          .concat("football" == _ ? "" : _ + "/")
                          .concat(n, "-")
                          .concat(r, "/")
                          .concat(c)
                          .concat("overview" == m ? "" : "/" + m)
                      ))
                  : (path = this.$i18n.path(
                      ""
                        .concat("football" == _ ? "" : _ + "/")
                        .concat(n, "-")
                        .concat(r, "/")
                        .concat(c)
                    )),
                !f)
              )
                return path;
              window.open(path);
            },
            AD_GTAG: function (e, t) {
              AiScore.track.google.gtag(
                "event",
                t ? "pc_ad_click" : "pc_ad_view",
                {
                  value: ""
                    .concat(this.$store.state.proModule || "football", "_")
                    .concat(e),
                }
              );
            },
            publicDispose: function (e, data, t, n, o) {
              var r = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                n && (t = 1);
                for (var i = 0; i < t; i++)
                  data.statsLink && da.a.get(data.statsLink),
                    AiScore.track.google.gtag("event", e, data);
              };
              for (var i in t.advs) {
                if (
                  e === (n ? "home_top_banner_click" : "home_top_banner") &&
                  1 == +i
                ) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (e === (n ? "side_ads_click" : "side_ads") && 2 == +i) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (
                  e ===
                    (n ? "list_odds_hover_ads_click" : "list_odds_hover_ads") &&
                  3 == +i
                ) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (
                  e === (n ? "inside_top_banner_click" : "inside_top_banner") &&
                  1 == +i
                ) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (e === (n ? "chat_ads_click" : "chat_ads") && 5 == +i) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (e === (n ? "odds_ads_click" : "odds_ads") && 6 == +i) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = o),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (e === (n ? "ml_ads_click" : "ml_ads") && 4 == +i) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
                if (e === (n ? "stream_ads_click" : "stream_ads") && 4 == +i) {
                  (t.advs[i].link || t.advs[i].code) &&
                    ((data.ad_meterial = t.advs[i].name),
                    (data.statsLink = t.advs[i].statsLink),
                    r(t.advs[i].multiples));
                  break;
                }
              }
            },
            publicAdClickGet: function (e, data, t) {
              this.$store.state.advsData.advs &&
                ((data.sport_id = this.$store.state.proModule),
                (data.country = this.$store.state.advsData.countryCode),
                this.publicDispose(e, data, this.$store.state.advsData, !0, t));
            },
            publicAdShowGet: function (e, data) {
              this.$store.state.advsData.advs &&
                ((data.sport_id = this.$store.state.proModule),
                (data.country = this.$store.state.advsData.countryCode),
                this.publicDispose(e, data, this.$store.state.advsData));
            },
            winRule: function (e) {
              var t,
                n,
                o,
                r,
                l = e.matches,
                c = e.oddSelect2,
                d = e.odds,
                m = e.proModule,
                h = e.type;
              if (((t = l.matchStatus), "football" === m))
                (n = l.homeScores[0]),
                  (o = l.awayScores[0]),
                  "0" !== c && (r = d.odd[1]);
              else if (
                ("0" !== c &&
                  l.ext &&
                  l.ext.odds &&
                  l.ext.odds.oddItems &&
                  l.ext.odds.oddItems.length &&
                  l.ext.odds.oddItems[h].odd &&
                  (r = +l.ext.odds.oddItems[h].odd[1]),
                "basketball" === m || "amfootball" === m || "snooker" === m)
              )
                (n = +l.homeScoresTotal), (o = +l.awayScoresTotal);
              else if ("tennis" === m)
                if ("0" === c)
                  (n = +l.homeScoresTotal), (o = +l.awayScoresTotal);
                else {
                  var f = function (e, t, n, o) {
                      return e
                        ? t.length > 6 || 0 != t[4] || 0 != n[4] || o > 5
                        : 0 != t[4] || 0 != n[4];
                    },
                    y = function (e, t, n, o) {
                      return (
                        t.length > 6 &&
                        (e
                          ? 0 != t[6] || 0 != n[6] || o > 7
                          : 0 != t[6] || 0 != n[6])
                      );
                    },
                    v = function (e, t, n, o) {
                      return (
                        t.length > 6 &&
                        (e
                          ? 0 != t[8] || 0 != n[8] || o > 9
                          : 0 != t[8] || 0 != n[8])
                      );
                    };
                  (n = 0), (o = 0);
                  var _ = [0, 2, 4, 6, 8];
                  ["homeScores", "awayScores"].map(function (e) {
                    _.map(function (t, r) {
                      (function (i, e, t) {
                        return 1 == i
                          ? e > 3
                          : 2 == i
                          ? f(2 == t.matchStatus, t.homeScores, t.awayScores, e)
                          : 3 == i
                          ? y(2 == t.matchStatus, t.homeScores, t.awayScores, e)
                          : 4 != i ||
                            v(
                              2 == t.matchStatus,
                              t.homeScores,
                              t.awayScores,
                              e
                            );
                      })(r, l.statusId, l) &&
                        ("homeScores" === e
                          ? (n += +l[e][t])
                          : (o += +l[e][t]));
                    });
                  });
                }
              else if ("baseball" === m && l.bsScores) {
                var k = 0;
                if (
                  (l.bsScores.p1 && k++,
                  l.bsScores.p2 && k++,
                  l.bsScores.p3 && k++,
                  l.bsScores.p4 && k++,
                  l.bsScores.p5 && k++,
                  l.bsScores.p6 && k++,
                  l.bsScores.p7 && k++,
                  l.bsScores.p8 && k++,
                  l.bsScores.p9 && k++,
                  k <= 4)
                )
                  return -1;
                if ("1" === c && k <= 8) return -1;
                if (
                  "2" === c &&
                  k <= 8 &&
                  +l.homeScoresTotal + +l.awayScoresTotal > r
                )
                  return 1;
                (n = +l.homeScoresTotal), (o = +l.awayScoresTotal);
              } else
                "volleyball" === m
                  ? ((n = this.calculateRule(l, 1).homeScores),
                    (o = this.calculateRule(l, 1).awayScores))
                  : "icehockey" === m
                  ? ((n = +l.homeScoresTotal),
                    (o = +l.awayScoresTotal),
                    "0" !== c &&
                      ((n = this.calculateScore(
                        l,
                        n,
                        o,
                        "ihScores"
                      ).homeScores),
                      (o = this.calculateScore(
                        l,
                        n,
                        o,
                        "ihScores"
                      ).awayScores)))
                  : "tabletennis" === m
                  ? ((n = this.calculateRule(l, 2).homeScores),
                    (o = this.calculateRule(l, 1).awayScores))
                  : "badminton" === m
                  ? ((n = this.calculateRule(l, 3).homeScores),
                    (o = this.calculateRule(l, 1).awayScores))
                  : "handball" === m
                  ? ((n = +l.homeScoresTotal),
                    (o = +l.awayScoresTotal),
                    (n = this.calculateScore(
                      l,
                      n,
                      o,
                      "commonScore"
                    ).homeScores),
                    (o = this.calculateScore(
                      l,
                      n,
                      o,
                      "commonScore"
                    ).awayScores))
                  : "waterpolo" === m &&
                    ((n = +l.homeScoresTotal),
                    (o = +l.awayScoresTotal),
                    "0" !== c &&
                      ((n = this.calculateScore(
                        l,
                        n,
                        o,
                        "commonScore"
                      ).homeScores),
                      (o = this.calculateScore(
                        l,
                        n,
                        o,
                        "commonScore"
                      ).awayScores)));
              if (3 === t) {
                var A = 0;
                if ("0" === c) {
                  if ("cricket" !== m) return n > o ? 1 : n < o ? 0 : 2;
                  if (l.ckScores)
                    return 1 === l.ckScores.winner
                      ? 1
                      : 2 === l.ckScores.winner
                      ? 0
                      : 2;
                } else if ("1" === c && r) {
                  if (+r >= 0) {
                    if ((A = n - o - Math.abs(r)) > 0) return 1;
                    if (A < 0) return 0;
                    if (0 === A) return 2;
                  } else if (+r < 0) {
                    if ((A = o - n - Math.abs(r)) < 0) return 1;
                    if (A > 0) return 0;
                    if (0 === A) return 2;
                  }
                } else {
                  if (
                    ("3" === c &&
                      ((n = -1 === l.homeScores[4] ? 0 : l.homeScores[4]),
                      (o = -1 === l.awayScores[4] ? 0 : l.awayScores[4])),
                    (A = n + o - +r) > 0)
                  )
                    return 1;
                  if (A < 0) return 0;
                  if (0 === A) return 2;
                }
              }
              return -1;
            },
            calculateRule: function (e, t) {
              var n = 0,
                o = 0,
                r =
                  1 === t
                    ? { 0: 432, 1: 434, 2: 436, 3: 438, 4: 440 }
                    : 2 === t
                    ? { 0: 51, 1: 52, 2: 53, 3: 54, 4: 55, 5: 472, 6: 473 }
                    : { 0: 51, 1: 52, 2: 53, 3: 54, 4: 55 };
              function l(i, e, n) {
                try {
                  if ([1, 4, 5, 6, 7, 8].indexOf(Number(n.matchStatus)) > -1)
                    return !0;
                  if (3 != n.matchStatus) {
                    var o =
                        1 === t
                          ? [0, 1, 432, 453, 434, 455, 436, 457, 438, 459, 440]
                          : 2 === t
                          ? [
                              0, 1, 51, 331, 52, 332, 53, 333, 54, 334, 55, 335,
                              472, 336, 473,
                            ]
                          : [0, 1, 51, 331, 52, 332, 53, 333, 54, 334, 55],
                      l = o.indexOf(Number(r[i]));
                    return !(l > -1) || o.slice(0, l).includes(e);
                  }
                  try {
                    return (
                      [n.homeScores, n.awayScores].flat().every(function (e) {
                        return 0 === e;
                      }) ||
                      (function (e, n) {
                        var i = (
                          1 === t
                            ? [432, 434, 436, 438, 440]
                            : 2 === t
                            ? [51, 52, 53, 54, 55, 472, 473]
                            : [51, 52, 53, 54, 55]
                        ).indexOf(Number(e));
                        return 0 == n.homeScores[i] && 0 == n.awayScores[i];
                      })(r[i], n)
                    );
                  } catch (e) {
                    return !1;
                  }
                } catch (e) {
                  return !0;
                }
              }
              return (
                ["homeScores", "awayScores"].map(function (t) {
                  e[t].map(function (r, c) {
                    l(c, e.statusId, e) ||
                      ("homeScores" === t ? (n += +r) : (o += +r));
                  });
                }),
                { homeScores: n, awayScores: o }
              );
            },
            calculateScore: function (e, t, n, o) {
              var r, l;
              return (
                e[o] &&
                  null !== (r = e[o].ap) &&
                  void 0 !== r &&
                  r.length &&
                  ((t -= e[o].ap[0]), (n -= e[o].ap[1])),
                e[o] &&
                  null !== (l = e[o].ot) &&
                  void 0 !== l &&
                  l.length &&
                  ((t -= e[o].ot[0]), (n -= e[o].ot[1])),
                { homeScores: t, awayScores: n }
              );
            },
            isSeal: function (e, t) {
              return !!(
                e.ext &&
                e.ext.odds &&
                e.ext.odds.oddItems &&
                e.ext.odds.oddItems.length &&
                e.ext.odds.oddItems[t].odd &&
                1 == +e.ext.odds.oddItems[t].odd[3]
              );
            },
            isOdd: function (e, t) {
              return !!(
                e.ext &&
                e.ext.odds &&
                e.ext.odds.oddItems &&
                e.ext.odds.oddItems.length &&
                e.ext.odds.oddItems[t].odd &&
                +e.ext.odds.oddItems[t].odd.length
              );
            },
            insideStatus: function (text, e) {
              var t = "",
                n = !1;
              if (!text) return "";
              if (
                ("HT" === text && ((t = e ? "HT" : "Half Time"), (n = !0)),
                "ET" === text && ((t = e ? "ET" : "Extra Time"), (n = !0)),
                "FT" === text && ((t = e ? "FT" : "Full Time"), (n = !0)),
                "AET" === text &&
                  ((t = e ? "AET" : "After Extra Time"), (n = !0)),
                "AP" === text && ((t = e ? "AP" : "After Penalties"), (n = !0)),
                "AOT" === text && ((t = "After Overtime"), (n = !0)),
                "EI" === text && ((t = "Extra Inning"), (n = !0)),
                "Postponed" === text && ((t = "Postponed"), (n = !0)),
                "Interrupted" === text && ((t = "Interrupted"), (n = !0)),
                "Abandoned" === text && ((t = "Abandoned"), (n = !0)),
                "Canceled" === text && ((t = "Canceled"), (n = !0)),
                "Pending" === text && ((t = "Pending"), (n = !0)),
                "S" !== text[0] ||
                  isNaN(text[1]) ||
                  e ||
                  (t = text.replace("S", "Set ")),
                "I" === text[0] && !isNaN(text[1]))
              ) {
                +text[1] <= 3 &&
                  (t = "".concat(
                    ["1st ", "2nd ", "3rd "][+text[1] - 1],
                    "Inning"
                  )),
                  (t = "".concat(+text[1], "th Inning"));
              }
              if ("F" === text[0] && !isNaN(text[1])) {
                +text[1] <= 3 &&
                  (t = "".concat(
                    ["1st ", "2nd ", "3rd "][+text[1] - 1],
                    "Frame"
                  )),
                  (t = "".concat(+text[1], "th Frame"));
              }
              return t && n
                ? this.$t("map_newTranslate.".concat(t))
                : t && !n
                ? t
                : text;
            },
            locationTranslate: function (e) {
              return "South-africa" === e
                ? this.$t("South Africa")
                : this.$t(e);
            },
            isPlaceholder: function (e) {
              return 2 === e ? "" : "-";
            },
            oddsText: function () {
              return "football" === this.proModule
                ? {
                    asia: this.$t("Handlicap"),
                    bs1: this.$t("Goals"),
                    bs2: this.$t("Over"),
                    bs3: this.$t("Under"),
                    corner1: this.$t("Corners"),
                    corner2: this.$t("map_newTranslate.Over"),
                    corner3: this.$t("Under"),
                  }
                : "basketball" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Spread"),
                    bs: this.$t("map_newTranslate.Total Points"),
                  }
                : "tennis" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap-Games"),
                    bs: this.$t("map_newTranslate.Total Games"),
                  }
                : "cricket" === this.proModule
                ? { eu: this.$t("map_newTranslate.To win"), asia: "", bs: "" }
                : "baseball" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap-Runs"),
                    bs: this.$t("map_newTranslate.Total Runs"),
                  }
                : "volleyball" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap-Sets"),
                    bs: this.$t("map_newTranslate.Total Points"),
                  }
                : "icehockey" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap"),
                    bs: this.$t("map_newTranslate.Total Goals"),
                  }
                : "amfootball" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Spread"),
                    bs: this.$t("map_newTranslate.Total Goals"),
                  }
                : "tabletennis" === this.proModule ||
                  "badminton" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap-Sets"),
                    bs: this.$t("map_newTranslate.Total Points"),
                  }
                : "handball" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap"),
                    bs: this.$t("map_newTranslate.Total Goals"),
                  }
                : "snooker" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap-Frames"),
                    bs: this.$t("map_newTranslate.Total Frames"),
                  }
                : "waterpolo" === this.proModule
                ? {
                    eu: this.$t("map_newTranslate.To win"),
                    asia: this.$t("map_newTranslate.Handicap"),
                    bs: this.$t("map_newTranslate.Total Goals"),
                  }
                : {};
            },
            worldCupScript: function (data, e) {
              var t = [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Football",
                  item: "https://www.aiscore.com".concat(this.mylocale),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: this.$t("FIFA World Cup"),
                  item: "https://www.aiscore.com".concat(
                    this.mylocale,
                    "/fifa-world-cup"
                  ),
                },
              ];
              return (
                e &&
                  t.push({
                    "@type": "ListItem",
                    position: 3,
                    name: ""
                      .concat(this.$route.params.year, " ")
                      .concat(
                        this.locationTranslate(
                          this.$route.params.location[0].toUpperCase() +
                            this.$route.params.location.substr(1)
                        ),
                        " "
                      )
                      .concat(this.$t("FIFA World Cup")),
                    item: "https://www.aiscore.com"
                      .concat(this.mylocale, "/fifa-world-cup/")
                      .concat(this.$route.params.location, "-")
                      .concat(this.$route.params.year, "-world-cup"),
                  }),
                data && data.length && t.push.apply(t, Object(la.a)(data)),
                [
                  {
                    type: "application/ld+json",
                    json: {
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      itemListElement: t,
                    },
                  },
                ]
              );
            },
            matchOff: function (e) {
              e.homeTeamDetail ||
                ((e.homeTeamDetail = e.homeTeam),
                (e.awayTeamDetail = e.awayTeam));
              var t = "",
                n = "",
                o = "",
                r = "";
              return (
                3 === e.matchStatus &&
                  e.ckScores &&
                  (1 === e.ckScores.winner
                    ? (n = e.homeTeamDetail.name)
                    : 2 === e.ckScores.winner && (n = e.awayTeamDetail.name),
                  1 === e.ckScores.winby
                    ? (r = "runs")
                    : 2 === e.ckScores.winby
                    ? (r = "wickets")
                    : 3 === e.ckScores.winby && (r = "innings"),
                  e.ckScores.margin &&
                    0 !== e.ckScores.margin &&
                    (o = e.ckScores.margin)),
                n && (t = "".concat(n, " won by ").concat(o, " ").concat(r)),
                539 === e.statusId && t && (t += " after super over"),
                t
              );
            },
            createMetaDom: function (e, t, n, o, r) {
              try {
                var l,
                  c,
                  d = {},
                  m =
                    null === (l = (d = e.match ? e.match : e).venue) ||
                    void 0 === l
                      ? void 0
                      : l.name;
                if (!m && this.compVenues)
                  for (var i = 0; i < this.compVenues.length; i++) {
                    var h;
                    if (
                      (null === (h = d.venue) || void 0 === h
                        ? void 0
                        : h.id) === this.compVenues[i].id
                    ) {
                      m = this.compVenues[i].name;
                      break;
                    }
                  }
                if (
                  !m &&
                  null !== (c = this.h2hDetailDataSeo) &&
                  void 0 !== c &&
                  c.venues
                )
                  for (
                    var f = 0;
                    f < this.h2hDetailDataSeo.venues.length;
                    f++
                  ) {
                    var y;
                    if (
                      (null === (y = d.venue) || void 0 === y
                        ? void 0
                        : y.id) === this.h2hDetailDataSeo.venues[f].id
                    ) {
                      m = this.h2hDetailDataSeo.venues[f].name;
                      break;
                    }
                  }
                !d.matchTime &&
                  d.date &&
                  (d.matchTime = new Date(d.date).getTime() / 1e3);
                var v = ea.a.formatUTC(
                  1e3 * (ea.a.calculateTimezone(t) + d.matchTime)
                );
                this.$route.fullPath.includes("head-to-head") &&
                  (v = v.replace("T00:00:00", ""));
                var _ = ea.a.formatUTC(
                    1e3 * (ea.a.calculateTimezone(t) + d.matchTime + 6300)
                  ),
                  k = d.homeTeamDetail || d.homeTeam,
                  A = d.awayTeamDetail || d.awayTeam,
                  j = r ? d.home : k.name,
                  w = r ? d.away : A.name,
                  S = r ? d.homeSlug : k.slug || "home",
                  T = r ? d.awaySlug : A.slug || "away",
                  M = "https://www.aiscore.com".concat(
                    o
                      ? o({
                          id: d.id || d.matchId,
                          name: S + "-" + T,
                          type: "match",
                          tab: this.$route.fullPath.includes("head-to-head")
                            ? "overview"
                            : 2 !== d.matchStatus && 3 !== d.matchStatus
                            ? "h2h"
                            : "overview",
                        })
                      : this.$route.fullPath
                  ),
                  x = m || n || d.competition.name || this.proModuleText,
                  data = [
                    {
                      itemprop: "name",
                      content: "".concat(j, " vs ").concat(w),
                    },
                    { itemprop: "url", content: M },
                    { itemprop: "startDate", content: v },
                    {
                      itemprop: "eventStatus",
                      content: "https://schema.org/EventScheduled",
                    },
                    {
                      itemprop: "description",
                      content: ""
                        .concat(v, ", ")
                        .concat(j, " vs ")
                        .concat(w, " ")
                        .concat(n || d.competition.name ? "in the" : "", " ")
                        .concat(n || d.competition.name || ""),
                    },
                    { itemprop: "location", content: x },
                  ];
                return (
                  "football" === this.proModule &&
                    this.$route.fullPath.includes("match-") &&
                    data.splice(3, 0, { itemprop: "endDate", content: _ }),
                  n && data.push({ itemprop: "Organization", content: n }),
                  data
                );
              } catch (e) {
                return [];
              }
            },
            cricketScore: function (e) {
              if (2 === e.matchStatus && e.ckScores.innings) {
                var data = null;
                return (
                  (532 !== e.statusId && 533 !== e.statusId) ||
                    (data = e.ckScores.innings[0]),
                  (534 !== e.statusId && 535 !== e.statusId) ||
                    (data = e.ckScores.innings[1]),
                  (545 !== e.statusId && 546 !== e.statusId) ||
                    (data = e.ckScores.innings[2]),
                  (547 !== e.statusId && 548 !== e.statusId) ||
                    (data = e.ckScores.innings[3]),
                  (540 !== e.statusId &&
                    541 !== e.statusId &&
                    542 !== e.statusId) ||
                    (data = e.ckScores.innings[e.ckScores.innings.length - 1]),
                  data
                    ? ""
                        .concat(data.runs || "")
                        .concat(data.wickets ? "/".concat(data.wickets) : "/0")
                        .concat(
                          data.overs
                            ? "(".concat(data.overs.toFixed(1), ")")
                            : ""
                        )
                    : ""
                );
              }
              if (3 === e.matchStatus && e.ckScores.innings) {
                var t = [],
                  n = [],
                  o = "",
                  r = "";
                return (
                  e.ckScores.innings.map(function (e) {
                    1 === e.belong && t.push(e), 2 === e.belong && n.push(e);
                  }),
                  t.length > 1
                    ? (t.map(function (e, t) {
                        o += ""
                          .concat(e.runs)
                          .concat(e.wickets ? "/".concat(e.wickets) : "")
                          .concat(t ? "" : " & ");
                      }),
                      n.map(function (e, t) {
                        r += ""
                          .concat(e.runs)
                          .concat(e.wickets ? "/".concat(e.wickets) : "")
                          .concat(t ? "" : " & ");
                      }))
                    : (t.map(function (e) {
                        o = ""
                          .concat(e.runs)
                          .concat(e.wickets ? "/".concat(e.wickets) : "")
                          .concat(
                            e.overs ? "(".concat(e.overs.toFixed(1), ")") : ""
                          );
                      }),
                      n.map(function (e) {
                        r = ""
                          .concat(e.runs)
                          .concat(e.wickets ? "/".concat(e.wickets) : "")
                          .concat(
                            e.overs ? "(".concat(e.overs.toFixed(1), ")") : ""
                          );
                      })),
                  "".concat(o, " - ").concat(r)
                );
              }
            },
            compRoute: function (e) {
              return (
                100 !== e.sportId &&
                "/"
                  .concat(
                    "en" === this.$store.state.locale
                      ? ""
                      : this.$store.state.locale + "/"
                  )
                  .concat(
                    "football" === this.ballRouteUrl
                      ? ""
                      : this.ballRouteUrl + "/",
                    "tournament-"
                  )
                  .concat(e.slug, "/")
                  .concat(e.id)
              );
            },
            oddToFixed2: function (e) {
              return e
                ? "Am" === this.$store.state.ODDS_TYPE
                  ? e
                  : Number(e).toFixed(2)
                : "-";
            },
            fieldContrast: function (e, t) {
              return [e, t].sort();
            },
            arrayToObj: function (data, e) {
              var t = {};
              return data
                ? (data.map(function (n) {
                    t[n[e || "id"]] = n;
                  }),
                  t)
                : t;
            },
          },
        };
      l.default.mixin(ua);
      var ma,
        ha = n(323),
        fa = {
          install: function (e) {
            var t = e.component(ha.a.name, ha.a);
            ma || (ma = new t()),
              e.mixin({
                mounted: function () {
                  (this.$login = ma),
                    window && (window.$winLogin = this.$login);
                },
              });
          },
        };
      l.default.use(fa, { someOption: !0 });
      var ya = (function () {
          var e = Object(o.a)(
            regeneratorRuntime.mark(function e(t) {
              var o, r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t.app,
                        !(o = t.route).fullPath.includes("/match-") &&
                          "youtube-matches" != o.name)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 4),
                        Promise.all([n.e(63), n.e(64)]).then(
                          n.t.bind(null, 2872, 7)
                        )
                      );
                    case 4:
                      (r = e.sent),
                        Promise.all([n.e(63), n.e(64)]).then(
                          n.t.bind(null, 2873, 7)
                        ),
                        l.default.use(r.default);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ga = function (e) {
          var t = e.app;
          e.store;
          location.origin.includes("localhost") ||
            (n(1419),
            AiScore.track.google.init("AW-646679380"),
            AiScore.track.google.init("UA-148029084-1"),
            AiScore.track.google.initEvent("AW-646679380"),
            AiScore.track.google.initEvent("UA-148029084-1"),
            setTimeout(function () {
              AiScore.track.google.gtag("event", "page_1min", {
                value: location.href,
              });
            }, 6e4),
            (t.$cookies.get("privary") &&
              !1 === t.$cookies.get("privary").analytics) ||
              AiScore.track.init({ baidu: !0 }));
        };
      function ba(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function va(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ba(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : ba(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      l.default.component(h.a.name, h.a),
        l.default.component(
          y.a.name,
          va(
            va({}, y.a),
            {},
            {
              render: function (e, t) {
                return (
                  y.a._warned ||
                    ((y.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  y.a.render(e, t)
                );
              },
            }
          )
        ),
        l.default.component(I.name, I),
        l.default.component("NChild", I),
        l.default.component(z.name, z),
        Object.defineProperty(l.default.prototype, "$nuxt", {
          get: function () {
            return this.$root.$options.$nuxt;
          },
          configurable: !0,
        }),
        l.default.use(d.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var _a = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        ka = c.a.Store.prototype.registerModule,
        Aa = { preserveState: !0 };
      function ja(path, e) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ka.call(this, path, e, va(va({}, Aa), t));
      }
      function wa(e) {
        return Sa.apply(this, arguments);
      }
      function Sa() {
        return (Sa = Object(o.a)(
          regeneratorRuntime.mark(function e(t) {
            var n,
              o,
              r,
              c,
              d,
              m,
              path,
              h,
              f = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (h = function (e, t) {
                        if (!e)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === t)
                          throw new Error(
                            "inject('".concat(
                              e,
                              "', value) has no value provided"
                            )
                          );
                        (c[(e = "$" + e)] = t),
                          c.context[e] || (c.context[e] = t),
                          (r[e] = c[e]);
                        var n = "__nuxt_" + e + "_installed__";
                        l.default[n] ||
                          ((l.default[n] = !0),
                          l.default.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              l.default.prototype,
                              e
                            ) ||
                              Object.defineProperty(l.default.prototype, e, {
                                get: function () {
                                  return this.$root.$options[e];
                                },
                              });
                          }));
                      }),
                      (n = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                      (e.next = 4),
                      O()
                    );
                  case 4:
                    return (
                      (o = e.sent),
                      ((r = J(t)).$router = o),
                      (r.registerModule = ja),
                      (c = va(
                        {
                          head: {
                            htmlAttrs: { lang: "en", class: "", style: "" },
                            bodyAttrs: { class: "", style: "" },
                            title: "nuxt",
                            meta: [
                              { charset: "utf-8" },
                              {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1",
                              },
                              {
                                hid: "description",
                                name: "description",
                                content: "> My beautiful Nuxt.js project",
                              },
                            ],
                            link: [
                              {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.ico",
                              },
                            ],
                            script: [{}],
                            style: [],
                          },
                          store: r,
                          router: o,
                          nuxt: {
                            defaultTransition: _a,
                            transitions: [_a],
                            setTransitions: function (e) {
                              return (
                                Array.isArray(e) || (e = [e]),
                                (e = e.map(function (e) {
                                  return (e = e
                                    ? "string" == typeof e
                                      ? Object.assign({}, _a, { name: e })
                                      : Object.assign({}, _a, e)
                                    : _a);
                                })),
                                (this.$options.nuxt.transitions = e),
                                e
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (e) {
                              (e = e || null),
                                (c.context._errored = Boolean(e)),
                                (e = e ? Object(k.p)(e) : null);
                              var n = c.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = e),
                                t && (t.nuxt.error = e),
                                e
                              );
                            },
                          },
                        },
                        W
                      )),
                      (r.app = c),
                      (d = t
                        ? t.next
                        : function (e) {
                            return c.router.push(e);
                          }),
                      t
                        ? (m = o.resolve(t.url).route)
                        : ((path = Object(k.f)(o.options.base, o.options.mode)),
                          (m = o.resolve(path).route)),
                      (e.next = 14),
                      Object(k.t)(c, {
                        store: r,
                        route: m,
                        next: d,
                        error: c.nuxt.error.bind(c),
                        payload: t ? t.payload : void 0,
                        req: t ? t.req : void 0,
                        res: t ? t.res : void 0,
                        beforeRenderFns: t ? t.beforeRenderFns : void 0,
                        ssrContext: t,
                      })
                    );
                  case 14:
                    return (
                      h("config", n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        r.replaceState(window.__NUXT__.state),
                      (e.next = 20),
                      ne(c.context, h)
                    );
                  case 20:
                    return (e.next = 23), ie(c.context, h);
                  case 23:
                    e.next = 26;
                    break;
                  case 26:
                    if ("function" != typeof Ut) {
                      e.next = 29;
                      break;
                    }
                    return (e.next = 29), Ut(c.context, h);
                  case 29:
                    return (e.next = 32), Gt(c.context, h);
                  case 32:
                    if ("function" != typeof Yt) {
                      e.next = 35;
                      break;
                    }
                    return (e.next = 35), Yt(c.context, h);
                  case 35:
                    return (e.next = 38), sa(c.context);
                  case 38:
                    e.next = 41;
                    break;
                  case 41:
                    e.next = 44;
                    break;
                  case 44:
                    if ("function" != typeof ya) {
                      e.next = 47;
                      break;
                    }
                    return (e.next = 47), ya(c.context, h);
                  case 47:
                    return (e.next = 50), ga(c.context);
                  case 50:
                    0, (e.next = 54);
                    break;
                  case 54:
                    return e.abrupt("return", { store: r, app: c, router: o });
                  case 55:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/nodata-1.e90f99c.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"nested":{"onescore":{"nested":{"app":{"nested":{"v1":{"options":{"java_package":"com.onesports.score.network.protobuf"},"nested":{"Params":{"fields":{"name":{"type":"string","id":1},"type":{"type":"int32","id":2}}},"AdvItem":{"fields":{"id":{"type":"int32","id":1},"jumpType":{"type":"int32","id":20},"link":{"type":"string","id":2},"linkParams":{"rule":"repeated","type":"Params","id":17},"logo":{"type":"string","id":3},"company":{"type":"OddCompany","id":4},"statsLink":{"type":"string","id":5},"statsLinkParams":{"rule":"repeated","type":"Params","id":18},"count":{"type":"int32","id":6},"bgColor":{"type":"string","id":7},"ratio":{"type":"float","id":8},"code":{"type":"string","id":9},"height":{"type":"int32","id":14},"aspectRatio":{"type":"float","id":19},"name":{"type":"string","id":10},"multiples":{"type":"int32","id":11},"close":{"type":"int32","id":13},"watermark":{"type":"int32","id":15},"sports":{"rule":"repeated","type":"int32","id":16},"extra":{"type":"Extra","id":12}},"nested":{"Extra":{"fields":{"oddType":{"type":"string","id":1},"oddBgColors":{"rule":"repeated","type":"string","id":2},"location":{"type":"int32","id":3},"totalCount":{"type":"int32","id":4},"intervalTime":{"type":"int32","id":5}}}}},"AdvItems":{"fields":{"items":{"rule":"repeated","type":"AdvItem","id":1}}},"AdvCopy":{"fields":{"content":{"type":"string","id":1},"code":{"type":"string","id":2},"link":{"type":"string","id":3},"logo":{"type":"string","id":4},"menu":{"type":"int32","id":5},"countryId":{"type":"int32","id":6},"countryCode":{"type":"string","id":15},"company":{"type":"OddCompany","id":7},"hotData":{"rule":"repeated","type":"HotData","id":8},"startPics":{"rule":"repeated","type":"AdvItem","id":9},"popups":{"rule":"repeated","type":"AdvItem","id":10},"chatLive":{"type":"AdvItem","id":11},"oddLink":{"type":"int32","id":12},"companies":{"rule":"repeated","type":"OddCompany","id":13},"advs":{"keyType":"int32","type":"AdvItem","id":14},"ads":{"keyType":"int32","type":"AdvItems","id":16}}},"HotData":{"fields":{"dt":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"link":{"type":"string","id":3},"logo":{"type":"string","id":4},"menu":{"type":"int32","id":5},"color":{"type":"string","id":6},"tabMenu":{"type":"int32","id":7}}},"PcAdvCopy":{"fields":{"countryId":{"type":"int32","id":1},"countryCode":{"type":"string","id":2},"companies":{"rule":"repeated","type":"OddCompany","id":3},"advs":{"keyType":"int32","type":"AdvItem","id":4}}},"Request":{"fields":{"token":{"type":"string","id":1},"data":{"type":"bytes","id":15}}},"Response":{"fields":{"code":{"type":"int32","id":1},"data":{"type":"bytes","id":15}}},"State":{"fields":{"state":{"type":"string","id":1}}},"ResponseDataBool":{"fields":{"value":{"type":"bool","id":1}}},"ResponseDataInt32":{"fields":{"value":{"type":"int32","id":1}}},"ResponseDataString":{"fields":{"value":{"type":"string","id":1}}},"ResponseDataFloat":{"fields":{"value":{"type":"float","id":1}}},"BestLineup":{"fields":{"id":{"type":"int32","id":1},"competition":{"type":"Competition","id":2},"season":{"type":"Season","id":3},"formation":{"type":"string","id":4},"name":{"type":"string","id":5},"updateTime":{"type":"int32","id":6},"bestLineupDetails":{"rule":"repeated","type":"BestLineupDetail","id":7},"extra":{"type":"bytes","id":15}},"nested":{"BestLineupDetail":{"fields":{"id":{"type":"int32","id":1},"key":{"type":"string","id":2},"sportId":{"type":"int32","id":3},"team":{"type":"Team","id":5},"player":{"type":"Player","id":6},"lineupId":{"type":"int32","id":7},"rating":{"type":"string","id":8},"locationX":{"type":"int32","id":9},"locationY":{"type":"int32","id":10},"extra":{"type":"bytes","id":16}}}}},"BestLineups":{"fields":{"bestLineups":{"rule":"repeated","type":"BestLineup","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"players":{"rule":"repeated","type":"Player","id":3}}},"Category":{"fields":{"id":{"type":"uint32","id":1},"sportId":{"type":"uint32","id":2},"name":{"type":"string","id":3},"weight":{"type":"uint32","id":4},"logo":{"type":"string","id":5}}},"RelatedMessage":{"fields":{"uid":{"type":"int32","id":1},"name":{"type":"string","id":2},"avatar":{"type":"string","id":3},"content":{"type":"string","id":4}}},"Message":{"fields":{"uid":{"type":"int32","id":1},"name":{"type":"string","id":2},"type":{"type":"int32","id":3},"vip":{"type":"int32","id":16},"avatar":{"type":"string","id":4},"content":{"type":"string","id":5},"time":{"type":"int64","id":7},"blocked":{"type":"bool","id":8},"level":{"type":"int32","id":9},"sourceLang":{"type":"int32","id":10},"sourceLanguage":{"type":"string","id":12},"translatedContent":{"type":"string","id":11},"relatedMessage":{"type":"RelatedMessage","id":13},"admin":{"type":"int32","id":14},"platform":{"type":"int32","id":15},"link":{"type":"string","id":17},"device":{"type":"string","id":18},"likeNum":{"type":"int32","id":19},"clientLanguage":{"type":"int32","id":20}}},"History":{"fields":{"messages":{"rule":"repeated","type":"Message","id":1}}},"Notice":{"fields":{"show":{"type":"bool","id":1},"notice":{"type":"string","id":2}}},"ChatTranslateLanguages":{"fields":{"languages":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"languageId":{"type":"int32","id":1},"language":{"type":"string","id":2},"text":{"type":"string","id":3},"shortText":{"type":"string","id":5}}}}},"Like":{"fields":{"likeId":{"type":"int32","id":1}}},"CompTeamHonor":{"fields":{"seasonHonors":{"rule":"repeated","type":"SeasonHonor","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"honors":{"rule":"repeated","type":"Honor","id":3}},"nested":{"Honor":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"level":{"type":"int32","id":4}}},"SeasonHonor":{"fields":{"season":{"type":"Season","id":1},"items":{"rule":"repeated","type":"Item","id":2}},"nested":{"Item":{"fields":{"team":{"type":"Team","id":1},"honor":{"type":"Honor","id":2}}}}}}},"Competition":{"fields":{"id":{"type":"string","id":1},"cid":{"type":"int32","id":28},"sportId":{"type":"uint32","id":2},"category":{"type":"Category","id":3},"country":{"type":"Country","id":4},"name":{"type":"string","id":5},"curSeasonId":{"type":"string","id":6},"curSeason":{"type":"string","id":7},"logo":{"type":"string","id":8},"level":{"type":"int32","id":9},"weight":{"type":"int32","id":10},"roundCount":{"type":"int32","id":11},"curRound":{"type":"int32","id":12},"curStageId":{"type":"int32","id":13},"color":{"type":"string","id":14},"host":{"type":"string","id":15},"hostCountry":{"type":"string","id":24},"hostCity":{"type":"string","id":25},"primaryColor":{"type":"string","id":16},"seasonStart":{"type":"string","id":17},"seasonEnd":{"type":"string","id":18},"type":{"type":"int32","id":19},"hasStats":{"type":"int32","id":21},"isHot":{"type":"int32","id":22},"isTennisTeamEvent":{"type":"bool","id":26},"extra":{"type":"bytes","id":20},"slug":{"type":"string","id":23},"chapters":{"type":"int32","id":27},"menu":{"type":"int32","id":29},"users":{"type":"int32","id":30},"identification":{"type":"int32","id":31}}},"Competitions":{"fields":{"comps":{"rule":"repeated","type":"Competition","id":1}}},"CompMap":{"fields":{"comps":{"keyType":"int32","type":"Competition","id":1}}},"Country":{"fields":{"id":{"type":"uint32","id":1},"sportId":{"type":"uint32","id":10},"name":{"type":"string","id":2},"name2":{"type":"string","id":3},"iso":{"type":"string","id":4},"logo":{"type":"string","id":5},"squareLogo":{"type":"string","id":14},"weight":{"type":"uint32","id":6},"isCategory":{"type":"uint32","id":7},"category":{"type":"Category","id":9},"isCategoryDelegate":{"type":"bool","id":11},"emoji":{"type":"string","id":12},"ioc":{"type":"string","id":13}}},"Countries":{"fields":{"countries":{"rule":"repeated","type":"Country","id":1}}},"CountryMap":{"fields":{"countries":{"keyType":"int32","type":"Country","id":1}}},"Emoji":{"fields":{"emoji":{"type":"string","id":1},"link":{"type":"string","id":2},"type":{"type":"int32","id":3},"coins":{"type":"int32","id":4},"vipCoins":{"type":"int32","id":5},"cd":{"type":"int32","id":6},"name":{"type":"string","id":7},"sportId":{"type":"int32","id":8},"orderA":{"type":"int32","id":9},"orderI":{"type":"int32","id":10}}},"EmojiItems":{"fields":{"emojis":{"rule":"repeated","type":"Emoji","id":1},"paidEmojis":{"rule":"repeated","type":"Emoji","id":2}}},"FiFaRankingInfo":{"fields":{"id":{"type":"uint32","id":1},"pubTime":{"type":"int32","id":2},"region":{"type":"Region","id":3},"team":{"type":"Team","id":4},"flag":{"type":"string","id":5},"ranking":{"type":"int32","id":6},"points":{"type":"int32","id":7},"previousPoints":{"type":"int32","id":8},"positionChanged":{"type":"int32","id":9},"order":{"type":"int32","id":10}}},"RankingInfo":{"fields":{"id":{"type":"uint32","id":1},"team":{"type":"Team","id":2},"ranking":{"type":"int32","id":3},"points":{"type":"int32","id":4},"previousPoints":{"type":"int32","id":5},"positionChanged":{"type":"sint32","id":6},"prize":{"type":"string","id":7}}},"PubTime":{"fields":{"pubTime":{"type":"int32","id":1},"rankingType":{"type":"int32","id":2}}},"GoalDistribution":{"fields":{"all":{"type":"Item","id":1},"home":{"type":"Item","id":2},"away":{"type":"Item","id":3},"season":{"type":"Season","id":4},"team":{"type":"Team","id":5}},"nested":{"Item":{"fields":{"matches":{"type":"int32","id":1},"scored":{"rule":"repeated","type":"StatItem","id":2},"conceded":{"rule":"repeated","type":"StatItem","id":3}},"nested":{"StatItem":{"fields":{"total":{"type":"int32","id":1},"percentage":{"type":"int32","id":2},"startTime":{"type":"int32","id":3},"endTime":{"type":"int32","id":4}}}}}}},"HonorItem":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3}}},"PlayerHonorItems":{"fields":{"player":{"type":"Player","id":1},"honors":{"rule":"repeated","type":"HonorItem","id":2}}},"MatchIncident":{"fields":{"id":{"type":"int32","id":1},"type":{"type":"int32","id":2},"second":{"type":"int32","id":3},"content":{"type":"string","id":4},"time":{"type":"string","id":5},"addTime":{"type":"int32","id":6},"belong":{"type":"int32","id":7},"team":{"type":"Team","id":8},"player":{"type":"Player","id":9},"homeScore":{"type":"int32","id":10},"awayScore":{"type":"int32","id":11},"assist1":{"type":"Player","id":12},"assist2":{"type":"Player","id":13},"reason":{"type":"string","id":14},"reasonType":{"type":"int32","id":23},"inPlayer":{"type":"Player","id":15},"outPlayer":{"type":"Player","id":16},"isInjury":{"type":"int32","id":17},"isPenalties":{"type":"int32","id":18},"varReason":{"type":"int32","id":19},"varResult":{"type":"int32","id":20},"extraId":{"type":"int32","id":21},"penaltyMinutes":{"type":"int32","id":22}}},"MatchIncidents":{"fields":{"items":{"rule":"repeated","type":"MatchIncident","id":1}}},"MatchIncidentsMap":{"fields":{"incidentItems":{"keyType":"string","type":"MatchIncidents","id":1}}},"Lineup":{"fields":{"id":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"match":{"type":"Match","id":14},"homeManager":{"type":"Manager","id":3},"awayManager":{"type":"Manager","id":4},"confirmed":{"type":"int32","id":5},"homeFormation":{"type":"string","id":6},"awayFormation":{"type":"string","id":7},"homeTeamRating":{"type":"string","id":8},"awayTeamRating":{"type":"string","id":9},"home":{"rule":"repeated","type":"LineupDetail","id":10},"away":{"rule":"repeated","type":"LineupDetail","id":11},"hasCoordinates":{"type":"int32","id":12},"hasStats":{"type":"int32","id":13},"homePlayerTotals":{"type":"PlayerTotal","id":15},"awayPlayerTotals":{"type":"PlayerTotal","id":16},"warningMenu":{"type":"int32","id":17}},"nested":{"LineupDetail":{"fields":{"team":{"type":"Team","id":1},"player":{"type":"Player","id":2},"status":{"type":"int32","id":3},"reason":{"type":"string","id":4},"rating":{"type":"string","id":5},"captain":{"type":"int32","id":6},"shirtNumber":{"type":"int32","id":7},"shirtNumber2":{"type":"string","id":16},"position":{"type":"string","id":8},"x":{"type":"int32","id":9},"y":{"type":"int32","id":10},"positionNum":{"type":"int32","id":11},"isBest":{"type":"int32","id":12},"incidents":{"rule":"repeated","type":"MatchIncident","id":13},"playerTotals":{"type":"PlayerTotal","id":14},"isOut":{"type":"int32","id":15},"hasPlayerTotal":{"type":"int32","id":17},"played":{"type":"int32","id":18},"minutes":{"type":"int32","id":19}}}}},"Manager":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"birthday":{"type":"int32","id":4},"country":{"type":"Country","id":5},"teamId":{"type":"string","id":6},"sportId":{"type":"int32","id":7},"preferredFormation":{"type":"string","id":8},"hasStats":{"type":"int32","id":9},"extra":{"type":"bytes","id":15}}},"Ban":{"fields":{"ipCodes":{"rule":"repeated","type":"IpCode","id":1},"countryCode":{"type":"CountryCode","id":2},"mediaCode":{"type":"CountryCode","id":3},"ticketCode":{"type":"CountryCode","id":4},"adStreamCode":{"rule":"repeated","type":"int32","id":5}},"nested":{"IpCode":{"fields":{"sIp":{"type":"uint32","id":1},"eIp":{"type":"uint32","id":2}}},"CountryCode":{"fields":{"banedCode":{"rule":"repeated","type":"int32","id":1},"permitCode":{"rule":"repeated","type":"int32","id":2}}}}},"Match":{"oneofs":{"Scores":{"oneof":["commonScore","ckScores","bsScores","esScores","vbScores","afScores","ihScores","ttScores","bmScores"]}},"fields":{"id":{"type":"string","id":1},"mid":{"type":"int32","id":34},"sportId":{"type":"uint32","id":2},"key":{"type":"string","id":3},"kind":{"type":"int32","id":29},"competition":{"type":"Competition","id":4},"season":{"type":"Season","id":5},"homeTeam":{"type":"Team","id":6},"awayTeam":{"type":"Team","id":7},"homeTeams":{"rule":"repeated","type":"Team","id":27},"awayTeams":{"rule":"repeated","type":"Team","id":28},"times":{"type":"Times","id":8},"tennisTimes":{"type":"TennisTimes","id":32},"points":{"rule":"repeated","type":"string","id":9},"serve":{"type":"int32","id":23},"homeScore":{"type":"int32","id":10},"awayScore":{"type":"int32","id":11},"homeScores":{"rule":"repeated","type":"sint32","id":12},"awayScores":{"rule":"repeated","type":"sint32","id":13},"stage":{"type":"Stage","id":14},"matchTime":{"type":"int32","id":15},"matchStatus":{"type":"int32","id":24},"spMatchStatus":{"type":"int32","id":37},"statusId":{"type":"int32","id":16},"groupNum":{"type":"int32","id":17},"roundNum":{"type":"int32","id":18},"neutral":{"type":"int32","id":19},"note":{"type":"string","id":20},"menu":{"type":"int32","id":21},"tabs":{"type":"int32","id":38},"users":{"type":"int32","id":22},"venue":{"type":"Venue","id":25},"referee":{"type":"Referee","id":26},"intro":{"type":"string","id":33},"shareLink":{"type":"string","id":36},"commonScore":{"type":"CommonScore","id":101},"ckScores":{"type":"CricketScores","id":105},"bsScores":{"type":"BaseballScores","id":106},"esScores":{"type":"EsportsScores","id":107},"vbScores":{"type":"VolleyBallScores","id":108},"afScores":{"type":"AmericanFootballScores","id":109},"ihScores":{"type":"IceHockeyScores","id":110},"ttScores":{"type":"TableTennisScores","id":111},"bmScores":{"type":"BadmintonScores","id":112},"ext":{"type":"Ext","id":30},"extra":{"type":"bytes","id":31},"isCopyright":{"type":"int32","id":35},"deleted":{"type":"int32","id":40}},"nested":{"Ext":{"fields":{"environment":{"type":"Environment","id":1},"homePosition":{"type":"string","id":2},"awayPosition":{"type":"string","id":3},"extMenu":{"type":"int32","id":4},"hasPlayerTotal":{"type":"int32","id":9},"hasMedia":{"type":"int32","id":12},"hasH2hTips":{"type":"int32","id":13},"isTennisDouble":{"type":"bool","id":10},"ground":{"type":"int32","id":11},"odds":{"type":"MatchOddItems","id":7},"baned":{"type":"Ban","id":8}},"nested":{"Environment":{"fields":{"weather":{"type":"int32","id":1},"pressure":{"type":"string","id":2},"temperature":{"type":"string","id":3},"wind":{"type":"string","id":4},"humidity":{"type":"string","id":5}}}}}}},"MatchesMap":{"fields":{"matches":{"keyType":"int32","type":"Match","id":1}}},"MatchItems":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1}}},"CricketScores":{"fields":{"ft":{"rule":"repeated","type":"int32","id":1},"p1":{"rule":"repeated","type":"int32","id":2},"p2":{"rule":"repeated","type":"int32","id":3},"winby":{"type":"int32","id":4},"margin":{"type":"int32","id":5},"winner":{"type":"int32","id":6},"innings":{"rule":"repeated","type":"Inning","id":7}},"nested":{"Inning":{"fields":{"runs":{"type":"int32","id":1},"belong":{"type":"int32","id":2},"overs":{"type":"float","id":3},"wickets":{"type":"int32","id":4}}}}},"BaseballScores":{"fields":{"server":{"type":"int32","id":15},"ft":{"rule":"repeated","type":"string","id":1},"h":{"rule":"repeated","type":"string","id":13},"e":{"rule":"repeated","type":"string","id":14},"p1":{"rule":"repeated","type":"string","id":2},"p2":{"rule":"repeated","type":"string","id":3},"p3":{"rule":"repeated","type":"string","id":4},"p4":{"rule":"repeated","type":"string","id":5},"p5":{"rule":"repeated","type":"string","id":6},"p6":{"rule":"repeated","type":"string","id":7},"p7":{"rule":"repeated","type":"string","id":8},"p8":{"rule":"repeated","type":"string","id":9},"p9":{"rule":"repeated","type":"string","id":10},"ot":{"rule":"repeated","type":"string","id":11}}},"EsportsScores":{"fields":{"bo":{"type":"int32","id":1},"homeKill":{"type":"int32","id":2},"awayKill":{"type":"int32","id":3},"map":{"type":"Map","id":4},"totalBo":{"type":"int32","id":5}}},"VolleyBallScores":{"fields":{"server":{"type":"int32","id":15},"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"p4":{"rule":"repeated","type":"int32","id":4},"p5":{"rule":"repeated","type":"int32","id":5},"pt":{"rule":"repeated","type":"int32","id":6}}},"IceHockeyScores":{"fields":{"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"ft":{"rule":"repeated","type":"int32","id":4},"ot":{"rule":"repeated","type":"int32","id":5},"ap":{"rule":"repeated","type":"int32","id":6}}},"AmericanFootballScores":{"fields":{"server":{"type":"int32","id":15},"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"p4":{"rule":"repeated","type":"int32","id":4},"ft":{"rule":"repeated","type":"int32","id":5},"ot":{"rule":"repeated","type":"int32","id":6}}},"TableTennisScores":{"fields":{"server":{"type":"int32","id":15},"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"p4":{"rule":"repeated","type":"int32","id":4},"p5":{"rule":"repeated","type":"int32","id":5},"p6":{"rule":"repeated","type":"int32","id":6},"p7":{"rule":"repeated","type":"int32","id":7},"ft":{"rule":"repeated","type":"int32","id":8}}},"BadmintonScores":{"fields":{"server":{"type":"int32","id":15},"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"p4":{"rule":"repeated","type":"int32","id":4},"p5":{"rule":"repeated","type":"int32","id":5},"ft":{"rule":"repeated","type":"int32","id":8}}},"CommonScore":{"fields":{"server":{"type":"int32","id":15},"p1":{"rule":"repeated","type":"int32","id":1},"p2":{"rule":"repeated","type":"int32","id":2},"p3":{"rule":"repeated","type":"int32","id":3},"p4":{"rule":"repeated","type":"int32","id":4},"ft":{"rule":"repeated","type":"int32","id":8},"ot":{"rule":"repeated","type":"int32","id":9},"ap":{"rule":"repeated","type":"int32","id":10}}},"Over":{"fields":{"over":{"type":"int32","id":1},"runs":{"type":"int32","id":2},"wickets":{"type":"int32","id":3},"inning":{"type":"int32","id":4},"ballByBalls":{"rule":"repeated","type":"BallByBall","id":5}}},"BallByBall":{"fields":{"ball":{"type":"int32","id":1},"batting":{"type":"Batting","id":2},"bowling":{"type":"Bowling","id":3}},"nested":{"Batting":{"fields":{"striker":{"type":"Striker","id":1},"nonStriker":{"type":"Striker","id":2},"runScored":{"type":"int32","id":3},"team":{"type":"Team","id":4}},"nested":{"Striker":{"fields":{"player":{"type":"Player","id":1},"pos":{"type":"int32","id":2},"runs":{"type":"int32","id":3},"balls":{"type":"int32","id":4},"fours":{"type":"int32","id":5},"sixes":{"type":"int32","id":6}}}}},"Bowling":{"fields":{"bowler":{"type":"Bowler","id":1},"team":{"type":"Team","id":2},"extraConceded":{"type":"int32","id":3},"extraConcededType":{"type":"string","id":4}},"nested":{"Bowler":{"fields":{"player":{"type":"Player","id":1},"runs":{"type":"int32","id":2},"wickets":{"type":"int32","id":3}}}}}}},"MatchBallByBall":{"fields":{"matchId":{"type":"int32","id":1},"overs":{"rule":"repeated","type":"Over","id":2},"players":{"rule":"repeated","type":"Player","id":3}}},"MatchPlayerStatItem":{"fields":{"sportId":{"type":"int32","id":1},"team":{"type":"Team","id":2},"player":{"type":"Player","id":3},"items":{"rule":"repeated","type":"Item","id":5}},"nested":{"Item":{"fields":{"type":{"type":"int32","id":1},"value":{"type":"string","id":2},"extra":{"type":"string","id":3},"isMost":{"type":"int32","id":4}}}}},"HeatMapItem":{"fields":{"items":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2}}}}},"MatchPlayerStat":{"fields":{"playerStats":{"type":"MatchPlayerStatItem","id":1},"heatmap":{"type":"HeatMapItem","id":2}}},"MatchTeamStat":{"fields":{"period":{"type":"int32","id":1},"stats":{"keyType":"string","type":"Item","id":2}},"nested":{"Item":{"fields":{"values":{"rule":"repeated","type":"string","id":2},"values2":{"rule":"repeated","type":"Item","id":3}}}}},"MatchTeamStats":{"fields":{"matchStats":{"keyType":"uint32","type":"MatchTeamStat","id":1}}},"MLive":{"fields":{"url":{"type":"string","id":1},"ratio":{"type":"float","id":2},"bottomSpace":{"type":"int32","id":3},"leftRightSpace":{"type":"int32","id":4},"name":{"type":"string","id":5}}},"MLiveItem":{"fields":{"mdata":{"type":"MData","id":1},"mtime":{"type":"Mtime","id":2}},"nested":{"MData":{"fields":{"statusId":{"type":"int32","id":1},"vc":{"type":"int32","id":2},"et":{"type":"string","id":3},"pg":{"type":"string","id":4},"scores":{"type":"string","id":5},"xy":{"type":"string","id":6}}},"Mtime":{"fields":{"tt":{"type":"int32","id":1},"tu":{"type":"int32","id":2},"td":{"type":"int32","id":3},"tms":{"type":"int32","id":4},"ta":{"type":"int32","id":5}}}}},"MLiveItems":{"fields":{"animations":{"rule":"repeated","type":"MLive","id":1}}},"Notification":{"fields":{"id":{"type":"int64","id":1},"type":{"type":"int32","id":2},"title":{"type":"string","id":3},"body":{"type":"string","id":4},"time":{"type":"int32","id":5},"status":{"type":"int32","id":6},"sportId":{"type":"int32","id":7},"tab":{"type":"int32","id":8},"data":{"type":"string","id":9},"dataType":{"type":"int32","id":10},"extra":{"type":"string","id":11}}},"Notifications":{"fields":{"notifications":{"rule":"repeated","type":"Notification","id":1},"pagination":{"type":"Pagination","id":2}}},"Odds":{"fields":{"items":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"time":{"type":"int32","id":1},"statusId":{"type":"int32","id":2},"homeScore":{"type":"int32","id":3},"awayScore":{"type":"int32","id":4},"home":{"type":"float","id":5},"goal":{"type":"float","id":6},"away":{"type":"float","id":7},"utime":{"type":"int32","id":8},"close":{"type":"int32","id":9}}}}},"OddsItem":{"fields":{"odd":{"rule":"repeated","type":"string","id":1}}},"MatchOddItems":{"fields":{"oddItems":{"rule":"repeated","type":"OddsItem","id":1}}},"Pagination":{"fields":{"page":{"type":"int32","id":1},"marker":{"type":"string","id":2},"pageSize":{"type":"int32","id":3},"total":{"type":"int32","id":4},"next":{"type":"int32","id":5}}},"Agent":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2}}},"Sponsor":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2}}},"SocialMedia":{"fields":{"id":{"type":"uint32","id":1},"website":{"type":"string","id":2}}},"PlayerMarketHistory":{"fields":{"highestMarketValue":{"type":"string","id":1},"highestMarketTime":{"type":"int32","id":5},"updateTime":{"type":"int32","id":2},"marketHistory":{"rule":"repeated","type":"MarketItem","id":3},"teams":{"rule":"repeated","type":"Team","id":4}},"nested":{"MarketItem":{"fields":{"team":{"type":"Team","id":1},"marketValue":{"type":"string","id":2},"age":{"type":"int32","id":3},"time":{"type":"int32","id":4},"mValue":{"type":"int32","id":5}}}}},"Player":{"fields":{"id":{"type":"string","id":1},"pid":{"type":"int32","id":36},"team":{"type":"Team","id":2},"country":{"type":"Country","id":3},"sportId":{"type":"uint32","id":5},"name":{"type":"string","id":4},"shortName":{"type":"string","id":12},"logo":{"type":"string","id":6},"rating":{"type":"string","id":7},"shirtNumber":{"type":"int32","id":8},"shirtNumber2":{"type":"string","id":37},"position":{"type":"string","id":9},"detailedPositions":{"type":"string","id":10},"marketValue":{"type":"string","id":11},"intMarketValue":{"type":"int32","id":38},"marketValueCurrency":{"type":"string","id":40},"age":{"type":"int32","id":13},"birthday":{"type":"int32","id":14},"weight":{"type":"int32","id":15},"height":{"type":"int32","id":16},"birthplace":{"type":"string","id":24},"residence":{"type":"string","id":25},"contractUntil":{"type":"int32","id":17},"hasStats":{"type":"int32","id":18},"color":{"type":"string","id":19},"slug":{"type":"string","id":23},"intro":{"type":"string","id":26},"careerAge":{"type":"int32","id":27},"agent":{"type":"Agent","id":28},"sponsor":{"type":"Sponsor","id":29},"medias":{"rule":"repeated","type":"SocialMedia","id":32},"lastContractStart":{"type":"int32","id":33},"joinTime":{"type":"int32","id":34},"marketHistory":{"type":"PlayerMarketHistory","id":35},"users":{"type":"int32","id":39},"salary":{"type":"Salary","id":41},"gender":{"type":"int32","id":42},"fbExtra":{"type":"FbExtra","id":20},"bkExtra":{"type":"BkExtra","id":21},"tennisExtra":{"type":"TennisExtra","id":31},"extra":{"type":"bytes","id":30}},"nested":{"FbExtra":{"fields":{"preferredFoot":{"type":"int32","id":1},"abilityData":{"type":"string","id":2},"characteristicsData":{"type":"string","id":3}}},"BkExtra":{"fields":{"school":{"type":"string","id":1},"drafted":{"type":"string","id":2},"season":{"type":"string","id":3},"ranking":{"type":"string","id":4},"total":{"type":"string","id":5}}},"TennisExtra":{"fields":{"plays":{"type":"int32","id":1},"backhand":{"type":"int32","id":2}}}}},"PlayerMap":{"fields":{"players":{"keyType":"string","type":"Player","id":1}}},"Players":{"fields":{"players":{"rule":"repeated","type":"Player","id":1}}},"PlayerMap2":{"fields":{"players":{"keyType":"int32","type":"Player","id":1}}},"PlayerHonor":{"fields":{"honors":{"rule":"repeated","type":"Honor","id":1}},"nested":{"Honor":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"level":{"type":"int32","id":4},"items":{"rule":"repeated","type":"Item","id":5}},"nested":{"Item":{"fields":{"team":{"type":"Team","id":1},"season":{"type":"string","id":2},"extra":{"type":"bytes","id":10}}}}}}},"PlayerStat":{"fields":{"sportId":{"type":"int32","id":1},"type":{"type":"int32","id":2},"type2":{"type":"int32","id":5},"scope":{"type":"ScopeItem","id":4},"items":{"rule":"repeated","type":"StatItem","id":3},"count":{"type":"int32","id":6}},"nested":{"StatItem":{"fields":{"team":{"type":"Team","id":1},"player":{"type":"Player","id":2},"value":{"type":"string","id":3},"ranking":{"type":"string","id":4},"matches":{"type":"int32","id":5},"extra":{"type":"string","id":9}}}}},"PlayerStats":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1},"players":{"rule":"repeated","type":"Player","id":2},"stats":{"rule":"repeated","type":"PlayerStat","id":3}}},"PlayerTotal":{"fields":{"id":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"season":{"type":"Season","id":3},"team":{"type":"Team","id":4},"player":{"type":"Player","id":5},"rating":{"type":"string","id":6},"position":{"type":"string","id":7},"scope":{"type":"ScopeItem","id":10},"fbDetail":{"type":"FbPlayerTotalDetail","id":8},"bkDetail":{"type":"BkPlayerTotalDetail","id":9},"items":{"keyType":"int32","type":"string","id":11},"extra":{"type":"bytes","id":15}},"nested":{"FbPlayerTotalDetail":{"fields":{"matches":{"type":"string","id":1},"court":{"type":"string","id":2},"first":{"type":"string","id":3},"avgMinute":{"type":"string","id":4},"goals":{"type":"string","id":5},"penalty":{"type":"string","id":32},"assists":{"type":"string","id":6},"frequencyGoals":{"type":"string","id":7},"avgShots":{"type":"string","id":8},"avgPasses":{"type":"string","id":9},"avgKeyPasses":{"type":"string","id":10},"avgLongBalls":{"type":"string","id":11},"avgCrosses":{"type":"string","id":12},"avgDribble":{"type":"string","id":13},"avgSteals":{"type":"string","id":14},"avgInterceptions":{"type":"string","id":15},"avgClearances":{"type":"string","id":16},"avgBlockedShots":{"type":"string","id":17},"yellowCards":{"type":"string","id":18},"yellow2redCards":{"type":"string","id":19},"redCards":{"type":"string","id":20},"avgDuelsWon":{"type":"string","id":21},"avgDispossessed":{"type":"string","id":22},"avgFouls":{"type":"string","id":23},"avgWasFouled":{"type":"string","id":24},"penaltiesSave":{"type":"string","id":25},"avgSaves":{"type":"string","id":26},"avgRunsOut":{"type":"string","id":27},"avgPunches":{"type":"string","id":28},"avgGoodHighClaim":{"type":"string","id":29},"cleanSheets":{"type":"string","id":30},"avgGoalsConceded":{"type":"string","id":31},"saves":{"type":"string","id":33}}},"BkPlayerTotalDetail":{"fields":{"points":{"type":"string","id":1},"rebounds":{"type":"string","id":2},"assists":{"type":"string","id":3},"steals":{"type":"string","id":4},"blocks":{"type":"string","id":5},"playedMinutes":{"type":"string","id":6},"fieldGoals":{"type":"string","id":7},"fieldGoalsScored":{"type":"string","id":18},"threePoints":{"type":"string","id":8},"threePointsScored":{"type":"string","id":19},"freeThrows":{"type":"string","id":9},"freeThrowsScored":{"type":"string","id":20},"offensiveRebounds":{"type":"string","id":10},"defensiveRebounds":{"type":"string","id":11},"turnovers":{"type":"string","id":12},"assistsTurnovers":{"type":"float","id":13},"personalFouls":{"type":"string","id":14},"plusMinus":{"type":"string","id":15},"matches":{"type":"string","id":16},"start":{"type":"string","id":17},"twoPoints":{"type":"string","id":21},"twoPointsScored":{"type":"string","id":22}}}}},"PlayerTotals":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1},"seasons":{"rule":"repeated","type":"Season","id":2},"comps":{"rule":"repeated","type":"Competition","id":3},"playerTotals":{"rule":"repeated","type":"PlayerTotal","id":4},"scopes":{"rule":"repeated","type":"ScopeItem","id":5}}},"PlayerTotalItem":{"fields":{"id":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"season":{"type":"Season","id":3},"team":{"type":"Team","id":4},"player":{"type":"Player","id":5},"rating":{"type":"string","id":6},"position":{"type":"string","id":7},"items":{"rule":"repeated","type":"Item","id":8},"values":{"keyType":"uint32","type":"int32","id":9}},"nested":{"Item":{"fields":{"type":{"type":"int32","id":1},"value":{"type":"string","id":2}}}}},"PlayerTotalItems":{"fields":{"playerTotals":{"rule":"repeated","type":"PlayerTotalItem","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"comps":{"rule":"repeated","type":"Competition","id":3},"seasons":{"rule":"repeated","type":"Season","id":4},"players":{"rule":"repeated","type":"Player","id":5}}},"PlayerTotalMap":{"fields":{"playerTotal":{"keyType":"string","type":"TotalItem","id":1}},"nested":{"TotalItem":{"fields":{"team":{"type":"Team","id":1},"season":{"type":"Season","id":2},"player":{"type":"Player","id":3},"values":{"keyType":"int32","type":"int32","id":4}}}}},"Promotion":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"color":{"type":"string","id":3}}},"Referee":{"fields":{"id":{"type":"string","id":1},"rid":{"type":"int32","id":6},"name":{"type":"string","id":2},"yellowCardsPerGame":{"type":"float","id":3},"redCardsPerGame":{"type":"float","id":4},"logo":{"type":"string","id":5},"country":{"type":"Country","id":7},"hasStats":{"type":"int32","id":8},"extra":{"type":"bytes","id":15}}},"Region":{"fields":{"id":{"type":"uint32","id":1},"name":{"type":"string","id":2}}},"Rule":{"fields":{"id":{"type":"int32","id":1},"competition":{"type":"Competition","id":2},"seasonIds":{"type":"string","id":3},"name":{"type":"string","id":4},"text":{"type":"bytes","id":5},"extra":{"type":"bytes","id":9}}},"Salary":{"fields":{"season":{"type":"Season","id":1},"mode":{"type":"string","id":2},"contractType":{"type":"int32","id":3},"weeklySalary":{"type":"int32","id":4},"annualSalary":{"type":"int32","id":5},"contractUntil":{"type":"int32","id":6}}},"ScopeItem":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"extra":{"type":"string","id":9}}},"ConferenceItem":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2}}},"MatchScorecard":{"fields":{"matchId":{"type":"int32","id":1},"items":{"rule":"repeated","type":"Scorecard","id":2}},"nested":{"Scorecard":{"fields":{"number":{"type":"int32","id":1},"batting":{"type":"Batting","id":2},"bowling":{"type":"Bowling","id":3},"total":{"type":"Total","id":4}},"nested":{"Batting":{"fields":{"team":{"type":"Team","id":1},"ballsFaced":{"type":"int32","id":2},"fours":{"type":"int32","id":3},"runRate":{"type":"string","id":4},"runs":{"type":"int32","id":5},"sixes":{"type":"int32","id":6},"players":{"rule":"repeated","type":"PlayerStat","id":11},"partnerships":{"rule":"repeated","type":"Partnership","id":12}},"nested":{"PlayerStat":{"fields":{"battingPlayer":{"type":"Player","id":1},"number":{"type":"int32","id":2},"runs":{"type":"int32","id":3},"ballsFaced":{"type":"int32","id":4},"fours":{"type":"int32","id":5},"sixes":{"type":"int32","id":6},"striker":{"type":"int32","id":7},"dismissal":{"type":"int32","id":8},"bowlerPlayer":{"type":"Player","id":9},"fielderPlayer":{"type":"Player","id":10},"strikeRate":{"type":"string","id":11}}},"Partnership":{"fields":{"wicketNumber":{"type":"int32","id":1},"runs":{"type":"int32","id":2},"overs":{"type":"int32","id":3},"start":{"type":"string","id":4},"end":{"type":"string","id":5},"dismissedPlayer":{"type":"Player","id":6},"players":{"rule":"repeated","type":"PartnerPlayer","id":7}},"nested":{"PartnerPlayer":{"fields":{"playerId":{"type":"string","id":1},"runs":{"type":"int32","id":2},"strikeRate":{"type":"string","id":3},"ballsFaced":{"type":"int32","id":4}}}}}}},"Bowling":{"fields":{"team":{"type":"Team","id":1},"overs":{"type":"int32","id":2},"runsGiven":{"type":"int32","id":3},"wickets":{"type":"int32","id":4},"wides":{"type":"int32","id":5},"byes":{"type":"int32","id":6},"legByes":{"type":"int32","id":7},"penalty":{"type":"int32","id":8},"noBalls":{"type":"int32","id":9},"extra":{"type":"int32","id":10},"players":{"rule":"repeated","type":"PlayerStat","id":11}},"nested":{"PlayerStat":{"fields":{"bowlingPlayer":{"type":"Player","id":1},"number":{"type":"int32","id":2},"overs":{"type":"int32","id":3},"maidens":{"type":"int32","id":4},"runsGiven":{"type":"int32","id":5},"wickets":{"type":"int32","id":6},"noBalls":{"type":"int32","id":7},"wides":{"type":"int32","id":8},"economyRate":{"type":"string","id":9}}}}},"Total":{"fields":{"over":{"type":"int32","id":1},"runs":{"type":"int32","id":2},"wickets":{"type":"int32","id":3},"goals":{"type":"int32","id":4}}}}}}},"Season":{"fields":{"id":{"type":"string","id":1},"sid":{"type":"int32","id":6},"year":{"type":"string","id":2},"competition":{"type":"Competition","id":3},"startDate":{"type":"int32","id":4},"endDate":{"type":"int32","id":5},"rule":{"type":"Rule","id":7},"extra":{"type":"bytes","id":15}}},"Seasons":{"fields":{"seasons":{"rule":"repeated","type":"Season","id":1}}},"CompsSeasons":{"fields":{"comps":{"rule":"repeated","type":"Competition","id":1},"compSeasons":{"keyType":"string","type":"Seasons","id":2}}},"SeasonItems":{"fields":{"seasons":{"rule":"repeated","type":"Season","id":1}}},"Stage":{"fields":{"id":{"type":"string","id":1},"sportId":{"type":"uint32","id":2},"season":{"type":"Season","id":3},"name":{"type":"string","id":4},"order":{"type":"uint32","id":5},"mode":{"type":"uint32","id":6},"groupCount":{"type":"uint32","id":7},"roundCount":{"type":"uint32","id":8},"isTop":{"type":"uint32","id":9},"rule":{"type":"Rule","id":10},"matchType":{"type":"string","id":11},"compLogo":{"type":"string","id":12},"extra":{"type":"bytes","id":15}}},"StageItems":{"fields":{"stages":{"rule":"repeated","type":"Stage","id":1}}},"MatchStat":{"fields":{"items":{"keyType":"int32","type":"Item","id":1},"esportsMatchStats":{"rule":"repeated","type":"ESportsMatchStat","id":2},"tennisScores":{"type":"TennisPoints","id":3}},"nested":{"Item":{"fields":{"home":{"type":"string","id":1},"away":{"type":"string","id":2}}}}},"TennisSetStats":{"fields":{"matchId":{"type":"string","id":1},"sets":{"keyType":"int32","type":"MatchStat","id":2}}},"Stream":{"fields":{"support":{"type":"int32","id":1},"block":{"type":"int32","id":2},"url":{"type":"Url","id":3},"type":{"type":"int32","id":4},"title":{"type":"string","id":5},"system":{"type":"int32","id":6},"ttid":{"type":"int32","id":7},"format":{"type":"int32","id":8},"share":{"type":"int32","id":9}},"nested":{"Url":{"fields":{"pc":{"type":"string","id":1},"app":{"type":"string","id":2}}}}},"Streams":{"fields":{"support":{"type":"int32","id":1},"block":{"type":"int32","id":2},"urls":{"rule":"repeated","type":"Url","id":3},"type":{"type":"int32","id":4},"share":{"type":"int32","id":5},"headline":{"type":"string","id":6}},"nested":{"Header":{"fields":{"key":{"type":"string","id":1},"value":{"type":"string","id":2}}},"Url":{"fields":{"url":{"type":"string","id":1},"title":{"type":"string","id":2},"system":{"type":"int32","id":3},"quality":{"type":"int32","id":4},"referrer":{"type":"string","id":5},"headers":{"rule":"repeated","type":"Header","id":6},"default":{"type":"int32","id":7},"vip":{"type":"int32","id":8}}}}},"AppStreams":{"fields":{"iv":{"type":"bytes","id":1},"streams":{"type":"bytes","id":2},"otherIv":{"type":"bytes","id":3},"otherStreams":{"type":"bytes","id":4}}},"FbRowDetail":{"fields":{"points":{"type":"string","id":1},"total":{"type":"string","id":2},"won":{"type":"string","id":3},"draw":{"type":"string","id":4},"loss":{"type":"string","id":5},"goals":{"type":"string","id":6},"goalsAgainst":{"type":"string","id":7},"goalDiff":{"type":"string","id":8},"position":{"type":"string","id":9},"homePoints":{"type":"string","id":10},"homePosition":{"type":"string","id":11},"homeTotal":{"type":"string","id":12},"homeWon":{"type":"string","id":13},"homeDraw":{"type":"string","id":14},"homeLoss":{"type":"string","id":15},"homeGoals":{"type":"string","id":16},"homeGoalsAgainst":{"type":"string","id":17},"homeGoalDiff":{"type":"string","id":18},"awayPoints":{"type":"string","id":19},"awayPosition":{"type":"string","id":20},"awayTotal":{"type":"string","id":21},"awayWon":{"type":"string","id":22},"awayDraw":{"type":"string","id":23},"awayLoss":{"type":"string","id":24},"awayGoals":{"type":"string","id":25},"awayGoalsAgainst":{"type":"string","id":26},"awayGoalDiff":{"type":"string","id":27},"note":{"type":"string","id":28},"isQualify":{"type":"int32","id":31}}},"BkRowDetail":{"fields":{"won":{"type":"string","id":1},"lost":{"type":"string","id":2},"wonRate":{"type":"float","id":3},"streaks":{"type":"string","id":4},"last_10":{"type":"string","id":5},"home":{"type":"string","id":6},"away":{"type":"string","id":7},"conference":{"type":"string","id":8},"pointsAvg":{"type":"float","id":9},"pointsAgainst":{"type":"float","id":10},"gameBack":{"type":"string","id":11},"diffAvg":{"type":"float","id":12},"division":{"type":"string","id":13},"matches":{"type":"string","id":14},"points":{"type":"string","id":15},"note":{"type":"string","id":16},"position":{"type":"string","id":17},"qualify":{"type":"string","id":18}}},"TennisRowDetail":{"fields":{"won":{"type":"string","id":1},"lost":{"type":"string","id":2},"matches":{"type":"string","id":3},"points":{"type":"string","id":4},"note":{"type":"string","id":5},"position":{"type":"string","id":6}}},"Table":{"fields":{"id":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"name":{"type":"string","id":3},"logo":{"type":"string","id":13},"group":{"type":"int32","id":4},"season":{"type":"Season","id":5},"stage":{"type":"Stage","id":6},"type":{"type":"int32","id":16},"conference":{"type":"string","id":7},"conf":{"rule":"repeated","type":"Conference","id":14},"hasHomePoints":{"type":"bool","id":8},"hasAwayPoints":{"type":"bool","id":9},"rows":{"rule":"repeated","type":"Row","id":10},"rowNotes":{"keyType":"int32","type":"string","id":15},"hasRealtimeTable":{"type":"bool","id":11},"hasRubbers":{"type":"bool","id":12},"hiddenTableName":{"type":"bool","id":17}},"nested":{"Row":{"fields":{"id":{"type":"int32","id":1},"team":{"type":"Team","id":2},"promotion":{"type":"Promotion","id":4},"fbDetail":{"type":"FbRowDetail","id":5},"bkDetail":{"type":"BkRowDetail","id":6},"tennisDetail":{"type":"TennisRowDetail","id":7},"detail":{"keyType":"int32","type":"string","id":8}}}}},"Tables":{"fields":{"tables":{"rule":"repeated","type":"Table","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"Conference":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2}}},"TableNote":{"fields":{"rowNotes":{"keyType":"int32","type":"string","id":1}}},"Team":{"fields":{"id":{"type":"string","id":1},"tid":{"type":"int32","id":25},"sportId":{"type":"uint32","id":2},"venue":{"type":"Venue","id":3},"manager":{"type":"Manager","id":4},"country":{"type":"Country","id":5},"comp":{"type":"Competition","id":18},"conferenceId":{"type":"int32","id":23},"name":{"type":"string","id":6},"logo":{"type":"string","id":7},"position":{"type":"string","id":8},"rating":{"type":"string","id":9},"national":{"type":"int32","id":10},"foreignPlayers":{"type":"int32","id":11},"nationalPlayers":{"type":"int32","id":12},"totalPlayers":{"type":"int32","id":16},"foundationTime":{"type":"int32","id":13},"background":{"type":"string","id":14},"hasStats":{"type":"int32","id":15},"marketValue":{"type":"string","id":17},"intMarketValue":{"type":"int32","id":32},"slug":{"type":"string","id":19},"shortName":{"type":"string","id":21},"intro":{"type":"string","id":24},"color":{"type":"string","id":26},"tabColor":{"type":"string","id":27},"users":{"type":"int32","id":28},"shareLink":{"type":"string","id":29},"doubleTeams":{"rule":"repeated","type":"Team","id":30},"isDouble":{"type":"bool","id":31},"virtual":{"type":"int32","id":33},"salary":{"type":"Salary","id":34},"tennisExtra":{"type":"TennisExtra","id":22},"extra":{"type":"bytes","id":20},"extraData":{"type":"ExtraData","id":35}},"nested":{"TennisExtra":{"fields":{"isTennisDouble":{"type":"bool","id":1},"subTeams":{"rule":"repeated","type":"Team","id":2},"hasStat":{"type":"bool","id":3}}},"ExtraData":{"fields":{"avgAge":{"type":"float","id":1},"avgHeight":{"type":"int32","id":2}}}}},"Teams":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1}}},"TeamsMap":{"fields":{"teams":{"keyType":"int32","type":"Team","id":1}}},"TeamHonor":{"fields":{"honors":{"rule":"repeated","type":"Honor","id":1}},"nested":{"Honor":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"level":{"type":"int32","id":4},"items":{"rule":"repeated","type":"Item","id":5}},"nested":{"Item":{"fields":{"season":{"type":"string","id":1},"extra":{"type":"bytes","id":5}}}}}}},"Injury":{"fields":{"team":{"type":"Team","id":1},"player":{"type":"Player","id":2},"comp":{"type":"Competition","id":3},"type":{"type":"int32","id":4},"reason":{"type":"string","id":5},"startTime":{"type":"int32","id":6},"endTime":{"type":"int32","id":7},"missedMatches":{"type":"int32","id":8}}},"TeamInjury":{"fields":{"homeInjury":{"rule":"repeated","type":"Injury","id":1},"awayInjury":{"rule":"repeated","type":"Injury","id":2}}},"TeamLineup":{"fields":{"sportId":{"type":"int32","id":1},"lineups":{"rule":"repeated","type":"Item","id":3},"manager":{"type":"Manager","id":4},"season":{"type":"Season","id":5},"teams":{"rule":"repeated","type":"Team","id":6},"countries":{"rule":"repeated","type":"Country","id":7},"national":{"type":"int32","id":8}},"nested":{"Item":{"fields":{"player":{"type":"Player","id":1},"position":{"type":"string","id":2},"isCaptain":{"type":"int32","id":3},"shirtNumber":{"type":"int32","id":4},"shirtNumber2":{"type":"string","id":5},"extra":{"type":"bytes","id":15}}}}},"TeamTotal":{"fields":{"sportId":{"type":"int32","id":1},"type":{"type":"int32","id":2},"type2":{"type":"int32","id":3},"items":{"rule":"repeated","type":"TotalItem","id":4}},"nested":{"TotalItem":{"fields":{"team":{"type":"Team","id":1},"value":{"type":"string","id":3},"ranking":{"type":"string","id":4}}}}},"TeamTotalItem":{"fields":{"season":{"type":"Season","id":1},"items":{"rule":"repeated","type":"Item","id":2},"team":{"type":"Team","id":3},"detail":{"keyType":"int32","type":"string","id":4}},"nested":{"Item":{"fields":{"type":{"type":"int32","id":1},"value":{"type":"string","id":2}}}}},"TeamTotals":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1},"teamTotals":{"rule":"repeated","type":"TeamTotal","id":2}}},"TennisPoints":{"fields":{"matchId":{"type":"string","id":1},"data":{"rule":"repeated","type":"PointByPoint","id":2}},"nested":{"PointByPoint":{"fields":{"set":{"type":"int32","id":1},"games":{"rule":"repeated","type":"Game","id":2}},"nested":{"Point":{"fields":{"home":{"type":"string","id":1},"away":{"type":"string","id":2}}},"Score":{"fields":{"home":{"type":"int32","id":1},"away":{"type":"int32","id":2},"serve":{"type":"int32","id":3},"scored":{"type":"int32","id":4}}},"Game":{"fields":{"game":{"type":"int32","id":1},"score":{"type":"Score","id":2},"points":{"rule":"repeated","type":"Point","id":3}}}}}}},"TextLives":{"fields":{"lives":{"rule":"repeated","type":"TextLive","id":1},"chapters":{"type":"int32","id":2}},"nested":{"TextLive":{"fields":{"items":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"time":{"type":"string","id":1},"number":{"type":"int32","id":2},"content":{"type":"string","id":3},"score":{"type":"string","id":4}}}}}}},"Times":{"fields":{"ticking":{"type":"int32","id":1},"countdown":{"type":"int32","id":2},"tmrUpdated":{"type":"int32","id":3},"tmrSecs":{"type":"int32","id":4},"addTime":{"type":"int32","id":5},"day":{"type":"int32","id":6}}},"TennisTimes":{"fields":{"total":{"type":"int32","id":1},"s1":{"type":"int32","id":2},"s2":{"type":"int32","id":3},"s3":{"type":"int32","id":4},"s4":{"type":"int32","id":5},"s5":{"type":"int32","id":6}}},"TimeIncident":{"fields":{"period":{"type":"int32","id":1},"items":{"rule":"repeated","type":"Item","id":2}},"nested":{"Item":{"fields":{"time":{"type":"string","id":1},"type":{"type":"int32","id":2},"belong":{"type":"int32","id":3},"main":{"type":"int32","id":4}}}}},"Transfer":{"fields":{"sportId":{"type":"int32","id":1},"player":{"type":"Player","id":2},"fromTeam":{"type":"Team","id":3},"toTeam":{"type":"Team","id":4},"transferTime":{"type":"int32","id":5},"transferFee":{"type":"string","id":6},"transferDesc":{"type":"string","id":7},"transferType":{"type":"int32","id":8},"freeAgent":{"type":"int32","id":9},"extra":{"type":"bytes","id":15}}},"PlayerTransfers":{"fields":{"transfers":{"rule":"repeated","type":"Transfer","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"TeamTransfers":{"fields":{"transferFrom":{"rule":"repeated","type":"Transfer","id":1},"transferTo":{"rule":"repeated","type":"Transfer","id":2},"players":{"rule":"repeated","type":"Player","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"transferIncome":{"type":"string","id":5}}},"TransferItems":{"fields":{"transfers":{"rule":"repeated","type":"Transfer","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"players":{"rule":"repeated","type":"Player","id":3}}},"MatchTrend":{"fields":{"period":{"type":"int32","id":1},"perMinutes":{"type":"int32","id":3},"items":{"rule":"repeated","type":"PeriodItem","id":2}},"nested":{"PeriodItem":{"fields":{"values":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"minute":{"type":"string","id":1},"value":{"type":"float","id":2}}}}}}},"User":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2},"avatar":{"type":"string","id":3},"loginType":{"type":"int64","id":4},"nickName":{"type":"string","id":5},"status":{"type":"int32","id":6},"banned":{"type":"int32","id":8},"createTime":{"type":"int64","id":7},"email":{"type":"string","id":9},"level":{"type":"int32","id":10},"credit":{"type":"int32","id":11},"facebookId":{"type":"string","id":12},"facebookName":{"type":"string","id":13},"googleId":{"type":"string","id":14},"googleName":{"type":"string","id":15},"appleId":{"type":"string","id":16},"chatCount":{"type":"int32","id":17},"thirdId":{"type":"string","id":18},"thirdName":{"type":"string","id":19},"extra":{"type":"bytes","id":20},"tipstersFollowing":{"type":"int32","id":21},"coins":{"type":"int32","id":22},"type":{"type":"int32","id":23},"isVip":{"type":"int32","id":24},"vipExpiredAt":{"type":"int64","id":25},"notificationCount":{"type":"int32","id":26},"description":{"type":"string","id":27}}},"Venue":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2},"capacity":{"type":"int32","id":3},"city":{"type":"string","id":4},"country":{"type":"string","id":5},"ground":{"type":"int32","id":6},"extra":{"type":"bytes","id":15}}},"Vote":{"fields":{"home":{"type":"int32","id":1},"draw":{"type":"int32","id":2},"away":{"type":"int32","id":3},"voteType":{"type":"int32","id":4}}},"VoteResult":{"fields":{"matchOdds":{"type":"MatchOdds","id":1},"voteResult":{"rule":"repeated","type":"VoteItem","id":2}},"nested":{"VoteItem":{"fields":{"oddType":{"type":"string","id":1},"oddData":{"type":"string","id":2},"voteType":{"type":"int32","id":3},"avgOdd":{"type":"string","id":4},"count":{"type":"int32","id":5},"voted":{"type":"int32","id":6}}}}},"CommunityPost":{"oneofs":{"PostDetail":{"oneof":["predictionDetail","imageDetail","voteDetail"]}},"fields":{"id":{"type":"int64","id":1},"categoryId":{"type":"int32","id":2},"user":{"type":"User","id":3},"type":{"type":"int32","id":4},"sportId":{"type":"int32","id":5},"title":{"type":"string","id":6},"content":{"type":"string","id":7},"status":{"type":"int32","id":8},"coins":{"type":"int32","id":9},"comments":{"type":"int32","id":10},"floors":{"type":"int32","id":11},"copies":{"type":"int32","id":12},"likes":{"type":"int32","id":13},"rewardCoins":{"type":"int32","id":14},"reports":{"type":"int32","id":27},"predictionDetail":{"type":"PredictionPost","id":15},"imageDetail":{"type":"ImagePost","id":16},"voteDetail":{"type":"VotePost","id":17},"paidContent":{"type":"string","id":18},"paidContentCount":{"type":"int32","id":25},"releaseTime":{"type":"int64","id":19},"extra":{"type":"string","id":20},"liked":{"type":"int32","id":21},"copied":{"type":"int32","id":22},"isTop":{"type":"int32","id":23},"views":{"type":"int32","id":24},"deleted":{"type":"int32","id":26}}},"PredictionPost":{"fields":{"predictions":{"rule":"repeated","type":"PredictionPostItem","id":1},"saleStatus":{"type":"int32","id":2}},"nested":{"PredictionPostItem":{"fields":{"match":{"type":"Match","id":1},"oddsType":{"type":"string","id":2},"odds":{"rule":"repeated","type":"string","id":3},"pick":{"type":"int32","id":4},"drew":{"type":"int32","id":5},"result":{"type":"int32","id":6}}}}},"ImagePost":{"fields":{"images":{"rule":"repeated","type":"ImageItem","id":1}}},"ImageItem":{"fields":{"image":{"type":"string","id":1},"width":{"type":"int32","id":2},"height":{"type":"int32","id":3}}},"VotePost":{"fields":{"voteData":{"rule":"repeated","type":"PostVoteItem","id":1},"endTime":{"type":"int32","id":2}},"nested":{"PostVoteItem":{"fields":{"id":{"type":"int32","id":1},"content":{"type":"string","id":2},"total":{"type":"int32","id":3}}}}},"PostCoins":{"fields":{"prices":{"rule":"repeated","type":"Item","id":1},"free":{"type":"int32","id":2}},"nested":{"Item":{"fields":{"coins":{"type":"int32","id":1}}}}},"CommunityFavIds":{"fields":{"followingUids":{"rule":"repeated","type":"int64","id":1},"blockedUids":{"rule":"repeated","type":"int64","id":2},"likedPostIds":{"rule":"repeated","type":"int64","id":3},"copiedPostIds":{"rule":"repeated","type":"int64","id":4},"likedCommentIds":{"rule":"repeated","type":"int64","id":5},"unlockPostIds":{"rule":"repeated","type":"int64","id":6}}},"CommunityCategory":{"fields":{"id":{"type":"int32","id":1},"description":{"type":"string","id":2},"logo":{"type":"string","id":3},"postCount":{"type":"int32","id":4}}},"CommunityHot":{"fields":{"categories":{"rule":"repeated","type":"CommunityCategory","id":1},"hotData":{"rule":"repeated","type":"HotData","id":2},"matchesPost":{"rule":"repeated","type":"HotMatchPost","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"matches":{"rule":"repeated","type":"Match","id":5}},"nested":{"HotMatchPost":{"fields":{"match":{"type":"Match","id":1},"count":{"type":"int32","id":2}}},"HotData":{"fields":{"id":{"type":"int64","id":1},"type":{"type":"int32","id":2},"postId":{"type":"int64","id":3},"uid":{"type":"int64","id":4},"link":{"type":"string","id":5},"logo":{"type":"string","id":6}}}}},"CommunityPostList":{"fields":{"posts":{"rule":"repeated","type":"CommunityPost","id":1},"matches":{"rule":"repeated","type":"Match","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"posters":{"rule":"repeated","type":"CommunityUser","id":4},"pagination":{"type":"Pagination","id":5}}},"CommunityUser":{"fields":{"user":{"type":"User","id":1},"description":{"type":"string","id":2},"totalFollowers":{"type":"int32","id":3},"totalFollowing":{"type":"int32","id":4},"isCommunityUser":{"type":"int32","id":5}}},"PosterList":{"fields":{"posters":{"rule":"repeated","type":"CommunityUser","id":1},"pagination":{"type":"Pagination","id":2}}},"CommunityCategoryHotData":{"fields":{"category":{"type":"CommunityCategory","id":1},"rankings":{"rule":"repeated","type":"PosterRankingItem","id":2},"users":{"rule":"repeated","type":"User","id":3},"posts":{"rule":"repeated","type":"CommunityPost","id":4}}},"PosterRankingItem":{"fields":{"user":{"type":"User","id":1},"ranking":{"type":"int32","id":2},"popularity":{"type":"int32","id":3}}},"PosterRanking":{"fields":{"rankings":{"rule":"repeated","type":"PosterRankingItem","id":1},"users":{"rule":"repeated","type":"User","id":2}}},"PostInfo":{"fields":{"post":{"type":"CommunityPost","id":1},"category":{"type":"CommunityCategory","id":2},"matches":{"rule":"repeated","type":"Match","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"poster":{"type":"CommunityUser","id":5}}},"PostComment":{"fields":{"id":{"type":"int64","id":1},"post":{"type":"CommunityPost","id":2},"user":{"type":"User","id":3},"type":{"type":"int32","id":4},"floor":{"type":"int32","id":5},"parentId":{"type":"int64","id":6},"conversationId":{"type":"int64","id":7},"content":{"type":"string","id":8},"coins":{"type":"int32","id":9},"replies":{"type":"int32","id":10},"likes":{"type":"int32","id":11},"reports":{"type":"int32","id":17},"image":{"type":"ImageItem","id":12},"createTime":{"type":"int64","id":13},"liked":{"type":"int32","id":14},"referenceComment":{"type":"PostComment","id":15},"replyItems":{"rule":"repeated","type":"PostComment","id":16}}},"PostCommentList":{"fields":{"comments":{"rule":"repeated","type":"PostComment","id":1},"users":{"rule":"repeated","type":"CommunityUser","id":2},"pagination":{"type":"Pagination","id":3},"conversation":{"type":"PostComment","id":4}}},"HasNewMessage":{"fields":{"items":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"tab":{"type":"int32","id":1},"hasNewMessages":{"type":"int32","id":2}}}}},"CommunityMessages":{"fields":{"items":{"rule":"repeated","type":"Item","id":1},"posts":{"rule":"repeated","type":"CommunityPost","id":2},"comments":{"rule":"repeated","type":"PostComment","id":3},"users":{"rule":"repeated","type":"User","id":4},"pagination":{"type":"Pagination","id":5}},"nested":{"Item":{"fields":{"id":{"type":"int64","id":1},"type":{"type":"int32","id":2},"post":{"type":"CommunityPost","id":3},"comment":{"type":"PostComment","id":4},"user":{"type":"User","id":5},"count":{"type":"int32","id":6},"createTime":{"type":"int64","id":7},"hasRead":{"type":"int32","id":8}}}}},"Clash":{"fields":{"teamIdList":{"rule":"repeated","type":"string","id":1},"matchIdList":{"rule":"repeated","type":"string","id":2},"status":{"type":"int32","id":3},"teamScoreList":{"rule":"repeated","type":"string","id":4},"hasNext":{"type":"int32","id":5},"result":{"type":"string","id":6},"id":{"type":"int32","id":7},"parentIds":{"rule":"repeated","type":"int32","id":8},"childrenIds":{"rule":"repeated","type":"int32","id":9}}},"Round":{"fields":{"name":{"type":"string","id":1},"clashes":{"rule":"repeated","type":"Clash","id":2},"hasNext":{"type":"int32","id":3},"isFinal":{"type":"int32","id":4}}},"Bracket":{"fields":{"name":{"type":"string","id":1},"rounds":{"rule":"repeated","type":"Round","id":2},"index":{"type":"int32","id":3},"season":{"type":"Season","id":4},"competition":{"type":"Competition","id":5}}},"BracketData":{"fields":{"sportId":{"type":"int32","id":1},"competition":{"type":"Competition","id":2},"index":{"type":"int32","id":3},"brackets":{"rule":"repeated","type":"Bracket","id":4},"matches":{"rule":"repeated","type":"Match","id":5},"teams":{"rule":"repeated","type":"Team","id":6},"competitions":{"rule":"repeated","type":"Competition","id":7},"seasons":{"rule":"repeated","type":"Season","id":8}}},"DbTables":{"fields":{"tables":{"rule":"repeated","type":"Table","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"promotions":{"rule":"repeated","type":"Promotion","id":3},"seasons":{"rule":"repeated","type":"Season","id":4},"rules":{"rule":"repeated","type":"Rule","id":5},"shootPlayers":{"rule":"repeated","type":"PlayerTotal","id":6},"players":{"rule":"repeated","type":"Player","id":7},"stages":{"rule":"repeated","type":"Stage","id":8},"conferences":{"rule":"repeated","type":"Conference","id":9},"comps":{"rule":"repeated","type":"Competition","id":10}}},"DbCompMatches":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1},"teams":{"rule":"repeated","type":"Team","id":3},"recentMatch":{"type":"Match","id":2},"stages":{"rule":"repeated","type":"Stage","id":4},"venues":{"rule":"repeated","type":"Venue","id":5}}},"DbCompInfo":{"fields":{"competition":{"type":"Competition","id":1},"seasons":{"rule":"repeated","type":"Season","id":2},"match":{"type":"Match","id":3},"bestLineups":{"type":"BestLineups","id":4},"prevChampionTeam":{"type":"Team","id":5},"championTeams":{"rule":"repeated","type":"Team","id":6},"promoteTeams":{"rule":"repeated","type":"Team","id":7},"dropTeams":{"rule":"repeated","type":"Team","id":8},"highLevelComps":{"rule":"repeated","type":"Competition","id":9},"lowLevelComps":{"rule":"repeated","type":"Competition","id":10},"relatedComps":{"rule":"repeated","type":"Competition","id":11},"fbExtra":{"type":"FbExtra","id":12},"bkExtra":{"type":"BkExtra","id":14},"tennisExtra":{"type":"TennisExtra","id":15},"menu":{"type":"int32","id":13}},"nested":{"FbExtra":{"fields":{"player":{"type":"Player","id":1},"avgAge":{"type":"string","id":2},"homeWon":{"type":"float","id":4},"awayWon":{"type":"float","id":5},"draw":{"type":"float","id":6},"avgGoals":{"type":"string","id":7},"teamsCount":{"type":"int32","id":8},"teamsMarketValue":{"type":"string","id":9},"teamsForeignPlayers":{"type":"string","id":10},"totalPlayer":{"type":"int32","id":11},"redCards":{"type":"string","id":12},"yellowCards":{"type":"string","id":13}}},"BkExtra":{"fields":{"homeWon":{"type":"float","id":1},"awayWon":{"type":"float","id":2},"avgPoints":{"type":"string","id":3},"teamsMarketValue":{"type":"string","id":4}}},"TennisExtra":{"fields":{"sets":{"type":"int32","id":1},"titleHolderWinNum":{"type":"int32","id":2},"maxWinNumPerTeam":{"type":"int32","id":3},"totalPrize":{"type":"float","id":4},"prizeCurrency":{"type":"string","id":5},"prizeAmount":{"type":"string","id":9},"competitors":{"type":"int32","id":6},"avgAge":{"type":"string","id":7},"ground":{"type":"int32","id":8}}}}},"FbDbMatches":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"comps":{"rule":"repeated","type":"Competition","id":3}}},"PlayerHonors":{"fields":{"playerHonors":{"type":"PlayerHonor","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"TennisPlayerStats":{"fields":{"updateTime":{"type":"int32","id":1},"singleStat":{"type":"Stat","id":2},"doubleStat":{"type":"Stat","id":3},"careerSingleStat":{"type":"Stat","id":4},"careerDoubleStat":{"type":"Stat","id":5},"courtPerfs":{"rule":"repeated","type":"CourtPerf","id":6}},"nested":{"Stat":{"fields":{"ranking":{"type":"string","id":1},"win":{"type":"int32","id":2},"loss":{"type":"int32","id":3},"titles":{"type":"int32","id":4},"totalPrize":{"type":"float","id":5},"prizeCurrency":{"type":"string","id":6},"prizeAmount":{"type":"string","id":8},"year":{"type":"string","id":7}}},"CourtPerf":{"fields":{"ground":{"type":"int32","id":1},"win":{"type":"int32","id":2},"loss":{"type":"int32","id":3}}}}},"PlayerInfo":{"fields":{"player":{"type":"Player","id":1},"playerTransfers":{"type":"PlayerTransfers","id":2},"menu":{"type":"int32","id":3},"playerTotals":{"type":"PlayerTotals","id":4},"tennisPlayerStats":{"type":"TennisPlayerStats","id":5},"recentMatches":{"rule":"repeated","type":"Match","id":6},"teams":{"rule":"repeated","type":"Team","id":7},"comps":{"rule":"repeated","type":"Competition","id":8}}},"RefereeStatsItem":{"fields":{"stats":{"keyType":"int32","type":"string","id":1}}},"RefereeStats":{"fields":{"competition":{"type":"Competition","id":1},"stats":{"type":"RefereeStatsItem","id":2}}},"RefereeMatchStats":{"fields":{"match":{"type":"Match","id":1},"stats":{"keyType":"int32","type":"Item","id":2}},"nested":{"Item":{"fields":{"items":{"rule":"repeated","type":"int32","id":1}}}}},"RefereeInfo":{"fields":{"referee":{"type":"Referee","id":1},"menu":{"type":"int32","id":2},"refereeStats":{"rule":"repeated","type":"RefereeStats","id":3},"competitions":{"rule":"repeated","type":"Competition","id":4}}},"RefereeMatches":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1},"competitions":{"rule":"repeated","type":"Competition","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"stats":{"rule":"repeated","type":"RefereeMatchStats","id":4},"pagination":{"type":"Pagination","id":5}}},"ManagerInfo":{"fields":{"manager":{"type":"Manager","id":1},"menu":{"type":"int32","id":2},"managersHistory":{"rule":"repeated","type":"ManagerHistory","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"extra":{"type":"string","id":5}}},"TeamPlayerTotals":{"fields":{"players":{"rule":"repeated","type":"Player","id":1},"seasons":{"rule":"repeated","type":"Season","id":2},"comps":{"rule":"repeated","type":"Competition","id":3},"playerStats":{"rule":"repeated","type":"PlayerStat","id":4},"scopes":{"rule":"repeated","type":"ScopeItem","id":5},"teams":{"rule":"repeated","type":"Team","id":6},"countries":{"rule":"repeated","type":"Country","id":7},"national":{"type":"int32","id":8}}},"BkTeamPlayerTotals":{"fields":{"players":{"rule":"repeated","type":"Player","id":1},"seasons":{"rule":"repeated","type":"Season","id":2},"competitions":{"rule":"repeated","type":"Competition","id":3},"playerStats":{"rule":"repeated","type":"PlayerTotal","id":4},"teamStats":{"rule":"repeated","type":"PlayerTotal","id":5},"scopes":{"rule":"repeated","type":"ScopeItem","id":6},"teams":{"rule":"repeated","type":"Team","id":7}}},"DbTeamInfo":{"fields":{"team":{"type":"Team","id":1},"transfers":{"type":"TeamTransfers","id":2},"fbExtra":{"type":"FbExtra","id":3},"bkExtra":{"type":"BkExtra","id":5},"menu":{"type":"int32","id":4},"matches":{"rule":"repeated","type":"Match","id":6},"teams":{"rule":"repeated","type":"Team","id":7},"topPlayers":{"type":"TeamPlayerTotals","id":8}},"nested":{"FbExtra":{"fields":{"player":{"type":"Player","id":1},"playersMarketValue":{"type":"string","id":2},"avgAge":{"type":"string","id":3},"countryPlayerCount":{"type":"string","id":4},"transferRecord":{"type":"string","id":5}}},"BkExtra":{"fields":{"avgAge":{"type":"string","id":1},"position":{"type":"string","id":2},"record":{"type":"string","id":3},"points":{"type":"string","id":4},"pointsAgainst":{"type":"string","id":5},"assists":{"type":"string","id":6},"rebounds":{"type":"string","id":7},"fieldGoalsAccuracy":{"type":"string","id":8},"season":{"type":"string","id":9},"maxPointPlayer":{"type":"Player","id":10}}}}},"FiFaRankings":{"fields":{"regions":{"rule":"repeated","type":"Region","id":1},"fifaRankings":{"rule":"repeated","type":"FiFaRankingInfo","id":2},"pubTimes":{"rule":"repeated","type":"int32","id":3}}},"Rankings":{"fields":{"rankings":{"rule":"repeated","type":"RankingInfo","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"pubTimes":{"rule":"repeated","type":"PubTime","id":3},"countries":{"rule":"repeated","type":"Country","id":4},"hasNextPage":{"type":"int32","id":5}}},"FiFaWorldCup":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1},"tables":{"rule":"repeated","type":"Table","id":2},"brackets":{"rule":"repeated","type":"Bracket","id":4},"matches":{"rule":"repeated","type":"Match","id":5},"stats":{"rule":"repeated","type":"PlayerStat","id":6},"players":{"rule":"repeated","type":"Player","id":7},"competition":{"type":"Competition","id":8}}},"DbCategory":{"fields":{"id":{"type":"uint32","id":1},"sportId":{"type":"uint32","id":8},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"weight":{"type":"int32","id":4},"isCategory":{"type":"uint32","id":5},"competitions":{"rule":"repeated","type":"Competition","id":7}}},"DbHome":{"fields":{"categories":{"rule":"repeated","type":"DbCategory","id":1},"hotComps":{"rule":"repeated","type":"DbCategory","id":2},"hotCompetitions":{"rule":"repeated","type":"Competition","id":3}}},"DbHomeCategories":{"fields":{"countries":{"rule":"repeated","type":"Country","id":1},"hotComps":{"rule":"repeated","type":"Competition","id":2},"countryHighestComp":{"rule":"repeated","type":"Competition","id":3},"nation":{"type":"Country","id":4},"hotCategories":{"rule":"repeated","type":"Country","id":5},"hotTeams":{"rule":"repeated","type":"Team","id":6},"hotPlayers":{"rule":"repeated","type":"Player","id":7}}},"MarkedIds":{"fields":{"markedIds":{"rule":"repeated","type":"string","id":1}}},"Search":{"fields":{"comps":{"rule":"repeated","type":"Competition","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"players":{"rule":"repeated","type":"Player","id":3}}},"TennisRankingInfo":{"fields":{"updateTime":{"type":"uint32","id":1},"team":{"type":"Team","id":2},"ranking":{"type":"uint32","id":3},"positionChanged":{"type":"int32","id":4},"points":{"type":"uint32","id":5}}},"TennisRankings":{"fields":{"wtaRankings":{"rule":"repeated","type":"TennisRankingInfo","id":1},"atpRankings":{"rule":"repeated","type":"TennisRankingInfo","id":2},"archives":{"rule":"repeated","type":"uint32","id":3}}},"ESportsMatchTeamStat":{"fields":{"ban":{"rule":"repeated","type":"Hero","id":1},"pick":{"rule":"repeated","type":"Hero","id":2},"side":{"type":"int32","id":3},"stats":{"rule":"repeated","type":"int32","id":4},"winIcon":{"rule":"repeated","type":"string","id":5},"tId":{"type":"int32","id":6},"playerEco":{"keyType":"int32","type":"int32","id":7},"playerExp":{"keyType":"int32","type":"int32","id":8},"score":{"type":"int32","id":9}}},"ESportsMatchStat":{"fields":{"id":{"type":"string","id":1},"bo":{"type":"int32","id":2},"home":{"type":"ESportsMatchTeamStat","id":3},"away":{"type":"ESportsMatchTeamStat","id":4},"map":{"type":"Map","id":5},"lengthTime":{"type":"int32","id":6},"statusId":{"type":"int32","id":7}}},"Hero":{"fields":{"id":{"type":"int32","id":1},"logo":{"type":"string","id":2}}},"Map":{"fields":{"id":{"type":"int32","id":1},"sportId":{"type":"int32","id":2},"name":{"type":"string","id":3},"logo":{"type":"string","id":4},"cover":{"type":"string","id":5}}},"DropOdd":{"fields":{"match":{"type":"Match","id":1},"oddType":{"type":"string","id":2},"lastOdd":{"rule":"repeated","type":"string","id":3},"nowOdd":{"rule":"repeated","type":"string","id":4},"updateTime":{"type":"int32","id":5},"drop":{"type":"int32","id":6},"dropIndex":{"type":"int32","id":7}}},"DropOdds":{"fields":{"dropOdds":{"rule":"repeated","type":"DropOdd","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"comps":{"rule":"repeated","type":"Competition","id":3},"countries":{"rule":"repeated","type":"Country","id":4},"pagination":{"type":"Pagination","id":5}}},"DropOddPers":{"fields":{"minPer":{"type":"int32","id":1},"maxPer":{"type":"int32","id":2},"pushStatus":{"type":"int32","id":3}}},"PerItem":{"fields":{"min":{"type":"string","id":1},"max":{"type":"string","id":2},"type":{"type":"string","id":3},"step":{"type":"string","id":4},"start":{"type":"string","id":5},"end":{"type":"string","id":6}}},"DropSportsPers":{"fields":{"sportsDropPers":{"keyType":"int32","type":"SpDropPers","id":1}},"nested":{"SpDropPers":{"fields":{"status":{"type":"int32","id":1},"items":{"rule":"repeated","type":"PerItem","id":2}}}}},"HistoryMatches":{"fields":{"home":{"rule":"repeated","type":"Match","id":1},"away":{"rule":"repeated","type":"Match","id":2},"h2h":{"rule":"repeated","type":"Match","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"comps":{"rule":"repeated","type":"Competition","id":5},"homeFuture":{"rule":"repeated","type":"Match","id":6},"awayFuture":{"rule":"repeated","type":"Match","id":7},"h2hFuture":{"rule":"repeated","type":"Match","id":9},"venues":{"rule":"repeated","type":"Venue","id":10},"stages":{"rule":"repeated","type":"Stage","id":11},"goalDistributions":{"rule":"repeated","type":"GoalDistribution","id":13},"season":{"type":"Season","id":14},"countries":{"rule":"repeated","type":"Country","id":18}}},"MatchLineup":{"fields":{"lineup":{"type":"Lineup","id":1},"players":{"rule":"repeated","type":"Player","id":2},"playersInjury":{"type":"TeamInjury","id":3},"incidents":{"type":"MatchIncidents","id":4},"lineupTeamInfo":{"rule":"repeated","type":"Team","id":5},"bestPlayers":{"rule":"repeated","type":"BestPlayersData","id":6}},"nested":{"BestPlayersData":{"fields":{"type":{"type":"int32","id":1},"value":{"type":"string","id":2},"player":{"type":"Player","id":3},"team":{"type":"Team","id":4}}}}},"Matches":{"fields":{"competitions":{"rule":"repeated","type":"Competition","id":1},"matches":{"rule":"repeated","type":"Match","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"seasons":{"rule":"repeated","type":"Season","id":4},"t":{"type":"int32","id":5},"countries":{"rule":"repeated","type":"Country","id":6},"counts":{"rule":"repeated","type":"CompMatchCount","id":7},"extra":{"type":"string","id":10},"topComps":{"rule":"repeated","type":"Competition","id":11},"stages":{"rule":"repeated","type":"Stage","id":12},"venues":{"rule":"repeated","type":"Venue","id":13}}},"MatchCount":{"fields":{"items":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"sportId":{"type":"int32","id":1},"totalCount":{"type":"int32","id":2},"liveCount":{"type":"int32","id":3},"todayCount":{"type":"int32","id":4}}}}},"CompMatchCount":{"fields":{"id":{"type":"string","id":1},"liveCount":{"type":"int32","id":2},"totalCount":{"type":"int32","id":3}}},"MatchCompsData":{"fields":{"comps":{"rule":"repeated","type":"Competition","id":1},"countries":{"rule":"repeated","type":"Country","id":2},"counts":{"rule":"repeated","type":"CompMatchCount","id":3},"topComps":{"rule":"repeated","type":"Competition","id":4},"extra":{"type":"string","id":5}}},"OfficialVideo":{"fields":{"logo":{"type":"string","id":1},"title":{"type":"string","id":2},"url":{"type":"string","id":3},"showUrl":{"type":"string","id":4}}},"OfficialVideoV2":{"fields":{"logo":{"type":"string","id":1},"title":{"type":"string","id":2},"url":{"type":"string","id":3},"subtitle":{"type":"string","id":4},"createTime":{"type":"int32","id":5}}},"Content":{"fields":{"text":{"type":"string","id":1},"isUrl":{"type":"bool","id":2}}},"TwitterVideo":{"fields":{"avatar":{"type":"string","id":1},"name":{"type":"string","id":2},"screenName":{"type":"string","id":3},"createTime":{"type":"int32","id":4},"content":{"rule":"repeated","type":"Content","id":5}}},"MatchMedia":{"fields":{"officialVideo":{"type":"OfficialVideo","id":1},"twitterVideo":{"rule":"repeated","type":"TwitterVideo","id":2},"officialVideos":{"rule":"repeated","type":"OfficialVideoV2","id":3}}},"OddLinkParams":{"fields":{"name":{"type":"string","id":1},"type":{"type":"int32","id":2}}},"OddCompany":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"link":{"type":"string","id":4},"statsLink":{"type":"string","id":5},"linkParams":{"rule":"repeated","type":"OddLinkParams","id":8},"statsLinkParams":{"rule":"repeated","type":"OddLinkParams","id":9},"multiples":{"type":"int32","id":6},"adName":{"type":"string","id":7},"type":{"type":"int32","id":10},"jumpType":{"type":"int32","id":11}}},"OddCompanies":{"fields":{"companies":{"rule":"repeated","type":"OddCompany","id":1}}},"OddItem":{"fields":{"odd":{"rule":"repeated","type":"string","id":1}}},"MatchOdd":{"fields":{"f":{"type":"OddItem","id":1},"s":{"type":"OddItem","id":2},"l":{"type":"OddItem","id":4},"company":{"type":"OddCompany","id":3}}},"MatchOdds":{"fields":{"asia":{"rule":"repeated","type":"MatchOdd","id":1},"eu":{"rule":"repeated","type":"MatchOdd","id":2},"bs":{"rule":"repeated","type":"MatchOdd","id":3},"corner":{"rule":"repeated","type":"MatchOdd","id":5},"companies":{"rule":"repeated","type":"OddCompany","id":4},"type":{"type":"string","id":6},"eu3":{"rule":"repeated","type":"MatchOdd","id":7},"text":{"type":"string","id":8}}},"OddsDetail":{"fields":{"time":{"type":"string","id":1},"score":{"type":"string","id":2},"w":{"type":"string","id":3},"d":{"type":"string","id":4},"l":{"type":"string","id":5},"close":{"type":"string","id":6},"statusId":{"type":"int32","id":7},"updateTime":{"type":"int32","id":8}}},"MatchOddsDetail":{"fields":{"oddsDetail":{"rule":"repeated","type":"CompanyOddDetail","id":1}},"nested":{"CompanyOddDetail":{"fields":{"details":{"rule":"repeated","type":"OddsDetail","id":1},"company":{"type":"OddCompany","id":2}}}}},"MatchScorecards":{"fields":{"matchScorecard":{"type":"MatchScorecard","id":1},"players":{"rule":"repeated","type":"Player","id":2}}},"MatchTables":{"fields":{"tables":{"rule":"repeated","type":"Table","id":1},"rule":{"rule":"repeated","type":"Rule","id":2}}},"ManagerHistory":{"fields":{"manager":{"type":"Manager","id":1},"team":{"type":"Team","id":2},"position":{"type":"string","id":3},"joined":{"type":"int32","id":4},"contractUntil":{"type":"int32","id":5},"playerUsed":{"type":"int32","id":6},"matches":{"type":"int32","id":7},"win":{"type":"int32","id":8},"draw":{"type":"int32","id":9},"lose":{"type":"int32","id":10},"goalPpt":{"type":"string","id":11},"ppm":{"type":"string","id":12}}},"MatchTeamsRelation":{"fields":{"managers":{"rule":"repeated","type":"Manager","id":1},"managersHistory":{"rule":"repeated","type":"ManagerHistory","id":2},"transfers":{"rule":"repeated","type":"Transfer","id":3},"players":{"rule":"repeated","type":"Player","id":4},"countries":{"rule":"repeated","type":"Country","id":5}}},"MatchTrends":{"fields":{"trend":{"type":"MatchTrend","id":1},"incidents":{"type":"TimeIncident","id":2}}},"MLiveData":{"fields":{"match":{"type":"Match","id":1},"stats":{"type":"MatchStat","id":2},"mlive":{"type":"MLiveItem","id":3}}},"MatchSummary":{"fields":{"match":{"type":"Match","id":1},"stats":{"type":"MatchStat","id":2},"tennisSetStats":{"type":"TennisSetStats","id":6},"tennisScores":{"type":"TennisPoints","id":7},"esportsStats":{"type":"ESportsMatchStat","id":8},"bestPlayers":{"rule":"repeated","type":"Player","id":3},"animation":{"type":"MLive","id":4},"stream":{"type":"Stream","id":5},"animations":{"rule":"repeated","type":"MLive","id":9},"ticketLink":{"type":"string","id":10}}},"PushScore":{"oneofs":{"Scores":{"oneof":["commonScore","ckScores","bsScores","esScores","vbScores","afScores","ihScores","ttScores","bmScores"]}},"fields":{"matchId":{"type":"string","id":1},"matchStatus":{"type":"int32","id":2},"statusId":{"type":"int32","id":3},"times":{"type":"Times","id":4},"homeScores":{"rule":"repeated","type":"int32","id":5},"awayScores":{"rule":"repeated","type":"int32","id":6},"tennisPoints":{"type":"TennisPoints","id":7},"tennisGamePoints":{"rule":"repeated","type":"string","id":8},"serve":{"type":"int32","id":9},"homeScore":{"type":"int32","id":10},"awayScore":{"type":"int32","id":11},"commonScore":{"type":"CommonScore","id":101},"ckScores":{"type":"CricketScores","id":105},"bsScores":{"type":"BaseballScores","id":106},"esScores":{"type":"EsportsScores","id":107},"vbScores":{"type":"VolleyBallScores","id":108},"afScores":{"type":"AmericanFootballScores","id":109},"ihScores":{"type":"IceHockeyScores","id":110},"ttScores":{"type":"TableTennisScores","id":111},"bmScores":{"type":"BadmintonScores","id":112}}},"MapPushSpScore":{"fields":{"spScores":{"keyType":"int32","type":"PushScore","id":1}}},"PushStat":{"fields":{"matchId":{"type":"string","id":1},"stats":{"type":"MatchStat","id":2},"tennisStats":{"type":"TennisSetStats","id":3},"esportsStats":{"type":"ESportsMatchStat","id":4}}},"PushMatchTeamStats":{"fields":{"matchId":{"type":"string","id":1},"method":{"type":"int32","id":2},"matchTeamStats":{"type":"MatchTeamStats","id":3}}},"PushIncident":{"fields":{"matchId":{"type":"string","id":1},"method":{"type":"int32","id":2},"lastIncidentId":{"type":"int32","id":3},"lastImportantId":{"type":"int32","id":4}}},"PushLineup":{"fields":{"matchId":{"type":"string","id":1},"method":{"type":"int32","id":2}}},"PushScorecard":{"fields":{"matchId":{"type":"string","id":1},"method":{"type":"int32","id":2}}},"PushBallByBall":{"fields":{"matchId":{"type":"string","id":1},"method":{"type":"int32","id":2}}},"PushBoxScore":{"fields":{"method":{"type":"int32","id":1},"items":{"rule":"repeated","type":"BoxScore","id":2},"homeTotal":{"type":"BoxScore","id":3},"awayTotal":{"type":"BoxScore","id":4}},"nested":{"BoxScore":{"fields":{"playerId":{"type":"string","id":1},"status":{"type":"int32","id":2},"points":{"type":"string","id":3},"rebounds":{"type":"string","id":4},"assists":{"type":"string","id":5},"steals":{"type":"string","id":6},"blocks":{"type":"string","id":7},"playedMinutes":{"type":"string","id":8},"fieldGoals":{"type":"string","id":9},"threePoints":{"type":"string","id":10},"freeThrows":{"type":"string","id":11},"offensiveRebounds":{"type":"string","id":12},"defensiveRebounds":{"type":"string","id":13},"turnovers":{"type":"string","id":14},"assistsTurnovers":{"type":"float","id":15},"personalFouls":{"type":"string","id":16},"plusMinus":{"type":"string","id":17},"isOut":{"type":"int32","id":18},"played":{"type":"int32","id":19}}}}},"OddItems":{"fields":{"matchId":{"type":"string","id":1},"items":{"rule":"repeated","type":"Item","id":2}},"nested":{"Item":{"fields":{"companyId":{"type":"int32","id":2},"oddsType":{"type":"string","id":3},"odd":{"rule":"repeated","type":"string","id":4},"time":{"type":"string","id":5},"updateTime":{"type":"int32","id":6},"preUpdateTime":{"type":"int32","id":7},"score":{"type":"string","id":8},"statusId":{"type":"int32","id":9},"companyIds":{"rule":"repeated","type":"int32","id":10}}}}},"PushMatchOddItems":{"fields":{"matchId":{"type":"string","id":1},"items":{"rule":"repeated","type":"Item","id":2}},"nested":{"Item":{"fields":{"companyId":{"type":"int32","id":1},"oddsType":{"type":"string","id":2},"odd":{"rule":"repeated","type":"string","id":3},"time":{"type":"string","id":4},"updateTime":{"type":"int32","id":5},"preUpdateTime":{"type":"int32","id":6},"score":{"type":"string","id":7},"statusId":{"type":"int32","id":8}}}}},"PushBkMatchTLives":{"fields":{"items":{"rule":"repeated","type":"Item","id":1},"matchId":{"type":"string","id":2},"language":{"type":"int32","id":3}},"nested":{"Item":{"fields":{"chapter":{"type":"int32","id":1},"time":{"type":"string","id":2},"number":{"type":"int32","id":3},"content":{"type":"string","id":4},"score":{"type":"string","id":5},"updateTime":{"type":"string","id":6}}}}},"PushMatchCount":{"fields":{"matchCounts":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"sportId":{"type":"int32","id":1},"date":{"type":"string","id":2},"tz":{"type":"string","id":3},"totalCount":{"type":"int32","id":4},"liveCount":{"type":"int32","id":5},"todayCount":{"type":"int32","id":6},"timezone":{"type":"string","id":7}}}}},"PushMatchUsers":{"fields":{"matchId":{"type":"string","id":1},"user":{"type":"int32","id":2}}},"PushLiveCompMatchCount":{"fields":{"sportId":{"type":"int32","id":1},"date":{"type":"string","id":2},"tz":{"type":"string","id":3},"items":{"rule":"repeated","type":"Item","id":4},"timezone":{"type":"string","id":6},"liveCount":{"type":"int32","id":5}},"nested":{"Item":{"fields":{"compId":{"type":"string","id":2},"count":{"type":"int32","id":3}}}}},"Push":{"fields":{"scores":{"rule":"repeated","type":"PushScore","id":1},"stats":{"rule":"repeated","type":"PushStat","id":2},"incidents":{"rule":"repeated","type":"PushIncident","id":3},"lineups":{"rule":"repeated","type":"PushLineup","id":4},"odds":{"rule":"repeated","type":"OddItems","id":5},"matchOdds":{"type":"PushMatchOddItems","id":6},"boxScores":{"type":"PushBoxScore","id":7},"textLives":{"type":"PushBkMatchTLives","id":8},"matchesCount":{"type":"PushMatchCount","id":9},"users":{"rule":"repeated","type":"PushMatchUsers","id":10},"compMatchCount":{"type":"PushLiveCompMatchCount","id":11},"scorecard":{"type":"PushScorecard","id":12},"teamStats":{"type":"PushMatchTeamStats","id":13},"ballByBall":{"type":"PushBallByBall","id":14},"trend":{"type":"PushBallByBall","id":15}}},"SkuInfo":{"fields":{"skuType":{"type":"int32","id":1},"skuId":{"type":"int32","id":2}}},"PurchaseInfo":{"fields":{"productId":{"type":"int32","id":1},"productIdGoogle":{"type":"string","id":2},"productIdApple":{"type":"string","id":3}}},"Transaction":{"fields":{"transactionId":{"type":"string","id":1},"purchaseInfo":{"type":"PurchaseInfo","id":2},"skuInfo":{"type":"SkuInfo","id":3}}},"TransactionStatus":{"fields":{"transactionId":{"type":"string","id":1},"status":{"type":"int32","id":2},"skuType":{"type":"int32","id":3}}},"Production":{"fields":{"id":{"type":"int32","id":1},"productType":{"type":"int32","id":2},"productIdGoogle":{"type":"string","id":3},"productIdApple":{"type":"string","id":4},"discount":{"type":"string","id":5},"coins":{"type":"int32","id":6},"price":{"type":"string","id":7},"count":{"type":"int32","id":8}}},"Productions":{"fields":{"productions":{"rule":"repeated","type":"Production","id":1}}},"Balance":{"fields":{"coins":{"type":"int32","id":1},"profit":{"type":"int32","id":2}}},"PublicParams":{"fields":{"prefixUrl":{"type":"Url","id":1},"apiPrefix":{"type":"string","id":2},"mqttConfig":{"type":"MqttConfig","id":3},"advCopy":{"type":"string","id":4},"appUpgrade":{"type":"AppUpgrade","id":5},"chatEmojiVer":{"type":"int32","id":6},"menu":{"type":"int32","id":8},"streamConfig":{"type":"StreamConfig","id":7},"isoCode":{"type":"string","id":9},"area":{"type":"int32","id":11},"translatedLanguagesVer":{"type":"int32","id":10},"hotCompetitions":{"rule":"repeated","type":"string","id":12},"vipMenu":{"type":"int32","id":13},"communityArea":{"type":"int32","id":14},"communityUserPostLevel":{"type":"int32","id":15},"downloadLocation":{"type":"string","id":16}},"nested":{"Url":{"fields":{"nation":{"type":"string","id":1},"event":{"type":"string","id":2},"team":{"type":"string","id":3},"player":{"type":"string","id":4},"anchor":{"type":"string","id":5},"user":{"type":"string","id":6},"bkTeam":{"type":"string","id":7},"bkEvent":{"type":"string","id":8},"bkPlayer":{"type":"string","id":9},"honor":{"type":"string","id":10},"bkHonor":{"type":"string","id":11},"fbManager":{"type":"string","id":12},"bkManager":{"type":"string","id":13},"fbReferee":{"type":"string","id":14},"bkReferee":{"type":"string","id":15},"bkTeamBackground":{"type":"string","id":16},"tennisCompetition":{"type":"string","id":17},"tennisTeam":{"type":"string","id":18},"tennisHonor":{"type":"string","id":19},"tennisStandings":{"type":"string","id":20},"tennisCategory":{"type":"string","id":21},"cricketComp":{"type":"string","id":22},"cricketTeam":{"type":"string","id":23},"cricketPlayer":{"type":"string","id":24},"baseballComp":{"type":"string","id":26},"baseballTeam":{"type":"string","id":27},"esportsPrefix":{"type":"string","id":28},"volleyballComp":{"type":"string","id":29},"volleyballTeam":{"type":"string","id":30},"spComp":{"type":"string","id":31},"spTeam":{"type":"string","id":32},"spPlayer":{"type":"string","id":33},"others":{"type":"string","id":34},"post":{"type":"string","id":35},"comment":{"type":"string","id":36}}},"MqttConfig":{"fields":{"transport":{"type":"int32","id":1},"brokerHost":{"type":"string","id":2},"brokerPath":{"type":"string","id":3},"brokerPort":{"type":"int32","id":4},"useSsl":{"type":"int32","id":5}}}}},"AppUpgrade":{"fields":{"url":{"type":"string","id":1},"description":{"type":"string","id":2}}},"StreamConfig":{"fields":{"total":{"type":"int32","id":1},"ids":{"rule":"repeated","type":"string","id":2},"cid":{"type":"int32","id":3}}},"RecommendationItems":{"fields":{"items":{"rule":"repeated","type":"RecommendationCategory","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"sidebars":{"rule":"repeated","type":"RecommendationBar","id":3}}},"RecommendationCategory":{"fields":{"bar":{"type":"RecommendationBar","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"RecommendationBar":{"fields":{"id":{"type":"string","id":1},"name":{"type":"string","id":2}}},"UserTipsterRelation":{"fields":{"relType":{"type":"int32","id":1},"totalFollowers":{"type":"int32","id":2}}},"Tipster":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2},"avatar":{"type":"string","id":3},"countryLogo":{"type":"string","id":4},"description":{"type":"string","id":5},"totalFollowers":{"type":"int32","id":6},"isFollowed":{"type":"bool","id":7},"sports":{"rule":"repeated","type":"int32","id":8},"shareUrl":{"type":"string","id":9},"stats":{"type":"TipsterStats","id":12},"rankings":{"keyType":"int32","type":"TipsterRankings","id":13}}},"TipsterStats":{"fields":{"activeTips":{"type":"int32","id":1},"allTips":{"type":"int32","id":2},"tipsIn_7d":{"type":"int32","id":3},"profitIn_7d":{"type":"float","id":4},"accIn_7d":{"type":"float","id":5},"avgOdds":{"type":"float","id":6},"last_10Profit":{"type":"float","id":8},"last_10Acc":{"type":"float","id":12},"last_15Results":{"rule":"repeated","type":"int32","id":9},"last_10Result":{"rule":"repeated","type":"int32","id":10},"last_15":{"rule":"repeated","type":"int32","id":14},"last_10":{"rule":"repeated","type":"int32","id":15},"dataIn_7dAbsence":{"type":"bool","id":11},"streak":{"type":"int32","id":13},"pointData":{"type":"Point","id":16}},"nested":{"Point":{"fields":{"pointType":{"type":"int32","id":1},"data":{"type":"string","id":2}}}}},"TipsterTotal":{"fields":{"totals":{"keyType":"int32","type":"TipsterStats","id":1}}},"TipsDetail":{"fields":{"id":{"type":"int32","id":1},"tipsterId":{"type":"int32","id":2},"sportId":{"type":"int32","id":3},"matchId":{"type":"string","id":4},"oddOption":{"type":"OddOption","id":5},"price":{"type":"string","id":7},"discountedPrice":{"type":"string","id":19},"isFree":{"type":"int32","id":8},"views":{"type":"int32","id":9},"releaseTime":{"type":"int32","id":10},"oddsType":{"type":"string","id":11},"drew":{"type":"int32","id":12},"result":{"type":"int32","id":13},"result2":{"type":"int32","id":22},"purchaseTime":{"type":"int32","id":14},"shareUrl":{"type":"string","id":15},"soldStatus":{"type":"int32","id":16},"showPaidContent":{"type":"int32","id":17},"paidContent":{"type":"TipsPaidContent","id":18},"menu":{"type":"int32","id":20},"title":{"type":"string","id":21}}},"TipsPaidContent":{"fields":{"id":{"type":"int32","id":1},"oddsType":{"type":"string","id":2},"pick":{"type":"int32","id":3},"comment":{"type":"string","id":4},"langId":{"type":"int32","id":5},"language":{"type":"string","id":6}}},"TipsItem":{"fields":{"id":{"type":"int32","id":1},"item":{"type":"TipsDetail","id":2},"tipster":{"type":"Tipster","id":3},"matches":{"type":"Matches","id":4},"tipsterRanking":{"type":"TipsterRanking","id":5},"tipsterRank":{"type":"TipsterRanking","id":6}}},"TipsList":{"fields":{"pagination":{"type":"Pagination","id":1},"items":{"rule":"repeated","type":"TipsDetail","id":2},"tipsters":{"rule":"repeated","type":"Tipster","id":3},"matches":{"type":"Matches","id":4}}},"TipsterList":{"fields":{"pagination":{"type":"Pagination","id":1},"tipsters":{"rule":"repeated","type":"Tipster","id":2}}},"DrawResultList":{"fields":{"pagination":{"type":"Pagination","id":1},"results":{"rule":"repeated","type":"int32","id":2}}},"OddOption":{"fields":{"oddsType":{"type":"string","id":1},"data":{"rule":"repeated","type":"string","id":2},"v":{"type":"string","id":3}}},"OddOptionList":{"fields":{"list":{"rule":"repeated","type":"OddOption","id":1}}},"MatchTipsTotal":{"fields":{"totals":{"keyType":"string","type":"Item","id":1},"handicapTipsTotal":{"rule":"repeated","type":"Item","id":2}},"nested":{"Item":{"fields":{"all":{"type":"int32","id":1},"won":{"type":"int32","id":2},"draw":{"type":"int32","id":3},"lose":{"type":"int32","id":4},"oddType":{"type":"string","id":5},"handicap":{"type":"string","id":6}}}}},"TipsterRanking":{"fields":{"tipsterId":{"type":"int32","id":1},"tipNum":{"type":"int32","id":2},"hitNum":{"type":"int32","id":3},"hitRate":{"type":"float","id":4},"sellNum":{"type":"int32","id":5},"streak":{"type":"int32","id":6},"tableId":{"type":"int32","id":7},"ranking":{"type":"int32","id":8},"sportId":{"type":"int32","id":9},"profitRate":{"type":"float","id":10}}},"TipsterRankings":{"fields":{"rankings":{"rule":"repeated","type":"TipsterRanking","id":1}}},"TipsterRankingList":{"fields":{"pagination":{"type":"Pagination","id":1},"tipsterRankings":{"rule":"repeated","type":"TipsterRanking","id":2},"tipsters":{"rule":"repeated","type":"Tipster","id":3},"matches":{"type":"Matches","id":4},"matchTipsCount":{"keyType":"string","type":"int32","id":5}}},"TipsterIds":{"fields":{"tipsterIds":{"rule":"repeated","type":"int32","id":1}}},"Favorites":{"fields":{"favMatches":{"keyType":"int32","type":"Item","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"competitions":{"rule":"repeated","type":"Competition","id":3},"players":{"rule":"repeated","type":"Player","id":4},"matchCount":{"type":"int32","id":5},"showHistory":{"type":"int32","id":6},"matches":{"rule":"repeated","type":"Match","id":7},"itemCount":{"type":"int32","id":8},"rmTeamMatchIds":{"rule":"repeated","type":"string","id":9},"countries":{"rule":"repeated","type":"Country","id":10}},"nested":{"Item":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1}}}}},"FavoritesIds":{"fields":{"compIds":{"rule":"repeated","type":"string","id":1},"teamIds":{"rule":"repeated","type":"string","id":2},"matchIds":{"rule":"repeated","type":"string","id":3},"notPushMatchIds":{"rule":"repeated","type":"string","id":4},"playerIds":{"rule":"repeated","type":"string","id":5},"defaultCompIds":{"rule":"repeated","type":"string","id":6},"hasFavTeams":{"type":"int32","id":7},"tipsterIds":{"rule":"repeated","type":"int32","id":8}}},"LoginItem":{"fields":{"token":{"type":"string","id":1},"tokenExpired":{"type":"int64","id":2},"user":{"type":"User","id":3}}},"LoginTypes":{"fields":{"types":{"rule":"repeated","type":"int32","id":1}}},"UserTasks":{"fields":{"tasksStatus":{"rule":"repeated","type":"TaskItem","id":1},"level":{"type":"int32","id":2},"credit":{"type":"int32","id":3},"levelUp":{"type":"bool","id":4}},"nested":{"TaskItem":{"fields":{"taskId":{"type":"int32","id":1},"name":{"type":"string","id":2},"limits":{"type":"int32","id":3},"complete":{"type":"int32","id":4},"finished":{"type":"bool","id":5}}}}},"UserEmojiOrders":{"fields":{"pagination":{"type":"Pagination","id":1},"emojiOrders":{"rule":"repeated","type":"EmojiOrder","id":2}},"nested":{"EmojiOrder":{"fields":{"id":{"type":"int32","id":1},"purchaseTime":{"type":"int64","id":2},"coins":{"type":"int32","id":3}}}}},"DownloadUrl":{"fields":{"ios":{"type":"string","id":1},"android":{"type":"string","id":2},"gp":{"type":"string","id":3},"mode":{"type":"string","id":4}}},"DbCategoryItem":{"fields":{"id":{"type":"uint32","id":1},"name":{"type":"string","id":2},"logo":{"type":"string","id":3},"squareLogo":{"type":"string","id":5},"weight":{"type":"int32","id":4},"competitions":{"rule":"repeated","type":"Competition","id":7}}},"WebHome":{"fields":{"hotComps":{"rule":"repeated","type":"Competition","id":1},"categories":{"rule":"repeated","type":"DbCategoryItem","id":2}}},"TeamMatches":{"fields":{"team":{"type":"Team","id":1},"matches":{"rule":"repeated","type":"Match","id":2}}},"WebTables":{"fields":{"tables":{"rule":"repeated","type":"Table","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"promotions":{"rule":"repeated","type":"Promotion","id":3},"seasons":{"rule":"repeated","type":"Season","id":4},"rules":{"rule":"repeated","type":"Rule","id":5},"teamsMatches":{"rule":"repeated","type":"TeamMatches","id":6},"scopes":{"rule":"repeated","type":"ScopeItem","id":7},"stages":{"rule":"repeated","type":"Stage","id":8},"topPlayers":{"rule":"repeated","type":"PlayerStat","id":9},"players":{"rule":"repeated","type":"Player","id":10}}},"MatchIncidentStats":{"fields":{"incidents":{"type":"MatchIncidents","id":1},"stats":{"type":"MatchStat","id":2}}},"WebMatchData":{"fields":{"match":{"type":"Match","id":1},"incidents":{"type":"MatchIncidents","id":2},"stats":{"type":"MatchStat","id":3},"lineups":{"type":"MatchLineup","id":4},"tables":{"type":"WebTables","id":5},"animation":{"type":"MLive","id":6},"stream":{"type":"Stream","id":7},"esportsStats":{"type":"ESportsMatchStat","id":8}}},"WebHistoryMatches":{"fields":{"matches":{"rule":"repeated","type":"Match","id":1},"teams":{"rule":"repeated","type":"Team","id":4},"comps":{"rule":"repeated","type":"Competition","id":5}}},"WebMatchOddsDetail":{"fields":{"asia":{"rule":"repeated","type":"OddsDetail","id":1},"eu":{"rule":"repeated","type":"OddsDetail","id":2},"bs":{"rule":"repeated","type":"OddsDetail","id":3},"company":{"type":"OddCompany","id":4}}},"WebTeamMap":{"fields":{"topTeams":{"rule":"repeated","type":"Team","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"WebCompMap":{"fields":{"topComps":{"rule":"repeated","type":"Competition","id":1},"comps":{"rule":"repeated","type":"Competition","id":2}}},"WebPlayerMap":{"fields":{"topPlayers":{"rule":"repeated","type":"Player","id":1},"players":{"rule":"repeated","type":"Player","id":2}}},"SeoPlayerTotals":{"fields":{"totalsData":{"type":"PlayerTotalMap","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"comps":{"rule":"repeated","type":"Competition","id":3},"seasons":{"rule":"repeated","type":"Season","id":4},"players":{"rule":"repeated","type":"Player","id":5},"updateTime":{"type":"int32","id":6}}},"SeoBottomTopScore":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1},"comps":{"rule":"repeated","type":"Competition","id":2}}},"SeoBottomItem":{"fields":{"topItems":{"type":"SeoBottomTopScore","id":1},"h2hData":{"type":"Matches","id":2},"hotMatches":{"type":"Matches","id":3}}},"SeoMatch":{"fields":{"h2h":{"type":"SeoMatchesHistory","id":1},"stat":{"type":"MatchStat","id":2},"incident":{"type":"MatchIncidents","id":3},"highlight":{"type":"MatchMedia","id":4},"table":{"type":"WebTables","id":5}}},"SeoLineups":{"fields":{"matchLineups":{"rule":"repeated","type":"Lineup","id":1},"players":{"rule":"repeated","type":"Player","id":2}}},"SeoTransfer":{"fields":{"id":{"type":"int32","id":1},"transferTime":{"type":"int32","id":2},"player":{"type":"Player","id":3},"fromTeam":{"type":"Team","id":4},"toTeam":{"type":"Team","id":5},"marketValue":{"type":"int32","id":6},"marketValueCurrency":{"type":"string","id":7},"transferFee":{"type":"int32","id":8},"transferCurrency":{"type":"string","id":9},"transferType":{"type":"int32","id":10},"freeAgent":{"type":"int32","id":11}}},"SeoTransfers":{"fields":{"transfers":{"rule":"repeated","type":"SeoTransfer","id":1},"players":{"rule":"repeated","type":"Player","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"comps":{"rule":"repeated","type":"Competition","id":4},"pagination":{"type":"Pagination","id":5},"year":{"type":"int32","id":6},"comp":{"type":"Competition","id":7},"team":{"type":"Team","id":8},"player":{"type":"Player","id":9}}},"PlayerPk":{"fields":{"players":{"rule":"repeated","type":"Player","id":1},"match":{"type":"Match","id":2},"playersInfo":{"rule":"repeated","type":"Info","id":3},"playerHonors":{"rule":"repeated","type":"PlayerHonorItems","id":4},"honors":{"rule":"repeated","type":"HonorItem","id":5},"teams":{"rule":"repeated","type":"Team","id":6},"competitions":{"rule":"repeated","type":"Competition","id":7},"totals":{"rule":"repeated","type":"PlayerTotal","id":8},"countries":{"rule":"repeated","type":"Country","id":9},"h2h":{"rule":"repeated","type":"Match","id":10},"homeFuture":{"rule":"repeated","type":"Match","id":11},"awayFuture":{"rule":"repeated","type":"Match","id":12},"pk":{"rule":"repeated","type":"Match","id":13}},"nested":{"HistoryTeam":{"fields":{"team":{"type":"Team","id":1},"year":{"type":"string","id":2}}},"Info":{"fields":{"player":{"type":"Player","id":1},"info":{"keyType":"int32","type":"string","id":2},"historyTeams":{"rule":"repeated","type":"HistoryTeam","id":3}}}}},"PlayerPkItems":{"fields":{"pkItems":{"rule":"repeated","type":"PlayerPkItem","id":1},"players":{"rule":"repeated","type":"Player","id":2}},"nested":{"PlayerPkItem":{"fields":{"home":{"type":"Player","id":1},"away":{"type":"Player","id":2}}}}},"SeoMatchesHistory":{"fields":{"home":{"rule":"repeated","type":"Match","id":1},"away":{"rule":"repeated","type":"Match","id":2},"h2h":{"rule":"repeated","type":"Match","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"comps":{"rule":"repeated","type":"Competition","id":5},"homeFuture":{"rule":"repeated","type":"Match","id":6},"awayFuture":{"rule":"repeated","type":"Match","id":7},"matchTotals":{"type":"H2HDetail","id":8},"h2hFuture":{"rule":"repeated","type":"Match","id":9},"venues":{"rule":"repeated","type":"Venue","id":10},"teamTotals":{"rule":"repeated","type":"TeamTotalItem","id":12},"goalDistributions":{"rule":"repeated","type":"GoalDistribution","id":13},"season":{"type":"Season","id":14},"t":{"type":"int32","id":15},"match":{"type":"Match","id":16},"animation":{"type":"MLive","id":17},"countries":{"rule":"repeated","type":"Country","id":18},"standingData":{"type":"TeamsStanding","id":19},"players":{"rule":"repeated","type":"Player","id":20},"oddsResult":{"rule":"repeated","type":"TeamMatchOddsResult","id":21},"playersInjury":{"type":"TeamInjury","id":22},"extra":{"type":"Extra","id":30}}},"H2HDetail":{"fields":{"total":{"type":"int32","id":1},"homeWon":{"type":"int32","id":2},"awayWon":{"type":"int32","id":3},"draw":{"type":"int32","id":4},"homeTeamWon":{"type":"int32","id":5},"homeTeamLose":{"type":"int32","id":6},"homeTeamDraw":{"type":"int32","id":7},"awayTeamWon":{"type":"int32","id":8},"awayTeamLose":{"type":"int32","id":9},"awayTeamDraw":{"type":"int32","id":10},"intro":{"type":"string","id":13},"t":{"type":"int32","id":14},"names":{"rule":"repeated","type":"string","id":15},"homeGoals":{"type":"int32","id":16},"awayGoals":{"type":"int32","id":17},"compDetail":{"type":"CompMatchDetail","id":11},"extremumMatches":{"type":"ExtremumMatchData","id":12}},"nested":{"CompMatchDetail":{"fields":{"compCount":{"keyType":"string","type":"Item","id":1},"compsMatchCount":{"rule":"repeated","type":"Item","id":2},"h2hStats":{"rule":"repeated","type":"StatsDetail","id":3}},"nested":{"Item":{"fields":{"t":{"type":"int32","id":1},"h":{"type":"int32","id":2},"a":{"type":"int32","id":3},"d":{"type":"int32","id":4},"competitionId":{"type":"string","id":5},"kind":{"type":"int32","id":6}}},"StatsDetail":{"fields":{"competitionIds":{"rule":"repeated","type":"string","id":5},"kind":{"type":"int32","id":6},"stats":{"keyType":"int32","type":"string","id":7}}}}},"ExtremumMatchData":{"fields":{"extremumItems":{"rule":"repeated","type":"Item","id":1}},"nested":{"Item":{"fields":{"dt":{"type":"string","id":1},"match":{"type":"Match","id":2}}}}}}},"TeamsStanding":{"fields":{"standings":{"rule":"repeated","type":"TeamStanding","id":1}},"nested":{"TeamStanding":{"fields":{"team":{"type":"Team","id":1},"season":{"type":"Season","id":2},"detail":{"keyType":"int32","type":"string","id":3},"result":{"rule":"repeated","type":"int32","id":4},"homeResult":{"rule":"repeated","type":"int32","id":5},"awayResult":{"rule":"repeated","type":"int32","id":6}}}}},"OddsResult":{"fields":{"all":{"rule":"repeated","type":"int32","id":1},"home":{"rule":"repeated","type":"int32","id":2},"away":{"rule":"repeated","type":"int32","id":3}}},"TeamMatchOddsResult":{"fields":{"team":{"type":"Team","id":1},"atsResult":{"type":"OddsResult","id":2},"ouResult":{"type":"OddsResult","id":3},"atsTotal":{"type":"OddsResult","id":4},"ouTotal":{"type":"OddsResult","id":5},"matchesOddResult":{"rule":"repeated","type":"MatchOddResult","id":6}},"nested":{"MatchOddResult":{"fields":{"match":{"type":"Match","id":1},"ats":{"type":"int32","id":2},"bs":{"type":"int32","id":3},"eu":{"type":"int32","id":4}}}}},"Extra":{"fields":{"listExtra":{"keyType":"string","type":"ListExtra","id":1},"extraData":{"keyType":"string","type":"string","id":2},"bestPlayers":{"rule":"repeated","type":"Player","id":3},"bestPlayersMap":{"keyType":"string","type":"Players","id":4}},"nested":{"ListExtra":{"fields":{"values":{"rule":"repeated","type":"string","id":1}}}}},"Host":{"fields":{"name":{"type":"string","id":1},"slug":{"type":"string","id":2},"logo":{"type":"string","id":3},"season":{"type":"Season","id":4}}},"Hosts":{"fields":{"hosts":{"rule":"repeated","type":"Host","id":1}}},"Winners":{"fields":{"id":{"type":"int32","id":1},"year":{"type":"string","id":2},"host":{"type":"string","id":3},"winner":{"type":"Team","id":4},"runnerUp":{"type":"Team","id":5},"thirdPlace":{"type":"Team","id":6},"fourthPlace":{"type":"Team","id":7},"season":{"type":"Season","id":8},"venuesCount":{"type":"int32","id":9}}},"Awards":{"fields":{"awards":{"rule":"repeated","type":"Award","id":1}},"nested":{"Award":{"fields":{"type":{"type":"int32","id":1},"year":{"type":"string","id":2},"player":{"type":"Player","id":3},"team":{"type":"Team","id":4},"age":{"type":"int32","id":5},"matchesPlayed":{"type":"int32","id":6},"goalsScored":{"type":"int32","id":7}}}}},"WorldCupHistory":{"fields":{"hosts":{"rule":"repeated","type":"Host","id":1},"winners":{"rule":"repeated","type":"Winners","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"awards":{"keyType":"int32","type":"Awards","id":4},"countries":{"rule":"repeated","type":"Country","id":5},"players":{"rule":"repeated","type":"Player","id":6}}},"TableTeamMatches":{"fields":{"team":{"type":"Team","id":1},"matches":{"rule":"repeated","type":"Match","id":2}}},"Stadiums":{"fields":{"id":{"type":"int32","id":1},"name":{"type":"string","id":2},"capacity":{"type":"int32","id":3},"city":{"type":"string","id":4},"country":{"type":"string","id":5},"construction":{"type":"string","id":7},"cost":{"type":"string","id":8},"design":{"type":"string","id":9},"inauguration":{"type":"string","id":10},"countryData":{"type":"Country","id":11},"logo":{"type":"string","id":12},"extra":{"type":"bytes","id":15}}},"PcDbTables":{"fields":{"competition":{"type":"Competition","id":1},"tables":{"rule":"repeated","type":"Table","id":2},"teamMatches":{"rule":"repeated","type":"TableTeamMatches","id":3},"promotions":{"rule":"repeated","type":"Promotion","id":4},"rules":{"rule":"repeated","type":"Rule","id":5}}},"WorldCupSeasonData":{"fields":{"competition":{"type":"Competition","id":1},"season":{"type":"Season","id":2},"matches":{"rule":"repeated","type":"Match","id":3},"teams":{"rule":"repeated","type":"Team","id":4},"tables":{"rule":"repeated","type":"Table","id":5},"stages":{"rule":"repeated","type":"Stage","id":6},"promotions":{"rule":"repeated","type":"Promotion","id":7},"teamMatches":{"rule":"repeated","type":"TableTeamMatches","id":8},"stadiums":{"rule":"repeated","type":"Stadiums","id":9},"countries":{"rule":"repeated","type":"Country","id":10}}},"WorldCupTeams":{"fields":{"competition":{"type":"Competition","id":1},"teams":{"rule":"repeated","type":"Team","id":2}}},"WorldCupTeamsLineups":{"fields":{"competition":{"type":"Competition","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"players":{"rule":"repeated","type":"Player","id":3}}},"WorldCupShareData":{"fields":{"lineups":{"type":"string","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"picture":{"type":"string","id":3}}},"WebDbCompInfo":{"fields":{"competition":{"type":"Competition","id":1},"seasons":{"rule":"repeated","type":"Season","id":2},"bestLineups":{"type":"BestLineups","id":4},"prevChampionTeam":{"type":"Team","id":5},"championTeams":{"rule":"repeated","type":"Team","id":6},"highLevelComps":{"rule":"repeated","type":"Competition","id":9},"lowLevelComps":{"rule":"repeated","type":"Competition","id":10},"relatedComps":{"rule":"repeated","type":"Competition","id":11},"mostSalaryPlayer":{"type":"Player","id":14},"homeWon":{"type":"float","id":15},"awayWon":{"type":"float","id":16},"draw":{"type":"float","id":17},"teamsCount":{"type":"int32","id":18},"teamsMarketValue":{"type":"string","id":19},"teamsForeignPlayers":{"type":"int32","id":20},"totalPlayer":{"type":"int32","id":21},"menu":{"type":"int32","id":22},"promoteTeams":{"rule":"repeated","type":"Team","id":23},"dropTeams":{"rule":"repeated","type":"Team","id":24},"fbExtra":{"type":"FbExtra","id":12},"bkExtra":{"type":"BkExtra","id":13}},"nested":{"FbExtra":{"fields":{"promoteTeams":{"rule":"repeated","type":"Team","id":11},"dropTeams":{"rule":"repeated","type":"Team","id":12},"topPlayers":{"rule":"repeated","type":"Player","id":1},"avgAge":{"type":"string","id":2},"homeWon":{"type":"float","id":4},"awayWon":{"type":"float","id":5},"draw":{"type":"float","id":6},"avgGoals":{"type":"string","id":7},"teamsCount":{"type":"int32","id":8},"teamsMarketValue":{"type":"string","id":9},"teamsForeignPlayers":{"type":"string","id":10},"totalPlayer":{"type":"int32","id":13},"redCards":{"type":"string","id":14},"yellowCards":{"type":"string","id":15},"teamIds":{"type":"string","id":16}}},"BkExtra":{"fields":{"avgAge":{"type":"string","id":1},"teamIds":{"type":"string","id":2},"recentMatch":{"type":"Match","id":3}}}}},"WebDbComp":{"fields":{"compDetail":{"type":"WebDbCompInfo","id":1},"matches":{"rule":"repeated","type":"Match","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"stages":{"rule":"repeated","type":"Stage","id":4},"playerTotals":{"rule":"repeated","type":"PlayerStat","id":5},"tables":{"type":"WebTables","id":6},"players":{"rule":"repeated","type":"Player","id":7},"compHonors":{"type":"CompTeamHonor","id":8},"scopes":{"rule":"repeated","type":"ScopeItem","id":9},"conferences":{"rule":"repeated","type":"ConferenceItem","id":10},"venues":{"rule":"repeated","type":"Venue","id":11}}},"DbCompTotal":{"fields":{"teamTotals":{"rule":"repeated","type":"TeamTotal","id":1},"playerTotals":{"rule":"repeated","type":"PlayerStat","id":2},"players":{"rule":"repeated","type":"Player","id":3},"teams":{"rule":"repeated","type":"Team","id":4}}},"NewCompTotal":{"fields":{"compDetail":{"type":"WebDbCompInfo","id":1},"totals":{"rule":"repeated","type":"PlayerTotal","id":3},"players":{"rule":"repeated","type":"Player","id":4},"teams":{"rule":"repeated","type":"Team","id":5},"scopes":{"rule":"repeated","type":"ScopeItem","id":6}}},"DbCompTransfers":{"fields":{"compTransfers":{"rule":"repeated","type":"TeamTransfer","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"players":{"rule":"repeated","type":"Player","id":3},"transferIncome":{"type":"string","id":4}},"nested":{"TeamTransfer":{"fields":{"team":{"type":"Team","id":1},"transferFrom":{"rule":"repeated","type":"Transfer","id":2},"transferTo":{"rule":"repeated","type":"Transfer","id":3},"transferIncome":{"type":"string","id":4}}}}},"DbCompTeams":{"fields":{"teams":{"rule":"repeated","type":"Team","id":1}}},"WebDbPlayer":{"fields":{"player":{"type":"Player","id":1},"playerTransfers":{"rule":"repeated","type":"Transfer","id":2},"teams":{"rule":"repeated","type":"Team","id":3},"playerMatches":{"type":"Matches","id":4},"playerHonors":{"type":"PlayerHonor","id":5},"playerTotals":{"type":"PlayerTotalItems","id":6},"playerInjuries":{"rule":"repeated","type":"Injury","id":7},"relatedPlayers":{"rule":"repeated","type":"Player","id":8},"menu":{"type":"int32","id":9},"matches":{"rule":"repeated","type":"Match","id":10},"competitions":{"rule":"repeated","type":"Competition","id":11},"stages":{"rule":"repeated","type":"Stage","id":12},"extra":{"type":"string","id":13}}},"WebDbBkPlayer":{"fields":{"player":{"type":"Player","id":1},"teams":{"rule":"repeated","type":"Team","id":2},"competitions":{"rule":"repeated","type":"Competition","id":3},"matches":{"rule":"repeated","type":"Match","id":4},"totals":{"rule":"repeated","type":"PlayerTotal","id":5},"scopes":{"rule":"repeated","type":"ScopeItem","id":6},"seasons":{"rule":"repeated","type":"Season","id":7},"menu":{"type":"int32","id":8},"venues":{"rule":"repeated","type":"Venue","id":9}}},"WebDbSeasonSalary":{"fields":{"salary":{"type":"Salary","id":1},"team":{"type":"Team","id":2},"comp":{"type":"Competition","id":3}}},"WebDbPlayerSalary":{"fields":{"player":{"type":"Player","id":1},"seasonSalaries":{"rule":"repeated","type":"WebDbSeasonSalary","id":2},"topPlayers":{"rule":"repeated","type":"Player","id":3},"otherPlayers":{"rule":"repeated","type":"Player","id":4},"comp":{"type":"Competition","id":5}}},"WebDbTeam":{"fields":{"team":{"type":"Team","id":1},"matches":{"rule":"repeated","type":"Match","id":2},"lastMonthMatches":{"rule":"repeated","type":"Match","id":19},"teamTable":{"type":"Table","id":3},"teamTotals":{"rule":"repeated","type":"TeamTotalItem","id":4},"playerTotals":{"rule":"repeated","type":"PlayerStat","id":5},"teamInjury":{"rule":"repeated","type":"Injury","id":6},"goalDistribution":{"type":"GoalDistribution","id":7},"players":{"rule":"repeated","type":"Player","id":8},"comps":{"rule":"repeated","type":"Competition","id":9},"teams":{"rule":"repeated","type":"Team","id":10},"matchLineup":{"type":"Lineup","id":11},"teamLineups":{"type":"TeamLineup","id":12},"teamPlayerTotals":{"rule":"repeated","type":"PlayerStat","id":13},"teamHonors":{"type":"TeamHonor","id":15},"relatedTeams":{"rule":"repeated","type":"Team","id":16},"recentMatch":{"type":"Match","id":17},"lastMatch":{"type":"Match","id":18},"venues":{"rule":"repeated","type":"Venue","id":23},"fbExtra":{"type":"FbExtra","id":20},"bkExtra":{"type":"BkExtra","id":21},"menu":{"type":"int32","id":22}},"nested":{"FbExtra":{"fields":{"avgAge":{"type":"string","id":1},"year":{"type":"string","id":2},"hasTransfer":{"type":"int32","id":3}}},"BkExtra":{"fields":{"matches":{"type":"int32","id":1},"points":{"type":"int32","id":2},"pointsAgainst":{"type":"int32","id":3},"rebounds":{"type":"int32","id":4},"assists":{"type":"int32","id":5}}}}},"WebDbTeamPlayerTotal":{"fields":{"team":{"type":"Team","id":1},"totals":{"rule":"repeated","type":"PlayerTotal","id":2},"players":{"rule":"repeated","type":"Player","id":3},"scopes":{"rule":"repeated","type":"ScopeItem","id":5},"bkExtra":{"type":"BkExtra","id":10},"menu":{"type":"int32","id":22}},"nested":{"BkExtra":{"fields":{"matches":{"type":"int32","id":1},"points":{"type":"int32","id":2},"pointsAgainst":{"type":"int32","id":3},"rebounds":{"type":"int32","id":4},"assists":{"type":"int32","id":5}}}}},"WebDbTeamSalary":{"fields":{"playerSalaries":{"rule":"repeated","type":"WebDbPlayerSalary","id":1},"otherTeams":{"rule":"repeated","type":"Team","id":2}}}}}}}}}}}'
      );
    },
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/default-team.2e6c42b.png";
    },
    ,
    function (e, t, n) {
      e.exports = n.p + "img/leaguesDefault.a47f2b2.png";
    },
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/logo.948162c.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAq1BMVEUAAADz+//y+//////z+//y+v/z+v/z+//z+//z+v/0+//z/P/4///z///y+v/c5/T79e7u9v54krz269/m7/nj7vjs9fzf6vbr8fjp8Pfp8vvt6uiDm8G8xdewvNKfsMt8lr7z9fXO2OePpMbu7/Dy7uvn5uemt9Gks8yUqMmZq8jz+Pvc5vDY4u/18On17ubi4uXE0eXw6eLEzNq2xdrY2uDN0t3W09S+ws6rjEyiAAAADnRSTlMAgPML6NnTv6qlclIjFjy9diYAAAH+SURBVDjLnZXpeqsgEEDV7NsgCGLUGNM0a3vb3rZ3ef8nKxBwoPvX80vhMAMIYxQyn05GgyQZjCbTefQhi3gICqoAxTBevKv14gQgF8QicoAk7r31Zn2gXAu8zPOSC/1IoT977cUA3IRxmGEcIA7TjoFKHSGACiIpjP30Y8gJwWio6taxn5fqsRfEYXt6ps6UJMfsM+3ZHn5ihsapklCY2Qn2zZvhV8ssdd5lh37PJuYktx5DanAmvyRfJECEbTywdmus9ZGxKzdpQpOFDUjt4Jo9pNVTs3pI07/s3IUUJuQQA96yVdpxZNQtkMBQnRfIux28qlNkz3gXsoR5NNUDnLhOPWqXSKecRhOQohMbXzxx6JYDk2gExDVssp0vVtkGJzmKBihmWRqQ3duOktBBlKipfiRmYNDLTT4V7zzRT31zH4p3N15qXIxmta6cpR4BvMUE2wPP7MmJdbsBf3uCDQfZ1vuL17ADgL/h+AkNv1m72qe7P2e2NY34Ce2hQLNmhrVpw0OBx8xR/T9uz80/N0E8ZnhwDWWVGa5LgODghleB82JnxUKU3lUILxcVxXJ5fRHV01Lg5QquK5WqV5JH7VVEvRQSr6tXALSnq9Tto/YUBS8EFgAsKbqDBKgEWFK8IiWd55BLLFJh2XtFWPbCQopgIf1Zaf662H/79/ECjIFUYeI1OcEAAAAASUVORK5CYII=";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(6), n(26);
      var o = n(187),
        r = n
          .n(o)
          .a.create({
            withCredentials: !0,
            baseURL: "https://api.aiscore.com",
          });
      (r.defaults.timeout = 3e4),
        r.interceptors.request.use(
          function (e) {
            return e.headers && e.headers.Location && console.error(e), e;
          },
          function (e) {
            return Promise.reject(e);
          }
        ),
        r.interceptors.response.use(
          function (e) {
            return e;
          },
          function (e) {
            return Promise.reject(e);
          }
        ),
        (t.default = r);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAbCAYAAAAeXEH3AAAAAXNSR0IArs4c6QAAAupJREFUeAHtnL+LE0EUxy9GE5uAWAinWAg2KjayCYog1wpWCsoVIigkISRgp6BCwD/AwphfpZWFciAERAThtNCYCAp2FlYJIsIVNpeffvdkw+ze7mbTms/CZGbevDfFB7682TdJVlYWeMrl8t4F3HGFwNIT2BOVQD6fz/X7/c1sNrsaNQY/CCw7gVgUABLX+clk8la++9R68Xj8Sq1W+xAlFh8ILDOBuRlM4joynU6fC5ItLvs5LLFt6Li4/9+UTwhAIIhAaAYrlUrJwWCwKYFlnA1isdhE84vNZvO1Y6OHAAT8CYRmMImrZorL3kLzu4jLHyZWCHgJBGYwHQ2LOgo+9gQ8k7jWPTamEIBAAAHfDJbL5S4oUz0yY3Q0/KL5LdPGGAIQCCewK4MVCoWj4/G4I4EdckIlrt9qVr1e/+HY6CEAgfkEXBnMrgxKXBumuLTFWO0a4poPEw8IeAm4MpgukZ/K4brppMz1QIKrmzbGEIBANAIzgUlctxXieu+KtgVeEIBAEIEdgaliuKaK4Rs5xYMcsUMAAosT2HkH01efegr9s3g4ERCAQBiB2RFRWeySsthLOc9sGm+r/QzbgDUIQCCYgCmmFd1/3VdB46HHvaHL5bzHxhQCEIhAwPXO1el03rVardOKO2HEWul0uqe1z4aNIQQgEIGA6x5MJfmp3sduKO6bGaujY0XZ7ZxpYwwBCMwn4DoiOu76Nsfx0Wj0SfMDjk19P5FIWJVKxS6I8EAAAhEIuDKY41+tVr8rm62rTRyb+tXhcPjC/gmLYWMIAQiEEPAVmO3faDReqeBxz4zV/Kx+wvLEtDGGAASCCbiKHF63brf73rKsk7KfMtbOyPZLa/YRkgcCEAghEJjBnJhUKnVT46/O3O6Vye7wlwEmEcYQ8CfgW+TwuhaLxWM6GnZkP6j2UcWOyxQ7vJSYQ2A3gdAjouPebre3MpmMfQ+2nUwmr0pcW84aPQQgAAEIQAACEIDA/0bgLzdDzcHMKKHuAAAAAElFTkSuQmCC";
    },
    function (e, t, n) {
      e.exports = n.p + "img/nodata.4f98076.png";
    },
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3),
        r = n(13),
        l = n(7);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : c(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        FETCH_COMPS_DATA: function (e, t) {
          var n = e.commit,
            o = t.activeTab.toLowerCase();
          return Object(l.l)(
            d(
              d({}, t),
              {},
              {
                season_id:
                  "transferstab" == o || "archivetab" == o ? "" : t.season_id,
              }
            )
          ).then(function (e) {
            return "statstab" == t.activeTab.toLowerCase()
              ? (n("SET_COMPS_DATA", e, { root: !1 }),
                Object(l.m)({
                  lang: t.lang,
                  season_id: t.season_id
                    ? t.season_id
                    : Object(r.isNull)(e, "compDetail.competition.curSeasonId"),
                  team_id: "",
                  type: 3,
                  n: 1,
                }).then(function (t) {
                  return n("SET_PLAYER_STATS", t, { root: !1 }), e;
                }))
              : "transferstab" == t.activeTab.toLowerCase()
              ? (n("SET_COMPS_DATA", e),
                Object(l.r)({
                  lang: t.lang,
                  comp_id: t.comp_id,
                  team_id: "",
                  date: t.season_id ? t.season_id : new Date().getFullYear(),
                }).then(function (t) {
                  return n("SET_COMPS_TRANSFERS", t, { root: !1 }), e;
                }))
              : (n("SET_COMPS_DATA", e, { root: !1 }), e);
          });
        },
        FETCH_COMPS_TEAM_STATS: function (e, t) {
          var n = e.commit;
          return Object(l.n)(t).then(function (e) {
            return n("SET_PLAYER_STATS", e, { root: !1 });
          });
        },
        FETCH_COMPS_PLAYER_STATS: function (e, t) {
          var n = e.commit;
          return Object(l.m)(t).then(function (e) {
            return n("SET_PLAYER_STATS", e, { root: !1 });
          });
        },
        FETCH_COMPS_TRANSFERS: function (e, t) {
          var n = e.commit;
          return Object(l.r)(t).then(function (e) {
            return n("SET_COMPS_TRANSFERS", e, { root: !1 });
          });
        },
        SET_SEASON_ID: function (e, t) {
          return (0, e.commit)("SET_SEASON_ID", t);
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(18), n(20);
      var o = n(0);
      t.default = {
        SET_TEAM_STATS: function (e, t) {
          var n = {};
          (n.teamsObj = o.a.array_to_object(t.teams || [])),
            (e.playerStats = Object.assign({}, t, n));
        },
        SET_COMPS_TRANSFERS: function (e, t) {
          var n = {};
          (n.playersObj = o.a.array_to_object(t.players)),
            (n.teamsObj = o.a.array_to_object(t.teams)),
            (n._isVue = !0),
            (e.transfers = Object.assign({}, t, n));
        },
        SET_SEASON_ID: function (e, t) {
          e.season_id = t;
        },
        SET_PLAYER_STATS: function (e, t) {
          var n = {};
          (n.playersObj = o.a.array_to_object(t.players || [])),
            (n.teamsObj = o.a.array_to_object(t.teams || [])),
            (e.playerStats = Object.assign({}, t, n));
        },
        SET_COMPS_DATA: function (e, t) {
          if (t) {
            var n,
              r,
              l = o.a.array_to_object(t.teams),
              c = o.a.array_to_object(t.players),
              d = o.a.array_to_object(t.playerTotals, "type");
            if (location.href.includes("isplugin=true"))
              e.season_id =
                null === (n = t.compDetail) ||
                void 0 === n ||
                null === (r = n.competition) ||
                void 0 === r
                  ? void 0
                  : r.curSeasonId;
            var m = t.tables && t.tables.teamsMatches;
            if (m && m.length) {
              var h = {};
              m.forEach(function (e) {
                h[e.team.id] = {
                  extraStr: o.a.ab2str(e.team.extra),
                  matches: e.matches,
                };
              }),
                (t.tables = Object.assign({}, t.tables, {
                  teamsMatchesObj: h,
                }));
            }
            var f = t.compDetail && t.compDetail.prevChampionTeam;
            f && f.extra
              ? (f = Object.assign({}, f, {
                  extraStr: JSON.parse(o.a.ab2str(f.extra)),
                }))
              : (t.prevChampionTeam = {});
            var y = t.compDetail && t.compDetail.championTeams,
              v = [];
            y &&
              y.forEach(function (e) {
                v.push({ id: e.id, extraStr: JSON.parse(o.a.ab2str(e.extra)) });
              }),
              t.compDetail &&
                !t.compDetail.fbExtra &&
                (t.compDetail.fbExtra = {}),
              (t.compDetail = Object.assign({}, t.compDetail, {
                prevChampionTeam: f,
                championTeams: v,
              })),
              (e.data = Object.assign({}, t, {
                teamObj: l,
                playerObj: c,
                playerTotalsObj: d,
              }));
          }
          return t || {};
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/default-nation.a34e72f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/default-match.d0bc142.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(8),
        n(138),
        n(10),
        n(63),
        n(142),
        n(14),
        n(54),
        n(55),
        n(6),
        n(18),
        n(20);
      var o = n(19);
      function r(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return l(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          d = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (d = !0), (r = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (d) throw r;
            }
          },
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var c =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        d =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          },
        m =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (e) {
            e.forEach(function (e) {
              var t = e.intersectionRatio,
                link = e.target;
              t <= 0 || link.__prefetch();
            });
          });
      t.a = {
        name: "NuxtLink",
        extends: o.default.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = c(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          d(this.handleId),
            this.__observed &&
              (m.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            m &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              m.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var e = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (e && ((e.effectiveType || "").includes("2g") || e.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (e) {
                return e.components.default;
              })
              .filter(function (e) {
                return "function" == typeof e && !e.options && !e.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              m.unobserve(this.$el);
              var e,
                t = r(this.getPrefetchComponents());
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value,
                    o = n();
                  o instanceof Promise && o.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
        },
      };
    },
    function (e, t, n) {
      e.exports = n.p + "img/noData.8ad988c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/banner.dd0e2ed.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAn9JREFUaEPVmctqFUEQhr//Bdy4c+vKt3AvCC6MinghBBUvUQleIiKIqDFIvCMiwQsiSdwIPoDvICguxIW4dqEPUNJwjozn9JlMz1QNnFkO0z3f113dU10jpvzSlPMTKmBml4HbwFNgSdKPNgNmZruA48A2YFbSp2E/YQJmtgHsrQAvS7pUKmBm+4C1SrtfkraGCmTg0/veSZopETCzA8DbTJvtkr6n++4zMAE+vWtO0mpTATM7CLzJPL8uaX/IDNTAF42+mR0GXmXgPwMzkr64CzjCHwVeNIF3CyFH+FkgF2ZjI+82A47wc8DzpiPvIuAIfwx4VgrfKYQc4U8MPnSj/BPDpvpgq23UEf4U8LjNyLcOIUf4M8DDLvDFIeQIfxa43xW+SMAR/jyw4gHfWMARfgG46wXfSMAR/gKw7Am/qYAjfEqjl7zhawUc4a8ANyPgJwo4wl8FbkTBZwUc4a8B1yPhxwTMLOUjKS8ZvUrz+XPAvWj4/wTMbCfwsSt8am9mqZ/UX/VqlNtk3l97618uNPUCg5HzCqGiU1XpqFefH8tGp3oRD80cJfrfRgMkFoFbUTtS7YHGcSb6TyUCZqL/ZC5Aov90OkCi/wNNgMQ88MBjYRdXJRwX9mngUVeJYoHBF3u09j/kKE36TgJPuki0EnCW6L+wFbAm+i8tBkj0X9wNkOi/vB4gcQR42XRht17EuRzecYs9BLxuIuEqsMnuNC8pt+9nzzM1P/k+SNo9bOQuUCPxXtKektNXzW/WHZK+pr5CBCZILErKVedqnTI/uv9I2hI6A5WFfQe4OCixrEj6WTIDlX5SyKR+fgMpFL/1ItAGtrRNWAiVgrR9/i9yON9AyIXQSQAAAABJRU5ErkJggg==";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAjNJREFUaEPt2d+HVVEYxvHv+590NRdFt93OH9GMlNEUiUhUSmQYkahIRCIlJRqVSBKZEmkiqbnIGCpJEkmSSHqyeWP3VnP2OWf/mDfty3POWvv5nL3W3vtdy0h+WPL8/JsASaNmdmfYqyNptZk9Hbafpdr/cgUkjQBXgFXAHLDJzJ4NEkDSEWAX8BLYY2Yzg/TTq00ETAJnSo3mgTEzW+jVUfxe0gtgRenz8SYQEbAGeBDCPHHEYj8ISeeBDaFN7YjfJrGkKWA6nPgxsNbMnldFSFoJXPLhWG5WK+KPdyFJ+4EDIewjRxRjutLRBuKvt1FJ+4CDIelDH06vKgmAphFLPgck7QUOhbDFHCkm9uvlgOj5IJO0Gzgcwt53xJuuET0BRUBJO4GjIew9oJiQb7tEVAI4YgdwLIS964h3XSEqAxyxHTgews76cHrfBaIvgCO2ASdC2NuO+NA2om+AI7YCJ0PYWz6cPraJGAjgiC3AqRD2piM+tYUYGOCIzcDpEPaGIz63gRgK4IiNwNkQ9rojvjSNGBrgiAngXAh7zRFfm0TUAnDEeuBCCHvVEd+aQtQGcMQ64GIIe9kR35tA1ApwxJjXAeW8M2Y2XhXg/VSqJ2oFSMp7BSTlnQOS8t6FJOV9DkjK+ySWlPddSFLet1FJeesBSXkrMkl5a+LUqxKp14VSr8ylXhtNvTqden9AUu4dGknp98hy71L+rFnT7hP3U3Qvl9/WWtR3gfoP6OJfL5/zB2HDvkC4tABUAAAAAElFTkSuQmCC";
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = n(7);
      t.default = {
        SET_MOBILE_INFO: function (e, data) {
          return (0, e.commit)("SET_MOBILE_INFO", data);
        },
        CHANGE_ODDS: function (e, t) {
          (0, e.commit)("CHANGE_ODDS", t);
        },
        SET_LANG: function (e, t) {
          (0, e.commit)("SET_LANG", t);
        },
        SET_TIMEZONE: function (e, t) {
          (0, e.commit)("SET_TIMEZONE", t);
        },
        setServerTime: function (e, data) {
          return (0, e.commit)("setServerTime", data);
        },
        UPDATE_ONLINE_STATUS: function (e, t) {
          return (0, e.commit)("UPDATE_ONLINE_STATUS", t);
        },
        proModuleMutation: function (e, data) {
          return (0, e.commit)("proModuleMutation", data);
        },
        setMatchesFuture: function (e, t) {
          e.commit, e.state;
        },
        setLayHide: function (e, t) {
          var n = e.commit;
          e.state;
          return n("setLayHide", t);
        },
        setPageSize: function (e, t) {
          (0, e.commit)("setPageSize", t);
        },
        getoddsList: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(r.fb)(t);
                    case 3:
                      (l = n.sent), o("set_oddsList", l);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getOddsDetail: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return e.commit, (n.next = 3), Object(r.Q)(t);
                    case 3:
                      return (o = n.sent), n.abrupt("return", o);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        MatchCountAction: function () {
          return Object(o.a)(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(r.cb)();
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        getAdsData: function (e) {
          return Object(o.a)(
            regeneratorRuntime.mark(function t() {
              var n, o, l, time, c, d;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e.commit), (o = e.state).isSendAdvs)) {
                        t.next = 16;
                        break;
                      }
                      if (
                        (n("set_isSendAdvs", !0),
                        (l = JSON.parse(localStorage.getItem("advsData"))),
                        (time = new Date().getTime()),
                        (c = {}),
                        l && !(time - l.time > 12e4))
                      ) {
                        t.next = 14;
                        break;
                      }
                      return (t.next = 9), Object(r.A)({ lang: o.lang });
                    case 9:
                      (c = t.sent),
                        (d = { time: new Date().getTime(), data: c }),
                        localStorage.setItem("advsData", JSON.stringify(d)),
                        (t.next = 15);
                      break;
                    case 14:
                      c = l.data;
                    case 15:
                      n("set_advsData", c);
                    case 16:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        getTimeData: function (e) {
          return Object(o.a)(
            regeneratorRuntime.mark(function t() {
              var n, o, l;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e.commit), (o = e.state).isSendTime)) {
                        t.next = 9;
                        break;
                      }
                      return (
                        n("set_isSendTime", !0), (t.next = 5), Object(r.F)()
                      );
                    case 5:
                      (l = t.sent),
                        n("set_cidData", l.data),
                        n("setServerTime", {
                          cid: l.data.cid,
                          time: l.data.time,
                        }),
                        "football" !== o.proModule &&
                          "APP" !== o.proModule &&
                          (n("basketball/set_cid", l.data.cid),
                          n("basketball/getServerTimeMutation", l.data.time));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        getIdsData: function (e) {
          return Object(o.a)(
            regeneratorRuntime.mark(function t() {
              var n, o;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e.commit), e.state.isSendIds)) {
                        t.next = 9;
                        break;
                      }
                      return (
                        n("set_isSendIds", !0), (t.next = 5), Object(r.N)()
                      );
                    case 5:
                      (o = t.sent),
                        n("set_favoriteData", o),
                        n("football/home-new/setFav", o),
                        n("basketball/fetchFavoriteIdsMutation", o);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(18), n(20), n(6);
      var o = n(0),
        r = n(46);
      t.default = {
        setServerTime: function (e, t) {
          return (
            (e.serverTime = new Date().getTime() / 1e3 - t.time),
            (e.cid = t.cid || ""),
            (localStorage.cid = e.cid),
            Promise.resolve()
          );
        },
        CHANGE_ODDS: function (e, data) {
          e.ODDS_TYPE = data;
        },
        timezoneMutation: function (e, data) {
          (e.timezone = data),
            o.a.localstorage_set("IndexStates", "timezone", e.timezone);
        },
        proModuleMutation: function (e, data) {
          (e.proModule = data), (window.proModule = data);
        },
        SET_LANG: function (e, t) {
          e.locales.includes(t) &&
            ((t = t || "en"), (e.locale = t), (e.lang = r.a.def()[t]));
        },
        SET_TIMEZONE: function (e, t) {
          t &&
            ((e.timezone = t),
            (e.timeOffset = 60 * e.server_zone - o.a.time_to_sec(t)));
        },
        set_server_zone: function (e, t) {
          e.server_zone = t;
        },
        SET_MOBILE_INFO: function (e, t) {
          e.mobileInfo = t;
        },
        UPDATE_ONLINE_STATUS: function (e, t) {
          e.onlineStatus = t;
        },
        SetDeviceType: function (e, t) {
          e.deviceType = t;
        },
        setMatchesFuture: function (e, t) {
          e.matchesFuture = t;
        },
        setLayHide: function (e, t) {
          e.layHide = t;
        },
        setPageSize: function (e, t) {
          var n = t.pageWidth,
            o = void 0 === n ? 0 : n,
            r = t.pageHeight,
            l = void 0 === r ? 0 : r;
          (e.pageWidth = o),
            (e.pageHeight = l),
            (e.innerWidth = innerWidth),
            (e.innerHeight = innerHeight);
        },
        set_cid: function (e, data) {
          e.cid = data;
        },
        set_page_is410: function (e, data) {
          e.page_is410 = data;
        },
        set_isplugin: function (e, data) {
          e.isplugin = data;
        },
        set_istour_rank: function (e, data) {
          e.istour_rank = data;
        },
        set_istour_week: function (e, data) {
          e.istour_week = data;
        },
        set_isteam_standings: function (e, data) {
          e.isteam_standings = data;
        },
        set_isteam_schedule: function (e, data) {
          e.isteam_schedule = data;
        },
        set_isteam_top: function (e, data) {
          e.isteam_top = data;
        },
        set_oddsList: function (e, data) {
          e.oddsListData = data;
        },
        set_oddsListData_mqtt: function (e, data) {
          data.map(function (t) {
            if (t.oddsType) {
              var n = e.oddsListData[t.oddsType];
              if (n)
                for (var i = 0; i < n.length; i++)
                  if (n[i].company.id == t.companyId) {
                    (e.oddsUpdate[t.companyId] = {
                      0: n[i].s.odd[0] - t.odd[0],
                      1: n[i].s.odd[1] - t.odd[1],
                      2: n[i].s.odd[2] - t.odd[2],
                      3: n[i].s.odd[3] - t.odd[3],
                    }),
                      (n[i].s.odd = t.odd);
                    break;
                  }
            }
          });
        },
        set_oddListLoading: function (e, data) {
          e.oddListLoading = data;
        },
        set_bool_topGifShow: function (e, data) {
          e.bool_topGifShow = data;
        },
        set_sport_idMutation: function (e, data) {
          e.sport_id = data;
        },
        set_headerTitleMutation: function (e, data) {
          e.headerTitle = data;
        },
        set_ballRouteUrlMutation: function (e, data) {
          e.ballRouteUrl = data;
        },
        set_languageJsonMap: function (e, data) {
          e.languageJsonMap = data;
        },
        set_liveCountMap: function (e, t) {
          var n = t.obj,
            o = t.sportId,
            r = t.liveCount;
          n ? (e.liveCountMap = n) : o && (e.liveCountMap[o] = r);
        },
        set_isShowChat: function (e, data) {
          e.isShowChat = data;
        },
        set_isSmallWindow: function (e, data) {
          e.isSmallWindow = data;
        },
        set_isSmallWindow2: function (e, data) {
          e.isSmallWindow2 = data;
        },
        set_bet365Odds: function (e, data) {
          e.bet365Odds = data;
        },
        set_bet365OddType: function (e, data) {
          e.bet365OddType = data;
        },
        set_cidData: function (e, data) {
          e.cidData = data;
        },
        set_advsData: function (e, data) {
          e.advsData = data;
        },
        set_favoriteData: function (e, data) {
          e.fData = data;
        },
        set_isSendAdvs: function (e, data) {
          e.isSendAdvs = data;
        },
        set_isSendTime: function (e, data) {
          e.isSendTime = data;
        },
        set_isSendIds: function (e, data) {
          e.isSendIds = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(5);
      t.default = {
        tab: "Live",
        hideFinished: !1,
        currentDate: new Date().getTime(),
        sortBy: "1",
        customizeView: {
          leagueRanking: !0,
          moneyLine: !0,
          handicap: !0,
          overUnder: !0,
        },
        serverTime: "",
        cid: "",
        favoritesLength: 0,
        leftData_categoriesClone: [],
        loading: !1,
        empty: !1,
        noData: {
          index: { leftNav: !0, mainList: !0 },
          detail: {
            commonHeader: !0,
            overview_score: !0,
            overview_playbyplay: !0,
            overview_topplayers: !0,
            overview_stats: !0,
            boxscore: !0,
            odds: !0,
            h2h: !0,
            standings: !0,
            live: !0,
          },
        },
        matchToCompMap: {},
        matchesData_competitions: [],
        matchesData_matches: [],
        matchesData_seasons: [],
        matchesData_teams: [],
        matchesDataMap: [],
        matchesCompMap: [],
        matchesTeamMap: [],
        matchTimeMap: {},
        leftData_hotComps: [],
        leftData_categories: [],
        categoriesMap: {},
        collectLock: 0,
        matchesRenderFilter: [],
        FavoriteIds_comp: [],
        FavoriteIds_match: [],
        FavoriteIds_teams: [],
        WebMatchData: {},
        ODDS_DETAIL_DATA: {},
        basketballHistroyData: {},
        detailTab: "",
        detailMatchId: "",
        HistroyDataList: { compsObj: {}, teamsObj: {} },
        h2hCheckedList: {},
        h2hCheckboxes: {},
        basketballDetailMatchData: {},
        _boxscoreData: {},
        _oddsData: {},
        _h2hData: {},
        _standingsData: {},
        _live_tliveData: {},
        _live_mliveData: {},
        theme_c: "init",
        theme_w: 1200,
        theme_range: 3,
        ss_hotComp: [],
        tennisScores: {},
        ball_by_ball: {},
        scorecardData: {},
        basketballStatus: o.basketballStatus,
        tennisStatus: o.tennisStatus,
        icehockeyStatus: o.icehockeyStatus,
        volleyballStatus: o.volleyballStatus,
        tabletennisStatus: o.tabletennisStatus,
        baseballStatus: o.baseballStatus,
        badmintonStatus: o.badmintonStatus,
        amfootballStatus: o.amfootballStatus,
        handballStatus: o.handballStatus,
        waterpoloStatus: o.waterpoloStatus,
        snookerStatus: o.snookerStatus,
        cricketStatus: o.cricketStatus,
        esportsStatus: o.esportsStatus,
        esportsMatchStatus: {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          5: 11,
          7: 12,
          9: 13,
          6: 14,
          8: 15,
        },
        esportsDetailStats: {},
        stages: [],
        favoritesList: [],
        bottomData: {},
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9), n(18), n(20);
      var o = n(65),
        r = n(3),
        l = n(25),
        c = (n(17), n(4)),
        d = n(7),
        m = n(0);
      function h(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        fetchIndexDataAction: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              var o, r, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        e.state,
                        (r = e.rootState),
                        (n.next = 3),
                        Object(d.w)(t)
                      );
                    case 3:
                      if ((l = n.sent) && l.matches) {
                        n.next = 9;
                        break;
                      }
                      return (
                        o("noDataMutation", {
                          page: "index",
                          mod: "mainList",
                          bool: !1,
                        }),
                        n.abrupt("return", !1)
                      );
                    case 9:
                      o("noDataMutation", {
                        page: "index",
                        mod: "mainList",
                        bool: !0,
                      });
                    case 10:
                      o("fetchIndexDataMutation", l),
                        o("dealMatchDataMutation", r.proModule);
                    case 12:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getCountries: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              var o, r, l, c, m, h, f, y;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((o = e.commit),
                        (r = e.rootState),
                        e.state,
                        (c = new Date().getTime()),
                        72e5,
                        (m = JSON.parse(
                          sessionStorage.getItem("sessionParams")
                        )),
                        (h = !1),
                        m && JSON.stringify(m) === JSON.stringify(t)
                          ? (h = !0)
                          : sessionStorage.setItem(
                              "sessionParams",
                              JSON.stringify(t)
                            ),
                        !(
                          localStorage["".concat(r.proModule, "_countries")] &&
                          "{}" !=
                            localStorage[
                              "".concat(r.proModule, "_countries")
                            ] &&
                          localStorage.countries_start_time &&
                          c -
                            JSON.parse(localStorage.countries_start_time)[
                              r.proModule
                            ] <
                            72e5 &&
                          h
                        ))
                      ) {
                        n.next = 10;
                        break;
                      }
                      (l = JSON.parse(
                        localStorage["".concat(r.proModule, "_countries")]
                      )),
                        (n.next = 14);
                      break;
                    case 10:
                      return (n.next = 12), Object(d.v)(t);
                    case 12:
                      (l = n.sent) &&
                        ((localStorage["".concat(r.proModule, "_countries")] =
                          JSON.stringify(l)),
                        localStorage.countries_start_time
                          ? (((f = JSON.parse(
                              localStorage.countries_start_time
                            ))[r.proModule] = c),
                            (localStorage.countries_start_time =
                              JSON.stringify(f)))
                          : (((y = {})[r.proModule] = c),
                            (localStorage.countries_start_time =
                              JSON.stringify(y))));
                    case 14:
                      if (l) {
                        n.next = 17;
                        break;
                      }
                      return (
                        o("noDataMutation", {
                          page: "index",
                          mod: "mainList",
                          bool: !1,
                        }),
                        n.abrupt("return", !1)
                      );
                    case 17:
                      o("noDataMutation", {
                        page: "index",
                        mod: "mainList",
                        bool: !0,
                      }),
                        o("set_countries", { res: l, locale: r.locale });
                    case 19:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getHotComp: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              var o, r, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (r = e.commit),
                        e.rootState,
                        (n.next = 3),
                        Object(d.u)(t)
                      );
                    case 3:
                      if ((l = n.sent)) {
                        n.next = 7;
                        break;
                      }
                      return (
                        r("noDataMutation", {
                          page: "index",
                          mod: "mainList",
                          bool: !1,
                        }),
                        n.abrupt("return", !1)
                      );
                    case 7:
                      r("noDataMutation", {
                        page: "index",
                        mod: "mainList",
                        bool: !0,
                      }),
                        r("set_HotComp", { res: l.hotComps || [] }),
                        null !== (o = l.hotComps) &&
                          void 0 !== o &&
                          o.length &&
                          r("set_ss_hotComp", { res: l });
                    case 10:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getCountryComp: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return e.commit, (n.next = 3), Object(d.t)(t);
                    case 3:
                      return n.abrupt("return", n.sent);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        favoriteIdsAction: function (e) {
          return Object(c.a)(
            regeneratorRuntime.mark(function t() {
              var n, o, r;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.commit),
                        (o = e.rootState),
                        (t.next = 3),
                        Object(d.N)({ sport_id: o.sport_id })
                      );
                    case 3:
                      if ((r = t.sent)) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 6:
                      n("fetchFavoriteIdsMutation", r);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        getServerTimeAction: function (e) {
          return Object(c.a)(
            regeneratorRuntime.mark(function t() {
              var n, o;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (n = e.commit), (t.next = 3), Object(d.F)();
                    case 3:
                      if ((o = t.sent)) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 6:
                      n("set_cid", o.data.cid),
                        n("getServerTimeMutation", o.data.time);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        collectAction: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              var o, r, c;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (o = e.commit),
                        (r = e.state),
                        (c = e.rootState),
                        1 == t.type
                          ? r.FavoriteIds_match.indexOf(t.id) > -1
                            ? (Object(d.lb)(t.id, t.type),
                              o("changeFavoriteIds", {
                                type: "match",
                                act: "remove",
                                id: t.id,
                              }))
                            : (Object(d.a)(t.id, t.type),
                              o("changeFavoriteIds", {
                                type: "match",
                                act: "add",
                                id: t.id,
                              }))
                          : r.FavoriteIds_comp.indexOf(t.compId) > -1
                          ? (Object(d.lb)(t.compId, t.type),
                            o("changeFavoriteIds", {
                              type: "comp",
                              act: "remove",
                              id: t.compId,
                            }),
                            o("set_HotComp", {
                              res: r.leftData_hotComps.filter(function (e) {
                                return e.id != t.compId || !e.isadd;
                              }),
                            }))
                          : (Object(d.a)(t.compId, t.type),
                            o("changeFavoriteIds", {
                              type: "comp",
                              act: "add",
                              id: t.compId,
                              itemData: t.itemData,
                            }),
                            r.leftData_hotComps.every(function (e) {
                              return e.id != t.itemData.competition.id;
                            }) &&
                              o("set_HotComp", {
                                res: [].concat(
                                  Object(l.a)(r.leftData_hotComps),
                                  [
                                    f(
                                      f({}, t.itemData.competition),
                                      {},
                                      { isadd: !0 }
                                    ),
                                  ]
                                ),
                              })),
                        o("dealMatchDataMutation", c.proModule),
                        o("setCollectLockMutation", 0);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        basketballDataAction: function (e, t) {
          var n = e.commit,
            o = (e.satte, e.rootState);
          return Object(d.b)(f(f({}, t), {}, { proModule: o.proModule }))
            .then(function (data) {
              var e = t.tab;
              if (
                (data.res[0]
                  ? n("noDataMutation", {
                      page: "detail",
                      mod: "commonHeader",
                      bool: !0,
                    })
                  : n("noDataMutation", {
                      page: "detail",
                      mod: "commonHeader",
                      bool: !1,
                    }),
                "boxscore" == e)
              )
                data.res[1]
                  ? n("noDataMutation", {
                      page: "detail",
                      mod: "boxscore",
                      bool: !0,
                    })
                  : n("noDataMutation", {
                      page: "detail",
                      mod: "boxscore",
                      bool: !1,
                    });
              else if ("odds" == e)
                data.res[1] &&
                "{}" != JSON.stringify(data.res[1]) &&
                (data.res[1].eu || data.res[1].asia || data.res[1].bs) &&
                (data.res[1].eu.length ||
                  data.res[1].asia.length ||
                  data.res[1].bs.length)
                  ? n("noDataMutation", {
                      page: "detail",
                      mod: "odds",
                      bool: !0,
                    })
                  : n("noDataMutation", {
                      page: "detail",
                      mod: "odds",
                      bool: !1,
                    });
              else if ("h2h" == e) {
                var r, l, c, d;
                !data.res[1] ||
                (0 ==
                  (null === (r = data.res[1]) ||
                  void 0 === r ||
                  null === (l = r.home) ||
                  void 0 === l
                    ? void 0
                    : l.length) &&
                  0 ==
                    (null === (c = data.res[1]) ||
                    void 0 === c ||
                    null === (d = c.away) ||
                    void 0 === d
                      ? void 0
                      : d.length))
                  ? n("noDataMutation", {
                      page: "detail",
                      mod: "h2h",
                      bool: !1,
                    })
                  : n("noDataMutation", {
                      page: "detail",
                      mod: "h2h",
                      bool: !0,
                    });
              } else if ("standings" == e) {
                var m, h;
                null !== (m = data.res[1]) &&
                void 0 !== m &&
                null !== (h = m.tables) &&
                void 0 !== h &&
                h.length
                  ? n("noDataMutation", {
                      page: "detail",
                      mod: "standings",
                      bool: !0,
                    })
                  : n("noDataMutation", {
                      page: "detail",
                      mod: "standings",
                      bool: !1,
                    });
              } else
                "live" == e &&
                  (!data.res[1] ||
                  (data.res[1].players && 0 == data.res[1].players.length)
                    ? (n("noDataMutation", {
                        page: "detail",
                        mod: "overview_topplayers",
                        bool: !1,
                      }),
                      n("noDataMutation", {
                        page: "detail",
                        mod: "overview_stats",
                        bool: !1,
                      }))
                    : (n("noDataMutation", {
                        page: "detail",
                        mod: "overview_topplayers",
                        bool: !0,
                      }),
                      n("noDataMutation", {
                        page: "detail",
                        mod: "overview_stats",
                        bool: !0,
                      })),
                  !data.res[2] ||
                  (data.res[2].lives && 0 == data.res[2].lives.length) ||
                  (data.res[2].lives &&
                    data.res[2].lives[0].items &&
                    0 == data.res[2].lives[0].items.length)
                    ? n("noDataMutation", {
                        page: "detail",
                        mod: "overview_playbyplay",
                        bool: !1,
                      })
                    : n("noDataMutation", {
                        page: "detail",
                        mod: "overview_playbyplay",
                        bool: !0,
                      }));
              return n("bk_setDetail", f({ proModule: o.proModule }, data));
            })
            .catch(function (e) {});
        },
        setScoreAction: function (e, t) {
          e.state;
          var n = e.commit,
            r = e.rootState,
            l = t.d,
            c = t.compId,
            d = t.spe,
            h = t.key,
            data = t.data;
          try {
            for (
              var y = function (i) {
                  if (l.list[i].id == data.matchId) {
                    var e,
                      t = m.a.getMatchTotalScores(data, r.proModule),
                      o = t.homeT,
                      y = t.awayT,
                      v = {};
                    return (
                      l.list[i].homeScoresTotal < o &&
                        ((v.homeScoresRed2 = 2), (v.homeScoresTotal = o)),
                      l.list[i].awayScoresTotal < y &&
                        ((v.awayScoresRed2 = 2), (v.awayScoresTotal = y)),
                      l.list[i].matchStatus != data.matchStatus &&
                        (v.matchStatus = data.matchStatus),
                      l.list[i].statusId != data.statusId &&
                        (v.statusId = data.statusId),
                      (v.awayScores = data.awayScores),
                      (v.homeScores = data.homeScores),
                      (v.id = data.matchId),
                      "tennis" == r.proModule
                        ? (0 != data.tennisGamePoints[0] &&
                            data.tennisGamePoints[0] !== l.list[i].points[0] &&
                            (v.homeScoresRed0 = 2),
                          0 != data.tennisGamePoints[1] &&
                            data.tennisGamePoints[1] !== l.list[i].points[1] &&
                            (v.awayScoresRed0 = 2),
                          0 != data.homeScores[data.statusId - 2] &&
                            data.homeScores[data.statusId - 2] !=
                              l.list[i].homeScores[data.statusId - 2] &&
                            (v.homeScoresRed1 = 2),
                          0 != data.awayScores[data.statusId - 2] &&
                            data.awayScores[data.statusId - 2] !=
                              l.list[i].awayScores[data.statusId - 2] &&
                            (v.awayScoresRed1 = 2),
                          (v.points = data.tennisGamePoints),
                          (v.serve = data.serve),
                          n("setScoreMutation", {
                            compId: c,
                            i: i,
                            da: v,
                            spe: d,
                            key: h,
                          }),
                          (2 != v.homeScoresRed0 &&
                            2 != v.homeScoresRed1 &&
                            2 != v.homeScoresRed2 &&
                            2 != v.awayScoresRed0 &&
                            2 != v.awayScoresRed1 &&
                            2 != v.awayScoresRed2) ||
                            setTimeout(function () {
                              n("setScoreMutation", {
                                compId: c,
                                i: i,
                                da: f(
                                  f({}, v),
                                  {},
                                  {
                                    homeScoresRed0: 0,
                                    homeScoresRed1: 0,
                                    homeScoresRed2: 0,
                                    awayScoresRed0: 0,
                                    awayScoresRed1: 0,
                                    awayScoresRed2: 0,
                                  }
                                ),
                                spe: d,
                                key: h,
                              });
                            }, 2e3),
                          { v: void 0 })
                        : "tabletennis" == r.proModule ||
                          "badminton" == r.proModule
                        ? ("tabletennis" == r.proModule
                            ? ((e = {
                                51: 0,
                                331: 0,
                                52: 1,
                                332: 1,
                                53: 2,
                                333: 2,
                                54: 3,
                                334: 3,
                                55: 4,
                                335: 4,
                                472: 5,
                                336: 5,
                                473: 6,
                              }),
                              (v.ttScores = data.ttScores))
                            : ((e = {
                                51: 0,
                                331: 0,
                                52: 1,
                                332: 1,
                                53: 2,
                                333: 2,
                                54: 3,
                                334: 3,
                                55: 4,
                              }),
                              (v.bmScores = data.bmScores)),
                          data.homeScores[e[data.statusId]] !=
                            l.list[i].homeScores[e[data.statusId]] &&
                            (v.homeScoresRed1 = 2),
                          data.awayScores[e[data.statusId]] !=
                            l.list[i].awayScores[e[data.statusId]] &&
                            (v.awayScoresRed1 = 2),
                          n("setScoreMutation", {
                            compId: c,
                            i: i,
                            da: v,
                            spe: d,
                            key: h,
                          }),
                          (2 != v.homeScoresRed1 &&
                            2 != v.homeScoresRed2 &&
                            2 != v.awayScoresRed1 &&
                            2 != v.awayScoresRed2) ||
                            setTimeout(function () {
                              n("setScoreMutation", {
                                compId: c,
                                i: i,
                                da: f(
                                  f({}, v),
                                  {},
                                  {
                                    homeScoresRed1: 0,
                                    homeScoresRed2: 0,
                                    awayScoresRed1: 0,
                                    awayScoresRed2: 0,
                                  }
                                ),
                                spe: d,
                                key: h,
                              });
                            }, 2e3),
                          { v: void 0 })
                        : ("icehockey" == r.proModule
                            ? (v.ihScores = data.ihScores)
                            : "volleyball" == r.proModule
                            ? (v.vbScores = data.vbScores)
                            : "baseball" == r.proModule
                            ? (v.bsScores = data.bsScores)
                            : "amfootball" == r.proModule
                            ? (v.afScores = data.afScores)
                            : "cricket" == r.proModule
                            ? (v.ckScores = data.ckScores)
                            : ["handball", "snooker", "waterpolo"].includes(
                                r.proModule
                              )
                            ? (v.commonScore = data.commonScore)
                            : "esports" == r.proModule &&
                              (v.esScores = data.esScores),
                          n("setScoreMutation", {
                            compId: c,
                            i: i,
                            da: v,
                            spe: d,
                            key: h,
                          }),
                          2 == v.homeScoresRed2
                            ? setTimeout(function () {
                                n("setScoreMutation", {
                                  compId: c,
                                  i: i,
                                  da: f(f({}, v), {}, { homeScoresRed2: 0 }),
                                  spe: d,
                                  key: h,
                                });
                              }, 2e3)
                            : 2 == v.awayScoresRed2 &&
                              setTimeout(function () {
                                n("setScoreMutation", {
                                  compId: c,
                                  i: i,
                                  da: f(f({}, v), {}, { awayScoresRed2: 0 }),
                                  spe: d,
                                  key: h,
                                });
                              }, 2e3),
                          "break")
                    );
                  }
                },
                i = 0;
              i < l.list.length;
              i++
            ) {
              var v = y(i);
              if ("break" === v) break;
              if ("object" === Object(o.a)(v)) return v.v;
            }
          } catch (e) {}
        },
        detailIncidentsAction: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return e.commit, (n.next = 3), Object(d.K)(t);
                    case 3:
                      return n.abrupt("return", n.sent);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        detailStatsAction: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return e.commit, (n.next = 3), Object(d.M)(t);
                    case 3:
                      return n.abrupt("return", n.sent);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getballByBall: function (e, t) {
          return Object(c.a)(
            regeneratorRuntime.mark(function n() {
              var o, r;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(d.Z)(t);
                    case 3:
                      (r = n.sent), o("set_ball_by_ball", r);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10);
      var o = n(65),
        r = (n(23), n(3)),
        l = (n(18), n(20), n(267), n(14), n(8), n(6), n(9), n(0)),
        c = n(5),
        d = n(19);
      function m(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function h(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? m(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : m(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        fetchIndexDataMutation: function (e, data) {
          (e.matchesData_competitions = data.competitions),
            (e.matchesData_matches = data.matches),
            (e.matchesData_seasons = data.seasons),
            (e.matchesData_teams = data.teams),
            (e.stages = data.stages);
          var t = {};
          e.matchesData_competitions.map(function (e) {
            t[e.id] = e;
          }),
            (e.matchesCompMap = t);
          var n = {};
          e.matchesData_teams.map(function (e) {
            n[e.id] = e;
          }),
            (e.matchesTeamMap = n),
            1 == e.sortBy
              ? (e.matchesData_matches = l.a.sortByName(
                  e.matchesData_matches.sort(function (a, b) {
                    return a.matchTime - b.matchTime;
                  }),
                  e.matchesCompMap,
                  {},
                  e.matchesTeamMap
                ))
              : (e.matchesData_matches = l.a.sortByTime(
                  e.matchesData_matches.sort(function (a, b) {
                    return a.matchTime - b.matchTime;
                  }),
                  e.matchesCompMap,
                  {}
                ));
        },
        setCollectLockMutation: function (e, data) {
          e.collectLock = data;
        },
        changeValueMutation: function (e, t) {
          for (
            var n = [],
              o = Object.keys(e.leftData_categoriesClone).length,
              i = 0;
            i < o;
            i++
          )
            e.leftData_categoriesClone[i].name &&
              e.leftData_categoriesClone[i].name
                .toLowerCase()
                .indexOf(t.toLowerCase()) > -1 &&
              n.push(e.leftData_categoriesClone[i]);
          e.leftData_categories = n;
        },
        changeInnerShow: function (e, t) {
          for (
            var n = t.id, o = t.comps, r = t.innerShow, i = 0;
            i < e.leftData_categories.length;
            i++
          )
            if (e.leftData_categories[i].id == n) {
              r || (e.leftData_categories[i].comps = o),
                (e.leftData_categories[i].innerShow =
                  !e.leftData_categories[i].innerShow);
              break;
            }
        },
        fetchFavoriteIdsMutation: function (e, data) {
          (e.FavoriteIds_comp = data.compIds),
            (e.FavoriteIds_match = data.matchIds),
            (e.FavoriteIds_teams = data.teamIds);
        },
        getServerTimeMutation: function (e, data) {
          e.serverTime = data;
        },
        set_cid: function (e, data) {
          e.cid = data;
        },
        ssChangeMutation: function (e, data) {
          for (var t = 0; t < e.matchesRenderFilter.length; t++)
            if (e.matchesRenderFilter[t].key == data[0]) {
              (e.matchesRenderFilter[t].ss = !data[1]),
                data[1]
                  ? (e.matchesRenderFilter[t].size = 40)
                  : (e.matchesRenderFilter[t].size =
                      e.matchesRenderFilter[t].sizeInit);
              break;
            }
        },
        dealMatchDataMutation: function (e, t) {
          var n,
            o = sessionStorage.getItem("activeTabProModule");
          o && (e.tab = o),
            (n =
              "All" == e.tab
                ? -1
                : "Live" == e.tab
                ? 2
                : "Finished" == e.tab
                ? 3
                : "Scheduled" == e.tab
                ? 1
                : -2),
            l.a.localstorage_set("IndexStates", "tab", e.tab);
          for (
            var r = e.matchesData_matches,
              d = {},
              m = {},
              f = {},
              y = {},
              v = 0,
              _ = 0 !== Object.values(e.matchToCompMap).length ? 1 : 0,
              i = 0;
            i < r.length;
            i++
          ) {
            var k = r[i],
              A = "";
            if (k.stage)
              for (var j = e.stages, w = 0; w < j.length; w++)
                if (k.stage.id === j[w].id) {
                  A = j[w].name;
                  break;
                }
            0 == _ && (y[k.id] = e.matchesCompMap[k.competition.id]);
            var S = {
              id: k.id,
              time: k.times,
              matchStatus: k.matchStatus,
              matchTime: k.matchTime,
            };
            if (
              (m[k.competition.id]
                ? m[k.competition.id].push(S)
                : (m[k.competition.id] = [S]),
              (f[k.id] = k.times),
              e.FavoriteIds_match.indexOf(k.id) > -1 && v++,
              !(
                (-2 == n && -1 == e.FavoriteIds_match.indexOf(k.id)) ||
                ("All" == e.tab && e.hideFinished && 3 == k.matchStatus) ||
                !(
                  k.matchStatus == n ||
                  -1 == n ||
                  -2 == n ||
                  (1 == n && 2 != k.matchStatus && 3 != k.matchStatus) ||
                  (2 == n &&
                    (2 == k.matchStatus ||
                      (1 == k.matchStatus &&
                        ![11, 12, 13, 14, 15].includes(k.statusId))))
                )
              ))
            ) {
              var T =
                  e.FavoriteIds_match.indexOf(k.id) > -1 ? "_top" : "_bottom",
                M =
                  1 == e.sortBy || "_top" == T
                    ? k.competition.id
                    : k.competition.id + "_" + k.matchTime;
              2 != n ||
                1 != k.matchStatus ||
                [11, 12, 13, 14, 15].includes(k.statusId) ||
                "_bottom" != T ||
                (M += "_iscomming");
              var x,
                O,
                I,
                D,
                C,
                P,
                E,
                z,
                L = l.a.getMatchTotalScores(k, t),
                R = L.homeT,
                B = L.awayT,
                N = l.a.getScores(k, t),
                F = N.homeScores,
                U = N.awayScores;
              if (d["".concat(M).concat(T)])
                d["".concat(M).concat(T)].list.push(
                  h(
                    h({}, k),
                    {},
                    {
                      homeScores: F,
                      awayScores: U,
                      homeScoresTotal: R,
                      awayScoresTotal: B,
                      homeTeamDetail: e.matchesTeamMap[k.homeTeam.id],
                      awayTeamDetail: e.matchesTeamMap[k.awayTeam.id],
                      groupNum: c.letterArray[k.groupNum] || "",
                      roundNum: k.roundNum,
                      stage: A,
                      users: k.users || 0,
                      weight:
                        (null === (x = e.matchesCompMap[k.competition.id]) ||
                        void 0 === x
                          ? void 0
                          : x.weight) || 0,
                      level:
                        (null === (O = e.matchesCompMap[k.competition.id]) ||
                        void 0 === O
                          ? void 0
                          : O.level) || 0,
                      homeTeamId: k.homeTeam.id,
                      countryWeight:
                        (null === (I = e.matchesCompMap[k.competition.id]) ||
                        void 0 === I ||
                        null === (D = I.country) ||
                        void 0 === D
                          ? void 0
                          : D.weight) || 0,
                    }
                  )
                ),
                  (d["".concat(M).concat(T)].size += 64),
                  (d["".concat(M).concat(T)].sizeInit =
                    d["".concat(M).concat(T)].size);
              else
                (d["".concat(M).concat(T)] = {
                  competition: h(
                    { country: {} },
                    e.matchesCompMap[k.competition.id]
                  ),
                  key: "".concat(M).concat(T),
                  list: [
                    h(
                      h({}, k),
                      {},
                      {
                        homeScores: F,
                        awayScores: U,
                        homeScoresTotal: R,
                        awayScoresTotal: B,
                        homeTeamDetail: e.matchesTeamMap[k.homeTeam.id],
                        awayTeamDetail: e.matchesTeamMap[k.awayTeam.id],
                        groupNum: c.letterArray[k.groupNum] || "",
                        roundNum: k.roundNum,
                        stage: A,
                        users: k.users || 0,
                        weight:
                          (null === (C = e.matchesCompMap[k.competition.id]) ||
                          void 0 === C
                            ? void 0
                            : C.weight) || 0,
                        level:
                          (null === (P = e.matchesCompMap[k.competition.id]) ||
                          void 0 === P
                            ? void 0
                            : P.level) || 0,
                        homeTeamId: k.homeTeam.id,
                        countryWeight:
                          (null === (E = e.matchesCompMap[k.competition.id]) ||
                          void 0 === E ||
                          null === (z = E.country) ||
                          void 0 === z
                            ? void 0
                            : z.weight) || 0,
                      }
                    ),
                  ],
                  ss: 1,
                }),
                  (d["".concat(M).concat(T)].size = 104),
                  (d["".concat(M).concat(T)].sizeInit =
                    d["".concat(M).concat(T)].size);
            }
          }
          (e.matchesDataMap = m),
            (e.matchTimeMap = f),
            (e.favoritesLength = v),
            0 == _ && (e.matchToCompMap = y);
          var H = [];
          for (var W in d) H.push(d[W]);
          var V = null;
          H[0] && 0 === H[0].list.length && (V = H[0]);
          var G = [],
            K = [];
          if ("Live" === e.tab) {
            for (var Q = 0; Q < H.length; Q++)
              if (H[Q].list.length) {
                for (var $ = !1, J = 0; J < H[Q].list.length; J++) {
                  if (2 === H[Q].list[J].matchStatus) {
                    $ = !0;
                    break;
                  }
                }
                $ ? G.push(H[Q]) : K.push(H[Q]);
              }
          } else K = H;
          for (
            var Y = [],
              Z = function (e) {
                var t = G[e].list;
                t.forEach(function (e, n) {
                  2 !== e.matchStatus && (Y.push(e), t.splice(n--, 1));
                });
              },
              X = 0;
            X < G.length;
            X++
          )
            Z(X);
          Y.map(function (e) {
            K.forEach(function (t) {
              e.competition.id === t.competition.id && t.list.push(e);
            });
          });
          var ee = {
            favorites: {
              matchIds: e.FavoriteIds_match,
              compIds: e.FavoriteIds_comp,
            },
            locale: $nuxt.$store.state.locale,
            teamsMap: e.matchesTeamMap,
            sortBy: e.sortBy,
            isElseBall: !0,
          };
          (G = l.a.matchSortCompetition(h({ listData: G }, ee))),
            (K = l.a.matchSortCompetition(h({ listData: K }, ee))),
            "Live" === e.tab &&
              K.length &&
              G.push({
                copyKey: "copy_iscomming",
                iscomming: 1,
                key: "iscomming",
                list: [],
                size: 60,
              });
          var te = G.concat(K);
          te.forEach(function (e, n, o) {
            if (
              e.list.length &&
              ((o[n].size = 64 * e.list.length + 40), "cricket" === t)
            ) {
              var r = 0;
              e.list.map(function (e) {
                3 !== e.matchStatus ||
                  !e.ckScores ||
                  (1 !== e.ckScores.winner && 2 !== e.ckScores.winner) ||
                  (r += 20);
              }),
                (o[n].size += r);
            }
          }),
            V && ((V.copyKey = "noData_".concat(V.key)), te.unshift(V)),
            (e.matchesRenderFilter = te);
        },
        changeFavoriteIds: function (e, t) {
          var n = t.type,
            o = t.act,
            r = t.id;
          t.itemData;
          "match" == n
            ? "add" == o
              ? (e.FavoriteIds_match.push(r), e.favoritesLength++)
              : ((e.FavoriteIds_match = e.FavoriteIds_match.filter(function (
                  e
                ) {
                  return e != r;
                })),
                e.favoritesLength--)
            : "add" == o
            ? (e.FavoriteIds_comp.push(r),
              e.matchesData_matches.map(function (t) {
                t.competition.id == r && e.FavoriteIds_match.indexOf(t.id);
              }))
            : (e.FavoriteIds_comp = e.FavoriteIds_comp.filter(function (e) {
                return e != r;
              }));
        },
        changeTabMutation: function (e, data) {
          (e.tab = data), l.a.localstorage_set("IndexStates", "tab", e.tab);
        },
        hideFinishedMutation: function (e, data) {
          (e.hideFinished = data),
            l.a.localstorage_set("IndexStates", "hideFinished", e.hideFinished);
        },
        currentDateMutation: function (e, data) {
          (e.currentDate = data),
            l.a.localstorage_set("IndexStates", "currentDate", e.currentDate);
        },
        SortByChangeMutation: function (e, data) {
          (e.sortBy = data),
            l.a.localstorage_set("IndexStates", "sortBy", e.sortBy);
        },
        customizeViewMutation: function (e, data) {
          1 === data[1]
            ? (e.customizeView = data[0])
            : (e.customizeView = h(h({}, e.customizeView), data[0])),
            l.a.localstorage_set(
              "IndexStates",
              "customizeView",
              e.customizeView
            );
        },
        initParamsMutation: function (e, t) {
          t.tab;
          var n = t.hideFinished,
            o = t.currentDate,
            r = t.sortBy,
            l = t.customizeView;
          (e.hideFinished = n),
            (e.currentDate = o),
            (e.sortBy = r),
            void 0 !== l && (e.customizeView = l);
        },
        loadingMutation: function (e, data) {
          e.loading = data;
        },
        emptyMutation: function (e, data) {
          e.empty = data;
        },
        setScoreMutation: function (e, t) {
          t.compId;
          var i = t.i,
            n = t.da,
            o = t.spe,
            r = t.key;
          try {
            for (var l = 0; l < e.matchesRenderFilter.length; l++)
              if (e.matchesRenderFilter[l].key == r + o) {
                d.default.set(
                  e.matchesRenderFilter[l].list,
                  i,
                  h(h({}, e.matchesRenderFilter[l].list[i]), n)
                );
                break;
              }
            for (
              var c = function (t) {
                  if (e.matchesData_matches[t].id == n.id)
                    return (
                      setTimeout(function () {
                        e.matchesData_matches[t] = h(
                          h({}, e.matchesData_matches[t]),
                          n
                        );
                      }, 100),
                      "break"
                    );
                },
                m = 0;
              m < e.matchesData_matches.length;
              m++
            ) {
              if ("break" === c(m)) break;
            }
          } catch (e) {}
        },
        setScoreMutationRed2: function (e, t) {
          var n = t.spe,
            o = t.key,
            r = t.value,
            l = t.type,
            i = t.i;
          try {
            for (var c = 0; c < e.matchesRenderFilter.length; c++)
              if (e.matchesRenderFilter[c].key == o + n) {
                e.matchesRenderFilter[c].list[i]["".concat(l, "ScoresRed2")] =
                  r;
                break;
              }
          } catch (e) {}
        },
        changeMatchTimeMapMutation: function (e, t) {
          var n = t.matchId,
            o = t.times;
          if (e.matchTimeMap[n] != o) {
            e.matchTimeMap[n] = o;
            for (var i = 0; i < e.matchesData_matches.length; i++)
              if (e.matchesData_matches[i].id == n) {
                e.matchesData_matches[i].times = o;
                break;
              }
          }
        },
        changeOdd: function (e, data) {
          var t,
            n,
            o = data[0],
            r = data[1],
            l = data[2],
            c = data[3];
          (t = e.FavoriteIds_match.indexOf(r) > -1 ? "_top" : "_bottom"),
            2 == e.sortBy &&
              e.matchesDataMap[o].map(function (e) {
                e.id == r && (n = e.matchTime);
              });
          var d = 1 == e.sortBy || "_top" == t ? o : o + "_" + n;
          try {
            for (var m, h, f, y = 0; y < e.matchesRenderFilter.length; y++)
              if (e.matchesRenderFilter[y].key == d + t) {
                m = e.matchesRenderFilter[y];
                break;
              }
            if (!m) return;
            try {
              for (var i = 0; i < m.list.length; i++)
                if (m.list[i].id == r) {
                  h = i;
                  break;
                }
            } catch (e) {}
            if (void 0 === h) return;
            f = 0 == c ? "handicap" : 1 == c ? "moneyLine" : "overUnder";
            var v = m.list[h].ext.odds.oddItems[c].odd[0],
              _ = l[0];
            m.list[h]["isUp_".concat(f, "_zhu_pl")] = v < _ ? 1 : v > _ ? 2 : 0;
            var k = m.list[h].ext.odds.oddItems[c].odd[2],
              A = l[2];
            (m.list[h]["isUp_".concat(f, "_ke_pl")] =
              k < A ? 1 : k > A ? 2 : 0),
              (m.list[h].ext.odds.oddItems[c].odd = l);
            for (var j = 0; j < e.matchesRenderFilter.length; j++)
              if (e.matchesRenderFilter[j].key == d + t) {
                e.matchesRenderFilter[j] = m;
                break;
              }
          } catch (e) {}
        },
        bk_setDetail: function (e, data) {
          data.res[0] && 410 == data.res[0].code
            ? (e.basketballDetailMatchData = { code: 410 })
            : (e.basketballDetailMatchData = data.res[0]);
          var t = e.detailTab;
          if ("boxscore" == t) e._boxscoreData = Object.assign({}, data.res[1]);
          else if ("odds" == t)
            try {
              var n = JSON.parse(JSON.stringify(data.res[1]));
              Object.keys(n).forEach(function (e) {
                "company" != e &&
                  n[e].forEach(function (element) {
                    "eu" == e
                      ? ((element.wAm = l.a.calculate1X2(element.w)),
                        (element.lAm = l.a.calculate1X2(element.l)))
                      : ((element.w = l.a.accAdd(element.w, 1)),
                        (element.l = l.a.accAdd(element.l, 1)),
                        (element.wAm = l.a.calculate1X2(+element.w)),
                        (element.lAm = l.a.calculate1X2(+element.l)));
                  });
              }),
                (e.ODDS_DETAIL_DATA = Object.assign({}, n));
            } catch (t) {
              e.ODDS_DETAIL_DATA = {};
            }
          else if ("h2h" == t) e._h2hData = Object.assign({}, data.res[1]);
          else if ("standings" == t)
            e._standingsData = Object.assign({}, data.res[1]);
          else if ("live" == t) {
            (e._boxscoreData = Object.assign({}, data.res[1])),
              (e._live_tliveData = Object.assign({}, data.res[2]));
            try {
              var o,
                r =
                  null === (o = data.res[3]) || void 0 === o ? void 0 : o.items;
              if ("basketball" == data.proModule)
                (r[1] = { home: 3 * r[1].home, away: 3 * r[1].away }),
                  (r[2] = { home: 2 * r[2].home, away: 2 * r[2].away });
              else if ("tennis" == data.proModule) {
                var c, d;
                e.tennisScores =
                  null === (c = data.res[3]) ||
                  void 0 === c ||
                  null === (d = c.tennisScores) ||
                  void 0 === d
                    ? void 0
                    : d.data;
              }
              e._live_mliveData = Object.assign({}, r);
            } catch (t) {
              e._live_mliveData = {};
            }
          } else "scorecard" === t && (e.scorecardData = data.res[1]);
          return data.res[0];
        },
        changemLiveMutation: function (e, data) {
          e._live_mliveData = h(h({}, e._live_mliveData), data);
        },
        changeDetailTabMutation: function (e, data) {
          e.detailTab = data;
        },
        changeDetailMatchIdMutation: function (e, data) {
          e.detailMatchId = data;
        },
        matchDataMutation: function (e, data) {
          e.basketballDetailMatchData = data;
        },
        matchDataUpdateMutation: function (e, data) {
          try {
            var t = h(h({}, e.basketballDetailMatchData.match), data);
            data.tennisGamePoints && (t.points = data.tennisGamePoints),
              (e.basketballDetailMatchData.match = t);
          } catch (e) {}
        },
        changebkdOddMutation: function (e, t) {
          var n = t.type,
            o = t.d;
          try {
            var r = e.basketballDetailMatchData.match.ext.odds.oddItems;
            "eu" == n
              ? (r[1].odd = o)
              : "bs" == n
              ? (r[2].odd = o)
              : "asia" == n && (r[0].odd = o);
          } catch (e) {}
        },
        UNSHIFT_ITEM: function (e, t) {
          var data = t.data,
            n = t.type,
            o = (t.index, e.ODDS_DETAIL_DATA[n]);
          o.forEach(function (e) {
            e.isNew = -1;
          });
          var r = {
            w: data.odd[0],
            d: data.odd[1],
            l: data.odd[2],
            time: data.time,
            isNew: 1,
          };
          "eu" == n
            ? ((r.wAm = l.a.calculate1X2(r.w)),
              (r.lAm = l.a.calculate1X2(r.l)),
              (o[0] && r.w == o[0].w && r.l == o[0].l) ||
                e.ODDS_DETAIL_DATA[n].unshift(h(h({}, data), r)))
            : ((r.w = l.a.accAdd(r.w, 1)),
              (r.l = l.a.accAdd(r.l, 1)),
              (r.wAm = l.a.calculate1X2(+r.w)),
              (r.lAm = l.a.calculate1X2(+r.l)),
              (o[0] && r.w == o[0].w && r.l == o[0].l && r.d == o[0].d) ||
                e.ODDS_DETAIL_DATA[n].unshift(h(h({}, data), r)));
        },
        noDataMutation: function (e, t) {
          var n = t.page,
            o = t.mod,
            r = t.bool,
            l = void 0 !== r && r,
            c = {};
          (c[o] = l), (e.noData[n] = h(h({}, e.noData[n]), c));
        },
        changeTab: function (e, data) {
          e.tab = data;
        },
        changeMatchTimeMutation: function (e, data) {
          e.basketballDetailMatchData.match.times.tmrSecs = data;
        },
        removeMatchMutation: function (e, data) {
          try {
            var t = (function () {
              var t,
                n,
                o =
                  null === (t = e.matchToCompMap[data]) || void 0 === t
                    ? void 0
                    : t.id;
              if (!o) return { v: !1 };
              e.matchesDataMap[o].map(function (e) {
                e.id == data && (n = e.matchTime);
              });
              var r = "";
              r = e.FavoriteIds_match.indexOf(data) > -1 ? "_top" : "_bottom";
              for (
                var l = 1 == e.sortBy || "_top" == r ? o : o + "_" + n, c = 0;
                c < e.matchesRenderFilter.length;
                c++
              )
                if (e.matchesRenderFilter[c].key == l + r) {
                  var d = e.matchesRenderFilter[c],
                    m = {};
                  1 == d.list.length
                    ? ((m = JSON.parse(JSON.stringify(d.list[0]))),
                      (e.matchesRenderFilter = e.matchesRenderFilter.filter(
                        function (e) {
                          return e.key != l + r;
                        }
                      )))
                    : ((d.list = d.list.filter(function (e) {
                        return e.id != data;
                      })),
                      (m = d.list.filter(function (e) {
                        return e.id == data;
                      })),
                      (d.sizeInit = d.sizeInit - 64),
                      (d.size = d.size - 64));
                  for (var i = 0; i < e.matchesData_matches.length; i++)
                    if (e.matchesData_matches[i].id == m.id) {
                      e.matchesData_matches[i] = h(
                        h({}, e.matchesData_matches[i]),
                        m
                      );
                      break;
                    }
                  break;
                }
            })();
            if ("object" === Object(o.a)(t)) return t.v;
          } catch (e) {}
        },
        SET_THEME: function (e, data) {
          data.theme && (e.theme_c = data.theme),
            data.width && (e.theme_w = data.width),
            void 0 !== data.theme_range && (e.theme_range = data.theme_range);
        },
        set_live_tliveData_items: function (e, t) {
          var n = t.key,
            o = t.value;
          try {
            e._live_tliveData.lives[n]
              ? e._live_tliveData.lives[n].items.push(o)
              : (e._live_tliveData.lives[n].items = [o]);
          } catch (e) {}
        },
        set_countries: function (e, t) {
          var n = t.res,
            o = (t.locale, []);
          try {
            n.countries.map(function (e) {
              o.push(
                e.category
                  ? h(h({ id: 0 }, e.category), {}, { iscategory: !0 })
                  : h({ id: 0 }, e)
              );
            });
          } catch (e) {}
          (e.leftData_categories = o),
            (e.leftData_categoriesClone = Object.assign({}, o));
        },
        set_HotComp: function (e, t) {
          var n = t.res;
          e.leftData_hotComps = n;
        },
        set_ss_hotComp: function (e, t) {
          var n = t.res.hotComps,
            o = {};
          n.map(function (e) {
            try {
              o[e.category.id]
                ? o[e.category.id].push(e)
                : (o[e.category.id] = [e]);
            } catch (e) {}
          }),
            (e.ss_hotComp = n.map(function (e) {
              return h(h({}, e), {}, { comps: o[e.id] });
            }));
        },
        tennisPointsMutation: function (e, data) {
          e.tennisScores = data;
        },
        set_ball_by_ball: function (e, data) {
          e.ball_by_ball = data;
        },
        changeEsportsDetailStats: function (e, data) {
          var t,
            n = {},
            o = JSON.parse(JSON.stringify(data));
          if (
            (null === (t = o.map) || void 0 === t || !t.name) &&
            2 == o.home.side
          ) {
            var r = [o.away, o.home];
            (o.home = r[0]), (o.away = r[1]), (o.changeSide = !0);
          }
          (n[o.bo] = o),
            (e.esportsDetailStats = h(h({}, e.esportsDetailStats), n));
        },
        changeFavoritesList: function (e, data) {
          e.favoritesList = data;
        },
        setBottomData: function (e, data) {
          e.bottomData = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(18), n(20), n(24), n(14), n(23);
      var o = n(0);
      t.default = {
        bkDMDGetter: function (e, t, n) {
          var r = e.basketballDetailMatchData,
            l = {
              homeTeamName: "",
              homeTeamSlug: "",
              awayTeamName: "",
              awayTeamSlug: "",
              homeScores: ["", "", "", ""],
              homeScoresT: "",
              awayScores: ["", "", "", ""],
              awayScoresT: "",
              homeTeamLogo: "",
              awayTeamLogo: "",
              homeTeamId: "",
              awayTeamId: "",
              compName: "",
              compId: "",
              compSlug: "",
              hasOT: !1,
              hasAP: !1,
              venueName: "",
              stats: { 4: { home: 0, away: 0 }, 301: { home: 5, away: 5 } },
              matchchapters: "",
              isDouble: !1,
              homeTeamLogo_double: ["", ""],
              awayTeamLogo_double: ["", ""],
              homeScore_e: "",
              awayScore_e: "",
              homeScore_h: "",
              awayScore_h: "",
              one_or_two: !1,
              esports_type: "",
            };
          try {
            r.match.homeTeam &&
              ((l.homeTeamName = r.match.homeTeam.name),
              (l.homeTeamSlug = r.match.homeTeam.slug),
              (l.homeTeamLogo = r.match.homeTeam.logo),
              (l.homeTeamId = r.match.homeTeam.id));
          } catch (e) {}
          try {
            r.match.awayTeam &&
              ((l.awayTeamName = r.match.awayTeam.name),
              (l.awayTeamSlug = r.match.awayTeam.slug),
              (l.awayTeamLogo = r.match.awayTeam.logo),
              (l.awayTeamId = r.match.awayTeam.id));
          } catch (e) {}
          try {
            var c,
              d = o.a.getMatchTotalScores(r.match, n.proModule),
              m = d.homeT,
              h = d.awayT,
              f = o.a.getScores(r.match, n.proModule),
              y = f.homeScores,
              v = f.awayScores;
            if (
              ((l.homeScores = y),
              (l.homeScoresT = m),
              (l.awayScores = v),
              (l.awayScoresT = h),
              null !== (c = r.match) && void 0 !== c && c.bsScores)
            ) {
              var _,
                k,
                A = (null === (_ = r.match.bsScores) || void 0 === _
                  ? void 0
                  : _.e) || [0, 0],
                j = (null === (k = r.match.bsScores) || void 0 === k
                  ? void 0
                  : k.h) || [0, 0];
              (l.homeScore_e = A[0]),
                (l.awayScore_e = A[1]),
                (l.homeScore_h = j[0]),
                (l.awayScore_h = j[1]);
            }
          } catch (A) {}
          try {
            r.match.competition &&
              (r.match.competition.name &&
                (l.compName = r.match.competition.name),
              r.match.competition.id && (l.compId = r.match.competition.id),
              r.match.competition.slug &&
                (l.compSlug = r.match.competition.slug));
          } catch (e) {}
          try {
            r.stats.items[4] &&
              ((l.stats[4].home = Number(r.stats.items[4].home)),
              (l.stats[4].away = Number(r.stats.items[4].away)));
          } catch (e) {}
          try {
            r.stats.items[301] &&
              ((l.stats[301].home = Number(r.stats.items[301].home)),
              (l.stats[301].away = Number(r.stats.items[301].away)));
          } catch (e) {}
          try {
            r.match &&
              r.match.venue &&
              r.match.venue.name &&
              (l.venueName = r.match.venue.name);
          } catch (e) {}
          try {
            l.matchchapters = r.match.competition.chapters;
          } catch (e) {
            l.matchchapters = 4;
          }
          if ("basketball" == n.proModule)
            try {
              var w = r.match.homeScores,
                S = r.match.awayScores;
              5 != w.length || 5 != S.length || (0 == w[4] && 0 == S[4])
                ? (l.hasOT = !1)
                : (l.hasOT = !0);
            } catch (e) {
              l.hasOT = !1;
            }
          else if ("icehockey" == n.proModule)
            try {
              var T,
                M = l.homeScores,
                x = l.awayScores,
                O =
                  null === (T = r.match) || void 0 === T ? void 0 : T.statusId;
              0 != M[3] || 0 != x[3] || 6 == O || 10 == O || 105 == O
                ? (l.hasOT = !0)
                : (l.hasOT = !1),
                0 != M[4] || 0 != x[4] || 110 == O
                  ? (l.hasAP = !0)
                  : (l.hasAP = !1),
                l.hasAP && (l.hasOT = !0);
            } catch (A) {}
          else if ("amfootball" == n.proModule)
            try {
              var I,
                D = l.homeScores,
                C = l.awayScores,
                P =
                  null === (I = r.match) || void 0 === I ? void 0 : I.statusId;
              0 != D[4] || 0 != C[4] || 6 == P || 10 == P || 105 == P
                ? (l.hasOT = !0)
                : (l.hasOT = !1);
            } catch (e) {
              l.hasOT = !1;
            }
          else if ("handball" == n.proModule) {
            var E,
              z = l.homeScores,
              L = l.awayScores,
              R = null === (E = r.match) || void 0 === E ? void 0 : E.statusId;
            try {
              0 != z[2] || 0 != L[2] || [6, 7, 11, 12].includes(R)
                ? (l.hasOT = !0)
                : (l.hasOT = !1);
            } catch (e) {
              l.hasOT = !1;
            }
            0 != z[3] || 0 != L[3] || [8, 13, 110].includes(R)
              ? (l.hasAP = !0)
              : (l.hasAP = !1),
              l.hasAP && (l.hasOT = !0);
          } else if ("waterpolo" == n.proModule) {
            var B = l.homeScores,
              N = l.awayScores;
            try {
              0 != B[4] || 0 != N[4] ? (l.hasOT = !0) : (l.hasOT = !1);
            } catch (e) {
              l.hasOT = !1;
            }
            0 != B[5] || 0 != N[5] ? (l.hasAP = !0) : (l.hasAP = !1),
              l.hasAP && (l.hasOT = !0);
          }
          try {
            (l.isDouble = !!r.match.homeTeam.isDouble),
              l.isDouble &&
                ((l.homeTeamLogo_double = [
                  r.match.homeTeam.doubleTeams[0].logo,
                  r.match.homeTeam.doubleTeams[1].logo,
                ]),
                (l.awayTeamLogo_double = [
                  r.match.awayTeam.doubleTeams[0].logo,
                  r.match.awayTeam.doubleTeams[1].logo,
                ]));
          } catch (A) {}
          try {
            var F, U;
            l.one_or_two = !(
              null === (F = r.match.ckScores) ||
              void 0 === F ||
              null === (U = F.p2) ||
              void 0 === U ||
              !U.length
            );
          } catch (e) {}
          try {
            var H,
              W,
              V,
              G =
                null === (H = r.match) ||
                void 0 === H ||
                null === (W = H.competition) ||
                void 0 === W ||
                null === (V = W.country) ||
                void 0 === V
                  ? void 0
                  : V.logo;
            G.includes("lol")
              ? (l.esports_type = "lol")
              : G.includes("csgo")
              ? (l.esports_type = "csgo")
              : G.includes("dota") && (l.esports_type = "dota");
          } catch (e) {}
          return l;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          tour_tab: "overview",
          tour_id: "",
          season_id: "",
          tourData: {},
          tour_teamMap: {},
          tour_playerMap: {},
          tour_teamData: {},
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = (n(6), n(7));
      t.default = {
        tourDataAction: function (e, t) {
          var n = e.commit,
            l = t.comp_id,
            c = t.season_id,
            d = t.lang,
            m = t.tab;
          return new Promise(
            (function () {
              var e = Object(o.a)(
                regeneratorRuntime.mark(function e(t, o) {
                  var h, f;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("overview" != m) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 3),
                            Object(r.Bb)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 3:
                          (h = e.sent), (e.next = 33);
                          break;
                        case 6:
                          if ("fixtures" != m) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9),
                            Object(r.Ab)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 9:
                          (h = e.sent), (e.next = 33);
                          break;
                        case 12:
                          if ("standings" != m) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 15),
                            Object(r.Db)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 15:
                          (h = e.sent), (e.next = 33);
                          break;
                        case 18:
                          if ("stats" != m) {
                            e.next = 27;
                            break;
                          }
                          return (
                            (e.next = 21),
                            Object(r.Cb)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 21:
                          return (
                            (h = e.sent),
                            (e.next = 24),
                            Object(r.Eb)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 24:
                          (f = e.sent), (e.next = 33);
                          break;
                        case 27:
                          if ("teams" != m) {
                            e.next = 33;
                            break;
                          }
                          return (
                            (e.next = 30),
                            Object(r.Fb)({ comp_id: l, season_id: c, lang: d })
                          );
                        case 30:
                          (h = e.sent), (e.next = 33);
                          break;
                        case 33:
                          f && n("tourDataMutation_stats", f),
                            n("tourDataMutation", h || !1),
                            t(1);
                        case 36:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
        tourMatchesAction: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, r, l, c, d;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        (r = t.comp_id),
                        (l = t.season_id),
                        (c = t.lang),
                        (n.next = 4),
                        toureMatches({ comp_id: r, season_id: l, lang: c })
                      );
                    case 4:
                      (d = n.sent), o("tourMatchesMutation", d);
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3);
      function r(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : r(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        changeTourTabMutation: function (e, data) {
          e.tour_tab = data;
        },
        changeTourIdMutation: function (e, data) {
          e.tour_id = data;
        },
        changeSeasonIdMutation: function (e, data) {
          e.season_id = data;
        },
        tourMatchesMutation: function (e, data) {
          e.tourMatchesData = data;
        },
        tourDataMutation: function (e, data) {
          data
            ? (data.teams &&
                data.teams.map(function (t) {
                  e.tour_teamMap[t.id] = t;
                }),
              data.players &&
                data.players.map(function (t) {
                  e.tour_playerMap[t.id] = t;
                }),
              data.matches &&
                data.matches.forEach(function (t) {
                  (t.homeTeam = l({}, e.tour_teamMap[t.homeTeam.id])),
                    (t.awayTeam = l({}, e.tour_teamMap[t.awayTeam.id]));
                }),
              (e.tourData = data))
            : ((e.tour_teamMap = {}),
              (e.tour_playerMap = {}),
              (e.tourData = {}));
        },
        tourDataMutation_stats: function (e, data) {
          e.tour_teamData = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(14);
      t.default = {
        bkTourGetter: function (e) {
          var t = {
              tourlogo: "",
              tourName: "",
              country: "",
              countryLogo: "",
              titleHolder: "",
              curSeasonId: "",
              topSalaryPlayer_name: "",
              topSalaryPlayer_marketValue: "",
              palyers: "",
              foreignPlayers: "",
              teamsNum: "",
              numberRounds: "",
              facts: [
                { text: "Division level", value: "" },
                { text: "Number of rounds", value: "" },
                { text: "Players", value: "" },
                { text: "Foreigners", value: "" },
                { text: "map_basketball['Average ages']", value: "" },
                { text: "Home team wins", value: "" },
                { text: "Draws", value: "" },
                { text: "Away team wins", value: "" },
              ],
              isFact: !1,
              divisio: [
                { title: "Upper division", value: [] },
                {
                  title: "map_basketball['Newcomers from Upper division']",
                  value: [],
                },
                { title: "Lower division", value: [] },
                {
                  title: "map_basketball['Newcomers from Lower division']",
                  value: [],
                },
              ],
              isLeague: !1,
            },
            data = e.tourData;
          if (data.compDetail) {
            data.compDetail.competition &&
              ((t.tourName = data.compDetail.competition.name),
              (t.tourlogo = data.compDetail.competition.logo),
              (t.curSeasonId = data.compDetail.competition.curSeasonId),
              (t.numberRounds = data.compDetail.competition.round_count || "-"),
              (t.facts[0].value = data.compDetail.competition.level || "-"),
              (t.facts[1].value = t.numberRounds),
              data.compDetail.competition.country &&
                ((t.country = data.compDetail.competition.country.name),
                (t.countryLogo = data.compDetail.competition.country.logo))),
              data.compDetail.mostSalaryPlayer
                ? ((t.topSalaryPlayer_name =
                    data.compDetail.mostSalaryPlayer.name || "-"),
                  (t.topSalaryPlayer_marketValue =
                    data.compDetail.mostSalaryPlayer.marketValue))
                : ((t.topSalaryPlayer_name = "-"),
                  (t.topSalaryPlayer_marketValue = "")),
              data.compDetail.prevChampionTeam &&
              e.tour_teamMap[data.compDetail.prevChampionTeam.id]
                ? (t.titleHolder =
                    e.tour_teamMap[data.compDetail.prevChampionTeam.id].name ||
                    "-")
                : (t.titleHolder = "-"),
              (t.palyers = data.compDetail.totalPlayer || "-"),
              (t.facts[2].value = t.palyers),
              (t.teamsNum = data.compDetail.teamsCount || "-"),
              (t.foreignPlayers = data.compDetail.teamsForeignPlayers || "-"),
              (t.facts[3].value = t.foreignPlayers),
              (t.facts[4].value = "-"),
              (t.facts[5].value = data.compDetail.homeWon
                ? data.compDetail.homeWon + "%"
                : "-"),
              (t.facts[6].value = data.compDetail.draw
                ? data.compDetail.draw + "%"
                : "-"),
              (t.facts[7].value = data.compDetail.awayWon
                ? data.compDetail.awayWon + "%"
                : "-"),
              data.compDetail.highLevelComps &&
                data.compDetail.highLevelComps.map(function (e) {
                  t.divisio[0].value.push(e);
                }),
              data.compDetail.dropTeams &&
                data.compDetail.dropTeams.map(function (n) {
                  e.tour_teamMap[n.id] &&
                    t.divisio[1].value.push(e.tour_teamMap[n.id]);
                }),
              data.compDetail.lowLevelComps &&
                data.compDetail.lowLevelComps.map(function (e) {
                  t.divisio[2].value.push(e);
                }),
              data.compDetail.promoteTeams &&
                data.compDetail.promoteTeams.map(function (n) {
                  e.tour_teamMap[n.id] &&
                    t.divisio[3].value.push(e.tour_teamMap[n.id]);
                });
            for (var i = 0; i < t.facts.length; i++)
              if ("" != t.facts[i].value && "-" != t.facts[i].value) {
                t.isFact = !0;
                break;
              }
            (data.compDetail.championTeams &&
              0 != data.compDetail.championTeams.length) ||
            (data.compDetail.prevChampionTeam &&
              0 != data.compDetail.prevChampionTeam.length) ||
            t.isFact ||
            0 != t.divisio[0].value.length ||
            0 != t.divisio[1].value.length ||
            0 != t.divisio[2].value.length ||
            0 != t.divisio[3].value.length
              ? (t.isLeague = !0)
              : (t.isLeague = !1);
          }
          return t;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          team_tab: "overview",
          team_teamMap: {},
          team_playerMap: {},
          teamData: {},
          team_seasons: [],
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = (n(6), n(7));
      t.default = {
        teamDataAction: function (e, t) {
          var n = e.commit,
            l = t.team_id,
            c = t.lang,
            d = t.tab,
            m = t.season_id;
          return new Promise(
            (function () {
              var e = Object(o.a)(
                regeneratorRuntime.mark(function e(t, o) {
                  var h;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("overview" != d) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 3), Object(r.qb)({ team_id: l, lang: c })
                          );
                        case 3:
                          (h = e.sent), (e.next = 18);
                          break;
                        case 6:
                          if ("stats" != d) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9),
                            Object(r.sb)({ team_id: l, season_id: m, lang: c })
                          );
                        case 9:
                          (h = e.sent), (e.next = 18);
                          break;
                        case 12:
                          if ("squad" != d) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 15),
                            Object(r.rb)({ team_id: l, lang: c, season_id: m })
                          );
                        case 15:
                          (h = e.sent), (e.next = 18);
                          break;
                        case 18:
                          n("teamDataMutation", h || !1), t(1);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
        changeSeasonAction: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l, c, d, m;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        (l = t.team_id),
                        (c = t.lang),
                        (d = t.season_id),
                        (n.next = 4),
                        Object(r.sb)({ team_id: l, season_id: d, lang: c })
                      );
                    case 4:
                      (m = n.sent), o("teamDataMutation", m || !1);
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3);
      function r(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : r(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        changeTeamTabMutation: function (e, data) {
          e.team_tab = data;
        },
        teamDataMutation: function (e, data) {
          data
            ? (data.teams &&
                data.teams.map(function (t) {
                  e.team_teamMap[t.id] = t;
                }),
              data.players &&
                data.players.map(function (t) {
                  e.team_playerMap[t.id] = t;
                }),
              data.matches &&
                data.matches.forEach(function (t) {
                  (t.homeTeam = l({}, e.team_teamMap[t.homeTeam.id])),
                    (t.awayTeam = l({}, e.team_teamMap[t.awayTeam.id]));
                }),
              data.bkExtra &&
                data.bkExtra.seasons &&
                (e.team_seasons = data.bkExtra.seasons),
              (e.teamData = l(l({}, e.teamData), data)))
            : ((e.team_teamMap = {}),
              (e.team_playerMap = {}),
              (e.teamData = {}));
        },
        teamLineupsMutation: function (e, data) {
          e.teamData.teamLineups = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(14), n(24);
      var o = n(0);
      t.default = {
        bkTeamGetter: function (e) {
          var t,
            n = {
              compId: "",
              compName: "",
              compSlug: "",
              teamlogo: "",
              teamName: "",
              teamId: "",
              country: "",
              countryLogo: "",
              currentSeason: "",
              ppg: "",
              rpg: "",
              apg: "",
              pa: "",
              hasStats: 1,
            };
          if (e.teamData.bkExtra) {
            var r = e.teamData.bkExtra;
            r.matches
              ? ((n.ppg = Number(r.points / r.matches).toFixed(1)),
                (n.rpg = Number(r.rebounds / r.matches).toFixed(1)),
                (n.apg = Number(r.assists / r.matches).toFixed(1)),
                (n.pa = Number(r.pointsAgainst / r.matches).toFixed(1)))
              : ((n.ppg = "-"), (n.rpg = "-"), (n.apg = "-"), (n.pa = "-"));
            try {
              n.currentSeason = r.seasons[0].year;
            } catch (e) {}
          } else (n.ppg = "-"), (n.rpg = "-"), (n.apg = "-"), (n.pa = "-");
          if (e.teamData.team) {
            var l,
              c,
              d,
              m = e.teamData.team;
            (n.teamlogo = m.logo || ""),
              (n.teamName = m.name || "-"),
              (n.teamId = m.id),
              (n.country = m.country ? m.country.name : "-"),
              (n.countryLogo = m.country ? m.country.logo : ""),
              (n.compId = m.comp.id),
              (n.compName =
                (null === (l = m.comp) || void 0 === l ? void 0 : l.name) ||
                ""),
              (n.compSlug =
                (null === (c = m.comp) || void 0 === c ? void 0 : c.slug) ||
                ""),
              (n.hasStats =
                (null === (d = m.comp) || void 0 === d ? void 0 : d.hasStats) ||
                0);
          } else
            (n.teamlogo = ""),
              (n.teamName = "-"),
              (n.country = "-"),
              (n.countryLogo = "");
          var h =
            null === (t = e.teamData.team) || void 0 === t ? void 0 : t.salary;
          return (
            (n.salary = h ? o.a.formatMoney(h.annualSalary, h.mode) : "-"), n
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          player_tab: "overview",
          playerData: {},
          player_teamMap: {},
          player_compMap: {},
          player_seasonsMap: {},
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = (n(6), n(7));
      t.default = {
        playerDataAction: function (e, t) {
          var n = e.commit,
            l = t.player_id,
            c = t.lang;
          return new Promise(
            (function () {
              var e = Object(o.a)(
                regeneratorRuntime.mark(function e(t, o) {
                  var d;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), Object(r.c)({ player_id: l, lang: c })
                          );
                        case 2:
                          (d = e.sent), n("playerDataMutation", d || !1), t(1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3);
      function r(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : r(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        changePlayerTabMutation: function (e, data) {
          e.player_tab = data;
        },
        playerDataMutation: function (e, data) {
          data
            ? (data.teams &&
                data.teams.map(function (t) {
                  e.player_teamMap[t.id] = t;
                }),
              data.matches &&
                data.matches.forEach(function (t) {
                  (t.homeTeam = l({}, e.player_teamMap[t.homeTeam.id])),
                    (t.awayTeam = l({}, e.player_teamMap[t.awayTeam.id]));
                }),
              data.competitions &&
                data.competitions.map(function (t) {
                  e.player_compMap[t.id] = t;
                }),
              data.seasons &&
                data.seasons.map(function (t) {
                  e.player_seasonsMap[t.id] = t;
                }),
              (e.playerData = data))
            : (e.playerData = {});
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(24), n(8), n(6), n(9), n(14);
      var o = n(0);
      t.default = {
        bkplayerGetter: function (e) {
          var t,
            n = {
              compId: "",
              compName: "",
              compSlug: "",
              playerlogo: "",
              playerName: "",
              teamLogo: "",
              teamName: "",
              teamSlug: "",
              teamId: "",
              playerId: "",
              country: "",
              countryLogo: "",
              currentSeason: "",
              currentSeasonId: "",
              currentCompId: "",
              currentPrem: "",
              pts: "",
              reb: "",
              ast: "",
              per: "",
            };
          if (e.playerData.player) {
            var r = e.playerData.player;
            (n.playerlogo = r.logo),
              (n.playerName = r.name),
              (n.playerId = r.id),
              (n.country = r.country ? r.country.name : ""),
              (n.countryLogo = r.country ? r.country.logo : "");
            try {
              (n.teamLogo = e.player_teamMap[r.team.id].logo),
                (n.teamId = e.player_teamMap[r.team.id].id),
                (n.teamName = e.player_teamMap[r.team.id].name),
                (n.teamSlug = e.player_teamMap[r.team.id].slug);
            } catch (e) {}
          }
          e.playerData.totals &&
            (function () {
              var t = "",
                o = "";
              try {
                (t =
                  e.player_compMap[
                    e.player_teamMap[e.playerData.player.team.id].comp.id
                  ].curSeasonId),
                  e.player_seasonsMap[t]
                    ? ((n.currentSeason = e.player_seasonsMap[t].year),
                      (n.currentSeasonId = t))
                    : ((n.currentSeason =
                        e.player_seasonsMap[
                          Object.keys(e.player_seasonsMap)[0]
                        ].year),
                      (n.currentSeasonId =
                        e.player_seasonsMap[
                          Object.keys(e.player_seasonsMap)[0]
                        ].id));
              } catch (t) {
                try {
                  (n.currentSeason =
                    e.player_seasonsMap[
                      Object.keys(e.player_seasonsMap)[0]
                    ].year),
                    (n.currentSeasonId =
                      e.player_seasonsMap[
                        Object.keys(e.player_seasonsMap)[0]
                      ].id);
                } catch (e) {}
              }
              try {
                n.currentCompId =
                  e.player_seasonsMap[n.currentSeasonId].competition.id;
              } catch (e) {}
              for (var r = !1, i = 0; i < e.playerData.totals.length; i++)
                try {
                  if (e.playerData.totals[i].season.id == t) {
                    r = !0;
                    var l = e.playerData.totals[i].bkDetail;
                    l.matches && 0 != l.matches
                      ? ((n.pts = Number(l.points / l.matches).toFixed(1)),
                        (n.reb = Number(l.rebounds / l.matches).toFixed(1)),
                        (n.ast = Number(l.assists / l.matches).toFixed(1)),
                        (n.per = Number(l.personalFouls / l.matches).toFixed(
                          1
                        )))
                      : ((n.pts = "-"),
                        (n.reb = "-"),
                        (n.ast = "-"),
                        (n.per = "-")),
                      (o = e.playerData.totals[i].scope.id),
                      e.playerData.scopes &&
                        0 != e.playerData.scopes.length &&
                        e.playerData.scopes.map(function (e) {
                          e.id == o && (n.currentPrem = e.name);
                        });
                    break;
                  }
                } catch (e) {}
              r || ((n.pts = "-"), (n.reb = "-"), (n.ast = "-"), (n.per = "-"));
            })(),
            e.playerData.competitions &&
              0 != e.playerData.competitions.length &&
              ((n.compId = e.playerData.competitions[0].id),
              (n.compName = e.playerData.competitions[0].name),
              (n.compSlug = e.playerData.competitions[0].slug));
          var l =
            null === (t = e.playerData.player) || void 0 === t
              ? void 0
              : t.salary;
          return (
            (n.salary = l ? o.a.formatMoney(l.annualSalary, l.mode) : "-"), n
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(6);
      var o = n(16),
        r = n(131),
        l = n.n(r),
        c = n(105).Root.fromJSON(n(107)),
        d =
          (c.lookup("onescore.app.v1.Response"),
          c.lookup("onescore.app.v1.User"));
      t.default = {
        setLoginpagevisible: function (e, t) {
          return e.commit("setLoginpagevisible", t);
        },
        loginWithSocial: function (e, t) {
          var n = { type: "", access_token: t.token };
          return (
            "facebook" == t.type
              ? (n.type = 1)
              : "google" == t.type && (n.type = 2),
            Object(o.b)("/v1/web/api/user/login_with_social", n).then(function (
              n
            ) {
              return e.commit("loginWithSocial", t, n);
            })
          );
        },
        checkUserStatus: function (e, t) {
          return new Promise(function () {
            return e.commit("checkUserStatus", t);
          })
            .then(function (e) {
              return e;
            })
            .catch(function (n) {
              return 0 == t.showLogin
                ? ""
                : e.commit("setLoginpagevisible", !0);
            });
        },
        getInfo: function (e, t) {
          if (
            !l.a.get("aitoken") ||
            !localStorage.infoRes ||
            "false" == localStorage.infoRes ||
            "{}" == localStorage.infoRes
          )
            return Object(o.a)("/v1/web/api/user/info", d).then(function (n) {
              return (
                n && (localStorage.infoRes = JSON.stringify(n)),
                e.commit("getInfo", { callback: t, res: n })
              );
            });
          e.commit("getInfo", {
            callback: t,
            res: JSON.parse(localStorage.infoRes),
          });
        },
        signOut: function (e, t) {
          (localStorage.infoRes = "{}"),
            Object(o.b)("/v1/web/api/user/logout").then(function (n) {
              return e.commit("signOut", t, n);
            });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(6);
      t.default = {
        setLoginpagevisible: function (e, t) {
          e.loginPageVisible = t;
        },
        loginWithSocial: function (e, t) {
          t.call && t.call();
        },
        getInfo: function (e, t) {
          var n = t.callback,
            o = t.res;
          o && o.id && ((e.userData = o), (e.loginPageVisible = !1)),
            e.loginPageCall &&
              (e.loginPageCall.forEach(function (e) {
                "function" == typeof e && e();
              }),
              (e.loginPageCall = [])),
            n && n(e.userData);
        },
        checkUserStatus: function (e, t) {
          if (
            (e.loginPageCall || (e.loginPageCall = []),
            "function" == typeof t.call && e.loginPageCall.push(t.call),
            !e.userData)
          )
            throw !1;
          t.call && t.call(e.userData), Promise.resolve(e.userData);
        },
        signOut: function (e, t, n) {
          e.userData = !1;
          try {
            try {
              AiScore.track.google.gtag("event", "sign_up");
            } catch (e) {}
            window.location.reload();
          } catch (e) {}
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = {});
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = {});
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = n(7);
      t.default = {
        getH2hList: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l, c, d;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        (l = t.sid),
                        (c = t.lang),
                        (n.next = 4),
                        Object(r.db)({ sid: l, lang: c })
                      );
                    case 4:
                      return (
                        (d = n.sent), o("setH2hList", d), n.abrupt("return", d)
                      );
                    case 7:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        h2hDetail: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(r.bb)(t);
                    case 3:
                      return (
                        (l = n.sent),
                        o("seth2hDetail", l),
                        n.abrupt("return", l)
                      );
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        h2h_hot: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(r.ab)(t);
                    case 3:
                      return (
                        (l = n.sent), o("sethot_h2h", l), n.abrupt("return", l)
                      );
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        seoLiveDetail: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(r.V)(t);
                    case 3:
                      return (
                        (l = n.sent),
                        o("seth2hDetail", l.h2h || {}),
                        n.abrupt("return", l)
                      );
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3);
      n(14), n(23);
      function r(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : r(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      t.default = {
        setH2hList: function (e, data) {
          if (
            data &&
            data.teams &&
            data.teams.length &&
            data.matches &&
            data.matches.length
          ) {
            var t = {};
            data.teams.map(function (e) {
              t[e.id] = e;
            }),
              (e.teamsMap = t),
              data.matches.forEach(function (e) {
                (e.homeTeam = t[e.homeTeam.id]),
                  (e.awayTeam = t[e.awayTeam.id]);
              }),
              (e.lists = data.matches),
              (e.updateTime = data.t);
          }
        },
        setTab: function (e, data) {
          e.tab = data;
        },
        seth2hDetail: function (e, data) {
          if (((e.h2hDetailData = data), "{}" !== JSON.stringify(data))) {
            var t, n, o, r, l;
            null === (t = data.comps) ||
              void 0 === t ||
              t.map(function (t) {
                e.detail_compsMap[t.id] = t;
              }),
              null === (n = data.teams) ||
                void 0 === n ||
                n.map(function (t) {
                  e.detail_teamsMap[t.id] = t;
                }),
              null != data &&
                null !== (o = data.home) &&
                void 0 !== o &&
                o.length &&
                data.home.map(function (t) {
                  e.detail_homeMap[t.id] = t;
                }),
              null != data &&
                null !== (r = data.away) &&
                void 0 !== r &&
                r.length &&
                data.away.map(function (t) {
                  e.detail_awayMap[t.id] = t;
                });
            try {
              var c;
              null === (c = data.venues) ||
                void 0 === c ||
                c.map(function (t) {
                  e.detail_venuesMap[t.id] = t;
                });
            } catch (t) {
              e.detail_venuesMap = {};
            }
            try {
              var d,
                m,
                h,
                f,
                y,
                v = e.h2hDetailData.match;
              (v.homeTeam =
                e.detail_teamsMap[
                  null == v || null === (d = v.homeTeam) || void 0 === d
                    ? void 0
                    : d.id
                ] || {}),
                (v.awayTeam =
                  e.detail_teamsMap[
                    null == v || null === (m = v.awayTeam) || void 0 === m
                      ? void 0
                      : m.id
                  ] || {}),
                (v.competition =
                  e.detail_compsMap[
                    null == v || null === (h = v.competition) || void 0 === h
                      ? void 0
                      : h.id
                  ] || {}),
                (e.matchInfo = v),
                (e.home =
                  null === (f = v.homeTeam) || void 0 === f ? void 0 : f.slug),
                (e.away =
                  null === (y = v.awayTeam) || void 0 === y ? void 0 : y.slug);
            } catch (t) {
              e.matchInfo = { homeTeam: {}, awayTeam: {}, competition: {} };
            }
            var _ = [],
              k = [];
            null === (l = e.h2hDetailData.comps) ||
              void 0 === l ||
              l.map(function (e) {
                _.push({ label: e.name, key: e.id }),
                  k.push({ label: e.name, key: e.id });
              }),
              (e.table2Opt = _),
              (e.table3Opt = k),
              (e.h_isSelect2 = _.map(function (e) {
                return e.key;
              })),
              (e.a_isSelect2 = _.map(function (e) {
                return e.key;
              }));
          }
        },
        setHomeAway: function (e, data) {},
        sethot_h2h: function (e, data) {
          var t;
          if (
            ((e.hot_h2h = data),
            null !== (t = data.teams) && void 0 !== t && t.length)
          ) {
            var n = {};
            data.teams.map(function (e) {
              n[e.id] = e;
            }),
              (e.hot_h2h_maps = n);
          }
        },
        setMatchInfo: function (e, data) {
          e.matchInfo = l(l({}, e.matchInfo), data);
        },
        change_h_isSelect2: function (e, data) {
          e.h_isSelect2 = data;
        },
        change_a_isSelect2: function (e, data) {
          e.a_isSelect2 = data;
        },
        setHomeResult: function (e, data) {
          e.homeResult = data;
        },
        setAwayResult: function (e, data) {
          e.awayResult = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(4),
        r = n(7);
      t.default = {
        getFifaDataAction: function (e, t) {
          return Object(o.a)(
            regeneratorRuntime.mark(function n() {
              var o, l;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (o = e.commit), (n.next = 3), Object(r.kb)(t);
                    case 3:
                      (l = n.sent), o("setFifaDataMutation", l);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          setFifaDataMutation: function (e, data) {
            if (((e.fifaData = data), e.fifaData.fifaRankings))
              if (0 == e.fifaData.fifaRankings.length) e.fifaRankingsff = [];
              else {
                var t = e.fifaData.fifaRankings.filter(function (t) {
                  return 0 == e.pub_type || t.region.id == e.pub_type;
                });
                e.fifaRankingsff = t;
              }
          },
          pub_timeMutation: function (e, data) {
            e.pub_time = data;
          },
          pub_typeMutation: function (e, data) {
            if (((e.pub_type = data), e.fifaData.fifaRankings))
              if (0 == e.fifaData.fifaRankings.length) e.fifaRankingsff = [];
              else {
                var t = e.fifaData.fifaRankings.filter(function (t) {
                  return 0 == e.pub_type || t.region.id == e.pub_type;
                });
                e.fifaRankingsff = t;
              }
          },
        });
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(7);
      t.default = {
        FETCH_FOOTBAL_TEAM: function (e, t) {
          var n = e.commit;
          return Object(o.q)(t).then(function (e) {
            return n("SET_FOOTBAL_TEAM", { payload: e[0], transfer: e[1] });
          });
        },
        FETCH_FOOTBALL_MATCH: function (e, t) {
          var n = e.commit;
          return Object(o.p)(t).then(function (e) {
            return n("SET_FOOTBAL_MATCH", e || {}, { root: !1 });
          });
        },
        FETCH_TRANSFERS_DATA: function (e, t) {
          var n = e.commit;
          return Object(o.s)(t).then(function (e) {
            return n("SET_TRANSFERS_DATA", e, { root: !1 });
          });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0);
      t.default = {
        SET_FOOTBAL_TEAM: function (e, t) {
          var n = t.payload,
            r = t.transfer,
            l = void 0 === r ? {} : r,
            c = o.a.array_to_object(n.teams || []),
            d = o.a.array_to_object(n.comps || []),
            m = o.a.array_to_object(n.players || []),
            h = o.a.array_to_object(n.matches || []),
            f = o.a.array_to_object(n.playerTotals || [], "type"),
            y = o.a.array_to_object(n.teamPlayerTotals || [], "type");
          l.players && (l.playersObj = o.a.array_to_object(l.players || [])),
            l.teams && (l.teamsObj = o.a.array_to_object(l.teams || []));
          var data = Object.assign(
            {},
            {
              teamObj: c,
              compObj: d,
              playerObj: m,
              playerTotalsObj: f,
              matchObj: h,
              teamPlayerTotalsObj: y,
              transferData: l,
            },
            n
          );
          for (var i in data) e.data[i] = data[i];
        },
        SET_FOOTBAL_MATCH: function (e, t) {
          var n = o.a.array_to_object(t.teams || [], "id"),
            r = o.a.array_to_object(t.competitions || [], "id"),
            l = o.a.array_to_object(t.matches || [], "id"),
            c = {
              teamObj: Object.assign(e.teamObj || {}, n),
              compObj: Object.assign(e.compObj || {}, r),
              matchObj: Object.assign(e.matchObj || {}, l),
              matches: t.matches || [],
            };
          for (var i in c) e.data[i] = c[i];
        },
        SET_TRANSFERS_DATA: function (e, t) {
          t.players && (t.playersObj = o.a.array_to_object(t.players || [])),
            t.teams && (t.teamsObj = o.a.array_to_object(t.teams || [])),
            (e.data = Object.assign({}, e.data, { transferData: t }));
        },
        SET_TRANSDATE: function (e, data) {
          e.transDate = data;
        },
      };
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(14), n(8), n(6), n(63);
      var o = n(7);
      t.default = {
        setAlerts: function (e, t) {
          (0, e.commit)("setAlerts", t);
        },
        setHideFinish: function (e, t) {
          (0, e.commit)("setHideFinish", t);
        },
        setActiveTab: function (e, t) {
          var n = e.commit;
          n("setActiveTab", t), n("setFavMatches", t);
        },
        getFootballLeft: function (e, t, n) {
          var r = e.commit,
            l = { lang: t, sport_id: 1 };
          return Promise.all([Object(o.u)(l), Object(o.v)(l)]).then(function (
            e
          ) {
            r("setFootballLeft", {
              categories: e[1].countries || [],
              hotComps: e[0].hotComps || [],
            });
          });
        },
        getMatches: function (e, t) {
          var n = e.commit;
          e.state;
          return Object(o.w)(t).then(function (e) {
            return (
              n("setMatches", { data: e, sort: t.sort, locale: t.locale }),
              n("initMatches", t),
              n("setFavMatches", t),
              e
            );
          });
        },
        initMatches: function (e, t) {
          var n = e.commit;
          n("initMatches", t), n("setFavMatches", t);
        },
        setFavMatches: function (e, t) {
          (0, e.commit)("setFavMatches", t);
        },
        setCurrentDate: function (e, t) {
          (0, e.commit)("setCurrentDate", t);
        },
        setRundMatch: function (e, t) {
          (0, e.commit)("setRundMatch", t);
        },
        setMatchSize: function (e, t) {
          (0, e.commit)("setMatchSize", t);
        },
        getFav: function (e, t) {
          var n = e.commit;
          e.state;
          return Object(o.N)(t).then(function (e) {
            n("setFav", e);
          });
        },
        removeFav: function (e, t) {
          var n = e.commit,
            r = (e.state, t.id),
            l = t.type;
          return (
            n("removeFav", { id: r, type: l, name: t.name, child: t.child }),
            Object(o.lb)(r, l).then(function (e) {})
          );
        },
        addFav: function (e, t) {
          var n = e.commit,
            r = (e.state, t.id),
            l = t.type;
          return (
            n("addFav", { id: r, type: l, name: t.name, child: t.child }),
            Object(o.a)(r, l).then(function (e) {})
          );
        },
        changeMatches: function (e, t) {
          var n = e.commit;
          e.state.matchesData.matchesMap[t.matchId || t.id] &&
            n("changeMatches", t);
        },
        setSortBy: function (e, t) {
          (0, e.commit)("setSortBy", t);
        },
        setCustomize: function (e, t) {
          (0, e.commit)("setCustomize", t);
        },
        setGoalAnimate: function (e, t) {
          var n = e.commit;
          n("setGoalAnimate", t),
            setTimeout(function () {
              n("removeGoalAnimate");
            }, 5e3);
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3),
        r = (n(14), n(23), n(0)),
        l = n(5);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : c(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var m = {
        setMatchSize: function (data, e) {
          var t = 0;
          e.themeSize;
          data.packUp ||
            (data.list || []).forEach(function (n) {
              var o = e.matchesData.matchesMap[n.id] || {};
              n.show && (t += (o.note ? 20 : 0) + e.sizeData.match);
            }),
            0 !== e.themeTitle &&
              (t > 0 && (t += e.sizeData.head),
              data.packUp && (t = e.sizeData.head)),
            data.size != t && (data.size = t);
        },
        initMatchSize: function (e, t, n) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            if ((!n || o.id == n) && (this.setMatchSize(o, t), o.id == n))
              break;
          }
          return e;
        },
      };
      t.default = {
        setAlerts: function (e, t) {
          e.alerts = t || [];
        },
        setActiveTab: function (e, t) {
          e.activeTab = t || "Live";
        },
        setMatches: function (e, t) {
          t.data &&
            ((e.matchesData = Object.assign(e.matchesData, t.data || {})),
            (e.matchesData.matchesMap = r.a.array_to_object(
              t.data.matches || [],
              "id"
            )),
            (e.matchesData.teamsMap = r.a.array_to_object(
              t.data.teams || [],
              "id"
            )),
            (e.matchesData.competitionsMap = r.a.array_to_object(
              t.data.competitions || [],
              "id"
            )));
        },
        initMatches: function (e, t) {
          var n = e.sortBy,
            o = e.matchesData.matches,
            c = r.a.array_to_object(e.matchesData.allMatches, "id"),
            h = {},
            f = [],
            y = r.a.array_to_object(e.matchesData.liveMatches, "id"),
            v = {},
            _ = [],
            k = r.a.array_to_object(e.matchesData.scheduleMatches, "id"),
            A = {},
            j = [],
            w = r.a.array_to_object(e.matchesData.finishedMatches, "id"),
            S = {},
            T = [],
            M = null;
          o.forEach(function (t) {
            var o;
            M =
              2 == n
                ? "".concat(t.competition.id, "_").concat(t.matchTime)
                : t.competition.id;
            var r = t.id,
              d =
                (e.matchesData.competitionsMap[t.competition.id] &&
                  (null ===
                    (o = e.matchesData.competitionsMap[t.competition.id]) ||
                  void 0 === o
                    ? void 0
                    : o.country)) ||
                {},
              m = {
                competitionId: t.competition.id,
                id: M,
                name: d.name || "",
                size: 0,
              },
              x = !e.hideFinish || 3 != t.matchStatus,
              O = "";
            if (t.stage)
              for (var I = e.matchesData.stages, i = 0; i < I.length; i++)
                if (t.stage.id === I[i].id) {
                  O = I[i].name;
                  break;
                }
            if (
              (e.matchesData.compMatchesMap[m.competitionId]
                ? e.matchesData.compMatchesMap[m.competitionId].push(t)
                : (e.matchesData.compMatchesMap[m.competitionId] = [t]),
              h[M])
            ) {
              var D, C;
              h[M].list.push({
                id: r,
                show: x,
                groupNum: l.letterArray[t.groupNum] || "",
                roundNum: t.roundNum,
                stage: O,
                users: t.users || 0,
                weight:
                  null ===
                    (D = e.matchesData.competitionsMap[t.competition.id]) ||
                  void 0 === D
                    ? void 0
                    : D.weight,
                level:
                  null ===
                    (C = e.matchesData.competitionsMap[t.competition.id]) ||
                  void 0 === C
                    ? void 0
                    : C.level,
                matchTime: t.matchTime,
                homeTeamId: t.homeTeam.id,
              });
            } else {
              var P,
                E,
                z = (c[M] || {}).packUp || !1;
              (h[M] = Object.assign(
                {
                  rId: "all-".concat(M),
                  packUp: z,
                  list: [
                    {
                      id: r,
                      show: x,
                      groupNum: l.letterArray[t.groupNum] || "",
                      roundNum: t.roundNum,
                      stage: O,
                      users: t.users || 0,
                      weight:
                        null ===
                          (P =
                            e.matchesData.competitionsMap[t.competition.id]) ||
                        void 0 === P
                          ? void 0
                          : P.weight,
                      level:
                        null ===
                          (E =
                            e.matchesData.competitionsMap[t.competition.id]) ||
                        void 0 === E
                          ? void 0
                          : E.level,
                      matchTime: t.matchTime,
                      homeTeamId: t.homeTeam.id,
                    },
                  ],
                },
                m
              )),
                f.push(h[M]);
            }
            if (1 == t.matchStatus)
              if (A[M]) {
                var L, R;
                A[M].push({
                  id: r,
                  show: !0,
                  groupNum: l.letterArray[t.groupNum] || "",
                  roundNum: t.roundNum,
                  stage: O,
                  users: t.users || 0,
                  weight:
                    null ===
                      (L = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === L
                      ? void 0
                      : L.weight,
                  level:
                    null ===
                      (R = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === R
                      ? void 0
                      : R.level,
                  matchTime: t.matchTime,
                  homeTeamId: t.homeTeam.id,
                });
              } else {
                var B,
                  N,
                  F = (k[M] || {}).packUp || !1;
                (A[M] = [
                  {
                    id: r,
                    show: !0,
                    groupNum: l.letterArray[t.groupNum] || "",
                    roundNum: t.roundNum,
                    stage: O,
                    users: t.users || 0,
                    weight:
                      null ===
                        (B = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === B
                        ? void 0
                        : B.weight,
                    level:
                      null ===
                        (N = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === N
                        ? void 0
                        : N.level,
                    matchTime: t.matchTime,
                    homeTeamId: t.homeTeam.id,
                  },
                ]),
                  j.push(
                    Object.assign(
                      { rId: "schedule-".concat(M), packUp: F, list: A[M] },
                      m
                    )
                  );
              }
            else if (2 == t.matchStatus) {
              var U,
                H,
                W,
                V,
                G = (y[M] || {}).packUp || !1;
              if (v[M])
                v[M].push({
                  id: r,
                  show: !0,
                  groupNum: l.letterArray[t.groupNum] || "",
                  roundNum: t.roundNum,
                  stage: O,
                  users: t.users || 0,
                  weight:
                    null ===
                      (U = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === U
                      ? void 0
                      : U.weight,
                  level:
                    null ===
                      (H = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === H
                      ? void 0
                      : H.level,
                  matchTime: t.matchTime,
                  homeTeamId: t.homeTeam.id,
                });
              else
                (v[M] = [
                  {
                    id: r,
                    show: !0,
                    groupNum: l.letterArray[t.groupNum] || "",
                    roundNum: t.roundNum,
                    stage: O,
                    users: t.users || 0,
                    weight:
                      null ===
                        (W = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === W
                        ? void 0
                        : W.weight,
                    level:
                      null ===
                        (V = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === V
                        ? void 0
                        : V.level,
                    matchTime: t.matchTime,
                    homeTeamId: t.homeTeam.id,
                  },
                ]),
                  _.push(
                    Object.assign(
                      { rId: "live-".concat(M), packUp: G, list: v[M] },
                      m
                    )
                  );
            } else if (3 == t.matchStatus)
              if (S[M]) {
                var K, Q;
                S[M].push({
                  id: r,
                  show: !0,
                  groupNum: l.letterArray[t.groupNum] || "",
                  roundNum: t.roundNum,
                  stage: O,
                  users: t.users || 0,
                  weight:
                    null ===
                      (K = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === K
                      ? void 0
                      : K.weight,
                  level:
                    null ===
                      (Q = e.matchesData.competitionsMap[t.competition.id]) ||
                    void 0 === Q
                      ? void 0
                      : Q.level,
                  matchTime: t.matchTime,
                  homeTeamId: t.homeTeam.id,
                });
              } else {
                var $,
                  J,
                  Y = (w[M] || {}).packUp || !1;
                (S[M] = [
                  {
                    id: r,
                    show: !0,
                    groupNum: l.letterArray[t.groupNum] || "",
                    roundNum: t.roundNum,
                    stage: O,
                    users: t.users || 0,
                    weight:
                      null ===
                        ($ = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === $
                        ? void 0
                        : $.weight,
                    level:
                      null ===
                        (J = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === J
                        ? void 0
                        : J.level,
                    matchTime: t.matchTime,
                    homeTeamId: t.homeTeam.id,
                  },
                ]),
                  T.push(
                    Object.assign(
                      { rId: "finished-".concat(M), packUp: Y, list: S[M] },
                      m
                    )
                  );
              }
          });
          var x = {
            favorites: {
              matchIds: e.favorites.matchIds,
              compIds: e.favorites.compIds,
            },
            locale: $nuxt.$store.state.locale,
            competitionList: e.matchesData.competitionsMap,
            teamsMap: e.matchesData.teamsMap,
            sortBy: e.sortBy,
          };
          (f = r.a.matchSortCompetition(d({ listData: f }, x))),
            (_ = r.a.matchSortCompetition(d({ listData: _ }, x))),
            (j = r.a.matchSortCompetition(d({ listData: j }, x))),
            (T = r.a.matchSortCompetition(d({ listData: T }, x)));
          var O = sessionStorage.getItem("activeTabProModule");
          (O && "Live" !== O) ||
            !e.isWorldCup ||
            ((_ = _.filter(function (e) {
              return "p0ndkz6izigq3z1" === e.competitionId;
            })),
            (j = j.filter(function (e) {
              return "p0ndkz6izigq3z1" === e.competitionId;
            }))),
            (e.matchesData.allMatches = m.initMatchSize(f, e)),
            (e.matchesData.liveMatches = m.initMatchSize(_, e)),
            (e.matchesData.scheduleMatches = m.initMatchSize(j, e)),
            (e.matchesData.finishedMatches = m.initMatchSize(T, e));
        },
        setFavMatches: function (e, t) {
          var n = e.sortBy,
            o = e.activeTab,
            c = r.a.array_to_object(e.matchesData.favMatches, "id"),
            d = {},
            h = [],
            f = null,
            y = [];
          e.favorites.matchIds.map(function (t) {
            var n = e.matchesData.matchesMap[t];
            n && y.push(n);
          }),
            y.forEach(function (t) {
              var r = "";
              if (t.stage)
                for (var m = e.matchesData.stages, i = 0; i < m.length; i++)
                  if (t.stage.id === m[i].id) {
                    r = m[i].name;
                    break;
                  }
              if (t) {
                var y;
                (d[f] && d[f].competitionId == t.competition.id) ||
                  (f =
                    2 == n
                      ? "".concat(t.competition.id, "_").concat(t.matchTime)
                      : t.competition.id);
                var v = t.id,
                  _ =
                    (e.matchesData.competitionsMap[t.competition.id] &&
                      (null ===
                        (y = e.matchesData.competitionsMap[t.competition.id]) ||
                      void 0 === y
                        ? void 0
                        : y.country)) ||
                    {},
                  k = {
                    competitionId: t.competition.id,
                    id: f,
                    name: _.name || "",
                    size: 0,
                  },
                  A = !e.hideFinish || 3 != t.matchStatus,
                  j = !0,
                  w = !1;
                if (
                  ("Scheduled" == o
                    ? 1 == t.matchStatus && (w = !0)
                    : "Live" == o
                    ? (1 != t.matchStatus && 2 != t.matchStatus) || (w = !0)
                    : "Finished" == o
                    ? 3 == t.matchStatus && (w = !0)
                    : "All" == o
                    ? ((w = !0), (j = A))
                    : (w = !0),
                  w)
                )
                  if (d[f]) {
                    var S, T;
                    d[f].list.push({
                      id: v,
                      show: j,
                      groupNum: l.letterArray[t.groupNum] || "",
                      roundNum: t.roundNum,
                      stage: r,
                      users: t.users || 0,
                      weight:
                        null ===
                          (S =
                            e.matchesData.competitionsMap[t.competition.id]) ||
                        void 0 === S
                          ? void 0
                          : S.weight,
                      level:
                        null ===
                          (T =
                            e.matchesData.competitionsMap[t.competition.id]) ||
                        void 0 === T
                          ? void 0
                          : T.level,
                      matchTime: t.matchTime,
                      homeTeamId: t.homeTeam.id,
                    });
                  } else {
                    var M,
                      x,
                      O = (c[f] || {}).packUp || !1;
                    (d[f] = Object.assign(
                      {
                        rId: "fav-".concat(f),
                        packUp: O,
                        list: [
                          {
                            id: v,
                            show: j,
                            groupNum: l.letterArray[t.groupNum] || "",
                            roundNum: t.roundNum,
                            stage: r,
                            users: t.users || 0,
                            weight:
                              null ===
                                (M =
                                  e.matchesData.competitionsMap[
                                    t.competition.id
                                  ]) || void 0 === M
                                ? void 0
                                : M.weight,
                            level:
                              null ===
                                (x =
                                  e.matchesData.competitionsMap[
                                    t.competition.id
                                  ]) || void 0 === x
                                ? void 0
                                : x.level,
                            matchTime: t.matchTime,
                            homeTeamId: t.homeTeam.id,
                          },
                        ],
                      },
                      k
                    )),
                      h.push(d[f]);
                  }
              }
            }),
            (h = r.a.matchSortCompetition({
              listData: h,
              favorites: {
                matchIds: e.favorites.matchIds,
                compIds: e.favorites.compIds,
              },
              locale: $nuxt.$store.state.locale,
              competitionList: e.matchesData.competitionsMap,
              teamsMap: e.matchesData.teamsMap,
              sortBy: e.sortBy,
            })),
            (e.matchesData.favMatches = m.initMatchSize(h, e));
        },
        setMatchSize: function (e, t) {
          var data = t.data;
          m.setMatchSize(data, e);
        },
        setFootballLeft: function (e, t) {
          e.homeLeftData = Object.assign({}, t, { _isVue: !0 });
        },
        setCurrentDate: function (e, t) {
          e.currentDate = t;
        },
        setTheme: function (e, data) {
          data.theme && (e.theme_c = data.theme),
            data.width && (e.theme_w = data.width),
            void 0 !== data.theme_range && (e.theme_range = data.theme_range);
        },
        setFav: function (e, t) {
          for (var i in t) e.favorites[i] = t[i] || [];
        },
        collect: function (e, t) {},
        setPackUp: function (e, t) {
          t.packUp = !t.packUp;
        },
        setHideFinish: function (e, t) {
          var n = JSON.parse(JSON.stringify(e.matchesData.allMatches));
          e.hideFinish = t;
          for (
            var o = function (i) {
                var t = n[i],
                  o = !1,
                  r = 0;
                t.list.forEach(function (n, l) {
                  var c = e.matchesData.matchesMap[n.id],
                    d = !e.hideFinish || 3 != c.matchStatus;
                  n.show != d && (n.show = d),
                    n.show &&
                      ((o = !0),
                      t.packUp || (r += (c.note ? 20 : 0) + e.sizeData.match));
                }),
                  r > 0 && (r += e.sizeData.head),
                  o && t.packUp && (r = e.sizeData.head),
                  (t.size = r);
              },
              i = 0;
            i < n.length;
            i++
          )
            o(i);
          e.matchesData.allMatches = n;
        },
        removeFav: function (e, t) {
          var n = t.id,
            o = t.type,
            r = t.name,
            l = t.child,
            c = e.favorites[r] || [],
            d = c.indexOf(n);
          if ((c.splice(d, 1), 2 == o && l)) {
            var m = e.favorites[l.name] || [];
            m &&
              l.list &&
              l.list.forEach(function (e) {
                var t = m.indexOf(e);
                t > -1 && m.splice(t, 1);
              });
          }
        },
        addFav: function (e, t) {
          var n = t.id,
            o = t.type,
            r = t.name,
            l = t.child;
          if (((e.favorites[r] || []).push(n), 2 == o && l)) {
            var c = e.favorites[l.name] || [];
            c &&
              l.list &&
              l.list.forEach(function (e) {
                c.indexOf(e) < 0 && c.push(e);
              });
          }
        },
        changeMatches: function (e, t) {
          var n = t.id || t.matchId,
            o = e.matchesData.matchesMap[n];
          if (o && o.id)
            for (var i in t)
              if (o[i])
                switch (i) {
                  case "times":
                  case "homeTeam":
                  case "homeTeams":
                  case "awayTeam":
                  case "awayTeams":
                  case "competition":
                  case "referee":
                  case "season":
                    o[i] = Object.assign(o[i], t[i]);
                    break;
                  default:
                    o[i] = t[i];
                }
        },
        setSortBy: function (e, t) {
          e.sortBy = t;
        },
        setCustomize: function (e, t) {
          e.customize = t;
        },
        setGoalAnimate: function (e, t) {
          var n = JSON.parse(JSON.stringify(e.goalAnimate || []));
          n.forEach(function (e, o) {
            e.matches.id == t.matches.id && n.splice(o, 1);
          }),
            n.push(t),
            (e.goalAnimate = n);
        },
        removeGoalAnimate: function (e, t) {
          if (e.goalAnimate.length > 0) {
            var n = JSON.parse(JSON.stringify(e.goalAnimate || []));
            n.splice(0, 1), (e.goalAnimate = n);
          }
        },
        setIsMin: function (e, t) {
          e.isMin = t;
        },
        setThemeTitle: function (e, data) {
          e.themeTitle = data;
        },
        setThemeOdds: function (e, data) {
          e.themeOdds = data;
        },
        setLineColor: function (e, data) {
          var t = [];
          data.map(function (e) {
            "no-data" != e.type &&
              "tips" != e.type &&
              e.list.map(function (e) {
                t.push({
                  id: e.id,
                  color: 0 != t.length && 1 == t[t.length - 1].color ? 2 : 1,
                });
              });
          });
          var n = {};
          t.map(function (e) {
            n[e.id] = e.color;
          }),
            (e.lineColor = n);
        },
        setThemeSize: function (e, data) {
          (e.themeSize = data),
            "mini" == e.themeSize &&
              ((e.sizeData.head = 16), (e.sizeData.match = 19));
        },
        setOddSelect: function (e, data) {
          e.oddSelect = data;
        },
        setIsWorldCup: function (e, data) {
          e.isWorldCup = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(7);
      t.default = {
        UNSHIFT_ITEM: function (e, data) {
          (0, e.commit)("UNSHIFT_ITEM", data);
        },
        UpdataLiveOdds: function (e, data) {
          (0, e.commit)("UpdataLiveOdds", data);
        },
        FETCH_DETAIL: function (e, t) {
          var n = e.commit;
          e.state;
          return Object(o.o)(t).then(function (e) {
            return n("SET_DETAIL", { data: e });
          });
        },
        FETCH_ODDS: function (e, t) {
          var n = e.commit;
          e.state;
          return Object(o.Q)(t).then(function (e) {
            return n("SET_ODDS", { data: e });
          });
        },
        FETCH_H2H: function (e, t) {
          var n = e.commit;
          e.state;
          return Object(o.O)(t).then(function (e) {
            return n("SET_H2H", { data: e });
          });
        },
        MERGE_STATS: function (e, data) {
          return (0, e.commit)("MERGE_STATS", data);
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(23), n(8), n(6), n(9);
      var o = n(0);
      t.default = {
        SET_DETAIL: function (e, t) {
          var n = t.data.res[0],
            r = t.data.tab;
          if (
            (410 == n.code
              ? (e.WebMatchData = { code: 410 })
              : (e.WebMatchData = Object.assign({}, n)),
            "overview" == r || "live" == r)
          ) {
            var l = t.data.res[1];
            l && l.items && l.items.length && l.items.reverse(),
              (e.incidents = Object.assign({}, l)),
              (e.lineups = Object.assign({}, t.data.res[3]));
          }
          if ("lineups" == r) e.lineups = Object.assign({}, t.data.res[1]);
          else if ("h2h" == r)
            e.HISTORY_DETAIL_DATA = Object.assign({}, t.data.res[1]);
          else if ("odds" == r)
            e.ODDS_DETAIL_DATA = Object.assign({}, t.data.res[1]);
          else if ("standings" == r) {
            var c = t.data.res[1],
              d = c && c.teamsMatches;
            if (d && d.length) {
              var m = {};
              d.forEach(function (e) {
                m[e.team.id] = {
                  extraStr: o.a.ab2str(e.team.extra),
                  matches: e.matches,
                };
              }),
                (c = Object.assign({}, c, { teamsMatchesObj: m }));
            }
            e.tables = Object.assign({}, c);
          } else "live" == r && (e.stats = Object.assign({}, t.data.res[2]));
          return n;
        },
        SET_ODDS: function (e, t) {
          var n = t.data;
          Object.keys(n).forEach(function (e) {
            "company" != e &&
              n[e].forEach(function (element) {
                "eu" == e
                  ? ((element.wAm = o.a.calculate1X2(element.w)),
                    (element.dAm = o.a.calculate1X2(element.d)),
                    (element.lAm = o.a.calculate1X2(element.l)))
                  : ((element.wAm = o.a.calculateOV_UN(+element.w + 1)),
                    (element.lAm = o.a.calculateOV_UN(+element.l + 1)));
              });
          }),
            (e.ODDS_DETAIL_DATA = Object.assign({}, t.data));
        },
        SET_H2H: function (e, t) {
          e.HISTORY_DETAIL_DATA = Object.assign({}, t.data);
        },
        UNSHIFT_ITEM: function (e, t) {
          var data = t.data,
            n = t.type,
            r = t.index,
            l = e.ODDS_DETAIL_DATA[n];
          l.forEach(function (e) {
            e.isNew = -1;
          });
          var c = {
            w: data.odd[0],
            d: "asia" == n ? 0 - data.odd[1] : data.odd[1],
            l: data.odd[2],
            time: data.time + "'",
            isNew: 1,
          };
          "eu" == n
            ? ((c.wAm = o.a.calculate1X2(c.w)),
              (c.dAm = o.a.calculate1X2(c.d)),
              (c.lAm = o.a.calculate1X2(c.l)))
            : ((c.wAm = o.a.calculateOV_UN(+c.w + 1)),
              (c.lAm = o.a.calculateOV_UN(+c.l + 1))),
            l.splice(r, 0, Object.assign(data, c)),
            (e.ODDS_DETAIL_DATA[n] = Array.apply(null, l));
        },
        MERGE_WebMatchData: function (e, t) {
          e.WebMatchData.match = Object.assign({}, e.WebMatchData.match, t);
        },
        MERGE_STATS: function (e, data) {
          if (
            data &&
            data.data &&
            data.data[0] &&
            data.data[0].stats &&
            data.data[0].stats.items
          )
            for (var i in data.data[0].stats.items)
              e.stats.items[i] = data.data[0].stats.items[i];
        },
        UpdataLiveOdds: function (e, t) {
          var data = t.data,
            n = t.key;
          try {
            e.WebMatchData.match.ext.odds.oddItems[n].odd = data;
          } catch (e) {}
        },
        setwebMatch: function (e, data) {
          e.WebMatchData = data;
        },
        setlineups: function (e, data) {
          e.lineups = data;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = { topArr: [], allArr: [], staticPage: {} });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(7);
      t.default = {
        teamMapAction: function (e, param) {
          e.commit, e.state;
          var t = [],
            n = [];
          return Object(o.tb)({ type: (param && param.type) || "" })
            .then(function (e) {
              try {
                return (
                  e.topTeams &&
                    e.topTeams.map(function (e) {
                      t.push(e);
                    }),
                  e.teams &&
                    e.teams.map(function (e) {
                      n.push(e);
                    }),
                  { topArr: t, allArr: n, filterName: "" }
                );
              } catch (e) {
                return { topArr: [], allArr: [], filterName: "" };
              }
            })
            .catch(function (e) {
              return { topArr: [], allArr: [], filterName: "" };
            });
        },
        teamMapAction_comp: function (e, param) {
          e.commit, e.state;
          var t = [],
            n = [];
          return Object(o.ub)({ type: (param && param.type) || "" })
            .then(function (e) {
              try {
                return (
                  e.topTeams &&
                    e.topTeams.map(function (e) {
                      t.push(e);
                    }),
                  e.teams &&
                    e.teams.map(function (e) {
                      n.push(e);
                    }),
                  { topArr: t, allArr: n, filterName: "" }
                );
              } catch (e) {
                return { topArr: [], allArr: [], filterName: "" };
              }
            })
            .catch(function (e) {
              return { topArr: [], allArr: [], filterName: "" };
            });
        },
        teamMapAction_player: function (e, param) {
          e.commit, e.state;
          var t = [],
            n = [];
          return Object(o.vb)({ type: (param && param.type) || "" })
            .then(function (e) {
              try {
                return (
                  e.topTeams &&
                    e.topTeams.map(function (e) {
                      t.push(e);
                    }),
                  e.teams &&
                    e.teams.map(function (e) {
                      n.push(e);
                    }),
                  { topArr: t, allArr: n, filterName: "" }
                );
              } catch (e) {
                return { topArr: [], allArr: [], filterName: "" };
              }
            })
            .catch(function (e) {
              return { topArr: [], allArr: [], filterName: "" };
            });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = {});
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      var o = {};
      (o.device = n(905)),
        (o.device = o.device.default || o.device),
        (o.i18n = n(906)),
        (o.i18n = o.i18n.default || o.i18n),
        (o["init-state"] = n(907)),
        (o["init-state"] = o["init-state"].default || o["init-state"]),
        (o["old-i18n"] = n(908)),
        (o["old-i18n"] = o["old-i18n"].default || o["old-i18n"]),
        (t.a = o);
    },
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"football":{"en":"Football Live Score","th":"ฟุตบอลถ่ายทอดสดคะแนน","br":"Futebol Ao Vivo Placar","es":"Fútbol En vivo Puntuación","tr":"Futbol Canlı Skor","zht":"足球比分直播","id":"Sepakbola Langsung Skor","hr":"Nogomet Uživo Rezultat","fr":"Football En direct Score","de":"Fußball Live Ergebnis","ru":"Футбол Прямой эфир Счет","bg":"Футбол На живо Резултат","el":"Ποδόσφαιρο Ζωντανά Σκορ","cs":"Fotbal Živě Skóre","ja":"サッカー中継得点","ko":"축구 라이브 점수"},"basketball":{"en":"Basketball LiveScore","th":"คะแนนสดบาสเกตบอล","br":"LiveScore de basquete","es":"Baloncesto en vivo","tr":"Basketbol Canli Skor","zht":"籃球比分直播","id":"Bola Basket LiveScore","hr":"Košarka LiveScore","fr":"Basketball LiveScore","de":"Basketball LiveScore","ru":"Баскетбол LiveScore","bg":"Баскетбол на живо","el":"Ζωντανή βαθμολογία μπάσκετ","cs":"Basketbalové live výsledky","ja":"バスケットボールのライブスコア","ko":"농구 라이브 스코어"},"tennis":{"en":"Tennis Score","th":"เทนนิสคะแนน","br":"Tênis Placar","es":"Tenis Puntuación","tr":"Tenis Skor","zht":"網球比分","id":"Tenis Skor","hr":"Tenis Rezultat","fr":"Tennis Score","de":"Tennis Ergebnis","ru":"Теннис Счет","bg":"Тенис Резултат","el":"Τένις Σκορ","cs":"Tenis Skóre","ja":"テニス得点","ko":"테니스 점수"},"amfootball":{"en":"American Football Live Score","th":"อเมริกันฟุตบอลถ่ายทอดสดคะแนน","br":"Futebol Americano Ao Vivo Placar","es":"Fútbol americano En vivo Puntuación","tr":"AM. Futbolu Canlı Skor","zht":"美式橄欖球比分直播","id":"Sepak Bola Langsung Skor","hr":"Am. nogomet Uživo Rezultat","fr":"Football américain En direct Score","de":"AM. Fußball Live Ergebnis","ru":"Ам.футбол Прямой эфир Счет","bg":"АМ. Футбол На живо Резултат","el":"Αμερικανικό ποδόσφαιρο Ζωντανά Σκορ","cs":"Am. fotbal Živě Skóre","ja":"アメフト中継得点","ko":"미식축구 라이브 점수"},"badminton":{"en":"Badminton Live Score","th":"แบดมินตันถ่ายทอดสดคะแนน","br":"Badminton Ao Vivo Placar","es":"Bádminton En vivo Puntuación","tr":"Badminton Canlı Skor","zht":"羽毛球比分直播","id":"Bulu Tangkis Langsung Skor","hr":"Badminton Uživo Rezultat","fr":"Badminton En direct Score","de":"Badminton Live Ergebnis","ru":"Бадминтон Прямой эфир Счет","bg":"Бадминтон На живо Резултат","el":"Μπάτμιντον Ζωντανά Σκορ","cs":"Badminton Živě Skóre","ja":"バドミントン中継得点","ko":"배드민턴 라이브 점수"},"baseball":{"en":"Baseball Score","th":"เบสบอลคะแนน","br":"Beisebol Placar","es":"Béisbol Puntuación","tr":"Beyzbol Skor","zht":"棒球比分","id":"Bisbol Skor","hr":"Bejzbol Rezultat","fr":"Baseball Score","de":"Baseball Ergebnis","ru":"Бейсбол Счет","bg":"Бейзбол Резултат","el":"Μπέισμπολ Σκορ","cs":"Baseball Skóre","ja":"野球得点","ko":"야구 점수"},"cricket":{"en":"Cricket Score","th":"คริกเก็ตคะแนน","br":"Críquete Placar","es":"Cricket Puntuación","tr":"Kriket Skor","zht":"板球比分","id":"Kriket Skor","hr":"Kriket Rezultat","fr":"Cricket Score","de":"Cricket Ergebnis","ru":"Крикет Счет","bg":"Крикет Резултат","el":"Κρίκετ Σκορ","cs":"Kriket Skóre","ja":"クリケット得点","ko":"크리켓 점수"},"handball":{"en":"Handball Live Score","th":"แฮนด์บอลถ่ายทอดสดคะแนน","br":"Handebol Ao Vivo Placar","es":"Balonmano En vivo Puntuación","tr":"Hentbol Canlı Skor","zht":"手球比分直播","id":"Bola tangan Langsung Skor","hr":"rukomet Uživo Rezultat","fr":"Handball En direct Score","de":"Handball Live Ergebnis","ru":"гандбол Прямой эфир Счет","bg":"хандбал На живо Резултат","el":"Τόπι Ζωντανά Σκορ","cs":"Házená Živě Skóre","ja":"ハンドボール中継得点","ko":"핸드볼 라이브 점수"},"icehockey":{"en":"Hockey Score","th":"ฮอกกี้คะแนน","br":"Hóquei Placar","es":"Hockey Puntuación","tr":"Hokey Skor","zht":"冰球比分","id":"Hoki Skor","hr":"Hokej na ledu Rezultat","fr":"Hockey Score","de":"Hockey Ergebnis","ru":"Хоккей Счет","bg":"Хокей Резултат","el":"Χόκεϊ πάγου Σκορ","cs":"Hokej Skóre","ja":"ホッケー得点","ko":"하키 점수"},"snooker":{"en":"Snooker Table","th":"สนุ๊กเกอร์ตาราง","br":"sinuca Mesa","es":"Snooker mesa","tr":"Snooker tablo","zht":"斯諾克表","id":"menipu Meja","hr":"Snooker stol","fr":"Billard table","de":"Snooker Tabelle","ru":"снукер стол","bg":"снукър таблица","el":"Είδος μπιλίαρδου τραπέζι","cs":"kulečník stůl","ja":"スヌーカーテーブル","ko":"스누커 식탁"},"tabletennis":{"en":"Table Tennis Live Score","th":"ปิงปองถ่ายทอดสดคะแนน","br":"Ténis de mesa Ao Vivo Placar","es":"Tenis de mesa En vivo Puntuación","tr":"Masa Tenisi Canlı Skor","zht":"乒乓球比分直播","id":"Tenis Meja Langsung Skor","hr":"Stolni tenis Uživo Rezultat","fr":"Tennis de table En direct Score","de":"Tischtennis Live Ergebnis","ru":"Настольный теннис Прямой эфир Счет","bg":"Тенис на маса На живо Резултат","el":"Πινγκ Πονγκ Ζωντανά Σκορ","cs":"Stolní tenis Živě Skóre","ja":"卓球中継得点","ko":"탁구 라이브 점수"},"volleyball":{"en":"Volleyball Live Score","th":"วอลเลย์บอลถ่ายทอดสดคะแนน","br":"Vôlei Ao Vivo Placar","es":"Voleibol En vivo Puntuación","tr":"Voleybol Canlı Skor","zht":"排球比分直播","id":"Bola Voli Langsung Skor","hr":"Odbojka Uživo Rezultat","fr":"Volley-ball En direct Score","de":"Volleyball Live Ergebnis","ru":"Волейбол Прямой эфир Счет","bg":"Волейбол На живо Резултат","el":"Βόλεϊ Ζωντανά Σκορ","cs":"Házená Živě Skóre","ja":"バレー中継得点","ko":"배구 라이브 점수"},"waterpolo":{"en":"Water Polo Live Score","th":"โปโลน้ำถ่ายทอดสดคะแนน","br":"Pólo aquático Ao Vivo Placar","es":"Polo acuático En vivo Puntuación","tr":"sutopu Canlı Skor","zht":"水球比分直播","id":"Polo air Langsung Skor","hr":"Vaterpolo Uživo Rezultat","fr":"Water polo En direct Score","de":"Wasser Polo Live Ergebnis","ru":"Водное поло Прямой эфир Счет","bg":"Водно поло На живо Резултат","el":"Υδατοσφαίριση Ζωντανά Σκορ","cs":"Vodní pólo Živě Skóre","ja":"水球中継得点","ko":"수구 라이브 점수"}}'
      );
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/appIcon.66614fb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BWF.a23b4eb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ITTF.32d2e8c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Polygon.93e52c3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/WPBSA.c0ff6fc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/banner2.74c7739.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAgxJREFUaEPtlu9HnmEUxz+ZGBkTy4yYmChZRjaJjESaSD/etrH/Y/tHUi/2YvohIpERFTMSiYmSiESkZIzEnDkP9ay759z3ua6exXW9fc75nu+Pc1/XU8M9PzX3nD9JQLUTTAmkBJwOpBVyGuhuTwm4LXQCpAScBrrbb0vgCTACNLin+AG+ALs3wWQJaAGmgFb/7GAIb4Af5WhZAj4Dn4KNDgM0Dny0CngPTISZGwxlEvhgFVAPrAKySv/D+Qn0A/tWAVLXBkwDzVVWsA2MAlt5PuJS7UsV8aJKInb0JtzMmm95yF6piKY7FrGn5Ddum2sRIP0deq0+vyMRsuvyBq1XmmcVIDivNYnGSqDO3w+U/D93fpFvoLynU0U8c5LMaj8EhoHvVvw8CZQwu1TEU+sQY92ROr9mrP9bVkSA9HWrCPm/FOIcq/MrecGKCpA5b4EZQB49zzlR8stFQDwCZF6PJvG4yHDgVNfmW8H+wit0dV6vJvEoJ4lzdX4pZ9+1cm8CJbA+TaLOSOaXOr9orM8sCyVABrxTEQ8rkPqtzi94yXtuoazZA7pOtRkFF0p+PgT5GAIEc1CTeFBG8lLXZi4U+VgCBHdIk7jKVV7Y2ZDkYwoQ7HZgDDgDvgLyvz74CfkRBydnAUwCLC7FrEkJxHTXgp0SsLgUsyYlENNdC3ZKwOJSzJqUQEx3Ldh/ANw1PTHapJgxAAAAAElFTkSuQmCC";
    },
    function (e, t, n) {
      e.exports = n.p + "img/expression.63468b7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/keyboard.263feee.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA41JREFUaEPdWktoFEEQfTWzJIZV9LJ68CCIIN68KKKgXsSTIHjQHAJhk6keEyIG0ZuSiAjxgx/EzGfPUfATvzGJ/z96ETx4EcG7XnMIyU5Jh83iJmt2dnYm2bVhGGam6nW96e7q6uomZn4gIp7v+4/QgIUsyxoiolYADwB4nuc9biQexMxHAFyZNZqI7ufzeS+Xy400AhGybXtrEASfyhh7j4hc13VH65kI9fT0NE9OTv4CsKKcoUQ0rIk4jjNWj0RIG6WUGheRPRUMvAvA9TxvvJ6IzBBg5tMAToY07E6haz0NKZ+o2GwL7BMR7YVCFxG5rVvE9/1noZUSEJwh0N3dvW5qaupnRPxbhRZ5HlG/JrUZAoVu9AXA5qhoukVM0xx0HOdFVIwoekUClmUNEpEdBWSOjh7s1zzPexkDVkWIIgGlFIuIW1EjpEDB/V51HOdVSJVIYkUCnZ2d2wzD+BgJZWGleyJy2ff91wlgo0igt7e3ZWJi4juAtUlUpGMtIrrouu6bOPGLBAoDWbvGA3FWUAbrYRAE53O53Ns46ikhYFnWKSLqjwO4EgYRPRKRAc/z3lWSXej73BbYD2C4FsBqdUVkxDTNs47jvK9WV8uXEMhms+tTqdQ3AM1RwGrUeSIiZ3zf/1ANTgkBrWhZ1jsi2lENSJyyIjJmGEa/67qhPOI8Asx8HcDhOI2KiKUj5P5KLTKPgFLKFpHBiJXGrkZET7Vj+dcYKdeFthNRpAEVu/WlgDpY7JvrteYR6OrqWj49Pb0LwEoRWaXv+jIMo+S58H72+/KEjS/CE5EOFvUYmZkQ5xGIw5C2trZ0Op3O5PP5jGEYmSAIVhNRBkBG3/9+1u8ApKutV0R0jNX3/xFo+C5k2/aOIAhqmt6r7Q4h5cMNYmbu1guSkKCJi1XtRpVSnohYiVtWuYJoExkzfwawpTJ+MhI1hRLZbHZjKpX6CqApGfMWRK09mFNKtYrI0GIaH2s4zcwDAE4sBoFEFjRKqVER2ZswgWSWlHr6b2lp+QFgTUIEkl3U27a9OwiCJJJRi5NWYebjAM7F9fcXPbHFzDcAHIqBwNKkFplZL+Y3RSWwpMndjo6ODaZp6qxclLL06fUoE1hdbXAw8yUAR0P+/vrbYgqZC6rPTb729vZlTU1Nv/+1Lq37bVal1E4RKZe7b4yNbmY+BuDCbP9vuKMGzHwTwMFGPuzR0Mdt/gBTL7Ic0OskXQAAAABJRU5ErkJggg==";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA59JREFUaEPdmktrE1EUx/9nUqul7UxcxC4UBJukdudGEQvqRlwJggvtB1AUQQQfK03uLUWob6VY0g9QBavVWqutr6pV0Y0oWO1MfYBLhTbJQsV2jkxftkabyTzSxLsKN+f87/nN3Oe5Q6o0Opm5NS2iXSjCQlpcbwOhnkGdMLk11RC9WUwcpAp9HwHnpoJmouswzdaUrOkuBhBSxeAaAj3PDJauMSiREuHbhQxCOG8s1Ib5CxiV/wi0g4kSqXikpxBByApKk3ovGJuyBHgVTImkjPQWEsg4QFAMNTDMozYDuwJCIhmP3rFp76vZOMBiaWwxmTtzbKkdQCIpondz9PPUfOINNH5YzqOjnxwqXwYFEsl49T2H/q7cxgHGx4HQXwJY5UKtHVBakiJ834VGzq4zAVoA7M5ZIcOBrxIFmkfi4QfutbIrzATYZfXp7C62LToIdH5ERPpsezgwnAZQ4wNriUqeOdDI4kLXSMHZkVjkoffawDTAstOfy9KpbwaApX40xECnApwaEdFHXupPA0wOZGtq3OZlA39qMeNGIMAnhmM1j71oZxaAGjdiRCy9EM6mQUAXMTcNy5r+bLZz/T8LICgGtzKow42gA99uU1GOpWPhJw58f4+ByS60AoQBMBY6EXPlw3TLJGpMi/DTXHRmvQHLMSiMfgbX5SLiqS2jxwyQTMcitmbEDABN6BcA7PE0KGdivSbGZFrUzvlGMgHi+m4QrFW5MArhjkmmTMdW/nWMZABUirfrFAQcDSifie8pHBDDsnrWrJUBEBJvKn7Qgg1gaAAHiaCBSbP2e9YQsX5bdSZBI+bgZH2Fz8HPkKf7BJZTC2IGgBeBVB18Vf6jojRkKkoIYyUhhcaWMCEERoiBEIGXgCkEq26ivtxBu32kkPj/AIq+C1U2DNUppulqeXfQHey42BvEqhzcS0zNdhTzYpPrNKoJoxXgnXkJbu5GHC9kL0BYPW8AbrYSlUfe1SglymsApXkH8GIzp0q9nhhteQ7e0+10E4DD+QDw5UCjSeM2mDf7CeDbkdJa/r9XlL0HUOUHgO+H+qAwNjLYh2RUntIqmtQPgXHcw6ef38SWJvSLAHa4B5iv1KLUrcN8rQuA+UvuqmIoTDCtrJyTMv/pdYcLWOFccKhCP0PAfpuPv/CumGzmggr0kk98XKTRz69znEsL+5o1KPT1DPwld18kF91BOXiAmU5O9f+i+9RAE8YlgLcX78ceRf65zS/qhqOYWhqFEgAAAABJRU5ErkJggg==";
    },
    function (e, t, n) {
      e.exports = n.p + "img/sidebar.06f8c2f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/time.27b14cc.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfZJREFUaEPtlsFKw0AURV9oacH+iYuCTH7ApTsXTXGpf+ZOUFBBEEEUQbEmdqZCKaIUBBFEEGxBDEbqk5YMhNJ0ksxMYmG6zeS9c+5Nm1qw4B9rwfnBCBTdoGnANCCZgHmEJAOUvt00IB2h5ADTgGSA0rdrbcC27bXRaBR0Op0zadKYAdoECCG7AOCEez1E3GSM3asW0SIwBc+Zu6VSqeF53qNKCeUCMfCc+Q4RHcZYX5WEUgEBPGdmYRNPKiSUCSSEnzAj4q1lWQ1K6bOshBKBNPAR4Jtyuey4rvsiIyEtkBGeN3EdNvGaVUJKQAY+AnwZNvGWRSKzgCJ4znwxfmdQSt/TSmQSUAzPmc+DIGh0u92PNBKpBTTBc+bTsIlhUolUAprhJ8yWZZ34vu/0er3PJBKJBfKAjwAfh018iSQSCeQMz5s4GgwGTr/f/54nIRQoAj4CfAgATUrpT5zEXIGC4XkT++12e/y3/HeWRKzAf4CPAO9RSpuJBQgh6wBwIPoC5XkdEbcYY9vTO2c2YNv2BiLu5Ako2pVKgBCyBABXALAiGpzTdbdSqay2Wi0/UQPjQ/V6vVatVpcRsZYTZNyaISI+UEpnvhOEP6MFwwvXGwFhRJoPmAY0BywcbxoQRqT5gGlAc8DC8aYBYUSaD5gGNAcsHP8HctSnMdGl1G4AAAAASUVORK5CYII=";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/01.03657e2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/02.b8622fc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/03.ceb0cb7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/04.9af7dee.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/05.4a15299.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/06.d02b4d6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Brazil.be4f307.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-India.33945af.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Indonesia.22dc8e6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Myanmar.348bccb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Thailand.f396708.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Turkey.822e63c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Country-Vietnam.5adc70a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg1.69466d6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg2.fb55ed0.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg3.7a7b2fd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg4.308db17.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg5.504bc33.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg7.4cfcb15.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/del.0eaa8e1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/error.a62dafa.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/right.9e1b182.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/shadow.0cd8b8a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/step1.08fd883.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/step2.9dab251.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/step3.fc86fba.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/step4.f7e2548.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/success.4a1340d.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/404.7db7ac4.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/twitter.e3a8e6d.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAABJWpdIWpdLXpxKW5ZJWpZJW5dIWpdLXJZIWpb////Q1OTO0+NldKZWZp76+/zX2+jU2Obv8fbd4eywuNFebqLn6vHKz+CEkLhseqtZaZ9TZJ3y8/fS1uXAxtu0u9SZo8RygK5kc6Z6ARDgAAAACXRSTlMA/fMbbNm2m07uEZmdAAABDUlEQVRIx9XW2Y6DMAwFUMfZMNMS1m6zz/9/5EhJVKqWgC31pfct0T0gBaQYcrRxFqkQtM5ouI32ijai/A2pkBjBCnKMIlaUyc+PfZaI79BI7KAGAE+CeACtJEBpMLSS33HoQwj9oZ3yjgFXrk9v9TX7vOfAFvvnj/oRWCie0aWvFwAClfJdLwEqgiYIwenaPbRd102bYMz14yWtN8FX6oeGmGCXwEBckD/a7jVBE9Ml8JlW72ugXsggBUcpGKXgRwpOUnCWgtVj3ce0qdnGxd+r/UvPBigDCFYGLDgZcGBkwIBWEqA0gJcAHy9FPkCdrl0uUNV8sXOAMvPowAFYPQwnZTAPJ4XxZwb3488/BcNQdkbAhjYAAAAASUVORK5CYII=";
    },
    function (e, t, n) {
      e.exports = n.p + "img/instagram.95c88ed.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAUFJREFUWEftlttKxDAQhpvJqS2sp1XZS1+7D+eFICzKwuIptqn5I71YWGTtRFpXL9Lbmcx8/SYJEU3TXBb/6BMZiJlGNsRt12xokiEABOCEKzLEQwjRWvuUkjuWw46sbdtzKeXoXQUgEtFaa/3260BDgzGoOWGGXqyh3R8fgpob5kdAQ7L3/kYIoXeQMcZXY8x66pj21ycbykAp2vPIOEvZUDZ0wMDR7yHnnK7ruv9uGkcFArACsFFKffw50ADjvbdlWd5Nen7sL/567AE4a+0jdxgALEMIixjj1hizmQUohLAEcME1H20mxL1S6n0ykHPuSmt9NgWmKAporW+5Guym7rrumohOuUJcPPWpMgrkvV8IIVZcs5Q4ET1IKZ+5XA7IEFHNFUmJ933/UlVV4HLZkXEF5o5nIM5oNpQNcQa4+Cfd0RGQciKJTQAAAABJRU5ErkJggg==";
    },
    ,
    ,
    ,
    function (e, t) {
      e.exports = {
        development: {
          PORT: 3e3,
          MODE: "development",
          WWWROOT: "localhost:3000",
          ENV_API: "https://api.aiscore.com",
          WSS_HOST: "",
          WSS_PORT: 8099,
          CDN_ROOT: "",
          CDN_STATIC: "",
          CDN_ROOT_TOW: "",
        },
        test: {
          PORT: 4e3,
          MODE: "test",
          WWWROOT: "test.aiscore.com",
          ENV_API: "https://api.aiscore.com",
          WSS_HOST: "",
          WSS_PORT: 8099,
          CDN_ROOT: "",
          CDN_STATIC: "",
          CDN_ROOT_TOW: "",
        },
        production: {
          PORT: 8080,
          WWWROOT: "www.aiscore.com",
          ENV_API: "https://api.aiscore.com",
          WSS_HOST: "",
          WSS_PORT: 8099,
          CDN_ROOT: "",
          CDN_STATIC: "",
          CDN_ROOT_TOW: "",
        },
      };
    },
    ,
    function (e, t, n) {
      e.exports = n.p + "img/100.056f2ad.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/100percent.34cfdee.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/50percent.1d71c63.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/555.36cc931.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/5percent.cb1abdd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Allin.d63ac5a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/God.24f3c7d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KO.56efa4d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Palming.09963c0.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/angry.8653b70.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/applaud.7cd4852.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/awkward.41670a5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ballface.2693905.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/basketball.9d9566e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/blackface.f65fb9a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/bye.d0dd0da.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/cheering.6f311ad.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/comeon.bbe54f4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/corner.108eb56.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/coverface.f07ee9f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/crydog.ceb4e8a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/dog.11dec82.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/football.fe99fc4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/girl.c2de4f2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/glasses.4a659be.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/good.89c55ce.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/grimace.59b83d0.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/injured.874b5db.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/lookdown.3997a5b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/mask.ec1a716.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/maskcomeon.657eeff.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/maskpray.0569165.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/money.c322dd2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ngu.d753004.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/nocorner.ccbd084.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/nogoal.6a91088.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/nosebleed.a7ef38b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/notalk.d092dd1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/phone.e98e65c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/plane.cc5afc6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/pray.b10e71a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/praygoal.b0ac121.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/redcard.f5538b5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/shake.0a5ed3f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/shydog.6446720.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/slap.76c3b32.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/vomiting.5bdcfb4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/wamoney.cea1218.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/whistle.c21d545.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/yeah.2e9c72a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/yellowcard.cb356ed.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAFVBMVEUAAADoTVnmTFrnTFrnTFvoS1rnTFtScnYmAAAABnRSTlMAFeJ/diJJeCYpAAAAH0lEQVQI12PAAVgSMSnmtDRVEG2WFADmqkKUCqDrBQCDPANEPKAFggAAAABJRU5ErkJggg==";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg2.6d2d29a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg3.167f5e9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg4.98db114.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg5.9f882d1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg6.d0176db.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg7.7ed198b.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAgMAAAAroGbEAAAADFBMVEUAAABQrzBRry9Sry+8Ny1OAAAAA3RSTlMAQL9R0SXGAAAASElEQVQIHQXBsQ3CMAAEwNNTZv8tKLwBHoMyA6RwiRQrz51P2zMTKwMjC9PRPrKp3NxStnS6xLTEMMQycTzELuRHdBN988LXH0KIIlQiqzITAAAAAElFTkSuQmCC";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////e3t7e3t7c3Nzc3Nzc3Nzc3Nzb29vc3Nzb29sdtHGZAAAACnRSTlMAAi5FfZig1N33IfcwngAAAJ1JREFUKM+d0b0NwjAQhuGPTx6AAnq2SGsKBkBiE+ZB7JMqI1CnYgEIvjtf7mjjwrJePZL/gK3jAJxtRZ13N+CyT+FYgXKNIMAJHTjhCjrhCjphACMMYIQJKGECSpiBEJaaQ6n8vnNYXvw8c5gnYkxkebRdMpknOViQBiQEaUAv50SABicC7IGMKLBgREF/ZCEGfAzA/e+jGjxt/uUfoqIuTwdrdGcAAAAASUVORK5CYII=";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAgMAAAAroGbEAAAADFBMVEUAAADnTFznTFvnTFt3b9dUAAAAA3RSTlMAQL9R0SXGAAAAQUlEQVQIHQXBsRGAMAwEMPkvHG2KDOQRvP8ctBxIGMJAPUQtuF9iFXGqxdZijGib+r5HiiUXlyxKDtXZ6Awmjf0D61oI8WvCZnUAAAAASUVORK5CYII=";
    },
    function (e, t, n) {
      e.exports = n.p + "img/theme_az.e9d260d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/theme_mg.b8d2047.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAKlBMVEUAAABeuyJRrjBRsi5VsS1Sry9TsC9SrzBTsTBSry9SsC5RszFVsipSry9j6G+BAAAADXRSTlMAB0VCGPa5drCZVDkerbt6cwAAACdJREFUCNdjwAGYGsGU6jUBECf2biKQ4ra8ZQISZL/CgETxGKLrBQAC+wZxXW/6ogAAAABJRU5ErkJggg==";
    },
    function (e, t, n) {
      e.exports = n.p + "img/youtube_apple.4f10349.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/youtube_google.96bd4bc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/youtube_logo.a1b6516.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(6), n(17);
      var o = n(4),
        r = n(19),
        l = n(15),
        c = window.__NUXT__;
      function d() {
        if (!this._hydrated) return this.$fetch();
      }
      function m() {
        if (
          (e = this).$vnode &&
          e.$vnode.elm &&
          e.$vnode.elm.dataset &&
          e.$vnode.elm.dataset.fetchKey
        ) {
          var e;
          (this._hydrated = !0),
            (this._fetchKey = +this.$vnode.elm.dataset.fetchKey);
          var data = c.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var t in data) r.default.set(this.$data, t, data[t]);
        }
      }
      function h() {
        var e = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = f.call(this).then(function () {
              delete e._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function f() {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(o.a)(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              o,
              r = this;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (t = null),
                        (n = Date.now()),
                        (e.prev = 6),
                        (e.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      e.next = 15;
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(6)),
                        (t = Object(l.p)(e.t0));
                    case 15:
                      if (!((o = this._fetchDelay - (Date.now() - n)) > 0)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 19),
                        new Promise(function (e) {
                          return setTimeout(e, o);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = t),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return r.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      t.a = {
        beforeCreate: function () {
          Object(l.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            r.default.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = h.bind(this)),
            Object(l.a)(this, "created", m),
            Object(l.a)(this, "beforeMount", d));
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n.p + "img/type1.cf4450b.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAACCklEQVRYCe2Xzy8DURDHZ15tVRMEISlu/gISpJVIODm0/4qbK3ETdxfxH0gcekK6imobFScnCREiFCERkWqb9pmtRDZvZ6lfu43sJpu89915M5/OzNu3BfAuLwP/LAP4G7/nOhweqZTLMyBEAavVbfT79d5M5vw7vn8MdBWLBWU+fyGl7FIATgFRJ033BQLJUCp1pzxnp7ZAMhNugWKzj11lEvOLhanKfWUVqiZRGVIQKQGOSNZ9QuhNmrbbnU4/KWa1qQVIpiM9UCzGycMot4DVygCP6wDPexZ3rDmJJURc6Ds4mFMNhCrAS2n6SzCGAw2gPQqAAYs3O8FPJZ69iUQGVAMrEEJINaprTsnxtdZl+W6EUlpSagV6N//jAeJlTzZ7okZxDYh6aFOFMeauAdG+axwgapyqREw0TIYI5rA/l7tvGCBhUy73esimoV0Bot31FBoczHLlcgWIgiZxeZkOG/5yftt/0D8GouNAmqZt8Ll5Ux0Fov45444LM6CjQHTCs29n14CEEB+WywBzLENUrkqgrW3LnA1u7BgQBd/vTCQeOQizxgHZviPMC7mxaIIdOjifuWf0wR9ndUW0AtVRZ8VHbUolOe6ORyd7h4Y6qFfGUYh50lIE8kD3mhYMLnHrVM3yCWkYyOTwFH2vTND96b+OmkMjaLN/Bccyt2oAb+5lwMtAo2XgFZpHgzyXhf30AAAAAElFTkSuQmCC";
    },
    function (e, t, n) {
      e.exports = n.p + "img/type17.47a7f7e.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABUElEQVRYCe1XQU7DQAz0tGklDjwBXgEV4oI49dAH9MITOPEAPsEPOPQbrcQBfsALuHBAlXqjVQanCVJI041RjBSVXSlK7PE6ztjrzYrEERmIDPwtA7C65/zsVlKOBTjSOQO9EqHesX2ukZnjOkHAJ8HxDa4Xy6b3JU0GGc75+ZRp+rC1JX9OqYgaZGWogjKBrO4UuK+AO2JvR1OnSHlRp/6VjnJisbcFBA4tzoI2kHUQL0BbQHnNWPyFbFwDas8Qu8YQ8Bmi7xuzpSxb3u2Ha8raB+Sasrz5teOo17UacmWoczXkkbLDboweKXOtIY+twzUgjxqKy765bTpuHYeZMjgyRHTuf8j0dcEy6vffg3gB2v6HIDOLs302AB5x9fK6Dy/rTecykpDFaKzHmVM902z0vpasr+TNbqMOS3KBJwU+GH7g8vmt/NL4HBn4Vwx8AfkyX6Bjzc1dAAAAAElFTkSuQmCC";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAABaklEQVRYCWNgGAWjITAaArQNAUZijX9qZpbD8P+/O1A9JxCzAjHLfyANNADExuT//w+RZ2Rk/P///2FuHp4YwQMHPgDV4gUseGWhkk9NTcP///s3GZtaoKNQAAb/P1jE+/vXr0VAhXUoirFwmLCIYQgBjbTAECRRAGiGLDFaiHIQMFrYiDGMgJrfBOTB0kQ5CKgSlEYoBdRzEDVCCBhl1HMQ0DCKQwiY2X4RE8RERRk1HETVEAIWJJSH0GCLMuqGEDXS0GALIWBOpV4ug9ZXxGQSnGqoGmXUyGWDL4T+/aNelA3PEKJmoh4NIZx5FSpBjRACVprUS9TUKIf+MTJSz0EMjIwUtxipGkLAmCPKd/ii/j8z8yt88jA5otpDwO7PMpgGMulFUidOXCdGLzB5EAbAfhXjczMzUJ9MDsj+A6oGgAn9N5hmZv4Dio5/QMwETCcgeRAN4wP7We9Ejh9/StiWURWjITBMQwAAIvZuhy0Wb+AAAAAASUVORK5CYII=";
    },
    function (e, t, n) {
      e.exports = n.p + "img/type8.97d5c43.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAADGElEQVRYCe1WTUgUYRh+v9mdlJYSyaAdISIhokMktGLGEnUJ3CQyDDooZlBCSoFRYJctTx2C6GCHDBUiisJWqNUgUIj2x710iQ5RHUpMvShBu7rrfD0jfDIzzcyOtdJlBj7ev+d732fe72eGyHu8Dngd8DrwfzvAnMq3xamWOD0DxrfJT8cGjtNXJ7xVbD4cDi5lswOMsTDiy8R5TJHlbpZMZq3wkpVT852L03ZSKcY51WDsWi5Q7OprCtjh7fz5XK4HsUbO+RaMbZzo/Ew+f9EOb0koOkH+FXQGk3eKiSC1fzZPg8J2K5GjwozljFWafcK2JPT5F90FgSMCpJMtWMZenV1y9Q9CKNiBfXPJtpJKfa1j1Ggb/8eAgVB7nOpBpt8pJ5ZAYio9bntFe5xwfxtbI3RhnILYNyNYqrJiyYCpAPHR7jhtLYZdb3yVEBKX5VZoBEWCbhOgU3sXOD0COcerw20+gVsltKhSPxLXC6dryakJe+6Wa7wLoISEXXjbDhdYO8iN1pfUbBdcr9+PZbqy3kkGPJaMSXRoLhRKFIgaVMZ8+jguw916W9Ph2/e9rq5F72ec5xS//w1rn6ByytIBdMmQSOV0HWSbDJMYDTJGD/U+3Oa5SITeHw4d/IIcaxepAePSwOel3z90lHLAp8xzcKxnUcDwgMy34UZ6Z3DCGMaYDrFrePUn5phbG2QKkiQ9X93Ubic54aozmadIetsJ4xTDUe0JptMTJSOkFVMikV6QGncqbBXDnCElk7mnxUpKiEWj6uZA4Cy2+Serwja+KaWqqlPESkpIS1o5Obkg+Xwn8dY/RRE7CcyPclluZmNjSwJTckJaYiWV+kiS1Ip9YT4Xoq4mlzFOVyWT03rnhhDSClSn06NYuqi+mF6XGOvCQUjofZq+YYS05MrUVB+W5YWm6x+QuY9N/EDvE7otIfR6XoCExGU5I3Q3EmS4HAi0QX4QeOhvg7W1l4VtlrZfau3XYpHTHRALA4Sfc4qdiNDNM4xWzEmK2bMNDTWFfH4QOJ9Plk/tSCTmis3x4l4HvA5sVAd+A8A34IRDuUyfAAAAAElFTkSuQmCC";
    },
    function (e, t, n) {
      e.exports = n.p + "img/playground-one.b28cb27.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/playground-three.09d1168.png";
    },
    ,
    function (e, t, n) {
      e.exports = n.p + "img/ads-bg6.4cfcb15.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/left.d64d0aa.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/left2.598e168.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/right2.2be3869.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/playground-tow.78be30f.png";
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n(889), (e.exports = n(890));
    },
    ,
    function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          n(138), n(10), n(142), n(54), n(55), n(63);
          var t = n(65),
            o = (n(17), n(23), n(4)),
            r =
              (n(18),
              n(20),
              n(8),
              n(6),
              n(9),
              n(14),
              n(249),
              n(898),
              n(902),
              n(904),
              n(19)),
            l = n(804),
            c = n(318),
            d = n(15),
            m = n(86),
            h = n(845),
            f = n(229);
          function y(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (!e) return;
                  if ("string" == typeof e) return v(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === n && e.constructor && (n = e.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(e);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return v(e, t);
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var i = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return i >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[i++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var r,
              l = !0,
              c = !1;
            return {
              s: function () {
                n = e[Symbol.iterator]();
              },
              n: function () {
                var e = n.next();
                return (l = e.done), e;
              },
              e: function (e) {
                (c = !0), (r = e);
              },
              f: function () {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw r;
                }
              },
            };
          }
          function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n;
          }
          r.default.__nuxt__fetch__mixin__ ||
            (r.default.mixin(h.a), (r.default.__nuxt__fetch__mixin__ = !0)),
            r.default.component(f.a.name, f.a),
            r.default.component("NLink", f.a),
            e.fetch || (e.fetch = l.a);
          var _,
            k,
            A = [],
            j = window.__NUXT__ || {};
          Object.assign(r.default.config, { silent: !0, performance: !1 });
          var w = r.default.config.errorHandler || console.error;
          function S(e, t, n) {
            for (
              var o = function (component) {
                  var e =
                    (function (component, e) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[e]
                      )
                        return {};
                      var option = component.options[e];
                      if ("function" == typeof option) {
                        for (
                          var t = arguments.length,
                            n = new Array(t > 2 ? t - 2 : 0),
                            o = 2;
                          o < t;
                          o++
                        )
                          n[o - 2] = arguments[o];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", t, n) || {};
                  return "string" == typeof e ? { name: e } : e;
                },
                r = n ? Object(d.g)(n) : [],
                l = Math.max(e.length, r.length),
                c = [],
                m = function (i) {
                  var t = Object.assign({}, o(e[i])),
                    n = Object.assign({}, o(r[i]));
                  Object.keys(t)
                    .filter(function (e) {
                      return (
                        void 0 !== t[e] && !e.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (e) {
                      n[e] = t[e];
                    }),
                    c.push(n);
                },
                i = 0;
              i < l;
              i++
            )
              m(i);
            return c;
          }
          function T(e, t, n) {
            return M.apply(this, arguments);
          }
          function M() {
            return (M = Object(o.a)(
              regeneratorRuntime.mark(function e(t, n, o) {
                var r,
                  l,
                  c,
                  m,
                  h = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(_.nuxt.err) || n.name !== t.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== t.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== t.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(d.i)(t.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (e.prev = 5),
                            !this._queryChanged)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9),
                            Object(d.r)(t, function (e, t) {
                              return { Component: e, instance: t };
                            })
                          );
                        case 9:
                          (r = e.sent),
                            r.some(function (e) {
                              var o = e.Component,
                                r = e.instance,
                                l = o.options.watchQuery;
                              return (
                                !0 === l ||
                                (Array.isArray(l)
                                  ? l.some(function (e) {
                                      return h._diffQuery[e];
                                    })
                                  : "function" == typeof l &&
                                    l.apply(r, [t.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          o(), (e.next = 26);
                          break;
                        case 15:
                          if (
                            ((e.prev = 15),
                            (e.t0 = e.catch(5)),
                            (l = e.t0 || {}),
                            (c =
                              l.statusCode ||
                              l.status ||
                              (l.response && l.response.status) ||
                              500),
                            (m = l.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(m))
                          ) {
                            e.next = 23;
                            break;
                          }
                          return window.location.reload(!0), e.abrupt("return");
                        case 23:
                          this.error({ statusCode: c, message: m }),
                            this.$nuxt.$emit("routeChanged", t, n, l),
                            o();
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function x(e, t) {
            return j.serverRendered && t && Object(d.b)(e, t), (e._Ctor = e), e;
          }
          function O(e) {
            var path = Object(d.f)(e.options.base, e.options.mode);
            return Object(d.d)(
              e.match(path),
              (function () {
                var e = Object(o.a)(
                  regeneratorRuntime.mark(function e(t, n, o, r, l) {
                    var c;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("function" != typeof t || t.options) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), t();
                          case 3:
                            t = e.sent;
                          case 4:
                            return (
                              (c = x(
                                Object(d.s)(t),
                                j.data ? j.data[l] : null
                              )),
                              (o.components[r] = c),
                              e.abrupt("return", c)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, o, r, l) {
                  return e.apply(this, arguments);
                };
              })()
            );
          }
          function I(e, t, n) {
            var o = this,
              r = ["i18n", "init-state", "device"],
              l = !1;
            if (
              (void 0 !== n &&
                ((r = []),
                (n = Object(d.s)(n)).options.middleware &&
                  (r = r.concat(n.options.middleware)),
                e.forEach(function (e) {
                  e.options.middleware && (r = r.concat(e.options.middleware));
                })),
              (r = r.map(function (e) {
                return "function" == typeof e
                  ? e
                  : ("function" != typeof c.a[e] &&
                      ((l = !0),
                      o.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e,
                      })),
                    c.a[e]);
              })),
              !l)
            )
              return Object(d.o)(r, t);
          }
          function D(e, t, n) {
            return C.apply(this, arguments);
          }
          function C() {
            return (C = Object(o.a)(
              regeneratorRuntime.mark(function e(t, n, r) {
                var l,
                  c,
                  h,
                  f,
                  v,
                  k,
                  j,
                  w,
                  T,
                  M,
                  x,
                  O,
                  D,
                  C,
                  P,
                  E = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", r());
                        case 2:
                          return (
                            !1,
                            t === n
                              ? ((A = []), !0)
                              : ((l = []),
                                (A = Object(d.g)(n, l).map(function (e, i) {
                                  return Object(d.c)(n.matched[l[i]].path)(
                                    n.params
                                  );
                                }))),
                            (c = !1),
                            (h = function (path) {
                              n.path === path.path &&
                                E.$loading.finish &&
                                E.$loading.finish(),
                                n.path !== path.path &&
                                  E.$loading.pause &&
                                  E.$loading.pause(),
                                c || ((c = !0), r(path));
                            }),
                            (e.next = 8),
                            Object(d.t)(_, {
                              route: t,
                              from: n,
                              next: h.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = _.nuxt.dateErr),
                            (this._hadError = Boolean(_.nuxt.err)),
                            (f = []),
                            (v = Object(d.g)(t, f)).length)
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (e.next = 15), I.call(this, v, _.context);
                        case 15:
                          if (!c) {
                            e.next = 17;
                            break;
                          }
                          return e.abrupt("return");
                        case 17:
                          return (
                            (k = (m.a.options || m.a).layout),
                            (e.next = 20),
                            this.loadLayout(
                              "function" == typeof k
                                ? k.call(m.a, _.context)
                                : k
                            )
                          );
                        case 20:
                          return (
                            (j = e.sent),
                            (e.next = 23),
                            I.call(this, v, _.context, j)
                          );
                        case 23:
                          if (!c) {
                            e.next = 25;
                            break;
                          }
                          return e.abrupt("return");
                        case 25:
                          return (
                            _.context.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", r())
                          );
                        case 27:
                          return (
                            v.forEach(function (e) {
                              e._Ctor &&
                                e._Ctor.options &&
                                ((e.options.asyncData =
                                  e._Ctor.options.asyncData),
                                (e.options.fetch = e._Ctor.options.fetch));
                            }),
                            this.setTransitions(S(v, t, n)),
                            (e.prev = 29),
                            (e.next = 32),
                            I.call(this, v, _.context)
                          );
                        case 32:
                          if (!c) {
                            e.next = 34;
                            break;
                          }
                          return e.abrupt("return");
                        case 34:
                          if (!_.context._errored) {
                            e.next = 36;
                            break;
                          }
                          return e.abrupt("return", r());
                        case 36:
                          return (
                            "function" == typeof (w = v[0].options.layout) &&
                              (w = w(_.context)),
                            (e.next = 40),
                            this.loadLayout(w)
                          );
                        case 40:
                          return (
                            (w = e.sent),
                            (e.next = 43),
                            I.call(this, v, _.context, w)
                          );
                        case 43:
                          if (!c) {
                            e.next = 45;
                            break;
                          }
                          return e.abrupt("return");
                        case 45:
                          if (!_.context._errored) {
                            e.next = 47;
                            break;
                          }
                          return e.abrupt("return", r());
                        case 47:
                          (T = !0),
                            (e.prev = 48),
                            (M = y(v)),
                            (e.prev = 50),
                            M.s();
                        case 52:
                          if ((x = M.n()).done) {
                            e.next = 63;
                            break;
                          }
                          if (
                            "function" == typeof (O = x.value).options.validate
                          ) {
                            e.next = 56;
                            break;
                          }
                          return e.abrupt("continue", 61);
                        case 56:
                          return (e.next = 58), O.options.validate(_.context);
                        case 58:
                          if ((T = e.sent)) {
                            e.next = 61;
                            break;
                          }
                          return e.abrupt("break", 63);
                        case 61:
                          e.next = 52;
                          break;
                        case 63:
                          e.next = 68;
                          break;
                        case 65:
                          (e.prev = 65), (e.t0 = e.catch(50)), M.e(e.t0);
                        case 68:
                          return (e.prev = 68), M.f(), e.finish(68);
                        case 71:
                          e.next = 77;
                          break;
                        case 73:
                          return (
                            (e.prev = 73),
                            (e.t1 = e.catch(48)),
                            this.error({
                              statusCode: e.t1.statusCode || "500",
                              message: e.t1.message,
                            }),
                            e.abrupt("return", r())
                          );
                        case 77:
                          if (T) {
                            e.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", r())
                          );
                        case 80:
                          return (
                            (e.next = 82),
                            Promise.all(
                              v.map(
                                (function () {
                                  var e = Object(o.a)(
                                    regeneratorRuntime.mark(function e(o, i) {
                                      var r, l, c, m, h, y, v, k, p;
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((o._path = Object(d.c)(
                                                  t.matched[f[i]].path
                                                )(t.params)),
                                                (o._dataRefresh = !1),
                                                (r = o._path !== A[i]),
                                                E._routeChanged && r
                                                  ? (o._dataRefresh = !0)
                                                  : E._paramChanged && r
                                                  ? ((l = o.options.watchParam),
                                                    (o._dataRefresh = !1 !== l))
                                                  : E._queryChanged &&
                                                    (!0 ===
                                                    (c = o.options.watchQuery)
                                                      ? (o._dataRefresh = !0)
                                                      : Array.isArray(c)
                                                      ? (o._dataRefresh =
                                                          c.some(function (e) {
                                                            return E
                                                              ._diffQuery[e];
                                                          }))
                                                      : "function" ==
                                                          typeof c &&
                                                        (D ||
                                                          (D = Object(d.h)(t)),
                                                        (o._dataRefresh =
                                                          c.apply(D[i], [
                                                            t.query,
                                                            n.query,
                                                          ])))),
                                                E._hadError ||
                                                  !E._isMounted ||
                                                  o._dataRefresh)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return e.abrupt("return");
                                            case 6:
                                              return (
                                                (m = []),
                                                (h =
                                                  o.options.asyncData &&
                                                  "function" ==
                                                    typeof o.options.asyncData),
                                                (y =
                                                  Boolean(o.options.fetch) &&
                                                  o.options.fetch.length),
                                                (v = h && y ? 30 : 45),
                                                h &&
                                                  ((k = Object(d.q)(
                                                    o.options.asyncData,
                                                    _.context
                                                  )).then(function (e) {
                                                    Object(d.b)(o, e),
                                                      E.$loading.increase &&
                                                        E.$loading.increase(v);
                                                  }),
                                                  m.push(k)),
                                                (E.$loading.manual =
                                                  !1 === o.options.loading),
                                                y &&
                                                  (((p = o.options.fetch(
                                                    _.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      "function" ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (e) {
                                                    E.$loading.increase &&
                                                      E.$loading.increase(v);
                                                  }),
                                                  m.push(p)),
                                                e.abrupt(
                                                  "return",
                                                  Promise.all(m)
                                                )
                                              );
                                            case 14:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            r()),
                            (e.next = 99);
                          break;
                        case 85:
                          if (
                            ((e.prev = 85),
                            (e.t2 = e.catch(29)),
                            "ERR_REDIRECT" !== (C = e.t2 || {}).message)
                          ) {
                            e.next = 90;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", t, n, C)
                          );
                        case 90:
                          return (
                            (A = []),
                            Object(d.k)(C),
                            "function" ==
                              typeof (P = (m.a.options || m.a).layout) &&
                              (P = P(_.context)),
                            (e.next = 96),
                            this.loadLayout(P)
                          );
                        case 96:
                          this.error(C),
                            this.$nuxt.$emit("routeChanged", t, n, C),
                            r();
                        case 99:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function P(e, n) {
            Object(d.d)(e, function (e, n, o, l) {
              return (
                "object" !== Object(t.a)(e) ||
                  e.options ||
                  (((e = r.default.extend(e))._Ctor = e),
                  (o.components[l] = e)),
                e
              );
            });
          }
          function E(e) {
            var t = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (t = !1);
            var n = t
              ? (m.a.options || m.a).layout
              : e.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(_.context)), this.setLayout(n);
          }
          function z(e) {
            e._hadError &&
              e._dateLastError === e.$options.nuxt.dateErr &&
              e.error();
          }
          function L(e, t) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var o = Object(d.h)(e),
                l = Object(d.g)(e),
                c = !1;
              r.default.nextTick(function () {
                o.forEach(function (e, i) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    l[i] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    "function" == typeof e.constructor.options.data
                  ) {
                    var t = e.constructor.options.data.call(e);
                    for (var n in t) r.default.set(e.$data, n, t[n]);
                    c = !0;
                  }
                }),
                  c &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  z(n);
              });
            }
          }
          function R(e) {
            window.onNuxtReadyCbs.forEach(function (t) {
              "function" == typeof t && t(e);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(e),
              k.afterEach(function (t, n) {
                r.default.nextTick(function () {
                  return e.$nuxt.$emit("routeChanged", t, n);
                });
              });
          }
          function B() {
            return (B = Object(o.a)(
              regeneratorRuntime.mark(function e(t) {
                var n, o, l, c, m;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (_ = t.app),
                          (k = t.router),
                          t.store,
                          (n = new r.default(_)),
                          (o = j.layout || "default"),
                          (e.next = 7),
                          n.loadLayout(o)
                        );
                      case 7:
                        return (
                          n.setLayout(o),
                          (l = function () {
                            n.$mount("#__nuxt"),
                              k.afterEach(P),
                              k.afterEach(E.bind(n)),
                              k.afterEach(L.bind(n)),
                              r.default.nextTick(function () {
                                R(n);
                              });
                          }),
                          (e.next = 11),
                          Promise.all(O(k))
                        );
                      case 11:
                        if (
                          ((c = e.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          c.length &&
                            (n.setTransitions(S(c, k.currentRoute)),
                            (A = k.currentRoute.matched.map(function (e) {
                              return Object(d.c)(e.path)(k.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          j.error && n.error(j.error),
                          k.beforeEach(T.bind(n)),
                          k.beforeEach(D.bind(n)),
                          !j.serverRendered ||
                            !Object(d.n)(j.routePath, n.context.route.path))
                        ) {
                          e.next = 20;
                          break;
                        }
                        return e.abrupt("return", l());
                      case 20:
                        return (
                          (m = function () {
                            P(k.currentRoute, k.currentRoute),
                              E.call(n, k.currentRoute),
                              z(n),
                              l();
                          }),
                          (e.next = 23),
                          new Promise(function (e) {
                            return setTimeout(e, 0);
                          })
                        );
                      case 23:
                        D.call(
                          n,
                          k.currentRoute,
                          k.currentRoute,
                          function (path) {
                            if (path) {
                              var e = k.afterEach(function (t, n) {
                                e(), m();
                              });
                              k.push(path, void 0, function (e) {
                                e && w(e);
                              });
                            } else m();
                          }
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          Object(m.b)(null, j.config)
            .then(function (e) {
              return B.apply(this, arguments);
            })
            .catch(w);
        }.call(this, n(44));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function (e) {
          try {
            (e.userAgent = navigator.userAgent),
              ((t = e.userAgent),
              !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(t))
                ? e.store.commit("SetDeviceType", "mobile")
                : e.store.commit("SetDeviceType", "pc");
          } catch (e) {}
          var t;
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function (e) {
          e.isHMR,
            e.app,
            e.store,
            e.route,
            e.params,
            e.axios,
            e.error,
            e.redirect,
            e.req,
            e.res;
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function (e) {
          var t = e.isHMR,
            n = (e.app, e.store),
            o = (e.route, e.params, e.error, e.redirect, e.req);
          e.res;
          if (o && !t) {
            var r = new Date().getTimezoneOffset();
            n.commit("set_server_zone", r);
          }
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(27);
      var o = n(805),
        r = n.n(o);
      t.default = function (e) {
        var t = e.isHMR,
          n = e.app,
          o = e.store,
          l = e.route,
          c = e.params,
          d = (e.axios, e.error, e.redirect),
          m = e.req;
        e.res;
        if (m) {
          var h = r.a.parse(m.headers.cookie || "").locale || "",
            f = (m.headers["accept-language"] || "").split(",")[0],
            y = !1;
          if (
            (!h && f && (h = f), h || (h = n.i18n.fallbackLocale || "en"), !t)
          ) {
            if (h) {
              var v = (h = h.toLocaleLowerCase() || "").split("-")[0];
              switch (v) {
                case "zh":
                  v = h = "zht";
              }
              h = n.i18n.messages[v] ? v : "en";
            }
            var _ = c.lang || h || "en";
            if (
              (n.$cookies.set("locale", _, { path: "/", maxAge: 604800 }),
              o.dispatch("SET_LANG", _),
              (n.i18n.locale = o.state.locale),
              ("/" != l.fullPath && c.lang) ||
                "en" == _ ||
                -1 !== l.fullPath.indexOf("/top-scorers") ||
                (y = !0),
              y)
            ) {
              var k = l.fullPath || "";
              return (
                k.indexOf("/".concat(_)) < 0 &&
                  (k = "/".concat(_).concat(l.fullPath)),
                d(k)
              );
            }
          }
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    ,
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    ,
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return c;
        }),
        n.d(t, "actions", function () {
          return d;
        }),
        n.d(t, "mutations", function () {
          return m;
        });
      var o = n(276),
        r = n(277),
        l = n(46),
        c = function () {
          return {
            cid: "",
            serverTime: 0,
            lang: 2,
            locale: "en",
            locales: l.a.langStr(),
            server_zone: "",
            ODDS_TYPE: "De",
            sortBy: "1",
            activeTab: "All",
            RoofMatchIds: {},
            currentDate: 0,
            timezone: "08:00",
            mobileInfo: {
              ios: "https://apps.apple.com/app/apple-store/id1477171291?pt=120348384&ct=site_PC&mt=8",
              android: "https://www.aiscore.com/download/aiscore.apk",
              gp: "https://play.google.com/store/apps/details?id=com.onesports.score&referrer=utm_source%3Dsite_pc%26utm_medium%3Dbutton%26anid%3Dadmob",
              huawei: "https://appgallery.huawei.com/#/app/C101154649",
            },
            prefix_url: {
              nation: "https://img1.aiscore.com/country/",
              event: "https://img0.aiscore.com/football/competition/",
              bk_event: "https://img0.aiscore.com/basketball/competition/",
              team: "https://img0.aiscore.com/football/team/",
              bk_team: "https://img0.aiscore.com/basketball/team/",
              player: "https://img0.aiscore.com/football/player/",
              bk_player: "https://img0.aiscore.com/basketball/player/",
              anchor: "https://img0.aiscore.com/anchor/",
              user: "http://img1.aiscore.com/user/",
              honor: "https://img0.aiscore.com/football/honor/",
              _isVue: !0,
            },
            onlineStatus: "online",
            proModule: "",
            deviceType: "",
            murl: "https://m.aiscore.com",
            testmurl: "https://test-m.aiscore.com",
            matchesFuture: {},
            layHide: !1,
            pageWidth: 0,
            pageHeight: 0,
            innerWidth: 0,
            innerHeight: 0,
            app_version: "20210325",
            page_is410: !1,
            isplugin: !1,
            istour_rank: !1,
            istour_week: !1,
            isteam_standings: !1,
            isteam_schedule: !1,
            isteam_top: !1,
            last5w: 501,
            oddListLoading: !0,
            oddsListData: {},
            oddsUpdate: {},
            bool_topGifShow: !1,
            sport_id: 1,
            headerTitle: "Football",
            ballRouteUrl: "football",
            languageJsonMap: {},
            liveCountMap: {},
            isShowChat: !0,
            isSmallWindow: !1,
            isSmallWindow2: !0,
            bet365Odds: [],
            bet365OddType: "",
            cidData: { time: "", cid: "", country_code: "" },
            advsData: { ads: null, advs: null, countryCode: "", countryId: "" },
            fData: { compIds: [], matchIds: [], playerIds: [], teamIds: [] },
            isSendAdvs: !1,
            isSendTime: !1,
            isSendIds: !1,
          };
        },
        d = o.default,
        m = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return O;
        }),
        n.d(t, "actions", function () {
          return I;
        }),
        n.d(t, "mutations", function () {
          return D;
        }),
        n.d(t, "getters", function () {
          return C;
        });
      n(11), n(10), n(8), n(6), n(9);
      var o = n(3),
        r = n(278),
        l = n(279),
        c = n(280),
        d = n(281),
        m = n(282),
        h = n(283),
        f = n(284),
        y = n(285),
        v = n(286),
        _ = n(287),
        k = n(288),
        A = n(289),
        j = n(290),
        w = n(291),
        S = n(292),
        T = n(293);
      function M(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function x(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? M(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : M(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var O = function () {
          return x(x(x(x({}, r.default), m.default), v.default), j.default);
        },
        I = x(x(x(x({}, l.default), h.default), _.default), w.default),
        D = x(x(x(x({}, c.default), f.default), k.default), S.default),
        C = x(x(x(x({}, d.default), y.default), A.default), T.default);
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        });
      var o = n(294),
        r = n(295),
        l = function () {
          return { loginPageVisible: !1, loginPageCall: !1, userData: !1 };
        },
        c = o.default,
        d = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        });
      var o = n(296),
        r = n(297),
        l = function () {
          return {};
        },
        c = o.default,
        d = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return c;
        }),
        n.d(t, "actions", function () {
          return d;
        }),
        n.d(t, "mutations", function () {
          return m;
        });
      n(14), n(8), n(6), n(267);
      var o = n(25),
        r = (n(17), n(4)),
        l = n(7),
        c = function () {
          return {
            tempType: 1,
            teamName: "",
            compName: "totall",
            seasonId: "alltime",
            compData: {},
          };
        },
        d = {
          getCompAction: function (e, data) {
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                var n, o, r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (o = e.rootState),
                          (t.next = 3),
                          Object(l.yb)(data)
                        );
                      case 3:
                        (r = t.sent),
                          n("setDataMutation", { data: r, locale: o.locale });
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getTeamAction: function (e, data) {
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                var n, o, r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (o = e.rootState),
                          (t.next = 3),
                          Object(l.zb)(data)
                        );
                      case 3:
                        (r = t.sent),
                          n("setDataMutation", { data: r, locale: o.locale });
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        m = {
          setDataMutation: function (e, t) {
            var data = t.data,
              n = t.locale;
            e.test = data;
            var r = {
              compsArr: [{ name: "Total", slug: "totall" }],
              compsMap: {},
              playersMap: {},
              teamsArr: [],
              teamsMap: {},
              playersRender: [],
              seasons: [{ sid: "alltime", year: "All Time" }],
              seasonsMap: {},
              updateTime: 0,
            };
            if (((e.test = data), data)) {
              var l, c, d, m, h, f, y;
              if (
                null != data &&
                null !== (l = data.comps) &&
                void 0 !== l &&
                l.length
              )
                (f = r.compsArr).push.apply(f, Object(o.a)(data.comps)),
                  data.comps.map(function (e) {
                    r.compsMap[e.id] = e;
                  });
              if (
                null != data &&
                null !== (c = data.seasons) &&
                void 0 !== c &&
                c.length
              )
                (y = r.seasons).push.apply(y, Object(o.a)(data.seasons)),
                  data.seasons.map(function (e) {
                    r.seasonsMap[e.sid] = e;
                  });
              null != data &&
                null !== (d = data.players) &&
                void 0 !== d &&
                d.length &&
                data.players.map(function (e) {
                  r.playersMap[e.id] = e;
                }),
                null != data &&
                  null !== (m = data.teams) &&
                  void 0 !== m &&
                  m.length &&
                  ((r.teamsArr = data.teams),
                  data.teams.map(function (e) {
                    r.teamsMap[e.id] = e;
                  })),
                null != data &&
                  null !== (h = data.totalsData) &&
                  void 0 !== h &&
                  h.playerTotal &&
                  (Object.values(data.totalsData.playerTotal).map(function (e) {
                    try {
                      var t,
                        p = r.playersMap[e.player.id] || {},
                        n =
                          r.teamsMap[
                            null == p || null === (t = p.team) || void 0 === t
                              ? void 0
                              : t.id
                          ] || {};
                      r.playersRender.push({
                        playerId: e.player.id,
                        logo: p.logo,
                        slug: p.slug,
                        name: p.name,
                        team: n ? n.name : "",
                        teamSlug: n ? n.slug : "",
                        totalGames: e.values[1],
                        totalGoals: e.values[3],
                      });
                    } catch (e) {}
                  }),
                  (r.playersRender = r.playersRender.sort(function (a, b) {
                    return b.totalGoals != a.totalGoals
                      ? b.totalGoals - a.totalGoals
                      : a.name
                      ? a.name.localeCompare(b.name, "zht" == n ? "zh" : n)
                      : void 0;
                  })),
                  r.playersRender.forEach(function (e, t) {
                    0 != t &&
                      e.totalGoals == r.playersRender[t - 1].totalGoals &&
                      (e.showIndex = 0);
                  })),
                data.updateTime && (r.updateTime = data.updateTime);
            }
            e.compData = r;
          },
          tempTypeMutation: function (e, data) {
            e.tempType = data;
          },
          setSeasonId: function (e, data) {
            e.seasonId = data;
          },
          setcompName: function (e, data) {
            e.compName = data;
          },
          setTeamName: function (e, data) {
            e.teamName = data;
          },
        };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        });
      var o = n(298),
        r = n(299),
        l = function () {
          return {
            tab: "index",
            lists: [],
            teamsMap: {},
            updateTime: 0,
            h2hDetailData: {},
            detail_compsMap: {},
            detail_teamsMap: {},
            detail_homeMap: {},
            detail_awayMap: {},
            detail_venuesMap: {},
            home: "",
            away: "",
            hot_h2h: {},
            hot_h2h_maps: {},
            matchInfo: {},
            table2Opt: [],
            table3Opt: [],
            h_isSelect2: [],
            a_isSelect2: [],
            homeResult: [],
            awayResult: [],
          };
        },
        c = o.default,
        d = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        });
      var o = n(300),
        r = n(301),
        l = function () {
          return {
            fifaData: {},
            fifaRankingsff: {},
            pub_time: 0,
            pub_type: 0,
            fifa_tabs: [
              "FIFA Ranking",
              "UEFA Ranking",
              "CONMEBOL Ranking",
              "CONCACAF Ranking",
              "CAF Ranking",
              "AFC Ranking",
              "OFC Ranking",
            ],
          };
        },
        c = o.default,
        d = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return d;
        }),
        n.d(t, "actions", function () {
          return m;
        }),
        n.d(t, "mutations", function () {
          return h;
        }),
        n.d(t, "getters", function () {
          return f;
        });
      var o = n(153),
        r = n(154),
        l = n(302),
        c = n.n(l),
        d = function () {
          return { data: { _isVue: !0 }, season_id: "", playerStats: {} };
        },
        m = o.default,
        h = r.default,
        f = c.a;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return d;
        }),
        n.d(t, "actions", function () {
          return m;
        }),
        n.d(t, "mutations", function () {
          return h;
        }),
        n.d(t, "getters", function () {
          return f;
        });
      var o = n(303),
        r = n(304),
        l = n(305),
        c = n.n(l),
        d = function () {
          return { data: {}, transDate: "" };
        },
        m = o.default,
        h = r.default,
        f = c.a;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        });
      var o = n(153),
        r = n(154),
        l = function () {
          return { data: {} };
        },
        c = o.default,
        d = r.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        }),
        n.d(t, "plugins", function () {
          return m;
        });
      var o = n(306),
        r = n(307),
        l = function () {
          return {
            hideFinish: !1,
            sizeData: { head: 40, match: 48 },
            matchesData: {
              matches: [],
              teams: [],
              competitions: [],
              competitionsMap: [],
              teamsMap: {},
              matchesMap: {},
              liveSize: 0,
              allMatches: [],
              liveMatches: [],
              scheduleMatches: [],
              finishedMatches: [],
              favMatches: [],
              compMatchesMap: {},
            },
            customize: [
              { name: "ranking", status: !0, label: "League Ranking" },
              { name: "redcard", status: !0, label: "Red card" },
              { name: "yellowcard", status: !0, label: "Yellow card" },
              { name: "ht", status: !0, label: "HT score" },
              { name: "corner", status: !0, label: "Corner score" },
              { name: "oneXtwo", status: !0, label: "1X2" },
              { name: "overUnder", status: !0, label: "Over/Under" },
            ],
            homeLeftData: {},
            FavoritesData: { 1: {}, 2: {}, 3: {}, 4: {} },
            favorites: {
              init: !1,
              compIds: [],
              defaultCompIds: [],
              matchIds: [],
              notPushMatchIds: [],
              playerIds: [],
              teamIds: [],
            },
            sortList: { 1: "Sort by league", 2: "Sort by time" },
            sortBy: "1",
            alerts: ["2", "3"],
            activeTab: "Live",
            currentDate: 0,
            footballStatus: {
              3: "HT",
              5: "ET",
              7: "Penalties",
              8: "FT",
              9: "Postponed",
              10: "Interrupted",
              11: "Cut",
              12: "Canceled",
              13: "Pending",
              105: "AET",
              110: "AP",
            },
            noDataText: {
              All: "No match found",
              Live: "No match is being played right now",
              Finished: "No match found",
              Scheduled: "No match found",
              Favorites: "You haven't selected any game yet",
            },
            theme_c: "init",
            theme_w: 1200,
            theme_range: 3,
            changeMatchesTime: null,
            goalAnimate: [],
            isMin: !1,
            themeTitle: 1,
            lineColor: {},
            themeOdds: 1,
            themeSize: "normal",
            oddSelect: "0",
            dialogHierarchy: 1,
            isWorldCup: !1,
          };
        },
        c = o.default,
        d = r.default,
        m = [];
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "actions", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return d;
        }),
        n.d(t, "plugins", function () {
          return m;
        });
      var o = n(308),
        r = n(309),
        l = function () {
          return {
            WebMatchData: {},
            tables: {},
            lineups: {},
            incidents: {},
            stats: {},
            ODDS_DETAIL_DATA: {},
            HISTORY_DETAIL_DATA: {},
            onlineStatus: "online",
          };
        },
        c = o.default,
        d = r.default,
        m = [];
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return c;
        }),
        n.d(t, "actions", function () {
          return d;
        }),
        n.d(t, "mutations", function () {
          return m;
        });
      var o = n(310),
        r = n(311),
        l = n(312),
        c = function () {
          return o.default;
        },
        d = r.default,
        m = l.default;
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = {});
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(7);
      t.default = {
        FETCH_FOOTBAL_PLAYER: function (e, t) {
          var n = e.commit;
          return Object(o.y)(t).then(function (e) {
            return n("SET_FOOTBAL_PLAYER", e, { root: !1 });
          });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0);
      t.default = {
        SET_FOOTBAL_PLAYER: function (e, t) {
          var n = {};
          if (
            ((n.teamsObj = o.a.array_to_object(t.teams)),
            t.playerMatches && Array.isArray(t.playerMatches.matches))
          ) {
            var r = [];
            t.playerMatches.matches.forEach(function (e) {
              r.push(
                Object.assign({}, e, {
                  extraStr: JSON.parse(o.a.ab2str(e.extra)),
                })
              );
            }),
              (t.playerMatches = Object.assign({}, t.playerMatches, {
                matches: r,
              }));
          }
          return (e.data = Object.assign({}, t, n)), {};
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    ,
    function (e, t, n) {
      var map = {
        "./map_amfootball/aa.json": [1845, 15],
        "./map_amfootball/aze.json": [1846, 16],
        "./map_amfootball/bg.json": [1847, 17],
        "./map_amfootball/br.json": [1848, 18],
        "./map_amfootball/bs.json": [1849, 19],
        "./map_amfootball/ch.json": [1850, 69],
        "./map_amfootball/cs.json": [1851, 20],
        "./map_amfootball/da.json": [1852, 21],
        "./map_amfootball/de.json": [1853, 22],
        "./map_amfootball/el.json": [1854, 23],
        "./map_amfootball/en.json": [1855, 24],
        "./map_amfootball/es.json": [1856, 25],
        "./map_amfootball/et.json": [1857, 26],
        "./map_amfootball/fi.json": [1858, 27],
        "./map_amfootball/fr.json": [1859, 28],
        "./map_amfootball/hr.json": [1860, 29],
        "./map_amfootball/hu.json": [1861, 30],
        "./map_amfootball/id.json": [1862, 31],
        "./map_amfootball/it.json": [1863, 32],
        "./map_amfootball/ja.json": [1864, 33],
        "./map_amfootball/ka.json": [1865, 34],
        "./map_amfootball/km.json": [1866, 35],
        "./map_amfootball/ko.json": [1867, 36],
        "./map_amfootball/lt.json": [1868, 37],
        "./map_amfootball/lv.json": [1869, 38],
        "./map_amfootball/mk.json": [1870, 39],
        "./map_amfootball/mm.json": [1871, 40],
        "./map_amfootball/nl.json": [1872, 41],
        "./map_amfootball/nn.json": [1873, 42],
        "./map_amfootball/pl.json": [1874, 43],
        "./map_amfootball/pt.json": [1875, 44],
        "./map_amfootball/ro.json": [1876, 45],
        "./map_amfootball/ru.json": [1877, 46],
        "./map_amfootball/sk.json": [1878, 47],
        "./map_amfootball/sl.json": [1879, 48],
        "./map_amfootball/sqi.json": [1880, 49],
        "./map_amfootball/sr.json": [1881, 50],
        "./map_amfootball/srl.json": [1882, 70],
        "./map_amfootball/sv.json": [1883, 51],
        "./map_amfootball/th.json": [1884, 52],
        "./map_amfootball/tr.json": [1885, 53],
        "./map_amfootball/ukr.json": [1886, 54],
        "./map_amfootball/vi.json": [1887, 55],
        "./map_amfootball/zht.json": [1888, 56],
        "./map_badminton/aa.json": [1889, 15],
        "./map_badminton/aze.json": [1890, 16],
        "./map_badminton/bg.json": [1891, 17],
        "./map_badminton/br.json": [1892, 18],
        "./map_badminton/bs.json": [1893, 19],
        "./map_badminton/ch.json": [1894, 71],
        "./map_badminton/cs.json": [1895, 20],
        "./map_badminton/da.json": [1896, 21],
        "./map_badminton/de.json": [1897, 22],
        "./map_badminton/el.json": [1898, 23],
        "./map_badminton/en.json": [1899, 24],
        "./map_badminton/es.json": [1900, 25],
        "./map_badminton/et.json": [1901, 26],
        "./map_badminton/fi.json": [1902, 27],
        "./map_badminton/fr.json": [1903, 28],
        "./map_badminton/hr.json": [1904, 29],
        "./map_badminton/hu.json": [1905, 30],
        "./map_badminton/id.json": [1906, 31],
        "./map_badminton/it.json": [1907, 32],
        "./map_badminton/ja.json": [1908, 33],
        "./map_badminton/ka.json": [1909, 34],
        "./map_badminton/km.json": [1910, 35],
        "./map_badminton/ko.json": [1911, 36],
        "./map_badminton/lt.json": [1912, 37],
        "./map_badminton/lv.json": [1913, 38],
        "./map_badminton/mk.json": [1914, 39],
        "./map_badminton/mm.json": [1915, 40],
        "./map_badminton/nl.json": [1916, 41],
        "./map_badminton/nn.json": [1917, 42],
        "./map_badminton/pl.json": [1918, 43],
        "./map_badminton/pt.json": [1919, 44],
        "./map_badminton/ro.json": [1920, 45],
        "./map_badminton/ru.json": [1921, 46],
        "./map_badminton/sk.json": [1922, 47],
        "./map_badminton/sl.json": [1923, 48],
        "./map_badminton/sqi.json": [1924, 49],
        "./map_badminton/sr.json": [1925, 50],
        "./map_badminton/srl.json": [1926, 72],
        "./map_badminton/sv.json": [1927, 51],
        "./map_badminton/th.json": [1928, 52],
        "./map_badminton/tr.json": [1929, 53],
        "./map_badminton/ukr.json": [1930, 54],
        "./map_badminton/vi.json": [1931, 55],
        "./map_badminton/zht.json": [1932, 56],
        "./map_baseball/aa.json": [1933, 15],
        "./map_baseball/aze.json": [1934, 16],
        "./map_baseball/bg.json": [1935, 17],
        "./map_baseball/br.json": [1936, 18],
        "./map_baseball/bs.json": [1937, 19],
        "./map_baseball/ch.json": [1938, 73],
        "./map_baseball/cs.json": [1939, 20],
        "./map_baseball/da.json": [1940, 21],
        "./map_baseball/de.json": [1941, 22],
        "./map_baseball/el.json": [1942, 23],
        "./map_baseball/en.json": [1943, 24],
        "./map_baseball/es.json": [1944, 25],
        "./map_baseball/et.json": [1945, 26],
        "./map_baseball/fi.json": [1946, 27],
        "./map_baseball/fr.json": [1947, 28],
        "./map_baseball/hr.json": [1948, 29],
        "./map_baseball/hu.json": [1949, 30],
        "./map_baseball/id.json": [1950, 31],
        "./map_baseball/it.json": [1951, 32],
        "./map_baseball/ja.json": [1952, 33],
        "./map_baseball/ka.json": [1953, 34],
        "./map_baseball/km.json": [1954, 35],
        "./map_baseball/ko.json": [1955, 36],
        "./map_baseball/lt.json": [1956, 37],
        "./map_baseball/lv.json": [1957, 38],
        "./map_baseball/mk.json": [1958, 39],
        "./map_baseball/mm.json": [1959, 40],
        "./map_baseball/nl.json": [1960, 41],
        "./map_baseball/nn.json": [1961, 42],
        "./map_baseball/pl.json": [1962, 43],
        "./map_baseball/pt.json": [1963, 44],
        "./map_baseball/ro.json": [1964, 45],
        "./map_baseball/ru.json": [1965, 46],
        "./map_baseball/sk.json": [1966, 47],
        "./map_baseball/sl.json": [1967, 48],
        "./map_baseball/sqi.json": [1968, 49],
        "./map_baseball/sr.json": [1969, 50],
        "./map_baseball/srl.json": [1970, 74],
        "./map_baseball/sv.json": [1971, 51],
        "./map_baseball/th.json": [1972, 52],
        "./map_baseball/tr.json": [1973, 53],
        "./map_baseball/ukr.json": [1974, 54],
        "./map_baseball/vi.json": [1975, 55],
        "./map_baseball/zht.json": [1976, 56],
        "./map_basketball/aa.json": [1977, 15],
        "./map_basketball/aze.json": [1978, 16],
        "./map_basketball/bg.json": [1979, 17],
        "./map_basketball/br.json": [1980, 18],
        "./map_basketball/bs.json": [1981, 19],
        "./map_basketball/ch.json": [1982, 75],
        "./map_basketball/cs.json": [1983, 20],
        "./map_basketball/da.json": [1984, 21],
        "./map_basketball/de.json": [1985, 22],
        "./map_basketball/el.json": [1986, 23],
        "./map_basketball/en.json": [1987, 24],
        "./map_basketball/es.json": [1988, 25],
        "./map_basketball/et.json": [1989, 26],
        "./map_basketball/fi.json": [1990, 27],
        "./map_basketball/fr.json": [1991, 28],
        "./map_basketball/hr.json": [1992, 29],
        "./map_basketball/hu.json": [1993, 30],
        "./map_basketball/id.json": [1994, 31],
        "./map_basketball/it.json": [1995, 32],
        "./map_basketball/ja.json": [1996, 33],
        "./map_basketball/ka.json": [1997, 34],
        "./map_basketball/km.json": [1998, 35],
        "./map_basketball/ko.json": [1999, 36],
        "./map_basketball/lt.json": [2e3, 37],
        "./map_basketball/lv.json": [2001, 38],
        "./map_basketball/mk.json": [2002, 39],
        "./map_basketball/mm.json": [2003, 40],
        "./map_basketball/nl.json": [2004, 41],
        "./map_basketball/nn.json": [2005, 42],
        "./map_basketball/pl.json": [2006, 43],
        "./map_basketball/pt.json": [2007, 44],
        "./map_basketball/ro.json": [2008, 45],
        "./map_basketball/ru.json": [2009, 46],
        "./map_basketball/sk.json": [2010, 47],
        "./map_basketball/sl.json": [2011, 48],
        "./map_basketball/sqi.json": [2012, 49],
        "./map_basketball/sr.json": [2013, 50],
        "./map_basketball/srl.json": [2014, 76],
        "./map_basketball/sv.json": [2015, 51],
        "./map_basketball/th.json": [2016, 52],
        "./map_basketball/tr.json": [2017, 53],
        "./map_basketball/ukr.json": [2018, 54],
        "./map_basketball/vi.json": [2019, 55],
        "./map_basketball/zh.json": [2020, 61],
        "./map_basketball/zht.json": [2021, 56],
        "./map_common/aa.json": [2022, 15],
        "./map_common/aze.json": [2023, 16],
        "./map_common/bg.json": [2024, 17],
        "./map_common/br.json": [2025, 18],
        "./map_common/bs.json": [2026, 19],
        "./map_common/ch.json": [2027, 77],
        "./map_common/cs.json": [2028, 20],
        "./map_common/da.json": [2029, 21],
        "./map_common/de.json": [2030, 22],
        "./map_common/el.json": [2031, 23],
        "./map_common/en.json": [2032, 24],
        "./map_common/es.json": [2033, 25],
        "./map_common/et.json": [2034, 26],
        "./map_common/fi.json": [2035, 27],
        "./map_common/fr.json": [2036, 28],
        "./map_common/hr.json": [2037, 29],
        "./map_common/hu.json": [2038, 30],
        "./map_common/id.json": [2039, 31],
        "./map_common/it.json": [2040, 32],
        "./map_common/ja.json": [2041, 33],
        "./map_common/ka.json": [2042, 34],
        "./map_common/km.json": [2043, 35],
        "./map_common/ko.json": [2044, 36],
        "./map_common/lt.json": [2045, 37],
        "./map_common/lv.json": [2046, 38],
        "./map_common/mk.json": [2047, 39],
        "./map_common/mm.json": [2048, 40],
        "./map_common/nl.json": [2049, 41],
        "./map_common/nn.json": [2050, 42],
        "./map_common/pl.json": [2051, 43],
        "./map_common/pt.json": [2052, 44],
        "./map_common/ro.json": [2053, 45],
        "./map_common/ru.json": [2054, 46],
        "./map_common/sk.json": [2055, 47],
        "./map_common/sl.json": [2056, 48],
        "./map_common/sqi.json": [2057, 49],
        "./map_common/sr.json": [2058, 50],
        "./map_common/srl.json": [2059, 78],
        "./map_common/sv.json": [2060, 51],
        "./map_common/th.json": [2061, 52],
        "./map_common/tr.json": [2062, 53],
        "./map_common/ukr.json": [2063, 54],
        "./map_common/vi.json": [2064, 55],
        "./map_common/zht.json": [2065, 56],
        "./map_cricket/aa.json": [2066, 15],
        "./map_cricket/aze.json": [2067, 16],
        "./map_cricket/bg.json": [2068, 17],
        "./map_cricket/br.json": [2069, 18],
        "./map_cricket/bs.json": [2070, 19],
        "./map_cricket/ch.json": [2071, 79],
        "./map_cricket/cs.json": [2072, 20],
        "./map_cricket/da.json": [2073, 21],
        "./map_cricket/de.json": [2074, 22],
        "./map_cricket/el.json": [2075, 23],
        "./map_cricket/en.json": [2076, 24],
        "./map_cricket/es.json": [2077, 25],
        "./map_cricket/et.json": [2078, 26],
        "./map_cricket/fi.json": [2079, 27],
        "./map_cricket/fr.json": [2080, 28],
        "./map_cricket/hr.json": [2081, 29],
        "./map_cricket/hu.json": [2082, 30],
        "./map_cricket/id.json": [2083, 31],
        "./map_cricket/it.json": [2084, 32],
        "./map_cricket/ja.json": [2085, 33],
        "./map_cricket/ka.json": [2086, 34],
        "./map_cricket/km.json": [2087, 35],
        "./map_cricket/ko.json": [2088, 36],
        "./map_cricket/lt.json": [2089, 37],
        "./map_cricket/lv.json": [2090, 38],
        "./map_cricket/mk.json": [2091, 39],
        "./map_cricket/mm.json": [2092, 40],
        "./map_cricket/nl.json": [2093, 41],
        "./map_cricket/nn.json": [2094, 42],
        "./map_cricket/pl.json": [2095, 43],
        "./map_cricket/pt.json": [2096, 44],
        "./map_cricket/ro.json": [2097, 45],
        "./map_cricket/ru.json": [2098, 46],
        "./map_cricket/sk.json": [2099, 47],
        "./map_cricket/sl.json": [2100, 48],
        "./map_cricket/sqi.json": [2101, 49],
        "./map_cricket/sr.json": [2102, 50],
        "./map_cricket/srl.json": [2103, 80],
        "./map_cricket/sv.json": [2104, 51],
        "./map_cricket/th.json": [2105, 52],
        "./map_cricket/tr.json": [2106, 53],
        "./map_cricket/ukr.json": [2107, 54],
        "./map_cricket/vi.json": [2108, 55],
        "./map_cricket/zht.json": [2109, 56],
        "./map_esports/aa.json": [2110, 15],
        "./map_esports/aze.json": [2111, 16],
        "./map_esports/bg.json": [2112, 17],
        "./map_esports/br.json": [2113, 18],
        "./map_esports/bs.json": [2114, 19],
        "./map_esports/cs.json": [2115, 20],
        "./map_esports/da.json": [2116, 21],
        "./map_esports/de.json": [2117, 22],
        "./map_esports/el.json": [2118, 23],
        "./map_esports/en.json": [2119, 24],
        "./map_esports/es.json": [2120, 25],
        "./map_esports/et.json": [2121, 26],
        "./map_esports/fi.json": [2122, 27],
        "./map_esports/fr.json": [2123, 28],
        "./map_esports/hr.json": [2124, 29],
        "./map_esports/hu.json": [2125, 30],
        "./map_esports/id.json": [2126, 31],
        "./map_esports/it.json": [2127, 32],
        "./map_esports/ja.json": [2128, 33],
        "./map_esports/ka.json": [2129, 34],
        "./map_esports/km.json": [2130, 35],
        "./map_esports/ko.json": [2131, 36],
        "./map_esports/lt.json": [2132, 37],
        "./map_esports/lv.json": [2133, 38],
        "./map_esports/mk.json": [2134, 39],
        "./map_esports/mm.json": [2135, 40],
        "./map_esports/nl.json": [2136, 41],
        "./map_esports/nn.json": [2137, 42],
        "./map_esports/pl.json": [2138, 43],
        "./map_esports/pt.json": [2139, 44],
        "./map_esports/ro.json": [2140, 45],
        "./map_esports/ru.json": [2141, 46],
        "./map_esports/sk.json": [2142, 47],
        "./map_esports/sl.json": [2143, 48],
        "./map_esports/sqi.json": [2144, 49],
        "./map_esports/sr.json": [2145, 50],
        "./map_esports/sv.json": [2146, 51],
        "./map_esports/th.json": [2147, 52],
        "./map_esports/tr.json": [2148, 53],
        "./map_esports/ukr.json": [2149, 54],
        "./map_esports/vi.json": [2150, 55],
        "./map_esports/zht.json": [2151, 56],
        "./map_football/aa.json": [2152, 15],
        "./map_football/aze.json": [2153, 16],
        "./map_football/bg.json": [2154, 17],
        "./map_football/br.json": [2155, 18],
        "./map_football/bs.json": [2156, 19],
        "./map_football/ch.json": [2157, 81],
        "./map_football/cs.json": [2158, 20],
        "./map_football/da.json": [2159, 21],
        "./map_football/de.json": [2160, 22],
        "./map_football/el.json": [2161, 23],
        "./map_football/en.json": [2162, 24],
        "./map_football/es.json": [2163, 25],
        "./map_football/et.json": [2164, 26],
        "./map_football/fi.json": [2165, 27],
        "./map_football/fr.json": [2166, 28],
        "./map_football/hr.json": [2167, 29],
        "./map_football/hu.json": [2168, 30],
        "./map_football/id.json": [2169, 31],
        "./map_football/it.json": [2170, 32],
        "./map_football/ja.json": [2171, 33],
        "./map_football/ka.json": [2172, 34],
        "./map_football/km.json": [2173, 35],
        "./map_football/ko.json": [2174, 36],
        "./map_football/lt.json": [2175, 37],
        "./map_football/lv.json": [2176, 38],
        "./map_football/mk.json": [2177, 39],
        "./map_football/mm.json": [2178, 40],
        "./map_football/nl.json": [2179, 41],
        "./map_football/nn.json": [2180, 42],
        "./map_football/pl.json": [2181, 43],
        "./map_football/pt.json": [2182, 44],
        "./map_football/ro.json": [2183, 45],
        "./map_football/ru.json": [2184, 46],
        "./map_football/sk.json": [2185, 47],
        "./map_football/sl.json": [2186, 48],
        "./map_football/sqi.json": [2187, 49],
        "./map_football/sr.json": [2188, 50],
        "./map_football/srl.json": [2189, 82],
        "./map_football/sv.json": [2190, 51],
        "./map_football/th.json": [2191, 52],
        "./map_football/tr.json": [2192, 53],
        "./map_football/ukr.json": [2193, 54],
        "./map_football/vi.json": [2194, 55],
        "./map_football/zh.json": [2195, 61],
        "./map_football/zht.json": [2196, 56],
        "./map_handball/aa.json": [2197, 15],
        "./map_handball/aze.json": [2198, 16],
        "./map_handball/bg.json": [2199, 17],
        "./map_handball/br.json": [2200, 18],
        "./map_handball/bs.json": [2201, 19],
        "./map_handball/ch.json": [2202, 83],
        "./map_handball/cs.json": [2203, 20],
        "./map_handball/da.json": [2204, 21],
        "./map_handball/de.json": [2205, 22],
        "./map_handball/el.json": [2206, 23],
        "./map_handball/en.json": [2207, 24],
        "./map_handball/es.json": [2208, 25],
        "./map_handball/et.json": [2209, 26],
        "./map_handball/fi.json": [2210, 27],
        "./map_handball/fr.json": [2211, 28],
        "./map_handball/hr.json": [2212, 29],
        "./map_handball/hu.json": [2213, 30],
        "./map_handball/id.json": [2214, 31],
        "./map_handball/it.json": [2215, 32],
        "./map_handball/ja.json": [2216, 33],
        "./map_handball/ka.json": [2217, 34],
        "./map_handball/km.json": [2218, 35],
        "./map_handball/ko.json": [2219, 36],
        "./map_handball/lt.json": [2220, 37],
        "./map_handball/lv.json": [2221, 38],
        "./map_handball/mk.json": [2222, 39],
        "./map_handball/mm.json": [2223, 40],
        "./map_handball/nl.json": [2224, 41],
        "./map_handball/nn.json": [2225, 42],
        "./map_handball/pl.json": [2226, 43],
        "./map_handball/pt.json": [2227, 44],
        "./map_handball/ro.json": [2228, 45],
        "./map_handball/ru.json": [2229, 46],
        "./map_handball/sk.json": [2230, 47],
        "./map_handball/sl.json": [2231, 48],
        "./map_handball/sqi.json": [2232, 49],
        "./map_handball/sr.json": [2233, 50],
        "./map_handball/srl.json": [2234, 84],
        "./map_handball/sv.json": [2235, 51],
        "./map_handball/th.json": [2236, 52],
        "./map_handball/tr.json": [2237, 53],
        "./map_handball/ukr.json": [2238, 54],
        "./map_handball/vi.json": [2239, 55],
        "./map_handball/zht.json": [2240, 56],
        "./map_icehockey/aa.json": [2241, 15],
        "./map_icehockey/aze.json": [2242, 16],
        "./map_icehockey/bg.json": [2243, 17],
        "./map_icehockey/br.json": [2244, 18],
        "./map_icehockey/bs.json": [2245, 19],
        "./map_icehockey/ch.json": [2246, 85],
        "./map_icehockey/cs.json": [2247, 20],
        "./map_icehockey/da.json": [2248, 21],
        "./map_icehockey/de.json": [2249, 22],
        "./map_icehockey/el.json": [2250, 23],
        "./map_icehockey/en.json": [2251, 24],
        "./map_icehockey/es.json": [2252, 25],
        "./map_icehockey/et.json": [2253, 26],
        "./map_icehockey/fi.json": [2254, 27],
        "./map_icehockey/fr.json": [2255, 28],
        "./map_icehockey/hr.json": [2256, 29],
        "./map_icehockey/hu.json": [2257, 30],
        "./map_icehockey/id.json": [2258, 31],
        "./map_icehockey/it.json": [2259, 32],
        "./map_icehockey/ja.json": [2260, 33],
        "./map_icehockey/ka.json": [2261, 34],
        "./map_icehockey/km.json": [2262, 35],
        "./map_icehockey/ko.json": [2263, 36],
        "./map_icehockey/lt.json": [2264, 37],
        "./map_icehockey/lv.json": [2265, 38],
        "./map_icehockey/mk.json": [2266, 39],
        "./map_icehockey/mm.json": [2267, 40],
        "./map_icehockey/nl.json": [2268, 41],
        "./map_icehockey/nn.json": [2269, 42],
        "./map_icehockey/pl.json": [2270, 43],
        "./map_icehockey/pt.json": [2271, 44],
        "./map_icehockey/ro.json": [2272, 45],
        "./map_icehockey/ru.json": [2273, 46],
        "./map_icehockey/sk.json": [2274, 47],
        "./map_icehockey/sl.json": [2275, 48],
        "./map_icehockey/sqi.json": [2276, 49],
        "./map_icehockey/sr.json": [2277, 50],
        "./map_icehockey/srl.json": [2278, 86],
        "./map_icehockey/sv.json": [2279, 51],
        "./map_icehockey/th.json": [2280, 52],
        "./map_icehockey/tr.json": [2281, 53],
        "./map_icehockey/ukr.json": [2282, 54],
        "./map_icehockey/vi.json": [2283, 55],
        "./map_icehockey/zht.json": [2284, 56],
        "./map_newTranslate/aa.json": [2285, 15],
        "./map_newTranslate/aze.json": [2286, 16],
        "./map_newTranslate/bg.json": [2287, 17],
        "./map_newTranslate/br.json": [2288, 18],
        "./map_newTranslate/bs.json": [2289, 19],
        "./map_newTranslate/ch.json": [2290, 87],
        "./map_newTranslate/cs.json": [2291, 20],
        "./map_newTranslate/da.json": [2292, 21],
        "./map_newTranslate/de.json": [2293, 22],
        "./map_newTranslate/el.json": [2294, 23],
        "./map_newTranslate/en.json": [2295, 24],
        "./map_newTranslate/es.json": [2296, 25],
        "./map_newTranslate/et.json": [2297, 26],
        "./map_newTranslate/fi.json": [2298, 27],
        "./map_newTranslate/fr.json": [2299, 28],
        "./map_newTranslate/hr.json": [2300, 29],
        "./map_newTranslate/hu.json": [2301, 30],
        "./map_newTranslate/id.json": [2302, 31],
        "./map_newTranslate/it.json": [2303, 32],
        "./map_newTranslate/ja.json": [2304, 33],
        "./map_newTranslate/ka.json": [2305, 34],
        "./map_newTranslate/km.json": [2306, 35],
        "./map_newTranslate/ko.json": [2307, 36],
        "./map_newTranslate/lt.json": [2308, 37],
        "./map_newTranslate/lv.json": [2309, 38],
        "./map_newTranslate/mk.json": [2310, 39],
        "./map_newTranslate/mm.json": [2311, 40],
        "./map_newTranslate/nl.json": [2312, 41],
        "./map_newTranslate/nn.json": [2313, 42],
        "./map_newTranslate/pl.json": [2314, 43],
        "./map_newTranslate/pt.json": [2315, 44],
        "./map_newTranslate/ro.json": [2316, 45],
        "./map_newTranslate/ru.json": [2317, 46],
        "./map_newTranslate/sk.json": [2318, 47],
        "./map_newTranslate/sl.json": [2319, 48],
        "./map_newTranslate/sqi.json": [2320, 49],
        "./map_newTranslate/sr.json": [2321, 50],
        "./map_newTranslate/srl.json": [2322, 88],
        "./map_newTranslate/sv.json": [2323, 51],
        "./map_newTranslate/th.json": [2324, 52],
        "./map_newTranslate/tr.json": [2325, 53],
        "./map_newTranslate/ukr.json": [2326, 54],
        "./map_newTranslate/vi.json": [2327, 55],
        "./map_newTranslate/zh.json": [2328, 61],
        "./map_newTranslate/zht.json": [2329, 56],
        "./map_newseo/aa.json": [2330, 15],
        "./map_newseo/aze.json": [2331, 16],
        "./map_newseo/bg.json": [2332, 17],
        "./map_newseo/br.json": [2333, 18],
        "./map_newseo/bs.json": [2334, 19],
        "./map_newseo/ch.json": [2335, 89],
        "./map_newseo/cs.json": [2336, 20],
        "./map_newseo/da.json": [2337, 21],
        "./map_newseo/de.json": [2338, 22],
        "./map_newseo/el.json": [2339, 23],
        "./map_newseo/en.json": [2340, 24],
        "./map_newseo/es.json": [2341, 25],
        "./map_newseo/et.json": [2342, 26],
        "./map_newseo/fi.json": [2343, 27],
        "./map_newseo/fr.json": [2344, 28],
        "./map_newseo/hr.json": [2345, 29],
        "./map_newseo/hu.json": [2346, 30],
        "./map_newseo/id.json": [2347, 31],
        "./map_newseo/it.json": [2348, 32],
        "./map_newseo/ja.json": [2349, 33],
        "./map_newseo/ka.json": [2350, 34],
        "./map_newseo/km.json": [2351, 35],
        "./map_newseo/ko.json": [2352, 36],
        "./map_newseo/lt.json": [2353, 37],
        "./map_newseo/lv.json": [2354, 38],
        "./map_newseo/mk.json": [2355, 39],
        "./map_newseo/mm.json": [2356, 40],
        "./map_newseo/nl.json": [2357, 41],
        "./map_newseo/nn.json": [2358, 42],
        "./map_newseo/pl.json": [2359, 43],
        "./map_newseo/pt.json": [2360, 44],
        "./map_newseo/ro.json": [2361, 45],
        "./map_newseo/ru.json": [2362, 46],
        "./map_newseo/sk.json": [2363, 47],
        "./map_newseo/sl.json": [2364, 48],
        "./map_newseo/sqi.json": [2365, 49],
        "./map_newseo/sr.json": [2366, 50],
        "./map_newseo/srl.json": [2367, 90],
        "./map_newseo/sv.json": [2368, 51],
        "./map_newseo/th.json": [2369, 52],
        "./map_newseo/tr.json": [2370, 53],
        "./map_newseo/ukr.json": [2371, 54],
        "./map_newseo/vi.json": [2372, 55],
        "./map_newseo/zht.json": [2373, 56],
        "./map_snooker/aa.json": [2374, 15],
        "./map_snooker/aze.json": [2375, 16],
        "./map_snooker/bg.json": [2376, 17],
        "./map_snooker/br.json": [2377, 18],
        "./map_snooker/bs.json": [2378, 19],
        "./map_snooker/ch.json": [2379, 91],
        "./map_snooker/cs.json": [2380, 20],
        "./map_snooker/da.json": [2381, 21],
        "./map_snooker/de.json": [2382, 22],
        "./map_snooker/el.json": [2383, 23],
        "./map_snooker/en.json": [2384, 24],
        "./map_snooker/es.json": [2385, 25],
        "./map_snooker/et.json": [2386, 26],
        "./map_snooker/fi.json": [2387, 27],
        "./map_snooker/fr.json": [2388, 28],
        "./map_snooker/hr.json": [2389, 29],
        "./map_snooker/hu.json": [2390, 30],
        "./map_snooker/id.json": [2391, 31],
        "./map_snooker/it.json": [2392, 32],
        "./map_snooker/ja.json": [2393, 33],
        "./map_snooker/ka.json": [2394, 34],
        "./map_snooker/km.json": [2395, 35],
        "./map_snooker/ko.json": [2396, 36],
        "./map_snooker/lt.json": [2397, 37],
        "./map_snooker/lv.json": [2398, 38],
        "./map_snooker/mk.json": [2399, 39],
        "./map_snooker/mm.json": [2400, 40],
        "./map_snooker/nl.json": [2401, 41],
        "./map_snooker/nn.json": [2402, 42],
        "./map_snooker/pl.json": [2403, 43],
        "./map_snooker/pt.json": [2404, 44],
        "./map_snooker/ro.json": [2405, 45],
        "./map_snooker/ru.json": [2406, 46],
        "./map_snooker/sk.json": [2407, 47],
        "./map_snooker/sl.json": [2408, 48],
        "./map_snooker/sqi.json": [2409, 49],
        "./map_snooker/sr.json": [2410, 50],
        "./map_snooker/srl.json": [2411, 92],
        "./map_snooker/sv.json": [2412, 51],
        "./map_snooker/th.json": [2413, 52],
        "./map_snooker/tr.json": [2414, 53],
        "./map_snooker/ukr.json": [2415, 54],
        "./map_snooker/vi.json": [2416, 55],
        "./map_snooker/zht.json": [2417, 56],
        "./map_tabletennis/aa.json": [2418, 15],
        "./map_tabletennis/aze.json": [2419, 16],
        "./map_tabletennis/bg.json": [2420, 17],
        "./map_tabletennis/br.json": [2421, 18],
        "./map_tabletennis/bs.json": [2422, 19],
        "./map_tabletennis/ch.json": [2423, 93],
        "./map_tabletennis/cs.json": [2424, 20],
        "./map_tabletennis/da.json": [2425, 21],
        "./map_tabletennis/de.json": [2426, 22],
        "./map_tabletennis/el.json": [2427, 23],
        "./map_tabletennis/en.json": [2428, 24],
        "./map_tabletennis/es.json": [2429, 25],
        "./map_tabletennis/et.json": [2430, 26],
        "./map_tabletennis/fi.json": [2431, 27],
        "./map_tabletennis/fr.json": [2432, 28],
        "./map_tabletennis/hr.json": [2433, 29],
        "./map_tabletennis/hu.json": [2434, 30],
        "./map_tabletennis/id.json": [2435, 31],
        "./map_tabletennis/it.json": [2436, 32],
        "./map_tabletennis/ja.json": [2437, 33],
        "./map_tabletennis/ka.json": [2438, 34],
        "./map_tabletennis/km.json": [2439, 35],
        "./map_tabletennis/ko.json": [2440, 36],
        "./map_tabletennis/lt.json": [2441, 37],
        "./map_tabletennis/lv.json": [2442, 38],
        "./map_tabletennis/mk.json": [2443, 39],
        "./map_tabletennis/mm.json": [2444, 40],
        "./map_tabletennis/nl.json": [2445, 41],
        "./map_tabletennis/nn.json": [2446, 42],
        "./map_tabletennis/pl.json": [2447, 43],
        "./map_tabletennis/pt.json": [2448, 44],
        "./map_tabletennis/ro.json": [2449, 45],
        "./map_tabletennis/ru.json": [2450, 46],
        "./map_tabletennis/sk.json": [2451, 47],
        "./map_tabletennis/sl.json": [2452, 48],
        "./map_tabletennis/sqi.json": [2453, 49],
        "./map_tabletennis/sr.json": [2454, 50],
        "./map_tabletennis/srl.json": [2455, 94],
        "./map_tabletennis/sv.json": [2456, 51],
        "./map_tabletennis/th.json": [2457, 52],
        "./map_tabletennis/tr.json": [2458, 53],
        "./map_tabletennis/ukr.json": [2459, 54],
        "./map_tabletennis/vi.json": [2460, 55],
        "./map_tabletennis/zht.json": [2461, 56],
        "./map_tennis/aa.json": [2462, 15],
        "./map_tennis/aze.json": [2463, 16],
        "./map_tennis/bg.json": [2464, 17],
        "./map_tennis/br.json": [2465, 18],
        "./map_tennis/bs.json": [2466, 19],
        "./map_tennis/ch.json": [2467, 95],
        "./map_tennis/cs.json": [2468, 20],
        "./map_tennis/da.json": [2469, 21],
        "./map_tennis/de.json": [2470, 22],
        "./map_tennis/el.json": [2471, 23],
        "./map_tennis/en.json": [2472, 24],
        "./map_tennis/es.json": [2473, 25],
        "./map_tennis/et.json": [2474, 26],
        "./map_tennis/fi.json": [2475, 27],
        "./map_tennis/fr.json": [2476, 28],
        "./map_tennis/hr.json": [2477, 29],
        "./map_tennis/hu.json": [2478, 30],
        "./map_tennis/id.json": [2479, 31],
        "./map_tennis/it.json": [2480, 32],
        "./map_tennis/ja.json": [2481, 33],
        "./map_tennis/ka.json": [2482, 34],
        "./map_tennis/km.json": [2483, 35],
        "./map_tennis/ko.json": [2484, 36],
        "./map_tennis/lt.json": [2485, 37],
        "./map_tennis/lv.json": [2486, 38],
        "./map_tennis/mk.json": [2487, 39],
        "./map_tennis/mm.json": [2488, 40],
        "./map_tennis/nl.json": [2489, 41],
        "./map_tennis/nn.json": [2490, 42],
        "./map_tennis/pl.json": [2491, 43],
        "./map_tennis/pt.json": [2492, 44],
        "./map_tennis/ro.json": [2493, 45],
        "./map_tennis/ru.json": [2494, 46],
        "./map_tennis/sk.json": [2495, 47],
        "./map_tennis/sl.json": [2496, 48],
        "./map_tennis/sqi.json": [2497, 49],
        "./map_tennis/sr.json": [2498, 50],
        "./map_tennis/srl.json": [2499, 96],
        "./map_tennis/sv.json": [2500, 51],
        "./map_tennis/th.json": [2501, 52],
        "./map_tennis/tr.json": [2502, 53],
        "./map_tennis/ukr.json": [2503, 54],
        "./map_tennis/vi.json": [2504, 55],
        "./map_tennis/zht.json": [2505, 56],
        "./map_volleyball/aa.json": [2506, 15],
        "./map_volleyball/aze.json": [2507, 16],
        "./map_volleyball/bg.json": [2508, 17],
        "./map_volleyball/br.json": [2509, 18],
        "./map_volleyball/bs.json": [2510, 19],
        "./map_volleyball/ch.json": [2511, 97],
        "./map_volleyball/cs.json": [2512, 20],
        "./map_volleyball/da.json": [2513, 21],
        "./map_volleyball/de.json": [2514, 22],
        "./map_volleyball/el.json": [2515, 23],
        "./map_volleyball/en.json": [2516, 24],
        "./map_volleyball/es.json": [2517, 25],
        "./map_volleyball/et.json": [2518, 26],
        "./map_volleyball/fi.json": [2519, 27],
        "./map_volleyball/fr.json": [2520, 28],
        "./map_volleyball/hr.json": [2521, 29],
        "./map_volleyball/hu.json": [2522, 30],
        "./map_volleyball/id.json": [2523, 31],
        "./map_volleyball/it.json": [2524, 32],
        "./map_volleyball/ja.json": [2525, 33],
        "./map_volleyball/ka.json": [2526, 34],
        "./map_volleyball/km.json": [2527, 35],
        "./map_volleyball/ko.json": [2528, 36],
        "./map_volleyball/lt.json": [2529, 37],
        "./map_volleyball/lv.json": [2530, 38],
        "./map_volleyball/mk.json": [2531, 39],
        "./map_volleyball/mm.json": [2532, 40],
        "./map_volleyball/nl.json": [2533, 41],
        "./map_volleyball/nn.json": [2534, 42],
        "./map_volleyball/pl.json": [2535, 43],
        "./map_volleyball/pt.json": [2536, 44],
        "./map_volleyball/ro.json": [2537, 45],
        "./map_volleyball/ru.json": [2538, 46],
        "./map_volleyball/sk.json": [2539, 47],
        "./map_volleyball/sl.json": [2540, 48],
        "./map_volleyball/sqi.json": [2541, 49],
        "./map_volleyball/sr.json": [2542, 50],
        "./map_volleyball/srl.json": [2543, 98],
        "./map_volleyball/sv.json": [2544, 51],
        "./map_volleyball/th.json": [2545, 52],
        "./map_volleyball/tr.json": [2546, 53],
        "./map_volleyball/ukr.json": [2547, 54],
        "./map_volleyball/vi.json": [2548, 55],
        "./map_volleyball/zht.json": [2549, 56],
        "./map_waterpolo/aa.json": [2550, 15],
        "./map_waterpolo/aze.json": [2551, 16],
        "./map_waterpolo/bg.json": [2552, 17],
        "./map_waterpolo/br.json": [2553, 18],
        "./map_waterpolo/bs.json": [2554, 19],
        "./map_waterpolo/ch.json": [2555, 99],
        "./map_waterpolo/cs.json": [2556, 20],
        "./map_waterpolo/da.json": [2557, 21],
        "./map_waterpolo/de.json": [2558, 22],
        "./map_waterpolo/el.json": [2559, 23],
        "./map_waterpolo/en.json": [2560, 24],
        "./map_waterpolo/es.json": [2561, 25],
        "./map_waterpolo/et.json": [2562, 26],
        "./map_waterpolo/fi.json": [2563, 27],
        "./map_waterpolo/fr.json": [2564, 28],
        "./map_waterpolo/hr.json": [2565, 29],
        "./map_waterpolo/hu.json": [2566, 30],
        "./map_waterpolo/id.json": [2567, 31],
        "./map_waterpolo/it.json": [2568, 32],
        "./map_waterpolo/ja.json": [2569, 33],
        "./map_waterpolo/ka.json": [2570, 34],
        "./map_waterpolo/km.json": [2571, 35],
        "./map_waterpolo/ko.json": [2572, 36],
        "./map_waterpolo/lt.json": [2573, 37],
        "./map_waterpolo/lv.json": [2574, 38],
        "./map_waterpolo/mk.json": [2575, 39],
        "./map_waterpolo/mm.json": [2576, 40],
        "./map_waterpolo/nl.json": [2577, 41],
        "./map_waterpolo/nn.json": [2578, 42],
        "./map_waterpolo/pl.json": [2579, 43],
        "./map_waterpolo/pt.json": [2580, 44],
        "./map_waterpolo/ro.json": [2581, 45],
        "./map_waterpolo/ru.json": [2582, 46],
        "./map_waterpolo/sk.json": [2583, 47],
        "./map_waterpolo/sl.json": [2584, 48],
        "./map_waterpolo/sqi.json": [2585, 49],
        "./map_waterpolo/sr.json": [2586, 50],
        "./map_waterpolo/srl.json": [2587, 100],
        "./map_waterpolo/sv.json": [2588, 51],
        "./map_waterpolo/th.json": [2589, 52],
        "./map_waterpolo/tr.json": [2590, 53],
        "./map_waterpolo/ukr.json": [2591, 54],
        "./map_waterpolo/vi.json": [2592, 55],
        "./map_waterpolo/zht.json": [2593, 56],
      };
      function o(e) {
        if (!n.o(map, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = map[e],
          o = t[0];
        return n.e(t[1]).then(function () {
          return n.t(o, 3);
        });
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.id = 1163),
        (e.exports = o);
    },
    function (e, t, n) {
      n(115),
        n(26),
        (Date.prototype.format =
          Date.prototype.format ||
          function (e) {
            var t = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              S: this.getMilliseconds(),
            };
            for (var n in (/(y+)/.test(e) &&
              (e = e.replace(
                RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length)
              )),
            t))
              if (t.hasOwnProperty(n)) {
                var o = t[n];
                new RegExp("(" + n + ")").test(e) &&
                  (e = e.replace(
                    RegExp.$1,
                    1 == RegExp.$1.length
                      ? o
                      : ("00" + o).substr(("" + o).length)
                  ));
              }
            return e;
          });
    },
    function (e, t, n) {},
    ,
    function (e, t, n) {
      var map = {
        "./404.png": 391,
        "./Trophy1.png": 1168,
        "./Trophy2.png": 1169,
        "./Trophy3.png": 1170,
        "./apple.png": 1171,
        "./banner_bet365.png": 1172,
        "./base/default/default-esports-hero.png": 465,
        "./base/default/default-match.png": 177,
        "./base/default/default-nation.png": 176,
        "./base/default/default-player.png": 125,
        "./base/default/default-team.png": 110,
        "./base/default/empty-avatar.png": 1173,
        "./base/empty-team.png": 1174,
        "./base/login/avatar.png": 1175,
        "./bet365@2x.png": 1176,
        "./bk_detail-bg.png": 1177,
        "./chat_emoji/100.png": 471,
        "./chat_emoji/100percent.png": 472,
        "./chat_emoji/50percent.png": 473,
        "./chat_emoji/555.png": 474,
        "./chat_emoji/5percent.png": 475,
        "./chat_emoji/AD51.png": 1178,
        "./chat_emoji/AE75.png": 1179,
        "./chat_emoji/AF199.png": 1180,
        "./chat_emoji/AG152.png": 1181,
        "./chat_emoji/AI239.png": 1182,
        "./chat_emoji/AL38.png": 1183,
        "./chat_emoji/AM43.png": 1184,
        "./chat_emoji/AO107.png": 1185,
        "./chat_emoji/AR52.png": 1186,
        "./chat_emoji/AS224.png": 1187,
        "./chat_emoji/AT14.png": 1188,
        "./chat_emoji/AU72.png": 1189,
        "./chat_emoji/AW157.png": 1190,
        "./chat_emoji/AZ49.png": 1191,
        "./chat_emoji/Allin.png": 476,
        "./chat_emoji/BA40.png": 1192,
        "./chat_emoji/BB207.png": 1193,
        "./chat_emoji/BD176.png": 1194,
        "./chat_emoji/BE9.png": 1195,
        "./chat_emoji/BF179.png": 1196,
        "./chat_emoji/BG33.png": 1197,
        "./chat_emoji/BH78.png": 1198,
        "./chat_emoji/BI175.png": 1199,
        "./chat_emoji/BJ167.png": 1200,
        "./chat_emoji/BM215.png": 1201,
        "./chat_emoji/BN227.png": 1202,
        "./chat_emoji/BO63.png": 1203,
        "./chat_emoji/BR53.png": 1204,
        "./chat_emoji/BS240.png": 1205,
        "./chat_emoji/BT144.png": 1206,
        "./chat_emoji/BW156.png": 1207,
        "./chat_emoji/BY27.png": 1208,
        "./chat_emoji/BZ209.png": 1209,
        "./chat_emoji/CA65.png": 1210,
        "./chat_emoji/CD178.png": 1211,
        "./chat_emoji/CF186.png": 1212,
        "./chat_emoji/CG183.png": 1213,
        "./chat_emoji/CH15.png": 1214,
        "./chat_emoji/CI145.png": 1215,
        "./chat_emoji/CK223.png": 1216,
        "./chat_emoji/CL55.png": 1217,
        "./chat_emoji/CM141.png": 1218,
        "./chat_emoji/CN69.png": 1219,
        "./chat_emoji/CO60.png": 1220,
        "./chat_emoji/CR66.png": 1221,
        "./chat_emoji/CU151.png": 1222,
        "./chat_emoji/CURACAO182.png": 1223,
        "./chat_emoji/CV181.png": 1224,
        "./chat_emoji/CY35.png": 1225,
        "./chat_emoji/CZ21.png": 1226,
        "./chat_emoji/DE4.png": 1227,
        "./chat_emoji/DJ230.png": 1228,
        "./chat_emoji/DK13.png": 1229,
        "./chat_emoji/DM217.png": 1230,
        "./chat_emoji/DO203.png": 1231,
        "./chat_emoji/DZ96.png": 1232,
        "./chat_emoji/EC61.png": 1233,
        "./chat_emoji/EE41.png": 1234,
        "./chat_emoji/EG97.png": 1235,
        "./chat_emoji/ER234.png": 1236,
        "./chat_emoji/ES3.png": 1237,
        "./chat_emoji/ET142.png": 1238,
        "./chat_emoji/FI11.png": 1239,
        "./chat_emoji/FJ149.png": 1240,
        "./chat_emoji/FO47.png": 1241,
        "./chat_emoji/FR5.png": 1242,
        "./chat_emoji/GA174.png": 1243,
        "./chat_emoji/GB1.png": 1244,
        "./chat_emoji/GD165.png": 1245,
        "./chat_emoji/GE48.png": 1246,
        "./chat_emoji/GH108.png": 1247,
        "./chat_emoji/GI177.png": 1248,
        "./chat_emoji/GM168.png": 1249,
        "./chat_emoji/GN180.png": 1250,
        "./chat_emoji/GQ196.png": 1251,
        "./chat_emoji/GR22.png": 1252,
        "./chat_emoji/GT67.png": 1253,
        "./chat_emoji/GU226.png": 1254,
        "./chat_emoji/GW189.png": 1255,
        "./chat_emoji/GY159.png": 1256,
        "./chat_emoji/God.png": 477,
        "./chat_emoji/HN64.png": 1257,
        "./chat_emoji/HR32.png": 1258,
        "./chat_emoji/HT172.png": 1259,
        "./chat_emoji/HU30.png": 1260,
        "./chat_emoji/ID90.png": 1261,
        "./chat_emoji/IE16.png": 1262,
        "./chat_emoji/IE17.png": 1263,
        "./chat_emoji/IL37.png": 1264,
        "./chat_emoji/IN88.png": 1265,
        "./chat_emoji/IQ87.png": 1266,
        "./chat_emoji/IR74.png": 1267,
        "./chat_emoji/IS25.png": 1268,
        "./chat_emoji/IT2.png": 1269,
        "./chat_emoji/JM138.png": 1270,
        "./chat_emoji/JO81.png": 1271,
        "./chat_emoji/JP70.png": 1272,
        "./chat_emoji/KE140.png": 1273,
        "./chat_emoji/KG171.png": 1274,
        "./chat_emoji/KH214.png": 1275,
        "./chat_emoji/KM198.png": 1276,
        "./chat_emoji/KN161.png": 1277,
        "./chat_emoji/KO.png": 478,
        "./chat_emoji/KOSOVO133.png": 1278,
        "./chat_emoji/KP190.png": 1279,
        "./chat_emoji/KR71.png": 1280,
        "./chat_emoji/KW83.png": 1281,
        "./chat_emoji/KY236.png": 1282,
        "./chat_emoji/KZ39.png": 1283,
        "./chat_emoji/LA169.png": 1284,
        "./chat_emoji/LB86.png": 1285,
        "./chat_emoji/LC213.png": 1286,
        "./chat_emoji/LI220.png": 1287,
        "./chat_emoji/LK148.png": 1288,
        "./chat_emoji/LR202.png": 1289,
        "./chat_emoji/LS170.png": 1290,
        "./chat_emoji/LT28.png": 1291,
        "./chat_emoji/LU46.png": 1292,
        "./chat_emoji/LV26.png": 1293,
        "./chat_emoji/LY98.png": 1294,
        "./chat_emoji/MA94.png": 1295,
        "./chat_emoji/MD42.png": 1296,
        "./chat_emoji/ME44.png": 1297,
        "./chat_emoji/MG185.png": 1298,
        "./chat_emoji/MK50.png": 1299,
        "./chat_emoji/ML146.png": 1300,
        "./chat_emoji/MM131.png": 1301,
        "./chat_emoji/MN160.png": 1302,
        "./chat_emoji/MR154.png": 1303,
        "./chat_emoji/MS231.png": 1304,
        "./chat_emoji/MT45.png": 1305,
        "./chat_emoji/MU205.png": 1306,
        "./chat_emoji/MV200.png": 1307,
        "./chat_emoji/MW164.png": 1308,
        "./chat_emoji/MX56.png": 1309,
        "./chat_emoji/MY77.png": 1310,
        "./chat_emoji/MZ188.png": 1311,
        "./chat_emoji/NA155.png": 1312,
        "./chat_emoji/NC204.png": 1313,
        "./chat_emoji/NE184.png": 1314,
        "./chat_emoji/NG93.png": 1315,
        "./chat_emoji/NI166.png": 1316,
        "./chat_emoji/NL8.png": 1317,
        "./chat_emoji/NO12.png": 1318,
        "./chat_emoji/NP208.png": 1319,
        "./chat_emoji/NZ91.png": 1320,
        "./chat_emoji/OM84.png": 1321,
        "./chat_emoji/PA162.png": 1322,
        "./chat_emoji/PE58.png": 1323,
        "./chat_emoji/PG212.png": 1324,
        "./chat_emoji/PH163.png": 1325,
        "./chat_emoji/PK136.png": 1326,
        "./chat_emoji/PL19.png": 1327,
        "./chat_emoji/PR219.png": 1328,
        "./chat_emoji/PS135.png": 1329,
        "./chat_emoji/PT6.png": 1330,
        "./chat_emoji/PY57.png": 1331,
        "./chat_emoji/Palming.png": 479,
        "./chat_emoji/QA79.png": 1332,
        "./chat_emoji/RO23.png": 1333,
        "./chat_emoji/RS36.png": 1334,
        "./chat_emoji/RU18.png": 1335,
        "./chat_emoji/RW143.png": 1336,
        "./chat_emoji/SA73.png": 1337,
        "./chat_emoji/SB194.png": 1338,
        "./chat_emoji/SC225.png": 1339,
        "./chat_emoji/SCOTLAND7.png": 1340,
        "./chat_emoji/SD128.png": 1341,
        "./chat_emoji/SE10.png": 1342,
        "./chat_emoji/SG76.png": 1343,
        "./chat_emoji/SI34.png": 1344,
        "./chat_emoji/SK24.png": 1345,
        "./chat_emoji/SL187.png": 1346,
        "./chat_emoji/SM121.png": 1347,
        "./chat_emoji/SN137.png": 1348,
        "./chat_emoji/SO235.png": 1349,
        "./chat_emoji/SR201.png": 1350,
        "./chat_emoji/SSD211.png": 1351,
        "./chat_emoji/ST222.png": 1352,
        "./chat_emoji/SV68.png": 1353,
        "./chat_emoji/SY134.png": 1354,
        "./chat_emoji/SZ197.png": 1355,
        "./chat_emoji/TAHITI206.png": 1356,
        "./chat_emoji/TC238.png": 1357,
        "./chat_emoji/TD216.png": 1358,
        "./chat_emoji/TG158.png": 1359,
        "./chat_emoji/TH82.png": 1360,
        "./chat_emoji/TJ153.png": 1361,
        "./chat_emoji/TL228.png": 1362,
        "./chat_emoji/TM193.png": 1363,
        "./chat_emoji/TN95.png": 1364,
        "./chat_emoji/TO233.png": 1365,
        "./chat_emoji/TR31.png": 1366,
        "./chat_emoji/TT150.png": 1367,
        "./chat_emoji/TZ192.png": 1368,
        "./chat_emoji/UA20.png": 1369,
        "./chat_emoji/UG173.png": 1370,
        "./chat_emoji/US54.png": 1371,
        "./chat_emoji/UY59.png": 1372,
        "./chat_emoji/UZ123.png": 1373,
        "./chat_emoji/VC218.png": 1374,
        "./chat_emoji/VE62.png": 1375,
        "./chat_emoji/VG237.png": 1376,
        "./chat_emoji/VI232.png": 1377,
        "./chat_emoji/VN89.png": 1378,
        "./chat_emoji/VU210.png": 1379,
        "./chat_emoji/WALES29.png": 1380,
        "./chat_emoji/WS229.png": 1381,
        "./chat_emoji/YE80.png": 1382,
        "./chat_emoji/ZA92.png": 1383,
        "./chat_emoji/ZM147.png": 1384,
        "./chat_emoji/ZW139.png": 1385,
        "./chat_emoji/angry.png": 480,
        "./chat_emoji/applaud.png": 481,
        "./chat_emoji/awkward.png": 482,
        "./chat_emoji/ballface.png": 483,
        "./chat_emoji/basketball.png": 484,
        "./chat_emoji/blackface.png": 485,
        "./chat_emoji/bye.png": 486,
        "./chat_emoji/cheering.png": 487,
        "./chat_emoji/comeon.png": 488,
        "./chat_emoji/corner.png": 489,
        "./chat_emoji/coverface.png": 490,
        "./chat_emoji/crydog.png": 491,
        "./chat_emoji/dog.png": 492,
        "./chat_emoji/football.png": 493,
        "./chat_emoji/girl.png": 494,
        "./chat_emoji/glasses.png": 495,
        "./chat_emoji/goal.png": 1386,
        "./chat_emoji/good.png": 496,
        "./chat_emoji/grimace.png": 497,
        "./chat_emoji/injured.png": 498,
        "./chat_emoji/lookdown.png": 499,
        "./chat_emoji/mask.png": 500,
        "./chat_emoji/maskcomeon.png": 501,
        "./chat_emoji/maskpray.png": 502,
        "./chat_emoji/money.png": 503,
        "./chat_emoji/ngu.png": 504,
        "./chat_emoji/nocorner.png": 505,
        "./chat_emoji/nogoal.png": 506,
        "./chat_emoji/nosebleed.png": 507,
        "./chat_emoji/notalk.png": 508,
        "./chat_emoji/phone.png": 509,
        "./chat_emoji/plane.png": 510,
        "./chat_emoji/pray.png": 511,
        "./chat_emoji/praygoal.png": 512,
        "./chat_emoji/qian.png": 1387,
        "./chat_emoji/redcard.png": 513,
        "./chat_emoji/shake.png": 514,
        "./chat_emoji/shydog.png": 515,
        "./chat_emoji/slap.png": 516,
        "./chat_emoji/vomiting.png": 517,
        "./chat_emoji/wamoney.png": 518,
        "./chat_emoji/waqian.png": 1388,
        "./chat_emoji/whistle.png": 519,
        "./chat_emoji/yeah.png": 520,
        "./chat_emoji/yellowcard.png": 521,
        "./chatclose.png": 79,
        "./close-btn.png": 1389,
        "./down.png": 522,
        "./download-bg1.png": 1390,
        "./download-bg2.png": 523,
        "./download-bg3.png": 524,
        "./download-bg4.png": 525,
        "./download-bg5.png": 526,
        "./download-bg6.png": 527,
        "./download-bg7.png": 528,
        "./downloadImg/01.png": 345,
        "./downloadImg/02.png": 346,
        "./downloadImg/03.png": 347,
        "./downloadImg/04.png": 348,
        "./downloadImg/05.png": 349,
        "./downloadImg/06.png": 350,
        "./downloadImg/Country-Brazil.png": 351,
        "./downloadImg/Country-India.png": 352,
        "./downloadImg/Country-Indonesia.png": 353,
        "./downloadImg/Country-Myanmar.png": 354,
        "./downloadImg/Country-Thailand.png": 355,
        "./downloadImg/Country-Turkey.png": 356,
        "./downloadImg/Country-Vietnam.png": 357,
        "./downloadImg/ads-bg1.png": 358,
        "./downloadImg/ads-bg2.png": 359,
        "./downloadImg/ads-bg3.png": 360,
        "./downloadImg/ads-bg4.png": 361,
        "./downloadImg/ads-bg5.png": 362,
        "./downloadImg/ads-bg6.png": 879,
        "./downloadImg/ads-bg7.png": 363,
        "./downloadImg/del.png": 364,
        "./downloadImg/error.png": 365,
        "./downloadImg/left.png": 880,
        "./downloadImg/left2.png": 881,
        "./downloadImg/right.png": 366,
        "./downloadImg/right2.png": 882,
        "./downloadImg/shadow.png": 367,
        "./downloadImg/step1.png": 368,
        "./downloadImg/step2.png": 369,
        "./downloadImg/step3.png": 370,
        "./downloadImg/step4.png": 371,
        "./downloadImg/success.png": 372,
        "./facebook.png": 455,
        "./football-type-icon/type1.png": 869,
        "./football-type-icon/type15.png": 870,
        "./football-type-icon/type17.png": 871,
        "./football-type-icon/type3.png": 872,
        "./football-type-icon/type4.png": 873,
        "./football-type-icon/type8.png": 874,
        "./football-type-icon/type9.png": 875,
        "./football-type-icon/受伤.png": 1391,
        "./football.png": 1392,
        "./football/home/banner.png": 1393,
        "./goal.png": 1394,
        "./google.png": 1395,
        "./huawei.png": 1396,
        "./index-bottom-en.png": 1397,
        "./index-bottom-zh.png": 1398,
        "./instagram.png": 456,
        "./left-arrow.png": 148,
        "./lineup-bg.png": 1399,
        "./lineups-canvas/playground-one.png": 876,
        "./lineups-canvas/playground-three.png": 877,
        "./lineups-canvas/playground-tow.png": 883,
        "./logo-48.png": 1400,
        "./logo-old.png": 1401,
        "./logo.png": 116,
        "./logo2.png": 1402,
        "./look.png": 1403,
        "./look2.png": 1404,
        "./newPageImg/BWF.png": 326,
        "./newPageImg/ITTF.png": 327,
        "./newPageImg/Polygon.png": 328,
        "./newPageImg/WPBSA.png": 329,
        "./newPageImg/appIcon.png": 325,
        "./newPageImg/banner.png": 231,
        "./newPageImg/banner2.png": 330,
        "./newPageImg/bottomTriangle.png": 331,
        "./newPageImg/expression.png": 332,
        "./newPageImg/hot.png": 51,
        "./newPageImg/keyboard.png": 333,
        "./newPageImg/leaguesDefault.png": 112,
        "./newPageImg/noData.png": 230,
        "./newPageImg/noTextSend.png": 334,
        "./newPageImg/playerDefault.png": 29,
        "./newPageImg/send.png": 335,
        "./newPageImg/sidebar.png": 336,
        "./newPageImg/teamsDefault.png": 22,
        "./newPageImg/time.png": 337,
        "./newPageImg/topTriangle.png": 338,
        "./nodata-1.png": 92,
        "./nodata.png": 149,
        "./overview-en.png": 1405,
        "./overview-zh.png": 1406,
        "./player-overview-bg.png": 1407,
        "./player/bg780.png": 1408,
        "./rank_bottom.png": 529,
        "./rank_default.png": 530,
        "./rank_top.png": 531,
        "./show.png": 272,
        "./sliderButton.png": 1409,
        "./theme_az.png": 532,
        "./theme_mg.png": 533,
        "./top-bg.png": 1410,
        "./twitter.png": 454,
        "./unfold.png": 273,
        "./up.png": 534,
        "./youtubeBack.png": 1411,
        "./youtube_apple.png": 535,
        "./youtube_google.png": 536,
        "./youtube_logo.png": 537,
      };
      function o(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(map, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return map[e];
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.resolve = r),
        (e.exports = o),
        (o.id = 1167);
    },
    function (e, t, n) {
      e.exports = n.p + "img/Trophy1.e7736eb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Trophy2.7263c7c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/Trophy3.7fd564a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/apple.d8bf86b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/banner_bet365.b35d221.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/empty-avatar.9f9882f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/empty-team.a6be429.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/avatar.bf10c1c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/bet365@2x.841ad6d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/bk_detail-bg.8944180.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AD51.1978a30.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AE75.7101fa4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AF199.8e5316d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AG152.2688ceb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AI239.fc0e9b0.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AL38.ccdddcb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AM43.d054747.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AO107.2fb3258.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AR52.88ab07a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AS224.e659ebe.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AT14.431ac52.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AU72.12fe31e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AW157.326d9ab.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/AZ49.f978b4f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BA40.9d15e05.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BB207.238e328.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BD176.92f2cc3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BE9.724269b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BF179.93da553.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BG33.d547a4e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BH78.67b4168.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BI175.48e0819.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BJ167.3cde96a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BM215.b1f34c6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BN227.8403962.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BO63.b38987a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BR53.8805614.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BS240.72a2a70.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BT144.6d6d5d5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BW156.a2c234f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BY27.ef16b31.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/BZ209.4e36c90.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CA65.2928c4b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CD178.c2896f3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CF186.959e0cd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CG183.91715c3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CH15.5767819.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CI145.7509d8c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CK223.9616d21.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CL55.ad7c8d9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CM141.f876a5c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CN69.701afc7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CO60.bec2158.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CR66.fb9234e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CU151.9ffc444.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CURACAO182.ec2f9cc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CV181.20198fd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CY35.d38a12f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/CZ21.56e9077.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DE4.1e1387c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DJ230.2efc7bb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DK13.11c81f1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DM217.6c4b94e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DO203.c8b38d5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/DZ96.7e95b2d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/EC61.e9fb286.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/EE41.70cde4c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/EG97.342726f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ER234.a2f91ef.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ES3.e4525f9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ET142.5ccbfb7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/FI11.0f62816.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/FJ149.114bcb7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/FO47.49fe256.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/FR5.d68c765.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GA174.cb4d032.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GB1.ca15842.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GD165.fb9cff4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GE48.f78ed24.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GH108.06c7d0c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GI177.d0b9a41.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GM168.808c5c7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GN180.65c4532.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GQ196.ccea0ab.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GR22.7541370.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GT67.6004cf9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GU226.6636909.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GW189.7e0fb1f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/GY159.e4bae39.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/HN64.35a2524.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/HR32.566df5c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/HT172.b4e314d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/HU30.ba1ea1c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ID90.8e315f7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IE16.e7d267e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IE17.fa10560.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IL37.a417436.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IN88.50c3e99.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IQ87.2ea2188.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IR74.23bdd1c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IS25.e849fc5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/IT2.647d09a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/JM138.8b9a641.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/JO81.dc9e668.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/JP70.c27ad93.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KE140.4939926.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KG171.65e3159.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KH214.63f9ff7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KM198.4dd756a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KN161.7147e63.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KOSOVO133.e08cae1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KP190.cec22ae.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KR71.fab5ba4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KW83.33e7870.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KY236.4428e9a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/KZ39.734b898.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LA169.92a5060.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LB86.4d3de3d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LC213.f48b410.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LI220.5ee7950.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LK148.0c63ae5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LR202.87d7148.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LS170.7065db4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LT28.ead87bf.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LU46.abb43f5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LV26.1873dfc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/LY98.4fbf562.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MA94.631f06c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MD42.24fc29f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ME44.62886dd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MG185.8f0485a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MK50.098c1d5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ML146.86d8f43.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MM131.0117f4b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MN160.aed4e7e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MR154.406d56c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MS231.a746971.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MT45.1f9df72.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MU205.d132598.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MV200.cd790e2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MW164.5a10f39.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MX56.05a339d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MY77.c0997eb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/MZ188.38c54f0.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NA155.beaabf3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NC204.594f898.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NE184.06ccb98.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NG93.96a074c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NI166.c33f1b5.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NL8.381fb34.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NO12.a80c099.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NP208.229d08d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/NZ91.ac75b15.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/OM84.0111cd6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PA162.97316a2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PE58.fbe9c08.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PG212.773b044.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PH163.7fc90a3.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PK136.acfba5c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PL19.a4236cc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PR219.3c36e56.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PS135.74e2ca6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PT6.e3336b9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/PY57.07d7980.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/QA79.9ba346b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/RO23.1e25185.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/RS36.5b2d1e9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/RU18.3948a43.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/RW143.8979e26.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SA73.27c33f1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SB194.c56d9db.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SC225.3e077b8.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SCOTLAND7.342e36e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SD128.5ffcbd7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SE10.0a89a7a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SG76.0d99170.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SI34.428b465.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SK24.b5d7dd4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SL187.d5205ed.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SM121.1634c98.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SN137.0b24275.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SO235.ec41710.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SR201.e694203.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SSD211.aa5f525.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ST222.3c2ab06.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SV68.c01227f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SY134.2166b17.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/SZ197.c91fac2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TAHITI206.9b157dd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TC238.0e1e62c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TD216.34a624f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TG158.812352a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TH82.aee7bf2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TJ153.a71670d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TL228.77780b4.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TM193.459657b.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TN95.854cedb.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TO233.f9a9776.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TR31.f08e013.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TT150.a10164d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/TZ192.3b84d51.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/UA20.efd8181.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/UG173.19c7016.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/US54.e41ba9d.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/UY59.b6b5573.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/UZ123.44b9f86.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VC218.ee8ab54.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VE62.d016f95.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VG237.56a4100.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VI232.4428e9a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VN89.2f9477a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/VU210.cbfeee8.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/WALES29.b7cddcc.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/WS229.ddd4b8e.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/YE80.7ad6290.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ZA92.625271f.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ZM147.cc05bce.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/ZW139.ba04fc7.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/goal.d38c2fd.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/qian.5ae1616.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/waqian.7500778.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJ1BMVEUAAAC7u7u9vb28vLy7u7u8vLy7u7u6urq7u7vp6enj4+PFxcX5+fmG860yAAAACHRSTlMA9Rts5LaaTjZ2dQEAAACCSURBVBjTYwACJlNHkWAFIAPEzugAgjYIr7ADDMRBbOYOKDAAcipgnHagDgkYp1GBga2jewWIubqjI4FBo6NjJpDdOaOjo4nBAsSACDQzRHQAWWB+RyuDB1gNSKKjhQFs2JwZYONQOCjKUAxAMRrFUhTnoDgU2QtonkN4GzNAEEEFAF7jducPdUQlAAAAAElFTkSuQmCC";
    },
    function (e, t, n) {
      e.exports = n.p + "img/download-bg1.7d64b51.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/受伤.ff8cf87.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/football.3e0be3c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/banner.cad88c9.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/goal.6bb59c2.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/google.3153908.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/huawei.d41c985.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/index-bottom-en.fc3955a.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/index-bottom-zh.b1f680c.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/lineup-bg.0179317.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/logo-48.6824ea1.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/logo-old.3660096.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/logo2.b7defcd.png";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAe1BMVEUAAAD//////3+ZzDOV1CqPzyCQyCGIwyKHwx6LxyCJxCCIxiCIwx6JxR6Iwx6JxR+Iwx+Iwx6JxB6JxR6Hwx6IxB+Iwx+Hwx6Hwx6IxB6IxB6HxB6IxB2Hwx2IxB6Iwx6IxB6IxB2Hwx2Hwx2Iwx6IxB6Iwx2IxB2Hwx11/DG3AAAAKHRSTlMAAQIFDBAXHjM3OEdNVF5qa29wf4CFlpmio7C1tre6vM7Q6vP4+vz+FIpJhQAAAWFJREFUOMuNlNmSgkAMRcOiqIgrioKIoNLn/79wHkBII06Rpy76FFn63oio8KPkVlZVeUsiX8YjzF508crCEWRRtNfGtIdiMUCckwHe990q8Lxgtbu/AXNyrGJS4BnP+i+z+AmkqjT/AVzm9s/nF+DRUU4K9eG7zEMN6SfjCer1WL/rGk5tXwb241PZg2l6LODyY3RygUJEJISnrtnRfc+fEIpIBkfNnM+aiiET8V+8Z5oBTc3evHyJ4G4zNnWHSBLYDhiL2kEiOSyHjKaWkEsJgZ3LzhhAKRXGs+ux6/IMVQ/1dxblGaounb7R5wBKubWFb3SOhtqIiKzgJgnsRETcq+7JOcPV7UbQDdO96hk654Zphtk/i2sp2nHVs0gGsfyM5oG/pGILvZXKJNH9J99DJ99JRmgsNfKvvbbUJHN+bH7UNj8Obd4vjO0y8LxgObowpq2eiUusXYd5WVVlPliHf2orPIxWXVc8AAAAAElFTkSuQmCC";
    },
    function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAflBMVEUAAAD///+ZzDOV1CqPzyCQyCGIwyKHwx6LxyCJxCCIxiCIwx6JxR6Hwx6HxR2JxR+Iwx+IxR6Iwx6JxB6JxR6Hwx6IxB+Hwx6Hwx6IxB6HxB6IxB2Hwx2IxB6Iwx6Hwx6IxB6IxB2Hwx2Hwx2Iwx6IxB6Iwx2HxB2IxB2Hwx3s+TBuAAAAKXRSTlMAAQUMEBceMzc4R01UVWBqa21vcH+AhZmisLW2t7q8xM7Q6vP4+vz9/mOurmMAAAFiSURBVDjLjZTXtoIwEEWPRLBjF0RBwcb+/x+8D0EJiHcxL5TslalnJMfMPDrlRZGforlRt02TOx+7J9MOZJRVx2VZvWSjFjI4lMAjXU0Czwsmq/QBlIdBI5gjcNsP6z/D/Q04OqGZKxD7zcv9GLh+qMERntvvMLdPOL49HuA568p39oRDlVcJm+6qbKC0OWYQ/yidYsgkaQo3/xfk32AqKYGdftoeEsnceQx/Q8MHd6M5pPZ7Hbqn4do+U5grgqVleDlU+MJSK4h0hrEkLcChwhewkKQxnJVDIEnm4lDhC7gYSQogV0HpqUU5jLySooZqymUs9HZXUw3GujtVgddUg9EETopgpQbVYGwJ6mLWlMPYYrbaYi5NxrZFCezdcb+4TNXgr1ExpmNUeg3df+O7/YxvLyFYSXXctXEl1Uucb5nvXJnv2jKvF8ZyHHheMO5cGP1WT88lVq3Dc14U+bm1Dv8AxqU9Js9Mwu8AAAAASUVORK5CYII=";
    },
    function (e, t, n) {
      e.exports = n.p + "img/overview-en.cd9d970.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/overview-zh.cd761b6.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/player-overview-bg.3cb7b56.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/bg780.409f207.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/sliderButton.c935e19.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/top-bg.930a350.png";
    },
    function (e, t, n) {
      e.exports = n.p + "img/youtubeBack.98d8d48.png";
    },
    ,
    ,
    function (module, exports, __webpack_require__) {
      __webpack_require__(14),
        __webpack_require__(1415),
        __webpack_require__(150);
      var _typeof = __webpack_require__(390);
      __webpack_require__(23),
        __webpack_require__(115),
        __webpack_require__(27),
        __webpack_require__(26),
        __webpack_require__(24),
        __webpack_require__(54),
        __webpack_require__(55),
        __webpack_require__(6),
        (window.jQuery = $),
        (function (e) {
          e &&
            (e.extend(String.prototype, {
              _toBoolean: function () {
                return (
                  "false" !== this.toString() &&
                  "" !== this.toString() &&
                  "0" !== this.toString()
                );
              },
              _toNumber: function () {
                return isNaN(this) ? this.toString() : Number(this);
              },
              _toRealValue: function () {
                return "true" === this.toString() || "false" === this.toString()
                  ? this._toBoolean()
                  : this._toNumber();
              },
              trim: function () {
                return this.replace(/(^\s*)|(\s*$)/g, "");
              },
              ltrim: function () {
                return this.replace(/(^\s*)/g, "");
              },
              rtrim: function () {
                return this.replace(/(\s*$)/g, "");
              },
              trimAll: function () {
                return this.replace(/\s/g, "");
              },
              trimNoteChar: function () {
                return this.replace(
                  /^[^\{]*\{\s*\/\*!?|\*\/[;|\s]*\}$/g,
                  ""
                ).trim();
              },
              trimSpaceMany: function () {
                return this.replace(/\s{2,}/g, " ").trim();
              },
              left: function (e) {
                return this.substring(0, e);
              },
              right: function (e) {
                return this.length <= e
                  ? this.toString()
                  : this.substring(this.length - e, this.length);
              },
              reverse: function () {
                return this.split("").reverse().join("");
              },
              startWith: function (e, t) {
                return !(t
                  ? this.toLowerCase().indexOf(e.toLowerCase())
                  : this.indexOf(e));
              },
              endWith: function (e, t) {
                return t
                  ? new RegExp(e.toLowerCase() + "$").test(
                      this.toLowerCase().trim()
                    )
                  : new RegExp(e + "$").test(this.trim());
              },
              sliceInclude: function (e) {
                return this.indexOf(e) > -1;
              },
              sliceAfter: function (e) {
                return this.indexOf(e) >= 0
                  ? this.substring(this.indexOf(e) + e.length, this.length)
                  : "";
              },
              sliceBefore: function (e) {
                return this.indexOf(e) >= 0
                  ? this.substring(0, this.indexOf(e))
                  : "";
              },
              getByteLength: function () {
                return this.replace(/[^\x00-\xff]/gi, "xx").length;
              },
              subByte: function (e, s) {
                if (e < 0 || this.getByteLength() <= e) return this.toString();
                var t = this;
                return (
                  (t = t
                    .substr(0, e)
                    .replace(/([^\x00-\xff])/g, "$1 ")
                    .substr(0, e)
                    .replace(/[^\x00-\xff]$/, "")
                    .replace(/([^\x00-\xff]) /g, "$1")) + (s || "")
                );
              },
              encodeURI: function (e) {
                return ("uni" == (e || "utf") ? escape : encodeURIComponent)(
                  this
                );
              },
              decodeURI: function (e) {
                var dfn = "uni" == (e || "utf") ? unescape : decodeURIComponent;
                try {
                  for (var t = this.toString(), n = dfn(t); t != n; )
                    n = dfn((t = n));
                  return t;
                } catch (e) {
                  return this.toString();
                }
              },
              textToHtml: function () {
                return this.replace(/</gi, "&lt;")
                  .replace(/>/gi, "&gt;")
                  .replace(/\r\n/gi, "<br>")
                  .replace(/\n/gi, "<br>");
              },
              htmlToText: function () {
                return this.replace(/<br>/gi, "\r\n");
              },
              htmlEncode: function () {
                var text = this,
                  e = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" };
                for (var i in e) text = text.replace(new RegExp(i, "g"), e[i]);
                return text;
              },
              htmlDecode: function () {
                var text = this,
                  e = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"' };
                for (var i in e) text = text.replace(new RegExp(i, "g"), e[i]);
                return text;
              },
              stripHtml: function () {
                return this.replace(/(<\/?[^>\/]*)\/?>/gi, "");
              },
              stripScript: function () {
                return this.replace(/<script(.|\n)*\/script>\s*/gi, "").replace(
                  /on[a-z]*?\s*?=".*?"/gi,
                  ""
                );
              },
              replaceAll: function (e, t) {
                return this.replace(new RegExp(e, "gm"), t);
              },
              escapeReg: function () {
                return this.replace(
                  new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"),
                  "\\$1"
                );
              },
              addQueryValue: function (t, n) {
                var o = this.getPathName(),
                  param = this.getQueryJson(),
                  r = this.getQueryParams(t, n);
                for (var l in r) param[l] || (param[l] = r[l]);
                return o + "?" + e.param(param);
              },
              addReQueryValue: function (t, n) {
                var o = this.getPathName(),
                  param = this.getQueryJson(),
                  r = this.getQueryParams(t, n);
                for (var l in r) param[l] = r[l];
                return o + "?" + e.param(param);
              },
              editQueryValue: function (t, n) {
                var o = this.getPathName(),
                  param = this.getQueryJson(),
                  r = this.getQueryParams(t, n);
                for (var l in r) param[l] && (param[l] = r[l] || param[l]);
                return o + "?" + e.param(param);
              },
              refQueryValue: function (t, n) {
                var o = this.getPathName(),
                  param = this.getQueryJson(),
                  r = this.getQueryParams(t, n);
                for (var l in r) param[l] = r[l];
                return o + "?" + e.param(param);
              },
              removeQueryValue: function (t, n) {
                var o = this.getPathName(),
                  param = this.getQueryJson(),
                  r = {};
                for (var l in param)
                  if ("[object Array]" === Object.prototype.toString.apply(t)) {
                    var c = !1;
                    for (var i in t)
                      if (l == t[i]) {
                        c = !0;
                        break;
                      }
                    c || (r[l] = param[l]);
                  } else t != l && (r[l] = param[l]);
                null == n && (n = window),
                  n.history.pushState("", "", o + "?" + e.param(r));
              },
              getQueryValue: function (e) {
                var t = new RegExp(
                    "(^|&|\\?|#)" + e.escapeReg() + "=([^&]*)(&|$)",
                    ""
                  ),
                  n = this.match(t);
                return n ? n[2] : "";
              },
              getQueryJson: function () {
                if (this.indexOf("?") < 0) return {};
                var e = this.substr(this.indexOf("?") + 1);
                if (!e) return {};
                for (
                  var t,
                    n,
                    o,
                    param,
                    r = e.split("&"),
                    l = r.length,
                    c = {},
                    i = 0;
                  i < l;
                  i++
                )
                  (t = (param = r[i].split("="))[0]),
                    (n = param[1]),
                    void 0 === (o = c[t])
                      ? (c[t] = n || "")
                      : "[object Array]" == Object.prototype.toString.call(o)
                      ? o.push(n)
                      : (c[t] = [o, n]);
                return c;
              },
              getQueryParams: function (e, t) {
                var n = {};
                return "object" == _typeof(e) ? (n = e) : (n[e] = t), n;
              },
              getDomain: function () {
                return this.startWith("http://") ? this.split("/")[2] : "";
              },
              getPathName: function () {
                return -1 == this.lastIndexOf("?")
                  ? this.toString()
                  : this.substring(0, this.lastIndexOf("?"));
              },
              getFilePath: function () {
                return this.substring(0, this.lastIndexOf("/") + 1);
              },
              getFileName: function () {
                return this.substring(this.lastIndexOf("/") + 1);
              },
              getFileExt: function () {
                return this.substring(this.lastIndexOf(".") + 1);
              },
              parseDate: function () {
                return new Date().parse(this.toString());
              },
              parseJSON: function () {
                return new Function("return " + this.toString())();
              },
              parseAttrJSON: function () {
                for (
                  var e = {}, a = this.toString().split(";"), i = 0;
                  i < a.length;
                  i++
                )
                  if (!("" === a[i].trim() || a[i].indexOf(":") < 1)) {
                    var t = a[i].sliceBefore(":").trim(),
                      n = a[i].sliceAfter(":").trim();
                    "" !== t &&
                      "" !== n &&
                      (e[t.toCamelCase()] = n._toRealValue());
                  }
                return e;
              },
              _pad: function (e, t, n) {
                for (
                  var o = [n ? "" : this, n ? this : ""];
                  o[n].length < (e || 0) && (o[n] = o[1] + (t || " ") + o[0]);

                );
                return o[n];
              },
              padLeft: function (e, t) {
                return this.length >= e ? this.toString() : this._pad(e, t, 0);
              },
              padRight: function (e, t) {
                return this.length >= e ? this.toString() : this._pad(e, t, 1);
              },
              toHalfWidth: function () {
                return this.replace(/[\uFF01-\uFF5E]/g, function (e) {
                  return String.fromCharCode(e.charCodeAt(0) - 65248);
                }).replace(/\u3000/g, " ");
              },
              toCamelCase: function () {
                return this.indexOf("-") < 0 && this.indexOf("_") < 0
                  ? this.toString()
                  : this.replace(/[-_][^-_]/g, function (e) {
                      return e.charAt(1).toUpperCase();
                    });
              },
              format: function () {
                var t = this;
                if (arguments.length > 0) {
                  var n =
                    1 == arguments.length && e.isArray(arguments[0])
                      ? arguments[0]
                      : e.makeArray(arguments);
                  e.each(n, function (i, e) {
                    t = t.replace(new RegExp("\\{" + i + "\\}", "g"), e);
                  });
                }
                return t;
              },
              substitute: function (data) {
                return data && "object" == _typeof(data)
                  ? this.replace(/\{([^{}]+)\}/g, function (e, t) {
                      t = t.split(".");
                      for (
                        var n = data, o = t.length, i = 0;
                        i < o && (n = n[t[i]]);
                        i++
                      );
                      return void 0 !== n ? "" + n : "";
                    })
                  : this.toString();
              },
              toEAN13: function (pre) {
                for (
                  var e = 12 - pre.length,
                    t =
                      pre +
                      (this.length >= e ? this.left(e) : this.padLeft(e, "0")),
                    a = 0,
                    b = 0,
                    n = 0,
                    o = t.reverse(),
                    i = 0;
                  i < o.length;
                  i++
                )
                  i % 2
                    ? (b += parseInt(o.charAt(i), 10))
                    : (a += parseInt(o.charAt(i), 10));
                return (3 * a + b) % 10 && (n = 10 - ((3 * a + b) % 10)), t + n;
              },
              toMapObject: function (e) {
                e = e || "/";
                var s = this.split(e),
                  t = {};
                return (
                  (function e(a, b, n) {
                    n < b.length &&
                      (a[b[n]] || (a[b[n]] = {}),
                      (t = a[b[n]]),
                      e(a[b[n]], b, n + 1));
                  })(window, s, 1),
                  t
                );
              },
              base64encode: function () {
                var e = this;
                if (!e) return "";
                if (0 === (e += "").length) return e;
                e = escape(e);
                var i,
                  b,
                  map =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  t = [],
                  n = map[64],
                  o = e.length - (e.length % 3);
                for (i = 0; i < o; i += 3)
                  (b =
                    (e.charCodeAt(i) << 16) |
                    (e.charCodeAt(i + 1) << 8) |
                    e.charCodeAt(i + 2)),
                    t.push(map.charAt(b >> 18)),
                    t.push(map.charAt((b >> 12) & 63)),
                    t.push(map.charAt((b >> 6) & 63)),
                    t.push(map.charAt(63 & b));
                switch (e.length - o) {
                  case 1:
                    (b = e.charCodeAt(i) << 16),
                      t.push(
                        map.charAt(b >> 18) + map.charAt((b >> 12) & 63) + n + n
                      );
                    break;
                  case 2:
                    (b = (e.charCodeAt(i) << 16) | (e.charCodeAt(i + 1) << 8)),
                      t.push(
                        map.charAt(b >> 18) +
                          map.charAt((b >> 12) & 63) +
                          map.charAt((b >> 6) & 63) +
                          n
                      );
                }
                return t.join("");
              },
              base64decode: function () {
                var e = this;
                if (!e) return "";
                var t = (e += "").length,
                  map =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                if (0 === t || t % 4 != 0) return e;
                var n = 0;
                e.charAt(t - 1) === map[64] &&
                  (n++, e.charAt(t - 2) === map[64] && n++, (t -= 4));
                var i,
                  b,
                  o = [];
                for (i = 0; i < t; i += 4)
                  (b =
                    (map.indexOf(e.charAt(i)) << 18) |
                    (map.indexOf(e.charAt(i + 1)) << 12) |
                    (map.indexOf(e.charAt(i + 2)) << 6) |
                    map.indexOf(e.charAt(i + 3))),
                    o.push(
                      String.fromCharCode(b >> 16, (b >> 8) & 255, 255 & b)
                    );
                switch (n) {
                  case 1:
                    (b =
                      (map.indexOf(e.charAt(i)) << 18) |
                      (map.indexOf(e.charAt(i)) << 12) |
                      (map.indexOf(e.charAt(i)) << 6)),
                      o.push(String.fromCharCode(b >> 16, (b >> 8) & 255));
                    break;
                  case 2:
                    (b =
                      (map.indexOf(e.charAt(i)) << 18) |
                      (map.indexOf(e.charAt(i)) << 12)),
                      o.push(String.fromCharCode(b >> 16));
                }
                return unescape(o.join(""));
              },
              utf16to8: function () {
                for (var e, t = "", n = this.length, i = 0; i < n; i++)
                  (e = this.charCodeAt(i)) >= 1 && e <= 127
                    ? (t += this.charAt(i))
                    : e > 2047
                    ? ((t += String.fromCharCode(224 | ((e >> 12) & 15))),
                      (t += String.fromCharCode(128 | ((e >> 6) & 63))),
                      (t += String.fromCharCode(128 | ((e >> 0) & 63))))
                    : ((t += String.fromCharCode(192 | ((e >> 6) & 31))),
                      (t += String.fromCharCode(128 | ((e >> 0) & 63))));
                return t;
              },
              utf8to16: function () {
                for (var e, t, n, o = "", i = 0, r = this.length; i < r; )
                  switch ((e = this.charCodeAt(i++)) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                      o += this.charAt(i - 1);
                      break;
                    case 12:
                    case 13:
                      (t = this.charCodeAt(i++)),
                        (o += String.fromCharCode(((31 & e) << 6) | (63 & t)));
                      break;
                    case 14:
                      (t = this.charCodeAt(i++)),
                        (n = this.charCodeAt(i++)),
                        (o += String.fromCharCode(
                          ((15 & e) << 12) | ((63 & t) << 6) | ((63 & n) << 0)
                        ));
                  }
                return o;
              },
              strforDate: function () {
                return 8 != this.length
                  ? (console.error("格式不正确：如19900101"), new Date())
                  : new Date(
                      this.slice(0, 4) +
                        "/" +
                        this.slice(4, 6) +
                        "/" +
                        this.slice(6, 8)
                    );
              },
              repairFixed: function (e) {
                var t = 0;
                if (this.toString()) {
                  if (!isNaN(this) && 0 !== parseFloat(this)) {
                    for (
                      var n = this.toString().split("."),
                        o = n[1] ? n[1] : "",
                        r = e - o.length,
                        i = 0;
                      i < r;
                      i++
                    )
                      o += "0";
                    t = n[0] + "." + o;
                  }
                  return t;
                }
                return "";
              },
              querBktGameState: function () {
                return (
                  1 != this &&
                  10 != this &&
                  12 != this &&
                  11 != this &&
                  13 != this &&
                  14 != this &&
                  15 != this &&
                  16 != this
                );
              },
              querBktGameStateStrict: function () {
                return (
                  2 == this || 4 == this || 6 == this || 8 == this || 9 == this
                );
              },
              querBktGameStateIsNull: function (e) {
                var t = !1;
                return (
                  ((0 == this && 2 == e) || (1 == this && 4 == e)) && (t = !0),
                  2 == this && 6 == e && (t = !0),
                  3 == this && 8 == e && (t = !0),
                  this >= 4 && 9 == e && (t = !0),
                  t
                );
              },
              querFtbRaceTrim: function () {
                return (
                  1 != this &&
                  8 != this &&
                  9 != this &&
                  10 != this &&
                  11 != this &&
                  12 != this
                );
              },
              querFtbNoStart: function () {
                var e = parseFloat(this);
                return 1 == e || 9 == e || 12 == e || 13 == e;
              },
              querFtbRaceTrimStrict: function () {
                return (
                  2 == this ||
                  3 == this ||
                  4 == this ||
                  5 == this ||
                  6 == this ||
                  7 == this
                );
              },
              transFtb: function (i) {
                return this & (1 << i);
              },
              goal2GoalCn: function () {
                var e =
                  "平手,平/半,半球,半/一,一球,一/球半,球半,球半/两,两球,两/两球半,两球半,两球半/三,三球,三/三球半,三球半,三球半/四球,四球,四/四球半,四球半,四球半/五,五球,五/五球半,五球半,五球半/六,六球,六/六球半,六球半,六球半/七,七球,七/七球半,七球半,七球半/八,八球,八/八球半,八球半,八球半/九,九球,九/九球半,九球半,九球半/十,十球".split(
                    ","
                  );
                if (this) {
                  if (this > 10 || this < -10) return this + "球";
                  if (this >= 0) return e[parseInt(4 * this)];
                  var t = e[Math.abs(parseInt(4 * this))];
                  return t ? "受" + t : "";
                }
                return "";
              },
              goal2GoalNum: function () {
                var e = this;
                if (e) {
                  if (e > 14) return e;
                  var t = e < 0;
                  return (
                    (e = [
                      "0",
                      "0/0.5",
                      "0.5",
                      "0.5/1",
                      "1",
                      "1/1.5",
                      "1.5",
                      "1.5/2",
                      "2",
                      "2/2.5",
                      "2.5",
                      "2.5/3",
                      "3",
                      "3/3.5",
                      "3.5",
                      "3.5/4",
                      "4",
                      "4/4.5",
                      "4.5",
                      "4.5/5",
                      "5",
                      "5/5.5",
                      "5.5",
                      "5.5/6",
                      "6",
                      "6/6.5",
                      "6.5",
                      "6.5/7",
                      "7",
                      "7/7.5",
                      "7.5",
                      "7.5/8",
                      "8",
                      "8/8.5",
                      "8.5",
                      "8.5/9",
                      "9",
                      "9/9.5",
                      "9.5",
                      "9.5/10",
                      "10",
                      "10/10.5",
                      "10.5",
                      "10.5/11",
                      "11",
                      "11/11.5",
                      "11.5",
                      "11.5/12",
                      "12",
                      "12/12.5",
                      "12.5",
                      "12.5/13",
                      "13",
                      "13/13.5",
                      "13.5",
                      "13.5/14",
                      "14",
                    ][parseInt(4 * Math.abs(e))]),
                    (e = t ? "-" + e : e)
                  );
                }
                return "";
              },
              querTennisRaceTrim: function () {
                return !(0 == this || 1 == this || this >= 12);
              },
              querTennisNoStart: function () {
                var e = parseFloat(this);
                return 0 == e || 1 == e || 13 == e || 16 == e || 17 == e;
              },
              querTennisRaceTrimStrict: function () {
                var e = this;
                return (
                  2 == e ||
                  3 == e ||
                  4 == e ||
                  5 == e ||
                  6 == e ||
                  7 == e ||
                  8 == e ||
                  9 == e ||
                  10 == e ||
                  11 == e
                );
              },
              escape_str: function () {
                return this.replace(/<([\s\S]*?)>/gi, "");
              },
              thousands: function () {
                var e = this.toString();
                if (/^-?\d+\.?\d+$/.test(e)) {
                  for (
                    /^-?\d+$/.test(e)
                      ? (e += ",00")
                      : (e = e.replace(/\./, ","));
                    /\d{4}/.test(e);

                  )
                    e = e.replace(/(\d+)(\d{3}\,)/, "$1,$2");
                  e = e.replace(/\,(\d*)$/, ".$1");
                }
                return e;
              },
              dateComparison: function (e, t) {
                var n = this;
                (e = new Date(1e3 * e)),
                  (n = new Date(1e3 * n)),
                  (e = new Date(e.setHours(0, 0, 0, 0)));
                var o = {
                  stat: !1,
                  date: (n = new Date(n.setHours(0, 0, 0, 0))),
                };
                return (
                  t && "max" != t
                    ? "min" == t && n.getTime() < e.getTime() && (o.stat = !0)
                    : n.getTime() > e.getTime() && (o.stat = !0),
                  o
                );
              },
            }),
            e.extend(
              Array.prototype,
              (Array.prototype.find ||
                (Array.prototype.find = function (e) {
                  if (null == this)
                    throw new TypeError(
                      "Array.prototype.find called on null or undefined"
                    );
                  if ("function" != typeof e)
                    throw new TypeError("predicate must be a function");
                  for (
                    var t,
                      n = Object(this),
                      o = n.length >>> 0,
                      r = arguments[1],
                      i = 0;
                    i < o;
                    i++
                  )
                    if (((t = n[i]), e.call(r, t, i, n))) return t;
                }),
              { find: Array.prototype.find })
            ));
        })(jQuery),
        (function (e) {
          e &&
            e.extend(String.prototype, {
              isIP: function () {
                return /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/.test(
                  this.trim()
                );
              },
              isUrl: function () {
                return new RegExp(
                  /^(ftp|https?):\/\/([^\s\.]+\.[^\s]{2,}|localhost)$/i
                ).test(this.trim());
              },
              isURL: function () {
                return this.isUrl();
              },
              isDate: function () {
                var e = this.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
                if (null === e) return !1;
                var t = new Date(e[1], e[3] - 1, e[4]);
                return (
                  t.getFullYear() == e[1] &&
                  t.getMonth() + 1 == e[3] &&
                  t.getDate() == e[4]
                );
              },
              isTime: function () {
                var e = this.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
                return null !== e && !(e[1] > 24 || e[3] > 60 || e[4] > 60);
              },
              isDateTime: function () {
                var e = this.match(
                  /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
                );
                if (null === e) return !1;
                var t = new Date(e[1], e[3] - 1, e[4], e[5], e[6], e[7]);
                return (
                  t.getFullYear() == e[1] &&
                  t.getMonth() + 1 == e[3] &&
                  t.getDate() == e[4] &&
                  t.getHours() == e[5] &&
                  t.getMinutes() == e[6] &&
                  t.getSeconds() == e[7]
                );
              },
              isInteger: function () {
                return new RegExp(/^(-|\+)?\d+$/).test(this.trim());
              },
              isPositiveInteger: function () {
                return (
                  new RegExp(/^\d+$/).test(this.trim()) &&
                  parseInt(this, 10) > 0
                );
              },
              isNegativeInteger: function () {
                return new RegExp(/^-\d+$/).test(this.trim());
              },
              isNumber: function () {
                return !isNaN(this);
              },
              isRealName: function () {
                return new RegExp(/^[A-Za-z \u4E00-\u9FA5]+$/).test(this);
              },
              isLogName: function () {
                return this.isEmail() || this.isMobile();
              },
              isEmail: function () {
                return new RegExp(
                  /^([_a-zA-Z\d\-\.])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
                ).test(this.trim());
              },
              isMobile: function () {
                return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.trim());
              },
              isPhone: function () {
                return new RegExp(
                  /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/
                ).test(this.trim());
              },
              isAreacode: function () {
                return new RegExp(/^0\d{2,3}$/).test(this.trim());
              },
              isPostcode: function () {
                return new RegExp(/^\d{6}$/).test(this.trim());
              },
              isLetters: function () {
                return new RegExp(/^[A-Za-z]+$/).test(this.trim());
              },
              isDigits: function () {
                return new RegExp(/^[1-9][0-9]+$/).test(this.trim());
              },
              isAlphanumeric: function () {
                return new RegExp(/^[a-zA-Z0-9]+$/).test(this.trim());
              },
              isValidString: function () {
                return new RegExp(/^[a-zA-Z0-9\s.\-_]+$/).test(this.trim());
              },
              isLowerCase: function () {
                return new RegExp(/^[a-z]+$/).test(this.trim());
              },
              isUpperCase: function () {
                return new RegExp(/^[A-Z]+$/).test(this.trim());
              },
              isChinese: function () {
                return new RegExp(/^[\u4e00-\u9fa5]+$/).test(this.trim());
              },
              isIDCard: function () {
                var e = new RegExp(
                    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
                  ),
                  t = new RegExp(
                    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/
                  );
                return e.test(this.trim()) || t.test(this.trim());
              },
              isCardNo: function (e) {
                var t = {
                  UleCard: { lengths: "16", prefixes: "", checkdigit: !0 },
                  Visa: { lengths: "13,16", prefixes: "4", checkdigit: !0 },
                  MasterCard: {
                    lengths: "16",
                    prefixes: "51,52,53,54,55",
                    checkdigit: !0,
                  },
                  BankCard: {
                    lengths: "16,17,19",
                    prefixes: "3,4,5,6,9",
                    checkdigit: !1,
                  },
                };
                if (!t[e]) return !1;
                var n = this.replace(/[\s-]/g, "");
                if (0 !== n.length && /^[0-9]{13,19}$/.exec(n)) {
                  n = n.replace(/\D/g, "");
                  var o = !0,
                    r = !1,
                    l = !1;
                  if (t[e].checkdigit) {
                    var c,
                      d = 0,
                      m = 1;
                    for (i = n.length - 1; i >= 0; i--)
                      (c = Number(n.charAt(i)) * m) > 9 &&
                        ((d += 1), (c -= 10)),
                        (d += c),
                        (m = 1 == m ? 2 : 1);
                    d % 10 != 0 && (o = !1);
                  }
                  if ("" === t[e].prefixes) r = !0;
                  else {
                    var h = t[e].prefixes.split(",");
                    for (i = 0; i < h.length; i++) {
                      new RegExp("^" + h[i]).test(n) && (r = !0);
                    }
                  }
                  for (
                    var f = t[e].lengths.split(","), i = 0;
                    i < f.length;
                    i++
                  )
                    n.length == f[i] && (l = !0);
                  return !!(o && r && l);
                }
                return !1;
              },
              isUleCard: function () {
                return this.isCardNo("UleCard");
              },
              isVisa: function () {
                return this.isCardNo("Visa");
              },
              isMasterCard: function () {
                return this.isCardNo("MasterCard");
              },
              isValidEAN: function () {
                for (
                  var code = this.trim(),
                    a = 0,
                    b = 0,
                    e = parseInt(code.right(1), 10),
                    t = code.left(code.length - 1).reverse(),
                    i = 0;
                  i < t.length;
                  i++
                )
                  i % 2
                    ? (b += parseInt(t.charAt(i), 10))
                    : (a += parseInt(t.charAt(i), 10));
                return !((3 * a + b + e) % 10);
              },
              isEAN8: function () {
                var code = this.trim();
                return new RegExp(/^\d{8}$/).test(code) && code.isValidEAN();
              },
              isEAN12: function () {
                var code = this.trim();
                return new RegExp(/^\d{12}$/).test(code) && code.isValidEAN();
              },
              isEAN13: function () {
                var code = this.trim();
                return new RegExp(/^\d{13}$/).test(code) && code.isValidEAN();
              },
              isISBN10: function () {
                var code = this.trim();
                if (!new RegExp(/^\d{9}([0-9]|X|x)$/).test(code)) return !1;
                for (
                  var a = 0, b = code.right(1), e = code.reverse(), i = 1;
                  i < e.length;
                  i++
                )
                  a += parseInt(e.charAt(i), 10) * (i + 1);
                return (
                  ("X" != b && "x" != b) || (b = 10),
                  !((a + parseInt(b, 10)) % 11)
                );
              },
              isISBN: function () {
                return this.isEAN13();
              },
              isEANCode: function () {
                return (
                  this.isEAN8() ||
                  this.isEAN12() ||
                  this.isEAN13() ||
                  this.isISBN10()
                );
              },
            });
        })(jQuery),
        (function (e) {
          e &&
            e.extend(Number.prototype, {
              comma: function (e) {
                (!e || e < 1) && (e = 3);
                var source = ("" + this).split(".");
                return (
                  (source[0] = source[0].replace(
                    new RegExp("(\\d)(?=(\\d{" + e + "})+$)", "ig"),
                    "$1,"
                  )),
                  source.join(".")
                );
              },
              randomInt: function (e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e);
              },
              padLeft: function (e, t) {
                return ("" + this).padLeft(e, t);
              },
              padRight: function (e, t) {
                return ("" + this).padRight(e, t);
              },
              dateSeats: function () {
                var e = this;
                return e >= 0 && e < 10 && (e = "0" + e), e.toString();
              },
              counter: function (e) {
                var t = this;
                for (var i in ((t.options = {
                  endNumber: 0,
                  startNumber: 0,
                  derationTime: 0,
                  fixed: 0,
                  bonusInterval: null,
                  callback: null,
                  end: null,
                }),
                e))
                  t.options[i] = e[i];
                if (
                  ((t.options.endNumber = t),
                  (t.options.startNumber = t.options.startNumber
                    ? parseFloat(
                        t.options.startNumber.toString().split(",").join("")
                      )
                    : 0),
                  parseFloat(t.options.endNumber) == t.options.startNumber)
                )
                  t.options.callback &&
                    t.options.callback(t.options.startNumber);
                else {
                  var n = 0;
                  t.options.bonusInterval = setInterval(function () {
                    n += 1;
                    var e = (t.options.startNumber +=
                      (n / t.options.derationTime) *
                      (t.options.endNumber - t.options.startNumber));
                    (e = parseFloat(e).toFixed(t.options.fixed)),
                      t.options.callback && t.options.callback(e),
                      e >= t &&
                        ("function" == typeof t.options.end &&
                          t.options.end(t.options.endNumber),
                        clearInterval(t.options.bonusInterval));
                  }, 1);
                }
                return t;
              },
              toFixeds: function (e) {
                var t = this;
                return (t = Math.round(t * Math.pow(10, e)) / Math.pow(10, e));
              },
            });
        })(jQuery),
        (function (e) {
          e &&
            (e.extend(Array.prototype, {
              remove: function (e, t) {
                this.removeAt(this.indexOf(e, t));
              },
              removeAt: function (e) {
                if (e >= 0 && e < this.length) {
                  for (var i = e; i < this.length - 1; i++)
                    this[i] = this[i + 1];
                  this.length--;
                }
              },
              removeEmpty: function () {
                for (var e = [], i = 0; i < this.length; i++)
                  "" !== this[i].trim() && e.push(this[i].trim());
                return e;
              },
              add: function (e) {
                return !(this.indexOf(e) > -1) && (this.push(e), !0);
              },
              swap: function (i, e) {
                if (i < this.length && e < this.length && i != e) {
                  var t = this[i];
                  (this[i] = this[e]), (this[e] = t);
                }
              },
              unique: function () {
                var i,
                  e,
                  a = [],
                  t = {},
                  n = this.length;
                if (n < 2) return this;
                for (i = 0; i < n; i++)
                  1 !== t[(e = this[i])] && (a.push(e), (t[e] = 1));
                return a;
              },
              qunull: function () {
                var e,
                  t = this.length,
                  n = !1;
                for (i = 0; i < t; i++)
                  "" != (e = this[i]) && null != e && null != e && (n = !0);
                return n;
              },
              sortbyTow: function (e, dt, t) {
                for (
                  var n = function (e, t, dt, n) {
                      "int" == dt
                        ? ((e = parseInt(e, 10)), (t = parseInt(t, 10)))
                        : "float" == dt &&
                          ((e = parseFloat(e)), (t = parseFloat(t)));
                      var o = 0;
                      return (
                        e < t && (o = 1),
                        e > t && (o = -1),
                        "desc" == n && (o = 0 - o),
                        o
                      );
                    },
                    o = [],
                    i = 0;
                  i < this.length;
                  i++
                )
                  o[o.length] = this[i];
                for (i = 0; i < o.length; i++) {
                  for (
                    var r = i, l = "" !== e ? o[i][e] : o[i], c = i + 1;
                    c < o.length;
                    c++
                  ) {
                    var d = "" !== e ? o[c][e] : o[c];
                    n(l, d, dt, t) < 0 && ((r = c), (l = d));
                  }
                  if (r > i) {
                    var m = o[r];
                    (o[r] = o[i]), (o[i] = m);
                  }
                }
                return o;
              },
              sum: function () {
                var t = 0;
                if (e.isArray(this))
                  for (var i = 0; i < this.length; i++) t += this[i];
                return t;
              },
              statisticalToBar: function () {
                var e = this;
                if (e.length < 2) return console.error("数组格式错误"), [];
                var t = 100 / (parseFloat(e[0]) + parseFloat(e[1]));
                return [
                  0 == (t = "Infinity" == t ? 0 : t) ? 50 : t * e[0],
                  0 == t ? 50 : t * e[1],
                  t,
                ];
              },
              strToFloat: function () {
                for (var e = [], i = 0; i < this.length; i++)
                  e.push(this[i] ? parseFloat(this[i]) : "");
                return e;
              },
              footBallreturnRates: function () {
                return parseFloat(
                  (this[0] * this[1] * this[2]) /
                    (this[0] * this[1] + this[1] * this[2] + this[0] * this[2])
                );
              },
              footBalloddsRate: function (e) {
                var t = this[0] * this[1] * this[2],
                  n = this[0] * this[1],
                  o = this[0] * this[2],
                  r = this[1] * this[2];
                return parseFloat(t / (e * (n + o + r)));
              },
              footBallPanlu: function () {
                return this[0] - this[1] - this[2];
              },
              footBallSize: function () {
                return this[0] + this[1] - this[2];
              },
            }),
            Array.prototype.indexOf ||
              (Array.prototype.indexOf = function (e) {
                var t = this.length >>> 0,
                  n = Number(arguments[1]) || 0;
                for (
                  (n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t);
                  n < t;
                  n++
                )
                  if (n in this && this[n] === e) return n;
                return -1;
              }));
        })(jQuery),
        (function (e) {
          e &&
            e.extend(Date.prototype, {
              parse: function (time) {
                return "string" == typeof time
                  ? time.indexOf("GMT") > 0 ||
                    time.indexOf("gmt") > 0 ||
                    !isNaN(Date.parse(time))
                    ? this._parseGMT(time)
                    : time.indexOf("UTC") > 0 ||
                      time.indexOf("utc") > 0 ||
                      time.indexOf(",") > 0
                    ? this._parseUTC(time)
                    : this._parseCommon(time)
                  : new Date();
              },
              _parseGMT: function (time) {
                return this.setTime(Date.parse(time)), this;
              },
              _parseUTC: function (time) {
                return new Date(time);
              },
              _parseCommon: function (time) {
                var e = time.split(/ |T/),
                  t = e.length > 1 ? e[1].split(/[^\d]/) : [0, 0, 0],
                  n = e[0].split(/[^\d]/);
                return new Date(
                  n[0] - 0,
                  n[1] - 1,
                  n[2] - 0,
                  (t[0] || 0) - 0,
                  (t[1] || 0) - 0,
                  (t[2] || 0) - 0
                );
              },
              clone: function () {
                return new Date().setTime(this.getTime());
              },
              dateAdd: function (e, t) {
                var n = this.getFullYear(),
                  o = this.getMonth(),
                  r = this.getDate(),
                  l = this.getHours(),
                  c = this.getMinutes(),
                  d = this.getSeconds();
                switch (e) {
                  case "y":
                    this.setFullYear(n + t);
                    break;
                  case "m":
                    this.setMonth(o + t);
                    break;
                  case "d":
                    this.setDate(r + t);
                    break;
                  case "h":
                    this.setHours(l + t);
                    break;
                  case "n":
                    this.setMinutes(c + t);
                    break;
                  case "s":
                    this.setSeconds(d + t);
                }
                return this;
              },
              dateDiff: function (e) {
                var t = e - this,
                  n = parseInt(t / 1e3 / 3600 / 24 / 7),
                  o = parseInt(t / 1e3 / 60 / 60 / 24, 10),
                  r = parseInt((t / 1e3 / 60 / 60) % 24, 10),
                  l = parseInt((t / 1e3 / 60) % 60, 10),
                  c = parseInt((t / 1e3) % 60, 10);
                return {
                  week: Math.abs(n),
                  day: Math.abs(o),
                  hours: Math.abs(r),
                  minutes: Math.abs(l),
                  seconds: Math.abs(c),
                };
              },
              outputDate: function () {
                var e = new Date(this);
                NaN == e &&
                  (console.error("传参格式不正确，必须是日期格式"),
                  (e = new Date()));
                var t = e.getMonth() + 1,
                  n = e.getDate();
                return (
                  (t = t < 10 ? "0" + t : t),
                  (n = n < 10 ? "0" + n : n),
                  e.getFullYear() + "" + t + n
                );
              },
              toDate: function () {
                var e = new Date(this);
                return {
                  date: e,
                  year: e.getFullYear(),
                  month: (e.getMonth() + 1).dateSeats(),
                  day: e.getDate().dateSeats(),
                  hours: e.getHours().dateSeats(),
                  minutes: e.getMinutes().dateSeats(),
                  zoomDate: new Date(e).setHours(0, 0, 0, 0),
                };
              },
              getDates: function () {
                var e = new Date(this).toDate();
                return new Date(e.year + "/" + e.month + "/" + e.day);
              },
            });
        })(jQuery),
        (function (e) {
          if (e) {
            var t = navigator.userAgent.toLowerCase();
            e.browser ||
              (e.browser = {
                version: (t.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [
                  0,
                  "0",
                ])[1],
                safari: /webkit/.test(t),
                opera: /opera/.test(t),
                mozilla: /mozilla/.test(t) && !/(compatible|webkit)/.test(t),
              }),
              (e.browser.msie =
                (/msie/.test(t) || /trident/.test(t)) && !/opera/.test(t)),
              e.extend(e.browser, {
                isIE6: !(!e.browser.msie || 6 != e.browser.version),
                IEMode: e.browser.msie
                  ? document.documentMode
                    ? document.documentMode
                    : document.compatMode && "CSS1Compat" == document.compatMode
                    ? 7
                    : 5
                  : 0,
                isIEMax8: function () {
                  var e = this.IEMode;
                  return e > 0 && e < 9;
                },
                isIPad: /iPad/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isIPhone: /iPhone/i.test(navigator.userAgent),
                isSymbian: /SymbianOS/i.test(navigator.userAgent),
                isWP: /Windows Phone/i.test(navigator.userAgent),
                isIPod: /iPod/i.test(navigator.userAgent),
                isWin: /Windows/i.test(navigator.userAgent),
                isMac: /Mac OS X/i.test(navigator.userAgent),
                isLinux: /Linux/i.test(navigator.userAgent),
                isWechat: /micromessenger/i.test(
                  navigator.userAgent.toLowerCase()
                ),
                isQQ: /\sQQ/i.test(navigator.userAgent.toLowerCase()),
                isPC: function () {
                  for (
                    var e = navigator.userAgent,
                      t = [
                        "Android",
                        "iPhone",
                        "SymbianOS",
                        "Windows Phone",
                        "iPad",
                        "iPod",
                      ],
                      n = !0,
                      i = 0;
                    i < t.length;
                    i++
                  )
                    if (e.indexOf(t[i]) > 0) {
                      n = !1;
                      break;
                    }
                  return n;
                },
                isMobile: function () {
                  return !this.isPC();
                },
                language: function () {
                  var e = {
                    code:
                      void 0 === AiScore.cookie.getFilter("lang")
                        ? 0
                        : AiScore.cookie.getFilter("lang"),
                    name: "",
                  };
                  return (
                    (e.code = 0)
                      ? (e.name = "zh-cn")
                      : 1 == e.code
                      ? (e.name = "zh-tw")
                      : 2 == e.code && (e.name = "us"),
                    e
                  );
                },
              }),
              (e.fn.tagName = function () {
                if (0 === this.length) return "";
                if (this.length > 1) {
                  var e = [];
                  return (
                    this.each(function (i, t) {
                      e.push(t.tagName.toLowerCase());
                    }),
                    e
                  );
                }
                return this[0].tagName.toLowerCase();
              }),
              (e.fn.optionText = function () {
                if (0 === this.length) return "";
                var e = this[0];
                return -1 === e.selectedIndex
                  ? ""
                  : e.options[e.selectedIndex].text;
              }),
              (e.fn.attrJSON = function (e) {
                return (this.attr(e || "rel") || "").parseAttrJSON();
              }),
              (e.fn.inputNumber = function () {
                if (0 === this.length || !AiScore) return this;
                e("body").delegate(this, "keypress", function (e) {
                  var t = (e = e || window.event).keyCode || e.which;
                  if ((t < 48 || t > 57) && 8 != t) return !1;
                });
              }),
              (e.fn.selectbox = function (t, n) {
                if (0 === this.length || !AiScore) return this;
                "function" == typeof t && (n = t),
                  e(this).each(function () {
                    var o = e(this),
                      r = o.find(".tip .name");
                    o.find(".down ul li").each(function () {
                      var l = e(this),
                        c = l.attr("data-value");
                      c == t &&
                        (r.html(l.html()),
                        o.attr("data-value", c),
                        l
                          .addClass("active")
                          .siblings("li")
                          .removeClass("active")),
                        l.unbind().click(function () {
                          var t = e(this);
                          r.html(t.html()),
                            t
                              .addClass("active")
                              .siblings("li")
                              .removeClass("active"),
                            n && n(t);
                        });
                    });
                  });
              }),
              (e.fn.setCheck = function () {
                var t = e(this);
                t.hasClass("active")
                  ? t.removeClass("active")
                  : t.addClass("active");
              }),
              (e.fn.nulls = function () {
                return "" == this.val();
              });
          }
        })(jQuery),
        (function ($) {
          $ &&
            (window.AiScore || (window.AiScore = {}),
            (AiScore.namespace = function (e, t) {
              var s = e.split(t || "."),
                n = {};
              return (
                (function e(a, b, t) {
                  t < b.length &&
                    (a[b[t]] || (a[b[t]] = {}),
                    (n = a[b[t]]),
                    e(a[b[t]], b, t + 1));
                })(window, s, 0),
                n
              );
            }),
            (AiScore.define = function (e, t, n) {
              var o = this,
                r = e;
              if (e.indexOf(".") > 0) {
                var a = e.split(".");
                r = a.pop();
                var source = a.join(".");
                o = AiScore.namespace(source);
              }
              o[r] ||
                ((o[r] = t),
                n && n(),
                AiScore.debug("AiScore.define", e, "info"));
            }),
            (AiScore.ready = function (e) {
              AiScore.ready.addEvent(e);
            }),
            $.extend(AiScore.ready, {
              events: [],
              addEvent: function (e) {
                this.events ? this.events.push(e) : e();
              },
              exeEvents: function () {
                if (this.events) {
                  for (var i = 0; i < this.events.length; i++) this.events[i]();
                  this.events = null;
                }
              },
            }),
            (AiScore.debug = function (a, b, e) {
              this.debugMode &&
                ((e = e || "log"),
                (window.console && function () {}) ||
                  AiScore.debug.log(
                    new Date().format("hh:nn:ss.S") + ", " + a + " = " + b
                  ));
            }),
            $.extend(AiScore.debug, {
              log: function () {
                this.createDOM();
                for (
                  var p = [], e = $("#_jend_debuglog textarea").val(), i = 0;
                  i < arguments.length;
                  i++
                )
                  p.push(arguments[i]);
                (e += ("" === e ? "" : "\n") + p.join(" ")),
                  $("#_jend_debuglog textarea").val(e);
              },
              clear: function () {
                $("#_jend_debuglog textarea").val("");
              },
              createDOM: function () {
                if (0 === $("#_jend_debuglog").length) {
                  $("body").append(
                    '<div id="_jend_debuglog" style="position:fixed;bottom:0;left:0;right:0;_position:absolute;_bottom:auto;_top:0;padding:5px 0 5px 5px;border:solid 5px #666;background:#eee;z-index:1000;"><textarea style="font-size:12px;line-height:16px;display:block;background:#eee;border:none;width:100%;height:80px;"></textarea><a style="text-decoration:none;display:block;height:80px;width:20px;text-align:center;line-height:16px;padding:5px 0;_padding:6px 0;background:#666;color:#fff;position:absolute;right:-5px;bottom:0;" href="#">关闭调试器</a></div>'
                  ),
                    $("#_jend_debuglog a").click(function () {
                      return $(this).parent().remove(), !1;
                    }),
                    $("#_jend_debuglog textarea").focus(function () {
                      this.select();
                    });
                }
              },
            }),
            (AiScore.isEmptyValue = function (e) {
              if (null == e) return !0;
              switch (Object.prototype.toString.call(e).slice(8, -1)) {
                case "String":
                  return !$.trim(e);
                case "Array":
                  return !e.length;
                case "Object":
                  return $.isEmptyObject(e);
                default:
                  return !1;
              }
            }),
            (AiScore.load = function (e, t, n) {
              if ($.isArray(e)) {
                var o = e.join(","),
                  r = e.length,
                  l = AiScore.loader.checkFileLoader(o);
                if (l == r + 1) "function" == typeof t && t();
                else if (l > 0) AiScore.loader.addExecute(o, t);
                else if (0 === l) {
                  AiScore.loader.addExecute(o, t),
                    AiScore.debug("开始加载JS", o),
                    (AiScore.loader.fileLoader[o] = 1);
                  for (var i = 0; i < r; i++)
                    AiScore.load(e[i], function () {
                      AiScore.loader.fileLoader[o]++,
                        AiScore.loader.fileLoader[o] == r + 1 &&
                          (AiScore.debug("完成加载JS", o),
                          AiScore.loader.execute(o));
                    });
                }
              } else
                AiScore.loader.serviceLibs[e] &&
                AiScore.loader.serviceLibs[e].requires
                  ? AiScore.load(
                      AiScore.loader.serviceLibs[e].requires,
                      function () {
                        AiScore.load.run(e, t, n);
                      }
                    )
                  : AiScore.load.run(e, t, n);
            }),
            $.extend(AiScore.load, {
              setPath: function (path) {
                AiScore.loader.serviceBase = path;
              },
              add: function (e, data) {
                var t = this;
                function n(e) {
                  return (
                    e &&
                      !e.startWith("http") &&
                      t.version &&
                      (e = e.addQueryValue("v", this.version)),
                    e
                  );
                }
                AiScore.loader.serviceLibs[e] ||
                  (data.js instanceof Array
                    ? $.each(data.js, function (i, e) {
                        data.js[i] = n(e);
                      })
                    : (data.js = n(data.js)),
                  data.css &&
                    (data.css instanceof Array
                      ? $.each(data.css, function (i, e) {
                          !e.startWith("http") &&
                            t.version &&
                            (e = e.addQueryValue("v", t.version));
                        })
                      : !data.css.startWith("http") &&
                        this.version &&
                        (data.css = data.css.addQueryValue("v", this.version))),
                  (AiScore.loader.serviceLibs[e] = data));
              },
              run: function run(service, act, params) {
                var action =
                  "string" == typeof act
                    ? function () {
                        try {
                          var o = eval("AiScore." + service);
                          o && o[act] && o[act](params);
                        } catch (e) {}
                      }
                    : act || function () {};
                if (AiScore.loader.checkService(service)) action();
                else {
                  var url = AiScore.loader.getServiceUrl(service),
                    status = AiScore.loader.checkFileLoader(url);
                  2 === status
                    ? (action(),
                      null != params &&
                        "function" == typeof params.callback &&
                        params.callback())
                    : 1 === status
                    ? AiScore.loader.addExecute(url, action)
                    : 0 === status
                    ? $('script[src="' + url + '"]').length > 0
                      ? ((AiScore.loader.fileLoader[url] = 2), action())
                      : (AiScore.loader.addExecute(url, action),
                        AiScore.loader.addScript(service))
                    : AiScore.debug("加载异常", service);
                }
              },
              loadeHtml: function (e, t, n) {
                AiScore.load(["xdomainrequest"], function () {
                  (jQuery.support.cors = !0),
                    $.ajax({
                      url: e,
                      type: "GET",
                      dataType: "html",
                      success: function (data) {
                        t && t(data);
                      },
                      error: function (e) {
                        console.error(e), n && n(e);
                      },
                    });
                });
              },
            }),
            AiScore.define("AiScore.loader", {
              fileLoader: {},
              executeLoader: {},
              serviceBase: "",
              serviceLibs: {},
              checkFullUrl: function (e) {
                return (
                  0 === e.indexOf("/") ||
                  0 === e.indexOf("http://") ||
                  0 === e.indexOf("https://")
                );
              },
              checkService: function checkService(service) {
                if (this.checkFullUrl(service)) return !1;
                try {
                  if (service.indexOf(".") > 0) {
                    var o = eval("AiScore." + service);
                    return void 0 !== o;
                  }
                  return !1;
                } catch (e) {
                  return !1;
                }
              },
              checkFileLoader: function (e) {
                return "" !== e ? this.fileLoader[e] || 0 : -1;
              },
              getServiceUrl: function (e) {
                var t = "";
                return (
                  this.checkFullUrl(e)
                    ? (t = e)
                    : this.serviceLibs[e] &&
                      (t = this.serviceLibs[e].js
                        ? this.checkFullUrl(this.serviceLibs[e].js)
                          ? this.serviceLibs[e].js
                          : this.serviceBase + this.serviceLibs[e].js
                        : this.checkFullUrl(this.serviceLibs[e].css)
                        ? this.serviceLibs[e].css
                        : this.serviceBase + this.serviceLibs[e].css),
                  t
                );
              },
              execute: function (e) {
                if (this.executeLoader[e]) {
                  for (var i = 0; i < this.executeLoader[e].length; i++)
                    this.executeLoader[e][i]();
                  this.executeLoader[e] = null;
                }
              },
              addExecute: function (e, t) {
                "function" == typeof t &&
                  (this.executeLoader[e] || (this.executeLoader[e] = []),
                  this.executeLoader[e].push(t));
              },
              addScript: function (e) {
                var t,
                  n = this;
                n.checkFullUrl(e)
                  ? ((t = e),
                    this.getScript(t, function () {
                      AiScore.debug("完成加载JS", t),
                        (n.fileLoader[t] = 2),
                        AiScore.loader.execute(t);
                    }))
                  : n.serviceLibs[e] &&
                    (n.serviceLibs[e].css &&
                      (n.serviceLibs[e].css instanceof Array
                        ? $.each(n.serviceLibs[e].css, function (i, e) {
                            n.setCss(e);
                          })
                        : n.setCss(n.serviceLibs[e].css)),
                    n.serviceLibs[e].js &&
                      (n.serviceLibs[e].js instanceof Array
                        ? $.each(n.serviceLibs[e].js, function (i, e) {
                            n.setJs(e);
                          })
                        : n.setJs(n.serviceLibs[e].js)));
              },
              setJs: function (e) {
                var t = this;
                (e = this.checkFullUrl(e) ? e : this.serviceBase + e),
                  t.getScript(e, function () {
                    AiScore.debug("完成加载JS", e),
                      (t.fileLoader[e] = 2),
                      AiScore.loader.execute(e);
                  });
              },
              setCss: function (e) {
                var t = this;
                (e = t.checkFullUrl(e) ? e : t.serviceBase + e.css),
                  t.fileLoader[e] ||
                    (AiScore.debug("开始加载CSS", e),
                    (t.fileLoader[e] = 1),
                    $("head").append(
                      '<link rel="stylesheet" type="text/css"  href="' +
                        e +
                        '" />'
                    ),
                    AiScore.debug("完成加载CSS", e),
                    (t.fileLoader[e] = 2),
                    AiScore.loader.execute(e));
              },
              getScript: function (e, t, n) {
                AiScore.debug("开始加载JS", e),
                  (this.fileLoader[e] = 1),
                  this.getRemoteScript(e, t, n);
              },
              getRemoteScript: function (e, param, t, n) {
                $.isFunction(param) && ((n = t), (t = param), (param = {}));
                var head = document.getElementsByTagName("head")[0],
                  script = document.createElement("script");
                for (var o in ((script.type = "text/javascript"),
                (script.charset = "utf-8"),
                (script.src = e),
                param))
                  "keepScriptTag" == o
                    ? (script.keepScriptTag = !0)
                    : script.setAttribute(o, param[o]);
                (script.onload = script.onreadystatechange =
                  function () {
                    (this.readyState &&
                      "loaded" != this.readyState &&
                      "complete" != this.readyState) ||
                      (t && t(),
                      (script.onload = script.onreadystatechange = null),
                      script.keepScriptTag || head.removeChild(script));
                  }),
                  (script.onerror = function () {
                    n && n();
                  }),
                  head.appendChild(script);
              },
              scriptPath: function (e) {
                var t = $("script"),
                  path = "";
                return (
                  t &&
                    t.length > 0 &&
                    t.each(function () {
                      var t = $(this);
                      t.attr("src") &&
                        t.attr("src").indexOf(e) >= 0 &&
                        (path = t.attr("src").split(e));
                    }),
                  path
                );
              },
            }),
            AiScore.define("AiScore.timestat", {
              libs: {},
              loadTime:
                "number" == typeof _AiScore_page_loadtime
                  ? _AiScore_page_loadtime
                  : new Date().getTime(),
              add: function (e) {
                this.libs[e] = new Date().getTime() - this.loadTime;
              },
              get: function (e) {
                return this.libs[e] || 0;
              },
            }));
        })(jQuery),
        (function (e) {
          e &&
            window.AiScore &&
            (AiScore.namespace("AiScore.track"),
            e.extend(AiScore.track, {
              scriptPath: AiScore.loader.scriptPath("/js")[0],
              init: function (e) {
                for (var i in ((this.options = {
                  baiduUid: "b378317576aa380c368a0a4a90072dc5",
                  baidu: !1,
                  googleUid: "",
                  google: !1,
                }),
                e))
                  this.options[i] = e[i];
                this.options.baidu &&
                  ((this.baidu.uid = this.options.baiduUid), this.baidu.init()),
                  this.options.google &&
                    ((this.google.uid = this.options.googleUid),
                    this.google.init());
              },
              loadJS: function (e, t) {
                if (t)
                  AiScore.loader.getRemoteScript(e, {
                    async: !0,
                    keepScriptTag: !0,
                  });
                else {
                  var head = document.getElementsByTagName("head")[0],
                    script = document.createElement("script");
                  (script.type = "text/javascript"),
                    (script.charset = "utf-8"),
                    e.indexOf(!1) && (script.charset = "gbk"),
                    (script.src = unescape(e)),
                    head.appendChild(script);
                }
              },
              timestat: {
                loadTime: window._AiScore_page_loadtime || 0,
                initTime: new Date().getTime(),
                datas: {},
                add: function (e) {
                  this.datas[e] =
                    new Date().getTime() - (this.loadTime || this.initTime);
                },
                get: function (e) {
                  return this.datas[e] || 0;
                },
              },
              baidu: {
                uid: "",
                setUid: function (e) {
                  this.uid = e;
                },
                init: function (e) {
                  window._hmt = window._hmt || [];
                },
              },
              google: {
                status: {},
                uid: "",
                setUid: function (e) {
                  this.uid = e;
                },
                init: function (e) {
                  (e = e || this.uid),
                    AiScore.track.loadJS(
                      "//www.googletagmanager.com/gtag/js?id=" + e,
                      !0
                    ),
                    (this.status[e] = !0);
                },
                gtag: function () {
                  window.dataLayer || (window.dataLayer = []),
                    arguments[2] && (arguments[2].non_interaction = !0),
                    window.dataLayer.push(arguments);
                },
                initEvent: function (e) {
                  (e = e || this.uid),
                    this.gtag("js", new Date()),
                    this.gtag("config", e),
                    this.gtag("event", "URL", { value: location.href });
                },
                initAw: function (e) {
                  this.gtag("js", new Date()),
                    this.gtag("config", e || this.uid);
                },
              },
            }));
        })(jQuery),
        (function (e) {
          e &&
            window.AiScore &&
            (AiScore.namespace("AiScore.cookie"),
            e.extend(AiScore.cookie, {
              getRootDomain: function () {
                var e = document.domain;
                if (e.indexOf(".") > 0 && !e.isIP()) {
                  var t = e.split("."),
                    n = t.length,
                    o = t[n - 1],
                    r = t[n - 2],
                    l = t[n - 3];
                  e =
                    "com" == r || "net" == r
                      ? l + "." + r + "." + o
                      : r + "." + o;
                }
                return e;
              },
              load: function () {
                for (
                  var e = document.cookie.split("; "), t = {}, a = null, i = 0;
                  i < e.length;
                  i++
                )
                  t[(a = e[i].split("="))[0]] = a[1];
                return t;
              },
              get: function (e) {
                var t = this.load()[e];
                if (!t) return !1;
                try {
                  return decodeURI(t);
                } catch (e) {
                  return unescape(t);
                }
              },
              getFilter: function (e) {
                return !!this.get(e) && this.filter(this.get(e));
              },
              set: function (e, t, n) {
                n = "object" == _typeof(n) ? n : { minute: n };
                var o = arguments.length,
                  path = o > 3 ? arguments[3] : n.path || "/",
                  r =
                    o > 4
                      ? arguments[4]
                      : n.domain || (n.root ? this.getRootDomain() : ""),
                  l = 0;
                n.day
                  ? (l = 864e5 * n.day)
                  : n.hour
                  ? (l = 36e5 * n.hour)
                  : n.minute
                  ? (l = 6e4 * n.minute)
                  : n.second && (l = 1e3 * n.second);
                var c = new Date(),
                  d = "";
                l > 0 &&
                  (c.setTime(c.getTime() + l),
                  (d = "; expires=" + c.toGMTString())),
                  (r = r ? "; domain=" + r : ""),
                  (document.cookie =
                    e + "=" + escape(t || "") + "; path=" + path + r + d);
              },
              del: function (e, t) {
                var path = "; path=" + ((t = t || {}).path || "/"),
                  n = t.domain ? "; domain=" + t.domain : "";
                t.root && (n = "; domain=" + this.getRootDomain()),
                  (document.cookie =
                    e +
                    "=" +
                    path +
                    n +
                    "; expires=Thu,01-Jan-70 00:00:01 GMT");
              },
              filter: function (text) {
                return text.replace(/(^["])|(["]$)/g, "");
              },
            }));
        })(jQuery),
        (function (e) {
          e &&
            window.AiScore &&
            ((AiScore.server = { language: e.browser.language(), name: "" }),
            AiScore.debug("AiScore.js", "加载完成"));
        })(jQuery);
    },
    ,
    ,
    function (e, t) {
      (window._iconfont_svg_string_3517020 =
        (function (e) {
          var t,
            a = (t = (t = document.getElementsByTagName("script"))[
              t.length - 1
            ]).getAttribute("data-injectcss");
          if (!(t = t.getAttribute("data-disable-injectsvg"))) {
            var n, o, r, l, p;
            if (a && !e.__iconfont__svg__cssinject__) {
              e.__iconfont__svg__cssinject__ = !0;
              try {
                document.write(
                  "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
                );
              } catch (t) {
                console;
              }
            }
            (n = function () {
              var t,
                a = document.createElement("div");
              (a.innerHTML = e._iconfont_svg_string_3517020),
                (a = a.getElementsByTagName("svg")[0]) &&
                  (a.setAttribute("aria-hidden", "true"),
                  (a.style.position = "absolute"),
                  (a.style.width = 0),
                  (a.style.height = 0),
                  (a.style.overflow = "hidden"),
                  (a = a),
                  (t = document.body).firstChild
                    ? (function (e, a) {
                        a.parentNode.insertBefore(e, a);
                      })(a, t.firstChild)
                    : t.appendChild(a));
            }),
              document.addEventListener
                ? ~["complete", "loaded", "interactive"].indexOf(
                    document.readyState
                  )
                  ? setTimeout(n, 0)
                  : ((o = function () {
                      document.removeEventListener("DOMContentLoaded", o, !1),
                        n();
                    }),
                    document.addEventListener("DOMContentLoaded", o, !1))
                : document.attachEvent &&
                  ((r = n),
                  (l = e.document),
                  (p = !1),
                  (function e() {
                    try {
                      l.documentElement.doScroll("left");
                    } catch (t) {
                      return void setTimeout(e, 50);
                    }
                    c();
                  })(),
                  (l.onreadystatechange = function () {
                    "complete" == l.readyState &&
                      ((l.onreadystatechange = null), c());
                  }));
          }
          function c() {
            p || ((p = !0), r());
          }
        })(window);
    },
    ,
    function (e, t) {
      !(function (e, t, s, n, i) {
        (e[n] = e[n] || []),
          e[n].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var o = t.getElementsByTagName(s)[0],
          r = t.createElement(s);
        (r.async = !0),
          (r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WT6FLLN"),
          o.parentNode.insertBefore(r, o);
      })(window, document, "script", "dataLayer");
    },
  ],
  [[888, 102, 66, 59, 68, 103, 101, 0]],
]);