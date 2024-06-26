(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    1161: function (_, e, t) {
      _.exports = (function () {
        "use strict";
        var _ = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        return function (e, t, n) {
          var r = t.prototype,
            i = r.format;
          (n.en.formats = _),
            (r.format = function (e) {
              void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
              var t = this.$locale().formats,
                n = (function (e, t) {
                  return e.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (e, n, r) {
                      var i = r && r.toUpperCase();
                      return (
                        n ||
                        t[r] ||
                        _[r] ||
                        t[i].replace(
                          /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                          function (_, e, t) {
                            return e || t.slice(1);
                          }
                        )
                      );
                    }
                  );
                })(e, void 0 === t ? {} : t);
              return i.call(this, n);
            });
        };
      })();
    },
    1162: function (_, e, t) {
      _.exports = (function () {
        "use strict";
        var _ = "minute",
          i = /[+-]\d\d(?::?\d\d)?/g,
          e = /([+-]|\d\d)/g;
        return function (s, t, n) {
          var u = t.prototype;
          (n.utc = function (_) {
            var i = { date: _, utc: !0, args: arguments };
            return new t(i);
          }),
            (u.utc = function (i) {
              var e = n(this.toDate(), { locale: this.$L, utc: !0 });
              return i ? e.add(this.utcOffset(), _) : e;
            }),
            (u.local = function () {
              return n(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var r = u.parse;
          u.parse = function (_) {
            _.utc && (this.$u = !0),
              this.$utils().u(_.$offset) || (this.$offset = _.$offset),
              r.call(this, _);
          };
          var d = u.init;
          u.init = function () {
            if (this.$u) {
              var _ = this.$d;
              (this.$y = _.getUTCFullYear()),
                (this.$M = _.getUTCMonth()),
                (this.$D = _.getUTCDate()),
                (this.$W = _.getUTCDay()),
                (this.$H = _.getUTCHours()),
                (this.$m = _.getUTCMinutes()),
                (this.$s = _.getUTCSeconds()),
                (this.$ms = _.getUTCMilliseconds());
            } else d.call(this);
          };
          var a = u.utcOffset;
          u.utcOffset = function (s, t) {
            var n = this.$utils().u;
            if (n(s))
              return this.$u
                ? 0
                : n(this.$offset)
                ? a.call(this)
                : this.$offset;
            if (
              "string" == typeof s &&
              null ===
                (s = (function (_) {
                  void 0 === _ && (_ = "");
                  var s = _.match(i);
                  if (!s) return null;
                  var t = ("" + s[0]).match(e) || ["-", 0, 0],
                    n = t[0],
                    u = 60 * +t[1] + +t[2];
                  return 0 === u ? 0 : "+" === n ? u : -u;
                })(s))
            )
              return this;
            var u = Math.abs(s) <= 16 ? 60 * s : s,
              r = this;
            if (t) return (r.$offset = u), (r.$u = 0 === s), r;
            if (0 !== s) {
              var d = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((r = this.local().add(u + d, _)).$offset = u),
                (r.$x.$localOffset = d);
            } else r = this.utc();
            return r;
          };
          var m = u.format;
          (u.format = function (_) {
            var i = _ || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return m.call(this, i);
          }),
            (u.valueOf = function () {
              var _ = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || new Date().getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * _;
            }),
            (u.isUTC = function () {
              return !!this.$u;
            }),
            (u.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (u.toString = function () {
              return this.toDate().toUTCString();
            });
          var o = u.toDate;
          u.toDate = function (_) {
            return "s" === _ && this.$offset
              ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : o.call(this);
          };
          var M = u.diff;
          u.diff = function (_, i, e) {
            if (_ && this.$u === _.$u) return M.call(this, _, i, e);
            var s = this.local(),
              t = n(_).local();
            return M.call(s, t, i, e);
          };
        };
      })();
    },
    12: function (_, e, t) {
      _.exports = (function () {
        "use strict";
        var _ = 6e4,
          e = 36e5,
          t = "millisecond",
          i = "second",
          s = "minute",
          u = "hour",
          a = "day",
          n = "week",
          r = "month",
          d = "quarter",
          m = "year",
          o = "date",
          M = "Invalid Date",
          l =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          Y =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          f = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
          },
          L = function (_, e, t) {
            var n = String(_);
            return !n || n.length >= e
              ? _
              : "" + Array(e + 1 - n.length).join(t) + _;
          },
          g = {
            s: L,
            z: function (_) {
              var e = -_.utcOffset(),
                t = Math.abs(e),
                n = Math.floor(t / 60),
                i = t % 60;
              return (e <= 0 ? "+" : "-") + L(n, 2, "0") + ":" + L(i, 2, "0");
            },
            m: function _(e, t) {
              if (e.date() < t.date()) return -_(t, e);
              var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                i = e.clone().add(n, r),
                s = t - i < 0,
                u = e.clone().add(n + (s ? -1 : 1), r);
              return +(-(n + (t - i) / (s ? i - u : u - i)) || 0);
            },
            a: function (_) {
              return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
            },
            p: function (_) {
              return (
                { M: r, y: m, w: n, d: a, D: o, h: u, m: s, s: i, ms: t, Q: d }[
                  _
                ] ||
                String(_ || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (_) {
              return void 0 === _;
            },
          },
          h = "en",
          c = {};
        c[h] = f;
        var p = function (_) {
            return _ instanceof H;
          },
          y = function (_, e, t) {
            var n;
            if (!_) return h;
            if ("string" == typeof _)
              c[_] && (n = _), e && ((c[_] = e), (n = _));
            else {
              var i = _.name;
              (c[i] = _), (n = i);
            }
            return !t && n && (h = n), n || (!t && h);
          },
          D = function (_, e) {
            if (p(_)) return _.clone();
            var t = "object" == typeof e ? e : {};
            return (t.date = _), (t.args = arguments), new H(t);
          },
          k = g;
        (k.l = y),
          (k.i = p),
          (k.w = function (_, e) {
            return D(_, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var H = (function () {
            function f(_) {
              (this.$L = y(_.locale, null, !0)), this.parse(_);
            }
            var L = f.prototype;
            return (
              (L.parse = function (_) {
                (this.$d = (function (_) {
                  var e = _.date,
                    t = _.utc;
                  if (null === e) return new Date(NaN);
                  if (k.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var n = e.match(l);
                    if (n) {
                      var i = n[2] - 1 || 0,
                        s = (n[7] || "0").substring(0, 3);
                      return t
                        ? new Date(
                            Date.UTC(
                              n[1],
                              i,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              s
                            )
                          )
                        : new Date(
                            n[1],
                            i,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            s
                          );
                    }
                  }
                  return new Date(e);
                })(_)),
                  (this.$x = _.x || {}),
                  this.init();
              }),
              (L.init = function () {
                var _ = this.$d;
                (this.$y = _.getFullYear()),
                  (this.$M = _.getMonth()),
                  (this.$D = _.getDate()),
                  (this.$W = _.getDay()),
                  (this.$H = _.getHours()),
                  (this.$m = _.getMinutes()),
                  (this.$s = _.getSeconds()),
                  (this.$ms = _.getMilliseconds());
              }),
              (L.$utils = function () {
                return k;
              }),
              (L.isValid = function () {
                return !(this.$d.toString() === M);
              }),
              (L.isSame = function (_, e) {
                var t = D(_);
                return this.startOf(e) <= t && t <= this.endOf(e);
              }),
              (L.isAfter = function (_, e) {
                return D(_) < this.startOf(e);
              }),
              (L.isBefore = function (_, e) {
                return this.endOf(e) < D(_);
              }),
              (L.$g = function (_, e, t) {
                return k.u(_) ? this[e] : this.set(t, _);
              }),
              (L.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (L.valueOf = function () {
                return this.$d.getTime();
              }),
              (L.startOf = function (_, e) {
                var t = this,
                  d = !!k.u(e) || e,
                  M = k.p(_),
                  l = function (_, e) {
                    var i = k.w(
                      t.$u ? Date.UTC(t.$y, e, _) : new Date(t.$y, e, _),
                      t
                    );
                    return d ? i : i.endOf(a);
                  },
                  Y = function (_, e) {
                    return k.w(
                      t
                        .toDate()
                        [_].apply(
                          t.toDate("s"),
                          (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      t
                    );
                  },
                  f = this.$W,
                  L = this.$M,
                  h = this.$D,
                  g = "set" + (this.$u ? "UTC" : "");
                switch (M) {
                  case m:
                    return d ? l(1, 0) : l(31, 11);
                  case r:
                    return d ? l(1, L) : l(0, L + 1);
                  case n:
                    var c = this.$locale().weekStart || 0,
                      y = (f < c ? f + 7 : f) - c;
                    return l(d ? h - y : h + (6 - y), L);
                  case a:
                  case o:
                    return Y(g + "Hours", 0);
                  case u:
                    return Y(g + "Minutes", 1);
                  case s:
                    return Y(g + "Seconds", 2);
                  case i:
                    return Y(g + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (L.endOf = function (_) {
                return this.startOf(_, !1);
              }),
              (L.$set = function (_, e) {
                var n,
                  d = k.p(_),
                  M = "set" + (this.$u ? "UTC" : ""),
                  l = ((n = {}),
                  (n[a] = M + "Date"),
                  (n[o] = M + "Date"),
                  (n[r] = M + "Month"),
                  (n[m] = M + "FullYear"),
                  (n[u] = M + "Hours"),
                  (n[s] = M + "Minutes"),
                  (n[i] = M + "Seconds"),
                  (n[t] = M + "Milliseconds"),
                  n)[d],
                  Y = d === a ? this.$D + (e - this.$W) : e;
                if (d === r || d === m) {
                  var f = this.clone().set(o, 1);
                  f.$d[l](Y),
                    f.init(),
                    (this.$d = f.set(o, Math.min(this.$D, f.daysInMonth())).$d);
                } else l && this.$d[l](Y);
                return this.init(), this;
              }),
              (L.set = function (_, e) {
                return this.clone().$set(_, e);
              }),
              (L.get = function (_) {
                return this[k.p(_)]();
              }),
              (L.add = function (t, d) {
                var o,
                  M = this;
                t = Number(t);
                var l = k.p(d),
                  Y = function (_) {
                    var e = D(M);
                    return k.w(e.date(e.date() + Math.round(_ * t)), M);
                  };
                if (l === r) return this.set(r, this.$M + t);
                if (l === m) return this.set(m, this.$y + t);
                if (l === a) return Y(1);
                if (l === n) return Y(7);
                var f =
                    ((o = {}), (o[s] = _), (o[u] = e), (o[i] = 1e3), o)[l] || 1,
                  L = this.$d.getTime() + t * f;
                return k.w(L, this);
              }),
              (L.subtract = function (_, e) {
                return this.add(-1 * _, e);
              }),
              (L.format = function (_) {
                var e = this,
                  t = this.$locale();
                if (!this.isValid()) return t.invalidDate || M;
                var n = _ || "YYYY-MM-DDTHH:mm:ssZ",
                  i = k.z(this),
                  s = this.$H,
                  u = this.$m,
                  a = this.$M,
                  r = t.weekdays,
                  d = t.months,
                  m = function (_, t, i, s) {
                    return (_ && (_[t] || _(e, n))) || i[t].substr(0, s);
                  },
                  o = function (_) {
                    return k.s(s % 12 || 12, _, "0");
                  },
                  l =
                    t.meridiem ||
                    function (_, e, t) {
                      var n = _ < 12 ? "AM" : "PM";
                      return t ? n.toLowerCase() : n;
                    },
                  f = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: k.s(a + 1, 2, "0"),
                    MMM: m(t.monthsShort, a, d, 3),
                    MMMM: m(d, a),
                    D: this.$D,
                    DD: k.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: m(t.weekdaysMin, this.$W, r, 2),
                    ddd: m(t.weekdaysShort, this.$W, r, 3),
                    dddd: r[this.$W],
                    H: String(s),
                    HH: k.s(s, 2, "0"),
                    h: o(1),
                    hh: o(2),
                    a: l(s, u, !0),
                    A: l(s, u, !1),
                    m: String(u),
                    mm: k.s(u, 2, "0"),
                    s: String(this.$s),
                    ss: k.s(this.$s, 2, "0"),
                    SSS: k.s(this.$ms, 3, "0"),
                    Z: i,
                  };
                return n.replace(Y, function (_, e) {
                  return e || f[_] || i.replace(":", "");
                });
              }),
              (L.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (L.diff = function (t, o, M) {
                var l,
                  Y = k.p(o),
                  f = D(t),
                  L = (f.utcOffset() - this.utcOffset()) * _,
                  g = this - f,
                  h = k.m(this, f);
                return (
                  (h =
                    ((l = {}),
                    (l[m] = h / 12),
                    (l[r] = h),
                    (l[d] = h / 3),
                    (l[n] = (g - L) / 6048e5),
                    (l[a] = (g - L) / 864e5),
                    (l[u] = g / e),
                    (l[s] = g / _),
                    (l[i] = g / 1e3),
                    l)[Y] || g),
                  M ? h : k.a(h)
                );
              }),
              (L.daysInMonth = function () {
                return this.endOf(r).$D;
              }),
              (L.$locale = function () {
                return c[this.$L];
              }),
              (L.locale = function (_, e) {
                if (!_) return this.$L;
                var t = this.clone(),
                  n = y(_, e, !0);
                return n && (t.$L = n), t;
              }),
              (L.clone = function () {
                return k.w(this.$d, this);
              }),
              (L.toDate = function () {
                return new Date(this.valueOf());
              }),
              (L.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (L.toISOString = function () {
                return this.$d.toISOString();
              }),
              (L.toString = function () {
                return this.$d.toUTCString();
              }),
              f
            );
          })(),
          b = H.prototype;
        return (
          (D.prototype = b),
          [
            ["$ms", t],
            ["$s", i],
            ["$m", s],
            ["$H", u],
            ["$W", a],
            ["$M", r],
            ["$y", m],
            ["$D", o],
          ].forEach(function (_) {
            b[_[1]] = function (e) {
              return this.$g(e, _[0], _[1]);
            };
          }),
          (D.extend = function (_, e) {
            return _.$i || (_(e, H, D), (_.$i = !0)), D;
          }),
          (D.locale = y),
          (D.isDayjs = p),
          (D.unix = function (_) {
            return D(1e3 * _);
          }),
          (D.en = c[h]),
          (D.Ls = c),
          (D.p = {}),
          D
        );
      })();
    },
    1699: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "af",
            weekdays:
              "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
                "_"
              ),
            months:
              "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "oor %s",
              past: "%s gelede",
              s: "'n paar sekondes",
              m: "'n minuut",
              mm: "%d minute",
              h: "'n uur",
              hh: "%d ure",
              d: "'n dag",
              dd: "%d dae",
              M: "'n maand",
              MM: "%d maande",
              y: "'n jaar",
              yy: "%d jaar",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1700: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "am",
            weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"),
            weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"),
            weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"),
            months:
              "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split(
                "_"
              ),
            monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split(
              "_"
            ),
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
              future: "በ%s",
              past: "%s በፊት",
              s: "ጥቂት ሰከንዶች",
              m: "አንድ ደቂቃ",
              mm: "%d ደቂቃዎች",
              h: "አንድ ሰዓት",
              hh: "%d ሰዓታት",
              d: "አንድ ቀን",
              dd: "%d ቀናት",
              M: "አንድ ወር",
              MM: "%d ወራት",
              y: "አንድ ዓመት",
              yy: "%d ዓመታት",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "MMMM D ፣ YYYY",
              LLL: "MMMM D ፣ YYYY HH:mm",
              LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm",
            },
            ordinal: function (_) {
              return _ + "ኛ";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1701: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-dz",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1702: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-kw",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1703: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-ly",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekStart: 6,
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            ordinal: function (_) {
              return _;
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1704: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-ma",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekStart: 6,
            weekdaysShort: "احد_إثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1705: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-sa",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1706: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ar-tn",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            months:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            monthsShort:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiem: function (_) {
              return _ > 12 ? "ص" : "م";
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1707: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t =
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_"
            ),
          n = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          r = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          },
          d = {
            name: "ar",
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            months: t,
            monthsShort: t,
            weekStart: 6,
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: "ثانية واحدة",
              m: "دقيقة واحدة",
              mm: "%d دقائق",
              h: "ساعة واحدة",
              hh: "%d ساعات",
              d: "يوم واحد",
              dd: "%d أيام",
              M: "شهر واحد",
              MM: "%d أشهر",
              y: "عام واحد",
              yy: "%d أعوام",
            },
            preparse: function (_) {
              return _.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (_) {
                return r[_];
              }).replace(/،/g, ",");
            },
            postformat: function (_) {
              return _.replace(/\d/g, function (_) {
                return n[_];
              }).replace(/,/g, "،");
            },
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
          };
        return e.default.locale(d, null, !0), d;
      })(t(12));
    },
    1708: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "az",
            weekdays:
              "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
                "_"
              ),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            months:
              "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
                "_"
              ),
            monthsShort:
              "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., H:mm",
              LLLL: "dddd, D MMMM YYYY г., H:mm",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "bir neçə saniyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il",
            },
            ordinal: function (a) {
              return a;
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1709: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "be",
            weekdays:
              "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
                "_"
              ),
            months:
              "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            monthsShort:
              "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
                "_"
              ),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., HH:mm",
              LLLL: "dddd, D MMMM YYYY г., HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1710: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "bg",
            weekdays:
              "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split(
                "_"
              ),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            months:
              "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort:
              "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekStart: 1,
            ordinal: function (_) {
              var e = _ % 100;
              if (e > 10 && e < 20) return _ + "-ти";
              var t = _ % 10;
              return 1 === t
                ? _ + "-ви"
                : 2 === t
                ? _ + "-ри"
                : 7 === t || 8 === t
                ? _ + "-ми"
                : _ + "-ти";
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            relativeTime: {
              future: "след %s",
              past: "преди %s",
              s: "няколко секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              M: "месец",
              MM: "%d месеца",
              y: "година",
              yy: "%d години",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1711: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "bi",
            weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split(
              "_"
            ),
            months:
              "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"),
            monthsShort:
              "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"),
            weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "lo %s",
              past: "%s bifo",
              s: "sam seken",
              m: "wan minit",
              mm: "%d minit",
              h: "wan haoa",
              hh: "%d haoa",
              d: "wan dei",
              dd: "%d dei",
              M: "wan manis",
              MM: "%d manis",
              y: "wan yia",
              yy: "%d yia",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1712: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "bm",
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            months:
              "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
              "_"
            ),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "MMMM [tile] D [san] YYYY",
              LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
              LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            },
            relativeTime: {
              future: "%s kɔnɔ",
              past: "a bɛ %s bɔ",
              s: "sanga dama dama",
              m: "miniti kelen",
              mm: "miniti %d",
              h: "lɛrɛ kelen",
              hh: "lɛrɛ %d",
              d: "tile kelen",
              dd: "tile %d",
              M: "kalo kelen",
              MM: "kalo %d",
              y: "san kelen",
              yy: "san %d",
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1713: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০",
          },
          n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0",
          },
          r = {
            name: "bn",
            weekdays:
              "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
                "_"
              ),
            months:
              "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
                "_"
              ),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            monthsShort:
              "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
                "_"
              ),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            preparse: function (_) {
              return _.replace(/[১২৩৪৫৬৭৮৯০]/g, function (_) {
                return n[_];
              });
            },
            postformat: function (_) {
              return _.replace(/\d/g, function (_) {
                return t[_];
              });
            },
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর",
            },
          };
        return e.default.locale(r, null, !0), r;
      })(t(12));
    },
    1714: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "bo",
            weekdays:
              "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
                "_"
              ),
            months:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            weekdaysShort:
              "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            monthsShort:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            weekdaysMin:
              "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1715: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var u = (function (_) {
          return _ && "object" == typeof _ && "default" in _
            ? _
            : { default: _ };
        })(_);
        function e(_, e, u) {
          return (
            _ +
            " " +
            (function (_, e) {
              return 2 === e
                ? (function (_) {
                    return (
                      { m: "v", b: "v", d: "z" }[_.charAt(0)] + _.substring(1)
                    );
                  })(_)
                : _;
            })({ mm: "munutenn", MM: "miz", dd: "devezh" }[u], _)
          );
        }
        var t = {
          name: "br",
          weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
          months:
            "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
              "_"
            ),
          weekStart: 1,
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
            "_"
          ),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A",
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s ʼzo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: e,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: e,
            M: "ur miz",
            MM: e,
            y: "ur bloaz",
            yy: function (_) {
              switch (
                (function _(e) {
                  return e > 9 ? _(e % 10) : e;
                })(_)
              ) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                  return _ + " bloaz";
                default:
                  return _ + " vloaz";
              }
            },
          },
          meridiem: function (_) {
            return _ < 12 ? "a.m." : "g.m.";
          },
        };
        return u.default.locale(t, null, !0), t;
      })(t(12));
    },
    1716: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "bs",
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            months:
              "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1717: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ca",
            weekdays:
              "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split(
                "_"
              ),
            weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            months:
              "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split(
                "_"
              ),
            monthsShort:
              "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split(
                "_"
              ),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              LLL: "D MMMM [de] YYYY [a les] H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY, H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "uns segons",
              m: "un minut",
              mm: "%d minuts",
              h: "una hora",
              hh: "%d hores",
              d: "un dia",
              dd: "%d dies",
              M: "un mes",
              MM: "%d mesos",
              y: "un any",
              yy: "%d anys",
            },
            ordinal: function (_) {
              return (
                _ +
                (1 === _ || 3 === _ ? "r" : 2 === _ ? "n" : 4 === _ ? "t" : "è")
              );
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1718: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
          return _ && "object" == typeof _ && "default" in _
            ? _
            : { default: _ };
        })(_);
        function s(_) {
          return _ > 1 && _ < 5 && 1 != ~~(_ / 10);
        }
        function t(_, e, t, n) {
          var r = _ + " ";
          switch (t) {
            case "s":
              return e || n ? "pár sekund" : "pár sekundami";
            case "m":
              return e ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
              return e || n ? r + (s(_) ? "minuty" : "minut") : r + "minutami";
            case "h":
              return e ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
              return e || n ? r + (s(_) ? "hodiny" : "hodin") : r + "hodinami";
            case "d":
              return e || n ? "den" : "dnem";
            case "dd":
              return e || n ? r + (s(_) ? "dny" : "dní") : r + "dny";
            case "M":
              return e || n ? "měsíc" : "měsícem";
            case "MM":
              return e || n ? r + (s(_) ? "měsíce" : "měsíců") : r + "měsíci";
            case "y":
              return e || n ? "rok" : "rokem";
            case "yy":
              return e || n ? r + (s(_) ? "roky" : "let") : r + "lety";
          }
        }
        var n = {
          name: "cs",
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          months:
            "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
              "_"
            ),
          monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split(
            "_"
          ),
          weekStart: 1,
          yearStart: 4,
          ordinal: function (_) {
            return _ + ".";
          },
          formats: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
        };
        return e.default.locale(n, null, !0), n;
      })(t(12));
    },
    1719: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "cv",
            weekdays:
              "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
                "_"
              ),
            months:
              "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            monthsShort:
              "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
              LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
              LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1720: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "cy",
            weekdays:
              "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
                "_"
              ),
            months:
              "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            monthsShort:
              "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "mewn %s",
              past: "%s yn ôl",
              s: "ychydig eiliadau",
              m: "munud",
              mm: "%d munud",
              h: "awr",
              hh: "%d awr",
              d: "diwrnod",
              dd: "%d diwrnod",
              M: "mis",
              MM: "%d mis",
              y: "blwyddyn",
              yy: "%d flynedd",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1721: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "da",
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"),
            weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"),
            months:
              "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split(
                "_"
              ),
            weekStart: 1,
            ordinal: function (_) {
              return _ + ".";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "få sekunder",
              m: "et minut",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dage",
              M: "en måned",
              MM: "%d måneder",
              y: "et år",
              yy: "%d år",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1722: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          i = {
            name: "de-at",
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            months:
              "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            ordinal: function (_) {
              return _ + ".";
            },
            weekStart: 1,
            formats: {
              LTS: "HH:mm:ss",
              LT: "HH:mm",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              m: "einer Minute",
              mm: "%d Minuten",
              h: "einer Stunde",
              hh: "%d Stunden",
              d: "einem Tag",
              dd: "%d Tagen",
              M: "einem Monat",
              MM: "%d Monaten",
              y: "einem Jahr",
              yy: "%d Jahren",
            },
          };
        return e.default.locale(i, null, !0), i;
      })(t(12));
    },
    1723: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "de-ch",
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            months:
              "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            monthsShort:
              "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1724: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            s: "ein paar Sekunden",
            m: ["eine Minute", "einer Minute"],
            mm: "%d Minuten",
            h: ["eine Stunde", "einer Stunde"],
            hh: "%d Stunden",
            d: ["ein Tag", "einem Tag"],
            dd: ["%d Tage", "%d Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: ["%d Monate", "%d Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: ["%d Jahre", "%d Jahren"],
          };
        function i(_, e, t) {
          var i = a[t];
          return Array.isArray(i) && (i = i[e ? 0 : 1]), i.replace("%d", _);
        }
        var t = {
          name: "de",
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_"
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          months:
            "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez".split("_"),
          ordinal: function (_) {
            return _ + ".";
          },
          weekStart: 1,
          yearStart: 4,
          formats: {
            LTS: "HH:mm:ss",
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
        };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1725: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "dv",
            weekdays:
              "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split(
                "_"
              ),
            months:
              "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split(
                "_"
              ),
            weekStart: 7,
            weekdaysShort:
              "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split(
                "_"
              ),
            monthsShort:
              "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split(
                "_"
              ),
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/M/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "ތެރޭގައި %s",
              past: "ކުރިން %s",
              s: "ސިކުންތުކޮޅެއް",
              m: "މިނިޓެއް",
              mm: "މިނިޓު %d",
              h: "ގަޑިއިރެއް",
              hh: "ގަޑިއިރު %d",
              d: "ދުވަހެއް",
              dd: "ދުވަސް %d",
              M: "މަހެއް",
              MM: "މަސް %d",
              y: "އަހަރެއް",
              yy: "އަހަރު %d",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1726: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "el",
            weekdays:
              "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split(
                "_"
              ),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            months:
              "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
                "_"
              ),
            monthsShort:
              "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),
            ordinal: function (_) {
              return _;
            },
            weekStart: 1,
            relativeTime: {
              future: "σε %s",
              past: "πριν %s",
              s: "μερικά δευτερόλεπτα",
              m: "ένα λεπτό",
              mm: "%d λεπτά",
              h: "μία ώρα",
              hh: "%d ώρες",
              d: "μία μέρα",
              dd: "%d μέρες",
              M: "ένα μήνα",
              MM: "%d μήνες",
              y: "ένα χρόνο",
              yy: "%d χρόνια",
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1727: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-au",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1728: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-ca",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "YYYY-MM-DD",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1729: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-gb",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            ordinal: function (_) {
              var a = ["th", "st", "nd", "rd"],
                e = _ % 100;
              return "[" + _ + (a[(e - 20) % 10] || a[e] || a[0]) + "]";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1730: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-ie",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1731: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-il",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1732: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-in",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            ordinal: function (_) {
              var a = ["th", "st", "nd", "rd"],
                e = _ % 100;
              return "[" + _ + (a[(e - 20) % 10] || a[e] || a[0]) + "]";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1733: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-nz",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              var a = ["th", "st", "nd", "rd"],
                e = _ % 100;
              return "[" + _ + (a[(e - 20) % 10] || a[e] || a[0]) + "]";
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1734: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "en-sg",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1735: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "en-tt",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            ordinal: function (_) {
              var e = ["th", "st", "nd", "rd"],
                a = _ % 100;
              return "[" + _ + (e[(a - 20) % 10] || e[a] || e[0]) + "]";
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1736: function (_, e, t) {
      _.exports = (function () {
        "use strict";
        return {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
        };
      })();
    },
    1737: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "eo",
            weekdays:
              "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            months:
              "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D[-a de] MMMM, YYYY",
              LLL: "D[-a de] MMMM, YYYY HH:mm",
              LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm",
            },
            relativeTime: {
              future: "post %s",
              past: "antaŭ %s",
              s: "sekundoj",
              m: "minuto",
              mm: "%d minutoj",
              h: "horo",
              hh: "%d horoj",
              d: "tago",
              dd: "%d tagoj",
              M: "monato",
              MM: "%d monatoj",
              y: "jaro",
              yy: "%d jaroj",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1738: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var s = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "es-do",
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort:
              "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekStart: 1,
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            ordinal: function (_) {
              return _ + "º";
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
          };
        return s.default.locale(e, null, !0), e;
      })(t(12));
    },
    1739: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var s = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "es-pr",
            monthsShort:
              "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            weekStart: 1,
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            ordinal: function (_) {
              return _ + "º";
            },
          };
        return s.default.locale(e, null, !0), e;
      })(t(12));
    },
    1740: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "es-us",
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort:
              "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            ordinal: function (_) {
              return _ + "º";
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1741: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var s = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "es",
            monthsShort:
              "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            ordinal: function (_) {
              return _ + "º";
            },
          };
        return s.default.locale(e, null, !0), e;
      })(t(12));
    },
    1742: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
          return _ && "object" == typeof _ && "default" in _
            ? _
            : { default: _ };
        })(_);
        function u(_, a, e, u) {
          var s = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: ["%d minuti", "%d minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: ["%d tunni", "%d tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: ["%d kuu", "%d kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: ["%d aasta", "%d aastat"],
          };
          return a
            ? (s[e][2] ? s[e][2] : s[e][1]).replace("%d", _)
            : (u ? s[e][0] : s[e][1]).replace("%d", _);
        }
        var s = {
          name: "et",
          weekdays:
            "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
              "_"
            ),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          months:
            "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
              "_"
            ),
          monthsShort:
            "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
              "_"
            ),
          ordinal: function (_) {
            return _ + ".";
          },
          weekStart: 1,
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: u,
            m: u,
            mm: u,
            h: u,
            hh: u,
            d: u,
            dd: "%d päeva",
            M: u,
            MM: u,
            y: u,
            yy: u,
          },
          formats: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
        };
        return e.default.locale(s, null, !0), s;
      })(t(12));
    },
    1743: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "eu",
            weekdays:
              "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
                "_"
              ),
            months:
              "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            monthsShort:
              "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
                "_"
              ),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] HH:mm",
              llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
            },
            relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte",
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1744: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "fa",
            weekdays:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekStart: 6,
            months:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            monthsShort:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چند ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1745: function (_, e, t) {
      _.exports = (function (u) {
        "use strict";
        var _ = (function (u) {
          return u && "object" == typeof u && "default" in u
            ? u
            : { default: u };
        })(u);
        function e(u, _, e, t) {
          var i = {
              s: "muutama sekunti",
              m: "minuutti",
              mm: "%d minuuttia",
              h: "tunti",
              hh: "%d tuntia",
              d: "päivä",
              dd: "%d päivää",
              M: "kuukausi",
              MM: "%d kuukautta",
              y: "vuosi",
              yy: "%d vuotta",
              numbers:
                "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split(
                  "_"
                ),
            },
            a = {
              s: "muutaman sekunnin",
              m: "minuutin",
              mm: "%d minuutin",
              h: "tunnin",
              hh: "%d tunnin",
              d: "päivän",
              dd: "%d päivän",
              M: "kuukauden",
              MM: "%d kuukauden",
              y: "vuoden",
              yy: "%d vuoden",
              numbers:
                "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split(
                  "_"
                ),
            },
            s = t && !_ ? a : i,
            n = s[e];
          return u < 10 ? n.replace("%d", s.numbers[u]) : n.replace("%d", u);
        }
        var i = {
          name: "fi",
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_"
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_"
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
              "_"
            ),
          ordinal: function (u) {
            return u + ".";
          },
          weekStart: 1,
          yearStart: 4,
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: e,
            m: e,
            mm: e,
            h: e,
            hh: e,
            d: e,
            dd: e,
            M: e,
            MM: e,
            y: e,
            yy: e,
          },
          formats: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM[ta] YYYY",
            LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "D. MMM YYYY",
            lll: "D. MMM YYYY, [klo] HH.mm",
            llll: "ddd, D. MMM YYYY, [klo] HH.mm",
          },
        };
        return _.default.locale(i, null, !0), i;
      })(t(12));
    },
    1746: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "fo",
            weekdays:
              "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
                "_"
              ),
            months:
              "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            monthsShort:
              "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D. MMMM, YYYY HH:mm",
            },
            relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              m: "ein minuttur",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaður",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1747: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "fr-ca",
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
          };
        return i.default.locale(e, null, !0), e;
      })(t(12));
    },
    1748: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "fr-ch",
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
          };
        return i.default.locale(e, null, !0), e;
      })(t(12));
    },
    1749: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          i = {
            name: "fr",
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            ordinal: function (_) {
              return _ + (1 === _ ? "er" : "");
            },
          };
        return e.default.locale(i, null, !0), i;
      })(t(12));
    },
    1750: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "fy",
            weekdays:
              "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
                "_"
              ),
            months:
              "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren",
            },
          };
        return i.default.locale(e, null, !0), e;
      })(t(12));
    },
    1751: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var i = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          _ = {
            name: "ga",
            weekdays:
              "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split(
                "_"
              ),
            months:
              "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"),
            monthsShort:
              "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split(
                "_"
              ),
            weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "i %s",
              past: "%s ó shin",
              s: "cúpla soicind",
              m: "nóiméad",
              mm: "%d nóiméad",
              h: "uair an chloig",
              hh: "%d uair an chloig",
              d: "lá",
              dd: "%d lá",
              M: "mí",
              MM: "%d mí",
              y: "bliain",
              yy: "%d bliain",
            },
          };
        return i.default.locale(_, null, !0), _;
      })(t(12));
    },
    1752: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "gd",
            weekdays:
              "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split(
                "_"
              ),
            months:
              "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"),
            monthsShort:
              "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split(
                "_"
              ),
            weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna",
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1753: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "gl",
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
              "_"
            ),
            months:
              "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            monthsShort:
              "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
                "_"
              ),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1754: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "gom-latn",
            weekdays:
              "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            months:
              "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            monthsShort:
              "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
                "_"
              ),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm [vazta]",
              LTS: "A h:mm:ss [vazta]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [vazta]",
              LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
              llll: "ddd, D MMM YYYY, A h:mm [vazta]",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1755: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "gu",
            weekdays:
              "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
                "_"
              ),
            months:
              "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
                "_"
              ),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            monthsShort:
              "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
                "_"
              ),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm વાગ્યે",
              LTS: "A h:mm:ss વાગ્યે",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm વાગ્યે",
              LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
            },
            relativeTime: {
              future: "%s મા",
              past: "%s પેહલા",
              s: "અમુક પળો",
              m: "એક મિનિટ",
              mm: "%d મિનિટ",
              h: "એક કલાક",
              hh: "%d કલાક",
              d: "એક દિવસ",
              dd: "%d દિવસ",
              M: "એક મહિનો",
              MM: "%d મહિનો",
              y: "એક વર્ષ",
              yy: "%d વર્ષ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1756: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: "%d שעות",
            hh2: "שעתיים",
            d: "יום",
            dd: "%d ימים",
            dd2: "יומיים",
            M: "חודש",
            MM: "%d חודשים",
            MM2: "חודשיים",
            y: "שנה",
            yy: "%d שנים",
            yy2: "שנתיים",
          };
        function n(_, e, n) {
          return (t[n + (2 === _ ? "2" : "")] || t[n]).replace("%d", _);
        }
        var r = {
          name: "he",
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),
          months:
            "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
              "_"
            ),
          monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split(
            "_"
          ),
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          ordinal: function (_) {
            return _;
          },
          format: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
        };
        return e.default.locale(r, null, !0), r;
      })(t(12));
    },
    1757: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "hi",
            weekdays:
              "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            months:
              "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                "_"
              ),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            monthsShort:
              "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
                "_"
              ),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1758: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          s =
            "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
              "_"
            ),
          t =
            "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
              "_"
            ),
          n = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,
          r = function (_, a) {
            return n.test(a) ? s[_.month()] : t[_.month()];
          };
        (r.s = t), (r.f = s);
        var i = {
          name: "hr",
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          months: r,
          monthsShort:
            "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
              "_"
            ),
          weekStart: 1,
          formats: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "sekunda",
            m: "minuta",
            mm: "%d minuta",
            h: "sat",
            hh: "%d sati",
            d: "dan",
            dd: "%d dana",
            M: "mjesec",
            MM: "%d mjeseci",
            y: "godina",
            yy: "%d godine",
          },
          ordinal: function (_) {
            return _ + ".";
          },
        };
        return e.default.locale(i, null, !0), i;
      })(t(12));
    },
    1759: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "ht",
            weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split(
              "_"
            ),
            months:
              "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split(
                "_"
              ),
            weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"),
            monthsShort:
              "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split(
                "_"
              ),
            weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "nan %s",
              past: "sa gen %s",
              s: "kèk segond",
              m: "yon minit",
              mm: "%d minit",
              h: "inèdtan",
              hh: "%d zè",
              d: "yon jou",
              dd: "%d jou",
              M: "yon mwa",
              MM: "%d mwa",
              y: "yon ane",
              yy: "%d ane",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1760: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "hu",
            weekdays:
              "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            months:
              "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            ordinal: function (_) {
              return _ + ".";
            },
            weekStart: 1,
            relativeTime: {
              future: "%s múlva",
              past: "%s",
              s: function (_, e, t, n) {
                return "néhány másodperc" + (n || e ? "" : "e");
              },
              m: function (_, e, t, n) {
                return "egy perc" + (n || e ? "" : "e");
              },
              mm: function (_, e, t, n) {
                return _ + " perc" + (n || e ? "" : "e");
              },
              h: function (_, e, t, n) {
                return "egy " + (n || e ? "óra" : "órája");
              },
              hh: function (_, e, t, n) {
                return _ + " " + (n || e ? "óra" : "órája");
              },
              d: function (_, e, t, n) {
                return "egy " + (n || e ? "nap" : "napja");
              },
              dd: function (_, e, t, n) {
                return _ + " " + (n || e ? "nap" : "napja");
              },
              M: function (_, e, t, n) {
                return "egy " + (n || e ? "hónap" : "hónapja");
              },
              MM: function (_, e, t, n) {
                return _ + " " + (n || e ? "hónap" : "hónapja");
              },
              y: function (_, e, t, n) {
                return "egy " + (n || e ? "év" : "éve");
              },
              yy: function (_, e, t, n) {
                return _ + " " + (n || e ? "év" : "éve");
              },
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D. H:mm",
              LLLL: "YYYY. MMMM D., dddd H:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1761: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "hy-am",
            weekdays:
              "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
                "_"
              ),
            months:
              "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            monthsShort:
              "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., HH:mm",
              LLLL: "dddd, D MMMM YYYY թ., HH:mm",
            },
            relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1762: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "id",
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
                "_"
              ),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            weekStart: 1,
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            ordinal: function (_) {
              return _ + ".";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1763: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "is",
            weekdays:
              "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
                "_"
              ),
            months:
              "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            monthsShort:
              "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1764: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "it-ch",
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1765: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "it",
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            weekStart: 1,
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "tra %s",
              past: "%s fa",
              s: "qualche secondo",
              m: "un minuto",
              mm: "%d minuti",
              h: "un' ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            ordinal: function (_) {
              return _ + "º";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1766: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ja",
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
              "_"
            ),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function (_) {
              return _ + "日";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日 dddd HH:mm",
              l: "YYYY/MM/DD",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日(ddd) HH:mm",
            },
            meridiem: function (_) {
              return _ < 12 ? "午前" : "午後";
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1767: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "jv",
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            relativeTime: {
              future: "wonten ing %s",
              past: "%s ingkang kepengker",
              s: "sawetawis detik",
              m: "setunggal menit",
              mm: "%d menit",
              h: "setunggal jam",
              hh: "%d jam",
              d: "sedinten",
              dd: "%d dinten",
              M: "sewulan",
              MM: "%d wulan",
              y: "setaun",
              yy: "%d taun",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1768: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ka",
            weekdays:
              "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                "_"
              ),
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            months:
              "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
                "_"
              ),
            monthsShort:
              "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekStart: 1,
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "%s შემდეგ",
              past: "%s წინ",
              s: "წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათის",
              d: "დღეს",
              dd: "%d დღის განმავლობაში",
              M: "თვის",
              MM: "%d თვის",
              y: "წელი",
              yy: "%d წლის",
            },
            ordinal: function (_) {
              return _;
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1769: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "kk",
            weekdays:
              "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
                "_"
              ),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            months:
              "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
                "_"
              ),
            monthsShort:
              "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekStart: 1,
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл",
            },
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1770: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "km",
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
              "_"
            ),
            months:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            monthsShort:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1771: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "kn",
            weekdays:
              "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
                "_"
              ),
            months:
              "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
                "_"
              ),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            monthsShort:
              "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
                "_"
              ),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            relativeTime: {
              future: "%s ನಂತರ",
              past: "%s ಹಿಂದೆ",
              s: "ಕೆಲವು ಕ್ಷಣಗಳು",
              m: "ಒಂದು ನಿಮಿಷ",
              mm: "%d ನಿಮಿಷ",
              h: "ಒಂದು ಗಂಟೆ",
              hh: "%d ಗಂಟೆ",
              d: "ಒಂದು ದಿನ",
              dd: "%d ದಿನ",
              M: "ಒಂದು ತಿಂಗಳು",
              MM: "%d ತಿಂಗಳು",
              y: "ಒಂದು ವರ್ಷ",
              yy: "%d ವರ್ಷ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1772: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ko",
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
              "_"
            ),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
              "_"
            ),
            monthsShort:
              "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 A h:mm",
              LLLL: "YYYY년 MMMM D일 dddd A h:mm",
              l: "YYYY.MM.DD.",
              ll: "YYYY년 MMMM D일",
              lll: "YYYY년 MMMM D일 A h:mm",
              llll: "YYYY년 MMMM D일 dddd A h:mm",
            },
            meridiem: function (_) {
              return _ < 12 ? "오전" : "오후";
            },
            relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇 초",
              m: "1분",
              mm: "%d분",
              h: "한 시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한 달",
              MM: "%d달",
              y: "일 년",
              yy: "%d년",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1773: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ku",
            weekdays:
              "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            months:
              "کانونی دووەم_شوبات_ئازار_نیسان_ئایار_حوزەیران_تەمموز_ئاب_ئەیلوول_تشرینی یەكەم_تشرینی دووەم_كانونی یەکەم".split(
                "_"
              ),
            weekStart: 6,
            weekdaysShort:
              "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            monthsShort:
              "کانونی دووەم_شوبات_ئازار_نیسان_ئایار_حوزەیران_تەمموز_ئاب_ئەیلوول_تشرینی یەكەم_تشرینی دووەم_كانونی یەکەم".split(
                "_"
              ),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "له‌ %s",
              past: "%s",
              s: "چه‌ند چركه‌یه‌ك",
              m: "یه‌ك خوله‌ك",
              mm: "%d خوله‌ك",
              h: "یه‌ك كاتژمێر",
              hh: "%d كاتژمێر",
              d: "یه‌ك ڕۆژ",
              dd: "%d ڕۆژ",
              M: "یه‌ك مانگ",
              MM: "%d مانگ",
              y: "یه‌ك ساڵ",
              yy: "%d ساڵ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1774: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ky",
            weekdays:
              "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
                "_"
              ),
            months:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            monthsShort:
              "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s ичинде",
              past: "%s мурун",
              s: "бирнече секунд",
              m: "бир мүнөт",
              mm: "%d мүнөт",
              h: "бир саат",
              hh: "%d саат",
              d: "бир күн",
              dd: "%d күн",
              M: "бир ай",
              MM: "%d ай",
              y: "бир жыл",
              yy: "%d жыл",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1775: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "lb",
            weekdays:
              "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
                "_"
              ),
            months:
              "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            monthsShort:
              "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
                "_"
              ),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm [Auer]",
              LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1776: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "lo",
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            months:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            monthsShort:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "ວັນdddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "ອີກ %s",
              past: "%sຜ່ານມາ",
              s: "ບໍ່ເທົ່າໃດວິນາທີ",
              m: "1 ນາທີ",
              mm: "%d ນາທີ",
              h: "1 ຊົ່ວໂມງ",
              hh: "%d ຊົ່ວໂມງ",
              d: "1 ມື້",
              dd: "%d ມື້",
              M: "1 ເດືອນ",
              MM: "%d ເດືອນ",
              y: "1 ປີ",
              yy: "%d ປີ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1777: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e =
            "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
              "_"
            ),
          a =
            "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
              "_"
            ),
          t = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          n = function (_, s) {
            return t.test(s) ? e[_.month()] : a[_.month()];
          };
        (n.s = a), (n.f = e);
        var r = {
          name: "lt",
          weekdays:
            "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
              "_"
            ),
          weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"),
          weekdaysMin: "s_p_a_t_k_pn_š".split("_"),
          months: n,
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_"
          ),
          ordinal: function (_) {
            return _ + ".";
          },
          weekStart: 1,
          relativeTime: {
            future: "už %s",
            past: "prieš %s",
            s: "kelias sekundes",
            m: "minutę",
            mm: "%d minutes",
            h: "valandą",
            hh: "%d valandas",
            d: "dieną",
            dd: "%d dienas",
            M: "menesį",
            MM: "%d mėnesius",
            y: "metus",
            yy: "%d metus",
          },
          format: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
          formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
        };
        return i.default.locale(r, null, !0), r;
      })(t(12));
    },
    1778: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "lv",
            weekdays:
              "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
                "_"
              ),
            months:
              "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            monthsShort:
              "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY.",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, HH:mm",
              LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
            },
            relativeTime: {
              future: "pēc %s",
              past: "pirms %s",
              s: "dažām sekundēm",
              m: "minūtes",
              mm: "%d minūtēm",
              h: "stundas",
              hh: "%d stundām",
              d: "dienas",
              dd: "%d dienām",
              M: "mēneša",
              MM: "%d mēnešiem",
              y: "gada",
              yy: "%d gadiem",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1779: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "me",
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
                "_"
              ),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1780: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "mi",
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
              "_"
            ),
            months:
              "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            monthsShort:
              "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
                "_"
              ),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [i] HH:mm",
              LLLL: "dddd, D MMMM YYYY [i] HH:mm",
            },
            relativeTime: {
              future: "i roto i %s",
              past: "%s i mua",
              s: "te hēkona ruarua",
              m: "he meneti",
              mm: "%d meneti",
              h: "te haora",
              hh: "%d haora",
              d: "he ra",
              dd: "%d ra",
              M: "he marama",
              MM: "%d marama",
              y: "he tau",
              yy: "%d tau",
            },
          };
        return i.default.locale(e, null, !0), e;
      })(t(12));
    },
    1781: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "mk",
            weekdays:
              "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
                "_"
              ),
            months:
              "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            monthsShort:
              "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            relativeTime: {
              future: "после %s",
              past: "пред %s",
              s: "неколку секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              M: "месец",
              MM: "%d месеци",
              y: "година",
              yy: "%d години",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1782: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ml",
            weekdays:
              "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
                "_"
              ),
            months:
              "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
                "_"
              ),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split(
              "_"
            ),
            monthsShort:
              "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
                "_"
              ),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm -നു",
              LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
            },
            relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1783: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "mn",
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            months:
              "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
                "_"
              ),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            monthsShort:
              "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
                "_"
              ),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY оны MMMMын D",
              LLL: "YYYY оны MMMMын D HH:mm",
              LLLL: "dddd, YYYY оны MMMMын D HH:mm",
            },
            relativeTime: {
              future: "%s",
              past: "%s",
              s: "саяхан",
              m: "м",
              mm: "%dм",
              h: "1ц",
              hh: "%dц",
              d: "1ө",
              dd: "%dө",
              M: "1с",
              MM: "%dс",
              y: "1ж",
              yy: "%dж",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1784: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "mr",
            weekdays:
              "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            months:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_"
              ),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            monthsShort:
              "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm वाजता",
              LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1785: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ms-my",
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1786: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          s = {
            name: "ms",
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekStart: 1,
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH.mm",
              LLLL: "dddd, D MMMM YYYY HH.mm",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            ordinal: function (_) {
              return _ + ".";
            },
          };
        return e.default.locale(s, null, !0), s;
      })(t(12));
    },
    1787: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          i = {
            name: "mt",
            weekdays:
              "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
                "_"
              ),
            months:
              "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            monthsShort:
              "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "f’ %s",
              past: "%s ilu",
              s: "ftit sekondi",
              m: "minuta",
              mm: "%d minuti",
              h: "siegħa",
              hh: "%d siegħat",
              d: "ġurnata",
              dd: "%d ġranet",
              M: "xahar",
              MM: "%d xhur",
              y: "sena",
              yy: "%d sni",
            },
          };
        return a.default.locale(i, null, !0), i;
      })(t(12));
    },
    1788: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "my",
            weekdays:
              "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
                "_"
              ),
            months:
              "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            monthsShort:
              "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1789: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "nb",
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            ordinal: function (_) {
              return _ + ".";
            },
            weekStart: 1,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "noen sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dager",
              M: "en måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1790: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ne",
            weekdays:
              "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
                "_"
              ),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            months:
              "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
                "_"
              ),
            monthsShort:
              "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
                "_"
              ),
            relativeTime: {
              future: "%s पछि",
              past: "%s अघि",
              s: "सेकेन्ड",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "घन्टा",
              hh: "%d घन्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक वर्ष",
              yy: "%d वर्ष",
            },
            ordinal: function (_) {
              return ("" + _).replace(/\d/g, function (_) {
                return "०१२३४५६७८९"[_];
              });
            },
            formats: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1791: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "nl-be",
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1792: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "nl",
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            ordinal: function (_) {
              return _ + ".";
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              m: "een minuut",
              mm: "%d minuten",
              h: "een uur",
              hh: "%d uur",
              d: "een dag",
              dd: "%d dagen",
              M: "een maand",
              MM: "%d maanden",
              y: "een jaar",
              yy: "%d jaar",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1793: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "nn",
            weekdays:
              "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            ordinal: function (_) {
              return _ + ".";
            },
            weekStart: 1,
            relativeTime: {
              future: "om %s",
              past: "for %s sidan",
              s: "nokre sekund",
              m: "eitt minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              M: "ein månad",
              MM: "%d månadar",
              y: "eitt år",
              yy: "%d år",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1794: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          s = {
            name: "oc-lnc",
            weekdays:
              "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
                "_"
              ),
            weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            months:
              "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                "_"
              ),
            monthsShort:
              "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              LLL: "D MMMM [de] YYYY [a] H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "unas segondas",
              m: "una minuta",
              mm: "%d minutas",
              h: "una ora",
              hh: "%d oras",
              d: "un jorn",
              dd: "%d jorns",
              M: "un mes",
              MM: "%d meses",
              y: "un an",
              yy: "%d ans",
            },
            ordinal: function (_) {
              return _ + "º";
            },
          };
        return e.default.locale(s, null, !0), s;
      })(t(12));
    },
    1795: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "pa-in",
            weekdays:
              "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split(
                "_"
              ),
            months:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            monthsShort:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1796: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var i = (function (_) {
          return _ && "object" == typeof _ && "default" in _
            ? _
            : { default: _ };
        })(_);
        function a(_) {
          return _ % 10 < 5 && _ % 10 > 1 && ~~(_ / 10) % 10 != 1;
        }
        function e(_, e, i) {
          var t = _ + " ";
          switch (i) {
            case "m":
              return e ? "minuta" : "minutę";
            case "mm":
              return t + (a(_) ? "minuty" : "minut");
            case "h":
              return e ? "godzina" : "godzinę";
            case "hh":
              return t + (a(_) ? "godziny" : "godzin");
            case "MM":
              return t + (a(_) ? "miesiące" : "miesięcy");
            case "yy":
              return t + (a(_) ? "lata" : "lat");
          }
        }
        var t =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
              "_"
            ),
          n =
            "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
              "_"
            ),
          s = /D MMMM/,
          r = function (_, e) {
            return s.test(e) ? t[_.month()] : n[_.month()];
          };
        (r.s = n), (r.f = t);
        var d = {
          name: "pl",
          weekdays:
            "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
              "_"
            ),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          months: r,
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
            "_"
          ),
          ordinal: function (_) {
            return _ + ".";
          },
          weekStart: 1,
          yearStart: 4,
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: e,
            mm: e,
            h: e,
            hh: e,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: e,
            y: "rok",
            yy: e,
          },
          formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
        };
        return i.default.locale(d, null, !0), d;
      })(t(12));
    },
    1797: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "pt-br",
            weekdays:
              "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                "_"
              ),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            months:
              "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            ordinal: function (_) {
              return _ + "º";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "poucos segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1798: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "pt",
            weekdays:
              "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                "_"
              ),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
            months:
              "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            ordinal: function (_) {
              return _ + "º";
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "alguns segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1799: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ro",
            weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split(
              "_"
            ),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            months:
              "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split(
                "_"
              ),
            monthsShort:
              "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split(
                "_"
              ),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            relativeTime: {
              future: "peste %s",
              past: "acum %s",
              s: "câteva secunde",
              m: "un minut",
              mm: "%d minute",
              h: "o oră",
              hh: "%d ore",
              d: "o zi",
              dd: "%d zile",
              M: "o lună",
              MM: "%d luni",
              y: "un an",
              yy: "%d ani",
            },
            ordinal: function (_) {
              return _;
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1800: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t =
            "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
              "_"
            ),
          s =
            "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_"
            ),
          n =
            "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
          r =
            "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
          i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function d(_, e, t) {
          var n, s;
          return "m" === t
            ? e
              ? "минута"
              : "минуту"
            : _ +
                " " +
                ((n = +_),
                (s = {
                  mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
                  hh: "час_часа_часов",
                  dd: "день_дня_дней",
                  MM: "месяц_месяца_месяцев",
                  yy: "год_года_лет",
                }[t].split("_")),
                n % 10 == 1 && n % 100 != 11
                  ? s[0]
                  : n % 10 >= 2 &&
                    n % 10 <= 4 &&
                    (n % 100 < 10 || n % 100 >= 20)
                  ? s[1]
                  : s[2]);
        }
        var u = function (_, e) {
          return i.test(e) ? t[_.month()] : s[_.month()];
        };
        (u.s = s), (u.f = t);
        var a = function (_, e) {
          return i.test(e) ? n[_.month()] : r[_.month()];
        };
        (a.s = r), (a.f = n);
        var m = {
          name: "ru",
          weekdays:
            "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
              "_"
            ),
          weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          months: u,
          monthsShort: a,
          weekStart: 1,
          yearStart: 4,
          formats: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm",
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: d,
            mm: d,
            h: "час",
            hh: d,
            d: "день",
            dd: d,
            M: "месяц",
            MM: d,
            y: "год",
            yy: d,
          },
          ordinal: function (_) {
            return _;
          },
          meridiem: function (_) {
            return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера";
          },
        };
        return e.default.locale(m, null, !0), m;
      })(t(12));
    },
    1801: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var u = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          _ = {
            name: "rw",
            weekdays:
              "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split(
                "_"
              ),
            months:
              "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split(
                "_"
              ),
            relativeTime: {
              future: "mu %s",
              past: "%s",
              s: "amasegonda",
              m: "Umunota",
              mm: "%d iminota",
              h: "isaha",
              hh: "%d amasaha",
              d: "Umunsi",
              dd: "%d iminsi",
              M: "ukwezi",
              MM: "%d amezi",
              y: "umwaka",
              yy: "%d imyaka",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            ordinal: function (a) {
              return a;
            },
          };
        return u.default.locale(_, null, !0), _;
      })(t(12));
    },
    1802: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "sd",
            weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),
            months:
              "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),
            monthsShort:
              "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split(
                "_"
              ),
            weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s پوء",
              past: "%s اڳ",
              s: "چند سيڪنڊ",
              m: "هڪ منٽ",
              mm: "%d منٽ",
              h: "هڪ ڪلاڪ",
              hh: "%d ڪلاڪ",
              d: "هڪ ڏينهن",
              dd: "%d ڏينهن",
              M: "هڪ مهينو",
              MM: "%d مهينا",
              y: "هڪ سال",
              yy: "%d سال",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1803: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "se",
            weekdays:
              "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
                "_"
              ),
            months:
              "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            monthsShort:
              "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
                "_"
              ),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "MMMM D. [b.] YYYY",
              LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
              LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
            },
            relativeTime: {
              future: "%s geažes",
              past: "maŋit %s",
              s: "moadde sekunddat",
              m: "okta minuhta",
              mm: "%d minuhtat",
              h: "okta diimmu",
              hh: "%d diimmut",
              d: "okta beaivi",
              dd: "%d beaivvit",
              M: "okta mánnu",
              MM: "%d mánut",
              y: "okta jahki",
              yy: "%d jagit",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1804: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "si",
            weekdays:
              "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
                "_"
              ),
            months:
              "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
                "_"
              ),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            monthsShort:
              "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split(
                "_"
              ),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "a h:mm",
              LTS: "a h:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY MMMM D",
              LLL: "YYYY MMMM D, a h:mm",
              LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
            },
            relativeTime: {
              future: "%sකින්",
              past: "%sකට පෙර",
              s: "තත්පර කිහිපය",
              m: "මිනිත්තුව",
              mm: "මිනිත්තු %d",
              h: "පැය",
              hh: "පැය %d",
              d: "දිනය",
              dd: "දින %d",
              M: "මාසය",
              MM: "මාස %d",
              y: "වසර",
              yy: "වසර %d",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1805: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
          return _ && "object" == typeof _ && "default" in _
            ? _
            : { default: _ };
        })(_);
        function t(_) {
          return _ > 1 && _ < 5 && 1 != ~~(_ / 10);
        }
        function n(_, e, n, r) {
          var a = _ + " ";
          switch (n) {
            case "s":
              return e || r ? "pár sekúnd" : "pár sekundami";
            case "m":
              return e ? "minúta" : r ? "minútu" : "minútou";
            case "mm":
              return e || r ? a + (t(_) ? "minúty" : "minút") : a + "minútami";
            case "h":
              return e ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
              return e || r ? a + (t(_) ? "hodiny" : "hodín") : a + "hodinami";
            case "d":
              return e || r ? "deň" : "dňom";
            case "dd":
              return e || r ? a + (t(_) ? "dni" : "dní") : a + "dňami";
            case "M":
              return e || r ? "mesiac" : "mesiacom";
            case "MM":
              return e || r
                ? a + (t(_) ? "mesiace" : "mesiacov")
                : a + "mesiacmi";
            case "y":
              return e || r ? "rok" : "rokom";
            case "yy":
              return e || r ? a + (t(_) ? "roky" : "rokov") : a + "rokmi";
          }
        }
        var a = {
          name: "sk",
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          months:
            "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekStart: 1,
          yearStart: 4,
          ordinal: function (_) {
            return _ + ".";
          },
          formats: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
        };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1806: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "sl",
            weekdays:
              "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            months:
              "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
                "_"
              ),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            ordinal: function (_) {
              return _ + ".";
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            relativeTime: {
              future: "čez %s",
              past: "pred %s",
              s: "nekaj sekund",
              m: "minuta",
              mm: "%d minut",
              h: "ura",
              hh: "%d ur",
              d: "dan",
              dd: "%d dni",
              M: "mesec",
              MM: "%d mesecev",
              y: "leto",
              yy: "%d let",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1807: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "sq",
            weekdays:
              "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
                "_"
              ),
            months:
              "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            monthsShort:
              "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1808: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            words: {
              m: ["један минут", "једног минута"],
              mm: ["%d минут", "%d минута", "%d минута"],
              h: ["један сат", "једног сата"],
              hh: ["%d сат", "%d сата", "%d сати"],
              d: ["један дан", "једног дана"],
              dd: ["%d дан", "%d дана", "%d дана"],
              M: ["један месец", "једног месеца"],
              MM: ["%d месец", "%d месеца", "%d месеци"],
              y: ["једну годину", "једне године"],
              yy: ["%d годину", "%d године", "%d година"],
            },
            correctGrammarCase: function (_, e) {
              return _ % 10 >= 1 &&
                _ % 10 <= 4 &&
                (_ % 100 < 10 || _ % 100 >= 20)
                ? _ % 10 == 1
                  ? e[0]
                  : e[1]
                : e[2];
            },
            relativeTimeFormatter: function (_, e, t, n) {
              var i = a.words[t];
              if (1 === t.length)
                return "y" === t && e ? "једна година" : n || e ? i[0] : i[1];
              var r = a.correctGrammarCase(_, i);
              return "yy" === t && e && "%d годину" === r
                ? _ + " година"
                : r.replace("%d", _);
            },
          },
          t = {
            name: "sr-cyrl",
            weekdays:
              "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"),
            weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            months:
              "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split(
                "_"
              ),
            monthsShort:
              "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split(
                "_"
              ),
            weekStart: 1,
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              m: a.relativeTimeFormatter,
              mm: a.relativeTimeFormatter,
              h: a.relativeTimeFormatter,
              hh: a.relativeTimeFormatter,
              d: a.relativeTimeFormatter,
              dd: a.relativeTimeFormatter,
              M: a.relativeTimeFormatter,
              MM: a.relativeTimeFormatter,
              y: a.relativeTimeFormatter,
              yy: a.relativeTimeFormatter,
            },
            ordinal: function (_) {
              return _ + ".";
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1809: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            words: {
              m: ["jedan minut", "jednog minuta"],
              mm: ["%d minut", "%d minuta", "%d minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["%d sat", "%d sata", "%d sati"],
              d: ["jedan dan", "jednog dana"],
              dd: ["%d dan", "%d dana", "%d dana"],
              M: ["jedan mesec", "jednog meseca"],
              MM: ["%d mesec", "%d meseca", "%d meseci"],
              y: ["jednu godinu", "jedne godine"],
              yy: ["%d godinu", "%d godine", "%d godina"],
            },
            correctGrammarCase: function (_, e) {
              return _ % 10 >= 1 &&
                _ % 10 <= 4 &&
                (_ % 100 < 10 || _ % 100 >= 20)
                ? _ % 10 == 1
                  ? e[0]
                  : e[1]
                : e[2];
            },
            relativeTimeFormatter: function (_, t, a, n) {
              var r = e.words[a];
              if (1 === a.length)
                return "y" === a && t ? "jedna godina" : n || t ? r[0] : r[1];
              var i = e.correctGrammarCase(_, r);
              return "yy" === a && t && "%d godinu" === i
                ? _ + " godina"
                : i.replace("%d", _);
            },
          },
          t = {
            name: "sr",
            weekdays:
              "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split(
                "_"
              ),
            weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            months:
              "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split(
                "_"
              ),
            monthsShort:
              "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split(
                "_"
              ),
            weekStart: 1,
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              m: e.relativeTimeFormatter,
              mm: e.relativeTimeFormatter,
              h: e.relativeTimeFormatter,
              hh: e.relativeTimeFormatter,
              d: e.relativeTimeFormatter,
              dd: e.relativeTimeFormatter,
              M: e.relativeTimeFormatter,
              MM: e.relativeTimeFormatter,
              y: e.relativeTimeFormatter,
              yy: e.relativeTimeFormatter,
            },
            ordinal: function (_) {
              return _ + ".";
            },
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
          };
        return a.default.locale(t, null, !0), t;
      })(t(12));
    },
    1810: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          i = {
            name: "ss",
            weekdays:
              "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
                "_"
              ),
            months:
              "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            monthsShort:
              "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "nga %s",
              past: "wenteka nga %s",
              s: "emizuzwana lomcane",
              m: "umzuzu",
              mm: "%d emizuzu",
              h: "lihora",
              hh: "%d emahora",
              d: "lilanga",
              dd: "%d emalanga",
              M: "inyanga",
              MM: "%d tinyanga",
              y: "umnyaka",
              yy: "%d iminyaka",
            },
          };
        return a.default.locale(i, null, !0), i;
      })(t(12));
    },
    1811: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "sv-fi",
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
              "_"
            ),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            months:
              "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekStart: 1,
            yearStart: 4,
            ordinal: function (_) {
              var e = _ % 10;
              return "[" + _ + (1 === e || 2 === e ? "a" : "e") + "]";
            },
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY, [kl.] HH.mm",
              LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm",
              l: "D.M.YYYY",
              ll: "D. MMM YYYY",
              lll: "D. MMM YYYY, [kl.] HH.mm",
              llll: "ddd, D. MMM YYYY, [kl.] HH.mm",
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1812: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var a = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: "sv",
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
              "_"
            ),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            months:
              "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekStart: 1,
            yearStart: 4,
            ordinal: function (_) {
              var e = _ % 10;
              return "[" + _ + (1 === e || 2 === e ? "a" : "e") + "]";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd D MMM YYYY HH:mm",
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år",
            },
          };
        return a.default.locale(e, null, !0), e;
      })(t(12));
    },
    1813: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var i = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          _ = {
            name: "sw",
            weekdays:
              "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
                "_"
              ),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            months:
              "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekStart: 1,
            ordinal: function (a) {
              return a;
            },
            relativeTime: {
              future: "%s baadaye",
              past: "tokea %s",
              s: "hivi punde",
              m: "dakika moja",
              mm: "dakika %d",
              h: "saa limoja",
              hh: "masaa %d",
              d: "siku moja",
              dd: "masiku %d",
              M: "mwezi mmoja",
              MM: "miezi %d",
              y: "mwaka mmoja",
              yy: "miaka %d",
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
          };
        return i.default.locale(_, null, !0), _;
      })(t(12));
    },
    1814: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ta",
            weekdays:
              "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
                "_"
              ),
            months:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            weekdaysShort:
              "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            monthsShort:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm",
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1815: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "te",
            weekdays:
              "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
                "_"
              ),
            months:
              "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
                "_"
              ),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            monthsShort:
              "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
                "_"
              ),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            relativeTime: {
              future: "%s లో",
              past: "%s క్రితం",
              s: "కొన్ని క్షణాలు",
              m: "ఒక నిమిషం",
              mm: "%d నిమిషాలు",
              h: "ఒక గంట",
              hh: "%d గంటలు",
              d: "ఒక రోజు",
              dd: "%d రోజులు",
              M: "ఒక నెల",
              MM: "%d నెలలు",
              y: "ఒక సంవత్సరం",
              yy: "%d సంవత్సరాలు",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1816: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var u = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "tet",
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
              "_"
            ),
            months:
              "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            monthsShort:
              "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "iha %s",
              past: "%s liuba",
              s: "minutu balun",
              m: "minutu ida",
              mm: "minutu %d",
              h: "oras ida",
              hh: "oras %d",
              d: "loron ida",
              dd: "loron %d",
              M: "fulan ida",
              MM: "fulan %d",
              y: "tinan ida",
              yy: "tinan %d",
            },
          };
        return u.default.locale(a, null, !0), a;
      })(t(12));
    },
    1817: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "tg",
            weekdays:
              "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split(
                "_"
              ),
            months:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "баъди %s",
              past: "%s пеш",
              s: "якчанд сония",
              m: "як дақиқа",
              mm: "%d дақиқа",
              h: "як соат",
              hh: "%d соат",
              d: "як рӯз",
              dd: "%d рӯз",
              M: "як моҳ",
              MM: "%d моҳ",
              y: "як сол",
              yy: "%d сол",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1818: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "th",
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            months:
              "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
                "_"
              ),
            monthsShort:
              "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
                "_"
              ),
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา H:mm",
              LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
            },
            relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี",
            },
            ordinal: function (_) {
              return _ + ".";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1819: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "tk",
            weekdays:
              "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
                "_"
              ),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            months:
              "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
                "_"
              ),
            monthsShort:
              "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekStart: 1,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s soň",
              past: "%s öň",
              s: "birnäçe sekunt",
              m: "bir minut",
              mm: "%d minut",
              h: "bir sagat",
              hh: "%d sagat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir aý",
              MM: "%d aý",
              y: "bir ýyl",
              yy: "%d ýyl",
            },
            ordinal: function (_) {
              return _ + ".";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1820: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "tl-ph",
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
                "_"
              ),
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            monthsShort:
              "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1821: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "tlh",
            weekdays:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            months:
              "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            monthsShort:
              "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
                "_"
              ),
            weekdaysMin:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1822: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "tr",
            weekdays:
              "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
                "_"
              ),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            months:
              "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
                "_"
              ),
            monthsShort:
              "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekStart: 1,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl",
            },
            ordinal: function (a) {
              return a + ".";
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1823: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "tzl",
            weekdays:
              "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            months:
              "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            monthsShort:
              "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM [dallas] YYYY",
              LLL: "D. MMMM [dallas] YYYY HH.mm",
              LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1824: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          i = {
            name: "tzm-latn",
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
              "_"
            ),
            months:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            weekStart: 6,
            weekdaysShort:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            monthsShort:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            weekdaysMin:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn",
            },
          };
        return _.default.locale(i, null, !0), i;
      })(t(12));
    },
    1825: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "tzm",
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
              "_"
            ),
            months:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            weekStart: 6,
            weekdaysShort:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            monthsShort:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            weekdaysMin:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1826: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ug-cn",
            weekdays:
              "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split(
                "_"
              ),
            months:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            monthsShort:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
              LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
              LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            },
            relativeTime: {
              future: "%s كېيىن",
              past: "%s بۇرۇن",
              s: "نەچچە سېكونت",
              m: "بىر مىنۇت",
              mm: "%d مىنۇت",
              h: "بىر سائەت",
              hh: "%d سائەت",
              d: "بىر كۈن",
              dd: "%d كۈن",
              M: "بىر ئاي",
              MM: "%d ئاي",
              y: "بىر يىل",
              yy: "%d يىل",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1827: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          s =
            "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
              "_"
            ),
          t =
            "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
              "_"
            ),
          n = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function r(_, e, t) {
          var s, n;
          return "m" === t
            ? e
              ? "хвилина"
              : "хвилину"
            : "h" === t
            ? e
              ? "година"
              : "годину"
            : _ +
              " " +
              ((s = +_),
              (n = {
                ss: e ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: e ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: e ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років",
              }[t].split("_")),
              s % 10 == 1 && s % 100 != 11
                ? n[0]
                : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20)
                ? n[1]
                : n[2]);
        }
        var i = function (_, e) {
          return n.test(e) ? s[_.month()] : t[_.month()];
        };
        (i.s = t), (i.f = s);
        var d = {
          name: "uk",
          weekdays:
            "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
              "_"
            ),
          weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          months: i,
          monthsShort:
            "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekStart: 1,
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: "день",
            dd: r,
            M: "місяць",
            MM: r,
            y: "рік",
            yy: r,
          },
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm",
          },
        };
        return e.default.locale(d, null, !0), d;
      })(t(12));
    },
    1828: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "ur",
            weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
            months:
              "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
            monthsShort:
              "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split(
                "_"
              ),
            weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s بعد",
              past: "%s قبل",
              s: "چند سیکنڈ",
              m: "ایک منٹ",
              mm: "%d منٹ",
              h: "ایک گھنٹہ",
              hh: "%d گھنٹے",
              d: "ایک دن",
              dd: "%d دن",
              M: "ایک ماہ",
              MM: "%d ماہ",
              y: "ایک سال",
              yy: "%d سال",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1829: function (_, e, t) {
      _.exports = (function (a) {
        "use strict";
        var _ = (function (a) {
            return a && "object" == typeof a && "default" in a
              ? a
              : { default: a };
          })(a),
          e = {
            name: "uz-latn",
            weekdays:
              "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
                "_"
              ),
            months:
              "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            monthsShort:
              "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            ordinal: function (a) {
              return a;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            relativeTime: {
              future: "Yaqin %s ichida",
              past: "Bir necha %s oldin",
              s: "soniya",
              m: "bir daqiqa",
              mm: "%d daqiqa",
              h: "bir soat",
              hh: "%d soat",
              d: "bir kun",
              dd: "%d kun",
              M: "bir oy",
              MM: "%d oy",
              y: "bir yil",
              yy: "%d yil",
            },
          };
        return _.default.locale(e, null, !0), e;
      })(t(12));
    },
    1830: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "uz",
            weekdays:
              "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            months:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1831: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "vi",
            weekdays:
              "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split(
                "_"
              ),
            months:
              "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            monthsShort:
              "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split(
                "_"
              ),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY HH:mm",
              LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1832: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "x-pseudo",
            weekdays:
              "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
                "_"
              ),
            months:
              "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            monthsShort:
              "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
                "_"
              ),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            relativeTime: {
              future: "í~ñ %s",
              past: "%s á~gó",
              s: "á ~féw ~sécó~ñds",
              m: "á ~míñ~úté",
              mm: "%d m~íñú~tés",
              h: "á~ñ hó~úr",
              hh: "%d h~óúrs",
              d: "á ~dáý",
              dd: "%d d~áýs",
              M: "á ~móñ~th",
              MM: "%d m~óñt~hs",
              y: "á ~ýéár",
              yy: "%d ý~éárs",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1833: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          a = {
            name: "yo",
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            months:
              "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
                "_"
              ),
            weekStart: 1,
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            monthsShort:
              "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            relativeTime: {
              future: "ní %s",
              past: "%s kọjá",
              s: "ìsẹjú aayá die",
              m: "ìsẹjú kan",
              mm: "ìsẹjú %d",
              h: "wákati kan",
              hh: "wákati %d",
              d: "ọjọ́ kan",
              dd: "ọjọ́ %d",
              M: "osù kan",
              MM: "osù %d",
              y: "ọdún kan",
              yy: "ọdún %d",
            },
          };
        return e.default.locale(a, null, !0), a;
      })(t(12));
    },
    1834: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "zh-cn",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function (_, e) {
              switch (e) {
                case "W":
                  return _ + "周";
                default:
                  return _ + "日";
              }
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            relativeTime: {
              future: "%s内",
              past: "%s前",
              s: "几秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            meridiem: function (_, e) {
              var t = 100 * _ + e;
              return t < 600
                ? "凌晨"
                : t < 900
                ? "早上"
                : t < 1100
                ? "上午"
                : t < 1300
                ? "中午"
                : t < 1800
                ? "下午"
                : "晚上";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1835: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "zh-hk",
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            ordinal: function (_) {
              return _ + "日";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              m: "一分鐘",
              mm: "%d 分鐘",
              h: "一小時",
              hh: "%d 小時",
              d: "一天",
              dd: "%d 天",
              M: "一個月",
              MM: "%d 個月",
              y: "一年",
              yy: "%d 年",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1836: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "zh-tw",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function (_) {
              return _ + "日";
            },
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
    1837: function (_, e, t) {
      _.exports = (function (_) {
        "use strict";
        var e = (function (_) {
            return _ && "object" == typeof _ && "default" in _
              ? _
              : { default: _ };
          })(_),
          t = {
            name: "zh",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function (_, e) {
              switch (e) {
                case "W":
                  return _ + "周";
                default:
                  return _ + "日";
              }
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            relativeTime: {
              future: "%s后",
              past: "%s前",
              s: "几秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            meridiem: function (_, e) {
              var t = 100 * _ + e;
              return t < 600
                ? "凌晨"
                : t < 900
                ? "早上"
                : t < 1100
                ? "上午"
                : t < 1300
                ? "中午"
                : t < 1800
                ? "下午"
                : "晚上";
            },
          };
        return e.default.locale(t, null, !0), t;
      })(t(12));
    },
  },
]);
